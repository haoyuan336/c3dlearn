System.register(["cc", "code-quality:cr", "../GameController.js", "./WeaponUpdateCellPrefab.js", "./InfoLayerCtlBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, SpriteComponent, instantiate, Prefab, LabelComponent, SpriteFrame, GameController, WeaponUpdateCellPrefab, InfoLayerCtlBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, WeaponInfoCtl;

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
              }), WeaponUpdateCellPrefab) : WeaponUpdateCellPrefab).setData(data, gameController, gameConfig);
              node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
              this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5;
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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25JbmZvQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJTcHJpdGVDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsIlByZWZhYiIsIkxhYmVsQ29tcG9uZW50IiwiU3ByaXRlRnJhbWUiLCJHYW1lQ29udHJvbGxlciIsIldlYXBvblVwZGF0ZUNlbGxQcmVmYWIiLCJJbmZvTGF5ZXJDdGxCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiV2VhcG9uSW5mb0N0bCIsInR5cGUiLCJ3ZWFwb25JbmRvQ2VsbE5vZGVMaXN0IiwiY3VycmVudENob29zZVJhdGUiLCJub2RlIiwib24iLCJjaG9vc2VSYXRlIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVDaG9vc2VSYXRlIiwicmVmZXJDdXJyZW50UmVkSGVhcnRDb3VudFVJIiwiaW5pdFdlYXBvbkRhdGEiLCJnYW1lQ29udHJvbGxlciIsImNvc3QiLCJwbGF5ZXJEYXRhIiwiZ2V0QWRkT25lUmVkSGVhcnRDb3N0R29sZENvdW50IiwiYWRkUmVkSGVhcnRDb3N0R29sZENvdW50Iiwic3RyaW5nIiwiY3VycmVudEdvbGRDb3VudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJhZGRSZWRIZWFydEJ1dHRvbiIsInNwcml0ZUZyYW1lIiwiYWRkUmVkSGVhcnRCdXR0b25TcHJpdGVGcmFtZUdyYXkiLCJhZGRSZWRIZWFydEJ1dHRvblNwcml0ZUZyYW1lTGlnaHQiLCJjdXJyZW50SW5pdFJlZEhlYXJ0Q291bnRMYWJlbCIsImdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCIsImNob29zZUFkZFJlZEhlYXJ0Q291bnRMYWJlbCIsImdhbWVDb25maWciLCJnZXRHYW1lQ29uZmlnIiwianNvbiIsInRvd2VyTGV2ZWxEYXRhIiwiZ2V0Q3VycmVudFRvd2Vyc0xvY2FsTGV2ZWxEYXRhIiwiZGF0YSIsInVwZGF0ZVdlYXBvbkluZm9DZWxsUHJlZmFiIiwicGFyZW50Iiwid2VhcG9uQ2VsbFBhcmVudE5vZGUiLCJzZXREYXRhIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ5IiwicHVzaCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImVtaXQiLCJhZGRHb2xkQ291bnQiLCJhZGRMb2NhbEluaXRSZWRIZWFydENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQXdCQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQzNHQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxzQiw2QkFBQUEsc0I7O0FBRUFDLE1BQUFBLGdCLHVCQUFBQSxnQjs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JYLFUsQ0FBdEJXLE87QUFBU0MsTUFBQUEsUSxHQUFhWixVLENBQWJZLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFZSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUk7QUFBQTtBQUFBO0FBQU4sT0FBRCxDLFVBR1JGLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBR1JPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBSVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVi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O0FBQ2pELGNBQUEsTUFBSSxDQUFDUSwyQkFBTDtBQUNILGFBRkQ7QUFHSDs7O3dDQU1hK0IsSyxFQUFPQyxVLEVBQVk7QUFDN0IsNkZBQW9CRCxLQUFwQixFQUEyQkMsVUFBM0I7O0FBQ0Esb0JBQVFBLFVBQVI7QUFDSSxtQkFBSyxrQkFBTDtBQUNJO0FBQ0Esb0JBQUk5QixjQUFjLEdBQUcsS0FBS0EsY0FBTCxDQUFvQkosWUFBcEI7QUFBQTtBQUFBLHFEQUFyQjtBQUNBLG9CQUFJVSxnQkFBZ0IsR0FBR04sY0FBYyxDQUFDRSxVQUFmLENBQTBCSyxtQkFBMUIsRUFBdkI7QUFDQSxvQkFBSU4sSUFBSSxHQUFHRCxjQUFjLENBQUNFLFVBQWYsQ0FBMEJDLDhCQUExQixLQUE2RCxLQUFLZixpQkFBN0U7O0FBQ0Esb0JBQUlrQixnQkFBZ0IsR0FBR0wsSUFBdkIsRUFBNkI7QUFDekIsdUJBQUtaLElBQUwsQ0FBVTBDLElBQVYsQ0FBZSxpQkFBZjtBQUNILGlCQUZELE1BRU87QUFDSC9CLGtCQUFBQSxjQUFjLENBQUNFLFVBQWYsQ0FBMEI4QixZQUExQixDQUF1QyxDQUFDL0IsSUFBeEM7QUFDQUQsa0JBQUFBLGNBQWMsQ0FBQ0UsVUFBZixDQUEwQitCLHlCQUExQixDQUFvRCxLQUFLN0MsaUJBQXpELEVBRkcsQ0FFeUU7O0FBQzVFLHVCQUFLQyxJQUFMLENBQVUwQyxJQUFWLENBQWUsdUJBQWY7QUFDSDs7QUFDRCxxQkFBS2pDLDJCQUFMO0FBRUE7O0FBQ0o7QUFDSTtBQWpCUjtBQW1CSDs7Ozs7Ozs7Ozs7aUJBbEh1QyxJOzs7Ozs7O2lCQUdJLEk7Ozs7Ozs7aUJBR1IsSTs7Ozs7OztpQkFJUyxJOzs7Ozs7O2lCQUVMLEk7Ozs7Ozs7aUJBRWdCLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFFdEIsSTs7Ozs7OztpQkFHVSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MywgdmlldywgVHdlZW4sIFNwcml0ZUNvbXBvbmVudCwgQ29sb3IsIGluc3RhbnRpYXRlLCBQcmVmYWIsIExhYmVsQ29tcG9uZW50LCBTcHJpdGVGcmFtZSwgZ2FtZSB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgV2VhcG9uVXBkYXRlQ2VsbFByZWZhYiB9IGZyb20gJy4vLi4vVUkvV2VhcG9uVXBkYXRlQ2VsbFByZWZhYic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgSW5mb0xheWVyQ3RsQmFzZSB9IGZyb20gJy4vSW5mb0xheWVyQ3RsQmFzZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2VhcG9uSW5mb0N0bCcpXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25JbmZvQ3RsIGV4dGVuZHMgSW5mb0xheWVyQ3RsQmFzZSB7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgYmxvY2tCZ05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyB3ZWFwb25JbmZvTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHdlYXBvbkluZm9CdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBHYW1lQ29udHJvbGxlciB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlV2VhcG9uSW5mb0NlbGxQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHdlYXBvbkNlbGxQYXJlbnROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRJbml0UmVkSGVhcnRDb3VudExhYmVsOiBOb2RlID0gbnVsbDsgLy/lvZPliY3nmoTnuqLlv4PnmoTkuKrmlbDnmoRsYWJlbFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGFkZFJlZEhlYXJ0Q29zdEdvbGRDb3VudDogTm9kZSA9IG51bGw7IC8v5aKe5Yqg5LiA6aKX57qi5b+D6ZyA6KaB55qE6YeR5biB5Liq5pWw55qEbGFiZWwgXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGFkZFJlZEhlYXJ0QnV0dG9uU3ByaXRlRnJhbWVMaWdodDogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+WinuWKoOS4gOmil+e6ouW/g+eahOeyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBhZGRSZWRIZWFydEJ1dHRvblNwcml0ZUZyYW1lR3JheTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+WinuWKoOS4gOmil+e6ouW/g+eahOeyvueBteW4p+eBsOiJslxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGFkZFJlZEhlYXJ0QnV0dG9uOiBOb2RlID0gbnVsbDsgLy/lop7liqDkuIDpopfnuqLlv4PnmoTmjInpkq5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2hvb3NlQWRkUmVkSGVhcnRDb3VudExhYmVsOiBOb2RlID0gbnVsbDsgLy/pgInmi6nnmoTlop7liqDnmoTnuqLlv4PnmoTkuKrmlbBcclxuXHJcbiAgICBwcml2YXRlIHdlYXBvbkluZG9DZWxsTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudENob29zZVJhdGU6IG51bWJlciA9IDA7IC8v5b2T5YmN6YCJ5oup55qE5YCN5pWwXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICAvLyB0aGlzLndlYXBvbkluZm9Ob2RlLnBvc2l0aW9uID0gdjModGhpcy53ZWFwb25JbmZvTm9kZS53aWR0aCAqIDAuNSwgMCwgMCk7XHJcbiAgICBcclxuICAgICBcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWZlci1jaG9vc2UtcmF0ZS1jb3N0XCIsIChjaG9vc2VSYXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw5b2T5YmN6YCJ5oup55qE5YCN5pWwXCIsIGNob29zZVJhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlYXBvbiBpbmRvIGNlbGwgbm9kZSBsaXN0XCIsIHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFdlYXBvblVwZGF0ZUNlbGxQcmVmYWIpLnVwZGF0ZUNob29zZVJhdGUoY2hvb3NlUmF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5hZGRSZWRIZWFydENvdW50R29sZENvdW50LmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nXHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDaG9vc2VSYXRlID0gY2hvb3NlUmF0ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWZlckN1cnJlbnRSZWRIZWFydENvdW50VUkoKTtcclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJlbnRlci1nYW1lXCIsICgpPT57XHJcbiAgICAgICAgdGhpcy5pbml0V2VhcG9uRGF0YSgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZlckN1cnJlbnRSZWRIZWFydENvdW50VUkoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVDb250cm9sbGVyID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRBZGRPbmVSZWRIZWFydENvc3RHb2xkQ291bnQoKSAqIHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgdGhpcy5hZGRSZWRIZWFydENvc3RHb2xkQ291bnQuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBjb3N0ICsgJyc7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgZ29sZCBjb3VudFwiLCBjdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvc3RcIiwgY29zdCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRHb2xkQ291bnQgPCBjb3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVkSGVhcnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmFkZFJlZEhlYXJ0QnV0dG9uU3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVkSGVhcnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmFkZFJlZEhlYXJ0QnV0dG9uU3ByaXRlRnJhbWVMaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEluaXRSZWRIZWFydENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCgpICsgJyc7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VBZGRSZWRIZWFydENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBcIitcIiArIHRoaXMuY3VycmVudENob29zZVJhdGUgKyBcIlwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXRXZWFwb25EYXRhKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5b2T5YmN5q2m5Zmo55qE55u45YWz5L+h5oGvXHJcbiAgICAgICAgbGV0IGdhbWVDb250cm9sbGVyID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgICAgIGxldCB0b3dlckxldmVsRGF0YSA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJzTG9jYWxMZXZlbERhdGEoKTtcclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdG93ZXJMZXZlbERhdGFbaV07XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy51cGRhdGVXZWFwb25JbmZvQ2VsbFByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy53ZWFwb25DZWxsUGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikuc2V0RGF0YShkYXRhLCBnYW1lQ29udHJvbGxlciwgZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCAtaSAqIChub2RlLmhlaWdodCArIDEwKSAtIChub2RlLmhlaWdodCArIDEwKSAqIDAuNSAtIDUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbkNlbGxQYXJlbnROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgbm9kZS5oZWlnaHQgKiAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlZmVyQ3VycmVudFJlZEhlYXJ0Q291bnRVSSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG4gICBcclxuICBcclxuICAgIFxyXG4gXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3VwZXIub25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSlcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWRkLWhlYXJ0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICAvL+WinuWKoOe6ouW/g+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWVDb250cm9sbGVyID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRBZGRPbmVSZWRIZWFydENvc3RHb2xkQ291bnQoKSAqIHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImdvbGQtbm90LWVub3VnaFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoLWNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkTG9jYWxJbml0UmVkSGVhcnRDb3VudCh0aGlzLmN1cnJlbnRDaG9vc2VSYXRlKTsvL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlckN1cnJlbnRSZWRIZWFydENvdW50VUkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=