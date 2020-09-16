System.register(["cc", "code-quality:cr", "./GameController.js", "./UI/WeaponUpdateCellPrefab.js", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, v3, view, Tween, SpriteComponent, instantiate, Prefab, GameController, WeaponUpdateCellPrefab, State, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, WeaponInfoCtl;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponUpdateCellPrefab(extras) {
    _reporterNs.report("WeaponUpdateCellPrefab", "./UI/WeaponUpdateCellPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
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
      v3 = _cc.v3;
      view = _cc.view;
      Tween = _cc.Tween;
      SpriteComponent = _cc.SpriteComponent;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_UIWeaponUpdateCellPrefabJs) {
      WeaponUpdateCellPrefab = _UIWeaponUpdateCellPrefabJs.WeaponUpdateCellPrefab;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4185fepR9NDl6TuAmrhxLTe", "WeaponInfoCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WeaponInfoCtl", WeaponInfoCtl = (_dec = ccclass('WeaponInfoCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: _crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
          error: Error()
        }), GameController) : GameController
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WeaponInfoCtl, _Component);

        function WeaponInfoCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WeaponInfoCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WeaponInfoCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "blockBgNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponInfoNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponInfoButton", _descriptor3, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();

          _initializerDefineProperty(_this, "gameController", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateWeaponInfoCellPrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponCellParentNode", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(WeaponInfoCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);
            this.state.setState("close");
            this.state.addState("play-open-anim", function () {
              //播放打开武器信息的UI
              console.log("播放武器信息ui打开的动画");

              _this2.hideButton().then(function () {
                return _this2.showWeaponInfoNode();
              }).then(function () {
                _this2.showBlockBgNode();
              }).then(function () {
                _this2.state.setState('open');
              });
            });
            this.state.addState("play-close-anim", function () {
              _this2.hideBlockBgNode().then(function () {
                return _this2.hideWeaponInfoNode();
              }).then(function () {
                return _this2.showWeaponInfoButtonn();
              }).then(function () {
                _this2.state.setState("close");
              });
            });
            this.node.on("close-weapon-info-layer", function () {
              //关闭武器信息页面
              if (_this2.state.getState() === 'open') {
                _this2.state.setState("play-close-anim");
              }
            });
            this.initWeaponData(); //
          }
        }, {
          key: "initWeaponData",
          value: function initWeaponData() {
            //初始化当前武器的相关信息
            var towerLevelData = this.gameController.playerData.getCurrentTowerLevelData();

            for (var i = 0; i < towerLevelData.length; i++) {
              var data = towerLevelData[i];
              var node = instantiate(this.updateWeaponInfoCellPrefab);
              node.parent = this.weaponCellParentNode;
              node.getComponent(_crd && WeaponUpdateCellPrefab === void 0 ? (_reportPossibleCrUseOfWeaponUpdateCellPrefab({
                error: Error()
              }), WeaponUpdateCellPrefab) : WeaponUpdateCellPrefab).setData(data);
              node.position = v3(0, -i * node.height - node.height * 0.5 - 30, 0);
              this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5;
            }
          }
        }, {
          key: "showWeaponInfoButtonn",
          value: function showWeaponInfoButtonn() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var v = view.getVisibleSize().width;
              var tw = new Tween(_this3.weaponInfoButton);
              tw.to(0.1, {
                position: v3(v * 0.5 - 100, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideWeaponInfoNode",
          value: function hideWeaponInfoNode() {
            var _this4 = this;

            //隐藏武器信息节点
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this4.weaponInfoNode);
              tw.to(0.2, {
                position: v3(_this4.weaponInfoNode.width * 0.5, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideBlockBgNode",
          value: function hideBlockBgNode() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              resolve();
              _this5.blockBgNode.active = false;
            });
          }
        }, {
          key: "showWeaponInfoNode",
          value: function showWeaponInfoNode() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              //
              var tw = new Tween(_this6.weaponInfoNode);
              tw.to(0.2, {
                position: v3(0, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showBlockBgNode",
          value: function showBlockBgNode() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.blockBgNode.active = true;
              var tw = new Tween(_this7.blockBgNode.getComponent(SpriteComponent)); // tw.to(0.2, {color: new Color(0,0,0,150)});

              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideButton",
          value: function hideButton() {
            var _this8 = this;

            var v = view.getVisibleSize().width;
            return new Promise(function (resolve, reject) {
              var buttonTw = new Tween(_this8.weaponInfoButton);
              buttonTw.to(0.1, {
                position: v3(v * 0.5 + 100, 0, 0)
              });
              buttonTw.call(function () {
                resolve();
              });
              buttonTw.start();
            });
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            switch (customData) {
              case 'show-weapon-info':
                console.log("武器信息按钮");

                if (this.state.getState() === 'close') {
                  //关闭状态
                  this.state.setState("play-open-anim");
                }

                break;

              case 'bg-node-click':
                console.log("背景节点点击 ");

                if (this.state.getState() === 'open') {
                  this.state.setState("play-close-anim");
                }

                break;

              default:
                break;
            }
          }
        }]);

        return WeaponInfoCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockBgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "weaponInfoNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weaponInfoButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updateWeaponInfoCellPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "weaponCellParentNode", [_dec7], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9XZWFwb25JbmZvQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwidjMiLCJ2aWV3IiwiVHdlZW4iLCJTcHJpdGVDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsIlByZWZhYiIsIkdhbWVDb250cm9sbGVyIiwiV2VhcG9uVXBkYXRlQ2VsbFByZWZhYiIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiV2VhcG9uSW5mb0N0bCIsInR5cGUiLCJzdGF0ZSIsIndlYXBvbkluZm9Ob2RlIiwicG9zaXRpb24iLCJ3aWR0aCIsInNldFN0YXRlIiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaGlkZUJ1dHRvbiIsInRoZW4iLCJzaG93V2VhcG9uSW5mb05vZGUiLCJzaG93QmxvY2tCZ05vZGUiLCJoaWRlQmxvY2tCZ05vZGUiLCJoaWRlV2VhcG9uSW5mb05vZGUiLCJzaG93V2VhcG9uSW5mb0J1dHRvbm4iLCJub2RlIiwib24iLCJnZXRTdGF0ZSIsImluaXRXZWFwb25EYXRhIiwidG93ZXJMZXZlbERhdGEiLCJnYW1lQ29udHJvbGxlciIsInBsYXllckRhdGEiLCJnZXRDdXJyZW50VG93ZXJMZXZlbERhdGEiLCJpIiwibGVuZ3RoIiwiZGF0YSIsInVwZGF0ZVdlYXBvbkluZm9DZWxsUHJlZmFiIiwicGFyZW50Iiwid2VhcG9uQ2VsbFBhcmVudE5vZGUiLCJnZXRDb21wb25lbnQiLCJzZXREYXRhIiwiaGVpZ2h0IiwieSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidiIsImdldFZpc2libGVTaXplIiwidHciLCJ3ZWFwb25JbmZvQnV0dG9uIiwidG8iLCJjYWxsIiwic3RhcnQiLCJibG9ja0JnTm9kZSIsImFjdGl2ZSIsImJ1dHRvblR3IiwiZXZlbnQiLCJjdXN0b21EYXRhIl0sIm1hcHBpbmdzIjoi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LEdBQVUsR0FBWCxFQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQURDLGVBQWpCO0FBR0FTLGNBQUFBLFFBQVEsQ0FBQ0osSUFBVCxDQUFjLFlBQU07QUFDaEJQLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBVyxjQUFBQSxRQUFRLENBQUNILEtBQVQ7QUFDSCxhQVRNLENBQVA7QUFXSDs7O3dDQUNhSSxLLEVBQU9DLFUsRUFBWTtBQUM3QixvQkFBUUEsVUFBUjtBQUNJLG1CQUFLLGtCQUFMO0FBQ0l6QyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFDQSxvQkFBSSxLQUFLUCxLQUFMLENBQVdpQixRQUFYLE9BQTBCLE9BQTlCLEVBQXVDO0FBQ25DO0FBQ0EsdUJBQUtqQixLQUFMLENBQVdJLFFBQVgsQ0FBb0IsZ0JBQXBCO0FBRUg7O0FBQ0Q7O0FBQ0osbUJBQUssZUFBTDtBQUNJRSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjs7QUFDQSxvQkFBSSxLQUFLUCxLQUFMLENBQVdpQixRQUFYLE9BQTBCLE1BQTlCLEVBQXNDO0FBQ2xDLHVCQUFLakIsS0FBTCxDQUFXSSxRQUFYLENBQW9CLGlCQUFwQjtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFoQlI7QUFrQkg7Ozs7UUF6SjhCbkIsUzs7Ozs7aUJBRUosSTs7Ozs7OztpQkFHRyxJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBSVEsSTs7Ozs7OztpQkFHSSxJOzs7Ozs7O2lCQUdSLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHYzLCB2aWV3LCBUd2VlbiwgU3ByaXRlQ29tcG9uZW50LCBDb2xvciwgaW5zdGFudGlhdGUsIFByZWZhYiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgV2VhcG9uVXBkYXRlQ2VsbFByZWZhYiB9IGZyb20gJy4vVUkvV2VhcG9uVXBkYXRlQ2VsbFByZWZhYic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdXZWFwb25JbmZvQ3RsJylcclxuZXhwb3J0IGNsYXNzIFdlYXBvbkluZm9DdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJsb2NrQmdOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgd2VhcG9uSW5mb05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25JbmZvQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogR2FtZUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHVwZGF0ZVdlYXBvbkluZm9DZWxsUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyB3ZWFwb25DZWxsUGFyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLndlYXBvbkluZm9Ob2RlLnBvc2l0aW9uID0gdjModGhpcy53ZWFwb25JbmZvTm9kZS53aWR0aCAqIDAuNSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LW9wZW4tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+5omT5byA5q2m5Zmo5L+h5oGv55qEVUlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7mrablmajkv6Hmga91aeaJk+W8gOeahOWKqOeUu1wiKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93V2VhcG9uSW5mb05vZGUoKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCbG9ja0JnTm9kZSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LWNsb3NlLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVCbG9ja0JnTm9kZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZVdlYXBvbkluZm9Ob2RlKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1dlYXBvbkluZm9CdXR0b25uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2xvc2Utd2VhcG9uLWluZm8tbGF5ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WFs+mXreatpuWZqOS/oeaBr+mhtemdolxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LWNsb3NlLWFuaW1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluaXRXZWFwb25EYXRhKCk7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIGluaXRXZWFwb25EYXRhKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5b2T5YmN5q2m5Zmo55qE55u45YWz5L+h5oGvXHJcbiAgICAgICAgbGV0IHRvd2VyTGV2ZWxEYXRhID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRUb3dlckxldmVsRGF0YSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG93ZXJMZXZlbERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0b3dlckxldmVsRGF0YVtpXTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnVwZGF0ZVdlYXBvbkluZm9DZWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLndlYXBvbkNlbGxQYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChXZWFwb25VcGRhdGVDZWxsUHJlZmFiKS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgLWkgKiBub2RlLmhlaWdodCAtIG5vZGUuaGVpZ2h0ICogMC41IC0gMzAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbkNlbGxQYXJlbnROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgbm9kZS5oZWlnaHQgKiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1dlYXBvbkluZm9CdXR0b25uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy53ZWFwb25JbmZvQnV0dG9uKTtcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModiAqIDAuNSAtIDEwMCwgMCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlV2VhcG9uSW5mb05vZGUoKSB7XHJcbiAgICAgICAgLy/pmpDol4/mrablmajkv6Hmga/oioLngrlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy53ZWFwb25JbmZvTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKHRoaXMud2VhcG9uSW5mb05vZGUud2lkdGggKiAwLjUsIDAsIDApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGhpZGVCbG9ja0JnTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tCZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dXZWFwb25JbmZvTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy53ZWFwb25JbmZvTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKDAsIDAsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0Jsb2NrQmdOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tCZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYmxvY2tCZ05vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkpO1xyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHtjb2xvcjogbmV3IENvbG9yKDAsMCwwLDE1MCl9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlQnV0dG9uKCkge1xyXG4gICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25UdyA9IG5ldyBUd2Vlbih0aGlzLndlYXBvbkluZm9CdXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25Udy50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2Myh2ICogMC41ICsgMTAwLCAwLCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBidXR0b25Udy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnV0dG9uVHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2hvdy13ZWFwb24taW5mbyc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuatpuWZqOS/oeaBr+aMiemSrlwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WFs+mXreeKtuaAgVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LW9wZW4tYW5pbVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmctbm9kZS1jbGljayc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiDjOaZr+iKgueCueeCueWHuyBcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1jbG9zZS1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19