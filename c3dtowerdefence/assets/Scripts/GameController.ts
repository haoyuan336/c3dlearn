import { _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset } from 'cc';
import { State } from './util/State'
import { EnemyBase } from './Enemys/EnemyBase';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    //重力加速度
    public static accY: number = -20;
    @property({ type: Node })
    public pathNodeList: Node[] = [];
    @property({ type: Prefab })
    public enemyCubePrefab: Prefab = null;
    @property({type: Node})
    public enemyHealthBarCtlNode: Node = null;

    @property({type: JsonAsset})
    public gameConfigJson:JsonAsset = null;


    private state = new State();
    private currentAddEnemyTime: number = 0;
    private addEnemyDuraction: number = 4;
    private enemyNodeList: Node[] = [];
    public static enemyBeLockMaxNum: number = 1;
    start() {
        // Your initialization goes here.
        this.state.addState("ready", () => {
            console.log("enter state ", this.state.getState());
        })
        this.state.setState("run");
    }
    update(dt: number) {
        if (this.state.getState() === 'run') {
            if (this.currentAddEnemyTime > this.addEnemyDuraction) {
                this.currentAddEnemyTime = 0;
                this.addOneEnemy();
            } else {
                this.currentAddEnemyTime += dt;
            }
        }
    }
    getCurrentEnemyNodeList() {
        return this.enemyNodeList;
    }
    addOneEnemy() {
        let enemyNode: Node = instantiate(this.enemyCubePrefab);
        enemyNode.parent = this.node.parent;
        // enemyNode.emit("init-data", this.pathNodeList, this.gameConfigJson);
        enemyNode.getComponent(EnemyBase).init(this.gameConfigJson, this.pathNodeList);
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
