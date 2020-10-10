import { _decorator, Component, Node, Prefab, find, instantiate, v3, LabelComponent, isValid } from 'cc';
import { GameController } from '../../GameController';
import { BaseObject } from '../../BaseObject';
const { ccclass, property } = _decorator;

@ccclass('BuildTowerUITowerIcon')
export class BuildTowerUITowerIcon extends BaseObject {

    @property({ type: Node })
    public costGoldLabel: Node = null;
    @property({ type: Prefab })
    public towerShowAnimList: Prefab[] = [];

    @property({ type: Node })
    public showTowerAnimLayer: Node = null;
    public gameConfig: {} = undefined;
    public currentBuildCost: number = null; //当前的建造消耗
    public towerType: number = null; //塔的类型
    public currentAnimNode: Node = null;//当前播放动画的类型
    onLoad() {
        // this.gameConfig = find("GameController").getComponent(GameController).getGameConfig().json;

    }
    start() {
        // Your initialization goes here.
    }
    init(type: number, gameController: GameController, gameConfig: Object) {
        this.gameConfig = gameConfig;
        this.towerType = type;
        // console.log("初始化塔的类型", type, this.gameConfig);
        if (isValid(this.currentAnimNode)) {
            this.currentAnimNode.destroy();
        }
        let node = instantiate(this.towerShowAnimList[type]);
        this.currentAnimNode = node;
        node.scale = v3(1, 1, 1);
        node.parent = this.showTowerAnimLayer;
        //根据type 取处数据
        // let configList = [];
        console.log("type", type);
        for (let i in this.gameConfig) {
            if (i.indexOf("Tower") > -1) {
                // configList.push(this.gameConfig[i]);
                if (this.gameConfig[i].Index === type) {
                    this.objectType = i;
                }
            }
        }
        // console.log("config", configList);
        // for (let i in configList) {
        //     if (configList[i].index === type) {
        //         // console.log("找到了相关数据");
        //         // let costCount = configList[i].BuildCost;
        //         // this.costGoldLabel.getComponent(LabelComponent).string = costCount;
        //         // this.currentBuildCost = costCount;
        //         this.objectType = i;
        //         break;
        //     }
        // }
        console.log('object type', this.objectType);
        super.init(this.gameConfig, gameController);
        this.costGoldLabel.getComponent(LabelComponent).string = this.buildCost + '';

    }
    getCurrentBuildCost() {
        //返回当前的建造消耗
        return this.buildCost;
    }
    getTowerType() {
        return this.towerType;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
