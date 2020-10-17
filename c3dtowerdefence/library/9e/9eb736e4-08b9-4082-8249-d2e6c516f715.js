System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./GameController.js", "./Enemys/EnemyBullet.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, CameraComponent, find, isValid, State, EnemyBase, GroundMapCtl, GroundTiled, GameController, EnemyBullet, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, DeadEnemyObj, EnemyController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./Enemys/EnemyBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundMapCtl(extras) {
    _reporterNs.report("GroundMapCtl", "./GroundMapCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundTiled(extras) {
    _reporterNs.report("GroundTiled", "./GroundTiled/GroundTiled", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBullet(extras) {
    _reporterNs.report("EnemyBullet", "./Enemys/EnemyBullet", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Tween = _cc.Tween;
      CameraComponent = _cc.CameraComponent;
      find = _cc.find;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_GroundTiledGroundTiledJs) {
      GroundTiled = _GroundTiledGroundTiledJs.GroundTiled;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_EnemysEnemyBulletJs) {
      EnemyBullet = _EnemysEnemyBulletJs.EnemyBullet;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9eb73bkCLlAgoJJ0ubFFvcV", "EnemyController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DeadEnemyObj", DeadEnemyObj = //死去敌人的结构体
      // public enemyIconSpriteFrame = 0; //敌人的icon
      function DeadEnemyObj(type, dropGoldCount) {
        _classCallCheck(this, DeadEnemyObj);

        this.enemyType = "";
        this.dropGoldCount = 0;
        this.enemyType = type; //敌人的种类

        this.dropGoldCount = dropGoldCount; //敌人的掉落的金币数目 
      });

      ;

      _export("EnemyController", EnemyController = (_dec = ccclass('EnemyController'), _dec2 = property({
        type: JsonAsset
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(EnemyController, _Component);

        function EnemyController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameConfigRes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemysPrefabList", _descriptor2, _assertThisInitialized(_this));

          _this.gameConfig = null;
          _this.currentWaveIndex = 0;
          _this.waveData = null;
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.addEnemyDuraction = 1;
          _this.enemyNodeList = [];
          _this.currentRandomEnemyTypeList = [];

          _initializerDefineProperty(_this, "startPosNodeList", _descriptor3, _assertThisInitialized(_this));

          _this.endPos = null;

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bosssPrefabList", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyBulletPrefabList", _descriptor7, _assertThisInitialized(_this));

          _this.gameController = null;
          _this.allWaveAddOverCb = null;
          _this.allEnemyDeadCb = null;
          _this.boosIsLive = false;
          _this.currentLevelDeadEnemyDataList = [];
          _this.uiControllerNode = null;
          return _this;
        }

        _createClass(EnemyController, [{
          key: "onLoad",
          // @property({type: JsonAsset})
          // public GameLevelConfig: JsonAsset = null;
          value: function onLoad() {
            var _this2 = this;

            this.node.on("destroy-all-enemy", function (cb) {
              //删除当前的所有敌人
              var totalGold = 0;

              for (var i = 0; i < _this2.enemyNodeList.length; i++) {
                var node = _this2.enemyNodeList[i];
                totalGold += node.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase).getCurrentGoldCount();
                node.destroy();
              }

              _this2.enemyNodeList = [];

              if (cb) {
                cb(totalGold); //销毁的敌人的 持有的金币个数
              }
            });
            this.node.on("init-level-label", function () {
              _this2.node.emit("refer-current-wave-level", _this2.gameController.getCurrentLevelNum(), 0);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            this.uiControllerNode = find("Canvas"); // Your initialization goes here.

            this.gameConfig = this.gameConfigRes.json;
            this.gameController = this.node.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            this.endPos = v3(0, 0, 0); // this.state.addState("enter-next-wave", () => {
            //     // if (this.currentWaveIndex >= this.waveData['EnemyType'].length) {
            //     //     // this.state.setState("add-enemt-over");
            //     //     // this.state.setState("add-one-boss")
            //     //     // console.log("游戏结束");
            //     //     return;
            //     // }
            //     // this.currentRandomEnemyTypeList = this.waveData["EnemyType"][this.currentWaveIndex];
            //     // // this.addEnemyDuraction = this.waveData['AddEnemyDuraction'][this.currentWaveIndex];
            //     // this.node.emit("refer-current-wave-level", this.gameController.getCurrentLevelNum(), this.currentWaveIndex);
            //     // if (this.currentWaveIndex === this.waveData['EnemyType'].length - 1) {
            //     //     if (this.allWaveAddOverCb) {
            //     //         this.addOneBossEnemy().then(() => {
            //     //             // this.currentWaveIndex++;
            //     //             this.allWaveAddOverCb();
            //     //             // this.allWaveAddOverCb = null;
            //     //         });
            //     //     }
            //     // } else {
            //     //     this.addOneWaveEnemy().then(() => {
            //     //         console.log("一波敌人增加完成");
            //     //         this.currentWaveIndex++;
            //     //         this.scheduleOnce(() => {
            //     //             if (this.state.getState() === 'game-over') {
            //     //                 return;
            //     //             }
            //     //             this.state.setState("enter-next-wave");
            //     //         }, (this.currentWaveIndex === this.waveData['EnemyType'].length - 1) ? 5 : 2)
            //     //     });
            //     // }
            // })
            // this.node.on("player-click-game", () => {
            //     this.state.setState("enter-next-wave");
            // });

            this.schedule(function () {
              if (_this3.state.getState() === "start-add-enemy") {
                //开始增加敌人
                var currentWaveData = _this3.waveData['EnemyType'];

                _this3.node.emit("refer-current-wave-level", _this3.gameController.getCurrentLevelNum(), _this3.currentWaveIndex);

                if (_this3.currentWaveIndex <= currentWaveData.length - 2) {
                  var enemyTypeList = currentWaveData[_this3.currentWaveIndex];

                  _this3.addOneWaveEnemy(enemyTypeList);

                  _this3.currentWaveIndex++;
                } else if (_this3.currentWaveIndex === currentWaveData.length - 1) {
                  var _enemyTypeList = currentWaveData[_this3.currentWaveIndex];

                  _this3.addOneBossEnemy(_enemyTypeList);

                  _this3.currentWaveIndex++;
                } else {
                  console.log("敌人增加完毕");

                  _this3.state.setState("add-enemy-end");

                  Promise.all([new Promise(function (resolve, reject) {
                    _this3.allEnemyDeadCb = resolve;
                  })]).then(function () {
                    console.log("游戏胜利");

                    _this3.uiControllerNode.emit("show-end-dialog", _this3.gameController.getCurrentLevelNum(), function () {
                      _this3.gameController.gameWin(_this3.currentLevelDeadEnemyDataList);
                    });
                  });
                }
              }
            }, 4);
          }
        }, {
          key: "playBossEnterAnim",
          value: function playBossEnterAnim(bossNode) {
            var _this4 = this;

            //播放boss 的进场动画
            // find('Canvas').getComponent(UIController).showBossIconAnim();
            return new Promise(function (resolve, reject) {
              var enemyBase = bossNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase);

              if (enemyBase) {
                enemyBase.playBossEnterAnim().then(function () {
                  resolve();
                });
              } else {
                _this4.scheduleOnce(function () {
                  resolve();
                }, 1);
              }
            });
          }
        }, {
          key: "startGame",
          value: function startGame() {
            var _this5 = this;

            this.currentLevelDeadEnemyDataList = []; //在这里需要初始化一些游戏数据 

            this.currentWaveIndex = 0;
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()]; // this.waveData = this.GameLevelConfig.json['Level_' + this.gameController.getCurrentLevelNum()];

            this.uiControllerNode.emit("show-start-dialog", this.gameController.getCurrentLevelNum(), function () {
              // console.log("开始对话内容播放结束");
              // this.scheduleOnce(() => {
              //     this.state.setState("enter-next-wave");
              // }, 2.5)
              //开始点击 塔的基座的 引导操作
              _this5.uiControllerNode.emit("show-guide", function () {
                //开始点击 建造塔的 引导操作
                _this5.uiControllerNode.emit("show-guide", function () {
                  _this5.scheduleOnce(function () {
                    // this.state.setState("enter-next-wave");
                    _this5.state.setState("start-add-enemy"); //开始增加敌人

                  }, 2.5);
                });
              });
            }); // this.scheduleOnce(() => {
            // this.state.setState("enter-next-wave");
            // }, 3);

            Promise.all([new Promise(function (resolve, reject) {
              _this5.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {// this.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利");

              _this5.uiControllerNode.emit("show-end-dialog", _this5.gameController.getCurrentLevelNum(), function () {
                _this5.gameController.gameWin(_this5.currentLevelDeadEnemyDataList);
              });
            });
          }
        }, {
          key: "continueGame",
          value: function continueGame() {
            var _this6 = this;

            this.currentWaveIndex--;
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()]; // this.waveData = this.GameLevelConfig['Level_' + this.gameController.getCurrentLevelNum()];

            this.state.setState("start-add-enemy");
            Promise.all([new Promise(function (resolve, reject) {
              _this6.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this6.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利");

              _this6.gameController.gameWin(_this6.currentLevelDeadEnemyDataList);
            });
          }
        }, {
          key: "pushOneEnemyDeadData",
          value: function pushOneEnemyDeadData(enemyDeadData) {
            console.log("push one enemy dead data", enemyDeadData);
            this.currentLevelDeadEnemyDataList.push(enemyDeadData);
            this.gameController.playerData.activeEnemy(enemyDeadData.enemyType);
          }
        }, {
          key: "pauseGame",
          value: function pauseGame() {} //暂停游戏
          // Scheduler.
          // showCameraFocusBoosAnim(bossNode: Node) {
          //     return new Promise((resolve, reject) => {
          //         //进入boss 展示的状态
          //         // this.node.emit("enter-show-boss-enter-state");
          //         // let tw = new Tween()
          //         // this.cameraNode.lookAt(bossNode.position)
          //         let endPos = v3(bossNode.position).add(v3(5, 2, 5));
          //         let endEulerAngles = v3(this.cameraNode.eulerAngles).add(v3(35, 0, 0))
          //         // this.cameraNode.position = v3(bossNode.position.x + 10, bossNode.position.y + 7,bossNode.position.z + 10)
          //         // this.cameraNode.position = v3(this.cameraNode.position).add(addPos);
          //         // this.cameraNode.lookAt(bossNode.position);
          //         // let eulerAngles = this.cameraNode.eulerAngles;
          //         // let addAngleValue = 25;
          //         // this.cameraNode.eulerAngles = v3(eulerAngles.x + 25, eulerAngles.y, eulerAngles.z);
          //         // this.cameraNode.eulerAngles
          //         let tw = new Tween(this.cameraNode);
          //         tw.to(0.5, {
          //             position: endPos,
          //             eulerAngles: endEulerAngles,
          //             // orthoHeight: 60
          //         },
          //             {
          //                 easing: "backOut"
          //             })
          //         // this.cameraNode.getComponent(CameraComponent).orthoHeight = 5;\
          //         tw.call(() => {
          //             if (resolve) {
          //                 resolve();
          //             }
          //         })
          //         tw.start();
          //         new Tween(this.cameraNode.getComponent(CameraComponent)).to(0.5, { orthoHeight: 6 }).start();
          //     })
          // }

        }, {
          key: "showCameraBackAnim",
          value: function showCameraBackAnim() {
            var _this7 = this;

            //播放镜头返回的动画
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this7.cameraNode);
              tw.to(0.5, {
                position: v3(30, 42, 30),
                eulerAngles: v3(-45, 45, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
              new Tween(_this7.cameraNode.getComponent(CameraComponent)).to(0.5, {
                orthoHeight: 22
              }).start();
            });
          }
        }, {
          key: "addOneBossEnemy",
          value: function addOneBossEnemy(currentEnemyList) {
            var _this8 = this;

            console.log("增加一个boss");
            var indexList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getInEdageIndexList();
            var randomIndex = Math.round(Math.random() * (indexList.length - 1));
            var pos = indexList[randomIndex];
            var nodeMapList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getMapNodeList();
            var node = nodeMapList.getValue(pos.x, pos.y);
            var type = currentEnemyList[0]['type'];
            var enemyNode = instantiate(this.bosssPrefabList[type]); // console.log("enemy node", enemyNode)

            enemyNode.parent = this.node;
            enemyNode.position = v3(node.position.x, 0, node.position.z);
            enemyNode.active = false;
            enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
            // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
            // addEnemyCount++;

            this.enemyNodeList.push(enemyNode); // return new Promise((resolve, reject) => {
            //     resolve();
            //     // enemyNode.active = false;
            // }).then(() => {
            //     return this.playBossEnterAnim(enemyNode);
            // }).then(() => {
            //     //敌人继续播放行走动画
            //     this.node.emit("enter-continue-play-move-anim")
            // })

            return new Promise(function (resolve, reject) {
              return _this8.playBossEnterAnim(enemyNode).then(function () {
                _this8.node.emit("enter-continue-play-move-anim");

                enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase).showEnemyEnterAnim(1, _this8, pos, new Vec2(5, 5));
                resolve();
              });
            });
          }
        }, {
          key: "addOneWaveEnemy",
          value: function addOneWaveEnemy(enemyTypeList) {
            var _this9 = this;

            //增加一波敌人
            var promiseList = [];
            var indexList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getInEdageIndexList();
            var nodeMapList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getMapNodeList();
            var maxEnemyCount = 0;

            for (var i = 0; i < enemyTypeList.length; i++) {
              maxEnemyCount += enemyTypeList[i]['count'];
            }

            var typeList = [];

            for (var _i = 0; _i < enemyTypeList.length; _i++) {
              var waveData = enemyTypeList[_i];

              for (var _i2 = 0; _i2 < waveData['count']; _i2++) {
                typeList.push(waveData['type']);
              }
            }

            console.log("type list", typeList); // console.log("max enemy count", maxEnemyCount);
            // if (maxEnemyCount >= indexList.length) {
            //     console.error("数据错误");
            //     return;
            // }、

            var randomStartIndex = Math.round(Math.random() * indexList.length);

            if (this.currentWaveIndex === 0 && this.gameController.getCurrentLevelNum() === 0) {
              randomStartIndex = 0;
            }

            console.log("current wave", this.currentWaveIndex);
            console.log("current level", this.gameController.getCurrentLevelNum());

            var createOneEnemy = function createOneEnemy(index, type) {
              var startIndex = randomStartIndex + index;

              if (startIndex >= indexList.length) {
                startIndex -= indexList.length;
              }

              console.log("index list length", indexList.length);
              var indexV2 = indexList[startIndex];
              console.log("start index", startIndex);
              var node = nodeMapList.getValue(indexV2.x, indexV2.y); // this.scheduleOnce(() => {
              //     resolve();
              // }, 0.1 * index);

              if (isValid(node) && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                error: Error()
              }), GroundTiled) : GroundTiled)) {
                var groundTiled = node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                  error: Error()
                }), GroundTiled) : GroundTiled);

                if (groundTiled.getIsVoid()) {
                  var enemyNode = instantiate(_this9.enemysPrefabList[type]); // console.log("enemy node", enemyNode)

                  enemyNode.parent = _this9.node;
                  enemyNode.position = v3(node.position.x, 0, node.position.z);
                  enemyNode.active = false;
                  enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).init(_this9.gameConfig, _this9.gameController, node.position, _this9.endPos);

                  _this9.enemyNodeList.push(enemyNode);

                  promiseList.push(enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(index, _this9, indexV2, new Vec2(5, 5)));
                }
              } else {// promiseList.push(Promise.resolve())
              }
            };

            for (var _i3 = 0; _i3 < typeList.length; _i3++) {
              createOneEnemy(_i3, typeList[_i3]);
            } // while (addEnemyCount < maxEnemyCount) {
            //     // addEnemyCount ++;
            //     // console.log("random index", randomIndex);
            //     if (randomIndex >= indexList.length) {
            //         randomIndex = 0;
            //     }
            //     let indexV2 = indexList[randomIndex];
            //     let node = nodeMapList.getValue(indexV2.x, indexV2.y);
            //     if (node && node.getComponent(GroundTiled)) {
            //         let groundTiled = node.getComponent(GroundTiled);
            //         if (groundTiled.getIsVoid()) {
            //             // console.log("找到了一个空位置");
            //             // let currentEnemyType = this.currentRandomEnemyTypeList
            //             // let enemyNode = instantiate(this.enenm)
            //             let waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
            //             let type = waveData.type;
            //             let count = waveData.count;
            //             if (waveAddEnemyCount >= count) {
            //                 waveAddEnemyCount = 0;
            //                 enemyTypeIndex++;
            //             }
            //             let enemyNode = instantiate(this.enemysPrefabList[type]);
            //             // console.log("enemy node", enemyNode)
            //             enemyNode.parent = this.node;
            //             enemyNode.position = v3(node.position.x, 0, node.position.z);
            //             enemyNode.active = false;
            //             enemyNode.getComponent(EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos);
            //             // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
            //             promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, indexV2, new Vec2(5, 5)));
            //             addEnemyCount++;
            //             this.enemyNodeList.push(enemyNode);
            //             // console.log("增加一个敌人")
            //         }
            //         // randomIndex++
            //         randomIndex = Math.round(Math.random() * (indexList.length - 1));
            //     } else {
            //         addEnemyCount++;
            //     }
            // }


            return Promise.all(promiseList);
          }
        }, {
          key: "removeEnemyInList",
          value: function removeEnemyInList(node) {
            for (var i = 0; i < this.enemyNodeList.length; i++) {
              var enemy = this.enemyNodeList[i];

              if (enemy.uuid === node.uuid) {
                this.enemyNodeList.splice(i, 1);
              }
            } // if (this.enemyNodeList.length === 0 && this.currentWaveIndex == this.waveData['EnemyType'].length) {
            //     if (this.allEnemyDeadCb) {
            //         this.allEnemyDeadCb();
            //         this.allEnemyDeadCb = null;
            //     }
            // }


            if (this.enemyNodeList.length === 0) {
              if (this.allEnemyDeadCb) {
                this.allEnemyDeadCb();
                this.allEnemyDeadCb = null;
              }
            }
          }
        }, {
          key: "getCurrentEnemyNodeList",
          value: function getCurrentEnemyNodeList() {
            return this.enemyNodeList;
          }
        }, {
          key: "enemyAttacked",
          value: function enemyAttacked(num) {
            this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).enemyAttacked(num);
          }
        }, {
          key: "frozenAllEnemy",
          value: function frozenAllEnemy() {
            //冰冻所有敌人
            // for (let i = 0 ; i < this.enem){
            this.state.setState("game-over");
            this.node.emit("frozen-all-enemy"); // }
          }
        }, {
          key: "bossShootOneEgg",
          value: function bossShootOneEgg(enemyNode) {
            //boss 发射了一枚鸡蛋
            var enemyCom = enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase);

            if (enemyCom) {
              var bulletType = enemyCom.getEnemyBulletType(); // console.log("敌人的子弹类型是 ", bulletType);
              // 根据敌人的子弹类型，初始化一个子弹

              var node = instantiate(this.enemyBulletPrefabList[bulletType]);
              node.parent = this.node;
              node.position = enemyNode.position;
              node.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).init(this.gameController.getGameConfig().json, this.gameController, this.endPos);
            }
          }
        }, {
          key: "getDeadEnemyData",
          value: function getDeadEnemyData() {
            return this.currentLevelDeadEnemyDataList;
          }
        }]);

        return EnemyController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameConfigRes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemysPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startPosNodeList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bosssPrefabList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enemyBulletPrefabList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJ1bGxldCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJnYW1lQ29udHJvbGxlciIsImFsbFdhdmVBZGRPdmVyQ2IiLCJhbGxFbmVteURlYWRDYiIsImJvb3NJc0xpdmUiLCJjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCIsInVpQ29udHJvbGxlck5vZGUiLCJub2RlIiwib24iLCJjYiIsInRvdGFsR29sZCIsImkiLCJsZW5ndGgiLCJnZXRDb21wb25lbnQiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZGVzdHJveSIsImVtaXQiLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsInNjaGVkdWxlIiwiZ2V0U3RhdGUiLCJjdXJyZW50V2F2ZURhdGEiLCJlbmVteVR5cGVMaXN0IiwiYWRkT25lV2F2ZUVuZW15IiwiYWRkT25lQm9zc0VuZW15IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwiZ2FtZVdpbiIsImJvc3NOb2RlIiwiZW5lbXlCYXNlIiwicGxheUJvc3NFbnRlckFuaW0iLCJzY2hlZHVsZU9uY2UiLCJlbmVteURlYWREYXRhIiwicHVzaCIsInBsYXllckRhdGEiLCJhY3RpdmVFbmVteSIsInR3IiwiY2FtZXJhTm9kZSIsInRvIiwicG9zaXRpb24iLCJldWxlckFuZ2xlcyIsImNhbGwiLCJzdGFydCIsIm9ydGhvSGVpZ2h0IiwiY3VycmVudEVuZW15TGlzdCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvcyIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiZW5lbXlOb2RlIiwiYm9zc3NQcmVmYWJMaXN0IiwicGFyZW50IiwieiIsImFjdGl2ZSIsImluaXQiLCJzaG93RW5lbXlFbnRlckFuaW0iLCJwcm9taXNlTGlzdCIsIm1heEVuZW15Q291bnQiLCJ0eXBlTGlzdCIsInJhbmRvbVN0YXJ0SW5kZXgiLCJjcmVhdGVPbmVFbmVteSIsImluZGV4Iiwic3RhcnRJbmRleCIsImluZGV4VjIiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsImVuZW15c1ByZWZhYkxpc3QiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiLCJudW0iLCJlbmVteUF0dGFja2VkIiwiZW5lbXlDb20iLCJidWxsZXRUeXBlIiwiZ2V0RW5lbXlCdWxsZXRUeXBlIiwiZW5lbXlCdWxsZXRQcmVmYWJMaXN0IiwiZ2V0R2FtZUNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFB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LCBDb21wb25lbnQsIE5vZGUsIEpzb25Bc3NldCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzIsIFR3ZWVuLCByYW5kb20sIFZlYzMsIENhbWVyYUNvbXBvbmVudCwgZmluZCwgcHJvZmlsZXIsIGlzVmFsaWQsIFNjaGVkdWxlciB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBFbmVteUJ1bGxldCB9IGZyb20gJy4vRW5lbXlzL0VuZW15QnVsbGV0JztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBEZWFkRW5lbXlPYmoge1xyXG4gICAgLy/mrbvljrvmlYzkurrnmoTnu5PmnoTkvZNcclxuICAgIHB1YmxpYyBlbmVteVR5cGUgPSBcIlwiO1xyXG4gICAgcHVibGljIGRyb3BHb2xkQ291bnQgPSAwO1xyXG4gICAgLy8gcHVibGljIGVuZW15SWNvblNwcml0ZUZyYW1lID0gMDsgLy/mlYzkurrnmoRpY29uXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkcm9wR29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVuZW15VHlwZSA9IHR5cGU7IC8v5pWM5Lq655qE56eN57G7XHJcbiAgICAgICAgdGhpcy5kcm9wR29sZENvdW50ID0gZHJvcEdvbGRDb3VudDsgLy/mlYzkurrnmoTmjonokL3nmoTph5HluIHmlbDnm64gXHJcbiAgICB9XHJcbn07XHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYm9zc3NQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUJ1bGxldFByZWZhYkxpc3Q6IFByZWZhYltdID0gW107IC8v5pWM5Lq655qE5a2Q5by56aKE5Yi25L2T55qE5YiX6KGoXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7IC8v5omA5pyJ55qE5rOi5qyh55qE5pWM5Lq66YO95aKe5Yqg5a6M5q+V55qE5Zue6LCDXHJcbiAgICBwcml2YXRlIGFsbEVuZW15RGVhZENiID0gbnVsbDsgLy/miYDmnInnmoTmlYzkurrpg73mrbvkuobnmoTlm57osIMgXHJcbiAgICBwcml2YXRlIGJvb3NJc0xpdmUgPSBmYWxzZTsgLy9ib3Nz6L+Y5rS7552A77yfXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDogRGVhZEVuZW15T2JqW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTogSnNvbkFzc2V0fSlcclxuICAgIC8vIHB1YmxpYyBHYW1lTGV2ZWxDb25maWc6IEpzb25Bc3NldCA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGNiKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEdvbGQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICB0b3RhbEdvbGQgKz0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYih0b3RhbEdvbGQpOyAvL+mUgOavgeeahOaVjOS6uueahCDmjIHmnInnmoTph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXQtbGV2ZWwtbGFiZWxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlID0gZmluZChcIkNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnUmVzLmpzb247XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiLCAoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPj0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLW9uZS1ib3NzXCIpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAvLyAvLyB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAvLyBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBpZiAodGhpcy5hbGxXYXZlQWRkT3ZlckNiKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYigpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLkuIDms6LmlYzkurrlop7liqDlrozmiJBcIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtb3ZlcicpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIH0sICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpID8gNSA6IDIpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSBcInN0YXJ0LWFkZC1lbmVteVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+WinuWKoOaVjOS6ulxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRXYXZlRGF0YSA9IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPD0gY3VycmVudFdhdmVEYXRhLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlUeXBlTGlzdCA9IGN1cnJlbnRXYXZlRGF0YVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KGVuZW15VHlwZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSBjdXJyZW50V2F2ZURhdGEubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlUeXBlTGlzdCA9IGN1cnJlbnRXYXZlRGF0YVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lQm9zc0VuZW15KGVuZW15VHlwZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlYzkurrlop7liqDlrozmr5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVteS1lbmRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZW5kLWRpYWxvZ1wiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDQpXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJvc3NFbnRlckFuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgLy8gZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2hvd0Jvc3NJY29uQW5pbSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteUJhc2UgPSBib3NzTm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICAgICAgaWYgKGVuZW15QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlCYXNlLnBsYXlCb3NzRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIC8v5Zyo6L+Z6YeM6ZyA6KaB5Yid5aeL5YyW5LiA5Lqb5ri45oiP5pWw5o2uIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZURhdGEgPSB0aGlzLkdhbWVMZXZlbENvbmZpZy5qc29uWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LXN0YXJ0LWRpYWxvZ1wiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5byA5aeL5a+56K+d5YaF5a655pKt5pS+57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAvLyB9LCAyLjUpXHJcblxyXG4gICAgICAgICAgICAvL+W8gOWni+eCueWHuyDloZTnmoTln7rluqfnmoQg5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1ndWlkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+eCueWHuyDlu7rpgKDloZTnmoQg5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZ3VpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInN0YXJ0LWFkZC1lbmVteVwiKTsgLy/lvIDlp4vlop7liqDmlYzkurpcclxuICAgICAgICAgICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcblxyXG4gICAgICAgIC8vIH0sIDMpO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1lbmQtZGlhbG9nXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnRpbnVlR2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgtLTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcbiAgICAgICAgLy8gdGhpcy53YXZlRGF0YSA9IHRoaXMuR2FtZUxldmVsQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzdGFydC1hZGQtZW5lbXlcIik7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1c2hPbmVFbmVteURlYWREYXRhKGVuZW15RGVhZERhdGE6IERlYWRFbmVteU9iaikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVzaCBvbmUgZW5lbXkgZGVhZCBkYXRhXCIsIGVuZW15RGVhZERhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0LnB1c2goZW5lbXlEZWFkRGF0YSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFjdGl2ZUVuZW15KGVuZW15RGVhZERhdGEuZW5lbXlUeXBlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIC8v5pqC5YGc5ri45oiPXHJcbiAgICAgICAgLy8gU2NoZWR1bGVyLlxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2FtZXJhRm9jdXNCb29zQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8v6L+b5YWlYm9zcyDlsZXnpLrnmoTnirbmgIFcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGVcIik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2VlbigpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSB2Myhib3NzTm9kZS5wb3NpdGlvbikuYWRkKHYzKDUsIDIsIDUpKTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZEV1bGVyQW5nbGVzID0gdjModGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzKS5hZGQodjMoMzUsIDAsIDApKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myhib3NzTm9kZS5wb3NpdGlvbi54ICsgMTAsIGJvc3NOb2RlLnBvc2l0aW9uLnkgKyA3LGJvc3NOb2RlLnBvc2l0aW9uLnogKyAxMClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjModGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uKS5hZGQoYWRkUG9zKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBldWxlckFuZ2xlcyA9IHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcztcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGFkZEFuZ2xlVmFsdWUgPSAyNTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzID0gdjMoZXVsZXJBbmdsZXMueCArIDI1LCBldWxlckFuZ2xlcy55LCBldWxlckFuZ2xlcy56KTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzXHJcbiAgICAvLyAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgLy8gICAgICAgICB0dy50bygwLjUsIHtcclxuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBlbmRQb3MsXHJcbiAgICAvLyAgICAgICAgICAgICBldWxlckFuZ2xlczogZW5kRXVsZXJBbmdsZXMsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBvcnRob0hlaWdodDogNjBcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkub3J0aG9IZWlnaHQgPSA1O1xcXHJcbiAgICAvLyAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogNiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dDYW1lcmFCYWNrQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvumVnOWktOi/lOWbnueahOWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygzMCwgNDIsIDMwKSxcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygtNDUsIDQ1LCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiAyMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkT25lQm9zc0VuZW15KGN1cnJlbnRFbmVteUxpc3Q6IE9iamVjdFtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlop7liqDkuIDkuKpib3NzXCIpXHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUocG9zLngsIHBvcy55KTtcclxuICAgICAgICBsZXQgdHlwZSA9IGN1cnJlbnRFbmVteUxpc3RbMF1bJ3R5cGUnXTtcclxuICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5ib3Nzc1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAvLyBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMucGxheUJvc3NFbnRlckFuaW0oZW5lbXlOb2RlKTtcclxuICAgICAgICAvLyB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy/mlYzkurrnu6fnu63mkq3mlL7ooYzotbDliqjnlLtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUJvc3NFbnRlckFuaW0oZW5lbXlOb2RlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIik7XHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKDEsIHRoaXMsIHBvcywgbmV3IFZlYzIoNSwgNSkpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkT25lV2F2ZUVuZW15KGVuZW15VHlwZUxpc3Q6IE9iamVjdFtdKSB7XHJcbiAgICAgICAgLy/lop7liqDkuIDms6LmlYzkurpcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG1heEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXhFbmVteUNvdW50ICs9IGVuZW15VHlwZUxpc3RbaV1bJ2NvdW50J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0eXBlTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSBlbmVteVR5cGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdmVEYXRhWydjb3VudCddOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHR5cGVMaXN0LnB1c2god2F2ZURhdGFbJ3R5cGUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlIGxpc3RcIiwgdHlwZUxpc3QpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4IGVuZW15IGNvdW50XCIsIG1heEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vIGlmIChtYXhFbmVteUNvdW50ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIuaVsOaNrumUmeivr1wiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH3jgIFcclxuICAgICAgICBsZXQgcmFuZG9tU3RhcnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGluZGV4TGlzdC5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSAwICYmIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCkgPT09IDApIHtcclxuICAgICAgICAgICAgcmFuZG9tU3RhcnRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCB3YXZlXCIsIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IGxldmVsXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCkpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9uZUVuZW15ID0gKGluZGV4OiBudW1iZXIsIHR5cGU6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSByYW5kb21TdGFydEluZGV4ICsgaW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggLT0gaW5kZXhMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IGxpc3QgbGVuZ3RoXCIsIGluZGV4TGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtzdGFydEluZGV4XTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBpbmRleFwiLCBzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIC8vIH0sIDAuMSAqIGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQobm9kZSkgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGluZGV4LCB0aGlzLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZUxpc3QucHVzaChQcm9taXNlLnJlc29sdmUoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU9uZUVuZW15KGksIHR5cGVMaXN0W2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGlsZSAoYWRkRW5lbXlDb3VudCA8IG1heEVuZW15Q291bnQpIHtcclxuICAgICAgICAvLyAgICAgLy8gYWRkRW5lbXlDb3VudCArKztcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJyYW5kb20gaW5kZXhcIiwgcmFuZG9tSW5kZXgpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmFuZG9tSW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmFuZG9tSW5kZXggPSAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobkuIDkuKrnqbrkvY3nva5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRFbmVteVR5cGUgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbm0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtlbmVteVR5cGVJbmRleF07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHR5cGUgPSB3YXZlRGF0YS50eXBlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBjb3VudCA9IHdhdmVEYXRhLmNvdW50O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh3YXZlQWRkRW5lbXlDb3VudCA+PSBjb3VudCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVuZW15VHlwZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4quaVjOS6ulwiKVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcmFuZG9tSW5kZXgrK1xyXG4gICAgICAgIC8vICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRW5lbXlJbkxpc3Qobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGVuZW15LnV1aWQgPT09IG5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmFsbEVuZW15RGVhZENiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxFbmVteURlYWRDYikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgZW5lbXlBdHRhY2tlZChudW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5lbmVteUF0dGFja2VkKG51bSk7XHJcbiAgICB9XHJcbiAgICBmcm96ZW5BbGxFbmVteSgpIHtcclxuICAgICAgICAvL+WGsOWGu+aJgOacieaVjOS6ulxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuZW5lbSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImdhbWUtb3ZlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImZyb3plbi1hbGwtZW5lbXlcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGJvc3NTaG9vdE9uZUVnZyhlbmVteU5vZGU6IE5vZGUpIHtcclxuICAgICAgICAvL2Jvc3Mg5Y+R5bCE5LqG5LiA5p6a6bih6JuLXHJcbiAgICAgICAgbGV0IGVuZW15Q29tID0gZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgIGlmIChlbmVteUNvbSkge1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0VHlwZSA9IGVuZW15Q29tLmdldEVuZW15QnVsbGV0VHlwZSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaVjOS6uueahOWtkOW8ueexu+Wei+aYryBcIiwgYnVsbGV0VHlwZSk7XHJcbiAgICAgICAgICAgIC8vIOagueaNruaVjOS6uueahOWtkOW8ueexu+Wei++8jOWIneWni+WMluS4gOS4quWtkOW8uVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlCdWxsZXRQcmVmYWJMaXN0W2J1bGxldFR5cGVdKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBlbmVteU5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QnVsbGV0KS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb24sIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXREZWFkRW5lbXlEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==