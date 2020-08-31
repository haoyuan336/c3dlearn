import { _decorator, Component, Node, Tween, Vec3, v3 } from 'cc';
import { State } from '../../util/State';
const { ccclass, property } = _decorator;

@ccclass('MenuUIBase')
export class MenuUIBase extends Component {
    public state: State = new State();
    protected targetNode: Node = null;
    start() {
        console.log('menu ui base');
        this.state.addState('open-ui', this.openUI.bind(this));
        this.state.addState('close-ui', this.closeUI.bind(this));
    }
  
    open(target:Node){
        console.log("打开");
        this.targetNode = target;
        this.state.setState('open-ui');
    }

    private  closeUI() {
        let tw = new Tween(this.node);
        tw.to(0.2, { scale: v3(0, 0, 0) });
        tw.call(() => {
            // this.node.active = false;
        })
        tw.start();
    }
    private openUI() {
        console.log("open ui");
        this.node.active = true;
        let tw = new Tween(this.node);
        tw.to(0.2, { scale: v3(1, 1, 1) });
        tw.call(() => {
        })
        tw.start();
    }

}
