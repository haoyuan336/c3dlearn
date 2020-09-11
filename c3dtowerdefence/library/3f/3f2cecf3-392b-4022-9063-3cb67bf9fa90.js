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

          if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count')); // console.log()

            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数
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
        }]);

        return PlayData;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImN1cnJlbnRMZXZlbE51bSIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsRGF0YSIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsImRhdGEiLCJzZXRJdGVtIiwidmFsdWUiLCJ0b1N0cmluZyIsImdvbGRDb3VudCIsIm5vZGUiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYUEsUTtBQUVtQztBQUNkO0FBRzlCO0FBQ0EsMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxlQU5kQyxpQkFNYyxHQU5jLENBTWQ7QUFBQSxlQUxkQyx1QkFLYyxHQUxvQixDQUtwQjtBQUFBLGVBSmRDLGdCQUljLEdBSkssRUFJTDtBQUFBLGVBSGRDLGNBR2MsR0FIbUIsSUFHbkI7QUFBQSxlQUZkQyxlQUVjLEdBRlksQ0FFWjtBQUNqQixlQUFLRCxjQUFMLEdBQXNCSixPQUF0QixDQURpQixDQUVqQjs7QUFDQSxjQUFJTSxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixXQUFsQixDQUFmO0FBQ0FDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJILFFBQXpCLEVBSmlCLENBS2pCOztBQUNBLGVBQUtJLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsT0FBTyxFQUF2QztBQUNBLGVBQUtBLFlBQUwsQ0FBa0IsK0JBQWxCLEVBQW1ELEdBQW5EOztBQUNBLGNBQUlKLFFBQUosRUFBYztBQUNWO0FBQ0E7QUFDQSxpQkFBS0wsaUJBQUwsR0FBeUJVLE1BQU0sQ0FBQyxLQUFLSixZQUFMLENBQWtCLHFCQUFsQixDQUFELENBQS9CLENBSFUsQ0FJVjs7QUFDQSxpQkFBS0wsdUJBQUwsR0FBK0JTLE1BQU0sQ0FBQyxLQUFLSixZQUFMLENBQWtCLDRCQUFsQixDQUFELENBQXJDO0FBQ0EsaUJBQUtKLGdCQUFMLEdBQXdCUSxNQUFNLENBQUMsS0FBS0osWUFBTCxDQUFrQixZQUFsQixDQUFELENBQTlCLENBTlUsQ0FNdUQ7QUFDakU7QUFDSCxXQVJELE1BUU87QUFDSCxpQkFBS0csWUFBTCxDQUFrQixXQUFsQixFQUErQixHQUEvQjtBQUNBLGlCQUFLQSxZQUFMLENBQWtCLDRCQUFsQixFQUFnRCxLQUFLUix1QkFBTCxHQUErQixFQUEvRTtBQUNBLGlCQUFLUSxZQUFMLENBQWtCLHFCQUFsQixFQUF5QyxLQUFLVCxpQkFBTCxHQUF5QixFQUFsRTtBQUNBLGlCQUFLUyxZQUFMLENBQWtCLFlBQWxCLEVBQWdDLEtBQUtQLGdCQUFMLEdBQXdCLEVBQXhELEVBSkcsQ0FLSDtBQUNIO0FBQ0o7Ozs7MkNBQ2dCO0FBQ2JTLFlBQUFBLFlBQVksQ0FBQ0MsS0FBYjtBQUNIOzs7dUNBQ1lDLEcsRUFBYTtBQUN0Qk4sWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkssR0FBdEI7QUFDQSxtQkFBT0YsWUFBWSxDQUFDRyxPQUFiLENBQXFCRCxHQUFyQixDQUFQO0FBQ0g7Ozt1Q0FDWUEsRyxFQUFhRSxJLEVBQWM7QUFDcENKLFlBQUFBLFlBQVksQ0FBQ0ssT0FBYixDQUFxQkgsR0FBckIsRUFBMEJFLElBQTFCO0FBQ0g7OzswQ0FDZUUsSyxFQUFlO0FBQzNCLGlCQUFLUixZQUFMLENBQWtCLFlBQWxCLEVBQWdDUSxLQUFLLENBQUNDLFFBQU4sRUFBaEM7QUFDSDs7O2dEQUM2QjtBQUMxQixtQkFBTyxLQUFLaEIsZ0JBQVo7QUFDSDs7O3VDQUNZaUIsUyxFQUFtQjtBQUM1QixpQkFBS2pCLGdCQUFMLElBQXlCaUIsU0FBekI7QUFDQSxpQkFBS1YsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxLQUFLUCxnQkFBTCxHQUF3QixFQUF4RDtBQUNBLGlCQUFLQyxjQUFMLENBQW9CaUIsSUFBcEIsQ0FBeUJDLElBQXpCLENBQThCLG1CQUE5QixFQUFtRCxLQUFLbkIsZ0JBQXhELEVBQTBFaUIsU0FBMUU7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN5cyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXlEYXRhIHtcclxuICAgIHB1YmxpYyBjdXJyZW50U2tpbGxDb3VudDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBjdXJyZW50QWN0aXZlU2tpbGxDb3VudDogbnVtYmVyID0gMzsgLy/lvZPliY3mv4DmtLvnmoTpgZPlhbfkuKrmlbBcclxuICAgIHB1YmxpYyBjdXJyZW50R29sZENvdW50ID0gMzA7IC8v5b2T5YmN55qE6YeR5biB5Liq5pWwXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWxOdW06IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQgPSAyOyAvL+W9k+WJjea/gOa0u+eahOW7uumAoOWhlOeahOS9jee9rueahOS4quaVsFxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUN0bCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtXHJcbiAgICAgICAgbGV0IGdhbWVUaW1lID0gdGhpcy5nZXRMb2NhbERhdGEoXCJnYW1lLXRpbWVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIHRpbWVcIiwgZ2FtZVRpbWUpO1xyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJMb2NhbERhdGEoKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgOTk5OSArICcnKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnQnLCAnMicpO1xyXG4gICAgICAgIGlmIChnYW1lVGltZSkge1xyXG4gICAgICAgICAgICAvLyDpppbmrKHov5vlhaXmuLjmiI8uIOWIneWni+WMlua4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICAvL+S4jeaYr+mmluasoei/m+WFpea4uOaIj++8jOmCo+S5iOWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2lsbENvdW50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKCdjdXJyZW50LXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtYWN0aXZlLXNraWxsLWNvdW50JykpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIpKTsgLy/ojrflj5blvZPliY3ph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnYWN0aXZlLXRvd2VyLWJ1aWxkLWJhc2UtY291bnQnKSk7IC8v6I635Y+W5b2T5YmN5r+A5rS755qE5aGU55qE5Z+65bqn55qE5pWw6YePXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnYW1lLXRpbWVcIiwgJzEnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LWFjdGl2ZS1za2lsbC1jb3VudFwiLCB0aGlzLmN1cnJlbnRBY3RpdmVTa2lsbENvdW50ICsgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtc2tpbGwtY291bnRcIiwgdGhpcy5jdXJyZW50U2tpbGxDb3VudCArICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRMb2NhbERhdGEoXCJhY3RpdmUtdG93ZXItYnVpbGQtYmFzZS1jb3VudFwiLCB0aGlzLmN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQmFzZUNvdW50ICsgJycpOyAvL+S/neWtmOW9k+WJjea/gOa0u+WhlOeahOWfuuW6p+eahOaVsOmHj1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFyTG9jYWxEYXRhKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxEYXRhKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlua4uOaIj+aVsOaNricsIGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhbERhdGEoa2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVHb2xkQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRHb2xkQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50R29sZENvdW50O1xyXG4gICAgfVxyXG4gICAgYWRkR29sZENvdW50KGdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ICs9IGdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YSgnZ29sZC1jb3VudCcsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInVwZGF0ZS1nb2xkLWxhYmVsXCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCwgZ29sZENvdW50KTtcclxuICAgIH1cclxufSAgICJdfQ==