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
                this.rootNode.lookAt(this.currentTargetEnemy.position);

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

            var length = 0;

            for (var i = 0; i < baseNodeList.length; i++) {
              var skeleteAnim = baseNodeList[i].getComponent(SkeletalAnimationComponent);

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
            for (var i = 0; i < this.bulletStartPosList.length; i++) {
              var bulletPosNode = this.bulletStartPosList[i];
              var bulletNode = instantiate(this.bulletPrefab);
              bulletNode.parent = this.node.parent;
              bulletNode.active = false;
              bulletNode.setPosition(bulletPosNode.worldPosition);
              bulletNode.active = true;
              console.log("createOneBullet base attack num", attackNum); // direction.

              var randomVec = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
              direction.add(randomVec);
              bulletNode.getComponent(_crd && BulletBase === void 0 ? (_reportPossibleCrUseOfBulletBase({
                error: Error()
              }), BulletBase) : BulletBase).init(this.gameConfig, this.gameController, {
                direction: direction,
                targetEnemy: this.currentTargetEnemy,
                baseAttackNum: attackNum,
                targetTower: this
              });
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsIlF1YXQiLCJ2MyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJpc1ZhbGlkIiwiQ0NGbG9hdCIsIlR3ZWVuIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15QmFzZSIsIkJ1bGxldEJhc2UiLCJCYXNlT2JqZWN0IiwiRW5lbXlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2UiLCJTa2lsbEN0bCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQmFzZSIsInR5cGUiLCJzdGF0ZSIsImN1cnJlbnRUYXJnZXRFbmVteSIsImN1cnJlbnRTaG9vdFRpbWUiLCJjdXJyZW50U2hvb3REaXJhY3Rpb24iLCJnYW1lQ29uZmlnIiwidG93ZXJCdWlsZEJhc2UiLCJza2lsbEN0bCIsImdhbWVDb250cm9sbGVyIiwiZ2V0Q29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJlbWl0Iiwic2V0U3RhdGUiLCJvbiIsInRvdWNoU2NyZWVuVG8zZCIsImJpbmQiLCJkZXN0cm95QWxsVG93ZXIiLCJhZGRTdGF0ZSIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJkZXN0cm95QW5pbU5hbWUiLCJzdGF0ZUFuaW0iLCJnZXRTdGF0ZSIsInJlcGVhdENvdW50IiwicGxheSIsInNjaGVkdWxlT25jZSIsInVuU2V0VGFyZ2V0VG93ZXIiLCJyYW5kb21Qb3MiLCJNYXRoIiwicmFuZG9tIiwic2hvd0FkZEdvbGRBbmltRWZmZWN0IiwiZ2V0RGVzdHJveUNvdW50IiwicG9zaXRpb24iLCJ4IiwieiIsImFkZCIsImRlc3Ryb3kiLCJsZW5ndGgiLCJyZXN1bHRMaXN0IiwiaSIsInJlc3VsdCIsImNvbGxpZGVyIiwidXVpZCIsIm9mZiIsImRlbHRhVGltZSIsImVuZW15Tm9kZUxpc3QiLCJnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCIsIm1pbkxlbmd0aCIsInRhcmdldEVuZW15Tm9kZSIsInVuZGVmaW5lZCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsImdldENhbkF0dGFja0VuZW15Iiwic3VidHJhY3QiLCJkaXMiLCJnZXRDdXJyZW50QXR0YWNrUmFuZ2UiLCJsb29rQXQiLCJxdWF0IiwidiIsIm5vcm1hbGl6ZSIsImZyb21WaWV3VXAiLCJVUCIsImxlcnBRIiwibGVycCIsInJvdGF0aW9uIiwic2hvb3REdXJhY3Rpb24iLCJzaG9vdE9uZUJ1bGxldCIsImdldEN1cnJlbnRBdHRhY2tSYXRlIiwiZ2V0Q3VycmVudEF0dGFja051bSIsImJhc2VBdHRhY2tSYXRlIiwiYXR0YWNrUmF0ZSIsImF0dGFja051bSIsImJhc2VOb2RlTGlzdCIsIndlYXBvbkJhc2VOb2RlIiwicHVzaCIsImFuaW1OYW1lIiwiYW5pbVN0YXRlIiwibGVuZ3RoVGltZSIsImNyZWF0ZU9uZVRpbWVCdWxsZXQiLCJhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0IiwiZGlyZWN0aW9uIiwiYnVsbGV0U3RhcnRQb3NMaXN0IiwiYnVsbGV0UG9zTm9kZSIsImJ1bGxldE5vZGUiLCJidWxsZXRQcmVmYWIiLCJwYXJlbnQiLCJhY3RpdmUiLCJzZXRQb3NpdGlvbiIsIndvcmxkUG9zaXRpb24iLCJyYW5kb21WZWMiLCJpbml0IiwidGFyZ2V0RW5lbXkiLCJiYXNlQXR0YWNrTnVtIiwidGFyZ2V0VG93ZXIiLCJpc0RlYWQiLCJzaG93QWRkUG93ZXJBbmltRWZmZWN0Iiwib2JqZWN0VHlwZSIsImF0dGFja1JhbmdlIiwiYXR0YWNrUmFuZ2VOb2RlIiwidHciLCJ0byIsInNjYWxlIiwic3RhcnQiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQTlCO0FBQ0gsYUFGRDtBQUdBYSxZQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSDs7Ozs7Ozs7Ozs7aUJBaFU2QixJOzs7Ozs7O2lCQUVNLEU7Ozs7Ozs7aUJBR04sSTs7Ozs7OztpQkFlSyxDOzs7Ozs7O2lCQUtKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBQaHlzaWNzUmF5UmVzdWx0LCBDb21wb25lbnQsIE5vZGUsIFZlYzIsIFZlYzMsIFF1YXQsIHYzLCB2MiwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgSnNvbkFzc2V0LCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgaXNWYWxpZCwgQ0NGbG9hdCwgVHdlZW4sIE5vZGVQb29sIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcidcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi8uLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBCdWxsZXRCYXNlIH0gZnJvbSAnLi8uLi9CdWxsZXRCYXNlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IFNraWxsQ3RsIH0gZnJvbSAnLi4vVUkvU2tpbGxDdGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1Rvd2VyQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIC8vIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgY3VycmVudFRhcmdldEVuZW15OiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFNob290VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1bGxldFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBidWxsZXRTdGFydFBvc0xpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25CYXNlTm9kZTogTm9kZSA9IG51bGw7IC8v5q2m5Zmo5bqV5bqn6IqC54K5XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgYnVsbGV0U3RhcnRQb3M6IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcclxuICAgIC8vIHB1YmxpYyBhcm1Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGJ1bGxldE1vdmVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhdHRhY2tSYXRlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRvd2VyQnVpbGRCYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYXR0YWNrUmFuZ2VOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbEN0bDogU2tpbGxDdGwgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgaXNDYW5BdHRhY2s6IFxyXG5cclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLnNraWxsQ3RsID0gZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoU2tpbGxDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rvd2VyIGJhc2UgaW5pdCcpO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiaW5pdFwiLCBnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwid2VhcG9uLWV1bGVyLWFuZ2xlcy1pbml0XCIsICgpPT57XHJcbiAgICAgICAgLy8gICAgIC8v5q2m5Zmo6KeS5bqm5b2S5Li6XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG93ZXIgYmFzZSBzdGFydFwiKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIC8vIGxldCBtb3ZlRGlzdGFuY2UgPSB0aGlzLmJ1bGxldFN0YXJ0UG9zLndvcmxkUG9zaXRpb24ueSAtIDAuNTsgLy/lrZDlvLnnmoTlj5HlsITpq5jluqYgLSDmlYzkurrnmoQg6auY5bqmXHJcbiAgICAgICAgLy8gbGV0IGFjY1kgPSBHYW1lQ29udHJvbGxlci5hY2NZO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG5cclxuICAgICAgICAvLyBsZXQgYXR0YWNrUmF0ZSA9IHRoaXMuZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZTtcclxuICAgICAgICAvLyB0aGlzLmF0dGFja1JhdGUgPSBhdHRhY2tSYXRlO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIHRoaXMudG91Y2hTY3JlZW5UbzNkLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcImRlc3Ryb3ktYWxsLXRvd2VyXCIsIHRoaXMuZGVzdHJveUFsbFRvd2VyLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJyZWxlYXMtc2tpbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlbGVhc2Utc2tpbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/ph4rmlL7mioDog71cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3J1bicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImRlc3Ryb3lcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+mUgOavgeeKtuaAgVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy50b3dlckJ1aWxkQmFzZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChza2VsZXRlQW5pbS5jbGlwcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkudW5TZXRUYXJnZXRUb3dlcih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGxldCBkZXN0cm95QW5pbU5hbWUgPSBcIumqqOaetnx0b2Rlc3Ryb3lcIlxyXG4gICAgICAgICAgICAvLyBsZXQgZGVzdHJveUNsaXAgPSBza2VsZXRlQW5pbS5jbGlwc1syXTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlc3Ryb3lBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlQW5pbS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGRlc3Ryb3lBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbVBvcyA9IHYzKE1hdGgucmFuZG9tKCkgKiAyLCAwLCBNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLnNob3dBZGRHb2xkQW5pbUVmZmVjdCh0aGlzLmdldERlc3Ryb3lDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopLmFkZChyYW5kb21Qb3MpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCBzdGF0ZUFuaW0ubGVuZ3RoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBkZXN0cm95QWxsVG93ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHRvdWNoU2NyZWVuVG8zZChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWwhOe6v+ajgOa1i+WIsOS6hiB0b3dlclwiKTtcclxuICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZSAmJiBjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5ub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIC8v54K55Lit5LqG5q2k5aGUXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZSA5q+BXCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vZmYoJ3RvdWNoLXNjcmVlbi10by0zZCcsIHRoaXMudG91Y2hTY3JlZW5UbzNkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJkZXN0cm95LWFsbC10b3dlclwiLCB0aGlzLmRlc3Ryb3lBbGxUb3dlciwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICB0b0Rlc3Ryb3koKSB7XHJcbiAgICAgICAgLy/ljrvplIDmr4FcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdkZXN0cm95Jyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIC8v5b2T5YmN55qE54q25oCB5piv6L+Q6KGM54q25oCBXHJcbiAgICAgICAgICAgIC8v5a+75om+5ZCI6YCC55qEIOaVjOS6ulxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlKG5ldyBRdWF0KDAsMC4wMDEsMCwwKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsOTAsMCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZUxpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluTGVuZ3RoID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RW5lbXlOb2RlOiBOb2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQoZW5lbXlOb2RlKSAmJiBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNDYW5Mb2NrKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhbkF0dGFja0VuZW15KGVuZW15Tm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IG5ldyBWZWMzKGVuZW15Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5sZW5ndGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IGVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVuZW15Tm9kZSA9IGVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2V0QmVMb2NrZWQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbmVteU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjIodGFyZ2V0RW5lbXlOb2RlLnBvc2l0aW9uLngsIHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc1wiLCBkaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm9vdE5vZGUubG9va0F0KHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXMgPCB0aGlzLmdldEN1cnJlbnRBdHRhY2tSYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm9vdE5vZGUubG9va0F0KHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gdGFyZ2V0RW5lbXlOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG55uu5qCH5pWM5Lq6XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5sb29rQXQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uID0gdjModGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJ0cmFjdCh2Myh0aGlzLm5vZGUucG9zaXRpb24pKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBhbmdsZSA9IHYyKHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLngsIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnopLnNpZ25BbmdsZSh2MigwLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5nbGVcIiwgYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB2Myh0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbi54LCAwLCB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbi56KS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgdiwgVmVjMy5VUCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBRID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBRdWF0LmxlcnAobGVycFEsIHRoaXMubm9kZS5yb3RhdGlvbiwgcXVhdCwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSBxdWF0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNob290VGltZSA+IHRoaXMuc2hvb3REdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjIodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueCwgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueikuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcyA+IHRoaXMuZ2V0Q3VycmVudEF0dGFja1JhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCh0aGlzLmdldEN1cnJlbnRBdHRhY2tSYXRlKCksIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZVxyXG4gICAgfVxyXG4gICAgc2hvb3RPbmVCdWxsZXQoYXR0YWNrUmF0ZTogbnVtYmVyLCBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzMsIGF0dGFja051bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy53ZWFwb25CYXNlTm9kZSl7XHJcbiAgICAgICAgLy8gICAgIGxldCB3ZWFwb25Ta2VsZXRlQW5pbSA9IHRoaXMud2VhcG9uQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgaWYgKHdlYXBvblNrZWxldGVBbmltKXtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShhbmltTmFtZSknOydcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgbGV0IGJhc2VOb2RlTGlzdDogTm9kZVtdID0gW3RoaXMucm9vdE5vZGVdO1xyXG4gICAgICAgIGlmICh0aGlzLndlYXBvbkJhc2VOb2RlKSB7XHJcbiAgICAgICAgICAgIGJhc2VOb2RlTGlzdC5wdXNoKHRoaXMud2VhcG9uQmFzZU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IGJhc2VOb2RlTGlzdFtpXS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBkZWZhdWx0QW5pbU5hbWUgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGhUaW1lID0gYW5pbVN0YXRlLmxlbmd0aCAqIDEgLyBhdHRhY2tSYXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGhcIiwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGxlbmd0aFRpbWU7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHN0YXRlQW5pbS5zZXRUaW1lKDAuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPbmVUaW1lQnVsbGV0KGN1cnJlbnRTaG9vdERpcmFjdGlvbiwgdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKCkpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSwgbGVuZ3RoICogdGhpcy5hdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlT25lVGltZUJ1bGxldChkaXJlY3Rpb246IFZlYzMsIGF0dGFja051bTogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldFN0YXJ0UG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0UG9zTm9kZSA9IHRoaXMuYnVsbGV0U3RhcnRQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgYnVsbGV0Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidWxsZXROb2RlLnNldFBvc2l0aW9uKGJ1bGxldFBvc05vZGUud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGJ1bGxldE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVPbmVCdWxsZXQgYmFzZSBhdHRhY2sgbnVtXCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIC8vIGRpcmVjdGlvbi5cclxuICAgICAgICAgICAgbGV0IHJhbmRvbVZlYyA9IHYzKE1hdGgucmFuZG9tKCkgKiAyLCBNYXRoLnJhbmRvbSgpICogMiwgTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24uYWRkKHJhbmRvbVZlYyk7XHJcbiAgICAgICAgICAgIGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSxcclxuICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IGF0dGFja051bSxcclxuICAgICAgICAgICAgICAgIHRhcmdldFRvd2VyOiB0aGlzXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuZW15RGVhZEJ5VGhpcyhpc0RlYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICAvL+aVjOS6uuiiq+atpOWhlOaJk+atu1xyXG4gICAgICAgIGlmIChpc0RlYWQpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmlYzkurrooqvmiZPmrbvkuoYsIOmCo+S5iOatpOWhlOWinuWKoOiDvemHjyDkuIDkuKrngrlcclxuICAgICAgICAgICAgdGhpcy5za2lsbEN0bC5zaG93QWRkUG93ZXJBbmltRWZmZWN0KDIsIHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZVNraWxsKCkge1xyXG4gICAgICAgIC8v5aGU6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgLy8gbGV0IHRvd2VyVHlwZSA9IHRoaXMuXHJcbiAgICAgICAgLy8gbGV0IHRvd2VyU2tpbGxUeXBlID0gdGhcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2Ugc2tpbGxcIiwgdGhpcy5vYmplY3RUeXBlKTtcclxuICAgICAgICAvLyBsZXQgdG93ZXJTa2lsbFR5cGUgPSB0aGlzLmdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Ta2lsbFR5cGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3dlciBza2lsbCB0eXBlXCIsIHRvd2VyU2tpbGxUeXBlKTtcclxuICAgICAgICAvL+mHiuaUvueahOWhlOeahOaKgOiDvVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWxlYXMtc2tpbGxcIik7IC8v6YeK5pS+5oqA6IO9c1xyXG4gICAgfVxyXG4gICAgc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCdWlsZEJhc2U6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlID0gdG93ZXJCdWlsZEJhc2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVMZXZlbCgpO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dBdHRhY2tSYW5nZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmF0dGFja1JhbmdlTm9kZVxyXG4gICAgICAgIGxldCBhdHRhY2tSYW5nZSA9IHRoaXMuZ2V0Q3VycmVudEF0dGFja1JhbmdlKCk7IC8v6I635Y+W5Z+656GA5pS75Ye76IyD5Zu0XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2sgcmFuZ2VcIiwgYXR0YWNrUmFuZ2UpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrUmFuZ2VOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYXR0YWNrUmFuZ2VOb2RlKTtcclxuICAgICAgICB0dy50bygwLjEsIHtcclxuICAgICAgICAgICAgc2NhbGU6IHYzKGF0dGFja1JhbmdlICogMiwgYXR0YWNrUmFuZ2UgKiAyLCBhdHRhY2tSYW5nZSAqIDIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VBdHRhY2tSYW5nZSgpIHtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5hdHRhY2tSYW5nZU5vZGUpXHJcbiAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1JhbmdlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=