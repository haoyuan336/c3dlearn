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
              _this9.currentHealthCount -= data.baseAttackNum; // if (this.bossHealthBar) {
              //     let progressBar = this.bossHealthBar.children[0];
              //     progressBar.getComponent(ProgressBarComponent).progress = this.currentHealthCount / this.healthCount;
              // }

              if (_this9.objectType.indexOf('Boss') > -1) {
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("update-boss-health-bar", _this9.currentHealthCount / _this9.healthCount);
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

            if (this.objectType.indexOf("Boss") > -1) {
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("hide-boss-health-bar");
            } // if (this.bossHealthBar) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJWZWMzIiwiVHdlZW4iLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlF1YXQiLCJTdGF0ZSIsIkJhc2VPYmplY3QiLCJCZXppZXJOIiwiR3JvdW5kTWFwQ3RsIiwiRmluZFBhdGhXaXRoQVN0YXJ0IiwiR2FtZUluc3RhbmNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlCYXNlIiwidHlwZSIsInBhdGhMaXN0Iiwic3RhdGUiLCJjdXJyZW50UGF0aEluZGV4IiwiYmVMb2NrZWRNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImN1cnJlbnRIZWFsdGhDb3VudCIsImVuZW15Q3RsTm9kZSIsImN1cnJlbnRNb3ZlVHciLCJncm91bmRNYXBDdGwiLCJiZUF0dGFja2VkQ2IiLCJiZXppZXJQYXRoTGlzdCIsImN1cnJlbnRCb25lQW5pbU5hbWUiLCJlbmVteUNvbG9ueUN0bCIsImJvc3NIZWFsdGhCYXIiLCJnYW1lQ29uZmlnIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJnZXRNb3ZlVHlwZSIsImluZGV4T2YiLCJub2RlIiwicG9zaXRpb24iLCJ4IiwieiIsImdldENvbXBvbmVudCIsIm9iamVjdFR5cGUiLCJCZUxvY2tlZENvdW50IiwiaGVhbHRoQ291bnQiLCJhbmdsZSIsImdldExvb2tBdEFuZ2xlIiwid29ybGRSb3RhdGlvbiIsInN0b3AiLCJza2VsZXRlQW5pbSIsInJvb3ROb2RlIiwiZ2V0U3RhdGUiLCJzcGVlZCIsInNjaGVkdWxlT25jZSIsImN1cnJlbnRTdGF0ZSIsImluZGV4IiwiZW5lbXRDdGwiLCJvbiIsImZvcnplblNlbGYiLCJiaW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5Iiwic2hvdyIsImNhbGwiLCJhY3RpdmUiLCJ0byIsInNjYWxlIiwic3RhcnRSdW4iLCJzdGFydCIsInNldFN0YXRlIiwibW92ZVR5cGUiLCJwcm9jZWVXYWxrTG9naWMiLCJnZXRJc0NvbG9ueSIsInByb2Nlc3NGbHlMb2dpYyIsImdldEluc3RhbmNlIiwiZ2V0R2FtZUN0bE5vZGUiLCJlbWl0IiwiZ2V0U2hvd0F1ZGlvIiwiZmx5SGVpZ2h0IiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJwb3NJbmRleExpc3QiLCJ5IiwiaSIsInB1c2giLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3NMaXN0IiwibGVuZ3RoIiwicG9zdjIiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwibm9kZVBvcyIsImJlemllciIsImVuZFBvc0xpc3QiLCJnZXRQb2ludExpc3QiLCJwcm9jZXNzTW92ZUFjdGlvbiIsImFuaW1MZW5ndGgiLCJzaG9vdE9uZUJvc3NCdWxsZXQiLCJ0aGVuIiwic3RhcnRQb3NSYW5kb21MaXN0IiwicmFuZG9tSW5kZXgiLCJzZXRUd0RhdGEiLCJ0aW1lIiwiZGlzIiwic3VidHJhY3QiLCJtb3ZlU3BlZWQiLCJyb3RhdGlvbkFuaW0iLCJ0YXJnZXRQb3MiLCJkaXIiLCJub3JtYWxpemUiLCJ0YXJnZXRRdWF0IiwiZnJvbVZpZXdVcCIsIlVQIiwicHJlUXVhdCIsImxlcnAiLCJsb29rQXQiLCJtYXBOb2RlTGlzdCIsIm9ic1Bvc0xpc3QiLCJnZXRPYnNQb3NMaXN0IiwicGF0aFRvb2wiLCJvYnNQb3NEYXRhTGlzdCIsIm9ic1BvcyIsInVwZGF0ZU9ic0RhdGEiLCJmaW5kUGF0aExpc3QiLCJwYXRoUG9zTGlzdCIsInNsaWNlIiwiZXF1YWxzIiwiY29uc29sZSIsImxvZyIsInRvQmVBdHRhY2siLCJwbGF5Iiwic3RhdGVBbmltIiwicmVwZWF0Q291bnQiLCJzaG9vdEF1ZGlvIiwiYW5pbVNwZWVkTXVsT2Zmc2V0IiwiZ2V0QmFzZUF0dGFja0RhbWFnZSIsInRhcmdldFBvaW50IiwicXVhdCIsInBhdXNlIiwiYWRkU3RhdGUiLCJkZXN0cm95IiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsImJ5IiwiZGVhZEF1ZGlvIiwiY2FpZGFpRWZmZWN0IiwiZXVsZXJBbmdsZXMiLCJnZXRDdXJyZW50R29sZENvdW50IiwicGxheVdhbGtBdWRpbyIsImRhdGEiLCJjYiIsImJhc2VBdHRhY2tOdW0iLCJnZXRVSUN0bE5vZGUiLCJiYXNlR2FzTnVtIiwiY3VycmVudEdhc051bSIsImdldEhlYWx0aENvdW50IiwicHJvZ3Jlc3MiLCJ3YWxrQXVkaW8iLCJ0b3dlciIsImRlbHRhVGltZSIsInVwZGF0ZSIsImNsaXBzIiwic2hvd0NsaXAiLCJ1bmRlZmluZWQiLCJjbGlwIiwibmFtZSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBOEJDLE1BQUFBLEUsT0FBQUEsRTtBQUFxQkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTBDQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7OztBQUN4T0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFHQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFFQUMsTUFBQUEsTyxrQkFBQUEsTzs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsa0IsNkJBQUFBLGtCOztBQUdBQyxNQUFBQSxZLG1CQUFBQSxZ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TyxDQVNSO0FBQ0E7QUFDQTtBQUNBOztBQUNIOzs7NENBQ2lCO0FBQ2QsbUJBQU8sS0FBS2xELGNBQVo7QUFDSDs7Ozs7Ozs7Ozs7aUJBN25CMkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuLCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIHYyLCBKc29uQXNzZXQsIGdhbWUsIGlzVmFsaWQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgYmV6aWVyLCBmaW5kLCBRdWF0LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgTW9kZWxDb21wb25lbnQsIEdhbWUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG4vLyBpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG4vLyBpbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgRmluZFBhdGhXaXRoQVN0YXJ0IH0gZnJvbSAnLi4vdXRpbC9GaW5kUGF0aFdpdGhBU3RhcnQnO1xyXG5pbXBvcnQgeyBFbmVteUNvbG9ueUNvbSB9IGZyb20gJy4vRW5lbXlDb2xvbnlDb20nO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lSW5zdGFuY2UgfSBmcm9tICcuLi9HYW1lSW5zdGFuY2UnO1xyXG4vLyBpbXBvcnQgeyBCZXNpemUgfSBmcm9tICcuLi91dGlsL0Jlc2l6ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIC8vIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZW5lbXlDdGw6IEVuZW15Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZW15Q3RsTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kTWFwQ3RsOiBHcm91bmRNYXBDdGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZUF0dGFja2VkQ2IgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmV6aWVyUGF0aExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50Qm9uZUFuaW1OYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgZW5lbXlDb2xvbnlDdGw6IEVuZW15Q29sb255Q29tID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudE1vdmVQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FpZGFpRWZmZWN0OiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBib3NzSGVhbHRoQmFyOiBOb2RlID0gbnVsbDsgLy9ib3Nz55qE6KGA5p2h44CCXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIHN0YXJ0UG9zOiBWZWMzLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1vdmVUeXBlKCkuaW5kZXhPZihcIkZseVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VuZE1hcEN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZztcclxuICAgICAgICAvLyB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRMb29rQXRBbmdsZSh0aGlzLm5vZGUucG9zaXRpb24sIGVuZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbnRlclNob3dCb3NzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250aXVlUGxheU1vdmVBbmltKCkge1xyXG4gICAgICAgIC8v57un57ut6KGM6LWwXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVUdykge1xyXG4gICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHNrZWxldGVBbmltLmdldFN0YXRlKHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5lbXlFbnRlckFuaW0oaW5kZXg6IG51bWJlciwgZW5lbXRDdGw6IE5vZGUsIHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmVuZW15Q3RsTm9kZSA9IGVuZW10Q3RsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLm9uKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYuYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXlDdGwubm9kZS5vbihcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIsIHRoaXMuY29udGl1ZVBsYXlNb3ZlQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC4xICogaW5kZXgpXHJcbiAgICAgICAgICAgIC8vIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICAgICAgLy8gdHcuc2V0KHsgc2NhbGU6IHYzKDAsIG1vdmVUeXBlLmluZGV4T2YoXCJGbHlcIikgPiAtMSA/IDEwIDogMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcuc2hvdygpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICAvLyBib3VuY2VPdXQgcXVhcnRJblxyXG4gICAgICAgICAgICAvLyB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSwgeyBlYXNpbmc6IFwiYm91bmNlT3V0XCIgfSlcclxuICAgICAgICAgICAgLy8gdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0pXHJcblxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc3RhcnRSdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSdW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0UnVuKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHBvcyBcIiwgc3RhcnRQb3MpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcblxyXG4gICAgICAgIGxldCBtb3ZlVHlwZSA9IHRoaXMuZ2V0TW92ZVR5cGUoKTtcclxuICAgICAgICBpZiAobW92ZVR5cGUgPT09IFwiV2Fsa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09ICdGbHknKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElzQ29sb255KCkpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+Q6KGM6ZuG576k57O757ufXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbGlzdCA9IHRoaXMuZW5lbXlDdGwuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBhdGhWZWMgPSBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDEwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMTAsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwgMTApLCBcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigyLCAxKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2Mig5LDEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDksOCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdjIoMiw4KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2MigzLDIpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYyKDcsMyksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoNyw3KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2MigzLDcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHYyKDQsNCksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdjIoMCwwKVxyXG4gICAgICAgICAgICAgICAgLy8gXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdGxQb3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoVmVjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY3RsUG9zLnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwYXRoVmVjW2ldLngsIHBhdGhWZWNbaV0ueSkucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WPluWHuuWIl+ihqOmHjOmdoiDnmoQg576k6ZuG5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q29sb255Q3RsID0gbmV3IEVuZW15Q29sb255Q29tKGxpc3QsIHRoaXMubm9kZSwgY3RsUG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0ZseUxvZ2ljKHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpIHtcclxuICAgICAgICAvL+WkhOeQhuaVjOS6uumjnuihjOeahOmAu+i+kVxyXG4gICAgICAgIC8vMemmluWFiOiuvue9ruS4gOadoeaVjOS6uumcgOimgemjnui/h+eahOaOp+WItueCuVxcXHJcbiAgICAgICAgLy8gbGV0IGVuZFBvaW50ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShlbmRQb3MueCwgZW5kUG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGVuZFBvaW50O1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuXHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KCdwbGF5LWF1ZGlvJywgdGhpcy5nZXRTaG93QXVkaW8oKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3nmoTmuLjmiI/nirbmgIHmmK9ydW4gLCDlpoLmnpzlvZPliY3nmoTnirbmgIHkuI3mmK/ov5DooYznirbmgIHvvIzpgqPkuYjpnIDopoHmiZPmlq3po57ooYznp7vliqhcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmx5SGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlpITnkIbpo57ooYznmoTpgLvovpFcIik7XHJcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgbGV0IHBvc0luZGV4TGlzdDogVmVjMltdID0gW3YyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBwb3NJbmRleExpc3QucHVzaCh2MihcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXBTaXplLnggLSAxKSksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zdjIgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdjJcIiwgcG9zdjIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUocG9zdjIueCwgcG9zdjIueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBwb3NMaXN0LnB1c2godjMobm9kZVBvcy54LCBmbHlIZWlnaHQsIG5vZGVQb3MueikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSB2Myhwb3N2Mi54LCAwLCBwb3N2Mi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIGxldCBlbmRQb3NMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCgyMDApO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBlbmRQb3NMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24oZW5kUG9zTGlzdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aSreaUvuaUu+WHu+aVjOS6uueahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxBdHRhY2tBbmltXCI7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgLy8gc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHNrZWxldGVBbmltLmdldFN0YXRlKFwi6aqo5p62fEF0dGFja0FuaW1cIikubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvb3RPbmVCb3NzQnVsbGV0LCBhbmltTGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnNob290T25lQm9zc0J1bGxldCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/lnKjpo57kuIDpgY1cclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1JhbmRvbUxpc3QgPSBbdjIoMCwgMCksIHYyKDAsIDEwKSwgdjIoMTAsIDApLCB2MigxMCwgMTApXVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHN0YXJ0UG9zUmFuZG9tTGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NGbHlMb2dpYyhzdGFydFBvc1JhbmRvbUxpc3RbcmFuZG9tSW5kZXhdLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcG9zXCIsIHN0YXJ0UG9zKTtcclxuICAgICAgICAvLyBwb3NJbmRleExpc3QucHVzaChlbmRQb3MpO1xyXG4gICAgICAgIC8vIGxldCBwb3NMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0luZGV4TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhQb3MgPSBwb3NJbmRleExpc3RbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKGluZGV4UG9zLngsIGluZGV4UG9zLnkpLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vICAgICBwb3NMaXN0LnB1c2godjMocG9zLngsIGZseUhlaWdodCwgcG9zLnopKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gcG9zTGlzdC5wdXNoKHYzKGVuZFBvcy54LCBmbHlIZWlnaHQsIGVuZFBvcy55KSk7XHJcbiAgICAgICAgLy8gLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKHBvc0xpc3QpO1xyXG4gICAgICAgIC8vIC8vIGxldCBwYXRoTGlzdCA9IGJlemllci5nZXRQb2ludExpc3QoMzApO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdyA9IHRoaXMucHJvY2Vzc01vdmVBY3Rpb24ocG9zTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adn1wiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIC8vIOmaj+acuuWHoOS4quaOp+WItueCuVxyXG5cclxuICAgIH1cclxuICAgIGdldE9uZVJhbmRvbU1hcFBvcygpOiBWZWMyIHtcclxuICAgICAgICAvL+S7juWcsOWbvumHjOmdoumaj+acuuS4gOS4queCuVxyXG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiB2MihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS54IC0gMSkpLCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFwU2l6ZS55IC0gMSkpKVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01vdmVBY3Rpb24ocGF0aExpc3Q6IFZlYzNbXSk6IFR3ZWVuIHtcclxuICAgICAgICAvL+WkhOeQhuenu+WKqOeahOWKqOS9nFxyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnN0IHNldFR3RGF0YSA9ICh0dywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHBhdGhMaXN0W2luZGV4XSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZGlzIC8gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuZ2V0TG9va0F0QW5nbGUodGhpcy5ub2RlLnBvc2l0aW9uLCBwYXRoTGlzdFtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2MyhwYXRoTGlzdFtpbmRleCAtIDFdKS5zdWJ0cmFjdChwYXRoTGlzdFtpbmRleF0pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSB0aGlzLmdldExvb2tBdEFuZ2xlKHBhdGhMaXN0W2luZGV4IC0gMV0sIHBhdGhMaXN0W2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZSA9IGRpcyAvIHRoaXMubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUubG9va0F0KHBhdGhMaXN0W2luZGV4XSlcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBhdGhMaXN0WzBdO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25BbmltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHBhdGhMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBRdWF0LmZyb21WaWV3VXAodGFyZ2V0UXVhdCwgZGlyLCBWZWMzLlVQKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVRdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgICAgIFF1YXQubGVycChwcmVRdWF0LCBuZXcgUXVhdCh0aGlzLm5vZGUud29ybGRSb3RhdGlvbiksIHRhcmdldFF1YXQsIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndvcmxkUm90YXRpb24gPSBwcmVRdWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmxvb2tBdChwYXRoTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZShyb3RhdGlvbkFuaW0sIDEgLyA2MCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKHRpbWUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXRoTGlzdFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAvLyB3b3JsZFJvdGF0aW9uOiBhbmdsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZShyb3RhdGlvbkFuaW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFR3RGF0YSh0dywgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcbiAgICBwcm9jZWVXYWxrTG9naWMoc3RhcnRQb3M6IFZlYzIsIGVuZFBvczogVmVjMikge1xyXG4gICAgICAgIC8v5aSE55CG6LWw6Lev55qE6YC76L6RXHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLmdldFNob3dBdWRpbygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFwTm9kZUxpc3QgPSB0aGlzLmdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBvYnNQb3NMaXN0ID0gdGhpcy5ncm91bmRNYXBDdGwuZ2V0T2JzUG9zTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoVG9vbCA9IG5ldyBGaW5kUGF0aFdpdGhBU3RhcnQobWFwTm9kZUxpc3QsIFtzdGFydFBvcy54LCBzdGFydFBvcy55XSwgW2VuZFBvcy54LCBlbmRQb3MueV0pO1xyXG4gICAgICAgIGxldCBvYnNQb3NEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzUG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2JzUG9zID0gb2JzUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgb2JzUG9zRGF0YUxpc3QucHVzaChbb2JzUG9zLngsIG9ic1Bvcy55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhdGhUb29sLnVwZGF0ZU9ic0RhdGEob2JzUG9zRGF0YUxpc3QpO1xyXG4gICAgICAgIGxldCBwYXRoTGlzdCA9IHBhdGhUb29sLmZpbmRQYXRoTGlzdCgpO1xyXG4gICAgICAgIGxldCBwYXRoUG9zTGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aExpc3RbaV07XHJcbiAgICAgICAgICAgIHBhdGhQb3NMaXN0LnB1c2godGhpcy5ncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZShwb3NbMF0sIHBvc1sxXSkucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyID0gbmV3IEJlemllck4ocGF0aFBvc0xpc3QpOyAvL+mAmui/h+iOt+WPluWIsOeahCDot6/lvoTngrnvvIzmnaXliLbkvZzkuIDmnaHotJ3loZ7lsJTmm7Lnur9cclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gYmV6aWVyLmdldFBvaW50TGlzdCg1MCk7IC8v6Lev5b6E5a+G5bqm5Li6MjBcclxuICAgICAgICB0aGlzLmJlemllclBhdGhMaXN0ID0gdGhpcy5iZXppZXJQYXRoTGlzdC5zbGljZSgwLCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCAtIDUpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24uZXF1YWxzKHRoaXMuYmV6aWVyUGF0aExpc3RbdGhpcy5iZXppZXJQYXRoTGlzdC5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3nlKjlho3otbDkuIDpgY3pgLvovpHkuoZcIilcclxuICAgICAgICAgICAgdGhpcy50b0JlQXR0YWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2NlZVdhbGtMb2dpYyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcgPSB0aGlzLnByb2Nlc3NNb3ZlQWN0aW9uKHRoaXMuYmV6aWVyUGF0aExpc3QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLWF0dGFjay1zdGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9CZUF0dGFjaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlV2Fsa0xvZ2ljKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUdy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICB9XHJcbiAgICB0b0JlQXR0YWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbUxlbmd0aCA9IHN0YXRlQW5pbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHN0YXRlQW5pbS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0ICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaZrumAmuaVjOS6uuWPkeWKqOaUu+WHu1wiLCB0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmJlYXR0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwiZW5lbXktdG8tYXR0YWNrZWRcIiwgdGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgoMSAtIHRoaXMuYW5pbVNwZWVkTXVsT2Zmc2V0KSAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgICAgICAvLyAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMb29rQXRBbmdsZShzdGFydFBvcywgdGFyZ2V0UG9pbnQ6IFZlYzMpOiBRdWF0IHtcclxuICAgICAgICAvLyAvL+iOt+WPluWIsOacneWQkeeahOinkuW6plxyXG5cclxuICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgcXVhdC5sZXJwXHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhdFwiLCBxdWF0KTtcclxuICAgICAgICAvLyByb3RhdGVBcm91bmRcclxuICAgICAgICAvLyBzdGFydFBvcy5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlL1xyXG5cclxuICAgICAgICByZXR1cm4gcXVhdFxyXG4gICAgfVxyXG4gICAgZm9yemVuU2VsZigpIHtcclxuICAgICAgICAvL+WGsOWGu+iHquW3sVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlVHcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImZvcnplblwiKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVBbmltID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVBbmltLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RPbmVCb3NzQnVsbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy5kZWxheSh0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5ib3NzU2hvb3RPbmVFZ2codGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLmVtaXQoXCJib3NzLXNob290LW9uZS1lZ2dcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgdGhpcy5zaG9vdEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KCgxIC0gdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQpICogYW5pbUxlbmd0aClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15Q3RsLmJvc3NTaG9vdE9uZUVnZyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItYXR0YWNrLXN0YXRlXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLnp7vliqjnu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgIC8v6L+b5YWl5pS75Ye754q25oCBXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSA9IFwi6aqo5p62fEF0dGFja0FuaW1cIjtcclxuICAgICAgICAvLyAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBza2VsZXRlQW5pbS5wbGF5KHRoaXMuY3VycmVudEJvbmVBbmltTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBhbmltTGVuZ3RoID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLmVuZW15QXR0YWNrZWQoKTsvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgIC8vICAgICAgICAgLy/mma7pgJrmlYzkurrnmoTmlLvlh7tcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwuZW5lbXlBdHRhY2tlZCgpOy8v5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XHJcblxyXG4gICAgICAgIC8vICAgICB9LCB0aGlzLmFuaW1TcGVlZE11bE9mZnNldCAqIGFuaW1MZW5ndGgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcIm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmVuZW15Q3RsLnJlbW92ZUVuZW15SW5MaXN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDdGxOb2RlLmVtaXQoXCJyZW1vdmUtZW5lbXktaW4tbGlzdFwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlDdGwucHVzaE9uZUVuZW15RGVhZERhdGEobmV3IERlYWRFbmVteU9iaih0aGlzLm9iamVjdFR5cGUsIHRoaXMuaGVhbHRoQ291bnQpKTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bE5vZGUuZW1pdChcInB1c2gtb25lLWVuZW15LWRlYWQtZGF0YVwiLCB0aGlzLm9iamVjdFR5cGUsIHRoaXMuaGVhbHRoQ291bnQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVR3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVhZEF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZGVhZEF1ZGlvKTtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQ3RsTm9kZSgpLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIHRoaXMuZGVhZEF1ZGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCAzNjAgKiBNYXRoLnJhbmRvbSgpLCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodjMoMCwgMCwgMCkpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXMgXCIsIGRpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUN0bC5hZGRFbmVteUFkZEdvbGRBbmltKHRoaXMuZ2V0Q3VycmVudEdvbGRDb3VudCgpLCB2Myh0aGlzLm5vZGUucG9zaXRpb24ueCwgMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopKTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInNob3ctYWRkLWdvbGQtYW5pbS1lZmZlY3RcIiwgdGhpcy5nZXRDdXJyZW50R29sZENvdW50KCksIHYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLCB0aGlzLm5vZGUucG9zaXRpb24ueikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvIDlp4vnp7vliqggXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHNrZWxldGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUgPSBcIumqqOaetnxNb3ZlQW5pbVwiXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9iamVjdFR5cGUgKyBcIuaSreaUvuenu+WKqOWKqOS9nFwiLCB0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0ZUFuaW0ucGxheSh0aGlzLmN1cnJlbnRCb25lQW5pbU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlXYWxrQXVkaW8oKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJlLWF0dGFja2VkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6KKr5pS75Ye7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5pS75Ye7XCIsIGF0dGFja051bSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IgPSBkYXRhLmNiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmJvc3NIZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBwcm9ncmVzc0JhciA9IHRoaXMuYm9zc0hlYWx0aEJhci5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgLy8gICAgIHByb2dyZXNzQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqZWN0VHlwZS5pbmRleE9mKCdCb3NzJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInVwZGF0ZS1ib3NzLWhlYWx0aC1iYXJcIiwgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFzZUdhc051bSA9IGRhdGEuYmFzZUdhc051bTsgLy/lj5blpITln7rnoYDmsJTlgLxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhc051bSArPSBiYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMDUsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiB2MygxLjA1LCAwLjk4LCAxLjA1KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjA1LCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMSwgMSwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgYmVBdHRhY2tBbmltTmFtZSA9IFwi6aqo5p62fEJlQXR0YWNrQW5pbVwiOyAvL+iiq+aUu+WHu+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyBsZXQgc2tlbGV0ZUFuaW0gPSB0aGlzLnJvb3ROb2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChza2VsZXRlQW5pbSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2tlbGV0ZUFuaW0ucGxheShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShiZUF0dGFja0FuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzdGF0ZUFuaW0gJiYgIXN0YXRlQW5pbS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbGVuZ3RoID0gc3RhdGVBbmltLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkodGhpcy5jdXJyZW50Qm9uZUFuaW1OYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGJlQXR0YWtjQ2xpY2sgPSBza2VsZXRlQW5pbS5jbGlwc1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHNjYWxlID0gMDtcclxuICAgICAgICAgICAgLy8gbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50R2FzTnVtIC8gdGhpcy5iYXNlR2FzTnVtO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlXCIsIHNjYWxlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50TW92ZVR3LnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLlxyXG4gICAgICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgICAgIC8vIFR3ZWVuLlxyXG4gICAgICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7IHNjYWxlOiB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKSB9KTtcclxuICAgICAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudE1vdmVUd1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlQXR0YWNrZWRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6KKr5omT5q275LqGXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZUF0dGFja2VkQ2IodHJ1ZSwgdGhpcy5nZXRIZWFsdGhDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iiq+aJk+atu+S6hlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5nZXRDb21wb25lbnQoUHJvZ3Jlc3NCYXJDb21wb25lbnQpLnByb2dyZXNzID0gdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgLyB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgcGxheVdhbGtBdWRpbygpIHtcclxuICAgICAgICBpZiAodGhpcy53YWxrQXVkaW8pIHtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwicGxheS1hdWRpb1wiLCB0aGlzLndhbGtBdWRpbywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLpn7PmlYjmkq3mlL7lrozmiJBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5V2Fsa0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGdldElzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3ZlcicgfHwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAndG8tZGVhZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldElzQ2FuTG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCA8IHRoaXMuYmVMb2NrZWRNYXhOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEJlTG9ja2VkKHRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50YmVMb2NrZWRDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgdW5TZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQtLTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Q29sb255Q3RsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDb2xvbnlDdGwudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy5jdXJyZW50TW92ZVBvcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlSW5kZXggPCB0aGlzLmJlemllclBhdGhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gdGhpcy5iZXppZXJQYXRoTGlzdFt0aGlzLmN1cnJlbnRNb3ZlSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL+enu+WKqOe7k+adn1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUgb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXIgPSB2Myh0aGlzLmN1cnJlbnRNb3ZlUG9zKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBkaXMgPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGlzID4gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZChkaXIubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoZGVsdGFUaW1lKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9zID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhTm9kZS5jb252ZXJ0VG9VSU5vZGUodGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5oZWFsdGhCYXIucGFyZW50LCBwb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5oZWFsdGhCYXIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICAvLyB0aGlzLmJvc3NIZWFsdGhCYXIgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSGVhbHRoQmFyKCk7XHJcblxyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWJvc3MtaGVhbHRoLWJhclwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxldGVBbmltID0gdGhpcy5yb290Tm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IHNrZWxldGVBbmltLmNsaXBzO1xyXG4gICAgICAgICAgICBsZXQgc2hvd0NsaXAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcC5uYW1lID09PSAnYm9zcy1zaG93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvd0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoJ2Jvc3Mtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHNob3dDbGlwLmxlbmd0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldGVBbmltLnBsYXkoXCLpqqjmnrZ8TW92ZUFuaW1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZignZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlJywgdGhpcy5lbnRlclNob3dCb3NzRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoJ2VudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltJywgdGhpcy5jb250aXVlUGxheU1vdmVBbmltLCB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5lbmVteUN0bE5vZGUgJiYgaXNWYWxpZCh0aGlzLmVuZW15Q3RsTm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUN0bE5vZGUub2ZmKFwiZnJvemVuLWFsbC1lbmVteVwiLCB0aGlzLmZvcnplblNlbGYsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vYmplY3RUeXBlLmluZGV4T2YoXCJCb3NzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcImhpZGUtYm9zcy1oZWFsdGgtYmFyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5ib3NzSGVhbHRoQmFyKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm9zc0hlYWx0aEJhci5wb3NpdGlvbiA9IHYzKDAsIC00MDAsIDApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG9vdE9uZUJvc3NCdWxsZXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sb255Q29tQ3RsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Q29sb255Q3RsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==