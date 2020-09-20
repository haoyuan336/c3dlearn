import { _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, random, Vec3, CameraComponent, find, profiler } from 'cc';
import { State } from './util/State';
import { EnemyBase } from './Enemys/EnemyBase'
import { GroundMapCtl } from './GroundMapCtl';
import { GroundTiled } from './GroundTiled/GroundTiled';
import My2dArray from './util/My2Array';
import { WinGoldAnimEffect } from './Effect/WinGoldAnimEffect';
import { GameController } from './GameController';
import { UIController } from './UI/UIController';
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


    private currentLevelDeadEnemyDataList: DeadEnemyObj[] = [];
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
        // Your initialization goes here.
        this.gameConfig = this.gameConfigRes.json;
        this.gameController = this.node.getComponent(GameController);
        this.endPos = v3(0, 0, 0);
        this.state.addState("enter-next-wave", () => {
            if (this.currentWaveIndex == this.waveData['EnemyType'].length) {
                // this.state.setState("add-enemt-over");
                // this.state.setState("add-one-boss")
                // console.log("游戏结束");
                return;
            }
            this.currentRandomEnemyTypeList = this.waveData["EnemyType"][this.currentWaveIndex];
            this.addEnemyDuraction = this.waveData['AddEnemyDuraction'][this.currentWaveIndex];
            this.node.emit("refer-current-wave-level", this.gameController.getCurrentLevelNum(), this.currentWaveIndex);
            if (this.currentWaveIndex === this.waveData['EnemyType'].length - 1) {
                if (this.allWaveAddOverCb) {
                    this.allWaveAddOverCb();
                    this.allWaveAddOverCb = null;
                    this.addOneBossEnemy();
                }

            } else {
                this.addOneWaveEnemy().then(() => {
                    this.currentWaveIndex++;

                    this.scheduleOnce(() => {
                        this.state.setState("enter-next-wave");
                    }, this.addEnemyDuraction)
                });
            }
        })
        // this.node.on("player-click-game", () => {
        //     this.state.setState("enter-next-wave");
        // });
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

        this.state.setState("enter-next-wave");
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
    continueGame() {
        this.currentWaveIndex--;
        this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
        this.state.setState("enter-next-wave");
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
        console.log("push one enemy dead data", enemyDeadData);
        this.currentLevelDeadEnemyDataList.push(enemyDeadData);
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
    addOneBossEnemy() {
        console.log("增加一个boss")
        let indexList: Vec2[] = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
        let randomIndex = Math.round(Math.random() * (indexList.length - 1));
        let pos: Vec2 = indexList[randomIndex];
        let nodeMapList: My2dArray<Node> = this.node.getComponent(GroundMapCtl).getMapNodeList();
        let node = nodeMapList.getValue(pos.x, pos.y);
        let type = this.currentRandomEnemyTypeList[0].type;
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
        return new Promise((resolve, reject) => {
            resolve();
            // enemyNode.active = false;
        }).then(() => {
            //展示boss 出场界面 
            // return this.showCameraFocusBoosAnim(enemyNode)
            // return
        }).then(() => {
            return this.playBossEnterAnim(enemyNode);
        }).then(() => {
            // return this.showCameraBackAnim();
        }).then(() => {
            //敌人继续播放行走动画
            // return new Promise((resolve) => {
            //     this.scheduleOnce(() => {
            this.node.emit("enter-continue-play-move-anim")
            //         resolve();

            //     }, 3)
            // })
        }).then(() => {
            enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(1, this, pos, new Vec2(5, 5));

        })
    }
    addOneWaveEnemy() {
        //增加一波敌人
        let promiseList = [];
        let addEnemyCount = 0;
        let indexList: Vec2[] = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
        let nodeMapList: My2dArray<Node> = this.node.getComponent(GroundMapCtl).getMapNodeList();
        let randomIndex = Math.round(Math.random() * (indexList.length - 1));
        let enemyTypeIndex = 0;
        let waveAddEnemyCount = 0;
        let maxEnemyCount = 0;
        for (let i = 0; i < this.currentRandomEnemyTypeList.length; i++) {
            maxEnemyCount += this.currentRandomEnemyTypeList[i].count;
        }
        // console.log("max enemy count", maxEnemyCount);
        if (maxEnemyCount >= indexList.length) {
            console.error("数据错误");
            return;
        }
        while (addEnemyCount < maxEnemyCount) {
            // addEnemyCount ++;
            // console.log("random index", randomIndex);
            if (randomIndex >= indexList.length) {
                randomIndex = 0;
            }
            let indexV2 = indexList[randomIndex];
            let node = nodeMapList.getValue(indexV2.x, indexV2.y);
            if (node && node.getComponent(GroundTiled)) {
                let groundTiled = node.getComponent(GroundTiled);
                if (groundTiled.getIsVoid()) {
                    // console.log("找到了一个空位置");
                    // let currentEnemyType = this.currentRandomEnemyTypeList
                    // let enemyNode = instantiate(this.enenm)
                    let waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
                    let type = waveData.type;
                    let count = waveData.count;
                    if (waveAddEnemyCount >= count) {
                        waveAddEnemyCount = 0;
                        enemyTypeIndex++;
                    }
                    let enemyNode = instantiate(this.enemysPrefabList[type]);
                    // console.log("enemy node", enemyNode)
                    enemyNode.parent = this.node;
                    enemyNode.position = v3(node.position.x, 0, node.position.z);
                    enemyNode.active = false;

                    enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos);

                    // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
                    promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, indexV2, new Vec2(5, 5)));
                    addEnemyCount++;
                    this.enemyNodeList.push(enemyNode);
                    // console.log("增加一个敌人")
                }
                // randomIndex++
                randomIndex = Math.round(Math.random() * (indexList.length - 1));
            } else {
                addEnemyCount++;
            }
        }
        return Promise.all(promiseList)
    }

    removeEnemyInList(node: Node) {
        for (let i = 0; i < this.enemyNodeList.length; i++) {
            let enemy = this.enemyNodeList[i];
            if (enemy.uuid === node.uuid) {
                this.enemyNodeList.splice(i, 1);
            }
        }
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
    enemyAttacked() {
        this.gameController.getComponent(GameController).enemyAttacked();
    }
    frozenAllEnemy() {
        //冰冻所有敌人
        // for (let i = 0 ; i < this.enem){
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
