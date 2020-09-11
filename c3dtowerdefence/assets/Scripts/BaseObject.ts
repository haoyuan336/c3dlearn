import { _decorator, Component, Node, CCString, Vec3, CCFloat, game } from 'cc';
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
    public init(gameConfig: Object, startPos?: Vec3, endPos?: Vec3) {
        // this.baseGasNum = gameConfig[]
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
    }
    getCurrentAttackNum(addValue?: number) {
        let offsetValue = 0;
        if (addValue) {
            offsetValue = addValue;
        }
        // Math.floor(this.buildCost * processLevel * (processLevel + 1) * 0.2)
        let processLevel = this.currentLevel;

        return this.baseAttackNum * processLevel * (processLevel + 1) * 0.1 + offsetValue;
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
    getUpdateCost(level?: number): number {
        //获取升级需要消耗的金币个数

        let processLevel = this.currentLevel + 1;
        if (level) {
            processLevel = level;
        }
        return Math.floor(this.buildCost * processLevel * (processLevel + 1));
        // return this.baseAttackNum
    }
    getDestroyCount(): number {
        let currentLevelCost = this.getUpdateCost(this.currentLevel);
        return Math.floor(currentLevelCost * 0.4);
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
}
