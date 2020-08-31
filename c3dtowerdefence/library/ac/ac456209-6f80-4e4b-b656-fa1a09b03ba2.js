System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, LabelComponent, MenuUIBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, UIController;

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

  function _reportPossibleCrUseOfMenuUIBase(extras) {
    _reporterNs.report("MenuUIBase", "./Menu/MenuUIBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CameraComponent = _cc.CameraComponent;
      isValid = _cc.isValid;
      LabelComponent = _cc.LabelComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuMenuUIBaseJs) {
      MenuUIBase = _MenuMenuUIBaseJs.MenuUIBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ac456IJb4BOS7ZW+hoJsDui", "UIController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UIController, _Component);

        function UIController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buildTowerPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateMenuPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor4, _assertThisInitialized(_this));

          _this.buildUINode = null;
          _this.updateUINode = null;

          _initializerDefineProperty(_this, "currentWaveLabelNode", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIController, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.gameController.on("touch-base-build-base", function (node) {
              //玩家点中了塔的基座
              //显示建造tower 的UI
              if (!isValid(_this2.buildUINode)) {
                _this2.buildUINode = instantiate(_this2.buildTowerPrefab);
                _this2.buildUINode.parent = _this2.node;
              }

              _this2.setUINodeTo3dPos(_this2.buildUINode, node);

              _this2.buildUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                error: Error()
              }), MenuUIBase) : MenuUIBase).open(node);
            });
            this.gameController.on("touch-tower", function (targetTower) {
              //点中了tower
              if (!isValid(_this2.updateUINode)) {
                _this2.updateUINode = instantiate(_this2.updateMenuPrefab);
                _this2.updateUINode.parent = _this2.node;
              }

              _this2.setUINodeTo3dPos(_this2.updateUINode, targetTower);
            });
            this.gameController.on("refer-current-wave", function (waveNum) {
              _this2.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
            });
          }
        }, {
          key: "setUINodeTo3dPos",
          value: function setUINodeTo3dPos(uiNode, node3d) {
            var pos;
            pos = this.cameraNode.getComponent(CameraComponent).convertToUINode(node3d.position, this.node);
            uiNode.setPosition(pos);
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            switch (customData) {
              case 'start-game':
                //玩家点击了开始游戏按钮
                console.log("event", event);
                event.target.destroy();
                this.gameController.emit("player-click-game");
                break;

              default:
                break;
            }
          }
        }]);

        return UIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildTowerPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "updateMenuPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currentWaveLabelNode", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiYnVpbGRVSU5vZGUiLCJ1cGRhdGVVSU5vZGUiLCJnYW1lQ29udHJvbGxlciIsIm9uIiwibm9kZSIsImJ1aWxkVG93ZXJQcmVmYWIiLCJwYXJlbnQiLCJzZXRVSU5vZGVUbzNkUG9zIiwiZ2V0Q29tcG9uZW50Iiwib3BlbiIsInRhcmdldFRvd2VyIiwidXBkYXRlTWVudVByZWZhYiIsIndhdmVOdW0iLCJjdXJyZW50V2F2ZUxhYmVsTm9kZSIsInN0cmluZyIsInVpTm9kZSIsIm5vZGUzZCIsInBvcyIsImNhbWVyYU5vZGUiLCJjb252ZXJ0VG9VSU5vZGUiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImRlc3Ryb3kiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUF1QkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLGMsT0FBQUEsYzs7OztBQUNsRkMsTUFBQUEsVSxxQkFBQUEsVTs7Ozs7O0FBQ0RDLE1B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Ozs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFJUixJOzs7Ozs7O2lCQU1VLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIENhbWVyYUNvbXBvbmVudCwgVmVjMywgaXNWYWxpZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudS9NZW51VUlCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdVSUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWlsZFRvd2VyUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlTWVudVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnVpbGRVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50V2F2ZUxhYmVsTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v546p5a6254K55Lit5LqG5aGU55qE5Z+65bqnXHJcbiAgICAgICAgICAgIC8v5pi+56S65bu66YCgdG93ZXIg55qEVUlcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMuYnVpbGRVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWlsZFRvd2VyUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy5idWlsZFVJTm9kZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4obm9kZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtdG93ZXJcIiwgKHRhcmdldFRvd2VyOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v54K55Lit5LqGdG93ZXJcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMudXBkYXRlVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnVwZGF0ZU1lbnVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VUlOb2RlVG8zZFBvcyh0aGlzLnVwZGF0ZVVJTm9kZSwgdGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCAod2F2ZU51bSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlTGFiZWxOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gd2F2ZU51bTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFVJTm9kZVRvM2RQb3ModWlOb2RlOiBOb2RlLCBub2RlM2Q6IE5vZGUpIHtcclxuICAgICAgICBsZXQgcG9zOiBWZWMzO1xyXG4gICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KS5jb252ZXJ0VG9VSU5vZGUobm9kZTNkLnBvc2l0aW9uLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHVpTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudDogQnV0dG9uQ29tcG9uZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0LWdhbWUnOlxyXG4gICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuoblvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInBsYXllci1jbGljay1nYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19