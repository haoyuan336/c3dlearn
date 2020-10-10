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
          _this.currentHealthCount = 0;
          _this.enemyCtl = null;
          _this.currentMoveTw = null;
          _this.groundMapCtl = null;
          _this.beAttackedCb = null;
          _this.bezierPathList = [];
          _this.currentBoneAnimName = "";
          _this.enemyColonyCtl = null;

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, gameController, startPos, endPos) {
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig, gameController);

            if (this.getMoveType().indexOf("Fly") > -1) {
              this.node.position = v3(this.node.position.x, 10, this.node.position.z);
            }

            this.groundMapCtl = find("GameController").getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl);
            this.gameConfigJson = gameConfig; // this.healthCount = this.gameConfigJson[this.objectType].HealthCount;

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
              tw.delay(0.1 * index); // let moveType = this.getMoveType();
              // tw.set({ scale: v3(0, moveType.indexOf("Fly") > -1 ? 10 : 0, 0) })

              tw.show();
              tw.call(function () {
                node.active = true;
              });
              tw.to(0.1, {
                scale: v3(1, 1, 1)
              }); // bounceOut quartIn
              // tw.to(0.4, { position: v3(pos.x, 0, pos.z) }, { easing: "bounceOut" })
              // tw.to(0.4, { position: v3(pos.x, 0, pos.z) })

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
            // console.log("start pos ", startPos);
            this.state.setState("run");
            var moveType = this.getMoveType();

            if (moveType === "Walk") {
              this.proceeWalkLogic(startPos, endPos);
            } else if (moveType === 'Fly') {
              if (this.getIsColony()) {//运行集群系统
                // let list = this.enemyCtl.getCurrentEnemyNodeList();
                // // this.node.position = v3(this.node.position.x, 10, this.node.position.z);
                // let pathVec = [
                //     v2(0, 0), 
                //     v2(10, 0), 
                //     v2(10, 10), 
                //     v2(0, 10), 
                //     v2(2, 1),
                //     v2(9,1),
                //     v2(9,8),
                //     // v2(2,8),
                //     // v2(3,2),
                //     v2(7,3),
                //     v2(7,7),
                //     v2(3,7),
                //     // v2(4,4),
                //     v2(0,0)
                // ];
                // let ctlPos = [];
                // // this.groundMapCtl.getMapNodeList().getValue()
                // for (let i = 0; i < pathVec.length; i++) {
                //     ctlPos.push(this.groundMapCtl.getMapNodeList().getValue(pathVec[i].x, pathVec[i].y).position)
                // }
                // //取出列表里面 的 群集敌人
                // this.enemyColonyCtl = new EnemyColonyCom(list, this.node, ctlPos);
              } else {
                this.processFlyLogic(startPos, endPos);
              }
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
            if (this.state.getState() !== 'run') {
              //当前的游戏状态是run , 如果当前的状态不是运行状态，那么需要打断飞行移动
              return;
            }

            var flyHeight = 10; // console.log("处理飞行的逻辑");

            var mapSize = this.groundMapCtl.getMapSize();
            var posIndexList = [v2(startPos.x, startPos.y)];

            for (var i = 0; i < 8; i++) {
              posIndexList.push(v2(Math.round(Math.random() * (mapSize.x - 1)), Math.round(Math.random() * (mapSize.y - 1))));
            }

            posIndexList.push(endPos);
            var posList = [];

            for (var _i = 0; _i < posIndexList.length; _i++) {
              var posv2 = posIndexList[_i]; // console.log("posv2", posv2);

              var node = this.groundMapCtl.getMapNodeList().getValue(posv2.x, posv2.y);

              if (node) {
                var nodePos = node.position;
                posList.push(v3(nodePos.x, flyHeight, nodePos.z));
              } // let pos = v3(posv2.x, 0, posv2.y);

            }

            var bezier = new (_crd && BezierN === void 0 ? (_reportPossibleCrUseOfBezierN({
              error: Error()
            }), BezierN) : BezierN)(posList);
            var endPosList = bezier.getPointList(200); // this.node.position = endPosList[0];

            this.currentMoveTw = this.processMoveAction(endPosList);
            this.currentMoveTw.call(function () {
              //播放攻击敌人的动画
              // this.state.setState("enter-attack-state");
              _this4.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this4.rootNode.getComponent(SkeletalAnimationComponent); // skeleteAnim.play(this.currentBoneAnimName);


              var animLength = skeleteAnim.getState("骨架|AttackAnim").length; // this.schedule(this.shootOneBossBullet, animLength)

              _this4.shootOneBossBullet().then(function () {
                //在飞一遍
                var startPosRandomList = [v2(0, 0), v2(0, 10), v2(10, 0), v2(10, 10)];
                var randomIndex = Math.round(Math.random() * (startPosRandomList.length - 1));

                _this4.processFlyLogic(startPosRandomList[randomIndex], endPos);
              });
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
            var tw = new Tween(this.node);

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
              } // tw.call(() => {
              //     this.node.lookAt(pathList[index])
              // })
              // this.node.position = pathList[0];


              var rotationAnim = function rotationAnim() {
                var targetPos = pathList[index];
                var dir = v3(_this5.node.position).subtract(targetPos).normalize();
                var targetQuat = new Quat();
                Quat.fromViewUp(targetQuat, dir, Vec3.UP);
                var preQuat = new Quat();
                Quat.lerp(preQuat, new Quat(_this5.node.worldRotation), targetQuat, 0.15);
                _this5.node.worldRotation = preQuat;
              };

              tw.call(function () {
                _this5.node.lookAt(pathList[index]); // this.schedule(rotationAnim, 1 / 60);

              });
              tw.to(time, {
                position: pathList[index] // worldRotation: angle

              });
              tw.call(function () {// this.unschedule(rotationAnim);
              });
            };

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
            if (this.state.getState() !== 'run') {
              return;
            }

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

            this.bezierPathList = bezier.getPointList(50); //路径密度为20

            this.bezierPathList = this.bezierPathList.slice(0, this.bezierPathList.length - 5);

            if (this.node.position.equals(this.bezierPathList[this.bezierPathList.length - 1])) {
              console.log("不用再走一遍逻辑了");
              this.toBeAttack().then(function () {
                _this6.proceeWalkLogic(startPos, endPos);
              });
            } else {
              this.currentMoveTw = this.processMoveAction(this.bezierPathList);
              this.currentMoveTw.call(function () {
                // this.state.setState("enter-attack-state");
                _this6.toBeAttack().then(function () {
                  _this6.proceeWalkLogic(startPos, endPos);
                });
              });
              this.currentMoveTw.start();
            } // this.state.setState("run");

          }
        }, {
          key: "toBeAttack",
          value: function toBeAttack() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this7.rootNode.getComponent(SkeletalAnimationComponent);

              skeleteAnim.play(_this7.currentBoneAnimName);
              var stateAnim = skeleteAnim.getState(_this7.currentBoneAnimName);
              var animLength = stateAnim.length;
              stateAnim.repeatCount = 1;
              var tw = new Tween(_this7.node);
              tw.delay(_this7.animSpeedMulOffset * animLength);
              tw.call(function () {
                console.log("普通敌人发动攻击", _this7.getBaseAttackDamage()); // this.enemyCtl.
                // this.gameController.getComponent(GameController).beatt

                _this7.gameController.enemyAttacked(_this7.getBaseAttackDamage());
              });
              tw.delay((1 - _this7.animSpeedMulOffset) * animLength);
              tw.call(function () {
                resolve();
              });
              tw.start(); // this.scheduleOnce(() => {
              //     // this.enemyCtl.enemyAttacked();//敌人发动了攻击
              //     //普通敌人的攻击
              //     this.enemyCtl.enemyAttacked();//敌人发动了攻击
              // }, this.animSpeedMulOffset * animLength);
            });
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
              this.state.setState("forzen");
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
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              _this8.currentBoneAnimName = "骨架|AttackAnim";

              var skeleteAnim = _this8.rootNode.getComponent(SkeletalAnimationComponent);

              skeleteAnim.play(_this8.currentBoneAnimName);
              var animLength = skeleteAnim.getState(_this8.currentBoneAnimName).length;
              var tw = new Tween(_this8.node);
              tw.delay(_this8.animSpeedMulOffset * animLength);
              tw.call(function () {
                _this8.enemyCtl.bossShootOneEgg(_this8.node);
              });
              tw.delay((1 - _this8.animSpeedMulOffset) * animLength);
              tw.call(function () {
                _this8.currentBoneAnimName = "骨架|MoveAnim";
                skeleteAnim.play(_this8.currentBoneAnimName);

                if (resolve) {
                  resolve();
                }
              });
              tw.start();
            }); // this.scheduleOnce(() => {
            //     // this.enemyCtl.enemyAttacked();//敌人发动了攻击
            //     this.enemyCtl.bossShootOneEgg(this.node);
            // }, this.animSpeedMulOffset * animLength);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this9 = this;

            // this.state.addState("enter-attack-state", () => {
            //     console.log("移动结束");
            //     //进入攻击状态
            //     this.currentBoneAnimName = "骨架|AttackAnim";
            //     let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
            //     skeleteAnim.play(this.currentBoneAnimName);
            //     let animLength = skeleteAnim.getState(this.currentBoneAnimName).length;
            //     this.scheduleOnce(() => {
            //         // this.enemyCtl.enemyAttacked();//敌人发动了攻击
            //         //普通敌人的攻击
            //         // this.enemyCtl.enemyAttacked();//敌人发动了攻击
            //     }, this.animSpeedMulOffset * animLength);
            // })
            this.state.addState("over", function () {
              _this9.enemyCtl.removeEnemyInList(_this9.node);

              _this9.node.destroy();
            });
            this.state.addState("to-dead", function () {
              _this9.enemyCtl.pushOneEnemyDeadData(new (_crd && DeadEnemyObj === void 0 ? (_reportPossibleCrUseOfDeadEnemyObj({
                error: Error()
              }), DeadEnemyObj) : DeadEnemyObj)(_this9.objectType, _this9.getCurrentGoldCount()));

              if (_this9.currentMoveTw) {
                _this9.currentMoveTw.stop();
              }

              var tw = new Tween(_this9.rootNode);
              _this9.node.eulerAngles = v3(0, 0, 0);

              _this9.unscheduleAllCallbacks();

              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this9.node.position = v3(_this9.node.position.x, 0, _this9.node.position.z);
                _this9.rootNode.active = false;
                _this9.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this9.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this9.caidaiEffect.active = true;
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                _this9.gameController.showAddGoldAnimEffect(_this9.getCurrentGoldCount(), v3(_this9.node.position.x, 0, _this9.node.position.z));
              });
              tw.delay(1);
              tw.call(function () {
                _this9.state.setState("over");
              });
              tw.start();
            });
            this.state.addState("run", function () {
              //开始移动 
              var skeleteAnim = _this9.rootNode.getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                _this9.currentBoneAnimName = "骨架|MoveAnim"; // console.log(this.objectType + "播放移动动作", this.currentBoneAnimName);

                skeleteAnim.play(_this9.currentBoneAnimName); // let clips = skeleteAnim.clips;
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
              if (_this9.state.getState() !== 'run') {
                return;
              }

              _this9.beAttackedCb = data.cb;
              _this9.currentHealthCount -= data.baseAttackNum;
              var baseGasNum = data.baseGasNum; //取处基础气值

              _this9.currentGasNum += baseGasNum;
              var tw = new Tween(_this9.node);
              tw.to(0.05, {
                scale: v3(1.05, 0.98, 1.05)
              });
              tw.to(0.05, {
                scale: v3(1, 1, 1)
              });
              tw.start(); // let beAttackAnimName = "骨架|BeAttackAnim"; //被攻击的动画
              // let skeleteAnim = this.rootNode.getComponent(SkeletalAnimationComponent);
              // if (skeleteAnim) {
              //     skeleteAnim.play(beAttackAnimName);
              //     let stateAnim = skeleteAnim.getState(beAttackAnimName);
              //     if (stateAnim && !stateAnim.isPlaying) {
              //         let length = stateAnim.length;
              //         this.scheduleOnce(() => {
              //             skeleteAnim.play(this.currentBoneAnimName);
              //         }, length);
              //     }
              //     // let beAttakcClick = skeleteAnim.clips
              // }
              // scale = 0;
              // let scale = this.currentGasNum / this.baseGasNum;
              // console.log("scale", scale);
              // this.currentMoveTw.stop();
              // this.node.
              // stop
              // Tween.
              // let tw = new Tween(this.node);
              // tw.to(0.2, { scale: v3(scale, scale, scale) });
              // tw.call(() => {
              // this.currentMoveTw
              // })
              // tw.start();

              if (_this9.currentHealthCount <= 0) {
                _this9.currentHealthCount = 0;

                if (_this9.beAttackedCb) {
                  _this9.beAttackedCb(true); //被打死了

                }

                _this9.state.setState("to-dead");
              }

              if (isValid(_this9.healthBar)) {
                _this9.healthBar.getComponent(ProgressBarComponent).progress = _this9.currentHealthCount / _this9.healthCount;
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
            if (this.enemyColonyCtl) {
              this.enemyColonyCtl.update(deltaTime);
            } // Your update function goes here.
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
            var _this10 = this;

            //播放boss 的进场动画
            return new Promise(function (resolve, reject) {
              var skeleteAnim = _this10.rootNode.getComponent(SkeletalAnimationComponent);

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

                _this10.scheduleOnce(function () {
                  resolve();
                }, showClip.length);
              } else {
                skeleteAnim.play("骨架|MoveAnim");

                _this10.scheduleOnce(function () {
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
            if (this.enemyCtl && isValid(this.enemyCtl.node)) {
              this.enemyCtl.node.off("frozen-all-enemy", this.forzenSelf, this);
            } // this.unschedule(this.shootOneBossBullet);

          }
        }, {
          key: "getColonyComCtl",
          value: function getColonyComCtl() {
            return this.enemyColonyCtl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmVteUN0bCIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZ2V0TW92ZVR5cGUiLCJpbmRleE9mIiwibm9kZSIsInBvc2l0aW9uIiwieCIsInoiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiQmVMb2NrZWRDb3VudCIsImhlYWx0aENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIndvcmxkUm90YXRpb24iLCJzdG9wIiwic2tlbGV0ZUFuaW0iLCJyb290Tm9kZSIsImdldFN0YXRlIiwic3BlZWQiLCJzY2hlZHVsZU9uY2UiLCJjdXJyZW50U3RhdGUiLCJpbmRleCIsImVuZW10Q3RsIiwib24iLCJmb3J6ZW5TZWxmIiwiYmluZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJkZWxheSIsInNob3ciLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJzY2FsZSIsInN0YXJ0UnVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsIm1vdmVUeXBlIiwicHJvY2VlV2Fsa0xvZ2ljIiwiZ2V0SXNDb2xvbnkiLCJwcm9jZXNzRmx5TG9naWMiLCJmbHlIZWlnaHQiLCJtYXBTaXplIiwiZ2V0TWFwU2l6ZSIsInBvc0luZGV4TGlzdCIsInkiLCJpIiwicHVzaCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvc0xpc3QiLCJsZW5ndGgiLCJwb3N2MiIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJub2RlUG9zIiwiYmV6aWVyIiwiZW5kUG9zTGlzdCIsImdldFBvaW50TGlzdCIsInByb2Nlc3NNb3ZlQWN0aW9uIiwiYW5pbUxlbmd0aCIsInNob290T25lQm9zc0J1bGxldCIsInRoZW4iLCJzdGFydFBvc1JhbmRvbUxpc3QiLCJyYW5kb21JbmRleCIsInNldFR3RGF0YSIsInRpbWUiLCJkaXMiLCJzdWJ0cmFjdCIsIm1vdmVTcGVlZCIsInJvdGF0aW9uQW5pbSIsInRhcmdldFBvcyIsImRpciIsIm5vcm1hbGl6ZSIsInRhcmdldFF1YXQiLCJmcm9tVmlld1VwIiwiVVAiLCJwcmVRdWF0IiwibGVycCIsImxvb2tBdCIsIm1hcE5vZGVMaXN0Iiwib2JzUG9zTGlzdCIsImdldE9ic1Bvc0xpc3QiLCJwYXRoVG9vbCIsIm9ic1Bvc0RhdGFMaXN0Iiwib2JzUG9zIiwidXBkYXRlT2JzRGF0YSIsImZpbmRQYXRoTGlzdCIsInBhdGhQb3NMaXN0Iiwic2xpY2UiLCJlcXVhbHMiLCJjb25zb2xlIiwibG9nIiwidG9CZUF0dGFjayIsInBsYXkiLCJzdGF0ZUFuaW0iLCJyZXBlYXRDb3VudCIsImFuaW1TcGVlZE11bE9mZnNldCIsImdldEJhc2VBdHRhY2tEYW1hZ2UiLCJlbmVteUF0dGFja2VkIiwidGFyZ2V0UG9pbnQiLCJxdWF0IiwicGF1c2UiLCJib3NzU2hvb3RPbmVFZ2ciLCJhZGRTdGF0ZSIsInJlbW92ZUVuZW15SW5MaXN0IiwiZGVzdHJveSIsInB1c2hPbmVFbmVteURlYWREYXRhIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImV1bGVyQW5nbGVzIiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsImJ5IiwiY2FpZGFpRWZmZWN0Iiwic2hvd0FkZEdvbGRBbmltRWZmZWN0IiwiZGF0YSIsImNiIiwiYmFzZUF0dGFja051bSIsImJhc2VHYXNOdW0iLCJjdXJyZW50R2FzTnVtIiwicHJvZ3Jlc3MiLCJ0b3dlciIsImRlbHRhVGltZSIsInVwZGF0ZSIsImNsaXBzIiwic2hvd0NsaXAiLCJ1bmRlZmluZWQiLCJjbGlwIiwibmFtZSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsSyxPQUFBQSxLO0FBQThCQyxNQUFBQSxFLE9BQUFBLEU7QUFBcUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxvQixPQUFBQSxvQjtBQUEwQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNkRDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDeE9DLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBRUFDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFksc0JBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sa0JBQUFBLE87O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7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IFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGJlemllciwgZmluZCwgUXVhdCwgU3BoZXJlQ29sbGlkZXJDb21wb25lbnQsIE1vZGVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG5pbXBvcnQgeyBFbmVteUNvbG9ueUNvbSB9IGZyb20gJy4vRW5lbXlDb2xvbnlDb20nO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuZW5lbXlCZUxvY2tNYXhOdW07XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmV6aWVyUGF0aExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50Qm9uZUFuaW1OYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgZW5lbXlDb2xvbnlDdGw6IEVuZW15Q29sb255Q29tID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvczogVmVjMywgZW5kUG9zOiBWZWMzKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKS5pbmRleE9mKFwiRmx5XCIpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDEwLCB0aGlzLm5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JvdW5kTWFwQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIC8vIHRoaXMuaGVhbHRoQ291bnQgPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uSGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5iZUxvY2tlZE1heE51bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CZUxvY2tlZENvdW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgZW5kUG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IGFuZ2xlO1xyXG5cclxuICAgIH1cclxuICAgIGVudGVyU2hvd0Jvc3NFbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRpdWVQbGF5TW92ZUFuaW0oKSB7XHJcbiAgICAgICAgLy/nu6fnu63ooYzotbBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgc3RhdGUuc3BlZWQgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnNwZWVkID0gMTtcclxuICAgICAgICAgICAgfSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dFbmVteUVudGVyQW5pbShpbmRleDogbnVtYmVyLCBlbmVtdEN0bDogRW5lbXlDb250cm9sbGVyLCBzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bCA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLmJpbmQodGhpcyksIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLm5vZGUub24oJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiLCB0aGlzLmNvbnRpdWVQbGF5TW92ZUFuaW0sIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuMSAqIGluZGV4KVxyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVR5cGUgPSB0aGlzLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgICAgIC8vIHR3LnNldCh7IHNjYWxlOiB2MygwLCBtb3ZlVHlwZS5pbmRleE9mKFwiRmx5XCIpID4gLTEgPyAxMCA6IDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LnNob3coKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgLy8gYm91bmNlT3V0IHF1YXJ0SW5cclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9KVxyXG5cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnN0YXJ0UnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UnVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydFJ1bihzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3MgXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICBpZiAobW92ZVR5cGUgPT09IFwiV2Fsa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElzQ29sb255KCkpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+Q6KGM6ZuG576k57O757ufXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbGlzdCA9IHRoaXMuZW5lbXlDdGwuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBhdGhWZWMgPSBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigyLCAxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMiw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigzLDIpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsMyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigzLDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDQsNCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwwKVxyXG4gICAgICAgICAgICAgICAgLy8gXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdGxQb3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoVmVjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY3RsUG9zLnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwYXRoVmVjW2ldLngsIHBhdGhWZWNbaV0ueSkucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WPluWHuuWIl+ihqOmHjOmdoiDnmoQg576k6ZuG5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q29sb255Q3RsID0gbmV3IEVuZW15Q29sb255Q29tKGxpc3QsIHRoaXMubm9kZSwgY3RsUG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhuaVjOS6uumjnuihjOeahOmAu+i+kVxyXG4gICAgICAgIC8vMemmluWFiOiuvue9ruS4gOadoeaVjOS6uumcgOimgemjnui/h+eahOaOp+WItueCuVxcXHJcbiAgICAgICAgLy8gbGV0IGVuZFBvaW50ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShlbmRQb3MueCwgZW5kUG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvaW50O1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIC8v5b2T5YmN55qE5ri45oiP54q25oCB5pivcnVuICwg5aaC5p6c5b2T5YmN55qE54q25oCB5LiN5piv6L+Q6KGM54q25oCB77yM6YKj5LmI6ZyA6KaB5omT5pat6aOe6KGM56e75YqoXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZseUhlaWdodCA9IDEwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aSE55CG6aOe6KGM55qE6YC76L6RXCIpO1xyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIGxldCBwb3NJbmRleExpc3Q6IFZlYzJbXSA9IFt2MihzdGFydFBvcy54LCBzdGFydFBvcy55KV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2godjIoXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueSAtIDEpKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc3YyID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc3YyXCIsIHBvc3YyKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc3YyLngsIHBvc3YyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zTGlzdC5wdXNoKHYzKG5vZGVQb3MueCwgZmx5SGVpZ2h0LCBub2RlUG9zLnopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gdjMocG9zdjIueCwgMCwgcG9zdjIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICBsZXQgZW5kUG9zTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMjAwKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gZW5kUG9zTGlzdFswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKGVuZFBvc0xpc3QpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mkq3mlL7mlLvlh7vmlYzkurrnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShcIumqqOaetnxBdHRhY2tBbmltXCIpLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCwgYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5Zyo6aOe5LiA6YGNXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NSYW5kb21MaXN0ID0gW3YyKDAsIDApLCB2MigwLCAxMCksIHYyKDEwLCAwKSwgdjIoMTAsIDEwKV1cclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChzdGFydFBvc1JhbmRvbUxpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmx5TG9naWMoc3RhcnRQb3NSYW5kb21MaXN0W3JhbmRvbUluZGV4XSwgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHBvc1wiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgLy8gcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICAvLyBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGluZGV4UG9zID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgcG9zID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShpbmRleFBvcy54LCBpbmRleFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyAgICAgcG9zTGlzdC5wdXNoKHYzKHBvcy54LCBmbHlIZWlnaHQsIHBvcy56KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHBvc0xpc3QucHVzaCh2MyhlbmRQb3MueCwgZmx5SGVpZ2h0LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIC8vIC8vIHBvc0xpc3QucHVzaCh2MyhlbmRQb3MueCwgZmx5SGVpZ2h0LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIC8vIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICAvLyAvLyBsZXQgcGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDMwKTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAvLyDpmo/mnLrlh6DkuKrmjqfliLbngrlcclxuXHJcbiAgICB9XHJcbiAgICBnZXRPbmVSYW5kb21NYXBQb3MoKTogVmVjMiB7XHJcbiAgICAgICAgLy/ku47lnLDlm77ph4zpnaLpmo/mnLrkuIDkuKrngrlcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICByZXR1cm4gdjIoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueSAtIDEpKSlcclxuICAgIH1cclxuICAgIHByb2Nlc3NNb3ZlQWN0aW9uKHBhdGhMaXN0OiBWZWMzW10pOiBUd2VlbiB7XHJcbiAgICAgICAgLy/lpITnkIbnp7vliqjnmoTliqjkvZxcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICBjb25zdCBzZXRUd0RhdGEgPSAodHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjMocGF0aExpc3RbaW5kZXggLSAxXSkuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZShwYXRoTGlzdFtpbmRleCAtIDFdLCBwYXRoTGlzdFtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmxvb2tBdChwYXRoTGlzdFtpbmRleF0pXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBwYXRoTGlzdFswXTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uQW5pbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBwYXRoTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0YXJnZXRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5mcm9tVmlld1VwKHRhcmdldFF1YXQsIGRpciwgVmVjMy5VUCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlUXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBRdWF0LmxlcnAocHJlUXVhdCwgbmV3IFF1YXQodGhpcy5ub2RlLndvcmxkUm90YXRpb24pLCB0YXJnZXRRdWF0LCAwLjE1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53b3JsZFJvdGF0aW9uID0gcHJlUXVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUocm90YXRpb25BbmltLCAxIC8gNjApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcGF0aExpc3RbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgLy8gd29ybGRSb3RhdGlvbjogYW5nbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUocm90YXRpb25BbmltKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRUd0RhdGEodHcsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG4gICAgcHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhui1sOi3r+eahOmAu+i+kVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcE5vZGVMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgb2JzUG9zTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE9ic1Bvc0xpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFRvb2wgPSBuZXcgRmluZFBhdGhXaXRoQVN0YXJ0KG1hcE5vZGVMaXN0LCBbc3RhcnRQb3MueCwgc3RhcnRQb3MueV0sIFtlbmRQb3MueCwgZW5kUG9zLnldKTtcclxuICAgICAgICBsZXQgb2JzUG9zRGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic1Bvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9ic1BvcyA9IG9ic1Bvc0xpc3RbaV07XHJcbiAgICAgICAgICAgIG9ic1Bvc0RhdGFMaXN0LnB1c2goW29ic1Bvcy54LCBvYnNQb3MueV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoVG9vbC51cGRhdGVPYnNEYXRhKG9ic1Bvc0RhdGFMaXN0KTtcclxuICAgICAgICBsZXQgcGF0aExpc3QgPSBwYXRoVG9vbC5maW5kUGF0aExpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhMaXN0W2ldO1xyXG4gICAgICAgICAgICBwYXRoUG9zTGlzdC5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zWzBdLCBwb3NbMV0pLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBhdGhQb3NMaXN0KTsgLy/pgJrov4fojrflj5bliLDnmoQg6Lev5b6E54K577yM5p2l5Yi25L2c5LiA5p2h6LSd5aGe5bCU5puy57q/XHJcbiAgICAgICAgdGhpcy5iZXppZXJQYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoNTApOyAvL+i3r+W+hOWvhuW6puS4ujIwXHJcbiAgICAgICAgdGhpcy5iZXppZXJQYXRoTGlzdCA9IHRoaXMuYmV6aWVyUGF0aExpc3Quc2xpY2UoMCwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSA1KTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBvc2l0aW9uLmVxdWFscyh0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN55So5YaN6LWw5LiA6YGN6YC76L6R5LqGXCIpXHJcbiAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbih0aGlzLmJlemllclBhdGhMaXN0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvQmVBdHRhY2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgfVxyXG4gICAgdG9CZUF0dGFjaygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBzdGF0ZUFuaW0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcuZGVsYXkodGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pmu6YCa5pWM5Lq65Y+R5Yqo5pS75Ye7XCIsIHRoaXMuZ2V0QmFzZUF0dGFja0RhbWFnZSgpKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuYmVhdHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW5lbXlBdHRhY2tlZCh0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgICAgIC8vICAgICAvL+aZrumAmuaVjOS6uueahOaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgICAgIC8vIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldExvb2tBdEFuZ2xlKHN0YXJ0UG9zLCB0YXJnZXRQb2ludDogVmVjMyk6IFF1YXQge1xyXG4gICAgICAgIC8vIC8v6I635Y+W5Yiw5pyd5ZCR55qE6KeS5bqmXHJcblxyXG4gICAgICAgIGxldCBkaXIgPSB2MyhzdGFydFBvcykuc3VidHJhY3QodGFyZ2V0UG9pbnQpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICBxdWF0LmxlcnBcclxuICAgICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgZGlyLCBWZWMzLlVQKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJxdWF0XCIsIHF1YXQpO1xyXG4gICAgICAgIC8vIHJvdGF0ZUFyb3VuZFxyXG4gICAgICAgIC8vIHN0YXJ0UG9zLlxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5yb3RhdGUvXHJcblxyXG4gICAgICAgIHJldHVybiBxdWF0XHJcbiAgICB9XHJcbiAgICBmb3J6ZW5TZWxmKCkge1xyXG4gICAgICAgIC8v5Yaw5Ya76Ieq5bexXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZm9yemVuXCIpO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZUFuaW0ucGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG9vdE9uZUJvc3NCdWxsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoKDEgLSB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCkgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fE1vdmVBbmltXCJcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuYm9zc1Nob290T25lRWdnKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIC8vIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyAgICAgLy/ov5vlhaXmlLvlh7vnirbmgIFcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgIC8vICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAvLyAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgLy8gICAgICAgICAvL+aZrumAmuaVjOS6uueahOaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgLy8gICAgIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwib3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucmVtb3ZlRW5lbXlJbkxpc3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnB1c2hPbmVFbmVteURlYWREYXRhKG5ldyBEZWFkRW5lbXlPYmoodGhpcy5vYmplY3RUeXBlLCB0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmV1bGVyQW5nbGVzID0gdjMoMCwgMzYwICogTWF0aC5yYW5kb20oKSwgMClcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHYzKDAsIDAsIDApKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzIFwiLCBkaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA8IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuYWRkRW5lbXlBZGRHb2xkQW5pbSh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnNob3dBZGRHb2xkQW5pbUVmZmVjdCh0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSwgdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDAsIHRoaXMubm9kZS5wb3NpdGlvbi56KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgxKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+W8gOWni+enu+WKqCBcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fE1vdmVBbmltXCJcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqZWN0VHlwZSArIFwi5pKt5pS+56e75Yqo5Yqo5L2cXCIsIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgICAgIC8vIGxldCBtb3ZlQ2xpcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCBjbGlwcy5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBtb3ZlQ2xpcHMgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2xpcCBuYW1lXCIsIGNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ+mqqOaetnxNb3ZlQW5pbScpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtb3ZlQ2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG1vdmVDbGlwKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KG1vdmVDbGlwLilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBtb3ZlXCIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUaW1lID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLmxlbmd0aCgpIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKG1vdmVUaW1lLCB7IHBvc2l0aW9uOiB0aGlzLmVuZFBvcyB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcbiAgICAgICAgICAgIC8vIOW8gOWni+i/kOihjOS5i+WQju+8jOiuoeeul+S4gOadoSDmnIDnn63ot6/lvoRcclxuICAgICAgICAgICAgLy8gbGV0IHBhdGhMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0UGF0aExpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBiYXNlR2FzTnVtID0gZGF0YS5iYXNlR2FzTnVtOyAvL+WPluWkhOWfuuehgOawlOWAvFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtICs9IGJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4wNSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHYzKDEuMDUsIDAuOTgsIDEuMDUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLCAxLCAxKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBiZUF0dGFja0FuaW1OYW1lID0gXCLpqqjmnrZ8QmVBdHRhY2tBbmltXCI7IC8v6KKr5pS75Ye755qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgLy8gaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KGJlQXR0YWNrQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGJlQXR0YWNrQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHN0YXRlQW5pbSAmJiAhc3RhdGVBbmltLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBsZW5ndGggPSBzdGF0ZUFuaW0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgYmVBdHRha2NDbGljayA9IHNrZWxldGVBbmltLmNsaXBzXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRHYXNOdW0gLyB0aGlzLmJhc2VHYXNOdW07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVcIiwgc2NhbGUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuXHJcbiAgICAgICAgICAgIC8vIHN0b3BcclxuICAgICAgICAgICAgLy8gVHdlZW4uXHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHsgc2NhbGU6IHYzKHNjYWxlLCBzY2FsZSwgc2NhbGUpIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVBdHRhY2tlZENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ooqvmiZPmrbvkuoZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaGVhbHRoQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuICAgIH1cclxuICAgIGdldElzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3ZlcicgfHwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAndG8tZGVhZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQ2FuTG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCA8IHRoaXMuYmVMb2NrZWRNYXhOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgdW5TZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQtLTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Q29sb255Q3RsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDb2xvbnlDdGwudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy5jdXJyZW50TW92ZVBvcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlSW5kZXggPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gdGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmN1cnJlbnRNb3ZlSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL+enu+WKqOe7k+adn1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUgb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLmN1cnJlbnRNb3ZlUG9zKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXMgPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGlzID4gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZChkaXIubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoZGVsdGFUaW1lKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcclxuICAgICAgICAgICAgbGV0IGNsaXBzID0gc2tlbGV0ZUFuaW0uY2xpcHM7XHJcbiAgICAgICAgICAgIGxldCBzaG93Q2xpcCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLm5hbWUgPT09ICdib3NzLXNob3cnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG93Q2xpcCkge1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSgnYm9zcy1zaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgc2hvd0NsaXAubGVuZ3RoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShcIumqqOaetnxNb3ZlQW5pbVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW0nLCB0aGlzLmNvbnRpdWVQbGF5TW92ZUFuaW0sIHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Q3RsICYmIGlzVmFsaWQodGhpcy5lbmVteUN0bC5ub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub2ZmKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sb255Q29tQ3RsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Q29sb255Q3RsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==