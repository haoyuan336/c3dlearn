import { _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, random, Vec3, CameraComponent, find, profiler, isValid, Scheduler } from 'cc';
import { State } from './util/State';
import { EnemyBase } from './Enemys/EnemyBase'
import { GroundMapCtl } from './GroundMapCtl';
import { GroundTiled } from './GroundTiled/GroundTiled';
import My2dArray from './util/My2Array';
import { WinGoldAnimEffect } from './Effect/WinGoldAnimEffect';
import { GameController } from './GameController';
// import { UIController } from './UI/UIController';
import { EnemyBullet } from './Enemys/EnemyBullet';

const { ccclass, property } = _decorator;
export class DeadEnemyObj {
    //死去敌人的结构体
    public enemyType = "";
    public dropGoldCount = 0;
    // public enemyIconSpriteFrame = 0; //敌人的icon
    constructor(type, dropGoldCount: number) {
        this.enemyType = type; //敌人的种类
        this.dropGoldCount = dropGoldCount; //敌人的掉落的金币数目 
    }
};
@ccclass('EnemyController')
export class EnemyController extends Component {

    @property({ type: JsonAsset })
    public gameConfigRes: JsonAsset = null;

    @property({ type: Prefab })
    public enemysPrefabList: Prefab[] = [];

    private gameConfig: {} = null;
    // private currentLevelNum = 0;
    // private currentWaveMaxEnemyCount = 0; //当前波次最大的敌人数
    private currentWaveIndex: number = 0;
    private waveData: {} = null;
    private state: State = new State();
    private addEnemyDuraction: number = 1;
    private enemyNodeList: Node[] = [];
    private currentRandomEnemyTypeList = [];
    @property({ type: Node })
    public startPosNodeList: Node[] = [];

    // @property({ type: Node })
    public endPos: Vec3 = null;

    @property({ type: Node })
    public enemyHealthBarCtlNode: Node = null;

    @property({ type: Node })
    public cameraNode: Node = null;
    @property({ type: Prefab })
    public bosssPrefabList: Prefab[] = [];


    @property({ type: Prefab })
    public enemyBulletPrefabList: Prefab[] = []; //敌人的子弹预制体的列表


    // private currentWaveTime: number = 0;
    // private currentWaveDuraction: number = 1;

    public gameController: GameController = null;
    private allWaveAddOverCb = null; //所有的波次的敌人都增加完毕的回调
    private allEnemyDeadCb = null; //所有的敌人都死了的回调 
    private boosIsLive = false; //boss还活着？

    private currentLevelDeadEnemyDataList: DeadEnemyObj[] = [];


    private uiControllerNode: Node = null;

