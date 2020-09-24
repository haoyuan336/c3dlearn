import { _decorator, PhysicsRayResult, Component, Node, Vec2, Vec3, Quat, v3, v2, Prefab, instantiate, JsonAsset, CameraComponent, find, ColliderComponent, SkeletalAnimationComponent, isValid, CCFloat, Tween, NodePool } from 'cc';
import { State } from './../util/State';
import { GameController } from './../GameController'
import { EnemyBase } from './../Enemys/EnemyBase'
import { BulletBase } from './../BulletBase';
import { BaseObject } from './../BaseObject'
import { EnemyController } from '../EnemyController';
import { TowerBuildBase } from '../TowerBuildBase/TowerBuildBase';
import { SkillCtl } from '../UI/SkillCtl';
const { ccclass, property } = _decorator;

@ccclass('TowerBase')
export class TowerBase extends BaseObject {
    // public gameController: GameController = null;
    private state: State = new State();
    private currentTargetEnemy: Node = null;
    private currentShootTime: number = 0;
    // private shootDuraction: number = 1;


    @property({ type: Prefab })
    public bulletPrefab: Prefab = null;
    @property({ type: Node })
    public bulletStartPosList: Node[] = [];

    @property({ type: Node })
    public weaponBaseNode: Node = null; //武器底座节点
    // @property({ type: Node })
    // public bulletStartPos: Node = null;
    // @property({type: Node})
    // public armNode: Node = null;

    // private bulletMoveTime: number = null;
    private currentShootDiraction: Vec3 = v3(0, 0, 0);
    // @property({ type: Node })
    // public rootNode: Node = null;

    // private attackRate: number = null;
    private gameConfig: Object = null;

    @property({ type: CCFloat })
    public attackAnimEventTimeOffset = 0;

    private towerBuildBase: Node = null;

    @property({ type: Node })
    public attackRangeNode: Node = null;


    private skillCtl: SkillCtl = null;

    // private isCanAttack: 

