import { _decorator, Component, Node, view, Tween, v3, Prefab, instantiate } from 'cc';
import { BaseObject } from '../BaseObject';
import { GameController } from '../GameController';
import { State } from '../util/State';
import { EnemyInfoCellPrefab } from './EnemyInfoCellPrefab';
import { InfoLayerCtlBase } from './InfoLayerCtlBase';
const { ccclass, property } = _decorator;

@ccclass('EnemyInfoLayerCtl')
export class EnemyInfoLayerCtl extends InfoLayerCtlBase {
    @property({ type: GameController })
    public gameController: GameController = null;
    @property({ type: Node })
    public enemyInfoNodeParentNode: Node = null;

    @property({ type: Prefab })
    public enemyInfoCellPrefab: Node = null;

    private enemyInfoCellMap: Object = {};
    start() {
        super.start();
        // Your initialization goes here.
        // let screenSize = view.getVisibleSize();
        this.initEnemyData();
        this.node.on("refer-enemy-data", this.referEnemyData.bind(this), this);
        this.node.on("refer-enemy-info-cell", (enemyType: string) => {
            console.log("`激活了某个敌人`", enemyType);
            console.log("enemy info cell map", this.enemyInfoCellMap);
            if (this.enemyInfoCellMap[enemyType]){
                console.log("刷新这个敌人的UI")
                // this.enemyInfoCellMap[enemyType].getComponent(EnemyInfoCellPrefab).referUI();
                let node = this.enemyInfoCellMap[enemyType];
                node.getComponent(EnemyInfoCellPrefab).referUI();
            }
        })
    }
    initEnemyData() {
        // let currentActiveEnemyList = this.gameController.playerData.getCurrentActiveEnemyList();
        let gameConfig = this.gameController.getGameConfig().json;
        let enemyList = [];
        for (let i in gameConfig) {
            let data = gameConfig[i];
            if (i.indexOf("Enemy") > -1 || i.indexOf("Boss") > -1) {
                console.log("iu", i);
                console.log("data", data);
                enemyList.push(data);
            }
        }
        //排序
        console.log("enemy list", enemyList);
        enemyList = enemyList.sort((a, b) => {
            return a.EnemyIndex - b.EnemyIndex;
        });
        console.log("enemy list", enemyList);

        for (let i = 0; i < enemyList.length; i++) {
            console.log("data = ", enemyList[i]);

            let node = instantiate(this.enemyInfoCellPrefab);
            node.parent = this.enemyInfoNodeParentNode;
            // console.log("data", enemyList[i]);
            let enemyType = enemyList[i]['EnemyType'];
            console.log("enemy type", enemyType);
            node.getComponent(EnemyInfoCellPrefab).init(this.gameController, {
                enemyType: enemyType
            });
            node.getComponent(EnemyInfoCellPrefab).referUI();
            let x = i % 3;
            let y = Math.floor(i / 3);
            console.log("x", x);
            console.log("y = ", y);
            node.position = v3((3 - 1) * -0.5 * 100 + x * 100, y * -100 - 70, 0);
            this.enemyInfoNodeParentNode.height = node.position.y * -1 + 70;
            this.enemyInfoCellMap[enemyType] = node;
        }
    }
    referEnemyData() {

    }
    onButtonClick(event, customData) {
        super.onButtonClick(event, customData);
        if (customData === 'bg-node-click'){
            this.node.emit("close-monster-info-layer")
        }
    }
    // showMonsterInfoLayer(target: BaseObject){
    //     // this.showMonsterInfoLayer
    // }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
