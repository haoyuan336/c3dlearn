import { _decorator, Component, Node, v3, v2, Vec2, math, ColliderComponent, SphereColliderComponent, TriggerEventType, ITriggerEvent } from 'cc';
import { State } from './util/State';
import { GameController } from './GameController';
import {BaseObject} from './BaseObject'
const { ccclass, property } = _decorator;

@ccclass('BulletBase')
export class BulletBase extends BaseObject {
    private state: State = new State();
    private speedY: number = 0;
    private accY: number = GameController.accY;
    private currentDirection: Vec2 = v2(0, 0);
    private moveSpeed: number = 20;
    private currentInitSpeedY = 6; //弹起的初始速度
    private currentCostAcc = -3;   //弹起的能量损失
    @property({ type: Node })
    public bodyNode: Node = null;//身体
    private maxLeftTime: number = 3 + Math.random(); //最大生存时间
    private colliderComponent: ColliderComponent = null; //碰撞组件

    protected baseAttackNum: number = 0; //基础攻击值
    protected gameConfigJson: Object = {}; //游戏配置
    onLoad() {
        // this.node.on("init-data", (data) => {

        // });

        this.state.addState("sleep", () => {
            this.bodyNode.active = false;
        });
        // this.state.addState("to-dead", ()=>{

        // });
        this.scheduleOnce(() => {
            this.node.destroy();
        }, this.maxLeftTime)


    }
    init(data) {
        let direction = data.direction;
        this.currentDirection = direction;
        let targetEnemy: Node = data.targetEnemy;
        this.gameConfigJson = data.gameConfigJson;
        this.baseAttackNum = this.gameConfigJson[this.objectType].BaseAttackNum;
        this.state.setState("run");
        let s = this.node.getPosition().y * 2 / this.accY * -1;
        // console.log("s", s);
        let moveTime: number = Math.sqrt(s);
        let dis: number = v2(this.node.position.x, this.node.position.z).subtract(v2(targetEnemy.position.x, targetEnemy.position.z)).length();
        this.moveSpeed = dis / moveTime;
        this.colliderComponent = this.node.getComponent(ColliderComponent);
        // //获取碰撞组件
        // console.log("node uuid", this.node.uuid);
        // console.log("collider:", this.colliderComponent)
        this.colliderComponent.on("onTriggerEnter", this.onTriggerEnter.bind(this));
    }
    onTriggerEnter(event: ITriggerEvent) {
        // console.log("onTriggerEnter", event);
        // this.state.setState("sleep");
        
        let otherCollider: ColliderComponent = event.otherCollider;
        if (otherCollider){
            otherCollider.node.emit("be-attacked", this.baseAttackNum);
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
            // console.log("v", v);
            this.node.setPosition(v3(pos.x + v.x, y, pos.z + v.y));
            if (this.node.getPosition().y <= 0) {

                // this.node.destroy()
                this.speedY = this.currentInitSpeedY;
                this.currentInitSpeedY += this.currentCostAcc;
                if (this.currentInitSpeedY < 0) {
                    this.state.setState('sleep');

                }
            }

        }
    }
}
