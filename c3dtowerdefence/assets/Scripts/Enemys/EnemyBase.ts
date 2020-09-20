import { _decorator, Component, Node, CCInteger, v3, Vec3, tween, path, Tween, CameraComponent, Vec2, v2, JsonAsset, game, isValid, ProgressBarComponent, RigidBodyComponent, SkeletalAnimationComponent, ParticleSystemComponent, bezier, find, Quat } from 'cc';
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
    public init(gameConfig: Object, gameController: GameController, startPos: Vec3, endPos: Vec3) {
        super.init(gameConfig, gameController);

        this.groundMapCtl = find("GameController").getComponent(GroundMapCtl);
        this.gameConfigJson = gameConfig;
        this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
        this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
        this.currentHealthCount = this.healthCount;
        let angle = this.getLookAtAngle(this.node.position, endPos);
        this.node.worldRotation = angle;

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
            this.scheduleOnce(() => {
                // this.currentMoveTw.start();
                let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
                let currentState = skeleteAnim.getState(this.currentBoneAnimName);
                currentState.speed = 1;
            }, 3);
        }
    }

    showEnemyEnterAnim(index: number, enemtCtl: EnemyController, startPos: Vec2, endPos: Vec2) {
        let node = this.node;
        this.enemyCtl = enemtCtl;
        this.enemyCtl.node.on("frozen-all-enemy", this.forzenSelf.bind(this), this);

        // this.gameController = gameCtl;
        // this.enemyCtl.node.on('enter-show-boss-enter-state', this.enterShowBossEnter, this);
        // this.enemyCtl.node.on("enter-continue-play-move-anim", this.contiuePlayMoveAnim, this);


        return new Promise((resolve, reject) => {
            let tw = new Tween(node);
            let pos = node.position;
            tw.delay(0.1 * index)
            tw.set({ scale: v3(0, 0, 0) })
            tw.show();
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
        console.log("start pos ", startPos);
        let moveType = this.getMoveType();
        if (moveType === "Walk") {
            this.proceeWalkLogic(startPos, endPos);
        } else if (moveType === 'Fly') {
            this.processFlyLogic(startPos, endPos)
        }
    }

    processFlyLogic(startPos: Vec2, endPos: Vec2) {
        //处理敌人飞行的逻辑
        //1首先设置一条敌人需要飞过的控制点\
        // let endPoint = this.groundMapCtl.getMapNodeList().getValue(endPos.x, endPos.y).position;
        // this.node.position = endPoint;
        let flyHeight = 10;
        // console.log("处理飞行的逻辑");
        let mapSize = this.groundMapCtl.getMapSize();
        let posIndexList: Vec2[] = [v2(startPos.x, startPos.y)];
        for (let i = 0; i < 5; i++) {
            posIndexList.push(v2(
                Math.round(Math.random() * (mapSize.x - 1)),
                Math.round(Math.random() * (mapSize.y - 1))
            ))
        }
        // posIndexList.push(v2(Math.round,9));
        // posIndexList.push(v2(2,2));
        // posIndexList.push(v2(7,7));

        // let index = 3;
        // posIndexList.push(v2())
        // console.log("start pos", startPos);
        // let v = v2(0, 0);
        // if (startPos.x === 0 || startPos.x === 10) {
        //     console.log("在边缘");
        //     v.x = startPos.x === 10 ? 0 : 10
        // }
        // if (startPos.y === 0 || startPos.y === 10) {
        //     console.log("在边缘");
        //     v.y = startPos.y === 10 ? 0 : 10;
        // }
        // posIndexList.push(v);
        posIndexList.push(endPos);
        let posList: Vec3[] = [];
        for (let i = 0; i < posIndexList.length; i++) {
            let posv2 = posIndexList[i];
            console.log("posv2", posv2);
            let node = this.groundMapCtl.getMapNodeList().getValue(posv2.x, posv2.y);
            if (node) {
                let nodePos = node.position;
                posList.push(v3(nodePos.x, flyHeight, nodePos.z));
            }
            // let pos = v3(posv2.x, 0, posv2.y);
        }
        let bezier = new BezierN(posList);
        let endPosList = bezier.getPointList(100);
        this.currentMoveTw = this.processMoveAction(endPosList);
        this.currentMoveTw.call(() => {
            //播放攻击敌人的动画
            // this.state.setState("enter-attack-state");
            this.currentBoneAnimName = "骨架|AttackAnim";
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            // skeleteAnim.play(this.currentBoneAnimName);
            let animLength = skeleteAnim.getState("骨架|AttackAnim").length;
            this.schedule(this.shootOneBossBullet, animLength)
        })
        this.currentMoveTw.start();
        // // console.log("start pos", startPos);
        // posIndexList.push(endPos);
        // let posList: Vec3[] = [];
        // for (let i = 0; i < posIndexList.length; i++) {
        //     let indexPos = posIndexList[i];
        //     let pos = this.groundMapCtl.getMapNodeList().getValue(indexPos.x, indexPos.y).position;
        //     posList.push(v3(pos.x, flyHeight, pos.z));
        // }
        // posList.push(v3(endPos.x, flyHeight, endPos.y));
        // // posList.push(v3(endPos.x, flyHeight, endPos.y));
        // // let bezier = new BezierN(posList);
        // // let pathList = bezier.getPointList(30);
        // this.currentMoveTw = this.processMoveAction(posList);
        // this.currentMoveTw.call(() => {
        //     console.log("移动结束");
        // })
        // this.currentMoveTw.start();
        // 随机几个控制点

    }
    getOneRandomMapPos(): Vec2 {
        //从地图里面随机一个点
        let mapSize = this.groundMapCtl.getMapSize();
        return v2(Math.round(Math.random() * (mapSize.x - 1)), Math.round(Math.random() * (mapSize.y - 1)))
    }
    processMoveAction(pathList: Vec3[]): Tween {
        //处理移动的动作

        const setTwData = (tw, index) => {
            let time = 0;
            let angle = new Quat();
            if (index === 0) {
                let dis = v3(this.node.position).subtract(pathList[index]).length();
                time = dis / this.moveSpeed;
                angle = this.getLookAtAngle(this.node.position, pathList[index]);


            } else {
                let dis = v3(pathList[index - 1]).subtract(pathList[index]).length();
                angle = this.getLookAtAngle(pathList[index - 1], pathList[index]);

                time = dis / this.moveSpeed
            }
            tw.call(() => {
                this.node.lookAt(pathList[index])
            })
            tw.to(time, {
                position: pathList[index],
                // worldRotation: angle
            })
        }
        let tw = new Tween(this.node);
        for (let i = 0; i < pathList.length; i++) {
            setTwData(tw, i);
        }

        return tw;
    }
    proceeWalkLogic(startPos: Vec2, endPos: Vec2) {
        //处理走路的逻辑
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
        let bezier = new BezierN(pathPosList); //通过获取到的 路径点，来制作一条贝塞尔曲线
        this.bezierPathList = bezier.getPointList(30); //路径密度为20
        this.bezierPathList = this.bezierPathList.slice(0, this.bezierPathList.length - 5);
        this.currentMoveTw = this.processMoveAction(this.bezierPathList);

        this.currentMoveTw.call(() => {
            this.state.setState("enter-attack-state");
        })
        this.currentMoveTw.start();

        this.state.setState("run");
    }
    getLookAtAngle(startPos, targetPoint: Vec3): Quat {
        // //获取到朝向的角度

        let dir = v3(startPos).subtract(targetPoint).normalize();
        let quat = new Quat();
        quat.lerp
        Quat.fromViewUp(quat, dir, Vec3.UP);

        // console.log("quat", quat);
        // rotateAround
        // startPos.
        // this.node.rotate/

        return quat
    }
    forzenSelf() {
        //冰冻自己
        if (this.currentMoveTw) {
            this.currentMoveTw.stop();
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            let stateAnim = skeleteAnim.getState(this.currentBoneAnimName);
            if (stateAnim) {
                stateAnim.pause();
            }
        }
    }

    shootOneBossBullet() {
        this.currentBoneAnimName = "骨架|AttackAnim";
        let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
        skeleteAnim.play(this.currentBoneAnimName);
        let animLength = skeleteAnim.getState(this.currentBoneAnimName).length;

        this.scheduleOnce(() => {
            // this.enemyCtl.enemyAttacked();//敌人发动了攻击

            this.enemyCtl.bossShootOneEgg(this.node);

        }, this.animSpeedMulOffset * animLength);
    }

    onLoad() {
        this.state.addState("enter-attack-state", () => {
            console.log("移动结束");
            //进入攻击状态
            this.currentBoneAnimName = "骨架|AttackAnim";
            let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            skeleteAnim.play(this.currentBoneAnimName);
            let animLength = skeleteAnim.getState(this.currentBoneAnimName).length;

            this.scheduleOnce(() => {
                // this.enemyCtl.enemyAttacked();//敌人发动了攻击
                //普通敌人的攻击
                this.enemyCtl.enemyAttacked();//敌人发动了攻击

            }, this.animSpeedMulOffset * animLength);
        })
        this.state.addState("over", () => {
            this.enemyCtl.removeEnemyInList(this.node);
            this.node.destroy();

        });
        this.state.addState("to-dead", () => {
            this.enemyCtl.pushOneEnemyDeadData(new DeadEnemyObj(this.objectType, this.getCurrentGoldCount()));
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

    onDestroy() {
        // this.node.off('enter-show-boss-enter-state', this.enterShowBossEnter, this);
        // this.node.off('enter-continue-play-move-anim', this.contiuePlayMoveAnim, this);
        this.enemyCtl.node.off("frozen-all-enemy", this.forzenSelf, this);
        this.unschedule(this.shootOneBossBullet);
    }

}
