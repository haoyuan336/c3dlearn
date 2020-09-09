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

          this.setLocalData("gold-count", this.currentGoldCount + '');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9EYXRhL1BsYXllckRhdGEudHMiXSwibmFtZXMiOlsiUGxheURhdGEiLCJnYW1lQ3RsIiwiY3VycmVudFNraWxsQ291bnQiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsImN1cnJlbnRHb2xkQ291bnQiLCJnYW1lQ29udHJvbGxlciIsImdhbWVUaW1lIiwiZ2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsRGF0YSIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwia2V5IiwiZ2V0SXRlbSIsImRhdGEiLCJzZXRJdGVtIiwidmFsdWUiLCJ0b1N0cmluZyIsImdvbGRDb3VudCIsIm5vZGUiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYUEsUTtBQUVtQztBQUNkO0FBRTlCLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsZUFKZEMsaUJBSWMsR0FKYyxDQUlkO0FBQUEsZUFIZEMsdUJBR2MsR0FIb0IsQ0FHcEI7QUFBQSxlQUZkQyxnQkFFYyxHQUZLLEVBRUw7QUFBQSxlQURkQyxjQUNjLEdBRG1CLElBQ25CO0FBQ2pCLGVBQUtBLGNBQUwsR0FBc0JKLE9BQXRCLENBRGlCLENBRWpCOztBQUNBLGNBQUlLLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCLFdBQWxCLENBQWY7QUFDQUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkgsUUFBekIsRUFKaUIsQ0FLakI7O0FBQ0EsZUFBS0ksWUFBTCxDQUFrQixZQUFsQixFQUFnQyxLQUFLTixnQkFBTCxHQUF3QixFQUF4RDs7QUFDQSxjQUFJRSxRQUFKLEVBQWM7QUFDVjtBQUNBO0FBQ0EsaUJBQUtKLGlCQUFMLEdBQXlCUyxNQUFNLENBQUMsS0FBS0osWUFBTCxDQUFrQixxQkFBbEIsQ0FBRCxDQUEvQixDQUhVLENBSVY7O0FBQ0EsaUJBQUtKLHVCQUFMLEdBQStCUSxNQUFNLENBQUMsS0FBS0osWUFBTCxDQUFrQiw0QkFBbEIsQ0FBRCxDQUFyQztBQUNBLGlCQUFLSCxnQkFBTCxHQUF3Qk8sTUFBTSxDQUFDLEtBQUtKLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBRCxDQUE5QixDQU5VLENBTXVEO0FBQ3BFLFdBUEQsTUFPTztBQUNILGlCQUFLRyxZQUFMLENBQWtCLFdBQWxCLEVBQStCLEdBQS9CO0FBQ0EsaUJBQUtBLFlBQUwsQ0FBa0IsNEJBQWxCLEVBQWdELEtBQUtQLHVCQUFMLEdBQStCLEVBQS9FO0FBQ0EsaUJBQUtPLFlBQUwsQ0FBa0IscUJBQWxCLEVBQXlDLEtBQUtSLGlCQUFMLEdBQXlCLEVBQWxFO0FBQ0EsaUJBQUtRLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsS0FBS04sZ0JBQUwsR0FBd0IsRUFBeEQ7QUFDSDtBQUNKOzs7OzJDQUNnQjtBQUNiUSxZQUFBQSxZQUFZLENBQUNDLEtBQWI7QUFDSDs7O3VDQUNZQyxHLEVBQWE7QUFDdEJOLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JLLEdBQXRCO0FBQ0EsbUJBQU9GLFlBQVksQ0FBQ0csT0FBYixDQUFxQkQsR0FBckIsQ0FBUDtBQUNIOzs7dUNBQ1lBLEcsRUFBYUUsSSxFQUFjO0FBQ3BDSixZQUFBQSxZQUFZLENBQUNLLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCRSxJQUExQjtBQUNIOzs7MENBQ2VFLEssRUFBZTtBQUMzQixpQkFBS1IsWUFBTCxDQUFrQixZQUFsQixFQUFnQ1EsS0FBSyxDQUFDQyxRQUFOLEVBQWhDO0FBQ0g7OztnREFDNkI7QUFDMUIsbUJBQU8sS0FBS2YsZ0JBQVo7QUFDSDs7O3VDQUNZZ0IsUyxFQUFtQjtBQUM1QixpQkFBS2hCLGdCQUFMLElBQXlCZ0IsU0FBekI7QUFDQSxpQkFBS1YsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxLQUFLTixnQkFBTCxHQUF3QixFQUF4RDtBQUNBLGlCQUFLQyxjQUFMLENBQW9CZ0IsSUFBcEIsQ0FBeUJDLElBQXpCLENBQThCLG1CQUE5QixFQUFtRCxLQUFLbEIsZ0JBQXhELEVBQTBFZ0IsU0FBMUU7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN5cyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXlEYXRhIHtcclxuICAgIHB1YmxpYyBjdXJyZW50U2tpbGxDb3VudDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBjdXJyZW50QWN0aXZlU2tpbGxDb3VudDogbnVtYmVyID0gMzsgLy/lvZPliY3mv4DmtLvnmoTpgZPlhbfkuKrmlbBcclxuICAgIHB1YmxpYyBjdXJyZW50R29sZENvdW50ID0gMzA7IC8v5b2T5YmN55qE6YeR5biB5Liq5pWwXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVDdGwpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbVxyXG4gICAgICAgIGxldCBnYW1lVGltZSA9IHRoaXMuZ2V0TG9jYWxEYXRhKFwiZ2FtZS10aW1lXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSB0aW1lXCIsIGdhbWVUaW1lKTtcclxuICAgICAgICAvLyB0aGlzLmNsZWFyTG9jYWxEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgICAgICBpZiAoZ2FtZVRpbWUpIHtcclxuICAgICAgICAgICAgLy8g6aaW5qyh6L+b5YWl5ri45oiPLiDliJ3lp4vljJbmuLjmiI/mlbDmja5cclxuICAgICAgICAgICAgLy/kuI3mmK/pppbmrKHov5vlhaXmuLjmiI/vvIzpgqPkuYjliJ3lp4vljJbkuIDkupvmuLjmiI/mlbDmja5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2tpbGxDb3VudCA9IE51bWJlcih0aGlzLmdldExvY2FsRGF0YSgnY3VycmVudC1za2lsbC1jb3VudCcpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmVTa2lsbENvdW50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKCdjdXJyZW50LWFjdGl2ZS1za2lsbC1jb3VudCcpKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R29sZENvdW50ID0gTnVtYmVyKHRoaXMuZ2V0TG9jYWxEYXRhKFwiZ29sZC1jb3VudFwiKSk7IC8v6I635Y+W5b2T5YmN6YeR5biB5Liq5pWwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnYW1lLXRpbWVcIiwgJzEnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJjdXJyZW50LWFjdGl2ZS1za2lsbC1jb3VudFwiLCB0aGlzLmN1cnJlbnRBY3RpdmVTa2lsbENvdW50ICsgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImN1cnJlbnQtc2tpbGwtY291bnRcIiwgdGhpcy5jdXJyZW50U2tpbGxDb3VudCArICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoXCJnb2xkLWNvdW50XCIsIHRoaXMuY3VycmVudEdvbGRDb3VudCArICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckxvY2FsRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGdldExvY2FsRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmuLjmiI/mlbDmja4nLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxEYXRhKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlR29sZENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldExvY2FsRGF0YShcImdvbGQtY291bnRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50R29sZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEdvbGRDb3VudDtcclxuICAgIH1cclxuICAgIGFkZEdvbGRDb3VudChnb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRDb3VudCArPSBnb2xkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbERhdGEoJ2dvbGQtY291bnQnLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQgKyAnJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCB0aGlzLmN1cnJlbnRHb2xkQ291bnQsIGdvbGRDb3VudCk7XHJcbiAgICB9XHJcbn0gICAiXX0=