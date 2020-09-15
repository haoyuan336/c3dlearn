System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CameraComponent, isValid, find, SkeletalAnimationComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TowerBuildBase;

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
      CameraComponent = _cc.CameraComponent;
      isValid = _cc.isValid;
      find = _cc.find;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "bf2b5yrz6pN7ZEPmB5V4xlb", "TowerBuildBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBase", TowerBuildBase = (_dec = ccclass('TowerBuildBase'), _dec2 = property({
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
          _this.cameraNodeCom = null;
          _this.gameController = null;
          _this.targetTower = null;

          _initializerDefineProperty(_this, "arrowGuide", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(TowerBuildBase, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {
            this.gameController = find("GameController");
            this.cameraNodeCom = find("Camera").getComponent(CameraComponent);
            this.gameController.on("touch-screen-to-3d", this.touchScreenTo3d.bind(this), this);
            this.gameController.on("destroy-all-tower-build-base", this.destroyTowerBuildBase.bind(this), this);
            this.gameController.on("frozen-tower-build-base", this.forzenTowerBuildBase.bind(this), this); // this.node
            // this.node.on("onTriggerEnter")
            // this.getComponent(ColliderComponent).on("onTriggerEnter", this.onTriggerEnter.bind(this));
          }
        }, {
          key: "forzenTowerBuildBase",
          value: function forzenTowerBuildBase() {
            var skeleteAnim = this.arrowGuide.getComponent(SkeletalAnimationComponent);
            var defaultClip = skeleteAnim.defaultClip;
            var stateAnim = skeleteAnim.getState(defaultClip.name);
            stateAnim.pause();
          }
        }, {
          key: "touchScreenTo3d",
          value: function touchScreenTo3d(resultList) {
            if (!isValid(this.targetTower)) {
              for (var i = 0; i < resultList.length; i++) {
                var result = resultList[i];

                if (result.collider.node && result.collider.node.uuid === this.node.uuid) {
                  console.log("点中了此塔的基座");
                  this.gameController.emit("touch-base-build-base", this.node);
                }
              }
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.gameController.off("destroy-all-tower-build-base", this.destroyTowerBuildBase, this);
            this.gameController.off("touch-screen-to-3d", this.touchScreenTo3d, this);
            this.gameController.off("frozen-tower-build-base", this.forzenTowerBuildBase, this);
          }
        }, {
          key: "destroyTowerBuildBase",
          value: function destroyTowerBuildBase() {
            this.node.destroy();
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
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowGuide", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZS9Ub3dlckJ1aWxkQmFzZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJmaW5kIiwiU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZSIsInR5cGUiLCJjYW1lcmFOb2RlQ29tIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0YXJnZXRUb3dlciIsImdldENvbXBvbmVudCIsIm9uIiwidG91Y2hTY3JlZW5UbzNkIiwiYmluZCIsImRlc3Ryb3lUb3dlckJ1aWxkQmFzZSIsImZvcnplblRvd2VyQnVpbGRCYXNlIiwic2tlbGV0ZUFuaW0iLCJhcnJvd0d1aWRlIiwiZGVmYXVsdENsaXAiLCJzdGF0ZUFuaW0iLCJnZXRTdGF0ZSIsIm5hbWUiLCJwYXVzZSIsInJlc3VsdExpc3QiLCJpIiwibGVuZ3RoIiwicmVzdWx0IiwiY29sbGlkZXIiLCJub2RlIiwidXVpZCIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwib2ZmIiwiZGVzdHJveSIsInRhcmdldCIsInVuZGVmaW5lZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsZSxPQUFBQSxlO0FBQWtFQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsSSxPQUFBQSxJO0FBQXdCQyxNQUFBQSwwQixPQUFBQSwwQjs7Ozs7O0FBQ2pJQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztn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Ozs7UUExRGdDeEMsUzs7Ozs7aUJBT04sSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ2FtZXJhQ29tcG9uZW50LCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnRUeXBlLCBDb2xsaWRlckNvbXBvbmVudCwgaXNWYWxpZCwgZmluZCwgUGh5c2ljc1JheVJlc3VsdCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCdWlsZEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgVG93ZXJCdWlsZEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogQ2FtZXJhQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZUNvbTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRhcmdldFRvd2VyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXHJcbiAgICBwdWJsaWMgYXJyb3dHdWlkZTogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKXtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhTm9kZUNvbSA9IGZpbmQoXCJDYW1lcmFcIikuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCB0aGlzLnRvdWNoU2NyZWVuVG8zZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwiZGVzdHJveS1hbGwtdG93ZXItYnVpbGQtYmFzZVwiLCB0aGlzLmRlc3Ryb3lUb3dlckJ1aWxkQmFzZS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwiZnJvemVuLXRvd2VyLWJ1aWxkLWJhc2VcIiwgdGhpcy5mb3J6ZW5Ub3dlckJ1aWxkQmFzZS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGVcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJvblRyaWdnZXJFbnRlclwiKVxyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KS5vbihcIm9uVHJpZ2dlckVudGVyXCIsIHRoaXMub25UcmlnZ2VyRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBmb3J6ZW5Ub3dlckJ1aWxkQmFzZSgpe1xyXG4gICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMuYXJyb3dHdWlkZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIGxldCBkZWZhdWx0Q2xpcCA9IHNrZWxldGVBbmltLmRlZmF1bHRDbGlwO1xyXG4gICAgICAgIGxldCBzdGF0ZUFuaW0gPSBza2VsZXRlQW5pbS5nZXRTdGF0ZShkZWZhdWx0Q2xpcC5uYW1lKTtcclxuICAgICAgICBzdGF0ZUFuaW0ucGF1c2UoKTtcclxuICAgIH1cclxuICAgIHRvdWNoU2NyZWVuVG8zZChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pIHtcclxuICAgICAgICBpZiAoIWlzVmFsaWQodGhpcy50YXJnZXRUb3dlcikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIubm9kZSAmJiByZXN1bHQuY29sbGlkZXIubm9kZS51dWlkID09PSB0aGlzLm5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Lit5LqG5q2k5aGU55qE5Z+65bqnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9mZihcImRlc3Ryb3ktYWxsLXRvd2VyLWJ1aWxkLWJhc2VcIiwgdGhpcy5kZXN0cm95VG93ZXJCdWlsZEJhc2UsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub2ZmKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIHRoaXMudG91Y2hTY3JlZW5UbzNkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9mZihcImZyb3plbi10b3dlci1idWlsZC1iYXNlXCIsIHRoaXMuZm9yemVuVG93ZXJCdWlsZEJhc2UsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveVRvd2VyQnVpbGRCYXNlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB1blNldFRhcmdldFRvd2VyKHRhcmdldDogTm9kZSkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VG93ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRUYXJnZXRUb3dlcih0YXJnZXRUb3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VG93ZXIgPSB0YXJnZXRUb3dlcjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIG9uVHJpZ2dlckVudGVyKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwi54K55Lit5LqGIHRvd2VyIGJ1aWxkIGJhc2VcIik7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19