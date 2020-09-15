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
          return _this;
        }

        _createClass(GameWinPrefab, [{
          key: "start",
          value: function start() {}
        }, {
          key: "setGameResult",
          value: function setGameResult(succ, data, gameConfig) {
            var _this2 = this;

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
            switch (customData) {
              case 'left-button':
                console.log("分享游戏结果");
                break;

              case 'right-button':
                if (this.gameResultState) {
                  //如果是胜利的话，那么玩家点击的就是下一关游戏的按钮
                  console.log("进入下一关");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVXaW5QcmVmYWIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwidjMiLCJUd2VlbiIsIkxhYmVsQ29tcG9uZW50IiwiR2FtZVJlc3VsdEdvbGRDZWxsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVdpblByZWZhYiIsInR5cGUiLCJnYW1lQ29uZmlnIiwiZ2FtZVJlc3VsdFN0YXRlIiwic3VjYyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWxsRW5lbXlDb3VudCIsImxlbmd0aCIsImFsbEdvbGRDb3VudCIsImdhbWVSZXN1bHRJY29uTm9kZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwiZ2FtZVdpbkljb25TcHJpdGVGcmFtZSIsImxlZnRCdXR0b24iLCJzaGFyZUJ1dHRvblNwcml0ZUZyYW1lIiwicmlnaHRCdXR0b24iLCJuZXh0TGV2ZWxTcHJpdGVGcmFtZSIsImdhbWVMb3NzSWNvblNwcml0ZUZyYW1lIiwicmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWUiLCJzYXZlTGlmZUJ1dHRvblNwcml0ZUZyYW1lIiwiZW5lbXlUeXBlTWFwIiwiaSIsImVuZW15VHlwZSIsImNvdW50Iiwid2luR29sZENvdW50IiwiZHJvcEdvbGRDb3VudCIsInNob3dDZWxsRW50ZXJBbmltIiwic2hvd1N1bVJlc3VsdCIsImVuZW15Q291bnQiLCJnb2xkQ291bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN1bU5vZGUiLCJhY3RpdmUiLCJ0b3RhbEVuZW15Q291bnRMYWJlbCIsInN0cmluZyIsInRvdGFsR29sZENvdW50TGFiZWwiLCJjYiIsIk9iamVjdCIsImtleXMiLCJsaXN0Iiwib2JqS2V5IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib2JqIiwibm9kZSIsIndpbkdvbGRDZWxsUHJlZmFiIiwicGFyZW50IiwiZ2FtZVJlc3VsdE5vZGUiLCJ0dyIsImljb25TdHIiLCJJY29uU3ByaXRlRnJhbWVOYW1lIiwic2V0RGF0YSIsImRlbGF5IiwiYnkiLCJwb3NpdGlvbiIsImNhbGwiLCJzdGFydCIsImV2ZW50IiwiY3VzdG9tRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGMsT0FBQUEsYzs7OztBQUUzRkMsTUFBQUEsa0IseUJBQUFBLGtCOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUVSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUlSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQUVSUSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQUVSUSxRQUFR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WUFBTTtBQUNWLGNBQUEsTUFBSSxDQUFDaEMsaUJBQUwsQ0FBdUJ2QixJQUF2QixFQUE2Qm1DLEVBQTdCO0FBQ0gsYUFGRDtBQUdBYSxZQUFBQSxFQUFFLENBQUNRLEtBQUg7QUFDSDs7O3dDQUNhQyxLLEVBQU9DLFUsRUFBWTtBQUM3QixvQkFBUUEsVUFBUjtBQUNJLG1CQUFLLGFBQUw7QUFDSXpELGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0E7O0FBQ0osbUJBQUssY0FBTDtBQUNJLG9CQUFJLEtBQUtKLGVBQVQsRUFBeUI7QUFDckI7QUFDQUcsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBWFI7QUFhSCxXLENBQ0Q7QUFDQTtBQUNBO0FBRUE7Ozs7O1FBL0krQm5CLFM7Ozs7O2lCQUVILEk7Ozs7Ozs7aUJBRUYsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUlzQixJOzs7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBRUYsSTs7Ozs7OztpQkFFSyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBRUMsSTs7Ozs7OztpQkFHWixJOzs7Ozs7O2lCQUdKLEk7Ozs7Ozs7aUJBR1AsSTs7Ozs7OztpQkFFYSxJOzs7Ozs7O2lCQUVELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgaW5zdGFudGlhdGUsIHYzLCBUd2VlbiwgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IERlYWRFbmVteU9iaiB9IGZyb20gJy4uLy4uL0VuZW15Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdhbWVSZXN1bHRHb2xkQ2VsbCB9IGZyb20gJy4vR2FtZVJlc3VsdEdvbGRDZWxsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lV2luUHJlZmFiJylcclxuZXhwb3J0IGNsYXNzIEdhbWVXaW5QcmVmYWIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICB3aW5Hb2xkQ2VsbFByZWZhYjogUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGxlZnRCdXR0b246IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHJpZ2h0QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyByZXRyeUdhbWVCdXR0b25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+mHjeaWsOW8gOWni+aMiemSrueyvueBteW4p1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBzaGFyZUJ1dHRvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5YiG5Lqr5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIG5leHRMZXZlbFNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5LiL5LiA5YWz5oyJ6ZKu57K+54G15binXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIHNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDsgLy8g56uL5Y2z5aSN5rS75oyJ6ZKu57K+54G15binXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBnYW1lV2luSWNvblNwcml0ZUZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7IC8v5ri45oiP6IOc5YipaWNvblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyBnYW1lTG9zc0ljb25TcHJpdGVGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsOyAvL+a4uOaIj+Wksei0pWljb25cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVJlc3VsdEljb25Ob2RlOiBOb2RlID0gbnVsbDsgLy/muLjmiI/nu5PmnpzoioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZVJlc3VsdE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdW1Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB0b3RhbEVuZW15Q291bnRMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG90YWxHb2xkQ291bnRMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVSZXN1bHRTdGF0ZTogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRHYW1lUmVzdWx0KHN1Y2M6IGJvb2xlYW4sIGRhdGE6IERlYWRFbmVteU9ialtdLCBnYW1lQ29uZmlnOiB7fSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdFN0YXRlID0gc3VjYztcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP54q25oCB5pe2XCIsIHN1Y2MpXHJcbiAgICAgICAgbGV0IGFsbEVuZW15Q291bnQgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgYWxsR29sZENvdW50ID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWFs+WNoeaJk+atu+eahOaVjOS6uuaVsOebruenjeexu++8jOiOt+W+l+eahOmHkeW4geaVsOebriBcIilcclxuICAgICAgICBpZiAoc3VjYykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVSZXN1bHRJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2FtZVdpbkljb25TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZUJ1dHRvblNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gdGhpcy5uZXh0TGV2ZWxTcHJpdGVGcmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVSZXN1bHRJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2FtZUxvc3NJY29uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHRoaXMucmV0cnlHYW1lQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24uZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSB0aGlzLnNhdmVMaWZlQnV0dG9uU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbmVteVR5cGVNYXAgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0uY291bnQgKz0gMTsgLy/mraTnsbvmlYzkurrnmoTmgLvmlbBcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZU1hcFtkYXRhW2ldLmVuZW15VHlwZV0ud2luR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGVNYXBbZGF0YVtpXS5lbmVteVR5cGVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbkdvbGRDb3VudDogZGF0YVtpXS5kcm9wR29sZENvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxsR29sZENvdW50ICs9IGRhdGFbaV0uZHJvcEdvbGRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSB0eXBlIG1hcFwiLCBlbmVteVR5cGVNYXApO1xyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSBpbiBlbmVteVR5cGVNYXApIHtcclxuICAgICAgICAvLyAgICAgbGV0IG9iaiA9IGVuZW15VHlwZU1hcFtpXTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLndpbkdvbGRDZWxsUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVSZXN1bHROb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBpY29uU3RyID0gZ2FtZUNvbmZpZ1tpXS5JY29uU3ByaXRlRnJhbWVOYW1lO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDZWxsRW50ZXJBbmltKG5vZGUsIGluZGV4LCBpY29uU3RyLCBvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10pO1xyXG4gICAgICAgIC8vICAgICBpbmRleCsrO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5zaG93Q2VsbEVudGVyQW5pbShlbmVteVR5cGVNYXAsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsZXnpLrnu5PmnZ9cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dTdW1SZXN1bHQoYWxsRW5lbXlDb3VudCwgYWxsR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93U3VtUmVzdWx0KGVuZW15Q291bnQ6IG51bWJlciwgZ29sZENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICAvL+aYvuekuuacgOWQjueahOaAu+WQiFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBnb2xkQ291bnQgKyAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgICAgICBsZXQgb2JqS2V5ID0gbGlzdFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobGlzdC5sZW5ndGggLSAxKSldO1xyXG4gICAgICAgIGxldCBvYmogPSBkYXRhW29iaktleV07XHJcbiAgICAgICAgZGVsZXRlIGRhdGFbb2JqS2V5XTtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMud2luR29sZENlbGxQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lUmVzdWx0Tm9kZTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgbGV0IGljb25TdHIgPSB0aGlzLmdhbWVDb25maWdbb2JqS2V5XS5JY29uU3ByaXRlRnJhbWVOYW1lO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVSZXN1bHRHb2xkQ2VsbCkuc2V0RGF0YShvYmpbJ2NvdW50J10sIG9ialsnd2luR29sZENvdW50J10sIGljb25TdHIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC41KVxyXG4gICAgICAgICAgICB0dy5ieSgwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA4MCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NlbGxFbnRlckFuaW0oZGF0YSwgY2IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmuLjmiI/nu5PmnpxcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodC1idXR0b24nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVJlc3VsdFN0YXRlKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+iDnOWIqeeahOivne+8jOmCo+S5iOeOqeWutueCueWHu+eahOWwseaYr+S4i+S4gOWFs+a4uOaIj+eahOaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5LiL5LiA5YWzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNob3dDZWxsRW50ZXJBbmltKG5vZGU6IE5vZGUsIGluZGV4OiBudW1iZXIsaWNvblN0cjogc3RyaW5nLCBjb3VudDogbnVtYmVyLCBnb2xkQ291bnQ6IG51bWJlciApIHtcclxuICAgIC8vICAgICAvL+WxleekuuS4gOS4quiKgueCueeahOi/m+WFpeWKqOeUuyAgICBcclxuICAgIC8vICAgICAvLyBub2RlLmdldENvbXBvbmVudChHYW1lUmVzdWx0R29sZENlbGwpLnNldERhdGEoIGNvdW50LCBnb2xkQ291bnQsIGljb25TdHIpO1xyXG5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=