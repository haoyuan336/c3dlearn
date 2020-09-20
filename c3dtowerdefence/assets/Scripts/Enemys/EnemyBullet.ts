import { _decorator, Component, Node, Vec3, v3 } from 'cc';
import { BaseObject } from '../BaseObject';
import { GameController } from '../GameController';
import { State } from '../util/State';
const { ccclass, property } = _decorator;

@ccclass('EnemyBullet')
export class EnemyBullet extends BaseObject {
    private state: State = new State();
    private accY: number = GameController.accY;
    private currentSpeed: number = 0;
    private endPos: Vec3 = null;
    start() {
        // Your initialization goes here.
    }
    init(gameConfig, gameCtl, endPos: Vec3) {
        super.init(gameConfig, gameCtl);
        this.endPos = endPos;
        this.state.setState("run");
    }


    update(deltaTime: number) {
        // Your update function goes here.
        if (this.state.getState() === "run") {
            //如果游戏的状态是run ，那么鸡蛋做自由落体运动
            this.currentSpeed += this.accY;
            // this.node.position.add(v3(0,this.currentSpeed * deltaTime,0))
            this.node.position = v3(this.node.position).add(v3(0, this.currentSpeed * deltaTime, 0));
            let dis = this.node.position.y - this.endPos.y;
            if (dis < 1){
                console.log("停止");
                this.state.setState("move-end");
            }
        }
    }
}
