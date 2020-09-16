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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRGVhZEVuZW15T2JqIiwiQmV6aWVyTiIsIkdyb3VuZE1hcEN0bCIsIkZpbmRQYXRoV2l0aEFTdGFydCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15QmFzZSIsInR5cGUiLCJwYXRoTGlzdCIsInN0YXRlIiwiY3VycmVudFBhdGhJbmRleCIsImJlTG9ja2VkTWF4TnVtIiwiZW5lbXlCZUxvY2tNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImhlYWx0aENvdW50IiwiY3VycmVudEhlYWx0aENvdW50IiwiZW5lbXlDdGwiLCJjdXJyZW50TW92ZVR3IiwiZ2FtZUNvbnRyb2xsZXIiLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiSGVhbHRoQ291bnQiLCJCZUxvY2tlZENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIm5vZGUiLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwic3RvcCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRTdGF0ZSIsInNwZWVkIiwic2NoZWR1bGVPbmNlIiwiY3VycmVudFN0YXRlIiwiaW5kZXgiLCJlbmVtdEN0bCIsImdhbWVDdGwiLCJvbiIsImZvcnplblNlbGYiLCJiaW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5Iiwic2V0Iiwic2NhbGUiLCJzaG93IiwiY2FsbCIsImFjdGl2ZSIsInRvIiwieCIsInoiLCJzdGFydFJ1biIsInN0YXJ0IiwibWFwTm9kZUxpc3QiLCJnZXRNYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJ5Iiwib2JzUG9zRGF0YUxpc3QiLCJpIiwibGVuZ3RoIiwib2JzUG9zIiwicHVzaCIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsImdldFZhbHVlIiwiYmV6aWVyIiwiZ2V0UG9pbnRMaXN0IiwidGltZSIsImRpcyIsInN1YnRyYWN0IiwibW92ZVNwZWVkIiwic2V0U3RhdGUiLCJ0YXJnZXRQb2ludCIsInZlY3RvciIsImRpciIsInNpZ25BbmdsZSIsInN0YXRlQW5pbSIsInBhdXNlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwicGxheSIsImVuZW15QXR0YWNrZWQiLCJhbmltU3BlZWRNdWxPZmZzZXQiLCJyZW1vdmVFbmVteUluTGlzdCIsImRlc3Ryb3kiLCJwdXNoT25lRW5lbXlEZWFkRGF0YSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJieSIsImNhaWRhaUVmZmVjdCIsInJhbmRvbSIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJjbGlwcyIsInNob3dDbGlwIiwidW5kZWZpbmVkIiwiY2xpcCIsIm5hbWUiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxHQUFHSCxLQUFLLENBQUMzQyxDQUFELENBQWhCOztBQUNBLG9CQUFJOEMsSUFBSSxDQUFDQyxJQUFMLEtBQWMsV0FBbEIsRUFBK0I7QUFDM0JILGtCQUFBQSxRQUFRLEdBQUdFLElBQVg7QUFDSDtBQUNKOztBQUNELGtCQUFJRixRQUFKLEVBQWM7QUFDVi9FLGdCQUFBQSxXQUFXLENBQUMyRCxJQUFaLENBQWlCLFdBQWpCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ3ZELFlBQUwsQ0FBa0IsWUFBTTtBQUNwQlMsa0JBQUFBLE9BQU87QUFDVixpQkFGRCxFQUVHa0UsUUFBUSxDQUFDM0MsTUFGWjtBQUdILGVBTEQsTUFLTztBQUNIcEMsZ0JBQUFBLFdBQVcsQ0FBQzJELElBQVosQ0FBaUIsYUFBakI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDdkQsWUFBTCxDQUFrQixZQUFNO0FBQ3BCUyxrQkFBQUEsT0FBTztBQUNWLGlCQUZELEVBRUcsQ0FGSDtBQUdIO0FBQ0osYUFyQk0sQ0FBUDtBQXNCSDs7O3NDQUVVO0FBQ1A7QUFDQTtBQUNBLGlCQUFLbkMsUUFBTCxDQUFjZ0IsSUFBZCxDQUFtQnlGLEdBQW5CLENBQXVCLGtCQUF2QixFQUEyQyxLQUFLekUsVUFBaEQsRUFBNEQsSUFBNUQ7QUFDSDs7Ozs7Ozs7Ozs7aUJBN1oyQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmosIEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuLi91dGlsL0Jlemllck4nO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBGaW5kUGF0aFdpdGhBU3RhcnQgfSBmcm9tICcuLi91dGlsL0ZpbmRQYXRoV2l0aEFTdGFydCc7XHJcbi8vIGltcG9ydCB7IEJlc2l6ZSB9IGZyb20gJy4uL3V0aWwvQmVzaXplJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuQGNjY2xhc3MoJ0VuZW15QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHB1YmxpYyBwYXRoTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwdWJsaWMgY3VycmVudFBhdGhJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHB1YmxpYyBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGJlTG9ja2VkTWF4TnVtOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5lbmVteUJlTG9ja01heE51bTtcclxuICAgIHB1YmxpYyBjdXJyZW50YmVMb2NrZWRDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhCYXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGN1cnJlbnRIZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgc3RhcnRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbmVteUN0bDogRW5lbXlDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudE1vdmVUdzogVHdlZW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBncm91bmRNYXBDdGw6IEdyb3VuZE1hcEN0bCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJlQXR0YWNrZWRDYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBiZXppZXJQYXRoTGlzdDogVmVjM1tdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIlwiO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZVBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYWlkYWlFZmZlY3Q6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBzdGFydFBvczogVmVjMywgZW5kUG9zOiBWZWMzKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgLy8gdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFydFBvcyA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIC8vIGxldCBkaXJlY3Rpb24gPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gbGV0IGFuZ2xlID0gbmV3IFZlYzIoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi56KS5zaWduQW5nbGUodjIoLTEsIDApKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG5cclxuICAgIH1cclxuICAgIGVudGVyU2hvd0Jvc3NFbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGl1ZVBsYXlNb3ZlQW5pbSgpIHtcclxuICAgICAgICAvL+e7p+e7reihjOi1sFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zcGVlZCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnNwZWVkID0gMTtcclxuICAgICAgICAgICAgfSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dFbmVteUVudGVyQW5pbShpbmRleDogbnVtYmVyLCBlbmVtdEN0bDogRW5lbXlDb250cm9sbGVyLCBnYW1lQ3RsOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZi5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIiwgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuMSAqIGluZGV4KVxyXG4gICAgICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcgLnNob3coKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgLy8gYm91bmNlT3V0IHF1YXJ0SW5cclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9KVxyXG5cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnN0YXJ0UnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UnVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydFJ1bihzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHBhdGhMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0UGF0aExpc3Qoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXRoIGxpc3RcIiwgcGF0aExpc3QpO1xyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcudG8oMSwge1xyXG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHBhdGhMaXN0W2ldXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgbGV0IG1hcE5vZGVMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgb2JzUG9zTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE9ic1Bvc0xpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFRvb2wgPSBuZXcgRmluZFBhdGhXaXRoQVN0YXJ0KG1hcE5vZGVMaXN0LCBbc3RhcnRQb3MueCwgc3RhcnRQb3MueV0sIFtlbmRQb3MueCwgZW5kUG9zLnldKTtcclxuICAgICAgICBsZXQgb2JzUG9zRGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic1Bvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9ic1BvcyA9IG9ic1Bvc0xpc3RbaV07XHJcbiAgICAgICAgICAgIG9ic1Bvc0RhdGFMaXN0LnB1c2goW29ic1Bvcy54LCBvYnNQb3MueV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoVG9vbC51cGRhdGVPYnNEYXRhKG9ic1Bvc0RhdGFMaXN0KTtcclxuICAgICAgICBsZXQgcGF0aExpc3QgPSBwYXRoVG9vbC5maW5kUGF0aExpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhMaXN0W2ldO1xyXG4gICAgICAgICAgICBwYXRoUG9zTGlzdC5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zWzBdLCBwb3NbMV0pLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwYXRoUG9zTGlzdCk7IC8v6YCa6L+H6I635Y+W5Yiw55qEIOi3r+W+hOeCue+8jOadpeWItuS9nOS4gOadoei0neWhnuWwlOabsue6v1xyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDMwKTsgLy/ot6/lvoTlr4bluqbkuLoyMFxyXG4gICAgICAgIC8vIGxldCBhbGxMZW5ndGggPSBCZXppZXJOLmdldFBhdGhMZW5ndGgodGhpcy5iZXppZXJQYXRoTGlzdCk7XHJcbiAgICAgICAgLy8gbGV0IHByZVRpbWUgPSBhbGxMZW5ndGggLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLmJlemllclBhdGhMaXN0W2ldKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHRoaXMuYmV6aWVyUGF0aExpc3RbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMuYmV6aWVyUGF0aExpc3RbaSAtIDFdKS5zdWJ0cmFjdCh0aGlzLmJlemllclBhdGhMaXN0W2ldKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLmJlemllclBhdGhMaXN0W2kgLSAxXSwgdGhpcy5iZXppZXJQYXRoTGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgICAgIC8vIGxldCBwcmVUaW1lID0gdjModGhpcy4pXHJcbiAgICAgICAgICAgIC8vIHR3LnNldCh7IGV1bGVyQW5nbGVzOiB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmJlemllclBhdGhMaXN0W2ldLFxyXG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgLy8gbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgLy8gaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRlZmF1bHRDbGlwID0gc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXAubmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltU3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZWZhdWx0Q2xpcCk7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aDtcclxuICAgICAgICAvLyAgICAgICAgIGFuaW1TdGF0ZS5zcGVlZCA9IHRoaXMubW92ZVNwZWVkICogdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQ7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldExvb2tBdEFuZ2xlKHN0YXJ0UG9zLCB0YXJnZXRQb2ludDogVmVjMykge1xyXG4gICAgICAgIC8v6I635Y+W5Yiw5pyd5ZCR55qE6KeS5bqmXHJcbiAgICAgICAgbGV0IHZlY3RvciA9IHYzKHN0YXJ0UG9zKS5zdWJ0cmFjdCh0YXJnZXRQb2ludCk7XHJcbiAgICAgICAgbGV0IGRpciA9IHYyKC0xLCAwKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSB2Mih2ZWN0b3IueCwgdmVjdG9yLnopLnNpZ25BbmdsZShkaXIpO1xyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuICAgIGZvcnplblNlbGYoKXtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudE1vdmVUdyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlQW5pbS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvL+i/m+WFpeaUu+WHu+eKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuICAgICAgICAgICAgfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5wdXNoT25lRW5lbXlEZWFkRGF0YShuZXcgRGVhZEVuZW15T2JqKHRoaXMub2JqZWN0VHlwZSx0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5ldWxlckFuZ2xlcyA9IHYzKDAsIDM2MCAqIE1hdGgucmFuZG9tKCksIDApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcyBcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmFkZEVuZW15QWRkR29sZEFuaW0odGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihcclxuICAgICAgICAgICAgLy8gICAgIFtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjdXJyZW50UG9zLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMTAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MClcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIC8vIGxldCBwb2ludExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwMCk7XHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBwb2ludCA9IHBvaW50TGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdWJWMyA9IHYzKHBvaW50KS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLm5vZGUuZXVsZXJBbmdsZXMueTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdWJWMy54ICE9PSAwICYmIHN1YlYzLnogIT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBldWxlckFuZ2xlcyA9IHYyKDEsIDApLnNpZ25BbmdsZSh2MihzdWJWMy54LCBzdWJWMy56KSkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgdHcudG8oMC4wMDgsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogcG9pbnRMaXN0W2ldLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygwLCBldWxlckFuZ2xlcywgMCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2NhbGU6IHYzKCgxIC0gaSAvIHBvaW50TGlzdC5sZW5ndGgpLCgxIC0gaSAvIHBvaW50TGlzdC5sZW5ndGgpLCgxIC0gaSAvIHBvaW50TGlzdC5sZW5ndGgpKVxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLy8gdHcudG8oMC4yICogcG9pbnRMaXN0Lmxlbmd0aCwge3NjYWxlOiB2MygwLDAsMCl9KVxyXG4gICAgICAgICAgICAvLyAvLyB0dy5wYXJhbGxlbChuZXcgVHdlZW4odGhpcy5ub2RlKS50bygwLjAwNyAqIHBvaW50TGlzdC5sZW5ndGgsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pKTtcclxuICAgICAgICAgICAgLy8gLy8gdHcuXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcuYnkoMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJ1blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byA5aeL56e75YqoIFxyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG5cclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IG1vdmVDbGlwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IGNsaXBzLmxlbmd0aCA7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIG1vdmVDbGlwcyA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjbGlwIG5hbWVcIiwgY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY2xpcC5uYW1lID09PSAn6aqo5p62fE1vdmVBbmltJyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1vdmVDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobW92ZUNsaXApe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkobW92ZUNsaXAuKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubGVuZ3RoKCkgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgLy8gdHcudG8obW92ZVRpbWUsIHsgcG9zaXRpb246IHRoaXMuZW5kUG9zIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0dztcclxuICAgICAgICAgICAgLy8g5byA5aeL6L+Q6KGM5LmL5ZCO77yM6K6h566X5LiA5p2hIOacgOefrei3r+W+hFxyXG4gICAgICAgICAgICAvLyBsZXQgcGF0aExpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRQYXRoTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYmUtYXR0YWNrZWRcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy/ooqvmlLvlh7tcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLooqvmlLvlh7tcIiwgYXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYiA9IGRhdGEuY2I7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50IC09IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICAgICAgbGV0IGJhc2VHYXNOdW0gPSBkYXRhLmJhc2VHYXNOdW07IC8v5Y+W5aSE5Z+656GA5rCU5YC8XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gKz0gYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuY3VycmVudEdhc051bSAvIHRoaXMuYmFzZUdhc051bTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKHNjYWxlLCBzY2FsZSwgc2NhbGUpIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6KKr5omT5q275LqGXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMuY3VycmVudE1vdmVQb3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUluZGV4IDwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5jdXJyZW50TW92ZUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/np7vliqjnu5PmnZ9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlIG92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5jdXJyZW50TW92ZVBvcykuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzXCIsIGRpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRpcyA+IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW0nLCB0aGlzLmNvbnRpdWVQbGF5TW92ZUFuaW0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwubm9kZS5vZmYoXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZiwgdGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl19