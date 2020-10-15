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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L01lbnVVSUJhc2UudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlR3ZWVuIiwidjMiLCJpc1ZhbGlkIiwiU3RhdGUiLCJUb3dlckJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNZW51VUlCYXNlIiwic3RhdGUiLCJ0YXJnZXROb2RlIiwiZ2FtZUNvbmZpZyIsImdhbWVDdGwiLCJhZGRTdGF0ZSIsIm9wZW5VSSIsImJpbmQiLCJjbG9zZVVJIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsInV1aWQiLCJjbG9zZUF0dGFja1JhbmdlIiwic2hvd0F0dGFja1JhbmdlIiwic2V0U3RhdGUiLCJ0dyIsIm5vZGUiLCJ0byIsInNjYWxlIiwiY2FsbCIsInN0YXJ0IiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEssT0FBQUEsSztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBVUMsTUFBQUEsTyxPQUFBQSxPOzs7O0FBQ3BEQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOzs7Ozs7QUFHREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQUVHRyxLLEdBQWU7QUFBQTtBQUFBLCtCO2dCQUNaQyxVLEdBQW1CLEk7Ozs7OztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7K0JBRVlDLFUsRUFBcUJDLE8sRUFBMEI7QUFDdkQ7QUFDQSxpQkFBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CLFNBQXBCLEVBQStCLEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUEvQjtBQUNBLGlCQUFLTixLQUFMLENBQVdJLFFBQVgsQ0FBb0IsVUFBcEIsRUFBZ0MsS0FBS0csT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQWhDO0FBQ0g7OzsrQkFDSUUsTSxFQUFjO0FBQ2ZDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7O0FBQ0EsZ0JBQUloQixPQUFPLENBQUMsS0FBS08sVUFBTixDQUFQLElBQTRCLEtBQUtBLFVBQUwsQ0FBZ0JVLFlBQWhCO0FBQUE7QUFBQSx1Q0FBNUIsSUFBdUUsS0FBS1YsVUFBTCxDQUFnQlcsSUFBaEIsS0FBeUJKLE1BQU0sQ0FBQ0ksSUFBM0csRUFBaUg7QUFDN0csbUJBQUtYLFVBQUwsQ0FBZ0JVLFlBQWhCO0FBQUE7QUFBQSwwQ0FBd0NFLGdCQUF4QztBQUNIOztBQUNELGdCQUFJTCxNQUFNLENBQUNHLFlBQVA7QUFBQTtBQUFBLHVDQUFKLEVBQW9DO0FBQ2hDSCxjQUFBQSxNQUFNLENBQUNHLFlBQVA7QUFBQTtBQUFBLDBDQUErQkcsZUFBL0I7QUFDSDs7QUFDRCxpQkFBS2IsVUFBTCxHQUFrQk8sTUFBbEI7QUFDQSxpQkFBS1IsS0FBTCxDQUFXZSxRQUFYLENBQW9CLFNBQXBCO0FBQ0g7OztrQ0FDTztBQUVKLGlCQUFLZixLQUFMLENBQVdlLFFBQVgsQ0FBb0IsVUFBcEI7QUFDSDs7O29DQUVpQjtBQUNkLGdCQUFJckIsT0FBTyxDQUFDLEtBQUtPLFVBQU4sQ0FBUCxJQUE0QixLQUFLQSxVQUFMLENBQWdCVSxZQUFoQjtBQUFBO0FBQUEsdUNBQWhDLEVBQXlFO0FBQ3JFLG1CQUFLVixVQUFMLENBQWdCVSxZQUFoQjtBQUFBO0FBQUEsMENBQXdDRSxnQkFBeEM7QUFDSDs7QUFDRCxnQkFBSUcsRUFBRSxHQUFHLElBQUl4QixLQUFKLENBQVUsS0FBS3lCLElBQWYsQ0FBVDtBQUNBRCxZQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsY0FBQUEsS0FBSyxFQUFFMUIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVg7QUFDQXVCLFlBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU0sQ0FDVjtBQUNILGFBRkQ7QUFHQUosWUFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0g7OzttQ0FDZ0I7QUFDYlosWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLGlCQUFLTyxJQUFMLENBQVVLLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxnQkFBSU4sRUFBRSxHQUFHLElBQUl4QixLQUFKLENBQVUsS0FBS3lCLElBQWYsQ0FBVDtBQUNBRCxZQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsY0FBQUEsS0FBSyxFQUFFMUIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVg7QUFDQXVCLFlBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU0sQ0FDYixDQUREO0FBRUFKLFlBQUFBLEVBQUUsQ0FBQ0ssS0FBSDtBQUNIOzs7O1FBdEQyQjlCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFR3ZWVuLCBWZWMzLCB2MywgZmluZCwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi8uLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbi8vIGltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnTWVudVVJQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBNZW51VUlCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByb3RlY3RlZCB0YXJnZXROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHN0YXJ0KCkge1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdtZW51IHVpIGJhc2UnKTtcclxuICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKCdvcGVuLXVpJywgdGhpcy5vcGVuVUkuYmluZCh0aGlzKSk7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZSgnY2xvc2UtdWknLCB0aGlzLmNsb3NlVUkuYmluZCh0aGlzKSk7XHJcbiAgICAvLyAgICAgLy8gbGV0IGdhbWVDb25maWcgPSBmaW5kKCdHYW1lQ29udHJvbGxlcicpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAvLyAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgIC8vICAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuXHJcbiAgICAvLyAgICAgLy8gfSwgMC4yKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc/OiBPYmplY3QsIGdhbWVDdGw/OiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIC8vIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoJ29wZW4tdWknLCB0aGlzLm9wZW5VSS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKCdjbG9zZS11aScsIHRoaXMuY2xvc2VVSS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIG9wZW4odGFyZ2V0OiBOb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIBcIik7XHJcbiAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXROb2RlKSAmJiB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkgJiYgdGhpcy50YXJnZXROb2RlLnV1aWQgIT09IHRhcmdldC51dWlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5jbG9zZUF0dGFja1JhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXJnZXQuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudChUb3dlckJhc2UpLnNob3dBdHRhY2tSYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnb3Blbi11aScpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVUkoKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXROb2RlKSAmJiB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmNsb3NlQXR0YWNrUmFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb3BlblVJKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbiB1aVwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pO1xyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19