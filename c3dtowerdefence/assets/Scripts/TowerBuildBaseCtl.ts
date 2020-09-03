import { _decorator, Component, Node, Prefab, v2, instantiate, v3, Tween } from 'cc';
import { GroundMapCtl } from './GroundMapCtl';
import My2dArray from './util/My2Array';
const { ccclass, property } = _decorator;

@ccclass('TowerBuildBaseCtl')
export class TowerBuildBaseCtl extends Component {
    @property({ type: Prefab })
    public towerBuildBasePrefab: Prefab = null;

    private groundTiledNodeList: My2dArray<Node> = null;
    public towerBuildBaseList: Node[] = [];
    showTowerBuildBaseEnterAnim() {
        // this.mapWidth = this.node.getComponent(GroundMapCtl).mapWidth;
        // this.mapHeight = this.node.getComponent(GroundMapCtl).mapHeight;
        let towerBasePosList = [
            v2(4, 4),
            v2(4, 6),
            v2(6, 4),
            v2(6, 6)
        ]
        this.groundTiledNodeList = this.node.getComponent(GroundMapCtl).getMapNodeList();
        let promiseList = [];
        for (let i = 0; i < towerBasePosList.length; i++) {
            let v = towerBasePosList[i];
            let node = this.groundTiledNodeList.getValue(v.x, v.y);
            let towerBuildBase = instantiate(this.towerBuildBasePrefab);
            towerBuildBase.parent = this.node;
            towerBuildBase.position = v3(node.position.x, 20, node.position.z);
            this.node.getComponent(GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
            this.towerBuildBaseList.push(towerBuildBase);
            // towerBuildBase.position.y = 10;

            promiseList.push(this.showEnterAnim(towerBuildBase, i));
        }
        return Promise.all(promiseList);
    }
    showEnterAnim(target: Node, index: number) {
        target.active = false;
        return new Promise((resolve, reject) => {
            let tw = new Tween(target);
            let pos = target.position;
            tw.delay(index * 0.2);
            tw.call(() => {
                target.active = true;
            })
            tw.to(0.5, { position: v3(pos.x, 0, pos.z) }, { easing: "bounceOut" });
            tw.call(() => {
                resolve();
            })
            tw.start()
        })
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
