System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./Enemys/EnemyBullet.js", "./GameInstance.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, CameraComponent, find, isValid, State, EnemyBase, GroundMapCtl, GroundTiled, EnemyBullet, GameInstance, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, DeadEnemyObj, EnemyController;

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

  function _reportPossibleCrUseOfEnemyBullet(extras) {
    _reporterNs.report("EnemyBullet", "./Enemys/EnemyBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "./GameInstance", _context.meta, extras);
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
    _dec9: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
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
    }, function (_EnemysEnemyBulletJs) {
      EnemyBullet = _EnemysEnemyBulletJs.EnemyBullet;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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
      }), _dec9 = property({
        type: JsonAsset
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

          _this.allWaveAddOverCb = null;
          _this.allEnemyDeadCb = null;
          _this.boosIsLive = false;
          _this.currentLevelDeadEnemyDataList = [];
          _this.uiControllerNode = null;
          _this.isAddedBoss = false;

          _initializerDefineProperty(_this, "gameConfigJsonAsset", _descriptor8, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyController, [{
          key: "onLoad",
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
              _this2.node.emit("refer-current-wave-level", (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum, 0);
            });
            this.node.on("boss-shoot-one-egg", this.bossShootOneEgg.bind(this));
            this.node.on("remove-enemy-in-list", this.removeEnemyInList.bind(this));
            this.node.on("push-one-enemy-dead-data", this.pushOneEnemyDeadData.bind(this));
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            this.uiControllerNode = find("Canvas"); // Your initialization goes here.

            this.gameConfig = this.gameConfigRes.json; // this.gameController = this.node.getComponent(GameController);

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
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-current-wave-level", (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum, _this3.currentWaveIndex);

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

                      _this3.uiControllerNode.emit("show-end-dialog", (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                        error: Error()
                      }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum, function () {
                        (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                          error: Error()
                        }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("show-game-win-layer", _this3.currentLevelDeadEnemyDataList);
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
            this.waveData = this.gameConfigJsonAsset.json['Level_' + (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum]; // this.waveData = this.GameLevelConfig.json['Level_' + this.gameController.getCurrentLevelNum()];

            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-current-wave-level", (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum, this.currentWaveIndex);
            this.uiControllerNode.emit("show-start-dialog", (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum, function () {
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
            this.waveData = this.gameConfigJsonAsset.json['Level_' + (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum]; // this.waveData = this.GameLevelConfig['Level_' + this.gameController.getCurrentLevelNum()];

            this.state.setState("start-add-enemy");
            Promise.all([new Promise(function (resolve, reject) {
              _this6.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this6.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利"); // this.gameController.gameWin(this.currentLevelDeadEnemyDataList);

              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("show-game-win-layer", _this6.currentLevelDeadEnemyDataList);
            });
          }
        }, {
          key: "pushOneEnemyDeadData",
          value: function pushOneEnemyDeadData(enemyType, healthCount) {
            // console.log("push one enemy dead data", enemyDeadData);
            var enemyDeadData = new DeadEnemyObj(enemyType, healthCount);
            this.currentLevelDeadEnemyDataList.push(enemyDeadData); // this.gameController.playerData.activeEnemy(enemyDeadData.enemyType);

            var result = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().activeEnemy(enemyDeadData.enemyType);

            if (result) {
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-enemy-info-cell", enemyDeadData.enemyType);
            }
          }
        }, {
          key: "gemeLose",
          value: function gemeLose() {
            //游戏失败了
            this.state.setState("game-lose");

            for (var i = 0; i < this.enemyNodeList.length; i++) {
              var enemyNode = this.enemyNodeList[i];
              enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).forzenSelf();
            }
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

            // console.log("增加一个boss")
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
                }), EnemyBase) : EnemyBase).init(_this8.gameConfigJsonAsset.json, node.position, _this8.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
                // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
                // addEnemyCount++;

                _this8.enemyNodeList.push(enemyNode);

                return _this8.playBossEnterAnim(enemyNode).then(function () {
                  _this8.node.emit("enter-continue-play-move-anim");

                  enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(1, _this8.node, pos, new Vec2(5, 5));
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
            } // console.log("type list", typeList);
            // console.log("max enemy count", maxEnemyCount);
            // if (maxEnemyCount >= indexList.length) {
            //     console.error("数据错误");
            //     return;
            // }、


            var randomStartIndex = Math.round(Math.random() * indexList.length);

            if (this.currentWaveIndex === 0 && (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum === 0) {
              randomStartIndex = 0;
            } // console.log("current wave", this.currentWaveIndex);
            // console.log("current level", this.gameController.getCurrentLevelNum());


            var createOneEnemy = function createOneEnemy(index, type) {
              var startIndex = randomStartIndex + index;

              if (startIndex >= indexList.length) {
                startIndex -= indexList.length;
              } // console.log("index list length", indexList.length);


              var indexV2 = indexList[startIndex]; // console.log("start index", startIndex);

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
                  }), EnemyBase) : EnemyBase).init(_this9.gameConfig, node.position, _this9.endPos);

                  _this9.enemyNodeList.push(enemyNode);

                  promiseList.push(enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(index, _this9.node, indexV2, new Vec2(5, 5)));
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
          } // enemyAttacked(num: number) {
          //     // this.gameController.getComponent(GameController).enemyAttacked(num);
          // }

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
              }), EnemyBullet) : EnemyBullet).init(this.gameConfigJsonAsset.json, this.endPos);
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameConfigJsonAsset", [_dec9], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiRW5lbXlCdWxsZXQiLCJHYW1lSW5zdGFuY2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEZWFkRW5lbXlPYmoiLCJ0eXBlIiwiZHJvcEdvbGRDb3VudCIsImVuZW15VHlwZSIsIkVuZW15Q29udHJvbGxlciIsImdhbWVDb25maWciLCJjdXJyZW50V2F2ZUluZGV4Iiwid2F2ZURhdGEiLCJzdGF0ZSIsImFkZEVuZW15RHVyYWN0aW9uIiwiZW5lbXlOb2RlTGlzdCIsImN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0IiwiZW5kUG9zIiwiYWxsV2F2ZUFkZE92ZXJDYiIsImFsbEVuZW15RGVhZENiIiwiYm9vc0lzTGl2ZSIsImN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0IiwidWlDb250cm9sbGVyTm9kZSIsImlzQWRkZWRCb3NzIiwibm9kZSIsIm9uIiwiY2IiLCJ0b3RhbEdvbGQiLCJpIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImRlc3Ryb3kiLCJlbWl0IiwiZ2V0SW5zdGFuY2UiLCJnZXRQbGF5ZXJEYXRhIiwiY3VycmVudExldmVsTnVtIiwiYm9zc1Nob290T25lRWdnIiwiYmluZCIsInJlbW92ZUVuZW15SW5MaXN0IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsInNjaGVkdWxlIiwiZ2V0U3RhdGUiLCJjdXJyZW50V2F2ZURhdGEiLCJnZXRVSUN0bE5vZGUiLCJlbmVteVR5cGVMaXN0IiwiYWRkT25lV2F2ZUVuZW15IiwiYWRkT25lQm9zc0VuZW15IiwidGhlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZ2V0R2FtZUN0bE5vZGUiLCJib3NzTm9kZSIsImVuZW15QmFzZSIsInBsYXlCb3NzRW50ZXJBbmltIiwic2NoZWR1bGVPbmNlIiwiZ2FtZUNvbmZpZ0pzb25Bc3NldCIsImFsbCIsImhlYWx0aENvdW50IiwiZW5lbXlEZWFkRGF0YSIsInB1c2giLCJyZXN1bHQiLCJhY3RpdmVFbmVteSIsImVuZW15Tm9kZSIsImZvcnplblNlbGYiLCJ0dyIsImNhbWVyYU5vZGUiLCJ0byIsInBvc2l0aW9uIiwiZXVsZXJBbmdsZXMiLCJjYWxsIiwic3RhcnQiLCJvcnRob0hlaWdodCIsImN1cnJlbnRFbmVteUxpc3QiLCJpbmRleExpc3QiLCJnZXRJbkVkYWdlSW5kZXhMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3MiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJ4IiwieSIsImJvc3NzUHJlZmFiTGlzdCIsInBhcmVudCIsInoiLCJhY3RpdmUiLCJpbml0Iiwic2hvd0VuZW15RW50ZXJBbmltIiwicHJvbWlzZUxpc3QiLCJtYXhFbmVteUNvdW50IiwidHlwZUxpc3QiLCJyYW5kb21TdGFydEluZGV4IiwiY3JlYXRlT25lRW5lbXkiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJpbmRleFYyIiwiZ3JvdW5kVGlsZWQiLCJnZXRJc1ZvaWQiLCJlbmVteXNQcmVmYWJMaXN0IiwiZW5lbXkiLCJ1dWlkIiwic3BsaWNlIiwiZW5lbXlDb20iLCJidWxsZXRUeXBlIiwiZ2V0RW5lbXlCdWxsZXRUeXBlIiwiZW5lbXlCdWxsZXRQcmVmYWJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQSxpQkFBS0YsS0FBTCxDQUFXMkMsUUFBWCxDQUFvQixXQUFwQjtBQUNBLGlCQUFLaEMsSUFBTCxDQUFVUyxJQUFWLENBQWUsa0JBQWYsRUFKYSxDQUtiO0FBQ0g7OzswQ0FFZW9DLFMsRUFBaUI7QUFDN0I7QUFDQSxnQkFBSTJDLFFBQVEsR0FBRzNDLFNBQVMsQ0FBQ3ZDLFlBQVY7QUFBQTtBQUFBLHVDQUFmOztBQUNBLGdCQUFJa0YsUUFBSixFQUFjO0FBQ1Ysa0JBQUlDLFVBQVUsR0FBR0QsUUFBUSxDQUFDRSxrQkFBVCxFQUFqQixDQURVLENBRVY7QUFDQTs7QUFDQSxrQkFBSTFGLElBQUksR0FBR2xDLFdBQVcsQ0FBQyxLQUFLNkgscUJBQUwsQ0FBMkJGLFVBQTNCLENBQUQsQ0FBdEI7QUFDQXpGLGNBQUFBLElBQUksQ0FBQ3FFLE1BQUwsR0FBYyxLQUFLckUsSUFBbkI7QUFDQUEsY0FBQUEsSUFBSSxDQUFDa0QsUUFBTCxHQUFnQkwsU0FBUyxDQUFDSyxRQUExQjtBQUNBbEQsY0FBQUEsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSw4Q0FBK0JrRSxJQUEvQixDQUFvQyxLQUFLbEMsbUJBQUwsQ0FBeUJwQixJQUE3RCxFQUFtRSxLQUFLekIsTUFBeEU7QUFDSDtBQUNKOzs7NkNBQ2tCO0FBQ2YsbUJBQU8sS0FBS0ksNkJBQVo7QUFDSDs7OztRQXBnQmdDbkMsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSTs7Ozs7OztpQkFHWCxJOzs7Ozs7O2lCQUVTLEU7Ozs7Ozs7aUJBSU0sRTs7Ozs7OztpQkFrQkQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMywgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBwcm9maWxlciwgaXNWYWxpZCwgU2NoZWR1bGVyLCBHYW1lIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBHcm91bmRUaWxlZCB9IGZyb20gJy4vR3JvdW5kVGlsZWQvR3JvdW5kVGlsZWQnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG4vLyBpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEVuZW15QnVsbGV0IH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCdWxsZXQnO1xyXG5pbXBvcnQgeyBHYW1lSW5zdGFuY2UgfSBmcm9tICcuL0dhbWVJbnN0YW5jZSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5leHBvcnQgY2xhc3MgRGVhZEVuZW15T2JqIHtcclxuICAgIC8v5q275Y675pWM5Lq655qE57uT5p6E5L2TXHJcbiAgICBwdWJsaWMgZW5lbXlUeXBlID0gXCJcIjtcclxuICAgIHB1YmxpYyBkcm9wR29sZENvdW50ID0gMDtcclxuICAgIC8vIHB1YmxpYyBlbmVteUljb25TcHJpdGVGcmFtZSA9IDA7IC8v5pWM5Lq655qEaWNvblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZHJvcEdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteVR5cGUgPSB0eXBlOyAvL+aVjOS6uueahOenjeexu1xyXG4gICAgICAgIHRoaXMuZHJvcEdvbGRDb3VudCA9IGRyb3BHb2xkQ291bnQ7IC8v5pWM5Lq655qE5o6J6JC955qE6YeR5biB5pWw55uuIFxyXG4gICAgfVxyXG59O1xyXG5AY2NjbGFzcygnRW5lbXlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ1JlczogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteXNQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZU1heEVuZW15Q291bnQgPSAwOyAvL+W9k+WJjeazouasoeacgOWkp+eahOaVjOS6uuaVsFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXZlRGF0YToge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0UG9zTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJvc3NzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlCdWxsZXRQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdOyAvL+aVjOS6uueahOWtkOW8uemihOWItuS9k+eahOWIl+ihqFxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsOyAvL+aJgOacieeahOazouasoeeahOaVjOS6uumDveWinuWKoOWujOavleeahOWbnuiwg1xyXG4gICAgcHJpdmF0ZSBhbGxFbmVteURlYWRDYiA9IG51bGw7IC8v5omA5pyJ55qE5pWM5Lq66YO95q275LqG55qE5Zue6LCDIFxyXG4gICAgcHJpdmF0ZSBib29zSXNMaXZlID0gZmFsc2U7IC8vYm9zc+i/mOa0u+edgO+8n1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q6IERlYWRFbmVteU9ialtdID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlDb250cm9sbGVyTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0FkZGVkQm9zczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb25Bc3NldDogSnNvbkFzc2V0ID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJkZXN0cm95LWFsbC1lbmVteVwiLCAoY2IpID0+IHtcclxuICAgICAgICAgICAgLy/liKDpmaTlvZPliY3nmoTmiYDmnInmlYzkurpcclxuICAgICAgICAgICAgbGV0IHRvdGFsR29sZCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIHRvdGFsR29sZCArPSBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKHRvdGFsR29sZCk7IC8v6ZSA5q+B55qE5pWM5Lq655qEIOaMgeacieeahOmHkeW4geS4quaVsFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiaW5pdC1sZXZlbC1sYWJlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW0sIDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYm9zcy1zaG9vdC1vbmUtZWdnXCIsIHRoaXMuYm9zc1Nob290T25lRWdnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlbW92ZS1lbmVteS1pbi1saXN0XCIsIHRoaXMucmVtb3ZlRW5lbXlJbkxpc3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicHVzaC1vbmUtZW5lbXktZGVhZC1kYXRhXCIsIHRoaXMucHVzaE9uZUVuZW15RGVhZERhdGEuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUgPSBmaW5kKFwiQ2FudmFzXCIpO1xyXG5cclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyAgICAgLy8gaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA+PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXQtb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtb25lLWJvc3NcIilcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSB0aGlzLndhdmVEYXRhW1wiRW5lbXlUeXBlXCJdW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgLy8gICAgIC8vIC8vIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24gPSB0aGlzLndhdmVEYXRhWydBZGRFbmVteUR1cmFjdGlvbiddW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGlmICh0aGlzLmFsbFdhdmVBZGRPdmVyQ2IpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLmFkZE9uZUJvc3NFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiKCk7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpcy5hZGRPbmVXYXZlRW5lbXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuS4gOazouaVjOS6uuWinuWKoOWujOaIkFwiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnZ2FtZS1vdmVyJykge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgfSwgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkgPyA1IDogMilcclxuICAgICAgICAvLyAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJwbGF5ZXItY2xpY2stZ2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09IFwic3RhcnQtYWRkLWVuZW15XCIpIHtcclxuICAgICAgICAgICAgICAgIC8v5byA5aeL5aKe5Yqg5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFdhdmVEYXRhID0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ107XHJcbiAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW0sIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4IDw9IGN1cnJlbnRXYXZlRGF0YS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15VHlwZUxpc3QgPSBjdXJyZW50V2F2ZURhdGFbdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteShlbmVteVR5cGVMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gY3VycmVudFdhdmVEYXRhLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15VHlwZUxpc3QgPSBjdXJyZW50V2F2ZURhdGFbdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZUJvc3NFbmVteShlbmVteVR5cGVMaXN0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgIT09IFwiZ2FtZS1sb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLXdpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1lbmQtZGlhbG9nXCIsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWdhbWUtd2luLWxheWVyXCIsIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtYm9zcy1zdGF0ZVwiKTsgLy/lop7liqBib3NzIOeahOeKtuaAgVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pWM5Lq65aKe5Yqg5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXktZW5kXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA0KVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIC8vIGZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSWNvbkFuaW0oKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlCYXNlID0gYm9zc05vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJhc2UpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15QmFzZS5wbGF5Qm9zc0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAvL+WcqOi/memHjOmcgOimgeWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNriBcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdKc29uQXNzZXQuanNvblsnTGV2ZWxfJyArIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW1dO1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZURhdGEgPSB0aGlzLkdhbWVMZXZlbENvbmZpZy5qc29uWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LXN0YXJ0LWRpYWxvZ1wiLCBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuY3VycmVudExldmVsTnVtLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5byA5aeL5a+56K+d5YaF5a655pKt5pS+57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAvLyB9LCAyLjUpXHJcblxyXG4gICAgICAgICAgICAvL+W8gOWni+eCueWHuyDloZTnmoTln7rluqfnmoQg5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1ndWlkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+eCueWHuyDlu7rpgKDloZTnmoQg5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZ3VpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInN0YXJ0LWFkZC1lbmVteVwiKTsgLy/lvIDlp4vlop7liqDmlYzkurpcclxuICAgICAgICAgICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcblxyXG4gICAgICAgIC8vIH0sIDMpO1xyXG5cclxuICAgICAgICAvLyBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgLy8gICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1lbmQtZGlhbG9nXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICAvLyAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuICAgIGNvbnRpbnVlR2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgtLTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnSnNvbkFzc2V0Lmpzb25bJ0xldmVsXycgKyBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuY3VycmVudExldmVsTnVtXTtcclxuICAgICAgICAvLyB0aGlzLndhdmVEYXRhID0gdGhpcy5HYW1lTGV2ZWxDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInN0YXJ0LWFkZC1lbmVteVwiKTtcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwic2hvdy1nYW1lLXdpbi1sYXllclwiLCB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVzaE9uZUVuZW15RGVhZERhdGEoZW5lbXlUeXBlOiBzdHJpbmcsIGhlYWx0aENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInB1c2ggb25lIGVuZW15IGRlYWQgZGF0YVwiLCBlbmVteURlYWREYXRhKTtcclxuICAgICAgICBsZXQgZW5lbXlEZWFkRGF0YSA9IG5ldyBEZWFkRW5lbXlPYmooZW5lbXlUeXBlLCBoZWFsdGhDb3VudCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hY3RpdmVFbmVteShlbmVteURlYWREYXRhLmVuZW15VHlwZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5hY3RpdmVFbmVteShlbmVteURlYWREYXRhLmVuZW15VHlwZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIGVuZW15RGVhZERhdGEuZW5lbXlUeXBlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2VtZUxvc2UoKSB7XHJcbiAgICAgICAgLy/muLjmiI/lpLHotKXkuoZcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1sb3NlXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmZvcnplblNlbGYoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIC8v5pqC5YGc5ri45oiPXHJcbiAgICAgICAgLy8gU2NoZWR1bGVyLlxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2FtZXJhRm9jdXNCb29zQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8v6L+b5YWlYm9zcyDlsZXnpLrnmoTnirbmgIFcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGVcIik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2VlbigpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSB2Myhib3NzTm9kZS5wb3NpdGlvbikuYWRkKHYzKDUsIDIsIDUpKTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZEV1bGVyQW5nbGVzID0gdjModGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzKS5hZGQodjMoMzUsIDAsIDApKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myhib3NzTm9kZS5wb3NpdGlvbi54ICsgMTAsIGJvc3NOb2RlLnBvc2l0aW9uLnkgKyA3LGJvc3NOb2RlLnBvc2l0aW9uLnogKyAxMClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjModGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uKS5hZGQoYWRkUG9zKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBldWxlckFuZ2xlcyA9IHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcztcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGFkZEFuZ2xlVmFsdWUgPSAyNTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzID0gdjMoZXVsZXJBbmdsZXMueCArIDI1LCBldWxlckFuZ2xlcy55LCBldWxlckFuZ2xlcy56KTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzXHJcbiAgICAvLyAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgLy8gICAgICAgICB0dy50bygwLjUsIHtcclxuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBlbmRQb3MsXHJcbiAgICAvLyAgICAgICAgICAgICBldWxlckFuZ2xlczogZW5kRXVsZXJBbmdsZXMsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBvcnRob0hlaWdodDogNjBcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkub3J0aG9IZWlnaHQgPSA1O1xcXHJcbiAgICAvLyAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogNiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dDYW1lcmFCYWNrQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvumVnOWktOi/lOWbnueahOWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygzMCwgNDIsIDMwKSxcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygtNDUsIDQ1LCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiAyMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkT25lQm9zc0VuZW15KGN1cnJlbnRFbmVteUxpc3Q6IE9iamVjdFtdKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKpib3NzXCIpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGN1cnJlbnRFbmVteUxpc3RbMF1bJ3R5cGUnXTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uQXNzZXQuanNvbiwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgIC8vIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5Qm9zc0VudGVyQW5pbShlbmVteU5vZGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbSgxLCB0aGlzLm5vZGUsIHBvcywgbmV3IFZlYzIoNSwgNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoZW5lbXlUeXBlTGlzdDogT2JqZWN0W10pIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gZW5lbXlUeXBlTGlzdFtpXVsnY291bnQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR5cGVMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IGVuZW15VHlwZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2ZURhdGFbJ2NvdW50J107IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHlwZUxpc3QucHVzaCh3YXZlRGF0YVsndHlwZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInR5cGUgbGlzdFwiLCB0eXBlTGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfeOAgVxyXG4gICAgICAgIGxldCByYW5kb21TdGFydEluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogaW5kZXhMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IDAgJiYgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSA9PT0gMCkge1xyXG4gICAgICAgICAgICByYW5kb21TdGFydEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50IHdhdmVcIiwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlT25lRW5lbXkgPSAoaW5kZXg6IG51bWJlciwgdHlwZTogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHJhbmRvbVN0YXJ0SW5kZXggKyBpbmRleDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCAtPSBpbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXggbGlzdCBsZW5ndGhcIiwgaW5kZXhMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3N0YXJ0SW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGluZGV4XCIsIHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gfSwgMC4xICogaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZChub2RlKSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oaW5kZXgsIHRoaXMubm9kZSwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goUHJvbWlzZS5yZXNvbHZlKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVPbmVFbmVteShpLCB0eXBlTGlzdFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAvLyAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgIC8vICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDAgJiYgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5hbGxFbmVteURlYWRDYikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYigpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsRW5lbXlEZWFkQ2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIC8vIGVuZW15QXR0YWNrZWQobnVtOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZW5lbXlBdHRhY2tlZChudW0pO1xyXG4gICAgLy8gfVxyXG4gICAgZnJvemVuQWxsRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lhrDlhrvmiYDmnInmlYzkurpcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLmVuZW0pe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLW92ZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tYWxsLWVuZW15XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBib3NzU2hvb3RPbmVFZ2coZW5lbXlOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy9ib3NzIOWPkeWwhOS6huS4gOaemum4oeibi1xyXG4gICAgICAgIGxldCBlbmVteUNvbSA9IGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICBpZiAoZW5lbXlDb20pIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldFR5cGUgPSBlbmVteUNvbS5nZXRFbmVteUJ1bGxldFR5cGUoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmlYzkurrnmoTlrZDlvLnnsbvlnovmmK8gXCIsIGJ1bGxldFR5cGUpO1xyXG4gICAgICAgICAgICAvLyDmoLnmja7mlYzkurrnmoTlrZDlvLnnsbvlnovvvIzliJ3lp4vljJbkuIDkuKrlrZDlvLlcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15QnVsbGV0UHJlZmFiTGlzdFtidWxsZXRUeXBlXSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gZW5lbXlOb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUJ1bGxldCkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uQXNzZXQuanNvbiwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19