System.register(["cc", "code-quality:cr", "../../GameInstance.js", "./GameResultGoldCell.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, SpriteFrame, SpriteComponent, instantiate, v3, Tween, LabelComponent, find, GameInstance, GameResultGoldCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp, _crd, ccclass, property, GameWinPrefab;

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

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../../GameInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResultGoldCell(extras) {
    _reporterNs.report("GameResultGoldCell", "./GameResultGoldCell", _context.meta, extras);
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
    _dec10: void 0,
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
    _dec17: void 0,
    _dec18: void 0,
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
    _descriptor9: void 0,
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _descriptor16: void 0,
    _descriptor17: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      LabelComponent = _cc.LabelComponent;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
    }, function (_GameResultGoldCellJs) {
      GameResultGoldCell = _GameResultGoldCellJs.GameResultGoldCell;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "fa8f9h1LBJLMZap+sTSLCS2", "GameWinPrefab", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameWinPrefab", GameWinPrefab = (_dec = ccclass('GameWinPrefab'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: SpriteFrame
      }), _dec6 = property({
        type: SpriteFrame
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        type: SpriteFrame
      }), _dec9 = property({
        type: SpriteFrame
      }), _dec10 = property({
        type: SpriteFrame
      }), _dec11 = property({
        type: SpriteFrame
      }), _dec12 = property({
        type: SpriteFrame
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameWinPrefab, _Component);

        function GameWinPrefab() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameWinPrefab);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameWinPrefab)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "winGoldCellPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "leftButton", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightButton", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "retryGameButtonSpriteFrame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "shareButtonSpriteFrame", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextLevelSpriteFrame", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "saveLifeButtonSpriteFrame", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameWinIconSpriteFrame", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameLossIconSpriteFrame", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "shareSaveLifeSpriteFrame", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "watchVideoSaveLifeSpriteFrame", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultIconNode", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultNode", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sumNode", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalEnemyCountLabel", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalGoldCountLabel", _descriptor16, _assertThisInitialized(_this));

          _this.gameConfig = null;

          _initializerDefineProperty(_this, "scrollViewNode", _descriptor17, _assertThisInitialized(_this));

          _this.gameResultState = null;
          _this.nodeList = [];
          _this.currentWinPowerCount = 0;
          return _this;
        }

        _createClass(GameWinPrefab, [{
          key: "start",
          value: function start() {
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().hideBannerAds();
          }
        }, {
          key: "setGameResult",
          value: function setGameResult(succ, data, gameConfig, videoIsReady) {
            var _this2 = this;

            // this.uiController = uiCtl;
            // this.gameController = gameCtl;
            this.gameResultState = succ;
            this.gameConfig = gameConfig;
            console.log("游戏状态时", succ);
            var allEnemyCount = data.length;
            var allGoldCount = 0; // console.log("游戏结果数据是", data);

            console.log("当前关卡打死的敌人数目种类，获得的金币数目 ");

            if (succ) {
              (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", "胜利音效");
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameWinIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.shareButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.nextLevelSpriteFrame;
            } else {
              // this.gameController.node.emit("play-audio", "游戏失败音效")
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameLossIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.retryGameButtonSpriteFrame; // this.rightButton.getComponent(SpriteComponent).spriteFrame = this.saveLifeButtonSpriteFrame;
              // if (videoIsReady) {
              //     this.rightButton.getComponent(SpriteComponent).spriteFrame = this.watchVideoSaveLifeSpriteFrame;
              // } else {
              //     this.rightButton.getComponent(SpriteComponent).spriteFrame = this.shareSaveLifeSpriteFrame;
              // }

              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.watchVideoSaveLifeSpriteFrame;
            }

            var enemyTypeMap = {};

            for (var i = 0; i < data.length; i++) {
              if (enemyTypeMap[data[i].enemyType]) {
                enemyTypeMap[data[i].enemyType].enemyCount += 1; //此类敌人的总数

                enemyTypeMap[data[i].enemyType].winGoldCount += data[i].dropGoldCount;
              } else {
                enemyTypeMap[data[i].enemyType] = {
                  enemyCount: 1,
                  winGoldCount: data[i].dropGoldCount
                };
              }

              allGoldCount += data[i].dropGoldCount;
            } // console.log("enemy type map", enemyTypeMap);
            // let index = 0;
            // for (let i in enemyTypeMap) {
            //     let obj = enemyTypeMap[i];
            //     let node = instantiate(this.winGoldCellPrefab);
            //     node.parent = this.gameResultNode;
            //     node.position = v3(0, 0, 0);
            //     let iconStr = gameConfig[i].IconSpriteFrameName;
            //     this.showCellEnterAnim(node, index, iconStr, obj['count'], obj['winGoldCount']);
            //     index++;
            // }


            this.currentWinPowerCount = allGoldCount;
            var list = [];

            for (var _i in enemyTypeMap) {
              var _data = enemyTypeMap[_i];
              _data.key = _i;
              list.push(_data);
            }

            console.log("list", list);
            list = list.sort(function (a, b) {
              return b.winGoldCount - a.winGoldCount;
            });
            this.showCellEnterAnim(list, function () {
              console.log("展示结束");
              return _this2.showSumResult(allEnemyCount, allGoldCount);
            });
          }
        }, {
          key: "showSumResult",
          value: function showSumResult(enemyCount, goldCount) {
            var _this3 = this;

            //显示最后的总合
            return new Promise(function (resolve, reject) {
              _this3.sumNode.active = true;
              _this3.totalEnemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
              _this3.totalGoldCountLabel.getComponent(LabelComponent).string = goldCount + '';
            });
          }
        }, {
          key: "showCellEnterAnim",
          value: function showCellEnterAnim(data, cb) {
            var _this4 = this;

            // if (Object.keys(data).length === 0) {
            //     if (cb) {
            //         cb();
            //     }
            //     return
            // }
            if (data.length === 0) {
              if (cb) {
                cb();
              }

              return;
            } // let list = Object.keys(data);
            // let objKey = list[Math.round(Math.random() * (list.length - 1))];
            // let obj = data[objKey];
            // delete data[objKey];


            var cellData = data.pop();
            var node = instantiate(this.winGoldCellPrefab);
            node.parent = this.gameResultNode;
            var tw = new Tween(node); // let iconStr = this.gameConfig[objKey].IconSpriteFrame;
            // node.getComponent(GameResultGoldCell).setData(obj['count'], obj['winGoldCount'], iconStr);

            node.getComponent(_crd && GameResultGoldCell === void 0 ? (_reportPossibleCrUseOfGameResultGoldCell({
              error: Error()
            }), GameResultGoldCell) : GameResultGoldCell).init(this.gameConfig, cellData);
            node.position = v3(0, this.nodeList.length * -100 - 50, 0);
            this.gameResultNode.height = node.position.y * -1 + 60;
            this.nodeList.push(node);
            tw.delay(0.4);
            tw.call(function () {
              _this4.showCellEnterAnim(data, cb);
            });
            tw.start(); // for (let i = 0; i < list.length - 1; i++) {
            //     tw.delay(0.5)
            //     tw.by(0.2, {
            //         position: v3(0, 80, 0)
            //     })
            // }
            // tw.call(() => {
            //     this.showCellEnterAnim(data, cb);
            // })
            // tw.start();
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var _this5 = this;

            find("GameController").emit("player-button-click-audio");

            switch (customData) {
              case 'left-button':
                console.log("分享游戏结果");

                if (this.gameResultState) {
                  //玩家点击了分享按钮
                  // this.gameController.playerClickShareButton(this.currentWinPowerCount).then(() => {
                  //     this.gameController.enterNextLevel();
                  //     this.node.destroy();
                  // });
                  // GameInstance.getInstance().getGameCtlNode().emit("player-click-s")
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().playerClickShareButton(this.currentWinPowerCount).then(function () {
                    _this5.node.destroy();
                  });
                } else {
                  //玩家点击了，重新开始按钮
                  // this.gameController.playerClickRetryButton();
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().playerClickRetryButton();
                  this.node.destroy();
                }

                break;

              case 'right-button':
                if (this.gameResultState) {
                  //如果是胜利的话，那么玩家点击的就是下一关游戏的按钮
                  console.log("进入下一关");
                  this.node.destroy(); // this.uiController.playerClickNextLevelButton();

                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit('player-click-next-level-button');
                } else {
                  (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                    error: Error()
                  }), GameInstance) : GameInstance).getInstance().playerClickSaveLifeButton().then(function () {
                    _this5.node.destroy(); //玩家点了立即复活按钮

                  });
                }

                break;

              default:
                break;
            }
          } // showCellEnterAnim(node: Node, index: number,iconStr: string, count: number, goldCount: number ) {
          //     //展示一个节点的进入动画    
          //     // node.getComponent(GameResultGoldCell).setData( count, goldCount, iconStr);
          // }

        }]);

        return GameWinPrefab;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winGoldCellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leftButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rightButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "retryGameButtonSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shareButtonSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nextLevelSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "saveLifeButtonSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameWinIconSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameLossIconSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "shareSaveLifeSpriteFrame", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "watchVideoSaveLifeSpriteFrame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "gameResultIconNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "gameResultNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sumNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "totalEnemyCountLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "totalGoldCountLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewNode", [_dec18], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiZmluZCIsIkdhbWVJbnN0YW5jZSIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVXaW5QcmVmYWIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImdhbWVSZXN1bHRTdGF0ZSIsIm5vZGVMaXN0IiwiY3VycmVudFdpblBvd2VyQ291bnQiLCJnZXRJbnN0YW5jZSIsImhpZGVCYW5uZXJBZHMiLCJzdWNjIiwiZGF0YSIsInZpZGVvSXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJhbGxFbmVteUNvdW50IiwibGVuZ3RoIiwiYWxsR29sZENvdW50IiwiZ2V0R2FtZUN0bE5vZGUiLCJlbWl0IiwiZ2FtZVJlc3VsdEljb25Ob2RlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJnYW1lV2luSWNvblNwcml0ZUZyYW1lIiwibGVmdEJ1dHRvbiIsInNoYXJlQnV0dG9uU3ByaXRlRnJhbWUiLCJyaWdodEJ1dHRvbiIsIm5leHRMZXZlbFNwcml0ZUZyYW1lIiwiZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWUiLCJyZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZSIsIndhdGNoVmlkZW9TYXZlTGlmZVNwcml0ZUZyYW1lIiwiZW5lbXlUeXBlTWFwIiwiaSIsImVuZW15VHlwZSIsImVuZW15Q291bnQiLCJ3aW5Hb2xkQ291bnQiLCJkcm9wR29sZENvdW50IiwibGlzdCIsImtleSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJzaG93Q2VsbEVudGVyQW5pbSIsInNob3dTdW1SZXN1bHQiLCJnb2xkQ291bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN1bU5vZGUiLCJhY3RpdmUiLCJ0b3RhbEVuZW15Q291bnRMYWJlbCIsInN0cmluZyIsInRvdGFsR29sZENvdW50TGFiZWwiLCJjYiIsImNlbGxEYXRhIiwicG9wIiwibm9kZSIsIndpbkdvbGRDZWxsUHJlZmFiIiwicGFyZW50IiwiZ2FtZVJlc3VsdE5vZGUiLCJ0dyIsImluaXQiLCJwb3NpdGlvbiIsImhlaWdodCIsInkiLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInBsYXllckNsaWNrU2hhcmVCdXR0b24iLCJ0aGVuIiwiZGVzdHJveSIsInBsYXllckNsaWNrUmV0cnlCdXR0b24iLCJwbGF5ZXJDbGlja1NhdmVMaWZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGMsT0FBQUEsYztBQUFxQ0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBRWhJQyxNQUFBQSxZLG1CQUFBQSxZOztBQUdBQyxNQUFBQSxrQix5QkFBQUEsa0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCYixVLENBQXRCYSxPO0FBQVNDLE1BQUFBLFEsR0FBYWQsVSxDQUFiYyxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFVBRVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFVBSVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBRVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBRVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBRVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBR1JVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFdBRVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFdBS1JVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFdBR1JVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFdBR1JVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFdBR1JZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFdBR1JZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFdBRVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFdBRVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFdBR1JZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRERlLFUsR0FBaUIs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Qzs7QUFDeEIsbUJBRkQ7QUFHSDs7QUFDRDs7QUFDSjtBQUNJO0FBbkNSO0FBcUNILFcsQ0FDRDtBQUNBO0FBQ0E7QUFFQTs7Ozs7UUFqTytCckYsUzs7Ozs7aUJBRUgsSTs7Ozs7OztpQkFFRixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBSXNCLEk7Ozs7Ozs7aUJBRUosSTs7Ozs7OztpQkFFRixJOzs7Ozs7O2lCQUVLLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUtDLEk7Ozs7Ozs7aUJBR0ssSTs7Ozs7OztpQkFHbEIsSTs7Ozs7OztpQkFHSixJOzs7Ozs7O2lCQUdQLEk7Ozs7Ozs7aUJBRWEsSTs7Ozs7OztpQkFFRCxJOzs7Ozs7O2lCQUdMLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgaW5zdGFudGlhdGUsIHYzLCBUd2VlbiwgTGFiZWxDb21wb25lbnQsIFNjcm9sbFZpZXdDb21wb25lbnQsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uLy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVJbnN0YW5jZSB9IGZyb20gJy4uLy4uL0dhbWVJbnN0YW5jZSc7XHJcbi8vIGltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lUmVzdWx0R29sZENlbGwgfSBmcm9tICcuL0dhbWVSZXN1bHRHb2xkQ2VsbCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZVdpblByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lV2luUHJlZmFiIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgd2luR29sZENlbGxQcmVmYWI6IFByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByaWdodEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgcmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/ph43mlrDlvIDlp4vmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2hhcmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+WIhuS6q+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBuZXh0TGV2ZWxTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+S4i+S4gOWFs+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzYXZlTGlmZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8vIOeri+WNs+Wkjea0u+aMiemSrueyvueBteW4p1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVdpbkljb25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+a4uOaIj+iDnOWIqWljb25cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/lpLHotKVpY29uXHJcblxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNoYXJlU2F2ZUxpZmVTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvLyDliIbkuqvlpI3mtLvmjInpkq7nurnnkIZcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHdhdGNoVmlkZW9TYXZlTGlmZVNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v55yL5bm/5ZGK5aSN5rS75oyJ6ZKu57q555CG5Z2Q5qCHXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHRJY29uTm9kZTogTm9kZSA9IG51bGw7IC8v5ri45oiP57uT5p6c6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3VtTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG90YWxFbmVteUNvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsR29sZENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2Nyb2xsVmlld05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUmVzdWx0U3RhdGU6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFdpblBvd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5oaWRlQmFubmVyQWRzKCk7XHJcbiAgICB9XHJcbiAgICBzZXRHYW1lUmVzdWx0KHN1Y2M6IGJvb2xlYW4sIGRhdGE6IERlYWRFbmVteU9ialtdLCBnYW1lQ29uZmlnOiB7fSwgdmlkZW9Jc1JlYWR5OiBib29sZWFuKSB7XHJcbiAgICAgICAgLy8gdGhpcy51aUNvbnRyb2xsZXIgPSB1aUN0bDtcclxuICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLmdhbWVSZXN1bHRTdGF0ZSA9IHN1Y2M7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZ2FtZUNvbmZpZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+eKtuaAgeaXtlwiLCBzdWNjKVxyXG4gICAgICAgIGxldCBhbGxFbmVteUNvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGFsbEdvbGRDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnpzmlbDmja7mmK9cIiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3lhbPljaHmiZPmrbvnmoTmlYzkurrmlbDnm67np43nsbvvvIzojrflvpfnmoTph5HluIHmlbDnm64gXCIpXHJcbiAgICAgICAgaWYgKHN1Y2MpIHtcclxuICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIuiDnOWIqemfs+aViFwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVXaW5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhcmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMubmV4dExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIFwi5ri45oiP5aSx6LSl6Z+z5pWIXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lTG9zc0ljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5yZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gaWYgKHZpZGVvSXNSZWFkeSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMud2F0Y2hWaWRlb1NhdmVMaWZlU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZVNhdmVMaWZlU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMud2F0Y2hWaWRlb1NhdmVMaWZlU3ByaXRlRnJhbWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW5lbXlUeXBlTWFwID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdLmVuZW15Q291bnQgKz0gMTsgLy/mraTnsbvmlYzkurrnmoTmgLvmlbBcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0ud2luR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Q291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luR29sZENvdW50OiBkYXRhW2ldLmRyb3BHb2xkQ291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGxHb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IHR5cGUgbWFwXCIsIGVuZW15VHlwZU1hcCk7XHJcbiAgICAgICAgLy8gbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGVuZW15VHlwZU1hcCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgb2JqID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVJlc3VsdE5vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgbGV0IGljb25TdHIgPSBnYW1lQ29uZmlnW2ldLkljb25TcHJpdGVGcmFtZU5hbWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0obm9kZSwgaW5kZXgsIGljb25TdHIsIG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSk7XHJcbiAgICAgICAgLy8gICAgIGluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRXaW5Qb3dlckNvdW50ID0gYWxsR29sZENvdW50O1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBlbmVteVR5cGVNYXApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBlbmVteVR5cGVNYXBbaV07XHJcbiAgICAgICAgICAgIGRhdGEua2V5ID0gaTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RcIiwgbGlzdCk7XHJcbiAgICAgICAgbGlzdCA9IGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYi53aW5Hb2xkQ291bnQgLSBhLndpbkdvbGRDb3VudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0obGlzdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWxleekuue7k+adn1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1N1bVJlc3VsdChhbGxFbmVteUNvdW50LCBhbGxHb2xkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dTdW1SZXN1bHQoZW5lbXlDb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8v5pi+56S65pyA5ZCO55qE5oC75ZCIXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdW1Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxFbmVteUNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBlbmVteUNvdW50ICsgJyc7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxHb2xkQ291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGdvbGRDb3VudCArICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYikge1xyXG4gICAgICAgIC8vIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYigpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgICAgICAvLyBsZXQgb2JqS2V5ID0gbGlzdFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobGlzdC5sZW5ndGggLSAxKSldO1xyXG4gICAgICAgIC8vIGxldCBvYmogPSBkYXRhW29iaktleV07XHJcbiAgICAgICAgLy8gZGVsZXRlIGRhdGFbb2JqS2V5XTtcclxuICAgICAgICBsZXQgY2VsbERhdGEgPSBkYXRhLnBvcCgpO1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy53aW5Hb2xkQ2VsbFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAvLyBsZXQgaWNvblN0ciA9IHRoaXMuZ2FtZUNvbmZpZ1tvYmpLZXldLkljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLnNldERhdGEob2JqWydjb3VudCddLCBvYmpbJ3dpbkdvbGRDb3VudCddLCBpY29uU3RyKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLmluaXQodGhpcy5nYW1lQ29uZmlnLCBjZWxsRGF0YSk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKDAsIHRoaXMubm9kZUxpc3QubGVuZ3RoICogLTEwMCAtIDUwLCAwKTtcclxuICAgICAgICB0aGlzLmdhbWVSZXN1bHROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgNjA7XHJcbiAgICAgICAgdGhpcy5ub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHR3LmRlbGF5KDAuNClcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LmRlbGF5KDAuNSlcclxuICAgICAgICAvLyAgICAgdHcuYnkoMC4yLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogdjMoMCwgODAsIDApXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGRhdGEsIGNiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5ZXItYnV0dG9uLWNsaWNrLWF1ZGlvXCIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmuLjmiI/nu5PmnpxcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1NoYXJlQnV0dG9uKHRoaXMuY3VycmVudFdpblBvd2VyQ291bnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXllci1jbGljay1zXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkucGxheWVyQ2xpY2tTaGFyZUJ1dHRvbih0aGlzLmN1cnJlbnRXaW5Qb3dlckNvdW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6hu+8jOmHjeaWsOW8gOWni+aMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLnBsYXllckNsaWNrUmV0cnlCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnVpQ29udHJvbGxlci5wbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdCgncGxheWVyLWNsaWNrLW5leHQtbGV2ZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgLy/njqnlrrbngrnkuobnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NlbGxFbnRlckFuaW0obm9kZTogTm9kZSwgaW5kZXg6IG51bWJlcixpY29uU3RyOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIGdvbGRDb3VudDogbnVtYmVyICkge1xyXG4gICAgLy8gICAgIC8v5bGV56S65LiA5Liq6IqC54K555qE6L+b5YWl5Yqo55S7ICAgIFxyXG4gICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YSggY291bnQsIGdvbGRDb3VudCwgaWNvblN0cik7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==