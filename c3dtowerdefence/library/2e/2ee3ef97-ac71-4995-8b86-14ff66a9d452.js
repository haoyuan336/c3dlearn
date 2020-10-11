System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimationComponent, Tween, v3, _dec, _class, _temp, _crd, ccclass, property, WinGoldAnimEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiVHdlZW4iLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIldpbkdvbGRBbmltRWZmZWN0IiwiZ29sZENvdW50Iiwic2tlbGV0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJnYW1lQ29udHJvbGxlciIsImRpcyIsInBvc2l0aW9uIiwic3VidHJhY3QiLCJsZW5ndGgiLCJzcGVlZCIsInRpbWUiLCJ0dyIsImRlbGF5IiwidG8iLCJjYWxsIiwicGxheWVyRGF0YSIsImFkZEdvbGRDb3VudCIsImRlc3Ryb3kiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNEJDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUVqRUMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7bUNBR0pDLGlCLFdBRFpGLE9BQU8sQ0FBQyxtQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0dHLFMsR0FBb0IsQztnQkFDcEJDLE8sR0FBc0MsSTs7Ozs7O2tDQUVyQztBQUNKO0FBQ0E7QUFDQSxnQkFBSUEsT0FBTyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlQsMEJBQXZCLENBQWQ7QUFDQSxpQkFBS08sT0FBTCxHQUFlQSxPQUFmOztBQUNBLGdCQUFJQSxPQUFKLEVBQWE7QUFDVCxrQkFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUNJLFdBQTFCLENBRFMsQ0FFVDs7QUFFQSxrQkFBSUMsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJILFdBQVcsQ0FBQ0ksSUFBN0IsQ0FBWjtBQUNBRixjQUFBQSxLQUFLLENBQUNHLFdBQU4sR0FBb0IsQ0FBcEI7QUFDQVIsY0FBQUEsT0FBTyxDQUFDUyxJQUFSLENBQWFOLFdBQVcsQ0FBQ0ksSUFBekI7QUFDSCxhQVpHLENBYUo7QUFDQTtBQUVBOztBQUVIOzs7dUNBQ1lSLFMsRUFBbUJXLGMsRUFBZ0M7QUFBQTs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBSUMsR0FBRyxHQUFHaEIsRUFBRSxDQUFDLEtBQUtNLElBQUwsQ0FBVVcsUUFBWCxDQUFGLENBQXVCQyxRQUF2QixDQUFnQ2xCLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBVixDQUFsQyxFQUFnRG1CLE1BQWhELEVBQVY7QUFDQSxnQkFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxnQkFBSUMsSUFBSSxHQUFHTCxHQUFHLEdBQUdJLEtBQWpCO0FBQ0EsaUJBQUtoQixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGdCQUFJa0IsRUFBRSxHQUFHLElBQUl2QixLQUFKLENBQVUsS0FBS08sSUFBZixDQUFUO0FBQ0FnQixZQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyxDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNSCxJQUFOLEVBQVk7QUFDUjtBQUNBSixjQUFBQSxRQUFRLEVBQUVqQixFQUFFLENBQUMsQ0FBQyxFQUFGLEVBQU0sRUFBTixFQUFVLENBQVY7QUFGSixhQUFaO0FBSUFzQixZQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1Y7QUFDQVYsY0FBQUEsY0FBYyxDQUFDVyxVQUFmLENBQTBCQyxZQUExQixDQUF1Q3ZCLFNBQXZDOztBQUNBLGNBQUEsTUFBSSxDQUFDRSxJQUFMLENBQVVzQixPQUFWO0FBQ0gsYUFKRDtBQUtBTixZQUFBQSxFQUFFLENBQUNPLEtBQUg7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQXZEbUNoQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4sIHYzLCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdXaW5Hb2xkQW5pbUVmZmVjdCcpXHJcbmV4cG9ydCBjbGFzcyBXaW5Hb2xkQW5pbUVmZmVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGdvbGRDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBza2VsZXRlOiBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy/lvIDlp4vmkq3mlL7liqjnlLtcclxuICAgICAgICBsZXQgc2tlbGV0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuc2tlbGV0ZSA9IHNrZWxldGU7XHJcbiAgICAgICAgaWYgKHNrZWxldGUpIHtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRBbmltID0gc2tlbGV0ZS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdEFuaW0uXHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBza2VsZXRlLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHNrZWxldGUucGxheShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgTWF0aC5yYW5kb20oKSAqIDM2MCwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuXHJcbiAgICAgICAgLy8gfSwyKTtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHb2xkQ291bnQoZ29sZENvdW50OiBudW1iZXIsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIC8v6K6+572u6YeR5biB5Liq5pWwXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJza2VsZXRlXCIsIHRoaXMuc2tlbGV0ZSk7XHJcbiAgICAgICAgLy8gbGV0IHNrZWxldGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyBpZiAoc2tlbGV0ZSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgYW5pbUNsaXAgPSBza2VsZXRlLmNsaXBzWzFdO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnYW5pbSBjbGlwIG5hbWUnLCBhbmltQ2xpcC5uYW1lKTtcclxuICAgICAgICAvLyAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZS5nZXRTdGF0ZShhbmltQ2xpcC5uYW1lKTtcclxuICAgICAgICAvLyAgICAgc3RhdGUucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlLnBsYXkoYW5pbUNsaXAubmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHYzKC0yNSwgMTAsIDApKS5sZW5ndGgoKTtcclxuICAgICAgICBsZXQgc3BlZWQgPSA1MDtcclxuICAgICAgICBsZXQgdGltZSA9IGRpcyAvIHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZ29sZENvdW50ID0gZ29sZENvdW50O1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgdHcuZGVsYXkoMylcclxuICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgIC8vIGV1bGVyQW5nbGVzOiB2MygwLCAwLCAwKSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHYzKC0yNSwgMTAsIDApXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJcIilcclxuICAgICAgICAgICAgZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoZ29sZENvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=