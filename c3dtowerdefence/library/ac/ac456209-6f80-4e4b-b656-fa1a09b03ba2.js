System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js", "./SkillCtl.js", "./GoldCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, LabelComponent, MenuUIBase, SkillCtl, GoldCtl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, UIController;

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

  function _reportPossibleCrUseOfSkillCtl(extras) {
    _reporterNs.report("SkillCtl", "./SkillCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoldCtl(extras) {
    _reporterNs.report("GoldCtl", "./GoldCtl", _context.meta, extras);
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
    }, function (_SkillCtlJs) {
      SkillCtl = _SkillCtlJs.SkillCtl;
    }, function (_GoldCtlJs) {
      GoldCtl = _GoldCtlJs.GoldCtl;
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
          }
        }, {
          key: "showUIEnterAnim",
          value: function showUIEnterAnim() {
            var _this3 = this;

            return this.node.getComponent(_crd && SkillCtl === void 0 ? (_reportPossibleCrUseOfSkillCtl({
              error: Error()
            }), SkillCtl) : SkillCtl).showEnterAnim().then(function () {
              return _this3.node.getComponent(_crd && GoldCtl === void 0 ? (_reportPossibleCrUseOfGoldCtl({
                error: Error()
              }), GoldCtl) : GoldCtl).showEnterAnim();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJMYWJlbENvbXBvbmVudCIsIk1lbnVVSUJhc2UiLCJTa2lsbEN0bCIsIkdvbGRDdGwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiYnVpbGRVSU5vZGUiLCJ1cGRhdGVVSU5vZGUiLCJjb25zb2xlIiwibG9nIiwiZ2FtZUNvbnRyb2xsZXIiLCJvbiIsIm5vZGUiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50Iiwic2V0VUlOb2RlVG8zZFBvcyIsImdldENvbXBvbmVudCIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJ3YXZlTnVtIiwiY3VycmVudFdhdmVMYWJlbE5vZGUiLCJzdHJpbmciLCJzaG93RW50ZXJBbmltIiwidGhlbiIsInVpTm9kZSIsIm5vZGUzZCIsInBvcyIsImNhbWVyYU5vZGUiLCJjb252ZXJ0VG9VSU5vZGUiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwidGFyZ2V0IiwiZGVzdHJveSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBdUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxjLE9BQUFBLGM7Ozs7QUFDbEZDLE1BQUFBLFUscUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFEsZUFBQUEsUTs7QUFDQUMsTUFBQUEsTyxjQUFBQSxPOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUVSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUlSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQU1SVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUhEYSxXLEdBQW9CLEk7Z0JBQ3BCQyxZLEdBQXFCLEk7Ozs7Ozs7OztBQUs3QjtBQUNBO0FBRUE7QUFDQTtrQ0FDUTtBQUFBOztBQUNKQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLGlCQUFLQyxjQUFMLENBQW9CQyxFQUFwQixDQUF1Qix1QkFBdkIsRUFBZ0QsVUFBQ0MsSUFBRCxFQUFnQjtBQUM1RDtBQUNBO0FBQ0Esa0JBQUksQ0FBQ2YsT0FBTyxDQUFDLE1BQUksQ0FBQ1MsV0FBTixDQUFaLEVBQWdDO0FBQzVCLGdCQUFBLE1BQUksQ0FBQ0EsV0FBTCxHQUFtQlgsV0FBVyxDQUFDLE1BQUksQ0FBQ2tCLGdCQUFOLENBQTlCO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDUCxXQUFMLENBQWlCUSxNQUFqQixHQUEwQixNQUFJLENBQUNGLElBQS9CO0FBQ0g7O0FBRUQsY0FBQSxNQUFJLENBQUNHLGdCQUFMLENBQXNCLE1BQUksQ0FBQ1QsV0FBM0IsRUFBd0NNLElBQXhDOztBQUNBLGNBQUEsTUFBSSxDQUFDTixXQUFMLENBQWlCVSxZQUFqQjtBQUFBO0FBQUEsNENBQTBDQyxJQUExQyxDQUErQ0wsSUFBL0M7QUFDSCxhQVZEO0FBV0EsaUJBQUtGLGNBQUwsQ0FBb0JDLEVBQXBCLENBQXVCLGFBQXZCLEVBQXNDLFVBQUNPLFdBQUQsRUFBdUI7QUFDekQ7QUFDQSxrQkFBSSxDQUFDckIsT0FBTyxDQUFDLE1BQUksQ0FBQ1UsWUFBTixDQUFaLEVBQWlDO0FBQzdCLGdCQUFBLE1BQUksQ0FBQ0EsWUFBTCxHQUFvQlosV0FBVyxDQUFDLE1BQUksQ0FBQ3dCLGdCQUFOLENBQS9CO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDWixZQUFMLENBQWtCTyxNQUFsQixHQUEyQixNQUFJLENBQUNGLElBQWhDO0FBQ0g7O0FBQ0QsY0FBQSxNQUFJLENBQUNHLGdCQUFMLENBQXNCLE1BQUksQ0FBQ1IsWUFBM0IsRUFBeUNXLFdBQXpDO0FBQ0gsYUFQRDtBQVFBLGlCQUFLUixjQUFMLENBQW9CQyxFQUFwQixDQUF1QixvQkFBdkIsRUFBNkMsVUFBQ1MsT0FBRCxFQUFhO0FBQ3RELGNBQUEsTUFBSSxDQUFDQyxvQkFBTCxDQUEwQkwsWUFBMUIsQ0FBdUNsQixjQUF2QyxFQUF1RHdCLE1BQXZELEdBQWdFRixPQUFoRTtBQUNILGFBRkQ7QUFNSDs7OzRDQUNpQjtBQUFBOztBQUNkLG1CQUFPLEtBQUtSLElBQUwsQ0FBVUksWUFBVjtBQUFBO0FBQUEsc0NBQWlDTyxhQUFqQyxHQUFpREMsSUFBakQsQ0FBc0QsWUFBSTtBQUM3RCxxQkFBTyxNQUFJLENBQUNaLElBQUwsQ0FBVUksWUFBVjtBQUFBO0FBQUEsc0NBQWdDTyxhQUFoQyxFQUFQO0FBQ0gsYUFGTSxDQUFQO0FBR0g7OzsyQ0FDZ0JFLE0sRUFBY0MsTSxFQUFjO0FBQ3pDLGdCQUFJQyxHQUFKO0FBQ0FBLFlBQUFBLEdBQUcsR0FBRyxLQUFLQyxVQUFMLENBQWdCWixZQUFoQixDQUE2QnBCLGVBQTdCLEVBQThDaUMsZUFBOUMsQ0FBOERILE1BQU0sQ0FBQ0ksUUFBckUsRUFBK0UsS0FBS2xCLElBQXBGLENBQU47QUFDQWEsWUFBQUEsTUFBTSxDQUFDTSxXQUFQLENBQW1CSixHQUFuQjtBQUNIOzs7d0NBQ2FLLEssRUFBd0JDLFUsRUFBWTtBQUM5QyxvQkFBUUEsVUFBUjtBQUNJLG1CQUFLLFlBQUw7QUFDSTtBQUNBekIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJ1QixLQUFyQjtBQUNBQSxnQkFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE9BQWI7QUFDQSxxQkFBS3pCLGNBQUwsQ0FBb0IwQixJQUFwQixDQUF5QixtQkFBekI7QUFDQTs7QUFDSjtBQUNJO0FBUlI7QUFVSDs7OztRQXhFNkI1QyxTOzs7OztpQkFFQSxJOzs7Ozs7O2lCQUVJLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFJUixJOzs7Ozs7O2lCQU1VLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIENhbWVyYUNvbXBvbmVudCwgVmVjMywgaXNWYWxpZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgQW5pbWF0aW9uQ29tcG9uZW50LCBUd2VlbiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudS9NZW51VUlCYXNlJztcclxuaW1wb3J0IHsgU2tpbGxDdGwgfSBmcm9tICcuL1NraWxsQ3RsJztcclxuaW1wb3J0IHsgR29sZEN0bCB9IGZyb20gJy4vR29sZEN0bCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVUlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVpbGRUb3dlclByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHVwZGF0ZU1lbnVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdXBkYXRlVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudFdhdmVMYWJlbE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIHN0YXJ0R2FtZUNvdW50RG93bkFuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgZ29BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1aSBjb250cm9sbGVyIHN0YXJ0XCIpXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLWJhc2UtYnVpbGQtYmFzZVwiLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eOqeWutueCueS4reS6huWhlOeahOWfuuW6p1xyXG4gICAgICAgICAgICAvL+aYvuekuuW7uumAoHRvd2VyIOeahFVJXHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMuYnVpbGRVSU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKG5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXRvd2VyXCIsICh0YXJnZXRUb3dlcjogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eCueS4reS6hnRvd2VyXHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy51cGRhdGVNZW51UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy51cGRhdGVVSU5vZGUsIHRhcmdldFRvd2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJyZWZlci1jdXJyZW50LXdhdmVcIiwgKHdhdmVOdW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHdhdmVOdW07XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzaG93VUlFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tpbGxDdGwpLnNob3dFbnRlckFuaW0oKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdvbGRDdGwpLnNob3dFbnRlckFuaW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFVJTm9kZVRvM2RQb3ModWlOb2RlOiBOb2RlLCBub2RlM2Q6IE5vZGUpIHtcclxuICAgICAgICBsZXQgcG9zOiBWZWMzO1xyXG4gICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KS5jb252ZXJ0VG9VSU5vZGUobm9kZTNkLnBvc2l0aW9uLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHVpTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudDogQnV0dG9uQ29tcG9uZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0LWdhbWUnOlxyXG4gICAgICAgICAgICAgICAgLy/njqnlrrbngrnlh7vkuoblvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW1pdChcInBsYXllci1jbGljay1nYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19