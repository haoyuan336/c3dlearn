import { _decorator, Component, Node, CCString , Vec3, CCFloat, game} from 'cc';
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
    protected currentGasNum: number = 0; //当前的气值

    protected moveSpeed: number = 0; //移动速度

    protected isCollisionGround: boolean = false ;//是否与地面碰撞发生反弹
    public init(gameConfig: Object, startPos?: Vec3, endPos?: Vec3) {
        // this.baseGasNum = gameConfig[]
        this.baseGasNum = gameConfig[this.objectType].BaseGasNum;
        this.currentGasNum = this.baseGasNum;

        if (gameConfig[this.objectType].MoveSpeed){
            this.moveSpeed = gameConfig[this.objectType].MoveSpeed;

        }
        if (gameConfig[this.objectType].isCollisionGround){
            this.isCollisionGround = gameConfig[this.objectType].isCollisionGround;
        }
    }
}
