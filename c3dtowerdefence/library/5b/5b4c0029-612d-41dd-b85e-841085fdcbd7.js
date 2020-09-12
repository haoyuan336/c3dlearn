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
                var node = groundMapCtl.getMapNodeList().getValue(5, 5).node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJ2MyIsIlBoeXNpY3NTeXN0ZW0iLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsImZpbmQiLCJTdGF0ZSIsIlRvd2VyQnVpbGRCYXNlIiwiRW5lbXlDb250cm9sbGVyIiwiR3JvdW5kTWFwQ3RsIiwiVUlDb250cm9sbGVyIiwiVG93ZXJCdWlsZEJhc2VDdGwiLCJQbGF5RGF0YSIsIlRvd2VyQmFzZSIsIldpbkdvbGRBbmltRWZmZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUNvbnRyb2xsZXIiLCJ0eXBlIiwic3RhdGUiLCJob21lSWNvbk5vZGUiLCJwbGF5ZXJEYXRhIiwiaW5zdGFuY2UiLCJlbmFibGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwibm9kZSIsIm9uIiwiaW5kZXgiLCJ0b3dlckJhc2VOb2RlIiwidG93ZXJzUHJlZmFiTGlzdCIsImxlbmd0aCIsInBhcmVudCIsImdldENvbXBvbmVudCIsImluaXQiLCJnYW1lQ29uZmlnSnNvbiIsImpzb24iLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2V0UG9zaXRpb24iLCJzZXRUYXJnZXRUb3dlciIsInNldFRvd2VyQnVpbGRCYXNlIiwicGxheVN0YXRyQnV0dG9uUHJlc3NBbmltIiwidGhlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHciLCJzdGFydEdhbWVCdXR0b24iLCJieSIsImNhbGwiLCJkZXN0cm95Iiwic3RhcnQiLCJnYW1lU3RhcnRCdXR0b25CYXNlIiwidG8iLCJzY2FsZSIsInNob3dHcm91bmRFbnRlckFuaW0iLCJzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0iLCJzaG93SG9tZUljb25FbnRlckFuaW0iLCJlbWl0IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsInNob3dVSUVudGVyQW5pbSIsInN0YXJ0R2FtZSIsInVpQ3RsIiwiaG9tZUljb25QcmVmYWIiLCJncm91bmRNYXBDdGwiLCJnZXRNYXBOb2RlTGlzdCIsImdldFZhbHVlIiwiYWN0aXZlIiwiZWFzaW5nIiwic2tlbGVBbmltIiwiZ2V0Q2hpbGRCeU5hbWUiLCJkZWZhdWx0QW5pbSIsImRlZmF1bHRDbGlwIiwiYW5pbVN0YXRlIiwibmFtZSIsInJlcGVhdENvdW50IiwicGxheSIsInNjaGVkdWxlT25jZSIsInJlc3VsdCIsImkiLCJjb2xsaWRlciIsInV1aWQiLCJyYXljYXN0UmVzdWx0cyIsImR0IiwiY3VycmVudExldmVsTnVtIiwiZ29sZENvdW50IiwidGFyZ2V0UG9zIiwiZ29sZEFuaW0zZFByZWZhYiIsInNldEdvbGRDb3VudCIsImFjY1kiLCJlbmVteUJlTG9ja01heE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGEsT0FBQUEsYTtBQUFrQ0MsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNEJDLE1BQUFBLEksT0FBQUEsSTs7OztBQUM1SUMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxtQ0FBQUEsYzs7QUFDQUMsTUFBQUEsZSxzQkFBQUEsZTs7QUFDQUMs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ciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBUd2VlbiwgSnNvbkFzc2V0LCBWZWMzLCB2MywgUGh5c2ljc1N5c3RlbSwgQ29sbGlkZXJDb21wb25lbnQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBmaW5kLCBQaHlzaWNzUmF5UmVzdWx0LCBWZWMyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2UgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlL1Rvd2VyQnVpbGRCYXNlJztcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSAnLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUkvVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCdWlsZEJhc2VDdGwgfSBmcm9tICcuL1Rvd2VyQnVpbGRCYXNlQ3RsJztcclxuaW1wb3J0IHsgUGxheURhdGEgfSBmcm9tICcuL0RhdGEvUGxheWVyRGF0YSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCZXppZXJOIH0gZnJvbSAnLi91dGlsL0Jlemllck4nO1xyXG5pbXBvcnQgeyBXaW5Hb2xkQW5pbUVmZmVjdCB9IGZyb20gJy4vRWZmZWN0L1dpbkdvbGRBbmltRWZmZWN0JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+mHjeWKm+WKoOmAn+W6plxyXG4gICAgcHVibGljIHN0YXRpYyBhY2NZOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlcnNQcmVmYWJMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudEFkZEVuZW15VGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDQ7XHJcbiAgICAvLyBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBlbmVteUJlTG9ja01heE51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvLyBwdWJsaWMgY3VycmVudExldmVsTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVN0YXJ0QnV0dG9uQmFzZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgaG9tZUljb25QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhvbWVJY29uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllckRhdGE6IFBsYXlEYXRhO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGdvbGRBbmltM2RQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiBcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgdGVzdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyRGF0YSA9IG5ldyBQbGF5RGF0YSh0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBiZXppZXIgPSBuZXcgQmV6aWVyTihbdjMoMCwgMCwgMCksIHYzKDEwLCAzMCwgMTApLCB2MygyMCwgMywgMCksdjMoMjAsIDEwMCwgMzApXSk7XHJcbiAgICAgICAgLy8gbGV0IHBvaW50TGlzdDogVmVjM1tdID0gYmV6aWVyLmdldFBvaW50TGlzdCgxMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb2ludFwiLCBwb2ludExpc3QpO1xyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnRlc3ROb2RlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0dy50bygwLjIsIHsgcG9zaXRpb246IHBvaW50TGlzdFtpXSB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGVzdE5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgc3RhdGUgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImJ1aWxkLW9uZS10b3dlclwiLCAoaW5kZXgsIHRvd2VyQmFzZU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/lu7rpgKDkuIDluqfloZRcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy50b3dlcnNQcmVmYWJMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2Vyc1ByZWZhYkxpc3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZ0pzb24uanNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjModG93ZXJCYXNlTm9kZS5wb3NpdGlvbi54LCAwLCB0b3dlckJhc2VOb2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdG93ZXJCYXNlTm9kZS5nZXRDb21wb25lbnQoVG93ZXJCdWlsZEJhc2UpLnNldFRhcmdldFRvd2VyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zZXRUb3dlckJ1aWxkQmFzZSh0b3dlckJhc2VOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnjqnlrrbngrnkuK3kuoblvIDlp4vmuLjmiI/mjInpkq5cIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnN0YXJ0R2FtZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IHYzKDAsIC0xMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nYW1lU3RhcnRCdXR0b25CYXNlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uQmFzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2hvd0dyb3VuZEVudGVyQW5pbSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQnVpbGRCYXNlQ3RsKS5zaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKTtcclxuICAgICAgICAgICAgICAgIC8v5bGV56S65aGU55qE5Z+65bqn5Ye6546w55qE5Yqo55S7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0hvbWVJY29uRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubm9kZS5nZXRDb21cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCd1cGRhdGUtZ29sZC1sYWJlbCcsIHRoaXMucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1VJRW50ZXJBbmltKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1aUN0bCA9IGZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgIGlmICh1aUN0bCkge1xyXG4gICAgICAgICAgICAgICAgdWlDdGwuc2hvd1VJRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyBzaG93R3JvdW5kTWFwRW50ZXJBbmltKCl7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHBsYXllclRvdWNoT25Ta2lsbE5vZGUoc2tpbGxOb2RlOiBOb2RlLCB0YXJnZXRUb3dlcjogTm9kZSkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93SG9tZUljb25FbnRlckFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmhvbWVJY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ob21lSWNvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgZ3JvdW5kTWFwQ3RsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdW5kTWFwQ3RsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGdyb3VuZE1hcEN0bC5nZXRNYXBOb2RlTGlzdCgpLmdldFZhbHVlKDUsIDUpLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVJY29uTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuaG9tZUljb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMiwgeyBwb3NpdGlvbjogdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGxheVN0YXRyQnV0dG9uUHJlc3NBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBza2VsZUFuaW0gPSB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIlN0YXJ0R2FtZUJ1dHRvblwiKS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFuaW0gPSBza2VsZUFuaW0uZGVmYXVsdENsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0QW5pbVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHNrZWxlQW5pbS5nZXRTdGF0ZShkZWZhdWx0QW5pbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW5pbVN0YXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHNrZWxlQW5pbS5wbGF5KGRlZmF1bHRBbmltLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGxheWVyVG91Y2gzZE9iamVjdChyZXN1bHQ6IFBoeXNpY3NSYXlSZXN1bHRbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IHJlc3VsdFtpXS5jb2xsaWRlcjtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1zdGFydC1idXR0b24tYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZS51dWlkID09IHRoaXMuc3RhcnRHYW1lQnV0dG9uLnV1aWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LXN0YXJ0LWJ1dHRvbi1hbmltXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInRvdWNoLXNjcmVlbi10by0zZFwiLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RSZXN1bHRzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUN0bC5lbWl0KFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRHYW1lQ29uZmlnKCk6IEpzb25Bc3NldCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNvbmZpZ0pzb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudExldmVsTnVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckRhdGEuY3VycmVudExldmVsTnVtO1xyXG4gICAgfVxyXG4gICAgc2hvd0FkZEdvbGRBbmltRWZmZWN0KGdvbGRDb3VudDogbnVtYmVyLCB0YXJnZXRQb3M6IFZlYzMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ29sZEFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2luR29sZEFuaW1FZmZlY3QpLnNldEdvbGRDb3VudChnb2xkQ291bnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSB0YXJnZXRQb3M7XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxufVxyXG4iXX0=