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
          value: function unSetTargetTower(target) {
            this.targetTower = undefined;
            this.node.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQ2FtZXJhQ29tcG9uZW50IiwiaXNWYWxpZCIsImZpbmQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZSIsImNhbWVyYU5vZGVDb20iLCJnYW1lQ29udHJvbGxlciIsInRhcmdldFRvd2VyIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwibm9kZSIsInV1aWQiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInRhcmdldCIsInVuZGVmaW5lZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWtFQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDekdDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O2dDQUdKQyxjLFdBRFpGLE9BQU8sQ0FBQyxnQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0dHLGEsR0FBaUMsSTtnQkFFakNDLGMsR0FBdUIsSTtnQkFDdEJDLFcsR0FBb0IsSTs7Ozs7O2tDQUNwQjtBQUFBOztBQUNKLGlCQUFLRCxjQUFMLEdBQXNCTCxJQUFJLENBQUMsZ0JBQUQsQ0FBMUI7QUFDQSxpQkFBS0ksYUFBTCxHQUFxQkosSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlTyxZQUFmLENBQTRCVCxlQUE1QixDQUFyQjtBQUNBLGlCQUFLTyxjQUFMLENBQW9CRyxFQUFwQixDQUF1QixvQkFBdkIsRUFBNkMsVUFBQ0MsVUFBRCxFQUFvQztBQUM3RSxrQkFBSSxDQUFDVixPQUFPLENBQUMsTUFBSSxDQUFDTyxXQUFOLENBQVosRUFBZ0M7QUFDNUIscUJBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsVUFBVSxDQUFDRSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxzQkFBSUUsTUFBTSxHQUFHSCxVQUFVLENBQUNDLENBQUQsQ0FBdkI7O0FBQ0Esc0JBQUlFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsSUFBd0JGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLElBQXJCLEtBQThCLE1BQUksQ0FBQ0QsSUFBTCxDQUFVQyxJQUFwRSxFQUEwRTtBQUN0RUMsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7O0FBQ0Esb0JBQUEsTUFBSSxDQUFDWixjQUFMLENBQW9CYSxJQUFwQixDQUF5Qix1QkFBekIsRUFBa0QsTUFBSSxDQUFDSixJQUF2RDtBQUNIO0FBQ0o7QUFDSixlQVQ0RSxDQVc3RTtBQUNBO0FBRUE7QUFDQTs7QUFDSCxhQWhCRCxFQUhJLENBcUJKO0FBQ0E7QUFDQTtBQUNIOzs7MkNBQ2dCSyxNLEVBQWM7QUFDM0IsaUJBQUtiLFdBQUwsR0FBbUJjLFNBQW5CO0FBQ0EsaUJBQUtOLElBQUwsQ0FBVU8sTUFBVixHQUFtQixJQUFuQjtBQUNIOzs7eUNBQ2NmLFcsRUFBbUI7QUFDOUIsaUJBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsaUJBQUtRLElBQUwsQ0FBVU8sTUFBVixHQUFtQixLQUFuQjtBQUNILFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7O1FBekNnQ3hCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENhbWVyYUNvbXBvbmVudCwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50VHlwZSwgQ29sbGlkZXJDb21wb25lbnQsIGlzVmFsaWQsIGZpbmQsIFBoeXNpY3NSYXlSZXN1bHQgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCdWlsZEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgVG93ZXJCdWlsZEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogQ2FtZXJhQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZUNvbTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRhcmdldFRvd2VyOiBOb2RlID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFOb2RlQ29tID0gZmluZChcIkNhbWVyYVwiKS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMudGFyZ2V0VG93ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUgJiYgcmVzdWx0LmNvbGxpZGVyLm5vZGUudXVpZCA9PT0gdGhpcy5ub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuobmraTloZTnmoTln7rluqdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKGNvbGxpZGVyLm5vZGUgJiYgY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCAmJiAhaXNWYWxpZCh0aGlzLnRhcmdldFRvd2VyKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuoYg5q2k5aGU5bqnXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcIm9uVHJpZ2dlckVudGVyXCIpXHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpLm9uKFwib25UcmlnZ2VyRW50ZXJcIiwgdGhpcy5vblRyaWdnZXJFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHVuU2V0VGFyZ2V0VG93ZXIodGFyZ2V0OiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRUb3dlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNldFRhcmdldFRvd2VyKHRhcmdldFRvd2VyOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRUb3dlciA9IHRhcmdldFRvd2VyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIG9uVHJpZ2dlckVudGVyKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwi54K55Lit5LqGIHRvd2VyIGJ1aWxkIGJhc2VcIik7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19