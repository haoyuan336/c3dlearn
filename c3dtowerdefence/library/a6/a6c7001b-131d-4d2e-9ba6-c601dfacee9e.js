System.register(["cc", "code-quality:cr", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, SpriteFrame, loader, SpriteComponent, LabelComponent, BaseObject, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, WeaponUpdateCellPrefab;

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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25VcGRhdGVDZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiU3ByaXRlRnJhbWUiLCJsb2FkZXIiLCJTcHJpdGVDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXZWFwb25VcGRhdGVDZWxsUHJlZmFiIiwidHlwZSIsImN1cnJlbnRDaG9vc2VSYXRlIiwicmF0ZU51bSIsInJlZmVyVUlMYWJlbCIsImRhdGEiLCJnYW1lQ29udHJvbGxlciIsImdhbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwidG93ZXJUeXBlIiwib2JqZWN0VHlwZSIsImlzQWN0aXZlIiwic2hvd1dlYXBvbkljb24iLCJpY29uU3RyIiwiZ2V0SWNvblNwcnRlRnJhbWUiLCJsb2FkUmVzIiwiZXJyIiwicmVzdWx0Iiwid2VhcG9uSWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdldFdlYXBvbklzQWN0aXZlIiwiY3VycmVudEdvbGRDb3VudCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZmlyc3ROZWVkQWN0aXZlVG93ZXIiLCJnZXRGaXJzdE5lZWRUb0FjdGl2ZVRvd2VySW5kZXgiLCJhY3RpdmVDb3N0R29sZENvdW50IiwiZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCIsImNvc3RHb2xkTGFiZWwiLCJzdHJpbmciLCJ0b3dlckluZGV4VHlwZSIsInVwZGF0ZUJ1dHRvbk5vZGUiLCJhY3RpdmVCdXR0b25TcHJpdGVGcmFtZUxpZ2h0IiwiYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVHcmF5IiwidXBkYXRlQ29zdENvdW50IiwiZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QiLCJjdXJyZW50RGFtYWdlTGFiZWwiLCJnZXRMb2NhbERhbWFnZU51bSIsImFkZERhbWFnZUxhYmVsIiwiZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyYXkiLCJ1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyZWVuIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwidXBkYXRlQ29zdCIsInVwZGF0ZUxvY2FsTGV2ZWwiLCJhZGRHb2xkQ291bnQiLCJhY3RpdmVDb3N0IiwiYWN0aXZlV2VhcG9uIiwiY29zdCIsImxvY2FsRGFtYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsYyxPQUFBQSxjOzs7O0FBQ25FQyxNQUFBQSxVLGlCQUFBQSxVOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7d0NBR0pDLHNCLFdBRFpGLE9BQU8sQ0FBQyx3QkFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEs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LEVBQW9DO0FBQ2hDLHlCQUFLd0IsZ0JBQUwsQ0FBc0IsS0FBSy9DLGlCQUEzQjtBQUNBLHlCQUFLSSxjQUFMLENBQW9Cb0IsVUFBcEIsQ0FBK0J3QixZQUEvQixDQUE0QyxDQUFDRixVQUE3QztBQUNBLHlCQUFLNUMsWUFBTDtBQUNILG1CQUpELE1BSU8sQ0FFTjtBQUNKLGlCQVRELE1BU087QUFDSCxzQkFBSStDLFVBQVUsR0FBRyxLQUFLcEIsc0JBQUwsRUFBakI7O0FBQ0Esc0JBQUlvQixVQUFVLElBQUkxQixnQkFBbEIsRUFBb0M7QUFDaEMseUJBQUsyQixZQUFMO0FBQ0EseUJBQUs5QyxjQUFMLENBQW9Cb0IsVUFBcEIsQ0FBK0J3QixZQUEvQixDQUE0QyxDQUFDQyxVQUE3QztBQUNBLHlCQUFLL0MsWUFBTDtBQUNBLHlCQUFLVyxjQUFMO0FBQ0g7QUFDSjs7QUFHRDs7QUFDSjtBQUNJO0FBNUJSO0FBOEJILFcsQ0FDRDtBQUVBOzs7O29EQUNrQztBQUM5QixnQkFBSXNDLElBQUksc0dBQVI7O0FBQ0FBLFlBQUFBLElBQUksSUFBSSxLQUFLbkQsaUJBQWIsQ0FGOEIsQ0FHOUI7O0FBQ0EsbUJBQU9tRCxJQUFQO0FBQ0g7Ozt1REFDb0M7QUFDakMsZ0JBQUlDLFdBQVcseUdBQWY7O0FBQ0FBLFlBQUFBLFdBQVcsSUFBSSxLQUFLcEQsaUJBQXBCO0FBQ0EsbUJBQU9vRCxXQUFQO0FBQ0g7Ozs7Ozs7Ozs7O2lCQXBKaUMsSTs7Ozs7OztpQkFFSixJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFFb0IsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVuQixJOzs7Ozs7O2lCQUdrQixJOzs7Ozs7O2lCQUdDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2VhcG9uVXBkYXRlQ2VsbFByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25VcGRhdGVDZWxsUHJlZmFiIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudERhbWFnZUxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhZGREYW1hZ2VMYWJlbDogTm9kZSA9IG51bGw7IC8v6ZyA6KaB5aKe5Yqg5LqG5pS75Ye75Yqb55qEbGFiZWxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjb3N0R29sZExhYmVsOiBOb2RlID0gbnVsbDsgLy/pnIDopoHmtojogJfnmoTph5HluIFcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25JY29uTm9kZTogTm9kZSA9IG51bGw7IC8vXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyZWVuOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBhY3RpdmVCdXR0b25TcHJpdGVGcmFtZUdyYXk6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGFjdGl2ZUJ1dHRvblNwcml0ZUZyYW1lTGlnaHQ6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRDaG9vc2VSYXRlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBpbml0KGdhbWVDb25maWc6IE9iamVjdCl7XHJcbiAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHB1YmxpYyBzaG93XHJcbiAgICAvLyBwdWJsaWMgcmVmZXJDdXJyZW50RGFtYWdlKCkge1xyXG4gICAgLy8gICAgIC8v5Yi35paw5b2T5YmN55qE5pS75Ye75YC8XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jdXJyZW50RGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSArICcnO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2hvb3NlUmF0ZShyYXRlTnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvL+abtOaWsOW9k+WJjemAieaLqeeahOWAjeaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pu05paw5b2T5YmN55qE5YCN5pWwXCIsIHJhdGVOdW0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENob29zZVJhdGUgPSByYXRlTnVtO1xyXG4gICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbmlbDmja5cIiwgZGF0YSk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSBkYXRhWydJY29uU3BydGVGcmFtZSddO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIudWlDb250cm9sbGVyLm9uKFwib24tZ29sZC1jb3VudC1yZWZlci1ldmVudFwiLCAoKT0+e1xyXG4gICAgICAgIC8vICAgICAvL+azqOWGjOW9k+WJjemHkeW4geS4quaVsOaUueWPmOeahOa2iOaBr1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5b2T5YmN55qEXHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7Ly/mm7TmlrB1aUxhYmVsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0b3dlclR5cGUgPSBkYXRhWydUb3dlclR5cGUnXTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSB0b3dlclR5cGU7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gZGF0YVsnaXNBY3RpdmUnXTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93V2VhcG9uSWNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dXZWFwb25JY29uKCkge1xyXG4gICAgICAgIGxldCBpY29uU3RyID0gdGhpcy5nZXRJY29uU3BydGVGcmFtZSgpO1xyXG4gICAgICAgIC8vIGxldCBpY29uU3RyID0gZGF0YVsnSWNvblNwcnRlRnJhbWUnXTtcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhpY29uU3RyICsgJy9zcHJpdGVGcmFtZScsIFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uSWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZmVyVUlMYWJlbCgpIHtcclxuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmdldFdlYXBvbklzQWN0aXZlKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHb2xkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG5cclxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5pyq5r+A5rS7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdE5lZWRBY3RpdmVUb3dlciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRGaXJzdE5lZWRUb0FjdGl2ZVRvd2VySW5kZXgoKTtcclxuICAgICAgICAgICAgLy/ojrflj5bnrKzkuIDkuKrpnIDopoHmv4DmtLvnmoTloZTnmoRpbmRleFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0IG5lZWQgYWN0aXZlIHRvd2VyXCIsIGZpcnN0TmVlZEFjdGl2ZVRvd2VyKTtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZUNvc3RHb2xkQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvc3RHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jb3N0R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gYWN0aXZlQ29zdEdvbGRDb3VudCArICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRHb2xkXHJcbiAgICAgICAgICAgIGlmIChmaXJzdE5lZWRBY3RpdmVUb3dlciA9PT0gdGhpcy50b3dlckluZGV4VHlwZSAmJiBhY3RpdmVDb3N0R29sZENvdW50IDw9IGN1cnJlbnRHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIC8v5b2T5YmN55qE6YeR5biB5Liq5pWw6KaB5aSn5LqO562J5LqO6ZyA6KaB55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmFjdGl2ZUJ1dHRvblNwcml0ZUZyYW1lTGlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmFjdGl2ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN6IO95r+A5rS777yM6YKj5LmI6ZyA6KaB5pi+56S654Gw6Imy55qE5oyJ6ZKuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXBkYXRlQ29zdENvdW50ID0gdGhpcy5nZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERhbWFnZUxhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gdGhpcy5nZXRMb2NhbERhbWFnZU51bSgpICsgJyc7XHJcbiAgICAgICAgdGhpcy5jb3N0R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gdXBkYXRlQ29zdENvdW50ICsgJyc7XHJcbiAgICAgICAgdGhpcy5hZGREYW1hZ2VMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFwiK1wiICsgdGhpcy5nZXROZXh0TG9jYWxsZXZlbEFkZERhbWFnZSgpICsgJyc7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRHb2xkQ291bnQgPCB1cGRhdGVDb3N0Q291bnQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyYXlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyYXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy51cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAndXBkYXRlLWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWNh+e6p+aMiemSrlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuZ2V0V2VhcG9uSXNBY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50R29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTsgLy/lvZPliY3nmoTph5HluIHkuKrmlbBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlQ29zdCA9IHRoaXMuZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTsgLy/ojrflj5bljYfnuqfkuIvkuIDnuqfpnIDopoHnmoTph5HluIHmlbBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlQ29zdCA8PSBjdXJyZW50R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxMZXZlbCh0aGlzLmN1cnJlbnRDaG9vc2VSYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCgtdXBkYXRlQ29zdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aXZlQ29zdCA9IHRoaXMuZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVDb3N0IDw9IGN1cnJlbnRHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVXZWFwb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCgtYWN0aXZlQ29zdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1dlYXBvbkljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0VXBkYXRlQ29zdCgpe1xyXG5cclxuICAgIC8vIH1cclxuICAgIGdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBzdXBlci5nZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpO1xyXG4gICAgICAgIGNvc3QgKj0gdGhpcy5jdXJyZW50Q2hvb3NlUmF0ZTtcclxuICAgICAgICAvL+mmluWFiOiOt+WPluacrOi6q+mcgOimgea2iOiAl+eahOmHkeW4geS4quaVsCAvL+WKoOS4iuWAjeaVsFxyXG4gICAgICAgIHJldHVybiBjb3N0O1xyXG4gICAgfVxyXG4gICAgZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbG9jYWxEYW1hZ2UgPSBzdXBlci5nZXROZXh0TG9jYWxsZXZlbEFkZERhbWFnZSgpO1xyXG4gICAgICAgIGxvY2FsRGFtYWdlICo9IHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsRGFtYWdlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==