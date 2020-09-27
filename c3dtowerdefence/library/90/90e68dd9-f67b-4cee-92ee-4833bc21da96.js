System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js", "./BaseObject.js", "./Enemys/EnemyBase.js", "./util/BezierN.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Vec3, v3, ColliderComponent, isValid, Quat, Tween, Prefab, instantiate, State, GameController, BaseObject, EnemyBase, BezierN, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BulletBase;

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
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./Enemys/EnemyBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBezierN(extras) {
    _reporterNs.report("BezierN", "./util/BezierN", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      ColliderComponent = _cc.ColliderComponent;
      isValid = _cc.isValid;
      Quat = _cc.Quat;
      Tween = _cc.Tween;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "90e683Z9ntM7pLuSDO8IdqW", "BulletBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BulletBase", BulletBase = (_dec = ccclass('BulletBase'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(BulletBase, _ref);

        function BulletBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BulletBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BulletBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.speedY = 0;
          _this.accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).accY;
          _this.currentDirection = v3(0, 0);
          _this.currentInitSpeedY = 6;
          _this.currentCostAcc = -3;
          _this.maxLeftTime = 1 + Math.random();
          _this.colliderComponent = null;
          _this.gameConfigJson = {};
          _this.targetTowerBase = null;
          _this.targetEnemyNode = null;
          _this.movePathList = [];

          _initializerDefineProperty(_this, "exporeEffectPrefab", _descriptor, _assertThisInitialized(_this));

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

            var direction = data.direction;
            this.currentDirection = direction; // let angle: number = new Vec2(direction.x, direction.y).signAngle(v2(0, -1));
            // this.node.eulerAngles = v3(0, angle * 180 / Math.PI, 0);
            // this.node.lookAt();/

            var targetEnemy = data.targetEnemy;

            if (targetEnemy) {
              this.targetEnemyNode = targetEnemy;
            }

            var quat = new Quat();
            Quat.fromViewUp(quat, v3(direction).multiplyScalar(-1).normalize(), Vec3.UP);
            this.node.worldRotation = quat;
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
                this.movePathList = new (_crd && BezierN === void 0 ? (_reportPossibleCrUseOfBezierN({
                  error: Error()
                }), BezierN) : BezierN)(ctlPos).getPointList(50);
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
            var _this3 = this;

            // tw.call(()=>{
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
            var _this4 = this;

            // console.log("onTriggerEnter", event);
            // this.state.setState("sleep");
            var otherCollider = event.otherCollider;

            if (isValid(otherCollider) && isValid(otherCollider.node) && otherCollider.node.name.indexOf("Wall") > 1) {
              console.log(" other collier node", otherCollider.node.name);
              this.node.destroy();
            }

            if (otherCollider && otherCollider.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase) && !otherCollider.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase).getIsDead()) {
              console.log("base attack num", this.baseAttackNum);

              if (this.getIsCollisionDestroy()) {
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
            if (this.state.getState() === 'run') {
              //
              if (this.getMoveType() === 'Bezier') {
                if (isValid(this.targetEnemyNode)) {
                  var dir = v3(this.targetEnemyNode.position).add(v3(0, 2, 0)).subtract(this.node.position);
                  this.node.position = v3(this.node.position).add(dir.multiplyScalar(deltaTime * 0.5 * this.getMoveSpeed()));
                  this.node.lookAt(this.targetEnemyNode.position);
                } else {
                  this.node.destroy();
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
        }]);

        return BulletBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "exporeEffectPrefab", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJWZWMzIiwidjMiLCJDb2xsaWRlckNvbXBvbmVudCIsImlzVmFsaWQiLCJRdWF0IiwiVHdlZW4iLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRW5lbXlCYXNlIiwiQmV6aWVyTiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1bGxldEJhc2UiLCJ0eXBlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwidGFyZ2V0VG93ZXJCYXNlIiwidGFyZ2V0RW5lbXlOb2RlIiwibW92ZVBhdGhMaXN0IiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJkYXRhIiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiLCJxdWF0IiwiZnJvbVZpZXdVcCIsIm11bHRpcGx5U2NhbGFyIiwibm9ybWFsaXplIiwiVVAiLCJub2RlIiwid29ybGRSb3RhdGlvbiIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJiaW5kIiwic2NoZWR1bGVPbmNlIiwiZGVzdHJveSIsImxlZnRUaW1lIiwiZ2V0TW92ZVR5cGUiLCJlbmRQb3MiLCJwb3NpdGlvbiIsIm1pZGRsZSIsImFkZCIsImN0bFBvcyIsImdldFBvaW50TGlzdCIsInR3IiwicHJvY2Vzc01vdmUiLCJjYWxsIiwic2V0U3RhdGUiLCJzdGFydCIsInBhdGhMaXN0IiwiaSIsImxlbmd0aCIsInByb2Nlc3NQb3NBbmRRdWF0IiwicG9zIiwiYmVmb3JQb3MiLCJkaXIiLCJzdWJ0cmFjdCIsImRpcyIsInRpbWUiLCJnZXRNb3ZlU3BlZWQiLCJsb29rQXQiLCJ0byIsImV2ZW50Iiwib3RoZXJDb2xsaWRlciIsIm5hbWUiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImdldElzRGVhZCIsImdldElzQ29sbGlzaW9uRGVzdHJveSIsImV4cG9yZUVmZmVjdFByZWZhYiIsInJvb3ROb2RlIiwiYWN0aXZlIiwicGFyZW50IiwiYnkiLCJzY2FsZSIsImVtaXQiLCJiYXNlR2FzTnVtIiwiY2IiLCJpc0RlYWQiLCJlbmVteURlYWRCeVRoaXMiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsInkiLCJ2IiwibW92ZVNwZWVkIiwic2V0UG9zaXRpb24iLCJ4IiwieiIsImdldFBvc2l0aW9uIiwiaXNDb2xsaXNpb25Hcm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFvQkMsTUFBQUEsaUIsT0FBQUEsaUI7QUFBNkVDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7Ozs7QUFDeEtDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBRUFDLE1BQUFBLE8sa0JBQUFBLE87Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCZCxVLENBQXRCYyxPO0FBQVNDLE1BQUFBLFEsR0FBYWYsVSxDQUFiZSxROzs0QkFHSkMsVSxXQURaRixPQUFP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LFNBQVMsQ0FBQ0ksY0FBVixDQUF5QixLQUFLNEQsU0FBTCxHQUFpQkosU0FBMUMsQ0FBUjs7QUFDQSxvQkFBSUcsQ0FBQyxDQUFDRCxDQUFGLEdBQU0sQ0FBVixFQUFhO0FBQ1RDLGtCQUFBQSxDQUFDLENBQUNELENBQUYsR0FBTSxDQUFOO0FBQ0gsaUJBUkUsQ0FTSDs7O0FBQ0EscUJBQUt2RCxJQUFMLENBQVUwRCxXQUFWLENBQXNCckcsRUFBRSxDQUFDb0UsR0FBRyxDQUFDa0MsQ0FBSixHQUFRSCxDQUFDLENBQUNHLENBQVgsRUFBY2xDLEdBQUcsQ0FBQzhCLENBQUosR0FBUUMsQ0FBQyxDQUFDRCxDQUF4QixFQUEyQjlCLEdBQUcsQ0FBQ21DLENBQUosR0FBUUosQ0FBQyxDQUFDSSxDQUFyQyxDQUF4Qjs7QUFDQSxvQkFBSSxLQUFLNUQsSUFBTCxDQUFVNkQsV0FBVixHQUF3Qk4sQ0FBeEIsSUFBNkIsQ0FBakMsRUFBb0M7QUFDaEM7QUFDQSxzQkFBSSxLQUFLTyxpQkFBVCxFQUE0QjtBQUN4Qix5QkFBS3hGLE1BQUwsR0FBYyxLQUFLRyxpQkFBbkI7QUFDQSx5QkFBS0EsaUJBQUwsSUFBMEIsS0FBS0MsY0FBL0I7O0FBQ0Esd0JBQUksS0FBS0QsaUJBQUwsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIsMkJBQUtKLEtBQUwsQ0FBVzhDLFFBQVgsQ0FBb0IsT0FBcEI7QUFFSDtBQUNKO0FBRUo7QUFDSjtBQUdKO0FBQ0o7Ozs7Ozs7Ozs7O2lCQW5NbUMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMsIHYyLCBWZWMyLCBtYXRoLCBDb2xsaWRlckNvbXBvbmVudCwgU3BoZXJlQ29sbGlkZXJDb21wb25lbnQsIFRyaWdnZXJFdmVudFR5cGUsIElUcmlnZ2VyRXZlbnQsIGlzVmFsaWQsIFF1YXQsIHBhdGgsIFR3ZWVuLCBQcmVmYWIsIGluc3RhbnRpYXRlIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuL3V0aWwvQmV6aWVyTic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQnVsbGV0QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBCdWxsZXRCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBzcGVlZFk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjY1k6IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREaXJlY3Rpb246IFZlYzMgPSB2MygwLCAwKTtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAyMDtcclxuICAgIHByaXZhdGUgY3VycmVudEluaXRTcGVlZFkgPSA2OyAvL+W8uei1t+eahOWIneWni+mAn+W6plxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q29zdEFjYyA9IC0zOyAgIC8v5by56LW355qE6IO96YeP5o2f5aSxXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgYm9keU5vZGU6IE5vZGUgPSBudWxsOy8v6Lqr5L2TXHJcbiAgICBwcml2YXRlIG1heExlZnRUaW1lOiBudW1iZXIgPSAxICsgTWF0aC5yYW5kb20oKTsgLy/mnIDlpKfnlJ/lrZjml7bpl7RcclxuICAgIHByaXZhdGUgY29sbGlkZXJDb21wb25lbnQ6IENvbGxpZGVyQ29tcG9uZW50ID0gbnVsbDsgLy/norDmkp7nu4Tku7ZcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHByb3RlY3RlZCBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0ge307IC8v5ri45oiP6YWN572uXHJcbiAgICBwcml2YXRlIHRhcmdldFRvd2VyQmFzZTogVG93ZXJCYXNlID0gbnVsbDsgLy/nm67moIfloZRcclxuICAgIHByaXZhdGUgdGFyZ2V0RW5lbXlOb2RlOiBOb2RlID0gbnVsbDsgLy/nm67moIfmlYzkurpcclxuICAgIHByaXZhdGUgbW92ZVBhdGhMaXN0OiBWZWMzW10gPSBbXTsgLy/np7vliqjot6/lvoRcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBleHBvcmVFZmZlY3RQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiaW5pdC1kYXRhXCIsIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwic2xlZXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpPT57XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lQ29uZmlnOiB7fSwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5iYXNlQXR0YWNrTnVtICs9IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyQmFzZSA9IGRhdGEudGFyZ2V0VG93ZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGF0YS5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIC8vIGxldCBhbmdsZTogbnVtYmVyID0gbmV3IFZlYzIoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KS5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5sb29rQXQoKTsvXHJcbiAgICAgICAgbGV0IHRhcmdldEVuZW15OiBOb2RlID0gZGF0YS50YXJnZXRFbmVteTtcclxuICAgICAgICBpZiAodGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRFbmVteU5vZGUgPSB0YXJnZXRFbmVteTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgdjMoZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcigtMSkubm9ybWFsaXplKCksIFZlYzMuVVApO1xyXG4gICAgICAgIHRoaXMubm9kZS53b3JsZFJvdGF0aW9uID0gcXVhdDtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25UcmlnZ2VyRW50ZXJcIiwgdGhpcy5vblRyaWdnZXJFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcy5sZWZ0VGltZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKSA9PT0gJ0JlemllcicpIHtcclxuICAgICAgICAgICAgLy/lrZDlvLnnmoTnp7vliqjmlrnlvI/mmK/otJ3loZ7lsJTmm7Lnur/mlrnlvI9cclxuICAgICAgICAgICAgLy8gIGxldCBjdGxQb3MgPSBbdGhpcy5ub2RlLnBvc2l0aW9uXTtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXRFbmVteU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy50YXJnZXRFbmVteU5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZW5kUG9zKS5tdWx0aXBseVNjYWxhcigwLjUpLmFkZCh2MygwLCAxNSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN0bFBvcyA9IFt0aGlzLm5vZGUucG9zaXRpb24sIG1pZGRsZSwgZW5kUG9zXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVBhdGhMaXN0ID0gbmV3IEJlemllck4oY3RsUG9zKS5nZXRQb2ludExpc3QoNTApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gdGhpcy5wcm9jZXNzTW92ZSh0aGlzLm1vdmVQYXRoTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01vdmUocGF0aExpc3Q6IFZlYzNbXSk6IFR3ZWVuIHtcclxuXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NQb3NBbmRRdWF0KHR3LCBwYXRoTGlzdFtpXSwgcGF0aExpc3RbaSAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc1Bvc0FuZFF1YXQodHc6IFR3ZWVuLCBwb3M6IFZlYzMsIGJlZm9yUG9zOiBWZWMzKSB7XHJcblxyXG5cclxuICAgICAgICAvLyB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQocG9zKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGxldCBkaXIgPSB2MyhiZWZvclBvcykuc3VidHJhY3QocG9zKTtcclxuICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIGxldCB0aW1lID0gZGlzIC8gdGhpcy5nZXRNb3ZlU3BlZWQoKTtcclxuICAgICAgICAvLyBjb25zdCB1cGRhdGVDYiA9ICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIC8vICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgdjMoZGlyKS5tdWx0aXBseVNjYWxhcigtMSkubm9ybWFsaXplKCksIFZlYzMuVVApO1xyXG4gICAgICAgIC8vICAgICBsZXQgbGVycFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIC8vICAgICBRdWF0LmxlcnAobGVycFF1YXQsIHRoaXMubm9kZS5yb3RhdGlvbiwgcXVhdCwgMC4xKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gbGVycFF1YXQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHVwZGF0ZUNiLCAxIC8gNjApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUubG9va0F0KHBvcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZUNiKGRpcil7XHJcbiAgICAvLyAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgLy8gICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCB2MyhkaXIpLm5vcm1hbGl6ZSgpLCBWZWMzLlVQKTtcclxuICAgIC8vICAgICBsZXQgbGVycFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgLy8gICAgIFF1YXQubGVycChsZXJwUXVhdCwgbGVycFF1YXQsIHF1YXQsIDAuMSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gbGVycFF1YXQ7XHJcbiAgICAvLyB9XHJcbiAgICBvblRyaWdnZXJFbnRlcihldmVudDogSVRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25UcmlnZ2VyRW50ZXJcIiwgZXZlbnQpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzbGVlcFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG90aGVyQ29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gZXZlbnQub3RoZXJDb2xsaWRlcjtcclxuICAgICAgICBpZiAoaXNWYWxpZChvdGhlckNvbGxpZGVyKSAmJiBpc1ZhbGlkKG90aGVyQ29sbGlkZXIubm9kZSkgJiYgb3RoZXJDb2xsaWRlci5ub2RlLm5hbWUuaW5kZXhPZihcIldhbGxcIikgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG90aGVyIGNvbGxpZXIgbm9kZVwiLCBvdGhlckNvbGxpZGVyLm5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyICYmIG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiYgIW90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXNDb2xsaXNpb25EZXN0cm95KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci10by1kZXN0cm95XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5leHBvcmVFZmZlY3RQcmVmYWIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZXhwb3JlRWZmZWN0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5lbWl0KFwiYmUtYXR0YWNrZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgYmFzZUF0dGFja051bTogdGhpcy5iYXNlQXR0YWNrTnVtLFxyXG4gICAgICAgICAgICAgICAgYmFzZUdhc051bTogdGhpcy5iYXNlR2FzTnVtLFxyXG4gICAgICAgICAgICAgICAgY2I6IChpc0RlYWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuatu+S6hlwiLCBpc0RlYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0VG93ZXJCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXJCYXNlLmVuZW15RGVhZEJ5VGhpcyhpc0RlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmJhc2VHYXNOdW0gIT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyB0aGlzLmNvbGxpZGVyQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChCdWxsZXRCYXNlKTtcclxuICAgICAgICAvLyAvL+iOt+WPlueisOaSnue7hOS7tlxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGUgdXVpZFwiLCB0aGlzLm5vZGUudXVpZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsaWRlcjpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xsaWRlckNvbXBvbmVudCkpO1xyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQub24oXCJvbkNvbGxpc2lvbkVudGVyXCIsdGhpcy5vbkNvbGxpc2lvbkVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKSA9PT0gJ0JlemllcicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0RW5lbXlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLnRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbikuYWRkKHYzKDAsIDIsIDApKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpci5tdWx0aXBseVNjYWxhcihkZWx0YVRpbWUgKiAwLjUgKiB0aGlzLmdldE1vdmVTcGVlZCgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmxvb2tBdCh0aGlzLnRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBwb3MueSArIHRoaXMuc3BlZWRZICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgICAgIGlmICh2LnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi55ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgcG9zLnkgKyB2LnksIHBvcy56ICsgdi56KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5jdXJyZW50SW5pdFNwZWVkWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5pdFNwZWVkWSArPSB0aGlzLmN1cnJlbnRDb3N0QWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5pdFNwZWVkWSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3NsZWVwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==