    private isAddedBoss: boolean = false;
    // @property({type: JsonAsset})
    // public GameLevelConfig: JsonAsset = null;
    onLoad() {
        this.node.on("destroy-all-enemy", (cb) => {
            //删除当前的所有敌人
            let totalGold = 0;
            for (let i = 0; i < this.enemyNodeList.length; i++) {
                let node = this.enemyNodeList[i];
                totalGold += node.getComponent(EnemyBase).getCurrentGoldCount();
                node.destroy();
            }
            this.enemyNodeList = [];
            if (cb) {
                cb(totalGold); //销毁的敌人的 持有的金币个数
            }
        });
        this.node.on("init-level-label", () => {
            this.node.emit("refer-current-wave-level", this.gameController.getCurrentLevelNum(), 0);
        })
    }
    start() {
        this.uiControllerNode = find("Canvas");

        // Your initialization goes here.
        this.gameConfig = this.gameConfigRes.json;
        this.gameController = this.node.getComponent(GameController);
        this.endPos = v3(0, 0, 0);
        // this.state.addState("enter-next-wave", () => {



        //     // if (this.currentWaveIndex >= this.waveData['EnemyType'].length) {
        //     //     // this.state.setState("add-enemt-over");
        //     //     // this.state.setState("add-one-boss")
        //     //     // console.log("游戏结束");
        //     //     return;
        //     // }
        //     // this.currentRandomEnemyTypeList = this.waveData["EnemyType"][this.currentWaveIndex];
        //     // // this.addEnemyDuraction = this.waveData['AddEnemyDuraction'][this.currentWaveIndex];
        //     // this.node.emit("refer-current-wave-level", this.gameController.getCurrentLevelNum(), this.currentWaveIndex);
        //     // if (this.currentWaveIndex === this.waveData['EnemyType'].length - 1) {
        //     //     if (this.allWaveAddOverCb) {
        //     //         this.addOneBossEnemy().then(() => {
        //     //             // this.currentWaveIndex++;
        //     //             this.allWaveAddOverCb();
        //     //             // this.allWaveAddOverCb = null;
        //     //         });
        //     //     }

        //     // } else {
        //     //     this.addOneWaveEnemy().then(() => {
        //     //         console.log("一波敌人增加完成");
        //     //         this.currentWaveIndex++;

        //     //         this.scheduleOnce(() => {
        //     //             if (this.state.getState() === 'game-over') {
        //     //                 return;
        //     //             }
        //     //             this.state.setState("enter-next-wave");
        //     //         }, (this.currentWaveIndex === this.waveData['EnemyType'].length - 1) ? 5 : 2)
        //     //     });
        //     // }
        // })
        // this.node.on("player-click-game", () => {
        //     this.state.setState("enter-next-wave");
        // });
        this.schedule(() => {
            if (this.state.getState() === "start-add-enemy") {
                //开始增加敌人
                let currentWaveData = this.waveData['EnemyType'];
                this.node.emit("refer-current-wave-level", this.gameController.getCurrentLevelNum(), this.currentWaveIndex);
                if (this.currentWaveIndex <= currentWaveData.length - 2) {
                    let enemyTypeList = currentWaveData[this.currentWaveIndex];
                    this.addOneWaveEnemy(enemyTypeList);
                    this.currentWaveIndex++;

                } else if (this.currentWaveIndex === currentWaveData.length - 1) {

                    let enemyTypeList = currentWaveData[this.currentWaveIndex];
                    this.addOneBossEnemy(enemyTypeList).then(() => {
                        this.currentWaveIndex++;
                        return new Promise((resolve, reject) => {
                            this.allEnemyDeadCb = resolve;
                        })
                    }).then(() => {
                        console.log("游戏胜利");
                        if (this.state.getState() !== "game-lose") {
                            this.state.setState("game-win");
                            this.uiControllerNode.emit("show-end-dialog", this.gameController.getCurrentLevelNum(), () => {
                                this.gameController.gameWin(this.currentLevelDeadEnemyDataList);
                            })
                        }
                    });
                    this.state.setState("add-boss-state"); //增加boss 的状态


                } else {
                    console.log("敌人增加完毕");
                    this.state.setState("add-enemy-end");


                }
            }
        }, 4)
    }

