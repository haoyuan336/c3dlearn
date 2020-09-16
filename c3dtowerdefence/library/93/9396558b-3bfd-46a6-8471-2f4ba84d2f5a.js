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
          _this.gameController = null;
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
          value: function init(gameConfig) {
            _get(_getPrototypeOf(TowerBase.prototype), "init", this).call(this, gameConfig);

            this.skillCtl = find("Canvas").getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl);
            this.gameConfig = gameConfig;
            console.log('tower base init');
            this.node.emit("init", gameConfig);
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
            this.gameController = find("GameController"); // this.gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
            // let attackRate = this.gameConfig[this.objectType].ShootRate;
            // this.attackRate = attackRate;
            // this.shootDuraction = 1 / this.baseAttackRate;

            this.gameController.on("touch-screen-to-3d", this.touchScreenTo3d.bind(this), this);
            this.gameController.on("destroy-all-tower", this.destroyAllTower.bind(this), this);
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
                this.gameController.emit("touch-tower", this.node);
                break;
              }
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            console.log("销毁");
            this.gameController.off('touch-screen-to-3d', this.touchScreenTo3d, this);
            this.gameController.on("destroy-all-tower", this.destroyAllTower, this);
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
                  }), EnemyBase) : EnemyBase).getIsDead()) {
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
                _this3.createOneBullet(currentShootDiraction, _this3.getCurrentAttackNum(attackNum)); // }

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
            bulletNode.active = true; // console.log("createOneBullet base attack num", attackNum);

            bulletNode.getComponent(_crd && BulletBase === void 0 ? (_reportPossibleCrUseOfBulletBase({
              error: Error()
            }), BulletBase) : BulletBase).init(this.gameConfig, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYzIiwidjIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiRW5lbXlCYXNlIiwiQnVsbGV0QmFzZSIsIkJhc2VPYmplY3QiLCJFbmVteUNvbnRyb2xsZXIiLCJUb3dlckJ1aWxkQmFzZSIsIlNraWxsQ3RsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVG93ZXJCYXNlIiwidHlwZSIsImdhbWVDb250cm9sbGVyIiwic3RhdGUiLCJjdXJyZW50VGFyZ2V0RW5lbXkiLCJjdXJyZW50U2hvb3RUaW1lIiwiY3VycmVudFNob290RGlyYWN0aW9uIiwiZ2FtZUNvbmZpZyIsInRvd2VyQnVpbGRCYXNlIiwic2tpbGxDdGwiLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImVtaXQiLCJzZXRTdGF0ZSIsIm1vdmVEaXN0YW5jZSIsImJ1bGxldFN0YXJ0UG9zIiwid29ybGRQb3NpdGlvbiIsInkiLCJhY2NZIiwib24iLCJ0b3VjaFNjcmVlblRvM2QiLCJiaW5kIiwiZGVzdHJveUFsbFRvd2VyIiwiYWRkU3RhdGUiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiY2xpcHMiLCJsZW5ndGgiLCJkZXN0cm95IiwidW5TZXRUYXJnZXRUb3dlciIsImRlc3Ryb3lDbGlwIiwic3RhdGVBbmltIiwiZ2V0U3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwicmFuZG9tUG9zIiwiTWF0aCIsInJhbmRvbSIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImdldERlc3Ryb3lDb3VudCIsInBvc2l0aW9uIiwieCIsInoiLCJhZGQiLCJyZXN1bHRMaXN0IiwiaSIsInJlc3VsdCIsImNvbGxpZGVyIiwidXVpZCIsIm9mZiIsImRlbHRhVGltZSIsImVuZW15Tm9kZUxpc3QiLCJnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCIsIm1pbkxlbmd0aCIsInRhcmdldEVuZW15Tm9kZSIsInVuZGVmaW5lZCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsInN1YnRyYWN0IiwiZGlzIiwiZ2V0Q3VycmVudEF0dGFja1JhbmdlIiwiYW5nbGUiLCJzaWduQW5nbGUiLCJldWxlckFuZ2xlcyIsIlBJIiwic2hvb3REdXJhY3Rpb24iLCJzaG9vdE9uZUJ1bGxldCIsImdldEN1cnJlbnRBdHRhY2tSYXRlIiwiZ2V0Q3VycmVudEF0dGFja051bSIsImJhc2VBdHRhY2tSYXRlIiwiYXR0YWNrUmF0ZSIsImF0dGFja051bSIsImRlZmF1bHRBbmltTmFtZSIsImRlZmF1bHRDbGlwIiwiYW5pbVN0YXRlIiwiY3JlYXRlT25lQnVsbGV0IiwiYXR0YWNrQW5pbUV2ZW50VGltZU9mZnNldCIsImRpcmVjdGlvbiIsImJ1bGxldE5vZGUiLCJidWxsZXRQcmVmYWIiLCJwYXJlbnQiLCJhY3RpdmUiLCJzZXRQb3NpdGlvbiIsImluaXQiLCJ0YXJnZXRFbmVteSIsImJhc2VBdHRhY2tOdW0iLCJ0YXJnZXRUb3dlciIsImlzRGVhZCIsInNob3dBZGRQb3dlckFuaW1FZmZlY3QiLCJvYmplY3RUeXBlIiwiYXR0YWNrUmFuZ2UiLCJhdHRhY2tSYW5nZU5vZGUiLCJ0dyIsInRvIiwic2NhbGUiLCJzdGFydCIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF5Q0MsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1B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QUNpQjtBQUNkO0FBQ0EsZ0JBQUl1RixXQUFXLEdBQUcsS0FBSzlCLHFCQUFMLEVBQWxCLENBRmMsQ0FFa0M7O0FBQ2hEdEQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0Qm1GLFdBQTVCO0FBQ0EsaUJBQUtDLGVBQUwsQ0FBcUJWLE1BQXJCLEdBQThCLElBQTlCO0FBQ0EsZ0JBQUlXLEVBQUUsR0FBRyxJQUFJNUcsS0FBSixDQUFVLEtBQUsyRyxlQUFmLENBQVQ7QUFDQUMsWUFBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1BDLGNBQUFBLEtBQUssRUFBRXRILEVBQUUsQ0FBQ2tILFdBQVcsR0FBRyxDQUFmLEVBQWtCQSxXQUFXLEdBQUcsQ0FBaEMsRUFBbUNBLFdBQVcsR0FBRyxDQUFqRDtBQURGLGFBQVg7QUFHQUUsWUFBQUEsRUFBRSxDQUFDRyxLQUFIO0FBQ0g7Ozs2Q0FDa0I7QUFBQTs7QUFDZixnQkFBSUgsRUFBRSxHQUFHLElBQUk1RyxLQUFKLENBQVUsS0FBSzJHLGVBQWYsQ0FBVDtBQUNBQyxZQUFBQSxFQUFFLENBQUNDLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsY0FBQUEsS0FBSyxFQUFFdEgsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVg7QUFDQW9ILFlBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU07QUFDVixjQUFBLE1BQUksQ0FBQ0wsZUFBTCxDQUFxQlYsTUFBckIsR0FBOEIsS0FBOUI7QUFDSCxhQUZEO0FBR0FXLFlBQUFBLEVBQUUsQ0FBQ0csS0FBSDtBQUNIOzs7Ozs7Ozs7OztpQkFyUTZCLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFXSyxDOzs7Ozs7O2lCQUtKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBQaHlzaWNzUmF5UmVzdWx0LCBDb21wb25lbnQsIE5vZGUsIFZlYzIsIFZlYzMsIFF1YXQsIHYzLCB2MiwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgSnNvbkFzc2V0LCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgaXNWYWxpZCwgQ0NGbG9hdCwgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJ1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuLy4uL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEJ1bGxldEJhc2UgfSBmcm9tICcuLy4uL0J1bGxldEJhc2UnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZSB9IGZyb20gJy4uL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgU2tpbGxDdGwgfSBmcm9tICcuLi9VSS9Ta2lsbEN0bCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCYXNlJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUYXJnZXRFbmVteTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIHNob290RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWxsZXRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0U3RhcnRQb3M6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgYnVsbGV0TW92ZVRpbWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdERpcmFjdGlvbjogVmVjMiA9IHYyKDAsIDApO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHJvb3ROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGF0dGFja1JhdGU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IE9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NGbG9hdCB9KVxyXG4gICAgcHVibGljIGF0dGFja0FuaW1FdmVudFRpbWVPZmZzZXQgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgdG93ZXJCdWlsZEJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tSYW5nZU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHNraWxsQ3RsOiBTa2lsbEN0bCA9IG51bGw7XHJcblxyXG4gICAgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChTa2lsbEN0bCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZ2FtZUNvbmZpZztcclxuICAgICAgICBjb25zb2xlLmxvZygndG93ZXIgYmFzZSBpbml0Jyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJpbml0XCIsIGdhbWVDb25maWcpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3dlciBiYXNlIHN0YXJ0XCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgbGV0IG1vdmVEaXN0YW5jZSA9IHRoaXMuYnVsbGV0U3RhcnRQb3Mud29ybGRQb3NpdGlvbi55IC0gMC41OyAvL+WtkOW8ueeahOWPkeWwhOmrmOW6piAtIOaVjOS6uueahCDpq5jluqZcclxuICAgICAgICBsZXQgYWNjWSA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG5cclxuICAgICAgICAvLyBsZXQgYXR0YWNrUmF0ZSA9IHRoaXMuZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZTtcclxuICAgICAgICAvLyB0aGlzLmF0dGFja1JhdGUgPSBhdHRhY2tSYXRlO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCB0aGlzLnRvdWNoU2NyZWVuVG8zZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwiZGVzdHJveS1hbGwtdG93ZXJcIiwgdGhpcy5kZXN0cm95QWxsVG93ZXIuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlbGVhcy1za2lsbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVsZWFzZS1za2lsbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+mHiuaUvuaKgOiDvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgncnVuJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZGVzdHJveVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6ZSA5q+B54q25oCBXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkudW5TZXRUYXJnZXRUb3dlcih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltLmNsaXBzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1aWxkQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGRlc3Ryb3lDbGlwID0gc2tlbGV0ZUFuaW0uY2xpcHNbMl07XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZXN0cm95Q2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgc3RhdGVBbmltLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShkZXN0cm95Q2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkudW5TZXRUYXJnZXRUb3dlcih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbVBvcyA9IHYzKE1hdGgucmFuZG9tKCkgKiAyLCAwLCBNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0RGVzdHJveUNvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikuYWRkKHJhbmRvbVBvcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICB9LCBzdGF0ZUFuaW0ubGVuZ3RoKVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGRlc3Ryb3lBbGxUb3dlcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgdG91Y2hTY3JlZW5UbzNkKHJlc3VsdExpc3Q6IFBoeXNpY3NSYXlSZXN1bHRbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bCE57q/5qOA5rWL5Yiw5LqGIHRvd2VyXCIpO1xyXG4gICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlICYmIGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5ub2RlLnV1aWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwidG91Y2gtdG93ZXJcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdExpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgLy/ngrnkuK3kuobmraTloZRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZSA5q+BXCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub2ZmKCd0b3VjaC1zY3JlZW4tdG8tM2QnLCB0aGlzLnRvdWNoU2NyZWVuVG8zZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcImRlc3Ryb3ktYWxsLXRvd2VyXCIsIHRoaXMuZGVzdHJveUFsbFRvd2VyLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHRvRGVzdHJveSgpIHtcclxuICAgICAgICAvL+WOu+mUgOavgVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2Rlc3Ryb3knKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3nmoTnirbmgIHmmK/ov5DooYznirbmgIFcclxuICAgICAgICAgICAgLy/lr7vmib7lkIjpgILnmoQg5pWM5Lq6XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5yb3RhdGUobmV3IFF1YXQoMCwwLjAwMSwwLDApKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCw5MCwwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlTGlzdCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBtaW5MZW5ndGggPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRFbmVteU5vZGU6IE5vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZChlbmVteU5vZGUpICYmIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0NhbkxvY2soKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBuZXcgVmVjMyhlbmVteU5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubGVuZ3RoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbmVteU5vZGUgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLnNldEJlTG9ja2VkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RW5lbXlOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYyKHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbi54LCB0YXJnZXRFbmVteU5vZGUucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDwgdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHRhcmdldEVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebruagh+aVjOS6ulwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24gPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbi5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuZ2xlXCIsIGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNob290VGltZSA+IHRoaXMuc2hvb3REdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjIodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueCwgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcyA+IHRoaXMuZ2V0Q3VycmVudEF0dGFja1JhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCh0aGlzLmdldEN1cnJlbnRBdHRhY2tSYXRlKCksIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEF0dGFja1JhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGVcclxuICAgIH1cclxuICAgIHNob290T25lQnVsbGV0KGF0dGFja1JhdGU6IG51bWJlciwgY3VycmVudFNob290RGlyYWN0aW9uOiBWZWMyLCBhdHRhY2tOdW06IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbU5hbWUgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdEFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGFuaW1TdGF0ZS5sZW5ndGggKiAxIC8gYXR0YWNrUmF0ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGhcIiwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShkZWZhdWx0QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlT25lQnVsbGV0KGN1cnJlbnRTaG9vdERpcmFjdGlvbiwgdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKGF0dGFja051bSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9LCBsZW5ndGggKiB0aGlzLmF0dGFja0FuaW1FdmVudFRpbWVPZmZzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlT25lQnVsbGV0KGRpcmVjdGlvbjogVmVjMiwgYXR0YWNrTnVtOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYnVsbGV0Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICBidWxsZXROb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBidWxsZXROb2RlLnNldFBvc2l0aW9uKHRoaXMuYnVsbGV0U3RhcnRQb3Mud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlT25lQnVsbGV0IGJhc2UgYXR0YWNrIG51bVwiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgIGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICB0YXJnZXRFbmVteTogdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXksXHJcbiAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IGF0dGFja051bSxcclxuICAgICAgICAgICAgdGFyZ2V0VG93ZXI6IHRoaXNcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVuZW15RGVhZEJ5VGhpcyhpc0RlYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICAvL+aVjOS6uuiiq+atpOWhlOaJk+atu1xyXG4gICAgICAgIGlmIChpc0RlYWQpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmlYzkurrooqvmiZPmrbvkuoYsIOmCo+S5iOatpOWhlOWinuWKoOiDvemHjyDkuIDkuKrngrlcclxuICAgICAgICAgICAgdGhpcy5za2lsbEN0bC5zaG93QWRkUG93ZXJBbmltRWZmZWN0KDIsIHRoaXMubm9kZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbGVhc2VTa2lsbCgpIHtcclxuICAgICAgICAvL+WhlOmHiuaUvuaKgOiDvVxyXG4gICAgICAgIC8vIGxldCB0b3dlclR5cGUgPSB0aGlzLlxyXG4gICAgICAgIC8vIGxldCB0b3dlclNraWxsVHlwZSA9IHRoXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxlYXNlIHNraWxsXCIsIHRoaXMub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgLy8gbGV0IHRvd2VyU2tpbGxUeXBlID0gdGhpcy5nYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2tpbGxUeXBlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG93ZXIgc2tpbGwgdHlwZVwiLCB0b3dlclNraWxsVHlwZSk7XHJcbiAgICAgICAgLy/ph4rmlL7nmoTloZTnmoTmioDog71cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVsZWFzLXNraWxsXCIpOyAvL+mHiuaUvuaKgOiDvXNcclxuICAgIH1cclxuICAgIHNldFRvd2VyQnVpbGRCYXNlKHRvd2VyQnVpbGRCYXNlOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZSA9IHRvd2VyQnVpbGRCYXNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlTGV2ZWwoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tSYW5nZU5vZGVcclxuICAgICAgICBsZXQgYXR0YWNrUmFuZ2UgPSB0aGlzLmdldEN1cnJlbnRBdHRhY2tSYW5nZSgpOyAvL+iOt+WPluWfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNrIHJhbmdlXCIsIGF0dGFja1JhbmdlKTtcclxuICAgICAgICB0aGlzLmF0dGFja1JhbmdlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmF0dGFja1JhbmdlTm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgIHNjYWxlOiB2MyhhdHRhY2tSYW5nZSAqIDIsIGF0dGFja1JhbmdlICogMiwgYXR0YWNrUmFuZ2UgKiAyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGNsb3NlQXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYXR0YWNrUmFuZ2VOb2RlKVxyXG4gICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tSYW5nZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==