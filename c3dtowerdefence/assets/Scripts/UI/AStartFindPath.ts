import { _decorator, Component, Node, SpriteFrame, Prefab, instantiate, v3, v2, UITransformComponent, SpriteComponent, Color, EventTouch, isValid } from 'cc';
import My2dArray from '../util/My2Array';
const { ccclass, property } = _decorator;

@ccclass('AStartFindPath')
export class AStartFindPath extends Component {

    @property({ type: Node })
    public pointNode: Node = null;

    public my2dArray: My2dArray<Node> = null;

    // @property({ type: Color })
    public obsColor: Color = Color.RED;

    // @property({ type: Color })
    public startColor: Color = Color.BLUE;

    // @property({ type: Color })
    public endColor: Color = Color.GREEN;

    public currentTouchNode: Node = null;
    start() {
        // Your initialization goes here.
        // for (let i = 0 ; i < ){

        // }
        let size = 30;
        let my2dArray = new My2dArray<Node>();
        this.my2dArray = my2dArray;
        for (let i = 0; i < size; i++) {
            let list = [];
            for (let j = 0; j < size; j++) {
                let node = instantiate(this.pointNode);
                node.active = true;
                node.parent = this.node;
                node.position = v3((size - 1) * -0.5 * 22 + j * 22, (size - 1) * -0.5 * 22 + i * 22, 0);
                list.push(node);
            }
            my2dArray.pushList(list);
        }

        for (let i = 0; i < 10; i++) {
            this.randomObs(size);
        }
        let startNode: Node = this.getRandomPoint(size);
        startNode.getComponent(SpriteComponent).color = this.startColor;



        this.node.on(Node.EventType.TOUCH_START, (even: EventTouch) => {
            if (isValid(this.currentTouchNode)) {
                this.currentTouchNode.getComponent(SpriteComponent).color = Color.WHITE;
            }
            let pos = even.getLocation();

            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    let node: Node = this.my2dArray.getValue(j, i);
                    let boundingBox = node.getComponent(UITransformComponent).getBoundingBoxToWorld();
                    // pos.x -= node.width;
                    // boundingBox.x -= node.width;
                    if (boundingBox.contains(pos)) {
                        // console.log(" j, i,", j, i);
                        node.getComponent(SpriteComponent).color = this.endColor;
                        this.currentTouchNode = node;
                    }
                }
            }
        });
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
            let node = this.my2dArray.getValue(endPos.x, endPos.y);
            if (node) {
                node.getComponent(SpriteComponent).color = Color.RED;
            }
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
