System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../Enemys/EnemyBase.js", "../BulletBase.js", "../BaseObject.js", "../EnemyController.js", "../TowerBuildBase/TowerBuildBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Vec3, v3, v2, Prefab, instantiate, find, SkeletalAnimationComponent, isValid, CCFloat, Tween, State, GameController, EnemyBase, BulletBase, BaseObject, EnemyController, TowerBuildBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TowerBase;

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

          return _this;
        }

        _createClass(TowerBase, [{
          key: "init",
          value: function init(gameConfig) {
            _get(_getPrototypeOf(TowerBase.prototype), "init", this).call(this, gameConfig);

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
                _this2.node.destroy();

                if (_this2.towerBuildBase) {
                  _this2.towerBuildBase.getComponent(_crd && TowerBuildBase === void 0 ? (_reportPossibleCrUseOfTowerBuildBase({
                    error: Error()
                  }), TowerBuildBase) : TowerBuildBase).unSetTargetTower(_this2.node);
                }
              }, stateAnim.length);
            });
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

              if (this.currentTargetEnemy) {
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
              var length = animState.length * 1 / attackRate;
              console.log("length", length);
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
              baseAttackNum: attackNum
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYzIiwidjIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiRW5lbXlCYXNlIiwiQnVsbGV0QmFzZSIsIkJhc2VPYmplY3QiLCJFbmVteUNvbnRyb2xsZXIiLCJUb3dlckJ1aWxkQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQmFzZSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInN0YXRlIiwiY3VycmVudFRhcmdldEVuZW15IiwiY3VycmVudFNob290VGltZSIsImN1cnJlbnRTaG9vdERpcmFjdGlvbiIsImdhbWVDb25maWciLCJ0b3dlckJ1aWxkQmFzZSIsImNvbnNvbGUiLCJsb2ciLCJub2RlIiwiZW1pdCIsInNldFN0YXRlIiwibW92ZURpc3RhbmNlIiwiYnVsbGV0U3RhcnRQb3MiLCJ3b3JsZFBvc2l0aW9uIiwieSIsImFjY1kiLCJvbiIsInRvdWNoU2NyZWVuVG8zZCIsImJpbmQiLCJhZGRTdGF0ZSIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRDb21wb25lbnQiLCJjbGlwcyIsImxlbmd0aCIsImRlc3Ryb3kiLCJ1blNldFRhcmdldFRvd2VyIiwiZGVzdHJveUNsaXAiLCJzdGF0ZUFuaW0iLCJnZXRTdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJyZXN1bHRMaXN0IiwiaSIsInJlc3VsdCIsImNvbGxpZGVyIiwidXVpZCIsIm9mZiIsImRlbHRhVGltZSIsImVuZW15Tm9kZUxpc3QiLCJnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCIsIm1pbkxlbmd0aCIsInRhcmdldEVuZW15Tm9kZSIsInVuZGVmaW5lZCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsInBvc2l0aW9uIiwic3VidHJhY3QiLCJkaXMiLCJ4IiwieiIsImdldEN1cnJlbnRBdHRhY2tSYW5nZSIsImFuZ2xlIiwic2lnbkFuZ2xlIiwiZXVsZXJBbmdsZXMiLCJNYXRoIiwiUEkiLCJzaG9vdER1cmFjdGlvbiIsInNob290T25lQnVsbGV0IiwiZ2V0Q3VycmVudEF0dGFja1JhdGUiLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwiYmFzZUF0dGFja1JhdGUiLCJhdHRhY2tSYXRlIiwiYXR0YWNrTnVtIiwiZGVmYXVsdEFuaW1OYW1lIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJjcmVhdGVPbmVCdWxsZXQiLCJhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0IiwiZGlyZWN0aW9uIiwiYnVsbGV0Tm9kZSIsImJ1bGxldFByZWZhYiIsInBhcmVudCIsImFjdGl2ZSIsInNldFBvc2l0aW9uIiwiaW5pdCIsInRhcmdldEVuZW15IiwiYmFzZUF0dGFja051bSIsIm9iamVjdFR5cGUiLCJhdHRhY2tSYW5nZSIsImF0dGFja1JhbmdlTm9kZSIsInR3IiwidG8iLCJzY2FsZSIsInN0YXJ0IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBeUNDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlDQyxNQUFBQSxJLE9BQUFBLEk7QUFBeUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFB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QUFJUSxFQUFFLEdBQUcsSUFBSWpHLEtBQUosQ0FBVSxLQUFLZ0csZUFBZixDQUFUO0FBQ0FDLFlBQUFBLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQQyxjQUFBQSxLQUFLLEVBQUUzRyxFQUFFLENBQUN1RyxXQUFXLEdBQUcsQ0FBZixFQUFrQkEsV0FBVyxHQUFHLENBQWhDLEVBQW1DQSxXQUFXLEdBQUcsQ0FBakQ7QUFERixhQUFYO0FBR0FFLFlBQUFBLEVBQUUsQ0FBQ0csS0FBSDtBQUNIOzs7NkNBQ2tCO0FBQUE7O0FBQ2YsZ0JBQUlILEVBQUUsR0FBRyxJQUFJakcsS0FBSixDQUFVLEtBQUtnRyxlQUFmLENBQVQ7QUFDQUMsWUFBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQUVDLGNBQUFBLEtBQUssRUFBRTNHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBWCxhQUFYO0FBQ0F5RyxZQUFBQSxFQUFFLENBQUNJLElBQUgsQ0FBUSxZQUFNO0FBQ1YsY0FBQSxNQUFJLENBQUNMLGVBQUwsQ0FBcUJQLE1BQXJCLEdBQThCLEtBQTlCO0FBQ0gsYUFGRDtBQUdBUSxZQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSDs7Ozs7Ozs7Ozs7aUJBOU82QixJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBV0ssQzs7Ozs7OztpQkFLSixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgUGh5c2ljc1JheVJlc3VsdCwgQ29tcG9uZW50LCBOb2RlLCBWZWMyLCBWZWMzLCBRdWF0LCB2MywgdjIsIFByZWZhYiwgaW5zdGFudGlhdGUsIEpzb25Bc3NldCwgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBDb2xsaWRlckNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGlzVmFsaWQsIENDRmxvYXQsIFR3ZWVuIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcidcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi8uLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBCdWxsZXRCYXNlIH0gZnJvbSAnLi8uLi9CdWxsZXRCYXNlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCYXNlJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUYXJnZXRFbmVteTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIHNob290RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWxsZXRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0U3RhcnRQb3M6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgYnVsbGV0TW92ZVRpbWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdERpcmFjdGlvbjogVmVjMiA9IHYyKDAsIDApO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHJvb3ROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGF0dGFja1JhdGU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IE9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NGbG9hdCB9KVxyXG4gICAgcHVibGljIGF0dGFja0FuaW1FdmVudFRpbWVPZmZzZXQgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgdG93ZXJCdWlsZEJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tSYW5nZU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3dlciBiYXNlIGluaXQnKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXRcIiwgZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIGJhc2Ugc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgbW92ZURpc3RhbmNlID0gdGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uLnkgLSAwLjU7IC8v5a2Q5by555qE5Y+R5bCE6auY5bqmIC0g5pWM5Lq655qEIOmrmOW6plxyXG4gICAgICAgIGxldCBhY2NZID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcblxyXG4gICAgICAgIC8vIGxldCBhdHRhY2tSYXRlID0gdGhpcy5nYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2hvb3RSYXRlO1xyXG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmF0ZSA9IGF0dGFja1JhdGU7XHJcbiAgICAgICAgLy8gdGhpcy5zaG9vdER1cmFjdGlvbiA9IDEgLyB0aGlzLmJhc2VBdHRhY2tSYXRlO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIHRoaXMudG91Y2hTY3JlZW5UbzNkLmJpbmQodGhpcyksIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVsZWFzLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWxlYXNlLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJkZXN0cm95XCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/plIDmr4HnirbmgIFcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG93ZXJCdWlsZEJhc2UuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS51blNldFRhcmdldFRvd2VyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0ZUFuaW0uY2xpcHMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VyQnVpbGRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnVuU2V0VGFyZ2V0VG93ZXIodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGVzdHJveUNsaXAgPSBza2VsZXRlQW5pbS5jbGlwc1syXTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlc3Ryb3lDbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGRlc3Ryb3lDbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJCdWlsZEJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkudW5TZXRUYXJnZXRUb3dlcih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBzdGF0ZUFuaW0ubGVuZ3RoKVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHRvdWNoU2NyZWVuVG8zZChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWwhOe6v+ajgOa1i+WIsOS6hiB0b3dlclwiKTtcclxuICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZSAmJiBjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5ub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIC8v54K55Lit5LqG5q2k5aGUXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgVwiKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9mZigndG91Y2gtc2NyZWVuLXRvLTNkJywgdGhpcy50b3VjaFNjcmVlblRvM2QsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9EZXN0cm95KCkge1xyXG4gICAgICAgIC8v5Y676ZSA5q+BXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnZGVzdHJveScpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxlbmd0aCA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVuZW15Tm9kZTogTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKGVuZW15Tm9kZSkgJiYgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzQ2FuTG9jaygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IG5ldyBWZWMzKGVuZW15Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5sZW5ndGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IGVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVuZW15Tm9kZSA9IGVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2V0QmVMb2NrZWQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbmVteU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjIodGFyZ2V0RW5lbXlOb2RlLnBvc2l0aW9uLngsIHRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc1wiLCBkaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXMgPCB0aGlzLmdldEN1cnJlbnRBdHRhY2tSYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gdGFyZ2V0RW5lbXlOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG55uu5qCH5pWM5Lq6XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbiA9IHYyKHRoaXMuY3VycmVudFRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRoaXMuY3VycmVudFRhcmdldEVuZW15LnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnNpZ25BbmdsZSh2MigwLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5nbGVcIiwgYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvb3RUaW1lID4gdGhpcy5zaG9vdER1cmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzID4gdGhpcy5nZXRDdXJyZW50QXR0YWNrUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3RUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290T25lQnVsbGV0KHRoaXMuZ2V0Q3VycmVudEF0dGFja1JhdGUoKSwgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24sIHRoaXMuZ2V0Q3VycmVudEF0dGFja051bSgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3RUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRBdHRhY2tSYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlXHJcbiAgICB9XHJcbiAgICBzaG9vdE9uZUJ1bGxldChhdHRhY2tSYXRlOiBudW1iZXIsIGN1cnJlbnRTaG9vdERpcmFjdGlvbjogVmVjMiwgYXR0YWNrTnVtOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICBsZXQgZGVmYXVsdEFuaW1OYW1lID0gc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXAubmFtZTtcclxuICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoICogMSAvIGF0dGFja1JhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoXCIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoZGVmYXVsdEFuaW1OYW1lKTtcclxuICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU9uZUJ1bGxldChjdXJyZW50U2hvb3REaXJhY3Rpb24sIHRoaXMuZ2V0Q3VycmVudEF0dGFja051bShhdHRhY2tOdW0pKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSwgbGVuZ3RoICogdGhpcy5hdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZU9uZUJ1bGxldChkaXJlY3Rpb246IFZlYzIsIGF0dGFja051bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGJ1bGxldE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGJ1bGxldE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5zZXRQb3NpdGlvbih0aGlzLmJ1bGxldFN0YXJ0UG9zLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIGJ1bGxldE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZU9uZUJ1bGxldCBiYXNlIGF0dGFjayBudW1cIiwgYXR0YWNrTnVtKTtcclxuICAgICAgICBidWxsZXROb2RlLmdldENvbXBvbmVudChCdWxsZXRCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICAgICAgdGFyZ2V0RW5lbXk6IHRoaXMuY3VycmVudFRhcmdldEVuZW15LFxyXG4gICAgICAgICAgICBiYXNlQXR0YWNrTnVtOiBhdHRhY2tOdW1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbGVhc2VTa2lsbCgpIHtcclxuICAgICAgICAvL+WhlOmHiuaUvuaKgOiDvVxyXG4gICAgICAgIC8vIGxldCB0b3dlclR5cGUgPSB0aGlzLlxyXG4gICAgICAgIC8vIGxldCB0b3dlclNraWxsVHlwZSA9IHRoXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxlYXNlIHNraWxsXCIsIHRoaXMub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgLy8gbGV0IHRvd2VyU2tpbGxUeXBlID0gdGhpcy5nYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2tpbGxUeXBlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG93ZXIgc2tpbGwgdHlwZVwiLCB0b3dlclNraWxsVHlwZSk7XHJcbiAgICAgICAgLy/ph4rmlL7nmoTloZTnmoTmioDog71cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVsZWFzLXNraWxsXCIpOyAvL+mHiuaUvuaKgOiDvXNcclxuICAgIH1cclxuICAgIHNldFRvd2VyQnVpbGRCYXNlKHRvd2VyQnVpbGRCYXNlOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1aWxkQmFzZSA9IHRvd2VyQnVpbGRCYXNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlTGV2ZWwoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93QXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tSYW5nZU5vZGVcclxuICAgICAgICBsZXQgYXR0YWNrUmFuZ2UgPSB0aGlzLmdldEN1cnJlbnRBdHRhY2tSYW5nZSgpOyAvL+iOt+WPluWfuuehgOaUu+WHu+iMg+WbtFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNrIHJhbmdlXCIsIGF0dGFja1JhbmdlKTtcclxuICAgICAgICB0aGlzLmF0dGFja1JhbmdlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmF0dGFja1JhbmdlTm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgIHNjYWxlOiB2MyhhdHRhY2tSYW5nZSAqIDIsIGF0dGFja1JhbmdlICogMiwgYXR0YWNrUmFuZ2UgKiAyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGNsb3NlQXR0YWNrUmFuZ2UoKSB7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYXR0YWNrUmFuZ2VOb2RlKVxyXG4gICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tSYW5nZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==