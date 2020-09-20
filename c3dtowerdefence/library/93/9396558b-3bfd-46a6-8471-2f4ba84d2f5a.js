System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../Enemys/EnemyBase.js", "../BulletBase.js", "../BaseObject.js", "../EnemyController.js", "../TowerBuildBase/TowerBuildBase.js", "../UI/SkillCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Vec3, v3, v2, Prefab, instantiate, find, SkeletalAnimationComponent, isValid, CCFloat, Tween, State, GameController, EnemyBase, BulletBase, BaseObject, EnemyController, TowerBuildBase, SkillCtl, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TowerBase;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./../util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./../Enemys/EnemyBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletBase(extras) {
    _reporterNs.report("BulletBase", "./../BulletBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyController(extras) {
    _reporterNs.report("EnemyController", "../EnemyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBuildBase(extras) {
    _reporterNs.report("TowerBuildBase", "../TowerBuildBase/TowerBuildBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCtl(extras) {
    _reporterNs.report("SkillCtl", "../UI/SkillCtl", _context.meta, extras);
  }

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      v2 = _cc.v2;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      find = _cc.find;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      isValid = _cc.isValid;
      CCFloat = _cc.CCFloat;
      Tween = _cc.Tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_BulletBaseJs) {
      BulletBase = _BulletBaseJs.BulletBase;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_EnemyControllerJs) {
      EnemyController = _EnemyControllerJs.EnemyController;
    }, function (_TowerBuildBaseTowerBuildBaseJs) {
      TowerBuildBase = _TowerBuildBaseTowerBuildBaseJs.TowerBuildBase;
    }, function (_UISkillCtlJs) {
      SkillCtl = _UISkillCtlJs.SkillCtl;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "93965WLO/1GpoRxL0uoTS9a", "TowerBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBase", TowerBase = (_dec = ccclass('TowerBase'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: CCFloat
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(TowerBase, _ref);

        function TowerBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentTargetEnemy = null;
          _this.currentShootTime = 0;

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bulletStartPos", _descriptor2, _assertThisInitialized(_this));

          _this.currentShootDiraction = v2(0, 0);
          _this.gameConfig = null;

          _initializerDefineProperty(_this, "attackAnimEventTimeOffset", _descriptor3, _assertThisInitialized(_this));

          _this.towerBuildBase = null;

          _initializerDefineProperty(_this, "attackRangeNode", _descriptor4, _assertThisInitialized(_this));

          _this.skillCtl = null;
          return _this;
        }

        _createClass(TowerBase, [{
          key: "init",
          value: function init(gameConfig, gameController) {
            _get(_getPrototypeOf(TowerBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.skillCtl = find("Canvas").getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl);
            this.gameConfig = gameConfig;
            console.log('tower base init');
            this.node.emit("init", gameConfig, gameController);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            console.log("tower base start");
            this.state.setState("run");
            var moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度

            var accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).accY;
            this.gameController = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController); // this.gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
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

              if (skeleteAnim.clips.length < 3) {
                _this2.node.destroy();

                if (_this2.towerBuildBase) {
                  _this2.towerBuildBase.getComponent(_crd && TowerBuildBase === void 0 ? (_reportPossibleCrUseOfTowerBuildBase({
                    error: Error()
                  }), TowerBuildBase) : TowerBuildBase).unSetTargetTower(_this2.node);
                }

                return;
              }

              var destroyClip = skeleteAnim.clips[2];
              var stateAnim = skeleteAnim.getState(destroyClip.name);
              stateAnim.repeatCount = 1;
              skeleteAnim.play(destroyClip.name);

              _this2.scheduleOnce(function () {
                if (_this2.towerBuildBase) {
                  _this2.towerBuildBase.getComponent(_crd && TowerBuildBase === void 0 ? (_reportPossibleCrUseOfTowerBuildBase({
                    error: Error()
                  }), TowerBuildBase) : TowerBuildBase).unSetTargetTower(_this2.node);
                }

                var randomPos = v3(Math.random() * 2, 0, Math.random() * 2);

                _this2.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController).showAddGoldAnimEffect(_this2.getDestroyCount(), v3(_this2.node.position.x, 0, _this2.node.position.z).add(randomPos));

                _this2.node.destroy();
              }, stateAnim.length);
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
            //     // Your update function goes here.
            if (this.state.getState() === 'run') {
              //当前的状态是运行状态
              //寻找合适的 敌人
              // this.node.rotate(new Quat(0,0.001,0,0));
              // this.node.eulerAngles = new Vec3(0,90,0);
              if (this.currentTargetEnemy === null) {
                var enemyNodeList = this.gameController.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).getCurrentEnemyNodeList();
                var minLength = 10000;
                var targetEnemyNode = undefined;

                for (var i = 0; i < enemyNodeList.length; i++) {
                  var enemyNode = enemyNodeList[i];

                  if (isValid(enemyNode) && enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).getIsCanLock() && !enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).getIsDead() && this.getCanAttackEnemy(enemyNode)) {
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

                  if (dis < this.getCurrentAttackRange()) {
                    this.currentTargetEnemy = targetEnemyNode;
                  }
                }
              }

              if (isValid(this.currentTargetEnemy)) {
                // console.log("找到了目标敌人");
                if (this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase) && this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase).getIsDead()) {
                  this.currentTargetEnemy = null;
                } else {
                  this.currentShootDiraction = v2(this.currentTargetEnemy.position.x, this.currentTargetEnemy.position.z).subtract(v2(this.node.position.x, this.node.position.z));
                  var angle = this.currentShootDiraction.signAngle(v2(0, -1)); // console.log("angle", angle);

                  this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);
                }
              }

              if (isValid(this.currentTargetEnemy)) {
                if (this.currentShootTime > this.shootDuraction) {
                  var _dis = v2(this.currentTargetEnemy.position.x, this.currentTargetEnemy.position.z).subtract(v2(this.node.position.x, this.node.position.z)).length();

                  if (_dis > this.getCurrentAttackRange()) {
                    this.currentTargetEnemy = undefined;
                    return;
                  }

                  this.currentShootTime = 0;
                  this.shootOneBullet(this.getCurrentAttackRate(), this.currentShootDiraction, this.getCurrentAttackNum());
                } else {
                  this.currentShootTime += deltaTime;
                }
              } else {
                this.currentTargetEnemy = null;
              }
            }
          }
        }, {
          key: "getCurrentAttackRate",
          value: function getCurrentAttackRate() {
            return this.baseAttackRate;
          }
        }, {
          key: "shootOneBullet",
          value: function shootOneBullet(attackRate, currentShootDiraction, attackNum) {
            var _this3 = this;

            var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);

            if (skeleteAnim) {
              var defaultAnimName = skeleteAnim.defaultClip.name;
              var animState = skeleteAnim.getState(defaultAnimName);
              var length = animState.length * 1 / attackRate; // console.log("length", length);

              skeleteAnim.play(defaultAnimName);
              animState.repeatCount = 1;
              this.scheduleOnce(function () {
                // if (isValid(this.currentTargetEnemy)) {
                _this3.createOneBullet(currentShootDiraction, _this3.getCurrentAttackNum()); // }

              }, length * this.attackAnimEventTimeOffset);
            }
          }
        }, {
          key: "createOneBullet",
          value: function createOneBullet(direction, attackNum) {
            var bulletNode = instantiate(this.bulletPrefab);
            bulletNode.parent = this.node.parent;
            bulletNode.active = false;
            bulletNode.setPosition(this.bulletStartPos.worldPosition);
            bulletNode.active = true;
            console.log("createOneBullet base attack num", attackNum);
            bulletNode.getComponent(_crd && BulletBase === void 0 ? (_reportPossibleCrUseOfBulletBase({
              error: Error()
            }), BulletBase) : BulletBase).init(this.gameConfig, this.gameController, {
              direction: direction,
              targetEnemy: this.currentTargetEnemy,
              baseAttackNum: attackNum,
              targetTower: this
            });
          }
        }, {
          key: "enemyDeadByThis",
          value: function enemyDeadByThis(isDead) {
            //敌人被此塔打死
            if (isDead) {
              //如果敌人被打死了, 那么此塔增加能量 一个点
              this.skillCtl.showAddPowerAnimEffect(2, this.node.position);
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
            var _this4 = this;

            var tw = new Tween(this.attackRangeNode);
            tw.to(0.1, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {
              _this4.attackRangeNode.active = false;
            });
            tw.start();
          }
        }]);

        return TowerBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletStartPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "attackAnimEventTimeOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attackRangeNode", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYzIiwidjIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiRW5lbXlCYXNlIiwiQnVsbGV0QmFzZSIsIkJhc2VPYmplY3QiLCJFbmVteUNvbnRyb2xsZXIiLCJUb3dlckJ1aWxkQmFzZSIsIlNraWxsQ3RsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVG93ZXJCYXNlIiwidHlwZSIsInN0YXRlIiwiY3VycmVudFRhcmdldEVuZW15IiwiY3VycmVudFNob290VGltZSIsImN1cnJlbnRTaG9vdERpcmFjdGlvbiIsImdhbWVDb25maWciLCJ0b3dlckJ1aWxkQmFzZSIsInNraWxsQ3RsIiwiZ2FtZUNvbnRyb2xsZXIiLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImVtaXQiLCJzZXRTdGF0ZSIsIm1vdmVEaXN0YW5jZSIsImJ1bGxldFN0YXJ0UG9zIiwid29ybGRQb3NpdGlvbiIsInkiLCJhY2NZIiwib24iLCJ0b3VjaFNjcmVlblRvM2QiLCJiaW5kIiwiZGVzdHJveUFsbFRvd2VyIiwiYWRkU3RhdGUiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiY2xpcHMiLCJsZW5ndGgiLCJkZXN0cm95IiwidW5TZXRUYXJnZXRUb3dlciIsImRlc3Ryb3lDbGlwIiwic3RhdGVBbmltIiwiZ2V0U3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwicmFuZG9tUG9zIiwiTWF0aCIsInJhbmRvbSIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImdldERlc3Ryb3lDb3VudCIsInBvc2l0aW9uIiwieCIsInoiLCJhZGQiLCJyZXN1bHRMaXN0IiwiaSIsInJlc3VsdCIsImNvbGxpZGVyIiwidXVpZCIsIm9mZiIsImRlbHRhVGltZSIsImVuZW15Tm9kZUxpc3QiLCJnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCIsIm1pbkxlbmd0aCIsInRhcmdldEVuZW15Tm9kZSIsInVuZGVmaW5lZCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsImdldENhbkF0dGFja0VuZW15Iiwic3VidHJhY3QiLCJkaXMiLCJnZXRDdXJyZW50QXR0YWNrUmFuZ2UiLCJhbmdsZSIsInNpZ25BbmdsZSIsImV1bGVyQW5nbGVzIiwiUEkiLCJzaG9vdER1cmFjdGlvbiIsInNob290T25lQnVsbGV0IiwiZ2V0Q3VycmVudEF0dGFja1JhdGUiLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwiYmFzZUF0dGFja1JhdGUiLCJhdHRhY2tSYXRlIiwiYXR0YWNrTnVtIiwiZGVmYXVsdEFuaW1OYW1lIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJjcmVhdGVPbmVCdWxsZXQiLCJhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0IiwiZGlyZWN0aW9uIiwiYnVsbGV0Tm9kZSIsImJ1bGxldFByZWZhYiIsInBhcmVudCIsImFjdGl2ZSIsInNldFBvc2l0aW9uIiwiaW5pdCIsInRhcmdldEVuZW15IiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwiaXNEZWFkIiwic2hvd0FkZFBvd2VyQW5pbUVmZmVjdCIsIm9iamVjdFR5cGUiLCJhdHRhY2tSYW5nZSIsImF0dGFja1JhbmdlTm9kZSIsInR3IiwidG8iLCJzY2FsZSIsInN0YXJ0IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXlDQyxNQUFB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LEVBQUUsQ0FBQ0csS0FBSDtBQUNIOzs7Ozs7Ozs7OztpQkF0UTZCLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFXSyxDOzs7Ozs7O2lCQUtKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBQaHlzaWNzUmF5UmVzdWx0LCBDb21wb25lbnQsIE5vZGUsIFZlYzIsIFZlYzMsIFF1YXQsIHYzLCB2MiwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgSnNvbkFzc2V0LCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgaXNWYWxpZCwgQ0NGbG9hdCwgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJ1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuLy4uL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEJ1bGxldEJhc2UgfSBmcm9tICcuLy4uL0J1bGxldEJhc2UnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZSB9IGZyb20gJy4uL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgU2tpbGxDdGwgfSBmcm9tICcuLi9VSS9Ta2lsbEN0bCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCYXNlJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgLy8gcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGFyZ2V0RW5lbXk6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3RUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBzaG9vdER1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJ1bGxldFN0YXJ0UG9zOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGJ1bGxldE1vdmVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzIgPSB2MigwLCAwKTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhdHRhY2tSYXRlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRvd2VyQnVpbGRCYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYXR0YWNrUmFuZ2VOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbEN0bDogU2tpbGxDdGwgPSBudWxsO1xyXG5cclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLnNraWxsQ3RsID0gZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoU2tpbGxDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rvd2VyIGJhc2UgaW5pdCcpO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiaW5pdFwiLCBnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIGJhc2Ugc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgbW92ZURpc3RhbmNlID0gdGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uLnkgLSAwLjU7IC8v5a2Q5by555qE5Y+R5bCE6auY5bqmIC0g5pWM5Lq655qEIOmrmOW6plxyXG4gICAgICAgIGxldCBhY2NZID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuXHJcbiAgICAgICAgLy8gbGV0IGF0dGFja1JhdGUgPSB0aGlzLmdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tSYXRlID0gYXR0YWNrUmF0ZTtcclxuICAgICAgICAvLyB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIHRoaXMuYmFzZUF0dGFja1JhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCB0aGlzLnRvdWNoU2NyZWVuVG8zZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJkZXN0cm95LWFsbC10b3dlclwiLCB0aGlzLmRlc3Ryb3lBbGxUb3dlci5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVsZWFzLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWxlYXNlLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJkZXN0cm95XCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/plIDmr4HnirbmgIFcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0ZUFuaW0uY2xpcHMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGVzdHJveUNsaXAgPSBza2VsZXRlQW5pbS5jbGlwc1syXTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlc3Ryb3lDbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGRlc3Ryb3lDbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1aWxkQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tUG9zID0gdjMoTWF0aC5yYW5kb20oKSAqIDIsIDAsIE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXREZXN0cm95Q291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KS5hZGQocmFuZG9tUG9zKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIH0sIHN0YXRlQW5pbS5sZW5ndGgpXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZGVzdHJveUFsbFRvd2VyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0b3VjaFNjcmVlblRvM2QocmVzdWx0TGlzdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlsITnur/mo4DmtYvliLDkuoYgdG93ZXJcIik7XHJcbiAgICAgICAgLy8gaWYgKGNvbGxpZGVyLm5vZGUgJiYgY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAvL+eCueS4reS6huatpOWhlFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgVwiKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub2ZmKCd0b3VjaC1zY3JlZW4tdG8tM2QnLCB0aGlzLnRvdWNoU2NyZWVuVG8zZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwiZGVzdHJveS1hbGwtdG93ZXJcIiwgdGhpcy5kZXN0cm95QWxsVG93ZXIsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9EZXN0cm95KCkge1xyXG4gICAgICAgIC8v5Y676ZSA5q+BXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnZGVzdHJveScpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxlbmd0aCA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVuZW15Tm9kZTogTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKGVuZW15Tm9kZSkgJiYgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzQ2FuTG9jaygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW5BdHRhY2tFbmVteShlbmVteU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBuZXcgVmVjMyhlbmVteU5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubGVuZ3RoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbmVteU5vZGUgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLnNldEJlTG9ja2VkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RW5lbXlOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYyKHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbi54LCB0YXJnZXRFbmVteU5vZGUucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDwgdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHRhcmdldEVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebruagh+aVjOS6ulwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24gPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbi5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuZ2xlXCIsIGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNob290VGltZSA+IHRoaXMuc2hvb3REdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjIodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueCwgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcyA+IHRoaXMuZ2V0Q3VycmVudEF0dGFja1JhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCh0aGlzLmdldEN1cnJlbnRBdHRhY2tSYXRlKCksIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZVxyXG4gICAgfVxyXG4gICAgc2hvb3RPbmVCdWxsZXQoYXR0YWNrUmF0ZTogbnVtYmVyLCBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzIsIGF0dGFja051bTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRBbmltTmFtZSA9IHNrZWxldGVBbmltLmRlZmF1bHRDbGlwLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZWZhdWx0QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aCAqIDEgLyBhdHRhY2tSYXRlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlbmd0aFwiLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGRlZmF1bHRBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVPbmVCdWxsZXQoY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0sIGxlbmd0aCAqIHRoaXMuYXR0YWNrQW5pbUV2ZW50VGltZU9mZnNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVPbmVCdWxsZXQoZGlyZWN0aW9uOiBWZWMyLCBhdHRhY2tOdW06IG51bWJlcikge1xyXG4gICAgICAgIGxldCBidWxsZXROb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xyXG4gICAgICAgIGJ1bGxldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ1bGxldE5vZGUuc2V0UG9zaXRpb24odGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVPbmVCdWxsZXQgYmFzZSBhdHRhY2sgbnVtXCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSxcclxuICAgICAgICAgICAgYmFzZUF0dGFja051bTogYXR0YWNrTnVtLFxyXG4gICAgICAgICAgICB0YXJnZXRUb3dlcjogdGhpc1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZW5lbXlEZWFkQnlUaGlzKGlzRGVhZDogYm9vbGVhbikge1xyXG4gICAgICAgIC8v5pWM5Lq66KKr5q2k5aGU5omT5q27XHJcbiAgICAgICAgaWYgKGlzRGVhZCkge1xyXG4gICAgICAgICAgICAvL+WmguaenOaVjOS6uuiiq+aJk+atu+S6hiwg6YKj5LmI5q2k5aGU5aKe5Yqg6IO96YePIOS4gOS4queCuVxyXG4gICAgICAgICAgICB0aGlzLnNraWxsQ3RsLnNob3dBZGRQb3dlckFuaW1FZmZlY3QoMiwgdGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZVNraWxsKCkge1xyXG4gICAgICAgIC8v5aGU6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgLy8gbGV0IHRvd2VyVHlwZSA9IHRoaXMuXHJcbiAgICAgICAgLy8gbGV0IHRvd2VyU2tpbGxUeXBlID0gdGhcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2Ugc2tpbGxcIiwgdGhpcy5vYmplY3RUeXBlKTtcclxuICAgICAgICAvLyBsZXQgdG93ZXJTa2lsbFR5cGUgPSB0aGlzLmdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Ta2lsbFR5cGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3dlciBza2lsbCB0eXBlXCIsIHRvd2VyU2tpbGxUeXBlKTtcclxuICAgICAgICAvL+mHiuaUvueahOWhlOeahOaKgOiDvVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWxlYXMtc2tpbGxcIik7IC8v6YeK5pS+5oqA6IO9c1xyXG4gICAgfVxyXG4gICAgc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCdWlsZEJhc2U6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlID0gdG93ZXJCdWlsZEJhc2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVMZXZlbCgpO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dBdHRhY2tSYW5nZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmF0dGFja1JhbmdlTm9kZVxyXG4gICAgICAgIGxldCBhdHRhY2tSYW5nZSA9IHRoaXMuZ2V0Q3VycmVudEF0dGFja1JhbmdlKCk7IC8v6I635Y+W5Z+656GA5pS75Ye76IyD5Zu0XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2sgcmFuZ2VcIiwgYXR0YWNrUmFuZ2UpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrUmFuZ2VOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYXR0YWNrUmFuZ2VOb2RlKTtcclxuICAgICAgICB0dy50bygwLjEsIHtcclxuICAgICAgICAgICAgc2NhbGU6IHYzKGF0dGFja1JhbmdlICogMiwgYXR0YWNrUmFuZ2UgKiAyLCBhdHRhY2tSYW5nZSAqIDIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VBdHRhY2tSYW5nZSgpIHtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5hdHRhY2tSYW5nZU5vZGUpXHJcbiAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1JhbmdlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19