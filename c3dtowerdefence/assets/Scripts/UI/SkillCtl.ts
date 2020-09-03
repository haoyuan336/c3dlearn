import { _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, UITransformComponent, EventTouch, Rect } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SkillCtl')
export class SkillCtl extends Component {

    @property({ type: Prefab })
    public 狂暴道具Prefab: Prefab = null;


    @property({ type: Node })
    public skillsNode: Node = null;

    @property({ type: CCInteger })
    public currentSkillCount: number = 0;
    
    private skillNodeList: Node[] = [];
    private currentTouchNode: Node = null;
    start() {

        console.log("start");
        for (let i = 0; i < this.currentSkillCount; i++) {
            let node = instantiate(this.狂暴道具Prefab);
            node.parent = this.skillsNode;
            node.position = v3(i * 100 - 300, 0, 0);
            this.skillNodeList.push(node);
        }
        console.log("this skill node lsit", this.skillNodeList);
        this.node.on(Node.EventType.TOUCH_START, (event: EventTouch)=>{
            console.log("touch start", event);
            console.log("skill node list", this.skillNodeList.length);
            for (let i = 0 ; i < this.skillNodeList.length ; i ++){
                let node = this.skillNodeList[i];
                // let boundingBox = node.ge
                let boundingBox:  Rect = node.getComponent(UITransformComponent).getBoundingBoxToWorld();
                let pos = event.getLocation();
                console.log(pos);
                console.log("bound ing box", boundingBox);
                if (boundingBox.contains(pos)){
                    console.log("找到了点");
                    this.currentTouchNode = node;
                }
            }
        });
        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch)=>{
            if (this.currentTouchNode){
                let pos = event.getLocation();
                let endPos = this.skillsNode.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
                this.currentTouchNode.position =  v3(endPos.x, endPos.y, 0);
            }
        })
    }
}
