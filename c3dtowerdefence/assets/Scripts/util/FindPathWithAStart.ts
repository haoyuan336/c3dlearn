import My2dArray from "./My2Array";
class CellNode {
    public x: number = 0;
    public y: number = 0;
    public isHaveObs: boolean = false; //是否存在障碍物 
    public gValue: number = 0;
    public hValue: number = 0;
    public parent: CellNode = null; //父节点

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    setParent(targetNode: CellNode) {
        this.parent = targetNode;
    }
    getFValue(): number {
        return this.gValue + this.hValue;
    }
    setObs(value: boolean) {
        //设置障碍物
        this.isHaveObs = value;
    }
}
export class FindPathWithAStart<T> {
    // let openList: 
    // start () {
    // }

    public openList: Array<CellNode> = [];
    public closeList: Array<CellNode> = [];
    public mapNodeList: My2dArray<CellNode> = new My2dArray();
    public statrNode: CellNode = null;
    public endNode: CellNode = null;
    constructor(targetList: My2dArray<T>, startPos: number[], endPos: number[]) {
        let heightLength = targetList.getHeightLength();
        let widthLength = targetList.getWidthLength();
        for (let i = 0; i < heightLength; i++) {
            let list = new Array<CellNode>();
            for (let j = 0; j < widthLength; j++) {
                // list.push
                list.push(new CellNode(j, i));
            }
            this.mapNodeList.pushList(list);
        }
        this.statrNode = this.mapNodeList.getValue(startPos[0], startPos[1]);
        this.endNode = this.mapNodeList.getValue(endPos[0], endPos[1]);
        // console.log('map node list', this.mapNodeList);
    }
    findPathList() {
        //返回路径点
        //首先将起点加入到openlist里面
        let cellNodeList: CellNode[] = [];
        this.openList.push(this.statrNode);
        while (this.openList.length > 0) {
            //如果openlist 大于0 那么继续循环
            //第一步。取出来，openlist里面。 fvalue值最小的节点
            let minFValueIndex = this.findMinFvalueNode(this.openList);
            let minFValueNode = this.openList.splice(minFValueIndex, 1)[0];
            // console.log("min fvalue node", minFValueNode);
            if (minFValueNode.x === this.endNode.x && minFValueNode.y === this.endNode.y) {
                // console.log("找到了路径点");
                let nextNode = minFValueNode.parent;
                cellNodeList.push(minFValueNode);
                while (!((nextNode.x === this.statrNode.x) && (nextNode.y === this.statrNode.y))) {
                    cellNodeList.push(nextNode);
                    nextNode = nextNode.parent;
                }
                break;
            }
            this.closeList.push(minFValueNode);
            let nearbyNodeList = this.findNearbyNodeList(minFValueNode, this.mapNodeList);
            //附近点的节点列表
            //遍历此附近节点
            for (let i = 0; i < nearbyNodeList.length; i++) {
                let node = nearbyNodeList[i];
                if (this.checkIsInList(node, this.closeList)) {
                    continue;
                }
                if (this.checkIsInList(node, this.openList)) {
                    //检查节点是否在openlist 里面。如果在需要判断是否更新parentNode
                    if (node.parent.gValue < minFValueNode.gValue) {
                        node.setParent(minFValueNode);
                        node.gValue = minFValueNode.gValue + this.getDistance(node.parent, node);
                        node.hValue = this.getDistance(node, this.endNode);
                    }
                } else {
                    //如果不在 ，那么需要给此点设置新的父节点，然后加入到openList里面 并且计算fvalue
                    node.setParent(minFValueNode);
                    node.gValue = minFValueNode.gValue + this.getDistance(node.parent, node);
                    node.hValue = this.getDistance(node, this.endNode);
                    this.openList.push(node);
                }
            }
        }
        cellNodeList = cellNodeList.reverse(); //倒序整理列表
        let list = [];
        for (let i = 0; i < cellNodeList.length; i++) {
            list.push([cellNodeList[i].x, cellNodeList[i].y]);
        }
        return list;
    }
    private getDistance(p1: CellNode, p2: CellNode) {
        return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
    }
    private findNearbyNodeList(targetNode: CellNode, targetList: My2dArray<CellNode>): CellNode[] {

        let dirList = [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
        ]
        let list: CellNode[] = [];
        for (let i = 0; i < dirList.length; i++) {
            let dir = dirList[i];
            let endPosX = targetNode.x + dir[0];
            let endPosY = targetNode.y + dir[1];
            let cellNode = targetList.getValue(endPosX, endPosY);
            if (cellNode && !cellNode.isHaveObs) {
                list.push(cellNode)
            }
        }
        return list;
    }
    private findMinFvalueNode(list: Array<CellNode>): number {
        let mValue = Number.MAX_VALUE;
        let index = null;
        for (let i = 0; i < list.length; i++) {
            let fValue = list[i].getFValue();
            if (fValue < mValue) {
                mValue = fValue;
                index = i;
            }
        }
        return index;
    }
    private checkIsInList(targetNode: CellNode, targetList: CellNode[]) {
        for (let i = 0; i < targetList.length; i++) {
            let node = targetList[i];
            if (node.x === targetNode.x && node.y === targetNode.y) {
                return true;
            }
        }
        return false;
    }
    public updateObsData(dataList) {
        //更新障碍物数据
        for (let i = 0; i < dataList.length; i++) {
            let data = dataList[i];
            let cellNode = this.mapNodeList.getValue(data[0], data[1]);
            // cellNode.setParent
            cellNode.setObs(true);
        }
    }
}
