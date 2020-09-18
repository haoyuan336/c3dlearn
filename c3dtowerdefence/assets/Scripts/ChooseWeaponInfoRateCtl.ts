import { _decorator, Component, Node, SpriteAtlas, SpriteFrame, v2, v3, Vec3, Vec2, Tween } from 'cc';
import { State } from './util/State';
const { ccclass, property } = _decorator;

@ccclass('ChooseWeaponInfoRateCtl')
export class ChooseWeaponInfoRateCtl extends Component {
    @property({ type: Node })
    public rateButtonList: Node[] = [];
    @property({ type: SpriteFrame })
    public rateButtonSpriteFrameLight: SpriteFrame[] = [];
    @property({ type: SpriteFrame })
    public rateButtonSpriteFrameGray: SpriteFrame[] = [];
    @property({ type: Node })
    public rateButtonParentNode: Node = null;
    private currentRateIndex = 0;
    private state: State = new State();
    start() {

        for (let i = 0; i < this.rateButtonList.length; i++) {
            let node = this.rateButtonList[i];
            let dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * 270 / 360).normalize();
            let pos = dir.multiplyScalar(80)
            node.position = v3(pos.x, pos.y, 0);
        }
        this.state.addState("wait", ()=>{
            console.log("current rate index", this.currentRateIndex);
            this.node.emit("refer-choose-rate-cost", this.getCurrentChooseRate());// 
        });
        this.state.setState("wait");

    }
    onButtonClick(event, customData) {
        if (customData.indexOf("rate") > -1) {
            console.log("旋转按钮");
            if (this.state.getState() !=='wait'){
                return;
            }
            this.currentRateIndex++;
            let angle = this.currentRateIndex % 3 * 120;
            this.state.setState("move");
            // this.rateButtonParentNode.eulerAngles = v3(0,0, angle);
            let promiseList = [];
            for (let i = 0; i < this.rateButtonList.length; i++) {
                let node = this.rateButtonList[i];
                let dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * (270 + angle) / 360).normalize();
                let pos = dir.multiplyScalar(80);
                // node.position = v3(pos.x, pos.y, 0); 
                promiseList.push(this.moveToAction(node, pos))        
            }
            Promise.all(promiseList).then(()=>{
                this.state.setState("wait");
            })
        }
    }
    moveToAction(node: Node, pos: Vec2){
        return new Promise((resolve, reject)=>{
            let tw = new Tween(node);
            tw.to(0.2, {
                position: v3(pos.x, pos.y, 0)
            });
            tw.call(()=>{
                resolve();
            });
            tw.start();
        })
        
    }
    getCurrentChooseRate(){
        return [1, 10,100][this.currentRateIndex % 3];
    }
}
