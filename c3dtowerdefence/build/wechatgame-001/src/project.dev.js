System.register("chunks:///AudioCtl.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, AudioSourceComponent, loader, AudioClip, Component, _dec, _class, _temp, ccclass, property, AudioCtl;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioSourceComponent = _cc.AudioSourceComponent;
      loader = _cc.loader;
      AudioClip = _cc.AudioClip;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7fa36dmnLhPGLldXsNYKbQR", "AudioCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioCtl", AudioCtl = (_dec = ccclass('AudioCtl'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AudioCtl, _Component);

        function AudioCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AudioCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AudioCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.audioSourcesCom = null;
          return _this;
        }

        _createClass(AudioCtl, [{
          key: "start",
          value: function start() {
            this.audioSourcesCom = this.node.getComponent(AudioSourceComponent);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.on("play-audio", function (audioStr, cb) {
              console.log("player- audio", audioStr);

              _this2.playAudio(audioStr, cb);
            });
            this.node.on("player-button-click-audio", function () {
              _this2.playAudio("按钮音效2", function () {});
            });
            this.node.on("player-button-click-audio-2", function () {
              _this2.playAudio("按钮音效2", function () {});
            });
            this.node.on("play-bg-music", function () {
              //播放背景音乐
              loader.loadRes("音乐文件/背景音效", AudioClip, function (err, result) {// result.setVolume(0.5);
                // this.audioSourcesCom.volume = 0.5;
                // result.setVolume(0.1, true);
                // this.audioSourcesCom.playOneShot(result);
              });
            });
          }
        }, {
          key: "playAudio",
          value: function playAudio(audioStr, cb) {
            var _this3 = this;

            if (audioStr) {
              loader.loadRes('音乐文件/' + audioStr, AudioClip, function (err, result) {
                if (err) {
                  console.log("load audio err", err);
                } else {
                  // AudioSourceComponent
                  // result.play();
                  _this3.audioSourcesCom.playOneShot(result);
                }
              });
            }
          }
        }]);

        return AudioCtl;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///BaseObject.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, CCFloat, isValid, v3, Quat, Vec3, Component, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, BaseObject;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
      isValid = _cc.isValid;
      v3 = _cc.v3;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f047fSpjWxIyqfTRsf+Ksl/", "BaseObject", undefined);

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
          _this.needRecoverBullet = false;
          _this.attackType = "normal";
          _this.healthCount = 0;
          _this.objectName = "无";
          _this.desString = "";
          _this.shootAudio = "";
          _this.boomAudio = "";
          _this.showAudio = "";
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          //展示的音效
          // private attackType: string = "normal"//攻击类型a
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

            if (gameConfig[this.objectType]['AttackType']) {
              this.attackType = gameConfig[this.objectType]['AttackType'];
            } // if (gameConfig[this.objectType]['TowerName']) {
            //     this.towerName = gameConfig[this.objectType]['TowerName'];
            // }


            if (gameConfig[this.objectType]['Name']) {
              this.objectName = gameConfig[this.objectType]['Name'];
            }

            if (gameConfig[this.objectType]['NeedRecoverBullet']) {
              this.needRecoverBullet = gameConfig[this.objectType]['NeedRecoverBullet']; //需要恢复子弹
            }

            if (gameConfig[this.objectType]['HealthCount']) {
              this.healthCount = gameConfig[this.objectType]['HealthCount'];
            }

            if (gameConfig[this.objectType]['Des']) {
              // this.init
              this.desString = gameConfig[this.objectType]["Des"];
            }

            if (gameConfig[this.objectType]['ShootAudio']) {
              this.shootAudio = gameConfig[this.objectType]['ShootAudio'];
            }

            if (gameConfig[this.objectType]['BoomAudio']) {
              this.boomAudio = gameConfig[this.objectType]['BoomAudio'];
            }

            if (gameConfig[this.objectType]['ShowAudio']) {
              this.showAudio = gameConfig[this.objectType]['ShowAudio'];
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
            console.log("current shoot rate", currentShootRate); // currentShootRate *= (1 + this.currentLevel * this.currentLevel * 0.01);

            currentShootRate *= 1 + this.currentLevel * this.currentLevel * 0.1;
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
            this.bulletRecoverTime *= 1 - this.currentLevel * this.currentLevel * 0.1;

            if (this.bulletRecoverTime < 0.2) {
              this.bulletRecoverTime = 0.2;
            }
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
            // if (isValid(enemyNode) && enemyNode.getComponent(EnemyBase).getIsCanLock() &&
            //     !enemyNode.getComponent(EnemyBase).getIsDead() &&
            //     this.getCanAttackEnemy(enemyNode)) {
            if (!isValid(obj)) {
              return false;
            } // if (!obj.getComponent(BaseObject).getIsCanLock()) {
            //     return false
            // }
            // if (obj.getComponent(EnemyBase).getIsDead()) {
            //     return false;
            // }
            // let dis = v3(obj.position).subtract(this.node.position).length();
            // if (dis > this.getCurrentAttackRange()){
            //     return;
            // }


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
          key: "getIsShowed",
          value: function getIsShowed() {
            //获取是否展示过
            return this.gameController.playerData.getIsShowed(this.objectType);
          }
        }, {
          key: "setShowed",
          value: function setShowed() {
            this.gameController.playerData.setShowed(this.objectType);
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
        }, {
          key: "getAttackType",
          value: function getAttackType() {
            //返回攻击类型
            return this.attackType;
          } // getTowerName(): string {
          //     return this.towerName
          // }

        }, {
          key: "getObjectName",
          value: function getObjectName() {
            return this.objectName;
          }
        }, {
          key: "getAttackSpeedLevel",
          value: function getAttackSpeedLevel() {
            //获取攻击速度的级数
            return this.currentLevel;
          }
        }, {
          key: "getIsNeedRecoverBullet",
          value: function getIsNeedRecoverBullet() {
            //是否需要恢复子弹
            return this.needRecoverBullet;
          }
        }, {
          key: "getHealthCount",
          value: function getHealthCount() {
            return this.healthCount;
          }
        }, {
          key: "getDesString",
          value: function getDesString() {
            return this.desString;
          }
        }, {
          key: "getBoomAudioStr",
          value: function getBoomAudioStr() {
            return this.boomAudio;
          }
        }, {
          key: "getShowAudio",
          value: function getShowAudio() {
            return this.showAudio;
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///BossController.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, BossController;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dcc66ytht5FMYgvOIQcQVvo", "BossController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BossController", BossController = (_dec = ccclass('BossController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(BossController, _Component);

        function BossController() {
          _classCallCheck(this, BossController);

          return _possibleConstructorReturn(this, _getPrototypeOf(BossController).apply(this, arguments));
        }

        _createClass(BossController, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return BossController;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/State.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, State;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "309b9GENMFDhItBZDPdMuEd", "State", undefined);

      _export("State", State = /*#__PURE__*/function () {
        function State() {
          _classCallCheck(this, State);

          this.state = "";
          this.handleMap = {};
        }

        _createClass(State, [{
          key: "setState",
          value: function setState(value) {
            this.state = value;

            if (this.handleMap[this.state]) {
              var list = this.handleMap[this.state];
              var _value = [];

              for (var i = 1; i < arguments.length; i++) {
                _value.push(arguments[i]);
              }

              for (var j = 0; j < list.length; j++) {
                var cb = list[j];
                cb.apply(this, _value);
              }
            }
          }
        }, {
          key: "getState",
          value: function getState() {
            return this.state;
          }
        }, {
          key: "addState",
          value: function addState(state, cb) {
            if (this.handleMap[state]) {
              this.handleMap[state].push(cb);
            } else {
              this.handleMap[state] = [cb];
            }
          }
        }]);

        return State;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///TowerBuildBase/TowerBuildBase.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, find, CameraComponent, SkeletalAnimationComponent, isValid, Component, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, TowerBuildBase;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      isValid = _cc.isValid;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bf2b5yrz6pN7ZEPmB5V4xlb", "TowerBuildBase", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBase", TowerBuildBase = (_dec = ccclass('TowerBuildBase'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TowerBuildBase, _Component);

        function TowerBuildBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBuildBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBuildBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.cameraNodeCom = null;
          _this.gameController = null;
          _this.targetTower = null;

          _initializerDefineProperty(_this, "arrowGuide", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(TowerBuildBase, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {
            this.gameController = find("GameController");
            this.cameraNodeCom = find("Camera").getComponent(CameraComponent);
            this.gameController.on("touch-screen-to-3d", this.touchScreenTo3d.bind(this), this);
            this.gameController.on("destroy-all-tower-build-base", this.destroyTowerBuildBase.bind(this), this);
            this.gameController.on("frozen-tower-build-base", this.forzenTowerBuildBase.bind(this), this); // this.node
            // this.node.on("onTriggerEnter")
            // this.getComponent(ColliderComponent).on("onTriggerEnter", this.onTriggerEnter.bind(this));
          }
        }, {
          key: "forzenTowerBuildBase",
          value: function forzenTowerBuildBase() {
            var skeleteAnim = this.arrowGuide.getComponent(SkeletalAnimationComponent);
            var defaultClip = skeleteAnim.defaultClip;
            var stateAnim = skeleteAnim.getState(defaultClip.name);
            stateAnim.pause();
          }
        }, {
          key: "touchScreenTo3d",
          value: function touchScreenTo3d(resultList) {
            if (!isValid(this.targetTower)) {
              for (var i = 0; i < resultList.length; i++) {
                var result = resultList[i];

                if (result.collider.node && result.collider.node.uuid === this.node.uuid) {
                  console.log("点中了此塔的基座");
                  this.gameController.emit("touch-base-build-base", this.node);
                  this.gameController.emit('player-button-click-audio-2');
                }
              }
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.gameController.off("destroy-all-tower-build-base", this.destroyTowerBuildBase, this);
            this.gameController.off("touch-screen-to-3d", this.touchScreenTo3d, this);
            this.gameController.off("frozen-tower-build-base", this.forzenTowerBuildBase, this);
          }
        }, {
          key: "destroyTowerBuildBase",
          value: function destroyTowerBuildBase() {
            this.node.destroy();
          }
        }, {
          key: "unSetTargetTower",
          value: function unSetTargetTower(target) {
            this.targetTower = undefined;
            this.node.active = true;
          }
        }, {
          key: "setTargetTower",
          value: function setTargetTower(targetTower) {
            this.targetTower = targetTower;
            this.node.active = false;
          } // onTriggerEnter() {
          //     console.log("点中了 tower build base");
          // }

        }]);

        return TowerBuildBase;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowGuide", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/BezierN.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, _decorator, v3, ccclass, property, BezierN;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e43e2vpRCtNoZCKx8bvmJ4Z", "BezierN", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BezierN", BezierN = /*#__PURE__*/function () {
        function BezierN(ctlPL) {
          _classCallCheck(this, BezierN);

          this.controllerPointList = [];
          this.controllerPointList = ctlPL;
        }

        _createClass(BezierN, [{
          key: "getPointList",
          value: function getPointList(segmentNum) {
            //细分值
            var n = this.controllerPointList.length; //取处曲线的阶数

            var aList = [1, 1];

            for (var i = 3; i < n + 1; i++) {
              var tList = [];

              for (var j = 0; j < aList.length; j++) {
                tList.push(aList[j]);
              } // console.log("t list", tList);


              aList[0] = 1;
              aList[i - 1] = 1;

              for (var t = 0; t < tList.length - 1; t++) {
                aList[t + 1] = tList[t] + tList[t + 1];
              }
            } // a * (1 - t)^b * t^c * Pn;


            var pointList = [];

            for (var _j = 0; _j < segmentNum; _j++) {
              var _t = _j / segmentNum;

              var endPos = v3(0, 0, 0);

              for (var _i = 0; _i < n; _i++) {
                var a = aList[_i];
                var b = n - 1 - _i;
                var c = _i;
                var value = a * Math.pow(1 - _t, b) * Math.pow(_t, c);
                endPos.add(v3(this.controllerPointList[_i]).multiplyScalar(value));
              }

              pointList.push(endPos);
            }

            return pointList; // for (let i = 0 ; i < n ; i ++){
            //     endPos.add( aList[a] * (1 - t) )
            // }
          }
        }], [{
          key: "getPathLength",
          value: function getPathLength(pathList) {
            var length = 0;

            for (var i = 0; i < pathList.length; i++) {
              if (i !== 0) {
                var dis = v3(pathList[i]).subtract(pathList[i - 1]).length();
                length += dis;
              }
            }

            return length;
          }
        }]);

        return BezierN;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/My2Array.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, My2dArray;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a822YVyJlDnb5+nCIOK0H/", "My2Array", undefined);

      My2dArray = /*#__PURE__*/function () {
        function My2dArray() {
          // for (let i = 0; i < height; i++) {
          //     let list: T[] = [];
          //     // for (let j = 0; j < width; j++) {
          //     //     list.push(value);
          //     // }
          //     this.numberList.push(list);
          // }
          _classCallCheck(this, My2dArray);

          this.numberList = [];
          this.heightNum = 0;
        }

        _createClass(My2dArray, [{
          key: "pushValue",
          value: function pushValue(value) {
            this.numberList[this.numberList.length - 1].push(value);
          }
        }, {
          key: "pushList",
          value: function pushList(value) {
            this.numberList.push(value);
          }
        }, {
          key: "getValue",
          value: function getValue(x, y) {
            if (y < 0 || x < 0) {
              return;
            }

            if (y >= this.numberList.length) {
              return null;
            }

            if (x >= this.numberList[y].length) {
              return null;
            }

            return this.numberList[y][x];
          }
        }, {
          key: "setValue",
          value: function setValue(x, y, value) {
            this.numberList[x][y] = value;
          }
        }, {
          key: "getHeightLength",
          value: function getHeightLength() {
            //获取二位数组的高
            return this.numberList.length;
          }
        }, {
          key: "getWidthLength",
          value: function getWidthLength() {
            if (this.numberList.length > 0) {
              return this.numberList[0].length;
            }

            return 0;
          }
        }, {
          key: "getValueWithLieIndex",
          value: function getValueWithLieIndex(index) {
            return this.numberList[index];
          }
        }, {
          key: "convertOneSpaceList",
          value: function convertOneSpaceList() {
            //转换成一维数组
            var list = [];

            for (var i = 0; i < this.getHeightLength(); i++) {
              for (var j = 0; j < this.getWidthLength(); j++) {
                list.push(this.numberList[i][j]);
              }
            }

            return list;
          }
        }]);

        return My2dArray;
      }();

      cclegacy._RF.pop();

      _export("default", My2dArray);
    }
  };
});

System.register("chunks:///GroundTiled/GroundTiled.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v2, BaseObject, _dec, _class, _temp, ccclass, property, GroundTiled;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v2 = _cc.v2;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75b72ybo0hO5rMJsDKDP6W5", "GroundTiled", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GroundTiled", GroundTiled = (_dec = ccclass('GroundTiled'), _dec(_class = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(GroundTiled, _BaseObject);

        function GroundTiled() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GroundTiled);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroundTiled)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.mapX = 0;
          _this.mapY = 0;
          _this.targetObjectList = [];
          return _this;
        }

        _createClass(GroundTiled, [{
          key: "getIsVoid",
          //物体上的物体列表
          value: function getIsVoid() {
            if (this.targetObjectList.length === 0) {
              return true;
            }

            return false;
          }
        }, {
          key: "setMapXY",
          value: function setMapXY(x, y) {
            //设置行列
            this.mapX = x;
            this.mapY = y;
          }
        }, {
          key: "getMapXY",
          value: function getMapXY() {
            return v2(this.mapX, this.mapY);
          }
        }, {
          key: "getTargetObjectList",
          value: function getTargetObjectList() {
            return this.targetObjectList;
          }
        }, {
          key: "setTargetObject",
          value: function setTargetObject(object) {
            //设置物体再当前的地图块上
            this.targetObjectList.push(object);
          }
        }]);

        return GroundTiled;
      }(BaseObject), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GroundMapCtl.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./util/My2Array.js", "./GroundTiled/GroundTiled.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, CCInteger, CCFloat, instantiate, v3, v2, Tween, Component, My2dArray, GroundTiled, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, GroundMapCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      CCFloat = _cc.CCFloat;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      v2 = _cc.v2;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }, function (_utilMy2ArrayJs) {
      My2dArray = _utilMy2ArrayJs.default;
    }, function (_GroundTiledGroundTiledJs) {
      GroundTiled = _GroundTiledGroundTiledJs.GroundTiled;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44e5akPt5hEHpdS1j2qoO/6", "GroundMapCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; // export class CellNode {
      //     public x: number = 0;
      //     public y: number = 0;
      //     public node: Node = null;
      //     public onTargetNode: Node = null; //在其上的物体节点
      //     public gValue: number = 0; //g值， 当前节点距离起点的距离
      //     public hValue: number = 0; //h值，当前节点距离终点的预估距离
      //     public parentNode: CellNode = null; //父节点
      //     constructor(x: number, y: number, node: Node) {
      //         this.x = x;
      //         this.y = y;
      //         this.node = node;
      //     }
      //     setParentNode(parentNode: CellNode) {
      //         this.parentNode = parentNode;
      //     }
      //     processGvalue(parentNode: CellNode) {
      //         let gValue = parentNode.gValue + Math.sqrt(2);
      //         return gValue;
      //     }
      //     processHValue(endPos: CellNode) {
      //         let hValue = this.getDistance(this, endPos);
      //         return hValue;
      //     }
      //     getDistance(p1: CellNode, p2: CellNode) {
      //         //获取两点之间的距离
      //         return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
      //     }
      //     setOnTargetNode(targetNode: Node) {
      //         this.onTargetNode = targetNode;
      //     }
      //     getFValue(): number {
      //         return this.gValue + this.hValue;
      //     }
      // }

      _export("GroundMapCtl", GroundMapCtl = (_dec = ccclass('GroundMapCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: CCFloat
      }), _dec6 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GroundMapCtl, _Component);

        function GroundMapCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GroundMapCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroundMapCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "groundMapTiledPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapWidth", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapHeight", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tiledSize", _descriptor4, _assertThisInitialized(_this));

          _this.mapNodeList = new My2dArray();
          _this.obsNodeList = [];

          _initializerDefineProperty(_this, "treePrefab", _descriptor5, _assertThisInitialized(_this));

          _this.groundTiledEdageIndexList = [];
          return _this;
        }

        _createClass(GroundMapCtl, [{
          key: "start",
          // private openList: CellNode[] = []; //开源列表
          // private closeList: CellNode[] = []; //关闭列表
          value: function start() {
            for (var i = 0; i < this.mapHeight; i++) {
              var nodeList = [];

              for (var j = 0; j < this.mapWidth; j++) {
                var node = instantiate(this.groundMapTiledPrefab);
                node.parent = this.node; // node.scale = v3(0, 0, 0);

                var pos = v3((this.mapWidth - 1) * -0.5 * this.tiledSize + j * this.tiledSize, -6, (this.mapHeight - 1) * -0.5 * this.tiledSize + i * this.tiledSize);
                node.setPosition(pos);
                node.active = false;
                nodeList.push(node); // if (i === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === this.mapWidth - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (i === this.mapHeight - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
              }

              this.mapNodeList.pushList(nodeList);
            } // this.mapNodeListOnSpace = this.mapNodeList.convertOneSpaceList(); //将二维数组 转换成一维


            var v2List = [];

            for (var _j = 0; _j < this.mapWidth; _j++) {
              v2List.push(v2(_j, 0));
            }

            for (var _i = 1; _i < this.mapHeight; _i++) {
              v2List.push(v2(this.mapWidth - 1, _i));
            }

            for (var _j2 = this.mapWidth - 2; _j2 >= 0; _j2--) {
              v2List.push(v2(_j2, this.mapHeight - 1));
            }

            for (var _i2 = this.mapHeight - 2; _i2 > 0; _i2--) {
              v2List.push(v2(0, _i2));
            }

            this.groundTiledEdageIndexList = v2List; // console.log("v2 list", v2List);
          }
        }, {
          key: "getInEdageIndexList",
          value: function getInEdageIndexList() {
            // return this.groundTiledNodeListInEdage;
            return this.groundTiledEdageIndexList;
          }
        }, {
          key: "showTreeEnterAnim",
          value: function showTreeEnterAnim(treeNode) {
            // let v = v2(0,0);
            console.log("show tree enter anima");
            return new Promise(function (resolve, reject) {
              treeNode.active = true;
              treeNode.scale = v3(1, 0, 1);
              var tw = new Tween(treeNode);
              tw.to(0.2, {
                scale: v3(1, 1, 1)
              }, {
                easing: "elasticOut"
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showGroundEnterAnim",
          value: function showGroundEnterAnim() {
            var _this2 = this;

            return this.showGroundTiledEnterAnim().then(function () {
              var treeCount = 0;

              while (treeCount < 2) {
                //随机2棵树
                var y = [0, _this2.mapHeight - 1][Math.round(Math.random() * (2 - 1))];
                var x = Math.round(Math.random() * (_this2.mapWidth - 1));

                var cellNode = _this2.mapNodeList.getValue(x, y);

                if (cellNode) {
                  _this2.obsNodeList.push(v2(x, y));

                  var node = cellNode;

                  if (node && node.getComponent(GroundTiled)) {
                    var groundTiled = node.getComponent(GroundTiled);

                    if (groundTiled.getIsVoid()) {
                      var treeNode = instantiate(_this2.treePrefab);
                      treeNode.parent = _this2.node;
                      groundTiled.setTargetObject(treeNode);
                      treeNode.active = false;
                      treeNode.position = v3(node.position.x, 0, node.position.z);

                      _this2.showTreeEnterAnim(treeNode);

                      treeCount++;
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "setTowerBuildBaseOnTiled",
          value: function setTowerBuildBaseOnTiled(target, x, y) {
            var cellNode = this.mapNodeList.getValue(x, y);

            if (cellNode) {
              this.obsNodeList.push(v2(x, y)); //将障碍物加入到障碍物列表里面
              // cellNode.setOnTargetNode(target);

              var node = cellNode;

              if (node && node.getComponent(GroundTiled)) {
                node.getComponent(GroundTiled).setTargetObject(target);
              }
            }
          }
        }, {
          key: "showGroundTiledEnterAnim",
          value: function showGroundTiledEnterAnim() {
            var startV = v2(Math.floor(this.mapWidth / 2), Math.floor(this.mapHeight / 2) + 1);
            var rotationIndex = 0;
            var moveDir = v2(0, -1);
            var moveLength = 1;
            var count = 0;
            var index = 0;
            var promiseList = [];

            while (startV.x <= this.mapWidth + 1 && startV.y <= this.mapHeight + 1 && startV.x >= 0 && startV.y >= 0) {
              var moveCount = 0;

              while (moveCount < moveLength) {
                moveCount++; // console.log("1 v", startV);

                var cellNode = this.mapNodeList.getValue(startV.x, startV.y);

                if (cellNode) {
                  var node = cellNode;

                  if (node) {
                    promiseList.push(this.showEnterAnim(node, index));
                    index++; // this.showEnterAnim(node, index);
                  }
                }

                startV.add(moveDir);
              }

              var radias = Math.PI * 2 / 4 * rotationIndex;
              moveDir = v2(0, 1).rotate(radias).normalize();
              moveDir.x = moveDir.x < 0 && Math.abs(moveDir.x) < 1 ? 0 : Math.floor(moveDir.x);
              moveDir.y = moveDir.y < 0 && Math.abs(moveDir.y) < 1 ? 0 : Math.floor(moveDir.y);

              if (count == 2) {
                count = 0;
                moveLength++;
              }

              count++;
              rotationIndex++;
            }

            return Promise.all(promiseList);
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim(node, index) {
            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              var pos = node.position;
              tw.delay(index * 0.03);
              tw.call(function () {
                node.active = true;
              });
              tw.to(0.4, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: 'elasticOut'
              });
              tw.call(function () {
                // find("GameController").emit("play-audio","drop",1);
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "getMapNodeList",
          value: function getMapNodeList() {
            return this.mapNodeList;
          } // getOneRandomVoidTiledNode() {
          //     //随机获取一个空的地图块的节点 //从边缘
          // }
          // getPathList(startPos: Vec2, endPos: Vec2): Vec2[] {
          //     let endNode = this.mapNodeList.getValue(endPos.x, endPos.y);
          //     //第一步。先将七点加入到open list 里面
          //     let startNode = this.mapNodeList.getValue(startPos.x, startPos.y);
          //     this.openList.push(startNode);
          //     let list: CellNode[] = [];
          //     while (this.openList.length > 0) {
          //         let minFValueNodeIndex = this.findFValueMinNodeIndex(this.openList);
          //         //第一步。，从openlist里面找到f值最小的节点 
          //         //并且将此点从openList里面删掉 ，并且加入到close 列表里面
          //         let minFValueNode = this.openList.splice(minFValueNodeIndex, 1)[0];
          //         if (minFValueNode.x === endPos.x && minFValueNode.y === endPos.y) {
          //             // console.log("找到终点了");
          //             //找到终点之后 开始构造列表
          //             // list.push(minFValueNode.parentNode);
          //             let currentNode = minFValueNode;
          //             while (!(currentNode.x === startPos.x && currentNode.y === startPos.y)) {
          //                 list.push(currentNode.parentNode);
          //                 currentNode = currentNode.parentNode;
          //             }
          //             break;
          //         }
          //         this.closeList.push(minFValueNode);
          //         let nearbyNodeList = this.findNearbyNodeList(minFValueNode);
          //         for (let i = 0; i < nearbyNodeList.length; i++) {
          //             let cellNode = nearbyNodeList[i];
          //             if (this.checkCellNodeIsInList(cellNode, this.closeList)) {
          //                 continue;
          //             }
          //             if (this.checkCellNodeIsInList(cellNode, this.openList)) {
          //                 //在open 列表里面 ，那么需要重新计算一下，此点设置新的父节点的 fvalue 与老的fvalue值的大小
          //                 let newGValue = cellNode.processGvalue(minFValueNode);
          //                 if (newGValue < cellNode.gValue) {
          //                     cellNode.setParentNode(minFValueNode);
          //                     cellNode.gValue = cellNode.processGvalue(minFValueNode);
          //                     cellNode.hValue = cellNode.processHValue(endNode);
          //                 }
          //             } else {
          //                 //设置父节点，并且计算fValeu
          //                 // cellNode.setP
          //                 cellNode.setParentNode(minFValueNode);
          //                 cellNode.gValue = cellNode.processGvalue(cellNode.parentNode);
          //                 cellNode.hValue = cellNode.processHValue(endNode);
          //                 this.openList.push(cellNode);
          //             }
          //         }
          //     }
          //     list = list.reverse();
          //     let posList = [];
          //     for (let i = 0; i < list.length; i++) {
          //         posList.push(list[i].node.position)
          //     }
          //     return posList;
          // }
          // checkCellNodeIsInList(targetCellNode: CellNode, nodeList: CellNode[]): boolean {
          //     for (let i = 0; i < nodeList.length; i++) {
          //         let node = nodeList[i];
          //         if (node.x === targetCellNode.x && node.y === targetCellNode.y) {
          //             //在此列表里面找到了，目标节点
          //             return true;
          //         }
          //     }
          //     return false;
          // }
          // findFValueMinNodeIndex(list: CellNode[]): number {
          //     //找到f值最小的点
          //     let minValue = Number.MAX_VALUE;
          //     let index = null;
          //     for (let i = 0; i < list.length; i++) {
          //         let node = list[i];
          //         if (node.getFValue() < minValue) {
          //             minValue = node.getFValue();
          //             index = i;
          //         }
          //     }
          //     return index;
          // }
          // findNearbyNodeList(currentCellNode: CellNode): CellNode[] {
          //     //找到附近点的 列表
          //     let dirList = [
          //         [0, 1],
          //         [1, 1],
          //         [1, 0],
          //         [1, -1],
          //         [0, -1],
          //         [-1, -1],
          //         [-1, 0],
          //         [-1, 1]
          //     ]
          //     let list = [];
          //     for (let i = 0; i < dirList.length; i++) {
          //         let dir = dirList[i];
          //         let x = currentCellNode.x + dir[0];
          //         let y = currentCellNode.y + dir[1];
          //         let cellNode = this.mapNodeList.getValue(x, y);
          //         if (cellNode && !cellNode.onTargetNode) {
          //             //此点存在，并且此点，上没有其他的障碍物
          //             list.push(cellNode);
          //         }
          //     }
          //     return list;
          // }
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "getObsPosList",
          value: function getObsPosList() {
            //获取障碍物列表
            return this.obsNodeList;
          }
        }, {
          key: "getMapSize",
          value: function getMapSize() {
            return v2(this.mapWidth, this.mapHeight);
          }
        }]);

        return GroundMapCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groundMapTiledPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tiledSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "treePrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/FindPathWithAStart.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "./My2Array.js"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, My2dArray, CellNode, FindPathWithAStart;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_My2ArrayJs) {
      My2dArray = _My2ArrayJs.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9bae92/Z1FGnZ8sEkxwZFcp", "FindPathWithAStart", undefined);

      CellNode = /*#__PURE__*/function () {
        //是否存在障碍物 
        //父节点
        function CellNode(x, y) {
          _classCallCheck(this, CellNode);

          this.x = 0;
          this.y = 0;
          this.isHaveObs = false;
          this.gValue = 0;
          this.hValue = 0;
          this.parent = null;
          this.x = x;
          this.y = y;
        }

        _createClass(CellNode, [{
          key: "setParent",
          value: function setParent(targetNode) {
            this.parent = targetNode;
          }
        }, {
          key: "getFValue",
          value: function getFValue() {
            return this.gValue + this.hValue;
          }
        }, {
          key: "setObs",
          value: function setObs(value) {
            //设置障碍物
            this.isHaveObs = value;
          }
        }]);

        return CellNode;
      }();

      _export("FindPathWithAStart", FindPathWithAStart = /*#__PURE__*/function () {
        // let openList: 
        // start () {
        // }
        function FindPathWithAStart(targetList, startPos, endPos) {
          _classCallCheck(this, FindPathWithAStart);

          this.openList = [];
          this.closeList = [];
          this.mapNodeList = new My2dArray();
          this.statrNode = null;
          this.endNode = null;
          var heightLength = targetList.getHeightLength();
          var widthLength = targetList.getWidthLength();

          for (var i = 0; i < heightLength; i++) {
            var list = new Array();

            for (var j = 0; j < widthLength; j++) {
              // list.push
              list.push(new CellNode(j, i));
            }

            this.mapNodeList.pushList(list);
          }

          this.statrNode = this.mapNodeList.getValue(startPos[0], startPos[1]);
          this.endNode = this.mapNodeList.getValue(endPos[0], endPos[1]); // console.log('map node list', this.mapNodeList);
        }

        _createClass(FindPathWithAStart, [{
          key: "findPathList",
          value: function findPathList() {
            //返回路径点
            //首先将起点加入到openlist里面
            var cellNodeList = [];
            this.openList.push(this.statrNode);

            while (this.openList.length > 0) {
              //如果openlist 大于0 那么继续循环
              //第一步。取出来，openlist里面。 fvalue值最小的节点
              var minFValueIndex = this.findMinFvalueNode(this.openList);
              var minFValueNode = this.openList.splice(minFValueIndex, 1)[0]; // console.log("min fvalue node", minFValueNode);

              if (minFValueNode.x === this.endNode.x && minFValueNode.y === this.endNode.y) {
                // console.log("找到了路径点");
                var nextNode = minFValueNode.parent;
                cellNodeList.push(minFValueNode);

                while (!(nextNode.x === this.statrNode.x && nextNode.y === this.statrNode.y)) {
                  cellNodeList.push(nextNode);
                  nextNode = nextNode.parent;
                }

                break;
              }

              this.closeList.push(minFValueNode);
              var nearbyNodeList = this.findNearbyNodeList(minFValueNode, this.mapNodeList); //附近点的节点列表
              //遍历此附近节点

              for (var i = 0; i < nearbyNodeList.length; i++) {
                var node = nearbyNodeList[i];

                if (this.checkIsInList(node, this.closeList)) {
                  continue;
                }

                if (this.checkIsInList(node, this.openList)) {
                  //检查节点是否在openlist 里面。如果在需要判断是否更新parentNode
                  if (node.parent.gValue < minFValueNode.gValue) {
                    node.setParent(minFValueNode);
                    node.gValue = minFValueNode.gValue + this.getDistance(node.parent, node);
                    node.hValue = this.getDistance(node, this.endNode);
                  }
                } else {
                  //如果不在 ，那么需要给此点设置新的父节点，然后加入到openList里面 并且计算fvalue
                  node.setParent(minFValueNode);
                  node.gValue = minFValueNode.gValue + this.getDistance(node.parent, node);
                  node.hValue = this.getDistance(node, this.endNode);
                  this.openList.push(node);
                }
              }
            }

            cellNodeList = cellNodeList.reverse(); //倒序整理列表

            var list = [];

            for (var _i = 0; _i < cellNodeList.length; _i++) {
              list.push([cellNodeList[_i].x, cellNodeList[_i].y]);
            }

            return list;
          }
        }, {
          key: "getDistance",
          value: function getDistance(p1, p2) {
            return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          }
        }, {
          key: "findNearbyNodeList",
          value: function findNearbyNodeList(targetNode, targetList) {
            var dirList = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            var list = [];

            for (var i = 0; i < dirList.length; i++) {
              var dir = dirList[i];
              var endPosX = targetNode.x + dir[0];
              var endPosY = targetNode.y + dir[1];
              var cellNode = targetList.getValue(endPosX, endPosY);

              if (cellNode && !cellNode.isHaveObs) {
                list.push(cellNode);
              }
            }

            return list;
          }
        }, {
          key: "findMinFvalueNode",
          value: function findMinFvalueNode(list) {
            var mValue = Number.MAX_VALUE;
            var index = null;

            for (var i = 0; i < list.length; i++) {
              var fValue = list[i].getFValue();

              if (fValue < mValue) {
                mValue = fValue;
                index = i;
              }
            }

            return index;
          }
        }, {
          key: "checkIsInList",
          value: function checkIsInList(targetNode, targetList) {
            for (var i = 0; i < targetList.length; i++) {
              var node = targetList[i];

              if (node.x === targetNode.x && node.y === targetNode.y) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "updateObsData",
          value: function updateObsData(dataList) {
            //更新障碍物数据
            for (var i = 0; i < dataList.length; i++) {
              var data = dataList[i];
              var cellNode = this.mapNodeList.getValue(data[0], data[1]); // cellNode.setParent

              cellNode.setObs(true);
            }
          }
        }]);

        return FindPathWithAStart;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Enemys/EnemyBase.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js", "../util/State.js", "../util/BezierN.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js", "../EnemyController.js", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, v3, find, SkeletalAnimationComponent, Tween, v2, Quat, Vec3, isValid, ProgressBarComponent, BaseObject, State, BezierN, GroundMapCtl, FindPathWithAStart, DeadEnemyObj, GameController, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, EnemyBase;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      find = _cc.find;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      Tween = _cc.Tween;
      v2 = _cc.v2;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      isValid = _cc.isValid;
      ProgressBarComponent = _cc.ProgressBarComponent;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_utilFindPathWithAStartJs) {
      FindPathWithAStart = _utilFindPathWithAStartJs.FindPathWithAStart;
    }, function (_EnemyControllerJs) {
      DeadEnemyObj = _EnemyControllerJs.DeadEnemyObj;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c8d3fW25B9NIZ69bxowfjcm", "EnemyBase", undefined); // import { Besize } from '../util/Besize';


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyBase", EnemyBase = (_dec = ccclass('EnemyBase'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(EnemyBase, _BaseObject);

        function EnemyBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.pathList = [];
          _this.state = new State();
          _this.currentPathIndex = 0;
          _this.beLockedMaxNum = GameController.enemyBeLockMaxNum;
          _this.currentbeLockedCount = 0;
          _this.cameraNode = null;
          _this.healthBar = null;
          _this.gameConfigJson = null;
          _this.currentHealthCount = 0;
          _this.enemyCtl = null;
          _this.currentMoveTw = null;
          _this.groundMapCtl = null;
          _this.beAttackedCb = null;
          _this.bezierPathList = [];
          _this.currentBoneAnimName = "";
          _this.enemyColonyCtl = null;

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, gameController, startPos, endPos) {
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig, gameController);

            if (this.getMoveType().indexOf("Fly") > -1) {
              this.node.position = v3(this.node.position.x, 10, this.node.position.z);
            }

            this.groundMapCtl = find("GameController").getComponent(GroundMapCtl);
            this.gameConfigJson = gameConfig; // this.healthCount = this.gameConfigJson[this.objectType].HealthCount;

            this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
            this.currentHealthCount = this.healthCount;
            var angle = this.getLookAtAngle(this.node.position, endPos);
            this.node.worldRotation = angle;
          }
        }, {
          key: "enterShowBossEnter",
          value: function enterShowBossEnter() {
            if (this.currentMoveTw) {
              this.currentMoveTw.stop();
            }
          }
        }, {
          key: "contiuePlayMoveAnim",
          value: function contiuePlayMoveAnim() {
            var _this2 = this; //继续行走


            if (this.currentMoveTw) {
              var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              var state = skeleteAnim.getState(this.currentBoneAnimName);
              state.speed = 3;
              this.scheduleOnce(function () {
                // this.currentMoveTw.start();
                var skeleteAnim = _this2.rootNode.getComponent(SkeletalAnimationComponent);

                var currentState = skeleteAnim.getState(_this2.currentBoneAnimName);
                currentState.speed = 1;
              }, 3);
            }
          }
        }, {
          key: "showEnemyEnterAnim",
          value: function showEnemyEnterAnim(index, enemtCtl, startPos, endPos) {
            var _this3 = this;

            var node = this.node;
            this.enemyCtl = enemtCtl;
            this.enemyCtl.node.on("frozen-all-enemy", this.forzenSelf.bind(this), this); // this.gameController = gameCtl;
            // this.enemyCtl.node.on('enter-show-boss-enter-state', this.enterShowBossEnter, this);
            // this.enemyCtl.node.on("enter-continue-play-move-anim", this.contiuePlayMoveAnim, this);

            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              var pos = node.position;
              tw.delay(0.2 * index); // let moveType = this.getMoveType();
              // tw.set({ scale: v3(0, moveType.indexOf("Fly") > -1 ? 10 : 0, 0) })

              tw.show();
              tw.call(function () {
                _this3.gameController.node.emit("play-audio", _this3.getShowAudio());

                node.active = true;
              });
              tw.to(0.1, {
                scale: v3(1, 1, 1)
              }); // bounceOut quartIn
              // tw.to(0.4, { position: v3(pos.x, 0, pos.z) }, { easing: "bounceOut" })
              // tw.to(0.4, { position: v3(pos.x, 0, pos.z) })

              tw.call(function () {
                // node.getComponent(EnemyBase).startRun();
                _this3.startRun(startPos, endPos);

                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "startRun",
          value: function startRun(startPos, endPos) {
            // console.log("start pos ", startPos);
            this.state.setState("run");
            var moveType = this.getMoveType();

            if (moveType === "Walk") {
              this.proceeWalkLogic(startPos, endPos);
            } else if (moveType === 'Fly') {
              if (this.getIsColony()) ;else {
                this.processFlyLogic(startPos, endPos);
              }
            }
          }
        }, {
          key: "processFlyLogic",
          value: function processFlyLogic(startPos, endPos) {
            var _this4 = this; //处理敌人飞行的逻辑
            //1首先设置一条敌人需要飞过的控制点\
            // let endPoint = this.groundMapCtl.getMapNodeList().getValue(endPos.x, endPos.y).position;
            // this.node.position = endPoint;


            if (this.state.getState() !== 'run') {
              //当前的游戏状态是run , 如果当前的状态不是运行状态，那么需要打断飞行移动
              return;
            }

            var flyHeight = 10; // console.log("处理飞行的逻辑");

            var mapSize = this.groundMapCtl.getMapSize();
            var posIndexList = [v2(startPos.x, startPos.y)];

            for (var i = 0; i < 8; i++) {
              posIndexList.push(v2(Math.round(Math.random() * (mapSize.x - 1)), Math.round(Math.random() * (mapSize.y - 1))));
            }

            posIndexList.push(endPos);
            var posList = [];

            for (var _i = 0; _i < posIndexList.length; _i++) {
              var posv2 = posIndexList[_i]; // console.log("posv2", posv2);

              var node = this.groundMapCtl.getMapNodeList().getValue(posv2.x, posv2.y);

              if (node) {
                var nodePos = node.position;
                posList.push(v3(nodePos.x, flyHeight, nodePos.z));
              } // let pos = v3(posv2.x, 0, posv2.y);

            }

            var bezier = new BezierN(posList);
            var endPosList = bezier.getPointList(200); // this.node.position = endPosList[0];

            this.currentMoveTw = this.processMoveAction(endPosList);
            this.currentMoveTw.call(function () {
              //播放攻击敌人的动画
              // this.state.setState("enter-attack-state");
              _this4.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this4.rootNode.getComponent(SkeletalAnimationComponent); // skeleteAnim.play(this.currentBoneAnimName);


              var animLength = skeleteAnim.getState("骨架|AttackAnim").length; // this.schedule(this.shootOneBossBullet, animLength)

              _this4.shootOneBossBullet().then(function () {
                //在飞一遍
                var startPosRandomList = [v2(0, 0), v2(0, 10), v2(10, 0), v2(10, 10)];
                var randomIndex = Math.round(Math.random() * (startPosRandomList.length - 1));

                _this4.processFlyLogic(startPosRandomList[randomIndex], endPos);
              });
            });
            this.currentMoveTw.start(); // // console.log("start pos", startPos);
            // posIndexList.push(endPos);
            // let posList: Vec3[] = [];
            // for (let i = 0; i < posIndexList.length; i++) {
            //     let indexPos = posIndexList[i];
            //     let pos = this.groundMapCtl.getMapNodeList().getValue(indexPos.x, indexPos.y).position;
            //     posList.push(v3(pos.x, flyHeight, pos.z));
            // }
            // posList.push(v3(endPos.x, flyHeight, endPos.y));
            // // posList.push(v3(endPos.x, flyHeight, endPos.y));
            // // let bezier = new BezierN(posList);
            // // let pathList = bezier.getPointList(30);
            // this.currentMoveTw = this.processMoveAction(posList);
            // this.currentMoveTw.call(() => {
            //     console.log("移动结束");
            // })
            // this.currentMoveTw.start();
            // 随机几个控制点
          }
        }, {
          key: "getOneRandomMapPos",
          value: function getOneRandomMapPos() {
            //从地图里面随机一个点
            var mapSize = this.groundMapCtl.getMapSize();
            return v2(Math.round(Math.random() * (mapSize.x - 1)), Math.round(Math.random() * (mapSize.y - 1)));
          }
        }, {
          key: "processMoveAction",
          value: function processMoveAction(pathList) {
            var _this5 = this; //处理移动的动作


            var tw = new Tween(this.node);

            var setTwData = function setTwData(tw, index) {
              var time = 0;
              var angle = new Quat();

              if (index === 0) {
                var dis = v3(_this5.node.position).subtract(pathList[index]).length();
                time = dis / _this5.moveSpeed;
                angle = _this5.getLookAtAngle(_this5.node.position, pathList[index]);
              } else {
                var _dis = v3(pathList[index - 1]).subtract(pathList[index]).length();

                angle = _this5.getLookAtAngle(pathList[index - 1], pathList[index]);
                time = _dis / _this5.moveSpeed;
              } // tw.call(() => {


              tw.call(function () {
                _this5.node.lookAt(pathList[index]); // this.schedule(rotationAnim, 1 / 60);

              });
              tw.to(time, {
                position: pathList[index] // worldRotation: angle

              });
              tw.call(function () {// this.unschedule(rotationAnim);
              });
            };

            for (var i = 0; i < pathList.length; i++) {
              setTwData(tw, i);
            }

            return tw;
          }
        }, {
          key: "proceeWalkLogic",
          value: function proceeWalkLogic(startPos, endPos) {
            var _this6 = this; //处理走路的逻辑


            if (this.state.getState() !== 'run') {
              return;
            }

            var mapNodeList = this.groundMapCtl.getMapNodeList();
            var obsPosList = this.groundMapCtl.getObsPosList();
            var pathTool = new FindPathWithAStart(mapNodeList, [startPos.x, startPos.y], [endPos.x, endPos.y]);
            var obsPosDataList = [];

            for (var i = 0; i < obsPosList.length; i++) {
              var obsPos = obsPosList[i];
              obsPosDataList.push([obsPos.x, obsPos.y]);
            }

            pathTool.updateObsData(obsPosDataList);
            var pathList = pathTool.findPathList();
            var pathPosList = [];

            for (var _i2 = 0; _i2 < pathList.length; _i2++) {
              var pos = pathList[_i2];
              pathPosList.push(this.groundMapCtl.getMapNodeList().getValue(pos[0], pos[1]).position);
            }

            var bezier = new BezierN(pathPosList); //通过获取到的 路径点，来制作一条贝塞尔曲线

            this.bezierPathList = bezier.getPointList(50); //路径密度为20

            this.bezierPathList = this.bezierPathList.slice(0, this.bezierPathList.length - 5);

            if (this.node.position.equals(this.bezierPathList[this.bezierPathList.length - 1])) {
              console.log("不用再走一遍逻辑了");
              this.toBeAttack().then(function () {
                _this6.proceeWalkLogic(startPos, endPos);
              });
            } else {
              this.currentMoveTw = this.processMoveAction(this.bezierPathList);
              this.currentMoveTw.call(function () {
                // this.state.setState("enter-attack-state");
                _this6.toBeAttack().then(function () {
                  _this6.proceeWalkLogic(startPos, endPos);
                });
              });
              this.currentMoveTw.start();
            } // this.state.setState("run");

          }
        }, {
          key: "toBeAttack",
          value: function toBeAttack() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this7.rootNode.getComponent(SkeletalAnimationComponent);

              skeleteAnim.play(_this7.currentBoneAnimName);
              var stateAnim = skeleteAnim.getState(_this7.currentBoneAnimName);
              var animLength = stateAnim.length;
              stateAnim.repeatCount = 1;

              _this7.gameController.node.emit("play-audio", _this7.shootAudio);

              var tw = new Tween(_this7.node);
              tw.delay(_this7.animSpeedMulOffset * animLength);
              tw.call(function () {
                console.log("普通敌人发动攻击", _this7.getBaseAttackDamage()); // this.enemyCtl.
                // this.gameController.getComponent(GameController).beatt

                _this7.gameController.enemyAttacked(_this7.getBaseAttackDamage());
              });
              tw.delay((1 - _this7.animSpeedMulOffset) * animLength);
              tw.call(function () {
                resolve();
              });
              tw.start(); // this.scheduleOnce(() => {
              //     // this.enemyCtl.enemyAttacked();//敌人发动了攻击
              //     //普通敌人的攻击
              //     this.enemyCtl.enemyAttacked();//敌人发动了攻击
              // }, this.animSpeedMulOffset * animLength);
            });
          }
        }, {
          key: "getLookAtAngle",
          value: function getLookAtAngle(startPos, targetPoint) {
            // //获取到朝向的角度
            var dir = v3(startPos).subtract(targetPoint).normalize();
            var quat = new Quat();
            Quat.fromViewUp(quat, dir, Vec3.UP); // console.log("quat", quat);
            // rotateAround
            // startPos.
            // this.node.rotate/

            return quat;
          }
        }, {
          key: "forzenSelf",
          value: function forzenSelf() {
            //冰冻自己
            if (this.currentMoveTw) {
              this.currentMoveTw.stop();
              this.state.setState("forzen");
              var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              var stateAnim = skeleteAnim.getState(this.currentBoneAnimName);

              if (stateAnim) {
                stateAnim.pause();
              }
            }
          }
        }, {
          key: "shootOneBossBullet",
          value: function shootOneBossBullet() {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              _this8.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this8.rootNode.getComponent(SkeletalAnimationComponent);

              skeleteAnim.play(_this8.currentBoneAnimName);
              var animLength = skeleteAnim.getState(_this8.currentBoneAnimName).length;
              var tw = new Tween(_this8.node);
              tw.delay(_this8.animSpeedMulOffset * animLength);
              tw.call(function () {
                _this8.enemyCtl.bossShootOneEgg(_this8.node);
              });
              tw.delay((1 - _this8.animSpeedMulOffset) * animLength);
              tw.call(function () {
                _this8.currentBoneAnimName = "骨架|MoveAnim";
                skeleteAnim.play(_this8.currentBoneAnimName);

                if (resolve) {
                  resolve();
                }
              });
              tw.start();
            }); // this.scheduleOnce(() => {
            //     // this.enemyCtl.enemyAttacked();//敌人发动了攻击
            //     this.enemyCtl.bossShootOneEgg(this.node);
            // }, this.animSpeedMulOffset * animLength);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this9 = this; // this.state.addState("enter-attack-state", () => {
            //     console.log("移动结束");
            //     //进入攻击状态
            //     this.currentBoneAnimName = "骨架|AttackAnim";
            //     let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            //     skeleteAnim.play(this.currentBoneAnimName);
            //     let animLength = skeleteAnim.getState(this.currentBoneAnimName).length;
            //     this.scheduleOnce(() => {
            //         // this.enemyCtl.enemyAttacked();//敌人发动了攻击
            //         //普通敌人的攻击
            //         // this.enemyCtl.enemyAttacked();//敌人发动了攻击
            //     }, this.animSpeedMulOffset * animLength);
            // })


            this.state.addState("over", function () {
              _this9.enemyCtl.removeEnemyInList(_this9.node);

              _this9.node.destroy();
            });
            this.state.addState("to-dead", function () {
              _this9.enemyCtl.pushOneEnemyDeadData(new DeadEnemyObj(_this9.objectType, _this9.getCurrentGoldCount()));

              if (_this9.currentMoveTw) {
                _this9.currentMoveTw.stop();
              }

              var tw = new Tween(_this9.rootNode);
              _this9.node.eulerAngles = v3(0, 0, 0);

              _this9.unscheduleAllCallbacks();

              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this9.node.position = v3(_this9.node.position.x, 0, _this9.node.position.z);
                _this9.rootNode.active = false;
                _this9.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this9.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this9.caidaiEffect.active = true;
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                _this9.gameController.showAddGoldAnimEffect(_this9.getCurrentGoldCount(), v3(_this9.node.position.x, 0, _this9.node.position.z));
              });
              tw.delay(1);
              tw.call(function () {
                _this9.state.setState("over");
              });
              tw.start();
            });
            this.state.addState("run", function () {
              //开始移动 
              var skeleteAnim = _this9.rootNode.getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                _this9.currentBoneAnimName = "骨架|MoveAnim"; // console.log(this.objectType + "播放移动动作", this.currentBoneAnimName);

                skeleteAnim.play(_this9.currentBoneAnimName); // let clips = skeleteAnim.clips;
                // let moveClip = null;
                // for (let i = 0 ; i < clips.length ; i ++){
                //     // moveClips = clips[i];
                //     let clip = clips[i];
                //     console.log("clip name", clip.name);
                //     if (clip.name === '骨架|MoveAnim'){
                //         moveClip = clip;
                //     }
                // }
                // if (moveClip){
                //     skeleteAnim.play(moveClip.)
                // }
              } // console.log("start move");
              // let tw = new Tween(this.node);
              // let moveTime = new Vec3(this.startPos).subtract(this.endPos).length() / this.moveSpeed;
              // tw.to(moveTime, { position: this.endPos });
              // tw.call(() => {
              //     // this.state.setState("to-dead");
              // })
              // tw.to(0.2, { scale: v3(0, 0, 0) });
              // tw.call(() => {
              //     this.state.setState("over");
              // })
              // tw.start();
              // this.currentMoveTw = tw;
              // 开始运行之后，计算一条 最短路径
              // let pathList = this.groundMapCtl.getPathList();
              // if (this.healthBar) {
              //     // this.healthBar.active = true;
              // }

            });
            this.node.on("be-attacked", function (data) {
              //被攻击
              // console.log("被攻击", attackNum);
              if (_this9.state.getState() !== 'run') {
                return;
              }

              _this9.beAttackedCb = data.cb;
              _this9.currentHealthCount -= data.baseAttackNum;
              var baseGasNum = data.baseGasNum; //取处基础气值

              _this9.currentGasNum += baseGasNum;
              var tw = new Tween(_this9.node);
              tw.to(0.05, {
                scale: v3(1.05, 0.98, 1.05)
              });
              tw.to(0.05, {
                scale: v3(1, 1, 1)
              });
              tw.start(); // let beAttackAnimName = "骨架|BeAttackAnim"; //被攻击的动画
              // let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              // if (skeleteAnim) {
              //     skeleteAnim.play(beAttackAnimName);
              //     let stateAnim = skeleteAnim.getState(beAttackAnimName);
              //     if (stateAnim && !stateAnim.isPlaying) {
              //         let length = stateAnim.length;
              //         this.scheduleOnce(() => {
              //             skeleteAnim.play(this.currentBoneAnimName);
              //         }, length);
              //     }
              //     // let beAttakcClick = skeleteAnim.clips
              // }
              // scale = 0;
              // let scale = this.currentGasNum / this.baseGasNum;
              // console.log("scale", scale);
              // this.currentMoveTw.stop();
              // this.node.
              // stop
              // Tween.
              // let tw = new Tween(this.node);
              // tw.to(0.2, { scale: v3(scale, scale, scale) });
              // tw.call(() => {
              // this.currentMoveTw
              // })
              // tw.start();

              if (_this9.currentHealthCount <= 0) {
                _this9.currentHealthCount = 0;

                if (_this9.beAttackedCb) {
                  _this9.beAttackedCb(true); //被打死了

                }

                _this9.state.setState("to-dead");
              }

              if (isValid(_this9.healthBar)) {
                _this9.healthBar.getComponent(ProgressBarComponent).progress = _this9.currentHealthCount / _this9.healthCount;
              }
            });
          }
        }, {
          key: "start",
          value: function start() {// this.state.setState("ready");
          }
        }, {
          key: "getIsDead",
          value: function getIsDead() {
            if (this.state.getState() === 'over' || this.state.getState() === 'to-dead') {
              return true;
            }

            return false;
          }
        }, {
          key: "getIsCanLock",
          value: function getIsCanLock() {
            if (this.currentbeLockedCount < this.beLockedMaxNum) {
              return true;
            }

            return false;
          }
        }, {
          key: "setBeLocked",
          value: function setBeLocked(tower) {
            this.currentbeLockedCount++;
          }
        }, {
          key: "unSetBeLocked",
          value: function unSetBeLocked(tower) {
            this.currentbeLockedCount--;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.enemyColonyCtl) {
              this.enemyColonyCtl.update(deltaTime);
            } // Your update function goes here.
            //     if (this.state.getState() === 'run') {
            //         if (!this.currentMovePos) {
            //             if (this.currentMoveIndex < this.bezierPathList.length) {
            //                 this.currentMovePos = this.bezierPathList[this.currentMoveIndex];
            //             } else {
            //                 //移动结束
            //                 console.log("move over");
            //             }
            //         } else {
            //             let dir = v3(this.currentMovePos).subtract(this.node.position).normalize();
            //             let dis = dir.length();
            //             console.log("dis", dis);
            //             if (dis > 1) {
            //                 this.node.position = v3(this.node.position).add(dir.normalize().multiplyScalar(deltaTime));
            //             } else {
            //                 this.currentMoveIndex++;
            //                 this.currentMovePos = null;
            //             }
            //         }
            //         // if (this.healthBar && this.cameraNode) {
            //         //     let pos: Vec3 = v3(0, 0, 0);
            //         //     this.cameraNode.convertToUINode(this.node.getWorldPosition(), this.healthBar.parent, pos);
            //         //     pos.y += 50;
            //         //     // console.log("pos", pos);
            //         //     this.healthBar.setPosition(pos);
            //         //     this.healthBar.active = true;
            //         //     // this.healthBar.setScale(v3(pos.z, pos.z, pos.z));
            //         // }
            //     }

          }
        }, {
          key: "playBossEnterAnim",
          value: function playBossEnterAnim() {
            var _this10 = this; //播放boss 的进场动画


            return new Promise(function (resolve, reject) {
              var skeleteAnim = _this10.rootNode.getComponent(SkeletalAnimationComponent);

              var clips = skeleteAnim.clips;
              var showClip = undefined;

              for (var i = 0; i < clips.length; i++) {
                var clip = clips[i];

                if (clip.name === 'boss-show') {
                  showClip = clip;
                }
              }

              if (showClip) {
                skeleteAnim.play('boss-show');

                _this10.scheduleOnce(function () {
                  resolve();
                }, showClip.length);
              } else {
                skeleteAnim.play("骨架|MoveAnim");

                _this10.scheduleOnce(function () {
                  resolve();
                }, 1);
              }
            });
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            // this.node.off('enter-show-boss-enter-state', this.enterShowBossEnter, this);
            // this.node.off('enter-continue-play-move-anim', this.contiuePlayMoveAnim, this);
            if (this.enemyCtl && isValid(this.enemyCtl.node)) {
              this.enemyCtl.node.off("frozen-all-enemy", this.forzenSelf, this);
            } // this.unschedule(this.shootOneBossBullet);

          }
        }, {
          key: "getColonyComCtl",
          value: function getColonyComCtl() {
            return this.enemyColonyCtl;
          }
        }]);

        return EnemyBase;
      }(BaseObject), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "caidaiEffect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Enemys/EnemyBullet.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js", "../util/State.js", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, Tween, v3, BaseObject, State, GameController, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, EnemyBullet;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Tween = _cc.Tween;
      v3 = _cc.v3;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17cf4gdnXZPP6GfTwWTkX9d", "EnemyBullet", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyBullet", EnemyBullet = (_dec = ccclass('EnemyBullet'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(EnemyBullet, _BaseObject);

        function EnemyBullet() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyBullet);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyBullet)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new State();
          _this.accY = GameController.accY;
          _this.currentSpeed = 0;
          _this.endPos = null;

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBullet, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this.state.addState("move-end", function () {
              // console.log("移动结束, 可以爆炸了");
              var tw = new Tween(_this2.rootNode);
              tw.to(0.1, {
                scale: v3(2, 2, 2)
              });
              tw.hide();
              tw.call(function () {
                //爆炸结束
                _this2.gameController.enemyAttacked(_this2.getBaseAttackDamage());

                _this2.caidaiEffect.active = true;
              });
              tw.delay(0.8 + Math.random() * 0.5), tw.call(function () {
                _this2.caidaiEffect.active = false;

                _this2.node.destroy();
              });
              tw.start();
            });
          }
        }, {
          key: "init",
          value: function init(gameConfig, gameCtl, endPos) {
            _get(_getPrototypeOf(EnemyBullet.prototype), "init", this).call(this, gameConfig, gameCtl);

            this.endPos = endPos;
            this.caidaiEffect.eulerAngles = v3(0, Math.random() * 360, 0);
            var scale = Math.random() * 0.2 + 0.8;
            this.caidaiEffect.scale = v3(scale, scale, scale);
            this.state.setState("run");
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.state.getState() === "run") {
              //如果游戏的状态是run ，那么鸡蛋做自由落体运动
              this.currentSpeed += this.accY; // this.node.position.add(v3(0,this.currentSpeed * deltaTime,0))

              this.node.position = v3(this.node.position).add(v3(0, this.currentSpeed * deltaTime, 0));
              var dis = this.node.position.y - this.endPos.y;

              if (dis < 1) {
                console.log("停止");
                this.state.setState("move-end");
              }
            }
          }
        }]);

        return EnemyBullet;
      }(BaseObject), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "caidaiEffect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///EnemyController.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./util/State.js", "./GroundTiled/GroundTiled.js", "./GroundMapCtl.js", "./Enemys/EnemyBase.js", "./Enemys/EnemyBullet.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _classCallCheck, _applyDecoratedDescriptor, _inherits, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, JsonAsset, Prefab, Node, find, v3, Tween, CameraComponent, instantiate, Vec2, isValid, Component, State, GroundTiled, GroundMapCtl, EnemyBase, EnemyBullet, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, ccclass, property, DeadEnemyObj, EnemyController;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      find = _cc.find;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      CameraComponent = _cc.CameraComponent;
      instantiate = _cc.instantiate;
      Vec2 = _cc.Vec2;
      isValid = _cc.isValid;
      Component = _cc.Component;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GroundTiledGroundTiledJs) {
      GroundTiled = _GroundTiledGroundTiledJs.GroundTiled;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_EnemysEnemyBulletJs) {
      EnemyBullet = _EnemysEnemyBulletJs.EnemyBullet;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9eb73bkCLlAgoJJ0ubFFvcV", "EnemyController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DeadEnemyObj", DeadEnemyObj = //死去敌人的结构体
      // public enemyIconSpriteFrame = 0; //敌人的icon
      function DeadEnemyObj(type, dropGoldCount) {
        _classCallCheck(this, DeadEnemyObj);

        this.enemyType = "";
        this.dropGoldCount = 0;
        this.enemyType = type; //敌人的种类

        this.dropGoldCount = dropGoldCount; //敌人的掉落的金币数目 
      });

      _export("EnemyController", EnemyController = (_dec = ccclass('EnemyController'), _dec2 = property({
        type: JsonAsset
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(EnemyController, _Component);

        function EnemyController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameConfigRes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemysPrefabList", _descriptor2, _assertThisInitialized(_this));

          _this.gameConfig = null;
          _this.currentWaveIndex = 0;
          _this.waveData = null;
          _this.state = new State();
          _this.addEnemyDuraction = 1;
          _this.enemyNodeList = [];
          _this.currentRandomEnemyTypeList = [];

          _initializerDefineProperty(_this, "startPosNodeList", _descriptor3, _assertThisInitialized(_this));

          _this.endPos = null;

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bosssPrefabList", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyBulletPrefabList", _descriptor7, _assertThisInitialized(_this));

          _this.gameController = null;
          _this.allWaveAddOverCb = null;
          _this.allEnemyDeadCb = null;
          _this.currentLevelDeadEnemyDataList = [];
          _this.uiControllerNode = null;
          return _this;
        }

        _createClass(EnemyController, [{
          key: "onLoad",
          // @property({type: JsonAsset})
          // public GameLevelConfig: JsonAsset = null;
          value: function onLoad() {
            var _this2 = this;

            this.node.on("destroy-all-enemy", function (cb) {
              //删除当前的所有敌人
              var totalGold = 0;

              for (var i = 0; i < _this2.enemyNodeList.length; i++) {
                var node = _this2.enemyNodeList[i];
                totalGold += node.getComponent(EnemyBase).getCurrentGoldCount();
                node.destroy();
              }

              _this2.enemyNodeList = [];

              if (cb) {
                cb(totalGold); //销毁的敌人的 持有的金币个数
              }
            });
            this.node.on("init-level-label", function () {
              _this2.node.emit("refer-current-wave-level", _this2.gameController.getCurrentLevelNum(), 0);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            this.uiControllerNode = find("Canvas"); // Your initialization goes here.

            this.gameConfig = this.gameConfigRes.json;
            this.gameController = this.node.getComponent(GameController);
            this.endPos = v3(0, 0, 0);
            this.state.addState("enter-next-wave", function () {
              if (_this3.currentWaveIndex == _this3.waveData['EnemyType'].length) {
                // this.state.setState("add-enemt-over");
                // this.state.setState("add-one-boss")
                // console.log("游戏结束");
                return;
              }

              _this3.currentRandomEnemyTypeList = _this3.waveData["EnemyType"][_this3.currentWaveIndex];
              _this3.addEnemyDuraction = _this3.waveData['AddEnemyDuraction'][_this3.currentWaveIndex];

              _this3.node.emit("refer-current-wave-level", _this3.gameController.getCurrentLevelNum(), _this3.currentWaveIndex);

              if (_this3.currentWaveIndex === _this3.waveData['EnemyType'].length - 1) {
                if (_this3.allWaveAddOverCb) {
                  _this3.allWaveAddOverCb();

                  _this3.allWaveAddOverCb = null;

                  _this3.addOneBossEnemy();
                }
              } else {
                _this3.addOneWaveEnemy().then(function () {
                  console.log("一波敌人增加完成");
                  _this3.currentWaveIndex++;

                  _this3.scheduleOnce(function () {
                    if (_this3.state.getState() === 'game-over') {
                      return;
                    }

                    _this3.state.setState("enter-next-wave");
                  }, _this3.addEnemyDuraction);
                });
              }
            }); // this.node.on("player-click-game", () => {
            //     this.state.setState("enter-next-wave");
            // });
          }
        }, {
          key: "playBossEnterAnim",
          value: function playBossEnterAnim(bossNode) {
            var _this4 = this; //播放boss 的进场动画
            // find('Canvas').getComponent(UIController).showBossIconAnim();


            return new Promise(function (resolve, reject) {
              var enemyBase = bossNode.getComponent(EnemyBase);

              if (enemyBase) {
                enemyBase.playBossEnterAnim().then(function () {
                  resolve();
                });
              } else {
                _this4.scheduleOnce(function () {
                  resolve();
                }, 1);
              }
            });
          }
        }, {
          key: "startGame",
          value: function startGame() {
            var _this5 = this;

            this.currentLevelDeadEnemyDataList = []; //在这里需要初始化一些游戏数据 

            this.currentWaveIndex = 0;
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()]; // this.waveData = this.GameLevelConfig.json['Level_' + this.gameController.getCurrentLevelNum()];

            this.uiControllerNode.emit("show-start-dialog", this.gameController.getCurrentLevelNum(), function () {
              // console.log("开始对话内容播放结束");
              // this.scheduleOnce(() => {
              //     this.state.setState("enter-next-wave");
              // }, 2.5)
              //开始点击 塔的基座的 引导操作
              _this5.uiControllerNode.emit("show-guide", function () {
                //开始点击 建造塔的 引导操作
                _this5.uiControllerNode.emit("show-guide", function () {
                  _this5.scheduleOnce(function () {
                    _this5.state.setState("enter-next-wave");
                  }, 2.5);
                });
              });
            }); // this.scheduleOnce(() => {
            // this.state.setState("enter-next-wave");
            // }, 3);

            Promise.all([new Promise(function (resolve, reject) {
              _this5.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this5.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利");

              _this5.uiControllerNode.emit("show-end-dialog", _this5.gameController.getCurrentLevelNum(), function () {
                _this5.gameController.gameWin(_this5.currentLevelDeadEnemyDataList);
              });
            });
          }
        }, {
          key: "continueGame",
          value: function continueGame() {
            var _this6 = this;

            this.currentWaveIndex--;
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()]; // this.waveData = this.GameLevelConfig['Level_' + this.gameController.getCurrentLevelNum()];

            this.state.setState("enter-next-wave");
            Promise.all([new Promise(function (resolve, reject) {
              _this6.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this6.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利");

              _this6.gameController.gameWin(_this6.currentLevelDeadEnemyDataList);
            });
          }
        }, {
          key: "pushOneEnemyDeadData",
          value: function pushOneEnemyDeadData(enemyDeadData) {
            console.log("push one enemy dead data", enemyDeadData);
            this.currentLevelDeadEnemyDataList.push(enemyDeadData);
            this.gameController.playerData.activeEnemy(enemyDeadData.enemyType);
          }
        }, {
          key: "pauseGame",
          value: function pauseGame() {} //暂停游戏
          // Scheduler.
          // showCameraFocusBoosAnim(bossNode: Node) {
          //     return new Promise((resolve, reject) => {
          //         //进入boss 展示的状态
          //         // this.node.emit("enter-show-boss-enter-state");
          //         // let tw = new Tween()
          //         // this.cameraNode.lookAt(bossNode.position)
          //         let endPos = v3(bossNode.position).add(v3(5, 2, 5));
          //         let endEulerAngles = v3(this.cameraNode.eulerAngles).add(v3(35, 0, 0))
          //         // this.cameraNode.position = v3(bossNode.position.x + 10, bossNode.position.y + 7,bossNode.position.z + 10)
          //         // this.cameraNode.position = v3(this.cameraNode.position).add(addPos);
          //         // this.cameraNode.lookAt(bossNode.position);
          //         // let eulerAngles = this.cameraNode.eulerAngles;
          //         // let addAngleValue = 25;
          //         // this.cameraNode.eulerAngles = v3(eulerAngles.x + 25, eulerAngles.y, eulerAngles.z);
          //         // this.cameraNode.eulerAngles
          //         let tw = new Tween(this.cameraNode);
          //         tw.to(0.5, {
          //             position: endPos,
          //             eulerAngles: endEulerAngles,
          //             // orthoHeight: 60
          //         },
          //             {
          //                 easing: "backOut"
          //             })
          //         // this.cameraNode.getComponent(CameraComponent).orthoHeight = 5;\
          //         tw.call(() => {
          //             if (resolve) {
          //                 resolve();
          //             }
          //         })
          //         tw.start();
          //         new Tween(this.cameraNode.getComponent(CameraComponent)).to(0.5, { orthoHeight: 6 }).start();
          //     })
          // }

        }, {
          key: "showCameraBackAnim",
          value: function showCameraBackAnim() {
            var _this7 = this; //播放镜头返回的动画


            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this7.cameraNode);
              tw.to(0.5, {
                position: v3(30, 42, 30),
                eulerAngles: v3(-45, 45, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
              new Tween(_this7.cameraNode.getComponent(CameraComponent)).to(0.5, {
                orthoHeight: 22
              }).start();
            });
          }
        }, {
          key: "addOneBossEnemy",
          value: function addOneBossEnemy() {
            var _this8 = this;

            console.log("增加一个boss");
            var indexList = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
            var randomIndex = Math.round(Math.random() * (indexList.length - 1));
            var pos = indexList[randomIndex];
            var nodeMapList = this.node.getComponent(GroundMapCtl).getMapNodeList();
            var node = nodeMapList.getValue(pos.x, pos.y);
            var type = this.currentRandomEnemyTypeList[0].type;
            var enemyNode = instantiate(this.bosssPrefabList[type]); // console.log("enemy node", enemyNode)

            enemyNode.parent = this.node;
            enemyNode.position = v3(node.position.x, 0, node.position.z);
            enemyNode.active = false;
            enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
            // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
            // addEnemyCount++;

            this.enemyNodeList.push(enemyNode);
            return new Promise(function (resolve, reject) {
              resolve(); // enemyNode.active = false;
            }).then(function () {//展示boss 出场界面 
              // return this.showCameraFocusBoosAnim(enemyNode)
              // return
            }).then(function () {
              return _this8.playBossEnterAnim(enemyNode);
            }).then(function () {// return this.showCameraBackAnim();
            }).then(function () {
              //敌人继续播放行走动画
              // return new Promise((resolve) => {
              //     this.scheduleOnce(() => {
              _this8.node.emit("enter-continue-play-move-anim"); //         resolve();
              //     }, 3)
              // })

            }).then(function () {
              enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(1, _this8, pos, new Vec2(5, 5));
            });
          }
        }, {
          key: "addOneWaveEnemy",
          value: function addOneWaveEnemy() {
            var _this9 = this; //增加一波敌人


            var promiseList = [];
            var indexList = this.node.getComponent(GroundMapCtl).getInEdageIndexList();
            var nodeMapList = this.node.getComponent(GroundMapCtl).getMapNodeList();
            var maxEnemyCount = 0;

            for (var i = 0; i < this.currentRandomEnemyTypeList.length; i++) {
              maxEnemyCount += this.currentRandomEnemyTypeList[i].count;
            }

            var typeList = [];

            for (var _i = 0; _i < this.currentRandomEnemyTypeList.length; _i++) {
              var waveData = this.currentRandomEnemyTypeList[_i];

              for (var _i2 = 0; _i2 < waveData.count; _i2++) {
                typeList.push(waveData.type);
              }
            }

            console.log("type list", typeList); // console.log("max enemy count", maxEnemyCount);
            // if (maxEnemyCount >= indexList.length) {
            //     console.error("数据错误");
            //     return;
            // }、

            var randomStartIndex = Math.round(Math.random() * indexList.length);

            if (this.currentWaveIndex === 0 && this.gameController.getCurrentLevelNum() === 0) {
              randomStartIndex = 0;
            }

            console.log("current wave", this.currentWaveIndex);
            console.log("current level", this.gameController.getCurrentLevelNum());

            var createOneEnemy = function createOneEnemy(index, type) {
              var startIndex = randomStartIndex + index;

              if (startIndex >= indexList.length) {
                startIndex -= indexList.length;
              }

              return new Promise(function (resolve, reject) {
                var indexV2 = indexList[startIndex];
                var node = nodeMapList.getValue(indexV2.x, indexV2.y); // this.scheduleOnce(() => {
                //     resolve();
                // }, 0.1 * index);

                if (isValid(node) && node.getComponent(GroundTiled)) {
                  var groundTiled = node.getComponent(GroundTiled);

                  if (groundTiled.getIsVoid()) {
                    var enemyNode = instantiate(_this9.enemysPrefabList[type]); // console.log("enemy node", enemyNode)

                    enemyNode.parent = _this9.node;
                    enemyNode.position = v3(node.position.x, 0, node.position.z);
                    enemyNode.active = false;
                    enemyNode.getComponent(EnemyBase).init(_this9.gameConfig, _this9.gameController, node.position, _this9.endPos);

                    _this9.enemyNodeList.push(enemyNode);

                    promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(index, _this9, indexV2, new Vec2(5, 5)));
                  }
                }
              });
            };

            for (var _i3 = 0; _i3 < typeList.length; _i3++) {
              createOneEnemy(_i3, typeList[_i3]);
            } // while (addEnemyCount < maxEnemyCount) {
            //     // addEnemyCount ++;
            //     // console.log("random index", randomIndex);
            //     if (randomIndex >= indexList.length) {
            //         randomIndex = 0;
            //     }
            //     let indexV2 = indexList[randomIndex];
            //     let node = nodeMapList.getValue(indexV2.x, indexV2.y);
            //     if (node && node.getComponent(GroundTiled)) {
            //         let groundTiled = node.getComponent(GroundTiled);
            //         if (groundTiled.getIsVoid()) {
            //             // console.log("找到了一个空位置");
            //             // let currentEnemyType = this.currentRandomEnemyTypeList
            //             // let enemyNode = instantiate(this.enenm)
            //             let waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
            //             let type = waveData.type;
            //             let count = waveData.count;
            //             if (waveAddEnemyCount >= count) {
            //                 waveAddEnemyCount = 0;
            //                 enemyTypeIndex++;
            //             }
            //             let enemyNode = instantiate(this.enemysPrefabList[type]);
            //             // console.log("enemy node", enemyNode)
            //             enemyNode.parent = this.node;
            //             enemyNode.position = v3(node.position.x, 0, node.position.z);
            //             enemyNode.active = false;
            //             enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos);
            //             // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
            //             promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, indexV2, new Vec2(5, 5)));
            //             addEnemyCount++;
            //             this.enemyNodeList.push(enemyNode);
            //             // console.log("增加一个敌人")
            //         }
            //         // randomIndex++
            //         randomIndex = Math.round(Math.random() * (indexList.length - 1));
            //     } else {
            //         addEnemyCount++;
            //     }
            // }


            return Promise.all(promiseList);
          }
        }, {
          key: "removeEnemyInList",
          value: function removeEnemyInList(node) {
            for (var i = 0; i < this.enemyNodeList.length; i++) {
              var enemy = this.enemyNodeList[i];

              if (enemy.uuid === node.uuid) {
                this.enemyNodeList.splice(i, 1);
              }
            }

            if (this.enemyNodeList.length === 0 && this.currentWaveIndex == this.waveData['EnemyType'].length - 1) {
              if (this.allEnemyDeadCb) {
                this.allEnemyDeadCb();
                this.allEnemyDeadCb = null;
              }
            }
          }
        }, {
          key: "getCurrentEnemyNodeList",
          value: function getCurrentEnemyNodeList() {
            return this.enemyNodeList;
          }
        }, {
          key: "enemyAttacked",
          value: function enemyAttacked(num) {
            this.gameController.getComponent(GameController).enemyAttacked(num);
          }
        }, {
          key: "frozenAllEnemy",
          value: function frozenAllEnemy() {
            //冰冻所有敌人
            // for (let i = 0 ; i < this.enem){
            this.state.setState("game-over");
            this.node.emit("frozen-all-enemy"); // }
          }
        }, {
          key: "bossShootOneEgg",
          value: function bossShootOneEgg(enemyNode) {
            //boss 发射了一枚鸡蛋
            var enemyCom = enemyNode.getComponent(EnemyBase);

            if (enemyCom) {
              var bulletType = enemyCom.getEnemyBulletType(); // console.log("敌人的子弹类型是 ", bulletType);
              // 根据敌人的子弹类型，初始化一个子弹

              var node = instantiate(this.enemyBulletPrefabList[bulletType]);
              node.parent = this.node;
              node.position = enemyNode.position;
              node.getComponent(EnemyBullet).init(this.gameController.getGameConfig().json, this.gameController, this.endPos);
            }
          }
        }, {
          key: "getDeadEnemyData",
          value: function getDeadEnemyData() {
            return this.currentLevelDeadEnemyDataList;
          }
        }]);

        return EnemyController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameConfigRes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemysPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startPosNodeList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bosssPrefabList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enemyBulletPrefabList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///TowerBuildBaseCtl.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./GroundMapCtl.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, v2, instantiate, v3, Tween, Component, GroundMapCtl, GameController, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, TowerBuildBaseCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      v2 = _cc.v2;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09d8fCuijNMwIzg+sejpSkn", "TowerBuildBaseCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBaseCtl", TowerBuildBaseCtl = (_dec = ccclass('TowerBuildBaseCtl'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TowerBuildBaseCtl, _Component);

        function TowerBuildBaseCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBuildBaseCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBuildBaseCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "towerBuildBasePrefab", _descriptor, _assertThisInitialized(_this));

          _this.groundTiledNodeList = null;
          _this.gameController = null;
          return _this;
        }

        _createClass(TowerBuildBaseCtl, [{
          key: "showTowerBuildBaseEnterAnim",
          value: function showTowerBuildBaseEnterAnim() {
            this.gameController = this.node.getComponent(GameController); // this.mapWidth = this.node.getComponent(GroundMapCtl).mapWidth;
            // this.mapHeight = this.node.getComponent(GroundMapCtl).mapHeight;
            // let currentActiveTowerBuildCount = this.gameController.playerData.currentActiveTowerBuildBaseCount;

            var towerBasePosList = this.gameController.getGameConfig().json['Level_' + this.gameController.getCurrentLevelNum()]['TowerBuildPos']; //     v2(4, 4),
            //     v2(4, 6),
            //     v2(6, 4),
            //     v2(6, 6)
            // ]

            this.groundTiledNodeList = this.node.getComponent(GroundMapCtl).getMapNodeList();
            var promiseList = []; // console.log("current active ", currentActiveTowerBuildCount);

            for (var i = 0; i < towerBasePosList.length; i++) {
              var posList = towerBasePosList[i];
              var v = v2(posList[0], posList[1]);
              var node = this.groundTiledNodeList.getValue(v.x, v.y);
              var towerBuildBase = instantiate(this.towerBuildBasePrefab);
              towerBuildBase.parent = this.node;
              towerBuildBase.position = v3(node.position.x, 20, node.position.z);
              this.node.getComponent(GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y); // this.towerBuildBaseList.push(towerBuildBase);
              // towerBuildBase.position.y = 10;

              promiseList.push(this.showEnterAnim(towerBuildBase, i));
            } // for (let i = 0; i < towerBasePosList.length; i++) {
            //     let v = towerBasePosList[i];
            //     let node = this.groundTiledNodeList.getValue(v.x, v.y);
            //     let towerBuildBase = instantiate(this.towerBuildBasePrefab);
            //     towerBuildBase.parent = this.node;
            //     towerBuildBase.position = v3(node.position.x, 20, node.position.z);
            //     this.node.getComponent(GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
            //     this.towerBuildBaseList.push(towerBuildBase);
            //     // towerBuildBase.position.y = 10;
            //     promiseList.push(this.showEnterAnim(towerBuildBase, i));
            // }


            return Promise.all(promiseList);
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim(target, index) {
            var _this2 = this;

            target.active = false;
            return new Promise(function (resolve, reject) {
              var tw = new Tween(target);
              var pos = target.position;
              tw.delay(index * 0.2);
              tw.call(function () {
                target.active = true;
              });
              tw.to(0.5, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: "bounceOut"
              });
              tw.call(function () {
                _this2.gameController.node.emit("play-audio", 'drop');

                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "frozenAllTowerBuildBase",
          value: function frozenAllTowerBuildBase() {
            this.node.emit("frozen-tower-build-base");
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return TowerBuildBaseCtl;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "towerBuildBasePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Data/PlayerData.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, PlayData;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3f2cezzOStAIpBjPLZ7+fqQ", "PlayerData", undefined);

      _export("PlayData", PlayData = /*#__PURE__*/function () {
        //当前激活的道具个数
        //当前的金币个数
        //当前的红心个数
        // public currentActiveEnemyMap:
        // public currentActiveTowerBuildBaseCount = 2; //当前激活的建造塔的位置的个数
        function PlayData(gameCtl) {
          _classCallCheck(this, PlayData);

          this.currentSkillCount = 2;
          this.currentActiveSkillCount = 3;
          this.currentGoldCount = 30000;
          this.gameController = null;
          this.currentLevelNum = 0;
          this.currentTowerLevelData = [];
          this.currentInitRedHeartCounnt = 3;
          this.currentRedHeardCount = 0;
          this.currentActiveEnemyMap = {};
          this.gameController = gameCtl; // localStorage.setItem

          var gameTime = this.getLocalData("game-time");
          console.log("game time", gameTime); // this.clearLocalData();

          this.setLocalData("gold-count", 99999 + ''); // this.setLocalData('active-tower-build-base-count', '2');
          // this.setLocalData("current-level-num", this.currentLevelNum + '');
          // this.initTowerLevelLocalData(this.gameController.getGameConfig().json);
          // this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
          // this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
          // this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
          // this.initTowerLevelLocalData(this.gameController.getGameConfig().json);

          if (gameTime) {
            // 首次进入游戏. 初始化游戏数据
            //不是首次进入游戏，那么初始化一些游戏数据
            this.currentSkillCount = Number(this.getLocalData('current-skill-count')); // console.log()

            this.currentActiveSkillCount = Number(this.getLocalData('current-active-skill-count'));
            this.currentGoldCount = Number(this.getLocalData("gold-count")); //获取当前金币个数

            this.currentLevelNum = Number(this.getLocalData("current-level-num")); //获取当前的关卡数
            // this.currentActiveTowerBuildBaseCount = Number(this.getLocalData('active-tower-build-base-count')); //获取当前激活的塔的基座的数量

            this.currentTowerLevelData = JSON.parse(this.getLocalData("tower-level-data"));
            this.currentInitRedHeartCounnt = Number(this.getLocalData("current-init-red-heart-count")); //获取当前初始化的红心的个数

            this.currentActiveEnemyMap = JSON.parse(this.getLocalData("active-enemy-list")); //获取当前激活的敌人的列表

            console.log("current active enemy map", this.currentActiveEnemyMap);
          } else {
            this.setLocalData("game-time", '1');
            this.setLocalData("current-active-skill-count", this.currentActiveSkillCount + '');
            this.setLocalData("current-skill-count", this.currentSkillCount + '');
            this.setLocalData("gold-count", this.currentGoldCount + '');
            this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt + "");
            this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
            this.initTowerLevelLocalData(this.gameController.getGameConfig().json); // this.setLocalData("active-tower-build-base-count", this.currentActiveTowerBuildBaseCount + ''); //保存当前激活塔的基座的数量
          }

          this.currentRedHeardCount = this.currentInitRedHeartCounnt;
        }

        _createClass(PlayData, [{
          key: "initTowerLevelLocalData",
          value: function initTowerLevelLocalData(gameConfig) {
            //初始化本地
            var list = [];

            for (var i in gameConfig) {
              if (gameConfig[i].Type === "Tower") {
                list.push(gameConfig[i]);
              }
            }

            list = list.sort(function (a, b) {
              return a.index - b.index;
            });
            var dataList = [];

            for (var _i = 0; _i < list.length; _i++) {
              var data = list[_i];
              var obj = {
                IconSprteFrame: data.IconSprteFrame,
                isActive: false,
                currentLevel: 0,
                TowerType: data.TowerType
              };

              if (_i < 2) {
                obj.isActive = true;
                obj.currentLevel = 1;
              } else {
                obj.isActive = false;
                obj.currentLevel = 0;
              }

              dataList.push(obj);
            }

            console.log("json", dataList);
            this.currentTowerLevelData = dataList;
            this.setLocalData("tower-level-data", JSON.stringify(dataList));
          }
        }, {
          key: "clearLocalData",
          value: function clearLocalData() {
            localStorage.clear();
          }
        }, {
          key: "getLocalData",
          value: function getLocalData(key) {
            console.log('获取游戏数据', key);
            return localStorage.getItem(key);
          }
        }, {
          key: "setLocalData",
          value: function setLocalData(key, data) {// localStorage.setItem(key, data);
          }
        }, {
          key: "updateGoldCount",
          value: function updateGoldCount(value) {
            this.setLocalData("gold-count", value.toString());
          }
        }, {
          key: "getCurrentGoldCount",
          value: function getCurrentGoldCount() {
            return this.currentGoldCount;
          }
        }, {
          key: "initGoldCount",
          value: function initGoldCount() {
            //初始化金币个数
            this.currentGoldCount = 0;
            this.setLocalData('gold-count', this.currentGoldCount + '');
          }
        }, {
          key: "addGoldCount",
          value: function addGoldCount(goldCount) {
            this.currentGoldCount += goldCount;
            this.setLocalData('gold-count', this.currentGoldCount + ''); // if (goldCount > 0) {
            //     this.gameController.node.emit("play-audio", '收集金币')
            // } else {
            //     this.gameController.node.emit("play-audio", '消费金币')
            // }

            this.gameController.node.emit("update-gold-label", this.currentGoldCount, goldCount);
          }
        }, {
          key: "newGame",
          value: function newGame() {
            this.currentLevelNum = 0;
            this.currentRedHeardCount = this.currentInitRedHeartCounnt;
            this.setLocalData('current-level-num', this.currentLevelNum + ''); //保存当前的关卡数

            this.currentGoldCount = this.gameController.getGameConfig().json['Level_' + this.currentLevelNum].InitGoldCount;
            this.setLocalData("gold-count", this.currentGoldCount + '');
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            this.currentLevelNum++; //获取当前关卡的金币个数

            var goldCount = this.gameController.getGameConfig().json['Level_' + this.currentLevelNum].InitGoldCount;
            this.addGoldCount(goldCount);
            this.setLocalData('current-level-num', this.currentLevelNum + ''); //保存当前的关卡数
          } // getCurrentTowerLevelData(towerIndex: number): Object {
          //     return this.currentTowerLevelData[towerIndex];
          // }
          // updateCurrentTowerLevelData()

        }, {
          key: "activeTower",
          value: function activeTower(index) {
            console.log("active tower index", index);
            console.log("current tower level data", this.currentTowerLevelData);
            this.currentTowerLevelData[index]["isActive"] = true;
            this.currentTowerLevelData[index]['currentLevel'] = 1;
            this.setLocalData("tower-level-data", JSON.stringify(this.currentTowerLevelData));
          }
        }, {
          key: "getWeaponIsActive",
          value: function getWeaponIsActive(index) {
            //获取塔是否激活了
            // console.log("index", index);
            // console.log("data", this.currentTowerLevelData[index]);
            return this.currentTowerLevelData[index]["isActive"];
          }
        }, {
          key: "getCurrentTowerLocalLevel",
          value: function getCurrentTowerLocalLevel(towerInedx) {
            return this.currentTowerLevelData[towerInedx]['currentLevel'];
          }
        }, {
          key: "getCurrentTowersLocalLevelData",
          value: function getCurrentTowersLocalLevelData() {
            return this.currentTowerLevelData;
          }
        }, {
          key: "updateTowerLocalLevel",
          value: function updateTowerLocalLevel(towerIndexType, localLevel) {
            //升级塔的永久等级
            this.currentTowerLevelData[towerIndexType]['currentLevel'] = localLevel;
            this.setLocalData('tower-level-data', JSON.stringify(this.currentTowerLevelData));
          }
        }, {
          key: "getFirstNeedToActiveTowerIndex",
          value: function getFirstNeedToActiveTowerIndex() {
            //得到最后一个激活到的index
            // let isActive = false;
            var lastActiveIndex = 0;

            for (var i = 0; i < this.currentTowerLevelData.length; i++) {
              var isActive = this.currentTowerLevelData[i]['isActive'];

              if (!isActive) {
                lastActiveIndex = i;
                break;
              }
            }

            return lastActiveIndex;
          }
        }, {
          key: "getCurrentInitRedHeartCount",
          value: function getCurrentInitRedHeartCount() {
            return this.currentInitRedHeartCounnt;
          }
        }, {
          key: "getAddOneRedHeartCostGoldCount",
          value: function getAddOneRedHeartCostGoldCount() {
            //获取增加一个红心 需要消耗的金币个数
            var currentRedHeardCount = this.getCurrentInitRedHeartCount();
            return (1 + currentRedHeardCount) * currentRedHeardCount * 0.5 * 100;
          }
        }, {
          key: "addLocalInitRedHeartCount",
          value: function addLocalInitRedHeartCount(count) {
            //增加本地初始化红心的个数
            this.currentInitRedHeartCounnt += count; // this.currentRedHeardCount = this.currentInitRedHeartCounnt;

            this.setLocalData("current-init-red-heart-count", this.currentInitRedHeartCounnt.toString());
          }
        }, {
          key: "getCurrentRedHeartCount",
          value: function getCurrentRedHeartCount() {
            //获取当前的红心个数
            return this.currentRedHeardCount;
          }
        }, {
          key: "addRedHeartCount",
          value: function addRedHeartCount(count) {
            this.currentRedHeardCount += count;
            this.gameController.referRedHeardUI();
          }
        }, {
          key: "getCurrentActiveTowerList",
          value: function getCurrentActiveTowerList() {
            //获取当前激活的塔的列表
            var list = [];

            for (var i = 0; i < this.currentTowerLevelData.length; i++) {
              var data = this.currentTowerLevelData[i];

              if (data["isActive"]) {
                list.push(i);
              }
            }

            console.log("current active tower list", list);
            return list;
          }
        }, {
          key: "getCurrentActiveEnemyMap",
          value: function getCurrentActiveEnemyMap() {
            //得到当前激活的敌人的列表
            return this.currentActiveEnemyMap;
          }
        }, {
          key: "getEnemyIsActive",
          value: function getEnemyIsActive(enemyType) {
            // console.log("current active enemy list", this.currentActiveEnemyList);
            if (this.currentActiveEnemyMap[enemyType]) {
              return true;
            }

            return false;
          }
        }, {
          key: "activeEnemy",
          value: function activeEnemy(enemyType) {
            //激活一个敌人
            if (!this.currentActiveEnemyMap[enemyType]) {
              this.currentActiveEnemyMap[enemyType] = true;
              console.log("激活一个敌人", enemyType);
              console.log("current active enemy map", this.currentActiveEnemyMap);
              this.setLocalData("active-enemy-list", JSON.stringify(this.currentActiveEnemyMap));
              console.log("data = ", this.getLocalData("active-enemy-list"));
              this.gameController.activeEnemySuccess(enemyType); // this.gameController
            }
          }
        }, {
          key: "getIsShowed",
          value: function getIsShowed(objectType) {
            var isShow = Boolean(this.getLocalData("set-object-showed" + objectType));

            if (!isShow) {
              return false;
            }

            return true;
          }
        }, {
          key: "setShowed",
          value: function setShowed(objectType) {
            this.setLocalData("set-object-showed" + objectType, "true");
          }
        }, {
          key: "getIsShowGuide",
          value: function getIsShowGuide(guideStep) {
            return Boolean(this.getLocalData("guide-step-" + guideStep));
          }
        }, {
          key: "setIsShowGuide",
          value: function setIsShowGuide(guideStep) {
            this.setLocalData("guide-step-" + guideStep, "true");
          }
        }]);

        return PlayData;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Menu/MenuUIBase.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../BaseObject.js", "../../util/State.js", "../../Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, cclegacy, _decorator, isValid, Tween, v3, BaseObject, State, TowerBase, _dec, _class, _temp, ccclass, property, MenuUIBase;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      isValid = _cc.isValid;
      Tween = _cc.Tween;
      v3 = _cc.v3;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22840YoTAVEEoGWokYeLlSX", "MenuUIBase", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MenuUIBase", MenuUIBase = (_dec = ccclass('MenuUIBase'), _dec(_class = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(MenuUIBase, _BaseObject);

        function MenuUIBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MenuUIBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuUIBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new State();
          _this.targetNode = null;
          return _this;
        }

        _createClass(MenuUIBase, [{
          key: "init",
          // start() {
          //     // console.log('menu ui base');
          //     // this.state.addState('open-ui', this.openUI.bind(this));
          //     // this.state.addState('close-ui', this.closeUI.bind(this));
          //     // let gameConfig = find('GameController').getComponent(GameController).getGameConfig().json;
          //     // this.scheduleOnce(()=>{
          //     //     super.init(gameConfig);
          //     // }, 0.2)
          // }
          value: function init(gameConfig, gameController) {
            _get(_getPrototypeOf(MenuUIBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.state.addState('open-ui', this.openUI.bind(this));
            this.state.addState('close-ui', this.closeUI.bind(this));
          }
        }, {
          key: "open",
          value: function open(target) {
            console.log("打开");

            if (isValid(this.targetNode) && this.targetNode.getComponent(TowerBase) && this.targetNode.uuid !== target.uuid) {
              this.targetNode.getComponent(TowerBase).closeAttackRange();
            }

            if (target.getComponent(TowerBase)) {
              target.getComponent(TowerBase).showAttackRange();
            }

            this.targetNode = target;
            this.state.setState('open-ui');
          }
        }, {
          key: "close",
          value: function close() {
            this.state.setState("close-ui");
          }
        }, {
          key: "closeUI",
          value: function closeUI() {
            if (isValid(this.targetNode) && this.targetNode.getComponent(TowerBase)) {
              this.targetNode.getComponent(TowerBase).closeAttackRange();
            }

            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(0, 0, 0)
            });
            tw.call(function () {// this.node.active = false;
            });
            tw.start();
          }
        }, {
          key: "openUI",
          value: function openUI() {
            console.log("open ui");
            this.node.active = true;
            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {});
            tw.start();
          }
        }]);

        return MenuUIBase;
      }(BaseObject), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/Tool.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, Tool;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5b9421aLlB+qBZsaa/3PZA", "Tool", undefined);

      _export("Tool", Tool = /*#__PURE__*/function () {
        function Tool() {
          _classCallCheck(this, Tool);
        }

        _createClass(Tool, null, [{
          key: "convertNumToK",
          value: function convertNumToK(num) {
            //将数字转换成 k结尾的显示方式
            num = Math.abs(num);
            var key = ["", "K", "M", "B"];
            var endStr = num + '';
            var endNum = num;
            var index = 0;

            while (endNum > 0) {
              endNum = Math.floor(endNum / 1000);
              index++;
            }

            endStr = num / Math.pow(1000, index - 1) + '';
            console.log('end Str', endStr);

            if (endStr.length > 4) {
              endStr = endStr.substring(0, 4);
            }

            if (index >= 1) {
              endStr += key[index - 1];
            }

            console.log('end Str', endStr);
            return endStr;
          }
        }]);

        return Tool;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/GoldCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../util/Tool.js", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, find, Tween, v3, LabelComponent, ProgressBarComponent, instantiate, view, Component, Tool, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, ccclass, property, GoldCtl;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      find = _cc.find;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      LabelComponent = _cc.LabelComponent;
      ProgressBarComponent = _cc.ProgressBarComponent;
      instantiate = _cc.instantiate;
      view = _cc.view;
      Component = _cc.Component;
    }, function (_utilToolJs) {
      Tool = _utilToolJs.Tool;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "76e03n/eNtMAopLI1ZIiGNs", "GoldCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GoldCtl", GoldCtl = (_dec = ccclass('GoldCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GoldCtl, _Component);

        function GoldCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GoldCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoldCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "goldsNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentLevelLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentScoreLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentGoldLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addGoldEffectLabel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "redHeartProgressBar", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "redHeartCountLabel", _descriptor7, _assertThisInitialized(_this));

          _this.addGoldEffectNodeCount = 0;
          return _this;
        }

        _createClass(GoldCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this; // let currentLevel = 0;
            // let currentWave = 0;
            // this.updateLevelLabel(currentLevel, currentWave);
            // this.node.on("update-level-wave", (level, wave) => {
            //     // currentLevel = level;
            //     this.updateLevelLabel(level, wave);
            // });
            // this.node.on("init-update-level", ()=>{
            //     this.updateLevelLabel(0,0);
            // })
            // this.node.on("update-wave", (wave)=>{
            //     currentWave = wave;
            //     this.updateLabel(currentLevel, currentWave);
            // });


            var gameCtlNode = find('GameController');
            gameCtlNode.on("refer-current-wave-level", function (level, wave) {
              // currentWave = wave;
              _this2.updateLevelLabel(level, wave);
            });
            gameCtlNode.on("update-gold-label", function (goldCount, addGoldCount) {
              _this2.updateGoldCountLabel(goldCount, addGoldCount);
            }); // gameCtlNode.on("refer-current-wave")

            this.node.on("gold-not-enough", function () {
              //显示金币不足的动画
              // this.currentGoldLabel
              var tw = new Tween(_this2.currentGoldLabel);
              tw.to(0.1, {
                scale: v3(1.5, 1.5, 1.5)
              });
              tw.to(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.start();
            });
            this.node.on("refer-red-heart-label", function () {
              var gameController = gameCtlNode.getComponent(GameController);
              var currentRedHeartCount = gameController.playerData.getCurrentRedHeartCount();
              var currentInitRedHeartCount = gameController.playerData.getCurrentInitRedHeartCount();
              _this2.redHeartCountLabel.getComponent(LabelComponent).string = currentInitRedHeartCount + "/" + currentRedHeartCount;
              var progress = currentRedHeartCount / currentInitRedHeartCount;
              _this2.redHeartProgressBar.getComponent(ProgressBarComponent).progress = progress;
            });
          }
        }, {
          key: "updateLevelLabel",
          value: function updateLevelLabel(level, wave) {
            this.currentLevelLabel.getComponent(LabelComponent).string = level + 1 + '-' + (wave + 1);
          }
        }, {
          key: "updateGoldCountLabel",
          value: function updateGoldCountLabel(goldCount, addGoldCount) {
            var _this3 = this;

            var endStr = Tool.convertNumToK(goldCount);
            this.currentGoldLabel.getComponent(LabelComponent).string = endStr;

            if (addGoldCount) {
              if (this.addGoldEffectNodeCount > 20) {
                return;
              }

              this.addGoldEffectNodeCount++;
              var effectNode = instantiate(this.addGoldEffectLabel);
              effectNode.parent = this.goldsNode;
              var offsetStr = '-';

              if (addGoldCount > 0) {
                offsetStr = '+';
              }

              var _endStr = Tool.convertNumToK(addGoldCount);

              effectNode.getComponent(LabelComponent).string = offsetStr + _endStr + ''; // effectNode.position = v3(eff)

              var tw = new Tween(effectNode);
              tw.by(0.2, {
                position: v3(0, 20, 0)
              });
              tw.delay(0.5);
              tw.by(0.2, {
                position: v3(0, 20, 0),
                opacity: -0.5
              });
              tw.call(function () {
                effectNode.destroy();
                _this3.addGoldEffectNodeCount--;
              });
              tw.start();
            }
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim() {
            var _this4 = this;

            var height = view.getVisibleSize().height;
            console.log("播放金币ui的进场动画");
            this.node.emit("refer-red-heart-label");
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this4.goldsNode);
              tw.to(0.2, {
                position: v3(0, height * 0.5 - 65, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }]);

        return GoldCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentLevelLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentScoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentGoldLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addGoldEffectLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "redHeartProgressBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "redHeartCountLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Menu/UpdateTowerUI.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../BaseObject.js", "./MenuUIBase.js", "../../util/Tool.js", "../../Towers/TowerBase.js", "../../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, SpriteFrame, find, SpriteComponent, LabelComponent, BaseObject, MenuUIBase, Tool, TowerBase, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, UpdateTowerUI;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_MenuUIBaseJs) {
      MenuUIBase = _MenuUIBaseJs.MenuUIBase;
    }, function (_utilToolJs) {
      Tool = _utilToolJs.Tool;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18715njxPNA9Ie4NOUMTb2f", "UpdateTowerUI", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UpdateTowerUI", UpdateTowerUI = (_dec = ccclass('UpdateTowerUI'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec5 = property({
        type: SpriteFrame
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_MenuUIBase) {
        _inherits(UpdateTowerUI, _MenuUIBase);

        function UpdateTowerUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UpdateTowerUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateTowerUI)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "updateCostLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "destroyWinLabel", _descriptor2, _assertThisInitialized(_this));

          _this.gameController = null;
          _this.updateCostCount = null;
          _this.destroyWinCount = null;

          _initializerDefineProperty(_this, "updateMaxLevelSpriteFrame", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonSpriteFrame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateButtonNode", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UpdateTowerUI, [{
          key: "onLoad",
          // public targetTower: Node = null;
          value: function onLoad() {
            this.gameController = find("GameController").getComponent(GameController);
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
            // this.scheduleOnce(()=>{
            // super.start();
            // }, 0.2)
          }
        }, {
          key: "init",
          value: function init(gameConfig, gameController) {
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "init", this).call(this, gameConfig, gameController);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");
            console.log("custom data", customData);
            var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();

            switch (customData) {
              case 'bg':
                console.log("点中了背景");
                this.state.setState("close-ui");
                break;

              case 'update':
                var isMax = this.targetNode.getComponent(BaseObject).getTowerIsMax();

                if (isMax) {
                  return;
                }

                if (currentGoldCount >= this.updateCostCount) {
                  this.gameController.playerData.addGoldCount(this.updateCostCount * -1);
                  this.state.setState("close-ui");
                  this.targetNode.getComponent(TowerBase).updateLevel();
                } else {
                  // this.node.emit("gold-not-enough");
                  find("Canvas").emit('gold-not-enough');
                }

                break;

              case 'destroy':
                // this.gameController.playerData.addGoldCount(this.destroyWinCount);
                this.state.setState("close-ui");
                this.targetNode.getComponent(TowerBase).toDestroy();
                break;

              default:
                break;
            }
          }
        }, {
          key: "checkIsUpdateMax",
          value: function checkIsUpdateMax() {
            // let isMax = this.getTowerIsMax
            var targetTower = this.targetNode;
            var isMax = targetTower.getComponent(BaseObject).getTowerIsMax();
            console.log("is max", isMax);

            if (isMax) {
              // this.checkIsUpdateMax
              console.log("更新按钮 贴图");
              this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateMaxLevelSpriteFrame;
            } else {
              this.updateButtonNode.getComponent(SpriteComponent).spriteFrame = this.updateButtonSpriteFrame;
            }
          }
        }, {
          key: "open",
          value: function open(targetTower) {
            _get(_getPrototypeOf(UpdateTowerUI.prototype), "open", this).call(this, targetTower);

            this.checkIsUpdateMax();
            var baseTower = targetTower.getComponent(TowerBase);
            var updateCostCount = baseTower.getUpdateCost();
            var destroyWinCount = baseTower.getDestroyCount();
            this.updateCostLabel.getComponent(LabelComponent).string = Tool.convertNumToK(updateCostCount) + '';
            this.destroyWinLabel.getComponent(LabelComponent).string = Tool.convertNumToK(destroyWinCount) + '';
            this.updateCostCount = updateCostCount;
            this.destroyWinCount = destroyWinCount;
          }
        }]);

        return UpdateTowerUI;
      }(MenuUIBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateCostLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "destroyWinLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "updateMaxLevelSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updateButtonNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Menu/BuildTowerUITowerIcon.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, Prefab, isValid, instantiate, v3, LabelComponent, BaseObject, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, BuildTowerUITowerIcon;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      isValid = _cc.isValid;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      LabelComponent = _cc.LabelComponent;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "960c8xSpalMJZbfb3XktNJx", "BuildTowerUITowerIcon", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildTowerUITowerIcon", BuildTowerUITowerIcon = (_dec = ccclass('BuildTowerUITowerIcon'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(BuildTowerUITowerIcon, _BaseObject);

        function BuildTowerUITowerIcon() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BuildTowerUITowerIcon);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BuildTowerUITowerIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "costGoldLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerShowAnimList", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "showTowerAnimLayer", _descriptor3, _assertThisInitialized(_this));

          _this.gameConfig = undefined;
          _this.currentBuildCost = null;
          _this.towerType = null;
          _this.currentAnimNode = null;
          return _this;
        }

        _createClass(BuildTowerUITowerIcon, [{
          key: "onLoad",
          //当前播放动画的类型
          value: function onLoad() {// this.gameConfig = find("GameController").getComponent(GameController).getGameConfig().json;
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(type, gameController, gameConfig) {
            this.gameConfig = gameConfig;
            this.towerType = type; // console.log("初始化塔的类型", type, this.gameConfig);

            if (isValid(this.currentAnimNode)) {
              this.currentAnimNode.destroy();
            }

            var node = instantiate(this.towerShowAnimList[type]);
            this.currentAnimNode = node;
            node.scale = v3(1, 1, 1);
            node.parent = this.showTowerAnimLayer; //根据type 取处数据
            // let configList = [];

            console.log("type", type);

            for (var i in this.gameConfig) {
              if (i.indexOf("Tower") > -1) {
                // configList.push(this.gameConfig[i]);
                if (this.gameConfig[i].Index === type) {
                  this.objectType = i;
                }
              }
            } // console.log("config", configList);
            // for (let i in configList) {
            //     if (configList[i].index === type) {
            //         // console.log("找到了相关数据");
            //         // let costCount = configList[i].BuildCost;
            //         // this.costGoldLabel.getComponent(LabelComponent).string = costCount;
            //         // this.currentBuildCost = costCount;
            //         this.objectType = i;
            //         break;
            //     }
            // }


            console.log('object type', this.objectType);

            _get(_getPrototypeOf(BuildTowerUITowerIcon.prototype), "init", this).call(this, this.gameConfig, gameController);

            this.costGoldLabel.getComponent(LabelComponent).string = this.buildCost + '';
          }
        }, {
          key: "getCurrentBuildCost",
          value: function getCurrentBuildCost() {
            //返回当前的建造消耗
            return this.buildCost;
          }
        }, {
          key: "getTowerType",
          value: function getTowerType() {
            return this.towerType;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return BuildTowerUITowerIcon;
      }(BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "costGoldLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "towerShowAnimList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showTowerAnimLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Menu/BuildTowerUI.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "./MenuUIBase.js", "./BuildTowerUITowerIcon.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Prefab, instantiate, ButtonComponent, v3, v2, find, isValid, MenuUIBase, BuildTowerUITowerIcon, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, BuildTowerUI;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      ButtonComponent = _cc.ButtonComponent;
      v3 = _cc.v3;
      v2 = _cc.v2;
      find = _cc.find;
      isValid = _cc.isValid;
    }, function (_MenuUIBaseJs) {
      MenuUIBase = _MenuUIBaseJs.MenuUIBase;
    }, function (_BuildTowerUITowerIconJs) {
      BuildTowerUITowerIcon = _BuildTowerUITowerIconJs.BuildTowerUITowerIcon;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6405P/+GFGaa0/qmo/iQAc", "BuildTowerUI", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildTowerUI", BuildTowerUI = (_dec = ccclass('BuildTowerUI'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_MenuUIBase) {
        _inherits(BuildTowerUI, _MenuUIBase);

        function BuildTowerUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BuildTowerUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BuildTowerUI)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "buildTowerUITowerIcon", _descriptor, _assertThisInitialized(_this));

          _this.gameConfig = null;
          _this.towerIconNodeList = [];
          return _this;
        }

        _createClass(BuildTowerUI, [{
          key: "init",
          // public gameController: GameController;
          value: function init(gameConfig, gameCtl) {
            _get(_getPrototypeOf(BuildTowerUI.prototype), "init", this).call(this, gameConfig, gameCtl);

            this.gameController = gameCtl; // let currentLevelNum = gameCtl.getCurrentLevelNum();
            // let currentLevelData = gameCtl.getGameConfig().json['Level_' + currentLevelNum];
            // let activedTowerIndexList: number[] = currentLevelData.ActivedTower;

            this.gameConfig = gameConfig;
            this.referCurrentUI(); // this.node.on("refer-current-ui", this.referCurrentUI.bind(this), this);
          } // this.node

        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onEnable",
          value: function onEnable() {// this.referCurrentUI();
          }
        }, {
          key: "referCurrentUI",
          value: function referCurrentUI() {
            var activedTowerIndexList = this.gameController.playerData.getCurrentActiveTowerList();
            var length = activedTowerIndexList.length;
            var dis = length - this.towerIconNodeList.length;
            console.log("dis", dis);

            if (dis > 0) {
              for (var i = 0; i < dis; i++) {
                var node = instantiate(this.buildTowerUITowerIcon);
                node.addComponent(ButtonComponent);
                node.on("click", this.onButtonClick.bind(this));
                node.parent = this.node;
                this.towerIconNodeList.push(node);
              }
            } else if (dis < 0) {
              for (var _i = 0; _i < Math.abs(dis); _i++) {
                this.towerIconNodeList.pop().destroy();
              }
            }

            for (var _i2 = 0; _i2 < this.towerIconNodeList.length; _i2++) {
              // let node = instantiate(this.towerShowAnimPrefabList[activedTowerIndexList[i]]);
              // let node = instantiate(this.buildTowerUITowerIcon);
              var _node = this.towerIconNodeList[_i2];
              _node.name = "tower_" + activedTowerIndexList[_i2]; // node.addComponent(ButtonComponent);
              // node.on("click", this.onButtonClick.bind(this));
              // node.parent = this.node;

              _node.getComponent(BuildTowerUITowerIcon).init(activedTowerIndexList[_i2], this.gameController, this.gameConfig);

              var scale = 60 / _node.width;
              _node.scale = v3(scale, scale, 1);
              var v = v2(0, 1);
              v = v.rotate(Math.PI * 2 / length * _i2).normalize();
              var pos = v.multiplyScalar(75);

              _node.setPosition(v3(pos.x, pos.y, 0));
            }

            console.log("build tower ui"); // super.start();

            this.node.getChildByName("BuildTowerBgNode").on("click", this.onButtonClick.bind(this));
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");

            if (customData === 'close') {
              this.state.setState("close-ui");
              return;
            }

            var nodeName = event.node.name;

            if (nodeName === 'BuildTowerBgNode') {
              this.state.setState("close-ui");
            } else {
              var towerIconCom = event.node.getComponent(BuildTowerUITowerIcon);

              if (towerIconCom) {
                var towerType = towerIconCom.getTowerType();
                var buildCost = towerIconCom.getCurrentBuildCost();
                var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();
                console.log("current gold count", currentGoldCount);

                if (buildCost <= currentGoldCount && isValid(this.targetNode)) {
                  //金币数目够 可以建造塔了
                  this.gameController.playerData.addGoldCount(buildCost * -1);
                  this.state.setState("close-ui");
                  find("GameController").emit("build-one-tower", towerType, this.targetNode);
                } else {
                  find("Canvas").emit('gold-not-enough');
                }
              } // let index = nodeName.substring(nodeName.length - 1, nodeName.length);
              // console.log("index", index);
              // this.state.setState('close-ui');
              // find("GameController").emit("build-one-tower", index, this.targetNode);

            }
          }
        }]);

        return BuildTowerUI;
      }(MenuUIBase), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildTowerUITowerIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/GameWin/GameResultGoldCell.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, LabelComponent, loader, SpriteFrame, SpriteComponent, BaseObject, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, GameResultGoldCell;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "00a24DEoTFIC42oXzjaFqsy", "GameResultGoldCell", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameResultGoldCell", GameResultGoldCell = (_dec = ccclass('GameResultGoldCell'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(GameResultGoldCell, _BaseObject);

        function GameResultGoldCell() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameResultGoldCell);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameResultGoldCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyIconNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyCountLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winGoldCountLabel", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameResultGoldCell, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(gameController, data) {
            var _this2 = this; // super.init()


            var gameConfig = gameController.getGameConfig().json;
            var type = data['key'];

            _get(_getPrototypeOf(GameResultGoldCell.prototype), "init", this).call(this, gameConfig, gameController, null, null, type);

            var iconStr = this.getIconSprteFrame();
            this.enemyCountLabel.getComponent(LabelComponent).string = data["enemyCount"] + '';
            this.winGoldCountLabel.getComponent(LabelComponent).string = data["winGoldCount"] + ''; // console.log("icon str", iconStr);

            loader.loadRes(iconStr + "/spriteFrame", SpriteFrame, function (err, result) {
              // console.log("err", err)
              // console.log("result", result);
              if (!err) {
                _this2.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
              }
            });
          }
        }, {
          key: "setData",
          value: function setData(enemyCount, winGoldCount, iconStr) {
            var _this3 = this;

            this.enemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
            this.winGoldCountLabel.getComponent(LabelComponent).string = winGoldCount + ''; // console.log("icon str", iconStr);

            loader.loadRes(iconStr + "/spriteFrame", SpriteFrame, function (err, result) {
              // console.log("err", err)
              // console.log("result", result);
              if (!err) {
                _this3.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GameResultGoldCell;
      }(BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyIconNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyCountLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winGoldCountLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/GameWin/GameWinPrefab.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "./GameResultGoldCell.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, SpriteFrame, SpriteComponent, LabelComponent, instantiate, Tween, v3, find, Component, GameResultGoldCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, ccclass, property, GameWinPrefab;

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
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
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
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
      instantiate = _cc.instantiate;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      find = _cc.find;
      Component = _cc.Component;
    }, function (_GameResultGoldCellJs) {
      GameResultGoldCell = _GameResultGoldCellJs.GameResultGoldCell;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa8f9h1LBJLMZap+sTSLCS2", "GameWinPrefab", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameWinPrefab", GameWinPrefab = (_dec = ccclass('GameWinPrefab'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: SpriteFrame
      }), _dec6 = property({
        type: SpriteFrame
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: SpriteFrame
      }), _dec9 = property({
        type: SpriteFrame
      }), _dec10 = property({
        type: SpriteFrame
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameWinPrefab, _Component);

        function GameWinPrefab() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameWinPrefab);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameWinPrefab)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "winGoldCellPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "leftButton", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightButton", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "retryGameButtonSpriteFrame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "shareButtonSpriteFrame", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextLevelSpriteFrame", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "saveLifeButtonSpriteFrame", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameWinIconSpriteFrame", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameLossIconSpriteFrame", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultIconNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultNode", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sumNode", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalEnemyCountLabel", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalGoldCountLabel", _descriptor14, _assertThisInitialized(_this));

          _this.gameConfig = null;

          _initializerDefineProperty(_this, "scrollViewNode", _descriptor15, _assertThisInitialized(_this));

          _this.gameResultState = null;
          _this.uiController = null;
          _this.gameController = null;
          _this.nodeList = [];
          return _this;
        }

        _createClass(GameWinPrefab, [{
          key: "start",
          value: function start() {}
        }, {
          key: "setGameResult",
          value: function setGameResult(succ, data, gameConfig, uiCtl, gameCtl) {
            var _this2 = this;

            this.uiController = uiCtl;
            this.gameController = gameCtl;
            this.gameResultState = succ;
            this.gameConfig = gameConfig;
            console.log("游戏状态时", succ);
            var allEnemyCount = data.length;
            var allGoldCount = 0;
            console.log("游戏结果数据是", data);
            console.log("当前关卡打死的敌人数目种类，获得的金币数目 ");

            if (succ) {
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameWinIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.shareButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.nextLevelSpriteFrame;
            } else {
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameLossIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.retryGameButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.saveLifeButtonSpriteFrame;
            }

            var enemyTypeMap = {};

            for (var i = 0; i < data.length; i++) {
              if (enemyTypeMap[data[i].enemyType]) {
                enemyTypeMap[data[i].enemyType].enemyCount += 1; //此类敌人的总数

                enemyTypeMap[data[i].enemyType].winGoldCount += data[i].dropGoldCount;
              } else {
                enemyTypeMap[data[i].enemyType] = {
                  enemyCount: 1,
                  winGoldCount: data[i].dropGoldCount
                };
              }

              allGoldCount += data[i].dropGoldCount;
            } // console.log("enemy type map", enemyTypeMap);
            // let index = 0;
            // for (let i in enemyTypeMap) {
            //     let obj = enemyTypeMap[i];
            //     let node = instantiate(this.winGoldCellPrefab);
            //     node.parent = this.gameResultNode;
            //     node.position = v3(0, 0, 0);
            //     let iconStr = gameConfig[i].IconSpriteFrameName;
            //     this.showCellEnterAnim(node, index, iconStr, obj['count'], obj['winGoldCount']);
            //     index++;
            // }


            var list = [];

            for (var _i in enemyTypeMap) {
              var _data = enemyTypeMap[_i];
              _data.key = _i;
              list.push(_data);
            }

            console.log("list", list);
            list = list.sort(function (a, b) {
              return b.winGoldCount - a.winGoldCount;
            });
            this.showCellEnterAnim(list, function () {
              console.log("展示结束");
              return _this2.showSumResult(allEnemyCount, allGoldCount);
            });
          }
        }, {
          key: "showSumResult",
          value: function showSumResult(enemyCount, goldCount) {
            var _this3 = this; //显示最后的总合


            return new Promise(function (resolve, reject) {
              _this3.sumNode.active = true;
              _this3.totalEnemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
              _this3.totalGoldCountLabel.getComponent(LabelComponent).string = goldCount + '';
            });
          }
        }, {
          key: "showCellEnterAnim",
          value: function showCellEnterAnim(data, cb) {
            var _this4 = this; // if (Object.keys(data).length === 0) {
            //     if (cb) {
            //         cb();
            //     }
            //     return
            // }


            if (data.length === 0) {
              if (cb) {
                cb();
              }

              return;
            } // let list = Object.keys(data);
            // let objKey = list[Math.round(Math.random() * (list.length - 1))];
            // let obj = data[objKey];
            // delete data[objKey];


            var cellData = data.pop();
            var node = instantiate(this.winGoldCellPrefab);
            node.parent = this.gameResultNode;
            var tw = new Tween(node); // let iconStr = this.gameConfig[objKey].IconSpriteFrame;
            // node.getComponent(GameResultGoldCell).setData(obj['count'], obj['winGoldCount'], iconStr);

            node.getComponent(GameResultGoldCell).init(this.gameController, cellData);
            node.position = v3(0, this.nodeList.length * -100 - 50, 0);
            this.gameResultNode.height = node.position.y * -1 + 60;
            this.nodeList.push(node);
            tw.delay(0.4);
            tw.call(function () {
              _this4.showCellEnterAnim(data, cb);
            });
            tw.start(); // for (let i = 0; i < list.length - 1; i++) {
            //     tw.delay(0.5)
            //     tw.by(0.2, {
            //         position: v3(0, 80, 0)
            //     })
            // }
            // tw.call(() => {
            //     this.showCellEnterAnim(data, cb);
            // })
            // tw.start();
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var _this5 = this;

            find("GameController").emit("player-button-click-audio");

            switch (customData) {
              case 'left-button':
                console.log("分享游戏结果");

                if (this.gameResultState) {
                  //玩家点击了分享按钮
                  this.gameController.playerClickShareButton().then(function () {
                    _this5.gameController.enterNextLevel();

                    _this5.node.destroy();
                  });
                } else {
                  //玩家点击了，重新开始按钮
                  this.gameController.playerClickRetryButton();
                  this.node.destroy();
                }

                break;

              case 'right-button':
                if (this.gameResultState) {
                  //如果是胜利的话，那么玩家点击的就是下一关游戏的按钮
                  console.log("进入下一关");
                  this.node.destroy();
                  this.uiController.playerClickNextLevelButton();
                } else {
                  this.gameController.playerClickSaveLifeButton().then(function () {
                    _this5.node.destroy(); //玩家点了立即复活按钮

                  });
                }

                break;

              default:
                break;
            }
          } // showCellEnterAnim(node: Node, index: number,iconStr: string, count: number, goldCount: number ) {
          //     //展示一个节点的进入动画    
          //     // node.getComponent(GameResultGoldCell).setData( count, goldCount, iconStr);
          // }

        }]);

        return GameWinPrefab;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winGoldCellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leftButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rightButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "retryGameButtonSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shareButtonSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nextLevelSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "saveLifeButtonSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameWinIconSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameLossIconSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameResultIconNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameResultNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sumNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "totalEnemyCountLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "totalGoldCountLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/UIController.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Menu/MenuUIBase.js", "./GoldCtl.js", "./Menu/UpdateTowerUI.js", "./Menu/BuildTowerUI.js", "./GameWin/GameWinPrefab.js", "./SkillCtl.js", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, SpriteFrame, find, view, v3, isValid, instantiate, Tween, LabelComponent, CameraComponent, SpriteComponent, Component, MenuUIBase, GoldCtl, UpdateTowerUI, BuildTowerUI, GameWinPrefab, SkillCtl, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, ccclass, property, UIController;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      view = _cc.view;
      v3 = _cc.v3;
      isValid = _cc.isValid;
      instantiate = _cc.instantiate;
      Tween = _cc.Tween;
      LabelComponent = _cc.LabelComponent;
      CameraComponent = _cc.CameraComponent;
      SpriteComponent = _cc.SpriteComponent;
      Component = _cc.Component;
    }, function (_MenuMenuUIBaseJs) {
      MenuUIBase = _MenuMenuUIBaseJs.MenuUIBase;
    }, function (_GoldCtlJs) {
      GoldCtl = _GoldCtlJs.GoldCtl;
    }, function (_MenuUpdateTowerUIJs) {
      UpdateTowerUI = _MenuUpdateTowerUIJs.UpdateTowerUI;
    }, function (_MenuBuildTowerUIJs) {
      BuildTowerUI = _MenuBuildTowerUIJs.BuildTowerUI;
    }, function (_GameWinGameWinPrefabJs) {
      GameWinPrefab = _GameWinGameWinPrefabJs.GameWinPrefab;
    }, function (_SkillCtlJs) {
      SkillCtl = _SkillCtlJs.SkillCtl;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ac456IJb4BOS7ZW+hoJsDui", "UIController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UIController, _Component);

        function UIController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "buildTowerPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateMenuPrefab", _descriptor2, _assertThisInitialized(_this));

          _this.gameController = null;

          _initializerDefineProperty(_this, "cameraNode", _descriptor3, _assertThisInitialized(_this));

          _this.buildUINode = null;
          _this.updateUINode = null;

          _initializerDefineProperty(_this, "enemyInfoButton", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoButton", _descriptor5, _assertThisInitialized(_this));

          _this.isHoldSkillIcon = false;

          _initializerDefineProperty(_this, "bossIcon", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultPrefab", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentLevelLabelIcon", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoLayer", _descriptor9, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIController, [{
          key: "start",
          //塔的详细信息层
          // @property({ type: Node })
          // public currentWaveLabelNode: Node = null;
          // @property({ type: Prefab })
          // public startGameCountDownAnimPrefab: Prefab = null;
          // @property({ type: Prefab })
          // public goAnimPrefab: Prefab = null;
          value: function start() {
            var _this2 = this; // loader.loadRes("Enemy_0_Icon/spriteFrame",SpriteFrame, (err, result)=>{
            //     console.log("err", err)
            // })


            this.gameController = find("GameController").getComponent(GameController);
            var screenSize = view.getVisibleSize();
            var width = screenSize.width;
            this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
            this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);
            console.log("ui controller start");
            this.gameController.node.on("touch-base-build-base", function (node) {
              //玩家点中了塔的基座
              //显示建造tower 的UI
              _this2.node.emit("complete-current-guide");

              if (_this2.isHoldSkillIcon) {
                return;
              }

              if (isValid(_this2.updateUINode)) {
                _this2.updateUINode.getComponent(MenuUIBase).close();
              }

              if (!isValid(_this2.buildUINode)) {
                _this2.buildUINode = instantiate(_this2.buildTowerPrefab);
                _this2.buildUINode.parent = _this2.node;

                _this2.buildUINode.getComponent(BuildTowerUI).init(_this2.gameController.getGameConfig().json, _this2.gameController);
              }

              _this2.setUINodeTo3dPos(_this2.buildUINode, node);

              _this2.buildUINode.getComponent(MenuUIBase).open(node);
            });
            this.gameController.node.on("touch-tower", function (targetTower) {
              //点中了tower
              //如果托着技能点，那么不需要显示UI
              if (_this2.isHoldSkillIcon) {
                return;
              }

              if (isValid(_this2.buildUINode)) {
                _this2.buildUINode.getComponent(MenuUIBase).close();
              }

              if (!isValid(_this2.updateUINode)) {
                _this2.updateUINode = instantiate(_this2.updateMenuPrefab);
                _this2.updateUINode.parent = _this2.node;

                _this2.updateUINode.getComponent(UpdateTowerUI).init(_this2.gameController.getGameConfig().json, _this2.gameController);
              }

              _this2.setUINodeTo3dPos(_this2.updateUINode, targetTower); // this.updateUINode.getComponent(MenuUIBase).open(targetTower);


              _this2.updateUINode.getComponent(UpdateTowerUI).open(targetTower);
            }); // this.node.on("update-gold-label", (goldCount: number)=>{
            //     this.node.getComponent(GoldCtl).updateGoldCountLabel(goldCount);
            // });
            // this.gameController.on("refer-current-wave", (waveNum) => {
            //     this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
            // });

            this.node.on('show-ui-enter-anim', this.showUIEnterAnim.bind(this), this);
            this.node.on("show-game-loss-ui", this.showGameLossUI.bind(this), this);
            this.node.on("show-game-win-ui", this.showGameWinUI.bind(this), this);
            this.node.on("show-current-level-icon-anim", this.showCurrentLevelIconAnim.bind(this), this);
            this.node.on("close-all-ui", this.closeSomeUI.bind(this), this);
            this.node.on("refer-current-tower-menu-ui", this.referTowerBuildMenuUI.bind(this), this);
            this.node.on("close-tower-menu-ui", this.coloseTowerBuildMenuUI.bind(this), this);
          } // showTowerInfo(target){
          //     if (isValid(this.towerInfoLayer)){
          //         this.towerInfoLayer.active = true;
          //         // this.towerInfoLayer.getComponent(TowerInfoLayer).setTowerData(target);
          //         // this.node.getComponent
          //     }
          // }

        }, {
          key: "coloseTowerBuildMenuUI",
          value: function coloseTowerBuildMenuUI() {
            if (isValid(this.buildUINode)) {
              this.buildUINode.getComponent(BuildTowerUI).close();
            }

            if (isValid(this.updateUINode)) {
              this.updateUINode.getComponent(UpdateTowerUI).close();
            }
          }
        }, {
          key: "referTowerBuildMenuUI",
          value: function referTowerBuildMenuUI() {
            if (isValid(this.buildUINode)) {
              this.buildUINode.getComponent(BuildTowerUI).referCurrentUI();
            }
          }
        }, {
          key: "closeSomeUI",
          value: function closeSomeUI() {
            //重新刷新UI
            if (isValid(this.buildUINode)) {
              this.buildUINode.getComponent(BuildTowerUI).close();
            }

            if (isValid(this.updateUINode)) {
              this.updateUINode.getComponent(UpdateTowerUI).close();
            }
          }
        }, {
          key: "showCurrentLevelIconAnim",
          value: function showCurrentLevelIconAnim(cb) {
            var _this3 = this; // let label = new Node();


            var tw = new Tween(this.currentLevelLabelIcon);
            this.currentLevelLabelIcon.active = true;
            this.currentLevelLabelIcon.getComponent(LabelComponent).string = "第" + (this.gameController.getCurrentLevelNum() + 1) + '关';
            tw.set({
              scale: v3(2, 2, 2)
            });
            tw.to(0.5, {
              scale: v3(1, 1, 1)
            }, {
              easing: "backOut"
            });
            tw.delay(0.8);
            tw.call(function () {
              _this3.currentLevelLabelIcon.active = false;
              cb();
            });
            tw.start();
          }
        }, {
          key: "showGameWinUI",
          value: function showGameWinUI(deadEnemyData) {
            var node = instantiate(this.gameResultPrefab);
            node.parent = this.node;
            var gameConfig = this.gameController.getGameConfig().json;
            node.getComponent(GameWinPrefab).setGameResult(true, deadEnemyData, gameConfig, this, this.gameController);
          }
        }, {
          key: "showGameLossUI",
          value: function showGameLossUI(deadEnemyData) {
            this.closeSomeUI();
            var node = instantiate(this.gameResultPrefab);
            node.parent = this.node;
            var gameConfig = this.gameController.getGameConfig().json;
            node.getComponent(GameWinPrefab).setGameResult(false, deadEnemyData, gameConfig, this, this.gameController);
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim(cb) {
            var _this4 = this;

            this.node.emit("enter-game");
            return this.node.getComponent(SkillCtl).showEnterAnim().then(function () {
              return _this4.node.getComponent(GoldCtl).showEnterAnim();
            }).then(function () {
              return _this4.showButtonUIEnter();
            }).then(function () {
              if (cb) {
                cb();
              }
            });
          }
        }, {
          key: "showButtonUIEnter",
          value: function showButtonUIEnter() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              var list = [_this5.enemyInfoButton, _this5.towerInfoButton];
              var screenSize = view.getVisibleSize();
              var screenWidth = screenSize.width;
              var promiseList = [];

              var runAction = function runAction(node, index) {
                return new Promise(function (resolve, reject) {
                  var dir = index === 0 ? -1 : 1;
                  var tw = new Tween(node);
                  tw.to(0.4, {
                    position: v3(-dir * 100 + screenWidth * 0.5 * dir, 0, 0)
                  });
                  tw.call(function () {
                    console.log("进场结束");
                    resolve();
                  });
                  tw.start();
                });
              };

              for (var i = 0; i < list.length; i++) {
                var node = list[i];
                promiseList.push(runAction(node, i));
              }

              Promise.all(promiseList).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "setUINodeTo3dPos",
          value: function setUINodeTo3dPos(uiNode, node3d) {
            var pos;
            pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
            uiNode.setPosition(pos);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            console.log("on button click", customData);
            find("GameController").emit("player-button-click-audio");

            switch (customData) {
              case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.node.emit("player-click-game");
                break;

              default:
                break;
            }
          }
        }, {
          key: "setHoldSkillIcon",
          value: function setHoldSkillIcon(value) {
            //拖起了 技能点
            this.isHoldSkillIcon = value;
          }
        }, {
          key: "showBossIconAnim",
          value: function showBossIconAnim() {
            var _this6 = this; //显示


            return new Promise(function (resolve, reject) {
              var node = new Node();
              var spriteCom = node.addComponent(SpriteComponent);
              spriteCom.spriteFrame = _this6.bossIcon;
              node.parent = _this6.node;
              var tw = new Tween(node);
              tw.set({
                scale: v3(2, 2, 2),
                position: v3(0, 240, 0)
              });
              tw.to(0.2, {
                scale: v3(1, 1, 1)
              }, {
                easing: "backIn"
              });
              tw.delay(0.8);
              tw.hide();
              tw.call(function () {
                node.destroy();
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "playerClickNextLevelButton",
          value: function playerClickNextLevelButton() {
            //玩家点击了下一关的按钮
            this.gameController.enterNextLevel();
          } // watchAds(){
          //     return this.gameController.getComponent(GameController).watchAds();
          // }

        }]);

        return UIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildTowerPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updateMenuPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bossIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameResultPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "currentLevelLabelIcon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoLayer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/SkillCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../util/State.js", "./UIController.js", "../Towers/TowerBase.js", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, SpriteFrame, Node, CCInteger, view, v3, find, CameraComponent, UITransformComponent, Tween, isValid, instantiate, Component, State, UIController, TowerBase, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, ccclass, property, SkillCtl;

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
    _dec11: void 0,
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
    _descriptor10: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      Node = _cc.Node;
      CCInteger = _cc.CCInteger;
      view = _cc.view;
      v3 = _cc.v3;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      UITransformComponent = _cc.UITransformComponent;
      Tween = _cc.Tween;
      isValid = _cc.isValid;
      instantiate = _cc.instantiate;
      Component = _cc.Component;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_UIControllerJs) {
      UIController = _UIControllerJs.UIController;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "40520LpyUZJx6EmYjb+U/Iw", "SkillCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkillCtl", SkillCtl = (_dec = ccclass('SkillCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: CCInteger
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SkillCtl, _Component);

        function SkillCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SkillCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SkillCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "\u72C2\u66B4\u9053\u5177Prefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "\u72C2\u66B4\u9053\u5177SpriteFrameRed", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "\u72C2\u66B4\u9053\u5177SpriteFrameGray", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillsNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentSkillCount", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillRedBgList", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillButtonNode", _descriptor7, _assertThisInitialized(_this));

          _this.skillNodeList = [];
          _this.currentTouchNode = null;
          _this.cameraNodeCom = null;
          _this.gameController = null;
          _this.timeoutResolve = undefined;
          _this.rayCheckResolve = undefined;
          _this.targetTower = undefined;
          _this.currentSkillPower = 0;

          _initializerDefineProperty(_this, "skillPowerFullEffect", _descriptor8, _assertThisInitialized(_this));

          _this.state = new State();

          _initializerDefineProperty(_this, "addPowerAnim3dPrefab", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillDouIcon", _descriptor10, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SkillCtl, [{
          key: "onLoad",
          //需要拖动的技能图标
          value: function onLoad() {// let repeatTw = new Tween()
            // let tw = new Tween(this);
            // tw.repeatForever()
            // tw.start();
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            var screenWidth = view.getVisibleSize().width;
            this.skillButtonNode.position = v3(screenWidth * 0.5 + 100, this.skillButtonNode.position.y, this.skillButtonNode.position.z);
            this.gameController = find("GameController").getComponent(GameController);
            this.gameController.node.on("touch-screen-to-3d", function (resultList) {
              //玩家射中了一个 tower
              for (var i = 0; i < resultList.length; i++) {
                var result = resultList[i];

                if (result.collider && result.collider.node) {
                  if (result.collider.node.getComponent(TowerBase)) {
                    // console.log("点中了tower  skill node");
                    if (_this2.rayCheckResolve) {
                      _this2.targetTower = result.collider.node;

                      _this2.rayCheckResolve('check-succ');

                      _this2.rayCheckResolve = undefined;
                      break;
                    }
                  }
                }
              }
            });
            this.cameraNodeCom = find("Camera").getComponent(CameraComponent); //首先绘制， 技能豆的背景
            // let activeSkillCount = this.gameController.playerData.currentActiveSkillCount;
            // for (let i = 0; i < activeSkillCount; i++) {
            //     let node = new Node();
            //     let sprite = node.addComponent(SpriteComponent);
            //     sprite.spriteFrame = this.狂暴道具SpriteFrameGray;
            //     node.addComponent(UITransformComponent);
            //     node.position = v3(i * 110 - 320, 0);
            //     node.parent = this.skillsNode;
            //     this.skillBgNodeList.push(node);
            // }
            // //根据当前，技能豆的个数，初始化，技能都
            // let currentSkillCount = this.gameController.playerData.currentSkillCount;
            // for (let i = 0; i < currentSkillCount; i++) {
            //     let node = new Node();
            //     let sprite = node.addComponent(SpriteComponent);
            //     sprite.spriteFrame = this.狂暴道具SpriteFrameRed;
            //     node.addComponent(UITransformComponent);
            //     node.parent = this.skillsNode;
            //     node.position = this.skillBgNodeList[i].position;
            //     this.skillNodeList.push(node);
            // }
            // for (let i = 0; i < this.currentSkillCount; i++) {
            //     let node = instantiate(this.狂暴道具Prefab);
            //     node.parent = this.skillsNode;
            //     node.position = v3(i * 100 - 300, 0, 0);
            //     this.skillNodeList.push(node);
            // }
            // console.log("this skill node lsit", this.skillNodeList);

            this.node.on(Node.EventType.TOUCH_START, function (event) {
              console.log("touch start", event);

              var boundingBox = _this2.skillDouIcon.getComponent(UITransformComponent).getBoundingBoxToWorld();

              var pos = event.getUILocation(); // let endPos = this.node.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
              // console.log("pos", pos);
              // console.log("pos", endPos);
              // console.log("bounding box", boundingBox);

              if (boundingBox.contains(pos)) {
                console.log("点中了 技能点");
                _this2.currentTouchNode = _this2.skillDouIcon;

                _this2.startCheckSkillNode();

                _this2.node.getComponent(UIController).setHoldSkillIcon(true);
              }
            });
            this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
              if (_this2.currentTouchNode) {
                var pos = event.getUILocation();

                var endPos = _this2.node.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0)); // let endPos = pos;


                _this2.currentTouchNode.position = v3(endPos.x, endPos.y, 0);
              }
            });
            this.node.on(Node.EventType.TOUCH_END, function (event) {
              if (_this2.currentTouchNode) {
                //手上有
                console.log("释放");

                _this2.scheduleOnce(function () {
                  // this.gameController.setHoldSkillIcon(false);
                  _this2.node.getComponent(UIController).setHoldSkillIcon(false);

                  if (_this2.timeoutResolve) {
                    _this2.timeoutResolve('timeout');

                    _this2.timeoutResolve = undefined;
                  }
                }, 0.1);
              }
            });
          }
        }, {
          key: "startCheckSkillNode",
          value: function startCheckSkillNode() {
            var _this3 = this;

            var promiseList = [new Promise(function (resolve, reject) {
              _this3.rayCheckResolve = resolve;
            }), new Promise(function (resolve, reject) {
              _this3.timeoutResolve = resolve;
            })];
            Promise.race(promiseList).then(function (type) {
              //触摸结束 
              if (type === 'timeout') {
                // for (let i = 0; i < this.skillNodeList.length; i++) {
                //     let node = this.skillNodeList[i];
                //     if (node.uuid === this.currentTouchNode.uuid) {
                //         // this.currentTouchNode.position = this.skillBgNodeList[i].position;
                //         // this.currentTouchNode = undefined;
                //         break;
                //     }
                // }
                console.log("超市了");
                var tw = new Tween(_this3.currentTouchNode);
                tw.to(0.2, {
                  position: _this3.skillButtonNode.position
                });
                tw.call(function () {
                  _this3.currentTouchNode = undefined;
                });
                tw.start();
              } else {
                console.log("释放技能成功");

                if (isValid(_this3.targetTower)) {
                  console.log("给目标塔发送消息，释放技能"); //如果存在需要释放技能的塔，那么需要让此塔来释放技能
                  // let objectType = this.currentTouchNode.getComponent(KuangBaoSkill).objectType;
                  // console.log("object type", objectType);

                  _this3.targetTower.getComponent(TowerBase).releaseSkill(); // for (let i = 0; i < this.skillNodeList.length; i++) {
                  //     let skillNode = this.skillNodeList[i];
                  //     if (skillNode.uuid === this.currentTouchNode.uuid) {
                  //         this.skillNodeList.splice(i, 1);
                  //         break;
                  //     }
                  // }
                  // this.currentTouchNode.destroy();


                  _this3.currentTouchNode.active = false;
                  _this3.currentTouchNode.position = _this3.skillButtonNode.position;
                  _this3.skillPowerFullEffect.active = false;
                  _this3.currentSkillPower = 0;

                  for (var i = 0; i < _this3.skillRedBgList.length; i++) {
                    var node = _this3.skillRedBgList[i];
                    node.position = v3(node.position.x, -80, node.position.z);
                  }

                  _this3.currentTouchNode = undefined;
                }
              }
            });
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var v = view.getVisibleSize();
              var height = v.height;
              console.log("height", height);
              var tw = new Tween(_this4.skillButtonNode);
              tw.to(0.2, {
                // position: v3(0, height * -0.5 + 74, 0)
                position: v3(v.width * 0.5 - 110, _this4.skillButtonNode.position.y, _this4.skillButtonNode.position.z)
              });
              tw.call(function () {
                resolve();

                _this4.state.setState("run"); // this.addSkillPower(80);

              });
              tw.start();
            });
          }
        }, {
          key: "addSkillPower",
          value: function addSkillPower(power) {
            if (this.currentSkillPower >= 80) {
              return;
            }

            this.currentSkillPower += power;
            var rate = this.currentSkillPower / 80;

            if (rate === 1) {
              this.skillPowerFullEffect.active = true;
              this.skillDouIcon.active = true;
              this.skillDouIcon.position = this.skillButtonNode.position;
            }

            for (var i = 0; i < this.skillRedBgList.length; i++) {
              var node = this.skillRedBgList[i];
              node.position = v3(node.position.x, -80 + rate * 80, node.position.z);
            }
          }
        }, {
          key: "showAddPowerAnimEffect",
          value: function showAddPowerAnimEffect(powerValue, pos) {
            var _this5 = this;

            var node = instantiate(this.addPowerAnim3dPrefab);
            node.parent = this.gameController.node;
            node.position = pos;
            var tw = new Tween(node);
            tw.by(0.4, {
              position: v3(0, 5, 0)
            });
            tw.delay(0.6);
            tw.to(0.6, {
              position: v3(45, 10, 0)
            });
            tw.call(function () {
              node.destroy();

              _this5.addSkillPower(powerValue);
            });
            tw.start();
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.state.getState() === 'run') {
              for (var i = 0; i < this.skillRedBgList.length; i++) {
                var node = this.skillRedBgList[i];
                node.position = v3(node.position.x + dt * 20, node.position.y, node.position.z);

                if (node.position.x > 153) {
                  var index = i === 0 ? 1 : 0;
                  var oNode = this.skillRedBgList[index];
                  node.position = v3(oNode.position.x - 152, oNode.position.y, oNode.position.z);
                }
              }
            }
          }
        }]);

        return SkillCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "\u72C2\u66B4\u9053\u5177Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "\u72C2\u66B4\u9053\u5177SpriteFrameRed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "\u72C2\u66B4\u9053\u5177SpriteFrameGray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skillsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currentSkillCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillRedBgList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "skillButtonNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "skillPowerFullEffect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "addPowerAnim3dPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "skillDouIcon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Towers/TowerBase.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js", "../util/State.js", "../TowerBuildBase/TowerBuildBase.js", "../Enemys/EnemyBase.js", "../EnemyController.js", "../UI/SkillCtl.js", "../GameController.js", "../BulletBase.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Prefab, Node, CCFloat, v3, find, SkeletalAnimationComponent, isValid, Tween, instantiate, Vec3, v2, Quat, BaseObject, State, TowerBuildBase, EnemyBase, EnemyController, SkillCtl, GameController, BulletBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, TowerBase;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
      v3 = _cc.v3;
      find = _cc.find;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      isValid = _cc.isValid;
      Tween = _cc.Tween;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      v2 = _cc.v2;
      Quat = _cc.Quat;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_TowerBuildBaseTowerBuildBaseJs) {
      TowerBuildBase = _TowerBuildBaseTowerBuildBaseJs.TowerBuildBase;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_EnemyControllerJs) {
      EnemyController = _EnemyControllerJs.EnemyController;
    }, function (_UISkillCtlJs) {
      SkillCtl = _UISkillCtlJs.SkillCtl;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BulletBaseJs) {
      BulletBase = _BulletBaseJs.BulletBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93965WLO/1GpoRxL0uoTS9a", "TowerBase", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBase", TowerBase = (_dec = ccclass('TowerBase'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: CCFloat
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(TowerBase, _BaseObject);

        function TowerBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new State();
          _this.currentTargetEnemy = null;
          _this.currentShootTime = 0;

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bulletStartPosList", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponBaseNode", _descriptor3, _assertThisInitialized(_this));

          _this.currentShootDiraction = v3(0, 0, 0);
          _this.gameConfig = null;

          _initializerDefineProperty(_this, "attackAnimEventTimeOffset", _descriptor4, _assertThisInitialized(_this));

          _this.towerBuildBase = null;

          _initializerDefineProperty(_this, "attackRangeNode", _descriptor5, _assertThisInitialized(_this));

          _this.skillCtl = null;
          _this.currentShootBulletIndex = 0;
          _this.isShooting = false;
          return _this;
        }

        _createClass(TowerBase, [{
          key: "init",
          // private shootAudio: string = "";//子弹发射时候的音效
          value: function init(gameConfig, gameController) {
            _get(_getPrototypeOf(TowerBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.skillCtl = find("Canvas").getComponent(SkillCtl);
            this.gameConfig = gameConfig;
            console.log('tower base init');
            this.node.emit("init", gameConfig, gameController); // this.shootAudio = 
            // this.node.on("weapon-euler-angles-init", ()=>{
            //     //武器角度归为
            // })
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            console.log("tower base start");
            this.state.setState("run"); // let moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度
            // let accY = GameController.accY;

            this.gameController = find("GameController").getComponent(GameController); // this.gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
            // let attackRate = this.gameConfig[this.objectType].ShootRate;
            // this.attackRate = attackRate;
            // this.shootDuraction = 1 / this.baseAttackRate;

            this.gameController.node.on("touch-screen-to-3d", this.touchScreenTo3d.bind(this), this);
            this.gameController.node.on("destroy-all-tower", this.destroyAllTower.bind(this), this);
            this.state.addState("releas-skill", function () {
              if (_this2.currentTargetEnemy) {
                _this2.currentTargetEnemy = null;
              }

              _this2.node.emit("release-skill", function () {
                //释放技能
                _this2.state.setState('run');
              });
            });
            this.state.addState("destroy", function () {
              //销毁状态
              // if (this.towerBuildBase) {
              //     this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
              // }
              // this.node.destroy();
              var skeleteAnim = _this2.rootNode.getComponent(SkeletalAnimationComponent);

              var randomPos = v3(Math.random() * 2, 0, Math.random() * 2);

              if (skeleteAnim) {
                var destroyAnimName = "骨架|todestroy"; // let destroyClip = skeleteAnim.clips[2];

                var stateAnim = skeleteAnim.getState(destroyAnimName);

                if (stateAnim) {
                  stateAnim.repeatCount = 1;
                  skeleteAnim.play(destroyAnimName);

                  _this2.scheduleOnce(function () {
                    if (_this2.towerBuildBase) {
                      _this2.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(_this2.node);
                    }

                    _this2.gameController.getComponent(GameController).showAddGoldAnimEffect(_this2.getDestroyCount(), v3(_this2.node.position.x, 0, _this2.node.position.z).add(randomPos));

                    _this2.node.destroy();
                  }, stateAnim.length);
                } else {
                  _this2.node.destroy();

                  if (_this2.towerBuildBase) {
                    _this2.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(_this2.node);

                    _this2.gameController.getComponent(GameController).showAddGoldAnimEffect(_this2.getDestroyCount(), v3(_this2.node.position.x, 0, _this2.node.position.z).add(randomPos));
                  }
                }
              } else {
                _this2.node.destroy();

                if (_this2.towerBuildBase) {
                  _this2.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(_this2.node);

                  _this2.gameController.getComponent(GameController).showAddGoldAnimEffect(_this2.getDestroyCount(), v3(_this2.node.position.x, 0, _this2.node.position.z).add(randomPos));
                }
              } // if (skeleteAnim.clips.length < 3) {
              //     this.node.destroy();
              //     if (this.towerBuildBase) {
              //         this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
              //     }
              //     return;
              // }

            });
          }
        }, {
          key: "destroyAllTower",
          value: function destroyAllTower() {
            this.node.destroy();
          }
        }, {
          key: "touchScreenTo3d",
          value: function touchScreenTo3d(resultList) {
            console.log("射线检测到了 tower"); // if (collider.node && collider.node.uuid === this.node.uuid) {
            //     this.gameController.emit("touch-tower", this.node);
            // }

            if (this.state.getState() !== 'run') {
              return;
            }

            for (var i = 0; i < resultList.length; i++) {
              var result = resultList[i];

              if (result.collider.node.uuid === this.node.uuid) {
                //点中了此塔
                this.gameController.node.emit("touch-tower", this.node);
                break;
              }
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            console.log("销毁");
            this.gameController.node.off('touch-screen-to-3d', this.touchScreenTo3d, this);
            this.gameController.node.on("destroy-all-tower", this.destroyAllTower, this);
          }
        }, {
          key: "toDestroy",
          value: function toDestroy() {
            //去销毁
            this.state.setState('destroy');
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            var _this3 = this; //     // Your update function goes here.


            if (this.state.getState() === 'run') {
              var attackEnemy = this.getAttackType();

              if (attackEnemy === 'normal') {
                var targetEnemy = this.findSingleEnemy(deltaTime);

                if (isValid(targetEnemy)) {
                  if (this.isShooting) {
                    return;
                  }

                  this.isShooting = true; // this.currentShootTime = 0;
                  // console.log("shoot duraction", this.shootDuraction);

                  this.shootOneBullet(this.getCurrentAttackRate(), this.currentShootDiraction, this.getCurrentAttackNum()).then(function () {
                    _this3.scheduleOnce(function () {
                      _this3.isShooting = false;
                    }, _this3.shootDuraction);
                  });
                }
              } else if (attackEnemy === 'Range') {
                if (this.isShooting) {
                  return;
                }

                this.isShooting = true;

                var _targetEnemy = this.findRangeEnemy(deltaTime);

                if (isValid(_targetEnemy)) {
                  this.playOneTimeAttackAnim().then(function () {
                    // return this.
                    return _this3.createOneGuideMissile();
                  }).then(function () {
                    _this3.scheduleOnce(function () {
                      _this3.isShooting = false;
                    }, _this3.shootDuraction);
                  });
                } //             this.createOneGuideMissile().then(() => {
                //                 this.scheduleOnce(() => {
                //                     this.isShooting = false;
                //                 }, this.shootDuraction);
                //             });
                //         });

              } else if (attackEnemy === 'Auto') {
                var _targetEnemy2 = this.findSingleEnemy(deltaTime);

                if (isValid(_targetEnemy2)) {
                  //找到了敌人
                  if (isValid(this.rootNode)) {
                    this.rootNode.lookAt(this.currentTargetEnemy.position); // console.log("this,root node", this.rootNode.eulerAngles);

                    if (this.rootNode.eulerAngles.x < 0) {
                      this.rootNode.eulerAngles = v3(0, this.rootNode.eulerAngles.y, this.rootNode.eulerAngles.z);
                    }
                  }

                  if (this.weaponBaseNode) {
                    this.weaponBaseNode.lookAt(this.currentTargetEnemy.position);
                    this.weaponBaseNode.eulerAngles = v3(0, this.weaponBaseNode.eulerAngles.y, this.rootNode.eulerAngles.z);
                  }

                  if (this.isShooting) {
                    return;
                  }

                  this.isShooting = true;
                  var animName = "骨架|AttackAnim";
                  var skeleAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
                  var stateAnim = skeleAnim.getState(animName); // let length = stateAnim

                  var tw = new Tween(this.node);
                  tw.delay(0.1);
                  tw.call(function () {
                    // stateAnim.repeatCount = 0;
                    skeleAnim.play(animName);
                  });

                  var shoot = function shoot(tw) {
                    tw.call(function () {
                      // console.log("发射一枚子弹")
                      // this.shootOneBullet(this.getCurrentAttackRate(), this.currentShootDiraction, this.getCurrentAttackNum()).then(() => {
                      //     this.scheduleOnce(() => {
                      //         this.isShooting = false;
                      //     }, this.shootDuraction);
                      // });
                      // createOneTimeBullet\
                      var direction = v3(_this3.currentShootDiraction);

                      if (isValid(_this3.currentTargetEnemy) && !_this3.currentTargetEnemy.getComponent(EnemyBase).getIsDead()) {
                        _this3.createOneTimeBullet(direction).then(function () {});
                      }
                    });
                    tw.delay(0.1);
                  };

                  for (var i = 0; i < 10; i++) {
                    shoot(tw);
                  }

                  tw.call(function () {
                    // stateAnim.repeatCount = 1;
                    stateAnim.stop();
                  });
                  tw.delay(this.shootDuraction);
                  tw.call(function () {
                    _this3.isShooting = false;
                  });
                  tw.start();
                }
              }
            }
          }
        }, {
          key: "playOneTimeAttackAnim",
          value: function playOneTimeAttackAnim() {
            var _this4 = this; //播放一次攻击效果


            return new Promise(function (resolve, reject) {
              var animName = "骨架|AttackAnim";

              var skeleAnim = _this4.rootNode.getComponent(SkeletalAnimationComponent);

              var stateAnim = skeleAnim.getState(animName);
              stateAnim.repeatCount = 1;
              skeleAnim.play(animName);
              var length = stateAnim.length;
              console.log("length", length); // let timeScale =  length / this.shootDuraction;

              stateAnim.speed = 1;
              var tw = new Tween(_this4.node);
              tw.delay(length * _this4.attackAnimEventTimeOffset);
              tw.call(function () {
                //         // console.log("发射");
                //         // let v = v3(0, 1, 0);
                //         // this.createOneTimeBullet(v, this.getCurrentAttackNum())
                resolve();
              });
              tw.delay(length * (1 - _this4.attackAnimEventTimeOffset));
              tw.call(function () {//         // console.log("发射导弹结束");
              });
              tw.start();
            });
          }
        }, {
          key: "findRangeEnemy",
          value: function findRangeEnemy(deltaTime) {
            //寻找范围内敌人。
            // console.log("寻找范围内敌人");
            // return new Promise((resolve, reject) => {
            if (this.currentTargetEnemy === null) {
              var enemyNodeList = this.gameController.getComponent(EnemyController).getCurrentEnemyNodeList();

              for (var i = 0; i < enemyNodeList.length; i++) {
                var node = enemyNodeList[i];

                if (isValid(node) && this.getCanAttackEnemy(node) && node.getComponent(EnemyBase).getIsCanLock() && !node.getComponent(EnemyBase).getIsDead()) {
                  var dis = v3(this.node.position).subtract(node.position).length();

                  if (dis < this.getCurrentAttackRange()) {
                    // this.currentTargetEnemy = node;
                    // console.log("找到了可以攻击的敌人");
                    // resolve(this.currentTargetEnemy);
                    // return this.currentTargetEnemy;
                    this.currentTargetEnemy = node;
                    return node; // break;
                  }
                }
              }
            } else {
              if (isValid(this.currentTargetEnemy) && !this.currentTargetEnemy.getComponent(EnemyBase).getIsDead()) {
                return this.currentTargetEnemy;
              }

              this.currentTargetEnemy = null;
              return null;
            }
          } // })
          // }

        }, {
          key: "createOneGuideMissile",
          value: function createOneGuideMissile() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              console.log("创建一枚导弹");
              var startPosNode = _this5.bulletStartPosList[0];
              var tw = new Tween(startPosNode);
              var oldPos = v3(startPosNode.position);
              tw.by(0.4, {
                position: v3(0, 4, 0)
              });
              tw.call(function () {
                startPosNode.active = false;
                var node = instantiate(_this5.bulletPrefab);
                node.parent = _this5.node.parent;
                node.position = startPosNode.worldPosition;
                node.getComponent(BulletBase).init(_this5.gameConfig, _this5.gameController, {
                  baseAttackNum: _this5.getCurrentAttackNum()
                });
              });
              tw.delay(0.8);
              tw.call(function () {
                startPosNode.position = oldPos;
                startPosNode.active = true;
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "findSingleEnemy",
          value: function findSingleEnemy(deltaTime) {
            //当前的状态是运行状态
            //寻找合适的 敌人
            // this.node.rotate(new Quat(0,0.001,0,0));
            // this.node.eulerAngles = new Vec3(0,90,0);
            if (this.currentTargetEnemy === null) {
              var enemyNodeList = this.gameController.getComponent(EnemyController).getCurrentEnemyNodeList();
              var minLength = 10000;
              var targetEnemyNode = undefined;

              for (var i = 0; i < enemyNodeList.length; i++) {
                var enemyNode = enemyNodeList[i];

                if (isValid(enemyNode) && enemyNode.getComponent(EnemyBase).getIsCanLock() && !enemyNode.getComponent(EnemyBase).getIsDead() && this.getCanAttackEnemy(enemyNode)) {
                  // if (this.getCanAttackEnemy(enemyNode)) {
                  var length = new Vec3(enemyNode.position).subtract(this.node.position).length();

                  if (length < minLength) {
                    minLength = length; // this.currentTargetEnemy = enemyNode;

                    targetEnemyNode = enemyNode;
                  }
                }
              } // if (this.currentTargetEnemy) {
              // this.currentTargetEnemy.getComponent(EnemyBase).setBeLocked(this.node);
              // }


              if (targetEnemyNode) {
                var dis = v2(targetEnemyNode.position.x, targetEnemyNode.position.z).subtract(v2(this.node.position.x, this.node.position.z)).length(); // console.log("dis", dis);
                // this.rootNode.lookAt(targetEnemyNode.position);

                if (dis < this.getCurrentAttackRange()) {
                  // this.rootNode.lookAt(targetEnemyNode.position);
                  this.currentTargetEnemy = targetEnemyNode;
                }
              }
            }

            if (isValid(this.currentTargetEnemy)) {
              // console.log("找到了目标敌人");
              if (this.getAttackType() === 'normal' && this.rootNode) {
                this.rootNode.lookAt(this.currentTargetEnemy.position); // console.log("this,root node", this.rootNode.eulerAngles);

                if (this.rootNode.eulerAngles.x < 0) {
                  this.rootNode.eulerAngles = v3(0, this.rootNode.eulerAngles.y, this.rootNode.eulerAngles.z);
                }
              }

              if (this.currentTargetEnemy.getComponent(EnemyBase) && this.currentTargetEnemy.getComponent(EnemyBase).getIsDead()) {
                this.currentTargetEnemy = null;
              } else {
                this.currentShootDiraction = v3(this.currentTargetEnemy.position).subtract(v3(this.node.position)); // let angle = v2(this.currentShootDiraction.x, this.currentShootDiraction.z).signAngle(v2(0, -1));
                // console.log("angle", angle);
                // this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);

                if (this.getAttackType() === 'normal') {
                  var quat = new Quat();
                  var v = v3(this.currentShootDiraction.x, 0, this.currentShootDiraction.z).normalize();
                  Quat.fromViewUp(quat, v, Vec3.UP);
                  var lerpQ = new Quat();
                  Quat.lerp(lerpQ, this.node.rotation, quat, 0.2);
                  this.node.rotation = quat;
                }
              }
            }

            if (isValid(this.currentTargetEnemy)) {
              // if (this.currentShootTime > this.shootDuraction) {
              // } else {
              //     this.currentShootTime += deltaTime;
              // }
              var _dis = v2(this.currentTargetEnemy.position.x, this.currentTargetEnemy.position.z).subtract(v2(this.node.position.x, this.node.position.z)).length();

              if (_dis > this.getCurrentAttackRange()) {
                this.currentTargetEnemy = null;
                return null;
              }
            } else {
              this.currentTargetEnemy = null;
            }

            return this.currentTargetEnemy;
          }
        }, {
          key: "getCurrentAttackRate",
          value: function getCurrentAttackRate() {
            return this.baseAttackRate;
          }
        }, {
          key: "shootOneBullet",
          value: function shootOneBullet(attackRate, currentShootDiraction, attackNum) {
            var _this6 = this; // if(this.weaponBaseNode){
            //     let weaponSkeleteAnim = this.weaponBaseNode.getComponent(SkeletalAnimationComponent);
            //     if (weaponSkeleteAnim){
            //         let animName = "骨架|AttackAnim";
            //         let animState = skeleteAnim.getState(animName)';'
            //     }
            // }


            return new Promise(function (resolve, reject) {
              var baseNodeList = [];

              if (_this6.rootNode) {
                baseNodeList.push(_this6.rootNode);
              }

              if (_this6.weaponBaseNode) {
                baseNodeList.push(_this6.weaponBaseNode);
              }

              var isHaveBullet = false;

              if (_this6.getBulletRecoverTime() > 0) {
                for (var i = 0; i < _this6.bulletStartPosList.length; i++) {
                  var node = _this6.bulletStartPosList[i];

                  if (node.active) {
                    isHaveBullet = true;
                    break;
                  }
                }
              } else {
                isHaveBullet = true;
              }

              if (!isHaveBullet) {
                resolve();
                return;
              }

              var length = 0;

              for (var _i = 0; _i < baseNodeList.length; _i++) {
                var skeleteAnim = baseNodeList[_i].getComponent(SkeletalAnimationComponent);

                if (skeleteAnim) {
                  // let defaultAnimName = skeleteAnim.defaultClip.name;
                  var animName = "骨架|AttackAnim";
                  var animState = skeleteAnim.getState(animName); // let lengthTime = animState.length * 1 / attackRate;
                  // console.log("length", length);

                  skeleteAnim.play(animName);
                  animState.repeatCount = 1;

                  var attackSpeedLevel = _this6.getAttackSpeedLevel();

                  var scale = (attackSpeedLevel + 10) / 10;
                  animState.speed = scale;
                  length = animState.length * (1 / scale); // let stateAnim = skeleteAnim.getState(animName);
                }
              }

              console.log("shoot one bullet length", length); // stateAnim.setTime(0.5);

              _this6.scheduleOnce(function () {
                _this6.gameController.node.emit("play-audio", _this6.shootAudio); // if (isValid(this.currentTargetEnemy)) {


                _this6.createOneTimeBullet(currentShootDiraction).then(function () {
                  resolve();
                }); // }

              }, length * _this6.attackAnimEventTimeOffset);
            });
          }
        }, {
          key: "createOneTimeBullet",
          value: function createOneTimeBullet(direction) {
            var _this7 = this;

            console.log("创建一枚导弹");
            return new Promise(function (resolve, reject) {
              resolve();

              var _loop = function _loop(i) {
                var bulletPosNode = _this7.bulletStartPosList[i];

                if (bulletPosNode.active) {
                  var bulletNode = instantiate(_this7.bulletPrefab);
                  bulletNode.parent = _this7.node.parent;
                  bulletNode.active = false;
                  bulletNode.setPosition(bulletPosNode.worldPosition);
                  bulletNode.active = true; // console.log("createOneBullet base attack num", attackNum);
                  // direction.
                  // let randomVec = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                  // direction.add(randomVec);

                  bulletNode.getComponent(BulletBase).init(_this7.gameConfig, _this7.gameController, {
                    direction: direction,
                    targetEnemy: _this7.currentTargetEnemy,
                    baseAttackNum: _this7.getCurrentAttackNum(),
                    targetTower: _this7
                  });

                  if (_this7.getIsNeedRecoverBullet()) {
                    bulletPosNode.active = false;
                    _this7.currentShootBulletIndex++;

                    if (_this7.currentShootBulletIndex === _this7.bulletStartPosList.length) {
                      _this7.currentShootBulletIndex = 0;
                    }

                    var oldPos = v3(bulletPosNode.position);
                    var tw = new Tween(bulletPosNode);
                    var offsetV = v3(bulletPosNode.position).subtract(v3(0, 0.3, -0.3));

                    if (_this7.getAttackType() === "Range") {
                      offsetV = v3(bulletPosNode.position).subtract(v3(0, -1, 0));
                    }

                    tw.set({
                      position: offsetV
                    });
                    tw.delay(_this7.getBulletRecoverTime());
                    tw.call(function () {
                      bulletPosNode.active = true;
                    });
                    tw.to(0.2, {
                      position: oldPos
                    });
                    tw.start();
                    return "break";
                  }
                }
              };

              for (var i = _this7.currentShootBulletIndex; i < _this7.bulletStartPosList.length; i++) {
                var _ret = _loop(i);

                if (_ret === "break") break;
              }
            });
          }
        }, {
          key: "enemyDeadByThis",
          value: function enemyDeadByThis(isDead) {
            //敌人被此塔打死
            if (isDead) {
              //如果敌人被打死了, 那么此塔增加能量 一个点
              if (isValid(this.skillCtl)) {
                this.skillCtl.showAddPowerAnimEffect(2, this.node.position);
              }
            }
          }
        }, {
          key: "releaseSkill",
          value: function releaseSkill() {
            //塔释放技能
            // let towerType = this.
            // let towerSkillType = th
            console.log("release skill", this.objectType); // let towerSkillType = this.gameConfig[this.objectType].SkillType;
            // console.log("tower skill type", towerSkillType);
            //释放的塔的技能

            this.state.setState("releas-skill"); //释放技能s
          }
        }, {
          key: "setTowerBuildBase",
          value: function setTowerBuildBase(towerBuildBase) {
            this.towerBuildBase = towerBuildBase;
          }
        }, {
          key: "updateLevel",
          value: function updateLevel() {
            _get(_getPrototypeOf(TowerBase.prototype), "updateLevel", this).call(this);
          }
        }, {
          key: "showAttackRange",
          value: function showAttackRange() {
            // this.attackRangeNode
            var attackRange = this.getCurrentAttackRange(); //获取基础攻击范围

            console.log("attack range", attackRange);
            this.attackRangeNode.active = true;
            var tw = new Tween(this.attackRangeNode);
            tw.to(0.1, {
              scale: v3(attackRange * 2, attackRange * 2, attackRange * 2)
            });
            tw.start();
          }
        }, {
          key: "closeAttackRange",
          value: function closeAttackRange() {
            var _this8 = this;

            var tw = new Tween(this.attackRangeNode);
            tw.to(0.1, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {
              _this8.attackRangeNode.active = false;
            });
            tw.start();
          }
        }]);

        return TowerBase;
      }(BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletStartPosList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weaponBaseNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attackAnimEventTimeOffset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "attackRangeNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Effect/WinGoldAnimEffect.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, SkeletalAnimationComponent, v3, find, Tween, Component, _dec, _class, _temp, ccclass, property, WinGoldAnimEffect;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      v3 = _cc.v3;
      find = _cc.find;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2ee3e+XrHFJlYuGFP9mqdRS", "WinGoldAnimEffect", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WinGoldAnimEffect", WinGoldAnimEffect = (_dec = ccclass('WinGoldAnimEffect'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WinGoldAnimEffect, _Component);

        function WinGoldAnimEffect() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WinGoldAnimEffect);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WinGoldAnimEffect)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.goldCount = 0;
          _this.skelete = null;
          return _this;
        }

        _createClass(WinGoldAnimEffect, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            //开始播放动画
            var skelete = this.node.getComponent(SkeletalAnimationComponent);
            this.skelete = skelete;

            if (skelete) {
              var defaultAnim = skelete.defaultClip; // defaultAnim.

              var state = skelete.getState(defaultAnim.name);
              state.repeatCount = 1;
              skelete.play(defaultAnim.name);
            } // this.node.eulerAngles = v3(0, Math.random() * 360, 0);
            // this.scheduleOnce(()=>{
            // },2);

          }
        }, {
          key: "setGoldCount",
          value: function setGoldCount(goldCount, gameController) {
            var _this2 = this; //设置金币个数
            // console.log("skelete", this.skelete);
            // let skelete = this.node.getComponent(SkeletalAnimationComponent);
            // if (skelete) {
            //     let animClip = skelete.clips[1];
            //     // console.log('anim clip name', animClip.name);
            //     let state = skelete.getState(animClip.name);
            //     state.repeatCount = 1;
            //     skelete.play(animClip.name);
            // }


            var dis = v3(this.node.position).subtract(v3(-25, 10, 0)).length();
            var speed = 50;
            var time = dis / speed;
            this.goldCount = goldCount;
            find("GameController").emit("play-audio", "金币掉落1");
            var tw = new Tween(this.node);
            tw.delay(3);
            tw.to(time, {
              // eulerAngles: v3(0, 0, 0),
              position: v3(-25, 10, 0)
            });
            tw.call(function () {
              // find("GameController").emit("")
              gameController.playerData.addGoldCount(goldCount);

              _this2.node.destroy();
            });
            tw.start();
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return WinGoldAnimEffect;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Home/HomeIcon.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, v3, Component, State, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, HomeIcon;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      Component = _cc.Component;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8213do7DSVI0IEO26O7s126", "HomeIcon", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HomeIcon", HomeIcon = (_dec = ccclass('HomeIcon'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(HomeIcon, _Component);

        function HomeIcon() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HomeIcon);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HomeIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "redHeartNode", _descriptor, _assertThisInitialized(_this));

          _this.state = new State();
          return _this;
        }

        _createClass(HomeIcon, [{
          key: "start",
          value: function start() {
            // this.node.eulerAngles
            // let tw = new Tween(this.node);
            // tw.to(1, {eulerAngles: v3(0,360,0)})
            // tw.call(()=>{
            //     this.node.eulerAngles = v3(0,0,0);
            // })
            // tw.repeatForever()
            // tw.start();
            this.state.setState("run");
          }
        }, {
          key: "frozenHomeIcon",
          value: function frozenHomeIcon() {
            this.state.setState("frozen");
          }
        }, {
          key: "freeHomeIconn",
          value: function freeHomeIconn() {
            this.state.setState("run");
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.state.getState() === "run") {
              this.redHeartNode.eulerAngles = this.redHeartNode.eulerAngles.add(v3(0, 1, 0));
            }
          }
        }]);

        return HomeIcon;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "redHeartNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameController.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./GroundMapCtl.js", "./EnemyController.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js", "./Home/HomeIcon.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, JsonAsset, Prefab, Tween, v3, isValid, PhysicsSystem, instantiate, SkeletalAnimationComponent, Component, State, TowerBuildBase, GroundMapCtl, EnemyController, TowerBuildBaseCtl, PlayData, TowerBase, WinGoldAnimEffect, HomeIcon, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, ccclass, property, GameController;

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
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      isValid = _cc.isValid;
      PhysicsSystem = _cc.PhysicsSystem;
      instantiate = _cc.instantiate;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      Component = _cc.Component;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_TowerBuildBaseTowerBuildBaseJs) {
      TowerBuildBase = _TowerBuildBaseTowerBuildBaseJs.TowerBuildBase;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_EnemyControllerJs) {
      EnemyController = _EnemyControllerJs.EnemyController;
    }, function (_TowerBuildBaseCtlJs) {
      TowerBuildBaseCtl = _TowerBuildBaseCtlJs.TowerBuildBaseCtl;
    }, function (_DataPlayerDataJs) {
      PlayData = _DataPlayerDataJs.PlayData;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_EffectWinGoldAnimEffectJs) {
      WinGoldAnimEffect = _EffectWinGoldAnimEffectJs.WinGoldAnimEffect;
    }, function (_HomeHomeIconJs) {
      HomeIcon = _HomeHomeIconJs.HomeIcon;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b4c0ApYS1B3bhehBCF/cvX", "GameController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: JsonAsset
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(GameController, _Component);

        function GameController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameConfigJson", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towersPrefabList", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startGameButton", _descriptor4, _assertThisInitialized(_this));

          _this.state = new State();

          _initializerDefineProperty(_this, "uiController", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "plate", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameStartButtonBase", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homeIconPrefab", _descriptor8, _assertThisInitialized(_this));

          _this.homeIconNode = null;
          _this.playerData = null;

          _initializerDefineProperty(_this, "goldAnim3dPrefab", _descriptor9, _assertThisInitialized(_this));

          _this.homeIconTw = null;
          return _this;
        }

        _createClass(GameController, [{
          key: "onLoad",
          // @property({ type: Node })
          // public testNode: Node = null;
          value: function onLoad() {
            this.playerData = new PlayData(this); // this.node.eulerAngles

            var tw = new Tween(this.plate);
            tw.repeatForever(new Tween(this.plate).to(20, {
              eulerAngles: v3(0, 360, 0)
            }).set({
              eulerAngles: v3(0, 0, 0)
            }));
            tw.start(); // let bezier = new BezierN([v3(0, 0, 0), v3(10, 30, 10), v3(20, 3, 0),v3(20, 100, 30)]);
            // let pointList: Vec3[] = bezier.getPointList(10);
            // console.log("point", pointList);
            // let tw = new Tween(this.testNode);
            // for (let i = 0; i < pointList.length; i++) {
            //     tw.to(0.2, { position: pointList[i] });
            // }
            // tw.call(() => {
            //     this.testNode.position = v3(0, 0, 0)
            // })
            // tw.repeatForever();
            // tw.start();
          }
        }, {
          key: "playerClickSaveLifeButton",
          value: function playerClickSaveLifeButton() {
            var _this2 = this; //玩家点击了 立即复活按钮


            return new Promise(function (resolve, reject) {
              resolve();

              if (isValid(_this2.homeIconNode)) {
                _this2.homeIconNode.active = false;
              } // this.node.emit("destroy-all-tower");
              // this.node.emit("destroy-all-tower-build-base");


              _this2.node.emit("destroy-all-enemy", function (goldCount) {
                _this2.playerData.addGoldCount(goldCount);

                _this2.showHomeIconEnterAnim().then(function () {
                  _this2.node.emit('update-gold-label', _this2.playerData.getCurrentGoldCount());

                  _this2.state.setState("run");

                  _this2.node.getComponent(EnemyController).continueGame(); //继续游戏

                });
              }); //销毁当前的所有敌人
              // this.node.emit("init-level-label"); //初始化当前的关卡label
              // this.uiController.node.emit('init-update-level');
              // this.enterGame().then(() => {
              //     this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
              //     this.state.setState("run");
              //     this.node.getComponent(EnemyController).startGame();
              // })
              // this.node.emit("")

            });
          }
        }, {
          key: "playerClickShareButton",
          value: function playerClickShareButton() {
            var _this3 = this; //玩家点击了分享按钮


            return new Promise(function (resolve, reject) {
              resolve();

              _this3.playerData.addGoldCount(_this3.playerData.currentGoldCount);
            });
          }
        }, {
          key: "playerClickRetryButton",
          value: function playerClickRetryButton() {
            var _this4 = this; //玩家点击了 重试一次的按钮
            // this.playerData.currentLevelNum = 0


            this.playerData.newGame();
            this.enterGame().then(function () {
              _this4.uiController.emit("refer-red-heart-label");

              _this4.node.emit('update-gold-label', _this4.playerData.getCurrentGoldCount());

              _this4.state.setState("run");

              _this4.node.getComponent(EnemyController).startGame();
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this5 = this;

            PhysicsSystem.instance.enable = true; // Your initialization goes here.

            this.state.addState("ready", function () {
              console.log("enter state ", _this5.state.getState()); // this.uiController.getComponent(WeaponInfoCtl).initWeaponData();
            });
            this.state.setState("ready");
            this.node.on("build-one-tower", function (index, towerBaseNode) {
              //建造一座塔
              _this5.uiController.emit("complete-current-guide");

              if (index < _this5.towersPrefabList.length) {
                var node = instantiate(_this5.towersPrefabList[index]);
                node.parent = _this5.node;
                node.getComponent(TowerBase).init(_this5.gameConfigJson.json, _this5);
                var pos = v3(towerBaseNode.position.x, 0, towerBaseNode.position.z);
                node.setPosition(pos);
                towerBaseNode.getComponent(TowerBuildBase).setTargetTower(node);
                node.getComponent(TowerBase).setTowerBuildBase(towerBaseNode);
              }
            });
            this.state.addState("play-start-button-anim", function () {
              // console.log("玩家点中了开始游戏按钮");
              _this5.uiController.emit("complete-current-guide"); //给ui控制器发送，完成了当前的引导操作


              _this5.node.emit("play-audio", "按钮音效");

              _this5.node.emit("play-bg-music");

              _this5.playStatrButtonPressAnim().then(function () {
                return new Promise(function (resolve, reject) {
                  var tw = new Tween(_this5.startGameButton).by(1, {
                    position: v3(0, -10, 0)
                  }).call(function () {
                    console.log('play over');

                    _this5.startGameButton.destroy();

                    resolve();
                  }).start();
                });
              }).then(function () {
                var tw = new Tween(_this5.gameStartButtonBase);
                tw.to(0.2, {
                  scale: v3(0, 0, 0)
                });
                tw.call(function () {
                  _this5.gameStartButtonBase.destroy();
                });
                tw.start();
                return _this5.node.getComponent(GroundMapCtl).showGroundEnterAnim();
              }).then(function () {
                // return this.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim();
                //展示塔的基座出现的动画
                return _this5.enterGame();
              }) // .then(() => {
              //     // return this.showHomeIconEnterAnim();
              // })
              .then(function () {
                // return this.node.getCom
                _this5.node.emit('update-gold-label', _this5.playerData.getCurrentGoldCount());

                return _this5.showUIEnterAnim();
              }).then(function () {
                _this5.state.setState("run");

                _this5.node.getComponent(EnemyController).startGame(); // this.node.getComponent(GroundMapCtl).startGame();

              });
            });
            this.state.addState("game-loss", function () {
              console.log("进入游戏失败的状态");

              _this5.uiController.emit('close-weapon-info-layer');

              _this5.node.getComponent(EnemyController).frozenAllEnemy();

              _this5.node.getComponent(TowerBuildBaseCtl).frozenAllTowerBuildBase(); //禁锢所有塔的基座
              // this.homeIconTw.stop();


              _this5.homeIconNode.getComponent(HomeIcon).frozenHomeIcon();

              var deadEnemyData = _this5.node.getComponent(EnemyController).getDeadEnemyData();

              _this5.scheduleOnce(function () {
                // this.uiController.showGameLossUI(deadEnemyData)
                _this5.uiController.emit("show-game-loss-ui", deadEnemyData);
              }, 0.6);
            }); // this.node.on("")
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            var _this6 = this; // return new Promise((resolve, reject) => {
            // let uiCtl = find("Canvas").getComponent(UIController);
            // if (uiCtl) {
            //     uiCtl.showUIEnterAnim().then(() => {
            //         resolve();
            //     })
            // }
            // })


            return new Promise(function (resolve, reject) {
              // return this.uiController.showUIEnterAnim()
              // 
              _this6.uiController.emit("show-ui-enter-anim", function () {
                resolve();
              });
            });
          } // showGroundMapEnterAnim(){
          // }
          // playerTouchOnSkillNode(skillNode: Node, targetTower: Node) {
          // }

        }, {
          key: "showHomeIconEnterAnim",
          value: function showHomeIconEnterAnim() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              if (!isValid(_this7.homeIconNode)) {
                _this7.homeIconNode = instantiate(_this7.homeIconPrefab);
                _this7.homeIconNode.parent = _this7.node;
              }

              var groundMapCtl = _this7.node.getComponent(GroundMapCtl);

              if (groundMapCtl) {
                var node = groundMapCtl.getMapNodeList().getValue(5, 5);
                _this7.homeIconNode.position = v3(node.position.x, 20, node.position.z);

                _this7.homeIconNode.getComponent(HomeIcon).freeHomeIconn();

                node.active = false;
                var tw = new Tween(_this7.homeIconNode); // this.homeIconTw = tw;

                _this7.homeIconNode.active = true;
                tw.call(function () {
                  node.active = true;
                });
                tw.to(2, {
                  position: v3(node.position.x, 0, node.position.z)
                }, {
                  easing: "quadOut"
                });
                tw.call(function () {
                  resolve();
                });
                tw.start();
              }
            });
          }
        }, {
          key: "playStatrButtonPressAnim",
          value: function playStatrButtonPressAnim() {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              var skeleAnim = _this8.startGameButton.getChildByName("StartGameButton").getComponent(SkeletalAnimationComponent);

              if (skeleAnim) {
                var defaultAnim = skeleAnim.defaultClip; // defaultAnim

                var animState = skeleAnim.getState(defaultAnim.name);
                animState.repeatCount = 1;
                var length = animState.length;
                skeleAnim.play(defaultAnim.name);

                _this8.scheduleOnce(function () {
                  console.log("播放完成");
                  resolve();
                }, length);
              } else {
                resolve();
              }
            });
          }
        }, {
          key: "playerTouch3dObject",
          value: function playerTouch3dObject(result) {
            if (this.state.getState() === 'ready') {
              for (var i = 0; i < result.length; i++) {
                var collider = result[i].collider;

                if (collider.node.uuid === this.startGameButton.uuid) {
                  this.state.setState("play-start-button-anim");
                }
              } // if (collider.node.uuid == this.startGameButton.uuid) {
              //     this.state.setState("play-start-button-anim");
              // }

            } else if (this.state.getState() === 'run') {
              this.node.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastResults);
            } // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);

          }
        }, {
          key: "update",
          value: function update(dt) {}
        }, {
          key: "getGameConfig",
          value: function getGameConfig() {
            return this.gameConfigJson;
          }
        }, {
          key: "getCurrentLevelNum",
          value: function getCurrentLevelNum() {
            return this.playerData.currentLevelNum;
          }
        }, {
          key: "showAddGoldAnimEffect",
          value: function showAddGoldAnimEffect(goldCount, targetPos) {
            var node = instantiate(this.goldAnim3dPrefab);
            node.parent = this.node;
            node.getComponent(WinGoldAnimEffect).setGoldCount(goldCount, this);
            node.position = targetPos;
          }
        }, {
          key: "showBossEnterState",
          value: function showBossEnterState() {
            // for (){
            // }
            //进入展示boss 进场的状态
            this.node.emit("show-boss-enter-state");
          }
        }, {
          key: "gameWin",
          value: function gameWin(deadEnemyData) {
            //游戏胜利，进入下一关
            //首先展示胜利失败页面
            // this
            //游戏胜利
            // this.uic
            this.uiController.emit("close-all-ui"); //重新刷新UI

            this.uiController.emit('close-weapon-info-layer');

            if (this.state.getState() === 'run') {
              this.state.setState("show-game-result"); //进入显示游戏结果的界面
              // this.uiController.showGameWinUI(deadEnemyData);

              this.uiController.emit("show-game-win-ui", deadEnemyData);
            }
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            var _this9 = this;

            this.playerData.enterNextLevel();
            console.log("进入下一关");
            this.enterGame().then(function () {
              _this9.node.emit('update-gold-label', _this9.playerData.getCurrentGoldCount());

              _this9.state.setState("run");

              _this9.node.getComponent(EnemyController).startGame();
            }); //把所有的tower都销毁掉，
            //把左右的tower 的基座删掉
          }
        }, {
          key: "enterGame",
          value: function enterGame() {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              if (isValid(_this10.homeIconNode)) {
                _this10.homeIconNode.active = false;
              } // this.node.emit("re-init-ui"); //重新刷新UI


              _this10.node.emit("destroy-all-tower");

              _this10.node.emit("destroy-all-tower-build-base");

              _this10.node.emit("destroy-all-enemy"); //销毁当前的所有敌人


              _this10.node.emit("init-level-label"); //初始化当前的关卡label
              // this.uiController.node.emit('init-update-level');


              _this10.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim().then(function () {
                return _this10.showHomeIconEnterAnim();
              }).then(function () {
                return _this10.showCurrentLevelIconAnim();
              }).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "showCurrentLevelIconAnim",
          value: function showCurrentLevelIconAnim() {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              //显示当前是第一关的icon
              _this11.uiController.emit("show-current-level-icon-anim", function () {
                if (resolve) {
                  resolve();
                }
              });
            });
          }
        }, {
          key: "enemyAttacked",
          value: function enemyAttacked(num) {
            console.log("敌人发动了攻击", num); // this.playerData.add

            if (this.state.getState() === 'run') {
              var currentRedHeartCount = this.playerData.getCurrentRedHeartCount();

              if (currentRedHeartCount > 0) {
                this.playerData.addRedHeartCount(-1);

                if (this.playerData.getCurrentRedHeartCount() === 0) {
                  console.log("游戏结束");
                  this.state.setState("game-loss");
                }
              }
            }
          }
        }, {
          key: "referRedHeardUI",
          value: function referRedHeardUI() {
            this.uiController.emit("refer-red-heart-label");
          }
        }, {
          key: "activeEnemySuccess",
          value: function activeEnemySuccess(enemyType) {
            console.log("active enemy succcess", enemyType); //
            // this.node.emit("")

            this.uiController.emit("refer-enemy-info-cell", enemyType);
          }
        }]);

        return GameController;
      }(Component), _class3.accY = -1, _class3.enemyBeLockMaxNum = 1, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameConfigJson", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "towersPrefabList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startGameButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiController", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "plate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameStartButtonBase", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "homeIconPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "goldAnim3dPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///BulletBase.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./BaseObject.js", "./util/State.js", "./util/BezierN.js", "./Enemys/EnemyBase.js", "./EnemyController.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Prefab, v3, Quat, Vec3, ColliderComponent, isValid, Tween, instantiate, BaseObject, State, BezierN, EnemyBase, EnemyController, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, BulletBase;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      v3 = _cc.v3;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      ColliderComponent = _cc.ColliderComponent;
      isValid = _cc.isValid;
      Tween = _cc.Tween;
      instantiate = _cc.instantiate;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_EnemyControllerJs) {
      EnemyController = _EnemyControllerJs.EnemyController;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "90e683Z9ntM7pLuSDO8IdqW", "BulletBase", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BulletBase", BulletBase = (_dec = ccclass('BulletBase'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(BulletBase, _BaseObject);

        function BulletBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BulletBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BulletBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new State();
          _this.speedY = 0;
          _this.accY = GameController.accY;
          _this.currentDirection = v3(0, 0);
          _this.currentInitSpeedY = 6;
          _this.currentCostAcc = -3;
          _this.maxLeftTime = 1 + Math.random();
          _this.colliderComponent = null;
          _this.gameConfigJson = {};
          _this.targetTowerBase = null;
          _this.targetEnemyNode = null;
          _this.movePathList = [];
          _this.currentSpeedY = 10;

          _initializerDefineProperty(_this, "exporeEffectPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "daodanweijiPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "baozhaEffectPrefab", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(BulletBase, [{
          key: "onLoad",
          value: function onLoad() {
            // this.node.on("init-data", (data) => {
            // });
            this.state.addState("sleep", function () {// this.bodyNode.active = false;
            }); // this.state.addState("to-dead", ()=>{
            // });
          }
        }, {
          key: "init",
          value: function init(gameConfig, gameController, data) {
            var _this2 = this;

            _get(_getPrototypeOf(BulletBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.baseAttackNum += data.baseAttackNum;
            this.targetTowerBase = data.targetTower; // console.log("base attack num", this.baseAttackNum);

            if (data && data.direction) {
              var direction = data.direction;
              this.currentDirection = v3(direction);
              var randomV = v3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
              this.currentDirection.add(randomV); //导弹 从天而降的 导弹

              var quat = new Quat();
              Quat.fromViewUp(quat, v3(direction).multiplyScalar(-1).normalize(), Vec3.UP);
              this.node.worldRotation = quat;
              this.state.setState("run");
            } // let angle: number = new Vec2(direction.x, direction.y).signAngle(v2(0, -1));
            // this.node.eulerAngles = v3(0, angle * 180 / Math.PI, 0);
            // this.node.lookAt();/


            var targetEnemy = data.targetEnemy;

            if (targetEnemy) {
              this.targetEnemyNode = targetEnemy; // this.currentDirection = v3(this.targetEnemyNode.position).subtract(this.node.position);
              // let randomV = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
              // this.currentDirection.add(randomV);
            }

            this.gameConfigJson = gameConfig;
            this.colliderComponent = this.node.getComponent(ColliderComponent);
            this.colliderComponent.on("onTriggerEnter", this.onTriggerEnter.bind(this));
            this.scheduleOnce(function () {
              _this2.node.destroy();
            }, this.leftTime);

            if (this.getMoveType() === 'Bezier') {
              //子弹的移动方式是贝塞尔曲线方式
              //  let ctlPos = [this.node.position];
              if (isValid(this.targetEnemyNode)) {
                var endPos = this.targetEnemyNode.position;
                var middle = v3(this.node.position).add(endPos).multiplyScalar(0.5).add(v3(0, 15, 0));
                var ctlPos = [this.node.position, middle, endPos];
                this.movePathList = new BezierN(ctlPos).getPointList(50);
                var tw = this.processMove(this.movePathList);
                tw.call(function () {
                  _this2.state.setState("run");
                });
                tw.start();
              } else {
                this.node.destroy();
              }
            } else {
              this.state.setState("run");
            }
          }
        }, {
          key: "processMove",
          value: function processMove(pathList) {
            var tw = new Tween(this.node);

            for (var i = 1; i < pathList.length; i++) {
              this.processPosAndQuat(tw, pathList[i], pathList[i - 1]);
            }

            return tw;
          }
        }, {
          key: "processPosAndQuat",
          value: function processPosAndQuat(tw, pos, beforPos) {
            var _this3 = this; // tw.call(()=>{
            //     this.node.lookAt(pos);
            // })


            var dir = v3(beforPos).subtract(pos);
            var dis = dir.length();
            var time = dis / this.getMoveSpeed(); // const updateCb = () => {
            //     let quat = new Quat();
            //     Quat.fromViewUp(quat, v3(dir).multiplyScalar(-1).normalize(), Vec3.UP);
            //     let lerpQuat = new Quat();
            //     Quat.lerp(lerpQuat, this.node.rotation, quat, 0.1);
            //     this.node.rotation = lerpQuat;
            // }

            tw.call(function () {
              // this.schedule(updateCb, 1 / 60);
              _this3.node.lookAt(pos);
            });
            tw.to(time, {
              position: pos
            });
          } // updateCb(dir){
          //     let quat = new Quat();
          //     Quat.fromViewUp(quat, v3(dir).normalize(), Vec3.UP);
          //     let lerpQuat = new Quat();
          //     Quat.lerp(lerpQuat, lerpQuat, quat, 0.1);
          //     this.node.rotation = lerpQuat;
          // }

        }, {
          key: "onTriggerEnter",
          value: function onTriggerEnter(event) {
            var _this4 = this; // console.log("onTriggerEnter", event);
            // this.state.setState("sleep");


            if (this.getMoveType() === 'SkyDown') {
              return;
            }

            var otherCollider = event.otherCollider;

            if (isValid(otherCollider) && isValid(otherCollider.node) && otherCollider.node.name.indexOf("Wall") > 1) {
              console.log(" other collier node", otherCollider.node.name);
              this.node.destroy();
            }

            if (otherCollider && otherCollider.getComponent(EnemyBase) && !otherCollider.getComponent(EnemyBase).getIsDead()) {
              console.log("base attack num", this.baseAttackNum);

              if (this.getIsCollisionDestroy()) {
                this.gameController.node.emit("play-audio", this.getBoomAudioStr());
                this.state.setState("enter-to-destroy");

                if (isValid(this.exporeEffectPrefab)) {
                  this.rootNode.active = false;
                  var node = instantiate(this.exporeEffectPrefab);
                  node.parent = this.node;
                  var tw = new Tween(node);
                  tw.by(0.1, {
                    scale: v3(1, 1, 1)
                  });
                  tw.call(function () {
                    _this4.node.destroy();
                  });
                  tw.start();
                } else {
                  this.node.destroy();
                }
              }

              otherCollider.node.emit("be-attacked", {
                baseAttackNum: this.baseAttackNum,
                baseGasNum: this.baseGasNum,
                cb: function cb(isDead) {
                  console.log("是否死了", isDead);

                  if (_this4.targetTowerBase) {
                    _this4.targetTowerBase.enemyDeadByThis(isDead);
                  }
                }
              }); // if (this.baseGasNum !== 0) {
              //     this.node.destroy();
              // }
            }
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
            // this.colliderComponent = this.node.getComponent(BulletBase);
            // //获取碰撞组件
            // console.log("node uuid", this.node.uuid);
            // console.log("collider:", JSON.stringify(this.colliderComponent));
            // this.colliderComponent.on("onCollisionEnter",this.onCollisionEnter.bind(this));
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            var _this5 = this;

            if (this.state.getState() === 'run') {
              //
              if (this.getMoveType() === 'Bezier') {
                if (isValid(this.targetEnemyNode)) {
                  var dir = v3(this.targetEnemyNode.position).add(v3(0, 2, 0)).subtract(this.node.position);
                  this.node.position = v3(this.node.position).add(dir.multiplyScalar(deltaTime * 0.5 * this.getMoveSpeed())); // this.node.lookAt(this.targetEnemyNode.position);
                } else {
                  this.node.destroy();
                }
              } else if (this.getMoveType() === 'SkyDown') {
                this.currentSpeedY += 2;

                if (this.currentSpeedY % 10 === 0) {
                  var node = instantiate(this.daodanweijiPrefab);
                  node.parent = this.node.parent;
                  node.position = this.node.position;
                  var tw = new Tween(node);
                  tw.by(0.2, {
                    scale: v3(1, 1, 1)
                  });
                  tw.call(function () {
                    node.destroy();
                  });
                  tw.start();
                }

                this.node.position = v3(this.node.position).add(v3(0, deltaTime * this.currentSpeedY, 0));

                if (this.node.position.y > 30) {
                  this.state.setState("move-over");
                  this.node.position = v3(this.node.position.x, 30, this.node.position.z); //检查需要攻击的敌人

                  var endPos = this.checkDownPos();

                  if (isValid(endPos)) {
                    console.log("end pos", endPos);
                    this.node.position = v3(endPos.x, 30, endPos.z); // endPos.add(v3(0, 10, 0))

                    this.rootNode.scale = v3(1, -1, 1); // this.node.scale = v3(1, -1, 1);

                    var _tw = new Tween(this.node);

                    _tw.to(0.6, {
                      position: endPos
                    });

                    _tw.call(function () {
                      //     console.log("移动结束")
                      _this5.showBaozhaEffect();
                    });

                    _tw.start();
                  } else {
                    this.node.destroy();
                  }
                }
              } else {
                this.speedY += this.accY * deltaTime;
                var pos = this.node.position;
                var y = pos.y + this.speedY * deltaTime;
                var direction = this.currentDirection.normalize();
                var v = direction.multiplyScalar(this.moveSpeed * deltaTime);

                if (v.y < 0) {
                  v.y = 0;
                } // console.log("v", v);


                this.node.setPosition(v3(pos.x + v.x, pos.y + v.y, pos.z + v.z));

                if (this.node.getPosition().y <= 0) {
                  // this.node.destroy()
                  if (this.isCollisionGround) {
                    this.speedY = this.currentInitSpeedY;
                    this.currentInitSpeedY += this.currentCostAcc;

                    if (this.currentInitSpeedY < 0) {
                      this.state.setState('sleep');
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "checkDownPos",
          value: function checkDownPos() {
            //计算落地点
            var enemyNodeList = this.gameController.node.getComponent(EnemyController).getCurrentEnemyNodeList();

            if (enemyNodeList.length === 0) {
              this.node.destroy();
              return;
            } //寻找附近敌人最多的敌人
            // let  


            var disList = [];

            for (var i = 0; i < enemyNodeList.length; i++) {
              var node1 = enemyNodeList[i];

              if (isValid(node1) && !node1.getComponent(EnemyBase).getIsDead()) {
                var list = [];

                for (var j = 0; j < enemyNodeList.length; j++) {
                  var node = enemyNodeList[j];

                  if (node1.uuid !== node.uuid && !node.getComponent(EnemyBase).getIsDead()) {
                    var dis = v3(node1.position).subtract(node.position).length();
                    list.push(dis);
                  }
                }

                list = list.sort(function (a, b) {
                  return a - b;
                });
                list = list.slice(0, Math.min(3, list.length));
                var sum = 0;

                for (var h = 0; h < list.length; h++) {
                  sum += list[h];
                }

                disList.push({
                  node: node1,
                  dis: sum
                });
              }
            } // console.log("dis list", disList);


            disList = disList.sort(function (a, b) {
              return a.dis - b.dis;
            }); // console.log("dis list", disList);

            if (isValid(disList[0].node)) {
              return disList[0].node.position;
            }

            return null;
          }
        }, {
          key: "showBaozhaEffect",
          value: function showBaozhaEffect() {
            var _this6 = this;

            var exporeEffectNode = instantiate(this.exporeEffectPrefab);
            exporeEffectNode.position = this.node.position;
            exporeEffectNode.parent = this.node.parent; // this.node.destroy();

            var tw = new Tween(exporeEffectNode);
            tw.by(0.3, {
              scale: v3(5, 5, 5)
            });
            tw.call(function () {
              // console.log("伤害")
              _this6.rangeAttackEnemy(exporeEffectNode);

              exporeEffectNode.destroy();
            });
            tw.start();
          }
        }, {
          key: "rangeAttackEnemy",
          value: function rangeAttackEnemy(exporeEffectNode) {
            var _this7 = this; //范围内攻击敌人
            // otherCollider.node.emit("be-attacked", {
            //     baseAttackNum: this.baseAttackNum,
            //     baseGasNum: this.baseGasNum,
            //     cb: (isDead: boolean) => {
            //         console.log("是否死了", isDead)
            //         if (this.targetTowerBase) {
            //             this.targetTowerBase.enemyDeadByThis(isDead);
            //         }
            //     }
            // });


            var enemyNodeList = this.gameController.node.getComponent(EnemyController).getCurrentEnemyNodeList();

            for (var i = 0; i < enemyNodeList.length; i++) {
              var node = enemyNodeList[i];
              var dis = v3(node.position).subtract(exporeEffectNode.position).length();

              if (dis < 10) {
                console.log('dis', dis);
                console.log("攻击敌人");
                node.emit("be-attacked", {
                  baseAttackNum: this.getCurrentAttackNum(),
                  baseGasNum: 0,
                  cb: function cb(isDead) {
                    if (_this7.targetTowerBase) {
                      _this7.targetTowerBase.enemyDeadByThis(isDead);
                    }
                  }
                });
              }
            }

            this.node.destroy();
          }
        }]);

        return BulletBase;
      }(BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "exporeEffectPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "daodanweijiPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "baozhaEffectPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///ChooseWeaponInfoRateCtl.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, v2, v3, find, Tween, Component, State, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, ChooseWeaponInfoRateCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      v2 = _cc.v2;
      v3 = _cc.v3;
      find = _cc.find;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6601aZ3NHFPo42l2cZ4+0Lq", "ChooseWeaponInfoRateCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChooseWeaponInfoRateCtl", ChooseWeaponInfoRateCtl = (_dec = ccclass('ChooseWeaponInfoRateCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(ChooseWeaponInfoRateCtl, _Component);

        function ChooseWeaponInfoRateCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ChooseWeaponInfoRateCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChooseWeaponInfoRateCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "rateButtonList", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rateButtonSpriteFrameLight", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rateButtonSpriteFrameGray", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rateButtonParentNode", _descriptor4, _assertThisInitialized(_this));

          _this.currentRateIndex = 0;
          _this.state = new State();
          return _this;
        }

        _createClass(ChooseWeaponInfoRateCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            for (var i = 0; i < this.rateButtonList.length; i++) {
              var node = this.rateButtonList[i];
              var dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * 270 / 360).normalize();
              var pos = dir.multiplyScalar(80);
              node.position = v3(pos.x, pos.y, 0);
            }

            this.state.addState("wait", function () {
              console.log("current rate index", _this2.currentRateIndex);

              _this2.node.emit("refer-choose-rate-cost", _this2.getCurrentChooseRate()); // 

            });
            this.state.setState("wait");
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var _this3 = this;

            find("GameController").emit("player-button-click-audio");

            if (customData.indexOf("rate") > -1) {
              console.log("旋转按钮");

              if (this.state.getState() !== 'wait') {
                return;
              }

              this.currentRateIndex++;
              var angle = this.currentRateIndex % 3 * 120;
              this.state.setState("move"); // this.rateButtonParentNode.eulerAngles = v3(0,0, angle);

              var promiseList = [];

              for (var i = 0; i < this.rateButtonList.length; i++) {
                var node = this.rateButtonList[i];
                var dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * (270 + angle) / 360).normalize();
                var pos = dir.multiplyScalar(80); // node.position = v3(pos.x, pos.y, 0); 

                promiseList.push(this.moveToAction(node, pos));
              }

              Promise.all(promiseList).then(function () {
                _this3.state.setState("wait");
              });
            }
          }
        }, {
          key: "moveToAction",
          value: function moveToAction(node, pos) {
            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              tw.to(0.2, {
                position: v3(pos.x, pos.y, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "getCurrentChooseRate",
          value: function getCurrentChooseRate() {
            return [1, 10, 100][this.currentRateIndex % 3];
          }
        }]);

        return ChooseWeaponInfoRateCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rateButtonList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rateButtonSpriteFrameLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rateButtonSpriteFrameGray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rateButtonParentNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Enemys/EnemyColonyCom.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../util/BezierN.js", "./EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, _decorator, Vec3, v3, Quat, Tween, BezierN, EnemyBase, ccclass, property, EnemyColonyCom;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      Quat = _cc.Quat;
      Tween = _cc.Tween;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
    }, function (_EnemyBaseJs) {
      EnemyBase = _EnemyBaseJs.EnemyBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd328sjHD1OM4+6gaUYeHWb", "EnemyColonyCom", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyColonyCom", EnemyColonyCom = /*#__PURE__*/function () {
        //敌人移动的集群组件
        //当前的检查方向的时间节点
        //当前的移动方向
        //目标节点
        // private 
        //当前的敌人节点
        //是不是领头羊
        // // private bezier: BezierN = null;
        // private state: State = new State();
        //跟随领头羊的力的权重
        function EnemyColonyCom(groupNodeList, targetNode, ctlPointList) {
          _classCallCheck(this, EnemyColonyCom);

          this.currentCheckDuraction = 0;
          this.currentMoveDir = new Vec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
          this.targetNode = null;
          this.currentNodeList = [];
          this.isFirstTargetNode = false;
          this.movePathList = null;
          this.currentMoveTw = null;
          this.fenliForceWeight = 10;
          this.juheliForceWeight = 1;
          this.duilieliWeight = 1;
          this.floowerfirstNodeWeight = 5;
          this.fenliDistance = 4;
          this.juheDistance = 6;
          this.duilieDistance = 60;
          this.currentPathListIndex = 0; //
          //用列表的第一个节点作为领头羊
          // let ctlPos = [v3(0, 0), v3(10, 10), v3(2, 2), v3(2, 7), v3(4, 4)];

          this.movePathList = new BezierN(ctlPointList).getPointList(200);
          this.targetNode = targetNode; //当前的目标节点

          this.currentNodeList = groupNodeList; //当前的需要控制的节点列表
          // if (groupNodeList[0].uuid === this.targetNode.uuid) {
          //     this.isFisrtTargetNode = true
          // }
        }

        _createClass(EnemyColonyCom, [{
          key: "update",
          value: function update(delatTime) {
            if (this.isFirstTargetNode) {
              //如果是领头羊
              return;
            } // if (this.currentCheckDuraction > 0.1) {
            //     this.currentCheckDuraction = 0;
            // } else {
            //     this.currentCheckDuraction += delatTime;
            // }


            var sumForce = this.processCheckDir().normalize(); // console.log("sum force", sumForce);

            this.currentMoveDir = v3(this.currentMoveDir).add(sumForce.multiplyScalar(delatTime));
            this.targetNode.position = v3(this.targetNode.position).add(v3(this.currentMoveDir).multiplyScalar(delatTime)); // this.targetNode

            var quat = new Quat();
            Quat.fromViewUp(quat, v3(this.currentMoveDir).normalize().multiplyScalar(-1), Vec3.UP); // let outQ = quat;

            var q = new Quat();
            Quat.lerp(q, new Quat(this.targetNode.rotation), quat, delatTime);
            this.targetNode.rotation = q; // this.targetNode.ro
          }
        }, {
          key: "processLisanForce",
          value: function processLisanForce() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.uuid !== this.targetNode.uuid && node.getComponent(EnemyBase).getColonyComCtl()) {
                var dis = v3(node.position).subtract(this.targetNode.position).length();

                if (dis < this.fenliDistance) {
                  nodeList.push(node);
                }
              }
            } // console.log("process lissan force", nodeList.length);


            if (nodeList.length > 0) {
              var sumForce = v3(0, 0, 0);

              for (var _i = 0; _i < nodeList.length; _i++) {
                var position = nodeList[_i].position;
                var dir = v3(this.targetNode.position).subtract(position); // console.log("dir", dir);
                // let force = dir.normalize().multiplyScalar(1 / dir.length());
                // console.log("force", force);

                sumForce.add(dir);
              }

              sumForce.multiplyScalar(this.fenliForceWeight);
              return sumForce; // return sumForce;
            }

            return v3(0, 0, 0);
          }
        }, {
          key: "processJuHeForce",
          value: function processJuHeForce() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.getComponent(EnemyBase).getColonyComCtl()) {
                var dis = v3(node.position).subtract(this.targetNode.position).length();

                if (dis > this.juheDistance) {
                  nodeList.push(node);
                }
              }
            }

            var middlePos = v3(0, 0, 0);

            for (var _i2 = 0; _i2 < nodeList.length; _i2++) {
              var position = nodeList[_i2].position;
              middlePos.add(position);
            }

            if (nodeList.length > 0) {
              middlePos = middlePos.multiplyScalar(1 / nodeList.length);
              var dir = v3(middlePos).subtract(this.targetNode.position);
              return dir.multiplyScalar(this.juheliForceWeight);
            }

            return v3(0, 0, 0);
          }
        }, {
          key: "processDuiLieForce",
          value: function processDuiLieForce() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.getComponent(EnemyBase).getColonyComCtl()) {
                var dis = v3(node.position).subtract(this.targetNode.position).length();

                if (dis <= this.duilieDistance) {
                  nodeList.push(node);
                }
              }
            }

            var dir = v3(0, 0, 0);

            if (nodeList.length > 0) {
              for (var _i3 = 0; _i3 < nodeList.length; _i3++) {
                // dir.add(nodeList[i].forward);
                var _node = nodeList[_i3]; // let colonyCtlDir = node.getComponent(EnemyBase).getColonyComCtl().getCurrentMoveDir();

                var enemyBase = _node.getComponent(EnemyBase);

                dir.add(enemyBase.getColonyComCtl().getCurrentMoveDir());
              }

              return dir.multiplyScalar(this.duilieliWeight * (1 / nodeList.length));
            }

            return v3(0, 0, 0);
          }
        }, {
          key: "processCheckDir",
          value: function processCheckDir() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.getComponent(EnemyBase).getColonyComCtl()) {
                nodeList.push(node);

                if (nodeList.length === 1) {
                  if (nodeList[0].uuid === this.targetNode.uuid) {
                    this.isFirstTargetNode = true;
                    this.processMoveTween();
                    return v3(0, 0, 0); // return v3(0, 0, 0);
                  }

                  break;
                }
              }
            }

            var byFirstNodeForce = this.processByFirstNodeForce(nodeList[0]);
            var liesanForce = this.processLisanForce();
            var duilieForce = this.processDuiLieForce();
            var juheForce = this.processJuHeForce(); // console.log("lisan force", liesanForce);
            // console.log("duilie force", duilieForce);
            // console.log("juheforce", juheForce);

            return liesanForce.add(duilieForce).add(juheForce).add(byFirstNodeForce);
          }
        }, {
          key: "processByFirstNodeForce",
          value: function processByFirstNodeForce(firstNode) {
            //第一个速度
            var force = v3(firstNode.position).subtract(this.targetNode.position);
            return force.multiplyScalar(this.floowerfirstNodeWeight);
          }
        }, {
          key: "processMoveTween",
          value: function processMoveTween() {
            var tw = new Tween(this.targetNode);
            this.currentMoveTw = tw;
            tw.set({
              position: this.movePathList[0]
            });

            var processTw = function processTw(targetTw, pos, endPos) {
              var length = v3(endPos).subtract(pos).length(); // this.targetNode.worldRotation
              // let dir = v3(startPos).subtract(targetPoint).normalize();
              // let quat = new Quat();
              // quat.lerp
              // Quat.fromViewUp(quat, dir, Vec3.UP);

              var dir = v3(pos).subtract(endPos).normalize();
              var quat = new Quat();
              Quat.fromViewUp(quat, dir, Vec3.UP); // let currentRotation = this.targetNode.rotation;
              // let currentQuat = new Quat(currentRotation).lerp(quat, 0.1);
              // targetTw.by(0.1, {
              //     rotation: currentQuat
              // })
              // targetTw.set({
              //     rotation: quat
              // });

              targetTw.to(length / 5, {
                position: pos,
                rotation: quat
              });
            };

            for (var i = 1; i < this.movePathList.length - 1; i++) {
              var pos = this.movePathList[i];
              var endPos = this.movePathList[i + 1];
              processTw(tw, pos, endPos);
            } // tw.start();


            new Tween(this.targetNode).repeatForever(tw).start();
          }
        }, {
          key: "processPathListDir",
          value: function processPathListDir() {//处理路径的方向
          }
        }, {
          key: "getCurrentMoveDir",
          value: function getCurrentMoveDir() {
            return this.currentMoveDir;
          }
        }]);

        return EnemyColonyCom;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Enemys/EnemyCube.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "./EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, EnemyBase, _dec, _class, ccclass, property, EnemyCube;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_EnemyBaseJs) {
      EnemyBase = _EnemyBaseJs.EnemyBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ac439Ca0GFJGrdHaYw+IQip", "EnemyCube", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyCube", EnemyCube = (_dec = ccclass('EnemCube'), _dec(_class = /*#__PURE__*/function (_EnemyBase) {
        _inherits(EnemyCube, _EnemyBase);

        function EnemyCube() {
          _classCallCheck(this, EnemyCube);

          return _possibleConstructorReturn(this, _getPrototypeOf(EnemyCube).apply(this, arguments));
        }

        return EnemyCube;
      }(EnemyBase)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Enemys/WinGold.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, WinGold;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cf9deP2StlNm75zKMIn6aZo", "WinGold", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WinGold", WinGold = (_dec = ccclass('WinGold'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(WinGold, _Component);

        function WinGold() {
          _classCallCheck(this, WinGold);

          return _possibleConstructorReturn(this, _getPrototypeOf(WinGold).apply(this, arguments));
        }

        _createClass(WinGold, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return WinGold;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///SkillComponent/CrazyRotateSkill.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js", "../Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Tween, v3, BaseObject, TowerBase, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, CrazyRotateSkill;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Tween = _cc.Tween;
      v3 = _cc.v3;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "621d4adyJFG1KkUA3lbByt0", "CrazyRotateSkill", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CrazyRotateSkill", CrazyRotateSkill = (_dec = ccclass('CrazyRotateSkill'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(CrazyRotateSkill, _BaseObject);

        function CrazyRotateSkill() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CrazyRotateSkill);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CrazyRotateSkill)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "weaponGunNode", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(CrazyRotateSkill, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.on("init", function (gameConfig, gameController) {
              _this2.init(gameConfig, gameController);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            var shootBullet = function shootBullet() {
              // console.log("发射一枚子弹");
              // let currentRotation = this.node.eulerAngles.y;
              // let dir = v2(0, 1).rotate(currentRotation);
              var bulletStartPosList = _this3.node.getComponent(TowerBase).bulletStartPosList;

              for (var i = 0; i < bulletStartPosList.length; i++) {
                var startPosNode = bulletStartPosList[i];
                var dir = v3(startPosNode.worldPosition).subtract(_this3.node.position);

                var baseAttackNum = _this3.getCurrentAttackNum();

                _this3.node.getComponent(TowerBase).shootOneBullet(_this3.baseAttackRate + _this3.node.getComponent(BaseObject).baseAttackRate, dir, baseAttackNum);
              }
            };

            this.node.on("release-skill", function (cb) {
              // let shootRate = data.shootRate + this.baseAttackRate;
              // let baseAttackNum = data.baseAttackNum;
              var shootRate = _this3.getCurrentShootRate();

              var towerBaseShootRate = _this3.node.getComponent(TowerBase).getCurrentShootRate();

              var endShootRate = shootRate + towerBaseShootRate;
              console.log("shoot rate", endShootRate);
              var time = 1 / endShootRate; // console.log("time", time);

              _this3.schedule(shootBullet, time); // if (cb){
              // }
              // this.node.eulerAngles = ;


              var currentRotate = _this3.getCurrentSkillRotateAngle();

              var skillTime = currentRotate / _this3.rotateSpeed;
              var tw = new Tween(_this3.node);
              var signDir = Math.random() - 0.5; // this.node.eulerAngles = v3(0,0,0);
              // this.node.emit("weapon-euler-angles-init"); //武器角度归位

              if (_this3.weaponGunNode) {
                _this3.weaponGunNode.eulerAngles = v3(0, 0, 0);
              }

              tw.by(skillTime, {
                eulerAngles: v3(0, currentRotate * (signDir / Math.abs(signDir)), 0)
              });
              tw.call(function () {
                _this3.unschedule(shootBullet);

                if (cb) {
                  cb();
                }
              });
              tw.start();
            });
          }
        }]);

        return CrazyRotateSkill;
      }(BaseObject), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponGunNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/AStartFindPath.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../util/My2Array.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Color, instantiate, v3, SpriteComponent, isValid, UITransformComponent, v2, Component, My2dArray, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, CellNode, AStartFindPath;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Color = _cc.Color;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      SpriteComponent = _cc.SpriteComponent;
      isValid = _cc.isValid;
      UITransformComponent = _cc.UITransformComponent;
      v2 = _cc.v2;
      Component = _cc.Component;
    }, function (_utilMy2ArrayJs) {
      My2dArray = _utilMy2ArrayJs.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aee76uGSzxFLKJAvvNlf0aC", "AStartFindPath", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      CellNode = /*#__PURE__*/function () {
        function CellNode(x, y, node) {
          _classCallCheck(this, CellNode);

          this.x = 0;
          this.y = 0;
          this.node = null;
          this.parentNode = null;
          this.fValue = 0;
          this.gValue = 0;
          this.hValue = 0;
          this.x = x;
          this.y = y;
          this.node = node;
        }

        _createClass(CellNode, [{
          key: "setParentNode",
          value: function setParentNode(value) {
            this.parentNode = value;
          }
        }]);

        return CellNode;
      }();

      _export("AStartFindPath", AStartFindPath = (_dec = ccclass('AStartFindPath'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AStartFindPath, _Component);

        function AStartFindPath() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AStartFindPath);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AStartFindPath)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "pointNode", _descriptor, _assertThisInitialized(_this));

          _this.my2dArray = null;
          _this.obsColor = Color.RED;
          _this.startColor = Color.BLUE;
          _this.endColor = Color.GREEN;
          _this.currentTouchNode = null;
          _this.openList = [];
          _this.closeList = [];
          _this.startObj = null;
          _this.size = 30;
          _this.currentPathList = [];
          _this.checkPointList = [];
          return _this;
        }

        _createClass(AStartFindPath, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.
            // for (let i = 0 ; i < ){
            // }


            var size = this.size;
            var my2dArray = new My2dArray();
            this.my2dArray = my2dArray;

            for (var i = 0; i < size; i++) {
              var list = [];

              for (var j = 0; j < size; j++) {
                var node = instantiate(this.pointNode);
                node.active = true;
                node.parent = this.node;
                node.position = v3((size - 1) * -0.5 * 22 + j * 22, (size - 1) * -0.5 * 22 + i * 22, 0);
                list.push(new CellNode(j, i, node)); // node._x = j;
                // node._y = i;
              }

              my2dArray.pushList(list);
            }

            for (var _i = 0; _i < 30; _i++) {
              this.randomObs(size);
            }

            var startObj = this.getRandomPoint(size);
            startObj.node.getComponent(SpriteComponent).color = this.startColor;
            this.startObj = startObj;
            this.node.on(Node.EventType.TOUCH_START, function (even) {
              if (isValid(_this2.currentTouchNode)) {
                _this2.currentTouchNode.node.getComponent(SpriteComponent).color = Color.WHITE;
              }

              var pos = even.getUILocation();
              console.log("touch pos", pos);

              for (var _i2 = 0; _i2 < size; _i2++) {
                for (var _j = 0; _j < size; _j++) {
                  var _node = _this2.my2dArray.getValue(_j, _i2).node;

                  var boundingBox = _node.getComponent(UITransformComponent).getBoundingBoxToWorld(); // pos.x -= node.width;
                  // boundingBox.x -= node.width;


                  if (boundingBox.contains(pos)) {
                    // console.log(" j, i,", j, i);
                    _node.getComponent(SpriteComponent).color = _this2.endColor;
                    _this2.currentTouchNode = _this2.my2dArray.getValue(_j, _i2);
                  }
                }
              }

              if (_this2.currentTouchNode) {
                _this2.openList = [];
                _this2.closeList = [];

                _this2.processFindPath();
              }
            });
          }
        }, {
          key: "processFValue",
          value: function processFValue(point, parentPoint) {
            // let gValue = point.parentNode.gValue + this.getDistance();
            var gValue = 0;
            var currentP = null;

            if (parentPoint) {
              // gValue = parentPoint.gValue + 1;
              currentP = parentPoint;
            } else {
              currentP = point.parentNode;
            }

            gValue = point.parentNode.gValue + this.getDistance(point, currentP); // let hvalue = Math.abs(point.x - this.currentTouchNode.x) + Math.abs(point.y - this.currentTouchNode.y);

            point.gValue = gValue;
            point.hValue = this.getDistance(point, this.currentTouchNode);
            return point.gValue + point.hValue;
          }
        }, {
          key: "getDistance",
          value: function getDistance(p1, p2) {
            var sql = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
            return Math.sqrt(sql);
          }
        }, {
          key: "getNearPointObj",
          value: function getNearPointObj(point) {
            var x = point.x;
            var y = point.y;
            var dirList = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            var nearList = [];

            for (var i = 0; i < dirList.length; i++) {
              var endX = x + dirList[i][0];
              var endY = y + dirList[i][1];
              var obj = this.my2dArray.getValue(endX, endY);

              if (obj && !obj.node.getComponent(SpriteComponent).color.equals(this.obsColor)) {
                //如果取出来的节点，并且节点上并不是障碍物 ，那么
                // obj.setParentNode(point);
                // obj.fValue = this.processFValue(obj);
                nearList.push(obj);
              }
            }

            return nearList;
          }
        }, {
          key: "processFindPath",
          value: function processFindPath() {
            //运行寻路算法
            this.openList.push(this.startObj);

            while (this.openList.length > 0) {
              // console.log("循环");
              var currentObj = this.getFvalueMinNode();
              console.log("current obj", currentObj);

              if (currentObj.x === this.currentTouchNode.x && currentObj.y === this.currentTouchNode.y) {
                console.log("找到了终点");

                if (this.checkPointList.length > 0) {
                  for (var i = 0; i < this.checkPointList.length; i++) {
                    var node = this.checkPointList[i].node;
                    node.getComponent(SpriteComponent).color = Color.WHITE;
                  }
                }

                if (this.currentPathList.length > 0) {
                  for (var _i3 = 0; _i3 < this.currentPathList.length; _i3++) {
                    var _node2 = this.currentPathList[_i3].node;
                    _node2.getComponent(SpriteComponent).color = Color.WHITE;
                  }
                }

                var pathList = [];

                while (!(currentObj.x === this.startObj.x && currentObj.y === this.startObj.y)) {
                  pathList.push(currentObj.parentNode);
                  currentObj = currentObj.parentNode;
                  currentObj.node.getComponent(SpriteComponent).color = Color.BLACK;
                }

                pathList.splice(pathList.length - 1, 1);
                this.currentPathList = pathList; // console.log("path list", pathList);

                return;
              }

              this.closeList.push(currentObj); //取处这个点周围的点

              var nearList = this.getNearPointObj(currentObj);

              for (var _i4 = 0; _i4 < nearList.length; _i4++) {
                var obj = nearList[_i4];

                if (this.checkIsInCloseList(obj)) {
                  //如果此点已经在关闭列表里面了， 那么直接跳过
                  continue;
                }

                if (this.checkisInOpenList(obj)) {
                  //如果在列表里面
                  //计算现在的f值 与之前的f值的大小，如果更小，那么更新父节点，跟f值
                  var newFValue = this.processFValue(obj, currentObj);

                  if (newFValue < obj.fValue) {
                    obj.setParentNode(currentObj);
                    obj.fValue = this.processFValue(obj);
                  }
                } else {
                  //没在open列表里面 那么
                  obj.setParentNode(currentObj);
                  obj.fValue = this.processFValue(obj);
                  obj.node.getComponent(SpriteComponent).color = Color.GRAY;
                  this.checkPointList.push(obj);
                  this.openList.push(obj);
                }
              } // for (let i = 0 ; i < nearList.length ; i ++){
              //     let nearNode = nearList[i];
              //     let isInCloseList = this.checkIsInCloseList(nearNode);
              //     if (!isInCloseList){
              //         this.openList.push(nearNode);
              //     }
              // }
              // console.log("this open list", this.openList);
              // return;

            }
          }
        }, {
          key: "checkisInOpenList",
          value: function checkisInOpenList(point) {
            for (var i = 0; i < this.openList.length; i++) {
              var node = this.openList[i];

              if (node.x === point.x && node.y === point.y) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "checkIsInCloseList",
          value: function checkIsInCloseList(point) {
            for (var i = 0; i < this.closeList.length; i++) {
              var node = this.closeList[i];

              if (node.x === point.x && node.y === point.y) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "getFvalueMinNode",
          value: function getFvalueMinNode() {
            //取处f值最小的节点
            var minValue = Number.MAX_VALUE; // let targetObj = null;

            var index = 0;

            for (var i = 0; i < this.openList.length; i++) {
              var obj = this.openList[i];

              if (obj.fValue < minValue) {
                minValue = obj.fValue;
                index = i;
              }
            }

            return this.openList.splice(index, 1)[0];
          }
        }, {
          key: "getRandomPoint",
          value: function getRandomPoint(size) {
            var pos = v2(Math.round(Math.random() * (size - 1)), Math.round(Math.random() * (size - 1)));
            return this.my2dArray.getValue(pos.x, pos.y);
          }
        }, {
          key: "randomObs",
          value: function randomObs(size) {
            //随机一个障碍物
            var pos = {
              x: Math.round(Math.random() * size - 10) + 5,
              y: Math.round(Math.random() * size - 10) + 5
            };
            var dir = v2(0, 1);
            var angle = [Math.PI * 2 * 45 / 360, Math.PI * 0.5, Math.PI];
            dir.rotate(angle[Math.round(Math.random() * (angle.length - 1))]).normalize();
            console.log("dir", dir);
            dir.x = Math.round(Math.abs(dir.x)) * Math.abs(dir.x) / dir.x;
            dir.y = Math.round(Math.abs(dir.y)) * Math.abs(dir.y) / dir.y;
            console.log("dir", dir);

            for (var i = 0; i < 4; i++) {
              var addPos = v2(dir).multiplyScalar(i); // console.log('add pos', addPos);

              var endPos = v2(pos.x, pos.y).add(addPos); // console.log('endPos ', endPos);

              var obj = this.my2dArray.getValue(endPos.x, endPos.y);

              if (obj) {
                obj.node.getComponent(SpriteComponent).color = Color.RED;
              }
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AStartFindPath;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/DialogCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, JsonAsset, Node, loader, SpriteFrame, SpriteComponent, LabelComponent, find, v3, Tween, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, DialogCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
      find = _cc.find;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6cd17627e9OW6ntczLEzTI0", "DialogCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DialogCtl", DialogCtl = (_dec = ccclass('DialogCtl'), _dec2 = property({
        type: JsonAsset
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(DialogCtl, _Component);

        function DialogCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, DialogCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DialogCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "dialogConfigJsonAsset", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dialogBgNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dialogLayer", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dialogLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dialogPicNode", _descriptor5, _assertThisInitialized(_this));

          _this.currentLevelDialogData = [];
          _this.currentDialogIndex = 0;
          _this.dialogOverCb = null;
          return _this;
        }

        _createClass(DialogCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this.node.on("show-start-dialog", function (currentLevel, cb) {
              //播放开始的时候的 对话
              console.log("展示开始对话的内容", currentLevel);
              _this2.dialogBgNode.active = true;
              _this2.dialogLayer.active = true; //取出当前的对话数据

              _this2.currentLevelDialogData = _this2.dialogConfigJsonAsset.json['Level_' + currentLevel]['StartDialogList'];
              _this2.currentDialogIndex = 0;

              _this2.showOneDialog();

              _this2.dialogOverCb = function () {
                _this2.closeDialogLayer().then(function () {
                  cb();
                });
              };
            });
            this.node.on("show-end-dialog", function (currentLevel, cb) {
              //播放结束的时候的对话
              console.log("展示开始对话的内容", currentLevel);
              _this2.dialogBgNode.active = true;
              _this2.dialogLayer.active = true; //取出当前的对话数据

              _this2.currentLevelDialogData = _this2.dialogConfigJsonAsset.json['Level_' + currentLevel]['EndDialogList'];
              _this2.currentDialogIndex = 0;

              _this2.showOneDialog();

              _this2.dialogOverCb = function () {
                _this2.closeDialogLayer().then(function () {
                  cb();
                });
              };
            });
          }
        }, {
          key: "closeDialogLayer",
          value: function closeDialogLayer() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.showTLPOutAnim().then(function () {
                _this3.dialogBgNode.active = false;
                _this3.dialogLayer.active = false;
                resolve();
              });
            });
          }
        }, {
          key: "showOneDialog",
          value: function showOneDialog() {
            var _this4 = this;

            if (this.currentDialogIndex >= this.currentLevelDialogData.length) {
              if (this.dialogOverCb) {
                this.dialogOverCb();
              }

              return;
            } //展示一条dialog


            var dialogData = this.currentLevelDialogData[this.currentDialogIndex];
            var picStr = dialogData['Pic'];
            loader.loadRes(picStr + '/spriteFrame', SpriteFrame, function (err, result) {
              if (!err) {
                _this4.showTLPEnterAnim().then(function () {
                  _this4.dialogPicNode.getComponent(SpriteComponent).spriteFrame = result;
                  var text = dialogData['Text'];
                  _this4.dialogLabel.getComponent(LabelComponent).string = text;
                });
              }
            });
            this.currentDialogIndex++;
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");

            switch (customData) {
              case 'next-button':
                console.log("下一步");
                this.showOneDialog();
                break;

              default:
                break;
            }
          }
        }, {
          key: "showTLPEnterAnim",
          value: function showTLPEnterAnim() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              if (_this5.dialogPicNode.position.x > -500) {
                resolve();
              } else {
                _this5.dialogPicNode.position = v3(-1000, -161.675, 0);
                var tw = new Tween(_this5.dialogPicNode);
                tw.to(0.2, {
                  position: v3(-407.421, -161, 0)
                });
                tw.call(function () {
                  resolve();
                });
                tw.start();
              }
            });
          }
        }, {
          key: "showTLPOutAnim",
          value: function showTLPOutAnim() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this6.dialogPicNode);
              tw.to(0.2, {
                position: v3(-1000, -161, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return DialogCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dialogConfigJsonAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dialogBgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dialogLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dialogLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dialogPicNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/EnemyHealthBarCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, CameraComponent, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, EnemyHealthBarCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      CameraComponent = _cc.CameraComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6dc3cXIfPpCN6tR8iLaqvBX", "EnemyHealthBarCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyHealthBarCtl", EnemyHealthBarCtl = (_dec = ccclass('EnemyHealthBarCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(EnemyHealthBarCtl, _Component);

        function EnemyHealthBarCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyHealthBarCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyHealthBarCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyHealthBarPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyHealthBarCtl, [{
          key: "onLoad",
          value: function onLoad() {
            this.node.on("add-one-enemy", function (enemyNode) {// enemyNode.on("run", () => {
              //     let healthBar = instantiate(this.enemyHealthBarPrefab);
              //     healthBar.parent = this.node;
              //     healthBar.active = false;
              //     enemyNode.emit("set-health-bar", healthBar, this.cameraNode);
              // })
            });
            this.node.on("remove-one-enemy", function () {});
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "update",
          value: function update(deltaTime) {}
        }]);

        return EnemyHealthBarCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/MonsterInfoLayer.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, LabelComponent, loader, SpriteFrame, SpriteComponent, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, MonsterInfoLayer;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "19cfe434XNK0JMjRNGL9hyg", "MonsterInfoLayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MonsterInfoLayer", MonsterInfoLayer = (_dec = ccclass('MonsterInfoLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MonsterInfoLayer, _Component);

        function MonsterInfoLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MonsterInfoLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MonsterInfoLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "nameLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speedLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "healthCountLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "storyLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "monsterInfoLayer", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteIconNode", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(MonsterInfoLayer, [{
          key: "start",
          value: function start() {
            var _this2 = this; // this.node.on('show--info', this.setMonsterInfo.bind(this), this)


            this.node.on("close-monster-info-layer", function () {
              // this.towerInfoLayer.active = false;
              _this2.monsterInfoLayer.active = false;
            });
            this.node.on("close-weapon-info-layer", function () {
              _this2.monsterInfoLayer.active = false;
            });
          } // setMonsterInfo(){
          //     this.monsterInfoLayer.active = true;
          // }

        }, {
          key: "showMonsterInfoLayer",
          value: function showMonsterInfoLayer(target) {
            var _this3 = this;

            this.monsterInfoLayer.active = true;
            this.nameLabel.getComponent(LabelComponent).string = target.getObjectName();
            this.healthCountLabel.getComponent(LabelComponent).string = target.getHealthCount().toString(); //获得

            this.speedLabel.getComponent(LabelComponent).string = target.getMoveSpeed().toString(); //获得移动速度

            this.storyLabel.getComponent(LabelComponent).string = target.getDesString(); //获得详细简介

            loader.loadRes(target.getIconSprteFrame() + "/spriteFrame", SpriteFrame, function (err, result) {
              _this3.spriteIconNode.getComponent(SpriteComponent).spriteFrame = result;
            }); // this.speedLabel.getComponent(LabelComponent).string = target.getMoveSpeed().toString(); //移动速度
            // this.des
            // this.healthCountLabel.getComponent(LabelComponent).string = target.getCoun
            // this.storyLabel.getComponent(LabelComponent).string = target.getDesString();
          }
        }]);

        return MonsterInfoLayer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speedLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "healthCountLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "storyLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "monsterInfoLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteIconNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/EnemyInfoCellPrefab.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js", "./MonsterInfoLayer.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, find, loader, SpriteFrame, SpriteComponent, BaseObject, MonsterInfoLayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, EnemyInfoCellPrefab;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      find = _cc.find;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_MonsterInfoLayerJs) {
      MonsterInfoLayer = _MonsterInfoLayerJs.MonsterInfoLayer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ede41pxC3ZOx6d6u8MOr8l/", "EnemyInfoCellPrefab", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyInfoCellPrefab", EnemyInfoCellPrefab = (_dec = ccclass('EnemyInfoCellPrefab'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(EnemyInfoCellPrefab, _BaseObject);

        function EnemyInfoCellPrefab() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyInfoCellPrefab);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyInfoCellPrefab)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyIconNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "newInfoTipsNode", _descriptor2, _assertThisInitialized(_this));

          _this.uiControllerNode = null;
          return _this;
        }

        _createClass(EnemyInfoCellPrefab, [{
          key: "init",
          value: function init(gameController, data) {
            var _this2 = this;

            var enemyType = data["enemyType"];
            console.log("enemy type", enemyType);
            this.uiControllerNode = find('Canvas');
            var gameConfig = gameController.getGameConfig().json; // super.objectType = enemyType;
            // console.log("super object type", super.objectType);

            _get(_getPrototypeOf(EnemyInfoCellPrefab.prototype), "init", this).call(this, gameConfig, gameController, null, null, enemyType);

            this.gameController.node.on("refer-enemy-info-cell", function () {
              _this2.referUI();
            });
            this.node.on("click", this.onButtonClick.bind(this), this);
            this.referUI();
          }
        }, {
          key: "referUI",
          value: function referUI() {
            var _this3 = this; //刷新UI 


            var isActive = this.getEnemyIsActive();
            console.log("is active", isActive);

            if (isActive) {
              var spriteFrameIconStr = this.getIconSprteFrame(); //如果是激活了

              console.log("sprite frame icon str", spriteFrameIconStr);
              loader.loadRes(spriteFrameIconStr + "/spriteFrame", SpriteFrame, function (err, result) {
                if (!err) {
                  _this3.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
                }
              });
              var isShowed = this.getIsShowed();

              if (!isShowed) {
                this.newInfoTipsNode.active = true;
                this.uiControllerNode.emit("show-new-enemy-info-tips");
              }
            }
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick() {
            find("GameController").emit("player-button-click-audio");
            console.log("click");

            if (this.getEnemyIsActive()) {
              // thi
              this.uiControllerNode.getComponent(MonsterInfoLayer).showMonsterInfoLayer(this);
              this.newInfoTipsNode.active = false;
              this.setShowed();
              this.uiControllerNode.emit("show-new-enemy-info-tips");
            }
          } // public init(gameConfig: Object, gameController: GameController){
          // }
          // public init() {
          //     // super.init(gameConfig, gameController);
          // }
          // public init(gameConfig: Object, gameController: GameController, objectType?: string){
          //     super.init(gameConfig, gameController);
          //     // super.objectType = objectType;
          //     // console.log("object type", super.objectType);
          //     // let gameConfig = gameController.getGameConfig().json;
          //     // super.init(gameConfig, gameController);
          //     // //获取是否激活了
          //     // let isActive = this.getEnemyIsActive();
          //     // if (isActive){
          //     // }
          // }

        }]);

        return EnemyInfoCellPrefab;
      }(BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyIconNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "newInfoTipsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/InfoLayerCtlBase.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, v3, view, Tween, SpriteComponent, find, Component, State, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, InfoLayerCtlBase;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      view = _cc.view;
      Tween = _cc.Tween;
      SpriteComponent = _cc.SpriteComponent;
      find = _cc.find;
      Component = _cc.Component;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      cclegacy._RF.push({}, "48a3c0EK8xEhbYTC0+7u64U", "InfoLayerCtlBase", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("InfoLayerCtlBase", InfoLayerCtlBase = (_dec = ccclass('InfoLayerCtlBase'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: ""
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(InfoLayerCtlBase, _Component);

        function InfoLayerCtlBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, InfoLayerCtlBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfoLayerCtlBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "bectledLayerNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "blockBgNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ctlShowButton", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hideDir", _descriptor4, _assertThisInitialized(_this));

          _this.state = new State();
          return _this;
        }

        _createClass(InfoLayerCtlBase, [{
          key: "start",
          // start () {
          //     // Your initialization goes here.
          // }
          value: function start() {
            var _this2 = this; // this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);


            this.bectledLayerNode.position = v3(this.bectledLayerNode.width * 0.5 * (this.hideDir === 'Right' ? 1 : -1), 0, 0);
            this.state.setState("close");
            this.state.addState("play-open-anim", function () {
              //播放打开武器信息的UI
              console.log("播放武器信息ui打开的动画");

              _this2.hideButton().then(function () {
                return _this2.showInfoLayerNode();
              }).then(function () {
                _this2.showBlockBgNode();
              }).then(function () {
                _this2.state.setState('open');
              });
            });
            this.state.addState("play-close-anim", function () {
              _this2.hideBlockBgNode().then(function () {
                return _this2.hideInfoLayerNode();
              }).then(function () {
                return _this2.showCtlInfoButtonn();
              }).then(function () {
                _this2.state.setState("close");
              });
            });
            this.node.on("close-weapon-info-layer", function () {
              //关闭武器信息页面
              if (_this2.state.getState() === 'open') {
                _this2.state.setState("play-close-anim");
              } // if (this.closeUICb){
              //     this.closeUICb();
              // }

            });
          }
        }, {
          key: "closeUICb",
          value: function closeUICb() {}
        }, {
          key: "showCtlInfoButtonn",
          value: function showCtlInfoButtonn() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var v = view.getVisibleSize().width;
              var tw = new Tween(_this3.ctlShowButton);
              var dir = _this3.hideDir === 'Right' ? 1 : -1;
              tw.to(0.1, {
                position: v3(v * 0.5 * dir - 100 * dir, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideInfoLayerNode",
          value: function hideInfoLayerNode() {
            var _this4 = this; //隐藏武器信息节点


            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this4.bectledLayerNode);
              var dir = _this4.hideDir === 'Right' ? 1 : -1;
              tw.to(0.2, {
                position: v3(_this4.bectledLayerNode.width * 0.5 * dir, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideBlockBgNode",
          value: function hideBlockBgNode() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              resolve();
              _this5.blockBgNode.active = false;
            });
          }
        }, {
          key: "showInfoLayerNode",
          value: function showInfoLayerNode() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              //
              // for (let i = 0 ; i < this.weaponIndoCellNodeList.length ; i ++){
              //     let node = this.weaponIndoCellNodeList[i];
              //     node.getComponent(WeaponUpdateCellPrefab).referCurrentDamage();
              // }
              var tw = new Tween(_this6.bectledLayerNode);
              tw.to(0.2, {
                position: v3(0, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showBlockBgNode",
          value: function showBlockBgNode() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.blockBgNode.active = true;
              var tw = new Tween(_this7.blockBgNode.getComponent(SpriteComponent)); // tw.to(0.2, {color: new Color(0,0,0,150)});

              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideButton",
          value: function hideButton() {
            var _this8 = this;

            var v = view.getVisibleSize().width;
            return new Promise(function (resolve, reject) {
              var buttonTw = new Tween(_this8.ctlShowButton);
              var dir = _this8.hideDir === 'Right' ? 1 : -1;
              buttonTw.to(0.1, {
                position: v3(v * 0.5 * dir + dir * 100, 0, 0)
              });
              buttonTw.call(function () {
                resolve();
              });
              buttonTw.start();
            });
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");

            switch (customData) {
              case 'show-info-layer':
                console.log("武器信息按钮");

                if (this.state.getState() === 'close') {
                  //关闭状态
                  this.state.setState("play-open-anim");
                  this.node.emit("close-tower-menu-ui"); //关闭升级建造塔相关的UI
                }

                break;

              case 'bg-node-click':
                console.log("背景节点点击 ", this.state.getState());

                if (this.state.getState() === 'open') {
                  this.state.setState("play-close-anim");
                }

                break;

              default:
                break;
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return InfoLayerCtlBase;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bectledLayerNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockBgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ctlShowButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideDir", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Right";
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/EnemyInfoLayerCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js", "../GameController.js", "./EnemyInfoCellPrefab.js", "./InfoLayerCtlBase.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, Prefab, instantiate, v3, find, BaseObject, GameController, EnemyInfoCellPrefab, InfoLayerCtlBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, EnemyInfoLayerCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      find = _cc.find;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_EnemyInfoCellPrefabJs) {
      EnemyInfoCellPrefab = _EnemyInfoCellPrefabJs.EnemyInfoCellPrefab;
    }, function (_InfoLayerCtlBaseJs) {
      InfoLayerCtlBase = _InfoLayerCtlBaseJs.InfoLayerCtlBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd7e3sy4eVGxLt1hsBdjeJ6", "EnemyInfoLayerCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyInfoLayerCtl", EnemyInfoLayerCtl = (_dec = ccclass('EnemyInfoLayerCtl'), _dec2 = property({
        type: GameController
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_InfoLayerCtlBase) {
        _inherits(EnemyInfoLayerCtl, _InfoLayerCtlBase);

        function EnemyInfoLayerCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyInfoLayerCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyInfoLayerCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyInfoNodeParentNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyInfoCellPrefab", _descriptor3, _assertThisInitialized(_this));

          _this.enemyInfoCellMap = {};

          _initializerDefineProperty(_this, "newInfoTipsNode", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyInfoLayerCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            _get(_getPrototypeOf(EnemyInfoLayerCtl.prototype), "start", this).call(this); // Your initialization goes here.
            // let screenSize = view.getVisibleSize();


            this.initEnemyData(); // this.node.on("refer-enemy-data", this.referEnemyData.bind(this), this);

            this.node.on("refer-enemy-info-cell", function (enemyType) {
              console.log("`激活了某个敌人`", enemyType);
              console.log("enemy info cell map", _this2.enemyInfoCellMap);

              if (_this2.enemyInfoCellMap[enemyType]) {
                console.log("刷新这个敌人的UI"); // this.enemyInfoCellMap[enemyType].getComponent(EnemyInfoCellPrefab).referUI();

                var node = _this2.enemyInfoCellMap[enemyType];
                node.getComponent(EnemyInfoCellPrefab).referUI();
              }
            });
            this.node.on("show-new-enemy-info-tips", function () {
              var isHave = false;
              _this2.newInfoTipsNode.active = false;

              for (var i in _this2.enemyInfoCellMap) {
                var node = _this2.enemyInfoCellMap[i];

                if (!node.getComponent(BaseObject).getIsShowed() && node.getComponent(BaseObject).getEnemyIsActive()) {
                  isHave = true;
                  break;
                }
              }

              console.log("is have", isHave);

              if (isHave) {
                _this2.newInfoTipsNode.active = true;
              }
            });
          }
        }, {
          key: "closeUICb",
          value: function closeUICb() {// console.log("close ui cb");
            // this
          }
        }, {
          key: "initEnemyData",
          value: function initEnemyData() {
            // let currentActiveEnemyList = this.gameController.playerData.getCurrentActiveEnemyList();
            var gameConfig = this.gameController.getGameConfig().json;
            var enemyList = [];

            for (var i in gameConfig) {
              var data = gameConfig[i];

              if (i.indexOf("Boss") > -1) {
                // if (i.indexOf("Enemy") > -1 || i.indexOf("Boss") > -1) {
                console.log("iu", i);
                console.log("data", data);
                enemyList.push(data);
              }
            } //排序


            console.log("enemy list", enemyList);
            enemyList = enemyList.sort(function (a, b) {
              return a.EnemyIndex - b.EnemyIndex;
            });
            console.log("enemy list", enemyList);

            for (var _i = 0; _i < enemyList.length; _i++) {
              console.log("data = ", enemyList[_i]);
              var node = instantiate(this.enemyInfoCellPrefab);
              node.parent = this.enemyInfoNodeParentNode; // console.log("data", enemyList[i]);

              var enemyType = enemyList[_i]['EnemyType'];
              console.log("enemy type", enemyType);
              node.getComponent(EnemyInfoCellPrefab).init(this.gameController, {
                enemyType: enemyType
              });
              node.getComponent(EnemyInfoCellPrefab).referUI();
              var x = _i % 3;
              var y = Math.floor(_i / 3);
              console.log("x", x);
              console.log("y = ", y);
              node.position = v3((3 - 1) * -0.5 * 100 + x * 100, y * -100 - 70, 0);
              this.enemyInfoNodeParentNode.height = node.position.y * -1 + 70;
              this.enemyInfoCellMap[enemyType] = node;
            } //取出。激活敌人数据
            // let activeEnemyData = this.gameController.playerData.getEnemyIsActive

          }
        }, {
          key: "referEnemyData",
          value: function referEnemyData() {}
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            find("GameController").emit("player-button-click-audio");

            _get(_getPrototypeOf(EnemyInfoLayerCtl.prototype), "onButtonClick", this).call(this, event, customData);

            if (customData === 'bg-node-click') {
              this.node.emit("close-monster-info-layer");
            }
          } // showMonsterInfoLayer(target: BaseObject){
          //     // this.showMonsterInfoLayer
          // }
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return EnemyInfoLayerCtl;
      }(InfoLayerCtlBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoNodeParentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoCellPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "newInfoTipsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/EnterGameAnimCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, UIOpacityComponent, Tween, Component, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, EnterGameAnimCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      UIOpacityComponent = _cc.UIOpacityComponent;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "965ecmCN75I15VOe1C9JGA5", "EnterGameAnimCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnterGameAnimCtl", EnterGameAnimCtl = (_dec = ccclass('EnterGameAnimCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(EnterGameAnimCtl, _Component);

        function EnterGameAnimCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnterGameAnimCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnterGameAnimCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "logoLayer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "logoNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bgNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "healthGameTips", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnterGameAnimCtl, [{
          key: "start",
          //健康游戏忠告
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this.logoLayer.active = true;
            this.showAnim(this.healthGameTips, false, 1).then(function () {
              return _this2.showAnim(_this2.healthGameTips, true, 0.01);
            }).then(function () {
              return _this2.showAnim(_this2.logoNode, false, 1);
            }).then(function () {
              return _this2.showAnim(_this2.logoNode, true, 0.01);
            }).then(function () {
              return _this2.showAnim(_this2.bgNode, true, 0.01);
            }).then(function () {
              _this2.logoLayer.active = false;

              _this2.node.emit("show-guide"); //调用显示引导层 的命令

            });
          }
        }, {
          key: "showAnim",
          value: function showAnim(node, hide, delayTime) {
            var opacityCom = node.getComponent(UIOpacityComponent);

            if (hide) {
              opacityCom.opacity = 255;
            } else {
              opacityCom.opacity = 0;
            }

            return new Promise(function (resolve, reject) {
              var tw = new Tween(opacityCom);
              tw.to(1, {
                opacity: hide ? 0 : 255
              });
              tw.delay(delayTime);
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return EnterGameAnimCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "logoLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "logoNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "healthGameTips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/GuideCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, JsonAsset, find, UITransformComponent, Tween, v3, Component, GameController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, GuideCtl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      JsonAsset = _cc.JsonAsset;
      find = _cc.find;
      UITransformComponent = _cc.UITransformComponent;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      Component = _cc.Component;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d0053QZKoxNv4NvDDstfYlR", "GuideCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GuideCtl", GuideCtl = (_dec = ccclass('GuideCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: JsonAsset
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GuideCtl, _Component);

        function GuideCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GuideCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GuideCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "guideLayer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "guideConfigJsonAsset", _descriptor2, _assertThisInitialized(_this));

          _this.currentGuideIndex = 1;
          _this.gameController = null;
          _this.guideCompleteCb = null;
          return _this;
        }

        _createClass(GuideCtl, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.gameController = find("GameController").getComponent(GameController);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.on("show-guide", function (cb) {
              //显示引导层
              var stepStr = "Step_" + _this2.currentGuideIndex;

              if (_this2.guideConfigJsonAsset.json[stepStr]) {
                var isShowGuide = _this2.gameController.playerData.getIsShowGuide(stepStr);

                if (isShowGuide) {
                  if (cb) {
                    cb();
                  }
                } else {
                  _this2.guideCompleteCb = cb;

                  _this2.showMaskAnim(stepStr);
                }
              } else {
                if (cb) {
                  cb();
                }
              }
            });
            this.node.on("complete-current-guide", function () {
              //完成了当前的 引导逻辑
              var stepStr = "Step_" + _this2.currentGuideIndex;

              _this2.gameController.playerData.setIsShowGuide(stepStr);

              _this2.currentGuideIndex++;

              _this2.hideMaskAnim().then(function () {
                console.log("引导操作完成");

                if (_this2.guideCompleteCb) {
                  console.log("存在回调");

                  _this2.guideCompleteCb(); // this.guideCompleteCb = null;

                }
              });
            });
          }
        }, {
          key: "hideMaskAnim",
          value: function hideMaskAnim() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var uiTransfrom = _this3.guideLayer.getComponent(UITransformComponent);

              var tw = new Tween(uiTransfrom);
              tw.to(0.6, {
                width: 1700,
                height: 1700
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showMaskAnim",
          value: function showMaskAnim(stepStr) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var guideData = _this4.guideConfigJsonAsset.json[stepStr];
              console.log("guide data", guideData);
              var size = guideData.Size;
              var pos = guideData.MaskPos;
              var time = guideData.Time;
              _this4.guideLayer.active = true;

              var uiTransfrom = _this4.guideLayer.getComponent(UITransformComponent); // uiTransfrom.width = 1700;
              // uiTransfrom.height = 1700;


              var tw = new Tween(uiTransfrom);
              tw.to(time, {
                width: size.width,
                height: size.height // position: v3(pos.x, pos.y, 0)

              });
              tw.call(function () {
                resolve();
              });
              tw.start();
              var posTw = new Tween(_this4.guideLayer);
              posTw.to(time, {
                position: v3(pos.x, pos.y, pos.z)
              });
              posTw.start();
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GuideCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "guideLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "guideConfigJsonAsset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/TouchScreenLayer.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, find, CameraComponent, Node, PhysicsSystem, Component, GameController, _dec, _class, _temp, ccclass, property, TouchScreenLayer;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      Component = _cc.Component;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5c5e3+MsMZDYpvgjM8gmHSO", "TouchScreenLayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TouchScreenLayer", TouchScreenLayer = (_dec = ccclass('TouchScreenLayer'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TouchScreenLayer, _Component);

        function TouchScreenLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TouchScreenLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchScreenLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.cameraNode = null;
          _this.gameCtl = null;
          return _this;
        }

        _createClass(TouchScreenLayer, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.cameraNode = find("Camera").getComponent(CameraComponent);
            this.gameCtl = find("GameController"); // Your initialization goes here.

            this.node.on(Node.EventType.TOUCH_END, function (event) {
              // console.log("touch start", event.getLocation());
              var touchPos = event.getLocation();

              var ray = _this2.cameraNode.getComponent(CameraComponent).screenPointToRay(touchPos.x, touchPos.y); // PhysicsRayResult.
              // PhysicsSystem.instance.raycastClosest(ray,0xffffff ,1000);
              // ray.


              PhysicsSystem.instance.raycast(ray, 1, 10000, true);

              if (PhysicsSystem.instance.raycastResults) {
                // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);
                find("GameController").getComponent(GameController).playerTouch3dObject(PhysicsSystem.instance.raycastResults); // PhysicsSystem.instance
              }
            });
          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);

        return TouchScreenLayer;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/TowerInfoLayer.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Prefab, LabelComponent, isValid, instantiate, v3, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, ccclass, property, TowerInfoLayer;

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
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      LabelComponent = _cc.LabelComponent;
      isValid = _cc.isValid;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34c6bA7xiVOdLmFLwAjWo2Q", "TowerInfoLayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerInfoLayer", TowerInfoLayer = (_dec = ccclass('TowerInfoLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TowerInfoLayer, _Component);

        function TowerInfoLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerInfoLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerInfoLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "currentAttackDamageLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentAttckRangeLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentAttackSpeedLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerNameLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "attackTypeIconList", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoLabel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoLayer", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tower2dAnimNodePos", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tower2dAnimPrefabList", _descriptor9, _assertThisInitialized(_this));

          _this.currentShowAnimNode = null;
          return _this;
        }

        _createClass(TowerInfoLayer, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.node.on('show-tower-info', this.setTowerData.bind(this), this);
            this.node.on("close-tower-info-layer", function () {
              _this2.towerInfoLayer.active = false;
            });
          }
        }, {
          key: "setTowerData",
          value: function setTowerData(target) {
            this.towerInfoLayer.active = true;
            this.currentAttackDamageLabel.getComponent(LabelComponent).string = target.getCurrentAttackNum().toString();
            this.currentAttackSpeedLabel.getComponent(LabelComponent).string = Math.round(1 / target.getCurrentShootRate()).toString() + '/S';
            this.currentAttckRangeLabel.getComponent(LabelComponent).string = Math.floor(target.getCurrentAttackRange()).toString();
            this.towerNameLabel.getComponent(LabelComponent).string = target.getObjectName();
            var typeIndex = target.towerIndexType;

            if (isValid(this.currentShowAnimNode)) {
              //
              this.currentShowAnimNode.destroy();
            }

            var node = instantiate(this.tower2dAnimPrefabList[typeIndex]);
            node.parent = this.towerInfoLayer;
            node.position = v3(this.tower2dAnimNodePos.position);
            this.currentShowAnimNode = node;
          }
        }]);

        return TowerInfoLayer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentAttackDamageLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentAttckRangeLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentAttackSpeedLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "towerNameLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "attackTypeIconList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoLayer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tower2dAnimNodePos", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tower2dAnimPrefabList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/typescript.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, Typescript;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22ae7b9IOpLNY3XMC2PMmpx", "typescript", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Typescript", Typescript = (_dec = ccclass('Typescript'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(Typescript, _Component);

        function Typescript() {
          _classCallCheck(this, Typescript);

          return _possibleConstructorReturn(this, _getPrototypeOf(Typescript).apply(this, arguments));
        }

        _createClass(Typescript, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return Typescript;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/WeaponUpdateCellPrefab.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Node, SpriteFrame, loader, SpriteComponent, LabelComponent, find, BaseObject, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, ccclass, property, WeaponUpdateCellPrefab;

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
    _dec11: void 0,
    _dec12: void 0,
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
    _descriptor10: void 0,
    _descriptor11: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      loader = _cc.loader;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
      find = _cc.find;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a6c70AbEx1NLpumxgHfrO6e", "WeaponUpdateCellPrefab", undefined);

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
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseObject) {
        _inherits(WeaponUpdateCellPrefab, _BaseObject);

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

          _initializerDefineProperty(_this, "duidiAttackIcon", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "duikonngAttackIcon", _descriptor11, _assertThisInitialized(_this));

          _this.currentChooseRate = 0;
          _this.weaponInfoCtl = null;
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
          value: function setData(data, gameController, gameConfig, weaponCtl) {
            var _this2 = this;

            console.log("初始化数据", data); // let iconStr = data['IconSprteFrame'];
            // this.gameController.uiController.on("on-gold-count-refer-event", ()=>{
            //     //注册当前金币个数改变的消息
            // });

            this.weaponInfoCtl = weaponCtl;
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
            var canAttackTypeList = this.getCanAttackMoveTypeList();

            for (var i = 0; i < canAttackTypeList.length; i++) {
              if (canAttackTypeList[i] === 'Walk') {
                this.duidiAttackIcon.active = true;
              }

              if (canAttackTypeList[i] === 'Fly') {
                this.duikonngAttackIcon.active = true;
              }
            }

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
            find("GameController").emit("player-button-click-audio");

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
                  }
                } else {
                  var activeCost = this.getActiveCostGoldCount();

                  if (activeCost <= currentGoldCount) {
                    this.activeWeapon();
                    this.gameController.playerData.addGoldCount(-activeCost);
                    this.referUILabel();
                    this.showWeaponIcon();
                    this.weaponInfoCtl.node.emit("refer-current-tower-menu-ui");
                    this.weaponInfoCtl.weaponActived(this.node); //有weapon 被激活了
                  }
                }

                break;

              case 'WeaponBg':
                // console.log("武器背景");
                //显示塔的详细信息
                // this.node.parent.emit("show-tower-info", this);
                this.weaponInfoCtl.node.emit("show-tower-info", this);
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
      }(BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentDamageLabel", [_dec2], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "duidiAttackIcon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "duikonngAttackIcon", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/WeaponInfoCtl.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameController.js", "./InfoLayerCtlBase.js", "./WeaponUpdateCellPrefab.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _get, cclegacy, _decorator, Prefab, Node, SpriteFrame, LabelComponent, SpriteComponent, instantiate, v3, find, isValid, GameController, InfoLayerCtlBase, WeaponUpdateCellPrefab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, ccclass, property, WeaponInfoCtl;

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
    _dec11: void 0,
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
    _descriptor10: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      find = _cc.find;
      isValid = _cc.isValid;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_InfoLayerCtlBaseJs) {
      InfoLayerCtlBase = _InfoLayerCtlBaseJs.InfoLayerCtlBase;
    }, function (_WeaponUpdateCellPrefabJs) {
      WeaponUpdateCellPrefab = _WeaponUpdateCellPrefabJs.WeaponUpdateCellPrefab;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4185fepR9NDl6TuAmrhxLTe", "WeaponInfoCtl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WeaponInfoCtl", WeaponInfoCtl = (_dec = ccclass('WeaponInfoCtl'), _dec2 = property({
        type: GameController
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: SpriteFrame
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_InfoLayerCtlBase) {
        _inherits(WeaponInfoCtl, _InfoLayerCtlBase);

        function WeaponInfoCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WeaponInfoCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WeaponInfoCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateWeaponInfoCellPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponCellParentNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentInitRedHeartCountLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartCostGoldCount", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartButtonSpriteFrameLight", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartButtonSpriteFrameGray", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addRedHeartButton", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "chooseAddRedHeartCountLabel", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scrollviewNode", _descriptor10, _assertThisInitialized(_this));

          _this.weaponIndoCellNodeList = [];
          _this.currentChooseRate = 0;
          return _this;
        }

        _createClass(WeaponInfoCtl, [{
          key: "start",
          //当前选择的倍数
          value: function start() {
            var _this2 = this;

            _get(_getPrototypeOf(WeaponInfoCtl.prototype), "start", this).call(this); // this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);


            this.node.on("refer-choose-rate-cost", function (chooseRate) {
              console.log("刷新当前选择的倍数", chooseRate);
              console.log("weapon indo cell node list", _this2.weaponIndoCellNodeList);

              for (var i = 0; i < _this2.weaponIndoCellNodeList.length; i++) {
                var node = _this2.weaponIndoCellNodeList[i];
                node.getComponent(WeaponUpdateCellPrefab).updateChooseRate(chooseRate);
              } // this.addRedHeartCountGoldCount.getComponent(LabelComponent).string


              _this2.currentChooseRate = chooseRate;

              _this2.referCurrentRedHeartCountUI();
            }); // this.node.on("enter-game", ()=>{

            this.initWeaponData(); // })
            //
          }
        }, {
          key: "referCurrentRedHeartCountUI",
          value: function referCurrentRedHeartCountUI() {
            var gameController = this.gameController.getComponent(GameController);
            var cost = gameController.playerData.getAddOneRedHeartCostGoldCount() * this.currentChooseRate;
            this.addRedHeartCostGoldCount.getComponent(LabelComponent).string = cost + '';
            var currentGoldCount = gameController.playerData.getCurrentGoldCount();
            console.log("current gold count", currentGoldCount);
            console.log("cost", cost);

            if (currentGoldCount < cost) {
              this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameGray;
            } else {
              this.addRedHeartButton.getComponent(SpriteComponent).spriteFrame = this.addRedHeartButtonSpriteFrameLight;
            }

            this.currentInitRedHeartCountLabel.getComponent(LabelComponent).string = gameController.playerData.getCurrentInitRedHeartCount() + '';
            this.chooseAddRedHeartCountLabel.getComponent(LabelComponent).string = "+" + this.currentChooseRate + "";
          }
        }, {
          key: "initWeaponData",
          value: function initWeaponData() {
            var _this3 = this; //初始化当前武器的相关信息


            var gameController = this.gameController.getComponent(GameController);
            var gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
            var towerLevelData = this.gameController.playerData.getCurrentTowersLocalLevelData();

            for (var i = 0; i < towerLevelData.length; i++) {
              var data = towerLevelData[i];
              var node = instantiate(this.updateWeaponInfoCellPrefab);
              node.parent = this.weaponCellParentNode;
              node.getComponent(WeaponUpdateCellPrefab).setData(data, gameController, gameConfig, this);
              node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
              this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5 + 10;
              this.weaponIndoCellNodeList.push(node);
            }

            this.gameController.node.on("update-gold-label", function () {
              _this3.referCurrentRedHeartCountUI();
            });
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            _get(_getPrototypeOf(WeaponInfoCtl.prototype), "onButtonClick", this).call(this, event, customData);

            find("GameController").emit("player-button-click-audio");

            switch (customData) {
              case 'add-heart-button':
                //增加红心的按钮
                var gameController = this.gameController.getComponent(GameController);
                var currentGoldCount = gameController.playerData.getCurrentGoldCount();
                var cost = gameController.playerData.getAddOneRedHeartCostGoldCount() * this.currentChooseRate;

                if (currentGoldCount < cost) {
                  this.node.emit("gold-not-enough");
                } else {
                  gameController.playerData.addGoldCount(-cost);
                  gameController.playerData.addLocalInitRedHeartCount(this.currentChooseRate); //

                  this.node.emit("refer-red-heart-label");
                }

                this.referCurrentRedHeartCountUI();
                break;

              case 'bg-node-click':
                //关闭
                //
                this.node.emit("close-tower-info-layer");
                break;

              default:
                break;
            }
          }
        }, {
          key: "weaponActived",
          value: function weaponActived(node) {
            //有武器被激活了'\
            var offSetY = node.position.y;

            if (isValid(this.scrollviewNode)) {
              console.log("scrollview pos", offSetY); // offSetY = -500;
              // this.scrollviewNode.getComponent(ScrollViewComponent).scrollToOffset(v3(0, offSetY * -1 + 200, 0), 0.2);
            } // let children = this.weaponCellParentNode.children;
            // for (let i = 0 ; children.length ; i ++){
            //     if (children[i].uuid === node.uuid){
            //         offSetY = 
            //     }
            // }

          }
        }]);

        return WeaponInfoCtl;
      }(InfoLayerCtlBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updateWeaponInfoCellPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weaponCellParentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentInitRedHeartCountLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartCostGoldCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartButtonSpriteFrameLight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartButtonSpriteFrameGray", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "addRedHeartButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chooseAddRedHeartCountLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scrollviewNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/\u9053\u5177/KuangBaoSkill.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, BaseObject, _dec, _class, ccclass, property, KuangBaoSkill;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "137d7fAtX1CO423/GncRui3", "KuangBaoSkill", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("KuangBaoSkill", KuangBaoSkill = (_dec = ccclass('KuangBaoSkill'), _dec(_class = /*#__PURE__*/function (_BaseObject) {
        _inherits(KuangBaoSkill, _BaseObject);

        function KuangBaoSkill() {
          _classCallCheck(this, KuangBaoSkill);

          return _possibleConstructorReturn(this, _getPrototypeOf(KuangBaoSkill).apply(this, arguments));
        }

        return KuangBaoSkill;
      }(BaseObject)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/\u9053\u5177/TreePrefab.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, TreePrefab;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8a25dMpKeVPN5lsW6oWiwua", "TreePrefab", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TreePrefab", TreePrefab = (_dec = ccclass('TreePrefab'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(TreePrefab, _Component);

        function TreePrefab() {
          _classCallCheck(this, TreePrefab);

          return _possibleConstructorReturn(this, _getPrototypeOf(TreePrefab).apply(this, arguments));
        }

        _createClass(TreePrefab, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return TreePrefab;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/AdsController.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, AdsController;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "00d1d2cCXdJEoYd5l9/lwHa", "AdsController", undefined);

      _export("AdsController", AdsController = /*#__PURE__*/function () {
        function AdsController() {
          //观看广告的控制器
          _classCallCheck(this, AdsController);
        }

        _createClass(AdsController, [{
          key: "watchVideoAds",
          value: function watchVideoAds() {//观看一个视频广告
          }
        }]);

        return AdsController;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///util/Besize.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, _decorator, v3, ccclass, property, Besize;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b99e6kbi3NK3Y1RRPBDBTEz", "Besize", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; // @ccclass('Besize')

      _export("Besize", Besize = /*#__PURE__*/function () {
        function Besize(p0, p1, p2) {
          _classCallCheck(this, Besize);

          this.startPos = undefined;
          this.middlePos = undefined;
          this.endPos = undefined;
          this.startPos = p0;
          this.middlePos = p1;
          this.endPos = p2;
        } // Vector3 CalculateCubicBezierPoint(float t, Vector3 p0, Vector3 p1, Vector3 p2)
        // {
        //     float u = 1 - t;
        //     float tt = t * t;
        //     float uu = u * u;
        //     Vector3 p = uu * p0;
        //     p += 2 * u * t * p1;
        //     p += tt * p2;
        //     return p;
        // }


        _createClass(Besize, [{
          key: "CalculateCubicBezierPoint",
          value: function CalculateCubicBezierPoint(t, p0, p1, p2) {
            var u = 1 - t;
            var tt = t * t;
            var uu = u * u;
            var p = v3(p0).multiplyScalar(uu); // p += 2 * u * t * p1;

            p = v3(p).add(v3(p1).multiplyScalar(2 * u * t)); // p += tt * p2;

            p = v3(p).add(p2.multiplyScalar(tt));
            return p;
          }
        }, {
          key: "getBesizePointList",
          value: function getBesizePointList(segmentNum) {
            var pointList = [];

            for (var i = 0; i < segmentNum; i++) {
              var t = i / segmentNum;
              var point = this.CalculateCubicBezierPoint(t, this.startPos, this.middlePos, this.endPos);
              pointList.push(point);
            }

            return pointList;
          }
        }]);

        return Besize;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prerequisite-imports:main", ["../AudioCtl.js", "../BaseObject.js", "../BossController.js", "../util/State.js", "../TowerBuildBase/TowerBuildBase.js", "../util/BezierN.js", "../util/My2Array.js", "../GroundTiled/GroundTiled.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js", "../Enemys/EnemyBase.js", "../Enemys/EnemyBullet.js", "../EnemyController.js", "../TowerBuildBaseCtl.js", "../Data/PlayerData.js", "../UI/Menu/MenuUIBase.js", "../util/Tool.js", "../UI/GoldCtl.js", "../UI/Menu/UpdateTowerUI.js", "../UI/Menu/BuildTowerUITowerIcon.js", "../UI/Menu/BuildTowerUI.js", "../UI/GameWin/GameResultGoldCell.js", "../UI/GameWin/GameWinPrefab.js", "../UI/UIController.js", "../UI/SkillCtl.js", "../Towers/TowerBase.js", "../Effect/WinGoldAnimEffect.js", "../Home/HomeIcon.js", "../GameController.js", "../BulletBase.js", "../ChooseWeaponInfoRateCtl.js", "../Enemys/EnemyColonyCom.js", "../Enemys/EnemyCube.js", "../Enemys/WinGold.js", "../SkillComponent/CrazyRotateSkill.js", "../UI/AStartFindPath.js", "../UI/DialogCtl.js", "../UI/EnemyHealthBarCtl.js", "../UI/MonsterInfoLayer.js", "../UI/EnemyInfoCellPrefab.js", "../UI/InfoLayerCtlBase.js", "../UI/EnemyInfoLayerCtl.js", "../UI/EnterGameAnimCtl.js", "../UI/GuideCtl.js", "../UI/TouchScreenLayer.js", "../UI/TowerInfoLayer.js", "../UI/typescript.js", "../UI/WeaponUpdateCellPrefab.js", "../UI/WeaponInfoCtl.js", "../UI/\u9053\u5177/KuangBaoSkill.js", "../UI/\u9053\u5177/TreePrefab.js", "../util/AdsController.js", "../util/Besize.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_AudioCtlJs) {}, function (_BaseObjectJs) {}, function (_BossControllerJs) {}, function (_utilStateJs) {}, function (_TowerBuildBaseTowerBuildBaseJs) {}, function (_utilBezierNJs) {}, function (_utilMy2ArrayJs) {}, function (_GroundTiledGroundTiledJs) {}, function (_GroundMapCtlJs) {}, function (_utilFindPathWithAStartJs) {}, function (_EnemysEnemyBaseJs) {}, function (_EnemysEnemyBulletJs) {}, function (_EnemyControllerJs) {}, function (_TowerBuildBaseCtlJs) {}, function (_DataPlayerDataJs) {}, function (_UIMenuMenuUIBaseJs) {}, function (_utilToolJs) {}, function (_UIGoldCtlJs) {}, function (_UIMenuUpdateTowerUIJs) {}, function (_UIMenuBuildTowerUITowerIconJs) {}, function (_UIMenuBuildTowerUIJs) {}, function (_UIGameWinGameResultGoldCellJs) {}, function (_UIGameWinGameWinPrefabJs) {}, function (_UIUIControllerJs) {}, function (_UISkillCtlJs) {}, function (_TowersTowerBaseJs) {}, function (_EffectWinGoldAnimEffectJs) {}, function (_HomeHomeIconJs) {}, function (_GameControllerJs) {}, function (_BulletBaseJs) {}, function (_ChooseWeaponInfoRateCtlJs) {}, function (_EnemysEnemyColonyComJs) {}, function (_EnemysEnemyCubeJs) {}, function (_EnemysWinGoldJs) {}, function (_SkillComponentCrazyRotateSkillJs) {}, function (_UIAStartFindPathJs) {}, function (_UIDialogCtlJs) {}, function (_UIEnemyHealthBarCtlJs) {}, function (_UIMonsterInfoLayerJs) {}, function (_UIEnemyInfoCellPrefabJs) {}, function (_UIInfoLayerCtlBaseJs) {}, function (_UIEnemyInfoLayerCtlJs) {}, function (_UIEnterGameAnimCtlJs) {}, function (_UIGuideCtlJs) {}, function (_UITouchScreenLayerJs) {}, function (_UITowerInfoLayerJs) {}, function (_UITypescriptJs) {}, function (_UIWeaponUpdateCellPrefabJs) {}, function (_UIWeaponInfoCtlJs) {}, function (_UIKuangBaoSkillJs) {}, function (_UITreePrefabJs) {}, function (_utilAdsControllerJs) {}, function (_utilBesizeJs) {}],
    execute: function () {}
  };
});

(function(r) {
  r('project:///assets/Scripts/AudioCtl.js', 'chunks:///AudioCtl.js');
  r('project:///assets/Scripts/BaseObject.js', 'chunks:///BaseObject.js');
  r('project:///assets/Scripts/BossController.js', 'chunks:///BossController.js');
  r('project:///assets/Scripts/util/State.js', 'chunks:///util/State.js');
  r('project:///assets/Scripts/TowerBuildBase/TowerBuildBase.js', 'chunks:///TowerBuildBase/TowerBuildBase.js');
  r('project:///assets/Scripts/util/BezierN.js', 'chunks:///util/BezierN.js');
  r('project:///assets/Scripts/util/My2Array.js', 'chunks:///util/My2Array.js');
  r('project:///assets/Scripts/GroundTiled/GroundTiled.js', 'chunks:///GroundTiled/GroundTiled.js');
  r('project:///assets/Scripts/GroundMapCtl.js', 'chunks:///GroundMapCtl.js');
  r('project:///assets/Scripts/util/FindPathWithAStart.js', 'chunks:///util/FindPathWithAStart.js');
  r('project:///assets/Scripts/Enemys/EnemyBase.js', 'chunks:///Enemys/EnemyBase.js');
  r('project:///assets/Scripts/Enemys/EnemyBullet.js', 'chunks:///Enemys/EnemyBullet.js');
  r('project:///assets/Scripts/EnemyController.js', 'chunks:///EnemyController.js');
  r('project:///assets/Scripts/TowerBuildBaseCtl.js', 'chunks:///TowerBuildBaseCtl.js');
  r('project:///assets/Scripts/Data/PlayerData.js', 'chunks:///Data/PlayerData.js');
  r('project:///assets/Scripts/UI/Menu/MenuUIBase.js', 'chunks:///UI/Menu/MenuUIBase.js');
  r('project:///assets/Scripts/util/Tool.js', 'chunks:///util/Tool.js');
  r('project:///assets/Scripts/UI/GoldCtl.js', 'chunks:///UI/GoldCtl.js');
  r('project:///assets/Scripts/UI/Menu/UpdateTowerUI.js', 'chunks:///UI/Menu/UpdateTowerUI.js');
  r('project:///assets/Scripts/UI/Menu/BuildTowerUITowerIcon.js', 'chunks:///UI/Menu/BuildTowerUITowerIcon.js');
  r('project:///assets/Scripts/UI/Menu/BuildTowerUI.js', 'chunks:///UI/Menu/BuildTowerUI.js');
  r('project:///assets/Scripts/UI/GameWin/GameResultGoldCell.js', 'chunks:///UI/GameWin/GameResultGoldCell.js');
  r('project:///assets/Scripts/UI/GameWin/GameWinPrefab.js', 'chunks:///UI/GameWin/GameWinPrefab.js');
  r('project:///assets/Scripts/UI/UIController.js', 'chunks:///UI/UIController.js');
  r('project:///assets/Scripts/UI/SkillCtl.js', 'chunks:///UI/SkillCtl.js');
  r('project:///assets/Scripts/Towers/TowerBase.js', 'chunks:///Towers/TowerBase.js');
  r('project:///assets/Scripts/Effect/WinGoldAnimEffect.js', 'chunks:///Effect/WinGoldAnimEffect.js');
  r('project:///assets/Scripts/Home/HomeIcon.js', 'chunks:///Home/HomeIcon.js');
  r('project:///assets/Scripts/GameController.js', 'chunks:///GameController.js');
  r('project:///assets/Scripts/BulletBase.js', 'chunks:///BulletBase.js');
  r('project:///assets/Scripts/ChooseWeaponInfoRateCtl.js', 'chunks:///ChooseWeaponInfoRateCtl.js');
  r('project:///assets/Scripts/Enemys/EnemyColonyCom.js', 'chunks:///Enemys/EnemyColonyCom.js');
  r('project:///assets/Scripts/Enemys/EnemyCube.js', 'chunks:///Enemys/EnemyCube.js');
  r('project:///assets/Scripts/Enemys/WinGold.js', 'chunks:///Enemys/WinGold.js');
  r('project:///assets/Scripts/SkillComponent/CrazyRotateSkill.js', 'chunks:///SkillComponent/CrazyRotateSkill.js');
  r('project:///assets/Scripts/UI/AStartFindPath.js', 'chunks:///UI/AStartFindPath.js');
  r('project:///assets/Scripts/UI/DialogCtl.js', 'chunks:///UI/DialogCtl.js');
  r('project:///assets/Scripts/UI/EnemyHealthBarCtl.js', 'chunks:///UI/EnemyHealthBarCtl.js');
  r('project:///assets/Scripts/UI/MonsterInfoLayer.js', 'chunks:///UI/MonsterInfoLayer.js');
  r('project:///assets/Scripts/UI/EnemyInfoCellPrefab.js', 'chunks:///UI/EnemyInfoCellPrefab.js');
  r('project:///assets/Scripts/UI/InfoLayerCtlBase.js', 'chunks:///UI/InfoLayerCtlBase.js');
  r('project:///assets/Scripts/UI/EnemyInfoLayerCtl.js', 'chunks:///UI/EnemyInfoLayerCtl.js');
  r('project:///assets/Scripts/UI/EnterGameAnimCtl.js', 'chunks:///UI/EnterGameAnimCtl.js');
  r('project:///assets/Scripts/UI/GuideCtl.js', 'chunks:///UI/GuideCtl.js');
  r('project:///assets/Scripts/UI/TouchScreenLayer.js', 'chunks:///UI/TouchScreenLayer.js');
  r('project:///assets/Scripts/UI/TowerInfoLayer.js', 'chunks:///UI/TowerInfoLayer.js');
  r('project:///assets/Scripts/UI/typescript.js', 'chunks:///UI/typescript.js');
  r('project:///assets/Scripts/UI/WeaponUpdateCellPrefab.js', 'chunks:///UI/WeaponUpdateCellPrefab.js');
  r('project:///assets/Scripts/UI/WeaponInfoCtl.js', 'chunks:///UI/WeaponInfoCtl.js');
  r('project:///assets/Scripts/UI/道具/KuangBaoSkill.js', 'chunks:///UI/道具/KuangBaoSkill.js');
  r('project:///assets/Scripts/UI/道具/TreePrefab.js', 'chunks:///UI/道具/TreePrefab.js');
  r('project:///assets/Scripts/util/AdsController.js', 'chunks:///util/AdsController.js');
  r('project:///assets/Scripts/util/Besize.js', 'chunks:///util/Besize.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});