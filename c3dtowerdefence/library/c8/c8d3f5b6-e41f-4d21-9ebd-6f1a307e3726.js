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
              }), DeadEnemyObj) : DeadEnemyObj)(_this9.objectType, _this9.healthCount));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiQmFzZU9iamVjdCIsIkRlYWRFbmVteU9iaiIsIkJlemllck4iLCJHcm91bmRNYXBDdGwiLCJGaW5kUGF0aFdpdGhBU3RhcnQiLCJVSUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJ0eXBlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJjdXJyZW50SGVhbHRoQ291bnQiLCJlbmVteUN0bCIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImJvc3NIZWFsdGhCYXIiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJzdGFydFBvcyIsImVuZFBvcyIsImdldE1vdmVUeXBlIiwiaW5kZXhPZiIsIm5vZGUiLCJwb3NpdGlvbiIsIngiLCJ6IiwiZ2V0Q29tcG9uZW50Iiwib2JqZWN0VHlwZSIsIkJlTG9ja2VkQ291bnQiLCJoZWFsdGhDb3VudCIsImFuZ2xlIiwiZ2V0TG9va0F0QW5nbGUiLCJ3b3JsZFJvdGF0aW9uIiwic3RvcCIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRTdGF0ZSIsInNwZWVkIiwic2NoZWR1bGVPbmNlIiwiY3VycmVudFN0YXRlIiwiaW5kZXgiLCJlbmVtdEN0bCIsIm9uIiwiZm9yemVuU2VsZiIsImJpbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3IiwicG9zIiwiZGVsYXkiLCJzaG93IiwiY2FsbCIsImFjdGl2ZSIsInRvIiwic2NhbGUiLCJzdGFydFJ1biIsInN0YXJ0Iiwic2V0U3RhdGUiLCJtb3ZlVHlwZSIsInByb2NlZVdhbGtMb2dpYyIsImdldElzQ29sb255IiwicHJvY2Vzc0ZseUxvZ2ljIiwiZW1pdCIsImdldFNob3dBdWRpbyIsImZseUhlaWdodCIsIm1hcFNpemUiLCJnZXRNYXBTaXplIiwicG9zSW5kZXhMaXN0IiwieSIsImkiLCJwdXNoIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zTGlzdCIsImxlbmd0aCIsInBvc3YyIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIm5vZGVQb3MiLCJiZXppZXIiLCJlbmRQb3NMaXN0IiwiZ2V0UG9pbnRMaXN0IiwicHJvY2Vzc01vdmVBY3Rpb24iLCJhbmltTGVuZ3RoIiwic2hvb3RPbmVCb3NzQnVsbGV0IiwidGhlbiIsInN0YXJ0UG9zUmFuZG9tTGlzdCIsInJhbmRvbUluZGV4Iiwic2V0VHdEYXRhIiwidGltZSIsImRpcyIsInN1YnRyYWN0IiwibW92ZVNwZWVkIiwicm90YXRpb25BbmltIiwidGFyZ2V0UG9zIiwiZGlyIiwibm9ybWFsaXplIiwidGFyZ2V0UXVhdCIsImZyb21WaWV3VXAiLCJVUCIsInByZVF1YXQiLCJsZXJwIiwibG9va0F0IiwibWFwTm9kZUxpc3QiLCJvYnNQb3NMaXN0IiwiZ2V0T2JzUG9zTGlzdCIsInBhdGhUb29sIiwib2JzUG9zRGF0YUxpc3QiLCJvYnNQb3MiLCJ1cGRhdGVPYnNEYXRhIiwiZmluZFBhdGhMaXN0IiwicGF0aFBvc0xpc3QiLCJzbGljZSIsImVxdWFscyIsImNvbnNvbGUiLCJsb2ciLCJ0b0JlQXR0YWNrIiwicGxheSIsInN0YXRlQW5pbSIsInJlcGVhdENvdW50Iiwic2hvb3RBdWRpbyIsImFuaW1TcGVlZE11bE9mZnNldCIsImdldEJhc2VBdHRhY2tEYW1hZ2UiLCJlbmVteUF0dGFja2VkIiwidGFyZ2V0UG9pbnQiLCJxdWF0IiwicGF1c2UiLCJib3NzU2hvb3RPbmVFZ2ciLCJhZGRTdGF0ZSIsInJlbW92ZUVuZW15SW5MaXN0IiwiZGVzdHJveSIsInB1c2hPbmVFbmVteURlYWREYXRhIiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsImJ5IiwiZGVhZEF1ZGlvIiwiY2FpZGFpRWZmZWN0IiwiZXVsZXJBbmdsZXMiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJnZXRDdXJyZW50R29sZENvdW50IiwicGxheVdhbGtBdWRpbyIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJwcm9ncmVzc0JhciIsImNoaWxkcmVuIiwicHJvZ3Jlc3MiLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsImdldEhlYWx0aENvdW50Iiwid2Fsa0F1ZGlvIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJ1cGRhdGUiLCJzaG93Qm9zc0hlYWx0aEJhciIsImNsaXBzIiwic2hvd0NsaXAiLCJ1bmRlZmluZWQiLCJjbGlwIiwibmFtZSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLEssT0FBQUEsSztBQUE4QkMsTUFBQUEsRSxPQUFBQSxFO0FBQXFCQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBMENDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTZEQyxNQUFBQSxJLE9BQUFB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LFVBQWhELEVBQTRELElBQTVEO0FBQ0g7O0FBQ0QsZ0JBQUksS0FBSzVCLGFBQVQsRUFBdUI7QUFDbkIsbUJBQUtBLGFBQUwsQ0FBbUJRLFFBQW5CLEdBQThCOUMsRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFDLEdBQUosRUFBUSxDQUFSLENBQWhDO0FBQ0gsYUFSTyxDQVNSOztBQUNIOzs7NENBQ2lCO0FBQ2QsbUJBQU8sS0FBS3FDLGNBQVo7QUFDSDs7Ozs7Ozs7Ozs7aUJBaG5CMkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuLCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIHYyLCBKc29uQXNzZXQsIGdhbWUsIGlzVmFsaWQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgYmV6aWVyLCBmaW5kLCBRdWF0LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgTW9kZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmosIEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuLi91dGlsL0Jlemllck4nO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBGaW5kUGF0aFdpdGhBU3RhcnQgfSBmcm9tICcuLi91dGlsL0ZpbmRQYXRoV2l0aEFTdGFydCc7XHJcbmltcG9ydCB7IEVuZW15Q29sb255Q29tIH0gZnJvbSAnLi9FbmVteUNvbG9ueUNvbSc7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4uL1VJL1VJQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEJlc2l6ZSB9IGZyb20gJy4uL3V0aWwvQmVzaXplJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuQGNjY2xhc3MoJ0VuZW15QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHB1YmxpYyBwYXRoTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwdWJsaWMgY3VycmVudFBhdGhJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHB1YmxpYyBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGJlTG9ja2VkTWF4TnVtOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5lbmVteUJlTG9ja01heE51bTtcclxuICAgIHB1YmxpYyBjdXJyZW50YmVMb2NrZWRDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhCYXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSBudWxsO1xyXG4gICAgLy8gcHVibGljIGhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGN1cnJlbnRIZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgc3RhcnRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbmVteUN0bDogRW5lbXlDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudE1vdmVUdzogVHdlZW4gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBncm91bmRNYXBDdGw6IEdyb3VuZE1hcEN0bCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJlQXR0YWNrZWRDYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBiZXppZXJQYXRoTGlzdDogVmVjM1tdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBlbmVteUNvbG9ueUN0bDogRW5lbXlDb2xvbnlDb20gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TW92ZVBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYWlkYWlFZmZlY3Q6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGJvc3NIZWFsdGhCYXI6IE5vZGUgPSBudWxsOyAvL2Jvc3PnmoTooYDmnaHjgIJcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBzdGFydFBvczogVmVjMywgZW5kUG9zOiBWZWMzKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TW92ZVR5cGUoKS5pbmRleE9mKFwiRmx5XCIpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uLngsIDEwLCB0aGlzLm5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JvdW5kTWFwQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIC8vIHRoaXMuaGVhbHRoQ291bnQgPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uSGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5iZUxvY2tlZE1heE51bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CZUxvY2tlZENvdW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgZW5kUG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IGFuZ2xlO1xyXG5cclxuICAgIH1cclxuICAgIGVudGVyU2hvd0Jvc3NFbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRpdWVQbGF5TW92ZUFuaW0oKSB7XHJcbiAgICAgICAgLy/nu6fnu63ooYzotbBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgc3RhdGUuc3BlZWQgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnNwZWVkID0gMTtcclxuICAgICAgICAgICAgfSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dFbmVteUVudGVyQW5pbShpbmRleDogbnVtYmVyLCBlbmVtdEN0bDogRW5lbXlDb250cm9sbGVyLCBzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5lbmVteUN0bCA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLmJpbmQodGhpcyksIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLm5vZGUub24oJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLm5vZGUub24oXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiLCB0aGlzLmNvbnRpdWVQbGF5TW92ZUFuaW0sIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuMSAqIGluZGV4KVxyXG4gICAgICAgICAgICAvLyBsZXQgbW92ZVR5cGUgPSB0aGlzLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgICAgIC8vIHR3LnNldCh7IHNjYWxlOiB2MygwLCBtb3ZlVHlwZS5pbmRleE9mKFwiRmx5XCIpID4gLTEgPyAxMCA6IDAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LnNob3coKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5nZXRTaG93QXVkaW8oKSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgLy8gYm91bmNlT3V0IHF1YXJ0SW5cclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9KVxyXG5cclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnN0YXJ0UnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UnVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydFJ1bihzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBwb3MgXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG5cclxuICAgICAgICBsZXQgbW92ZVR5cGUgPSB0aGlzLmdldE1vdmVUeXBlKCk7XHJcbiAgICAgICAgaWYgKG1vdmVUeXBlID09PSBcIldhbGtcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vdmVUeXBlID09PSAnRmx5Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJc0NvbG9ueSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+i/kOihjOmbhue+pOezu+e7n1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGxpc3QgPSB0aGlzLmVuZW15Q3RsLmdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMTAsIHRoaXMubm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBwYXRoVmVjID0gW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsIDApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigxMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAxMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMiwgMSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoOSwxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDIsOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMywyKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig3LDMpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsNyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2Mig0LDQpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDAsMClcclxuICAgICAgICAgICAgICAgIC8vIF07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY3RsUG9zID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyAvLyB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKClcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFZlYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGN0bFBvcy5wdXNoKHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocGF0aFZlY1tpXS54LCBwYXRoVmVjW2ldLnkpLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gLy/lj5blh7rliJfooajph4zpnaIg55qEIOe+pOmbhuaVjOS6ulxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUNvbG9ueUN0bCA9IG5ldyBFbmVteUNvbG9ueUNvbShsaXN0LCB0aGlzLm5vZGUsIGN0bFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NGbHlMb2dpYyhzdGFydFBvcywgZW5kUG9zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NGbHlMb2dpYyhzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKSB7XHJcbiAgICAgICAgLy/lpITnkIbmlYzkurrpo57ooYznmoTpgLvovpFcclxuICAgICAgICAvLzHpppblhYjorr7nva7kuIDmnaHmlYzkurrpnIDopoHpo57ov4fnmoTmjqfliLbngrlcXFxyXG4gICAgICAgIC8vIGxldCBlbmRQb2ludCA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoZW5kUG9zLngsIGVuZFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb2ludDtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5nZXRTaG93QXVkaW8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIC8v5b2T5YmN55qE5ri45oiP54q25oCB5pivcnVuICwg5aaC5p6c5b2T5YmN55qE54q25oCB5LiN5piv6L+Q6KGM54q25oCB77yM6YKj5LmI6ZyA6KaB5omT5pat6aOe6KGM56e75YqoXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZseUhlaWdodCA9IDEwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aSE55CG6aOe6KGM55qE6YC76L6RXCIpO1xyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIGxldCBwb3NJbmRleExpc3Q6IFZlYzJbXSA9IFt2MihzdGFydFBvcy54LCBzdGFydFBvcy55KV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2godjIoXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueSAtIDEpKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc3YyID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc3YyXCIsIHBvc3YyKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKHBvc3YyLngsIHBvc3YyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zTGlzdC5wdXNoKHYzKG5vZGVQb3MueCwgZmx5SGVpZ2h0LCBub2RlUG9zLnopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gdjMocG9zdjIueCwgMCwgcG9zdjIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICBsZXQgZW5kUG9zTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMjAwKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gZW5kUG9zTGlzdFswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKGVuZFBvc0xpc3QpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mkq3mlL7mlLvlh7vmlYzkurrnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShcIumqqOaetnxBdHRhY2tBbmltXCIpLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCwgYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5Zyo6aOe5LiA6YGNXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NSYW5kb21MaXN0ID0gW3YyKDAsIDApLCB2MigwLCAxMCksIHYyKDEwLCAwKSwgdjIoMTAsIDEwKV1cclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChzdGFydFBvc1JhbmRvbUxpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmx5TG9naWMoc3RhcnRQb3NSYW5kb21MaXN0W3JhbmRvbUluZGV4XSwgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHBvc1wiLCBzdGFydFBvcyk7XHJcbiAgICAgICAgLy8gcG9zSW5kZXhMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICAvLyBsZXQgcG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NJbmRleExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGluZGV4UG9zID0gcG9zSW5kZXhMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgcG9zID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShpbmRleFBvcy54LCBpbmRleFBvcy55KS5wb3NpdGlvbjtcclxuICAgICAgICAvLyAgICAgcG9zTGlzdC5wdXNoKHYzKHBvcy54LCBmbHlIZWlnaHQsIHBvcy56KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHBvc0xpc3QucHVzaCh2MyhlbmRQb3MueCwgZmx5SGVpZ2h0LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIC8vIC8vIHBvc0xpc3QucHVzaCh2MyhlbmRQb3MueCwgZmx5SGVpZ2h0LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIC8vIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihwb3NMaXN0KTtcclxuICAgICAgICAvLyAvLyBsZXQgcGF0aExpc3QgPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDMwKTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RhcnQoKTtcclxuICAgICAgICAvLyDpmo/mnLrlh6DkuKrmjqfliLbngrlcclxuXHJcbiAgICB9XHJcbiAgICBnZXRPbmVSYW5kb21NYXBQb3MoKTogVmVjMiB7XHJcbiAgICAgICAgLy/ku47lnLDlm77ph4zpnaLpmo/mnLrkuIDkuKrngrlcclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcFNpemUoKTtcclxuICAgICAgICByZXR1cm4gdjIoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueCAtIDEpKSwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1hcFNpemUueSAtIDEpKSlcclxuICAgIH1cclxuICAgIHByb2Nlc3NNb3ZlQWN0aW9uKHBhdGhMaXN0OiBWZWMzW10pOiBUd2VlbiB7XHJcbiAgICAgICAgLy/lpITnkIbnp7vliqjnmoTliqjkvZxcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICBjb25zdCBzZXRUd0RhdGEgPSAodHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHRoaXMubm9kZS5wb3NpdGlvbiwgcGF0aExpc3RbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjMocGF0aExpc3RbaW5kZXggLSAxXSkuc3VidHJhY3QocGF0aExpc3RbaW5kZXhdKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZShwYXRoTGlzdFtpbmRleCAtIDFdLCBwYXRoTGlzdFtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWUgPSBkaXMgLyB0aGlzLm1vdmVTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmxvb2tBdChwYXRoTGlzdFtpbmRleF0pXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBwYXRoTGlzdFswXTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uQW5pbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBwYXRoTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0YXJnZXRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgUXVhdC5mcm9tVmlld1VwKHRhcmdldFF1YXQsIGRpciwgVmVjMy5VUCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlUXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBRdWF0LmxlcnAocHJlUXVhdCwgbmV3IFF1YXQodGhpcy5ub2RlLndvcmxkUm90YXRpb24pLCB0YXJnZXRRdWF0LCAwLjE1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53b3JsZFJvdGF0aW9uID0gcHJlUXVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5sb29rQXQocGF0aExpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUocm90YXRpb25BbmltLCAxIC8gNjApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50byh0aW1lLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcGF0aExpc3RbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgLy8gd29ybGRSb3RhdGlvbjogYW5nbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUocm90YXRpb25BbmltKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRUd0RhdGEodHcsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG4gICAgcHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhui1sOi3r+eahOmAu+i+kVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFwTm9kZUxpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBvYnNQb3NMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0T2JzUG9zTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoVG9vbCA9IG5ldyBGaW5kUGF0aFdpdGhBU3RhcnQobWFwTm9kZUxpc3QsIFtzdGFydFBvcy54LCBzdGFydFBvcy55XSwgW2VuZFBvcy54LCBlbmRQb3MueV0pO1xyXG4gICAgICAgIGxldCBvYnNQb3NEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzUG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2JzUG9zID0gb2JzUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgb2JzUG9zRGF0YUxpc3QucHVzaChbb2JzUG9zLngsIG9ic1Bvcy55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhdGhUb29sLnVwZGF0ZU9ic0RhdGEob2JzUG9zRGF0YUxpc3QpO1xyXG4gICAgICAgIGxldCBwYXRoTGlzdCA9IHBhdGhUb29sLmZpbmRQYXRoTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoUG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aExpc3RbaV07XHJcbiAgICAgICAgICAgIHBhdGhQb3NMaXN0LnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3NbMF0sIHBvc1sxXSkucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCg1MCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gdGhpcy5iZXppZXJQYXRoTGlzdC5zbGljZSgwLCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDUpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24uZXF1YWxzKHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3nlKjlho3otbDkuIDpgY3pgLvovpHkuoZcIilcclxuICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICB9XHJcbiAgICB0b0JlQXR0YWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHN0YXRlQW5pbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHN0YXRlQW5pbS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLnNob290QXVkaW8pO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcuZGVsYXkodGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pmu6YCa5pWM5Lq65Y+R5Yqo5pS75Ye7XCIsIHRoaXMuZ2V0QmFzZUF0dGFja0RhbWFnZSgpKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuYmVhdHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW5lbXlBdHRhY2tlZCh0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcbiAgICAgICAgICAgIC8vICAgICAvL+aZrumAmuaVjOS6uueahOaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuXHJcbiAgICAgICAgICAgIC8vIH0sIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldExvb2tBdEFuZ2xlKHN0YXJ0UG9zLCB0YXJnZXRQb2ludDogVmVjMyk6IFF1YXQge1xyXG4gICAgICAgIC8vIC8v6I635Y+W5Yiw5pyd5ZCR55qE6KeS5bqmXHJcblxyXG4gICAgICAgIGxldCBkaXIgPSB2MyhzdGFydFBvcykuc3VidHJhY3QodGFyZ2V0UG9pbnQpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICBxdWF0LmxlcnBcclxuICAgICAgICBRdWF0LmZyb21WaWV3VXAocXVhdCwgZGlyLCBWZWMzLlVQKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJxdWF0XCIsIHF1YXQpO1xyXG4gICAgICAgIC8vIHJvdGF0ZUFyb3VuZFxyXG4gICAgICAgIC8vIHN0YXJ0UG9zLlxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5yb3RhdGUvXHJcblxyXG4gICAgICAgIHJldHVybiBxdWF0XHJcbiAgICB9XHJcbiAgICBmb3J6ZW5TZWxmKCkge1xyXG4gICAgICAgIC8v5Yaw5Ya76Ieq5bexXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZm9yemVuXCIpO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZUFuaW0ucGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG9vdE9uZUJvc3NCdWxsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8QXR0YWNrQW5pbVwiO1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1MZW5ndGggPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuc2hvb3RBdWRpbyk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgLy8gfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fXCIpO1xyXG4gICAgICAgIC8vICAgICAvL+i/m+WFpeaUu+WHu+eKtuaAgVxyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgLy8gICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgIC8vICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5lbmVteUF0dGFja2VkKCk7Ly/mlYzkurrlj5HliqjkuobmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8v5pmu6YCa5pWM5Lq655qE5pS75Ye7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG5cclxuICAgICAgICAvLyAgICAgfSwgdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQgKiBhbmltTGVuZ3RoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bC5yZW1vdmVFbmVteUluTGlzdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwucHVzaE9uZUVuZW15RGVhZERhdGEobmV3IERlYWRFbmVteU9iaih0aGlzLm9iamVjdFR5cGUsIHRoaXMuaGVhbHRoQ291bnQpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYWRBdWRpbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZGVhZEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd0FkZEdvbGRBbmltRWZmZWN0KHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDEpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJ1blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byA5aeL56e75YqoIFxyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lID0gXCLpqqjmnrZ8TW92ZUFuaW1cIlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmplY3RUeXBlICsgXCLmkq3mlL7np7vliqjliqjkvZxcIiwgdGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGF5V2Fsa0F1ZGlvKCk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJiZS1hdHRhY2tlZFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiID0gZGF0YS5jYjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLT0gZGF0YS5iYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib3NzSGVhbHRoQmFyKXtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc0JhciA9IHRoaXMuYm9zc0hlYWx0aEJhci5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJhc2VHYXNOdW0gPSBkYXRhLmJhc2VHYXNOdW07IC8v5Y+W5aSE5Z+656GA5rCU5YC8XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gKz0gYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMS4wNSwgMC45OCwgMS4wNSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4wNSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHYzKDEsIDEsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGJlQXR0YWNrQW5pbU5hbWUgPSBcIumqqOaetnxCZUF0dGFja0FuaW1cIjsgLy/ooqvmlLvlh7vnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkoYmVBdHRhY2tBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoYmVBdHRhY2tBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoc3RhdGVBbmltICYmICFzdGF0ZUFuaW0uaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGxlbmd0aCA9IHN0YXRlQW5pbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBiZUF0dGFrY0NsaWNrID0gc2tlbGV0ZUFuaW0uY2xpcHNcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBzY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGxldCBzY2FsZSA9IHRoaXMuY3VycmVudEdhc051bSAvIHRoaXMuYmFzZUdhc051bTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5cclxuICAgICAgICAgICAgLy8gc3RvcFxyXG4gICAgICAgICAgICAvLyBUd2Vlbi5cclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoc2NhbGUsIHNjYWxlLCBzY2FsZSkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHdcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZUF0dGFja2VkQ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aJk+atu+S6hlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUsIHRoaXMuZ2V0SGVhbHRoQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ooqvmiZPmrbvkuoZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaGVhbHRoQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuICAgIH1cclxuICAgIHBsYXlXYWxrQXVkaW8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2Fsa0F1ZGlvKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMud2Fsa0F1ZGlvLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumfs+aViOaSreaUvuWujOaIkFwiLCB0aGlzLnN0YXRlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlXYWxrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGdldElzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3ZlcicgfHwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAndG8tZGVhZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQ2FuTG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCA8IHRoaXMuYmVMb2NrZWRNYXhOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgdW5TZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQtLTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Q29sb255Q3RsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDb2xvbnlDdGwudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy5jdXJyZW50TW92ZVBvcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlSW5kZXggPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gdGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmN1cnJlbnRNb3ZlSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL+enu+WKqOe7k+adn1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUgb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLmN1cnJlbnRNb3ZlUG9zKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXMgPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGlzID4gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZChkaXIubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoZGVsdGFUaW1lKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICB0aGlzLmJvc3NIZWFsdGhCYXIgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSGVhbHRoQmFyKCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgbGV0IHNob3dDbGlwID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ2Jvc3Mtc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3dDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KCdib3NzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzaG93Q2xpcC5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KFwi6aqo5p62fE1vdmVBbmltXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbScsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlDdGwgJiYgaXNWYWxpZCh0aGlzLmVuZW15Q3RsLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGwubm9kZS5vZmYoXCJmcm96ZW4tYWxsLWVuZW15XCIsIHRoaXMuZm9yemVuU2VsZiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvc3NIZWFsdGhCYXIpe1xyXG4gICAgICAgICAgICB0aGlzLmJvc3NIZWFsdGhCYXIucG9zaXRpb24gPSB2MygwLC00MDAsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb2xvbnlDb21DdGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlDb2xvbnlDdGw7XHJcbiAgICB9XHJcbn1cclxuIl19