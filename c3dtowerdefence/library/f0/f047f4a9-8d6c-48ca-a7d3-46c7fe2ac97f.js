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
          _this.bulletRecoverTime = 0;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          //子弹的恢复时间
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

            if (gameConfig[this.objectType]['BulletRecoverTime']) {
              //子弹的恢复时间
              this.bulletRecoverTime = gameConfig[this.objectType]['BulletRecoverTime'];
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
        }, {
          key: "getBulletRecoverTime",
          value: function getBulletRecoverTime() {
            // BulletRecoverTime
            //返回子弹恢复的时间
            return this.bulletRecoverTime;
          }
        }, {
          key: "getMoveSpeed",
          value: function getMoveSpeed() {
            return this.moveSpeed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsInYzIiwiQ0NGbG9hdCIsIlF1YXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCYXNlT2JqZWN0IiwidHlwZSIsImN1cnJlbnRMZXZlbCIsImJhc2VHYXNOdW0iLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUF0dGFja1JhdGUiLCJiYXNlUm90YXRlQW5nbGUiLCJyb3RhdGVTcGVlZCIsImJhc2VHb2xkQ291bnQiLCJidWlsZENvc3QiLCJzaG9vdER1cmFjdGlvbiIsImJhc2VBdHRhY2tSYW5nZSIsInRvd2VyVXBkYXRlTWF4TGV2ZWwiLCJjdXJyZW50R2FzTnVtIiwibW92ZVNwZWVkIiwiaXNDb2xsaXNpb25Hcm91bmQiLCJsZWZ0VGltZSIsImdhbWVDb250cm9sbGVyIiwidG93ZXJJbmRleFR5cGUiLCJpY29uU3ByaXRlRnJhbWUiLCJhY3RpdmVDb3N0R29sZENvdW50IiwiZW5lbXlNb3ZlVHlwZSIsImNhbkF0dGFja01vdmVUeXBlTGlzdCIsImVuZW15QnVsbGV0VHlwZSIsImlzQ29sbGlzaW9uRGVzdHJveSIsImVuZW15SW5kZXhUeXBlIiwiaXNDb25sb255IiwiYnVsbGV0UmVjb3ZlclRpbWUiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJvYmplY3RUeXBlIiwiY29uc29sZSIsImxvZyIsIkJhc2VHYXNOdW0iLCJNb3ZlU3BlZWQiLCJCYXNlQXR0YWNrTnVtIiwiU2hvb3RSYXRlIiwiZ2V0Q3VycmVudFNob290UmF0ZSIsIkJhc2VSb3RhdGVBbmdsZSIsIkxlZnRUaW1lIiwiUm90YXRlU3BlZWQiLCJCYXNlR29sZENvdW50IiwiQnVpbGRDb3N0IiwiQXR0YWNrUmFuZ2UiLCJiYXNlRGFtYWdlTnVtIiwiY3VycmVudExldmVsRGFtYWdlIiwibG9jYWxMZXZlbERhbWFnZSIsImdldExvY2FsRGFtYWdlTnVtIiwibG9jYWxMZXZlbCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50VG93ZXJMb2NhbExldmVsIiwibG9jYWxEYW1hZ2UiLCJjdXJyZW50U2hvb3RSYXRlIiwicHJvY2Vzc0xldmVsIiwiY29zdCIsIk1hdGgiLCJyb3VuZCIsInBvdyIsImdldFdlYXBvbklzQWN0aXZlIiwidXBkYXRlTGV2ZWwiLCJ1cGRhdGVUb3dlckxvY2FsTGV2ZWwiLCJhY3RpdmVUb3dlciIsIm9iaiIsImJhc2VPYmoiLCJnZXRDb21wb25lbnQiLCJvYmpUeXBlIiwiZ2V0TW92ZVR5cGUiLCJsaXN0IiwiaSIsImxlbmd0aCIsInN0ciIsImluZGV4T2YiLCJ0YXJnZXRQb2ludCIsImRpciIsInN1YnRyYWN0Iiwibm9ybWFsaXplIiwicXVhdCIsImZyb21WaWV3VXAiLCJVUCIsImdldEVuZW15SXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFnQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxPLE9BQUFBLE87QUFBaURDLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBRW5HQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFELEMsVUFFUkYsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFFUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0ZNLFksR0FBdUIsQztnQkFFdkJDLFUsR0FBcUIsQztnQkFDckJDLGEsR0FBd0IsQztnQkFDeEJDLGMsR0FBeUIsQztnQkFDekJDLGUsR0FBMEIsQztnQkFDMUJDLFcsR0FBc0IsQztnQkFDdEJDLGEsR0FBd0IsQztnQkFDeEJDLFMsR0FBb0IsQztnQkFDcEJDLGMsR0FBeUIsQztnQkFDekJDLGUsR0FBMEIsQztnQkFDMUJDLG1CLEdBQThCLEM7Z0JBRTNCQyxhLEdBQXdCLEM7Z0JBRXhCQyxTLEdBQW9CLEM7Z0JBRXBCQyxpQixHQUE2QixLO2dCQUVoQ0MsUSxHQUFtQixDO2dCQUVuQkMsYyxHQUFpQyxJO2dCQUVqQ0MsYyxHQUF5QixDO2dCQUN6QkMsZSxHQUEwQixJO2dCQUMxQkMsbUIsR0FBOEIsQztnQkFDN0JDLGEsR0FBZ0IsTTtnQkFDaEJDLHFCLEdBQWtDLEU7Z0JBQ2xDQyxlLEdBQTBCLEM7Z0JBQzFCQyxrQixHQUE4QixLO2dCQUM5QkMsYyxHQUF5QixDO2dCQUV6QkMsUyxHQUFxQixLO2dCQUNyQkMsaUIsR0FBNEIsQzs7Ozs7O0FBQUc7K0JBRTNCQyxVLEVBQW9CWCxjLEVBQWdDWSxRLEVBQWlCQyxNLEVBQWVDLFUsRUFBcUI7QUFDakg7QUFDQSxnQkFBSUEsVUFBSixFQUFnQjtBQUNaLG1CQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNIOztBQUNEQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxLQUFLRixVQUFyQztBQUVBLGlCQUFLZCxjQUFMLEdBQXNCQSxjQUF0Qjs7QUFDQSxnQkFBSVcsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QkcsVUFBaEMsRUFBNEM7QUFDeEMsbUJBQUsvQixVQUFMLEdBQWtCeUIsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QkcsVUFBOUM7QUFFSDs7QUFFRCxpQkFBS3JCLGFBQUwsR0FBcUIsS0FBS1YsVUFBMUI7O0FBRUEsZ0JBQUl5QixVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCSSxTQUFoQyxFQUEyQztBQUN2QyxtQkFBS3JCLFNBQUwsR0FBaUJjLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJJLFNBQTdDO0FBRUg7O0FBQ0QsZ0JBQUlQLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJoQixpQkFBaEMsRUFBbUQ7QUFDL0MsbUJBQUtBLGlCQUFMLEdBQXlCYSxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCaEIsaUJBQXJEO0FBQ0g7O0FBQ0QsZ0JBQUlhLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJLLGFBQWhDLEVBQStDO0FBQzNDLG1CQUFLaEMsYUFBTCxHQUFxQndCLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJLLGFBQWpEO0FBQ0g7O0FBQ0QsZ0JBQUlSLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJNLFNBQWhDLEVBQTJDO0FBQ3ZDLG1CQUFLaEMsY0FBTCxHQUFzQnVCLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJNLFNBQWxEO0FBQ0EsbUJBQUszQixjQUFMLEdBQXNCLElBQUksS0FBSzRCLG1CQUFMLEVBQTFCO0FBQ0g7O0FBQ0QsZ0JBQUlWLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJRLGVBQWhDLEVBQWlEO0FBQzdDLG1CQUFLakMsZUFBTCxHQUF1QnNCLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJRLGVBQW5EO0FBQ0g7O0FBQ0QsZ0JBQUlYLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEJTLFFBQWhDLEVBQTBDO0FBQ3RDLG1CQUFLeEIsUUFBTCxHQUFnQlksVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlMsUUFBNUM7QUFDSDs7QUFDRCxnQkFBSVosVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlUsV0FBaEMsRUFBNkM7QUFDekMsbUJBQUtsQyxXQUFMLEdBQW1CcUIsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlUsV0FBL0M7QUFDSCxhQXJDZ0gsQ0FzQ2pIOzs7QUFDQSxnQkFBSWIsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlcsYUFBaEMsRUFBK0M7QUFDM0MsbUJBQUtsQyxhQUFMLEdBQXFCb0IsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlcsYUFBakQ7QUFDSDs7QUFDRCxnQkFBSWQsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlksU0FBaEMsRUFBMkM7QUFDdkMsbUJBQUtsQyxTQUFMLEdBQWlCbUIsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QlksU0FBN0M7QUFDSDs7QUFDRCxnQkFBSWYsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QmEsV0FBaEMsRUFBNkM7QUFDekMsbUJBQUtqQyxlQUFMLEdBQXVCaUIsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QmEsV0FBbkQ7QUFDSDs7QUFDRCxnQkFBSWhCLFVBQVUsQ0FBQyxlQUFELENBQWQsRUFBaUM7QUFDN0IsbUJBQUtoQixtQkFBTCxHQUEyQmdCLFVBQVUsQ0FBQyxlQUFELENBQXJDO0FBQ0g7O0FBQ0QsZ0JBQUlBLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEIsT0FBNUIsQ0FBSixFQUEwQztBQUN0QyxtQkFBS2IsY0FBTCxHQUFzQlUsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QixPQUE1QixDQUF0QjtBQUNIOztBQUNELGdCQUFJSCxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLGdCQUE1QixDQUFKLEVBQW1EO0FBQy9DLG1CQUFLWixlQUFMLEdBQXVCUyxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLGdCQUE1QixDQUF2QjtBQUNIOztBQUNELGdCQUFJSCxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLFlBQTVCLENBQUosRUFBK0M7QUFDM0MsbUJBQUtYLG1CQUFMLEdBQTJCUSxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLFlBQTVCLENBQTNCO0FBQ0g7O0FBQ0QsZ0JBQUlILFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEIsVUFBNUIsQ0FBSixFQUE2QztBQUN6QyxtQkFBS1YsYUFBTCxHQUFxQk8sVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QixVQUE1QixDQUFyQjtBQUNIOztBQUNELGdCQUFJSCxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLGVBQTVCLENBQUosRUFBa0Q7QUFDOUMsbUJBQUtULHFCQUFMLEdBQTZCTSxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLGVBQTVCLENBQTdCO0FBQ0g7O0FBQ0QsZ0JBQUlILFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEIsaUJBQTVCLENBQUosRUFBb0Q7QUFDaEQsbUJBQUtSLGVBQUwsR0FBdUJLLFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEIsaUJBQTVCLENBQXZCLENBRGdELENBQ3NCO0FBQ3pFOztBQUNELGdCQUFJSCxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLG9CQUE1QixDQUFKLEVBQXVEO0FBQ25ELG1CQUFLUCxrQkFBTCxHQUEwQkksVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QixvQkFBNUIsQ0FBMUI7QUFDSDs7QUFDRCxnQkFBSUgsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QixZQUE1QixDQUFKLEVBQStDO0FBQzNDLG1CQUFLTixjQUFMLEdBQXNCRyxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLFlBQTVCLENBQXRCO0FBQ0g7O0FBRUQsZ0JBQUlILFVBQVUsQ0FBQyxLQUFLRyxVQUFOLENBQVYsQ0FBNEIsUUFBNUIsQ0FBSixFQUEyQztBQUN2QyxtQkFBS0wsU0FBTCxHQUFpQkUsVUFBVSxDQUFDLEtBQUtHLFVBQU4sQ0FBVixDQUE0QixRQUE1QixDQUFqQjtBQUNIOztBQUNELGdCQUFJSCxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLG1CQUE1QixDQUFKLEVBQXFEO0FBQ2pEO0FBQ0EsbUJBQUtKLGlCQUFMLEdBQXlCQyxVQUFVLENBQUMsS0FBS0csVUFBTixDQUFWLENBQTRCLG1CQUE1QixDQUF6QjtBQUNIO0FBQ0o7OztnREFDcUI7QUFDbEIsbUJBQU8sS0FBSzNCLGFBQVo7QUFDSDs7O2dEQUNxQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZ0JBQUl5QyxhQUFhLEdBQUcsS0FBS3pDLGFBQXpCO0FBQ0E0QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlksYUFBL0IsRUFYa0IsQ0FZbEI7O0FBQ0EsZ0JBQUlDLGtCQUFrQixHQUFHLEtBQUssS0FBSzVDLFlBQUwsR0FBb0IsQ0FBekIsSUFBOEIsS0FBS0EsWUFBbkMsR0FBa0QsR0FBM0U7QUFDQThCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DYSxrQkFBcEM7QUFDQSxnQkFBSUMsZ0JBQWdCLEdBQUcsS0FBS0MsaUJBQUwsRUFBdkI7QUFFQSxtQkFBT0gsYUFBYSxHQUFHQyxrQkFBaEIsR0FBcUNDLGdCQUE1QztBQUNIOzs7OENBQ21CO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBSUUsVUFBVSxHQUFHLEtBQUtoQyxjQUFMLENBQW9CaUMsVUFBcEIsQ0FBK0JDLHlCQUEvQixDQUF5RCxLQUFLakMsY0FBOUQsQ0FBakI7QUFDQWMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQmdCLFVBQTNCO0FBQ0EsZ0JBQUlHLFdBQVcsR0FBRyxDQUFDLElBQUlILFVBQUwsSUFBbUJBLFVBQW5CLEdBQWdDLEdBQWxEO0FBQ0FqQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLRixVQUFMLEdBQWtCLGVBQTlCLEVBQStDcUIsV0FBL0M7QUFDQSxtQkFBT0EsV0FBUDtBQUNIOzs7dURBQzRCO0FBQ3pCO0FBQ0EsbUJBQU8sS0FBSzlDLGVBQVo7QUFDSDs7O2dEQUVxQjtBQUNsQjtBQUNBLGdCQUFJK0MsZ0JBQWdCLEdBQUcsS0FBS2hELGNBQTVCO0FBQ0EyQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ29CLGdCQUFsQztBQUNBQSxZQUFBQSxnQkFBZ0IsSUFBSyxJQUFJLEtBQUtuRCxZQUFMLEdBQW9CLEtBQUtBLFlBQXpCLEdBQXdDLElBQWpFO0FBRUE4QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ29CLGdCQUFsQyxFQU5rQixDQU9sQjs7QUFDQSxnQkFBSUEsZ0JBQWdCLEdBQUcsRUFBdkIsRUFBMkI7QUFDdkJBLGNBQUFBLGdCQUFnQixHQUFHLEVBQW5CO0FBQ0g7O0FBQ0QsbUJBQU9BLGdCQUFQLENBWGtCLENBWWxCO0FBQ0E7QUFDSDs7O2dEQUM2QjtBQUMxQixtQkFBTyxLQUFLN0MsYUFBWjtBQUNIOzs7NENBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtOLFlBQVo7QUFDSDs7OzBDQUN1QjtBQUNwQjtBQUVBLGdCQUFJb0QsWUFBWSxHQUFHLEtBQUtwRCxZQUFMLEdBQW9CLENBQXZDLENBSG9CLENBSXBCO0FBQ0E7QUFDQTs7QUFDQSxnQkFBSU8sU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0FBRUEsbUJBQU9BLFNBQVMsR0FBRyxDQUFDLElBQUk2QyxZQUFMLElBQXFCQSxZQUFyQixHQUFvQyxHQUF2RCxDQVRvQixDQVVwQjtBQUNIOzs7b0RBQ3lCO0FBQ3RCO0FBQ0EsZ0JBQUlMLFVBQVUsR0FBRyxLQUFLaEMsY0FBTCxDQUFvQmlDLFVBQXBCLENBQStCQyx5QkFBL0IsQ0FBeUQsS0FBS2pDLGNBQTlELENBQWpCO0FBQ0FjLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJnQixVQUEzQjtBQUNBLGdCQUFJTSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLEdBQUwsQ0FBVVQsVUFBVSxHQUFHLENBQXZCLEVBQTJCLENBQTNCLElBQWdDLEdBQTNDLENBQVg7QUFDQSxtQkFBT00sSUFBUDtBQUNIOzs7dURBQ29DO0FBQ2pDO0FBQ0EsZ0JBQUlOLFVBQVUsR0FBRyxLQUFLaEMsY0FBTCxDQUFvQmlDLFVBQXBCLENBQStCQyx5QkFBL0IsQ0FBeUQsS0FBS2pDLGNBQTlELENBQWpCO0FBQ0EsbUJBQU8rQixVQUFVLEdBQUcsQ0FBcEI7QUFDSDs7OzRDQUN5QjtBQUN0QjtBQUNBLGdCQUFJeEMsU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0FBQ0EsZ0JBQUlQLFlBQVksR0FBRyxLQUFLQSxZQUF4QjtBQUNBLG1CQUFPc0QsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ2hELFNBQVMsR0FBRyxDQUFDLElBQUlQLFlBQUwsSUFBcUJBLFlBQXJCLEdBQW9DLEdBQWpELElBQXdELEdBQW5FLENBQVA7QUFDSDs7O3dDQUNhO0FBQ1YsaUJBQUtBLFlBQUwsR0FEVSxDQUVWOztBQUNBLGdCQUFJbUQsZ0JBQWdCLEdBQUcsS0FBS2YsbUJBQUwsRUFBdkI7QUFFQSxpQkFBSzVCLGNBQUwsR0FBc0IsSUFBSTJDLGdCQUExQjtBQUNBckIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLdkIsY0FBbEM7QUFFSDs7O2tEQUN1QjtBQUNwQjtBQUNBLGdCQUFJUixZQUFZLEdBQUcsS0FBS0EsWUFBeEI7QUFDQSxtQkFBTyxLQUFLUyxlQUFMLElBQXdCLElBQUlULFlBQVksSUFBSUEsWUFBWSxHQUFHLEdBQW5CLENBQVosR0FBc0MsSUFBbEUsQ0FBUDtBQUNIOzs7MENBQ3dCO0FBQ3JCO0FBQ0E4QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUsvQixZQUFsQztBQUNBOEIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0MsS0FBS3JCLG1CQUEzQzs7QUFDQSxnQkFBSSxLQUFLVixZQUFMLElBQXFCLEtBQUtVLG1CQUE5QixFQUFtRDtBQUMvQyxxQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7OENBQ21CO0FBQ2hCLG1CQUFPLEtBQUtPLGVBQVo7QUFDSDs7OzhDQUM0QjtBQUN6QixtQkFBTyxLQUFLRixjQUFMLENBQW9CaUMsVUFBcEIsQ0FBK0JTLGlCQUEvQixDQUFpRCxLQUFLekMsY0FBdEQsQ0FBUDtBQUNIOzs7MkNBQ2dCMEMsVyxFQUFhO0FBQzFCO0FBQ0EsZ0JBQUlYLFVBQVUsR0FBRyxLQUFLaEMsY0FBTCxDQUFvQmlDLFVBQXBCLENBQStCQyx5QkFBL0IsQ0FBeUQsS0FBS2pDLGNBQTlELENBQWpCO0FBQ0ErQixZQUFBQSxVQUFVLElBQUlXLFdBQWQ7QUFDQTVCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0IyQixXQUF4QjtBQUNBLGlCQUFLM0MsY0FBTCxDQUFvQmlDLFVBQXBCLENBQStCVyxxQkFBL0IsQ0FBcUQsS0FBSzNDLGNBQTFELEVBQTBFK0IsVUFBMUUsRUFMMEIsQ0FNMUI7QUFDSDs7O21EQUN3QjtBQUNyQjtBQUNBLG1CQUFPLEtBQUs3QixtQkFBWjtBQUNIOzs7eUNBQ2M7QUFDWDtBQUNBLGlCQUFLSCxjQUFMLENBQW9CaUMsVUFBcEIsQ0FBK0JZLFdBQS9CLENBQTJDLEtBQUs1QyxjQUFoRDtBQUVIOzs7d0NBQ2E7QUFDVixtQkFBTyxLQUFLRyxhQUFaO0FBQ0g7Ozs0Q0FDaUIwQyxHLEVBQW9CO0FBQ2xDLGdCQUFJQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsWUFBSixDQUFpQmpFLFVBQWpCLENBQWQ7O0FBQ0EsZ0JBQUlnRSxPQUFKLEVBQWE7QUFDVCxrQkFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUNHLFdBQVIsRUFBZDtBQUNBLGtCQUFJQyxJQUFJLEdBQUcsS0FBSzlDLHFCQUFoQjs7QUFDQSxtQkFBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxvQkFBSUUsR0FBRyxHQUFHSCxJQUFJLENBQUNDLENBQUQsQ0FBZDs7QUFDQSxvQkFBSUUsR0FBRyxLQUFLTCxPQUFaLEVBQXFCO0FBQ2pCLHlCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsbUJBQU8sS0FBUDtBQUNIOzs7c0NBQ1c7QUFDUixnQkFBSSxLQUFLbkMsVUFBTCxDQUFnQnlDLE9BQWhCLENBQXdCLE1BQXhCLElBQWtDLENBQUMsQ0FBdkMsRUFBMEM7QUFDdEMscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7OytDQUNvQjtBQUNqQixtQkFBTyxLQUFLakQsZUFBWjtBQUNIOzs7a0RBQ3VCO0FBQ3BCLG1CQUFPLEtBQUtDLGtCQUFaO0FBQ0g7Ozt5Q0FDY0ssUSxFQUFVNEMsVyxFQUF5QjtBQUM5QztBQUVBLGdCQUFJQyxHQUFHLEdBQUcvRSxFQUFFLENBQUNrQyxRQUFELENBQUYsQ0FBYThDLFFBQWIsQ0FBc0JGLFdBQXRCLEVBQW1DRyxTQUFuQyxFQUFWO0FBQ0EsZ0JBQUlDLElBQUksR0FBRyxJQUFJaEYsSUFBSixFQUFYLENBSjhDLENBSzlDOztBQUNBQSxZQUFBQSxJQUFJLENBQUNpRixVQUFMLENBQWdCRCxJQUFoQixFQUFzQkgsR0FBdEIsRUFBMkJoRixJQUFJLENBQUNxRixFQUFoQyxFQU44QyxDQVE5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBT0YsSUFBUDtBQUNIOzs7NkNBQ2tCO0FBQ2Y7QUFDQSxtQkFBTyxLQUFLNUQsY0FBTCxDQUFvQmlDLFVBQXBCLENBQStCOEIsZ0JBQS9CLENBQWdELEtBQUtqRCxVQUFyRCxDQUFQO0FBQ0g7Ozt3Q0FDc0I7QUFDbkIsbUJBQU8sS0FBS0wsU0FBWjtBQUNIOzs7aURBQzRCO0FBQ3pCO0FBRUE7QUFDQSxtQkFBTyxLQUFLQyxpQkFBWjtBQUNIOzs7eUNBQ29CO0FBQ2pCLG1CQUFPLEtBQUtiLFNBQVo7QUFDSDs7OztRQWhVMkJ0QixTOzs7OztpQkFFUixTOzs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRVksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NTdHJpbmcsIFZlYzMsIHYzLCBDQ0Zsb2F0LCBnYW1lLCBURVJSQUlOX0hFSUdIVF9CQVNFLCBTcHJpdGVGcmFtZSwgUXVhdCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdCYXNlT2JqZWN0JylcclxuZXhwb3J0IGNsYXNzIEJhc2VPYmplY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogXCJcIiB9KVxyXG4gICAgcHVibGljIG9iamVjdFR5cGUgPSBcImRlZmF1bHRcIjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhbmltU3BlZWRNdWxPZmZzZXQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgYmFzZUdhc051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmsJTlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrTnVtOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+WAvFxyXG4gICAgcHVibGljIGJhc2VBdHRhY2tSYXRlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+mikeeOh1xyXG4gICAgcHVibGljIGJhc2VSb3RhdGVBbmdsZTogbnVtYmVyID0gMDsgLy/ln7rnoYDml4vovazmioDog73vvIzml4vovazop5LluqZcclxuICAgIHB1YmxpYyByb3RhdGVTcGVlZDogbnVtYmVyID0gMDsgLy/ml4vovazmioDog73nmoTml4vovazop5LpgJ/luqZcclxuICAgIHB1YmxpYyBiYXNlR29sZENvdW50OiBudW1iZXIgPSAwOyAvL+WfuuehgOeahOmHkeW4geS4quaVsFxyXG4gICAgcHVibGljIGJ1aWxkQ29zdDogbnVtYmVyID0gMDsgLy/lu7rpgKDpnIDopoHmtojogJfnmoTph5HluIFcclxuICAgIHB1YmxpYyBzaG9vdER1cmFjdGlvbjogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpl7TpmpRcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmFuZ2U6IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76IyD5Zu0XHJcbiAgICBwdWJsaWMgdG93ZXJVcGRhdGVNYXhMZXZlbDogbnVtYmVyID0gMDsgLy/loZTljYfnuqfliLDnmoTmnIDpq5jnrYnnuqdcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEdhc051bTogbnVtYmVyID0gMDsgLy/lvZPliY3nmoTmsJTlgLxcclxuXHJcbiAgICBwcm90ZWN0ZWQgbW92ZVNwZWVkOiBudW1iZXIgPSAwOyAvL+enu+WKqOmAn+W6plxyXG5cclxuICAgIHByb3RlY3RlZCBpc0NvbGxpc2lvbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm5LiO5Zyw6Z2i56Kw5pKe5Y+R55Sf5Y+N5by5XHJcblxyXG4gICAgcHVibGljIGxlZnRUaW1lOiBudW1iZXIgPSAwOyAvLyDnlJ/lkb3lkajmnJ9cclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdG93ZXJJbmRleFR5cGU6IG51bWJlciA9IDA7IC8v5b2T5YmN5aGU55qE5bqP5Y+35L+h5oGvXHJcbiAgICBwdWJsaWMgaWNvblNwcml0ZUZyYW1lOiBzdHJpbmcgPSBudWxsOyAvL2ljb27nmoTnsr7ngbXluKdcclxuICAgIHB1YmxpYyBhY3RpdmVDb3N0R29sZENvdW50OiBudW1iZXIgPSAwOyAvL+a/gOa0u+mcgOimgeeahOmHkeW4geS4quaVsFxyXG4gICAgcHJpdmF0ZSBlbmVteU1vdmVUeXBlID0gXCJ3YWxrXCI7XHJcbiAgICBwcml2YXRlIGNhbkF0dGFja01vdmVUeXBlTGlzdDogc3RyaW5nW10gPSBbXTsgLy/lj6/ku6XmlLvlh7vnmoTnp7vliqjnsbvlnovliJfooaggXHJcbiAgICBwcml2YXRlIGVuZW15QnVsbGV0VHlwZTogbnVtYmVyID0gMDsgLy/mlYzkurrnmoTlrZDlvLnnsbvlnotcclxuICAgIHByaXZhdGUgaXNDb2xsaXNpb25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7IC8v56Kw5pKe5LmL5ZCOIOaYr+WQpumUgOavgVxyXG4gICAgcHJpdmF0ZSBlbmVteUluZGV4VHlwZTogbnVtYmVyID0gMDsgLy/mlYzkurrnmoRcclxuXHJcbiAgICBwcml2YXRlIGlzQ29ubG9ueTogYm9vbGVhbiA9IGZhbHNlOyAvL+aYr+WQpumbhue+pOi/kOWKqFxyXG4gICAgcHJpdmF0ZSBidWxsZXRSZWNvdmVyVGltZTogbnVtYmVyID0gMDsgLy/lrZDlvLnnmoTmgaLlpI3ml7bpl7RcclxuXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M/OiBWZWMzLCBlbmRQb3M/OiBWZWMzLCBvYmplY3RUeXBlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1tdXHJcbiAgICAgICAgaWYgKG9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYXNlIG9iamVjdCB0eXBlXCIsIHRoaXMub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ29udHJvbGxlcjtcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtID0gdGhpcy5iYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Nb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25Hcm91bmQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmF0ZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gdGhpcy5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VSb3RhdGVBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5MZWZ0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlJvdGF0ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uUm90YXRlU3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFwiQmFzZUdvbGRDb3VudFwiOiAxXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJ1aWxkQ29zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29zdCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CdWlsZENvc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmFuZ2UgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQXR0YWNrUmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnWydUb3dlck1heExldmVsJ10pIHtcclxuICAgICAgICAgICAgdGhpcy50b3dlclVwZGF0ZU1heExldmVsID0gZ2FtZUNvbmZpZ1snVG93ZXJNYXhMZXZlbCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydJbmRleCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbmRleFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0luZGV4J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0ljb25TcHJ0ZUZyYW1lJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uU3ByaXRlRnJhbWUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0ljb25TcHJ0ZUZyYW1lJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQWN0aXZlQ29zdCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29zdEdvbGRDb3VudCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQWN0aXZlQ29zdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydNb3ZlVHlwZSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlNb3ZlVHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnTW92ZVR5cGUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVtcIkNhbkF0dGFja1R5cGVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BdHRhY2tNb3ZlVHlwZUxpc3QgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0NhbkF0dGFja1R5cGUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlCdWxsZXRUeXBlJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUJ1bGxldFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0VuZW15QnVsbGV0VHlwZSddOy8v5Y+W5Ye65pWM5Lq655qE5a2Q5by557G75Z6LXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ2lzQ29sbGlzaW9uRGVzdHJveSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25EZXN0cm95ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydpc0NvbGxpc2lvbkRlc3Ryb3knXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlJbmRleCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlJbmRleFR5cGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0VuZW15SW5kZXgnXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0NvbG9ueSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb25sb255ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydDb2xvbnknXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQnVsbGV0UmVjb3ZlclRpbWUnXSl7XHJcbiAgICAgICAgICAgIC8v5a2Q5by555qE5oGi5aSN5pe26Ze0XHJcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0UmVjb3ZlclRpbWUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0J1bGxldFJlY292ZXJUaW1lJ107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QmFzZUF0dGFja0RhbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEF0dGFja051bSgpIHtcclxuICAgICAgICAvLyBsZXQgb2Zmc2V0VmFsdWUgPSAwO1xyXG4gICAgICAgIC8vIGlmIChhZGRWYWx1ZSkge1xyXG4gICAgICAgIC8vICAgICBvZmZzZXRWYWx1ZSA9IGFkZFZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyBNYXRoLmZsb29yKHRoaXMuYnVpbGRDb3N0ICogcHJvY2Vzc0xldmVsICogKHByb2Nlc3NMZXZlbCArIDEpICogMC4yKVxyXG4gICAgICAgIC8vIGxldCBwcm9jZXNzTGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICAvLyBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9jYWwgZGFtYWdlIHZhbHVlXCIsIGxvY2FsTGV2ZWwpO1xyXG5cclxuICAgICAgICBsZXQgYmFzZURhbWFnZU51bSA9IHRoaXMuYmFzZUF0dGFja051bTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgZGFtYWdlIG51bVwiLCBiYXNlRGFtYWdlTnVtKTtcclxuICAgICAgICAvLzEsMiwzID0gNiAgKDMrMSkqMy8yID0gNiAgIDEsMiwzLDQgPSAxMCAgIDUgKiA0IC8gMiA9IDEwO1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWxEYW1hZ2UgPSAxICogKHRoaXMuY3VycmVudExldmVsICsgMSkgKiB0aGlzLmN1cnJlbnRMZXZlbCAqIDAuNTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWwgZGFtYWdlXCIsIGN1cnJlbnRMZXZlbERhbWFnZSk7XHJcbiAgICAgICAgbGV0IGxvY2FsTGV2ZWxEYW1hZ2UgPSB0aGlzLmdldExvY2FsRGFtYWdlTnVtKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYXNlRGFtYWdlTnVtICsgY3VycmVudExldmVsRGFtYWdlICsgbG9jYWxMZXZlbERhbWFnZTtcclxuICAgIH1cclxuICAgIGdldExvY2FsRGFtYWdlTnVtKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluW9k+WJjeawuOS5heaUu+WHu+WKmyBcclxuICAgICAgICAvLyBsZXQgYmFzZUF0dGFja051bSA9IHRoaXMuYmFzZUF0dGFja051bTtcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9jYWwgbGV2ZWxcIiwgbG9jYWxMZXZlbCk7XHJcbiAgICAgICAgbGV0IGxvY2FsRGFtYWdlID0gKDEgKyBsb2NhbExldmVsKSAqIGxvY2FsTGV2ZWwgKiAwLjU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmplY3RUeXBlICsgXCI6bG9jYWwgZGFtYWdlXCIsIGxvY2FsRGFtYWdlKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxEYW1hZ2U7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50U2tpbGxSb3RhdGVBbmdsZSgpIHtcclxuICAgICAgICAvL+iOt+WPluaXi+i9rOaKgOiDveeahOaXi+i9rOinkuW6plxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSb3RhdGVBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50U2hvb3RSYXRlKCkge1xyXG4gICAgICAgIC8vIGJhc2VBdHRhY2tOdW1cclxuICAgICAgICBsZXQgY3VycmVudFNob290UmF0ZSA9IHRoaXMuYmFzZUF0dGFja1JhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHNob290IHJhdGVcIiwgY3VycmVudFNob290UmF0ZSk7XHJcbiAgICAgICAgY3VycmVudFNob290UmF0ZSAqPSAoMSArIHRoaXMuY3VycmVudExldmVsICogdGhpcy5jdXJyZW50TGV2ZWwgKiAwLjAxKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHNob29yIHJhdGVcIiwgY3VycmVudFNob290UmF0ZSk7XHJcbiAgICAgICAgLy/kuI3og73lpKrlv6sg6K6+572u5LiA5Liq5bCB6aG2XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaG9vdFJhdGUgPiAxMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2hvb3RSYXRlID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50U2hvb3RSYXRlO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICsgdGhpcy5ub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZSAqICh0aGlzLmN1cnJlbnRMZXZlbCkgKiAodGhpcy5jdXJyZW50TGV2ZWwgKyAxKSAqIDAuMTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRHb2xkQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlR29sZENvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudExldmVsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0VXBkYXRlQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIC8v6I635Y+W5Y2H57qn6ZyA6KaB5raI6ICX55qE6YeR5biB5Liq5pWwXHJcblxyXG4gICAgICAgIGxldCBwcm9jZXNzTGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbCArIDE7XHJcbiAgICAgICAgLy8gaWYgKGxldmVsKSB7XHJcbiAgICAgICAgLy8gICAgIHByb2Nlc3NMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgYnVpbGRDb3N0ID0gdGhpcy5idWlsZENvc3Q7XHJcblxyXG4gICAgICAgIHJldHVybiBidWlsZENvc3QgKyAoMSArIHByb2Nlc3NMZXZlbCkgKiBwcm9jZXNzTGV2ZWwgKiAwLjU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYmFzZUF0dGFja051bVxyXG4gICAgfVxyXG4gICAgZ2V0VXBkYXRlTG9jYWxMZXZlbENvc3QoKSB7XHJcbiAgICAgICAgLy/ojrflj5bljYfnuqfmnKzlnLDnrYnnuqfpnIDopoHnmoRcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9jYWwgbGV2ZWxcIiwgbG9jYWxMZXZlbCk7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBNYXRoLnJvdW5kKE1hdGgucG93KChsb2NhbExldmVsICsgMSksIDIpICogMC41KTtcclxuICAgICAgICByZXR1cm4gY29zdDtcclxuICAgIH1cclxuICAgIGdldE5leHRMb2NhbGxldmVsQWRkRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgLy/ojrflj5bkuIvkuIDnuqflop7liqDlpJrlsJEg5LiK5rW35YC8XHJcbiAgICAgICAgbGV0IGxvY2FsTGV2ZWwgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCh0aGlzLnRvd2VySW5kZXhUeXBlKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxMZXZlbCArIDE7XHJcbiAgICB9XHJcbiAgICBnZXREZXN0cm95Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBsZXQgY3VycmVudExldmVsQ29zdCA9IHRoaXMuZ2V0VXBkYXRlQ29zdCgpO1xyXG4gICAgICAgIGxldCBidWlsZENvc3QgPSB0aGlzLmJ1aWxkQ29zdDtcclxuICAgICAgICBsZXQgY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGJ1aWxkQ29zdCArICgxICsgY3VycmVudExldmVsKSAqIGN1cnJlbnRMZXZlbCAqIDAuNSkgKiAwLjgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgICAvLyB0aGlzLnNob290RHVyYWN0aW9uID0gXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaG9vdFJhdGUgPSB0aGlzLmdldEN1cnJlbnRTaG9vdFJhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG9vdER1cmFjdGlvbiA9IDEgLyBjdXJyZW50U2hvb3RSYXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Y2H57qn5LmL5ZCOIOeahCDmlLvlh7vkuovku7bpl7TpmpRcIiwgdGhpcy5zaG9vdER1cmFjdGlvbik7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEF0dGFja1JhbmdlKCkge1xyXG4gICAgICAgIC8v6I635Y+W5b2T5YmN55qE5pS75Ye76IyD5Zu0XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYW5nZSAqICgxICsgY3VycmVudExldmVsICogKGN1cnJlbnRMZXZlbCAtIDAuNSkgKiAwLjAxKTtcclxuICAgIH1cclxuICAgIGdldFRvd2VySXNNYXgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy/ojrflj5bloZTmmK/kuI3mmK/ljYfnuqfmu6HkuoZcclxuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBsZXZlbCcsIHRoaXMuY3VycmVudExldmVsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIHVwZGF0ZSBtYXggbGV2ZWxcIiwgdGhpcy50b3dlclVwZGF0ZU1heExldmVsKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPj0gdGhpcy50b3dlclVwZGF0ZU1heExldmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJY29uU3BydGVGcmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pY29uU3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcbiAgICBnZXRXZWFwb25Jc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldFdlYXBvbklzQWN0aXZlKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTG9jYWxMZXZlbCh1cGRhdGVMZXZlbCkge1xyXG4gICAgICAgIC8v5pu05paw5rC45LmF562J57qnXHJcbiAgICAgICAgbGV0IGxvY2FsTGV2ZWwgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudFRvd2VyTG9jYWxMZXZlbCh0aGlzLnRvd2VySW5kZXhUeXBlKTtcclxuICAgICAgICBsb2NhbExldmVsICs9IHVwZGF0ZUxldmVsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfljYfnuqfnmoRqaXNodScsIHVwZGF0ZUxldmVsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEudXBkYXRlVG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUsIGxvY2FsTGV2ZWwpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS51cGRhdGVcclxuICAgIH1cclxuICAgIGdldEFjdGl2ZUNvc3RHb2xkQ291bnQoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmv4DmtLvpnIDopoHnmoTph5HluIHkuKrmlbBcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb3N0R29sZENvdW50O1xyXG4gICAgfVxyXG4gICAgYWN0aXZlV2VhcG9uKCkge1xyXG4gICAgICAgIC8v5r+A5rS75q2m5ZmoXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFjdGl2ZVRvd2VyKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG5cclxuICAgIH1cclxuICAgIGdldE1vdmVUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15TW92ZVR5cGU7XHJcbiAgICB9XHJcbiAgICBnZXRDYW5BdHRhY2tFbmVteShvYmo6IE5vZGUpOiBCb29sZWFuIHtcclxuICAgICAgICBsZXQgYmFzZU9iaiA9IG9iai5nZXRDb21wb25lbnQoQmFzZU9iamVjdCk7XHJcbiAgICAgICAgaWYgKGJhc2VPYmopIHtcclxuICAgICAgICAgICAgbGV0IG9ialR5cGUgPSBiYXNlT2JqLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy5jYW5BdHRhY2tNb3ZlVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ciA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSBvYmpUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQm9zcygpIHtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RUeXBlLmluZGV4T2YoXCJCb3NzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldEVuZW15QnVsbGV0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUJ1bGxldFR5cGU7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NvbGxpc2lvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb2xsaXNpb25EZXN0cm95O1xyXG4gICAgfVxyXG4gICAgZ2V0TG9va0F0QW5nbGUoc3RhcnRQb3MsIHRhcmdldFBvaW50OiBWZWMzKTogUXVhdCB7XHJcbiAgICAgICAgLy8gLy/ojrflj5bliLDmnJ3lkJHnmoTop5LluqZcclxuXHJcbiAgICAgICAgbGV0IGRpciA9IHYzKHN0YXJ0UG9zKS5zdWJ0cmFjdCh0YXJnZXRQb2ludCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIC8vIHF1YXQubGVycFxyXG4gICAgICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCBkaXIsIFZlYzMuVVApO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YXRcIiwgcXVhdCk7XHJcbiAgICAgICAgLy8gcm90YXRlQXJvdW5kXHJcbiAgICAgICAgLy8gc3RhcnRQb3MuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZS9cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1YXRcclxuICAgIH1cclxuICAgIGdldEVuZW15SXNBY3RpdmUoKSB7XHJcbiAgICAgICAgLy/ojrflvpflvZPliY3mlYzkurrmmK/lkKbmv4DmtLvkuoZcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEVuZW15SXNBY3RpdmUodGhpcy5vYmplY3RUeXBlKTtcclxuICAgIH1cclxuICAgIGdldElzQ29sb255KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29ubG9ueTtcclxuICAgIH1cclxuICAgIGdldEJ1bGxldFJlY292ZXJUaW1lKCk6bnVtYmVye1xyXG4gICAgICAgIC8vIEJ1bGxldFJlY292ZXJUaW1lXHJcblxyXG4gICAgICAgIC8v6L+U5Zue5a2Q5by55oGi5aSN55qE5pe26Ze0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsbGV0UmVjb3ZlclRpbWU7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZlU3BlZWQoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==