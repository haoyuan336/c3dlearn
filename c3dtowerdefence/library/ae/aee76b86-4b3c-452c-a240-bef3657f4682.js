System.register(["cc", "code-quality:cr", "../util/My2Array.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, instantiate, v3, v2, UITransformComponent, SpriteComponent, Color, isValid, My2dArray, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AStartFindPath;

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

  function _reportPossibleCrUseOfMy2dArray(extras) {
    _reporterNs.report("My2dArray", "../util/My2Array", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      v2 = _cc.v2;
      UITransformComponent = _cc.UITransformComponent;
      SpriteComponent = _cc.SpriteComponent;
      Color = _cc.Color;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilMy2ArrayJs) {
      My2dArray = _utilMy2ArrayJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "aee76uGSzxFLKJAvvNlf0aC", "AStartFindPath", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AStartFindPath", AStartFindPath = (_dec = ccclass('AStartFindPath'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AStartFindPath, _Component);

        function AStartFindPath() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AStartFindPath);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AStartFindPath)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "pointNode", _descriptor, _assertThisInitialized(_this));

          _this.my2dArray = null;
          _this.obsColor = Color.RED;
          _this.startColor = Color.BLUE;
          _this.endColor = Color.GREEN;
          _this.currentTouchNode = null;
          return _this;
        }

        _createClass(AStartFindPath, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            // for (let i = 0 ; i < ){
            // }
            var size = 30;
            var my2dArray = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
              error: Error()
            }), My2dArray) : My2dArray)();
            this.my2dArray = my2dArray;

            for (var i = 0; i < size; i++) {
              var list = [];

              for (var j = 0; j < size; j++) {
                var node = instantiate(this.pointNode);
                node.active = true;
                node.parent = this.node;
                node.position = v3((size - 1) * -0.5 * 22 + j * 22, (size - 1) * -0.5 * 22 + i * 22, 0);
                list.push(node);
              }

              my2dArray.pushList(list);
            }

            for (var _i = 0; _i < 10; _i++) {
              this.randomObs(size);
            }

            var startNode = this.getRandomPoint(size);
            startNode.getComponent(SpriteComponent).color = this.startColor;
            this.node.on(Node.EventType.TOUCH_START, function (even) {
              if (isValid(_this2.currentTouchNode)) {
                _this2.currentTouchNode.getComponent(SpriteComponent).color = Color.WHITE;
              }

              var pos = even.getLocation();

              for (var _i2 = 0; _i2 < size; _i2++) {
                for (var _j = 0; _j < size; _j++) {
                  var _node = _this2.my2dArray.getValue(_j, _i2);

                  var boundingBox = _node.getComponent(UITransformComponent).getBoundingBoxToWorld(); // pos.x -= node.width;


                  boundingBox.x -= _node.width;

                  if (boundingBox.contains(pos)) {
                    // console.log(" j, i,", j, i);
                    _node.getComponent(SpriteComponent).color = _this2.endColor;
                    _this2.currentTouchNode = _node;
                  }
                }
              }
            });
          }
        }, {
          key: "getRandomPoint",
          value: function getRandomPoint(size) {
            var pos = v2(Math.round(Math.random() * (size - 1)), Math.round(Math.random() * (size - 1)));
            return this.my2dArray.getValue(pos.x, pos.y);
          }
        }, {
          key: "randomObs",
          value: function randomObs(size) {
            //随机一个障碍物
            var pos = {
              x: Math.round(Math.random() * size - 10) + 5,
              y: Math.round(Math.random() * size - 10) + 5
            };
            var dir = v2(0, 1);
            var angle = [Math.PI * 2 * 45 / 360, Math.PI * 0.5, Math.PI];
            dir.rotate(angle[Math.round(Math.random() * (angle.length - 1))]).normalize();
            console.log("dir", dir);
            dir.x = Math.round(Math.abs(dir.x)) * Math.abs(dir.x) / dir.x;
            dir.y = Math.round(Math.abs(dir.y)) * Math.abs(dir.y) / dir.y;
            console.log("dir", dir);

            for (var i = 0; i < 4; i++) {
              var addPos = v2(dir).multiplyScalar(i); // console.log('add pos', addPos);

              var endPos = v2(pos.x, pos.y).add(addPos); // console.log('endPos ', endPos);

              var node = this.my2dArray.getValue(endPos.x, endPos.y);

              if (node) {
                node.getComponent(SpriteComponent).color = Color.RED;
              }
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AStartFindPath;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9BU3RhcnRGaW5kUGF0aC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImluc3RhbnRpYXRlIiwidjMiLCJ2MiIsIlVJVHJhbnNmb3JtQ29tcG9uZW50IiwiU3ByaXRlQ29tcG9uZW50IiwiQ29sb3IiLCJpc1ZhbGlkIiwiTXkyZEFycmF5IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQVN0YXJ0RmluZFBhdGgiLCJ0eXBlIiwibXkyZEFycmF5Iiwib2JzQ29sb3IiLCJSRUQiLCJzdGFydENvbG9yIiwiQkxVRSIsImVuZENvbG9yIiwiR1JFRU4iLCJjdXJyZW50VG91Y2hOb2RlIiwic2l6ZSIsImkiLCJsaXN0IiwiaiIsIm5vZGUiLCJwb2ludE5vZGUiLCJhY3RpdmUiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInB1c2giLCJwdXNoTGlzdCIsInJhbmRvbU9icyIsInN0YXJ0Tm9kZSIsImdldFJhbmRvbVBvaW50IiwiZ2V0Q29tcG9uZW50IiwiY29sb3IiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbiIsIldISVRFIiwicG9zIiwiZ2V0TG9jYXRpb24iLCJnZXRWYWx1ZSIsImJvdW5kaW5nQm94IiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwieCIsIndpZHRoIiwiY29udGFpbnMiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJ5IiwiZGlyIiwiYW5nbGUiLCJQSSIsInJvdGF0ZSIsImxlbmd0aCIsIm5vcm1hbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJhYnMiLCJhZGRQb3MiLCJtdWx0aXBseVNjYWxhciIsImVuZFBvcyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxT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QUcsQ0FBQ0QsQ0FBYixDQUFYLElBQThCSCxJQUFJLENBQUNZLEdBQUwsQ0FBU1IsR0FBRyxDQUFDRCxDQUFiLENBQTlCLEdBQWdEQyxHQUFHLENBQUNELENBQTVEO0FBQ0FPLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJQLEdBQW5COztBQUVBLGlCQUFLLElBQUloQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLGtCQUFJeUMsTUFBTSxHQUFHNUQsRUFBRSxDQUFDbUQsR0FBRCxDQUFGLENBQVFVLGNBQVIsQ0FBdUIxQyxDQUF2QixDQUFiLENBRHdCLENBRXhCOztBQUNBLGtCQUFJMkMsTUFBTSxHQUFHOUQsRUFBRSxDQUFDdUMsR0FBRyxDQUFDSyxDQUFMLEVBQVFMLEdBQUcsQ0FBQ1csQ0FBWixDQUFGLENBQWlCYSxHQUFqQixDQUFxQkgsTUFBckIsQ0FBYixDQUh3QixDQUl4Qjs7QUFDQSxrQkFBSXRDLElBQUksR0FBRyxLQUFLWixTQUFMLENBQWUrQixRQUFmLENBQXdCcUIsTUFBTSxDQUFDbEIsQ0FBL0IsRUFBa0NrQixNQUFNLENBQUNaLENBQXpDLENBQVg7O0FBQ0Esa0JBQUk1QixJQUFKLEVBQVU7QUFDTkEsZ0JBQUFBLElBQUksQ0FBQ1UsWUFBTCxDQUFrQjlCLGVBQWxCLEVBQW1DK0IsS0FBbkMsR0FBMkM5QixLQUFLLENBQUNTLEdBQWpEO0FBQ0g7QUFDSjtBQUNKLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBckdnQ2hCLFM7Ozs7O2lCQUdQLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lLCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgdjIsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBTcHJpdGVDb21wb25lbnQsIENvbG9yLCBFdmVudFRvdWNoLCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4uL3V0aWwvTXkyQXJyYXknO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0FTdGFydEZpbmRQYXRoJylcclxuZXhwb3J0IGNsYXNzIEFTdGFydEZpbmRQYXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcG9pbnROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgbXkyZEFycmF5OiBNeTJkQXJyYXk8Tm9kZT4gPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IENvbG9yIH0pXHJcbiAgICBwdWJsaWMgb2JzQ29sb3I6IENvbG9yID0gQ29sb3IuUkVEO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IENvbG9yIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRDb2xvcjogQ29sb3IgPSBDb2xvci5CTFVFO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IENvbG9yIH0pXHJcbiAgICBwdWJsaWMgZW5kQ29sb3I6IENvbG9yID0gQ29sb3IuR1JFRU47XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRUb3VjaE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgKXtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBzaXplID0gMzA7XHJcbiAgICAgICAgbGV0IG15MmRBcnJheSA9IG5ldyBNeTJkQXJyYXk8Tm9kZT4oKTtcclxuICAgICAgICB0aGlzLm15MmRBcnJheSA9IG15MmRBcnJheTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnBvaW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2Mygoc2l6ZSAtIDEpICogLTAuNSAqIDIyICsgaiAqIDIyLCAoc2l6ZSAtIDEpICogLTAuNSAqIDIyICsgaSAqIDIyLCAwKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteTJkQXJyYXkucHVzaExpc3QobGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21PYnMoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdGFydE5vZGU6IE5vZGUgPSB0aGlzLmdldFJhbmRvbVBvaW50KHNpemUpO1xyXG4gICAgICAgIHN0YXJ0Tm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvciA9IHRoaXMuc3RhcnRDb2xvcjtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVuOiBFdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudFRvdWNoTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvciA9IENvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVuLmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTogTm9kZSA9IHRoaXMubXkyZEFycmF5LmdldFZhbHVlKGosIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IG5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwb3MueCAtPSBub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kaW5nQm94LnggLT0gbm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guY29udGFpbnMocG9zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiBqLCBpLFwiLCBqLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvciA9IHRoaXMuZW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb21Qb2ludChzaXplKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHYyKFxyXG4gICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoc2l6ZSAtIDEpKSxcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHNpemUgLSAxKSlcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXkyZEFycmF5LmdldFZhbHVlKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcbiAgICByYW5kb21PYnMoc2l6ZSkge1xyXG4gICAgICAgIC8v6ZqP5py65LiA5Liq6Zqc56KN54mpXHJcbiAgICAgICAgbGV0IHBvcyA9IHtcclxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc2l6ZSAtIDEwKSArIDUsXHJcbiAgICAgICAgICAgIHk6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNpemUgLSAxMCkgKyA1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkaXIgPSB2MigwLCAxKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSBbTWF0aC5QSSAqIDIgKiA0NSAvIDM2MCwgTWF0aC5QSSAqIDAuNSwgTWF0aC5QSV1cclxuICAgICAgICBkaXIucm90YXRlKGFuZ2xlW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhbmdsZS5sZW5ndGggLSAxKSldKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRpclwiLCBkaXIpO1xyXG4gICAgICAgIGRpci54ID0gTWF0aC5yb3VuZChNYXRoLmFicyhkaXIueCkpICogTWF0aC5hYnMoZGlyLngpIC8gZGlyLng7XHJcbiAgICAgICAgZGlyLnkgPSBNYXRoLnJvdW5kKE1hdGguYWJzKGRpci55KSkgKiBNYXRoLmFicyhkaXIueSkgLyBkaXIueTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRpclwiLCBkaXIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYWRkUG9zID0gdjIoZGlyKS5tdWx0aXBseVNjYWxhcihpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZCBwb3MnLCBhZGRQb3MpO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gdjIocG9zLngsIHBvcy55KS5hZGQoYWRkUG9zKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZFBvcyAnLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubXkyZEFycmF5LmdldFZhbHVlKGVuZFBvcy54LCBlbmRQb3MueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yID0gQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19