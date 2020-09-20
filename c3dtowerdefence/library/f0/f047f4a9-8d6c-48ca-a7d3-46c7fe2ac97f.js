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
          _this.towerIndexType = 0;
          _this.iconSpriteFrame = null;
          _this.activeCostGoldCount = 0;
          _this.enemyMoveType = "walk";
          _this.canAttackMoveTypeList = [];
          _this.enemyBulletType = 0;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          //敌人的子弹类型
          value: function init(gameConfig, gameController, startPos, endPos) {
            // this.baseGasNum = gameConfig[]
            console.log("base object type", this.objectType);
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

            if (gameConfig[this.objectType]['IconSprteFrame']) {
              this.iconSpriteFrame = gameConfig[this.objectType]['IconSprteFrame'];
            }

            if (gameConfig[this.objectType]['ActiveCost']) {
              this.activeCostGoldCount = gameConfig[this.objectType]['ActiveCost'];
            }

            if (gameConfig[this.objectType]['MoveType']) {
              this.enemyMoveType = gameConfig[this.objectType]['MoveType'];
            }

            if (gameConfig[this.objectType]["CanAttackType"]) {
              this.canAttackMoveTypeList = gameConfig[this.objectType]['CanAttackType'];
            }

            if (gameConfig[this.objectType]['EnemyBulletType']) {
              this.enemyBulletType = gameConfig[this.objectType]['EnemyBulletType']; //取出敌人的子弹类型
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
            // let localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            // console.log("local damage value", localLevel);
            var baseDamageNum = this.baseAttackNum; //1,2,3 = 6  (3+1)*3/2 = 6   1,2,3,4 = 10   5 * 4 / 2 = 10;

            var currentLevelDamage = 1 * (this.currentLevel + 1) * this.currentLevel * 0.5;
            var localLevelDamage = this.getLocalDamageNum();
            return baseDamageNum + currentLevelDamage + localLevelDamage;
          }
        }, {
          key: "getLocalDamageNum",
          value: function getLocalDamageNum() {
            // 获取当前永久攻击力 
            // let baseAttackNum = this.baseAttackNum;
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            var localDamage = (1 + localLevel) * localLevel * 0.5;
            console.log(this.objectType + ":local damage", localDamage);
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
          key: "getIconSprteFrame",
          value: function getIconSprteFrame() {
            return this.iconSpriteFrame;
          }
        }, {
          key: "getWeaponIsActive",
          value: function getWeaponIsActive() {
            return this.gameController.playerData.getWeaponIsActive(this.towerIndexType);
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
        }, {
          key: "getActiveCostGoldCount",
          value: function getActiveCostGoldCount() {
            //获取激活需要的金币个数
            return this.activeCostGoldCount;
          }
        }, {
          key: "activeWeapon",
          value: function activeWeapon() {
            //激活武器
            this.gameController.playerData.activeTower(this.towerIndexType);
          }
        }, {
          key: "getMoveType",
          value: function getMoveType() {
            return this.enemyMoveType;
          }
        }, {
          key: "getCanAttackEnemy",
          value: function getCanAttackEnemy(obj) {
            var baseObj = obj.getComponent(BaseObject);

            if (baseObj) {
              var objType = baseObj.getMoveType();
              var list = this.canAttackMoveTypeList;

              for (var i = 0; i < list.length; i++) {
                var str = list[i];

                if (str === objType) {
                  return true;
                }
              }
            }

            return false;
          }
        }, {
          key: "getIsBoss",
          value: function getIsBoss() {
            if (this.objectType.indexOf("Boss") > -1) {
              return true;
            }

            return false;
          }
        }, {
          key: "getEnemyBulletType",
          value: function getEnemyBulletType() {
            return this.enemyBulletType;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ0NGbG9hdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhc2VPYmplY3QiLCJ0eXBlIiwiY3VycmVudExldmVsIiwiYmFzZUdhc051bSIsImJhc2VBdHRhY2tOdW0iLCJiYXNlQXR0YWNrUmF0ZSIsImJhc2VSb3RhdGVBbmdsZSIsInJvdGF0ZVNwZWVkIiwiYmFzZUdvbGRDb3VudCIsImJ1aWxkQ29zdCIsInNob290RHVyYWN0aW9uIiwiYmFzZUF0dGFja1JhbmdlIiwidG93ZXJVcGRhdGVNYXhMZXZlbCIsImN1cnJlbnRHYXNOdW0iLCJtb3ZlU3BlZWQiLCJpc0NvbGxpc2lvbkdyb3VuZCIsImxlZnRUaW1lIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0b3dlckluZGV4VHlwZSIsImljb25TcHJpdGVGcmFtZSIsImFjdGl2ZUNvc3RHb2xkQ291bnQiLCJlbmVteU1vdmVUeXBlIiwiY2FuQXR0YWNrTW92ZVR5cGVMaXN0IiwiZW5lbXlCdWxsZXRUeXBlIiwiZ2FtZUNvbmZpZyIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiY29uc29sZSIsImxvZyIsIm9iamVjdFR5cGUiLCJCYXNlR2FzTnVtIiwiTW92ZVNwZWVkIiwiQmFzZUF0dGFja051bSIsIlNob290UmF0ZSIsImdldEN1cnJlbnRTaG9vdFJhdGUiLCJCYXNlUm90YXRlQW5nbGUiLCJMZWZ0VGltZSIsIlJvdGF0ZVNwZWVkIiwiQmFzZUdvbGRDb3VudCIsIkJ1aWxkQ29zdCIsIkF0dGFja1JhbmdlIiwiYmFzZURhbWFnZU51bSIsImN1cnJlbnRMZXZlbERhbWFnZSIsImxvY2FsTGV2ZWxEYW1hZ2UiLCJnZXRMb2NhbERhbWFnZU51bSIsImxvY2FsTGV2ZWwiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCIsImxvY2FsRGFtYWdlIiwiY3VycmVudFNob290UmF0ZSIsInByb2Nlc3NMZXZlbCIsImNvc3QiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJnZXRXZWFwb25Jc0FjdGl2ZSIsInVwZGF0ZUxldmVsIiwidXBkYXRlVG93ZXJMb2NhbExldmVsIiwiYWN0aXZlVG93ZXIiLCJvYmoiLCJiYXNlT2JqIiwiZ2V0Q29tcG9uZW50Iiwib2JqVHlwZSIsImdldE1vdmVUeXBlIiwibGlzdCIsImkiLCJsZW5ndGgiLCJzdHIiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBc0JDLE1BQUFBLE8sT0FBQUEsTzs7Ozs7O0FBRTlDQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFELEMsVUFFUkYsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEMsVUFFUkcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUo7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0ZLLFksR0FBdUIsQztnQkFFdkJDLFUsR0FBcUIsQztnQkFDckJDLGEsR0FBd0IsQztnQkFDeEJDLGMsR0FBeUIsQztnQkFDekJDLGUsR0FBMEIsQztnQkFDMUJDLFcsR0FBc0IsQztnQkFDdEJDLGEsR0FBd0IsQztnQkFDeEJDLFMsR0FBb0IsQztnQkFDcEJDLGMsR0FBeUIsQztnQkFDekJDLGUsR0FBMEIsQztnQkFDMUJDLG1CLEdBQThCLEM7Z0JBRTNCQyxhLEdBQXdCLEM7Z0JBRXhCQyxT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UTJCNUIsUzs7Ozs7aUJBRVIsUzs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUVZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDU3RyaW5nLCBWZWMzLCBDQ0Zsb2F0LCBnYW1lLCBURVJSQUlOX0hFSUdIVF9CQVNFLCBTcHJpdGVGcmFtZSB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdCYXNlT2JqZWN0JylcclxuZXhwb3J0IGNsYXNzIEJhc2VPYmplY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogXCJcIiB9KVxyXG4gICAgcHVibGljIG9iamVjdFR5cGUgPSBcImRlZmF1bHRcIjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhbmltU3BlZWRNdWxPZmZzZXQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgYmFzZUdhc051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmsJTlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrTnVtOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+WAvFxyXG4gICAgcHVibGljIGJhc2VBdHRhY2tSYXRlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+mikeeOh1xyXG4gICAgcHVibGljIGJhc2VSb3RhdGVBbmdsZTogbnVtYmVyID0gMDsgLy/ln7rnoYDml4vovazmioDog73vvIzml4vovazop5LluqZcclxuICAgIHB1YmxpYyByb3RhdGVTcGVlZDogbnVtYmVyID0gMDsgLy/ml4vovazmioDog73nmoTml4vovazop5LpgJ/luqZcclxuICAgIHB1YmxpYyBiYXNlR29sZENvdW50OiBudW1iZXIgPSAwOyAvL+WfuuehgOeahOmHkeW4geS4quaVsFxyXG4gICAgcHVibGljIGJ1aWxkQ29zdDogbnVtYmVyID0gMDsgLy/lu7rpgKDpnIDopoHmtojogJfnmoTph5HluIFcclxuICAgIHB1YmxpYyBzaG9vdER1cmFjdGlvbjogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpl7TpmpRcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmFuZ2U6IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76IyD5Zu0XHJcbiAgICBwdWJsaWMgdG93ZXJVcGRhdGVNYXhMZXZlbDogbnVtYmVyID0gMDsgLy/loZTljYfnuqfliLDnmoTmnIDpq5jnrYnnuqdcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEdhc051bTogbnVtYmVyID0gMDsgLy/lvZPliY3nmoTmsJTlgLxcclxuXHJcbiAgICBwcm90ZWN0ZWQgbW92ZVNwZWVkOiBudW1iZXIgPSAwOyAvL+enu+WKqOmAn+W6plxyXG5cclxuICAgIHByb3RlY3RlZCBpc0NvbGxpc2lvbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm5LiO5Zyw6Z2i56Kw5pKe5Y+R55Sf5Y+N5by5XHJcblxyXG4gICAgcHVibGljIGxlZnRUaW1lOiBudW1iZXIgPSAwOyAvLyDnlJ/lkb3lkajmnJ9cclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdG93ZXJJbmRleFR5cGU6IG51bWJlciA9IDA7IC8v5b2T5YmN5aGU55qE5bqP5Y+35L+h5oGvXHJcbiAgICBwdWJsaWMgaWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8vaWNvbueahOeyvueBteW4p1xyXG4gICAgcHVibGljIGFjdGl2ZUNvc3RHb2xkQ291bnQ6IG51bWJlciA9IDA7IC8v5r+A5rS76ZyA6KaB55qE6YeR5biB5Liq5pWwXHJcbiAgICBwcml2YXRlIGVuZW15TW92ZVR5cGUgPSBcIndhbGtcIjtcclxuICAgIHByaXZhdGUgY2FuQXR0YWNrTW92ZVR5cGVMaXN0OiBzdHJpbmdbXSA9IFtdOyAvL+WPr+S7peaUu+WHu+eahOenu+WKqOexu+Wei+WIl+ihqCBcclxuICAgIHByaXZhdGUgZW5lbXlCdWxsZXRUeXBlOiBudW1iZXIgPSAwOyAvL+aVjOS6uueahOWtkOW8ueexu+Wei1xyXG4gICAgcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIHN0YXJ0UG9zPzogVmVjMywgZW5kUG9zPzogVmVjMykge1xyXG4gICAgICAgIC8vIHRoaXMuYmFzZUdhc051bSA9IGdhbWVDb25maWdbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFzZSBvYmplY3QgdHlwZVwiLCB0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ29udHJvbGxlcjtcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtID0gdGhpcy5iYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Nb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25Hcm91bmQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmF0ZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gdGhpcy5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VSb3RhdGVBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5MZWZ0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlJvdGF0ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uUm90YXRlU3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFwiQmFzZUdvbGRDb3VudFwiOiAxXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJ1aWxkQ29zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29zdCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CdWlsZENvc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmFuZ2UgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnWydUb3dlck1heExldmVsJ10pIHtcclxuICAgICAgICAgICAgdGhpcy50b3dlclVwZGF0ZU1heExldmVsID0gZ2FtZUNvbmZpZ1snVG93ZXJNYXhMZXZlbCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydJbmRleCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbmRleFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0luZGV4J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0ljb25TcHJ0ZUZyYW1lJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uU3ByaXRlRnJhbWUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0ljb25TcHJ0ZUZyYW1lJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQWN0aXZlQ29zdCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29zdEdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQWN0aXZlQ29zdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydNb3ZlVHlwZSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlNb3ZlVHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnTW92ZVR5cGUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVtcIkNhbkF0dGFja1R5cGVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BdHRhY2tNb3ZlVHlwZUxpc3QgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0NhbkF0dGFja1R5cGUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlCdWxsZXRUeXBlJ10pe1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15QnVsbGV0VHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlCdWxsZXRUeXBlJ107Ly/lj5blh7rmlYzkurrnmoTlrZDlvLnnsbvlnotcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrTnVtKCkge1xyXG4gICAgICAgIC8vIGxldCBvZmZzZXRWYWx1ZSA9IDA7XHJcbiAgICAgICAgLy8gaWYgKGFkZFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIG9mZnNldFZhbHVlID0gYWRkVmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIE1hdGguZmxvb3IodGhpcy5idWlsZENvc3QgKiBwcm9jZXNzTGV2ZWwgKiAocHJvY2Vzc0xldmVsICsgMSkgKiAwLjIpXHJcbiAgICAgICAgLy8gbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgICAgIC8vIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2NhbCBkYW1hZ2UgdmFsdWVcIiwgbG9jYWxMZXZlbCk7XHJcblxyXG4gICAgICAgIGxldCBiYXNlRGFtYWdlTnVtID0gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIC8vMSwyLDMgPSA2ICAoMysxKSozLzIgPSA2ICAgMSwyLDMsNCA9IDEwICAgNSAqIDQgLyAyID0gMTA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbERhbWFnZSA9IDEgKiAodGhpcy5jdXJyZW50TGV2ZWwgKyAxKSAqIHRoaXMuY3VycmVudExldmVsICogMC41O1xyXG4gICAgICAgIGxldCBsb2NhbExldmVsRGFtYWdlID0gdGhpcy5nZXRMb2NhbERhbWFnZU51bSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFzZURhbWFnZU51bSArIGN1cnJlbnRMZXZlbERhbWFnZSArIGxvY2FsTGV2ZWxEYW1hZ2U7XHJcbiAgICB9XHJcbiAgICBnZXRMb2NhbERhbWFnZU51bSgpIHtcclxuICAgICAgICAvLyDojrflj5blvZPliY3msLjkuYXmlLvlh7vlipsgXHJcbiAgICAgICAgLy8gbGV0IGJhc2VBdHRhY2tOdW0gPSB0aGlzLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgbGV0IGxvY2FsTGV2ZWwgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCh0aGlzLnRvd2VySW5kZXhUeXBlKTtcclxuICAgICAgICBsZXQgbG9jYWxEYW1hZ2UgPSAoMSArIGxvY2FsTGV2ZWwpICogbG9jYWxMZXZlbCAqIDAuNTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIjpsb2NhbCBkYW1hZ2VcIiwgbG9jYWxEYW1hZ2UpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbERhbWFnZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlKCkge1xyXG4gICAgICAgIC8v6I635Y+W5peL6L2s5oqA6IO955qE5peL6L2s6KeS5bqmXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTaG9vdFJhdGUoKSB7XHJcbiAgICAgICAgLy8gYmFzZUF0dGFja051bVxyXG4gICAgICAgIGxldCBjdXJyZW50U2hvb3RSYXRlID0gdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3QgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICBjdXJyZW50U2hvb3RSYXRlICo9ICgxICsgdGhpcy5jdXJyZW50TGV2ZWwgKiB0aGlzLmN1cnJlbnRMZXZlbCAqIDAuMDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3IgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICAvL+S4jeiDveWkquW/qyDorr7nva7kuIDkuKrlsIHpobZcclxuICAgICAgICBpZiAoY3VycmVudFNob290UmF0ZSA+IDEwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaG9vdFJhdGUgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGUgKyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmJhc2VBdHRhY2tSYXRlO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICogKHRoaXMuY3VycmVudExldmVsKSAqICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpICogMC4xO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEdvbGRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50TGV2ZWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVDb3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy/ojrflj5bljYfnuqfpnIDopoHmtojogJfnmoTph5HluIHkuKrmlbBcclxuXHJcbiAgICAgICAgbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsICsgMTtcclxuICAgICAgICAvLyBpZiAobGV2ZWwpIHtcclxuICAgICAgICAvLyAgICAgcHJvY2Vzc0xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBidWlsZENvc3QgPSB0aGlzLmJ1aWxkQ29zdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29zdCArICgxICsgcHJvY2Vzc0xldmVsKSAqIHByb2Nlc3NMZXZlbCAqIDAuNTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrTnVtXHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpIHtcclxuICAgICAgICAvL+iOt+WPluWNh+e6p+acrOWcsOetiee6p+mcgOimgeeahFxyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBsZXZlbFwiLCBsb2NhbExldmVsKTtcclxuICAgICAgICBsZXQgY29zdCA9IE1hdGgucm91bmQoTWF0aC5wb3coKGxvY2FsTGV2ZWwgKyAxKSwgMikgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiBjb3N0O1xyXG4gICAgfVxyXG4gICAgZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICAvL+iOt+WPluS4i+S4gOe6p+WinuWKoOWkmuWwkSDkuIrmtbflgLxcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbExldmVsICsgMTtcclxuICAgIH1cclxuICAgIGdldERlc3Ryb3lDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50TGV2ZWxDb3N0ID0gdGhpcy5nZXRVcGRhdGVDb3N0KCk7XHJcbiAgICAgICAgbGV0IGJ1aWxkQ29zdCA9IHRoaXMuYnVpbGRDb3N0O1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYnVpbGRDb3N0ICsgKDEgKyBjdXJyZW50TGV2ZWwpICogY3VycmVudExldmVsICogMC41KSAqIDAuOCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3REdXJhY3Rpb24gPSBcclxuICAgICAgICBsZXQgY3VycmVudFNob290UmF0ZSA9IHRoaXMuZ2V0Q3VycmVudFNob290UmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLljYfnuqfkuYvlkI4g55qEIOaUu+WHu+S6i+S7tumXtOmalFwiLCB0aGlzLnNob290RHVyYWN0aW9uKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3nmoTmlLvlh7vojIPlm7RcclxuICAgICAgICBsZXQgY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhbmdlICogKDEgKyBjdXJyZW50TGV2ZWwgKiAoY3VycmVudExldmVsIC0gMC41KSAqIDAuMDEpO1xyXG4gICAgfVxyXG4gICAgZ2V0VG93ZXJJc01heCgpOiBib29sZWFuIHtcclxuICAgICAgICAvL+iOt+WPluWhlOaYr+S4jeaYr+WNh+e6p+a7oeS6hlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IGxldmVsJywgdGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG93ZXIgdXBkYXRlIG1heCBsZXZlbFwiLCB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+PSB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldEljb25TcHJ0ZUZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmljb25TcHJpdGVGcmFtZTtcclxuICAgIH1cclxuICAgIGdldFdlYXBvbklzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0V2VhcG9uSXNBY3RpdmUodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NhbExldmVsKHVwZGF0ZUxldmVsKSB7XHJcbiAgICAgICAgLy/mm7TmlrDmsLjkuYXnrYnnuqdcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIGxvY2FsTGV2ZWwgKz0gdXBkYXRlTGV2ZWw7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WNh+e6p+eahGppc2h1JywgdXBkYXRlTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS51cGRhdGVUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSwgbG9jYWxMZXZlbCk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLnVwZGF0ZVxyXG4gICAgfVxyXG4gICAgZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCgpIHtcclxuICAgICAgICAvL+iOt+WPlua/gOa0u+mcgOimgeeahOmHkeW4geS4quaVsFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvc3RHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBhY3RpdmVXZWFwb24oKSB7XHJcbiAgICAgICAgLy/mv4DmtLvmrablmahcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWN0aXZlVG93ZXIodGhpcy50b3dlckluZGV4VHlwZSk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0TW92ZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlNb3ZlVHlwZTtcclxuICAgIH1cclxuICAgIGdldENhbkF0dGFja0VuZW15KG9iajogTm9kZSk6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBiYXNlT2JqID0gb2JqLmdldENvbXBvbmVudChCYXNlT2JqZWN0KTtcclxuICAgICAgICBpZiAoYmFzZU9iail7XHJcbiAgICAgICAgICAgIGxldCBvYmpUeXBlID0gYmFzZU9iai5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMuY2FuQXR0YWNrTW92ZVR5cGVMaXN0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gb2JqVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNCb3NzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0VHlwZS5pbmRleE9mKFwiQm9zc1wiKSA+IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldEVuZW15QnVsbGV0VHlwZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15QnVsbGV0VHlwZTtcclxuICAgIH1cclxufVxyXG4iXX0=