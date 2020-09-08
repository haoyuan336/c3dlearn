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

    // private bulletMoveTime: number = null;
    private currentShootDiraction: Vec2 = v2(0, 0);
    // @property({ type: Node })
    // public rootNode: Node = null;

    // private attackRate: number = null;
    private gameConfig: Object = null;

    @property({ type: CCFloat })
    public attackAnimEventTimeOffset = 0;
    init(gameConfig: Object) {
        super.init(gameConfig);
        this.gameConfig = gameConfig;
        console.log('tower base init');
        this.node.emit("init", gameConfig);
    }
    start() {
        console.log("tower base start");
        this.state.setState("run");
        let moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度
        let accY = GameController.accY;
        this.gameController = find("GameController");

        // this.gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;

        // let attackRate = this.gameConfig[this.objectType].ShootRate;
        // this.attackRate = attackRate;
        this.shootDuraction = 1 / this.baseAttackRate;

        this.gameController.on("touch-screen-to-3d", (collider: ColliderComponent) => {
            console.log("射线检测到了 tower");
            // if (collider.node && collider.node.uuid === this.node.uuid) {
            //     this.gameController.emit("touch-tower", this.node);
            // }
        });

        this.state.addState("releas-skill", () => {
            if (this.currentTargetEnemy) {
                this.currentTargetEnemy = null;
            }
            this.node.emit("release-skill", () => {
                //释放技能
                this.state.setState('run');
            })
        })
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
            if (isValid(this.currentTargetEnemy)) {
                // console.log("找到了目标敌人");

                if (this.currentTargetEnemy.getComponent(EnemyBase) &&
                    this.currentTargetEnemy.getComponent(EnemyBase).getIsDead()) {
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
                    this.shootOneBullet(this.getCurrentAttackRate(), this.currentShootDiraction, this.getCurrentAttackNum());
                } else {
                    this.currentShootTime += deltaTime;
                }
            }
        }
    }
    getCurrentAttackRate() {
        return this.baseAttackRate
    }
    shootOneBullet(attackRate: number, currentShootDiraction: Vec2, attackNum: number) {

        let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
        if (skeleteAnim) {
            let defaultAnimName = skeleteAnim.defaultClip.name;
            let animState = skeleteAnim.getState(defaultAnimName);
            let length = animState.length * 1 / attackRate;
            skeleteAnim.play(defaultAnimName);
            animState.repeatCount = 1;
            this.scheduleOnce(() => {
                // if (isValid(this.currentTargetEnemy)) {
                this.createOneBullet(currentShootDiraction, this.getCurrentAttackNum(attackNum));
                // }
            }, length * this.attackAnimEventTimeOffset)
        }
    }
    createOneBullet(direction: Vec2, attackNum: number) {
        let bulletNode = instantiate(this.bulletPrefab);
        bulletNode.parent = this.node.parent;
        bulletNode.active = false;
        bulletNode.setPosition(this.bulletStartPos.worldPosition);
        bulletNode.active = true;
        // console.log("createOneBullet base attack num", attackNum);
        bulletNode.getComponent(BulletBase).init(this.gameConfig, {
            direction: direction,
            targetEnemy: this.currentTargetEnemy,
            baseAttackNum: attackNum

        })
    }
    releaseSkill() {
        //塔释放技能
        // let towerType = this.
        // let towerSkillType = th
        console.log("release skill", this.objectType);
        // let towerSkillType = this.gameConfig[this.objectType].SkillType;
        // console.log("tower skill type", towerSkillType);
        //释放的塔的技能
        this.state.setState("releas-skill"); //释放技能s
    }
   
}
