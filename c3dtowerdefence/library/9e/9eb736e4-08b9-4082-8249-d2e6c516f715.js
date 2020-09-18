System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, CameraComponent, State, EnemyBase, GroundMapCtl, GroundTiled, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, DeadEnemyObj, EnemyController;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
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
                _this3.allWaveAddOverCb();

                _this3.allWaveAddOverCb = null;

                _this3.addOneBossEnemy();
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
              }), EnemyBase) : EnemyBase).showEnemyEnterAnim(1, _this8, _this8.gameController, pos, new Vec2(5, 5));
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
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3RhdGUiLCJFbmVteUJhc2UiLCJHcm91bmRNYXBDdGwiLCJHcm91bmRUaWxlZCIsIkdhbWVDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRGVhZEVuZW15T2JqIiwidHlwZSIsImRyb3BHb2xkQ291bnQiLCJlbmVteVR5cGUiLCJFbmVteUNvbnRyb2xsZXIiLCJnYW1lQ29uZmlnIiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCIsImVuZFBvcyIsImdhbWVDb250cm9sbGVyIiwiYWxsV2F2ZUFkZE92ZXJDYiIsImFsbEVuZW15RGVhZENiIiwiY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QiLCJub2RlIiwib24iLCJjYiIsInRvdGFsR29sZCIsImkiLCJsZW5ndGgiLCJnZXRDb21wb25lbnQiLCJnZXRDdXJyZW50R29sZENvdW50IiwiZGVzdHJveSIsImVtaXQiLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsImFkZFN0YXRlIiwiYWRkT25lQm9zc0VuZW15IiwiYWRkT25lV2F2ZUVuZW15IiwidGhlbiIsInNjaGVkdWxlT25jZSIsInNldFN0YXRlIiwiYm9zc05vZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVuZW15QmFzZSIsInBsYXlCb3NzRW50ZXJBbmltIiwiYWxsIiwiY29uc29sZSIsImxvZyIsImdhbWVXaW4iLCJlbmVteURlYWREYXRhIiwicHVzaCIsInR3IiwiY2FtZXJhTm9kZSIsInRvIiwicG9zaXRpb24iLCJldWxlckFuZ2xlcyIsImNhbGwiLCJzdGFydCIsIm9ydGhvSGVpZ2h0IiwiaW5kZXhMaXN0IiwiZ2V0SW5FZGFnZUluZGV4TGlzdCIsInJhbmRvbUluZGV4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zIiwibm9kZU1hcExpc3QiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwieCIsInkiLCJlbmVteU5vZGUiLCJib3Nzc1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJ6IiwiYWN0aXZlIiwiaW5pdCIsInNob3dFbmVteUVudGVyQW5pbSIsInByb21pc2VMaXN0IiwiYWRkRW5lbXlDb3VudCIsImVuZW15VHlwZUluZGV4Iiwid2F2ZUFkZEVuZW15Q291bnQiLCJtYXhFbmVteUNvdW50IiwiY291bnQiLCJlcnJvciIsImluZGV4VjIiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsImVuZW15c1ByZWZhYkxpc3QiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiLCJlbmVteUF0dGFja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSztBQUFxQkMsTUFBQUEsZSxPQUFBQSxlOzs7O0FBQzVGQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxN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LEdBQVIsQ0FBWWlDLFdBQVosQ0FBUDtBQUNIOzs7NENBRWlCMUQsSSxFQUFZO0FBQzFCLGlCQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1gsYUFBTCxDQUFtQlksTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQUlpRSxLQUFLLEdBQUcsS0FBSzVFLGFBQUwsQ0FBbUJXLENBQW5CLENBQVo7O0FBQ0Esa0JBQUlpRSxLQUFLLENBQUNDLElBQU4sS0FBZXRFLElBQUksQ0FBQ3NFLElBQXhCLEVBQThCO0FBQzFCLHFCQUFLN0UsYUFBTCxDQUFtQjhFLE1BQW5CLENBQTBCbkUsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDSDtBQUNKOztBQUNELGdCQUFJLEtBQUtYLGFBQUwsQ0FBbUJZLE1BQW5CLEtBQThCLENBQWxDLEVBQXFDO0FBQ2pDLGtCQUFJLEtBQUtQLGNBQVQsRUFBeUI7QUFDckIscUJBQUtBLGNBQUw7QUFDQSxxQkFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0o7QUFDSjs7O29EQUN5QjtBQUN0QixtQkFBTyxLQUFLTCxhQUFaO0FBQ0g7OzswQ0FDYztBQUNYLGlCQUFLRyxjQUFMLENBQW9CVSxZQUFwQjtBQUFBO0FBQUEsa0RBQWlEa0UsYUFBakQ7QUFDSDs7OzJDQUNlO0FBQ1o7QUFDQTtBQUNBLGlCQUFLeEUsSUFBTCxDQUFVUyxJQUFWLENBQWUsa0JBQWYsRUFIWSxDQUlaO0FBQ0g7Ozs2Q0FDaUI7QUFDZCxtQkFBTyxLQUFLViw2QkFBWjtBQUNIOzs7O1FBalZnQ2hDLFM7Ozs7O2lCQUdDLEk7Ozs7Ozs7aUJBR0UsRTs7Ozs7OztpQkFZRixFOzs7Ozs7O2lCQU1HLEk7Ozs7Ozs7aUJBR1gsSTs7Ozs7OztpQkFFUyxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBKc29uQXNzZXQsIFByZWZhYiwgaW5zdGFudGlhdGUsIHYzLCBWZWMyLCBUd2VlbiwgcmFuZG9tLCBWZWMzLCBDYW1lcmFDb21wb25lbnQsIGZpbmQsIHByb2ZpbGVyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBHcm91bmRUaWxlZCB9IGZyb20gJy4vR3JvdW5kVGlsZWQvR3JvdW5kVGlsZWQnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5leHBvcnQgY2xhc3MgRGVhZEVuZW15T2JqIHtcclxuICAgIC8v5q275Y675pWM5Lq655qE57uT5p6E5L2TXHJcbiAgICBwdWJsaWMgZW5lbXlUeXBlID0gXCJcIjtcclxuICAgIHB1YmxpYyBkcm9wR29sZENvdW50ID0gMDtcclxuICAgIC8vIHB1YmxpYyBlbmVteUljb25TcHJpdGVGcmFtZSA9IDA7IC8v5pWM5Lq655qEaWNvblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZHJvcEdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteVR5cGUgPSB0eXBlOyAvL+aVjOS6uueahOenjeexu1xyXG4gICAgICAgIHRoaXMuZHJvcEdvbGRDb3VudCA9IGRyb3BHb2xkQ291bnQ7IC8v5pWM5Lq655qE5o6J6JC955qE6YeR5biB5pWw55uuIFxyXG4gICAgfVxyXG59O1xyXG5AY2NjbGFzcygnRW5lbXlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ1JlczogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteXNQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZU1heEVuZW15Q291bnQgPSAwOyAvL+W9k+WJjeazouasoeacgOWkp+eahOaVjOS6uuaVsFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXZlRGF0YToge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0UG9zTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJvc3NzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsOyAvL+aJgOacieeahOazouasoeeahOaVjOS6uumDveWinuWKoOWujOavleeahOWbnuiwg1xyXG4gICAgcHJpdmF0ZSBhbGxFbmVteURlYWRDYiA9IG51bGw7IC8v5omA5pyJ55qE5pWM5Lq66YO95q275LqG55qE5Zue6LCDIFxyXG5cclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0OiBEZWFkRW5lbXlPYmpbXSA9IFtdO1xyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGNiKT0+e1xyXG4gICAgICAgICAgICAvL+WIoOmZpOW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICBsZXQgdG90YWxHb2xkID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aCA7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICB0b3RhbEdvbGQgKz0gbm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGNiKXtcclxuICAgICAgICAgICAgICAgIGNiKHRvdGFsR29sZCk7IC8v6ZSA5q+B55qE5pWM5Lq655qEIOaMgeacieeahOmHkeW4geS4quaVsFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiaW5pdC1sZXZlbC1sYWJlbFwiLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpLDApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXQtb3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtb25lLWJvc3NcIilcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSB0aGlzLndhdmVEYXRhW1wiRW5lbXlUeXBlXCJdW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24gPSB0aGlzLndhdmVEYXRhWydBZGRFbmVteUR1cmFjdGlvbiddW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVCb3NzRW5lbXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmFkZEVuZW15RHVyYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICAvLyBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zaG93Qm9zc0ljb25BbmltKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVuZW15QmFzZSA9IGJvc3NOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteUJhc2UucGxheUJvc3NFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0ID0gW107XHJcbiAgICAgICAgLy/lnKjov5nph4zpnIDopoHliJ3lp4vljJbkuIDkupvmuLjmiI/mlbDmja4gXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFbmVteURlYWRDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnRpbnVlR2FtZSgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCAtLTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVzaE9uZUVuZW15RGVhZERhdGEoZW5lbXlEZWFkRGF0YTogRGVhZEVuZW15T2JqKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvL+i/m+WFpWJvc3Mg5bGV56S655qE54q25oCBXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gdjMoYm9zc05vZGUucG9zaXRpb24pLmFkZCh2Myg1LCAyLCA1KSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRFdWxlckFuZ2xlcyA9IHYzKHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcykuYWRkKHYzKDM1LCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjMoYm9zc05vZGUucG9zaXRpb24ueCArIDEwLCBib3NzTm9kZS5wb3NpdGlvbi55ICsgNyxib3NzTm9kZS5wb3NpdGlvbi56ICsgMTApXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbikuYWRkKGFkZFBvcyk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBhZGRBbmdsZVZhbHVlID0gMjU7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcyA9IHYzKGV1bGVyQW5nbGVzLnggKyAyNSwgZXVsZXJBbmdsZXMueSwgZXVsZXJBbmdsZXMueik7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgLy8gICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgIC8vICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogZW5kUG9zLFxyXG4gICAgLy8gICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGVuZEV1bGVyQW5nbGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gb3J0aG9IZWlnaHQ6IDYwXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLm9ydGhvSGVpZ2h0ID0gNTtcXFxyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDYgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93Q2FtZXJhQmFja0FuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7plZzlpLTov5Tlm57nmoTliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMzAsIDQyLCAzMCksXHJcbiAgICAgICAgICAgICAgICBldWxlckFuZ2xlczogdjMoLTQ1LCA0NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogMjIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZUJvc3NFbmVteSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4qmJvc3NcIilcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFswXS50eXBlO1xyXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgdGhpcy5nYW1lQ29udHJvbGxlcixub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgLy8gcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgLy8gYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAvLyBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bGV56S6Ym9zcyDlh7rlnLrnlYzpnaIgXHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNob3dDYW1lcmFGb2N1c0Jvb3NBbmltKGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlCb3NzRW50ZXJBbmltKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNob3dDYW1lcmFCYWNrQW5pbSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aVjOS6uue7p+e7reaSreaUvuihjOi1sOWKqOeUu1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1jb250aW51ZS1wbGF5LW1vdmUtYW5pbVwiKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICB9LCAzKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKDEsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIHBvcywgbmV3IFZlYzIoNSwgNSkpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWRkT25lV2F2ZUVuZW15KCkge1xyXG4gICAgICAgIC8v5aKe5Yqg5LiA5rOi5pWM5Lq6XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgZW5lbXlUeXBlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXhFbmVteUNvdW50ICs9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbaV0uY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4IGVuZW15IGNvdW50XCIsIG1heEVuZW15Q291bnQpO1xyXG4gICAgICAgIGlmIChtYXhFbmVteUNvdW50ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaVsOaNrumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYWRkRW5lbXlDb3VudCA8IG1heEVuZW15Q291bnQpIHtcclxuICAgICAgICAgICAgLy8gYWRkRW5lbXlDb3VudCArKztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyYW5kb20gaW5kZXhcIiwgcmFuZG9tSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tSW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobkuIDkuKrnqbrkvY3nva5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRFbmVteVR5cGUgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbm0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtlbmVteVR5cGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB3YXZlRGF0YS50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHdhdmVEYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXZlQWRkRW5lbXlDb3VudCA+PSBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsdGhpcy5nYW1lQ29udHJvbGxlciwgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5Liq5pWM5Lq6XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByYW5kb21JbmRleCsrXHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbmVteUluTGlzdChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkudXVpZCA9PT0gbm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEVuZW15RGVhZENiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKCl7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmVuZW15QXR0YWNrZWQoKTtcclxuICAgIH1cclxuICAgIGZyb3plbkFsbEVuZW15KCl7XHJcbiAgICAgICAgLy/lhrDlhrvmiYDmnInmlYzkurpcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLmVuZW0pe1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZnJvemVuLWFsbC1lbmVteVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBnZXREZWFkRW5lbXlEYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19