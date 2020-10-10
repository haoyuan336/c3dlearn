import { _decorator, Component, Node, Vec3, v3, v2, Vec2, math, ColliderComponent, SphereColliderComponent, TriggerEventType, ITriggerEvent, isValid, Quat, path, Tween, Prefab, instantiate } from 'cc';
import { State } from './util/State';
import { GameController } from './GameController';
import { BaseObject } from './BaseObject'
import { EnemyBase } from './Enemys/EnemyBase';
import { TowerBase } from './Towers/TowerBase';
import { BezierN } from './util/BezierN';
import { EnemyController } from './EnemyController';
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
    private targetEnemyNode: Node = null; //目标敌人
    private movePathList: Vec3[] = []; //移动路径
    private currentSpeedY: number = 10;
    @property({ type: Prefab })
    public exporeEffectPrefab: Prefab = null;

    @property({ type: Prefab })
    public daodanweijiPrefab: Prefab = null;

    @property({ type: Prefab })
    public baozhaEffectPrefab: Prefab = null;
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
        if (data && data.direction) {
            let direction = data.direction;
            this.currentDirection = v3(direction);
            let randomV = v3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
            this.currentDirection.add(randomV);
            //导弹 从天而降的 导弹
            let quat = new Quat();
            Quat.fromViewUp(quat, v3(direction).multiplyScalar(-1).normalize(), Vec3.UP);
            this.node.worldRotation = quat;
            this.state.setState("run");
        }

        // let angle: number = new Vec2(direction.x, direction.y).signAngle(v2(0, -1));
        // this.node.eulerAngles = v3(0, angle * 180 / Math.PI, 0);
        // this.node.lookAt();/
        let targetEnemy: Node = data.targetEnemy;
        if (targetEnemy) {
            this.targetEnemyNode = targetEnemy;
            // this.currentDirection = v3(this.targetEnemyNode.position).subtract(this.node.position);
            // let randomV = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
            // this.currentDirection.add(randomV);
        }



        this.gameConfigJson = gameConfig
        this.colliderComponent = this.node.getComponent(ColliderComponent);
        this.colliderComponent.on("onTriggerEnter", this.onTriggerEnter.bind(this));
        this.scheduleOnce(() => {
            this.node.destroy();
        }, this.leftTime)

        if (this.getMoveType() === 'Bezier') {
            //子弹的移动方式是贝塞尔曲线方式
            //  let ctlPos = [this.node.position];
            if (isValid(this.targetEnemyNode)) {
                let endPos = this.targetEnemyNode.position;
                let middle = v3(this.node.position).add(endPos).multiplyScalar(0.5).add(v3(0, 15, 0));
                let ctlPos = [this.node.position, middle, endPos];
                this.movePathList = new BezierN(ctlPos).getPointList(50);
                let tw = this.processMove(this.movePathList);
                tw.call(() => {
                    this.state.setState("run");
                })
                tw.start();
            } else {
                this.node.destroy();
            }


        } else {
            this.state.setState("run");
        }


    }
    processMove(pathList: Vec3[]): Tween {

        let tw = new Tween(this.node);
        for (let i = 1; i < pathList.length; i++) {
            this.processPosAndQuat(tw, pathList[i], pathList[i - 1]);
        }
        return tw;
    }
    processPosAndQuat(tw: Tween, pos: Vec3, beforPos: Vec3) {


        // tw.call(()=>{
        //     this.node.lookAt(pos);
        // })
        let dir = v3(beforPos).subtract(pos);
        let dis = dir.length();
        let time = dis / this.getMoveSpeed();
        // const updateCb = () => {
        //     let quat = new Quat();
        //     Quat.fromViewUp(quat, v3(dir).multiplyScalar(-1).normalize(), Vec3.UP);
        //     let lerpQuat = new Quat();
        //     Quat.lerp(lerpQuat, this.node.rotation, quat, 0.1);
        //     this.node.rotation = lerpQuat;
        // }
        tw.call(() => {
            // this.schedule(updateCb, 1 / 60);
            this.node.lookAt(pos);
        })
        tw.to(time, {
            position: pos
        })

    }
    // updateCb(dir){
    //     let quat = new Quat();
    //     Quat.fromViewUp(quat, v3(dir).normalize(), Vec3.UP);
    //     let lerpQuat = new Quat();
    //     Quat.lerp(lerpQuat, lerpQuat, quat, 0.1);
    //     this.node.rotation = lerpQuat;
    // }
    onTriggerEnter(event: ITriggerEvent) {
        // console.log("onTriggerEnter", event);
        // this.state.setState("sleep");
        if (this.getMoveType() === 'SkyDown') {
            return;
        }

        let otherCollider: ColliderComponent = event.otherCollider;
        if (isValid(otherCollider) && isValid(otherCollider.node) && otherCollider.node.name.indexOf("Wall") > 1) {
            console.log(" other collier node", otherCollider.node.name);
            this.node.destroy();
        }
        if (otherCollider && otherCollider.getComponent(EnemyBase) && !otherCollider.getComponent(EnemyBase).getIsDead()) {
            console.log("base attack num", this.baseAttackNum);
            if (this.getIsCollisionDestroy()) {
                this.state.setState("enter-to-destroy");
                if (isValid(this.exporeEffectPrefab)) {
                    this.rootNode.active = false;
                    let node = instantiate(this.exporeEffectPrefab);
                    node.parent = this.node;
                    let tw = new Tween(node);
                    tw.by(0.1, { scale: v3(1, 1, 1) });
                    tw.call(() => {
                        this.node.destroy();
                    })
                    tw.start();
                } else {
                    this.node.destroy();

                }
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
            if (this.getMoveType() === 'Bezier') {
                if (isValid(this.targetEnemyNode)) {
                    let dir = v3(this.targetEnemyNode.position).add(v3(0, 2, 0)).subtract(this.node.position);
                    this.node.position = v3(this.node.position).add(dir.multiplyScalar(deltaTime * 0.5 * this.getMoveSpeed()));
                    // this.node.lookAt(this.targetEnemyNode.position);
                } else {
                    this.node.destroy();
                }
            } else if (this.getMoveType() === 'SkyDown') {
                this.currentSpeedY += 2;
                if (this.currentSpeedY % 10 === 0) {
                    let node = instantiate(this.daodanweijiPrefab);
                    node.parent = this.node.parent;
                    node.position = this.node.position;
                    let tw = new Tween(node);
                    tw.by(0.2, { scale: v3(1, 1, 1) })
                    tw.call(() => {
                        node.destroy();
                    })
                    tw.start();
                }
                this.node.position = v3(this.node.position).add(v3(0, deltaTime * this.currentSpeedY, 0));
                if (this.node.position.y > 30) {
                    this.state.setState("move-over");
                    this.node.position = v3(this.node.position.x, 30, this.node.position.z);
                    //检查需要攻击的敌人
                    let endPos = this.checkDownPos();
                    if (isValid(endPos)) {
                        console.log("end pos", endPos);
                        this.node.position = v3(endPos.x, 30, endPos.z);
                        // endPos.add(v3(0, 10, 0))
                        this.rootNode.scale = v3(1, -1, 1);
                        // this.node.scale = v3(1, -1, 1);
                        let tw = new Tween(this.node);
                        tw.to(0.6, { position: endPos });
                        tw.call(() => {
                            //     console.log("移动结束")
                            this.showBaozhaEffect();
                        });
                        tw.start();
                    } else {
                        this.node.destroy();
                    }

                }
            } else {
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
    checkDownPos(): Vec3 {
        //计算落地点
        let enemyNodeList = this.gameController.node.getComponent(EnemyController).getCurrentEnemyNodeList();
        if (enemyNodeList.length === 0) {
            this.node.destroy();
            return;
        }
        //寻找附近敌人最多的敌人
        // let  
        let disList = [];
        for (let i = 0; i < enemyNodeList.length; i++) {
            let node1 = enemyNodeList[i];
            if (isValid(node1) && !node1.getComponent(EnemyBase).getIsDead()) {
                let list = [];
                for (let j = 0; j < enemyNodeList.length; j++) {
                    let node = enemyNodeList[j];
                    if (node1.uuid !== node.uuid && !node.getComponent(EnemyBase).getIsDead()) {
                        let dis = v3(node1.position).subtract(node.position).length();
                        list.push(dis);
                    }
                }
                list = list.sort((a, b) => {
                    return a - b;
                })
                list = list.slice(0, Math.min(3, list.length));
                let sum = 0;
                for (let h = 0; h < list.length; h++) {
                    sum += list[h];
                }
                disList.push({
                    node: node1,
                    dis: sum
                })
            }

        }
        // console.log("dis list", disList);

        disList = disList.sort((a, b) => {
            return a.dis - b.dis;
        })
        // console.log("dis list", disList);
        if (isValid(disList[0].node)) {
            return disList[0].node.position;

        }
        return null;

    }
    showBaozhaEffect() {
        let exporeEffectNode = instantiate(this.exporeEffectPrefab);
        exporeEffectNode.position = this.node.position;
        exporeEffectNode.parent = this.node.parent;
        // this.node.destroy();
        let tw = new Tween(exporeEffectNode);
        tw.by(0.3, {
            scale: v3(5, 5, 5)
        })
        tw.call(() => {
            // console.log("伤害")
            this.rangeAttackEnemy(exporeEffectNode);
            exporeEffectNode.destroy();

        })

        tw.start();
    }
    rangeAttackEnemy(exporeEffectNode: Node) {
        //范围内攻击敌人
        // otherCollider.node.emit("be-attacked", {
        //     baseAttackNum: this.baseAttackNum,
        //     baseGasNum: this.baseGasNum,
        //     cb: (isDead: boolean) => {
        //         console.log("是否死了", isDead)
        //         if (this.targetTowerBase) {
        //             this.targetTowerBase.enemyDeadByThis(isDead);
        //         }
        //     }
        // });
        let enemyNodeList = this.gameController.node.getComponent(EnemyController).getCurrentEnemyNodeList();
        for (let i = 0; i < enemyNodeList.length; i++) {
            let node = enemyNodeList[i];
            let dis = v3(node.position).subtract(exporeEffectNode.position).length();
            if (dis < 10) {
                console.log('dis', dis);
                console.log("攻击敌人")
                node.emit("be-attacked", {
                    baseAttackNum: this.getCurrentAttackNum(),
                    baseGasNum: 0,
                    cb: (isDead: boolean) => {
                        if (this.targetTowerBase) {
                            this.targetTowerBase.enemyDeadByThis(isDead);
                        }
                    }
                })
            }
        }
        this.node.destroy();
    }
}
