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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImZpbmQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVUlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVDb250cm9sbGVyIiwidHlwZSIsInN0YXRlIiwiY3VycmVudExldmVsTnVtIiwiaG9tZUljb25Ob2RlIiwicGxheWVyRGF0YSIsImluc3RhbmNlIiwiZW5hYmxlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsIm5vZGUiLCJvbiIsImluZGV4IiwidG93ZXJCYXNlTm9kZSIsInRvd2Vyc1ByZWZhYkxpc3QiLCJsZW5ndGgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZ2FtZUNvbmZpZ0pzb24iLCJqc29uIiwicG9zIiwicG9zaXRpb24iLCJ4IiwieiIsInNldFBvc2l0aW9uIiwic2V0VGFyZ2V0VG93ZXIiLCJzZXRUb3dlckJ1aWxkQmFzZSIsInBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3Iiwic3RhcnRHYW1lQnV0dG9uIiwiYnkiLCJjYWxsIiwiZGVzdHJveSIsInN0YXJ0IiwiZ2FtZVN0YXJ0QnV0dG9uQmFzZSIsInRvIiwic2NhbGUiLCJzaG93R3JvdW5kRW50ZXJBbmltIiwic2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltIiwic2hvd0hvbWVJY29uRW50ZXJBbmltIiwiZW1pdCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJzaG93VUlFbnRlckFuaW0iLCJzdGFydEdhbWUiLCJ1aUN0bCIsImhvbWVJY29uUHJlZmFiIiwiZ3JvdW5kTWFwQ3RsIiwiZ2V0TWFwTm9kZUxpc3QiLCJnZXRWYWx1ZSIsImFjdGl2ZSIsImVhc2luZyIsInNrZWxlQW5pbSIsImdldENoaWxkQnlOYW1lIiwiZGVmYXVsdEFuaW0iLCJkZWZhdWx0Q2xpcCIsImFuaW1TdGF0ZSIsIm5hbWUiLCJyZXBlYXRDb3VudCIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJyZXN1bHQiLCJpIiwiY29sbGlkZXIiLCJ1dWlkIiwicmF5Y2FzdFJlc3VsdHMiLCJkdCIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGEsT0FBQUEsYTtBQUFrQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNEJDLE1BQUFBLEksT0FBQUEsSTs7OztBQUM1SUMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxtQ0FBQUEsYzs7QUFDQUMsTUFBQUEsZSxzQkFBQUEsZTs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsWSxxQkFBQUEsWTs7QUFDQUMsTUFBQUEsaUIsd0JBQUFBLGlCOztBQUNBQyxNQUFBQSxRLHFC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LGVBTmtDLENBT25DO0FBQ0E7QUFFQTs7QUFDSCxhQVhELE1BV08sSUFBSSxLQUFLVixLQUFMLENBQVdTLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDeEMsbUJBQUtFLElBQUwsQ0FBVW1DLElBQVYsQ0FBZSxvQkFBZixFQUFxQzdELGFBQWEsQ0FBQ21CLFFBQWQsQ0FBdUJrRSxjQUE1RDtBQUVILGFBZjJDLENBZ0I1Qzs7QUFDSDs7O2lDQUNNQyxFLEVBQVksQ0FFbEI7OzswQ0FDMEI7QUFDdkIsbUJBQU8sS0FBS25ELGNBQVo7QUFDSDs7OytDQUVvQjtBQUNqQixtQkFBTyxLQUFLbkIsZUFBWjtBQUNIOzs7O1FBN00rQnZCLFMsV0FFbEI4RixJLEdBQWUsQ0FBQyxDLFVBaUJoQkMsaUIsR0FBNEIsQzs7Ozs7aUJBZEwsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdELEU7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFXSSxJOzs7Ozs7O2lCQUdILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFR3ZWVuLCBKc29uQXNzZXQsIFZlYzMsIHYzLCBQaHlzaWNzU3lzdGVtLCBDb2xsaWRlckNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGZpbmQsIFBoeXNpY3NSYXlSZXN1bHQsIFZlYzIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZSB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2UvVG93ZXJCdWlsZEJhc2UnO1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tICcuL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSS9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJ1aWxkQmFzZUN0bCB9IGZyb20gJy4vVG93ZXJCdWlsZEJhc2VDdGwnO1xyXG5pbXBvcnQgeyBQbGF5RGF0YSB9IGZyb20gJy4vRGF0YS9QbGF5ZXJEYXRhJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJlemllck4gfSBmcm9tICcuL3V0aWwvQmV6aWVyTic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy/ph43lipvliqDpgJ/luqZcclxuICAgIHB1YmxpYyBzdGF0aWMgYWNjWTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJzUHJlZmFiTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0R2FtZUJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSA0O1xyXG4gICAgLy8gcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXlCZUxvY2tNYXhOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbE51bTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVTdGFydEJ1dHRvbkJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGhvbWVJY29uUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob21lSWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJEYXRhOiBQbGF5RGF0YTtcclxuXHJcblxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyB0ZXN0Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhID0gbmV3IFBsYXlEYXRhKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGJlemllciA9IG5ldyBCZXppZXJOKFt2MygwLCAwLCAwKSwgdjMoMTAsIDMwLCAxMCksIHYzKDIwLCAzLCAwKSx2MygyMCwgMTAwLCAzMCldKTtcclxuICAgICAgICAvLyBsZXQgcG9pbnRMaXN0OiBWZWMzW10gPSBiZXppZXIuZ2V0UG9pbnRMaXN0KDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50XCIsIHBvaW50TGlzdCk7XHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMudGVzdE5vZGUpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LnRvKDAuMiwgeyBwb3NpdGlvbjogcG9pbnRMaXN0W2ldIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXN0Tm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5yZXBlYXRGb3JldmVyKCk7XHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBzdGF0ZSBcIiwgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYnVpbGQtb25lLXRvd2VyXCIsIChpbmRleCwgdG93ZXJCYXNlTm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+W7uumAoOS4gOW6p+WhlFxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnRvd2Vyc1ByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJzUHJlZmFiTGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnSnNvbi5qc29uKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB2Myh0b3dlckJhc2VOb2RlLnBvc2l0aW9uLngsIDAsIHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0b3dlckJhc2VOb2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZSkuc2V0VGFyZ2V0VG93ZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLnNldFRvd2VyQnVpbGRCYXNlKHRvd2VyQmFzZU5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueOqeWutueCueS4reS6huW8gOWni+a4uOaIj+aMiemSrlwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuc3RhcnRHYW1lQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogdjMoMCwgLTEwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheSBvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UpO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygwLCAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5zaG93R3JvdW5kRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2VDdGwpLnNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgLy/lsZXnpLrloZTnmoTln7rluqflh7rnjrDnmoTliqjnlLtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93SG9tZUljb25FbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5ub2RlLmdldENvbVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3VwZGF0ZS1nb2xkLWxhYmVsJywgdGhpcy5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93VUlFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVpQ3RsID0gZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgaWYgKHVpQ3RsKSB7XHJcbiAgICAgICAgICAgICAgICB1aUN0bC5zaG93VUlFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIHNob3dHcm91bmRNYXBFbnRlckFuaW0oKXtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcGxheWVyVG91Y2hPblNraWxsTm9kZShza2lsbE5vZGU6IE5vZGUsIHRhcmdldFRvd2VyOiBOb2RlKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNob3dIb21lSWNvbkVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuaG9tZUljb25QcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBncm91bmRNYXBDdGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCk7XHJcbiAgICAgICAgICAgIGlmIChncm91bmRNYXBDdGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZ3JvdW5kTWFwQ3RsLmdldE1hcE5vZGVMaXN0KCkuZ2V0VmFsdWUoNSwgNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuaG9tZUljb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMiwgeyBwb3NpdGlvbjogdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZUFuaW0gPSB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIlN0YXJ0R2FtZUJ1dHRvblwiKS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFuaW0gPSBza2VsZUFuaW0uZGVmYXVsdENsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0QW5pbVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxlQW5pbS5nZXRTdGF0ZShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHNrZWxlQW5pbS5wbGF5KGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyVG91Y2gzZE9iamVjdChyZXN1bHQ6IFBoeXNpY3NSYXlSZXN1bHRbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IHJlc3VsdFtpXS5jb2xsaWRlcjtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZS51dWlkID09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInRvdWNoLXNjcmVlbi10by0zZFwiLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RSZXN1bHRzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUN0bC5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRHYW1lQ29uZmlnKCk6IEpzb25Bc3NldCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNvbmZpZ0pzb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudExldmVsTnVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbE51bTtcclxuICAgIH1cclxuICAgXHJcblxyXG5cclxufVxyXG4iXX0=