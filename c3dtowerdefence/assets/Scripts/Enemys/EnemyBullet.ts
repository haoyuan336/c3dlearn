import { _decorator, Component, Node, Vec3, v3, Tween } from 'cc';
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
    @property({ type: Node })
    public caidaiEffect: Node = null;

    
    start() {
        // Your initialization goes here.

        this.state.addState("move-end", () => {
            // console.log("移动结束, 可以爆炸了");
            let tw = new Tween(this.rootNode);
            tw.to(0.1, {
                scale: v3(2, 2, 2)
            })
            tw.hide()
            tw.call(() => {
                //爆炸结束
                this.gameController.enemyAttacked(this.getBaseAttackDamage());
                this.caidaiEffect.active = true;
            })
            tw.delay(0.8 + Math.random() * 0.5),
                tw.call(() => {
                    this.caidaiEffect.active = false;
                    this.node.destroy();
                })
            tw.start();
        })
    }
    init(gameConfig, gameCtl, endPos: Vec3) {
        super.init(gameConfig, gameCtl);
        this.endPos = endPos;
        this.caidaiEffect.eulerAngles = v3(0, Math.random() * 360, 0)
        let scale = Math.random() * 0.2 + 0.8;
        this.caidaiEffect.scale = v3(scale, scale, scale);
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
            if (dis < 1) {
                console.log("停止");
                this.state.setState("move-end");
            }
        }
    }
}
