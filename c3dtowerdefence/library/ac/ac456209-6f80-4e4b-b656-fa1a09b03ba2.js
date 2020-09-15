System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js", "./SkillCtl.js", "./GoldCtl.js", "./Menu/UpdateTowerUI.js", "../GameController.js", "./Menu/BuildTowerUI.js", "./GameWin/GameWinPrefab.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, Tween, view, v3, SpriteFrame, SpriteComponent, MenuUIBase, SkillCtl, GoldCtl, UpdateTowerUI, GameController, BuildTowerUI, GameWinPrefab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, UIController;

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

  function _reportPossibleCrUseOfMenuUIBase(extras) {
    _reporterNs.report("MenuUIBase", "./Menu/MenuUIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCtl(extras) {
    _reporterNs.report("SkillCtl", "./SkillCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoldCtl(extras) {
    _reporterNs.report("GoldCtl", "./GoldCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpdateTowerUI(extras) {
    _reporterNs.report("UpdateTowerUI", "./Menu/UpdateTowerUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildTowerUI(extras) {
    _reporterNs.report("BuildTowerUI", "./Menu/BuildTowerUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameWinPrefab(extras) {
    _reporterNs.report("GameWinPrefab", "./GameWin/GameWinPrefab", _context.meta, extras);
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
      CameraComponent = _cc.CameraComponent;
      isValid = _cc.isValid;
      Tween = _cc.Tween;
      view = _cc.view;
      v3 = _cc.v3;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuMenuUIBaseJs) {
      MenuUIBase = _MenuMenuUIBaseJs.MenuUIBase;
    }, function (_SkillCtlJs) {
      SkillCtl = _SkillCtlJs.SkillCtl;
    }, function (_GoldCtlJs) {
      GoldCtl = _GoldCtlJs.GoldCtl;
    }, function (_MenuUpdateTowerUIJs) {
      UpdateTowerUI = _MenuUpdateTowerUIJs.UpdateTowerUI;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_MenuBuildTowerUIJs) {
      BuildTowerUI = _MenuBuildTowerUIJs.BuildTowerUI;
    }, function (_GameWinGameWinPrefabJs) {
      GameWinPrefab = _GameWinGameWinPrefabJs.GameWinPrefab;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ac456IJb4BOS7ZW+hoJsDui", "UIController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: SpriteFrame
      }), _dec9 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UIController, _Component);

        function UIController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buildTowerPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateMenuPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor4, _assertThisInitialized(_this));

          _this.buildUINode = null;
          _this.updateUINode = null;

          _initializerDefineProperty(_this, "enemyInfoButton", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoButton", _descriptor6, _assertThisInitialized(_this));

          _this.isHoldSkillIcon = false;

          _initializerDefineProperty(_this, "bossIcon", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultPrefab", _descriptor8, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIController, [{
          key: "start",
          //游戏结果预制件
          // @property({ type: Node })
          // public currentWaveLabelNode: Node = null;
          // @property({ type: Prefab })
          // public startGameCountDownAnimPrefab: Prefab = null;
          // @property({ type: Prefab })
          // public goAnimPrefab: Prefab = null;
          value: function start() {
            var _this2 = this;

            // loader.loadRes("Enemy_0_Icon/spriteFrame",SpriteFrame, (err, result)=>{
            //     console.log("err", err)
            // })
            var screenSize = view.getVisibleSize();
            var width = screenSize.width;
            this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
            this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);
            console.log("ui controller start");
            this.gameController.on("touch-base-build-base", function (node) {
              //玩家点中了塔的基座
              //显示建造tower 的UI
              if (_this2.isHoldSkillIcon) {
                return;
              }

              if (isValid(_this2.updateUINode)) {
                _this2.updateUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                  error: Error()
                }), MenuUIBase) : MenuUIBase).close();
              }

              if (!isValid(_this2.buildUINode)) {
                _this2.buildUINode = instantiate(_this2.buildTowerPrefab);
                _this2.buildUINode.parent = _this2.node;

                _this2.buildUINode.getComponent(_crd && BuildTowerUI === void 0 ? (_reportPossibleCrUseOfBuildTowerUI({
                  error: Error()
                }), BuildTowerUI) : BuildTowerUI).init(_this2.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController).getGameConfig().json);
              }

              _this2.setUINodeTo3dPos(_this2.buildUINode, node);

              _this2.buildUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                error: Error()
              }), MenuUIBase) : MenuUIBase).open(node);
            });
            this.gameController.on("touch-tower", function (targetTower) {
              //点中了tower
              //如果托着技能点，那么不需要显示UI
              if (_this2.isHoldSkillIcon) {
                return;
              }

              if (isValid(_this2.buildUINode)) {
                _this2.buildUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                  error: Error()
                }), MenuUIBase) : MenuUIBase).close();
              }

              if (!isValid(_this2.updateUINode)) {
                _this2.updateUINode = instantiate(_this2.updateMenuPrefab);
                _this2.updateUINode.parent = _this2.node;

                _this2.updateUINode.getComponent(_crd && UpdateTowerUI === void 0 ? (_reportPossibleCrUseOfUpdateTowerUI({
                  error: Error()
                }), UpdateTowerUI) : UpdateTowerUI).init(_this2.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController).getGameConfig().json);
              }

              _this2.setUINodeTo3dPos(_this2.updateUINode, targetTower); // this.updateUINode.getComponent(MenuUIBase).open(targetTower);


              _this2.updateUINode.getComponent(_crd && UpdateTowerUI === void 0 ? (_reportPossibleCrUseOfUpdateTowerUI({
                error: Error()
              }), UpdateTowerUI) : UpdateTowerUI).open(targetTower);
            }); // this.node.on("update-gold-label", (goldCount: number)=>{
            //     this.node.getComponent(GoldCtl).updateGoldCountLabel(goldCount);
            // });
            // this.gameController.on("refer-current-wave", (waveNum) => {
            //     this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
            // });
          }
        }, {
          key: "showGameWinUI",
          value: function showGameWinUI(deadEnemyData) {
            var node = instantiate(this.gameResultPrefab);
            node.parent = this.node;
            var gameConfig = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
            node.getComponent(_crd && GameWinPrefab === void 0 ? (_reportPossibleCrUseOfGameWinPrefab({
              error: Error()
            }), GameWinPrefab) : GameWinPrefab).setGameResult(true, deadEnemyData, gameConfig, this);
          }
        }, {
          key: "showGameLossUI",
          value: function showGameLossUI(deadEnemyData) {
            var node = instantiate(this.gameResultPrefab);
            node.parent = this.node;
            var gameConfig = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
            node.getComponent(_crd && GameWinPrefab === void 0 ? (_reportPossibleCrUseOfGameWinPrefab({
              error: Error()
            }), GameWinPrefab) : GameWinPrefab).setGameResult(false, deadEnemyData, gameConfig, this);
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            var _this3 = this;

            return this.node.getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl).showEnterAnim().then(function () {
              return _this3.node.getComponent(_crd && GoldCtl === void 0 ? (_reportPossibleCrUseOfGoldCtl({
                error: Error()
              }), GoldCtl) : GoldCtl).showEnterAnim();
            }).then(function () {
              return _this3.showButtonUIEnter();
            });
          }
        }, {
          key: "showButtonUIEnter",
          value: function showButtonUIEnter() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var list = [_this4.enemyInfoButton, _this4.towerInfoButton];
              var screenSize = view.getVisibleSize();
              var screenWidth = screenSize.width;
              var promiseList = [];

              var runAction = function runAction(node, index) {
                return new Promise(function (resolve, reject) {
                  var dir = index === 0 ? -1 : 1;
                  var tw = new Tween(node);
                  tw.to(0.4, {
                    position: v3(-dir * 100 + screenWidth * 0.5 * dir, 0, 0)
                  });
                  tw.call(function () {
                    console.log("进场结束");
                    resolve();
                  });
                  tw.start();
                });
              };

              for (var i = 0; i < list.length; i++) {
                var node = list[i];
                promiseList.push(runAction(node, i));
              }

              Promise.all(promiseList).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "setUINodeTo3dPos",
          value: function setUINodeTo3dPos(uiNode, node3d) {
            var pos;
            pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
            uiNode.setPosition(pos);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            console.log("on button click", customData);

            switch (customData) {
              case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.emit("player-click-game");
                break;

              default:
                break;
            }
          }
        }, {
          key: "setHoldSkillIcon",
          value: function setHoldSkillIcon(value) {
            //拖起了 技能点
            this.isHoldSkillIcon = value;
          }
        }, {
          key: "showBossIconAnim",
          value: function showBossIconAnim() {
            var _this5 = this;

            //显示
            return new Promise(function (resolve, reject) {
              var node = new Node();
              var spriteCom = node.addComponent(SpriteComponent);
              spriteCom.spriteFrame = _this5.bossIcon;
              node.parent = _this5.node;
              var tw = new Tween(node);
              tw.set({
                scale: v3(2, 2, 2),
                position: v3(0, 240, 0)
              });
              tw.to(0.2, {
                scale: v3(1, 1, 1)
              }, {
                easing: "backIn"
              });
              tw.delay(0.8);
              tw.hide();
              tw.call(function () {
                node.destroy();
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "playerClickNextLevelButton",
          value: function playerClickNextLevelButton() {
            //玩家点击了下一关的按钮
            this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).enterNextLevel();
          }
        }]);

        return UIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildTowerPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "updateMenuPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bossIcon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameResultPrefab", [_dec9], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJUd2VlbiIsInZpZXciLCJ2MyIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlQ29tcG9uZW50IiwiTWVudVVJQmFzZSIsIlNraWxsQ3RsIiwiR29sZEN0bCIsIlVwZGF0ZVRvd2VyVUkiLCJHYW1lQ29udHJvbGxlciIsIkJ1aWxkVG93ZXJVSSIsIkdhbWVXaW5QcmVmYWIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiYnVpbGRVSU5vZGUiLCJ1cGRhdGVVSU5vZGUiLCJpc0hvbGRTa2lsbEljb24iLCJzY3JlZW5TaXplIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsImVuZW15SW5mb0J1dHRvbiIsInBvc2l0aW9uIiwidG93ZXJJbmZvQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImdhbWVDb250cm9sbGVyIiwib24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50IiwiaW5pdCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJkZWFkRW5lbXlEYXRhIiwiZ2FtZVJlc3VsdFByZWZhYiIsImdhbWVDb25maWciLCJzZXRHYW1lUmVzdWx0Iiwic2hvd0VudGVyQW5pbSIsInRoZW4iLCJzaG93QnV0dG9uVUlFbnRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibGlzdCIsInNjcmVlbldpZHRoIiwicHJvbWlzZUxpc3QiLCJydW5BY3Rpb24iLCJpbmRleCIsImRpciIsInR3IiwidG8iLCJjYWxsIiwic3RhcnQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImFsbCIsInVpTm9kZSIsIm5vZGUzZCIsInBvcyIsImNhbWVyYU5vZGUiLCJjb252ZXJ0VG9VSU5vZGUiLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInRhcmdldCIsImRlc3Ryb3kiLCJlbWl0IiwidmFsdWUiLCJzcHJpdGVDb20iLCJhZGRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImJvc3NJY29uIiwic2V0Iiwic2NhbGUiLCJlYXNpbmciLCJkZWxheSIsImhpZGUiLCJlbnRlck5leHRMZXZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBdUJDLE1BQUFBLE8sT0FBQUEsTztBQUEwRUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTs7OztBQUNqTEMsTUFBQUEsVSxxQkFBQUEsVTs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROztBQUNBQyxNQUFBQSxPLGNBQUFBLE87O0FBQ0FDLE1BQUFBLGEsd0JBQUFBLGE7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFksdUJBQUFBLFk7O0FBQ0FDLE1BQUFBLGEsMkJBQUFBLGE7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCbkIsVSxDQUF0Qm1CLE87QUFBU0MsTUFBQUEsUSxHQUFhcEIsVSxDQUFib0IsUTs7OEJBR0pDLFks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QUFDd0IsR0FBSCxDQUFPO0FBQUVDLGdCQUFBQSxLQUFLLEVBQUVoRixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVg7QUFBc0JxQixnQkFBQUEsUUFBUSxFQUFFckIsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVDtBQUFsQyxlQUFQO0FBQ0F1RCxjQUFBQSxFQUFFLENBQUNDLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRXdCLGdCQUFBQSxLQUFLLEVBQUVoRixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsZUFBWCxFQUFtQztBQUFFaUYsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQW5DO0FBQ0ExQixjQUFBQSxFQUFFLENBQUMyQixLQUFILENBQVMsR0FBVDtBQUNBM0IsY0FBQUEsRUFBRSxDQUFDNEIsSUFBSDtBQUNBNUIsY0FBQUEsRUFBRSxDQUFDRSxJQUFILENBQVEsWUFBTTtBQUNWOUIsZ0JBQUFBLElBQUksQ0FBQzZDLE9BQUw7QUFDQXpCLGdCQUFBQSxPQUFPO0FBQ1YsZUFIRDtBQUlBUSxjQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSCxhQWZNLENBQVA7QUFnQkg7Ozt1REFDa0M7QUFDL0I7QUFDQSxpQkFBS2pDLGNBQUwsQ0FBb0JHLFlBQXBCO0FBQUE7QUFBQSxrREFBaUR3RCxjQUFqRDtBQUNIOzs7O1FBeEw2QjVGLFM7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBRUksSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUlSLEk7Ozs7Ozs7aUJBTUssSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUtBLEk7Ozs7Ozs7aUJBR0csSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgQ2FtZXJhQ29tcG9uZW50LCBWZWMzLCBpc1ZhbGlkLCBMYWJlbENvbXBvbmVudCwgRXZlbnRUb3VjaCwgQnV0dG9uQ29tcG9uZW50LCBBbmltYXRpb25Db21wb25lbnQsIFR3ZWVuLCB2aWV3LCB2MywgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgTG9hZGVyLCBsb2FkZXIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnUvTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFNraWxsQ3RsIH0gZnJvbSAnLi9Ta2lsbEN0bCc7XHJcbmltcG9ydCB7IEdvbGRDdGwgfSBmcm9tICcuL0dvbGRDdGwnO1xyXG5pbXBvcnQgeyBVcGRhdGVUb3dlclVJIH0gZnJvbSAnLi9NZW51L1VwZGF0ZVRvd2VyVUknO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQnVpbGRUb3dlclVJIH0gZnJvbSAnLi9NZW51L0J1aWxkVG93ZXJVSSc7XHJcbmltcG9ydCB7IEdhbWVXaW5QcmVmYWIgfSBmcm9tICcuL0dhbWVXaW4vR2FtZVdpblByZWZhYic7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVUlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVpbGRUb3dlclByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHVwZGF0ZU1lbnVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdXBkYXRlVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3dlckluZm9CdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNIb2xkU2tpbGxJY29uOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5ouW6LW35LqGIOaKgOiDveeCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgYm9zc0ljb246IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXHJcbiAgICBwdWJsaWMgZ2FtZVJlc3VsdFByZWZhYjogUHJlZmFiID0gbnVsbDsgLy/muLjmiI/nu5PmnpzpooTliLbku7ZcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyBjdXJyZW50V2F2ZUxhYmVsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgc3RhcnRHYW1lQ291bnREb3duQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIC8vIHB1YmxpYyBnb0FuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBsb2FkZXIubG9hZFJlcyhcIkVuZW15XzBfSWNvbi9zcHJpdGVGcmFtZVwiLFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycilcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5lbmVteUluZm9CdXR0b24ucG9zaXRpb24gPSB2Myh3aWR0aCAqIC0wLjUgLSAxMDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudG93ZXJJbmZvQnV0dG9uLnBvc2l0aW9uID0gdjMod2lkdGggKiAwLjUgKyAxMDAsIDAsIDApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInVpIGNvbnRyb2xsZXIgc3RhcnRcIilcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v546p5a6254K55Lit5LqG5aGU55qE5Z+65bqnXHJcbiAgICAgICAgICAgIC8v5pi+56S65bu66YCgdG93ZXIg55qEVUlcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb2xkU2tpbGxJY29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy5idWlsZFVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1aWxkVG93ZXJQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChCdWlsZFRvd2VyVUkpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMuYnVpbGRVSU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKG5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXRvd2VyXCIsICh0YXJnZXRUb3dlcjogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eCueS4reS6hnRvd2VyXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5omY552A5oqA6IO954K577yM6YKj5LmI5LiN6ZyA6KaB5pi+56S6VUlcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb2xkU2tpbGxJY29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5idWlsZFVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMudXBkYXRlVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnVwZGF0ZU1lbnVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KFVwZGF0ZVRvd2VyVUkpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy51cGRhdGVVSU5vZGUsIHRhcmdldFRvd2VyKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoZ29sZENvdW50OiBudW1iZXIpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkudXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwicmVmZXItY3VycmVudC13YXZlXCIsICh3YXZlTnVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFdhdmVMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB3YXZlTnVtO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0dhbWVXaW5VSShkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSl7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdhbWVSZXN1bHRQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEdhbWVDb25maWcoKS5qc29uXHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVdpblByZWZhYikuc2V0R2FtZVJlc3VsdCh0cnVlLCBkZWFkRW5lbXlEYXRhLCBnYW1lQ29uZmlnLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHNob3dHYW1lTG9zc1VJKGRlYWRFbmVteURhdGE6IERlYWRFbmVteU9ialtdKXtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ2FtZVJlc3VsdFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb25cclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChHYW1lV2luUHJlZmFiKS5zZXRHYW1lUmVzdWx0KGZhbHNlLCBkZWFkRW5lbXlEYXRhLCBnYW1lQ29uZmlnLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHNob3dVSUVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChTa2lsbEN0bCkuc2hvd0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHb2xkQ3RsKS5zaG93RW50ZXJBbmltKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dCdXR0b25VSUVudGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaG93QnV0dG9uVUlFbnRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFt0aGlzLmVuZW15SW5mb0J1dHRvbiwgdGhpcy50b3dlckluZm9CdXR0b25dXHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSBzY3JlZW5TaXplLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgcnVuQWN0aW9uID0gKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSBpbmRleCA9PT0gMCA/IC0xIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcudG8oMC40LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygtIGRpciAqIDEwMCArIHNjcmVlbldpZHRoICogMC41ICogZGlyLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+Wcuue7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChydW5BY3Rpb24obm9kZSwgaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VMaXN0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0VUlOb2RlVG8zZFBvcyh1aU5vZGU6IE5vZGUsIG5vZGUzZDogTm9kZSkge1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzM7XHJcbiAgICAgICAgcG9zID0gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLmNvbnZlcnRUb1VJTm9kZShub2RlM2QucG9zaXRpb24sIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdWlOb2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGJ1dHRvbiBjbGlja1wiLCBjdXN0b21EYXRhKTtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQtZ2FtZSc6XHJcbiAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6huW8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwicGxheWVyLWNsaWNrLWdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhvbGRTa2lsbEljb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvL+aLlui1t+S6hiDmioDog73ngrlcclxuICAgICAgICB0aGlzLmlzSG9sZFNraWxsSWNvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2hvd0Jvc3NJY29uQW5pbSgpIHtcclxuICAgICAgICAvL+aYvuekulxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUNvbSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNwcml0ZUNvbS5zcHJpdGVGcmFtZSA9IHRoaXMuYm9zc0ljb247XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnNldCh7IHNjYWxlOiB2MygyLCAyLCAyKSwgcG9zaXRpb246IHYzKDAsIDI0MCwgMCkgfSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSwgeyBlYXNpbmc6IFwiYmFja0luXCIgfSk7XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuOClcclxuICAgICAgICAgICAgdHcuaGlkZSgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBwbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpe1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5LiL5LiA5YWz55qE5oyJ6ZKuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19