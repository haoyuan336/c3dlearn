System.register(["cc", "code-quality:cr", "../util/State.js", "../BaseObject.js", "../util/BezierN.js", "../GroundMapCtl.js", "../util/FindPathWithAStart.js", "../GameInstance.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Vec3, Tween, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, find, Quat, State, BaseObject, BezierN, GroundMapCtl, FindPathWithAStart, GameInstance, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBase;

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

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./../BaseObject", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../GameInstance", _context.meta, extras);
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
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_utilFindPathWithAStartJs) {
      FindPathWithAStart = _utilFindPathWithAStartJs.FindPathWithAStart;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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
          _this.beLockedMaxNum = 10;
          _this.currentbeLockedCount = 0;
          _this.cameraNode = null;
          _this.healthBar = null;
          _this.gameConfigJson = null;
          _this.currentHealthCount = 0;
          _this.enemyCtlNode = null;
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
          value: function init(gameConfig, startPos, endPos) {
            _get(_getPrototypeOf(EnemyBase.prototype), "init", this).call(this, gameConfig);

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
            this.enemyCtlNode = enemtCtl;
            this.enemyCtlNode.on("frozen-all-enemy", this.forzenSelf.bind(this), this); // this.gameController = gameCtl;
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
            // this.gameController.node.emit("play-audio", this.getShowAudio());
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit('play-audio', this.getShowAudio());

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
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", this.getShowAudio());

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
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", _this7.shootAudio);
              var tw = new Tween(_this7.node);
              tw.delay(_this7.animSpeedMulOffset * animLength);
              tw.call(function () {
                console.log("普通敌人发动攻击", _this7.getBaseAttackDamage()); // this.enemyCtl.
                // this.gameController.getComponent(GameController).beatt
                // this.gameController.enemyAttacked(this.getBaseAttackDamage());

                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("enemy-to-attacked", _this7.getBaseAttackDamage());
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
                // this.enemyCtl.bossShootOneEgg(this.node);
                _this8.enemyCtlNode.emit("boss-shoot-one-egg", _this8.node);

                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", _this8.shootAudio);
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
              // this.enemyCtl.removeEnemyInList(this.node);
              _this9.enemyCtlNode.emit("remove-enemy-in-list", _this9.node);

              _this9.node.destroy();
            });
            this.state.addState("to-dead", function () {
              // this.enemyCtl.pushOneEnemyDeadData(new DeadEnemyObj(this.objectType, this.healthCount));
              _this9.enemyCtlNode.emit("push-one-enemy-dead-data", _this9.objectType, _this9.healthCount);

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
                  // this.gameController.node.emit("play-audio", this.deadAudio);
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", _this9.deadAudio);
                }

                _this9.node.position = v3(_this9.node.position.x, 0, _this9.node.position.z);
                _this9.rootNode.active = false;
                _this9.caidaiEffect.eulerAngles = v3(0, 360 * Math.random(), 0);
                var dis = v3(_this9.node.position).subtract(v3(0, 0, 0)).length(); // console.log("dis ", dis);

                if (dis < 18) {
                  _this9.caidaiEffect.active = true;
                } // this.enemyCtl.addEnemyAddGoldAnim(this.getCurrentGoldCount(), v3(this.node.position.x, 0, this.node.position.z));


                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("show-add-gold-anim-effect", _this9.getCurrentGoldCount(), v3(_this9.node.position.x, 0, _this9.node.position.z));
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
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", this.walkAudio, function () {
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
            // this.bossHealthBar = find("Canvas").getComponent(UIController).showBossHealthBar();
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("show-boss-health-bar");
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
            if (this.enemyCtlNode && isValid(this.enemyCtlNode)) {
              this.enemyCtlNode.off("frozen-all-enemy", this.forzenSelf, this);
            }

            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("hide-boss-health-bar"); // if (this.bossHealthBar) {
            //     this.bossHealthBar.position = v3(0, -400, 0);
            // }
            // this.unschedule(this.shootOneBossBullet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkJhc2VPYmplY3QiLCJCZXppZXJOIiwiR3JvdW5kTWFwQ3RsIiwiRmluZFBhdGhXaXRoQVN0YXJ0IiwiR2FtZUluc3RhbmNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlCYXNlIiwidHlwZSIsInBhdGhMaXN0Iiwic3RhdGUiLCJjdXJyZW50UGF0aEluZGV4IiwiYmVMb2NrZWRNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZW15Q3RsTm9kZSIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImJvc3NIZWFsdGhCYXIiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRNb3ZlVHlwZSIsImluZGV4T2YiLCJub2RlIiwicG9zaXRpb24iLCJ4IiwieiIsImdldENvbXBvbmVudCIsIm9iamVjdFR5cGUiLCJCZUxvY2tlZENvdW50IiwiaGVhbHRoQ291bnQiLCJhbmdsZSIsImdldExvb2tBdEFuZ2xlIiwid29ybGRSb3RhdGlvbiIsInN0b3AiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiZ2V0U3RhdGUiLCJzcGVlZCIsInNjaGVkdWxlT25jZSIsImN1cnJlbnRTdGF0ZSIsImluZGV4IiwiZW5lbXRDdGwiLCJvbiIsImZvcnplblNlbGYiLCJiaW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5Iiwic2hvdyIsImNhbGwiLCJhY3RpdmUiLCJ0byIsInNjYWxlIiwic3RhcnRSdW4iLCJzdGFydCIsInNldFN0YXRlIiwibW92ZVR5cGUiLCJwcm9jZWVXYWxrTG9naWMiLCJnZXRJc0NvbG9ueSIsInByb2Nlc3NGbHlMb2dpYyIsImdldEluc3RhbmNlIiwiZ2V0R2FtZUN0bE5vZGUiLCJlbWl0IiwiZ2V0U2hvd0F1ZGlvIiwiZmx5SGVpZ2h0IiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJwb3NJbmRleExpc3QiLCJ5IiwiaSIsInB1c2giLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3NMaXN0IiwibGVuZ3RoIiwicG9zdjIiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwibm9kZVBvcyIsImJlemllciIsImVuZFBvc0xpc3QiLCJnZXRQb2ludExpc3QiLCJwcm9jZXNzTW92ZUFjdGlvbiIsImFuaW1MZW5ndGgiLCJzaG9vdE9uZUJvc3NCdWxsZXQiLCJ0aGVuIiwic3RhcnRQb3NSYW5kb21MaXN0IiwicmFuZG9tSW5kZXgiLCJzZXRUd0RhdGEiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJyb3RhdGlvbkFuaW0iLCJ0YXJnZXRQb3MiLCJkaXIiLCJub3JtYWxpemUiLCJ0YXJnZXRRdWF0IiwiZnJvbVZpZXdVcCIsIlVQIiwicHJlUXVhdCIsImxlcnAiLCJsb29rQXQiLCJtYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJvYnNQb3NEYXRhTGlzdCIsIm9ic1BvcyIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsInNsaWNlIiwiZXF1YWxzIiwiY29uc29sZSIsImxvZyIsInRvQmVBdHRhY2siLCJwbGF5Iiwic3RhdGVBbmltIiwicmVwZWF0Q291bnQiLCJzaG9vdEF1ZGlvIiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiZ2V0QmFzZUF0dGFja0RhbWFnZSIsInRhcmdldFBvaW50IiwicXVhdCIsInBhdXNlIiwiYWRkU3RhdGUiLCJkZXN0cm95IiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsImJ5IiwiZGVhZEF1ZGlvIiwiY2FpZGFpRWZmZWN0IiwiZXVsZXJBbmdsZXMiLCJnZXRDdXJyZW50R29sZENvdW50IiwicGxheVdhbGtBdWRpbyIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJwcm9ncmVzc0JhciIsImNoaWxkcmVuIiwicHJvZ3Jlc3MiLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsImdldEhlYWx0aENvdW50Iiwid2Fsa0F1ZGlvIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJ1cGRhdGUiLCJnZXRVSUN0bE5vZGUiLCJjbGlwcyIsInNob3dDbGlwIiwidW5kZWZpbmVkIiwiY2xpcCIsIm5hbWUiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsSyxPQUFBQSxLO0FBQThCQyxNQUFBQSxFLE9BQUFBLEU7QUFBcUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxvQixPQUFBQSxvQjtBQUEwQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNkRDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDeE9DLE1BQUFBLEssZ0JBQUFBLEs7O0FBR0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBRUFDLE1BQUFBLE8sa0JBQUFBLE87O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLGtCLDZCQUFBQSxr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QUFDSDs7Ozs7Ozs7Ozs7aUJBeG5CMkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuLCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIHYyLCBKc29uQXNzZXQsIGdhbWUsIGlzVmFsaWQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgYmV6aWVyLCBmaW5kLCBRdWF0LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgTW9kZWxDb21wb25lbnQsIEdhbWUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG4vLyBpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG4vLyBpbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG5pbXBvcnQgeyBFbmVteUNvbG9ueUNvbSB9IGZyb20gJy4vRW5lbXlDb2xvbnlDb20nO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lSW5zdGFuY2UgfSBmcm9tICcuLi9HYW1lSW5zdGFuY2UnO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmV6aWVyUGF0aExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50Qm9uZUFuaW1OYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgZW5lbXlDb2xvbnlDdGw6IEVuZW15Q29sb255Q29tID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBib3NzSGVhbHRoQmFyOiBOb2RlID0gbnVsbDsgLy9ib3Nz55qE6KGA5p2h44CCXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIHN0YXJ0UG9zOiBWZWMzLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkuaW5kZXhPZihcIkZseVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICAvLyB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IE5vZGUsIHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsTm9kZSA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLm9uKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYuYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC4xICogaW5kZXgpXHJcbiAgICAgICAgICAgIC8vIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICAgICAgLy8gdHcuc2V0KHsgc2NhbGU6IHYzKDAsIG1vdmVUeXBlLmluZGV4T2YoXCJGbHlcIikgPiAtMSA/IDEwIDogMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcuc2hvdygpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICAvLyBib3VuY2VPdXQgcXVhcnRJblxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSwgeyBlYXNpbmc6IFwiYm91bmNlT3V0XCIgfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0pXHJcblxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSdW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0UnVuKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHBvcyBcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcblxyXG4gICAgICAgIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICBpZiAobW92ZVR5cGUgPT09IFwiV2Fsa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElzQ29sb255KCkpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+Q6KGM6ZuG576k57O757ufXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbGlzdCA9IHRoaXMuZW5lbXlDdGwuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBhdGhWZWMgPSBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigyLCAxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMiw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigzLDIpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsMyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigzLDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDQsNCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwwKVxyXG4gICAgICAgICAgICAgICAgLy8gXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdGxQb3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoVmVjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY3RsUG9zLnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwYXRoVmVjW2ldLngsIHBhdGhWZWNbaV0ueSkucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WPluWHuuWIl+ihqOmHjOmdoiDnmoQg576k6ZuG5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q29sb255Q3RsID0gbmV3IEVuZW15Q29sb255Q29tKGxpc3QsIHRoaXMubm9kZSwgY3RsUG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhuaVjOS6uumjnuihjOeahOmAu+i+kVxyXG4gICAgICAgIC8vMemmluWFiOiuvue9ruS4gOadoeaVjOS6uumcgOimgemjnui/h+eahOaOp+WItueCuVxcXHJcbiAgICAgICAgLy8gbGV0IGVuZFBvaW50ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShlbmRQb3MueCwgZW5kUG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvaW50O1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuXHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KCdwbGF5LWF1ZGlvJywgdGhpcy5nZXRTaG93QXVkaW8oKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3nmoTmuLjmiI/nirbmgIHmmK9ydW4gLCDlpoLmnpzlvZPliY3nmoTnirbmgIHkuI3mmK/ov5DooYznirbmgIHvvIzpgqPkuYjpnIDopoHmiZPmlq3po57ooYznp7vliqhcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmx5SGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlpITnkIbpo57ooYznmoTpgLvovpFcIik7XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgbGV0IHBvc0luZGV4TGlzdDogVmVjMltdID0gW3YyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBwb3NJbmRleExpc3QucHVzaCh2MihcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zdjIgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdjJcIiwgcG9zdjIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zdjIueCwgcG9zdjIueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBwb3NMaXN0LnB1c2godjMobm9kZVBvcy54LCBmbHlIZWlnaHQsIG5vZGVQb3MueikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSB2Myhwb3N2Mi54LCAwLCBwb3N2Mi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIGxldCBlbmRQb3NMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgyMDApO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb3NMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24oZW5kUG9zTGlzdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aSreaUvuaUu+WHu+aVjOS6uueahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgLy8gc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKFwi6aqo5p62fEF0dGFja0FuaW1cIikubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0LCBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnNob290T25lQm9zc0J1bGxldCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/lnKjpo57kuIDpgY1cclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1JhbmRvbUxpc3QgPSBbdjIoMCwgMCksIHYyKDAsIDEwKSwgdjIoMTAsIDApLCB2MigxMCwgMTApXVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHN0YXJ0UG9zUmFuZG9tTGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NGbHlMb2dpYyhzdGFydFBvc1JhbmRvbUxpc3RbcmFuZG9tSW5kZXhdLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICAvLyBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIC8vIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhQb3MgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKGluZGV4UG9zLngsIGluZGV4UG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vICAgICBwb3NMaXN0LnB1c2godjMocG9zLngsIGZseUhlaWdodCwgcG9zLnopKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIC8vIGxldCBwYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMzApO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIOmaj+acuuWHoOS4quaOp+WItueCuVxyXG5cclxuICAgIH1cclxuICAgIGdldE9uZVJhbmRvbU1hcFBvcygpOiBWZWMyIHtcclxuICAgICAgICAvL+S7juWcsOWbvumHjOmdoumaj+acuuS4gOS4queCuVxyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiB2MihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpKVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01vdmVBY3Rpb24ocGF0aExpc3Q6IFZlYzNbXSk6IFR3ZWVuIHtcclxuICAgICAgICAvL+WkhOeQhuenu+WKqOeahOWKqOS9nFxyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnN0IHNldFR3RGF0YSA9ICh0dywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCBwYXRoTGlzdFtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2MyhwYXRoTGlzdFtpbmRleCAtIDFdKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHBhdGhMaXN0W2luZGV4IC0gMV0sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUubG9va0F0KHBhdGhMaXN0W2luZGV4XSlcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBhdGhMaXN0WzBdO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25BbmltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHBhdGhMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBRdWF0LmZyb21WaWV3VXAodGFyZ2V0UXVhdCwgZGlyLCBWZWMzLlVQKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQubGVycChwcmVRdWF0LCBuZXcgUXVhdCh0aGlzLm5vZGUud29ybGRSb3RhdGlvbiksIHRhcmdldFF1YXQsIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBwcmVRdWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmxvb2tBdChwYXRoTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZShyb3RhdGlvbkFuaW0sIDEgLyA2MCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAvLyB3b3JsZFJvdGF0aW9uOiBhbmdsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZShyb3RhdGlvbkFuaW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFR3RGF0YSh0dywgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcbiAgICBwcm9jZWVXYWxrTG9naWMoc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8v5aSE55CG6LWw6Lev55qE6YC76L6RXHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFwTm9kZUxpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBvYnNQb3NMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0T2JzUG9zTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoVG9vbCA9IG5ldyBGaW5kUGF0aFdpdGhBU3RhcnQobWFwTm9kZUxpc3QsIFtzdGFydFBvcy54LCBzdGFydFBvcy55XSwgW2VuZFBvcy54LCBlbmRQb3MueV0pO1xyXG4gICAgICAgIGxldCBvYnNQb3NEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzUG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2JzUG9zID0gb2JzUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgb2JzUG9zRGF0YUxpc3QucHVzaChbb2JzUG9zLngsIG9ic1Bvcy55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhdGhUb29sLnVwZGF0ZU9ic0RhdGEob2JzUG9zRGF0YUxpc3QpO1xyXG4gICAgICAgIGxldCBwYXRoTGlzdCA9IHBhdGhUb29sLmZpbmRQYXRoTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoUG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aExpc3RbaV07XHJcbiAgICAgICAgICAgIHBhdGhQb3NMaXN0LnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3NbMF0sIHBvc1sxXSkucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCg1MCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gdGhpcy5iZXppZXJQYXRoTGlzdC5zbGljZSgwLCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDUpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24uZXF1YWxzKHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3nlKjlho3otbDkuIDpgY3pgLvovpHkuoZcIilcclxuICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICB9XHJcbiAgICB0b0JlQXR0YWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHN0YXRlQW5pbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHN0YXRlQW5pbS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaZrumAmuaVjOS6uuWPkeWKqOaUu+WHu1wiLCB0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmJlYXR0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwiZW5lbXktdG8tYXR0YWNrZWRcIiwgdGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImZvcnplblwiKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLmVtaXQoXCJib3NzLXNob290LW9uZS1lZ2dcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgIC8v6L+b5YWl5pS75Ye754q25oCBXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLmVtaXQoXCJyZW1vdmUtZW5lbXktaW4tbGlzdFwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwucHVzaE9uZUVuZW15RGVhZERhdGEobmV3IERlYWRFbmVteU9iaih0aGlzLm9iamVjdFR5cGUsIHRoaXMuaGVhbHRoQ291bnQpKTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bE5vZGUuZW1pdChcInB1c2gtb25lLWVuZW15LWRlYWQtZGF0YVwiLCB0aGlzLm9iamVjdFR5cGUsIHRoaXMuaGVhbHRoQ291bnQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVhZEF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZGVhZEF1ZGlvKTtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQ3RsTm9kZSgpLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZGVhZEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInNob3ctYWRkLWdvbGQtYW5pbS1lZmZlY3RcIiwgdGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIuaSreaUvuenu+WKqOWKqOS9nFwiLCB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlXYWxrQXVkaW8oKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvc3NIZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc0JhciA9IHRoaXMuYm9zc0hlYWx0aEJhci5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJhc2VHYXNOdW0gPSBkYXRhLmJhc2VHYXNOdW07IC8v5Y+W5aSE5Z+656GA5rCU5YC8XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYXNOdW0gKz0gYmFzZUdhc051bTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMS4wNSwgMC45OCwgMS4wNSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4wNSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHYzKDEsIDEsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGJlQXR0YWNrQW5pbU5hbWUgPSBcIumqqOaetnxCZUF0dGFja0FuaW1cIjsgLy/ooqvmlLvlh7vnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgLy8gICAgIHNrZWxldGVBbmltLnBsYXkoYmVBdHRhY2tBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoYmVBdHRhY2tBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoc3RhdGVBbmltICYmICFzdGF0ZUFuaW0uaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGxlbmd0aCA9IHN0YXRlQW5pbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBiZUF0dGFrY0NsaWNrID0gc2tlbGV0ZUFuaW0uY2xpcHNcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBzY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGxldCBzY2FsZSA9IHRoaXMuY3VycmVudEdhc051bSAvIHRoaXMuYmFzZUdhc051bTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdG9wKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5cclxuICAgICAgICAgICAgLy8gc3RvcFxyXG4gICAgICAgICAgICAvLyBUd2Vlbi5cclxuICAgICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoc2NhbGUsIHNjYWxlLCBzY2FsZSkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb3ZlVHdcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZUF0dGFja2VkQ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aJk+atu+S6hlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVBdHRhY2tlZENiKHRydWUsIHRoaXMuZ2V0SGVhbHRoQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ooqvmiZPmrbvkuoZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaGVhbHRoQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEhlYWx0aENvdW50IC8gdGhpcy5oZWFsdGhDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuICAgIH1cclxuICAgIHBsYXlXYWxrQXVkaW8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2Fsa0F1ZGlvKSB7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy53YWxrQXVkaW8sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6Z+z5pWI5pKt5pS+5a6M5oiQXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVdhbGtBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUNvbG9ueUN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sb255Q3RsLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMuY3VycmVudE1vdmVQb3MpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUluZGV4IDwgdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5jdXJyZW50TW92ZUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/np7vliqjnu5PmnZ9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlIG92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlyID0gdjModGhpcy5jdXJyZW50TW92ZVBvcykuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gZGlyLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzXCIsIGRpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRpcyA+IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdjModGhpcy5ub2RlLnBvc2l0aW9uKS5hZGQoZGlyLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGRlbHRhVGltZSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvcyA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGxldCBwb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWx0aEJhci5zZXRTY2FsZSh2Myhwb3MueiwgcG9zLnosIHBvcy56KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgLy8gdGhpcy5ib3NzSGVhbHRoQmFyID0gZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zaG93Qm9zc0hlYWx0aEJhcigpO1xyXG5cclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwic2hvdy1ib3NzLWhlYWx0aC1iYXJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBza2VsZXRlQW5pbS5jbGlwcztcclxuICAgICAgICAgICAgbGV0IHNob3dDbGlwID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGNsaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXAubmFtZSA9PT0gJ2Jvc3Mtc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3dDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KCdib3NzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzaG93Q2xpcC5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KFwi6aqo5p62fE1vdmVBbmltXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZScsIHRoaXMuZW50ZXJTaG93Qm9zc0VudGVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKCdlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbScsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlDdGxOb2RlICYmIGlzVmFsaWQodGhpcy5lbmVteUN0bE5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLm9mZihcImZyb3plbi1hbGwtZW5lbXlcIiwgdGhpcy5mb3J6ZW5TZWxmLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcImhpZGUtYm9zcy1oZWFsdGgtYmFyXCIpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmJvc3NIZWFsdGhCYXIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ib3NzSGVhbHRoQmFyLnBvc2l0aW9uID0gdjMoMCwgLTQwMCwgMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob290T25lQm9zc0J1bGxldCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb2xvbnlDb21DdGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlDb2xvbnlDdGw7XHJcbiAgICB9XHJcbn1cclxuIl19