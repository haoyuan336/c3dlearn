System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./UI/UIController.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, find, State, TowerBuildBase, EnemyController, GroundMapCtl, UIController, TowerBuildBaseCtl, PlayData, TowerBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp, _crd, ccclass, property, GameController;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
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
      find = _cc.find;
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
        type: Node
      }), _dec7 = property({
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
          _this.currentLevelNum = 0;

          _initializerDefineProperty(_this, "gameStartButtonBase", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homeIconPrefab", _descriptor6, _assertThisInitialized(_this));

          _this.homeIconNode = null;
          _this.playerData = void 0;
          return _this;
        }

        _createClass(GameController, [{
          key: "onLoad",
          // @property({ type: Node })
          // public testNode: Node = null;
          value: function onLoad() {
            this.playerData = new (_crd && PlayData === void 0 ? (_reportPossibleCrUseOfPlayData({
              error: Error()
            }), PlayData) : PlayData)(this); // let bezier = new BezierN([v3(0, 0, 0), v3(10, 30, 10), v3(20, 3, 0),v3(20, 100, 30)]);
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
            return new Promise(function (resolve, reject) {
              var uiCtl = find("Canvas").getComponent(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
                error: Error()
              }), UIController) : UIController);

              if (uiCtl) {
                uiCtl.showUIEnterAnim().then(function () {
                  resolve();
                });
              }
            });
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

            } else if (this.state.getState() === 'run') {}

            {
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
            return this.currentLevelNum;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameStartButtonBase", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "homeIconPrefab", [_dec7], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImZpbmQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVUlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVDb250cm9sbGVyIiwidHlwZSIsInN0YXRlIiwiY3VycmVudExldmVsTnVtIiwiaG9tZUljb25Ob2RlIiwicGxheWVyRGF0YSIsImluc3RhbmNlIiwiZW5hYmxlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsIm5vZGUiLCJvbiIsImluZGV4IiwidG93ZXJCYXNlTm9kZSIsInRvd2Vyc1ByZWZhYkxpc3QiLCJsZW5ndGgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZ2FtZUNvbmZpZ0pzb24iLCJqc29uIiwicG9zIiwicG9zaXRpb24iLCJ4IiwieiIsInNldFBvc2l0aW9uIiwic2V0VGFyZ2V0VG93ZXIiLCJwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0iLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInN0YXJ0R2FtZUJ1dHRvbiIsImJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJzdGFydCIsImdhbWVTdGFydEJ1dHRvbkJhc2UiLCJ0byIsInNjYWxlIiwic2hvd0dyb3VuZEVudGVyQW5pbSIsInNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSIsInNob3dIb21lSWNvbkVudGVyQW5pbSIsImVtaXQiLCJnZXRDdXJyZW50R29sZENvdW50Iiwic2hvd1VJRW50ZXJBbmltIiwic3RhcnRHYW1lIiwidWlDdGwiLCJob21lSWNvblByZWZhYiIsImdyb3VuZE1hcEN0bCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJhY3RpdmUiLCJlYXNpbmciLCJza2VsZUFuaW0iLCJnZXRDaGlsZEJ5TmFtZSIsImRlZmF1bHRBbmltIiwiZGVmYXVsdENsaXAiLCJhbmltU3RhdGUiLCJuYW1lIiwicmVwZWF0Q291bnQiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwicmVzdWx0IiwiaSIsImNvbGxpZGVyIiwidXVpZCIsInJheWNhc3RSZXN1bHRzIiwiZHQiLCJhY2NZIiwiZW5lbXlCZUxvY2tNYXhOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxhLE9BQUFBLGE7QUFBa0NDLE1BQUFBLDBCLE9BQUFBLDBCO0FBQTRCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDNUlDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMsbUNBQUFBLGM7O0FBQ0FDLE1BQUFBLGUsc0JBQUFBLGU7O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLFkscUJBQUFBLFk7O0FBQ0FDLE1BQUFBLGlCLHdCQUFBQSxpQjs7QUFDQUMsTUFBQUEsUSxxQkFBQUEsUTs7QUFFQUMsTUFBQUEsUyxzQkFBQUEsUzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JuQixVLENBQXRCbUIsTztBQUFTQyxNQUFBQSxRLEdBQWFwQixVLENBQWJvQixROztnQ0FHSkMsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQyxVQUtIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFcEI7QUFBUixPQUFELEMsVUFHUmtCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVoQjtBQUFSLE9BQUQsQyxVQUdSYyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbkI7QUFBUixPQUFELEMsVUFHUmlCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVwQjtBQUFSLE9BQUQsQyxVQVdSa0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXBCO0FBQVIsT0FBRCxDLFVBR1JrQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbkI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFaRG9CLEssR0FBUTtBQUFBO0FBQUEsK0I7Z0JBTVRDLGUsR0FBMEIsQzs7Ozs7O2dCQVMxQkMsWSxHQUFxQixJO2dCQUVyQkMsVTs7Ozs7O0FBRVA7QUFDQTttQ0FDUztBQUNMLGlCQUFLQSxVQUFMLEdBQWtCO0FBQUE7QUFBQSxzQ0FBYSxJQUFiLENBQWxCLENBREssQ0FJTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDs7O2tDQUNPO0FBQUE7O0FBQ0psQixZQUFBQSxhQUFhLENBQUNtQixRQUFkLENBQXVCQyxNQUF2QixHQUFnQyxJQUFoQyxDQURJLENBRUo7O0FBQ0EsaUJBQUtMLEtBQUwsQ0FBV00sUUFBWCxDQUFvQixPQUFwQixFQUE2QixZQUFNO0FBQy9CQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLE1BQUksQ0FBQ1IsS0FBTCxDQUFXUyxRQUFYLEVBQTVCO0FBQ0gsYUFGRDtBQUdBLGlCQUFLVCxLQUFMLENBQVdVLFFBQVgsQ0FBb0IsT0FBcEI7QUFFQSxpQkFBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsaUJBQWIsRUFBZ0MsVUFBQ0MsS0FBRCxFQUFRQyxhQUFSLEVBQWdDO0FBQzVEO0FBQ0Esa0JBQUlELEtBQUssR0FBRyxNQUFJLENBQUNFLGdCQUFMLENBQXNCQyxNQUFsQyxFQUEwQztBQUN0QyxvQkFBSUwsSUFBSSxHQUFHOUIsV0FBVyxDQUFDLE1BQUksQ0FBQ2tDLGdCQUFMLENBQXNCRixLQUF0QixDQUFELENBQXRCO0FBQ0FGLGdCQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxNQUFJLENBQUNOLElBQW5CO0FBQ0FBLGdCQUFBQSxJQUFJLENBQUNPLFlBQUw7QUFBQTtBQUFBLDRDQUE2QkMsSUFBN0IsQ0FBa0MsTUFBSSxDQUFDQyxjQUFMLENBQW9CQyxJQUF0RDtBQUNBLG9CQUFJQyxHQUFHLEdBQUd0QyxFQUFFLENBQUM4QixhQUFhLENBQUNTLFFBQWQsQ0FBdUJDLENBQXhCLEVBQTJCLENBQTNCLEVBQThCVixhQUFhLENBQUNTLFFBQWQsQ0FBdUJFLENBQXJELENBQVo7QUFDQWQsZ0JBQUFBLElBQUksQ0FBQ2UsV0FBTCxDQUFpQkosR0FBakI7QUFDQVIsZ0JBQUFBLGFBQWEsQ0FBQ0ksWUFBZDtBQUFBO0FBQUEsc0RBQTJDUyxjQUEzQyxDQUEwRGhCLElBQTFEO0FBQ0g7QUFFSixhQVhEO0FBY0EsaUJBQUtYLEtBQUwsQ0FBV00sUUFBWCxDQUFvQix3QkFBcEIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBLGNBQUEsTUFBSSxDQUFDc0Isd0JBQUwsR0FBZ0NDLElBQWhDLENBQXFDLFlBQU07QUFDdkMsdUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxzQkFBSUMsRUFBRSxHQUFHLElBQUluRCxLQUFKLENBQVUsTUFBSSxDQUFDb0QsZUFBZixFQUNKQyxFQURJLENBQ0QsQ0FEQyxFQUNFO0FBQUVaLG9CQUFBQSxRQUFRLEVBQUV2QyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsRUFBTCxFQUFTLENBQVQ7QUFBZCxtQkFERixFQUVKb0QsSUFGSSxDQUVDLFlBQU07QUFDUjdCLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLG9CQUFBLE1BQUksQ0FBQzBCLGVBQUwsQ0FBcUJHLE9BQXJCOztBQUNBTixvQkFBQUEsT0FBTztBQUNWLG1CQU5JLEVBT0pPLEtBUEksRUFBVDtBQVFILGlCQVRNLENBQVA7QUFVSCxlQVhELEVBV0dULElBWEgsQ0FXUSxZQUFNO0FBQ1Ysb0JBQUlJLEVBQUUsR0FBRyxJQUFJbkQsS0FBSixDQUFVLE1BQUksQ0FBQ3lELG1CQUFmLENBQVQ7QUFDQU4sZ0JBQUFBLEVBQUUsQ0FBQ08sRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFQyxrQkFBQUEsS0FBSyxFQUFFekQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGlCQUFYO0FBQ0FpRCxnQkFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWLGtCQUFBLE1BQUksQ0FBQ0csbUJBQUwsQ0FBeUJGLE9BQXpCO0FBQ0gsaUJBRkQ7QUFHQUosZ0JBQUFBLEVBQUUsQ0FBQ0ssS0FBSDtBQUNBLHVCQUFPLE1BQUksQ0FBQzNCLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsa0RBQXFDd0IsbUJBQXJDLEVBQVA7QUFDSCxlQW5CRCxFQW1CR2IsSUFuQkgsQ0FtQlEsWUFBTTtBQUNWLHVCQUFPLE1BQUksQ0FBQ2xCLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsNERBQTBDeUIsMkJBQTFDLEVBQVAsQ0FEVSxDQUVWO0FBQ0gsZUF0QkQsRUFzQkdkLElBdEJILENBc0JRLFlBQU07QUFDVix1QkFBTyxNQUFJLENBQUNlLHFCQUFMLEVBQVA7QUFDSCxlQXhCRCxFQXdCR2YsSUF4QkgsQ0F3QlEsWUFBTTtBQUNWO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDbEIsSUFBTCxDQUFVa0MsSUFBVixDQUFlLG1CQUFmLEVBQW9DLE1BQUksQ0FBQzFDLFVBQUwsQ0FBZ0IyQyxtQkFBaEIsRUFBcEM7O0FBQ0EsdUJBQU8sTUFBSSxDQUFDQyxlQUFMLEVBQVA7QUFDSCxlQTVCRCxFQTRCR2xCLElBNUJILENBNEJRLFlBQU07QUFDVixnQkFBQSxNQUFJLENBQUM3QixLQUFMLENBQVdVLFFBQVgsQ0FBb0IsS0FBcEI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDQyxJQUFMLENBQVVPLFlBQVY7QUFBQTtBQUFBLHdEQUF3QzhCLFNBQXhDLEdBRlUsQ0FHVjs7QUFDSCxlQWhDRDtBQWlDSCxhQW5DRCxFQXRCSSxDQTJESjtBQUNIOzs7NENBRWlCO0FBQ2QsbUJBQU8sSUFBSWxCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUlpQixLQUFLLEdBQUc5RCxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWUrQixZQUFmO0FBQUE7QUFBQSwrQ0FBWjs7QUFDQSxrQkFBSStCLEtBQUosRUFBVTtBQUNOQSxnQkFBQUEsS0FBSyxDQUFDRixlQUFOLEdBQXdCbEIsSUFBeEIsQ0FBNkIsWUFBSTtBQUM3QkUsa0JBQUFBLE9BQU87QUFDVixpQkFGRDtBQUdIO0FBQ0osYUFQTSxDQUFQO0FBUUgsVyxDQUNEO0FBRUE7QUFFQTtBQUVBOzs7O2tEQUV3QjtBQUFBOztBQUNwQixtQkFBTyxJQUFJRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGNBQUEsTUFBSSxDQUFDOUIsWUFBTCxHQUFvQnJCLFdBQVcsQ0FBQyxNQUFJLENBQUNxRSxjQUFOLENBQS9CO0FBQ0EsY0FBQSxNQUFJLENBQUNoRCxZQUFMLENBQWtCZSxNQUFsQixHQUEyQixNQUFJLENBQUNOLElBQWhDOztBQUNBLGtCQUFJd0MsWUFBWSxHQUFHLE1BQUksQ0FBQ3hDLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsK0NBQW5COztBQUNBLGtCQUFJaUMsWUFBSixFQUFrQjtBQUNkLG9CQUFJeEMsSUFBSSxHQUFHd0MsWUFBWSxDQUFDQyxjQUFiLEdBQThCQyxRQUE5QixDQUF1QyxDQUF2QyxFQUEwQyxDQUExQyxDQUFYO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDbkQsWUFBTCxDQUFrQnFCLFFBQWxCLEdBQTZCdkMsRUFBRSxDQUFDMkIsSUFBSSxDQUFDWSxRQUFMLENBQWNDLENBQWYsRUFBa0IsRUFBbEIsRUFBc0JiLElBQUksQ0FBQ1ksUUFBTCxDQUFjRSxDQUFwQyxDQUEvQjtBQUNBZCxnQkFBQUEsSUFBSSxDQUFDMkMsTUFBTCxHQUFjLEtBQWQ7QUFDQSxvQkFBSXJCLEVBQUUsR0FBRyxJQUFJbkQsS0FBSixDQUFVLE1BQUksQ0FBQ29CLFlBQWYsQ0FBVDtBQUNBK0IsZ0JBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLFlBQU07QUFDVnpCLGtCQUFBQSxJQUFJLENBQUMyQyxNQUFMLEdBQWMsSUFBZDtBQUNILGlCQUZEO0FBR0FyQixnQkFBQUEsRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBTixFQUFTO0FBQUVqQixrQkFBQUEsUUFBUSxFQUFFdkMsRUFBRSxDQUFDMkIsSUFBSSxDQUFDWSxRQUFMLENBQWNDLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJiLElBQUksQ0FBQ1ksUUFBTCxDQUFjRSxDQUFuQztBQUFkLGlCQUFULEVBQWdFO0FBQUU4QixrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUJBQWhFO0FBQ0F0QixnQkFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWTCxrQkFBQUEsT0FBTztBQUNWLGlCQUZEO0FBR0FFLGdCQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSDtBQUNKLGFBbEJNLENBQVA7QUFtQkg7OztxREFFMEI7QUFBQTs7QUFDdkIsbUJBQU8sSUFBSVIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSXdCLFNBQVMsR0FBRyxNQUFJLENBQUN0QixlQUFMLENBQXFCdUIsY0FBckIsQ0FBb0MsaUJBQXBDLEVBQXVEdkMsWUFBdkQsQ0FBb0VoQywwQkFBcEUsQ0FBaEI7O0FBQ0Esa0JBQUlzRSxTQUFKLEVBQWU7QUFDWCxvQkFBSUUsV0FBVyxHQUFHRixTQUFTLENBQUNHLFdBQTVCLENBRFcsQ0FFWDs7QUFDQSxvQkFBSUMsU0FBUyxHQUFHSixTQUFTLENBQUMvQyxRQUFWLENBQW1CaUQsV0FBVyxDQUFDRyxJQUEvQixDQUFoQjtBQUNBRCxnQkFBQUEsU0FBUyxDQUFDRSxXQUFWLEdBQXdCLENBQXhCO0FBQ0Esb0JBQUk5QyxNQUFNLEdBQUc0QyxTQUFTLENBQUM1QyxNQUF2QjtBQUNBd0MsZ0JBQUFBLFNBQVMsQ0FBQ08sSUFBVixDQUFlTCxXQUFXLENBQUNHLElBQTNCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ0csWUFBTCxDQUFrQixZQUFNO0FBQ3BCekQsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQXVCLGtCQUFBQSxPQUFPO0FBQ1YsaUJBSEQsRUFHR2YsTUFISDtBQUlILGVBWEQsTUFXTztBQUNIZSxnQkFBQUEsT0FBTztBQUNWO0FBQ0osYUFoQk0sQ0FBUDtBQWlCSDs7OzhDQUNtQmtDLE0sRUFBNEI7QUFDNUMsZ0JBQUksS0FBS2pFLEtBQUwsQ0FBV1MsUUFBWCxPQUEwQixPQUE5QixFQUF1QztBQUNuQyxtQkFBSyxJQUFJeUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDakQsTUFBM0IsRUFBbUNrRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLG9CQUFJQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVDLFFBQXpCOztBQUNBLG9CQUFJQSxRQUFRLENBQUN4RCxJQUFULENBQWN5RCxJQUFkLEtBQXVCLEtBQUtsQyxlQUFMLENBQXFCa0MsSUFBaEQsRUFBc0Q7QUFDbEQsdUJBQUtwRSxLQUFMLENBQVdVLFFBQVgsQ0FBb0Isd0JBQXBCO0FBQ0g7QUFDSixlQU5rQyxDQU9uQztBQUNBO0FBRUE7O0FBQ0gsYUFYRCxNQVdPLElBQUksS0FBS1YsS0FBTCxDQUFXUyxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDLENBQUc7O0FBQUM7QUFDNUMsbUJBQUtFLElBQUwsQ0FBVWtDLElBQVYsQ0FBZSxvQkFBZixFQUFxQzVELGFBQWEsQ0FBQ21CLFFBQWQsQ0FBdUJpRSxjQUE1RDtBQUVILGFBZjJDLENBZ0I1QztBQUNIOzs7aUNBQ01DLEUsRUFBWSxDQUVsQjs7OzBDQUMwQjtBQUN2QixtQkFBTyxLQUFLbEQsY0FBWjtBQUNIOzs7K0NBRW9CO0FBQ2pCLG1CQUFPLEtBQUtuQixlQUFaO0FBQ0g7Ozs7UUExTStCdkIsUyxXQUVsQjZGLEksR0FBZSxDQUFDLEMsVUFpQmhCQyxpQixHQUE0QixDOzs7OztpQkFkTCxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0QsRTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQVdJLEk7Ozs7Ozs7aUJBR0gsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVHdlZW4sIEpzb25Bc3NldCwgVmVjMywgdjMsIFBoeXNpY3NTeXN0ZW0sIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCwgVmVjMiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlQ3RsIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZUN0bCc7XHJcbmltcG9ydCB7IFBsYXlEYXRhIH0gZnJvbSAnLi9EYXRhL1BsYXllckRhdGEnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+mHjeWKm+WKoOmAn+W6plxyXG4gICAgcHVibGljIHN0YXRpYyBhY2NZOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlcnNQcmVmYWJMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudEFkZEVuZW15VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDQ7XHJcbiAgICAvLyBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBlbmVteUJlTG9ja01heE51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVN0YXJ0QnV0dG9uQmFzZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgaG9tZUljb25QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhvbWVJY29uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllckRhdGE6IFBsYXlEYXRhO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyB0ZXN0Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhID0gbmV3IFBsYXlEYXRhKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFt2MygwLCAwLCAwKSwgdjMoMTAsIDMwLCAxMCksIHYzKDIwLCAzLCAwKSx2MygyMCwgMTAwLCAzMCldKTtcclxuICAgICAgICAvLyBsZXQgcG9pbnRMaXN0OiBWZWMzW10gPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50XCIsIHBvaW50TGlzdCk7XHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMudGVzdE5vZGUpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDAuMiwgeyBwb3NpdGlvbjogcG9pbnRMaXN0W2ldIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXN0Tm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5yZXBlYXRGb3JldmVyKCk7XHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBzdGF0ZSBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYnVpbGQtb25lLXRvd2VyXCIsIChpbmRleCwgdG93ZXJCYXNlTm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+W7uumAoOS4gOW6p+WhlFxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnRvd2Vyc1ByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJzUHJlZmFiTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnSnNvbi5qc29uKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB2Myh0b3dlckJhc2VOb2RlLnBvc2l0aW9uLngsIDAsIHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0b3dlckJhc2VOb2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkuc2V0VGFyZ2V0VG93ZXIobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a6254K55Lit5LqG5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5zdGFydEdhbWVCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiB2MygwLCAtMTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNob3dHcm91bmRFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWhlOeahOWfuuW6p+WHuueOsOeahOWKqOeUu1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dVSUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSUVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBpZiAodWlDdGwpe1xyXG4gICAgICAgICAgICAgICAgdWlDdGwuc2hvd1VJRW50ZXJBbmltKCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IGdyb3VuZE1hcEN0bCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZE1hcEN0bCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZSg1LCA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7IH0ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInRvdWNoLXNjcmVlbi10by0zZFwiLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RSZXN1bHRzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUN0bC5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRHYW1lQ29uZmlnKCk6IEpzb25Bc3NldCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNvbmZpZ0pzb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudExldmVsTnVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbE51bTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19