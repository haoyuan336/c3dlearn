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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiZmluZCIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVXaW5QcmVmYWIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImdhbWVSZXN1bHRTdGF0ZSIsInVpQ29udHJvbGxlciIsImdhbWVDb250cm9sbGVyIiwibm9kZUxpc3QiLCJzdWNjIiwiZGF0YSIsInVpQ3RsIiwiZ2FtZUN0bCIsImNvbnNvbGUiLCJsb2ciLCJhbGxFbmVteUNvdW50IiwibGVuZ3RoIiwiYWxsR29sZENvdW50Iiwibm9kZSIsImVtaXQiLCJnYW1lUmVzdWx0SWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdhbWVXaW5JY29uU3ByaXRlRnJhbWUiLCJsZWZ0QnV0dG9uIiwic2hhcmVCdXR0b25TcHJpdGVGcmFtZSIsInJpZ2h0QnV0dG9uIiwibmV4dExldmVsU3ByaXRlRnJhbWUiLCJnYW1lTG9zc0ljb25TcHJpdGVGcmFtZSIsInJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lIiwic2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZSIsImVuZW15VHlwZU1hcCIsImkiLCJlbmVteVR5cGUiLCJlbmVteUNvdW50Iiwid2luR29sZENvdW50IiwiZHJvcEdvbGRDb3VudCIsImxpc3QiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2hvd0NlbGxFbnRlckFuaW0iLCJzaG93U3VtUmVzdWx0IiwiZ29sZENvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdW1Ob2RlIiwiYWN0aXZlIiwidG90YWxFbmVteUNvdW50TGFiZWwiLCJzdHJpbmciLCJ0b3RhbEdvbGRDb3VudExhYmVsIiwiY2IiLCJjZWxsRGF0YSIsInBvcCIsIndpbkdvbGRDZWxsUHJlZmFiIiwicGFyZW50IiwiZ2FtZVJlc3VsdE5vZGUiLCJ0dyIsImluaXQiLCJwb3NpdGlvbiIsImhlaWdodCIsInkiLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInBsYXllckNsaWNrU2hhcmVCdXR0b24iLCJ0aGVuIiwiZW50ZXJOZXh0TGV2ZWwiLCJkZXN0cm95IiwicGxheWVyQ2xpY2tSZXRyeUJ1dHRvbiIsInBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsYyxPQUFBQSxjO0FBQXFDQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFJaElDLE1BQUFBLGtCLHlCQUFBQSxrQjs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JaLFUsQ0FBdEJZLE87QUFBU0MsTUFBQUEsUSxHQUFhYixVLENBQWJhLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FB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STs7Ozs7OztpQkFFRCxJOzs7Ozs7O2lCQUdMLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgaW5zdGFudGlhdGUsIHYzLCBUd2VlbiwgTGFiZWxDb21wb25lbnQsIFNjcm9sbFZpZXdDb21wb25lbnQsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uLy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lUmVzdWx0R29sZENlbGwgfSBmcm9tICcuL0dhbWVSZXN1bHRHb2xkQ2VsbCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZVdpblByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lV2luUHJlZmFiIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgd2luR29sZENlbGxQcmVmYWI6IFByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByaWdodEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgcmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/ph43mlrDlvIDlp4vmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2hhcmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+WIhuS6q+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBuZXh0TGV2ZWxTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+S4i+S4gOWFs+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzYXZlTGlmZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8vIOeri+WNs+Wkjea0u+aMiemSrueyvueBteW4p1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVdpbkljb25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+a4uOaIj+iDnOWIqWljb25cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/lpLHotKVpY29uXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHRJY29uTm9kZTogTm9kZSA9IG51bGw7IC8v5ri45oiP57uT5p6c6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3VtTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG90YWxFbmVteUNvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsR29sZENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2Nyb2xsVmlld05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZVJlc3VsdFN0YXRlOiBib29sZWFuID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlDb250cm9sbGVyOiBVSUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBub2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHYW1lUmVzdWx0KHN1Y2M6IGJvb2xlYW4sIGRhdGE6IERlYWRFbmVteU9ialtdLCBnYW1lQ29uZmlnOiB7fSwgdWlDdGw6IFVJQ29udHJvbGxlciwgZ2FtZUN0bDogR2FtZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlciA9IHVpQ3RsO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdFN0YXRlID0gc3VjYztcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP54q25oCB5pe2XCIsIHN1Y2MpXHJcbiAgICAgICAgbGV0IGFsbEVuZW15Q291bnQgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgYWxsR29sZENvdW50ID0gMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+aenOaVsOaNruaYr1wiLCBkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWFs+WNoeaJk+atu+eahOaVjOS6uuaVsOebruenjeexu++8jOiOt+W+l+eahOmHkeW4geaVsOebriBcIilcclxuICAgICAgICBpZiAoc3VjYykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgXCLog5zliKnpn7PmlYhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lV2luSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNoYXJlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm5leHRMZXZlbFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5lbWl0KFwicGxheS1hdWRpb1wiLCBcIua4uOaIj+Wksei0pemfs+aViFwiKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVSZXN1bHRJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMucmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbmVteVR5cGVNYXAgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0uZW5lbXlDb3VudCArPSAxOyAvL+atpOexu+aVjOS6uueahOaAu+aVsFxyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXS53aW5Hb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlDb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICB3aW5Hb2xkQ291bnQ6IGRhdGFbaV0uZHJvcEdvbGRDb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsbEdvbGRDb3VudCArPSBkYXRhW2ldLmRyb3BHb2xkQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgdHlwZSBtYXBcIiwgZW5lbXlUeXBlTWFwKTtcclxuICAgICAgICAvLyBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgaW4gZW5lbXlUeXBlTWFwKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBvYmogPSBlbmVteVR5cGVNYXBbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy53aW5Hb2xkQ2VsbFByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICBsZXQgaWNvblN0ciA9IGdhbWVDb25maWdbaV0uSWNvblNwcml0ZUZyYW1lTmFtZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShub2RlLCBpbmRleCwgaWNvblN0ciwgb2JqWydjb3VudCddLCBvYmpbJ3dpbkdvbGRDb3VudCddKTtcclxuICAgICAgICAvLyAgICAgaW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBlbmVteVR5cGVNYXApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBlbmVteVR5cGVNYXBbaV07XHJcbiAgICAgICAgICAgIGRhdGEua2V5ID0gaTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RcIiwgbGlzdCk7XHJcbiAgICAgICAgbGlzdCA9IGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYi53aW5Hb2xkQ291bnQgLSBhLndpbkdvbGRDb3VudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0obGlzdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWxleekuue7k+adn1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1N1bVJlc3VsdChhbGxFbmVteUNvdW50LCBhbGxHb2xkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dTdW1SZXN1bHQoZW5lbXlDb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8v5pi+56S65pyA5ZCO55qE5oC75ZCIXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdW1Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxFbmVteUNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBlbmVteUNvdW50ICsgJyc7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxHb2xkQ291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGdvbGRDb3VudCArICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYikge1xyXG4gICAgICAgIC8vIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYigpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgICAgICAvLyBsZXQgb2JqS2V5ID0gbGlzdFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobGlzdC5sZW5ndGggLSAxKSldO1xyXG4gICAgICAgIC8vIGxldCBvYmogPSBkYXRhW29iaktleV07XHJcbiAgICAgICAgLy8gZGVsZXRlIGRhdGFbb2JqS2V5XTtcclxuICAgICAgICBsZXQgY2VsbERhdGEgPSBkYXRhLnBvcCgpO1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy53aW5Hb2xkQ2VsbFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAvLyBsZXQgaWNvblN0ciA9IHRoaXMuZ2FtZUNvbmZpZ1tvYmpLZXldLkljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLnNldERhdGEob2JqWydjb3VudCddLCBvYmpbJ3dpbkdvbGRDb3VudCddLCBpY29uU3RyKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlciwgY2VsbERhdGEpO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCB0aGlzLm5vZGVMaXN0Lmxlbmd0aCAqIC0xMDAgLSA1MCwgMCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0Tm9kZS5oZWlnaHQgPSBub2RlLnBvc2l0aW9uLnkgKiAtMSArIDYwO1xyXG4gICAgICAgIHRoaXMubm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICB0dy5kZWxheSgwLjQpXHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGRhdGEsIGNiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0dy5kZWxheSgwLjUpXHJcbiAgICAgICAgLy8gICAgIHR3LmJ5KDAuMiwge1xyXG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHYzKDAsIDgwLCAwKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwicGxheWVyLWJ1dHRvbi1jbGljay1hdWRpb1wiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQtYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiG5Lqr5ri45oiP57uT5p6cXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6huWIhuS6q+aMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyQ2xpY2tTaGFyZUJ1dHRvbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLmVudGVyTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG77yM6YeN5paw5byA5aeL5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1JldHJ5QnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVJlc3VsdFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/og5zliKnnmoTor53vvIzpgqPkuYjnjqnlrrbngrnlh7vnmoTlsLHmmK/kuIvkuIDlhbPmuLjmiI/nmoTmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeS4i+S4gOWFs1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIucGxheWVyQ2xpY2tOZXh0TGV2ZWxCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1NhdmVMaWZlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7IC8v546p5a6254K55LqG56uL5Y2z5aSN5rS75oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNob3dDZWxsRW50ZXJBbmltKG5vZGU6IE5vZGUsIGluZGV4OiBudW1iZXIsaWNvblN0cjogc3RyaW5nLCBjb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlciApIHtcclxuICAgIC8vICAgICAvL+WxleekuuS4gOS4quiKgueCueeahOi/m+WFpeWKqOeUuyAgICBcclxuICAgIC8vICAgICAvLyBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLnNldERhdGEoIGNvdW50LCBnb2xkQ291bnQsIGljb25TdHIpO1xyXG5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=