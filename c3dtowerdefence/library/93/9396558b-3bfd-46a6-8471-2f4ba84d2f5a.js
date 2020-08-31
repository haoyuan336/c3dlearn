System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../Enemys/EnemyBase.js", "../BulletBase.js", "../BaseObject.js", "../EnemyController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Vec3, v2, Prefab, instantiate, find, SkeletalAnimationComponent, isValid, State, GameController, EnemyBase, BulletBase, BaseObject, EnemyController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TowerBase;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
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

          _this.bulletMoveTime = null;
          _this.currentShootDiraction = v2(0, 0);
          _this.attackRate = null;
          _this.gameConfig = null;
          return _this;
        }

        _createClass(TowerBase, [{
          key: "init",
          value: function init() {}
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.state.setState("run");
            var moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度

            var accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).accY;
            this.gameController = find("GameController");
            this.gameConfig = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
            var attackRate = this.gameConfig[this.objectType].ShootRate;
            this.attackRate = attackRate;
            this.shootDuraction = 1 / attackRate;
            this.gameController.on("touch-screen-to-3d", function (collider) {
              if (collider.node.uuid === _this2.node.uuid) {
                _this2.gameController.emit("touch-tower", _this2.node);
              }
            }); // this.rootNode.getComponent(SkeletalAnimationComponent).getAnimationState("骨架|骨架Action").speed = attackRate;
            // let length = this.rootNode.getComponent(SkeletalAnimationComponent).getAnimationState("骨架|骨架Action").length * 1 / attackRate;
            // console.log("length = ", length);
            // let count = 0;
            // this.schedule(() => {
            //     if (count === 1) {
            //         this.shootOneBullet();
            //     }
            //     if (count >= 1) {
            //         count = 0;
            //     } else {
            //         count++;
            //     }
            // }, length / 2);
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

                  if (enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
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

              if (this.currentTargetEnemy) {
                // console.log("找到了目标敌人");
                if (this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
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
                  this.shootOneBullet();
                } else {
                  this.currentShootTime += deltaTime;
                }
              }
            }
          }
        }, {
          key: "shootOneBullet",
          value: function shootOneBullet() {
            var _this3 = this;

            var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);

            if (skeleteAnim) {
              var defaultAnimName = skeleteAnim.defaultClip.name;
              var animState = skeleteAnim.getState(defaultAnimName);
              var length = animState.length * 1 / this.attackRate;
              skeleteAnim.play(defaultAnimName);
              animState.repeatCount = 1;
              this.scheduleOnce(function () {
                if (isValid(_this3.currentTargetEnemy)) {
                  var bulletNode = instantiate(_this3.bulletPrefab);
                  bulletNode.parent = _this3.node.parent;
                  bulletNode.active = false;
                  bulletNode.setPosition(_this3.bulletStartPos.worldPosition);
                  bulletNode.active = true;
                  bulletNode.getComponent(_crd && BulletBase === void 0 ? (_reportPossibleCrUseOfBulletBase({
                    error: Error()
                  }), BulletBase) : BulletBase).init({
                    direction: _this3.currentShootDiraction,
                    targetEnemy: _this3.currentTargetEnemy,
                    gameConfigJson: _this3.gameConfig
                  });
                }
              }, length * 0.45);
            } // this.rootNode.getComponent(SkeletalAnimationComponent).getState("骨架|骨架Action.001").speed = this.attackRate;
            // this.rootNode.getComponent(SkeletalAnimationComponent).getState("骨架|骨架Action.001").repeatCount = 1;
            // let length = this.rootNode.getComponent(SkeletalAnimationComponent).getState("骨架|骨架Action.001").length * 1 / this.attackRate;
            // this.rootNode.getComponent(SkeletalAnimationComponent).play("骨架|骨架Action.001");
            // this.scheduleOnce(() => {
            //     if (isValid(this.currentTargetEnemy)) {
            //         let bulletNode = instantiate(this.bulletPrefab);
            //         bulletNode.parent = this.node.parent;
            //         bulletNode.active = false;
            //         bulletNode.setPosition(this.bulletStartPos.worldPosition);
            //         bulletNode.active = true;
            //         bulletNode.getComponent(BulletBase).init({
            //             direction: this.currentShootDiraction,
            //             targetEnemy: this.currentTargetEnemy,
            //             gameConfigJson: this.gameConfig
            //         })
            //     }
            // }, length * 0.45)
            // console.log("发射一枚子弹");
            // let bulletNode = instantiate(this.bulletPrefab);
            // bulletNode.parent = this.node.parent;
            // bulletNode.active = false;
            // bulletNode.setPosition(this.bulletStartPos.worldPosition);
            // bulletNode.active = true;
            // bulletNode.getComponent(BulletBase).init({
            //     direction: this.currentShootDiraction,
            //     targetEnemy: this.currentTargetEnemy,
            //     gameConfigJson: this.gameConfig
            // })
            // bulletNode.emit("init-data", {
            //     direction: this.currentShootDiraction,
            //     targetEnemy: this.currentTargetEnemy
            // })

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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJpc1ZhbGlkIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15QmFzZSIsIkJ1bGxldEJhc2UiLCJCYXNlT2JqZWN0IiwiRW5lbXlDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVG93ZXJCYXNlIiwidHlwZSIsImdhbWVDb250cm9sbGVyIiwic3RhdGUiLCJjdXJyZW50VGFyZ2V0RW5lbXkiLCJjdXJyZW50U2hvb3RUaW1lIiwic2hvb3REdXJhY3Rpb24iLCJidWxsZXRNb3ZlVGltZSIsImN1cnJlbnRTaG9vdERpcmFjdGlvbiIsImF0dGFja1JhdGUiLCJnYW1lQ29uZmlnIiwic2V0U3RhdGUiLCJtb3ZlRGlzdGFuY2UiLCJidWxsZXRTdGFydFBvcyIsIndvcmxkUG9zaXRpb24iLCJ5IiwiYWNjWSIsImdldENvbXBvbmVudCIsImdldEdhbWVDb25maWciLCJqc29uIiwib2JqZWN0VHlwZSIsIlNob290UmF0ZSIsIm9uIiwiY29sbGlkZXIiLCJub2RlIiwidXVpZCIsImVtaXQiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsImVuZW15Tm9kZUxpc3QiLCJnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCIsIm1pbkxlbmd0aCIsImkiLCJsZW5ndGgiLCJlbmVteU5vZGUiLCJnZXRJc0NhbkxvY2siLCJnZXRJc0RlYWQiLCJwb3NpdGlvbiIsInN1YnRyYWN0Iiwic2V0QmVMb2NrZWQiLCJ4IiwieiIsImFuZ2xlIiwic2lnbkFuZ2xlIiwiZXVsZXJBbmdsZXMiLCJNYXRoIiwiUEkiLCJzaG9vdE9uZUJ1bGxldCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJkZWZhdWx0QW5pbU5hbWUiLCJkZWZhdWx0Q2xpcCIsIm5hbWUiLCJhbmltU3RhdGUiLCJwbGF5IiwicmVwZWF0Q291bnQiLCJzY2hlZHVsZU9uY2UiLCJidWxsZXROb2RlIiwiYnVsbGV0UHJlZmFiIiwicGFyZW50IiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJpbml0IiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiLCJnYW1lQ29uZmlnSnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxJLE9BQUFBLEk7QUFBZ0JDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlDQyxNQUFBQSxJLE9BQUFBLEk7QUFBeUJDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxPLE9BQUFBLE87Ozs7QUFDN0pDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLGUsc0JBQUFBLGU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCZixVLENBQXRCZSxPO0FBQVNDLE1BQUFBLFEsR0FBYWhCLFUsQ0FBYmdCLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEMsVUFRSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFFUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWpCO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBUkZrQixjLEdBQXVCLEk7Z0JBQ3RCQyxLLEdBQWU7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QUcsSUFiWjtBQWNILGFBdkJZLENBeUJiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSDs7Ozs7Ozs7Ozs7aUJBcEs2QixJOzs7Ozs7O2lCQUVBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzIsIFZlYzMsIFF1YXQsIHYzLCB2MiwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgSnNvbkFzc2V0LCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vLi4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgQnVsbGV0QmFzZSB9IGZyb20gJy4vLi4vQnVsbGV0QmFzZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCYXNlJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUYXJnZXRFbmVteTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNob290RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1bGxldFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBidWxsZXRTdGFydFBvczogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBidWxsZXRNb3ZlVGltZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFNob290RGlyYWN0aW9uOiBWZWMyID0gdjIoMCwgMCk7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgcm9vdE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYXR0YWNrUmF0ZTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IE9iamVjdCA9IG51bGw7XHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgbGV0IG1vdmVEaXN0YW5jZSA9IHRoaXMuYnVsbGV0U3RhcnRQb3Mud29ybGRQb3NpdGlvbi55IC0gMC41OyAvL+WtkOW8ueeahOWPkeWwhOmrmOW6piAtIOaVjOS6uueahCDpq5jluqZcclxuICAgICAgICBsZXQgYWNjWSA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG5cclxuICAgICAgICBsZXQgYXR0YWNrUmF0ZSA9IHRoaXMuZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlNob290UmF0ZTtcclxuICAgICAgICB0aGlzLmF0dGFja1JhdGUgPSBhdHRhY2tSYXRlO1xyXG4gICAgICAgIHRoaXMuc2hvb3REdXJhY3Rpb24gPSAxIC8gYXR0YWNrUmF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCAoY29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJ0b3VjaC10b3dlclwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpLmdldEFuaW1hdGlvblN0YXRlKFwi6aqo5p62fOmqqOaetkFjdGlvblwiKS5zcGVlZCA9IGF0dGFja1JhdGU7XHJcbiAgICAgICAgLy8gbGV0IGxlbmd0aCA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KS5nZXRBbmltYXRpb25TdGF0ZShcIumqqOaetnzpqqjmnrZBY3Rpb25cIikubGVuZ3RoICogMSAvIGF0dGFja1JhdGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGggPSBcIiwgbGVuZ3RoKTtcclxuICAgICAgICAvLyBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoY291bnQgPT09IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2hvb3RPbmVCdWxsZXQoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAoY291bnQgPj0gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY291bnQrKztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIGxlbmd0aCAvIDIpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxlbmd0aCA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0NhbkxvY2soKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBuZXcgVmVjMyhlbmVteU5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubGVuZ3RoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBlbmVteU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zZXRCZUxvY2tlZCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobnm67moIfmlYzkurpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbiA9IHYyKHRoaXMuY3VycmVudFRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRoaXMuY3VycmVudFRhcmdldEVuZW15LnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJ0cmFjdCh2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnNpZ25BbmdsZSh2MigwLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5nbGVcIiwgYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNob290VGltZSA+IHRoaXMuc2hvb3REdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCdWxsZXQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3RUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob290T25lQnVsbGV0KCkge1xyXG5cclxuICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbU5hbWUgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdEFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGFuaW1TdGF0ZS5sZW5ndGggKiAxIC8gdGhpcy5hdHRhY2tSYXRlO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KGRlZmF1bHRBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidWxsZXROb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldE5vZGUuc2V0UG9zaXRpb24odGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSkuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbmZpZ0pzb246IHRoaXMuZ2FtZUNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGxlbmd0aCAqIDAuNDUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCkuZ2V0U3RhdGUoXCLpqqjmnrZ86aqo5p62QWN0aW9uLjAwMVwiKS5zcGVlZCA9IHRoaXMuYXR0YWNrUmF0ZTtcclxuICAgICAgICAvLyB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCkuZ2V0U3RhdGUoXCLpqqjmnrZ86aqo5p62QWN0aW9uLjAwMVwiKS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgLy8gbGV0IGxlbmd0aCA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KS5nZXRTdGF0ZShcIumqqOaetnzpqqjmnrZBY3Rpb24uMDAxXCIpLmxlbmd0aCAqIDEgLyB0aGlzLmF0dGFja1JhdGU7XHJcbiAgICAgICAgLy8gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpLnBsYXkoXCLpqqjmnrZ86aqo5p62QWN0aW9uLjAwMVwiKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGJ1bGxldE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgLy8gICAgICAgICBidWxsZXROb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgYnVsbGV0Tm9kZS5zZXRQb3NpdGlvbih0aGlzLmJ1bGxldFN0YXJ0UG9zLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIC8vICAgICAgICAgYnVsbGV0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSkuaW5pdCh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbixcclxuICAgICAgICAvLyAgICAgICAgICAgICB0YXJnZXRFbmVteTogdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ2FtZUNvbmZpZ0pzb246IHRoaXMuZ2FtZUNvbmZpZ1xyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyB9LCBsZW5ndGggKiAwLjQ1KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Y+R5bCE5LiA5p6a5a2Q5by5XCIpO1xyXG4gICAgICAgIC8vIGxldCBidWxsZXROb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xyXG4gICAgICAgIC8vIGJ1bGxldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAvLyBidWxsZXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGJ1bGxldE5vZGUuc2V0UG9zaXRpb24odGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICAvLyBidWxsZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSkuaW5pdCh7XHJcbiAgICAgICAgLy8gICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24sXHJcbiAgICAgICAgLy8gICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSxcclxuICAgICAgICAvLyAgICAgZ2FtZUNvbmZpZ0pzb246IHRoaXMuZ2FtZUNvbmZpZ1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gYnVsbGV0Tm9kZS5lbWl0KFwiaW5pdC1kYXRhXCIsIHtcclxuICAgICAgICAvLyAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbixcclxuICAgICAgICAvLyAgICAgdGFyZ2V0RW5lbXk6IHRoaXMuY3VycmVudFRhcmdldEVuZW15XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxufVxyXG4iXX0=