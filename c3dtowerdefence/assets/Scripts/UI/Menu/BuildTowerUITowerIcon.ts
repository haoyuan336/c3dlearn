import { _decorator, Component, Node, Prefab, find, instantiate, v3, LabelComponent } from 'cc';
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
    onLoad() {
        this.gameConfig = find("GameController").getComponent(GameController).getGameConfig().json;

    }
    start() {
        // Your initialization goes here.
    }
    init(type: number) {
        this.towerType = type;
        // console.log("初始化塔的类型", type, this.gameConfig);
        let node = instantiate(this.towerShowAnimList[type])
        node.scale = v3(0.5, 0.5, 0.5);
        node.parent = this.showTowerAnimLayer;
        //根据type 取处数据
        // let configList = [];
        for (let i in this.gameConfig) {
            if (i.indexOf("Tower") > -1) {
                // configList.push(this.gameConfig[i]);
                if (this.gameConfig[i].index === type) {
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
        super.init(this.gameConfig);
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
