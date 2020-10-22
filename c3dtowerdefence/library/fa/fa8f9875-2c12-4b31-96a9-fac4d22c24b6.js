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
          value: function start() {}
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

              if (videoIsReady) {
                this.rightButton.getComponent(SpriteComponent).spriteFrame = this.watchVideoSaveLifeSpriteFrame;
              } else {
                this.rightButton.getComponent(SpriteComponent).spriteFrame = this.shareSaveLifeSpriteFrame;
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiZmluZCIsIkdhbWVJbnN0YW5jZSIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVXaW5QcmVmYWIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImdhbWVSZXN1bHRTdGF0ZSIsIm5vZGVMaXN0IiwiY3VycmVudFdpblBvd2VyQ291bnQiLCJzdWNjIiwiZGF0YSIsInZpZGVvSXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJhbGxFbmVteUNvdW50IiwibGVuZ3RoIiwiYWxsR29sZENvdW50IiwiZ2V0SW5zdGFuY2UiLCJnZXRHYW1lQ3RsTm9kZSIsImVtaXQiLCJnYW1lUmVzdWx0SWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdhbWVXaW5JY29uU3ByaXRlRnJhbWUiLCJsZWZ0QnV0dG9uIiwic2hhcmVCdXR0b25TcHJpdGVGcmFtZSIsInJpZ2h0QnV0dG9uIiwibmV4dExldmVsU3ByaXRlRnJhbWUiLCJnYW1lTG9zc0ljb25TcHJpdGVGcmFtZSIsInJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lIiwid2F0Y2hWaWRlb1NhdmVMaWZlU3ByaXRlRnJhbWUiLCJzaGFyZVNhdmVMaWZlU3ByaXRlRnJhbWUiLCJlbmVteVR5cGVNYXAiLCJpIiwiZW5lbXlUeXBlIiwiZW5lbXlDb3VudCIsIndpbkdvbGRDb3VudCIsImRyb3BHb2xkQ291bnQiLCJsaXN0Iiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInNob3dDZWxsRW50ZXJBbmltIiwic2hvd1N1bVJlc3VsdCIsImdvbGRDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VtTm9kZSIsImFjdGl2ZSIsInRvdGFsRW5lbXlDb3VudExhYmVsIiwic3RyaW5nIiwidG90YWxHb2xkQ291bnRMYWJlbCIsImNiIiwiY2VsbERhdGEiLCJwb3AiLCJub2RlIiwid2luR29sZENlbGxQcmVmYWIiLCJwYXJlbnQiLCJnYW1lUmVzdWx0Tm9kZSIsInR3IiwiaW5pdCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwieSIsImRlbGF5IiwiY2FsbCIsInN0YXJ0IiwiZXZlbnQiLCJjdXN0b21EYXRhIiwicGxheWVyQ2xpY2tTaGFyZUJ1dHRvbiIsInRoZW4iLCJkZXN0cm95IiwicGxheWVyQ2xpY2tSZXRyeUJ1dHRvbiIsInBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsYyxPQUFBQSxjO0FBQXFDQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFFaElDLE1BQUFBLFksbUJBQUFBLFk7O0FBR0FDLE1BQUFBLGtCLHlCQUFBQSxrQjs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JiLFUsQ0FBdEJhLE87QUFBU0MsTUFBQUEsUSxHQUFhZCxVLENBQWJjLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFFUlcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFFUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFJUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsV0FFUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsV0FLUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsV0FHUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsV0FHUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsV0FHUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsV0FHUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsV0FFUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsV0FFUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsV0FHUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFE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SUFBdkQsQ0FBNEQsWUFBTTtBQUM5RCxvQkFBQSxNQUFJLENBQUNmLElBQUwsQ0FBVWdCLE9BQVYsR0FEOEQsQ0FDekM7O0FBQ3hCLG1CQUZEO0FBR0g7O0FBQ0Q7O0FBQ0o7QUFDSTtBQW5DUjtBQXFDSCxXLENBQ0Q7QUFDQTtBQUNBO0FBRUE7Ozs7O1FBL04rQnJGLFM7Ozs7O2lCQUVILEk7Ozs7Ozs7aUJBRUYsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUlzQixJOzs7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBRUYsSTs7Ozs7OztpQkFFSyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFLQyxJOzs7Ozs7O2lCQUdLLEk7Ozs7Ozs7aUJBR2xCLEk7Ozs7Ozs7aUJBR0osSTs7Ozs7OztpQkFHUCxJOzs7Ozs7O2lCQUVhLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFHTCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQsIGluc3RhbnRpYXRlLCB2MywgVHdlZW4sIExhYmVsQ29tcG9uZW50LCBTY3JvbGxWaWV3Q29tcG9uZW50LCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi8uLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lSW5zdGFuY2UgfSBmcm9tICcuLi8uLi9HYW1lSW5zdGFuY2UnO1xyXG4vLyBpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZVJlc3VsdEdvbGRDZWxsIH0gZnJvbSAnLi9HYW1lUmVzdWx0R29sZENlbGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVXaW5QcmVmYWInKVxyXG5leHBvcnQgY2xhc3MgR2FtZVdpblByZWZhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHdpbkdvbGRDZWxsUHJlZmFiOiBQcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgbGVmdEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcmlnaHRCdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v6YeN5paw5byA5aeL5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNoYXJlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/liIbkuqvmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgbmV4dExldmVsU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/kuIvkuIDlhbPmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvLyDnq4vljbPlpI3mtLvmjInpkq7nsr7ngbXluKdcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVXaW5JY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/og5zliKlpY29uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVMb3NzSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP5aSx6LSlaWNvblxyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzaGFyZVNhdmVMaWZlU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy8g5YiG5Lqr5aSN5rS75oyJ6ZKu57q555CGXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyB3YXRjaFZpZGVvU2F2ZUxpZmVTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+eci+W5v+WRiuWkjea0u+aMiemSrue6ueeQhuWdkOagh1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0SWNvbk5vZGU6IE5vZGUgPSBudWxsOyAvL+a4uOaIj+e7k+aenOiKgueCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN1bU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsRW5lbXlDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3RhbEdvbGRDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNjcm9sbFZpZXdOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVJlc3VsdFN0YXRlOiBib29sZWFuID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgdWlDb250cm9sbGVyOiBVSUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBub2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRXaW5Qb3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2V0R2FtZVJlc3VsdChzdWNjOiBib29sZWFuLCBkYXRhOiBEZWFkRW5lbXlPYmpbXSwgZ2FtZUNvbmZpZzoge30sIHZpZGVvSXNSZWFkeTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyID0gdWlDdGw7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0U3RhdGUgPSBzdWNjO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nirbmgIHml7ZcIiwgc3VjYylcclxuICAgICAgICBsZXQgYWxsRW5lbXlDb3VudCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBhbGxHb2xkQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p6c5pWw5o2u5pivXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5YWz5Y2h5omT5q2755qE5pWM5Lq65pWw55uu56eN57G777yM6I635b6X55qE6YeR5biB5pWw55uuIFwiKVxyXG4gICAgICAgIGlmIChzdWNjKSB7XHJcbiAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgXCLog5zliKnpn7PmlYhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lV2luSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNoYXJlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm5leHRMZXZlbFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIua4uOaIj+Wksei0pemfs+aViFwiKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVSZXN1bHRJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMucmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIGlmICh2aWRlb0lzUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLndhdGNoVmlkZW9TYXZlTGlmZVNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhcmVTYXZlTGlmZVNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbmVteVR5cGVNYXAgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0uZW5lbXlDb3VudCArPSAxOyAvL+atpOexu+aVjOS6uueahOaAu+aVsFxyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXS53aW5Hb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlDb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICB3aW5Hb2xkQ291bnQ6IGRhdGFbaV0uZHJvcEdvbGRDb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsbEdvbGRDb3VudCArPSBkYXRhW2ldLmRyb3BHb2xkQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgdHlwZSBtYXBcIiwgZW5lbXlUeXBlTWFwKTtcclxuICAgICAgICAvLyBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgaW4gZW5lbXlUeXBlTWFwKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBvYmogPSBlbmVteVR5cGVNYXBbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy53aW5Hb2xkQ2VsbFByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICBsZXQgaWNvblN0ciA9IGdhbWVDb25maWdbaV0uSWNvblNwcml0ZUZyYW1lTmFtZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShub2RlLCBpbmRleCwgaWNvblN0ciwgb2JqWydjb3VudCddLCBvYmpbJ3dpbkdvbGRDb3VudCddKTtcclxuICAgICAgICAvLyAgICAgaW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFdpblBvd2VyQ291bnQgPSBhbGxHb2xkQ291bnQ7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGVuZW15VHlwZU1hcCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGVuZW15VHlwZU1hcFtpXTtcclxuICAgICAgICAgICAgZGF0YS5rZXkgPSBpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdFwiLCBsaXN0KTtcclxuICAgICAgICBsaXN0ID0gbGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLndpbkdvbGRDb3VudCAtIGEud2luR29sZENvdW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShsaXN0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bGV56S657uT5p2fXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93U3VtUmVzdWx0KGFsbEVuZW15Q291bnQsIGFsbEdvbGRDb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd1N1bVJlc3VsdChlbmVteUNvdW50OiBudW1iZXIsIGdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/mmL7npLrmnIDlkI7nmoTmgLvlkIhcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1bU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEVuZW15Q291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGVuZW15Q291bnQgKyAnJztcclxuICAgICAgICAgICAgdGhpcy50b3RhbEdvbGRDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZ29sZENvdW50ICsgJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dDZWxsRW50ZXJBbmltKGRhdGEsIGNiKSB7XHJcbiAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgbGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgICAgIC8vIGxldCBvYmpLZXkgPSBsaXN0W01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChsaXN0Lmxlbmd0aCAtIDEpKV07XHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IGRhdGFbb2JqS2V5XTtcclxuICAgICAgICAvLyBkZWxldGUgZGF0YVtvYmpLZXldO1xyXG4gICAgICAgIGxldCBjZWxsRGF0YSA9IGRhdGEucG9wKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLndpbkdvbGRDZWxsUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVJlc3VsdE5vZGU7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgIC8vIGxldCBpY29uU3RyID0gdGhpcy5nYW1lQ29uZmlnW29iaktleV0uSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YShvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10sIGljb25TdHIpO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuaW5pdCh0aGlzLmdhbWVDb25maWcsIGNlbGxEYXRhKTtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgdGhpcy5ub2RlTGlzdC5sZW5ndGggKiAtMTAwIC0gNTAsIDApO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdE5vZGUuaGVpZ2h0ID0gbm9kZS5wb3NpdGlvbi55ICogLTEgKyA2MDtcclxuICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgdHcuZGVsYXkoMC40KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgIC8vICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+a4uOaIj+e7k+aenFwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVJlc3VsdFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobliIbkuqvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2hhcmVCdXR0b24odGhpcy5jdXJyZW50V2luUG93ZXJDb3VudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwicGxheWVyLWNsaWNrLXNcIilcclxuICAgICAgICAgICAgICAgICAgICBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5wbGF5ZXJDbGlja1NoYXJlQnV0dG9uKHRoaXMuY3VycmVudFdpblBvd2VyQ291bnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG77yM6YeN5paw5byA5aeL5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1JldHJ5QnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkucGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQtYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv6IOc5Yip55qE6K+d77yM6YKj5LmI546p5a6254K55Ye755qE5bCx5piv5LiL5LiA5YWz5ri45oiP55qE5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudWlDb250cm9sbGVyLnBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KCdwbGF5ZXItY2xpY2stbmV4dC1sZXZlbC1idXR0b24nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkucGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyAvL+eOqeWutueCueS6hueri+WNs+Wkjea0u+aMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2VsbEVudGVyQW5pbShub2RlOiBOb2RlLCBpbmRleDogbnVtYmVyLGljb25TdHI6IHN0cmluZywgY291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIgKSB7XHJcbiAgICAvLyAgICAgLy/lsZXnpLrkuIDkuKroioLngrnnmoTov5vlhaXliqjnlLsgICAgXHJcbiAgICAvLyAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5zZXREYXRhKCBjb3VudCwgZ29sZENvdW50LCBpY29uU3RyKTtcclxuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19