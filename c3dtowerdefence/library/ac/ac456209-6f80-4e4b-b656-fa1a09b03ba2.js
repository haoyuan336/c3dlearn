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
            }), GameWinPrefab) : GameWinPrefab).setGameResult(true, deadEnemyData, gameConfig);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJUd2VlbiIsInZpZXciLCJ2MyIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlQ29tcG9uZW50IiwiTWVudVVJQmFzZSIsIlNraWxsQ3RsIiwiR29sZEN0bCIsIlVwZGF0ZVRvd2VyVUkiLCJHYW1lQ29udHJvbGxlciIsIkJ1aWxkVG93ZXJVSSIsIkdhbWVXaW5QcmVmYWIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiYnVpbGRVSU5vZGUiLCJ1cGRhdGVVSU5vZGUiLCJpc0hvbGRTa2lsbEljb24iLCJzY3JlZW5TaXplIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsImVuZW15SW5mb0J1dHRvbiIsInBvc2l0aW9uIiwidG93ZXJJbmZvQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImdhbWVDb250cm9sbGVyIiwib24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50IiwiaW5pdCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJkZWFkRW5lbXlEYXRhIiwiZ2FtZVJlc3VsdFByZWZhYiIsImdhbWVDb25maWciLCJzZXRHYW1lUmVzdWx0Iiwic2hvd0VudGVyQW5pbSIsInRoZW4iLCJzaG93QnV0dG9uVUlFbnRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibGlzdCIsInNjcmVlbldpZHRoIiwicHJvbWlzZUxpc3QiLCJydW5BY3Rpb24iLCJpbmRleCIsImRpciIsInR3IiwidG8iLCJjYWxsIiwic3RhcnQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImFsbCIsInVpTm9kZSIsIm5vZGUzZCIsInBvcyIsImNhbWVyYU5vZGUiLCJjb252ZXJ0VG9VSU5vZGUiLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInRhcmdldCIsImRlc3Ryb3kiLCJlbWl0IiwidmFsdWUiLCJzcHJpdGVDb20iLCJhZGRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImJvc3NJY29uIiwic2V0Iiwic2NhbGUiLCJlYXNpbmciLCJkZWxheSIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsZSxPQUFBQSxlO0FBQXVCQyxNQUFBQSxPLE9BQUFBLE87QUFBMEVDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7Ozs7QUFDakxDLE1BQUFBLFUscUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFEsZUFBQUEsUTs7QUFDQUMsTUFBQUEsTyxjQUFBQSxPOztBQUNBQyxNQUFBQSxhLHdCQUFBQSxhOztBQUNBQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxZLHVCQUFBQSxZOztBQUNBQyxNQUFBQSxhLDJCQUFBQSxhOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQm5CLFUsQ0FBdEJtQixPO0FBQVNDLE1BQUFBLFEsR0FBYXBCLFUsQ0FBYm9CLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxj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QUFILENBQVMsR0FBVDtBQUNBM0IsY0FBQUEsRUFBRSxDQUFDNEIsSUFBSDtBQUNBNUIsY0FBQUEsRUFBRSxDQUFDRSxJQUFILENBQVEsWUFBTTtBQUNWOUIsZ0JBQUFBLElBQUksQ0FBQzZDLE9BQUw7QUFDQXpCLGdCQUFBQSxPQUFPO0FBQ1YsZUFIRDtBQUlBUSxjQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSCxhQWZNLENBQVA7QUFnQkg7Ozs7UUE5SzZCbEUsUzs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBSVIsSTs7Ozs7OztpQkFNSyxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBS0EsSTs7Ozs7OztpQkFHRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBDYW1lcmFDb21wb25lbnQsIFZlYzMsIGlzVmFsaWQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBCdXR0b25Db21wb25lbnQsIEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4sIHZpZXcsIHYzLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBMb2FkZXIsIGxvYWRlciB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudS9NZW51VUlCYXNlJztcclxuaW1wb3J0IHsgU2tpbGxDdGwgfSBmcm9tICcuL1NraWxsQ3RsJztcclxuaW1wb3J0IHsgR29sZEN0bCB9IGZyb20gJy4vR29sZEN0bCc7XHJcbmltcG9ydCB7IFVwZGF0ZVRvd2VyVUkgfSBmcm9tICcuL01lbnUvVXBkYXRlVG93ZXJVSSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCdWlsZFRvd2VyVUkgfSBmcm9tICcuL01lbnUvQnVpbGRUb3dlclVJJztcclxuaW1wb3J0IHsgR2FtZVdpblByZWZhYiB9IGZyb20gJy4vR2FtZVdpbi9HYW1lV2luUHJlZmFiJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdVSUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWlsZFRvd2VyUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlTWVudVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnVpbGRVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUluZm9CdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvd2VySW5mb0J1dHRvbjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0hvbGRTa2lsbEljb246IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbmi5botbfkuoYg5oqA6IO954K5XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBib3NzSWNvbjogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0UHJlZmFiOiBQcmVmYWIgPSBudWxsOyAvL+a4uOaIj+e7k+aenOmihOWItuS7tlxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRXYXZlTGFiZWxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIC8vIHB1YmxpYyBzdGFydEdhbWVDb3VudERvd25BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIGdvQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGxvYWRlci5sb2FkUmVzKFwiRW5lbXlfMF9JY29uL3Nwcml0ZUZyYW1lXCIsU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCk9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gc2NyZWVuU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmVuZW15SW5mb0J1dHRvbi5wb3NpdGlvbiA9IHYzKHdpZHRoICogLTAuNSAtIDEwMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy50b3dlckluZm9CdXR0b24ucG9zaXRpb24gPSB2Myh3aWR0aCAqIDAuNSArIDEwMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidWkgY29udHJvbGxlciBzdGFydFwiKVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJ0b3VjaC1iYXNlLWJ1aWxkLWJhc2VcIiwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrbngrnkuK3kuobloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy/mmL7npLrlu7rpgKB0b3dlciDnmoRVSVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvbGRTa2lsbEljb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSSkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy5idWlsZFVJTm9kZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4obm9kZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtdG93ZXJcIiwgKHRhcmdldFRvd2VyOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v54K55Lit5LqGdG93ZXJcclxuICAgICAgICAgICAgLy/lpoLmnpzmiZjnnYDmioDog73ngrnvvIzpgqPkuYjkuI3pnIDopoHmmL7npLpVSVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvbGRTa2lsbEljb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudXBkYXRlTWVudVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VUlOb2RlVG8zZFBvcyh0aGlzLnVwZGF0ZVVJTm9kZSwgdGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChVcGRhdGVUb3dlclVJKS5vcGVuKHRhcmdldFRvd2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInVwZGF0ZS1nb2xkLWxhYmVsXCIsIChnb2xkQ291bnQ6IG51bWJlcik9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHb2xkQ3RsKS51cGRhdGVHb2xkQ291bnRMYWJlbChnb2xkQ291bnQpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJyZWZlci1jdXJyZW50LXdhdmVcIiwgKHdhdmVOdW0pID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50V2F2ZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHdhdmVOdW07XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzaG93R2FtZVdpblVJKGRlYWRFbmVteURhdGE6IERlYWRFbmVteU9ialtdKXtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ2FtZVJlc3VsdFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb25cclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChHYW1lV2luUHJlZmFiKS5zZXRHYW1lUmVzdWx0KHRydWUsIGRlYWRFbmVteURhdGEsIGdhbWVDb25maWcpO1xyXG4gICAgfVxyXG4gICAgc2hvd1VJRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNraWxsQ3RsKS5zaG93RW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdvbGRDdGwpLnNob3dFbnRlckFuaW0oKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0J1dHRvblVJRW50ZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3dCdXR0b25VSUVudGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW3RoaXMuZW5lbXlJbmZvQnV0dG9uLCB0aGlzLnRvd2VySW5mb0J1dHRvbl1cclxuICAgICAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBydW5BY3Rpb24gPSAobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IGluZGV4ID09PSAwID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0dy50bygwLjQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKC0gZGlyICogMTAwICsgc2NyZWVuV2lkdGggKiAwLjUgKiBkaXIsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5Zy657uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHJ1bkFjdGlvbihub2RlLCBpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRVSU5vZGVUbzNkUG9zKHVpTm9kZTogTm9kZSwgbm9kZTNkOiBOb2RlKSB7XHJcbiAgICAgICAgbGV0IHBvczogVmVjMztcclxuICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkuY29udmVydFRvVUlOb2RlKG5vZGUzZC5wb3NpdGlvbiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB1aU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gYnV0dG9uIGNsaWNrXCIsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdzdGFydC1nYW1lJzpcclxuICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVtaXQoXCJwbGF5ZXItY2xpY2stZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SG9sZFNraWxsSWNvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8v5ouW6LW35LqGIOaKgOiDveeCuVxyXG4gICAgICAgIHRoaXMuaXNIb2xkU2tpbGxJY29uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzaG93Qm9zc0ljb25BbmltKCkge1xyXG4gICAgICAgIC8v5pi+56S6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlQ29tID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3ByaXRlQ29tLnNwcml0ZUZyYW1lID0gdGhpcy5ib3NzSWNvbjtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDIsIDIsIDIpLCBwb3NpdGlvbjogdjMoMCwgMjQwLCAwKSB9KTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9LCB7IGVhc2luZzogXCJiYWNrSW5cIiB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC44KVxyXG4gICAgICAgICAgICB0dy5oaWRlKClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==