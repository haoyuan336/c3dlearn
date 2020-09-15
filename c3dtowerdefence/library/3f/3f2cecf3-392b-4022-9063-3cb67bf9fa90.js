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
          this.gameController = gameCtl; // localStorage.setItem

          var gameTime = this.getLocalData("game-time");
          console.log("game time", gameTime); // this.clearLocalData();

          this.setLocalData("gold-count", 9999 + '');
          this.setLocalData('active-tower-build-base-count', '2');
          this.setLocalData("current-level-num", this.currentLevelNum + '');

          if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count')); // console.log()

            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数

            this.currentLevelNum = Number(this.getLocalData("current-level-num")); //获取当前的关卡数
            // this.currentActiveTowerBuildBaseCount = Number(this.getLocalData('active-tower-build-base-count')); //获取当前激活的塔的基座的数量
          } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + ''); // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
          }
        }

        _createClass(PlayData, [{
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
          key: "addGoldCount",
          value: function addGoldCount(goldCount) {
            this.currentGoldCount += goldCount;
            this.setLocalData('gold-count', this.currentGoldCount + '');
            this.gameController.node.emit("update-gold-label", this.currentGoldCount, goldCount);
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            this.currentLevelNum++;
            this.setLocalData('current-level-num', this.currentLevelNum + ''); //保存当前的关卡数
          }
        }]);

        return PlayData;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImN1cnJlbnRMZXZlbE51bSIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsRGF0YSIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsImRhdGEiLCJzZXRJdGVtIiwidmFsdWUiLCJ0b1N0cmluZyIsImdvbGRDb3VudCIsIm5vZGUiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYUEsUTtBQUVtQztBQUNkO0FBRzlCO0FBQ0EsMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxlQU5kQyxpQkFNYyxHQU5jLENBTWQ7QUFBQSxlQUxkQyx1QkFLYyxHQUxvQixDQUtwQjtBQUFBLGVBSmRDLGdCQUljLEdBSkssRUFJTDtBQUFBLGVBSGRDLGNBR2MsR0FIbUIsSUFHbkI7QUFBQSxlQUZkQyxlQUVjLEdBRlksQ0FFWjtBQUNqQixlQUFLRCxjQUFMLEdBQXNCSixPQUF0QixDQURpQixDQUVqQjs7QUFDQSxjQUFJTSxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixXQUFsQixDQUFmO0FBQ0FDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJILFFBQXpCLEVBSmlCLENBS2pCOztBQUNBLGVBQUtJLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsT0FBTyxFQUF2QztBQUNBLGVBQUtBLFlBQUwsQ0FBa0IsK0JBQWxCLEVBQW1ELEdBQW5EO0FBQ0EsZUFBS0EsWUFBTCxDQUFrQixtQkFBbEIsRUFBdUMsS0FBS0wsZUFBTCxHQUF1QixFQUE5RDs7QUFDQSxjQUFJQyxRQUFKLEVBQWM7QUFDVjtBQUNBO0FBQ0EsaUJBQUtMLGlCQUFMLEdBQXlCVSxNQUFNLENBQUMsS0FBS0osWUFBTCxDQUFrQixxQkFBbEIsQ0FBRCxDQUEvQixDQUhVLENBSVY7O0FBQ0EsaUJBQUtMLHVCQUFMLEdBQStCUyxNQUFNLENBQUMsS0FBS0osWUFBTCxDQUFrQiw0QkFBbEIsQ0FBRCxDQUFyQztBQUNBLGlCQUFLSixnQkFBTCxHQUF3QlEsTUFBTSxDQUFDLEtBQUtKLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBRCxDQUE5QixDQU5VLENBTXVEOztBQUNqRSxpQkFBS0YsZUFBTCxHQUF1Qk0sTUFBTSxDQUFDLEtBQUtKLFlBQUwsQ0FBa0IsbUJBQWxCLENBQUQsQ0FBN0IsQ0FQVSxDQU82RDtBQUN2RTtBQUNILFdBVEQsTUFTTztBQUNILGlCQUFLRyxZQUFMLENBQWtCLFdBQWxCLEVBQStCLEdBQS9CO0FBQ0EsaUJBQUtBLFlBQUwsQ0FBa0IsNEJBQWxCLEVBQWdELEtBQUtSLHVCQUFMLEdBQStCLEVBQS9FO0FBQ0EsaUJBQUtRLFlBQUwsQ0FBa0IscUJBQWxCLEVBQXlDLEtBQUtULGlCQUFMLEdBQXlCLEVBQWxFO0FBQ0EsaUJBQUtTLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsS0FBS1AsZ0JBQUwsR0FBd0IsRUFBeEQsRUFKRyxDQUtIO0FBQ0g7QUFDSjs7OzsyQ0FDZ0I7QUFDYlMsWUFBQUEsWUFBWSxDQUFDQyxLQUFiO0FBQ0g7Ozt1Q0FDWUMsRyxFQUFhO0FBQ3RCTixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSyxHQUF0QjtBQUNBLG1CQUFPRixZQUFZLENBQUNHLE9BQWIsQ0FBcUJELEdBQXJCLENBQVA7QUFDSDs7O3VDQUNZQSxHLEVBQWFFLEksRUFBYztBQUNwQ0osWUFBQUEsWUFBWSxDQUFDSyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQkUsSUFBMUI7QUFDSDs7OzBDQUNlRSxLLEVBQWU7QUFDM0IsaUJBQUtSLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0NRLEtBQUssQ0FBQ0MsUUFBTixFQUFoQztBQUNIOzs7Z0RBQzZCO0FBQzFCLG1CQUFPLEtBQUtoQixnQkFBWjtBQUNIOzs7dUNBQ1lpQixTLEVBQW1CO0FBQzVCLGlCQUFLakIsZ0JBQUwsSUFBeUJpQixTQUF6QjtBQUNBLGlCQUFLVixZQUFMLENBQWtCLFlBQWxCLEVBQWdDLEtBQUtQLGdCQUFMLEdBQXdCLEVBQXhEO0FBQ0EsaUJBQUtDLGNBQUwsQ0FBb0JpQixJQUFwQixDQUF5QkMsSUFBekIsQ0FBOEIsbUJBQTlCLEVBQW1ELEtBQUtuQixnQkFBeEQsRUFBMEVpQixTQUExRTtBQUNIOzs7MkNBQ2U7QUFDWixpQkFBS2YsZUFBTDtBQUNBLGlCQUFLSyxZQUFMLENBQWtCLG1CQUFsQixFQUF1QyxLQUFLTCxlQUFMLEdBQXVCLEVBQTlELEVBRlksQ0FFc0Q7QUFDckUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzeXMgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5RGF0YSB7XHJcbiAgICBwdWJsaWMgY3VycmVudFNraWxsQ291bnQ6IG51bWJlciA9IDI7XHJcbiAgICBwdWJsaWMgY3VycmVudEFjdGl2ZVNraWxsQ291bnQ6IG51bWJlciA9IDM7IC8v5b2T5YmN5r+A5rS755qE6YGT5YW35Liq5pWwXHJcbiAgICBwdWJsaWMgY3VycmVudEdvbGRDb3VudCA9IDMwOyAvL+W9k+WJjeeahOmHkeW4geS4quaVsFxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIGN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQmFzZUNvdW50ID0gMjsgLy/lvZPliY3mv4DmtLvnmoTlu7rpgKDloZTnmoTkvY3nva7nmoTkuKrmlbBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVDdGwpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbVxyXG4gICAgICAgIGxldCBnYW1lVGltZSA9IHRoaXMuZ2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSB0aW1lXCIsIGdhbWVUaW1lKTtcclxuICAgICAgICAvLyB0aGlzLmNsZWFyTG9jYWxEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIDk5OTkgKyAnJyk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoJ2FjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50JywgJzInKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtbGV2ZWwtbnVtXCIsIHRoaXMuY3VycmVudExldmVsTnVtICsgJycpO1xyXG4gICAgICAgIGlmIChnYW1lVGltZSkge1xyXG4gICAgICAgICAgICAvLyDpppbmrKHov5vlhaXmuLjmiI8uIOWIneWni+WMlua4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICAvL+S4jeaYr+mmluasoei/m+WFpea4uOaIj++8jOmCo+S5iOWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2lsbENvdW50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKCdjdXJyZW50LXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtYWN0aXZlLXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIpKTsgLy/ojrflj5blvZPliY3ph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxOdW0gPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJjdXJyZW50LWxldmVsLW51bVwiKSk7IC8v6I635Y+W5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2FjdGl2ZS10b3dlci1idWlsZC1iYXNlLWNvdW50JykpOyAvL+iOt+WPluW9k+WJjea/gOa0u+eahOWhlOeahOWfuuW6p+eahOaVsOmHj1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIsICcxJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnRcIiwgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCArICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LXNraWxsLWNvdW50XCIsIHRoaXMuY3VycmVudFNraWxsQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0TG9jYWxEYXRhKFwiYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnRcIiwgdGhpcy5jdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCArICcnKTsgLy/kv53lrZjlvZPliY3mv4DmtLvloZTnmoTln7rluqfnmoTmlbDph49cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckxvY2FsRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGdldExvY2FsRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmuLjmiI/mlbDmja4nLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxEYXRhKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlR29sZENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50R29sZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEdvbGRDb3VudDtcclxuICAgIH1cclxuICAgIGFkZEdvbGRDb3VudChnb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCArPSBnb2xkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoJ2dvbGQtY291bnQnLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQsIGdvbGRDb3VudCk7XHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTnVtICsrO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdjdXJyZW50LWxldmVsLW51bScsIHRoaXMuY3VycmVudExldmVsTnVtICsgJycpOy8v5L+d5a2Y5b2T5YmN55qE5YWz5Y2h5pWwXHJcbiAgICB9XHJcbn0gICAiXX0=