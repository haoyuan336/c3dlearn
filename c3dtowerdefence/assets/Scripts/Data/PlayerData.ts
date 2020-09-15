import { sys } from "cc";
import { GameController } from "../GameController";

export class PlayData {
    public currentSkillCount: number = 2;
    public currentActiveSkillCount: number = 3; //当前激活的道具个数
    public currentGoldCount = 30; //当前的金币个数
    public gameController: GameController = null;
    public currentLevelNum: number = 0;
    // public currentActiveTowerBuildBaseCount = 2; //当前激活的建造塔的位置的个数
    constructor(gameCtl) {
        this.gameController = gameCtl;
        // localStorage.setItem
        let gameTime = this.getLocalData("game-time");
        console.log("game time", gameTime);
        // this.clearLocalData();
        this.setLocalData("gold-count", 9999 + '');
        this.setLocalData('active-tower-build-base-count', '2');
        this.setLocalData("current-level-num", this.currentLevelNum + '');
        if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count'));
            // console.log()
            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数
            this.currentLevelNum = Number(this.getLocalData("current-level-num")); //获取当前的关卡数
            // this.currentActiveTowerBuildBaseCount = Number(this.getLocalData('active-tower-build-base-count')); //获取当前激活的塔的基座的数量
        } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
            // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
        }
    }
    clearLocalData() {
        localStorage.clear();
    }
    getLocalData(key: string) {
        console.log('获取游戏数据', key);
        return localStorage.getItem(key);
    }
    setLocalData(key: string, data: string) {
        localStorage.setItem(key, data);
    }
    updateGoldCount(value: number) {
        this.setLocalData("gold-count", value.toString());
    }
    getCurrentGoldCount(): number {
        return this.currentGoldCount;
    }
    addGoldCount(goldCount: number) {
        this.currentGoldCount += goldCount;
        this.setLocalData('gold-count', this.currentGoldCount + '');
        this.gameController.node.emit("update-gold-label", this.currentGoldCount, goldCount);
    }
    enterNextLevel(){
        this.currentLevelNum ++;
        this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数
    }
}   