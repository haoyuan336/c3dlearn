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
        function PlayData(gameCtl) {
          _classCallCheck(this, PlayData);

          this.currentSkillCount = 2;
          this.currentActiveSkillCount = 3;
          this.currentGoldCount = 30;
          this.gameController = null;
          this.gameController = gameCtl; // localStorage.setItem

          var gameTime = this.getLocalData("game-time");
          console.log("game time", gameTime); // this.clearLocalData();

          this.setLocalData("gold-count", 9999 + ''); // this.setLocalData()

          if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count')); // console.log()

            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数
          } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsRGF0YSIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsImRhdGEiLCJzZXRJdGVtIiwidmFsdWUiLCJ0b1N0cmluZyIsImdvbGRDb3VudCIsIm5vZGUiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYUEsUTtBQUVtQztBQUNkO0FBRTlCLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsZUFKZEMsaUJBSWMsR0FKYyxDQUlkO0FBQUEsZUFIZEMsdUJBR2MsR0FIb0IsQ0FHcEI7QUFBQSxlQUZkQyxnQkFFYyxHQUZLLEVBRUw7QUFBQSxlQURkQyxjQUNjLEdBRG1CLElBQ25CO0FBQ2pCLGVBQUtBLGNBQUwsR0FBc0JKLE9BQXRCLENBRGlCLENBRWpCOztBQUNBLGNBQUlLLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCLFdBQWxCLENBQWY7QUFDQUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkgsUUFBekIsRUFKaUIsQ0FLakI7O0FBQ0EsZUFBS0ksWUFBTCxDQUFrQixZQUFsQixFQUFnQyxPQUFPLEVBQXZDLEVBTmlCLENBT2pCOztBQUNBLGNBQUlKLFFBQUosRUFBYztBQUNWO0FBQ0E7QUFDQSxpQkFBS0osaUJBQUwsR0FBeUJTLE1BQU0sQ0FBQyxLQUFLSixZQUFMLENBQWtCLHFCQUFsQixDQUFELENBQS9CLENBSFUsQ0FJVjs7QUFDQSxpQkFBS0osdUJBQUwsR0FBK0JRLE1BQU0sQ0FBQyxLQUFLSixZQUFMLENBQWtCLDRCQUFsQixDQUFELENBQXJDO0FBQ0EsaUJBQUtILGdCQUFMLEdBQXdCTyxNQUFNLENBQUMsS0FBS0osWUFBTCxDQUFrQixZQUFsQixDQUFELENBQTlCLENBTlUsQ0FNdUQ7QUFDcEUsV0FQRCxNQU9PO0FBQ0gsaUJBQUtHLFlBQUwsQ0FBa0IsV0FBbEIsRUFBK0IsR0FBL0I7QUFDQSxpQkFBS0EsWUFBTCxDQUFrQiw0QkFBbEIsRUFBZ0QsS0FBS1AsdUJBQUwsR0FBK0IsRUFBL0U7QUFDQSxpQkFBS08sWUFBTCxDQUFrQixxQkFBbEIsRUFBeUMsS0FBS1IsaUJBQUwsR0FBeUIsRUFBbEU7QUFDQSxpQkFBS1EsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxLQUFLTixnQkFBTCxHQUF3QixFQUF4RDtBQUNIO0FBQ0o7Ozs7MkNBQ2dCO0FBQ2JRLFlBQUFBLFlBQVksQ0FBQ0MsS0FBYjtBQUNIOzs7dUNBQ1lDLEcsRUFBYTtBQUN0Qk4sWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkssR0FBdEI7QUFDQSxtQkFBT0YsWUFBWSxDQUFDRyxPQUFiLENBQXFCRCxHQUFyQixDQUFQO0FBQ0g7Ozt1Q0FDWUEsRyxFQUFhRSxJLEVBQWM7QUFDcENKLFlBQUFBLFlBQVksQ0FBQ0ssT0FBYixDQUFxQkgsR0FBckIsRUFBMEJFLElBQTFCO0FBQ0g7OzswQ0FDZUUsSyxFQUFlO0FBQzNCLGlCQUFLUixZQUFMLENBQWtCLFlBQWxCLEVBQWdDUSxLQUFLLENBQUNDLFFBQU4sRUFBaEM7QUFDSDs7O2dEQUM2QjtBQUMxQixtQkFBTyxLQUFLZixnQkFBWjtBQUNIOzs7dUNBQ1lnQixTLEVBQW1CO0FBQzVCLGlCQUFLaEIsZ0JBQUwsSUFBeUJnQixTQUF6QjtBQUNBLGlCQUFLVixZQUFMLENBQWtCLFlBQWxCLEVBQWdDLEtBQUtOLGdCQUFMLEdBQXdCLEVBQXhEO0FBQ0EsaUJBQUtDLGNBQUwsQ0FBb0JnQixJQUFwQixDQUF5QkMsSUFBekIsQ0FBOEIsbUJBQTlCLEVBQW1ELEtBQUtsQixnQkFBeEQsRUFBMEVnQixTQUExRTtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3lzIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uL0dhbWVDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheURhdGEge1xyXG4gICAgcHVibGljIGN1cnJlbnRTa2lsbENvdW50OiBudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIGN1cnJlbnRBY3RpdmVTa2lsbENvdW50OiBudW1iZXIgPSAzOyAvL+W9k+WJjea/gOa0u+eahOmBk+WFt+S4quaVsFxyXG4gICAgcHVibGljIGN1cnJlbnRHb2xkQ291bnQgPSAzMDsgLy/lvZPliY3nmoTph5HluIHkuKrmlbBcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUN0bCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtXHJcbiAgICAgICAgbGV0IGdhbWVUaW1lID0gdGhpcy5nZXRMb2NhbERhdGEoXCJnYW1lLXRpbWVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIHRpbWVcIiwgZ2FtZVRpbWUpO1xyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJMb2NhbERhdGEoKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgOTk5OSArICcnKTtcclxuICAgICAgICAvLyB0aGlzLnNldExvY2FsRGF0YSgpXHJcbiAgICAgICAgaWYgKGdhbWVUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vIOmmluasoei/m+WFpea4uOaIjy4g5Yid5aeL5YyW5ri45oiP5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5LiN5piv6aaW5qyh6L+b5YWl5ri45oiP77yM6YKj5LmI5Yid5aeL5YyW5LiA5Lqb5ri45oiP5pWw5o2uXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNraWxsQ291bnQgPSBOdW1iZXIodGhpcy5nZXRMb2NhbERhdGEoJ2N1cnJlbnQtc2tpbGwtY291bnQnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnQnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YShcImdvbGQtY291bnRcIikpOyAvL+iOt+WPluW9k+WJjemHkeW4geS4quaVsFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIsICcxJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiY3VycmVudC1hY3RpdmUtc2tpbGwtY291bnRcIiwgdGhpcy5jdXJyZW50QWN0aXZlU2tpbGxDb3VudCArICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LXNraWxsLWNvdW50XCIsIHRoaXMuY3VycmVudFNraWxsQ291bnQgKyAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYXJMb2NhbERhdGEoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBnZXRMb2NhbERhdGEoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5ri45oiP5pWw5o2uJywga2V5KTtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIH1cclxuICAgIHNldExvY2FsRGF0YShrZXk6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUdvbGRDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEdvbGRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBhZGRHb2xkQ291bnQoZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKz0gZ29sZENvdW50O1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxEYXRhKCdnb2xkLWNvdW50JywgdGhpcy5jdXJyZW50R29sZENvdW50ICsgJycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgdGhpcy5jdXJyZW50R29sZENvdW50LCBnb2xkQ291bnQpO1xyXG4gICAgfVxyXG59ICAgIl19