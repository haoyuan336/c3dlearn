System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./GameController.js", "./Enemys/EnemyBullet.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, CameraComponent, State, EnemyBase, GroundMapCtl, GroundTiled, GameController, EnemyBullet, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, DeadEnemyObj, EnemyController;

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
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
            this.state.setState("enter-next-wave");
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
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
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
            } // console.log("max enemy count", maxEnemyCount);


            if (maxEnemyCount >= indexList.length) {
              console.error("数据错误");
              return;
            }

            while (addEnemyCount < maxEnemyCount) {
              // addEnemyCount ++;
              // console.log("random index", randomIndex);
              if (randomIndex >= indexList.length) {
                randomIndex = 0;
              }

              var indexV2 = indexList[randomIndex];
              var node = nodeMapList.getValue(indexV2.x, indexV2.y);

              if (node && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                error: Error()
              }), GroundTiled) : GroundTiled)) {
                var groundTiled = node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                  error: Error()
                }), GroundTiled) : GroundTiled);

                if (groundTiled.getIsVoid()) {
                  // console.log("找到了一个空位置");
                  // let currentEnemyType = this.currentRandomEnemyTypeList
                  // let enemyNode = instantiate(this.enenm)
                  var waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
                  var type = waveData.type;
                  var count = waveData.count;

                  if (waveAddEnemyCount >= count) {
                    waveAddEnemyCount = 0;
                    enemyTypeIndex++;
                  }

                  var enemyNode = instantiate(this.enemysPrefabList[type]); // console.log("enemy node", enemyNode)

                  enemyNode.parent = this.node;
                  enemyNode.position = v3(node.position.x, 0, node.position.z);
                  enemyNode.active = false;
                  enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).init(this.gameConfig, this.gameController, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);

                  promiseList.push(enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(addEnemyCount, this, indexV2, new Vec2(5, 5)));
                  addEnemyCount++;
                  this.enemyNodeList.push(enemyNode); // console.log("增加一个敌人")
                } // randomIndex++


                randomIndex = Math.round(Math.random() * (indexList.length - 1));
              } else {
                addEnemyCount++;
              }
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3RhdGUiLCJFbmVteUJhc2UiLCJHcm91bmRNYXBDdGwiLCJHcm91bmRUaWxlZCIsIkdhbWVDb250cm9sbGVyIiwiRW5lbXlCdWxsZXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEZWFkRW5lbXlPYmoiLCJ0eXBlIiwiZHJvcEdvbGRDb3VudCIsImVuZW15VHlwZSIsIkVuZW15Q29udHJvbGxlciIsImdhbWVDb25maWciLCJjdXJyZW50V2F2ZUluZGV4Iiwid2F2ZURhdGEiLCJzdGF0ZSIsImFkZEVuZW15RHVyYWN0aW9uIiwiZW5lbXlOb2RlTGlzdCIsImN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0IiwiZW5kUG9zIiwiZ2FtZUNvbnRyb2xsZXIiLCJhbGxXYXZlQWRkT3ZlckNiIiwiYWxsRW5lbXlEZWFkQ2IiLCJjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCIsIm5vZGUiLCJvbiIsImNiIiwidG90YWxHb2xkIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJkZXN0cm95IiwiZW1pdCIsImdldEN1cnJlbnRMZXZlbE51bSIsImdhbWVDb25maWdSZXMiLCJqc29uIiwiYWRkU3RhdGUiLCJhZGRPbmVCb3NzRW5lbXkiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwic2NoZWR1bGVPbmNlIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsImJvc3NOb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlbmVteUJhc2UiLCJwbGF5Qm9zc0VudGVyQW5pbSIsImFsbCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lV2luIiwiZW5lbXlEZWFkRGF0YSIsInB1c2giLCJwbGF5ZXJEYXRhIiwiYWN0aXZlRW5lbXkiLCJ0dyIsImNhbWVyYU5vZGUiLCJ0byIsInBvc2l0aW9uIiwiZXVsZXJBbmdsZXMiLCJjYWxsIiwic3RhcnQiLCJvcnRob0hlaWdodCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvcyIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiZW5lbXlOb2RlIiwiYm9zc3NQcmVmYWJMaXN0IiwicGFyZW50IiwieiIsImFjdGl2ZSIsImluaXQiLCJzaG93RW5lbXlFbnRlckFuaW0iLCJwcm9taXNlTGlzdCIsImFkZEVuZW15Q291bnQiLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImNvdW50IiwiZXJyb3IiLCJpbmRleFYyIiwiZ3JvdW5kVGlsZWQiLCJnZXRJc1ZvaWQiLCJlbmVteXNQcmVmYWJMaXN0IiwiZW5lbXkiLCJ1dWlkIiwic3BsaWNlIiwibnVtIiwiZW5lbXlBdHRhY2tlZCIsImVuZW15Q29tIiwiYnVsbGV0VHlwZSIsImdldEVuZW15QnVsbGV0VHlwZSIsImVuZW15QnVsbGV0UHJlZmFiTGlzdCIsImdldEdhbWVDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtB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STs7Ozs7OztpQkFHWCxJOzs7Ozs7O2lCQUVTLEU7Ozs7Ozs7aUJBSU0sRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMywgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBwcm9maWxlciB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBFbmVteUJ1bGxldCB9IGZyb20gJy4vRW5lbXlzL0VuZW15QnVsbGV0JztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBEZWFkRW5lbXlPYmoge1xyXG4gICAgLy/mrbvljrvmlYzkurrnmoTnu5PmnoTkvZNcclxuICAgIHB1YmxpYyBlbmVteVR5cGUgPSBcIlwiO1xyXG4gICAgcHVibGljIGRyb3BHb2xkQ291bnQgPSAwO1xyXG4gICAgLy8gcHVibGljIGVuZW15SWNvblNwcml0ZUZyYW1lID0gMDsgLy/mlYzkurrnmoRpY29uXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkcm9wR29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVuZW15VHlwZSA9IHR5cGU7IC8v5pWM5Lq655qE56eN57G7XHJcbiAgICAgICAgdGhpcy5kcm9wR29sZENvdW50ID0gZHJvcEdvbGRDb3VudDsgLy/mlYzkurrnmoTmjonokL3nmoTph5HluIHmlbDnm64gXHJcbiAgICB9XHJcbn07XHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYm9zc3NQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUJ1bGxldFByZWZhYkxpc3Q6IFByZWZhYltdID0gW107IC8v5pWM5Lq655qE5a2Q5by56aKE5Yi25L2T55qE5YiX6KGoXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7IC8v5omA5pyJ55qE5rOi5qyh55qE5pWM5Lq66YO95aKe5Yqg5a6M5q+V55qE5Zue6LCDXHJcbiAgICBwcml2YXRlIGFsbEVuZW15RGVhZENiID0gbnVsbDsgLy/miYDmnInnmoTmlYzkurrpg73mrbvkuobnmoTlm57osIMgXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q6IERlYWRFbmVteU9ialtdID0gW107XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGNiKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEdvbGQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICB0b3RhbEdvbGQgKz0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYih0b3RhbEdvbGQpOyAvL+mUgOavgeeahOaVjOS6uueahCDmjIHmnInnmoTph5HluIHkuKrmlbBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXQtbGV2ZWwtbGFiZWxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnUmVzLmpzb247XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLW9uZS1ib3NzXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxXYXZlQWRkT3ZlckNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZUJvc3NFbmVteSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2dhbWUtb3ZlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIC8vIGZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSWNvbkFuaW0oKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlCYXNlID0gYm9zc05vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJhc2UpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15QmFzZS5wbGF5Qm9zc0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAvL+WcqOi/memHjOmcgOimgeWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNriBcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29udGludWVHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleC0tO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdXNoT25lRW5lbXlEZWFkRGF0YShlbmVteURlYWREYXRhOiBEZWFkRW5lbXlPYmopIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInB1c2ggb25lIGVuZW15IGRlYWQgZGF0YVwiLCBlbmVteURlYWREYXRhKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0LnB1c2goZW5lbXlEZWFkRGF0YSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFjdGl2ZUVuZW15KGVuZW15RGVhZERhdGEuZW5lbXlUeXBlKTtcclxuICAgIH1cclxuICAgIC8vIHNob3dDYW1lcmFGb2N1c0Jvb3NBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgLy/ov5vlhaVib3NzIOWxleekuueahOeKtuaAgVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImVudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZVwiKTtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbilcclxuICAgIC8vICAgICAgICAgbGV0IGVuZFBvcyA9IHYzKGJvc3NOb2RlLnBvc2l0aW9uKS5hZGQodjMoNSwgMiwgNSkpO1xyXG4gICAgLy8gICAgICAgICBsZXQgZW5kRXVsZXJBbmdsZXMgPSB2Myh0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXMpLmFkZCh2MygzNSwgMCwgMCkpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKGJvc3NOb2RlLnBvc2l0aW9uLnggKyAxMCwgYm9zc05vZGUucG9zaXRpb24ueSArIDcsYm9zc05vZGUucG9zaXRpb24ueiArIDEwKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myh0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24pLmFkZChhZGRQb3MpO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGV1bGVyQW5nbGVzID0gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgYWRkQW5nbGVWYWx1ZSA9IDI1O1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXMgPSB2MyhldWxlckFuZ2xlcy54ICsgMjUsIGV1bGVyQW5nbGVzLnksIGV1bGVyQW5nbGVzLnopO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXNcclxuICAgIC8vICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZSk7XHJcbiAgICAvLyAgICAgICAgIHR3LnRvKDAuNSwge1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGVuZFBvcyxcclxuICAgIC8vICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBlbmRFdWxlckFuZ2xlcyxcclxuICAgIC8vICAgICAgICAgICAgIC8vIG9ydGhvSGVpZ2h0OiA2MFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KS5vcnRob0hlaWdodCA9IDU7XFxcclxuICAgIC8vICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiA2IH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfSlcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0NhbWVyYUJhY2tBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6ZWc5aS06L+U5Zue55qE5Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuNSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKDMwLCA0MiwgMzApLFxyXG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKC00NSwgNDUsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDIyIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRPbmVCb3NzRW5lbXkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlop7liqDkuIDkuKpib3NzXCIpXHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUocG9zLngsIHBvcy55KTtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbMF0udHlwZTtcclxuICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5ib3Nzc1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAvLyBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIC8vIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/lsZXnpLpib3NzIOWHuuWcuueVjOmdoiBcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUJvc3NFbnRlckFuaW0oZW5lbXlOb2RlKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0NhbWVyYUJhY2tBbmltKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pWM5Lq657un57ut5pKt5pS+6KGM6LWw5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIH0sIDMpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oMSwgdGhpcywgcG9zLCBuZXcgVmVjMig1LCA1KSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lop7liqDkuIDms6LmlYzkurpcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgYWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBlbmVteVR5cGVJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtpXS5jb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChhZGRFbmVteUNvdW50IDwgbWF4RW5lbXlDb3VudCkge1xyXG4gICAgICAgICAgICAvLyBhZGRFbmVteUNvdW50ICsrO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmRvbSBpbmRleFwiLCByYW5kb21JbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huS4gOS4quepuuS9jee9rlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEVuZW15VHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVubSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2VuZW15VHlwZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHdhdmVEYXRhLnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gd2F2ZURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhdmVBZGRFbmVteUNvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5Liq5pWM5Lq6XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByYW5kb21JbmRleCsrXHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbmVteUluTGlzdChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkudXVpZCA9PT0gbm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoID09PSAwICYmIHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEVuZW15RGVhZENiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmVuZW15QXR0YWNrZWQobnVtKTtcclxuICAgIH1cclxuICAgIGZyb3plbkFsbEVuZW15KCkge1xyXG4gICAgICAgIC8v5Yaw5Ya75omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5lbmVtKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZnJvemVuLWFsbC1lbmVteVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgYm9zc1Nob290T25lRWdnKGVuZW15Tm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vYm9zcyDlj5HlsITkuobkuIDmnprpuKHom4tcclxuICAgICAgICBsZXQgZW5lbXlDb20gPSBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgaWYgKGVuZW15Q29tKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXRUeXBlID0gZW5lbXlDb20uZ2V0RW5lbXlCdWxsZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pWM5Lq655qE5a2Q5by557G75Z6L5pivIFwiLCBidWxsZXRUeXBlKTtcclxuICAgICAgICAgICAgLy8g5qC55o2u5pWM5Lq655qE5a2Q5by557G75Z6L77yM5Yid5aeL5YyW5LiA5Liq5a2Q5by5XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteUJ1bGxldFByZWZhYkxpc3RbYnVsbGV0VHlwZV0pO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGVuZW15Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCdWxsZXQpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbiwgdGhpcy5nYW1lQ29udHJvbGxlciwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19