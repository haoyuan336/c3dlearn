import { _decorator, Component, Node, Prefab, instantiate, CameraComponent, Vec3, isValid, LabelComponent, EventTouch, ButtonComponent, AnimationComponent, Tween, view, v3, SpriteFrame, SpriteComponent, Loader, loader, find, Game, easing, ProgressBarComponent } from 'cc';
import { MenuUIBase } from './Menu/MenuUIBase';
import { SkillCtl } from './SkillCtl';
import { GoldCtl } from './GoldCtl';
import { UpdateTowerUI } from './Menu/UpdateTowerUI';
import { BuildTowerMenuUI } from './Menu/BuildTowerMenuUI';
import { GameWinPrefab } from './GameWin/GameWinPrefab';
import { DeadEnemyObj } from '../EnemyController';
import { GameController } from '../GameController';
import { TowerInfoLayer } from './TowerInfoLayer';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {

    @property({ type: Prefab })
    public buildTowerPrefab: Prefab = null;
    @property({ type: Prefab })
    public updateMenuPrefab: Prefab = null;
    // @property({ type: GameController })
    public gameController: GameController = null;

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

    @property({ type: Prefab })
    public gameResultPrefab: Prefab = null; //游戏结果预制件

    @property({ type: Node })
    public currentLevelLabelIcon: Node = null;

    @property({type: Node})
    public towerInfoLayer: Node = null; //塔的详细信息层

    @property({type: Node})
    public bossHealthBar: Node = null; //boss 的血条

    @property({type: Node})
    public buildTowerMenuLayer: Node = null; //建造塔的的ui层

    // @property({type: Node})
    // public showGameEndLayer: Node = null; //显示最后的游戏的结果的层
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
        this.gameController = find("GameController").getComponent(GameController);
        let screenSize = view.getVisibleSize();
        let width = screenSize.width;
        this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
        this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);

        console.log("ui controller start")
        this.gameController.node.on("touch-base-build-base", (node: Node) => {
            //玩家点中了塔的基座
            //显示建造tower 的UI
            this.node.emit("complete-current-guide");
            if (this.isHoldSkillIcon) {
                return;
            }
            if (isValid(this.updateUINode)) {
                this.updateUINode.getComponent(MenuUIBase).close();
            }
            if (!isValid(this.buildUINode)) {
                this.buildUINode = instantiate(this.buildTowerPrefab);
                this.buildUINode.parent = this.buildTowerMenuLayer;
                this.buildUINode.getComponent(BuildTowerMenuUI).init(this.gameController.getGameConfig().json, this.gameController);
            }

            this.setUINodeTo3dPos(this.buildUINode, node);
            this.buildUINode.getComponent(MenuUIBase).open(node);
        })
        this.gameController.node.on("touch-tower", (targetTower: Node) => {
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
                this.updateUINode.parent = this.buildTowerMenuLayer;
                this.updateUINode.getComponent(UpdateTowerUI).init(this.gameController.getGameConfig().json, this.gameController);
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

        this.node.on('show-ui-enter-anim', this.showUIEnterAnim.bind(this), this);
        this.node.on("show-game-loss-ui", this.showGameLossUI.bind(this), this);
        this.node.on("show-game-win-ui", this.showGameWinUI.bind(this), this);
        this.node.on("show-current-level-icon-anim", this.showCurrentLevelIconAnim.bind(this), this);
        this.node.on("close-all-ui", this.closeSomeUI.bind(this), this);
        this.node.on("refer-current-tower-menu-ui", this.referTowerBuildMenuUI.bind(this), this);
        this.node.on("close-tower-menu-ui", this.coloseTowerBuildMenuUI.bind(this), this);
    }
    showBossHealthBar(){
        let tw = new Tween(this.bossHealthBar);
        this.bossHealthBar.children[0].getComponent(ProgressBarComponent).progress = 1;
        tw.to(0.2, {
            position: v3(0,-280,0)
        })
        tw.start();
        return this.bossHealthBar;
    }
    // showTowerInfo(target){
    //     if (isValid(this.towerInfoLayer)){
    //         this.towerInfoLayer.active = true;
    //         // this.towerInfoLayer.getComponent(TowerInfoLayer).setTowerData(target);
    //         // this.node.getComponent
    //     }
    // }
    coloseTowerBuildMenuUI() {
        if (isValid(this.buildUINode)) {
            this.buildUINode.getComponent(BuildTowerMenuUI).close();
        }
        if (isValid(this.updateUINode)) {
            this.updateUINode.getComponent(UpdateTowerUI).close();
        }
    }
    referTowerBuildMenuUI() {
        if (isValid(this.buildUINode)) {
            this.buildUINode.getComponent(BuildTowerMenuUI).referCurrentUI();
        }
    }
    closeSomeUI() {
        //重新刷新UI

        if (isValid(this.buildUINode)) {
            this.buildUINode.getComponent(BuildTowerMenuUI).close();
        }
        if (isValid(this.updateUINode)) {
            this.updateUINode.getComponent(UpdateTowerUI).close();
        }
    }
    showCurrentLevelIconAnim(cb) {
        // let label = new Node();
        let tw = new Tween(this.currentLevelLabelIcon);
        this.currentLevelLabelIcon.active = true;
        this.currentLevelLabelIcon.getComponent(LabelComponent).string = "第" + (this.gameController.getCurrentLevelNum() + 1) + '关';
        tw.set({ scale: v3(2, 2, 2) })
        tw.to(0.5, { scale: v3(1, 1, 1) }, { easing: "backOut" })
        tw.delay(0.8);
        tw.call(() => {
            this.currentLevelLabelIcon.active = false;
            cb();
        })
        tw.start();

    }
    showGameWinUI(deadEnemyData: DeadEnemyObj[]) {
        let node = instantiate(this.gameResultPrefab);
        node.parent = this.node;
        let gameConfig = this.gameController.getGameConfig().json
        node.getComponent(GameWinPrefab).setGameResult(true, deadEnemyData, gameConfig, this, this.gameController, false);
    }
    showGameLossUI(deadEnemyData: DeadEnemyObj[], videoIsReady: boolean) {
        this.closeSomeUI();
        let node = instantiate(this.gameResultPrefab);
        node.parent = this.node;
        let gameConfig = this.gameController.getGameConfig().json
        node.getComponent(GameWinPrefab).setGameResult(false, deadEnemyData, gameConfig, this, this.gameController, videoIsReady);
    }
    showUIEnterAnim(cb) {
        this.node.emit("enter-game");
        return this.node.getComponent(SkillCtl).showEnterAnim().then(() => {
            return this.node.getComponent(GoldCtl).showEnterAnim();
        }).then(() => {
            return this.showButtonUIEnter();
        }).then(() => {
            if (cb) {
                cb();
            }
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
        find("GameController").emit("player-button-click-audio");

        switch (customData) {
            case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.node.emit("player-click-game");
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
    public playerClickNextLevelButton() {
        //玩家点击了下一关的按钮
        this.gameController.enterNextLevel();
    }
    // watchAds(){
    //     return this.gameController.getComponent(GameController).watchAds();
    // }
}
