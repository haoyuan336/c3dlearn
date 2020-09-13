System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js", "../util/BezierN.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, find, State, GameController, BaseObject, BezierN, GroundMapCtl, FindPathWithAStart, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfBezierN(extras) {
    _reporterNs.report("BezierN", "../util/BezierN", _context.meta, extras);
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
      v2 = _cc.v2;
      isValid = _cc.isValid;
      ProgressBarComponent = _cc.ProgressBarComponent;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
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
          _this.enemyCtl = null;
          _this.currentMoveTw = null;
          _this.gameController = null;
          _this.groundMapCtl = null;
          _this.beAttackedCb = null;
          _this.bezierPathList = [];

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
            this.currentHealthCount = this.healthCount; // this.endPos = endPos;
            // this.startPos = startPos;
            // let direction = new Vec3(this.startPos).subtract(this.endPos).normalize();
            // let angle = new Vec2(direction.x, direction.z).signAngle(v2(-1, 0));
            // this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);

            var angle = this.getLookAtAngle(this.node.position, endPos);
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
              // tw.to(0.4, { position: v3(pos.x, 0, pos.z) }, { easing: "bounceOut" })

              tw.to(0.4, {
                position: v3(pos.x, 0, pos.z)
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
            } // let tw = new Tween(this.node);


            var bezier = new (_crd && BezierN === void 0 ? (_reportPossibleCrUseOfBezierN({
              error: Error()
            }), BezierN) : BezierN)(pathPosList); //通过获取到的 路径点，来制作一条贝塞尔曲线

            this.bezierPathList = bezier.getPointList(30); //路径密度为20
            // let allLength = BezierN.getPathLength(this.bezierPathList);
            // let preTime = allLength / this.moveSpeed;

            var tw = new Tween(this.node);

            for (var _i2 = 0; _i2 < this.bezierPathList.length; _i2++) {
              var time = 0; // let targetPos =

              var angle = 0;

              if (_i2 === 0) {
                var dis = v3(this.node.position).subtract(this.bezierPathList[_i2]).length();
                time = dis / this.moveSpeed;
                angle = this.getLookAtAngle(this.node.position, this.bezierPathList[_i2]);
              } else {
                var _dis = v3(this.bezierPathList[_i2 - 1]).subtract(this.bezierPathList[_i2]).length();

                angle = this.getLookAtAngle(this.bezierPathList[_i2 - 1], this.bezierPathList[_i2]);
                time = _dis / this.moveSpeed;
              } // this.node.eulerAngles
              // let preTime = v3(this.)
              // tw.set({ eulerAngles: v3(0, angle * 180 / Math.PI, 0) })


              tw.to(time, {
                position: this.bezierPathList[_i2],
                eulerAngles: v3(0, angle * 180 / Math.PI, 0)
              });
            }

            tw.start();
            this.currentMoveTw = tw;
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
            var dir = v2(-1, 0);
            var angle = v2(vector.x, vector.z).signAngle(dir);
            return angle;
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
              //开始移动 
              var skeleteAnim = _this3.rootNode.getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                skeleteAnim.play("骨架|MoveAnim"); // let clips = skeleteAnim.clips;
                // let moveClip = null;
                // for (let i = 0 ; i < clips.length ; i ++){
                //     // moveClips = clips[i];
                //     let clip = clips[i];
                //     console.log("clip name", clip.name);
                //     if (clip.name === '骨架|MoveAnim'){
                //         moveClip = clip;
                //     }
                // }
                // if (moveClip){
                //     skeleteAnim.play(moveClip.)
                // }
              } // console.log("start move");
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
          value: function update(deltaTime) {// Your update function goes here.
            //     if (this.state.getState() === 'run') {
            //         if (!this.currentMovePos) {
            //             if (this.currentMoveIndex < this.bezierPathList.length) {
            //                 this.currentMovePos = this.bezierPathList[this.currentMoveIndex];
            //             } else {
            //                 //移动结束
            //                 console.log("move over");
            //             }
            //         } else {
            //             let dir = v3(this.currentMovePos).subtract(this.node.position).normalize();
            //             let dis = dir.length();
            //             console.log("dis", dis);
            //             if (dis > 1) {
            //                 this.node.position = v3(this.node.position).add(dir.normalize().multiplyScalar(deltaTime));
            //             } else {
            //                 this.currentMoveIndex++;
            //                 this.currentMovePos = null;
            //             }
            //         }
            //         // if (this.healthBar && this.cameraNode) {
            //         //     let pos: Vec3 = v3(0, 0, 0);
            //         //     this.cameraNode.convertToUINode(this.node.getWorldPosition(), this.healthBar.parent, pos);
            //         //     pos.y += 50;
            //         //     // console.log("pos", pos);
            //         //     this.healthBar.setPosition(pos);
            //         //     this.healthBar.active = true;
            //         //     // this.healthBar.setScale(v3(pos.z, pos.z, pos.z));
            //         // }
            //     }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiQmV6aWVyTiIsIkdyb3VuZE1hcEN0bCIsIkZpbmRQYXRoV2l0aEFTdGFydCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15QmFzZSIsInR5cGUiLCJwYXRoTGlzdCIsInN0YXRlIiwiY3VycmVudFBhdGhJbmRleCIsImJlTG9ja2VkTWF4TnVtIiwiZW5lbXlCZUxvY2tNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImhlYWx0aENvdW50IiwiY3VycmVudEhlYWx0aENvdW50IiwiZW5lbXlDdGwiLCJjdXJyZW50TW92ZVR3IiwiZ2FtZUNvbnRyb2xsZXIiLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImdhbWVDb25maWciLCJzdGFydFBvcyIsImVuZFBvcyIsImdldENvbXBvbmVudCIsIm9iamVjdFR5cGUiLCJIZWFsdGhDb3VudCIsIkJlTG9ja2VkQ291bnQiLCJhbmdsZSIsImdldExvb2tBdEFuZ2xlIiwibm9kZSIsInBvc2l0aW9uIiwiZXVsZXJBbmdsZXMiLCJNYXRoIiwiUEkiLCJpbmRleCIsImVuZW10Q3RsIiwiZ2FtZUN0bCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJkZWxheSIsInNldCIsInNjYWxlIiwiY2FsbCIsImFjdGl2ZSIsInRvIiwieCIsInoiLCJzdGFydFJ1biIsInN0YXJ0IiwibWFwTm9kZUxpc3QiLCJnZXRNYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJ5Iiwib2JzUG9zRGF0YUxpc3QiLCJpIiwibGVuZ3RoIiwib2JzUG9zIiwicHVzaCIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsImdldFZhbHVlIiwiYmV6aWVyIiwiZ2V0UG9pbnRMaXN0IiwidGltZSIsImRpcyIsInN1YnRyYWN0IiwibW92ZVNwZWVkIiwic2V0U3RhdGUiLCJ0YXJnZXRQb2ludCIsInZlY3RvciIsImRpciIsInNpZ25BbmdsZSIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95Iiwic3RvcCIsInJvb3ROb2RlIiwiYnkiLCJjYWlkYWlFZmZlY3QiLCJyYW5kb20iLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic2tlbGV0ZUFuaW0iLCJwbGF5Iiwib24iLCJkYXRhIiwiZ2V0U3RhdGUiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsSyxPQUFBQSxLO0FBQThCQyxNQUFBQSxFLE9BQUFBLEU7QUFBcUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxvQixPQUFBQSxvQjtBQUEwQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNkRDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNsT0MsTUFBQUEsSyxn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QUFDekUscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7O3lDQUN1QjtBQUNwQixnQkFBSSxLQUFLcEYsb0JBQUwsR0FBNEIsS0FBS0YsY0FBckMsRUFBcUQ7QUFDakQscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7O3NDQUNXNEYsSyxFQUFhO0FBQ3JCLGlCQUFLMUYsb0JBQUw7QUFDSDs7O3dDQUNhMEYsSyxFQUFhO0FBQ3ZCLGlCQUFLMUYsb0JBQUw7QUFDSDs7O2lDQUNNMkYsUyxFQUFtQixDQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSDs7Ozs7Ozs7Ozs7aUJBeFUyQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuZW5lbXlCZUxvY2tNYXhOdW07XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmV6aWVyUGF0aExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZVBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYWlkYWlFZmZlY3Q6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBzdGFydFBvczogVmVjMywgZW5kUG9zOiBWZWMzKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgLy8gdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFydFBvcyA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIC8vIGxldCBkaXJlY3Rpb24gPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gbGV0IGFuZ2xlID0gbmV3IFZlYzIoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi56KS5zaWduQW5nbGUodjIoLTEsIDApKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dFbmVteUVudGVyQW5pbShpbmRleDogbnVtYmVyLCBlbmVtdEN0bDogRW5lbXlDb250cm9sbGVyLCBnYW1lQ3RsOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGF0aCBsaXN0XCIsIHBhdGhMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDEsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpXVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICAvLyBsZXQgYWxsTGVuZ3RoID0gQmV6aWVyTi5nZXRQYXRoTGVuZ3RoKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG4gICAgICAgIC8vIGxldCBwcmVUaW1lID0gYWxsTGVuZ3RoIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLmJlemllclBhdGhMaXN0W2ldKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHRoaXMuYmV6aWVyUGF0aExpc3RbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMuYmV6aWVyUGF0aExpc3RbaSAtIDFdKS5zdWJ0cmFjdCh0aGlzLmJlemllclBhdGhMaXN0W2ldKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLmJlemllclBhdGhMaXN0W2kgLSAxXSwgdGhpcy5iZXppZXJQYXRoTGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGxldCBwcmVUaW1lID0gdjModGhpcy4pXHJcbiAgICAgICAgICAgIC8vIHR3LnNldCh7IGV1bGVyQW5nbGVzOiB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmJlemllclBhdGhMaXN0W2ldLFxyXG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgLy8gbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgLy8gaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRlZmF1bHRDbGlwID0gc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXAubmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZWZhdWx0Q2xpcCk7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aDtcclxuICAgICAgICAvLyAgICAgICAgIGFuaW1TdGF0ZS5zcGVlZCA9IHRoaXMubW92ZVNwZWVkICogdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQ7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpIHtcclxuICAgICAgICAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG4gICAgICAgIGxldCB2ZWN0b3IgPSB2MyhzdGFydFBvcykuc3VidHJhY3QodGFyZ2V0UG9pbnQpO1xyXG4gICAgICAgIGxldCBkaXIgPSB2MigtMSwgMCk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdjIodmVjdG9yLngsIHZlY3Rvci56KS5zaWduQW5nbGUoZGlyKTtcclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5yZW1vdmVFbmVteUluTGlzdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmV1bGVyQW5nbGVzID0gdjMoMCwgMzYwICogTWF0aC5yYW5kb20oKSwgMClcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHYzKDAsIDAsIDApKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzIFwiLCBkaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA8IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuYWRkRW5lbXlBZGRHb2xkQW5pbSh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnNob3dBZGRHb2xkQW5pbUVmZmVjdCh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgxKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFxyXG4gICAgICAgICAgICAvLyAgICAgW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRQb3MsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAxMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgLy8gbGV0IHBvaW50TGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMTAwKTtcclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBvaW50ID0gcG9pbnRMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHN1YlYzID0gdjMocG9pbnQpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgLy8gICAgIGxldCBldWxlckFuZ2xlcyA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy55O1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHN1YlYzLnggIT09IDAgJiYgc3ViVjMueiAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGV1bGVyQW5nbGVzID0gdjIoMSwgMCkuc2lnbkFuZ2xlKHYyKHN1YlYzLngsIHN1YlYzLnopKSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0dy50bygwLjAwOCwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwb2ludExpc3RbaV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKDAsIGV1bGVyQW5nbGVzLCAwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBzY2FsZTogdjMoKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCksKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCksKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyAvLyB0dy50bygwLjIgKiBwb2ludExpc3QubGVuZ3RoLCB7c2NhbGU6IHYzKDAsMCwwKX0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnBhcmFsbGVsKG5ldyBUd2Vlbih0aGlzLm5vZGUpLnRvKDAuMDA3ICogcG9pbnRMaXN0Lmxlbmd0aCwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSkpO1xyXG4gICAgICAgICAgICAvLyAvLyB0dy5cclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0dy5ieSgwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKXtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgICAgIC8vIGxldCBtb3ZlQ2xpcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCBjbGlwcy5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBtb3ZlQ2xpcHMgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2xpcCBuYW1lXCIsIGNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ+mqqOaetnxNb3ZlQW5pbScpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtb3ZlQ2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG1vdmVDbGlwKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KG1vdmVDbGlwLilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBtb3ZlXCIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUaW1lID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLmxlbmd0aCgpIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKG1vdmVUaW1lLCB7IHBvc2l0aW9uOiB0aGlzLmVuZFBvcyB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcbiAgICAgICAgICAgIC8vIOW8gOWni+i/kOihjOS5i+WQju+8jOiuoeeul+S4gOadoSDmnIDnn63ot6/lvoRcclxuICAgICAgICAgICAgLy8gbGV0IHBhdGhMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0UGF0aExpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBiYXNlR2FzTnVtID0gZGF0YS5iYXNlR2FzTnVtOyAvL+WPluWkhOWfuuehgOawlOWAvFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtICs9IGJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgICAgICAvLyBzY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRHYXNOdW0gLyB0aGlzLmJhc2VHYXNOdW07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVcIiwgc2NhbGUpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZUF0dGFja2VkQ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iiq+aJk+atu+S6hlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvdmVyJyB8fCB0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICd0by1kZWFkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDYW5Mb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50IDwgdGhpcy5iZUxvY2tlZE1heE51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB1blNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRNb3ZlUG9zKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVJbmRleCA8IHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSB0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuY3VycmVudE1vdmVJbmRleF07XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8v56e75Yqo57uT5p2fXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBvdmVyXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMuY3VycmVudE1vdmVQb3MpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpcyA9IGRpci5sZW5ndGgoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc1wiLCBkaXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkaXMgPiAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpci5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihkZWx0YVRpbWUpKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhciAmJiB0aGlzLmNhbWVyYU5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBsZXQgcG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmFOb2RlLmNvbnZlcnRUb1VJTm9kZSh0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLmhlYWx0aEJhci5wYXJlbnQsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgcG9zLnkgKz0gNTA7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuc2V0U2NhbGUodjMocG9zLnosIHBvcy56LCBwb3MueikpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=