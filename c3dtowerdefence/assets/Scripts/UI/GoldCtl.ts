import { _decorator, Component, Node, Tween, v3, view, LabelComponent, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GoldCtl')
export class GoldCtl extends Component {
    @property({ type: Node })
    public goldsNode: Node = null;
    @property({ type: Node })
    public currentLevelLabel: Node = null;
    @property({ type: Node })
    public currentScoreLabel: Node = null;
    start() {
        let currentLevel = 0;
        let currentWave = 0;
        this.updateLabel(currentLevel, currentWave);
        this.node.on("update-level", (level) => {
            currentLevel = level;
            this.updateLabel(currentLevel, currentWave);
        });
        // this.node.on("update-wave", (wave)=>{
        //     currentWave = wave;
        //     this.updateLabel(currentLevel, currentWave);

        // });
        let gameCtlNode = find('GameController');
        gameCtlNode.on("refer-current-wave", (wave) => {
            currentWave = wave;
            this.updateLabel(currentLevel, currentWave);
        });
    }
    updateLabel(level, wave) {
        this.currentLevelLabel.getComponent(LabelComponent).string = (level + 1) + '-' + (wave + 1);
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
