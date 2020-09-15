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
          key: "start",
          value: function start() {
            var _this2 = this;

            PhysicsSystem.instance.enable = true; // Your initialization goes here.

            this.state.addState("ready", function () {
              console.log("enter state ", _this2.state.getState());
            });
            this.state.setState("ready");
            this.node.on("build-one-tower", function (index, towerBaseNode) {
              //建造一座塔
              if (index < _this2.towersPrefabList.length) {
                var node = instantiate(_this2.towersPrefabList[index]);
                node.parent = _this2.node;
                node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).init(_this2.gameConfigJson.json);
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
              _this2.playStatrButtonPressAnim().then(function () {
                return new Promise(function (resolve, reject) {
                  var tw = new Tween(_this2.startGameButton).by(1, {
                    position: v3(0, -10, 0)
                  }).call(function () {
                    console.log('play over');

                    _this2.startGameButton.destroy();

                    resolve();
                  }).start();
                });
              }).then(function () {
                var tw = new Tween(_this2.gameStartButtonBase);
                tw.to(0.2, {
                  scale: v3(0, 0, 0)
                });
                tw.call(function () {
                  _this2.gameStartButtonBase.destroy();
                });
                tw.start();
                return _this2.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                  error: Error()
                }), GroundMapCtl) : GroundMapCtl).showGroundEnterAnim();
              }).then(function () {
                return _this2.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
                  error: Error()
                }), TowerBuildBaseCtl) : TowerBuildBaseCtl).showTowerBuildBaseEnterAnim(); //展示塔的基座出现的动画
              }).then(function () {
                return _this2.showHomeIconEnterAnim();
              }).then(function () {
                // return this.node.getCom
                _this2.node.emit('update-gold-label', _this2.playerData.getCurrentGoldCount());

                return _this2.showUIEnterAnim();
              }).then(function () {
                _this2.state.setState("run");

                _this2.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
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
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              if (!isValid(_this3.homeIconNode)) {
                _this3.homeIconNode = instantiate(_this3.homeIconPrefab);
                _this3.homeIconNode.parent = _this3.node;
              }

              var groundMapCtl = _this3.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl);

              if (groundMapCtl) {
                var node = groundMapCtl.getMapNodeList().getValue(5, 5);
                _this3.homeIconNode.position = v3(node.position.x, 20, node.position.z);
                node.active = false;
                var tw = new Tween(_this3.homeIconNode); // this.homeIconTw = tw;

                _this3.homeIconNode.active = true;
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
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var skeleAnim = _this4.startGameButton.getChildByName("StartGameButton").getComponent(SkeletalAnimationComponent);

              if (skeleAnim) {
                var defaultAnim = skeleAnim.defaultClip; // defaultAnim

                var animState = skeleAnim.getState(defaultAnim.name);
                animState.repeatCount = 1;
                var length = animState.length;
                skeleAnim.play(defaultAnim.name);

                _this4.scheduleOnce(function () {
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
            var _this5 = this;

            //敌人发动了攻击
            this.state.setState("game-loss");
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
              _this5.uiController.showGameLossUI(deadEnemyData);
            }, 1);
          }
        }, {
          key: "gameWin",
          value: function gameWin(deadEnemyData) {
            //游戏胜利，进入下一关
            //首先展示胜利失败页面
            // this
            //游戏胜利
            // this.uic
            this.state.setState("show-game-result"); //进入显示游戏结果的界面

            this.uiController.showGameWinUI(deadEnemyData);
          }
        }, {
          key: "enterNextLevel",
          value: function enterNextLevel() {
            var _this6 = this;

            console.log("进入下一关");

            if (isValid(this.homeIconNode)) {
              this.homeIconNode.active = false;
            }

            this.node.emit("destroy-all-tower");
            this.node.emit("destroy-all-tower-build-base");
            this.playerData.enterNextLevel();
            this.node.getComponent(_crd && TowerBuildBaseCtl === void 0 ? (_reportPossibleCrUseOfTowerBuildBaseCtl({
              error: Error()
            }), TowerBuildBaseCtl) : TowerBuildBaseCtl).showTowerBuildBaseEnterAnim().then(function () {
              return _this6.showHomeIconEnterAnim();
            }).then(function () {
              _this6.node.emit('update-gold-label', _this6.playerData.getCurrentGoldCount());

              _this6.state.setState("run");

              _this6.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController).startGame();
            }); //把所有的tower都销毁掉，
            //把左右的tower 的基座删掉
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImlzVmFsaWQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVUlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiSG9tZUljb24iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJob21lSWNvblR3IiwidHciLCJwbGF0ZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsImV1bGVyQW5nbGVzIiwic2V0Iiwic3RhcnQiLCJpbnN0YW5jZSIsImVuYWJsZSIsImFkZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJub2RlIiwib24iLCJpbmRleCIsInRvd2VyQmFzZU5vZGUiLCJ0b3dlcnNQcmVmYWJMaXN0IiwibGVuZ3RoIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImdhbWVDb25maWdKc29uIiwianNvbiIsInBvcyIsInBvc2l0aW9uIiwieCIsInoiLCJzZXRQb3NpdGlvbiIsInNldFRhcmdldFRvd2VyIiwic2V0VG93ZXJCdWlsZEJhc2UiLCJwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0iLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdGFydEdhbWVCdXR0b24iLCJieSIsImNhbGwiLCJkZXN0cm95IiwiZ2FtZVN0YXJ0QnV0dG9uQmFzZSIsInNjYWxlIiwic2hvd0dyb3VuZEVudGVyQW5pbSIsInNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSIsInNob3dIb21lSWNvbkVudGVyQW5pbSIsImVtaXQiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic2hvd1VJRW50ZXJBbmltIiwic3RhcnRHYW1lIiwidWlDb250cm9sbGVyIiwiaG9tZUljb25QcmVmYWIiLCJncm91bmRNYXBDdGwiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwiYWN0aXZlIiwiZWFzaW5nIiwic2tlbGVBbmltIiwiZ2V0Q2hpbGRCeU5hbWUiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwiYW5pbVN0YXRlIiwibmFtZSIsInJlcGVhdENvdW50IiwicGxheSIsInNjaGVkdWxlT25jZSIsInJlc3VsdCIsImkiLCJjb2xsaWRlciIsInV1aWQiLCJyYXljYXN0UmVzdWx0cyIsImR0IiwiY3VycmVudExldmVsTnVtIiwiZ29sZENvdW50IiwidGFyZ2V0UG9zIiwiZ29sZEFuaW0zZFByZWZhYiIsInNldEdvbGRDb3VudCIsImZyb3plbkFsbEVuZW15IiwiZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UiLCJmcm96ZW5Ib21lSWNvbiIsImRlYWRFbmVteURhdGEiLCJnZXREZWFkRW5lbXlEYXRhIiwic2hvd0dhbWVMb3NzVUkiLCJzaG93R2FtZVdpblVJIiwiZW50ZXJOZXh0TGV2ZWwiLCJhY2NZIiwiZW5lbXlCZUxvY2tNYXhOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFB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QVJhLENBZWI7QUFDQTtBQUNIOzs7O1FBcFIrQjdFLFMsV0FFbEJpSCxJLEdBQWUsQ0FBQyxDLFVBaUJoQkMsaUIsR0FBNEIsQzs7Ozs7aUJBZEwsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdELEU7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFXSyxJOzs7Ozs7O2lCQUdmLEk7Ozs7Ozs7aUJBRWMsSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQU9FLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFR3ZWVuLCBKc29uQXNzZXQsIFZlYzMsIHYzLCBQaHlzaWNzU3lzdGVtLCBDb2xsaWRlckNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGZpbmQsIFBoeXNpY3NSYXlSZXN1bHQsIFZlYzIsIGlzVmFsaWQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZSB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2UvVG93ZXJCdWlsZEJhc2UnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmosIEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlQ3RsIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZUN0bCc7XHJcbmltcG9ydCB7IFBsYXlEYXRhIH0gZnJvbSAnLi9EYXRhL1BsYXllckRhdGEnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSAnLi9Ib21lL0hvbWVJY29uJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+mHjeWKm+WKoOmAn+W6plxyXG4gICAgcHVibGljIHN0YXRpYyBhY2NZOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlcnNQcmVmYWJMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudEFkZEVuZW15VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDQ7XHJcbiAgICAvLyBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBlbmVteUJlTG9ja01heE51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvLyBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBVSUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHBsYXRlOiBOb2RlID0gbnVsbDsgLy/mmJ/nkINcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lU3RhcnRCdXR0b25CYXNlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBob21lSWNvblByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaG9tZUljb25Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyRGF0YTogUGxheURhdGE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZ29sZEFuaW0zZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGhvbWVJY29uVHc6IFR3ZWVuID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHRlc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEgPSBuZXcgUGxheURhdGEodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnBsYXRlKTtcclxuICAgICAgICB0dy5yZXBlYXRGb3JldmVyKG5ldyBUd2Vlbih0aGlzLnBsYXRlKS50bygyMCwgeyBldWxlckFuZ2xlczogdjMoMCwgMzYwLCAwKSB9KS5zZXQoeyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCkgfSkpXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oW3YzKDAsIDAsIDApLCB2MygxMCwgMzAsIDEwKSwgdjMoMjAsIDMsIDApLHYzKDIwLCAxMDAsIDMwKV0pO1xyXG4gICAgICAgIC8vIGxldCBwb2ludExpc3Q6IFZlYzNbXSA9IGJlemllci5nZXRQb2ludExpc3QoMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9pbnRcIiwgcG9pbnRMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy50ZXN0Tm9kZSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcudG8oMC4yLCB7IHBvc2l0aW9uOiBwb2ludExpc3RbaV0gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRlc3ROb2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMClcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHN0YXRlIFwiLCB0aGlzLnN0YXRlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJidWlsZC1vbmUtdG93ZXJcIiwgKGluZGV4LCB0b3dlckJhc2VOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bu66YCg5LiA5bqn5aGUXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMudG93ZXJzUHJlZmFiTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlcnNQcmVmYWJMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uLmpzb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHYzKHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueCwgMCwgdG93ZXJCYXNlTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRvd2VyQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS5zZXRUYXJnZXRUb3dlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCYXNlTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a6254K55Lit5LqG5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5zdGFydEdhbWVCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiB2MygwLCAtMTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNob3dHcm91bmRFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWhlOeahOWfuuW6p+WHuueOsOeahOWKqOeUu1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dVSUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSUVudGVyQW5pbSgpIHtcclxuICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCB1aUN0bCA9IGZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcik7XHJcbiAgICAgICAgLy8gaWYgKHVpQ3RsKSB7XHJcbiAgICAgICAgLy8gICAgIHVpQ3RsLnNob3dVSUVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmhvbWVJY29uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuaG9tZUljb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaG9tZUljb25UdyA9IHR3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMiwgeyBwb3NpdGlvbjogdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZUFuaW0gPSB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIlN0YXJ0R2FtZUJ1dHRvblwiKS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFuaW0gPSBza2VsZUFuaW0uZGVmYXVsdENsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0QW5pbVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxlQW5pbS5nZXRTdGF0ZShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHNrZWxlQW5pbS5wbGF5KGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyVG91Y2gzZE9iamVjdChyZXN1bHQ6IFBoeXNpY3NSYXlSZXN1bHRbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IHJlc3VsdFtpXS5jb2xsaWRlcjtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZS51dWlkID09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInRvdWNoLXNjcmVlbi10by0zZFwiLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RSZXN1bHRzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUN0bC5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRHYW1lQ29uZmlnKCk6IEpzb25Bc3NldCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNvbmZpZ0pzb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudExldmVsTnVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtO1xyXG4gICAgfVxyXG4gICAgc2hvd0FkZEdvbGRBbmltRWZmZWN0KGdvbGRDb3VudDogbnVtYmVyLCB0YXJnZXRQb3M6IFZlYzMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ29sZEFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2luR29sZEFuaW1FZmZlY3QpLnNldEdvbGRDb3VudChnb2xkQ291bnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSB0YXJnZXRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Jvc3NFbnRlclN0YXRlKCkge1xyXG4gICAgICAgIC8vIGZvciAoKXtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8v6L+b5YWl5bGV56S6Ym9zcyDov5vlnLrnmoTnirbmgIFcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcInNob3ctYm9zcy1lbnRlci1zdGF0ZVwiKTtcclxuICAgIH1cclxuICAgIGVuZW15QXR0YWNrZWQoKXtcclxuICAgICAgICAvL+aVjOS6uuWPkeWKqOS6huaUu+WHu1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJnYW1lLWxvc3NcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLmZyb3plbkFsbEVuZW15KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UoKTsgLy/npoHplKLmiYDmnInloZTnmoTln7rluqdcclxuICAgICAgICAvLyB0aGlzLmhvbWVJY29uVHcuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLmdldENvbXBvbmVudChIb21lSWNvbikuZnJvemVuSG9tZUljb24oKTtcclxuICAgICAgICBsZXQgZGVhZEVuZW15RGF0YSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5nZXREZWFkRW5lbXlEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIuc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YSlcclxuICAgICAgICB9LDEpO1xyXG4gICAgfVxyXG4gICAgZ2FtZVdpbihkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIC8v5ri45oiP6IOc5Yip77yM6L+b5YWl5LiL5LiA5YWzXHJcbiAgICAgICAgLy/pppblhYjlsZXnpLrog5zliKnlpLHotKXpobXpnaJcclxuICAgICAgICAvLyB0aGlzXHJcbiAgICAgICAgLy/muLjmiI/og5zliKlcclxuICAgICAgICAvLyB0aGlzLnVpY1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzaG93LWdhbWUtcmVzdWx0XCIpOyAvL+i/m+WFpeaYvuekuua4uOaIj+e7k+aenOeahOeVjOmdolxyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICB9XHJcbiAgICBlbnRlck5leHRMZXZlbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeS4i+S4gOWFs1wiKVxyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuaG9tZUljb25Ob2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LWFsbC10b3dlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktYWxsLXRvd2VyLWJ1aWxkLWJhc2VcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5oqK5omA5pyJ55qEdG93ZXLpg73plIDmr4HmjonvvIxcclxuICAgICAgICAvL+aKiuW3puWPs+eahHRvd2VyIOeahOWfuuW6p+WIoOaOiVxyXG4gICAgfVxyXG59XHJcbiJdfQ==