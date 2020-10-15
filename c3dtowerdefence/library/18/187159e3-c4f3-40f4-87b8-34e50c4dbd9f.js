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
          value: function start() {} // Your initialization goes here.
          // this.scheduleOnce(()=>{
          // super.start();
          // }, 0.2)
          // init(gameConfig: Object, gameController: GameController){
          //     super.init(gameConfig, gameController);
          // }

        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L1VwZGF0ZVRvd2VyVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJUb3dlckJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXBkYXRlVG93ZXJVSSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInVwZGF0ZUNvc3RDb3VudCIsImRlc3Ryb3lXaW5Db3VudCIsImdldENvbXBvbmVudCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEdvbGRDb3VudCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImlzTWF4IiwidGFyZ2V0Tm9kZSIsImdldFRvd2VySXNNYXgiLCJhZGRHb2xkQ291bnQiLCJ1cGRhdGVMZXZlbCIsInRvRGVzdHJveSIsInRhcmdldFRvd2VyIiwidXBkYXRlQnV0dG9uTm9kZSIsInNwcml0ZUZyYW1lIiwidXBkYXRlTWF4TGV2ZWxTcHJpdGVGcmFtZSIsInVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lIiwiY2hlY2tJc1VwZGF0ZU1heCIsImJhc2VUb3dlciIsImdldFVwZGF0ZUNvc3QiLCJnZXREZXN0cm95Q291bnQiLCJ1cGRhdGVDb3N0TGFiZWwiLCJzdHJpbmciLCJjb252ZXJ0TnVtVG9LIiwiZGVzdHJveVdpbkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEs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Ozs7aUJBR2QsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIGZpbmQsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnVVSUJhc2UnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuLi8uLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG9vbCB9IGZyb20gJy4uLy4uL3V0aWwvVG9vbCc7XHJcbi8vIGltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdVcGRhdGVUb3dlclVJJylcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZVRvd2VyVUkgZXh0ZW5kcyBNZW51VUlCYXNlIHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVDb3N0TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGRlc3Ryb3lXaW5MYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ29zdENvdW50OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGRlc3Ryb3lXaW5Db3VudDogbnVtYmVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlTWF4TGV2ZWxTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICAvLyBwdWJsaWMgdGFyZ2V0VG93ZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgLy8gc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICAvLyB9LCAwLjIpXHJcbiAgICB9XHJcbiAgICAvLyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKXtcclxuICAgIC8vICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgIC8vIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tIGRhdGFcIiwgY3VzdG9tRGF0YSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmcnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuobog4zmma9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGlzTWF4ID0gdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5nZXRUb3dlcklzTWF4KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA+PSB0aGlzLnVwZGF0ZUNvc3RDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQodGhpcy51cGRhdGVDb3N0Q291bnQgKiAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImdvbGQtbm90LWVub3VnaFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kKFwiQ2FudmFzXCIpLmVtaXQoJ2dvbGQtbm90LWVub3VnaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGVzdHJveSc6XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCh0aGlzLmRlc3Ryb3lXaW5Db3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkudG9EZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1VwZGF0ZU1heCgpIHtcclxuICAgICAgICAvLyBsZXQgaXNNYXggPSB0aGlzLmdldFRvd2VySXNNYXhcclxuICAgICAgICBsZXQgdGFyZ2V0VG93ZXIgPSB0aGlzLnRhcmdldE5vZGU7XHJcbiAgICAgICAgbGV0IGlzTWF4ID0gdGFyZ2V0VG93ZXIuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldFRvd2VySXNNYXgoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlzIG1heFwiLCBpc01heClcclxuICAgICAgICBpZiAoaXNNYXgpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGVja0lzVXBkYXRlTWF4XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pu05paw5oyJ6ZKuIOi0tOWbvlwiKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVNYXhMZXZlbFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMudXBkYXRlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3Blbih0YXJnZXRUb3dlcjogTm9kZSkge1xyXG4gICAgICAgIHN1cGVyLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tJc1VwZGF0ZU1heCgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBiYXNlVG93ZXIgPSB0YXJnZXRUb3dlci5nZXRDb21wb25lbnQoVG93ZXJCYXNlKTtcclxuICAgICAgICBsZXQgdXBkYXRlQ29zdENvdW50ID0gYmFzZVRvd2VyLmdldFVwZGF0ZUNvc3QoKTtcclxuICAgICAgICBsZXQgZGVzdHJveVdpbkNvdW50ID0gYmFzZVRvd2VyLmdldERlc3Ryb3lDb3VudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvc3RMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFRvb2wuY29udmVydE51bVRvSyh1cGRhdGVDb3N0Q291bnQpICsgJyc7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95V2luTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBUb29sLmNvbnZlcnROdW1Ub0soZGVzdHJveVdpbkNvdW50KSArICcnO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvc3RDb3VudCA9IHVwZGF0ZUNvc3RDb3VudDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lXaW5Db3VudCA9IGRlc3Ryb3lXaW5Db3VudDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19