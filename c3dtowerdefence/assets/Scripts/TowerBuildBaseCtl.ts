import { _decorator, Component, Node, Prefab, v2, instantiate, v3, Tween, JsonAsset } from 'cc';
import { GameInstance } from './GameInstance';
import { GroundMapCtl } from './GroundMapCtl';
import My2dArray from './util/My2Array';
// import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('TowerBuildBaseCtl')
export class TowerBuildBaseCtl extends Component {
    @property({ type: Prefab })
    public towerBuildBasePrefab: Prefab = null;

    @property({ type: JsonAsset })
    public gameConfigJsonAsset: JsonAsset = null;
    private groundTiledNodeList: My2dArray<Node> = null;
    // private towerBuildBaseList: Node[] = [];
    // private gameController: GameController = null;


    showTowerBuildBaseEnterAnim() {
        // this.gameController = this.node.getComponent(GameController);
        // this.mapWidth = this.node.getComponent(GroundMapCtl).mapWidth;
        // this.mapHeight = this.node.getComponent(GroundMapCtl).mapHeight;
        // let currentActiveTowerBuildCount = this.gameController.playerData.currentActiveTowerBuildBaseCount;
        let currentLevelNum = GameInstance.getInstance().getPlayerData().currentLevelNum;
        let towerBasePosList = this.gameConfigJsonAsset.json['Level_' + currentLevelNum]['TowerBuildPos'];
        //     v2(4, 4),
        //     v2(4, 6),
        //     v2(6, 4),
        //     v2(6, 6)
        // ]
        this.groundTiledNodeList = this.node.getComponent(GroundMapCtl).getMapNodeList();
        let promiseList = [];
        // console.log("current active ", currentActiveTowerBuildCount);
        for (let i = 0; i < towerBasePosList.length; i++) {
            let posList = towerBasePosList[i];
            let v = v2(posList[0], posList[1])
            let node = this.groundTiledNodeList.getValue(v.x, v.y);
            let towerBuildBase = instantiate(this.towerBuildBasePrefab);
            towerBuildBase.parent = this.node;
            towerBuildBase.position = v3(node.position.x, 20, node.position.z);
            this.node.getComponent(GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
            // this.towerBuildBaseList.push(towerBuildBase);
            // towerBuildBase.position.y = 10;

            promiseList.push(this.showEnterAnim(towerBuildBase, i));
        }


        // for (let i = 0; i < towerBasePosList.length; i++) {
        //     let v = towerBasePosList[i];
        //     let node = this.groundTiledNodeList.getValue(v.x, v.y);
        //     let towerBuildBase = instantiate(this.towerBuildBasePrefab);
        //     towerBuildBase.parent = this.node;
        //     towerBuildBase.position = v3(node.position.x, 20, node.position.z);
        //     this.node.getComponent(GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
        //     this.towerBuildBaseList.push(towerBuildBase);
        //     // towerBuildBase.position.y = 10;

        //     promiseList.push(this.showEnterAnim(towerBuildBase, i));
        // }
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
                GameInstance.getInstance().getGameCtlNode().emit("play-audio", 'drop');
                resolve();
            })
            tw.start()
        })
    }

    frozenAllTowerBuildBase() {
        this.node.emit("frozen-tower-build-base");
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
