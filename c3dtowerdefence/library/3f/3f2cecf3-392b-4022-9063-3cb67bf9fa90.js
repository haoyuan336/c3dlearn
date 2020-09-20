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
        // public currentActiveTowerBuildBaseCount = 2; //当前激活的建造塔的位置的个数
        function PlayData(gameCtl) {
          _classCallCheck(this, PlayData);

          this.currentSkillCount = 2;
          this.currentActiveSkillCount = 3;
          this.currentGoldCount = 30;
          this.gameController = null;
          this.currentLevelNum = 0;
          this.currentTowerLevelData = [];
          this.gameController = gameCtl; // localStorage.setItem

          var gameTime = this.getLocalData("game-time");
          console.log("game time", gameTime); // this.clearLocalData();
          // this.setLocalData("gold-count", 99999 + '');
          // this.setLocalData('active-tower-build-base-count', '2');
          // this.setLocalData("current-level-num", this.currentLevelNum + '');
          // this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

          if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count')); // console.log()

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
            this.initTowerLevelLocalData(this.gameController.getGameConfig().json); // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
          }
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
        }]);

        return PlayData;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRUb3dlckxldmVsRGF0YSIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsIkpTT04iLCJwYXJzZSIsInNldExvY2FsRGF0YSIsImluaXRUb3dlckxldmVsTG9jYWxEYXRhIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJnYW1lQ29uZmlnIiwibGlzdCIsImkiLCJUeXBlIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiZGF0YUxpc3QiLCJsZW5ndGgiLCJkYXRhIiwib2JqIiwiSWNvblNwcnRlRnJhbWUiLCJpc0FjdGl2ZSIsImN1cnJlbnRMZXZlbCIsIlRvd2VyVHlwZSIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiZ29sZENvdW50Iiwibm9kZSIsImVtaXQiLCJJbml0R29sZENvdW50IiwiYWRkR29sZENvdW50IiwidG93ZXJJbmVkeCIsInRvd2VySW5kZXhUeXBlIiwibG9jYWxMZXZlbCIsImxhc3RBY3RpdmVJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2FBLFE7QUFFbUM7QUFDZDtBQUk5QjtBQUNBLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsZUFQZEMsaUJBT2MsR0FQYyxDQU9kO0FBQUEsZUFOZEMsdUJBTWMsR0FOb0IsQ0FNcEI7QUFBQSxlQUxkQyxnQkFLYyxH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S1osWUFBTCxDQUFrQixrQkFBbEIsRUFBc0NGLElBQUksQ0FBQ3VCLFNBQUwsQ0FBZSxLQUFLN0IscUJBQXBCLENBQXRDO0FBQ0g7Ozs0Q0FDaUJvQixLLEVBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sS0FBS3BCLHFCQUFMLENBQTJCb0IsS0FBM0IsRUFBa0MsVUFBbEMsQ0FBUDtBQUNIOzs7b0RBQ3lCc0IsVSxFQUFvQjtBQUMxQyxtQkFBTyxLQUFLMUMscUJBQUwsQ0FBMkIwQyxVQUEzQixFQUF1QyxjQUF2QyxDQUFQO0FBQ0g7OzsyREFDZ0M7QUFDN0IsbUJBQU8sS0FBSzFDLHFCQUFaO0FBQ0g7OztnREFDcUIyQyxjLEVBQXdCQyxVLEVBQW9CO0FBQzlEO0FBQ0EsaUJBQUs1QyxxQkFBTCxDQUEyQjJDLGNBQTNCLEVBQTJDLGNBQTNDLElBQTZEQyxVQUE3RDtBQUNBLGlCQUFLcEMsWUFBTCxDQUFrQixrQkFBbEIsRUFBc0NGLElBQUksQ0FBQ3VCLFNBQUwsQ0FBZSxLQUFLN0IscUJBQXBCLENBQXRDO0FBRUg7OzsyREFDK0I7QUFDNUI7QUFDQTtBQUNBLGdCQUFJNkMsZUFBZSxHQUFHLENBQXRCOztBQUNBLGlCQUFLLElBQUkvQixDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFHLEtBQUtkLHFCQUFMLENBQTJCc0IsTUFBaEQsRUFBeURSLENBQUMsRUFBMUQsRUFBOEQ7QUFDMUQsa0JBQUlZLFFBQVEsR0FBRyxLQUFLMUIscUJBQUwsQ0FBMkJjLENBQTNCLEVBQThCLFVBQTlCLENBQWY7O0FBQ0Esa0JBQUksQ0FBQ1ksUUFBTCxFQUFjO0FBQ1ZtQixnQkFBQUEsZUFBZSxHQUFHL0IsQ0FBbEI7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsbUJBQU8rQixlQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzeXMgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5RGF0YSB7XHJcbiAgICBwdWJsaWMgY3VycmVudFNraWxsQ291bnQ6IG51bWJlciA9IDI7XHJcbiAgICBwdWJsaWMgY3VycmVudEFjdGl2ZVNraWxsQ291bnQ6IG51bWJlciA9IDM7IC8v5b2T5YmN5r+A5rS755qE6YGT5YW35Liq5pWwXHJcbiAgICBwdWJsaWMgY3VycmVudEdvbGRDb3VudCA9IDMwOyAvL+W9k+WJjeeahOmHkeW4geS4quaVsFxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGN1cnJlbnRUb3dlckxldmVsRGF0YTogT2JqZWN0W10gPSBbXTtcclxuICAgIC8vIHB1YmxpYyBjdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCA9IDI7IC8v5b2T5YmN5r+A5rS755qE5bu66YCg5aGU55qE5L2N572u55qE5Liq5pWwXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW1cclxuICAgICAgICBsZXQgZ2FtZVRpbWUgPSB0aGlzLmdldExvY2FsRGF0YShcImdhbWUtdGltZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgdGltZVwiLCBnYW1lVGltZSk7XHJcbiAgICAgICAgLy8gdGhpcy5jbGVhckxvY2FsRGF0YSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCA5OTk5OSArICcnKTtcclxuICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YSgnYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnQnLCAnMicpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1sZXZlbC1udW1cIiwgdGhpcy5jdXJyZW50TGV2ZWxOdW0gKyAnJyk7XHJcbiAgICAgICAgLy8gdGhpcy5pbml0VG93ZXJMZXZlbExvY2FsRGF0YSh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vIOmmluasoei/m+WFpea4uOaIjy4g5Yid5aeL5YyW5ri45oiP5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5LiN5piv6aaW5qyh6L+b5YWl5ri45oiP77yM6YKj5LmI5Yid5aeL5YyW5LiA5Lqb5ri45oiP5pWw5o2uXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtc2tpbGwtY291bnQnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnQnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YShcImdvbGQtY291bnRcIikpOyAvL+iOt+WPluW9k+WJjemHkeW4geS4quaVsFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbE51bSA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YShcImN1cnJlbnQtbGV2ZWwtbnVtXCIpKTsgLy/ojrflj5blvZPliY3nmoTlhbPljaHmlbBcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnQnKSk7IC8v6I635Y+W5b2T5YmN5r+A5rS755qE5aGU55qE5Z+65bqn55qE5pWw6YePXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmdldExvY2FsRGF0YShcInRvd2VyLWxldmVsLWRhdGFcIikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIsICcxJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnRcIiwgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCArICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LXNraWxsLWNvdW50XCIsIHRoaXMuY3VycmVudFNraWxsQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFRvd2VyTGV2ZWxMb2NhbERhdGEodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbik7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YShcImFjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50XCIsIHRoaXMuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgKyAnJyk7IC8v5L+d5a2Y5b2T5YmN5r+A5rS75aGU55qE5Z+65bqn55qE5pWw6YePXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdFRvd2VyTGV2ZWxMb2NhbERhdGEoZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmnKzlnLBcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZUNvbmZpZ1tpXS5UeXBlID09PSBcIlRvd2VyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChnYW1lQ29uZmlnW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0ID0gbGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgSWNvblNwcnRlRnJhbWU6IGRhdGEuSWNvblNwcnRlRnJhbWUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWw6IDAsXHJcbiAgICAgICAgICAgICAgICBUb3dlclR5cGU6IGRhdGEuVG93ZXJUeXBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb2JqLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG9iai5jdXJyZW50TGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGFMaXN0LnB1c2gob2JqKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImpzb25cIiwgZGF0YUxpc3QpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhID0gZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJ0b3dlci1sZXZlbC1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRhdGFMaXN0KSk7XHJcbiAgICB9XHJcbiAgICBjbGVhckxvY2FsRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGdldExvY2FsRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmuLjmiI/mlbDmja4nLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxEYXRhKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlR29sZENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50R29sZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEdvbGRDb3VudDtcclxuICAgIH1cclxuICAgIGluaXRHb2xkQ291bnQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbph5HluIHkuKrmlbBcclxuICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdnb2xkLWNvdW50JywgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG4gICAgfVxyXG4gICAgYWRkR29sZENvdW50KGdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ICs9IGdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnZ29sZC1jb3VudCcsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInVwZGF0ZS1nb2xkLWxhYmVsXCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCwgZ29sZENvdW50KTtcclxuICAgIH1cclxuICAgIG5ld0dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdjdXJyZW50LWxldmVsLW51bScsIHRoaXMuY3VycmVudExldmVsTnVtICsgJycpOy8v5L+d5a2Y5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvblsnTGV2ZWxfJyArIHRoaXMuY3VycmVudExldmVsTnVtXS5Jbml0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcblxyXG4gICAgfVxyXG4gICAgZW50ZXJOZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0rKztcclxuICAgICAgICAvL+iOt+WPluW9k+WJjeWFs+WNoeeahOmHkeW4geS4quaVsFxyXG4gICAgICAgIGxldCBnb2xkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uWydMZXZlbF8nICsgdGhpcy5jdXJyZW50TGV2ZWxOdW1dLkluaXRHb2xkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5hZGRHb2xkQ291bnQoZ29sZENvdW50KTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnY3VycmVudC1sZXZlbC1udW0nLCB0aGlzLmN1cnJlbnRMZXZlbE51bSArICcnKTsvL+S/neWtmOW9k+WJjeeahOWFs+WNoeaVsFxyXG4gICAgfVxyXG4gICAgLy8gZ2V0Q3VycmVudFRvd2VyTGV2ZWxEYXRhKHRvd2VySW5kZXg6IG51bWJlcik6IE9iamVjdCB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW3Rvd2VySW5kZXhdO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gdXBkYXRlQ3VycmVudFRvd2VyTGV2ZWxEYXRhKClcclxuICAgIGFjdGl2ZVRvd2VyKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZSB0b3dlciBpbmRleFwiLCBpbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHRvd2VyIGxldmVsIGRhdGFcIiwgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVtpbmRleF1bXCJpc0FjdGl2ZVwiXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGFbaW5kZXhdWydjdXJyZW50TGV2ZWwnXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJ0b3dlci1sZXZlbC1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhKSk7XHJcbiAgICB9XHJcbiAgICBnZXRXZWFwb25Jc0FjdGl2ZShpbmRleCkge1xyXG4gICAgICAgIC8v6I635Y+W5aGU5piv5ZCm5r+A5rS75LqGXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2luZGV4XSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2luZGV4XVtcImlzQWN0aXZlXCJdO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCh0b3dlckluZWR4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGFbdG93ZXJJbmVkeF1bJ2N1cnJlbnRMZXZlbCddO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFRvd2Vyc0xvY2FsTGV2ZWxEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRvd2VyTG9jYWxMZXZlbCh0b3dlckluZGV4VHlwZTogbnVtYmVyLCBsb2NhbExldmVsOiBudW1iZXIpIHtcclxuICAgICAgICAvL+WNh+e6p+WhlOeahOawuOS5heetiee6p1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW3Rvd2VySW5kZXhUeXBlXVsnY3VycmVudExldmVsJ10gPSBsb2NhbExldmVsO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCd0b3dlci1sZXZlbC1kYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdE5lZWRUb0FjdGl2ZVRvd2VySW5kZXgoKXtcclxuICAgICAgICAvL+W+l+WIsOacgOWQjuS4gOS4qua/gOa0u+WIsOeahGluZGV4XHJcbiAgICAgICAgLy8gbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGxhc3RBY3RpdmVJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2ldWydpc0FjdGl2ZSddO1xyXG4gICAgICAgICAgICBpZiAoIWlzQWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFzdEFjdGl2ZUluZGV4O1xyXG4gICAgfVxyXG59ICAgIl19