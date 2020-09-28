System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js", "./SkillCtl.js", "./GoldCtl.js", "./Menu/UpdateTowerUI.js", "./Menu/BuildTowerUI.js", "./GameWin/GameWinPrefab.js", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, LabelComponent, Tween, view, v3, SpriteFrame, SpriteComponent, find, MenuUIBase, SkillCtl, GoldCtl, UpdateTowerUI, BuildTowerUI, GameWinPrefab, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, UIController;

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

  function _reportPossibleCrUseOfBuildTowerUI(extras) {
    _reporterNs.report("BuildTowerUI", "./Menu/BuildTowerUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameWinPrefab(extras) {
    _reporterNs.report("GameWinPrefab", "./GameWin/GameWinPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      Tween = _cc.Tween;
      view = _cc.view;
      v3 = _cc.v3;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      find = _cc.find;
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
    }, function (_MenuBuildTowerUIJs) {
      BuildTowerUI = _MenuBuildTowerUIJs.BuildTowerUI;
    }, function (_GameWinGameWinPrefabJs) {
      GameWinPrefab = _GameWinGameWinPrefabJs.GameWinPrefab;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ac456IJb4BOS7ZW+hoJsDui", "UIController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
        type: Node
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

          _initializerDefineProperty(_this, "buildTowerPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateMenuPrefab", _descriptor2, _assertThisInitialized(_this));

          _this.gameController = null;

          _initializerDefineProperty(_this, "cameraNode", _descriptor3, _assertThisInitialized(_this));

          _this.buildUINode = null;
          _this.updateUINode = null;

          _initializerDefineProperty(_this, "enemyInfoButton", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoButton", _descriptor5, _assertThisInitialized(_this));

          _this.isHoldSkillIcon = false;

          _initializerDefineProperty(_this, "bossIcon", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultPrefab", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentLevelLabelIcon", _descriptor8, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIController, [{
          key: "start",
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
            this.gameController = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            var screenSize = view.getVisibleSize();
            var width = screenSize.width;
            this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
            this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);
            console.log("ui controller start");
            this.gameController.node.on("touch-base-build-base", function (node) {
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
                }), BuildTowerUI) : BuildTowerUI).init(_this2.gameController.getGameConfig().json, _this2.gameController);
              }

              _this2.setUINodeTo3dPos(_this2.buildUINode, node);

              _this2.buildUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                error: Error()
              }), MenuUIBase) : MenuUIBase).open(node);
            });
            this.gameController.node.on("touch-tower", function (targetTower) {
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
                }), UpdateTowerUI) : UpdateTowerUI).init(_this2.gameController.getGameConfig().json, _this2.gameController);
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

            this.node.on('show-ui-enter-anim', this.showUIEnterAnim.bind(this), this);
            this.node.on("show-game-loss-ui", this.showGameLossUI.bind(this), this);
            this.node.on("show-game-win-ui", this.showGameWinUI.bind(this), this);
            this.node.on("show-current-level-icon-anim", this.showCurrentLevelIconAnim.bind(this), this);
            this.node.on("close-all-ui", this.closeSomeUI.bind(this), this);
            this.node.on("refer-current-tower-menu-ui", this.referTowerBuildMenuUI.bind(this), this);
            this.node.on("close-tower-menu-ui", this.coloseTowerBuildMenuUI.bind(this), this);
          }
        }, {
          key: "coloseTowerBuildMenuUI",
          value: function coloseTowerBuildMenuUI() {
            if (isValid(this.buildUINode)) {
              this.buildUINode.getComponent(_crd && BuildTowerUI === void 0 ? (_reportPossibleCrUseOfBuildTowerUI({
                error: Error()
              }), BuildTowerUI) : BuildTowerUI).close();
            }

            if (isValid(this.updateUINode)) {
              this.updateUINode.getComponent(_crd && UpdateTowerUI === void 0 ? (_reportPossibleCrUseOfUpdateTowerUI({
                error: Error()
              }), UpdateTowerUI) : UpdateTowerUI).close();
            }
          }
        }, {
          key: "referTowerBuildMenuUI",
          value: function referTowerBuildMenuUI() {
            if (isValid(this.buildUINode)) {
              this.buildUINode.getComponent(_crd && BuildTowerUI === void 0 ? (_reportPossibleCrUseOfBuildTowerUI({
                error: Error()
              }), BuildTowerUI) : BuildTowerUI).referCurrentUI();
            }
          }
        }, {
          key: "closeSomeUI",
          value: function closeSomeUI() {
            //重新刷新UI
            if (isValid(this.buildUINode)) {
              this.buildUINode.getComponent(_crd && BuildTowerUI === void 0 ? (_reportPossibleCrUseOfBuildTowerUI({
                error: Error()
              }), BuildTowerUI) : BuildTowerUI).close();
            }

            if (isValid(this.updateUINode)) {
              this.updateUINode.getComponent(_crd && UpdateTowerUI === void 0 ? (_reportPossibleCrUseOfUpdateTowerUI({
                error: Error()
              }), UpdateTowerUI) : UpdateTowerUI).close();
            }
          }
        }, {
          key: "showCurrentLevelIconAnim",
          value: function showCurrentLevelIconAnim(cb) {
            var _this3 = this;

            // let label = new Node();
            var tw = new Tween(this.currentLevelLabelIcon);
            this.currentLevelLabelIcon.active = true;
            this.currentLevelLabelIcon.getComponent(LabelComponent).string = "第" + (this.gameController.getCurrentLevelNum() + 1) + '关';
            tw.set({
              scale: v3(2, 2, 2)
            });
            tw.to(0.5, {
              scale: v3(1, 1, 1)
            }, {
              easing: "backOut"
            });
            tw.delay(0.8);
            tw.call(function () {
              _this3.currentLevelLabelIcon.active = false;
              cb();
            });
            tw.start();
          }
        }, {
          key: "showGameWinUI",
          value: function showGameWinUI(deadEnemyData) {
            var node = instantiate(this.gameResultPrefab);
            node.parent = this.node;
            var gameConfig = this.gameController.getGameConfig().json;
            node.getComponent(_crd && GameWinPrefab === void 0 ? (_reportPossibleCrUseOfGameWinPrefab({
              error: Error()
            }), GameWinPrefab) : GameWinPrefab).setGameResult(true, deadEnemyData, gameConfig, this, this.gameController);
          }
        }, {
          key: "showGameLossUI",
          value: function showGameLossUI(deadEnemyData) {
            this.closeSomeUI();
            var node = instantiate(this.gameResultPrefab);
            node.parent = this.node;
            var gameConfig = this.gameController.getGameConfig().json;
            node.getComponent(_crd && GameWinPrefab === void 0 ? (_reportPossibleCrUseOfGameWinPrefab({
              error: Error()
            }), GameWinPrefab) : GameWinPrefab).setGameResult(false, deadEnemyData, gameConfig, this, this.gameController);
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim(cb) {
            var _this4 = this;

            this.node.emit("enter-game");
            return this.node.getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl).showEnterAnim().then(function () {
              return _this4.node.getComponent(_crd && GoldCtl === void 0 ? (_reportPossibleCrUseOfGoldCtl({
                error: Error()
              }), GoldCtl) : GoldCtl).showEnterAnim();
            }).then(function () {
              return _this4.showButtonUIEnter();
            }).then(function () {
              if (cb) {
                cb();
              }
            });
          }
        }, {
          key: "showButtonUIEnter",
          value: function showButtonUIEnter() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              var list = [_this5.enemyInfoButton, _this5.towerInfoButton];
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
                this.gameController.node.emit("player-click-game");
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
            var _this6 = this;

            //显示
            return new Promise(function (resolve, reject) {
              var node = new Node();
              var spriteCom = node.addComponent(SpriteComponent);
              spriteCom.spriteFrame = _this6.bossIcon;
              node.parent = _this6.node;
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
            this.gameController.enterNextLevel();
          } // watchAds(){
          //     return this.gameController.getComponent(GameController).watchAds();
          // }

        }]);

        return UIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildTowerPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updateMenuPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bossIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameResultPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "currentLevelLabelIcon", [_dec9], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIlR3ZWVuIiwidmlldyIsInYzIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiTWVudVVJQmFzZSIsIlNraWxsQ3RsIiwiR29sZEN0bCIsIlVwZGF0ZVRvd2VyVUkiLCJCdWlsZFRvd2VyVUkiLCJHYW1lV2luUHJlZmFiIiwiR2FtZUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiZ2FtZUNvbnRyb2xsZXIiLCJidWlsZFVJTm9kZSIsInVwZGF0ZVVJTm9kZSIsImlzSG9sZFNraWxsSWNvbiIsImdldENvbXBvbmVudCIsInNjcmVlblNpemUiLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiZW5lbXlJbmZvQnV0dG9uIiwicG9zaXRpb24iLCJ0b3dlckluZm9CdXR0b24iLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50IiwiaW5pdCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJzaG93VUlFbnRlckFuaW0iLCJiaW5kIiwic2hvd0dhbWVMb3NzVUkiLCJzaG93R2FtZVdpblVJIiwic2hvd0N1cnJlbnRMZXZlbEljb25BbmltIiwiY2xvc2VTb21lVUkiLCJyZWZlclRvd2VyQnVpbGRNZW51VUkiLCJjb2xvc2VUb3dlckJ1aWxkTWVudVVJIiwicmVmZXJDdXJyZW50VUkiLCJjYiIsInR3IiwiY3VycmVudExldmVsTGFiZWxJY29uIiwiYWN0aXZlIiwic3RyaW5nIiwiZ2V0Q3VycmVudExldmVsTnVtIiwic2V0Iiwic2NhbGUiLCJ0byIsImVhc2luZyIsImRlbGF5IiwiY2FsbCIsInN0YXJ0IiwiZGVhZEVuZW15RGF0YSIsImdhbWVSZXN1bHRQcmVmYWIiLCJnYW1lQ29uZmlnIiwic2V0R2FtZVJlc3VsdCIsImVtaXQiLCJzaG93RW50ZXJBbmltIiwidGhlbiIsInNob3dCdXR0b25VSUVudGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsaXN0Iiwic2NyZWVuV2lkdGgiLCJwcm9taXNlTGlzdCIsInJ1bkFjdGlvbiIsImluZGV4IiwiZGlyIiwiaSIsImxlbmd0aCIsInB1c2giLCJhbGwiLCJ1aU5vZGUiLCJub2RlM2QiLCJwb3MiLCJjYW1lcmFOb2RlIiwiY29udmVydFRvVUlOb2RlIiwic2V0UG9zaXRpb24iLCJldmVudCIsImN1c3RvbURhdGEiLCJ0YXJnZXQiLCJkZXN0cm95IiwidmFsdWUiLCJzcHJpdGVDb20iLCJhZGRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImJvc3NJY29uIiwiaGlkZSIsImVudGVyTmV4dExldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUF1QkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLGMsT0FBQUEsYztBQUFpRUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsVyxP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UyxDQUFUO0FBQWxDLGVBQVA7QUFDQWtELGNBQUFBLEVBQUUsQ0FBQ08sRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFRCxnQkFBQUEsS0FBSyxFQUFFeEQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGVBQVgsRUFBbUM7QUFBRTBELGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFuQztBQUNBUixjQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBUyxHQUFUO0FBQ0FULGNBQUFBLEVBQUUsQ0FBQ2dELElBQUg7QUFDQWhELGNBQUFBLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLFlBQU07QUFDVmhDLGdCQUFBQSxJQUFJLENBQUNnRSxPQUFMO0FBQ0FyQixnQkFBQUEsT0FBTztBQUNWLGVBSEQ7QUFJQXJCLGNBQUFBLEVBQUUsQ0FBQ1csS0FBSDtBQUNILGFBZk0sQ0FBUDtBQWdCSDs7O3VEQUNtQztBQUNoQztBQUNBLGlCQUFLOUMsY0FBTCxDQUFvQm9GLGNBQXBCO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUFoUDhCNUcsUzs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUtSLEk7Ozs7Ozs7aUJBTUssSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUtBLEk7Ozs7Ozs7aUJBR0csSTs7Ozs7OztpQkFHRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBDYW1lcmFDb21wb25lbnQsIFZlYzMsIGlzVmFsaWQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBCdXR0b25Db21wb25lbnQsIEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4sIHZpZXcsIHYzLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBMb2FkZXIsIGxvYWRlciwgZmluZCwgR2FtZSwgZWFzaW5nIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBNZW51VUlCYXNlIH0gZnJvbSAnLi9NZW51L01lbnVVSUJhc2UnO1xyXG5pbXBvcnQgeyBTa2lsbEN0bCB9IGZyb20gJy4vU2tpbGxDdGwnO1xyXG5pbXBvcnQgeyBHb2xkQ3RsIH0gZnJvbSAnLi9Hb2xkQ3RsJztcclxuaW1wb3J0IHsgVXBkYXRlVG93ZXJVSSB9IGZyb20gJy4vTWVudS9VcGRhdGVUb3dlclVJJztcclxuaW1wb3J0IHsgQnVpbGRUb3dlclVJIH0gZnJvbSAnLi9NZW51L0J1aWxkVG93ZXJVSSc7XHJcbmltcG9ydCB7IEdhbWVXaW5QcmVmYWIgfSBmcm9tICcuL0dhbWVXaW4vR2FtZVdpblByZWZhYic7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VJQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBVSUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1aWxkVG93ZXJQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNZW51UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogR2FtZUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdXBkYXRlVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3dlckluZm9CdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNIb2xkU2tpbGxJY29uOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5ouW6LW35LqGIOaKgOiDveeCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgYm9zc0ljb246IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0UHJlZmFiOiBQcmVmYWIgPSBudWxsOyAvL+a4uOaIj+e7k+aenOmihOWItuS7tlxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWxMYWJlbEljb246IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRXYXZlTGFiZWxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIC8vIHB1YmxpYyBzdGFydEdhbWVDb3VudERvd25BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIGdvQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGxvYWRlci5sb2FkUmVzKFwiRW5lbXlfMF9JY29uL3Nwcml0ZUZyYW1lXCIsU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCk9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5lbmVteUluZm9CdXR0b24ucG9zaXRpb24gPSB2Myh3aWR0aCAqIC0wLjUgLSAxMDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudG93ZXJJbmZvQnV0dG9uLnBvc2l0aW9uID0gdjMod2lkdGggKiAwLjUgKyAxMDAsIDAsIDApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInVpIGNvbnRyb2xsZXIgc3RhcnRcIilcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ0b3VjaC1iYXNlLWJ1aWxkLWJhc2VcIiwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrbngrnkuK3kuobloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy/mmL7npLrlu7rpgKB0b3dlciDnmoRVSVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvbGRTa2lsbEljb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSSkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMuYnVpbGRVSU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKG5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidG91Y2gtdG93ZXJcIiwgKHRhcmdldFRvd2VyOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v54K55Lit5LqGdG93ZXJcclxuICAgICAgICAgICAgLy/lpoLmnpzmiZjnnYDmioDog73ngrnvvIzpgqPkuYjkuI3pnIDopoHmmL7npLpVSVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvbGRTa2lsbEljb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudXBkYXRlTWVudVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy51cGRhdGVVSU5vZGUsIHRhcmdldFRvd2VyKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoZ29sZENvdW50OiBudW1iZXIpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkudXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwicmVmZXItY3VycmVudC13YXZlXCIsICh3YXZlTnVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFdhdmVMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB3YXZlTnVtO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3Nob3ctdWktZW50ZXItYW5pbScsIHRoaXMuc2hvd1VJRW50ZXJBbmltLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctZ2FtZS1sb3NzLXVpXCIsIHRoaXMuc2hvd0dhbWVMb3NzVUkuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1nYW1lLXdpbi11aVwiLCB0aGlzLnNob3dHYW1lV2luVUkuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1jdXJyZW50LWxldmVsLWljb24tYW5pbVwiLCB0aGlzLnNob3dDdXJyZW50TGV2ZWxJY29uQW5pbS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJjbG9zZS1hbGwtdWlcIiwgdGhpcy5jbG9zZVNvbWVVSS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWZlci1jdXJyZW50LXRvd2VyLW1lbnUtdWlcIiwgdGhpcy5yZWZlclRvd2VyQnVpbGRNZW51VUkuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2xvc2UtdG93ZXItbWVudS11aVwiLCB0aGlzLmNvbG9zZVRvd2VyQnVpbGRNZW51VUkuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBjb2xvc2VUb3dlckJ1aWxkTWVudVVJKCkge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuYnVpbGRVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSSkuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChVcGRhdGVUb3dlclVJKS5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZmVyVG93ZXJCdWlsZE1lbnVVSSgpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChCdWlsZFRvd2VyVUkpLnJlZmVyQ3VycmVudFVJKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvc2VTb21lVUkoKSB7XHJcbiAgICAgICAgLy/ph43mlrDliLfmlrBVSVxyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChCdWlsZFRvd2VyVUkpLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudXBkYXRlVUlOb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93Q3VycmVudExldmVsSWNvbkFuaW0oY2IpIHtcclxuICAgICAgICAvLyBsZXQgbGFiZWwgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxMYWJlbEljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbi5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFwi56ysXCIgKyAodGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSArIDEpICsgJ+WFsyc7XHJcbiAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDIsIDIsIDIpIH0pXHJcbiAgICAgICAgdHcudG8oMC41LCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcclxuICAgICAgICB0dy5kZWxheSgwLjgpO1xyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0dhbWVXaW5VSShkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nYW1lUmVzdWx0UHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBsZXQgZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb25cclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChHYW1lV2luUHJlZmFiKS5zZXRHYW1lUmVzdWx0KHRydWUsIGRlYWRFbmVteURhdGEsIGdhbWVDb25maWcsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICB0aGlzLmNsb3NlU29tZVVJKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdhbWVSZXN1bHRQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvblxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVXaW5QcmVmYWIpLnNldEdhbWVSZXN1bHQoZmFsc2UsIGRlYWRFbmVteURhdGEsIGdhbWVDb25maWcsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvd1VJRW50ZXJBbmltKGNiKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJlbnRlci1nYW1lXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNraWxsQ3RsKS5zaG93RW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdvbGRDdGwpLnNob3dFbnRlckFuaW0oKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0J1dHRvblVJRW50ZXIoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaG93QnV0dG9uVUlFbnRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFt0aGlzLmVuZW15SW5mb0J1dHRvbiwgdGhpcy50b3dlckluZm9CdXR0b25dXHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSBzY3JlZW5TaXplLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgcnVuQWN0aW9uID0gKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSBpbmRleCA9PT0gMCA/IC0xIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcudG8oMC40LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygtIGRpciAqIDEwMCArIHNjcmVlbldpZHRoICogMC41ICogZGlyLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+Wcuue7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChydW5BY3Rpb24obm9kZSwgaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VMaXN0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0VUlOb2RlVG8zZFBvcyh1aU5vZGU6IE5vZGUsIG5vZGUzZDogTm9kZSkge1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzM7XHJcbiAgICAgICAgcG9zID0gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLmNvbnZlcnRUb1VJTm9kZShub2RlM2QucG9zaXRpb24sIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdWlOb2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGJ1dHRvbiBjbGlja1wiLCBjdXN0b21EYXRhKTtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQtZ2FtZSc6XHJcbiAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6huW8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5ZXItY2xpY2stZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SG9sZFNraWxsSWNvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8v5ouW6LW35LqGIOaKgOiDveeCuVxyXG4gICAgICAgIHRoaXMuaXNIb2xkU2tpbGxJY29uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzaG93Qm9zc0ljb25BbmltKCkge1xyXG4gICAgICAgIC8v5pi+56S6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlQ29tID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3ByaXRlQ29tLnNwcml0ZUZyYW1lID0gdGhpcy5ib3NzSWNvbjtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDIsIDIsIDIpLCBwb3NpdGlvbjogdjMoMCwgMjQwLCAwKSB9KTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9LCB7IGVhc2luZzogXCJiYWNrSW5cIiB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC44KVxyXG4gICAgICAgICAgICB0dy5oaWRlKClcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uKCkge1xyXG4gICAgICAgIC8v546p5a6254K55Ye75LqG5LiL5LiA5YWz55qE5oyJ6ZKuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbnRlck5leHRMZXZlbCgpO1xyXG4gICAgfVxyXG4gICAgLy8gd2F0Y2hBZHMoKXtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLndhdGNoQWRzKCk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19