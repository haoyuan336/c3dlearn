System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./GameController.js", "./UI/UIController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, Tween, CameraComponent, find, State, EnemyBase, GroundMapCtl, GroundTiled, GameController, UIController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, DeadEnemyObj, EnemyController;

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

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UI/UIController", _context.meta, extras);
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
      find = _cc.find;
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
    }, function (_UIUIControllerJs) {
      UIController = _UIUIControllerJs.UIController;
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
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.gameConfig = this.gameConfigRes.json; // this.state.setState('run');

            this.gameController = this.node.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            this.endPos = v3(0, 0, 0);
            this.state.addState("enter-next-wave", function () {
              if (_this2.currentWaveIndex == _this2.waveData['EnemyType'].length) {
                // this.state.setState("add-enemt-over");
                // this.state.setState("add-one-boss")
                // console.log("游戏结束");
                return;
              }

              _this2.currentRandomEnemyTypeList = _this2.waveData["EnemyType"][_this2.currentWaveIndex];
              _this2.addEnemyDuraction = _this2.waveData['AddEnemyDuraction'][_this2.currentWaveIndex];

              _this2.node.emit("refer-current-wave", _this2.currentWaveIndex);

              if (_this2.currentWaveIndex === _this2.waveData['EnemyType'].length - 1) {
                _this2.allWaveAddOverCb();

                _this2.allWaveAddOverCb = null;

                _this2.addOneBossEnemy();
              } else {
                _this2.addOneWaveEnemy().then(function () {
                  _this2.currentWaveIndex++;

                  _this2.scheduleOnce(function () {
                    _this2.state.setState("enter-next-wave");
                  }, _this2.addEnemyDuraction);
                });
              }
            }); // this.node.on("player-click-game", () => {
            //     this.state.setState("enter-next-wave");
            // });
          }
        }, {
          key: "playBossEnterAnim",
          value: function playBossEnterAnim(bossNode) {
            var _this3 = this;

            //播放boss 的进场动画
            find('Canvas').getComponent(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
              error: Error()
            }), UIController) : UIController).showBossIconAnim();
            return new Promise(function (resolve, reject) {
              var enemyBase = bossNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase);

              if (enemyBase) {
                enemyBase.playBossEnterAnim().then(function () {
                  resolve();
                });
              } else {
                _this3.scheduleOnce(function () {
                  resolve();
                }, 1);
              }
            });
          }
        }, {
          key: "startGame",
          value: function startGame() {
            var _this4 = this;

            this.currentLevelDeadEnemyDataList = []; //在这里需要初始化一些游戏数据 

            this.currentWaveIndex = 0;
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
            this.state.setState("enter-next-wave");
            Promise.all([new Promise(function (resolve, reject) {
              _this4.allWaveAddOverCb = resolve;
            }), new Promise(function (resolve, reject) {
              _this4.allEnemyDeadCb = resolve;
            })]).then(function () {
              console.log("游戏胜利");

              _this4.gameController.gameWin(_this4.currentLevelDeadEnemyDataList);
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
            var _this5 = this;

            //播放镜头返回的动画
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this5.cameraNode);
              tw.to(0.5, {
                position: v3(30, 42, 30),
                eulerAngles: v3(-45, 45, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
              new Tween(_this5.cameraNode.getComponent(CameraComponent)).to(0.5, {
                orthoHeight: 22
              }).start();
            });
          }
        }, {
          key: "addOneBossEnemy",
          value: function addOneBossEnemy() {
            var _this6 = this;

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
            }), EnemyBase) : EnemyBase).init(this.gameConfig, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);
            // promiseList.push(enemyNode.getComponent(EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
            // addEnemyCount++;

            this.enemyNodeList.push(enemyNode);
            return new Promise(function (resolve, reject) {
              resolve(); // enemyNode.active = false;
            }).then(function () {//展示boss 出场界面 
              // return this.showCameraFocusBoosAnim(enemyNode)
              // return
            }).then(function () {
              return _this6.playBossEnterAnim(enemyNode);
            }).then(function () {// return this.showCameraBackAnim();
            }).then(function () {
              //敌人继续播放行走动画
              // return new Promise((resolve) => {
              //     this.scheduleOnce(() => {
              _this6.node.emit("enter-continue-play-move-anim"); //         resolve();
              //     }, 3)
              // })

            }).then(function () {
              enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).showEnemyEnterAnim(1, _this6, _this6.gameController, pos, new Vec2(5, 5));
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
                  }), EnemyBase) : EnemyBase).init(this.gameConfig, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsIlN0YXRlIiwiRW5lbXlCYXNlIiwiR3JvdW5kTWFwQ3RsIiwiR3JvdW5kVGlsZWQiLCJHYW1lQ29udHJvbGxlciIsIlVJQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJnYW1lQ29udHJvbGxlciIsImFsbFdhdmVBZGRPdmVyQ2IiLCJhbGxFbmVteURlYWRDYiIsImN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0IiwiZ2FtZUNvbmZpZ1JlcyIsImpzb24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiYWRkU3RhdGUiLCJsZW5ndGgiLCJlbWl0IiwiYWRkT25lQm9zc0VuZW15IiwiYWRkT25lV2F2ZUVuZW15IiwidGhlbiIsInNjaGVkdWxlT25jZSIsInNldFN0YXRlIiwiYm9zc05vZGUiLCJzaG93Qm9zc0ljb25BbmltIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlbmVteUJhc2UiLCJwbGF5Qm9zc0VudGVyQW5pbSIsImdldEN1cnJlbnRMZXZlbE51bSIsImFsbCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lV2luIiwiZW5lbXlEZWFkRGF0YSIsInB1c2giLCJ0dyIsImNhbWVyYU5vZGUiLCJ0byIsInBvc2l0aW9uIiwiZXVsZXJBbmdsZXMiLCJjYWxsIiwic3RhcnQiLCJvcnRob0hlaWdodCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBvcyIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiZW5lbXlOb2RlIiwiYm9zc3NQcmVmYWJMaXN0IiwicGFyZW50IiwieiIsImFjdGl2ZSIsImluaXQiLCJzaG93RW5lbXlFbnRlckFuaW0iLCJwcm9taXNlTGlzdCIsImFkZEVuZW15Q291bnQiLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImkiLCJjb3VudCIsImVycm9yIiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15IiwidXVpZCIsInNwbGljZSIsImVuZW15QXR0YWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSztBQUFxQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDN0dDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFksbUJB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RSxhQUFMLENBQW1CMEUsTUFBbkIsQ0FBMEJULENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjs7QUFDRCxnQkFBSSxLQUFLakUsYUFBTCxDQUFtQlksTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDakMsa0JBQUksS0FBS1AsY0FBVCxFQUF5QjtBQUNyQixxQkFBS0EsY0FBTDtBQUNBLHFCQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtMLGFBQVo7QUFDSDs7OzBDQUNjO0FBQ1gsaUJBQUtHLGNBQUwsQ0FBb0JPLFlBQXBCO0FBQUE7QUFBQSxrREFBaURpRSxhQUFqRDtBQUNIOzs7MkNBQ2U7QUFDWjtBQUNBO0FBQ0EsaUJBQUtsRSxJQUFMLENBQVVJLElBQVYsQ0FBZSxrQkFBZixFQUhZLENBSVo7QUFDSDs7OzZDQUNpQjtBQUNkLG1CQUFPLEtBQUtQLDZCQUFaO0FBQ0g7Ozs7UUF2VGdDbEMsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSTs7Ozs7OztpQkFHWCxJOzs7Ozs7O2lCQUVTLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEpzb25Bc3NldCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzIsIFR3ZWVuLCByYW5kb20sIFZlYzMsIENhbWVyYUNvbXBvbmVudCwgZmluZCwgcHJvZmlsZXIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBEZWFkRW5lbXlPYmoge1xyXG4gICAgLy/mrbvljrvmlYzkurrnmoTnu5PmnoTkvZNcclxuICAgIHB1YmxpYyBlbmVteVR5cGUgPSBcIlwiO1xyXG4gICAgcHVibGljIGRyb3BHb2xkQ291bnQgPSAwO1xyXG4gICAgLy8gcHVibGljIGVuZW15SWNvblNwcml0ZUZyYW1lID0gMDsgLy/mlYzkurrnmoRpY29uXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkcm9wR29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVuZW15VHlwZSA9IHR5cGU7IC8v5pWM5Lq655qE56eN57G7XHJcbiAgICAgICAgdGhpcy5kcm9wR29sZENvdW50ID0gZHJvcEdvbGRDb3VudDsgLy/mlYzkurrnmoTmjonokL3nmoTph5HluIHmlbDnm64gXHJcbiAgICB9XHJcbn07XHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYm9zc3NQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7IC8v5omA5pyJ55qE5rOi5qyh55qE5pWM5Lq66YO95aKe5Yqg5a6M5q+V55qE5Zue6LCDXHJcbiAgICBwcml2YXRlIGFsbEVuZW15RGVhZENiID0gbnVsbDsgLy/miYDmnInnmoTmlYzkurrpg73mrbvkuobnmoTlm57osIMgXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q6IERlYWRFbmVteU9ialtdID0gW107XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXQtb3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtb25lLWJvc3NcIilcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lQm9zc0VuZW15KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5hZGRFbmVteUR1cmFjdGlvbilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCb3NzRW50ZXJBbmltKGJvc3NOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy/mkq3mlL5ib3NzIOeahOi/m+WcuuWKqOeUu1xyXG4gICAgICAgIGZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNob3dCb3NzSWNvbkFuaW0oKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlCYXNlID0gYm9zc05vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJhc2UpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15QmFzZS5wbGF5Qm9zc0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAvL+WcqOi/memHjOmcgOimgeWIneWni+WMluS4gOS6m+a4uOaIj+aVsOaNriBcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMud2F2ZURhdGEgPSB0aGlzLmdhbWVDb25maWdbJ0xldmVsXycgKyB0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/og5zliKlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVdpbih0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVzaE9uZUVuZW15RGVhZERhdGEoZW5lbXlEZWFkRGF0YTogRGVhZEVuZW15T2JqKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvL+i/m+WFpWJvc3Mg5bGV56S655qE54q25oCBXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gdjMoYm9zc05vZGUucG9zaXRpb24pLmFkZCh2Myg1LCAyLCA1KSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRFdWxlckFuZ2xlcyA9IHYzKHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcykuYWRkKHYzKDM1LCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjMoYm9zc05vZGUucG9zaXRpb24ueCArIDEwLCBib3NzTm9kZS5wb3NpdGlvbi55ICsgNyxib3NzTm9kZS5wb3NpdGlvbi56ICsgMTApXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbikuYWRkKGFkZFBvcyk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBhZGRBbmdsZVZhbHVlID0gMjU7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcyA9IHYzKGV1bGVyQW5nbGVzLnggKyAyNSwgZXVsZXJBbmdsZXMueSwgZXVsZXJBbmdsZXMueik7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgLy8gICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgIC8vICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogZW5kUG9zLFxyXG4gICAgLy8gICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGVuZEV1bGVyQW5nbGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gb3J0aG9IZWlnaHQ6IDYwXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLm9ydGhvSGVpZ2h0ID0gNTtcXFxyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDYgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93Q2FtZXJhQmFja0FuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7plZzlpLTov5Tlm57nmoTliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMzAsIDQyLCAzMCksXHJcbiAgICAgICAgICAgICAgICBldWxlckFuZ2xlczogdjMoLTQ1LCA0NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogMjIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZUJvc3NFbmVteSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4qmJvc3NcIilcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFswXS50eXBlO1xyXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgIC8vIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgIC8vIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WxleekumJvc3Mg5Ye65Zy655WM6Z2iIFxyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaG93Q2FtZXJhRm9jdXNCb29zQW5pbShlbmVteU5vZGUpXHJcbiAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5Qm9zc0VudGVyQW5pbShlbmVteU5vZGUpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaG93Q2FtZXJhQmFja0FuaW0oKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/mlYzkurrnu6fnu63mkq3mlL7ooYzotbDliqjnlLtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItY29udGludWUtcGxheS1tb3ZlLWFuaW1cIilcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMylcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbSgxLCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBwb3MsIG5ldyBWZWMyKDUsIDUpKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFkZE9uZVdhdmVFbmVteSgpIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBhZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZUluZGV4ID0gMDtcclxuICAgICAgICBsZXQgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWF4RW5lbXlDb3VudCArPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2ldLmNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heCBlbmVteSBjb3VudFwiLCBtYXhFbmVteUNvdW50KTtcclxuICAgICAgICBpZiAobWF4RW5lbXlDb3VudCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmlbDmja7plJnor69cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IG5vZGVcIiwgZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsRW5lbXlEZWFkQ2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRW5lbXlEZWFkQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIGVuZW15QXR0YWNrZWQoKXtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZW5lbXlBdHRhY2tlZCgpO1xyXG4gICAgfVxyXG4gICAgZnJvemVuQWxsRW5lbXkoKXtcclxuICAgICAgICAvL+WGsOWGu+aJgOacieaVjOS6ulxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuZW5lbSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tYWxsLWVuZW15XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGdldERlYWRFbmVteURhdGEoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdDtcclxuICAgIH1cclxufVxyXG4iXX0=