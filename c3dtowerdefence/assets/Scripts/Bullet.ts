import { _decorator, Component, Node, v3, v2, Vec2 } from 'cc';
import { State } from './util/State';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {
    private state: State = new State();
    private speedY: number = 0;
    private accY: number = GameController.accY;
    private currentDirection: Vec2 = v2(0, 0);
    private moveSpeed: number = 20;
    private currentInitSpeedY = 6; //弹起的初始速度
    private currentCostAcc = -2;   //弹起的能量损失
    onLoad() {
        this.node.on("init-data", (data) => {
            let direction = data.direction;
            this.currentDirection = direction;
            let targetEnemy: Node = data.targetEnemy;
            this.state.setState("run");
            let s = this.node.getPosition().y * 2 / this.accY * -1;
            // console.log("s", s);
            let moveTime: number = Math.sqrt(s);
            let dis: number = v2(this.node.position.x, this.node.position.z).subtract(v2(targetEnemy.position.x, targetEnemy.position.z)).length();
            this.moveSpeed = dis / moveTime;


        });

        this.scheduleOnce(() => {
            this.node.destroy();
        }, 5)
    }
    start() {
        // Your initialization goes here.

    }

    update(deltaTime: number) {
        if (this.state.getState() === 'run') {
            //
            this.speedY += this.accY * deltaTime;
            let pos = this.node.position;
            let y = pos.y + this.speedY * deltaTime;
            let direction = this.currentDirection.normalize();
            let v = direction.multiplyScalar(this.moveSpeed * deltaTime);
            // console.log("v", v);
            this.node.setPosition(v3(pos.x + v.x, y, pos.z + v.y));
            if (this.node.getPosition().y <= 0) {
                this.node.destroy()
                this.speedY = this.currentInitSpeedY;
                this.currentInitSpeedY += this.currentCostAcc;
                if (this.currentInitSpeedY < 0){
                    this.node.destroy()
                }
            }

        }
    }
}
