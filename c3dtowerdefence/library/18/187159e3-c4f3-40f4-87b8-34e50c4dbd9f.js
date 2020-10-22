System.register(["cc", "code-quality:cr", "./MenuUIBase.js", "../../Towers/TowerBase.js", "../../util/Tool.js", "../../GameInstance.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, LabelComponent, find, SpriteFrame, SpriteComponent, MenuUIBase, TowerBase, Tool, GameInstance, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, UpdateTowerUI;

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

  function _reportPossibleCrUseOfTool(extras) {
    _reporterNs.report("Tool", "../../util/Tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../../GameInstance", _context.meta, extras);
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
    }, function (_utilToolJs) {
      Tool = _utilToolJs.Tool;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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
          value: function onLoad() {// this.gameController = find("GameController").getComponent(GameController);
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
          value: function init(gameConfig) {
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "init", this).call(this, gameConfig);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");
            console.log("custom data", customData);
            var currentGoldCount = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentGoldCount();

            switch (customData) {
              case 'bg':
                console.log("点中了背景");
                this.state.setState("close-ui");
                break;

              case 'update':
                var isMax = this.targetNode.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).getTowerIsMax();

                if (isMax) {
                  return;
                }

                if (currentGoldCount >= this.updateCostCount) {
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().getPlayerData().addGoldCount(this.updateCostCount * -1);
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
            var isMax = targetTower.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
              error: Error()
            }), TowerBase) : TowerBase).getTowerIsMax();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L1VwZGF0ZVRvd2VyVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJUb3dlckJhc2UiLCJUb29sIiwiR2FtZUluc3RhbmNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXBkYXRlVG93ZXJVSSIsInR5cGUiLCJ1cGRhdGVDb3N0Q291bnQiLCJkZXN0cm95V2luQ291bnQiLCJnYW1lQ29uZmlnIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50R29sZENvdW50IiwiZ2V0SW5zdGFuY2UiLCJnZXRQbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsInN0YXRlIiwic2V0U3RhdGUiLCJpc01heCIsInRhcmdldE5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRUb3dlcklzTWF4IiwiYWRkR29sZENvdW50IiwidXBkYXRlTGV2ZWwiLCJ0b0Rlc3Ryb3kiLCJ0YXJnZXRUb3dlciIsInVwZGF0ZUJ1dHRvbk5vZGUiLCJzcHJpdGVGcmFtZSIsInVwZGF0ZU1heExldmVsU3ByaXRlRnJhbWUiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZSIsImNoZWNrSXNVcGRhdGVNYXgiLCJiYXNlVG93ZXIiLCJnZXRVcGRhdGVDb3N0IiwiZ2V0RGVzdHJveUNvdW50IiwidXBkYXRlQ29zdExhYmVsIiwic3RyaW5nIiwiY29udmVydE51bVRvSyIsImRlc3Ryb3lXaW5MYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1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bmVudCwgZmluZCwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uLy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG4vLyBpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi4vLi4vdXRpbC9Ub29sJztcclxuaW1wb3J0IHsgR2FtZUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vR2FtZUluc3RhbmNlJztcclxuLy8gaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VwZGF0ZVRvd2VyVUknKVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlVG93ZXJVSSBleHRlbmRzIE1lbnVVSUJhc2Uge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUNvc3RMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZGVzdHJveVdpbkxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVDb3N0Q291bnQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZGVzdHJveVdpbkNvdW50OiBudW1iZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNYXhMZXZlbFNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyB0YXJnZXRUb3dlcjogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAvLyBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIC8vIH0sIDAuMilcclxuICAgIH1cclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0KXtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwicGxheWVyLWJ1dHRvbi1jbGljay1hdWRpb1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b20gZGF0YVwiLCBjdXN0b21EYXRhKTtcclxuICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdiZyc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6huiDjOaZr1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNNYXggPSB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuZ2V0VG93ZXJJc01heCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRHb2xkQ291bnQgPj0gdGhpcy51cGRhdGVDb3N0Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuYWRkR29sZENvdW50KHRoaXMudXBkYXRlQ29zdENvdW50ICogLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJnb2xkLW5vdC1lbm91Z2hcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZChcIkNhbnZhc1wiKS5lbWl0KCdnb2xkLW5vdC1lbm91Z2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQodGhpcy5kZXN0cm95V2luQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnRvRGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSXNVcGRhdGVNYXgoKSB7XHJcbiAgICAgICAgLy8gbGV0IGlzTWF4ID0gdGhpcy5nZXRUb3dlcklzTWF4XHJcbiAgICAgICAgbGV0IHRhcmdldFRvd2VyID0gdGhpcy50YXJnZXROb2RlO1xyXG4gICAgICAgIGxldCBpc01heCA9IHRhcmdldFRvd2VyLmdldENvbXBvbmVudChUb3dlckJhc2UpLmdldFRvd2VySXNNYXgoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlzIG1heFwiLCBpc01heClcclxuICAgICAgICBpZiAoaXNNYXgpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGVja0lzVXBkYXRlTWF4XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pu05paw5oyJ6ZKuIOi0tOWbvlwiKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVNYXhMZXZlbFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMudXBkYXRlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3Blbih0YXJnZXRUb3dlcjogTm9kZSkge1xyXG4gICAgICAgIHN1cGVyLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tJc1VwZGF0ZU1heCgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBiYXNlVG93ZXIgPSB0YXJnZXRUb3dlci5nZXRDb21wb25lbnQoVG93ZXJCYXNlKTtcclxuICAgICAgICBsZXQgdXBkYXRlQ29zdENvdW50ID0gYmFzZVRvd2VyLmdldFVwZGF0ZUNvc3QoKTtcclxuICAgICAgICBsZXQgZGVzdHJveVdpbkNvdW50ID0gYmFzZVRvd2VyLmdldERlc3Ryb3lDb3VudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvc3RMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFRvb2wuY29udmVydE51bVRvSyh1cGRhdGVDb3N0Q291bnQpICsgJyc7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95V2luTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBUb29sLmNvbnZlcnROdW1Ub0soZGVzdHJveVdpbkNvdW50KSArICcnO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvc3RDb3VudCA9IHVwZGF0ZUNvc3RDb3VudDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lXaW5Db3VudCA9IGRlc3Ryb3lXaW5Db3VudDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19