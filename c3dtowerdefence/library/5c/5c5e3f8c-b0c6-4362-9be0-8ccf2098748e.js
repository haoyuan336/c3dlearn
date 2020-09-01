System.register(["cc", "code-quality:cr", "../GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, CameraComponent, PhysicsSystem, find, GameController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TouchScreenLayer;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
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

      _export("TouchScreenLayer", TouchScreenLayer = (_dec = ccclass('TouchScreenLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TouchScreenLayer, _Component);

        function TouchScreenLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TouchScreenLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchScreenLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cameraNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameCtl", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(TouchScreenLayer, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.node.on(Node.EventType.TOUCH_START, function (event) {
              console.log("touch start", event.getLocation());
              var touchPos = event.getLocation();

              var ray = _this2.cameraNode.getComponent(CameraComponent).screenPointToRay(touchPos.x, touchPos.y); // PhysicsRayResult.
              // PhysicsSystem.instance.raycastClosest(ray,0xffffff ,1000);
              // ray.


              PhysicsSystem.instance.raycastClosest(ray, 1, 10000, true);

              if (PhysicsSystem.instance.raycastClosestResult.collider) {
                // this.gameCtl.emit("touch-screen-to-3d", PhysicsSystem.instance.raycastClosestResult.collider);
                find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController).playerTouch3dObject(PhysicsSystem.instance.raycastClosestResult.collider); // PhysicsSystem.instance
              }
            });
          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);

        return TouchScreenLayer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameCtl", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ub3VjaFNjcmVlbkxheWVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ2FtZXJhQ29tcG9uZW50IiwiUGh5c2ljc1N5c3RlbSIsImZpbmQiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvdWNoU2NyZWVuTGF5ZXIiLCJ0eXBlIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRMb2NhdGlvbiIsInRvdWNoUG9zIiwicmF5IiwiY2FtZXJhTm9kZSIsImdldENvbXBvbmVudCIsInNjcmVlblBvaW50VG9SYXkiLCJ4IiwieSIsImluc3RhbmNlIiwicmF5Y2FzdENsb3Nlc3QiLCJyYXljYXN0Q2xvc2VzdFJlc3VsdCIsImNvbGxpZGVyIiwicGxheWVyVG91Y2gzZE9iamVjdCIsImRlbHRhVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBNEJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQ0MsTUFBQUEsYSxPQUFBQSxhO0FBQTRCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFFaEhDLE1BQUFBLGMscUJBQUFBLGM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztrQ0FHSkMsZ0IsV0FEWkYsT0FBTyxDQUFDLGtCQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFFUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSUQ7QUFBQTs7QUFDSjtBQUNBLGlCQUFLUyxJQUFMLENBQVVDLEVBQVYsQ0FBYVYsSUFBSSxDQUFDVyxTQUFMLENBQWVDLFdBQTVCLEVBQXlDLFVBQUNDLEtBQUQsRUFBdUI7QUFDNURDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLEtBQUssQ0FBQ0csV0FBTixFQUEzQjtBQUNBLGtCQUFJQyxRQUFjLEdBQUdKLEtBQUssQ0FBQ0csV0FBTixFQUFyQjs7QUFDQSxrQkFBSUUsR0FBRyxHQUFHLE1BQUksQ0FBQ0MsVUFBTCxDQUFnQkMsWUFBaEIsQ0FBNkJuQixlQUE3QixFQUE4Q29CLGdCQUE5QyxDQUErREosUUFBUSxDQUFDSyxDQUF4RSxFQUEyRUwsUUFBUSxDQUFDTSxDQUFwRixDQUFWLENBSDRELENBSTVEO0FBQ0E7QUFDQTs7O0FBQ0FyQixjQUFBQSxhQUFhLENBQUNzQixRQUFkLENBQXVCQyxjQUF2QixDQUFzQ1AsR0FBdEMsRUFBMkMsQ0FBM0MsRUFBOEMsS0FBOUMsRUFBcUQsSUFBckQ7O0FBQ0Esa0JBQUloQixhQUFhLENBQUNzQixRQUFkLENBQXVCRSxvQkFBdkIsQ0FBNENDLFFBQWhELEVBQTBEO0FBQ3REO0FBRUR4QixnQkFBQUEsSUFBSSxDQUFDLGdCQUFELENBQUosQ0FBdUJpQixZQUF2QjtBQUFBO0FBQUEsc0RBQW9EUSxtQkFBcEQsQ0FBd0UxQixhQUFhLENBQUNzQixRQUFkLENBQXVCRSxvQkFBdkIsQ0FBNENDLFFBQXBILEVBSHVELENBS3REO0FBQ0g7QUFDSixhQWZEO0FBZ0JIOzs7aUNBRU1FLFMsRUFBbUIsQ0FDdEI7QUFDSDs7OztRQTdCaUM5QixTOzs7OztpQkFFRyxJOzs7Ozs7O2lCQUVkLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEV2ZW50VG91Y2gsIENDT2JqZWN0LCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIGdlb21ldHJ5LCBQaHlzaWNzU3lzdGVtLCBzeXN0ZW1FdmVudCwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG91Y2hTY3JlZW5MYXllcicpXHJcbmV4cG9ydCBjbGFzcyBUb3VjaFNjcmVlbkxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVDdGw6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvdWNoIHN0YXJ0XCIsIGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb3M6IFZlYzIgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgcmF5ID0gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLnNjcmVlblBvaW50VG9SYXkodG91Y2hQb3MueCwgdG91Y2hQb3MueSk7XHJcbiAgICAgICAgICAgIC8vIFBoeXNpY3NSYXlSZXN1bHQuXHJcbiAgICAgICAgICAgIC8vIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3QocmF5LDB4ZmZmZmZmICwxMDAwKTtcclxuICAgICAgICAgICAgLy8gcmF5LlxyXG4gICAgICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheSwgMSwgMTAwMDAsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ3RsLmVtaXQoXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5wbGF5ZXJUb3VjaDNkT2JqZWN0KFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG59XHJcbiJdfQ==