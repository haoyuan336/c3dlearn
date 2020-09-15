System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./UI/UIController.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, State, TowerBuildBase, EnemyController, GroundMapCtl, UIController, TowerBuildBaseCtl, PlayData, TowerBase, WinGoldAnimEffect, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, GameController;

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
              _this3.homeIconNode = instantiate(_this3.homeIconPrefab);
              _this3.homeIconNode.parent = _this3.node;

              var groundMapCtl = _this3.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl);

              if (groundMapCtl) {
                var node = groundMapCtl.getMapNodeList().getValue(5, 5);
                _this3.homeIconNode.position = v3(node.position.x, 20, node.position.z);
                node.active = false;
                var tw = new Tween(_this3.homeIconNode);
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
          key: "gameWin",
          value: function gameWin(deadEnemyData) {
            //游戏胜利，进入下一关
            //首先展示胜利失败页面
            // this
            //游戏胜利
            // this.uic
            this.uiController.showGameWinUI(deadEnemyData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlN0YXRlIiwiVG93ZXJCdWlsZEJhc2UiLCJFbmVteUNvbnRyb2xsZXIiLCJHcm91bmRNYXBDdGwiLCJVSUNvbnRyb2xsZXIiLCJUb3dlckJ1aWxkQmFzZUN0bCIsIlBsYXlEYXRhIiwiVG93ZXJCYXNlIiwiV2luR29sZEFuaW1FZmZlY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImhvbWVJY29uTm9kZSIsInBsYXllckRhdGEiLCJ0dyIsInBsYXRlIiwicmVwZWF0Rm9yZXZlciIsInRvIiwiZXVsZXJBbmdsZXMiLCJzZXQiLCJzdGFydCIsImluc3RhbmNlIiwiZW5hYmxlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsIm5vZGUiLCJvbiIsImluZGV4IiwidG93ZXJCYXNlTm9kZSIsInRvd2Vyc1ByZWZhYkxpc3QiLCJsZW5ndGgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZ2FtZUNvbmZpZ0pzb24iLCJqc29uIiwicG9zIiwicG9zaXRpb24iLCJ4IiwieiIsInNldFBvc2l0aW9uIiwic2V0VGFyZ2V0VG93ZXIiLCJzZXRUb3dlckJ1aWxkQmFzZSIsInBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0YXJ0R2FtZUJ1dHRvbiIsImJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJnYW1lU3RhcnRCdXR0b25CYXNlIiwic2NhbGUiLCJzaG93R3JvdW5kRW50ZXJBbmltIiwic2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltIiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwiZW1pdCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzaG93VUlFbnRlckFuaW0iLCJzdGFydEdhbWUiLCJ1aUNvbnRyb2xsZXIiLCJob21lSWNvblByZWZhYiIsImdyb3VuZE1hcEN0bCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJhY3RpdmUiLCJlYXNpbmciLCJza2VsZUFuaW0iLCJnZXRDaGlsZEJ5TmFtZSIsImRlZmF1bHRBbmltIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwicmVzdWx0IiwiaSIsImNvbGxpZGVyIiwidXVpZCIsInJheWNhc3RSZXN1bHRzIiwiZHQiLCJjdXJyZW50TGV2ZWxOdW0iLCJnb2xkQ291bnQiLCJ0YXJnZXRQb3MiLCJnb2xkQW5pbTNkUHJlZmFiIiwic2V0R29sZENvdW50IiwiZGVhZEVuZW15RGF0YSIsInNob3dHYW1lV2luVUkiLCJhY2NZIiwiZW5lbXlCZUxvY2tNYXhOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsYSxPQUFBQSxhO0FBQWtDQyxNQUFBQSwwQixPQUFBQSwwQjs7OztBQUNoSEMsTUFBQUEsSyxnQkFBQUEs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O0FBQ0E3RCxZQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxLQUFLTixJQUFuQjtBQUNBQSxZQUFBQSxJQUFJLENBQUNPLFlBQUw7QUFBQTtBQUFBLHdEQUFxQ3VELFlBQXJDLENBQWtESCxTQUFsRCxFQUE2RCxJQUE3RDtBQUNBM0QsWUFBQUEsSUFBSSxDQUFDWSxRQUFMLEdBQWdCZ0QsU0FBaEI7QUFDSDs7OytDQUVvQjtBQUNqQjtBQUVBO0FBQ0E7QUFDQSxpQkFBSzVELElBQUwsQ0FBVWdDLElBQVYsQ0FBZSx1QkFBZjtBQUNIOzs7a0NBQ08rQixhLEVBQStCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBSzNCLFlBQUwsQ0FBa0I0QixhQUFsQixDQUFnQ0QsYUFBaEM7QUFDSDs7OztRQS9PK0J0RyxTLFdBRWxCd0csSSxHQUFlLENBQUMsQyxVQWlCaEJDLGlCLEdBQTRCLEM7Ozs7O2lCQWRMLEk7Ozs7Ozs7aUJBR0YsSTs7Ozs7OztpQkFHRCxFOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBV0ssSTs7Ozs7OztpQkFHZixJOzs7Ozs7O2lCQUVjLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFPRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBUd2VlbiwgSnNvbkFzc2V0LCBWZWMzLCB2MywgUGh5c2ljc1N5c3RlbSwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBmaW5kLCBQaHlzaWNzUmF5UmVzdWx0LCBWZWMyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqLCBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZUN0bCB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2VDdGwnO1xyXG5pbXBvcnQgeyBQbGF5RGF0YSB9IGZyb20gJy4vRGF0YS9QbGF5ZXJEYXRhJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IFdpbkdvbGRBbmltRWZmZWN0IH0gZnJvbSAnLi9FZmZlY3QvV2luR29sZEFuaW1FZmZlY3QnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8v6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY1k6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2Vyc1ByZWZhYkxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydEdhbWVCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50QWRkRW5lbXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gNDtcclxuICAgIC8vIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuZW15QmVMb2NrTWF4TnVtOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIHB1YmxpYyBjdXJyZW50TGV2ZWxOdW06IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFVJQ29udHJvbGxlciB9KVxyXG4gICAgcHVibGljIHVpQ29udHJvbGxlcjogVUlDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcGxhdGU6IE5vZGUgPSBudWxsOyAvL+aYn+eQg1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVTdGFydEJ1dHRvbkJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGhvbWVJY29uUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob21lSWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJEYXRhOiBQbGF5RGF0YTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb2xkQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHRlc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEgPSBuZXcgUGxheURhdGEodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlc1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnBsYXRlKTtcclxuICAgICAgICB0dy5yZXBlYXRGb3JldmVyKG5ldyBUd2Vlbih0aGlzLnBsYXRlKS50bygyMCwgeyBldWxlckFuZ2xlczogdjMoMCwgMzYwLCAwKSB9KS5zZXQoeyBldWxlckFuZ2xlczogdjMoMCwgMCwgMCkgfSkpXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oW3YzKDAsIDAsIDApLCB2MygxMCwgMzAsIDEwKSwgdjMoMjAsIDMsIDApLHYzKDIwLCAxMDAsIDMwKV0pO1xyXG4gICAgICAgIC8vIGxldCBwb2ludExpc3Q6IFZlYzNbXSA9IGJlemllci5nZXRQb2ludExpc3QoMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9pbnRcIiwgcG9pbnRMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy50ZXN0Tm9kZSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcudG8oMC4yLCB7IHBvc2l0aW9uOiBwb2ludExpc3RbaV0gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRlc3ROb2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMClcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHN0YXRlIFwiLCB0aGlzLnN0YXRlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJidWlsZC1vbmUtdG93ZXJcIiwgKGluZGV4LCB0b3dlckJhc2VOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bu66YCg5LiA5bqn5aGUXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMudG93ZXJzUHJlZmFiTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlcnNQcmVmYWJMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uLmpzb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHYzKHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueCwgMCwgdG93ZXJCYXNlTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRvd2VyQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS5zZXRUYXJnZXRUb3dlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCYXNlTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a6254K55Lit5LqG5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5zdGFydEdhbWVCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiB2MygwLCAtMTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNob3dHcm91bmRFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWhlOeahOWfuuW6p+WHuueOsOeahOWKqOeUu1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dVSUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSUVudGVyQW5pbSgpIHtcclxuICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCB1aUN0bCA9IGZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcik7XHJcbiAgICAgICAgLy8gaWYgKHVpQ3RsKSB7XHJcbiAgICAgICAgLy8gICAgIHVpQ3RsLnNob3dVSUVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51aUNvbnRyb2xsZXIuc2hvd1VJRW50ZXJBbmltKClcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IGdyb3VuZE1hcEN0bCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZE1hcEN0bCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZSg1LCA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9zc0VudGVyU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gZm9yICgpe1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/ov5vlhaXlsZXnpLpib3NzIOi/m+WcuueahOeKtuaAgVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvdy1ib3NzLWVudGVyLXN0YXRlXCIpO1xyXG4gICAgfVxyXG4gICAgZ2FtZVdpbihkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIC8v5ri45oiP6IOc5Yip77yM6L+b5YWl5LiL5LiA5YWzXHJcbiAgICAgICAgLy/pppblhYjlsZXnpLrog5zliKnlpLHotKXpobXpnaJcclxuICAgICAgICAvLyB0aGlzXHJcbiAgICAgICAgLy/muLjmiI/og5zliKlcclxuICAgICAgICAvLyB0aGlzLnVpY1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyLnNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19