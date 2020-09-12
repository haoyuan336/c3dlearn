System.register(["cc", "code-quality:cr", "../../util/State.js", "../../Towers/TowerBase.js", "../../BaseObject.js", "../../GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Tween, v3, find, isValid, State, TowerBase, BaseObject, GameController, _dec, _class, _temp, _crd, ccclass, property, MenuUIBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "../../Towers/TowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../GameController", _context.meta, extras);
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
      Tween = _cc.Tween;
      v3 = _cc.v3;
      find = _cc.find;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "22840YoTAVEEoGWokYeLlSX", "MenuUIBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MenuUIBase", MenuUIBase = (_dec = ccclass('MenuUIBase'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(MenuUIBase, _ref);

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
          key: "start",
          value: function start() {
            var _this2 = this;

            console.log('menu ui base');
            this.state.addState('open-ui', this.openUI.bind(this));
            this.state.addState('close-ui', this.closeUI.bind(this));
            var gameConfig = find('GameController').getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
            this.scheduleOnce(function () {
              _get(_getPrototypeOf(MenuUIBase.prototype), "init", _this2).call(_this2, gameConfig);
            }, 0.1);
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
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L01lbnVVSUJhc2UudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlR3ZWVuIiwidjMiLCJmaW5kIiwiaXNWYWxpZCIsIlN0YXRlIiwiVG93ZXJCYXNlIiwiQmFzZU9iamVjdCIsIkdhbWVDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWVudVVJQmFzZSIsInN0YXRlIiwidGFyZ2V0Tm9kZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRTdGF0ZSIsIm9wZW5VSSIsImJpbmQiLCJjbG9zZVVJIiwiZ2FtZUNvbmZpZyIsImdldENvbXBvbmVudCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2NoZWR1bGVPbmNlIiwidGFyZ2V0IiwidXVpZCIsImNsb3NlQXR0YWNrUmFuZ2UiLCJzaG93QXR0YWNrUmFuZ2UiLCJzZXRTdGF0ZSIsInR3Iiwibm9kZSIsInRvIiwic2NhbGUiLCJjYWxsIiwic3RhcnQiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxLLE9BQUFBLEs7QUFBYUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxPLE9BQUFBLE87Ozs7QUFDcERDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUdHLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ1pDLFUsR0FBbUIsSTs7Ozs7O2tDQUNyQjtBQUFBOztBQUNKQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixTQUFwQixFQUErQixLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBL0I7QUFDQSxpQkFBS04sS0FBTCxDQUFXSSxRQUFYLENBQW9CLFVBQXBCLEVBQWdDLEtBQUtHLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFoQztBQUNBLGdCQUFJRSxVQUFVLEdBQUdqQixJQUFJLENBQUMsZ0JBQUQsQ0FBSixDQUF1QmtCLFlBQXZCO0FBQUE7QUFBQSxrREFBb0RDLGFBQXBELEdBQW9FQyxJQUFyRjtBQUNBLGlCQUFLQyxZQUFMLENBQWtCLFlBQUk7QUFDbEIsdUZBQVdKLFVBQVg7QUFFSCxhQUhELEVBR0csR0FISDtBQUlIOzs7K0JBRUlLLE0sRUFBYztBQUNmWCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaOztBQUNBLGdCQUFJWCxPQUFPLENBQUMsS0FBS1MsVUFBTixDQUFQLElBQTRCLEtBQUtBLFVBQUwsQ0FBZ0JRLFlBQWhCO0FBQUE7QUFBQSx1Q0FBNUIsSUFBdUUsS0FBS1IsVUFBTCxDQUFnQmEsSUFBaEIsS0FBeUJELE1BQU0sQ0FBQ0MsSUFBM0csRUFBaUg7QUFDN0csbUJBQUtiLFVBQUwsQ0FBZ0JRLFlBQWhCO0FBQUE7QUFBQSwwQ0FBd0NNLGdCQUF4QztBQUNIOztBQUNELGdCQUFJRixNQUFNLENBQUNKLFlBQVA7QUFBQTtBQUFBLHVDQUFKLEVBQW9DO0FBQ2hDSSxjQUFBQSxNQUFNLENBQUNKLFlBQVA7QUFBQTtBQUFBLDBDQUErQk8sZUFBL0I7QUFDSDs7QUFDRCxpQkFBS2YsVUFBTCxHQUFrQlksTUFBbEI7QUFDQSxpQkFBS2IsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQixTQUFwQjtBQUNIOzs7a0NBQ087QUFFSixpQkFBS2pCLEtBQUwsQ0FBV2lCLFFBQVgsQ0FBb0IsVUFBcEI7QUFDSDs7O29DQUVpQjtBQUNkLGdCQUFJekIsT0FBTyxDQUFDLEtBQUtTLFVBQU4sQ0FBUCxJQUE0QixLQUFLQSxVQUFMLENBQWdCUSxZQUFoQjtBQUFBO0FBQUEsdUNBQWhDLEVBQXlFO0FBQ3JFLG1CQUFLUixVQUFMLENBQWdCUSxZQUFoQjtBQUFBO0FBQUEsMENBQXdDTSxnQkFBeEM7QUFDSDs7QUFDRCxnQkFBSUcsRUFBRSxHQUFHLElBQUk3QixLQUFKLENBQVUsS0FBSzhCLElBQWYsQ0FBVDtBQUNBRCxZQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsY0FBQUEsS0FBSyxFQUFFL0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVg7QUFDQTRCLFlBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU0sQ0FDVjtBQUNILGFBRkQ7QUFHQUosWUFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0g7OzttQ0FDZ0I7QUFDYnJCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxpQkFBS2dCLElBQUwsQ0FBVUssTUFBVixHQUFtQixJQUFuQjtBQUNBLGdCQUFJTixFQUFFLEdBQUcsSUFBSTdCLEtBQUosQ0FBVSxLQUFLOEIsSUFBZixDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFQyxjQUFBQSxLQUFLLEVBQUUvQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsYUFBWDtBQUNBNEIsWUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVEsWUFBTSxDQUNiLENBREQ7QUFFQUosWUFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFR3ZWVuLCBWZWMzLCB2MywgZmluZCwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi8uLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnTWVudVVJQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBNZW51VUlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWVudSB1aSBiYXNlJyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZSgnb3Blbi11aScsIHRoaXMub3BlblVJLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoJ2Nsb3NlLXVpJywgdGhpcy5jbG9zZVVJLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gZmluZCgnR2FtZUNvbnRyb2xsZXInKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIH0sIDAuMSlcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHRhcmdldDogTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omT5byAXCIpO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0Tm9kZSkgJiYgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpICYmIHRoaXMudGFyZ2V0Tm9kZS51dWlkICE9PSB0YXJnZXQudXVpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuY2xvc2VBdHRhY2tSYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0LmdldENvbXBvbmVudChUb3dlckJhc2UpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zaG93QXR0YWNrUmFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ29wZW4tdWknKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVVJKCkge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0Tm9kZSkgJiYgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5jbG9zZUF0dGFja1JhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9wZW5VSSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW4gdWlcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==