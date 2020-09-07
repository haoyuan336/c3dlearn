System.register(["cc", "code-quality:cr", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, CameraComponent, PhysicsSystem, find, GameController, _dec, _class, _temp, _crd, ccclass, property, TouchScreenLayer;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
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
      Node = _cc.Node;
      CameraComponent = _cc.CameraComponent;
      PhysicsSystem = _cc.PhysicsSystem;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5c5e3+MsMZDYpvgjM8gmHSO", "TouchScreenLayer", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TouchScreenLayer", TouchScreenLayer = (_dec = ccclass('TouchScreenLayer'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TouchScreenLayer, _Component);

        function TouchScreenLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TouchScreenLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchScreenLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.cameraNode = null;
          _this.gameCtl = null;
          return _this;
        }

        _createClass(TouchScreenLayer, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.cameraNode = find("Camera").getComponent(CameraComponent);
            this.gameCtl = find("GameController"); // Your initialization goes here.

            this.node.on(Node.EventType.TOUCH_END, function (event) {
              // console.log("touch start", event.getLocation());
              var touchPos = event.getLocation();

              var ray = _this2.cameraNode.getComponent(CameraComponent).screenPointToRay(touchPos.x, touchPos.y); // PhysicsRayResult.
              // PhysicsSystem.instance.raycastClosest(ray,0xffffff ,1000);
              // ray.


              PhysicsSystem.instance.raycast(ray, 1, 10000, true);

              if (PhysicsSystem.instance.raycastResults) {
                // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);
                find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController).playerTouch3dObject(PhysicsSystem.instance.raycastResults); // PhysicsSystem.instance
              }
            });
          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);

        return TouchScreenLayer;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ub3VjaFNjcmVlbkxheWVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ2FtZXJhQ29tcG9uZW50IiwiUGh5c2ljc1N5c3RlbSIsImZpbmQiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvdWNoU2NyZWVuTGF5ZXIiLCJjYW1lcmFOb2RlIiwiZ2FtZUN0bCIsImdldENvbXBvbmVudCIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsImV2ZW50IiwidG91Y2hQb3MiLCJnZXRMb2NhdGlvbiIsInJheSIsInNjcmVlblBvaW50VG9SYXkiLCJ4IiwieSIsImluc3RhbmNlIiwicmF5Y2FzdCIsInJheWNhc3RSZXN1bHRzIiwicGxheWVyVG91Y2gzZE9iamVjdCIsImRlbHRhVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQTRCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUNDLE1BQUFBLGEsT0FBQUEsYTtBQUE0QkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ2hIQyxNQUFBQSxjLHFCQUFBQSxjOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0dHLFUsR0FBOEIsSTtnQkFFOUJDLE8sR0FBZ0IsSTs7Ozs7O2tDQUdmO0FBQUE7O0FBQ0osaUJBQUtELFVBQUwsR0FBa0JMLElBQUksQ0FBQyxRQUFELENBQUosQ0FBZU8sWUFBZixDQUE0QlQsZUFBNUIsQ0FBbEI7QUFDQSxpQkFBS1EsT0FBTCxHQUFlTixJQUFJLENBQUMsZ0JBQUQsQ0FBbkIsQ0FGSSxDQUdKOztBQUNBLGlCQUFLUSxJQUFMLENBQVVDLEVBQVYsQ0FBYVosSUFBSSxDQUFDYSxTQUFMLENBQWVDLFNBQTVCLEVBQXVDLFVBQUNDLEtBQUQsRUFBdUI7QUFDMUQ7QUFDQSxrQkFBSUMsUUFBYyxHQUFHRCxLQUFLLENBQUNFLFdBQU4sRUFBckI7O0FBQ0Esa0JBQUlDLEdBQUcsR0FBRyxNQUFJLENBQUNWLFVBQUwsQ0FBZ0JFLFlBQWhCLENBQTZCVCxlQUE3QixFQUE4Q2tCLGdCQUE5QyxDQUErREgsUUFBUSxDQUFDSSxDQUF4RSxFQUEyRUosUUFBUSxDQUFDSyxDQUFwRixDQUFWLENBSDBELENBSTFEO0FBQ0E7QUFDQTs7O0FBQ0FuQixjQUFBQSxhQUFhLENBQUNvQixRQUFkLENBQXVCQyxPQUF2QixDQUErQkwsR0FBL0IsRUFBb0MsQ0FBcEMsRUFBdUMsS0FBdkMsRUFBOEMsSUFBOUM7O0FBQ0Esa0JBQUloQixhQUFhLENBQUNvQixRQUFkLENBQXVCRSxjQUEzQixFQUEyQztBQUN2QztBQUVEckIsZ0JBQUFBLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCTyxZQUF2QjtBQUFBO0FBQUEsc0RBQW9EZSxtQkFBcEQsQ0FBd0V2QixhQUFhLENBQUNvQixRQUFkLENBQXVCRSxjQUEvRixFQUh3QyxDQUt2QztBQUNIO0FBQ0osYUFmRDtBQWdCSDs7O2lDQUVNRSxTLEVBQW1CLENBQ3RCO0FBQ0g7Ozs7UUEvQmlDM0IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgRXZlbnRUb3VjaCwgQ0NPYmplY3QsIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgZ2VvbWV0cnksIFBoeXNpY3NTeXN0ZW0sIHN5c3RlbUV2ZW50LCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3VjaFNjcmVlbkxheWVyJylcclxuZXhwb3J0IGNsYXNzIFRvdWNoU2NyZWVuTGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUN0bDogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhTm9kZSA9IGZpbmQoXCJDYW1lcmFcIikuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvdWNoIHN0YXJ0XCIsIGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb3M6IFZlYzIgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgcmF5ID0gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLnNjcmVlblBvaW50VG9SYXkodG91Y2hQb3MueCwgdG91Y2hQb3MueSk7XHJcbiAgICAgICAgICAgIC8vIFBoeXNpY3NSYXlSZXN1bHQuXHJcbiAgICAgICAgICAgIC8vIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3QocmF5LDB4ZmZmZmZmICwxMDAwKTtcclxuICAgICAgICAgICAgLy8gcmF5LlxyXG4gICAgICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3QocmF5LCAxLCAxMDAwMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDdGwuZW1pdChcInRvdWNoLXNjcmVlbi10by0zZFwiLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLnBsYXllclRvdWNoM2RPYmplY3QoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0UmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbn1cclxuIl19