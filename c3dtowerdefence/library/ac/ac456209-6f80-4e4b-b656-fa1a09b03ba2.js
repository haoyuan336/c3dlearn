System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, LabelComponent, Tween, MenuUIBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, UIController;

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
    _dec7: void 0,
    _dec8: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
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
      Tween = _cc.Tween;
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
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Prefab
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

          _initializerDefineProperty(_this, "startGameCountDownAnimPrefab", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "goAnimPrefab", _descriptor7, _assertThisInitialized(_this));

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
          key: "playCountDownAnim",
          value: function playCountDownAnim() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var node = instantiate(_this3.startGameCountDownAnimPrefab);
              node.parent = _this3.node;
              var goNode = null;
              var tw = new Tween(_this3.node);
              tw.delay(3);
              tw.call(function () {
                node.destroy();
                goNode = instantiate(_this3.goAnimPrefab);
                goNode.parent = _this3.node;
              });
              tw.delay(1);
              tw.call(function () {
                if (isValid(goNode)) {
                  goNode.destroy();
                }

                resolve();
              });
              tw.start(); // node.on("play-anim-cb", () => {
              //     console.log("play anim end");
              //     node.destroy();
              //     resolve();
              // })
              // let animation = node.getComponent(AnimationComponent)
              // if (animation && animation.defaultClip){
              //     let defaultClip = animation.defaultClip;
              //     defaultClip.events.push({
              //         frame: 2.9,
              //         func: "countDonwAnimEnd"
              //     })
              // }   
            });
          }
        }, {
          key: "countDonwAnimEnd",
          value: function countDonwAnimEnd() {
            console.log("倒计时动画播放完成");
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startGameCountDownAnimPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "goAnimPrefab", [_dec8], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIlR3ZWVuIiwiTWVudVVJQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJQ29udHJvbGxlciIsInR5cGUiLCJidWlsZFVJTm9kZSIsInVwZGF0ZVVJTm9kZSIsImdhbWVDb250cm9sbGVyIiwib24iLCJub2RlIiwiYnVpbGRUb3dlclByZWZhYiIsInBhcmVudCIsInNldFVJTm9kZVRvM2RQb3MiLCJnZXRDb21wb25lbnQiLCJvcGVuIiwidGFyZ2V0VG93ZXIiLCJ1cGRhdGVNZW51UHJlZmFiIiwid2F2ZU51bSIsImN1cnJlbnRXYXZlTGFiZWxOb2RlIiwic3RyaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdGFydEdhbWVDb3VudERvd25BbmltUHJlZmFiIiwiZ29Ob2RlIiwidHciLCJkZWxheSIsImNhbGwiLCJkZXN0cm95IiwiZ29BbmltUHJlZmFiIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwidWlOb2RlIiwibm9kZTNkIiwicG9zIiwiY2FtZXJhTm9kZSIsImNvbnZlcnRUb1VJTm9kZSIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJldmVudCIsImN1c3RvbURhdGEiLCJ0YXJnZXQiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFD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QUNJLG1CQUFLLFlBQUw7QUFDSTtBQUNBVixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlEsS0FBckI7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhZCxPQUFiO0FBQ0EscUJBQUtyQixjQUFMLENBQW9Cb0MsSUFBcEIsQ0FBeUIsbUJBQXpCO0FBQ0E7O0FBQ0o7QUFDSTtBQVJSO0FBVUg7Ozs7UUFyRzZCbkQsUzs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBSVIsSTs7Ozs7OztpQkFNVSxJOzs7Ozs7O2lCQUdVLEk7Ozs7Ozs7aUJBR2hCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIENhbWVyYUNvbXBvbmVudCwgVmVjMywgaXNWYWxpZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgQW5pbWF0aW9uQ29tcG9uZW50LCBUd2VlbiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudS9NZW51VUlCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdVSUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWlsZFRvd2VyUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdXBkYXRlTWVudVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnVpbGRVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVSU5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50V2F2ZUxhYmVsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lQ291bnREb3duQW5pbVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBnb0FuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtYmFzZS1idWlsZC1iYXNlXCIsIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v546p5a6254K55Lit5LqG5aGU55qE5Z+65bqnXHJcbiAgICAgICAgICAgIC8v5pi+56S65bu66YCgdG93ZXIg55qEVUlcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMuYnVpbGRVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWlsZFRvd2VyUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy5idWlsZFVJTm9kZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4obm9kZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm9uKFwidG91Y2gtdG93ZXJcIiwgKHRhcmdldFRvd2VyOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v54K55Lit5LqGdG93ZXJcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRoaXMudXBkYXRlVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnVwZGF0ZU1lbnVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VUlOb2RlVG8zZFBvcyh0aGlzLnVwZGF0ZVVJTm9kZSwgdGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCAod2F2ZU51bSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlTGFiZWxOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gd2F2ZU51bTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBsYXlDb3VudERvd25BbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5zdGFydEdhbWVDb3VudERvd25BbmltUHJlZmFiKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBnb05vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMyk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBnb05vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdvQW5pbVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBnb05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuZGVsYXkoMSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQoZ29Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdvTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIG5vZGUub24oXCJwbGF5LWFuaW0tY2JcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwbGF5IGFuaW0gZW5kXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIGxldCBhbmltYXRpb24gPSBub2RlLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpXHJcbiAgICAgICAgICAgIC8vIGlmIChhbmltYXRpb24gJiYgYW5pbWF0aW9uLmRlZmF1bHRDbGlwKXtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBkZWZhdWx0Q2xpcCA9IGFuaW1hdGlvbi5kZWZhdWx0Q2xpcDtcclxuICAgICAgICAgICAgLy8gICAgIGRlZmF1bHRDbGlwLmV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBmcmFtZTogMi45LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZ1bmM6IFwiY291bnREb253QW5pbUVuZFwiXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9ICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb3VudERvbndBbmltRW5kKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YCS6K6h5pe25Yqo55S75pKt5pS+5a6M5oiQXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VUlOb2RlVG8zZFBvcyh1aU5vZGU6IE5vZGUsIG5vZGUzZDogTm9kZSkge1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzM7XHJcbiAgICAgICAgcG9zID0gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLmNvbnZlcnRUb1VJTm9kZShub2RlM2QucG9zaXRpb24sIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdWlOb2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQtZ2FtZSc6XHJcbiAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6huW8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwicGxheWVyLWNsaWNrLWdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=