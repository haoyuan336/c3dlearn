System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js", "../EnemyController.js", "../util/BezierN.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, find, Quat, State, GameController, BaseObject, DeadEnemyObj, BezierN, GroundMapCtl, FindPathWithAStart, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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
      Quat = _cc.Quat;
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
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.groundMapCtl = find("GameController").getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl);
            this.gameConfigJson = gameConfig;
            this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
            this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
            this.currentHealthCount = this.healthCount;
            var angle = this.getLookAtAngle(this.node.position, endPos);
            this.node.worldRotation = angle;
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
          value: function showEnemyEnterAnim(index, enemtCtl, startPos, endPos) {
            var _this3 = this;

            var node = this.node;
            this.enemyCtl = enemtCtl;
            this.enemyCtl.node.on("frozen-all-enemy", this.forzenSelf.bind(this), this); // this.gameController = gameCtl;
            // this.enemyCtl.node.on('enter-show-boss-enter-state', this.enterShowBossEnter, this);
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
            console.log("start pos ", startPos);
            var moveType = this.getMoveType();

            if (moveType === "Walk") {
              this.proceeWalkLogic(startPos, endPos);
            } else if (moveType === 'Fly') {
              this.processFlyLogic(startPos, endPos);
            }
          }
        }, {
          key: "processFlyLogic",
          value: function processFlyLogic(startPos, endPos) {
            var _this4 = this;

            //处理敌人飞行的逻辑
            //1首先设置一条敌人需要飞过的控制点\
            // let endPoint = this.groundMapCtl.getMapNodeList().getValue(endPos.x, endPos.y).position;
            // this.node.position = endPoint;
            var flyHeight = 10; // console.log("处理飞行的逻辑");

            var mapSize = this.groundMapCtl.getMapSize();
            var posIndexList = [v2(startPos.x, startPos.y)];

            for (var i = 0; i < 5; i++) {
              posIndexList.push(v2(Math.round(Math.random() * (mapSize.x - 1)), Math.round(Math.random() * (mapSize.y - 1))));
            } // posIndexList.push(v2(Math.round,9));
            // posIndexList.push(v2(2,2));
            // posIndexList.push(v2(7,7));
            // let index = 3;
            // posIndexList.push(v2())
            // console.log("start pos", startPos);
            // let v = v2(0, 0);
            // if (startPos.x === 0 || startPos.x === 10) {
            //     console.log("在边缘");
            //     v.x = startPos.x === 10 ? 0 : 10
            // }
            // if (startPos.y === 0 || startPos.y === 10) {
            //     console.log("在边缘");
            //     v.y = startPos.y === 10 ? 0 : 10;
            // }
            // posIndexList.push(v);


            posIndexList.push(endPos);
            var posList = [];

            for (var _i = 0; _i < posIndexList.length; _i++) {
              var posv2 = posIndexList[_i];
              console.log("posv2", posv2);
              var node = this.groundMapCtl.getMapNodeList().getValue(posv2.x, posv2.y);

              if (node) {
                var nodePos = node.position;
                posList.push(v3(nodePos.x, flyHeight, nodePos.z));
              } // let pos = v3(posv2.x, 0, posv2.y);

            }

            var bezier = new (_crd && BezierN === void 0 ? (_reportPossibleCrUseOfBezierN({
              error: Error()
            }), BezierN) : BezierN)(posList);
            var endPosList = bezier.getPointList(100);
            this.currentMoveTw = this.processMoveAction(endPosList);
            this.currentMoveTw.call(function () {
              //播放攻击敌人的动画
              // this.state.setState("enter-attack-state");
              _this4.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this4.rootNode.getComponent(SkeletalAnimationComponent); // skeleteAnim.play(this.currentBoneAnimName);


              var animLength = skeleteAnim.getState("骨架|AttackAnim").length;

              _this4.schedule(_this4.shootOneBossBullet, animLength);
            });
            this.currentMoveTw.start(); // // console.log("start pos", startPos);
            // posIndexList.push(endPos);
            // let posList: Vec3[] = [];
            // for (let i = 0; i < posIndexList.length; i++) {
            //     let indexPos = posIndexList[i];
            //     let pos = this.groundMapCtl.getMapNodeList().getValue(indexPos.x, indexPos.y).position;
            //     posList.push(v3(pos.x, flyHeight, pos.z));
            // }
            // posList.push(v3(endPos.x, flyHeight, endPos.y));
            // // posList.push(v3(endPos.x, flyHeight, endPos.y));
            // // let bezier = new BezierN(posList);
            // // let pathList = bezier.getPointList(30);
            // this.currentMoveTw = this.processMoveAction(posList);
            // this.currentMoveTw.call(() => {
            //     console.log("移动结束");
            // })
            // this.currentMoveTw.start();
            // 随机几个控制点
          }
        }, {
          key: "getOneRandomMapPos",
          value: function getOneRandomMapPos() {
            //从地图里面随机一个点
            var mapSize = this.groundMapCtl.getMapSize();
            return v2(Math.round(Math.random() * (mapSize.x - 1)), Math.round(Math.random() * (mapSize.y - 1)));
          }
        }, {
          key: "processMoveAction",
          value: function processMoveAction(pathList) {
            var _this5 = this;

            //处理移动的动作
            var setTwData = function setTwData(tw, index) {
              var time = 0;
              var angle = new Quat();

              if (index === 0) {
                var dis = v3(_this5.node.position).subtract(pathList[index]).length();
                time = dis / _this5.moveSpeed;
                angle = _this5.getLookAtAngle(_this5.node.position, pathList[index]);
              } else {
                var _dis = v3(pathList[index - 1]).subtract(pathList[index]).length();

                angle = _this5.getLookAtAngle(pathList[index - 1], pathList[index]);
                time = _dis / _this5.moveSpeed;
              }

              tw.call(function () {
                _this5.node.lookAt(pathList[index]);
              });
              tw.to(time, {
                position: pathList[index] // worldRotation: angle

              });
            };

            var tw = new Tween(this.node);

            for (var i = 0; i < pathList.length; i++) {
              setTwData(tw, i);
            }

            return tw;
          }
        }, {
          key: "proceeWalkLogic",
          value: function proceeWalkLogic(startPos, endPos) {
            var _this6 = this;

            //处理走路的逻辑
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

            for (var _i2 = 0; _i2 < pathList.length; _i2++) {
              var pos = pathList[_i2];
              pathPosList.push(this.groundMapCtl.getMapNodeList().getValue(pos[0], pos[1]).position);
            }

            var bezier = new (_crd && BezierN === void 0 ? (_reportPossibleCrUseOfBezierN({
              error: Error()
            }), BezierN) : BezierN)(pathPosList); //通过获取到的 路径点，来制作一条贝塞尔曲线

            this.bezierPathList = bezier.getPointList(30); //路径密度为20

            this.bezierPathList = this.bezierPathList.slice(0, this.bezierPathList.length - 5);
            this.currentMoveTw = this.processMoveAction(this.bezierPathList);
            this.currentMoveTw.call(function () {
              _this6.state.setState("enter-attack-state");
            });
            this.currentMoveTw.start();
            this.state.setState("run");
          }
        }, {
          key: "getLookAtAngle",
          value: function getLookAtAngle(startPos, targetPoint) {
            // //获取到朝向的角度
            var dir = v3(startPos).subtract(targetPoint).normalize();
            var quat = new Quat();
            quat.lerp;
            Quat.fromViewUp(quat, dir, Vec3.UP); // console.log("quat", quat);
            // rotateAround
            // startPos.
            // this.node.rotate/

            return quat;
          }
        }, {
          key: "forzenSelf",
          value: function forzenSelf() {
            //冰冻自己
            if (this.currentMoveTw) {
              this.currentMoveTw.stop();
              var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              var stateAnim = skeleteAnim.getState(this.currentBoneAnimName);

              if (stateAnim) {
                stateAnim.pause();
              }
            }
          }
        }, {
          key: "shootOneBossBullet",
          value: function shootOneBossBullet() {
            var _this7 = this;

            this.currentBoneAnimName = "骨架|AttackAnim";
            var skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            skeleteAnim.play(this.currentBoneAnimName);
            var animLength = skeleteAnim.getState(this.currentBoneAnimName).length;
            this.scheduleOnce(function () {
              // this.enemyCtl.enemyAttacked();//敌人发动了攻击
              _this7.enemyCtl.bossShootOneEgg(_this7.node);
            }, this.animSpeedMulOffset * animLength);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this8 = this;

            this.state.addState("enter-attack-state", function () {
              console.log("移动结束"); //进入攻击状态

              _this8.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this8.rootNode.getComponent(SkeletalAnimationComponent);

              skeleteAnim.play(_this8.currentBoneAnimName);
              var animLength = skeleteAnim.getState(_this8.currentBoneAnimName).length;

              _this8.scheduleOnce(function () {
                // this.enemyCtl.enemyAttacked();//敌人发动了攻击
                //普通敌人的攻击
                _this8.enemyCtl.enemyAttacked(); //敌人发动了攻击

              }, _this8.animSpeedMulOffset * animLength);
            });
            this.state.addState("over", function () {
              _this8.enemyCtl.removeEnemyInList(_this8.node);

              _this8.node.destroy();
            });
            this.state.addState("to-dead", function () {
              _this8.enemyCtl.pushOneEnemyDeadData(new (_crd && DeadEnemyObj === void 0 ? (_reportPossibleCrUseOfDeadEnemyObj({
                error: Error()
              }), DeadEnemyObj) : DeadEnemyObj)(_this8.objectType, _this8.getCurrentGoldCount()));

              if (_this8.currentMoveTw) {
                _this8.currentMoveTw.stop();
              }

              var tw = new Tween(_this8.rootNode);
              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this8.rootNode.active = false;
                _this8.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this8.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this8.caidaiEffect.active = true;
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                _this8.gameController.showAddGoldAnimEffect(_this8.getCurrentGoldCount(), v3(_this8.node.position.x, 0, _this8.node.position.z));
              });
              tw.delay(1);
              tw.call(function () {
                _this8.state.setState("over");
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
              var skeleteAnim = _this8.rootNode.getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                _this8.currentBoneAnimName = "骨架|MoveAnim";
                skeleteAnim.play(_this8.currentBoneAnimName); // let clips = skeleteAnim.clips;
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
              if (_this8.state.getState() !== 'run') {
                return;
              }

              _this8.beAttackedCb = data.cb;
              _this8.currentHealthCount -= data.baseAttackNum;
              var baseGasNum = data.baseGasNum; //取处基础气值

              _this8.currentGasNum += baseGasNum; // scale = 0;

              var scale = _this8.currentGasNum / _this8.baseGasNum; // console.log("scale", scale);

              var tw = new Tween(_this8.node);
              tw.to(0.2, {
                scale: v3(scale, scale, scale)
              });
              tw.start();

              if (_this8.currentHealthCount <= 0) {
                _this8.currentHealthCount = 0;

                if (_this8.beAttackedCb) {
                  _this8.beAttackedCb(true); //被打死了

                }

                _this8.state.setState("to-dead");
              }

              if (isValid(_this8.healthBar)) {
                _this8.healthBar.getComponent(ProgressBarComponent).progress = _this8.currentHealthCount / _this8.healthCount;
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
            var _this9 = this;

            //播放boss 的进场动画
            return new Promise(function (resolve, reject) {
              var skeleteAnim = _this9.rootNode.getComponent(SkeletalAnimationComponent);

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

                _this9.scheduleOnce(function () {
                  resolve();
                }, showClip.length);
              } else {
                skeleteAnim.play("骨架|MoveAnim");

                _this9.scheduleOnce(function () {
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
            this.unschedule(this.shootOneBossBullet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJoZWFsdGhDb3VudCIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZW15Q3RsIiwiY3VycmVudE1vdmVUdyIsImdyb3VuZE1hcEN0bCIsImJlQXR0YWNrZWRDYiIsImJlemllclBhdGhMaXN0IiwiY3VycmVudEJvbmVBbmltTmFtZSIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZ2V0Q29tcG9uZW50Iiwib2JqZWN0VHlwZSIsIkhlYWx0aENvdW50IiwiQmVMb2NrZWRDb3VudCIsImFuZ2xlIiwiZ2V0TG9va0F0QW5nbGUiLCJub2RlIiwicG9zaXRpb24iLCJ3b3JsZFJvdGF0aW9uIiwic3RvcCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRTdGF0ZSIsInNwZWVkIiwic2NoZWR1bGVPbmNlIiwiY3VycmVudFN0YXRlIiwiaW5kZXgiLCJlbmVtdEN0bCIsIm9uIiwiZm9yemVuU2VsZiIsImJpbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3IiwicG9zIiwiZGVsYXkiLCJzZXQiLCJzY2FsZSIsInNob3ciLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJ4IiwieiIsInN0YXJ0UnVuIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwibW92ZVR5cGUiLCJnZXRNb3ZlVHlwZSIsInByb2NlZVdhbGtMb2dpYyIsInByb2Nlc3NGbHlMb2dpYyIsImZseUhlaWdodCIsIm1hcFNpemUiLCJnZXRNYXBTaXplIiwicG9zSW5kZXhMaXN0IiwieSIsImkiLCJwdXNoIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zTGlzdCIsImxlbmd0aCIsInBvc3YyIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIm5vZGVQb3MiLCJiZXppZXIiLCJlbmRQb3NMaXN0IiwiZ2V0UG9pbnRMaXN0IiwicHJvY2Vzc01vdmVBY3Rpb24iLCJhbmltTGVuZ3RoIiwic2NoZWR1bGUiLCJzaG9vdE9uZUJvc3NCdWxsZXQiLCJzZXRUd0RhdGEiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJsb29rQXQiLCJtYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJvYnNQb3NEYXRhTGlzdCIsIm9ic1BvcyIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsInNsaWNlIiwic2V0U3RhdGUiLCJ0YXJnZXRQb2ludCIsImRpciIsIm5vcm1hbGl6ZSIsInF1YXQiLCJsZXJwIiwiZnJvbVZpZXdVcCIsIlVQIiwic3RhdGVBbmltIiwicGF1c2UiLCJwbGF5IiwiYm9zc1Nob290T25lRWdnIiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiYWRkU3RhdGUiLCJlbmVteUF0dGFja2VkIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwiYnkiLCJjYWlkYWlFZmZlY3QiLCJldWxlckFuZ2xlcyIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJjbGlwcyIsInNob3dDbGlwIiwidW5kZWZpbmVkIiwiY2xpcCIsIm5hbWUiLCJvZmYiLCJ1bnNjaGVkdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBOEJDLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTBDQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7OztBQUN4T0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsWSxzQkFBQUEsWTs7QUFDQUMsTUFBQUEsTyxrQkFBQUEsTzs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsa0IsNkJBQUFBLGtCOzs7Ozs7QUFDVDtBQUNRQyxNQUFBQSxPLEdBQXNCbEIsVSxDQUF0QmtCLE87QUFBU0MsTUFBQUEsUSxHQUFhbkIsVSxDQUFibUIsUTs7MkJBRUpDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxVQTBCSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXBCO0FBQVIs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QUtPO0FBQ0g1QyxnQkFBQUEsV0FBVyxDQUFDa0YsSUFBWixDQUFpQixhQUFqQjs7QUFDQSxnQkFBQSxNQUFJLENBQUM5RSxZQUFMLENBQWtCLFlBQU07QUFDcEJRLGtCQUFBQSxPQUFPO0FBQ1YsaUJBRkQsRUFFRyxDQUZIO0FBR0g7QUFDSixhQXJCTSxDQUFQO0FBc0JIOzs7c0NBRVc7QUFDUjtBQUNBO0FBQ0EsaUJBQUtoQyxRQUFMLENBQWNnQixJQUFkLENBQW1CZ0gsR0FBbkIsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQUtuRyxVQUFoRCxFQUE0RCxJQUE1RDtBQUNBLGlCQUFLb0csVUFBTCxDQUFnQixLQUFLdEQsa0JBQXJCO0FBQ0g7Ozs7Ozs7Ozs7O2lCQWxnQjJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgdjMsIFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGJlemllciwgZmluZCwgUXVhdCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEZpbmRQYXRoV2l0aEFTdGFydCB9IGZyb20gJy4uL3V0aWwvRmluZFBhdGhXaXRoQVN0YXJ0JztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZE1hcEN0bDogR3JvdW5kTWFwQ3RsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVBdHRhY2tlZENiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJlemllclBhdGhMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEJvbmVBbmltTmFtZSA9IFwiXCI7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZi5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIiwgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuMSAqIGluZGV4KVxyXG4gICAgICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcuc2hvdygpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICAvLyBib3VuY2VPdXQgcXVhcnRJblxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSwgeyBlYXNpbmc6IFwiYm91bmNlT3V0XCIgfSlcclxuICAgICAgICAgICAgdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0pXHJcblxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSdW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0UnVuKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0IHBvcyBcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICBpZiAobW92ZVR5cGUgPT09IFwiV2Fsa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NGbHlMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbmlYzkurrpo57ooYznmoTpgLvovpFcclxuICAgICAgICAvLzHpppblhYjorr7nva7kuIDmnaHmlYzkurrpnIDopoHpo57ov4fnmoTmjqfliLbngrlcXFxyXG4gICAgICAgIC8vIGxldCBlbmRQb2ludCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoZW5kUG9zLngsIGVuZFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb2ludDtcclxuICAgICAgICBsZXQgZmx5SGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlpITnkIbpo57ooYznmoTpgLvovpFcIik7XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgbGV0IHBvc0luZGV4TGlzdDogVmVjMltdID0gW3YyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBwb3NJbmRleExpc3QucHVzaCh2MihcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKHYyKE1hdGgucm91bmQsOSkpO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKHYyKDIsMikpO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKHYyKDcsNykpO1xyXG5cclxuICAgICAgICAvLyBsZXQgaW5kZXggPSAzO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKHYyKCkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3NcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIGxldCB2ID0gdjIoMCwgMCk7XHJcbiAgICAgICAgLy8gaWYgKHN0YXJ0UG9zLnggPT09IDAgfHwgc3RhcnRQb3MueCA9PT0gMTApIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLlnKjovrnnvJhcIik7XHJcbiAgICAgICAgLy8gICAgIHYueCA9IHN0YXJ0UG9zLnggPT09IDEwID8gMCA6IDEwXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChzdGFydFBvcy55ID09PSAwIHx8IHN0YXJ0UG9zLnkgPT09IDEwKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5Zyo6L6557yYXCIpO1xyXG4gICAgICAgIC8vICAgICB2LnkgPSBzdGFydFBvcy55ID09PSAxMCA/IDAgOiAxMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcG9zSW5kZXhMaXN0LnB1c2godik7XHJcbiAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc3YyID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3YyXCIsIHBvc3YyKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc3YyLngsIHBvc3YyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zTGlzdC5wdXNoKHYzKG5vZGVQb3MueCwgZmx5SGVpZ2h0LCBub2RlUG9zLnopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gdjMocG9zdjIueCwgMCwgcG9zdjIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICBsZXQgZW5kUG9zTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMTAwKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKGVuZFBvc0xpc3QpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mkq3mlL7mlLvlh7vmlYzkurrnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShcIumqqOaetnxBdHRhY2tBbmltXCIpLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCwgYW5pbUxlbmd0aClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICAvLyBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIC8vIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhQb3MgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKGluZGV4UG9zLngsIGluZGV4UG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vICAgICBwb3NMaXN0LnB1c2godjMocG9zLngsIGZseUhlaWdodCwgcG9zLnopKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIC8vIGxldCBwYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMzApO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIOmaj+acuuWHoOS4quaOp+WItueCuVxyXG5cclxuICAgIH1cclxuICAgIGdldE9uZVJhbmRvbU1hcFBvcygpOiBWZWMyIHtcclxuICAgICAgICAvL+S7juWcsOWbvumHjOmdoumaj+acuuS4gOS4queCuVxyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiB2MihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpKVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01vdmVBY3Rpb24ocGF0aExpc3Q6IFZlYzNbXSk6IFR3ZWVuIHtcclxuICAgICAgICAvL+WkhOeQhuenu+WKqOeahOWKqOS9nFxyXG5cclxuICAgICAgICBjb25zdCBzZXRUd0RhdGEgPSAodHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHBhdGhMaXN0W2luZGV4IC0gMV0pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUocGF0aExpc3RbaW5kZXggLSAxXSwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcGF0aExpc3RbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgLy8gd29ybGRSb3RhdGlvbjogYW5nbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRUd0RhdGEodHcsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG4gICAgcHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhui1sOi3r+eahOmAu+i+kVxyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwYXRoUG9zTGlzdCk7IC8v6YCa6L+H6I635Y+W5Yiw55qEIOi3r+W+hOeCue+8jOadpeWItuS9nOS4gOadoei0neWhnuWwlOabsue6v1xyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDMwKTsgLy/ot6/lvoTlr4bluqbkuLoyMFxyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSB0aGlzLmJlemllclBhdGhMaXN0LnNsaWNlKDAsIHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbih0aGlzLmJlemllclBhdGhMaXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwuYm9zc1Nob290T25lRWdnKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAgICAgLy/ov5vlhaXmlLvlh7vnirbmgIFcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgICAgICAgICAvL+aZrumAmuaVjOS6uueahOaUu+WHu1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgICAgIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwib3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucmVtb3ZlRW5lbXlJbkxpc3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnB1c2hPbmVFbmVteURlYWREYXRhKG5ldyBEZWFkRW5lbXlPYmoodGhpcy5vYmplY3RUeXBlLCB0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5ldWxlckFuZ2xlcyA9IHYzKDAsIDM2MCAqIE1hdGgucmFuZG9tKCksIDApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcyBcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmFkZEVuZW15QWRkR29sZEFuaW0odGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihcclxuICAgICAgICAgICAgLy8gICAgIFtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjdXJyZW50UG9zLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMTAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdjMoY3VycmVudFBvcy54ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwLCAyMCArIDEwICogTWF0aC5yYW5kb20oKSwgY3VycmVudFBvcy56ICsgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2MyhjdXJyZW50UG9zLnggKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTAsIDIwICsgMTAgKiBNYXRoLnJhbmRvbSgpLCBjdXJyZW50UG9zLnogKyBNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHYzKGN1cnJlbnRQb3MueCArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCwgMjAgKyAxMCAqIE1hdGgucmFuZG9tKCksIGN1cnJlbnRQb3MueiArIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MClcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIC8vIGxldCBwb2ludExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwMCk7XHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBwb2ludCA9IHBvaW50TGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdWJWMyA9IHYzKHBvaW50KS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLm5vZGUuZXVsZXJBbmdsZXMueTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdWJWMy54ICE9PSAwICYmIHN1YlYzLnogIT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBldWxlckFuZ2xlcyA9IHYyKDEsIDApLnNpZ25BbmdsZSh2MihzdWJWMy54LCBzdWJWMy56KSkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgdHcudG8oMC4wMDgsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogcG9pbnRMaXN0W2ldLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygwLCBldWxlckFuZ2xlcywgMCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2NhbGU6IHYzKCgxIC0gaSAvIHBvaW50TGlzdC5sZW5ndGgpLCgxIC0gaSAvIHBvaW50TGlzdC5sZW5ndGgpLCgxIC0gaSAvIHBvaW50TGlzdC5sZW5ndGgpKVxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLy8gdHcudG8oMC4yICogcG9pbnRMaXN0Lmxlbmd0aCwge3NjYWxlOiB2MygwLDAsMCl9KVxyXG4gICAgICAgICAgICAvLyAvLyB0dy5wYXJhbGxlbChuZXcgVHdlZW4odGhpcy5ub2RlKS50bygwLjAwNyAqIHBvaW50TGlzdC5sZW5ndGgsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pKTtcclxuICAgICAgICAgICAgLy8gLy8gdHcuXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcuYnkoMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJ1blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byA5aeL56e75YqoIFxyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG5cclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IG1vdmVDbGlwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IGNsaXBzLmxlbmd0aCA7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIG1vdmVDbGlwcyA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjbGlwIG5hbWVcIiwgY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY2xpcC5uYW1lID09PSAn6aqo5p62fE1vdmVBbmltJyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1vdmVDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobW92ZUNsaXApe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkobW92ZUNsaXAuKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubGVuZ3RoKCkgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgLy8gdHcudG8obW92ZVRpbWUsIHsgcG9zaXRpb246IHRoaXMuZW5kUG9zIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0dztcclxuICAgICAgICAgICAgLy8g5byA5aeL6L+Q6KGM5LmL5ZCO77yM6K6h566X5LiA5p2hIOacgOefrei3r+W+hFxyXG4gICAgICAgICAgICAvLyBsZXQgcGF0aExpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRQYXRoTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYmUtYXR0YWNrZWRcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy/ooqvmlLvlh7tcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLooqvmlLvlh7tcIiwgYXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYiA9IGRhdGEuY2I7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50IC09IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICAgICAgbGV0IGJhc2VHYXNOdW0gPSBkYXRhLmJhc2VHYXNOdW07IC8v5Y+W5aSE5Z+656GA5rCU5YC8XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gKz0gYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuY3VycmVudEdhc051bSAvIHRoaXMuYmFzZUdhc051bTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKHNjYWxlLCBzY2FsZSwgc2NhbGUpIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6KKr5omT5q275LqGXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMuY3VycmVudE1vdmVQb3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUluZGV4IDwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5jdXJyZW50TW92ZUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/np7vliqjnu5PmnZ9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlIG92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5jdXJyZW50TW92ZVBvcykuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzXCIsIGRpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRpcyA+IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub2ZmKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==