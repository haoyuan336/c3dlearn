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
          value: function init(gameConfig) {
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "init", this).call(this, gameConfig);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L1VwZGF0ZVRvd2VyVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJUb3dlckJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXBkYXRlVG93ZXJVSSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInVwZGF0ZUNvc3RDb3VudCIsImRlc3Ryb3lXaW5Db3VudCIsImdldENvbXBvbmVudCIsImdhbWVDb25maWciLCJldmVudCIsImN1c3RvbURhdGEiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEdvbGRDb3VudCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImlzTWF4IiwidGFyZ2V0Tm9kZSIsImdldFRvd2VySXNNYXgiLCJhZGRHb2xkQ291bnQiLCJ1cGRhdGVMZXZlbCIsImVtaXQiLCJ0b0Rlc3Ryb3kiLCJ0YXJnZXRUb3dlciIsInVwZGF0ZUJ1dHRvbk5vZGUiLCJzcHJpdGVGcmFtZSIsInVwZGF0ZU1heExldmVsU3ByaXRlRnJhbWUiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZSIsImNoZWNrSXNVcGRhdGVNYXgiLCJiYXNlVG93ZXIiLCJnZXRVcGRhdGVDb3N0IiwiZ2V0RGVzdHJveUNvdW50IiwidXBkYXRlQ29zdExhYmVsIiwic3RyaW5nIiwiY29udmVydE51bVRvSyIsImRlc3Ryb3lXaW5MYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsZSxPQUFBQSxlOzs7O0FBQ2hFQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxJLGVBQUFBLEk7Ozs7OztBQUNUO0FBQ1FDLE1BQUFBLE8sR0FBc0JYLFUsQ0FBdEJXLE87QUFBU0MsTUFBQUEsUSxHQUFhWixVLENBQWJZLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFFUlcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFNUlcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFHUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFHUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVZGYyxjLEdBQWlDLEk7Z0JBRWpDQyxlLEdBQTBCLEk7Z0JBQzFCQyxlLEdBQTBCLEk7Ozs7Ozs7Ozs7Ozs7QUFTakM7bUNBQ1M7QUFDTCxpQkFBS0YsY0FBTCxHQUFzQlosSUFBSSxDQUFDLGdCQUFELENBQUosQ0FBdUJlLFlBQXZCO0FBQUE7QUFBQSxpREFBdEI7QUFDSDs7O2tDQUNPLENBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7OytCQUNJQyxVLEVBQW1CO0FBQ3BCLG9GQUFXQSxVQUFYO0FBQ0g7Ozt3Q0FDYUMsSyxFQUFPQyxVLEVBQVk7QUFDN0JDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLFVBQTNCO0FBQ0EsZ0JBQUlHLGdCQUFnQixHQUFHLEtBQUtULGNBQUwsQ0FBb0JVLFVBQXBCLENBQStCQyxtQkFBL0IsRUFBdkI7O0FBRUEsb0JBQVFMLFVBQVI7QUFDSSxtQkFBSyxJQUFMO0FBQ0lDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EscUJBQUtJLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixVQUFwQjtBQUNBOztBQUNKLG1CQUFLLFFBQUw7QUFDSSxvQkFBSUMsS0FBSyxHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JaLFlBQWhCO0FBQUE7QUFBQSw4Q0FBeUNhLGFBQXpDLEVBQVo7O0FBQ0Esb0JBQUlGLEtBQUosRUFBVztBQUNQO0FBQ0g7O0FBQ0Qsb0JBQUlMLGdCQUFnQixJQUFJLEtBQUtSLGVBQTdCLEVBQThDO0FBQzFDLHVCQUFLRCxjQUFMLENBQW9CVSxVQUFwQixDQUErQk8sWUFBL0IsQ0FBNEMsS0FBS2hCLGVBQUwsR0FBdUIsQ0FBQyxDQUFwRTtBQUNBLHVCQUFLVyxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsVUFBcEI7QUFDQSx1QkFBS0UsVUFBTCxDQUFnQlosWUFBaEI7QUFBQTtBQUFBLDhDQUF3Q2UsV0FBeEM7QUFDSCxpQkFKRCxNQUlPO0FBQ0g7QUFDQTlCLGtCQUFBQSxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWUrQixJQUFmLENBQW9CLGlCQUFwQjtBQUNIOztBQUdEOztBQUNKLG1CQUFLLFNBQUw7QUFFSTtBQUNBLHFCQUFLUCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsVUFBcEI7QUFDQSxxQkFBS0UsVUFBTCxDQUFnQlosWUFBaEI7QUFBQTtBQUFBLDRDQUF3Q2lCLFNBQXhDO0FBRUE7O0FBQ0o7QUFDSTtBQTdCUjtBQStCSDs7OzZDQUVrQjtBQUNmO0FBQ0EsZ0JBQUlDLFdBQVcsR0FBRyxLQUFLTixVQUF2QjtBQUNBLGdCQUFJRCxLQUFLLEdBQUdPLFdBQVcsQ0FBQ2xCLFlBQVo7QUFBQTtBQUFBLDBDQUFxQ2EsYUFBckMsRUFBWjtBQUNBVCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTSxLQUF0Qjs7QUFDQSxnQkFBSUEsS0FBSixFQUFXO0FBQ1A7QUFDQVAsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLG1CQUFLYyxnQkFBTCxDQUFzQm5CLFlBQXRCLENBQW1DYixlQUFuQyxFQUFvRGlDLFdBQXBELEdBQWtFLEtBQUtDLHlCQUF2RTtBQUNILGFBSkQsTUFJTztBQUNILG1CQUFLRixnQkFBTCxDQUFzQm5CLFlBQXRCLENBQW1DYixlQUFuQyxFQUFvRGlDLFdBQXBELEdBQWtFLEtBQUtFLHVCQUF2RTtBQUNIO0FBQ0o7OzsrQkFDSUosVyxFQUFtQjtBQUNwQixvRkFBV0EsV0FBWDs7QUFDQSxpQkFBS0ssZ0JBQUw7QUFJQSxnQkFBSUMsU0FBUyxHQUFHTixXQUFXLENBQUNsQixZQUFaO0FBQUE7QUFBQSx1Q0FBaEI7QUFDQSxnQkFBSUYsZUFBZSxHQUFHMEIsU0FBUyxDQUFDQyxhQUFWLEVBQXRCO0FBQ0EsZ0JBQUkxQixlQUFlLEdBQUd5QixTQUFTLENBQUNFLGVBQVYsRUFBdEI7QUFFQSxpQkFBS0MsZUFBTCxDQUFxQjNCLFlBQXJCLENBQWtDaEIsY0FBbEMsRUFBa0Q0QyxNQUFsRCxHQUEyRDtBQUFBO0FBQUEsOEJBQUtDLGFBQUwsQ0FBbUIvQixlQUFuQixJQUFzQyxFQUFqRztBQUNBLGlCQUFLZ0MsZUFBTCxDQUFxQjlCLFlBQXJCLENBQWtDaEIsY0FBbEMsRUFBa0Q0QyxNQUFsRCxHQUEyRDtBQUFBO0FBQUEsOEJBQUtDLGFBQUwsQ0FBbUI5QixlQUFuQixJQUFzQyxFQUFqRztBQUVBLGlCQUFLRCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLGlCQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNIOzs7Ozs7Ozs7OztpQkE3RjhCLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFNaUIsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdkLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBmaW5kLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBNZW51VUlCYXNlIH0gZnJvbSAnLi9NZW51VUlCYXNlJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvb2wgfSBmcm9tICcuLi8uLi91dGlsL1Rvb2wnO1xyXG4vLyBpbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZU9iamVjdCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVXBkYXRlVG93ZXJVSScpXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVUb3dlclVJIGV4dGVuZHMgTWVudVVJQmFzZSB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQ29zdExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBkZXN0cm95V2luTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUNvc3RDb3VudDogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBkZXN0cm95V2luQ291bnQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZU1heExldmVsU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHVibGljIHRhcmdldFRvd2VyOiBOb2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgIC8vIHN1cGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gfSwgMC4yKVxyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lQ29uZmlnOiBPYmplY3Qpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b20gZGF0YVwiLCBjdXN0b21EYXRhKTtcclxuICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdiZyc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6huiDjOaZr1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNNYXggPSB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldFRvd2VySXNNYXgoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc01heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R29sZENvdW50ID49IHRoaXMudXBkYXRlQ29zdENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCh0aGlzLnVwZGF0ZUNvc3RDb3VudCAqIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZ29sZC1ub3QtZW5vdWdoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXNcIikuZW1pdCgnZ29sZC1ub3QtZW5vdWdoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZXN0cm95JzpcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMuZGVzdHJveVdpbkNvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS50b0Rlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lzVXBkYXRlTWF4KCkge1xyXG4gICAgICAgIC8vIGxldCBpc01heCA9IHRoaXMuZ2V0VG93ZXJJc01heFxyXG4gICAgICAgIGxldCB0YXJnZXRUb3dlciA9IHRoaXMudGFyZ2V0Tm9kZTtcclxuICAgICAgICBsZXQgaXNNYXggPSB0YXJnZXRUb3dlci5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuZ2V0VG93ZXJJc01heCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXMgbWF4XCIsIGlzTWF4KVxyXG4gICAgICAgIGlmIChpc01heCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoZWNrSXNVcGRhdGVNYXhcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmm7TmlrDmjInpkq4g6LS05Zu+XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZU1heExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuKHRhcmdldFRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgc3VwZXIub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgdGhpcy5jaGVja0lzVXBkYXRlTWF4KCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGJhc2VUb3dlciA9IHRhcmdldFRvd2VyLmdldENvbXBvbmVudChUb3dlckJhc2UpO1xyXG4gICAgICAgIGxldCB1cGRhdGVDb3N0Q291bnQgPSBiYXNlVG93ZXIuZ2V0VXBkYXRlQ29zdCgpO1xyXG4gICAgICAgIGxldCBkZXN0cm95V2luQ291bnQgPSBiYXNlVG93ZXIuZ2V0RGVzdHJveUNvdW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29zdExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gVG9vbC5jb252ZXJ0TnVtVG9LKHVwZGF0ZUNvc3RDb3VudCkgKyAnJztcclxuICAgICAgICB0aGlzLmRlc3Ryb3lXaW5MYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFRvb2wuY29udmVydE51bVRvSyhkZXN0cm95V2luQ291bnQpICsgJyc7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29zdENvdW50ID0gdXBkYXRlQ29zdENvdW50O1xyXG4gICAgICAgIHRoaXMuZGVzdHJveVdpbkNvdW50ID0gZGVzdHJveVdpbkNvdW50O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=