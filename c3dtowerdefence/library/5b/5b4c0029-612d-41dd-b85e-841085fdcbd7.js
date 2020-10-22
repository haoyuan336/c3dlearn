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

            //玩家点击了 立即复活按钮
            return new Promise(function (resolve, reject) {
              var videoIsReady = _this2.adsCtl.getVideoIsReady(); //根据视频广告是否准备好了，进行看广告复活，还是分享复活


              if (videoIsReady) {
                _this2.adsCtl.watchVideoAds().then(function () {
                  resolve();

                  if (cb) {
                    cb();
                  }

                  if (isValid(_this2.homeIconNode)) {
                    _this2.homeIconNode.active = false;
                  }

                  _this2.node.emit("destroy-all-enemy", function (goldCount) {
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
                  });
                });
              } else {
                _this2.adsCtl.shareTo().then(function () {
                  resolve();

                  if (cb) {
                    cb();
                  }

                  if (isValid(_this2.homeIconNode)) {
                    _this2.homeIconNode.active = false;
                  }

                  _this2.node.emit("destroy-all-enemy", function (goldCount) {
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
                  });
                });
              }
            });
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
              }), GameInstance) : GameInstance).getInstance().getUICtlNode().emit("complete-current-guide");
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().showBannerAds(); //给ui控制器发送，完成了当前的引导操作

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJUb3dlckJhc2UiLCJXaW5Hb2xkQW5pbUVmZmVjdCIsIkhvbWVJY29uIiwiQWRzQ29udHJvbGxlciIsIkdhbWVJbnN0YW5jZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVDb250cm9sbGVyIiwidHlwZSIsInN0YXRlIiwiaG9tZUljb25Ob2RlIiwiaG9tZUljb25UdyIsImFkc0N0bCIsImdldEluc3RhbmNlIiwic2V0R2FtZUN0bE5vZGUiLCJub2RlIiwiZ2FtZUNvbmZpZ0pzb24iLCJqc29uIiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJvbiIsImdhbWVXaW4iLCJiaW5kIiwiZW50ZXJOZXh0TGV2ZWwiLCJwbGF5ZXJDbGlja1JldHJ5QnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiIsImVuZW15QXR0YWNrZWQiLCJzaG93QWRkR29sZEFuaW1FZmZlY3QiLCJjYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidmlkZW9Jc1JlYWR5IiwiZ2V0VmlkZW9Jc1JlYWR5Iiwid2F0Y2hWaWRlb0FkcyIsInRoZW4iLCJhY3RpdmUiLCJlbWl0IiwiZ29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwiZ2V0UGxheWVyRGF0YSIsInJlY292ZXJSZWRIZWFydENvdW50IiwiZ2V0VUlDdGxOb2RlIiwic2V0U3RhdGUiLCJnZXRDb21wb25lbnQiLCJjb250aW51ZUdhbWUiLCJzaGFyZVRvIiwid2luUG93ZXJDb3VudCIsImFkZFBvd2VyQ291bnQiLCJlbnRlckdhbWUiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic3RhcnRHYW1lIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsImluZGV4IiwidG93ZXJCYXNlTm9kZSIsInRvd2Vyc1ByZWZhYkxpc3QiLCJsZW5ndGgiLCJwYXJlbnQiLCJpbml0IiwicG9zIiwicG9zaXRpb24iLCJ4IiwieiIsInNldFBvc2l0aW9uIiwic2V0VGFyZ2V0VG93ZXIiLCJzZXRUb3dlckJ1aWxkQmFzZSIsInNob3dCYW5uZXJBZHMiLCJwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0iLCJzdGFydEdhbWVCdXR0b24iLCJieSIsImNhbGwiLCJkZXN0cm95IiwiZ2FtZVN0YXJ0QnV0dG9uQmFzZSIsInNjYWxlIiwic2hvd0dyb3VuZEVudGVyQW5pbSIsInNob3dVSUVudGVyQW5pbSIsIm5ld0dhbWUiLCJnZW1lTG9zZSIsImZyb3plbkFsbEVuZW15IiwiZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UiLCJmcm96ZW5Ib21lSWNvbiIsImRlYWRFbmVteURhdGEiLCJnZXREZWFkRW5lbXlEYXRhIiwic2NoZWR1bGVPbmNlIiwiaG9tZUljb25QcmVmYWIiLCJncm91bmRNYXBDdGwiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwiZnJlZUhvbWVJY29ubiIsImVhc2luZyIsInNrZWxlQW5pbSIsImdldENoaWxkQnlOYW1lIiwiZGVmYXVsdEFuaW0iLCJkZWZhdWx0Q2xpcCIsImFuaW1TdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJyZXN1bHQiLCJpIiwiY29sbGlkZXIiLCJ1dWlkIiwicmF5Y2FzdFJlc3VsdHMiLCJkdCIsInRhcmdldFBvcyIsImdvbGRBbmltM2RQcmVmYWIiLCJzZXRHb2xkQ291bnQiLCJjdXJyZW50TGV2ZWxOdW0iLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93Q3VycmVudExldmVsSWNvbkFuaW0iLCJudW0iLCJjdXJyZW50UmVkSGVhcnRDb3VudCIsImdldEN1cnJlbnRSZWRIZWFydENvdW50IiwiYWRkUmVkSGVhcnRDb3VudCIsImN1cnJlbnRQb3dlckNvdW50IiwiYWNjWSIsImVuZW15QmVMb2NrTWF4TnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsYSxPQUFBQSxhO0FBQWtDQyxNQUFBQSwwQixPQUFBQSwwQjtBQUEwREMsTUFBQUEsTyxPQUFBQSxPOzs7O0FBQzFLQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxjLG1DQUFBQSxjOztBQUNjQyxNQUFBQSxlLHNCQUFBQSxlOztBQUNkQyxNQUFBQSxZLG1CQUFBQSxZOztBQUVBQyxNQUFBQSxpQix3QkFBQUEsaUI7O0FBR0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBRUFDLE1BQUFBLGlCLDhCQUFBQSxpQjs7QUFDQUMsTUFBQUEsUSxtQkFBQUEsUTs7QUFDQUMsTUFBQUEsYSx3QkFBQUEsYTs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ1Q7QUFDUUMsTUFBQUEsTyxHQUFzQnJCLFUsQ0FBdEJxQixPO0FBQVNDLE1BQUFBLFEsR0FBYXRCLFUsQ0FBYnNCLFE7O2dDQUdKQyxjLFdBRFpGLE9BQU8sQ0FBQyxnQkFBRCxDLFVBS0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUV0QjtBQUFSLE9BQUQsQyxVQUdSb0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWxCO0FBQVIsT0FBRCxDLFVBR1JnQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFckI7QUFBUixPQUFELEMsVUFHUm1CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUV0QjtBQUFSLE9BQUQsQyxVQWNSb0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXRCO0FBQVIsT0FBRCxDLFVBRVJvQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFdEI7QUFBUixPQUFELEMsVUFHUm9CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVyQjtBQUFSLE9BQUQsQyxVQU9SbUIsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXJCO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBeEJEc0IsSyxHQUFRO0FBQUE7QUFBQSwrQjs7Ozs7Ozs7Z0JBb0JUQyxZLEdBQXFCLEk7Ozs7Z0JBT3BCQyxVLEdBQW9CLEk7Z0JBR3BCQyxNLEdBQXdCO0FBQUE7QUFBQSwrQzs7Ozs7O0FBQ2hDO0FBQ0E7bUNBQ1M7QUFDTDtBQUNBO0FBQUE7QUFBQSw4Q0FBYUMsV0FBYixHQUEyQkMsY0FBM0IsQ0FBMEMsS0FBS0MsSUFBL0MsRUFBcUQsS0FBS0MsY0FBTCxDQUFvQkMsSUFBekUsRUFGSyxDQUdMOztBQUNBLGdCQUFJQyxFQUFFLEdBQUcsSUFBSTdCLEtBQUosQ0FBVSxLQUFLOEIsS0FBZixDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsYUFBSCxDQUFpQixJQUFJL0IsS0FBSixDQUFVLEtBQUs4QixLQUFmLEVBQXNCRSxFQUF0QixDQUF5QixFQUF6QixFQUE2QjtBQUFFQyxjQUFBQSxXQUFXLEVBQUUvQixFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFUO0FBQWpCLGFBQTdCLEVBQTZEZ0MsR0FBN0QsQ0FBaUU7QUFBRUQsY0FBQUEsV0FBVyxFQUFFL0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFqQixhQUFqRSxDQUFqQjtBQUNBMkIsWUFBQUEsRUFBRSxDQUFDTSxLQUFIO0FBR0EsaUJBQUtULElBQUwsQ0FBVVUsRUFBVixDQUFhLHFCQUFiLEVBQW9DLEtBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFwQztBQUNBLGlCQUFLWixJQUFMLENBQVVVLEVBQVYsQ0FBYSxnQ0FBYixFQUErQyxLQUFLRyxjQUFMLENBQW9CRCxJQUFwQixDQUF5QixJQUF6QixDQUEvQztBQUNBLGlCQUFLWixJQUFMLENBQVVVLEVBQVYsQ0FBYSxrQkFBYixFQUFpQyxLQUFLRyxjQUFMLENBQW9CRCxJQUFwQixDQUF5QixJQUF6QixDQUFqQztBQUNBLGlCQUFLWixJQUFMLENBQVVVLEVBQVYsQ0FBYSxZQUFiLEVBQTJCLEtBQUtJLHNCQUFMLENBQTRCRixJQUE1QixDQUFpQyxJQUFqQyxDQUEzQjtBQUNBLGlCQUFLWixJQUFMLENBQVVVLEVBQVYsQ0FBYSwrQkFBYixFQUE4QyxLQUFLSyx5QkFBTCxDQUErQkgsSUFBL0IsQ0FBb0MsSUFBcEMsQ0FBOUM7QUFDQSxpQkFBS1osSUFBTCxDQUFVVSxFQUFWLENBQWEsbUJBQWIsRUFBa0MsS0FBS00sYUFBTCxDQUFtQkosSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEM7QUFDQSxpQkFBS1osSUFBTCxDQUFVVSxFQUFWLENBQWEsMkJBQWIsRUFBMEMsS0FBS08scUJBQUwsQ0FBMkJMLElBQTNCLENBQWdDLElBQWhDLENBQTFDLEVBZkssQ0FnQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7OztvREFDeUJNLEUsRUFBSTtBQUFBOztBQUMxQjtBQUNBLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUlDLFlBQVksR0FBRyxNQUFJLENBQUN6QixNQUFMLENBQVkwQixlQUFaLEVBQW5CLENBRG9DLENBRXBDOzs7QUFDQSxrQkFBSUQsWUFBSixFQUFrQjtBQUNkLGdCQUFBLE1BQUksQ0FBQ3pCLE1BQUwsQ0FBWTJCLGFBQVosR0FBNEJDLElBQTVCLENBQWlDLFlBQU07QUFDbkNMLGtCQUFBQSxPQUFPOztBQUNQLHNCQUFJRixFQUFKLEVBQVE7QUFDSkEsb0JBQUFBLEVBQUU7QUFDTDs7QUFDRCxzQkFBSXZDLE9BQU8sQ0FBQyxNQUFJLENBQUNnQixZQUFOLENBQVgsRUFBZ0M7QUFDNUIsb0JBQUEsTUFBSSxDQUFDQSxZQUFMLENBQWtCK0IsTUFBbEIsR0FBMkIsS0FBM0I7QUFDSDs7QUFDRCxrQkFBQSxNQUFJLENBQUMxQixJQUFMLENBQVUyQixJQUFWLENBQWUsbUJBQWYsRUFBb0MsVUFBQ0MsU0FBRCxFQUFlO0FBQy9DO0FBQ0Esb0JBQUEsTUFBSSxDQUFDQyxxQkFBTCxHQUE2QkosSUFBN0IsQ0FBa0MsWUFBTTtBQUNwQztBQUNBO0FBQUE7QUFBQSx3REFBYTNCLFdBQWIsR0FBMkJnQyxhQUEzQixHQUEyQ0Msb0JBQTNDLEdBRm9DLENBR3BDOztBQUNBO0FBQUE7QUFBQSx3REFBYWpDLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0MsdUJBQS9DLEVBSm9DLENBS3BDOztBQUNBLHNCQUFBLE1BQUksQ0FBQ2pDLEtBQUwsQ0FBV3VDLFFBQVgsQ0FBb0IsS0FBcEI7O0FBQ0Esc0JBQUEsTUFBSSxDQUFDakMsSUFBTCxDQUFVa0MsWUFBVjtBQUFBO0FBQUEsOERBQXdDQyxZQUF4QyxHQVBvQyxDQU9vQjs7QUFDM0QscUJBUkQ7QUFTSCxtQkFYRDtBQVlILGlCQXBCRDtBQXFCSCxlQXRCRCxNQXNCTztBQUNILGdCQUFBLE1BQUksQ0FBQ3RDLE1BQUwsQ0FBWXVDLE9BQVosR0FBc0JYLElBQXRCLENBQTJCLFlBQU07QUFDN0JMLGtCQUFBQSxPQUFPOztBQUNQLHNCQUFJRixFQUFKLEVBQVE7QUFDSkEsb0JBQUFBLEVBQUU7QUFDTDs7QUFDRCxzQkFBSXZDLE9BQU8sQ0FBQyxNQUFJLENBQUNnQixZQUFOLENBQVgsRUFBZ0M7QUFDNUIsb0JBQUEsTUFBSSxDQUFDQSxZQUFMLENBQWtCK0IsTUFBbEIsR0FBMkIsS0FBM0I7QUFDSDs7QUFDRCxrQkFBQSxNQUFJLENBQUMxQixJQUFMLENBQVUyQixJQUFWLENBQWUsbUJBQWYsRUFBb0MsVUFBQ0MsU0FBRCxFQUFlO0FBQy9DO0FBQ0Esb0JBQUEsTUFBSSxDQUFDQyxxQkFBTCxHQUE2QkosSUFBN0IsQ0FBa0MsWUFBTTtBQUNwQztBQUNBO0FBQUE7QUFBQSx3REFBYTNCLFdBQWIsR0FBMkJnQyxhQUEzQixHQUEyQ0Msb0JBQTNDLEdBRm9DLENBR3BDOztBQUNBO0FBQUE7QUFBQSx3REFBYWpDLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0MsdUJBQS9DLEVBSm9DLENBS3BDOztBQUNBLHNCQUFBLE1BQUksQ0FBQ2pDLEtBQUwsQ0FBV3VDLFFBQVgsQ0FBb0IsS0FBcEI7O0FBQ0Esc0JBQUEsTUFBSSxDQUFDakMsSUFBTCxDQUFVa0MsWUFBVjtBQUFBO0FBQUEsOERBQXdDQyxZQUF4QyxHQVBvQyxDQU9vQjs7QUFDM0QscUJBUkQ7QUFTSCxtQkFYRDtBQVlILGlCQXBCRDtBQXFCSDtBQUNKLGFBaERNLENBQVA7QUFpREg7OztpREFDc0JFLGEsRUFBdUI7QUFBQTs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFPLElBQUlsQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGNBQUEsTUFBSSxDQUFDeEIsTUFBTCxDQUFZdUMsT0FBWixHQUFzQlgsSUFBdEIsQ0FBMkIsWUFBTTtBQUM3QjtBQUNBO0FBQUE7QUFBQSxrREFBYTNCLFdBQWIsR0FBMkJ3QyxhQUEzQixDQUF5Q0QsYUFBekM7QUFDQWpCLGdCQUFBQSxPQUFPO0FBQ1YsZUFKRDtBQUtILGFBTk0sQ0FBUDtBQVFIOzs7bURBQ3dCO0FBQUE7O0FBQ3JCO0FBQ0E7QUFDQTtBQUVBLGlCQUFLbUIsU0FBTCxHQUFpQmQsSUFBakIsQ0FBc0IsWUFBTTtBQUN4QjtBQUNBO0FBQUE7QUFBQSxnREFBYTNCLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0MsdUJBQS9DLEVBRndCLENBR3hCOztBQUNBLGNBQUEsTUFBSSxDQUFDM0IsSUFBTCxDQUFVMkIsSUFBVixDQUFlLG1CQUFmLEVBQW9DO0FBQUE7QUFBQSxnREFBYTdCLFdBQWIsR0FBMkJnQyxhQUEzQixHQUEyQ1UsbUJBQTNDLEVBQXBDOztBQUVBLGNBQUEsTUFBSSxDQUFDOUMsS0FBTCxDQUFXdUMsUUFBWCxDQUFvQixLQUFwQjs7QUFDQSxjQUFBLE1BQUksQ0FBQ2pDLElBQUwsQ0FBVWtDLFlBQVY7QUFBQTtBQUFBLHNEQUF3Q08sU0FBeEM7QUFDSCxhQVJEO0FBU0g7OztrQ0FDTztBQUFBOztBQUNKaEUsWUFBQUEsYUFBYSxDQUFDaUUsUUFBZCxDQUF1QkMsTUFBdkIsR0FBZ0MsSUFBaEMsQ0FESSxDQUVKOztBQUNBLGlCQUFLakQsS0FBTCxDQUFXa0QsUUFBWCxDQUFvQixPQUFwQixFQUE2QixZQUFNO0FBQy9CQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLE1BQUksQ0FBQ3BELEtBQUwsQ0FBV3FELFFBQVgsRUFBNUIsRUFEK0IsQ0FFL0I7QUFDSCxhQUhEO0FBSUEsaUJBQUtyRCxLQUFMLENBQVd1QyxRQUFYLENBQW9CLE9BQXBCO0FBRUEsaUJBQUtqQyxJQUFMLENBQVVVLEVBQVYsQ0FBYSxpQkFBYixFQUFnQyxVQUFDc0MsS0FBRCxFQUFRQyxhQUFSLEVBQWdDO0FBQzVEO0FBQ0E7QUFDQTtBQUFBO0FBQUEsZ0RBQWFuRCxXQUFiLEdBQTJCa0MsWUFBM0IsR0FBMENMLElBQTFDLENBQStDLHdCQUEvQzs7QUFFQSxrQkFBSXFCLEtBQUssR0FBRyxNQUFJLENBQUNFLGdCQUFMLENBQXNCQyxNQUFsQyxFQUEwQztBQUN0QyxvQkFBSW5ELElBQUksR0FBRzNCLFdBQVcsQ0FBQyxNQUFJLENBQUM2RSxnQkFBTCxDQUFzQkYsS0FBdEIsQ0FBRCxDQUF0QjtBQUNBaEQsZ0JBQUFBLElBQUksQ0FBQ29ELE1BQUwsR0FBYyxNQUFJLENBQUNwRCxJQUFuQjtBQUNBQSxnQkFBQUEsSUFBSSxDQUFDa0MsWUFBTDtBQUFBO0FBQUEsNENBQTZCbUIsSUFBN0IsQ0FBa0MsTUFBSSxDQUFDcEQsY0FBTCxDQUFvQkMsSUFBdEQ7QUFDQSxvQkFBSW9ELEdBQUcsR0FBRzlFLEVBQUUsQ0FBQ3lFLGFBQWEsQ0FBQ00sUUFBZCxDQUF1QkMsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEJQLGFBQWEsQ0FBQ00sUUFBZCxDQUF1QkUsQ0FBckQsQ0FBWjtBQUNBekQsZ0JBQUFBLElBQUksQ0FBQzBELFdBQUwsQ0FBaUJKLEdBQWpCO0FBQ0FMLGdCQUFBQSxhQUFhLENBQUNmLFlBQWQ7QUFBQTtBQUFBLHNEQUEyQ3lCLGNBQTNDLENBQTBEM0QsSUFBMUQ7QUFDQUEsZ0JBQUFBLElBQUksQ0FBQ2tDLFlBQUw7QUFBQTtBQUFBLDRDQUE2QjBCLGlCQUE3QixDQUErQ1gsYUFBL0M7QUFDSDtBQUVKLGFBZkQ7QUFrQkEsaUJBQUt2RCxLQUFMLENBQVdrRCxRQUFYLENBQW9CLHdCQUFwQixFQUE4QyxZQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUFBO0FBQUEsZ0RBQWE5QyxXQUFiLEdBQTJCa0MsWUFBM0IsR0FBMENMLElBQTFDLENBQStDLHdCQUEvQztBQUNBO0FBQUE7QUFBQSxnREFBYTdCLFdBQWIsR0FBMkIrRCxhQUEzQixHQUpnRCxDQUtoRDs7QUFDQSxjQUFBLE1BQUksQ0FBQzdELElBQUwsQ0FBVTJCLElBQVYsQ0FBZSxZQUFmLEVBQTZCLE1BQTdCOztBQUNBLGNBQUEsTUFBSSxDQUFDM0IsSUFBTCxDQUFVMkIsSUFBVixDQUFlLGVBQWY7O0FBQ0EsY0FBQSxNQUFJLENBQUNtQyx3QkFBTCxHQUFnQ3JDLElBQWhDLENBQXFDLFlBQU07QUFDdkMsdUJBQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxzQkFBSWxCLEVBQUUsR0FBRyxJQUFJN0IsS0FBSixDQUFVLE1BQUksQ0FBQ3lGLGVBQWYsRUFDSkMsRUFESSxDQUNELENBREMsRUFDRTtBQUFFVCxvQkFBQUEsUUFBUSxFQUFFL0UsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLEVBQUwsRUFBUyxDQUFUO0FBQWQsbUJBREYsRUFFSnlGLElBRkksQ0FFQyxZQUFNO0FBQ1JwQixvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjs7QUFDQSxvQkFBQSxNQUFJLENBQUNpQixlQUFMLENBQXFCRyxPQUFyQjs7QUFDQTlDLG9CQUFBQSxPQUFPO0FBQ1YsbUJBTkksRUFPSlgsS0FQSSxFQUFUO0FBUUgsaUJBVE0sQ0FBUDtBQVVILGVBWEQsRUFXR2dCLElBWEgsQ0FXUSxZQUFNO0FBQ1Ysb0JBQUl0QixFQUFFLEdBQUcsSUFBSTdCLEtBQUosQ0FBVSxNQUFJLENBQUM2RixtQkFBZixDQUFUO0FBQ0FoRSxnQkFBQUEsRUFBRSxDQUFDRyxFQUFILENBQU0sR0FBTixFQUFXO0FBQUU4RCxrQkFBQUEsS0FBSyxFQUFFNUYsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGlCQUFYO0FBQ0EyQixnQkFBQUEsRUFBRSxDQUFDOEQsSUFBSCxDQUFRLFlBQU07QUFDVixrQkFBQSxNQUFJLENBQUNFLG1CQUFMLENBQXlCRCxPQUF6QjtBQUNILGlCQUZEO0FBR0EvRCxnQkFBQUEsRUFBRSxDQUFDTSxLQUFIO0FBQ0EsdUJBQU8sTUFBSSxDQUFDVCxJQUFMLENBQVVrQyxZQUFWO0FBQUE7QUFBQSxrREFBcUNtQyxtQkFBckMsRUFBUDtBQUNILGVBbkJELEVBbUJHNUMsSUFuQkgsQ0FtQlEsWUFBTTtBQUNWO0FBQ0E7QUFDQSx1QkFBTyxNQUFJLENBQUNjLFNBQUwsRUFBUDtBQUNILGVBdkJELEVBd0JJO0FBQ0E7QUFDQTtBQTFCSixlQTJCS2QsSUEzQkwsQ0EyQlUsWUFBTTtBQUNSO0FBQ0EsdUJBQU8sTUFBSSxDQUFDNkMsZUFBTCxFQUFQO0FBQ0gsZUE5QkwsRUE4Qk83QyxJQTlCUCxDQThCWSxZQUFNO0FBQ1YsZ0JBQUEsTUFBSSxDQUFDL0IsS0FBTCxDQUFXdUMsUUFBWCxDQUFvQixLQUFwQjs7QUFDQSxnQkFBQSxNQUFJLENBQUNqQyxJQUFMLENBQVVrQyxZQUFWO0FBQUE7QUFBQSx3REFBd0NPLFNBQXhDLEdBRlUsQ0FHVjs7O0FBQ0E7QUFBQTtBQUFBLGtEQUFhM0MsV0FBYixHQUEyQnlFLE9BQTNCLEdBSlUsQ0FLVjtBQUNBO0FBRUE7QUFDSCxlQXZDTDtBQXdDSCxhQWhERDtBQWtEQSxpQkFBSzdFLEtBQUwsQ0FBV2tELFFBQVgsQ0FBb0IsV0FBcEIsRUFBaUMsWUFBTTtBQUNuQ0MsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQURtQyxDQUVuQzs7QUFDQTtBQUFBO0FBQUEsZ0RBQWFoRCxXQUFiLEdBQTJCa0MsWUFBM0IsR0FBMENMLElBQTFDLENBQStDLHlCQUEvQzs7QUFFQSxjQUFBLE1BQUksQ0FBQzNCLElBQUwsQ0FBVWtDLFlBQVY7QUFBQTtBQUFBLHNEQUF3Q3NDLFFBQXhDOztBQUNBLGNBQUEsTUFBSSxDQUFDeEUsSUFBTCxDQUFVa0MsWUFBVjtBQUFBO0FBQUEsc0RBQXdDdUMsY0FBeEM7O0FBQ0EsY0FBQSxNQUFJLENBQUN6RSxJQUFMLENBQVVrQyxZQUFWO0FBQUE7QUFBQSwwREFBMEN3Qyx1QkFBMUMsR0FQbUMsQ0FPa0M7QUFDckU7OztBQUNBLGNBQUEsTUFBSSxDQUFDL0UsWUFBTCxDQUFrQnVDLFlBQWxCO0FBQUE7QUFBQSx3Q0FBeUN5QyxjQUF6Qzs7QUFDQSxrQkFBSUMsYUFBYSxHQUFHLE1BQUksQ0FBQzVFLElBQUwsQ0FBVWtDLFlBQVY7QUFBQTtBQUFBLHNEQUF3QzJDLGdCQUF4QyxFQUFwQjs7QUFDQSxjQUFBLE1BQUksQ0FBQ0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCO0FBQ0E7QUFBQTtBQUFBLGtEQUFhaEYsV0FBYixHQUEyQmtDLFlBQTNCLEdBQTBDTCxJQUExQyxDQUErQyxtQkFBL0MsRUFBb0VpRCxhQUFwRSxFQUFtRixNQUFJLENBQUMvRSxNQUFMLENBQVkwQixlQUFaLEVBQW5GO0FBQ0gsZUFIRCxFQUdHLEdBSEg7QUFJSCxhQWZELEVBN0VJLENBNkZKO0FBQ0g7Ozs0Q0FFaUI7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sSUFBSUosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFBQTtBQUFBLGdEQUFhdkIsV0FBYixHQUEyQmtDLFlBQTNCLEdBQTBDTCxJQUExQyxDQUErQyxvQkFBL0MsRUFBcUUsWUFBTTtBQUN2RVAsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0gsYUFOTSxDQUFQO0FBT0gsVyxDQUNEO0FBRUE7QUFFQTtBQUVBOzs7O2tEQUV3QjtBQUFBOztBQUNwQixtQkFBTyxJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJLENBQUMxQyxPQUFPLENBQUMsTUFBSSxDQUFDZ0IsWUFBTixDQUFaLEVBQWlDO0FBQzdCLGdCQUFBLE1BQUksQ0FBQ0EsWUFBTCxHQUFvQnRCLFdBQVcsQ0FBQyxNQUFJLENBQUMwRyxjQUFOLENBQS9CO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDcEYsWUFBTCxDQUFrQnlELE1BQWxCLEdBQTJCLE1BQUksQ0FBQ3BELElBQWhDO0FBQ0g7O0FBRUQsa0JBQUlnRixZQUFZLEdBQUcsTUFBSSxDQUFDaEYsSUFBTCxDQUFVa0MsWUFBVjtBQUFBO0FBQUEsK0NBQW5COztBQUNBLGtCQUFJOEMsWUFBSixFQUFrQjtBQUNkLG9CQUFJaEYsSUFBSSxHQUFHZ0YsWUFBWSxDQUFDQyxjQUFiLEdBQThCQyxRQUE5QixDQUF1QyxDQUF2QyxFQUEwQyxDQUExQyxDQUFYO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDdkYsWUFBTCxDQUFrQjRELFFBQWxCLEdBQTZCL0UsRUFBRSxDQUFDd0IsSUFBSSxDQUFDdUQsUUFBTCxDQUFjQyxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCeEQsSUFBSSxDQUFDdUQsUUFBTCxDQUFjRSxDQUFwQyxDQUEvQjs7QUFDQSxnQkFBQSxNQUFJLENBQUM5RCxZQUFMLENBQWtCdUMsWUFBbEI7QUFBQTtBQUFBLDBDQUF5Q2lELGFBQXpDOztBQUNBbkYsZ0JBQUFBLElBQUksQ0FBQzBCLE1BQUwsR0FBYyxLQUFkO0FBQ0Esb0JBQUl2QixFQUFFLEdBQUcsSUFBSTdCLEtBQUosQ0FBVSxNQUFJLENBQUNxQixZQUFmLENBQVQsQ0FMYyxDQU1kOztBQUNBLGdCQUFBLE1BQUksQ0FBQ0EsWUFBTCxDQUFrQitCLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0F2QixnQkFBQUEsRUFBRSxDQUFDOEQsSUFBSCxDQUFRLFlBQU07QUFDVmpFLGtCQUFBQSxJQUFJLENBQUMwQixNQUFMLEdBQWMsSUFBZDtBQUNILGlCQUZEO0FBR0F2QixnQkFBQUEsRUFBRSxDQUFDRyxFQUFILENBQU0sQ0FBTixFQUFTO0FBQUVpRCxrQkFBQUEsUUFBUSxFQUFFL0UsRUFBRSxDQUFDd0IsSUFBSSxDQUFDdUQsUUFBTCxDQUFjQyxDQUFmLEVBQWtCLENBQWxCLEVBQXFCeEQsSUFBSSxDQUFDdUQsUUFBTCxDQUFjRSxDQUFuQztBQUFkLGlCQUFULEVBQWdFO0FBQUUyQixrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUJBQWhFO0FBQ0FqRixnQkFBQUEsRUFBRSxDQUFDOEQsSUFBSCxDQUFRLFlBQU07QUFDVjdDLGtCQUFBQSxPQUFPO0FBQ1YsaUJBRkQ7QUFHQWpCLGdCQUFBQSxFQUFFLENBQUNNLEtBQUg7QUFDSDtBQUNKLGFBeEJNLENBQVA7QUF5Qkg7OztxREFFMEI7QUFBQTs7QUFDdkIsbUJBQU8sSUFBSVUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSWdFLFNBQVMsR0FBRyxNQUFJLENBQUN0QixlQUFMLENBQXFCdUIsY0FBckIsQ0FBb0MsaUJBQXBDLEVBQXVEcEQsWUFBdkQsQ0FBb0V4RCwwQkFBcEUsQ0FBaEI7O0FBQ0Esa0JBQUkyRyxTQUFKLEVBQWU7QUFDWCxvQkFBSUUsV0FBVyxHQUFHRixTQUFTLENBQUNHLFdBQTVCLENBRFcsQ0FFWDs7QUFDQSxvQkFBSUMsU0FBUyxHQUFHSixTQUFTLENBQUN0QyxRQUFWLENBQW1Cd0MsV0FBVyxDQUFDRyxJQUEvQixDQUFoQjtBQUNBRCxnQkFBQUEsU0FBUyxDQUFDRSxXQUFWLEdBQXdCLENBQXhCO0FBQ0Esb0JBQUl4QyxNQUFNLEdBQUdzQyxTQUFTLENBQUN0QyxNQUF2QjtBQUNBa0MsZ0JBQUFBLFNBQVMsQ0FBQ08sSUFBVixDQUFlTCxXQUFXLENBQUNHLElBQTNCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ1osWUFBTCxDQUFrQixZQUFNO0FBQ3BCakMsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQTFCLGtCQUFBQSxPQUFPO0FBQ1YsaUJBSEQsRUFHRytCLE1BSEg7QUFJSCxlQVhELE1BV087QUFDSC9CLGdCQUFBQSxPQUFPO0FBQ1Y7QUFDSixhQWhCTSxDQUFQO0FBaUJIOzs7OENBQ21CeUUsTSxFQUE0QjtBQUM1QyxnQkFBSSxLQUFLbkcsS0FBTCxDQUFXcUQsUUFBWCxPQUEwQixPQUE5QixFQUF1QztBQUNuQyxtQkFBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDMUMsTUFBM0IsRUFBbUMyQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLG9CQUFJQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVDLFFBQXpCOztBQUNBLG9CQUFJQSxRQUFRLENBQUMvRixJQUFULENBQWNnRyxJQUFkLEtBQXVCLEtBQUtqQyxlQUFMLENBQXFCaUMsSUFBaEQsRUFBc0Q7QUFDbEQsdUJBQUt0RyxLQUFMLENBQVd1QyxRQUFYLENBQW9CLHdCQUFwQjtBQUNIO0FBQ0osZUFOa0MsQ0FPbkM7QUFDQTtBQUVBOztBQUNILGFBWEQsTUFXTyxJQUFJLEtBQUt2QyxLQUFMLENBQVdxRCxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ3hDLG1CQUFLL0MsSUFBTCxDQUFVMkIsSUFBVixDQUFlLG9CQUFmLEVBQXFDbEQsYUFBYSxDQUFDaUUsUUFBZCxDQUF1QnVELGNBQTVEO0FBRUgsYUFmMkMsQ0FnQjVDOztBQUNIOzs7aUNBQ01DLEUsRUFBWSxDQUVsQjs7OzBDQUMwQjtBQUN2QixtQkFBTyxLQUFLakcsY0FBWjtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7OztnREFDc0IyQixTLEVBQW1CdUUsUyxFQUFpQjtBQUN0RCxnQkFBSW5HLElBQUksR0FBRzNCLFdBQVcsQ0FBQyxLQUFLK0gsZ0JBQU4sQ0FBdEI7QUFDQXBHLFlBQUFBLElBQUksQ0FBQ29ELE1BQUwsR0FBYyxLQUFLcEQsSUFBbkI7QUFDQUEsWUFBQUEsSUFBSSxDQUFDa0MsWUFBTDtBQUFBO0FBQUEsd0RBQXFDbUUsWUFBckMsQ0FBa0R6RSxTQUFsRCxFQUE2RCxJQUE3RDtBQUNBNUIsWUFBQUEsSUFBSSxDQUFDdUQsUUFBTCxHQUFnQjRDLFNBQWhCO0FBQ0g7OzsrQ0FFb0I7QUFDakI7QUFFQTtBQUNBO0FBQ0EsaUJBQUtuRyxJQUFMLENBQVUyQixJQUFWLENBQWUsdUJBQWY7QUFDSDs7O2tDQUVPaUQsYSxFQUErQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBLDhDQUFhOUUsV0FBYixHQUEyQmtDLFlBQTNCLEdBQTBDTCxJQUExQyxDQUErQyxjQUEvQyxFQU5tQyxDQU00Qjs7QUFDL0Q7QUFBQTtBQUFBLDhDQUFhN0IsV0FBYixHQUEyQmtDLFlBQTNCLEdBQTBDTCxJQUExQyxDQUErQyx5QkFBL0M7O0FBQ0EsZ0JBQUksS0FBS2pDLEtBQUwsQ0FBV3FELFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakMsbUJBQUtyRCxLQUFMLENBQVd1QyxRQUFYLENBQW9CLGtCQUFwQixFQURpQyxDQUNRO0FBQ3pDOztBQUNBO0FBQUE7QUFBQSxnREFBYW5DLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0Msa0JBQS9DLEVBQW1FaUQsYUFBbkU7QUFDSDtBQUVKOzs7MkNBQ2dCO0FBQUE7O0FBQ2I7QUFDQTtBQUNBO0FBQUE7QUFBQSw4Q0FBYTlFLFdBQWIsR0FBMkJlLGNBQTNCOztBQUVBLGdCQUFJO0FBQUE7QUFBQSw4Q0FBYWYsV0FBYixHQUEyQmdDLGFBQTNCLEdBQTJDd0UsZUFBM0MsS0FBK0QsQ0FBbkUsRUFBc0U7QUFDbEU7QUFBQTtBQUFBLGdEQUFheEcsV0FBYixHQUEyQmtDLFlBQTNCLEdBQTBDTCxJQUExQyxDQUErQywwQkFBL0MsRUFBMkUsWUFBTTtBQUM3RSxnQkFBQSxNQUFJLENBQUNZLFNBQUwsR0FBaUJkLElBQWpCLENBQXNCLFlBQU07QUFDeEI7QUFBQTtBQUFBLG9EQUFhM0IsV0FBYixHQUEyQmdDLGFBQTNCLEdBQTJDQyxvQkFBM0M7QUFDQTtBQUFBO0FBQUEsb0RBQWFqQyxXQUFiLEdBQTJCa0MsWUFBM0IsR0FBMENMLElBQTFDLENBQStDLHVCQUEvQzs7QUFDQSxrQkFBQSxNQUFJLENBQUMzQixJQUFMLENBQVUyQixJQUFWLENBQWUsbUJBQWYsRUFBb0M7QUFBQTtBQUFBLG9EQUFhN0IsV0FBYixHQUEyQmdDLGFBQTNCLEdBQTJDVSxtQkFBM0MsRUFBcEM7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDOUMsS0FBTCxDQUFXdUMsUUFBWCxDQUFvQixLQUFwQjs7QUFDQSxrQkFBQSxNQUFJLENBQUNqQyxJQUFMLENBQVVrQyxZQUFWO0FBQUE7QUFBQSwwREFBd0NPLFNBQXhDO0FBQ0gsaUJBTkQ7QUFPSCxlQVJEO0FBU0gsYUFWRCxNQVVPO0FBQ0hJLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxtQkFBS1AsU0FBTCxHQUFpQmQsSUFBakIsQ0FBc0IsWUFBTTtBQUN4QjtBQUFBO0FBQUEsa0RBQWEzQixXQUFiLEdBQTJCZ0MsYUFBM0IsR0FBMkNDLG9CQUEzQztBQUNBO0FBQUE7QUFBQSxrREFBYWpDLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0MsdUJBQS9DOztBQUNBLGdCQUFBLE1BQUksQ0FBQzNCLElBQUwsQ0FBVTJCLElBQVYsQ0FBZSxtQkFBZixFQUFvQztBQUFBO0FBQUEsa0RBQWE3QixXQUFiLEdBQTJCZ0MsYUFBM0IsR0FBMkNVLG1CQUEzQyxFQUFwQzs7QUFDQSxnQkFBQSxNQUFJLENBQUM5QyxLQUFMLENBQVd1QyxRQUFYLENBQW9CLEtBQXBCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ2pDLElBQUwsQ0FBVWtDLFlBQVY7QUFBQTtBQUFBLHdEQUF3Q08sU0FBeEM7QUFDSCxlQU5EO0FBT0gsYUF4QlksQ0EyQmI7QUFDQTs7QUFDSDs7O3NDQUNXO0FBQUE7O0FBQ1IsbUJBQU8sSUFBSXRCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUkxQyxPQUFPLENBQUMsTUFBSSxDQUFDZ0IsWUFBTixDQUFYLEVBQWdDO0FBQzVCLGdCQUFBLE1BQUksQ0FBQ0EsWUFBTCxDQUFrQitCLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0gsZUFIbUMsQ0FJcEM7OztBQUNBLGNBQUEsTUFBSSxDQUFDMUIsSUFBTCxDQUFVMkIsSUFBVixDQUFlLG1CQUFmOztBQUNBLGNBQUEsTUFBSSxDQUFDM0IsSUFBTCxDQUFVMkIsSUFBVixDQUFlLDhCQUFmOztBQUNBLGNBQUEsTUFBSSxDQUFDM0IsSUFBTCxDQUFVMkIsSUFBVixDQUFlLG1CQUFmLEVBUG9DLENBT0M7OztBQUNyQyxjQUFBLE1BQUksQ0FBQzNCLElBQUwsQ0FBVTJCLElBQVYsQ0FBZSxrQkFBZixFQVJvQyxDQVFBO0FBQ3BDOzs7QUFFQSxjQUFBLE1BQUksQ0FBQzNCLElBQUwsQ0FBVWtDLFlBQVY7QUFBQTtBQUFBLDBEQUEwQ3FFLDJCQUExQyxHQUF3RTlFLElBQXhFLENBQTZFLFlBQU07QUFDL0UsdUJBQU8sTUFBSSxDQUFDSSxxQkFBTCxFQUFQO0FBQ0gsZUFGRCxFQUVHSixJQUZILENBRVEsWUFBTTtBQUNWLHVCQUFPLE1BQUksQ0FBQytFLHdCQUFMLEVBQVA7QUFDSCxlQUpELEVBSUcvRSxJQUpILENBSVEsWUFBTTtBQUNWTCxnQkFBQUEsT0FBTztBQUNWLGVBTkQ7QUFPSCxhQWxCTSxDQUFQO0FBb0JIOzs7cURBQzBCO0FBQ3ZCLG1CQUFPLElBQUlELE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQTtBQUFBO0FBQUEsZ0RBQWF2QixXQUFiLEdBQTJCa0MsWUFBM0IsR0FBMENMLElBQTFDLENBQStDLDhCQUEvQyxFQUErRSxZQUFNO0FBQ2pGLG9CQUFJUCxPQUFKLEVBQWE7QUFDVEEsa0JBQUFBLE9BQU87QUFDVjtBQUNKLGVBSkQ7QUFLSCxhQVBNLENBQVA7QUFRSDs7O3dDQUNhcUYsRyxFQUFhO0FBQ3ZCNUQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QjJELEdBQXZCLEVBRHVCLENBRXZCOztBQUNBLGdCQUFJLEtBQUsvRyxLQUFMLENBQVdxRCxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ2pDLGtCQUFJMkQsb0JBQW9CLEdBQUc7QUFBQTtBQUFBLGdEQUFhNUcsV0FBYixHQUEyQmdDLGFBQTNCLEdBQTJDNkUsdUJBQTNDLEVBQTNCOztBQUNBLGtCQUFJRCxvQkFBb0IsR0FBRyxDQUEzQixFQUE4QjtBQUMxQjtBQUFBO0FBQUEsa0RBQWE1RyxXQUFiLEdBQTJCZ0MsYUFBM0IsR0FBMkM4RSxnQkFBM0MsQ0FBNEQsQ0FBQyxDQUE3RDtBQUNBO0FBQUE7QUFBQSxrREFBYTlHLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0MsdUJBQS9DOztBQUNBLG9CQUFJO0FBQUE7QUFBQSxrREFBYTdCLFdBQWIsR0FBMkJnQyxhQUEzQixHQUEyQzZFLHVCQUEzQyxPQUF5RSxDQUE3RSxFQUFnRjtBQUM1RTlELGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsdUJBQUtwRCxLQUFMLENBQVd1QyxRQUFYLENBQW9CLFdBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBRUo7Ozs0Q0FDaUI7QUFDZDtBQUFBO0FBQUEsOENBQWFuQyxXQUFiLEdBQTJCa0MsWUFBM0IsR0FBMENMLElBQTFDLENBQStDLHVCQUEvQztBQUNILFcsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztpREFDdUI7QUFDbkI7QUFDQTtBQUNBO0FBQUE7QUFBQSw4Q0FBYTdCLFdBQWIsR0FBMkJrQyxZQUEzQixHQUEwQ0wsSUFBMUMsQ0FBK0MsMkJBQS9DLEVBQTRFO0FBQUE7QUFBQSw4Q0FBYTdCLFdBQWIsR0FBMkJnQyxhQUEzQixHQUEyQytFLGlCQUF2SDtBQUNIOzs7O1FBbGUrQjNJLFMsV0FFbEI0SSxJLEdBQWUsQ0FBQyxDLFVBaUJoQkMsaUIsR0FBNEIsQzs7Ozs7aUJBZEwsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdELEU7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFjVixJOzs7Ozs7O2lCQUVjLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFPRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBUd2VlbiwgSnNvbkFzc2V0LCBWZWMzLCB2MywgUGh5c2ljc1N5c3RlbSwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBmaW5kLCBQaHlzaWNzUmF5UmVzdWx0LCBWZWMyLCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZUN0bCB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2VDdGwnO1xyXG4vLyBpbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSAnLi9EYXRhL1BsYXllckRhdGEnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSAnLi9Ib21lL0hvbWVJY29uJztcclxuaW1wb3J0IHsgQWRzQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbC9BZHNDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZUluc3RhbmNlIH0gZnJvbSAnLi9HYW1lSW5zdGFuY2UnO1xyXG4vLyBpbXBvcnQgeyBXZWFwb25JbmZvQ3RsIH0gZnJvbSAnLi9XZWFwb25JbmZvQ3RsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+mHjeWKm+WKoOmAn+W6plxyXG4gICAgcHVibGljIHN0YXRpYyBhY2NZOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlcnNQcmVmYWJMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudEFkZEVuZW15VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDQ7XHJcbiAgICAvLyBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBlbmVteUJlTG9ja01heE51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvLyBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgdWlDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcGxhdGU6IE5vZGUgPSBudWxsOyAvL+aYn+eQg1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVTdGFydEJ1dHRvbkJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGhvbWVJY29uUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob21lSWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHB1YmxpYyBwbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb2xkQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaG9tZUljb25UdzogVHdlZW4gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGFkc0N0bDogQWRzQ29udHJvbGxlciA9IG5ldyBBZHNDb250cm9sbGVyKCk7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YSA9IG5ldyBQbGF5ZXJEYXRhKCk7XHJcbiAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuc2V0R2FtZUN0bE5vZGUodGhpcy5ub2RlLCB0aGlzLmdhbWVDb25maWdKc29uLmpzb24pO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnBsYXRlKTtcclxuICAgICAgICB0dy5yZXBlYXRGb3JldmVyKG5ldyBUd2Vlbih0aGlzLnBsYXRlKS50bygyMCwgeyBldWxlckFuZ2xlczogdjMoMCwgMzYwLCAwKSB9KS5zZXQoeyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCkgfSkpXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctZ2FtZS13aW4tbGF5ZXJcIiwgdGhpcy5nYW1lV2luLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1uZXh0LWxldmVsLWJ1dHRvblwiLCB0aGlzLmVudGVyTmV4dExldmVsLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImVudGVyLW5leHQtbGV2ZWxcIiwgdGhpcy5lbnRlck5leHRMZXZlbC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3JldHJ5LWdhbWUnLCB0aGlzLnBsYXllckNsaWNrUmV0cnlCdXR0b24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdwbGF5ZXItY2xpY2stc2F2ZS1saWZlLWJ1dHRvbicsIHRoaXMucGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJlbmVteS10by1hdHRhY2tlZFwiLCB0aGlzLmVuZW15QXR0YWNrZWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1hZGQtZ29sZC1hbmltLWVmZmVjdFwiLCB0aGlzLnNob3dBZGRHb2xkQW5pbUVmZmVjdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oW3YzKDAsIDAsIDApLCB2MygxMCwgMzAsIDEwKSwgdjMoMjAsIDMsIDApLHYzKDIwLCAxMDAsIDMwKV0pO1xyXG4gICAgICAgIC8vIGxldCBwb2ludExpc3Q6IFZlYzNbXSA9IGJlemllci5nZXRQb2ludExpc3QoMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9pbnRcIiwgcG9pbnRMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy50ZXN0Tm9kZSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcudG8oMC4yLCB7IHBvc2l0aW9uOiBwb2ludExpc3RbaV0gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRlc3ROb2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMClcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oY2IpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmlkZW9Jc1JlYWR5ID0gdGhpcy5hZHNDdGwuZ2V0VmlkZW9Jc1JlYWR5KCk7XHJcbiAgICAgICAgICAgIC8v5qC55o2u6KeG6aKR5bm/5ZGK5piv5ZCm5YeG5aSH5aW95LqG77yM6L+b6KGM55yL5bm/5ZGK5aSN5rS777yM6L+Y5piv5YiG5Lqr5aSN5rS7XHJcbiAgICAgICAgICAgIGlmICh2aWRlb0lzUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRzQ3RsLndhdGNoVmlkZW9BZHMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChnb2xkQ291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudChnb2xkQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLnJlY292ZXJSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkc0N0bC5zaGFyZVRvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGdvbGRDb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5yZWNvdmVyUmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuY29udGludWVHYW1lKCk7IC8v57un57ut5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NoYXJlQnV0dG9uKHdpblBvd2VyQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMucGxheWVyRGF0YS5jdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICAvLyAgICAgLy/liqDlgI3ojrflvpflvZPliY3otaLliLDnmoTog73ph4/lgLxcclxuICAgICAgICAvLyAgICAgdGhpcy5hZHNDdGwuc2hhZGVyVG8oKS5cclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJEYXRhLmFkZFBvd2VyQ291bnQod2luUG93ZXJDb3VudCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkc0N0bC5zaGFyZVRvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkUG93ZXJDb3VudCh3aW5Qb3dlckNvdW50KTtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmFkZFBvd2VyQ291bnQod2luUG93ZXJDb3VudCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1JldHJ5QnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqGIOmHjeivleS4gOasoeeahOaMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLm5ld0dhbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBzdGF0ZSBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFdlYXBvbkluZm9DdGwpLmluaXRXZWFwb25EYXRhKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJ1aWxkLW9uZS10b3dlclwiLCAoaW5kZXgsIHRvd2VyQmFzZU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/lu7rpgKDkuIDluqfloZRcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcImNvbXBsZXRlLWN1cnJlbnQtZ3VpZGVcIik7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJjb21wbGV0ZS1jdXJyZW50LWd1aWRlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy50b3dlcnNQcmVmYWJMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2Vyc1ByZWZhYkxpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZ0pzb24uanNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjModG93ZXJCYXNlTm9kZS5wb3NpdGlvbi54LCAwLCB0b3dlckJhc2VOb2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdG93ZXJCYXNlTm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnNldFRhcmdldFRvd2VyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zZXRUb3dlckJ1aWxkQmFzZSh0b3dlckJhc2VOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnjqnlrrbngrnkuK3kuoblvIDlp4vmuLjmiI/mjInpkq5cIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJjb21wbGV0ZS1jdXJyZW50LWd1aWRlXCIpO1xyXG4gICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwiY29tcGxldGUtY3VycmVudC1ndWlkZVwiKTtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuc2hvd0Jhbm5lckFkcygpO1xyXG4gICAgICAgICAgICAvL+e7mXVp5o6n5Yi25Zmo5Y+R6YCB77yM5a6M5oiQ5LqG5b2T5YmN55qE5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIuaMiemSrumfs+aViFwiKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInBsYXktYmctbXVzaWNcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnN0YXJ0R2FtZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IHYzKDAsIC0xMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2hvd0dyb3VuZEVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8v5bGV56S65aGU55qE5Z+65bqn5Ye6546w55qE5Yqo55S7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93VUlFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5uZXdHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkubmV3R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZ2FtZS1sb3NzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXmuLjmiI/lpLHotKXnmoTnirbmgIFcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmVtaXQoJ2Nsb3NlLXdlYXBvbi1pbmZvLWxheWVyJylcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcImNsb3NlLXdlYXBvbi1pbmZvLWxheWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdlbWVMb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5mcm96ZW5BbGxFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5mcm96ZW5BbGxUb3dlckJ1aWxkQmFzZSgpOyAvL+emgemUouaJgOacieWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhvbWVJY29uVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyb3plbkhvbWVJY29uKCk7XHJcbiAgICAgICAgICAgIGxldCBkZWFkRW5lbXlEYXRhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdldERlYWRFbmVteURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YSlcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWdhbWUtbG9zcy11aVwiLCBkZWFkRW5lbXlEYXRhLCB0aGlzLmFkc0N0bC5nZXRWaWRlb0lzUmVhZHkoKSk7XHJcbiAgICAgICAgICAgIH0sIDAuNik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmICh1aUN0bCkge1xyXG4gICAgICAgIC8vICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LXVpLWVudGVyLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyZWVIb21lSWNvbm4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICAvLyAgICAgcmV0dXJuIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICAvLyB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVXaW4oZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICAvL+a4uOaIj+iDnOWIqe+8jOi/m+WFpeS4i+S4gOWFs1xyXG4gICAgICAgIC8v6aaW5YWI5bGV56S66IOc5Yip5aSx6LSl6aG16Z2iXHJcbiAgICAgICAgLy8gdGhpc1xyXG4gICAgICAgIC8v5ri45oiP6IOc5YipXHJcbiAgICAgICAgLy8gdGhpcy51aWNcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwiY2xvc2UtYWxsLXVpXCIpOy8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNob3ctZ2FtZS1yZXN1bHRcIik7IC8v6L+b5YWl5pi+56S65ri45oiP57uT5p6c55qE55WM6Z2iXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWdhbWUtd2luLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAvLyBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5lbnRlck5leHRMZXZlbCgpO1xyXG5cclxuICAgICAgICBpZiAoR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bSA9PT0gMCkge1xyXG4gICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwic2hvdy1nYW1lLWVuZC1pbmZvLWxheWVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLnJlY292ZXJSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5yZWNvdmVyUmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+aKiuaJgOacieeahHRvd2Vy6YO96ZSA5q+B5o6J77yMXHJcbiAgICAgICAgLy/miorlt6blj7PnmoR0b3dlciDnmoTln7rluqfliKDmjolcclxuICAgIH1cclxuICAgIGVudGVyR2FtZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwicmUtaW5pdC11aVwiKTsgLy/ph43mlrDliLfmlrBVSVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyLWJ1aWxkLWJhc2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtZW5lbXlcIik7IC8v6ZSA5q+B5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiaW5pdC1sZXZlbC1sYWJlbFwiKTsgLy/liJ3lp4vljJblvZPliY3nmoTlhbPljaFsYWJlbFxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5ub2RlLmVtaXQoJ2luaXQtdXBkYXRlLWxldmVsJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dDdXJyZW50TGV2ZWxJY29uQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBzaG93Q3VycmVudExldmVsSWNvbkFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy/mmL7npLrlvZPliY3mmK/nrKzkuIDlhbPnmoRpY29uXHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJzaG93LWN1cnJlbnQtbGV2ZWwtaWNvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbmVteUF0dGFja2VkKG51bTogTnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmlYzkurrlj5HliqjkuobmlLvlh7tcIiwgbnVtKVxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5hZGRcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFJlZEhlYXJ0Q291bnQgPSBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWRIZWFydENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmFkZFJlZEhlYXJ0Q291bnQoLTEpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVmZXJSZWRIZWFyZFVJKCkge1xyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFVJQ3RsTm9kZSgpLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICB9XHJcbiAgICAvLyBhY3RpdmVFbmVteVN1Y2Nlc3MoZW5lbXlUeXBlOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZSBlbmVteSBzdWNjY2Vzc1wiLCBlbmVteVR5cGUpO1xyXG4gICAgLy8gICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJcIilcclxuICAgIC8vICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIGVuZW15VHlwZSk7XHJcbiAgICAvLyAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0VUlDdGxOb2RlKCkuZW1pdChcInJlZmVyLWVuZW15LWluZm8tY2VsbFwiLCBlbmVteVR5cGUpO1xyXG4gICAgLy8gfVxyXG4gICAgcmVmZXJQb3dlckNvdW50TGFiZWwoKSB7XHJcbiAgICAgICAgLy/liLfmlrDlvZPliY3nmoQg6IO96YeP5YC8XHJcbiAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLWN1cnJlbnQtcG93ZXItbGFiZWxcIiwgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRQb3dlckNvdW50KTtcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRVSUN0bE5vZGUoKS5lbWl0KFwicmVmZXItY3VycmVudC1wb3dlci1sYWJlbFwiLCBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJEYXRhKCkuY3VycmVudFBvd2VyQ291bnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=