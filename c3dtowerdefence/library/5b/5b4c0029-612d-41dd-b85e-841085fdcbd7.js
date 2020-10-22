System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./TowerBuildBaseCtl.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js", "./Home/HomeIcon.js", "./util/AdsController.js", "./GameInstance.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, isValid, State, TowerBuildBase, EnemyController, GroundMapCtl, TowerBuildBaseCtl, TowerBase, WinGoldAnimEffect, HomeIcon, AdsController, GameInstance, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp, _crd, ccclass, property, GameController;

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

  function _reportPossibleCrUseOfTowerBuildBaseCtl(extras) {
    _reporterNs.report("TowerBuildBaseCtl", "./TowerBuildBaseCtl", _context.meta, extras);
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

  function _reportPossibleCrUseOfAdsController(extras) {
    _reporterNs.report("AdsController", "./util/AdsController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "./GameInstance", _context.meta, extras);
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
    _descriptor8: void 0,
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
    }, function (_TowerBuildBaseCtlJs) {
      TowerBuildBaseCtl = _TowerBuildBaseCtlJs.TowerBuildBaseCtl;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }, function (_EffectWinGoldAnimEffectJs) {
      WinGoldAnimEffect = _EffectWinGoldAnimEffectJs.WinGoldAnimEffect;
    }, function (_HomeHomeIconJs) {
      HomeIcon = _HomeHomeIconJs.HomeIcon;
    }, function (_utilAdsControllerJs) {
      AdsController = _utilAdsControllerJs.AdsController;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5b4c0ApYS1B3bhehBCF/cvX", "GameController", _context.meta);

      _crd = true;
      // import { WeaponInfoCtl } from './WeaponInfoCtl';
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
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
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

          _initializerDefineProperty(_this, "plate", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameStartButtonBase", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homeIconPrefab", _descriptor7, _assertThisInitialized(_this));

          _this.homeIconNode = null;

          _initializerDefineProperty(_this, "goldAnim3dPrefab", _descriptor8, _assertThisInitialized(_this));

          _this.homeIconTw = null;
          _this.adsCtl = new (_crd && AdsController === void 0 ? (_reportPossibleCrUseOfAdsController({
            error: Error()
          }), AdsController) : AdsController)();
          return _this;
        }

        _createClass(GameController, [{
          key: "onLoad",
          // @property({ type: Node })
          // public testNode: Node = null;
          value: function onLoad() {
            // this.playerData = new PlayerData();
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().setGameCtlNode(this.node, this.gameConfigJson.json); // this.node.eulerAngles

            var tw = new Tween(this.plate);
            tw.repeatForever(new Tween(this.plate).to(20, {
              eulerAngles: v3(0, 360, 0)
            }).set({
              eulerAngles: v3(0, 0, 0)
            }));
            tw.start();
            this.node.on("show-game-win-layer", this.gameWin.bind(this));
            this.node.on("player-click-next-level-button", this.enterNextLevel.bind(this));
            this.node.on("enter-next-level", this.enterNextLevel.bind(this));
            this.node.on('retry-game', this.playerClickRetryButton.bind(this));
            this.node.on('player-click-save-life-button', this.playerClickSaveLifeButton.bind(this));
            this.node.on("enemy-to-attacked", this.enemyAttacked.bind(this));
            this.node.on("show-add-gold-anim-effect", this.showAddGoldAnimEffect.bind(this)); // let bezier = new BezierN([v3(0, 0, 0), v3(10, 30, 10), v3(20, 3, 0),v3(20, 100, 30)]);
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
          value: function playerClickSaveLifeButton(cb) {
            var _this2 = this;

            this.node.emit("destroy-all-enemy", function (goldCount) {
              // this.playerData.addGoldCount(goldCount);
              _this2.showHomeIconEnterAnim().then(function () {
                // this.playerData.recoverRedHeartCount();
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getPlayerData().recoverRedHeartCount(); // this.uiController.emit("refer-red-heart-label");

                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-red-heart-label"); // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());

                _this2.state.setState("run");

                _this2.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).continueGame(); //继续游戏

              });
            }); //玩家点击了 立即复活按钮
            // return new Promise((resolve, reject) => {
            //     let videoIsReady = this.adsCtl.getVideoIsReady();
            //     //根据视频广告是否准备好了，进行看广告复活，还是分享复活
            //     if (videoIsReady) {
            //         this.adsCtl.watchVideoAds().then(() => {
            //             resolve();
            //             if (cb) {
            //                 cb()
            //             }
            //             if (isValid(this.homeIconNode)) {
            //                 this.homeIconNode.active = false;
            //             }
            //             this.node.emit("destroy-all-enemy", (goldCount) => {
            //                 // this.playerData.addGoldCount(goldCount);
            //                 this.showHomeIconEnterAnim().then(() => {
            //                     // this.playerData.recoverRedHeartCount();
            //                     GameInstance.getInstance().getPlayerData().recoverRedHeartCount();
            //                     // this.uiController.emit("refer-red-heart-label");
            //                     GameInstance.getInstance().getUICtlNode().emit("refer-red-heart-label");
            //                     // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
            //                     this.state.setState("run");
            //                     this.node.getComponent(EnemyController).continueGame(); //继续游戏
            //                 });
            //             });
            //         })
            //     } else {
            //         this.adsCtl.shareTo().then(() => {
            //             resolve();
            //             if (cb) {
            //                 cb();
            //             }
            //             if (isValid(this.homeIconNode)) {
            //                 this.homeIconNode.active = false;
            //             }
            //             this.node.emit("destroy-all-enemy", (goldCount) => {
            //                 // this.playerData.addGoldCount(goldCount);
            //                 this.showHomeIconEnterAnim().then(() => {
            //                     // this.playerData.recoverRedHeartCount();
            //                     GameInstance.getInstance().getPlayerData().recoverRedHeartCount();
            //                     // this.uiController.emit("refer-red-heart-label");
            //                     GameInstance.getInstance().getUICtlNode().emit("refer-red-heart-label");
            //                     // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
            //                     this.state.setState("run");
            //                     this.node.getComponent(EnemyController).continueGame(); //继续游戏
            //                 });
            //             });
            //         })
            //     }
            // })
          }
        }, {
          key: "playerClickShareButton",
          value: function playerClickShareButton(winPowerCount) {
            var _this3 = this;

            //玩家点击了分享按钮
            // return new Promise((resolve, reject) => {
            //     resolve();
            //     // this.playerData.addGoldCount(this.playerData.currentGoldCount);
            //     //加倍获得当前赢到的能量值
            //     this.adsCtl.shaderTo().
            //     this.playerData.addPowerCount(winPowerCount);
            // })
            return new Promise(function (resolve, reject) {
              _this3.adsCtl.shareTo().then(function () {
                // this.playerData.addPowerCount(winPowerCount);
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().addPowerCount(winPowerCount);
                resolve();
              });
            });
          }
        }, {
          key: "playerClickRetryButton",
          value: function playerClickRetryButton() {
            var _this4 = this;

            //玩家点击了 重试一次的按钮
            // this.playerData.currentLevelNum = 0
            // this.playerData.newGame();
            this.enterGame().then(function () {
              // this.uiController.emit("refer-red-heart-label");
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-red-heart-label"); // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());

              _this4.node.emit('update-gold-label', (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentGoldCount());

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
              console.log("enter state ", _this5.state.getState()); // this.uiController.getComponent(WeaponInfoCtl).initWeaponData();
            });
            this.state.setState("ready");
            this.node.on("build-one-tower", function (index, towerBaseNode) {
              //建造一座塔
              // this.uiController.emit("complete-current-guide");
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("complete-current-guide");

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
              // this.uiController.emit("complete-current-guide");
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("complete-current-guide"); // GameInstance.getInstance().showBannerAds();
              //给ui控制器发送，完成了当前的引导操作

              _this5.node.emit("play-audio", "按钮音效");

              _this5.node.emit("play-bg-music");

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
                // return this.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim();
                //展示塔的基座出现的动画
                return _this5.enterGame();
              }) // .then(() => {
              //     // return this.showHomeIconEnterAnim();
              // })
              .then(function () {
                // return this.node.getCom
                return _this5.showUIEnterAnim();
              }).then(function () {
                _this5.state.setState("run");

                _this5.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).startGame(); // this.playerData.newGame();


                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().newGame(); // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());
                // this.node.emit('update-gold-label', GameInstance.getInstance().getPlayerData().getCurrentGoldCount());
                // this.node.getComponent(GroundMapCtl).startGame();
              });
            });
            this.state.addState("game-loss", function () {
              console.log("进入游戏失败的状态"); // this.uiController.emit('close-weapon-info-layer')

              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("close-weapon-info-layer");

              _this5.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).gemeLose();

              _this5.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).frozenAllEnemy();

              _this5.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                error: Error()
              }), TowerBuildBaseCtl) : TowerBuildBaseCtl).frozenAllTowerBuildBase(); //禁锢所有塔的基座
              // this.homeIconTw.stop();


              _this5.homeIconNode.getComponent(_crd && HomeIcon === void 0 ? (_reportPossibleCrUseOfHomeIcon({
                error: Error()
              }), HomeIcon) : HomeIcon).frozenHomeIcon();

              var deadEnemyData = _this5.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).getDeadEnemyData();

              _this5.scheduleOnce(function () {
                // this.uiController.showGameLossUI(deadEnemyData)
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("show-game-loss-ui", deadEnemyData, _this5.adsCtl.getVideoIsReady());
              }, 0.6);
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
            // })
            return new Promise(function (resolve, reject) {
              // return this.uiController.showUIEnterAnim()
              // 
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("show-ui-enter-anim", function () {
                resolve();
              });
            });
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

                _this6.homeIconNode.getComponent(_crd && HomeIcon === void 0 ? (_reportPossibleCrUseOfHomeIcon({
                  error: Error()
                }), HomeIcon) : HomeIcon).freeHomeIconn();

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
          } // getCurrentLevelNum() {
          //     // return this.playerData.currentLevelNum;
          //     return GameInstance.getInstance().getPlayerData().currentLevelNum;
          // }

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
          key: "gameWin",
          value: function gameWin(deadEnemyData) {
            //游戏胜利，进入下一关
            //首先展示胜利失败页面
            // this
            //游戏胜利
            // this.uic
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("close-all-ui"); //重新刷新UI

            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit('close-weapon-info-layer');

            if (this.state.getState() === 'run') {
              this.state.setState("show-game-result"); //进入显示游戏结果的界面
              // this.uiController.showGameWinUI(deadEnemyData);

              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("show-game-win-ui", deadEnemyData);
            }
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            var _this8 = this;

            // this.playerData.enterNextLevel();
            // GameInstance.getInstance().getPlayerData().enterNextLevel();
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().enterNextLevel();

            if ((_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum === 0) {
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("show-game-end-info-layer", function () {
                _this8.enterGame().then(function () {
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().getPlayerData().recoverRedHeartCount();
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-red-heart-label");

                  _this8.node.emit('update-gold-label', (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentGoldCount());

                  _this8.state.setState("run");

                  _this8.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                    error: Error()
                  }), EnemyController) : EnemyController).startGame();
                });
              });
            } else {
              console.log("进入下一关");
              this.enterGame().then(function () {
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getPlayerData().recoverRedHeartCount();
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-red-heart-label");

                _this8.node.emit('update-gold-label', (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentGoldCount());

                _this8.state.setState("run");

                _this8.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).startGame();
              });
            } //把所有的tower都销毁掉，
            //把左右的tower 的基座删掉

          }
        }, {
          key: "enterGame",
          value: function enterGame() {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              if (isValid(_this9.homeIconNode)) {
                _this9.homeIconNode.active = false;
              } // this.node.emit("re-init-ui"); //重新刷新UI


              _this9.node.emit("destroy-all-tower");

              _this9.node.emit("destroy-all-tower-build-base");

              _this9.node.emit("destroy-all-enemy"); //销毁当前的所有敌人


              _this9.node.emit("init-level-label"); //初始化当前的关卡label
              // this.uiController.node.emit('init-update-level');


              _this9.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                error: Error()
              }), TowerBuildBaseCtl) : TowerBuildBaseCtl).showTowerBuildBaseEnterAnim().then(function () {
                return _this9.showHomeIconEnterAnim();
              }).then(function () {
                return _this9.showCurrentLevelIconAnim();
              }).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "showCurrentLevelIconAnim",
          value: function showCurrentLevelIconAnim() {
            return new Promise(function (resolve, reject) {
              //显示当前是第一关的icon
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("show-current-level-icon-anim", function () {
                if (resolve) {
                  resolve();
                }
              });
            });
          }
        }, {
          key: "enemyAttacked",
          value: function enemyAttacked(num) {
            console.log("敌人发动了攻击", num); // this.playerData.add

            if (this.state.getState() === 'run') {
              var currentRedHeartCount = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentRedHeartCount();

              if (currentRedHeartCount > 0) {
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getPlayerData().addRedHeartCount(-1);
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-red-heart-label");

                if ((_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentRedHeartCount() === 0) {
                  console.log("游戏结束");
                  this.state.setState("game-loss");
                }
              }
            }
          }
        }, {
          key: "referRedHeardUI",
          value: function referRedHeardUI() {
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-red-heart-label");
          } // activeEnemySuccess(enemyType: string) {
          //     console.log("active enemy succcess", enemyType);
          //     //
          //     // this.node.emit("")
          //     // this.uiController.emit("refer-enemy-info-cell", enemyType);
          //     GameInstance.getInstance().getUICtlNode().emit("refer-enemy-info-cell", enemyType);
          // }

        }, {
          key: "referPowerCountLabel",
          value: function referPowerCountLabel() {
            //刷新当前的 能量值
            // this.uiController.emit("refer-current-power-label", GameInstance.getInstance().getPlayerData().currentPowerCount);
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("refer-current-power-label", (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentPowerCount);
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "plate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameStartButtonBase", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "homeIconPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "goldAnim3dPrefab", [_dec9], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJUb3dlckJhc2UiLCJXaW5Hb2xkQW5pbUVmZmVjdCIsIkhvbWVJY29uIiwiQWRzQ29udHJvbGxlciIsIkdhbWVJbnN0YW5jZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVDb250cm9sbGVyIiwidHlwZSIsInN0YXRlIiwiaG9tZUljb25Ob2RlIiwiaG9tZUljb25UdyIsImFkc0N0bCIsImdldEluc3RhbmNlIiwic2V0R2FtZUN0bE5vZGUiLCJub2RlIiwiZ2FtZUNvbmZpZ0pzb24iLCJqc29uIiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJvbiIsImdhbWVXaW4iLCJiaW5kIiwiZW50ZXJOZXh0TGV2ZWwiLCJwbGF5ZXJDbGlja1JldHJ5QnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiIsImVuZW15QXR0YWNrZWQiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJjYiIsImVtaXQiLCJnb2xkQ291bnQiLCJzaG93SG9tZUljb25FbnRlckFuaW0iLCJ0aGVuIiwiZ2V0UGxheWVyRGF0YSIsInJlY292ZXJSZWRIZWFydENvdW50IiwiZ2V0VUlDdGxOb2RlIiwic2V0U3RhdGUiLCJnZXRDb21wb25lbnQiLCJjb250aW51ZUdhbWUiLCJ3aW5Qb3dlckNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzaGFyZVRvIiwiYWRkUG93ZXJDb3VudCIsImVudGVyR2FtZSIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzdGFydEdhbWUiLCJpbnN0YW5jZSIsImVuYWJsZSIsImFkZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImluaXQiLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VUlFbnRlckFuaW0iLCJuZXdHYW1lIiwiZ2VtZUxvc2UiLCJmcm96ZW5BbGxFbmVteSIsImZyb3plbkFsbFRvd2VyQnVpbGRCYXNlIiwiZnJvemVuSG9tZUljb24iLCJkZWFkRW5lbXlEYXRhIiwiZ2V0RGVhZEVuZW15RGF0YSIsInNjaGVkdWxlT25jZSIsImdldFZpZGVvSXNSZWFkeSIsImhvbWVJY29uUHJlZmFiIiwiZ3JvdW5kTWFwQ3RsIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsImZyZWVIb21lSWNvbm4iLCJhY3RpdmUiLCJlYXNpbmciLCJza2VsZUFuaW0iLCJnZXRDaGlsZEJ5TmFtZSIsImRlZmF1bHRBbmltIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5IiwicmVzdWx0IiwiaSIsImNvbGxpZGVyIiwidXVpZCIsInJheWNhc3RSZXN1bHRzIiwiZHQiLCJ0YXJnZXRQb3MiLCJnb2xkQW5pbTNkUHJlZmFiIiwic2V0R29sZENvdW50IiwiY3VycmVudExldmVsTnVtIiwic2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltIiwic2hvd0N1cnJlbnRMZXZlbEljb25BbmltIiwibnVtIiwiY3VycmVudFJlZEhlYXJ0Q291bnQiLCJnZXRDdXJyZW50UmVkSGVhcnRDb3VudCIsImFkZFJlZEhlYXJ0Q291bnQiLCJjdXJyZW50UG93ZXJDb3VudCIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGEsT0FBQUEsYTtBQUFrQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBMERDLE1BQUFBLE8sT0FBQUEsTzs7OztBQUMxS0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxtQ0FBQUEsYzs7QUFDY0MsTUFBQUEsZSxzQkFBQUEsZTs7QUFDZEMsTUFBQUEsWSxtQkFBQUEsWTs7QUFFQUMsTUFBQUEsaUIsd0JBQUFBLGlCOztBQUdBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUVBQyxNQUFBQSxpQiw4QkFBQUEsaUI7O0FBQ0FDLE1BQUFBLFEsbUJBQUFBLFE7O0FBQ0FDLE1BQUFBLGEsd0JBQUFBLGE7O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7Ozs7OztBQUNUO0FBQ1FDLE1BQUFBLE8sR0FBc0JyQixVLENBQXRCcUIsTztBQUFTQyxNQUFBQSxRLEdBQWF0QixVLENBQWJzQixROztnQ0FHSkMsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQs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QUNIO0FBQ0o7QUFDSjtBQUVKOzs7NENBQ2lCO0FBQ2Q7QUFBQTtBQUFBLDhDQUFhNUIsV0FBYixHQUEyQjJCLFlBQTNCLEdBQTBDTixJQUExQyxDQUErQyx1QkFBL0M7QUFDSCxXLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7aURBQ3VCO0FBQ25CO0FBQ0E7QUFDQTtBQUFBO0FBQUEsOENBQWFyQixXQUFiLEdBQTJCMkIsWUFBM0IsR0FBMENOLElBQTFDLENBQStDLDJCQUEvQyxFQUE0RTtBQUFBO0FBQUEsOENBQWFyQixXQUFiLEdBQTJCeUIsYUFBM0IsR0FBMkNtRixpQkFBdkg7QUFDSDs7OztRQW5mK0J4SSxTLFdBRWxCeUksSSxHQUFlLENBQUMsQyxVQWlCaEJDLGlCLEdBQTRCLEM7Ozs7O2lCQWRMLEk7Ozs7Ozs7aUJBR0YsSTs7Ozs7OztpQkFHRCxFOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBY1YsSTs7Ozs7OztpQkFFYyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBT0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVHdlZW4sIEpzb25Bc3NldCwgVmVjMywgdjMsIFBoeXNpY3NTeXN0ZW0sIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCwgVmVjMiwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbi8vIGltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2VDdGwgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlQ3RsJztcclxuLy8gaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gJy4vRGF0YS9QbGF5ZXJEYXRhJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gJy4vSG9tZS9Ib21lSWNvbic7XHJcbmltcG9ydCB7IEFkc0NvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWwvQWRzQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVJbnN0YW5jZSB9IGZyb20gJy4vR2FtZUluc3RhbmNlJztcclxuLy8gaW1wb3J0IHsgV2VhcG9uSW5mb0N0bCB9IGZyb20gJy4vV2VhcG9uSW5mb0N0bCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy/ph43lipvliqDpgJ/luqZcclxuICAgIHB1YmxpYyBzdGF0aWMgYWNjWTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJzUHJlZmFiTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0R2FtZUJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSA0O1xyXG4gICAgLy8gcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXlCZUxvY2tNYXhOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRMZXZlbE51bTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHVpQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHBsYXRlOiBOb2RlID0gbnVsbDsgLy/mmJ/nkINcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lU3RhcnRCdXR0b25CYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBob21lSWNvblByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaG9tZUljb25Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwdWJsaWMgcGxheWVyRGF0YTogUGxheWVyRGF0YSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZ29sZEFuaW0zZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGhvbWVJY29uVHc6IFR3ZWVuID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhZHNDdGw6IEFkc0NvbnRyb2xsZXIgPSBuZXcgQWRzQ29udHJvbGxlcigpO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHRlc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEgPSBuZXcgUGxheWVyRGF0YSgpO1xyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLnNldEdhbWVDdGxOb2RlKHRoaXMubm9kZSwgdGhpcy5nYW1lQ29uZmlnSnNvbi5qc29uKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5wbGF0ZSk7XHJcbiAgICAgICAgdHcucmVwZWF0Rm9yZXZlcihuZXcgVHdlZW4odGhpcy5wbGF0ZSkudG8oMjAsIHsgZXVsZXJBbmdsZXM6IHYzKDAsIDM2MCwgMCkgfSkuc2V0KHsgZXVsZXJBbmdsZXM6IHYzKDAsIDAsIDApIH0pKVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93LWdhbWUtd2luLWxheWVyXCIsIHRoaXMuZ2FtZVdpbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJwbGF5ZXItY2xpY2stbmV4dC1sZXZlbC1idXR0b25cIiwgdGhpcy5lbnRlck5leHRMZXZlbC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJlbnRlci1uZXh0LWxldmVsXCIsIHRoaXMuZW50ZXJOZXh0TGV2ZWwuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdyZXRyeS1nYW1lJywgdGhpcy5wbGF5ZXJDbGlja1JldHJ5QnV0dG9uLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbigncGxheWVyLWNsaWNrLXNhdmUtbGlmZS1idXR0b24nLCB0aGlzLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZW5lbXktdG8tYXR0YWNrZWRcIiwgdGhpcy5lbmVteUF0dGFja2VkLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctYWRkLWdvbGQtYW5pbS1lZmZlY3RcIiwgdGhpcy5zaG93QWRkR29sZEFuaW1FZmZlY3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFt2MygwLCAwLCAwKSwgdjMoMTAsIDMwLCAxMCksIHYzKDIwLCAzLCAwKSx2MygyMCwgMTAwLCAzMCldKTtcclxuICAgICAgICAvLyBsZXQgcG9pbnRMaXN0OiBWZWMzW10gPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50XCIsIHBvaW50TGlzdCk7XHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMudGVzdE5vZGUpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDAuMiwgeyBwb3NpdGlvbjogcG9pbnRMaXN0W2ldIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXN0Tm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5yZXBlYXRGb3JldmVyKCk7XHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwbGF5ZXJDbGlja1NhdmVMaWZlQnV0dG9uKGNiKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC1lbmVteVwiLCAoZ29sZENvdW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoZ29sZENvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5yZWNvdmVyUmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLnJlY292ZXJSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5jb250aW51ZUdhbWUoKTsgLy/nu6fnu63muLjmiI9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgdmlkZW9Jc1JlYWR5ID0gdGhpcy5hZHNDdGwuZ2V0VmlkZW9Jc1JlYWR5KCk7XHJcbiAgICAgICAgLy8gICAgIC8v5qC55o2u6KeG6aKR5bm/5ZGK5piv5ZCm5YeG5aSH5aW95LqG77yM6L+b6KGM55yL5bm/5ZGK5aSN5rS777yM6L+Y5piv5YiG5Lqr5aSN5rS7XHJcbiAgICAgICAgLy8gICAgIGlmICh2aWRlb0lzUmVhZHkpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWRzQ3RsLndhdGNoVmlkZW9BZHMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNiKClcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChnb2xkQ291bnQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudChnb2xkQ291bnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLnJlY292ZXJSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFkc0N0bC5zaGFyZVRvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGdvbGRDb3VudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5yZWNvdmVyUmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuY29udGludWVHYW1lKCk7IC8v57un57ut5ri45oiPXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NoYXJlQnV0dG9uKHdpblBvd2VyQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMucGxheWVyRGF0YS5jdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICAvLyAgICAgLy/liqDlgI3ojrflvpflvZPliY3otaLliLDnmoTog73ph4/lgLxcclxuICAgICAgICAvLyAgICAgdGhpcy5hZHNDdGwuc2hhZGVyVG8oKS5cclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJEYXRhLmFkZFBvd2VyQ291bnQod2luUG93ZXJDb3VudCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkc0N0bC5zaGFyZVRvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkUG93ZXJDb3VudCh3aW5Qb3dlckNvdW50KTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmFkZFBvd2VyQ291bnQod2luUG93ZXJDb3VudCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1JldHJ5QnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqGIOmHjeivleS4gOasoeeahOaMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLm5ld0dhbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBzdGF0ZSBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFdlYXBvbkluZm9DdGwpLmluaXRXZWFwb25EYXRhKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJ1aWxkLW9uZS10b3dlclwiLCAoaW5kZXgsIHRvd2VyQmFzZU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/lu7rpgKDkuIDluqfloZRcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcImNvbXBsZXRlLWN1cnJlbnQtZ3VpZGVcIik7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJjb21wbGV0ZS1jdXJyZW50LWd1aWRlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy50b3dlcnNQcmVmYWJMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2Vyc1ByZWZhYkxpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZ0pzb24uanNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjModG93ZXJCYXNlTm9kZS5wb3NpdGlvbi54LCAwLCB0b3dlckJhc2VOb2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdG93ZXJCYXNlTm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnNldFRhcmdldFRvd2VyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zZXRUb3dlckJ1aWxkQmFzZSh0b3dlckJhc2VOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnjqnlrrbngrnkuK3kuoblvIDlp4vmuLjmiI/mjInpkq5cIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJjb21wbGV0ZS1jdXJyZW50LWd1aWRlXCIpO1xyXG4gICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwiY29tcGxldGUtY3VycmVudC1ndWlkZVwiKTtcclxuICAgICAgICAgICAgLy8gR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuc2hvd0Jhbm5lckFkcygpO1xyXG4gICAgICAgICAgICAvL+e7mXVp5o6n5Yi25Zmo5Y+R6YCB77yM5a6M5oiQ5LqG5b2T5YmN55qE5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIuaMiemSrumfs+aViFwiKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInBsYXktYmctbXVzaWNcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnN0YXJ0R2FtZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IHYzKDAsIC0xMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2hvd0dyb3VuZEVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8v5bGV56S65aGU55qE5Z+65bqn5Ye6546w55qE5Yqo55S7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93VUlFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5uZXdHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkubmV3R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZ2FtZS1sb3NzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXmuLjmiI/lpLHotKXnmoTnirbmgIFcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmVtaXQoJ2Nsb3NlLXdlYXBvbi1pbmZvLWxheWVyJylcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcImNsb3NlLXdlYXBvbi1pbmZvLWxheWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdlbWVMb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5mcm96ZW5BbGxFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5mcm96ZW5BbGxUb3dlckJ1aWxkQmFzZSgpOyAvL+emgemUouaJgOacieWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhvbWVJY29uVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyb3plbkhvbWVJY29uKCk7XHJcbiAgICAgICAgICAgIGxldCBkZWFkRW5lbXlEYXRhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdldERlYWRFbmVteURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YSlcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWdhbWUtbG9zcy11aVwiLCBkZWFkRW5lbXlEYXRhLCB0aGlzLmFkc0N0bC5nZXRWaWRlb0lzUmVhZHkoKSk7XHJcbiAgICAgICAgICAgIH0sIDAuNik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmICh1aUN0bCkge1xyXG4gICAgICAgIC8vICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LXVpLWVudGVyLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyZWVIb21lSWNvbm4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICAvLyAgICAgcmV0dXJuIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICAvLyB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVXaW4oZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICAvL+a4uOaIj+iDnOWIqe+8jOi/m+WFpeS4i+S4gOWFs1xyXG4gICAgICAgIC8v6aaW5YWI5bGV56S66IOc5Yip5aSx6LSl6aG16Z2iXHJcbiAgICAgICAgLy8gdGhpc1xyXG4gICAgICAgIC8v5ri45oiP6IOc5YipXHJcbiAgICAgICAgLy8gdGhpcy51aWNcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwiY2xvc2UtYWxsLXVpXCIpOy8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNob3ctZ2FtZS1yZXN1bHRcIik7IC8v6L+b5YWl5pi+56S65ri45oiP57uT5p6c55qE55WM6Z2iXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWdhbWUtd2luLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAvLyBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5lbnRlck5leHRMZXZlbCgpO1xyXG5cclxuICAgICAgICBpZiAoR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSA9PT0gMCkge1xyXG4gICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwic2hvdy1nYW1lLWVuZC1pbmZvLWxheWVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLnJlY292ZXJSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5yZWNvdmVyUmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+aKiuaJgOacieeahHRvd2Vy6YO96ZSA5q+B5o6J77yMXHJcbiAgICAgICAgLy/miorlt6blj7PnmoR0b3dlciDnmoTln7rluqfliKDmjolcclxuICAgIH1cclxuICAgIGVudGVyR2FtZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwicmUtaW5pdC11aVwiKTsgLy/ph43mlrDliLfmlrBVSVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyLWJ1aWxkLWJhc2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtZW5lbXlcIik7IC8v6ZSA5q+B5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiaW5pdC1sZXZlbC1sYWJlbFwiKTsgLy/liJ3lp4vljJblvZPliY3nmoTlhbPljaFsYWJlbFxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5ub2RlLmVtaXQoJ2luaXQtdXBkYXRlLWxldmVsJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dDdXJyZW50TGV2ZWxJY29uQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBzaG93Q3VycmVudExldmVsSWNvbkFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy/mmL7npLrlvZPliY3mmK/nrKzkuIDlhbPnmoRpY29uXHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWN1cnJlbnQtbGV2ZWwtaWNvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKG51bTogTnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmlYzkurrlj5HliqjkuobmlLvlh7tcIiwgbnVtKVxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5hZGRcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFJlZEhlYXJ0Q291bnQgPSBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWRIZWFydENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmFkZFJlZEhlYXJ0Q291bnQoLTEpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVmZXJSZWRIZWFyZFVJKCkge1xyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICB9XHJcbiAgICAvLyBhY3RpdmVFbmVteVN1Y2Nlc3MoZW5lbXlUeXBlOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZSBlbmVteSBzdWNjY2Vzc1wiLCBlbmVteVR5cGUpO1xyXG4gICAgLy8gICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJcIilcclxuICAgIC8vICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIGVuZW15VHlwZSk7XHJcbiAgICAvLyAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLWVuZW15LWluZm8tY2VsbFwiLCBlbmVteVR5cGUpO1xyXG4gICAgLy8gfVxyXG4gICAgcmVmZXJQb3dlckNvdW50TGFiZWwoKSB7XHJcbiAgICAgICAgLy/liLfmlrDlvZPliY3nmoQg6IO96YeP5YC8XHJcbiAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLWN1cnJlbnQtcG93ZXItbGFiZWxcIiwgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRQb3dlckNvdW50KTtcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwicmVmZXItY3VycmVudC1wb3dlci1sYWJlbFwiLCBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuY3VycmVudFBvd2VyQ291bnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=