import { _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, CCFloat } from 'cc';
import My2dArray from './util/My2Array';
const { ccclass, property } = _decorator;

@ccclass('GroundMapCtl')
export class GroundMapCtl extends Component {
    @property({ type: Prefab })
    public groundMapTiledPrefab: Prefab = null;
    @property({ type: CCInteger })
    public mapWidth: number = 0;
    @property({ type: CCInteger })
    public mapHeight: number = 0;

    @property({ type: CCFloat })
    public tiledSize: number = 0;
    // start() {
    //     // Your initialization goes here.
    //     this.node.on("");
    // }
    private mapNodeList: My2dArray<Node> = new My2dArray<Node>();
    startGame() {
        //开始游戏


        for (let i = 0; i < this.mapHeight; i++) {
            for (let j = 0; j < this.mapWidth; j++) {
                let node = instantiate(this.groundMapTiledPrefab);
                node.parent = this.node;
                let pos = v3((this.mapWidth - 1) * -0.5 * this.tiledSize + j * this.tiledSize,
                    0, (this.mapHeight - 1) * -0.5 * this.tiledSize + i * this.tiledSize);
                node.setPosition(pos);
            }
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
