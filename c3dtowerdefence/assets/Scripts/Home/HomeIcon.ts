import { _decorator, Component, Node, Tween, v3 } from 'cc';
import { State } from '../util/State';
const { ccclass, property } = _decorator;

@ccclass('HomeIcon')
export class HomeIcon extends Component {
    @property({type: Node})
    public redHeartNode: Node = null;

    private state: State = new State();
    start() {
        // this.node.eulerAngles
        // let tw = new Tween(this.node);
        // tw.to(1, {eulerAngles: v3(0,360,0)})
        // tw.call(()=>{
        //     this.node.eulerAngles = v3(0,0,0);
        // })
        // tw.repeatForever()
        // tw.start();
        this.state.setState("run");

    }
    frozenHomeIcon(){
        this.state.setState("frozen");
    }
    freeHomeIconn(){
        this.state.setState("run");
    }
    update(dt: number) {
        if (this.state.getState() === "run"){
            this.redHeartNode.eulerAngles = this.redHeartNode.eulerAngles.add(v3(0, 1, 0));
        }
    }


}
