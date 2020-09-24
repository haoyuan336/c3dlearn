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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiR2FtZVJlc3VsdEdvbGRDZWxsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVdpblByZWZhYiIsInR5cGUiLCJnYW1lQ29uZmlnIiwiZ2FtZVJlc3VsdFN0YXRlIiwidWlDb250cm9sbGVyIiwiZ2FtZUNvbnRyb2xsZXIiLCJub2RlTGlzdCIsInN1Y2MiLCJkYXRhIiwidWlDdGwiLCJnYW1lQ3RsIiwiY29uc29sZSIsImxvZyIsImFsbEVuZW15Q291bnQiLCJsZW5ndGgiLCJhbGxHb2xkQ291bnQiLCJnYW1lUmVzdWx0SWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsImdhbWVXaW5JY29uU3ByaXRlRnJhbWUiLCJsZWZ0QnV0dG9uIiwic2hhcmVCdXR0b25TcHJpdGVGcmFtZSIsInJpZ2h0QnV0dG9uIiwibmV4dExldmVsU3ByaXRlRnJhbWUiLCJnYW1lTG9zc0ljb25TcHJpdGVGcmFtZSIsInJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lIiwic2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZSIsImVuZW15VHlwZU1hcCIsImkiLCJlbmVteVR5cGUiLCJlbmVteUNvdW50Iiwid2luR29sZENvdW50IiwiZHJvcEdvbGRDb3VudCIsImxpc3QiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2hvd0NlbGxFbnRlckFuaW0iLCJzaG93U3VtUmVzdWx0IiwiZ29sZENvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdW1Ob2RlIiwiYWN0aXZlIiwidG90YWxFbmVteUNvdW50TGFiZWwiLCJzdHJpbmciLCJ0b3RhbEdvbGRDb3VudExhYmVsIiwiY2IiLCJjZWxsRGF0YSIsInBvcCIsIm5vZGUiLCJ3aW5Hb2xkQ2VsbFByZWZhYiIsInBhcmVudCIsImdhbWVSZXN1bHROb2RlIiwidHciLCJpbml0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ5IiwiZGVsYXkiLCJjYWxsIiwic3RhcnQiLCJldmVudCIsImN1c3RvbURhdGEiLCJwbGF5ZXJDbGlja1NoYXJlQnV0dG9uIiwidGhlbiIsImVudGVyTmV4dExldmVsIiwiZGVzdHJveSIsInBsYXllckNsaWNrUmV0cnlCdXR0b24iLCJwbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbiIsInBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGMsT0FBQUEsYzs7OztBQUkzRkMsTUFBQUEsa0IseUJBQUFBLGtCOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUVSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVS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LEdBQTZDQyxJQUE3QyxDQUFrRCxZQUFNO0FBQ3BELG9CQUFBLE1BQUksQ0FBQy9ELGNBQUwsQ0FBb0JnRSxjQUFwQjs7QUFDQSxvQkFBQSxNQUFJLENBQUNoQixJQUFMLENBQVVpQixPQUFWO0FBQ0gsbUJBSEQ7QUFJSCxpQkFORCxNQU1PO0FBQ0g7QUFDQSx1QkFBS2pFLGNBQUwsQ0FBb0JrRSxzQkFBcEI7QUFDQSx1QkFBS2xCLElBQUwsQ0FBVWlCLE9BQVY7QUFDSDs7QUFDRDs7QUFDSixtQkFBSyxjQUFMO0FBQ0ksb0JBQUksS0FBS25FLGVBQVQsRUFBMEI7QUFDdEI7QUFDQVEsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSx1QkFBS3lDLElBQUwsQ0FBVWlCLE9BQVY7QUFDQSx1QkFBS2xFLFlBQUwsQ0FBa0JvRSwwQkFBbEI7QUFDSCxpQkFMRCxNQUtPO0FBQ0gsdUJBQUtuRSxjQUFMLENBQW9Cb0UseUJBQXBCLEdBQWdETCxJQUFoRCxDQUFxRCxZQUFNO0FBQ3ZELG9CQUFBLE1BQUksQ0FBQ2YsSUFBTCxDQUFVaUIsT0FBVixHQUR1RCxDQUNsQzs7QUFDeEIsbUJBRkQ7QUFHSDs7QUFDRDs7QUFDSjtBQUNJO0FBNUJSO0FBOEJILFcsQ0FDRDtBQUNBO0FBQ0E7QUFFQTs7Ozs7UUFuTStCbEYsUzs7Ozs7aUJBRUgsSTs7Ozs7OztpQkFFRixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBSXNCLEk7Ozs7Ozs7aUJBRUosSTs7Ozs7OztpQkFFRixJOzs7Ozs7O2lCQUVLLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUdaLEk7Ozs7Ozs7aUJBR0osSTs7Ozs7OztpQkFHUCxJOzs7Ozs7O2lCQUVhLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFHTCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQsIGluc3RhbnRpYXRlLCB2MywgVHdlZW4sIExhYmVsQ29tcG9uZW50LCBTY3JvbGxWaWV3Q29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBEZWFkRW5lbXlPYmogfSBmcm9tICcuLi8uLi9FbmVteUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2FtZVJlc3VsdEdvbGRDZWxsIH0gZnJvbSAnLi9HYW1lUmVzdWx0R29sZENlbGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVXaW5QcmVmYWInKVxyXG5leHBvcnQgY2xhc3MgR2FtZVdpblByZWZhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHdpbkdvbGRDZWxsUHJlZmFiOiBQcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgbGVmdEJ1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcmlnaHRCdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v6YeN5paw5byA5aeL5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNoYXJlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/liIbkuqvmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgbmV4dExldmVsU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/kuIvkuIDlhbPmjInpkq7nsr7ngbXluKdcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgc2F2ZUxpZmVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvLyDnq4vljbPlpI3mtLvmjInpkq7nsr7ngbXluKdcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVXaW5JY29uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy/muLjmiI/og5zliKlpY29uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIGdhbWVMb3NzSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP5aSx6LSlaWNvblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0SWNvbk5vZGU6IE5vZGUgPSBudWxsOyAvL+a4uOaIj+e7k+aenOiKgueCuVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lUmVzdWx0Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN1bU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHRvdGFsRW5lbXlDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3RhbEdvbGRDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNjcm9sbFZpZXdOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVSZXN1bHRTdGF0ZTogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpQ29udHJvbGxlcjogVUlDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgbm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2V0R2FtZVJlc3VsdChzdWNjOiBib29sZWFuLCBkYXRhOiBEZWFkRW5lbXlPYmpbXSwgZ2FtZUNvbmZpZzoge30sIHVpQ3RsOiBVSUNvbnRyb2xsZXIsIGdhbWVDdGw6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXIgPSB1aUN0bDtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLmdhbWVSZXN1bHRTdGF0ZSA9IHN1Y2M7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZ2FtZUNvbmZpZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+eKtuaAgeaXtlwiLCBzdWNjKVxyXG4gICAgICAgIGxldCBhbGxFbmVteUNvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGFsbEdvbGRDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnpzmlbDmja7mmK9cIiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3lhbPljaHmiZPmrbvnmoTmlYzkurrmlbDnm67np43nsbvvvIzojrflvpfnmoTph5HluIHmlbDnm64gXCIpXHJcbiAgICAgICAgaWYgKHN1Y2MpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVXaW5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhcmVCdXR0b25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMubmV4dExldmVsU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLmdhbWVMb3NzSWNvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnJldHJ5R2FtZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5zYXZlTGlmZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW5lbXlUeXBlTWFwID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdLmVuZW15Q291bnQgKz0gMTsgLy/mraTnsbvmlYzkurrnmoTmgLvmlbBcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0ud2luR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Q291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luR29sZENvdW50OiBkYXRhW2ldLmRyb3BHb2xkQ291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGxHb2xkQ291bnQgKz0gZGF0YVtpXS5kcm9wR29sZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IHR5cGUgbWFwXCIsIGVuZW15VHlwZU1hcCk7XHJcbiAgICAgICAgLy8gbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGVuZW15VHlwZU1hcCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgb2JqID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVJlc3VsdE5vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgbGV0IGljb25TdHIgPSBnYW1lQ29uZmlnW2ldLkljb25TcHJpdGVGcmFtZU5hbWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0obm9kZSwgaW5kZXgsIGljb25TdHIsIG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSk7XHJcbiAgICAgICAgLy8gICAgIGluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZW5lbXlUeXBlTWFwKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZW5lbXlUeXBlTWFwW2ldO1xyXG4gICAgICAgICAgICBkYXRhLmtleSA9IGk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0XCIsIGxpc3QpO1xyXG4gICAgICAgIGxpc3QgPSBsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIud2luR29sZENvdW50IC0gYS53aW5Hb2xkQ291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKGxpc3QsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsZXnpLrnu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dTdW1SZXN1bHQoYWxsRW5lbXlDb3VudCwgYWxsR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93U3VtUmVzdWx0KGVuZW15Q291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvL+aYvuekuuacgOWQjueahOaAu+WQiFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnb2xkQ291bnQgKyAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpIHtcclxuICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgIC8vICAgICAgICAgY2IoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBsaXN0ID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICAgICAgLy8gbGV0IG9iaktleSA9IGxpc3RbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGxpc3QubGVuZ3RoIC0gMSkpXTtcclxuICAgICAgICAvLyBsZXQgb2JqID0gZGF0YVtvYmpLZXldO1xyXG4gICAgICAgIC8vIGRlbGV0ZSBkYXRhW29iaktleV07XHJcbiAgICAgICAgbGV0IGNlbGxEYXRhID0gZGF0YS5wb3AoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgLy8gbGV0IGljb25TdHIgPSB0aGlzLmdhbWVDb25maWdbb2JqS2V5XS5JY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5zZXREYXRhKG9ialsnY291bnQnXSwgb2JqWyd3aW5Hb2xkQ291bnQnXSwgaWNvblN0cik7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoR2FtZVJlc3VsdEdvbGRDZWxsKS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGNlbGxEYXRhKTtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgdGhpcy5ub2RlTGlzdC5sZW5ndGggKiAtMTAwIC0gNTAsIDApO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdE5vZGUuaGVpZ2h0ID0gbm9kZS5wb3NpdGlvbi55ICogLTEgKyA2MDtcclxuICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgdHcuZGVsYXkoMC40KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShkYXRhLCBjYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgIC8vICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmuLjmiI/nu5PmnpxcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVSZXN1bHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v546p5a6254K55Ye75LqG5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJDbGlja1NoYXJlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW50ZXJOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuobvvIzph43mlrDlvIDlp4vmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrUmV0cnlCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUmVzdWx0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlci5wbGF5ZXJDbGlja05leHRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckNsaWNrU2F2ZUxpZmVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgLy/njqnlrrbngrnkuobnq4vljbPlpI3mtLvmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd0NlbGxFbnRlckFuaW0obm9kZTogTm9kZSwgaW5kZXg6IG51bWJlcixpY29uU3RyOiBzdHJpbmcsIGNvdW50OiBudW1iZXIsIGdvbGRDb3VudDogbnVtYmVyICkge1xyXG4gICAgLy8gICAgIC8v5bGV56S65LiA5Liq6IqC54K555qE6L+b5YWl5Yqo55S7ICAgIFxyXG4gICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YSggY291bnQsIGdvbGRDb3VudCwgaWNvblN0cik7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==