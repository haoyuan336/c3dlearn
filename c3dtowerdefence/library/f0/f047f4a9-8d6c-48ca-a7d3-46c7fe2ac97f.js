System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, v3, CCFloat, Quat, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BaseObject;

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
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
      Quat = _cc.Quat;
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
          _this.isCollisionDestroy = false;
          _this.enemyIndexType = 0;
          _this.isConlony = false;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          //是否集群运动
          value: function init(gameConfig, gameController, startPos, endPos, objectType) {
            // this.baseGasNum = gameConfig[]
            if (objectType) {
              this.objectType = objectType;
            }

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

            if (gameConfig[this.objectType]['isCollisionDestroy']) {
              this.isCollisionDestroy = gameConfig[this.objectType]['isCollisionDestroy'];
            }

            if (gameConfig[this.objectType]['EnemyIndex']) {
              this.enemyIndexType = gameConfig[this.objectType]['EnemyIndex'];
            }

            if (gameConfig[this.objectType]['Colony']) {
              this.isConlony = gameConfig[this.objectType]['Colony'];
            }
          }
        }, {
          key: "getBaseAttackDamage",
          value: function getBaseAttackDamage() {
            return this.baseAttackNum;
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
            var baseDamageNum = this.baseAttackNum;
            console.log("base damage num", baseDamageNum); //1,2,3 = 6  (3+1)*3/2 = 6   1,2,3,4 = 10   5 * 4 / 2 = 10;

            var currentLevelDamage = 1 * (this.currentLevel + 1) * this.currentLevel * 0.5;
            console.log("current level damage", currentLevelDamage);
            var localLevelDamage = this.getLocalDamageNum();
            return baseDamageNum + currentLevelDamage + localLevelDamage;
          }
        }, {
          key: "getLocalDamageNum",
          value: function getLocalDamageNum() {
            // 获取当前永久攻击力 
            // let baseAttackNum = this.baseAttackNum;
            var localLevel = this.gameController.playerData.getCurrentTowerLocalLevel(this.towerIndexType);
            console.log("local level", localLevel);
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
        }, {
          key: "getIsCollisionDestroy",
          value: function getIsCollisionDestroy() {
            return this.isCollisionDestroy;
          }
        }, {
          key: "getLookAtAngle",
          value: function getLookAtAngle(startPos, targetPoint) {
            // //获取到朝向的角度
            var dir = v3(startPos).subtract(targetPoint).normalize();
            var quat = new Quat(); // quat.lerp

            Quat.fromViewUp(quat, dir, Vec3.UP); // console.log("quat", quat);
            // rotateAround
            // startPos.
            // this.node.rotate/

            return quat;
          }
        }, {
          key: "getEnemyIsActive",
          value: function getEnemyIsActive() {
            //获得当前敌人是否激活了
            return this.gameController.playerData.getEnemyIsActive(this.objectType);
          }
        }, {
          key: "getIsColony",
          value: function getIsColony() {
            return this.isConlony;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsInYzIiwiQ0NGbG9hdCIsIlF1YXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCYXNlT2JqZWN0IiwidHlwZSIsImN1cnJlbnRMZXZlbCIsImJhc2VHYXNOdW0iLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUF0dGFja1JhdGUiLCJiYXNlUm90YXRlQW5nbGUiLCJyb3RhdGVTcGVlZCIsImJhc2VHb2xkQ291bnQiLCJidWlsZENvc3QiLCJzaG9vdER1cmFjdGlvbiIsImJhc2VBdHRhY2tSYW5nZSIsInRvd2VyVXBkYXRlTWF4TGV2ZWwiLCJjdXJyZW50R2FzTnVtIiwibW92ZVNwZWVkIiwiaXNDb2xsaXNpb25Hcm91bmQiLCJsZWZ0VGltZSIsImdhbWVDb250cm9sbGVyIiwidG93ZXJJbmRleFR5cGUiLCJpY29uU3ByaXRlRnJhbWUiLCJhY3RpdmVDb3N0R29sZENvdW50IiwiZW5lbXlNb3ZlVHlwZSIsImNhbkF0dGFja01vdmVUeXBlTGlzdCIsImVuZW15QnVsbGV0VHlwZSIsImlzQ29sbGlzaW9uRGVzdHJveSIsImVuZW15SW5kZXhUeXBlIiwiaXNDb25sb255IiwiZ2FtZUNvbmZpZyIsInN0YXJ0UG9zIiwiZW5kUG9zIiwib2JqZWN0VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJCYXNlR2FzTnVtIiwiTW92ZVNwZWVkIiwiQmFzZUF0dGFja051bSIsIlNob290UmF0ZSIsImdldEN1cnJlbnRTaG9vdFJhdGUiLCJCYXNlUm90YXRlQW5nbGUiLCJMZWZ0VGltZSIsIlJvdGF0ZVNwZWVkIiwiQmFzZUdvbGRDb3VudCIsIkJ1aWxkQ29zdCIsIkF0dGFja1JhbmdlIiwiYmFzZURhbWFnZU51bSIsImN1cnJlbnRMZXZlbERhbWFnZSIsImxvY2FsTGV2ZWxEYW1hZ2UiLCJnZXRMb2NhbERhbWFnZU51bSIsImxvY2FsTGV2ZWwiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCIsImxvY2FsRGFtYWdlIiwiY3VycmVudFNob290UmF0ZSIsInByb2Nlc3NMZXZlbCIsImNvc3QiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJnZXRXZWFwb25Jc0FjdGl2ZSIsInVwZGF0ZUxldmVsIiwidXBkYXRlVG93ZXJMb2NhbExldmVsIiwiYWN0aXZlVG93ZXIiLCJvYmoiLCJiYXNlT2JqIiwiZ2V0Q29tcG9uZW50Iiwib2JqVHlwZSIsImdldE1vdmVUeXBlIiwibGlzdCIsImkiLCJsZW5ndGgiLCJzdHIiLCJpbmRleE9mIiwidGFyZ2V0UG9pbnQiLCJkaXIiLCJzdWJ0cmFjdCIsIm5vcm1hbGl6ZSIsInF1YXQiLCJmcm9tVmlld1VwIiwiVVAiLCJnZXRFbmVteUlzQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBZ0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsTyxPQUFBQSxPO0FBQWlEQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUVuR0MsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBRCxDLFVBRVJGLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dC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S0FBUDtBQUNIOzs7K0NBQ29CO0FBQ2pCLG1CQUFPLEtBQUtoRCxlQUFaO0FBQ0g7OztrREFDdUI7QUFDcEIsbUJBQU8sS0FBS0Msa0JBQVo7QUFDSDs7O3lDQUNjSSxRLEVBQVU0QyxXLEVBQXlCO0FBQzlDO0FBRUEsZ0JBQUlDLEdBQUcsR0FBRzlFLEVBQUUsQ0FBQ2lDLFFBQUQsQ0FBRixDQUFhOEMsUUFBYixDQUFzQkYsV0FBdEIsRUFBbUNHLFNBQW5DLEVBQVY7QUFDQSxnQkFBSUMsSUFBSSxHQUFHLElBQUkvRSxJQUFKLEVBQVgsQ0FKOEMsQ0FLOUM7O0FBQ0FBLFlBQUFBLElBQUksQ0FBQ2dGLFVBQUwsQ0FBZ0JELElBQWhCLEVBQXNCSCxHQUF0QixFQUEyQi9FLElBQUksQ0FBQ29GLEVBQWhDLEVBTjhDLENBUTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFPRixJQUFQO0FBQ0g7Ozs2Q0FDa0I7QUFDZjtBQUNBLG1CQUFPLEtBQUszRCxjQUFMLENBQW9CZ0MsVUFBcEIsQ0FBK0I4QixnQkFBL0IsQ0FBZ0QsS0FBS2pELFVBQXJELENBQVA7QUFDSDs7O3dDQUNzQjtBQUNuQixtQkFBTyxLQUFLSixTQUFaO0FBQ0g7Ozs7UUFsVDJCbEMsUzs7Ozs7aUJBRVIsUzs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUVZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDU3RyaW5nLCBWZWMzLCB2MywgQ0NGbG9hdCwgZ2FtZSwgVEVSUkFJTl9IRUlHSFRfQkFTRSwgU3ByaXRlRnJhbWUsIFF1YXQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQmFzZU9iamVjdCcpXHJcbmV4cG9ydCBjbGFzcyBCYXNlT2JqZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBvYmplY3RUeXBlID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcm9vdE5vZGU6IE5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0Zsb2F0IH0pXHJcbiAgICBwdWJsaWMgYW5pbVNwZWVkTXVsT2Zmc2V0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGJhc2VHYXNOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5rCU5YC8XHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmF0ZTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpopHnjodcclxuICAgIHB1YmxpYyBiYXNlUm90YXRlQW5nbGU6IG51bWJlciA9IDA7IC8v5Z+656GA5peL6L2s5oqA6IO977yM5peL6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgcm90YXRlU3BlZWQ6IG51bWJlciA9IDA7IC8v5peL6L2s5oqA6IO955qE5peL6L2s6KeS6YCf5bqmXHJcbiAgICBwdWJsaWMgYmFzZUdvbGRDb3VudDogbnVtYmVyID0gMDsgLy/ln7rnoYDnmoTph5HluIHkuKrmlbBcclxuICAgIHB1YmxpYyBidWlsZENvc3Q6IG51bWJlciA9IDA7IC8v5bu66YCg6ZyA6KaB5raI6ICX55qE6YeR5biBXHJcbiAgICBwdWJsaWMgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76Ze06ZqUXHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja1JhbmdlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgcHVibGljIHRvd2VyVXBkYXRlTWF4TGV2ZWw6IG51bWJlciA9IDA7IC8v5aGU5Y2H57qn5Yiw55qE5pyA6auY562J57qnXHJcblxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRHYXNOdW06IG51bWJlciA9IDA7IC8v5b2T5YmN55qE5rCU5YC8XHJcblxyXG4gICAgcHJvdGVjdGVkIG1vdmVTcGVlZDogbnVtYmVyID0gMDsgLy/np7vliqjpgJ/luqZcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNDb2xsaXNpb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuS4juWcsOmdoueisOaSnuWPkeeUn+WPjeW8uVxyXG5cclxuICAgIHB1YmxpYyBsZWZ0VGltZTogbnVtYmVyID0gMDsgLy8g55Sf5ZG95ZGo5pyfXHJcblxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHRvd2VySW5kZXhUeXBlOiBudW1iZXIgPSAwOyAvL+W9k+WJjeWhlOeahOW6j+WPt+S/oeaBr1xyXG4gICAgcHVibGljIGljb25TcHJpdGVGcmFtZTogc3RyaW5nID0gbnVsbDsgLy9pY29u55qE57K+54G15binXHJcbiAgICBwdWJsaWMgYWN0aXZlQ29zdEdvbGRDb3VudDogbnVtYmVyID0gMDsgLy/mv4DmtLvpnIDopoHnmoTph5HluIHkuKrmlbBcclxuICAgIHByaXZhdGUgZW5lbXlNb3ZlVHlwZSA9IFwid2Fsa1wiO1xyXG4gICAgcHJpdmF0ZSBjYW5BdHRhY2tNb3ZlVHlwZUxpc3Q6IHN0cmluZ1tdID0gW107IC8v5Y+v5Lul5pS75Ye755qE56e75Yqo57G75Z6L5YiX6KGoIFxyXG4gICAgcHJpdmF0ZSBlbmVteUJ1bGxldFR5cGU6IG51bWJlciA9IDA7IC8v5pWM5Lq655qE5a2Q5by557G75Z6LXHJcbiAgICBwcml2YXRlIGlzQ29sbGlzaW9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlOyAvL+eisOaSnuS5i+WQjiDmmK/lkKbplIDmr4FcclxuICAgIHByaXZhdGUgZW5lbXlJbmRleFR5cGU6IG51bWJlciA9IDA7IC8v5pWM5Lq655qEXHJcblxyXG4gICAgcHJpdmF0ZSBpc0Nvbmxvbnk6IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbpm4bnvqTov5DliqhcclxuXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M/OiBWZWMzLCBlbmRQb3M/OiBWZWMzLCBvYmplY3RUeXBlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1tdXHJcbiAgICAgICAgaWYgKG9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYXNlIG9iamVjdCB0eXBlXCIsIHRoaXMub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ29udHJvbGxlcjtcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtID0gdGhpcy5iYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Nb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25Hcm91bmQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmF0ZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gdGhpcy5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VSb3RhdGVBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5MZWZ0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlJvdGF0ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uUm90YXRlU3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFwiQmFzZUdvbGRDb3VudFwiOiAxXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJ1aWxkQ29zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29zdCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CdWlsZENvc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmFuZ2UgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnWydUb3dlck1heExldmVsJ10pIHtcclxuICAgICAgICAgICAgdGhpcy50b3dlclVwZGF0ZU1heExldmVsID0gZ2FtZUNvbmZpZ1snVG93ZXJNYXhMZXZlbCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydJbmRleCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbmRleFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0luZGV4J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0ljb25TcHJ0ZUZyYW1lJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uU3ByaXRlRnJhbWUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0ljb25TcHJ0ZUZyYW1lJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQWN0aXZlQ29zdCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29zdEdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQWN0aXZlQ29zdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydNb3ZlVHlwZSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlNb3ZlVHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnTW92ZVR5cGUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVtcIkNhbkF0dGFja1R5cGVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BdHRhY2tNb3ZlVHlwZUxpc3QgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0NhbkF0dGFja1R5cGUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlCdWxsZXRUeXBlJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUJ1bGxldFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0VuZW15QnVsbGV0VHlwZSddOy8v5Y+W5Ye65pWM5Lq655qE5a2Q5by557G75Z6LXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ2lzQ29sbGlzaW9uRGVzdHJveSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25EZXN0cm95ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydpc0NvbGxpc2lvbkRlc3Ryb3knXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlJbmRleCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlJbmRleFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0VuZW15SW5kZXgnXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0NvbG9ueSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb25sb255ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydDb2xvbnknXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRCYXNlQXR0YWNrRGFtYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tOdW07XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrTnVtKCkge1xyXG4gICAgICAgIC8vIGxldCBvZmZzZXRWYWx1ZSA9IDA7XHJcbiAgICAgICAgLy8gaWYgKGFkZFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIG9mZnNldFZhbHVlID0gYWRkVmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIE1hdGguZmxvb3IodGhpcy5idWlsZENvc3QgKiBwcm9jZXNzTGV2ZWwgKiAocHJvY2Vzc0xldmVsICsgMSkgKiAwLjIpXHJcbiAgICAgICAgLy8gbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgICAgIC8vIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2NhbCBkYW1hZ2UgdmFsdWVcIiwgbG9jYWxMZXZlbCk7XHJcblxyXG4gICAgICAgIGxldCBiYXNlRGFtYWdlTnVtID0gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFzZSBkYW1hZ2UgbnVtXCIsIGJhc2VEYW1hZ2VOdW0pO1xyXG4gICAgICAgIC8vMSwyLDMgPSA2ICAoMysxKSozLzIgPSA2ICAgMSwyLDMsNCA9IDEwICAgNSAqIDQgLyAyID0gMTA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbERhbWFnZSA9IDEgKiAodGhpcy5jdXJyZW50TGV2ZWwgKyAxKSAqIHRoaXMuY3VycmVudExldmVsICogMC41O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBsZXZlbCBkYW1hZ2VcIiwgY3VycmVudExldmVsRGFtYWdlKTtcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbERhbWFnZSA9IHRoaXMuZ2V0TG9jYWxEYW1hZ2VOdW0oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhc2VEYW1hZ2VOdW0gKyBjdXJyZW50TGV2ZWxEYW1hZ2UgKyBsb2NhbExldmVsRGFtYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxEYW1hZ2VOdW0oKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5rC45LmF5pS75Ye75YqbIFxyXG4gICAgICAgIC8vIGxldCBiYXNlQXR0YWNrTnVtID0gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBsZXZlbFwiLCBsb2NhbExldmVsKTtcclxuICAgICAgICBsZXQgbG9jYWxEYW1hZ2UgPSAoMSArIGxvY2FsTGV2ZWwpICogbG9jYWxMZXZlbCAqIDAuNTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIjpsb2NhbCBkYW1hZ2VcIiwgbG9jYWxEYW1hZ2UpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbERhbWFnZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlKCkge1xyXG4gICAgICAgIC8v6I635Y+W5peL6L2s5oqA6IO955qE5peL6L2s6KeS5bqmXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTaG9vdFJhdGUoKSB7XHJcbiAgICAgICAgLy8gYmFzZUF0dGFja051bVxyXG4gICAgICAgIGxldCBjdXJyZW50U2hvb3RSYXRlID0gdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3QgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICBjdXJyZW50U2hvb3RSYXRlICo9ICgxICsgdGhpcy5jdXJyZW50TGV2ZWwgKiB0aGlzLmN1cnJlbnRMZXZlbCAqIDAuMDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3IgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICAvL+S4jeiDveWkquW/qyDorr7nva7kuIDkuKrlsIHpobZcclxuICAgICAgICBpZiAoY3VycmVudFNob290UmF0ZSA+IDEwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaG9vdFJhdGUgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGUgKyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmJhc2VBdHRhY2tSYXRlO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICogKHRoaXMuY3VycmVudExldmVsKSAqICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpICogMC4xO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEdvbGRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50TGV2ZWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVDb3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy/ojrflj5bljYfnuqfpnIDopoHmtojogJfnmoTph5HluIHkuKrmlbBcclxuXHJcbiAgICAgICAgbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsICsgMTtcclxuICAgICAgICAvLyBpZiAobGV2ZWwpIHtcclxuICAgICAgICAvLyAgICAgcHJvY2Vzc0xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBidWlsZENvc3QgPSB0aGlzLmJ1aWxkQ29zdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29zdCArICgxICsgcHJvY2Vzc0xldmVsKSAqIHByb2Nlc3NMZXZlbCAqIDAuNTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrTnVtXHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpIHtcclxuICAgICAgICAvL+iOt+WPluWNh+e6p+acrOWcsOetiee6p+mcgOimgeeahFxyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBsZXZlbFwiLCBsb2NhbExldmVsKTtcclxuICAgICAgICBsZXQgY29zdCA9IE1hdGgucm91bmQoTWF0aC5wb3coKGxvY2FsTGV2ZWwgKyAxKSwgMikgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiBjb3N0O1xyXG4gICAgfVxyXG4gICAgZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICAvL+iOt+WPluS4i+S4gOe6p+WinuWKoOWkmuWwkSDkuIrmtbflgLxcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbExldmVsICsgMTtcclxuICAgIH1cclxuICAgIGdldERlc3Ryb3lDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50TGV2ZWxDb3N0ID0gdGhpcy5nZXRVcGRhdGVDb3N0KCk7XHJcbiAgICAgICAgbGV0IGJ1aWxkQ29zdCA9IHRoaXMuYnVpbGRDb3N0O1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYnVpbGRDb3N0ICsgKDEgKyBjdXJyZW50TGV2ZWwpICogY3VycmVudExldmVsICogMC41KSAqIDAuOCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3REdXJhY3Rpb24gPSBcclxuICAgICAgICBsZXQgY3VycmVudFNob290UmF0ZSA9IHRoaXMuZ2V0Q3VycmVudFNob290UmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLljYfnuqfkuYvlkI4g55qEIOaUu+WHu+S6i+S7tumXtOmalFwiLCB0aGlzLnNob290RHVyYWN0aW9uKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3nmoTmlLvlh7vojIPlm7RcclxuICAgICAgICBsZXQgY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhbmdlICogKDEgKyBjdXJyZW50TGV2ZWwgKiAoY3VycmVudExldmVsIC0gMC41KSAqIDAuMDEpO1xyXG4gICAgfVxyXG4gICAgZ2V0VG93ZXJJc01heCgpOiBib29sZWFuIHtcclxuICAgICAgICAvL+iOt+WPluWhlOaYr+S4jeaYr+WNh+e6p+a7oeS6hlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IGxldmVsJywgdGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG93ZXIgdXBkYXRlIG1heCBsZXZlbFwiLCB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+PSB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldEljb25TcHJ0ZUZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmljb25TcHJpdGVGcmFtZTtcclxuICAgIH1cclxuICAgIGdldFdlYXBvbklzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0V2VhcG9uSXNBY3RpdmUodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NhbExldmVsKHVwZGF0ZUxldmVsKSB7XHJcbiAgICAgICAgLy/mm7TmlrDmsLjkuYXnrYnnuqdcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIGxvY2FsTGV2ZWwgKz0gdXBkYXRlTGV2ZWw7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WNh+e6p+eahGppc2h1JywgdXBkYXRlTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS51cGRhdGVUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSwgbG9jYWxMZXZlbCk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLnVwZGF0ZVxyXG4gICAgfVxyXG4gICAgZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCgpIHtcclxuICAgICAgICAvL+iOt+WPlua/gOa0u+mcgOimgeeahOmHkeW4geS4quaVsFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvc3RHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBhY3RpdmVXZWFwb24oKSB7XHJcbiAgICAgICAgLy/mv4DmtLvmrablmahcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWN0aXZlVG93ZXIodGhpcy50b3dlckluZGV4VHlwZSk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0TW92ZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlNb3ZlVHlwZTtcclxuICAgIH1cclxuICAgIGdldENhbkF0dGFja0VuZW15KG9iajogTm9kZSk6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBiYXNlT2JqID0gb2JqLmdldENvbXBvbmVudChCYXNlT2JqZWN0KTtcclxuICAgICAgICBpZiAoYmFzZU9iaikge1xyXG4gICAgICAgICAgICBsZXQgb2JqVHlwZSA9IGJhc2VPYmouZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmNhbkF0dGFja01vdmVUeXBlTGlzdDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09IG9ialR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNCb3NzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9iamVjdFR5cGUuaW5kZXhPZihcIkJvc3NcIikgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5lbXlCdWxsZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15QnVsbGV0VHlwZTtcclxuICAgIH1cclxuICAgIGdldElzQ29sbGlzaW9uRGVzdHJveSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbGxpc2lvbkRlc3Ryb3k7XHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgLy8gcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZ2V0RW5lbXlJc0FjdGl2ZSgpIHtcclxuICAgICAgICAvL+iOt+W+l+W9k+WJjeaVjOS6uuaYr+WQpua/gOa0u+S6hlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0RW5lbXlJc0FjdGl2ZSh0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDb2xvbnkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb25sb255O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==