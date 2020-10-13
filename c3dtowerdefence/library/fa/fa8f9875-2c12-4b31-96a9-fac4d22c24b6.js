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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiZmluZCIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVXaW5QcmVmYWIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImdhbWVSZXN1bHRTdGF0ZSIsInVpQ29udHJvbGxlciIsImdhbWVDb250cm9sbGVyIiwibm9kZUxpc3QiLCJzdWNjIiwiZGF0YSIsInVpQ3RsIiwiZ2FtZUN0bCIsImNvbnNvbGUiLCJsb2ciLCJhbGxFbmVteUNvdW50IiwibGVuZ3RoIiwiYWxsR29sZENvdW50IiwiZ2FtZVJlc3VsdEljb25Ob2RlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJnYW1lV2luSWNvblNwcml0ZUZyYW1lIiwibGVmdEJ1dHRvbiIsInNoYXJlQnV0dG9uU3ByaXRlRnJhbWUiLCJyaWdodEJ1dHRvbiIsIm5leHRMZXZlbFNwcml0ZUZyYW1lIiwiZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWUiLCJyZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZSIsInNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWUiLCJlbmVteVR5cGVNYXAiLCJpIiwiZW5lbXlUeXBlIiwiZW5lbXlDb3VudCIsIndpbkdvbGRDb3VudCIsImRyb3BHb2xkQ291bnQiLCJsaXN0Iiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInNob3dDZWxsRW50ZXJBbmltIiwic2hvd1N1bVJlc3VsdCIsImdvbGRDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VtTm9kZSIsImFjdGl2ZSIsInRvdGFsRW5lbXlDb3VudExhYmVsIiwic3RyaW5nIiwidG90YWxHb2xkQ291bnRMYWJlbCIsImNiIiwiY2VsbERhdGEiLCJwb3AiLCJub2RlIiwid2luR29sZENlbGxQcmVmYWIiLCJwYXJlbnQiLCJnYW1lUmVzdWx0Tm9kZSIsInR3IiwiaW5pdCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwieSIsImRlbGF5IiwiY2FsbCIsInN0YXJ0IiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiZW1pdCIsInBsYXllckNsaWNrU2hhcmVCdXR0b24iLCJ0aGVuIiwiZW50ZXJOZXh0TGV2ZWwiLCJkZXN0cm95IiwicGxheWVyQ2xpY2tSZXRyeUJ1dHRvbiIsInBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uIiwicGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsYyxPQUFBQSxjO0FBQXFDQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFJaElDLE1BQUFBLGtCLHlCQUFBQSxrQjs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JaLFUsQ0FBdEJZLE87QUFBU0MsTUFBQUEsUSxHQUFhYixVLENBQWJhLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FB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ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBpbnN0YW50aWF0ZSwgdjMsIFR3ZWVuLCBMYWJlbENvbXBvbmVudCwgU2Nyb2xsVmlld0NvbXBvbmVudCAsZmluZH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi8uLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZVJlc3VsdEdvbGRDZWxsIH0gZnJvbSAnLi9HYW1lUmVzdWx0R29sZENlbGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVXaW5QcmVmYWInKVxyXG5leHBvcnQgY2xhc3MgR2FtZVdpblByZWZhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHdpbkdvbGRDZWxsUHJlZmFiOiBQcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgbGVmdEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcmlnaHRCdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v6YeN5paw5byA5aeL5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNoYXJlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/liIbkuqvmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgbmV4dExldmVsU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/kuIvkuIDlhbPmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvLyDnq4vljbPlpI3mtLvmjInpkq7nsr7ngbXluKdcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVXaW5JY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/og5zliKlpY29uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVMb3NzSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP5aSx6LSlaWNvblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0SWNvbk5vZGU6IE5vZGUgPSBudWxsOyAvL+a4uOaIj+e7k+aenOiKgueCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN1bU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsRW5lbXlDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3RhbEdvbGRDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNjcm9sbFZpZXdOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVSZXN1bHRTdGF0ZTogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpQ29udHJvbGxlcjogVUlDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgbm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2V0R2FtZVJlc3VsdChzdWNjOiBib29sZWFuLCBkYXRhOiBEZWFkRW5lbXlPYmpbXSwgZ2FtZUNvbmZpZzoge30sIHVpQ3RsOiBVSUNvbnRyb2xsZXIsIGdhbWVDdGw6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIgPSB1aUN0bDtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLmdhbWVSZXN1bHRTdGF0ZSA9IHN1Y2M7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZ2FtZUNvbmZpZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+eKtuaAgeaXtlwiLCBzdWNjKVxyXG4gICAgICAgIGxldCBhbGxFbmVteUNvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGFsbEdvbGRDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnpzmlbDmja7mmK9cIiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3lhbPljaHmiZPmrbvnmoTmlYzkurrmlbDnm67np43nsbvvvIzojrflvpfnmoTph5HluIHmlbDnm64gXCIpXHJcbiAgICAgICAgaWYgKHN1Y2MpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVXaW5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhcmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMubmV4dExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVMb3NzSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5zYXZlTGlmZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW5lbXlUeXBlTWFwID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdLmVuZW15Q291bnQgKz0gMTsgLy/mraTnsbvmlYzkurrnmoTmgLvmlbBcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0ud2luR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Q291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luR29sZENvdW50OiBkYXRhW2ldLmRyb3BHb2xkQ291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGxHb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IHR5cGUgbWFwXCIsIGVuZW15VHlwZU1hcCk7XHJcbiAgICAgICAgLy8gbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGVuZW15VHlwZU1hcCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgb2JqID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVJlc3VsdE5vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgbGV0IGljb25TdHIgPSBnYW1lQ29uZmlnW2ldLkljb25TcHJpdGVGcmFtZU5hbWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0obm9kZSwgaW5kZXgsIGljb25TdHIsIG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSk7XHJcbiAgICAgICAgLy8gICAgIGluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZW5lbXlUeXBlTWFwKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgICAgICBkYXRhLmtleSA9IGk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0XCIsIGxpc3QpO1xyXG4gICAgICAgIGxpc3QgPSBsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIud2luR29sZENvdW50IC0gYS53aW5Hb2xkQ291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGxpc3QsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsZXnpLrnu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dTdW1SZXN1bHQoYWxsRW5lbXlDb3VudCwgYWxsR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93U3VtUmVzdWx0KGVuZW15Q291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvL+aYvuekuuacgOWQjueahOaAu+WQiFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnb2xkQ291bnQgKyAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpIHtcclxuICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgIC8vICAgICAgICAgY2IoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBsaXN0ID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICAgICAgLy8gbGV0IG9iaktleSA9IGxpc3RbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGxpc3QubGVuZ3RoIC0gMSkpXTtcclxuICAgICAgICAvLyBsZXQgb2JqID0gZGF0YVtvYmpLZXldO1xyXG4gICAgICAgIC8vIGRlbGV0ZSBkYXRhW29iaktleV07XHJcbiAgICAgICAgbGV0IGNlbGxEYXRhID0gZGF0YS5wb3AoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSB0aGlzLmdhbWVDb25maWdbb2JqS2V5XS5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5zZXREYXRhKG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSwgaWNvblN0cik7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGNlbGxEYXRhKTtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgdGhpcy5ub2RlTGlzdC5sZW5ndGggKiAtMTAwIC0gNTAsIDApO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdE5vZGUuaGVpZ2h0ID0gbm9kZS5wb3NpdGlvbi55ICogLTEgKyA2MDtcclxuICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgdHcuZGVsYXkoMC40KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgIC8vICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+a4uOaIj+e7k+aenFwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVJlc3VsdFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobliIbkuqvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2hhcmVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbnRlck5leHRMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6hu+8jOmHjeaWsOW8gOWni+aMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyQ2xpY2tSZXRyeUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQtYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv6IOc5Yip55qE6K+d77yM6YKj5LmI546p5a6254K55Ye755qE5bCx5piv5LiL5LiA5YWz5ri45oiP55qE5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaXkuIvkuIDlhbNcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyLnBsYXllckNsaWNrTmV4dExldmVsQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyQ2xpY2tTYXZlTGlmZUJ1dHRvbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyAvL+eOqeWutueCueS6hueri+WNs+Wkjea0u+aMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzaG93Q2VsbEVudGVyQW5pbShub2RlOiBOb2RlLCBpbmRleDogbnVtYmVyLGljb25TdHI6IHN0cmluZywgY291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIgKSB7XHJcbiAgICAvLyAgICAgLy/lsZXnpLrkuIDkuKroioLngrnnmoTov5vlhaXliqjnlLsgICAgXHJcbiAgICAvLyAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5zZXREYXRhKCBjb3VudCwgZ29sZENvdW50LCBpY29uU3RyKTtcclxuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19