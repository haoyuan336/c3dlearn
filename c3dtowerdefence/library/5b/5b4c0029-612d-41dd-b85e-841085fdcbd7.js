System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./UI/UIController.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js", "./Home/HomeIcon.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, isValid, State, TowerBuildBase, EnemyController, GroundMapCtl, UIController, TowerBuildBaseCtl, PlayData, TowerBase, WinGoldAnimEffect, HomeIcon, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, GameController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBuildBase(extras) {
    _reporterNs.report("TowerBuildBase", "./TowerBuildBase/TowerBuildBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyController(extras) {
    _reporterNs.report("EnemyController", "./EnemyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundMapCtl(extras) {
    _reporterNs.report("GroundMapCtl", "./GroundMapCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UI/UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBuildBaseCtl(extras) {
    _reporterNs.report("TowerBuildBaseCtl", "./TowerBuildBaseCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayData(extras) {
    _reporterNs.report("PlayData", "./Data/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "./Towers/TowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinGoldAnimEffect(extras) {
    _reporterNs.report("WinGoldAnimEffect", "./Effect/WinGoldAnimEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHomeIcon(extras) {
    _reporterNs.report("HomeIcon", "./Home/HomeIcon", _context.meta, extras);
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
    _dec10: void 0,
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
    _descriptor9: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Tween = _cc.Tween;
      JsonAsset = _cc.JsonAsset;
      v3 = _cc.v3;
      PhysicsSystem = _cc.PhysicsSystem;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_TowerBuildBaseTowerBuildBaseJs) {
      TowerBuildBase = _TowerBuildBaseTowerBuildBaseJs.TowerBuildBase;
    }, function (_EnemyControllerJs) {
      EnemyController = _EnemyControllerJs.EnemyController;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_UIUIControllerJs) {
      UIController = _UIUIControllerJs.UIController;
    }, function (_TowerBuildBaseCtlJs) {
      TowerBuildBaseCtl = _TowerBuildBaseCtlJs.TowerBuildBaseCtl;
    }, function (_DataPlayerDataJs) {
      PlayData = _DataPlayerDataJs.PlayData;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_EffectWinGoldAnimEffectJs) {
      WinGoldAnimEffect = _EffectWinGoldAnimEffectJs.WinGoldAnimEffect;
    }, function (_HomeHomeIconJs) {
      HomeIcon = _HomeHomeIconJs.HomeIcon;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5b4c0ApYS1B3bhehBCF/cvX", "GameController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: JsonAsset
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: _crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
          error: Error()
        }), UIController) : UIController
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(GameController, _Component);

        function GameController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameConfigJson", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towersPrefabList", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startGameButton", _descriptor4, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();

          _initializerDefineProperty(_this, "uiController", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "plate", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameStartButtonBase", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homeIconPrefab", _descriptor8, _assertThisInitialized(_this));

          _this.homeIconNode = null;
          _this.playerData = void 0;

          _initializerDefineProperty(_this, "goldAnim3dPrefab", _descriptor9, _assertThisInitialized(_this));

          _this.homeIconTw = null;
          return _this;
        }

        _createClass(GameController, [{
          key: "onLoad",
          // @property({ type: Node })
          // public testNode: Node = null;
          value: function onLoad() {
            this.playerData = new (_crd && PlayData === void 0 ? (_reportPossibleCrUseOfPlayData({
              error: Error()
            }), PlayData) : PlayData)(this); // this.node.eulerAngles

            var tw = new Tween(this.plate);
            tw.repeatForever(new Tween(this.plate).to(20, {
              eulerAngles: v3(0, 360, 0)
            }).set({
              eulerAngles: v3(0, 0, 0)
            }));
            tw.start(); // let bezier = new BezierN([v3(0, 0, 0), v3(10, 30, 10), v3(20, 3, 0),v3(20, 100, 30)]);
            // let pointList: Vec3[] = bezier.getPointList(10);
            // console.log("point", pointList);
            // let tw = new Tween(this.testNode);
            // for (let i = 0; i < pointList.length; i++) {
            //     tw.to(0.2, { position: pointList[i] });
            // }
            // tw.call(() => {
            //     this.testNode.position = v3(0, 0, 0)
            // })
            // tw.repeatForever();
            // tw.start();
          }
        }, {
          key: "playerClickSaveLifeButton",
          value: function playerClickSaveLifeButton() {
            var _this2 = this;

            //玩家点击了 立即复活按钮
            return new Promise(function (resolve, reject) {
              resolve();

              if (isValid(_this2.homeIconNode)) {
                _this2.homeIconNode.active = false;
              } // this.node.emit("destroy-all-tower");
              // this.node.emit("destroy-all-tower-build-base");


              _this2.node.emit("destroy-all-enemy", function (goldCount) {
                _this2.playerData.addGoldCount(goldCount);

                _this2.showHomeIconEnterAnim().then(function () {
                  _this2.node.emit('update-gold-label', _this2.playerData.getCurrentGoldCount());

                  _this2.state.setState("run");

                  _this2.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                    error: Error()
                  }), EnemyController) : EnemyController).continueGame(); //继续游戏

                });
              }); //销毁当前的所有敌人
              // this.node.emit("init-level-label"); //初始化当前的关卡label
              // this.uiController.node.emit('init-update-level');
              // this.enterGame().then(() => {
              //     this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
              //     this.state.setState("run");
              //     this.node.getComponent(EnemyController).startGame();
              // })
              // this.node.emit("")

            });
          }
        }, {
          key: "playerClickShareButton",
          value: function playerClickShareButton() {
            var _this3 = this;

            //玩家点击了分享按钮
            return new Promise(function (resolve, reject) {
              resolve();

              _this3.playerData.addGoldCount(_this3.playerData.currentGoldCount);
            });
          }
        }, {
          key: "playerClickRetryButton",
          value: function playerClickRetryButton() {
            var _this4 = this;

            //玩家点击了 重试一次的按钮
            // this.playerData.currentLevelNum = 0
            this.playerData.newGame();
            this.enterGame().then(function () {
              _this4.node.emit('update-gold-label', _this4.playerData.getCurrentGoldCount());

              _this4.state.setState("run");

              _this4.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).startGame();
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this5 = this;

            PhysicsSystem.instance.enable = true; // Your initialization goes here.

            this.state.addState("ready", function () {
              console.log("enter state ", _this5.state.getState());
            });
            this.state.setState("ready");
            this.node.on("build-one-tower", function (index, towerBaseNode) {
              //建造一座塔
              if (index < _this5.towersPrefabList.length) {
                var node = instantiate(_this5.towersPrefabList[index]);
                node.parent = _this5.node;
                node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).init(_this5.gameConfigJson.json);
                var pos = v3(towerBaseNode.position.x, 0, towerBaseNode.position.z);
                node.setPosition(pos);
                towerBaseNode.getComponent(_crd && TowerBuildBase === void 0 ? (_reportPossibleCrUseOfTowerBuildBase({
                  error: Error()
                }), TowerBuildBase) : TowerBuildBase).setTargetTower(node);
                node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).setTowerBuildBase(towerBaseNode);
              }
            });
            this.state.addState("play-start-button-anim", function () {
              // console.log("玩家点中了开始游戏按钮");
              _this5.playStatrButtonPressAnim().then(function () {
                return new Promise(function (resolve, reject) {
                  var tw = new Tween(_this5.startGameButton).by(1, {
                    position: v3(0, -10, 0)
                  }).call(function () {
                    console.log('play over');

                    _this5.startGameButton.destroy();

                    resolve();
                  }).start();
                });
              }).then(function () {
                var tw = new Tween(_this5.gameStartButtonBase);
                tw.to(0.2, {
                  scale: v3(0, 0, 0)
                });
                tw.call(function () {
                  _this5.gameStartButtonBase.destroy();
                });
                tw.start();
                return _this5.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                  error: Error()
                }), GroundMapCtl) : GroundMapCtl).showGroundEnterAnim();
              }).then(function () {
                return _this5.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                  error: Error()
                }), TowerBuildBaseCtl) : TowerBuildBaseCtl).showTowerBuildBaseEnterAnim(); //展示塔的基座出现的动画
              }).then(function () {
                return _this5.showHomeIconEnterAnim();
              }).then(function () {
                // return this.node.getCom
                _this5.node.emit('update-gold-label', _this5.playerData.getCurrentGoldCount());

                return _this5.showUIEnterAnim();
              }).then(function () {
                _this5.state.setState("run");

                _this5.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).startGame(); // this.node.getComponent(GroundMapCtl).startGame();

              });
            }); // this.node.on("")
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            // return new Promise((resolve, reject) => {
            // let uiCtl = find("Canvas").getComponent(UIController);
            // if (uiCtl) {
            //     uiCtl.showUIEnterAnim().then(() => {
            //         resolve();
            //     })
            // }
            return this.uiController.showUIEnterAnim(); // })
          } // showGroundMapEnterAnim(){
          // }
          // playerTouchOnSkillNode(skillNode: Node, targetTower: Node) {
          // }

        }, {
          key: "showHomeIconEnterAnim",
          value: function showHomeIconEnterAnim() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              if (!isValid(_this6.homeIconNode)) {
                _this6.homeIconNode = instantiate(_this6.homeIconPrefab);
                _this6.homeIconNode.parent = _this6.node;
              }

              var groundMapCtl = _this6.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl);

              if (groundMapCtl) {
                var node = groundMapCtl.getMapNodeList().getValue(5, 5);
                _this6.homeIconNode.position = v3(node.position.x, 20, node.position.z);
                node.active = false;
                var tw = new Tween(_this6.homeIconNode); // this.homeIconTw = tw;

                _this6.homeIconNode.active = true;
                tw.call(function () {
                  node.active = true;
                });
                tw.to(2, {
                  position: v3(node.position.x, 0, node.position.z)
                }, {
                  easing: "quadOut"
                });
                tw.call(function () {
                  resolve();
                });
                tw.start();
              }
            });
          }
        }, {
          key: "playStatrButtonPressAnim",
          value: function playStatrButtonPressAnim() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              var skeleAnim = _this7.startGameButton.getChildByName("StartGameButton").getComponent(SkeletalAnimationComponent);

              if (skeleAnim) {
                var defaultAnim = skeleAnim.defaultClip; // defaultAnim

                var animState = skeleAnim.getState(defaultAnim.name);
                animState.repeatCount = 1;
                var length = animState.length;
                skeleAnim.play(defaultAnim.name);

                _this7.scheduleOnce(function () {
                  console.log("播放完成");
                  resolve();
                }, length);
              } else {
                resolve();
              }
            });
          }
        }, {
          key: "playerTouch3dObject",
          value: function playerTouch3dObject(result) {
            if (this.state.getState() === 'ready') {
              for (var i = 0; i < result.length; i++) {
                var collider = result[i].collider;

                if (collider.node.uuid === this.startGameButton.uuid) {
                  this.state.setState("play-start-button-anim");
                }
              } // if (collider.node.uuid == this.startGameButton.uuid) {
              //     this.state.setState("play-start-button-anim");
              // }

            } else if (this.state.getState() === 'run') {
              this.node.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastResults);
            } // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);

          }
        }, {
          key: "update",
          value: function update(dt) {}
        }, {
          key: "getGameConfig",
          value: function getGameConfig() {
            return this.gameConfigJson;
          }
        }, {
          key: "getCurrentLevelNum",
          value: function getCurrentLevelNum() {
            return this.playerData.currentLevelNum;
          }
        }, {
          key: "showAddGoldAnimEffect",
          value: function showAddGoldAnimEffect(goldCount, targetPos) {
            var node = instantiate(this.goldAnim3dPrefab);
            node.parent = this.node;
            node.getComponent(_crd && WinGoldAnimEffect === void 0 ? (_reportPossibleCrUseOfWinGoldAnimEffect({
              error: Error()
            }), WinGoldAnimEffect) : WinGoldAnimEffect).setGoldCount(goldCount, this);
            node.position = targetPos;
          }
        }, {
          key: "showBossEnterState",
          value: function showBossEnterState() {
            // for (){
            // }
            //进入展示boss 进场的状态
            this.node.emit("show-boss-enter-state");
          }
        }, {
          key: "enemyAttacked",
          value: function enemyAttacked() {
            var _this8 = this;

            //敌人发动了攻击'
            if (this.state.getState() === 'run') {
              this.state.setState("game-loss");
              this.uiController.node.emit('close-weapon-info-layer');
              this.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).frozenAllEnemy();
              this.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                error: Error()
              }), TowerBuildBaseCtl) : TowerBuildBaseCtl).frozenAllTowerBuildBase(); //禁锢所有塔的基座
              // this.homeIconTw.stop();

              this.homeIconNode.getComponent(_crd && HomeIcon === void 0 ? (_reportPossibleCrUseOfHomeIcon({
                error: Error()
              }), HomeIcon) : HomeIcon).frozenHomeIcon();
              var deadEnemyData = this.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).getDeadEnemyData();
              this.scheduleOnce(function () {
                _this8.uiController.showGameLossUI(deadEnemyData);
              }, 1);
            }
          }
        }, {
          key: "gameWin",
          value: function gameWin(deadEnemyData) {
            //游戏胜利，进入下一关
            //首先展示胜利失败页面
            // this
            //游戏胜利
            // this.uic
            this.uiController.node.emit('close-weapon-info-layer');

            if (this.state.getState() === 'run') {
              this.state.setState("show-game-result"); //进入显示游戏结果的界面

              this.uiController.showGameWinUI(deadEnemyData);
            }
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            var _this9 = this;

            this.playerData.enterNextLevel();
            console.log("进入下一关");
            this.enterGame().then(function () {
              _this9.node.emit('update-gold-label', _this9.playerData.getCurrentGoldCount());

              _this9.state.setState("run");

              _this9.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).startGame();
            }); //把所有的tower都销毁掉，
            //把左右的tower 的基座删掉
          }
        }, {
          key: "enterGame",
          value: function enterGame() {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              if (isValid(_this10.homeIconNode)) {
                _this10.homeIconNode.active = false;
              }

              _this10.node.emit("destroy-all-tower");

              _this10.node.emit("destroy-all-tower-build-base");

              _this10.node.emit("destroy-all-enemy"); //销毁当前的所有敌人


              _this10.node.emit("init-level-label"); //初始化当前的关卡label
              // this.uiController.node.emit('init-update-level');


              _this10.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                error: Error()
              }), TowerBuildBaseCtl) : TowerBuildBaseCtl).showTowerBuildBaseEnterAnim().then(function () {
                return _this10.showHomeIconEnterAnim();
              }).then(function () {
                resolve();
              });
            });
          }
        }]);

        return GameController;
      }(Component), _class3.accY = -1, _class3.enemyBeLockMaxNum = 1, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameConfigJson", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "towersPrefabList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startGameButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiController", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "plate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameStartButtonBase", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "homeIconPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "goldAnim3dPrefab", [_dec10], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVUlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJob21lSWNvblR3IiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFjdGl2ZSIsIm5vZGUiLCJlbWl0IiwiZ29sZENvdW50IiwiYWRkR29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwidGhlbiIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzZXRTdGF0ZSIsImdldENvbXBvbmVudCIsImNvbnRpbnVlR2FtZSIsImN1cnJlbnRHb2xkQ291bnQiLCJuZXdHYW1lIiwiZW50ZXJHYW1lIiwic3RhcnRHYW1lIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93VUlFbnRlckFuaW0iLCJ1aUNvbnRyb2xsZXIiLCJob21lSWNvblByZWZhYiIsImdyb3VuZE1hcEN0bCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJlYXNpbmciLCJza2VsZUFuaW0iLCJnZXRDaGlsZEJ5TmFtZSIsImRlZmF1bHRBbmltIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwicmVzdWx0IiwiaSIsImNvbGxpZGVyIiwidXVpZCIsInJheWNhc3RSZXN1bHRzIiwiZHQiLCJjdXJyZW50TGV2ZWxOdW0iLCJ0YXJnZXRQb3MiLCJnb2xkQW5pbTNkUHJlZmFiIiwic2V0R29sZENvdW50IiwiZnJvemVuQWxsRW5lbXkiLCJmcm96ZW5BbGxUb3dlckJ1aWxkQmFzZSIsImZyb3plbkhvbWVJY29uIiwiZGVhZEVuZW15RGF0YSIsImdldERlYWRFbmVteURhdGEiLCJzaG93R2FtZUxvc3NVSSIsInNob3dHYW1lV2luVUkiLCJlbnRlck5leHRMZXZlbCIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlD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T0FBSSxDQUFDRCxxQkFBTCxFQUFQO0FBQ0gsZUFGRCxFQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWUixnQkFBQUEsT0FBTztBQUNWLGVBSkQ7QUFLSCxhQWZNLENBQVA7QUFpQkg7Ozs7UUExVitCcEMsUyxXQUVsQnNILEksR0FBZSxDQUFDLEMsVUFpQmhCQyxpQixHQUE0QixDOzs7OztpQkFkTCxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0QsRTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQVdLLEk7Ozs7Ozs7aUJBR2YsSTs7Ozs7OztpQkFFYyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBT0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVHdlZW4sIEpzb25Bc3NldCwgVmVjMywgdjMsIFBoeXNpY3NTeXN0ZW0sIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCwgVmVjMiwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2VDdGwgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlQ3RsJztcclxuaW1wb3J0IHsgUGxheURhdGEgfSBmcm9tICcuL0RhdGEvUGxheWVyRGF0YSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi91dGlsL0Jlemllck4nO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuaW1wb3J0IHsgSG9tZUljb24gfSBmcm9tICcuL0hvbWUvSG9tZUljb24nO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8v6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY1k6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2Vyc1ByZWZhYkxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydEdhbWVCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50QWRkRW5lbXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gNDtcclxuICAgIC8vIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuZW15QmVMb2NrTWF4TnVtOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIHB1YmxpYyBjdXJyZW50TGV2ZWxOdW06IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFVJQ29udHJvbGxlciB9KVxyXG4gICAgcHVibGljIHVpQ29udHJvbGxlcjogVUlDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcGxhdGU6IE5vZGUgPSBudWxsOyAvL+aYn+eQg1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVTdGFydEJ1dHRvbkJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGhvbWVJY29uUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob21lSWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJEYXRhOiBQbGF5RGF0YTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb2xkQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaG9tZUljb25UdzogVHdlZW4gPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YSA9IG5ldyBQbGF5RGF0YSh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucGxhdGUpO1xyXG4gICAgICAgIHR3LnJlcGVhdEZvcmV2ZXIobmV3IFR3ZWVuKHRoaXMucGxhdGUpLnRvKDIwLCB7IGV1bGVyQW5nbGVzOiB2MygwLCAzNjAsIDApIH0pLnNldCh7IGV1bGVyQW5nbGVzOiB2MygwLCAwLCAwKSB9KSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihbdjMoMCwgMCwgMCksIHYzKDEwLCAzMCwgMTApLCB2MygyMCwgMywgMCksdjMoMjAsIDEwMCwgMzApXSk7XHJcbiAgICAgICAgLy8gbGV0IHBvaW50TGlzdDogVmVjM1tdID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb2ludFwiLCBwb2ludExpc3QpO1xyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnRlc3ROb2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0dy50bygwLjIsIHsgcG9zaXRpb246IHBvaW50TGlzdFtpXSB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGVzdE5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXItYnVpbGQtYmFzZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC1lbmVteVwiLCAoZ29sZENvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcIlwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMucGxheWVyRGF0YS5jdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDph43or5XkuIDmrKHnmoTmjInpkq5cclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtID0gMFxyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5uZXdHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgc3RhdGUgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJ1aWxkLW9uZS10b3dlclwiLCAoaW5kZXgsIHRvd2VyQmFzZU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/lu7rpgKDkuIDluqfloZRcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy50b3dlcnNQcmVmYWJMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2Vyc1ByZWZhYkxpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZ0pzb24uanNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjModG93ZXJCYXNlTm9kZS5wb3NpdGlvbi54LCAwLCB0b3dlckJhc2VOb2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdG93ZXJCYXNlTm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnNldFRhcmdldFRvd2VyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zZXRUb3dlckJ1aWxkQmFzZSh0b3dlckJhc2VOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnjqnlrrbngrnkuK3kuoblvIDlp4vmuLjmiI/mjInpkq5cIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnN0YXJ0R2FtZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IHYzKDAsIC0xMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2hvd0dyb3VuZEVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8v5bGV56S65aGU55qE5Z+65bqn5Ye6546w55qE5Yqo55S7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1VJRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IHVpQ3RsID0gZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKTtcclxuICAgICAgICAvLyBpZiAodWlDdGwpIHtcclxuICAgICAgICAvLyAgICAgdWlDdGwuc2hvd1VJRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVpQ29udHJvbGxlci5zaG93VUlFbnRlckFuaW0oKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICAvLyBzaG93R3JvdW5kTWFwRW50ZXJBbmltKCl7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHBsYXllclRvdWNoT25Ta2lsbE5vZGUoc2tpbGxOb2RlOiBOb2RlLCB0YXJnZXRUb3dlcjogTm9kZSkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93SG9tZUljb25FbnRlckFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmhvbWVJY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGdyb3VuZE1hcEN0bCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZE1hcEN0bCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZSg1LCA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG4gICAgZW5lbXlBdHRhY2tlZCgpIHtcclxuICAgICAgICAvL+aVjOS6uuWPkeWKqOS6huaUu+WHuydcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1sb3NzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5ub2RlLmVtaXQoJ2Nsb3NlLXdlYXBvbi1pbmZvLWxheWVyJylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmZyb3plbkFsbEVuZW15KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2VDdGwpLmZyb3plbkFsbFRvd2VyQnVpbGRCYXNlKCk7IC8v56aB6ZSi5omA5pyJ5aGU55qE5Z+65bqnXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaG9tZUljb25Udy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmdldENvbXBvbmVudChIb21lSWNvbikuZnJvemVuSG9tZUljb24oKTtcclxuICAgICAgICAgICAgbGV0IGRlYWRFbmVteURhdGEgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZ2V0RGVhZEVuZW15RGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5zaG93R2FtZUxvc3NVSShkZWFkRW5lbXlEYXRhKVxyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZ2FtZVdpbihkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIC8v5ri45oiP6IOc5Yip77yM6L+b5YWl5LiL5LiA5YWzXHJcbiAgICAgICAgLy/pppblhYjlsZXnpLrog5zliKnlpLHotKXpobXpnaJcclxuICAgICAgICAvLyB0aGlzXHJcbiAgICAgICAgLy/muLjmiI/og5zliKlcclxuICAgICAgICAvLyB0aGlzLnVpY1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLm5vZGUuZW1pdCgnY2xvc2Utd2VhcG9uLWluZm8tbGF5ZXInKVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzaG93LWdhbWUtcmVzdWx0XCIpOyAvL+i/m+WFpeaYvuekuua4uOaIj+e7k+aenOeahOeVjOmdolxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5zaG93R2FtZVdpblVJKGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v5oqK5omA5pyJ55qEdG93ZXLpg73plIDmr4HmjonvvIxcclxuICAgICAgICAvL+aKiuW3puWPs+eahHRvd2VyIOeahOWfuuW6p+WIoOaOiVxyXG4gICAgfVxyXG4gICAgZW50ZXJHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlci1idWlsZC1iYXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIpOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==