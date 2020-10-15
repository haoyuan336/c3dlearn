import { _decorator, Component, Node, Tween, Vec3, v3, find, isValid } from 'cc';
import { State } from '../../util/State';
import { TowerBase } from '../../Towers/TowerBase';
// import { BaseObject } from '../../BaseObject';
import { GameController } from '../../GameController';
const { ccclass, property } = _decorator;

@ccclass('MenuUIBase')
export class MenuUIBase extends Component {
    public state: State = new State();
    protected targetNode: Node = null;
    // start() {
    //     // console.log('menu ui base');
    //     // this.state.addState('open-ui', this.openUI.bind(this));
    //     // this.state.addState('close-ui', this.closeUI.bind(this));
    //     // let gameConfig = find('GameController').getComponent(GameController).getGameConfig().json;
    //     // this.scheduleOnce(()=>{
    //     //     super.init(gameConfig);

    //     // }, 0.2)
    // }

    public init(gameConfig?: Object, gameCtl?: GameController) {
        // super.init(gameConfig, gameController);
        this.state.addState('open-ui', this.openUI.bind(this));
        this.state.addState('close-ui', this.closeUI.bind(this));
    }
    open(target: Node) {
        console.log("打开");
        if (isValid(this.targetNode) && this.targetNode.getComponent(TowerBase) && this.targetNode.uuid !== target.uuid) {
            this.targetNode.getComponent(TowerBase).closeAttackRange();
        }
        if (target.getComponent(TowerBase)) {
            target.getComponent(TowerBase).showAttackRange();
        }
        this.targetNode = target;
        this.state.setState('open-ui');
    }
    close() {

        this.state.setState("close-ui");
    }

    private closeUI() {
        if (isValid(this.targetNode) && this.targetNode.getComponent(TowerBase)) {
            this.targetNode.getComponent(TowerBase).closeAttackRange();
        }
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
