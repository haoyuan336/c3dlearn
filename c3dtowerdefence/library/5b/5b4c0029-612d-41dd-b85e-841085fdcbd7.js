System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js", "./Home/HomeIcon.js", "./util/AdsController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, isValid, State, TowerBuildBase, EnemyController, GroundMapCtl, TowerBuildBaseCtl, PlayData, TowerBase, WinGoldAnimEffect, HomeIcon, AdsController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, GameController;

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

  function _reportPossibleCrUseOfAdsController(extras) {
    _reporterNs.report("AdsController", "./util/AdsController", _context.meta, extras);
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
    }, function (_utilAdsControllerJs) {
      AdsController = _utilAdsControllerJs.AdsController;
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
          _this.playerData = null;

          _initializerDefineProperty(_this, "goldAnim3dPrefab", _descriptor9, _assertThisInitialized(_this));

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
              var videoIsReady = _this2.adsCtl.getVideoIsReady(); //根据视频广告是否准备好了，进行看广告复活，还是分享复活


              if (videoIsReady) {
                _this2.adsCtl.watchVideoAds().then(function () {
                  resolve();

                  if (isValid(_this2.homeIconNode)) {
                    _this2.homeIconNode.active = false;
                  }

                  _this2.node.emit("destroy-all-enemy", function (goldCount) {
                    // this.playerData.addGoldCount(goldCount);
                    _this2.showHomeIconEnterAnim().then(function () {
                      _this2.playerData.recoverRedHeartCount();

                      _this2.uiController.emit("refer-red-heart-label"); // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());


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

                  if (isValid(_this2.homeIconNode)) {
                    _this2.homeIconNode.active = false;
                  }

                  _this2.node.emit("destroy-all-enemy", function (goldCount) {
                    // this.playerData.addGoldCount(goldCount);
                    _this2.showHomeIconEnterAnim().then(function () {
                      _this2.playerData.recoverRedHeartCount();

                      _this2.uiController.emit("refer-red-heart-label"); // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());


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
                _this3.playerData.addPowerCount(winPowerCount);

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
            this.playerData.newGame();
            this.enterGame().then(function () {
              _this4.uiController.emit("refer-red-heart-label");

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
              console.log("enter state ", _this5.state.getState()); // this.uiController.getComponent(WeaponInfoCtl).initWeaponData();
            });
            this.state.setState("ready");
            this.node.on("build-one-tower", function (index, towerBaseNode) {
              //建造一座塔
              _this5.uiController.emit("complete-current-guide");

              if (index < _this5.towersPrefabList.length) {
                var node = instantiate(_this5.towersPrefabList[index]);
                node.parent = _this5.node;
                node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).init(_this5.gameConfigJson.json, _this5);
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
              _this5.uiController.emit("complete-current-guide"); //给ui控制器发送，完成了当前的引导操作


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
                }), EnemyController) : EnemyController).startGame();

                _this5.playerData.newGame();

                _this5.node.emit('update-gold-label', _this5.playerData.getCurrentGoldCount()); // this.node.getComponent(GroundMapCtl).startGame();

              });
            });
            this.state.addState("game-loss", function () {
              console.log("进入游戏失败的状态");

              _this5.uiController.emit('close-weapon-info-layer');

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
                _this5.uiController.emit("show-game-loss-ui", deadEnemyData, _this5.adsCtl.getVideoIsReady());
              }, 0.6);
            }); // this.node.on("")
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            var _this6 = this;

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
              _this6.uiController.emit("show-ui-enter-anim", function () {
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
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              if (!isValid(_this7.homeIconNode)) {
                _this7.homeIconNode = instantiate(_this7.homeIconPrefab);
                _this7.homeIconNode.parent = _this7.node;
              }

              var groundMapCtl = _this7.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl);

              if (groundMapCtl) {
                var node = groundMapCtl.getMapNodeList().getValue(5, 5);
                _this7.homeIconNode.position = v3(node.position.x, 20, node.position.z);

                _this7.homeIconNode.getComponent(_crd && HomeIcon === void 0 ? (_reportPossibleCrUseOfHomeIcon({
                  error: Error()
                }), HomeIcon) : HomeIcon).freeHomeIconn();

                node.active = false;
                var tw = new Tween(_this7.homeIconNode); // this.homeIconTw = tw;

                _this7.homeIconNode.active = true;
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
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              var skeleAnim = _this8.startGameButton.getChildByName("StartGameButton").getComponent(SkeletalAnimationComponent);

              if (skeleAnim) {
                var defaultAnim = skeleAnim.defaultClip; // defaultAnim

                var animState = skeleAnim.getState(defaultAnim.name);
                animState.repeatCount = 1;
                var length = animState.length;
                skeleAnim.play(defaultAnim.name);

                _this8.scheduleOnce(function () {
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
          key: "gameWin",
          value: function gameWin(deadEnemyData) {
            //游戏胜利，进入下一关
            //首先展示胜利失败页面
            // this
            //游戏胜利
            // this.uic
            this.uiController.emit("close-all-ui"); //重新刷新UI

            this.uiController.emit('close-weapon-info-layer');

            if (this.state.getState() === 'run') {
              this.state.setState("show-game-result"); //进入显示游戏结果的界面
              // this.uiController.showGameWinUI(deadEnemyData);

              this.uiController.emit("show-game-win-ui", deadEnemyData);
            }
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            var _this9 = this;

            this.playerData.enterNextLevel();

            if (this.playerData.currentLevelNum === 0) {
              this.uiController.emit("show-game-end-info-layer", function () {
                _this9.enterGame().then(function () {
                  _this9.playerData.recoverRedHeartCount();

                  _this9.uiController.emit("refer-red-heart-label");

                  _this9.node.emit('update-gold-label', _this9.playerData.getCurrentGoldCount());

                  _this9.state.setState("run");

                  _this9.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                    error: Error()
                  }), EnemyController) : EnemyController).startGame();
                });
              });
            } else {
              console.log("进入下一关");
              this.enterGame().then(function () {
                _this9.playerData.recoverRedHeartCount();

                _this9.uiController.emit("refer-red-heart-label");

                _this9.node.emit('update-gold-label', _this9.playerData.getCurrentGoldCount());

                _this9.state.setState("run");

                _this9.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).startGame();
              });
            } //把所有的tower都销毁掉，
            //把左右的tower 的基座删掉

          }
        }, {
          key: "enterGame",
          value: function enterGame() {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              if (isValid(_this10.homeIconNode)) {
                _this10.homeIconNode.active = false;
              } // this.node.emit("re-init-ui"); //重新刷新UI


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
                return _this10.showCurrentLevelIconAnim();
              }).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "showCurrentLevelIconAnim",
          value: function showCurrentLevelIconAnim() {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              //显示当前是第一关的icon
              _this11.uiController.emit("show-current-level-icon-anim", function () {
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
              var currentRedHeartCount = this.playerData.getCurrentRedHeartCount();

              if (currentRedHeartCount > 0) {
                this.playerData.addRedHeartCount(-1);

                if (this.playerData.getCurrentRedHeartCount() === 0) {
                  console.log("游戏结束");
                  this.state.setState("game-loss");
                }
              }
            }
          }
        }, {
          key: "referRedHeardUI",
          value: function referRedHeardUI() {
            this.uiController.emit("refer-red-heart-label");
          }
        }, {
          key: "activeEnemySuccess",
          value: function activeEnemySuccess(enemyType) {
            console.log("active enemy succcess", enemyType); //
            // this.node.emit("")

            this.uiController.emit("refer-enemy-info-cell", enemyType);
          }
        }, {
          key: "referPowerCountLabel",
          value: function referPowerCountLabel() {
            //刷新当前的 能量值
            this.uiController.emit("refer-current-power-label", this.playerData.currentPowerCount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJBZHNDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUNvbnRyb2xsZXIiLCJ0eXBlIiwic3RhdGUiLCJob21lSWNvbk5vZGUiLCJwbGF5ZXJEYXRhIiwiaG9tZUljb25UdyIsImFkc0N0bCIsInR3IiwicGxhdGUiLCJyZXBlYXRGb3JldmVyIiwidG8iLCJldWxlckFuZ2xlcyIsInNldCIsInN0YXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2aWRlb0lzUmVhZHkiLCJnZXRWaWRlb0lzUmVhZHkiLCJ3YXRjaFZpZGVvQWRzIiwidGhlbiIsImFjdGl2ZSIsIm5vZGUiLCJlbWl0IiwiZ29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwicmVjb3ZlclJlZEhlYXJ0Q291bnQiLCJ1aUNvbnRyb2xsZXIiLCJzZXRTdGF0ZSIsImdldENvbXBvbmVudCIsImNvbnRpbnVlR2FtZSIsInNoYXJlVG8iLCJ3aW5Qb3dlckNvdW50IiwiYWRkUG93ZXJDb3VudCIsIm5ld0dhbWUiLCJlbnRlckdhbWUiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic3RhcnRHYW1lIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VUlFbnRlckFuaW0iLCJnZW1lTG9zZSIsImZyb3plbkFsbEVuZW15IiwiZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UiLCJmcm96ZW5Ib21lSWNvbiIsImRlYWRFbmVteURhdGEiLCJnZXREZWFkRW5lbXlEYXRhIiwic2NoZWR1bGVPbmNlIiwiaG9tZUljb25QcmVmYWIiLCJncm91bmRNYXBDdGwiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwiZnJlZUhvbWVJY29ubiIsImVhc2luZyIsInNrZWxlQW5pbSIsImdldENoaWxkQnlOYW1lIiwiZGVmYXVsdEFuaW0iLCJkZWZhdWx0Q2xpcCIsImFuaW1TdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJyZXN1bHQiLCJpIiwiY29sbGlkZXIiLCJ1dWlkIiwicmF5Y2FzdFJlc3VsdHMiLCJkdCIsImN1cnJlbnRMZXZlbE51bSIsInRhcmdldFBvcyIsImdvbGRBbmltM2RQcmVmYWIiLCJzZXRHb2xkQ291bnQiLCJlbnRlck5leHRMZXZlbCIsInNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSIsInNob3dDdXJyZW50TGV2ZWxJY29uQW5pbSIsIm51bSIsImN1cnJlbnRSZWRIZWFydENvdW50IiwiZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQiLCJhZGRSZWRIZWFydENvdW50IiwiZW5lbXlUeXBlIiwiY3VycmVudFBvd2VyQ291bnQiLCJhY2NZIiwiZW5lbXlCZUxvY2tNYXhOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGEsT0FBQUEsYTtBQUFrQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBMERDLE1BQUFBLE8sT0FBQUEsTzs7OztBQUMxS0MsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxtQ0FBQUEsYzs7QUFDY0MsTUFBQUEsZSxzQkFBQUEsZTs7QUFDZEMsTUFBQUEsWSxtQkFBQUEsWTs7QUFFQUMsTUFBQUEsaUIsd0JBQUFBLGlCOztBQUNBQyxNQUFBQSxRLHFCQUFBQSxROztBQUVBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUVBQyxNQUFBQSxpQiw4QkFBQUEsaUI7O0FBQ0FDLE1BQUFBLFEsbUJBQUFBLFE7O0FBQ0FDLE1BQUFBLGEsd0JBQUFBLGE7Ozs7OztBQUNUO0FBQ1FDLE1BQUFBLE8sR0FBc0JyQixVLENBQXRCcUIsTztBQUFTQyxNQUFBQSxRLEdBQWF0QixVLENBQWJzQixROztnQ0FHSkMsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQyxVQUtIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFdEI7QUFBUixPQUFELEMsVUFHUm9CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVsQjtBQUFSLE9BQUQsQyxV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QkFXSCxJOzs7Ozs7O2lCQUdQLEk7Ozs7Ozs7aUJBRWMsSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQU9FLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFR3ZWVuLCBKc29uQXNzZXQsIFZlYzMsIHYzLCBQaHlzaWNzU3lzdGVtLCBDb2xsaWRlckNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGZpbmQsIFBoeXNpY3NSYXlSZXN1bHQsIFZlYzIsIGlzVmFsaWQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZSB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2UvVG93ZXJCdWlsZEJhc2UnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmosIEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlQ3RsIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZUN0bCc7XHJcbmltcG9ydCB7IFBsYXlEYXRhIH0gZnJvbSAnLi9EYXRhL1BsYXllckRhdGEnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSAnLi9Ib21lL0hvbWVJY29uJztcclxuaW1wb3J0IHsgQWRzQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbC9BZHNDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgV2VhcG9uSW5mb0N0bCB9IGZyb20gJy4vV2VhcG9uSW5mb0N0bCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy/ph43lipvliqDpgJ/luqZcclxuICAgIHB1YmxpYyBzdGF0aWMgYWNjWTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJzUHJlZmFiTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0R2FtZUJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSA0O1xyXG4gICAgLy8gcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXlCZUxvY2tNYXhOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRMZXZlbE51bTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVpQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHBsYXRlOiBOb2RlID0gbnVsbDsgLy/mmJ/nkINcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lU3RhcnRCdXR0b25CYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBob21lSWNvblByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaG9tZUljb25Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyRGF0YTogUGxheURhdGEgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGdvbGRBbmltM2RQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBob21lSWNvblR3OiBUd2VlbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWRzQ3RsOiBBZHNDb250cm9sbGVyID0gbmV3IEFkc0NvbnRyb2xsZXIoKTtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyB0ZXN0Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhID0gbmV3IFBsYXlEYXRhKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5wbGF0ZSk7XHJcbiAgICAgICAgdHcucmVwZWF0Rm9yZXZlcihuZXcgVHdlZW4odGhpcy5wbGF0ZSkudG8oMjAsIHsgZXVsZXJBbmdsZXM6IHYzKDAsIDM2MCwgMCkgfSkuc2V0KHsgZXVsZXJBbmdsZXM6IHYzKDAsIDAsIDApIH0pKVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFt2MygwLCAwLCAwKSwgdjMoMTAsIDMwLCAxMCksIHYzKDIwLCAzLCAwKSx2MygyMCwgMTAwLCAzMCldKTtcclxuICAgICAgICAvLyBsZXQgcG9pbnRMaXN0OiBWZWMzW10gPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50XCIsIHBvaW50TGlzdCk7XHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMudGVzdE5vZGUpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDAuMiwgeyBwb3NpdGlvbjogcG9pbnRMaXN0W2ldIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXN0Tm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5yZXBlYXRGb3JldmVyKCk7XHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NhdmVMaWZlQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqGIOeri+WNs+Wkjea0u+aMiemSrlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2aWRlb0lzUmVhZHkgPSB0aGlzLmFkc0N0bC5nZXRWaWRlb0lzUmVhZHkoKTtcclxuICAgICAgICAgICAgLy/moLnmja7op4bpopHlub/lkYrmmK/lkKblh4blpIflpb3kuobvvIzov5vooYznnIvlub/lkYrlpI3mtLvvvIzov5jmmK/liIbkuqvlpI3mtLtcclxuICAgICAgICAgICAgaWYgKHZpZGVvSXNSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHNDdGwud2F0Y2hWaWRlb0FkcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGdvbGRDb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuY29udGludWVHYW1lKCk7IC8v57un57ut5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRzQ3RsLnNoYXJlVG8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChnb2xkQ291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudChnb2xkQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEYXRhLnJlY292ZXJSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tTaGFyZUJ1dHRvbih3aW5Qb3dlckNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6huWIhuS6q+aMiemSrlxyXG4gICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudCh0aGlzLnBsYXllckRhdGEuY3VycmVudEdvbGRDb3VudCk7XHJcbiAgICAgICAgLy8gICAgIC8v5Yqg5YCN6I635b6X5b2T5YmN6LWi5Yiw55qE6IO96YeP5YC8XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWRzQ3RsLnNoYWRlclRvKCkuXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyRGF0YS5hZGRQb3dlckNvdW50KHdpblBvd2VyQ291bnQpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZHNDdGwuc2hhcmVUbygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEYXRhLmFkZFBvd2VyQ291bnQod2luUG93ZXJDb3VudCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1JldHJ5QnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqGIOmHjeivleS4gOasoeeahOaMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhLm5ld0dhbWUoKTtcclxuICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBzdGF0ZSBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFdlYXBvbkluZm9DdGwpLmluaXRXZWFwb25EYXRhKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJ1aWxkLW9uZS10b3dlclwiLCAoaW5kZXgsIHRvd2VyQmFzZU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/lu7rpgKDkuIDluqfloZRcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcImNvbXBsZXRlLWN1cnJlbnQtZ3VpZGVcIik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMudG93ZXJzUHJlZmFiTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlcnNQcmVmYWJMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uLmpzb24sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHYzKHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueCwgMCwgdG93ZXJCYXNlTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRvd2VyQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS5zZXRUYXJnZXRUb3dlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCYXNlTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a6254K55Lit5LqG5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwiY29tcGxldGUtY3VycmVudC1ndWlkZVwiKTtcclxuICAgICAgICAgICAgLy/nu5l1aeaOp+WItuWZqOWPkemAge+8jOWujOaIkOS6huW9k+WJjeeahOW8leWvvOaTjeS9nFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgXCLmjInpkq7pn7PmlYhcIilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJwbGF5LWJnLW11c2ljXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5zdGFydEdhbWVCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiB2MygwLCAtMTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNob3dHcm91bmRFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWhlOeahOWfuuW6p+WHuueOsOeahOWKqOeUu1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50ZXJHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1VJRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEubmV3R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZ2FtZS1sb3NzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXmuLjmiI/lpLHotKXnmoTnirbmgIFcIik7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoJ2Nsb3NlLXdlYXBvbi1pbmZvLWxheWVyJylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdlbWVMb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5mcm96ZW5BbGxFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5mcm96ZW5BbGxUb3dlckJ1aWxkQmFzZSgpOyAvL+emgemUouaJgOacieWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhvbWVJY29uVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyb3plbkhvbWVJY29uKCk7XHJcbiAgICAgICAgICAgIGxldCBkZWFkRW5lbXlEYXRhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdldERlYWRFbmVteURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LWdhbWUtbG9zcy11aVwiLCBkZWFkRW5lbXlEYXRhLCB0aGlzLmFkc0N0bC5nZXRWaWRlb0lzUmVhZHkoKSk7XHJcbiAgICAgICAgICAgIH0sIDAuNik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmICh1aUN0bCkge1xyXG4gICAgICAgIC8vICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LXVpLWVudGVyLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyZWVIb21lSWNvbm4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVXaW4oZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICAvL+a4uOaIj+iDnOWIqe+8jOi/m+WFpeS4i+S4gOWFs1xyXG4gICAgICAgIC8v6aaW5YWI5bGV56S66IOc5Yip5aSx6LSl6aG16Z2iXHJcbiAgICAgICAgLy8gdGhpc1xyXG4gICAgICAgIC8v5ri45oiP6IOc5YipXHJcbiAgICAgICAgLy8gdGhpcy51aWNcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwiY2xvc2UtYWxsLXVpXCIpOy8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNob3ctZ2FtZS1yZXN1bHRcIik7IC8v6L+b5YWl5pi+56S65ri45oiP57uT5p6c55qE55WM6Z2iXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LWdhbWUtd2luLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInNob3ctZ2FtZS1lbmQtaW5mby1sYXllclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRGF0YS5yZWNvdmVyUmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/miormiYDmnInnmoR0b3dlcumDvemUgOavgeaOie+8jFxyXG4gICAgICAgIC8v5oqK5bem5Y+z55qEdG93ZXIg55qE5Z+65bqn5Yig5o6JXHJcbiAgICB9XHJcbiAgICBlbnRlckdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcInJlLWluaXQtdWlcIik7IC8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlci1idWlsZC1iYXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIpOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudExldmVsSWNvbkFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0N1cnJlbnRMZXZlbEljb25BbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pi+56S65b2T5YmN5piv56ys5LiA5YWz55qEaWNvblxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwic2hvdy1jdXJyZW50LWxldmVsLWljb24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZW5lbXlBdHRhY2tlZChudW06IE51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XCIsIG51bSlcclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWRIZWFydENvdW50ID0gdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UmVkSGVhcnRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRGF0YS5hZGRSZWRIZWFydENvdW50KC0xKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVmZXJSZWRIZWFyZFVJKCkge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICB9XHJcbiAgICBhY3RpdmVFbmVteVN1Y2Nlc3MoZW5lbXlUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZSBlbmVteSBzdWNjY2Vzc1wiLCBlbmVteVR5cGUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJcIilcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIGVuZW15VHlwZSk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVmZXJQb3dlckNvdW50TGFiZWwoKSB7XHJcbiAgICAgICAgLy/liLfmlrDlvZPliY3nmoQg6IO96YeP5YC8XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLWN1cnJlbnQtcG93ZXItbGFiZWxcIiwgdGhpcy5wbGF5ZXJEYXRhLmN1cnJlbnRQb3dlckNvdW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19