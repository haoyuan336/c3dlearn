import { _decorator, Component, Node, SpriteFrame, Prefab, instantiate, v3, v2, UITransformComponent, SpriteComponent, Color, EventTouch, isValid, size, EditBoxComponent, path } from 'cc';
import My2dArray from '../util/My2Array';
const { ccclass, property } = _decorator;
class CellNode {
    public x: number = 0;
    public y: number = 0;
    public node: Node = null;
    public parentNode: CellNode = null;
    public fValue: number = 0;
    public gValue: number = 0;
    public hValue: number = 0;
    constructor(x: number, y: number, node: Node) {
        this.x = x;
        this.y = y;
        this.node = node;
    }
    setParentNode(value: CellNode) {
        this.parentNode = value;
    }
}
@ccclass('AStartFindPath')
export class AStartFindPath extends Component {

    @property({ type: Node })
    public pointNode: Node = null;

    public my2dArray: My2dArray<CellNode> = null;

    // @property({ type: Color })
    public obsColor: Color = Color.RED;

    // @property({ type: Color })
    public startColor: Color = Color.BLUE;

    // @property({ type: Color })
    public endColor: Color = Color.GREEN;

    public currentTouchNode: CellNode = null;
    private openList: CellNode[] = [];
    private closeList: CellNode[] = [];
    private startObj: CellNode = null;
    private size: number = 30;
    private currentPathList: CellNode[] = [];
    private checkPointList: CellNode[] = [];
    start() {
        // Your initialization goes here.
        // for (let i = 0 ; i < ){

        // }
        let size = this.size;
        let my2dArray = new My2dArray<CellNode>();
        this.my2dArray = my2dArray;
        for (let i = 0; i < size; i++) {
            let list: CellNode[] = [];
            for (let j = 0; j < size; j++) {
                let node = instantiate(this.pointNode);
                node.active = true;
                node.parent = this.node;
                node.position = v3((size - 1) * -0.5 * 22 + j * 22, (size - 1) * -0.5 * 22 + i * 22, 0);
                list.push(new CellNode(j, i, node));
                // node._x = j;
                // node._y = i;
            }
            my2dArray.pushList(list);
        }

        for (let i = 0; i < 30; i++) {
            this.randomObs(size);
        }
        let startObj: CellNode = this.getRandomPoint(size);
        startObj.node.getComponent(SpriteComponent).color = this.startColor;
        this.startObj = startObj;


        this.node.on(Node.EventType.TOUCH_START, (even: EventTouch) => {
            if (isValid(this.currentTouchNode)) {
                this.currentTouchNode.node.getComponent(SpriteComponent).color = Color.WHITE;
            }
            let pos = even.getUILocation();

            console.log("touch pos", pos);
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    let node: Node = this.my2dArray.getValue(j, i).node;
                    let boundingBox = node.getComponent(UITransformComponent).getBoundingBoxToWorld();
                    // pos.x -= node.width;
                    // boundingBox.x -= node.width;
                    if (boundingBox.contains(pos)) {
                        // console.log(" j, i,", j, i);
                        node.getComponent(SpriteComponent).color = this.endColor;
                        this.currentTouchNode = this.my2dArray.getValue(j, i);
                    }
                }
            }
            if (this.currentTouchNode) {
                this.openList = [];
                this.closeList = [];
                this.processFindPath();
            }
        });
    }
    processFValue(point: CellNode, parentPoint?: CellNode) {

        // let gValue = point.parentNode.gValue + this.getDistance();
        let gValue = 0;
        let currentP = null;
        if (parentPoint) {
            // gValue = parentPoint.gValue + 1;
            currentP = parentPoint;
        }else{
            currentP = point.parentNode;
        }
        gValue = point.parentNode.gValue + this.getDistance(point, currentP);

        // let hvalue = Math.abs(point.x - this.currentTouchNode.x) + Math.abs(point.y - this.currentTouchNode.y);
        point.gValue = gValue;
        point.hValue = this.getDistance(point, this.currentTouchNode);
        return point.gValue + point.hValue;
    }
    getDistance(p1: CellNode, p2: CellNode) {
        let sql = Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)
        return Math.sqrt(sql);
    }

    getNearPointObj(point: CellNode): CellNode[] {
        let x = point.x;
        let y = point.y;
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
        let nearList = [];
        for (let i = 0; i < dirList.length; i++) {
            let endX = x + dirList[i][0];
            let endY = y + dirList[i][1];
            let obj = this.my2dArray.getValue(endX, endY);
            if (obj && !obj.node.getComponent(SpriteComponent).color.equals(this.obsColor)) {
                //如果取出来的节点，并且节点上并不是障碍物 ，那么
                // obj.setParentNode(point);
                // obj.fValue = this.processFValue(obj);
                nearList.push(obj);
            }
        }
        return nearList;
    }
    processFindPath() {
        //运行寻路算法
        this.openList.push(this.startObj);

        while (this.openList.length > 0) {
            // console.log("循环");
            let currentObj = this.getFvalueMinNode();
            console.log("current obj", currentObj);
            if (currentObj.x === this.currentTouchNode.x && currentObj.y === this.currentTouchNode.y) {
                console.log("找到了终点");
                if (this.checkPointList.length > 0){
                    for (let i = 0 ; i < this.checkPointList.length ; i ++){
                        let node = this.checkPointList[i].node;
                        node.getComponent(SpriteComponent).color = Color.WHITE;
                    }
                }

                if (this.currentPathList.length > 0) {
                    for (let i = 0; i < this.currentPathList.length; i++) {
                        let node = this.currentPathList[i].node;
                        node.getComponent(SpriteComponent).color = Color.WHITE;
                    }
                }
                let pathList = [];
                while (!(currentObj.x === this.startObj.x && currentObj.y === this.startObj.y)) {
                    pathList.push(currentObj.parentNode);
                    currentObj = currentObj.parentNode;
                    currentObj.node.getComponent(SpriteComponent).color = Color.BLACK;

                }
                pathList.splice(pathList.length - 1, 1);
                this.currentPathList = pathList;
                // console.log("path list", pathList);
                return;
            }
            this.closeList.push(currentObj);
            //取处这个点周围的点
            let nearList = this.getNearPointObj(currentObj);
            for (let i = 0; i < nearList.length; i++) {
                let obj = nearList[i];
                if (this.checkIsInCloseList(obj)) {
                    //如果此点已经在关闭列表里面了， 那么直接跳过
                    continue;
                }
                if (this.checkisInOpenList(obj)) {
                    //如果在列表里面
                    //计算现在的f值 与之前的f值的大小，如果更小，那么更新父节点，跟f值
                    let newFValue = this.processFValue(obj, currentObj);
                    if (newFValue < obj.fValue) {
                        obj.setParentNode(currentObj);
                        obj.fValue = this.processFValue(obj);
                    }

                } else {
                    //没在open列表里面 那么
                    obj.setParentNode(currentObj);
                    obj.fValue = this.processFValue(obj);
                    obj.node.getComponent(SpriteComponent).color = Color.GRAY;
                    this.checkPointList.push(obj);
                    this.openList.push(obj);
                }
            }

            // for (let i = 0 ; i < nearList.length ; i ++){
            //     let nearNode = nearList[i];
            //     let isInCloseList = this.checkIsInCloseList(nearNode);
            //     if (!isInCloseList){
            //         this.openList.push(nearNode);
            //     }
            // }
            // console.log("this open list", this.openList);
            // return;
        }
    }
    checkisInOpenList(point: CellNode) {
        for (let i = 0; i < this.openList.length; i++) {
            let node = this.openList[i];
            if (node.x === point.x && node.y === point.y) {
                return true;
            }
        }
        return false;
    }
    checkIsInCloseList(point: CellNode) {
        for (let i = 0; i < this.closeList.length; i++) {
            let node = this.closeList[i];
            if (node.x === point.x && node.y === point.y) {
                return true;
            }
        }
        return false;
    }
    getFvalueMinNode() {
        //取处f值最小的节点
        let minValue = Number.MAX_VALUE;
        // let targetObj = null;
        let index = 0;
        for (let i = 0; i < this.openList.length; i++) {
            let obj = this.openList[i];
            if (obj.fValue < minValue) {
                minValue = obj.fValue;
                index = i;
            }
        }

        return this.openList.splice(index, 1)[0];
    }
    getRandomPoint(size) {
        let pos = v2(
            Math.round(Math.random() * (size - 1)),
            Math.round(Math.random() * (size - 1))
        )
        return this.my2dArray.getValue(pos.x, pos.y);
    }
    randomObs(size) {
        //随机一个障碍物
        let pos = {
            x: Math.round(Math.random() * size - 10) + 5,
            y: Math.round(Math.random() * size - 10) + 5
        }
        let dir = v2(0, 1);
        let angle = [Math.PI * 2 * 45 / 360, Math.PI * 0.5, Math.PI]
        dir.rotate(angle[Math.round(Math.random() * (angle.length - 1))]).normalize();
        console.log("dir", dir);
        dir.x = Math.round(Math.abs(dir.x)) * Math.abs(dir.x) / dir.x;
        dir.y = Math.round(Math.abs(dir.y)) * Math.abs(dir.y) / dir.y;
        console.log("dir", dir);

        for (let i = 0; i < 4; i++) {
            let addPos = v2(dir).multiplyScalar(i);
            // console.log('add pos', addPos);
            let endPos = v2(pos.x, pos.y).add(addPos);
            // console.log('endPos ', endPos);
            let obj = this.my2dArray.getValue(endPos.x, endPos.y);
            if (obj) {
                obj.node.getComponent(SpriteComponent).color = Color.RED;
            }
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
