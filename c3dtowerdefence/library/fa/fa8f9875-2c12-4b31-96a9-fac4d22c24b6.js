System.register(["cc", "code-quality:cr", "./GameResultGoldCell.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, SpriteFrame, SpriteComponent, instantiate, v3, Tween, LabelComponent, GameResultGoldCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, GameWinPrefab;

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
          _this.gameResultState = null;
          _this.uiController = null;
          _this.gameController = null;
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

            for (var i = 0; i < list.length - 1; i++) {
              tw.delay(0.5);
              tw.by(0.2, {
                position: v3(0, 80, 0)
              });
            }

            tw.call(function () {
              _this4.showCellEnterAnim(data, cb);
            });
            tw.start();
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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiR2FtZVJlc3VsdEdvbGRDZWxsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVdpblByZWZhYiIsInR5cGUiLCJnYW1lQ29uZmlnIiwiZ2FtZVJlc3VsdFN0YXRlIiwidWlDb250cm9sbGVyIiwiZ2FtZUNvbnRyb2xsZXIiLCJzdWNjIiwiZGF0YSIsInVpQ3RsIiwiZ2FtZUN0bCIsImNvbnNvbGUiLCJsb2ciLCJhbGxFbmVteUNvdW50IiwibGVuZ3RoIiwiYWxsR29sZENvdW50IiwiZ2FtZVJlc3VsdEljb25Ob2RlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJnYW1lV2luSWNvblNwcml0ZUZyYW1lIiwibGVmdEJ1dHRvbiIsInNoYXJlQnV0dG9uU3ByaXRlRnJhbWUiLCJyaWdodEJ1dHRvbiIsIm5leHRMZXZlbFNwcml0ZUZyYW1lIiwiZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWUiLCJyZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZSIsInNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWUiLCJlbmVteVR5cGVNYXAiLCJpIiwiZW5lbXlUeXBlIiwiY291bnQiLCJ3aW5Hb2xkQ291bnQiLCJkcm9wR29sZENvdW50Iiwic2hvd0NlbGxFbnRlckFuaW0iLCJzaG93U3VtUmVzdWx0IiwiZW5lbXlDb3VudCIsImdvbGRDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VtTm9kZSIsImFjdGl2ZSIsInRvdGFsRW5lbXlDb3VudExhYmVsIiwic3RyaW5nIiwidG90YWxHb2xkQ291bnRMYWJlbCIsImNiIiwiT2JqZWN0Iiwia2V5cyIsImxpc3QiLCJvYmpLZXkiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvYmoiLCJub2RlIiwid2luR29sZENlbGxQcmVmYWIiLCJwYXJlbnQiLCJnYW1lUmVzdWx0Tm9kZSIsInR3IiwiaWNvblN0ciIsIkljb25TcHJpdGVGcmFtZU5hbWUiLCJzZXREYXRhIiwiZGVsYXkiLCJieSIsInBvc2l0aW9uIiwiY2FsbCIsInN0YXJ0IiwiZXZlbnQiLCJjdXN0b21EYXRhIiwicGxheWVyQ2xpY2tTaGFyZUJ1dHRvbiIsInRoZW4iLCJlbnRlck5leHRMZXZlbCIsImRlc3Ryb3kiLCJwbGF5ZXJDbGlja1JldHJ5QnV0dG9uIiwicGxheWVyQ2xpY2tOZXh0TGV2ZWxCdXR0b24iLCJwbGF5ZXJDbGlja1NhdmVMaWZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsYyxPQUFBQSxjOzs7O0FBSTNGQyxNQUFBQSxrQix5QkFBQUEsa0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBRVJTLFFBQVEsQ0FBQztBQUFFRSxR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QUwsQ0FBVWtCLE9BQVY7QUFDQSx1QkFBS25FLFlBQUwsQ0FBa0JxRSwwQkFBbEI7QUFDSCxpQkFMRCxNQUtPO0FBQ0gsdUJBQUtwRSxjQUFMLENBQW9CcUUseUJBQXBCLEdBQWdETCxJQUFoRCxDQUFxRCxZQUFJO0FBQ3JELG9CQUFBLE1BQUksQ0FBQ2hCLElBQUwsQ0FBVWtCLE9BQVYsR0FEcUQsQ0FDaEM7O0FBQ3hCLG1CQUZEO0FBR0g7O0FBQ0Q7O0FBQ0o7QUFDSTtBQTVCUjtBQThCSCxXLENBQ0Q7QUFDQTtBQUNBO0FBRUE7Ozs7O1FBcEsrQm5GLFM7Ozs7O2lCQUVILEk7Ozs7Ozs7aUJBRUYsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUlzQixJOzs7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBRUYsSTs7Ozs7OztpQkFFSyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFHWixJOzs7Ozs7O2lCQUdKLEk7Ozs7Ozs7aUJBR1AsSTs7Ozs7OztpQkFFYSxJOzs7Ozs7O2lCQUVELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgaW5zdGFudGlhdGUsIHYzLCBUd2VlbiwgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uLy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lUmVzdWx0R29sZENlbGwgfSBmcm9tICcuL0dhbWVSZXN1bHRHb2xkQ2VsbCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZVdpblByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBHYW1lV2luUHJlZmFiIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgd2luR29sZENlbGxQcmVmYWI6IFByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByaWdodEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgcmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/ph43mlrDlvIDlp4vmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2hhcmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+WIhuS6q+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBuZXh0TGV2ZWxTcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+S4i+S4gOWFs+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzYXZlTGlmZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8vIOeri+WNs+Wkjea0u+aMiemSrueyvueBteW4p1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVdpbkljb25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+a4uOaIj+iDnOWIqWljb25cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/lpLHotKVpY29uXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHRJY29uTm9kZTogTm9kZSA9IG51bGw7IC8v5ri45oiP57uT5p6c6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVSZXN1bHROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3VtTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG90YWxFbmVteUNvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsR29sZENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUmVzdWx0U3RhdGU6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHYW1lUmVzdWx0KHN1Y2M6IGJvb2xlYW4sIGRhdGE6IERlYWRFbmVteU9ialtdLCBnYW1lQ29uZmlnOiB7fSwgdWlDdGw6IFVJQ29udHJvbGxlciwgZ2FtZUN0bDogR2FtZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbGxlciA9IHVpQ3RsO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdFN0YXRlID0gc3VjYztcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP54q25oCB5pe2XCIsIHN1Y2MpXHJcbiAgICAgICAgbGV0IGFsbEVuZW15Q291bnQgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgYWxsR29sZENvdW50ID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWFs+WNoeaJk+atu+eahOaVjOS6uuaVsOebruenjeexu++8jOiOt+W+l+eahOmHkeW4geaVsOebriBcIilcclxuICAgICAgICBpZiAoc3VjYykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVSZXN1bHRJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2FtZVdpbkljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5uZXh0TGV2ZWxTcHJpdGVGcmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVSZXN1bHRJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMucmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbmVteVR5cGVNYXAgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0uY291bnQgKz0gMTsgLy/mraTnsbvmlYzkurrnmoTmgLvmlbBcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0ud2luR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbkdvbGRDb3VudDogZGF0YVtpXS5kcm9wR29sZENvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxsR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSB0eXBlIG1hcFwiLCBlbmVteVR5cGVNYXApO1xyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSBpbiBlbmVteVR5cGVNYXApIHtcclxuICAgICAgICAvLyAgICAgbGV0IG9iaiA9IGVuZW15VHlwZU1hcFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLndpbkdvbGRDZWxsUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBpY29uU3RyID0gZ2FtZUNvbmZpZ1tpXS5JY29uU3ByaXRlRnJhbWVOYW1lO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKG5vZGUsIGluZGV4LCBpY29uU3RyLCBvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10pO1xyXG4gICAgICAgIC8vICAgICBpbmRleCsrO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShlbmVteVR5cGVNYXAsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsZXnpLrnu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dTdW1SZXN1bHQoYWxsRW5lbXlDb3VudCwgYWxsR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93U3VtUmVzdWx0KGVuZW15Q291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvL+aYvuekuuacgOWQjueahOaAu+WQiFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnb2xkQ291bnQgKyAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgICAgICBsZXQgb2JqS2V5ID0gbGlzdFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobGlzdC5sZW5ndGggLSAxKSldO1xyXG4gICAgICAgIGxldCBvYmogPSBkYXRhW29iaktleV07XHJcbiAgICAgICAgZGVsZXRlIGRhdGFbb2JqS2V5XTtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgbGV0IGljb25TdHIgPSB0aGlzLmdhbWVDb25maWdbb2JqS2V5XS5JY29uU3ByaXRlRnJhbWVOYW1lO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YShvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10sIGljb25TdHIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmuLjmiI/nu5PmnpxcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobvvIzph43mlrDlvIDlp4vmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrUmV0cnlCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5wbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7IC8v546p5a6254K55LqG56uL5Y2z5aSN5rS75oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNob3dDZWxsRW50ZXJBbmltKG5vZGU6IE5vZGUsIGluZGV4OiBudW1iZXIsaWNvblN0cjogc3RyaW5nLCBjb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlciApIHtcclxuICAgIC8vICAgICAvL+WxleekuuS4gOS4quiKgueCueeahOi/m+WFpeWKqOeUuyAgICBcclxuICAgIC8vICAgICAvLyBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLnNldERhdGEoIGNvdW50LCBnb2xkQ291bnQsIGljb25TdHIpO1xyXG5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=