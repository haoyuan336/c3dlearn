import { _decorator, Component, Node, JsonAsset, SpriteComponent, LabelComponent, loader, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DialogCtl')
export class DialogCtl extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({ type: JsonAsset })
    public dialogConfigJsonAsset: JsonAsset = null;


    @property({ type: Node })
    public dialogBgNode: Node = null;

    @property({ type: Node })
    public dialogLayer: Node = null; //对话节点

    @property({ type: Node })
    public dialogLabel: Node = null; //对话label

    @property({ type: Node })
    public dialogPicNode: Node = null; //对话图片节点

    private currentLevelDialogData: JSON[] = [];//当前的对话数据
    private currentDialogIndex: number = 0;// 当前的对话index

    private dialogOverCb: Function = null;
    start() {
        // Your initialization goes here.
        this.node.on("show-start-dialog", (currentLevel, cb) => {
            //播放开始的时候的 对话
            console.log("展示开始对话的内容", currentLevel);
            this.dialogBgNode.active = true;
            this.dialogLayer.active = true;

            //取出当前的对话数据
            this.currentLevelDialogData = this.dialogConfigJsonAsset.json['Level_' + currentLevel]['StartDialogList'];
            this.currentDialogIndex = 0;
            this.showOneDialog();

            this.dialogOverCb = () => {
                this.closeDialogLayer();
                cb()
            };
        });
        this.node.on("show-end-dialog", (currentLevel, cb) => {
            //播放结束的时候的对话
            console.log("展示结束的时候的对话", currentLevel);
            this.dialogOverCb = cb;
        })
    }
    closeDialogLayer() {
        this.dialogBgNode.active = false;
        this.dialogLayer.active = false;
    }
    showOneDialog() {
        if (this.currentDialogIndex >= this.currentLevelDialogData.length) {

            if (this.dialogOverCb) {
                this.dialogOverCb();
            }

            return;
        }
        //展示一条dialog
        let dialogData = this.currentLevelDialogData[this.currentDialogIndex];
        let picStr = dialogData['Pic'];
        let text = dialogData['Text'];
        this.dialogLabel.getComponent(LabelComponent).string = text;
        loader.loadRes(picStr + '/spriteFrame', SpriteFrame, (err, result) => {
            if (!err) {
                this.dialogPicNode.getComponent(SpriteComponent).spriteFrame = result;
            }
        });
        this.currentDialogIndex++;
    }
    onButtonClick(event, customData) {
        switch (customData) {
            case 'next-button':
                console.log("下一步");

                this.showOneDialog();
                break;
            default:
                break;
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
