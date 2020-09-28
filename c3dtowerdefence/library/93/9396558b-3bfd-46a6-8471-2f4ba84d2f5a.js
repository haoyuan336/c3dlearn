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
          _this.currentShootBulletIndex = 0;
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
                // let randomVec = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                // direction.add(randomVec);

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
                  _this4.currentShootBulletIndex++;

                  if (_this4.currentShootBulletIndex === _this4.bulletStartPosList.length) {
                    _this4.currentShootBulletIndex = 0;
                  }

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

            for (var i = this.currentShootBulletIndex; i < this.bulletStartPosList.length; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsIlF1YXQiLCJ2MyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJpc1ZhbGlkIiwiQ0NGbG9hdCIsIlR3ZWVuIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15QmFzZSIsIkJ1bGxldEJhc2UiLCJCYXNlT2JqZWN0IiwiRW5lbXlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2UiLCJTa2lsbEN0bCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQmFzZSIsInR5cGUiLCJzdGF0ZSIsImN1cnJlbnRUYXJnZXRFbmVteSIsImN1cnJlbnRTaG9vdFRpbWUiLCJjdXJyZW50U2hvb3REaXJhY3Rpb24iLCJnYW1lQ29uZmlnIiwidG93ZXJCdWlsZEJhc2UiLCJza2lsbEN0bCIsImN1cnJlbnRTaG9vdEJ1bGxldEluZGV4IiwiZ2FtZUNvbnRyb2xsZXIiLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImVtaXQiLCJzZXRTdGF0ZSIsIm9uIiwidG91Y2hTY3JlZW5UbzNkIiwiYmluZCIsImRlc3Ryb3lBbGxUb3dlciIsImFkZFN0YXRlIiwic2tlbGV0ZUFuaW0iLCJyb290Tm9kZSIsImRlc3Ryb3lBbmltTmFtZSIsInN0YXRlQW5pbSIsImdldFN0YXRlIiwicmVwZWF0Q291bnQiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwidW5TZXRUYXJnZXRUb3dlciIsInJhbmRvbVBvcyIsIk1hdGgiLCJyYW5kb20iLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJnZXREZXN0cm95Q291bnQiLCJwb3NpdGlvbiIsIngiLCJ6IiwiYWRkIiwiZGVzdHJveSIsImxlbmd0aCIsInJlc3VsdExpc3QiLCJpIiwicmVzdWx0IiwiY29sbGlkZXIiLCJ1dWlkIiwib2ZmIiwiZGVsdGFUaW1lIiwiZW5lbXlOb2RlTGlzdCIsImdldEN1cnJlbnRFbmVteU5vZGVMaXN0IiwibWluTGVuZ3RoIiwidGFyZ2V0RW5lbXlOb2RlIiwidW5kZWZpbmVkIiwiZW5lbXlOb2RlIiwiZ2V0SXNDYW5Mb2NrIiwiZ2V0SXNEZWFkIiwiZ2V0Q2FuQXR0YWNrRW5lbXkiLCJzdWJ0cmFjdCIsImRpcyIsImdldEN1cnJlbnRBdHRhY2tSYW5nZSIsImxvb2tBdCIsImV1bGVyQW5nbGVzIiwieSIsInF1YXQiLCJ2Iiwibm9ybWFsaXplIiwiZnJvbVZpZXdVcCIsIlVQIiwibGVycFEiLCJsZXJwIiwicm90YXRpb24iLCJzaG9vdER1cmFjdGlvbiIsInNob290T25lQnVsbGV0IiwiZ2V0Q3VycmVudEF0dGFja1JhdGUiLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwiYmFzZUF0dGFja1JhdGUiLCJhdHRhY2tSYXRlIiwiYXR0YWNrTnVtIiwiYmFzZU5vZGVMaXN0Iiwid2VhcG9uQmFzZU5vZGUiLCJwdXNoIiwiaXNIYXZlQnVsbGV0IiwiZ2V0QnVsbGV0UmVjb3ZlclRpbWUiLCJidWxsZXRTdGFydFBvc0xpc3QiLCJhY3RpdmUiLCJhbmltTmFtZSIsImFuaW1TdGF0ZSIsImxlbmd0aFRpbWUiLCJjcmVhdGVPbmVUaW1lQnVsbGV0IiwiYXR0YWNrQW5pbUV2ZW50VGltZU9mZnNldCIsImRpcmVjdGlvbiIsImJ1bGxldFBvc05vZGUiLCJidWxsZXROb2RlIiwiYnVsbGV0UHJlZmFiIiwicGFyZW50Iiwic2V0UG9zaXRpb24iLCJ3b3JsZFBvc2l0aW9uIiwiaW5pdCIsInRhcmdldEVuZW15IiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwib2xkUG9zIiwidHciLCJzZXQiLCJkZWxheSIsImNhbGwiLCJ0byIsInN0YXJ0IiwiaXNEZWFkIiwic2hvd0FkZFBvd2VyQW5pbUVmZmVjdCIsIm9iamVjdFR5cGUiLCJhdHRhY2tSYW5nZSIsImF0dGFja1JhbmdlTm9kZSIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF5Q0MsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlDQyxNQUFBQSxJLE9BQUFBLEk7QUFBeUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLEssT0FBQUEsSzs7OztBQUNqTUMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsZSxzQkFBQUEsZTs7QUFDQUMsTUFBQUEsYyxtQ0FBQUEsYzs7QUFDQUMsTUFBQUEsUSxpQkFBQUEsUTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JyQixVLENBQXRCcUIsTztBQUFTQyxNQUFBQSxRLEdBQWF0QixVLENBQWJzQixROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDLFVBU0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVsQjtBQUFSLE9BQUQsQyxVQUVSZ0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXZCO0FBQVIsT0FBRCxDLFVBR1JxQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFdkI7QUFBUixPQUFELEMsVUFlUnFCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBS1JXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUV2QjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQS9CRHdCLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ2ZDLGtCLEdBQTJCLEk7Z0JBQzNCQyxnQixHQUEyQixDOzs7Ozs7OztnQkFpQjNCQyxxQixHQUE4QnhCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQztnQkFLaEN5QixVLEdBQXFCLEk7Ozs7Z0JBS3JCQyxjLEdBQXVCLEk7Ozs7Z0JBTXZCQyxRLEdBQXFCLEk7Z0JBR3JCQyx1QixHQUFrQyxDOzs7Ozs7K0JBRXJDSCxVLEVBQW9CSSxjLEVBQWdDO0FBQ3JELGdGQUFXSixVQUFYLEVBQXVCSSxjQUF2Qjs7QUFDQSxpQkFBS0YsUUFBTCxHQUFnQnZCLElBQUksQ0FBQyxRQUFELENBQUosQ0FBZTBCLFlBQWY7QUFBQTtBQUFBLHFDQUFoQjtBQUNBLGlCQUFLTCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBTSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLGlCQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZSxNQUFmLEVBQXVCVCxVQUF2QixFQUFtQ0ksY0FBbkMsRUFMcUQsQ0FNckQ7QUFDQTtBQUNBO0FBQ0g7OztrQ0FDTztBQUFBOztBQUNKRSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLGlCQUFLWCxLQUFMLENBQVdjLFFBQVgsQ0FBb0IsS0FBcEIsRUFGSSxDQUdKO0FBQ0E7O0FBQ0EsaUJBQUtOLGNBQUwsR0FBc0J6QixJQUFJLENBQUMsZ0JBQUQsQ0FBSixDQUF1QjBCLFlBQXZCO0FBQUE7QUFBQSxpREFBdEIsQ0FMSSxDQU9KO0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFLRCxjQUFMLENBQW9CSSxJQUFwQixDQUF5QkcsRUFBekIsQ0FBNEIsb0JBQTVCLEVBQWtELEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQWxELEVBQW1GLElBQW5GO0FBQ0EsaUJBQUtULGNBQUwsQ0FBb0JJLElBQXBCLENBQXlCRyxFQUF6QixDQUE0QixtQkFBNUIsRUFBaUQsS0FBS0csZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBakQsRUFBa0YsSUFBbEY7QUFDQSxpQkFBS2pCLEtBQUwsQ0FBV21CLFFBQVgsQ0FBb0IsY0FBcEIsRUFBb0MsWUFBTTtBQUN0QyxrQkFBSSxNQUFJLENBQUNsQixrQkFBVCxFQUE2QjtBQUN6QixnQkFBQSxNQUFJLENBQUNBLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7O0FBQ0QsY0FBQSxNQUFJLENBQUNXLElBQUwsQ0FBVUMsSUFBVixDQUFlLGVBQWYsRUFBZ0MsWUFBTTtBQUNsQztBQUNBLGdCQUFBLE1BQUksQ0FBQ2IsS0FBTCxDQUFXYyxRQUFYLENBQW9CLEtBQXBCO0FBQ0gsZUFIRDtBQUlILGFBUkQ7QUFTQSxpQkFBS2QsS0FBTCxDQUFXbUIsUUFBWCxDQUFvQixTQUFwQixFQUErQixZQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBSUMsV0FBVyxHQUFHLE1BQUksQ0FBQ0MsUUFBTCxDQUFjWixZQUFkLENBQTJCekIsMEJBQTNCLENBQWxCLENBTmlDLENBT2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxrQkFBSXNDLGVBQWUsR0FBRyxjQUF0QixDQWRpQyxDQWVqQzs7QUFDQSxrQkFBSUMsU0FBUyxHQUFHSCxXQUFXLENBQUNJLFFBQVosQ0FBcUJGLGVBQXJCLENBQWhCOztBQUNBLGtCQUFJQyxTQUFKLEVBQWU7QUFDWEEsZ0JBQUFBLFNBQVMsQ0FBQ0UsV0FBVixHQUF3QixDQUF4QjtBQUNBTCxnQkFBQUEsV0FBVyxDQUFDTSxJQUFaLENBQWlCSixlQUFqQjs7QUFDQSxnQkFBQSxNQUFJLENBQUNLLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQixzQkFBSSxNQUFJLENBQUN0QixjQUFULEVBQXlCO0FBQ3JCLG9CQUFBLE1BQUksQ0FBQ0EsY0FBTCxDQUFvQkksWUFBcEI7QUFBQTtBQUFBLDBEQUFpRG1CLGdCQUFqRCxDQUFrRSxNQUFJLENBQUNoQixJQUF2RTtBQUNIOztBQUNELHNCQUFJaUIsU0FBUyxHQUFHbEQsRUFBRSxDQUFDbUQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBdkMsQ0FBbEI7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDdkIsY0FBTCxDQUFvQkMsWUFBcEI7QUFBQTtBQUFBLHdEQUFpRHVCLHFCQUFqRCxDQUF1RSxNQUFJLENBQUNDLGVBQUwsRUFBdkUsRUFBK0Z0RCxFQUFFLENBQUMsTUFBSSxDQUFDaUMsSUFBTCxDQUFVc0IsUUFBVixDQUFtQkMsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsTUFBSSxDQUFDdkIsSUFBTCxDQUFVc0IsUUFBVixDQUFtQkUsQ0FBN0MsQ0FBRixDQUFrREMsR0FBbEQsQ0FBc0RSLFNBQXRELENBQS9GOztBQUVBLGtCQUFBLE1BQUksQ0FBQ2pCLElBQUwsQ0FBVTBCLE9BQVY7QUFFSCxpQkFURCxFQVNHZixTQUFTLENBQUNnQixNQVRiO0FBVUgsZUFiRCxNQWFPO0FBQ0gsZ0JBQUEsTUFBSSxDQUFDM0IsSUFBTCxDQUFVMEIsT0FBVjs7QUFDQSxvQkFBSSxNQUFJLENBQUNqQyxjQUFULEVBQXlCO0FBQ3JCLGtCQUFBLE1BQUksQ0FBQ0EsY0FBTCxDQUFvQkksWUFBcEI7QUFBQTtBQUFBLHdEQUFpRG1CLGdCQUFqRCxDQUFrRSxNQUFJLENBQUNoQixJQUF2RTtBQUNIO0FBQ0o7QUFJSixhQXZDRDtBQXdDSDs7OzRDQUNpQjtBQUNkLGlCQUFLQSxJQUFMLENBQVUwQixPQUFWO0FBQ0g7OzswQ0FDZUUsVSxFQUFnQztBQUM1QzlCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFENEMsQ0FFNUM7QUFDQTtBQUNBOztBQUNBLGdCQUFJLEtBQUtYLEtBQUwsQ0FBV3dCLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakM7QUFDSDs7QUFDRCxpQkFBSyxJQUFJaUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsVUFBVSxDQUFDRCxNQUEvQixFQUF1Q0UsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxrQkFBSUMsTUFBTSxHQUFHRixVQUFVLENBQUNDLENBQUQsQ0FBdkI7O0FBQ0Esa0JBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQi9CLElBQWhCLENBQXFCZ0MsSUFBckIsS0FBOEIsS0FBS2hDLElBQUwsQ0FBVWdDLElBQTVDLEVBQWtEO0FBQzlDO0FBQ0EscUJBQUtwQyxjQUFMLENBQW9CSSxJQUFwQixDQUF5QkMsSUFBekIsQ0FBOEIsYUFBOUIsRUFBNkMsS0FBS0QsSUFBbEQ7QUFDQTtBQUNIO0FBQ0o7QUFHSjs7O3NDQUNXO0FBQ1JGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxpQkFBS0gsY0FBTCxDQUFvQkksSUFBcEIsQ0FBeUJpQyxHQUF6QixDQUE2QixvQkFBN0IsRUFBbUQsS0FBSzdCLGVBQXhELEVBQXlFLElBQXpFO0FBQ0EsaUJBQUtSLGNBQUwsQ0FBb0JJLElBQXBCLENBQXlCRyxFQUF6QixDQUE0QixtQkFBNUIsRUFBaUQsS0FBS0csZUFBdEQsRUFBdUUsSUFBdkU7QUFDSDs7O3NDQUNXO0FBQ1I7QUFDQSxpQkFBS2xCLEtBQUwsQ0FBV2MsUUFBWCxDQUFvQixTQUFwQjtBQUNIOzs7aUNBQ01nQyxTLEVBQW1CO0FBQ3RCO0FBQ0EsZ0JBQUksS0FBSzlDLEtBQUwsQ0FBV3dCLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBSSxLQUFLdkIsa0JBQUwsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbEMsb0JBQUk4QyxhQUFhLEdBQUcsS0FBS3ZDLGNBQUwsQ0FBb0JDLFlBQXBCO0FBQUE7QUFBQSx3REFBa0R1Qyx1QkFBbEQsRUFBcEI7QUFDQSxvQkFBSUMsU0FBUyxHQUFHLEtBQWhCO0FBQ0Esb0JBQUlDLGVBQXFCLEdBQUdDLFNBQTVCOztBQUNBLHFCQUFLLElBQUlWLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdNLGFBQWEsQ0FBQ1IsTUFBbEMsRUFBMENFLENBQUMsRUFBM0MsRUFBK0M7QUFDM0Msc0JBQUlXLFNBQVMsR0FBR0wsYUFBYSxDQUFDTixDQUFELENBQTdCOztBQUNBLHNCQUFJeEQsT0FBTyxDQUFDbUUsU0FBRCxDQUFQLElBQXNCQSxTQUFTLENBQUMzQyxZQUFWO0FBQUE7QUFBQSw4Q0FBa0M0QyxZQUFsQyxFQUF0QixJQUNBLENBQUNELFNBQVMsQ0FBQzNDLFlBQVY7QUFBQTtBQUFBLDhDQUFrQzZDLFNBQWxDLEVBREQsSUFFQSxLQUFLQyxpQkFBTCxDQUF1QkgsU0FBdkIsQ0FGSixFQUV1QztBQUNuQyx3QkFBSWIsTUFBTSxHQUFHLElBQUk5RCxJQUFKLENBQVMyRSxTQUFTLENBQUNsQixRQUFuQixFQUE2QnNCLFFBQTdCLENBQXNDLEtBQUs1QyxJQUFMLENBQVVzQixRQUFoRCxFQUEwREssTUFBMUQsRUFBYjs7QUFDQSx3QkFBSUEsTUFBTSxHQUFHVSxTQUFiLEVBQXdCO0FBQ3BCQSxzQkFBQUEsU0FBUyxHQUFHVixNQUFaLENBRG9CLENBRXBCOztBQUNBVyxzQkFBQUEsZUFBZSxHQUFHRSxTQUFsQjtBQUNIO0FBQ0o7QUFDSixpQkFoQmlDLENBaUJsQztBQUNBO0FBQ0E7OztBQUNBLG9CQUFJRixlQUFKLEVBQXFCO0FBQ2pCLHNCQUFJTyxHQUFHLEdBQUc3RSxFQUFFLENBQUNzRSxlQUFlLENBQUNoQixRQUFoQixDQUF5QkMsQ0FBMUIsRUFBNkJlLGVBQWUsQ0FBQ2hCLFFBQWhCLENBQXlCRSxDQUF0RCxDQUFGLENBQTJEb0IsUUFBM0QsQ0FBb0U1RSxFQUFFLENBQUMsS0FBS2dDLElBQUwsQ0FBVXNCLFFBQVYsQ0FBbUJDLENBQXBCLEVBQXVCLEtBQUt2QixJQUFMLENBQVVzQixRQUFWLENBQW1CRSxDQUExQyxDQUF0RSxFQUFvSEcsTUFBcEgsRUFBVixDQURpQixDQUVqQjtBQUNBOztBQUVBLHNCQUFJa0IsR0FBRyxHQUFHLEtBQUtDLHFCQUFMLEVBQVYsRUFBd0M7QUFDcEM7QUFDQSx5QkFBS3pELGtCQUFMLEdBQTBCaUQsZUFBMUI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0Qsa0JBQUlqRSxPQUFPLENBQUMsS0FBS2dCLGtCQUFOLENBQVgsRUFBc0M7QUFDbEM7QUFDQSxvQkFBSSxLQUFLb0IsUUFBVCxFQUFtQjtBQUNmLHVCQUFLQSxRQUFMLENBQWNzQyxNQUFkLENBQXFCLEtBQUsxRCxrQkFBTCxDQUF3QmlDLFFBQTdDLEVBRGUsQ0FFZjs7QUFDQSxzQkFBSSxLQUFLYixRQUFMLENBQWN1QyxXQUFkLENBQTBCekIsQ0FBMUIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDakMseUJBQUtkLFFBQUwsQ0FBY3VDLFdBQWQsR0FBNEJqRixFQUFFLENBQUMsQ0FBRCxFQUFJLEtBQUswQyxRQUFMLENBQWN1QyxXQUFkLENBQTBCQyxDQUE5QixFQUFpQyxLQUFLeEMsUUFBTCxDQUFjdUMsV0FBZCxDQUEwQnhCLENBQTNELENBQTlCO0FBQ0g7QUFDSjs7QUFDRCxvQkFBSSxLQUFLbkMsa0JBQUwsQ0FBd0JRLFlBQXhCO0FBQUE7QUFBQSwrQ0FDQSxLQUFLUixrQkFBTCxDQUF3QlEsWUFBeEI7QUFBQTtBQUFBLDRDQUFnRDZDLFNBQWhELEVBREosRUFDaUU7QUFDN0QsdUJBQUtyRCxrQkFBTCxHQUEwQixJQUExQjtBQUNILGlCQUhELE1BR087QUFDSCx1QkFBS0UscUJBQUwsR0FBNkJ4QixFQUFFLENBQUMsS0FBS3NCLGtCQUFMLENBQXdCaUMsUUFBekIsQ0FBRixDQUN4QnNCLFFBRHdCLENBQ2Y3RSxFQUFFLENBQUMsS0FBS2lDLElBQUwsQ0FBVXNCLFFBQVgsQ0FEYSxDQUE3QixDQURHLENBR0g7QUFDQTtBQUNBOztBQUdBLHNCQUFJNEIsSUFBSSxHQUFHLElBQUlwRixJQUFKLEVBQVg7QUFDQSxzQkFBSXFGLENBQUMsR0FBR3BGLEVBQUUsQ0FBQyxLQUFLd0IscUJBQUwsQ0FBMkJnQyxDQUE1QixFQUErQixDQUEvQixFQUFrQyxLQUFLaEMscUJBQUwsQ0FBMkJpQyxDQUE3RCxDQUFGLENBQWtFNEIsU0FBbEUsRUFBUjtBQUNBdEYsa0JBQUFBLElBQUksQ0FBQ3VGLFVBQUwsQ0FBZ0JILElBQWhCLEVBQXNCQyxDQUF0QixFQUF5QnRGLElBQUksQ0FBQ3lGLEVBQTlCO0FBQ0Esc0JBQUlDLEtBQUssR0FBRyxJQUFJekYsSUFBSixFQUFaO0FBQ0FBLGtCQUFBQSxJQUFJLENBQUMwRixJQUFMLENBQVVELEtBQVYsRUFBaUIsS0FBS3ZELElBQUwsQ0FBVXlELFFBQTNCLEVBQXFDUCxJQUFyQyxFQUEyQyxHQUEzQztBQUNBLHVCQUFLbEQsSUFBTCxDQUFVeUQsUUFBVixHQUFxQlAsSUFBckI7QUFDSDtBQUNKOztBQUNELGtCQUFJN0UsT0FBTyxDQUFDLEtBQUtnQixrQkFBTixDQUFYLEVBQXNDO0FBQ2xDLG9CQUFJLEtBQUtDLGdCQUFMLEdBQXdCLEtBQUtvRSxjQUFqQyxFQUFpRDtBQUM3QyxzQkFBSWIsSUFBRyxHQUFHN0UsRUFBRSxDQUFDLEtBQUtxQixrQkFBTCxDQUF3QmlDLFFBQXhCLENBQWlDQyxDQUFsQyxFQUFxQyxLQUFLbEMsa0JBQUwsQ0FBd0JpQyxRQUF4QixDQUFpQ0UsQ0FBdEUsQ0FBRixDQUEyRW9CLFFBQTNFLENBQW9GNUUsRUFBRSxDQUFDLEtBQUtnQyxJQUFMLENBQVVzQixRQUFWLENBQW1CQyxDQUFwQixFQUF1QixLQUFLdkIsSUFBTCxDQUFVc0IsUUFBVixDQUFtQkUsQ0FBMUMsQ0FBdEYsRUFBb0lHLE1BQXBJLEVBQVY7O0FBQ0Esc0JBQUlrQixJQUFHLEdBQUcsS0FBS0MscUJBQUwsRUFBVixFQUF3QztBQUNwQyx5QkFBS3pELGtCQUFMLEdBQTBCa0QsU0FBMUI7QUFDQTtBQUVIOztBQUNELHVCQUFLakQsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFFQSx1QkFBS3FFLGNBQUwsQ0FBb0IsS0FBS0Msb0JBQUwsRUFBcEIsRUFBaUQsS0FBS3JFLHFCQUF0RCxFQUE2RSxLQUFLc0UsbUJBQUwsRUFBN0U7QUFDSCxpQkFWRCxNQVVPO0FBQ0gsdUJBQUt2RSxnQkFBTCxJQUF5QjRDLFNBQXpCO0FBQ0g7QUFDSixlQWRELE1BY087QUFDSCxxQkFBSzdDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7QUFDSjtBQUNKOzs7aURBQ3NCO0FBQ25CLG1CQUFPLEtBQUt5RSxjQUFaO0FBQ0g7Ozt5Q0FDY0MsVSxFQUFvQnhFLHFCLEVBQTZCeUUsUyxFQUFtQjtBQUFBOztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLGdCQUFJQyxZQUFvQixHQUFHLENBQUMsS0FBS3hELFFBQU4sQ0FBM0I7O0FBQ0EsZ0JBQUksS0FBS3lELGNBQVQsRUFBeUI7QUFDckJELGNBQUFBLFlBQVksQ0FBQ0UsSUFBYixDQUFrQixLQUFLRCxjQUF2QjtBQUNIOztBQUdELGdCQUFJRSxZQUFZLEdBQUcsS0FBbkI7O0FBQ0EsZ0JBQUksS0FBS0Msb0JBQUwsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDakMsbUJBQUssSUFBSXhDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3lDLGtCQUFMLENBQXdCM0MsTUFBNUMsRUFBb0RFLENBQUMsRUFBckQsRUFBeUQ7QUFDckQsb0JBQUk3QixJQUFJLEdBQUcsS0FBS3NFLGtCQUFMLENBQXdCekMsQ0FBeEIsQ0FBWDs7QUFDQSxvQkFBSTdCLElBQUksQ0FBQ3VFLE1BQVQsRUFBaUI7QUFDYkgsa0JBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0E7QUFDSDtBQUNKO0FBQ0osYUFSRCxNQVFPO0FBQ0hBLGNBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQ0EsWUFBTCxFQUFtQjtBQUNmO0FBQ0g7O0FBQ0QsZ0JBQUl6QyxNQUFjLEdBQUcsQ0FBckI7O0FBRUEsaUJBQUssSUFBSUUsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR29DLFlBQVksQ0FBQ3RDLE1BQWpDLEVBQXlDRSxFQUFDLEVBQTFDLEVBQThDO0FBQzFDLGtCQUFJckIsV0FBVyxHQUFHeUQsWUFBWSxDQUFDcEMsRUFBRCxDQUFaLENBQWdCaEMsWUFBaEIsQ0FBNkJ6QiwwQkFBN0IsQ0FBbEI7O0FBQ0Esa0JBQUlvQyxXQUFKLEVBQWlCO0FBQ2I7QUFDQSxvQkFBSWdFLFFBQVEsR0FBRyxlQUFmO0FBQ0Esb0JBQUlDLFNBQVMsR0FBR2pFLFdBQVcsQ0FBQ0ksUUFBWixDQUFxQjRELFFBQXJCLENBQWhCO0FBQ0Esb0JBQUlFLFVBQVUsR0FBR0QsU0FBUyxDQUFDOUMsTUFBVixHQUFtQixDQUFuQixHQUF1Qm9DLFVBQXhDLENBSmEsQ0FLYjs7QUFDQXZELGdCQUFBQSxXQUFXLENBQUNNLElBQVosQ0FBaUIwRCxRQUFqQjtBQUNBQyxnQkFBQUEsU0FBUyxDQUFDNUQsV0FBVixHQUF3QixDQUF4QjtBQUNBYyxnQkFBQUEsTUFBTSxHQUFHK0MsVUFBVCxDQVJhLENBU2I7QUFDSDtBQUNKLGFBL0M4RSxDQWtEL0U7OztBQUNBLGlCQUFLM0QsWUFBTCxDQUFrQixZQUFNO0FBQ3BCO0FBQ0EsY0FBQSxNQUFJLENBQUM0RCxtQkFBTCxDQUF5QnBGLHFCQUF6QixFQUFnRCxNQUFJLENBQUNzRSxtQkFBTCxFQUFoRCxFQUZvQixDQUdwQjs7QUFDSCxhQUpELEVBSUdsQyxNQUFNLEdBQUcsS0FBS2lELHlCQUpqQjtBQUtIOzs7OENBQ21CQyxTLEVBQWlCYixTLEVBQW1CO0FBQUE7O0FBQUEsdUNBRTNDbkMsQ0FGMkM7QUFJaEQsa0JBQUlpRCxhQUFhLEdBQUcsTUFBSSxDQUFDUixrQkFBTCxDQUF3QnpDLENBQXhCLENBQXBCOztBQUNBLGtCQUFJaUQsYUFBYSxDQUFDUCxNQUFsQixFQUEwQjtBQUN0QixvQkFBSVEsVUFBVSxHQUFHN0csV0FBVyxDQUFDLE1BQUksQ0FBQzhHLFlBQU4sQ0FBNUI7QUFDQUQsZ0JBQUFBLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQixNQUFJLENBQUNqRixJQUFMLENBQVVpRixNQUE5QjtBQUNBRixnQkFBQUEsVUFBVSxDQUFDUixNQUFYLEdBQW9CLEtBQXBCO0FBQ0FRLGdCQUFBQSxVQUFVLENBQUNHLFdBQVgsQ0FBdUJKLGFBQWEsQ0FBQ0ssYUFBckM7QUFDQUosZ0JBQUFBLFVBQVUsQ0FBQ1IsTUFBWCxHQUFvQixJQUFwQjtBQUNBekUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaLEVBQStDaUUsU0FBL0MsRUFOc0IsQ0FPdEI7QUFDQTtBQUNBOztBQUNBZSxnQkFBQUEsVUFBVSxDQUFDbEYsWUFBWDtBQUFBO0FBQUEsOENBQW9DdUYsSUFBcEMsQ0FBeUMsTUFBSSxDQUFDNUYsVUFBOUMsRUFBMEQsTUFBSSxDQUFDSSxjQUEvRCxFQUErRTtBQUMzRWlGLGtCQUFBQSxTQUFTLEVBQUVBLFNBRGdFO0FBRTNFUSxrQkFBQUEsV0FBVyxFQUFFLE1BQUksQ0FBQ2hHLGtCQUZ5RDtBQUczRWlHLGtCQUFBQSxhQUFhLEVBQUV0QixTQUg0RDtBQUkzRXVCLGtCQUFBQSxXQUFXLEVBQUU7QUFKOEQsaUJBQS9FOztBQU9BLG9CQUFJLE1BQUksQ0FBQ2xCLG9CQUFMLEtBQThCLENBQWxDLEVBQXFDO0FBQ2pDUyxrQkFBQUEsYUFBYSxDQUFDUCxNQUFkLEdBQXVCLEtBQXZCO0FBQ0Esa0JBQUEsTUFBSSxDQUFDNUUsdUJBQUw7O0FBQ0Esc0JBQUksTUFBSSxDQUFDQSx1QkFBTCxLQUFpQyxNQUFJLENBQUMyRSxrQkFBTCxDQUF3QjNDLE1BQTdELEVBQXFFO0FBQ2pFLG9CQUFBLE1BQUksQ0FBQ2hDLHVCQUFMLEdBQStCLENBQS9CO0FBQ0g7O0FBQ0Qsc0JBQUk2RixNQUFNLEdBQUd6SCxFQUFFLENBQUMrRyxhQUFhLENBQUN4RCxRQUFmLENBQWY7QUFDQSxzQkFBSW1FLEVBQUUsR0FBRyxJQUFJbEgsS0FBSixDQUFVdUcsYUFBVixDQUFUO0FBQ0FXLGtCQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTztBQUNIcEUsb0JBQUFBLFFBQVEsRUFBRXZELEVBQUUsQ0FBQytHLGFBQWEsQ0FBQ3hELFFBQWYsQ0FBRixDQUEyQnNCLFFBQTNCLENBQW9DN0UsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBQyxHQUFWLENBQXRDO0FBRFAsbUJBQVA7QUFHQTBILGtCQUFBQSxFQUFFLENBQUNFLEtBQUgsQ0FBUyxNQUFJLENBQUN0QixvQkFBTCxFQUFUO0FBQ0FvQixrQkFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWZCxvQkFBQUEsYUFBYSxDQUFDUCxNQUFkLEdBQXVCLElBQXZCO0FBRUgsbUJBSEQ7QUFJQWtCLGtCQUFBQSxFQUFFLENBQUNJLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFDUHZFLG9CQUFBQSxRQUFRLEVBQUVrRTtBQURILG1CQUFYO0FBR0FDLGtCQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDQTtBQUNIO0FBQ0o7QUE1QytDOztBQUVwRCxpQkFBSyxJQUFJakUsQ0FBQyxHQUFHLEtBQUtsQyx1QkFBbEIsRUFBMkNrQyxDQUFDLEdBQUcsS0FBS3lDLGtCQUFMLENBQXdCM0MsTUFBdkUsRUFBK0VFLENBQUMsRUFBaEYsRUFBb0Y7QUFBQSwrQkFBM0VBLENBQTJFOztBQUFBLG9DQXdDeEU7QUFLWDtBQUNKOzs7MENBQ2VrRSxNLEVBQWlCO0FBQzdCO0FBQ0EsZ0JBQUlBLE1BQUosRUFBWTtBQUNSO0FBQ0Esa0JBQUkxSCxPQUFPLENBQUMsS0FBS3FCLFFBQU4sQ0FBWCxFQUE0QjtBQUN4QixxQkFBS0EsUUFBTCxDQUFjc0csc0JBQWQsQ0FBcUMsQ0FBckMsRUFBd0MsS0FBS2hHLElBQUwsQ0FBVXNCLFFBQWxEO0FBQ0g7QUFDSjtBQUNKOzs7eUNBQ2M7QUFDWDtBQUNBO0FBQ0E7QUFDQXhCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS2tHLFVBQWxDLEVBSlcsQ0FLWDtBQUNBO0FBQ0E7O0FBQ0EsaUJBQUs3RyxLQUFMLENBQVdjLFFBQVgsQ0FBb0IsY0FBcEIsRUFSVyxDQVEwQjtBQUN4Qzs7OzRDQUNpQlQsYyxFQUFzQjtBQUNwQyxpQkFBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSDs7O3dDQUNhO0FBQ1Y7QUFFSDs7OzRDQUNpQjtBQUNkO0FBQ0EsZ0JBQUl5RyxXQUFXLEdBQUcsS0FBS3BELHFCQUFMLEVBQWxCLENBRmMsQ0FFa0M7O0FBQ2hEaEQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0Qm1HLFdBQTVCO0FBQ0EsaUJBQUtDLGVBQUwsQ0FBcUI1QixNQUFyQixHQUE4QixJQUE5QjtBQUNBLGdCQUFJa0IsRUFBRSxHQUFHLElBQUlsSCxLQUFKLENBQVUsS0FBSzRILGVBQWYsQ0FBVDtBQUNBVixZQUFBQSxFQUFFLENBQUNJLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFDUE8sY0FBQUEsS0FBSyxFQUFFckksRUFBRSxDQUFDbUksV0FBVyxHQUFHLENBQWYsRUFBa0JBLFdBQVcsR0FBRyxDQUFoQyxFQUFtQ0EsV0FBVyxHQUFHLENBQWpEO0FBREYsYUFBWDtBQUdBVCxZQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSDs7OzZDQUNrQjtBQUFBOztBQUNmLGdCQUFJTCxFQUFFLEdBQUcsSUFBSWxILEtBQUosQ0FBVSxLQUFLNEgsZUFBZixDQUFUO0FBQ0FWLFlBQUFBLEVBQUUsQ0FBQ0ksRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFTyxjQUFBQSxLQUFLLEVBQUVySSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsYUFBWDtBQUNBMEgsWUFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWLGNBQUEsTUFBSSxDQUFDTyxlQUFMLENBQXFCNUIsTUFBckIsR0FBOEIsS0FBOUI7QUFDSCxhQUZEO0FBR0FrQixZQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSDs7Ozs7Ozs7Ozs7aUJBelg2QixJOzs7Ozs7O2lCQUVNLEU7Ozs7Ozs7aUJBR04sSTs7Ozs7OztpQkFlSyxDOzs7Ozs7O2lCQUtKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBQaHlzaWNzUmF5UmVzdWx0LCBDb21wb25lbnQsIE5vZGUsIFZlYzIsIFZlYzMsIFF1YXQsIHYzLCB2MiwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgSnNvbkFzc2V0LCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgaXNWYWxpZCwgQ0NGbG9hdCwgVHdlZW4sIE5vZGVQb29sIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcidcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi8uLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBCdWxsZXRCYXNlIH0gZnJvbSAnLi8uLi9CdWxsZXRCYXNlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IFNraWxsQ3RsIH0gZnJvbSAnLi4vVUkvU2tpbGxDdGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1Rvd2VyQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIC8vIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgY3VycmVudFRhcmdldEVuZW15OiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFNob290VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1bGxldFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBidWxsZXRTdGFydFBvc0xpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25CYXNlTm9kZTogTm9kZSA9IG51bGw7IC8v5q2m5Zmo5bqV5bqn6IqC54K5XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgYnVsbGV0U3RhcnRQb3M6IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcclxuICAgIC8vIHB1YmxpYyBhcm1Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGJ1bGxldE1vdmVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhdHRhY2tSYXRlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRvd2VyQnVpbGRCYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYXR0YWNrUmFuZ2VOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbEN0bDogU2tpbGxDdGwgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgaXNDYW5BdHRhY2s6IFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3RCdWxsZXRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5za2lsbEN0bCA9IGZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFNraWxsQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3dlciBiYXNlIGluaXQnKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXRcIiwgZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIndlYXBvbi1ldWxlci1hbmdsZXMtaW5pdFwiLCAoKT0+e1xyXG4gICAgICAgIC8vICAgICAvL+atpuWZqOinkuW6puW9kuS4ulxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIGJhc2Ugc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAvLyBsZXQgbW92ZURpc3RhbmNlID0gdGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uLnkgLSAwLjU7IC8v5a2Q5by555qE5Y+R5bCE6auY5bqmIC0g5pWM5Lq655qEIOmrmOW6plxyXG4gICAgICAgIC8vIGxldCBhY2NZID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuXHJcbiAgICAgICAgLy8gbGV0IGF0dGFja1JhdGUgPSB0aGlzLmdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tSYXRlID0gYXR0YWNrUmF0ZTtcclxuICAgICAgICAvLyB0aGlzLnNob290RHVyYWN0aW9uID0gMSAvIHRoaXMuYmFzZUF0dGFja1JhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCB0aGlzLnRvdWNoU2NyZWVuVG8zZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJkZXN0cm95LWFsbC10b3dlclwiLCB0aGlzLmRlc3Ryb3lBbGxUb3dlci5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVsZWFzLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWxlYXNlLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJkZXN0cm95XCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/plIDmr4HnirbmgIFcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBpZiAoc2tlbGV0ZUFuaW0uY2xpcHMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBsZXQgZGVzdHJveUFuaW1OYW1lID0gXCLpqqjmnrZ8dG9kZXN0cm95XCJcclxuICAgICAgICAgICAgLy8gbGV0IGRlc3Ryb3lDbGlwID0gc2tlbGV0ZUFuaW0uY2xpcHNbMl07XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZXN0cm95QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShkZXN0cm95QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21Qb3MgPSB2MyhNYXRoLnJhbmRvbSgpICogMiwgMCwgTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXREZXN0cm95Q291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KS5hZGQocmFuZG9tUG9zKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgc3RhdGVBbmltLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1aWxkQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZGVzdHJveUFsbFRvd2VyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0b3VjaFNjcmVlblRvM2QocmVzdWx0TGlzdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlsITnur/mo4DmtYvliLDkuoYgdG93ZXJcIik7XHJcbiAgICAgICAgLy8gaWYgKGNvbGxpZGVyLm5vZGUgJiYgY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAvL+eCueS4reS6huatpOWhlFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgVwiKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub2ZmKCd0b3VjaC1zY3JlZW4tdG8tM2QnLCB0aGlzLnRvdWNoU2NyZWVuVG8zZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwiZGVzdHJveS1hbGwtdG93ZXJcIiwgdGhpcy5kZXN0cm95QWxsVG93ZXIsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9EZXN0cm95KCkge1xyXG4gICAgICAgIC8v5Y676ZSA5q+BXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnZGVzdHJveScpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxlbmd0aCA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVuZW15Tm9kZTogTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKGVuZW15Tm9kZSkgJiYgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzQ2FuTG9jaygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW5BdHRhY2tFbmVteShlbmVteU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBuZXcgVmVjMyhlbmVteU5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubGVuZ3RoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbmVteU5vZGUgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLnNldEJlTG9ja2VkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RW5lbXlOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYyKHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbi54LCB0YXJnZXRFbmVteU5vZGUucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvb3ROb2RlLmxvb2tBdCh0YXJnZXRFbmVteU5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDwgdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvb3ROb2RlLmxvb2tBdCh0YXJnZXRFbmVteU5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHRhcmdldEVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebruagh+aVjOS6ulwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5sb29rQXQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyxyb290IG5vZGVcIiwgdGhpcy5yb290Tm9kZS5ldWxlckFuZ2xlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdE5vZGUuZXVsZXJBbmdsZXMueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIHRoaXMucm9vdE5vZGUuZXVsZXJBbmdsZXMueSwgdGhpcy5yb290Tm9kZS5ldWxlckFuZ2xlcy56KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24gPSB2Myh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KHYzKHRoaXMubm9kZS5wb3NpdGlvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGFuZ2xlID0gdjIodGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24ueCwgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24ueikuc2lnbkFuZ2xlKHYyKDAsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbmdsZVwiLCBhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHYzKHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLngsIDAsIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnopLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCB2LCBWZWMzLlVQKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVycFEgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFF1YXQubGVycChsZXJwUSwgdGhpcy5ub2RlLnJvdGF0aW9uLCBxdWF0LCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IHF1YXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvb3RUaW1lID4gdGhpcy5zaG9vdER1cmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzID4gdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3RUaW1lID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCh0aGlzLmdldEN1cnJlbnRBdHRhY2tSYXRlKCksIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZVxyXG4gICAgfVxyXG4gICAgc2hvb3RPbmVCdWxsZXQoYXR0YWNrUmF0ZTogbnVtYmVyLCBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzMsIGF0dGFja051bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy53ZWFwb25CYXNlTm9kZSl7XHJcbiAgICAgICAgLy8gICAgIGxldCB3ZWFwb25Ta2VsZXRlQW5pbSA9IHRoaXMud2VhcG9uQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgaWYgKHdlYXBvblNrZWxldGVBbmltKXtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShhbmltTmFtZSknOydcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBiYXNlTm9kZUxpc3Q6IE5vZGVbXSA9IFt0aGlzLnJvb3ROb2RlXTtcclxuICAgICAgICBpZiAodGhpcy53ZWFwb25CYXNlTm9kZSkge1xyXG4gICAgICAgICAgICBiYXNlTm9kZUxpc3QucHVzaCh0aGlzLndlYXBvbkJhc2VOb2RlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNIYXZlQnVsbGV0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0QnVsbGV0UmVjb3ZlclRpbWUoKSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzSGF2ZUJ1bGxldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpc0hhdmVCdWxsZXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0hhdmVCdWxsZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSBiYXNlTm9kZUxpc3RbaV0uZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZGVmYXVsdEFuaW1OYW1lID0gc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXAubmFtZTtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShhbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoVGltZSA9IGFuaW1TdGF0ZS5sZW5ndGggKiAxIC8gYXR0YWNrUmF0ZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGVuZ3RoXCIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBsZW5ndGhUaW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHN0YXRlQW5pbS5zZXRUaW1lKDAuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPbmVUaW1lQnVsbGV0KGN1cnJlbnRTaG9vdERpcmFjdGlvbiwgdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKCkpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSwgbGVuZ3RoICogdGhpcy5hdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlT25lVGltZUJ1bGxldChkaXJlY3Rpb246IFZlYzMsIGF0dGFja051bTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmN1cnJlbnRTaG9vdEJ1bGxldEluZGV4OyBpIDwgdGhpcy5idWxsZXRTdGFydFBvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBidWxsZXRQb3NOb2RlID0gdGhpcy5idWxsZXRTdGFydFBvc0xpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChidWxsZXRQb3NOb2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0Tm9kZS5zZXRQb3NpdGlvbihidWxsZXRQb3NOb2RlLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVPbmVCdWxsZXQgYmFzZSBhdHRhY2sgbnVtXCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXJlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcmFuZG9tVmVjID0gdjMoTWF0aC5yYW5kb20oKSAqIDIsIE1hdGgucmFuZG9tKCkgKiAyLCBNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXJlY3Rpb24uYWRkKHJhbmRvbVZlYyk7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROb2RlLmdldENvbXBvbmVudChCdWxsZXRCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSxcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQXR0YWNrTnVtOiBhdHRhY2tOdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VG93ZXI6IHRoaXNcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0QnVsbGV0UmVjb3ZlclRpbWUoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRQb3NOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290QnVsbGV0SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvb3RCdWxsZXRJbmRleCA9PT0gdGhpcy5idWxsZXRTdGFydFBvc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290QnVsbGV0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUG9zID0gdjMoYnVsbGV0UG9zTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKGJ1bGxldFBvc05vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MyhidWxsZXRQb3NOb2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLjMsIC0wLjMpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdHcuZGVsYXkodGhpcy5nZXRCdWxsZXRSZWNvdmVyVGltZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRQb3NOb2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogb2xkUG9zXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbmVteURlYWRCeVRoaXMoaXNEZWFkOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy/mlYzkurrooqvmraTloZTmiZPmrbtcclxuICAgICAgICBpZiAoaXNEZWFkKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5pWM5Lq66KKr5omT5q275LqGLCDpgqPkuYjmraTloZTlop7liqDog73ph48g5LiA5Liq54K5XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuc2tpbGxDdGwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsQ3RsLnNob3dBZGRQb3dlckFuaW1FZmZlY3QoMiwgdGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbGVhc2VTa2lsbCgpIHtcclxuICAgICAgICAvL+WhlOmHiuaUvuaKgOiDvVxyXG4gICAgICAgIC8vIGxldCB0b3dlclR5cGUgPSB0aGlzLlxyXG4gICAgICAgIC8vIGxldCB0b3dlclNraWxsVHlwZSA9IHRoXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxlYXNlIHNraWxsXCIsIHRoaXMub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgLy8gbGV0IHRvd2VyU2tpbGxUeXBlID0gdGhpcy5nYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2tpbGxUeXBlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG93ZXIgc2tpbGwgdHlwZVwiLCB0b3dlclNraWxsVHlwZSk7XHJcbiAgICAgICAgLy/ph4rmlL7nmoTloZTnmoTmioDog71cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVsZWFzLXNraWxsXCIpOyAvL+mHiuaUvuaKgOiDvXNcclxuICAgIH1cclxuICAgIHNldFRvd2VyQnVpbGRCYXNlKHRvd2VyQnVpbGRCYXNlOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZSA9IHRvd2VyQnVpbGRCYXNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlTGV2ZWwoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tSYW5nZU5vZGVcclxuICAgICAgICBsZXQgYXR0YWNrUmFuZ2UgPSB0aGlzLmdldEN1cnJlbnRBdHRhY2tSYW5nZSgpOyAvL+iOt+WPluWfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNrIHJhbmdlXCIsIGF0dGFja1JhbmdlKTtcclxuICAgICAgICB0aGlzLmF0dGFja1JhbmdlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmF0dGFja1JhbmdlTm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgIHNjYWxlOiB2MyhhdHRhY2tSYW5nZSAqIDIsIGF0dGFja1JhbmdlICogMiwgYXR0YWNrUmFuZ2UgKiAyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGNsb3NlQXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYXR0YWNrUmFuZ2VOb2RlKVxyXG4gICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tSYW5nZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19