System.register(["cc", "code-quality:cr", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, SpriteFrame, loader, SpriteComponent, LabelComponent, BaseObject, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, WeaponUpdateCellPrefab;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
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
            var isActive = data['isActive'];

            if (isActive) {
              var towerType = data['TowerType'];
              this.objectType = towerType;

              _get(_getPrototypeOf(WeaponUpdateCellPrefab.prototype), "init", this).call(this, gameConfig, gameController);

              var iconStr = data['IconSprteFrame'];
              loader.loadRes(iconStr + '/spriteFrame', SpriteFrame, function (err, result) {
                if (!err) {
                  _this2.weaponIconNode.getComponent(SpriteComponent).spriteFrame = result;
                }

                console.log("err", err);
              }); // let cost = this.getUpdateLocalLevelCost();
              // let updateLocalLevelAddDamage = this.getNextLocallevelAddDamage();

              this.referUILabel();
            } else {}
          }
        }, {
          key: "referUILabel",
          value: function referUILabel() {
            var updateCostCount = this.getUpdateLocalLevelCost();
            this.currentDamageLabel.getComponent(LabelComponent).string = this.getLocalDamageNum() + '';
            this.costGoldLabel.getComponent(LabelComponent).string = updateCostCount + '';
            this.addDamageLabel.getComponent(LabelComponent).string = "+" + this.getNextLocallevelAddDamage() + '';
            var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();

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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9XZWFwb25VcGRhdGVDZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiU3ByaXRlRnJhbWUiLCJsb2FkZXIiLCJTcHJpdGVDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXZWFwb25VcGRhdGVDZWxsUHJlZmFiIiwidHlwZSIsImN1cnJlbnRDaG9vc2VSYXRlIiwicmF0ZU51bSIsInJlZmVyVUlMYWJlbCIsImRhdGEiLCJnYW1lQ29udHJvbGxlciIsImdhbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiaXNBY3RpdmUiLCJ0b3dlclR5cGUiLCJvYmplY3RUeXBlIiwiaWNvblN0ciIsImxvYWRSZXMiLCJlcnIiLCJyZXN1bHQiLCJ3ZWFwb25JY29uTm9kZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwidXBkYXRlQ29zdENvdW50IiwiZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QiLCJjdXJyZW50RGFtYWdlTGFiZWwiLCJzdHJpbmciLCJnZXRMb2NhbERhbWFnZU51bSIsImNvc3RHb2xkTGFiZWwiLCJhZGREYW1hZ2VMYWJlbCIsImdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlIiwiY3VycmVudEdvbGRDb3VudCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwidXBkYXRlQnV0dG9uTm9kZSIsInVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheSIsInVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JlZW4iLCJldmVudCIsImN1c3RvbURhdGEiLCJ1cGRhdGVDb3N0IiwidXBkYXRlTG9jYWxMZXZlbCIsImFkZEdvbGRDb3VudCIsImNvc3QiLCJsb2NhbERhbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsYyxPQUFBQSxjOzs7O0FBQ25FQyxNQUFBQSxVLGlCQUFBQSxVOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7d0NBR0pDLHNCLFdBRFpGLE9BQU8sQ0FBQyx3QkFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0RVLGlCLEdBQTRCLEM7Ozs7OztrQ0FDNUIsQ0FDUCxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OzsyQ0FFd0JDLE8sRUFBaUI7QUFDckM7QUFDQTtBQUNBLGlCQUFLRCxpQkFBTCxHQUF5QkMsT0FBekI7QUFDQSxpQkFBS0MsWUFBTDtBQUNIOzs7a0NBQ2NDLEksRUFBY0MsYyxFQUFnQ0MsVSxFQUFvQjtBQUFBOztBQUM3RUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkosSUFBckIsRUFENkUsQ0FFN0U7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLFlBQUFBLGNBQWMsQ0FBQ0ksSUFBZixDQUFvQkMsRUFBcEIsQ0FBdUIsbUJBQXZCLEVBQTRDLFlBQU07QUFDOUM7QUFDQSxjQUFBLE1BQUksQ0FBQ1AsWUFBTCxHQUY4QyxDQUUxQjs7QUFFdkIsYUFKRDtBQUtBLGdCQUFJUSxRQUFRLEdBQUdQLElBQUksQ0FBQyxVQUFELENBQW5COztBQUNBLGdCQUFJTyxRQUFKLEVBQWM7QUFDVixrQkFBSUMsU0FBUyxHQUFHUixJQUFJLENBQUMsV0FBRCxDQUFwQjtBQUNBLG1CQUFLUyxVQUFMLEdBQWtCRCxTQUFsQjs7QUFDQSwrRkFBV04sVUFBWCxFQUF1QkQsY0FBdkI7O0FBR0Esa0JBQUlTLE9BQU8sR0FBR1YsSUFBSSxDQUFDLGdCQUFELENBQWxCO0FBQ0FYLGNBQUFBLE1BQU0sQ0FBQ3NCLE9BQVAsQ0FBZUQsT0FBTyxHQUFHLGNBQXpCLEVBQXlDdEIsV0FBekMsRUFBc0QsVUFBQ3dCLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNuRSxvQkFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixrQkFBQSxNQUFJLENBQUNFLGNBQUwsQ0FBb0JDLFlBQXBCLENBQWlDekIsZUFBakMsRUFBa0QwQixXQUFsRCxHQUFnRUgsTUFBaEU7QUFDSDs7QUFDRFYsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJRLEdBQW5CO0FBQ0gsZUFMRCxFQVBVLENBYVY7QUFFQTs7QUFDQSxtQkFBS2IsWUFBTDtBQUVILGFBbEJELE1Ba0JPLENBRU47QUFDSjs7O3lDQUNjO0FBQ1gsZ0JBQUlrQixlQUFlLEdBQUcsS0FBS0MsdUJBQUwsRUFBdEI7QUFDQSxpQkFBS0Msa0JBQUwsQ0FBd0JKLFlBQXhCLENBQXFDeEIsY0FBckMsRUFBcUQ2QixNQUFyRCxHQUE4RCxLQUFLQyxpQkFBTCxLQUEyQixFQUF6RjtBQUNBLGlCQUFLQyxhQUFMLENBQW1CUCxZQUFuQixDQUFnQ3hCLGNBQWhDLEVBQWdENkIsTUFBaEQsR0FBeURILGVBQWUsR0FBRyxFQUEzRTtBQUNBLGlCQUFLTSxjQUFMLENBQW9CUixZQUFwQixDQUFpQ3hCLGNBQWpDLEVBQWlENkIsTUFBakQsR0FBMEQsTUFBTSxLQUFLSSwwQkFBTCxFQUFOLEdBQTBDLEVBQXBHO0FBQ0EsZ0JBQUlDLGdCQUFnQixHQUFHLEtBQUt4QixjQUFMLENBQW9CeUIsVUFBcEIsQ0FBK0JDLG1CQUEvQixFQUF2Qjs7QUFDQSxnQkFBSUYsZ0JBQWdCLEdBQUdSLGVBQXZCLEVBQXdDO0FBQ3BDO0FBQ0EsbUJBQUtXLGdCQUFMLENBQXNCYixZQUF0QixDQUFtQ3pCLGVBQW5DLEVBQW9EMEIsV0FBcEQsR0FBa0UsS0FBS2EsMkJBQXZFO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsbUJBQUtELGdCQUFMLENBQXNCYixZQUF0QixDQUFtQ3pCLGVBQW5DLEVBQW9EMEIsV0FBcEQsR0FBa0UsS0FBS2MsNEJBQXZFO0FBQ0g7QUFDSjs7O3dDQUNhQyxLLEVBQU9DLFUsRUFBWTtBQUM3QixvQkFBUUEsVUFBUjtBQUNJLG1CQUFLLGVBQUw7QUFDSTdCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Esb0JBQUk2QixVQUFVLEdBQUcsS0FBS2YsdUJBQUwsRUFBakIsQ0FGSixDQUVxRDs7QUFDakQsb0JBQUlPLGdCQUFnQixHQUFHLEtBQUt4QixjQUFMLENBQW9CeUIsVUFBcEIsQ0FBK0JDLG1CQUEvQixFQUF2QixDQUhKLENBR2lGOztBQUM3RSxvQkFBSU0sVUFBVSxJQUFJUixnQkFBbEIsRUFBb0M7QUFDaEMsdUJBQUtTLGdCQUFMLENBQXNCLEtBQUtyQyxpQkFBM0I7QUFDQSx1QkFBS0ksY0FBTCxDQUFvQnlCLFVBQXBCLENBQStCUyxZQUEvQixDQUE0QyxDQUFDRixVQUE3QztBQUNBLHVCQUFLbEMsWUFBTDtBQUNILGlCQUpELE1BSU8sQ0FFTjs7QUFFRDs7QUFDSjtBQUNJO0FBZlI7QUFpQkgsVyxDQUNEO0FBRUE7Ozs7b0RBQ2tDO0FBQzlCLGdCQUFJcUMsSUFBSSxzR0FBUjs7QUFDQUEsWUFBQUEsSUFBSSxJQUFJLEtBQUt2QyxpQkFBYixDQUY4QixDQUc5Qjs7QUFDQSxtQkFBT3VDLElBQVA7QUFDSDs7O3VEQUNvQztBQUNqQyxnQkFBSUMsV0FBVyx5R0FBZjs7QUFDQUEsWUFBQUEsV0FBVyxJQUFJLEtBQUt4QyxpQkFBcEI7QUFDQSxtQkFBT3dDLFdBQVA7QUFDSDs7Ozs7Ozs7Ozs7aUJBaEhpQyxJOzs7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVvQixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBRW5CLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2VhcG9uVXBkYXRlQ2VsbFByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25VcGRhdGVDZWxsUHJlZmFiIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudERhbWFnZUxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhZGREYW1hZ2VMYWJlbDogTm9kZSA9IG51bGw7IC8v6ZyA6KaB5aKe5Yqg5LqG5pS75Ye75Yqb55qEbGFiZWxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjb3N0R29sZExhYmVsOiBOb2RlID0gbnVsbDsgLy/pnIDopoHmtojogJfnmoTph5HluIFcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25JY29uTm9kZTogTm9kZSA9IG51bGw7IC8vXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25TcHJpdGVGcmFtZUdyZWVuOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q2hvb3NlUmF0ZTogbnVtYmVyID0gMDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG4gICAgLy8gaW5pdChnYW1lQ29uZmlnOiBPYmplY3Qpe1xyXG4gICAgLy8gICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgc2hvd1xyXG4gICAgLy8gcHVibGljIHJlZmVyQ3VycmVudERhbWFnZSgpIHtcclxuICAgIC8vICAgICAvL+WIt+aWsOW9k+WJjeeahOaUu+WHu+WAvFxyXG4gICAgLy8gICAgIC8vIHRoaXMuY3VycmVudERhbWFnZUxhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKCkgKyAnJztcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUNob29zZVJhdGUocmF0ZU51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/mm7TmlrDlvZPliY3pgInmi6nnmoTlgI3mlbBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuabtOaWsOW9k+WJjeeahOWAjeaVsFwiLCByYXRlTnVtKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDaG9vc2VSYXRlID0gcmF0ZU51bTtcclxuICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIGdhbWVDb25maWc6IE9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5pWw5o2uXCIsIGRhdGEpO1xyXG4gICAgICAgIC8vIGxldCBpY29uU3RyID0gZGF0YVsnSWNvblNwcnRlRnJhbWUnXTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnVpQ29udHJvbGxlci5vbihcIm9uLWdvbGQtY291bnQtcmVmZXItZXZlbnRcIiwgKCk9PntcclxuICAgICAgICAvLyAgICAgLy/ms6jlhozlvZPliY3ph5HluIHkuKrmlbDmlLnlj5jnmoTmtojmga9cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBnYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+agueaNruW9k+WJjeeahFxyXG4gICAgICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpOy8v5pu05pawdWlMYWJlbFxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaXNBY3RpdmUgPSBkYXRhWydpc0FjdGl2ZSddO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgdG93ZXJUeXBlID0gZGF0YVsnVG93ZXJUeXBlJ107XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IHRvd2VyVHlwZTtcclxuICAgICAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGljb25TdHIgPSBkYXRhWydJY29uU3BydGVGcmFtZSddO1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhpY29uU3RyICsgJy9zcHJpdGVGcmFtZScsIFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb25JY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBsZXQgY29zdCA9IHRoaXMuZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVMb2NhbExldmVsQWRkRGFtYWdlID0gdGhpcy5nZXROZXh0TG9jYWxsZXZlbEFkZERhbWFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZmVyVUlMYWJlbCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWZlclVJTGFiZWwoKSB7XHJcbiAgICAgICAgbGV0IHVwZGF0ZUNvc3RDb3VudCA9IHRoaXMuZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYW1hZ2VMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHRoaXMuZ2V0TG9jYWxEYW1hZ2VOdW0oKSArICcnO1xyXG4gICAgICAgIHRoaXMuY29zdEdvbGRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHVwZGF0ZUNvc3RDb3VudCArICcnO1xyXG4gICAgICAgIHRoaXMuYWRkRGFtYWdlTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBcIitcIiArIHRoaXMuZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKSArICcnO1xyXG4gICAgICAgIGxldCBjdXJyZW50R29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICBpZiAoY3VycmVudEdvbGRDb3VudCA8IHVwZGF0ZUNvc3RDb3VudCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnVwZGF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cGRhdGUtYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y2H57qn5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUNvc3QgPSB0aGlzLmdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCk7IC8v6I635Y+W5Y2H57qn5LiL5LiA57qn6ZyA6KaB55qE6YeR5biB5pWwXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7IC8v5b2T5YmN55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlQ29zdCA8PSBjdXJyZW50R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbExldmVsKHRoaXMuY3VycmVudENob29zZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoLXVwZGF0ZUNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXJVSUxhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldFVwZGF0ZUNvc3QoKXtcclxuXHJcbiAgICAvLyB9XHJcbiAgICBnZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjb3N0ID0gc3VwZXIuZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKTtcclxuICAgICAgICBjb3N0ICo9IHRoaXMuY3VycmVudENob29zZVJhdGU7XHJcbiAgICAgICAgLy/pppblhYjojrflj5bmnKzouqvpnIDopoHmtojogJfnmoTph5HluIHkuKrmlbAgLy/liqDkuIrlgI3mlbBcclxuICAgICAgICByZXR1cm4gY29zdDtcclxuICAgIH1cclxuICAgIGdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxvY2FsRGFtYWdlID0gc3VwZXIuZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKTtcclxuICAgICAgICBsb2NhbERhbWFnZSAqPSB0aGlzLmN1cnJlbnRDaG9vc2VSYXRlO1xyXG4gICAgICAgIHJldHVybiBsb2NhbERhbWFnZTtcclxuICAgIH1cclxufVxyXG4iXX0=