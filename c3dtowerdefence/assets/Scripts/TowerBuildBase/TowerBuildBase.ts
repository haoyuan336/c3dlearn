import { _decorator, Component, Node, CameraComponent, systemEvent, SystemEventType, ColliderComponent, isValid, find, PhysicsRayResult, SkeletalAnimationComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TowerBuildBase')
export class TowerBuildBase extends Component {
    // @property({ type: CameraComponent })
    public cameraNodeCom: CameraComponent = null;
    // @property({ type: Node })
    public gameController: Node = null;
    private targetTower: Node = null;
    @property({type: Node})
    public arrowGuide: Node = null;
    onLoad(){

    }
    start() {
        this.gameController = find("GameController");
        this.cameraNodeCom = find("Camera").getComponent(CameraComponent);
        this.gameController.on("touch-screen-to-3d", this.touchScreenTo3d.bind(this), this);
        this.gameController.on("destroy-all-tower-build-base", this.destroyTowerBuildBase.bind(this), this);
        this.gameController.on("frozen-tower-build-base", this.forzenTowerBuildBase.bind(this), this);
        // this.node
        // this.node.on("onTriggerEnter")
        // this.getComponent(ColliderComponent).on("onTriggerEnter", this.onTriggerEnter.bind(this));
    }
    forzenTowerBuildBase(){
        let skeleteAnim = this.arrowGuide.getComponent(SkeletalAnimationComponent);
        let defaultClip = skeleteAnim.defaultClip;
        let stateAnim = skeleteAnim.getState(defaultClip.name);
        stateAnim.pause();
    }
    touchScreenTo3d(resultList: PhysicsRayResult[]) {
        if (!isValid(this.targetTower)) {
            for (let i = 0; i < resultList.length; i++) {
                let result = resultList[i];
                if (result.collider.node && result.collider.node.uuid === this.node.uuid) {
                    console.log("点中了此塔的基座");
                    this.gameController.emit("touch-base-build-base", this.node);
                }
            }
        }

    }
    onDestroy() {
        this.gameController.off("destroy-all-tower-build-base", this.destroyTowerBuildBase, this);
        this.gameController.off("touch-screen-to-3d", this.touchScreenTo3d, this);
        this.gameController.off("frozen-tower-build-base", this.forzenTowerBuildBase, this);
    }
    destroyTowerBuildBase() {
        this.node.destroy();
    }
    unSetTargetTower(target: Node) {
        this.targetTower = undefined;
        this.node.active = true;
    }
    setTargetTower(targetTower: Node) {
        this.targetTower = targetTower;
        this.node.active = false;
    }
    
    // onTriggerEnter() {
    //     console.log("点中了 tower build base");
    // }
}
