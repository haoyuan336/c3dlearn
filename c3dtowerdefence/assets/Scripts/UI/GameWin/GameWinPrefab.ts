import { _decorator, Component, Node, Prefab, SpriteFrame, SpriteComponent, instantiate, v3, Tween, LabelComponent } from 'cc';
import { DeadEnemyObj } from '../../EnemyController';
import { GameController } from '../../GameController';
import { UIController } from '../UIController';
import { GameResultGoldCell } from './GameResultGoldCell';
const { ccclass, property } = _decorator;

@ccclass('GameWinPrefab')
export class GameWinPrefab extends Component {
    @property({ type: Prefab })
    winGoldCellPrefab: Prefab = null
    @property({ type: Node })
    public leftButton: Node = null;
    @property({ type: Node })
    public rightButton: Node = null;


    @property({ type: SpriteFrame })
    public retryGameButtonSpriteFrame: SpriteFrame = null; //重新开始按钮精灵帧
    @property({ type: SpriteFrame })
    public shareButtonSpriteFrame: SpriteFrame = null; //分享按钮精灵帧
    @property({ type: SpriteFrame })
    public nextLevelSpriteFrame: SpriteFrame = null; //下一关按钮精灵帧
    @property({ type: SpriteFrame })
    public saveLifeButtonSpriteFrame: SpriteFrame = null; // 立即复活按钮精灵帧

    @property({ type: SpriteFrame })
    public gameWinIconSpriteFrame: SpriteFrame = null; //游戏胜利icon
    @property({ type: SpriteFrame })
    public gameLossIconSpriteFrame: SpriteFrame = null; //游戏失败icon

    @property({ type: Node })
    public gameResultIconNode: Node = null; //游戏结果节点

    @property({ type: Node })
    public gameResultNode: Node = null;

    @property({ type: Node })
    public sumNode: Node = null;
    @property({ type: Node })
    public totalEnemyCountLabel: Node = null;
    @property({ type: Node })
    public totalGoldCountLabel: Node = null;
    private gameConfig: {} = null;

    private gameResultState: boolean = null;
    private uiController: UIController = null;
    private gameController: GameController = null;
    start() {

    }
    setGameResult(succ: boolean, data: DeadEnemyObj[], gameConfig: {}, uiCtl: UIController, gameCtl: GameController) {
        this.uiController = uiCtl;
        this.gameController = gameCtl;
        this.gameResultState = succ;
        this.gameConfig = gameConfig;
        console.log("游戏状态时", succ)
        let allEnemyCount = data.length;
        let allGoldCount = 0;
        console.log("当前关卡打死的敌人数目种类，获得的金币数目 ")
        if (succ) {
            this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameWinIconSpriteFrame;
            this.leftButton.getComponent(SpriteComponent).spriteFrame = this.shareButtonSpriteFrame;
            this.rightButton.getComponent(SpriteComponent).spriteFrame = this.nextLevelSpriteFrame;
        } else {
            this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameLossIconSpriteFrame;
            this.leftButton.getComponent(SpriteComponent).spriteFrame = this.retryGameButtonSpriteFrame;
            this.rightButton.getComponent(SpriteComponent).spriteFrame = this.saveLifeButtonSpriteFrame;
        }
        let enemyTypeMap = {};
        for (let i = 0; i < data.length; i++) {
            if (enemyTypeMap[data[i].enemyType]) {
                enemyTypeMap[data[i].enemyType].count += 1; //此类敌人的总数
                enemyTypeMap[data[i].enemyType].winGoldCount += data[i].dropGoldCount;
            } else {

                enemyTypeMap[data[i].enemyType] = {
                    count: 1,
                    winGoldCount: data[i].dropGoldCount
                }
            }
            allGoldCount += data[i].dropGoldCount;
        }
        // console.log("enemy type map", enemyTypeMap);
        // let index = 0;
        // for (let i in enemyTypeMap) {
        //     let obj = enemyTypeMap[i];
        //     let node = instantiate(this.winGoldCellPrefab);
        //     node.parent = this.gameResultNode;
        //     node.position = v3(0, 0, 0);
        //     let iconStr = gameConfig[i].IconSpriteFrameName;
        //     this.showCellEnterAnim(node, index, iconStr, obj['count'], obj['winGoldCount']);
        //     index++;

        // }
        this.showCellEnterAnim(enemyTypeMap, () => {
            console.log("展示结束");
            return this.showSumResult(allEnemyCount, allGoldCount);
        });

    }
    showSumResult(enemyCount: number, goldCount: number) {
        //显示最后的总合
        return new Promise((resolve, reject) => {
            this.sumNode.active = true;
            this.totalEnemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
            this.totalGoldCountLabel.getComponent(LabelComponent).string = goldCount + '';
        })
    }
    showCellEnterAnim(data, cb) {
        if (Object.keys(data).length === 0) {
            if (cb) {
                cb();
            }
            return
        }
        let list = Object.keys(data);
        let objKey = list[Math.round(Math.random() * (list.length - 1))];
        let obj = data[objKey];
        delete data[objKey];
        let node = instantiate(this.winGoldCellPrefab);
        node.parent = this.gameResultNode;
        let tw = new Tween(node);
        let iconStr = this.gameConfig[objKey].IconSpriteFrameName;
        node.getComponent(GameResultGoldCell).setData(obj['count'], obj['winGoldCount'], iconStr);
        for (let i = 0; i < list.length - 1; i++) {
            tw.delay(0.5)
            tw.by(0.2, {
                position: v3(0, 80, 0)
            })
        }
        tw.call(() => {
            this.showCellEnterAnim(data, cb);
        })
        tw.start();
    }
    onButtonClick(event, customData) {
        switch (customData) {
            case 'left-button':
                console.log("分享游戏结果")
                if (this.gameResultState) {
                    //玩家点击了分享按钮
                    this.gameController.playerClickShareButton().then(() => {
                        this.gameController.enterNextLevel();
                        this.node.destroy();
                    });
                } else {
                    //玩家点击了，重新开始按钮
                    this.gameController.playerClickRetryButton();
                    this.node.destroy();
                }
                break;
            case 'right-button':
                if (this.gameResultState) {
                    //如果是胜利的话，那么玩家点击的就是下一关游戏的按钮
                    console.log("进入下一关")
                    this.node.destroy();
                    this.uiController.playerClickNextLevelButton();
                } else {
                    this.gameController.playerClickSaveLifeButton().then(()=>{
                        this.node.destroy(); //玩家点了立即复活按钮
                    });
                }
                break;
            default:
                break;
        }
    }
    // showCellEnterAnim(node: Node, index: number,iconStr: string, count: number, goldCount: number ) {
    //     //展示一个节点的进入动画    
    //     // node.getComponent(GameResultGoldCell).setData( count, goldCount, iconStr);

    // }
}
