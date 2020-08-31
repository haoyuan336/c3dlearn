import { _decorator, Component, Node, CCString } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseObject')
export class BaseObject extends Component {
    @property({ type: "" })
    public objectType = "";
    @property({ type: Node })
    public rootNode: Node = null
    @property({type: Number})
    public animSpeedMulOffset: number = 1;

}
