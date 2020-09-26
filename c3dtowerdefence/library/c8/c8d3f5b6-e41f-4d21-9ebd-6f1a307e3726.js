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
                console.log(_this9.objectType + "播放移动动作", _this9.currentBoneAnimName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJoZWFsdGhDb3VudCIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZW15Q3RsIiwiY3VycmVudE1vdmVUdyIsImdyb3VuZE1hcEN0bCIsImJlQXR0YWNrZWRDYiIsImJlemllclBhdGhMaXN0IiwiY3VycmVudEJvbmVBbmltTmFtZSIsImVuZW15Q29sb255Q3RsIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRNb3ZlVHlwZSIsImluZGV4T2YiLCJub2RlIiwicG9zaXRpb24iLCJ4IiwieiIsImdldENvbXBvbmVudCIsIm9iamVjdFR5cGUiLCJIZWFsdGhDb3VudCIsIkJlTG9ja2VkQ291bnQiLCJhbmdsZSIsImdldExvb2tBdEFuZ2xlIiwid29ybGRSb3RhdGlvbiIsInN0b3AiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiZ2V0U3RhdGUiLCJzcGVlZCIsInNjaGVkdWxlT25jZSIsImN1cnJlbnRTdGF0ZSIsImluZGV4IiwiZW5lbXRDdGwiLCJvbiIsImZvcnplblNlbGYiLCJiaW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5Iiwic2hvdyIsImNhbGwiLCJhY3RpdmUiLCJ0byIsInNjYWxlIiwic3RhcnRSdW4iLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1vdmVUeXBlIiwicHJvY2VlV2Fsa0xvZ2ljIiwiZ2V0SXNDb2xvbnkiLCJwcm9jZXNzRmx5TG9naWMiLCJmbHlIZWlnaHQiLCJtYXBTaXplIiwiZ2V0TWFwU2l6ZSIsInBvc0luZGV4TGlzdCIsInkiLCJpIiwicHVzaCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvc0xpc3QiLCJsZW5ndGgiLCJwb3N2MiIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJub2RlUG9zIiwiYmV6aWVyIiwiZW5kUG9zTGlzdCIsImdldFBvaW50TGlzdCIsInByb2Nlc3NNb3ZlQWN0aW9uIiwiYW5pbUxlbmd0aCIsInNob290T25lQm9zc0J1bGxldCIsInRoZW4iLCJzdGFydFBvc1JhbmRvbUxpc3QiLCJyYW5kb21JbmRleCIsInNldFR3RGF0YSIsInRpbWUiLCJkaXMiLCJzdWJ0cmFjdCIsIm1vdmVTcGVlZCIsInJvdGF0aW9uQW5pbSIsInRhcmdldFBvcyIsImRpciIsIm5vcm1hbGl6ZSIsInRhcmdldFF1YXQiLCJmcm9tVmlld1VwIiwiVVAiLCJwcmVRdWF0IiwibGVycCIsInNjaGVkdWxlIiwidW5zY2hlZHVsZSIsIm1hcE5vZGVMaXN0Iiwib2JzUG9zTGlzdCIsImdldE9ic1Bvc0xpc3QiLCJwYXRoVG9vbCIsIm9ic1Bvc0RhdGFMaXN0Iiwib2JzUG9zIiwidXBkYXRlT2JzRGF0YSIsImZpbmRQYXRoTGlzdCIsInBhdGhQb3NMaXN0Iiwic2xpY2UiLCJlcXVhbHMiLCJ0b0JlQXR0YWNrIiwicGxheSIsInN0YXRlQW5pbSIsInJlcGVhdENvdW50IiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiZ2V0QmFzZUF0dGFja0RhbWFnZSIsImVuZW15QXR0YWNrZWQiLCJ0YXJnZXRQb2ludCIsInF1YXQiLCJwYXVzZSIsImJvc3NTaG9vdE9uZUVnZyIsImFkZFN0YXRlIiwicmVtb3ZlRW5lbXlJbkxpc3QiLCJkZXN0cm95IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZXVsZXJBbmdsZXMiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwiYnkiLCJjYWlkYWlFZmZlY3QiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJkYXRhIiwiY2IiLCJiYXNlQXR0YWNrTnVtIiwiYmFzZUdhc051bSIsImN1cnJlbnRHYXNOdW0iLCJwcm9ncmVzcyIsInRvd2VyIiwiZGVsdGFUaW1lIiwidXBkYXRlIiwiY2xpcHMiLCJzaG93Q2xpcCIsInVuZGVmaW5lZCIsImNsaXAiLCJuYW1lIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBOEJDLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTBDQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7OztBQUN4T0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsWSxzQkFBQUEsWTs7QUFDQUMsTUFBQUEsTyxrQkFB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QkFBS2IsUUFBTCxDQUFjYSxJQUFkLENBQW1Ca0ksR0FBbkIsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQUs3RyxVQUFoRCxFQUE0RCxJQUE1RDtBQUNILGFBTE8sQ0FNUjs7QUFDSDs7OzRDQUNpQjtBQUNkLG1CQUFPLEtBQUs1QixjQUFaO0FBQ0g7Ozs7Ozs7Ozs7O2lCQXhtQjJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgdjMsIFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGJlemllciwgZmluZCwgUXVhdCwgU3BoZXJlQ29sbGlkZXJDb21wb25lbnQsIE1vZGVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG5pbXBvcnQgeyBFbmVteUNvbG9ueUNvbSB9IGZyb20gJy4vRW5lbXlDb2xvbnlDb20nO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuZW5lbXlCZUxvY2tNYXhOdW07XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmV6aWVyUGF0aExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50Qm9uZUFuaW1OYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgZW5lbXlDb2xvbnlDdGw6IEVuZW15Q29sb255Q29tID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvczogVmVjMywgZW5kUG9zOiBWZWMzKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKS5pbmRleE9mKFwiRmx5XCIpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDEwLCB0aGlzLm5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JvdW5kTWFwQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQ291bnQgPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uSGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5iZUxvY2tlZE1heE51bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CZUxvY2tlZENvdW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgZW5kUG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IGFuZ2xlO1xyXG5cclxuICAgIH1cclxuICAgIGVudGVyU2hvd0Jvc3NFbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRpdWVQbGF5TW92ZUFuaW0oKSB7XHJcbiAgICAgICAgLy/nu6fnu63ooYzotbBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgc3RhdGUuc3BlZWQgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnNwZWVkID0gMTtcclxuICAgICAgICAgICAgfSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dFbmVteUVudGVyQW5pbShpbmRleDogbnVtYmVyLCBlbmVtdEN0bDogRW5lbXlDb250cm9sbGVyLCBzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bCA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLmJpbmQodGhpcyksIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLm5vZGUub24oJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiLCB0aGlzLmNvbnRpdWVQbGF5TW92ZUFuaW0sIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuMSAqIGluZGV4KVxyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVR5cGUgPSB0aGlzLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgICAgIC8vIHR3LnNldCh7IHNjYWxlOiB2MygwLCBtb3ZlVHlwZS5pbmRleE9mKFwiRmx5XCIpID4gLTEgPyAxMCA6IDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LnNob3coKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgLy8gYm91bmNlT3V0IHF1YXJ0SW5cclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9KVxyXG5cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnN0YXJ0UnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UnVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydFJ1bihzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBwb3MgXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICBpZiAobW92ZVR5cGUgPT09IFwiV2Fsa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElzQ29sb255KCkpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+Q6KGM6ZuG576k57O757ufXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbGlzdCA9IHRoaXMuZW5lbXlDdGwuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBhdGhWZWMgPSBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigyLCAxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMiw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigzLDIpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsMyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigzLDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDQsNCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwwKVxyXG4gICAgICAgICAgICAgICAgLy8gXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdGxQb3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoVmVjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY3RsUG9zLnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwYXRoVmVjW2ldLngsIHBhdGhWZWNbaV0ueSkucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WPluWHuuWIl+ihqOmHjOmdoiDnmoQg576k6ZuG5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q29sb255Q3RsID0gbmV3IEVuZW15Q29sb255Q29tKGxpc3QsIHRoaXMubm9kZSwgY3RsUG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhuaVjOS6uumjnuihjOeahOmAu+i+kVxyXG4gICAgICAgIC8vMemmluWFiOiuvue9ruS4gOadoeaVjOS6uumcgOimgemjnui/h+eahOaOp+WItueCuVxcXHJcbiAgICAgICAgLy8gbGV0IGVuZFBvaW50ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShlbmRQb3MueCwgZW5kUG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvaW50O1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIC8v5b2T5YmN55qE5ri45oiP54q25oCB5pivcnVuICwg5aaC5p6c5b2T5YmN55qE54q25oCB5LiN5piv6L+Q6KGM54q25oCB77yM6YKj5LmI6ZyA6KaB5omT5pat6aOe6KGM56e75YqoXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZseUhlaWdodCA9IDEwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aSE55CG6aOe6KGM55qE6YC76L6RXCIpO1xyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIGxldCBwb3NJbmRleExpc3Q6IFZlYzJbXSA9IFt2MihzdGFydFBvcy54LCBzdGFydFBvcy55KV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2godjIoXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueSAtIDEpKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc3YyID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc3YyXCIsIHBvc3YyKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc3YyLngsIHBvc3YyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zTGlzdC5wdXNoKHYzKG5vZGVQb3MueCwgZmx5SGVpZ2h0LCBub2RlUG9zLnopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gdjMocG9zdjIueCwgMCwgcG9zdjIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICBsZXQgZW5kUG9zTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMjAwKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gZW5kUG9zTGlzdFswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKGVuZFBvc0xpc3QpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mkq3mlL7mlLvlh7vmlYzkurrnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShcIumqqOaetnxBdHRhY2tBbmltXCIpLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCwgYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5Zyo6aOe5LiA6YGNXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NSYW5kb21MaXN0ID0gW3YyKDAsIDApLCB2MigwLCAxMCksIHYyKDEwLCAwKSwgdjIoMTAsIDEwKV1cclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChzdGFydFBvc1JhbmRvbUxpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmx5TG9naWMoc3RhcnRQb3NSYW5kb21MaXN0W3JhbmRvbUluZGV4XSwgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHBvc1wiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgLy8gcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICAvLyBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGluZGV4UG9zID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgcG9zID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShpbmRleFBvcy54LCBpbmRleFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyAgICAgcG9zTGlzdC5wdXNoKHYzKHBvcy54LCBmbHlIZWlnaHQsIHBvcy56KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHBvc0xpc3QucHVzaCh2MyhlbmRQb3MueCwgZmx5SGVpZ2h0LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIC8vIC8vIHBvc0xpc3QucHVzaCh2MyhlbmRQb3MueCwgZmx5SGVpZ2h0LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIC8vIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICAvLyAvLyBsZXQgcGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDMwKTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAvLyDpmo/mnLrlh6DkuKrmjqfliLbngrlcclxuXHJcbiAgICB9XHJcbiAgICBnZXRPbmVSYW5kb21NYXBQb3MoKTogVmVjMiB7XHJcbiAgICAgICAgLy/ku47lnLDlm77ph4zpnaLpmo/mnLrkuIDkuKrngrlcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICByZXR1cm4gdjIoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueSAtIDEpKSlcclxuICAgIH1cclxuICAgIHByb2Nlc3NNb3ZlQWN0aW9uKHBhdGhMaXN0OiBWZWMzW10pOiBUd2VlbiB7XHJcbiAgICAgICAgLy/lpITnkIbnp7vliqjnmoTliqjkvZxcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICBjb25zdCBzZXRUd0RhdGEgPSAodHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjMocGF0aExpc3RbaW5kZXggLSAxXSkuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZShwYXRoTGlzdFtpbmRleCAtIDFdLCBwYXRoTGlzdFtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmxvb2tBdChwYXRoTGlzdFtpbmRleF0pXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uQW5pbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBwYXRoTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0YXJnZXRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5mcm9tVmlld1VwKHRhcmdldFF1YXQsIGRpciwgVmVjMy5VUCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlUXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBRdWF0LmxlcnAocHJlUXVhdCwgbmV3IFF1YXQodGhpcy5ub2RlLndvcmxkUm90YXRpb24pLCB0YXJnZXRRdWF0LCAwLjE1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53b3JsZFJvdGF0aW9uID0gcHJlUXVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHJvdGF0aW9uQW5pbSwgMSAvIDYwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8odGltZSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBhdGhMaXN0W2luZGV4XSxcclxuICAgICAgICAgICAgICAgIC8vIHdvcmxkUm90YXRpb246IGFuZ2xlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHJvdGF0aW9uQW5pbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0VHdEYXRhKHR3LCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuICAgIHByb2NlZVdhbGtMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbotbDot6/nmoTpgLvovpFcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXBOb2RlTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0xpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRPYnNQb3NMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhUb29sID0gbmV3IEZpbmRQYXRoV2l0aEFTdGFydChtYXBOb2RlTGlzdCwgW3N0YXJ0UG9zLngsIHN0YXJ0UG9zLnldLCBbZW5kUG9zLngsIGVuZFBvcy55XSk7XHJcbiAgICAgICAgbGV0IG9ic1Bvc0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvYnNQb3MgPSBvYnNQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNQb3NEYXRhTGlzdC5wdXNoKFtvYnNQb3MueCwgb2JzUG9zLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGF0aFRvb2wudXBkYXRlT2JzRGF0YShvYnNQb3NEYXRhTGlzdCk7XHJcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0gcGF0aFRvb2wuZmluZFBhdGhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHBhdGhQb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoTGlzdFtpXTtcclxuICAgICAgICAgICAgcGF0aFBvc0xpc3QucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc1swXSwgcG9zWzFdKS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwYXRoUG9zTGlzdCk7IC8v6YCa6L+H6I635Y+W5Yiw55qEIOi3r+W+hOeCue+8jOadpeWItuS9nOS4gOadoei0neWhnuWwlOabsue6v1xyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDMwKTsgLy/ot6/lvoTlr4bluqbkuLoyMFxyXG4gICAgICAgIHRoaXMuYmV6aWVyUGF0aExpc3QgPSB0aGlzLmJlemllclBhdGhMaXN0LnNsaWNlKDAsIHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gNSk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi5lcXVhbHModGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDFdKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4jeeUqOWGjei1sOS4gOmBjemAu+i+keS6hlwiKVxyXG4gICAgICAgICAgICB0aGlzLnRvQmVBdHRhY2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24odGhpcy5iZXppZXJQYXRoTGlzdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgIH1cclxuICAgIHRvQmVBdHRhY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlQW5pbSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgc3RhdGVBbmltLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaZrumAmuaVjOS6uuWPkeWKqOaUu+WHu1wiLCB0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmJlYXR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImZvcnplblwiKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgIC8v6L+b5YWl5pS75Ye754q25oCBXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5wdXNoT25lRW5lbXlEZWFkRGF0YShuZXcgRGVhZEVuZW15T2JqKHRoaXMub2JqZWN0VHlwZSwgdGhpcy5nZXRDdXJyZW50R29sZENvdW50KCkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5ldWxlckFuZ2xlcyA9IHYzKDAsIDM2MCAqIE1hdGgucmFuZG9tKCksIDApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcyBcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmFkZEVuZW15QWRkR29sZEFuaW0odGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIuaSreaUvuenu+WKqOWKqOS9nFwiLCB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNsaXBzID0gc2tlbGV0ZUFuaW0uY2xpcHM7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbW92ZUNsaXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgY2xpcHMubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gbW92ZUNsaXBzID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNsaXAgPSBjbGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNsaXAgbmFtZVwiLCBjbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChjbGlwLm5hbWUgPT09ICfpqqjmnrZ8TW92ZUFuaW0nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbW92ZUNsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChtb3ZlQ2xpcCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShtb3ZlQ2xpcC4pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgbW92ZVwiKTtcclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBtb3ZlVGltZSA9IG5ldyBWZWMzKHRoaXMuc3RhcnRQb3MpLnN1YnRyYWN0KHRoaXMuZW5kUG9zKS5sZW5ndGgoKSAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAvLyB0dy50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogdGhpcy5lbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHR3O1xyXG4gICAgICAgICAgICAvLyDlvIDlp4vov5DooYzkuYvlkI7vvIzorqHnrpfkuIDmnaEg5pyA55+t6Lev5b6EXHJcbiAgICAgICAgICAgIC8vIGxldCBwYXRoTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldFBhdGhMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJiZS1hdHRhY2tlZFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiID0gZGF0YS5jYjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLT0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLjA1LCAwLjk4LCAxLjA1KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMSwgMSwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgYmVBdHRhY2tBbmltTmFtZSA9IFwi6aqo5p62fEJlQXR0YWNrQW5pbVwiOyAvL+iiq+aUu+WHu+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdGF0ZUFuaW0gJiYgIXN0YXRlQW5pbS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGJlQXR0YWtjQ2xpY2sgPSBza2VsZXRlQW5pbS5jbGlwc1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLlxyXG4gICAgICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgICAgIC8vIFR3ZWVuLlxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUd1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6KKr5omT5q275LqGXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUNvbG9ueUN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sb255Q3RsLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMuY3VycmVudE1vdmVQb3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUluZGV4IDwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5jdXJyZW50TW92ZUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/np7vliqjnu5PmnZ9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlIG92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5jdXJyZW50TW92ZVBvcykuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzXCIsIGRpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRpcyA+IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUN0bCAmJiBpc1ZhbGlkKHRoaXMuZW5lbXlDdGwubm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ub2RlLm9mZihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KTtcclxuICAgIH1cclxuICAgIGdldENvbG9ueUNvbUN0bCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUNvbG9ueUN0bDtcclxuICAgIH1cclxufVxyXG4iXX0=