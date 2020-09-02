import { _decorator, Component, Node, Vec2, Vec3, Quat, v3, v2, Prefab, instantiate, JsonAsset, CameraComponent, find, ColliderComponent, SkeletalAnimationComponent, isValid, CCFloat } from 'cc';
import { State } from './../util/State';
import { GameController } from './../GameController'
import { EnemyBase } from './../Enemys/EnemyBase'
import { BulletBase } from './../BulletBase';
import { BaseObject } from './../BaseObject'
import { EnemyController } from '../EnemyController';
const { ccclass, property } = _decorator;

@ccclass('TowerBase')
export class TowerBase extends BaseObject {
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
    // @property({ type: Node })
    // public rootNode: Node = null;

    private attackRate: number = null;
    private gameConfig: Object = null;

    @property({type: CCFloat})
    public attackAnimEventTimeOffset = 0;
    init() {

    }
    start() {
        this.state.setState("run");
        let moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度
        let accY = GameController.accY;
        this.gameController = find("GameController");

        this.gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;

        let attackRate = this.gameConfig[this.objectType].ShootRate;
        this.attackRate = attackRate;
        this.shootDuraction = 1 / attackRate;

        this.gameController.on("touch-screen-to-3d", (collider: ColliderComponent) => {
            if (collider.node && collider.node.uuid === this.node.uuid) {
                this.gameController.emit("touch-tower", this.node);
            }
        });
        // this.rootNode.getComponent(SkeletalAnimationComponent).getAnimationState("骨架|骨架Action").speed = attackRate;
        // let length = this.rootNode.getComponent(SkeletalAnimationComponent).getAnimationState("骨架|骨架Action").length * 1 / attackRate;
        // console.log("length = ", length);
        // let count = 0;
        // this.schedule(() => {
        //     if (count === 1) {
        //         this.shootOneBullet();
        //     }
        //     if (count >= 1) {
        //         count = 0;
        //     } else {
        //         count++;
        //     }
        // }, length / 2);



    }
    update(deltaTime: number) {
        //     // Your update function goes here.
        if (this.state.getState() === 'run') {
            //当前的状态是运行状态
            //寻找合适的 敌人
            // this.node.rotate(new Quat(0,0.001,0,0));
            // this.node.eulerAngles = new Vec3(0,90,0);
            if (this.currentTargetEnemy === null) {
                let enemyNodeList = this.gameController.getComponent(EnemyController).getCurrentEnemyNodeList();
                let minLength = 10000;
                for (let i = 0; i < enemyNodeList.length; i++) {
                    let enemyNode = enemyNodeList[i];
                    if (isValid(enemyNode) && enemyNode.getComponent(EnemyBase).getIsCanLock() &&
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

        let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
        if (skeleteAnim) {
            let defaultAnimName = skeleteAnim.defaultClip.name;
            let animState = skeleteAnim.getState(defaultAnimName);
            let length = animState.length * 1 / this.attackRate;
            skeleteAnim.play(defaultAnimName);
            animState.repeatCount = 1;
            this.scheduleOnce(() => {
                if (isValid(this.currentTargetEnemy)) {
                    let bulletNode = instantiate(this.bulletPrefab);
                    bulletNode.parent = this.node.parent;
                    bulletNode.active = false;
                    bulletNode.setPosition(this.bulletStartPos.worldPosition);
                    bulletNode.active = true;
                    bulletNode.getComponent(BulletBase).init(this.gameConfig, {
                        direction: this.currentShootDiraction,
                        targetEnemy: this.currentTargetEnemy,

                    })
                }
            }, length * this.attackAnimEventTimeOffset)
        }

        // this.rootNode.getComponent(SkeletalAnimationComponent).getState("骨架|骨架Action.001").speed = this.attackRate;
        // this.rootNode.getComponent(SkeletalAnimationComponent).getState("骨架|骨架Action.001").repeatCount = 1;
        // let length = this.rootNode.getComponent(SkeletalAnimationComponent).getState("骨架|骨架Action.001").length * 1 / this.attackRate;
        // this.rootNode.getComponent(SkeletalAnimationComponent).play("骨架|骨架Action.001");
        // this.scheduleOnce(() => {
        //     if (isValid(this.currentTargetEnemy)) {
        //         let bulletNode = instantiate(this.bulletPrefab);
        //         bulletNode.parent = this.node.parent;
        //         bulletNode.active = false;
        //         bulletNode.setPosition(this.bulletStartPos.worldPosition);
        //         bulletNode.active = true;
        //         bulletNode.getComponent(BulletBase).init({
        //             direction: this.currentShootDiraction,
        //             targetEnemy: this.currentTargetEnemy,
        //             gameConfigJson: this.gameConfig
        //         })
        //     }

        // }, length * 0.45)






        // console.log("发射一枚子弹");
        // let bulletNode = instantiate(this.bulletPrefab);
        // bulletNode.parent = this.node.parent;
        // bulletNode.active = false;
        // bulletNode.setPosition(this.bulletStartPos.worldPosition);
        // bulletNode.active = true;
        // bulletNode.getComponent(BulletBase).init({
        //     direction: this.currentShootDiraction,
        //     targetEnemy: this.currentTargetEnemy,
        //     gameConfigJson: this.gameConfig
        // })
        // bulletNode.emit("init-data", {
        //     direction: this.currentShootDiraction,
        //     targetEnemy: this.currentTargetEnemy
        // })
    }
}
