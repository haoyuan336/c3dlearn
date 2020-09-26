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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJWZWMzIiwidjMiLCJDb2xsaWRlckNvbXBvbmVudCIsImlzVmFsaWQiLCJRdWF0IiwiVHdlZW4iLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRW5lbXlCYXNlIiwiQmV6aWVyTiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1bGxldEJhc2UiLCJ0eXBlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwidGFyZ2V0VG93ZXJCYXNlIiwidGFyZ2V0RW5lbXlOb2RlIiwibW92ZVBhdGhMaXN0IiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJkYXRhIiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiLCJxdWF0IiwiZnJvbVZpZXdVcCIsIm11bHRpcGx5U2NhbGFyIiwibm9ybWFsaXplIiwiVVAiLCJub2RlIiwid29ybGRSb3RhdGlvbiIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJiaW5kIiwic2NoZWR1bGVPbmNlIiwiZGVzdHJveSIsImxlZnRUaW1lIiwiZ2V0TW92ZVR5cGUiLCJlbmRQb3MiLCJwb3NpdGlvbiIsIm1pZGRsZSIsImFkZCIsImN0bFBvcyIsImdldFBvaW50TGlzdCIsInR3IiwicHJvY2Vzc01vdmUiLCJjYWxsIiwic2V0U3RhdGUiLCJzdGFydCIsInBhdGhMaXN0IiwiaSIsImxlbmd0aCIsInByb2Nlc3NQb3NBbmRRdWF0IiwicG9zIiwiYmVmb3JQb3MiLCJkaXIiLCJzdWJ0cmFjdCIsImRpcyIsInRpbWUiLCJnZXRNb3ZlU3BlZWQiLCJsb29rQXQiLCJ0byIsImV2ZW50Iiwib3RoZXJDb2xsaWRlciIsIm5hbWUiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImdldElzRGVhZCIsImdldElzQ29sbGlzaW9uRGVzdHJveSIsImV4cG9yZUVmZmVjdFByZWZhYiIsInJvb3ROb2RlIiwiYWN0aXZlIiwicGFyZW50IiwiYnkiLCJzY2FsZSIsImVtaXQiLCJiYXNlR2FzTnVtIiwiY2IiLCJpc0RlYWQiLCJlbmVteURlYWRCeVRoaXMiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsInkiLCJ2IiwibW92ZVNwZWVkIiwic2V0UG9zaXRpb24iLCJ4IiwieiIsImdldFBvc2l0aW9uIiwiaXNDb2xsaXNpb25Hcm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFvQkMsTUFBQUEsaUIsT0FBQUEsaUI7QUFBNkVDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7Ozs7QUFDeEtDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBRUFDLE1BQUFBLE8sa0JBQUFBLE87Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCZCxVLENBQXRCYyxPO0FBQVNDLE1BQUFBLFEsR0FBYWYsVSxDQUFiZSxROzs0QkFHSkMsVSxXQURaRixPQUFP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LENBU0g7OztBQUNBLHFCQUFLdkQsSUFBTCxDQUFVMEQsV0FBVixDQUFzQnJHLEVBQUUsQ0FBQ29FLEdBQUcsQ0FBQ2tDLENBQUosR0FBUUgsQ0FBQyxDQUFDRyxDQUFYLEVBQWNsQyxHQUFHLENBQUM4QixDQUFKLEdBQVFDLENBQUMsQ0FBQ0QsQ0FBeEIsRUFBMkI5QixHQUFHLENBQUNtQyxDQUFKLEdBQVFKLENBQUMsQ0FBQ0ksQ0FBckMsQ0FBeEI7O0FBQ0Esb0JBQUksS0FBSzVELElBQUwsQ0FBVTZELFdBQVYsR0FBd0JOLENBQXhCLElBQTZCLENBQWpDLEVBQW9DO0FBQ2hDO0FBQ0Esc0JBQUksS0FBS08saUJBQVQsRUFBNEI7QUFDeEIseUJBQUt4RixNQUFMLEdBQWMsS0FBS0csaUJBQW5CO0FBQ0EseUJBQUtBLGlCQUFMLElBQTBCLEtBQUtDLGNBQS9COztBQUNBLHdCQUFJLEtBQUtELGlCQUFMLEdBQXlCLENBQTdCLEVBQWdDO0FBQzVCLDJCQUFLSixLQUFMLENBQVc4QyxRQUFYLENBQW9CLE9BQXBCO0FBRUg7QUFDSjtBQUVKO0FBQ0o7QUFHSjtBQUNKOzs7Ozs7Ozs7OztpQkE1TG1DLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHYzLCB2MiwgVmVjMiwgbWF0aCwgQ29sbGlkZXJDb21wb25lbnQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBUcmlnZ2VyRXZlbnRUeXBlLCBJVHJpZ2dlckV2ZW50LCBpc1ZhbGlkLCBRdWF0LCBwYXRoLCBUd2VlbiwgUHJlZmFiLCBpbnN0YW50aWF0ZSB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi91dGlsL0Jlemllck4nO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1bGxldEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgQnVsbGV0QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgc3BlZWRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY2NZOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5hY2NZO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0aW9uOiBWZWMzID0gdjMoMCwgMCk7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbml0U3BlZWRZID0gNjsgLy/lvLnotbfnmoTliJ3lp4vpgJ/luqZcclxuICAgIHByaXZhdGUgY3VycmVudENvc3RBY2MgPSAtMzsgICAvL+W8uei1t+eahOiDvemHj+aNn+WksVxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGJvZHlOb2RlOiBOb2RlID0gbnVsbDsvL+i6q+S9k1xyXG4gICAgcHJpdmF0ZSBtYXhMZWZ0VGltZTogbnVtYmVyID0gMSArIE1hdGgucmFuZG9tKCk7IC8v5pyA5aSn55Sf5a2Y5pe26Ze0XHJcbiAgICBwcml2YXRlIGNvbGxpZGVyQ29tcG9uZW50OiBDb2xsaWRlckNvbXBvbmVudCA9IG51bGw7IC8v56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGJhc2VBdHRhY2tOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye75YC8XHJcbiAgICBwcm90ZWN0ZWQgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IHt9OyAvL+a4uOaIj+mFjee9rlxyXG4gICAgcHJpdmF0ZSB0YXJnZXRUb3dlckJhc2U6IFRvd2VyQmFzZSA9IG51bGw7IC8v55uu5qCH5aGUXHJcbiAgICBwcml2YXRlIHRhcmdldEVuZW15Tm9kZTogTm9kZSA9IG51bGw7IC8v55uu5qCH5pWM5Lq6XHJcbiAgICBwcml2YXRlIG1vdmVQYXRoTGlzdDogVmVjM1tdID0gW107IC8v56e75Yqo6Lev5b6EXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZXhwb3JlRWZmZWN0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImluaXQtZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInNsZWVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKT0+e1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGluaXQoZ2FtZUNvbmZpZzoge30sIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuYmFzZUF0dGFja051bSArPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgdGhpcy50YXJnZXRUb3dlckJhc2UgPSBkYXRhLnRhcmdldFRvd2VyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFzZSBhdHRhY2sgbnVtXCIsIHRoaXMuYmFzZUF0dGFja051bSk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICAvLyBsZXQgYW5nbGU6IG51bWJlciA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkuc2lnbkFuZ2xlKHYyKDAsIC0xKSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUubG9va0F0KCk7L1xyXG4gICAgICAgIGxldCB0YXJnZXRFbmVteTogTm9kZSA9IGRhdGEudGFyZ2V0RW5lbXk7XHJcbiAgICAgICAgaWYgKHRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RW5lbXlOb2RlID0gdGFyZ2V0RW5lbXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIHYzKGRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIoLTEpLm5vcm1hbGl6ZSgpLCBWZWMzLlVQKTtcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IHF1YXQ7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWdcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uVHJpZ2dlckVudGVyXCIsIHRoaXMub25UcmlnZ2VyRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIHRoaXMubGVmdFRpbWUpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkgPT09ICdCZXppZXInKSB7XHJcbiAgICAgICAgICAgIC8v5a2Q5by555qE56e75Yqo5pa55byP5piv6LSd5aGe5bCU5puy57q/5pa55byPXHJcbiAgICAgICAgICAgIC8vICBsZXQgY3RsUG9zID0gW3RoaXMubm9kZS5wb3NpdGlvbl07XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLnRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IG1pZGRsZSA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGVuZFBvcykubXVsdGlwbHlTY2FsYXIoMC41KS5hZGQodjMoMCwgMTUsIDApKTtcclxuICAgICAgICAgICAgbGV0IGN0bFBvcyA9IFt0aGlzLm5vZGUucG9zaXRpb24sIG1pZGRsZSwgZW5kUG9zXTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGF0aExpc3QgPSBuZXcgQmV6aWVyTihjdGxQb3MpLmdldFBvaW50TGlzdCg1MCk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IHRoaXMucHJvY2Vzc01vdmUodGhpcy5tb3ZlUGF0aExpc3QpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBwcm9jZXNzTW92ZShwYXRoTGlzdDogVmVjM1tdKTogVHdlZW4ge1xyXG5cclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Bvc0FuZFF1YXQodHcsIHBhdGhMaXN0W2ldLCBwYXRoTGlzdFtpIC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzUG9zQW5kUXVhdCh0dzogVHdlZW4sIHBvczogVmVjMywgYmVmb3JQb3M6IFZlYzMpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmxvb2tBdChwb3MpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgbGV0IGRpciA9IHYzKGJlZm9yUG9zKS5zdWJ0cmFjdChwb3MpO1xyXG4gICAgICAgIGxldCBkaXMgPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBkaXMgLyB0aGlzLmdldE1vdmVTcGVlZCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IHVwZGF0ZUNiID0gKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgLy8gICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCB2MyhkaXIpLm11bHRpcGx5U2NhbGFyKC0xKS5ub3JtYWxpemUoKSwgVmVjMy5VUCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBsZXJwUXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgLy8gICAgIFF1YXQubGVycChsZXJwUXVhdCwgdGhpcy5ub2RlLnJvdGF0aW9uLCBxdWF0LCAwLjEpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUucm90YXRpb24gPSBsZXJwUXVhdDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodXBkYXRlQ2IsIDEgLyA2MCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5sb29rQXQocG9zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlQ2IoZGlyKXtcclxuICAgIC8vICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAvLyAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIHYzKGRpcikubm9ybWFsaXplKCksIFZlYzMuVVApO1xyXG4gICAgLy8gICAgIGxldCBsZXJwUXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAvLyAgICAgUXVhdC5sZXJwKGxlcnBRdWF0LCBsZXJwUXVhdCwgcXVhdCwgMC4xKTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUucm90YXRpb24gPSBsZXJwUXVhdDtcclxuICAgIC8vIH1cclxuICAgIG9uVHJpZ2dlckVudGVyKGV2ZW50OiBJVHJpZ2dlckV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvblRyaWdnZXJFbnRlclwiLCBldmVudCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNsZWVwXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3RoZXJDb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSBldmVudC5vdGhlckNvbGxpZGVyO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKG90aGVyQ29sbGlkZXIpICYmIGlzVmFsaWQob3RoZXJDb2xsaWRlci5ub2RlKSAmJiBvdGhlckNvbGxpZGVyLm5vZGUubmFtZS5pbmRleE9mKFwiV2FsbFwiKSA+IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgb3RoZXIgY29sbGllciBub2RlXCIsIG90aGVyQ29sbGlkZXIubm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIgJiYgb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKSAmJiAhb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgYXR0YWNrIG51bVwiLCB0aGlzLmJhc2VBdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJc0NvbGxpc2lvbkRlc3Ryb3koKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLXRvLWRlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmV4cG9yZUVmZmVjdFByZWZhYikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5leHBvcmVFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmVtaXQoXCJiZS1hdHRhY2tlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQXR0YWNrTnVtOiB0aGlzLmJhc2VBdHRhY2tOdW0sXHJcbiAgICAgICAgICAgICAgICBiYXNlR2FzTnVtOiB0aGlzLmJhc2VHYXNOdW0sXHJcbiAgICAgICAgICAgICAgICBjYjogKGlzRGVhZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5q275LqGXCIsIGlzRGVhZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXRUb3dlckJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlckJhc2UuZW5lbXlEZWFkQnlUaGlzKGlzRGVhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYmFzZUdhc051bSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbGxpZGVyQ29tcG9uZW50KSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIix0aGlzLm9uQ29sbGlzaW9uRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRNb3ZlVHlwZSgpID09PSAnQmV6aWVyJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXRFbmVteU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMudGFyZ2V0RW5lbXlOb2RlLnBvc2l0aW9uKS5hZGQodjMoMCwgMiwgMCkpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSAqIDAuNSAqIHRoaXMuZ2V0TW92ZVNwZWVkKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubG9va0F0KHRoaXMudGFyZ2V0RW5lbXlOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHBvcy55ICsgdGhpcy5zcGVlZFkgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYueSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2XCIsIHYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHYzKHBvcy54ICsgdi54LCBwb3MueSArIHYueSwgcG9zLnogKyB2LnopKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb2xsaXNpb25Hcm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLmN1cnJlbnRJbml0U3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbml0U3BlZWRZICs9IHRoaXMuY3VycmVudENvc3RBY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbml0U3BlZWRZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnc2xlZXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19