import { _decorator, Component, Node, Tween, v3, view, LabelComponent, find, instantiate } from 'cc';
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

    private addGoldEffectNodeCount: number = 0;
    start() {
        let currentLevel = 0;
        let currentWave = 0;
        this.updateLevelLabel(currentLevel, currentWave);
        this.node.on("update-level", (level) => {
            currentLevel = level;
            this.updateLevelLabel(currentLevel, currentWave);
        });
        // this.node.on("update-wave", (wave)=>{
        //     currentWave = wave;
        //     this.updateLabel(currentLevel, currentWave);

        // });
        let gameCtlNode = find('GameController');
        gameCtlNode.on("refer-current-wave", (wave) => {
            currentWave = wave;
            this.updateLevelLabel(currentLevel, currentWave);
        });
        gameCtlNode.on("update-gold-label", (goldCount: number, addGoldCount: number) => {
            this.updateGoldCountLabel(goldCount, addGoldCount);
        });
    }
    updateLevelLabel(level, wave) {
        this.currentLevelLabel.getComponent(LabelComponent).string = (level + 1) + '-' + (wave + 1);
    }
    updateGoldCountLabel(goldCount: number, addGoldCount?: number) {
        this.currentGoldLabel.getComponent(LabelComponent).string = goldCount + '';

        if (addGoldCount) {
            if (this.addGoldEffectNodeCount > 20) {
                return;
            }
            this.addGoldEffectNodeCount++;
            let effectNode = instantiate(this.addGoldEffectLabel);
            effectNode.parent = this.goldsNode;
            let offsetStr = '';
            if (addGoldCount > 0) {
                offsetStr = '+';
            }
            effectNode.getComponent(LabelComponent).string = offsetStr + addGoldCount + '';
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
