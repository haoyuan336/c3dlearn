import { _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, ColliderComponent, SkeletalAnimationComponent, find, PhysicsRayResult } from 'cc';
import { State } from './util/State'
import { TowerBuildBase } from './TowerBuildBase/TowerBuildBase';
import { EnemyController } from './EnemyController';
import { GroundMapCtl } from './GroundMapCtl';
import { UIController } from './UI/UIController';
import { TowerBuildBaseCtl } from './TowerBuildBaseCtl';
import { PlayData } from './Data/PlayerData';
import { BaseObject } from './BaseObject';
import { TowerBase } from './Towers/TowerBase';
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

    public currentLevelNum: number = 0;


    @property({ type: Node })
    public gameStartButtonBase: Node = null;

    @property({ type: Prefab })
    public homeIconPrefab: Prefab = null;

    public homeIconNode: Node = null;

    public playerData: PlayData;
    onLoad() {
        this.playerData = new PlayData();
    }
    start() {
        PhysicsSystem.instance.enable = true;
        // Your initialization goes here.
        this.state.addState("ready", () => {
            console.log("enter state ", this.state.getState());
        })
        this.state.setState("ready");

        this.node.on("build-one-tower", (index, towerBaseNode: Node) => {
            //建造一座塔
            if (index < this.towersPrefabList.length) {
                let node = instantiate(this.towersPrefabList[index]);
                node.parent = this.node;
                node.getComponent(TowerBase).init(this.gameConfigJson.json);
                let pos = v3(towerBaseNode.position.x, 0, towerBaseNode.position.z);
                node.setPosition(pos);
                towerBaseNode.getComponent(TowerBuildBase).setTargetTower(node);
            }

        });


        this.state.addState("play-start-button-anim", () => {
            // console.log("玩家点中了开始游戏按钮");
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
                return this.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim();
                //展示塔的基座出现的动画
            }).then(() => {
                return this.showHomeIconEnterAnim();
            }).then(() => {
                this.node.getComponent(EnemyController).startGame();
                // this.node.getComponent(GroundMapCtl).startGame();
            })
        });

        // this.node.on("")
    }

    // showGroundMapEnterAnim(){

    // }

    // playerTouchOnSkillNode(skillNode: Node, targetTower: Node) {

    // }
 
    showHomeIconEnterAnim() {
        return new Promise((resolve, reject) => {
            this.homeIconNode = instantiate(this.homeIconPrefab);
            this.homeIconNode.parent = this.node;
            let groundMapCtl = this.node.getComponent(GroundMapCtl);
            if (groundMapCtl) {
                let node = groundMapCtl.getMapNodeList().getValue(5, 5);
                this.homeIconNode.position = v3(node.position.x, 20, node.position.z);
                node.active = false;
                let tw = new Tween(this.homeIconNode);
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
    playerTouch3dObject(result:PhysicsRayResult[]) {
        if (this.state.getState() === 'ready') {
            for (let i = 0 ; i < result.length ; i ++){
                let  collider = result[i].collider;
                if (collider.node.uuid === this.startGameButton.uuid){
                    this.state.setState("play-start-button-anim");
                }
            }
            // if (collider.node.uuid == this.startGameButton.uuid) {
            //     this.state.setState("play-start-button-anim");

            // }
        } else {
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
        return this.currentLevelNum;
    }

}
