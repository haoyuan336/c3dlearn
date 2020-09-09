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
            this.goldCount = goldCount;
            var tw = new Tween(this.node);
            tw.delay(3);
            tw.to(0.4, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiVHdlZW4iLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIldpbkdvbGRBbmltRWZmZWN0IiwiZ29sZENvdW50Iiwic2tlbGV0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJnYW1lQ29udHJvbGxlciIsInR3IiwiZGVsYXkiLCJ0byIsInBvc2l0aW9uIiwiY2FsbCIsInBsYXllckRhdGEiLCJhZGRHb2xkQ291bnQiLCJkZXN0cm95Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFOzs7Ozs7QUFFakVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O21DQUdKQyxpQixXQURaRixPQUFPLENBQUMsbUJBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQUdHRyxTLEdBQW9CLEM7Z0JBQ3BCQyxPLEdBQXNDLEk7Ozs7OztrQ0FFckM7QUFDSjtBQUNBO0FBQ0EsZ0JBQUlBLE9BQU8sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJULDBCQUF2QixDQUFkO0FBQ0EsaUJBQUtPLE9BQUwsR0FBZUEsT0FBZjs7QUFDQSxnQkFBSUEsT0FBSixFQUFhO0FBQ1Qsa0JBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxXQUExQixDQURTLENBRVQ7O0FBRUEsa0JBQUlDLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxRQUFSLENBQWlCSCxXQUFXLENBQUNJLElBQTdCLENBQVo7QUFDQUYsY0FBQUEsS0FBSyxDQUFDRyxXQUFOLEdBQW9CLENBQXBCO0FBQ0FSLGNBQUFBLE9BQU8sQ0FBQ1MsSUFBUixDQUFhTixXQUFXLENBQUNJLElBQXpCO0FBQ0gsYUFaRyxDQWFKO0FBQ0E7QUFFQTs7QUFFSDs7O3VDQUNZUixTLEVBQW1CVyxjLEVBQWdDO0FBQUE7O0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQUtYLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsZ0JBQUlZLEVBQUUsR0FBRyxJQUFJakIsS0FBSixDQUFVLEtBQUtPLElBQWYsQ0FBVDtBQUNBVSxZQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyxDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQO0FBQ0FDLGNBQUFBLFFBQVEsRUFBRW5CLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBVjtBQUZMLGFBQVg7QUFJQWdCLFlBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU07QUFDVjtBQUNBTCxjQUFBQSxjQUFjLENBQUNNLFVBQWYsQ0FBMEJDLFlBQTFCLENBQXVDbEIsU0FBdkM7O0FBQ0EsY0FBQSxNQUFJLENBQUNFLElBQUwsQ0FBVWlCLE9BQVY7QUFDSCxhQUpEO0FBS0FQLFlBQUFBLEVBQUUsQ0FBQ1EsS0FBSDtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBcERtQzNCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBUd2VlbiwgdjMsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1dpbkdvbGRBbmltRWZmZWN0JylcclxuZXhwb3J0IGNsYXNzIFdpbkdvbGRBbmltRWZmZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZ29sZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNrZWxldGU6IFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvL+W8gOWni+aSreaUvuWKqOeUu1xyXG4gICAgICAgIGxldCBza2VsZXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5za2VsZXRlID0gc2tlbGV0ZTtcclxuICAgICAgICBpZiAoc2tlbGV0ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGVmYXVsdEFuaW0gPSBza2VsZXRlLmRlZmF1bHRDbGlwO1xyXG4gICAgICAgICAgICAvLyBkZWZhdWx0QW5pbS5cclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGUuZ2V0U3RhdGUoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgc2tlbGV0ZS5wbGF5KGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB2MygwLCBNYXRoLnJhbmRvbSgpICogMzYwLCAwKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG5cclxuICAgICAgICAvLyB9LDIpO1xyXG5cclxuICAgIH1cclxuICAgIHNldEdvbGRDb3VudChnb2xkQ291bnQ6IG51bWJlciwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgLy/orr7nva7ph5HluIHkuKrmlbBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNrZWxldGVcIiwgdGhpcy5za2VsZXRlKTtcclxuICAgICAgICAvLyBsZXQgc2tlbGV0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIC8vIGlmIChza2VsZXRlKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBhbmltQ2xpcCA9IHNrZWxldGUuY2xpcHNbMV07XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdhbmltIGNsaXAgbmFtZScsIGFuaW1DbGlwLm5hbWUpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc3RhdGUgPSBza2VsZXRlLmdldFN0YXRlKGFuaW1DbGlwLm5hbWUpO1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgLy8gICAgIHNrZWxldGUucGxheShhbmltQ2xpcC5uYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5nb2xkQ291bnQgPSBnb2xkQ291bnQ7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICB0dy5kZWxheSgzKVxyXG4gICAgICAgIHR3LnRvKDAuNCwge1xyXG4gICAgICAgICAgICAvLyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2MygtMjUsIDEwLCAwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwiXCIpXHJcbiAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19