System.register(["cc", "code-quality:cr", "./GameResultGoldCell.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, SpriteFrame, SpriteComponent, instantiate, v3, Tween, LabelComponent, find, GameResultGoldCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp, _crd, ccclass, property, GameWinPrefab;

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
        type: Node
      }), _dec12 = property({
        type: Node
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
          _this.uiController = null;
          _this.gameController = null;
          _this.nodeList = [];
          _this.currentWinPowerCount = 0;
          return _this;
        }

        _createClass(GameWinPrefab, [{
          key: "start",
          value: function start() {}
        }, {
          key: "setGameResult",
          value: function setGameResult(succ, data, gameConfig, uiCtl, gameCtl, videoIsReady) {
            var _this2 = this;

            this.uiController = uiCtl;
            this.gameController = gameCtl;
            this.gameResultState = succ;
            this.gameConfig = gameConfig;
            console.log("游戏状态时", succ);
            var allEnemyCount = data.length;
            var allGoldCount = 0; // console.log("游戏结果数据是", data);

            console.log("当前关卡打死的敌人数目种类，获得的金币数目 ");

            if (succ) {
              this.gameController.node.emit("play-audio", "胜利音效");
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
            }), GameResultGoldCell) : GameResultGoldCell).init(this.gameController, cellData);
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
                  this.gameController.playerClickShareButton(this.currentWinPowerCount).then(function () {
                    _this5.gameController.enterNextLevel();

                    _this5.node.destroy();
                  });
                } else {
                  //玩家点击了，重新开始按钮
                  this.gameController.playerClickRetryButton();
                  this.node.destroy();
                }

                break;

              case 'right-button':
                if (this.gameResultState) {
                  //如果是胜利的话，那么玩家点击的就是下一关游戏的按钮
                  console.log("进入下一关");
                  this.node.destroy();
                  this.uiController.playerClickNextLevelButton();
                } else {
                  this.gameController.playerClickSaveLifeButton().then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiZmluZCIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVXaW5QcmVmYWIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImdhbWVSZXN1bHRTdGF0ZSIsInVpQ29udHJvbGxlciIsImdhbWVDb250cm9sbGVyIiwibm9kZUxpc3QiLCJjdXJyZW50V2luUG93ZXJDb3VudCIsInN1Y2MiLCJkYXRhIiwidWlDdGwiLCJnYW1lQ3RsIiwidmlkZW9Jc1JlYWR5IiwiY29uc29sZSIsImxvZyIsImFsbEVuZW15Q291bnQiLCJsZW5ndGgiLCJhbGxHb2xkQ291bnQiLCJub2RlIiwiZW1pdCIsImdhbWVSZXN1bHRJY29uTm9kZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwiZ2FtZVdpbkljb25TcHJpdGVGcmFtZSIsImxlZnRCdXR0b24iLCJzaGFyZUJ1dHRvblNwcml0ZUZyYW1lIiwicmlnaHRCdXR0b24iLCJuZXh0TGV2ZWxTcHJpdGVGcmFtZSIsImdhbWVMb3NzSWNvblNwcml0ZUZyYW1lIiwicmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWUiLCJ3YXRjaFZpZGVvU2F2ZUxpZmVTcHJpdGVGcmFtZSIsInNoYXJlU2F2ZUxpZmVTcHJpdGVGcmFtZSIsImVuZW15VHlwZU1hcCIsImkiLCJlbmVteVR5cGUiLCJlbmVteUNvdW50Iiwid2luR29sZENvdW50IiwiZHJvcEdvbGRDb3VudCIsImxpc3QiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2hvd0NlbGxFbnRlckFuaW0iLCJzaG93U3VtUmVzdWx0IiwiZ29sZENvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdW1Ob2RlIiwiYWN0aXZlIiwidG90YWxFbmVteUNvdW50TGFiZWwiLCJzdHJpbmciLCJ0b3RhbEdvbGRDb3VudExhYmVsIiwiY2IiLCJjZWxsRGF0YSIsInBvcCIsIndpbkdvbGRDZWxsUHJlZmFiIiwicGFyZW50IiwiZ2FtZVJlc3VsdE5vZGUiLCJ0dyIsImluaXQiLCJwb3NpdGlvbiIsImhlaWdodCIsInkiLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInBsYXllckNsaWNrU2hhcmVCdXR0b24iLCJ0aGVuIiwiZW50ZXJOZXh0TGV2ZWwiLCJkZXN0cm95IiwicGxheWVyQ2xpY2tSZXRyeUJ1dHRvbiIsInBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGMsT0FBQUEsYztBQUFxQ0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBSWhJQyxNQUFBQSxrQix5QkFBQUEsa0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCWixVLENBQXRCWSxPO0FBQVNDLE1BQUFBLFEsR0FBYWIsVSxDQUFiYSxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBRVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBSVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBRVJTLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBRVJTLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBRVJTLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBR1JTLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFdBRVJTLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFdBS1JTLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUViO0FBQVAsT0FBRCxDLFdBR1JXLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUViO0FBQVAsT0FBRCxDLFdBR1JXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFdBR1JXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFdBR1JXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFdBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFdBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFdBR1JXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRERjLFUsR0FBaUIsSTs7OztnQkFNakJDLGUsR0FBMkIsSTtnQkFDM0JDLFksR0FBNkIsSTtnQkFDN0JDLGMsR0FBaUMsSTtnQkFDakNDLFEsR0FBbUIsRTtnQkFDbkJDLG9CLEdBQStCLEM7Ozs7OztrQ0FDL0IsQ0FFUDs7O3dDQUNhQyxJLEVBQWVDLEksRUFBc0JQLFUsRUFBZ0JRLEssRUFBcUJDLE8sRUFBeUJDLFksRUFBdUI7QUFBQTs7QUFDcEksaUJBQUtSLFlBQUwsR0FBb0JNLEtBQXBCO0FBQ0EsaUJBQUtMLGNBQUwsR0FBc0JNLE9BQXRCO0FBQ0EsaUJBQUtSLGVBQUwsR0FBdUJLLElBQXZCO0FBQ0EsaUJBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0FXLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLElBQXJCO0FBQ0EsZ0JBQUlPLGFBQWEsR0FBR04sSUFBSSxDQUFDTyxNQUF6QjtBQUNBLGdCQUFJQyxZQUFZLEdBQUcsQ0FBbkIsQ0FQb0ksQ0FRcEk7O0FBQ0FKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaOztBQUNBLGdCQUFJTixJQUFKLEVBQVU7QUFDTixtQkFBS0gsY0FBTCxDQUFvQmEsSUFBcEIsQ0FBeUJDLElBQXpCLENBQThCLFlBQTlCLEVBQTRDLE1BQTVDO0FBQ0EsbUJBQUtDLGtCQUFMLENBQXdCQyxZQUF4QixDQUFxQzlCLGVBQXJDLEVBQXNEK0IsV0FBdEQsR0FBb0UsS0FBS0Msc0JBQXpFO0FBQ0EsbUJBQUtDLFVBQUwsQ0FBZ0JILFlBQWhCLENBQTZCOUIsZUFBN0IsRUFBOEMrQixXQUE5QyxHQUE0RCxLQUFLRyxzQkFBakU7QUFDQSxtQkFBS0MsV0FBTCxDQUFpQkwsWUFBakIsQ0FBOEI5QixlQUE5QixFQUErQytCLFdBQS9DLEdBQTZELEtBQUtLLG9CQUFsRTtBQUNILGFBTEQsTUFLTztBQUNIO0FBQ0EsbUJBQUtQLGtCQUFMLENBQXdCQyxZQUF4QixDQUFxQzlCLGVBQXJDLEVBQXNEK0IsV0FBdEQsR0FBb0UsS0FBS00sdUJBQXpFO0FBQ0EsbUJBQUtKLFVBQUwsQ0FBZ0JILFlBQWhCLENBQTZCOUIsZUFBN0IsRUFBOEMrQixXQUE5QyxHQUE0RCxLQUFLTywwQkFBakUsQ0FIRyxDQUlIOztBQUNBLGtCQUFJakIsWUFBSixFQUFpQjtBQUNiLHFCQUFLYyxXQUFMLENBQWlCTCxZQUFqQixDQUE4QjlCLGVBQTlCLEVBQStDK0IsV0FBL0MsR0FBNkQsS0FBS1EsNkJBQWxFO0FBQ0gsZUFGRCxNQUVLO0FBQ0QscUJBQUtKLFdBQUwsQ0FBaUJMLFlBQWpCLENBQThCOUIsZUFBOUIsRUFBK0MrQixXQUEvQyxHQUE2RCxLQUFLUyx3QkFBbEU7QUFDSDtBQUNKOztBQUNELGdCQUFJQyxZQUFZLEdBQUcsRUFBbkI7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3hCLElBQUksQ0FBQ08sTUFBekIsRUFBaUNpQixDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGtCQUFJRCxZQUFZLENBQUN2QixJQUFJLENBQUN3QixDQUFELENBQUosQ0FBUUMsU0FBVCxDQUFoQixFQUFxQztBQUNqQ0YsZ0JBQUFBLFlBQVksQ0FBQ3ZCLElBQUksQ0FBQ3dCLENBQUQsQ0FBSixDQUFRQyxTQUFULENBQVosQ0FBZ0NDLFVBQWhDLElBQThDLENBQTlDLENBRGlDLENBQ2dCOztBQUNqREgsZ0JBQUFBLFlBQVksQ0FBQ3ZCLElBQUksQ0FBQ3dCLENBQUQsQ0FBSixDQUFRQyxTQUFULENBQVosQ0FBZ0NFLFlBQWhDLElBQWdEM0IsSUFBSSxDQUFDd0IsQ0FBRCxDQUFKLENBQVFJLGFBQXhEO0FBQ0gsZUFIRCxNQUdPO0FBRUhMLGdCQUFBQSxZQUFZLENBQUN2QixJQUFJLENBQUN3QixDQUFELENBQUosQ0FBUUMsU0FBVCxDQUFaLEdBQWtDO0FBQzlCQyxrQkFBQUEsVUFBVSxFQUFFLENBRGtCO0FBRTlCQyxrQkFBQUEsWUFBWSxFQUFFM0IsSUFBSSxDQUFDd0IsQ0FBRCxDQUFKLENBQVFJO0FBRlEsaUJBQWxDO0FBSUg7O0FBQ0RwQixjQUFBQSxZQUFZLElBQUlSLElBQUksQ0FBQ3dCLENBQUQsQ0FBSixDQUFRSSxhQUF4QjtBQUNILGFBdkNtSSxDQXdDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsaUJBQUs5QixvQkFBTCxHQUE0QlUsWUFBNUI7QUFDQSxnQkFBSXFCLElBQUksR0FBRyxFQUFYOztBQUNBLGlCQUFLLElBQUlMLEVBQVQsSUFBY0QsWUFBZCxFQUE0QjtBQUN4QixrQkFBSXZCLEtBQUksR0FBR3VCLFlBQVksQ0FBQ0MsRUFBRCxDQUF2QjtBQUNBeEIsY0FBQUEsS0FBSSxDQUFDOEIsR0FBTCxHQUFXTixFQUFYO0FBQ0FLLGNBQUFBLElBQUksQ0FBQ0UsSUFBTCxDQUFVL0IsS0FBVjtBQUNIOztBQUNESSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9Cd0IsSUFBcEI7QUFDQUEsWUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNHLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2QixxQkFBT0EsQ0FBQyxDQUFDUCxZQUFGLEdBQWlCTSxDQUFDLENBQUNOLFlBQTFCO0FBQ0gsYUFGTSxDQUFQO0FBR0EsaUJBQUtRLGlCQUFMLENBQXVCTixJQUF2QixFQUE2QixZQUFNO0FBQy9CekIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLHFCQUFPLE1BQUksQ0FBQytCLGFBQUwsQ0FBbUI5QixhQUFuQixFQUFrQ0UsWUFBbEMsQ0FBUDtBQUNILGFBSEQ7QUFLSDs7O3dDQUNha0IsVSxFQUFvQlcsUyxFQUFtQjtBQUFBOztBQUNqRDtBQUNBLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsY0FBQSxNQUFJLENBQUNDLE9BQUwsQ0FBYUMsTUFBYixHQUFzQixJQUF0QjtBQUNBLGNBQUEsTUFBSSxDQUFDQyxvQkFBTCxDQUEwQi9CLFlBQTFCLENBQXVDMUIsY0FBdkMsRUFBdUQwRCxNQUF2RCxHQUFnRWxCLFVBQVUsR0FBRyxFQUE3RTtBQUNBLGNBQUEsTUFBSSxDQUFDbUIsbUJBQUwsQ0FBeUJqQyxZQUF6QixDQUFzQzFCLGNBQXRDLEVBQXNEMEQsTUFBdEQsR0FBK0RQLFNBQVMsR0FBRyxFQUEzRTtBQUNILGFBSk0sQ0FBUDtBQUtIOzs7NENBQ2lCckMsSSxFQUFNOEMsRSxFQUFJO0FBQUE7O0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFJOUMsSUFBSSxDQUFDTyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CLGtCQUFJdUMsRUFBSixFQUFRO0FBQ0pBLGdCQUFBQSxFQUFFO0FBQ0w7O0FBQ0Q7QUFDSCxhQVp1QixDQWF4QjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsZ0JBQUlDLFFBQVEsR0FBRy9DLElBQUksQ0FBQ2dELEdBQUwsRUFBZjtBQUNBLGdCQUFJdkMsSUFBSSxHQUFHMUIsV0FBVyxDQUFDLEtBQUtrRSxpQkFBTixDQUF0QjtBQUNBeEMsWUFBQUEsSUFBSSxDQUFDeUMsTUFBTCxHQUFjLEtBQUtDLGNBQW5CO0FBQ0EsZ0JBQUlDLEVBQUUsR0FBRyxJQUFJbkUsS0FBSixDQUFVd0IsSUFBVixDQUFULENBcEJ3QixDQXFCeEI7QUFDQTs7QUFDQUEsWUFBQUEsSUFBSSxDQUFDRyxZQUFMO0FBQUE7QUFBQSwwREFBc0N5QyxJQUF0QyxDQUEyQyxLQUFLekQsY0FBaEQsRUFBZ0VtRCxRQUFoRTtBQUNBdEMsWUFBQUEsSUFBSSxDQUFDNkMsUUFBTCxHQUFnQnRFLEVBQUUsQ0FBQyxDQUFELEVBQUksS0FBS2EsUUFBTCxDQUFjVSxNQUFkLEdBQXVCLENBQUMsR0FBeEIsR0FBOEIsRUFBbEMsRUFBc0MsQ0FBdEMsQ0FBbEI7QUFDQSxpQkFBSzRDLGNBQUwsQ0FBb0JJLE1BQXBCLEdBQTZCOUMsSUFBSSxDQUFDNkMsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLENBQUMsQ0FBbkIsR0FBdUIsRUFBcEQ7QUFDQSxpQkFBSzNELFFBQUwsQ0FBY2tDLElBQWQsQ0FBbUJ0QixJQUFuQjtBQUNBMkMsWUFBQUEsRUFBRSxDQUFDSyxLQUFILENBQVMsR0FBVDtBQUNBTCxZQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUSxZQUFNO0FBRVYsY0FBQSxNQUFJLENBQUN2QixpQkFBTCxDQUF1Qm5DLElBQXZCLEVBQTZCOEMsRUFBN0I7QUFDSCxhQUhEO0FBSUFNLFlBQUFBLEVBQUUsQ0FBQ08sS0FBSCxHQWhDd0IsQ0FpQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozt3Q0FDYUMsSyxFQUFPQyxVLEVBQVk7QUFBQTs7QUFDN0IxRSxZQUFBQSxJQUFJLENBQUMsZ0JBQUQsQ0FBSixDQUF1QnVCLElBQXZCLENBQTRCLDJCQUE1Qjs7QUFFQSxvQkFBUW1ELFVBQVI7QUFDSSxtQkFBSyxhQUFMO0FBQ0l6RCxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFDQSxvQkFBSSxLQUFLWCxlQUFULEVBQTBCO0FBQ3RCO0FBQ0EsdUJBQUtFLGNBQUwsQ0FBb0JrRSxzQkFBcEIsQ0FBMkMsS0FBS2hFLG9CQUFoRCxFQUFzRWlFLElBQXRFLENBQTJFLFlBQU07QUFDN0Usb0JBQUEsTUFBSSxDQUFDbkUsY0FBTCxDQUFvQm9FLGNBQXBCOztBQUNBLG9CQUFBLE1BQUksQ0FBQ3ZELElBQUwsQ0FBVXdELE9BQVY7QUFDSCxtQkFIRDtBQUlILGlCQU5ELE1BTU87QUFDSDtBQUNBLHVCQUFLckUsY0FBTCxDQUFvQnNFLHNCQUFwQjtBQUNBLHVCQUFLekQsSUFBTCxDQUFVd0QsT0FBVjtBQUNIOztBQUNEOztBQUNKLG1CQUFLLGNBQUw7QUFDSSxvQkFBSSxLQUFLdkUsZUFBVCxFQUEwQjtBQUN0QjtBQUNBVSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLHVCQUFLSSxJQUFMLENBQVV3RCxPQUFWO0FBQ0EsdUJBQUt0RSxZQUFMLENBQWtCd0UsMEJBQWxCO0FBQ0gsaUJBTEQsTUFLTztBQUNILHVCQUFLdkUsY0FBTCxDQUFvQndFLHlCQUFwQixHQUFnREwsSUFBaEQsQ0FBcUQsWUFBTTtBQUN2RCxvQkFBQSxNQUFJLENBQUN0RCxJQUFMLENBQVV3RCxPQUFWLEdBRHVELENBQ2xDOztBQUN4QixtQkFGRDtBQUdIOztBQUNEOztBQUNKO0FBQ0k7QUE1QlI7QUE4QkgsVyxDQUNEO0FBQ0E7QUFDQTtBQUVBOzs7OztRQXhOK0J2RixTOzs7OztpQkFFSCxJOzs7Ozs7O2lCQUVGLEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFJc0IsSTs7Ozs7OztpQkFFSixJOzs7Ozs7O2lCQUVGLEk7Ozs7Ozs7aUJBRUssSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBS0MsSTs7Ozs7OztpQkFHSyxJOzs7Ozs7O2lCQUdsQixJOzs7Ozs7O2lCQUdKLEk7Ozs7Ozs7aUJBR1AsSTs7Ozs7OztpQkFFYSxJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBR0wsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBpbnN0YW50aWF0ZSwgdjMsIFR3ZWVuLCBMYWJlbENvbXBvbmVudCwgU2Nyb2xsVmlld0NvbXBvbmVudCwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqIH0gZnJvbSAnLi4vLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4uL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVSZXN1bHRHb2xkQ2VsbCB9IGZyb20gJy4vR2FtZVJlc3VsdEdvbGRDZWxsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lV2luUHJlZmFiJylcclxuZXhwb3J0IGNsYXNzIEdhbWVXaW5QcmVmYWIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICB3aW5Hb2xkQ2VsbFByZWZhYjogUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGxlZnRCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHJpZ2h0QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyByZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+mHjeaWsOW8gOWni+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzaGFyZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5YiG5Lqr5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIG5leHRMZXZlbFNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5LiL5LiA5YWz5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy8g56uL5Y2z5aSN5rS75oyJ6ZKu57K+54G15binXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBnYW1lV2luSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP6IOc5YipaWNvblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBnYW1lTG9zc0ljb25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+a4uOaIj+Wksei0pWljb25cclxuXHJcblxyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxyXG4gICAgcHVibGljIHNoYXJlU2F2ZUxpZmVTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvLyDliIbkuqvlpI3mtLvmjInpkq7nurnnkIZcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxyXG4gICAgcHVibGljIHdhdGNoVmlkZW9TYXZlTGlmZVNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v55yL5bm/5ZGK5aSN5rS75oyJ6ZKu57q555CG5Z2Q5qCHXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHRJY29uTm9kZTogTm9kZSA9IG51bGw7IC8v5ri45oiP57uT5p6c6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3VtTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG90YWxFbmVteUNvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsR29sZENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2Nyb2xsVmlld05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUmVzdWx0U3RhdGU6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFdpblBvd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHYW1lUmVzdWx0KHN1Y2M6IGJvb2xlYW4sIGRhdGE6IERlYWRFbmVteU9ialtdLCBnYW1lQ29uZmlnOiB7fSwgdWlDdGw6IFVJQ29udHJvbGxlciwgZ2FtZUN0bDogR2FtZUNvbnRyb2xsZXIsIHZpZGVvSXNSZWFkeTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyID0gdWlDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0U3RhdGUgPSBzdWNjO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nirbmgIHml7ZcIiwgc3VjYylcclxuICAgICAgICBsZXQgYWxsRW5lbXlDb3VudCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBhbGxHb2xkQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p6c5pWw5o2u5pivXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5YWz5Y2h5omT5q2755qE5pWM5Lq65pWw55uu56eN57G777yM6I635b6X55qE6YeR5biB5pWw55uuIFwiKVxyXG4gICAgICAgIGlmIChzdWNjKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIuiDnOWIqemfs+aViFwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVXaW5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhcmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMubmV4dExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIFwi5ri45oiP5aSx6LSl6Z+z5pWIXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lTG9zc0ljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5yZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgaWYgKHZpZGVvSXNSZWFkeSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy53YXRjaFZpZGVvU2F2ZUxpZmVTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZVNhdmVMaWZlU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZU1hcCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXS5lbmVteUNvdW50ICs9IDE7IC8v5q2k57G75pWM5Lq655qE5oC75pWwXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdLndpbkdvbGRDb3VudCArPSBkYXRhW2ldLmRyb3BHb2xkQ291bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteUNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbkdvbGRDb3VudDogZGF0YVtpXS5kcm9wR29sZENvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxsR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSB0eXBlIG1hcFwiLCBlbmVteVR5cGVNYXApO1xyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSBpbiBlbmVteVR5cGVNYXApIHtcclxuICAgICAgICAvLyAgICAgbGV0IG9iaiA9IGVuZW15VHlwZU1hcFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLndpbkdvbGRDZWxsUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBpY29uU3RyID0gZ2FtZUNvbmZpZ1tpXS5JY29uU3ByaXRlRnJhbWVOYW1lO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKG5vZGUsIGluZGV4LCBpY29uU3RyLCBvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10pO1xyXG4gICAgICAgIC8vICAgICBpbmRleCsrO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luUG93ZXJDb3VudCA9IGFsbEdvbGRDb3VudDtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZW5lbXlUeXBlTWFwKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgICAgICBkYXRhLmtleSA9IGk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0XCIsIGxpc3QpO1xyXG4gICAgICAgIGxpc3QgPSBsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIud2luR29sZENvdW50IC0gYS53aW5Hb2xkQ291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGxpc3QsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsZXnpLrnu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dTdW1SZXN1bHQoYWxsRW5lbXlDb3VudCwgYWxsR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93U3VtUmVzdWx0KGVuZW15Q291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvL+aYvuekuuacgOWQjueahOaAu+WQiFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnb2xkQ291bnQgKyAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpIHtcclxuICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgIC8vICAgICAgICAgY2IoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBsaXN0ID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICAgICAgLy8gbGV0IG9iaktleSA9IGxpc3RbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGxpc3QubGVuZ3RoIC0gMSkpXTtcclxuICAgICAgICAvLyBsZXQgb2JqID0gZGF0YVtvYmpLZXldO1xyXG4gICAgICAgIC8vIGRlbGV0ZSBkYXRhW29iaktleV07XHJcbiAgICAgICAgbGV0IGNlbGxEYXRhID0gZGF0YS5wb3AoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSB0aGlzLmdhbWVDb25maWdbb2JqS2V5XS5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5zZXREYXRhKG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSwgaWNvblN0cik7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGNlbGxEYXRhKTtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgdGhpcy5ub2RlTGlzdC5sZW5ndGggKiAtMTAwIC0gNTAsIDApO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdE5vZGUuaGVpZ2h0ID0gbm9kZS5wb3NpdGlvbi55ICogLTEgKyA2MDtcclxuICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgdHcuZGVsYXkoMC40KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgIC8vICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+a4uOaIj+e7k+aenFwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVJlc3VsdFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobliIbkuqvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2hhcmVCdXR0b24odGhpcy5jdXJyZW50V2luUG93ZXJDb3VudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobvvIzph43mlrDlvIDlp4vmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrUmV0cnlCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5wbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgLy/njqnlrrbngrnkuobnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NlbGxFbnRlckFuaW0obm9kZTogTm9kZSwgaW5kZXg6IG51bWJlcixpY29uU3RyOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIGdvbGRDb3VudDogbnVtYmVyICkge1xyXG4gICAgLy8gICAgIC8v5bGV56S65LiA5Liq6IqC54K555qE6L+b5YWl5Yqo55S7ICAgIFxyXG4gICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YSggY291bnQsIGdvbGRDb3VudCwgaWNvblN0cik7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==