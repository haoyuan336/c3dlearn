import { sys } from "cc";
import { GameController } from "../GameController";

export class PlayData {
    public currentSkillCount: number = 2;
    public currentActiveSkillCount: number = 3; //当前激活的道具个数
    public currentGoldCount = 30; //当前的金币个数
    public gameController: GameController = null;
    constructor(gameCtl) {
        this.gameController = gameCtl;
        // localStorage.setItem
        let gameTime = this.getLocalData("game-time");
        console.log("game time", gameTime);
        // this.clearLocalData();
        this.setLocalData("gold-count", this.currentGoldCount + '');
        if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count'));
            // console.log()
            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数
        } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
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
}   