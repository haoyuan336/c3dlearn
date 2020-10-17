System.register(["cc", "code-quality:cr", "../../util/State.js", "../../Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Tween, v3, isValid, State, TowerBase, _dec, _class, _temp, _crd, ccclass, property, MenuUIBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "../../Towers/TowerBase", _context.meta, extras);
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
      Tween = _cc.Tween;
      v3 = _cc.v3;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "22840YoTAVEEoGWokYeLlSX", "MenuUIBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      // import { BaseObject } from '../../BaseObject';
      // import { GameController } from '../../GameController';
      _export("MenuUIBase", MenuUIBase = (_dec = ccclass('MenuUIBase'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MenuUIBase, _Component);

        function MenuUIBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MenuUIBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuUIBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.targetNode = null;
          return _this;
        }

        _createClass(MenuUIBase, [{
          key: "init",
          // start() {
          //     // console.log('menu ui base');
          //     // this.state.addState('open-ui', this.openUI.bind(this));
          //     // this.state.addState('close-ui', this.closeUI.bind(this));
          //     // let gameConfig = find('GameController').getComponent(GameController).getGameConfig().json;
          //     // this.scheduleOnce(()=>{
          //     //     super.init(gameConfig);
          //     // }, 0.2)
          // }
          value: function init(gameConfig, gameCtl) {
            // super.init(gameConfig, gameController);
            this.state.addState('open-ui', this.openUI.bind(this));
            this.state.addState('close-ui', this.closeUI.bind(this));
          }
        }, {
          key: "open",
          value: function open(target) {
            console.log("打开");

            if (isValid(this.targetNode) && this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
              error: Error()
            }), TowerBase) : TowerBase) && this.targetNode.uuid !== target.uuid) {
              this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).closeAttackRange();
            }

            if (target.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
              error: Error()
            }), TowerBase) : TowerBase)) {
              target.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).showAttackRange();
            }

            this.targetNode = target;
            this.state.setState('open-ui');
          }
        }, {
          key: "close",
          value: function close() {
            this.state.setState("close-ui");
          }
        }, {
          key: "closeUI",
          value: function closeUI() {
            if (isValid(this.targetNode) && this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
              error: Error()
            }), TowerBase) : TowerBase)) {
              this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).closeAttackRange();
            }

            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(0, 0, 0)
            });
            tw.call(function () {// this.node.active = false;
            });
            tw.start();
          }
        }, {
          key: "openUI",
          value: function openUI() {
            console.log("open ui");
            this.node.active = true;
            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {});
            tw.start();
          }
        }]);

        return MenuUIBase;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L01lbnVVSUJhc2UudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlR3ZWVuIiwidjMiLCJpc1ZhbGlkIiwiU3RhdGUiLCJUb3dlckJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNZW51VUlCYXNlIiwic3RhdGUiLCJ0YXJnZXROb2RlIiwiZ2FtZUNvbmZpZyIsImdhbWVDdGwiLCJhZGRTdGF0ZSIsIm9wZW5VSSIsImJpbmQiLCJjbG9zZVVJIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsInV1aWQiLCJjbG9zZUF0dGFja1JhbmdlIiwic2hvd0F0dGFja1JhbmdlIiwic2V0U3RhdGUiLCJ0dyIsIm5vZGUiLCJ0byIsInNjYWxlIiwiY2FsbCIsInN0YXJ0IiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEssT0FBQUEsSztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBVUMsTUFBQUEsTyxPQUFBQSxPOzs7O0FBR3BEQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOzs7Ozs7QUFIREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7QUFJakI7QUFDQTs0QkFHYUMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUdHLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ1pDLFUsR0FBbUIsSTs7Ozs7O0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTsrQkFFWUMsVSxFQUFxQkMsTyxFQUFrQjtBQUMvQztBQUNBLGlCQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0IsU0FBcEIsRUFBK0IsS0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQS9CO0FBQ0EsaUJBQUtOLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixVQUFwQixFQUFnQyxLQUFLRyxPQUFMLENBQWFELElBQWIsQ0FBa0IsSUFBbEIsQ0FBaEM7QUFDSDs7OytCQUNJRSxNLEVBQWM7QUFDZkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjs7QUFDQSxnQkFBSWhCLE9BQU8sQ0FBQyxLQUFLTyxVQUFOLENBQVAsSUFBNEIsS0FBS0EsVUFBTCxDQUFnQlUsWUFBaEI7QUFBQTtBQUFBLHVDQUE1QixJQUF1RSxLQUFLVixVQUFMLENBQWdCVyxJQUFoQixLQUF5QkosTUFBTSxDQUFDSSxJQUEzRyxFQUFpSDtBQUM3RyxtQkFBS1gsVUFBTCxDQUFnQlUsWUFBaEI7QUFBQTtBQUFBLDBDQUF3Q0UsZ0JBQXhDO0FBQ0g7O0FBQ0QsZ0JBQUlMLE1BQU0sQ0FBQ0csWUFBUDtBQUFBO0FBQUEsdUNBQUosRUFBb0M7QUFDaENILGNBQUFBLE1BQU0sQ0FBQ0csWUFBUDtBQUFBO0FBQUEsMENBQStCRyxlQUEvQjtBQUNIOztBQUNELGlCQUFLYixVQUFMLEdBQWtCTyxNQUFsQjtBQUNBLGlCQUFLUixLQUFMLENBQVdlLFFBQVgsQ0FBb0IsU0FBcEI7QUFDSDs7O2tDQUNPO0FBRUosaUJBQUtmLEtBQUwsQ0FBV2UsUUFBWCxDQUFvQixVQUFwQjtBQUNIOzs7b0NBRWlCO0FBQ2QsZ0JBQUlyQixPQUFPLENBQUMsS0FBS08sVUFBTixDQUFQLElBQTRCLEtBQUtBLFVBQUwsQ0FBZ0JVLFlBQWhCO0FBQUE7QUFBQSx1Q0FBaEMsRUFBeUU7QUFDckUsbUJBQUtWLFVBQUwsQ0FBZ0JVLFlBQWhCO0FBQUE7QUFBQSwwQ0FBd0NFLGdCQUF4QztBQUNIOztBQUNELGdCQUFJRyxFQUFFLEdBQUcsSUFBSXhCLEtBQUosQ0FBVSxLQUFLeUIsSUFBZixDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFQyxjQUFBQSxLQUFLLEVBQUUxQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsYUFBWDtBQUNBdUIsWUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVEsWUFBTSxDQUNWO0FBQ0gsYUFGRDtBQUdBSixZQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSDs7O21DQUNnQjtBQUNiWixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsaUJBQUtPLElBQUwsQ0FBVUssTUFBVixHQUFtQixJQUFuQjtBQUNBLGdCQUFJTixFQUFFLEdBQUcsSUFBSXhCLEtBQUosQ0FBVSxLQUFLeUIsSUFBZixDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFQyxjQUFBQSxLQUFLLEVBQUUxQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsYUFBWDtBQUNBdUIsWUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVEsWUFBTSxDQUNiLENBREQ7QUFFQUosWUFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0g7Ozs7UUF0RDJCOUIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVHdlZW4sIFZlYzMsIHYzLCBmaW5kLCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi8uLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbi8vIGltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuLy8gaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcblxyXG5AY2NjbGFzcygnTWVudVVJQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBNZW51VUlCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByb3RlY3RlZCB0YXJnZXROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHN0YXJ0KCkge1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdtZW51IHVpIGJhc2UnKTtcclxuICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKCdvcGVuLXVpJywgdGhpcy5vcGVuVUkuYmluZCh0aGlzKSk7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZSgnY2xvc2UtdWknLCB0aGlzLmNsb3NlVUkuYmluZCh0aGlzKSk7XHJcbiAgICAvLyAgICAgLy8gbGV0IGdhbWVDb25maWcgPSBmaW5kKCdHYW1lQ29udHJvbGxlcicpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAvLyAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgIC8vICAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuXHJcbiAgICAvLyAgICAgLy8gfSwgMC4yKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc/OiBPYmplY3QsIGdhbWVDdGw/OiBPYmplY3QpIHtcclxuICAgICAgICAvLyBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKCdvcGVuLXVpJywgdGhpcy5vcGVuVUkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZSgnY2xvc2UtdWknLCB0aGlzLmNsb3NlVUkuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBvcGVuKHRhcmdldDogTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omT5byAXCIpO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0Tm9kZSkgJiYgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpICYmIHRoaXMudGFyZ2V0Tm9kZS51dWlkICE9PSB0YXJnZXQudXVpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuY2xvc2VBdHRhY2tSYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0LmdldENvbXBvbmVudChUb3dlckJhc2UpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zaG93QXR0YWNrUmFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ29wZW4tdWknKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVVJKCkge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0Tm9kZSkgJiYgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5jbG9zZUF0dGFja1JhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9wZW5VSSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW4gdWlcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==