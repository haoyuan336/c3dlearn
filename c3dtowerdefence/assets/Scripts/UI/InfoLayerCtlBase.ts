import { _decorator, Component, Node, view, Tween, v3, SpriteComponent ,find} from 'cc';
import { State } from '../util/State';
const { ccclass, property } = _decorator;

@ccclass('InfoLayerCtlBase')
export class InfoLayerCtlBase extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({ type: Node })
    public bectledLayerNode: Node = null;
    @property({ type: Node })
    public blockBgNode: Node = null;

    @property({ type: Node })
    public ctlShowButton: Node = null;

    @property({ type: "" })
    public hideDir = "Right"; //隐藏时候的位置

    public state: State = new State();
    // start () {
    //     // Your initialization goes here.
    // }
    start() {
        // this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);
        this.bectledLayerNode.position = v3(this.bectledLayerNode.width * 0.5 * (this.hideDir === 'Right' ? 1 : -1), 0, 0);
        this.state.setState("close");
        this.state.addState("play-open-anim", () => {
            //播放打开武器信息的UI
            console.log("播放武器信息ui打开的动画");
            this.hideButton().then(() => {
                return this.showInfoLayerNode();
            }).then(() => {
                this.showBlockBgNode();
            }).then(() => {
                this.state.setState('open');
            })
        })
        this.state.addState("play-close-anim", () => {
            this.hideBlockBgNode().then(() => {
                return this.hideInfoLayerNode();
            }).then(() => {
                return this.showCtlInfoButtonn();
            }).then(() => {
                this.state.setState("close");
            })
        })
        this.node.on("close-weapon-info-layer", () => {
            //关闭武器信息页面
            if (this.state.getState() === 'open') {
                this.state.setState("play-close-anim");
            }
            // if (this.closeUICb){
            //     this.closeUICb();
            // }
        });
    }
    closeUICb(){

    }
    showCtlInfoButtonn() {
        return new Promise((resolve, reject) => {
            let v = view.getVisibleSize().width;
            let tw = new Tween(this.ctlShowButton);
            let dir = this.hideDir === 'Right' ? 1 : -1;
            tw.to(0.1, {
                position: v3(v * 0.5 * dir - 100 * dir, 0, 0)
            })
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }

    hideInfoLayerNode() {
        //隐藏武器信息节点
        return new Promise((resolve, reject) => {
            let tw = new Tween(this.bectledLayerNode);
            let dir = this.hideDir === 'Right' ? 1 : -1;
            tw.to(0.2, {
                position: v3(this.bectledLayerNode.width * 0.5 * dir, 0, 0)
            });
            tw.call(() => {
                resolve();
            })
            tw.start();
        })
    }
    hideBlockBgNode() {
        return new Promise((resolve, reject) => {
            resolve();
            this.blockBgNode.active = false;
        })
    }
    showInfoLayerNode() {
        return new Promise((resolve, reject) => {
            //
            // for (let i = 0 ; i < this.weaponIndoCellNodeList.length ; i ++){
            //     let node = this.weaponIndoCellNodeList[i];
            //     node.getComponent(WeaponUpdateCellPrefab).referCurrentDamage();
            // }
            let tw = new Tween(this.bectledLayerNode);
            tw.to(0.2, {
                position: v3(0, 0, 0)
            })
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }
    showBlockBgNode() {
        return new Promise((resolve, reject) => {
            this.blockBgNode.active = true;
            let tw = new Tween(this.blockBgNode.getComponent(SpriteComponent));
            // tw.to(0.2, {color: new Color(0,0,0,150)});
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }
    hideButton() {
        let v = view.getVisibleSize().width;
        return new Promise((resolve, reject) => {
            let buttonTw = new Tween(this.ctlShowButton);
            let dir = this.hideDir === 'Right' ? 1 : -1;
            buttonTw.to(0.1, {
                position: v3(v * 0.5 * dir + dir * 100, 0, 0)
            })
            buttonTw.call(() => {
                resolve();
            })
            buttonTw.start();
        })

    }
    onButtonClick(event, customData) {
        find("GameController").emit("player-button-click-audio");

        switch (customData) {
            case 'show-info-layer':
                console.log("武器信息按钮");
                if (this.state.getState() === 'close') {
                    //关闭状态
                    this.state.setState("play-open-anim");
                    this.node.emit("close-tower-menu-ui"); //关闭升级建造塔相关的UI
                }
                break;
            case 'bg-node-click':
                console.log("背景节点点击 ", this.state.getState());
                if (this.state.getState() === 'open') {
                    this.state.setState("play-close-anim");
                }
                break;
            default:
                break;
        }
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
