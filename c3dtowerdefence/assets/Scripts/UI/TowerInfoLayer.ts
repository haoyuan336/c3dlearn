import { _decorator, Component, Node, profiler, LabelComponent, Prefab, isValid, instantiate, v3 } from 'cc';
import { BaseObject } from '../BaseObject';
const { ccclass, property } = _decorator;

@ccclass('TowerInfoLayer')
export class TowerInfoLayer extends Component {
    @property({ type: Node })
    public currentAttackDamageLabel: Node = null;

    @property({ type: Node })
    public currentAttckRangeLabel: Node = null;

    @property({ type: Node })
    public currentAttackSpeedLabel: Node = null;

    @property({ type: Node })
    public towerNameLabel: Node = null; //塔的名称

    @property({ type: Node })
    public attackTypeIconList: Node[] = [];

    @property({ type: Node })
    public towerInfoLabel: Node = null;

    @property({ type: Node })
    public towerInfoLayer: Node = null;

    @property({ type: Node })
    public tower2dAnimNodePos: Node = null;


    @property({ type: Prefab })
    public tower2dAnimPrefabList: Prefab[] = [];


    private currentShowAnimNode: Node = null;
    start() {
        this.node.on('show-tower-info', this.setTowerData.bind(this), this)
        this.node.on("close-tower-info-layer", ()=>{
            this.towerInfoLayer.active = false;
        });
    }
    setTowerData(target: BaseObject) {
        this.towerInfoLayer.active = true;
        this.currentAttackDamageLabel.getComponent(LabelComponent).string = target.getCurrentAttackNum().toString();
        this.currentAttackSpeedLabel.getComponent(LabelComponent).string = Math.round(1 / target.getCurrentShootRate()).toString() + '/S';
        this.currentAttckRangeLabel.getComponent(LabelComponent).string = Math.floor(target.getCurrentAttackRange()).toString();
        this.towerNameLabel.getComponent(LabelComponent).string = target.getTowerName();

        let typeIndex = target.towerIndexType;
        if (isValid(this.currentShowAnimNode)) {
            //
            this.currentShowAnimNode.destroy();
        }
        let node = instantiate(this.tower2dAnimPrefabList[typeIndex]);
        node.parent = this.towerInfoLayer;
        node.position = v3(this.tower2dAnimNodePos.position);
        this.currentShowAnimNode = node;
    }
}
