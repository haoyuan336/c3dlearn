import { _decorator, Component, Node } from 'cc';
import { BaseObject } from '../BaseObject';
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

    @property({type: Node})
    public monsterInfoLayer: Node = null;
    start() {
        // this.node.on('show--info', this.setMonsterInfo.bind(this), this)
        this.node.on("close-monster-info-layer", ()=>{
            // this.towerInfoLayer.active = false;
            this.monsterInfoLayer.active = false;
        });
    }
    // setMonsterInfo(){
    //     this.monsterInfoLayer.active = true;

    // }
    showMonsterInfoLayer(target: BaseObject){
        this.monsterInfoLayer.active = true;
    }
}
