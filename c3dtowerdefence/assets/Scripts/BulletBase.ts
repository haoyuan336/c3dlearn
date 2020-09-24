import { _decorator, Component, Node, Vec3, v3, v2, Vec2, math, ColliderComponent, SphereColliderComponent, TriggerEventType, ITriggerEvent, isValid, Quat } from 'cc';
import { State } from './util/State';
import { GameController } from './GameController';
import { BaseObject } from './BaseObject'
import { EnemyBase } from './Enemys/EnemyBase';
import { TowerBase } from './Towers/TowerBase';
const { ccclass, property } = _decorator;

@ccclass('BulletBase')
export class BulletBase extends BaseObject {
    private state: State = new State();
    private speedY: number = 0;
    private accY: number = GameController.accY;
    private currentDirection: Vec3 = v3(0, 0);
    // private moveSpeed: number = 20;
    private currentInitSpeedY = 6; //弹起的初始速度
    private currentCostAcc = -3;   //弹起的能量损失
    // @property({ type: Node })
    // public bodyNode: Node = null;//身体
    private maxLeftTime: number = 1 + Math.random(); //最大生存时间
    private colliderComponent: ColliderComponent = null; //碰撞组件

    // protected baseAttackNum: number = 0; //基础攻击值
    protected gameConfigJson: Object = {}; //游戏配置
    private targetTowerBase: TowerBase = null; //目标塔
    onLoad() {
        // this.node.on("init-data", (data) => {

        // });

        this.state.addState("sleep", () => {
            // this.bodyNode.active = false;
        });
        // this.state.addState("to-dead", ()=>{

        // });



    }
    init(gameConfig: {}, gameController: GameController, data) {
        super.init(gameConfig, gameController);
        this.baseAttackNum += data.baseAttackNum;
        this.targetTowerBase = data.targetTower;
        // console.log("base attack num", this.baseAttackNum);
        let direction = data.direction;
        this.currentDirection = direction;
        // let angle: number = new Vec2(direction.x, direction.y).signAngle(v2(0, -1));
        // this.node.eulerAngles = v3(0, angle * 180 / Math.PI, 0);
        // this.node.lookAt();/
        // let targetEnemy: Node = data.targetEnemy;
        // if(targetEnemy){
        //     this.node.lookAt(targetEnemy.position);

        // }else{

        // }

        // let quat = new Quat();
        // quat.lerp
        // Quat.fromViewUp(quat, dir, Vec3.UP);
        // let pos = v3(this.node.position).add(direction)
        let quat = new Quat();
        Quat.fromViewUp(quat, v3(direction).multiplyScalar(-1).normalize(), Vec3.UP);
        this.node.worldRotation = quat;
        // console.log("quat", quat);
        // rotateAround
        // startPos.
        // this.node.rotate/

        // return quat
        this.gameConfigJson = gameConfig
        // this.baseAttackNum = this.gameConfigJson[this.objectType].BaseAttackNum;

        this.state.setState("run");
        // let s = this.node.getPosition().y * 2 / this.accY * -1;
        // console.log("s", s);
        // let moveTime: number = Math.sqrt(s);
        // let dis: number = v2(this.node.position.x, this.node.position.z).subtract(v2(targetEnemy.position.x, targetEnemy.position.z)).length();
        // this.moveSpeed = dis / moveTime;
        this.colliderComponent = this.node.getComponent(ColliderComponent);
        // //获取碰撞组件
        // console.log("node uuid", this.node.uuid);
        // console.log("collider:", this.colliderComponent)
        this.colliderComponent.on("onTriggerEnter", this.onTriggerEnter.bind(this));
        this.scheduleOnce(() => {
            this.node.destroy();
        }, this.leftTime)
    }
    onTriggerEnter(event: ITriggerEvent) {
        // console.log("onTriggerEnter", event);
        // this.state.setState("sleep");

        let otherCollider: ColliderComponent = event.otherCollider;
        if (isValid(otherCollider) && isValid(otherCollider.node) && otherCollider.node.name.indexOf("Wall") > 1) {
            console.log(" other collier node", otherCollider.node.name);
            this.node.destroy();
        }
        if (otherCollider && otherCollider.getComponent(EnemyBase) && !otherCollider.getComponent(EnemyBase).getIsDead()) {
            console.log("base attack num", this.baseAttackNum);
            if (this.getIsCollisionDestroy()) {
                this.node.destroy();
            }
            otherCollider.node.emit("be-attacked", {
                baseAttackNum: this.baseAttackNum,
                baseGasNum: this.baseGasNum,
                cb: (isDead: boolean) => {
                    console.log("是否死了", isDead)
                    if (this.targetTowerBase) {
                        this.targetTowerBase.enemyDeadByThis(isDead);
                    }
                }
            });
            // if (this.baseGasNum !== 0) {
            //     this.node.destroy();
            // }
        }
    }
    start() {
        // Your initialization goes here.
        // this.colliderComponent = this.node.getComponent(BulletBase);
        // //获取碰撞组件

        // console.log("node uuid", this.node.uuid);
        // console.log("collider:", JSON.stringify(this.colliderComponent));
        // this.colliderComponent.on("onCollisionEnter",this.onCollisionEnter.bind(this));
    }
    update(deltaTime: number) {
        if (this.state.getState() === 'run') {
            //
            this.speedY += this.accY * deltaTime;
            let pos = this.node.position;
            let y = pos.y + this.speedY * deltaTime;
            let direction = this.currentDirection.normalize();
            let v = direction.multiplyScalar(this.moveSpeed * deltaTime);
            if (v.y < 0) {
                v.y = 0;
            }
            // console.log("v", v);
            this.node.setPosition(v3(pos.x + v.x, pos.y + v.y, pos.z + v.z));
            if (this.node.getPosition().y <= 0) {
                // this.node.destroy()
                if (this.isCollisionGround) {
                    this.speedY = this.currentInitSpeedY;
                    this.currentInitSpeedY += this.currentCostAcc;
                    if (this.currentInitSpeedY < 0) {
                        this.state.setState('sleep');

                    }
                }

            }

        }
    }
}
