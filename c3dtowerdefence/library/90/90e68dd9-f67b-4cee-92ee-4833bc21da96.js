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
              this.targetEnemyNode = targetEnemy; // this.currentDirection = v3(this.targetEnemyNode.position).subtract(this.node.position);
              // let randomV = v3(Math.random() * 2, Math.random() * 2, Math.random() * 2);
              // this.currentDirection.add(randomV);
            }

            var randomV = v3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
            this.currentDirection.add(randomV);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJWZWMzIiwidjMiLCJDb2xsaWRlckNvbXBvbmVudCIsImlzVmFsaWQiLCJRdWF0IiwiVHdlZW4iLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRW5lbXlCYXNlIiwiQmV6aWVyTiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1bGxldEJhc2UiLCJ0eXBlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwidGFyZ2V0VG93ZXJCYXNlIiwidGFyZ2V0RW5lbXlOb2RlIiwibW92ZVBhdGhMaXN0IiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJkYXRhIiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiLCJyYW5kb21WIiwiYWRkIiwicXVhdCIsImZyb21WaWV3VXAiLCJtdWx0aXBseVNjYWxhciIsIm5vcm1hbGl6ZSIsIlVQIiwibm9kZSIsIndvcmxkUm90YXRpb24iLCJnZXRDb21wb25lbnQiLCJvbiIsIm9uVHJpZ2dlckVudGVyIiwiYmluZCIsInNjaGVkdWxlT25jZSIsImRlc3Ryb3kiLCJsZWZ0VGltZSIsImdldE1vdmVUeXBlIiwiZW5kUG9zIiwicG9zaXRpb24iLCJtaWRkbGUiLCJjdGxQb3MiLCJnZXRQb2ludExpc3QiLCJ0dyIsInByb2Nlc3NNb3ZlIiwiY2FsbCIsInNldFN0YXRlIiwic3RhcnQiLCJwYXRoTGlzdCIsImkiLCJsZW5ndGgiLCJwcm9jZXNzUG9zQW5kUXVhdCIsInBvcyIsImJlZm9yUG9zIiwiZGlyIiwic3VidHJhY3QiLCJkaXMiLCJ0aW1lIiwiZ2V0TW92ZVNwZWVkIiwibG9va0F0IiwidG8iLCJldmVudCIsIm90aGVyQ29sbGlkZXIiLCJuYW1lIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJc0RlYWQiLCJnZXRJc0NvbGxpc2lvbkRlc3Ryb3kiLCJleHBvcmVFZmZlY3RQcmVmYWIiLCJyb290Tm9kZSIsImFjdGl2ZSIsInBhcmVudCIsImJ5Iiwic2NhbGUiLCJlbWl0IiwiYmFzZUdhc051bSIsImNiIiwiaXNEZWFkIiwiZW5lbXlEZWFkQnlUaGlzIiwiZGVsdGFUaW1lIiwiZ2V0U3RhdGUiLCJ5IiwidiIsIm1vdmVTcGVlZCIsInNldFBvc2l0aW9uIiwieCIsInoiLCJnZXRQb3NpdGlvbiIsImlzQ29sbGlzaW9uR3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBb0JDLE1BQUFBLGlCLE9BQUFBLGlCO0FBQTZFQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQ3hLQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUVBQyxNQUFBQSxPLGtCQUFBQSxPOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQmQsVSxDQUF0QmMsTztBQUFTQyxNQUFBQSxRLEdBQWFmLFUsQ0FBYmUsUTs7NEJBR0pDLFUs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QyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MywgdjIsIFZlYzIsIG1hdGgsIENvbGxpZGVyQ29tcG9uZW50LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgVHJpZ2dlckV2ZW50VHlwZSwgSVRyaWdnZXJFdmVudCwgaXNWYWxpZCwgUXVhdCwgcGF0aCwgVHdlZW4sIFByZWZhYiwgaW5zdGFudGlhdGUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdCdWxsZXRCYXNlJylcclxuZXhwb3J0IGNsYXNzIEJ1bGxldEJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIHNwZWVkWTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYWNjWTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgIHByaXZhdGUgY3VycmVudERpcmVjdGlvbjogVmVjMyA9IHYzKDAsIDApO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDIwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5pdFNwZWVkWSA9IDY7IC8v5by56LW355qE5Yid5aeL6YCf5bqmXHJcbiAgICBwcml2YXRlIGN1cnJlbnRDb3N0QWNjID0gLTM7ICAgLy/lvLnotbfnmoTog73ph4/mjZ/lpLFcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyBib2R5Tm9kZTogTm9kZSA9IG51bGw7Ly/ouqvkvZNcclxuICAgIHByaXZhdGUgbWF4TGVmdFRpbWU6IG51bWJlciA9IDEgKyBNYXRoLnJhbmRvbSgpOyAvL+acgOWkp+eUn+WtmOaXtumXtFxyXG4gICAgcHJpdmF0ZSBjb2xsaWRlckNvbXBvbmVudDogQ29sbGlkZXJDb21wb25lbnQgPSBudWxsOyAvL+eisOaSnue7hOS7tlxyXG5cclxuICAgIC8vIHByb3RlY3RlZCBiYXNlQXR0YWNrTnVtOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+WAvFxyXG4gICAgcHJvdGVjdGVkIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSB7fTsgLy/muLjmiI/phY3nva5cclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXJCYXNlOiBUb3dlckJhc2UgPSBudWxsOyAvL+ebruagh+WhlFxyXG4gICAgcHJpdmF0ZSB0YXJnZXRFbmVteU5vZGU6IE5vZGUgPSBudWxsOyAvL+ebruagh+aVjOS6ulxyXG4gICAgcHJpdmF0ZSBtb3ZlUGF0aExpc3Q6IFZlYzNbXSA9IFtdOyAvL+enu+WKqOi3r+W+hFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGV4cG9yZUVmZmVjdFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJpbml0LWRhdGFcIiwgKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJzbGVlcFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYm9keU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCk9PntcclxuXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpbml0KGdhbWVDb25maWc6IHt9LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIGRhdGEpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmJhc2VBdHRhY2tOdW0gKz0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VG93ZXJCYXNlID0gZGF0YS50YXJnZXRUb3dlcjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJhc2UgYXR0YWNrIG51bVwiLCB0aGlzLmJhc2VBdHRhY2tOdW0pO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBkYXRhLmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgLy8gbGV0IGFuZ2xlOiBudW1iZXIgPSBuZXcgVmVjMihkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpLnNpZ25BbmdsZSh2MigwLCAtMSkpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmxvb2tBdCgpOy9cclxuICAgICAgICBsZXQgdGFyZ2V0RW5lbXk6IE5vZGUgPSBkYXRhLnRhcmdldEVuZW15O1xyXG4gICAgICAgIGlmICh0YXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEVuZW15Tm9kZSA9IHRhcmdldEVuZW15O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSB2Myh0aGlzLnRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy8gbGV0IHJhbmRvbVYgPSB2MyhNYXRoLnJhbmRvbSgpICogMiwgTWF0aC5yYW5kb20oKSAqIDIsIE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50RGlyZWN0aW9uLmFkZChyYW5kb21WKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJhbmRvbVYgPSB2MyhNYXRoLnJhbmRvbSgpICogMiAtIDEsIE1hdGgucmFuZG9tKCkqIDIgLSAxLCBNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbi5hZGQocmFuZG9tVik7XHJcblxyXG4gICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgdjMoZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcigtMSkubm9ybWFsaXplKCksIFZlYzMuVVApO1xyXG4gICAgICAgIHRoaXMubm9kZS53b3JsZFJvdGF0aW9uID0gcXVhdDtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25UcmlnZ2VyRW50ZXJcIiwgdGhpcy5vblRyaWdnZXJFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcy5sZWZ0VGltZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKSA9PT0gJ0JlemllcicpIHtcclxuICAgICAgICAgICAgLy/lrZDlvLnnmoTnp7vliqjmlrnlvI/mmK/otJ3loZ7lsJTmm7Lnur/mlrnlvI9cclxuICAgICAgICAgICAgLy8gIGxldCBjdGxQb3MgPSBbdGhpcy5ub2RlLnBvc2l0aW9uXTtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXRFbmVteU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy50YXJnZXRFbmVteU5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZW5kUG9zKS5tdWx0aXBseVNjYWxhcigwLjUpLmFkZCh2MygwLCAxNSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN0bFBvcyA9IFt0aGlzLm5vZGUucG9zaXRpb24sIG1pZGRsZSwgZW5kUG9zXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVBhdGhMaXN0ID0gbmV3IEJlemllck4oY3RsUG9zKS5nZXRQb2ludExpc3QoNTApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gdGhpcy5wcm9jZXNzTW92ZSh0aGlzLm1vdmVQYXRoTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01vdmUocGF0aExpc3Q6IFZlYzNbXSk6IFR3ZWVuIHtcclxuXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NQb3NBbmRRdWF0KHR3LCBwYXRoTGlzdFtpXSwgcGF0aExpc3RbaSAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc1Bvc0FuZFF1YXQodHc6IFR3ZWVuLCBwb3M6IFZlYzMsIGJlZm9yUG9zOiBWZWMzKSB7XHJcblxyXG5cclxuICAgICAgICAvLyB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQocG9zKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGxldCBkaXIgPSB2MyhiZWZvclBvcykuc3VidHJhY3QocG9zKTtcclxuICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIGxldCB0aW1lID0gZGlzIC8gdGhpcy5nZXRNb3ZlU3BlZWQoKTtcclxuICAgICAgICAvLyBjb25zdCB1cGRhdGVDYiA9ICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIC8vICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgdjMoZGlyKS5tdWx0aXBseVNjYWxhcigtMSkubm9ybWFsaXplKCksIFZlYzMuVVApO1xyXG4gICAgICAgIC8vICAgICBsZXQgbGVycFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIC8vICAgICBRdWF0LmxlcnAobGVycFF1YXQsIHRoaXMubm9kZS5yb3RhdGlvbiwgcXVhdCwgMC4xKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gbGVycFF1YXQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHVwZGF0ZUNiLCAxIC8gNjApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUubG9va0F0KHBvcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZUNiKGRpcil7XHJcbiAgICAvLyAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgLy8gICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCB2MyhkaXIpLm5vcm1hbGl6ZSgpLCBWZWMzLlVQKTtcclxuICAgIC8vICAgICBsZXQgbGVycFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgLy8gICAgIFF1YXQubGVycChsZXJwUXVhdCwgbGVycFF1YXQsIHF1YXQsIDAuMSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gbGVycFF1YXQ7XHJcbiAgICAvLyB9XHJcbiAgICBvblRyaWdnZXJFbnRlcihldmVudDogSVRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25UcmlnZ2VyRW50ZXJcIiwgZXZlbnQpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzbGVlcFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG90aGVyQ29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gZXZlbnQub3RoZXJDb2xsaWRlcjtcclxuICAgICAgICBpZiAoaXNWYWxpZChvdGhlckNvbGxpZGVyKSAmJiBpc1ZhbGlkKG90aGVyQ29sbGlkZXIubm9kZSkgJiYgb3RoZXJDb2xsaWRlci5ub2RlLm5hbWUuaW5kZXhPZihcIldhbGxcIikgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG90aGVyIGNvbGxpZXIgbm9kZVwiLCBvdGhlckNvbGxpZGVyLm5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyICYmIG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiYgIW90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXNDb2xsaXNpb25EZXN0cm95KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci10by1kZXN0cm95XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5leHBvcmVFZmZlY3RQcmVmYWIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZXhwb3JlRWZmZWN0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5lbWl0KFwiYmUtYXR0YWNrZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgYmFzZUF0dGFja051bTogdGhpcy5iYXNlQXR0YWNrTnVtLFxyXG4gICAgICAgICAgICAgICAgYmFzZUdhc051bTogdGhpcy5iYXNlR2FzTnVtLFxyXG4gICAgICAgICAgICAgICAgY2I6IChpc0RlYWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuatu+S6hlwiLCBpc0RlYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0VG93ZXJCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXJCYXNlLmVuZW15RGVhZEJ5VGhpcyhpc0RlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmJhc2VHYXNOdW0gIT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyB0aGlzLmNvbGxpZGVyQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChCdWxsZXRCYXNlKTtcclxuICAgICAgICAvLyAvL+iOt+WPlueisOaSnue7hOS7tlxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGUgdXVpZFwiLCB0aGlzLm5vZGUudXVpZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsaWRlcjpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xsaWRlckNvbXBvbmVudCkpO1xyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQub24oXCJvbkNvbGxpc2lvbkVudGVyXCIsdGhpcy5vbkNvbGxpc2lvbkVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKSA9PT0gJ0JlemllcicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0RW5lbXlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLnRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbikuYWRkKHYzKDAsIDIsIDApKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpci5tdWx0aXBseVNjYWxhcihkZWx0YVRpbWUgKiAwLjUgKiB0aGlzLmdldE1vdmVTcGVlZCgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmxvb2tBdCh0aGlzLnRhcmdldEVuZW15Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBwb3MueSArIHRoaXMuc3BlZWRZICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgICAgIGlmICh2LnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi55ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgcG9zLnkgKyB2LnksIHBvcy56ICsgdi56KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5jdXJyZW50SW5pdFNwZWVkWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5pdFNwZWVkWSArPSB0aGlzLmN1cnJlbnRDb3N0QWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5pdFNwZWVkWSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3NsZWVwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==