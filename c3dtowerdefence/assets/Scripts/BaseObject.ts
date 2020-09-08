import { _decorator, Component, Node, CCString, Vec3, CCFloat, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseObject')
export class BaseObject extends Component {
    @property({ type: "" })
    public objectType = "";
    @property({ type: Node })
    public rootNode: Node = null
    @property({ type: CCFloat })
    public animSpeedMulOffset: number = 1;

    public baseGasNum: number = 0; //基础气值
    public baseAttackNum: number = 0; //基础攻击值
    public baseAttackRate: number = 0; //基础攻击频率
    public baseRotateAngle: number = 0; //基础旋转技能，旋转角度
    public rotateSpeed: number = 0; //旋转技能的旋转角速度

    protected currentGasNum: number = 0; //当前的气值

    protected moveSpeed: number = 0; //移动速度

    protected isCollisionGround: boolean = false;//是否与地面碰撞发生反弹

    public leftTime: number = 0; // 生命周期
    public init(gameConfig: Object, startPos?: Vec3, endPos?: Vec3) {
        // this.baseGasNum = gameConfig[]
        this.baseGasNum = gameConfig[this.objectType].BaseGasNum;
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
        }
        if (gameConfig[this.objectType].BaseRotateAngle) {
            this.baseRotateAngle = gameConfig[this.objectType].BaseRotateAngle;
        }
        if (gameConfig[this.objectType].LeftTime) {
            this.leftTime = gameConfig[this.objectType].LeftTime;
        }
        if (gameConfig[this.objectType].RotateSpeed){
            this.rotateSpeed = gameConfig[this.objectType].RotateSpeed;
        }
    }
    getCurrentAttackNum(addValue?: number) {
        if (addValue) {
            return this.baseAttackNum + addValue;
        }
        return this.baseAttackNum;
    }
    getCurrentSkillRotateAngle() {
        //获取旋转技能的旋转角度
        return this.baseRotateAngle;
    }

    getCurrentShootRate() {
        // baseAttackNum
        return this.baseAttackRate + this.node.getComponent(BaseObject).baseAttackRate;
    }

}
