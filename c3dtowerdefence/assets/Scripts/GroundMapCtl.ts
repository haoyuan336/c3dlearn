import { _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, TweenEasing, Vec2 } from 'cc';
import My2dArray from './util/My2Array';
import { GroundTiled } from './GroundTiled/GroundTiled';
const { ccclass, property } = _decorator;
// export class CellNode {
//     public x: number = 0;
//     public y: number = 0;
//     public node: Node = null;
//     public onTargetNode: Node = null; //在其上的物体节点
//     public gValue: number = 0; //g值， 当前节点距离起点的距离
//     public hValue: number = 0; //h值，当前节点距离终点的预估距离
//     public parentNode: CellNode = null; //父节点
//     constructor(x: number, y: number, node: Node) {
//         this.x = x;
//         this.y = y;
//         this.node = node;
//     }
//     setParentNode(parentNode: CellNode) {
//         this.parentNode = parentNode;
//     }
//     processGvalue(parentNode: CellNode) {
//         let gValue = parentNode.gValue + Math.sqrt(2);
//         return gValue;
//     }
//     processHValue(endPos: CellNode) {
//         let hValue = this.getDistance(this, endPos);
//         return hValue;
//     }
//     getDistance(p1: CellNode, p2: CellNode) {
//         //获取两点之间的距离
//         return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
//     }
//     setOnTargetNode(targetNode: Node) {
//         this.onTargetNode = targetNode;
//     }
//     getFValue(): number {
//         return this.gValue + this.hValue;
//     }



// }
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
    // private mapNodeListOnSpace: [] = [];
    private obsNodeList: Vec2[] = []; //获取障碍物列表
    @property({ type: Prefab })
    public treePrefab: Prefab = null;

    // public groundTiledNodeListInEdage: Node[] = [];

    public groundTiledEdageIndexList: Vec2[] = [];



    // private openList: CellNode[] = []; //开源列表
    // private closeList: CellNode[] = []; //关闭列表
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
        // this.mapNodeListOnSpace = this.mapNodeList.convertOneSpaceList(); //将二维数组 转换成一维
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
                let cellNode = this.mapNodeList.getValue(x, y);
                if (cellNode) {
                    this.obsNodeList.push(v2(x, y));

                    let node = cellNode;
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


            }
        })
    }
    setTowerBuildBaseOnTiled(target: Node, x: number, y: number) {
        let cellNode = this.mapNodeList.getValue(x, y);
        if (cellNode) {
            this.obsNodeList.push(v2(x, y)); //将障碍物加入到障碍物列表里面
            // cellNode.setOnTargetNode(target);
            let node = cellNode;
            if (node && node.getComponent(GroundTiled)) {
                node.getComponent(GroundTiled).setTargetObject(target);

            }
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
                let cellNode = this.mapNodeList.getValue(startV.x, startV.y);
                if (cellNode) {
                    let node = cellNode;
                    if (node) {
                        promiseList.push(this.showEnterAnim(node, index));
                        index++;
                        // this.showEnterAnim(node, index);
                    }
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
    // getOneRandomVoidTiledNode() {
    //     //随机获取一个空的地图块的节点 //从边缘

    // }
    // getPathList(startPos: Vec2, endPos: Vec2): Vec2[] {
    //     let endNode = this.mapNodeList.getValue(endPos.x, endPos.y);

    //     //第一步。先将七点加入到open list 里面
    //     let startNode = this.mapNodeList.getValue(startPos.x, startPos.y);

    //     this.openList.push(startNode);
    //     let list: CellNode[] = [];
    //     while (this.openList.length > 0) {
    //         let minFValueNodeIndex = this.findFValueMinNodeIndex(this.openList);
    //         //第一步。，从openlist里面找到f值最小的节点 
    //         //并且将此点从openList里面删掉 ，并且加入到close 列表里面
    //         let minFValueNode = this.openList.splice(minFValueNodeIndex, 1)[0];
    //         if (minFValueNode.x === endPos.x && minFValueNode.y === endPos.y) {
    //             // console.log("找到终点了");
    //             //找到终点之后 开始构造列表
    //             // list.push(minFValueNode.parentNode);
    //             let currentNode = minFValueNode;
    //             while (!(currentNode.x === startPos.x && currentNode.y === startPos.y)) {
    //                 list.push(currentNode.parentNode);
    //                 currentNode = currentNode.parentNode;
    //             }
    //             break;
    //         }
    //         this.closeList.push(minFValueNode);
    //         let nearbyNodeList = this.findNearbyNodeList(minFValueNode);
    //         for (let i = 0; i < nearbyNodeList.length; i++) {
    //             let cellNode = nearbyNodeList[i];
    //             if (this.checkCellNodeIsInList(cellNode, this.closeList)) {
    //                 continue;
    //             }
    //             if (this.checkCellNodeIsInList(cellNode, this.openList)) {
    //                 //在open 列表里面 ，那么需要重新计算一下，此点设置新的父节点的 fvalue 与老的fvalue值的大小
    //                 let newGValue = cellNode.processGvalue(minFValueNode);
    //                 if (newGValue < cellNode.gValue) {
    //                     cellNode.setParentNode(minFValueNode);
    //                     cellNode.gValue = cellNode.processGvalue(minFValueNode);
    //                     cellNode.hValue = cellNode.processHValue(endNode);
    //                 }
    //             } else {
    //                 //设置父节点，并且计算fValeu
    //                 // cellNode.setP
    //                 cellNode.setParentNode(minFValueNode);
    //                 cellNode.gValue = cellNode.processGvalue(cellNode.parentNode);
    //                 cellNode.hValue = cellNode.processHValue(endNode);
    //                 this.openList.push(cellNode);
    //             }

    //         }
    //     }
    //     list = list.reverse();
    //     let posList = [];
    //     for (let i = 0; i < list.length; i++) {
    //         posList.push(list[i].node.position)
    //     }
    //     return posList;
    // }
    // checkCellNodeIsInList(targetCellNode: CellNode, nodeList: CellNode[]): boolean {
    //     for (let i = 0; i < nodeList.length; i++) {
    //         let node = nodeList[i];
    //         if (node.x === targetCellNode.x && node.y === targetCellNode.y) {
    //             //在此列表里面找到了，目标节点
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // findFValueMinNodeIndex(list: CellNode[]): number {
    //     //找到f值最小的点
    //     let minValue = Number.MAX_VALUE;
    //     let index = null;
    //     for (let i = 0; i < list.length; i++) {
    //         let node = list[i];
    //         if (node.getFValue() < minValue) {
    //             minValue = node.getFValue();
    //             index = i;
    //         }
    //     }

    //     return index;

    // }
    // findNearbyNodeList(currentCellNode: CellNode): CellNode[] {
    //     //找到附近点的 列表
    //     let dirList = [
    //         [0, 1],
    //         [1, 1],
    //         [1, 0],
    //         [1, -1],
    //         [0, -1],
    //         [-1, -1],
    //         [-1, 0],
    //         [-1, 1]
    //     ]
    //     let list = [];
    //     for (let i = 0; i < dirList.length; i++) {
    //         let dir = dirList[i];
    //         let x = currentCellNode.x + dir[0];
    //         let y = currentCellNode.y + dir[1];
    //         let cellNode = this.mapNodeList.getValue(x, y);
    //         if (cellNode && !cellNode.onTargetNode) {
    //             //此点存在，并且此点，上没有其他的障碍物
    //             list.push(cellNode);
    //         }
    //     }

    //     return list;
    // }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    getObsPosList(){
        //获取障碍物列表
        return this.obsNodeList;
    }
}
