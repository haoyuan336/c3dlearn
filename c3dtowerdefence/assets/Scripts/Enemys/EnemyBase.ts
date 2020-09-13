import { _decorator, Component, Node, CCInteger, v3, Vec3, tween, path, Tween, CameraComponent, Vec2, v2, JsonAsset, game, isValid, ProgressBarComponent, RigidBodyComponent, SkeletalAnimationComponent, ParticleSystemComponent, bezier, find } from 'cc';
import { State } from './../util/State'
import { GameController } from './../GameController';
// import { Enemy } from './Enemy';
import { BaseObject } from './../BaseObject'
import { EnemyController } from '../EnemyController';
import { BezierN } from '../util/BezierN';
import { GroundMapCtl } from '../GroundMapCtl';
import { FindPathWithAStart } from '../util/FindPathWithAStart';
// import { Besize } from '../util/Besize';
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
    private currentMoveTw: Tween = null;
    private gameController: GameController = null;
    private groundMapCtl: GroundMapCtl = null;
    private beAttackedCb = null;
    @property({ type: Node })
    public caidaiEffect: Node = null;
    public init(gameConfig: Object, startPos: Vec3, endPos: Vec3) {
        super.init(gameConfig);
        this.groundMapCtl = find("GameController").getComponent(GroundMapCtl);
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
    showEnemyEnterAnim(index: number, enemtCtl: EnemyController, gameCtl: GameController, startPos: Vec2, endPos: Vec2) {
        let node = this.node;
        this.enemyCtl = enemtCtl;
        this.gameController = gameCtl;
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
                this.startRun(startPos, endPos);
                resolve();
            })
            tw.start();
        })
    }
    startRun(startPos: Vec2, endPos: Vec2) {

        //
        // let pathList = this.groundMapCtl.getPathList(startPos, endPos);
        // console.log("path list", pathList);
        // let tw = new Tween(this.node);
        // for (let i = 0; i < pathList.length; i++) {
        //     tw.to(1, {
        //         position: pathList[i]
        //     })
        // }
        // tw.call(() => {
        //     this.state.setState("over");
        // })
        // tw.start();
        let mapNodeList = this.groundMapCtl.getMapNodeList();
        let obsPosList = this.groundMapCtl.getObsPosList();
        let pathTool = new FindPathWithAStart(mapNodeList, [startPos.x, startPos.y], [endPos.x, endPos.y]);
        let obsPosDataList = [];
        for (let i = 0; i < obsPosList.length; i++) {
            let obsPos = obsPosList[i];
            obsPosDataList.push([obsPos.x, obsPos.y]);
        }
        pathTool.updateObsData(obsPosDataList);
        let pathList = pathTool.findPathList();
        let pathPosList: Vec3[] = [];
        for (let i = 0; i < pathList.length; i++) {
            let pos = pathList[i];
            pathPosList.push(this.groundMapCtl.getMapNodeList().getValue(pos[0], pos[1]).position);
        }
        let tw = new Tween(this.node);

        for (let i = 0; i < pathPosList.length; i++) {
            // let angle = this.node.eulerAngles;
            // if (i !== 0) {
            //     //如果当前的点不是0点 
            //     let startPos = pathPosList[i - 1];
            //     let targetPos = pathPosList[i];
            //     let targetAngle = this.getLookAtAngle(startPos, targetPos);
            //     angle = v3(0, targetAngle, 0);
            // }
            // // let targetAngle = this.getLookAtAngle(pathPosList[i]) * 180 / Math.PI;
            // // console.log("target angle", targetAngle);
            // tw.to(0.01, {
            //     eulerAngles: angle
            // })
            tw.to(1, {
                position: pathPosList[i]
            })
        }
        tw.call(() => {
            this.state.setState("over");
        })
        // this.node.eulerAngles
        tw.start();

        this.state.setState("run");
        // let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent)
        // if (skeleteAnim) {
        //     if (skeleteAnim.defaultClip) {
        //         let defaultClip = skeleteAnim.defaultClip.name;
        //         let animState = skeleteAnim.getState(defaultClip);
        //         let length = animState.length;
        //         animState.speed = this.moveSpeed * this.animSpeedMulOffset;
        //     }
        // }
    }
    getLookAtAngle(startPos, targetPoint: Vec3) {
        //获取到朝向的角度
        let vector = v3(startPos).subtract(targetPoint);
        let dir = v2(0, 1);
        let angle = v2(vector.x, vector.z).signAngle(dir);
        return angle;
    }
    onLoad() {

        this.state.addState("over", () => {
            this.enemyCtl.removeEnemyInList(this.node);
            this.node.destroy();

        });
        this.state.addState("to-dead", () => {
            if (this.currentMoveTw) {
                this.currentMoveTw.stop();
            }
            let tw = new Tween(this.rootNode);
            tw.by(0.1, { scale: v3(1, 1, 1) })
            tw.call(() => {
                this.rootNode.active = false;
                this.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0)
                let dis = v3(this.node.position).subtract(v3(0, 0, 0)).length();
                // console.log("dis ", dis);
                if (dis < 18) {
                    this.caidaiEffect.active = true;
                }
                // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));
                this.gameController.showAddGoldAnimEffect(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));
            });
            tw.delay(1)
            tw.call(() => {
                this.state.setState("over");
            })
            tw.start();
            // let currentPos = this.node.position;
            // let bezier = new BezierN(
            //     [
            //         currentPos,
            //         v3(currentPos.x + Math.random() * 100 - 50, 10 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50),
            //         v3(currentPos.x + Math.random() * 100 - 50, 20 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50),
            //         v3(currentPos.x + Math.random() * 100 - 50, 20 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50),
            //         v3(currentPos.x + Math.random() * 100 - 50, 20 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50)

            //     ]
            // );
            // let pointList = bezier.getPointList(100);
            // let tw = new Tween(this.node);
            // // this.node.eulerAngles
            // for (let i = 0; i < pointList.length; i++) {
            //     let point = pointList[i];
            //     let subV3 = v3(point).subtract(this.node.position)
            //     let eulerAngles = this.node.eulerAngles.y;
            //     if (subV3.x !== 0 && subV3.z !== 0) {
            //         eulerAngles = v2(1, 0).signAngle(v2(subV3.x, subV3.z)) * 180 / Math.PI;
            //     }
            //     tw.to(0.008, {
            //         position: pointList[i],
            //         eulerAngles: v3(0, eulerAngles, 0),
            //         scale: v3((1 - i / pointList.length),(1 - i / pointList.length),(1 - i / pointList.length))
            //     })
            // }
            // tw.call(()=>{
            //     this.state.setState("over");
            // })
            // // tw.to(0.2 * pointList.length, {scale: v3(0,0,0)})
            // // tw.parallel(new Tween(this.node).to(0.007 * pointList.length, { scale: v3(0, 0, 0) }));
            // // tw.
            // tw.start();

            // let tw = new Tween(this.node);
            // tw.by(0.2, { scale: v3(1, 1, 1) });
            // tw.call(() => {
            //     this.state.setState("over");
            // })
            // tw.start();

        });
        this.state.addState("run", () => {
            // console.log("start move");
            // let tw = new Tween(this.node);
            // let moveTime = new Vec3(this.startPos).subtract(this.endPos).length() / this.moveSpeed;
            // tw.to(moveTime, { position: this.endPos });
            // tw.call(() => {
            //     // this.state.setState("to-dead");
            // })
            // tw.to(0.2, { scale: v3(0, 0, 0) });
            // tw.call(() => {
            //     this.state.setState("over");
            // })
            // tw.start();
            // this.currentMoveTw = tw;
            // 开始运行之后，计算一条 最短路径
            // let pathList = this.groundMapCtl.getPathList();

            // if (this.healthBar) {
            //     // this.healthBar.active = true;
            // }
        });
        this.node.on("be-attacked", (data) => {
            //被攻击
            // console.log("被攻击", attackNum);
            if (this.state.getState() !== 'run') {
                return;
            }
            this.beAttackedCb = data.cb;
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
                if (this.beAttackedCb) {
                    this.beAttackedCb(true);
                    //被打死了
                }
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
