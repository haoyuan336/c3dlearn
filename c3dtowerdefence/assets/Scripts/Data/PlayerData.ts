import { getTypedArrayConstructor, sys } from "cc";
import { GameController } from "../GameController";

export class PlayData {
    public currentSkillCount: number = 2;
    public currentActiveSkillCount: number = 3; //当前激活的道具个数
    public currentGoldCount = 30000; //当前的金币个数
    public gameController: GameController = null;
    public currentLevelNum: number = 0;
    public currentTowerLevelData: Object[] = [];
    public currentInitRedHeartCounnt: number = 3;
    public currentRedHeardCount: number = 0;//当前的红心个数
    public currentActiveEnemyMap: Object = {};
    // public currentActiveEnemyMap:
    // public currentActiveTowerBuildBaseCount = 2; //当前激活的建造塔的位置的个数
    constructor(gameCtl) {
        this.gameController = gameCtl;
        // localStorage.setItem
        let gameTime = this.getLocalData("game-time");
        console.log("game time", gameTime);
        // this.clearLocalData();
        this.setLocalData("gold-count", 99999 + '');
        // this.setLocalData('active-tower-build-base-count', '2');
        // this.setLocalData("current-level-num", this.currentLevelNum + '');
        // this.initTowerLevelLocalData(this.gameController.getGameConfig().json);
        // this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
        // this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
        // this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
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
            this.currentInitRedHeartCounnt = Number(this.getLocalData("current-init-red-heart-count")); //获取当前初始化的红心的个数
            this.currentActiveEnemyMap = JSON.parse(this.getLocalData("active-enemy-list")); //获取当前激活的敌人的列表
            console.log("current active enemy map", this.currentActiveEnemyMap);
        } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
            this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
            this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
            this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

            // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
        }
        this.currentRedHeardCount = this.currentInitRedHeartCounnt;

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
        // localStorage.setItem(key, data);
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
        // if (goldCount > 0) {
        //     this.gameController.node.emit("play-audio", '收集金币')
        // } else {
        //     this.gameController.node.emit("play-audio", '消费金币')

        // }
        this.gameController.node.emit("update-gold-label", this.currentGoldCount, goldCount);
    }
    newGame() {
        this.currentLevelNum = 0;
        this.currentRedHeardCount = this.currentInitRedHeartCounnt;
        this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数
        this.currentGoldCount = this.gameController.getGameConfig().json['Level_' + this.currentLevelNum].InitGoldCount;
        this.setLocalData("gold-count", this.currentGoldCount + '');

    }
    enterNextLevel() {
        this.currentLevelNum++;
        //获取当前关卡的金币个数
        let goldCount = this.gameController.getGameConfig().json['Level_' + this.currentLevelNum].InitGoldCount;
        this.addGoldCount(goldCount);
        this.setLocalData('current-level-num', this.currentLevelNum + '');//保存当前的关卡数
    }
    // getCurrentTowerLevelData(towerIndex: number): Object {
    //     return this.currentTowerLevelData[towerIndex];
    // }
    // updateCurrentTowerLevelData()
    activeTower(index: number) {
        console.log("active tower index", index);
        console.log("current tower level data", this.currentTowerLevelData);

        this.currentTowerLevelData[index]["isActive"] = true;
        this.currentTowerLevelData[index]['currentLevel'] = 1;
        this.setLocalData("tower-level-data", JSON.stringify(this.currentTowerLevelData));
    }
    getWeaponIsActive(index) {
        //获取塔是否激活了
        // console.log("index", index);
        // console.log("data", this.currentTowerLevelData[index]);
        return this.currentTowerLevelData[index]["isActive"];
    }
    getCurrentTowerLocalLevel(towerInedx: number) {
        return this.currentTowerLevelData[towerInedx]['currentLevel'];
    }
    getCurrentTowersLocalLevelData() {
        return this.currentTowerLevelData;
    }
    updateTowerLocalLevel(towerIndexType: number, localLevel: number) {
        //升级塔的永久等级
        this.currentTowerLevelData[towerIndexType]['currentLevel'] = localLevel;
        this.setLocalData('tower-level-data', JSON.stringify(this.currentTowerLevelData));

    }
    getFirstNeedToActiveTowerIndex() {
        //得到最后一个激活到的index
        // let isActive = false;
        let lastActiveIndex = 0;
        for (let i = 0; i < this.currentTowerLevelData.length; i++) {
            let isActive = this.currentTowerLevelData[i]['isActive'];
            if (!isActive) {
                lastActiveIndex = i;
                break;
            }
        }
        return lastActiveIndex;
    }
    getCurrentInitRedHeartCount(): number {
        return this.currentInitRedHeartCounnt;
    }

    getAddOneRedHeartCostGoldCount(): number {
        //获取增加一个红心 需要消耗的金币个数
        let currentRedHeardCount = this.getCurrentInitRedHeartCount();
        return (1 + currentRedHeardCount) * currentRedHeardCount * 0.5 * 100;
    }
    addLocalInitRedHeartCount(count) {
        //增加本地初始化红心的个数
        this.currentInitRedHeartCounnt += count;
        // this.currentRedHeardCount = this.currentInitRedHeartCounnt;

        this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt.toString());
    }
    getCurrentRedHeartCount() {
        //获取当前的红心个数
        return this.currentRedHeardCount;
    }
    addRedHeartCount(count: number) {
        this.currentRedHeardCount += count;
        this.gameController.referRedHeardUI();
    }
    getCurrentActiveTowerList() {
        //获取当前激活的塔的列表
        let list = [];
        for (let i = 0; i < this.currentTowerLevelData.length; i++) {
            let data = this.currentTowerLevelData[i];
            if (data["isActive"]) {
                list.push(i);
            }
        }
        console.log("current active tower list", list);
        return list;
    }
    getCurrentActiveEnemyMap() {
        //得到当前激活的敌人的列表
        return this.currentActiveEnemyMap;
    }
    getEnemyIsActive(enemyType: string) {
        // console.log("current active enemy list", this.currentActiveEnemyList);

        if (this.currentActiveEnemyMap[enemyType]) {
            return true;
        }
        return false;
    }
    activeEnemy(enemyType: string) {
        //激活一个敌人
        if (!this.currentActiveEnemyMap[enemyType]) {
            this.currentActiveEnemyMap[enemyType] = true;
            console.log("激活一个敌人", enemyType)
            console.log("current active enemy map", this.currentActiveEnemyMap);
            this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
            console.log("data = ", this.getLocalData("active-enemy-list"));
            this.gameController.activeEnemySuccess(enemyType);
            // this.gameController
        }
    }
    getIsShowed(objectType: string) {
        let isShow = Boolean(this.getLocalData("set-object-showed" + objectType));
        if (!isShow) {
            return false;
        }
        return true;
    }
    setShowed(objectType: string) {
        this.setLocalData("set-object-showed" + objectType, "true");
    }
    getIsShowGuide(guideStep: string) {
        return Boolean(this.getLocalData("guide-step-" + guideStep));
    }
    setIsShowGuide(guideStep: string) {
        this.setLocalData("guide-step-" + guideStep, "true");
    }
}   