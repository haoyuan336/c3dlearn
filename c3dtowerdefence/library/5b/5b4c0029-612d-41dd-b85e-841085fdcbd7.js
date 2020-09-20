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
          key: "enemyAttacked",
          value: function enemyAttacked() {
            var _this9 = this;

            //敌人发动了攻击'
            if (this.state.getState() === 'run') {
              this.state.setState("game-loss");
              this.uiController.emit('close-weapon-info-layer');
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
                // this.uiController.showGameLossUI(deadEnemyData)
                _this9.uiController.emit("show-game-loss-ui", deadEnemyData);
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
            var _this10 = this;

            this.playerData.enterNextLevel();
            console.log("进入下一关");
            this.enterGame().then(function () {
              _this10.node.emit('update-gold-label', _this10.playerData.getCurrentGoldCount());

              _this10.state.setState("run");

              _this10.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).startGame();
            }); //把所有的tower都销毁掉，
            //把左右的tower 的基座删掉
          }
        }, {
          key: "enterGame",
          value: function enterGame() {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              if (isValid(_this11.homeIconNode)) {
                _this11.homeIconNode.active = false;
              }

              _this11.node.emit("destroy-all-tower");

              _this11.node.emit("destroy-all-tower-build-base");

              _this11.node.emit("destroy-all-enemy"); //销毁当前的所有敌人


              _this11.node.emit("init-level-label"); //初始化当前的关卡label
              // this.uiController.node.emit('init-update-level');


              _this11.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                error: Error()
              }), TowerBuildBaseCtl) : TowerBuildBaseCtl).showTowerBuildBaseEnterAnim().then(function () {
                return _this11.showHomeIconEnterAnim();
              }).then(function () {
                return _this11.showCurrentLevelIconAnim();
              }).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "showCurrentLevelIconAnim",
          value: function showCurrentLevelIconAnim() {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              //显示当前是第一关的icon
              _this12.uiController.emit("show-current-level-icon-anim", function () {
                if (resolve) {
                  resolve();
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJob21lSWNvblR3IiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFjdGl2ZSIsIm5vZGUiLCJlbWl0IiwiZ29sZENvdW50IiwiYWRkR29sZENvdW50Iiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwidGhlbiIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzZXRTdGF0ZSIsImdldENvbXBvbmVudCIsImNvbnRpbnVlR2FtZSIsImN1cnJlbnRHb2xkQ291bnQiLCJuZXdHYW1lIiwiZW50ZXJHYW1lIiwic3RhcnRHYW1lIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VUlFbnRlckFuaW0iLCJ1aUNvbnRyb2xsZXIiLCJob21lSWNvblByZWZhYiIsImdyb3VuZE1hcEN0bCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJmcmVlSG9tZUljb25uIiwiZWFzaW5nIiwic2tlbGVBbmltIiwiZ2V0Q2hpbGRCeU5hbWUiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwiYW5pbVN0YXRlIiwibmFtZSIsInJlcGVhdENvdW50IiwicGxheSIsInNjaGVkdWxlT25jZSIsInJlc3VsdCIsImkiLCJjb2xsaWRlciIsInV1aWQiLCJyYXljYXN0UmVzdWx0cyIsImR0IiwiY3VycmVudExldmVsTnVtIiwidGFyZ2V0UG9zIiwiZ29sZEFuaW0zZFByZWZhYiIsInNldEdvbGRDb3VudCIsImZyb3plbkFsbEVuZW15IiwiZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UiLCJmcm96ZW5Ib21lSWNvbiIsImRlYWRFbmVteURhdGEiLCJnZXREZWFkRW5lbXlEYXRhIiwiZW50ZXJOZXh0TGV2ZWwiLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93Q3VycmVudExldmVsSWNvbkFuaW0iLCJhY2NZIiwiZW5lbXlCZUxvY2tNYXhOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMs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LENBQWUsa0JBQWYsRUFQb0MsQ0FPQTtBQUNwQzs7O0FBRUEsY0FBQSxPQUFJLENBQUNELElBQUwsQ0FBVVEsWUFBVjtBQUFBO0FBQUEsMERBQTBDcUUsMkJBQTFDLEdBQXdFeEUsSUFBeEUsQ0FBNkUsWUFBTTtBQUMvRSx1QkFBTyxPQUFJLENBQUNELHFCQUFMLEVBQVA7QUFDSCxlQUZELEVBRUdDLElBRkgsQ0FFUSxZQUFNO0FBQ1YsdUJBQU8sT0FBSSxDQUFDeUUsd0JBQUwsRUFBUDtBQUNILGVBSkQsRUFJR3pFLElBSkgsQ0FJUSxZQUFNO0FBQ1ZSLGdCQUFBQSxPQUFPO0FBQ1YsZUFORDtBQU9ILGFBakJNLENBQVA7QUFtQkg7OztxREFDMEI7QUFBQTs7QUFDdkIsbUJBQU8sSUFBSUQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQztBQUNBLGNBQUEsT0FBSSxDQUFDK0MsWUFBTCxDQUFrQjVDLElBQWxCLENBQXVCLDhCQUF2QixFQUF1RCxZQUFNO0FBQ3pELG9CQUFJSixPQUFKLEVBQWE7QUFDVEEsa0JBQUFBLE9BQU87QUFDVjtBQUNKLGVBSkQ7QUFLSCxhQVBNLENBQVA7QUFRSDs7OztRQW5YK0JuQyxTLFdBRWxCcUgsSSxHQUFlLENBQUMsQyxVQWlCaEJDLGlCLEdBQTRCLEM7Ozs7O2lCQWRMLEk7Ozs7Ozs7aUJBR0YsSTs7Ozs7OztpQkFHRCxFOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBV0gsSTs7Ozs7OztpQkFHUCxJOzs7Ozs7O2lCQUVjLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFPRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBUd2VlbiwgSnNvbkFzc2V0LCBWZWMzLCB2MywgUGh5c2ljc1N5c3RlbSwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBmaW5kLCBQaHlzaWNzUmF5UmVzdWx0LCBWZWMyLCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZUN0bCB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2VDdGwnO1xyXG5pbXBvcnQgeyBQbGF5RGF0YSB9IGZyb20gJy4vRGF0YS9QbGF5ZXJEYXRhJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gJy4vSG9tZS9Ib21lSWNvbic7XHJcbi8vIGltcG9ydCB7IFdlYXBvbkluZm9DdGwgfSBmcm9tICcuL1dlYXBvbkluZm9DdGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8v6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY1k6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2Vyc1ByZWZhYkxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydEdhbWVCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50QWRkRW5lbXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gNDtcclxuICAgIC8vIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuZW15QmVMb2NrTWF4TnVtOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIHB1YmxpYyBjdXJyZW50TGV2ZWxOdW06IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB1aUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBwbGF0ZTogTm9kZSA9IG51bGw7IC8v5pif55CDXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVN0YXJ0QnV0dG9uQmFzZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgaG9tZUljb25QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhvbWVJY29uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllckRhdGE6IFBsYXlEYXRhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb2xkQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaG9tZUljb25UdzogVHdlZW4gPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YSA9IG5ldyBQbGF5RGF0YSh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmV1bGVyQW5nbGVzXHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMucGxhdGUpO1xyXG4gICAgICAgIHR3LnJlcGVhdEZvcmV2ZXIobmV3IFR3ZWVuKHRoaXMucGxhdGUpLnRvKDIwLCB7IGV1bGVyQW5nbGVzOiB2MygwLCAzNjAsIDApIH0pLnNldCh7IGV1bGVyQW5nbGVzOiB2MygwLCAwLCAwKSB9KSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihbdjMoMCwgMCwgMCksIHYzKDEwLCAzMCwgMTApLCB2MygyMCwgMywgMCksdjMoMjAsIDEwMCwgMzApXSk7XHJcbiAgICAgICAgLy8gbGV0IHBvaW50TGlzdDogVmVjM1tdID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb2ludFwiLCBwb2ludExpc3QpO1xyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnRlc3ROb2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0dy50bygwLjIsIHsgcG9zaXRpb246IHBvaW50TGlzdFtpXSB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGVzdE5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXJcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1hbGwtdG93ZXItYnVpbGQtYmFzZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC1lbmVteVwiLCAoZ29sZENvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KGdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmNvbnRpbnVlR2FtZSgpOyAvL+e7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcIlwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRhdGEuYWRkR29sZENvdW50KHRoaXMucGxheWVyRGF0YS5jdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpIHtcclxuICAgICAgICAvL+eOqeWutueCueWHu+S6hiDph43or5XkuIDmrKHnmoTmjInpkq5cclxuICAgICAgICAvLyB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtID0gMFxyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5uZXdHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbnRlckdhbWUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgc3RhdGUgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLmdldENvbXBvbmVudChXZWFwb25JbmZvQ3RsKS5pbml0V2VhcG9uRGF0YSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJidWlsZC1vbmUtdG93ZXJcIiwgKGluZGV4LCB0b3dlckJhc2VOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bu66YCg5LiA5bqn5aGUXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMudG93ZXJzUHJlZmFiTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlcnNQcmVmYWJMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uLmpzb24sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHYzKHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueCwgMCwgdG93ZXJCYXNlTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRvd2VyQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS5zZXRUYXJnZXRUb3dlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCYXNlTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a6254K55Lit5LqG5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5zdGFydEdhbWVCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiB2MygwLCAtMTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNob3dHcm91bmRFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWhlOeahOWfuuW6p+WHuueOsOeahOWKqOeUu1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50ZXJHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gcmV0dXJuIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1VJRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmICh1aUN0bCkge1xyXG4gICAgICAgIC8vICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LXVpLWVudGVyLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyZWVIb21lSWNvbm4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ob21lSWNvblR3ID0gdHc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG4gICAgZW5lbXlBdHRhY2tlZCgpIHtcclxuICAgICAgICAvL+aVjOS6uuWPkeWKqOS6huaUu+WHuydcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZ2FtZS1sb3NzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5mcm96ZW5BbGxFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5mcm96ZW5BbGxUb3dlckJ1aWxkQmFzZSgpOyAvL+emgemUouaJgOacieWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhvbWVJY29uVHcuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5nZXRDb21wb25lbnQoSG9tZUljb24pLmZyb3plbkhvbWVJY29uKCk7XHJcbiAgICAgICAgICAgIGxldCBkZWFkRW5lbXlEYXRhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmdldERlYWRFbmVteURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIuc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LWdhbWUtbG9zcy11aVwiLCBkZWFkRW5lbXlEYXRhKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGdhbWVXaW4oZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICAvL+a4uOaIj+iDnOWIqe+8jOi/m+WFpeS4i+S4gOWFs1xyXG4gICAgICAgIC8v6aaW5YWI5bGV56S66IOc5Yip5aSx6LSl6aG16Z2iXHJcbiAgICAgICAgLy8gdGhpc1xyXG4gICAgICAgIC8v5ri45oiP6IOc5YipXHJcbiAgICAgICAgLy8gdGhpcy51aWNcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KCdjbG9zZS13ZWFwb24taW5mby1sYXllcicpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNob3ctZ2FtZS1yZXN1bHRcIik7IC8v6L+b5YWl5pi+56S65ri45oiP57uT5p6c55qE55WM6Z2iXHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLmVtaXQoXCJzaG93LWdhbWUtd2luLXVpXCIsIGRlYWRFbmVteURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEuZW50ZXJOZXh0TGV2ZWwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICB0aGlzLmVudGVyR2FtZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v5oqK5omA5pyJ55qEdG93ZXLpg73plIDmr4HmjonvvIxcclxuICAgICAgICAvL+aKiuW3puWPs+eahHRvd2VyIOeahOWfuuW6p+WIoOaOiVxyXG4gICAgfVxyXG4gICAgZW50ZXJHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlci1idWlsZC1iYXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLWVuZW15XCIpOyAvL+mUgOavgeW9k+WJjeeahOaJgOacieaVjOS6ulxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImluaXQtbGV2ZWwtbGFiZWxcIik7IC8v5Yid5aeL5YyW5b2T5YmN55qE5YWz5Y2hbGFiZWxcclxuICAgICAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIubm9kZS5lbWl0KCdpbml0LXVwZGF0ZS1sZXZlbCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudExldmVsSWNvbkFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0N1cnJlbnRMZXZlbEljb25BbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pi+56S65b2T5YmN5piv56ys5LiA5YWz55qEaWNvblxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5lbWl0KFwic2hvdy1jdXJyZW50LWxldmVsLWljb24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=