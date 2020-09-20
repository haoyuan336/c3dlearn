System.register(["cc", "code-quality:cr", "./GameResultGoldCell.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, SpriteFrame, SpriteComponent, instantiate, v3, Tween, LabelComponent, GameResultGoldCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, GameWinPrefab;

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
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameWinIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.shareButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.nextLevelSpriteFrame;
            } else {
              this.gameResultIconNode.getComponent(SpriteComponent).spriteFrame = this.gameLossIconSpriteFrame;
              this.leftButton.getComponent(SpriteComponent).spriteFrame = this.retryGameButtonSpriteFrame;
              this.rightButton.getComponent(SpriteComponent).spriteFrame = this.saveLifeButtonSpriteFrame;
            }

            var enemyTypeMap = {};

            for (var i = 0; i < data.length; i++) {
              if (enemyTypeMap[data[i].enemyType]) {
                enemyTypeMap[data[i].enemyType].count += 1; //此类敌人的总数

                enemyTypeMap[data[i].enemyType].winGoldCount += data[i].dropGoldCount;
              } else {
                enemyTypeMap[data[i].enemyType] = {
                  count: 1,
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


            this.showCellEnterAnim(enemyTypeMap, function () {
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

            if (Object.keys(data).length === 0) {
              if (cb) {
                cb();
              }

              return;
            }

            var list = Object.keys(data);
            var objKey = list[Math.round(Math.random() * (list.length - 1))];
            var obj = data[objKey];
            delete data[objKey];
            var node = instantiate(this.winGoldCellPrefab);
            node.parent = this.gameResultNode;
            var tw = new Tween(node);
            var iconStr = this.gameConfig[objKey].IconSpriteFrameName;
            node.getComponent(_crd && GameResultGoldCell === void 0 ? (_reportPossibleCrUseOfGameResultGoldCell({
              error: Error()
            }), GameResultGoldCell) : GameResultGoldCell).setData(obj['count'], obj['winGoldCount'], iconStr);
            node.position = v3(0, this.nodeList.length * -100 - 50, 0);
            this.nodeList.push(node);
            tw.delay(0.2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiR2FtZVJlc3VsdEdvbGRDZWxsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVdpblByZWZhYiIsInR5cGUiLCJnYW1lQ29uZmlnIiwiZ2FtZVJlc3VsdFN0YXRlIiwidWlDb250cm9sbGVyIiwiZ2FtZUNvbnRyb2xsZXIiLCJub2RlTGlzdCIsInN1Y2MiLCJkYXRhIiwidWlDdGwiLCJnYW1lQ3RsIiwiY29uc29sZSIsImxvZyIsImFsbEVuZW15Q291bnQiLCJsZW5ndGgiLCJhbGxHb2xkQ291bnQiLCJnYW1lUmVzdWx0SWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdhbWVXaW5JY29uU3ByaXRlRnJhbWUiLCJsZWZ0QnV0dG9uIiwic2hhcmVCdXR0b25TcHJpdGVGcmFtZSIsInJpZ2h0QnV0dG9uIiwibmV4dExldmVsU3ByaXRlRnJhbWUiLCJnYW1lTG9zc0ljb25TcHJpdGVGcmFtZSIsInJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lIiwic2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZSIsImVuZW15VHlwZU1hcCIsImkiLCJlbmVteVR5cGUiLCJjb3VudCIsIndpbkdvbGRDb3VudCIsImRyb3BHb2xkQ291bnQiLCJzaG93Q2VsbEVudGVyQW5pbSIsInNob3dTdW1SZXN1bHQiLCJlbmVteUNvdW50IiwiZ29sZENvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdW1Ob2RlIiwiYWN0aXZlIiwidG90YWxFbmVteUNvdW50TGFiZWwiLCJzdHJpbmciLCJ0b3RhbEdvbGRDb3VudExhYmVsIiwiY2IiLCJPYmplY3QiLCJrZXlzIiwibGlzdCIsIm9iaktleSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9iaiIsIm5vZGUiLCJ3aW5Hb2xkQ2VsbFByZWZhYiIsInBhcmVudCIsImdhbWVSZXN1bHROb2RlIiwidHciLCJpY29uU3RyIiwiSWNvblNwcml0ZUZyYW1lTmFtZSIsInNldERhdGEiLCJwb3NpdGlvbiIsInB1c2giLCJkZWxheSIsImNhbGwiLCJzdGFydCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInBsYXllckNsaWNrU2hhcmVCdXR0b24iLCJ0aGVuIiwiZW50ZXJOZXh0TGV2ZWwiLCJkZXN0cm95IiwicGxheWVyQ2xpY2tSZXRyeUJ1dHRvbiIsInBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsYyxPQUFBQSxjOzs7O0FBSTNGQyxNQUFBQSxrQix5QkFBQUEsa0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBRVJTLFFB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bkIsSUFBTCxDQUFVa0IsT0FBVjtBQUNIOztBQUNEOztBQUNKLG1CQUFLLGNBQUw7QUFDSSxvQkFBSSxLQUFLckUsZUFBVCxFQUEwQjtBQUN0QjtBQUNBUSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLHVCQUFLMEMsSUFBTCxDQUFVa0IsT0FBVjtBQUNBLHVCQUFLcEUsWUFBTCxDQUFrQnNFLDBCQUFsQjtBQUNILGlCQUxELE1BS087QUFDSCx1QkFBS3JFLGNBQUwsQ0FBb0JzRSx5QkFBcEIsR0FBZ0RMLElBQWhELENBQXFELFlBQUk7QUFDckQsb0JBQUEsTUFBSSxDQUFDaEIsSUFBTCxDQUFVa0IsT0FBVixHQURxRCxDQUNoQzs7QUFDeEIsbUJBRkQ7QUFHSDs7QUFDRDs7QUFDSjtBQUNJO0FBNUJSO0FBOEJILFcsQ0FDRDtBQUNBO0FBQ0E7QUFFQTs7Ozs7UUFoTCtCcEYsUzs7Ozs7aUJBRUgsSTs7Ozs7OztpQkFFRixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBSXNCLEk7Ozs7Ozs7aUJBRUosSTs7Ozs7OztpQkFFRixJOzs7Ozs7O2lCQUVLLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUdaLEk7Ozs7Ozs7aUJBR0osSTs7Ozs7OztpQkFHUCxJOzs7Ozs7O2lCQUVhLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFHTCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQsIGluc3RhbnRpYXRlLCB2MywgVHdlZW4sIExhYmVsQ29tcG9uZW50LCBTY3JvbGxWaWV3Q29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi8uLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZVJlc3VsdEdvbGRDZWxsIH0gZnJvbSAnLi9HYW1lUmVzdWx0R29sZENlbGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVXaW5QcmVmYWInKVxyXG5leHBvcnQgY2xhc3MgR2FtZVdpblByZWZhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHdpbkdvbGRDZWxsUHJlZmFiOiBQcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgbGVmdEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcmlnaHRCdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v6YeN5paw5byA5aeL5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNoYXJlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/liIbkuqvmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgbmV4dExldmVsU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/kuIvkuIDlhbPmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvLyDnq4vljbPlpI3mtLvmjInpkq7nsr7ngbXluKdcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVXaW5JY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/og5zliKlpY29uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVMb3NzSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP5aSx6LSlaWNvblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0SWNvbk5vZGU6IE5vZGUgPSBudWxsOyAvL+a4uOaIj+e7k+aenOiKgueCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN1bU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsRW5lbXlDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3RhbEdvbGRDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcclxuICAgIHB1YmxpYyBzY3JvbGxWaWV3Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUmVzdWx0U3RhdGU6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHNldEdhbWVSZXN1bHQoc3VjYzogYm9vbGVhbiwgZGF0YTogRGVhZEVuZW15T2JqW10sIGdhbWVDb25maWc6IHt9LCB1aUN0bDogVUlDb250cm9sbGVyLCBnYW1lQ3RsOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyID0gdWlDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0U3RhdGUgPSBzdWNjO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nirbmgIHml7ZcIiwgc3VjYylcclxuICAgICAgICBsZXQgYWxsRW5lbXlDb3VudCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBhbGxHb2xkQ291bnQgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p6c5pWw5o2u5pivXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5YWz5Y2h5omT5q2755qE5pWM5Lq65pWw55uu56eN57G777yM6I635b6X55qE6YeR5biB5pWw55uuIFwiKVxyXG4gICAgICAgIGlmIChzdWNjKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lV2luSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNoYXJlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLm5leHRMZXZlbFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlc3VsdEljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lTG9zc0ljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5yZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZU1hcCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXS5jb3VudCArPSAxOyAvL+atpOexu+aVjOS6uueahOaAu+aVsFxyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlTWFwW2RhdGFbaV0uZW5lbXlUeXBlXS53aW5Hb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luR29sZENvdW50OiBkYXRhW2ldLmRyb3BHb2xkQ291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGxHb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IHR5cGUgbWFwXCIsIGVuZW15VHlwZU1hcCk7XHJcbiAgICAgICAgLy8gbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGVuZW15VHlwZU1hcCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgb2JqID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVJlc3VsdE5vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgbGV0IGljb25TdHIgPSBnYW1lQ29uZmlnW2ldLkljb25TcHJpdGVGcmFtZU5hbWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0obm9kZSwgaW5kZXgsIGljb25TdHIsIG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSk7XHJcbiAgICAgICAgLy8gICAgIGluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGVuZW15VHlwZU1hcCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWxleekuue7k+adn1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1N1bVJlc3VsdChhbGxFbmVteUNvdW50LCBhbGxHb2xkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dTdW1SZXN1bHQoZW5lbXlDb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8v5pi+56S65pyA5ZCO55qE5oC75ZCIXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdW1Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxFbmVteUNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBlbmVteUNvdW50ICsgJyc7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxHb2xkQ291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGdvbGRDb3VudCArICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYikge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgICAgIGxldCBvYmpLZXkgPSBsaXN0W01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChsaXN0Lmxlbmd0aCAtIDEpKV07XHJcbiAgICAgICAgbGV0IG9iaiA9IGRhdGFbb2JqS2V5XTtcclxuICAgICAgICBkZWxldGUgZGF0YVtvYmpLZXldO1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy53aW5Hb2xkQ2VsbFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICBsZXQgaWNvblN0ciA9IHRoaXMuZ2FtZUNvbmZpZ1tvYmpLZXldLkljb25TcHJpdGVGcmFtZU5hbWU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5zZXREYXRhKG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSwgaWNvblN0cik7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKDAsIHRoaXMubm9kZUxpc3QubGVuZ3RoICogLTEwMCAtIDUwLDApO1xyXG4gICAgICAgIHRoaXMubm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICB0dy5kZWxheSgwLjIpXHJcbiAgICAgICAgdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgIC8vICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmuLjmiI/nu5PmnpxcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobvvIzph43mlrDlvIDlp4vmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrUmV0cnlCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5wbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7IC8v546p5a6254K55LqG56uL5Y2z5aSN5rS75oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNob3dDZWxsRW50ZXJBbmltKG5vZGU6IE5vZGUsIGluZGV4OiBudW1iZXIsaWNvblN0cjogc3RyaW5nLCBjb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlciApIHtcclxuICAgIC8vICAgICAvL+WxleekuuS4gOS4quiKgueCueeahOi/m+WFpeWKqOeUuyAgICBcclxuICAgIC8vICAgICAvLyBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLnNldERhdGEoIGNvdW50LCBnb2xkQ291bnQsIGljb25TdHIpO1xyXG5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=