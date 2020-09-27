import { _decorator, Component, Node, CCString, Vec3, v3, CCFloat, game, TERRAIN_HEIGHT_BASE, SpriteFrame, Quat } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('BaseObject')
export class BaseObject extends Component {
    @property({ type: "" })
    public objectType = "default";
    @property({ type: Node })
    public rootNode: Node = null
    @property({ type: CCFloat })
    public animSpeedMulOffset: number = 1;

    public currentLevel: number = 1;

    public baseGasNum: number = 0; //基础气值
    public baseAttackNum: number = 0; //基础攻击值
    public baseAttackRate: number = 0; //基础攻击频率
    public baseRotateAngle: number = 0; //基础旋转技能，旋转角度
    public rotateSpeed: number = 0; //旋转技能的旋转角速度
    public baseGoldCount: number = 0; //基础的金币个数
    public buildCost: number = 0; //建造需要消耗的金币
    public shootDuraction: number = 0; //基础攻击间隔
    public baseAttackRange: number = 0; //基础攻击范围
    public towerUpdateMaxLevel: number = 0; //塔升级到的最高等级

    protected currentGasNum: number = 0; //当前的气值

    protected moveSpeed: number = 0; //移动速度

    protected isCollisionGround: boolean = false;//是否与地面碰撞发生反弹

    public leftTime: number = 0; // 生命周期

    public gameController: GameController = null;

    public towerIndexType: number = 0; //当前塔的序号信息
    public iconSpriteFrame: string = null; //icon的精灵帧
    public activeCostGoldCount: number = 0; //激活需要的金币个数
    private enemyMoveType = "walk";
    private canAttackMoveTypeList: string[] = []; //可以攻击的移动类型列表 
    private enemyBulletType: number = 0; //敌人的子弹类型
    private isCollisionDestroy: boolean = false; //碰撞之后 是否销毁
    private enemyIndexType: number = 0; //敌人的

    private isConlony: boolean = false; //是否集群运动
    private bulletRecoverTime: number = 0; //子弹的恢复时间

