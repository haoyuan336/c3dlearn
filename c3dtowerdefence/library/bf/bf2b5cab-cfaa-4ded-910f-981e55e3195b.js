System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CameraComponent, isValid, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TowerBuildBase;

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
      isValid = _cc.isValid;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "bf2b5yrz6pN7ZEPmB5V4xlb", "TowerBuildBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBase", TowerBuildBase = (_dec = ccclass('TowerBuildBase'), _dec2 = property({
        type: CameraComponent
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TowerBuildBase, _Component);

        function TowerBuildBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBuildBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBuildBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cameraNodeCom", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameController", _descriptor2, _assertThisInitialized(_this));

          _this.targetTower = null;
          return _this;
        }

        _createClass(TowerBuildBase, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.gameController.on("touch-screen-to-3d", function (collider) {
              if (collider.node.uuid === _this2.node.uuid && !isValid(_this2.targetTower)) {
                console.log("点中了 此塔座");

                _this2.gameController.emit("touch-base-build-base", _this2.node);
              }
            }); // this.node
            // this.node.on("onTriggerEnter")
            // this.getComponent(ColliderComponent).on("onTriggerEnter", this.onTriggerEnter.bind(this));
          }
        }, {
          key: "unSetTargetTower",
          value: function unSetTargetTower() {
            this.targetTower = undefined;
          }
        }, {
          key: "setTargetTower",
          value: function setTargetTower(targetTower) {
            this.targetTower = targetTower;
            this.node.active = false;
          } // onTriggerEnter() {
          //     console.log("点中了 tower build base");
          // }

        }]);

        return TowerBuildBase;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraNodeCom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZSIsInR5cGUiLCJ0YXJnZXRUb3dlciIsImdhbWVDb250cm9sbGVyIiwib24iLCJjb2xsaWRlciIsIm5vZGUiLCJ1dWlkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJ1bmRlZmluZWQiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsZSxPQUFBQSxlO0FBQWtFQyxNQUFBQSxPLE9BQUFBLE87Ozs7OztBQUNoR0MsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEMsVUFFUkcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRU47QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUVETyxXLEdBQW9CLEk7Ozs7OztrQ0FDcEI7QUFBQTs7QUFDSixpQkFBS0MsY0FBTCxDQUFvQkMsRUFBcEIsQ0FBdUIsb0JBQXZCLEVBQTZDLFVBQUNDLFFBQUQsRUFBaUM7QUFDMUUsa0JBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxJQUFkLEtBQXVCLE1BQUksQ0FBQ0QsSUFBTCxDQUFVQyxJQUFqQyxJQUF5QyxDQUFDVixPQUFPLENBQUMsTUFBSSxDQUFDSyxXQUFOLENBQXJELEVBQXlFO0FBQ3JFTSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjs7QUFFQSxnQkFBQSxNQUFJLENBQUNOLGNBQUwsQ0FBb0JPLElBQXBCLENBQXlCLHVCQUF6QixFQUFrRCxNQUFJLENBQUNKLElBQXZEO0FBQ0g7QUFDSixhQU5ELEVBREksQ0FTSjtBQUNBO0FBQ0E7QUFDSDs7OzZDQUNpQjtBQUNkLGlCQUFLSixXQUFMLEdBQW1CUyxTQUFuQjtBQUNIOzs7eUNBQ2NULFcsRUFBbUI7QUFDOUIsaUJBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsaUJBQUtJLElBQUwsQ0FBVU0sTUFBVixHQUFtQixLQUFuQjtBQUNILFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7O1FBNUJnQ2xCLFM7Ozs7O2lCQUVRLEk7Ozs7Ozs7aUJBRVYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ2FtZXJhQ29tcG9uZW50LCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnRUeXBlLCBDb2xsaWRlckNvbXBvbmVudCwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJ1aWxkQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJ1aWxkQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDYW1lcmFDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlQ29tOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCAoY29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkICYmICFpc1ZhbGlkKHRoaXMudGFyZ2V0VG93ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6hiDmraTloZTluqdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwib25UcmlnZ2VyRW50ZXJcIilcclxuICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCkub24oXCJvblRyaWdnZXJFbnRlclwiLCB0aGlzLm9uVHJpZ2dlckVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgdW5TZXRUYXJnZXRUb3dlcigpe1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VG93ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBzZXRUYXJnZXRUb3dlcih0YXJnZXRUb3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VG93ZXIgPSB0YXJnZXRUb3dlcjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBvblRyaWdnZXJFbnRlcigpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6hiB0b3dlciBidWlsZCBiYXNlXCIpO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==