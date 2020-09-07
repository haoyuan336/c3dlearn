import { _decorator, Component, Node, EventTouch, CCObject, CameraComponent, Vec2, geometry, PhysicsSystem, systemEvent, find } from 'cc';
import { GameController } from '../GameController';
const { ccclass, property } = _decorator;

@ccclass('TouchScreenLayer')
export class TouchScreenLayer extends Component {
    // @property({ type: Node })
    public cameraNode: CameraComponent = null;
    // @property({ type: Node })
    public gameCtl: Node = null;


    start() {
        this.cameraNode = find("Camera").getComponent(CameraComponent);
        this.gameCtl = find("GameController");
        // Your initialization goes here.
        this.node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
            // console.log("touch start", event.getLocation());
            let touchPos: Vec2 = event.getLocation();
            let ray = this.cameraNode.getComponent(CameraComponent).screenPointToRay(touchPos.x, touchPos.y);
            // PhysicsRayResult.
            // PhysicsSystem.instance.raycastClosest(ray,0xffffff ,1000);
            // ray.
            PhysicsSystem.instance.raycast(ray, 1, 10000, true);
            if (PhysicsSystem.instance.raycastResults) {
                // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);

               find("GameController").getComponent(GameController).playerTouch3dObject(PhysicsSystem.instance.raycastResults);
               
                // PhysicsSystem.instance
            }
        })
    }

    update(deltaTime: number) {
        // Your update function goes here.
    }
}
