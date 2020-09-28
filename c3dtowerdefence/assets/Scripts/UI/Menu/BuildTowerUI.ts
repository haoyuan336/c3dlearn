import { _decorator, Component, Node, ButtonComponent, Tween, Vec3, v3, find, Prefab, instantiate, v2, isValid } from 'cc';
const { ccclass, property } = _decorator;
import { MenuUIBase } from './MenuUIBase'
// import { GameController } from '../../GameController';
import { BuildTowerUITowerIcon } from './BuildTowerUITowerIcon';
import { GameController } from '../../GameController';
@ccclass('BuildTowerUI')
export class BuildTowerUI extends MenuUIBase {

    // @property({ type: Prefab })
    // public towerShowAnimPrefabList: Prefab[] = [];

    @property({ type: Prefab })
    public buildTowerUITowerIcon: Prefab = null;

    public gameConfig: Object = null;

    public towerIconNodeList: Node[] = [];
    // public gameController: GameController;
    init(gameConfig, gameCtl: GameController) {
        this.gameController = gameCtl;
        // let currentLevelNum = gameCtl.getCurrentLevelNum();
        // let currentLevelData = gameCtl.getGameConfig().json['Level_' + currentLevelNum];
        // let activedTowerIndexList: number[] = currentLevelData.ActivedTower;
        this.gameConfig = gameConfig;
        super.init(gameConfig, gameCtl);
        this.referCurrentUI();
        // this.node.on("refer-current-ui", this.referCurrentUI.bind(this), this);
    }
        // this.node
    start() {
    }
    onEnable(){
        // this.referCurrentUI();
    }
    referCurrentUI() {
        let activedTowerIndexList: number[] = this.gameController.playerData.getCurrentActiveTowerList();


        let length = activedTowerIndexList.length;
        let dis = length - this.towerIconNodeList.length;
        console.log("dis", dis);
        if (dis > 0) {
            for (let i = 0; i < dis; i++) {
                let node = instantiate(this.buildTowerUITowerIcon);
                node.addComponent(ButtonComponent);
                node.on("click", this.onButtonClick.bind(this));
                node.parent = this.node;
                this.towerIconNodeList.push(node);
            }
        } else if (dis < 0) {
            for (let i = 0; i < Math.abs(dis); i++) {
                this.towerIconNodeList.pop().destroy();
            }
        }

        for (let i = 0; i < this.towerIconNodeList.length; i++) {
            // let node = instantiate(this.towerShowAnimPrefabList[activedTowerIndexList[i]]);
            // let node = instantiate(this.buildTowerUITowerIcon);
            let node = this.towerIconNodeList[i];
            node.name = "tower_" + activedTowerIndexList[i];
            // node.addComponent(ButtonComponent);
            // node.on("click", this.onButtonClick.bind(this));
            // node.parent = this.node;
            node.getComponent(BuildTowerUITowerIcon).init(activedTowerIndexList[i], this.gameController, this.gameConfig);
            let scale = 76 / node.width;
            node.scale = v3(scale, scale, 1);
            let v = v2(0, 1);
            v = v.rotate(Math.PI * 2 / length * i).normalize();
            let pos = v.multiplyScalar(60);
            node.setPosition(v3(pos.x, pos.y, 0));

        }
        console.log("build tower ui");
        // super.start();
        this.node.getChildByName("BuildTowerBgNode").on("click", this.onButtonClick.bind(this));
    }
    onButtonClick(event: ButtonComponent, customData) {
        if (customData === 'close') {
            this.state.setState("close-ui");

            return;
        }
        let nodeName = event.node.name;
        if (nodeName === 'BuildTowerBgNode') {
            this.state.setState("close-ui");
        } else {
            let towerIconCom = event.node.getComponent(BuildTowerUITowerIcon);
            if (towerIconCom) {
                let towerType = towerIconCom.getTowerType();
                let buildCost = towerIconCom.getCurrentBuildCost();
                let currentGoldCount = this.gameController.playerData.getCurrentGoldCount();
                console.log("current gold count", currentGoldCount);
                if (buildCost <= currentGoldCount && isValid(this.targetNode)) {
                    //金币数目够 可以建造塔了
                    this.gameController.playerData.addGoldCount(buildCost * -1);
                    this.state.setState("close-ui");
                    find("GameController").emit("build-one-tower", towerType, this.targetNode);
                } else {
                    find("Canvas").emit('gold-not-enough');
                }
            }
            // let index = nodeName.substring(nodeName.length - 1, nodeName.length);
            // console.log("index", index);
            // this.state.setState('close-ui');
            // find("GameController").emit("build-one-tower", index, this.targetNode);
        }

    }
}
