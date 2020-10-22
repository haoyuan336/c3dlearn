import { Game, Node } from 'cc';
import { PlayerData } from './Data/PlayerData'
import { AdsController } from './util/AdsController';
export class GameInstance {
    public static gameInstance: GameInstance = null;
    private playerData: PlayerData = null;
    private adsCtl: AdsController = new AdsController();
    public gameCtlNode: Node = null; //游戏控制器节点
    private uiCtlNode: Node = null; //ui 控制节点
    static getInstance() {
        if (this.gameInstance === null) {
            this.gameInstance = new GameInstance();
        }
        return this.gameInstance;
    }
    // setGameConfig(gameConfig: Object){
    //     this.playerData.setGameConfig(gameConfig);
    // }
    setGameCtlNode(gameCtlNode: Node, gameConfig: Object) {
        this.gameCtlNode = gameCtlNode;
        this.playerData = new PlayerData(gameConfig);
    }
    getGameCtlNode(): Node {
        return this.gameCtlNode;
    }
    getPlayerData(): PlayerData {
        return this.playerData;
    }
    setUICtlNode(uiCtlNode: Node) {
        this.uiCtlNode = uiCtlNode;
    }
    getUICtlNode(): Node {
        return this.uiCtlNode;
    }
    playerClickShareButton(winPowerCount: number) {
        return this.adsCtl.shareTo().then(() => {
            // this.playerData.addPowerCount(winPowerCount);
            GameInstance.getInstance().getPlayerData().addPowerCount(winPowerCount);
            this.gameCtlNode.emit('enter-next-level')
        })
    }
    playerClickRetryButton() {
        GameInstance.getInstance().getPlayerData().initRedHeartCount();
        GameInstance.getInstance().getPlayerData().initCurrentGoldCount();
        this.uiCtlNode.emit("update-gold-label", GameInstance.getInstance().getPlayerData().currentGoldCount);

        this.gameCtlNode.emit("retry-game");
    }
    playerClickSaveLifeButton() {

        return new Promise((resolve, reject) => {
            this.adsCtl.watchVideoAds().then((state) => {
                if (state === 'succ') {
                    resolve();
                    this.gameCtlNode.emit("player-click-save-life-button");
                }
            })
        })
    }
    addPowerCount(power: number) {
        this.playerData.addPowerCount(power);
        this.uiCtlNode.emit("refer-current-power-label", this.playerData.currentPowerCount);
    }
    addGoldCount(count: number) {
        this.playerData.addGoldCount(count);
        this.uiCtlNode.emit("update-gold-label", count);
    }
    newGame() {
        // this.currentLevelNum = 0;
        // this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数

        this.playerData.initRedHeartCount();
        this.playerData.initCurrentGoldCount();
        this.uiCtlNode.emit("update-gold-label");
        // this.uiCtlNode.emit('refer-current-wave-level');
        // this.uiCtlNode.emit("update-gold-label");
        // this.setLocalData("gold-count", this.currentGoldCount + '');
        // this.node.emit('update-gold-label', GameInstance.getInstance().getPlayerData().getCurrentGoldCount());
        // this.uic

    }
    enterNextLevel() {

        this.playerData.addOneNextLevel();
        this.playerData.initCurrentGoldCount();
        this.playerData.initRedHeartCount();
        this.uiCtlNode.emit("update-gold-label")
        // this.uiCtlNode.emit('refer-current-wave-level');
        //获取当前关卡的金币个数
        // let goldCount = this.gameConfig['Level_' + this.currentLevelNum].InitGoldCount;
        // this.addGoldCount(goldCount);
        // this.currentGoldCount = goldCount;
        // this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数
    }
    showBannerAds() {
        //展示banner 广告
        console.log("guide is over", this.playerData.guideIsOver);
        if(!this.playerData.guideIsOver){
            return;
        }
        this.adsCtl.showBannerAds();
    }
    hideBannerAds() {
        this.adsCtl.hideBannerAds();
    }
}
