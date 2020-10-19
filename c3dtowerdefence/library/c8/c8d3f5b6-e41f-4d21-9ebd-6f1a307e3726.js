System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js", "../EnemyController.js", "../util/BezierN.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js", "../UI/UIController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, find, Quat, State, GameController, BaseObject, DeadEnemyObj, BezierN, GroundMapCtl, FindPathWithAStart, UIController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../UI/UIController", _context.meta, extras);
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
    }, function (_UIUIControllerJs) {
      UIController = _UIUIControllerJs.UIController;
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

          _this.bossHealthBar = null;
          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          //boss的血条。
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

              if (_this9.bossHealthBar) {
                var progressBar = _this9.bossHealthBar.children[0];
                progressBar.getComponent(ProgressBarComponent).progress = _this9.currentHealthCount / _this9.healthCount;
              }

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
                  // console.log("被打死了")
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
                // console.log("音效播放完成", this.state.getState());
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
            this.bossHealthBar = find("Canvas").getComponent(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
              error: Error()
            }), UIController) : UIController).showBossHealthBar();
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
            }

            if (this.bossHealthBar) {
              this.bossHealthBar.position = v3(0, -400, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJVSUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmVteUN0bCIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImJvc3NIZWFsdGhCYXIiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJzdGFydFBvcyIsImVuZFBvcyIsImdldE1vdmVUeXBlIiwiaW5kZXhPZiIsIm5vZGUiLCJwb3NpdGlvbiIsIngiLCJ6IiwiZ2V0Q29tcG9uZW50Iiwib2JqZWN0VHlwZSIsIkJlTG9ja2VkQ291bnQiLCJoZWFsdGhDb3VudCIsImFuZ2xlIiwiZ2V0TG9va0F0QW5nbGUiLCJ3b3JsZFJvdGF0aW9uIiwic3RvcCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRTdGF0ZSIsInNwZWVkIiwic2NoZWR1bGVPbmNlIiwiY3VycmVudFN0YXRlIiwiaW5kZXgiLCJlbmVtdEN0bCIsIm9uIiwiZm9yemVuU2VsZiIsImJpbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3IiwicG9zIiwiZGVsYXkiLCJzaG93IiwiY2FsbCIsImFjdGl2ZSIsInRvIiwic2NhbGUiLCJzdGFydFJ1biIsInN0YXJ0Iiwic2V0U3RhdGUiLCJtb3ZlVHlwZSIsInByb2NlZVdhbGtMb2dpYyIsImdldElzQ29sb255IiwicHJvY2Vzc0ZseUxvZ2ljIiwiZW1pdCIsImdldFNob3dBdWRpbyIsImZseUhlaWdodCIsIm1hcFNpemUiLCJnZXRNYXBTaXplIiwicG9zSW5kZXhMaXN0IiwieSIsImkiLCJwdXNoIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zTGlzdCIsImxlbmd0aCIsInBvc3YyIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIm5vZGVQb3MiLCJiZXppZXIiLCJlbmRQb3NMaXN0IiwiZ2V0UG9pbnRMaXN0IiwicHJvY2Vzc01vdmVBY3Rpb24iLCJhbmltTGVuZ3RoIiwic2hvb3RPbmVCb3NzQnVsbGV0IiwidGhlbiIsInN0YXJ0UG9zUmFuZG9tTGlzdCIsInJhbmRvbUluZGV4Iiwic2V0VHdEYXRhIiwidGltZSIsImRpcyIsInN1YnRyYWN0IiwibW92ZVNwZWVkIiwicm90YXRpb25BbmltIiwidGFyZ2V0UG9zIiwiZGlyIiwibm9ybWFsaXplIiwidGFyZ2V0UXVhdCIsImZyb21WaWV3VXAiLCJVUCIsInByZVF1YXQiLCJsZXJwIiwibG9va0F0IiwibWFwTm9kZUxpc3QiLCJvYnNQb3NMaXN0IiwiZ2V0T2JzUG9zTGlzdCIsInBhdGhUb29sIiwib2JzUG9zRGF0YUxpc3QiLCJvYnNQb3MiLCJ1cGRhdGVPYnNEYXRhIiwiZmluZFBhdGhMaXN0IiwicGF0aFBvc0xpc3QiLCJzbGljZSIsImVxdWFscyIsImNvbnNvbGUiLCJsb2ciLCJ0b0JlQXR0YWNrIiwicGxheSIsInN0YXRlQW5pbSIsInJlcGVhdENvdW50Iiwic2hvb3RBdWRpbyIsImFuaW1TcGVlZE11bE9mZnNldCIsImdldEJhc2VBdHRhY2tEYW1hZ2UiLCJlbmVteUF0dGFja2VkIiwidGFyZ2V0UG9pbnQiLCJxdWF0IiwicGF1c2UiLCJib3NzU2hvb3RPbmVFZ2ciLCJhZGRTdGF0ZSIsInJlbW92ZUVuZW15SW5MaXN0IiwiZGVzdHJveSIsInB1c2hPbmVFbmVteURlYWREYXRhIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsInVuc2NoZWR1bGVBbGxDYWxsYmFja3MiLCJieSIsImRlYWRBdWRpbyIsImNhaWRhaUVmZmVjdCIsImV1bGVyQW5nbGVzIiwic2hvd0FkZEdvbGRBbmltRWZmZWN0IiwicGxheVdhbGtBdWRpbyIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJwcm9ncmVzc0JhciIsImNoaWxkcmVuIiwicHJvZ3Jlc3MiLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsImdldEhlYWx0aENvdW50Iiwid2Fsa0F1ZGlvIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJ1cGRhdGUiLCJzaG93Qm9zc0hlYWx0aEJhciIsImNsaXBzIiwic2hvd0NsaXAiLCJ1bmRlZmluZWQiLCJjbGlwIiwibmFtZSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLEssT0FBQUEsSztBQUE4QkMsTUFBQUEsRSxPQUFBQSxFO0FBQXFCQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBMENDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTZEQyxNQUFBQSxJLE9BQUFB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LEtBQUt0SCxVQUFoRCxFQUE0RCxJQUE1RDtBQUNIOztBQUNELGdCQUFJLEtBQUs1QixhQUFULEVBQXVCO0FBQ25CLG1CQUFLQSxhQUFMLENBQW1CUSxRQUFuQixHQUE4QjlDLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBQyxHQUFKLEVBQVEsQ0FBUixDQUFoQztBQUNILGFBUk8sQ0FTUjs7QUFDSDs7OzRDQUNpQjtBQUNkLG1CQUFPLEtBQUtxQyxjQUFaO0FBQ0g7Ozs7Ozs7Ozs7O2lCQWhuQjJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgdjMsIFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGJlemllciwgZmluZCwgUXVhdCwgU3BoZXJlQ29sbGlkZXJDb21wb25lbnQsIE1vZGVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG5pbXBvcnQgeyBFbmVteUNvbG9ueUNvbSB9IGZyb20gJy4vRW5lbXlDb2xvbnlDb20nO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi9VSS9VSUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuZW5lbXlCZUxvY2tNYXhOdW07XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmV6aWVyUGF0aExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50Qm9uZUFuaW1OYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgZW5lbXlDb2xvbnlDdGw6IEVuZW15Q29sb255Q29tID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBib3NzSGVhbHRoQmFyOiBOb2RlID0gbnVsbDsgLy9ib3Nz55qE6KGA5p2h44CCXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzMsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkuaW5kZXhPZihcIkZseVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICAvLyB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IEVuZW15Q29udHJvbGxlciwgc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwgPSBlbmVtdEN0bDtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZi5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKCdlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGUnLCB0aGlzLmVudGVyU2hvd0Jvc3NFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ub2RlLm9uKFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIiwgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjEgKiBpbmRleClcclxuICAgICAgICAgICAgLy8gbGV0IG1vdmVUeXBlID0gdGhpcy5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgICAgICAvLyB0dy5zZXQoeyBzY2FsZTogdjMoMCwgbW92ZVR5cGUuaW5kZXhPZihcIkZseVwiKSA+IC0xID8gMTAgOiAwLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy5zaG93KCk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZ2V0U2hvd0F1ZGlvKCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIC8vIGJvdW5jZU91dCBxdWFydEluXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KVxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSlcclxuXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zdGFydFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJ1bihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRSdW4oc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zIFwiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVUeXBlID0gdGhpcy5nZXRNb3ZlVHlwZSgpO1xyXG4gICAgICAgIGlmIChtb3ZlVHlwZSA9PT0gXCJXYWxrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlVHlwZSA9PT0gJ0ZseScpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXNDb2xvbnkoKSkge1xyXG4gICAgICAgICAgICAgICAgLy/ov5DooYzpm4bnvqTns7vnu59cclxuICAgICAgICAgICAgICAgIC8vIGxldCBsaXN0ID0gdGhpcy5lbmVteUN0bC5nZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDEwLCB0aGlzLm5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGF0aFZlYyA9IFtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigxMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigwLCAxMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDIsIDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksMSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoOSw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigyLDgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDMsMiksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNywzKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig3LDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDMsNyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoNCw0KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigwLDApXHJcbiAgICAgICAgICAgICAgICAvLyBdO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGN0bFBvcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZSgpXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhWZWMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjdGxQb3MucHVzaCh0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBhdGhWZWNbaV0ueCwgcGF0aFZlY1tpXS55KS5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIC8v5Y+W5Ye65YiX6KGo6YeM6Z2iIOeahCDnvqTpm4bmlYzkurpcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDb2xvbnlDdGwgPSBuZXcgRW5lbXlDb2xvbnlDb20obGlzdCwgdGhpcy5ub2RlLCBjdGxQb3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmx5TG9naWMoc3RhcnRQb3MsIGVuZFBvcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzRmx5TG9naWMoc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8v5aSE55CG5pWM5Lq66aOe6KGM55qE6YC76L6RXHJcbiAgICAgICAgLy8x6aaW5YWI6K6+572u5LiA5p2h5pWM5Lq66ZyA6KaB6aOe6L+H55qE5o6n5Yi254K5XFxcclxuICAgICAgICAvLyBsZXQgZW5kUG9pbnQgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKGVuZFBvcy54LCBlbmRQb3MueSkucG9zaXRpb247XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gZW5kUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZ2V0U2hvd0F1ZGlvKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOa4uOaIj+eKtuaAgeaYr3J1biAsIOWmguaenOW9k+WJjeeahOeKtuaAgeS4jeaYr+i/kOihjOeKtuaAge+8jOmCo+S5iOmcgOimgeaJk+aWremjnuihjOenu+WKqFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmbHlIZWlnaHQgPSAxMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWkhOeQhumjnuihjOeahOmAu+i+kVwiKTtcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICBsZXQgcG9zSW5kZXhMaXN0OiBWZWMyW10gPSBbdjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSldO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKHYyKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSxcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3N2MiA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3N2MlwiLCBwb3N2Mik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3N2Mi54LCBwb3N2Mi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvc0xpc3QucHVzaCh2Myhub2RlUG9zLngsIGZseUhlaWdodCwgbm9kZVBvcy56KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IHBvcyA9IHYzKHBvc3YyLngsIDAsIHBvc3YyLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgbGV0IGVuZFBvc0xpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihlbmRQb3NMaXN0KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+5pS75Ye75pWM5Lq655qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoXCLpqqjmnrZ8QXR0YWNrQW5pbVwiKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQsIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+WcqOmjnuS4gOmBjVxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zUmFuZG9tTGlzdCA9IFt2MigwLCAwKSwgdjIoMCwgMTApLCB2MigxMCwgMCksIHYyKDEwLCAxMCldXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoc3RhcnRQb3NSYW5kb21MaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zUmFuZG9tTGlzdFtyYW5kb21JbmRleF0sIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3NcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIHBvc0luZGV4TGlzdC5wdXNoKGVuZFBvcyk7XHJcbiAgICAgICAgLy8gbGV0IHBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zSW5kZXhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBpbmRleFBvcyA9IHBvc0luZGV4TGlzdFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoaW5kZXhQb3MueCwgaW5kZXhQb3MueSkucG9zaXRpb247XHJcbiAgICAgICAgLy8gICAgIHBvc0xpc3QucHVzaCh2Myhwb3MueCwgZmx5SGVpZ2h0LCBwb3MueikpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBwb3NMaXN0LnB1c2godjMoZW5kUG9zLngsIGZseUhlaWdodCwgZW5kUG9zLnkpKTtcclxuICAgICAgICAvLyAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gLy8gbGV0IHBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgzMCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbihwb3NMaXN0KTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8g6ZqP5py65Yeg5Liq5o6n5Yi254K5XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0T25lUmFuZG9tTWFwUG9zKCk6IFZlYzIge1xyXG4gICAgICAgIC8v5LuO5Zyw5Zu+6YeM6Z2i6ZqP5py65LiA5Liq54K5XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHYyKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnkgLSAxKSkpXHJcbiAgICB9XHJcbiAgICBwcm9jZXNzTW92ZUFjdGlvbihwYXRoTGlzdDogVmVjM1tdKTogVHdlZW4ge1xyXG4gICAgICAgIC8v5aSE55CG56e75Yqo55qE5Yqo5L2cXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3Qgc2V0VHdEYXRhID0gKHR3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHBhdGhMaXN0W2luZGV4IC0gMV0pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUocGF0aExpc3RbaW5kZXggLSAxXSwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gcGF0aExpc3RbMF07XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbkFuaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gcGF0aExpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGFyZ2V0UG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQuZnJvbVZpZXdVcCh0YXJnZXRRdWF0LCBkaXIsIFZlYzMuVVApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5sZXJwKHByZVF1YXQsIG5ldyBRdWF0KHRoaXMubm9kZS53b3JsZFJvdGF0aW9uKSwgdGFyZ2V0UXVhdCwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IHByZVF1YXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUubG9va0F0KHBhdGhMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHJvdGF0aW9uQW5pbSwgMSAvIDYwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8odGltZSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBhdGhMaXN0W2luZGV4XSxcclxuICAgICAgICAgICAgICAgIC8vIHdvcmxkUm90YXRpb246IGFuZ2xlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHJvdGF0aW9uQW5pbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0VHdEYXRhKHR3LCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuICAgIHByb2NlZVdhbGtMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbotbDot6/nmoTpgLvovpFcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5nZXRTaG93QXVkaW8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcE5vZGVMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgb2JzUG9zTGlzdCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE9ic1Bvc0xpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFRvb2wgPSBuZXcgRmluZFBhdGhXaXRoQVN0YXJ0KG1hcE5vZGVMaXN0LCBbc3RhcnRQb3MueCwgc3RhcnRQb3MueV0sIFtlbmRQb3MueCwgZW5kUG9zLnldKTtcclxuICAgICAgICBsZXQgb2JzUG9zRGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic1Bvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9ic1BvcyA9IG9ic1Bvc0xpc3RbaV07XHJcbiAgICAgICAgICAgIG9ic1Bvc0RhdGFMaXN0LnB1c2goW29ic1Bvcy54LCBvYnNQb3MueV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoVG9vbC51cGRhdGVPYnNEYXRhKG9ic1Bvc0RhdGFMaXN0KTtcclxuICAgICAgICBsZXQgcGF0aExpc3QgPSBwYXRoVG9vbC5maW5kUGF0aExpc3QoKTtcclxuICAgICAgICBsZXQgcGF0aFBvc0xpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhMaXN0W2ldO1xyXG4gICAgICAgICAgICBwYXRoUG9zTGlzdC5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zWzBdLCBwb3NbMV0pLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBhdGhQb3NMaXN0KTsgLy/pgJrov4fojrflj5bliLDnmoQg6Lev5b6E54K577yM5p2l5Yi25L2c5LiA5p2h6LSd5aGe5bCU5puy57q/XHJcbiAgICAgICAgdGhpcy5iZXppZXJQYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoNTApOyAvL+i3r+W+hOWvhuW6puS4ujIwXHJcbiAgICAgICAgdGhpcy5iZXppZXJQYXRoTGlzdCA9IHRoaXMuYmV6aWVyUGF0aExpc3Quc2xpY2UoMCwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSA1KTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBvc2l0aW9uLmVxdWFscyh0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN55So5YaN6LWw5LiA6YGN6YC76L6R5LqGXCIpXHJcbiAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVXYWxrTG9naWMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdGhpcy5wcm9jZXNzTW92ZUFjdGlvbih0aGlzLmJlemllclBhdGhMaXN0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvQmVBdHRhY2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgfVxyXG4gICAgdG9CZUF0dGFjaygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBzdGF0ZUFuaW0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBzdGF0ZUFuaW0ucmVwZWF0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaZrumAmuaVjOS6uuWPkeWKqOaUu+WHu1wiLCB0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmJlYXR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImZvcnplblwiKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLnNob290QXVkaW8pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoKDEgLSB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCkgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fE1vdmVBbmltXCJcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuYm9zc1Nob290T25lRWdnKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIC8vIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1hdHRhY2stc3RhdGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyAgICAgLy/ov5vlhaXmlLvlh7vnirbmgIFcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgIC8vICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAvLyAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgLy8gICAgICAgICAvL+aZrumAmuaVjOS6uueahOaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgLy8gICAgIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwib3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucmVtb3ZlRW5lbXlJbkxpc3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q3RsLnB1c2hPbmVFbmVteURlYWREYXRhKG5ldyBEZWFkRW5lbXlPYmoodGhpcy5vYmplY3RUeXBlLCB0aGlzLmdldEN1cnJlbnRHb2xkQ291bnQoKSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVhZEF1ZGlvKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5kZWFkQXVkaW8pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5ldWxlckFuZ2xlcyA9IHYzKDAsIDM2MCAqIE1hdGgucmFuZG9tKCksIDApXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh2MygwLCAwLCAwKSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcyBcIiwgZGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmFkZEVuZW15QWRkR29sZEFuaW0odGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5zaG93QWRkR29sZEFuaW1FZmZlY3QodGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIuaSreaUvuenu+WKqOWKqOS9nFwiLCB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlXYWxrQXVkaW8oKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvc3NIZWFsdGhCYXIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gdGhpcy5ib3NzSGVhbHRoQmFyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLjA1LCAwLjk4LCAxLjA1KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMSwgMSwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgYmVBdHRhY2tBbmltTmFtZSA9IFwi6aqo5p62fEJlQXR0YWNrQW5pbVwiOyAvL+iiq+aUu+WHu+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdGF0ZUFuaW0gJiYgIXN0YXRlQW5pbS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGJlQXR0YWtjQ2xpY2sgPSBza2VsZXRlQW5pbS5jbGlwc1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLlxyXG4gICAgICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgICAgIC8vIFR3ZWVuLlxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUd1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5omT5q275LqGXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSwgdGhpcy5nZXRIZWFsdGhDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iiq+aJk+atu+S6hlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgcGxheVdhbGtBdWRpbygpIHtcclxuICAgICAgICBpZiAodGhpcy53YWxrQXVkaW8pe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy53YWxrQXVkaW8sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6Z+z5pWI5pKt5pS+5a6M5oiQXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVdhbGtBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZ2V0SXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvdmVyJyB8fCB0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICd0by1kZWFkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNDYW5Mb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50IDwgdGhpcy5iZUxvY2tlZE1heE51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB1blNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlDb2xvbnlDdGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUNvbG9ueUN0bC51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRNb3ZlUG9zKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVJbmRleCA8IHRoaXMuYmV6aWVyUGF0aExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSB0aGlzLmJlemllclBhdGhMaXN0W3RoaXMuY3VycmVudE1vdmVJbmRleF07XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8v56e75Yqo57uT5p2fXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBvdmVyXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMuY3VycmVudE1vdmVQb3MpLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGRpcyA9IGRpci5sZW5ndGgoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc1wiLCBkaXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkaXMgPiAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpci5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihkZWx0YVRpbWUpKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb3MgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmICh0aGlzLmhlYWx0aEJhciAmJiB0aGlzLmNhbWVyYU5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBsZXQgcG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmFOb2RlLmNvbnZlcnRUb1VJTm9kZSh0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLmhlYWx0aEJhci5wYXJlbnQsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgcG9zLnkgKz0gNTA7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy8gdGhpcy5oZWFsdGhCYXIuc2V0U2NhbGUodjMocG9zLnosIHBvcy56LCBwb3MueikpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheUJvc3NFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIHRoaXMuYm9zc0hlYWx0aEJhciA9IGZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2hvd0Jvc3NIZWFsdGhCYXIoKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUN0bCAmJiBpc1ZhbGlkKHRoaXMuZW5lbXlDdGwubm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5ub2RlLm9mZihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm9zc0hlYWx0aEJhcil7XHJcbiAgICAgICAgICAgIHRoaXMuYm9zc0hlYWx0aEJhci5wb3NpdGlvbiA9IHYzKDAsLTQwMCwwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0KTtcclxuICAgIH1cclxuICAgIGdldENvbG9ueUNvbUN0bCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUNvbG9ueUN0bDtcclxuICAgIH1cclxufVxyXG4iXX0=