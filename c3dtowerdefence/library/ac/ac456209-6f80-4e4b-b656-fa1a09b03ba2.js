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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIlR3ZWVuIiwidmlldyIsInYzIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiTWVudVVJQmFzZSIsIlNraWxsQ3RsIiwiR29sZEN0bCIsIlVwZGF0ZVRvd2VyVUkiLCJCdWlsZFRvd2VyVUkiLCJHYW1lV2luUHJlZmFiIiwiR2FtZUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiZ2FtZUNvbnRyb2xsZXIiLCJidWlsZFVJTm9kZSIsInVwZGF0ZVVJTm9kZSIsImlzSG9sZFNraWxsSWNvbiIsImdldENvbXBvbmVudCIsInNjcmVlblNpemUiLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiZW5lbXlJbmZvQnV0dG9uIiwicG9zaXRpb24iLCJ0b3dlckluZm9CdXR0b24iLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50IiwiaW5pdCIsImdldEdhbWVDb25maWciLCJqc29uIiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJzaG93VUlFbnRlckFuaW0iLCJiaW5kIiwic2hvd0dhbWVMb3NzVUkiLCJzaG93R2FtZVdpblVJIiwic2hvd0N1cnJlbnRMZXZlbEljb25BbmltIiwiY2IiLCJ0dyIsImN1cnJlbnRMZXZlbExhYmVsSWNvbiIsImFjdGl2ZSIsInN0cmluZyIsImdldEN1cnJlbnRMZXZlbE51bSIsInNldCIsInNjYWxlIiwidG8iLCJlYXNpbmciLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImRlYWRFbmVteURhdGEiLCJnYW1lUmVzdWx0UHJlZmFiIiwiZ2FtZUNvbmZpZyIsInNldEdhbWVSZXN1bHQiLCJlbWl0Iiwic2hvd0VudGVyQW5pbSIsInRoZW4iLCJzaG93QnV0dG9uVUlFbnRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibGlzdCIsInNjcmVlbldpZHRoIiwicHJvbWlzZUxpc3QiLCJydW5BY3Rpb24iLCJpbmRleCIsImRpciIsImkiLCJsZW5ndGgiLCJwdXNoIiwiYWxsIiwidWlOb2RlIiwibm9kZTNkIiwicG9zIiwiY2FtZXJhTm9kZSIsImNvbnZlcnRUb1VJTm9kZSIsInNldFBvc2l0aW9uIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwidGFyZ2V0IiwiZGVzdHJveSIsInZhbHVlIiwic3ByaXRlQ29tIiwiYWRkQ29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJib3NzSWNvbiIsImhpZGUiLCJlbnRlck5leHRMZXZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBdUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxjLE9BQUFBLGM7QUFBaUVDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUNDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNsTkMsTUFBQUEsVSxxQkFBQUEsVTs7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QUFFcEQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGVBQVgsRUFBbUM7QUFBRXNELGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFuQztBQUNBUixjQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBUyxHQUFUO0FBQ0FULGNBQUFBLEVBQUUsQ0FBQ2dELElBQUg7QUFDQWhELGNBQUFBLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLFlBQU07QUFDVjVCLGdCQUFBQSxJQUFJLENBQUM0RCxPQUFMO0FBQ0FyQixnQkFBQUEsT0FBTztBQUNWLGVBSEQ7QUFJQXJCLGNBQUFBLEVBQUUsQ0FBQ1csS0FBSDtBQUNILGFBZk0sQ0FBUDtBQWdCSDs7O3VEQUNtQztBQUNoQztBQUNBLGlCQUFLMUMsY0FBTCxDQUFvQmdGLGNBQXBCO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUFyTjhCeEcsUzs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUtSLEk7Ozs7Ozs7aUJBTUssSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUtBLEk7Ozs7Ozs7aUJBR0csSTs7Ozs7OztpQkFHRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBDYW1lcmFDb21wb25lbnQsIFZlYzMsIGlzVmFsaWQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBCdXR0b25Db21wb25lbnQsIEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4sIHZpZXcsIHYzLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBMb2FkZXIsIGxvYWRlciwgZmluZCwgR2FtZSwgZWFzaW5nIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBNZW51VUlCYXNlIH0gZnJvbSAnLi9NZW51L01lbnVVSUJhc2UnO1xyXG5pbXBvcnQgeyBTa2lsbEN0bCB9IGZyb20gJy4vU2tpbGxDdGwnO1xyXG5pbXBvcnQgeyBHb2xkQ3RsIH0gZnJvbSAnLi9Hb2xkQ3RsJztcclxuaW1wb3J0IHsgVXBkYXRlVG93ZXJVSSB9IGZyb20gJy4vTWVudS9VcGRhdGVUb3dlclVJJztcclxuaW1wb3J0IHsgQnVpbGRUb3dlclVJIH0gZnJvbSAnLi9NZW51L0J1aWxkVG93ZXJVSSc7XHJcbmltcG9ydCB7IEdhbWVXaW5QcmVmYWIgfSBmcm9tICcuL0dhbWVXaW4vR2FtZVdpblByZWZhYic7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VJQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBVSUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1aWxkVG93ZXJQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNZW51UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogR2FtZUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdXBkYXRlVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3dlckluZm9CdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNIb2xkU2tpbGxJY29uOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5ouW6LW35LqGIOaKgOiDveeCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgYm9zc0ljb246IFNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0UHJlZmFiOiBQcmVmYWIgPSBudWxsOyAvL+a4uOaIj+e7k+aenOmihOWItuS7tlxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWxMYWJlbEljb246IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGN1cnJlbnRXYXZlTGFiZWxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIC8vIHB1YmxpYyBzdGFydEdhbWVDb3VudERvd25BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIGdvQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGxvYWRlci5sb2FkUmVzKFwiRW5lbXlfMF9JY29uL3Nwcml0ZUZyYW1lXCIsU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCk9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5lbmVteUluZm9CdXR0b24ucG9zaXRpb24gPSB2Myh3aWR0aCAqIC0wLjUgLSAxMDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudG93ZXJJbmZvQnV0dG9uLnBvc2l0aW9uID0gdjMod2lkdGggKiAwLjUgKyAxMDAsIDAsIDApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInVpIGNvbnRyb2xsZXIgc3RhcnRcIilcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ0b3VjaC1iYXNlLWJ1aWxkLWJhc2VcIiwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrbngrnkuK3kuobloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy/mmL7npLrlu7rpgKB0b3dlciDnmoRVSVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvbGRTa2lsbEljb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSSkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMuYnVpbGRVSU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKG5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidG91Y2gtdG93ZXJcIiwgKHRhcmdldFRvd2VyOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v54K55Lit5LqGdG93ZXJcclxuICAgICAgICAgICAgLy/lpoLmnpzmiZjnnYDmioDog73ngrnvvIzpgqPkuYjkuI3pnIDopoHmmL7npLpVSVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvbGRTa2lsbEljb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZS5nZXRDb21wb25lbnQoTWVudVVJQmFzZSkuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy51cGRhdGVVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudXBkYXRlTWVudVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uLCB0aGlzLmdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy51cGRhdGVVSU5vZGUsIHRhcmdldFRvd2VyKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVJTm9kZS5nZXRDb21wb25lbnQoVXBkYXRlVG93ZXJVSSkub3Blbih0YXJnZXRUb3dlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoZ29sZENvdW50OiBudW1iZXIpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkudXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwicmVmZXItY3VycmVudC13YXZlXCIsICh3YXZlTnVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFdhdmVMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB3YXZlTnVtO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3Nob3ctdWktZW50ZXItYW5pbScsIHRoaXMuc2hvd1VJRW50ZXJBbmltLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctZ2FtZS1sb3NzLXVpXCIsIHRoaXMuc2hvd0dhbWVMb3NzVUkuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1nYW1lLXdpbi11aVwiLCB0aGlzLnNob3dHYW1lV2luVUkuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1jdXJyZW50LWxldmVsLWljb24tYW5pbVwiLCB0aGlzLnNob3dDdXJyZW50TGV2ZWxJY29uQW5pbS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHNob3dDdXJyZW50TGV2ZWxJY29uQW5pbShjYikge1xyXG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY3VycmVudExldmVsTGFiZWxJY29uKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTGFiZWxJY29uLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gXCLnrKxcIiArICh0aGlzLmdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRMZXZlbE51bSgpICsgMSkgKyAn5YWzJztcclxuICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMiwgMiwgMikgfSlcclxuICAgICAgICB0dy50bygwLjUsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0sIHtlYXNpbmc6IFwiYmFja091dFwifSlcclxuICAgICAgICB0dy5kZWxheSgwLjgpO1xyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbExhYmVsSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0dhbWVXaW5VSShkZWFkRW5lbXlEYXRhOiBEZWFkRW5lbXlPYmpbXSkge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5nYW1lUmVzdWx0UHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBsZXQgZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb25cclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChHYW1lV2luUHJlZmFiKS5zZXRHYW1lUmVzdWx0KHRydWUsIGRlYWRFbmVteURhdGEsIGdhbWVDb25maWcsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvd0dhbWVMb3NzVUkoZGVhZEVuZW15RGF0YTogRGVhZEVuZW15T2JqW10pIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ2FtZVJlc3VsdFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uXHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVdpblByZWZhYikuc2V0R2FtZVJlc3VsdChmYWxzZSwgZGVhZEVuZW15RGF0YSwgZ2FtZUNvbmZpZywgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlcik7XHJcbiAgICB9XHJcbiAgICBzaG93VUlFbnRlckFuaW0oY2IpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImVudGVyLWdhbWVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tpbGxDdGwpLnNob3dFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR29sZEN0bCkuc2hvd0VudGVyQW5pbSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QnV0dG9uVUlFbnRlcigpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3dCdXR0b25VSUVudGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW3RoaXMuZW5lbXlJbmZvQnV0dG9uLCB0aGlzLnRvd2VySW5mb0J1dHRvbl1cclxuICAgICAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHNjcmVlblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBydW5BY3Rpb24gPSAobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IGluZGV4ID09PSAwID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0dy50bygwLjQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKC0gZGlyICogMTAwICsgc2NyZWVuV2lkdGggKiAwLjUgKiBkaXIsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5Zy657uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHJ1bkFjdGlvbihub2RlLCBpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRVSU5vZGVUbzNkUG9zKHVpTm9kZTogTm9kZSwgbm9kZTNkOiBOb2RlKSB7XHJcbiAgICAgICAgbGV0IHBvczogVmVjMztcclxuICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkuY29udmVydFRvVUlOb2RlKG5vZGUzZC5wb3NpdGlvbiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB1aU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gYnV0dG9uIGNsaWNrXCIsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdzdGFydC1nYW1lJzpcclxuICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXllci1jbGljay1nYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIb2xkU2tpbGxJY29uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy/mi5botbfkuoYg5oqA6IO954K5XHJcbiAgICAgICAgdGhpcy5pc0hvbGRTa2lsbEljb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNob3dCb3NzSWNvbkFuaW0oKSB7XHJcbiAgICAgICAgLy/mmL7npLpcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVDb20gPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzcHJpdGVDb20uc3ByaXRlRnJhbWUgPSB0aGlzLmJvc3NJY29uO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICB0dy5zZXQoeyBzY2FsZTogdjMoMiwgMiwgMiksIHBvc2l0aW9uOiB2MygwLCAyNDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pO1xyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjgpXHJcbiAgICAgICAgICAgIHR3LmhpZGUoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcGxheWVyQ2xpY2tOZXh0TGV2ZWxCdXR0b24oKSB7XHJcbiAgICAgICAgLy/njqnlrrbngrnlh7vkuobkuIvkuIDlhbPnmoTmjInpkq5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaEFkcygpe1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikud2F0Y2hBZHMoKTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=