    public init(gameConfig: Object, gameController: GameController, startPos?: Vec3, endPos?: Vec3, objectType?: string) {
        // this.baseGasNum = gameConfig[]
        if (objectType) {
            this.objectType = objectType;
        }
        console.log("base object type", this.objectType);

        this.gameController = gameController;
        if (gameConfig[this.objectType].BaseGasNum) {
            this.baseGasNum = gameConfig[this.objectType].BaseGasNum;

        }

        this.currentGasNum = this.baseGasNum;

        if (gameConfig[this.objectType].MoveSpeed) {
            this.moveSpeed = gameConfig[this.objectType].MoveSpeed;

        }
        if (gameConfig[this.objectType].isCollisionGround) {
            this.isCollisionGround = gameConfig[this.objectType].isCollisionGround;
        }
        if (gameConfig[this.objectType].BaseAttackNum) {
            this.baseAttackNum = gameConfig[this.objectType].BaseAttackNum;
        }
        if (gameConfig[this.objectType].ShootRate) {
            this.baseAttackRate = gameConfig[this.objectType].ShootRate;
            this.shootDuraction = 1 / this.getCurrentShootRate();
        }
        if (gameConfig[this.objectType].BaseRotateAngle) {
            this.baseRotateAngle = gameConfig[this.objectType].BaseRotateAngle;
        }
        if (gameConfig[this.objectType].LeftTime) {
            this.leftTime = gameConfig[this.objectType].LeftTime;
        }
        if (gameConfig[this.objectType].RotateSpeed) {
            this.rotateSpeed = gameConfig[this.objectType].RotateSpeed;
        }
        // "BaseGoldCount": 1
        if (gameConfig[this.objectType].BaseGoldCount) {
            this.baseGoldCount = gameConfig[this.objectType].BaseGoldCount;
        }
        if (gameConfig[this.objectType].BuildCost) {
            this.buildCost = gameConfig[this.objectType].BuildCost;
        }
        if (gameConfig[this.objectType].AttackRange) {
            this.baseAttackRange = gameConfig[this.objectType].AttackRange;
        }
        if (gameConfig['TowerMaxLevel']) {
            this.towerUpdateMaxLevel = gameConfig['TowerMaxLevel'];
        }
        if (gameConfig[this.objectType]['Index']) {
            this.towerIndexType = gameConfig[this.objectType]['Index'];
        }
        if (gameConfig[this.objectType]['IconSprteFrame']) {
            this.iconSpriteFrame = gameConfig[this.objectType]['IconSprteFrame']
        }
        if (gameConfig[this.objectType]['ActiveCost']) {
            this.activeCostGoldCount = gameConfig[this.objectType]['ActiveCost'];
        }
        if (gameConfig[this.objectType]['MoveType']) {
            this.enemyMoveType = gameConfig[this.objectType]['MoveType'];
        }
        if (gameConfig[this.objectType]["CanAttackType"]) {
            this.canAttackMoveTypeList = gameConfig[this.objectType]['CanAttackType'];
        }
        if (gameConfig[this.objectType]['EnemyBulletType']) {
            this.enemyBulletType = gameConfig[this.objectType]['EnemyBulletType'];//取出敌人的子弹类型
        }
        if (gameConfig[this.objectType]['isCollisionDestroy']) {
            this.isCollisionDestroy = gameConfig[this.objectType]['isCollisionDestroy'];
        }
        if (gameConfig[this.objectType]['EnemyIndex']) {
            this.enemyIndexType = gameConfig[this.objectType]['EnemyIndex'];
        }

        if (gameConfig[this.objectType]['Colony']) {
            this.isConlony = gameConfig[this.objectType]['Colony'];
        }
        if (gameConfig[this.objectType]['BulletRecoverTime']){
            //子弹的恢复时间
            this.bulletRecoverTime = gameConfig[this.objectType]['BulletRecoverTime'];
        }
    }
    getBaseAttackDamage() {
        return this.baseAttackNum;
    }
    getCurrentAttackNum() {
        // let offsetValue = 0;
        // if (addValue) {
        //     offsetValue = addValue;
        // }
        // // Math.floor(this.buildCost * processLevel * (processLevel + 1) * 0.2)
        // let processLevel = this.currentLevel;
        // let localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
        // console.log("local damage value", localLevel);

        let baseDamageNum = this.baseAttackNum;
        console.log("base damage num", baseDamageNum);
        //1,2,3 = 6  (3+1)*3/2 = 6   1,2,3,4 = 10   5 * 4 / 2 = 10;
        let currentLevelDamage = 1 * (this.currentLevel + 1) * this.currentLevel * 0.5;
        console.log("current level damage", currentLevelDamage);
        let localLevelDamage = this.getLocalDamageNum();

        return baseDamageNum + currentLevelDamage + localLevelDamage;
    }
    getLocalDamageNum() {
        // 获取当前永久攻击力 
        // let baseAttackNum = this.baseAttackNum;
        let localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
        console.log("local level", localLevel);
        let localDamage = (1 + localLevel) * localLevel * 0.5;
        console.log(this.objectType + ":local damage", localDamage);
        return localDamage;
    }
    getCurrentSkillRotateAngle() {
        //获取旋转技能的旋转角度
        return this.baseRotateAngle;
    }

