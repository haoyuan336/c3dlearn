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
              tw.delay(0.2 * index); // let moveType = this.getMoveType();
              // tw.set({ scale: v3(0, moveType.indexOf("Fly") > -1 ? 10 : 0, 0) })

              tw.show();
              tw.call(function () {
                // this.gameController.node.emit("play-audio", this.getShowAudio());
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
            this.gameController.node.emit("play-audio", this.getShowAudio());

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
            this.gameController.node.emit("play-audio", this.getShowAudio());

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

              _this7.gameController.node.emit("play-audio", _this7.shootAudio);

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

                _this8.gameController.node.emit("play-audio", _this8.shootAudio);
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

              var tw = new Tween(_this9.rootNode); // this.node.eulerAngles = v3(0, 0, 0);

              _this9.unscheduleAllCallbacks();

              tw.by(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                if (_this9.deadAudio) {
                  _this9.gameController.node.emit("play-audio", _this9.deadAudio);
                }

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

                skeleteAnim.play(_this9.currentBoneAnimName);
              }

              _this9.playWalkAudio();
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
                  _this9.beAttackedCb(true, _this9.getHealthCount()); //被打死了

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
          key: "playWalkAudio",
          value: function playWalkAudio() {
            var _this10 = this;

            if (this.walkAudio) {
              this.gameController.node.emit("play-audio", this.walkAudio, function () {
                console.log("音效播放完成", _this10.state.getState());

                if (_this10.state.getState() === 'run') {
                  _this10.playWalkAudio();
                }
              });
            }
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
            var _this11 = this;

            //播放boss 的进场动画
            return new Promise(function (resolve, reject) {
              var skeleteAnim = _this11.rootNode.getComponent(SkeletalAnimationComponent);

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

                _this11.scheduleOnce(function () {
                  resolve();
                }, showClip.length);
              } else {
                skeleteAnim.play("骨架|MoveAnim");

                _this11.scheduleOnce(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmVteUN0bCIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZ2V0TW92ZVR5cGUiLCJpbmRleE9mIiwibm9kZSIsInBvc2l0aW9uIiwieCIsInoiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiQmVMb2NrZWRDb3VudCIsImhlYWx0aENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIndvcmxkUm90YXRpb24iLCJzdG9wIiwic2tlbGV0ZUFuaW0iLCJyb290Tm9kZSIsImdldFN0YXRlIiwic3BlZWQiLCJzY2hlZHVsZU9uY2UiLCJjdXJyZW50U3RhdGUiLCJpbmRleCIsImVuZW10Q3RsIiwib24iLCJmb3J6ZW5TZWxmIiwiYmluZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJkZWxheSIsInNob3ciLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJzY2FsZSIsInN0YXJ0UnVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsIm1vdmVUeXBlIiwicHJvY2VlV2Fsa0xvZ2ljIiwiZ2V0SXNDb2xvbnkiLCJwcm9jZXNzRmx5TG9naWMiLCJlbWl0IiwiZ2V0U2hvd0F1ZGlvIiwiZmx5SGVpZ2h0IiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJwb3NJbmRleExpc3QiLCJ5IiwiaSIsInB1c2giLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3NMaXN0IiwibGVuZ3RoIiwicG9zdjIiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwibm9kZVBvcyIsImJlemllciIsImVuZFBvc0xpc3QiLCJnZXRQb2ludExpc3QiLCJwcm9jZXNzTW92ZUFjdGlvbiIsImFuaW1MZW5ndGgiLCJzaG9vdE9uZUJvc3NCdWxsZXQiLCJ0aGVuIiwic3RhcnRQb3NSYW5kb21MaXN0IiwicmFuZG9tSW5kZXgiLCJzZXRUd0RhdGEiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJyb3RhdGlvbkFuaW0iLCJ0YXJnZXRQb3MiLCJkaXIiLCJub3JtYWxpemUiLCJ0YXJnZXRRdWF0IiwiZnJvbVZpZXdVcCIsIlVQIiwicHJlUXVhdCIsImxlcnAiLCJsb29rQXQiLCJtYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJvYnNQb3NEYXRhTGlzdCIsIm9ic1BvcyIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsInNsaWNlIiwiZXF1YWxzIiwiY29uc29sZSIsImxvZyIsInRvQmVBdHRhY2siLCJwbGF5Iiwic3RhdGVBbmltIiwicmVwZWF0Q291bnQiLCJzaG9vdEF1ZGlvIiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiZ2V0QmFzZUF0dGFja0RhbWFnZSIsImVuZW15QXR0YWNrZWQiLCJ0YXJnZXRQb2ludCIsInF1YXQiLCJwYXVzZSIsImJvc3NTaG9vdE9uZUVnZyIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsImJ5IiwiZGVhZEF1ZGlvIiwiY2FpZGFpRWZmZWN0IiwiZXVsZXJBbmdsZXMiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJwbGF5V2Fsa0F1ZGlvIiwiZGF0YSIsImNiIiwiYmFzZUF0dGFja051bSIsImJhc2VHYXNOdW0iLCJjdXJyZW50R2FzTnVtIiwiZ2V0SGVhbHRoQ291bnQiLCJwcm9ncmVzcyIsIndhbGtBdWRpbyIsInRvd2VyIiwiZGVsdGFUaW1lIiwidXBkYXRlIiwiY2xpcHMiLCJzaG93Q2xpcCIsInVuZGVmaW5lZCIsImNsaXAiLCJuYW1lIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBOEJDLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTBDQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7OztBQUN4T0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFF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V0FBbEIsRUFBK0I7QUFDM0JILGtCQUFBQSxRQUFRLEdBQUdFLElBQVg7QUFDSDtBQUNKOztBQUNELGtCQUFJRixRQUFKLEVBQWM7QUFDVnhILGdCQUFBQSxXQUFXLENBQUNxRixJQUFaLENBQWlCLFdBQWpCOztBQUNBLGdCQUFBLE9BQUksQ0FBQ2pGLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQlEsa0JBQUFBLE9BQU87QUFDVixpQkFGRCxFQUVHNEcsUUFBUSxDQUFDOUUsTUFGWjtBQUdILGVBTEQsTUFLTztBQUNIMUMsZ0JBQUFBLFdBQVcsQ0FBQ3FGLElBQVosQ0FBaUIsYUFBakI7O0FBQ0EsZ0JBQUEsT0FBSSxDQUFDakYsWUFBTCxDQUFrQixZQUFNO0FBQ3BCUSxrQkFBQUEsT0FBTztBQUNWLGlCQUZELEVBRUcsQ0FGSDtBQUdIO0FBQ0osYUFyQk0sQ0FBUDtBQXNCSDs7O3NDQUVXO0FBQ1I7QUFDQTtBQUNBLGdCQUFJLEtBQUtyQyxRQUFMLElBQWlCMUIsT0FBTyxDQUFDLEtBQUswQixRQUFMLENBQWNhLElBQWYsQ0FBNUIsRUFBa0Q7QUFDOUMsbUJBQUtiLFFBQUwsQ0FBY2EsSUFBZCxDQUFtQndJLEdBQW5CLENBQXVCLGtCQUF2QixFQUEyQyxLQUFLbkgsVUFBaEQsRUFBNEQsSUFBNUQ7QUFDSCxhQUxPLENBTVI7O0FBQ0g7Ozs0Q0FDaUI7QUFDZCxtQkFBTyxLQUFLNUIsY0FBWjtBQUNIOzs7Ozs7Ozs7OztpQkFsbUIyQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIsIGZpbmQsIFF1YXQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBNb2RlbENvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEZpbmRQYXRoV2l0aEFTdGFydCB9IGZyb20gJy4uL3V0aWwvRmluZFBhdGhXaXRoQVN0YXJ0JztcclxuaW1wb3J0IHsgRW5lbXlDb2xvbnlDb20gfSBmcm9tICcuL0VuZW15Q29sb255Q29tJztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICAvLyBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZE1hcEN0bDogR3JvdW5kTWFwQ3RsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVBdHRhY2tlZENiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJlemllclBhdGhMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEJvbmVBbmltTmFtZSA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVuZW15Q29sb255Q3RsOiBFbmVteUNvbG9ueUNvbSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkuaW5kZXhPZihcIkZseVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICAvLyB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZi5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIiwgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjIgKiBpbmRleClcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUeXBlID0gdGhpcy5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgICAgICAvLyB0dy5zZXQoeyBzY2FsZTogdjMoMCwgbW92ZVR5cGUuaW5kZXhPZihcIkZseVwiKSA+IC0xID8gMTAgOiAwLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy5zaG93KCk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZ2V0U2hvd0F1ZGlvKCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zIFwiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVUeXBlID0gdGhpcy5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgIGlmIChtb3ZlVHlwZSA9PT0gXCJXYWxrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlVHlwZSA9PT0gJ0ZseScpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXNDb2xvbnkoKSkge1xyXG4gICAgICAgICAgICAgICAgLy/ov5DooYzpm4bnvqTns7vnu59cclxuICAgICAgICAgICAgICAgIC8vIGxldCBsaXN0ID0gdGhpcy5lbmVteUN0bC5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDEwLCB0aGlzLm5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGF0aFZlYyA9IFtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigxMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigwLCAxMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDIsIDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksMSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoOSw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigyLDgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDMsMiksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNywzKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig3LDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDMsNyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoNCw0KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigwLDApXHJcbiAgICAgICAgICAgICAgICAvLyBdO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGN0bFBvcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZSgpXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhWZWMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjdGxQb3MucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBhdGhWZWNbaV0ueCwgcGF0aFZlY1tpXS55KS5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIC8v5Y+W5Ye65YiX6KGo6YeM6Z2iIOeahCDnvqTpm4bmlYzkurpcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDb2xvbnlDdGwgPSBuZXcgRW5lbXlDb2xvbnlDb20obGlzdCwgdGhpcy5ub2RlLCBjdGxQb3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmx5TG9naWMoc3RhcnRQb3MsIGVuZFBvcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzRmx5TG9naWMoc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8v5aSE55CG5pWM5Lq66aOe6KGM55qE6YC76L6RXHJcbiAgICAgICAgLy8x6aaW5YWI6K6+572u5LiA5p2h5pWM5Lq66ZyA6KaB6aOe6L+H55qE5o6n5Yi254K5XFxcclxuICAgICAgICAvLyBsZXQgZW5kUG9pbnQgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKGVuZFBvcy54LCBlbmRQb3MueSkucG9zaXRpb247XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gZW5kUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZ2V0U2hvd0F1ZGlvKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOa4uOaIj+eKtuaAgeaYr3J1biAsIOWmguaenOW9k+WJjeeahOeKtuaAgeS4jeaYr+i/kOihjOeKtuaAge+8jOmCo+S5iOmcgOimgeaJk+aWremjnuihjOenu+WKqFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmbHlIZWlnaHQgPSAxMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWkhOeQhumjnuihjOeahOmAu+i+kVwiKTtcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICBsZXQgcG9zSW5kZXhMaXN0OiBWZWMyW10gPSBbdjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSldO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKHYyKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSxcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3N2MiA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3N2MlwiLCBwb3N2Mik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3N2Mi54LCBwb3N2Mi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvc0xpc3QucHVzaCh2Myhub2RlUG9zLngsIGZseUhlaWdodCwgbm9kZVBvcy56KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IHBvcyA9IHYzKHBvc3YyLngsIDAsIHBvc3YyLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgbGV0IGVuZFBvc0xpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihlbmRQb3NMaXN0KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+5pS75Ye75pWM5Lq655qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoXCLpqqjmnrZ8QXR0YWNrQW5pbVwiKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQsIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+WcqOmjnuS4gOmBjVxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zUmFuZG9tTGlzdCA9IFt2MigwLCAwKSwgdjIoMCwgMTApLCB2MigxMCwgMCksIHYyKDEwLCAxMCldXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoc3RhcnRQb3NSYW5kb21MaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zUmFuZG9tTGlzdFtyYW5kb21JbmRleF0sIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3NcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgLy8gbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBpbmRleFBvcyA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoaW5kZXhQb3MueCwgaW5kZXhQb3MueSkucG9zaXRpb247XHJcbiAgICAgICAgLy8gICAgIHBvc0xpc3QucHVzaCh2Myhwb3MueCwgZmx5SGVpZ2h0LCBwb3MueikpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gLy8gbGV0IHBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihwb3NMaXN0KTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8g6ZqP5py65Yeg5Liq5o6n5Yi254K5XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0T25lUmFuZG9tTWFwUG9zKCk6IFZlYzIge1xyXG4gICAgICAgIC8v5LuO5Zyw5Zu+6YeM6Z2i6ZqP5py65LiA5Liq54K5XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHYyKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSkpXHJcbiAgICB9XHJcbiAgICBwcm9jZXNzTW92ZUFjdGlvbihwYXRoTGlzdDogVmVjM1tdKTogVHdlZW4ge1xyXG4gICAgICAgIC8v5aSE55CG56e75Yqo55qE5Yqo5L2cXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3Qgc2V0VHdEYXRhID0gKHR3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHBhdGhMaXN0W2luZGV4IC0gMV0pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUocGF0aExpc3RbaW5kZXggLSAxXSwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gcGF0aExpc3RbMF07XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbkFuaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gcGF0aExpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGFyZ2V0UG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQuZnJvbVZpZXdVcCh0YXJnZXRRdWF0LCBkaXIsIFZlYzMuVVApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5sZXJwKHByZVF1YXQsIG5ldyBRdWF0KHRoaXMubm9kZS53b3JsZFJvdGF0aW9uKSwgdGFyZ2V0UXVhdCwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IHByZVF1YXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUubG9va0F0KHBhdGhMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHJvdGF0aW9uQW5pbSwgMSAvIDYwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8odGltZSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBhdGhMaXN0W2luZGV4XSxcclxuICAgICAgICAgICAgICAgIC8vIHdvcmxkUm90YXRpb246IGFuZ2xlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHJvdGF0aW9uQW5pbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0VHdEYXRhKHR3LCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuICAgIHByb2NlZVdhbGtMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbotbDot6/nmoTpgLvovpFcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5nZXRTaG93QXVkaW8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcE5vZGVMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgb2JzUG9zTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE9ic1Bvc0xpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFRvb2wgPSBuZXcgRmluZFBhdGhXaXRoQVN0YXJ0KG1hcE5vZGVMaXN0LCBbc3RhcnRQb3MueCwgc3RhcnRQb3MueV0sIFtlbmRQb3MueCwgZW5kUG9zLnldKTtcclxuICAgICAgICBsZXQgb2JzUG9zRGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic1Bvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9ic1BvcyA9IG9ic1Bvc0xpc3RbaV07XHJcbiAgICAgICAgICAgIG9ic1Bvc0RhdGFMaXN0LnB1c2goW29ic1Bvcy54LCBvYnNQb3MueV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoVG9vbC51cGRhdGVPYnNEYXRhKG9ic1Bvc0RhdGFMaXN0KTtcclxuICAgICAgICBsZXQgcGF0aExpc3QgPSBwYXRoVG9vbC5maW5kUGF0aExpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhMaXN0W2ldO1xyXG4gICAgICAgICAgICBwYXRoUG9zTGlzdC5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zWzBdLCBwb3NbMV0pLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBhdGhQb3NMaXN0KTsgLy/pgJrov4fojrflj5bliLDnmoQg6Lev5b6E54K577yM5p2l5Yi25L2c5LiA5p2h6LSd5aGe5bCU5puy57q/XHJcbiAgICAgICAgdGhpcy5iZXppZXJQYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoNTApOyAvL+i3r+W+hOWvhuW6puS4ujIwXHJcbiAgICAgICAgdGhpcy5iZXppZXJQYXRoTGlzdCA9IHRoaXMuYmV6aWVyUGF0aExpc3Quc2xpY2UoMCwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSA1KTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBvc2l0aW9uLmVxdWFscyh0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN55So5YaN6LWw5LiA6YGN6YC76L6R5LqGXCIpXHJcbiAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbih0aGlzLmJlemllclBhdGhMaXN0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvQmVBdHRhY2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgfVxyXG4gICAgdG9CZUF0dGFjaygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBzdGF0ZUFuaW0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaZrumAmuaVjOS6uuWPkeWKqOaUu+WHu1wiLCB0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmJlYXR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImZvcnplblwiKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLnNob290QXVkaW8pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoKDEgLSB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCkgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fE1vdmVBbmltXCJcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuYm9zc1Nob290T25lRWdnKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIC8vIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyAgICAgLy/ov5vlhaXmlLvlh7vnirbmgIFcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgIC8vICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAvLyAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgLy8gICAgICAgICAvL+aZrumAmuaVjOS6uueahOaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgLy8gICAgIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwib3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucmVtb3ZlRW5lbXlJbkxpc3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnB1c2hPbmVFbmVteURlYWREYXRhKG5ldyBEZWFkRW5lbXlPYmoodGhpcy5vYmplY3RUeXBlLCB0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVhZEF1ZGlvKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5kZWFkQXVkaW8pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5ldWxlckFuZ2xlcyA9IHYzKDAsIDM2MCAqIE1hdGgucmFuZG9tKCksIDApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcyBcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmFkZEVuZW15QWRkR29sZEFuaW0odGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIuaSreaUvuenu+WKqOWKqOS9nFwiLCB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlXYWxrQXVkaW8oKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBiYXNlR2FzTnVtID0gZGF0YS5iYXNlR2FzTnVtOyAvL+WPluWkhOWfuuehgOawlOWAvFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtICs9IGJhc2VHYXNOdW07XHJcblxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4wNSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHYzKDEuMDUsIDAuOTgsIDEuMDUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLCAxLCAxKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBiZUF0dGFja0FuaW1OYW1lID0gXCLpqqjmnrZ8QmVBdHRhY2tBbmltXCI7IC8v6KKr5pS75Ye755qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgLy8gaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KGJlQXR0YWNrQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKGJlQXR0YWNrQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHN0YXRlQW5pbSAmJiAhc3RhdGVBbmltLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBsZW5ndGggPSBzdGF0ZUFuaW0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgYmVBdHRha2NDbGljayA9IHNrZWxldGVBbmltLmNsaXBzXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRHYXNOdW0gLyB0aGlzLmJhc2VHYXNOdW07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVcIiwgc2NhbGUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuXHJcbiAgICAgICAgICAgIC8vIHN0b3BcclxuICAgICAgICAgICAgLy8gVHdlZW4uXHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHsgc2NhbGU6IHYzKHNjYWxlLCBzY2FsZSwgc2NhbGUpIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVBdHRhY2tlZENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSwgdGhpcy5nZXRIZWFsdGhDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iiq+aJk+atu+S6hlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgcGxheVdhbGtBdWRpbygpIHtcclxuICAgICAgICBpZiAodGhpcy53YWxrQXVkaW8pe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy53YWxrQXVkaW8sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Z+z5pWI5pKt5pS+5a6M5oiQXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVdhbGtBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZ2V0SXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvdmVyJyB8fCB0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICd0by1kZWFkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDYW5Mb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50IDwgdGhpcy5iZUxvY2tlZE1heE51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB1blNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlDb2xvbnlDdGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUNvbG9ueUN0bC51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRNb3ZlUG9zKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVJbmRleCA8IHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSB0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuY3VycmVudE1vdmVJbmRleF07XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8v56e75Yqo57uT5p2fXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBvdmVyXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMuY3VycmVudE1vdmVQb3MpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpcyA9IGRpci5sZW5ndGgoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc1wiLCBkaXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkaXMgPiAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpci5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihkZWx0YVRpbWUpKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhciAmJiB0aGlzLmNhbWVyYU5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBsZXQgcG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmFOb2RlLmNvbnZlcnRUb1VJTm9kZSh0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLmhlYWx0aEJhci5wYXJlbnQsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgcG9zLnkgKz0gNTA7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuc2V0U2NhbGUodjMocG9zLnosIHBvcy56LCBwb3MueikpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheUJvc3NFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgbGV0IHNob3dDbGlwID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ2Jvc3Mtc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3dDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KCdib3NzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzaG93Q2xpcC5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KFwi6aqo5p62fE1vdmVBbmltXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbScsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlDdGwgJiYgaXNWYWxpZCh0aGlzLmVuZW15Q3RsLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwubm9kZS5vZmYoXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb2xvbnlDb21DdGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlDb2xvbnlDdGw7XHJcbiAgICB9XHJcbn1cclxuIl19