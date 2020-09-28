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
          _this.weaponInfoCtl = null;
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
          value: function setData(data, gameController, gameConfig, weaponCtl) {
            var _this2 = this;

            console.log("初始化数据", data); // let iconStr = data['IconSprteFrame'];
            // this.gameController.uiController.on("on-gold-count-refer-event", ()=>{
            //     //注册当前金币个数改变的消息
            // });

            this.weaponInfoCtl = weaponCtl;
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
                    this.weaponInfoCtl.node.emit("refer-current-tower-menu-ui");
                    this.weaponInfoCtl.weaponActived(this.node); //有weapon 被激活了
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25VcGRhdGVDZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiU3ByaXRlRnJhbWUiLCJsb2FkZXIiLCJTcHJpdGVDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXZWFwb25VcGRhdGVDZWxsUHJlZmFiIiwidHlwZSIsImN1cnJlbnRDaG9vc2VSYXRlIiwid2VhcG9uSW5mb0N0bCIsInJhdGVOdW0iLCJyZWZlclVJTGFiZWwiLCJkYXRhIiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lQ29uZmlnIiwid2VhcG9uQ3RsIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJvbiIsInRvd2VyVHlwZSIsIm9iamVjdFR5cGUiLCJpc0FjdGl2ZSIsInNob3dXZWFwb25JY29uIiwiaWNvblN0ciIsImdldEljb25TcHJ0ZUZyYW1lIiwibG9hZFJlcyIsImVyciIsInJlc3VsdCIsIndlYXBvbkljb25Ob2RlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJnZXRXZWFwb25Jc0FjdGl2ZSIsImN1cnJlbnRHb2xkQ291bnQiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImNhbkF0dGFja1R5cGVMaXN0IiwiZ2V0Q2FuQXR0YWNrTW92ZVR5cGVMaXN0IiwiaSIsImxlbmd0aCIsImR1aWRpQXR0YWNrSWNvbiIsImFjdGl2ZSIsImR1aWtvbm5nQXR0YWNrSWNvbiIsImZpcnN0TmVlZEFjdGl2ZVRvd2VyIiwiZ2V0Rmlyc3ROZWVkVG9BY3RpdmVUb3dlckluZGV4IiwiYWN0aXZlQ29zdEdvbGRDb3VudCIsImdldEFjdGl2ZUNvc3RHb2xkQ291bnQiLCJjb3N0R29sZExhYmVsIiwic3RyaW5nIiwidG93ZXJJbmRleFR5cGUiLCJ1cGRhdGVCdXR0b25Ob2RlIiwiYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVMaWdodCIsImFjdGl2ZUJ1dHRvblNwcml0ZUZyYW1lR3JheSIsInVwZGF0ZUNvc3RDb3VudCIsImdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0IiwiY3VycmVudERhbWFnZUxhYmVsIiwiZ2V0TG9jYWxEYW1hZ2VOdW0iLCJhZGREYW1hZ2VMYWJlbCIsImdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlIiwidXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmF5IiwidXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmVlbiIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInVwZGF0ZUNvc3QiLCJ1cGRhdGVMb2NhbExldmVsIiwiYWRkR29sZENvdW50IiwiYWN0aXZlQ29zdCIsImFjdGl2ZVdlYXBvbiIsImVtaXQiLCJ3ZWFwb25BY3RpdmVkIiwiY29zdCIsImxvY2FsRGFtYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYzs7OztBQUNuRUMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBR0RDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7O3dDQUdKQyxzQixXQURaRixPQUFPLENBQUMsd0JBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUVSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUVSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxV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QkFBSW9CLFVBQVUsSUFBSWpDLGdCQUFsQixFQUFvQztBQUNoQyx5QkFBS2tDLFlBQUw7QUFDQSx5QkFBS3RELGNBQUwsQ0FBb0JxQixVQUFwQixDQUErQitCLFlBQS9CLENBQTRDLENBQUNDLFVBQTdDO0FBQ0EseUJBQUt2RCxZQUFMO0FBQ0EseUJBQUtZLGNBQUw7QUFDQSx5QkFBS2QsYUFBTCxDQUFtQlMsSUFBbkIsQ0FBd0JrRCxJQUF4QixDQUE2Qiw2QkFBN0I7QUFDQSx5QkFBSzNELGFBQUwsQ0FBbUI0RCxhQUFuQixDQUFpQyxLQUFLbkQsSUFBdEMsRUFOZ0MsQ0FNYTtBQUNoRDtBQUNKOztBQUdEOztBQUNKO0FBQ0k7QUE5QlI7QUFnQ0gsVyxDQUNEO0FBRUE7Ozs7b0RBQ2tDO0FBQzlCLGdCQUFJb0QsSUFBSSxzR0FBUjs7QUFDQUEsWUFBQUEsSUFBSSxJQUFJLEtBQUs5RCxpQkFBYixDQUY4QixDQUc5Qjs7QUFDQSxtQkFBTzhELElBQVA7QUFDSDs7O3VEQUNvQztBQUNqQyxnQkFBSUMsV0FBVyx5R0FBZjs7QUFDQUEsWUFBQUEsV0FBVyxJQUFJLEtBQUsvRCxpQkFBcEI7QUFDQSxtQkFBTytELFdBQVA7QUFDSDs7Ozs7Ozs7Ozs7aUJBcktpQyxJOzs7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVvQixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBRW5CLEk7Ozs7Ozs7aUJBR2tCLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHcEIsSTs7Ozs7OztpQkFFRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVGcmFtZSwgbG9hZGVyLCBTcHJpdGVDb21wb25lbnQsIExhYmVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBXZWFwb25JbmZvQ3RsIH0gZnJvbSAnLi9XZWFwb25JbmZvQ3RsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdXZWFwb25VcGRhdGVDZWxsUHJlZmFiJylcclxuZXhwb3J0IGNsYXNzIFdlYXBvblVwZGF0ZUNlbGxQcmVmYWIgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50RGFtYWdlTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGFkZERhbWFnZUxhYmVsOiBOb2RlID0gbnVsbDsgLy/pnIDopoHlop7liqDkuobmlLvlh7vlipvnmoRsYWJlbFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNvc3RHb2xkTGFiZWw6IE5vZGUgPSBudWxsOyAvL+mcgOimgea2iOiAl+eahOmHkeW4gVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHdlYXBvbkljb25Ob2RlOiBOb2RlID0gbnVsbDsgLy9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmF5OiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JlZW46IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGFjdGl2ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVMaWdodDogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBkdWlkaUF0dGFja0ljb246IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGR1aWtvbm5nQXR0YWNrSWNvbjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q2hvb3NlUmF0ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2VhcG9uSW5mb0N0bDogV2VhcG9uSW5mb0N0bCA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuICAgIC8vIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0KXtcclxuICAgIC8vICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHVibGljIHNob3dcclxuICAgIC8vIHB1YmxpYyByZWZlckN1cnJlbnREYW1hZ2UoKSB7XHJcbiAgICAvLyAgICAgLy/liLfmlrDlvZPliY3nmoTmlLvlh7vlgLxcclxuICAgIC8vICAgICAvLyB0aGlzLmN1cnJlbnREYW1hZ2VMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHRoaXMuZ2V0Q3VycmVudEF0dGFja051bSgpICsgJyc7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVDaG9vc2VSYXRlKHJhdGVOdW06IG51bWJlcikge1xyXG4gICAgICAgIC8v5pu05paw5b2T5YmN6YCJ5oup55qE5YCN5pWwXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmm7TmlrDlvZPliY3nmoTlgI3mlbBcIiwgcmF0ZU51bSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hvb3NlUmF0ZSA9IHJhdGVOdW07XHJcbiAgICAgICAgdGhpcy5yZWZlclVJTGFiZWwoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBnYW1lQ29uZmlnOiBPYmplY3QsIHdlYXBvbkN0bDogV2VhcG9uSW5mb0N0bCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5pWw5o2uXCIsIGRhdGEpO1xyXG4gICAgICAgIC8vIGxldCBpY29uU3RyID0gZGF0YVsnSWNvblNwcnRlRnJhbWUnXTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnVpQ29udHJvbGxlci5vbihcIm9uLWdvbGQtY291bnQtcmVmZXItZXZlbnRcIiwgKCk9PntcclxuICAgICAgICAvLyAgICAgLy/ms6jlhozlvZPliY3ph5HluIHkuKrmlbDmlLnlj5jnmoTmtojmga9cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLndlYXBvbkluZm9DdGwgPSB3ZWFwb25DdGw7XHJcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInVwZGF0ZS1nb2xkLWxhYmVsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/moLnmja7lvZPliY3nmoRcclxuICAgICAgICAgICAgdGhpcy5yZWZlclVJTGFiZWwoKTsvL+abtOaWsHVpTGFiZWxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRvd2VyVHlwZSA9IGRhdGFbJ1Rvd2VyVHlwZSddO1xyXG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IHRvd2VyVHlwZTtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICBsZXQgaXNBY3RpdmUgPSBkYXRhWydpc0FjdGl2ZSddO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dXZWFwb25JY29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd1dlYXBvbkljb24oKSB7XHJcbiAgICAgICAgbGV0IGljb25TdHIgPSB0aGlzLmdldEljb25TcHJ0ZUZyYW1lKCk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSBkYXRhWydJY29uU3BydGVGcmFtZSddO1xyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKGljb25TdHIgKyAnL3Nwcml0ZUZyYW1lJywgU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWFwb25JY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVmZXJVSUxhYmVsKCkge1xyXG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuZ2V0V2VhcG9uSXNBY3RpdmUoKTtcclxuICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgbGV0IGNhbkF0dGFja1R5cGVMaXN0ID0gdGhpcy5nZXRDYW5BdHRhY2tNb3ZlVHlwZUxpc3QoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbkF0dGFja1R5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjYW5BdHRhY2tUeXBlTGlzdFtpXSA9PT0gJ1dhbGsnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1aWRpQXR0YWNrSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYW5BdHRhY2tUeXBlTGlzdFtpXSA9PT0gJ0ZseScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHVpa29ubmdBdHRhY2tJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvL+WmguaenOacqua/gOa0u1xyXG4gICAgICAgICAgICBsZXQgZmlyc3ROZWVkQWN0aXZlVG93ZXIgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Rmlyc3ROZWVkVG9BY3RpdmVUb3dlckluZGV4KCk7XHJcbiAgICAgICAgICAgIC8v6I635Y+W56ys5LiA5Liq6ZyA6KaB5r+A5rS755qE5aGU55qEaW5kZXhcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdCBuZWVkIGFjdGl2ZSB0b3dlclwiLCBmaXJzdE5lZWRBY3RpdmVUb3dlcik7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVDb3N0R29sZENvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3N0R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29zdEdvbGRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGFjdGl2ZUNvc3RHb2xkQ291bnQgKyAnJztcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50R29sZFxyXG4gICAgICAgICAgICBpZiAoZmlyc3ROZWVkQWN0aXZlVG93ZXIgPT09IHRoaXMudG93ZXJJbmRleFR5cGUgJiYgYWN0aXZlQ29zdEdvbGRDb3VudCA8PSBjdXJyZW50R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvL+W9k+WJjeeahOmHkeW4geS4quaVsOimgeWkp+S6juetieS6jumcgOimgeeahOmHkeW4geS4quaVsFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5hY3RpdmVCdXR0b25TcHJpdGVGcmFtZUxpZ2h0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5hY3RpdmVCdXR0b25TcHJpdGVGcmFtZUdyYXk7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOS4jeiDvea/gOa0u++8jOmCo+S5iOmcgOimgeaYvuekuueBsOiJsueahOaMiemSrlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVwZGF0ZUNvc3RDb3VudCA9IHRoaXMuZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYW1hZ2VMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHRoaXMuZ2V0TG9jYWxEYW1hZ2VOdW0oKSArICcnO1xyXG4gICAgICAgIHRoaXMuY29zdEdvbGRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHVwZGF0ZUNvc3RDb3VudCArICcnO1xyXG4gICAgICAgIHRoaXMuYWRkRGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBcIitcIiArIHRoaXMuZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKSArICcnO1xyXG4gICAgICAgIGlmIChjdXJyZW50R29sZENvdW50IDwgdXBkYXRlQ29zdENvdW50KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmF5XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMudXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMudXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZS1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLljYfnuqfmjInpkq5cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmdldFdlYXBvbklzQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7IC8v5b2T5YmN55qE6YeR5biB5Liq5pWwXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUNvc3QgPSB0aGlzLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7IC8v6I635Y+W5Y2H57qn5LiL5LiA57qn6ZyA6KaB55qE6YeR5biB5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZUNvc3QgPD0gY3VycmVudEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsTGV2ZWwodGhpcy5jdXJyZW50Q2hvb3NlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoLXVwZGF0ZUNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvc3QgPSB0aGlzLmdldEFjdGl2ZUNvc3RHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlQ29zdCA8PSBjdXJyZW50R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoLWFjdGl2ZUNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dXZWFwb25JY29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uSW5mb0N0bC5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXRvd2VyLW1lbnUtdWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uSW5mb0N0bC53ZWFwb25BY3RpdmVkKHRoaXMubm9kZSk7IC8v5pyJd2VhcG9uIOiiq+a/gOa0u+S6hlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXRVcGRhdGVDb3N0KCl7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY29zdCA9IHN1cGVyLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7XHJcbiAgICAgICAgY29zdCAqPSB0aGlzLmN1cnJlbnRDaG9vc2VSYXRlO1xyXG4gICAgICAgIC8v6aaW5YWI6I635Y+W5pys6Lqr6ZyA6KaB5raI6ICX55qE6YeR5biB5Liq5pWwIC8v5Yqg5LiK5YCN5pWwXHJcbiAgICAgICAgcmV0dXJuIGNvc3Q7XHJcbiAgICB9XHJcbiAgICBnZXROZXh0TG9jYWxsZXZlbEFkZERhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsb2NhbERhbWFnZSA9IHN1cGVyLmdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCk7XHJcbiAgICAgICAgbG9jYWxEYW1hZ2UgKj0gdGhpcy5jdXJyZW50Q2hvb3NlUmF0ZTtcclxuICAgICAgICByZXR1cm4gbG9jYWxEYW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuIl19