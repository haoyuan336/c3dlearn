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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIlR3ZWVuIiwidmlldyIsInYzIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiTWVudVVJQmFzZSIsIlNraWxsQ3RsIiwiR29sZEN0bCIsIlVwZGF0ZVRvd2VyVUkiLCJCdWlsZFRvd2VyVUkiLCJHYW1lV2luUHJlZmFiIiwiR2FtZUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiZ2FtZUNvbnRyb2xsZXIiLCJidWlsZFVJTm9kZSIsInVwZGF0ZVVJTm9kZSIsImlzSG9sZFNraWxsSWNvbiIsImdldENvbXBvbmVudCIsInNjcmVlblNpemUiLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiZW5lbXlJbmZvQnV0dG9uIiwicG9zaXRpb24iLCJ0b3dlckluZm9CdXR0b24iLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50IiwiaW5pdCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJzaG93VUlFbnRlckFuaW0iLCJiaW5kIiwic2hvd0dhbWVMb3NzVUkiLCJzaG93R2FtZVdpblVJIiwic2hvd0N1cnJlbnRMZXZlbEljb25BbmltIiwiY2xvc2VTb21lVUkiLCJjYiIsInR3IiwiY3VycmVudExldmVsTGFiZWxJY29uIiwiYWN0aXZlIiwic3RyaW5nIiwiZ2V0Q3VycmVudExldmVsTnVtIiwic2V0Iiwic2NhbGUiLCJ0byIsImVhc2luZyIsImRlbGF5IiwiY2FsbCIsInN0YXJ0IiwiZGVhZEVuZW15RGF0YSIsImdhbWVSZXN1bHRQcmVmYWIiLCJnYW1lQ29uZmlnIiwic2V0R2FtZVJlc3VsdCIsImVtaXQiLCJzaG93RW50ZXJBbmltIiwidGhlbiIsInNob3dCdXR0b25VSUVudGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsaXN0Iiwic2NyZWVuV2lkdGgiLCJwcm9taXNlTGlzdCIsInJ1bkFjdGlvbiIsImluZGV4IiwiZGlyIiwiaSIsImxlbmd0aCIsInB1c2giLCJhbGwiLCJ1aU5vZGUiLCJub2RlM2QiLCJwb3MiLCJjYW1lcmFOb2RlIiwiY29udmVydFRvVUlOb2RlIiwic2V0UG9zaXRpb24iLCJldmVudCIsImN1c3RvbURhdGEiLCJ0YXJnZXQiLCJkZXN0cm95IiwidmFsdWUiLCJzcHJpdGVDb20iLCJhZGRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImJvc3NJY29uIiwiaGlkZSIsImVudGVyTmV4dExldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUF1QkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLGMsT0FBQUEsYztBQUFpRUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQ0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ2xOQyxNQUFBQSxVLHFCQUFBQSxVOztBQUNBQyxNQUFBQSxRLGVBQUFBLFE7O0FBQ0FDLE1BQUFBLE8sY0FBQUEsTzs7QUFDQUMsTUFBQUEsYSx3QkFBQUEsYTs7QUFDQUMsTUFBQUEsWSx1QkFBQUEsWTs7QUFDQUMsTUFBQUEsYSwyQkFBQUEsYTs7QUFFQUMsTUFBQUEsYyxxQkFBQUEsYzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JyQixVLENBQXRCcUIsTztBQUFTQyxNQUFBQSxRLEdBQWF0QixVLENBQWJzQixROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVyQjtBQUFSLE9BQUQsQyxVQUVSbUIsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXJCO0FBQVIsT0FBRCxDLFVBS1JtQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFdEI7QUFBUixPQUFELEMsVUFNUm9CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUV0QjtBQUFSLE9BQUQsQyxVQUVSb0IsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRXRCO0FBQVIsT0FBRCxDLFVBS1JvQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFYjtBQUFSLE9BQUQsQyxVQUdSVyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFckI7QUFBUixPQUFELEMsVUFHUm1CLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUV0QjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBckJGdUIsYyxHQUFpQyxJOzs7O2dCQUtoQ0MsVyxHQUFvQixJO2dCQUNwQkMsWSxHQUFxQixJOzs7Ozs7Z0JBT3JCQyxlLEdBQTJCLEs7Ozs7Ozs7Ozs7Ozs7QUFVbkM7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO2tDQUNRO0FBQUE7O0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUJBQUtILGNBQUwsR0FBc0JaLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCZ0IsWUFBdkI7QUFBQTtBQUFBLGlEQUF0QjtBQUNBLGdCQUFJQyxVQUFVLEdBQUdyQixJQUFJLENBQUNzQixjQUFMLEVBQWpCO0FBQ0EsZ0JBQUlDLEtBQUssR0FBR0YsVUFBVSxDQUFDRSxLQUF2QjtBQUNBLGlCQUFLQyxlQUFMLENBQXFCQyxRQUFyQixHQUFnQ3hCLEVBQUUsQ0FBQ3NCLEtBQUssR0FBRyxDQUFDLEdBQVQsR0FBZSxHQUFoQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFsQztBQUNBLGlCQUFLRyxlQUFMLENBQXFCRCxRQUFyQixHQUFnQ3hCLEVBQUUsQ0FBQ3NCLEtBQUssR0FBRyxHQUFSLEdBQWMsR0FBZixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFsQztBQUVBSSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLGlCQUFLWixjQUFMLENBQW9CYSxJQUFwQixDQUF5QkMsRUFBekIsQ0FBNEIsdUJBQTVCLEVBQXFELFVBQUNELElBQUQsRUFBZ0I7QUFDakU7QUFDQTtBQUNBLGtCQUFJLE1BQUksQ0FBQ1YsZUFBVCxFQUEwQjtBQUN0QjtBQUNIOztBQUNELGtCQUFJdEIsT0FBTyxDQUFDLE1BQUksQ0FBQ3FCLFlBQU4sQ0FBWCxFQUFnQztBQUM1QixnQkFBQSxNQUFJLENBQUNBLFlBQUwsQ0FBa0JFLFlBQWxCO0FBQUE7QUFBQSw4Q0FBMkNXLEtBQTNDO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQ2xDLE9BQU8sQ0FBQyxNQUFJLENBQUNvQixXQUFOLENBQVosRUFBZ0M7QUFDNUIsZ0JBQUEsTUFBSSxDQUFDQSxXQUFMLEdBQW1CdEIsV0FBVyxDQUFDLE1BQUksQ0FBQ3FDLGdCQUFOLENBQTlCO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDZixXQUFMLENBQWlCZ0IsTUFBakIsR0FBMEIsTUFBSSxDQUFDSixJQUEvQjs7QUFDQSxnQkFBQSxNQUFJLENBQUNaLFdBQUwsQ0FBaUJHLFlBQWpCO0FBQUE7QUFBQSxrREFBNENjLElBQTVDLENBQWlELE1BQUksQ0FBQ2xCLGNBQUwsQ0FBb0JtQixhQUFwQixHQUFvQ0MsSUFBckYsRUFBMkYsTUFBSSxDQUFDcEIsY0FBaEc7QUFDSDs7QUFFRCxjQUFBLE1BQUksQ0FBQ3FCLGdCQUFMLENBQXNCLE1BQUksQ0FBQ3BCLFdBQTNCLEVBQXdDWSxJQUF4Qzs7QUFDQSxjQUFBLE1BQUksQ0FBQ1osV0FBTCxDQUFpQkcsWUFBakI7QUFBQTtBQUFBLDRDQUEwQ2tCLElBQTFDLENBQStDVCxJQUEvQztBQUNILGFBakJEO0FBa0JBLGlCQUFLYixjQUFMLENBQW9CYSxJQUFwQixDQUF5QkMsRUFBekIsQ0FBNEIsYUFBNUIsRUFBMkMsVUFBQ1MsV0FBRCxFQUF1QjtBQUM5RDtBQUNBO0FBQ0Esa0JBQUksTUFBSSxDQUFDcEIsZUFBVCxFQUEwQjtBQUN0QjtBQUNIOztBQUNELGtCQUFJdEIsT0FBTyxDQUFDLE1BQUksQ0FBQ29CLFdBQU4sQ0FBWCxFQUErQjtBQUMzQixnQkFBQSxNQUFJLENBQUNBLFdBQUwsQ0FBaUJHLFlBQWpCO0FBQUE7QUFBQSw4Q0FBMENXLEtBQTFDO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQ2xDLE9BQU8sQ0FBQyxNQUFJLENBQUNxQixZQUFOLENBQVosRUFBaUM7QUFDN0IsZ0JBQUEsTUFBSSxDQUFDQSxZQUFMLEdBQW9CdkIsV0FBVyxDQUFDLE1BQUksQ0FBQzZDLGdCQUFOLENBQS9CO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDdEIsWUFBTCxDQUFrQmUsTUFBbEIsR0FBMkIsTUFBSSxDQUFDSixJQUFoQzs7QUFDQSxnQkFBQSxNQUFJLENBQUNYLFlBQUwsQ0FBa0JFLFlBQWxCO0FBQUE7QUFBQSxvREFBOENjLElBQTlDLENBQW1ELE1BQUksQ0FBQ2xCLGNBQUwsQ0FBb0JtQixhQUFwQixHQUFvQ0MsSUFBdkYsRUFBNkYsTUFBSSxDQUFDcEIsY0FBbEc7QUFDSDs7QUFDRCxjQUFBLE1BQUksQ0FBQ3FCLGdCQUFMLENBQXNCLE1BQUksQ0FBQ25CLFlBQTNCLEVBQXlDcUIsV0FBekMsRUFkOEQsQ0FlOUQ7OztBQUNBLGNBQUEsTUFBSSxDQUFDckIsWUFBTCxDQUFrQkUsWUFBbEI7QUFBQTtBQUFBLGtEQUE4Q2tCLElBQTlDLENBQW1EQyxXQUFuRDtBQUNILGFBakJELEVBN0JJLENBK0NKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBS1YsSUFBTCxDQUFVQyxFQUFWLENBQWEsb0JBQWIsRUFBbUMsS0FBS1csZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBbkMsRUFBb0UsSUFBcEU7QUFDQSxpQkFBS2IsSUFBTCxDQUFVQyxFQUFWLENBQWEsbUJBQWIsRUFBa0MsS0FBS2EsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBbEMsRUFBa0UsSUFBbEU7QUFDQSxpQkFBS2IsSUFBTCxDQUFVQyxFQUFWLENBQWEsa0JBQWIsRUFBaUMsS0FBS2MsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBakMsRUFBZ0UsSUFBaEU7QUFDQSxpQkFBS2IsSUFBTCxDQUFVQyxFQUFWLENBQWEsOEJBQWIsRUFBNkMsS0FBS2Usd0JBQUwsQ0FBOEJILElBQTlCLENBQW1DLElBQW5DLENBQTdDLEVBQXVGLElBQXZGO0FBQ0EsaUJBQUtiLElBQUwsQ0FBVUMsRUFBVixDQUFhLGNBQWIsRUFBNkIsS0FBS2dCLFdBQUwsQ0FBaUJKLElBQWpCLENBQXNCLElBQXRCLENBQTdCLEVBQXlELElBQXpEO0FBQ0g7Ozt3Q0FDWTtBQUNUO0FBRUEsZ0JBQUc3QyxPQUFPLENBQUUsS0FBS29CLFdBQVAsQ0FBVixFQUE4QjtBQUMxQixtQkFBS0EsV0FBTCxDQUFpQkcsWUFBakI7QUFBQTtBQUFBLGdEQUE0Q1csS0FBNUM7QUFDSDs7QUFDRCxnQkFBSWxDLE9BQU8sQ0FBQyxLQUFLcUIsWUFBTixDQUFYLEVBQStCO0FBQzNCLG1CQUFLQSxZQUFMLENBQWtCRSxZQUFsQjtBQUFBO0FBQUEsa0RBQThDVyxLQUE5QztBQUNIO0FBQ0o7OzttREFDd0JnQixFLEVBQUk7QUFBQTs7QUFDekI7QUFDQSxnQkFBSUMsRUFBRSxHQUFHLElBQUlqRCxLQUFKLENBQVUsS0FBS2tELHFCQUFmLENBQVQ7QUFDQSxpQkFBS0EscUJBQUwsQ0FBMkJDLE1BQTNCLEdBQW9DLElBQXBDO0FBQ0EsaUJBQUtELHFCQUFMLENBQTJCN0IsWUFBM0IsQ0FBd0N0QixjQUF4QyxFQUF3RHFELE1BQXhELEdBQWlFLE9BQU8sS0FBS25DLGNBQUwsQ0FBb0JvQyxrQkFBcEIsS0FBMkMsQ0FBbEQsSUFBdUQsR0FBeEg7QUFDQUosWUFBQUEsRUFBRSxDQUFDSyxHQUFILENBQU87QUFBRUMsY0FBQUEsS0FBSyxFQUFFckQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVA7QUFDQStDLFlBQUFBLEVBQUUsQ0FBQ08sRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFRCxjQUFBQSxLQUFLLEVBQUVyRCxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsYUFBWCxFQUFtQztBQUFDdUQsY0FBQUEsTUFBTSxFQUFFO0FBQVQsYUFBbkM7QUFDQVIsWUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsR0FBVDtBQUNBVCxZQUFBQSxFQUFFLENBQUNVLElBQUgsQ0FBUSxZQUFNO0FBQ1YsY0FBQSxNQUFJLENBQUNULHFCQUFMLENBQTJCQyxNQUEzQixHQUFvQyxLQUFwQztBQUNBSCxjQUFBQSxFQUFFO0FBQ0wsYUFIRDtBQUlBQyxZQUFBQSxFQUFFLENBQUNXLEtBQUg7QUFFSDs7O3dDQUNhQyxhLEVBQStCO0FBQ3pDLGdCQUFJL0IsSUFBSSxHQUFHbEMsV0FBVyxDQUFDLEtBQUtrRSxnQkFBTixDQUF0QjtBQUNBaEMsWUFBQUEsSUFBSSxDQUFDSSxNQUFMLEdBQWMsS0FBS0osSUFBbkI7QUFDQSxnQkFBSWlDLFVBQVUsR0FBRyxLQUFLOUMsY0FBTCxDQUFvQm1CLGFBQXBCLEdBQW9DQyxJQUFyRDtBQUNBUCxZQUFBQSxJQUFJLENBQUNULFlBQUw7QUFBQTtBQUFBLGdEQUFpQzJDLGFBQWpDLENBQStDLElBQS9DLEVBQXFESCxhQUFyRCxFQUFvRUUsVUFBcEUsRUFBZ0YsSUFBaEYsRUFBc0YsS0FBSzlDLGNBQTNGO0FBQ0g7Ozt5Q0FDYzRDLGEsRUFBK0I7QUFDMUMsaUJBQUtkLFdBQUw7QUFDQSxnQkFBSWpCLElBQUksR0FBR2xDLFdBQVcsQ0FBQyxLQUFLa0UsZ0JBQU4sQ0FBdEI7QUFDQWhDLFlBQUFBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLEtBQUtKLElBQW5CO0FBQ0EsZ0JBQUlpQyxVQUFVLEdBQUcsS0FBSzlDLGNBQUwsQ0FBb0JtQixhQUFwQixHQUFvQ0MsSUFBckQ7QUFDQVAsWUFBQUEsSUFBSSxDQUFDVCxZQUFMO0FBQUE7QUFBQSxnREFBaUMyQyxhQUFqQyxDQUErQyxLQUEvQyxFQUFzREgsYUFBdEQsRUFBcUVFLFVBQXJFLEVBQWlGLElBQWpGLEVBQXVGLEtBQUs5QyxjQUE1RjtBQUNIOzs7MENBQ2UrQixFLEVBQUk7QUFBQTs7QUFDaEIsaUJBQUtsQixJQUFMLENBQVVtQyxJQUFWLENBQWUsWUFBZjtBQUNBLG1CQUFPLEtBQUtuQyxJQUFMLENBQVVULFlBQVY7QUFBQTtBQUFBLHNDQUFpQzZDLGFBQWpDLEdBQWlEQyxJQUFqRCxDQUFzRCxZQUFNO0FBQy9ELHFCQUFPLE1BQUksQ0FBQ3JDLElBQUwsQ0FBVVQsWUFBVjtBQUFBO0FBQUEsc0NBQWdDNkMsYUFBaEMsRUFBUDtBQUNILGFBRk0sRUFFSkMsSUFGSSxDQUVDLFlBQU07QUFDVixxQkFBTyxNQUFJLENBQUNDLGlCQUFMLEVBQVA7QUFDSCxhQUpNLEVBSUpELElBSkksQ0FJQyxZQUFNO0FBQ1Ysa0JBQUluQixFQUFKLEVBQVE7QUFDSkEsZ0JBQUFBLEVBQUU7QUFDTDtBQUNKLGFBUk0sQ0FBUDtBQVNIOzs7OENBQ21CO0FBQUE7O0FBQ2hCLG1CQUFPLElBQUlxQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJQyxJQUFJLEdBQUcsQ0FBQyxNQUFJLENBQUMvQyxlQUFOLEVBQXVCLE1BQUksQ0FBQ0UsZUFBNUIsQ0FBWDtBQUNBLGtCQUFJTCxVQUFVLEdBQUdyQixJQUFJLENBQUNzQixjQUFMLEVBQWpCO0FBQ0Esa0JBQUlrRCxXQUFXLEdBQUduRCxVQUFVLENBQUNFLEtBQTdCO0FBQ0Esa0JBQUlrRCxXQUFXLEdBQUcsRUFBbEI7O0FBQ0Esa0JBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUM3QyxJQUFELEVBQU84QyxLQUFQLEVBQWlCO0FBQy9CLHVCQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsc0JBQUlNLEdBQUcsR0FBR0QsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFDLENBQWYsR0FBbUIsQ0FBN0I7QUFDQSxzQkFBSTNCLEVBQUUsR0FBRyxJQUFJakQsS0FBSixDQUFVOEIsSUFBVixDQUFUO0FBQ0FtQixrQkFBQUEsRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1A5QixvQkFBQUEsUUFBUSxFQUFFeEIsRUFBRSxDQUFDLENBQUUyRSxHQUFGLEdBQVEsR0FBUixHQUFjSixXQUFXLEdBQUcsR0FBZCxHQUFvQkksR0FBbkMsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0M7QUFETCxtQkFBWDtBQUdBNUIsa0JBQUFBLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLFlBQU07QUFDVi9CLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0F5QyxvQkFBQUEsT0FBTztBQUNWLG1CQUhEO0FBSUFyQixrQkFBQUEsRUFBRSxDQUFDVyxLQUFIO0FBQ0gsaUJBWE0sQ0FBUDtBQWFILGVBZEQ7O0FBZUEsbUJBQUssSUFBSWtCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdOLElBQUksQ0FBQ08sTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsb0JBQUloRCxJQUFJLEdBQUcwQyxJQUFJLENBQUNNLENBQUQsQ0FBZjtBQUNBSixnQkFBQUEsV0FBVyxDQUFDTSxJQUFaLENBQWlCTCxTQUFTLENBQUM3QyxJQUFELEVBQU9nRCxDQUFQLENBQTFCO0FBQ0g7O0FBQ0RULGNBQUFBLE9BQU8sQ0FBQ1ksR0FBUixDQUFZUCxXQUFaLEVBQXlCUCxJQUF6QixDQUE4QixZQUFNO0FBQ2hDRyxnQkFBQUEsT0FBTztBQUNWLGVBRkQ7QUFHSCxhQTNCTSxDQUFQO0FBNEJIOzs7MkNBQ2dCWSxNLEVBQWNDLE0sRUFBYztBQUN6QyxnQkFBSUMsR0FBSjtBQUNBQSxZQUFBQSxHQUFHLEdBQUcsS0FBS0MsVUFBTCxDQUFnQmhFLFlBQWhCLENBQTZCeEIsZUFBN0IsRUFBOEN5RixlQUE5QyxDQUE4REgsTUFBTSxDQUFDekQsUUFBckUsRUFBK0UsS0FBS0ksSUFBcEYsQ0FBTjtBQUNBb0QsWUFBQUEsTUFBTSxDQUFDSyxXQUFQLENBQW1CSCxHQUFuQjtBQUNIOzs7d0NBQ2FJLEssRUFBd0JDLFUsRUFBWTtBQUM5QzdELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCNEQsVUFBL0I7O0FBQ0Esb0JBQVFBLFVBQVI7QUFDSSxtQkFBSyxZQUFMO0FBQ0k7QUFDQTdELGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCMkQsS0FBckI7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxPQUFiO0FBQ0EscUJBQUsxRSxjQUFMLENBQW9CYSxJQUFwQixDQUF5Qm1DLElBQXpCLENBQThCLG1CQUE5QjtBQUNBOztBQUNKO0FBQ0k7QUFSUjtBQVVIOzs7MkNBQ2dCMkIsSyxFQUFnQjtBQUM3QjtBQUNBLGlCQUFLeEUsZUFBTCxHQUF1QndFLEtBQXZCO0FBQ0g7Ozs2Q0FDa0I7QUFBQTs7QUFDZjtBQUNBLG1CQUFPLElBQUl2QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJekMsSUFBSSxHQUFHLElBQUlwQyxJQUFKLEVBQVg7QUFDQSxrQkFBSW1HLFNBQVMsR0FBRy9ELElBQUksQ0FBQ2dFLFlBQUwsQ0FBa0IxRixlQUFsQixDQUFoQjtBQUNBeUYsY0FBQUEsU0FBUyxDQUFDRSxXQUFWLEdBQXdCLE1BQUksQ0FBQ0MsUUFBN0I7QUFDQWxFLGNBQUFBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLE1BQUksQ0FBQ0osSUFBbkI7QUFDQSxrQkFBSW1CLEVBQUUsR0FBRyxJQUFJakQsS0FBSixDQUFVOEIsSUFBVixDQUFUO0FBQ0FtQixjQUFBQSxFQUFFLENBQUNLLEdBQUgsQ0FBTztBQUFFQyxnQkFBQUEsS0FBSyxFQUFFckQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFYO0FBQXNCd0IsZ0JBQUFBLFFBQVEsRUFBRXhCLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQ7QUFBbEMsZUFBUDtBQUNBK0MsY0FBQUEsRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFXO0FBQUVELGdCQUFBQSxLQUFLLEVBQUVyRCxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsZUFBWCxFQUFtQztBQUFFdUQsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQW5DO0FBQ0FSLGNBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTLEdBQVQ7QUFDQVQsY0FBQUEsRUFBRSxDQUFDZ0QsSUFBSDtBQUNBaEQsY0FBQUEsRUFBRSxDQUFDVSxJQUFILENBQVEsWUFBTTtBQUNWN0IsZ0JBQUFBLElBQUksQ0FBQzZELE9BQUw7QUFDQXJCLGdCQUFBQSxPQUFPO0FBQ1YsZUFIRDtBQUlBckIsY0FBQUEsRUFBRSxDQUFDVyxLQUFIO0FBQ0gsYUFmTSxDQUFQO0FBZ0JIOzs7dURBQ21DO0FBQ2hDO0FBQ0EsaUJBQUszQyxjQUFMLENBQW9CaUYsY0FBcEI7QUFDSCxXLENBQ0Q7QUFDQTtBQUNBOzs7OztRQWpPOEJ6RyxTOzs7OztpQkFHSSxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBS1IsSTs7Ozs7OztpQkFNSyxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBS0EsSTs7Ozs7OztpQkFHRyxJOzs7Ozs7O2lCQUdHLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIENhbWVyYUNvbXBvbmVudCwgVmVjMywgaXNWYWxpZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgQW5pbWF0aW9uQ29tcG9uZW50LCBUd2VlbiwgdmlldywgdjMsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQsIExvYWRlciwgbG9hZGVyLCBmaW5kLCBHYW1lLCBlYXNpbmcgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnUvTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFNraWxsQ3RsIH0gZnJvbSAnLi9Ta2lsbEN0bCc7XHJcbmltcG9ydCB7IEdvbGRDdGwgfSBmcm9tICcuL0dvbGRDdGwnO1xyXG5pbXBvcnQgeyBVcGRhdGVUb3dlclVJIH0gZnJvbSAnLi9NZW51L1VwZGF0ZVRvd2VyVUknO1xyXG5pbXBvcnQgeyBCdWlsZFRvd2VyVUkgfSBmcm9tICcuL01lbnUvQnVpbGRUb3dlclVJJztcclxuaW1wb3J0IHsgR2FtZVdpblByZWZhYiB9IGZyb20gJy4vR2FtZVdpbi9HYW1lV2luUHJlZmFiJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqIH0gZnJvbSAnLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVUlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVpbGRUb3dlclByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHVwZGF0ZU1lbnVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBHYW1lQ29udHJvbGxlciB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnVpbGRVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUluZm9CdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvd2VySW5mb0J1dHRvbjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0hvbGRTa2lsbEljb246IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbmi5botbfkuoYg5oqA6IO954K5XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBib3NzSWNvbjogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHRQcmVmYWI6IFByZWZhYiA9IG51bGw7IC8v5ri45oiP57uT5p6c6aKE5Yi25Lu2XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbExhYmVsSWNvbjogTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgY3VycmVudFdhdmVMYWJlbE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIHN0YXJ0R2FtZUNvdW50RG93bkFuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgZ29BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gbG9hZGVyLmxvYWRSZXMoXCJFbmVteV8wX0ljb24vc3ByaXRlRnJhbWVcIixTcHJpdGVGcmFtZSwgKGVyciwgcmVzdWx0KT0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gc2NyZWVuU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmVuZW15SW5mb0J1dHRvbi5wb3NpdGlvbiA9IHYzKHdpZHRoICogLTAuNSAtIDEwMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy50b3dlckluZm9CdXR0b24ucG9zaXRpb24gPSB2Myh3aWR0aCAqIDAuNSArIDEwMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidWkgY29udHJvbGxlciBzdGFydFwiKVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eOqeWutueCueS4reS6huWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvL+aYvuekuuW7uumAoHRvd2VyIOeahFVJXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG9sZFNraWxsSWNvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudXBkYXRlVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMuYnVpbGRVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWlsZFRvd2VyUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5nZXRDb21wb25lbnQoQnVpbGRUb3dlclVJKS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb24sIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy5idWlsZFVJTm9kZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4obm9kZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ0b3VjaC10b3dlclwiLCAodGFyZ2V0VG93ZXI6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/ngrnkuK3kuoZ0b3dlclxyXG4gICAgICAgICAgICAvL+WmguaenOaJmOedgOaKgOiDveeCue+8jOmCo+S5iOS4jemcgOimgeaYvuekulVJXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG9sZFNraWxsSWNvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuYnVpbGRVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy51cGRhdGVNZW51UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChVcGRhdGVUb3dlclVJKS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb24sIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VUlOb2RlVG8zZFBvcyh0aGlzLnVwZGF0ZVVJTm9kZSwgdGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChVcGRhdGVUb3dlclVJKS5vcGVuKHRhcmdldFRvd2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInVwZGF0ZS1nb2xkLWxhYmVsXCIsIChnb2xkQ291bnQ6IG51bWJlcik9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHb2xkQ3RsKS51cGRhdGVHb2xkQ291bnRMYWJlbChnb2xkQ291bnQpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJyZWZlci1jdXJyZW50LXdhdmVcIiwgKHdhdmVOdW0pID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50V2F2ZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHdhdmVOdW07XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbignc2hvdy11aS1lbnRlci1hbmltJywgdGhpcy5zaG93VUlFbnRlckFuaW0uYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1nYW1lLWxvc3MtdWlcIiwgdGhpcy5zaG93R2FtZUxvc3NVSS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93LWdhbWUtd2luLXVpXCIsIHRoaXMuc2hvd0dhbWVXaW5VSS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93LWN1cnJlbnQtbGV2ZWwtaWNvbi1hbmltXCIsIHRoaXMuc2hvd0N1cnJlbnRMZXZlbEljb25BbmltLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImNsb3NlLWFsbC11aVwiLCB0aGlzLmNsb3NlU29tZVVJLmJpbmQodGhpcyksdGhpcyk7XHJcbiAgICB9XHJcbiAgICBjbG9zZVNvbWVVSSgpe1xyXG4gICAgICAgIC8v6YeN5paw5Yi35pawVUlcclxuICAgICAgICBcclxuICAgICAgICBpZihpc1ZhbGlkKCB0aGlzLmJ1aWxkVUlOb2RlKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSSkuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KFVwZGF0ZVRvd2VyVUkpLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd0N1cnJlbnRMZXZlbEljb25BbmltKGNiKSB7XHJcbiAgICAgICAgLy8gbGV0IGxhYmVsID0gbmV3IE5vZGUoKTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jdXJyZW50TGV2ZWxMYWJlbEljb24pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTGFiZWxJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxMYWJlbEljb24uZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBcIuesrFwiICsgKHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCkgKyAxKSArICflhbMnO1xyXG4gICAgICAgIHR3LnNldCh7IHNjYWxlOiB2MygyLCAyLCAyKSB9KVxyXG4gICAgICAgIHR3LnRvKDAuNSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSwge2Vhc2luZzogXCJiYWNrT3V0XCJ9KVxyXG4gICAgICAgIHR3LmRlbGF5KDAuOCk7XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsTGFiZWxJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93R2FtZVdpblVJKGRlYWRFbmVteURhdGE6IERlYWRFbmVteU9ialtdKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdhbWVSZXN1bHRQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvblxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVXaW5QcmVmYWIpLnNldEdhbWVSZXN1bHQodHJ1ZSwgZGVhZEVuZW15RGF0YSwgZ2FtZUNvbmZpZywgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlcik7XHJcbiAgICB9XHJcbiAgICBzaG93R2FtZUxvc3NVSShkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VTb21lVUkoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ2FtZVJlc3VsdFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uXHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVdpblByZWZhYikuc2V0R2FtZVJlc3VsdChmYWxzZSwgZGVhZEVuZW15RGF0YSwgZ2FtZUNvbmZpZywgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlcik7XHJcbiAgICB9XHJcbiAgICBzaG93VUlFbnRlckFuaW0oY2IpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImVudGVyLWdhbWVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tpbGxDdGwpLnNob3dFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkuc2hvd0VudGVyQW5pbSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QnV0dG9uVUlFbnRlcigpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3dCdXR0b25VSUVudGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW3RoaXMuZW5lbXlJbmZvQnV0dG9uLCB0aGlzLnRvd2VySW5mb0J1dHRvbl1cclxuICAgICAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBydW5BY3Rpb24gPSAobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IGluZGV4ID09PSAwID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0dy50bygwLjQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKC0gZGlyICogMTAwICsgc2NyZWVuV2lkdGggKiAwLjUgKiBkaXIsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5Zy657uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHJ1bkFjdGlvbihub2RlLCBpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRVSU5vZGVUbzNkUG9zKHVpTm9kZTogTm9kZSwgbm9kZTNkOiBOb2RlKSB7XHJcbiAgICAgICAgbGV0IHBvczogVmVjMztcclxuICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkuY29udmVydFRvVUlOb2RlKG5vZGUzZC5wb3NpdGlvbiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB1aU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gYnV0dG9uIGNsaWNrXCIsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdzdGFydC1nYW1lJzpcclxuICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXllci1jbGljay1nYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIb2xkU2tpbGxJY29uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy/mi5botbfkuoYg5oqA6IO954K5XHJcbiAgICAgICAgdGhpcy5pc0hvbGRTa2lsbEljb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNob3dCb3NzSWNvbkFuaW0oKSB7XHJcbiAgICAgICAgLy/mmL7npLpcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVDb20gPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzcHJpdGVDb20uc3ByaXRlRnJhbWUgPSB0aGlzLmJvc3NJY29uO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMiwgMiwgMiksIHBvc2l0aW9uOiB2MygwLCAyNDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjgpXHJcbiAgICAgICAgICAgIHR3LmhpZGUoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcGxheWVyQ2xpY2tOZXh0TGV2ZWxCdXR0b24oKSB7XHJcbiAgICAgICAgLy/njqnlrrbngrnlh7vkuobkuIvkuIDlhbPnmoTmjInpkq5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaEFkcygpe1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikud2F0Y2hBZHMoKTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=