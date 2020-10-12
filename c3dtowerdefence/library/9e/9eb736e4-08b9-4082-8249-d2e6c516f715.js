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
              console.log("开始对话内容播放结束");

              _this5.scheduleOnce(function () {
                _this5.state.setState("enter-next-wave");
              }, 2.5);
            }); // this.scheduleOnce(() => {
            // this.state.setState("enter-next-wave");
            // }, 3);

            Promise.all([new Promise(function (resolve, reject) {
              _this5.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this5.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利");

              _this5.gameController.gameWin(_this5.currentLevelDeadEnemyDataList);
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
          } // showCameraFocusBoosAnim(bossNode: Node) {
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
            var addEnemyCount = 0;
            var indexList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getInEdageIndexList();
            var nodeMapList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getMapNodeList();
            var randomIndex = Math.round(Math.random() * (indexList.length - 1));
            var enemyTypeIndex = 0;
            var waveAddEnemyCount = 0;
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
            // }

            var randomStartIndex = Math.round(Math.random() * indexList.length);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsImlzVmFsaWQiLCJTdGF0ZSIsIkVuZW15QmFzZSIsIkdyb3VuZE1hcEN0bCIsIkdyb3VuZFRpbGVkIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUJ1bGxldCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJnYW1lQ29udHJvbGxlciIsImFsbFdhdmVBZGRPdmVyQ2IiLCJhbGxFbmVteURlYWRDYiIsImN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0IiwidWlDb250cm9sbGVyTm9kZSIsIm5vZGUiLCJvbiIsImNiIiwidG90YWxHb2xkIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJkZXN0cm95IiwiZW1pdCIsImdldEN1cnJlbnRMZXZlbE51bSIsImdhbWVDb25maWdSZXMiLCJqc29uIiwiYWRkU3RhdGUiLCJhZGRPbmVCb3NzRW5lbXkiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInNjaGVkdWxlT25jZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJib3NzTm9kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZW5lbXlCYXNlIiwicGxheUJvc3NFbnRlckFuaW0iLCJhbGwiLCJnYW1lV2luIiwiZW5lbXlEZWFkRGF0YSIsInB1c2giLCJwbGF5ZXJEYXRhIiwiYWN0aXZlRW5lbXkiLCJ0dyIsImNhbWVyYU5vZGUiLCJ0byIsInBvc2l0aW9uIiwiZXVsZXJBbmdsZXMiLCJjYWxsIiwic3RhcnQiLCJvcnRob0hlaWdodCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvcyIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiZW5lbXlOb2RlIiwiYm9zc3NQcmVmYWJMaXN0IiwicGFyZW50IiwieiIsImFjdGl2ZSIsImluaXQiLCJzaG93RW5lbXlFbnRlckFuaW0iLCJwcm9taXNlTGlzdCIsImFkZEVuZW15Q291bnQiLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImNvdW50IiwidHlwZUxpc3QiLCJyYW5kb21TdGFydEluZGV4IiwiY3JlYXRlT25lRW5lbXkiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJpbmRleFYyIiwiZ3JvdW5kVGlsZWQiLCJnZXRJc1ZvaWQiLCJlbmVteXNQcmVmYWJMaXN0IiwiZW5lbXkiLCJ1dWlkIiwic3BsaWNlIiwibnVtIiwiZW5lbXlBdHRhY2tlZCIsImVuZW15Q29tIiwiYnVsbGV0VHlwZSIsImdldEVuZW15QnVsbGV0VHlwZSIsImVuZW15QnVsbGV0UHJlZmFiTGlzdCIsImdldEdhbWVDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxP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QUE7QUFBQSw4Q0FBK0JxRCxJQUEvQixDQUFvQyxLQUFLaEUsY0FBTCxDQUFvQjBGLGFBQXBCLEdBQW9DekUsSUFBeEUsRUFBOEUsS0FBS2pCLGNBQW5GLEVBQW1HLEtBQUtELE1BQXhHO0FBQ0g7QUFDSjs7OzZDQUNrQjtBQUNmLG1CQUFPLEtBQUtJLDZCQUFaO0FBQ0g7Ozs7UUEvYWdDbkMsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSTs7Ozs7OztpQkFHWCxJOzs7Ozs7O2lCQUVTLEU7Ozs7Ozs7aUJBSU0sRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMywgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBwcm9maWxlciwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBFbmVteUJ1bGxldCB9IGZyb20gJy4vRW5lbXlzL0VuZW15QnVsbGV0JztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBEZWFkRW5lbXlPYmoge1xyXG4gICAgLy/mrbvljrvmlYzkurrnmoTnu5PmnoTkvZNcclxuICAgIHB1YmxpYyBlbmVteVR5cGUgPSBcIlwiO1xyXG4gICAgcHVibGljIGRyb3BHb2xkQ291bnQgPSAwO1xyXG4gICAgLy8gcHVibGljIGVuZW15SWNvblNwcml0ZUZyYW1lID0gMDsgLy/mlYzkurrnmoRpY29uXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkcm9wR29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVuZW15VHlwZSA9IHR5cGU7IC8v5pWM5Lq655qE56eN57G7XHJcbiAgICAgICAgdGhpcy5kcm9wR29sZENvdW50ID0gZHJvcEdvbGRDb3VudDsgLy/mlYzkurrnmoTmjonokL3nmoTph5HluIHmlbDnm64gXHJcbiAgICB9XHJcbn07XHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYm9zc3NQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUJ1bGxldFByZWZhYkxpc3Q6IFByZWZhYltdID0gW107IC8v5pWM5Lq655qE5a2Q5by56aKE5Yi25L2T55qE5YiX6KGoXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7IC8v5omA5pyJ55qE5rOi5qyh55qE5pWM5Lq66YO95aKe5Yqg5a6M5q+V55qE5Zue6LCDXHJcbiAgICBwcml2YXRlIGFsbEVuZW15RGVhZENiID0gbnVsbDsgLy/miYDmnInnmoTmlYzkurrpg73mrbvkuobnmoTlm57osIMgXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q6IERlYWRFbmVteU9ialtdID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlDb250cm9sbGVyTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoe3R5cGU6IEpzb25Bc3NldH0pXHJcbiAgICAvLyBwdWJsaWMgR2FtZUxldmVsQ29uZmlnOiBKc29uQXNzZXQgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChjYikgPT4ge1xyXG4gICAgICAgICAgICAvL+WIoOmZpOW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICBsZXQgdG90YWxHb2xkID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgdG90YWxHb2xkICs9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IodG90YWxHb2xkKTsgLy/plIDmr4HnmoTmlYzkurrnmoQg5oyB5pyJ55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0LWxldmVsLWxhYmVsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZSA9IGZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbmZpZ1Jlcy5qc29uO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVtdC1vdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1vbmUtYm9zc1wiKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IHRoaXMud2F2ZURhdGFbXCJFbmVteVR5cGVcIl1bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteUR1cmFjdGlvbiA9IHRoaXMud2F2ZURhdGFbJ0FkZEVuZW15RHVyYWN0aW9uJ11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsV2F2ZUFkZE92ZXJDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiA5rOi5pWM5Lq65aKe5Yqg5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdnYW1lLW92ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmFkZEVuZW15RHVyYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICAvLyBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zaG93Qm9zc0ljb25BbmltKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVuZW15QmFzZSA9IGJvc3NOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteUJhc2UucGxheUJvc3NFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0ID0gW107XHJcbiAgICAgICAgLy/lnKjov5nph4zpnIDopoHliJ3lp4vljJbkuIDkupvmuLjmiI/mlbDmja4gXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcbiAgICAgICAgLy8gdGhpcy53YXZlRGF0YSA9IHRoaXMuR2FtZUxldmVsQ29uZmlnLmpzb25bJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctc3RhcnQtZGlhbG9nXCIsIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCksICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vlr7nor53lhoXlrrnmkq3mlL7nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcblxyXG4gICAgICAgIC8vIH0sIDMpO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29udGludWVHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleC0tO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuICAgICAgICAvLyB0aGlzLndhdmVEYXRhID0gdGhpcy5HYW1lTGV2ZWxDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVzaE9uZUVuZW15RGVhZERhdGEoZW5lbXlEZWFkRGF0YTogRGVhZEVuZW15T2JqKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwdXNoIG9uZSBlbmVteSBkZWFkIGRhdGFcIiwgZW5lbXlEZWFkRGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hY3RpdmVFbmVteShlbmVteURlYWREYXRhLmVuZW15VHlwZSk7XHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2FtZXJhRm9jdXNCb29zQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8v6L+b5YWlYm9zcyDlsZXnpLrnmoTnirbmgIFcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1zaG93LWJvc3MtZW50ZXItc3RhdGVcIik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2VlbigpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSB2Myhib3NzTm9kZS5wb3NpdGlvbikuYWRkKHYzKDUsIDIsIDUpKTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZEV1bGVyQW5nbGVzID0gdjModGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzKS5hZGQodjMoMzUsIDAsIDApKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myhib3NzTm9kZS5wb3NpdGlvbi54ICsgMTAsIGJvc3NOb2RlLnBvc2l0aW9uLnkgKyA3LGJvc3NOb2RlLnBvc2l0aW9uLnogKyAxMClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjModGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uKS5hZGQoYWRkUG9zKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBldWxlckFuZ2xlcyA9IHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcztcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGFkZEFuZ2xlVmFsdWUgPSAyNTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzID0gdjMoZXVsZXJBbmdsZXMueCArIDI1LCBldWxlckFuZ2xlcy55LCBldWxlckFuZ2xlcy56KTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzXHJcbiAgICAvLyAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgLy8gICAgICAgICB0dy50bygwLjUsIHtcclxuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBlbmRQb3MsXHJcbiAgICAvLyAgICAgICAgICAgICBldWxlckFuZ2xlczogZW5kRXVsZXJBbmdsZXMsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBvcnRob0hlaWdodDogNjBcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkub3J0aG9IZWlnaHQgPSA1O1xcXHJcbiAgICAvLyAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogNiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dDYW1lcmFCYWNrQW5pbSgpIHtcclxuICAgICAgICAvL+aSreaUvumVnOWktOi/lOWbnueahOWKqOeUu1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygzMCwgNDIsIDMwKSxcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiB2MygtNDUsIDQ1LCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiAyMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkT25lQm9zc0VuZW15KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5LiqYm9zc1wiKVxyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgbGV0IHBvczogVmVjMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0WzBdLnR5cGU7XHJcbiAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYm9zc3NQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgLy8gYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAvLyBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bGV56S6Ym9zcyDlh7rlnLrnlYzpnaIgXHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNob3dDYW1lcmFGb2N1c0Jvb3NBbmltKGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlCb3NzRW50ZXJBbmltKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNob3dDYW1lcmFCYWNrQW5pbSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aVjOS6uue7p+e7reaSreaUvuihjOi1sOWKqOeUu1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICB9LCAzKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKDEsIHRoaXMsIHBvcywgbmV3IFZlYzIoNSwgNSkpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWRkT25lV2F2ZUVuZW15KCkge1xyXG4gICAgICAgIC8v5aKe5Yqg5LiA5rOi5pWM5Lq6XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgZW5lbXlUeXBlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXhFbmVteUNvdW50ICs9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbaV0uY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0eXBlTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdmVEYXRhLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHR5cGVMaXN0LnB1c2god2F2ZURhdGEudHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlIGxpc3RcIiwgdHlwZUxpc3QpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4IGVuZW15IGNvdW50XCIsIG1heEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vIGlmIChtYXhFbmVteUNvdW50ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIuaVsOaNrumUmeivr1wiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgcmFuZG9tU3RhcnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGluZGV4TGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9uZUVuZW15ID0gKGluZGV4OiBudW1iZXIsIHR5cGU6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSByYW5kb21TdGFydEluZGV4ICsgaW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggLT0gaW5kZXhMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3Rbc3RhcnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSwgMC4xICogaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQobm9kZSkgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShpbmRleCwgdGhpcywgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goUHJvbWlzZS5yZXNvbHZlKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3JlYXRlT25lRW5lbXkoaSwgdHlwZUxpc3RbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoaWxlIChhZGRFbmVteUNvdW50IDwgbWF4RW5lbXlDb3VudCkge1xyXG4gICAgICAgIC8vICAgICAvLyBhZGRFbmVteUNvdW50ICsrO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmRvbSBpbmRleFwiLCByYW5kb21JbmRleCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyYW5kb21JbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByYW5kb21JbmRleCA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuICAgICAgICAvLyAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huS4gOS4quepuuS9jee9rlwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEVuZW15VHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVubSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2VuZW15VHlwZUluZGV4XTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdHlwZSA9IHdhdmVEYXRhLnR5cGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGNvdW50ID0gd2F2ZURhdGEuY291bnQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHdhdmVBZGRFbmVteUNvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZW5lbXlUeXBlSW5kZXgrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5Liq5pWM5Lq6XCIpXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyByYW5kb21JbmRleCsrXHJcbiAgICAgICAgLy8gICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbmVteUluTGlzdChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkudXVpZCA9PT0gbm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoID09PSAwICYmIHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEVuZW15RGVhZENiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmVuZW15QXR0YWNrZWQobnVtKTtcclxuICAgIH1cclxuICAgIGZyb3plbkFsbEVuZW15KCkge1xyXG4gICAgICAgIC8v5Yaw5Ya75omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5lbmVtKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZnJvemVuLWFsbC1lbmVteVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgYm9zc1Nob290T25lRWdnKGVuZW15Tm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vYm9zcyDlj5HlsITkuobkuIDmnprpuKHom4tcclxuICAgICAgICBsZXQgZW5lbXlDb20gPSBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgaWYgKGVuZW15Q29tKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXRUeXBlID0gZW5lbXlDb20uZ2V0RW5lbXlCdWxsZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pWM5Lq655qE5a2Q5by557G75Z6L5pivIFwiLCBidWxsZXRUeXBlKTtcclxuICAgICAgICAgICAgLy8g5qC55o2u5pWM5Lq655qE5a2Q5by557G75Z6L77yM5Yid5aeL5YyW5LiA5Liq5a2Q5by5XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteUJ1bGxldFByZWZhYkxpc3RbYnVsbGV0VHlwZV0pO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGVuZW15Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCdWxsZXQpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbiwgdGhpcy5nYW1lQ29udHJvbGxlciwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19