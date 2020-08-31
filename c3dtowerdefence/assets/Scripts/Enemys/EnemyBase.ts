import { _decorator, Component, Node, CCInteger, v3, Vec3, tween, path, Tween, CameraComponent, Vec2, v2, JsonAsset, game, isValid, ProgressBarComponent, RigidBodyComponent, SkeletalAnimationComponent, ParticleSystemComponent } from 'cc';
import { State } from './../util/State'
import { GameController } from './../GameController';
// import { Enemy } from './Enemy';
import { BaseObject } from './../BaseObject'
const { ccclass, property } = _decorator;
@ccclass('EnemyBase')
export class EnemyBase extends BaseObject {
    public pathList: Node[] = [];
    public state: State = new State();
    public currentPathIndex: number = 0;
    public moveSpeed: number = 10;
    public beLockedMaxNum: number = GameController.enemyBeLockMaxNum;
    public currentbeLockedCount = 0;
    public cameraNode: CameraComponent = null;
    public healthBar: Node = null;
    public gameConfigJson: Object = null;
    public healthCount: number = 0;
    public currentHealthCount: number = 0;
    private endPos: Vec3 = null;
    private startPos: Vec3 = null;
    @property({ type: Node })
    public deadParticleNode: Node = null;
    public init(gameConfig: Object, startPos: Vec3, endPos: Vec3) {
        // console.log("enemy base init")
        this.gameConfigJson = gameConfig;
        this.moveSpeed = this.gameConfigJson[this.objectType].MoveSpeed;
        this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
        this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
        this.currentHealthCount = this.healthCount;
        this.endPos = endPos;
        this.startPos = startPos;
        // this.pathList = pathList;
        // let pos = pathList[0].getPosition();
        // pos.y = 0;
        // this.node.setPosition(pos);
        this.node.setPosition(startPos);
        this.node.scale = v3(0, 0, 0);
        let tw = new Tween(this.node);
        tw.to(0.2, { scale: v3(1, 1, 1) })
        tw.call(() => {
            this.state.setState("run");
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent)
            if (skeleteAnim) {
                if (skeleteAnim.defaultClip) {
                    let defaultClip = skeleteAnim.defaultClip.name;
                    let animState = skeleteAnim.getState(defaultClip);
                    let length = animState.length;
                    animState.speed = this.moveSpeed * this.animSpeedMulOffset;
                }
            }
        });
        tw.start();
    }
    onLoad() {
        this.node.on("set-health-bar", (healthBar: Node, cameraNode: CameraComponent) => {
            this.healthBar = healthBar;
            this.cameraNode = cameraNode;

        });
        this.state.addState("to-dead", () => {
            // this.healthBar.destroy();
            let tw = new Tween(this.node);
            tw.to(0.2, { scale: v3(2, 2, 2) });
            tw.call(() => {
                this.rootNode.active = false;
                if (this.deadParticleNode){
                    this.deadParticleNode.active = true;
                    this.deadParticleNode.getComponent(ParticleSystemComponent).play();
                    this.state.setState("over");
                    this.node.emit("destroy-self");
                }
               
            })
            .delay(0.6)
            .call(()=>{
                this.node.destroy();
            })
            tw.start();
            if (isValid(this.healthBar)) {
                this.healthBar.destroy();
            }
        });
        this.state.addState("run", () => {
            // console.log("start move");
            let tw = new Tween(this.node);
            // for (let i = 1; i < this.pathList.length; i++) {
            //     let currentPos = this.pathList[i - 1].position;
            //     let nextPos = this.pathList[i].position;
            //     let moveTime = new Vec3(nextPos).subtract(currentPos).length() / this.moveSpeed;
            //     // console.log("length ", length);
            //     // console.log("move time", moveTime);
            //     tw.to(moveTime, { position: v3(nextPos.x,0, nextPos.z) });
            // }

            let moveTime = new Vec3(this.startPos).subtract(this.endPos).length() / this.moveSpeed;
            // this.node.getComponent(RigidBodyComponent).applyForce(v3(0,0,1));
            let direction = new Vec3(this.startPos).subtract(this.endPos).normalize();
            let angle = new Vec2(direction.x, direction.z).signAngle(v2(-1, 0));
            // console.log('angle', angle);
            this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);
            // this.node.getComponent(RigidBodyComponent).setLinearVelocity(direction);
            tw.to(moveTime, { position: this.endPos });
            tw.call(() => {
                this.state.setState("to-dead");
            })
            tw.to(0.2, { scale: v3(0, 0, 0) });
            tw.call(() => {
                this.state.setState("over");
                this.node.emit("destroy-self");
            })
                .delay(0.2)
                .call(() => {
                    this.node.destroy();
                    this.state.setState("to-dead");
                })
            tw.to(1, { position: v3(0, 0, 0) });
            tw.start();
            this.node.emit("run");
            if (this.healthBar) {
                // this.healthBar.active = true;
            }
        });
        this.node.on("be-attacked", (attackNum) => {
            //被攻击
            // console.log("被攻击", attackNum);
            this.currentHealthCount -= attackNum

            if (this.currentHealthCount <= 0) {
                this.currentHealthCount = 0;
                this.state.setState("to-dead");
            }
            if (isValid(this.healthBar)) {
                this.healthBar.getComponent(ProgressBarComponent).progress = this.currentHealthCount / this.healthCount;
            }

        });
    }
    start() {
        // this.state.setState("ready");
    }
    getIsDead(): boolean {
        if (this.state.getState() === 'over' || this.state.getState() === 'to-dead') {
            return true;
        }
        return false;
    }
    getIsCanLock(): boolean {
        if (this.currentbeLockedCount < this.beLockedMaxNum) {
            return true;
        }
        return false;
    }
    setBeLocked(tower: Node) {
        this.currentbeLockedCount++;
    }
    unSetBeLocked(tower: Node) {
        this.currentbeLockedCount--;
    }
    update(deltaTime: number) {
        // Your update function goes here.
        if (this.state.getState() === 'run') {
            if (this.healthBar && this.cameraNode) {
                let pos: Vec3 = v3(0, 0, 0);
                this.cameraNode.convertToUINode(this.node.getWorldPosition(), this.healthBar.parent, pos);
                pos.y += 50;
                // console.log("pos", pos);
                this.healthBar.setPosition(pos);
                this.healthBar.active = true;
                // this.healthBar.setScale(v3(pos.z, pos.z, pos.z));
            }
        }
    }
}
