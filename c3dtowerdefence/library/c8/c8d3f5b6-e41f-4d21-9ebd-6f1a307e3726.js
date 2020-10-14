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

              var tw = new Tween(_this9.rootNode);
              _this9.node.eulerAngles = v3(0, 0, 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmVteUN0bCIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZ2V0TW92ZVR5cGUiLCJpbmRleE9mIiwibm9kZSIsInBvc2l0aW9uIiwieCIsInoiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiQmVMb2NrZWRDb3VudCIsImhlYWx0aENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIndvcmxkUm90YXRpb24iLCJzdG9wIiwic2tlbGV0ZUFuaW0iLCJyb290Tm9kZSIsImdldFN0YXRlIiwic3BlZWQiLCJzY2hlZHVsZU9uY2UiLCJjdXJyZW50U3RhdGUiLCJpbmRleCIsImVuZW10Q3RsIiwib24iLCJmb3J6ZW5TZWxmIiwiYmluZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJkZWxheSIsInNob3ciLCJjYWxsIiwiYWN0aXZlIiwidG8iLCJzY2FsZSIsInN0YXJ0UnVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsIm1vdmVUeXBlIiwicHJvY2VlV2Fsa0xvZ2ljIiwiZ2V0SXNDb2xvbnkiLCJwcm9jZXNzRmx5TG9naWMiLCJlbWl0IiwiZ2V0U2hvd0F1ZGlvIiwiZmx5SGVpZ2h0IiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJwb3NJbmRleExpc3QiLCJ5IiwiaSIsInB1c2giLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3NMaXN0IiwibGVuZ3RoIiwicG9zdjIiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwibm9kZVBvcyIsImJlemllciIsImVuZFBvc0xpc3QiLCJnZXRQb2ludExpc3QiLCJwcm9jZXNzTW92ZUFjdGlvbiIsImFuaW1MZW5ndGgiLCJzaG9vdE9uZUJvc3NCdWxsZXQiLCJ0aGVuIiwic3RhcnRQb3NSYW5kb21MaXN0IiwicmFuZG9tSW5kZXgiLCJzZXRUd0RhdGEiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJyb3RhdGlvbkFuaW0iLCJ0YXJnZXRQb3MiLCJkaXIiLCJub3JtYWxpemUiLCJ0YXJnZXRRdWF0IiwiZnJvbVZpZXdVcCIsIlVQIiwicHJlUXVhdCIsImxlcnAiLCJsb29rQXQiLCJtYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJvYnNQb3NEYXRhTGlzdCIsIm9ic1BvcyIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsInNsaWNlIiwiZXF1YWxzIiwiY29uc29sZSIsImxvZyIsInRvQmVBdHRhY2siLCJwbGF5Iiwic3RhdGVBbmltIiwicmVwZWF0Q291bnQiLCJzaG9vdEF1ZGlvIiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiZ2V0QmFzZUF0dGFja0RhbWFnZSIsImVuZW15QXR0YWNrZWQiLCJ0YXJnZXRQb2ludCIsInF1YXQiLCJwYXVzZSIsImJvc3NTaG9vdE9uZUVnZyIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZXVsZXJBbmdsZXMiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwiYnkiLCJkZWFkQXVkaW8iLCJjYWlkYWlFZmZlY3QiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJwbGF5V2Fsa0F1ZGlvIiwiZGF0YSIsImNiIiwiYmFzZUF0dGFja051bSIsImJhc2VHYXNOdW0iLCJjdXJyZW50R2FzTnVtIiwicHJvZ3Jlc3MiLCJ3YWxrQXVkaW8iLCJ0b3dlciIsImRlbHRhVGltZSIsInVwZGF0ZSIsImNsaXBzIiwic2hvd0NsaXAiLCJ1bmRlZmluZWQiLCJjbGlwIiwibmFtZSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsSyxPQUFBQSxLO0FBQThCQyxNQUFBQSxFLE9BQUFBLEU7QUFBcUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxvQixPQUFBQSxvQjtBQUEwQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNkRDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDeE9DLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBRUFDLE1BQUFBLFUsaUJBQUFB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QkFBSXFGLElBQUksQ0FBQ0MsSUFBTCxLQUFjLFdBQWxCLEVBQStCO0FBQzNCSCxrQkFBQUEsUUFBUSxHQUFHRSxJQUFYO0FBQ0g7QUFDSjs7QUFDRCxrQkFBSUYsUUFBSixFQUFjO0FBQ1Z2SCxnQkFBQUEsV0FBVyxDQUFDcUYsSUFBWixDQUFpQixXQUFqQjs7QUFDQSxnQkFBQSxPQUFJLENBQUNqRixZQUFMLENBQWtCLFlBQU07QUFDcEJRLGtCQUFBQSxPQUFPO0FBQ1YsaUJBRkQsRUFFRzJHLFFBQVEsQ0FBQzdFLE1BRlo7QUFHSCxlQUxELE1BS087QUFDSDFDLGdCQUFBQSxXQUFXLENBQUNxRixJQUFaLENBQWlCLGFBQWpCOztBQUNBLGdCQUFBLE9BQUksQ0FBQ2pGLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQlEsa0JBQUFBLE9BQU87QUFDVixpQkFGRCxFQUVHLENBRkg7QUFHSDtBQUNKLGFBckJNLENBQVA7QUFzQkg7OztzQ0FFVztBQUNSO0FBQ0E7QUFDQSxnQkFBSSxLQUFLckMsUUFBTCxJQUFpQjFCLE9BQU8sQ0FBQyxLQUFLMEIsUUFBTCxDQUFjYSxJQUFmLENBQTVCLEVBQWtEO0FBQzlDLG1CQUFLYixRQUFMLENBQWNhLElBQWQsQ0FBbUJ1SSxHQUFuQixDQUF1QixrQkFBdkIsRUFBMkMsS0FBS2xILFVBQWhELEVBQTRELElBQTVEO0FBQ0gsYUFMTyxDQU1SOztBQUNIOzs7NENBQ2lCO0FBQ2QsbUJBQU8sS0FBSzVCLGNBQVo7QUFDSDs7Ozs7Ozs7Ozs7aUJBbG1CMkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuLCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIHYyLCBKc29uQXNzZXQsIGdhbWUsIGlzVmFsaWQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgYmV6aWVyLCBmaW5kLCBRdWF0LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgTW9kZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmosIEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuLi91dGlsL0Jlemllck4nO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBGaW5kUGF0aFdpdGhBU3RhcnQgfSBmcm9tICcuLi91dGlsL0ZpbmRQYXRoV2l0aEFTdGFydCc7XHJcbmltcG9ydCB7IEVuZW15Q29sb255Q29tIH0gZnJvbSAnLi9FbmVteUNvbG9ueUNvbSc7XHJcbi8vIGltcG9ydCB7IEJlc2l6ZSB9IGZyb20gJy4uL3V0aWwvQmVzaXplJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuQGNjY2xhc3MoJ0VuZW15QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHB1YmxpYyBwYXRoTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwdWJsaWMgY3VycmVudFBhdGhJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHB1YmxpYyBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGJlTG9ja2VkTWF4TnVtOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5lbmVteUJlTG9ja01heE51bTtcclxuICAgIHB1YmxpYyBjdXJyZW50YmVMb2NrZWRDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhCYXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSBudWxsO1xyXG4gICAgLy8gcHVibGljIGhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGN1cnJlbnRIZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgc3RhcnRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbmVteUN0bDogRW5lbXlDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudE1vdmVUdzogVHdlZW4gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBncm91bmRNYXBDdGw6IEdyb3VuZE1hcEN0bCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJlQXR0YWNrZWRDYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBiZXppZXJQYXRoTGlzdDogVmVjM1tdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBlbmVteUNvbG9ueUN0bDogRW5lbXlDb2xvbnlDb20gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZVBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYWlkYWlFZmZlY3Q6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIHN0YXJ0UG9zOiBWZWMzLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICBpZiAodGhpcy5nZXRNb3ZlVHlwZSgpLmluZGV4T2YoXCJGbHlcIikgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMTAsIHRoaXMubm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91bmRNYXBDdGwgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgLy8gdGhpcy5oZWFsdGhDb3VudCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5IZWFsdGhDb3VudDtcclxuICAgICAgICB0aGlzLmJlTG9ja2VkTWF4TnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJlTG9ja2VkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCBlbmRQb3MpO1xyXG4gICAgICAgIHRoaXMubm9kZS53b3JsZFJvdGF0aW9uID0gYW5nbGU7XHJcblxyXG4gICAgfVxyXG4gICAgZW50ZXJTaG93Qm9zc0VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGl1ZVBsYXlNb3ZlQW5pbSgpIHtcclxuICAgICAgICAvL+e7p+e7reihjOi1sFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zcGVlZCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuc3BlZWQgPSAxO1xyXG4gICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0VuZW15RW50ZXJBbmltKGluZGV4OiBudW1iZXIsIGVuZW10Q3RsOiBFbmVteUNvbnRyb2xsZXIsIHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsID0gZW5lbXRDdGw7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYuYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC4yICogaW5kZXgpXHJcbiAgICAgICAgICAgIC8vIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICAgICAgLy8gdHcuc2V0KHsgc2NhbGU6IHYzKDAsIG1vdmVUeXBlLmluZGV4T2YoXCJGbHlcIikgPiAtMSA/IDEwIDogMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcuc2hvdygpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICAvLyBib3VuY2VPdXQgcXVhcnRJblxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSwgeyBlYXNpbmc6IFwiYm91bmNlT3V0XCIgfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0pXHJcblxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSdW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0UnVuKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHBvcyBcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcblxyXG4gICAgICAgIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICBpZiAobW92ZVR5cGUgPT09IFwiV2Fsa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElzQ29sb255KCkpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+Q6KGM6ZuG576k57O757ufXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbGlzdCA9IHRoaXMuZW5lbXlDdGwuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBhdGhWZWMgPSBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigyLCAxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMiw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigzLDIpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsMyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigzLDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDQsNCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwwKVxyXG4gICAgICAgICAgICAgICAgLy8gXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdGxQb3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoVmVjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY3RsUG9zLnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwYXRoVmVjW2ldLngsIHBhdGhWZWNbaV0ueSkucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WPluWHuuWIl+ihqOmHjOmdoiDnmoQg576k6ZuG5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q29sb255Q3RsID0gbmV3IEVuZW15Q29sb255Q29tKGxpc3QsIHRoaXMubm9kZSwgY3RsUG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhuaVjOS6uumjnuihjOeahOmAu+i+kVxyXG4gICAgICAgIC8vMemmluWFiOiuvue9ruS4gOadoeaVjOS6uumcgOimgemjnui/h+eahOaOp+WItueCuVxcXHJcbiAgICAgICAgLy8gbGV0IGVuZFBvaW50ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShlbmRQb3MueCwgZW5kUG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvaW50O1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3nmoTmuLjmiI/nirbmgIHmmK9ydW4gLCDlpoLmnpzlvZPliY3nmoTnirbmgIHkuI3mmK/ov5DooYznirbmgIHvvIzpgqPkuYjpnIDopoHmiZPmlq3po57ooYznp7vliqhcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmx5SGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlpITnkIbpo57ooYznmoTpgLvovpFcIik7XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgbGV0IHBvc0luZGV4TGlzdDogVmVjMltdID0gW3YyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBwb3NJbmRleExpc3QucHVzaCh2MihcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zdjIgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdjJcIiwgcG9zdjIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zdjIueCwgcG9zdjIueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBwb3NMaXN0LnB1c2godjMobm9kZVBvcy54LCBmbHlIZWlnaHQsIG5vZGVQb3MueikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSB2Myhwb3N2Mi54LCAwLCBwb3N2Mi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIGxldCBlbmRQb3NMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgyMDApO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb3NMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24oZW5kUG9zTGlzdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aSreaUvuaUu+WHu+aVjOS6uueahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgLy8gc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKFwi6aqo5p62fEF0dGFja0FuaW1cIikubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0LCBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnNob290T25lQm9zc0J1bGxldCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/lnKjpo57kuIDpgY1cclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1JhbmRvbUxpc3QgPSBbdjIoMCwgMCksIHYyKDAsIDEwKSwgdjIoMTAsIDApLCB2MigxMCwgMTApXVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHN0YXJ0UG9zUmFuZG9tTGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NGbHlMb2dpYyhzdGFydFBvc1JhbmRvbUxpc3RbcmFuZG9tSW5kZXhdLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICAvLyBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIC8vIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhQb3MgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKGluZGV4UG9zLngsIGluZGV4UG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vICAgICBwb3NMaXN0LnB1c2godjMocG9zLngsIGZseUhlaWdodCwgcG9zLnopKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIC8vIGxldCBwYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMzApO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIOmaj+acuuWHoOS4quaOp+WItueCuVxyXG5cclxuICAgIH1cclxuICAgIGdldE9uZVJhbmRvbU1hcFBvcygpOiBWZWMyIHtcclxuICAgICAgICAvL+S7juWcsOWbvumHjOmdoumaj+acuuS4gOS4queCuVxyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiB2MihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpKVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01vdmVBY3Rpb24ocGF0aExpc3Q6IFZlYzNbXSk6IFR3ZWVuIHtcclxuICAgICAgICAvL+WkhOeQhuenu+WKqOeahOWKqOS9nFxyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnN0IHNldFR3RGF0YSA9ICh0dywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCBwYXRoTGlzdFtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2MyhwYXRoTGlzdFtpbmRleCAtIDFdKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHBhdGhMaXN0W2luZGV4IC0gMV0sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUubG9va0F0KHBhdGhMaXN0W2luZGV4XSlcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBhdGhMaXN0WzBdO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25BbmltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHBhdGhMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBRdWF0LmZyb21WaWV3VXAodGFyZ2V0UXVhdCwgZGlyLCBWZWMzLlVQKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQubGVycChwcmVRdWF0LCBuZXcgUXVhdCh0aGlzLm5vZGUud29ybGRSb3RhdGlvbiksIHRhcmdldFF1YXQsIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBwcmVRdWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmxvb2tBdChwYXRoTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZShyb3RhdGlvbkFuaW0sIDEgLyA2MCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAvLyB3b3JsZFJvdGF0aW9uOiBhbmdsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZShyb3RhdGlvbkFuaW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFR3RGF0YSh0dywgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcbiAgICBwcm9jZWVXYWxrTG9naWMoc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8v5aSE55CG6LWw6Lev55qE6YC76L6RXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZ2V0U2hvd0F1ZGlvKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwYXRoUG9zTGlzdCk7IC8v6YCa6L+H6I635Y+W5Yiw55qEIOi3r+W+hOeCue+8jOadpeWItuS9nOS4gOadoei0neWhnuWwlOabsue6v1xyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDUwKTsgLy/ot6/lvoTlr4bluqbkuLoyMFxyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSB0aGlzLmJlemllclBhdGhMaXN0LnNsaWNlKDAsIHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gNSk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi5lcXVhbHModGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDFdKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4jeeUqOWGjei1sOS4gOmBjemAu+i+keS6hlwiKVxyXG4gICAgICAgICAgICB0aGlzLnRvQmVBdHRhY2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24odGhpcy5iZXppZXJQYXRoTGlzdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgIH1cclxuICAgIHRvQmVBdHRhY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgc3RhdGVBbmltLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuc2hvb3RBdWRpbyk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmma7pgJrmlYzkurrlj5HliqjmlLvlh7tcIiwgdGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5iZWF0dFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbmVteUF0dGFja2VkKHRoaXMuZ2V0QmFzZUF0dGFja0RhbWFnZSgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoKDEgLSB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCkgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIC8v5pmu6YCa5pWM5Lq655qE5pS75Ye7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG5cclxuICAgICAgICAgICAgLy8gfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0TG9va0F0QW5nbGUoc3RhcnRQb3MsIHRhcmdldFBvaW50OiBWZWMzKTogUXVhdCB7XHJcbiAgICAgICAgLy8gLy/ojrflj5bliLDmnJ3lkJHnmoTop5LluqZcclxuXHJcbiAgICAgICAgbGV0IGRpciA9IHYzKHN0YXJ0UG9zKS5zdWJ0cmFjdCh0YXJnZXRQb2ludCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIHF1YXQubGVycFxyXG4gICAgICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCBkaXIsIFZlYzMuVVApO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YXRcIiwgcXVhdCk7XHJcbiAgICAgICAgLy8gcm90YXRlQXJvdW5kXHJcbiAgICAgICAgLy8gc3RhcnRQb3MuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZS9cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1YXRcclxuICAgIH1cclxuICAgIGZvcnplblNlbGYoKSB7XHJcbiAgICAgICAgLy/lhrDlhrvoh6rlt7FcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJmb3J6ZW5cIik7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlQW5pbS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob290T25lQm9zc0J1bGxldCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcuZGVsYXkodGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwuYm9zc1Nob290T25lRWdnKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgIC8v6L+b5YWl5pS75Ye754q25oCBXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5wdXNoT25lRW5lbXlEZWFkRGF0YShuZXcgRGVhZEVuZW15T2JqKHRoaXMub2JqZWN0VHlwZSwgdGhpcy5nZXRDdXJyZW50R29sZENvdW50KCkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYWRBdWRpbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZGVhZEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJ1blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byA5aeL56e75YqoIFxyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmplY3RUeXBlICsgXCLmkq3mlL7np7vliqjliqjkvZxcIiwgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGF5V2Fsa0F1ZGlvKCk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJiZS1hdHRhY2tlZFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiID0gZGF0YS5jYjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLT0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLjA1LCAwLjk4LCAxLjA1KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMSwgMSwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgYmVBdHRhY2tBbmltTmFtZSA9IFwi6aqo5p62fEJlQXR0YWNrQW5pbVwiOyAvL+iiq+aUu+WHu+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdGF0ZUFuaW0gJiYgIXN0YXRlQW5pbS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGJlQXR0YWtjQ2xpY2sgPSBza2VsZXRlQW5pbS5jbGlwc1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLlxyXG4gICAgICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgICAgIC8vIFR3ZWVuLlxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUd1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6KKr5omT5q275LqGXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBwbGF5V2Fsa0F1ZGlvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndhbGtBdWRpbyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLndhbGtBdWRpbywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLpn7PmlYjmkq3mlL7lrozmiJBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5V2Fsa0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUNvbG9ueUN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sb255Q3RsLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMuY3VycmVudE1vdmVQb3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUluZGV4IDwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5jdXJyZW50TW92ZUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/np7vliqjnu5PmnZ9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlIG92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5jdXJyZW50TW92ZVBvcykuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzXCIsIGRpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRpcyA+IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUN0bCAmJiBpc1ZhbGlkKHRoaXMuZW5lbXlDdGwubm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ub2RlLm9mZihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KTtcclxuICAgIH1cclxuICAgIGdldENvbG9ueUNvbUN0bCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUNvbG9ueUN0bDtcclxuICAgIH1cclxufVxyXG4iXX0=