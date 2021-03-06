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
        this.node.on("close-tower-info-layer", () => {
            this.towerInfoLayer.active = false;
        });
        this.node.on("refer-tower-info", this.referTowerInfo.bind(this), this);
        this.node.on("close-weapon-info-layer", () => {
            this.towerInfoLayer.active = false;
        })
    }
    referTowerInfo(target: BaseObject) {
        this.currentAttackDamageLabel.getComponent(LabelComponent).string = target.getCurrentAttackNum().toString();
        this.currentAttackSpeedLabel.getComponent(LabelComponent).string = target.getCurrentShootRate().toFixed(1) + '/S';
        this.currentAttckRangeLabel.getComponent(LabelComponent).string = Math.floor(target.getCurrentAttackRange()).toString();
        this.towerNameLabel.getComponent(LabelComponent).string = target.getObjectName();
        this.towerInfoLabel.getComponent(LabelComponent).string = target.getDesString();
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
    setTowerData(target: BaseObject) {
        this.towerInfoLayer.active = true;
        this.referTowerInfo(target);
    }
}
