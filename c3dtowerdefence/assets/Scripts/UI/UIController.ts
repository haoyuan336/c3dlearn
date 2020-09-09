import { _decorator, Component, Node, Prefab, instantiate, CameraComponent, Vec3, isValid, LabelComponent, EventTouch, ButtonComponent, AnimationComponent, Tween, view, v3 } from 'cc';
import { MenuUIBase } from './Menu/MenuUIBase';
import { SkillCtl } from './SkillCtl';
import { GoldCtl } from './GoldCtl';
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
    public enemyInfoButton: Node = null;
    @property({ type: Node })
    public towerInfoButton: Node = null;

    // @property({ type: Node })
    // public currentWaveLabelNode: Node = null;

    // @property({ type: Prefab })
    // public startGameCountDownAnimPrefab: Prefab = null;

    // @property({ type: Prefab })
    // public goAnimPrefab: Prefab = null;
    start() {
        let screenSize = view.getVisibleSize();
        let width = screenSize.width;
        this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
        this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);

        console.log("ui controller start")
        this.gameController.on("touch-base-build-base", (node: Node) => {
            //玩家点中了塔的基座
            //显示建造tower 的UI
            if (isValid(this.updateUINode)) {
                this.updateUINode.getComponent(MenuUIBase).close();
            }
            if (!isValid(this.buildUINode)) {
                this.buildUINode = instantiate(this.buildTowerPrefab);
                this.buildUINode.parent = this.node;
            }

            this.setUINodeTo3dPos(this.buildUINode, node);
            this.buildUINode.getComponent(MenuUIBase).open(node);
        })
        this.gameController.on("touch-tower", (targetTower: Node) => {
            //点中了tower
            if (isValid(this.buildUINode)) {
                this.buildUINode.getComponent(MenuUIBase).close();
            }
            if (!isValid(this.updateUINode)) {
                this.updateUINode = instantiate(this.updateMenuPrefab);
                this.updateUINode.parent = this.node;
            }
            this.setUINodeTo3dPos(this.updateUINode, targetTower);
            this.updateUINode.getComponent(MenuUIBase).open(targetTower);
        })
        // this.node.on("update-gold-label", (goldCount: number)=>{
        //     this.node.getComponent(GoldCtl).updateGoldCountLabel(goldCount);
        // });
        // this.gameController.on("refer-current-wave", (waveNum) => {
        //     this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
        // });



    }
    showUIEnterAnim() {
        return this.node.getComponent(SkillCtl).showEnterAnim().then(() => {
            return this.node.getComponent(GoldCtl).showEnterAnim();
        }).then(() => {
            return this.showButtonUIEnter();
        });
    }
    showButtonUIEnter() {
        return new Promise((resolve, reject) => {
            let list = [this.enemyInfoButton, this.towerInfoButton]
            let screenSize = view.getVisibleSize();
            let screenWidth = screenSize.width;
            let promiseList = [];
            const runAction = (node, index) => {
                return new Promise((resolve, reject) => {
                    let dir = index === 0 ? -1 : 1;
                    let tw = new Tween(node);
                    tw.to(0.4, {
                        position: v3(- dir * 100 + screenWidth * 0.5 * dir, 0, 0)
                    });
                    tw.call(() => {
                        console.log("进场结束");
                        resolve();
                    })
                    tw.start();
                })

            }
            for (let i = 0; i < list.length; i++) {
                let node = list[i];
                promiseList.push(runAction(node, i));
            }
            Promise.all(promiseList).then(() => {
                resolve();
            })
        })
    }
    setUINodeTo3dPos(uiNode: Node, node3d: Node) {
        let pos: Vec3;
        pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
        uiNode.setPosition(pos);
    }
    onButtonClick(event: ButtonComponent, customData) {
        console.log("on button click", customData);
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
