import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MonsterInfoLayer')
export class MonsterInfoLayer extends Component {
    @property({ type: Node })
    public nameLabel: Node = null;

    @property({ type: Node })
    public speedLabel: Node = null;

    @property({ type: Node })
    public healthCountLabel: Node = null;

    @property({ type: Node })
    public storyLabel: Node = null;
    start() {
    }
}
