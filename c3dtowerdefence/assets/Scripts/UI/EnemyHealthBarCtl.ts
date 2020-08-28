import { _decorator, Component, Node, Prefab, instantiate, ProgressBarComponent, UICoordinateTrackerComponent, CameraComponent, EventHandler, Vec2, v2, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyHealthBarCtl')
export class EnemyHealthBarCtl extends Component {
    @property({ type: Prefab })
    public enemyHealthBarPrefab: Prefab = null;

    @property({ type: CameraComponent })
    public cameraNode: CameraComponent = null;
    onLoad() {

        this.node.on("add-one-enemy", (enemyNode: Node) => {
            enemyNode.on("run", () => {
                let healthBar = instantiate(this.enemyHealthBarPrefab);
                healthBar.parent = this.node;
                healthBar.active = false;
                enemyNode.emit("set-health-bar", healthBar, this.cameraNode);

            })
        });
        this.node.on("remove-one-enemy", () => {

        });
    }
    start() {

    }

    update(deltaTime: number) {
    }
}
