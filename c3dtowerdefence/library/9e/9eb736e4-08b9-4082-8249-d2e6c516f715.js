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
            this.endPos = v3(0, 0, 0);
            this.state.addState("enter-next-wave", function () {
              if (_this3.currentWaveIndex == _this3.waveData['EnemyType'].length) {
                // this.state.setState("add-enemt-over");
                // this.state.setState("add-one-boss")
                // console.log("游戏结束");
                return;
              }

              _this3.currentRandomEnemyTypeList = _this3.waveData["EnemyType"][_this3.currentWaveIndex];
              _this3.addEnemyDuraction = _this3.waveData['AddEnemyDuraction'][_this3.currentWaveIndex];

              _this3.node.emit("refer-current-wave-level", _this3.gameController.getCurrentLevelNum(), _this3.currentWaveIndex);

              if (_this3.currentWaveIndex === _this3.waveData['EnemyType'].length - 1) {
                if (_this3.allWaveAddOverCb) {
                  _this3.allWaveAddOverCb();

                  _this3.allWaveAddOverCb = null;

                  _this3.addOneBossEnemy();
                }
              } else {
                _this3.addOneWaveEnemy().then(function () {
                  console.log("一波敌人增加完成");
                  _this3.currentWaveIndex++;

                  _this3.scheduleOnce(function () {
                    if (_this3.state.getState() === 'game-over') {
                      return;
                    }

                    _this3.state.setState("enter-next-wave");
                  }, _this3.addEnemyDuraction);
                });
              }
            }); // this.node.on("player-click-game", () => {
            //     this.state.setState("enter-next-wave");
            // });
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
                    _this5.state.setState("enter-next-wave");
                  }, 2.5);
                });
              });
            }); // this.scheduleOnce(() => {
            // this.state.setState("enter-next-wave");
            // }, 3);

            Promise.all([new Promise(function (resolve, reject) {
              _this5.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this5.allEnemyDeadCb = resolve;
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

            this.state.setState("enter-next-wave");
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
          value: function addOneBossEnemy() {
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
            var type = this.currentRandomEnemyTypeList[0].type;
            var enemyNode = instantiate(this.bosssPrefabList[type]); // console.log("enemy node", enemyNode)

            enemyNode.parent = this.node;
            enemyNode.position = v3(node.position.x, 0, node.position.z);
            enemyNode.active = false;
            enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
            // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
            // addEnemyCount++;

            this.enemyNodeList.push(enemyNode);
            return new Promise(function (resolve, reject) {
              resolve(); // enemyNode.active = false;
            }).then(function () {//展示boss 出场界面 
              // return this.showCameraFocusBoosAnim(enemyNode)
              // return
            }).then(function () {
              return _this8.playBossEnterAnim(enemyNode);
            }).then(function () {// return this.showCameraBackAnim();
            }).then(function () {
              //敌人继续播放行走动画
              // return new Promise((resolve) => {
              //     this.scheduleOnce(() => {
              _this8.node.emit("enter-continue-play-move-anim"); //         resolve();
              //     }, 3)
              // })

            }).then(function () {
              enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).showEnemyEnterAnim(1, _this8, pos, new Vec2(5, 5));
            });
          }
        }, {
          key: "addOneWaveEnemy",
          value: function addOneWaveEnemy() {
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

            for (var i = 0; i < this.currentRandomEnemyTypeList.length; i++) {
              maxEnemyCount += this.currentRandomEnemyTypeList[i].count;
            }

            var typeList = [];

            for (var _i = 0; _i < this.currentRandomEnemyTypeList.length; _i++) {
              var waveData = this.currentRandomEnemyTypeList[_i];

              for (var _i2 = 0; _i2 < waveData.count; _i2++) {
                typeList.push(waveData.type);
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

              return new Promise(function (resolve, reject) {
                var indexV2 = indexList[startIndex];
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
              });
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
            }

            if (this.enemyNodeList.length === 0 && this.currentWaveIndex == this.waveData['EnemyType'].length - 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJ1bGxldCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJnYW1lQ29udHJvbGxlciIsImFsbFdhdmVBZGRPdmVyQ2IiLCJhbGxFbmVteURlYWRDYiIsImN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0IiwidWlDb250cm9sbGVyTm9kZSIsIm5vZGUiLCJvbiIsImNiIiwidG90YWxHb2xkIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJkZXN0cm95IiwiZW1pdCIsImdldEN1cnJlbnRMZXZlbE51bSIsImdhbWVDb25maWdSZXMiLCJqc29uIiwiYWRkU3RhdGUiLCJhZGRPbmVCb3NzRW5lbXkiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInNjaGVkdWxlT25jZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJib3NzTm9kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZW5lbXlCYXNlIiwicGxheUJvc3NFbnRlckFuaW0iLCJhbGwiLCJnYW1lV2luIiwiZW5lbXlEZWFkRGF0YSIsInB1c2giLCJwbGF5ZXJEYXRhIiwiYWN0aXZlRW5lbXkiLCJ0dyIsImNhbWVyYU5vZGUiLCJ0byIsInBvc2l0aW9uIiwiZXVsZXJBbmdsZXMiLCJjYWxsIiwic3RhcnQiLCJvcnRob0hlaWdodCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvcyIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiZW5lbXlOb2RlIiwiYm9zc3NQcmVmYWJMaXN0IiwicGFyZW50IiwieiIsImFjdGl2ZSIsImluaXQiLCJzaG93RW5lbXlFbnRlckFuaW0iLCJwcm9taXNlTGlzdCIsIm1heEVuZW15Q291bnQiLCJjb3VudCIsInR5cGVMaXN0IiwicmFuZG9tU3RhcnRJbmRleCIsImNyZWF0ZU9uZUVuZW15IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15IiwidXVpZCIsInNwbGljZSIsIm51bSIsImVuZW15QXR0YWNrZWQiLCJlbmVteUNvbSIsImJ1bGxldFR5cGUiLCJnZXRFbmVteUJ1bGxldFR5cGUiLCJlbmVteUJ1bGxldFByZWZhYkxpc3QiLCJnZXRHYW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FB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Q0FBZjs7QUFDQSxnQkFBSXdFLFFBQUosRUFBYztBQUNWLGtCQUFJQyxVQUFVLEdBQUdELFFBQVEsQ0FBQ0Usa0JBQVQsRUFBakIsQ0FEVSxDQUVWO0FBQ0E7O0FBQ0Esa0JBQUloRixJQUFJLEdBQUdqQyxXQUFXLENBQUMsS0FBS2tILHFCQUFMLENBQTJCRixVQUEzQixDQUFELENBQXRCO0FBQ0EvRSxjQUFBQSxJQUFJLENBQUN3RCxNQUFMLEdBQWMsS0FBS3hELElBQW5CO0FBQ0FBLGNBQUFBLElBQUksQ0FBQ3FDLFFBQUwsR0FBZ0JpQixTQUFTLENBQUNqQixRQUExQjtBQUNBckMsY0FBQUEsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSw4Q0FBK0JxRCxJQUEvQixDQUFvQyxLQUFLaEUsY0FBTCxDQUFvQnVGLGFBQXBCLEdBQW9DdEUsSUFBeEUsRUFBOEUsS0FBS2pCLGNBQW5GLEVBQW1HLEtBQUtELE1BQXhHO0FBQ0g7QUFDSjs7OzZDQUNrQjtBQUNmLG1CQUFPLEtBQUtJLDZCQUFaO0FBQ0g7Ozs7UUExY2dDbkMsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSTs7Ozs7OztpQkFHWCxJOzs7Ozs7O2lCQUVTLEU7Ozs7Ozs7aUJBSU0sRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMywgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBwcm9maWxlciwgaXNWYWxpZCwgU2NoZWR1bGVyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBHcm91bmRUaWxlZCB9IGZyb20gJy4vR3JvdW5kVGlsZWQvR3JvdW5kVGlsZWQnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEVuZW15QnVsbGV0IH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCdWxsZXQnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIERlYWRFbmVteU9iaiB7XHJcbiAgICAvL+atu+WOu+aVjOS6uueahOe7k+aehOS9k1xyXG4gICAgcHVibGljIGVuZW15VHlwZSA9IFwiXCI7XHJcbiAgICBwdWJsaWMgZHJvcEdvbGRDb3VudCA9IDA7XHJcbiAgICAvLyBwdWJsaWMgZW5lbXlJY29uU3ByaXRlRnJhbWUgPSAwOyAvL+aVjOS6uueahGljb25cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGRyb3BHb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW5lbXlUeXBlID0gdHlwZTsgLy/mlYzkurrnmoTnp43nsbtcclxuICAgICAgICB0aGlzLmRyb3BHb2xkQ291bnQgPSBkcm9wR29sZENvdW50OyAvL+aVjOS6uueahOaOieiQveeahOmHkeW4geaVsOebriBcclxuICAgIH1cclxufTtcclxuQGNjY2xhc3MoJ0VuZW15Q29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdSZXM6IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudExldmVsTnVtID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVNYXhFbmVteUNvdW50ID0gMDsgLy/lvZPliY3ms6LmrKHmnIDlpKfnmoTmlYzkurrmlbBcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F2ZURhdGE6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydFBvc05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBib3Nzc1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15QnVsbGV0UHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTsgLy/mlYzkurrnmoTlrZDlvLnpooTliLbkvZPnmoTliJfooahcclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlRHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbGxXYXZlQWRkT3ZlckNiID0gbnVsbDsgLy/miYDmnInnmoTms6LmrKHnmoTmlYzkurrpg73lop7liqDlrozmr5XnmoTlm57osINcclxuICAgIHByaXZhdGUgYWxsRW5lbXlEZWFkQ2IgPSBudWxsOyAvL+aJgOacieeahOaVjOS6uumDveatu+S6hueahOWbnuiwgyBcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDogRGVhZEVuZW15T2JqW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTogSnNvbkFzc2V0fSlcclxuICAgIC8vIHB1YmxpYyBHYW1lTGV2ZWxDb25maWc6IEpzb25Bc3NldCA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGNiKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEdvbGQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICB0b3RhbEdvbGQgKz0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYih0b3RhbEdvbGQpOyAvL+mUgOavgeeahOaVjOS6uueahCDmjIHmnInnmoTph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXQtbGV2ZWwtbGFiZWxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlID0gZmluZChcIkNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnUmVzLmpzb247XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLW9uZS1ib3NzXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxXYXZlQWRkT3ZlckNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZUJvc3NFbmVteSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuIDms6LmlYzkurrlop7liqDlrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtb3ZlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIC8vIGZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSWNvbkFuaW0oKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlCYXNlID0gYm9zc05vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJhc2UpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15QmFzZS5wbGF5Qm9zc0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAvL+WcqOi/memHjOmcgOimgeWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNriBcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuICAgICAgICAvLyB0aGlzLndhdmVEYXRhID0gdGhpcy5HYW1lTGV2ZWxDb25maWcuanNvblsnTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1zdGFydC1kaWFsb2dcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW8gOWni+WvueivneWGheWuueaSreaUvue7k+adn1wiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgLy8gfSwgMi41KVxyXG5cclxuICAgICAgICAgICAgLy/lvIDlp4vngrnlh7sg5aGU55qE5Z+65bqn55qEIOW8leWvvOaTjeS9nFxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZ3VpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vngrnlh7sg5bu66YCg5aGU55qEIOW8leWvvOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LWd1aWRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG5cclxuICAgICAgICAvLyB9LCAzKTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctZW5kLWRpYWxvZ1wiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb250aW51ZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4LS07XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZURhdGEgPSB0aGlzLkdhbWVMZXZlbENvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdXNoT25lRW5lbXlEZWFkRGF0YShlbmVteURlYWREYXRhOiBEZWFkRW5lbXlPYmopIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInB1c2ggb25lIGVuZW15IGRlYWQgZGF0YVwiLCBlbmVteURlYWREYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hY3RpdmVFbmVteShlbmVteURlYWREYXRhLmVuZW15VHlwZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhdXNlR2FtZSgpIHtcclxuICAgICAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgICAgIC8vIFNjaGVkdWxlci5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvL+i/m+WFpWJvc3Mg5bGV56S655qE54q25oCBXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gdjMoYm9zc05vZGUucG9zaXRpb24pLmFkZCh2Myg1LCAyLCA1KSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRFdWxlckFuZ2xlcyA9IHYzKHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcykuYWRkKHYzKDM1LCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjMoYm9zc05vZGUucG9zaXRpb24ueCArIDEwLCBib3NzTm9kZS5wb3NpdGlvbi55ICsgNyxib3NzTm9kZS5wb3NpdGlvbi56ICsgMTApXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbikuYWRkKGFkZFBvcyk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBhZGRBbmdsZVZhbHVlID0gMjU7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcyA9IHYzKGV1bGVyQW5nbGVzLnggKyAyNSwgZXVsZXJBbmdsZXMueSwgZXVsZXJBbmdsZXMueik7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgLy8gICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgIC8vICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogZW5kUG9zLFxyXG4gICAgLy8gICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGVuZEV1bGVyQW5nbGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gb3J0aG9IZWlnaHQ6IDYwXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLm9ydGhvSGVpZ2h0ID0gNTtcXFxyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDYgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93Q2FtZXJhQmFja0FuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7plZzlpLTov5Tlm57nmoTliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMzAsIDQyLCAzMCksXHJcbiAgICAgICAgICAgICAgICBldWxlckFuZ2xlczogdjMoLTQ1LCA0NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogMjIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZUJvc3NFbmVteSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4qmJvc3NcIilcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFswXS50eXBlO1xyXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgIC8vIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WxleekumJvc3Mg5Ye65Zy655WM6Z2iIFxyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaG93Q2FtZXJhRm9jdXNCb29zQW5pbShlbmVteU5vZGUpXHJcbiAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5Qm9zc0VudGVyQW5pbShlbmVteU5vZGUpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaG93Q2FtZXJhQmFja0FuaW0oKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mlYzkurrnu6fnu63mkq3mlL7ooYzotbDliqjnlLtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIilcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMylcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbSgxLCB0aGlzLCBwb3MsIG5ldyBWZWMyKDUsIDUpKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFkZE9uZVdhdmVFbmVteSgpIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtpXS5jb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR5cGVMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2ZURhdGEuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHlwZUxpc3QucHVzaCh3YXZlRGF0YS50eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgbGlzdFwiLCB0eXBlTGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfeOAgVxyXG4gICAgICAgIGxldCByYW5kb21TdGFydEluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogaW5kZXhMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IDAgJiYgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByYW5kb21TdGFydEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHdhdmVcIiwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlT25lRW5lbXkgPSAoaW5kZXg6IG51bWJlciwgdHlwZTogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHJhbmRvbVN0YXJ0SW5kZXggKyBpbmRleDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCAtPSBpbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtzdGFydEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9LCAwLjEgKiBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZChub2RlKSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGluZGV4LCB0aGlzLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvbWlzZUxpc3QucHVzaChQcm9taXNlLnJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVPbmVFbmVteShpLCB0eXBlTGlzdFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAvLyAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgIC8vICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAvLyAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDAgJiYgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsRW5lbXlEZWFkQ2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIGVuZW15QXR0YWNrZWQobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZW5lbXlBdHRhY2tlZChudW0pO1xyXG4gICAgfVxyXG4gICAgZnJvemVuQWxsRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lhrDlhrvmiYDmnInmlYzkurpcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLmVuZW0pe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLW92ZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tYWxsLWVuZW15XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBib3NzU2hvb3RPbmVFZ2coZW5lbXlOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy9ib3NzIOWPkeWwhOS6huS4gOaemum4oeibi1xyXG4gICAgICAgIGxldCBlbmVteUNvbSA9IGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICBpZiAoZW5lbXlDb20pIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldFR5cGUgPSBlbmVteUNvbS5nZXRFbmVteUJ1bGxldFR5cGUoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmlYzkurrnmoTlrZDlvLnnsbvlnovmmK8gXCIsIGJ1bGxldFR5cGUpO1xyXG4gICAgICAgICAgICAvLyDmoLnmja7mlYzkurrnmoTlrZDlvLnnsbvlnovvvIzliJ3lp4vljJbkuIDkuKrlrZDlvLlcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15QnVsbGV0UHJlZmFiTGlzdFtidWxsZXRUeXBlXSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gZW5lbXlOb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUJ1bGxldCkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyLCB0aGlzLmVuZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0RGVhZEVuZW15RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDtcclxuICAgIH1cclxufVxyXG4iXX0=