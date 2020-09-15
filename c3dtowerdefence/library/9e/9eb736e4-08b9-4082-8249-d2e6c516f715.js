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
          _this.currentLevelNum = 0;
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

          _this.currentWaveTime = 0;
          _this.currentWaveDuraction = 1;
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
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
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
            var enemyNode = instantiate(this.bosssPrefabList[type]);
            console.log("enemy node", enemyNode);
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

                  var enemyNode = instantiate(this.enemysPrefabList[type]);
                  console.log("enemy node", enemyNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlR3ZWVuIiwiQ2FtZXJhQ29tcG9uZW50IiwiZmluZCIsIlN0YXRlIiwiRW5lbXlCYXNlIiwiR3JvdW5kTWFwQ3RsIiwiR3JvdW5kVGlsZWQiLCJHYW1lQ29udHJvbGxlciIsIlVJQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYWRFbmVteU9iaiIsInR5cGUiLCJkcm9wR29sZENvdW50IiwiZW5lbXlUeXBlIiwiRW5lbXlDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJjdXJyZW50V2F2ZVRpbWUiLCJjdXJyZW50V2F2ZUR1cmFjdGlvbiIsImdhbWVDb250cm9sbGVyIiwiYWxsV2F2ZUFkZE92ZXJDYiIsImFsbEVuZW15RGVhZENiIiwiY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3QiLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJhZGRTdGF0ZSIsImxlbmd0aCIsImVtaXQiLCJhZGRPbmVCb3NzRW5lbXkiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwic2NoZWR1bGVPbmNlIiwic2V0U3RhdGUiLCJib3NzTm9kZSIsInNob3dCb3NzSWNvbkFuaW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVuZW15QmFzZSIsInBsYXlCb3NzRW50ZXJBbmltIiwiYWxsIiwiY29uc29sZSIsImxvZyIsImdhbWVXaW4iLCJlbmVteURlYWREYXRhIiwicHVzaCIsInR3IiwiY2FtZXJhTm9kZSIsInRvIiwicG9zaXRpb24iLCJldWxlckFuZ2xlcyIsImNhbGwiLCJzdGFydCIsIm9ydGhvSGVpZ2h0IiwiaW5kZXhMaXN0IiwiZ2V0SW5FZGFnZUluZGV4TGlzdCIsInJhbmRvbUluZGV4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9zIiwibm9kZU1hcExpc3QiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwieCIsInkiLCJlbmVteU5vZGUiLCJib3Nzc1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJ6IiwiYWN0aXZlIiwiaW5pdCIsInNob3dFbmVteUVudGVyQW5pbSIsInByb21pc2VMaXN0IiwiYWRkRW5lbXlDb3VudCIsImVuZW15VHlwZUluZGV4Iiwid2F2ZUFkZEVuZW15Q291bnQiLCJtYXhFbmVteUNvdW50IiwiaSIsImNvdW50IiwiZXJyb3IiLCJpbmRleFYyIiwiZ3JvdW5kVGlsZWQiLCJnZXRJc1ZvaWQiLCJlbmVteXNQcmVmYWJMaXN0IiwiZW5lbXkiLCJ1dWlkIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7QUFBcUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzdHQyxNQUFBQSxLLGdCQUFBQSxL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QUErQ29ELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQUlPLEtBQUssR0FBRyxLQUFLMUUsYUFBTCxDQUFtQm1FLENBQW5CLENBQVo7O0FBQ0Esa0JBQUlPLEtBQUssQ0FBQ0MsSUFBTixLQUFlaEUsSUFBSSxDQUFDZ0UsSUFBeEIsRUFBOEI7QUFDMUIscUJBQUszRSxhQUFMLENBQW1CNEUsTUFBbkIsQ0FBMEJULENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjs7QUFDRCxnQkFBRyxLQUFLbkUsYUFBTCxDQUFtQmUsTUFBbkIsS0FBOEIsQ0FBakMsRUFBbUM7QUFDL0Isa0JBQUksS0FBS1IsY0FBVCxFQUF3QjtBQUNwQixxQkFBS0EsY0FBTDtBQUNBLHFCQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtQLGFBQVo7QUFDSDs7OztRQTFTZ0M3QixTOzs7OztpQkFHQyxJOzs7Ozs7O2lCQUdFLEU7Ozs7Ozs7aUJBWUYsRTs7Ozs7OztpQkFNRyxJOzs7Ozs7O2lCQUdYLEk7Ozs7Ozs7aUJBRVMsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMywgQ2FtZXJhQ29tcG9uZW50LCBmaW5kLCBwcm9maWxlciB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIERlYWRFbmVteU9iantcclxuICAgIC8v5q275Y675pWM5Lq655qE57uT5p6E5L2TXHJcbiAgICBwdWJsaWMgZW5lbXlUeXBlID0gXCJcIjtcclxuICAgIHB1YmxpYyBkcm9wR29sZENvdW50ID0gMDtcclxuICAgIC8vIHB1YmxpYyBlbmVteUljb25TcHJpdGVGcmFtZSA9IDA7IC8v5pWM5Lq655qEaWNvblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZHJvcEdvbGRDb3VudDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmVuZW15VHlwZSA9IHR5cGU7IC8v5pWM5Lq655qE56eN57G7XHJcbiAgICAgICAgdGhpcy5kcm9wR29sZENvdW50ID0gZHJvcEdvbGRDb3VudDsgLy/mlYzkurrnmoTmjonokL3nmoTph5HluIHmlbDnm64gXHJcbiAgICB9XHJcbn07XHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYm9zc3NQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7IC8v5omA5pyJ55qE5rOi5qyh55qE5pWM5Lq66YO95aKe5Yqg5a6M5q+V55qE5Zue6LCDXHJcbiAgICBwcml2YXRlIGFsbEVuZW15RGVhZENiID0gbnVsbDsgLy/miYDmnInnmoTmlYzkurrpg73mrbvkuobnmoTlm57osIMgXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsRGVhZEVuZW15RGF0YUxpc3Q6IERlYWRFbmVteU9ialtdID0gW107XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldO1xyXG5cclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHYzKDAsIDAsIDApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLW9uZS1ib3NzXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IHRoaXMud2F2ZURhdGFbXCJFbmVteVR5cGVcIl1bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteUR1cmFjdGlvbiA9IHRoaXMud2F2ZURhdGFbJ0FkZEVuZW15RHVyYWN0aW9uJ11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1jdXJyZW50LXdhdmVcIiwgdGhpcy5jdXJyZW50V2F2ZUluZGV4KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdhdmVBZGRPdmVyQ2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV2F2ZUFkZE92ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZUJvc3NFbmVteSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVXYXZlRW5lbXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Qm9zc0VudGVyQW5pbShib3NzTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8v5pKt5pS+Ym9zcyDnmoTov5vlnLrliqjnlLtcclxuICAgICAgICBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zaG93Qm9zc0ljb25BbmltKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVuZW15QmFzZSA9IGJvc3NOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteUJhc2UucGxheUJvc3NFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlYWRFbmVteURhdGFMaXN0ID0gW107XHJcbiAgICAgICAgLy/lnKjov5nph4zpnIDopoHliJ3lp4vljJbkuIDkupvmuLjmiI/mlbDmja4gXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXYXZlQWRkT3ZlckNiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6IOc5YipXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVXaW4odGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1c2hPbmVFbmVteURlYWREYXRhKGVuZW15RGVhZERhdGE6IERlYWRFbmVteU9iail7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWFkRW5lbXlEYXRhTGlzdC5wdXNoKGVuZW15RGVhZERhdGEpO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oYm9zc05vZGU6IE5vZGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvL+i/m+WFpWJvc3Mg5bGV56S655qE54q25oCBXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZW50ZXItc2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNhbWVyYU5vZGUubG9va0F0KGJvc3NOb2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gdjMoYm9zc05vZGUucG9zaXRpb24pLmFkZCh2Myg1LCAyLCA1KSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRFdWxlckFuZ2xlcyA9IHYzKHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcykuYWRkKHYzKDM1LCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLnBvc2l0aW9uID0gdjMoYm9zc05vZGUucG9zaXRpb24ueCArIDEwLCBib3NzTm9kZS5wb3NpdGlvbi55ICsgNyxib3NzTm9kZS5wb3NpdGlvbi56ICsgMTApXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuY2FtZXJhTm9kZS5wb3NpdGlvbikuYWRkKGFkZFBvcyk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5sb29rQXQoYm9zc05vZGUucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgZXVsZXJBbmdsZXMgPSB0aGlzLmNhbWVyYU5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBhZGRBbmdsZVZhbHVlID0gMjU7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlcyA9IHYzKGV1bGVyQW5nbGVzLnggKyAyNSwgZXVsZXJBbmdsZXMueSwgZXVsZXJBbmdsZXMueik7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhTm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgLy8gICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgIC8vICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogZW5kUG9zLFxyXG4gICAgLy8gICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGVuZEV1bGVyQW5nbGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gb3J0aG9IZWlnaHQ6IDYwXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLm9ydGhvSGVpZ2h0ID0gNTtcXFxyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpKS50bygwLjUsIHsgb3J0aG9IZWlnaHQ6IDYgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93Q2FtZXJhQmFja0FuaW0oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7plZzlpLTov5Tlm57nmoTliqjnlLtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jYW1lcmFOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMzAsIDQyLCAzMCksXHJcbiAgICAgICAgICAgICAgICBldWxlckFuZ2xlczogdjMoLTQ1LCA0NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUd2Vlbih0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkpLnRvKDAuNSwgeyBvcnRob0hlaWdodDogMjIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZE9uZUJvc3NFbmVteSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4qmJvc3NcIilcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFswXS50eXBlO1xyXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJvc3NzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICBlbmVteU5vZGUuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAvLyBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIC8vIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/lsZXnpLpib3NzIOWHuuWcuueVjOmdoiBcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0NhbWVyYUZvY3VzQm9vc0FuaW0oZW5lbXlOb2RlKVxyXG4gICAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUJvc3NFbnRlckFuaW0oZW5lbXlOb2RlKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0NhbWVyYUJhY2tBbmltKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pWM5Lq657un57ut5pKt5pS+6KGM6LWw5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImVudGVyLWNvbnRpbnVlLXBsYXktbW92ZS1hbmltXCIpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIH0sIDMpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oMSwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgcG9zLCBuZXcgVmVjMig1LCA1KSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lop7liqDkuIDms6LmlYzkurpcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgYWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxOb2RlPiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBlbmVteVR5cGVJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgbWF4RW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1heEVuZW15Q291bnQgKz0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtpXS5jb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXggZW5lbXkgY291bnRcIiwgbWF4RW5lbXlDb3VudCk7XHJcbiAgICAgICAgaWYgKG1heEVuZW15Q291bnQgPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChhZGRFbmVteUNvdW50IDwgbWF4RW5lbXlDb3VudCkge1xyXG4gICAgICAgICAgICAvLyBhZGRFbmVteUNvdW50ICsrO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmRvbSBpbmRleFwiLCByYW5kb21JbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbmRleCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGluZGV4VjIgPSBpbmRleExpc3RbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVNYXBMaXN0LmdldFZhbHVlKGluZGV4VjIueCwgaW5kZXhWMi55KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huS4gOS4quepuuS9jee9rlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEVuZW15VHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVubSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2VuZW15VHlwZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHdhdmVEYXRhLnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gd2F2ZURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhdmVBZGRFbmVteUNvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBub2RlXCIsIGVuZW15Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyLCBpbmRleFYyLCBuZXcgVmVjMig1LCA1KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5aKe5Yqg5LiA5Liq5pWM5Lq6XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByYW5kb21JbmRleCsrXHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbmVteUluTGlzdChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVteU5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkudXVpZCA9PT0gbm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxFbmVteURlYWRDYil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEVuZW15RGVhZENiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxufVxyXG4iXX0=