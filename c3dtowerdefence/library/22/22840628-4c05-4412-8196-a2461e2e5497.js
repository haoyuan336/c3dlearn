System.register(["cc", "code-quality:cr", "../../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Tween, v3, State, _dec, _class, _temp, _crd, ccclass, property, MenuUIBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../util/State", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Tween = _cc.Tween;
      v3 = _cc.v3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "22840YoTAVEEoGWokYeLlSX", "MenuUIBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MenuUIBase", MenuUIBase = (_dec = ccclass('MenuUIBase'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MenuUIBase, _Component);

        function MenuUIBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MenuUIBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuUIBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.targetNode = null;
          return _this;
        }

        _createClass(MenuUIBase, [{
          key: "start",
          value: function start() {
            console.log('menu ui base');
            this.state.addState('open-ui', this.openUI.bind(this));
            this.state.addState('close-ui', this.closeUI.bind(this));
          }
        }, {
          key: "open",
          value: function open(target) {
            console.log("打开");
            this.targetNode = target;
            this.state.setState('open-ui');
          }
        }, {
          key: "close",
          value: function close() {
            this.state.setState("close-ui");
          }
        }, {
          key: "closeUI",
          value: function closeUI() {
            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(0, 0, 0)
            });
            tw.call(function () {// this.node.active = false;
            });
            tw.start();
          }
        }, {
          key: "openUI",
          value: function openUI() {
            console.log("open ui");
            this.node.active = true;
            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {});
            tw.start();
          }
        }]);

        return MenuUIBase;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L01lbnVVSUJhc2UudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlR3ZWVuIiwidjMiLCJTdGF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1lbnVVSUJhc2UiLCJzdGF0ZSIsInRhcmdldE5vZGUiLCJjb25zb2xlIiwibG9nIiwiYWRkU3RhdGUiLCJvcGVuVUkiLCJiaW5kIiwiY2xvc2VVSSIsInRhcmdldCIsInNldFN0YXRlIiwidHciLCJub2RlIiwidG8iLCJzY2FsZSIsImNhbGwiLCJzdGFydCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEssT0FBQUEsSztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDMUNDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUdHLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ1pDLFUsR0FBbUIsSTs7Ozs7O2tDQUNyQjtBQUNKQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixTQUFwQixFQUErQixLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBL0I7QUFDQSxpQkFBS04sS0FBTCxDQUFXSSxRQUFYLENBQW9CLFVBQXBCLEVBQWdDLEtBQUtHLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFoQztBQUNIOzs7K0JBRUlFLE0sRUFBWTtBQUNiTixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsaUJBQUtGLFVBQUwsR0FBa0JPLE1BQWxCO0FBQ0EsaUJBQUtSLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixTQUFwQjtBQUNIOzs7a0NBQ007QUFDSCxpQkFBS1QsS0FBTCxDQUFXUyxRQUFYLENBQW9CLFVBQXBCO0FBQ0g7OztvQ0FFa0I7QUFDZixnQkFBSUMsRUFBRSxHQUFHLElBQUloQixLQUFKLENBQVUsS0FBS2lCLElBQWYsQ0FBVDtBQUNBRCxZQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsY0FBQUEsS0FBSyxFQUFFbEIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFYLGFBQVg7QUFDQWUsWUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVEsWUFBTSxDQUNWO0FBQ0gsYUFGRDtBQUdBSixZQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSDs7O21DQUNnQjtBQUNiYixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsaUJBQUtRLElBQUwsQ0FBVUssTUFBVixHQUFtQixJQUFuQjtBQUNBLGdCQUFJTixFQUFFLEdBQUcsSUFBSWhCLEtBQUosQ0FBVSxLQUFLaUIsSUFBZixDQUFUO0FBQ0FELFlBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFQyxjQUFBQSxLQUFLLEVBQUVsQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVgsYUFBWDtBQUNBZSxZQUFBQSxFQUFFLENBQUNJLElBQUgsQ0FBUSxZQUFNLENBQ2IsQ0FERDtBQUVBSixZQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSDs7OztRQWxDMkJ0QixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUd2VlbiwgVmVjMywgdjMgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnTWVudVVJQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBNZW51VUlCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByb3RlY3RlZCB0YXJnZXROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZW51IHVpIGJhc2UnKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKCdvcGVuLXVpJywgdGhpcy5vcGVuVUkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZSgnY2xvc2UtdWknLCB0aGlzLmNsb3NlVUkuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvcGVuKHRhcmdldDpOb2RlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gFwiKTtcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnb3Blbi11aScpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAgY2xvc2VVSSgpIHtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvcGVuVUkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuIHVpXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSk7XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=