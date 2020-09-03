import { _decorator, Component, Node, Prefab, instantiate, CameraComponent, Vec3, isValid, LabelComponent, EventTouch, ButtonComponent, AnimationComponent, Tween } from 'cc';
import { MenuUIBase } from './Menu/MenuUIBase';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    @property({ type: Node })
    public gameController: Node = null;
    @property({ type: Prefab })
    public buildTowerPrefab: Prefab = null;
    @property({ type: Prefab })
    public updateMenuPrefab: Prefab = null;


    @property({ type: Node })
    public cameraNode: Node = null;

    private buildUINode: Node = null;
    private updateUINode: Node = null;

    @property({ type: Node })
    public currentWaveLabelNode: Node = null;

    // @property({ type: Prefab })
    // public startGameCountDownAnimPrefab: Prefab = null;

    // @property({ type: Prefab })
    // public goAnimPrefab: Prefab = null;
    start() {
        console.log("ui controller start")
        this.gameController.on("touch-base-build-base", (node: Node) => {
            //玩家点中了塔的基座
            //显示建造tower 的UI
            if (!isValid(this.buildUINode)) {
                this.buildUINode = instantiate(this.buildTowerPrefab);
                this.buildUINode.parent = this.node;
            }

            this.setUINodeTo3dPos(this.buildUINode, node);
            this.buildUINode.getComponent(MenuUIBase).open(node);
        })
        this.gameController.on("touch-tower", (targetTower: Node) => {
            //点中了tower
            if (!isValid(this.updateUINode)) {
                this.updateUINode = instantiate(this.updateMenuPrefab);
                this.updateUINode.parent = this.node;
            }
            this.setUINodeTo3dPos(this.updateUINode, targetTower);
        })
        this.gameController.on("refer-current-wave", (waveNum) => {
            this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
        });
    }
    // playCountDownAnim() {
    //     return new Promise((resolve, reject) => {
    //         let node = instantiate(this.startGameCountDownAnimPrefab);
    //         node.parent = this.node;
    //         let goNode: Node = null;
    //         let tw = new Tween(this.node);
    //         tw.delay(3);
    //         tw.call(() => {
    //             node.destroy();
    //             goNode = instantiate(this.goAnimPrefab);
    //             goNode.parent = this.node;
    //         });
    //         tw.delay(1);
    //         tw.call(() => {
    //             if (isValid(goNode)) {
    //                 goNode.destroy();
    //             }
    //             resolve();
    //         })
    //         tw.start();
    //         // node.on("play-anim-cb", () => {
    //         //     console.log("play anim end");
    //         //     node.destroy();
    //         //     resolve();
    //         // })
    //         // let animation = node.getComponent(AnimationComponent)
    //         // if (animation && animation.defaultClip){
    //         //     let defaultClip = animation.defaultClip;
    //         //     defaultClip.events.push({
    //         //         frame: 2.9,
    //         //         func: "countDonwAnimEnd"
    //         //     })
    //         // }   
    //     });
    // }
    // countDonwAnimEnd() {
    //     console.log("倒计时动画播放完成");
    // }
    setUINodeTo3dPos(uiNode: Node, node3d: Node) {
        let pos: Vec3;
        pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
        uiNode.setPosition(pos);
    }
    onButtonClick(event: ButtonComponent, customData) {
        switch (customData) {
            case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.emit("player-click-game");
                break;
            default:
                break;
        }
    }
}
