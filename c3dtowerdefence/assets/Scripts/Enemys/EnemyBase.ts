import { _decorator, Component, Node, CCInteger, v3, Vec3, tween, path, Tween, CameraComponent, Vec2, v2, JsonAsset, game, isValid, ProgressBarComponent, RigidBodyComponent, SkeletalAnimationComponent, ParticleSystemComponent } from 'cc';
import { State } from './../util/State'
import { GameController } from './../GameController';
// import { Enemy } from './Enemy';
import { BaseObject } from './../BaseObject'
import { EnemyController } from '../EnemyController';
const { ccclass, property } = _decorator;
@ccclass('EnemyBase')
export class EnemyBase extends BaseObject {
    public pathList: Node[] = [];
    public state: State = new State();
    public currentPathIndex: number = 0;
    // public moveSpeed: number = 10;
    public beLockedMaxNum: number = GameController.enemyBeLockMaxNum;
    public currentbeLockedCount = 0;
    public cameraNode: CameraComponent = null;
    public healthBar: Node = null;
    public gameConfigJson: Object = null;
    public healthCount: number = 0;
    public currentHealthCount: number = 0;
    private endPos: Vec3 = null;
    private startPos: Vec3 = null;
    private enemyCtl: EnemyController = null;
    public init(gameConfig: Object, startPos: Vec3, endPos: Vec3) {
        super.init(gameConfig);
        this.gameConfigJson = gameConfig;
        this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
        this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
        this.currentHealthCount = this.healthCount;
        this.endPos = endPos;
        this.startPos = startPos;
        let direction = new Vec3(this.startPos).subtract(this.endPos).normalize();
        let angle = new Vec2(direction.x, direction.z).signAngle(v2(-1, 0));
        this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);

    }
    showEnemyEnterAnim(index: number, enemtCtl: EnemyController) {
        let node = this.node;
        this.enemyCtl = enemtCtl;
        return new Promise((resolve, reject) => {
            let tw = new Tween(node);
            let pos = node.position;
            tw.delay(0.1 * index)
            tw.set({ scale: v3(0, 0, 0) })
            tw.call(() => {
                node.active = true;
            })
            tw.to(0.1, { scale: v3(1, 1, 1) })
            // bounceOut quartIn
            tw.to(0.4, { position: v3(pos.x, 0, pos.z) }, { easing: "bounceOut" })
            tw.call(() => {
                // node.getComponent(EnemyBase).startRun();
                this.startRun();
                resolve();
            })
            tw.start();
        })
    }
    startRun() {
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
    }
    onLoad() {
        // this.node.on("set-health-bar", (healthBar: Node, cameraNode: CameraComponent) => {
        //     this.healthBar = healthBar;
        //     this.cameraNode = cameraNode;

        // });
        this.state.addState("over", ()=>{
            this.enemyCtl.removeEnemyInList(this.node);
            this.node.destroy();

        });
        this.state.addState("to-dead", () => {
            // if (isValid(this.healthBar)) {
            //     this.healthBar.destroy();
            // }
            // this.healthBar.destroy();
            let tw = new Tween(this.node);
            tw.by(0.2, { scale: v3(1, 1, 1) });
            tw.call(() => {
                this.state.setState("over");
            })
            tw.start();

        });
        this.state.addState("run", () => {
            // console.log("start move");
            let tw = new Tween(this.node);
            let moveTime = new Vec3(this.startPos).subtract(this.endPos).length() / this.moveSpeed;
            tw.to(moveTime, { position: this.endPos });
            tw.call(() => {
                // this.state.setState("to-dead");
            })
            tw.to(0.2, { scale: v3(0, 0, 0) });
            tw.call(() => {
                this.state.setState("over");
            })
            tw.start();

            // if (this.healthBar) {
            //     // this.healthBar.active = true;
            // }
        });
        this.node.on("be-attacked", (data) => {
            //被攻击
            // console.log("被攻击", attackNum);
            this.currentHealthCount -= data.baseAttackNum;
            let baseGasNum = data.baseGasNum; //取处基础气值

            this.currentGasNum += baseGasNum;

            // scale = 0;

            let scale = this.currentGasNum / this.baseGasNum;
            // console.log("scale", scale);
            let tw = new Tween(this.node);
            tw.to(0.2, { scale: v3(scale, scale, scale) });
            tw.start();

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
