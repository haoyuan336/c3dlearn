System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, Vec2, v2, isValid, ProgressBarComponent, find, State, GameController, BaseObject, GroundMapCtl, FindPathWithAStart, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfFindPathWithAStart(extras) {
    _reporterNs.report("FindPathWithAStart", "../util/FindPathWithAStart", _context.meta, extras);
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
    }, function (_utilFindPathWithAStartJs) {
      FindPathWithAStart = _utilFindPathWithAStartJs.FindPathWithAStart;
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
            // let pathList = this.groundMapCtl.getPathList(startPos, endPos);
            // console.log("path list", pathList);
            // let tw = new Tween(this.node);
            // for (let i = 0; i < pathList.length; i++) {
            //     tw.to(1, {
            //         position: pathList[i]
            //     })
            // }
            // tw.call(() => {
            //     this.state.setState("over");
            // })
            // tw.start();
            var mapNodeList = this.groundMapCtl.getMapNodeList();
            var obsPosList = this.groundMapCtl.getObsPosList();
            var pathTool = new (_crd && FindPathWithAStart === void 0 ? (_reportPossibleCrUseOfFindPathWithAStart({
              error: Error()
            }), FindPathWithAStart) : FindPathWithAStart)(mapNodeList, [startPos.x, startPos.y], [endPos.x, endPos.y]);
            var obsPosDataList = [];

            for (var i = 0; i < obsPosList.length; i++) {
              var obsPos = obsPosList[i];
              obsPosDataList.push([obsPos.x, obsPos.y]);
            }

            pathTool.updateObsData(obsPosDataList);
            var pathList = pathTool.findPathList();
            var pathPosList = [];

            for (var _i = 0; _i < pathList.length; _i++) {
              var pos = pathList[_i];
              pathPosList.push(this.groundMapCtl.getMapNodeList().getValue(pos[0], pos[1]).position);
            }

            var tw = new Tween(this.node);

            for (var _i2 = 0; _i2 < pathPosList.length; _i2++) {
              // let angle = this.node.eulerAngles;
              // if (i !== 0) {
              //     //如果当前的点不是0点 
              //     let startPos = pathPosList[i - 1];
              //     let targetPos = pathPosList[i];
              //     let targetAngle = this.getLookAtAngle(startPos, targetPos);
              //     angle = v3(0, targetAngle, 0);
              // }
              // // let targetAngle = this.getLookAtAngle(pathPosList[i]) * 180 / Math.PI;
              // // console.log("target angle", targetAngle);
              // tw.to(0.01, {
              //     eulerAngles: angle
              // })
              tw.to(1, {
                position: pathPosList[_i2]
              });
            }

            tw.call(function () {
              _this3.state.setState("over");
            }); // this.node.eulerAngles

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
          key: "getLookAtAngle",
          value: function getLookAtAngle(startPos, targetPoint) {
            //获取到朝向的角度
            var vector = v3(startPos).subtract(targetPoint);
            var dir = v2(0, 1);
            var angle = v2(vector.x, vector.z).signAngle(dir);
            return angle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJWZWMyIiwidjIiLCJpc1ZhbGlkIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJmaW5kIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJoZWFsdGhDb3VudCIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZFBvcyIsInN0YXJ0UG9zIiwiZW5lbXlDdGwiLCJjdXJyZW50TW92ZVR3IiwiZ2FtZUNvbnRyb2xsZXIiLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJnYW1lQ29uZmlnIiwiZ2V0Q29tcG9uZW50Iiwib2JqZWN0VHlwZSIsIkhlYWx0aENvdW50IiwiQmVMb2NrZWRDb3VudCIsImRpcmVjdGlvbiIsInN1YnRyYWN0Iiwibm9ybWFsaXplIiwiYW5nbGUiLCJ4IiwieiIsInNpZ25BbmdsZSIsIm5vZGUiLCJldWxlckFuZ2xlcyIsIk1hdGgiLCJQSSIsImluZGV4IiwiZW5lbXRDdGwiLCJnYW1lQ3RsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsInBvc2l0aW9uIiwiZGVsYXkiLCJzZXQiLCJzY2FsZSIsImNhbGwiLCJhY3RpdmUiLCJ0byIsImVhc2luZyIsInN0YXJ0UnVuIiwic3RhcnQiLCJtYXBOb2RlTGlzdCIsImdldE1hcE5vZGVMaXN0Iiwib2JzUG9zTGlzdCIsImdldE9ic1Bvc0xpc3QiLCJwYXRoVG9vbCIsInkiLCJvYnNQb3NEYXRhTGlzdCIsImkiLCJsZW5ndGgiLCJvYnNQb3MiLCJwdXNoIiwidXBkYXRlT2JzRGF0YSIsImZpbmRQYXRoTGlzdCIsInBhdGhQb3NMaXN0IiwiZ2V0VmFsdWUiLCJzZXRTdGF0ZSIsInRhcmdldFBvaW50IiwidmVjdG9yIiwiZGlyIiwiYWRkU3RhdGUiLCJyZW1vdmVFbmVteUluTGlzdCIsImRlc3Ryb3kiLCJzdG9wIiwicm9vdE5vZGUiLCJieSIsImNhaWRhaUVmZmVjdCIsInJhbmRvbSIsImRpcyIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJvbiIsImRhdGEiLCJnZXRTdGF0ZSIsImNiIiwiYmFzZUF0dGFja051bSIsImJhc2VHYXNOdW0iLCJjdXJyZW50R2FzTnVtIiwicHJvZ3Jlc3MiLCJ0b3dlciIsImRlbHRhVGltZSIsImNvbnZlcnRUb1VJTm9kZSIsImdldFdvcmxkUG9zaXRpb24iLCJwYXJlbnQiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLEssT0FBQUEsSztBQUF3QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQXVHQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDbE9DLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBRUFDLE1BQUFB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QUNIOzs7eUNBQ3VCO0FBQ3BCLGdCQUFJLEtBQUsvRSxvQkFBTCxHQUE0QixLQUFLRixjQUFyQyxFQUFxRDtBQUNqRCxxQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7c0NBQ1d1RixLLEVBQWE7QUFDckIsaUJBQUtyRixvQkFBTDtBQUNIOzs7d0NBQ2FxRixLLEVBQWE7QUFDdkIsaUJBQUtyRixvQkFBTDtBQUNIOzs7aUNBQ01zRixTLEVBQW1CO0FBQ3RCO0FBQ0EsZ0JBQUksS0FBSzFGLEtBQUwsQ0FBV21GLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakMsa0JBQUksS0FBSzdFLFNBQUwsSUFBa0IsS0FBS0QsVUFBM0IsRUFBdUM7QUFDbkMsb0JBQUltQyxHQUFTLEdBQUcxRCxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxCO0FBQ0EscUJBQUt1QixVQUFMLENBQWdCc0YsZUFBaEIsQ0FBZ0MsS0FBSzlELElBQUwsQ0FBVStELGdCQUFWLEVBQWhDLEVBQThELEtBQUt0RixTQUFMLENBQWV1RixNQUE3RSxFQUFxRnJELEdBQXJGO0FBQ0FBLGdCQUFBQSxHQUFHLENBQUNnQixDQUFKLElBQVMsRUFBVCxDQUhtQyxDQUluQzs7QUFDQSxxQkFBS2xELFNBQUwsQ0FBZXdGLFdBQWYsQ0FBMkJ0RCxHQUEzQjtBQUNBLHFCQUFLbEMsU0FBTCxDQUFld0MsTUFBZixHQUF3QixJQUF4QixDQU5tQyxDQU9uQztBQUNIO0FBQ0o7QUFDSjs7Ozs7Ozs7Ozs7aUJBalIyQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuZW5lbXlCZUxvY2tNYXhOdW07XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIHN0YXJ0UG9zOiBWZWMzLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kTWFwQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQ291bnQgPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uSGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5iZUxvY2tlZE1heE51bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CZUxvY2tlZENvdW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IGVuZFBvcztcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gc3RhcnRQb3M7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWMzKHRoaXMuc3RhcnRQb3MpLnN1YnRyYWN0KHRoaXMuZW5kUG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSBuZXcgVmVjMihkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnopLnNpZ25BbmdsZSh2MigtMSwgMCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0VuZW15RW50ZXJBbmltKGluZGV4OiBudW1iZXIsIGVuZW10Q3RsOiBFbmVteUNvbnRyb2xsZXIsIGdhbWVDdGw6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bCA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuMSAqIGluZGV4KVxyXG4gICAgICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgLy8gYm91bmNlT3V0IHF1YXJ0SW5cclxuICAgICAgICAgICAgdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGF0aCBsaXN0XCIsIHBhdGhMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDEsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpXVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBhbmdsZSA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcztcclxuICAgICAgICAgICAgLy8gaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIC8v5aaC5p6c5b2T5YmN55qE54K55LiN5pivMOeCuSBcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdGFydFBvcyA9IHBhdGhQb3NMaXN0W2kgLSAxXTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB0YXJnZXRQb3MgPSBwYXRoUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB0YXJnZXRBbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUoc3RhcnRQb3MsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIC8vICAgICBhbmdsZSA9IHYzKDAsIHRhcmdldEFuZ2xlLCAwKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyAvLyBsZXQgdGFyZ2V0QW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHBhdGhQb3NMaXN0W2ldKSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwidGFyZ2V0IGFuZ2xlXCIsIHRhcmdldEFuZ2xlKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4wMSwge1xyXG4gICAgICAgICAgICAvLyAgICAgZXVsZXJBbmdsZXM6IGFuZ2xlXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDEsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXRoUG9zTGlzdFtpXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIC8vIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXApIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkZWZhdWx0Q2xpcCA9IHNrZWxldGVBbmltLmRlZmF1bHRDbGlwLm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdENsaXApO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGxlbmd0aCA9IGFuaW1TdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICBhbmltU3RhdGUuc3BlZWQgPSB0aGlzLm1vdmVTcGVlZCAqIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgZ2V0TG9va0F0QW5nbGUoc3RhcnRQb3MsIHRhcmdldFBvaW50OiBWZWMzKSB7XHJcbiAgICAgICAgLy/ojrflj5bliLDmnJ3lkJHnmoTop5LluqZcclxuICAgICAgICBsZXQgdmVjdG9yID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KTtcclxuICAgICAgICBsZXQgZGlyID0gdjIoMCwgMSk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdjIodmVjdG9yLngsIHZlY3Rvci56KS5zaWduQW5nbGUoZGlyKTtcclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5yZW1vdmVFbmVteUluTGlzdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmV1bGVyQW5nbGVzID0gdjMoMCwgMzYwICogTWF0aC5yYW5kb20oKSwgMClcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHYzKDAsIDAsIDApKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzIFwiLCBkaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA8IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuYWRkRW5lbXlBZGRHb2xkQW5pbSh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnNob3dBZGRHb2xkQW5pbUVmZmVjdCh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgxKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFxyXG4gICAgICAgICAgICAvLyAgICAgW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRQb3MsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAxMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgLy8gbGV0IHBvaW50TGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMTAwKTtcclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBvaW50ID0gcG9pbnRMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHN1YlYzID0gdjMocG9pbnQpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgLy8gICAgIGxldCBldWxlckFuZ2xlcyA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy55O1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHN1YlYzLnggIT09IDAgJiYgc3ViVjMueiAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGV1bGVyQW5nbGVzID0gdjIoMSwgMCkuc2lnbkFuZ2xlKHYyKHN1YlYzLngsIHN1YlYzLnopKSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0dy50bygwLjAwOCwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwb2ludExpc3RbaV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKDAsIGV1bGVyQW5nbGVzLCAwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBzY2FsZTogdjMoKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCksKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCksKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyAvLyB0dy50bygwLjIgKiBwb2ludExpc3QubGVuZ3RoLCB7c2NhbGU6IHYzKDAsMCwwKX0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnBhcmFsbGVsKG5ldyBUd2Vlbih0aGlzLm5vZGUpLnRvKDAuMDA3ICogcG9pbnRMaXN0Lmxlbmd0aCwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSkpO1xyXG4gICAgICAgICAgICAvLyAvLyB0dy5cclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0dy5ieSgwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBtb3ZlXCIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUaW1lID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLmxlbmd0aCgpIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKG1vdmVUaW1lLCB7IHBvc2l0aW9uOiB0aGlzLmVuZFBvcyB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcbiAgICAgICAgICAgIC8vIOW8gOWni+i/kOihjOS5i+WQju+8jOiuoeeul+S4gOadoSDmnIDnn63ot6/lvoRcclxuICAgICAgICAgICAgLy8gbGV0IHBhdGhMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0UGF0aExpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBiYXNlR2FzTnVtID0gZGF0YS5iYXNlR2FzTnVtOyAvL+WPluWkhOWfuuehgOawlOWAvFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtICs9IGJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgICAgICAvLyBzY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRHYXNOdW0gLyB0aGlzLmJhc2VHYXNOdW07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVcIiwgc2NhbGUpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZUF0dGFja2VkQ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iiq+aJk+atu+S6hlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvdmVyJyB8fCB0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICd0by1kZWFkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDYW5Mb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50IDwgdGhpcy5iZUxvY2tlZE1heE51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB1blNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aEJhciAmJiB0aGlzLmNhbWVyYU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gNTA7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==