    init(gameConfig: Object, gameController: GameController) {
        super.init(gameConfig, gameController);
        this.skillCtl = find("Canvas").getComponent(SkillCtl);
        this.gameConfig = gameConfig;
        console.log('tower base init');
        this.node.emit("init", gameConfig, gameController);
        // this.node.on("weapon-euler-angles-init", ()=>{
        //     //武器角度归为
        // })
    }
    start() {
        console.log("tower base start");
        this.state.setState("run");
        // let moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度
        // let accY = GameController.accY;
        this.gameController = find("GameController").getComponent(GameController);

        // this.gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;

        // let attackRate = this.gameConfig[this.objectType].ShootRate;
        // this.attackRate = attackRate;
        // this.shootDuraction = 1 / this.baseAttackRate;

        this.gameController.node.on("touch-screen-to-3d", this.touchScreenTo3d.bind(this), this);
        this.gameController.node.on("destroy-all-tower", this.destroyAllTower.bind(this), this);
        this.state.addState("releas-skill", () => {
            if (this.currentTargetEnemy) {
                this.currentTargetEnemy = null;
            }
            this.node.emit("release-skill", () => {
                //释放技能
                this.state.setState('run');
            })
        })
        this.state.addState("destroy", () => {
            //销毁状态
            // if (this.towerBuildBase) {
            //     this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
            // }
            // this.node.destroy();
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            // if (skeleteAnim.clips.length < 3) {
            //     this.node.destroy();
            //     if (this.towerBuildBase) {
            //         this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
            //     }
            //     return;
            // }
            let destroyAnimName = "骨架|todestroy"
            // let destroyClip = skeleteAnim.clips[2];
            let stateAnim = skeleteAnim.getState(destroyAnimName);
            if (stateAnim) {
                stateAnim.repeatCount = 1;
                skeleteAnim.play(destroyAnimName);
                this.scheduleOnce(() => {
                    if (this.towerBuildBase) {
                        this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
                    }
                    let randomPos = v3(Math.random() * 2, 0, Math.random() * 2);
                    this.gameController.getComponent(GameController).showAddGoldAnimEffect(this.getDestroyCount(), v3(this.node.position.x, 0, this.node.position.z).add(randomPos));

                    this.node.destroy();

                }, stateAnim.length)
            } else {
                this.node.destroy();
                if (this.towerBuildBase) {
                    this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
                }
            }



        })
    }
    destroyAllTower() {
        this.node.destroy();
    }
    touchScreenTo3d(resultList: PhysicsRayResult[]) {
        console.log("射线检测到了 tower");
        // if (collider.node && collider.node.uuid === this.node.uuid) {
        //     this.gameController.emit("touch-tower", this.node);
        // }
        if (this.state.getState() !== 'run') {
            return;
        }
        for (let i = 0; i < resultList.length; i++) {
            let result = resultList[i];
            if (result.collider.node.uuid === this.node.uuid) {
                //点中了此塔
                this.gameController.node.emit("touch-tower", this.node);
                break;
            }
        }


    }
    onDestroy() {
        console.log("销毁");
        this.gameController.node.off('touch-screen-to-3d', this.touchScreenTo3d, this);
        this.gameController.node.on("destroy-all-tower", this.destroyAllTower, this);
    }
    toDestroy() {
        //去销毁
        this.state.setState('destroy');
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
                let targetEnemyNode: Node = undefined;
                for (let i = 0; i < enemyNodeList.length; i++) {
                    let enemyNode = enemyNodeList[i];
                    if (isValid(enemyNode) && enemyNode.getComponent(EnemyBase).getIsCanLock() &&
                        !enemyNode.getComponent(EnemyBase).getIsDead() &&
                        this.getCanAttackEnemy(enemyNode)) {
                        let length = new Vec3(enemyNode.position).subtract(this.node.position).length()
                        if (length < minLength) {
                            minLength = length;
                            // this.currentTargetEnemy = enemyNode;
                            targetEnemyNode = enemyNode;
                        }
                    }
                }
                // if (this.currentTargetEnemy) {
                // this.currentTargetEnemy.getComponent(EnemyBase).setBeLocked(this.node);
                // }
                if (targetEnemyNode) {
                    let dis = v2(targetEnemyNode.position.x, targetEnemyNode.position.z).subtract(v2(this.node.position.x, this.node.position.z)).length();
                    // console.log("dis", dis);
                    // this.rootNode.lookAt(targetEnemyNode.position);

                    if (dis < this.getCurrentAttackRange()) {
                        // this.rootNode.lookAt(targetEnemyNode.position);
                        this.currentTargetEnemy = targetEnemyNode;
                    }
                }
            }
            if (isValid(this.currentTargetEnemy)) {
                // console.log("找到了目标敌人");
                this.rootNode.lookAt(this.currentTargetEnemy.position);
                if (this.currentTargetEnemy.getComponent(EnemyBase) &&
                    this.currentTargetEnemy.getComponent(EnemyBase).getIsDead()) {
                    this.currentTargetEnemy = null;
                } else {
                    this.currentShootDiraction = v3(this.currentTargetEnemy.position)
                        .subtract(v3(this.node.position))
                    // let angle = v2(this.currentShootDiraction.x, this.currentShootDiraction.z).signAngle(v2(0, -1));
                    // console.log("angle", angle);
                    // this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);


                    let quat = new Quat();
                    let v = v3(this.currentShootDiraction.x, 0, this.currentShootDiraction.z).normalize();
                    Quat.fromViewUp(quat, v, Vec3.UP);
                    let lerpQ = new Quat();
                    Quat.lerp(lerpQ, this.node.rotation, quat, 0.2);
                    this.node.rotation = quat;
                }
            }
            if (isValid(this.currentTargetEnemy)) {
                if (this.currentShootTime > this.shootDuraction) {
                    let dis = v2(this.currentTargetEnemy.position.x, this.currentTargetEnemy.position.z).subtract(v2(this.node.position.x, this.node.position.z)).length();
                    if (dis > this.getCurrentAttackRange()) {
                        this.currentTargetEnemy = undefined;
                        return;

                    }
                    this.currentShootTime = 0;
                    this.shootOneBullet(this.getCurrentAttackRate(), this.currentShootDiraction, this.getCurrentAttackNum());
                } else {
                    this.currentShootTime += deltaTime;
                }
            } else {
                this.currentTargetEnemy = null;
            }
        }
    }
    getCurrentAttackRate() {
        return this.baseAttackRate
    }
    shootOneBullet(attackRate: number, currentShootDiraction: Vec3, attackNum: number) {
        // if(this.weaponBaseNode){
        //     let weaponSkeleteAnim = this.weaponBaseNode.getComponent(SkeletalAnimationComponent);
        //     if (weaponSkeleteAnim){
        //         let animName = "骨架|AttackAnim";
        //         let animState = skeleteAnim.getState(animName)';'
        //     }
        // }

        let baseNodeList: Node[] = [this.rootNode];
        if (this.weaponBaseNode) {
            baseNodeList.push(this.weaponBaseNode);
        }
        let length: number = 0;
        for (let i = 0; i < baseNodeList.length; i++) {
            let skeleteAnim = baseNodeList[i].getComponent(SkeletalAnimationComponent);
            if (skeleteAnim) {
                // let defaultAnimName = skeleteAnim.defaultClip.name;
                let animName = "骨架|AttackAnim";
                let animState = skeleteAnim.getState(animName);
                let lengthTime = animState.length * 1 / attackRate;
                // console.log("length", length);
                skeleteAnim.play(animName);
                animState.repeatCount = 1;
                length = lengthTime;
                // let stateAnim = skeleteAnim.getState(animName);
            }

        }


        // stateAnim.setTime(0.5);
        this.scheduleOnce(() => {
            // if (isValid(this.currentTargetEnemy)) {
            this.createOneTimeBullet(currentShootDiraction, this.getCurrentAttackNum());
            // }
        }, length * this.attackAnimEventTimeOffset)
    }
    createOneTimeBullet(direction: Vec3, attackNum: number) {
        for (let i = 0; i < this.bulletStartPosList.length; i++) {
            let bulletPosNode = this.bulletStartPosList[i];
            let bulletNode = instantiate(this.bulletPrefab);
            bulletNode.parent = this.node.parent;
            bulletNode.active = false;
            bulletNode.setPosition(bulletPosNode.worldPosition);
            bulletNode.active = true;
            console.log("createOneBullet base attack num", attackNum);
            // direction.
            let randomVec = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
            direction.add(randomVec);
            bulletNode.getComponent(BulletBase).init(this.gameConfig, this.gameController, {
                direction: direction,
                targetEnemy: this.currentTargetEnemy,
                baseAttackNum: attackNum,
                targetTower: this

            })
        }
    }
    enemyDeadByThis(isDead: boolean) {
        //敌人被此塔打死
        if (isDead) {
            //如果敌人被打死了, 那么此塔增加能量 一个点
            this.skillCtl.showAddPowerAnimEffect(2, this.node.position);
        }
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
    setTowerBuildBase(towerBuildBase: Node) {
        this.towerBuildBase = towerBuildBase;
    }
    updateLevel() {
        super.updateLevel();

    }
    showAttackRange() {
        // this.attackRangeNode
        let attackRange = this.getCurrentAttackRange(); //获取基础攻击范围
        console.log("attack range", attackRange);
        this.attackRangeNode.active = true;
        let tw = new Tween(this.attackRangeNode);
        tw.to(0.1, {
            scale: v3(attackRange * 2, attackRange * 2, attackRange * 2)
        })
        tw.start();
    }
    closeAttackRange() {
        let tw = new Tween(this.attackRangeNode)
        tw.to(0.1, { scale: v3(1, 1, 1) })
        tw.call(() => {
            this.attackRangeNode.active = false;
        })
        tw.start();
    }
}


