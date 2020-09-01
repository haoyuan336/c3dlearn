import { _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3 } from 'cc';
import { State } from './util/State';
import { EnemyBase } from './Enemys/EnemyBase'
const { ccclass, property } = _decorator;

@ccclass('EnemyController')
export class EnemyController extends Component {

    @property({ type: JsonAsset })
    public gameConfigRes: JsonAsset = null;

    @property({ type: Prefab })
    public enemysPrefabList: Prefab[] = [];

    private gameConfig: {} = null;
    private currentLevelNum = 0;
    private currentEnemyIndex = 0;
    private currentWaveMaxEnemyCount = 0; //当前波次最大的敌人数
    private currentWaveIndex: number = 0;
    private waveData: {} = null;
    private state: State = new State();
    private currentAddEnemyTime: number = 0;
    private addEnemyDuraction: number = 1;
    private enemyNodeList: Node[] = [];
    private currentRandomEnemyTypeList = [];
    @property({ type: Node })
    public startPosNodeList: Node[] = [];

    @property({ type: Node })
    public endPosNode: Node = null;

    @property({ type: Node })
    public enemyHealthBarCtlNode: Node = null;


    start() {
        // Your initialization goes here.
        this.gameConfig = this.gameConfigRes.json;
        // this.state.setState('run');
        this.waveData = this.gameConfig['Level_' + this.currentLevelNum];




        this.state.addState("enter-next-wave", () => {
            this.referCurrentLevelData();
           
        })
        // this.node.on("player-click-game", () => {
        //     this.state.setState("enter-next-wave");
        // });
    }
    startGame(){
        this.state.setState("enter-next-wave");
    }
    referCurrentLevelData() {
        if (this.currentWaveIndex == this.waveData['EnemyType'].length) {
            this.state.setState("add-enemt-over");
            console.log("游戏结束");
            return;
        }
        this.currentRandomEnemyTypeList = this.waveData["EnemyType"][this.currentWaveIndex];
        this.currentWaveMaxEnemyCount = this.waveData['EnemyCount'][this.currentWaveIndex];
        this.addEnemyDuraction = this.waveData['AddEnemyDuraction'][this.currentWaveIndex];
        this.currentWaveIndex++;

        this.scheduleOnce(() => {
            this.node.emit("refer-current-wave", this.currentWaveIndex);
            this.state.setState('run');
        }, 1);
        // console.log("刷新一下当前的数据");
        // console.log('current random enemy ', this.currentRandomEnemyTypeList);
        // console.log("current max enemy count", this.currentWaveMaxEnemyCount);
        // console.log("add enemy duraction", this.addEnemyDuraction);
    }
    getCurrentEnemyNodeList() {
        return this.enemyNodeList;
    }
    update(deltaTime: number) {
        if (this.state.getState() === 'run') {
            if (this.currentAddEnemyTime > this.addEnemyDuraction) {
                this.currentAddEnemyTime = 0;
                if (this.currentEnemyIndex >= this.currentWaveMaxEnemyCount) {
                    this.currentEnemyIndex = 0;
                    this.state.setState("enter-next-wave");

                } else {
                    this.addOneEnemy();

                }
            } else {
                this.currentAddEnemyTime += deltaTime;
            }
        }
    }
    addOneEnemy() {


        let index = Math.round(Math.random() * (this.currentRandomEnemyTypeList.length - 1));
        let enemyPrefab = this.enemysPrefabList[index];
        let enemyNode: Node = instantiate(enemyPrefab);
        enemyNode.parent = this.node.parent;
        this.currentEnemyIndex++;
        // enemyNode.emit("init-data", this.pathNodeList, this.gameConfigJson);

        let startPosIndex = Math.round(Math.random() * (this.startPosNodeList.length - 1));
        let startPos = this.startPosNodeList[startPosIndex].position;

        let x = Math.random() * 10 - 5;
        let z = Math.random() * 10 - 5;


        let endPos = this.endPosNode.position;
        enemyNode.getComponent(EnemyBase).init(this.gameConfig, v3(startPos.x + x, startPos.y, startPos.z + z), endPos);
        enemyNode.on("destroy-self", () => {
            for (let i = 0; i < this.enemyNodeList.length; i++) {
                // console.log("this.enemt node list uuid", this.enemyNodeList[i].uuid);
                // console.log("enemy node uuid", enemyNode.uuid);
                if (this.enemyNodeList[i].uuid === enemyNode.uuid) {
                    this.enemyNodeList.splice(i, 1);
                }
            }
        });
        this.enemyNodeList.push(enemyNode);
        this.enemyHealthBarCtlNode.emit("add-one-enemy", enemyNode);
    }
}
