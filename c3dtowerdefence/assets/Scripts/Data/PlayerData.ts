import { sys } from "cc";
import { GameController } from "../GameController";

export class PlayData {
    public currentSkillCount: number = 2;
    public currentActiveSkillCount: number = 3; //当前激活的道具个数
    public currentGoldCount = 30; //当前的金币个数
    public gameController: GameController = null;
    public currentLevelNum: number = 0;
    public currentTowerLevelData: Object[] = [];
    // public currentActiveTowerBuildBaseCount = 2; //当前激活的建造塔的位置的个数
    constructor(gameCtl) {
        this.gameController = gameCtl;
        // localStorage.setItem
        let gameTime = this.getLocalData("game-time");
        console.log("game time", gameTime);
        // this.clearLocalData();
        // this.setLocalData("gold-count", 30 + '');
        // this.setLocalData('active-tower-build-base-count', '2');
        // this.setLocalData("current-level-num", this.currentLevelNum + '');
        // this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

        if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count'));
            // console.log()
            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数
            this.currentLevelNum = Number(this.getLocalData("current-level-num")); //获取当前的关卡数
            // this.currentActiveTowerBuildBaseCount = Number(this.getLocalData('active-tower-build-base-count')); //获取当前激活的塔的基座的数量
            this.currentTowerLevelData = JSON.parse(this.getLocalData("tower-level-data"));
        } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
            this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

            // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
        }
    }
    initTowerLevelLocalData(gameConfig: Object) {
        //初始化本地
        let list = [];
        for (let i in gameConfig) {
            if (gameConfig[i].Type === "Tower") {
                list.push(gameConfig[i]);
            }
        }
        list = list.sort((a, b) => {
            return a.index - b.index;
        });
        let dataList = [];
        for (let i = 0; i < list.length; i++) {
            let data = list[i];
            let obj = {
                IconSprteFrame: data.IconSprteFrame,
                isActive: false,
                currentLevel: 0,
                TowerType: data.TowerType
            }
            if (i < 2) {
                obj.isActive = true;
                obj.currentLevel = 1;
            } else {
                obj.isActive = false;
                obj.currentLevel = 0;
            }
            dataList.push(obj)
        }
        console.log("json", dataList);
        this.currentTowerLevelData = dataList;
        this.setLocalData("tower-level-data", JSON.stringify(dataList));
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
    initGoldCount() {
        //初始化金币个数
        this.currentGoldCount = 0;
        this.setLocalData('gold-count', this.currentGoldCount + '');
    }
    addGoldCount(goldCount: number) {
        this.currentGoldCount += goldCount;
        this.setLocalData('gold-count', this.currentGoldCount + '');
        this.gameController.node.emit("update-gold-label", this.currentGoldCount, goldCount);
    }
    newGame() {
        this.currentLevelNum = 0;
        this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数
        this.currentGoldCount = 30;
        this.setLocalData("gold-count", this.currentGoldCount + '');

    }
    enterNextLevel() {
        this.currentLevelNum++;
        this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数
    }
    // getCurrentTowerLevelData(towerIndex: number): Object {
    //     return this.currentTowerLevelData[towerIndex];
    // }
    // updateCurrentTowerLevelData()
    activeTower(index: number) {
        this.currentTowerLevelData[index]["isActive"] = true;
        this.currentTowerLevelData[index]['currentLevel'] = 1;
        this.setLocalData("tower-level-data", JSON.stringify(this.currentTowerLevelData));
    }
    getCurrentTowerLocalLevel(towerInedx: number){
        return this.currentTowerLevelData[towerInedx]['currentLevel'];
    }
    getCurrentTowersLocalLevelData(){
        return this.currentTowerLevelData;
    }
    updateTowerLocalLevel(towerIndexType: number,localLevel: number){
        //升级塔的永久等级
        this.currentTowerLevelData[towerIndexType]['currentLevel'] = localLevel;
        this.setLocalData('tower-level-data', JSON.stringify(this.currentTowerLevelData));

    }
}   