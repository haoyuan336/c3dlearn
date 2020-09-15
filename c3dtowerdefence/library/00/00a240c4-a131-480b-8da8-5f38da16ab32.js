System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, LabelComponent, loader, SpriteFrame, SpriteComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GameResultGoldCell;

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
      Component = _cc.Component;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameResultGoldCell, _Component);

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
          key: "setData",
          value: function setData(enemyCount, winGoldCount, iconStr) {
            var _this2 = this;

            this.enemyCountLabel.getComponent(LabelComponent).string = enemyCount + '';
            this.winGoldCountLabel.getComponent(LabelComponent).string = winGoldCount + '';
            console.log("icon str", iconStr);
            loader.loadRes(iconStr + "/spriteFrame", SpriteFrame, function (err, result) {
              console.log("err", err);
              console.log("result", result);

              if (!err) {
                _this2.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GameResultGoldCell;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyIconNode", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9HYW1lV2luL0dhbWVSZXN1bHRHb2xkQ2VsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkxhYmVsQ29tcG9uZW50IiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lUmVzdWx0R29sZENlbGwiLCJ0eXBlIiwiZW5lbXlDb3VudCIsIndpbkdvbGRDb3VudCIsImljb25TdHIiLCJlbmVteUNvdW50TGFiZWwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ3aW5Hb2xkQ291bnRMYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkUmVzIiwiZXJyIiwicmVzdWx0IiwiZW5lbXlJY29uTm9kZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTs7Ozs7O0FBQ25FQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztvQ0FHSkMsa0IsV0FEWkYsT0FBTyxDQUFDLG9CQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFHUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFFUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFRCxDQUNKO0FBQ0g7OztrQ0FDT1MsVSxFQUFvQkMsWSxFQUFzQkMsTyxFQUFpQjtBQUFBOztBQUMvRCxpQkFBS0MsZUFBTCxDQUFxQkMsWUFBckIsQ0FBa0NaLGNBQWxDLEVBQWtEYSxNQUFsRCxHQUEyREwsVUFBVSxHQUFHLEVBQXhFO0FBQ0EsaUJBQUtNLGlCQUFMLENBQXVCRixZQUF2QixDQUFvQ1osY0FBcEMsRUFBb0RhLE1BQXBELEdBQTZESixZQUFZLEdBQUcsRUFBNUU7QUFDQU0sWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3Qk4sT0FBeEI7QUFFQVQsWUFBQUEsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlUCxPQUFPLEdBQUcsY0FBekIsRUFBd0NSLFdBQXhDLEVBQXFELFVBQUNnQixHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDbEVKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJFLEdBQW5CO0FBQ0FILGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JHLE1BQXRCOztBQUNBLGtCQUFJLENBQUNELEdBQUwsRUFBUztBQUNMLGdCQUFBLE1BQUksQ0FBQ0UsYUFBTCxDQUFtQlIsWUFBbkIsQ0FBZ0NULGVBQWhDLEVBQWlEa0IsV0FBakQsR0FBK0RGLE1BQS9EO0FBQ0g7QUFDSixhQU5EO0FBT0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUE1Qm9DckIsUzs7Ozs7aUJBR1AsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUVFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBsb2FkZXIsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZVJlc3VsdEdvbGRDZWxsJylcclxuZXhwb3J0IGNsYXNzIEdhbWVSZXN1bHRHb2xkQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUNvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHdpbkdvbGRDb3VudExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgc2V0RGF0YShlbmVteUNvdW50OiBudW1iZXIsIHdpbkdvbGRDb3VudDogbnVtYmVyLCBpY29uU3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVuZW15Q291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGVuZW15Q291bnQgKyAnJztcclxuICAgICAgICB0aGlzLndpbkdvbGRDb3VudExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gd2luR29sZENvdW50ICsgJyc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpY29uIHN0clwiLCBpY29uU3RyKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhpY29uU3RyICsgXCIvc3ByaXRlRnJhbWVcIixTcHJpdGVGcmFtZSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=