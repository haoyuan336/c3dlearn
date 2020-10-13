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
                _this5.node.emit('update-gold-label', _this5.playerData.getCurrentGoldCount());

                return _this5.showUIEnterAnim();
              }).then(function () {
                _this5.state.setState("run");

                _this5.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                  error: Error()
                }), EnemyController) : EnemyController).startGame(); // this.node.getComponent(GroundMapCtl).startGame();

              });
            });
            this.state.addState("game-loss", function () {
              console.log("进入游戏失败的状态");

              _this5.uiController.emit('close-weapon-info-layer');

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
                _this5.uiController.emit("show-game-loss-ui", deadEnemyData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJob21lSWNvblR3IiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFjdGl2ZSIsIm5vZGUiLCJlbWl0IiwiZ29sZENvdW50IiwiYWRkR29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwidGhlbiIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzZXRTdGF0ZSIsImdldENvbXBvbmVudCIsImNvbnRpbnVlR2FtZSIsImN1cnJlbnRHb2xkQ291bnQiLCJuZXdHYW1lIiwiZW50ZXJHYW1lIiwidWlDb250cm9sbGVyIiwic3RhcnRHYW1lIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VUlFbnRlckFuaW0iLCJmcm96ZW5BbGxFbmVteSIsImZyb3plbkFsbFRvd2VyQnVpbGRCYXNlIiwiZnJvemVuSG9tZUljb24iLCJkZWFkRW5lbXlEYXRhIiwiZ2V0RGVhZEVuZW15RGF0YSIsInNjaGVkdWxlT25jZSIsImhvbWVJY29uUHJlZmFiIiwiZ3JvdW5kTWFwQ3RsIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsImZyZWVIb21lSWNvbm4iLCJlYXNpbmciLCJza2VsZUFuaW0iLCJnZXRDaGlsZEJ5TmFtZSIsImRlZmF1bHRBbmltIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5IiwicmVzdWx0IiwiaSIsImNvbGxpZGVyIiwidXVpZCIsInJheWNhc3RSZXN1bHRzIiwiZHQiLCJjdXJyZW50TGV2ZWxOdW0iLCJ0YXJnZXRQb3MiLCJnb2xkQW5pbTNkUHJlZmFiIiwic2V0R29sZENvdW50IiwiZW50ZXJOZXh0TGV2ZWwiLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93Q3VycmVudExldmVsSWNvbkFuaW0iLCJudW0iLCJjdXJyZW50UmVkSGVhcnRDb3VudCIsImdldEN1cnJlbnRSZWRIZWFydENvdW50IiwiYWRkUmVkSGVhcnRDb3VudCIsImVuZW15VHlwZSIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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STs7Ozs7OztpQkFPRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBUd2VlbiwgSnNvbkFzc2V0LCBWZWMzLCB2MywgUGh5c2ljc1N5c3RlbSwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBmaW5kLCBQaHlzaWNzUmF5UmVzdWx0LCBWZWMyLCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZUN0bCB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2VDdGwnO1xyXG5pbXBvcnQgeyBQbGF5RGF0YSB9IGZyb20gJy4vRGF0YS9QbGF5ZXJEYXRhJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gJy4vSG9tZS9Ib21lSWNvbic7XHJcbi8vIGltcG9ydCB7IFdlYXBvbkluZm9DdGwgfSBmcm9tICcuL1dlYXBvbkluZm9DdGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8v6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY1k6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2Vyc1ByZWZhYkxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydEdhbWVCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50QWRkRW5lbXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gNDtcclxuICAgIC8vIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuZW15QmVMb2NrTWF4TnVtOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIHB1YmxpYyBjdXJyZW50TGV2ZWxOdW06IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1aUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBwbGF0ZTogTm9kZSA9IG51bGw7IC8v5pif55CDXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVN0YXJ0QnV0dG9uQmFzZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgaG9tZUljb25QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhvbWVJY29uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllckRhdGE6IFBsYXlEYXRhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb2xkQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaG9tZUljb25UdzogVHdlZW4gPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YSA9IG5ldyBQbGF5RGF0YSh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucGxhdGUpO1xyXG4gICAgICAgIHR3LnJlcGVhdEZvcmV2ZXIobmV3IFR3ZWVuKHRoaXMucGxhdGUpLnRvKDIwLCB7IGV1bGVyQW5nbGVzOiB2MygwLCAzNjAsIDApIH0pLnNldCh7IGV1bGVyQW5nbGVzOiB2MygwLCAwLCAwKSB9KSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihbdjMoMCwgMCwgMCksIHYzKDEwLCAzMCwgMTApLCB2MygyMCwgMywgMCksdjMoMjAsIDEwMCwgMzApXSk7XHJcbiAgICAgICAgLy8gbGV0IHBvaW50TGlzdDogVmVjM1tdID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb2ludFwiLCBwb2ludExpc3QpO1xyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnRlc3ROb2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0dy50bygwLjIsIHsgcG9zaXRpb246IHBvaW50TGlzdFtpXSB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGVzdE5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXItYnVpbGQtYmFzZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC1lbmVteVwiLCAoZ29sZENvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcIlwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMucGxheWVyRGF0YS5jdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDph43or5XkuIDmrKHnmoTmjInpkq5cclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtID0gMFxyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5uZXdHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgc3RhdGUgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmdldENvbXBvbmVudChXZWFwb25JbmZvQ3RsKS5pbml0V2VhcG9uRGF0YSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJidWlsZC1vbmUtdG93ZXJcIiwgKGluZGV4LCB0b3dlckJhc2VOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bu66YCg5LiA5bqn5aGUXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJjb21wbGV0ZS1jdXJyZW50LWd1aWRlXCIpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnRvd2Vyc1ByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJzUHJlZmFiTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnSnNvbi5qc29uLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB2Myh0b3dlckJhc2VOb2RlLnBvc2l0aW9uLngsIDAsIHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0b3dlckJhc2VOb2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkuc2V0VGFyZ2V0VG93ZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnNldFRvd2VyQnVpbGRCYXNlKHRvd2VyQmFzZU5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueOqeWutueCueS4reS6huW8gOWni+a4uOaIj+aMiemSrlwiKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcImNvbXBsZXRlLWN1cnJlbnQtZ3VpZGVcIik7IFxyXG4gICAgICAgICAgICAvL+e7mXVp5o6n5Yi25Zmo5Y+R6YCB77yM5a6M5oiQ5LqG5b2T5YmN55qE5byV5a+85pON5L2cXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIuaMiemSrumfs+aViFwiKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInBsYXktYmctbXVzaWNcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnN0YXJ0R2FtZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IHYzKDAsIC0xMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2hvd0dyb3VuZEVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8v5bGV56S65aGU55qE5Z+65bqn5Ye6546w55qE5Yqo55S7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93VUlFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJnYW1lLWxvc3NcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpea4uOaIj+Wksei0peeahOeKtuaAgVwiKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdCgnY2xvc2Utd2VhcG9uLWluZm8tbGF5ZXInKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmZyb3plbkFsbEVuZW15KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2VDdGwpLmZyb3plbkFsbFRvd2VyQnVpbGRCYXNlKCk7IC8v56aB6ZSi5omA5pyJ5aGU55qE5Z+65bqnXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaG9tZUljb25Udy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmdldENvbXBvbmVudChIb21lSWNvbikuZnJvemVuSG9tZUljb24oKTtcclxuICAgICAgICAgICAgbGV0IGRlYWRFbmVteURhdGEgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZ2V0RGVhZEVuZW15RGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5zaG93R2FtZUxvc3NVSShkZWFkRW5lbXlEYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInNob3ctZ2FtZS1sb3NzLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgICAgICB9LCAwLjYpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IHVpQ3RsID0gZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKTtcclxuICAgICAgICAvLyBpZiAodWlDdGwpIHtcclxuICAgICAgICAvLyAgICAgdWlDdGwuc2hvd1VJRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMudWlDb250cm9sbGVyLnNob3dVSUVudGVyQW5pbSgpXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwic2hvdy11aS1lbnRlci1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIHNob3dHcm91bmRNYXBFbnRlckFuaW0oKXtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcGxheWVyVG91Y2hPblNraWxsTm9kZShza2lsbE5vZGU6IE5vZGUsIHRhcmdldFRvd2VyOiBOb2RlKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dIb21lSWNvbkVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuaG9tZUljb25QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JvdW5kTWFwQ3RsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdW5kTWFwQ3RsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKDUsIDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDIwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuZ2V0Q29tcG9uZW50KEhvbWVJY29uKS5mcmVlSG9tZUljb25uKCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuaG9tZUljb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaG9tZUljb25UdyA9IHR3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMiwgeyBwb3NpdGlvbjogdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZUFuaW0gPSB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIlN0YXJ0R2FtZUJ1dHRvblwiKS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFuaW0gPSBza2VsZUFuaW0uZGVmYXVsdENsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0QW5pbVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxlQW5pbS5nZXRTdGF0ZShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHNrZWxlQW5pbS5wbGF5KGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyVG91Y2gzZE9iamVjdChyZXN1bHQ6IFBoeXNpY3NSYXlSZXN1bHRbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IHJlc3VsdFtpXS5jb2xsaWRlcjtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZS51dWlkID09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInRvdWNoLXNjcmVlbi10by0zZFwiLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RSZXN1bHRzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUN0bC5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRHYW1lQ29uZmlnKCk6IEpzb25Bc3NldCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNvbmZpZ0pzb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudExldmVsTnVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtO1xyXG4gICAgfVxyXG4gICAgc2hvd0FkZEdvbGRBbmltRWZmZWN0KGdvbGRDb3VudDogbnVtYmVyLCB0YXJnZXRQb3M6IFZlYzMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ29sZEFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2luR29sZEFuaW1FZmZlY3QpLnNldEdvbGRDb3VudChnb2xkQ291bnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSB0YXJnZXRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Jvc3NFbnRlclN0YXRlKCkge1xyXG4gICAgICAgIC8vIGZvciAoKXtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8v6L+b5YWl5bGV56S6Ym9zcyDov5vlnLrnmoTnirbmgIFcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcInNob3ctYm9zcy1lbnRlci1zdGF0ZVwiKTtcclxuICAgIH1cclxuIFxyXG4gICAgZ2FtZVdpbihkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIC8v5ri45oiP6IOc5Yip77yM6L+b5YWl5LiL5LiA5YWzXHJcbiAgICAgICAgLy/pppblhYjlsZXnpLrog5zliKnlpLHotKXpobXpnaJcclxuICAgICAgICAvLyB0aGlzXHJcbiAgICAgICAgLy/muLjmiI/og5zliKlcclxuICAgICAgICAvLyB0aGlzLnVpY1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJjbG9zZS1hbGwtdWlcIikgOy8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNob3ctZ2FtZS1yZXN1bHRcIik7IC8v6L+b5YWl5pi+56S65ri45oiP57uT5p6c55qE55WM6Z2iXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LWdhbWUtd2luLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v5oqK5omA5pyJ55qEdG93ZXLpg73plIDmr4HmjonvvIxcclxuICAgICAgICAvL+aKiuW3puWPs+eahHRvd2VyIOeahOWfuuW6p+WIoOaOiVxyXG4gICAgfVxyXG4gICAgZW50ZXJHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJyZS1pbml0LXVpXCIpOyAvL+mHjeaWsOWIt+aWsFVJXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXItYnVpbGQtYmFzZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC1lbmVteVwiKTsgLy/plIDmr4HlvZPliY3nmoTmiYDmnInmlYzkurpcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJpbml0LWxldmVsLWxhYmVsXCIpOyAvL+WIneWni+WMluW9k+WJjeeahOWFs+WNoWxhYmVsXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLm5vZGUuZW1pdCgnaW5pdC11cGRhdGUtbGV2ZWwnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2VDdGwpLnNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0N1cnJlbnRMZXZlbEljb25BbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHNob3dDdXJyZW50TGV2ZWxJY29uQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aYvuekuuW9k+WJjeaYr+esrOS4gOWFs+eahGljb25cclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInNob3ctY3VycmVudC1sZXZlbC1pY29uLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVuZW15QXR0YWNrZWQobnVtOiBOdW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaVjOS6uuWPkeWKqOS6huaUu+WHu1wiLCBudW0pXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJEYXRhLmFkZFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UmVkSGVhcnRDb3VudCA9IHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50UmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlZEhlYXJ0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkUmVkSGVhcnRDb3VudCgtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRSZWRIZWFydENvdW50KCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1sb3NzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlZmVyUmVkSGVhcmRVSSgpIHtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgfVxyXG4gICAgYWN0aXZlRW5lbXlTdWNjZXNzKGVuZW15VHlwZTogc3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZSBlbmVteSBzdWNjY2Vzc1wiLCBlbmVteVR5cGUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJcIilcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIGVuZW15VHlwZSk7XHJcblxyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=