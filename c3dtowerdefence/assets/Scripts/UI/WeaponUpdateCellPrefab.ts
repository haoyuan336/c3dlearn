import { _decorator, Component, Node, SpriteFrame, loader, SpriteComponent, LabelComponent } from 'cc';
import { BaseObject } from '../BaseObject';
import { GameController } from '../GameController';
import { WeaponInfoCtl } from './WeaponInfoCtl';
const { ccclass, property } = _decorator;

@ccclass('WeaponUpdateCellPrefab')
export class WeaponUpdateCellPrefab extends BaseObject {
    @property({ type: Node })
    public currentDamageLabel: Node = null;
    @property({ type: Node })
    public addDamageLabel: Node = null; //需要增加了攻击力的label
    @property({ type: Node })
    public costGoldLabel: Node = null; //需要消耗的金币
    @property({ type: Node })
    public weaponIconNode: Node = null; //
    @property({ type: SpriteFrame })
    public updateButtonSpriteFrameGray: SpriteFrame = null;
    @property({ type: SpriteFrame })
    public updateButtonSpriteFrameGreen: SpriteFrame = null;
    @property({ type: Node })
    public updateButtonNode: Node = null;

    @property({ type: SpriteFrame })
    public activeButtonSpriteFrameGray: SpriteFrame = null;

    @property({ type: SpriteFrame })
    public activeButtonSpriteFrameLight: SpriteFrame = null;

    @property({ type: Node })
    public duidiAttackIcon: Node = null;
    @property({ type: Node })
    public duikonngAttackIcon: Node = null;

    private currentChooseRate: number = 0;
    private weaponInfoCtl: WeaponInfoCtl = null;
    start() {
    }
    // init(gameConfig: Object){
    //     super.init(gameConfig);
    // }
    // public show
    // public referCurrentDamage() {
    //     //刷新当前的攻击值
    //     // this.currentDamageLabel.getComponent(LabelComponent).string = this.getCurrentAttackNum() + '';

    // }

    public updateChooseRate(rateNum: number) {
        //更新当前选择的倍数
        // console.log("更新当前的倍数", rateNum);
        this.currentChooseRate = rateNum;
        this.referUILabel();
    }
    public setData(data: Object, gameController: GameController, gameConfig: Object, weaponCtl: WeaponInfoCtl) {
        console.log("初始化数据", data);
        // let iconStr = data['IconSprteFrame'];
        // this.gameController.uiController.on("on-gold-count-refer-event", ()=>{
        //     //注册当前金币个数改变的消息
        // });
        this.weaponInfoCtl = weaponCtl;
        gameController.node.on("update-gold-label", () => {
            //根据当前的
            this.referUILabel();//更新uiLabel

        });
        let towerType = data['TowerType'];
        this.objectType = towerType;
        super.init(gameConfig, gameController);
        let isActive = data['isActive'];
        if (isActive) {
            this.showWeaponIcon();
        }
        this.referUILabel();

    }
    showWeaponIcon() {
        let iconStr = this.getIconSprteFrame();
        // let iconStr = data['IconSprteFrame'];
        loader.loadRes(iconStr + '/spriteFrame', SpriteFrame, (err, result) => {
            if (!err) {
                this.weaponIconNode.getComponent(SpriteComponent).spriteFrame = result;
            }
            console.log("err", err);
        });
    }
    referUILabel() {
        let isActive = this.getWeaponIsActive();
        let currentGoldCount = this.gameController.playerData.getCurrentGoldCount();
        let canAttackTypeList = this.getCanAttackMoveTypeList();
        for (let i = 0; i < canAttackTypeList.length; i++) {
            if (canAttackTypeList[i] === 'Walk') {
                this.duidiAttackIcon.active = true;
            }
            if (canAttackTypeList[i] === 'Fly') {
                this.duikonngAttackIcon.active = true;
            }
        }
        if (!isActive) {
            //如果未激活
            let firstNeedActiveTower = this.gameController.playerData.getFirstNeedToActiveTowerIndex();
            //获取第一个需要激活的塔的index
            console.log("first need active tower", firstNeedActiveTower);
            let activeCostGoldCount = this.getActiveCostGoldCount();
            this.costGoldLabel.getComponent(LabelComponent).string = activeCostGoldCount + '';

            // let currentGold
            if (firstNeedActiveTower === this.towerIndexType && activeCostGoldCount <= currentGoldCount) {
                //当前的金币个数要大于等于需要的金币个数
                this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.activeButtonSpriteFrameLight;
            } else {
                this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.activeButtonSpriteFrameGray;
                //如果不能激活，那么需要显示灰色的按钮
            }
            return;
        }
        let updateCostCount = this.getUpdateLocalLevelCost();
        this.currentDamageLabel.getComponent(LabelComponent).string = this.getLocalDamageNum() + '';
        this.costGoldLabel.getComponent(LabelComponent).string = updateCostCount + '';
        this.addDamageLabel.getComponent(LabelComponent).string = "+" + this.getNextLocallevelAddDamage() + '';
        if (currentGoldCount < updateCostCount) {
            // this.updateButtonSpriteFrameGray
            this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrameGray;
        } else {
            this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrameGreen;
        }
    }
    onButtonClick(event, customData) {
        switch (customData) {
            case 'update-button':
                console.log("升级按钮");
                let isActive = this.getWeaponIsActive();
                let currentGoldCount = this.gameController.playerData.getCurrentGoldCount(); //当前的金币个数

                if (isActive) {
                    let updateCost = this.getUpdateLocalLevelCost(); //获取升级下一级需要的金币数
                    if (updateCost <= currentGoldCount) {
                        this.updateLocalLevel(this.currentChooseRate);
                        this.gameController.playerData.addGoldCount(-updateCost);
                        this.referUILabel();
                    } else {

                    }
                } else {
                    let activeCost = this.getActiveCostGoldCount();
                    if (activeCost <= currentGoldCount) {
                        this.activeWeapon();
                        this.gameController.playerData.addGoldCount(-activeCost);
                        this.referUILabel();
                        this.showWeaponIcon();
                        this.weaponInfoCtl.node.emit("refer-current-tower-menu-ui");
                        this.weaponInfoCtl.weaponActived(this.node); //有weapon 被激活了
                    }
                }


                break;
            case 'WeaponBg':
                // console.log("武器背景");
                //显示塔的详细信息

                // this.node.parent.emit("show-tower-info", this);
                this.weaponInfoCtl.node.emit("show-tower-info", this);
                break;
            default:
                break;
        }
    }
    // getUpdateCost(){

    // }
    getUpdateLocalLevelCost(): number {
        let cost = super.getUpdateLocalLevelCost();
        cost *= this.currentChooseRate;
        //首先获取本身需要消耗的金币个数 //加上倍数
        return cost;
    }
    getNextLocallevelAddDamage(): number {
        let localDamage = super.getNextLocallevelAddDamage();
        localDamage *= this.currentChooseRate;
        return localDamage;
    }
}
