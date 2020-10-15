System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js", "./Home/HomeIcon.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, isValid, State, TowerBuildBase, EnemyController, GroundMapCtl, TowerBuildBaseCtl, PlayData, TowerBase, WinGoldAnimEffect, HomeIcon, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, GameController;

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
                // this.playerData.addGoldCount(goldCount);
                _this2.showHomeIconEnterAnim().then(function () {
                  _this2.playerData.recoverRedHeartCount();

                  _this2.uiController.emit("refer-red-heart-label"); // this.node.emit('update-gold-label', this.playerData.getCurrentGoldCount());


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
            //玩家点击了分享按钮
            return new Promise(function (resolve, reject) {
              resolve(); // this.playerData.addGoldCount(this.playerData.currentGoldCount);
            });
          }
        }, {
          key: "playerClickRetryButton",
          value: function playerClickRetryButton() {
            var _this3 = this;

            //玩家点击了 重试一次的按钮
            // this.playerData.currentLevelNum = 0
            this.playerData.newGame();
            this.enterGame().then(function () {
              _this3.uiController.emit("refer-red-heart-label");

              _this3.node.emit('update-gold-label', _this3.playerData.getCurrentGoldCount());

              _this3.state.setState("run");

              _this3.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).startGame();
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this4 = this;

            PhysicsSystem.instance.enable = true; // Your initialization goes here.

            this.state.addState("ready", function () {
              console.log("enter state ", _this4.state.getState()); // this.uiController.getComponent(WeaponInfoCtl).initWeaponData();
            });
            this.state.setState("ready");
            this.node.on("build-one-tower", function (index, towerBaseNode) {
              //建造一座塔
              _this4.uiController.emit("complete-current-guide");

              if (index < _this4.towersPrefabList.length) {
                var node = instantiate(_this4.towersPrefabList[index]);
                node.parent = _this4.node;
                node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).init(_this4.gameConfigJson.json, _this4);
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
              _this4.uiController.emit("complete-current-guide"); //给ui控制器发送，完成了当前的引导操作


              _this4.node.emit("play-audio", "按钮音效");

              _this4.node.emit("play-bg-music");

              _this4.playStatrButtonPressAnim().then(function () {
                return new Promise(function (resolve, reject) {
                  var tw = new Tween(_this4.startGameButton).by(1, {
                    position: v3(0, -10, 0)
                  }).call(function () {
                    console.log('play over');

                    _this4.startGameButton.destroy();

                    resolve();
                  }).start();
                });
              }).then(function () {
                var tw = new Tween(_this4.gameStartButtonBase);
                tw.to(0.2, {
                  scale: v3(0, 0, 0)
                });
                tw.call(function () {
                  _this4.gameStartButtonBase.destroy();
                });
                tw.start();
                return _this4.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                  error: Error()
                }), GroundMapCtl) : GroundMapCtl).showGroundEnterAnim();
              }).then(function () {
                // return this.node.getComponent(TowerBuildBaseCtl).showTowerBuildBaseEnterAnim();
                //展示塔的基座出现的动画
                return _this4.enterGame();
              }) // .then(() => {
              //     // return this.showHomeIconEnterAnim();
              // })
              .then(function () {
                // return this.node.getCom
                return _this4.showUIEnterAnim();
              }).then(function () {
                _this4.state.setState("run");

                _this4.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).startGame();

                _this4.playerData.newGame();

                _this4.node.emit('update-gold-label', _this4.playerData.getCurrentGoldCount()); // this.node.getComponent(GroundMapCtl).startGame();

              });
            });
            this.state.addState("game-loss", function () {
              console.log("进入游戏失败的状态");

              _this4.uiController.emit('close-weapon-info-layer');

              _this4.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).frozenAllEnemy();

              _this4.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                error: Error()
              }), TowerBuildBaseCtl) : TowerBuildBaseCtl).frozenAllTowerBuildBase(); //禁锢所有塔的基座
              // this.homeIconTw.stop();


              _this4.homeIconNode.getComponent(_crd && HomeIcon === void 0 ? (_reportPossibleCrUseOfHomeIcon({
                error: Error()
              }), HomeIcon) : HomeIcon).frozenHomeIcon();

              var deadEnemyData = _this4.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).getDeadEnemyData();

              _this4.scheduleOnce(function () {
                // this.uiController.showGameLossUI(deadEnemyData)
                _this4.uiController.emit("show-game-loss-ui", deadEnemyData);
              }, 0.6);
            }); // this.node.on("")
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            var _this5 = this;

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
              _this5.uiController.emit("show-ui-enter-anim", function () {
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
            var _this8 = this;

            this.playerData.enterNextLevel();
            console.log("进入下一关");
            this.enterGame().then(function () {
              _this8.node.emit('update-gold-label', _this8.playerData.getCurrentGoldCount());

              _this8.state.setState("run");

              _this8.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).startGame();
            }); //把所有的tower都销毁掉，
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
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              //显示当前是第一关的icon
              _this10.uiController.emit("show-current-level-icon-anim", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJob21lSWNvblR3IiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFjdGl2ZSIsIm5vZGUiLCJlbWl0IiwiZ29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwidGhlbiIsInJlY292ZXJSZWRIZWFydENvdW50IiwidWlDb250cm9sbGVyIiwic2V0U3RhdGUiLCJnZXRDb21wb25lbnQiLCJjb250aW51ZUdhbWUiLCJuZXdHYW1lIiwiZW50ZXJHYW1lIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsInN0YXJ0R2FtZSIsImluc3RhbmNlIiwiZW5hYmxlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJvbiIsImluZGV4IiwidG93ZXJCYXNlTm9kZSIsInRvd2Vyc1ByZWZhYkxpc3QiLCJsZW5ndGgiLCJwYXJlbnQiLCJpbml0IiwiZ2FtZUNvbmZpZ0pzb24iLCJqc29uIiwicG9zIiwicG9zaXRpb24iLCJ4IiwieiIsInNldFBvc2l0aW9uIiwic2V0VGFyZ2V0VG93ZXIiLCJzZXRUb3dlckJ1aWxkQmFzZSIsInBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSIsInN0YXJ0R2FtZUJ1dHRvbiIsImJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJnYW1lU3RhcnRCdXR0b25CYXNlIiwic2NhbGUiLCJzaG93R3JvdW5kRW50ZXJBbmltIiwic2hvd1VJRW50ZXJBbmltIiwiZnJvemVuQWxsRW5lbXkiLCJmcm96ZW5BbGxUb3dlckJ1aWxkQmFzZSIsImZyb3plbkhvbWVJY29uIiwiZGVhZEVuZW15RGF0YSIsImdldERlYWRFbmVteURhdGEiLCJzY2hlZHVsZU9uY2UiLCJob21lSWNvblByZWZhYiIsImdyb3VuZE1hcEN0bCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJmcmVlSG9tZUljb25uIiwiZWFzaW5nIiwic2tlbGVBbmltIiwiZ2V0Q2hpbGRCeU5hbWUiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwiYW5pbVN0YXRlIiwibmFtZSIsInJlcGVhdENvdW50IiwicGxheSIsInJlc3VsdCIsImkiLCJjb2xsaWRlciIsInV1aWQiLCJyYXljYXN0UmVzdWx0cyIsImR0IiwiY3VycmVudExldmVsTnVtIiwidGFyZ2V0UG9zIiwiZ29sZEFuaW0zZFByZWZhYiIsInNldEdvbGRDb3VudCIsImVudGVyTmV4dExldmVsIiwic2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltIiwic2hvd0N1cnJlbnRMZXZlbEljb25BbmltIiwibnVtIiwiY3VycmVudFJlZEhlYXJ0Q291bnQiLCJnZXRDdXJyZW50UmVkSGVhcnRDb3VudCIsImFkZFJlZEhlYXJ0Q291bnQiLCJlbmVteVR5cGUiLCJjdXJyZW50UG93ZXJDb3VudCIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxhLE9BQUFBLGE7QUFBa0NDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTBEQyxNQUFBQSxPLE9BQUFBLE87Ozs7QUFDMUtDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMsbUNBQUFBLGM7O0FBQ2NDLE1BQUFBLGUsc0JBQUFBLGU7O0FBQ2RDLE1BQUFBLFksbUJBQUFBLFk7O0FBRUFDLE1BQUFBLGlCLHdCQUFBQSxpQjs7QUFDQUMsTUFBQUEsUSxxQkFBQUEsUTs7QUFFQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFFQUMsTUFBQUEsaUIsOEJBQUFBLGlCOztBQUNBQyxNQUFBQSxRLG1CQUFBQSxROzs7Ozs7QUFDVDtBQUNRQyxNQUFBQSxPLEdBQXNCcEIsVSxDQUF0Qm9CLE87QUFBU0MsTUFBQUEsUSxHQUFhckIsVSxDQUFicUIsUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMsVUFLSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXJCO0FBQVIsT0FBRCxDLFVBR1JtQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFakI7QUFBUixPQUFELEMsVUFHUmUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXBCO0FBQVIsT0FBRCxDLFVBR1JrQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFckI7QUFBUixPQUFELEMsVUFXUm1CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVyQjtBQUFSLE9BQUQsQyxVQUdSbUIsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXJCO0FBQVIsT0FBRCxDLFVBRVJtQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFckI7QUFBUixPQUFELEMsVUFHUm1CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVwQjtBQUFSLE9BQUQsQyxXQU9Sa0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXBCO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBeEJEcUIsSyxHQUFRO0FBQUE7QUFBQSwrQjs7Ozs7Ozs7OztnQkFvQlRDLFksR0FBcUIsSTtnQkFFckJDLFUsR0FBdUIsSTs7OztnQkFLdEJDLFUsR0FBb0IsSTs7Ozs7O0FBRzVCO0FBQ0E7bUNBQ1M7QUFDTCxpQkFBS0QsVUFBTCxHQUFrQjtBQUFBO0FBQUEsc0NBQWEsSUFBYixDQUFsQixDQURLLENBR0w7O0FBQ0EsZ0JBQUlFLEVBQUUsR0FBRyxJQUFJdkIsS0FBSixDQUFVLEtBQUt3QixLQUFmLENBQVQ7QUFDQUQsWUFBQUEsRUFBRSxDQUFDRSxhQUFILENBQWlCLElBQUl6QixLQUFKLENBQVUsS0FBS3dCLEtBQWYsRUFBc0JFLEVBQXRCLENBQXlCLEVBQXpCLEVBQTZCO0FBQUVDLGNBQUFBLFdBQVcsRUFBRXpCLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQ7QUFBakIsYUFBN0IsRUFBNkQwQixHQUE3RCxDQUFpRTtBQUFFRCxjQUFBQSxXQUFXLEVBQUV6QixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQWpCLGFBQWpFLENBQWpCO0FBQ0FxQixZQUFBQSxFQUFFLENBQUNNLEtBQUgsR0FOSyxDQU9MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIOzs7c0RBQzJCO0FBQUE7O0FBQ3hCO0FBQ0EsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0QsY0FBQUEsT0FBTzs7QUFFUCxrQkFBSTFCLE9BQU8sQ0FBQyxNQUFJLENBQUNlLFlBQU4sQ0FBWCxFQUFnQztBQUM1QixnQkFBQSxNQUFJLENBQUNBLFlBQUwsQ0FBa0JhLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0gsZUFMbUMsQ0FNcEM7QUFDQTs7O0FBQ0EsY0FBQSxNQUFJLENBQUNDLElBQUwsQ0FBVUMsSUFBVixDQUFlLG1CQUFmLEVBQW9DLFVBQUNDLFNBQUQsRUFBZTtBQUMvQztBQUNBLGdCQUFBLE1BQUksQ0FBQ0MscUJBQUwsR0FBNkJDLElBQTdCLENBQWtDLFlBQU07QUFDcEMsa0JBQUEsTUFBSSxDQUFDakIsVUFBTCxDQUFnQmtCLG9CQUFoQjs7QUFDQSxrQkFBQSxNQUFJLENBQUNDLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLHVCQUF2QixFQUZvQyxDQUdwQzs7O0FBQ0Esa0JBQUEsTUFBSSxDQUFDaEIsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQixLQUFwQjs7QUFDQSxrQkFBQSxNQUFJLENBQUNQLElBQUwsQ0FBVVEsWUFBVjtBQUFBO0FBQUEsMERBQXdDQyxZQUF4QyxHQUxvQyxDQUtvQjs7QUFDM0QsaUJBTkQ7QUFPSCxlQVRELEVBUm9DLENBaUJoQztBQUNKO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0gsYUE3Qk0sQ0FBUDtBQThCSDs7O21EQUN3QjtBQUNyQjtBQUNBLG1CQUFPLElBQUliLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENELGNBQUFBLE9BQU8sR0FENkIsQ0FFcEM7QUFDSCxhQUhNLENBQVA7QUFJSDs7O21EQUN3QjtBQUFBOztBQUNyQjtBQUNBO0FBQ0EsaUJBQUtWLFVBQUwsQ0FBZ0J1QixPQUFoQjtBQUNBLGlCQUFLQyxTQUFMLEdBQWlCUCxJQUFqQixDQUFzQixZQUFNO0FBQ3hCLGNBQUEsTUFBSSxDQUFDRSxZQUFMLENBQWtCTCxJQUFsQixDQUF1Qix1QkFBdkI7O0FBQ0EsY0FBQSxNQUFJLENBQUNELElBQUwsQ0FBVUMsSUFBVixDQUFlLG1CQUFmLEVBQW9DLE1BQUksQ0FBQ2QsVUFBTCxDQUFnQnlCLG1CQUFoQixFQUFwQzs7QUFDQSxjQUFBLE1BQUksQ0FBQzNCLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0IsS0FBcEI7O0FBQ0EsY0FBQSxNQUFJLENBQUNQLElBQUwsQ0FBVVEsWUFBVjtBQUFBO0FBQUEsc0RBQXdDSyxTQUF4QztBQUNILGFBTEQ7QUFNSDs7O2tDQUNPO0FBQUE7O0FBQ0o1QyxZQUFBQSxhQUFhLENBQUM2QyxRQUFkLENBQXVCQyxNQUF2QixHQUFnQyxJQUFoQyxDQURJLENBRUo7O0FBQ0EsaUJBQUs5QixLQUFMLENBQVcrQixRQUFYLENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDL0JDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsTUFBSSxDQUFDakMsS0FBTCxDQUFXa0MsUUFBWCxFQUE1QixFQUQrQixDQUUvQjtBQUNILGFBSEQ7QUFJQSxpQkFBS2xDLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0IsT0FBcEI7QUFFQSxpQkFBS1AsSUFBTCxDQUFVb0IsRUFBVixDQUFhLGlCQUFiLEVBQWdDLFVBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUFnQztBQUM1RDtBQUNBLGNBQUEsTUFBSSxDQUFDaEIsWUFBTCxDQUFrQkwsSUFBbEIsQ0FBdUIsd0JBQXZCOztBQUNBLGtCQUFJb0IsS0FBSyxHQUFHLE1BQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JDLE1BQWxDLEVBQTBDO0FBQ3RDLG9CQUFJeEIsSUFBSSxHQUFHbkMsV0FBVyxDQUFDLE1BQUksQ0FBQzBELGdCQUFMLENBQXNCRixLQUF0QixDQUFELENBQXRCO0FBQ0FyQixnQkFBQUEsSUFBSSxDQUFDeUIsTUFBTCxHQUFjLE1BQUksQ0FBQ3pCLElBQW5CO0FBQ0FBLGdCQUFBQSxJQUFJLENBQUNRLFlBQUw7QUFBQTtBQUFBLDRDQUE2QmtCLElBQTdCLENBQWtDLE1BQUksQ0FBQ0MsY0FBTCxDQUFvQkMsSUFBdEQsRUFBNEQsTUFBNUQ7QUFDQSxvQkFBSUMsR0FBRyxHQUFHN0QsRUFBRSxDQUFDc0QsYUFBYSxDQUFDUSxRQUFkLENBQXVCQyxDQUF4QixFQUEyQixDQUEzQixFQUE4QlQsYUFBYSxDQUFDUSxRQUFkLENBQXVCRSxDQUFyRCxDQUFaO0FBQ0FoQyxnQkFBQUEsSUFBSSxDQUFDaUMsV0FBTCxDQUFpQkosR0FBakI7QUFDQVAsZ0JBQUFBLGFBQWEsQ0FBQ2QsWUFBZDtBQUFBO0FBQUEsc0RBQTJDMEIsY0FBM0MsQ0FBMERsQyxJQUExRDtBQUNBQSxnQkFBQUEsSUFBSSxDQUFDUSxZQUFMO0FBQUE7QUFBQSw0Q0FBNkIyQixpQkFBN0IsQ0FBK0NiLGFBQS9DO0FBQ0g7QUFFSixhQWJEO0FBZ0JBLGlCQUFLckMsS0FBTCxDQUFXK0IsUUFBWCxDQUFvQix3QkFBcEIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBLGNBQUEsTUFBSSxDQUFDVixZQUFMLENBQWtCTCxJQUFsQixDQUF1Qix3QkFBdkIsRUFGZ0QsQ0FHaEQ7OztBQUNBLGNBQUEsTUFBSSxDQUFDRCxJQUFMLENBQVVDLElBQVYsQ0FBZSxZQUFmLEVBQTZCLE1BQTdCOztBQUNBLGNBQUEsTUFBSSxDQUFDRCxJQUFMLENBQVVDLElBQVYsQ0FBZSxlQUFmOztBQUNBLGNBQUEsTUFBSSxDQUFDbUMsd0JBQUwsR0FBZ0NoQyxJQUFoQyxDQUFxQyxZQUFNO0FBQ3ZDLHVCQUFPLElBQUlSLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsc0JBQUlULEVBQUUsR0FBRyxJQUFJdkIsS0FBSixDQUFVLE1BQUksQ0FBQ3VFLGVBQWYsRUFDSkMsRUFESSxDQUNELENBREMsRUFDRTtBQUFFUixvQkFBQUEsUUFBUSxFQUFFOUQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLEVBQUwsRUFBUyxDQUFUO0FBQWQsbUJBREYsRUFFSnVFLElBRkksQ0FFQyxZQUFNO0FBQ1J0QixvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjs7QUFDQSxvQkFBQSxNQUFJLENBQUNtQixlQUFMLENBQXFCRyxPQUFyQjs7QUFDQTNDLG9CQUFBQSxPQUFPO0FBQ1YsbUJBTkksRUFPSkYsS0FQSSxFQUFUO0FBUUgsaUJBVE0sQ0FBUDtBQVVILGVBWEQsRUFXR1MsSUFYSCxDQVdRLFlBQU07QUFDVixvQkFBSWYsRUFBRSxHQUFHLElBQUl2QixLQUFKLENBQVUsTUFBSSxDQUFDMkUsbUJBQWYsQ0FBVDtBQUNBcEQsZ0JBQUFBLEVBQUUsQ0FBQ0csRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFa0Qsa0JBQUFBLEtBQUssRUFBRTFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBWCxpQkFBWDtBQUNBcUIsZ0JBQUFBLEVBQUUsQ0FBQ2tELElBQUgsQ0FBUSxZQUFNO0FBQ1Ysa0JBQUEsTUFBSSxDQUFDRSxtQkFBTCxDQUF5QkQsT0FBekI7QUFDSCxpQkFGRDtBQUdBbkQsZ0JBQUFBLEVBQUUsQ0FBQ00sS0FBSDtBQUNBLHVCQUFPLE1BQUksQ0FBQ0ssSUFBTCxDQUFVUSxZQUFWO0FBQUE7QUFBQSxrREFBcUNtQyxtQkFBckMsRUFBUDtBQUNILGVBbkJELEVBbUJHdkMsSUFuQkgsQ0FtQlEsWUFBTTtBQUNWO0FBQ0E7QUFDQSx1QkFBTyxNQUFJLENBQUNPLFNBQUwsRUFBUDtBQUNILGVBdkJELEVBd0JJO0FBQ0E7QUFDQTtBQTFCSixlQTJCS1AsSUEzQkwsQ0EyQlUsWUFBTTtBQUNSO0FBQ0EsdUJBQU8sTUFBSSxDQUFDd0MsZUFBTCxFQUFQO0FBQ0gsZUE5QkwsRUE4Qk94QyxJQTlCUCxDQThCWSxZQUFNO0FBQ1YsZ0JBQUEsTUFBSSxDQUFDbkIsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQixLQUFwQjs7QUFDQSxnQkFBQSxNQUFJLENBQUNQLElBQUwsQ0FBVVEsWUFBVjtBQUFBO0FBQUEsd0RBQXdDSyxTQUF4Qzs7QUFDQSxnQkFBQSxNQUFJLENBQUMxQixVQUFMLENBQWdCdUIsT0FBaEI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDVixJQUFMLENBQVVDLElBQVYsQ0FBZSxtQkFBZixFQUFvQyxNQUFJLENBQUNkLFVBQUwsQ0FBZ0J5QixtQkFBaEIsRUFBcEMsRUFKVSxDQU1WOztBQUNILGVBckNMO0FBc0NILGFBNUNEO0FBOENBLGlCQUFLM0IsS0FBTCxDQUFXK0IsUUFBWCxDQUFvQixXQUFwQixFQUFpQyxZQUFNO0FBQ25DQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLGNBQUEsTUFBSSxDQUFDWixZQUFMLENBQWtCTCxJQUFsQixDQUF1Qix5QkFBdkI7O0FBRUEsY0FBQSxNQUFJLENBQUNELElBQUwsQ0FBVVEsWUFBVjtBQUFBO0FBQUEsc0RBQXdDcUMsY0FBeEM7O0FBQ0EsY0FBQSxNQUFJLENBQUM3QyxJQUFMLENBQVVRLFlBQVY7QUFBQTtBQUFBLDBEQUEwQ3NDLHVCQUExQyxHQUxtQyxDQUtrQztBQUNyRTs7O0FBQ0EsY0FBQSxNQUFJLENBQUM1RCxZQUFMLENBQWtCc0IsWUFBbEI7QUFBQTtBQUFBLHdDQUF5Q3VDLGNBQXpDOztBQUNBLGtCQUFJQyxhQUFhLEdBQUcsTUFBSSxDQUFDaEQsSUFBTCxDQUFVUSxZQUFWO0FBQUE7QUFBQSxzREFBd0N5QyxnQkFBeEMsRUFBcEI7O0FBQ0EsY0FBQSxNQUFJLENBQUNDLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQjtBQUNBLGdCQUFBLE1BQUksQ0FBQzVDLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLG1CQUF2QixFQUE0QytDLGFBQTVDO0FBQ0gsZUFIRCxFQUdHLEdBSEg7QUFJSCxhQWJELEVBdkVJLENBcUZKO0FBQ0g7Ozs0Q0FFaUI7QUFBQTs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sSUFBSXBELE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQTtBQUNBLGNBQUEsTUFBSSxDQUFDUSxZQUFMLENBQWtCTCxJQUFsQixDQUF1QixvQkFBdkIsRUFBNkMsWUFBTTtBQUMvQ0osZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0gsYUFOTSxDQUFQO0FBT0gsVyxDQUNEO0FBRUE7QUFFQTtBQUVBOzs7O2tEQUV3QjtBQUFBOztBQUNwQixtQkFBTyxJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJLENBQUMzQixPQUFPLENBQUMsTUFBSSxDQUFDZSxZQUFOLENBQVosRUFBaUM7QUFDN0IsZ0JBQUEsTUFBSSxDQUFDQSxZQUFMLEdBQW9CckIsV0FBVyxDQUFDLE1BQUksQ0FBQ3NGLGNBQU4sQ0FBL0I7QUFDQSxnQkFBQSxNQUFJLENBQUNqRSxZQUFMLENBQWtCdUMsTUFBbEIsR0FBMkIsTUFBSSxDQUFDekIsSUFBaEM7QUFDSDs7QUFFRCxrQkFBSW9ELFlBQVksR0FBRyxNQUFJLENBQUNwRCxJQUFMLENBQVVRLFlBQVY7QUFBQTtBQUFBLCtDQUFuQjs7QUFDQSxrQkFBSTRDLFlBQUosRUFBa0I7QUFDZCxvQkFBSXBELElBQUksR0FBR29ELFlBQVksQ0FBQ0MsY0FBYixHQUE4QkMsUUFBOUIsQ0FBdUMsQ0FBdkMsRUFBMEMsQ0FBMUMsQ0FBWDtBQUNBLGdCQUFBLE1BQUksQ0FBQ3BFLFlBQUwsQ0FBa0I0QyxRQUFsQixHQUE2QjlELEVBQUUsQ0FBQ2dDLElBQUksQ0FBQzhCLFFBQUwsQ0FBY0MsQ0FBZixFQUFrQixFQUFsQixFQUFzQi9CLElBQUksQ0FBQzhCLFFBQUwsQ0FBY0UsQ0FBcEMsQ0FBL0I7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDOUMsWUFBTCxDQUFrQnNCLFlBQWxCO0FBQUE7QUFBQSwwQ0FBeUMrQyxhQUF6Qzs7QUFDQXZELGdCQUFBQSxJQUFJLENBQUNELE1BQUwsR0FBYyxLQUFkO0FBQ0Esb0JBQUlWLEVBQUUsR0FBRyxJQUFJdkIsS0FBSixDQUFVLE1BQUksQ0FBQ29CLFlBQWYsQ0FBVCxDQUxjLENBTWQ7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDQSxZQUFMLENBQWtCYSxNQUFsQixHQUEyQixJQUEzQjtBQUNBVixnQkFBQUEsRUFBRSxDQUFDa0QsSUFBSCxDQUFRLFlBQU07QUFDVnZDLGtCQUFBQSxJQUFJLENBQUNELE1BQUwsR0FBYyxJQUFkO0FBQ0gsaUJBRkQ7QUFHQVYsZ0JBQUFBLEVBQUUsQ0FBQ0csRUFBSCxDQUFNLENBQU4sRUFBUztBQUFFc0Msa0JBQUFBLFFBQVEsRUFBRTlELEVBQUUsQ0FBQ2dDLElBQUksQ0FBQzhCLFFBQUwsQ0FBY0MsQ0FBZixFQUFrQixDQUFsQixFQUFxQi9CLElBQUksQ0FBQzhCLFFBQUwsQ0FBY0UsQ0FBbkM7QUFBZCxpQkFBVCxFQUFnRTtBQUFFd0Isa0JBQUFBLE1BQU0sRUFBRTtBQUFWLGlCQUFoRTtBQUNBbkUsZ0JBQUFBLEVBQUUsQ0FBQ2tELElBQUgsQ0FBUSxZQUFNO0FBQ1YxQyxrQkFBQUEsT0FBTztBQUNWLGlCQUZEO0FBR0FSLGdCQUFBQSxFQUFFLENBQUNNLEtBQUg7QUFDSDtBQUNKLGFBeEJNLENBQVA7QUF5Qkg7OztxREFFMEI7QUFBQTs7QUFDdkIsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSTJELFNBQVMsR0FBRyxNQUFJLENBQUNwQixlQUFMLENBQXFCcUIsY0FBckIsQ0FBb0MsaUJBQXBDLEVBQXVEbEQsWUFBdkQsQ0FBb0V0QywwQkFBcEUsQ0FBaEI7O0FBQ0Esa0JBQUl1RixTQUFKLEVBQWU7QUFDWCxvQkFBSUUsV0FBVyxHQUFHRixTQUFTLENBQUNHLFdBQTVCLENBRFcsQ0FFWDs7QUFDQSxvQkFBSUMsU0FBUyxHQUFHSixTQUFTLENBQUN0QyxRQUFWLENBQW1Cd0MsV0FBVyxDQUFDRyxJQUEvQixDQUFoQjtBQUNBRCxnQkFBQUEsU0FBUyxDQUFDRSxXQUFWLEdBQXdCLENBQXhCO0FBQ0Esb0JBQUl2QyxNQUFNLEdBQUdxQyxTQUFTLENBQUNyQyxNQUF2QjtBQUNBaUMsZ0JBQUFBLFNBQVMsQ0FBQ08sSUFBVixDQUFlTCxXQUFXLENBQUNHLElBQTNCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ1osWUFBTCxDQUFrQixZQUFNO0FBQ3BCakMsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQXJCLGtCQUFBQSxPQUFPO0FBQ1YsaUJBSEQsRUFHRzJCLE1BSEg7QUFJSCxlQVhELE1BV087QUFDSDNCLGdCQUFBQSxPQUFPO0FBQ1Y7QUFDSixhQWhCTSxDQUFQO0FBaUJIOzs7OENBQ21Cb0UsTSxFQUE0QjtBQUM1QyxnQkFBSSxLQUFLaEYsS0FBTCxDQUFXa0MsUUFBWCxPQUEwQixPQUE5QixFQUF1QztBQUNuQyxtQkFBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDekMsTUFBM0IsRUFBbUMwQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLG9CQUFJQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVDLFFBQXpCOztBQUNBLG9CQUFJQSxRQUFRLENBQUNuRSxJQUFULENBQWNvRSxJQUFkLEtBQXVCLEtBQUsvQixlQUFMLENBQXFCK0IsSUFBaEQsRUFBc0Q7QUFDbEQsdUJBQUtuRixLQUFMLENBQVdzQixRQUFYLENBQW9CLHdCQUFwQjtBQUNIO0FBQ0osZUFOa0MsQ0FPbkM7QUFDQTtBQUVBOztBQUNILGFBWEQsTUFXTyxJQUFJLEtBQUt0QixLQUFMLENBQVdrQyxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ3hDLG1CQUFLbkIsSUFBTCxDQUFVQyxJQUFWLENBQWUsb0JBQWYsRUFBcUNoQyxhQUFhLENBQUM2QyxRQUFkLENBQXVCdUQsY0FBNUQ7QUFFSCxhQWYyQyxDQWdCNUM7O0FBQ0g7OztpQ0FDTUMsRSxFQUFZLENBRWxCOzs7MENBQzBCO0FBQ3ZCLG1CQUFPLEtBQUszQyxjQUFaO0FBQ0g7OzsrQ0FFb0I7QUFDakIsbUJBQU8sS0FBS3hDLFVBQUwsQ0FBZ0JvRixlQUF2QjtBQUNIOzs7Z0RBQ3FCckUsUyxFQUFtQnNFLFMsRUFBaUI7QUFDdEQsZ0JBQUl4RSxJQUFJLEdBQUduQyxXQUFXLENBQUMsS0FBSzRHLGdCQUFOLENBQXRCO0FBQ0F6RSxZQUFBQSxJQUFJLENBQUN5QixNQUFMLEdBQWMsS0FBS3pCLElBQW5CO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ1EsWUFBTDtBQUFBO0FBQUEsd0RBQXFDa0UsWUFBckMsQ0FBa0R4RSxTQUFsRCxFQUE2RCxJQUE3RDtBQUNBRixZQUFBQSxJQUFJLENBQUM4QixRQUFMLEdBQWdCMEMsU0FBaEI7QUFDSDs7OytDQUVvQjtBQUNqQjtBQUVBO0FBQ0E7QUFDQSxpQkFBS3hFLElBQUwsQ0FBVUMsSUFBVixDQUFlLHVCQUFmO0FBQ0g7OztrQ0FFTytDLGEsRUFBK0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLMUMsWUFBTCxDQUFrQkwsSUFBbEIsQ0FBdUIsY0FBdkIsRUFObUMsQ0FNSTs7QUFDdkMsaUJBQUtLLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLHlCQUF2Qjs7QUFDQSxnQkFBSSxLQUFLaEIsS0FBTCxDQUFXa0MsUUFBWCxPQUEwQixLQUE5QixFQUFxQztBQUNqQyxtQkFBS2xDLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0Isa0JBQXBCLEVBRGlDLENBQ1E7QUFDekM7O0FBQ0EsbUJBQUtELFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLGtCQUF2QixFQUEyQytDLGFBQTNDO0FBQ0g7QUFFSjs7OzJDQUNnQjtBQUFBOztBQUNiLGlCQUFLN0QsVUFBTCxDQUFnQndGLGNBQWhCO0FBRUExRCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsaUJBQUtQLFNBQUwsR0FBaUJQLElBQWpCLENBQXNCLFlBQU07QUFDeEIsY0FBQSxNQUFJLENBQUNKLElBQUwsQ0FBVUMsSUFBVixDQUFlLG1CQUFmLEVBQW9DLE1BQUksQ0FBQ2QsVUFBTCxDQUFnQnlCLG1CQUFoQixFQUFwQzs7QUFDQSxjQUFBLE1BQUksQ0FBQzNCLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0IsS0FBcEI7O0FBQ0EsY0FBQSxNQUFJLENBQUNQLElBQUwsQ0FBVVEsWUFBVjtBQUFBO0FBQUEsc0RBQXdDSyxTQUF4QztBQUNILGFBSkQsRUFKYSxDQVViO0FBQ0E7QUFDSDs7O3NDQUNXO0FBQUE7O0FBQ1IsbUJBQU8sSUFBSWpCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUkzQixPQUFPLENBQUMsTUFBSSxDQUFDZSxZQUFOLENBQVgsRUFBZ0M7QUFDNUIsZ0JBQUEsTUFBSSxDQUFDQSxZQUFMLENBQWtCYSxNQUFsQixHQUEyQixLQUEzQjtBQUNILGVBSG1DLENBSXBDOzs7QUFDQSxjQUFBLE1BQUksQ0FBQ0MsSUFBTCxDQUFVQyxJQUFWLENBQWUsbUJBQWY7O0FBQ0EsY0FBQSxNQUFJLENBQUNELElBQUwsQ0FBVUMsSUFBVixDQUFlLDhCQUFmOztBQUNBLGNBQUEsTUFBSSxDQUFDRCxJQUFMLENBQVVDLElBQVYsQ0FBZSxtQkFBZixFQVBvQyxDQU9DOzs7QUFDckMsY0FBQSxNQUFJLENBQUNELElBQUwsQ0FBVUMsSUFBVixDQUFlLGtCQUFmLEVBUm9DLENBUUE7QUFDcEM7OztBQUVBLGNBQUEsTUFBSSxDQUFDRCxJQUFMLENBQVVRLFlBQVY7QUFBQTtBQUFBLDBEQUEwQ29FLDJCQUExQyxHQUF3RXhFLElBQXhFLENBQTZFLFlBQU07QUFDL0UsdUJBQU8sTUFBSSxDQUFDRCxxQkFBTCxFQUFQO0FBQ0gsZUFGRCxFQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWLHVCQUFPLE1BQUksQ0FBQ3lFLHdCQUFMLEVBQVA7QUFDSCxlQUpELEVBSUd6RSxJQUpILENBSVEsWUFBTTtBQUNWUCxnQkFBQUEsT0FBTztBQUNWLGVBTkQ7QUFPSCxhQWxCTSxDQUFQO0FBb0JIOzs7cURBQzBCO0FBQUE7O0FBQ3ZCLG1CQUFPLElBQUlELE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQSxjQUFBLE9BQUksQ0FBQ1EsWUFBTCxDQUFrQkwsSUFBbEIsQ0FBdUIsOEJBQXZCLEVBQXVELFlBQU07QUFDekQsb0JBQUlKLE9BQUosRUFBYTtBQUNUQSxrQkFBQUEsT0FBTztBQUNWO0FBQ0osZUFKRDtBQUtILGFBUE0sQ0FBUDtBQVFIOzs7d0NBQ2FpRixHLEVBQWE7QUFDdkI3RCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCNEQsR0FBdkIsRUFEdUIsQ0FFdkI7O0FBQ0EsZ0JBQUksS0FBSzdGLEtBQUwsQ0FBV2tDLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakMsa0JBQUk0RCxvQkFBb0IsR0FBRyxLQUFLNUYsVUFBTCxDQUFnQjZGLHVCQUFoQixFQUEzQjs7QUFDQSxrQkFBSUQsb0JBQW9CLEdBQUcsQ0FBM0IsRUFBOEI7QUFDMUIscUJBQUs1RixVQUFMLENBQWdCOEYsZ0JBQWhCLENBQWlDLENBQUMsQ0FBbEM7O0FBQ0Esb0JBQUksS0FBSzlGLFVBQUwsQ0FBZ0I2Rix1QkFBaEIsT0FBOEMsQ0FBbEQsRUFBcUQ7QUFDakQvRCxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLHVCQUFLakMsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQixXQUFwQjtBQUNIO0FBQ0o7QUFDSjtBQUVKOzs7NENBQ2lCO0FBQ2QsaUJBQUtELFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLHVCQUF2QjtBQUNIOzs7NkNBQ2tCaUYsUyxFQUFtQjtBQUNsQ2pFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDZ0UsU0FBckMsRUFEa0MsQ0FFbEM7QUFDQTs7QUFDQSxpQkFBSzVFLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLHVCQUF2QixFQUFnRGlGLFNBQWhEO0FBRUg7OztpREFDcUI7QUFDbEI7QUFDQSxpQkFBSzVFLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLDJCQUF2QixFQUFvRCxLQUFLZCxVQUFMLENBQWdCZ0csaUJBQXBFO0FBQ0g7Ozs7UUExWitCekgsUyxXQUVsQjBILEksR0FBZSxDQUFDLEMsVUFpQmhCQyxpQixHQUE0QixDOzs7OztpQkFkTCxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0QsRTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQVdILEk7Ozs7Ozs7aUJBR1AsSTs7Ozs7OztpQkFFYyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBT0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVHdlZW4sIEpzb25Bc3NldCwgVmVjMywgdjMsIFBoeXNpY3NTeXN0ZW0sIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCwgVmVjMiwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiwgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbi8vIGltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2VDdGwgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlQ3RsJztcclxuaW1wb3J0IHsgUGxheURhdGEgfSBmcm9tICcuL0RhdGEvUGxheWVyRGF0YSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi91dGlsL0Jlemllck4nO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuaW1wb3J0IHsgSG9tZUljb24gfSBmcm9tICcuL0hvbWUvSG9tZUljb24nO1xyXG4vLyBpbXBvcnQgeyBXZWFwb25JbmZvQ3RsIH0gZnJvbSAnLi9XZWFwb25JbmZvQ3RsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+mHjeWKm+WKoOmAn+W6plxyXG4gICAgcHVibGljIHN0YXRpYyBhY2NZOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlcnNQcmVmYWJMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudEFkZEVuZW15VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDQ7XHJcbiAgICAvLyBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBlbmVteUJlTG9ja01heE51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvLyBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdWlDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcGxhdGU6IE5vZGUgPSBudWxsOyAvL+aYn+eQg1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVTdGFydEJ1dHRvbkJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGhvbWVJY29uUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob21lSWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJEYXRhOiBQbGF5RGF0YSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZ29sZEFuaW0zZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGhvbWVJY29uVHc6IFR3ZWVuID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHRlc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEgPSBuZXcgUGxheURhdGEodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnBsYXRlKTtcclxuICAgICAgICB0dy5yZXBlYXRGb3JldmVyKG5ldyBUd2Vlbih0aGlzLnBsYXRlKS50bygyMCwgeyBldWxlckFuZ2xlczogdjMoMCwgMzYwLCAwKSB9KS5zZXQoeyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCkgfSkpXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oW3YzKDAsIDAsIDApLCB2MygxMCwgMzAsIDEwKSwgdjMoMjAsIDMsIDApLHYzKDIwLCAxMDAsIDMwKV0pO1xyXG4gICAgICAgIC8vIGxldCBwb2ludExpc3Q6IFZlYzNbXSA9IGJlemllci5nZXRQb2ludExpc3QoMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9pbnRcIiwgcG9pbnRMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy50ZXN0Tm9kZSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcudG8oMC4yLCB7IHBvc2l0aW9uOiBwb2ludExpc3RbaV0gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRlc3ROb2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMClcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKSB7XHJcbiAgICAgICAgLy/njqnlrrbngrnlh7vkuoYg56uL5Y2z5aSN5rS75oyJ6ZKuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyLWJ1aWxkLWJhc2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtZW5lbXlcIiwgKGdvbGRDb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudChnb2xkQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEucmVjb3ZlclJlZEhlYXJ0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcIlwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMucGxheWVyRGF0YS5jdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDph43or5XkuIDmrKHnmoTmjInpkq5cclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtID0gMFxyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5uZXdHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgc3RhdGUgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmdldENvbXBvbmVudChXZWFwb25JbmZvQ3RsKS5pbml0V2VhcG9uRGF0YSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJidWlsZC1vbmUtdG93ZXJcIiwgKGluZGV4LCB0b3dlckJhc2VOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bu66YCg5LiA5bqn5aGUXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJjb21wbGV0ZS1jdXJyZW50LWd1aWRlXCIpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnRvd2Vyc1ByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJzUHJlZmFiTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnSnNvbi5qc29uLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB2Myh0b3dlckJhc2VOb2RlLnBvc2l0aW9uLngsIDAsIHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0b3dlckJhc2VOb2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkuc2V0VGFyZ2V0VG93ZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnNldFRvd2VyQnVpbGRCYXNlKHRvd2VyQmFzZU5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueOqeWutueCueS4reS6huW8gOWni+a4uOaIj+aMiemSrlwiKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcImNvbXBsZXRlLWN1cnJlbnQtZ3VpZGVcIik7XHJcbiAgICAgICAgICAgIC8v57uZdWnmjqfliLblmajlj5HpgIHvvIzlrozmiJDkuoblvZPliY3nmoTlvJXlr7zmk43kvZxcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIFwi5oyJ6ZKu6Z+z5pWIXCIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicGxheS1iZy1tdXNpY1wiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuc3RhcnRHYW1lQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogdjMoMCwgLTEwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheSBvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UpO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5zaG93R3JvdW5kRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2VDdGwpLnNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgLy/lsZXnpLrloZTnmoTln7rluqflh7rnjrDnmoTliqjnlLtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVudGVyR2FtZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5ub2RlLmdldENvbVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dVSUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEYXRhLm5ld0dhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImdhbWUtbG9zc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5ri45oiP5aSx6LSl55qE54q25oCBXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZnJvemVuQWxsRW5lbXkoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UoKTsgLy/npoHplKLmiYDmnInloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuZ2V0Q29tcG9uZW50KEhvbWVJY29uKS5mcm96ZW5Ib21lSWNvbigpO1xyXG4gICAgICAgICAgICBsZXQgZGVhZEVuZW15RGF0YSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXREZWFkRW5lbXlEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lTG9zc1VJKGRlYWRFbmVteURhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwic2hvdy1nYW1lLWxvc3MtdWlcIiwgZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIH0sIDAuNik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmICh1aUN0bCkge1xyXG4gICAgICAgIC8vICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LXVpLWVudGVyLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyZWVIb21lSWNvbm4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVXaW4oZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICAvL+a4uOaIj+iDnOWIqe+8jOi/m+WFpeS4i+S4gOWFs1xyXG4gICAgICAgIC8v6aaW5YWI5bGV56S66IOc5Yip5aSx6LSl6aG16Z2iXHJcbiAgICAgICAgLy8gdGhpc1xyXG4gICAgICAgIC8v5ri45oiP6IOc5YipXHJcbiAgICAgICAgLy8gdGhpcy51aWNcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwiY2xvc2UtYWxsLXVpXCIpOy8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNob3ctZ2FtZS1yZXN1bHRcIik7IC8v6L+b5YWl5pi+56S65ri45oiP57uT5p6c55qE55WM6Z2iXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LWdhbWUtd2luLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v5oqK5omA5pyJ55qEdG93ZXLpg73plIDmr4HmjonvvIxcclxuICAgICAgICAvL+aKiuW3puWPs+eahHRvd2VyIOeahOWfuuW6p+WIoOaOiVxyXG4gICAgfVxyXG4gICAgZW50ZXJHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJyZS1pbml0LXVpXCIpOyAvL+mHjeaWsOWIt+aWsFVJXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXItYnVpbGQtYmFzZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC1lbmVteVwiKTsgLy/plIDmr4HlvZPliY3nmoTmiYDmnInmlYzkurpcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJpbml0LWxldmVsLWxhYmVsXCIpOyAvL+WIneWni+WMluW9k+WJjeeahOWFs+WNoWxhYmVsXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLm5vZGUuZW1pdCgnaW5pdC11cGRhdGUtbGV2ZWwnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2VDdGwpLnNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0N1cnJlbnRMZXZlbEljb25BbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHNob3dDdXJyZW50TGV2ZWxJY29uQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aYvuekuuW9k+WJjeaYr+esrOS4gOWFs+eahGljb25cclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInNob3ctY3VycmVudC1sZXZlbC1pY29uLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVuZW15QXR0YWNrZWQobnVtOiBOdW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaVjOS6uuWPkeWKqOS6huaUu+WHu1wiLCBudW0pXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UmVkSGVhcnRDb3VudCA9IHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50UmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlZEhlYXJ0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkUmVkSGVhcnRDb3VudCgtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRSZWRIZWFydENvdW50KCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1sb3NzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlZmVyUmVkSGVhcmRVSSgpIHtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgfVxyXG4gICAgYWN0aXZlRW5lbXlTdWNjZXNzKGVuZW15VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmUgZW5lbXkgc3VjY2Nlc3NcIiwgZW5lbXlUeXBlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiXCIpXHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLWVuZW15LWluZm8tY2VsbFwiLCBlbmVteVR5cGUpO1xyXG5cclxuICAgIH1cclxuICAgIHJlZmVyUG93ZXJDb3VudExhYmVsKCl7XHJcbiAgICAgICAgLy/liLfmlrDlvZPliY3nmoQg6IO96YeP5YC8XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLWN1cnJlbnQtcG93ZXItbGFiZWxcIiwgdGhpcy5wbGF5ZXJEYXRhLmN1cnJlbnRQb3dlckNvdW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19