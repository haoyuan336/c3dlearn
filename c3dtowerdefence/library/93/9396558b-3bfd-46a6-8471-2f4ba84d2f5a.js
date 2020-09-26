System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../Enemys/EnemyBase.js", "../BulletBase.js", "../BaseObject.js", "../EnemyController.js", "../TowerBuildBase/TowerBuildBase.js", "../UI/SkillCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Vec3, Quat, v3, v2, Prefab, instantiate, find, SkeletalAnimationComponent, isValid, CCFloat, Tween, State, GameController, EnemyBase, BulletBase, BaseObject, EnemyController, TowerBuildBase, SkillCtl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, TowerBase;

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
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
        type: Node
      }), _dec5 = property({
        type: CCFloat
      }), _dec6 = property({
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

          _initializerDefineProperty(_this, "bulletStartPosList", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponBaseNode", _descriptor3, _assertThisInitialized(_this));

          _this.currentShootDiraction = v3(0, 0, 0);
          _this.gameConfig = null;

          _initializerDefineProperty(_this, "attackAnimEventTimeOffset", _descriptor4, _assertThisInitialized(_this));

          _this.towerBuildBase = null;

          _initializerDefineProperty(_this, "attackRangeNode", _descriptor5, _assertThisInitialized(_this));

          _this.skillCtl = null;
          return _this;
        }

        _createClass(TowerBase, [{
          key: "init",
          // private isCanAttack: 
          value: function init(gameConfig, gameController) {
            _get(_getPrototypeOf(TowerBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.skillCtl = find("Canvas").getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl);
            this.gameConfig = gameConfig;
            console.log('tower base init');
            this.node.emit("init", gameConfig, gameController); // this.node.on("weapon-euler-angles-init", ()=>{
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
              var skeleteAnim = _this2.rootNode.getComponent(SkeletalAnimationComponent); // if (skeleteAnim.clips.length < 3) {
              //     this.node.destroy();
              //     if (this.towerBuildBase) {
              //         this.towerBuildBase.getComponent(TowerBuildBase).unSetTargetTower(this.node);
              //     }
              //     return;
              // }


              var destroyAnimName = "骨架|todestroy"; // let destroyClip = skeleteAnim.clips[2];

              var stateAnim = skeleteAnim.getState(destroyAnimName);

              if (stateAnim) {
                stateAnim.repeatCount = 1;
                skeleteAnim.play(destroyAnimName);

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
              } else {
                _this2.node.destroy();

                if (_this2.towerBuildBase) {
                  _this2.towerBuildBase.getComponent(_crd && TowerBuildBase === void 0 ? (_reportPossibleCrUseOfTowerBuildBase({
                    error: Error()
                  }), TowerBuildBase) : TowerBuildBase).unSetTargetTower(_this2.node);
                }
              }
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
                  // this.rootNode.lookAt(targetEnemyNode.position);

                  if (dis < this.getCurrentAttackRange()) {
                    // this.rootNode.lookAt(targetEnemyNode.position);
                    this.currentTargetEnemy = targetEnemyNode;
                  }
                }
              }

              if (isValid(this.currentTargetEnemy)) {
                // console.log("找到了目标敌人");
                if (this.rootNode) {
                  this.rootNode.lookAt(this.currentTargetEnemy.position); // console.log("this,root node", this.rootNode.eulerAngles);

                  if (this.rootNode.eulerAngles.x < 0) {
                    this.rootNode.eulerAngles = v3(0, this.rootNode.eulerAngles.y, this.rootNode.eulerAngles.z);
                  }
                }

                if (this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase) && this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase).getIsDead()) {
                  this.currentTargetEnemy = null;
                } else {
                  this.currentShootDiraction = v3(this.currentTargetEnemy.position).subtract(v3(this.node.position)); // let angle = v2(this.currentShootDiraction.x, this.currentShootDiraction.z).signAngle(v2(0, -1));
                  // console.log("angle", angle);
                  // this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);

                  var quat = new Quat();
                  var v = v3(this.currentShootDiraction.x, 0, this.currentShootDiraction.z).normalize();
                  Quat.fromViewUp(quat, v, Vec3.UP);
                  var lerpQ = new Quat();
                  Quat.lerp(lerpQ, this.node.rotation, quat, 0.2);
                  this.node.rotation = quat;
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

            // if(this.weaponBaseNode){
            //     let weaponSkeleteAnim = this.weaponBaseNode.getComponent(SkeletalAnimationComponent);
            //     if (weaponSkeleteAnim){
            //         let animName = "骨架|AttackAnim";
            //         let animState = skeleteAnim.getState(animName)';'
            //     }
            // }
            var baseNodeList = [this.rootNode];

            if (this.weaponBaseNode) {
              baseNodeList.push(this.weaponBaseNode);
            }

            var isHaveBullet = false;

            if (this.getBulletRecoverTime() > 0) {
              for (var i = 0; i < this.bulletStartPosList.length; i++) {
                var node = this.bulletStartPosList[i];

                if (node.active) {
                  isHaveBullet = true;
                  break;
                }
              }
            } else {
              isHaveBullet = true;
            }

            if (!isHaveBullet) {
              return;
            }

            var length = 0;

            for (var _i = 0; _i < baseNodeList.length; _i++) {
              var skeleteAnim = baseNodeList[_i].getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                // let defaultAnimName = skeleteAnim.defaultClip.name;
                var animName = "骨架|AttackAnim";
                var animState = skeleteAnim.getState(animName);
                var lengthTime = animState.length * 1 / attackRate; // console.log("length", length);

                skeleteAnim.play(animName);
                animState.repeatCount = 1;
                length = lengthTime; // let stateAnim = skeleteAnim.getState(animName);
              }
            } // stateAnim.setTime(0.5);


            this.scheduleOnce(function () {
              // if (isValid(this.currentTargetEnemy)) {
              _this3.createOneTimeBullet(currentShootDiraction, _this3.getCurrentAttackNum()); // }

            }, length * this.attackAnimEventTimeOffset);
          }
        }, {
          key: "createOneTimeBullet",
          value: function createOneTimeBullet(direction, attackNum) {
            var _this4 = this;

            var _loop = function _loop(i) {
              var bulletPosNode = _this4.bulletStartPosList[i];

              if (bulletPosNode.active) {
                var bulletNode = instantiate(_this4.bulletPrefab);
                bulletNode.parent = _this4.node.parent;
                bulletNode.active = false;
                bulletNode.setPosition(bulletPosNode.worldPosition);
                bulletNode.active = true;
                console.log("createOneBullet base attack num", attackNum); // direction.

                var randomVec = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                direction.add(randomVec);
                bulletNode.getComponent(_crd && BulletBase === void 0 ? (_reportPossibleCrUseOfBulletBase({
                  error: Error()
                }), BulletBase) : BulletBase).init(_this4.gameConfig, _this4.gameController, {
                  direction: direction,
                  targetEnemy: _this4.currentTargetEnemy,
                  baseAttackNum: attackNum,
                  targetTower: _this4
                });

                if (_this4.getBulletRecoverTime() > 0) {
                  bulletPosNode.active = false;
                  var oldPos = v3(bulletPosNode.position);
                  var tw = new Tween(bulletPosNode);
                  tw.set({
                    position: v3(bulletPosNode.position).subtract(v3(0, 0.3, -0.3))
                  });
                  tw.delay(_this4.getBulletRecoverTime());
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

            for (var i = 0; i < this.bulletStartPosList.length; i++) {
              var _ret = _loop(i);

              if (_ret === "break") break;
            }
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
            var _this5 = this;

            var tw = new Tween(this.attackRangeNode);
            tw.to(0.1, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {
              _this5.attackRangeNode.active = false;
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

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsIlF1YXQiLCJ2MyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJpc1ZhbGlkIiwiQ0NGbG9hdCIsIlR3ZWVuIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15QmFzZSIsIkJ1bGxldEJhc2UiLCJCYXNlT2JqZWN0IiwiRW5lbXlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2UiLCJTa2lsbEN0bCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQmFzZSIsInR5cGUiLCJzdGF0ZSIsImN1cnJlbnRUYXJnZXRFbmVteSIsImN1cnJlbnRTaG9vdFRpbWUiLCJjdXJyZW50U2hvb3REaXJhY3Rpb24iLCJnYW1lQ29uZmlnIiwidG93ZXJCdWlsZEJhc2UiLCJza2lsbEN0bCIsImdhbWVDb250cm9sbGVyIiwiZ2V0Q29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJlbWl0Iiwic2V0U3RhdGUiLCJvbiIsInRvdWNoU2NyZWVuVG8zZCIsImJpbmQiLCJkZXN0cm95QWxsVG93ZXIiLCJhZGRTdGF0ZSIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJkZXN0cm95QW5pbU5hbWUiLCJzdGF0ZUFuaW0iLCJnZXRTdGF0ZSIsInJlcGVhdENvdW50IiwicGxheSIsInNjaGVkdWxlT25jZSIsInVuU2V0VGFyZ2V0VG93ZXIiLCJyYW5kb21Qb3MiLCJNYXRoIiwicmFuZG9tIiwic2hvd0FkZEdvbGRBbmltRWZmZWN0IiwiZ2V0RGVzdHJveUNvdW50IiwicG9zaXRpb24iLCJ4IiwieiIsImFkZCIsImRlc3Ryb3kiLCJsZW5ndGgiLCJyZXN1bHRMaXN0IiwiaSIsInJlc3VsdCIsImNvbGxpZGVyIiwidXVpZCIsIm9mZiIsImRlbHRhVGltZSIsImVuZW15Tm9kZUxpc3QiLCJnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCIsIm1pbkxlbmd0aCIsInRhcmdldEVuZW15Tm9kZSIsInVuZGVmaW5lZCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsImdldENhbkF0dGFja0VuZW15Iiwic3VidHJhY3QiLCJkaXMiLCJnZXRDdXJyZW50QXR0YWNrUmFuZ2UiLCJsb29rQXQiLCJldWxlckFuZ2xlcyIsInkiLCJxdWF0IiwidiIsIm5vcm1hbGl6ZSIsImZyb21WaWV3VXAiLCJVUCIsImxlcnBRIiwibGVycCIsInJvdGF0aW9uIiwic2hvb3REdXJhY3Rpb24iLCJzaG9vdE9uZUJ1bGxldCIsImdldEN1cnJlbnRBdHRhY2tSYXRlIiwiZ2V0Q3VycmVudEF0dGFja051bSIsImJhc2VBdHRhY2tSYXRlIiwiYXR0YWNrUmF0ZSIsImF0dGFja051bSIsImJhc2VOb2RlTGlzdCIsIndlYXBvbkJhc2VOb2RlIiwicHVzaCIsImlzSGF2ZUJ1bGxldCIsImdldEJ1bGxldFJlY292ZXJUaW1lIiwiYnVsbGV0U3RhcnRQb3NMaXN0IiwiYWN0aXZlIiwiYW5pbU5hbWUiLCJhbmltU3RhdGUiLCJsZW5ndGhUaW1lIiwiY3JlYXRlT25lVGltZUJ1bGxldCIsImF0dGFja0FuaW1FdmVudFRpbWVPZmZzZXQiLCJkaXJlY3Rpb24iLCJidWxsZXRQb3NOb2RlIiwiYnVsbGV0Tm9kZSIsImJ1bGxldFByZWZhYiIsInBhcmVudCIsInNldFBvc2l0aW9uIiwid29ybGRQb3NpdGlvbiIsInJhbmRvbVZlYyIsImluaXQiLCJ0YXJnZXRFbmVteSIsImJhc2VBdHRhY2tOdW0iLCJ0YXJnZXRUb3dlciIsIm9sZFBvcyIsInR3Iiwic2V0IiwiZGVsYXkiLCJjYWxsIiwidG8iLCJzdGFydCIsImlzRGVhZCIsInNob3dBZGRQb3dlckFuaW1FZmZlY3QiLCJvYmplY3RUeXBlIiwiYXR0YWNrUmFuZ2UiLCJh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QUNWO0FBRUg7Ozs0Q0FDaUI7QUFDZDtBQUNBLGdCQUFJeUcsV0FBVyxHQUFHLEtBQUtyRCxxQkFBTCxFQUFsQixDQUZjLENBRWtDOztBQUNoRGhELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJvRyxXQUE1QjtBQUNBLGlCQUFLQyxlQUFMLENBQXFCN0IsTUFBckIsR0FBOEIsSUFBOUI7QUFDQSxnQkFBSW1CLEVBQUUsR0FBRyxJQUFJbEgsS0FBSixDQUFVLEtBQUs0SCxlQUFmLENBQVQ7QUFDQVYsWUFBQUEsRUFBRSxDQUFDSSxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1BPLGNBQUFBLEtBQUssRUFBRXJJLEVBQUUsQ0FBQ21JLFdBQVcsR0FBRyxDQUFmLEVBQWtCQSxXQUFXLEdBQUcsQ0FBaEMsRUFBbUNBLFdBQVcsR0FBRyxDQUFqRDtBQURGLGFBQVg7QUFHQVQsWUFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0g7Ozs2Q0FDa0I7QUFBQTs7QUFDZixnQkFBSUwsRUFBRSxHQUFHLElBQUlsSCxLQUFKLENBQVUsS0FBSzRILGVBQWYsQ0FBVDtBQUNBVixZQUFBQSxFQUFFLENBQUNJLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRU8sY0FBQUEsS0FBSyxFQUFFckksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVg7QUFDQTBILFlBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLFlBQU07QUFDVixjQUFBLE1BQUksQ0FBQ08sZUFBTCxDQUFxQjdCLE1BQXJCLEdBQThCLEtBQTlCO0FBQ0gsYUFGRDtBQUdBbUIsWUFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0g7Ozs7Ozs7Ozs7O2lCQW5YNkIsSTs7Ozs7OztpQkFFTSxFOzs7Ozs7O2lCQUdOLEk7Ozs7Ozs7aUJBZUssQzs7Ozs7OztpQkFLSixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgUGh5c2ljc1JheVJlc3VsdCwgQ29tcG9uZW50LCBOb2RlLCBWZWMyLCBWZWMzLCBRdWF0LCB2MywgdjIsIFByZWZhYiwgaW5zdGFudGlhdGUsIEpzb25Bc3NldCwgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBDb2xsaWRlckNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGlzVmFsaWQsIENDRmxvYXQsIFR3ZWVuLCBOb2RlUG9vbCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vLi4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgQnVsbGV0QmFzZSB9IGZyb20gJy4vLi4vQnVsbGV0QmFzZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlIH0gZnJvbSAnLi4vVG93ZXJCdWlsZEJhc2UvVG93ZXJCdWlsZEJhc2UnO1xyXG5pbXBvcnQgeyBTa2lsbEN0bCB9IGZyb20gJy4uL1VJL1NraWxsQ3RsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJhc2UnKVxyXG5leHBvcnQgY2xhc3MgVG93ZXJCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICAvLyBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUYXJnZXRFbmVteTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIHNob290RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWxsZXRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0U3RhcnRQb3NMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgd2VhcG9uQmFzZU5vZGU6IE5vZGUgPSBudWxsOyAvL+atpuWZqOW6leW6p+iKgueCuVxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGJ1bGxldFN0YXJ0UG9zOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXHJcbiAgICAvLyBwdWJsaWMgYXJtTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBidWxsZXRNb3ZlVGltZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFNob290RGlyYWN0aW9uOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgcm9vdE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgYXR0YWNrUmF0ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzogT2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0Zsb2F0IH0pXHJcbiAgICBwdWJsaWMgYXR0YWNrQW5pbUV2ZW50VGltZU9mZnNldCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3dlckJ1aWxkQmFzZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGF0dGFja1JhbmdlTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2tpbGxDdGw6IFNraWxsQ3RsID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGlzQ2FuQXR0YWNrOiBcclxuXHJcbiAgICBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5za2lsbEN0bCA9IGZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFNraWxsQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3dlciBiYXNlIGluaXQnKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXRcIiwgZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIndlYXBvbi1ldWxlci1hbmdsZXMtaW5pdFwiLCAoKT0+e1xyXG4gICAgICAgIC8vICAgICAvL+atpuWZqOinkuW6puW9kuS4ulxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIGJhc2Ugc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAvLyBsZXQgbW92ZURpc3RhbmNlID0gdGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uLnkgLSAwLjU7IC8v5a2Q5by555qE5Y+R5bCE6auY5bqmIC0g5pWM5Lq655qEIOmrmOW6plxyXG4gICAgICAgIC8vIGxldCBhY2NZID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuXHJcbiAgICAgICAgLy8gbGV0IGF0dGFja1JhdGUgPSB0aGlzLmdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tSYXRlID0gYXR0YWNrUmF0ZTtcclxuICAgICAgICAvLyB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIHRoaXMuYmFzZUF0dGFja1JhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCB0aGlzLnRvdWNoU2NyZWVuVG8zZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJkZXN0cm95LWFsbC10b3dlclwiLCB0aGlzLmRlc3Ryb3lBbGxUb3dlci5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVsZWFzLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWxlYXNlLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJkZXN0cm95XCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/plIDmr4HnirbmgIFcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBpZiAoc2tlbGV0ZUFuaW0uY2xpcHMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBsZXQgZGVzdHJveUFuaW1OYW1lID0gXCLpqqjmnrZ8dG9kZXN0cm95XCJcclxuICAgICAgICAgICAgLy8gbGV0IGRlc3Ryb3lDbGlwID0gc2tlbGV0ZUFuaW0uY2xpcHNbMl07XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZXN0cm95QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShkZXN0cm95QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21Qb3MgPSB2MyhNYXRoLnJhbmRvbSgpICogMiwgMCwgTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXREZXN0cm95Q291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KS5hZGQocmFuZG9tUG9zKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgc3RhdGVBbmltLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1aWxkQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZGVzdHJveUFsbFRvd2VyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0b3VjaFNjcmVlblRvM2QocmVzdWx0TGlzdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlsITnur/mo4DmtYvliLDkuoYgdG93ZXJcIik7XHJcbiAgICAgICAgLy8gaWYgKGNvbGxpZGVyLm5vZGUgJiYgY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAvL+eCueS4reS6huatpOWhlFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgVwiKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub2ZmKCd0b3VjaC1zY3JlZW4tdG8tM2QnLCB0aGlzLnRvdWNoU2NyZWVuVG8zZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwiZGVzdHJveS1hbGwtdG93ZXJcIiwgdGhpcy5kZXN0cm95QWxsVG93ZXIsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9EZXN0cm95KCkge1xyXG4gICAgICAgIC8v5Y676ZSA5q+BXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnZGVzdHJveScpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxlbmd0aCA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVuZW15Tm9kZTogTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKGVuZW15Tm9kZSkgJiYgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzQ2FuTG9jaygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW5BdHRhY2tFbmVteShlbmVteU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBuZXcgVmVjMyhlbmVteU5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubGVuZ3RoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbmVteU5vZGUgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLnNldEJlTG9ja2VkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RW5lbXlOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYyKHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbi54LCB0YXJnZXRFbmVteU5vZGUucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvb3ROb2RlLmxvb2tBdCh0YXJnZXRFbmVteU5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDwgdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvb3ROb2RlLmxvb2tBdCh0YXJnZXRFbmVteU5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHRhcmdldEVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebruagh+aVjOS6ulwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5sb29rQXQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyxyb290IG5vZGVcIiwgdGhpcy5yb290Tm9kZS5ldWxlckFuZ2xlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdE5vZGUuZXVsZXJBbmdsZXMueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIHRoaXMucm9vdE5vZGUuZXVsZXJBbmdsZXMueSwgdGhpcy5yb290Tm9kZS5ldWxlckFuZ2xlcy56KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24gPSB2Myh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KHYzKHRoaXMubm9kZS5wb3NpdGlvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGFuZ2xlID0gdjIodGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24ueCwgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24ueikuc2lnbkFuZ2xlKHYyKDAsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbmdsZVwiLCBhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHYzKHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLngsIDAsIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnopLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCB2LCBWZWMzLlVQKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVycFEgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFF1YXQubGVycChsZXJwUSwgdGhpcy5ub2RlLnJvdGF0aW9uLCBxdWF0LCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IHF1YXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvb3RUaW1lID4gdGhpcy5zaG9vdER1cmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzID4gdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3RUaW1lID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCh0aGlzLmdldEN1cnJlbnRBdHRhY2tSYXRlKCksIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZVxyXG4gICAgfVxyXG4gICAgc2hvb3RPbmVCdWxsZXQoYXR0YWNrUmF0ZTogbnVtYmVyLCBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzMsIGF0dGFja051bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy53ZWFwb25CYXNlTm9kZSl7XHJcbiAgICAgICAgLy8gICAgIGxldCB3ZWFwb25Ta2VsZXRlQW5pbSA9IHRoaXMud2VhcG9uQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgaWYgKHdlYXBvblNrZWxldGVBbmltKXtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShhbmltTmFtZSknOydcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBiYXNlTm9kZUxpc3Q6IE5vZGVbXSA9IFt0aGlzLnJvb3ROb2RlXTtcclxuICAgICAgICBpZiAodGhpcy53ZWFwb25CYXNlTm9kZSkge1xyXG4gICAgICAgICAgICBiYXNlTm9kZUxpc3QucHVzaCh0aGlzLndlYXBvbkJhc2VOb2RlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNIYXZlQnVsbGV0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0QnVsbGV0UmVjb3ZlclRpbWUoKSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzSGF2ZUJ1bGxldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpc0hhdmVCdWxsZXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0hhdmVCdWxsZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSBiYXNlTm9kZUxpc3RbaV0uZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZGVmYXVsdEFuaW1OYW1lID0gc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXAubmFtZTtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShhbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoVGltZSA9IGFuaW1TdGF0ZS5sZW5ndGggKiAxIC8gYXR0YWNrUmF0ZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGVuZ3RoXCIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBsZW5ndGhUaW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHN0YXRlQW5pbS5zZXRUaW1lKDAuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPbmVUaW1lQnVsbGV0KGN1cnJlbnRTaG9vdERpcmFjdGlvbiwgdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKCkpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSwgbGVuZ3RoICogdGhpcy5hdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlT25lVGltZUJ1bGxldChkaXJlY3Rpb246IFZlYzMsIGF0dGFja051bTogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1bGxldFBvc05vZGUgPSB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGJ1bGxldFBvc05vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIGJ1bGxldE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROb2RlLnNldFBvc2l0aW9uKGJ1bGxldFBvc05vZGUud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZU9uZUJ1bGxldCBiYXNlIGF0dGFjayBudW1cIiwgYXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpcmVjdGlvbi5cclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21WZWMgPSB2MyhNYXRoLnJhbmRvbSgpICogMiwgTWF0aC5yYW5kb20oKSAqIDIsIE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbi5hZGQocmFuZG9tVmVjKTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RW5lbXk6IHRoaXMuY3VycmVudFRhcmdldEVuZW15LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IGF0dGFja051bSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUb3dlcjogdGhpc1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRCdWxsZXRSZWNvdmVyVGltZSgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldFBvc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFBvcyA9IHYzKGJ1bGxldFBvc05vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2VlbihidWxsZXRQb3NOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0dy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoYnVsbGV0UG9zTm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMC4zLCAtMC4zKSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuZ2V0QnVsbGV0UmVjb3ZlclRpbWUoKSlcclxuICAgICAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0UG9zTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG9sZFBvc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5lbXlEZWFkQnlUaGlzKGlzRGVhZDogYm9vbGVhbikge1xyXG4gICAgICAgIC8v5pWM5Lq66KKr5q2k5aGU5omT5q27XHJcbiAgICAgICAgaWYgKGlzRGVhZCkge1xyXG4gICAgICAgICAgICAvL+WmguaenOaVjOS6uuiiq+aJk+atu+S6hiwg6YKj5LmI5q2k5aGU5aKe5Yqg6IO96YePIOS4gOS4queCuVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLnNraWxsQ3RsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbEN0bC5zaG93QWRkUG93ZXJBbmltRWZmZWN0KDIsIHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWxlYXNlU2tpbGwoKSB7XHJcbiAgICAgICAgLy/loZTph4rmlL7mioDog71cclxuICAgICAgICAvLyBsZXQgdG93ZXJUeXBlID0gdGhpcy5cclxuICAgICAgICAvLyBsZXQgdG93ZXJTa2lsbFR5cGUgPSB0aFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVsZWFzZSBza2lsbFwiLCB0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIC8vIGxldCB0b3dlclNraWxsVHlwZSA9IHRoaXMuZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNraWxsVHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvd2VyIHNraWxsIHR5cGVcIiwgdG93ZXJTa2lsbFR5cGUpO1xyXG4gICAgICAgIC8v6YeK5pS+55qE5aGU55qE5oqA6IO9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlbGVhcy1za2lsbFwiKTsgLy/ph4rmlL7mioDog71zXHJcbiAgICB9XHJcbiAgICBzZXRUb3dlckJ1aWxkQmFzZSh0b3dlckJ1aWxkQmFzZTogTm9kZSkge1xyXG4gICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UgPSB0b3dlckJ1aWxkQmFzZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZUxldmVsKCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0F0dGFja1JhbmdlKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmFuZ2VOb2RlXHJcbiAgICAgICAgbGV0IGF0dGFja1JhbmdlID0gdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKTsgLy/ojrflj5bln7rnoYDmlLvlh7vojIPlm7RcclxuICAgICAgICBjb25zb2xlLmxvZyhcImF0dGFjayByYW5nZVwiLCBhdHRhY2tSYW5nZSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tSYW5nZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5hdHRhY2tSYW5nZU5vZGUpO1xyXG4gICAgICAgIHR3LnRvKDAuMSwge1xyXG4gICAgICAgICAgICBzY2FsZTogdjMoYXR0YWNrUmFuZ2UgKiAyLCBhdHRhY2tSYW5nZSAqIDIsIGF0dGFja1JhbmdlICogMilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZUF0dGFja1JhbmdlKCkge1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmF0dGFja1JhbmdlTm9kZSlcclxuICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrUmFuZ2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==