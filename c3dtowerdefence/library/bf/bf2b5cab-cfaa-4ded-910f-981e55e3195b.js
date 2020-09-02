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
              if (collider.node && collider.node.uuid === _this2.node.uuid && !isValid(_this2.targetTower)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZSIsInR5cGUiLCJ0YXJnZXRUb3dlciIsImdhbWVDb250cm9sbGVyIiwib24iLCJjb2xsaWRlciIsIm5vZGUiLCJ1dWlkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJ1bmRlZmluZWQiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsZSxPQUFBQSxlO0FBQWtFQyxNQUFBQSxPLE9BQUFBLE87Ozs7OztBQUNoR0MsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEMsVUFFUkcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRU47QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUVETyxXLEdBQW9CLEk7Ozs7OztrQ0FDcEI7QUFBQTs7QUFDSixpQkFBS0MsY0FBTCxDQUFvQkMsRUFBcEIsQ0FBdUIsb0JBQXZCLEVBQTZDLFVBQUNDLFFBQUQsRUFBaUM7QUFDMUUsa0JBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQkQsUUFBUSxDQUFDQyxJQUFULENBQWNDLElBQWQsS0FBdUIsTUFBSSxDQUFDRCxJQUFMLENBQVVDLElBQWxELElBQTBELENBQUNWLE9BQU8sQ0FBQyxNQUFJLENBQUNLLFdBQU4sQ0FBdEUsRUFBMEY7QUFDdEZNLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaOztBQUVBLGdCQUFBLE1BQUksQ0FBQ04sY0FBTCxDQUFvQk8sSUFBcEIsQ0FBeUIsdUJBQXpCLEVBQWtELE1BQUksQ0FBQ0osSUFBdkQ7QUFDSDtBQUNKLGFBTkQsRUFESSxDQVNKO0FBQ0E7QUFDQTtBQUNIOzs7NkNBQ2lCO0FBQ2QsaUJBQUtKLFdBQUwsR0FBbUJTLFNBQW5CO0FBQ0g7Ozt5Q0FDY1QsVyxFQUFtQjtBQUM5QixpQkFBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxpQkFBS0ksSUFBTCxDQUFVTSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUE1QmdDbEIsUzs7Ozs7aUJBRVEsSTs7Ozs7OztpQkFFVixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDYW1lcmFDb21wb25lbnQsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudFR5cGUsIENvbGxpZGVyQ29tcG9uZW50LCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1Rvd2VyQnVpbGRCYXNlJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQnVpbGRCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENhbWVyYUNvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGVDb206IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXRUb3dlcjogTm9kZSA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIChjb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbGxpZGVyLm5vZGUgJiYgY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCAmJiAhaXNWYWxpZCh0aGlzLnRhcmdldFRvd2VyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuoYg5q2k5aGU5bqnXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIm9uVHJpZ2dlckVudGVyXCIpXHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpLm9uKFwib25UcmlnZ2VyRW50ZXJcIiwgdGhpcy5vblRyaWdnZXJFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHVuU2V0VGFyZ2V0VG93ZXIoKXtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgc2V0VGFyZ2V0VG93ZXIodGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyID0gdGFyZ2V0VG93ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gb25UcmlnZ2VyRW50ZXIoKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuoYgdG93ZXIgYnVpbGQgYmFzZVwiKTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=