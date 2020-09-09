System.register(["cc", "code-quality:cr", "./Menu/MenuUIBase.js", "./SkillCtl.js", "./GoldCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, CameraComponent, isValid, Tween, view, v3, MenuUIBase, SkillCtl, GoldCtl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, UIController;

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
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
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
      Tween = _cc.Tween;
      view = _cc.view;
      v3 = _cc.v3;
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
      }), _dec7 = property({
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

          _initializerDefineProperty(_this, "enemyInfoButton", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerInfoButton", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIController, [{
          key: "start",
          // @property({ type: Node })
          // public currentWaveLabelNode: Node = null;
          // @property({ type: Prefab })
          // public startGameCountDownAnimPrefab: Prefab = null;
          // @property({ type: Prefab })
          // public goAnimPrefab: Prefab = null;
          value: function start() {
            var _this2 = this;

            var screenSize = view.getVisibleSize();
            var width = screenSize.width;
            this.enemyInfoButton.position = v3(width * -0.5 - 100, 0, 0);
            this.towerInfoButton.position = v3(width * 0.5 + 100, 0, 0);
            console.log("ui controller start");
            this.gameController.on("touch-base-build-base", function (node) {
              //玩家点中了塔的基座
              //显示建造tower 的UI
              if (isValid(_this2.updateUINode)) {
                _this2.updateUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                  error: Error()
                }), MenuUIBase) : MenuUIBase).close();
              }

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
              if (isValid(_this2.buildUINode)) {
                _this2.buildUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                  error: Error()
                }), MenuUIBase) : MenuUIBase).close();
              }

              if (!isValid(_this2.updateUINode)) {
                _this2.updateUINode = instantiate(_this2.updateMenuPrefab);
                _this2.updateUINode.parent = _this2.node;
              }

              _this2.setUINodeTo3dPos(_this2.updateUINode, targetTower);

              _this2.updateUINode.getComponent(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
                error: Error()
              }), MenuUIBase) : MenuUIBase).open(targetTower);
            }); // this.node.on("update-gold-label", (goldCount: number)=>{
            //     this.node.getComponent(GoldCtl).updateGoldCountLabel(goldCount);
            // });
            // this.gameController.on("refer-current-wave", (waveNum) => {
            //     this.currentWaveLabelNode.getComponent(LabelComponent).string = waveNum;
            // });
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
            }).then(function () {
              return _this3.showButtonUIEnter();
            });
          }
        }, {
          key: "showButtonUIEnter",
          value: function showButtonUIEnter() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var list = [_this4.enemyInfoButton, _this4.towerInfoButton];
              var screenSize = view.getVisibleSize();
              var screenWidth = screenSize.width;
              var promiseList = [];

              var runAction = function runAction(node, index) {
                return new Promise(function (resolve, reject) {
                  var dir = index === 0 ? -1 : 1;
                  var tw = new Tween(node);
                  tw.to(0.4, {
                    position: v3(-dir * 100 + screenWidth * 0.5 * dir, 0, 0)
                  });
                  tw.call(function () {
                    console.log("进场结束");
                    resolve();
                  });
                  tw.start();
                });
              };

              for (var i = 0; i < list.length; i++) {
                var node = list[i];
                promiseList.push(runAction(node, i));
              }

              Promise.all(promiseList).then(function () {
                resolve();
              });
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
            console.log("on button click", customData);

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "towerInfoButton", [_dec7], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIkNhbWVyYUNvbXBvbmVudCIsImlzVmFsaWQiLCJUd2VlbiIsInZpZXciLCJ2MyIsIk1lbnVVSUJhc2UiLCJTa2lsbEN0bCIsIkdvbGRDdGwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUNvbnRyb2xsZXIiLCJ0eXBlIiwiYnVpbGRVSU5vZGUiLCJ1cGRhdGVVSU5vZGUiLCJzY3JlZW5TaXplIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsImVuZW15SW5mb0J1dHRvbiIsInBvc2l0aW9uIiwidG93ZXJJbmZvQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImdhbWVDb250cm9sbGVyIiwib24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiY2xvc2UiLCJidWlsZFRvd2VyUHJlZmFiIiwicGFyZW50Iiwic2V0VUlOb2RlVG8zZFBvcyIsIm9wZW4iLCJ0YXJnZXRUb3dlciIsInVwZGF0ZU1lbnVQcmVmYWIiLCJzaG93RW50ZXJBbmltIiwidGhlbiIsInNob3dCdXR0b25VSUVudGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsaXN0Iiwic2NyZWVuV2lkdGgiLCJwcm9taXNlTGlzdCIsInJ1bkFjdGlvbiIsImluZGV4IiwiZGlyIiwidHciLCJ0byIsImNhbGwiLCJzdGFydCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiYWxsIiwidWlOb2RlIiwibm9kZTNkIiwicG9zIiwiY2FtZXJhTm9kZSIsImNvbnZlcnRUb1VJTm9kZSIsInNldFBvc2l0aW9uIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwidGFyZ2V0IiwiZGVzdHJveSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUF1QkMsTUFBQUEsTyxPQUFBQSxPO0FBQTBFQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTs7OztBQUNoS0MsTUFBQUEsVSxxQkFBQUEsVTs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROztBQUNBQyxNQUFBQSxPLGNBQUFBLE87Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCYixVLENBQXRCYSxPO0FBQVNDLE1BQUFBLFEsR0FBYWQsVSxDQUFiYyxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFVBRVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBSVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFVBTVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFVBRVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTERlLFcsR0FBb0IsSTtnQkFDcEJDLFksR0FBcUIsSTs7Ozs7Ozs7Ozs7QUFPN0I7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO2tDQUNRO0FBQUE7O0FBQ0osZ0JBQUlDLFVBQVUsR0FBR1gsSUFBSSxDQUFDWSxjQUFMLEVBQWpCO0FBQ0EsZ0JBQUlDLEtBQUssR0FBR0YsVUFBVSxDQUFDRSxLQUF2QjtBQUNBLGlCQUFLQyxlQUFMLENBQXFCQyxRQUFyQixHQUFnQ2QsRUFBRSxDQUFDWSxLQUFLLEdBQUcsQ0FBQyxHQUFULEdBQWUsR0FBaEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBbEM7QUFDQSxpQkFBS0csZUFBTCxDQUFxQkQsUUFBckIsR0FBZ0NkLEVBQUUsQ0FBQ1ksS0FBSyxHQUFHLEdBQVIsR0FBYyxHQUFmLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQWxDO0FBRUFJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0EsaUJBQUtDLGNBQUwsQ0FBb0JDLEVBQXBCLENBQXVCLHVCQUF2QixFQUFnRCxVQUFDQyxJQUFELEVBQWdCO0FBQzVEO0FBQ0E7QUFDQSxrQkFBSXZCLE9BQU8sQ0FBQyxNQUFJLENBQUNZLFlBQU4sQ0FBWCxFQUFnQztBQUM1QixnQkFBQSxNQUFJLENBQUNBLFlBQUwsQ0FBa0JZLFlBQWxCO0FBQUE7QUFBQSw4Q0FBMkNDLEtBQTNDO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQ3pCLE9BQU8sQ0FBQyxNQUFJLENBQUNXLFdBQU4sQ0FBWixFQUFnQztBQUM1QixnQkFBQSxNQUFJLENBQUNBLFdBQUwsR0FBbUJiLFdBQVcsQ0FBQyxNQUFJLENBQUM0QixnQkFBTixDQUE5QjtBQUNBLGdCQUFBLE1BQUksQ0FBQ2YsV0FBTCxDQUFpQmdCLE1BQWpCLEdBQTBCLE1BQUksQ0FBQ0osSUFBL0I7QUFDSDs7QUFFRCxjQUFBLE1BQUksQ0FBQ0ssZ0JBQUwsQ0FBc0IsTUFBSSxDQUFDakIsV0FBM0IsRUFBd0NZLElBQXhDOztBQUNBLGNBQUEsTUFBSSxDQUFDWixXQUFMLENBQWlCYSxZQUFqQjtBQUFBO0FBQUEsNENBQTBDSyxJQUExQyxDQUErQ04sSUFBL0M7QUFDSCxhQWJEO0FBY0EsaUJBQUtGLGNBQUwsQ0FBb0JDLEVBQXBCLENBQXVCLGFBQXZCLEVBQXNDLFVBQUNRLFdBQUQsRUFBdUI7QUFDekQ7QUFDQSxrQkFBSTlCLE9BQU8sQ0FBQyxNQUFJLENBQUNXLFdBQU4sQ0FBWCxFQUErQjtBQUMzQixnQkFBQSxNQUFJLENBQUNBLFdBQUwsQ0FBaUJhLFlBQWpCO0FBQUE7QUFBQSw4Q0FBMENDLEtBQTFDO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQ3pCLE9BQU8sQ0FBQyxNQUFJLENBQUNZLFlBQU4sQ0FBWixFQUFpQztBQUM3QixnQkFBQSxNQUFJLENBQUNBLFlBQUwsR0FBb0JkLFdBQVcsQ0FBQyxNQUFJLENBQUNpQyxnQkFBTixDQUEvQjtBQUNBLGdCQUFBLE1BQUksQ0FBQ25CLFlBQUwsQ0FBa0JlLE1BQWxCLEdBQTJCLE1BQUksQ0FBQ0osSUFBaEM7QUFDSDs7QUFDRCxjQUFBLE1BQUksQ0FBQ0ssZ0JBQUwsQ0FBc0IsTUFBSSxDQUFDaEIsWUFBM0IsRUFBeUNrQixXQUF6Qzs7QUFDQSxjQUFBLE1BQUksQ0FBQ2xCLFlBQUwsQ0FBa0JZLFlBQWxCO0FBQUE7QUFBQSw0Q0FBMkNLLElBQTNDLENBQWdEQyxXQUFoRDtBQUNILGFBWEQsRUFyQkksQ0FpQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUg7Ozs0Q0FDaUI7QUFBQTs7QUFDZCxtQkFBTyxLQUFLUCxJQUFMLENBQVVDLFlBQVY7QUFBQTtBQUFBLHNDQUFpQ1EsYUFBakMsR0FBaURDLElBQWpELENBQXNELFlBQU07QUFDL0QscUJBQU8sTUFBSSxDQUFDVixJQUFMLENBQVVDLFlBQVY7QUFBQTtBQUFBLHNDQUFnQ1EsYUFBaEMsRUFBUDtBQUNILGFBRk0sRUFFSkMsSUFGSSxDQUVDLFlBQU07QUFDVixxQkFBTyxNQUFJLENBQUNDLGlCQUFMLEVBQVA7QUFDSCxhQUpNLENBQVA7QUFLSDs7OzhDQUNtQjtBQUFBOztBQUNoQixtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJQyxJQUFJLEdBQUcsQ0FBQyxNQUFJLENBQUN0QixlQUFOLEVBQXVCLE1BQUksQ0FBQ0UsZUFBNUIsQ0FBWDtBQUNBLGtCQUFJTCxVQUFVLEdBQUdYLElBQUksQ0FBQ1ksY0FBTCxFQUFqQjtBQUNBLGtCQUFJeUIsV0FBVyxHQUFHMUIsVUFBVSxDQUFDRSxLQUE3QjtBQUNBLGtCQUFJeUIsV0FBVyxHQUFHLEVBQWxCOztBQUNBLGtCQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDbEIsSUFBRCxFQUFPbUIsS0FBUCxFQUFpQjtBQUMvQix1QkFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHNCQUFJTSxHQUFHLEdBQUdELEtBQUssS0FBSyxDQUFWLEdBQWMsQ0FBQyxDQUFmLEdBQW1CLENBQTdCO0FBQ0Esc0JBQUlFLEVBQUUsR0FBRyxJQUFJM0MsS0FBSixDQUFVc0IsSUFBVixDQUFUO0FBQ0FxQixrQkFBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1A1QixvQkFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUMsQ0FBRXdDLEdBQUYsR0FBUSxHQUFSLEdBQWNKLFdBQVcsR0FBRyxHQUFkLEdBQW9CSSxHQUFuQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQztBQURMLG1CQUFYO0FBR0FDLGtCQUFBQSxFQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFNO0FBQ1YzQixvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBZ0Isb0JBQUFBLE9BQU87QUFDVixtQkFIRDtBQUlBUSxrQkFBQUEsRUFBRSxDQUFDRyxLQUFIO0FBQ0gsaUJBWE0sQ0FBUDtBQWFILGVBZEQ7O0FBZUEsbUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsSUFBSSxDQUFDVyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxvQkFBSXpCLElBQUksR0FBR2UsSUFBSSxDQUFDVSxDQUFELENBQWY7QUFDQVIsZ0JBQUFBLFdBQVcsQ0FBQ1UsSUFBWixDQUFpQlQsU0FBUyxDQUFDbEIsSUFBRCxFQUFPeUIsQ0FBUCxDQUExQjtBQUNIOztBQUNEYixjQUFBQSxPQUFPLENBQUNnQixHQUFSLENBQVlYLFdBQVosRUFBeUJQLElBQXpCLENBQThCLFlBQU07QUFDaENHLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdILGFBM0JNLENBQVA7QUE0Qkg7OzsyQ0FDZ0JnQixNLEVBQWNDLE0sRUFBYztBQUN6QyxnQkFBSUMsR0FBSjtBQUNBQSxZQUFBQSxHQUFHLEdBQUcsS0FBS0MsVUFBTCxDQUFnQi9CLFlBQWhCLENBQTZCekIsZUFBN0IsRUFBOEN5RCxlQUE5QyxDQUE4REgsTUFBTSxDQUFDcEMsUUFBckUsRUFBK0UsS0FBS00sSUFBcEYsQ0FBTjtBQUNBNkIsWUFBQUEsTUFBTSxDQUFDSyxXQUFQLENBQW1CSCxHQUFuQjtBQUNIOzs7d0NBQ2FJLEssRUFBd0JDLFUsRUFBWTtBQUM5Q3hDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCdUMsVUFBL0I7O0FBQ0Esb0JBQVFBLFVBQVI7QUFDSSxtQkFBSyxZQUFMO0FBQ0k7QUFDQXhDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCc0MsS0FBckI7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxPQUFiO0FBQ0EscUJBQUt4QyxjQUFMLENBQW9CeUMsSUFBcEIsQ0FBeUIsbUJBQXpCO0FBQ0E7O0FBQ0o7QUFDSTtBQVJSO0FBVUg7Ozs7UUE3SDZCbkUsUzs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBSVIsSTs7Ozs7OztpQkFNSyxJOzs7Ozs7O2lCQUVBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIENhbWVyYUNvbXBvbmVudCwgVmVjMywgaXNWYWxpZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgQW5pbWF0aW9uQ29tcG9uZW50LCBUd2VlbiwgdmlldywgdjMgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IE1lbnVVSUJhc2UgfSBmcm9tICcuL01lbnUvTWVudVVJQmFzZSc7XHJcbmltcG9ydCB7IFNraWxsQ3RsIH0gZnJvbSAnLi9Ta2lsbEN0bCc7XHJcbmltcG9ydCB7IEdvbGRDdGwgfSBmcm9tICcuL0dvbGRDdGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1VJQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBVSUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGJ1aWxkVG93ZXJQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVNZW51UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFVJTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVVJTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb0J1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJJbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgY3VycmVudFdhdmVMYWJlbE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgLy8gcHVibGljIHN0YXJ0R2FtZUNvdW50RG93bkFuaW1QcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgZ29BbmltUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gc2NyZWVuU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmVuZW15SW5mb0J1dHRvbi5wb3NpdGlvbiA9IHYzKHdpZHRoICogLTAuNSAtIDEwMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy50b3dlckluZm9CdXR0b24ucG9zaXRpb24gPSB2Myh3aWR0aCAqIDAuNSArIDEwMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidWkgY29udHJvbGxlciBzdGFydFwiKVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIub24oXCJ0b3VjaC1iYXNlLWJ1aWxkLWJhc2VcIiwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrbngrnkuK3kuobloZTnmoTln7rluqdcclxuICAgICAgICAgICAgLy/mmL7npLrlu7rpgKB0b3dlciDnmoRVSVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLmJ1aWxkVUlOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFVJTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRVSU5vZGVUbzNkUG9zKHRoaXMuYnVpbGRVSU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5vcGVuKG5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInRvdWNoLXRvd2VyXCIsICh0YXJnZXRUb3dlcjogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eCueS4reS6hnRvd2VyXHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuYnVpbGRVSU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkVUlOb2RlLmdldENvbXBvbmVudChNZW51VUlCYXNlKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCh0aGlzLnVwZGF0ZVVJTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlID0gaW5zdGFudGlhdGUodGhpcy51cGRhdGVNZW51UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVUlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFVJTm9kZVRvM2RQb3ModGhpcy51cGRhdGVVSU5vZGUsIHRhcmdldFRvd2VyKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVSU5vZGUuZ2V0Q29tcG9uZW50KE1lbnVVSUJhc2UpLm9wZW4odGFyZ2V0VG93ZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgKGdvbGRDb3VudDogbnVtYmVyKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdvbGRDdGwpLnVwZGF0ZUdvbGRDb3VudExhYmVsKGdvbGRDb3VudCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCAod2F2ZU51bSkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRXYXZlTGFiZWxOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gd2F2ZU51bTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNob3dVSUVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChTa2lsbEN0bCkuc2hvd0VudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChHb2xkQ3RsKS5zaG93RW50ZXJBbmltKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dCdXR0b25VSUVudGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaG93QnV0dG9uVUlFbnRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFt0aGlzLmVuZW15SW5mb0J1dHRvbiwgdGhpcy50b3dlckluZm9CdXR0b25dXHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSBzY3JlZW5TaXplLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgcnVuQWN0aW9uID0gKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSBpbmRleCA9PT0gMCA/IC0xIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcudG8oMC40LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygtIGRpciAqIDEwMCArIHNjcmVlbldpZHRoICogMC41ICogZGlyLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+Wcuue7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChydW5BY3Rpb24obm9kZSwgaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VMaXN0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0VUlOb2RlVG8zZFBvcyh1aU5vZGU6IE5vZGUsIG5vZGUzZDogTm9kZSkge1xyXG4gICAgICAgIGxldCBwb3M6IFZlYzM7XHJcbiAgICAgICAgcG9zID0gdGhpcy5jYW1lcmFOb2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpLmNvbnZlcnRUb1VJTm9kZShub2RlM2QucG9zaXRpb24sIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdWlOb2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGJ1dHRvbiBjbGlja1wiLCBjdXN0b21EYXRhKTtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQtZ2FtZSc6XHJcbiAgICAgICAgICAgICAgICAvL+eOqeWutueCueWHu+S6huW8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5lbWl0KFwicGxheWVyLWNsaWNrLWdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=