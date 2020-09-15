System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js", "../EnemyController.js", "../util/BezierN.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, find, State, GameController, BaseObject, DeadEnemyObj, BezierN, GroundMapCtl, FindPathWithAStart, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfDeadEnemyObj(extras) {
    _reporterNs.report("DeadEnemyObj", "../EnemyController", _context.meta, extras);
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
    }, function (_EnemyControllerJs) {
      DeadEnemyObj = _EnemyControllerJs.DeadEnemyObj;
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
          _this.currentBoneAnimName = "";

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
          key: "enterShowBossEnter",
          value: function enterShowBossEnter() {
            if (this.currentMoveTw) {
              this.currentMoveTw.stop();
            }
          }
        }, {
          key: "contiuePlayMoveAnim",
          value: function contiuePlayMoveAnim() {
            var _this2 = this;

            //继续行走
            if (this.currentMoveTw) {
              var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              var state = skeleteAnim.getState(this.currentBoneAnimName);
              state.speed = 3;
              this.scheduleOnce(function () {
                // this.currentMoveTw.start();
                var skeleteAnim = _this2.rootNode.getComponent(SkeletalAnimationComponent);

                var currentState = skeleteAnim.getState(_this2.currentBoneAnimName);
                currentState.speed = 1;
              }, 3);
            }
          }
        }, {
          key: "showEnemyEnterAnim",
          value: function showEnemyEnterAnim(index, enemtCtl, gameCtl, startPos, endPos) {
            var _this3 = this;

            var node = this.node;
            this.enemyCtl = enemtCtl;
            this.gameController = gameCtl; // this.enemyCtl.node.on('enter-show-boss-enter-state', this.enterShowBossEnter, this);
            // this.enemyCtl.node.on("enter-continue-play-move-anim", this.contiuePlayMoveAnim, this);

            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              var pos = node.position;
              tw.delay(0.1 * index);
              tw.set({
                scale: v3(0, 0, 0)
              });
              tw.show();
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
                _this3.startRun(startPos, endPos);

                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "startRun",
          value: function startRun(startPos, endPos) {
            var _this4 = this;

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

            tw.call(function () {
              _this4.state.setState("over");
            });
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
            var _this5 = this;

            this.state.addState("over", function () {
              _this5.enemyCtl.removeEnemyInList(_this5.node);

              _this5.node.destroy();
            });
            this.state.addState("to-dead", function () {
              _this5.enemyCtl.pushOneEnemyDeadData(new (_crd && DeadEnemyObj === void 0 ? (_reportPossibleCrUseOfDeadEnemyObj({
                error: Error()
              }), DeadEnemyObj) : DeadEnemyObj)(_this5.objectType, _this5.getCurrentGoldCount()));

              if (_this5.currentMoveTw) {
                _this5.currentMoveTw.stop();
              }

              var tw = new Tween(_this5.rootNode);
              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this5.rootNode.active = false;
                _this5.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this5.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this5.caidaiEffect.active = true;
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                _this5.gameController.showAddGoldAnimEffect(_this5.getCurrentGoldCount(), v3(_this5.node.position.x, 0, _this5.node.position.z));
              });
              tw.delay(1);
              tw.call(function () {
                _this5.state.setState("over");
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
              var skeleteAnim = _this5.rootNode.getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                _this5.currentBoneAnimName = "骨架|MoveAnim";
                skeleteAnim.play(_this5.currentBoneAnimName); // let clips = skeleteAnim.clips;
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
              if (_this5.state.getState() !== 'run') {
                return;
              }

              _this5.beAttackedCb = data.cb;
              _this5.currentHealthCount -= data.baseAttackNum;
              var baseGasNum = data.baseGasNum; //取处基础气值

              _this5.currentGasNum += baseGasNum; // scale = 0;

              var scale = _this5.currentGasNum / _this5.baseGasNum; // console.log("scale", scale);

              var tw = new Tween(_this5.node);
              tw.to(0.2, {
                scale: v3(scale, scale, scale)
              });
              tw.start();

              if (_this5.currentHealthCount <= 0) {
                _this5.currentHealthCount = 0;

                if (_this5.beAttackedCb) {
                  _this5.beAttackedCb(true); //被打死了

                }

                _this5.state.setState("to-dead");
              }

              if (isValid(_this5.healthBar)) {
                _this5.healthBar.getComponent(ProgressBarComponent).progress = _this5.currentHealthCount / _this5.healthCount;
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
        }, {
          key: "playBossEnterAnim",
          value: function playBossEnterAnim() {
            var _this6 = this;

            //播放boss 的进场动画
            return new Promise(function (resolve, reject) {
              var skeleteAnim = _this6.rootNode.getComponent(SkeletalAnimationComponent);

              var clips = skeleteAnim.clips;
              var showClip = undefined;

              for (var i = 0; i < clips.length; i++) {
                var clip = clips[i];

                if (clip.name === 'boss-show') {
                  showClip = clip;
                }
              }

              if (showClip) {
                skeleteAnim.play('boss-show');

                _this6.scheduleOnce(function () {
                  resolve();
                }, showClip.length);
              } else {
                skeleteAnim.play("骨架|MoveAnim");

                _this6.scheduleOnce(function () {
                  resolve();
                }, 1);
              }
            });
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {// this.node.off('enter-show-boss-enter-state', this.enterShowBossEnter, this);
            // this.node.off('enter-continue-play-move-anim', this.contiuePlayMoveAnim, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRGVhZEVuZW15T2JqIiwiQmV6aWVyTiIsIkdyb3VuZE1hcEN0bCIsIkZpbmRQYXRoV2l0aEFTdGFydCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15QmFzZSIsInR5cGUiLCJwYXRoTGlzdCIsInN0YXRlIiwiY3VycmVudFBhdGhJbmRleCIsImJlTG9ja2VkTWF4TnVtIiwiZW5lbXlCZUxvY2tNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImhlYWx0aENvdW50IiwiY3VycmVudEhlYWx0aENvdW50IiwiZW5lbXlDdGwiLCJjdXJyZW50TW92ZVR3IiwiZ2FtZUNvbnRyb2xsZXIiLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiSGVhbHRoQ291bnQiLCJCZUxvY2tlZENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIm5vZGUiLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwic3RvcCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRTdGF0ZSIsInNwZWVkIiwic2NoZWR1bGVPbmNlIiwiY3VycmVudFN0YXRlIiwiaW5kZXgiLCJlbmVtdEN0bCIsImdhbWVDdGwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3IiwicG9zIiwiZGVsYXkiLCJzZXQiLCJzY2FsZSIsInNob3ciLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJ4IiwieiIsInN0YXJ0UnVuIiwic3RhcnQiLCJtYXBOb2RlTGlzdCIsImdldE1hcE5vZGVMaXN0Iiwib2JzUG9zTGlzdCIsImdldE9ic1Bvc0xpc3QiLCJwYXRoVG9vbCIsInkiLCJvYnNQb3NEYXRhTGlzdCIsImkiLCJsZW5ndGgiLCJvYnNQb3MiLCJwdXNoIiwidXBkYXRlT2JzRGF0YSIsImZpbmRQYXRoTGlzdCIsInBhdGhQb3NMaXN0IiwiZ2V0VmFsdWUiLCJiZXppZXIiLCJnZXRQb2ludExpc3QiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJzZXRTdGF0ZSIsInRhcmdldFBvaW50IiwidmVjdG9yIiwiZGlyIiwic2lnbkFuZ2xlIiwiYWRkU3RhdGUiLCJyZW1vdmVFbmVteUluTGlzdCIsImRlc3Ryb3kiLCJwdXNoT25lRW5lbXlEZWFkRGF0YSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJieSIsImNhaWRhaUVmZmVjdCIsInJhbmRvbSIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsInBsYXkiLCJvbiIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJjbGlwcyIsInNob3dDbGlwIiwidW5kZWZpbmVkIiwiY2xpcCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJD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Q25DLG9CQUFJeUMsSUFBSSxHQUFHSCxLQUFLLENBQUN0QyxDQUFELENBQWhCOztBQUNBLG9CQUFJeUMsSUFBSSxDQUFDQyxJQUFMLEtBQWMsV0FBbEIsRUFBK0I7QUFDM0JILGtCQUFBQSxRQUFRLEdBQUdFLElBQVg7QUFDSDtBQUNKOztBQUNELGtCQUFJRixRQUFKLEVBQWM7QUFDVnZFLGdCQUFBQSxXQUFXLENBQUM0RCxJQUFaLENBQWlCLFdBQWpCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ3hELFlBQUwsQ0FBa0IsWUFBTTtBQUNwQk0sa0JBQUFBLE9BQU87QUFDVixpQkFGRCxFQUVHNkQsUUFBUSxDQUFDdEMsTUFGWjtBQUdILGVBTEQsTUFLTztBQUNIakMsZ0JBQUFBLFdBQVcsQ0FBQzRELElBQVosQ0FBaUIsYUFBakI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDeEQsWUFBTCxDQUFrQixZQUFNO0FBQ3BCTSxrQkFBQUEsT0FBTztBQUNWLGlCQUZELEVBRUcsQ0FGSDtBQUdIO0FBQ0osYUFyQk0sQ0FBUDtBQXNCSDs7O3NDQUVVLENBQ1A7QUFDQTtBQUNIOzs7Ozs7Ozs7OztpQkF2WTJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgdjMsIFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGJlemllciwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEZpbmRQYXRoV2l0aEFTdGFydCB9IGZyb20gJy4uL3V0aWwvRmluZFBhdGhXaXRoQVN0YXJ0JztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZE1hcEN0bDogR3JvdW5kTWFwQ3RsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVBdHRhY2tlZENiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJlemllclBhdGhMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEJvbmVBbmltTmFtZSA9IFwiXCI7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIHN0YXJ0UG9zOiBWZWMzLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kTWFwQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQ291bnQgPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uSGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5iZUxvY2tlZE1heE51bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CZUxvY2tlZENvdW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAvLyB0aGlzLmVuZFBvcyA9IGVuZFBvcztcclxuICAgICAgICAvLyB0aGlzLnN0YXJ0UG9zID0gc3RhcnRQb3M7XHJcbiAgICAgICAgLy8gbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWMzKHRoaXMuc3RhcnRQb3MpLnN1YnRyYWN0KHRoaXMuZW5kUG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyBsZXQgYW5nbGUgPSBuZXcgVmVjMihkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnopLnNpZ25BbmdsZSh2MigtMSwgMCkpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcblxyXG4gICAgfVxyXG4gICAgZW50ZXJTaG93Qm9zc0VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuc3BlZWQgPSAxO1xyXG4gICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0VuZW15RW50ZXJBbmltKGluZGV4OiBudW1iZXIsIGVuZW10Q3RsOiBFbmVteUNvbnRyb2xsZXIsIGdhbWVDdGw6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bCA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3IC5zaG93KCk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGF0aCBsaXN0XCIsIHBhdGhMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDEsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpXVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICAvLyBsZXQgYWxsTGVuZ3RoID0gQmV6aWVyTi5nZXRQYXRoTGVuZ3RoKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG4gICAgICAgIC8vIGxldCBwcmVUaW1lID0gYWxsTGVuZ3RoIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLmJlemllclBhdGhMaXN0W2ldKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHRoaXMuYmV6aWVyUGF0aExpc3RbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMuYmV6aWVyUGF0aExpc3RbaSAtIDFdKS5zdWJ0cmFjdCh0aGlzLmJlemllclBhdGhMaXN0W2ldKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLmJlemllclBhdGhMaXN0W2kgLSAxXSwgdGhpcy5iZXppZXJQYXRoTGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGxldCBwcmVUaW1lID0gdjModGhpcy4pXHJcbiAgICAgICAgICAgIC8vIHR3LnNldCh7IGV1bGVyQW5nbGVzOiB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmJlemllclBhdGhMaXN0W2ldLFxyXG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHR3O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIC8vIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXApIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkZWZhdWx0Q2xpcCA9IHNrZWxldGVBbmltLmRlZmF1bHRDbGlwLm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdENsaXApO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGxlbmd0aCA9IGFuaW1TdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICBhbmltU3RhdGUuc3BlZWQgPSB0aGlzLm1vdmVTcGVlZCAqIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgZ2V0TG9va0F0QW5nbGUoc3RhcnRQb3MsIHRhcmdldFBvaW50OiBWZWMzKSB7XHJcbiAgICAgICAgLy/ojrflj5bliLDmnJ3lkJHnmoTop5LluqZcclxuICAgICAgICBsZXQgdmVjdG9yID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KTtcclxuICAgICAgICBsZXQgZGlyID0gdjIoLTEsIDApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHYyKHZlY3Rvci54LCB2ZWN0b3Iueikuc2lnbkFuZ2xlKGRpcik7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwib3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucmVtb3ZlRW5lbXlJbkxpc3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnB1c2hPbmVFbmVteURlYWREYXRhKG5ldyBEZWFkRW5lbXlPYmoodGhpcy5vYmplY3RUeXBlLHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmV1bGVyQW5nbGVzID0gdjMoMCwgMzYwICogTWF0aC5yYW5kb20oKSwgMClcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHYzKDAsIDAsIDApKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzIFwiLCBkaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA8IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuYWRkRW5lbXlBZGRHb2xkQW5pbSh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnNob3dBZGRHb2xkQW5pbUVmZmVjdCh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgxKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFxyXG4gICAgICAgICAgICAvLyAgICAgW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRQb3MsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAxMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgLy8gbGV0IHBvaW50TGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMTAwKTtcclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBvaW50ID0gcG9pbnRMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHN1YlYzID0gdjMocG9pbnQpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgLy8gICAgIGxldCBldWxlckFuZ2xlcyA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy55O1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHN1YlYzLnggIT09IDAgJiYgc3ViVjMueiAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGV1bGVyQW5nbGVzID0gdjIoMSwgMCkuc2lnbkFuZ2xlKHYyKHN1YlYzLngsIHN1YlYzLnopKSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0dy50bygwLjAwOCwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwb2ludExpc3RbaV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKDAsIGV1bGVyQW5nbGVzLCAwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBzY2FsZTogdjMoKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCksKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCksKDEgLSBpIC8gcG9pbnRMaXN0Lmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyAvLyB0dy50bygwLjIgKiBwb2ludExpc3QubGVuZ3RoLCB7c2NhbGU6IHYzKDAsMCwwKX0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnBhcmFsbGVsKG5ldyBUd2Vlbih0aGlzLm5vZGUpLnRvKDAuMDA3ICogcG9pbnRMaXN0Lmxlbmd0aCwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSkpO1xyXG4gICAgICAgICAgICAvLyAvLyB0dy5cclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0dy5ieSgwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcblxyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNsaXBzID0gc2tlbGV0ZUFuaW0uY2xpcHM7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbW92ZUNsaXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgY2xpcHMubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gbW92ZUNsaXBzID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNsaXAgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNsaXAgbmFtZVwiLCBjbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChjbGlwLm5hbWUgPT09ICfpqqjmnrZ8TW92ZUFuaW0nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbW92ZUNsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChtb3ZlQ2xpcCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShtb3ZlQ2xpcC4pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgbW92ZVwiKTtcclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBtb3ZlVGltZSA9IG5ldyBWZWMzKHRoaXMuc3RhcnRQb3MpLnN1YnRyYWN0KHRoaXMuZW5kUG9zKS5sZW5ndGgoKSAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAvLyB0dy50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogdGhpcy5lbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHR3O1xyXG4gICAgICAgICAgICAvLyDlvIDlp4vov5DooYzkuYvlkI7vvIzorqHnrpfkuIDmnaEg5pyA55+t6Lev5b6EXHJcbiAgICAgICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJiZS1hdHRhY2tlZFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiID0gZGF0YS5jYjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLT0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgLy8gc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoc2NhbGUsIHNjYWxlLCBzY2FsZSkgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVBdHRhY2tlZENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ooqvmiZPmrbvkuoZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaGVhbHRoQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuICAgIH1cclxuICAgIGdldElzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3ZlcicgfHwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAndG8tZGVhZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQ2FuTG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCA8IHRoaXMuYmVMb2NrZWRNYXhOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgdW5TZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQtLTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy5jdXJyZW50TW92ZVBvcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlSW5kZXggPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gdGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmN1cnJlbnRNb3ZlSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL+enu+WKqOe7k+adn1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUgb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLmN1cnJlbnRNb3ZlUG9zKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXMgPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGlzID4gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZChkaXIubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoZGVsdGFUaW1lKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcclxuICAgICAgICAgICAgbGV0IGNsaXBzID0gc2tlbGV0ZUFuaW0uY2xpcHM7XHJcbiAgICAgICAgICAgIGxldCBzaG93Q2xpcCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLm5hbWUgPT09ICdib3NzLXNob3cnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG93Q2xpcCkge1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSgnYm9zcy1zaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgc2hvd0NsaXAubGVuZ3RoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShcIumqqOaetnxNb3ZlQW5pbVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbScsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl19