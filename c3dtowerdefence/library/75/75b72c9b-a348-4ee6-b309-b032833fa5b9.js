System.register(["cc", "code-quality:cr", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, v2, BaseObject, _dec, _class, _temp, _crd, ccclass, property, GroundTiled;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
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
      v2 = _cc.v2;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "75b72ybo0hO5rMJsDKDP6W5", "GroundTiled", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GroundTiled", GroundTiled = (_dec = ccclass('GroundTiled'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(GroundTiled, _ref);

        function GroundTiled() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GroundTiled);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroundTiled)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.mapX = 0;
          _this.mapY = 0;
          _this.targetObjectList = [];
          return _this;
        }

        _createClass(GroundTiled, [{
          key: "getIsVoid",
          //物体上的物体列表
          value: function getIsVoid() {
            if (this.targetObjectList.length === 0) {
              return true;
            }

            return false;
          }
        }, {
          key: "setMapXY",
          value: function setMapXY(x, y) {
            //设置行列
            this.mapX = x;
            this.mapY = y;
          }
        }, {
          key: "getMapXY",
          value: function getMapXY() {
            return v2(this.mapX, this.mapY);
          }
        }, {
          key: "getTargetObjectList",
          value: function getTargetObjectList() {
            return this.targetObjectList;
          }
        }, {
          key: "setTargetObject",
          value: function setTargetObject(object) {
            //设置物体再当前的地图块上
            this.targetObjectList.push(object);
          }
        }]);

        return GroundTiled;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwidjIiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR3JvdW5kVGlsZWQiLCJtYXBYIiwibWFwWSIsInRhcmdldE9iamVjdExpc3QiLCJsZW5ndGgiLCJ4IiwieSIsIm9iamVjdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLEUsT0FBQUEsRTs7OztBQUM3QkMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFFR0csSSxHQUFlLEM7Z0JBQ2ZDLEksR0FBZSxDO2dCQUNmQyxnQixHQUFtQixFOzs7Ozs7QUFBSTtzQ0FFVDtBQUNqQixnQkFBSSxLQUFLQSxnQkFBTCxDQUFzQkMsTUFBdEIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDcEMscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDs7O21DQUNRQyxDLEVBQVdDLEMsRUFBVztBQUMzQjtBQUNBLGlCQUFLTCxJQUFMLEdBQVlJLENBQVo7QUFDQSxpQkFBS0gsSUFBTCxHQUFZSSxDQUFaO0FBQ0g7OztxQ0FDZ0I7QUFDYixtQkFBT1YsRUFBRSxDQUFDLEtBQUtLLElBQU4sRUFBWSxLQUFLQyxJQUFqQixDQUFUO0FBQ0g7OztnREFDNkI7QUFDMUIsbUJBQU8sS0FBS0MsZ0JBQVo7QUFDSDs7OzBDQUNlSSxNLEVBQWM7QUFDMUI7QUFDQSxpQkFBS0osZ0JBQUwsQ0FBc0JLLElBQXRCLENBQTJCRCxNQUEzQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MiwgVmVjMiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dyb3VuZFRpbGVkJylcclxuZXhwb3J0IGNsYXNzIEdyb3VuZFRpbGVkIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgbWFwWDogbnVtYmVyID0gMDsgLy/liJflnZDmoIdcclxuICAgIHB1YmxpYyBtYXBZOiBudW1iZXIgPSAwOyAvL+ihjOWdkOagh1xyXG4gICAgcHVibGljIHRhcmdldE9iamVjdExpc3QgPSBbXTsgLy/niankvZPkuIrnmoTniankvZPliJfooahcclxuXHJcbiAgICBnZXRJc1ZvaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0T2JqZWN0TGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldE1hcFhZKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/orr7nva7ooYzliJdcclxuICAgICAgICB0aGlzLm1hcFggPSB4O1xyXG4gICAgICAgIHRoaXMubWFwWSA9IHk7XHJcbiAgICB9XHJcbiAgICBnZXRNYXBYWSgpOiBWZWMyIHtcclxuICAgICAgICByZXR1cm4gdjIodGhpcy5tYXBYLCB0aGlzLm1hcFkpO1xyXG4gICAgfVxyXG4gICAgZ2V0VGFyZ2V0T2JqZWN0TGlzdCgpOiBOb2RlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldE9iamVjdExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZXRUYXJnZXRPYmplY3Qob2JqZWN0OiBOb2RlKSB7XHJcbiAgICAgICAgLy/orr7nva7niankvZPlho3lvZPliY3nmoTlnLDlm77lnZfkuIpcclxuICAgICAgICB0aGlzLnRhcmdldE9iamVjdExpc3QucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==