System.register(["cc", "code-quality:cr", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, LabelComponent, loader, SpriteFrame, SpriteComponent, isValid, BaseObject, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GameResultGoldCell;

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
      isValid = _cc.isValid;
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
              if (!err && isValid(_this2.enemyIconNode)) {
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
              if (!err && isValid(_this3.enemyIconNode)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVSZXN1bHRHb2xkQ2VsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsIkxhYmVsQ29tcG9uZW50IiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJpc1ZhbGlkIiwiQmFzZU9iamVjdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVSZXN1bHRHb2xkQ2VsbCIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsImRhdGEiLCJnYW1lQ29uZmlnIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJpY29uU3RyIiwiZ2V0SWNvblNwcnRlRnJhbWUiLCJlbmVteUNvdW50TGFiZWwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ3aW5Hb2xkQ291bnRMYWJlbCIsImxvYWRSZXMiLCJlcnIiLCJyZXN1bHQiLCJlbmVteUljb25Ob2RlIiwic3ByaXRlRnJhbWUiLCJlbmVteUNvdW50Iiwid2luR29sZENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxPLE9BQUFBLE87Ozs7QUFDbkZDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROztvQ0FHSkMsa0IsV0FEWkYsT0FBTyxDQUFDLG9CQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFHUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFFUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFRCxDQUNKO0FBQ0g7OzsrQkFDSVcsYyxFQUFnQ0MsSSxFQUFhO0FBQUE7O0FBQzlDO0FBQ0EsZ0JBQUlDLFVBQVUsR0FBR0YsY0FBYyxDQUFDRyxhQUFmLEdBQStCQyxJQUFoRDtBQUNBLGdCQUFJTCxJQUFJLEdBQUlFLElBQUksQ0FBQyxLQUFELENBQWhCOztBQUNBLHlGQUFXQyxVQUFYLEVBQXVCRixjQUF2QixFQUF1QyxJQUF2QyxFQUE0QyxJQUE1QyxFQUFpREQsSUFBakQ7O0FBQ0EsZ0JBQUlNLE9BQU8sR0FBRyxLQUFLQyxpQkFBTCxFQUFkO0FBQ0EsaUJBQUtDLGVBQUwsQ0FBcUJDLFlBQXJCLENBQWtDbEIsY0FBbEMsRUFBa0RtQixNQUFsRCxHQUEyRFIsSUFBSSxDQUFDLFlBQUQsQ0FBSixHQUFxQixFQUFoRjtBQUNBLGlCQUFLUyxpQkFBTCxDQUF1QkYsWUFBdkIsQ0FBb0NsQixjQUFwQyxFQUFvRG1CLE1BQXBELEdBQTZEUixJQUFJLENBQUMsY0FBRCxDQUFKLEdBQXVCLEVBQXBGLENBUDhDLENBUTlDOztBQUVBVixZQUFBQSxNQUFNLENBQUNvQixPQUFQLENBQWVOLE9BQU8sR0FBRyxjQUF6QixFQUF3Q2IsV0FBeEMsRUFBcUQsVUFBQ29CLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsRTtBQUNBO0FBQ0Esa0JBQUksQ0FBQ0QsR0FBRCxJQUFRbEIsT0FBTyxDQUFDLE1BQUksQ0FBQ29CLGFBQU4sQ0FBbkIsRUFBd0M7QUFDcEMsZ0JBQUEsTUFBSSxDQUFDQSxhQUFMLENBQW1CTixZQUFuQixDQUFnQ2YsZUFBaEMsRUFBaURzQixXQUFqRCxHQUErREYsTUFBL0Q7QUFDSDtBQUNKLGFBTkQ7QUFPSDs7O2tDQUNPRyxVLEVBQW9CQyxZLEVBQXNCWixPLEVBQWlCO0FBQUE7O0FBQy9ELGlCQUFLRSxlQUFMLENBQXFCQyxZQUFyQixDQUFrQ2xCLGNBQWxDLEVBQWtEbUIsTUFBbEQsR0FBMkRPLFVBQVUsR0FBRyxFQUF4RTtBQUNBLGlCQUFLTixpQkFBTCxDQUF1QkYsWUFBdkIsQ0FBb0NsQixjQUFwQyxFQUFvRG1CLE1BQXBELEdBQTZEUSxZQUFZLEdBQUcsRUFBNUUsQ0FGK0QsQ0FHL0Q7O0FBRUExQixZQUFBQSxNQUFNLENBQUNvQixPQUFQLENBQWVOLE9BQU8sR0FBRyxjQUF6QixFQUF3Q2IsV0FBeEMsRUFBcUQsVUFBQ29CLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsRTtBQUNBO0FBQ0Esa0JBQUksQ0FBQ0QsR0FBRCxJQUFRbEIsT0FBTyxDQUFDLE1BQUksQ0FBQ29CLGFBQU4sQ0FBbkIsRUFBd0M7QUFDcEMsZ0JBQUEsTUFBSSxDQUFDQSxhQUFMLENBQW1CTixZQUFuQixDQUFnQ2YsZUFBaEMsRUFBaURzQixXQUFqRCxHQUErREYsTUFBL0Q7QUFDSDtBQUNKLGFBTkQ7QUFPSCxXLENBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBM0M2QixJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBRUUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCAsaXNWYWxpZH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVSZXN1bHRHb2xkQ2VsbCcpXHJcbmV4cG9ydCBjbGFzcyBHYW1lUmVzdWx0R29sZENlbGwgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJY29uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15Q291bnRMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgd2luR29sZENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBpbml0KGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZGF0YTogT2JqZWN0KXtcclxuICAgICAgICAvLyBzdXBlci5pbml0KClcclxuICAgICAgICBsZXQgZ2FtZUNvbmZpZyA9IGdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgICAgIGxldCB0eXBlID0gIGRhdGFbJ2tleSddO1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIsIG51bGwsbnVsbCx0eXBlKTtcclxuICAgICAgICBsZXQgaWNvblN0ciA9IHRoaXMuZ2V0SWNvblNwcnRlRnJhbWUoKTtcclxuICAgICAgICB0aGlzLmVuZW15Q291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGRhdGFbXCJlbmVteUNvdW50XCJdICsgJyc7XHJcbiAgICAgICAgdGhpcy53aW5Hb2xkQ291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGRhdGFbXCJ3aW5Hb2xkQ291bnRcIl0gKyAnJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImljb24gc3RyXCIsIGljb25TdHIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKGljb25TdHIgKyBcIi9zcHJpdGVGcmFtZVwiLFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAoIWVyciAmJiBpc1ZhbGlkKHRoaXMuZW5lbXlJY29uTm9kZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGVuZW15Q291bnQ6IG51bWJlciwgd2luR29sZENvdW50OiBudW1iZXIsIGljb25TdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW5lbXlDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5lbXlDb3VudCArICcnO1xyXG4gICAgICAgIHRoaXMud2luR29sZENvdW50TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB3aW5Hb2xkQ291bnQgKyAnJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImljb24gc3RyXCIsIGljb25TdHIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKGljb25TdHIgKyBcIi9zcHJpdGVGcmFtZVwiLFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAoIWVyciAmJiBpc1ZhbGlkKHRoaXMuZW5lbXlJY29uTm9kZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=