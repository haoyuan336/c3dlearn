import { _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, TweenEasing, Vec2 } from 'cc';
import My2dArray from './util/My2Array';
import { GroundTiled } from './GroundTiled/GroundTiled';
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

    @property({ type: Prefab })
    public treePrefab: Prefab = null;

    // public groundTiledNodeListInEdage: Node[] = [];

    public groundTiledEdageIndexList: Vec2[] = [];
    start() {
        for (let i = 0; i < this.mapHeight; i++) {
            let nodeList: Node[] = [];
            for (let j = 0; j < this.mapWidth; j++) {
                let node = instantiate(this.groundMapTiledPrefab);
                node.parent = this.node;
                // node.scale = v3(0, 0, 0);
                let pos = v3((this.mapWidth - 1) * -0.5 * this.tiledSize + j * this.tiledSize,
                    -6, (this.mapHeight - 1) * -0.5 * this.tiledSize + i * this.tiledSize);
                node.setPosition(pos);
                node.active = false;
                nodeList.push(node);
                // if (i === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === this.mapWidth - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (i === this.mapHeight - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }


            }
            this.mapNodeList.pushList(nodeList);
        }

        let v2List: Vec2[] = [];
        for (let j = 0; j < this.mapWidth; j++) {
            v2List.push(v2(j, 0));
        }
        for (let i = 1; i < this.mapHeight; i++) {
            v2List.push(v2(this.mapWidth - 1, i));
        }
        for (let j = this.mapWidth - 2; j >= 0; j--) {
            v2List.push(v2(j, this.mapHeight - 1));
        }
        for (let i = this.mapHeight - 2; i > 0; i--) {
            v2List.push(v2(0, i));
        }

        this.groundTiledEdageIndexList = v2List;
        // console.log("v2 list", v2List);

    }
    public getInEdageIndexList(): Vec2[] {
        // return this.groundTiledNodeListInEdage;
        return this.groundTiledEdageIndexList;
    }

    private showTreeEnterAnim(treeNode: Node) {
        // let v = v2(0,0);
        console.log("show tree enter anima");
        return new Promise((resolve, reject) => {
            treeNode.active = true;
            treeNode.scale = v3(1, 0, 1);
            let tw = new Tween(treeNode);
            tw.to(0.2, { scale: v3(1, 1, 1) }, { easing: "elasticOut" });
            tw.call(() => {
                resolve();
            })
            tw.start();
        })
    }
    public showGroundEnterAnim() {
        return this.showGroundTiledEnterAnim().then(() => {
            let treeCount = 0;
            while (treeCount < 2) {
                //随机2棵树
                let y = [0, this.mapHeight - 1][Math.round(Math.random() * (2 - 1))];
                let x = Math.round(Math.random() * (this.mapWidth - 1));
                let node = this.mapNodeList.getValue(x, y);
                if (node && node.getComponent(GroundTiled)) {
                    let groundTiled = node.getComponent(GroundTiled);
                    if (groundTiled.getIsVoid()) {
                        let treeNode = instantiate(this.treePrefab);
                        treeNode.parent = this.node;
                        groundTiled.setTargetObject(treeNode);
                        treeNode.active = false;
                        treeNode.position = v3(node.position.x, 0, node.position.z);
                        this.showTreeEnterAnim(treeNode);
                        treeCount++;
                    }
                }

            }
        })
    }
    setTowerBuildBaseOnTiled(target: Node, x: number, y: number) {
        let node = this.mapNodeList.getValue(x, y);
        if (node && node.getComponent(GroundTiled)) {
            node.getComponent(GroundTiled).setTargetObject(target);
        }
    }
    private showGroundTiledEnterAnim() {
        let startV = v2(Math.floor(this.mapWidth / 2), Math.floor(this.mapHeight / 2) + 1);
        let rotationIndex = 0;
        let moveDir = v2(0, -1);
        let moveLength = 1;
        let count = 0;
        let index = 0;
        let promiseList = [];
        while (startV.x <= this.mapWidth + 1 && startV.y <= this.mapHeight + 1 && startV.x >= 0 && startV.y >= 0) {
            let moveCount = 0;

            while (moveCount < moveLength) {
                moveCount++;
                // console.log("1 v", startV);
                let node = this.mapNodeList.getValue(startV.x, startV.y);
                if (node) {
                    promiseList.push(this.showEnterAnim(node, index));
                    index++;
                    // this.showEnterAnim(node, index);
                }
                startV.add(moveDir);

            }
            let radias = Math.PI * 2 / 4 * rotationIndex;
            moveDir = v2(0, 1).rotate(radias).normalize();
            moveDir.x = (moveDir.x < 0 && Math.abs(moveDir.x) < 1) ? 0 : Math.floor(moveDir.x);
            moveDir.y = (moveDir.y < 0 && Math.abs(moveDir.y) < 1) ? 0 : Math.floor(moveDir.y);
            if (count == 2) {
                count = 0;
                moveLength++;
            }
            count++;

            rotationIndex++;
        }
        return Promise.all(promiseList);
    }
    showEnterAnim(node: Node, index) {
        return new Promise((resolve, reject) => {
            let tw = new Tween(node);
            let pos = node.position;
            tw.delay(index * 0.03);
            tw.call(() => {
                node.active = true;
            })
            tw.to(0.4, { position: v3(pos.x, 0, pos.z) }, { easing: 'elasticOut' })
            tw.call(() => {
                resolve();
            })
            tw.start();
        });
    }
    getMapNodeList(): My2dArray<Node> {
        return this.mapNodeList;
    }
    getOneRandomVoidTiledNode() {
        //随机获取一个空的地图块的节点 //从边缘

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
