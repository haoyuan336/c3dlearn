import { _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, random, Vec3 } from 'cc';
import { State } from './util/State';
import { EnemyBase } from './Enemys/EnemyBase'
import { GroundMapCtl } from './GroundMapCtl';
import { GroundTiled } from './GroundTiled/GroundTiled';
import My2dArray from './util/My2Array';
import { WinGoldAnimEffect } from './Effect/WinGoldAnimEffect';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('EnemyController')
export class EnemyController extends Component {

    @property({ type: JsonAsset })
    public gameConfigRes: JsonAsset = null;

    @property({ type: Prefab })
    public enemysPrefabList: Prefab[] = [];

    private gameConfig: {} = null;
    private currentLevelNum = 0;
    // private currentWaveMaxEnemyCount = 0; //当前波次最大的敌人数
    private currentWaveIndex: number = 0;
    private waveData: {} = null;
    private state: State = new State();
    private addEnemyDuraction: number = 1;
    private enemyNodeList: Node[] = [];
    private currentRandomEnemyTypeList = [];
    @property({ type: Node })
    public startPosNodeList: Node[] = [];

    // @property({ type: Node })
    public endPos: Vec3 = null;

    @property({ type: Node })
    public enemyHealthBarCtlNode: Node = null;



    private currentWaveTime: number = 0;
    private currentWaveDuraction: number = 1;
    @property({ type: Prefab })
    public goldAnim3dPrefab: Prefab = null;
    public gameController: GameController = null;
    start() {
        // Your initialization goes here.
        this.gameConfig = this.gameConfigRes.json;
        // this.state.setState('run');
        this.waveData = this.gameConfig['Level_' + this.currentLevelNum];
        this.gameController = this.node.getComponent(GameController);
        this.endPos = v3(0, 0, 0);


        this.state.addState("enter-next-wave", () => {
            if (this.currentWaveIndex == this.waveData['EnemyType'].length) {
                this.state.setState("add-enemt-over");
                console.log("游戏结束");
                return;
            }

            this.currentRandomEnemyTypeList = this.waveData["EnemyType"][this.currentWaveIndex];
            this.addEnemyDuraction = this.waveData['AddEnemyDuraction'][this.currentWaveIndex];
            this.node.emit("refer-current-wave", this.currentWaveIndex);

            this.addOneWaveEnemy().then(() => {
                this.currentWaveIndex++;

                this.scheduleOnce(() => {
                    this.state.setState("enter-next-wave");
                }, this.addEnemyDuraction)
            });


        })
        // this.node.on("player-click-game", () => {
        //     this.state.setState("enter-next-wave");
        // });
    }
    startGame() {
        this.state.setState("enter-next-wave");
    }


    addOneWaveEnemy() {
        //增加一波敌人
        let promiseList = [];
        let addEnemyCount = 0;
        let indexList: Vec2[] = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
        let nodeMapList: My2dArray<Node> = this.node.getComponent(GroundMapCtl).getMapNodeList();
        let randomIndex = Math.round(Math.random() * (indexList.length - 1));
        let enemyTypeIndex = 0;
        let waveAddEnemyCount = 0;
        let maxEnemyCount = 0;
        for (let i = 0; i < this.currentRandomEnemyTypeList.length; i++) {
            maxEnemyCount += this.currentRandomEnemyTypeList[i].count;
        }
        // console.log("max enemy count", maxEnemyCount);
        if (maxEnemyCount >= indexList.length) {
            console.error("数据错误");
            return;
        }
        while (addEnemyCount < maxEnemyCount) {
            // addEnemyCount ++;
            // console.log("random index", randomIndex);
            if (randomIndex >= indexList.length) {
                randomIndex = 0;
            }
            let indexV2 = indexList[randomIndex];
            let node = nodeMapList.getValue(indexV2.x, indexV2.y);
            if (node && node.getComponent(GroundTiled)) {
                let groundTiled = node.getComponent(GroundTiled);
                if (groundTiled.getIsVoid()) {
                    // console.log("找到了一个空位置");
                    // let currentEnemyType = this.currentRandomEnemyTypeList
                    // let enemyNode = instantiate(this.enenm)
                    let waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
                    let type = waveData.type;
                    let count = waveData.count;
                    if (waveAddEnemyCount >= count) {
                        waveAddEnemyCount = 0;
                        enemyTypeIndex++;
                    }
                    let enemyNode = instantiate(this.enemysPrefabList[type]);
                    enemyNode.parent = this.node;
                    enemyNode.position = v3(node.position.x, 20, node.position.z);
                    enemyNode.active = false;

                    enemyNode.getComponent(EnemyBase).init(this.gameConfig, node.position, this.endPos);
                    // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
                    promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this));
                    addEnemyCount++;
                    this.enemyNodeList.push(enemyNode);
                    // console.log("增加一个敌人")
                }
                // randomIndex++
                randomIndex = Math.round(Math.random() * (indexList.length - 1));
            } else {
                addEnemyCount++;
            }
        }
        return Promise.all(promiseList)
    }

    removeEnemyInList(node: Node) {
        for (let i = 0; i < this.enemyNodeList.length; i++) {
            let enemy = this.enemyNodeList[i];
            if (enemy.uuid === node.uuid) {
                this.enemyNodeList.splice(i, 1);
            }
        }
    }
    getCurrentEnemyNodeList() {
        return this.enemyNodeList;
    }
    addEnemyAddGoldAnim(goldCount: number, enemyTargetPos: Vec3) {
        let node = instantiate(this.goldAnim3dPrefab);
        node.parent = this.node;
        node.getComponent(WinGoldAnimEffect).setGoldCount(goldCount, this.gameController);
        node.position = enemyTargetPos;
    }

}
