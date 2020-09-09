System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js", "./SkillCtl.js", "./GoldCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, MenuUIBase, SkillCtl, GoldCtl, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, UIController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuUIBase(extras) {
    _reporterNs.report("MenuUIBase", "./Menu/MenuUIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCtl(extras) {
    _reporterNs.report("SkillCtl", "./SkillCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoldCtl(extras) {
    _reporterNs.report("GoldCtl", "./GoldCtl", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CameraComponent = _cc.CameraComponent;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuMenuUIBaseJs) {
      MenuUIBase = _MenuMenuUIBaseJs.MenuUIBase;
    }, function (_SkillCtlJs) {
      SkillCtl = _SkillCtlJs.SkillCtl;
    }, function (_GoldCtlJs) {
      GoldCtl = _GoldCtlJs.GoldCtl;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ac456IJb4BOS7ZW+hoJsDui", "UIController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UIController, _Component);

        function UIController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buildTowerPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateMenuPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor4, _assertThisInitialized(_this));

          _this.buildUINode = null;
          _this.updateUINode = null;
          return _this;
        }

        _createClass(UIController, [{
          key: "start",
          // @property({ type: Node })
          // public currentWaveLabelNode: Node = null;
          // @property({ type: Prefab })
          // public startGameCountDownAnimPrefab: Prefab = null;
          // @property({ type: Prefab })
          // public goAnimPrefab: Prefab = null;
          value: function start() {
            var _this2 = this;

            console.log("ui controller start");
            this.gameController.on("touch-base-build-base", function (node) {
              //玩家点中了塔的基座
              //显示建造tower 的UI
              if (!isValid(_this2.buildUINode)) {
                _this2.buildUINode = instantiate(_this2.buildTowerPrefab);
                _this2.buildUINode.parent = _this2.node;
              }

              _this2.setUINodeTo3dPos(_this2.buildUINode, node);

              _this2.buildUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                error: Error()
              }), MenuUIBase) : MenuUIBase).open(node);
            });
            this.gameController.on("touch-tower", function (targetTower) {
              //点中了tower
              if (!isValid(_this2.updateUINode)) {
                _this2.updateUINode = instantiate(_this2.updateMenuPrefab);
                _this2.updateUINode.parent = _this2.node;
              }

              _this2.setUINodeTo3dPos(_this2.updateUINode, targetTower);
            }); // this.node.on("update-gold-label", (goldCount: number)=>{
            //     this.node.getComponent(GoldCtl).updateGoldCountLabel(goldCount);
            // });
            // this.gameController.on("refer-current-wave", (waveNum) => {
            //     this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
            // });
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            var _this3 = this;

            return this.node.getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl).showEnterAnim().then(function () {
              return _this3.node.getComponent(_crd && GoldCtl === void 0 ? (_reportPossibleCrUseOfGoldCtl({
                error: Error()
              }), GoldCtl) : GoldCtl).showEnterAnim();
            });
          }
        }, {
          key: "setUINodeTo3dPos",
          value: function setUINodeTo3dPos(uiNode, node3d) {
            var pos;
            pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
            uiNode.setPosition(pos);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            switch (customData) {
              case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.emit("player-click-game");
                break;

              default:
                break;
            }
          }
        }]);

        return UIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildTowerPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "updateMenuPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJNZW51VUlCYXNlIiwiU2tpbGxDdGwiLCJHb2xkQ3RsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlDb250cm9sbGVyIiwidHlwZSIsImJ1aWxkVUlOb2RlIiwidXBkYXRlVUlOb2RlIiwiY29uc29sZSIsImxvZyIsImdhbWVDb250cm9sbGVyIiwib24iLCJub2RlIiwiYnVpbGRUb3dlclByZWZhYiIsInBhcmVudCIsInNldFVJTm9kZVRvM2RQb3MiLCJnZXRDb21wb25lbnQiLCJvcGVuIiwidGFyZ2V0VG93ZXIiLCJ1cGRhdGVNZW51UHJlZmFiIiwic2hvd0VudGVyQW5pbSIsInRoZW4iLCJ1aU5vZGUiLCJub2RlM2QiLCJwb3MiLCJjYW1lcmFOb2RlIiwiY29udmVydFRvVUlOb2RlIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInRhcmdldCIsImRlc3Ryb3kiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUF1QkMsTUFBQUEsTyxPQUFBQSxPOzs7O0FBQ3pFQyxNQUFBQSxVLHFCQUFBQSxVOztBQUNBQyxNQUFBQSxRLGVBQUFBLFE7O0FBQ0FDLE1BQUFBLE8sY0FBQUEs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QUFDQSxxQkFBS3RCLGNBQUwsQ0FBb0J1QixJQUFwQixDQUF5QixtQkFBekI7QUFDQTs7QUFDSjtBQUNJO0FBUlI7QUFVSDs7OztRQTNFNkJ4QyxTOzs7OztpQkFFQSxJOzs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFJUixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBDYW1lcmFDb21wb25lbnQsIFZlYzMsIGlzVmFsaWQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBCdXR0b25Db21wb25lbnQsIEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnUvTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFNraWxsQ3RsIH0gZnJvbSAnLi9Ta2lsbEN0bCc7XHJcbmltcG9ydCB7IEdvbGRDdGwgfSBmcm9tICcuL0dvbGRDdGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VJQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBVSUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1aWxkVG93ZXJQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNZW51UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFVJTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVVJTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRXYXZlTGFiZWxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIC8vIHB1YmxpYyBzdGFydEdhbWVDb3VudERvd25BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIGdvQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidWkgY29udHJvbGxlciBzdGFydFwiKVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJ0b3VjaC1iYXNlLWJ1aWxkLWJhc2VcIiwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrbngrnkuK3kuobloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy/mmL7npLrlu7rpgKB0b3dlciDnmoRVSVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy5idWlsZFVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1aWxkVG93ZXJQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VUlOb2RlVG8zZFBvcyh0aGlzLmJ1aWxkVUlOb2RlLCBub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkub3Blbihub2RlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJ0b3VjaC10b3dlclwiLCAodGFyZ2V0VG93ZXI6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/ngrnkuK3kuoZ0b3dlclxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudXBkYXRlTWVudVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMudXBkYXRlVUlOb2RlLCB0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoZ29sZENvdW50OiBudW1iZXIpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkudXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwicmVmZXItY3VycmVudC13YXZlXCIsICh3YXZlTnVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFdhdmVMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB3YXZlTnVtO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd1VJRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNraWxsQ3RsKS5zaG93RW50ZXJBbmltKCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHb2xkQ3RsKS5zaG93RW50ZXJBbmltKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRVSU5vZGVUbzNkUG9zKHVpTm9kZTogTm9kZSwgbm9kZTNkOiBOb2RlKSB7XHJcbiAgICAgICAgbGV0IHBvczogVmVjMztcclxuICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkuY29udmVydFRvVUlOb2RlKG5vZGUzZC5wb3NpdGlvbiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB1aU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdzdGFydC1nYW1lJzpcclxuICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJwbGF5ZXItY2xpY2stZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==