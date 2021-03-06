import { _decorator, Component, Node, Tween, v3, view, LabelComponent, find, instantiate, tween, ProgressBarComponent } from 'cc';
import { GameController } from '../GameController';
import { Tool } from '../util/Tool';
const { ccclass, property } = _decorator;

@ccclass('GoldCtl')
export class GoldCtl extends Component {
    @property({ type: Node })
    public goldsNode: Node = null;
    @property({ type: Node })
    public currentLevelLabel: Node = null;
    @property({ type: Node })
    public currentScoreLabel: Node = null;
    @property({ type: Node })
    public currentGoldLabel: Node = null;

    @property({ type: Node })
    public addGoldEffectLabel: Node = null;
    @property({ type: Node })
    public redHeartProgressBar: Node = null;
    @property({ type: Node })
    public redHeartCountLabel: Node = null;

    private addGoldEffectNodeCount: number = 0;

    start() {
        // let currentLevel = 0;
        // let currentWave = 0;
        // this.updateLevelLabel(currentLevel, currentWave);
        // this.node.on("update-level-wave", (level, wave) => {
        //     // currentLevel = level;
        //     this.updateLevelLabel(level, wave);
        // });
        // this.node.on("init-update-level", ()=>{
        //     this.updateLevelLabel(0,0);
        // })
        // this.node.on("update-wave", (wave)=>{
        //     currentWave = wave;
        //     this.updateLabel(currentLevel, currentWave);

        // });
        let gameCtlNode = find('GameController');
        gameCtlNode.on("refer-current-wave-level", (level, wave) => {
            // currentWave = wave;
            this.updateLevelLabel(level, wave);
        });
        gameCtlNode.on("update-gold-label", (goldCount: number, addGoldCount: number) => {
            this.updateGoldCountLabel(goldCount, addGoldCount);
        });
        // gameCtlNode.on("refer-current-wave")
        this.node.on("gold-not-enough", () => {
            //显示金币不足的动画
            // this.currentGoldLabel
            let tw = new Tween(this.currentGoldLabel);
            tw.to(0.1, { scale: v3(1.5, 1.5, 1.5) })
            tw.to(0.1, { scale: v3(1, 1, 1) })
            tw.start();
        });
        this.node.on("refer-red-heart-label", () => {
            let gameController = gameCtlNode.getComponent(GameController);
            let currentRedHeartCount = gameController.playerData.getCurrentRedHeartCount();
            let currentInitRedHeartCount = gameController.playerData.getCurrentInitRedHeartCount();
            this.redHeartCountLabel.getComponent(LabelComponent).string = currentInitRedHeartCount + "/" + currentRedHeartCount;
            let progress = currentRedHeartCount / currentInitRedHeartCount;
            this.redHeartProgressBar.getComponent(ProgressBarComponent).progress = progress;
        });
    }
    updateLevelLabel(level, wave) {
        this.currentLevelLabel.getComponent(LabelComponent).string = (level + 1) + '-' + (wave + 1);
    }
    updateGoldCountLabel(goldCount: number, addGoldCount?: number) {
        let endStr = Tool.convertNumToK(goldCount);
        this.currentGoldLabel.getComponent(LabelComponent).string = endStr;

        if (addGoldCount) {
            if (this.addGoldEffectNodeCount > 20) {
                return;
            }
            this.addGoldEffectNodeCount++;
            let effectNode = instantiate(this.addGoldEffectLabel);
            effectNode.parent = this.goldsNode;
            let offsetStr = '-';
            if (addGoldCount > 0) {
                offsetStr = '+';
            }
            let endStr = Tool.convertNumToK(addGoldCount);
            effectNode.getComponent(LabelComponent).string = offsetStr + endStr + '';
            // effectNode.position = v3(eff)
            let tw = new Tween(effectNode);
            tw.by(0.2, { position: v3(0, 20, 0) })
            tw.delay(0.5);
            tw.by(0.2, { position: v3(0, 20, 0), opacity: -0.5 })
            tw.call(() => {
                effectNode.destroy();
                this.addGoldEffectNodeCount--;
            })
            tw.start();

        }

    }
    showEnterAnim() {
        let height = view.getVisibleSize().height;
        console.log("播放金币ui的进场动画");
        this.node.emit("refer-red-heart-label");
        return new Promise((resolve, reject) => {
            let tw = new Tween(this.goldsNode);
            tw.to(0.2, {
                position: v3(0, height * 0.5 - 65, 0)
            })
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }

}
