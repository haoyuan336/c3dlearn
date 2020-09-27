System.register(["cc", "code-quality:cr", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, SpriteFrame, loader, SpriteComponent, LabelComponent, BaseObject, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, WeaponUpdateCellPrefab;

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

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
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
    _dec12: void 0,
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
    _descriptor11: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      loader = _cc.loader;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a6c70AbEx1NLpumxgHfrO6e", "WeaponUpdateCellPrefab", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WeaponUpdateCellPrefab", WeaponUpdateCellPrefab = (_dec = ccclass('WeaponUpdateCellPrefab'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: SpriteFrame
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: SpriteFrame
      }), _dec10 = property({
        type: SpriteFrame
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(WeaponUpdateCellPrefab, _ref);

        function WeaponUpdateCellPrefab() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WeaponUpdateCellPrefab);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WeaponUpdateCellPrefab)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "currentDamageLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addDamageLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "costGoldLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponIconNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonSpriteFrameGray", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonSpriteFrameGreen", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "activeButtonSpriteFrameGray", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "activeButtonSpriteFrameLight", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "duidiAttackIcon", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "duikonngAttackIcon", _descriptor11, _assertThisInitialized(_this));

          _this.currentChooseRate = 0;
          return _this;
        }

        _createClass(WeaponUpdateCellPrefab, [{
          key: "start",
          value: function start() {} // init(gameConfig: Object){
          //     super.init(gameConfig);
          // }
          // public show
          // public referCurrentDamage() {
          //     //刷新当前的攻击值
          //     // this.currentDamageLabel.getComponent(LabelComponent).string = this.getCurrentAttackNum() + '';
          // }

        }, {
          key: "updateChooseRate",
          value: function updateChooseRate(rateNum) {
            //更新当前选择的倍数
            // console.log("更新当前的倍数", rateNum);
            this.currentChooseRate = rateNum;
            this.referUILabel();
          }
        }, {
          key: "setData",
          value: function setData(data, gameController, gameConfig) {
            var _this2 = this;

            console.log("初始化数据", data); // let iconStr = data['IconSprteFrame'];
            // this.gameController.uiController.on("on-gold-count-refer-event", ()=>{
            //     //注册当前金币个数改变的消息
            // });

            gameController.node.on("update-gold-label", function () {
              //根据当前的
              _this2.referUILabel(); //更新uiLabel

            });
            var towerType = data['TowerType'];
            this.objectType = towerType;

            _get(_getPrototypeOf(WeaponUpdateCellPrefab.prototype), "init", this).call(this, gameConfig, gameController);

            var isActive = data['isActive'];

            if (isActive) {
              this.showWeaponIcon();
            }

            this.referUILabel();
          }
        }, {
          key: "showWeaponIcon",
          value: function showWeaponIcon() {
            var _this3 = this;

            var iconStr = this.getIconSprteFrame(); // let iconStr = data['IconSprteFrame'];

            loader.loadRes(iconStr + '/spriteFrame', SpriteFrame, function (err, result) {
              if (!err) {
                _this3.weaponIconNode.getComponent(SpriteComponent).spriteFrame = result;
              }

              console.log("err", err);
            });
          }
        }, {
          key: "referUILabel",
          value: function referUILabel() {
            var isActive = this.getWeaponIsActive();
            var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();
            var canAttackTypeList = this.getCanAttackMoveTypeList();

            for (var i = 0; i < canAttackTypeList.length; i++) {
              if (canAttackTypeList[i] === 'Walk') {
                this.duidiAttackIcon.active = true;
              }

              if (canAttackTypeList[i] === 'Fly') {
                this.duikonngAttackIcon.active = true;
              }
            }

            if (!isActive) {
              //如果未激活
              var firstNeedActiveTower = this.gameController.playerData.getFirstNeedToActiveTowerIndex(); //获取第一个需要激活的塔的index

              console.log("first need active tower", firstNeedActiveTower);
              var activeCostGoldCount = this.getActiveCostGoldCount();
              this.costGoldLabel.getComponent(LabelComponent).string = activeCostGoldCount + ''; // let currentGold

              if (firstNeedActiveTower === this.towerIndexType && activeCostGoldCount <= currentGoldCount) {
                //当前的金币个数要大于等于需要的金币个数
                this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.activeButtonSpriteFrameLight;
              } else {
                this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.activeButtonSpriteFrameGray; //如果不能激活，那么需要显示灰色的按钮
              }

              return;
            }

            var updateCostCount = this.getUpdateLocalLevelCost();
            this.currentDamageLabel.getComponent(LabelComponent).string = this.getLocalDamageNum() + '';
            this.costGoldLabel.getComponent(LabelComponent).string = updateCostCount + '';
            this.addDamageLabel.getComponent(LabelComponent).string = "+" + this.getNextLocallevelAddDamage() + '';

            if (currentGoldCount < updateCostCount) {
              // this.updateButtonSpriteFrameGray
              this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrameGray;
            } else {
              this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrameGreen;
            }
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            switch (customData) {
              case 'update-button':
                console.log("升级按钮");
                var isActive = this.getWeaponIsActive();
                var currentGoldCount = this.gameController.playerData.getCurrentGoldCount(); //当前的金币个数

                if (isActive) {
                  var updateCost = this.getUpdateLocalLevelCost(); //获取升级下一级需要的金币数

                  if (updateCost <= currentGoldCount) {
                    this.updateLocalLevel(this.currentChooseRate);
                    this.gameController.playerData.addGoldCount(-updateCost);
                    this.referUILabel();
                  } else {}
                } else {
                  var activeCost = this.getActiveCostGoldCount();

                  if (activeCost <= currentGoldCount) {
                    this.activeWeapon();
                    this.gameController.playerData.addGoldCount(-activeCost);
                    this.referUILabel();
                    this.showWeaponIcon();
                  }
                }

                break;

              default:
                break;
            }
          } // getUpdateCost(){
          // }

        }, {
          key: "getUpdateLocalLevelCost",
          value: function getUpdateLocalLevelCost() {
            var cost = _get(_getPrototypeOf(WeaponUpdateCellPrefab.prototype), "getUpdateLocalLevelCost", this).call(this);

            cost *= this.currentChooseRate; //首先获取本身需要消耗的金币个数 //加上倍数

            return cost;
          }
        }, {
          key: "getNextLocallevelAddDamage",
          value: function getNextLocallevelAddDamage() {
            var localDamage = _get(_getPrototypeOf(WeaponUpdateCellPrefab.prototype), "getNextLocallevelAddDamage", this).call(this);

            localDamage *= this.currentChooseRate;
            return localDamage;
          }
        }]);

        return WeaponUpdateCellPrefab;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentDamageLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "addDamageLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "costGoldLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "weaponIconNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonSpriteFrameGray", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonSpriteFrameGreen", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "activeButtonSpriteFrameGray", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "activeButtonSpriteFrameLight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "duidiAttackIcon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "duikonngAttackIcon", [_dec12], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25VcGRhdGVDZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiU3ByaXRlRnJhbWUiLCJsb2FkZXIiLCJTcHJpdGVDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXZWFwb25VcGRhdGVDZWxsUHJlZmFiIiwidHlwZSIsImN1cnJlbnRDaG9vc2VSYXRlIiwicmF0ZU51bSIsInJlZmVyVUlMYWJlbCIsImRhdGEiLCJnYW1lQ29udHJvbGxlciIsImdhbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwidG93ZXJUeXBlIiwib2JqZWN0VHlwZSIsImlzQWN0aXZlIiwic2hvd1dlYXBvbkljb24iLCJpY29uU3RyIiwiZ2V0SWNvblNwcnRlRnJhbWUiLCJsb2FkUmVzIiwiZXJyIiwicmVzdWx0Iiwid2VhcG9uSWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdldFdlYXBvbklzQWN0aXZlIiwiY3VycmVudEdvbGRDb3VudCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwiY2FuQXR0YWNrVHlwZUxpc3QiLCJnZXRDYW5BdHRhY2tNb3ZlVHlwZUxpc3QiLCJpIiwibGVuZ3RoIiwiZHVpZGlBdHRhY2tJY29uIiwiYWN0aXZlIiwiZHVpa29ubmdBdHRhY2tJY29uIiwiZmlyc3ROZWVkQWN0aXZlVG93ZXIiLCJnZXRGaXJzdE5lZWRUb0FjdGl2ZVRvd2VySW5kZXgiLCJhY3RpdmVDb3N0R29sZENvdW50IiwiZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCIsImNvc3RHb2xkTGFiZWwiLCJzdHJpbmciLCJ0b3dlckluZGV4VHlwZSIsInVwZGF0ZUJ1dHRvbk5vZGUiLCJhY3RpdmVCdXR0b25TcHJpdGVGcmFtZUxpZ2h0IiwiYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVHcmF5IiwidXBkYXRlQ29zdENvdW50IiwiZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QiLCJjdXJyZW50RGFtYWdlTGFiZWwiLCJnZXRMb2NhbERhbWFnZU51bSIsImFkZERhbWFnZUxhYmVsIiwiZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyYXkiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyZWVuIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwidXBkYXRlQ29zdCIsInVwZGF0ZUxvY2FsTGV2ZWwiLCJhZGRHb2xkQ291bnQiLCJhY3RpdmVDb3N0IiwiYWN0aXZlV2VhcG9uIiwiY29zdCIsImxvY2FsRGFtYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYzs7OztBQUNuRUMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7O3dDQUdKQyxzQixXQURaRixPQUFPLENBQUMsd0JBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUVSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUVSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUVSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxV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LFVBQTdDO0FBQ0EseUJBQUt0RCxZQUFMO0FBQ0EseUJBQUtXLGNBQUw7QUFDSDtBQUNKOztBQUdEOztBQUNKO0FBQ0k7QUE1QlI7QUE4QkgsVyxDQUNEO0FBRUE7Ozs7b0RBQ2tDO0FBQzlCLGdCQUFJNkMsSUFBSSxzR0FBUjs7QUFDQUEsWUFBQUEsSUFBSSxJQUFJLEtBQUsxRCxpQkFBYixDQUY4QixDQUc5Qjs7QUFDQSxtQkFBTzBELElBQVA7QUFDSDs7O3VEQUNvQztBQUNqQyxnQkFBSUMsV0FBVyx5R0FBZjs7QUFDQUEsWUFBQUEsV0FBVyxJQUFJLEtBQUszRCxpQkFBcEI7QUFDQSxtQkFBTzJELFdBQVA7QUFDSDs7Ozs7Ozs7Ozs7aUJBaktpQyxJOzs7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVvQixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBRW5CLEk7Ozs7Ozs7aUJBR2tCLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHcEIsSTs7Ozs7OztpQkFFRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVGcmFtZSwgbG9hZGVyLCBTcHJpdGVDb21wb25lbnQsIExhYmVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1dlYXBvblVwZGF0ZUNlbGxQcmVmYWInKVxyXG5leHBvcnQgY2xhc3MgV2VhcG9uVXBkYXRlQ2VsbFByZWZhYiBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnREYW1hZ2VMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYWRkRGFtYWdlTGFiZWw6IE5vZGUgPSBudWxsOyAvL+mcgOimgeWinuWKoOS6huaUu+WHu+WKm+eahGxhYmVsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY29zdEdvbGRMYWJlbDogTm9kZSA9IG51bGw7IC8v6ZyA6KaB5raI6ICX55qE6YeR5biBXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgd2VhcG9uSWNvbk5vZGU6IE5vZGUgPSBudWxsOyAvL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyYXk6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmVlbjogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVHcmF5OiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBhY3RpdmVCdXR0b25TcHJpdGVGcmFtZUxpZ2h0OiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGR1aWRpQXR0YWNrSWNvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZHVpa29ubmdBdHRhY2tJY29uOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRDaG9vc2VSYXRlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBpbml0KGdhbWVDb25maWc6IE9iamVjdCl7XHJcbiAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHB1YmxpYyBzaG93XHJcbiAgICAvLyBwdWJsaWMgcmVmZXJDdXJyZW50RGFtYWdlKCkge1xyXG4gICAgLy8gICAgIC8v5Yi35paw5b2T5YmN55qE5pS75Ye75YC8XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jdXJyZW50RGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSArICcnO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2hvb3NlUmF0ZShyYXRlTnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvL+abtOaWsOW9k+WJjemAieaLqeeahOWAjeaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pu05paw5b2T5YmN55qE5YCN5pWwXCIsIHJhdGVOdW0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENob29zZVJhdGUgPSByYXRlTnVtO1xyXG4gICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbmlbDmja5cIiwgZGF0YSk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSBkYXRhWydJY29uU3BydGVGcmFtZSddO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIudWlDb250cm9sbGVyLm9uKFwib24tZ29sZC1jb3VudC1yZWZlci1ldmVudFwiLCAoKT0+e1xyXG4gICAgICAgIC8vICAgICAvL+azqOWGjOW9k+WJjemHkeW4geS4quaVsOaUueWPmOeahOa2iOaBr1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5b2T5YmN55qEXHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7Ly/mm7TmlrB1aUxhYmVsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0b3dlclR5cGUgPSBkYXRhWydUb3dlclR5cGUnXTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSB0b3dlclR5cGU7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gZGF0YVsnaXNBY3RpdmUnXTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93V2VhcG9uSWNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dXZWFwb25JY29uKCkge1xyXG4gICAgICAgIGxldCBpY29uU3RyID0gdGhpcy5nZXRJY29uU3BydGVGcmFtZSgpO1xyXG4gICAgICAgIC8vIGxldCBpY29uU3RyID0gZGF0YVsnSWNvblNwcnRlRnJhbWUnXTtcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhpY29uU3RyICsgJy9zcHJpdGVGcmFtZScsIFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uSWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZmVyVUlMYWJlbCgpIHtcclxuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmdldFdlYXBvbklzQWN0aXZlKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG4gICAgICAgIGxldCBjYW5BdHRhY2tUeXBlTGlzdCA9IHRoaXMuZ2V0Q2FuQXR0YWNrTW92ZVR5cGVMaXN0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5BdHRhY2tUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNrVHlwZUxpc3RbaV0gPT09ICdXYWxrJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdWlkaUF0dGFja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNrVHlwZUxpc3RbaV0gPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1aWtvbm5nQXR0YWNrSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmnKrmv4DmtLtcclxuICAgICAgICAgICAgbGV0IGZpcnN0TmVlZEFjdGl2ZVRvd2VyID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEZpcnN0TmVlZFRvQWN0aXZlVG93ZXJJbmRleCgpO1xyXG4gICAgICAgICAgICAvL+iOt+WPluesrOS4gOS4qumcgOimgea/gOa0u+eahOWhlOeahGluZGV4XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgbmVlZCBhY3RpdmUgdG93ZXJcIiwgZmlyc3ROZWVkQWN0aXZlVG93ZXIpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlQ29zdEdvbGRDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvc3RHb2xkTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBhY3RpdmVDb3N0R29sZENvdW50ICsgJyc7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudEdvbGRcclxuICAgICAgICAgICAgaWYgKGZpcnN0TmVlZEFjdGl2ZVRvd2VyID09PSB0aGlzLnRvd2VySW5kZXhUeXBlICYmIGFjdGl2ZUNvc3RHb2xkQ291bnQgPD0gY3VycmVudEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvZPliY3nmoTph5HluIHkuKrmlbDopoHlpKfkuo7nrYnkuo7pnIDopoHnmoTph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVMaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzkuI3og73mv4DmtLvvvIzpgqPkuYjpnIDopoHmmL7npLrngbDoibLnmoTmjInpkq5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cGRhdGVDb3N0Q291bnQgPSB0aGlzLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB0aGlzLmdldExvY2FsRGFtYWdlTnVtKCkgKyAnJztcclxuICAgICAgICB0aGlzLmNvc3RHb2xkTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB1cGRhdGVDb3N0Q291bnQgKyAnJztcclxuICAgICAgICB0aGlzLmFkZERhbWFnZUxhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gXCIrXCIgKyB0aGlzLmdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCkgKyAnJztcclxuICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA8IHVwZGF0ZUNvc3RDb3VudCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cGRhdGUtYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y2H57qn5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gdGhpcy5nZXRXZWFwb25Jc0FjdGl2ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpOyAvL+W9k+WJjeeahOmHkeW4geS4quaVsFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVDb3N0ID0gdGhpcy5nZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpOyAvL+iOt+WPluWNh+e6p+S4i+S4gOe6p+mcgOimgeeahOmHkeW4geaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVDb3N0IDw9IGN1cnJlbnRHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbExldmVsKHRoaXMuY3VycmVudENob29zZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KC11cGRhdGVDb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlclVJTGFiZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3RpdmVDb3N0ID0gdGhpcy5nZXRBY3RpdmVDb3N0R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNvc3QgPD0gY3VycmVudEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVdlYXBvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KC1hY3RpdmVDb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlclVJTGFiZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93V2VhcG9uSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXRVcGRhdGVDb3N0KCl7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY29zdCA9IHN1cGVyLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7XHJcbiAgICAgICAgY29zdCAqPSB0aGlzLmN1cnJlbnRDaG9vc2VSYXRlO1xyXG4gICAgICAgIC8v6aaW5YWI6I635Y+W5pys6Lqr6ZyA6KaB5raI6ICX55qE6YeR5biB5Liq5pWwIC8v5Yqg5LiK5YCN5pWwXHJcbiAgICAgICAgcmV0dXJuIGNvc3Q7XHJcbiAgICB9XHJcbiAgICBnZXROZXh0TG9jYWxsZXZlbEFkZERhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsb2NhbERhbWFnZSA9IHN1cGVyLmdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCk7XHJcbiAgICAgICAgbG9jYWxEYW1hZ2UgKj0gdGhpcy5jdXJyZW50Q2hvb3NlUmF0ZTtcclxuICAgICAgICByZXR1cm4gbG9jYWxEYW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuIl19