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

          this.setLocalData("gold-count", 99999 + ''); // this.setLocalData('active-tower-build-base-count', '2');
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
          key: "getWeaponIsActive",
          value: function getWeaponIsActive(index) {
            //获取塔是否激活了
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRUb3dlckxldmVsRGF0YSIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsRGF0YSIsImluaXRUb3dlckxldmVsTG9jYWxEYXRhIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJOdW1iZXIiLCJKU09OIiwicGFyc2UiLCJnYW1lQ29uZmlnIiwibGlzdCIsImkiLCJUeXBlIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiZGF0YUxpc3QiLCJsZW5ndGgiLCJkYXRhIiwib2JqIiwiSWNvblNwcnRlRnJhbWUiLCJpc0FjdGl2ZSIsImN1cnJlbnRMZXZlbCIsIlRvd2VyVHlwZSIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiZ29sZENvdW50Iiwibm9kZSIsImVtaXQiLCJ0b3dlckluZWR4IiwidG93ZXJJbmRleFR5cGUiLCJsb2NhbExldmVsIiwibGFzdEFjdGl2ZUluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYUEsUTtBQUVtQztBQUNkO0FBSTlCO0FBQ0EsMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxlQVBkQyxpQkFPYyxHQVBjLENBT2Q7QUFBQSxlQU5kQyx1QkFNYyxHQU5vQixDQU1wQjtBQUFBLGVBTGRDLGdCQUtjLEdBTEssRUFLTDtBQUFBLGVBSmRDLGNBSWMsR0FKbUIs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O0FBQzdCLG1CQUFPLEtBQUt4QyxxQkFBWjtBQUNIOzs7Z0RBQ3FCeUMsYyxFQUF3QkMsVSxFQUFvQjtBQUM5RDtBQUNBLGlCQUFLMUMscUJBQUwsQ0FBMkJ5QyxjQUEzQixFQUEyQyxjQUEzQyxJQUE2REMsVUFBN0Q7QUFDQSxpQkFBS3JDLFlBQUwsQ0FBa0Isa0JBQWxCLEVBQXNDSyxJQUFJLENBQUNtQixTQUFMLENBQWUsS0FBSzdCLHFCQUFwQixDQUF0QztBQUVIOzs7MkRBQytCO0FBQzVCO0FBQ0E7QUFDQSxnQkFBSTJDLGVBQWUsR0FBRyxDQUF0Qjs7QUFDQSxpQkFBSyxJQUFJN0IsQ0FBQyxHQUFHLENBQWIsRUFBaUJBLENBQUMsR0FBRyxLQUFLZCxxQkFBTCxDQUEyQnNCLE1BQWhELEVBQXlEUixDQUFDLEVBQTFELEVBQThEO0FBQzFELGtCQUFJWSxRQUFRLEdBQUcsS0FBSzFCLHFCQUFMLENBQTJCYyxDQUEzQixFQUE4QixVQUE5QixDQUFmOztBQUNBLGtCQUFJLENBQUNZLFFBQUwsRUFBYztBQUNWaUIsZ0JBQUFBLGVBQWUsR0FBRzdCLENBQWxCO0FBQ0E7QUFDSDtBQUNKOztBQUNELG1CQUFPNkIsZUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3lzIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uL0dhbWVDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheURhdGEge1xyXG4gICAgcHVibGljIGN1cnJlbnRTa2lsbENvdW50OiBudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIGN1cnJlbnRBY3RpdmVTa2lsbENvdW50OiBudW1iZXIgPSAzOyAvL+W9k+WJjea/gOa0u+eahOmBk+WFt+S4quaVsFxyXG4gICAgcHVibGljIGN1cnJlbnRHb2xkQ291bnQgPSAzMDsgLy/lvZPliY3nmoTph5HluIHkuKrmlbBcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbE51bTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50VG93ZXJMZXZlbERhdGE6IE9iamVjdFtdID0gW107XHJcbiAgICAvLyBwdWJsaWMgY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgPSAyOyAvL+W9k+WJjea/gOa0u+eahOW7uumAoOWhlOeahOS9jee9rueahOS4quaVsFxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUN0bCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtXHJcbiAgICAgICAgbGV0IGdhbWVUaW1lID0gdGhpcy5nZXRMb2NhbERhdGEoXCJnYW1lLXRpbWVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIHRpbWVcIiwgZ2FtZVRpbWUpO1xyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJMb2NhbERhdGEoKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgOTk5OTkgKyAnJyk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRMb2NhbERhdGEoJ2FjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50JywgJzInKTtcclxuICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtbGV2ZWwtbnVtXCIsIHRoaXMuY3VycmVudExldmVsTnVtICsgJycpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRvd2VyTGV2ZWxMb2NhbERhdGEodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbik7XHJcblxyXG4gICAgICAgIGlmIChnYW1lVGltZSkge1xyXG4gICAgICAgICAgICAvLyDpppbmrKHov5vlhaXmuLjmiI8uIOWIneWni+WMlua4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICAvL+S4jeaYr+mmluasoei/m+WFpea4uOaIj++8jOmCo+S5iOWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2lsbENvdW50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKCdjdXJyZW50LXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtYWN0aXZlLXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIpKTsgLy/ojrflj5blvZPliY3ph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0gPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJjdXJyZW50LWxldmVsLW51bVwiKSk7IC8v6I635Y+W5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2FjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50JykpOyAvL+iOt+WPluW9k+WJjea/gOa0u+eahOWhlOeahOWfuuW6p+eahOaVsOmHj1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YSA9IEpTT04ucGFyc2UodGhpcy5nZXRMb2NhbERhdGEoXCJ0b3dlci1sZXZlbC1kYXRhXCIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdhbWUtdGltZVwiLCAnMScpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtYWN0aXZlLXNraWxsLWNvdW50XCIsIHRoaXMuY3VycmVudEFjdGl2ZVNraWxsQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1za2lsbC1jb3VudFwiLCB0aGlzLmN1cnJlbnRTa2lsbENvdW50ICsgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRUb3dlckxldmVsTG9jYWxEYXRhKHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRMb2NhbERhdGEoXCJhY3RpdmUtdG93ZXItYnVpbGQtYmFzZS1jb3VudFwiLCB0aGlzLmN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQmFzZUNvdW50ICsgJycpOyAvL+S/neWtmOW9k+WJjea/gOa0u+WhlOeahOWfuuW6p+eahOaVsOmHj1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRUb3dlckxldmVsTG9jYWxEYXRhKGdhbWVDb25maWc6IE9iamVjdCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pys5ZywXHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGdhbWVDb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVDb25maWdbaV0uVHlwZSA9PT0gXCJUb3dlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goZ2FtZUNvbmZpZ1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdCA9IGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIEljb25TcHJ0ZUZyYW1lOiBkYXRhLkljb25TcHJ0ZUZyYW1lLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudExldmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgVG93ZXJUeXBlOiBkYXRhLlRvd2VyVHlwZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpIDwgMikge1xyXG4gICAgICAgICAgICAgICAgb2JqLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9iai5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VycmVudExldmVsID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXRhTGlzdC5wdXNoKG9iailcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJqc29uXCIsIGRhdGFMaXN0KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YSA9IGRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwidG93ZXItbGV2ZWwtZGF0YVwiLCBKU09OLnN0cmluZ2lmeShkYXRhTGlzdCkpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJMb2NhbERhdGEoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBnZXRMb2NhbERhdGEoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5ri45oiP5pWw5o2uJywga2V5KTtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIH1cclxuICAgIHNldExvY2FsRGF0YShrZXk6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUdvbGRDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEdvbGRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBpbml0R29sZENvdW50KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6YeR5biB5Liq5pWwXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnZ29sZC1jb3VudCcsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgIH1cclxuICAgIGFkZEdvbGRDb3VudChnb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCArPSBnb2xkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoJ2dvbGQtY291bnQnLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQsIGdvbGRDb3VudCk7XHJcbiAgICB9XHJcbiAgICBuZXdHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTnVtID0gMDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnY3VycmVudC1sZXZlbC1udW0nLCB0aGlzLmN1cnJlbnRMZXZlbE51bSArICcnKTsvL+S/neWtmOW9k+WJjeeahOWFs+WNoeaVsFxyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCA9IDMwO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcblxyXG4gICAgfVxyXG4gICAgZW50ZXJOZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0rKztcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnY3VycmVudC1sZXZlbC1udW0nLCB0aGlzLmN1cnJlbnRMZXZlbE51bSArICcnKTsvL+S/neWtmOW9k+WJjeeahOWFs+WNoeaVsFxyXG4gICAgfVxyXG4gICAgLy8gZ2V0Q3VycmVudFRvd2VyTGV2ZWxEYXRhKHRvd2VySW5kZXg6IG51bWJlcik6IE9iamVjdCB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW3Rvd2VySW5kZXhdO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gdXBkYXRlQ3VycmVudFRvd2VyTGV2ZWxEYXRhKClcclxuICAgIGFjdGl2ZVRvd2VyKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YVtpbmRleF1bXCJpc0FjdGl2ZVwiXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGFbaW5kZXhdWydjdXJyZW50TGV2ZWwnXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJ0b3dlci1sZXZlbC1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhKSk7XHJcbiAgICB9XHJcbiAgICBnZXRXZWFwb25Jc0FjdGl2ZShpbmRleCkge1xyXG4gICAgICAgIC8v6I635Y+W5aGU5piv5ZCm5r+A5rS75LqGXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2luZGV4XVtcImlzQWN0aXZlXCJdO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCh0b3dlckluZWR4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGFbdG93ZXJJbmVkeF1bJ2N1cnJlbnRMZXZlbCddO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFRvd2Vyc0xvY2FsTGV2ZWxEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb3dlckxldmVsRGF0YTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRvd2VyTG9jYWxMZXZlbCh0b3dlckluZGV4VHlwZTogbnVtYmVyLCBsb2NhbExldmVsOiBudW1iZXIpIHtcclxuICAgICAgICAvL+WNh+e6p+WhlOeahOawuOS5heetiee6p1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW3Rvd2VySW5kZXhUeXBlXVsnY3VycmVudExldmVsJ10gPSBsb2NhbExldmVsO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCd0b3dlci1sZXZlbC1kYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdE5lZWRUb0FjdGl2ZVRvd2VySW5kZXgoKXtcclxuICAgICAgICAvL+W+l+WIsOacgOWQjuS4gOS4qua/gOa0u+WIsOeahGluZGV4XHJcbiAgICAgICAgLy8gbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGxhc3RBY3RpdmVJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5jdXJyZW50VG93ZXJMZXZlbERhdGEubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuY3VycmVudFRvd2VyTGV2ZWxEYXRhW2ldWydpc0FjdGl2ZSddO1xyXG4gICAgICAgICAgICBpZiAoIWlzQWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFzdEFjdGl2ZUluZGV4O1xyXG4gICAgfVxyXG59ICAgIl19