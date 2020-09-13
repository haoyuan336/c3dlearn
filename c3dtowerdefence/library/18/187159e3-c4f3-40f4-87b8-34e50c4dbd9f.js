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
            // this.scheduleOnce(()=>{
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "start", this).call(this); // }, 0.2)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L1VwZGF0ZVRvd2VyVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJUb3dlckJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXBkYXRlVG93ZXJVSSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInVwZGF0ZUNvc3RDb3VudCIsImRlc3Ryb3lXaW5Db3VudCIsImdldENvbXBvbmVudCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50R29sZENvdW50IiwicGxheWVyRGF0YSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiaXNNYXgiLCJ0YXJnZXROb2RlIiwiZ2V0VG93ZXJJc01heCIsImFkZEdvbGRDb3VudCIsInVwZGF0ZUxldmVsIiwiZW1pdCIsInRvRGVzdHJveSIsInRhcmdldFRvd2VyIiwidXBkYXRlQnV0dG9uTm9kZSIsInNwcml0ZUZyYW1lIiwidXBkYXRlTWF4TGV2ZWxTcHJpdGVGcmFtZSIsInVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lIiwiY2hlY2tJc1VwZGF0ZU1heCIsImJhc2VUb3dlciIsImdldFVwZGF0ZUNvc3QiLCJnZXREZXN0cm95Q291bnQiLCJ1cGRhdGVDb3N0TGFiZWwiLCJzdHJpbmciLCJjb252ZXJ0TnVtVG9LIiwiZGVzdHJveVdpbkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEs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bENvbXBvbmVudCwgZmluZCwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uLy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi4vLi4vdXRpbC9Ub29sJztcclxuLy8gaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VwZGF0ZVRvd2VyVUknKVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlVG93ZXJVSSBleHRlbmRzIE1lbnVVSUJhc2Uge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUNvc3RMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZGVzdHJveVdpbkxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVDb3N0Q291bnQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZGVzdHJveVdpbkNvdW50OiBudW1iZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNYXhMZXZlbFNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyB0YXJnZXRUb3dlcjogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIC8vIH0sIDAuMilcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1c3RvbSBkYXRhXCIsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIGxldCBjdXJyZW50R29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JnJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Lit5LqG6IOM5pmvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndXBkYXRlJzpcclxuICAgICAgICAgICAgICAgIGxldCBpc01heCA9IHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuZ2V0VG93ZXJJc01heCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRHb2xkQ291bnQgPj0gdGhpcy51cGRhdGVDb3N0Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMudXBkYXRlQ29zdENvdW50ICogLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJnb2xkLW5vdC1lbm91Z2hcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZChcIkNhbnZhc1wiKS5lbWl0KCdnb2xkLW5vdC1lbm91Z2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQodGhpcy5kZXN0cm95V2luQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnRvRGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSXNVcGRhdGVNYXgoKSB7XHJcbiAgICAgICAgLy8gbGV0IGlzTWF4ID0gdGhpcy5nZXRUb3dlcklzTWF4XHJcbiAgICAgICAgbGV0IHRhcmdldFRvd2VyID0gdGhpcy50YXJnZXROb2RlO1xyXG4gICAgICAgIGxldCBpc01heCA9IHRhcmdldFRvd2VyLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5nZXRUb3dlcklzTWF4KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpcyBtYXhcIiwgaXNNYXgpXHJcbiAgICAgICAgaWYgKGlzTWF4KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2hlY2tJc1VwZGF0ZU1heFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuabtOaWsOaMiemSriDotLTlm75cIik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMudXBkYXRlTWF4TGV2ZWxTcHJpdGVGcmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9wZW4odGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuICAgICAgICBzdXBlci5vcGVuKHRhcmdldFRvd2VyKTtcclxuICAgICAgICB0aGlzLmNoZWNrSXNVcGRhdGVNYXgoKTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgYmFzZVRvd2VyID0gdGFyZ2V0VG93ZXIuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSk7XHJcbiAgICAgICAgbGV0IHVwZGF0ZUNvc3RDb3VudCA9IGJhc2VUb3dlci5nZXRVcGRhdGVDb3N0KCk7XHJcbiAgICAgICAgbGV0IGRlc3Ryb3lXaW5Db3VudCA9IGJhc2VUb3dlci5nZXREZXN0cm95Q291bnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3N0TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBUb29sLmNvbnZlcnROdW1Ub0sodXBkYXRlQ29zdENvdW50KSArICcnO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveVdpbkxhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gVG9vbC5jb252ZXJ0TnVtVG9LKGRlc3Ryb3lXaW5Db3VudCkgKyAnJztcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3N0Q291bnQgPSB1cGRhdGVDb3N0Q291bnQ7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95V2luQ291bnQgPSBkZXN0cm95V2luQ291bnQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==