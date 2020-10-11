System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./GameController.js", "./Enemys/EnemyBullet.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, CameraComponent, isValid, State, EnemyBase, GroundMapCtl, GroundTiled, GameController, EnemyBullet, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, DeadEnemyObj, EnemyController;

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

          _this.gameController = null;
          _this.allWaveAddOverCb = null;
          _this.allEnemyDeadCb = null;
          _this.currentLevelDeadEnemyDataList = [];
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
              _this2.node.emit("refer-current-wave-level", _this2.gameController.getCurrentLevelNum(), 0);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            // Your initialization goes here.
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

            this.scheduleOnce(function () {
              _this5.state.setState("enter-next-wave");
            }, 3);
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
      }), _applyDecoratedDescriptor(_class2.prototype, "onLoad", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "onLoad"), _class2.prototype)), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiaXNWYWxpZCIsIlN0YXRlIiwiRW5lbXlCYXNlIiwiR3JvdW5kTWFwQ3RsIiwiR3JvdW5kVGlsZWQiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15QnVsbGV0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRGVhZEVuZW15T2JqIiwidHlwZSIsImRyb3BHb2xkQ291bnQiLCJlbmVteVR5cGUiLCJFbmVteUNvbnRyb2xsZXIiLCJnYW1lQ29uZmlnIiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCIsImVuZFBvcyIsImdhbWVDb250cm9sbGVyIiwiYWxsV2F2ZUFkZE92ZXJDYiIsImFsbEVuZW15RGVhZENiIiwiY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QiLCJub2RlIiwib24iLCJjYiIsInRvdGFsR29sZCIsImkiLCJsZW5ndGgiLCJnZXRDb21wb25lbnQiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZGVzdHJveSIsImVtaXQiLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsImFkZFN0YXRlIiwiYWRkT25lQm9zc0VuZW15IiwiYWRkT25lV2F2ZUVuZW15IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzY2hlZHVsZU9uY2UiLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwiYm9zc05vZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVuZW15QmFzZSIsInBsYXlCb3NzRW50ZXJBbmltIiwiYWxsIiwiZ2FtZVdpbiIsImVuZW15RGVhZERhdGEiLCJwdXNoIiwicGxheWVyRGF0YSIsImFjdGl2ZUVuZW15IiwidHciLCJjYW1lcmFOb2RlIiwidG8iLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiY2FsbCIsInN0YXJ0Iiwib3J0aG9IZWlnaHQiLCJpbmRleExpc3QiLCJnZXRJbkVkYWdlSW5kZXhMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3MiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJ4IiwieSIsImVuZW15Tm9kZSIsImJvc3NzUHJlZmFiTGlzdCIsInBhcmVudCIsInoiLCJhY3RpdmUiLCJpbml0Iiwic2hvd0VuZW15RW50ZXJBbmltIiwicHJvbWlzZUxpc3QiLCJhZGRFbmVteUNvdW50IiwiZW5lbXlUeXBlSW5kZXgiLCJ3YXZlQWRkRW5lbXlDb3VudCIsIm1heEVuZW15Q291bnQiLCJjb3VudCIsInR5cGVMaXN0IiwicmFuZG9tU3RhcnRJbmRleCIsImNyZWF0ZU9uZUVuZW15IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15IiwidXVpZCIsInNwbGljZSIsIm51bSIsImVuZW15QXR0YWNrZWQiLCJlbmVteUNvbSIsImJ1bGxldFR5cGUiLCJnZXRFbmVteUJ1bGxldFR5cGUiLCJlbmVteUJ1bGxldFByZWZhYkxpc3QiLCJnZXRHYW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7QUFBcUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQ0MsTUFBQUEsTyxPQUFBQSxPOzs7O0FBQzdIQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxXLDZCQUFBQSxXOztBQUdBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUVBQyxNQUFBQSxXLHdCQUFBQSxXOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQmpCLFUsQ0FBdEJpQixPO0FBQVNDLE1BQUFBLFEsR0FBYWxCLFUsQ0FBYmtCLFE7OzhCQUNKQyxZLEdBQ1Q7QUFHQTtBQUNBLDRCQUFZQyxJQUFaLEVBQWtCQyxhQUFsQixFQUF5QztBQUFBOztBQUFBLGFBSGxDQyxTQUdrQyxHQUh0QixFQUdzQjtBQUFBLGFBRmxDRCxhQUVrQyxHQUZsQixDQUVrQjtBQUNyQyxhQUFLQyxTQUFMLEdBQWlCRixJQUFqQixDQURxQyxDQUNkOztBQUN2QixhQUFLQyxhQUFMLEdBQXFCQSxhQUFyQixDQUZxQyxDQUVEO0FBQ3ZDLE87O0FBQ0o7O2lDQUVZRSxlLFdBRFpOLE9BQU8sQ0FBQyxpQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVqQjtBQUFSLE9BQUQsQyxVQUdSZSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFaEI7QUFBUixPQUFELEMsVUFZUmMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWxCO0FBQVIsT0FBRCxDLFVBTVJnQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbEI7QUFBUixPQUFELEMsVUFHUmdCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVsQjtBQUFSLE9BQUQsQyxVQUVSZ0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWhCO0FBQVIsT0FBRCxDLFVBSVJjLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVoQjtBQUFSLE9BQUQsQyxVQWNSYyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFakI7QUFBUCxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXRDRHFCLFUsR0FBaUIsSTtnQkFHakJDLGdCLEdBQTJCLEM7Z0JBQzNCQyxRLEdBQWUsSTtnQkFDZkMsSyxHQUFlO0FBQUE7QUFBQSwrQjtnQkFDZkMsaUIsR0FBNEIsQztnQkFDNUJDLGEsR0FBd0IsRTtnQkFDeEJDLDBCLEdBQTZCLEU7Ozs7Z0JBSzlCQyxNLEdBQWUsSTs7Ozs7Ozs7OztnQkFrQmZDLGMsR0FBaUMsSTtnQkFDaENDLGdCLEdBQW1CLEk7Z0JBQ25CQyxjLEdBQWlCLEk7Z0JBR2pCQyw2QixHQUFnRCxFOzs7Ozs7bUNBSS9DO0FBQUE7O0FBQ0wsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLG1CQUFiLEVBQWtDLFVBQUNDLEVBQUQsRUFBUTtBQUN0QztBQUNBLGtCQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsbUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxNQUFJLENBQUNYLGFBQUwsQ0FBbUJZLE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO0FBQ2hELG9CQUFJSixJQUFJLEdBQUcsTUFBSSxDQUFDUCxhQUFMLENBQW1CVyxDQUFuQixDQUFYO0FBQ0FELGdCQUFBQSxTQUFTLElBQUlILElBQUksQ0FBQ00sWUFBTDtBQUFBO0FBQUEsNENBQTZCQyxtQkFBN0IsRUFBYjtBQUNBUCxnQkFBQUEsSUFBSSxDQUFDUSxPQUFMO0FBQ0g7O0FBQ0QsY0FBQSxNQUFJLENBQUNmLGFBQUwsR0FBcUIsRUFBckI7O0FBQ0Esa0JBQUlTLEVBQUosRUFBUTtBQUNKQSxnQkFBQUEsRUFBRSxDQUFDQyxTQUFELENBQUYsQ0FESSxDQUNXO0FBQ2xCO0FBQ0osYUFaRDtBQWFBLGlCQUFLSCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxrQkFBYixFQUFpQyxZQUFNO0FBQ25DLGNBQUEsTUFBSSxDQUFDRCxJQUFMLENBQVVTLElBQVYsQ0FBZSwwQkFBZixFQUEyQyxNQUFJLENBQUNiLGNBQUwsQ0FBb0JjLGtCQUFwQixFQUEzQyxFQUFxRixDQUFyRjtBQUNILGFBRkQ7QUFHSDs7O2tDQUNPO0FBQUE7O0FBQ0o7QUFDQSxpQkFBS3RCLFVBQUwsR0FBa0IsS0FBS3VCLGFBQUwsQ0FBbUJDLElBQXJDO0FBQ0EsaUJBQUtoQixjQUFMLEdBQXNCLEtBQUtJLElBQUwsQ0FBVU0sWUFBVjtBQUFBO0FBQUEsaURBQXRCO0FBQ0EsaUJBQUtYLE1BQUwsR0FBY3pCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBaEI7QUFDQSxpQkFBS3FCLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0IsaUJBQXBCLEVBQXVDLFlBQU07QUFDekMsa0JBQUksTUFBSSxDQUFDeEIsZ0JBQUwsSUFBeUIsTUFBSSxDQUFDQyxRQUFMLENBQWMsV0FBZCxFQUEyQmUsTUFBeEQsRUFBZ0U7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFDRCxjQUFBLE1BQUksQ0FBQ1gsMEJBQUwsR0FBa0MsTUFBSSxDQUFDSixRQUFMLENBQWMsV0FBZCxFQUEyQixNQUFJLENBQUNELGdCQUFoQyxDQUFsQztBQUNBLGNBQUEsTUFBSSxDQUFDRyxpQkFBTCxHQUF5QixNQUFJLENBQUNGLFFBQUwsQ0FBYyxtQkFBZCxFQUFtQyxNQUFJLENBQUNELGdCQUF4QyxDQUF6Qjs7QUFDQSxjQUFBLE1BQUksQ0FBQ1csSUFBTCxDQUFVUyxJQUFWLENBQWUsMEJBQWYsRUFBMkMsTUFBSSxDQUFDYixjQUFMLENBQW9CYyxrQkFBcEIsRUFBM0MsRUFBcUYsTUFBSSxDQUFDckIsZ0JBQTFGOztBQUNBLGtCQUFJLE1BQUksQ0FBQ0EsZ0JBQUwsS0FBMEIsTUFBSSxDQUFDQyxRQUFMLENBQWMsV0FBZCxFQUEyQmUsTUFBM0IsR0FBb0MsQ0FBbEUsRUFBcUU7QUFDakUsb0JBQUksTUFBSSxDQUFDUixnQkFBVCxFQUEyQjtBQUN2QixrQkFBQSxNQUFJLENBQUNBLGdCQUFMOztBQUNBLGtCQUFBLE1BQUksQ0FBQ0EsZ0JBQUwsR0FBd0IsSUFBeEI7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDaUIsZUFBTDtBQUNIO0FBRUosZUFQRCxNQU9PO0FBQ0gsZ0JBQUEsTUFBSSxDQUFDQyxlQUFMLEdBQXVCQyxJQUF2QixDQUE0QixZQUFNO0FBQzlCQyxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLGtCQUFBLE1BQUksQ0FBQzdCLGdCQUFMOztBQUVBLGtCQUFBLE1BQUksQ0FBQzhCLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQix3QkFBSSxNQUFJLENBQUM1QixLQUFMLENBQVc2QixRQUFYLE9BQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0Qsb0JBQUEsTUFBSSxDQUFDN0IsS0FBTCxDQUFXOEIsUUFBWCxDQUFvQixpQkFBcEI7QUFDSCxtQkFMRCxFQUtHLE1BQUksQ0FBQzdCLGlCQUxSO0FBTUgsaUJBVkQ7QUFXSDtBQUNKLGFBOUJELEVBTEksQ0FvQ0o7QUFDQTtBQUNBO0FBQ0g7Ozs0Q0FFaUI4QixRLEVBQWdCO0FBQUE7O0FBQzlCO0FBQ0E7QUFDQSxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ2hCLFlBQVQ7QUFBQTtBQUFBLHlDQUFoQjs7QUFDQSxrQkFBSW9CLFNBQUosRUFBZTtBQUNYQSxnQkFBQUEsU0FBUyxDQUFDQyxpQkFBVixHQUE4QlgsSUFBOUIsQ0FBbUMsWUFBTTtBQUNyQ1Esa0JBQUFBLE9BQU87QUFDVixpQkFGRDtBQUdILGVBSkQsTUFJTztBQUNILGdCQUFBLE1BQUksQ0FBQ0wsWUFBTCxDQUFrQixZQUFNO0FBQ3BCSyxrQkFBQUEsT0FBTztBQUNWLGlCQUZELEVBRUcsQ0FGSDtBQUdIO0FBRUosYUFaTSxDQUFQO0FBYUg7OztzQ0FDVztBQUFBOztBQUNSLGlCQUFLekIsNkJBQUwsR0FBcUMsRUFBckMsQ0FEUSxDQUVSOztBQUNBLGlCQUFLVixnQkFBTCxHQUF3QixDQUF4QjtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtGLFVBQUwsQ0FBZ0IsV0FBVyxLQUFLUSxjQUFMLENBQW9CYyxrQkFBcEIsRUFBM0IsQ0FBaEIsQ0FKUSxDQUtSOztBQUtBLGlCQUFLUyxZQUFMLENBQWtCLFlBQU07QUFDcEIsY0FBQSxNQUFJLENBQUM1QixLQUFMLENBQVc4QixRQUFYLENBQW9CLGlCQUFwQjtBQUVILGFBSEQsRUFHRyxDQUhIO0FBS0FFLFlBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLENBQ1IsSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3QixjQUFBLE1BQUksQ0FBQzVCLGdCQUFMLEdBQXdCMkIsT0FBeEI7QUFDSCxhQUZELENBRFEsRUFJUixJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdCLGNBQUEsTUFBSSxDQUFDM0IsY0FBTCxHQUFzQjBCLE9BQXRCO0FBQ0gsYUFGRCxDQUpRLENBQVosRUFPR1IsSUFQSCxDQU9RLFlBQU07QUFDVkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFDQSxjQUFBLE1BQUksQ0FBQ3RCLGNBQUwsQ0FBb0JpQyxPQUFwQixDQUE0QixNQUFJLENBQUM5Qiw2QkFBakM7QUFDSCxhQVZEO0FBV0g7Ozt5Q0FDYztBQUFBOztBQUNYLGlCQUFLVixnQkFBTDtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtGLFVBQUwsQ0FBZ0IsV0FBVyxLQUFLUSxjQUFMLENBQW9CYyxrQkFBcEIsRUFBM0IsQ0FBaEIsQ0FGVyxDQUdYOztBQUVBLGlCQUFLbkIsS0FBTCxDQUFXOEIsUUFBWCxDQUFvQixpQkFBcEI7QUFDQUUsWUFBQUEsT0FBTyxDQUFDSyxHQUFSLENBQVksQ0FDUixJQUFJTCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdCLGNBQUEsTUFBSSxDQUFDNUIsZ0JBQUwsR0FBd0IyQixPQUF4QjtBQUNILGFBRkQsQ0FEUSxFQUlSLElBQUlELE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDN0IsY0FBQSxNQUFJLENBQUMzQixjQUFMLEdBQXNCMEIsT0FBdEI7QUFDSCxhQUZELENBSlEsQ0FBWixFQU9HUixJQVBILENBT1EsWUFBTTtBQUNWQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLGNBQUEsTUFBSSxDQUFDdEIsY0FBTCxDQUFvQmlDLE9BQXBCLENBQTRCLE1BQUksQ0FBQzlCLDZCQUFqQztBQUNILGFBVkQ7QUFXSDs7OytDQUNvQitCLGEsRUFBNkI7QUFDOUNiLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBQXdDWSxhQUF4QztBQUNBLGlCQUFLL0IsNkJBQUwsQ0FBbUNnQyxJQUFuQyxDQUF3Q0QsYUFBeEM7QUFDQSxpQkFBS2xDLGNBQUwsQ0FBb0JvQyxVQUFwQixDQUErQkMsV0FBL0IsQ0FBMkNILGFBQWEsQ0FBQzVDLFNBQXpEO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OytDQUVxQjtBQUFBOztBQUNqQjtBQUNBLG1CQUFPLElBQUlxQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJUyxFQUFFLEdBQUcsSUFBSTlELEtBQUosQ0FBVSxNQUFJLENBQUMrRCxVQUFmLENBQVQ7QUFDQUQsY0FBQUEsRUFBRSxDQUFDRSxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1BDLGdCQUFBQSxRQUFRLEVBQUVuRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBREw7QUFFUG9FLGdCQUFBQSxXQUFXLEVBQUVwRSxFQUFFLENBQUMsQ0FBQyxFQUFGLEVBQU0sRUFBTixFQUFVLENBQVY7QUFGUixlQUFYO0FBSUFnRSxjQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSxZQUFNO0FBQ1ZmLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBVSxjQUFBQSxFQUFFLENBQUNNLEtBQUg7QUFDQSxrQkFBSXBFLEtBQUosQ0FBVSxNQUFJLENBQUMrRCxVQUFMLENBQWdCN0IsWUFBaEIsQ0FBNkJqQyxlQUE3QixDQUFWLEVBQXlEK0QsRUFBekQsQ0FBNEQsR0FBNUQsRUFBaUU7QUFBRUssZ0JBQUFBLFdBQVcsRUFBRTtBQUFmLGVBQWpFLEVBQXNGRCxLQUF0RjtBQUNILGFBWE0sQ0FBUDtBQWFIOzs7NENBQ2lCO0FBQUE7O0FBQ2R2QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsZ0JBQUl3QixTQUFpQixHQUFHLEtBQUsxQyxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLDhDQUFxQ3FDLG1CQUFyQyxFQUF4QjtBQUNBLGdCQUFJQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLFNBQVMsQ0FBQ3JDLE1BQVYsR0FBbUIsQ0FBcEMsQ0FBWCxDQUFsQjtBQUNBLGdCQUFJMkMsR0FBUyxHQUFHTixTQUFTLENBQUNFLFdBQUQsQ0FBekI7QUFDQSxnQkFBSUssV0FBNEIsR0FBRyxLQUFLakQsSUFBTCxDQUFVTSxZQUFWO0FBQUE7QUFBQSw4Q0FBcUM0QyxjQUFyQyxFQUFuQztBQUNBLGdCQUFJbEQsSUFBSSxHQUFHaUQsV0FBVyxDQUFDRSxRQUFaLENBQXFCSCxHQUFHLENBQUNJLENBQXpCLEVBQTRCSixHQUFHLENBQUNLLENBQWhDLENBQVg7QUFDQSxnQkFBSXJFLElBQUksR0FBRyxLQUFLVSwwQkFBTCxDQUFnQyxDQUFoQyxFQUFtQ1YsSUFBOUM7QUFDQSxnQkFBSXNFLFNBQVMsR0FBR3JGLFdBQVcsQ0FBQyxLQUFLc0YsZUFBTCxDQUFxQnZFLElBQXJCLENBQUQsQ0FBM0IsQ0FSYyxDQVNkOztBQUNBc0UsWUFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLEtBQUt4RCxJQUF4QjtBQUNBc0QsWUFBQUEsU0FBUyxDQUFDakIsUUFBVixHQUFxQm5FLEVBQUUsQ0FBQzhCLElBQUksQ0FBQ3FDLFFBQUwsQ0FBY2UsQ0FBZixFQUFrQixDQUFsQixFQUFxQnBELElBQUksQ0FBQ3FDLFFBQUwsQ0FBY29CLENBQW5DLENBQXZCO0FBQ0FILFlBQUFBLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQixLQUFuQjtBQUVBSixZQUFBQSxTQUFTLENBQUNoRCxZQUFWO0FBQUE7QUFBQSx3Q0FBa0NxRCxJQUFsQyxDQUF1QyxLQUFLdkUsVUFBNUMsRUFBd0QsS0FBS1EsY0FBN0QsRUFBNkVJLElBQUksQ0FBQ3FDLFFBQWxGLEVBQTRGLEtBQUsxQyxNQUFqRyxFQWRjLENBZ0JkO0FBQ0E7QUFDQTs7QUFDQSxpQkFBS0YsYUFBTCxDQUFtQnNDLElBQW5CLENBQXdCdUIsU0FBeEI7QUFDQSxtQkFBTyxJQUFJL0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0QsY0FBQUEsT0FBTyxHQUQ2QixDQUVwQztBQUNILGFBSE0sRUFHSlIsSUFISSxDQUdDLFlBQU0sQ0FDVjtBQUNBO0FBQ0E7QUFDSCxhQVBNLEVBT0pBLElBUEksQ0FPQyxZQUFNO0FBQ1YscUJBQU8sTUFBSSxDQUFDVyxpQkFBTCxDQUF1QjJCLFNBQXZCLENBQVA7QUFDSCxhQVRNLEVBU0p0QyxJQVRJLENBU0MsWUFBTSxDQUNWO0FBQ0gsYUFYTSxFQVdKQSxJQVhJLENBV0MsWUFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQUEsTUFBSSxDQUFDaEIsSUFBTCxDQUFVUyxJQUFWLENBQWUsK0JBQWYsRUFKVSxDQUtWO0FBRUE7QUFDQTs7QUFDSCxhQXBCTSxFQW9CSk8sSUFwQkksQ0FvQkMsWUFBTTtBQUNWc0MsY0FBQUEsU0FBUyxDQUFDaEQsWUFBVjtBQUFBO0FBQUEsMENBQWtDc0Qsa0JBQWxDLENBQXFELENBQXJELEVBQXdELE1BQXhELEVBQThEWixHQUE5RCxFQUFtRSxJQUFJN0UsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLENBQW5FO0FBRUgsYUF2Qk0sQ0FBUDtBQXdCSDs7OzRDQUNpQjtBQUFBOztBQUNkO0FBQ0EsZ0JBQUkwRixXQUFXLEdBQUcsRUFBbEI7QUFDQSxnQkFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0EsZ0JBQUlwQixTQUFpQixHQUFHLEtBQUsxQyxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLDhDQUFxQ3FDLG1CQUFyQyxFQUF4QjtBQUNBLGdCQUFJTSxXQUE0QixHQUFHLEtBQUtqRCxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLDhDQUFxQzRDLGNBQXJDLEVBQW5DO0FBQ0EsZ0JBQUlOLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsU0FBUyxDQUFDckMsTUFBVixHQUFtQixDQUFwQyxDQUFYLENBQWxCO0FBQ0EsZ0JBQUkwRCxjQUFjLEdBQUcsQ0FBckI7QUFDQSxnQkFBSUMsaUJBQWlCLEdBQUcsQ0FBeEI7QUFDQSxnQkFBSUMsYUFBYSxHQUFHLENBQXBCOztBQUNBLGlCQUFLLElBQUk3RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtWLDBCQUFMLENBQWdDVyxNQUFwRCxFQUE0REQsQ0FBQyxFQUE3RCxFQUFpRTtBQUM3RDZELGNBQUFBLGFBQWEsSUFBSSxLQUFLdkUsMEJBQUwsQ0FBZ0NVLENBQWhDLEVBQW1DOEQsS0FBcEQ7QUFDSDs7QUFDRCxnQkFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsaUJBQUssSUFBSS9ELEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBS1YsMEJBQUwsQ0FBZ0NXLE1BQXBELEVBQTRERCxFQUFDLEVBQTdELEVBQWlFO0FBQzdELGtCQUFJZCxRQUFRLEdBQUcsS0FBS0ksMEJBQUwsQ0FBZ0NVLEVBQWhDLENBQWY7O0FBQ0EsbUJBQUssSUFBSUEsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR2QsUUFBUSxDQUFDNEUsS0FBN0IsRUFBb0M5RCxHQUFDLEVBQXJDLEVBQXlDO0FBQ3JDK0QsZ0JBQUFBLFFBQVEsQ0FBQ3BDLElBQVQsQ0FBY3pDLFFBQVEsQ0FBQ04sSUFBdkI7QUFDSDtBQUNKOztBQUNEaUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QmlELFFBQXpCLEVBcEJjLENBcUJkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZ0JBQUlDLGdCQUFnQixHQUFHdkIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsU0FBUyxDQUFDckMsTUFBckMsQ0FBdkI7O0FBQ0EsZ0JBQU1nRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBZ0J0RixJQUFoQixFQUFpQztBQUVwRCxrQkFBSXVGLFVBQVUsR0FBR0gsZ0JBQWdCLEdBQUdFLEtBQXBDOztBQUNBLGtCQUFJQyxVQUFVLElBQUk3QixTQUFTLENBQUNyQyxNQUE1QixFQUFvQztBQUNoQ2tFLGdCQUFBQSxVQUFVLElBQUk3QixTQUFTLENBQUNyQyxNQUF4QjtBQUNIOztBQUNELHFCQUFPLElBQUlrQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLG9CQUFJK0MsT0FBTyxHQUFHOUIsU0FBUyxDQUFDNkIsVUFBRCxDQUF2QjtBQUNBLG9CQUFJdkUsSUFBSSxHQUFHaUQsV0FBVyxDQUFDRSxRQUFaLENBQXFCcUIsT0FBTyxDQUFDcEIsQ0FBN0IsRUFBZ0NvQixPQUFPLENBQUNuQixDQUF4QyxDQUFYLENBRm9DLENBSXBDO0FBQ0E7QUFDQTs7QUFDQSxvQkFBSS9FLE9BQU8sQ0FBQzBCLElBQUQsQ0FBUCxJQUFpQkEsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSwrQ0FBckIsRUFBcUQ7QUFDakQsc0JBQUltRSxXQUFXLEdBQUd6RSxJQUFJLENBQUNNLFlBQUw7QUFBQTtBQUFBLGlEQUFsQjs7QUFDQSxzQkFBSW1FLFdBQVcsQ0FBQ0MsU0FBWixFQUFKLEVBQTZCO0FBQ3pCLHdCQUFJcEIsU0FBUyxHQUFHckYsV0FBVyxDQUFDLE1BQUksQ0FBQzBHLGdCQUFMLENBQXNCM0YsSUFBdEIsQ0FBRCxDQUEzQixDQUR5QixDQUV6Qjs7QUFDQXNFLG9CQUFBQSxTQUFTLENBQUNFLE1BQVYsR0FBbUIsTUFBSSxDQUFDeEQsSUFBeEI7QUFDQXNELG9CQUFBQSxTQUFTLENBQUNqQixRQUFWLEdBQXFCbkUsRUFBRSxDQUFDOEIsSUFBSSxDQUFDcUMsUUFBTCxDQUFjZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCcEQsSUFBSSxDQUFDcUMsUUFBTCxDQUFjb0IsQ0FBbkMsQ0FBdkI7QUFDQUgsb0JBQUFBLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQixLQUFuQjtBQUVBSixvQkFBQUEsU0FBUyxDQUFDaEQsWUFBVjtBQUFBO0FBQUEsZ0RBQWtDcUQsSUFBbEMsQ0FBdUMsTUFBSSxDQUFDdkUsVUFBNUMsRUFBd0QsTUFBSSxDQUFDUSxjQUE3RCxFQUE2RUksSUFBSSxDQUFDcUMsUUFBbEYsRUFBNEYsTUFBSSxDQUFDMUMsTUFBakc7O0FBQ0Esb0JBQUEsTUFBSSxDQUFDRixhQUFMLENBQW1Cc0MsSUFBbkIsQ0FBd0J1QixTQUF4Qjs7QUFFQU8sb0JBQUFBLFdBQVcsQ0FBQzlCLElBQVosQ0FBaUJ1QixTQUFTLENBQUNoRCxZQUFWO0FBQUE7QUFBQSxnREFBa0NzRCxrQkFBbEMsQ0FBcURVLEtBQXJELEVBQTRELE1BQTVELEVBQWtFRSxPQUFsRSxFQUEyRSxJQUFJckcsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLENBQTNFLENBQWpCO0FBQ0g7QUFDSixpQkFkRCxNQWNPLENBQ0g7QUFDSDtBQUNKLGVBeEJNLENBQVA7QUF5QkgsYUEvQkQ7O0FBZ0NBLGlCQUFLLElBQUlpQyxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHK0QsUUFBUSxDQUFDOUQsTUFBN0IsRUFBcUNELEdBQUMsRUFBdEMsRUFBMEM7QUFDdENpRSxjQUFBQSxjQUFjLENBQUNqRSxHQUFELEVBQUkrRCxRQUFRLENBQUMvRCxHQUFELENBQVosQ0FBZDtBQUNILGFBN0RhLENBOERkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsbUJBQU9tQixPQUFPLENBQUNLLEdBQVIsQ0FBWWlDLFdBQVosQ0FBUDtBQUNIOzs7NENBRWlCN0QsSSxFQUFZO0FBQzFCLGlCQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1gsYUFBTCxDQUFtQlksTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQUl3RSxLQUFLLEdBQUcsS0FBS25GLGFBQUwsQ0FBbUJXLENBQW5CLENBQVo7O0FBQ0Esa0JBQUl3RSxLQUFLLENBQUNDLElBQU4sS0FBZTdFLElBQUksQ0FBQzZFLElBQXhCLEVBQThCO0FBQzFCLHFCQUFLcEYsYUFBTCxDQUFtQnFGLE1BQW5CLENBQTBCMUUsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDSDtBQUNKOztBQUNELGdCQUFJLEtBQUtYLGFBQUwsQ0FBbUJZLE1BQW5CLEtBQThCLENBQTlCLElBQW1DLEtBQUtoQixnQkFBTCxJQUF5QixLQUFLQyxRQUFMLENBQWMsV0FBZCxFQUEyQmUsTUFBM0IsR0FBb0MsQ0FBcEcsRUFBdUc7QUFDbkcsa0JBQUksS0FBS1AsY0FBVCxFQUF5QjtBQUNyQixxQkFBS0EsY0FBTDtBQUNBLHFCQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtMLGFBQVo7QUFDSDs7O3dDQUNhc0YsRyxFQUFhO0FBQ3ZCLGlCQUFLbkYsY0FBTCxDQUFvQlUsWUFBcEI7QUFBQTtBQUFBLGtEQUFpRDBFLGFBQWpELENBQStERCxHQUEvRDtBQUNIOzs7MkNBQ2dCO0FBQ2I7QUFDQTtBQUNBLGlCQUFLeEYsS0FBTCxDQUFXOEIsUUFBWCxDQUFvQixXQUFwQjtBQUNBLGlCQUFLckIsSUFBTCxDQUFVUyxJQUFWLENBQWUsa0JBQWYsRUFKYSxDQUtiO0FBQ0g7OzswQ0FFZTZDLFMsRUFBaUI7QUFDN0I7QUFDQSxnQkFBSTJCLFFBQVEsR0FBRzNCLFNBQVMsQ0FBQ2hELFlBQVY7QUFBQTtBQUFBLHVDQUFmOztBQUNBLGdCQUFJMkUsUUFBSixFQUFjO0FBQ1Ysa0JBQUlDLFVBQVUsR0FBR0QsUUFBUSxDQUFDRSxrQkFBVCxFQUFqQixDQURVLENBRVY7QUFDQTs7QUFDQSxrQkFBSW5GLElBQUksR0FBRy9CLFdBQVcsQ0FBQyxLQUFLbUgscUJBQUwsQ0FBMkJGLFVBQTNCLENBQUQsQ0FBdEI7QUFDQWxGLGNBQUFBLElBQUksQ0FBQ3dELE1BQUwsR0FBYyxLQUFLeEQsSUFBbkI7QUFDQUEsY0FBQUEsSUFBSSxDQUFDcUMsUUFBTCxHQUFnQmlCLFNBQVMsQ0FBQ2pCLFFBQTFCO0FBQ0FyQyxjQUFBQSxJQUFJLENBQUNNLFlBQUw7QUFBQTtBQUFBLDhDQUErQnFELElBQS9CLENBQW9DLEtBQUsvRCxjQUFMLENBQW9CeUYsYUFBcEIsR0FBb0N6RSxJQUF4RSxFQUE4RSxLQUFLaEIsY0FBbkYsRUFBbUcsS0FBS0QsTUFBeEc7QUFDSDtBQUNKOzs7NkNBQ2tCO0FBQ2YsbUJBQU8sS0FBS0ksNkJBQVo7QUFDSDs7OztRQXBhZ0NsQyxTOzs7OztpQkFHQyxJOzs7Ozs7O2lCQUdFLEU7Ozs7Ozs7aUJBWUYsRTs7Ozs7OztpQkFNRyxJOzs7Ozs7O2lCQUdYLEk7Ozs7Ozs7aUJBRVMsRTs7Ozs7OztpQkFJTSxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBKc29uQXNzZXQsIFByZWZhYiwgaW5zdGFudGlhdGUsIHYzLCBWZWMyLCBUd2VlbiwgcmFuZG9tLCBWZWMzLCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIHByb2ZpbGVyLCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBHcm91bmRUaWxlZCB9IGZyb20gJy4vR3JvdW5kVGlsZWQvR3JvdW5kVGlsZWQnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEVuZW15QnVsbGV0IH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCdWxsZXQnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIERlYWRFbmVteU9iaiB7XHJcbiAgICAvL+atu+WOu+aVjOS6uueahOe7k+aehOS9k1xyXG4gICAgcHVibGljIGVuZW15VHlwZSA9IFwiXCI7XHJcbiAgICBwdWJsaWMgZHJvcEdvbGRDb3VudCA9IDA7XHJcbiAgICAvLyBwdWJsaWMgZW5lbXlJY29uU3ByaXRlRnJhbWUgPSAwOyAvL+aVjOS6uueahGljb25cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGRyb3BHb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW5lbXlUeXBlID0gdHlwZTsgLy/mlYzkurrnmoTnp43nsbtcclxuICAgICAgICB0aGlzLmRyb3BHb2xkQ291bnQgPSBkcm9wR29sZENvdW50OyAvL+aVjOS6uueahOaOieiQveeahOmHkeW4geaVsOebriBcclxuICAgIH1cclxufTtcclxuQGNjY2xhc3MoJ0VuZW15Q29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdSZXM6IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudExldmVsTnVtID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVNYXhFbmVteUNvdW50ID0gMDsgLy/lvZPliY3ms6LmrKHmnIDlpKfnmoTmlYzkurrmlbBcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F2ZURhdGE6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydFBvc05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBib3Nzc1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15QnVsbGV0UHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTsgLy/mlYzkurrnmoTlrZDlvLnpooTliLbkvZPnmoTliJfooahcclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlRHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbGxXYXZlQWRkT3ZlckNiID0gbnVsbDsgLy/miYDmnInnmoTms6LmrKHnmoTmlYzkurrpg73lop7liqDlrozmr5XnmoTlm57osINcclxuICAgIHByaXZhdGUgYWxsRW5lbXlEZWFkQ2IgPSBudWxsOyAvL+aJgOacieeahOaVjOS6uumDveatu+S6hueahOWbnuiwgyBcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDogRGVhZEVuZW15T2JqW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IEpzb25Bc3NldH0pXHJcbiAgICAvLyBwdWJsaWMgR2FtZUxldmVsQ29uZmlnOiBKc29uQXNzZXQgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChjYikgPT4ge1xyXG4gICAgICAgICAgICAvL+WIoOmZpOW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICBsZXQgdG90YWxHb2xkID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgdG90YWxHb2xkICs9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IodG90YWxHb2xkKTsgLy/plIDmr4HnmoTmlYzkurrnmoQg5oyB5pyJ55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0LWxldmVsLWxhYmVsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbmZpZ1Jlcy5qc29uO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVtdC1vdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1vbmUtYm9zc1wiKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IHRoaXMud2F2ZURhdGFbXCJFbmVteVR5cGVcIl1bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteUR1cmFjdGlvbiA9IHRoaXMud2F2ZURhdGFbJ0FkZEVuZW15RHVyYWN0aW9uJ11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsV2F2ZUFkZE92ZXJDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiA5rOi5pWM5Lq65aKe5Yqg5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdnYW1lLW92ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmFkZEVuZW15RHVyYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICAvLyBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zaG93Qm9zc0ljb25BbmltKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVuZW15QmFzZSA9IGJvc3NOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteUJhc2UucGxheUJvc3NFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0ID0gW107XHJcbiAgICAgICAgLy/lnKjov5nph4zpnIDopoHliJ3lp4vljJbkuIDkupvmuLjmiI/mlbDmja4gXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcbiAgICAgICAgLy8gdGhpcy53YXZlRGF0YSA9IHRoaXMuR2FtZUxldmVsQ29uZmlnLmpzb25bJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG5cclxuICAgICAgICB9LCAzKTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnRpbnVlR2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgtLTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcbiAgICAgICAgLy8gdGhpcy53YXZlRGF0YSA9IHRoaXMuR2FtZUxldmVsQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1c2hPbmVFbmVteURlYWREYXRhKGVuZW15RGVhZERhdGE6IERlYWRFbmVteU9iaikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVzaCBvbmUgZW5lbXkgZGVhZCBkYXRhXCIsIGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QucHVzaChlbmVteURlYWREYXRhKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWN0aXZlRW5lbXkoZW5lbXlEZWFkRGF0YS5lbmVteVR5cGUpO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvL+i/m+WFpWJvc3Mg5bGV56S655qE54q25oCBXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gdjMoYm9zc05vZGUucG9zaXRpb24pLmFkZCh2Myg1LCAyLCA1KSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRFdWxlckFuZ2xlcyA9IHYzKHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcykuYWRkKHYzKDM1LCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjMoYm9zc05vZGUucG9zaXRpb24ueCArIDEwLCBib3NzTm9kZS5wb3NpdGlvbi55ICsgNyxib3NzTm9kZS5wb3NpdGlvbi56ICsgMTApXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbikuYWRkKGFkZFBvcyk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBhZGRBbmdsZVZhbHVlID0gMjU7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcyA9IHYzKGV1bGVyQW5nbGVzLnggKyAyNSwgZXVsZXJBbmdsZXMueSwgZXVsZXJBbmdsZXMueik7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgLy8gICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgIC8vICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogZW5kUG9zLFxyXG4gICAgLy8gICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGVuZEV1bGVyQW5nbGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gb3J0aG9IZWlnaHQ6IDYwXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLm9ydGhvSGVpZ2h0ID0gNTtcXFxyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDYgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93Q2FtZXJhQmFja0FuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7plZzlpLTov5Tlm57nmoTliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMzAsIDQyLCAzMCksXHJcbiAgICAgICAgICAgICAgICBldWxlckFuZ2xlczogdjMoLTQ1LCA0NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogMjIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZUJvc3NFbmVteSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4qmJvc3NcIilcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFswXS50eXBlO1xyXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgIC8vIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WxleekumJvc3Mg5Ye65Zy655WM6Z2iIFxyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaG93Q2FtZXJhRm9jdXNCb29zQW5pbShlbmVteU5vZGUpXHJcbiAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5Qm9zc0VudGVyQW5pbShlbmVteU5vZGUpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaG93Q2FtZXJhQmFja0FuaW0oKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mlYzkurrnu6fnu63mkq3mlL7ooYzotbDliqjnlLtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIilcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMylcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbSgxLCB0aGlzLCBwb3MsIG5ldyBWZWMyKDUsIDUpKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFkZE9uZVdhdmVFbmVteSgpIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBhZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZUluZGV4ID0gMDtcclxuICAgICAgICBsZXQgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWF4RW5lbXlDb3VudCArPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2ldLmNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHlwZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YXZlRGF0YS5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlTGlzdC5wdXNoKHdhdmVEYXRhLnR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZSBsaXN0XCIsIHR5cGVMaXN0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heCBlbmVteSBjb3VudFwiLCBtYXhFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBpZiAobWF4RW5lbXlDb3VudCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCLmlbDmja7plJnor69cIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHJhbmRvbVN0YXJ0SW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBpbmRleExpc3QubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVPbmVFbmVteSA9IChpbmRleDogbnVtYmVyLCB0eXBlOiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gcmFuZG9tU3RhcnRJbmRleCArIGluZGV4O1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4IC09IGluZGV4TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3N0YXJ0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0sIDAuMSAqIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKG5vZGUpICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB0aGlzLmdhbWVDb250cm9sbGVyLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oaW5kZXgsIHRoaXMsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKFByb21pc2UucmVzb2x2ZSgpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU9uZUVuZW15KGksIHR5cGVMaXN0W2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGlsZSAoYWRkRW5lbXlDb3VudCA8IG1heEVuZW15Q291bnQpIHtcclxuICAgICAgICAvLyAgICAgLy8gYWRkRW5lbXlDb3VudCArKztcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJyYW5kb20gaW5kZXhcIiwgcmFuZG9tSW5kZXgpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmFuZG9tSW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmFuZG9tSW5kZXggPSAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobkuIDkuKrnqbrkvY3nva5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRFbmVteVR5cGUgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbm0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtlbmVteVR5cGVJbmRleF07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHR5cGUgPSB3YXZlRGF0YS50eXBlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBjb3VudCA9IHdhdmVEYXRhLmNvdW50O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh3YXZlQWRkRW5lbXlDb3VudCA+PSBjb3VudCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVuZW15VHlwZUluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4quaVjOS6ulwiKVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcmFuZG9tSW5kZXgrK1xyXG4gICAgICAgIC8vICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRW5lbXlJbkxpc3Qobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGVuZW15LnV1aWQgPT09IG5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxFbmVteURlYWRDYikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgZW5lbXlBdHRhY2tlZChudW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5lbmVteUF0dGFja2VkKG51bSk7XHJcbiAgICB9XHJcbiAgICBmcm96ZW5BbGxFbmVteSgpIHtcclxuICAgICAgICAvL+WGsOWGu+aJgOacieaVjOS6ulxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuZW5lbSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImdhbWUtb3ZlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImZyb3plbi1hbGwtZW5lbXlcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGJvc3NTaG9vdE9uZUVnZyhlbmVteU5vZGU6IE5vZGUpIHtcclxuICAgICAgICAvL2Jvc3Mg5Y+R5bCE5LqG5LiA5p6a6bih6JuLXHJcbiAgICAgICAgbGV0IGVuZW15Q29tID0gZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgIGlmIChlbmVteUNvbSkge1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0VHlwZSA9IGVuZW15Q29tLmdldEVuZW15QnVsbGV0VHlwZSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaVjOS6uueahOWtkOW8ueexu+Wei+aYryBcIiwgYnVsbGV0VHlwZSk7XHJcbiAgICAgICAgICAgIC8vIOagueaNruaVjOS6uueahOWtkOW8ueexu+Wei++8jOWIneWni+WMluS4gOS4quWtkOW8uVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlCdWxsZXRQcmVmYWJMaXN0W2J1bGxldFR5cGVdKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBlbmVteU5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QnVsbGV0KS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb24sIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXREZWFkRW5lbXlEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==