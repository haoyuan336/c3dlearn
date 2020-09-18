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
              this.activeWeapon();
            }

            this.referUILabel();
          }
        }, {
          key: "activeWeapon",
          value: function activeWeapon() {
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
              var activeCostGoldCount = this.getActiveCostGoldCount(); // let currentGold

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
                var updateCost = this.getUpdateLocalLevelCost(); //获取升级下一级需要的金币数

                var currentGoldCount = this.gameController.playerData.getCurrentGoldCount(); //当前的金币个数

                if (updateCost <= currentGoldCount) {
                  this.updateLocalLevel(this.currentChooseRate);
                  this.gameController.playerData.addGoldCount(-updateCost);
                  this.referUILabel();
                } else {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25VcGRhdGVDZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiU3ByaXRlRnJhbWUiLCJsb2FkZXIiLCJTcHJpdGVDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXZWFwb25VcGRhdGVDZWxsUHJlZmFiIiwidHlwZSIsImN1cnJlbnRDaG9vc2VSYXRlIiwicmF0ZU51bSIsInJlZmVyVUlMYWJlbCIsImRhdGEiLCJnYW1lQ29udHJvbGxlciIsImdhbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwidG93ZXJUeXBlIiwib2JqZWN0VHlwZSIsImlzQWN0aXZlIiwiYWN0aXZlV2VhcG9uIiwiaWNvblN0ciIsImdldEljb25TcHJ0ZUZyYW1lIiwibG9hZFJlcyIsImVyciIsInJlc3VsdCIsIndlYXBvbkljb25Ob2RlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJnZXRXZWFwb25Jc0FjdGl2ZSIsImN1cnJlbnRHb2xkQ291bnQiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImZpcnN0TmVlZEFjdGl2ZVRvd2VyIiwiZ2V0Rmlyc3ROZWVkVG9BY3RpdmVUb3dlckluZGV4IiwiYWN0aXZlQ29zdEdvbGRDb3VudCIsImdldEFjdGl2ZUNvc3RHb2xkQ291bnQiLCJ0b3dlckluZGV4VHlwZSIsInVwZGF0ZUJ1dHRvbk5vZGUiLCJhY3RpdmVCdXR0b25TcHJpdGVGcmFtZUxpZ2h0IiwiYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVHcmF5IiwidXBkYXRlQ29zdENvdW50IiwiZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QiLCJjdXJyZW50RGFtYWdlTGFiZWwiLCJzdHJpbmciLCJnZXRMb2NhbERhbWFnZU51bSIsImNvc3RHb2xkTGFiZWwiLCJhZGREYW1hZ2VMYWJlbCIsImdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlIiwidXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmF5IiwidXBkYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmVlbiIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInVwZGF0ZUNvc3QiLCJ1cGRhdGVMb2NhbExldmVsIiwiYWRkR29sZENvdW50IiwiY29zdCIsImxvY2FsRGFtYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsYyxPQUFBQSxjOzs7O0FBQ25FQyxNQUFBQSxVLGlCQUFBQSxVOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7d0NBR0pDLHNCLFdBRFpGLE9BQU8sQ0FBQyx3QkFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FB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aUJILFcsQ0FDRDtBQUVBOzs7O29EQUNrQztBQUM5QixnQkFBSStDLElBQUksc0dBQVI7O0FBQ0FBLFlBQUFBLElBQUksSUFBSSxLQUFLakQsaUJBQWIsQ0FGOEIsQ0FHOUI7O0FBQ0EsbUJBQU9pRCxJQUFQO0FBQ0g7Ozt1REFDb0M7QUFDakMsZ0JBQUlDLFdBQVcseUdBQWY7O0FBQ0FBLFlBQUFBLFdBQVcsSUFBSSxLQUFLbEQsaUJBQXBCO0FBQ0EsbUJBQU9rRCxXQUFQO0FBQ0g7Ozs7Ozs7Ozs7O2lCQXJJaUMsSTs7Ozs7OztpQkFFSixJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFFb0IsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVuQixJOzs7Ozs7O2lCQUdrQixJOzs7Ozs7O2lCQUdDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2VhcG9uVXBkYXRlQ2VsbFByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25VcGRhdGVDZWxsUHJlZmFiIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudERhbWFnZUxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhZGREYW1hZ2VMYWJlbDogTm9kZSA9IG51bGw7IC8v6ZyA6KaB5aKe5Yqg5LqG5pS75Ye75Yqb55qEbGFiZWxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjb3N0R29sZExhYmVsOiBOb2RlID0gbnVsbDsgLy/pnIDopoHmtojogJfnmoTph5HluIFcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25JY29uTm9kZTogTm9kZSA9IG51bGw7IC8vXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyZWVuOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBhY3RpdmVCdXR0b25TcHJpdGVGcmFtZUdyYXk6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGFjdGl2ZUJ1dHRvblNwcml0ZUZyYW1lTGlnaHQ6IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRDaG9vc2VSYXRlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBpbml0KGdhbWVDb25maWc6IE9iamVjdCl7XHJcbiAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHB1YmxpYyBzaG93XHJcbiAgICAvLyBwdWJsaWMgcmVmZXJDdXJyZW50RGFtYWdlKCkge1xyXG4gICAgLy8gICAgIC8v5Yi35paw5b2T5YmN55qE5pS75Ye75YC8XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jdXJyZW50RGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSArICcnO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2hvb3NlUmF0ZShyYXRlTnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvL+abtOaWsOW9k+WJjemAieaLqeeahOWAjeaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pu05paw5b2T5YmN55qE5YCN5pWwXCIsIHJhdGVOdW0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENob29zZVJhdGUgPSByYXRlTnVtO1xyXG4gICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbmlbDmja5cIiwgZGF0YSk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSBkYXRhWydJY29uU3BydGVGcmFtZSddO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIudWlDb250cm9sbGVyLm9uKFwib24tZ29sZC1jb3VudC1yZWZlci1ldmVudFwiLCAoKT0+e1xyXG4gICAgICAgIC8vICAgICAvL+azqOWGjOW9k+WJjemHkeW4geS4quaVsOaUueWPmOeahOa2iOaBr1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5b2T5YmN55qEXHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7Ly/mm7TmlrB1aUxhYmVsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0b3dlclR5cGUgPSBkYXRhWydUb3dlclR5cGUnXTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSB0b3dlclR5cGU7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gZGF0YVsnaXNBY3RpdmUnXTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVXZWFwb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZlclVJTGFiZWwoKTtcclxuXHJcbiAgICB9XHJcbiAgICBhY3RpdmVXZWFwb24oKSB7XHJcbiAgICAgICAgbGV0IGljb25TdHIgPSB0aGlzLmdldEljb25TcHJ0ZUZyYW1lKCk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSBkYXRhWydJY29uU3BydGVGcmFtZSddO1xyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKGljb25TdHIgKyAnL3Nwcml0ZUZyYW1lJywgU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWFwb25JY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVmZXJVSUxhYmVsKCkge1xyXG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuZ2V0V2VhcG9uSXNBY3RpdmUoKTtcclxuICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcblxyXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmnKrmv4DmtLtcclxuICAgICAgICAgICAgbGV0IGZpcnN0TmVlZEFjdGl2ZVRvd2VyID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEZpcnN0TmVlZFRvQWN0aXZlVG93ZXJJbmRleCgpO1xyXG4gICAgICAgICAgICAvL+iOt+WPluesrOS4gOS4qumcgOimgea/gOa0u+eahOWhlOeahGluZGV4XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgbmVlZCBhY3RpdmUgdG93ZXJcIiwgZmlyc3ROZWVkQWN0aXZlVG93ZXIpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlQ29zdEdvbGRDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudEdvbGRcclxuICAgICAgICAgICAgaWYgKGZpcnN0TmVlZEFjdGl2ZVRvd2VyID09PSB0aGlzLnRvd2VySW5kZXhUeXBlICYmIGFjdGl2ZUNvc3RHb2xkQ291bnQgPD0gY3VycmVudEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvZPliY3nmoTph5HluIHkuKrmlbDopoHlpKfkuo7nrYnkuo7pnIDopoHnmoTph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVMaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuYWN0aXZlQnV0dG9uU3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzkuI3og73mv4DmtLvvvIzpgqPkuYjpnIDopoHmmL7npLrngbDoibLnmoTmjInpkq5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cGRhdGVDb3N0Q291bnQgPSB0aGlzLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB0aGlzLmdldExvY2FsRGFtYWdlTnVtKCkgKyAnJztcclxuICAgICAgICB0aGlzLmNvc3RHb2xkTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB1cGRhdGVDb3N0Q291bnQgKyAnJztcclxuICAgICAgICB0aGlzLmFkZERhbWFnZUxhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gXCIrXCIgKyB0aGlzLmdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCkgKyAnJztcclxuICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA8IHVwZGF0ZUNvc3RDb3VudCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cGRhdGUtYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y2H57qn5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUNvc3QgPSB0aGlzLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7IC8v6I635Y+W5Y2H57qn5LiL5LiA57qn6ZyA6KaB55qE6YeR5biB5pWwXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7IC8v5b2T5YmN55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlQ29zdCA8PSBjdXJyZW50R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbExldmVsKHRoaXMuY3VycmVudENob29zZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoLXVwZGF0ZUNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldFVwZGF0ZUNvc3QoKXtcclxuXHJcbiAgICAvLyB9XHJcbiAgICBnZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjb3N0ID0gc3VwZXIuZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTtcclxuICAgICAgICBjb3N0ICo9IHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgLy/pppblhYjojrflj5bmnKzouqvpnIDopoHmtojogJfnmoTph5HluIHkuKrmlbAgLy/liqDkuIrlgI3mlbBcclxuICAgICAgICByZXR1cm4gY29zdDtcclxuICAgIH1cclxuICAgIGdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxvY2FsRGFtYWdlID0gc3VwZXIuZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKTtcclxuICAgICAgICBsb2NhbERhbWFnZSAqPSB0aGlzLmN1cnJlbnRDaG9vc2VSYXRlO1xyXG4gICAgICAgIHJldHVybiBsb2NhbERhbWFnZTtcclxuICAgIH1cclxufVxyXG4iXX0=