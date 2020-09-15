System.register(["cc", "code-quality:cr", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, v3, State, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, HomeIcon;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../util/State", _context.meta, extras);
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
      v3 = _cc.v3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "8213do7DSVI0IEO26O7s126", "HomeIcon", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HomeIcon", HomeIcon = (_dec = ccclass('HomeIcon'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(HomeIcon, _Component);

        function HomeIcon() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HomeIcon);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HomeIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "redHeartNode", _descriptor, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          return _this;
        }

        _createClass(HomeIcon, [{
          key: "start",
          value: function start() {
            // this.node.eulerAngles
            // let tw = new Tween(this.node);
            // tw.to(1, {eulerAngles: v3(0,360,0)})
            // tw.call(()=>{
            //     this.node.eulerAngles = v3(0,0,0);
            // })
            // tw.repeatForever()
            // tw.start();
            this.state.setState("run");
          }
        }, {
          key: "frozenHomeIcon",
          value: function frozenHomeIcon() {
            this.state.setState("frozen");
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.state.getState() === "run") {
              this.redHeartNode.eulerAngles = this.redHeartNode.eulerAngles.add(v3(0, 1, 0));
            }
          }
        }]);

        return HomeIcon;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "redHeartNode", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ib21lL0hvbWVJY29uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwidjMiLCJTdGF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkhvbWVJY29uIiwidHlwZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkdCIsImdldFN0YXRlIiwicmVkSGVhcnROb2RlIiwiZXVsZXJBbmdsZXMiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFhQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDcENDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVOO0FBQVAsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0RPLEssR0FBZTtBQUFBO0FBQUEsK0I7Ozs7OztrQ0FDZjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBS0EsS0FBTCxDQUFXQyxRQUFYLENBQW9CLEtBQXBCO0FBRUg7OzsyQ0FDZTtBQUNaLGlCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsUUFBcEI7QUFDSDs7O2lDQUNNQyxFLEVBQVk7QUFDZixnQkFBSSxLQUFLRixLQUFMLENBQVdHLFFBQVgsT0FBMEIsS0FBOUIsRUFBb0M7QUFDaEMsbUJBQUtDLFlBQUwsQ0FBa0JDLFdBQWxCLEdBQWdDLEtBQUtELFlBQUwsQ0FBa0JDLFdBQWxCLENBQThCQyxHQUE5QixDQUFrQ1osRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFwQyxDQUFoQztBQUNIO0FBQ0o7Ozs7UUF4QnlCRixTOzs7OztpQkFFRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUd2VlbiwgdjMgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnSG9tZUljb24nKVxyXG5leHBvcnQgY2xhc3MgSG9tZUljb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcclxuICAgIHB1YmxpYyByZWRIZWFydE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXNcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAvLyB0dy50bygxLCB7ZXVsZXJBbmdsZXM6IHYzKDAsMzYwLDApfSlcclxuICAgICAgICAvLyB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsMCwwKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuXHJcbiAgICB9XHJcbiAgICBmcm96ZW5Ib21lSWNvbigpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJmcm96ZW5cIik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09IFwicnVuXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlZEhlYXJ0Tm9kZS5ldWxlckFuZ2xlcyA9IHRoaXMucmVkSGVhcnROb2RlLmV1bGVyQW5nbGVzLmFkZCh2MygwLCAxLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19