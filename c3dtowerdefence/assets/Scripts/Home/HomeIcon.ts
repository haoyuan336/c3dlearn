import { _decorator, Component, Node, Tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HomeIcon')
export class HomeIcon extends Component {


    start() {
        // this.node.eulerAngles
        // let tw = new Tween(this.node);
        // tw.to(1, {eulerAngles: v3(0,360,0)})
        // tw.call(()=>{
        //     this.node.eulerAngles = v3(0,0,0);
        // })
        // tw.repeatForever()
        // tw.start();

    }
    update(dt: number) {
        this.node.eulerAngles = this.node.eulerAngles.add(v3(0, 1, 0));
    }


}
