System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PlayData;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "3f2cezzOStAIpBjPLZ7+fqQ", "PlayerData", _context.meta);

      _crd = true;

      _export("PlayData", PlayData = /*#__PURE__*/function () {
        //当前激活的道具个数
        //当前的金币个数
        //当前的红心个数
        // public currentActiveEnemyMap:
        // public currentActiveTowerBuildBaseCount = 2; //当前激活的建造塔的位置的个数
        function PlayData(gameCtl) {
          _classCallCheck(this, PlayData);

          this.currentSkillCount = 2;
          this.currentActiveSkillCount = 3;
          this.currentGoldCount = 30;
          this.gameController = null;
          this.currentLevelNum = 0;
          this.currentTowerLevelData = [];
          this.currentInitRedHeartCounnt = 3;
          this.currentRedHeardCount = 0;
          this.currentActiveEnemyMap = [];
          this.gameController = gameCtl; // localStorage.setItem

          var gameTime = this.getLocalData("game-time");
          console.log("game time", gameTime); // this.clearLocalData();

          this.setLocalData("gold-count", 99999 + ''); // this.setLocalData('active-tower-build-base-count', '2');
          // this.setLocalData("current-level-num", this.currentLevelNum + '');
          // this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

          this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + ""); // this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");

          this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
          this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

          if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count')); // console.log()

            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数

            this.currentLevelNum = Number(this.getLocalData("current-level-num")); //获取当前的关卡数
            // this.currentActiveTowerBuildBaseCount = Number(this.getLocalData('active-tower-build-base-count')); //获取当前激活的塔的基座的数量

            this.currentTowerLevelData = JSON.parse(this.getLocalData("tower-level-data"));
            this.currentInitRedHeartCounnt = Number(this.getLocalData("current-init-red-heart-count")); //获取当前初始化的红心的个数

            this.currentActiveEnemyMap = JSON.parse(this.getLocalData("active-enemy-list")); //获取当前激活的敌人的列表
          } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
            this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
            this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
            this.initTowerLevelLocalData(this.gameController.getGameConfig().json); // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
          }

          this.currentRedHeardCount = this.currentInitRedHeartCounnt;
        }

        _createClass(PlayData, [{
          key: "initTowerLevelLocalData",
          value: function initTowerLevelLocalData(gameConfig) {
            //初始化本地
            var list = [];

            for (var i in gameConfig) {
              if (gameConfig[i].Type === "Tower") {
                list.push(gameConfig[i]);
              }
            }

            list = list.sort(function (a, b) {
              return a.index - b.index;
            });
            var dataList = [];

            for (var _i = 0; _i < list.length; _i++) {
              var data = list[_i];
              var obj = {
                IconSprteFrame: data.IconSprteFrame,
                isActive: false,
                currentLevel: 0,
                TowerType: data.TowerType
              };

              if (_i < 2) {
                obj.isActive = true;
                obj.currentLevel = 1;
              } else {
                obj.isActive = false;
                obj.currentLevel = 0;
              }

              dataList.push(obj);
            }

            console.log("json", dataList);
            this.currentTowerLevelData = dataList;
            this.setLocalData("tower-level-data", JSON.stringify(dataList));
          }
        }, {
          key: "clearLocalData",
          value: function clearLocalData() {
            localStorage.clear();
          }
        }, {
          key: "getLocalData",
          value: function getLocalData(key) {
            console.log('获取游戏数据', key);
            return localStorage.getItem(key);
          }
        }, {
          key: "setLocalData",
          value: function setLocalData(key, data) {
            localStorage.setItem(key, data);
          }
        }, {
          key: "updateGoldCount",
          value: function updateGoldCount(value) {
            this.setLocalData("gold-count", value.toString());
          }
        }, {
          key: "getCurrentGoldCount",
          value: function getCurrentGoldCount() {
            return this.currentGoldCount;
          }
        }, {
          key: "initGoldCount",
          value: function initGoldCount() {
            //初始化金币个数
            this.currentGoldCount = 0;
            this.setLocalData('gold-count', this.currentGoldCount + '');
          }
        }, {
          key: "addGoldCount",
          value: function addGoldCount(goldCount) {
            this.currentGoldCount += goldCount;
            this.setLocalData('gold-count', this.currentGoldCount + '');
            this.gameController.node.emit("update-gold-label", this.currentGoldCount, goldCount);
          }
        }, {
          key: "newGame",
          value: function newGame() {
            this.currentLevelNum = 0;
            this.currentRedHeardCount = this.currentInitRedHeartCounnt;
            this.setLocalData('current-level-num', this.currentLevelNum + ''); //保存当前的关卡数

            this.currentGoldCount = this.gameController.getGameConfig().json['Level_' + this.currentLevelNum].InitGoldCount;
            this.setLocalData("gold-count", this.currentGoldCount + '');
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            this.currentLevelNum++; //获取当前关卡的金币个数

            var goldCount = this.gameController.getGameConfig().json['Level_' + this.currentLevelNum].InitGoldCount;
            this.addGoldCount(goldCount);
            this.setLocalData('current-level-num', this.currentLevelNum + ''); //保存当前的关卡数
          } // getCurrentTowerLevelData(towerIndex: number): Object {
          //     return this.currentTowerLevelData[towerIndex];
          // }
          // updateCurrentTowerLevelData()

        }, {
          key: "activeTower",
          value: function activeTower(index) {
            console.log("active tower index", index);
            console.log("current tower level data", this.currentTowerLevelData);
            this.currentTowerLevelData[index]["isActive"] = true;
            this.currentTowerLevelData[index]['currentLevel'] = 1;
            this.setLocalData("tower-level-data", JSON.stringify(this.currentTowerLevelData));
          }
        }, {
          key: "getWeaponIsActive",
          value: function getWeaponIsActive(index) {
            //获取塔是否激活了
            // console.log("index", index);
            // console.log("data", this.currentTowerLevelData[index]);
            return this.currentTowerLevelData[index]["isActive"];
          }
        }, {
          key: "getCurrentTowerLocalLevel",
          value: function getCurrentTowerLocalLevel(towerInedx) {
            return this.currentTowerLevelData[towerInedx]['currentLevel'];
          }
        }, {
          key: "getCurrentTowersLocalLevelData",
          value: function getCurrentTowersLocalLevelData() {
            return this.currentTowerLevelData;
          }
        }, {
          key: "updateTowerLocalLevel",
          value: function updateTowerLocalLevel(towerIndexType, localLevel) {
            //升级塔的永久等级
            this.currentTowerLevelData[towerIndexType]['currentLevel'] = localLevel;
            this.setLocalData('tower-level-data', JSON.stringify(this.currentTowerLevelData));
          }
        }, {
          key: "getFirstNeedToActiveTowerIndex",
          value: function getFirstNeedToActiveTowerIndex() {
            //得到最后一个激活到的index
            // let isActive = false;
            var lastActiveIndex = 0;

            for (var i = 0; i < this.currentTowerLevelData.length; i++) {
              var isActive = this.currentTowerLevelData[i]['isActive'];

              if (!isActive) {
                lastActiveIndex = i;
                break;
              }
            }

            return lastActiveIndex;
          }
        }, {
          key: "getCurrentInitRedHeartCount",
          value: function getCurrentInitRedHeartCount() {
            return this.currentInitRedHeartCounnt;
          }
        }, {
          key: "getAddOneRedHeartCostGoldCount",
          value: function getAddOneRedHeartCostGoldCount() {
            //获取增加一个红心 需要消耗的金币个数
            var currentRedHeardCount = this.getCurrentInitRedHeartCount();
            return (1 + currentRedHeardCount) * currentRedHeardCount * 0.5 * 100;
          }
        }, {
          key: "addLocalInitRedHeartCount",
          value: function addLocalInitRedHeartCount(count) {
            //增加本地初始化红心的个数
            this.currentInitRedHeartCounnt += count; // this.currentRedHeardCount = this.currentInitRedHeartCounnt;

            this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt.toString());
          }
        }, {
          key: "getCurrentRedHeartCount",
          value: function getCurrentRedHeartCount() {
            //获取当前的红心个数
            return this.currentRedHeardCount;
          }
        }, {
          key: "addRedHeartCount",
          value: function addRedHeartCount(count) {
            this.currentRedHeardCount += count;
            this.gameController.referRedHeardUI();
          }
        }, {
          key: "getCurrentActiveTowerList",
          value: function getCurrentActiveTowerList() {
            //获取当前激活的塔的列表
            var list = [];

            for (var i = 0; i < this.currentTowerLevelData.length; i++) {
              var data = this.currentTowerLevelData[i];

              if (data["isActive"]) {
                list.push(i);
              }
            }

            console.log("current active tower list", list);
            return list;
          }
        }, {
          key: "getCurrentActiveEnemyMap",
          value: function getCurrentActiveEnemyMap() {
            //得到当前激活的敌人的列表
            return this.currentActiveEnemyMap;
          }
        }, {
          key: "getEnemyIsActive",
          value: function getEnemyIsActive(enemyType) {
            // console.log("current active enemy list", this.currentActiveEnemyList);
            if (this.currentActiveEnemyMap[enemyType]) {
              return true;
            }

            return false;
          }
        }, {
          key: "activeEnemy",
          value: function activeEnemy(enemyType) {
            //激活一个敌人
            if (!this.currentActiveEnemyMap[enemyType]) {
              this.currentActiveEnemyMap[enemyType] = true;
              console.log("激活一个敌人", enemyType);
              this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
              this.gameController.activeEnemySuccess(enemyType); // this.gameController
            }
          }
        }]);

        return PlayData;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRUb3dlckxldmVsRGF0YSIsImN1cnJlbnRJbml0UmVkSGVhcnRDb3VubnQiLCJjdXJyZW50UmVkSGVhcmRDb3VudCIsImN1cnJlbnRBY3RpdmVFbmVteU1hcCIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbml0VG93ZXJMZXZlbExvY2FsRGF0YSIsImdldEdhbWVDb25maWciLCJqc29uIiwiTnVtYmVyIiwicGFyc2UiLCJnYW1lQ29uZmlnIiwibGlzdCIsImkiLCJUeXBlIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiZGF0YUxpc3QiLCJsZW5ndGgiLCJkYXRhIiwib2JqIiwiSWNvblNwcnRlRnJhbWUiLCJpc0FjdGl2ZSIsImN1cnJlbnRMZXZlbCIsIlRvd2VyVHlwZSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiZ29sZENvdW50Iiwibm9kZSIsImVtaXQiLCJJbml0R29sZENvdW50IiwiYWRkR29sZENvdW50IiwidG93ZXJJbmVkeCIsInRvd2VySW5kZXhUeXBlIiwibG9jYWxMZXZlbCIsImxhc3RBY3RpdmVJbmRleCIsImdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCIsImNvdW50IiwicmVmZXJSZWRIZWFyZFVJIiwiZW5lbXlUeXBlIiwiYWN0aXZlRW5lbXlTdWNjZXNz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S2pELHFCQUFMLENBQTJCaUQsU0FBM0IsQ0FBTCxFQUE0QztBQUN4QyxtQkFBS2pELHFCQUFMLENBQTJCaUQsU0FBM0IsSUFBd0MsSUFBeEM7QUFDQTlDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0I2QyxTQUF0QjtBQUNBLG1CQUFLNUMsWUFBTCxDQUFrQixtQkFBbEIsRUFBdUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtQLHFCQUFwQixDQUF2QztBQUNBLG1CQUFLTCxjQUFMLENBQW9CdUQsa0JBQXBCLENBQXVDRCxTQUF2QyxFQUp3QyxDQUt4QztBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUeXBlZEFycmF5Q29uc3RydWN0b3IsIHN5cyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXlEYXRhIHtcclxuICAgIHB1YmxpYyBjdXJyZW50U2tpbGxDb3VudDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBjdXJyZW50QWN0aXZlU2tpbGxDb3VudDogbnVtYmVyID0gMzsgLy/lvZPliY3mv4DmtLvnmoTpgZPlhbfkuKrmlbBcclxuICAgIHB1YmxpYyBjdXJyZW50R29sZENvdW50ID0gMzA7IC8v5b2T5YmN55qE6YeR5biB5Liq5pWwXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWxOdW06IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudFRvd2VyTGV2ZWxEYXRhOiBPYmplY3RbXSA9IFtdO1xyXG4gICAgcHVibGljIGN1cnJlbnRJbml0UmVkSGVhcnRDb3VubnQ6IG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgY3VycmVudFJlZEhlYXJkQ291bnQ6IG51bWJlciA9IDA7Ly/lvZPliY3nmoTnuqLlv4PkuKrmlbBcclxuICAgIHB1YmxpYyBjdXJyZW50QWN0aXZlRW5lbXlNYXA6IHN0cmluZ1tdID0gW107XHJcbiAgICAvLyBwdWJsaWMgY3VycmVudEFjdGl2ZUVuZW15TWFwOlxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQmFzZUNvdW50ID0gMjsgLy/lvZPliY3mv4DmtLvnmoTlu7rpgKDloZTnmoTkvY3nva7nmoTkuKrmlbBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVDdGwpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbVxyXG4gICAgICAgIGxldCBnYW1lVGltZSA9IHRoaXMuZ2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSB0aW1lXCIsIGdhbWVUaW1lKTtcclxuICAgICAgICAvLyB0aGlzLmNsZWFyTG9jYWxEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIDk5OTk5ICsgJycpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKCdhY3RpdmUtdG93ZXItYnVpbGQtYmFzZS1jb3VudCcsICcyJyk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LWxldmVsLW51bVwiLCB0aGlzLmN1cnJlbnRMZXZlbE51bSArICcnKTtcclxuICAgICAgICAvLyB0aGlzLmluaXRUb3dlckxldmVsTG9jYWxEYXRhKHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb24pO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1pbml0LXJlZC1oZWFydC1jb3VudFwiLCB0aGlzLmN1cnJlbnRJbml0UmVkSGVhcnRDb3VubnQgKyBcIlwiKTtcclxuICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtaW5pdC1yZWQtaGVhcnQtY291bnRcIiwgdGhpcy5jdXJyZW50SW5pdFJlZEhlYXJ0Q291bm50ICsgXCJcIik7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJhY3RpdmUtZW5lbXktbGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRBY3RpdmVFbmVteU1hcCkpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRvd2VyTGV2ZWxMb2NhbERhdGEodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbik7XHJcblxyXG4gICAgICAgIGlmIChnYW1lVGltZSkge1xyXG4gICAgICAgICAgICAvLyDpppbmrKHov5vlhaXmuLjmiI8uIOWIneWni+WMlua4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICAvL+S4jeaYr+mmluasoei/m+WFpea4uOaIj++8jOmCo+S5iOWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2lsbENvdW50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKCdjdXJyZW50LXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtYWN0aXZlLXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIpKTsgLy/ojrflj5blvZPliY3ph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0gPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJjdXJyZW50LWxldmVsLW51bVwiKSk7IC8v6I635Y+W5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2FjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50JykpOyAvL+iOt+WPluW9k+WJjea/gOa0u+eahOWhlOeahOWfuuW6p+eahOaVsOmHj1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YSA9IEpTT04ucGFyc2UodGhpcy5nZXRMb2NhbERhdGEoXCJ0b3dlci1sZXZlbC1kYXRhXCIpKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5pdFJlZEhlYXJ0Q291bm50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKFwiY3VycmVudC1pbml0LXJlZC1oZWFydC1jb3VudFwiKSk7IC8v6I635Y+W5b2T5YmN5Yid5aeL5YyW55qE57qi5b+D55qE5Liq5pWwXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZUVuZW15TWFwID0gSlNPTi5wYXJzZSh0aGlzLmdldExvY2FsRGF0YShcImFjdGl2ZS1lbmVteS1saXN0XCIpKTsgLy/ojrflj5blvZPliY3mv4DmtLvnmoTmlYzkurrnmoTliJfooahcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdhbWUtdGltZVwiLCAnMScpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtYWN0aXZlLXNraWxsLWNvdW50XCIsIHRoaXMuY3VycmVudEFjdGl2ZVNraWxsQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1za2lsbC1jb3VudFwiLCB0aGlzLmN1cnJlbnRTa2lsbENvdW50ICsgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtaW5pdC1yZWQtaGVhcnQtY291bnRcIiwgdGhpcy5jdXJyZW50SW5pdFJlZEhlYXJ0Q291bm50ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiYWN0aXZlLWVuZW15LWxpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50QWN0aXZlRW5lbXlNYXApKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0VG93ZXJMZXZlbExvY2FsRGF0YSh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKFwiYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnRcIiwgdGhpcy5jdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCArICcnKTsgLy/kv53lrZjlvZPliY3mv4DmtLvloZTnmoTln7rluqfnmoTmlbDph49cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVkSGVhcmRDb3VudCA9IHRoaXMuY3VycmVudEluaXRSZWRIZWFydENvdW5udDtcclxuXHJcbiAgICB9XHJcbiAgICBpbml0VG93ZXJMZXZlbExvY2FsRGF0YShnYW1lQ29uZmlnOiBPYmplY3QpIHtcclxuICAgICAgICAvL+WIneWni+WMluacrOWcsFxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBnYW1lQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lQ29uZmlnW2ldLlR5cGUgPT09IFwiVG93ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGdhbWVDb25maWdbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3QgPSBsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBkYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICBJY29uU3BydGVGcmFtZTogZGF0YS5JY29uU3BydGVGcmFtZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbDogMCxcclxuICAgICAgICAgICAgICAgIFRvd2VyVHlwZTogZGF0YS5Ub3dlclR5cGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaSA8IDIpIHtcclxuICAgICAgICAgICAgICAgIG9iai5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VycmVudExldmVsID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iai5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgb2JqLmN1cnJlbnRMZXZlbCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YUxpc3QucHVzaChvYmopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwianNvblwiLCBkYXRhTGlzdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEgPSBkYXRhTGlzdDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcInRvd2VyLWxldmVsLWRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YUxpc3QpKTtcclxuICAgIH1cclxuICAgIGNsZWFyTG9jYWxEYXRhKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxEYXRhKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlua4uOaIj+aVsOaNricsIGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhbERhdGEoa2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVHb2xkQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRHb2xkQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50R29sZENvdW50O1xyXG4gICAgfVxyXG4gICAgaW5pdEdvbGRDb3VudCgpIHtcclxuICAgICAgICAvL+WIneWni+WMlumHkeW4geS4quaVsFxyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoJ2dvbGQtY291bnQnLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICB9XHJcbiAgICBhZGRHb2xkQ291bnQoZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKz0gZ29sZENvdW50O1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdnb2xkLWNvdW50JywgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgdGhpcy5jdXJyZW50R29sZENvdW50LCBnb2xkQ291bnQpO1xyXG4gICAgfVxyXG4gICAgbmV3R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVkSGVhcmRDb3VudCA9IHRoaXMuY3VycmVudEluaXRSZWRIZWFydENvdW5udDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnY3VycmVudC1sZXZlbC1udW0nLCB0aGlzLmN1cnJlbnRMZXZlbE51bSArICcnKTsvL+S/neWtmOW9k+WJjeeahOWFs+WNoeaVsFxyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb25bJ0xldmVsXycgKyB0aGlzLmN1cnJlbnRMZXZlbE51bV0uSW5pdEdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG5cclxuICAgIH1cclxuICAgIGVudGVyTmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTnVtKys7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3lhbPljaHnmoTph5HluIHkuKrmlbBcclxuICAgICAgICBsZXQgZ29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvblsnTGV2ZWxfJyArIHRoaXMuY3VycmVudExldmVsTnVtXS5Jbml0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoJ2N1cnJlbnQtbGV2ZWwtbnVtJywgdGhpcy5jdXJyZW50TGV2ZWxOdW0gKyAnJyk7Ly/kv53lrZjlvZPliY3nmoTlhbPljaHmlbBcclxuICAgIH1cclxuICAgIC8vIGdldEN1cnJlbnRUb3dlckxldmVsRGF0YSh0b3dlckluZGV4OiBudW1iZXIpOiBPYmplY3Qge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVt0b3dlckluZGV4XTtcclxuICAgIC8vIH1cclxuICAgIC8vIHVwZGF0ZUN1cnJlbnRUb3dlckxldmVsRGF0YSgpXHJcbiAgICBhY3RpdmVUb3dlcihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmUgdG93ZXIgaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCB0b3dlciBsZXZlbCBkYXRhXCIsIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGFbaW5kZXhdW1wiaXNBY3RpdmVcIl0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2luZGV4XVsnY3VycmVudExldmVsJ10gPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwidG93ZXItbGV2ZWwtZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0V2VhcG9uSXNBY3RpdmUoaW5kZXgpIHtcclxuICAgICAgICAvL+iOt+WPluWhlOaYr+WQpua/gOa0u+S6hlxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVtpbmRleF0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVtpbmRleF1bXCJpc0FjdGl2ZVwiXTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodG93ZXJJbmVkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW3Rvd2VySW5lZHhdWydjdXJyZW50TGV2ZWwnXTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRUb3dlcnNMb2NhbExldmVsRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVUb3dlckxvY2FsTGV2ZWwodG93ZXJJbmRleFR5cGU6IG51bWJlciwgbG9jYWxMZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/ljYfnuqfloZTnmoTmsLjkuYXnrYnnuqdcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVt0b3dlckluZGV4VHlwZV1bJ2N1cnJlbnRMZXZlbCddID0gbG9jYWxMZXZlbDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgndG93ZXItbGV2ZWwtZGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhKSk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3ROZWVkVG9BY3RpdmVUb3dlckluZGV4KCkge1xyXG4gICAgICAgIC8v5b6X5Yiw5pyA5ZCO5LiA5Liq5r+A5rS75Yiw55qEaW5kZXhcclxuICAgICAgICAvLyBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbGFzdEFjdGl2ZUluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2ldWydpc0FjdGl2ZSddO1xyXG4gICAgICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0QWN0aXZlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhc3RBY3RpdmVJbmRleDtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbml0UmVkSGVhcnRDb3VubnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkT25lUmVkSGVhcnRDb3N0R29sZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy/ojrflj5blop7liqDkuIDkuKrnuqLlv4Mg6ZyA6KaB5raI6ICX55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgbGV0IGN1cnJlbnRSZWRIZWFyZENvdW50ID0gdGhpcy5nZXRDdXJyZW50SW5pdFJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICByZXR1cm4gKDEgKyBjdXJyZW50UmVkSGVhcmRDb3VudCkgKiBjdXJyZW50UmVkSGVhcmRDb3VudCAqIDAuNSAqIDEwMDtcclxuICAgIH1cclxuICAgIGFkZExvY2FsSW5pdFJlZEhlYXJ0Q291bnQoY291bnQpIHtcclxuICAgICAgICAvL+WinuWKoOacrOWcsOWIneWni+WMlue6ouW/g+eahOS4quaVsFxyXG4gICAgICAgIHRoaXMuY3VycmVudEluaXRSZWRIZWFydENvdW5udCArPSBjb3VudDtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRSZWRIZWFyZENvdW50ID0gdGhpcy5jdXJyZW50SW5pdFJlZEhlYXJ0Q291bm50O1xyXG5cclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtaW5pdC1yZWQtaGVhcnQtY291bnRcIiwgdGhpcy5jdXJyZW50SW5pdFJlZEhlYXJ0Q291bm50LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKSB7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3nmoTnuqLlv4PkuKrmlbBcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVkSGVhcmRDb3VudDtcclxuICAgIH1cclxuICAgIGFkZFJlZEhlYXJ0Q291bnQoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJlZEhlYXJkQ291bnQgKz0gY291bnQ7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5yZWZlclJlZEhlYXJkVUkoKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRBY3RpdmVUb3dlckxpc3QoKSB7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3mv4DmtLvnmoTloZTnmoTliJfooahcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVtpXTtcclxuICAgICAgICAgICAgaWYgKGRhdGFbXCJpc0FjdGl2ZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBhY3RpdmUgdG93ZXIgbGlzdFwiLCBsaXN0KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRBY3RpdmVFbmVteU1hcCgpIHtcclxuICAgICAgICAvL+W+l+WIsOW9k+WJjea/gOa0u+eahOaVjOS6uueahOWIl+ihqFxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3RpdmVFbmVteU1hcDtcclxuICAgIH1cclxuICAgIGdldEVuZW15SXNBY3RpdmUoZW5lbXlUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgYWN0aXZlIGVuZW15IGxpc3RcIiwgdGhpcy5jdXJyZW50QWN0aXZlRW5lbXlMaXN0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGl2ZUVuZW15TWFwW2VuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGFjdGl2ZUVuZW15KGVuZW15VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy/mv4DmtLvkuIDkuKrmlYzkurpcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudEFjdGl2ZUVuZW15TWFwW2VuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlRW5lbXlNYXBbZW5lbXlUeXBlXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5r+A5rS75LiA5Liq5pWM5Lq6XCIsIGVuZW15VHlwZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJhY3RpdmUtZW5lbXktbGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRBY3RpdmVFbmVteU1hcCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmFjdGl2ZUVuZW15U3VjY2VzcyhlbmVteVR5cGUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICAgIl19