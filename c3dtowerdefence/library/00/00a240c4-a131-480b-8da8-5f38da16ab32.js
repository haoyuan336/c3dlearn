System.register(["cc", "code-quality:cr", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, LabelComponent, loader, SpriteFrame, SpriteComponent, BaseObject, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GameResultGoldCell;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../../BaseObject", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "00a24DEoTFIC42oXzjaFqsy", "GameResultGoldCell", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameResultGoldCell", GameResultGoldCell = (_dec = ccclass('GameResultGoldCell'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(GameResultGoldCell, _ref);

        function GameResultGoldCell() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameResultGoldCell);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameResultGoldCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyIconNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyCountLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winGoldCountLabel", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameResultGoldCell, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(gameController, data) {
            var _this2 = this;

            // super.init()
            var gameConfig = gameController.getGameConfig().json;
            var type = data['key'];

            _get(_getPrototypeOf(GameResultGoldCell.prototype), "init", this).call(this, gameConfig, gameController, null, null, type);

            var iconStr = this.getIconSprteFrame();
            this.enemyCountLabel.getComponent(LabelComponent).string = data["enemyCount"] + '';
            this.winGoldCountLabel.getComponent(LabelComponent).string = data["winGoldCount"] + ''; // console.log("icon str", iconStr);

            loader.loadRes(iconStr + "/spriteFrame", SpriteFrame, function (err, result) {
              // console.log("err", err)
              // console.log("result", result);
              if (!err) {
                _this2.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
              }
            });
          }
        }, {
          key: "setData",
          value: function setData(enemyCount, winGoldCount, iconStr) {
            var _this3 = this;

            this.enemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
            this.winGoldCountLabel.getComponent(LabelComponent).string = winGoldCount + ''; // console.log("icon str", iconStr);

            loader.loadRes(iconStr + "/spriteFrame", SpriteFrame, function (err, result) {
              // console.log("err", err)
              // console.log("result", result);
              if (!err) {
                _this3.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GameResultGoldCell;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyIconNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyCountLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winGoldCountLabel", [_dec4], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVSZXN1bHRHb2xkQ2VsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsIkxhYmVsQ29tcG9uZW50IiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVJlc3VsdEdvbGRDZWxsIiwidHlwZSIsImdhbWVDb250cm9sbGVyIiwiZGF0YSIsImdhbWVDb25maWciLCJnZXRHYW1lQ29uZmlnIiwianNvbiIsImljb25TdHIiLCJnZXRJY29uU3BydGVGcmFtZSIsImVuZW15Q291bnRMYWJlbCIsImdldENvbXBvbmVudCIsInN0cmluZyIsIndpbkdvbGRDb3VudExhYmVsIiwibG9hZFJlcyIsImVyciIsInJlc3VsdCIsImVuZW15SWNvbk5vZGUiLCJzcHJpdGVGcmFtZSIsImVuZW15Q291bnQiLCJ3aW5Hb2xkQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7Ozs7QUFDbEVDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztvQ0FHSkMsa0IsV0FEWkYsT0FBTyxDQUFDLG9CQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVQ7QUFBUixPQUFELEMsVUFHUk8sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVQ7QUFBUixPQUFELEMsVUFFUk8sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVQ7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFRCxDQUNKO0FBQ0g7OzsrQkFDSVUsYyxFQUFnQ0MsSSxFQUFhO0FBQUE7O0FBQzlDO0FBQ0EsZ0JBQUlDLFVBQVUsR0FBR0YsY0FBYyxDQUFDRyxhQUFmLEdBQStCQyxJQUFoRDtBQUNBLGdCQUFJTCxJQUFJLEdBQUlFLElBQUksQ0FBQyxLQUFELENBQWhCOztBQUNBLHlGQUFXQyxVQUFYLEVBQXVCRixjQUF2QixFQUF1QyxJQUF2QyxFQUE0QyxJQUE1QyxFQUFpREQsSUFBakQ7O0FBQ0EsZ0JBQUlNLE9BQU8sR0FBRyxLQUFLQyxpQkFBTCxFQUFkO0FBQ0EsaUJBQUtDLGVBQUwsQ0FBcUJDLFlBQXJCLENBQWtDakIsY0FBbEMsRUFBa0RrQixNQUFsRCxHQUEyRFIsSUFBSSxDQUFDLFlBQUQsQ0FBSixHQUFxQixFQUFoRjtBQUNBLGlCQUFLUyxpQkFBTCxDQUF1QkYsWUFBdkIsQ0FBb0NqQixjQUFwQyxFQUFvRGtCLE1BQXBELEdBQTZEUixJQUFJLENBQUMsY0FBRCxDQUFKLEdBQXVCLEVBQXBGLENBUDhDLENBUTlDOztBQUVBVCxZQUFBQSxNQUFNLENBQUNtQixPQUFQLENBQWVOLE9BQU8sR0FBRyxjQUF6QixFQUF3Q1osV0FBeEMsRUFBcUQsVUFBQ21CLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsRTtBQUNBO0FBQ0Esa0JBQUksQ0FBQ0QsR0FBTCxFQUFTO0FBQ0wsZ0JBQUEsTUFBSSxDQUFDRSxhQUFMLENBQW1CTixZQUFuQixDQUFnQ2QsZUFBaEMsRUFBaURxQixXQUFqRCxHQUErREYsTUFBL0Q7QUFDSDtBQUNKLGFBTkQ7QUFPSDs7O2tDQUNPRyxVLEVBQW9CQyxZLEVBQXNCWixPLEVBQWlCO0FBQUE7O0FBQy9ELGlCQUFLRSxlQUFMLENBQXFCQyxZQUFyQixDQUFrQ2pCLGNBQWxDLEVBQWtEa0IsTUFBbEQsR0FBMkRPLFVBQVUsR0FBRyxFQUF4RTtBQUNBLGlCQUFLTixpQkFBTCxDQUF1QkYsWUFBdkIsQ0FBb0NqQixjQUFwQyxFQUFvRGtCLE1BQXBELEdBQTZEUSxZQUFZLEdBQUcsRUFBNUUsQ0FGK0QsQ0FHL0Q7O0FBRUF6QixZQUFBQSxNQUFNLENBQUNtQixPQUFQLENBQWVOLE9BQU8sR0FBRyxjQUF6QixFQUF3Q1osV0FBeEMsRUFBcUQsVUFBQ21CLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsRTtBQUNBO0FBQ0Esa0JBQUksQ0FBQ0QsR0FBTCxFQUFTO0FBQ0wsZ0JBQUEsTUFBSSxDQUFDRSxhQUFMLENBQW1CTixZQUFuQixDQUFnQ2QsZUFBaEMsRUFBaURxQixXQUFqRCxHQUErREYsTUFBL0Q7QUFDSDtBQUNKLGFBTkQ7QUFPSCxXLENBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBM0M2QixJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBRUUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lUmVzdWx0R29sZENlbGwnKVxyXG5leHBvcnQgY2xhc3MgR2FtZVJlc3VsdEdvbGRDZWxsIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUNvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHdpbkdvbGRDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIGRhdGE6IE9iamVjdCl7XHJcbiAgICAgICAgLy8gc3VwZXIuaW5pdCgpXHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSBnYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgICAgICBsZXQgdHlwZSA9ICBkYXRhWydrZXknXTtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyLCBudWxsLG51bGwsdHlwZSk7XHJcbiAgICAgICAgbGV0IGljb25TdHIgPSB0aGlzLmdldEljb25TcHJ0ZUZyYW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbmVteUNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBkYXRhW1wiZW5lbXlDb3VudFwiXSArICcnO1xyXG4gICAgICAgIHRoaXMud2luR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBkYXRhW1wid2luR29sZENvdW50XCJdICsgJyc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpY29uIHN0clwiLCBpY29uU3RyKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhpY29uU3RyICsgXCIvc3ByaXRlRnJhbWVcIixTcHJpdGVGcmFtZSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGVuZW15Q291bnQ6IG51bWJlciwgd2luR29sZENvdW50OiBudW1iZXIsIGljb25TdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgIHRoaXMud2luR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB3aW5Hb2xkQ291bnQgKyAnJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImljb24gc3RyXCIsIGljb25TdHIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKGljb25TdHIgKyBcIi9zcHJpdGVGcmFtZVwiLFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAoIWVycil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==