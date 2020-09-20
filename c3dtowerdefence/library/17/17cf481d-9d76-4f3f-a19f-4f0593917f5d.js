System.register(["cc", "code-quality:cr", "../BaseObject.js", "../GameController.js", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, v3, BaseObject, GameController, State, _dec, _class, _temp, _crd, ccclass, property, EnemyBullet;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../util/State", _context.meta, extras);
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
      v3 = _cc.v3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "17cf4gdnXZPP6GfTwWTkX9d", "EnemyBullet", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyBullet", EnemyBullet = (_dec = ccclass('EnemyBullet'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(EnemyBullet, _ref);

        function EnemyBullet() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyBullet);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyBullet)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).accY;
          _this.currentSpeed = 0;
          _this.endPos = null;
          return _this;
        }

        _createClass(EnemyBullet, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(gameConfig, gameCtl, endPos) {
            _get(_getPrototypeOf(EnemyBullet.prototype), "init", this).call(this, gameConfig, gameCtl);

            this.endPos = endPos;
            this.state.setState("run");
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.state.getState() === "run") {
              //如果游戏的状态是run ，那么鸡蛋做自由落体运动
              this.currentSpeed += this.accY; // this.node.position.add(v3(0,this.currentSpeed * deltaTime,0))

              this.node.position = v3(this.node.position).add(v3(0, this.currentSpeed * deltaTime, 0));
              var dis = this.node.position.y - this.endPos.y;

              if (dis < 1) {
                console.log("停止");
                this.state.setState("move-end");
              }
            }
          }
        }]);

        return EnemyBullet;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCdWxsZXQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsInYzIiwiQmFzZU9iamVjdCIsIkdhbWVDb250cm9sbGVyIiwiU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJ1bGxldCIsInN0YXRlIiwiYWNjWSIsImN1cnJlbnRTcGVlZCIsImVuZFBvcyIsImdhbWVDb25maWciLCJnYW1lQ3RsIiwic2V0U3RhdGUiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsIm5vZGUiLCJwb3NpdGlvbiIsImFkZCIsImRpcyIsInkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQW1DQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDbkNDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUlHLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ2ZDLEksR0FBZTtBQUFBO0FBQUEsZ0RBQWVBLEk7Z0JBQzlCQyxZLEdBQXVCLEM7Z0JBQ3ZCQyxNLEdBQWUsSTs7Ozs7O2tDQUNmLENBQ0o7QUFDSDs7OytCQUNJQyxVLEVBQVlDLE8sRUFBU0YsTSxFQUFjO0FBQ3BDLGtGQUFXQyxVQUFYLEVBQXVCQyxPQUF2Qjs7QUFDQSxpQkFBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV00sUUFBWCxDQUFvQixLQUFwQjtBQUNIOzs7aUNBR01DLFMsRUFBbUI7QUFDdEI7QUFDQSxnQkFBSSxLQUFLUCxLQUFMLENBQVdRLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakM7QUFDQSxtQkFBS04sWUFBTCxJQUFxQixLQUFLRCxJQUExQixDQUZpQyxDQUdqQzs7QUFDQSxtQkFBS1EsSUFBTCxDQUFVQyxRQUFWLEdBQXFCakIsRUFBRSxDQUFDLEtBQUtnQixJQUFMLENBQVVDLFFBQVgsQ0FBRixDQUF1QkMsR0FBdkIsQ0FBMkJsQixFQUFFLENBQUMsQ0FBRCxFQUFJLEtBQUtTLFlBQUwsR0FBb0JLLFNBQXhCLEVBQW1DLENBQW5DLENBQTdCLENBQXJCO0FBQ0Esa0JBQUlLLEdBQUcsR0FBRyxLQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJHLENBQW5CLEdBQXVCLEtBQUtWLE1BQUwsQ0FBWVUsQ0FBN0M7O0FBQ0Esa0JBQUlELEdBQUcsR0FBRyxDQUFWLEVBQVk7QUFDUkUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxxQkFBS2YsS0FBTCxDQUFXTSxRQUFYLENBQW9CLFVBQXBCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUJ1bGxldCcpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJ1bGxldCBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgYWNjWTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgIHByaXZhdGUgY3VycmVudFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBpbml0KGdhbWVDb25maWcsIGdhbWVDdGwsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUN0bCk7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09IFwicnVuXCIpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmuLjmiI/nmoTnirbmgIHmmK9ydW4g77yM6YKj5LmI6bih6JuL5YGa6Ieq55Sx6JC95L2T6L+Q5YqoXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkICs9IHRoaXMuYWNjWTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2MygwLHRoaXMuY3VycmVudFNwZWVkICogZGVsdGFUaW1lLDApKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZCh2MygwLCB0aGlzLmN1cnJlbnRTcGVlZCAqIGRlbHRhVGltZSwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSB0aGlzLmVuZFBvcy55O1xyXG4gICAgICAgICAgICBpZiAoZGlzIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWBnOatolwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJtb3ZlLWVuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=