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
          value: function start() {// Your initialization goes here.
            // this.scheduleOnce(()=>{
            // super.start();
            // }, 0.2)
          }
        }, {
          key: "init",
          value: function init(gameConfig, gameController) {
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "init", this).call(this, gameConfig, gameController);
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
                // this.gameController.playerData.addGoldCount(this.destroyWinCount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L1VwZGF0ZVRvd2VyVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJUb3dlckJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXBkYXRlVG93ZXJVSSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInVwZGF0ZUNvc3RDb3VudCIsImRlc3Ryb3lXaW5Db3VudCIsImdldENvbXBvbmVudCIsImdhbWVDb25maWciLCJldmVudCIsImN1c3RvbURhdGEiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEdvbGRDb3VudCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImlzTWF4IiwidGFyZ2V0Tm9kZSIsImdldFRvd2VySXNNYXgiLCJhZGRHb2xkQ291bnQiLCJ1cGRhdGVMZXZlbCIsImVtaXQiLCJ0b0Rlc3Ryb3kiLCJ0YXJnZXRUb3dlciIsInVwZGF0ZUJ1dHRvbk5vZGUiLCJzcHJpdGVGcmFtZSIsInVwZGF0ZU1heExldmVsU3ByaXRlRnJhbWUiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZSIsImNoZWNrSXNVcGRhdGVNYXgiLCJiYXNlVG93ZXIiLCJnZXRVcGRhdGVDb3N0IiwiZ2V0RGVzdHJveUNvdW50IiwidXBkYXRlQ29zdExhYmVsIiwic3RyaW5nIiwiY29udmVydE51bVRvSyIsImRlc3Ryb3lXaW5MYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxN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QkFHZCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBMYWJlbENvbXBvbmVudCwgZmluZCwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uLy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi4vLi4vdXRpbC9Ub29sJztcclxuLy8gaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VwZGF0ZVRvd2VyVUknKVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlVG93ZXJVSSBleHRlbmRzIE1lbnVVSUJhc2Uge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUNvc3RMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZGVzdHJveVdpbkxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVDb3N0Q291bnQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZGVzdHJveVdpbkNvdW50OiBudW1iZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNYXhMZXZlbFNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyB0YXJnZXRUb3dlcjogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAvLyBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIC8vIH0sIDAuMilcclxuICAgIH1cclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tIGRhdGFcIiwgY3VzdG9tRGF0YSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmcnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuobog4zmma9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGlzTWF4ID0gdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5nZXRUb3dlcklzTWF4KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA+PSB0aGlzLnVwZGF0ZUNvc3RDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQodGhpcy51cGRhdGVDb3N0Q291bnQgKiAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImdvbGQtbm90LWVub3VnaFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kKFwiQ2FudmFzXCIpLmVtaXQoJ2dvbGQtbm90LWVub3VnaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGVzdHJveSc6XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCh0aGlzLmRlc3Ryb3lXaW5Db3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkudG9EZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1VwZGF0ZU1heCgpIHtcclxuICAgICAgICAvLyBsZXQgaXNNYXggPSB0aGlzLmdldFRvd2VySXNNYXhcclxuICAgICAgICBsZXQgdGFyZ2V0VG93ZXIgPSB0aGlzLnRhcmdldE5vZGU7XHJcbiAgICAgICAgbGV0IGlzTWF4ID0gdGFyZ2V0VG93ZXIuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldFRvd2VySXNNYXgoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlzIG1heFwiLCBpc01heClcclxuICAgICAgICBpZiAoaXNNYXgpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGVja0lzVXBkYXRlTWF4XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pu05paw5oyJ6ZKuIOi0tOWbvlwiKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVNYXhMZXZlbFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMudXBkYXRlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3Blbih0YXJnZXRUb3dlcjogTm9kZSkge1xyXG4gICAgICAgIHN1cGVyLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tJc1VwZGF0ZU1heCgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBiYXNlVG93ZXIgPSB0YXJnZXRUb3dlci5nZXRDb21wb25lbnQoVG93ZXJCYXNlKTtcclxuICAgICAgICBsZXQgdXBkYXRlQ29zdENvdW50ID0gYmFzZVRvd2VyLmdldFVwZGF0ZUNvc3QoKTtcclxuICAgICAgICBsZXQgZGVzdHJveVdpbkNvdW50ID0gYmFzZVRvd2VyLmdldERlc3Ryb3lDb3VudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvc3RMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFRvb2wuY29udmVydE51bVRvSyh1cGRhdGVDb3N0Q291bnQpICsgJyc7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95V2luTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBUb29sLmNvbnZlcnROdW1Ub0soZGVzdHJveVdpbkNvdW50KSArICcnO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvc3RDb3VudCA9IHVwZGF0ZUNvc3RDb3VudDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lXaW5Db3VudCA9IGRlc3Ryb3lXaW5Db3VudDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19