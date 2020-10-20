import { _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, Vec3, v3, PhysicsSystem, ColliderComponent, SkeletalAnimationComponent, find, PhysicsRayResult, Vec2, isValid } from 'cc';
import { State } from './util/State'
import { TowerBuildBase } from './TowerBuildBase/TowerBuildBase';
import { DeadEnemyObj, EnemyController } from './EnemyController';
import { GroundMapCtl } from './GroundMapCtl';
// import { UIController } from './UI/UIController';
import { TowerBuildBaseCtl } from './TowerBuildBaseCtl';
import { PlayData } from './Data/PlayerData';
import { BaseObject } from './BaseObject';
import { TowerBase } from './Towers/TowerBase';
import { BezierN } from './util/BezierN';
import { WinGoldAnimEffect } from './Effect/WinGoldAnimEffect';
import { HomeIcon } from './Home/HomeIcon';
import { AdsController } from './util/AdsController';
// import { WeaponInfoCtl } from './WeaponInfoCtl';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    //重力加速度
    public static accY: number = -1;

    @property({ type: Node })
    public enemyHealthBarCtlNode: Node = null;

    @property({ type: JsonAsset })
    public gameConfigJson: JsonAsset = null;

    @property({ type: Prefab })
    public towersPrefabList: Node[] = [];

    @property({ type: Node })
    public startGameButton: Node = null;
    private state = new State();
    // private currentAddEnemyTime: number = 0;
    // private addEnemyDuraction: number = 4;
    // private enemyNodeList: Node[] = [];
    public static enemyBeLockMaxNum: number = 1;

    // public currentLevelNum: number = 0;


    @property({ type: Node })
    public uiController: Node = null;

    @property({ type: Node })
    public plate: Node = null; //星球
    @property({ type: Node })
    public gameStartButtonBase: Node = null;

    @property({ type: Prefab })
    public homeIconPrefab: Prefab = null;

    public homeIconNode: Node = null;

    public playerData: PlayData = null;

    @property({ type: Prefab })
    public goldAnim3dPrefab: Prefab = null;

    private homeIconTw: Tween = null;


    private adsCtl: AdsController = new AdsController();
    // @property({ type: Node })
    // public testNode: Node = null;
    onLoad() {
        this.playerData = new PlayData(this);

        // this.node.eulerAngles
        let tw = new Tween(this.plate);
        tw.repeatForever(new Tween(this.plate).to(20, { eulerAngles: v3(0, 360, 0) }).set({ eulerAngles: v3(0, 0, 0) }))
        tw.start();
        // let bezier = new BezierN([v3(0, 0, 0), v3(10, 30, 10), v3(20, 3, 0),v3(20, 100, 30)]);
        // let pointList: Vec3[] = bezier.getPointList(10);
        // console.log("point", pointList);
        // let tw = new Tween(this.testNode);
        // for (let i = 0; i < pointList.length; i++) {
        //     tw.to(0.2, { position: pointList[i] });
        // }
        // tw.call(() => {
        //     this.testNode.position = v3(0, 0, 0)
        // })
        // tw.repeatForever();
        // tw.start();

    }
    playerClickSaveLifeButton() {
        //玩家点击了 立即复活按钮
        return new Promise((resolve, reject) => {
            let videoIsReady = this.adsCtl.getVideoIsReady();
            //根据视频广告是否准备好了，进行看广告复活，还是分享复活
            if (videoIsReady) {
                this.adsCtl.watchVideoAds().then(() => {
                    resolve();
                    if (isValid(this.homeIconNode)) {
                        this.homeIconNode.active = false;
                    }
                    this.node.emit("destroy-all-enemy", (goldCount) => {
                        // this.playerData.addGoldCount(goldCount);
                        this.showHomeIconEnterAnim().then(() => {
                            this.playerData.recoverRedHeartCount();
                            this.uiController.emit("refer-red-heart-label");
                            // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
                            this.state.setState("run");
                            this.node.getComponent(EnemyController).continueGame(); //继续游戏
                        });
                    });
                })
            } else {
                this.adsCtl.shareTo().then(() => {
                    resolve();
                    if (isValid(this.homeIconNode)) {
                        this.homeIconNode.active = false;
                    }
                    this.node.emit("destroy-all-enemy", (goldCount) => {
                        // this.playerData.addGoldCount(goldCount);
                        this.showHomeIconEnterAnim().then(() => {
                            this.playerData.recoverRedHeartCount();
                            this.uiController.emit("refer-red-heart-label");
                            // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
                            this.state.setState("run");
                            this.node.getComponent(EnemyController).continueGame(); //继续游戏
                        });
                    });
                })
            }
        })
    }
    playerClickShareButton(winPowerCount: number) {
        //玩家点击了分享按钮
        // return new Promise((resolve, reject) => {
        //     resolve();
        //     // this.playerData.addGoldCount(this.playerData.currentGoldCount);
        //     //加倍获得当前赢到的能量值
        //     this.adsCtl.shaderTo().
        //     this.playerData.addPowerCount(winPowerCount);
        // })
        return new Promise((resolve, reject) => {
            this.adsCtl.shareTo().then(() => {
                this.playerData.addPowerCount(winPowerCount);
                resolve();
            })
        })

    }
    playerClickRetryButton() {
        //玩家点击了 重试一次的按钮
        // this.playerData.currentLevelNum = 0
        this.playerData.newGame();
        this.enterGame().then(() => {
            this.uiController.emit("refer-red-heart-label");
            this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
            this.state.setState("run");
            this.node.getComponent(EnemyController).startGame();
        })
    }
    start() {
        PhysicsSystem.instance.enable = true;
        // Your initialization goes here.
        this.state.addState("ready", () => {
            console.log("enter state ", this.state.getState());
            // this.uiController.getComponent(WeaponInfoCtl).initWeaponData();
        })
        this.state.setState("ready");

        this.node.on("build-one-tower", (index, towerBaseNode: Node) => {
            //建造一座塔
            this.uiController.emit("complete-current-guide");
            if (index < this.towersPrefabList.length) {
                let node = instantiate(this.towersPrefabList[index]);
                node.parent = this.node;
                node.getComponent(TowerBase).init(this.gameConfigJson.json, this);
                let pos = v3(towerBaseNode.position.x, 0, towerBaseNode.position.z);
                node.setPosition(pos);
                towerBaseNode.getComponent(TowerBuildBase).setTargetTower(node);
                node.getComponent(TowerBase).setTowerBuildBase(towerBaseNode);
            }

        });


        this.state.addState("play-start-button-anim", () => {
            // console.log("玩家点中了开始游戏按钮");
            this.uiController.emit("complete-current-guide");
            //给ui控制器发送，完成了当前的引导操作
            this.node.emit("play-audio", "按钮音效")
            this.node.emit("play-bg-music");
            this.playStatrButtonPressAnim().then(() => {
                return new Promise((resolve, reject) => {
                    let tw = new Tween(this.startGameButton)
                        .by(1, { position: v3(0, -10, 0) })
                        .call(() => {
                            console.log('play over');
                            this.startGameButton.destroy();
                            resolve();
                        })
                        .start()
                })
            }).then(() => {
                let tw = new Tween(this.gameStartButtonBase);
                tw.to(0.2, { scale: v3(0, 0, 0) })
                tw.call(() => {
                    this.gameStartButtonBase.destroy();
                })
                tw.start();
                return this.node.getComponent(GroundMapCtl).showGroundEnterAnim();
            }).then(() => {
                // return this.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim();
                //展示塔的基座出现的动画
                return this.enterGame();
            })
                // .then(() => {
                //     // return this.showHomeIconEnterAnim();
                // })
                .then(() => {
                    // return this.node.getCom
                    return this.showUIEnterAnim();
                }).then(() => {
                    this.state.setState("run");
                    this.node.getComponent(EnemyController).startGame();
                    this.playerData.newGame();
                    this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());

                    // this.node.getComponent(GroundMapCtl).startGame();
                })
        });

        this.state.addState("game-loss", () => {
            console.log("进入游戏失败的状态");
            this.uiController.emit('close-weapon-info-layer')
            this.node.getComponent(EnemyController).gemeLose();
            this.node.getComponent(EnemyController).frozenAllEnemy();
            this.node.getComponent(TowerBuildBaseCtl).frozenAllTowerBuildBase(); //禁锢所有塔的基座
            // this.homeIconTw.stop();
            this.homeIconNode.getComponent(HomeIcon).frozenHomeIcon();
            let deadEnemyData = this.node.getComponent(EnemyController).getDeadEnemyData();
            this.scheduleOnce(() => {
                // this.uiController.showGameLossUI(deadEnemyData)
                this.uiController.emit("show-game-loss-ui", deadEnemyData, this.adsCtl.getVideoIsReady());
            }, 0.6);
        })
        // this.node.on("")
    }

    showUIEnterAnim() {
        // return new Promise((resolve, reject) => {
        // let uiCtl = find("Canvas").getComponent(UIController);
        // if (uiCtl) {
        //     uiCtl.showUIEnterAnim().then(() => {
        //         resolve();
        //     })
        // }
        // })
        return new Promise((resolve, reject) => {
            // return this.uiController.showUIEnterAnim()
            // 
            this.uiController.emit("show-ui-enter-anim", () => {
                resolve();
            });
        })
    }
    // showGroundMapEnterAnim(){

    // }

    // playerTouchOnSkillNode(skillNode: Node, targetTower: Node) {

    // }

    showHomeIconEnterAnim() {
        return new Promise((resolve, reject) => {
            if (!isValid(this.homeIconNode)) {
                this.homeIconNode = instantiate(this.homeIconPrefab);
                this.homeIconNode.parent = this.node;
            }

            let groundMapCtl = this.node.getComponent(GroundMapCtl);
            if (groundMapCtl) {
                let node = groundMapCtl.getMapNodeList().getValue(5, 5);
                this.homeIconNode.position = v3(node.position.x, 20, node.position.z);
                this.homeIconNode.getComponent(HomeIcon).freeHomeIconn();
                node.active = false;
                let tw = new Tween(this.homeIconNode);
                // this.homeIconTw = tw;
                this.homeIconNode.active = true;
                tw.call(() => {
                    node.active = true;
                });
                tw.to(2, { position: v3(node.position.x, 0, node.position.z) }, { easing: "quadOut" })
                tw.call(() => {
                    resolve();
                })
                tw.start()
            }
        })
    }

    playStatrButtonPressAnim() {
        return new Promise((resolve, reject) => {
            let skeleAnim = this.startGameButton.getChildByName("StartGameButton").getComponent(SkeletalAnimationComponent);
            if (skeleAnim) {
                let defaultAnim = skeleAnim.defaultClip;
                // defaultAnim
                let animState = skeleAnim.getState(defaultAnim.name);
                animState.repeatCount = 1;
                let length = animState.length;
                skeleAnim.play(defaultAnim.name);
                this.scheduleOnce(() => {
                    console.log("播放完成");
                    resolve();
                }, length);
            } else {
                resolve();
            }
        })
    }
    playerTouch3dObject(result: PhysicsRayResult[]) {
        if (this.state.getState() === 'ready') {
            for (let i = 0; i < result.length; i++) {
                let collider = result[i].collider;
                if (collider.node.uuid === this.startGameButton.uuid) {
                    this.state.setState("play-start-button-anim");
                }
            }
            // if (collider.node.uuid == this.startGameButton.uuid) {
            //     this.state.setState("play-start-button-anim");

            // }
        } else if (this.state.getState() === 'run') {
            this.node.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastResults);

        }
        // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);
    }
    update(dt: number) {

    }
    getGameConfig(): JsonAsset {
        return this.gameConfigJson;
    }

    getCurrentLevelNum() {
        return this.playerData.currentLevelNum;
    }
    showAddGoldAnimEffect(goldCount: number, targetPos: Vec3) {
        let node = instantiate(this.goldAnim3dPrefab);
        node.parent = this.node;
        node.getComponent(WinGoldAnimEffect).setGoldCount(goldCount, this);
        node.position = targetPos;
    }

    showBossEnterState() {
        // for (){

        // }
        //进入展示boss 进场的状态
        this.node.emit("show-boss-enter-state");
    }

    gameWin(deadEnemyData: DeadEnemyObj[]) {
        //游戏胜利，进入下一关
        //首先展示胜利失败页面
        // this
        //游戏胜利
        // this.uic
        this.uiController.emit("close-all-ui");//重新刷新UI
        this.uiController.emit('close-weapon-info-layer')
        if (this.state.getState() === 'run') {
            this.state.setState("show-game-result"); //进入显示游戏结果的界面
            // this.uiController.showGameWinUI(deadEnemyData);
            this.uiController.emit("show-game-win-ui", deadEnemyData);
        }

    }
    enterNextLevel() {
        this.playerData.enterNextLevel();

        if (this.playerData.currentLevelNum === 0) {
            this.uiController.emit("show-game-end-info-layer", () => {
                this.enterGame().then(() => {
                    this.playerData.recoverRedHeartCount();
                    this.uiController.emit("refer-red-heart-label");
                    this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
                    this.state.setState("run");
                    this.node.getComponent(EnemyController).startGame();
                })
            })
        } else {
            console.log("进入下一关")
            this.enterGame().then(() => {
                this.playerData.recoverRedHeartCount();
                this.uiController.emit("refer-red-heart-label");
                this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
                this.state.setState("run");
                this.node.getComponent(EnemyController).startGame();
            })
        }


        //把所有的tower都销毁掉，
        //把左右的tower 的基座删掉
    }
    enterGame() {
        return new Promise((resolve, reject) => {
            if (isValid(this.homeIconNode)) {
                this.homeIconNode.active = false;
            }
            // this.node.emit("re-init-ui"); //重新刷新UI
            this.node.emit("destroy-all-tower");
            this.node.emit("destroy-all-tower-build-base");
            this.node.emit("destroy-all-enemy"); //销毁当前的所有敌人
            this.node.emit("init-level-label"); //初始化当前的关卡label
            // this.uiController.node.emit('init-update-level');

            this.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim().then(() => {
                return this.showHomeIconEnterAnim();
            }).then(() => {
                return this.showCurrentLevelIconAnim();
            }).then(() => {
                resolve();
            });
        })

    }
    showCurrentLevelIconAnim() {
        return new Promise((resolve, reject) => {
            //显示当前是第一关的icon
            this.uiController.emit("show-current-level-icon-anim", () => {
                if (resolve) {
                    resolve();
                }
            })
        })
    }
    enemyAttacked(num: Number) {
        console.log("敌人发动了攻击", num)
        // this.playerData.add
        if (this.state.getState() === 'run') {
            let currentRedHeartCount = this.playerData.getCurrentRedHeartCount();
            if (currentRedHeartCount > 0) {
                this.playerData.addRedHeartCount(-1);
                if (this.playerData.getCurrentRedHeartCount() === 0) {
                    console.log("游戏结束");
                    this.state.setState("game-loss");
                }
            }
        }

    }
    referRedHeardUI() {
        this.uiController.emit("refer-red-heart-label");
    }
    activeEnemySuccess(enemyType: string) {
        console.log("active enemy succcess", enemyType);
        //
        // this.node.emit("")
        this.uiController.emit("refer-enemy-info-cell", enemyType);

    }
    referPowerCountLabel() {
        //刷新当前的 能量值
        this.uiController.emit("refer-current-power-label", this.playerData.currentPowerCount);
    }

}
