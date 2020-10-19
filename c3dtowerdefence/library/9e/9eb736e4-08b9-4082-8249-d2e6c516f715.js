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
          _this.isAddedBoss = false;
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

                  _this3.addOneBossEnemy(_enemyTypeList).then(function () {
                    _this3.currentWaveIndex++;
                    return new Promise(function (resolve, reject) {
                      _this3.allEnemyDeadCb = resolve;
                    });
                  }).then(function () {
                    console.log("游戏胜利");

                    if (_this3.state.getState() !== "game-lose") {
                      _this3.state.setState("game-win");

                      _this3.uiControllerNode.emit("show-end-dialog", _this3.gameController.getCurrentLevelNum(), function () {
                        _this3.gameController.gameWin(_this3.currentLevelDeadEnemyDataList);
                      });
                    }
                  });

                  _this3.state.setState("add-boss-state"); //增加boss 的状态

                } else {
                  console.log("敌人增加完毕");

                  _this3.state.setState("add-enemy-end");
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
            // Promise.all([
            //     new Promise((resolve, reject) => {
            //         this.allWaveAddOverCb = resolve;
            //     }),
            //     new Promise((resolve, reject) => {
            //         // this.allEnemyDeadCb = resolve;
            //     })
            // ]).then(() => {
            //     console.log("游戏胜利");
            //     this.uiControllerNode.emit("show-end-dialog", this.gameController.getCurrentLevelNum(), () => {
            //         this.gameController.gameWin(this.currentLevelDeadEnemyDataList);
            //     })
            // })
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
          key: "gemeLose",
          value: function gemeLose() {
            //游戏失败了
            this.state.setState("game-lose");
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
            return new Promise(function (resolve, reject) {
              _this8.scheduleOnce(function () {
                if (_this8.state.getState() === 'game-lose') {
                  resolve();
                  return;
                }

                var indexList = _this8.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                  error: Error()
                }), GroundMapCtl) : GroundMapCtl).getInEdageIndexList();

                var randomIndex = Math.round(Math.random() * (indexList.length - 1));
                var pos = indexList[randomIndex];

                var nodeMapList = _this8.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                  error: Error()
                }), GroundMapCtl) : GroundMapCtl).getMapNodeList();

                var node = nodeMapList.getValue(pos.x, pos.y);
                var type = currentEnemyList[0]['type'];
                var enemyNode = instantiate(_this8.bosssPrefabList[type]); // console.log("enemy node", enemyNode)

                enemyNode.parent = _this8.node;
                enemyNode.position = v3(node.position.x, 0, node.position.z);
                enemyNode.active = false;
                enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase).init(_this8.gameConfig, _this8.gameController, node.position, _this8.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
                // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
                // addEnemyCount++;

                _this8.enemyNodeList.push(enemyNode);

                return _this8.playBossEnterAnim(enemyNode).then(function () {
                  _this8.node.emit("enter-continue-play-move-anim");

                  enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(1, _this8, pos, new Vec2(5, 5));
                  resolve();
                });
              }, 5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJ1bGxldCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJnYW1lQ29udHJvbGxlciIsImFsbFdhdmVBZGRPdmVyQ2IiLCJhbGxFbmVteURlYWRDYiIsImJvb3NJc0xpdmUiLCJjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCIsInVpQ29udHJvbGxlck5vZGUiLCJpc0FkZGVkQm9zcyIsIm5vZGUiLCJvbiIsImNiIiwidG90YWxHb2xkIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJkZXN0cm95IiwiZW1pdCIsImdldEN1cnJlbnRMZXZlbE51bSIsImdhbWVDb25maWdSZXMiLCJqc29uIiwic2NoZWR1bGUiLCJnZXRTdGF0ZSIsImN1cnJlbnRXYXZlRGF0YSIsImVuZW15VHlwZUxpc3QiLCJhZGRPbmVXYXZlRW5lbXkiLCJhZGRPbmVCb3NzRW5lbXkiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJnYW1lV2luIiwiYm9zc05vZGUiLCJlbmVteUJhc2UiLCJwbGF5Qm9zc0VudGVyQW5pbSIsInNjaGVkdWxlT25jZSIsImFsbCIsImVuZW15RGVhZERhdGEiLCJwdXNoIiwicGxheWVyRGF0YSIsImFjdGl2ZUVuZW15IiwidHciLCJjYW1lcmFOb2RlIiwidG8iLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiY2FsbCIsInN0YXJ0Iiwib3J0aG9IZWlnaHQiLCJjdXJyZW50RW5lbXlMaXN0IiwiaW5kZXhMaXN0IiwiZ2V0SW5FZGFnZUluZGV4TGlzdCIsInJhbmRvbUluZGV4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zIiwibm9kZU1hcExpc3QiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwieCIsInkiLCJlbmVteU5vZGUiLCJib3Nzc1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJ6IiwiYWN0aXZlIiwiaW5pdCIsInNob3dFbmVteUVudGVyQW5pbSIsInByb21pc2VMaXN0IiwibWF4RW5lbXlDb3VudCIsInR5cGVMaXN0IiwicmFuZG9tU3RhcnRJbmRleCIsImNyZWF0ZU9uZUVuZW15IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15IiwidXVpZCIsInNwbGljZSIsIm51bSIsImVuZW15QXR0YWNrZWQiLCJlbmVteUNvbSIsImJ1bGxldFR5cGUiLCJnZXRFbmVteUJ1bGxldFR5cGUiLCJlbmVteUJ1bGxldFByZWZhYkxpc3QiLCJnZXRHYW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSztBQUFxQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBZ0JDLE1BQUFBLE8sT0FBQUEsTzs7OztBQUM3SEMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsVyw2QkFBQUEsVzs7QUFHQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsVyx3QkFBQUEsVzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JsQixVLENBQXRCa0IsTztBQUFTQyxNQUFBQSxRLEdBQWFuQixVLENBQWJtQixROzs4QkFDSkMsWSxHQUNUO0FBR0E7QUFDQSw0QkFBWUMsSUFBWixFQUFrQkMsYUFBbEIsRUFBeUM7QUFBQTs7QUFBQSxhQUhsQ0MsU0FHa0MsR0FIdEIsRUFHc0I7QUFBQSxhQUZsQ0QsYUFFa0MsR0FGbEIsQ0FFa0I7QUFDckMsYUFBS0MsU0FBTCxHQUFpQkYsSUFBakIsQ0FEcUMsQ0FDZDs7QUFDdkIsYUFBS0MsYUFBTCxHQUFxQkEsYUFBckIsQ0FGcUMsQ0FFRDtBQUN2QyxPOztBQUNKOztpQ0FFWUUsZSxXQURaTixPQUFPLENBQUMsaUJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbEI7QUFBUixPQUFELEMsVUFHUmdCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVqQjtBQUFSLE9BQUQsQyxVQVlSZSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbkI7QUFBUixPQUFELEMsVUFNUmlCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVuQjtBQUFSLE9BQUQsQyxVQUdSaUIsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRW5CO0FBQVIsT0FBRCxDLFVBRVJpQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFakI7QUFBUixPQUFELEMsVUFJUmUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWpCO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkF4QkRxQixVLEdBQWlCLEk7Z0JBR2pCQyxnQixHQUEyQixDO2dCQUMzQkMsUSxHQUFlLEk7Z0JBQ2ZDLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ2ZDLGlCLEdBQTRCLEM7Z0JBQzVCQyxhLEdBQXdCLEU7Z0JBQ3hCQywwQixHQUE2QixFOzs7O2dCQUs5QkMsTSxHQUFlLEk7Ozs7Ozs7Ozs7Z0JBa0JmQyxjLEdBQWlDLEk7Z0JBQ2hDQyxnQixHQUFtQixJO2dCQUNuQkMsYyxHQUFpQixJO2dCQUNqQkMsVSxHQUFhLEs7Z0JBRWJDLDZCLEdBQWdELEU7Z0JBR2hEQyxnQixHQUF5QixJO2dCQUV6QkMsVyxHQUF1QixLOzs7Ozs7QUFDL0I7QUFDQTttQ0FDUztBQUFBOztBQUNMLGlCQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxtQkFBYixFQUFrQyxVQUFDQyxFQUFELEVBQVE7QUFDdEM7QUFDQSxrQkFBSUMsU0FBUyxHQUFHLENBQWhCOztBQUNBLG1CQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsTUFBSSxDQUFDZCxhQUFMLENBQW1CZSxNQUF2QyxFQUErQ0QsQ0FBQyxFQUFoRCxFQUFvRDtBQUNoRCxvQkFBSUosSUFBSSxHQUFHLE1BQUksQ0FBQ1YsYUFBTCxDQUFtQmMsQ0FBbkIsQ0FBWDtBQUNBRCxnQkFBQUEsU0FBUyxJQUFJSCxJQUFJLENBQUNNLFlBQUw7QUFBQTtBQUFBLDRDQUE2QkMsbUJBQTdCLEVBQWI7QUFDQVAsZ0JBQUFBLElBQUksQ0FBQ1EsT0FBTDtBQUNIOztBQUNELGNBQUEsTUFBSSxDQUFDbEIsYUFBTCxHQUFxQixFQUFyQjs7QUFDQSxrQkFBSVksRUFBSixFQUFRO0FBQ0pBLGdCQUFBQSxFQUFFLENBQUNDLFNBQUQsQ0FBRixDQURJLENBQ1c7QUFDbEI7QUFDSixhQVpEO0FBYUEsaUJBQUtILElBQUwsQ0FBVUMsRUFBVixDQUFhLGtCQUFiLEVBQWlDLFlBQU07QUFDbkMsY0FBQSxNQUFJLENBQUNELElBQUwsQ0FBVVMsSUFBVixDQUFlLDBCQUFmLEVBQTJDLE1BQUksQ0FBQ2hCLGNBQUwsQ0FBb0JpQixrQkFBcEIsRUFBM0MsRUFBcUYsQ0FBckY7QUFDSCxhQUZEO0FBR0g7OztrQ0FDTztBQUFBOztBQUNKLGlCQUFLWixnQkFBTCxHQUF3QjVCLElBQUksQ0FBQyxRQUFELENBQTVCLENBREksQ0FHSjs7QUFDQSxpQkFBS2UsVUFBTCxHQUFrQixLQUFLMEIsYUFBTCxDQUFtQkMsSUFBckM7QUFDQSxpQkFBS25CLGNBQUwsR0FBc0IsS0FBS08sSUFBTCxDQUFVTSxZQUFWO0FBQUE7QUFBQSxpREFBdEI7QUFDQSxpQkFBS2QsTUFBTCxHQUFjMUIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFoQixDQU5JLENBT0o7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsaUJBQUsrQyxRQUFMLENBQWMsWUFBTTtBQUNoQixrQkFBSSxNQUFJLENBQUN6QixLQUFMLENBQVcwQixRQUFYLE9BQTBCLGlCQUE5QixFQUFpRDtBQUM3QztBQUNBLG9CQUFJQyxlQUFlLEdBQUcsTUFBSSxDQUFDNUIsUUFBTCxDQUFjLFdBQWQsQ0FBdEI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDYSxJQUFMLENBQVVTLElBQVYsQ0FBZSwwQkFBZixFQUEyQyxNQUFJLENBQUNoQixjQUFMLENBQW9CaUIsa0JBQXBCLEVBQTNDLEVBQXFGLE1BQUksQ0FBQ3hCLGdCQUExRjs7QUFDQSxvQkFBSSxNQUFJLENBQUNBLGdCQUFMLElBQXlCNkIsZUFBZSxDQUFDVixNQUFoQixHQUF5QixDQUF0RCxFQUF5RDtBQUNyRCxzQkFBSVcsYUFBYSxHQUFHRCxlQUFlLENBQUMsTUFBSSxDQUFDN0IsZ0JBQU4sQ0FBbkM7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDK0IsZUFBTCxDQUFxQkQsYUFBckI7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDOUIsZ0JBQUw7QUFFSCxpQkFMRCxNQUtPLElBQUksTUFBSSxDQUFDQSxnQkFBTCxLQUEwQjZCLGVBQWUsQ0FBQ1YsTUFBaEIsR0FBeUIsQ0FBdkQsRUFBMEQ7QUFFN0Qsc0JBQUlXLGNBQWEsR0FBR0QsZUFBZSxDQUFDLE1BQUksQ0FBQzdCLGdCQUFOLENBQW5DOztBQUNBLGtCQUFBLE1BQUksQ0FBQ2dDLGVBQUwsQ0FBcUJGLGNBQXJCLEVBQW9DRyxJQUFwQyxDQUF5QyxZQUFNO0FBQzNDLG9CQUFBLE1BQUksQ0FBQ2pDLGdCQUFMO0FBQ0EsMkJBQU8sSUFBSWtDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsc0JBQUEsTUFBSSxDQUFDM0IsY0FBTCxHQUFzQjBCLE9BQXRCO0FBQ0gscUJBRk0sQ0FBUDtBQUdILG1CQUxELEVBS0dGLElBTEgsQ0FLUSxZQUFNO0FBQ1ZJLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLHdCQUFJLE1BQUksQ0FBQ3BDLEtBQUwsQ0FBVzBCLFFBQVgsT0FBMEIsV0FBOUIsRUFBMkM7QUFDdkMsc0JBQUEsTUFBSSxDQUFDMUIsS0FBTCxDQUFXcUMsUUFBWCxDQUFvQixVQUFwQjs7QUFDQSxzQkFBQSxNQUFJLENBQUMzQixnQkFBTCxDQUFzQlcsSUFBdEIsQ0FBMkIsaUJBQTNCLEVBQThDLE1BQUksQ0FBQ2hCLGNBQUwsQ0FBb0JpQixrQkFBcEIsRUFBOUMsRUFBd0YsWUFBTTtBQUMxRix3QkFBQSxNQUFJLENBQUNqQixjQUFMLENBQW9CaUMsT0FBcEIsQ0FBNEIsTUFBSSxDQUFDN0IsNkJBQWpDO0FBQ0gsdUJBRkQ7QUFHSDtBQUNKLG1CQWJEOztBQWNBLGtCQUFBLE1BQUksQ0FBQ1QsS0FBTCxDQUFXcUMsUUFBWCxDQUFvQixnQkFBcEIsRUFqQjZELENBaUJ0Qjs7QUFHMUMsaUJBcEJNLE1Bb0JBO0FBQ0hGLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLGtCQUFBLE1BQUksQ0FBQ3BDLEtBQUwsQ0FBV3FDLFFBQVgsQ0FBb0IsZUFBcEI7QUFHSDtBQUNKO0FBQ0osYUFyQ0QsRUFxQ0csQ0FyQ0g7QUFzQ0g7Ozs0Q0FFaUJFLFEsRUFBZ0I7QUFBQTs7QUFDOUI7QUFDQTtBQUNBLG1CQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUlNLFNBQVMsR0FBR0QsUUFBUSxDQUFDckIsWUFBVDtBQUFBO0FBQUEseUNBQWhCOztBQUNBLGtCQUFJc0IsU0FBSixFQUFlO0FBQ1hBLGdCQUFBQSxTQUFTLENBQUNDLGlCQUFWLEdBQThCVixJQUE5QixDQUFtQyxZQUFNO0FBQ3JDRSxrQkFBQUEsT0FBTztBQUNWLGlCQUZEO0FBR0gsZUFKRCxNQUlPO0FBQ0gsZ0JBQUEsTUFBSSxDQUFDUyxZQUFMLENBQWtCLFlBQU07QUFDcEJULGtCQUFBQSxPQUFPO0FBQ1YsaUJBRkQsRUFFRyxDQUZIO0FBR0g7QUFFSixhQVpNLENBQVA7QUFhSDs7O3NDQUNXO0FBQUE7O0FBQ1IsaUJBQUt4Qiw2QkFBTCxHQUFxQyxFQUFyQyxDQURRLENBRVI7O0FBQ0EsaUJBQUtYLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0YsVUFBTCxDQUFnQixXQUFXLEtBQUtRLGNBQUwsQ0FBb0JpQixrQkFBcEIsRUFBM0IsQ0FBaEIsQ0FKUSxDQUtSOztBQUlBLGlCQUFLWixnQkFBTCxDQUFzQlcsSUFBdEIsQ0FBMkIsbUJBQTNCLEVBQWdELEtBQUtoQixjQUFMLENBQW9CaUIsa0JBQXBCLEVBQWhELEVBQTBGLFlBQU07QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGNBQUEsTUFBSSxDQUFDWixnQkFBTCxDQUFzQlcsSUFBdEIsQ0FBMkIsWUFBM0IsRUFBeUMsWUFBTTtBQUMzQztBQUNBLGdCQUFBLE1BQUksQ0FBQ1gsZ0JBQUwsQ0FBc0JXLElBQXRCLENBQTJCLFlBQTNCLEVBQXlDLFlBQU07QUFDM0Msa0JBQUEsTUFBSSxDQUFDcUIsWUFBTCxDQUFrQixZQUFNO0FBQ3BCO0FBQ0Esb0JBQUEsTUFBSSxDQUFDMUMsS0FBTCxDQUFXcUMsUUFBWCxDQUFvQixpQkFBcEIsRUFGb0IsQ0FFb0I7O0FBQzNDLG1CQUhELEVBR0csR0FISDtBQUlILGlCQUxEO0FBUUgsZUFWRDtBQWFILGFBcEJELEVBVFEsQ0ErQlI7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSDs7O3lDQUNjO0FBQUE7O0FBQ1gsaUJBQUt2QyxnQkFBTDtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtGLFVBQUwsQ0FBZ0IsV0FBVyxLQUFLUSxjQUFMLENBQW9CaUIsa0JBQXBCLEVBQTNCLENBQWhCLENBRlcsQ0FHWDs7QUFFQSxpQkFBS3RCLEtBQUwsQ0FBV3FDLFFBQVgsQ0FBb0IsaUJBQXBCO0FBQ0FMLFlBQUFBLE9BQU8sQ0FBQ1csR0FBUixDQUFZLENBQ1IsSUFBSVgsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3QixjQUFBLE1BQUksQ0FBQzVCLGdCQUFMLEdBQXdCMkIsT0FBeEI7QUFDSCxhQUZELENBRFEsRUFJUixJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdCLGNBQUEsTUFBSSxDQUFDM0IsY0FBTCxHQUFzQjBCLE9BQXRCO0FBQ0gsYUFGRCxDQUpRLENBQVosRUFPR0YsSUFQSCxDQU9RLFlBQU07QUFDVkksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFDQSxjQUFBLE1BQUksQ0FBQy9CLGNBQUwsQ0FBb0JpQyxPQUFwQixDQUE0QixNQUFJLENBQUM3Qiw2QkFBakM7QUFDSCxhQVZEO0FBV0g7OzsrQ0FDb0JtQyxhLEVBQTZCO0FBQzlDVCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q1EsYUFBeEM7QUFFQSxpQkFBS25DLDZCQUFMLENBQW1Db0MsSUFBbkMsQ0FBd0NELGFBQXhDO0FBQ0EsaUJBQUt2QyxjQUFMLENBQW9CeUMsVUFBcEIsQ0FBK0JDLFdBQS9CLENBQTJDSCxhQUFhLENBQUNqRCxTQUF6RDtBQUNIOzs7cUNBQ1U7QUFDUDtBQUNBLGlCQUFLSyxLQUFMLENBQVdxQyxRQUFYLENBQW9CLFdBQXBCO0FBQ0g7OztzQ0FFVyxDQUtYLEMsQ0FKRztBQUNBO0FBSUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7K0NBRXFCO0FBQUE7O0FBQ2pCO0FBQ0EsbUJBQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSWMsRUFBRSxHQUFHLElBQUlwRSxLQUFKLENBQVUsTUFBSSxDQUFDcUUsVUFBZixDQUFUO0FBQ0FELGNBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQQyxnQkFBQUEsUUFBUSxFQUFFekUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQURMO0FBRVAwRSxnQkFBQUEsV0FBVyxFQUFFMUUsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sRUFBVSxDQUFWO0FBRlIsZUFBWDtBQUlBc0UsY0FBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsWUFBTTtBQUNWcEIsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FlLGNBQUFBLEVBQUUsQ0FBQ00sS0FBSDtBQUNBLGtCQUFJMUUsS0FBSixDQUFVLE1BQUksQ0FBQ3FFLFVBQUwsQ0FBZ0IvQixZQUFoQixDQUE2QnJDLGVBQTdCLENBQVYsRUFBeURxRSxFQUF6RCxDQUE0RCxHQUE1RCxFQUFpRTtBQUFFSyxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBakUsRUFBc0ZELEtBQXRGO0FBQ0gsYUFYTSxDQUFQO0FBYUg7OzswQ0FDZUUsZ0IsRUFBNEI7QUFBQTs7QUFDeENyQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsbUJBQU8sSUFBSUosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxjQUFBLE1BQUksQ0FBQ1EsWUFBTCxDQUFrQixZQUFNO0FBQ3BCLG9CQUFJLE1BQUksQ0FBQzFDLEtBQUwsQ0FBVzBCLFFBQVgsT0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNPLGtCQUFBQSxPQUFPO0FBQ1A7QUFDSDs7QUFDRCxvQkFBSXdCLFNBQWlCLEdBQUcsTUFBSSxDQUFDN0MsSUFBTCxDQUFVTSxZQUFWO0FBQUE7QUFBQSxrREFBcUN3QyxtQkFBckMsRUFBeEI7O0FBQ0Esb0JBQUlDLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsU0FBUyxDQUFDeEMsTUFBVixHQUFtQixDQUFwQyxDQUFYLENBQWxCO0FBQ0Esb0JBQUk4QyxHQUFTLEdBQUdOLFNBQVMsQ0FBQ0UsV0FBRCxDQUF6Qjs7QUFDQSxvQkFBSUssV0FBNEIsR0FBRyxNQUFJLENBQUNwRCxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLGtEQUFxQytDLGNBQXJDLEVBQW5DOztBQUNBLG9CQUFJckQsSUFBSSxHQUFHb0QsV0FBVyxDQUFDRSxRQUFaLENBQXFCSCxHQUFHLENBQUNJLENBQXpCLEVBQTRCSixHQUFHLENBQUNLLENBQWhDLENBQVg7QUFDQSxvQkFBSTNFLElBQUksR0FBRytELGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsQ0FBb0IsTUFBcEIsQ0FBWDtBQUNBLG9CQUFJYSxTQUFTLEdBQUc1RixXQUFXLENBQUMsTUFBSSxDQUFDNkYsZUFBTCxDQUFxQjdFLElBQXJCLENBQUQsQ0FBM0IsQ0FYb0IsQ0FZcEI7O0FBQ0E0RSxnQkFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLE1BQUksQ0FBQzNELElBQXhCO0FBQ0F5RCxnQkFBQUEsU0FBUyxDQUFDbEIsUUFBVixHQUFxQnpFLEVBQUUsQ0FBQ2tDLElBQUksQ0FBQ3VDLFFBQUwsQ0FBY2dCLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJ2RCxJQUFJLENBQUN1QyxRQUFMLENBQWNxQixDQUFuQyxDQUF2QjtBQUNBSCxnQkFBQUEsU0FBUyxDQUFDSSxNQUFWLEdBQW1CLEtBQW5CO0FBRUFKLGdCQUFBQSxTQUFTLENBQUNuRCxZQUFWO0FBQUE7QUFBQSw0Q0FBa0N3RCxJQUFsQyxDQUF1QyxNQUFJLENBQUM3RSxVQUE1QyxFQUF3RCxNQUFJLENBQUNRLGNBQTdELEVBQTZFTyxJQUFJLENBQUN1QyxRQUFsRixFQUE0RixNQUFJLENBQUMvQyxNQUFqRyxFQWpCb0IsQ0FtQnBCO0FBQ0E7QUFDQTs7QUFDQSxnQkFBQSxNQUFJLENBQUNGLGFBQUwsQ0FBbUIyQyxJQUFuQixDQUF3QndCLFNBQXhCOztBQUNBLHVCQUFPLE1BQUksQ0FBQzVCLGlCQUFMLENBQXVCNEIsU0FBdkIsRUFBa0N0QyxJQUFsQyxDQUF1QyxZQUFNO0FBQ2hELGtCQUFBLE1BQUksQ0FBQ25CLElBQUwsQ0FBVVMsSUFBVixDQUFlLCtCQUFmOztBQUNBZ0Qsa0JBQUFBLFNBQVMsQ0FBQ25ELFlBQVY7QUFBQTtBQUFBLDhDQUFrQ3lELGtCQUFsQyxDQUFxRCxDQUFyRCxFQUF3RCxNQUF4RCxFQUE4RFosR0FBOUQsRUFBbUUsSUFBSXBGLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFuRTtBQUNBc0Qsa0JBQUFBLE9BQU87QUFDVixpQkFKTSxDQUFQO0FBS0gsZUE1QkQsRUE0QkcsQ0E1Qkg7QUE2QkgsYUE5Qk0sQ0FBUDtBQWdDSDs7OzBDQUNlTCxhLEVBQXlCO0FBQUE7O0FBQ3JDO0FBQ0EsZ0JBQUlnRCxXQUFXLEdBQUcsRUFBbEI7QUFDQSxnQkFBSW5CLFNBQWlCLEdBQUcsS0FBSzdDLElBQUwsQ0FBVU0sWUFBVjtBQUFBO0FBQUEsOENBQXFDd0MsbUJBQXJDLEVBQXhCO0FBQ0EsZ0JBQUlNLFdBQTRCLEdBQUcsS0FBS3BELElBQUwsQ0FBVU0sWUFBVjtBQUFBO0FBQUEsOENBQXFDK0MsY0FBckMsRUFBbkM7QUFDQSxnQkFBSVksYUFBYSxHQUFHLENBQXBCOztBQUNBLGlCQUFLLElBQUk3RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWSxhQUFhLENBQUNYLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0FBQzNDNkQsY0FBQUEsYUFBYSxJQUFJakQsYUFBYSxDQUFDWixDQUFELENBQWIsQ0FBaUIsT0FBakIsQ0FBakI7QUFDSDs7QUFDRCxnQkFBSThELFFBQVEsR0FBRyxFQUFmOztBQUNBLGlCQUFLLElBQUk5RCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHWSxhQUFhLENBQUNYLE1BQWxDLEVBQTBDRCxFQUFDLEVBQTNDLEVBQStDO0FBQzNDLGtCQUFJakIsUUFBUSxHQUFHNkIsYUFBYSxDQUFDWixFQUFELENBQTVCOztBQUNBLG1CQUFLLElBQUlBLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdqQixRQUFRLENBQUMsT0FBRCxDQUE1QixFQUF1Q2lCLEdBQUMsRUFBeEMsRUFBNEM7QUFDeEM4RCxnQkFBQUEsUUFBUSxDQUFDakMsSUFBVCxDQUFjOUMsUUFBUSxDQUFDLE1BQUQsQ0FBdEI7QUFDSDtBQUNKOztBQUNEb0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QjBDLFFBQXpCLEVBaEJxQyxDQWlCckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxnQkFBSUMsZ0JBQWdCLEdBQUduQixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxTQUFTLENBQUN4QyxNQUFyQyxDQUF2Qjs7QUFFQSxnQkFBSSxLQUFLbkIsZ0JBQUwsS0FBMEIsQ0FBMUIsSUFBK0IsS0FBS08sY0FBTCxDQUFvQmlCLGtCQUFwQixPQUE2QyxDQUFoRixFQUFtRjtBQUMvRXlELGNBQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0g7O0FBQ0Q1QyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLEtBQUt0QyxnQkFBakM7QUFDQXFDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBSy9CLGNBQUwsQ0FBb0JpQixrQkFBcEIsRUFBN0I7O0FBQ0EsZ0JBQU0wRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBZ0J4RixJQUFoQixFQUFpQztBQUVwRCxrQkFBSXlGLFVBQVUsR0FBR0gsZ0JBQWdCLEdBQUdFLEtBQXBDOztBQUNBLGtCQUFJQyxVQUFVLElBQUl6QixTQUFTLENBQUN4QyxNQUE1QixFQUFvQztBQUNoQ2lFLGdCQUFBQSxVQUFVLElBQUl6QixTQUFTLENBQUN4QyxNQUF4QjtBQUNIOztBQUNEa0IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNxQixTQUFTLENBQUN4QyxNQUEzQztBQUNBLGtCQUFJa0UsT0FBTyxHQUFHMUIsU0FBUyxDQUFDeUIsVUFBRCxDQUF2QjtBQUNBL0MsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQjhDLFVBQTNCO0FBQ0Esa0JBQUl0RSxJQUFJLEdBQUdvRCxXQUFXLENBQUNFLFFBQVosQ0FBcUJpQixPQUFPLENBQUNoQixDQUE3QixFQUFnQ2dCLE9BQU8sQ0FBQ2YsQ0FBeEMsQ0FBWCxDQVRvRCxDQVdwRDtBQUNBO0FBQ0E7O0FBQ0Esa0JBQUlyRixPQUFPLENBQUM2QixJQUFELENBQVAsSUFBaUJBLElBQUksQ0FBQ00sWUFBTDtBQUFBO0FBQUEsNkNBQXJCLEVBQXFEO0FBQ2pELG9CQUFJa0UsV0FBVyxHQUFHeEUsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSwrQ0FBbEI7O0FBQ0Esb0JBQUlrRSxXQUFXLENBQUNDLFNBQVosRUFBSixFQUE2QjtBQUN6QixzQkFBSWhCLFNBQVMsR0FBRzVGLFdBQVcsQ0FBQyxNQUFJLENBQUM2RyxnQkFBTCxDQUFzQjdGLElBQXRCLENBQUQsQ0FBM0IsQ0FEeUIsQ0FFekI7O0FBQ0E0RSxrQkFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLE1BQUksQ0FBQzNELElBQXhCO0FBQ0F5RCxrQkFBQUEsU0FBUyxDQUFDbEIsUUFBVixHQUFxQnpFLEVBQUUsQ0FBQ2tDLElBQUksQ0FBQ3VDLFFBQUwsQ0FBY2dCLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJ2RCxJQUFJLENBQUN1QyxRQUFMLENBQWNxQixDQUFuQyxDQUF2QjtBQUNBSCxrQkFBQUEsU0FBUyxDQUFDSSxNQUFWLEdBQW1CLEtBQW5CO0FBRUFKLGtCQUFBQSxTQUFTLENBQUNuRCxZQUFWO0FBQUE7QUFBQSw4Q0FBa0N3RCxJQUFsQyxDQUF1QyxNQUFJLENBQUM3RSxVQUE1QyxFQUF3RCxNQUFJLENBQUNRLGNBQTdELEVBQTZFTyxJQUFJLENBQUN1QyxRQUFsRixFQUE0RixNQUFJLENBQUMvQyxNQUFqRzs7QUFDQSxrQkFBQSxNQUFJLENBQUNGLGFBQUwsQ0FBbUIyQyxJQUFuQixDQUF3QndCLFNBQXhCOztBQUVBTyxrQkFBQUEsV0FBVyxDQUFDL0IsSUFBWixDQUFpQndCLFNBQVMsQ0FBQ25ELFlBQVY7QUFBQTtBQUFBLDhDQUFrQ3lELGtCQUFsQyxDQUFxRE0sS0FBckQsRUFBNEQsTUFBNUQsRUFBa0VFLE9BQWxFLEVBQTJFLElBQUl4RyxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBM0UsQ0FBakI7QUFDSDtBQUNKLGVBZEQsTUFjTyxDQUNIO0FBQ0g7QUFDSixhQS9CRDs7QUFnQ0EsaUJBQUssSUFBSXFDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUc4RCxRQUFRLENBQUM3RCxNQUE3QixFQUFxQ0QsR0FBQyxFQUF0QyxFQUEwQztBQUN0Q2dFLGNBQUFBLGNBQWMsQ0FBQ2hFLEdBQUQsRUFBSThELFFBQVEsQ0FBQzlELEdBQUQsQ0FBWixDQUFkO0FBQ0gsYUEvRG9DLENBZ0VyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLG1CQUFPZ0IsT0FBTyxDQUFDVyxHQUFSLENBQVlpQyxXQUFaLENBQVA7QUFDSDs7OzRDQUVpQmhFLEksRUFBWTtBQUMxQixpQkFBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtkLGFBQUwsQ0FBbUJlLE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO0FBQ2hELGtCQUFJdUUsS0FBSyxHQUFHLEtBQUtyRixhQUFMLENBQW1CYyxDQUFuQixDQUFaOztBQUNBLGtCQUFJdUUsS0FBSyxDQUFDQyxJQUFOLEtBQWU1RSxJQUFJLENBQUM0RSxJQUF4QixFQUE4QjtBQUMxQixxQkFBS3RGLGFBQUwsQ0FBbUJ1RixNQUFuQixDQUEwQnpFLENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSixhQU55QixDQU8xQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLGdCQUFJLEtBQUtkLGFBQUwsQ0FBbUJlLE1BQW5CLEtBQThCLENBQWxDLEVBQXFDO0FBQ2pDLGtCQUFJLEtBQUtWLGNBQVQsRUFBeUI7QUFDckIscUJBQUtBLGNBQUw7QUFDQSxxQkFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0o7QUFDSjs7O29EQUN5QjtBQUN0QixtQkFBTyxLQUFLTCxhQUFaO0FBQ0g7Ozt3Q0FDYXdGLEcsRUFBYTtBQUN2QixpQkFBS3JGLGNBQUwsQ0FBb0JhLFlBQXBCO0FBQUE7QUFBQSxrREFBaUR5RSxhQUFqRCxDQUErREQsR0FBL0Q7QUFDSDs7OzJDQUNnQjtBQUNiO0FBQ0E7QUFDQSxpQkFBSzFGLEtBQUwsQ0FBV3FDLFFBQVgsQ0FBb0IsV0FBcEI7QUFDQSxpQkFBS3pCLElBQUwsQ0FBVVMsSUFBVixDQUFlLGtCQUFmLEVBSmEsQ0FLYjtBQUNIOzs7MENBRWVnRCxTLEVBQWlCO0FBQzdCO0FBQ0EsZ0JBQUl1QixRQUFRLEdBQUd2QixTQUFTLENBQUNuRCxZQUFWO0FBQUE7QUFBQSx1Q0FBZjs7QUFDQSxnQkFBSTBFLFFBQUosRUFBYztBQUNWLGtCQUFJQyxVQUFVLEdBQUdELFFBQVEsQ0FBQ0Usa0JBQVQsRUFBakIsQ0FEVSxDQUVWO0FBQ0E7O0FBQ0Esa0JBQUlsRixJQUFJLEdBQUduQyxXQUFXLENBQUMsS0FBS3NILHFCQUFMLENBQTJCRixVQUEzQixDQUFELENBQXRCO0FBQ0FqRixjQUFBQSxJQUFJLENBQUMyRCxNQUFMLEdBQWMsS0FBSzNELElBQW5CO0FBQ0FBLGNBQUFBLElBQUksQ0FBQ3VDLFFBQUwsR0FBZ0JrQixTQUFTLENBQUNsQixRQUExQjtBQUNBdkMsY0FBQUEsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSw4Q0FBK0J3RCxJQUEvQixDQUFvQyxLQUFLckUsY0FBTCxDQUFvQjJGLGFBQXBCLEdBQW9DeEUsSUFBeEUsRUFBOEUsS0FBS25CLGNBQW5GLEVBQW1HLEtBQUtELE1BQXhHO0FBQ0g7QUFDSjs7OzZDQUNrQjtBQUNmLG1CQUFPLEtBQUtLLDZCQUFaO0FBQ0g7Ozs7UUF2ZmdDcEMsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSTs7Ozs7OztpQkFHWCxJOzs7Ozs7O2lCQUVTLEU7Ozs7Ozs7aUJBSU0sRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMywgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBwcm9maWxlciwgaXNWYWxpZCwgU2NoZWR1bGVyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBHcm91bmRUaWxlZCB9IGZyb20gJy4vR3JvdW5kVGlsZWQvR3JvdW5kVGlsZWQnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEVuZW15QnVsbGV0IH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCdWxsZXQnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIERlYWRFbmVteU9iaiB7XHJcbiAgICAvL+atu+WOu+aVjOS6uueahOe7k+aehOS9k1xyXG4gICAgcHVibGljIGVuZW15VHlwZSA9IFwiXCI7XHJcbiAgICBwdWJsaWMgZHJvcEdvbGRDb3VudCA9IDA7XHJcbiAgICAvLyBwdWJsaWMgZW5lbXlJY29uU3ByaXRlRnJhbWUgPSAwOyAvL+aVjOS6uueahGljb25cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGRyb3BHb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW5lbXlUeXBlID0gdHlwZTsgLy/mlYzkurrnmoTnp43nsbtcclxuICAgICAgICB0aGlzLmRyb3BHb2xkQ291bnQgPSBkcm9wR29sZENvdW50OyAvL+aVjOS6uueahOaOieiQveeahOmHkeW4geaVsOebriBcclxuICAgIH1cclxufTtcclxuQGNjY2xhc3MoJ0VuZW15Q29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdSZXM6IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudExldmVsTnVtID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVNYXhFbmVteUNvdW50ID0gMDsgLy/lvZPliY3ms6LmrKHmnIDlpKfnmoTmlYzkurrmlbBcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F2ZURhdGE6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydFBvc05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBib3Nzc1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15QnVsbGV0UHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTsgLy/mlYzkurrnmoTlrZDlvLnpooTliLbkvZPnmoTliJfooahcclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlRHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbGxXYXZlQWRkT3ZlckNiID0gbnVsbDsgLy/miYDmnInnmoTms6LmrKHnmoTmlYzkurrpg73lop7liqDlrozmr5XnmoTlm57osINcclxuICAgIHByaXZhdGUgYWxsRW5lbXlEZWFkQ2IgPSBudWxsOyAvL+aJgOacieeahOaVjOS6uumDveatu+S6hueahOWbnuiwgyBcclxuICAgIHByaXZhdGUgYm9vc0lzTGl2ZSA9IGZhbHNlOyAvL2Jvc3Pov5jmtLvnnYDvvJ9cclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0OiBEZWFkRW5lbXlPYmpbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHVpQ29udHJvbGxlck5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNBZGRlZEJvc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTogSnNvbkFzc2V0fSlcclxuICAgIC8vIHB1YmxpYyBHYW1lTGV2ZWxDb25maWc6IEpzb25Bc3NldCA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGNiKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEdvbGQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICB0b3RhbEdvbGQgKz0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYih0b3RhbEdvbGQpOyAvL+mUgOavgeeahOaVjOS6uueahCDmjIHmnInnmoTph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXQtbGV2ZWwtbGFiZWxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlID0gZmluZChcIkNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnUmVzLmpzb247XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiLCAoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPj0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLW9uZS1ib3NzXCIpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAvLyAvLyB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAvLyBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBpZiAodGhpcy5hbGxXYXZlQWRkT3ZlckNiKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYigpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLkuIDms6LmlYzkurrlop7liqDlrozmiJBcIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtb3ZlcicpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIH0sICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpID8gNSA6IDIpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSBcInN0YXJ0LWFkZC1lbmVteVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+WinuWKoOaVjOS6ulxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRXYXZlRGF0YSA9IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPD0gY3VycmVudFdhdmVEYXRhLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlUeXBlTGlzdCA9IGN1cnJlbnRXYXZlRGF0YVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KGVuZW15VHlwZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSBjdXJyZW50V2F2ZURhdGEubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlUeXBlTGlzdCA9IGN1cnJlbnRXYXZlRGF0YVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lQm9zc0VuZW15KGVuZW15VHlwZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gXCJnYW1lLWxvc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImdhbWUtd2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWVuZC1kaWFsb2dcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWJvc3Mtc3RhdGVcIik7IC8v5aKe5YqgYm9zcyDnmoTnirbmgIFcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaVjOS6uuWinuWKoOWujOavlVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW15LWVuZFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNClcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICAvLyBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zaG93Qm9zc0ljb25BbmltKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVuZW15QmFzZSA9IGJvc3NOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteUJhc2UucGxheUJvc3NFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0ID0gW107XHJcbiAgICAgICAgLy/lnKjov5nph4zpnIDopoHliJ3lp4vljJbkuIDkupvmuLjmiI/mlbDmja4gXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcbiAgICAgICAgLy8gdGhpcy53YXZlRGF0YSA9IHRoaXMuR2FtZUxldmVsQ29uZmlnLmpzb25bJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctc3RhcnQtZGlhbG9nXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvIDlp4vlr7nor53lhoXlrrnmkq3mlL7nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgIC8vIH0sIDIuNSlcclxuXHJcbiAgICAgICAgICAgIC8v5byA5aeL54K55Ye7IOWhlOeahOWfuuW6p+eahCDlvJXlr7zmk43kvZxcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWd1aWRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5byA5aeL54K55Ye7IOW7uumAoOWhlOeahCDlvJXlr7zmk43kvZxcclxuICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1ndWlkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwic3RhcnQtYWRkLWVuZW15XCIpOyAvL+W8gOWni+WinuWKoOaVjOS6ulxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuXHJcbiAgICAgICAgLy8gfSwgMyk7XHJcblxyXG4gICAgICAgIC8vIFByb21pc2UuYWxsKFtcclxuICAgICAgICAvLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWVuZC1kaWFsb2dcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG5cclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgY29udGludWVHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleC0tO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuICAgICAgICAvLyB0aGlzLndhdmVEYXRhID0gdGhpcy5HYW1lTGV2ZWxDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInN0YXJ0LWFkZC1lbmVteVwiKTtcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVzaE9uZUVuZW15RGVhZERhdGEoZW5lbXlEZWFkRGF0YTogRGVhZEVuZW15T2JqKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwdXNoIG9uZSBlbmVteSBkZWFkIGRhdGFcIiwgZW5lbXlEZWFkRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QucHVzaChlbmVteURlYWREYXRhKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWN0aXZlRW5lbXkoZW5lbXlEZWFkRGF0YS5lbmVteVR5cGUpO1xyXG4gICAgfVxyXG4gICAgZ2VtZUxvc2UoKSB7XHJcbiAgICAgICAgLy/muLjmiI/lpLHotKXkuoZcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1sb3NlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlR2FtZSgpIHtcclxuICAgICAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgICAgIC8vIFNjaGVkdWxlci5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvL+i/m+WFpWJvc3Mg5bGV56S655qE54q25oCBXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gdjMoYm9zc05vZGUucG9zaXRpb24pLmFkZCh2Myg1LCAyLCA1KSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRFdWxlckFuZ2xlcyA9IHYzKHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcykuYWRkKHYzKDM1LCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjMoYm9zc05vZGUucG9zaXRpb24ueCArIDEwLCBib3NzTm9kZS5wb3NpdGlvbi55ICsgNyxib3NzTm9kZS5wb3NpdGlvbi56ICsgMTApXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbikuYWRkKGFkZFBvcyk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBhZGRBbmdsZVZhbHVlID0gMjU7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcyA9IHYzKGV1bGVyQW5nbGVzLnggKyAyNSwgZXVsZXJBbmdsZXMueSwgZXVsZXJBbmdsZXMueik7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgLy8gICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgIC8vICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogZW5kUG9zLFxyXG4gICAgLy8gICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGVuZEV1bGVyQW5nbGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gb3J0aG9IZWlnaHQ6IDYwXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLm9ydGhvSGVpZ2h0ID0gNTtcXFxyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDYgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93Q2FtZXJhQmFja0FuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7plZzlpLTov5Tlm57nmoTliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMzAsIDQyLCAzMCksXHJcbiAgICAgICAgICAgICAgICBldWxlckFuZ2xlczogdjMoLTQ1LCA0NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogMjIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZUJvc3NFbmVteShjdXJyZW50RW5lbXlMaXN0OiBPYmplY3RbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5LiqYm9zc1wiKVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdnYW1lLWxvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczogVmVjMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBjdXJyZW50RW5lbXlMaXN0WzBdWyd0eXBlJ107XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5ib3Nzc1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlCb3NzRW50ZXJBbmltKGVuZW15Tm9kZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKDEsIHRoaXMsIHBvcywgbmV3IFZlYzIoNSwgNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoZW5lbXlUeXBlTGlzdDogT2JqZWN0W10pIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gZW5lbXlUeXBlTGlzdFtpXVsnY291bnQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR5cGVMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IGVuZW15VHlwZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2ZURhdGFbJ2NvdW50J107IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHlwZUxpc3QucHVzaCh3YXZlRGF0YVsndHlwZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgbGlzdFwiLCB0eXBlTGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfeOAgVxyXG4gICAgICAgIGxldCByYW5kb21TdGFydEluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogaW5kZXhMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IDAgJiYgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByYW5kb21TdGFydEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHdhdmVcIiwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlT25lRW5lbXkgPSAoaW5kZXg6IG51bWJlciwgdHlwZTogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHJhbmRvbVN0YXJ0SW5kZXggKyBpbmRleDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCAtPSBpbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggbGlzdCBsZW5ndGhcIiwgaW5kZXhMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3N0YXJ0SW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGluZGV4XCIsIHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gfSwgMC4xICogaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZChub2RlKSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oaW5kZXgsIHRoaXMsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKFByb21pc2UucmVzb2x2ZSgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3JlYXRlT25lRW5lbXkoaSwgdHlwZUxpc3RbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoaWxlIChhZGRFbmVteUNvdW50IDwgbWF4RW5lbXlDb3VudCkge1xyXG4gICAgICAgIC8vICAgICAvLyBhZGRFbmVteUNvdW50ICsrO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmRvbSBpbmRleFwiLCByYW5kb21JbmRleCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyYW5kb21JbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByYW5kb21JbmRleCA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuICAgICAgICAvLyAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huS4gOS4quepuuS9jee9rlwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEVuZW15VHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVubSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2VuZW15VHlwZUluZGV4XTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdHlwZSA9IHdhdmVEYXRhLnR5cGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGNvdW50ID0gd2F2ZURhdGEuY291bnQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHdhdmVBZGRFbmVteUNvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZW5lbXlUeXBlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5Liq5pWM5Lq6XCIpXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyByYW5kb21JbmRleCsrXHJcbiAgICAgICAgLy8gICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbmVteUluTGlzdChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkudXVpZCA9PT0gbm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoID09PSAwICYmIHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuYWxsRW5lbXlEZWFkQ2IpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IoKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEVuZW15RGVhZENiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmVuZW15QXR0YWNrZWQobnVtKTtcclxuICAgIH1cclxuICAgIGZyb3plbkFsbEVuZW15KCkge1xyXG4gICAgICAgIC8v5Yaw5Ya75omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5lbmVtKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZnJvemVuLWFsbC1lbmVteVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgYm9zc1Nob290T25lRWdnKGVuZW15Tm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vYm9zcyDlj5HlsITkuobkuIDmnprpuKHom4tcclxuICAgICAgICBsZXQgZW5lbXlDb20gPSBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgaWYgKGVuZW15Q29tKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXRUeXBlID0gZW5lbXlDb20uZ2V0RW5lbXlCdWxsZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pWM5Lq655qE5a2Q5by557G75Z6L5pivIFwiLCBidWxsZXRUeXBlKTtcclxuICAgICAgICAgICAgLy8g5qC55o2u5pWM5Lq655qE5a2Q5by557G75Z6L77yM5Yid5aeL5YyW5LiA5Liq5a2Q5by5XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteUJ1bGxldFByZWZhYkxpc3RbYnVsbGV0VHlwZV0pO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGVuZW15Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCdWxsZXQpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbiwgdGhpcy5nYW1lQ29udHJvbGxlciwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19