import { _decorator, Component, Node, Tween, LabelComponent, Color, UIComponent, UIOpacityComponent, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnterGameAnimCtl')
export class EnterGameAnimCtl extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({ type: Node })
    public logoLayer: Node = null;

    @property({ type: Node })
    public logoNode: Node = null;

    @property({ type: Node })
    public bgNode: Node = null;

    @property({ type: Node })
    public healthGameTips: Node = null; //健康游戏忠告
    start() {
        // Your initialization goes here.
        this.logoLayer.active = true;
        this.showAnim(this.healthGameTips, false, 1).then(()=>{
            return this.showAnim(this.healthGameTips, true, 0.01)
        }).then(()=>{
            return this.showAnim(this.logoNode, false, 1)
        }).then(()=>{
            return this.showAnim(this.logoNode,true, 0.01)
        }).then(()=>{
            return this.showAnim(this.bgNode, true, 0.01)
        }).then(()=>{
            // this.logoLayer.active = false;
            this.logoLayer.on("click", ()=>{
                find("GameController").emit("player-button-click-audio");
                this.logoLayer.active = false;
            })
            this.node.emit("show-guide");//调用显示引导层 的命令
        })

    }

    showAnim(node, hide: boolean, delayTime: number) {
        let opacityCom = node.getComponent(UIOpacityComponent);
        if (hide) {
            opacityCom.opacity = 255;

        } else {
            opacityCom.opacity = 0;
        }
        return new Promise((resolve, reject) => {
            let tw = new Tween(opacityCom);
            tw.to(1, {
                opacity: hide ? 0 : 255
            })
            tw.delay(delayTime);
            tw.call(() => {
                resolve()
            })

            tw.start();
        })

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
