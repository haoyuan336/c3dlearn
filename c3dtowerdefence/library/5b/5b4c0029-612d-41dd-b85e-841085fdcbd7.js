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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJob21lSWNvblR3IiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFjdGl2ZSIsIm5vZGUiLCJlbWl0IiwiZ29sZENvdW50IiwiYWRkR29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwidGhlbiIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzZXRTdGF0ZSIsImdldENvbXBvbmVudCIsImNvbnRpbnVlR2FtZSIsImN1cnJlbnRHb2xkQ291bnQiLCJuZXdHYW1lIiwiZW50ZXJHYW1lIiwidWlDb250cm9sbGVyIiwic3RhcnRHYW1lIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VUlFbnRlckFuaW0iLCJmcm96ZW5BbGxFbmVteSIsImZyb3plbkFsbFRvd2VyQnVpbGRCYXNlIiwiZnJvemVuSG9tZUljb24iLCJkZWFkRW5lbXlEYXRhIiwiZ2V0RGVhZEVuZW15RGF0YSIsInNjaGVkdWxlT25jZSIsImhvbWVJY29uUHJlZmFiIiwiZ3JvdW5kTWFwQ3RsIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsImZyZWVIb21lSWNvbm4iLCJlYXNpbmciLCJza2VsZUFuaW0iLCJnZXRDaGlsZEJ5TmFtZSIsImRlZmF1bHRBbmltIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5IiwicmVzdWx0IiwiaSIsImNvbGxpZGVyIiwidXVpZCIsInJheWNhc3RSZXN1bHRzIiwiZHQiLCJjdXJyZW50TGV2ZWxOdW0iLCJ0YXJnZXRQb3MiLCJnb2xkQW5pbTNkUHJlZmFiIiwic2V0R29sZENvdW50IiwiZW50ZXJOZXh0TGV2ZWwiLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93Q3VycmVudExldmVsSWNvbkFuaW0iLCJudW0iLCJjdXJyZW50UmVkSGVhcnRDb3VudCIsImdldEN1cnJlbnRSZWRIZWFydENvdW50IiwiYWRkUmVkSGVhcnRDb3VudCIsImVuZW15VHlwZSIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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NEQsb0JBQW9CLEdBQUcsS0FBSzdGLFVBQUwsQ0FBZ0I4Rix1QkFBaEIsRUFBM0I7O0FBQ0Esa0JBQUlELG9CQUFvQixHQUFHLENBQTNCLEVBQThCO0FBQzFCLHFCQUFLN0YsVUFBTCxDQUFnQitGLGdCQUFoQixDQUFpQyxDQUFDLENBQWxDOztBQUNBLG9CQUFJLEtBQUsvRixVQUFMLENBQWdCOEYsdUJBQWhCLE9BQThDLENBQWxELEVBQXFEO0FBQ2pEL0Qsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSx1QkFBS2xDLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0IsV0FBcEI7QUFDSDtBQUNKO0FBQ0o7QUFFSjs7OzRDQUNpQjtBQUNkLGlCQUFLTSxZQUFMLENBQWtCWixJQUFsQixDQUF1Qix1QkFBdkI7QUFDSDs7OzZDQUNrQmtGLFMsRUFBa0I7QUFDakNqRSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ2dFLFNBQXJDLEVBRGlDLENBRWpDO0FBQ0E7O0FBQ0EsaUJBQUt0RSxZQUFMLENBQWtCWixJQUFsQixDQUF1Qix1QkFBdkIsRUFBZ0RrRixTQUFoRDtBQUNIOzs7O1FBM1krQnpILFMsV0FFbEIwSCxJLEdBQWUsQ0FBQyxDLFVBaUJoQkMsaUIsR0FBNEIsQzs7Ozs7aUJBZEwsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdELEU7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFXSCxJOzs7Ozs7O2lCQUdQLEk7Ozs7Ozs7aUJBRWMsSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQU9FLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFR3ZWVuLCBKc29uQXNzZXQsIFZlYzMsIHYzLCBQaHlzaWNzU3lzdGVtLCBDb2xsaWRlckNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGZpbmQsIFBoeXNpY3NSYXlSZXN1bHQsIFZlYzIsIGlzVmFsaWQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZSB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2UvVG93ZXJCdWlsZEJhc2UnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmosIEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlQ3RsIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZUN0bCc7XHJcbmltcG9ydCB7IFBsYXlEYXRhIH0gZnJvbSAnLi9EYXRhL1BsYXllckRhdGEnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSAnLi9Ib21lL0hvbWVJY29uJztcclxuLy8gaW1wb3J0IHsgV2VhcG9uSW5mb0N0bCB9IGZyb20gJy4vV2VhcG9uSW5mb0N0bCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy/ph43lipvliqDpgJ/luqZcclxuICAgIHB1YmxpYyBzdGF0aWMgYWNjWTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJzUHJlZmFiTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0R2FtZUJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSA0O1xyXG4gICAgLy8gcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXlCZUxvY2tNYXhOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRMZXZlbE51bTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHVpQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHBsYXRlOiBOb2RlID0gbnVsbDsgLy/mmJ/nkINcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lU3RhcnRCdXR0b25CYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBob21lSWNvblByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaG9tZUljb25Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyRGF0YTogUGxheURhdGEgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGdvbGRBbmltM2RQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBob21lSWNvblR3OiBUd2VlbiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyB0ZXN0Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhID0gbmV3IFBsYXlEYXRhKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5wbGF0ZSk7XHJcbiAgICAgICAgdHcucmVwZWF0Rm9yZXZlcihuZXcgVHdlZW4odGhpcy5wbGF0ZSkudG8oMjAsIHsgZXVsZXJBbmdsZXM6IHYzKDAsIDM2MCwgMCkgfSkuc2V0KHsgZXVsZXJBbmdsZXM6IHYzKDAsIDAsIDApIH0pKVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFt2MygwLCAwLCAwKSwgdjMoMTAsIDMwLCAxMCksIHYzKDIwLCAzLCAwKSx2MygyMCwgMTAwLCAzMCldKTtcclxuICAgICAgICAvLyBsZXQgcG9pbnRMaXN0OiBWZWMzW10gPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50XCIsIHBvaW50TGlzdCk7XHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMudGVzdE5vZGUpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDAuMiwgeyBwb3NpdGlvbjogcG9pbnRMaXN0W2ldIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXN0Tm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5yZXBlYXRGb3JldmVyKCk7XHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NhdmVMaWZlQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqGIOeri+WNs+Wkjea0u+aMiemSrlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlclwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlci1idWlsZC1iYXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIsIChnb2xkQ291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoZ29sZENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuY29udGludWVHYW1lKCk7IC8v57un57ut5ri45oiPXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7IC8v6ZSA5q+B5b2T5YmN55qE5omA5pyJ5pWM5Lq6XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiaW5pdC1sZXZlbC1sYWJlbFwiKTsgLy/liJ3lp4vljJblvZPliY3nmoTlhbPljaFsYWJlbFxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5ub2RlLmVtaXQoJ2luaXQtdXBkYXRlLWxldmVsJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW50ZXJHYW1lKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHBsYXllckNsaWNrU2hhcmVCdXR0b24oKSB7XHJcbiAgICAgICAgLy/njqnlrrbngrnlh7vkuobliIbkuqvmjInpkq5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRGF0YS5hZGRHb2xkQ291bnQodGhpcy5wbGF5ZXJEYXRhLmN1cnJlbnRHb2xkQ291bnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1JldHJ5QnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqGIOmHjeivleS4gOasoeeahOaMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhLm5ld0dhbWUoKTtcclxuICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBzdGF0ZSBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFdlYXBvbkluZm9DdGwpLmluaXRXZWFwb25EYXRhKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJ1aWxkLW9uZS10b3dlclwiLCAoaW5kZXgsIHRvd2VyQmFzZU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/lu7rpgKDkuIDluqfloZRcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy50b3dlcnNQcmVmYWJMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2Vyc1ByZWZhYkxpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZ0pzb24uanNvbiwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjModG93ZXJCYXNlTm9kZS5wb3NpdGlvbi54LCAwLCB0b3dlckJhc2VOb2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdG93ZXJCYXNlTm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnNldFRhcmdldFRvd2VyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zZXRUb3dlckJ1aWxkQmFzZSh0b3dlckJhc2VOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnjqnlrrbngrnkuK3kuoblvIDlp4vmuLjmiI/mjInpkq5cIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnN0YXJ0R2FtZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IHYzKDAsIC0xMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2hvd0dyb3VuZEVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8v5bGV56S65aGU55qE5Z+65bqn5Ye6546w55qE5Yqo55S7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93VUlFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJnYW1lLWxvc3NcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpea4uOaIj+Wksei0peeahOeKtuaAgVwiKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdCgnY2xvc2Utd2VhcG9uLWluZm8tbGF5ZXInKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZnJvemVuQWxsRW5lbXkoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UoKTsgLy/npoHplKLmiYDmnInloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3LnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuZ2V0Q29tcG9uZW50KEhvbWVJY29uKS5mcm96ZW5Ib21lSWNvbigpO1xyXG4gICAgICAgICAgICBsZXQgZGVhZEVuZW15RGF0YSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXREZWFkRW5lbXlEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lTG9zc1VJKGRlYWRFbmVteURhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwic2hvdy1nYW1lLWxvc3MtdWlcIiwgZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIH0sIDAuNik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmICh1aUN0bCkge1xyXG4gICAgICAgIC8vICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LXVpLWVudGVyLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyZWVIb21lSWNvbm4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBnYW1lV2luKGRlYWRFbmVteURhdGE6IERlYWRFbmVteU9ialtdKSB7XHJcbiAgICAgICAgLy/muLjmiI/og5zliKnvvIzov5vlhaXkuIvkuIDlhbNcclxuICAgICAgICAvL+mmluWFiOWxleekuuiDnOWIqeWksei0pemhtemdolxyXG4gICAgICAgIC8vIHRoaXNcclxuICAgICAgICAvL+a4uOaIj+iDnOWIqVxyXG4gICAgICAgIC8vIHRoaXMudWljXHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcImNsb3NlLWFsbC11aVwiKSA7Ly/ph43mlrDliLfmlrBVSVxyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoJ2Nsb3NlLXdlYXBvbi1pbmZvLWxheWVyJylcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwic2hvdy1nYW1lLXJlc3VsdFwiKTsgLy/ov5vlhaXmmL7npLrmuLjmiI/nu5PmnpznmoTnlYzpnaJcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuc2hvd0dhbWVXaW5VSShkZWFkRW5lbXlEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuZW1pdChcInNob3ctZ2FtZS13aW4tdWlcIiwgZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGVudGVyTmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5lbnRlck5leHRMZXZlbCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeS4i+S4gOWFs1wiKVxyXG4gICAgICAgIHRoaXMuZW50ZXJHYW1lKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy/miormiYDmnInnmoR0b3dlcumDvemUgOavgeaOie+8jFxyXG4gICAgICAgIC8v5oqK5bem5Y+z55qEdG93ZXIg55qE5Z+65bqn5Yig5o6JXHJcbiAgICB9XHJcbiAgICBlbnRlckdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5ob21lSWNvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcInJlLWluaXQtdWlcIik7IC8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlci1idWlsZC1iYXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIpOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudExldmVsSWNvbkFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0N1cnJlbnRMZXZlbEljb25BbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pi+56S65b2T5YmN5piv56ys5LiA5YWz55qEaWNvblxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwic2hvdy1jdXJyZW50LWxldmVsLWljb24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZW5lbXlBdHRhY2tlZChudW06IE51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pWM5Lq65Y+R5Yqo5LqG5pS75Ye7XCIsIG51bSlcclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuYWRkXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWRIZWFydENvdW50ID0gdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UmVkSGVhcnRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRGF0YS5hZGRSZWRIZWFydENvdW50KC0xKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudFJlZEhlYXJ0Q291bnQoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVmZXJSZWRIZWFyZFVJKCkge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICB9XHJcbiAgICBhY3RpdmVFbmVteVN1Y2Nlc3MoZW5lbXlUeXBlOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZlIGVuZW15IHN1Y2NjZXNzXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcIlwiKVxyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJyZWZlci1lbmVteS1pbmZvLWNlbGxcIiwgZW5lbXlUeXBlKTtcclxuICAgIH1cclxufVxyXG4iXX0=