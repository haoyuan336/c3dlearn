import { _decorator, Component, Node, JsonAsset, find, Tween, v3, UIComponent, UITransformComponent } from 'cc';
import { GameController } from '../GameController';
import { State } from '../util/State';
const { ccclass, property } = _decorator;

@ccclass('GuideCtl')
export class GuideCtl extends Component {

    @property({ type: Node })
    public guideLayer: Node = null;

    @property({ type: JsonAsset })
    public guideConfigJsonAsset: JsonAsset = null;

    private currentGuideIndex: number = 1;

    private gameController: GameController = null;

    private guideCompleteCb: Function = null;

    private state: State = new State();
    start() {
        // Your initialization goes here.
        this.gameController = find("GameController").getComponent(GameController);
    }
    onLoad() {
        this.node.on("show-guide", (cb) => {
            //显示引导层
            let stepStr = "Step_" + this.currentGuideIndex;
            if (this.guideConfigJsonAsset.json[stepStr]) {
                let isShowGuide = this.gameController.playerData.getIsShowGuide(stepStr);
                if (isShowGuide) {
                    if (cb) {
                        cb();
                    }
                } else {
                    this.guideCompleteCb = cb;
                    this.showMaskAnim(stepStr);
                }
            } else {
                if (cb) {
                    cb();
                }
            }
            this.state.setState("show-guide");

        });

        this.node.on("complete-current-guide", () => {
            //完成了当前的 引导逻辑
            if (this.state.getState() === 'show-guide') {
                this.state.setState('over-guide');
            } else {
                return;
            }
            let stepStr = "Step_" + this.currentGuideIndex;
            this.gameController.playerData.setIsShowGuide(stepStr);
            this.currentGuideIndex++;
            this.hideMaskAnim().then(() => {
                console.log("引导操作完成");
                if (this.guideCompleteCb) {
                    console.log("存在回调");
                    this.guideCompleteCb();
                    // this.guideCompleteCb = null;
                }
            });
        })
    }
    hideMaskAnim() {
        return new Promise((resolve, reject) => {
            let uiTransfrom = this.guideLayer.getComponent(UITransformComponent);
            let tw = new Tween(uiTransfrom);
            tw.to(0.4, {
                width: 1700,
                height: 1700
            })
            tw.call(() => {
                resolve();
            })
            tw.start();
        })

    }
    showMaskAnim(stepStr: string) {
        return new Promise((resolve, reject) => {
            let guideData = this.guideConfigJsonAsset.json[stepStr];
            console.log("guide data", guideData);
            let size = guideData.Size;
            let pos = guideData.MaskPos;
            let time = guideData.Time;
            this.guideLayer.active = true;
            let uiTransfrom = this.guideLayer.getComponent(UITransformComponent);
            // uiTransfrom.width = 1700;
            // uiTransfrom.height = 1700;
            let tw = new Tween(uiTransfrom)

            tw.to(time, {
                width: size.width,
                height: size.height
                // position: v3(pos.x, pos.y, 0)
            })
            tw.call(() => {
                resolve();
            })
            tw.start();

            let posTw = new Tween(this.guideLayer);
            posTw.to(time, {
                position: v3(pos.x, pos.y, pos.z)
            })
            posTw.start();
        })
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
