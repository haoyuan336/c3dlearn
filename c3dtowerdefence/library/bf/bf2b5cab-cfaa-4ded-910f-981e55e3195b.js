System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CameraComponent, isValid, find, _dec, _class, _temp, _crd, ccclass, property, TowerBuildBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      CameraComponent = _cc.CameraComponent;
      isValid = _cc.isValid;
      find = _cc.find;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "bf2b5yrz6pN7ZEPmB5V4xlb", "TowerBuildBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBase", TowerBuildBase = (_dec = ccclass('TowerBuildBase'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TowerBuildBase, _Component);

        function TowerBuildBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBuildBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBuildBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.cameraNodeCom = null;
          _this.gameController = null;
          _this.targetTower = null;
          return _this;
        }

        _createClass(TowerBuildBase, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.gameController = find("GameController");
            this.cameraNodeCom = find("Camera").getComponent(CameraComponent);
            this.gameController.on("touch-screen-to-3d", function (resultList) {
              if (!isValid(_this2.targetTower)) {
                for (var i = 0; i < resultList.length; i++) {
                  var result = resultList[i];

                  if (result.collider.node && result.collider.node.uuid === _this2.node.uuid) {
                    console.log("点中了此塔的基座");

                    _this2.gameController.emit("touch-base-build-base", _this2.node);
                  }
                }
              } // if (collider.node && collider.node.uuid === this.node.uuid && !isValid(this.targetTower)) {
              //     console.log("点中了 此塔座");
              //     this.gameController.emit("touch-base-build-base", this.node);
              // }

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
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQ2FtZXJhQ29tcG9uZW50IiwiaXNWYWxpZCIsImZpbmQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZSIsImNhbWVyYU5vZGVDb20iLCJnYW1lQ29udHJvbGxlciIsInRhcmdldFRvd2VyIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwibm9kZSIsInV1aWQiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInVuZGVmaW5lZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWtFQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDekdDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O2dDQUdKQyxjLFdBRFpGLE9BQU8sQ0FBQyxnQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0dHLGEsR0FBaUMsSTtnQkFFakNDLGMsR0FBdUIsSTtnQkFDdEJDLFcsR0FBb0IsSTs7Ozs7O2tDQUNwQjtBQUFBOztBQUNKLGlCQUFLRCxjQUFMLEdBQXNCTCxJQUFJLENBQUMsZ0JBQUQsQ0FBMUI7QUFDQSxpQkFBS0ksYUFBTCxHQUFxQkosSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlTyxZQUFmLENBQTRCVCxlQUE1QixDQUFyQjtBQUNBLGlCQUFLTyxjQUFMLENBQW9CRyxFQUFwQixDQUF1QixvQkFBdkIsRUFBNkMsVUFBQ0MsVUFBRCxFQUFvQztBQUM3RSxrQkFBSSxDQUFDVixPQUFPLENBQUMsTUFBSSxDQUFDTyxXQUFOLENBQVosRUFBZ0M7QUFDNUIscUJBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsVUFBVSxDQUFDRSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxzQkFBSUUsTUFBTSxHQUFHSCxVQUFVLENBQUNDLENBQUQsQ0FBdkI7O0FBQ0Esc0JBQUlFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsSUFBd0JGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLElBQXJCLEtBQThCLE1BQUksQ0FBQ0QsSUFBTCxDQUFVQyxJQUFwRSxFQUEwRTtBQUN0RUMsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7O0FBQ0Esb0JBQUEsTUFBSSxDQUFDWixjQUFMLENBQW9CYSxJQUFwQixDQUF5Qix1QkFBekIsRUFBa0QsTUFBSSxDQUFDSixJQUF2RDtBQUNIO0FBQ0o7QUFDSixlQVQ0RSxDQVc3RTtBQUNBO0FBRUE7QUFDQTs7QUFDSCxhQWhCRCxFQUhJLENBcUJKO0FBQ0E7QUFDQTtBQUNIOzs7NkNBQ2tCO0FBQ2YsaUJBQUtSLFdBQUwsR0FBbUJhLFNBQW5CO0FBQ0g7Ozt5Q0FDY2IsVyxFQUFtQjtBQUM5QixpQkFBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxpQkFBS1EsSUFBTCxDQUFVTSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUF4Q2dDdkIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ2FtZXJhQ29tcG9uZW50LCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnRUeXBlLCBDb2xsaWRlckNvbXBvbmVudCwgaXNWYWxpZCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJ1aWxkQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJ1aWxkQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBDYW1lcmFDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlQ29tOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKTtcclxuICAgICAgICB0aGlzLmNhbWVyYU5vZGVDb20gPSBmaW5kKFwiQ2FtZXJhXCIpLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgKHJlc3VsdExpc3Q6IFBoeXNpY3NSYXlSZXN1bHRbXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy50YXJnZXRUb3dlcikpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIubm9kZSAmJiByZXN1bHQuY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6huatpOWhlOeahOWfuuW6p1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoY29sbGlkZXIubm9kZSAmJiBjb2xsaWRlci5ub2RlLnV1aWQgPT09IHRoaXMubm9kZS51dWlkICYmICFpc1ZhbGlkKHRoaXMudGFyZ2V0VG93ZXIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6hiDmraTloZTluqdcIik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwib25UcmlnZ2VyRW50ZXJcIilcclxuICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCkub24oXCJvblRyaWdnZXJFbnRlclwiLCB0aGlzLm9uVHJpZ2dlckVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgdW5TZXRUYXJnZXRUb3dlcigpIHtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgc2V0VGFyZ2V0VG93ZXIodGFyZ2V0VG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyID0gdGFyZ2V0VG93ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gb25UcmlnZ2VyRW50ZXIoKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuoYgdG93ZXIgYnVpbGQgYmFzZVwiKTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=