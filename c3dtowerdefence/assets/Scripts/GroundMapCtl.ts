import { _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, TweenEasing } from 'cc';
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

    @property({ type: Prefab })
    public treePrefab: Prefab = null;

    private treeNodeList: Node[] = [];
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
            }
            this.mapNodeList.pushList(nodeList);
        }
        for (let i = 0; i < 1; i++) {
            let treeNode = instantiate(this.treePrefab);
            treeNode.parent = this.node;
            treeNode.active = false;
            this.treeNodeList.push(treeNode);
        }
    }
    // startGame() {
    //     //开始游戏



    // }
    public showTreeEnterAnim() {
        // let v = v2(0,0);

        return new Promise((resolve, reject) => {
            let x = Math.round(Math.random() * 2) + 1;
            let y = Math.round(Math.random() * 2) + 1;
            let groundTildNode = this.mapNodeList.getValue(x, y);
            let treeNode = this.treeNodeList[0];
            treeNode.setPosition(v3(groundTildNode.position.x, 0, groundTildNode.position.z));
            treeNode.active = true;
            treeNode.scale = v3(1, 0, 1);




            let tw = new Tween(treeNode);
            tw.to(0.2, { scale: v3(1, 1, 1) },{easing: "elasticOut"});
            tw.call(() => {
                resolve();
            })
            tw.start();
        })


    }
    public showGroundEnterAnim() {
        return this.showGroundTiledEnterAnim().then(() => {
            return this.showTreeEnterAnim();
        })
    }
    private showGroundTiledEnterAnim() {
        let startV = v2(5, 4);
        let rotationIndex = 0;
        let moveDir = v2(0, -1);
        let moveLength = 1;
        let count = 0;
        let index = 0;
        let promiseList = [];
        while (startV.x < 10 && startV.y < 10 && startV.x > 0 && startV.y > 0) {
            let moveCount = 0;
            let radias = Math.PI * 2 / 4 * rotationIndex;
            moveDir = v2(0, 1).rotate(radias).normalize();
            moveDir.x = (moveDir.x < 0 && Math.abs(moveDir.x) < 1) ? 0 : Math.floor(moveDir.x);
            moveDir.y = (moveDir.y < 0 && Math.abs(moveDir.y) < 1) ? 0 : Math.floor(moveDir.y);
            while (moveCount < moveLength) {
                moveCount++;
                // console.log("1 v", startV);
                let node = this.mapNodeList.getValue(startV.x, startV.y);
                promiseList.push(this.showEnterAnim(node, index));
                // this.showEnterAnim(node, index);
                index++;
                startV.add(moveDir);
            }
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

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
