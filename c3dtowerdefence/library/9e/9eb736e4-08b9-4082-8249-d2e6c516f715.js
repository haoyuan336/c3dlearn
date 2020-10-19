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
            // console.log("push one enemy dead data", enemyDeadData);
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
            } // console.log("type list", typeList);
            // console.log("max enemy count", maxEnemyCount);
            // if (maxEnemyCount >= indexList.length) {
            //     console.error("数据错误");
            //     return;
            // }、


            var randomStartIndex = Math.round(Math.random() * indexList.length);

            if (this.currentWaveIndex === 0 && this.gameController.getCurrentLevelNum() === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJ1bGxldCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJnYW1lQ29udHJvbGxlciIsImFsbFdhdmVBZGRPdmVyQ2IiLCJhbGxFbmVteURlYWRDYiIsImJvb3NJc0xpdmUiLCJjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCIsInVpQ29udHJvbGxlck5vZGUiLCJpc0FkZGVkQm9zcyIsIm5vZGUiLCJvbiIsImNiIiwidG90YWxHb2xkIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJkZXN0cm95IiwiZW1pdCIsImdldEN1cnJlbnRMZXZlbE51bSIsImdhbWVDb25maWdSZXMiLCJqc29uIiwic2NoZWR1bGUiLCJnZXRTdGF0ZSIsImN1cnJlbnRXYXZlRGF0YSIsImVuZW15VHlwZUxpc3QiLCJhZGRPbmVXYXZlRW5lbXkiLCJhZGRPbmVCb3NzRW5lbXkiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJnYW1lV2luIiwiYm9zc05vZGUiLCJlbmVteUJhc2UiLCJwbGF5Qm9zc0VudGVyQW5pbSIsInNjaGVkdWxlT25jZSIsImFsbCIsImVuZW15RGVhZERhdGEiLCJwdXNoIiwicGxheWVyRGF0YSIsImFjdGl2ZUVuZW15IiwidHciLCJjYW1lcmFOb2RlIiwidG8iLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiY2FsbCIsInN0YXJ0Iiwib3J0aG9IZWlnaHQiLCJjdXJyZW50RW5lbXlMaXN0IiwiaW5kZXhMaXN0IiwiZ2V0SW5FZGFnZUluZGV4TGlzdCIsInJhbmRvbUluZGV4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zIiwibm9kZU1hcExpc3QiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwieCIsInkiLCJlbmVteU5vZGUiLCJib3Nzc1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJ6IiwiYWN0aXZlIiwiaW5pdCIsInNob3dFbmVteUVudGVyQW5pbSIsInByb21pc2VMaXN0IiwibWF4RW5lbXlDb3VudCIsInR5cGVMaXN0IiwicmFuZG9tU3RhcnRJbmRleCIsImNyZWF0ZU9uZUVuZW15IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15IiwidXVpZCIsInNwbGljZSIsIm51bSIsImVuZW15QXR0YWNrZWQiLCJlbmVteUNvbSIsImJ1bGxldFR5cGUiLCJnZXRFbmVteUJ1bGxldFR5cGUiLCJlbmVteUJ1bGxldFByZWZhYkxpc3QiLCJnZXRHYW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFB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LGdCQUFJMEUsUUFBSixFQUFjO0FBQ1Ysa0JBQUlDLFVBQVUsR0FBR0QsUUFBUSxDQUFDRSxrQkFBVCxFQUFqQixDQURVLENBRVY7QUFDQTs7QUFDQSxrQkFBSWxGLElBQUksR0FBR25DLFdBQVcsQ0FBQyxLQUFLc0gscUJBQUwsQ0FBMkJGLFVBQTNCLENBQUQsQ0FBdEI7QUFDQWpGLGNBQUFBLElBQUksQ0FBQzJELE1BQUwsR0FBYyxLQUFLM0QsSUFBbkI7QUFDQUEsY0FBQUEsSUFBSSxDQUFDdUMsUUFBTCxHQUFnQmtCLFNBQVMsQ0FBQ2xCLFFBQTFCO0FBQ0F2QyxjQUFBQSxJQUFJLENBQUNNLFlBQUw7QUFBQTtBQUFBLDhDQUErQndELElBQS9CLENBQW9DLEtBQUtyRSxjQUFMLENBQW9CMkYsYUFBcEIsR0FBb0N4RSxJQUF4RSxFQUE4RSxLQUFLbkIsY0FBbkYsRUFBbUcsS0FBS0QsTUFBeEc7QUFDSDtBQUNKOzs7NkNBQ2tCO0FBQ2YsbUJBQU8sS0FBS0ssNkJBQVo7QUFDSDs7OztRQXZmZ0NwQyxTOzs7OztpQkFHQyxJOzs7Ozs7O2lCQUdFLEU7Ozs7Ozs7aUJBWUYsRTs7Ozs7OztpQkFNRyxJOzs7Ozs7O2lCQUdYLEk7Ozs7Ozs7aUJBRVMsRTs7Ozs7OztpQkFJTSxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBKc29uQXNzZXQsIFByZWZhYiwgaW5zdGFudGlhdGUsIHYzLCBWZWMyLCBUd2VlbiwgcmFuZG9tLCBWZWMzLCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIHByb2ZpbGVyLCBpc1ZhbGlkLCBTY2hlZHVsZXIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgRW5lbXlCdWxsZXQgfSBmcm9tICcuL0VuZW15cy9FbmVteUJ1bGxldCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5leHBvcnQgY2xhc3MgRGVhZEVuZW15T2JqIHtcclxuICAgIC8v5q275Y675pWM5Lq655qE57uT5p6E5L2TXHJcbiAgICBwdWJsaWMgZW5lbXlUeXBlID0gXCJcIjtcclxuICAgIHB1YmxpYyBkcm9wR29sZENvdW50ID0gMDtcclxuICAgIC8vIHB1YmxpYyBlbmVteUljb25TcHJpdGVGcmFtZSA9IDA7IC8v5pWM5Lq655qEaWNvblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZHJvcEdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteVR5cGUgPSB0eXBlOyAvL+aVjOS6uueahOenjeexu1xyXG4gICAgICAgIHRoaXMuZHJvcEdvbGRDb3VudCA9IGRyb3BHb2xkQ291bnQ7IC8v5pWM5Lq655qE5o6J6JC955qE6YeR5biB5pWw55uuIFxyXG4gICAgfVxyXG59O1xyXG5AY2NjbGFzcygnRW5lbXlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ1JlczogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteXNQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZU1heEVuZW15Q291bnQgPSAwOyAvL+W9k+WJjeazouasoeacgOWkp+eahOaVjOS6uuaVsFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXZlRGF0YToge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0UG9zTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJvc3NzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlCdWxsZXRQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdOyAvL+aVjOS6uueahOWtkOW8uemihOWItuS9k+eahOWIl+ihqFxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsOyAvL+aJgOacieeahOazouasoeeahOaVjOS6uumDveWinuWKoOWujOavleeahOWbnuiwg1xyXG4gICAgcHJpdmF0ZSBhbGxFbmVteURlYWRDYiA9IG51bGw7IC8v5omA5pyJ55qE5pWM5Lq66YO95q275LqG55qE5Zue6LCDIFxyXG4gICAgcHJpdmF0ZSBib29zSXNMaXZlID0gZmFsc2U7IC8vYm9zc+i/mOa0u+edgO+8n1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q6IERlYWRFbmVteU9ialtdID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlDb250cm9sbGVyTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0FkZGVkQm9zczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBKc29uQXNzZXR9KVxyXG4gICAgLy8gcHVibGljIEdhbWVMZXZlbENvbmZpZzogSnNvbkFzc2V0ID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJkZXN0cm95LWFsbC1lbmVteVwiLCAoY2IpID0+IHtcclxuICAgICAgICAgICAgLy/liKDpmaTlvZPliY3nmoTmiYDmnInmlYzkurpcclxuICAgICAgICAgICAgbGV0IHRvdGFsR29sZCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIHRvdGFsR29sZCArPSBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKHRvdGFsR29sZCk7IC8v6ZSA5q+B55qE5pWM5Lq655qEIOaMgeacieeahOmHkeW4geS4quaVsFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiaW5pdC1sZXZlbC1sYWJlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksIDApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUgPSBmaW5kKFwiQ2FudmFzXCIpO1xyXG5cclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyAgICAgLy8gaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA+PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXQtb3ZlclwiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtb25lLWJvc3NcIilcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSB0aGlzLndhdmVEYXRhW1wiRW5lbXlUeXBlXCJdW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgLy8gICAgIC8vIC8vIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24gPSB0aGlzLndhdmVEYXRhWydBZGRFbmVteUR1cmFjdGlvbiddW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGlmICh0aGlzLmFsbFdhdmVBZGRPdmVyQ2IpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLmFkZE9uZUJvc3NFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiKCk7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpcy5hZGRPbmVXYXZlRW5lbXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuS4gOazouaVjOS6uuWinuWKoOWujOaIkFwiKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnZ2FtZS1vdmVyJykge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgfSwgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkgPyA1IDogMilcclxuICAgICAgICAvLyAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJwbGF5ZXItY2xpY2stZ2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09IFwic3RhcnQtYWRkLWVuZW15XCIpIHtcclxuICAgICAgICAgICAgICAgIC8v5byA5aeL5aKe5Yqg5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFdhdmVEYXRhID0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA8PSBjdXJyZW50V2F2ZURhdGEubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteVR5cGVMaXN0ID0gY3VycmVudFdhdmVEYXRhW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVXYXZlRW5lbXkoZW5lbXlUeXBlTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IGN1cnJlbnRXYXZlRGF0YS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteVR5cGVMaXN0ID0gY3VycmVudFdhdmVEYXRhW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoZW5lbXlUeXBlTGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSBcImdhbWUtbG9zZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS13aW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZW5kLWRpYWxvZ1wiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtYm9zcy1zdGF0ZVwiKTsgLy/lop7liqBib3NzIOeahOeKtuaAgVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pWM5Lq65aKe5Yqg5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXktZW5kXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA0KVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIC8vIGZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSWNvbkFuaW0oKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlCYXNlID0gYm9zc05vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJhc2UpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15QmFzZS5wbGF5Qm9zc0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAvL+WcqOi/memHjOmcgOimgeWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNriBcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuICAgICAgICAvLyB0aGlzLndhdmVEYXRhID0gdGhpcy5HYW1lTGV2ZWxDb25maWcuanNvblsnTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1zdGFydC1kaWFsb2dcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW8gOWni+WvueivneWGheWuueaSreaUvue7k+adn1wiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgLy8gfSwgMi41KVxyXG5cclxuICAgICAgICAgICAgLy/lvIDlp4vngrnlh7sg5aGU55qE5Z+65bqn55qEIOW8leWvvOaTjeS9nFxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZ3VpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vngrnlh7sg5bu66YCg5aGU55qEIOW8leWvvOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWd1aWRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzdGFydC1hZGQtZW5lbXlcIik7IC8v5byA5aeL5aKe5Yqg5pWM5Lq6XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG5cclxuICAgICAgICAvLyB9LCAzKTtcclxuXHJcbiAgICAgICAgLy8gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIC8vICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZW5kLWRpYWxvZ1wiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcblxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICBjb250aW51ZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4LS07XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZURhdGEgPSB0aGlzLkdhbWVMZXZlbENvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwic3RhcnQtYWRkLWVuZW15XCIpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdXNoT25lRW5lbXlEZWFkRGF0YShlbmVteURlYWREYXRhOiBEZWFkRW5lbXlPYmopIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInB1c2ggb25lIGVuZW15IGRlYWQgZGF0YVwiLCBlbmVteURlYWREYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hY3RpdmVFbmVteShlbmVteURlYWREYXRhLmVuZW15VHlwZSk7XHJcbiAgICB9XHJcbiAgICBnZW1lTG9zZSgpIHtcclxuICAgICAgICAvL+a4uOaIj+Wksei0peS6hlxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIC8v5pqC5YGc5ri45oiPXHJcbiAgICAgICAgLy8gU2NoZWR1bGVyLlxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2FtZXJhRm9jdXNCb29zQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8v6L+b5YWlYm9zcyDlsZXnpLrnmoTnirbmgIFcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGVcIik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2VlbigpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSB2Myhib3NzTm9kZS5wb3NpdGlvbikuYWRkKHYzKDUsIDIsIDUpKTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZEV1bGVyQW5nbGVzID0gdjModGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzKS5hZGQodjMoMzUsIDAsIDApKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myhib3NzTm9kZS5wb3NpdGlvbi54ICsgMTAsIGJvc3NOb2RlLnBvc2l0aW9uLnkgKyA3LGJvc3NOb2RlLnBvc2l0aW9uLnogKyAxMClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjModGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uKS5hZGQoYWRkUG9zKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBldWxlckFuZ2xlcyA9IHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcztcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGFkZEFuZ2xlVmFsdWUgPSAyNTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzID0gdjMoZXVsZXJBbmdsZXMueCArIDI1LCBldWxlckFuZ2xlcy55LCBldWxlckFuZ2xlcy56KTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzXHJcbiAgICAvLyAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgLy8gICAgICAgICB0dy50bygwLjUsIHtcclxuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBlbmRQb3MsXHJcbiAgICAvLyAgICAgICAgICAgICBldWxlckFuZ2xlczogZW5kRXVsZXJBbmdsZXMsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBvcnRob0hlaWdodDogNjBcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkub3J0aG9IZWlnaHQgPSA1O1xcXHJcbiAgICAvLyAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogNiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dDYW1lcmFCYWNrQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvumVnOWktOi/lOWbnueahOWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygzMCwgNDIsIDMwKSxcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygtNDUsIDQ1LCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiAyMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkT25lQm9zc0VuZW15KGN1cnJlbnRFbmVteUxpc3Q6IE9iamVjdFtdKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKpib3NzXCIpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGN1cnJlbnRFbmVteUxpc3RbMF1bJ3R5cGUnXTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUJvc3NFbnRlckFuaW0oZW5lbXlOb2RlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oMSwgdGhpcywgcG9zLCBuZXcgVmVjMig1LCA1KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgNSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZVdhdmVFbmVteShlbmVteVR5cGVMaXN0OiBPYmplY3RbXSkge1xyXG4gICAgICAgIC8v5aKe5Yqg5LiA5rOi5pWM5Lq6XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBtYXhFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWF4RW5lbXlDb3VudCArPSBlbmVteVR5cGVMaXN0W2ldWydjb3VudCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHlwZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gZW5lbXlUeXBlTGlzdFtpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YXZlRGF0YVsnY291bnQnXTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlTGlzdC5wdXNoKHdhdmVEYXRhWyd0eXBlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHlwZSBsaXN0XCIsIHR5cGVMaXN0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heCBlbmVteSBjb3VudFwiLCBtYXhFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBpZiAobWF4RW5lbXlDb3VudCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCLmlbDmja7plJnor69cIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB944CBXHJcbiAgICAgICAgbGV0IHJhbmRvbVN0YXJ0SW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBpbmRleExpc3QubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gMCAmJiB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbVN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgd2F2ZVwiLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudCBsZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVPbmVFbmVteSA9IChpbmRleDogbnVtYmVyLCB0eXBlOiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gcmFuZG9tU3RhcnRJbmRleCArIGluZGV4O1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4IC09IGluZGV4TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRleCBsaXN0IGxlbmd0aFwiLCBpbmRleExpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3Rbc3RhcnRJbmRleF07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgaW5kZXhcIiwgc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAvLyB9LCAwLjEgKiBpbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKG5vZGUpICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShpbmRleCwgdGhpcywgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goUHJvbWlzZS5yZXNvbHZlKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVPbmVFbmVteShpLCB0eXBlTGlzdFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAvLyAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgIC8vICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDAgJiYgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5hbGxFbmVteURlYWRDYikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYigpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsRW5lbXlEZWFkQ2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIGVuZW15QXR0YWNrZWQobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZW5lbXlBdHRhY2tlZChudW0pO1xyXG4gICAgfVxyXG4gICAgZnJvemVuQWxsRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lhrDlhrvmiYDmnInmlYzkurpcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLmVuZW0pe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLW92ZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tYWxsLWVuZW15XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBib3NzU2hvb3RPbmVFZ2coZW5lbXlOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy9ib3NzIOWPkeWwhOS6huS4gOaemum4oeibi1xyXG4gICAgICAgIGxldCBlbmVteUNvbSA9IGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICBpZiAoZW5lbXlDb20pIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldFR5cGUgPSBlbmVteUNvbS5nZXRFbmVteUJ1bGxldFR5cGUoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmlYzkurrnmoTlrZDlvLnnsbvlnovmmK8gXCIsIGJ1bGxldFR5cGUpO1xyXG4gICAgICAgICAgICAvLyDmoLnmja7mlYzkurrnmoTlrZDlvLnnsbvlnovvvIzliJ3lp4vljJbkuIDkuKrlrZDlvLlcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15QnVsbGV0UHJlZmFiTGlzdFtidWxsZXRUeXBlXSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gZW5lbXlOb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUJ1bGxldCkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyLCB0aGlzLmVuZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0RGVhZEVuZW15RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDtcclxuICAgIH1cclxufVxyXG4iXX0=