    playBossEnterAnim(bossNode: Node) {
        //播放boss 的进场动画
        // find('Canvas').getComponent(UIController).showBossIconAnim();
        return new Promise((resolve, reject) => {
            let enemyBase = bossNode.getComponent(EnemyBase);
            if (enemyBase) {
                enemyBase.playBossEnterAnim().then(() => {
                    resolve();
                })
            } else {
                this.scheduleOnce(() => {
                    resolve();
                }, 1)
            }

        })
    }
    startGame() {
        this.currentLevelDeadEnemyDataList = [];
        //在这里需要初始化一些游戏数据 
        this.currentWaveIndex = 0;
        this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
        // this.waveData = this.GameLevelConfig.json['Level_' + this.gameController.getCurrentLevelNum()];



        this.uiControllerNode.emit("show-start-dialog", this.gameController.getCurrentLevelNum(), () => {
            // console.log("开始对话内容播放结束");
            // this.scheduleOnce(() => {
            //     this.state.setState("enter-next-wave");
            // }, 2.5)

            //开始点击 塔的基座的 引导操作
            this.uiControllerNode.emit("show-guide", () => {
                //开始点击 建造塔的 引导操作
                this.uiControllerNode.emit("show-guide", () => {
                    this.scheduleOnce(() => {
                        // this.state.setState("enter-next-wave");
                        this.state.setState("start-add-enemy"); //开始增加敌人
                    }, 2.5)
                })


            })


        });

        // this.scheduleOnce(() => {
        // this.state.setState("enter-next-wave");

        // }, 3);

        // Promise.all([
        //     new Promise((resolve, reject) => {
        //         this.allWaveAddOverCb = resolve;
        //     }),
        //     new Promise((resolve, reject) => {
        //         // this.allEnemyDeadCb = resolve;
        //     })
        // ]).then(() => {
        //     console.log("游戏胜利");
        //     this.uiControllerNode.emit("show-end-dialog", this.gameController.getCurrentLevelNum(), () => {
        //         this.gameController.gameWin(this.currentLevelDeadEnemyDataList);
        //     })

        // })
    }
    continueGame() {
        this.currentWaveIndex--;
        this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
        // this.waveData = this.GameLevelConfig['Level_' + this.gameController.getCurrentLevelNum()];

        this.state.setState("start-add-enemy");
        Promise.all([
            new Promise((resolve, reject) => {
                this.allWaveAddOverCb = resolve;
            }),
            new Promise((resolve, reject) => {
                this.allEnemyDeadCb = resolve;
            })
        ]).then(() => {
            console.log("游戏胜利");
            this.gameController.gameWin(this.currentLevelDeadEnemyDataList);
        })
    }
    pushOneEnemyDeadData(enemyDeadData: DeadEnemyObj) {
        // console.log("push one enemy dead data", enemyDeadData);

        this.currentLevelDeadEnemyDataList.push(enemyDeadData);
        this.gameController.playerData.activeEnemy(enemyDeadData.enemyType);
    }
    gemeLose() {
        //游戏失败了
        this.state.setState("game-lose");
    }

    pauseGame() {
        //暂停游戏
        // Scheduler.


    }
    // showCameraFocusBoosAnim(bossNode: Node) {
    //     return new Promise((resolve, reject) => {
    //         //进入boss 展示的状态
    //         // this.node.emit("enter-show-boss-enter-state");
    //         // let tw = new Tween()
    //         // this.cameraNode.lookAt(bossNode.position)
    //         let endPos = v3(bossNode.position).add(v3(5, 2, 5));
    //         let endEulerAngles = v3(this.cameraNode.eulerAngles).add(v3(35, 0, 0))
    //         // this.cameraNode.position = v3(bossNode.position.x + 10, bossNode.position.y + 7,bossNode.position.z + 10)
    //         // this.cameraNode.position = v3(this.cameraNode.position).add(addPos);
    //         // this.cameraNode.lookAt(bossNode.position);
    //         // let eulerAngles = this.cameraNode.eulerAngles;
    //         // let addAngleValue = 25;
    //         // this.cameraNode.eulerAngles = v3(eulerAngles.x + 25, eulerAngles.y, eulerAngles.z);
    //         // this.cameraNode.eulerAngles
    //         let tw = new Tween(this.cameraNode);
    //         tw.to(0.5, {
    //             position: endPos,
    //             eulerAngles: endEulerAngles,
    //             // orthoHeight: 60
    //         },
    //             {
    //                 easing: "backOut"
    //             })
    //         // this.cameraNode.getComponent(CameraComponent).orthoHeight = 5;\
    //         tw.call(() => {
    //             if (resolve) {
    //                 resolve();
    //             }
    //         })
    //         tw.start();
    //         new Tween(this.cameraNode.getComponent(CameraComponent)).to(0.5, { orthoHeight: 6 }).start();
    //     })

    // }

