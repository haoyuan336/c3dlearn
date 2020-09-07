import { sys } from "cc";

export class PlayData{
    public currentSkillCount: number = 2;
    public currentActiveSkillCount: number = 3; //当前激活的道具个数

    constructor(){
        // localStorage.setItem
        let gameTime = this.getLocalData("game-time");
        console.log("game time", gameTime);
        // this.clearLocalData();
        this.setLocalData("current-skill-count", 2);
        if (gameTime){
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count'));
            // console.log()
            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
        }else{
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
        }
    }   
    clearLocalData(){
        localStorage.clear();
    }
    getLocalData(key:string){
        console.log('获取游戏数据', key);
       return localStorage.getItem(key);
    }
    setLocalData(key: string, data: string){
        localStorage.setItem(key, data);
    }
}