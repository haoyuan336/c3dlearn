System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimationComponent, Tween, v3, find, _dec, _class, _temp, _crd, ccclass, property, WinGoldAnimEffect;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      find = _cc.find;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2ee3e+XrHFJlYuGFP9mqdRS", "WinGoldAnimEffect", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WinGoldAnimEffect", WinGoldAnimEffect = (_dec = ccclass('WinGoldAnimEffect'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WinGoldAnimEffect, _Component);

        function WinGoldAnimEffect() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WinGoldAnimEffect);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WinGoldAnimEffect)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.goldCount = 0;
          _this.skelete = null;
          return _this;
        }

        _createClass(WinGoldAnimEffect, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            //开始播放动画
            var skelete = this.node.getComponent(SkeletalAnimationComponent);
            this.skelete = skelete;

            if (skelete) {
              var defaultAnim = skelete.defaultClip; // defaultAnim.

              var state = skelete.getState(defaultAnim.name);
              state.repeatCount = 1;
              skelete.play(defaultAnim.name);
            } // this.node.eulerAngles = v3(0, Math.random() * 360, 0);
            // this.scheduleOnce(()=>{
            // },2);

          }
        }, {
          key: "setGoldCount",
          value: function setGoldCount(goldCount, gameController) {
            var _this2 = this;

            //设置金币个数
            // console.log("skelete", this.skelete);
            // let skelete = this.node.getComponent(SkeletalAnimationComponent);
            // if (skelete) {
            //     let animClip = skelete.clips[1];
            //     // console.log('anim clip name', animClip.name);
            //     let state = skelete.getState(animClip.name);
            //     state.repeatCount = 1;
            //     skelete.play(animClip.name);
            // }
            var dis = v3(this.node.position).subtract(v3(-25, 10, 0)).length();
            var speed = 50;
            var time = dis / speed;
            this.goldCount = goldCount;
            find("GameController").emit("play-audio", "金币掉落1");
            var tw = new Tween(this.node);
            tw.delay(3);
            tw.to(time, {
              // eulerAngles: v3(0, 0, 0),
              position: v3(-25, 10, 0)
            });
            tw.call(function () {
              // find("GameController").emit("")
              gameController.playerData.addGoldCount(goldCount);

              _this2.node.destroy();
            });
            tw.start();
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return WinGoldAnimEffect;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiVHdlZW4iLCJ2MyIsImZpbmQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXaW5Hb2xkQW5pbUVmZmVjdCIsImdvbGRDb3VudCIsInNrZWxldGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZGVmYXVsdEFuaW0iLCJkZWZhdWx0Q2xpcCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5IiwiZ2FtZUNvbnRyb2xsZXIiLCJkaXMiLCJwb3NpdGlvbiIsInN1YnRyYWN0IiwibGVuZ3RoIiwic3BlZWQiLCJ0aW1lIiwiZW1pdCIsInR3IiwiZGVsYXkiLCJ0byIsImNhbGwiLCJwbGF5ZXJEYXRhIiwiYWRkR29sZENvdW50IiwiZGVzdHJveSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE0QkMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUVyRUMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7bUNBR0pDLGlCLFdBRFpGLE9BQU8sQ0FBQyxtQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0dHLFMsR0FBb0IsQztnQkFDcEJDLE8sR0FBc0MsSTs7Ozs7O2tDQUVyQztBQUNKO0FBQ0E7QUFDQSxnQkFBSUEsT0FBTyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlYsMEJBQXZCLENBQWQ7QUFDQSxpQkFBS1EsT0FBTCxHQUFlQSxPQUFmOztBQUNBLGdCQUFJQSxPQUFKLEVBQWE7QUFDVCxrQkFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUNJLFdBQTFCLENBRFMsQ0FFVDs7QUFFQSxrQkFBSUMsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJILFdBQVcsQ0FBQ0ksSUFBN0IsQ0FBWjtBQUNBRixjQUFBQSxLQUFLLENBQUNHLFdBQU4sR0FBb0IsQ0FBcEI7QUFDQVIsY0FBQUEsT0FBTyxDQUFDUyxJQUFSLENBQWFOLFdBQVcsQ0FBQ0ksSUFBekI7QUFDSCxhQVpHLENBYUo7QUFDQTtBQUVBOztBQUVIOzs7dUNBQ1lSLFMsRUFBbUJXLGMsRUFBZ0M7QUFBQTs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBSUMsR0FBRyxHQUFHakIsRUFBRSxDQUFDLEtBQUtPLElBQUwsQ0FBVVcsUUFBWCxDQUFGLENBQXVCQyxRQUF2QixDQUFnQ25CLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBVixDQUFsQyxFQUFnRG9CLE1BQWhELEVBQVY7QUFDQSxnQkFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxnQkFBSUMsSUFBSSxHQUFHTCxHQUFHLEdBQUdJLEtBQWpCO0FBQ0EsaUJBQUtoQixTQUFMLEdBQWlCQSxTQUFqQjtBQUVBSixZQUFBQSxJQUFJLENBQUMsZ0JBQUQsQ0FBSixDQUF1QnNCLElBQXZCLENBQTRCLFlBQTVCLEVBQTBDLE9BQTFDO0FBRUEsZ0JBQUlDLEVBQUUsR0FBRyxJQUFJekIsS0FBSixDQUFVLEtBQUtRLElBQWYsQ0FBVDtBQUNBaUIsWUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsQ0FBVDtBQUNBRCxZQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTUosSUFBTixFQUFZO0FBQ1I7QUFDQUosY0FBQUEsUUFBUSxFQUFFbEIsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sRUFBVSxDQUFWO0FBRkosYUFBWjtBQUlBd0IsWUFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWO0FBQ0FYLGNBQUFBLGNBQWMsQ0FBQ1ksVUFBZixDQUEwQkMsWUFBMUIsQ0FBdUN4QixTQUF2Qzs7QUFDQSxjQUFBLE1BQUksQ0FBQ0UsSUFBTCxDQUFVdUIsT0FBVjtBQUNILGFBSkQ7QUFLQU4sWUFBQUEsRUFBRSxDQUFDTyxLQUFIO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUExRG1DbEMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFR3ZWVuLCB2MywgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2luR29sZEFuaW1FZmZlY3QnKVxyXG5leHBvcnQgY2xhc3MgV2luR29sZEFuaW1FZmZlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBnb2xkQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2tlbGV0ZTogU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8v5byA5aeL5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgbGV0IHNrZWxldGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLnNrZWxldGUgPSBza2VsZXRlO1xyXG4gICAgICAgIGlmIChza2VsZXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxldGUuZGVmYXVsdENsaXA7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltLlxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZS5nZXRTdGF0ZShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICAgICAgc3RhdGUucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBza2VsZXRlLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIE1hdGgucmFuZG9tKCkgKiAzNjAsIDApO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcblxyXG4gICAgICAgIC8vIH0sMik7XHJcblxyXG4gICAgfVxyXG4gICAgc2V0R29sZENvdW50KGdvbGRDb3VudDogbnVtYmVyLCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAvL+iuvue9rumHkeW4geS4quaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2tlbGV0ZVwiLCB0aGlzLnNrZWxldGUpO1xyXG4gICAgICAgIC8vIGxldCBza2VsZXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gaWYgKHNrZWxldGUpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGFuaW1DbGlwID0gc2tlbGV0ZS5jbGlwc1sxXTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ2FuaW0gY2xpcCBuYW1lJywgYW5pbUNsaXAubmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBzdGF0ZSA9IHNrZWxldGUuZ2V0U3RhdGUoYW5pbUNsaXAubmFtZSk7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAvLyAgICAgc2tlbGV0ZS5wbGF5KGFuaW1DbGlwLm5hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygtMjUsIDEwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gNTA7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBkaXMgLyBzcGVlZDtcclxuICAgICAgICB0aGlzLmdvbGRDb3VudCA9IGdvbGRDb3VudDtcclxuXHJcbiAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIFwi6YeR5biB5o6J6JC9MVwiKTtcclxuXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICB0dy5kZWxheSgzKVxyXG4gICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgLy8gZXVsZXJBbmdsZXM6IHYzKDAsIDAsIDApLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdjMoLTI1LCAxMCwgMClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcIlwiKVxyXG4gICAgICAgICAgICBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudChnb2xkQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==