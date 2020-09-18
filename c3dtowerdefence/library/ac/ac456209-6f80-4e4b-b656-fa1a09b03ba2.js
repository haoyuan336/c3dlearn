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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIlR3ZWVuIiwidmlldyIsInYzIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiTWVudVVJQmFzZSIsIlNraWxsQ3RsIiwiR29sZEN0bCIsIlVwZGF0ZVRvd2VyVUkiLCJCdWlsZFRvd2VyVUkiLCJHYW1lV2luUHJlZmFiIiwiR2FtZUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiZ2FtZUNvbnRyb2xsZXIiLCJidWlsZFVJTm9kZSIsInVwZGF0ZVVJTm9kZSIsImlzSG9sZFNraWxsSWNvbiIsImdldENvbXBvbmVudCIsInNjcmVlblNpemUiLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiZW5lbXlJbmZvQnV0dG9uIiwicG9zaXRpb24iLCJ0b3dlckluZm9CdXR0b24iLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50IiwiaW5pdCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJzaG93VUlFbnRlckFuaW0iLCJiaW5kIiwic2hvd0dhbWVMb3NzVUkiLCJzaG93R2FtZVdpblVJIiwic2hvd0N1cnJlbnRMZXZlbEljb25BbmltIiwiY2IiLCJ0dyIsImN1cnJlbnRMZXZlbExhYmVsSWNvbiIsImFjdGl2ZSIsInN0cmluZyIsImdldEN1cnJlbnRMZXZlbE51bSIsInNldCIsInNjYWxlIiwidG8iLCJlYXNpbmciLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImRlYWRFbmVteURhdGEiLCJnYW1lUmVzdWx0UHJlZmFiIiwiZ2FtZUNvbmZpZyIsInNldEdhbWVSZXN1bHQiLCJzaG93RW50ZXJBbmltIiwidGhlbiIsInNob3dCdXR0b25VSUVudGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsaXN0Iiwic2NyZWVuV2lkdGgiLCJwcm9taXNlTGlzdCIsInJ1bkFjdGlvbiIsImluZGV4IiwiZGlyIiwiaSIsImxlbmd0aCIsInB1c2giLCJhbGwiLCJ1aU5vZGUiLCJub2RlM2QiLCJwb3MiLCJjYW1lcmFOb2RlIiwiY29udmVydFRvVUlOb2RlIiwic2V0UG9zaXRpb24iLCJldmVudCIsImN1c3RvbURhdGEiLCJ0YXJnZXQiLCJkZXN0cm95IiwiZW1pdCIsInZhbHVlIiwic3ByaXRlQ29tIiwiYWRkQ29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJib3NzSWNvbiIsImhpZGUiLCJlbnRlck5leHRMZXZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBdUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxjLE9BQUFBLGM7QUFBaUVDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUNDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNsTkMsTUFBQUEsVSxxQkFBQUEsVTs7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QUFBWCxlQUFYLEVBQW1DO0FBQUVzRCxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBbkM7QUFDQVIsY0FBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsR0FBVDtBQUNBVCxjQUFBQSxFQUFFLENBQUNnRCxJQUFIO0FBQ0FoRCxjQUFBQSxFQUFFLENBQUNVLElBQUgsQ0FBUSxZQUFNO0FBQ1Y1QixnQkFBQUEsSUFBSSxDQUFDMkQsT0FBTDtBQUNBckIsZ0JBQUFBLE9BQU87QUFDVixlQUhEO0FBSUFwQixjQUFBQSxFQUFFLENBQUNXLEtBQUg7QUFDSCxhQWZNLENBQVA7QUFnQkg7Ozt1REFDbUM7QUFDaEM7QUFDQSxpQkFBSzFDLGNBQUwsQ0FBb0JnRixjQUFwQjtBQUNILFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7O1FBcE44QnhHLFM7Ozs7O2lCQUdJLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFLUixJOzs7Ozs7O2lCQU1LLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFLQSxJOzs7Ozs7O2lCQUdHLEk7Ozs7Ozs7aUJBR0csSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgQ2FtZXJhQ29tcG9uZW50LCBWZWMzLCBpc1ZhbGlkLCBMYWJlbENvbXBvbmVudCwgRXZlbnRUb3VjaCwgQnV0dG9uQ29tcG9uZW50LCBBbmltYXRpb25Db21wb25lbnQsIFR3ZWVuLCB2aWV3LCB2MywgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgTG9hZGVyLCBsb2FkZXIsIGZpbmQsIEdhbWUsIGVhc2luZyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudS9NZW51VUlCYXNlJztcclxuaW1wb3J0IHsgU2tpbGxDdGwgfSBmcm9tICcuL1NraWxsQ3RsJztcclxuaW1wb3J0IHsgR29sZEN0bCB9IGZyb20gJy4vR29sZEN0bCc7XHJcbmltcG9ydCB7IFVwZGF0ZVRvd2VyVUkgfSBmcm9tICcuL01lbnUvVXBkYXRlVG93ZXJVSSc7XHJcbmltcG9ydCB7IEJ1aWxkVG93ZXJVSSB9IGZyb20gJy4vTWVudS9CdWlsZFRvd2VyVUknO1xyXG5pbXBvcnQgeyBHYW1lV2luUHJlZmFiIH0gZnJvbSAnLi9HYW1lV2luL0dhbWVXaW5QcmVmYWInO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdVSUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWlsZFRvd2VyUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlTWVudVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IEdhbWVDb250cm9sbGVyIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFVJTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVVJTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb0J1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJJbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzSG9sZFNraWxsSWNvbjogYm9vbGVhbiA9IGZhbHNlOyAvL+aYr+WQpuaLlui1t+S6hiDmioDog73ngrlcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGJvc3NJY29uOiBTcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVJlc3VsdFByZWZhYjogUHJlZmFiID0gbnVsbDsgLy/muLjmiI/nu5PmnpzpooTliLbku7ZcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTGFiZWxJY29uOiBOb2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyBjdXJyZW50V2F2ZUxhYmVsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgc3RhcnRHYW1lQ291bnREb3duQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIC8vIHB1YmxpYyBnb0FuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBsb2FkZXIubG9hZFJlcyhcIkVuZW15XzBfSWNvbi9zcHJpdGVGcmFtZVwiLFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycilcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICBsZXQgc2NyZWVuU2l6ZSA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICBsZXQgd2lkdGggPSBzY3JlZW5TaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZW5lbXlJbmZvQnV0dG9uLnBvc2l0aW9uID0gdjMod2lkdGggKiAtMC41IC0gMTAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnRvd2VySW5mb0J1dHRvbi5wb3NpdGlvbiA9IHYzKHdpZHRoICogMC41ICsgMTAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1aSBjb250cm9sbGVyIHN0YXJ0XCIpXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v546p5a6254K55Lit5LqG5aGU55qE5Z+65bqnXHJcbiAgICAgICAgICAgIC8v5pi+56S65bu66YCgdG93ZXIg55qEVUlcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb2xkU2tpbGxJY29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy5idWlsZFVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1aWxkVG93ZXJQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChCdWlsZFRvd2VyVUkpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbiwgdGhpcy5nYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VUlOb2RlVG8zZFBvcyh0aGlzLmJ1aWxkVUlOb2RlLCBub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkub3Blbihub2RlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLXRvd2VyXCIsICh0YXJnZXRUb3dlcjogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eCueS4reS6hnRvd2VyXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5omY552A5oqA6IO954K577yM6YKj5LmI5LiN6ZyA6KaB5pi+56S6VUlcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb2xkU2tpbGxJY29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5idWlsZFVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMudXBkYXRlVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnVwZGF0ZU1lbnVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KFVwZGF0ZVRvd2VyVUkpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbiwgdGhpcy5nYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMudXBkYXRlVUlOb2RlLCB0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKHRhcmdldFRvd2VyKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KFVwZGF0ZVRvd2VyVUkpLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgKGdvbGRDb3VudDogbnVtYmVyKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdvbGRDdGwpLnVwZGF0ZUdvbGRDb3VudExhYmVsKGdvbGRDb3VudCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCAod2F2ZU51bSkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRXYXZlTGFiZWxOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gd2F2ZU51bTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzaG93LXVpLWVudGVyLWFuaW0nLCB0aGlzLnNob3dVSUVudGVyQW5pbS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93LWdhbWUtbG9zcy11aVwiLCB0aGlzLnNob3dHYW1lTG9zc1VJLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctZ2FtZS13aW4tdWlcIiwgdGhpcy5zaG93R2FtZVdpblVJLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctY3VycmVudC1sZXZlbC1pY29uLWFuaW1cIiwgdGhpcy5zaG93Q3VycmVudExldmVsSWNvbkFuaW0uYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzaG93Q3VycmVudExldmVsSWNvbkFuaW0oY2IpIHtcclxuICAgICAgICAvLyBsZXQgbGFiZWwgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxMYWJlbEljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbi5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IFwi56ysXCIgKyAodGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKSArIDEpICsgJ+WFsyc7XHJcbiAgICAgICAgdHcuc2V0KHsgc2NhbGU6IHYzKDIsIDIsIDIpIH0pXHJcbiAgICAgICAgdHcudG8oMC41LCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9LCB7ZWFzaW5nOiBcImJhY2tPdXRcIn0pXHJcbiAgICAgICAgdHcuZGVsYXkoMC44KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxMYWJlbEljb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dHYW1lV2luVUkoZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ2FtZVJlc3VsdFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uXHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVdpblByZWZhYikuc2V0R2FtZVJlc3VsdCh0cnVlLCBkZWFkRW5lbXlEYXRhLCBnYW1lQ29uZmlnLCB0aGlzLCB0aGlzLmdhbWVDb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIHNob3dHYW1lTG9zc1VJKGRlYWRFbmVteURhdGE6IERlYWRFbmVteU9ialtdKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdhbWVSZXN1bHRQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvblxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVXaW5QcmVmYWIpLnNldEdhbWVSZXN1bHQoZmFsc2UsIGRlYWRFbmVteURhdGEsIGdhbWVDb25maWcsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvd1VJRW50ZXJBbmltKGNiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tpbGxDdGwpLnNob3dFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkuc2hvd0VudGVyQW5pbSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QnV0dG9uVUlFbnRlcigpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3dCdXR0b25VSUVudGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW3RoaXMuZW5lbXlJbmZvQnV0dG9uLCB0aGlzLnRvd2VySW5mb0J1dHRvbl1cclxuICAgICAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBydW5BY3Rpb24gPSAobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IGluZGV4ID09PSAwID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0dy50bygwLjQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKC0gZGlyICogMTAwICsgc2NyZWVuV2lkdGggKiAwLjUgKiBkaXIsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5Zy657uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHJ1bkFjdGlvbihub2RlLCBpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRVSU5vZGVUbzNkUG9zKHVpTm9kZTogTm9kZSwgbm9kZTNkOiBOb2RlKSB7XHJcbiAgICAgICAgbGV0IHBvczogVmVjMztcclxuICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkuY29udmVydFRvVUlOb2RlKG5vZGUzZC5wb3NpdGlvbiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB1aU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gYnV0dG9uIGNsaWNrXCIsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdzdGFydC1nYW1lJzpcclxuICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXllci1jbGljay1nYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIb2xkU2tpbGxJY29uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy/mi5botbfkuoYg5oqA6IO954K5XHJcbiAgICAgICAgdGhpcy5pc0hvbGRTa2lsbEljb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNob3dCb3NzSWNvbkFuaW0oKSB7XHJcbiAgICAgICAgLy/mmL7npLpcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVDb20gPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzcHJpdGVDb20uc3ByaXRlRnJhbWUgPSB0aGlzLmJvc3NJY29uO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMiwgMiwgMiksIHBvc2l0aW9uOiB2MygwLCAyNDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjgpXHJcbiAgICAgICAgICAgIHR3LmhpZGUoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcGxheWVyQ2xpY2tOZXh0TGV2ZWxCdXR0b24oKSB7XHJcbiAgICAgICAgLy/njqnlrrbngrnlh7vkuobkuIvkuIDlhbPnmoTmjInpkq5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaEFkcygpe1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikud2F0Y2hBZHMoKTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=