import { _decorator, Component, Node, Vec2, Vec3, Quat, v3, v2, Prefab, instantiate } from 'cc';
import { State } from './util/State';
import { GameController } from './GameController'
import { Enemy } from './Enemy'
const { ccclass, property } = _decorator;

@ccclass('Tower')
export class Tower extends Component {
    @property({ type: Node })
    public gameController: Node = null;
    private state: State = new State();
    private currentTargetEnemy: Node = null;
    private currentShootTime: number = 0;
    private shootDuraction: number = 1;

    @property({ type: Prefab })
    public bulletPrefab: Prefab = null;
    @property({ type: Node })
    public bulletStartPos: Node = null;


    private currentShootDiraction: Vec2 = v2(0, 0);
    start() {
        this.state.setState("run");
    }
    update(deltaTime: number) {
        //     // Your update function goes here.
        if (this.state.getState() === 'run') {
            //当前的状态是运行状态
            //寻找合适的 敌人

            // this.node.rotate(new Quat(0,0.001,0,0));
            // this.node.eulerAngles = new Vec3(0,90,0);
            if (this.currentTargetEnemy === null) {
                let enemyNodeList = this.gameController.getComponent(GameController).getCurrentEnemyNodeList();
                let minLength = 10000;
                for (let i = 0; i < enemyNodeList.length; i++) {
                    let enemyNode = enemyNodeList[i];
                    let length = new Vec3(enemyNode.position).subtract(this.node.position).length()
                    if (length < minLength) {
                        minLength = length;
                        this.currentTargetEnemy = enemyNode;
                    }
                }
            }
            if (this.currentTargetEnemy) {
                // console.log("找到了目标敌人");

                if (this.currentTargetEnemy.getComponent(Enemy).getIsDead()) {
                    this.currentTargetEnemy = null;
                } else {
                    this.currentShootDiraction = v2(this.currentTargetEnemy.position.x, this.currentTargetEnemy.position.z)
                        .subtract(v2(this.node.position.x, this.node.position.z))
                    let angle = this.currentShootDiraction.signAngle(v2(0, -1));
                    // console.log("angle", angle);
                    this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);
                }

            }
            if (this.currentTargetEnemy) {
                if (this.currentShootTime > this.shootDuraction) {
                    this.currentShootTime = 0;
                    this.shootOneBullet();
                } else {
                    this.currentShootTime += deltaTime;
                }
            }
        }
    }
    shootOneBullet() {
        // console.log("发射一枚子弹");
        let bulletNode = instantiate(this.bulletPrefab);
        bulletNode.parent = this.node.parent;
        bulletNode.setPosition(this.bulletStartPos.worldPosition);
        bulletNode.emit("init-data", {
            direction: this.currentShootDiraction,
            targetEnemy: this.currentTargetEnemy
        })
    }
}
