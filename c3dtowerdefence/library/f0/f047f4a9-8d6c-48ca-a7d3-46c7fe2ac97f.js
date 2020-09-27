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
          key: "getCanAttackMoveTypeList",
          value: function getCanAttackMoveTypeList() {
            return this.canAttackMoveTypeList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsInYzIiwiQ0NGbG9hdCIsIlF1YXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCYXNlT2JqZWN0IiwidHlwZSIsImN1cnJlbnRMZXZlbCIsImJhc2VHYXNOdW0iLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUF0dGFja1JhdGUiLCJiYXNlUm90YXRlQW5nbGUiLCJyb3RhdGVTcGVlZCIsImJhc2VHb2xkQ291bnQiLCJidWlsZENvc3QiLCJzaG9vdER1cmFjdGlvbiIsImJhc2VBdHRhY2tSYW5nZSIsInRvd2VyVXBkYXRlTWF4TGV2ZWwiLCJjdXJyZW50R2FzTnVtIiwibW92ZVNwZWVkIiwiaXNDb2xsaXNpb25Hcm91bmQiLCJsZWZ0VGltZSIsImdhbWVDb250cm9sbGVyIiwidG93ZXJJbmRleFR5cGUiLCJpY29uU3ByaXRlRnJhbWUiLCJhY3RpdmVDb3N0R29sZENvdW50IiwiZW5lbXlNb3ZlVHlwZSIsImNhbkF0dGFja01vdmVUeXBlTGlzdCIsImVuZW15QnVsbGV0VHlwZSIsImlzQ29sbGlzaW9uRGVzdHJveSIsImVuZW15SW5kZXhUeXBlIiwiaXNDb25sb255IiwiYnVsbGV0UmVjb3ZlclRpbWUiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJvYmplY3RUeXBlIiwiY29uc29sZSIsImxvZyIsIkJhc2VHYXNOdW0iLCJNb3ZlU3BlZWQiLCJCYXNlQXR0YWNrTnVtIiwiU2hvb3RSYXRlIiwiZ2V0Q3VycmVudFNob290UmF0ZSIsIkJhc2VSb3RhdGVBbmdsZSIsIkxlZnRUaW1lIiwiUm90YXRlU3BlZWQiLCJCYXNlR29sZENvdW50IiwiQnVpbGRDb3N0IiwiQXR0YWNrUmFuZ2UiLCJiYXNlRGFtYWdlTnVtIiwiY3VycmVudExldmVsRGFtYWdlIiwibG9jYWxMZXZlbERhbWFnZSIsImdldExvY2FsRGFtYWdlTnVtIiwibG9jYWxMZXZlbCIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50VG93ZXJMb2NhbExldmVsIiwibG9jYWxEYW1hZ2UiLCJjdXJyZW50U2hvb3RSYXRlIiwicHJvY2Vzc0xldmVsIiwiY29zdCIsIk1hdGgiLCJyb3VuZCIsInBvdyIsImdldFdlYXBvbklzQWN0aXZlIiwidXBkYXRlTGV2ZWwiLCJ1cGRhdGVUb3dlckxvY2FsTGV2ZWwiLCJhY3RpdmVUb3dlciIsIm9iaiIsImJhc2VPYmoiLCJnZXRDb21wb25lbnQiLCJvYmpUeXBlIiwiZ2V0TW92ZVR5cGUiLCJsaXN0IiwiaSIsImxlbmd0aCIsInN0ciIsImluZGV4T2YiLCJ0YXJnZXRQb2ludCIsImRpciIsInN1YnRyYWN0Iiwibm9ybWFsaXplIiwicXVhdCIsImZyb21WaWV3VXAiLCJVUCIsImdldEVuZW15SXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFnQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxPLE9BQUFBLE87QUFBaURDLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBRW5HQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFELEMsVUFFUkYsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFFUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEM7Ozs7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bnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ1N0cmluZywgVmVjMywgdjMsIENDRmxvYXQsIGdhbWUsIFRFUlJBSU5fSEVJR0hUX0JBU0UsIFNwcml0ZUZyYW1lLCBRdWF0IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0Jhc2VPYmplY3QnKVxyXG5leHBvcnQgY2xhc3MgQmFzZU9iamVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgb2JqZWN0VHlwZSA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHJvb3ROb2RlOiBOb2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NGbG9hdCB9KVxyXG4gICAgcHVibGljIGFuaW1TcGVlZE11bE9mZnNldDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBiYXNlR2FzTnVtOiBudW1iZXIgPSAwOyAvL+WfuuehgOawlOWAvFxyXG4gICAgcHVibGljIGJhc2VBdHRhY2tOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye75YC8XHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja1JhdGU6IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye76aKR546HXHJcbiAgICBwdWJsaWMgYmFzZVJvdGF0ZUFuZ2xlOiBudW1iZXIgPSAwOyAvL+WfuuehgOaXi+i9rOaKgOiDve+8jOaXi+i9rOinkuW6plxyXG4gICAgcHVibGljIHJvdGF0ZVNwZWVkOiBudW1iZXIgPSAwOyAvL+aXi+i9rOaKgOiDveeahOaXi+i9rOinkumAn+W6plxyXG4gICAgcHVibGljIGJhc2VHb2xkQ291bnQ6IG51bWJlciA9IDA7IC8v5Z+656GA55qE6YeR5biB5Liq5pWwXHJcbiAgICBwdWJsaWMgYnVpbGRDb3N0OiBudW1iZXIgPSAwOyAvL+W7uumAoOmcgOimgea2iOiAl+eahOmHkeW4gVxyXG4gICAgcHVibGljIHNob290RHVyYWN0aW9uOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+mXtOmalFxyXG4gICAgcHVibGljIGJhc2VBdHRhY2tSYW5nZTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vojIPlm7RcclxuICAgIHB1YmxpYyB0b3dlclVwZGF0ZU1heExldmVsOiBudW1iZXIgPSAwOyAvL+WhlOWNh+e6p+WIsOeahOacgOmrmOetiee6p1xyXG5cclxuICAgIHByb3RlY3RlZCBjdXJyZW50R2FzTnVtOiBudW1iZXIgPSAwOyAvL+W9k+WJjeeahOawlOWAvFxyXG5cclxuICAgIHByb3RlY3RlZCBtb3ZlU3BlZWQ6IG51bWJlciA9IDA7IC8v56e75Yqo6YCf5bqmXHJcblxyXG4gICAgcHJvdGVjdGVkIGlzQ29sbGlzaW9uR3JvdW5kOiBib29sZWFuID0gZmFsc2U7Ly/mmK/lkKbkuI7lnLDpnaLnorDmkp7lj5HnlJ/lj43lvLlcclxuXHJcbiAgICBwdWJsaWMgbGVmdFRpbWU6IG51bWJlciA9IDA7IC8vIOeUn+WRveWRqOacn1xyXG5cclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB0b3dlckluZGV4VHlwZTogbnVtYmVyID0gMDsgLy/lvZPliY3loZTnmoTluo/lj7fkv6Hmga9cclxuICAgIHB1YmxpYyBpY29uU3ByaXRlRnJhbWU6IHN0cmluZyA9IG51bGw7IC8vaWNvbueahOeyvueBteW4p1xyXG4gICAgcHVibGljIGFjdGl2ZUNvc3RHb2xkQ291bnQ6IG51bWJlciA9IDA7IC8v5r+A5rS76ZyA6KaB55qE6YeR5biB5Liq5pWwXHJcbiAgICBwcml2YXRlIGVuZW15TW92ZVR5cGUgPSBcIndhbGtcIjtcclxuICAgIHByaXZhdGUgY2FuQXR0YWNrTW92ZVR5cGVMaXN0OiBzdHJpbmdbXSA9IFtdOyAvL+WPr+S7peaUu+WHu+eahOenu+WKqOexu+Wei+WIl+ihqCBcclxuICAgIHByaXZhdGUgZW5lbXlCdWxsZXRUeXBlOiBudW1iZXIgPSAwOyAvL+aVjOS6uueahOWtkOW8ueexu+Wei1xyXG4gICAgcHJpdmF0ZSBpc0NvbGxpc2lvbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTsgLy/norDmkp7kuYvlkI4g5piv5ZCm6ZSA5q+BXHJcbiAgICBwcml2YXRlIGVuZW15SW5kZXhUeXBlOiBudW1iZXIgPSAwOyAvL+aVjOS6uueahFxyXG5cclxuICAgIHByaXZhdGUgaXNDb25sb255OiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm6ZuG576k6L+Q5YqoXHJcbiAgICBwcml2YXRlIGJ1bGxldFJlY292ZXJUaW1lOiBudW1iZXIgPSAwOyAvL+WtkOW8ueeahOaBouWkjeaXtumXtFxyXG5cclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvcz86IFZlYzMsIGVuZFBvcz86IFZlYzMsIG9iamVjdFR5cGU/OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyB0aGlzLmJhc2VHYXNOdW0gPSBnYW1lQ29uZmlnW11cclxuICAgICAgICBpZiAob2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImJhc2Ugb2JqZWN0IHR5cGVcIiwgdGhpcy5vYmplY3RUeXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDb250cm9sbGVyO1xyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdhc051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VHYXNOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gPSB0aGlzLmJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uTW92ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNwZWVkID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxpc2lvbkdyb3VuZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5pc0NvbGxpc2lvbkdyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUF0dGFja051bSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tSYXRlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdER1cmFjdGlvbiA9IDEgLyB0aGlzLmdldEN1cnJlbnRTaG9vdFJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5CYXNlUm90YXRlQW5nbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUm90YXRlQW5nbGUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdFRpbWUgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uTGVmdFRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uUm90YXRlU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Sb3RhdGVTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gXCJCYXNlR29sZENvdW50XCI6IDFcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlR29sZENvdW50ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHb2xkQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQnVpbGRDb3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRDb3N0ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJ1aWxkQ29zdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5BdHRhY2tSYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tSYW5nZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5BdHRhY2tSYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbJ1Rvd2VyTWF4TGV2ZWwnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwgPSBnYW1lQ29uZmlnWydUb3dlck1heExldmVsJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0luZGV4J10pIHtcclxuICAgICAgICAgICAgdGhpcy50b3dlckluZGV4VHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnSW5kZXgnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnSWNvblNwcnRlRnJhbWUnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmljb25TcHJpdGVGcmFtZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnSWNvblNwcnRlRnJhbWUnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydBY3RpdmVDb3N0J10pIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3N0R29sZENvdW50ID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydBY3RpdmVDb3N0J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ01vdmVUeXBlJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteU1vdmVUeXBlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydNb3ZlVHlwZSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdW1wiQ2FuQXR0YWNrVHlwZVwiXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkF0dGFja01vdmVUeXBlTGlzdCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQ2FuQXR0YWNrVHlwZSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydFbmVteUJ1bGxldFR5cGUnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15QnVsbGV0VHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlCdWxsZXRUeXBlJ107Ly/lj5blh7rmlYzkurrnmoTlrZDlvLnnsbvlnotcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnaXNDb2xsaXNpb25EZXN0cm95J10pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxpc2lvbkRlc3Ryb3kgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ2lzQ29sbGlzaW9uRGVzdHJveSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydFbmVteUluZGV4J10pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUluZGV4VHlwZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnRW5lbXlJbmRleCddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQ29sb255J10pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbmxvbnkgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV1bJ0NvbG9ueSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdWydCdWxsZXRSZWNvdmVyVGltZSddKXtcclxuICAgICAgICAgICAgLy/lrZDlvLnnmoTmgaLlpI3ml7bpl7RcclxuICAgICAgICAgICAgdGhpcy5idWxsZXRSZWNvdmVyVGltZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXVsnQnVsbGV0UmVjb3ZlclRpbWUnXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRCYXNlQXR0YWNrRGFtYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tOdW07XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrTnVtKCkge1xyXG4gICAgICAgIC8vIGxldCBvZmZzZXRWYWx1ZSA9IDA7XHJcbiAgICAgICAgLy8gaWYgKGFkZFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIG9mZnNldFZhbHVlID0gYWRkVmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIE1hdGguZmxvb3IodGhpcy5idWlsZENvc3QgKiBwcm9jZXNzTGV2ZWwgKiAocHJvY2Vzc0xldmVsICsgMSkgKiAwLjIpXHJcbiAgICAgICAgLy8gbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG4gICAgICAgIC8vIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2NhbCBkYW1hZ2UgdmFsdWVcIiwgbG9jYWxMZXZlbCk7XHJcblxyXG4gICAgICAgIGxldCBiYXNlRGFtYWdlTnVtID0gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFzZSBkYW1hZ2UgbnVtXCIsIGJhc2VEYW1hZ2VOdW0pO1xyXG4gICAgICAgIC8vMSwyLDMgPSA2ICAoMysxKSozLzIgPSA2ICAgMSwyLDMsNCA9IDEwICAgNSAqIDQgLyAyID0gMTA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbERhbWFnZSA9IDEgKiAodGhpcy5jdXJyZW50TGV2ZWwgKyAxKSAqIHRoaXMuY3VycmVudExldmVsICogMC41O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBsZXZlbCBkYW1hZ2VcIiwgY3VycmVudExldmVsRGFtYWdlKTtcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbERhbWFnZSA9IHRoaXMuZ2V0TG9jYWxEYW1hZ2VOdW0oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhc2VEYW1hZ2VOdW0gKyBjdXJyZW50TGV2ZWxEYW1hZ2UgKyBsb2NhbExldmVsRGFtYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxEYW1hZ2VOdW0oKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5rC45LmF5pS75Ye75YqbIFxyXG4gICAgICAgIC8vIGxldCBiYXNlQXR0YWNrTnVtID0gdGhpcy5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBsZXZlbFwiLCBsb2NhbExldmVsKTtcclxuICAgICAgICBsZXQgbG9jYWxEYW1hZ2UgPSAoMSArIGxvY2FsTGV2ZWwpICogbG9jYWxMZXZlbCAqIDAuNTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIjpsb2NhbCBkYW1hZ2VcIiwgbG9jYWxEYW1hZ2UpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbERhbWFnZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlKCkge1xyXG4gICAgICAgIC8v6I635Y+W5peL6L2s5oqA6IO955qE5peL6L2s6KeS5bqmXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTaG9vdFJhdGUoKSB7XHJcbiAgICAgICAgLy8gYmFzZUF0dGFja051bVxyXG4gICAgICAgIGxldCBjdXJyZW50U2hvb3RSYXRlID0gdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3QgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICBjdXJyZW50U2hvb3RSYXRlICo9ICgxICsgdGhpcy5jdXJyZW50TGV2ZWwgKiB0aGlzLmN1cnJlbnRMZXZlbCAqIDAuMDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2hvb3IgcmF0ZVwiLCBjdXJyZW50U2hvb3RSYXRlKTtcclxuICAgICAgICAvL+S4jeiDveWkquW/qyDorr7nva7kuIDkuKrlsIHpobZcclxuICAgICAgICBpZiAoY3VycmVudFNob290UmF0ZSA+IDEwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaG9vdFJhdGUgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGUgKyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmJhc2VBdHRhY2tSYXRlO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICogKHRoaXMuY3VycmVudExldmVsKSAqICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpICogMC4xO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEdvbGRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50TGV2ZWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVDb3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy/ojrflj5bljYfnuqfpnIDopoHmtojogJfnmoTph5HluIHkuKrmlbBcclxuXHJcbiAgICAgICAgbGV0IHByb2Nlc3NMZXZlbCA9IHRoaXMuY3VycmVudExldmVsICsgMTtcclxuICAgICAgICAvLyBpZiAobGV2ZWwpIHtcclxuICAgICAgICAvLyAgICAgcHJvY2Vzc0xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBidWlsZENvc3QgPSB0aGlzLmJ1aWxkQ29zdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29zdCArICgxICsgcHJvY2Vzc0xldmVsKSAqIHByb2Nlc3NMZXZlbCAqIDAuNTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5iYXNlQXR0YWNrTnVtXHJcbiAgICB9XHJcbiAgICBnZXRVcGRhdGVMb2NhbExldmVsQ29zdCgpIHtcclxuICAgICAgICAvL+iOt+WPluWNh+e6p+acrOWcsOetiee6p+mcgOimgeeahFxyXG4gICAgICAgIGxldCBsb2NhbExldmVsID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBsZXZlbFwiLCBsb2NhbExldmVsKTtcclxuICAgICAgICBsZXQgY29zdCA9IE1hdGgucm91bmQoTWF0aC5wb3coKGxvY2FsTGV2ZWwgKyAxKSwgMikgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiBjb3N0O1xyXG4gICAgfVxyXG4gICAgZ2V0TmV4dExvY2FsbGV2ZWxBZGREYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICAvL+iOt+WPluS4i+S4gOe6p+WinuWKoOWkmuWwkSDkuIrmtbflgLxcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbExldmVsICsgMTtcclxuICAgIH1cclxuICAgIGdldERlc3Ryb3lDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50TGV2ZWxDb3N0ID0gdGhpcy5nZXRVcGRhdGVDb3N0KCk7XHJcbiAgICAgICAgbGV0IGJ1aWxkQ29zdCA9IHRoaXMuYnVpbGRDb3N0O1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYnVpbGRDb3N0ICsgKDEgKyBjdXJyZW50TGV2ZWwpICogY3VycmVudExldmVsICogMC41KSAqIDAuOCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3REdXJhY3Rpb24gPSBcclxuICAgICAgICBsZXQgY3VycmVudFNob290UmF0ZSA9IHRoaXMuZ2V0Q3VycmVudFNob290UmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIGN1cnJlbnRTaG9vdFJhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLljYfnuqfkuYvlkI4g55qEIOaUu+WHu+S6i+S7tumXtOmalFwiLCB0aGlzLnNob290RHVyYWN0aW9uKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3nmoTmlLvlh7vojIPlm7RcclxuICAgICAgICBsZXQgY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhbmdlICogKDEgKyBjdXJyZW50TGV2ZWwgKiAoY3VycmVudExldmVsIC0gMC41KSAqIDAuMDEpO1xyXG4gICAgfVxyXG4gICAgZ2V0VG93ZXJJc01heCgpOiBib29sZWFuIHtcclxuICAgICAgICAvL+iOt+WPluWhlOaYr+S4jeaYr+WNh+e6p+a7oeS6hlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IGxldmVsJywgdGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG93ZXIgdXBkYXRlIG1heCBsZXZlbFwiLCB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+PSB0aGlzLnRvd2VyVXBkYXRlTWF4TGV2ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldEljb25TcHJ0ZUZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmljb25TcHJpdGVGcmFtZTtcclxuICAgIH1cclxuICAgIGdldFdlYXBvbklzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0V2VhcG9uSXNBY3RpdmUodGhpcy50b3dlckluZGV4VHlwZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NhbExldmVsKHVwZGF0ZUxldmVsKSB7XHJcbiAgICAgICAgLy/mm7TmlrDmsLjkuYXnrYnnuqdcclxuICAgICAgICBsZXQgbG9jYWxMZXZlbCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50VG93ZXJMb2NhbExldmVsKHRoaXMudG93ZXJJbmRleFR5cGUpO1xyXG4gICAgICAgIGxvY2FsTGV2ZWwgKz0gdXBkYXRlTGV2ZWw7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WNh+e6p+eahGppc2h1JywgdXBkYXRlTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS51cGRhdGVUb3dlckxvY2FsTGV2ZWwodGhpcy50b3dlckluZGV4VHlwZSwgbG9jYWxMZXZlbCk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLnVwZGF0ZVxyXG4gICAgfVxyXG4gICAgZ2V0QWN0aXZlQ29zdEdvbGRDb3VudCgpIHtcclxuICAgICAgICAvL+iOt+WPlua/gOa0u+mcgOimgeeahOmHkeW4geS4quaVsFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvc3RHb2xkQ291bnQ7XHJcbiAgICB9XHJcbiAgICBhY3RpdmVXZWFwb24oKSB7XHJcbiAgICAgICAgLy/mv4DmtLvmrablmahcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWN0aXZlVG93ZXIodGhpcy50b3dlckluZGV4VHlwZSk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0TW92ZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlNb3ZlVHlwZTtcclxuICAgIH1cclxuICAgIGdldENhbkF0dGFja0VuZW15KG9iajogTm9kZSk6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBiYXNlT2JqID0gb2JqLmdldENvbXBvbmVudChCYXNlT2JqZWN0KTtcclxuICAgICAgICBpZiAoYmFzZU9iaikge1xyXG4gICAgICAgICAgICBsZXQgb2JqVHlwZSA9IGJhc2VPYmouZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmNhbkF0dGFja01vdmVUeXBlTGlzdDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09IG9ialR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2FuQXR0YWNrTW92ZVR5cGVMaXN0KCk6c3RyaW5nW117XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuQXR0YWNrTW92ZVR5cGVMaXN0O1xyXG4gICAgfVxyXG4gICAgZ2V0SXNCb3NzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9iamVjdFR5cGUuaW5kZXhPZihcIkJvc3NcIikgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5lbXlCdWxsZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15QnVsbGV0VHlwZTtcclxuICAgIH1cclxuICAgIGdldElzQ29sbGlzaW9uRGVzdHJveSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbGxpc2lvbkRlc3Ryb3k7XHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgLy8gcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZ2V0RW5lbXlJc0FjdGl2ZSgpIHtcclxuICAgICAgICAvL+iOt+W+l+W9k+WJjeaVjOS6uuaYr+WQpua/gOa0u+S6hlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0RW5lbXlJc0FjdGl2ZSh0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDb2xvbnkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb25sb255O1xyXG4gICAgfVxyXG4gICAgZ2V0QnVsbGV0UmVjb3ZlclRpbWUoKTpudW1iZXJ7XHJcbiAgICAgICAgLy8gQnVsbGV0UmVjb3ZlclRpbWVcclxuXHJcbiAgICAgICAgLy/ov5Tlm57lrZDlvLnmgaLlpI3nmoTml7bpl7RcclxuICAgICAgICByZXR1cm4gdGhpcy5idWxsZXRSZWNvdmVyVGltZTtcclxuICAgIH1cclxuICAgIGdldE1vdmVTcGVlZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19