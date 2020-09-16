import { _decorator, Component, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WeaponUpdateCellPrefab')
export class WeaponUpdateCellPrefab extends Component {
    @property({ type: Node })
    public currentDamageLabel: Node = null;
    @property({ type: Node })
    public addDamageLabel: Node = null; //需要增加了攻击力的label
    @property({ type: Node })
    public costGoldLabel: Node = null; //需要消耗的金币
    @property({ type: Node })
    public weaponIconNode: Node = null; //
    @property({ type: SpriteFrame })
    public updateButtonSpriteFrameGray: SpriteFrame = null;
    @property({ type: SpriteFrame })
    public updateButtonSpriteFrameGreen: SpriteFrame = null;
    start() {
    }
    public setData(data: Object){
        console.log("初始化数据",data);
    }
}
