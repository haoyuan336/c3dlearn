System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../Enemys/EnemyBase.js", "../BulletBase.js", "../BaseObject.js", "../EnemyController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Vec3, v2, Prefab, instantiate, find, SkeletalAnimationComponent, isValid, CCFloat, State, GameController, EnemyBase, BulletBase, BaseObject, EnemyController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, TowerBase;

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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      v2 = _cc.v2;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      find = _cc.find;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      isValid = _cc.isValid;
      CCFloat = _cc.CCFloat;
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
          _this.shootDuraction = 1;

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bulletStartPos", _descriptor2, _assertThisInitialized(_this));

          _this.currentShootDiraction = v2(0, 0);
          _this.gameConfig = null;

          _initializerDefineProperty(_this, "attackAnimEventTimeOffset", _descriptor3, _assertThisInitialized(_this));

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

            this.shootDuraction = 1 / this.baseAttackRate;
            this.gameController.on("touch-screen-to-3d", function (resultList) {
              console.log("射线检测到了 tower"); // if (collider.node && collider.node.uuid === this.node.uuid) {
              //     this.gameController.emit("touch-tower", this.node);
              // }

              for (var i = 0; i < resultList.length; i++) {
                var result = resultList[i];

                if (result.collider.node.uuid === _this2.node.uuid) {
                  //点中了此塔
                  _this2.gameController.emit("touch-tower", _this2.node);

                  break;
                }
              }
            });
            this.state.addState("releas-skill", function () {
              if (_this2.currentTargetEnemy) {
                _this2.currentTargetEnemy = null;
              }

              _this2.node.emit("release-skill", function () {
                //释放技能
                _this2.state.setState('run');
              });
            });
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

                for (var i = 0; i < enemyNodeList.length; i++) {
                  var enemyNode = enemyNodeList[i];

                  if (isValid(enemyNode) && enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).getIsCanLock() && !enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).getIsDead()) {
                    var length = new Vec3(enemyNode.position).subtract(this.node.position).length();

                    if (length < minLength) {
                      minLength = length;
                      this.currentTargetEnemy = enemyNode;
                    }
                  }
                }

                if (this.currentTargetEnemy) {
                  this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).setBeLocked(this.node);
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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJpc1ZhbGlkIiwiQ0NGbG9hdCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJhc2UiLCJCdWxsZXRCYXNlIiwiQmFzZU9iamVjdCIsIkVuZW15Q29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQmFzZSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInN0YXRlIiwiY3VycmVudFRhcmdldEVuZW15IiwiY3VycmVudFNob290VGltZSIsInNob290RHVyYWN0aW9uIiwiY3VycmVudFNob290RGlyYWN0aW9uIiwiZ2FtZUNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJub2RlIiwiZW1pdCIsInNldFN0YXRlIiwibW92ZURpc3RhbmNlIiwiYnVsbGV0U3RhcnRQb3MiLCJ3b3JsZFBvc2l0aW9uIiwieSIsImFjY1kiLCJiYXNlQXR0YWNrUmF0ZSIsIm9uIiwicmVzdWx0TGlzdCIsImkiLCJsZW5ndGgiLCJyZXN1bHQiLCJjb2xsaWRlciIsInV1aWQiLCJhZGRTdGF0ZSIsImRlbHRhVGltZSIsImdldFN0YXRlIiwiZW5lbXlOb2RlTGlzdCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRFbmVteU5vZGVMaXN0IiwibWluTGVuZ3RoIiwiZW5lbXlOb2RlIiwiZ2V0SXNDYW5Mb2NrIiwiZ2V0SXNEZWFkIiwicG9zaXRpb24iLCJzdWJ0cmFjdCIsInNldEJlTG9ja2VkIiwieCIsInoiLCJhbmdsZSIsInNpZ25BbmdsZSIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwic2hvb3RPbmVCdWxsZXQiLCJnZXRDdXJyZW50QXR0YWNrUmF0ZSIsImdldEN1cnJlbnRBdHRhY2tOdW0iLCJhdHRhY2tSYXRlIiwiYXR0YWNrTnVtIiwic2tlbGV0ZUFuaW0iLCJyb290Tm9kZSIsImRlZmF1bHRBbmltTmFtZSIsImRlZmF1bHRDbGlwIiwibmFtZSIsImFuaW1TdGF0ZSIsInBsYXkiLCJyZXBlYXRDb3VudCIsInNjaGVkdWxlT25jZSIsImNyZWF0ZU9uZUJ1bGxldCIsImF0dGFja0FuaW1FdmVudFRpbWVPZmZzZXQiLCJkaXJlY3Rpb24iLCJidWxsZXROb2RlIiwiYnVsbGV0UHJlZmFiIiwicGFyZW50IiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJpbml0IiwidGFyZ2V0RW5lbXkiLCJiYXNlQXR0YWNrTnVtIiwib2JqZWN0VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBd0NDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxJLE9BQUFBLEk7QUFBZ0JDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlDQyxNQUFBQSxJLE9BQUFBLEk7QUFBeUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsTyxPQUFBQSxPOzs7O0FBQ3ZMQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxlLHNCQUFBQSxlOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQmhCLFUsQ0FBdEJnQixPO0FBQVNDLE1BQUFBLFEsR0FBYWpCLFUsQ0FBYmlCLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxX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Rm9DO0FBR3REbUUsY0FBQUEsYUFBYSxFQUFFcEI7QUFIdUMsYUFBMUQ7QUFNSDs7O3lDQUNjO0FBQ1g7QUFDQTtBQUNBO0FBQ0ExQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUs4RCxVQUFsQyxFQUpXLENBS1g7QUFDQTtBQUNBOztBQUNBLGlCQUFLckUsS0FBTCxDQUFXVSxRQUFYLENBQW9CLGNBQXBCLEVBUlcsQ0FRMEI7QUFDeEM7Ozs7Ozs7Ozs7O2lCQXZKNkIsSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQVdLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLFBoeXNpY3NSYXlSZXN1bHQsIENvbXBvbmVudCwgTm9kZSwgVmVjMiwgVmVjMywgUXVhdCwgdjMsIHYyLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBKc29uQXNzZXQsIENhbWVyYUNvbXBvbmVudCwgZmluZCwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBpc1ZhbGlkLCBDQ0Zsb2F0IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcidcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi8uLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBCdWxsZXRCYXNlIH0gZnJvbSAnLi8uLi9CdWxsZXRCYXNlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJhc2UnKVxyXG5leHBvcnQgY2xhc3MgVG93ZXJCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgY3VycmVudFRhcmdldEVuZW15OiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFNob290VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJ1bGxldFN0YXJ0UG9zOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGJ1bGxldE1vdmVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzIgPSB2MigwLCAwKTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhdHRhY2tSYXRlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0ID0gMDtcclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3dlciBiYXNlIGluaXQnKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXRcIiwgZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIGJhc2Ugc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgbW92ZURpc3RhbmNlID0gdGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uLnkgLSAwLjU7IC8v5a2Q5by555qE5Y+R5bCE6auY5bqmIC0g5pWM5Lq655qEIOmrmOW6plxyXG4gICAgICAgIGxldCBhY2NZID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcblxyXG4gICAgICAgIC8vIGxldCBhdHRhY2tSYXRlID0gdGhpcy5nYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2hvb3RSYXRlO1xyXG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmF0ZSA9IGF0dGFja1JhdGU7XHJcbiAgICAgICAgdGhpcy5zaG9vdER1cmFjdGlvbiA9IDEgLyB0aGlzLmJhc2VBdHRhY2tSYXRlO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsITnur/mo4DmtYvliLDkuoYgdG93ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlICYmIGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5ub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+eCueS4reS6huatpOWhlFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVsZWFzLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWxlYXNlLXNraWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxlbmd0aCA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQoZW5lbXlOb2RlKSAmJiBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNDYW5Mb2NrKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gbmV3IFZlYzMoZW5lbXlOb2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLmxlbmd0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCBtaW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gZW5lbXlOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2V0QmVMb2NrZWQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG55uu5qCH5pWM5Lq6XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbiA9IHYyKHRoaXMuY3VycmVudFRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRoaXMuY3VycmVudFRhcmdldEVuZW15LnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnNpZ25BbmdsZSh2MigwLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5nbGVcIiwgYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvb3RUaW1lID4gdGhpcy5zaG9vdER1cmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCh0aGlzLmdldEN1cnJlbnRBdHRhY2tSYXRlKCksIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlQXR0YWNrUmF0ZVxyXG4gICAgfVxyXG4gICAgc2hvb3RPbmVCdWxsZXQoYXR0YWNrUmF0ZTogbnVtYmVyLCBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzIsIGF0dGFja051bTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRBbmltTmFtZSA9IHNrZWxldGVBbmltLmRlZmF1bHRDbGlwLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZWZhdWx0QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aCAqIDEgLyBhdHRhY2tSYXRlO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGRlZmF1bHRBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVPbmVCdWxsZXQoY3VycmVudFNob290RGlyYWN0aW9uLCB0aGlzLmdldEN1cnJlbnRBdHRhY2tOdW0oYXR0YWNrTnVtKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0sIGxlbmd0aCAqIHRoaXMuYXR0YWNrQW5pbUV2ZW50VGltZU9mZnNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVPbmVCdWxsZXQoZGlyZWN0aW9uOiBWZWMyLCBhdHRhY2tOdW06IG51bWJlcikge1xyXG4gICAgICAgIGxldCBidWxsZXROb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xyXG4gICAgICAgIGJ1bGxldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ1bGxldE5vZGUuc2V0UG9zaXRpb24odGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVPbmVCdWxsZXQgYmFzZSBhdHRhY2sgbnVtXCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSxcclxuICAgICAgICAgICAgYmFzZUF0dGFja051bTogYXR0YWNrTnVtXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZWxlYXNlU2tpbGwoKSB7XHJcbiAgICAgICAgLy/loZTph4rmlL7mioDog71cclxuICAgICAgICAvLyBsZXQgdG93ZXJUeXBlID0gdGhpcy5cclxuICAgICAgICAvLyBsZXQgdG93ZXJTa2lsbFR5cGUgPSB0aFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVsZWFzZSBza2lsbFwiLCB0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIC8vIGxldCB0b3dlclNraWxsVHlwZSA9IHRoaXMuZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNraWxsVHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvd2VyIHNraWxsIHR5cGVcIiwgdG93ZXJTa2lsbFR5cGUpO1xyXG4gICAgICAgIC8v6YeK5pS+55qE5aGU55qE5oqA6IO9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlbGVhcy1za2lsbFwiKTsgLy/ph4rmlL7mioDog71zXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==