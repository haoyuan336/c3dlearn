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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiRW5lbXlCdWxsZXQiLCJHYW1lSW5zdGFuY2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEZWFkRW5lbXlPYmoiLCJ0eXBlIiwiZHJvcEdvbGRDb3VudCIsImVuZW15VHlwZSIsIkVuZW15Q29udHJvbGxlciIsImdhbWVDb25maWciLCJjdXJyZW50V2F2ZUluZGV4Iiwid2F2ZURhdGEiLCJzdGF0ZSIsImFkZEVuZW15RHVyYWN0aW9uIiwiZW5lbXlOb2RlTGlzdCIsImN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0IiwiZW5kUG9zIiwiYWxsV2F2ZUFkZE92ZXJDYiIsImFsbEVuZW15RGVhZENiIiwiYm9vc0lzTGl2ZSIsImN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0IiwidWlDb250cm9sbGVyTm9kZSIsImlzQWRkZWRCb3NzIiwibm9kZSIsIm9uIiwiY2IiLCJ0b3RhbEdvbGQiLCJpIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImRlc3Ryb3kiLCJlbWl0IiwiZ2V0SW5zdGFuY2UiLCJnZXRQbGF5ZXJEYXRhIiwiY3VycmVudExldmVsTnVtIiwiYm9zc1Nob290T25lRWdnIiwiYmluZCIsInJlbW92ZUVuZW15SW5MaXN0IiwicHVzaE9uZUVuZW15RGVhZERhdGEiLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsInNjaGVkdWxlIiwiZ2V0U3RhdGUiLCJjdXJyZW50V2F2ZURhdGEiLCJnZXRVSUN0bE5vZGUiLCJlbmVteVR5cGVMaXN0IiwiYWRkT25lV2F2ZUVuZW15IiwiYWRkT25lQm9zc0VuZW15IiwidGhlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZ2V0R2FtZUN0bE5vZGUiLCJib3NzTm9kZSIsImVuZW15QmFzZSIsInBsYXlCb3NzRW50ZXJBbmltIiwic2NoZWR1bGVPbmNlIiwiZ2FtZUNvbmZpZ0pzb25Bc3NldCIsImFsbCIsImhlYWx0aENvdW50IiwiZW5lbXlEZWFkRGF0YSIsInB1c2giLCJyZXN1bHQiLCJhY3RpdmVFbmVteSIsInR3IiwiY2FtZXJhTm9kZSIsInRvIiwicG9zaXRpb24iLCJldWxlckFuZ2xlcyIsImNhbGwiLCJzdGFydCIsIm9ydGhvSGVpZ2h0IiwiY3VycmVudEVuZW15TGlzdCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvcyIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiZW5lbXlOb2RlIiwiYm9zc3NQcmVmYWJMaXN0IiwicGFyZW50IiwieiIsImFjdGl2ZSIsImluaXQiLCJzaG93RW5lbXlFbnRlckFuaW0iLCJwcm9taXNlTGlzdCIsIm1heEVuZW15Q291bnQiLCJ0eXBlTGlzdCIsInJhbmRvbVN0YXJ0SW5kZXgiLCJjcmVhdGVPbmVFbmVteSIsImluZGV4Iiwic3RhcnRJbmRleCIsImluZGV4VjIiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsImVuZW15c1ByZWZhYkxpc3QiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiLCJlbmVteUNvbSIsImJ1bGxldFR5cGUiLCJnZXRFbmVteUJ1bGxldFR5cGUiLCJlbmVteUJ1bGxldFByZWZhYkxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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R0QsUUFBUSxDQUFDRSxrQkFBVCxFQUFqQixDQURVLENBRVY7QUFDQTs7QUFDQSxrQkFBSXpGLElBQUksR0FBR2xDLFdBQVcsQ0FBQyxLQUFLNEgscUJBQUwsQ0FBMkJGLFVBQTNCLENBQUQsQ0FBdEI7QUFDQXhGLGNBQUFBLElBQUksQ0FBQ29FLE1BQUwsR0FBYyxLQUFLcEUsSUFBbkI7QUFDQUEsY0FBQUEsSUFBSSxDQUFDZ0QsUUFBTCxHQUFnQmtCLFNBQVMsQ0FBQ2xCLFFBQTFCO0FBQ0FoRCxjQUFBQSxJQUFJLENBQUNNLFlBQUw7QUFBQTtBQUFBLDhDQUErQmlFLElBQS9CLENBQW9DLEtBQUtqQyxtQkFBTCxDQUF5QnBCLElBQTdELEVBQW1FLEtBQUt6QixNQUF4RTtBQUNIO0FBQ0o7Ozs2Q0FDa0I7QUFDZixtQkFBTyxLQUFLSSw2QkFBWjtBQUNIOzs7O1FBaGdCZ0NuQyxTOzs7OztpQkFHQyxJOzs7Ozs7O2lCQUdFLEU7Ozs7Ozs7aUJBWUYsRTs7Ozs7OztpQkFNRyxJOzs7Ozs7O2lCQUdYLEk7Ozs7Ozs7aUJBRVMsRTs7Ozs7OztpQkFJTSxFOzs7Ozs7O2lCQWtCRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBKc29uQXNzZXQsIFByZWZhYiwgaW5zdGFudGlhdGUsIHYzLCBWZWMyLCBUd2VlbiwgcmFuZG9tLCBWZWMzLCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIHByb2ZpbGVyLCBpc1ZhbGlkLCBTY2hlZHVsZXIsIEdhbWUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbi8vIGltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgRW5lbXlCdWxsZXQgfSBmcm9tICcuL0VuZW15cy9FbmVteUJ1bGxldCc7XHJcbmltcG9ydCB7IEdhbWVJbnN0YW5jZSB9IGZyb20gJy4vR2FtZUluc3RhbmNlJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBEZWFkRW5lbXlPYmoge1xyXG4gICAgLy/mrbvljrvmlYzkurrnmoTnu5PmnoTkvZNcclxuICAgIHB1YmxpYyBlbmVteVR5cGUgPSBcIlwiO1xyXG4gICAgcHVibGljIGRyb3BHb2xkQ291bnQgPSAwO1xyXG4gICAgLy8gcHVibGljIGVuZW15SWNvblNwcml0ZUZyYW1lID0gMDsgLy/mlYzkurrnmoRpY29uXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkcm9wR29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVuZW15VHlwZSA9IHR5cGU7IC8v5pWM5Lq655qE56eN57G7XHJcbiAgICAgICAgdGhpcy5kcm9wR29sZENvdW50ID0gZHJvcEdvbGRDb3VudDsgLy/mlYzkurrnmoTmjonokL3nmoTph5HluIHmlbDnm64gXHJcbiAgICB9XHJcbn07XHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYm9zc3NQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUJ1bGxldFByZWZhYkxpc3Q6IFByZWZhYltdID0gW107IC8v5pWM5Lq655qE5a2Q5by56aKE5Yi25L2T55qE5YiX6KGoXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvLyBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7IC8v5omA5pyJ55qE5rOi5qyh55qE5pWM5Lq66YO95aKe5Yqg5a6M5q+V55qE5Zue6LCDXHJcbiAgICBwcml2YXRlIGFsbEVuZW15RGVhZENiID0gbnVsbDsgLy/miYDmnInnmoTmlYzkurrpg73mrbvkuobnmoTlm57osIMgXHJcbiAgICBwcml2YXRlIGJvb3NJc0xpdmUgPSBmYWxzZTsgLy9ib3Nz6L+Y5rS7552A77yfXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDogRGVhZEVuZW15T2JqW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzQWRkZWRCb3NzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbkFzc2V0OiBKc29uQXNzZXQgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChjYikgPT4ge1xyXG4gICAgICAgICAgICAvL+WIoOmZpOW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICBsZXQgdG90YWxHb2xkID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgdG90YWxHb2xkICs9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IodG90YWxHb2xkKTsgLy/plIDmr4HnmoTmlYzkurrnmoQg5oyB5pyJ55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0LWxldmVsLWxhYmVsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSwgMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJib3NzLXNob290LW9uZS1lZ2dcIiwgdGhpcy5ib3NzU2hvb3RPbmVFZ2cuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVtb3ZlLWVuZW15LWluLWxpc3RcIiwgdGhpcy5yZW1vdmVFbmVteUluTGlzdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJwdXNoLW9uZS1lbmVteS1kZWFkLWRhdGFcIiwgdGhpcy5wdXNoT25lRW5lbXlEZWFkRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZSA9IGZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbmZpZ1Jlcy5qc29uO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIiwgKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAvLyBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID49IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVtdC1vdmVyXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1vbmUtYm9zc1wiKVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IHRoaXMud2F2ZURhdGFbXCJFbmVteVR5cGVcIl1bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5hZGRFbmVteUR1cmFjdGlvbiA9IHRoaXMud2F2ZURhdGFbJ0FkZEVuZW15RHVyYWN0aW9uJ11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAvLyAgICAgLy8gaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgaWYgKHRoaXMuYWxsV2F2ZUFkZE92ZXJDYikge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMuYWRkT25lQm9zc0VuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IoKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiA5rOi5pWM5Lq65aKe5Yqg5a6M5oiQXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdnYW1lLW92ZXInKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB9LCAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSA/IDUgOiAyKVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gXCJzdGFydC1hZGQtZW5lbXlcIikge1xyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vlop7liqDmlYzkurpcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50V2F2ZURhdGEgPSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPD0gY3VycmVudFdhdmVEYXRhLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlUeXBlTGlzdCA9IGN1cnJlbnRXYXZlRGF0YVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KGVuZW15VHlwZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSBjdXJyZW50V2F2ZURhdGEubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlUeXBlTGlzdCA9IGN1cnJlbnRXYXZlRGF0YVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lQm9zc0VuZW15KGVuZW15VHlwZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0gXCJnYW1lLWxvc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImdhbWUtd2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWVuZC1kaWFsb2dcIiwgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInNob3ctZ2FtZS13aW4tbGF5ZXJcIiwgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1ib3NzLXN0YXRlXCIpOyAvL+WinuWKoGJvc3Mg55qE54q25oCBXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlYzkurrlop7liqDlrozmr5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVteS1lbmRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDQpXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJvc3NFbnRlckFuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgLy8gZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2hvd0Jvc3NJY29uQW5pbSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteUJhc2UgPSBib3NzTm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICAgICAgaWYgKGVuZW15QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlCYXNlLnBsYXlCb3NzRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIC8v5Zyo6L+Z6YeM6ZyA6KaB5Yid5aeL5YyW5LiA5Lqb5ri45oiP5pWw5o2uIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25Bc3NldC5qc29uWydMZXZlbF8nICsgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bV07XHJcbiAgICAgICAgLy8gdGhpcy53YXZlRGF0YSA9IHRoaXMuR2FtZUxldmVsQ29uZmlnLmpzb25bJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuY3VycmVudExldmVsTnVtLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctc3RhcnQtZGlhbG9nXCIsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW0sICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvIDlp4vlr7nor53lhoXlrrnmkq3mlL7nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgIC8vIH0sIDIuNSlcclxuXHJcbiAgICAgICAgICAgIC8v5byA5aeL54K55Ye7IOWhlOeahOWfuuW6p+eahCDlvJXlr7zmk43kvZxcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWd1aWRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5byA5aeL54K55Ye7IOW7uumAoOWhlOeahCDlvJXlr7zmk43kvZxcclxuICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1ndWlkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwic3RhcnQtYWRkLWVuZW15XCIpOyAvL+W8gOWni+WinuWKoOaVjOS6ulxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuXHJcbiAgICAgICAgLy8gfSwgMyk7XHJcblxyXG4gICAgICAgIC8vIFByb21pc2UuYWxsKFtcclxuICAgICAgICAvLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWVuZC1kaWFsb2dcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG5cclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgY29udGludWVHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleC0tO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdKc29uQXNzZXQuanNvblsnTGV2ZWxfJyArIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW1dO1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZURhdGEgPSB0aGlzLkdhbWVMZXZlbENvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwic3RhcnQtYWRkLWVuZW15XCIpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWdhbWUtd2luLWxheWVyXCIsIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdXNoT25lRW5lbXlEZWFkRGF0YShlbmVteVR5cGU6IHN0cmluZywgaGVhbHRoQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHVzaCBvbmUgZW5lbXkgZGVhZCBkYXRhXCIsIGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIGxldCBlbmVteURlYWREYXRhID0gbmV3IERlYWRFbmVteU9iaihlbmVteVR5cGUsIGhlYWx0aENvdW50KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0LnB1c2goZW5lbXlEZWFkRGF0YSk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFjdGl2ZUVuZW15KGVuZW15RGVhZERhdGEuZW5lbXlUeXBlKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmFjdGl2ZUVuZW15KGVuZW15RGVhZERhdGEuZW5lbXlUeXBlKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1lbmVteS1pbmZvLWNlbGxcIiwgZW5lbXlEZWFkRGF0YS5lbmVteVR5cGUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZW1lTG9zZSgpIHtcclxuICAgICAgICAvL+a4uOaIj+Wksei0peS6hlxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIC8v5pqC5YGc5ri45oiPXHJcbiAgICAgICAgLy8gU2NoZWR1bGVyLlxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2FtZXJhRm9jdXNCb29zQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8v6L+b5YWlYm9zcyDlsZXnpLrnmoTnirbmgIFcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGVcIik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2VlbigpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSB2Myhib3NzTm9kZS5wb3NpdGlvbikuYWRkKHYzKDUsIDIsIDUpKTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZEV1bGVyQW5nbGVzID0gdjModGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzKS5hZGQodjMoMzUsIDAsIDApKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myhib3NzTm9kZS5wb3NpdGlvbi54ICsgMTAsIGJvc3NOb2RlLnBvc2l0aW9uLnkgKyA3LGJvc3NOb2RlLnBvc2l0aW9uLnogKyAxMClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjModGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uKS5hZGQoYWRkUG9zKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBldWxlckFuZ2xlcyA9IHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcztcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGFkZEFuZ2xlVmFsdWUgPSAyNTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzID0gdjMoZXVsZXJBbmdsZXMueCArIDI1LCBldWxlckFuZ2xlcy55LCBldWxlckFuZ2xlcy56KTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzXHJcbiAgICAvLyAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgLy8gICAgICAgICB0dy50bygwLjUsIHtcclxuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBlbmRQb3MsXHJcbiAgICAvLyAgICAgICAgICAgICBldWxlckFuZ2xlczogZW5kRXVsZXJBbmdsZXMsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBvcnRob0hlaWdodDogNjBcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkub3J0aG9IZWlnaHQgPSA1O1xcXHJcbiAgICAvLyAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogNiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dDYW1lcmFCYWNrQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvumVnOWktOi/lOWbnueahOWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygzMCwgNDIsIDMwKSxcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygtNDUsIDQ1LCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiAyMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkT25lQm9zc0VuZW15KGN1cnJlbnRFbmVteUxpc3Q6IE9iamVjdFtdKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKpib3NzXCIpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGN1cnJlbnRFbmVteUxpc3RbMF1bJ3R5cGUnXTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uQXNzZXQuanNvbiwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgIC8vIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5Qm9zc0VudGVyQW5pbShlbmVteU5vZGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbSgxLCB0aGlzLm5vZGUsIHBvcywgbmV3IFZlYzIoNSwgNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoZW5lbXlUeXBlTGlzdDogT2JqZWN0W10pIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gZW5lbXlUeXBlTGlzdFtpXVsnY291bnQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR5cGVMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IGVuZW15VHlwZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2ZURhdGFbJ2NvdW50J107IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHlwZUxpc3QucHVzaCh3YXZlRGF0YVsndHlwZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInR5cGUgbGlzdFwiLCB0eXBlTGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfeOAgVxyXG4gICAgICAgIGxldCByYW5kb21TdGFydEluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogaW5kZXhMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IDAgJiYgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSA9PT0gMCkge1xyXG4gICAgICAgICAgICByYW5kb21TdGFydEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50IHdhdmVcIiwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlT25lRW5lbXkgPSAoaW5kZXg6IG51bWJlciwgdHlwZTogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHJhbmRvbVN0YXJ0SW5kZXggKyBpbmRleDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCAtPSBpbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXggbGlzdCBsZW5ndGhcIiwgaW5kZXhMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3N0YXJ0SW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGluZGV4XCIsIHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gfSwgMC4xICogaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZChub2RlKSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oaW5kZXgsIHRoaXMubm9kZSwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goUHJvbWlzZS5yZXNvbHZlKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVPbmVFbmVteShpLCB0eXBlTGlzdFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAvLyAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgIC8vICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDAgJiYgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5hbGxFbmVteURlYWRDYikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYigpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsRW5lbXlEZWFkQ2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIC8vIGVuZW15QXR0YWNrZWQobnVtOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZW5lbXlBdHRhY2tlZChudW0pO1xyXG4gICAgLy8gfVxyXG4gICAgZnJvemVuQWxsRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lhrDlhrvmiYDmnInmlYzkurpcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLmVuZW0pe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLW92ZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tYWxsLWVuZW15XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBib3NzU2hvb3RPbmVFZ2coZW5lbXlOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy9ib3NzIOWPkeWwhOS6huS4gOaemum4oeibi1xyXG4gICAgICAgIGxldCBlbmVteUNvbSA9IGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICBpZiAoZW5lbXlDb20pIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldFR5cGUgPSBlbmVteUNvbS5nZXRFbmVteUJ1bGxldFR5cGUoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmlYzkurrnmoTlrZDlvLnnsbvlnovmmK8gXCIsIGJ1bGxldFR5cGUpO1xyXG4gICAgICAgICAgICAvLyDmoLnmja7mlYzkurrnmoTlrZDlvLnnsbvlnovvvIzliJ3lp4vljJbkuIDkuKrlrZDlvLlcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15QnVsbGV0UHJlZmFiTGlzdFtidWxsZXRUeXBlXSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gZW5lbXlOb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUJ1bGxldCkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uQXNzZXQuanNvbiwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19