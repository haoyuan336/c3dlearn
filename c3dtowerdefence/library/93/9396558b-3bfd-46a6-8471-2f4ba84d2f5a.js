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
            this.gameController.on("touch-screen-to-3d", function (collider) {
              console.log("射线检测到了 tower"); // if (collider.node && collider.node.uuid === this.node.uuid) {
              //     this.gameController.emit("touch-tower", this.node);
              // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJpc1ZhbGlkIiwiQ0NGbG9hdCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJhc2UiLCJCdWxsZXRCYXNlIiwiQmFzZU9iamVjdCIsIkVuZW15Q29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQmFzZSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsInN0YXRlIiwiY3VycmVudFRhcmdldEVuZW15IiwiY3VycmVudFNob290VGltZSIsInNob290RHVyYWN0aW9uIiwiY3VycmVudFNob290RGlyYWN0aW9uIiwiZ2FtZUNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJub2RlIiwiZW1pdCIsInNldFN0YXRlIiwibW92ZURpc3RhbmNlIiwiYnVsbGV0U3RhcnRQb3MiLCJ3b3JsZFBvc2l0aW9uIiwieSIsImFjY1kiLCJiYXNlQXR0YWNrUmF0ZSIsIm9uIiwiY29sbGlkZXIiLCJhZGRTdGF0ZSIsImRlbHRhVGltZSIsImdldFN0YXRlIiwiZW5lbXlOb2RlTGlzdCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRFbmVteU5vZGVMaXN0IiwibWluTGVuZ3RoIiwiaSIsImxlbmd0aCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsInBvc2l0aW9uIiwic3VidHJhY3QiLCJzZXRCZUxvY2tlZCIsIngiLCJ6IiwiYW5nbGUiLCJzaWduQW5nbGUiLCJldWxlckFuZ2xlcyIsIk1hdGgiLCJQSSIsInNob290T25lQnVsbGV0IiwiZ2V0Q3VycmVudEF0dGFja1JhdGUiLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwiYXR0YWNrUmF0ZSIsImF0dGFja051bSIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJkZWZhdWx0QW5pbU5hbWUiLCJkZWZhdWx0Q2xpcCIsIm5hbWUiLCJhbmltU3RhdGUiLCJwbGF5IiwicmVwZWF0Q291bnQiLCJzY2hlZHVsZU9uY2UiLCJjcmVhdGVPbmVCdWxsZXQiLCJhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0IiwiZGlyZWN0aW9uIiwiYnVsbGV0Tm9kZSIsImJ1bGxldFByZWZhYiIsInBhcmVudCIsImFjdGl2ZSIsInNldFBvc2l0aW9uIiwiaW5pdCIsInRhcmdldEVuZW15IiwiYmFzZUF0dGFja051bSIsIm9iamVjdFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsSSxPQUFBQSxJO0FBQWdCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUF5Q0MsTUFBQUEsSSxPQUFBQSxJO0FBQXlCQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE0QkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLE8sT0FBQUEsTzs7OztBQUN0S0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsZSxzQkFBQUEsZTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JoQixVLENBQXRCZ0IsTztBQUFTQyxNQUFBQSxRLEdBQWFqQixVLENBQWJpQixROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDLFVBUUhDLFFBQVEsQ0FBQztBQUFFRSxR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QTRDLE1BQUksQ0FBQ3VDLG1CQUFMLENBQXlCRSxTQUF6QixDQUE1QyxFQUZvQixDQUdwQjs7QUFDSCxlQUpELEVBSUdsQixNQUFNLEdBQUcsS0FBSzZCLHlCQUpqQjtBQUtIO0FBQ0o7OzswQ0FDZUMsUyxFQUFpQlosUyxFQUFtQjtBQUNoRCxnQkFBSWEsVUFBVSxHQUFHMUUsV0FBVyxDQUFDLEtBQUsyRSxZQUFOLENBQTVCO0FBQ0FELFlBQUFBLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQixLQUFLcEQsSUFBTCxDQUFVb0QsTUFBOUI7QUFDQUYsWUFBQUEsVUFBVSxDQUFDRyxNQUFYLEdBQW9CLEtBQXBCO0FBQ0FILFlBQUFBLFVBQVUsQ0FBQ0ksV0FBWCxDQUF1QixLQUFLbEQsY0FBTCxDQUFvQkMsYUFBM0M7QUFDQTZDLFlBQUFBLFVBQVUsQ0FBQ0csTUFBWCxHQUFvQixJQUFwQixDQUxnRCxDQU1oRDs7QUFDQUgsWUFBQUEsVUFBVSxDQUFDbkMsWUFBWDtBQUFBO0FBQUEsMENBQW9Dd0MsSUFBcEMsQ0FBeUMsS0FBSzFELFVBQTlDLEVBQTBEO0FBQ3REb0QsY0FBQUEsU0FBUyxFQUFFQSxTQUQyQztBQUV0RE8sY0FBQUEsV0FBVyxFQUFFLEtBQUsvRCxrQkFGb0M7QUFHdERnRSxjQUFBQSxhQUFhLEVBQUVwQjtBQUh1QyxhQUExRDtBQU1IOzs7eUNBQ2M7QUFDWDtBQUNBO0FBQ0E7QUFDQXZDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBSzJELFVBQWxDLEVBSlcsQ0FLWDtBQUNBO0FBQ0E7O0FBQ0EsaUJBQUtsRSxLQUFMLENBQVdVLFFBQVgsQ0FBb0IsY0FBcEIsRUFSVyxDQVEwQjtBQUN4Qzs7Ozs7Ozs7Ozs7aUJBN0k2QixJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBV0ssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMiwgVmVjMywgUXVhdCwgdjMsIHYyLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBKc29uQXNzZXQsIENhbWVyYUNvbXBvbmVudCwgZmluZCwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBpc1ZhbGlkLCBDQ0Zsb2F0IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcidcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi8uLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBCdWxsZXRCYXNlIH0gZnJvbSAnLi8uLi9CdWxsZXRCYXNlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJhc2UnKVxyXG5leHBvcnQgY2xhc3MgVG93ZXJCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgY3VycmVudFRhcmdldEVuZW15OiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFNob290VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2hvb3REdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJ1bGxldFN0YXJ0UG9zOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGJ1bGxldE1vdmVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3REaXJhY3Rpb246IFZlYzIgPSB2MigwLCAwKTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhdHRhY2tSYXRlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhdHRhY2tBbmltRXZlbnRUaW1lT2Zmc2V0ID0gMDtcclxuICAgIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0KSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3dlciBiYXNlIGluaXQnKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXRcIiwgZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvd2VyIGJhc2Ugc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgbW92ZURpc3RhbmNlID0gdGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uLnkgLSAwLjU7IC8v5a2Q5by555qE5Y+R5bCE6auY5bqmIC0g5pWM5Lq655qEIOmrmOW6plxyXG4gICAgICAgIGxldCBhY2NZID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcblxyXG4gICAgICAgIC8vIGxldCBhdHRhY2tSYXRlID0gdGhpcy5nYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uU2hvb3RSYXRlO1xyXG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmF0ZSA9IGF0dGFja1JhdGU7XHJcbiAgICAgICAgdGhpcy5zaG9vdER1cmFjdGlvbiA9IDEgLyB0aGlzLmJhc2VBdHRhY2tSYXRlO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIChjb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsITnur/mo4DmtYvliLDkuoYgdG93ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlICYmIGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5ub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLXRvd2VyXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlbGVhcy1za2lsbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVsZWFzZS1za2lsbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+mHiuaUvuaKgOiDvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgncnVuJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3nmoTnirbmgIHmmK/ov5DooYznirbmgIFcclxuICAgICAgICAgICAgLy/lr7vmib7lkIjpgILnmoQg5pWM5Lq6XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5yb3RhdGUobmV3IFF1YXQoMCwwLjAwMSwwLDApKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCw5MCwwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlTGlzdCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBtaW5MZW5ndGggPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKGVuZW15Tm9kZSkgJiYgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzQ2FuTG9jaygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IG5ldyBWZWMzKGVuZW15Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5sZW5ndGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IGVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLnNldEJlTG9ja2VkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebruagh+aVjOS6ulwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24gPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VidHJhY3QodjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbi5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuZ2xlXCIsIGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNob290VGltZSA+IHRoaXMuc2hvb3REdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCdWxsZXQodGhpcy5nZXRDdXJyZW50QXR0YWNrUmF0ZSgpLCB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbiwgdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEF0dGFja1JhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja1JhdGVcclxuICAgIH1cclxuICAgIHNob290T25lQnVsbGV0KGF0dGFja1JhdGU6IG51bWJlciwgY3VycmVudFNob290RGlyYWN0aW9uOiBWZWMyLCBhdHRhY2tOdW06IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbU5hbWUgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdEFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGFuaW1TdGF0ZS5sZW5ndGggKiAxIC8gYXR0YWNrUmF0ZTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShkZWZhdWx0QW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlT25lQnVsbGV0KGN1cnJlbnRTaG9vdERpcmFjdGlvbiwgdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKGF0dGFja051bSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9LCBsZW5ndGggKiB0aGlzLmF0dGFja0FuaW1FdmVudFRpbWVPZmZzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlT25lQnVsbGV0KGRpcmVjdGlvbjogVmVjMiwgYXR0YWNrTnVtOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYnVsbGV0Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICBidWxsZXROb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBidWxsZXROb2RlLnNldFBvc2l0aW9uKHRoaXMuYnVsbGV0U3RhcnRQb3Mud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlT25lQnVsbGV0IGJhc2UgYXR0YWNrIG51bVwiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgIGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICB0YXJnZXRFbmVteTogdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXksXHJcbiAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IGF0dGFja051bVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZVNraWxsKCkge1xyXG4gICAgICAgIC8v5aGU6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgLy8gbGV0IHRvd2VyVHlwZSA9IHRoaXMuXHJcbiAgICAgICAgLy8gbGV0IHRvd2VyU2tpbGxUeXBlID0gdGhcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2Ugc2tpbGxcIiwgdGhpcy5vYmplY3RUeXBlKTtcclxuICAgICAgICAvLyBsZXQgdG93ZXJTa2lsbFR5cGUgPSB0aGlzLmdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Ta2lsbFR5cGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3dlciBza2lsbCB0eXBlXCIsIHRvd2VyU2tpbGxUeXBlKTtcclxuICAgICAgICAvL+mHiuaUvueahOWhlOeahOaKgOiDvVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWxlYXMtc2tpbGxcIik7IC8v6YeK5pS+5oqA6IO9c1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=