import { _decorator, Component, Node, LabelComponent, loader, SpriteFrame, SpriteComponent } from 'cc';
import { BaseObject } from '../../BaseObject';
import { GameController } from '../../GameController';
const { ccclass, property } = _decorator;

@ccclass('GameResultGoldCell')
export class GameResultGoldCell extends BaseObject {

    @property({ type: Node })
    public enemyIconNode: Node = null;

    @property({ type: Node })
    public enemyCountLabel: Node = null;
    @property({ type: Node })
    public winGoldCountLabel: Node = null;
    start() {
        // Your initialization goes here.
    }
    init(gameController: GameController, data: Object){
        // super.init()
        let gameConfig = gameController.getGameConfig().json;
        let type =  data['key'];
        super.init(gameConfig, gameController, null,null,type);
        let iconStr = this.getIconSprteFrame();
        this.enemyCountLabel.getComponent(LabelComponent).string = data["enemyCount"] + '';
        this.winGoldCountLabel.getComponent(LabelComponent).string = data["winGoldCount"] + '';
        // console.log("icon str", iconStr);
        
        loader.loadRes(iconStr + "/spriteFrame",SpriteFrame, (err, result) => {
            // console.log("err", err)
            // console.log("result", result);
            if (!err){
                this.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
            }
        });
    }
    setData(enemyCount: number, winGoldCount: number, iconStr: string) {
        this.enemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
        this.winGoldCountLabel.getComponent(LabelComponent).string = winGoldCount + '';
        // console.log("icon str", iconStr);
        
        loader.loadRes(iconStr + "/spriteFrame",SpriteFrame, (err, result) => {
            // console.log("err", err)
            // console.log("result", result);
            if (!err){
                this.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
