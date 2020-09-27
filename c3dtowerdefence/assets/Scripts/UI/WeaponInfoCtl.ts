import { _decorator, Component, Node, v3, view, Tween, SpriteComponent, Color, instantiate, Prefab, LabelComponent, SpriteFrame, game } from 'cc';
import { GameController } from './../GameController';
import { WeaponUpdateCellPrefab } from './../UI/WeaponUpdateCellPrefab';
import { State } from './../util/State';
import { InfoLayerCtlBase } from './InfoLayerCtlBase';
const { ccclass, property } = _decorator;

@ccclass('WeaponInfoCtl')
export class WeaponInfoCtl extends InfoLayerCtlBase {
    // @property({ type: Node })
    // public blockBgNode: Node = null;

    // @property({ type: Node })
    // public weaponInfoNode: Node = null;

    // @property({ type: Node })
    // public weaponInfoButton: Node = null;
    // private state: State = new State();

    @property({ type: GameController })
    public gameController: GameController = null;

    @property({ type: Prefab })
    public updateWeaponInfoCellPrefab: Prefab = null;

    @property({ type: Node })
    public weaponCellParentNode: Node = null;


    @property({ type: Node })
    public currentInitRedHeartCountLabel: Node = null; //当前的红心的个数的label
    @property({ type: Node })
    public addRedHeartCostGoldCount: Node = null; //增加一颗红心需要的金币个数的label 
    @property({ type: SpriteFrame })
    public addRedHeartButtonSpriteFrameLight: SpriteFrame = null; //增加一颗红心的精灵帧
    @property({ type: SpriteFrame })
    public addRedHeartButtonSpriteFrameGray: SpriteFrame = null; //增加一颗红心的精灵帧灰色
    @property({ type: Node })
    public addRedHeartButton: Node = null; //增加一颗红心的按钮

    @property({ type: Node })
    public chooseAddRedHeartCountLabel: Node = null; //选择的增加的红心的个数

    private weaponIndoCellNodeList: Node[] = [];

    private currentChooseRate: number = 0; //当前选择的倍数

    start() {
        super.start();
        // this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);
    
     
        this.node.on("refer-choose-rate-cost", (chooseRate) => {
            console.log("刷新当前选择的倍数", chooseRate);
            console.log("weapon indo cell node list", this.weaponIndoCellNodeList);
            for (let i = 0; i < this.weaponIndoCellNodeList.length; i++) {
                let node = this.weaponIndoCellNodeList[i];
                node.getComponent(WeaponUpdateCellPrefab).updateChooseRate(chooseRate);
            }
            // this.addRedHeartCountGoldCount.getComponent(LabelComponent).string

            this.currentChooseRate = chooseRate;
            this.referCurrentRedHeartCountUI();
        })
      
        
        // this.node.on("enter-game", ()=>{
        this.initWeaponData();
        // })
        //
    }
    public referCurrentRedHeartCountUI() {
        let gameController = this.gameController.getComponent(GameController);
        let cost = gameController.playerData.getAddOneRedHeartCostGoldCount() * this.currentChooseRate;
        this.addRedHeartCostGoldCount.getComponent(LabelComponent).string = cost + '';
        let currentGoldCount = gameController.playerData.getCurrentGoldCount();
        console.log("current gold count", currentGoldCount);
        console.log("cost", cost);
        if (currentGoldCount < cost) {
            this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameGray;
        } else {
            this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameLight;

        }
        this.currentInitRedHeartCountLabel.getComponent(LabelComponent).string = gameController.playerData.getCurrentInitRedHeartCount() + '';
        this.chooseAddRedHeartCountLabel.getComponent(LabelComponent).string = "+" + this.currentChooseRate + "";
    }
    public initWeaponData() {
        //初始化当前武器的相关信息
        let gameController = this.gameController.getComponent(GameController);
        let gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
        let towerLevelData = this.gameController.playerData.getCurrentTowersLocalLevelData();



        for (let i = 0; i < towerLevelData.length; i++) {
            let data = towerLevelData[i];
            let node = instantiate(this.updateWeaponInfoCellPrefab);
            node.parent = this.weaponCellParentNode;
            node.getComponent(WeaponUpdateCellPrefab).setData(data, gameController, gameConfig);
            node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
            this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5 + 10;
            this.weaponIndoCellNodeList.push(node);
        }
        this.gameController.node.on("update-gold-label", ()=>{
            this.referCurrentRedHeartCountUI();
        })
    }
   
   
  
    
 
    onButtonClick(event, customData) {
        super.onButtonClick(event, customData)
        switch (customData) {
            case 'add-heart-button':
                //增加红心的按钮
                let gameController = this.gameController.getComponent(GameController);
                let currentGoldCount = gameController.playerData.getCurrentGoldCount();
                let cost = gameController.playerData.getAddOneRedHeartCostGoldCount() * this.currentChooseRate;
                if (currentGoldCount < cost) {
                    this.node.emit("gold-not-enough");
                } else {
                    gameController.playerData.addGoldCount(-cost);
                    gameController.playerData.addLocalInitRedHeartCount(this.currentChooseRate);//
                    this.node.emit("refer-red-heart-label");
                }
                this.referCurrentRedHeartCountUI();

                break;
            default:
                break;
        }
    }
}
