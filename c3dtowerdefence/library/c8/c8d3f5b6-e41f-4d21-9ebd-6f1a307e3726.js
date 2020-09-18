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
          _this.groundMapCtl = null;
          _this.beAttackedCb = null;
          _this.bezierPathList = [];
          _this.currentBoneAnimName = "";

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, gameController, startPos, endPos) {
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig, this.gameController);

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
            this.enemyCtl.node.on("frozen-all-enemy", this.forzenSelf.bind(this), this);
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

            for (var _i2 = 0; _i2 < this.bezierPathList.length - 5; _i2++) {
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
              _this4.state.setState("enter-attack-state");
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
          key: "forzenSelf",
          value: function forzenSelf() {
            //冰冻自己
            if (this.currentMoveTw) {
              this.currentMoveTw.stop();
              var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              var stateAnim = skeleteAnim.getState(this.currentBoneAnimName);
              stateAnim.pause();
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this5 = this;

            this.state.addState("enter-attack-state", function () {
              console.log("移动结束"); //进入攻击状态

              _this5.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this5.rootNode.getComponent(SkeletalAnimationComponent);

              skeleteAnim.play(_this5.currentBoneAnimName);

              _this5.scheduleOnce(function () {
                _this5.enemyCtl.enemyAttacked(); //敌人发动了攻击

              }, _this5.animSpeedMulOffset);
            });
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
          value: function onDestroy() {
            // this.node.off('enter-show-boss-enter-state', this.enterShowBossEnter, this);
            // this.node.off('enter-continue-play-move-anim', this.contiuePlayMoveAnim, this);
            this.enemyCtl.node.off("frozen-all-enemy", this.forzenSelf, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRGVhZEVuZW15T2JqIiwiQmV6aWVyTiIsIkdyb3VuZE1hcEN0bCIsIkZpbmRQYXRoV2l0aEFTdGFydCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15QmFzZSIsInR5cGUiLCJwYXRoTGlzdCIsInN0YXRlIiwiY3VycmVudFBhdGhJbmRleCIsImJlTG9ja2VkTWF4TnVtIiwiZW5lbXlCZUxvY2tNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImhlYWx0aENvdW50IiwiY3VycmVudEhlYWx0aENvdW50IiwiZW5lbXlDdGwiLCJjdXJyZW50TW92ZVR3IiwiZ3JvdW5kTWFwQ3RsIiwiYmVBdHRhY2tlZENiIiwiYmV6aWVyUGF0aExpc3QiLCJjdXJyZW50Qm9uZUFuaW1OYW1lIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiSGVhbHRoQ291bnQiLCJCZUxvY2tlZENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIm5vZGUiLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwic3RvcCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRTdGF0ZSIsInNwZWVkIiwic2NoZWR1bGVPbmNlIiwiY3VycmVudFN0YXRlIiwiaW5kZXgiLCJlbmVtdEN0bCIsImdhbWVDdGwiLCJvbiIsImZvcnplblNlbGYiLCJiaW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5Iiwic2V0Iiwic2NhbGUiLCJzaG93IiwiY2FsbCIsImFjdGl2ZSIsInRvIiwieCIsInoiLCJzdGFydFJ1biIsInN0YXJ0IiwibWFwTm9kZUxpc3QiLCJnZXRNYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJ5Iiwib2JzUG9zRGF0YUxpc3QiLCJpIiwibGVuZ3RoIiwib2JzUG9zIiwicHVzaCIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsImdldFZhbHVlIiwiYmV6aWVyIiwiZ2V0UG9pbnRMaXN0IiwidGltZSIsImRpcyIsInN1YnRyYWN0IiwibW92ZVNwZWVkIiwic2V0U3RhdGUiLCJ0YXJnZXRQb2ludCIsInZlY3RvciIsImRpciIsInNpZ25BbmdsZSIsInN0YXRlQW5pbSIsInBhdXNlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwicGxheSIsImVuZW15QXR0YWNrZWQiLCJhbmltU3BlZWRNdWxPZmZzZXQiLCJyZW1vdmVFbmVteUluTGlzdCIsImRlc3Ryb3kiLCJwdXNoT25lRW5lbXlEZWFkRGF0YSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJieSIsImNhaWRhaUVmZmVjdCIsInJhbmRvbSIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJjbGlwcyIsInNob3dDbGlwIiwidW5kZWZpbmVkIiwiY2xpcCIsIm5hbWUiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUk4QyxJQUFJLEdBQUdILEtBQUssQ0FBQzNDLENBQUQsQ0FBaEI7O0FBQ0Esb0JBQUk4QyxJQUFJLENBQUNDLElBQUwsS0FBYyxXQUFsQixFQUErQjtBQUMzQkgsa0JBQUFBLFFBQVEsR0FBR0UsSUFBWDtBQUNIO0FBQ0o7O0FBQ0Qsa0JBQUlGLFFBQUosRUFBYztBQUNWL0UsZ0JBQUFBLFdBQVcsQ0FBQzJELElBQVosQ0FBaUIsV0FBakI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDdkQsWUFBTCxDQUFrQixZQUFNO0FBQ3BCUyxrQkFBQUEsT0FBTztBQUNWLGlCQUZELEVBRUdrRSxRQUFRLENBQUMzQyxNQUZaO0FBR0gsZUFMRCxNQUtPO0FBQ0hwQyxnQkFBQUEsV0FBVyxDQUFDMkQsSUFBWixDQUFpQixhQUFqQjs7QUFDQSxnQkFBQSxNQUFJLENBQUN2RCxZQUFMLENBQWtCLFlBQU07QUFDcEJTLGtCQUFBQSxPQUFPO0FBQ1YsaUJBRkQsRUFFRyxDQUZIO0FBR0g7QUFDSixhQXJCTSxDQUFQO0FBc0JIOzs7c0NBRVU7QUFDUDtBQUNBO0FBQ0EsaUJBQUtuQyxRQUFMLENBQWNnQixJQUFkLENBQW1CeUYsR0FBbkIsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQUt6RSxVQUFoRCxFQUE0RCxJQUE1RDtBQUNIOzs7Ozs7Ozs7OztpQkE5WjJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgdjMsIFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGJlemllciwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEZpbmRQYXRoV2l0aEFTdGFydCB9IGZyb20gJy4uL3V0aWwvRmluZFBhdGhXaXRoQVN0YXJ0JztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZE1hcEN0bDogR3JvdW5kTWFwQ3RsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVBdHRhY2tlZENiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJlemllclBhdGhMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEJvbmVBbmltTmFtZSA9IFwiXCI7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvczogVmVjMywgZW5kUG9zOiBWZWMzKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91bmRNYXBDdGwgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhDb3VudCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5IZWFsdGhDb3VudDtcclxuICAgICAgICB0aGlzLmJlTG9ja2VkTWF4TnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJlTG9ja2VkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgIC8vIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhcnRQb3MgPSBzdGFydFBvcztcclxuICAgICAgICAvLyBsZXQgZGlyZWN0aW9uID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIC8vIGxldCBhbmdsZSA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueikuc2lnbkFuZ2xlKHYyKC0xLCAwKSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRpdWVQbGF5TW92ZUFuaW0oKSB7XHJcbiAgICAgICAgLy/nu6fnu63ooYzotbBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgc3RhdGUuc3BlZWQgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgZ2FtZUN0bDogR2FtZUNvbnRyb2xsZXIsIHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsID0gZW5lbXRDdGw7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYuYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3IC5zaG93KCk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGF0aCBsaXN0XCIsIHBhdGhMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDEsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpXVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICAvLyBsZXQgYWxsTGVuZ3RoID0gQmV6aWVyTi5nZXRQYXRoTGVuZ3RoKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG4gICAgICAgIC8vIGxldCBwcmVUaW1lID0gYWxsTGVuZ3RoIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGxldCB0YXJnZXRQb3MgPVxyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5iZXppZXJQYXRoTGlzdFtpXSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCB0aGlzLmJlemllclBhdGhMaXN0W2ldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLmJlemllclBhdGhMaXN0W2kgLSAxXSkuc3VidHJhY3QodGhpcy5iZXppZXJQYXRoTGlzdFtpXSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5iZXppZXJQYXRoTGlzdFtpIC0gMV0sIHRoaXMuYmV6aWVyUGF0aExpc3RbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgICAgICAvLyBsZXQgcHJlVGltZSA9IHYzKHRoaXMuKVxyXG4gICAgICAgICAgICAvLyB0dy5zZXQoeyBldWxlckFuZ2xlczogdjMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5iZXppZXJQYXRoTGlzdFtpXSxcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHR3O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIC8vIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXApIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkZWZhdWx0Q2xpcCA9IHNrZWxldGVBbmltLmRlZmF1bHRDbGlwLm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdENsaXApO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGxlbmd0aCA9IGFuaW1TdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICBhbmltU3RhdGUuc3BlZWQgPSB0aGlzLm1vdmVTcGVlZCAqIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpIHtcclxuICAgICAgICAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG4gICAgICAgIGxldCB2ZWN0b3IgPSB2MyhzdGFydFBvcykuc3VidHJhY3QodGFyZ2V0UG9pbnQpO1xyXG4gICAgICAgIGxldCBkaXIgPSB2MigtMSwgMCk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdjIodmVjdG9yLngsIHZlY3Rvci56KS5zaWduQW5nbGUoZGlyKTtcclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBmb3J6ZW5TZWxmKCl7XHJcbiAgICAgICAgLy/lhrDlhrvoh6rlt7FcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRNb3ZlVHcpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZUFuaW0ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAgICAgLy/ov5vlhaXmlLvlh7vnirbmgIFcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5yZW1vdmVFbmVteUluTGlzdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucHVzaE9uZUVuZW15RGVhZERhdGEobmV3IERlYWRFbmVteU9iaih0aGlzLm9iamVjdFR5cGUsdGhpcy5nZXRDdXJyZW50R29sZENvdW50KCkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oXHJcbiAgICAgICAgICAgIC8vICAgICBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudFBvcyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDEwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAvLyBsZXQgcG9pbnRMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMDApO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9pbnQgPSBwb2ludExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc3ViVjMgPSB2Myhwb2ludCkuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGV1bGVyQW5nbGVzID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLnk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoc3ViVjMueCAhPT0gMCAmJiBzdWJWMy56ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXVsZXJBbmdsZXMgPSB2MigxLCAwKS5zaWduQW5nbGUodjIoc3ViVjMueCwgc3ViVjMueikpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHR3LnRvKDAuMDA4LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHBvaW50TGlzdFtpXSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBldWxlckFuZ2xlczogdjMoMCwgZXVsZXJBbmdsZXMsIDApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjYWxlOiB2MygoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSwoMSAtIGkgLyBwb2ludExpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIC8vIHR3LnRvKDAuMiAqIHBvaW50TGlzdC5sZW5ndGgsIHtzY2FsZTogdjMoMCwwLDApfSlcclxuICAgICAgICAgICAgLy8gLy8gdHcucGFyYWxsZWwobmV3IFR3ZWVuKHRoaXMubm9kZSkudG8oMC4wMDcgKiBwb2ludExpc3QubGVuZ3RoLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KSk7XHJcbiAgICAgICAgICAgIC8vIC8vIHR3LlxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmJ5KDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+W8gOWni+enu+WKqCBcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fE1vdmVBbmltXCJcclxuXHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgICAgIC8vIGxldCBtb3ZlQ2xpcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCBjbGlwcy5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBtb3ZlQ2xpcHMgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2xpcCBuYW1lXCIsIGNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ+mqqOaetnxNb3ZlQW5pbScpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtb3ZlQ2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG1vdmVDbGlwKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KG1vdmVDbGlwLilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBtb3ZlXCIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUaW1lID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLmxlbmd0aCgpIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKG1vdmVUaW1lLCB7IHBvc2l0aW9uOiB0aGlzLmVuZFBvcyB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcbiAgICAgICAgICAgIC8vIOW8gOWni+i/kOihjOS5i+WQju+8jOiuoeeul+S4gOadoSDmnIDnn63ot6/lvoRcclxuICAgICAgICAgICAgLy8gbGV0IHBhdGhMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0UGF0aExpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBiYXNlR2FzTnVtID0gZGF0YS5iYXNlR2FzTnVtOyAvL+WPluWkhOWfuuehgOawlOWAvFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtICs9IGJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgICAgICAvLyBzY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRHYXNOdW0gLyB0aGlzLmJhc2VHYXNOdW07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVcIiwgc2NhbGUpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZUF0dGFja2VkQ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iiq+aJk+atu+S6hlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvdmVyJyB8fCB0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICd0by1kZWFkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDYW5Mb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50IDwgdGhpcy5iZUxvY2tlZE1heE51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB1blNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRNb3ZlUG9zKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVJbmRleCA8IHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSB0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuY3VycmVudE1vdmVJbmRleF07XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8v56e75Yqo57uT5p2fXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBvdmVyXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMuY3VycmVudE1vdmVQb3MpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpcyA9IGRpci5sZW5ndGgoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc1wiLCBkaXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkaXMgPiAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpci5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihkZWx0YVRpbWUpKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhciAmJiB0aGlzLmNhbWVyYU5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBsZXQgcG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmFOb2RlLmNvbnZlcnRUb1VJTm9kZSh0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLmhlYWx0aEJhci5wYXJlbnQsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgcG9zLnkgKz0gNTA7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuc2V0U2NhbGUodjMocG9zLnosIHBvcy56LCBwb3MueikpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheUJvc3NFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgbGV0IHNob3dDbGlwID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ2Jvc3Mtc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3dDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KCdib3NzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzaG93Q2xpcC5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KFwi6aqo5p62fE1vdmVBbmltXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub2ZmKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYsIHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbiJdfQ==