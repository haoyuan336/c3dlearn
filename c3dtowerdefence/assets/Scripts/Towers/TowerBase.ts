import { _decorator, Component, Node, Vec2, Vec3, Quat, v3, v2, Prefab, instantiate, JsonAsset } from 'cc';
import { State } from './../util/State';
import { GameController } from './../GameController'
import { EnemyBase } from './../Enemys/EnemyBase'
import { BulletBase } from './../BulletBase';
import {BaseObject} from './../BaseObject'
const { ccclass, property } = _decorator;

@ccclass('TowerBase')
export class TowerBase extends BaseObject {
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

    private bulletMoveTime: number = null;
    private currentShootDiraction: Vec2 = v2(0, 0);

    @property({type: JsonAsset})
    public gameConfig: JsonAsset = null;
    init(){

    }
    start() {
        this.state.setState("run");
        let moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度
        let accY = GameController.accY;
        

        // this.bulletMoveTime = Math.sqrt()
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
                    if (enemyNode.getComponent(EnemyBase).getIsCanLock() &&
                        !enemyNode.getComponent(EnemyBase).getIsDead()) {
                        let length = new Vec3(enemyNode.position).subtract(this.node.position).length()
                        if (length < minLength) {
                            minLength = length;
                            this.currentTargetEnemy = enemyNode;
                        }
                    }
                }
                if (this.currentTargetEnemy) {
                    this.currentTargetEnemy.getComponent(EnemyBase).setBeLocked(this.node);
                }
            }
            if (this.currentTargetEnemy) {
                // console.log("找到了目标敌人");

                if (this.currentTargetEnemy.getComponent(EnemyBase).getIsDead()) {
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
        bulletNode.active = false;
        bulletNode.setPosition(this.bulletStartPos.worldPosition);
        bulletNode.active = true;
        bulletNode.getComponent(BulletBase).init({
            direction: this.currentShootDiraction,
            targetEnemy: this.currentTargetEnemy,
            gameConfigJson: this.gameConfig.json
        })
        // bulletNode.emit("init-data", {
        //     direction: this.currentShootDiraction,
        //     targetEnemy: this.currentTargetEnemy
        // })
    }
}
