import { _decorator, Component, Node, LabelComponent, loader, SpriteFrame, SpriteComponent } from 'cc';
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

    @property({ type: Node })
    public monsterInfoLayer: Node = null;

    @property({type: Node})
    public spriteIconNode: Node = null;
    start() {
        // this.node.on('show--info', this.setMonsterInfo.bind(this), this)
        this.node.on("close-monster-info-layer", () => {
            // this.towerInfoLayer.active = false;
            this.monsterInfoLayer.active = false;
        });
        this.node.on("close-weapon-info-layer", () => {
            this.monsterInfoLayer.active = false;

        })
    }
    // setMonsterInfo(){
    //     this.monsterInfoLayer.active = true;

    // }
    showMonsterInfoLayer(target: BaseObject) {
        this.monsterInfoLayer.active = true;
        this.nameLabel.getComponent(LabelComponent).string = target.getObjectName();
        this.healthCountLabel.getComponent(LabelComponent).string = target.getHealthCount().toString(); //获得
        this.speedLabel.getComponent(LabelComponent).string = target.getMoveSpeed().toString(); //获得移动速度
        this.storyLabel.getComponent(LabelComponent).string = target.getDesString(); //获得详细简介
        loader.loadRes(target.getIconSprteFrame() + "/spriteFrame", SpriteFrame, (err, result)=>{
            this.spriteIconNode.getComponent(SpriteComponent).spriteFrame = result;
        });


        // this.speedLabel.getComponent(LabelComponent).string = target.getMoveSpeed().toString(); //移动速度
        // this.des
        // this.healthCountLabel.getComponent(LabelComponent).string = target.getCoun
        // this.storyLabel.getComponent(LabelComponent).string = target.getDesString();
    }
}
