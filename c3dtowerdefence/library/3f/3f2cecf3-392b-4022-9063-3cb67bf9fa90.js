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
          // this.setLocalData("gold-count", 30 + '');
          // this.setLocalData('active-tower-build-base-count', '2');
          // this.setLocalData("current-level-num", this.currentLevelNum + '');

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
                currentLevel: 0
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
            this.currentTowerLevelData = list;
            this.setLocalData("tower-level-data", JSON.stringify(list));
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

            this.currentGoldCount = 30;
            this.setLocalData("gold-count", this.currentGoldCount + '');
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            this.currentLevelNum++;
            this.setLocalData('current-level-num', this.currentLevelNum + ''); //保存当前的关卡数
          } // getCurrentTowerLevelData(towerIndex: number): Object {
          //     return this.currentTowerLevelData[towerIndex];
          // }
          // updateCurrentTowerLevelData()

        }, {
          key: "activeTower",
          value: function activeTower(index) {
            this.currentTowerLevelData[index]["isActive"] = true;
            this.currentTowerLevelData[index]['currentLevel'] = 1;
            this.setLocalData("tower-level-data", JSON.stringify(this.currentTowerLevelData));
          }
        }, {
          key: "getCurrentTowerLevelData",
          value: function getCurrentTowerLevelData() {
            return this.currentTowerLevelData;
          }
        }]);

        return PlayData;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRUb3dlckxldmVsRGF0YSIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsImluaXRUb3dlckxldmVsTG9jYWxEYXRhIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJOdW1iZXIiLCJKU09OIiwicGFyc2UiLCJzZXRMb2NhbERhdGEiLCJnYW1lQ29uZmlnIiwibGlzdCIsImkiLCJUeXBlIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiZGF0YUxpc3QiLCJsZW5ndGgiLCJkYXRhIiwib2JqIiwiSWNvblNwcnRlRnJhbWUiLCJpc0FjdGl2ZSIsImN1cnJlbnRMZXZlbCIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiZ29sZENvdW50Iiwibm9kZSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdhQSxRO0FBRW1DO0FBQ2Q7QUFJOUI7QUFDQSwwQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLGVBUGRDLGlCQU9jLEdBUGMsQ0FPZDtBQUFBLGVBTmRDLHVCQU1jLEdBTm9CLENBTXBCO0FBQUEsZUFMZEMsZ0JBS2MsR0FMSyxFQUtMO0FBQUEsZUFKZEMsY0FJYyxHQUptQixJQUluQjtBQUFBLGVBSGRDLGVBR2MsR0FIWSxDQUdaO0FBQUEsZUFGZEMscUJBRWMsR0FGb0IsRUFFcEI7QUFDakIsZUFBS0Ys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QXhELEVBQTBFdUMsU0FBMUU7QUFDSDs7O29DQUNTO0FBQ04saUJBQUtyQyxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsaUJBQUtZLFlBQUwsQ0FBa0IsbUJBQWxCLEVBQXVDLEtBQUtaLGVBQUwsR0FBdUIsRUFBOUQsRUFGTSxDQUU0RDs7QUFDbEUsaUJBQUtGLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsaUJBQUtjLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsS0FBS2QsZ0JBQUwsR0FBd0IsRUFBeEQ7QUFFSDs7OzJDQUNnQjtBQUNiLGlCQUFLRSxlQUFMO0FBQ0EsaUJBQUtZLFlBQUwsQ0FBa0IsbUJBQWxCLEVBQXVDLEtBQUtaLGVBQUwsR0FBdUIsRUFBOUQsRUFGYSxDQUVxRDtBQUNyRSxXLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7c0NBQ1lxQixLLEVBQWU7QUFDdkIsaUJBQUtwQixxQkFBTCxDQUEyQm9CLEtBQTNCLEVBQWtDLFVBQWxDLElBQWdELElBQWhEO0FBQ0EsaUJBQUtwQixxQkFBTCxDQUEyQm9CLEtBQTNCLEVBQWtDLGNBQWxDLElBQW9ELENBQXBEO0FBQ0EsaUJBQUtULFlBQUwsQ0FBa0Isa0JBQWxCLEVBQXNDRixJQUFJLENBQUNtQixTQUFMLENBQWUsS0FBSzVCLHFCQUFwQixDQUF0QztBQUNIOzs7cURBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtBLHFCQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzeXMgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5RGF0YSB7XHJcbiAgICBwdWJsaWMgY3VycmVudFNraWxsQ291bnQ6IG51bWJlciA9IDI7XHJcbiAgICBwdWJsaWMgY3VycmVudEFjdGl2ZVNraWxsQ291bnQ6IG51bWJlciA9IDM7IC8v5b2T5YmN5r+A5rS755qE6YGT5YW35Liq5pWwXHJcbiAgICBwdWJsaWMgY3VycmVudEdvbGRDb3VudCA9IDMwOyAvL+W9k+WJjeeahOmHkeW4geS4quaVsFxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGN1cnJlbnRUb3dlckxldmVsRGF0YTogT2JqZWN0W10gPSBbXTtcclxuICAgIC8vIHB1YmxpYyBjdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCA9IDI7IC8v5b2T5YmN5r+A5rS755qE5bu66YCg5aGU55qE5L2N572u55qE5Liq5pWwXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW1cclxuICAgICAgICBsZXQgZ2FtZVRpbWUgPSB0aGlzLmdldExvY2FsRGF0YShcImdhbWUtdGltZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgdGltZVwiLCBnYW1lVGltZSk7XHJcbiAgICAgICAgLy8gdGhpcy5jbGVhckxvY2FsRGF0YSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCAzMCArICcnKTtcclxuICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YSgnYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnQnLCAnMicpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1sZXZlbC1udW1cIiwgdGhpcy5jdXJyZW50TGV2ZWxOdW0gKyAnJyk7XHJcbiAgICAgICAgdGhpcy5pbml0VG93ZXJMZXZlbExvY2FsRGF0YSh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vIOmmluasoei/m+WFpea4uOaIjy4g5Yid5aeL5YyW5ri45oiP5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5LiN5piv6aaW5qyh6L+b5YWl5ri45oiP77yM6YKj5LmI5Yid5aeL5YyW5LiA5Lqb5ri45oiP5pWw5o2uXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtc2tpbGwtY291bnQnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnQnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YShcImdvbGQtY291bnRcIikpOyAvL+iOt+WPluW9k+WJjemHkeW4geS4quaVsFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbE51bSA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YShcImN1cnJlbnQtbGV2ZWwtbnVtXCIpKTsgLy/ojrflj5blvZPliY3nmoTlhbPljaHmlbBcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnQnKSk7IC8v6I635Y+W5b2T5YmN5r+A5rS755qE5aGU55qE5Z+65bqn55qE5pWw6YePXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmdldExvY2FsRGF0YShcInRvd2VyLWxldmVsLWRhdGFcIikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIsICcxJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnRcIiwgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCArICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LXNraWxsLWNvdW50XCIsIHRoaXMuY3VycmVudFNraWxsQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFRvd2VyTGV2ZWxMb2NhbERhdGEodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbik7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YShcImFjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50XCIsIHRoaXMuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgKyAnJyk7IC8v5L+d5a2Y5b2T5YmN5r+A5rS75aGU55qE5Z+65bqn55qE5pWw6YePXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdFRvd2VyTGV2ZWxMb2NhbERhdGEoZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmnKzlnLBcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZUNvbmZpZ1tpXS5UeXBlID09PSBcIlRvd2VyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChnYW1lQ29uZmlnW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0ID0gbGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgSWNvblNwcnRlRnJhbWU6IGRhdGEuSWNvblNwcnRlRnJhbWUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWw6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaSA8IDIpIHtcclxuICAgICAgICAgICAgICAgIG9iai5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VycmVudExldmVsID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iai5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgb2JqLmN1cnJlbnRMZXZlbCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YUxpc3QucHVzaChvYmopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwianNvblwiLCBkYXRhTGlzdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwidG93ZXItbGV2ZWwtZGF0YVwiLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgICB9XHJcbiAgICBjbGVhckxvY2FsRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGdldExvY2FsRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmuLjmiI/mlbDmja4nLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxEYXRhKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlR29sZENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50R29sZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEdvbGRDb3VudDtcclxuICAgIH1cclxuICAgIGluaXRHb2xkQ291bnQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbph5HluIHkuKrmlbBcclxuICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdnb2xkLWNvdW50JywgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG4gICAgfVxyXG4gICAgYWRkR29sZENvdW50KGdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ICs9IGdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnZ29sZC1jb3VudCcsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInVwZGF0ZS1nb2xkLWxhYmVsXCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCwgZ29sZENvdW50KTtcclxuICAgIH1cclxuICAgIG5ld0dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdjdXJyZW50LWxldmVsLW51bScsIHRoaXMuY3VycmVudExldmVsTnVtICsgJycpOy8v5L+d5a2Y5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ID0gMzA7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbE51bSsrO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdjdXJyZW50LWxldmVsLW51bScsIHRoaXMuY3VycmVudExldmVsTnVtICsgJycpOy8v5L+d5a2Y5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICB9XHJcbiAgICAvLyBnZXRDdXJyZW50VG93ZXJMZXZlbERhdGEodG93ZXJJbmRleDogbnVtYmVyKTogT2JqZWN0IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGFbdG93ZXJJbmRleF07XHJcbiAgICAvLyB9XHJcbiAgICAvLyB1cGRhdGVDdXJyZW50VG93ZXJMZXZlbERhdGEoKVxyXG4gICAgYWN0aXZlVG93ZXIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2luZGV4XVtcImlzQWN0aXZlXCJdID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVtpbmRleF1bJ2N1cnJlbnRMZXZlbCddID0gMTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcInRvd2VyLWxldmVsLWRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEpKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRUb3dlckxldmVsRGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YTtcclxuICAgIH1cclxufSAgICJdfQ==