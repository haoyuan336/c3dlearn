import { _decorator, Component, Node, CCInteger, v3, Vec3, tween, path, Tween } from 'cc';
import { State } from './util/State'
const { ccclass, property } = _decorator;
@ccclass('Enemy')
export class Enemy extends Component {
    private pathList: Node[] = [];
    private state: State = new State();
    private currentPathIndex: number = 0;
    private moveSpeed: number = 1;
    onLoad() {
        this.node.on("init-data", (pathList) => {
            // console.log("init enemy path data");
            this.pathList = pathList;
            let pos = pathList[0].getPosition();
            pos.y = 1;
            this.node.setPosition(pos);
            this.node.scale = v3(0,0,0);

            let tw = new Tween(this.node);
            tw.to(0.2, {scale: v3(1,1,1)})
            tw.call(()=>{
                this.state.setState("run");
            });
            tw.start();
        });
        this.state.addState("run", () => {
            // console.log("start move");
            let tw = new Tween(this.node);
            for (let i = 1; i < this.pathList.length; i++) {
                let currentPos = this.pathList[i - 1].position;
                let nextPos = this.pathList[i].position;
                let moveTime = new Vec3(nextPos).subtract(currentPos).length() / this.moveSpeed;
                // console.log("length ", length);
                // console.log("move time", moveTime);
                tw.to(moveTime, {position: v3(nextPos.x, 1, nextPos.z)});
            }
            tw.to(0.2, {scale: v3(0,0,0)});
            tw.call(()=>{
                this.state.setState("over");
                this.node.emit("destroy-self");
            })
            .delay(0.2)
            .call(()=>{
                this.node.destroy();
            })
            // tw.to(1, { position: v3(0, 0, 0) });
            tw.start();
        });
    }
    start() {
        // this.state.setState("ready");
    }

    getIsDead():boolean{
        if (this.state.getState() === 'over'){
            return true;
        }
        return false;
    }

    update(deltaTime: number) {
        // Your update function goes here.

    }
}
