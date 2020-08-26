import { _decorator, Component, Node, Prefab, instantiate, Tween } from 'cc';
import { State } from './util/State'
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    //重力加速度
    public static accY: number = -20;
    @property({ type: Node })
    public pathNodeList: Node[] = [];
    @property({ type: Prefab })
    public enemyPrefab: Prefab = null;

    private state = new State();
    private currentAddEnemyTime: number = 0;
    private addEnemyDuraction: number = 4;
    private enemyNodeList: Node[] = [];
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
        let enemyNode: Node = instantiate(this.enemyPrefab);
        enemyNode.parent = this.node.parent;
        enemyNode.emit("init-data", this.pathNodeList);
        enemyNode.on("destroy-self", () => {
            for (let i = 0; i < this.enemyNodeList.length; i++) {
                if (this.enemyNodeList[i] === enemyNode) {
                    this.enemyNodeList.splice(i, 1);
                }
            }
        });
        this.enemyNodeList.push(enemyNode);
    }
}
