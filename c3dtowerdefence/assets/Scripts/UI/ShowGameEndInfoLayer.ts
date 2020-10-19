import { _decorator, Component, Node, v3 } from 'cc';
import { State } from '../util/State';
const { ccclass, property } = _decorator;

@ccclass('ShowGameEndInfoLayer')
export class ShowGameEndInfoLayer extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({ type: Node })
    public showGameInfoLayer: Node = null;
    @property({ type: Node })
    public infoNode: Node = null;



    public state: State = new State();

    public clickBgCb: Function = null;
    start() {
        // Your initialization goes here.
        this.node.on("show-game-end-info-layer", (cb) => {
            this.clickBgCb = cb;
            this.startShow();
        })
        // this.startShow();
    }
    startShow() {
        this.showGameInfoLayer.active = true;
        this.state.setState("start-show");
    }

    update(deltaTime: number) {
        // Your update function goes here.
        if (this.state.getState() === 'start-show') {
            this.infoNode.position = v3(this.infoNode.position.x, this.infoNode.position.y + deltaTime * 40, this.infoNode.position.z);
        }
    }
    onButton(event, customData) {
        switch (customData) {
            case "bg-node":
                if (this.clickBgCb){
                    this.clickBgCb();
                }
                this.showGameInfoLayer.active = false;
                this.state.setState("move-end");

                break;
            default:
        }

    }
}
