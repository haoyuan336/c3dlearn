import { _decorator, Component, Node, Tween, v3, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GoldCtl')
export class GoldCtl extends Component {
    @property({ type: Node })
    public goldsNode: Node = null;
    start() {
    }
    showEnterAnim() {
        let height = view.getVisibleSize().height;
        console.log("播放金币ui的进场动画");
        return new Promise((resolve, reject) => {
            let tw = new Tween(this.goldsNode);
            tw.to(0.2, {
                position: v3(0, height * 0.5 - 100, 0)
            })
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }

}
