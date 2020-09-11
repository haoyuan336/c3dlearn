System.register(["cc", "code-quality:cr", "./MenuUIBase.js", "../../Towers/TowerBase.js", "../../GameController.js", "../../BaseObject.js", "../../util/Tool.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, LabelComponent, find, SpriteFrame, SpriteComponent, MenuUIBase, TowerBase, GameController, BaseObject, Tool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, UpdateTowerUI;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuUIBase(extras) {
    _reporterNs.report("MenuUIBase", "./MenuUIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "../../Towers/TowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool(extras) {
    _reporterNs.report("Tool", "../../util/Tool", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      find = _cc.find;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuUIBaseJs) {
      MenuUIBase = _MenuUIBaseJs.MenuUIBase;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilToolJs) {
      Tool = _utilToolJs.Tool;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "18715njxPNA9Ie4NOUMTb2f", "UpdateTowerUI", _context.meta);

      _crd = true;
      // import { BaseObject } from '../../BaseObject';
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UpdateTowerUI", UpdateTowerUI = (_dec = ccclass('UpdateTowerUI'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec5 = property({
        type: SpriteFrame
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(UpdateTowerUI, _ref);

        function UpdateTowerUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UpdateTowerUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateTowerUI)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "updateCostLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "destroyWinLabel", _descriptor2, _assertThisInitialized(_this));

          _this.gameController = null;
          _this.updateCostCount = null;
          _this.destroyWinCount = null;

          _initializerDefineProperty(_this, "updateMaxLevelSpriteFrame", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonSpriteFrame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonNode", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UpdateTowerUI, [{
          key: "onLoad",
          // public targetTower: Node = null;
          value: function onLoad() {
            this.gameController = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
          }
        }, {
          key: "start",
          value: function start() {
            // Your initialization goes here.
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "start", this).call(this);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            console.log("custom data", customData);
            var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();

            switch (customData) {
              case 'bg':
                console.log("点中了背景");
                this.state.setState("close-ui");
                break;

              case 'update':
                var isMax = this.targetNode.getComponent(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
                  error: Error()
                }), BaseObject) : BaseObject).getTowerIsMax();

                if (isMax) {
                  return;
                }

                if (currentGoldCount >= this.updateCostCount) {
                  this.gameController.playerData.addGoldCount(this.updateCostCount * -1);
                  this.state.setState("close-ui");
                  this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                    error: Error()
                  }), TowerBase) : TowerBase).updateLevel();
                } else {
                  // this.node.emit("gold-not-enough");
                  find("Canvas").emit('gold-not-enough');
                }

                break;

              case 'destroy':
                this.gameController.playerData.addGoldCount(this.destroyWinCount);
                this.state.setState("close-ui");
                this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).toDestroy();
                break;

              default:
                break;
            }
          }
        }, {
          key: "checkIsUpdateMax",
          value: function checkIsUpdateMax() {
            // let isMax = this.getTowerIsMax
            var targetTower = this.targetNode;
            var isMax = targetTower.getComponent(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
              error: Error()
            }), BaseObject) : BaseObject).getTowerIsMax();
            console.log("is max", isMax);

            if (isMax) {
              // this.checkIsUpdateMax
              console.log("更新按钮 贴图");
              this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateMaxLevelSpriteFrame;
            } else {
              this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrame;
            }
          }
        }, {
          key: "open",
          value: function open(targetTower) {
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "open", this).call(this, targetTower);

            this.checkIsUpdateMax();
            var baseTower = targetTower.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
              error: Error()
            }), TowerBase) : TowerBase);
            var updateCostCount = baseTower.getUpdateCost();
            var destroyWinCount = baseTower.getDestroyCount();
            this.updateCostLabel.getComponent(LabelComponent).string = (_crd && Tool === void 0 ? (_reportPossibleCrUseOfTool({
              error: Error()
            }), Tool) : Tool).convertNumToK(updateCostCount) + '';
            this.destroyWinLabel.getComponent(LabelComponent).string = (_crd && Tool === void 0 ? (_reportPossibleCrUseOfTool({
              error: Error()
            }), Tool) : Tool).convertNumToK(destroyWinCount) + '';
            this.updateCostCount = updateCostCount;
            this.destroyWinCount = destroyWinCount;
          }
        }]);

        return UpdateTowerUI;
      }(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
        error: Error()
      }), MenuUIBase) : MenuUIBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateCostLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "destroyWinLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "updateMaxLevelSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonNode", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L1VwZGF0ZVRvd2VyVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJUb3dlckJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXBkYXRlVG93ZXJVSSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInVwZGF0ZUNvc3RDb3VudCIsImRlc3Ryb3lXaW5Db3VudCIsImdldENvbXBvbmVudCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50R29sZENvdW50IiwicGxheWVyRGF0YSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiaXNNYXgiLCJ0YXJnZXROb2RlIiwiZ2V0VG93ZXJJc01heCIsImFkZEdvbGRDb3VudCIsInVwZGF0ZUxldmVsIiwiZW1pdCIsInRvRGVzdHJveSIsInRhcmdldFRvd2VyIiwidXBkYXRlQnV0dG9uTm9kZSIsInNwcml0ZUZyYW1lIiwidXBkYXRlTWF4TGV2ZWxTcHJpdGVGcmFtZSIsInVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lIiwiY2hlY2tJc1VwZGF0ZU1heCIsImJhc2VUb3dlciIsImdldFVwZGF0ZUNvc3QiLCJnZXREZXN0cm95Q291bnQiLCJ1cGRhdGVDb3N0TGFiZWwiLCJzdHJpbmciLCJjb252ZXJ0TnVtVG9LIiwiZGVzdHJveVdpbkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEs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cG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIGZpbmQsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnVVSUJhc2UnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuLi8uLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG9vbCB9IGZyb20gJy4uLy4uL3V0aWwvVG9vbCc7XHJcbi8vIGltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdVcGRhdGVUb3dlclVJJylcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZVRvd2VyVUkgZXh0ZW5kcyBNZW51VUlCYXNlIHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVDb3N0TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGRlc3Ryb3lXaW5MYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ29zdENvdW50OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGRlc3Ryb3lXaW5Db3VudDogbnVtYmVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlTWF4TGV2ZWxTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICAvLyBwdWJsaWMgdGFyZ2V0VG93ZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b20gZGF0YVwiLCBjdXN0b21EYXRhKTtcclxuICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdiZyc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6huiDjOaZr1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNNYXggPSB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldFRvd2VySXNNYXgoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc01heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R29sZENvdW50ID49IHRoaXMudXBkYXRlQ29zdENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCh0aGlzLnVwZGF0ZUNvc3RDb3VudCAqIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZ29sZC1ub3QtZW5vdWdoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXNcIikuZW1pdCgnZ29sZC1ub3QtZW5vdWdoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZXN0cm95JzpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMuZGVzdHJveVdpbkNvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS50b0Rlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lzVXBkYXRlTWF4KCkge1xyXG4gICAgICAgIC8vIGxldCBpc01heCA9IHRoaXMuZ2V0VG93ZXJJc01heFxyXG4gICAgICAgIGxldCB0YXJnZXRUb3dlciA9IHRoaXMudGFyZ2V0Tm9kZTtcclxuICAgICAgICBsZXQgaXNNYXggPSB0YXJnZXRUb3dlci5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuZ2V0VG93ZXJJc01heCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXMgbWF4XCIsIGlzTWF4KVxyXG4gICAgICAgIGlmIChpc01heCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoZWNrSXNVcGRhdGVNYXhcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmm7TmlrDmjInpkq4g6LS05Zu+XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZU1heExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuKHRhcmdldFRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgc3VwZXIub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgdGhpcy5jaGVja0lzVXBkYXRlTWF4KCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGJhc2VUb3dlciA9IHRhcmdldFRvd2VyLmdldENvbXBvbmVudChUb3dlckJhc2UpO1xyXG4gICAgICAgIGxldCB1cGRhdGVDb3N0Q291bnQgPSBiYXNlVG93ZXIuZ2V0VXBkYXRlQ29zdCgpO1xyXG4gICAgICAgIGxldCBkZXN0cm95V2luQ291bnQgPSBiYXNlVG93ZXIuZ2V0RGVzdHJveUNvdW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29zdExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gVG9vbC5jb252ZXJ0TnVtVG9LKHVwZGF0ZUNvc3RDb3VudCkgKyAnJztcclxuICAgICAgICB0aGlzLmRlc3Ryb3lXaW5MYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFRvb2wuY29udmVydE51bVRvSyhkZXN0cm95V2luQ291bnQpICsgJyc7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29zdENvdW50ID0gdXBkYXRlQ29zdENvdW50O1xyXG4gICAgICAgIHRoaXMuZGVzdHJveVdpbkNvdW50ID0gZGVzdHJveVdpbkNvdW50O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=