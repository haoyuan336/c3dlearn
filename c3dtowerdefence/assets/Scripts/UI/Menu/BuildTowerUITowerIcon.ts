import { _decorator, Component, Node, Prefab, find, instantiate, v3 } from 'cc';
import { GameController } from '../../GameController';
const { ccclass, property } = _decorator;

@ccclass('BuildTowerUITowerIcon')
export class BuildTowerUITowerIcon extends Component {

    @property({ type: Node })
    public costGoldLabel: Node = null;
    @property({ type: Prefab })
    public towerShowAnimList: Prefab[] = [];

    @property({type: Node})
    public showTowerAnimLayer: Node = null;
    public gameConfig: {} = undefined;
    start() {
        this.gameConfig = find("GameController").getComponent(GameController).getGameConfig().json;
        // Your initialization goes here.
    }
    init(type) {
        console.log("初始化塔的类型", type);
        let node = instantiate(this.towerShowAnimList[type])
        node.scale = v3(0.5,0.5,0.5);
        node.parent = this.showTowerAnimLayer;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
