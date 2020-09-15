import { _decorator, Component, Node, Prefab, instantiate, CameraComponent, Vec3, isValid, LabelComponent, EventTouch, ButtonComponent, AnimationComponent, Tween, view, v3, SpriteFrame, SpriteComponent, Loader, loader } from 'cc';
import { MenuUIBase } from './Menu/MenuUIBase';
import { SkillCtl } from './SkillCtl';
import { GoldCtl } from './GoldCtl';
import { UpdateTowerUI } from './Menu/UpdateTowerUI';
import { GameController } from '../GameController';
import { BuildTowerUI } from './Menu/BuildTowerUI';
import { GameWinPrefab } from './GameWin/GameWinPrefab';
import { DeadEnemyObj } from '../EnemyController';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    @property({ type: Node })
    public gameController: Node = null;
    @property({ type: Prefab })
    public buildTowerPrefab: Prefab = null;
    @property({ type: Prefab })
    public updateMenuPrefab: Prefab = null;


    @property({ type: Node })
    public cameraNode: Node = null;

    private buildUINode: Node = null;
    private updateUINode: Node = null;

    @property({ type: Node })
    public enemyInfoButton: Node = null;
    @property({ type: Node })
    public towerInfoButton: Node = null;

    private isHoldSkillIcon: boolean = false; //是否拖起了 技能点

    @property({ type: SpriteFrame })
    public bossIcon: SpriteFrame = null;

    @property({type: Prefab})
    public gameResultPrefab: Prefab = null; //游戏结果预制件
    // @property({ type: Node })
    // public currentWaveLabelNode: Node = null;

    // @property({ type: Prefab })
    // public startGameCountDownAnimPrefab: Prefab = null;

    // @property({ type: Prefab })
    // public goAnimPrefab: Prefab = null;
    start() {
        // loader.loadRes("Enemy_0_Icon/spriteFrame",SpriteFrame, (err, result)=>{
        //     console.log("err", err)
        // })
        let screenSize = view.getVisibleSize();
        let width = screenSize.width;
        this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
        this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);

        console.log("ui controller start")
        this.gameController.on("touch-base-build-base", (node: Node) => {
            //玩家点中了塔的基座
            //显示建造tower 的UI
            if (this.isHoldSkillIcon) {
                return;
            }
            if (isValid(this.updateUINode)) {
                this.updateUINode.getComponent(MenuUIBase).close();
            }
            if (!isValid(this.buildUINode)) {
                this.buildUINode = instantiate(this.buildTowerPrefab);
                this.buildUINode.parent = this.node;
                this.buildUINode.getComponent(BuildTowerUI).init(this.gameController.getComponent(GameController).getGameConfig().json);
            }

            this.setUINodeTo3dPos(this.buildUINode, node);
            this.buildUINode.getComponent(MenuUIBase).open(node);
        })
        this.gameController.on("touch-tower", (targetTower: Node) => {
            //点中了tower
            //如果托着技能点，那么不需要显示UI
            if (this.isHoldSkillIcon) {
                return;
            }
            if (isValid(this.buildUINode)) {
                this.buildUINode.getComponent(MenuUIBase).close();
            }
            if (!isValid(this.updateUINode)) {
                this.updateUINode = instantiate(this.updateMenuPrefab);
                this.updateUINode.parent = this.node;
                this.updateUINode.getComponent(UpdateTowerUI).init(this.gameController.getComponent(GameController).getGameConfig().json);
            }
            this.setUINodeTo3dPos(this.updateUINode, targetTower);
            // this.updateUINode.getComponent(MenuUIBase).open(targetTower);
            this.updateUINode.getComponent(UpdateTowerUI).open(targetTower);
        })
        // this.node.on("update-gold-label", (goldCount: number)=>{
        //     this.node.getComponent(GoldCtl).updateGoldCountLabel(goldCount);
        // });
        // this.gameController.on("refer-current-wave", (waveNum) => {
        //     this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
        // });



    }
    showGameWinUI(deadEnemyData: DeadEnemyObj[]){
        let node = instantiate(this.gameResultPrefab);
        node.parent = this.node;
        let gameConfig = this.gameController.getComponent(GameController).getGameConfig().json
        node.getComponent(GameWinPrefab).setGameResult(true, deadEnemyData, gameConfig);
    }
    showUIEnterAnim() {
        return this.node.getComponent(SkillCtl).showEnterAnim().then(() => {
            return this.node.getComponent(GoldCtl).showEnterAnim();
        }).then(() => {
            return this.showButtonUIEnter();
        });
    }
    showButtonUIEnter() {
        return new Promise((resolve, reject) => {
            let list = [this.enemyInfoButton, this.towerInfoButton]
            let screenSize = view.getVisibleSize();
            let screenWidth = screenSize.width;
            let promiseList = [];
            const runAction = (node, index) => {
                return new Promise((resolve, reject) => {
                    let dir = index === 0 ? -1 : 1;
                    let tw = new Tween(node);
                    tw.to(0.4, {
                        position: v3(- dir * 100 + screenWidth * 0.5 * dir, 0, 0)
                    });
                    tw.call(() => {
                        console.log("进场结束");
                        resolve();
                    })
                    tw.start();
                })

            }
            for (let i = 0; i < list.length; i++) {
                let node = list[i];
                promiseList.push(runAction(node, i));
            }
            Promise.all(promiseList).then(() => {
                resolve();
            })
        })
    }
    setUINodeTo3dPos(uiNode: Node, node3d: Node) {
        let pos: Vec3;
        pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
        uiNode.setPosition(pos);
    }
    onButtonClick(event: ButtonComponent, customData) {
        console.log("on button click", customData);
        switch (customData) {
            case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.emit("player-click-game");
                break;
            default:
                break;
        }
    }
    setHoldSkillIcon(value: boolean) {
        //拖起了 技能点
        this.isHoldSkillIcon = value;
    }
    showBossIconAnim() {
        //显示
        return new Promise((resolve, reject) => {
            let node = new Node();
            let spriteCom = node.addComponent(SpriteComponent);
            spriteCom.spriteFrame = this.bossIcon;
            node.parent = this.node;
            let tw = new Tween(node);
            tw.set({ scale: v3(2, 2, 2), position: v3(0, 240, 0) });
            tw.to(0.2, { scale: v3(1, 1, 1) }, { easing: "backIn" });
            tw.delay(0.8)
            tw.hide()
            tw.call(() => {
                node.destroy();
                resolve();
            })
            tw.start();
        })
    }
}
