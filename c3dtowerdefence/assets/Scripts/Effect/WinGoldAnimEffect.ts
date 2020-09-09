import { _decorator, Component, Node, SkeletalAnimationComponent, Tween, v3, find } from 'cc';
import { GameController } from '../GameController';
const { ccclass, property } = _decorator;

@ccclass('WinGoldAnimEffect')
export class WinGoldAnimEffect extends Component {

    public goldCount: number = 0;
    start() {
        // Your initialization goes here.
        //开始播放动画
        let skelete = this.node.getComponent(SkeletalAnimationComponent);
        if (skelete) {
            let defaultAnim = skelete.defaultClip;
            // defaultAnim.

            let state = skelete.getState(defaultAnim.name);
            state.repeatCount = 1;
            skelete.play(defaultAnim.name);
        }
        // this.node.eulerAngles = v3(0, Math.random() * 360, 0);
        // this.scheduleOnce(()=>{

        // },2);

    }
    setGoldCount(goldCount: number, gameController: GameController) {
        //设置金币个数
        this.goldCount = goldCount;
        let tw = new Tween(this.node)
        tw.delay(3)
        tw.to(0.8, {
            // eulerAngles: v3(0, 0, 0),
            position: v3(-30, 10, 0)
        })
        tw.call(() => {
            // find("GameController").emit("")
            gameController.playerData.addGoldCount(goldCount);
            this.node.destroy();
        })
        tw.start();
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
