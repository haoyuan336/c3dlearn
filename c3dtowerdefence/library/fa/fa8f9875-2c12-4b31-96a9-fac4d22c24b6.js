System.register(["cc", "code-quality:cr", "./GameResultGoldCell.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, SpriteFrame, SpriteComponent, instantiate, v3, Tween, LabelComponent, find, GameResultGoldCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, GameWinPrefab;

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

          _initializerDefineProperty(_this, "gameResultIconNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameResultNode", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sumNode", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalEnemyCountLabel", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalGoldCountLabel", _descriptor14, _assertThisInitialized(_this));

          _this.gameConfig = null;

          _initializerDefineProperty(_this, "scrollViewNode", _descriptor15, _assertThisInitialized(_this));

          _this.gameResultState = null;
          _this.uiController = null;
          _this.gameController = null;
          _this.nodeList = [];
          return _this;
        }

        _createClass(GameWinPrefab, [{
          key: "start",
          value: function start() {}
        }, {
          key: "setGameResult",
          value: function setGameResult(succ, data, gameConfig, uiCtl, gameCtl) {
            var _this2 = this;

            this.uiController = uiCtl;
            this.gameController = gameCtl;
            this.gameResultState = succ;
            this.gameConfig = gameConfig;
            console.log("游戏状态时", succ);
            var allEnemyCount = data.length;
            var allGoldCount = 0;
            console.log("游戏结果数据是", data);
            console.log("当前关卡打死的敌人数目种类，获得的金币数目 ");

            if (succ) {
              this.gameController.node.emit("play-audio", "胜利音效");
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameWinIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.shareButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.nextLevelSpriteFrame;
            } else {
              this.gameController.node.emit("play-audio", "游戏失败音效");
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameLossIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.retryGameButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.saveLifeButtonSpriteFrame;
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
                  this.gameController.playerClickShareButton().then(function () {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameResultIconNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameResultNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sumNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "totalEnemyCountLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "totalGoldCountLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewNode", [_dec16], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiZmluZCIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVXaW5QcmVmYWIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImdhbWVSZXN1bHRTdGF0ZSIsInVpQ29udHJvbGxlciIsImdhbWVDb250cm9sbGVyIiwibm9kZUxpc3QiLCJzdWNjIiwiZGF0YSIsInVpQ3RsIiwiZ2FtZUN0bCIsImNvbnNvbGUiLCJsb2ciLCJhbGxFbmVteUNvdW50IiwibGVuZ3RoIiwiYWxsR29sZENvdW50Iiwibm9kZSIsImVtaXQiLCJnYW1lUmVzdWx0SWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdhbWVXaW5JY29uU3ByaXRlRnJhbWUiLCJsZWZ0QnV0dG9uIiwic2hhcmVCdXR0b25TcHJpdGVGcmFtZSIsInJpZ2h0QnV0dG9uIiwibmV4dExldmVsU3ByaXRlRnJhbWUiLCJnYW1lTG9zc0ljb25TcHJpdGVGcmFtZSIsInJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lIiwic2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZSIsImVuZW15VHlwZU1hcCIsImkiLCJlbmVteVR5cGUiLCJlbmVteUNvdW50Iiwid2luR29sZENvdW50IiwiZHJvcEdvbGRDb3VudCIsImxpc3QiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2hvd0NlbGxFbnRlckFuaW0iLCJzaG93U3VtUmVzdWx0IiwiZ29sZENvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdW1Ob2RlIiwiYWN0aXZlIiwidG90YWxFbmVteUNvdW50TGFiZWwiLCJzdHJpbmciLCJ0b3RhbEdvbGRDb3VudExhYmVsIiwiY2IiLCJjZWxsRGF0YSIsInBvcCIsIndpbkdvbGRDZWxsUHJlZmFiIiwicGFyZW50IiwiZ2FtZVJlc3VsdE5vZGUiLCJ0dyIsImluaXQiLCJwb3NpdGlvbiIsImhlaWdodCIsInkiLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInBsYXllckNsaWNrU2hhcmVCdXR0b24iLCJ0aGVuIiwiZW50ZXJOZXh0TGV2ZWwiLCJkZXN0cm95IiwicGxheWVyQ2xpY2tSZXRyeUJ1dHRvbiIsInBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsYyxPQUFBQSxjO0FBQXFDQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFJaElDLE1BQUFBLGtCLHlCQUFBQSxrQjs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JaLFUsQ0FBdEJZLE87QUFBU0MsTUFBQUEsUSxHQUFhYixVLENBQWJhLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FB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RUYsSTs7Ozs7OztpQkFFSyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFHWixJOzs7Ozs7O2lCQUdKLEk7Ozs7Ozs7aUJBR1AsSTs7Ozs7OztpQkFFYSxJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBR0wsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBpbnN0YW50aWF0ZSwgdjMsIFR3ZWVuLCBMYWJlbENvbXBvbmVudCwgU2Nyb2xsVmlld0NvbXBvbmVudCwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgRGVhZEVuZW15T2JqIH0gZnJvbSAnLi4vLi4vRW5lbXlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4uL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVSZXN1bHRHb2xkQ2VsbCB9IGZyb20gJy4vR2FtZVJlc3VsdEdvbGRDZWxsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lV2luUHJlZmFiJylcclxuZXhwb3J0IGNsYXNzIEdhbWVXaW5QcmVmYWIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICB3aW5Hb2xkQ2VsbFByZWZhYjogUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGxlZnRCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHJpZ2h0QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyByZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+mHjeaWsOW8gOWni+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzaGFyZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5YiG5Lqr5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIG5leHRMZXZlbFNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5LiL5LiA5YWz5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy8g56uL5Y2z5aSN5rS75oyJ6ZKu57K+54G15binXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBnYW1lV2luSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP6IOc5YipaWNvblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBnYW1lTG9zc0ljb25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+a4uOaIj+Wksei0pWljb25cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVJlc3VsdEljb25Ob2RlOiBOb2RlID0gbnVsbDsgLy/muLjmiI/nu5PmnpzoioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVJlc3VsdE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdW1Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3RhbEVuZW15Q291bnRMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG90YWxHb2xkQ291bnRMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzY3JvbGxWaWV3Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUmVzdWx0U3RhdGU6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHNldEdhbWVSZXN1bHQoc3VjYzogYm9vbGVhbiwgZGF0YTogRGVhZEVuZW15T2JqW10sIGdhbWVDb25maWc6IHt9LCB1aUN0bDogVUlDb250cm9sbGVyLCBnYW1lQ3RsOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyID0gdWlDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0U3RhdGUgPSBzdWNjO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nirbmgIHml7ZcIiwgc3VjYylcclxuICAgICAgICBsZXQgYWxsRW5lbXlDb3VudCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBhbGxHb2xkQ291bnQgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p6c5pWw5o2u5pivXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5YWz5Y2h5omT5q2755qE5pWM5Lq65pWw55uu56eN57G777yM6I635b6X55qE6YeR5biB5pWw55uuIFwiKVxyXG4gICAgICAgIGlmIChzdWNjKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIuiDnOWIqemfs+aViFwiKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVXaW5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhcmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMubmV4dExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIFwi5ri45oiP5aSx6LSl6Z+z5pWIXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lTG9zc0ljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5yZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZU1hcCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXS5lbmVteUNvdW50ICs9IDE7IC8v5q2k57G75pWM5Lq655qE5oC75pWwXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdLndpbkdvbGRDb3VudCArPSBkYXRhW2ldLmRyb3BHb2xkQ291bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteUNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbkdvbGRDb3VudDogZGF0YVtpXS5kcm9wR29sZENvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxsR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSB0eXBlIG1hcFwiLCBlbmVteVR5cGVNYXApO1xyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSBpbiBlbmVteVR5cGVNYXApIHtcclxuICAgICAgICAvLyAgICAgbGV0IG9iaiA9IGVuZW15VHlwZU1hcFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLndpbkdvbGRDZWxsUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBpY29uU3RyID0gZ2FtZUNvbmZpZ1tpXS5JY29uU3ByaXRlRnJhbWVOYW1lO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKG5vZGUsIGluZGV4LCBpY29uU3RyLCBvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10pO1xyXG4gICAgICAgIC8vICAgICBpbmRleCsrO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGVuZW15VHlwZU1hcCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGVuZW15VHlwZU1hcFtpXTtcclxuICAgICAgICAgICAgZGF0YS5rZXkgPSBpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdFwiLCBsaXN0KTtcclxuICAgICAgICBsaXN0ID0gbGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLndpbkdvbGRDb3VudCAtIGEud2luR29sZENvdW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShsaXN0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bGV56S657uT5p2fXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93U3VtUmVzdWx0KGFsbEVuZW15Q291bnQsIGFsbEdvbGRDb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd1N1bVJlc3VsdChlbmVteUNvdW50OiBudW1iZXIsIGdvbGRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/mmL7npLrmnIDlkI7nmoTmgLvlkIhcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1bU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEVuZW15Q291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGVuZW15Q291bnQgKyAnJztcclxuICAgICAgICAgICAgdGhpcy50b3RhbEdvbGRDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZ29sZENvdW50ICsgJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dDZWxsRW50ZXJBbmltKGRhdGEsIGNiKSB7XHJcbiAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgbGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgICAgIC8vIGxldCBvYmpLZXkgPSBsaXN0W01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChsaXN0Lmxlbmd0aCAtIDEpKV07XHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IGRhdGFbb2JqS2V5XTtcclxuICAgICAgICAvLyBkZWxldGUgZGF0YVtvYmpLZXldO1xyXG4gICAgICAgIGxldCBjZWxsRGF0YSA9IGRhdGEucG9wKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLndpbkdvbGRDZWxsUHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVJlc3VsdE5vZGU7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgIC8vIGxldCBpY29uU3RyID0gdGhpcy5nYW1lQ29uZmlnW29iaktleV0uSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YShvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10sIGljb25TdHIpO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLCBjZWxsRGF0YSk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKDAsIHRoaXMubm9kZUxpc3QubGVuZ3RoICogLTEwMCAtIDUwLCAwKTtcclxuICAgICAgICB0aGlzLmdhbWVSZXN1bHROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgNjA7XHJcbiAgICAgICAgdGhpcy5ub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHR3LmRlbGF5KDAuNClcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHR3LmRlbGF5KDAuNSlcclxuICAgICAgICAvLyAgICAgdHcuYnkoMC4yLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogdjMoMCwgODAsIDApXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGRhdGEsIGNiKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5ZXItYnV0dG9uLWNsaWNrLWF1ZGlvXCIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmuLjmiI/nu5PmnpxcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobvvIzph43mlrDlvIDlp4vmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrUmV0cnlCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5wbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgLy/njqnlrrbngrnkuobnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NlbGxFbnRlckFuaW0obm9kZTogTm9kZSwgaW5kZXg6IG51bWJlcixpY29uU3RyOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIGdvbGRDb3VudDogbnVtYmVyICkge1xyXG4gICAgLy8gICAgIC8v5bGV56S65LiA5Liq6IqC54K555qE6L+b5YWl5Yqo55S7ICAgIFxyXG4gICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YSggY291bnQsIGdvbGRDb3VudCwgaWNvblN0cik7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==