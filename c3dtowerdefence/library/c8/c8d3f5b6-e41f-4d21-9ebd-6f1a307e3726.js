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
            console.log("start pos ", startPos);
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
                _this5.schedule(rotationAnim, 1 / 60);
              });
              tw.to(time, {
                position: pathList[index] // worldRotation: angle

              });
              tw.call(function () {
                _this5.unschedule(rotationAnim);
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

            this.bezierPathList = bezier.getPointList(30); //路径密度为20

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
                _this9.currentBoneAnimName = "骨架|MoveAnim";
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

              _this9.currentGasNum += baseGasNum; // scale = 0;

              var scale = _this9.currentGasNum / _this9.baseGasNum; // console.log("scale", scale);
              // this.currentMoveTw.stop();
              // this.node.
              // stop
              // Tween.

              var tw = new Tween(_this9.node);
              tw.to(0.2, {
                scale: v3(scale, scale, scale)
              });
              tw.call(function () {// this.currentMoveTw
              });
              tw.start();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJoZWFsdGhDb3VudCIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZW15Q3RsIiwiY3VycmVudE1vdmVUdyIsImdyb3VuZE1hcEN0bCIsImJlQXR0YWNrZWRDYiIsImJlemllclBhdGhMaXN0IiwiY3VycmVudEJvbmVBbmltTmFtZSIsImVuZW15Q29sb255Q3RsIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRNb3ZlVHlwZSIsImluZGV4T2YiLCJub2RlIiwicG9zaXRpb24iLCJ4IiwieiIsImdldENvbXBvbmVudCIsIm9iamVjdFR5cGUiLCJIZWFsdGhDb3VudCIsIkJlTG9ja2VkQ291bnQiLCJhbmdsZSIsImdldExvb2tBdEFuZ2xlIiwid29ybGRSb3RhdGlvbiIsInN0b3AiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiZ2V0U3RhdGUiLCJzcGVlZCIsInNjaGVkdWxlT25jZSIsImN1cnJlbnRTdGF0ZSIsImluZGV4IiwiZW5lbXRDdGwiLCJvbiIsImZvcnplblNlbGYiLCJiaW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5Iiwic2hvdyIsImNhbGwiLCJhY3RpdmUiLCJ0byIsInNjYWxlIiwic3RhcnRSdW4iLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1vdmVUeXBlIiwicHJvY2VlV2Fsa0xvZ2ljIiwiZ2V0SXNDb2xvbnkiLCJwcm9jZXNzRmx5TG9naWMiLCJmbHlIZWlnaHQiLCJtYXBTaXplIiwiZ2V0TWFwU2l6ZSIsInBvc0luZGV4TGlzdCIsInkiLCJpIiwicHVzaCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvc0xpc3QiLCJsZW5ndGgiLCJwb3N2MiIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJub2RlUG9zIiwiYmV6aWVyIiwiZW5kUG9zTGlzdCIsImdldFBvaW50TGlzdCIsInByb2Nlc3NNb3ZlQWN0aW9uIiwiYW5pbUxlbmd0aCIsInNob290T25lQm9zc0J1bGxldCIsInRoZW4iLCJzdGFydFBvc1JhbmRvbUxpc3QiLCJyYW5kb21JbmRleCIsInNldFR3RGF0YSIsInRpbWUiLCJkaXMiLCJzdWJ0cmFjdCIsIm1vdmVTcGVlZCIsInJvdGF0aW9uQW5pbSIsInRhcmdldFBvcyIsImRpciIsIm5vcm1hbGl6ZSIsInRhcmdldFF1YXQiLCJmcm9tVmlld1VwIiwiVVAiLCJwcmVRdWF0IiwibGVycCIsInNjaGVkdWxlIiwidW5zY2hlZHVsZSIsIm1hcE5vZGVMaXN0Iiwib2JzUG9zTGlzdCIsImdldE9ic1Bvc0xpc3QiLCJwYXRoVG9vbCIsIm9ic1Bvc0RhdGFMaXN0Iiwib2JzUG9zIiwidXBkYXRlT2JzRGF0YSIsImZpbmRQYXRoTGlzdCIsInBhdGhQb3NMaXN0Iiwic2xpY2UiLCJlcXVhbHMiLCJ0b0JlQXR0YWNrIiwicGxheSIsInN0YXRlQW5pbSIsInJlcGVhdENvdW50IiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiZ2V0QmFzZUF0dGFja0RhbWFnZSIsImVuZW15QXR0YWNrZWQiLCJ0YXJnZXRQb2ludCIsInF1YXQiLCJwYXVzZSIsImJvc3NTaG9vdE9uZUVnZyIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZXVsZXJBbmdsZXMiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwiYnkiLCJjYWlkYWlFZmZlY3QiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJkYXRhIiwiY2IiLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUdhc051bSIsImN1cnJlbnRHYXNOdW0iLCJwcm9ncmVzcyIsInRvd2VyIiwiZGVsdGFUaW1lIiwidXBkYXRlIiwiY2xpcHMiLCJzaG93Q2xpcCIsInVuZGVmaW5lZCIsImNsaXAiLCJuYW1lIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBOEJDLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTBDQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7OztBQUN4T0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsWSxzQkFBQUEsWTs7QUFDQUMsTUFBQUEsTyxrQkFB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OlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBiZXppZXIsIGZpbmQsIFF1YXQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBNb2RlbENvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4uL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEZpbmRQYXRoV2l0aEFTdGFydCB9IGZyb20gJy4uL3V0aWwvRmluZFBhdGhXaXRoQVN0YXJ0JztcclxuaW1wb3J0IHsgRW5lbXlDb2xvbnlDb20gfSBmcm9tICcuL0VuZW15Q29sb255Q29tJztcclxuLy8gaW1wb3J0IHsgQmVzaXplIH0gZnJvbSAnLi4vdXRpbC9CZXNpemUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbXlCYXNlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHVibGljIHBhdGhMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHB1YmxpYyBjdXJyZW50UGF0aEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgYmVMb2NrZWRNYXhOdW06IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmVuZW15QmVMb2NrTWF4TnVtO1xyXG4gICAgcHVibGljIGN1cnJlbnRiZUxvY2tlZENvdW50ID0gMDtcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aEJhcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBzdGFydFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsOiBFbmVteUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW92ZVR3OiBUd2VlbiA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZE1hcEN0bDogR3JvdW5kTWFwQ3RsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVBdHRhY2tlZENiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJlemllclBhdGhMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEJvbmVBbmltTmFtZSA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVuZW15Q29sb255Q3RsOiBFbmVteUNvbG9ueUNvbSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRNb3ZlUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkuaW5kZXhPZihcIkZseVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZi5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIiwgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUeXBlID0gdGhpcy5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgICAgICAvLyB0dy5zZXQoeyBzY2FsZTogdjMoMCwgbW92ZVR5cGUuaW5kZXhPZihcIkZseVwiKSA+IC0xID8gMTAgOiAwLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy5zaG93KCk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zIFwiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgbW92ZVR5cGUgPSB0aGlzLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgaWYgKG1vdmVUeXBlID09PSBcIldhbGtcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vdmVUeXBlID09PSAnRmx5Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJc0NvbG9ueSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+i/kOihjOmbhue+pOezu+e7n1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGxpc3QgPSB0aGlzLmVuZW15Q3RsLmdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMTAsIHRoaXMubm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBwYXRoVmVjID0gW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsIDApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigxMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAxMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMiwgMSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoOSwxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDIsOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMywyKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig3LDMpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsNyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2Mig0LDQpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsMClcclxuICAgICAgICAgICAgICAgIC8vIF07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY3RsUG9zID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyAvLyB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKClcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFZlYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGN0bFBvcy5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocGF0aFZlY1tpXS54LCBwYXRoVmVjW2ldLnkpLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gLy/lj5blh7rliJfooajph4zpnaIg55qEIOe+pOmbhuaVjOS6ulxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUNvbG9ueUN0bCA9IG5ldyBFbmVteUNvbG9ueUNvbShsaXN0LCB0aGlzLm5vZGUsIGN0bFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NGbHlMb2dpYyhzdGFydFBvcywgZW5kUG9zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NGbHlMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbmlYzkurrpo57ooYznmoTpgLvovpFcclxuICAgICAgICAvLzHpppblhYjorr7nva7kuIDmnaHmlYzkurrpnIDopoHpo57ov4fnmoTmjqfliLbngrlcXFxyXG4gICAgICAgIC8vIGxldCBlbmRQb2ludCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoZW5kUG9zLngsIGVuZFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb2ludDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOa4uOaIj+eKtuaAgeaYr3J1biAsIOWmguaenOW9k+WJjeeahOeKtuaAgeS4jeaYr+i/kOihjOeKtuaAge+8jOmCo+S5iOmcgOimgeaJk+aWremjnuihjOenu+WKqFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmbHlIZWlnaHQgPSAxMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWkhOeQhumjnuihjOeahOmAu+i+kVwiKTtcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICBsZXQgcG9zSW5kZXhMaXN0OiBWZWMyW10gPSBbdjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSldO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKHYyKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSxcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3N2MiA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3N2MlwiLCBwb3N2Mik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3N2Mi54LCBwb3N2Mi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvc0xpc3QucHVzaCh2Myhub2RlUG9zLngsIGZseUhlaWdodCwgbm9kZVBvcy56KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IHBvcyA9IHYzKHBvc3YyLngsIDAsIHBvc3YyLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgbGV0IGVuZFBvc0xpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihlbmRQb3NMaXN0KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+5pS75Ye75pWM5Lq655qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoXCLpqqjmnrZ8QXR0YWNrQW5pbVwiKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQsIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+WcqOmjnuS4gOmBjVxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zUmFuZG9tTGlzdCA9IFt2MigwLCAwKSwgdjIoMCwgMTApLCB2MigxMCwgMCksIHYyKDEwLCAxMCldXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoc3RhcnRQb3NSYW5kb21MaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zUmFuZG9tTGlzdFtyYW5kb21JbmRleF0sIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3NcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgLy8gbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBpbmRleFBvcyA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoaW5kZXhQb3MueCwgaW5kZXhQb3MueSkucG9zaXRpb247XHJcbiAgICAgICAgLy8gICAgIHBvc0xpc3QucHVzaCh2Myhwb3MueCwgZmx5SGVpZ2h0LCBwb3MueikpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gLy8gbGV0IHBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihwb3NMaXN0KTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8g6ZqP5py65Yeg5Liq5o6n5Yi254K5XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0T25lUmFuZG9tTWFwUG9zKCk6IFZlYzIge1xyXG4gICAgICAgIC8v5LuO5Zyw5Zu+6YeM6Z2i6ZqP5py65LiA5Liq54K5XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHYyKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSkpXHJcbiAgICB9XHJcbiAgICBwcm9jZXNzTW92ZUFjdGlvbihwYXRoTGlzdDogVmVjM1tdKTogVHdlZW4ge1xyXG4gICAgICAgIC8v5aSE55CG56e75Yqo55qE5Yqo5L2cXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3Qgc2V0VHdEYXRhID0gKHR3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHBhdGhMaXN0W2luZGV4IC0gMV0pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUocGF0aExpc3RbaW5kZXggLSAxXSwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbkFuaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gcGF0aExpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGFyZ2V0UG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQuZnJvbVZpZXdVcCh0YXJnZXRRdWF0LCBkaXIsIFZlYzMuVVApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5sZXJwKHByZVF1YXQsIG5ldyBRdWF0KHRoaXMubm9kZS53b3JsZFJvdGF0aW9uKSwgdGFyZ2V0UXVhdCwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IHByZVF1YXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShyb3RhdGlvbkFuaW0sIDEgLyA2MCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAvLyB3b3JsZFJvdGF0aW9uOiBhbmdsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShyb3RhdGlvbkFuaW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFR3RGF0YSh0dywgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcbiAgICBwcm9jZWVXYWxrTG9naWMoc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8v5aSE55CG6LWw6Lev55qE6YC76L6RXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFwTm9kZUxpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBvYnNQb3NMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0T2JzUG9zTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoVG9vbCA9IG5ldyBGaW5kUGF0aFdpdGhBU3RhcnQobWFwTm9kZUxpc3QsIFtzdGFydFBvcy54LCBzdGFydFBvcy55XSwgW2VuZFBvcy54LCBlbmRQb3MueV0pO1xyXG4gICAgICAgIGxldCBvYnNQb3NEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzUG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2JzUG9zID0gb2JzUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgb2JzUG9zRGF0YUxpc3QucHVzaChbb2JzUG9zLngsIG9ic1Bvcy55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhdGhUb29sLnVwZGF0ZU9ic0RhdGEob2JzUG9zRGF0YUxpc3QpO1xyXG4gICAgICAgIGxldCBwYXRoTGlzdCA9IHBhdGhUb29sLmZpbmRQYXRoTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoUG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aExpc3RbaV07XHJcbiAgICAgICAgICAgIHBhdGhQb3NMaXN0LnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3NbMF0sIHBvc1sxXSkucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gdGhpcy5iZXppZXJQYXRoTGlzdC5zbGljZSgwLCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDUpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24uZXF1YWxzKHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3nlKjlho3otbDkuIDpgY3pgLvovpHkuoZcIilcclxuICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICB9XHJcbiAgICB0b0JlQXR0YWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHN0YXRlQW5pbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHN0YXRlQW5pbS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmma7pgJrmlYzkurrlj5HliqjmlLvlh7tcIiwgdGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5iZWF0dFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbmVteUF0dGFja2VkKHRoaXMuZ2V0QmFzZUF0dGFja0RhbWFnZSgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoKDEgLSB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCkgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIC8v5pmu6YCa5pWM5Lq655qE5pS75Ye7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG5cclxuICAgICAgICAgICAgLy8gfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0TG9va0F0QW5nbGUoc3RhcnRQb3MsIHRhcmdldFBvaW50OiBWZWMzKTogUXVhdCB7XHJcbiAgICAgICAgLy8gLy/ojrflj5bliLDmnJ3lkJHnmoTop5LluqZcclxuXHJcbiAgICAgICAgbGV0IGRpciA9IHYzKHN0YXJ0UG9zKS5zdWJ0cmFjdCh0YXJnZXRQb2ludCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIHF1YXQubGVycFxyXG4gICAgICAgIFF1YXQuZnJvbVZpZXdVcChxdWF0LCBkaXIsIFZlYzMuVVApO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YXRcIiwgcXVhdCk7XHJcbiAgICAgICAgLy8gcm90YXRlQXJvdW5kXHJcbiAgICAgICAgLy8gc3RhcnRQb3MuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZS9cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1YXRcclxuICAgIH1cclxuICAgIGZvcnplblNlbGYoKSB7XHJcbiAgICAgICAgLy/lhrDlhrvoh6rlt7FcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJmb3J6ZW5cIik7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlQW5pbS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob290T25lQm9zc0J1bGxldCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcuZGVsYXkodGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwuYm9zc1Nob290T25lRWdnKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgLy8gfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgIC8vICAgICAvL+i/m+WFpeaUu+WHu+eKtuaAgVxyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgLy8gICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgIC8vICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8v5pmu6YCa5pWM5Lq655qE5pS75Ye7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG5cclxuICAgICAgICAvLyAgICAgfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5yZW1vdmVFbmVteUluTGlzdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucHVzaE9uZUVuZW15RGVhZERhdGEobmV3IERlYWRFbmVteU9iaih0aGlzLm9iamVjdFR5cGUsIHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJ1blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byA5aeL56e75YqoIFxyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG5cclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IG1vdmVDbGlwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IGNsaXBzLmxlbmd0aCA7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIG1vdmVDbGlwcyA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjbGlwIG5hbWVcIiwgY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY2xpcC5uYW1lID09PSAn6aqo5p62fE1vdmVBbmltJyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1vdmVDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobW92ZUNsaXApe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkobW92ZUNsaXAuKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyh0aGlzLnN0YXJ0UG9zKS5zdWJ0cmFjdCh0aGlzLmVuZFBvcykubGVuZ3RoKCkgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgLy8gdHcudG8obW92ZVRpbWUsIHsgcG9zaXRpb246IHRoaXMuZW5kUG9zIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0dztcclxuICAgICAgICAgICAgLy8g5byA5aeL6L+Q6KGM5LmL5ZCO77yM6K6h566X5LiA5p2hIOacgOefrei3r+W+hFxyXG4gICAgICAgICAgICAvLyBsZXQgcGF0aExpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRQYXRoTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYmUtYXR0YWNrZWRcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy/ooqvmlLvlh7tcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLooqvmlLvlh7tcIiwgYXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlQXR0YWNrZWRDYiA9IGRhdGEuY2I7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50IC09IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICAgICAgbGV0IGJhc2VHYXNOdW0gPSBkYXRhLmJhc2VHYXNOdW07IC8v5Y+W5aSE5Z+656GA5rCU5YC8XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gKz0gYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuY3VycmVudEdhc051bSAvIHRoaXMuYmFzZUdhc051bTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5cclxuICAgICAgICAgICAgLy8gc3RvcFxyXG4gICAgICAgICAgICAvLyBUd2Vlbi5cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoc2NhbGUsIHNjYWxlLCBzY2FsZSkgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVBdHRhY2tlZENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ooqvmiZPmrbvkuoZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaGVhbHRoQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuICAgIH1cclxuICAgIGdldElzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3ZlcicgfHwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAndG8tZGVhZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQ2FuTG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCA8IHRoaXMuYmVMb2NrZWRNYXhOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgdW5TZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQtLTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Q29sb255Q3RsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDb2xvbnlDdGwudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy5jdXJyZW50TW92ZVBvcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlSW5kZXggPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gdGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmN1cnJlbnRNb3ZlSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL+enu+WKqOe7k+adn1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUgb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLmN1cnJlbnRNb3ZlUG9zKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXMgPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGlzID4gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZChkaXIubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoZGVsdGFUaW1lKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcclxuICAgICAgICAgICAgbGV0IGNsaXBzID0gc2tlbGV0ZUFuaW0uY2xpcHM7XHJcbiAgICAgICAgICAgIGxldCBzaG93Q2xpcCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLm5hbWUgPT09ICdib3NzLXNob3cnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG93Q2xpcCkge1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSgnYm9zcy1zaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgc2hvd0NsaXAubGVuZ3RoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheShcIumqqOaetnxNb3ZlQW5pbVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW0nLCB0aGlzLmNvbnRpdWVQbGF5TW92ZUFuaW0sIHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Q3RsICYmIGlzVmFsaWQodGhpcy5lbmVteUN0bC5ub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub2ZmKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sb255Q29tQ3RsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Q29sb255Q3RsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==