    showCameraBackAnim() {
        //播放镜头返回的动画
        return new Promise((resolve, reject) => {
            let tw = new Tween(this.cameraNode);
            tw.to(0.5, {
                position: v3(30, 42, 30),
                eulerAngles: v3(-45, 45, 0)
            })
            tw.call(() => {
                resolve();
            })
            tw.start();
            new Tween(this.cameraNode.getComponent(CameraComponent)).to(0.5, { orthoHeight: 22 }).start();
        })

    }
    addOneBossEnemy(currentEnemyList: Object[]) {
        // console.log("增加一个boss")
        return new Promise((resolve, reject) => {
            this.scheduleOnce(() => {
                if (this.state.getState() === 'game-lose') {
                    resolve();
                    return
                }
                let indexList: Vec2[] = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
                let randomIndex = Math.round(Math.random() * (indexList.length - 1));
                let pos: Vec2 = indexList[randomIndex];
                let nodeMapList: My2dArray<Node> = this.node.getComponent(GroundMapCtl).getMapNodeList();
                let node = nodeMapList.getValue(pos.x, pos.y);
                let type = currentEnemyList[0]['type'];
                let enemyNode = instantiate(this.bosssPrefabList[type]);
                // console.log("enemy node", enemyNode)
                enemyNode.parent = this.node;
                enemyNode.position = v3(node.position.x, 0, node.position.z);
                enemyNode.active = false;

                enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos);

                // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
                // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
                // addEnemyCount++;
                this.enemyNodeList.push(enemyNode);
                return this.playBossEnterAnim(enemyNode).then(() => {
                    this.node.emit("enter-continue-play-move-anim");
                    enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(1, this, pos, new Vec2(5, 5));
                    resolve();
                })
            }, 5)
        })

    }
    addOneWaveEnemy(enemyTypeList: Object[]) {
        //增加一波敌人
        let promiseList = [];
        let indexList: Vec2[] = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
        let nodeMapList: My2dArray<Node> = this.node.getComponent(GroundMapCtl).getMapNodeList();
        let maxEnemyCount = 0;
        for (let i = 0; i < enemyTypeList.length; i++) {
            maxEnemyCount += enemyTypeList[i]['count'];
        }
        let typeList = [];
        for (let i = 0; i < enemyTypeList.length; i++) {
            let waveData = enemyTypeList[i];
            for (let i = 0; i < waveData['count']; i++) {
                typeList.push(waveData['type']);
            }
        }
        // console.log("type list", typeList);
        // console.log("max enemy count", maxEnemyCount);
        // if (maxEnemyCount >= indexList.length) {
        //     console.error("数据错误");
        //     return;
        // }、
        let randomStartIndex = Math.round(Math.random() * indexList.length);

        if (this.currentWaveIndex === 0 && this.gameController.getCurrentLevelNum() === 0) {
            randomStartIndex = 0;
        }
        // console.log("current wave", this.currentWaveIndex);
        // console.log("current level", this.gameController.getCurrentLevelNum());
        const createOneEnemy = (index: number, type: number) => {

            let startIndex = randomStartIndex + index;
            if (startIndex >= indexList.length) {
                startIndex -= indexList.length;
            }
            // console.log("index list length", indexList.length);
            let indexV2 = indexList[startIndex];
            // console.log("start index", startIndex);
            let node = nodeMapList.getValue(indexV2.x, indexV2.y);

            // this.scheduleOnce(() => {
            //     resolve();
            // }, 0.1 * index);
            if (isValid(node) && node.getComponent(GroundTiled)) {
                let groundTiled = node.getComponent(GroundTiled);
                if (groundTiled.getIsVoid()) {
                    let enemyNode = instantiate(this.enemysPrefabList[type]);
                    // console.log("enemy node", enemyNode)
                    enemyNode.parent = this.node;
                    enemyNode.position = v3(node.position.x, 0, node.position.z);
                    enemyNode.active = false;

                    enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos);
                    this.enemyNodeList.push(enemyNode);

                    promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(index, this, indexV2, new Vec2(5, 5)));
                }
            } else {
                // promiseList.push(Promise.resolve())
            }
        }
        for (let i = 0; i < typeList.length; i++) {
            createOneEnemy(i, typeList[i])
        }
        // while (addEnemyCount < maxEnemyCount) {
        //     // addEnemyCount ++;
        //     // console.log("random index", randomIndex);
        //     if (randomIndex >= indexList.length) {
        //         randomIndex = 0;
        //     }
        //     let indexV2 = indexList[randomIndex];
        //     let node = nodeMapList.getValue(indexV2.x, indexV2.y);
        //     if (node && node.getComponent(GroundTiled)) {
        //         let groundTiled = node.getComponent(GroundTiled);
        //         if (groundTiled.getIsVoid()) {
        //             // console.log("找到了一个空位置");
        //             // let currentEnemyType = this.currentRandomEnemyTypeList
        //             // let enemyNode = instantiate(this.enenm)
        //             let waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
        //             let type = waveData.type;
        //             let count = waveData.count;
        //             if (waveAddEnemyCount >= count) {
        //                 waveAddEnemyCount = 0;
        //                 enemyTypeIndex++;
        //             }
        //             let enemyNode = instantiate(this.enemysPrefabList[type]);
        //             // console.log("enemy node", enemyNode)
        //             enemyNode.parent = this.node;
        //             enemyNode.position = v3(node.position.x, 0, node.position.z);
        //             enemyNode.active = false;

        //             enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos);

        //             // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
        //             promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, indexV2, new Vec2(5, 5)));
        //             addEnemyCount++;
        //             this.enemyNodeList.push(enemyNode);
        //             // console.log("增加一个敌人")
        //         }
        //         // randomIndex++
        //         randomIndex = Math.round(Math.random() * (indexList.length - 1));
        //     } else {
        //         addEnemyCount++;
        //     }
        // }
        return Promise.all(promiseList)
    }

    removeEnemyInList(node: Node) {
        for (let i = 0; i < this.enemyNodeList.length; i++) {
            let enemy = this.enemyNodeList[i];
            if (enemy.uuid === node.uuid) {
                this.enemyNodeList.splice(i, 1);
            }
        }
        // if (this.enemyNodeList.length === 0 && this.currentWaveIndex == this.waveData['EnemyType'].length) {
        //     if (this.allEnemyDeadCb) {
        //         this.allEnemyDeadCb();
        //         this.allEnemyDeadCb = null;
        //     }
        // }
        if (this.enemyNodeList.length === 0) {
            if (this.allEnemyDeadCb) {
                this.allEnemyDeadCb();
                this.allEnemyDeadCb = null;
            }
        }
    }
    getCurrentEnemyNodeList() {
        return this.enemyNodeList;
    }
    enemyAttacked(num: number) {
        this.gameController.getComponent(GameController).enemyAttacked(num);
    }
    frozenAllEnemy() {
        //冰冻所有敌人
        // for (let i = 0 ; i < this.enem){
        this.state.setState("game-over");
        this.node.emit("frozen-all-enemy");
        // }
    }

    bossShootOneEgg(enemyNode: Node) {
        //boss 发射了一枚鸡蛋
        let enemyCom = enemyNode.getComponent(EnemyBase);
        if (enemyCom) {
            let bulletType = enemyCom.getEnemyBulletType();
            // console.log("敌人的子弹类型是 ", bulletType);
            // 根据敌人的子弹类型，初始化一个子弹
            let node = instantiate(this.enemyBulletPrefabList[bulletType]);
            node.parent = this.node;
            node.position = enemyNode.position;
            node.getComponent(EnemyBullet).init(this.gameController.getGameConfig().json, this.gameController, this.endPos);
        }
    }
    getDeadEnemyData() {
        return this.currentLevelDeadEnemyDataList;
    }
}
