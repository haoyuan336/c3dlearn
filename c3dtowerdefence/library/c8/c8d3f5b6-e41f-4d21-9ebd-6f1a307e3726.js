System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, Vec2, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, State, GameController, BaseObject, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./../BaseObject", _context.meta, extras);
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
      Node = _cc.Node;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      Vec2 = _cc.Vec2;
      v2 = _cc.v2;
      isValid = _cc.isValid;
      ProgressBarComponent = _cc.ProgressBarComponent;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c8d3fW25B9NIZ69bxowfjcm", "EnemyBase", _context.meta);

      _crd = true;
      // import { Besize } from '../util/Besize';
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyBase", EnemyBase = (_dec = ccclass('EnemyBase'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(EnemyBase, _ref);

        function EnemyBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.pathList = [];
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentPathIndex = 0;
          _this.beLockedMaxNum = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).enemyBeLockMaxNum;
          _this.currentbeLockedCount = 0;
          _this.cameraNode = null;
          _this.healthBar = null;
          _this.gameConfigJson = null;
          _this.healthCount = 0;
          _this.currentHealthCount = 0;
          _this.endPos = null;
          _this.startPos = null;
          _this.enemyCtl = null;
          _this.currentMoveTw = null;

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, startPos, endPos) {
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig);

            this.gameConfigJson = gameConfig;
            this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
            this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
            this.currentHealthCount = this.healthCount;
            this.endPos = endPos;
            this.startPos = startPos;
            var direction = new Vec3(this.startPos).subtract(this.endPos).normalize();
            var angle = new Vec2(direction.x, direction.z).signAngle(v2(-1, 0));
            this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);
          }
        }, {
          key: "showEnemyEnterAnim",
          value: function showEnemyEnterAnim(index, enemtCtl) {
            var _this2 = this;

            var node = this.node;
            this.enemyCtl = enemtCtl;
            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              var pos = node.position;
              tw.delay(0.1 * index);
              tw.set({
                scale: v3(0, 0, 0)
              });
              tw.call(function () {
                node.active = true;
              });
              tw.to(0.1, {
                scale: v3(1, 1, 1)
              }); // bounceOut quartIn

              tw.to(0.4, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: "bounceOut"
              });
              tw.call(function () {
                // node.getComponent(EnemyBase).startRun();
                _this2.startRun();

                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "startRun",
          value: function startRun() {
            this.state.setState("run");
            var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);

            if (skeleteAnim) {
              if (skeleteAnim.defaultClip) {
                var defaultClip = skeleteAnim.defaultClip.name;
                var animState = skeleteAnim.getState(defaultClip);
                var length = animState.length;
                animState.speed = this.moveSpeed * this.animSpeedMulOffset;
              }
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this3 = this;

            this.state.addState("over", function () {
              _this3.enemyCtl.removeEnemyInList(_this3.node);

              _this3.node.destroy();
            });
            this.state.addState("to-dead", function () {
              if (_this3.currentMoveTw) {
                _this3.currentMoveTw.stop();
              }

              var tw = new Tween(_this3.rootNode);
              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this3.rootNode.active = false;
                _this3.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this3.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this3.caidaiEffect.active = true;
                }

                _this3.enemyCtl.addEnemyAddGoldAnim(_this3.getCurrentGoldCount(), v3(_this3.node.position.x, 0, _this3.node.position.z));
              });
              tw.delay(1);
              tw.call(function () {
                _this3.state.setState("over");
              });
              tw.start(); // let currentPos = this.node.position;
              // let bezier = new BezierN(
              //     [
              //         currentPos,
              //         v3(currentPos.x + Math.random() * 100 - 50, 10 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50),
              //         v3(currentPos.x + Math.random() * 100 - 50, 20 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50),
              //         v3(currentPos.x + Math.random() * 100 - 50, 20 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50),
              //         v3(currentPos.x + Math.random() * 100 - 50, 20 + 10 * Math.random(), currentPos.z + Math.random() * 100 - 50)
              //     ]
              // );
              // let pointList = bezier.getPointList(100);
              // let tw = new Tween(this.node);
              // // this.node.eulerAngles
              // for (let i = 0; i < pointList.length; i++) {
              //     let point = pointList[i];
              //     let subV3 = v3(point).subtract(this.node.position)
              //     let eulerAngles = this.node.eulerAngles.y;
              //     if (subV3.x !== 0 && subV3.z !== 0) {
              //         eulerAngles = v2(1, 0).signAngle(v2(subV3.x, subV3.z)) * 180 / Math.PI;
              //     }
              //     tw.to(0.008, {
              //         position: pointList[i],
              //         eulerAngles: v3(0, eulerAngles, 0),
              //         scale: v3((1 - i / pointList.length),(1 - i / pointList.length),(1 - i / pointList.length))
              //     })
              // }
              // tw.call(()=>{
              //     this.state.setState("over");
              // })
              // // tw.to(0.2 * pointList.length, {scale: v3(0,0,0)})
              // // tw.parallel(new Tween(this.node).to(0.007 * pointList.length, { scale: v3(0, 0, 0) }));
              // // tw.
              // tw.start();
              // let tw = new Tween(this.node);
              // tw.by(0.2, { scale: v3(1, 1, 1) });
              // tw.call(() => {
              //     this.state.setState("over");
              // })
              // tw.start();
            });
            this.state.addState("run", function () {
              // console.log("start move");
              var tw = new Tween(_this3.node);

              var moveTime = new Vec3(_this3.startPos).subtract(_this3.endPos).length() / _this3.moveSpeed;

              tw.to(moveTime, {
                position: _this3.endPos
              });
              tw.call(function () {// this.state.setState("to-dead");
              });
              tw.to(0.2, {
                scale: v3(0, 0, 0)
              });
              tw.call(function () {
                _this3.state.setState("over");
              });
              tw.start();
              _this3.currentMoveTw = tw; // if (this.healthBar) {
              //     // this.healthBar.active = true;
              // }
            });
            this.node.on("be-attacked", function (data) {
              //被攻击
              // console.log("被攻击", attackNum);
              if (_this3.state.getState() !== 'run') {
                return;
              }

              _this3.currentHealthCount -= data.baseAttackNum;
              var baseGasNum = data.baseGasNum; //取处基础气值

              _this3.currentGasNum += baseGasNum; // scale = 0;

              var scale = _this3.currentGasNum / _this3.baseGasNum; // console.log("scale", scale);

              var tw = new Tween(_this3.node);
              tw.to(0.2, {
                scale: v3(scale, scale, scale)
              });
              tw.start();

              if (_this3.currentHealthCount <= 0) {
                _this3.currentHealthCount = 0;

                _this3.state.setState("to-dead");
              }

              if (isValid(_this3.healthBar)) {
                _this3.healthBar.getComponent(ProgressBarComponent).progress = _this3.currentHealthCount / _this3.healthCount;
              }
            });
          }
        }, {
          key: "start",
          value: function start() {// this.state.setState("ready");
          }
        }, {
          key: "getIsDead",
          value: function getIsDead() {
            if (this.state.getState() === 'over' || this.state.getState() === 'to-dead') {
              return true;
            }

            return false;
          }
        }, {
          key: "getIsCanLock",
          value: function getIsCanLock() {
            if (this.currentbeLockedCount < this.beLockedMaxNum) {
              return true;
            }

            return false;
          }
        }, {
          key: "setBeLocked",
          value: function setBeLocked(tower) {
            this.currentbeLockedCount++;
          }
        }, {
          key: "unSetBeLocked",
          value: function unSetBeLocked(tower) {
            this.currentbeLockedCount--;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.state.getState() === 'run') {
              if (this.healthBar && this.cameraNode) {
                var pos = v3(0, 0, 0);
                this.cameraNode.convertToUINode(this.node.getWorldPosition(), this.healthBar.parent, pos);
                pos.y += 50; // console.log("pos", pos);

                this.healthBar.setPosition(pos);
                this.healthBar.active = true; // this.healthBar.setScale(v3(pos.z, pos.z, pos.z));
              }
            }
          }
        }]);

        return EnemyBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "caidaiEffect", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJWZWMyIiwidjIiLCJpc1ZhbGlkIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlCYXNlIiwidHlwZSIsInBhdGhMaXN0Iiwic3RhdGUiLCJjdXJyZW50UGF0aEluZGV4IiwiYmVMb2NrZWRNYXhOdW0iLCJlbmVteUJlTG9ja01heE51bSIsImN1cnJlbnRiZUxvY2tlZENvdW50IiwiY2FtZXJhTm9kZSIsImhlYWx0aEJhciIsImdhbWVDb25maWdKc29uIiwiaGVhbHRoQ291bnQiLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmRQb3MiLCJzdGFydFBvcyIsImVuZW15Q3RsIiwiY3VycmVudE1vdmVUdyIsImdhbWVDb25maWciLCJvYmplY3RUeXBlIiwiSGVhbHRoQ291bnQiLCJCZUxvY2tlZENvdW50IiwiZGlyZWN0aW9uIiwic3VidHJhY3QiLCJub3JtYWxpemUiLCJhbmdsZSIsIngiLCJ6Iiwic2lnbkFuZ2xlIiwibm9kZSIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwiaW5kZXgiLCJlbmVtdEN0bCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJwb3NpdGlvbiIsImRlbGF5Iiwic2V0Iiwic2NhbGUiLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJlYXNpbmciLCJzdGFydFJ1biIsInN0YXJ0Iiwic2V0U3RhdGUiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiZ2V0Q29tcG9uZW50IiwiZGVmYXVsdENsaXAiLCJuYW1lIiwiYW5pbVN0YXRlIiwiZ2V0U3RhdGUiLCJsZW5ndGgiLCJzcGVlZCIsIm1vdmVTcGVlZCIsImFuaW1TcGVlZE11bE9mZnNldCIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95Iiwic3RvcCIsImJ5IiwiY2FpZGFpRWZmZWN0IiwicmFuZG9tIiwiZGlzIiwiYWRkRW5lbXlBZGRHb2xkQW5pbSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJtb3ZlVGltZSIsIm9uIiwiZGF0YSIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJjb252ZXJ0VG9VSU5vZGUiLCJnZXRXb3JsZFBvc2l0aW9uIiwicGFyZW50IiwieSIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLEssT0FBQUEsSztBQUF3QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTBDQyxNQUFBQSwwQixPQUFBQSwwQjs7OztBQUNyS0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBR1Q7QUFDUUMsTUFBQUEsTyxHQUFzQmIsVSxDQUF0QmEsTztBQUFTQyxNQUFBQSxRLEdBQWFkLFUsQ0FBYmMsUTs7MkJBRUpDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxVQWlCSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7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Q0o7QUFDSjs7Ozs7Ozs7Ozs7aUJBek0yQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhDb3VudCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5IZWFsdGhDb3VudDtcclxuICAgICAgICB0aGlzLmJlTG9ja2VkTWF4TnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJlTG9ja2VkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBzdGFydFBvcztcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueikuc2lnbkFuZ2xlKHYyKC0xLCAwKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlcikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcclxuICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltLmRlZmF1bHRDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdENsaXAgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlZmF1bHRDbGlwKTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnNwZWVkID0gdGhpcy5tb3ZlU3BlZWQgKiB0aGlzLmFuaW1TcGVlZE11bE9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oXHJcbiAgICAgICAgICAgIC8vICAgICBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudFBvcyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDEwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAvLyBsZXQgcG9pbnRMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMDApO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9pbnQgPSBwb2ludExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc3ViVjMgPSB2Myhwb2ludCkuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGV1bGVyQW5nbGVzID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLnk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoc3ViVjMueCAhPT0gMCAmJiBzdWJWMy56ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXMgPSB2MigxLCAwKS5zaWduQW5nbGUodjIoc3ViVjMueCwgc3ViVjMueikpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHR3LnRvKDAuMDA4LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHBvaW50TGlzdFtpXSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBldWxlckFuZ2xlczogdjMoMCwgZXVsZXJBbmdsZXMsIDApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjYWxlOiB2MygoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnRvKDAuMiAqIHBvaW50TGlzdC5sZW5ndGgsIHtzY2FsZTogdjMoMCwwLDApfSlcclxuICAgICAgICAgICAgLy8gLy8gdHcucGFyYWxsZWwobmV3IFR3ZWVuKHRoaXMubm9kZSkudG8oMC4wMDcgKiBwb2ludExpc3QubGVuZ3RoLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHR3LlxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmJ5KDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubGVuZ3RoKCkgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdHcudG8obW92ZVRpbWUsIHsgcG9zaXRpb246IHRoaXMuZW5kUG9zIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0dztcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLT0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgLy8gc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoc2NhbGUsIHNjYWxlLCBzY2FsZSkgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvdmVyJyB8fCB0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICd0by1kZWFkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDYW5Mb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50IDwgdGhpcy5iZUxvY2tlZE1heE51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB1blNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aEJhciAmJiB0aGlzLmNhbWVyYU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gNTA7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==