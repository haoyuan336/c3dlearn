System.register(["cc", "code-quality:cr", "./util/State.js", "./TowerBuildBase/TowerBuildBase.js", "./EnemyController.js", "./GroundMapCtl.js", "./UI/UIController.js", "./TowerBuildBaseCtl.js", "./Data/PlayerData.js", "./Towers/TowerBase.js", "./Effect/WinGoldAnimEffect.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem, SkeletalAnimationComponent, find, State, TowerBuildBase, EnemyController, GroundMapCtl, UIController, TowerBuildBaseCtl, PlayData, TowerBase, WinGoldAnimEffect, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _temp, _crd, ccclass, property, GameController;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
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
        type: Node
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
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

          _initializerDefineProperty(_this, "gameStartButtonBase", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homeIconPrefab", _descriptor6, _assertThisInitialized(_this));

          _this.homeIconNode = null;
          _this.playerData = void 0;

          _initializerDefineProperty(_this, "goldAnim3dPrefab", _descriptor7, _assertThisInitialized(_this));

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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "goldAnim3dPrefab", [_dec8], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImZpbmQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVUlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUNvbnRyb2xsZXIiLCJ0eXBlIiwic3RhdGUiLCJob21lSWNvbk5vZGUiLCJwbGF5ZXJEYXRhIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwibm9kZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImdldENvbXBvbmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwidGhlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJzdGFydEdhbWVCdXR0b24iLCJieSIsImNhbGwiLCJkZXN0cm95Iiwic3RhcnQiLCJnYW1lU3RhcnRCdXR0b25CYXNlIiwidG8iLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93SG9tZUljb25FbnRlckFuaW0iLCJlbWl0IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsInNob3dVSUVudGVyQW5pbSIsInN0YXJ0R2FtZSIsInVpQ3RsIiwiaG9tZUljb25QcmVmYWIiLCJncm91bmRNYXBDdGwiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwiYWN0aXZlIiwiZWFzaW5nIiwic2tlbGVBbmltIiwiZ2V0Q2hpbGRCeU5hbWUiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwiYW5pbVN0YXRlIiwibmFtZSIsInJlcGVhdENvdW50IiwicGxheSIsInNjaGVkdWxlT25jZSIsInJlc3VsdCIsImkiLCJjb2xsaWRlciIsInV1aWQiLCJyYXljYXN0UmVzdWx0cyIsImR0IiwiY3VycmVudExldmVsTnVtIiwiZ29sZENvdW50IiwidGFyZ2V0UG9zIiwiZ29sZEFuaW0zZFByZWZhYiIsInNldEdvbGRDb3VudCIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGEsT0FBQUEsYTtBQUFrQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNEJDLE1BQUFBLEksT0FBQUEsSTs7OztBQUM1SUMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxtQ0FBQUEsYzs7QUFDQUMsTUFBQUEsZSxzQkFBQUEsZTs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsWSxxQkFBQUEsWTs7QUFDQUMsTUFBQUEsaUIsd0JBQUFBLGlCOztBQUNBQyxNQUFBQSxRLHFCQUFBQSxROztBQUVBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUVBQyxNQUFBQSxpQiw4QkFBQUEsaUI7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCcEIsVSxDQUF0Qm9CLE87QUFBU0MsTUFBQUEsUSxHQUFhckIsVSxDQUFicUIsUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMsVUFLSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXJCO0FBQVIsT0FBRCxDLFVBR1JtQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFakI7QUFBUixPQUFELEMsVUFHUmUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXBCO0FBQVIsT0FBRCxDLFVBR1JrQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFckI7QUFBUixPQUFELEMsVUFXUm1CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVyQjtBQUFSLE9BQUQsQyxVQUdSbUIsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXBCO0FBQVIsT0FBRCxDLFVBT1JrQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFcEI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFuQkRxQixLLEdBQVE7QUFBQTtBQUFBLCtCOzs7Ozs7Z0JBZVRDLFksR0FBcUIsSTtnQkFFckJDLFU7Ozs7Ozs7OztBQU1QO0FBQ0E7bUNBQ1M7QUFDTCxpQkFBS0EsVUFBTCxHQUFrQjtBQUFBO0FBQUEsc0NBQWEsSUFBYixDQUFsQixDQURLLENBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7OztrQ0FDTztBQUFBOztBQUNKbEIsWUFBQUEsYUFBYSxDQUFDbUIsUUFBZCxDQUF1QkMsTUFBdkIsR0FBZ0MsSUFBaEMsQ0FESSxDQUVKOztBQUNBLGlCQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUMvQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QixNQUFJLENBQUNQLEtBQUwsQ0FBV1EsUUFBWCxFQUE1QjtBQUNILGFBRkQ7QUFHQSxpQkFBS1IsS0FBTCxDQUFXUyxRQUFYLENBQW9CLE9BQXBCO0FBRUEsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGlCQUFiLEVBQWdDLFVBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUFnQztBQUM1RDtBQUNBLGtCQUFJRCxLQUFLLEdBQUcsTUFBSSxDQUFDRSxnQkFBTCxDQUFzQkMsTUFBbEMsRUFBMEM7QUFDdEMsb0JBQUlMLElBQUksR0FBRzlCLFdBQVcsQ0FBQyxNQUFJLENBQUNrQyxnQkFBTCxDQUFzQkYsS0FBdEIsQ0FBRCxDQUF0QjtBQUNBRixnQkFBQUEsSUFBSSxDQUFDTSxNQUFMLEdBQWMsTUFBSSxDQUFDTixJQUFuQjtBQUNBQSxnQkFBQUEsSUFBSSxDQUFDTyxZQUFMO0FBQUE7QUFBQSw0Q0FBNkJDLElBQTdCLENBQWtDLE1BQUksQ0FBQ0MsY0FBTCxDQUFvQkMsSUFBdEQ7QUFDQSxvQkFBSUMsR0FBRyxHQUFHdEMsRUFBRSxDQUFDOEIsYUFBYSxDQUFDUyxRQUFkLENBQXVCQyxDQUF4QixFQUEyQixDQUEzQixFQUE4QlYsYUFBYSxDQUFDUyxRQUFkLENBQXVCRSxDQUFyRCxDQUFaO0FBQ0FkLGdCQUFBQSxJQUFJLENBQUNlLFdBQUwsQ0FBaUJKLEdBQWpCO0FBQ0FSLGdCQUFBQSxhQUFhLENBQUNJLFlBQWQ7QUFBQTtBQUFBLHNEQUEyQ1MsY0FBM0MsQ0FBMERoQixJQUExRDtBQUNBQSxnQkFBQUEsSUFBSSxDQUFDTyxZQUFMO0FBQUE7QUFBQSw0Q0FBNkJVLGlCQUE3QixDQUErQ2QsYUFBL0M7QUFDSDtBQUVKLGFBWkQ7QUFlQSxpQkFBS2IsS0FBTCxDQUFXSyxRQUFYLENBQW9CLHdCQUFwQixFQUE4QyxZQUFNO0FBQ2hEO0FBQ0EsY0FBQSxNQUFJLENBQUN1Qix3QkFBTCxHQUFnQ0MsSUFBaEMsQ0FBcUMsWUFBTTtBQUN2Qyx1QkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHNCQUFJQyxFQUFFLEdBQUcsSUFBSXBELEtBQUosQ0FBVSxNQUFJLENBQUNxRCxlQUFmLEVBQ0pDLEVBREksQ0FDRCxDQURDLEVBQ0U7QUFBRWIsb0JBQUFBLFFBQVEsRUFBRXZDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxFQUFMLEVBQVMsQ0FBVDtBQUFkLG1CQURGLEVBRUpxRCxJQUZJLENBRUMsWUFBTTtBQUNSOUIsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0Esb0JBQUEsTUFBSSxDQUFDMkIsZUFBTCxDQUFxQkcsT0FBckI7O0FBQ0FOLG9CQUFBQSxPQUFPO0FBQ1YsbUJBTkksRUFPSk8sS0FQSSxFQUFUO0FBUUgsaUJBVE0sQ0FBUDtBQVVILGVBWEQsRUFXR1QsSUFYSCxDQVdRLFlBQU07QUFDVixvQkFBSUksRUFBRSxHQUFHLElBQUlwRCxLQUFKLENBQVUsTUFBSSxDQUFDMEQsbUJBQWYsQ0FBVDtBQUNBTixnQkFBQUEsRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFXO0FBQUVDLGtCQUFBQSxLQUFLLEVBQUUxRCxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsaUJBQVg7QUFDQWtELGdCQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1Ysa0JBQUEsTUFBSSxDQUFDRyxtQkFBTCxDQUF5QkYsT0FBekI7QUFDSCxpQkFGRDtBQUdBSixnQkFBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0EsdUJBQU8sTUFBSSxDQUFDNUIsSUFBTCxDQUFVTyxZQUFWO0FBQUE7QUFBQSxrREFBcUN5QixtQkFBckMsRUFBUDtBQUNILGVBbkJELEVBbUJHYixJQW5CSCxDQW1CUSxZQUFNO0FBQ1YsdUJBQU8sTUFBSSxDQUFDbkIsSUFBTCxDQUFVTyxZQUFWO0FBQUE7QUFBQSw0REFBMEMwQiwyQkFBMUMsRUFBUCxDQURVLENBRVY7QUFDSCxlQXRCRCxFQXNCR2QsSUF0QkgsQ0FzQlEsWUFBTTtBQUNWLHVCQUFPLE1BQUksQ0FBQ2UscUJBQUwsRUFBUDtBQUNILGVBeEJELEVBd0JHZixJQXhCSCxDQXdCUSxZQUFNO0FBQ1Y7QUFDQSxnQkFBQSxNQUFJLENBQUNuQixJQUFMLENBQVVtQyxJQUFWLENBQWUsbUJBQWYsRUFBb0MsTUFBSSxDQUFDM0MsVUFBTCxDQUFnQjRDLG1CQUFoQixFQUFwQzs7QUFDQSx1QkFBTyxNQUFJLENBQUNDLGVBQUwsRUFBUDtBQUNILGVBNUJELEVBNEJHbEIsSUE1QkgsQ0E0QlEsWUFBTTtBQUNWLGdCQUFBLE1BQUksQ0FBQzdCLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixLQUFwQjs7QUFDQSxnQkFBQSxNQUFJLENBQUNDLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsd0RBQXdDK0IsU0FBeEMsR0FGVSxDQUdWOztBQUNILGVBaENEO0FBaUNILGFBbkNELEVBdkJJLENBNERKO0FBQ0g7Ozs0Q0FFaUI7QUFDZCxtQkFBTyxJQUFJbEIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSWlCLEtBQUssR0FBRy9ELElBQUksQ0FBQyxRQUFELENBQUosQ0FBZStCLFlBQWY7QUFBQTtBQUFBLCtDQUFaOztBQUNBLGtCQUFJZ0MsS0FBSixFQUFXO0FBQ1BBLGdCQUFBQSxLQUFLLENBQUNGLGVBQU4sR0FBd0JsQixJQUF4QixDQUE2QixZQUFNO0FBQy9CRSxrQkFBQUEsT0FBTztBQUNWLGlCQUZEO0FBR0g7QUFDSixhQVBNLENBQVA7QUFRSCxXLENBQ0Q7QUFFQTtBQUVBO0FBRUE7Ozs7a0RBRXdCO0FBQUE7O0FBQ3BCLG1CQUFPLElBQUlELE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsY0FBQSxNQUFJLENBQUMvQixZQUFMLEdBQW9CckIsV0FBVyxDQUFDLE1BQUksQ0FBQ3NFLGNBQU4sQ0FBL0I7QUFDQSxjQUFBLE1BQUksQ0FBQ2pELFlBQUwsQ0FBa0JlLE1BQWxCLEdBQTJCLE1BQUksQ0FBQ04sSUFBaEM7O0FBQ0Esa0JBQUl5QyxZQUFZLEdBQUcsTUFBSSxDQUFDekMsSUFBTCxDQUFVTyxZQUFWO0FBQUE7QUFBQSwrQ0FBbkI7O0FBQ0Esa0JBQUlrQyxZQUFKLEVBQWtCO0FBQ2Qsb0JBQUl6QyxJQUFJLEdBQUd5QyxZQUFZLENBQUNDLGNBQWIsR0FBOEJDLFFBQTlCLENBQXVDLENBQXZDLEVBQTBDLENBQTFDLENBQVg7QUFDQSxnQkFBQSxNQUFJLENBQUNwRCxZQUFMLENBQWtCcUIsUUFBbEIsR0FBNkJ2QyxFQUFFLENBQUMyQixJQUFJLENBQUNZLFFBQUwsQ0FBY0MsQ0FBZixFQUFrQixFQUFsQixFQUFzQmIsSUFBSSxDQUFDWSxRQUFMLENBQWNFLENBQXBDLENBQS9CO0FBQ0FkLGdCQUFBQSxJQUFJLENBQUM0QyxNQUFMLEdBQWMsS0FBZDtBQUNBLG9CQUFJckIsRUFBRSxHQUFHLElBQUlwRCxLQUFKLENBQVUsTUFBSSxDQUFDb0IsWUFBZixDQUFUO0FBQ0FnQyxnQkFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWMUIsa0JBQUFBLElBQUksQ0FBQzRDLE1BQUwsR0FBYyxJQUFkO0FBQ0gsaUJBRkQ7QUFHQXJCLGdCQUFBQSxFQUFFLENBQUNPLEVBQUgsQ0FBTSxDQUFOLEVBQVM7QUFBRWxCLGtCQUFBQSxRQUFRLEVBQUV2QyxFQUFFLENBQUMyQixJQUFJLENBQUNZLFFBQUwsQ0FBY0MsQ0FBZixFQUFrQixDQUFsQixFQUFxQmIsSUFBSSxDQUFDWSxRQUFMLENBQWNFLENBQW5DO0FBQWQsaUJBQVQsRUFBZ0U7QUFBRStCLGtCQUFBQSxNQUFNLEVBQUU7QUFBVixpQkFBaEU7QUFDQXRCLGdCQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1ZMLGtCQUFBQSxPQUFPO0FBQ1YsaUJBRkQ7QUFHQUUsZ0JBQUFBLEVBQUUsQ0FBQ0ssS0FBSDtBQUNIO0FBQ0osYUFsQk0sQ0FBUDtBQW1CSDs7O3FEQUUwQjtBQUFBOztBQUN2QixtQkFBTyxJQUFJUixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJd0IsU0FBUyxHQUFHLE1BQUksQ0FBQ3RCLGVBQUwsQ0FBcUJ1QixjQUFyQixDQUFvQyxpQkFBcEMsRUFBdUR4QyxZQUF2RCxDQUFvRWhDLDBCQUFwRSxDQUFoQjs7QUFDQSxrQkFBSXVFLFNBQUosRUFBZTtBQUNYLG9CQUFJRSxXQUFXLEdBQUdGLFNBQVMsQ0FBQ0csV0FBNUIsQ0FEVyxDQUVYOztBQUNBLG9CQUFJQyxTQUFTLEdBQUdKLFNBQVMsQ0FBQ2hELFFBQVYsQ0FBbUJrRCxXQUFXLENBQUNHLElBQS9CLENBQWhCO0FBQ0FELGdCQUFBQSxTQUFTLENBQUNFLFdBQVYsR0FBd0IsQ0FBeEI7QUFDQSxvQkFBSS9DLE1BQU0sR0FBRzZDLFNBQVMsQ0FBQzdDLE1BQXZCO0FBQ0F5QyxnQkFBQUEsU0FBUyxDQUFDTyxJQUFWLENBQWVMLFdBQVcsQ0FBQ0csSUFBM0I7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDRyxZQUFMLENBQWtCLFlBQU07QUFDcEIxRCxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBd0Isa0JBQUFBLE9BQU87QUFDVixpQkFIRCxFQUdHaEIsTUFISDtBQUlILGVBWEQsTUFXTztBQUNIZ0IsZ0JBQUFBLE9BQU87QUFDVjtBQUNKLGFBaEJNLENBQVA7QUFpQkg7Ozs4Q0FDbUJrQyxNLEVBQTRCO0FBQzVDLGdCQUFJLEtBQUtqRSxLQUFMLENBQVdRLFFBQVgsT0FBMEIsT0FBOUIsRUFBdUM7QUFDbkMsbUJBQUssSUFBSTBELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELE1BQU0sQ0FBQ2xELE1BQTNCLEVBQW1DbUQsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxvQkFBSUMsUUFBUSxHQUFHRixNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVQyxRQUF6Qjs7QUFDQSxvQkFBSUEsUUFBUSxDQUFDekQsSUFBVCxDQUFjMEQsSUFBZCxLQUF1QixLQUFLbEMsZUFBTCxDQUFxQmtDLElBQWhELEVBQXNEO0FBQ2xELHVCQUFLcEUsS0FBTCxDQUFXUyxRQUFYLENBQW9CLHdCQUFwQjtBQUNIO0FBQ0osZUFOa0MsQ0FPbkM7QUFDQTtBQUVBOztBQUNILGFBWEQsTUFXTyxJQUFJLEtBQUtULEtBQUwsQ0FBV1EsUUFBWCxPQUEwQixLQUE5QixFQUFxQztBQUN4QyxtQkFBS0UsSUFBTCxDQUFVbUMsSUFBVixDQUFlLG9CQUFmLEVBQXFDN0QsYUFBYSxDQUFDbUIsUUFBZCxDQUF1QmtFLGNBQTVEO0FBRUgsYUFmMkMsQ0FnQjVDOztBQUNIOzs7aUNBQ01DLEUsRUFBWSxDQUVsQjs7OzBDQUMwQjtBQUN2QixtQkFBTyxLQUFLbkQsY0FBWjtBQUNIOzs7K0NBRW9CO0FBQ2pCLG1CQUFPLEtBQUtqQixVQUFMLENBQWdCcUUsZUFBdkI7QUFDSDs7O2dEQUNxQkMsUyxFQUFtQkMsUyxFQUFpQjtBQUN0RCxnQkFBSS9ELElBQUksR0FBRzlCLFdBQVcsQ0FBQyxLQUFLOEYsZ0JBQU4sQ0FBdEI7QUFDQWhFLFlBQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLEtBQUtOLElBQW5CO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ08sWUFBTDtBQUFBO0FBQUEsd0RBQXFDMEQsWUFBckMsQ0FBa0RILFNBQWxELEVBQTZELElBQTdEO0FBQ0E5RCxZQUFBQSxJQUFJLENBQUNZLFFBQUwsR0FBZ0JtRCxTQUFoQjtBQUNIOzs7O1FBck4rQmhHLFMsV0FFbEJtRyxJLEdBQWUsQ0FBQyxDLFVBaUJoQkMsaUIsR0FBNEIsQzs7Ozs7aUJBZEwsSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdELEU7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFXSSxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBT0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVHdlZW4sIEpzb25Bc3NldCwgVmVjMywgdjMsIFBoeXNpY3NTeXN0ZW0sIENvbGxpZGVyQ29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCwgVmVjMiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZSc7XHJcbmltcG9ydCB7IEVuZW15Q29udHJvbGxlciB9IGZyb20gJy4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQnVpbGRCYXNlQ3RsIH0gZnJvbSAnLi9Ub3dlckJ1aWxkQmFzZUN0bCc7XHJcbmltcG9ydCB7IFBsYXlEYXRhIH0gZnJvbSAnLi9EYXRhL1BsYXllckRhdGEnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4vdXRpbC9CZXppZXJOJztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy/ph43lipvliqDpgJ/luqZcclxuICAgIHB1YmxpYyBzdGF0aWMgYWNjWTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb246IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJzUHJlZmFiTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0R2FtZUJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSA0O1xyXG4gICAgLy8gcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXlCZUxvY2tNYXhOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRMZXZlbE51bTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVTdGFydEJ1dHRvbkJhc2U6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGhvbWVJY29uUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob21lSWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJEYXRhOiBQbGF5RGF0YTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb2xkQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIHRlc3ROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllckRhdGEgPSBuZXcgUGxheURhdGEodGhpcyk7XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgYmV6aWVyID0gbmV3IEJlemllck4oW3YzKDAsIDAsIDApLCB2MygxMCwgMzAsIDEwKSwgdjMoMjAsIDMsIDApLHYzKDIwLCAxMDAsIDMwKV0pO1xyXG4gICAgICAgIC8vIGxldCBwb2ludExpc3Q6IFZlYzNbXSA9IGJlemllci5nZXRQb2ludExpc3QoMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9pbnRcIiwgcG9pbnRMaXN0KTtcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy50ZXN0Tm9kZSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcudG8oMC4yLCB7IHBvc2l0aW9uOiBwb2ludExpc3RbaV0gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRlc3ROb2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMClcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHN0YXRlIFwiLCB0aGlzLnN0YXRlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJlYWR5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJidWlsZC1vbmUtdG93ZXJcIiwgKGluZGV4LCB0b3dlckJhc2VOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bu66YCg5LiA5bqn5aGUXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMudG93ZXJzUHJlZmFiTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlcnNQcmVmYWJMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWdKc29uLmpzb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHYzKHRvd2VyQmFzZU5vZGUucG9zaXRpb24ueCwgMCwgdG93ZXJCYXNlTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRvd2VyQmFzZU5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlKS5zZXRUYXJnZXRUb3dlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2V0VG93ZXJCdWlsZEJhc2UodG93ZXJCYXNlTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a6254K55Lit5LqG5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdGF0ckJ1dHRvblByZXNzQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5zdGFydEdhbWVCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiB2MygwLCAtMTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbkJhc2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNob3dHcm91bmRFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJ1aWxkQmFzZUN0bCkuc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWhlOeahOWfuuW6p+WHuueOsOeahOWKqOeUu1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dIb21lSWNvbkVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgndXBkYXRlLWdvbGQtbGFiZWwnLCB0aGlzLnBsYXllckRhdGEuZ2V0Q3VycmVudEdvbGRDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dVSUVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSUVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdWlDdGwgPSBmaW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBpZiAodWlDdGwpIHtcclxuICAgICAgICAgICAgICAgIHVpQ3RsLnNob3dVSUVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0dyb3VuZE1hcEVudGVyQW5pbSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF5ZXJUb3VjaE9uU2tpbGxOb2RlKHNraWxsTm9kZTogTm9kZSwgdGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvd0hvbWVJY29uRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5ob21lSWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IGdyb3VuZE1hcEN0bCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZE1hcEN0bCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBncm91bmRNYXBDdGwuZ2V0TWFwTm9kZUxpc3QoKS5nZXRWYWx1ZSg1LCA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUljb25Ob2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ob21lSWNvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygyLCB7IHBvc2l0aW9uOiB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3RhdHJCdXR0b25QcmVzc0FuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNrZWxlQW5pbSA9IHRoaXMuc3RhcnRHYW1lQnV0dG9uLmdldENoaWxkQnlOYW1lKFwiU3RhcnRHYW1lQnV0dG9uXCIpLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGlmIChza2VsZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QW5pbSA9IHNrZWxlQW5pbS5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbmltXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGVBbmltLmdldFN0YXRlKGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2tlbGVBbmltLnBsYXkoZGVmYXVsdEFuaW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lrozmiJBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwbGF5ZXJUb3VjaDNkT2JqZWN0KHJlc3VsdDogUGh5c2ljc1JheVJlc3VsdFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gcmVzdWx0W2ldLmNvbGxpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT0gdGhpcy5zdGFydEdhbWVCdXR0b24udXVpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktc3RhcnQtYnV0dG9uLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdFJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIGdldEdhbWVDb25maWcoKTogSnNvbkFzc2V0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ29uZmlnSnNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGV2ZWxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5jdXJyZW50TGV2ZWxOdW07XHJcbiAgICB9XHJcbiAgICBzaG93QWRkR29sZEFuaW1FZmZlY3QoZ29sZENvdW50OiBudW1iZXIsIHRhcmdldFBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nb2xkQW5pbTNkUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChXaW5Hb2xkQW5pbUVmZmVjdCkuc2V0R29sZENvdW50KGdvbGRDb3VudCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvcztcclxuICAgIH1cclxuICBcclxuXHJcblxyXG59XHJcbiJdfQ==