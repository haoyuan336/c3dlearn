import { _decorator, Component, Node, CameraComponent, systemEvent, SystemEventType, ColliderComponent, isValid } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TowerBuildBase')
export class TowerBuildBase extends Component {
    @property({ type: CameraComponent })
    public cameraNodeCom: CameraComponent = null;
    @property({ type: Node })
    public gameController: Node = null;
    private targetTower: Node = null;
    start() {
        this.gameController.on("touch-screen-to-3d", (collider: ColliderComponent) => {
            if (collider.node && collider.node.uuid === this.node.uuid && !isValid(this.targetTower)) {
                console.log("点中了 此塔座");

                this.gameController.emit("touch-base-build-base", this.node);
            }
        });

        // this.node
        // this.node.on("onTriggerEnter")
        // this.getComponent(ColliderComponent).on("onTriggerEnter", this.onTriggerEnter.bind(this));
    }
    unSetTargetTower(){
        this.targetTower = undefined;
    }
    setTargetTower(targetTower: Node) {
        this.targetTower = targetTower;
        this.node.active = false;
    }
    // onTriggerEnter() {
    //     console.log("点中了 tower build base");
    // }
}
