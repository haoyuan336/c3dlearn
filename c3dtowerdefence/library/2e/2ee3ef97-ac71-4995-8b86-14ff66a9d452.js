System.register(["cc", "code-quality:cr", "../GameInstance.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, SkeletalAnimationComponent, Tween, v3, find, GameInstance, _dec, _class, _temp, _crd, ccclass, property, WinGoldAnimEffect;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../GameInstance", _context.meta, extras);
  }

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
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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
              // gameController.playerData.addGoldCount(goldCount);
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().addGoldCount(goldCount);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiVHdlZW4iLCJ2MyIsImZpbmQiLCJHYW1lSW5zdGFuY2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXaW5Hb2xkQW5pbUVmZmVjdCIsImdvbGRDb3VudCIsInNrZWxldGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZGVmYXVsdEFuaW0iLCJkZWZhdWx0Q2xpcCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5IiwiZ2FtZUNvbnRyb2xsZXIiLCJkaXMiLCJwb3NpdGlvbiIsInN1YnRyYWN0IiwibGVuZ3RoIiwic3BlZWQiLCJ0aW1lIiwiZW1pdCIsInR3IiwiZGVsYXkiLCJ0byIsImNhbGwiLCJnZXRJbnN0YW5jZSIsImFkZEdvbGRDb3VudCIsImRlc3Ryb3kiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTs7OztBQUVwRUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7O21DQUdKQyxpQixXQURaRixPQUFPLENBQUMsbUJBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQUdHRyxTLEdBQW9CLEM7Z0JBQ3BCQyxPLEdBQXNDLEk7Ozs7OztrQ0FFckM7QUFDSjtBQUNBO0FBQ0EsZ0JBQUlBLE9BQU8sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJYLDBCQUF2QixDQUFkO0FBQ0EsaUJBQUtTLE9BQUwsR0FBZUEsT0FBZjs7QUFDQSxnQkFBSUEsT0FBSixFQUFhO0FBQ1Qsa0JBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxXQUExQixDQURTLENBRVQ7O0FBRUEsa0JBQUlDLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxRQUFSLENBQWlCSCxXQUFXLENBQUNJLElBQTdCLENBQVo7QUFDQUYsY0FBQUEsS0FBSyxDQUFDRyxXQUFOLEdBQW9CLENBQXBCO0FBQ0FSLGNBQUFBLE9BQU8sQ0FBQ1MsSUFBUixDQUFhTixXQUFXLENBQUNJLElBQXpCO0FBQ0gsYUFaRyxDQWFKO0FBQ0E7QUFFQTs7QUFFSDs7O3VDQUNZUixTLEVBQW1CVyxjLEVBQWdDO0FBQUE7O0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQUlDLEdBQUcsR0FBR2xCLEVBQUUsQ0FBQyxLQUFLUSxJQUFMLENBQVVXLFFBQVgsQ0FBRixDQUF1QkMsUUFBdkIsQ0FBZ0NwQixFQUFFLENBQUMsQ0FBQyxFQUFGLEVBQU0sRUFBTixFQUFVLENBQVYsQ0FBbEMsRUFBZ0RxQixNQUFoRCxFQUFWO0FBQ0EsZ0JBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsZ0JBQUlDLElBQUksR0FBR0wsR0FBRyxHQUFHSSxLQUFqQjtBQUNBLGlCQUFLaEIsU0FBTCxHQUFpQkEsU0FBakI7QUFFQUwsWUFBQUEsSUFBSSxDQUFDLGdCQUFELENBQUosQ0FBdUJ1QixJQUF2QixDQUE0QixZQUE1QixFQUEwQyxPQUExQztBQUVBLGdCQUFJQyxFQUFFLEdBQUcsSUFBSTFCLEtBQUosQ0FBVSxLQUFLUyxJQUFmLENBQVQ7QUFDQWlCLFlBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLENBQVQ7QUFDQUQsWUFBQUEsRUFBRSxDQUFDRSxFQUFILENBQU1KLElBQU4sRUFBWTtBQUNSO0FBQ0FKLGNBQUFBLFFBQVEsRUFBRW5CLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBVjtBQUZKLGFBQVo7QUFJQXlCLFlBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLFlBQU07QUFDVjtBQUNBO0FBQ0E7QUFBQTtBQUFBLGdEQUFhQyxXQUFiLEdBQTJCQyxZQUEzQixDQUF3Q3hCLFNBQXhDOztBQUNBLGNBQUEsTUFBSSxDQUFDRSxJQUFMLENBQVV1QixPQUFWO0FBQ0gsYUFMRDtBQU1BTixZQUFBQSxFQUFFLENBQUNPLEtBQUg7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQTNEbUNuQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4sIHYzLCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZUluc3RhbmNlIH0gZnJvbSAnLi4vR2FtZUluc3RhbmNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdXaW5Hb2xkQW5pbUVmZmVjdCcpXHJcbmV4cG9ydCBjbGFzcyBXaW5Hb2xkQW5pbUVmZmVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGdvbGRDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBza2VsZXRlOiBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy/lvIDlp4vmkq3mlL7liqjnlLtcclxuICAgICAgICBsZXQgc2tlbGV0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuc2tlbGV0ZSA9IHNrZWxldGU7XHJcbiAgICAgICAgaWYgKHNrZWxldGUpIHtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRBbmltID0gc2tlbGV0ZS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdEFuaW0uXHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBza2VsZXRlLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHNrZWxldGUucGxheShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgTWF0aC5yYW5kb20oKSAqIDM2MCwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuXHJcbiAgICAgICAgLy8gfSwyKTtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHb2xkQ291bnQoZ29sZENvdW50OiBudW1iZXIsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIC8v6K6+572u6YeR5biB5Liq5pWwXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJza2VsZXRlXCIsIHRoaXMuc2tlbGV0ZSk7XHJcbiAgICAgICAgLy8gbGV0IHNrZWxldGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyBpZiAoc2tlbGV0ZSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgYW5pbUNsaXAgPSBza2VsZXRlLmNsaXBzWzFdO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnYW5pbSBjbGlwIG5hbWUnLCBhbmltQ2xpcC5uYW1lKTtcclxuICAgICAgICAvLyAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZS5nZXRTdGF0ZShhbmltQ2xpcC5uYW1lKTtcclxuICAgICAgICAvLyAgICAgc3RhdGUucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlLnBsYXkoYW5pbUNsaXAubmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHYzKC0yNSwgMTAsIDApKS5sZW5ndGgoKTtcclxuICAgICAgICBsZXQgc3BlZWQgPSA1MDtcclxuICAgICAgICBsZXQgdGltZSA9IGRpcyAvIHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZ29sZENvdW50ID0gZ29sZENvdW50O1xyXG5cclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXktYXVkaW9cIiwgXCLph5HluIHmjonokL0xXCIpO1xyXG5cclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIHR3LmRlbGF5KDMpXHJcbiAgICAgICAgdHcudG8odGltZSwge1xyXG4gICAgICAgICAgICAvLyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2MygtMjUsIDEwLCAwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwiXCIpXHJcbiAgICAgICAgICAgIC8vIGdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmFkZEdvbGRDb3VudChnb2xkQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==