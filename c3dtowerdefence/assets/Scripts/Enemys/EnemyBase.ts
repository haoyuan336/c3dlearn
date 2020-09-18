import { _decorator, Component, Node, CCInteger, v3, Vec3, tween, path, Tween, CameraComponent, Vec2, v2, JsonAsset, game, isValid, ProgressBarComponent, RigidBodyComponent, SkeletalAnimationComponent, ParticleSystemComponent, bezier, find } from 'cc';
import { State } from './../util/State'
import { GameController } from './../GameController';
// import { Enemy } from './Enemy';
import { BaseObject } from './../BaseObject'
import { DeadEnemyObj, EnemyController } from '../EnemyController';
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
    // private endPos: Vec3 = null;
    // private startPos: Vec3 = null;
    private enemyCtl: EnemyController = null;
    private currentMoveTw: Tween = null;
    // private gameController: GameController = null;
    private groundMapCtl: GroundMapCtl = null;
    private beAttackedCb = null;

    private bezierPathList: Vec3[] = [];
    private currentBoneAnimName = "";
    // private currentMoveIndex: number = 0;
    // private currentMovePos: Vec3 = null;
    // private moveSpeed: number = 0;
    @property({ type: Node })
    public caidaiEffect: Node = null;
    public init(gameConfig: Object,gameController: GameController, startPos: Vec3, endPos: Vec3) {
        super.init(gameConfig, this.gameController);

        this.groundMapCtl = find("GameController").getComponent(GroundMapCtl);
        this.gameConfigJson = gameConfig;
        this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
        this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
        this.currentHealthCount = this.healthCount;
        // this.endPos = endPos;
        // this.startPos = startPos;
        // let direction = new Vec3(this.startPos).subtract(this.endPos).normalize();
        // let angle = new Vec2(direction.x, direction.z).signAngle(v2(-1, 0));
        // this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);
        let angle = this.getLookAtAngle(this.node.position, endPos);

        this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);

    }
    enterShowBossEnter() {
        if (this.currentMoveTw) {
            this.currentMoveTw.stop();
        
        }
    }
    contiuePlayMoveAnim() {
        //继续行走
        if (this.currentMoveTw) {
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            let state = skeleteAnim.getState(this.currentBoneAnimName);
            state.speed = 3;
            this.scheduleOnce(()=>{
                // this.currentMoveTw.start();
                let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
                let currentState = skeleteAnim.getState(this.currentBoneAnimName);
                currentState.speed = 1;
            }, 3);
        }
    }

    showEnemyEnterAnim(index: number, enemtCtl: EnemyController, gameCtl: GameController, startPos: Vec2, endPos: Vec2) {
        let node = this.node;
        this.enemyCtl = enemtCtl;
        this.enemyCtl.node.on("frozen-all-enemy", this.forzenSelf.bind(this), this);

        this.gameController = gameCtl;
        // this.enemyCtl.node.on('enter-show-boss-enter-state', this.enterShowBossEnter, this);
        // this.enemyCtl.node.on("enter-continue-play-move-anim", this.contiuePlayMoveAnim, this);


        return new Promise((resolve, reject) => {
            let tw = new Tween(node);
            let pos = node.position;
            tw.delay(0.1 * index)
            tw.set({ scale: v3(0, 0, 0) })
            tw .show();
            tw.call(() => {
                node.active = true;
            })
            tw.to(0.1, { scale: v3(1, 1, 1) })
            // bounceOut quartIn
            // tw.to(0.4, { position: v3(pos.x, 0, pos.z) }, { easing: "bounceOut" })
            tw.to(0.4, { position: v3(pos.x, 0, pos.z) })

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
        // let tw = new Tween(this.node);

        let bezier = new BezierN(pathPosList); //通过获取到的 路径点，来制作一条贝塞尔曲线
        this.bezierPathList = bezier.getPointList(30); //路径密度为20
        // let allLength = BezierN.getPathLength(this.bezierPathList);
        // let preTime = allLength / this.moveSpeed;
        let tw = new Tween(this.node);
        for (let i = 0; i < this.bezierPathList.length - 5; i++) {
            let time = 0;
            // let targetPos =
            let angle = 0;
            if (i === 0) {
                let dis = v3(this.node.position).subtract(this.bezierPathList[i]).length();
                time = dis / this.moveSpeed;
                angle = this.getLookAtAngle(this.node.position, this.bezierPathList[i]);
            } else {
                let dis = v3(this.bezierPathList[i - 1]).subtract(this.bezierPathList[i]).length();
                angle = this.getLookAtAngle(this.bezierPathList[i - 1], this.bezierPathList[i]);

                time = dis / this.moveSpeed
            }
            // this.node.eulerAngles
            // let preTime = v3(this.)
            // tw.set({ eulerAngles: v3(0, angle * 180 / Math.PI, 0) })
            tw.to(time, {
                position: this.bezierPathList[i],
                eulerAngles: v3(0, angle * 180 / Math.PI, 0)
            })
        }

        tw.call(()=>{
            this.state.setState("enter-attack-state");
        })
        tw.start();
        
        this.currentMoveTw = tw;

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
        let dir = v2(-1, 0);
        let angle = v2(vector.x, vector.z).signAngle(dir);
        return angle;
    }
    forzenSelf(){
        //冰冻自己
        if(this.currentMoveTw){
            this.currentMoveTw.stop();
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            let stateAnim = skeleteAnim.getState(this.currentBoneAnimName);
            stateAnim.pause();
        }
    }
    onLoad() {
        this.state.addState("enter-attack-state", ()=>{
            console.log("移动结束");
            //进入攻击状态
            this.currentBoneAnimName = "骨架|AttackAnim";
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            skeleteAnim.play(this.currentBoneAnimName);
            this.scheduleOnce(()=>{
                this.enemyCtl.enemyAttacked();//敌人发动了攻击
            }, this.animSpeedMulOffset);
        })
        this.state.addState("over", () => {
            this.enemyCtl.removeEnemyInList(this.node);
            this.node.destroy();

        });
        this.state.addState("to-dead", () => {
            this.enemyCtl.pushOneEnemyDeadData(new DeadEnemyObj(this.objectType,this.getCurrentGoldCount()));
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
            //开始移动 
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            if (skeleteAnim) {
                this.currentBoneAnimName = "骨架|MoveAnim"

                skeleteAnim.play(this.currentBoneAnimName);
                // let clips = skeleteAnim.clips;
                // let moveClip = null;
                // for (let i = 0 ; i < clips.length ; i ++){
                //     // moveClips = clips[i];
                //     let clip = clips[i];
                //     console.log("clip name", clip.name);
                //     if (clip.name === '骨架|MoveAnim'){
                //         moveClip = clip;
                //     }
                // }
                // if (moveClip){
                //     skeleteAnim.play(moveClip.)
                // }
            }

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
        //     if (this.state.getState() === 'run') {
        //         if (!this.currentMovePos) {
        //             if (this.currentMoveIndex < this.bezierPathList.length) {
        //                 this.currentMovePos = this.bezierPathList[this.currentMoveIndex];

        //             } else {
        //                 //移动结束
        //                 console.log("move over");
        //             }
        //         } else {
        //             let dir = v3(this.currentMovePos).subtract(this.node.position).normalize();
        //             let dis = dir.length();
        //             console.log("dis", dis);
        //             if (dis > 1) {
        //                 this.node.position = v3(this.node.position).add(dir.normalize().multiplyScalar(deltaTime));

        //             } else {
        //                 this.currentMoveIndex++;
        //                 this.currentMovePos = null;
        //             }

        //         }


        //         // if (this.healthBar && this.cameraNode) {
        //         //     let pos: Vec3 = v3(0, 0, 0);
        //         //     this.cameraNode.convertToUINode(this.node.getWorldPosition(), this.healthBar.parent, pos);
        //         //     pos.y += 50;
        //         //     // console.log("pos", pos);
        //         //     this.healthBar.setPosition(pos);
        //         //     this.healthBar.active = true;
        //         //     // this.healthBar.setScale(v3(pos.z, pos.z, pos.z));
        //         // }

        //     }
    }
    playBossEnterAnim() {
        //播放boss 的进场动画
        return new Promise((resolve, reject) => {
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent)
            let clips = skeleteAnim.clips;
            let showClip = undefined;
            for (let i = 0; i < clips.length; i++) {
                let clip = clips[i];
                if (clip.name === 'boss-show') {
                    showClip = clip;
                }
            }
            if (showClip) {
                skeleteAnim.play('boss-show');
                this.scheduleOnce(() => {
                    resolve();
                }, showClip.length)
            } else {
                skeleteAnim.play("骨架|MoveAnim")
                this.scheduleOnce(() => {
                    resolve()
                }, 1);
            }
        })
    }

    onDestroy(){
        // this.node.off('enter-show-boss-enter-state', this.enterShowBossEnter, this);
        // this.node.off('enter-continue-play-move-anim', this.contiuePlayMoveAnim, this);
        this.enemyCtl.node.off("frozen-all-enemy", this.forzenSelf, this);
    }
  
}
