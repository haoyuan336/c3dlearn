import { _decorator, Component, Node, LabelComponent, find, SpriteFrame, SpriteComponent } from 'cc';
import { MenuUIBase } from './MenuUIBase';
import { TowerBase } from '../../Towers/TowerBase';
// import { GameController } from '../../GameController';
// import { BaseObject } from '../../BaseObject';
import { Tool } from '../../util/Tool';
import { GameInstance } from '../../GameInstance';
// import { BaseObject } from '../../BaseObject';
const { ccclass, property } = _decorator;

@ccclass('UpdateTowerUI')
export class UpdateTowerUI extends MenuUIBase {
    @property({ type: Node })
    public updateCostLabel: Node = null;
    @property({ type: Node })
    public destroyWinLabel: Node = null;
    // public gameController: GameController = null;

    public updateCostCount: number = null;
    public destroyWinCount: number = null;
    @property({ type: SpriteFrame })
    public updateMaxLevelSpriteFrame: SpriteFrame = null;

    @property({ type: SpriteFrame })
    public updateButtonSpriteFrame: SpriteFrame = null;

    @property({ type: Node })
    public updateButtonNode: Node = null;
    // public targetTower: Node = null;
    onLoad() {
        // this.gameController = find("GameController").getComponent(GameController);
    }
    start() {
        // Your initialization goes here.
        // this.scheduleOnce(()=>{
        // super.start();
        // }, 0.2)
    }
    init(gameConfig: Object){
        super.init(gameConfig);
    }
    onButtonClick(event, customData) {
        find("GameController").emit("player-button-click-audio");

        console.log("custom data", customData);
        let currentGoldCount = GameInstance.getInstance().getPlayerData().getCurrentGoldCount();

        switch (customData) {
            case 'bg':
                console.log("点中了背景");
                this.state.setState("close-ui")
                break;
            case 'update':
                let isMax = this.targetNode.getComponent(TowerBase).getTowerIsMax();
                if (isMax) {
                    return;
                }
                if (currentGoldCount >= this.updateCostCount) {
                    GameInstance.getInstance().getPlayerData().addGoldCount(this.updateCostCount * -1);
                    this.state.setState("close-ui");
                    this.targetNode.getComponent(TowerBase).updateLevel();
                } else {
                    // this.node.emit("gold-not-enough");
                    find("Canvas").emit('gold-not-enough');
                }


                break;
            case 'destroy':

                // this.gameController.playerData.addGoldCount(this.destroyWinCount);
                this.state.setState("close-ui");
                this.targetNode.getComponent(TowerBase).toDestroy();

                break;
            default:
                break;
        }
    }

    checkIsUpdateMax() {
        // let isMax = this.getTowerIsMax
        let targetTower = this.targetNode;
        let isMax = targetTower.getComponent(TowerBase).getTowerIsMax();
        console.log("is max", isMax)
        if (isMax) {
            // this.checkIsUpdateMax
            console.log("更新按钮 贴图");
            this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateMaxLevelSpriteFrame;
        } else {
            this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrame;
        }
    }
    open(targetTower: Node) {
        super.open(targetTower);
        this.checkIsUpdateMax();



        let baseTower = targetTower.getComponent(TowerBase);
        let updateCostCount = baseTower.getUpdateCost();
        let destroyWinCount = baseTower.getDestroyCount();

        this.updateCostLabel.getComponent(LabelComponent).string = Tool.convertNumToK(updateCostCount) + '';
        this.destroyWinLabel.getComponent(LabelComponent).string = Tool.convertNumToK(destroyWinCount) + '';

        this.updateCostCount = updateCostCount;
        this.destroyWinCount = destroyWinCount;
    }

}
