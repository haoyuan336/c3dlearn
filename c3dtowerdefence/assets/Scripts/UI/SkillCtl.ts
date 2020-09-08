import { _decorator, Component, Node, View, Prefab, CCInteger, isValid, instantiate, v3, UITransformComponent, PhysicsSystem, EventTouch, Rect, Vec2, find, CameraComponent, SpriteFrame, SpriteComponent, ColliderComponent, PhysicsRayResult, view, Tween, v2 } from 'cc';
import { GameController } from '../GameController';
import { TowerBase } from '../Towers/TowerBase';
import { BaseObject } from '../BaseObject';
import { KuangBaoSkill } from './道具/KuangBaoSkill';
const { ccclass, property } = _decorator;

@ccclass('SkillCtl')
export class SkillCtl extends Component {

    @property({ type: Prefab })
    public 狂暴道具Prefab: Prefab = null;

    @property({ type: SpriteFrame })
    public 狂暴道具SpriteFrameRed = null;

    @property({ type: SpriteFrame })
    public 狂暴道具SpriteFrameGray = null;

    @property({ type: Node })
    public skillsNode: Node = null;

    @property({ type: CCInteger })
    public currentSkillCount: number = 0;

    private skillNodeList: Node[] = [];
    private currentTouchNode: Node = null;
    private cameraNodeCom: CameraComponent = null;

    private gameController: GameController = null;
    private skillBgNodeList: Node[] = [];

    // private touchEndResolve = undefined;
    private timeoutResolve = undefined;
    private rayCheckResolve = undefined;

    private targetTower = undefined; //释放技能的目标塔
    onLoad() {

    }
    start() {
        this.gameController = find("GameController").getComponent(GameController);


        this.gameController.node.on("touch-screen-to-3d", (resultList: PhysicsRayResult[]) => {
            //玩家射中了一个 tower
            for (let i = 0; i < resultList.length; i++) {
                let result = resultList[i];
                if (result.collider && result.collider.node) {
                    if (result.collider.node.getComponent(TowerBase)) {
                        // console.log("点中了tower  skill node");
                        if (this.rayCheckResolve) {
                            this.targetTower = result.collider.node;
                            this.rayCheckResolve('check-succ');
                            this.rayCheckResolve = undefined;
                            break;
                        }
                    }
                }
            }


        });

        this.cameraNodeCom = find("Camera").getComponent(CameraComponent);
        //首先绘制， 技能豆的背景
        let activeSkillCount = this.gameController.playerData.currentActiveSkillCount;
        for (let i = 0; i < activeSkillCount; i++) {
            let node = new Node();
            let sprite = node.addComponent(SpriteComponent);
            sprite.spriteFrame = this.狂暴道具SpriteFrameGray;
            node.addComponent(UITransformComponent);
            node.position = v3(i * 110 - 320, 0);
            node.parent = this.skillsNode;
            this.skillBgNodeList.push(node);
        }

        //根据当前，技能豆的个数，初始化，技能都
        let currentSkillCount = this.gameController.playerData.currentSkillCount;
        for (let i = 0; i < currentSkillCount; i++) {
            let node = new Node();
            let sprite = node.addComponent(SpriteComponent);
            sprite.spriteFrame = this.狂暴道具SpriteFrameRed;
            node.addComponent(UITransformComponent);
            node.parent = this.skillsNode;
            node.position = this.skillBgNodeList[i].position;
            this.skillNodeList.push(node);
        }



        // for (let i = 0; i < this.currentSkillCount; i++) {
        //     let node = instantiate(this.狂暴道具Prefab);
        //     node.parent = this.skillsNode;
        //     node.position = v3(i * 100 - 300, 0, 0);
        //     this.skillNodeList.push(node);
        // }
        // console.log("this skill node lsit", this.skillNodeList);
        this.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            console.log("touch start", event);

            console.log("skill node list", this.skillNodeList.length);
            for (let i = 0; i < this.skillNodeList.length; i++) {
                let node = this.skillNodeList[i];
                // let boundingBox = node.ge
                let boundingBox: Rect = node.getComponent(UITransformComponent).getBoundingBoxToWorld();
                let pos = event.getLocation();
                console.log(pos);
                console.log("bound ing box", boundingBox);
                if (boundingBox.contains(pos)) {
                    console.log("找到了点");
                    this.currentTouchNode = node;
                }
            }
            if (this.currentTouchNode) {
                this.startCheckSkillNode();
            }

        });
        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            if (this.currentTouchNode) {
                let pos = event.getLocation();
                let endPos = this.skillsNode.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
                this.currentTouchNode.position = v3(endPos.x, endPos.y, 0);
            }
        });
        this.node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
            if (this.currentTouchNode) {
                //手上有
                this.scheduleOnce(() => {
                    if (this.timeoutResolve) {
                        this.timeoutResolve('timeout');
                        this.timeoutResolve = undefined;
                    }
                }, 0.1);
            }
        })
    }
    startCheckSkillNode() {
        let promiseList = [
            new Promise((resolve, reject) => {
                this.rayCheckResolve = resolve;
            }),
            new Promise((resolve, reject) => {
                this.timeoutResolve = resolve;
            })
        ]

        Promise.race(promiseList).then((type) => {
            //触摸结束 
            if (type === 'timeout') {
                for (let i = 0; i < this.skillNodeList.length; i++) {
                    let node = this.skillNodeList[i];
                    if (node.uuid === this.currentTouchNode.uuid) {
                        this.currentTouchNode.position = this.skillBgNodeList[i].position;
                        this.currentTouchNode = undefined;
                        break;
                    }
                }
            } else {
                console.log("释放技能成功");
                if (isValid(this.targetTower)) {
                    console.log("给目标塔发送消息，释放技能");

                    //如果存在需要释放技能的塔，那么需要让此塔来释放技能
                    // let objectType = this.currentTouchNode.getComponent(KuangBaoSkill).objectType;
                    // console.log("object type", objectType);
                    this.targetTower.getComponent(TowerBase).releaseSkill();
                    for (let i = 0; i < this.skillNodeList.length; i++) {
                        let skillNode = this.skillNodeList[i];
                        if (skillNode.uuid === this.currentTouchNode.uuid) {
                            this.skillNodeList.splice(i, 1);
                            break;
                        }
                    }


                    this.currentTouchNode.destroy();
                    this.currentTouchNode = undefined;

                }
            }

        })
    }
    showEnterAnim() {
        return new Promise((resolve, reject) => {
            let v = view.getVisibleSize();
            let height = v.height;
            console.log("height", height);
            let tw = new Tween(this.skillsNode);
            tw.to(0.2, {
                position: v3(0, height * -0.5 + 74, 0)
            });
            tw.call(() => {
                resolve();
            })
            tw.start();
        })

    }
}