    getCurrentShootRate() {
        // baseAttackNum
        let currentShootRate = this.baseAttackRate;
        console.log("current shoot rate", currentShootRate);
        currentShootRate *= (1 + this.currentLevel * this.currentLevel * 0.01);

        console.log("current shoor rate", currentShootRate);
        //不能太快 设置一个封顶
        if (currentShootRate > 10) {
            currentShootRate = 10;
        }
        return currentShootRate;
        // return this.baseAttackRate + this.node.getComponent(BaseObject).baseAttackRate;
        // return this.baseAttackRate * (this.currentLevel) * (this.currentLevel + 1) * 0.1;
    }
    getCurrentGoldCount(): number {
        return this.baseGoldCount;
    }
    getCurrentLevel(): number {
        return this.currentLevel;
    }
    getUpdateCost(): number {
        //获取升级需要消耗的金币个数

        let processLevel = this.currentLevel + 1;
        // if (level) {
        //     processLevel = level;
        // }
        let buildCost = this.buildCost;

        return buildCost + (1 + processLevel) * processLevel * 0.5;
        // return this.baseAttackNum
    }
    getUpdateLocalLevelCost() {
        //获取升级本地等级需要的
        let localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
        console.log("local level", localLevel);
        let cost = Math.round(Math.pow((localLevel + 1), 2) * 0.5);
        return cost;
    }
    getNextLocallevelAddDamage(): number {
        //获取下一级增加多少 上海值
        let localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
        return localLevel + 1;
    }
    getDestroyCount(): number {
        // let currentLevelCost = this.getUpdateCost();
        let buildCost = this.buildCost;
        let currentLevel = this.currentLevel;
        return Math.round((buildCost + (1 + currentLevel) * currentLevel * 0.5) * 0.8);
    }
    updateLevel() {
        this.currentLevel++;
        // this.shootDuraction = 
        let currentShootRate = this.getCurrentShootRate();

        this.shootDuraction = 1 / currentShootRate;
        console.log("升级之后 的 攻击事件间隔", this.shootDuraction);

    }
    getCurrentAttackRange() {
        //获取当前的攻击范围
        let currentLevel = this.currentLevel;
        return this.baseAttackRange * (1 + currentLevel * (currentLevel - 0.5) * 0.01);
    }
    getTowerIsMax(): boolean {
        //获取塔是不是升级满了
        console.log('current level', this.currentLevel);
        console.log("tower update max level", this.towerUpdateMaxLevel);
        if (this.currentLevel >= this.towerUpdateMaxLevel) {
            return true;
        }
        return false;
    }
    getIconSprteFrame() {
        return this.iconSpriteFrame;
    }
    getWeaponIsActive(): boolean {
        return this.gameController.playerData.getWeaponIsActive(this.towerIndexType);
    }
    updateLocalLevel(updateLevel) {
        //更新永久等级
        let localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
        localLevel += updateLevel;
        console.log('升级的jishu', updateLevel);
        this.gameController.playerData.updateTowerLocalLevel(this.towerIndexType, localLevel);
        // this.gameController.playerData.update
    }
    getActiveCostGoldCount() {
        //获取激活需要的金币个数
        return this.activeCostGoldCount;
    }
    activeWeapon() {
        //激活武器
        this.gameController.playerData.activeTower(this.towerIndexType);

    }
    getMoveType() {
        return this.enemyMoveType;
    }
    getCanAttackEnemy(obj: Node): Boolean {
        let baseObj = obj.getComponent(BaseObject);
        if (baseObj) {
            let objType = baseObj.getMoveType();
            let list = this.canAttackMoveTypeList;
            for (let i = 0; i < list.length; i++) {
                let str = list[i];
                if (str === objType) {
                    return true;
                }
            }
        }

        return false;
    }
    getCanAttackMoveTypeList():string[]{
        return this.canAttackMoveTypeList;
    }
    getIsBoss() {
        if (this.objectType.indexOf("Boss") > -1) {
            return true;
        }
        return false;
    }
    getEnemyBulletType() {
        return this.enemyBulletType;
    }
    getIsCollisionDestroy() {
        return this.isCollisionDestroy;
    }
    getLookAtAngle(startPos, targetPoint: Vec3): Quat {
        // //获取到朝向的角度

        let dir = v3(startPos).subtract(targetPoint).normalize();
        let quat = new Quat();
        // quat.lerp
        Quat.fromViewUp(quat, dir, Vec3.UP);

        // console.log("quat", quat);
        // rotateAround
        // startPos.
        // this.node.rotate/

        return quat
    }
    getEnemyIsActive() {
        //获得当前敌人是否激活了
        return this.gameController.playerData.getEnemyIsActive(this.objectType);
    }
    getIsColony(): boolean {
        return this.isConlony;
    }
    getBulletRecoverTime():number{
        // BulletRecoverTime

        //返回子弹恢复的时间
        return this.bulletRecoverTime;
    }
    getMoveSpeed():number{
        return this.moveSpeed;
    }
}
