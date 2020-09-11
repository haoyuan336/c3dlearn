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
          _this.gameController = null;
          _this.beAttackedCb = null;

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
          value: function showEnemyEnterAnim(index, enemtCtl, gameCtl) {
            var _this2 = this;

            var node = this.node;
            this.enemyCtl = enemtCtl;
            this.gameController = gameCtl;
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
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                _this3.gameController.showAddGoldAnimEffect(_this3.getCurrentGoldCount(), v3(_this3.node.position.x, 0, _this3.node.position.z));
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

              _this3.beAttackedCb = data.cb;
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

                if (_this3.beAttackedCb) {
                  _this3.beAttackedCb(true); //被打死了

                }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJWZWMyIiwidjIiLCJpc1ZhbGlkIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlCYXNlIiwidHlwZSIsInBhdGhMaXN0Iiwic3RhdGUiLCJjdXJyZW50UGF0aEluZGV4IiwiYmVMb2NrZWRNYXhOdW0iLCJlbmVteUJlTG9ja01heE51bSIsImN1cnJlbnRiZUxvY2tlZENvdW50IiwiY2FtZXJhTm9kZSIsImhlYWx0aEJhciIsImdhbWVDb25maWdKc29uIiwiaGVhbHRoQ291bnQiLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmRQb3MiLCJzdGFydFBvcyIsImVuZW15Q3RsIiwiY3VycmVudE1vdmVUdyIsImdhbWVDb250cm9sbGVyIiwiYmVBdHRhY2tlZENiIiwiZ2FtZUNvbmZpZyIsIm9iamVjdFR5cGUiLCJIZWFsdGhDb3VudCIsIkJlTG9ja2VkQ291bnQiLCJkaXJlY3Rpb24iLCJzdWJ0cmFjdCIsIm5vcm1hbGl6ZSIsImFuZ2xlIiwieCIsInoiLCJzaWduQW5nbGUiLCJub2RlIiwiZXVsZXJBbmdsZXMiLCJNYXRoIiwiUEkiLCJpbmRleCIsImVuZW10Q3RsIiwiZ2FtZUN0bCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJwb3NpdGlvbiIsImRlbGF5Iiwic2V0Iiwic2NhbGUiLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJlYXNpbmciLCJzdGFydFJ1biIsInN0YXJ0Iiwic2V0U3RhdGUiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiZ2V0Q29tcG9uZW50IiwiZGVmYXVsdENsaXAiLCJuYW1lIiwiYW5pbVN0YXRlIiwiZ2V0U3RhdGUiLCJsZW5ndGgiLCJzcGVlZCIsIm1vdmVTcGVlZCIsImFuaW1TcGVlZE11bE9mZnNldCIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95Iiwic3RvcCIsImJ5IiwiY2FpZGFpRWZmZWN0IiwicmFuZG9tIiwiZGlzIiwic2hvd0FkZEdvbGRBbmltRWZmZWN0IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsIm1vdmVUaW1lIiwib24iLCJkYXRhIiwiY2IiLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUdhc051bSIsImN1cnJlbnRHYXNOdW0iLCJwcm9ncmVzcyIsInRvd2VyIiwiZGVsdGFUaW1lIiwiY29udmVydFRvVUlOb2RlIiwiZ2V0V29ybGRQb3NpdGlvbiIsInBhcmVudCIsInkiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBd0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBcUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxvQixPQUFBQSxvQjtBQUEwQ0MsTUFBQUEsMEIsT0FBQUEsMEI7Ozs7QUFDcktDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBRUFDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUdUO0FBQ1FDLE1BQUFBLE8sR0FBc0JiLFUsQ0FBdEJhLE87QUFBU0MsTUFBQUEsUSxHQUFhZCxVLENBQWJjLFE7OzJCQUVKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEMsVUFtQkhDLFFBQVEs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TyxDQUFQLENBQWxCO0FBQ0EscUJBQUtxQixVQUFMLENBQWdCNEUsZUFBaEIsQ0FBZ0MsS0FBS3RELElBQUwsQ0FBVXVELGdCQUFWLEVBQWhDLEVBQThELEtBQUs1RSxTQUFMLENBQWU2RSxNQUE3RSxFQUFxRjdDLEdBQXJGO0FBQ0FBLGdCQUFBQSxHQUFHLENBQUM4QyxDQUFKLElBQVMsRUFBVCxDQUhtQyxDQUluQzs7QUFDQSxxQkFBSzlFLFNBQUwsQ0FBZStFLFdBQWYsQ0FBMkIvQyxHQUEzQjtBQUNBLHFCQUFLaEMsU0FBTCxDQUFlc0MsTUFBZixHQUF3QixJQUF4QixDQU5tQyxDQU9uQztBQUNIO0FBQ0o7QUFDSjs7Ozs7Ozs7Ozs7aUJBaE4yQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJlQXR0YWNrZWRDYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhDb3VudCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5IZWFsdGhDb3VudDtcclxuICAgICAgICB0aGlzLmJlTG9ja2VkTWF4TnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJlTG9ja2VkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBzdGFydFBvcztcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueikuc2lnbkFuZ2xlKHYyKC0xLCAwKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlcixnYW1lQ3RsOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcclxuICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltLmRlZmF1bHRDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdENsaXAgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlZmF1bHRDbGlwKTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnNwZWVkID0gdGhpcy5tb3ZlU3BlZWQgKiB0aGlzLmFuaW1TcGVlZE11bE9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oXHJcbiAgICAgICAgICAgIC8vICAgICBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudFBvcyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDEwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAvLyBsZXQgcG9pbnRMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMDApO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9pbnQgPSBwb2ludExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc3ViVjMgPSB2Myhwb2ludCkuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGV1bGVyQW5nbGVzID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLnk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoc3ViVjMueCAhPT0gMCAmJiBzdWJWMy56ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXMgPSB2MigxLCAwKS5zaWduQW5nbGUodjIoc3ViVjMueCwgc3ViVjMueikpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHR3LnRvKDAuMDA4LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHBvaW50TGlzdFtpXSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBldWxlckFuZ2xlczogdjMoMCwgZXVsZXJBbmdsZXMsIDApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjYWxlOiB2MygoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnRvKDAuMiAqIHBvaW50TGlzdC5sZW5ndGgsIHtzY2FsZTogdjMoMCwwLDApfSlcclxuICAgICAgICAgICAgLy8gLy8gdHcucGFyYWxsZWwobmV3IFR3ZWVuKHRoaXMubm9kZSkudG8oMC4wMDcgKiBwb2ludExpc3QubGVuZ3RoLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHR3LlxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmJ5KDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubGVuZ3RoKCkgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdHcudG8obW92ZVRpbWUsIHsgcG9zaXRpb246IHRoaXMuZW5kUG9zIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0dztcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBiYXNlR2FzTnVtID0gZGF0YS5iYXNlR2FzTnVtOyAvL+WPluWkhOWfuuehgOawlOWAvFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtICs9IGJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgICAgICAvLyBzY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRHYXNOdW0gLyB0aGlzLmJhc2VHYXNOdW07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVcIiwgc2NhbGUpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJlQXR0YWNrZWRDYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ooqvmiZPmrbvkuoZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaGVhbHRoQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuICAgIH1cclxuICAgIGdldElzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3ZlcicgfHwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAndG8tZGVhZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQ2FuTG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCA8IHRoaXMuYmVMb2NrZWRNYXhOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgdW5TZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQtLTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5oZWFsdGhCYXIuc2V0U2NhbGUodjMocG9zLnosIHBvcy56LCBwb3MueikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=