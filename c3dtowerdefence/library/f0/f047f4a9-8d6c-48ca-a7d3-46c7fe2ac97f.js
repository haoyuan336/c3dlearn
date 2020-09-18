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
          _this.gameController = null;
          _this.totalCostGold = 0;
          _this.towerIndexType = 0;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          //当前塔的序号信息
          value: function init(gameConfig, gameController, startPos, endPos) {
            // this.baseGasNum = gameConfig[]
            this.gameController = gameController;

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

            if (gameConfig[this.objectType]['Index']) {
              this.towerIndexType = gameConfig[this.objectType]['Index'];
            }
          }
        }, {
          key: "getCurrentAttackNum",
          value: function getCurrentAttackNum() {
            // let offsetValue = 0;
            // if (addValue) {
            //     offsetValue = addValue;
            // }
            // // Math.floor(this.buildCost * processLevel * (processLevel + 1) * 0.2)
            // let processLevel = this.currentLevel;
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            console.log("local damage value", localLevel);
            var baseDamageNum = this.baseAttackNum; //1,2,3 = 6  (3+1)*3/2 = 6   1,2,3,4 = 10   5 * 4 / 2 = 10;

            var currentLevelDamage = 1 * (this.currentLevel + 1) * this.currentLevel * 0.5;
            var localLevelDamage = 1 * (localLevel + 1) * localLevel * 0.5;
            return baseDamageNum + currentLevelDamage + localLevelDamage;
          }
        }, {
          key: "getLocalDamageNum",
          value: function getLocalDamageNum() {
            // 获取当前永久攻击力 
            var baseAttackNum = this.baseAttackNum;
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            var localDamage = (1 + localLevel) * localLevel * 0.5;
            return localDamage;
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
          value: function getUpdateCost() {
            //获取升级需要消耗的金币个数
            var processLevel = this.currentLevel + 1; // if (level) {
            //     processLevel = level;
            // }

            var buildCost = this.buildCost;
            return buildCost + (1 + processLevel) * processLevel * 0.5; // return this.baseAttackNum
          }
        }, {
          key: "getUpdateLocalLevelCost",
          value: function getUpdateLocalLevelCost() {
            //获取升级本地等级需要的
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            console.log("local level", localLevel);
            var cost = Math.round(Math.pow(localLevel + 1, 2) * 0.5);
            return cost;
          }
        }, {
          key: "getNextLocallevelAddDamage",
          value: function getNextLocallevelAddDamage() {
            //获取下一级增加多少 上海值
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            return localLevel + 1;
          }
        }, {
          key: "getDestroyCount",
          value: function getDestroyCount() {
            // let currentLevelCost = this.getUpdateCost();
            var buildCost = this.buildCost;
            var currentLevel = this.currentLevel;
            return Math.round((buildCost + (1 + currentLevel) * currentLevel * 0.5) * 0.8);
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
        }, {
          key: "updateLocalLevel",
          value: function updateLocalLevel(updateLevel) {
            //更新永久等级
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            localLevel += updateLevel;
            console.log('升级的jishu', updateLevel);
            this.gameController.playerData.updateTowerLocalLevel(this.towerIndexType, localLevel); // this.gameController.playerData.update
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ0NGbG9hdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhc2VPYmplY3QiLCJ0eXBlIiwiY3VycmVudExldmVsIiwiYmFzZUdhc051bSIsImJhc2VBdHRhY2tOdW0iLCJiYXNlQXR0YWNrUmF0ZSIsImJhc2VSb3RhdGVBbmdsZSIsInJvdGF0ZVNwZWVkIiwiYmFzZUdvbGRDb3VudCIsImJ1aWxkQ29zdCIsInNob290RHVyYWN0aW9uIiwiYmFzZUF0dGFja1JhbmdlIiwidG93ZXJVcGRhdGVNYXhMZXZlbCIsImN1cnJlbnRHYXNOdW0iLCJtb3ZlU3BlZWQiLCJpc0NvbGxpc2lvbkdyb3VuZCIsImxlZnRUaW1lIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0b3RhbENvc3RHb2xkIiwidG93ZXJJbmRleFR5cGUiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJvYmplY3RUeXBlIiwiQmFzZUdhc051bSIsIk1vdmVTcGVlZCIsIkJhc2VBdHRhY2tOdW0iLCJTaG9vdFJhdGUiLCJnZXRDdXJyZW50U2hvb3RSYXRlIiwiQmFzZVJvdGF0ZUFuZ2xlIiwiTGVmdFRpbWUiLCJSb3RhdGVTcGVlZCIsIkJhc2VHb2xkQ291bnQiLCJCdWlsZENvc3QiLCJBdHRhY2tSYW5nZSIsImxvY2FsTGV2ZWwiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJiYXNlRGFtYWdlTnVtIiwiY3VycmVudExldmVsRGFtYWdlIiwibG9jYWxMZXZlbERhbWFnZSIsImxvY2FsRGFtYWdlIiwiY3VycmVudFNob290UmF0ZSIsInByb2Nlc3NMZXZlbCIsImNvc3QiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJ1cGRhdGVMZXZl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Ozs7OztpQkFFUixTOzs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRVksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NTdHJpbmcsIFZlYzMsIENDRmxvYXQsIGdhbWUsIFRFUlJBSU5fSEVJR0hUX0JBU0UgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQmFzZU9iamVjdCcpXHJcbmV4cG9ydCBjbGFzcyBCYXNlT2JqZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBvYmplY3RUeXBlID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcm9vdE5vZGU6IE5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0Zsb2F0IH0pXHJcbiAgICBwdWJsaWMgYW5pbVNwZWVkTXVsT2Zmc2V0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGJhc2VHYXNOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5rCU5YC8XHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmF0ZTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpopHnjodcclxuICAgIHB1YmxpYyBiYXNlUm90YXRlQW5nbGU6IG51bWJlciA9IDA7IC8v5Z+656GA5peL6L2s5oqA6IO977yM5peL6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgcm90YXRlU3BlZWQ6IG51bWJlciA9IDA7IC8v5peL6L2s5oqA6IO955qE5peL6L2s6KeS6YCf5bqmXHJcbiAgICBwdWJsaWMgYmFzZUdvbGRDb3VudDogbnVtYmVyID0gMDsgLy/ln7rnoYDnmoTph5HluIHkuKrmlbBcclxuICAgIHB1YmxpYyBidWlsZENvc3Q6IG51bWJlciA9IDA7IC8v5bu66YCg6ZyA6KaB5raI6ICX55qE6YeR5biBXHJcbiAgICBwdWJsaWMgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76Ze06ZqUXHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja1JhbmdlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgcHVibGljIHRvd2VyVXBkYXRlTWF4TGV2ZWw6IG51bWJlciA9IDA7IC8v5aGU5Y2H57qn5Yiw55qE5pyA6auY562J57qnXHJcblxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRHYXNOdW06IG51bWJlciA9IDA7IC8v5b2T5YmN55qE5rCU5YC8XHJcblxyXG4gICAgcHJvdGVjdGVkIG1vdmVTcGVlZDogbnVtYmVyID0gMDsgLy/np7vliqjpgJ/luqZcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNDb2xsaXNpb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuS4juWcsOmdoueisOaSnuWPkeeUn+WPjeW8uVxyXG5cclxuICAgIHB1YmxpYyBsZWZ0VGltZTogbnVtYmVyID0gMDsgLy8g55Sf5ZG95ZGo5pyfXHJcblxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbENvc3RHb2xkOiBudW1iZXIgPSAwOyAvL+W9k+WJjea2iOiAl+eahOaAu+eahOmHkeW4geaVsFxyXG4gICAgcHVibGljIHRvd2VySW5kZXhUeXBlOiBudW1iZXIgPSAwOyAvL+W9k+WJjeWhlOeahOW6j+WPt+S/oeaBr1xyXG4gICAgcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIHN0YXJ0UG9zPzogVmVjMywgZW5kUG9zPzogVmVjMykge1xyXG4gICAgICAgIC8vIHRoaXMuYmFzZUdhc051bSA9IGdhbWVDb25maWdbXVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ29udHJvbGxlcjtcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtID0gdGhpcy5iYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Nb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25Hcm91bmQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmF0ZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gdGhpcy5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VSb3RhdGVBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5MZWZ0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlJvdGF0ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uUm90YXRlU3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFwiQmFzZUdvbGRDb3VudFwiOiAxXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJ1aWxkQ29zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29zdCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CdWlsZENvc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmFuZ2UgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnWydUb3dlck1heExldmVsJ10pIHtcclxuICAgICAgICAgICAgdGhpcy50b3dlclVwZGF0ZU1heExldmVsID0gZ2FtZUNvbmZpZ1snVG93ZXJNYXhMZXZlbCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydJbmRleCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbmRleFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0luZGV4J107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEF0dGFja051bSgpIHtcclxuICAgICAgICAvLyBsZXQgb2Zmc2V0VmFsdWUgPSAwO1xyXG4gICAgICAgIC8vIGlmIChhZGRWYWx1ZSkge1xyXG4gICAgICAgIC8vICAgICBvZmZzZXRWYWx1ZSA9IGFkZFZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyBNYXRoLmZsb29yKHRoaXMuYnVpbGRDb3N0ICogcHJvY2Vzc0xldmVsICogKHByb2Nlc3NMZXZlbCArIDEpICogMC4yKVxyXG4gICAgICAgIC8vIGxldCBwcm9jZXNzTGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9jYWwgZGFtYWdlIHZhbHVlXCIsIGxvY2FsTGV2ZWwpO1xyXG5cclxuICAgICAgICBsZXQgYmFzZURhbWFnZU51bSA9IHRoaXMuYmFzZUF0dGFja051bTtcclxuICAgICAgICAvLzEsMiwzID0gNiAgKDMrMSkqMy8yID0gNiAgIDEsMiwzLDQgPSAxMCAgIDUgKiA0IC8gMiA9IDEwO1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWxEYW1hZ2UgPSAxICogKHRoaXMuY3VycmVudExldmVsICsgMSkgKiB0aGlzLmN1cnJlbnRMZXZlbCAqIDAuNTtcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbERhbWFnZSA9IDEgKiAobG9jYWxMZXZlbCArIDEpICogbG9jYWxMZXZlbCAqIDAuNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhc2VEYW1hZ2VOdW0gKyBjdXJyZW50TGV2ZWxEYW1hZ2UgKyBsb2NhbExldmVsRGFtYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxEYW1hZ2VOdW0oKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5rC45LmF5pS75Ye75YqbIFxyXG4gICAgICAgIGxldCBiYXNlQXR0YWNrTnVtID0gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgbGV0IGxvY2FsRGFtYWdlID0gKDEgKyBsb2NhbExldmVsKSAqIGxvY2FsTGV2ZWwgKiAwLjU7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsRGFtYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFNraWxsUm90YXRlQW5nbGUoKSB7XHJcbiAgICAgICAgLy/ojrflj5bml4vovazmioDog73nmoTml4vovazop5LluqZcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUm90YXRlQW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFNob290UmF0ZSgpIHtcclxuICAgICAgICAvLyBiYXNlQXR0YWNrTnVtXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaG9vdFJhdGUgPSB0aGlzLmJhc2VBdHRhY2tSYXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzaG9vdCByYXRlXCIsIGN1cnJlbnRTaG9vdFJhdGUpO1xyXG4gICAgICAgIGN1cnJlbnRTaG9vdFJhdGUgKj0gKDEgKyB0aGlzLmN1cnJlbnRMZXZlbCAqIHRoaXMuY3VycmVudExldmVsICogMC4wMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzaG9vciByYXRlXCIsIGN1cnJlbnRTaG9vdFJhdGUpO1xyXG4gICAgICAgIC8v5LiN6IO95aSq5b+rIOiuvue9ruS4gOS4quWwgemhtlxyXG4gICAgICAgIGlmIChjdXJyZW50U2hvb3RSYXRlID4gMTApIHtcclxuICAgICAgICAgICAgY3VycmVudFNob290UmF0ZSA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudFNob290UmF0ZTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZSArIHRoaXMubm9kZS5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuYmFzZUF0dGFja1JhdGU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGUgKiAodGhpcy5jdXJyZW50TGV2ZWwpICogKHRoaXMuY3VycmVudExldmVsICsgMSkgKiAwLjE7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50R29sZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUdvbGRDb3VudDtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRMZXZlbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgIH1cclxuICAgIGdldFVwZGF0ZUNvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICAvL+iOt+WPluWNh+e6p+mcgOimgea2iOiAl+eahOmHkeW4geS4quaVsFxyXG5cclxuICAgICAgICBsZXQgcHJvY2Vzc0xldmVsID0gdGhpcy5jdXJyZW50TGV2ZWwgKyAxO1xyXG4gICAgICAgIC8vIGlmIChsZXZlbCkge1xyXG4gICAgICAgIC8vICAgICBwcm9jZXNzTGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGJ1aWxkQ29zdCA9IHRoaXMuYnVpbGRDb3N0O1xyXG5cclxuICAgICAgICByZXR1cm4gYnVpbGRDb3N0ICsgKDEgKyBwcm9jZXNzTGV2ZWwpICogcHJvY2Vzc0xldmVsICogMC41O1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tOdW1cclxuICAgIH1cclxuICAgIGdldFVwZGF0ZUxvY2FsTGV2ZWxDb3N0KCkge1xyXG4gICAgICAgIC8v6I635Y+W5Y2H57qn5pys5Zyw562J57qn6ZyA6KaB55qEXHJcbiAgICAgICAgbGV0IGxvY2FsTGV2ZWwgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCh0aGlzLnRvd2VySW5kZXhUeXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIGxldmVsXCIsIGxvY2FsTGV2ZWwpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gTWF0aC5yb3VuZChNYXRoLnBvdygobG9jYWxMZXZlbCArIDEpLCAyKSAqIDAuNSk7XHJcbiAgICAgICAgcmV0dXJuIGNvc3Q7XHJcbiAgICB9XHJcbiAgICBnZXROZXh0TG9jYWxsZXZlbEFkZERhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIC8v6I635Y+W5LiL5LiA57qn5aKe5Yqg5aSa5bCRIOS4iua1t+WAvFxyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsTGV2ZWwgKyAxO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVzdHJveUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRMZXZlbENvc3QgPSB0aGlzLmdldFVwZGF0ZUNvc3QoKTtcclxuICAgICAgICBsZXQgYnVpbGRDb3N0ID0gdGhpcy5idWlsZENvc3Q7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChidWlsZENvc3QgKyAoMSArIGN1cnJlbnRMZXZlbCkgKiBjdXJyZW50TGV2ZWwgKiAwLjUpICogMC44KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgLy8gdGhpcy5zaG9vdER1cmFjdGlvbiA9IFxyXG4gICAgICAgIGxldCBjdXJyZW50U2hvb3RSYXRlID0gdGhpcy5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gY3VycmVudFNob290UmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWNh+e6p+S5i+WQjiDnmoQg5pS75Ye75LqL5Lu26Ze06ZqUXCIsIHRoaXMuc2hvb3REdXJhY3Rpb24pO1xyXG5cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRBdHRhY2tSYW5nZSgpIHtcclxuICAgICAgICAvL+iOt+WPluW9k+WJjeeahOaUu+WHu+iMg+WbtFxyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmFuZ2UgKiAoMSArIGN1cnJlbnRMZXZlbCAqIChjdXJyZW50TGV2ZWwgLSAwLjUpICogMC4wMSk7XHJcbiAgICB9XHJcbiAgICBnZXRUb3dlcklzTWF4KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8v6I635Y+W5aGU5piv5LiN5piv5Y2H57qn5ruh5LqGXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgbGV2ZWwnLCB0aGlzLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3dlciB1cGRhdGUgbWF4IGxldmVsXCIsIHRoaXMudG93ZXJVcGRhdGVNYXhMZXZlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID49IHRoaXMudG93ZXJVcGRhdGVNYXhMZXZlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxvY2FsTGV2ZWwodXBkYXRlTGV2ZWwpIHtcclxuICAgICAgICAvL+abtOaWsOawuOS5heetiee6p1xyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgbG9jYWxMZXZlbCArPSB1cGRhdGVMZXZlbDtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Y2H57qn55qEamlzaHUnLCB1cGRhdGVMZXZlbCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLnVwZGF0ZVRvd2VyTG9jYWxMZXZlbCh0aGlzLnRvd2VySW5kZXhUeXBlLCBsb2NhbExldmVsKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEudXBkYXRlXHJcbiAgICB9XHJcbn1cclxuIl19