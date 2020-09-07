import { _decorator, Component, Node, CameraComponent, systemEvent, SystemEventType, ColliderComponent, isValid, find, PhysicsRayResult } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TowerBuildBase')
export class TowerBuildBase extends Component {
    // @property({ type: CameraComponent })
    public cameraNodeCom: CameraComponent = null;
    // @property({ type: Node })
    public gameController: Node = null;
    private targetTower: Node = null;
    start() {
        this.gameController = find("GameController");
        this.cameraNodeCom = find("Camera").getComponent(CameraComponent);
        this.gameController.on("touch-screen-to-3d", (resultList: PhysicsRayResult[]) => {
            if (!isValid(this.targetTower)) {
                for (let i = 0; i < resultList.length; i++) {
                    let result = resultList[i];
                    if (result.collider.node && result.collider.node.uuid === this.node.uuid) {
                        console.log("点中了此塔的基座");
                        this.gameController.emit("touch-base-build-base", this.node);
                    }
                }
            }

            // if (collider.node && collider.node.uuid === this.node.uuid && !isValid(this.targetTower)) {
            //     console.log("点中了 此塔座");

            //     this.gameController.emit("touch-base-build-base", this.node);
            // }
        });

        // this.node
        // this.node.on("onTriggerEnter")
        // this.getComponent(ColliderComponent).on("onTriggerEnter", this.onTriggerEnter.bind(this));
    }
    unSetTargetTower() {
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
