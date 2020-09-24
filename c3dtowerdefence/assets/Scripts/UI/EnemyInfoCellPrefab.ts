import { _decorator, Component, Node, Prefab, Game, loader, SpriteFrame, SpriteComponent } from 'cc';
import { BaseObject } from '../BaseObject';
import { GameController } from '../GameController';
const { ccclass, property } = _decorator;

@ccclass('EnemyInfoCellPrefab')
export class EnemyInfoCellPrefab extends BaseObject {
    @property({ type: Node })
    public enemyIconNode: Node = null;
    public init(gameController: GameController, data: Object) {
        let enemyType = data["enemyType"];
        console.log("enemy type", enemyType);
        let gameConfig = gameController.getGameConfig().json;
        // super.objectType = enemyType;
        // console.log("super object type", super.objectType);
        super.init(gameConfig, gameController, null, null, enemyType);
        this.gameController.node.on("refer-enemy-info-cell", ()=>{
            this.referUI();
        })
    }
    public referUI() {
        //刷新UI 
        let isActive = this.getEnemyIsActive();
        console.log("is active", isActive);
        if (isActive) {
            let spriteFrameIconStr = this.getIconSprteFrame();
            //如果是激活了
            console.log("sprite frame icon str", spriteFrameIconStr);
            loader.loadRes(spriteFrameIconStr + "/spriteFrame", SpriteFrame, (err, result) => {
                if (!err) {
                    this.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
                }
            });

        }

    }
    // public init(gameConfig: Object, gameController: GameController){

    // }
    // public init() {
    //     // super.init(gameConfig, gameController);



    // }
    // public init(gameConfig: Object, gameController: GameController, objectType?: string){
    //     super.init(gameConfig, gameController);
    //     // super.objectType = objectType;
    //     // console.log("object type", super.objectType);
    //     // let gameConfig = gameController.getGameConfig().json;
    //     // super.init(gameConfig, gameController);
    //     // //获取是否激活了

    //     // let isActive = this.getEnemyIsActive();
    //     // if (isActive){

    //     // }
    // }
}
