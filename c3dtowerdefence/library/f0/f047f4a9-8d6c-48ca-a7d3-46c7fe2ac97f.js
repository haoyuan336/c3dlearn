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
          _this.totalCostGold = 0;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          //当前消耗的总的金币数
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ0NGbG9hdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhc2VPYmplY3QiLCJ0eXBlIiwiY3VycmVudExldmVsIiwiYmFzZUdhc051bSIsImJhc2VBdHRhY2tOdW0iLCJiYXNlQXR0YWNrUmF0ZSIsImJhc2VSb3RhdGVBbmdsZSIsInJvdGF0ZVNwZWVkIiwiYmFzZUdvbGRDb3VudCIsImJ1aWxkQ29zdCIsInNob290RHVyYWN0aW9uIiwiYmFzZUF0dGFja1JhbmdlIiwidG93ZXJVcGRhdGVNYXhMZXZlbCIsImN1cnJlbnRHYXNOdW0iLCJtb3ZlU3BlZWQiLCJpc0NvbGxpc2lvbkdyb3VuZCIsImxlZnRUaW1lIiwidG90YWxDb3N0R29sZCIsImdhbWVDb25maWciLCJzdGFydFBvcyIsImVuZFBvcyIsIm9iamVjdFR5cGUiLCJCYXNlR2FzTnVtIiwiTW92ZVNwZWVkIiwiQmFzZUF0dGFja051bSIsIlNob290UmF0ZSIsImdldEN1cnJlbnRTaG9vdFJhdGUiLCJCYXNlUm90YXRlQW5nbGUiLCJMZWZ0VGltZSIsIlJvdGF0ZVNwZWVkIiwiQmFzZUdvbGRDb3VudCIsIkJ1aWxkQ29zdCIsIkF0dGFja1JhbmdlIiwiYWRkVmFsdWUiLCJvZmZzZXRWYWx1ZSIsInByb2Nlc3NMZXZlbCIsImN1cnJlbnRTaG9vdFJhdGUiLCJjb25zb2xlIiwibG9nIiwibGV2ZWwiLCJNYXRoIiwiZmxvb3IiLCJjdXJyZW50TGV2ZWxDb3N0IiwiZ2V0VXBkYXRlQ29zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEs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LElBQUlBLFlBQVksR0FBRyxHQUFuQixDQUFaLEdBQXNDLElBQWxFLENBQVA7QUFDSDs7OzBDQUN3QjtBQUNyQjtBQUNBbUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLcEMsWUFBbEM7QUFDQW1DLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDLEtBQUsxQixtQkFBM0M7O0FBQ0EsZ0JBQUksS0FBS1YsWUFBTCxJQUFxQixLQUFLVSxtQkFBOUIsRUFBbUQ7QUFDL0MscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7OztRQXJKMkJqQixTOzs7OztpQkFFUixTOzs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRVksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NTdHJpbmcsIFZlYzMsIENDRmxvYXQsIGdhbWUgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQmFzZU9iamVjdCcpXHJcbmV4cG9ydCBjbGFzcyBCYXNlT2JqZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBvYmplY3RUeXBlID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcm9vdE5vZGU6IE5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0Zsb2F0IH0pXHJcbiAgICBwdWJsaWMgYW5pbVNwZWVkTXVsT2Zmc2V0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGJhc2VHYXNOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5rCU5YC8XHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmF0ZTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpopHnjodcclxuICAgIHB1YmxpYyBiYXNlUm90YXRlQW5nbGU6IG51bWJlciA9IDA7IC8v5Z+656GA5peL6L2s5oqA6IO977yM5peL6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgcm90YXRlU3BlZWQ6IG51bWJlciA9IDA7IC8v5peL6L2s5oqA6IO955qE5peL6L2s6KeS6YCf5bqmXHJcbiAgICBwdWJsaWMgYmFzZUdvbGRDb3VudDogbnVtYmVyID0gMDsgLy/ln7rnoYDnmoTph5HluIHkuKrmlbBcclxuICAgIHB1YmxpYyBidWlsZENvc3Q6IG51bWJlciA9IDA7IC8v5bu66YCg6ZyA6KaB5raI6ICX55qE6YeR5biBXHJcbiAgICBwdWJsaWMgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76Ze06ZqUXHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja1JhbmdlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgcHVibGljIHRvd2VyVXBkYXRlTWF4TGV2ZWw6IG51bWJlciA9IDA7IC8v5aGU5Y2H57qn5Yiw55qE5pyA6auY562J57qnXHJcblxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRHYXNOdW06IG51bWJlciA9IDA7IC8v5b2T5YmN55qE5rCU5YC8XHJcblxyXG4gICAgcHJvdGVjdGVkIG1vdmVTcGVlZDogbnVtYmVyID0gMDsgLy/np7vliqjpgJ/luqZcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNDb2xsaXNpb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuS4juWcsOmdoueisOaSnuWPkeeUn+WPjeW8uVxyXG5cclxuICAgIHB1YmxpYyBsZWZ0VGltZTogbnVtYmVyID0gMDsgLy8g55Sf5ZG95ZGo5pyfXHJcblxyXG5cclxuICAgIHByaXZhdGUgdG90YWxDb3N0R29sZDogbnVtYmVyID0gMDsgLy/lvZPliY3mtojogJfnmoTmgLvnmoTph5HluIHmlbBcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgc3RhcnRQb3M/OiBWZWMzLCBlbmRQb3M/OiBWZWMzKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1tdXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR2FzTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUdhc051bSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEdhc051bSA9IHRoaXMuYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Nb3ZlU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uTW92ZVNwZWVkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5pc0NvbGxpc2lvbkdyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ29sbGlzaW9uR3JvdW5kID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLmlzQ29sbGlzaW9uR3JvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VBdHRhY2tOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrTnVtID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2hvb3RSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUF0dGFja1JhdGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2hvb3RSYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIHRoaXMuZ2V0Q3VycmVudFNob290UmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VSb3RhdGVBbmdsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VSb3RhdGVBbmdsZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlUm90YXRlQW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uTGVmdFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0VGltZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5MZWZ0VGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Sb3RhdGVTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlJvdGF0ZVNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBcIkJhc2VHb2xkQ291bnRcIjogMVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VHb2xkQ291bnQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdvbGRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CdWlsZENvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZENvc3QgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQnVpbGRDb3N0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkF0dGFja1JhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUF0dGFja1JhbmdlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkF0dGFja1JhbmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1snVG93ZXJNYXhMZXZlbCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJVcGRhdGVNYXhMZXZlbCA9IGdhbWVDb25maWdbJ1Rvd2VyTWF4TGV2ZWwnXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrTnVtKGFkZFZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFZhbHVlID0gMDtcclxuICAgICAgICBpZiAoYWRkVmFsdWUpIHtcclxuICAgICAgICAgICAgb2Zmc2V0VmFsdWUgPSBhZGRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTWF0aC5mbG9vcih0aGlzLmJ1aWxkQ29zdCAqIHByb2Nlc3NMZXZlbCAqIChwcm9jZXNzTGV2ZWwgKyAxKSAqIDAuMilcclxuICAgICAgICBsZXQgcHJvY2Vzc0xldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tOdW0gKiBwcm9jZXNzTGV2ZWwgKiAocHJvY2Vzc0xldmVsICsgMSkgKiAwLjEgKyBvZmZzZXRWYWx1ZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlKCkge1xyXG4gICAgICAgIC8v6I635Y+W5peL6L2s5oqA6IO955qE5peL6L2s6KeS5bqmXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTaG9vdFJhdGUoKSB7XHJcbiAgICAgICAgLy8gYmFzZUF0dGFja051bVxyXG4gICAgICAgIGxldCBjdXJyZW50U2hvb3RSYXRlID0gdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3QgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICBjdXJyZW50U2hvb3RSYXRlICo9ICgxICsgdGhpcy5jdXJyZW50TGV2ZWwgKiB0aGlzLmN1cnJlbnRMZXZlbCAqIDAuMDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3IgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICAvL+S4jeiDveWkquW/qyDorr7nva7kuIDkuKrlsIHpobZcclxuICAgICAgICBpZiAoY3VycmVudFNob290UmF0ZSA+IDEwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaG9vdFJhdGUgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGUgKyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmJhc2VBdHRhY2tSYXRlO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICogKHRoaXMuY3VycmVudExldmVsKSAqICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpICogMC4xO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEdvbGRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50TGV2ZWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVDb3N0KGxldmVsPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvL+iOt+WPluWNh+e6p+mcgOimgea2iOiAl+eahOmHkeW4geS4quaVsFxyXG5cclxuICAgICAgICBsZXQgcHJvY2Vzc0xldmVsID0gdGhpcy5jdXJyZW50TGV2ZWwgKyAxO1xyXG4gICAgICAgIGlmIChsZXZlbCkge1xyXG4gICAgICAgICAgICBwcm9jZXNzTGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5idWlsZENvc3QgKiBwcm9jZXNzTGV2ZWwgKiAocHJvY2Vzc0xldmVsICsgMSkpO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tOdW1cclxuICAgIH1cclxuICAgIGdldERlc3Ryb3lDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWxDb3N0ID0gdGhpcy5nZXRVcGRhdGVDb3N0KHRoaXMuY3VycmVudExldmVsKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjdXJyZW50TGV2ZWxDb3N0ICogMC40KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgLy8gdGhpcy5zaG9vdER1cmFjdGlvbiA9IFxyXG4gICAgICAgIGxldCBjdXJyZW50U2hvb3RSYXRlID0gdGhpcy5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gY3VycmVudFNob290UmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWNh+e6p+S5i+WQjiDnmoQg5pS75Ye75LqL5Lu26Ze06ZqUXCIsIHRoaXMuc2hvb3REdXJhY3Rpb24pO1xyXG5cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRBdHRhY2tSYW5nZSgpIHtcclxuICAgICAgICAvL+iOt+WPluW9k+WJjeeahOaUu+WHu+iMg+WbtFxyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmFuZ2UgKiAoMSArIGN1cnJlbnRMZXZlbCAqIChjdXJyZW50TGV2ZWwgLSAwLjUpICogMC4wMSk7XHJcbiAgICB9XHJcbiAgICBnZXRUb3dlcklzTWF4KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8v6I635Y+W5aGU5piv5LiN5piv5Y2H57qn5ruh5LqGXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgbGV2ZWwnLCB0aGlzLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3dlciB1cGRhdGUgbWF4IGxldmVsXCIsIHRoaXMudG93ZXJVcGRhdGVNYXhMZXZlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID49IHRoaXMudG93ZXJVcGRhdGVNYXhMZXZlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19