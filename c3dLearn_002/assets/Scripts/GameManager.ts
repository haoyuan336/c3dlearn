import { _decorator, Component, Node, Prefab, instantiate, CCInteger, systemEvent, SystemEvent, v3, LabelComponent } from 'cc';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

enum BlockType {
    BT_NONE,
    BT_STONE
}
enum GameState {
    GS_INIT,
    GS_PLAYING,
    GS_END
}
@ccclass('GameManager')
export class GameManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({ type: Prefab })
    public cubePrfb: Prefab = null;
    @property({ type: Number })
    public roadLength: Number = 50;
    @property({ type: PlayerController })
    public playerCtl: PlayerController = null;
    @property({ type: Node })
    public startMenu: Node = null;
    @property({type: LabelComponent})
    public stepLabel: LabelComponent =  null;
    private _road: number[] = [];

    private _curState: GameState = GameState.GS_INIT;

    start() {
        // Your initialization goes here.
        this._curState = GameState.GS_INIT;
        this.playerCtl.node.on("JumpEnd",this.onPlayerJumpEnd, this);
    }
    onPlayerJumpEnd(index: number){
        this.checkResult(index);
    }
    init() {
        this.startMenu.active = true;
        this.generateRoad();
        this.playerCtl.setInputActive(false);
        this.playerCtl.node.setPosition(v3());
        this.playerCtl.reset();

    }
    checkResult(moveIndex: number) {
        this.stepLabel.string = moveIndex + '';
        if (moveIndex < this.roadLength) {
            if (this._road[moveIndex] === BlockType.BT_NONE) {
                this.curState = GameState.GS_INIT;
            }
        } else {
            this.curState = GameState.GS_END;
        }
    }
    set curState(value: GameState) {
        switch (value) {
            case GameState.GS_INIT:
                this.init();
                break;
            case GameState.GS_PLAYING:
                this.startMenu.active = false;
                this.stepLabel.string = "0";
                this.generateRoad();
                setTimeout(() => {
                    this.playerCtl.setInputActive(true);
                }, 100);
                break;
            case GameState.GS_END:

                break;
        }
        this._curState = value;
    }

    onStartButtonClick() {
        this.curState = GameState.GS_PLAYING;
    }
    generateRoad() {
        this.node.removeAllChildren();
        this._road = [];
        this._road.push(BlockType.BT_STONE);
        for (let i = 1; i < this.roadLength; i++) {
            if (this._road[i - 1] === BlockType.BT_NONE) {
                this._road.push(BlockType.BT_STONE)
            } else {
                this._road.push(Math.floor(Math.random() * 2));
            }
        }
        for (let i = 0; i < this._road.length; i++) {
            let block: Node = this.spawnBlockBuType(this._road[i]);
            if (block) {
                block.parent = this.node;
                block.setPosition(i, -1.5, 0);
            }
        }
    }
    spawnBlockBuType(type: BlockType) {
        let block = null;
        switch (type) {
            case BlockType.BT_STONE:
                block = instantiate(this.cubePrfb);
                break;
        }
        return block
    }


    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
