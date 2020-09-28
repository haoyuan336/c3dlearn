System.register(["cc", "code-quality:cr", "../GameController.js", "./WeaponUpdateCellPrefab.js", "./InfoLayerCtlBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, SpriteComponent, instantiate, Prefab, LabelComponent, SpriteFrame, isValid, GameController, WeaponUpdateCellPrefab, InfoLayerCtlBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, WeaponInfoCtl;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponUpdateCellPrefab(extras) {
    _reporterNs.report("WeaponUpdateCellPrefab", "./../UI/WeaponUpdateCellPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoLayerCtlBase(extras) {
    _reporterNs.report("InfoLayerCtlBase", "./InfoLayerCtlBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      SpriteComponent = _cc.SpriteComponent;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      LabelComponent = _cc.LabelComponent;
      SpriteFrame = _cc.SpriteFrame;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_WeaponUpdateCellPrefabJs) {
      WeaponUpdateCellPrefab = _WeaponUpdateCellPrefabJs.WeaponUpdateCellPrefab;
    }, function (_InfoLayerCtlBaseJs) {
      InfoLayerCtlBase = _InfoLayerCtlBaseJs.InfoLayerCtlBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4185fepR9NDl6TuAmrhxLTe", "WeaponInfoCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WeaponInfoCtl", WeaponInfoCtl = (_dec = ccclass('WeaponInfoCtl'), _dec2 = property({
        type: _crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
          error: Error()
        }), GameController) : GameController
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: SpriteFrame
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(WeaponInfoCtl, _ref);

        function WeaponInfoCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WeaponInfoCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WeaponInfoCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateWeaponInfoCellPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponCellParentNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentInitRedHeartCountLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartCostGoldCount", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartButtonSpriteFrameLight", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartButtonSpriteFrameGray", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartButton", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "chooseAddRedHeartCountLabel", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scrollviewNode", _descriptor10, _assertThisInitialized(_this));

          _this.weaponIndoCellNodeList = [];
          _this.currentChooseRate = 0;
          return _this;
        }

        _createClass(WeaponInfoCtl, [{
          key: "start",
          //当前选择的倍数
          value: function start() {
            var _this2 = this;

            _get(_getPrototypeOf(WeaponInfoCtl.prototype), "start", this).call(this); // this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);


            this.node.on("refer-choose-rate-cost", function (chooseRate) {
              console.log("刷新当前选择的倍数", chooseRate);
              console.log("weapon indo cell node list", _this2.weaponIndoCellNodeList);

              for (var i = 0; i < _this2.weaponIndoCellNodeList.length; i++) {
                var node = _this2.weaponIndoCellNodeList[i];
                node.getComponent(_crd && WeaponUpdateCellPrefab === void 0 ? (_reportPossibleCrUseOfWeaponUpdateCellPrefab({
                  error: Error()
                }), WeaponUpdateCellPrefab) : WeaponUpdateCellPrefab).updateChooseRate(chooseRate);
              } // this.addRedHeartCountGoldCount.getComponent(LabelComponent).string


              _this2.currentChooseRate = chooseRate;

              _this2.referCurrentRedHeartCountUI();
            }); // this.node.on("enter-game", ()=>{

            this.initWeaponData(); // })
            //
          }
        }, {
          key: "referCurrentRedHeartCountUI",
          value: function referCurrentRedHeartCountUI() {
            var gameController = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            var cost = gameController.playerData.getAddOneRedHeartCostGoldCount() * this.currentChooseRate;
            this.addRedHeartCostGoldCount.getComponent(LabelComponent).string = cost + '';
            var currentGoldCount = gameController.playerData.getCurrentGoldCount();
            console.log("current gold count", currentGoldCount);
            console.log("cost", cost);

            if (currentGoldCount < cost) {
              this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameGray;
            } else {
              this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameLight;
            }

            this.currentInitRedHeartCountLabel.getComponent(LabelComponent).string = gameController.playerData.getCurrentInitRedHeartCount() + '';
            this.chooseAddRedHeartCountLabel.getComponent(LabelComponent).string = "+" + this.currentChooseRate + "";
          }
        }, {
          key: "initWeaponData",
          value: function initWeaponData() {
            var _this3 = this;

            //初始化当前武器的相关信息
            var gameController = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            var gameConfig = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
            var towerLevelData = this.gameController.playerData.getCurrentTowersLocalLevelData();

            for (var i = 0; i < towerLevelData.length; i++) {
              var data = towerLevelData[i];
              var node = instantiate(this.updateWeaponInfoCellPrefab);
              node.parent = this.weaponCellParentNode;
              node.getComponent(_crd && WeaponUpdateCellPrefab === void 0 ? (_reportPossibleCrUseOfWeaponUpdateCellPrefab({
                error: Error()
              }), WeaponUpdateCellPrefab) : WeaponUpdateCellPrefab).setData(data, gameController, gameConfig, this);
              node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
              this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5 + 10;
              this.weaponIndoCellNodeList.push(node);
            }

            this.gameController.node.on("update-gold-label", function () {
              _this3.referCurrentRedHeartCountUI();
            });
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            _get(_getPrototypeOf(WeaponInfoCtl.prototype), "onButtonClick", this).call(this, event, customData);

            switch (customData) {
              case 'add-heart-button':
                //增加红心的按钮
                var gameController = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController);
                var currentGoldCount = gameController.playerData.getCurrentGoldCount();
                var cost = gameController.playerData.getAddOneRedHeartCostGoldCount() * this.currentChooseRate;

                if (currentGoldCount < cost) {
                  this.node.emit("gold-not-enough");
                } else {
                  gameController.playerData.addGoldCount(-cost);
                  gameController.playerData.addLocalInitRedHeartCount(this.currentChooseRate); //

                  this.node.emit("refer-red-heart-label");
                }

                this.referCurrentRedHeartCountUI();
                break;

              default:
                break;
            }
          }
        }, {
          key: "weaponActived",
          value: function weaponActived(node) {
            //有武器被激活了'\
            var offSetY = node.position.y;

            if (isValid(this.scrollviewNode)) {
              console.log("scrollview pos", offSetY); // offSetY = -500;
              // this.scrollviewNode.getComponent(ScrollViewComponent).scrollToOffset(v3(0, offSetY * -1 + 200, 0), 0.2);
            } // let children = this.weaponCellParentNode.children;
            // for (let i = 0 ; children.length ; i ++){
            //     if (children[i].uuid === node.uuid){
            //         offSetY = 
            //     }
            // }

          }
        }]);

        return WeaponInfoCtl;
      }(_crd && InfoLayerCtlBase === void 0 ? (_reportPossibleCrUseOfInfoLayerCtlBase({
        error: Error()
      }), InfoLayerCtlBase) : InfoLayerCtlBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updateWeaponInfoCellPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weaponCellParentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentInitRedHeartCountLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartCostGoldCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartButtonSpriteFrameLight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartButtonSpriteFrameGray", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chooseAddRedHeartCountLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scrollviewNode", [_dec11], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25JbmZvQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJTcHJpdGVDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsIlByZWZhYiIsIkxhYmVsQ29tcG9uZW50IiwiU3ByaXRlRnJhbWUiLCJpc1ZhbGlkIiwiR2FtZUNvbnRyb2xsZXIiLCJXZWFwb25VcGRhdGVDZWxsUHJlZmFiIiwiSW5mb0xheWVyQ3RsQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIldlYXBvbkluZm9DdGwiLCJ0eXBlIiwid2VhcG9uSW5kb0NlbGxOb2RlTGlzdCIsImN1cnJlbnRDaG9vc2VSYXRlIiwibm9kZSIsIm9uIiwiY2hvb3NlUmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlQ2hvb3NlUmF0ZSIsInJlZmVyQ3VycmVudFJlZEhlYXJ0Q291bnRVSSIsImluaXRXZWFwb25EYXRhIiwiZ2FtZUNvbnRyb2xsZXIiLCJjb3N0IiwicGxheWVyRGF0YSIsImdldEFkZE9uZVJlZEhlYXJ0Q29zdEdvbGRDb3VudCIsImFkZFJlZEhlYXJ0Q29zdEdvbGRDb3VudCIsInN0cmluZyIsImN1cnJlbnRHb2xkQ291bnQiLCJnZXRDdXJyZW50R29sZENvdW50IiwiYWRkUmVkSGVhcnRCdXR0b24iLCJzcHJpdGVGcmFtZSIsImFkZFJlZEhlYXJ0QnV0dG9uU3ByaXRlRnJhbWVHcmF5IiwiYWRkUmVkSGVhcnRCdXR0b25TcHJpdGVGcmFtZUxpZ2h0IiwiY3VycmVudEluaXRSZWRIZWFydENvdW50TGFiZWwiLCJnZXRDdXJyZW50SW5pdFJlZEhlYXJ0Q291bnQiLCJjaG9vc2VBZGRSZWRIZWFydENvdW50TGFiZWwiLCJnYW1lQ29uZmlnIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJ0b3dlckxldmVsRGF0YSIsImdldEN1cnJlbnRUb3dlcnNMb2NhbExldmVsRGF0YSIsImRhdGEiLCJ1cGRhdGVXZWFwb25JbmZvQ2VsbFByZWZhYiIsInBhcmVudCIsIndlYXBvbkNlbGxQYXJlbnROb2RlIiwic2V0RGF0YSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwieSIsInB1c2giLCJldmVudCIsImN1c3RvbURhdGEiLCJlbWl0IiwiYWRkR29sZENvdW50IiwiYWRkTG9jYWxJbml0UmVkSGVhcnRDb3VudCIsIm9mZlNldFkiLCJzY3JvbGx2aWV3Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQXdCQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWdDQyxNQUFBQSxPLE9BQUFBLE87Ozs7QUFDM0lDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLHNCLDZCQUFBQSxzQjs7QUFFQUMsTUFBQUEsZ0IsdUJBQUFBLGdCOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlosVSxDQUF0QlksTztBQUFTQyxNQUFBQSxRLEdBQWFiLFUsQ0FBYmEsUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQVlIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFBTixPQUFELEMsVUFHUkYsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFHUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFJUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFB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TyxDQUFDLEtBQUt3RCxjQUFOLENBQVgsRUFBa0M7QUFDOUIzQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QnlDLE9BQTlCLEVBRDhCLENBRTlCO0FBQ0E7QUFDSCxhQVBxQixDQVF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0g7Ozs7Ozs7Ozs7O2lCQW5JdUMsSTs7Ozs7OztpQkFHSSxJOzs7Ozs7O2lCQUdSLEk7Ozs7Ozs7aUJBSVMsSTs7Ozs7OztpQkFFTCxJOzs7Ozs7O2lCQUVnQixJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBRXRCLEk7Ozs7Ozs7aUJBR1UsSTs7Ozs7OztpQkFHYixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MywgdmlldywgVHdlZW4sIFNwcml0ZUNvbXBvbmVudCwgQ29sb3IsIGluc3RhbnRpYXRlLCBQcmVmYWIsIExhYmVsQ29tcG9uZW50LCBTcHJpdGVGcmFtZSwgZ2FtZSwgVUlDb21wb25lbnQsIGlzVmFsaWQsIFNjcm9sbFZpZXdDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFdlYXBvblVwZGF0ZUNlbGxQcmVmYWIgfSBmcm9tICcuLy4uL1VJL1dlYXBvblVwZGF0ZUNlbGxQcmVmYWInO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEluZm9MYXllckN0bEJhc2UgfSBmcm9tICcuL0luZm9MYXllckN0bEJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1dlYXBvbkluZm9DdGwnKVxyXG5leHBvcnQgY2xhc3MgV2VhcG9uSW5mb0N0bCBleHRlbmRzIEluZm9MYXllckN0bEJhc2Uge1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGJsb2NrQmdOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgd2VhcG9uSW5mb05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyB3ZWFwb25JbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogR2FtZUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHVwZGF0ZVdlYXBvbkluZm9DZWxsUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25DZWxsUGFyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50SW5pdFJlZEhlYXJ0Q291bnRMYWJlbDogTm9kZSA9IG51bGw7IC8v5b2T5YmN55qE57qi5b+D55qE5Liq5pWw55qEbGFiZWxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhZGRSZWRIZWFydENvc3RHb2xkQ291bnQ6IE5vZGUgPSBudWxsOyAvL+WinuWKoOS4gOmil+e6ouW/g+mcgOimgeeahOmHkeW4geS4quaVsOeahGxhYmVsIFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBhZGRSZWRIZWFydEJ1dHRvblNwcml0ZUZyYW1lTGlnaHQ6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/lop7liqDkuIDpopfnuqLlv4PnmoTnsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgYWRkUmVkSGVhcnRCdXR0b25TcHJpdGVGcmFtZUdyYXk6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/lop7liqDkuIDpopfnuqLlv4PnmoTnsr7ngbXluKfngbDoibJcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhZGRSZWRIZWFydEJ1dHRvbjogTm9kZSA9IG51bGw7IC8v5aKe5Yqg5LiA6aKX57qi5b+D55qE5oyJ6ZKuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNob29zZUFkZFJlZEhlYXJ0Q291bnRMYWJlbDogTm9kZSA9IG51bGw7IC8v6YCJ5oup55qE5aKe5Yqg55qE57qi5b+D55qE5Liq5pWwXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNjcm9sbHZpZXdOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgd2VhcG9uSW5kb0NlbGxOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q2hvb3NlUmF0ZTogbnVtYmVyID0gMDsgLy/lvZPliY3pgInmi6nnmoTlgI3mlbBcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIC8vIHRoaXMud2VhcG9uSW5mb05vZGUucG9zaXRpb24gPSB2Myh0aGlzLndlYXBvbkluZm9Ob2RlLndpZHRoICogMC41LCAwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlZmVyLWNob29zZS1yYXRlLWNvc3RcIiwgKGNob29zZVJhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDlvZPliY3pgInmi6nnmoTlgI3mlbBcIiwgY2hvb3NlUmF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2VhcG9uIGluZG8gY2VsbCBub2RlIGxpc3RcIiwgdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlYXBvbkluZG9DZWxsTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikudXBkYXRlQ2hvb3NlUmF0ZShjaG9vc2VSYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmFkZFJlZEhlYXJ0Q291bnRHb2xkQ291bnQuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENob29zZVJhdGUgPSBjaG9vc2VSYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnJlZmVyQ3VycmVudFJlZEhlYXJ0Q291bnRVSSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJlbnRlci1nYW1lXCIsICgpPT57XHJcbiAgICAgICAgdGhpcy5pbml0V2VhcG9uRGF0YSgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZlckN1cnJlbnRSZWRIZWFydENvdW50VUkoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVDb250cm9sbGVyID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRBZGRPbmVSZWRIZWFydENvc3RHb2xkQ291bnQoKSAqIHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgdGhpcy5hZGRSZWRIZWFydENvc3RHb2xkQ291bnQuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBjb3N0ICsgJyc7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgZ29sZCBjb3VudFwiLCBjdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvc3RcIiwgY29zdCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRHb2xkQ291bnQgPCBjb3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVkSGVhcnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmFkZFJlZEhlYXJ0QnV0dG9uU3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVkSGVhcnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmFkZFJlZEhlYXJ0QnV0dG9uU3ByaXRlRnJhbWVMaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEluaXRSZWRIZWFydENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCgpICsgJyc7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VBZGRSZWRIZWFydENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBcIitcIiArIHRoaXMuY3VycmVudENob29zZVJhdGUgKyBcIlwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXRXZWFwb25EYXRhKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5b2T5YmN5q2m5Zmo55qE55u45YWz5L+h5oGvXHJcbiAgICAgICAgbGV0IGdhbWVDb250cm9sbGVyID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgICAgIGxldCB0b3dlckxldmVsRGF0YSA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJzTG9jYWxMZXZlbERhdGEoKTtcclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdG93ZXJMZXZlbERhdGFbaV07XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy51cGRhdGVXZWFwb25JbmZvQ2VsbFByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy53ZWFwb25DZWxsUGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikuc2V0RGF0YShkYXRhLCBnYW1lQ29udHJvbGxlciwgZ2FtZUNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCAtaSAqIChub2RlLmhlaWdodCArIDEwKSAtIChub2RlLmhlaWdodCArIDEwKSAqIDAuNSAtIDUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbkNlbGxQYXJlbnROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgbm9kZS5oZWlnaHQgKiAwLjUgKyAxMDtcclxuICAgICAgICAgICAgdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInVwZGF0ZS1nb2xkLWxhYmVsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZlckN1cnJlbnRSZWRIZWFydENvdW50VUkoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3VwZXIub25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSlcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWRkLWhlYXJ0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICAvL+WinuWKoOe6ouW/g+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWVDb250cm9sbGVyID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRBZGRPbmVSZWRIZWFydENvc3RHb2xkQ291bnQoKSAqIHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImdvbGQtbm90LWVub3VnaFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoLWNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkTG9jYWxJbml0UmVkSGVhcnRDb3VudCh0aGlzLmN1cnJlbnRDaG9vc2VSYXRlKTsvL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlckN1cnJlbnRSZWRIZWFydENvdW50VUkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdlYXBvbkFjdGl2ZWQobm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8v5pyJ5q2m5Zmo6KKr5r+A5rS75LqGJ1xcXHJcbiAgICAgICAgbGV0IG9mZlNldFkgPSBub2RlLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5zY3JvbGx2aWV3Tm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY3JvbGx2aWV3IHBvc1wiLCBvZmZTZXRZKTtcclxuICAgICAgICAgICAgLy8gb2ZmU2V0WSA9IC01MDA7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsdmlld05vZGUuZ2V0Q29tcG9uZW50KFNjcm9sbFZpZXdDb21wb25lbnQpLnNjcm9sbFRvT2Zmc2V0KHYzKDAsIG9mZlNldFkgKiAtMSArIDIwMCwgMCksIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBjaGlsZHJlbiA9IHRoaXMud2VhcG9uQ2VsbFBhcmVudE5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBjaGlsZHJlbi5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAvLyAgICAgaWYgKGNoaWxkcmVuW2ldLnV1aWQgPT09IG5vZGUudXVpZCl7XHJcbiAgICAgICAgLy8gICAgICAgICBvZmZTZXRZID0gXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19