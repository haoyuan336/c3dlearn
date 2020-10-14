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
                _this3.gameController.node.emit("play-audio", _this3.getShowAudio());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmVteUN0bCIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZ2V0TW92ZVR5cGUiLCJpbmRleE9mIiwibm9kZSIsInBvc2l0aW9uIiwieCIsInoiLCJnZXRDb21wb25lbnQiLCJvYmplY3RUeXBlIiwiQmVMb2NrZWRDb3VudCIsImhlYWx0aENvdW50IiwiYW5nbGUiLCJnZXRMb29rQXRBbmdsZSIsIndvcmxkUm90YXRpb24iLCJzdG9wIiwic2tlbGV0ZUFuaW0iLCJyb290Tm9kZSIsImdldFN0YXRlIiwic3BlZWQiLCJzY2hlZHVsZU9uY2UiLCJjdXJyZW50U3RhdGUiLCJpbmRleCIsImVuZW10Q3RsIiwib24iLCJmb3J6ZW5TZWxmIiwiYmluZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJwb3MiLCJkZWxheSIsInNob3ciLCJjYWxsIiwiZW1pdCIsImdldFNob3dBdWRpbyIsImFjdGl2ZSIsInRvIiwic2NhbGUiLCJzdGFydFJ1biIsInN0YXJ0Iiwic2V0U3RhdGUiLCJtb3ZlVHlwZSIsInByb2NlZVdhbGtMb2dpYyIsImdldElzQ29sb255IiwicHJvY2Vzc0ZseUxvZ2ljIiwiZmx5SGVpZ2h0IiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJwb3NJbmRleExpc3QiLCJ5IiwiaSIsInB1c2giLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3NMaXN0IiwibGVuZ3RoIiwicG9zdjIiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwibm9kZVBvcyIsImJlemllciIsImVuZFBvc0xpc3QiLCJnZXRQb2ludExpc3QiLCJwcm9jZXNzTW92ZUFjdGlvbiIsImFuaW1MZW5ndGgiLCJzaG9vdE9uZUJvc3NCdWxsZXQiLCJ0aGVuIiwic3RhcnRQb3NSYW5kb21MaXN0IiwicmFuZG9tSW5kZXgiLCJzZXRUd0RhdGEiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJyb3RhdGlvbkFuaW0iLCJ0YXJnZXRQb3MiLCJkaXIiLCJub3JtYWxpemUiLCJ0YXJnZXRRdWF0IiwiZnJvbVZpZXdVcCIsIlVQIiwicHJlUXVhdCIsImxlcnAiLCJsb29rQXQiLCJtYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJvYnNQb3NEYXRhTGlzdCIsIm9ic1BvcyIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsInNsaWNlIiwiZXF1YWxzIiwiY29uc29sZSIsImxvZyIsInRvQmVBdHRhY2siLCJwbGF5Iiwic3RhdGVBbmltIiwicmVwZWF0Q291bnQiLCJhbmltU3BlZWRNdWxPZmZzZXQiLCJnZXRCYXNlQXR0YWNrRGFtYWdlIiwiZW5lbXlBdHRhY2tlZCIsInRhcmdldFBvaW50IiwicXVhdCIsInBhdXNlIiwiYm9zc1Nob290T25lRWdnIiwiYWRkU3RhdGUiLCJyZW1vdmVFbmVteUluTGlzdCIsImRlc3Ryb3kiLCJwdXNoT25lRW5lbXlEZWFkRGF0YSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJldWxlckFuZ2xlcyIsInVuc2NoZWR1bGVBbGxDYWxsYmFja3MiLCJieSIsImNhaWRhaUVmZmVjdCIsInNob3dBZGRHb2xkQW5pbUVmZmVjdCIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJ1cGRhdGUiLCJjbGlwcyIsInNob3dDbGlwIiwidW5kZWZpbmVkIiwiY2xpcCIsIm5hbWUiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLEssT0FBQUEsSztBQUE4QkMsTUFBQUEsRSxPQUFBQSxFO0FBQXFCQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBMENDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTZEQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ3hPQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUVBQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxZLHNCQUFBQSxZOztBQUNBQyxNQUFBQSxPLGtCQUFBQSxPOztB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ZCxtQkFBTyxLQUFLNUIsY0FBWjtBQUNIOzs7Ozs7Ozs7OztpQkF6bUIyQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIsIGZpbmQsIFF1YXQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBNb2RlbENvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEZpbmRQYXRoV2l0aEFTdGFydCB9IGZyb20gJy4uL3V0aWwvRmluZFBhdGhXaXRoQVN0YXJ0JztcclxuaW1wb3J0IHsgRW5lbXlDb2xvbnlDb20gfSBmcm9tICcuL0VuZW15Q29sb255Q29tJztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICAvLyBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZE1hcEN0bDogR3JvdW5kTWFwQ3RsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVBdHRhY2tlZENiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJlemllclBhdGhMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEJvbmVBbmltTmFtZSA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVuZW15Q29sb255Q3RsOiBFbmVteUNvbG9ueUNvbSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkuaW5kZXhPZihcIkZseVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICAvLyB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZi5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIiwgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjIgKiBpbmRleClcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUeXBlID0gdGhpcy5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgICAgICAvLyB0dy5zZXQoeyBzY2FsZTogdjMoMCwgbW92ZVR5cGUuaW5kZXhPZihcIkZseVwiKSA+IC0xID8gMTAgOiAwLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy5zaG93KCk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZ2V0U2hvd0F1ZGlvKCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zIFwiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgbW92ZVR5cGUgPSB0aGlzLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgaWYgKG1vdmVUeXBlID09PSBcIldhbGtcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vdmVUeXBlID09PSAnRmx5Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJc0NvbG9ueSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+i/kOihjOmbhue+pOezu+e7n1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGxpc3QgPSB0aGlzLmVuZW15Q3RsLmdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMTAsIHRoaXMubm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBwYXRoVmVjID0gW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsIDApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigxMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAxMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMiwgMSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoOSwxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDIsOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMywyKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig3LDMpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsNyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2Mig0LDQpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsMClcclxuICAgICAgICAgICAgICAgIC8vIF07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY3RsUG9zID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyAvLyB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKClcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFZlYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGN0bFBvcy5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocGF0aFZlY1tpXS54LCBwYXRoVmVjW2ldLnkpLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gLy/lj5blh7rliJfooajph4zpnaIg55qEIOe+pOmbhuaVjOS6ulxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUNvbG9ueUN0bCA9IG5ldyBFbmVteUNvbG9ueUNvbShsaXN0LCB0aGlzLm5vZGUsIGN0bFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NGbHlMb2dpYyhzdGFydFBvcywgZW5kUG9zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NGbHlMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbmlYzkurrpo57ooYznmoTpgLvovpFcclxuICAgICAgICAvLzHpppblhYjorr7nva7kuIDmnaHmlYzkurrpnIDopoHpo57ov4fnmoTmjqfliLbngrlcXFxyXG4gICAgICAgIC8vIGxldCBlbmRQb2ludCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoZW5kUG9zLngsIGVuZFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb2ludDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOa4uOaIj+eKtuaAgeaYr3J1biAsIOWmguaenOW9k+WJjeeahOeKtuaAgeS4jeaYr+i/kOihjOeKtuaAge+8jOmCo+S5iOmcgOimgeaJk+aWremjnuihjOenu+WKqFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmbHlIZWlnaHQgPSAxMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWkhOeQhumjnuihjOeahOmAu+i+kVwiKTtcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICBsZXQgcG9zSW5kZXhMaXN0OiBWZWMyW10gPSBbdjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSldO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKHYyKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSxcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3N2MiA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3N2MlwiLCBwb3N2Mik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3N2Mi54LCBwb3N2Mi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvc0xpc3QucHVzaCh2Myhub2RlUG9zLngsIGZseUhlaWdodCwgbm9kZVBvcy56KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IHBvcyA9IHYzKHBvc3YyLngsIDAsIHBvc3YyLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgbGV0IGVuZFBvc0xpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihlbmRQb3NMaXN0KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+5pS75Ye75pWM5Lq655qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoXCLpqqjmnrZ8QXR0YWNrQW5pbVwiKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQsIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+WcqOmjnuS4gOmBjVxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zUmFuZG9tTGlzdCA9IFt2MigwLCAwKSwgdjIoMCwgMTApLCB2MigxMCwgMCksIHYyKDEwLCAxMCldXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoc3RhcnRQb3NSYW5kb21MaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zUmFuZG9tTGlzdFtyYW5kb21JbmRleF0sIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3NcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgLy8gbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBpbmRleFBvcyA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoaW5kZXhQb3MueCwgaW5kZXhQb3MueSkucG9zaXRpb247XHJcbiAgICAgICAgLy8gICAgIHBvc0xpc3QucHVzaCh2Myhwb3MueCwgZmx5SGVpZ2h0LCBwb3MueikpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gLy8gbGV0IHBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihwb3NMaXN0KTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8g6ZqP5py65Yeg5Liq5o6n5Yi254K5XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0T25lUmFuZG9tTWFwUG9zKCk6IFZlYzIge1xyXG4gICAgICAgIC8v5LuO5Zyw5Zu+6YeM6Z2i6ZqP5py65LiA5Liq54K5XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHYyKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSkpXHJcbiAgICB9XHJcbiAgICBwcm9jZXNzTW92ZUFjdGlvbihwYXRoTGlzdDogVmVjM1tdKTogVHdlZW4ge1xyXG4gICAgICAgIC8v5aSE55CG56e75Yqo55qE5Yqo5L2cXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3Qgc2V0VHdEYXRhID0gKHR3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHBhdGhMaXN0W2luZGV4IC0gMV0pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUocGF0aExpc3RbaW5kZXggLSAxXSwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gcGF0aExpc3RbMF07XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbkFuaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gcGF0aExpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGFyZ2V0UG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQuZnJvbVZpZXdVcCh0YXJnZXRRdWF0LCBkaXIsIFZlYzMuVVApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5sZXJwKHByZVF1YXQsIG5ldyBRdWF0KHRoaXMubm9kZS53b3JsZFJvdGF0aW9uKSwgdGFyZ2V0UXVhdCwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IHByZVF1YXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUubG9va0F0KHBhdGhMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHJvdGF0aW9uQW5pbSwgMSAvIDYwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8odGltZSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBhdGhMaXN0W2luZGV4XSxcclxuICAgICAgICAgICAgICAgIC8vIHdvcmxkUm90YXRpb246IGFuZ2xlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHJvdGF0aW9uQW5pbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0VHdEYXRhKHR3LCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuICAgIHByb2NlZVdhbGtMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbotbDot6/nmoTpgLvovpFcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwYXRoUG9zTGlzdCk7IC8v6YCa6L+H6I635Y+W5Yiw55qEIOi3r+W+hOeCue+8jOadpeWItuS9nOS4gOadoei0neWhnuWwlOabsue6v1xyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDUwKTsgLy/ot6/lvoTlr4bluqbkuLoyMFxyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSB0aGlzLmJlemllclBhdGhMaXN0LnNsaWNlKDAsIHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gNSk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi5lcXVhbHModGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDFdKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4jeeUqOWGjei1sOS4gOmBjemAu+i+keS6hlwiKVxyXG4gICAgICAgICAgICB0aGlzLnRvQmVBdHRhY2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24odGhpcy5iZXppZXJQYXRoTGlzdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgIH1cclxuICAgIHRvQmVBdHRhY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgc3RhdGVBbmltLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaZrumAmuaVjOS6uuWPkeWKqOaUu+WHu1wiLCB0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmJlYXR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImZvcnplblwiKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgIC8v6L+b5YWl5pS75Ye754q25oCBXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5wdXNoT25lRW5lbXlEZWFkRGF0YShuZXcgRGVhZEVuZW15T2JqKHRoaXMub2JqZWN0VHlwZSwgdGhpcy5nZXRDdXJyZW50R29sZENvdW50KCkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5ldWxlckFuZ2xlcyA9IHYzKDAsIDM2MCAqIE1hdGgucmFuZG9tKCksIDApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcyBcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmFkZEVuZW15QWRkR29sZEFuaW0odGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIuaSreaUvuenu+WKqOWKqOS9nFwiLCB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNsaXBzID0gc2tlbGV0ZUFuaW0uY2xpcHM7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbW92ZUNsaXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgY2xpcHMubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gbW92ZUNsaXBzID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNsaXAgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNsaXAgbmFtZVwiLCBjbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChjbGlwLm5hbWUgPT09ICfpqqjmnrZ8TW92ZUFuaW0nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbW92ZUNsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChtb3ZlQ2xpcCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShtb3ZlQ2xpcC4pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgbW92ZVwiKTtcclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBtb3ZlVGltZSA9IG5ldyBWZWMzKHRoaXMuc3RhcnRQb3MpLnN1YnRyYWN0KHRoaXMuZW5kUG9zKS5sZW5ndGgoKSAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAvLyB0dy50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogdGhpcy5lbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHR3O1xyXG4gICAgICAgICAgICAvLyDlvIDlp4vov5DooYzkuYvlkI7vvIzorqHnrpfkuIDmnaEg5pyA55+t6Lev5b6EXHJcbiAgICAgICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJiZS1hdHRhY2tlZFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiID0gZGF0YS5jYjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLT0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLjA1LCAwLjk4LCAxLjA1KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMSwgMSwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgYmVBdHRhY2tBbmltTmFtZSA9IFwi6aqo5p62fEJlQXR0YWNrQW5pbVwiOyAvL+iiq+aUu+WHu+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdGF0ZUFuaW0gJiYgIXN0YXRlQW5pbS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGJlQXR0YWtjQ2xpY2sgPSBza2VsZXRlQW5pbS5jbGlwc1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLlxyXG4gICAgICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgICAgIC8vIFR3ZWVuLlxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUd1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6KKr5omT5q275LqGXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUNvbG9ueUN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sb255Q3RsLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMuY3VycmVudE1vdmVQb3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUluZGV4IDwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5jdXJyZW50TW92ZUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/np7vliqjnu5PmnZ9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlIG92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5jdXJyZW50TW92ZVBvcykuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzXCIsIGRpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRpcyA+IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUN0bCAmJiBpc1ZhbGlkKHRoaXMuZW5lbXlDdGwubm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ub2RlLm9mZihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KTtcclxuICAgIH1cclxuICAgIGdldENvbG9ueUNvbUN0bCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUNvbG9ueUN0bDtcclxuICAgIH1cclxufVxyXG4iXX0=