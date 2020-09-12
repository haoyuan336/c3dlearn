System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js", "../GroundMapCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, Vec2, v2, isValid, ProgressBarComponent, find, State, GameController, BaseObject, GroundMapCtl, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfGroundMapCtl(extras) {
    _reporterNs.report("GroundMapCtl", "../GroundMapCtl", _context.meta, extras);
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
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
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
          _this.groundMapCtl = null;
          _this.beAttackedCb = null;

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, startPos, endPos) {
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig);

            this.groundMapCtl = find("GameController").getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl);
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
          value: function showEnemyEnterAnim(index, enemtCtl, gameCtl, startPos, endPos) {
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
                _this2.startRun(startPos, endPos);

                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "startRun",
          value: function startRun(startPos, endPos) {
            var _this3 = this;

            //
            var pathList = this.groundMapCtl.getPathList(startPos, endPos);
            console.log("path list", pathList);
            var tw = new Tween(this.node);

            for (var i = 0; i < pathList.length; i++) {
              tw.to(1, {
                position: pathList[i]
              });
            }

            tw.call(function () {
              _this3.state.setState("over");
            });
            tw.start();
            this.state.setState("run"); // let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent)
            // if (skeleteAnim) {
            //     if (skeleteAnim.defaultClip) {
            //         let defaultClip = skeleteAnim.defaultClip.name;
            //         let animState = skeleteAnim.getState(defaultClip);
            //         let length = animState.length;
            //         animState.speed = this.moveSpeed * this.animSpeedMulOffset;
            //     }
            // }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this4 = this;

            this.state.addState("over", function () {
              _this4.enemyCtl.removeEnemyInList(_this4.node);

              _this4.node.destroy();
            });
            this.state.addState("to-dead", function () {
              if (_this4.currentMoveTw) {
                _this4.currentMoveTw.stop();
              }

              var tw = new Tween(_this4.rootNode);
              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this4.rootNode.active = false;
                _this4.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this4.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this4.caidaiEffect.active = true;
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                _this4.gameController.showAddGoldAnimEffect(_this4.getCurrentGoldCount(), v3(_this4.node.position.x, 0, _this4.node.position.z));
              });
              tw.delay(1);
              tw.call(function () {
                _this4.state.setState("over");
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
            this.state.addState("run", function () {// console.log("start move");
              // let tw = new Tween(this.node);
              // let moveTime = new Vec3(this.startPos).subtract(this.endPos).length() / this.moveSpeed;
              // tw.to(moveTime, { position: this.endPos });
              // tw.call(() => {
              //     // this.state.setState("to-dead");
              // })
              // tw.to(0.2, { scale: v3(0, 0, 0) });
              // tw.call(() => {
              //     this.state.setState("over");
              // })
              // tw.start();
              // this.currentMoveTw = tw;
              // 开始运行之后，计算一条 最短路径
              // let pathList = this.groundMapCtl.getPathList();
              // if (this.healthBar) {
              //     // this.healthBar.active = true;
              // }
            });
            this.node.on("be-attacked", function (data) {
              //被攻击
              // console.log("被攻击", attackNum);
              if (_this4.state.getState() !== 'run') {
                return;
              }

              _this4.beAttackedCb = data.cb;
              _this4.currentHealthCount -= data.baseAttackNum;
              var baseGasNum = data.baseGasNum; //取处基础气值

              _this4.currentGasNum += baseGasNum; // scale = 0;

              var scale = _this4.currentGasNum / _this4.baseGasNum; // console.log("scale", scale);

              var tw = new Tween(_this4.node);
              tw.to(0.2, {
                scale: v3(scale, scale, scale)
              });
              tw.start();

              if (_this4.currentHealthCount <= 0) {
                _this4.currentHealthCount = 0;

                if (_this4.beAttackedCb) {
                  _this4.beAttackedCb(true); //被打死了

                }

                _this4.state.setState("to-dead");
              }

              if (isValid(_this4.healthBar)) {
                _this4.healthBar.getComponent(ProgressBarComponent).progress = _this4.currentHealthCount / _this4.healthCount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJWZWMyIiwidjIiLCJpc1ZhbGlkIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJmaW5kIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJHcm91bmRNYXBDdGwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJoZWFsdGhDb3VudCIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZFBvcyIsInN0YXJ0UG9zIiwiZW5lbXlDdGwiLCJjdXJyZW50TW92ZVR3IiwiZ2FtZUNvbnRyb2xsZXIiLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJnYW1lQ29uZmlnIiwiZ2V0Q29tcG9uZW50Iiwib2JqZWN0VHlwZSIsIkhlYWx0aENvdW50IiwiQmVMb2NrZWRDb3VudCIsImRpcmVjdGlvbiIsInN1YnRyYWN0Iiwibm9ybWFsaXplIiwiYW5nbGUiLCJ4IiwieiIsInNpZ25BbmdsZSIsIm5vZGUiLCJldWxlckFuZ2xlcyIsIk1hdGgiLCJQSSIsImluZGV4IiwiZW5lbXRDdGwiLCJnYW1lQ3RsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsInBvc2l0aW9uIiwiZGVsYXkiLCJzZXQiLCJzY2FsZSIsImNhbGwiLCJhY3RpdmUiLCJ0byIsImVhc2luZyIsInN0YXJ0UnVuIiwic3RhcnQiLCJnZXRQYXRoTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJhZGRTdGF0ZSIsInJlbW92ZUVuZW15SW5MaXN0IiwiZGVzdHJveSIsInN0b3AiLCJyb290Tm9kZSIsImJ5IiwiY2FpZGFpRWZmZWN0IiwicmFuZG9tIiwiZGlzIiwic2hvd0FkZEdvbGRBbmltRWZmZWN0IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsIm9uIiwiZGF0YSIsImdldFN0YXRlIiwiY2IiLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUdhc051bSIsImN1cnJlbnRHYXNOdW0iLCJwcm9ncmVzcyIsInRvd2VyIiwiZGVsdGFUaW1lIiwiY29udmVydFRvVUlOb2RlIiwiZ2V0V29ybGRQb3NpdGlvbiIsInBhcmVudCIsInkiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsSyxPQUFBQSxLO0FBQXdCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsRSxPQUFBQSxFO0FBQXFCQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBdUdDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNsT0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFHQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ1Q7QUFDUUMsTUFBQUEsTyxHQUFzQmQsVSxDQUF0QmMsTztBQUFTQyxNQUFBQSxRLEdBQWFmLFUsQ0FBYmUsUTs7MkJBRUpDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxVQW9CSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWhCO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBbEJGaUIsUSxHQUFtQixFO2dCQUNuQkMsSyxHQUFlO0FBQUE7QUFBQSwrQjtnQkFDZkMsZ0IsR0FBMkIsQztnQkFFM0JDLGMsR0FBeUI7QUFBQTtBQUFBLGdEQUFlQyxpQjtnQkFDeENDLG9CLEdBQXVCLEM7Z0JBQ3ZCQyxVLEdBQThCLEk7Z0JBQzlCQyxTLEdBQWtCLEk7Z0JBQ2xCQyxjLEdBQXlCLEk7Z0JBQ3pCQyxXLEdBQXNCLEM7Z0JBQ3RCQyxrQixHQUE2QixDO2dCQUM1QkMsTSxHQUFlLEk7Z0JBQ2ZDLFEsR0FBaUIsSTtnQkFDakJDLFEsR0FBNEIsSTtnQkFDNUJDLGEsR0FBdUIsSTtnQkFDdkJDLGMsR0FBaUMsSTtnQkFDakNDLFksR0FBNkIsSTtnQkFDN0JDLFksR0FBZSxJOzs7Ozs7Ozs7K0JBR1hDLFUsRUFBb0JOLFEsRUFBZ0JELE0sRUFBYztBQUMxRCxnRkFBV08sVUFBWDs7QUFDQSxpQkFBS0YsWUFBTCxHQUFvQnpCLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCNEIsWUFBdkI7QUFBQTtBQUFBLDZDQUFwQjtBQUNBLGlCQUFLWCxjQUFMLEdBQXNCVSxVQUF0QjtBQUNBLGlCQUFLVCxXQUFMLEdBQW1CLEtBQUtELGNBQUwsQ0FBb0IsS0FBS1ksVUFBekIsRUFBcUNDLFdBQXhEO0FBQ0EsaUJBQUtsQixjQUFMLEdBQXNCLEtBQUtLLGNBQUwsQ0FBb0IsS0FBS1ksVUFBekIsRUFBcUNFLGFBQTNEO0FBQ0EsaUJBQUtaLGtCQUFMLEdBQTBCLEtBQUtELFdBQS9CO0FBQ0EsaUJBQUtFLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGdCQUFJVyxTQUFTLEdBQUcsSUFBSXRDLElBQUosQ0FBUyxLQUFLMkIsUUFBZCxFQUF3QlksUUFBeEIsQ0FBaUMsS0FBS2IsTUFBdEMsRUFBOENjLFNBQTlDLEVBQWhCO0FBQ0EsZ0JBQUlDLEtBQUssR0FBRyxJQUFJdkMsSUFBSixDQUFTb0MsU0FBUyxDQUFDSSxDQUFuQixFQUFzQkosU0FBUyxDQUFDSyxDQUFoQyxFQUFtQ0MsU0FBbkMsQ0FBNkN6QyxFQUFFLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUEvQyxDQUFaO0FBQ0EsaUJBQUswQyxJQUFMLENBQVVDLFdBQVYsR0FBd0IsSUFBSTlDLElBQUosQ0FBUyxDQUFULEVBQVl5QyxLQUFLLEdBQUcsR0FBUixHQUFjTSxJQUFJLENBQUNDLEVBQS9CLEVBQW1DLENBQW5DLENBQXhCO0FBRUg7Ozs2Q0FDa0JDLEssRUFBZUMsUSxFQUEyQkMsTyxFQUF5QnhCLFEsRUFBZ0JELE0sRUFBYztBQUFBOztBQUNoSCxnQkFBSW1CLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUNBLGlCQUFLakIsUUFBTCxHQUFnQnNCLFFBQWhCO0FBQ0EsaUJBQUtwQixjQUFMLEdBQXNCcUIsT0FBdEI7QUFDQSxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJQyxFQUFFLEdBQUcsSUFBSXRELEtBQUosQ0FBVTRDLElBQVYsQ0FBVDtBQUNBLGtCQUFJVyxHQUFHLEdBQUdYLElBQUksQ0FBQ1ksUUFBZjtBQUNBRixjQUFBQSxFQUFFLENBQUNHLEtBQUgsQ0FBUyxNQUFNVCxLQUFmO0FBQ0FNLGNBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPO0FBQUVDLGdCQUFBQSxLQUFLLEVBQUU3RCxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsZUFBUDtBQUNBd0QsY0FBQUEsRUFBRSxDQUFDTSxJQUFILENBQVEsWUFBTTtBQUNWaEIsZ0JBQUFBLElBQUksQ0FBQ2lCLE1BQUwsR0FBYyxJQUFkO0FBQ0gsZUFGRDtBQUdBUCxjQUFBQSxFQUFFLENBQUNRLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUgsZ0JBQUFBLEtBQUssRUFBRTdELEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBWCxlQUFYLEVBUm9DLENBU3BDOztBQUNBd0QsY0FBQUEsRUFBRSxDQUFDUSxFQUFILENBQU0sR0FBTixFQUFXO0FBQUVOLGdCQUFBQSxRQUFRLEVBQUUxRCxFQUFFLENBQUN5RCxHQUFHLENBQUNkLENBQUwsRUFBUSxDQUFSLEVBQVdjLEdBQUcsQ0FBQ2IsQ0FBZjtBQUFkLGVBQVgsRUFBOEM7QUFBRXFCLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUE5QztBQUNBVCxjQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUSxZQUFNO0FBQ1Y7QUFDQSxnQkFBQSxNQUFJLENBQUNJLFFBQUwsQ0FBY3RDLFFBQWQsRUFBd0JELE1BQXhCOztBQUNBMkIsZ0JBQUFBLE9BQU87QUFDVixlQUpEO0FBS0FFLGNBQUFBLEVBQUUsQ0FBQ1csS0FBSDtBQUNILGFBakJNLENBQVA7QUFrQkg7OzttQ0FDUXZDLFEsRUFBZ0JELE0sRUFBYztBQUFBOztBQUVuQztBQUNBLGdCQUFJWCxRQUFRLEdBQUcsS0FBS2dCLFlBQUwsQ0FBa0JvQyxXQUFsQixDQUE4QnhDLFFBQTlCLEVBQXdDRCxNQUF4QyxDQUFmO0FBQ0EwQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCdEQsUUFBekI7QUFDQSxnQkFBSXdDLEVBQUUsR0FBRyxJQUFJdEQsS0FBSixDQUFVLEtBQUs0QyxJQUFmLENBQVQ7O0FBQ0EsaUJBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd2RCxRQUFRLENBQUN3RCxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0Q2YsY0FBQUEsRUFBRSxDQUFDUSxFQUFILENBQU0sQ0FBTixFQUFTO0FBQ0xOLGdCQUFBQSxRQUFRLEVBQUUxQyxRQUFRLENBQUN1RCxDQUFEO0FBRGIsZUFBVDtBQUdIOztBQUNEZixZQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUSxZQUFNO0FBQ1YsY0FBQSxNQUFJLENBQUM3QyxLQUFMLENBQVd3RCxRQUFYLENBQW9CLE1BQXBCO0FBQ0gsYUFGRDtBQUdBakIsWUFBQUEsRUFBRSxDQUFDVyxLQUFIO0FBSUEsaUJBQUtsRCxLQUFMLENBQVd3RCxRQUFYLENBQW9CLEtBQXBCLEVBbEJtQyxDQW1CbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OzttQ0FDUTtBQUFBOztBQUVMLGlCQUFLeEQsS0FBTCxDQUFXeUQsUUFBWCxDQUFvQixNQUFwQixFQUE0QixZQUFNO0FBQzlCLGNBQUEsTUFBSSxDQUFDN0MsUUFBTCxDQUFjOEMsaUJBQWQsQ0FBZ0MsTUFBSSxDQUFDN0IsSUFBckM7O0FBQ0EsY0FBQSxNQUFJLENBQUNBLElBQUwsQ0FBVThCLE9BQVY7QUFFSCxhQUpEO0FBS0EsaUJBQUszRCxLQUFMLENBQVd5RCxRQUFYLENBQW9CLFNBQXBCLEVBQStCLFlBQU07QUFDakMsa0JBQUksTUFBSSxDQUFDNUMsYUFBVCxFQUF3QjtBQUNwQixnQkFBQSxNQUFJLENBQUNBLGFBQUwsQ0FBbUIrQyxJQUFuQjtBQUNIOztBQUNELGtCQUFJckIsRUFBRSxHQUFHLElBQUl0RCxLQUFKLENBQVUsTUFBSSxDQUFDNEUsUUFBZixDQUFUO0FBQ0F0QixjQUFBQSxFQUFFLENBQUN1QixFQUFILENBQU0sR0FBTixFQUFXO0FBQUVsQixnQkFBQUEsS0FBSyxFQUFFN0QsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGVBQVg7QUFDQXdELGNBQUFBLEVBQUUsQ0FBQ00sSUFBSCxDQUFRLFlBQU07QUFDVixnQkFBQSxNQUFJLENBQUNnQixRQUFMLENBQWNmLE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxnQkFBQSxNQUFJLENBQUNpQixZQUFMLENBQWtCakMsV0FBbEIsR0FBZ0MvQyxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQU1nRCxJQUFJLENBQUNpQyxNQUFMLEVBQVYsRUFBeUIsQ0FBekIsQ0FBbEM7QUFDQSxvQkFBSUMsR0FBRyxHQUFHbEYsRUFBRSxDQUFDLE1BQUksQ0FBQzhDLElBQUwsQ0FBVVksUUFBWCxDQUFGLENBQXVCbEIsUUFBdkIsQ0FBZ0N4QyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDLEVBQTZDd0UsTUFBN0MsRUFBVixDQUhVLENBSVY7O0FBQ0Esb0JBQUlVLEdBQUcsR0FBRyxFQUFWLEVBQWM7QUFDVixrQkFBQSxNQUFJLENBQUNGLFlBQUwsQ0FBa0JqQixNQUFsQixHQUEyQixJQUEzQjtBQUNILGlCQVBTLENBUVY7OztBQUNBLGdCQUFBLE1BQUksQ0FBQ2hDLGNBQUwsQ0FBb0JvRCxxQkFBcEIsQ0FBMEMsTUFBSSxDQUFDQyxtQkFBTCxFQUExQyxFQUFzRXBGLEVBQUUsQ0FBQyxNQUFJLENBQUM4QyxJQUFMLENBQVVZLFFBQVYsQ0FBbUJmLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLE1BQUksQ0FBQ0csSUFBTCxDQUFVWSxRQUFWLENBQW1CZCxDQUE3QyxDQUF4RTtBQUNILGVBVkQ7QUFXQVksY0FBQUEsRUFBRSxDQUFDRyxLQUFILENBQVMsQ0FBVDtBQUNBSCxjQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUSxZQUFNO0FBQ1YsZ0JBQUEsTUFBSSxDQUFDN0MsS0FBTCxDQUFXd0QsUUFBWCxDQUFvQixNQUFwQjtBQUNILGVBRkQ7QUFHQWpCLGNBQUFBLEVBQUUsQ0FBQ1csS0FBSCxHQXJCaUMsQ0FzQmpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILGFBaEVEO0FBaUVBLGlCQUFLbEQsS0FBTCxDQUFXeUQsUUFBWCxDQUFvQixLQUFwQixFQUEyQixZQUFNLENBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNILGFBcEJEO0FBcUJBLGlCQUFLNUIsSUFBTCxDQUFVdUMsRUFBVixDQUFhLGFBQWIsRUFBNEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xDO0FBQ0E7QUFDQSxrQkFBSSxNQUFJLENBQUNyRSxLQUFMLENBQVdzRSxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ2pDO0FBQ0g7O0FBQ0QsY0FBQSxNQUFJLENBQUN0RCxZQUFMLEdBQW9CcUQsSUFBSSxDQUFDRSxFQUF6QjtBQUNBLGNBQUEsTUFBSSxDQUFDOUQsa0JBQUwsSUFBMkI0RCxJQUFJLENBQUNHLGFBQWhDO0FBQ0Esa0JBQUlDLFVBQVUsR0FBR0osSUFBSSxDQUFDSSxVQUF0QixDQVJrQyxDQVFBOztBQUVsQyxjQUFBLE1BQUksQ0FBQ0MsYUFBTCxJQUFzQkQsVUFBdEIsQ0FWa0MsQ0FZbEM7O0FBRUEsa0JBQUk3QixLQUFLLEdBQUcsTUFBSSxDQUFDOEIsYUFBTCxHQUFxQixNQUFJLENBQUNELFVBQXRDLENBZGtDLENBZWxDOztBQUNBLGtCQUFJbEMsRUFBRSxHQUFHLElBQUl0RCxLQUFKLENBQVUsTUFBSSxDQUFDNEMsSUFBZixDQUFUO0FBQ0FVLGNBQUFBLEVBQUUsQ0FBQ1EsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFSCxnQkFBQUEsS0FBSyxFQUFFN0QsRUFBRSxDQUFDNkQsS0FBRCxFQUFRQSxLQUFSLEVBQWVBLEtBQWY7QUFBWCxlQUFYO0FBQ0FMLGNBQUFBLEVBQUUsQ0FBQ1csS0FBSDs7QUFFQSxrQkFBSSxNQUFJLENBQUN6QyxrQkFBTCxJQUEyQixDQUEvQixFQUFrQztBQUM5QixnQkFBQSxNQUFJLENBQUNBLGtCQUFMLEdBQTBCLENBQTFCOztBQUNBLG9CQUFJLE1BQUksQ0FBQ08sWUFBVCxFQUF1QjtBQUNuQixrQkFBQSxNQUFJLENBQUNBLFlBQUwsQ0FBa0IsSUFBbEIsRUFEbUIsQ0FFbkI7O0FBQ0g7O0FBQ0QsZ0JBQUEsTUFBSSxDQUFDaEIsS0FBTCxDQUFXd0QsUUFBWCxDQUFvQixTQUFwQjtBQUNIOztBQUNELGtCQUFJcEUsT0FBTyxDQUFDLE1BQUksQ0FBQ2tCLFNBQU4sQ0FBWCxFQUE2QjtBQUN6QixnQkFBQSxNQUFJLENBQUNBLFNBQUwsQ0FBZVksWUFBZixDQUE0QjdCLG9CQUE1QixFQUFrRHNGLFFBQWxELEdBQTZELE1BQUksQ0FBQ2xFLGtCQUFMLEdBQTBCLE1BQUksQ0FBQ0QsV0FBNUY7QUFDSDtBQUVKLGFBaENEO0FBaUNIOzs7a0NBQ08sQ0FDSjtBQUNIOzs7c0NBQ29CO0FBQ2pCLGdCQUFJLEtBQUtSLEtBQUwsQ0FBV3NFLFFBQVgsT0FBMEIsTUFBMUIsSUFBb0MsS0FBS3RFLEtBQUwsQ0FBV3NFLFFBQVgsT0FBMEIsU0FBbEUsRUFBNkU7QUFDekUscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7O3lDQUN1QjtBQUNwQixnQkFBSSxLQUFLbEUsb0JBQUwsR0FBNEIsS0FBS0YsY0FBckMsRUFBcUQ7QUFDakQscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7O3NDQUNXMEUsSyxFQUFhO0FBQ3JCLGlCQUFLeEUsb0JBQUw7QUFDSDs7O3dDQUNhd0UsSyxFQUFhO0FBQ3ZCLGlCQUFLeEUsb0JBQUw7QUFDSDs7O2lDQUNNeUUsUyxFQUFtQjtBQUN0QjtBQUNBLGdCQUFJLEtBQUs3RSxLQUFMLENBQVdzRSxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ2pDLGtCQUFJLEtBQUtoRSxTQUFMLElBQWtCLEtBQUtELFVBQTNCLEVBQXVDO0FBQ25DLG9CQUFJbUMsR0FBUyxHQUFHekQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQjtBQUNBLHFCQUFLc0IsVUFBTCxDQUFnQnlFLGVBQWhCLENBQWdDLEtBQUtqRCxJQUFMLENBQVVrRCxnQkFBVixFQUFoQyxFQUE4RCxLQUFLekUsU0FBTCxDQUFlMEUsTUFBN0UsRUFBcUZ4QyxHQUFyRjtBQUNBQSxnQkFBQUEsR0FBRyxDQUFDeUMsQ0FBSixJQUFTLEVBQVQsQ0FIbUMsQ0FJbkM7O0FBQ0EscUJBQUszRSxTQUFMLENBQWU0RSxXQUFmLENBQTJCMUMsR0FBM0I7QUFDQSxxQkFBS2xDLFNBQUwsQ0FBZXdDLE1BQWYsR0FBd0IsSUFBeEIsQ0FObUMsQ0FPbkM7QUFDSDtBQUNKO0FBQ0o7Ozs7Ozs7Ozs7O2lCQXBPMkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuLCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIHYyLCBKc29uQXNzZXQsIGdhbWUsIGlzVmFsaWQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgYmV6aWVyLCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbi8vIGltcG9ydCB7IEJlc2l6ZSB9IGZyb20gJy4uL3V0aWwvQmVzaXplJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuQGNjY2xhc3MoJ0VuZW15QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHB1YmxpYyBwYXRoTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwdWJsaWMgY3VycmVudFBhdGhJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHB1YmxpYyBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGJlTG9ja2VkTWF4TnVtOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5lbmVteUJlTG9ja01heE51bTtcclxuICAgIHB1YmxpYyBjdXJyZW50YmVMb2NrZWRDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhCYXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGN1cnJlbnRIZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhcnRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbmVteUN0bDogRW5lbXlDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudE1vdmVUdzogVHdlZW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBncm91bmRNYXBDdGw6IEdyb3VuZE1hcEN0bCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJlQXR0YWNrZWRDYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5ncm91bmRNYXBDdGwgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhDb3VudCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5IZWFsdGhDb3VudDtcclxuICAgICAgICB0aGlzLmJlTG9ja2VkTWF4TnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJlTG9ja2VkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBzdGFydFBvcztcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueikuc2lnbkFuZ2xlKHYyKC0xLCAwKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgZ2FtZUN0bDogR2FtZUNvbnRyb2xsZXIsIHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsID0gZW5lbXRDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC4xICogaW5kZXgpXHJcbiAgICAgICAgICAgIHR3LnNldCh7IHNjYWxlOiB2MygwLCAwLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICAvLyBib3VuY2VPdXQgcXVhcnRJblxyXG4gICAgICAgICAgICB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSwgeyBlYXNpbmc6IFwiYm91bmNlT3V0XCIgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnN0YXJ0UnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UnVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydFJ1bihzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0UGF0aExpc3Qoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXRoIGxpc3RcIiwgcGF0aExpc3QpO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdHcudG8oMSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBhdGhMaXN0W2ldXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAvLyBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcclxuICAgICAgICAvLyBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAvLyAgICAgaWYgKHNrZWxldGVBbmltLmRlZmF1bHRDbGlwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgZGVmYXVsdENsaXAgPSBza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcC5uYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGRlZmF1bHRDbGlwKTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICAgICAgYW5pbVN0YXRlLnNwZWVkID0gdGhpcy5tb3ZlU3BlZWQgKiB0aGlzLmFuaW1TcGVlZE11bE9mZnNldDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oXHJcbiAgICAgICAgICAgIC8vICAgICBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudFBvcyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDEwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAvLyBsZXQgcG9pbnRMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMDApO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9pbnQgPSBwb2ludExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc3ViVjMgPSB2Myhwb2ludCkuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGV1bGVyQW5nbGVzID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLnk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoc3ViVjMueCAhPT0gMCAmJiBzdWJWMy56ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXMgPSB2MigxLCAwKS5zaWduQW5nbGUodjIoc3ViVjMueCwgc3ViVjMueikpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHR3LnRvKDAuMDA4LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHBvaW50TGlzdFtpXSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBldWxlckFuZ2xlczogdjMoMCwgZXVsZXJBbmdsZXMsIDApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjYWxlOiB2MygoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnRvKDAuMiAqIHBvaW50TGlzdC5sZW5ndGgsIHtzY2FsZTogdjMoMCwwLDApfSlcclxuICAgICAgICAgICAgLy8gLy8gdHcucGFyYWxsZWwobmV3IFR3ZWVuKHRoaXMubm9kZSkudG8oMC4wMDcgKiBwb2ludExpc3QubGVuZ3RoLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHR3LlxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmJ5KDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubGVuZ3RoKCkgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgLy8gdHcudG8obW92ZVRpbWUsIHsgcG9zaXRpb246IHRoaXMuZW5kUG9zIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0dztcclxuICAgICAgICAgICAgLy8g5byA5aeL6L+Q6KGM5LmL5ZCO77yM6K6h566X5LiA5p2hIOacgOefrei3r+W+hFxyXG4gICAgICAgICAgICAvLyBsZXQgcGF0aExpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRQYXRoTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYmUtYXR0YWNrZWRcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy/ooqvmlLvlh7tcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLooqvmlLvlh7tcIiwgYXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYiA9IGRhdGEuY2I7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50IC09IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICAgICAgbGV0IGJhc2VHYXNOdW0gPSBkYXRhLmJhc2VHYXNOdW07IC8v5Y+W5aSE5Z+656GA5rCU5YC8XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gKz0gYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuY3VycmVudEdhc051bSAvIHRoaXMuYmFzZUdhc051bTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKHNjYWxlLCBzY2FsZSwgc2NhbGUpIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6KKr5omT5q275LqGXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFOb2RlLmNvbnZlcnRUb1VJTm9kZSh0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLmhlYWx0aEJhci5wYXJlbnQsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19