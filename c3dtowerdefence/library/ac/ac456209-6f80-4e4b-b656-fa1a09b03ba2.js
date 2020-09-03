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
          // @property({ type: Prefab })
          // public startGameCountDownAnimPrefab: Prefab = null;
          // @property({ type: Prefab })
          // public goAnimPrefab: Prefab = null;
          value: function start() {
            var _this2 = this;

            console.log("ui controller start");
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
          } // playCountDownAnim() {
          //     return new Promise((resolve, reject) => {
          //         let node = instantiate(this.startGameCountDownAnimPrefab);
          //         node.parent = this.node;
          //         let goNode: Node = null;
          //         let tw = new Tween(this.node);
          //         tw.delay(3);
          //         tw.call(() => {
          //             node.destroy();
          //             goNode = instantiate(this.goAnimPrefab);
          //             goNode.parent = this.node;
          //         });
          //         tw.delay(1);
          //         tw.call(() => {
          //             if (isValid(goNode)) {
          //                 goNode.destroy();
          //             }
          //             resolve();
          //         })
          //         tw.start();
          //         // node.on("play-anim-cb", () => {
          //         //     console.log("play anim end");
          //         //     node.destroy();
          //         //     resolve();
          //         // })
          //         // let animation = node.getComponent(AnimationComponent)
          //         // if (animation && animation.defaultClip){
          //         //     let defaultClip = animation.defaultClip;
          //         //     defaultClip.events.push({
          //         //         frame: 2.9,
          //         //         func: "countDonwAnimEnd"
          //         //     })
          //         // }   
          //     });
          // }
          // countDonwAnimEnd() {
          //     console.log("倒计时动画播放完成");
          // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiYnVpbGRVSU5vZGUiLCJ1cGRhdGVVSU5vZGUiLCJjb25zb2xlIiwibG9nIiwiZ2FtZUNvbnRyb2xsZXIiLCJvbiIsIm5vZGUiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50Iiwic2V0VUlOb2RlVG8zZFBvcyIsImdldENvbXBvbmVudCIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJ3YXZlTnVtIiwiY3VycmVudFdhdmVMYWJlbE5vZGUiLCJzdHJpbmciLCJ1aU5vZGUiLCJub2RlM2QiLCJwb3MiLCJjYW1lcmFOb2RlIiwiY29udmVydFRvVUlOb2RlIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInRhcmdldCIsImRlc3Ryb3kiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUF1QkMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLGMsT0FBQUEsYzs7OztBQUNsRkMsTUFBQUEsVSxxQkFBQUEsVTs7Ozs7O0FBQ0RDLE1B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SDs7O3dDQUNhSyxLLEVBQXdCQyxVLEVBQVk7QUFDOUMsb0JBQVFBLFVBQVI7QUFDSSxtQkFBSyxZQUFMO0FBQ0k7QUFDQXZCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCcUIsS0FBckI7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxPQUFiO0FBQ0EscUJBQUt2QixjQUFMLENBQW9Cd0IsSUFBcEIsQ0FBeUIsbUJBQXpCO0FBQ0E7O0FBQ0o7QUFDSTtBQVJSO0FBVUg7Ozs7UUF0RzZCeEMsUzs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBSVIsSTs7Ozs7OztpQkFNVSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBDYW1lcmFDb21wb25lbnQsIFZlYzMsIGlzVmFsaWQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBCdXR0b25Db21wb25lbnQsIEFuaW1hdGlvbkNvbXBvbmVudCwgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnUvTWVudVVJQmFzZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVUlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVpbGRUb3dlclByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHVwZGF0ZU1lbnVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdXBkYXRlVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudFdhdmVMYWJlbE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIHN0YXJ0R2FtZUNvdW50RG93bkFuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgZ29BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1aSBjb250cm9sbGVyIHN0YXJ0XCIpXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eOqeWutueCueS4reS6huWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvL+aYvuekuuW7uumAoHRvd2VyIOeahFVJXHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMuYnVpbGRVSU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKG5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXRvd2VyXCIsICh0YXJnZXRUb3dlcjogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eCueS4reS6hnRvd2VyXHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy51cGRhdGVNZW51UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy51cGRhdGVVSU5vZGUsIHRhcmdldFRvd2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJyZWZlci1jdXJyZW50LXdhdmVcIiwgKHdhdmVOdW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHdhdmVOdW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBwbGF5Q291bnREb3duQW5pbSgpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuc3RhcnRHYW1lQ291bnREb3duQW5pbVByZWZhYik7XHJcbiAgICAvLyAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgLy8gICAgICAgICBsZXQgZ29Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIC8vICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAvLyAgICAgICAgIHR3LmRlbGF5KDMpO1xyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgZ29Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5nb0FuaW1QcmVmYWIpO1xyXG4gICAgLy8gICAgICAgICAgICAgZ29Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIHR3LmRlbGF5KDEpO1xyXG4gICAgLy8gICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChpc1ZhbGlkKGdvTm9kZSkpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBnb05vZGUuZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICAvLyBub2RlLm9uKFwicGxheS1hbmltLWNiXCIsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicGxheSBhbmltIGVuZFwiKTtcclxuICAgIC8vICAgICAgICAgLy8gICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgICAvLyB9KVxyXG4gICAgLy8gICAgICAgICAvLyBsZXQgYW5pbWF0aW9uID0gbm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgLy8gICAgICAgICAvLyBpZiAoYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5kZWZhdWx0Q2xpcCl7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICBsZXQgZGVmYXVsdENsaXAgPSBhbmltYXRpb24uZGVmYXVsdENsaXA7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICBkZWZhdWx0Q2xpcC5ldmVudHMucHVzaCh7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgZnJhbWU6IDIuOSxcclxuICAgIC8vICAgICAgICAgLy8gICAgICAgICBmdW5jOiBcImNvdW50RG9ud0FuaW1FbmRcIlxyXG4gICAgLy8gICAgICAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAgICAgLy8gfSAgIFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY291bnREb253QW5pbUVuZCgpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuWAkuiuoeaXtuWKqOeUu+aSreaUvuWujOaIkFwiKTtcclxuICAgIC8vIH1cclxuICAgIHNldFVJTm9kZVRvM2RQb3ModWlOb2RlOiBOb2RlLCBub2RlM2Q6IE5vZGUpIHtcclxuICAgICAgICBsZXQgcG9zOiBWZWMzO1xyXG4gICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KS5jb252ZXJ0VG9VSU5vZGUobm9kZTNkLnBvc2l0aW9uLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHVpTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudDogQnV0dG9uQ29tcG9uZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0LWdhbWUnOlxyXG4gICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuoblvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInBsYXllci1jbGljay1nYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19