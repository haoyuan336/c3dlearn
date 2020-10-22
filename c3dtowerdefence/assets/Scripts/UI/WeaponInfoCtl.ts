import { _decorator, Component, Node, v3, view, Tween, SpriteComponent, Color, instantiate, Prefab, LabelComponent, SpriteFrame, game, UIComponent, isValid, ScrollViewComponent, find, Game, JsonAsset } from 'cc';
import { GameInstance } from '../GameInstance';
import { Tool } from '../util/Tool';
// import { GameController } from './../GameController';
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

    // @property({ type: GameController })
    // public gameController: GameController = null;

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

    @property({ type: Node })
    public scrollviewNode: Node = null;
    private weaponIndoCellNodeList: Node[] = [];

    @property({ type: Node })
    public currentPowerLabel: Node = null;

    @property({type: JsonAsset})
    public gameConfigJsonAsset: JsonAsset = null;

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

        this.node.on("refer-current-power-label", (power: number) => {
            this.currentPowerLabel.getComponent(LabelComponent).string = Tool.convertNumToK(power);

            this.referCurrentRedHeartCountUI();
            for (let i = 0; i < this.weaponIndoCellNodeList.length; i++) {
                let node = this.weaponIndoCellNodeList[i];
                node.getComponent(WeaponUpdateCellPrefab).referUILabel();
            }
        })

        // this.node.on("enter-game", ()=>{
        this.initWeaponData();
        // })
        //
    }
    public referCurrentRedHeartCountUI() {
        // let gameController = this.gameController.getComponent(GameController);
        let cost = GameInstance.getInstance().getPlayerData().getAddOneRedHeartCostGoldCount() * this.currentChooseRate;
        this.addRedHeartCostGoldCount.getComponent(LabelComponent).string = Tool.convertNumToK(cost);
        let currentGoldCount =  GameInstance.getInstance().getPlayerData().getPowerCount();
        // console.log("current gold count", currentGoldCount);
        console.log("cost", cost);
        if (currentGoldCount < cost) {
            this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameGray;
        } else {
            this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameLight;

        }
        this.currentInitRedHeartCountLabel.getComponent(LabelComponent).string =  GameInstance.getInstance().getPlayerData().getCurrentInitRedHeartCount() + '';
        this.chooseAddRedHeartCountLabel.getComponent(LabelComponent).string = "+" + Tool.convertNumToK(this.currentChooseRate);
        this.currentPowerLabel.getComponent(LabelComponent).string = Tool.convertNumToK( GameInstance.getInstance().getPlayerData().getPowerCount());
    }
    public initWeaponData() {
        //初始化当前武器的相关信息
        // let gameController = this.gameController.getComponent(GameController);
        // let gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
        let towerLevelData =  GameInstance.getInstance().getPlayerData().getCurrentTowersLocalLevelData();



        for (let i = 0; i < towerLevelData.length; i++) {
            let data = towerLevelData[i];
            let node = instantiate(this.updateWeaponInfoCellPrefab);
            node.parent = this.weaponCellParentNode;
            node.getComponent(WeaponUpdateCellPrefab).setData(data, this.gameConfigJsonAsset.json, this);
            node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
            this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5 + 10;
            this.weaponIndoCellNodeList.push(node);
        }
       GameInstance.getInstance().getGameCtlNode().on("update-gold-label", () => {
            this.referCurrentRedHeartCountUI();
        })
    }





    onButtonClick(event, customData) {
        super.onButtonClick(event, customData)
        find("GameController").emit("player-button-click-audio");

        switch (customData) {
            case 'add-heart-button':
                //增加红心的按钮
                // let gameController = this.gameController.getComponent(GameController);
                let currentGoldCount = GameInstance.getInstance().getPlayerData().getPowerCount();
                let cost = GameInstance.getInstance().getPlayerData().getAddOneRedHeartCostGoldCount() * this.currentChooseRate;
                if (currentGoldCount < cost) {
                    this.node.emit("gold-not-enough");
                } else {
                    // gameController.playerData.addGoldCount(-cost);
                    GameInstance.getInstance().addPowerCount(-cost)
                    GameInstance.getInstance().getPlayerData().addLocalInitRedHeartCount(this.currentChooseRate);//
                    this.node.emit("refer-red-heart-label");
                }
                this.referCurrentRedHeartCountUI();

                break;

            case 'bg-node-click':
                //关闭
                //
                this.node.emit("close-tower-info-layer");
                break;
            default:
                break;
        }
    }
    weaponActived(node: Node) {
        //有武器被激活了'\
        let offSetY = node.position.y;
        if (isValid(this.scrollviewNode)) {
            console.log("scrollview pos", offSetY);
            // offSetY = -500;
            // this.scrollviewNode.getComponent(ScrollViewComponent).scrollToOffset(v3(0, offSetY * -1 + 200, 0), 0.2);
        }
        // let children = this.weaponCellParentNode.children;
        // for (let i = 0 ; children.length ; i ++){
        //     if (children[i].uuid === node.uuid){
        //         offSetY = 
        //     }
        // }
    }
}
