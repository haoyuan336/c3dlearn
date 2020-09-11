System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CCFloat, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BaseObject;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f047fSpjWxIyqfTRsf+Ksl/", "BaseObject", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseObject", BaseObject = (_dec = ccclass('BaseObject'), _dec2 = property({
        type: ""
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(BaseObject, _Component);

        function BaseObject() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BaseObject);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseObject)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "objectType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rootNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animSpeedMulOffset", _descriptor3, _assertThisInitialized(_this));

          _this.currentLevel = 1;
          _this.baseGasNum = 0;
          _this.baseAttackNum = 0;
          _this.baseAttackRate = 0;
          _this.baseRotateAngle = 0;
          _this.rotateSpeed = 0;
          _this.baseGoldCount = 0;
          _this.buildCost = 0;
          _this.shootDuraction = 0;
          _this.baseAttackRange = 0;
          _this.towerUpdateMaxLevel = 0;
          _this.currentGasNum = 0;
          _this.moveSpeed = 0;
          _this.isCollisionGround = false;
          _this.leftTime = 0;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          // 生命周期
          value: function init(gameConfig, startPos, endPos) {
            // this.baseGasNum = gameConfig[]
            if (gameConfig[this.objectType].BaseGasNum) {
              this.baseGasNum = gameConfig[this.objectType].BaseGasNum;
            }

            this.currentGasNum = this.baseGasNum;

            if (gameConfig[this.objectType].MoveSpeed) {
              this.moveSpeed = gameConfig[this.objectType].MoveSpeed;
            }

            if (gameConfig[this.objectType].isCollisionGround) {
              this.isCollisionGround = gameConfig[this.objectType].isCollisionGround;
            }

            if (gameConfig[this.objectType].BaseAttackNum) {
              this.baseAttackNum = gameConfig[this.objectType].BaseAttackNum;
            }

            if (gameConfig[this.objectType].ShootRate) {
              this.baseAttackRate = gameConfig[this.objectType].ShootRate;
              this.shootDuraction = 1 / this.getCurrentShootRate();
            }

            if (gameConfig[this.objectType].BaseRotateAngle) {
              this.baseRotateAngle = gameConfig[this.objectType].BaseRotateAngle;
            }

            if (gameConfig[this.objectType].LeftTime) {
              this.leftTime = gameConfig[this.objectType].LeftTime;
            }

            if (gameConfig[this.objectType].RotateSpeed) {
              this.rotateSpeed = gameConfig[this.objectType].RotateSpeed;
            } // "BaseGoldCount": 1


            if (gameConfig[this.objectType].BaseGoldCount) {
              this.baseGoldCount = gameConfig[this.objectType].BaseGoldCount;
            }

            if (gameConfig[this.objectType].BuildCost) {
              this.buildCost = gameConfig[this.objectType].BuildCost;
            }

            if (gameConfig[this.objectType].AttackRange) {
              this.baseAttackRange = gameConfig[this.objectType].AttackRange;
            }

            if (gameConfig['TowerMaxLevel']) {
              this.towerUpdateMaxLevel = gameConfig['TowerMaxLevel'];
            }
          }
        }, {
          key: "getCurrentAttackNum",
          value: function getCurrentAttackNum(addValue) {
            var offsetValue = 0;

            if (addValue) {
              offsetValue = addValue;
            } // Math.floor(this.buildCost * processLevel * (processLevel + 1) * 0.2)


            var processLevel = this.currentLevel;
            return this.baseAttackNum * processLevel * (processLevel + 1) * 0.1 + offsetValue;
          }
        }, {
          key: "getCurrentSkillRotateAngle",
          value: function getCurrentSkillRotateAngle() {
            //获取旋转技能的旋转角度
            return this.baseRotateAngle;
          }
        }, {
          key: "getCurrentShootRate",
          value: function getCurrentShootRate() {
            // baseAttackNum
            var currentShootRate = this.baseAttackRate;
            console.log("current shoot rate", currentShootRate);
            currentShootRate *= 1 + this.currentLevel * this.currentLevel * 0.01;
            console.log("current shoor rate", currentShootRate); //不能太快 设置一个封顶

            if (currentShootRate > 10) {
              currentShootRate = 10;
            }

            return currentShootRate; // return this.baseAttackRate + this.node.getComponent(BaseObject).baseAttackRate;
            // return this.baseAttackRate * (this.currentLevel) * (this.currentLevel + 1) * 0.1;
          }
        }, {
          key: "getCurrentGoldCount",
          value: function getCurrentGoldCount() {
            return this.baseGoldCount;
          }
        }, {
          key: "getCurrentLevel",
          value: function getCurrentLevel() {
            return this.currentLevel;
          }
        }, {
          key: "getUpdateCost",
          value: function getUpdateCost(level) {
            //获取升级需要消耗的金币个数
            var processLevel = this.currentLevel + 1;

            if (level) {
              processLevel = level;
            }

            return Math.floor(this.buildCost * processLevel * (processLevel + 1)); // return this.baseAttackNum
          }
        }, {
          key: "getDestroyCount",
          value: function getDestroyCount() {
            var currentLevelCost = this.getUpdateCost(this.currentLevel);
            return Math.floor(currentLevelCost * 0.4);
          }
        }, {
          key: "updateLevel",
          value: function updateLevel() {
            this.currentLevel++; // this.shootDuraction = 

            var currentShootRate = this.getCurrentShootRate();
            this.shootDuraction = 1 / currentShootRate;
            console.log("升级之后 的 攻击事件间隔", this.shootDuraction);
          }
        }, {
          key: "getCurrentAttackRange",
          value: function getCurrentAttackRange() {
            //获取当前的攻击范围
            var currentLevel = this.currentLevel;
            return this.baseAttackRange * (1 + currentLevel * (currentLevel - 0.5) * 0.01);
          }
        }, {
          key: "getTowerIsMax",
          value: function getTowerIsMax() {
            //获取塔是不是升级满了
            console.log('current level', this.currentLevel);
            console.log("tower update max level", this.towerUpdateMaxLevel);

            if (this.currentLevel >= this.towerUpdateMaxLevel) {
              return true;
            }

            return false;
          }
        }]);

        return BaseObject;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objectType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "default";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animSpeedMulOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ0NGbG9hdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhc2VPYmplY3QiLCJ0eXBlIiwiY3VycmVudExldmVsIiwiYmFzZUdhc051bSIsImJhc2VBdHRhY2tOdW0iLCJiYXNlQXR0YWNrUmF0ZSIsImJhc2VSb3RhdGVBbmdsZSIsInJvdGF0ZVNwZWVkIiwiYmFzZUdvbGRDb3VudCIsImJ1aWxkQ29zdCIsInNob290RHVyYWN0aW9uIiwiYmFzZUF0dGFja1JhbmdlIiwidG93ZXJVcGRhdGVNYXhMZXZlbCIsImN1cnJlbnRHYXNOdW0iLCJtb3ZlU3BlZWQiLCJpc0NvbGxpc2lvbkdyb3VuZCIsImxlZnRUaW1lIiwiZ2FtZUNvbmZpZyIsInN0YXJ0UG9zIiwiZW5kUG9zIiwib2JqZWN0VHlwZSIsIkJhc2VHYXNOdW0iLCJNb3ZlU3BlZWQiLCJCYXNlQXR0YWNrTnVtIiwiU2hvb3RSYXRlIiwiZ2V0Q3VycmVudFNob290UmF0ZSIsIkJhc2VSb3RhdGVBbmdsZSIsIkxlZnRUaW1lIiwiUm90YXRlU3BlZWQiLCJCYXNlR29sZENvdW50IiwiQnVpbGRDb3N0IiwiQXR0YWNrUmFuZ2UiLCJhZGRWYWx1ZSIsIm9mZnNldFZhbHVlIiwicHJvY2Vzc0xldmVsIiwiY3VycmVudFNob290UmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsZXZlbCIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnRMZXZlbENvc3QiLCJnZXRVcGRhdGVDb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBc0JD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QWxFLENBQVA7QUFDSDs7OzBDQUN3QjtBQUNyQjtBQUNBa0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLbkMsWUFBbEM7QUFDQWtDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDLEtBQUt6QixtQkFBM0M7O0FBQ0EsZ0JBQUksS0FBS1YsWUFBTCxJQUFxQixLQUFLVSxtQkFBOUIsRUFBbUQ7QUFDL0MscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7OztRQWxKMkJqQixTOzs7OztpQkFFUixTOzs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRVksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NTdHJpbmcsIFZlYzMsIENDRmxvYXQsIGdhbWUgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQmFzZU9iamVjdCcpXHJcbmV4cG9ydCBjbGFzcyBCYXNlT2JqZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBvYmplY3RUeXBlID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcm9vdE5vZGU6IE5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0Zsb2F0IH0pXHJcbiAgICBwdWJsaWMgYW5pbVNwZWVkTXVsT2Zmc2V0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGJhc2VHYXNOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5rCU5YC8XHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmF0ZTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpopHnjodcclxuICAgIHB1YmxpYyBiYXNlUm90YXRlQW5nbGU6IG51bWJlciA9IDA7IC8v5Z+656GA5peL6L2s5oqA6IO977yM5peL6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgcm90YXRlU3BlZWQ6IG51bWJlciA9IDA7IC8v5peL6L2s5oqA6IO955qE5peL6L2s6KeS6YCf5bqmXHJcbiAgICBwdWJsaWMgYmFzZUdvbGRDb3VudDogbnVtYmVyID0gMDsgLy/ln7rnoYDnmoTph5HluIHkuKrmlbBcclxuICAgIHB1YmxpYyBidWlsZENvc3Q6IG51bWJlciA9IDA7IC8v5bu66YCg6ZyA6KaB5raI6ICX55qE6YeR5biBXHJcbiAgICBwdWJsaWMgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76Ze06ZqUXHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja1JhbmdlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgcHVibGljIHRvd2VyVXBkYXRlTWF4TGV2ZWw6IG51bWJlciA9IDA7IC8v5aGU5Y2H57qn5Yiw55qE5pyA6auY562J57qnXHJcblxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRHYXNOdW06IG51bWJlciA9IDA7IC8v5b2T5YmN55qE5rCU5YC8XHJcblxyXG4gICAgcHJvdGVjdGVkIG1vdmVTcGVlZDogbnVtYmVyID0gMDsgLy/np7vliqjpgJ/luqZcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNDb2xsaXNpb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuS4juWcsOmdoueisOaSnuWPkeeUn+WPjeW8uVxyXG5cclxuICAgIHB1YmxpYyBsZWZ0VGltZTogbnVtYmVyID0gMDsgLy8g55Sf5ZG95ZGo5pyfXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIHN0YXJ0UG9zPzogVmVjMywgZW5kUG9zPzogVmVjMykge1xyXG4gICAgICAgIC8vIHRoaXMuYmFzZUdhc051bSA9IGdhbWVDb25maWdbXVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdhc051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VHYXNOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gPSB0aGlzLmJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uTW92ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNwZWVkID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxpc2lvbkdyb3VuZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5pc0NvbGxpc2lvbkdyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUF0dGFja051bSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tSYXRlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdER1cmFjdGlvbiA9IDEgLyB0aGlzLmdldEN1cnJlbnRTaG9vdFJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlUm90YXRlQW5nbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUm90YXRlQW5nbGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdFRpbWUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uTGVmdFRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uUm90YXRlU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Sb3RhdGVTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gXCJCYXNlR29sZENvdW50XCI6IDFcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlR29sZENvdW50ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHb2xkQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQnVpbGRDb3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRDb3N0ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJ1aWxkQ29zdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5BdHRhY2tSYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tSYW5nZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5BdHRhY2tSYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbJ1Rvd2VyTWF4TGV2ZWwnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwgPSBnYW1lQ29uZmlnWydUb3dlck1heExldmVsJ107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEF0dGFja051bShhZGRWYWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGxldCBvZmZzZXRWYWx1ZSA9IDA7XHJcbiAgICAgICAgaWYgKGFkZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9mZnNldFZhbHVlID0gYWRkVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE1hdGguZmxvb3IodGhpcy5idWlsZENvc3QgKiBwcm9jZXNzTGV2ZWwgKiAocHJvY2Vzc0xldmVsICsgMSkgKiAwLjIpXHJcbiAgICAgICAgbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrTnVtICogcHJvY2Vzc0xldmVsICogKHByb2Nlc3NMZXZlbCArIDEpICogMC4xICsgb2Zmc2V0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50U2tpbGxSb3RhdGVBbmdsZSgpIHtcclxuICAgICAgICAvL+iOt+WPluaXi+i9rOaKgOiDveeahOaXi+i9rOinkuW6plxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSb3RhdGVBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50U2hvb3RSYXRlKCkge1xyXG4gICAgICAgIC8vIGJhc2VBdHRhY2tOdW1cclxuICAgICAgICBsZXQgY3VycmVudFNob290UmF0ZSA9IHRoaXMuYmFzZUF0dGFja1JhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHNob290IHJhdGVcIiwgY3VycmVudFNob290UmF0ZSk7XHJcbiAgICAgICAgY3VycmVudFNob290UmF0ZSAqPSAoMSArIHRoaXMuY3VycmVudExldmVsICogdGhpcy5jdXJyZW50TGV2ZWwgKiAwLjAxKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHNob29yIHJhdGVcIiwgY3VycmVudFNob290UmF0ZSk7XHJcbiAgICAgICAgLy/kuI3og73lpKrlv6sg6K6+572u5LiA5Liq5bCB6aG2XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaG9vdFJhdGUgPiAxMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2hvb3RSYXRlID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50U2hvb3RSYXRlO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICsgdGhpcy5ub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZSAqICh0aGlzLmN1cnJlbnRMZXZlbCkgKiAodGhpcy5jdXJyZW50TGV2ZWwgKyAxKSAqIDAuMTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRHb2xkQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlR29sZENvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudExldmVsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0VXBkYXRlQ29zdChsZXZlbD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy/ojrflj5bljYfnuqfpnIDopoHmtojogJfnmoTph5HluIHkuKrmlbBcclxuXHJcbiAgICAgICAgbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsICsgMTtcclxuICAgICAgICBpZiAobGV2ZWwpIHtcclxuICAgICAgICAgICAgcHJvY2Vzc0xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuYnVpbGRDb3N0ICogcHJvY2Vzc0xldmVsICogKHByb2Nlc3NMZXZlbCArIDEpKTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrTnVtXHJcbiAgICB9XHJcbiAgICBnZXREZXN0cm95Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY3VycmVudExldmVsQ29zdCA9IHRoaXMuZ2V0VXBkYXRlQ29zdCh0aGlzLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY3VycmVudExldmVsQ29zdCAqIDAuNCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3REdXJhY3Rpb24gPSBcclxuICAgICAgICBsZXQgY3VycmVudFNob290UmF0ZSA9IHRoaXMuZ2V0Q3VycmVudFNob290UmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLljYfnuqfkuYvlkI4g55qEIOaUu+WHu+S6i+S7tumXtOmalFwiLCB0aGlzLnNob290RHVyYWN0aW9uKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3nmoTmlLvlh7vojIPlm7RcclxuICAgICAgICBsZXQgY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhbmdlICogKDEgKyBjdXJyZW50TGV2ZWwgKiAoY3VycmVudExldmVsIC0gMC41KSAqIDAuMDEpO1xyXG4gICAgfVxyXG4gICAgZ2V0VG93ZXJJc01heCgpOiBib29sZWFuIHtcclxuICAgICAgICAvL+iOt+WPluWhlOaYr+S4jeaYr+WNh+e6p+a7oeS6hlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IGxldmVsJywgdGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG93ZXIgdXBkYXRlIG1heCBsZXZlbFwiLCB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+PSB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=