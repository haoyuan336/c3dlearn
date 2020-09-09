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
          return _this;
        }

        _createClass(WinGoldAnimEffect, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            //开始播放动画
            var skelete = this.node.getComponent(SkeletalAnimationComponent);

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
            this.goldCount = goldCount;
            var tw = new Tween(this.node);
            tw.delay(3);
            tw.to(0.8, {
              // eulerAngles: v3(0, 0, 0),
              position: v3(-30, 10, 0)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiVHdlZW4iLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIldpbkdvbGRBbmltRWZmZWN0IiwiZ29sZENvdW50Iiwic2tlbGV0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJnYW1lQ29udHJvbGxlciIsInR3IiwiZGVsYXkiLCJ0byIsInBvc2l0aW9uIiwiY2FsbCIsInBsYXllckRhdGEiLCJhZGRHb2xkQ291bnQiLCJkZXN0cm95Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFOzs7Ozs7QUFFakVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O21DQUdKQyxpQixXQURaRixPQUFPLENBQUMsbUJBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQUdHRyxTLEdBQW9CLEM7Ozs7OztrQ0FDbkI7QUFDSjtBQUNBO0FBQ0EsZ0JBQUlDLE9BQU8sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJULDBCQUF2QixDQUFkOztBQUNBLGdCQUFJTyxPQUFKLEVBQWE7QUFDVCxrQkFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUNJLFdBQTFCLENBRFMsQ0FFVDs7QUFFQSxrQkFBSUMsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJILFdBQVcsQ0FBQ0ksSUFBN0IsQ0FBWjtBQUNBRixjQUFBQSxLQUFLLENBQUNHLFdBQU4sR0FBb0IsQ0FBcEI7QUFDQVIsY0FBQUEsT0FBTyxDQUFDUyxJQUFSLENBQWFOLFdBQVcsQ0FBQ0ksSUFBekI7QUFDSCxhQVhHLENBWUo7QUFDQTtBQUVBOztBQUVIOzs7dUNBQ1lSLFMsRUFBbUJXLGMsRUFBZ0M7QUFBQTs7QUFDNUQ7QUFDQSxpQkFBS1gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxnQkFBSVksRUFBRSxHQUFHLElBQUlqQixLQUFKLENBQVUsS0FBS08sSUFBZixDQUFUO0FBQ0FVLFlBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLENBQVQ7QUFDQUQsWUFBQUEsRUFBRSxDQUFDRSxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1A7QUFDQUMsY0FBQUEsUUFBUSxFQUFFbkIsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sRUFBVSxDQUFWO0FBRkwsYUFBWDtBQUlBZ0IsWUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVEsWUFBTTtBQUNWO0FBQ0FMLGNBQUFBLGNBQWMsQ0FBQ00sVUFBZixDQUEwQkMsWUFBMUIsQ0FBdUNsQixTQUF2Qzs7QUFDQSxjQUFBLE1BQUksQ0FBQ0UsSUFBTCxDQUFVaUIsT0FBVjtBQUNILGFBSkQ7QUFLQVAsWUFBQUEsRUFBRSxDQUFDUSxLQUFIO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUF4Q21DM0IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFR3ZWVuLCB2MywgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2luR29sZEFuaW1FZmZlY3QnKVxyXG5leHBvcnQgY2xhc3MgV2luR29sZEFuaW1FZmZlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBnb2xkQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvL+W8gOWni+aSreaUvuWKqOeUu1xyXG4gICAgICAgIGxldCBza2VsZXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHNrZWxldGUpIHtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRBbmltID0gc2tlbGV0ZS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdEFuaW0uXHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBza2VsZXRlLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHNrZWxldGUucGxheShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgTWF0aC5yYW5kb20oKSAqIDM2MCwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuXHJcbiAgICAgICAgLy8gfSwyKTtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHb2xkQ291bnQoZ29sZENvdW50OiBudW1iZXIsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIC8v6K6+572u6YeR5biB5Liq5pWwXHJcbiAgICAgICAgdGhpcy5nb2xkQ291bnQgPSBnb2xkQ291bnQ7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICB0dy5kZWxheSgzKVxyXG4gICAgICAgIHR3LnRvKDAuOCwge1xyXG4gICAgICAgICAgICAvLyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2MygtMzAsIDEwLCAwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwiXCIpXHJcbiAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19