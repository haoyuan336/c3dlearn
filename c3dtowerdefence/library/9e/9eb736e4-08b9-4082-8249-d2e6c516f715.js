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
          value: function enemyAttacked() {
            this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).enemyAttacked();
          }
        }, {
          key: "frozenAllEnemy",
          value: function frozenAllEnemy() {
            //冰冻所有敌人
            // for (let i = 0 ; i < this.enem){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3RhdGUiLCJFbmVteUJhc2UiLCJHcm91bmRNYXBDdGwiLCJHcm91bmRUaWxlZCIsIkdhbWVDb250cm9sbGVyIiwiRW5lbXlCdWxsZXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEZWFkRW5lbXlPYmoiLCJ0eXBlIiwiZHJvcEdvbGRDb3VudCIsImVuZW15VHlwZSIsIkVuZW15Q29udHJvbGxlciIsImdhbWVDb25maWciLCJjdXJyZW50V2F2ZUluZGV4Iiwid2F2ZURhdGEiLCJzdGF0ZSIsImFkZEVuZW15RHVyYWN0aW9uIiwiZW5lbXlOb2RlTGlzdCIsImN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0IiwiZW5kUG9zIiwiZ2FtZUNvbnRyb2xsZXIiLCJhbGxXYXZlQWRkT3ZlckNiIiwiYWxsRW5lbXlEZWFkQ2IiLCJjdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCIsIm5vZGUiLCJvbiIsImNiIiwidG90YWxHb2xkIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJkZXN0cm95IiwiZW1pdCIsImdldEN1cnJlbnRMZXZlbE51bSIsImdhbWVDb25maWdSZXMiLCJqc29uIiwiYWRkU3RhdGUiLCJhZGRPbmVCb3NzRW5lbXkiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwic2NoZWR1bGVPbmNlIiwic2V0U3RhdGUiLCJib3NzTm9kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZW5lbXlCYXNlIiwicGxheUJvc3NFbnRlckFuaW0iLCJhbGwiLCJjb25zb2xlIiwibG9nIiwiZ2FtZVdpbiIsImVuZW15RGVhZERhdGEiLCJwdXNoIiwidHciLCJjYW1lcmFOb2RlIiwidG8iLCJwb3NpdGlvbiIsImV1bGVyQW5nbGVzIiwiY2FsbCIsInN0YXJ0Iiwib3J0aG9IZWlnaHQiLCJpbmRleExpc3QiLCJnZXRJbkVkYWdlSW5kZXhMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3MiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJ4IiwieSIsImVuZW15Tm9kZSIsImJvc3NzUHJlZmFiTGlzdCIsInBhcmVudCIsInoiLCJhY3RpdmUiLCJpbml0Iiwic2hvd0VuZW15RW50ZXJBbmltIiwicHJvbWlzZUxpc3QiLCJhZGRFbmVteUNvdW50IiwiZW5lbXlUeXBlSW5kZXgiLCJ3YXZlQWRkRW5lbXlDb3VudCIsIm1heEVuZW15Q291bnQiLCJjb3VudCIsImVycm9yIiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15IiwidXVpZCIsInNwbGljZSIsImVuZW15QXR0YWNrZWQiLCJlbmVteUNvbSIsImJ1bGxldFR5cGUiLCJnZXRFbmVteUJ1bGxldFR5cGUiLCJlbmVteUJ1bGxldFByZWZhYkxpc3QiLCJnZXRHYW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSztBQUFxQkMsTUFBQUEsZSxPQUFBQSxlOzs7O0FBQzVGQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxXLDZCQUFBQSxXOztBQUdBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUVBQyxNQUFBQSxXLHdCQUFBQSxXOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQmhCLFUsQ0FBdEJnQixPO0FBQVNDLE1BQUFBLFEsR0FBYWpCLFUsQ0FBYmlCLFE7OzhCQUNKQyxZLEdBQ1Q7QUFHQTtBQUNBLDRCQUFZQyxJQUFaLEVBQWtCQyxhQUFsQixFQUF5QztBQUFBOztBQUFBLGFBSGxDQyxTQUdrQyxHQUh0QixFQUdzQjtBQUFBLGFBRmxDRCxhQUVrQyxHQUZsQixDQUVrQjtBQUNyQyxhQUFLQyxTQUFMLEdBQWlCRixJQUFqQixDQURxQyxDQUNkOztBQUN2QixhQUFLQyxhQUFMLEdBQXFCQSxhQUFyQixDQUZxQyxDQUVEO0FBQ3ZDLE87O0FBQ0o7O2lDQUVZRSxlLFdBRFpOLE9BQU8sQ0FBQyxpQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVoQjtBQUFSLE9BQUQsQyxVQUdSYyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFZjtBQUFSLE9BQUQsQyxVQVlSYSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFakI7QUFBUixPQUFELEMsVUFNUmUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWpCO0FBQVIsT0FBRCxDLFVBR1JlLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVqQjtBQUFSLE9BQUQsQyxVQUVSZSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFZjtBQUFSLE9BQUQsQyxVQUlSYSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFZjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBeEJEbUIsVSxHQUFpQixJO2dCQUdqQkMsZ0IsR0FBMkIsQztnQkFDM0JDLFEsR0FBZSxJO2dCQUNmQyxLLEdBQWU7QUFBQTtBQUFBLCtCO2dCQUNmQyxpQixHQUE0QixDO2dCQUM1QkMsYSxHQUF3QixFO2dCQUN4QkMsMEIsR0FBNkIsRTs7OztnQkFLOUJDLE0sR0FBZSxJOzs7Ozs7Ozs7O2dCQWtCZkMsYyxHQUFpQyxJO2dCQUNoQ0MsZ0IsR0FBbUIsSTtnQkFDbkJDLGMsR0FBaUIsSTtnQkFHakJDLDZCLEdBQWdELEU7Ozs7OzttQ0FDL0M7QUFBQTs7QUFDTCxpQkFBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsbUJBQWIsRUFBa0MsVUFBQ0MsRUFBRCxFQUFRO0FBQ3RDO0FBQ0Esa0JBQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxtQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLE1BQUksQ0FBQ1gsYUFBTCxDQUFtQlksTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsb0JBQUlKLElBQUksR0FBRyxNQUFJLENBQUNQLGFBQUwsQ0FBbUJXLENBQW5CLENBQVg7QUFDQUQsZ0JBQUFBLFNBQVMsSUFBSUgsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSw0Q0FBNkJDLG1CQUE3QixFQUFiO0FBQ0FQLGdCQUFBQSxJQUFJLENBQUNRLE9BQUw7QUFDSDs7QUFDRCxjQUFBLE1BQUksQ0FBQ2YsYUFBTCxHQUFxQixFQUFyQjs7QUFDQSxrQkFBSVMsRUFBSixFQUFRO0FBQ0pBLGdCQUFBQSxFQUFFLENBQUNDLFNBQUQsQ0FBRixDQURJLENBQ1c7QUFDbEI7QUFDSixhQVpEO0FBYUEsaUJBQUtILElBQUwsQ0FBVUMsRUFBVixDQUFhLGtCQUFiLEVBQWlDLFlBQU07QUFDbkMsY0FBQSxNQUFJLENBQUNELElBQUwsQ0FBVVMsSUFBVixDQUFlLDBCQUFmLEVBQTJDLE1BQUksQ0FBQ2IsY0FBTCxDQUFvQmMsa0JBQXBCLEVBQTNDLEVBQXFGLENBQXJGO0FBQ0gsYUFGRDtBQUdIOzs7a0NBQ087QUFBQTs7QUFDSjtBQUNBLGlCQUFLdEIsVUFBTCxHQUFrQixLQUFLdUIsYUFBTCxDQUFtQkMsSUFBckM7QUFDQSxpQkFBS2hCLGNBQUwsR0FBc0IsS0FBS0ksSUFBTCxDQUFVTSxZQUFWO0FBQUE7QUFBQSxpREFBdEI7QUFDQSxpQkFBS1gsTUFBTCxHQUFjeEIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFoQjtBQUNBLGlCQUFLb0IsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQixpQkFBcEIsRUFBdUMsWUFBTTtBQUN6QyxrQkFBSSxNQUFJLENBQUN4QixnQkFBTCxJQUF5QixNQUFJLENBQUNDLFFBQUwsQ0FBYyxXQUFkLEVBQTJCZSxNQUF4RCxFQUFnRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELGNBQUEsTUFBSSxDQUFDWCwwQkFBTCxHQUFrQyxNQUFJLENBQUNKLFFBQUwsQ0FBYyxXQUFkLEVBQTJCLE1BQUksQ0FBQ0QsZ0JBQWhDLENBQWxDO0FBQ0EsY0FBQSxNQUFJLENBQUNHLGlCQUFMLEdBQXlCLE1BQUksQ0FBQ0YsUUFBTCxDQUFjLG1CQUFkLEVBQW1DLE1BQUksQ0FBQ0QsZ0JBQXhDLENBQXpCOztBQUNBLGNBQUEsTUFBSSxDQUFDVyxJQUFMLENBQVVTLElBQVYsQ0FBZSwwQkFBZixFQUEyQyxNQUFJLENBQUNiLGNBQUwsQ0FBb0JjLGtCQUFwQixFQUEzQyxFQUFxRixNQUFJLENBQUNyQixnQkFBMUY7O0FBQ0Esa0JBQUksTUFBSSxDQUFDQSxnQkFBTCxLQUEwQixNQUFJLENBQUNDLFFBQUwsQ0FBYyxXQUFkLEVBQTJCZSxNQUEzQixHQUFvQyxDQUFsRSxFQUFxRTtBQUNqRSxvQkFBSSxNQUFJLENBQUNSLGdCQUFULEVBQTJCO0FBQ3ZCLGtCQUFBLE1BQUksQ0FBQ0EsZ0JBQUw7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDQSxnQkFBTCxHQUF3QixJQUF4Qjs7QUFDQSxrQkFBQSxNQUFJLENBQUNpQixlQUFMO0FBQ0g7QUFFSixlQVBELE1BT087QUFDSCxnQkFBQSxNQUFJLENBQUNDLGVBQUwsR0FBdUJDLElBQXZCLENBQTRCLFlBQU07QUFDOUIsa0JBQUEsTUFBSSxDQUFDM0IsZ0JBQUw7O0FBRUEsa0JBQUEsTUFBSSxDQUFDNEIsWUFBTCxDQUFrQixZQUFNO0FBQ3BCLG9CQUFBLE1BQUksQ0FBQzFCLEtBQUwsQ0FBVzJCLFFBQVgsQ0FBb0IsaUJBQXBCO0FBQ0gsbUJBRkQsRUFFRyxNQUFJLENBQUMxQixpQkFGUjtBQUdILGlCQU5EO0FBT0g7QUFDSixhQTFCRCxFQUxJLENBZ0NKO0FBQ0E7QUFDQTtBQUNIOzs7NENBRWlCMkIsUSxFQUFnQjtBQUFBOztBQUM5QjtBQUNBO0FBQ0EsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUNiLFlBQVQ7QUFBQTtBQUFBLHlDQUFoQjs7QUFDQSxrQkFBSWlCLFNBQUosRUFBZTtBQUNYQSxnQkFBQUEsU0FBUyxDQUFDQyxpQkFBVixHQUE4QlIsSUFBOUIsQ0FBbUMsWUFBTTtBQUNyQ0ssa0JBQUFBLE9BQU87QUFDVixpQkFGRDtBQUdILGVBSkQsTUFJTztBQUNILGdCQUFBLE1BQUksQ0FBQ0osWUFBTCxDQUFrQixZQUFNO0FBQ3BCSSxrQkFBQUEsT0FBTztBQUNWLGlCQUZELEVBRUcsQ0FGSDtBQUdIO0FBRUosYUFaTSxDQUFQO0FBYUg7OztzQ0FDVztBQUFBOztBQUNSLGlCQUFLdEIsNkJBQUwsR0FBcUMsRUFBckMsQ0FEUSxDQUVSOztBQUNBLGlCQUFLVixnQkFBTCxHQUF3QixDQUF4QjtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtGLFVBQUwsQ0FBZ0IsV0FBVyxLQUFLUSxjQUFMLENBQW9CYyxrQkFBcEIsRUFBM0IsQ0FBaEI7QUFFQSxpQkFBS25CLEtBQUwsQ0FBVzJCLFFBQVgsQ0FBb0IsaUJBQXBCO0FBQ0FFLFlBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLENBQ1IsSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3QixjQUFBLE1BQUksQ0FBQ3pCLGdCQUFMLEdBQXdCd0IsT0FBeEI7QUFDSCxhQUZELENBRFEsRUFJUixJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdCLGNBQUEsTUFBSSxDQUFDeEIsY0FBTCxHQUFzQnVCLE9BQXRCO0FBQ0gsYUFGRCxDQUpRLENBQVosRUFPR0wsSUFQSCxDQU9RLFlBQU07QUFDVlUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFDQSxjQUFBLE1BQUksQ0FBQy9CLGNBQUwsQ0FBb0JnQyxPQUFwQixDQUE0QixNQUFJLENBQUM3Qiw2QkFBakM7QUFDSCxhQVZEO0FBV0g7Ozt5Q0FDYztBQUFBOztBQUNYLGlCQUFLVixnQkFBTDtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtGLFVBQUwsQ0FBZ0IsV0FBVyxLQUFLUSxjQUFMLENBQW9CYyxrQkFBcEIsRUFBM0IsQ0FBaEI7QUFDQSxpQkFBS25CLEtBQUwsQ0FBVzJCLFFBQVgsQ0FBb0IsaUJBQXBCO0FBQ0FFLFlBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLENBQ1IsSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3QixjQUFBLE1BQUksQ0FBQ3pCLGdCQUFMLEdBQXdCd0IsT0FBeEI7QUFDSCxhQUZELENBRFEsRUFJUixJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdCLGNBQUEsTUFBSSxDQUFDeEIsY0FBTCxHQUFzQnVCLE9BQXRCO0FBQ0gsYUFGRCxDQUpRLENBQVosRUFPR0wsSUFQSCxDQU9RLFlBQU07QUFDVlUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFDQSxjQUFBLE1BQUksQ0FBQy9CLGNBQUwsQ0FBb0JnQyxPQUFwQixDQUE0QixNQUFJLENBQUM3Qiw2QkFBakM7QUFDSCxhQVZEO0FBV0g7OzsrQ0FDb0I4QixhLEVBQTZCO0FBQzlDSCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q0UsYUFBeEM7QUFDQSxpQkFBSzlCLDZCQUFMLENBQW1DK0IsSUFBbkMsQ0FBd0NELGFBQXhDO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OytDQUVxQjtBQUFBOztBQUNqQjtBQUNBLG1CQUFPLElBQUlULE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUlTLEVBQUUsR0FBRyxJQUFJMUQsS0FBSixDQUFVLE1BQUksQ0FBQzJELFVBQWYsQ0FBVDtBQUNBRCxjQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFDUEMsZ0JBQUFBLFFBQVEsRUFBRS9ELEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FETDtBQUVQZ0UsZ0JBQUFBLFdBQVcsRUFBRWhFLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxFQUFOLEVBQVUsQ0FBVjtBQUZSLGVBQVg7QUFJQTRELGNBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLFlBQU07QUFDVmYsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FVLGNBQUFBLEVBQUUsQ0FBQ00sS0FBSDtBQUNBLGtCQUFJaEUsS0FBSixDQUFVLE1BQUksQ0FBQzJELFVBQUwsQ0FBZ0IxQixZQUFoQixDQUE2QmhDLGVBQTdCLENBQVYsRUFBeUQyRCxFQUF6RCxDQUE0RCxHQUE1RCxFQUFpRTtBQUFFSyxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBakUsRUFBc0ZELEtBQXRGO0FBQ0gsYUFYTSxDQUFQO0FBYUg7Ozs0Q0FDaUI7QUFBQTs7QUFDZFgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLGdCQUFJWSxTQUFpQixHQUFHLEtBQUt2QyxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLDhDQUFxQ2tDLG1CQUFyQyxFQUF4QjtBQUNBLGdCQUFJQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLFNBQVMsQ0FBQ2xDLE1BQVYsR0FBbUIsQ0FBcEMsQ0FBWCxDQUFsQjtBQUNBLGdCQUFJd0MsR0FBUyxHQUFHTixTQUFTLENBQUNFLFdBQUQsQ0FBekI7QUFDQSxnQkFBSUssV0FBNEIsR0FBRyxLQUFLOUMsSUFBTCxDQUFVTSxZQUFWO0FBQUE7QUFBQSw4Q0FBcUN5QyxjQUFyQyxFQUFuQztBQUNBLGdCQUFJL0MsSUFBSSxHQUFHOEMsV0FBVyxDQUFDRSxRQUFaLENBQXFCSCxHQUFHLENBQUNJLENBQXpCLEVBQTRCSixHQUFHLENBQUNLLENBQWhDLENBQVg7QUFDQSxnQkFBSWxFLElBQUksR0FBRyxLQUFLVSwwQkFBTCxDQUFnQyxDQUFoQyxFQUFtQ1YsSUFBOUM7QUFDQSxnQkFBSW1FLFNBQVMsR0FBR2pGLFdBQVcsQ0FBQyxLQUFLa0YsZUFBTCxDQUFxQnBFLElBQXJCLENBQUQsQ0FBM0IsQ0FSYyxDQVNkOztBQUNBbUUsWUFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLEtBQUtyRCxJQUF4QjtBQUNBbUQsWUFBQUEsU0FBUyxDQUFDakIsUUFBVixHQUFxQi9ELEVBQUUsQ0FBQzZCLElBQUksQ0FBQ2tDLFFBQUwsQ0FBY2UsQ0FBZixFQUFrQixDQUFsQixFQUFxQmpELElBQUksQ0FBQ2tDLFFBQUwsQ0FBY29CLENBQW5DLENBQXZCO0FBQ0FILFlBQUFBLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQixLQUFuQjtBQUVBSixZQUFBQSxTQUFTLENBQUM3QyxZQUFWO0FBQUE7QUFBQSx3Q0FBa0NrRCxJQUFsQyxDQUF1QyxLQUFLcEUsVUFBNUMsRUFBd0QsS0FBS1EsY0FBN0QsRUFBNkVJLElBQUksQ0FBQ2tDLFFBQWxGLEVBQTRGLEtBQUt2QyxNQUFqRyxFQWRjLENBZ0JkO0FBQ0E7QUFDQTs7QUFDQSxpQkFBS0YsYUFBTCxDQUFtQnFDLElBQW5CLENBQXdCcUIsU0FBeEI7QUFDQSxtQkFBTyxJQUFJL0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0QsY0FBQUEsT0FBTyxHQUQ2QixDQUVwQztBQUNILGFBSE0sRUFHSkwsSUFISSxDQUdDLFlBQU0sQ0FDVjtBQUNBO0FBQ0E7QUFDSCxhQVBNLEVBT0pBLElBUEksQ0FPQyxZQUFNO0FBQ1YscUJBQU8sTUFBSSxDQUFDUSxpQkFBTCxDQUF1QjJCLFNBQXZCLENBQVA7QUFDSCxhQVRNLEVBU0puQyxJQVRJLENBU0MsWUFBTSxDQUNWO0FBQ0gsYUFYTSxFQVdKQSxJQVhJLENBV0MsWUFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQUEsTUFBSSxDQUFDaEIsSUFBTCxDQUFVUyxJQUFWLENBQWUsK0JBQWYsRUFKVSxDQUtWO0FBRUE7QUFDQTs7QUFDSCxhQXBCTSxFQW9CSk8sSUFwQkksQ0FvQkMsWUFBTTtBQUNWbUMsY0FBQUEsU0FBUyxDQUFDN0MsWUFBVjtBQUFBO0FBQUEsMENBQWtDbUQsa0JBQWxDLENBQXFELENBQXJELEVBQXdELE1BQXhELEVBQThEWixHQUE5RCxFQUFtRSxJQUFJekUsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLENBQW5FO0FBRUgsYUF2Qk0sQ0FBUDtBQXdCSDs7OzRDQUNpQjtBQUNkO0FBQ0EsZ0JBQUlzRixXQUFXLEdBQUcsRUFBbEI7QUFDQSxnQkFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0EsZ0JBQUlwQixTQUFpQixHQUFHLEtBQUt2QyxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLDhDQUFxQ2tDLG1CQUFyQyxFQUF4QjtBQUNBLGdCQUFJTSxXQUE0QixHQUFHLEtBQUs5QyxJQUFMLENBQVVNLFlBQVY7QUFBQTtBQUFBLDhDQUFxQ3lDLGNBQXJDLEVBQW5DO0FBQ0EsZ0JBQUlOLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsU0FBUyxDQUFDbEMsTUFBVixHQUFtQixDQUFwQyxDQUFYLENBQWxCO0FBQ0EsZ0JBQUl1RCxjQUFjLEdBQUcsQ0FBckI7QUFDQSxnQkFBSUMsaUJBQWlCLEdBQUcsQ0FBeEI7QUFDQSxnQkFBSUMsYUFBYSxHQUFHLENBQXBCOztBQUNBLGlCQUFLLElBQUkxRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtWLDBCQUFMLENBQWdDVyxNQUFwRCxFQUE0REQsQ0FBQyxFQUE3RCxFQUFpRTtBQUM3RDBELGNBQUFBLGFBQWEsSUFBSSxLQUFLcEUsMEJBQUwsQ0FBZ0NVLENBQWhDLEVBQW1DMkQsS0FBcEQ7QUFDSCxhQVphLENBYWQ7OztBQUNBLGdCQUFJRCxhQUFhLElBQUl2QixTQUFTLENBQUNsQyxNQUEvQixFQUF1QztBQUNuQ3FCLGNBQUFBLE9BQU8sQ0FBQ3NDLEtBQVIsQ0FBYyxNQUFkO0FBQ0E7QUFDSDs7QUFDRCxtQkFBT0wsYUFBYSxHQUFHRyxhQUF2QixFQUFzQztBQUNsQztBQUNBO0FBQ0Esa0JBQUlyQixXQUFXLElBQUlGLFNBQVMsQ0FBQ2xDLE1BQTdCLEVBQXFDO0FBQ2pDb0MsZ0JBQUFBLFdBQVcsR0FBRyxDQUFkO0FBQ0g7O0FBQ0Qsa0JBQUl3QixPQUFPLEdBQUcxQixTQUFTLENBQUNFLFdBQUQsQ0FBdkI7QUFDQSxrQkFBSXpDLElBQUksR0FBRzhDLFdBQVcsQ0FBQ0UsUUFBWixDQUFxQmlCLE9BQU8sQ0FBQ2hCLENBQTdCLEVBQWdDZ0IsT0FBTyxDQUFDZixDQUF4QyxDQUFYOztBQUNBLGtCQUFJbEQsSUFBSSxJQUFJQSxJQUFJLENBQUNNLFlBQUw7QUFBQTtBQUFBLDZDQUFaLEVBQTRDO0FBQ3hDLG9CQUFJNEQsV0FBVyxHQUFHbEUsSUFBSSxDQUFDTSxZQUFMO0FBQUE7QUFBQSwrQ0FBbEI7O0FBQ0Esb0JBQUk0RCxXQUFXLENBQUNDLFNBQVosRUFBSixFQUE2QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxzQkFBSTdFLFFBQVEsR0FBRyxLQUFLSSwwQkFBTCxDQUFnQ2tFLGNBQWhDLENBQWY7QUFDQSxzQkFBSTVFLElBQUksR0FBR00sUUFBUSxDQUFDTixJQUFwQjtBQUNBLHNCQUFJK0UsS0FBSyxHQUFHekUsUUFBUSxDQUFDeUUsS0FBckI7O0FBQ0Esc0JBQUlGLGlCQUFpQixJQUFJRSxLQUF6QixFQUFnQztBQUM1QkYsb0JBQUFBLGlCQUFpQixHQUFHLENBQXBCO0FBQ0FELG9CQUFBQSxjQUFjO0FBQ2pCOztBQUNELHNCQUFJVCxTQUFTLEdBQUdqRixXQUFXLENBQUMsS0FBS2tHLGdCQUFMLENBQXNCcEYsSUFBdEIsQ0FBRCxDQUEzQixDQVh5QixDQVl6Qjs7QUFDQW1FLGtCQUFBQSxTQUFTLENBQUNFLE1BQVYsR0FBbUIsS0FBS3JELElBQXhCO0FBQ0FtRCxrQkFBQUEsU0FBUyxDQUFDakIsUUFBVixHQUFxQi9ELEVBQUUsQ0FBQzZCLElBQUksQ0FBQ2tDLFFBQUwsQ0FBY2UsQ0FBZixFQUFrQixDQUFsQixFQUFxQmpELElBQUksQ0FBQ2tDLFFBQUwsQ0FBY29CLENBQW5DLENBQXZCO0FBQ0FILGtCQUFBQSxTQUFTLENBQUNJLE1BQVYsR0FBbUIsS0FBbkI7QUFFQUosa0JBQUFBLFNBQVMsQ0FBQzdDLFlBQVY7QUFBQTtBQUFBLDhDQUFrQ2tELElBQWxDLENBQXVDLEtBQUtwRSxVQUE1QyxFQUF3RCxLQUFLUSxjQUE3RCxFQUE2RUksSUFBSSxDQUFDa0MsUUFBbEYsRUFBNEYsS0FBS3ZDLE1BQWpHLEVBakJ5QixDQW1CekI7O0FBQ0ErRCxrQkFBQUEsV0FBVyxDQUFDNUIsSUFBWixDQUFpQnFCLFNBQVMsQ0FBQzdDLFlBQVY7QUFBQTtBQUFBLDhDQUFrQ21ELGtCQUFsQyxDQUFxREUsYUFBckQsRUFBb0UsSUFBcEUsRUFBMEVNLE9BQTFFLEVBQW1GLElBQUk3RixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBbkYsQ0FBakI7QUFDQXVGLGtCQUFBQSxhQUFhO0FBQ2IsdUJBQUtsRSxhQUFMLENBQW1CcUMsSUFBbkIsQ0FBd0JxQixTQUF4QixFQXRCeUIsQ0F1QnpCO0FBQ0gsaUJBMUJ1QyxDQTJCeEM7OztBQUNBVixnQkFBQUEsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCTCxTQUFTLENBQUNsQyxNQUFWLEdBQW1CLENBQXBDLENBQVgsQ0FBZDtBQUNILGVBN0JELE1BNkJPO0FBQ0hzRCxnQkFBQUEsYUFBYTtBQUNoQjtBQUNKOztBQUNELG1CQUFPdkMsT0FBTyxDQUFDSyxHQUFSLENBQVlpQyxXQUFaLENBQVA7QUFDSDs7OzRDQUVpQjFELEksRUFBWTtBQUMxQixpQkFBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtYLGFBQUwsQ0FBbUJZLE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO0FBQ2hELGtCQUFJaUUsS0FBSyxHQUFHLEtBQUs1RSxhQUFMLENBQW1CVyxDQUFuQixDQUFaOztBQUNBLGtCQUFJaUUsS0FBSyxDQUFDQyxJQUFOLEtBQWV0RSxJQUFJLENBQUNzRSxJQUF4QixFQUE4QjtBQUMxQixxQkFBSzdFLGFBQUwsQ0FBbUI4RSxNQUFuQixDQUEwQm5FLENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjs7QUFDRCxnQkFBSSxLQUFLWCxhQUFMLENBQW1CWSxNQUFuQixLQUE4QixDQUFsQyxFQUFxQztBQUNqQyxrQkFBSSxLQUFLUCxjQUFULEVBQXlCO0FBQ3JCLHFCQUFLQSxjQUFMO0FBQ0EscUJBQUtBLGNBQUwsR0FBc0IsSUFBdEI7QUFDSDtBQUNKO0FBQ0o7OztvREFDeUI7QUFDdEIsbUJBQU8sS0FBS0wsYUFBWjtBQUNIOzs7MENBQ2U7QUFDWixpQkFBS0csY0FBTCxDQUFvQlUsWUFBcEI7QUFBQTtBQUFBLGtEQUFpRGtFLGFBQWpEO0FBQ0g7OzsyQ0FDZ0I7QUFDYjtBQUNBO0FBQ0EsaUJBQUt4RSxJQUFMLENBQVVTLElBQVYsQ0FBZSxrQkFBZixFQUhhLENBSWI7QUFDSDs7OzBDQUVlMEMsUyxFQUFpQjtBQUM3QjtBQUNBLGdCQUFJc0IsUUFBUSxHQUFHdEIsU0FBUyxDQUFDN0MsWUFBVjtBQUFBO0FBQUEsdUNBQWY7O0FBQ0EsZ0JBQUltRSxRQUFKLEVBQWM7QUFDVixrQkFBSUMsVUFBVSxHQUFHRCxRQUFRLENBQUNFLGtCQUFULEVBQWpCLENBRFUsQ0FFVjtBQUNBOztBQUNBLGtCQUFJM0UsSUFBSSxHQUFHOUIsV0FBVyxDQUFDLEtBQUswRyxxQkFBTCxDQUEyQkYsVUFBM0IsQ0FBRCxDQUF0QjtBQUNBMUUsY0FBQUEsSUFBSSxDQUFDcUQsTUFBTCxHQUFjLEtBQUtyRCxJQUFuQjtBQUNBQSxjQUFBQSxJQUFJLENBQUNrQyxRQUFMLEdBQWdCaUIsU0FBUyxDQUFDakIsUUFBMUI7QUFDQWxDLGNBQUFBLElBQUksQ0FBQ00sWUFBTDtBQUFBO0FBQUEsOENBQStCa0QsSUFBL0IsQ0FBb0MsS0FBSzVELGNBQUwsQ0FBb0JpRixhQUFwQixHQUFvQ2pFLElBQXhFLEVBQThFLEtBQUtoQixjQUFuRixFQUFtRyxLQUFLRCxNQUF4RztBQUVIO0FBQ0o7Ozs2Q0FDa0I7QUFDZixtQkFBTyxLQUFLSSw2QkFBWjtBQUNIOzs7O1FBdFdnQ2pDLFM7Ozs7O2lCQUdDLEk7Ozs7Ozs7aUJBR0UsRTs7Ozs7OztpQkFZRixFOzs7Ozs7O2lCQU1HLEk7Ozs7Ozs7aUJBR1gsSTs7Ozs7OztpQkFFUyxFOzs7Ozs7O2lCQUlNLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEpzb25Bc3NldCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzIsIFR3ZWVuLCByYW5kb20sIFZlYzMsIENhbWVyYUNvbXBvbmVudCwgZmluZCwgcHJvZmlsZXIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgRW5lbXlCdWxsZXQgfSBmcm9tICcuL0VuZW15cy9FbmVteUJ1bGxldCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5leHBvcnQgY2xhc3MgRGVhZEVuZW15T2JqIHtcclxuICAgIC8v5q275Y675pWM5Lq655qE57uT5p6E5L2TXHJcbiAgICBwdWJsaWMgZW5lbXlUeXBlID0gXCJcIjtcclxuICAgIHB1YmxpYyBkcm9wR29sZENvdW50ID0gMDtcclxuICAgIC8vIHB1YmxpYyBlbmVteUljb25TcHJpdGVGcmFtZSA9IDA7IC8v5pWM5Lq655qEaWNvblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZHJvcEdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteVR5cGUgPSB0eXBlOyAvL+aVjOS6uueahOenjeexu1xyXG4gICAgICAgIHRoaXMuZHJvcEdvbGRDb3VudCA9IGRyb3BHb2xkQ291bnQ7IC8v5pWM5Lq655qE5o6J6JC955qE6YeR5biB5pWw55uuIFxyXG4gICAgfVxyXG59O1xyXG5AY2NjbGFzcygnRW5lbXlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ1JlczogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteXNQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZU1heEVuZW15Q291bnQgPSAwOyAvL+W9k+WJjeazouasoeacgOWkp+eahOaVjOS6uuaVsFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXZlRGF0YToge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0UG9zTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJvc3NzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlCdWxsZXRQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdOyAvL+aVjOS6uueahOWtkOW8uemihOWItuS9k+eahOWIl+ihqFxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsOyAvL+aJgOacieeahOazouasoeeahOaVjOS6uumDveWinuWKoOWujOavleeahOWbnuiwg1xyXG4gICAgcHJpdmF0ZSBhbGxFbmVteURlYWRDYiA9IG51bGw7IC8v5omA5pyJ55qE5pWM5Lq66YO95q275LqG55qE5Zue6LCDIFxyXG5cclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0OiBEZWFkRW5lbXlPYmpbXSA9IFtdO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChjYikgPT4ge1xyXG4gICAgICAgICAgICAvL+WIoOmZpOW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICBsZXQgdG90YWxHb2xkID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgdG90YWxHb2xkICs9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q3VycmVudEdvbGRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IodG90YWxHb2xkKTsgLy/plIDmr4HnmoTmlYzkurrnmoQg5oyB5pyJ55qE6YeR5biB5Liq5pWwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0LWxldmVsLWxhYmVsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbmZpZ1Jlcy5qc29uO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVtdC1vdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1vbmUtYm9zc1wiKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IHRoaXMud2F2ZURhdGFbXCJFbmVteVR5cGVcIl1bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteUR1cmFjdGlvbiA9IHRoaXMud2F2ZURhdGFbJ0FkZEVuZW15RHVyYWN0aW9uJ11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmUtbGV2ZWxcIiwgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsV2F2ZUFkZE92ZXJDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5hZGRFbmVteUR1cmFjdGlvbilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJwbGF5ZXItY2xpY2stZ2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJvc3NFbnRlckFuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgICAgICAvL+aSreaUvmJvc3Mg55qE6L+b5Zy65Yqo55S7XHJcbiAgICAgICAgLy8gZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2hvd0Jvc3NJY29uQW5pbSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteUJhc2UgPSBib3NzTm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICAgICAgaWYgKGVuZW15QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlCYXNlLnBsYXlCb3NzRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIC8v5Zyo6L+Z6YeM6ZyA6KaB5Yid5aeL5YyW5LiA5Lqb5ri45oiP5pWw5o2uIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lV2luKHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb250aW51ZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4LS07XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1c2hPbmVFbmVteURlYWREYXRhKGVuZW15RGVhZERhdGE6IERlYWRFbmVteU9iaikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVzaCBvbmUgZW5lbXkgZGVhZCBkYXRhXCIsIGVuZW15RGVhZERhdGEpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QucHVzaChlbmVteURlYWREYXRhKTtcclxuICAgIH1cclxuICAgIC8vIHNob3dDYW1lcmFGb2N1c0Jvb3NBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgLy/ov5vlhaVib3NzIOWxleekuueahOeKtuaAgVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImVudGVyLXNob3ctYm9zcy1lbnRlci1zdGF0ZVwiKTtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKClcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmxvb2tBdChib3NzTm9kZS5wb3NpdGlvbilcclxuICAgIC8vICAgICAgICAgbGV0IGVuZFBvcyA9IHYzKGJvc3NOb2RlLnBvc2l0aW9uKS5hZGQodjMoNSwgMiwgNSkpO1xyXG4gICAgLy8gICAgICAgICBsZXQgZW5kRXVsZXJBbmdsZXMgPSB2Myh0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXMpLmFkZCh2MygzNSwgMCwgMCkpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKGJvc3NOb2RlLnBvc2l0aW9uLnggKyAxMCwgYm9zc05vZGUucG9zaXRpb24ueSArIDcsYm9zc05vZGUucG9zaXRpb24ueiArIDEwKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24gPSB2Myh0aGlzLmNhbWVyYU5vZGUucG9zaXRpb24pLmFkZChhZGRQb3MpO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGV1bGVyQW5nbGVzID0gdGhpcy5jYW1lcmFOb2RlLmV1bGVyQW5nbGVzO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgYWRkQW5nbGVWYWx1ZSA9IDI1O1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXMgPSB2MyhldWxlckFuZ2xlcy54ICsgMjUsIGV1bGVyQW5nbGVzLnksIGV1bGVyQW5nbGVzLnopO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXNcclxuICAgIC8vICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZSk7XHJcbiAgICAvLyAgICAgICAgIHR3LnRvKDAuNSwge1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGVuZFBvcyxcclxuICAgIC8vICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBlbmRFdWxlckFuZ2xlcyxcclxuICAgIC8vICAgICAgICAgICAgIC8vIG9ydGhvSGVpZ2h0OiA2MFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KS5vcnRob0hlaWdodCA9IDU7XFxcclxuICAgIC8vICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSkudG8oMC41LCB7IG9ydGhvSGVpZ2h0OiA2IH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfSlcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0NhbWVyYUJhY2tBbmltKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6ZWc5aS06L+U5Zue55qE5Yqo55S7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY2FtZXJhTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuNSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKDMwLCA0MiwgMzApLFxyXG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IHYzKC00NSwgNDUsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDIyIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRPbmVCb3NzRW5lbXkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlop7liqDkuIDkuKpib3NzXCIpXHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUocG9zLngsIHBvcy55KTtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbMF0udHlwZTtcclxuICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5ib3Nzc1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAvLyBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIC8vIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/lsZXnpLpib3NzIOWHuuWcuueVjOmdoiBcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUJvc3NFbnRlckFuaW0oZW5lbXlOb2RlKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0NhbWVyYUJhY2tBbmltKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pWM5Lq657un57ut5pKt5pS+6KGM6LWw5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIH0sIDMpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oMSwgdGhpcywgcG9zLCBuZXcgVmVjMig1LCA1KSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lop7liqDkuIDms6LmlYzkurpcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgYWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBlbmVteVR5cGVJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtpXS5jb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChhZGRFbmVteUNvdW50IDwgbWF4RW5lbXlDb3VudCkge1xyXG4gICAgICAgICAgICAvLyBhZGRFbmVteUNvdW50ICsrO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmRvbSBpbmRleFwiLCByYW5kb21JbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huS4gOS4quepuuS9jee9rlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEVuZW15VHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVubSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2VuZW15VHlwZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHdhdmVEYXRhLnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gd2F2ZURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhdmVBZGRFbmVteUNvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5Liq5pWM5Lq6XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByYW5kb21JbmRleCsrXHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbmVteUluTGlzdChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkudXVpZCA9PT0gbm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEVuZW15RGVhZENiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5lbmVteUF0dGFja2VkKCk7XHJcbiAgICB9XHJcbiAgICBmcm96ZW5BbGxFbmVteSgpIHtcclxuICAgICAgICAvL+WGsOWGu+aJgOacieaVjOS6ulxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuZW5lbSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tYWxsLWVuZW15XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBib3NzU2hvb3RPbmVFZ2coZW5lbXlOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy9ib3NzIOWPkeWwhOS6huS4gOaemum4oeibi1xyXG4gICAgICAgIGxldCBlbmVteUNvbSA9IGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKTtcclxuICAgICAgICBpZiAoZW5lbXlDb20pIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldFR5cGUgPSBlbmVteUNvbS5nZXRFbmVteUJ1bGxldFR5cGUoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmlYzkurrnmoTlrZDlvLnnsbvlnovmmK8gXCIsIGJ1bGxldFR5cGUpO1xyXG4gICAgICAgICAgICAvLyDmoLnmja7mlYzkurrnmoTlrZDlvLnnsbvlnovvvIzliJ3lp4vljJbkuIDkuKrlrZDlvLlcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15QnVsbGV0UHJlZmFiTGlzdFtidWxsZXRUeXBlXSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gZW5lbXlOb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUJ1bGxldCkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19