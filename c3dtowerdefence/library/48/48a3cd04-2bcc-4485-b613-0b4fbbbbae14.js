System.register(["cc", "code-quality:cr", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, view, Tween, v3, SpriteComponent, State, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, InfoLayerCtlBase;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../util/State", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      view = _cc.view;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "48a3c0EK8xEhbYTC0+7u64U", "InfoLayerCtlBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("InfoLayerCtlBase", InfoLayerCtlBase = (_dec = ccclass('InfoLayerCtlBase'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: ""
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(InfoLayerCtlBase, _Component);

        function InfoLayerCtlBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, InfoLayerCtlBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfoLayerCtlBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "bectledLayerNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "blockBgNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ctlShowButton", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hideDir", _descriptor4, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          return _this;
        }

        _createClass(InfoLayerCtlBase, [{
          key: "start",
          // start () {
          //     // Your initialization goes here.
          // }
          value: function start() {
            var _this2 = this;

            // this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);
            this.bectledLayerNode.position = v3(this.bectledLayerNode.width * 0.5 * (this.hideDir === 'Right' ? 1 : -1), 0, 0);
            this.state.setState("close");
            this.state.addState("play-open-anim", function () {
              //播放打开武器信息的UI
              console.log("播放武器信息ui打开的动画");

              _this2.hideButton().then(function () {
                return _this2.showInfoLayerNode();
              }).then(function () {
                _this2.showBlockBgNode();
              }).then(function () {
                _this2.state.setState('open');
              });
            });
            this.state.addState("play-close-anim", function () {
              _this2.hideBlockBgNode().then(function () {
                return _this2.hideInfoLayerNode();
              }).then(function () {
                return _this2.showCtlInfoButtonn();
              }).then(function () {
                _this2.state.setState("close");
              });
            });
            this.node.on("close-weapon-info-layer", function () {
              //关闭武器信息页面
              if (_this2.state.getState() === 'open') {
                _this2.state.setState("play-close-anim");
              } // if (this.closeUICb){
              //     this.closeUICb();
              // }

            });
          }
        }, {
          key: "closeUICb",
          value: function closeUICb() {}
        }, {
          key: "showCtlInfoButtonn",
          value: function showCtlInfoButtonn() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var v = view.getVisibleSize().width;
              var tw = new Tween(_this3.ctlShowButton);
              var dir = _this3.hideDir === 'Right' ? 1 : -1;
              tw.to(0.1, {
                position: v3(v * 0.5 * dir - 120 * dir, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideInfoLayerNode",
          value: function hideInfoLayerNode() {
            var _this4 = this;

            //隐藏武器信息节点
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this4.bectledLayerNode);
              var dir = _this4.hideDir === 'Right' ? 1 : -1;
              tw.to(0.2, {
                position: v3(_this4.bectledLayerNode.width * 0.5 * dir, 0, 0)
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
          key: "showInfoLayerNode",
          value: function showInfoLayerNode() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              //
              // for (let i = 0 ; i < this.weaponIndoCellNodeList.length ; i ++){
              //     let node = this.weaponIndoCellNodeList[i];
              //     node.getComponent(WeaponUpdateCellPrefab).referCurrentDamage();
              // }
              var dir = _this6.hideDir === 'Right' ? 1 : -1;
              var widthDis = (view.getVisibleSize().width - 1280) / 2;
              var tw = new Tween(_this6.bectledLayerNode);
              tw.to(0.2, {
                position: v3(widthDis * dir, 0, 0)
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
              var buttonTw = new Tween(_this8.ctlShowButton);
              var dir = _this8.hideDir === 'Right' ? 1 : -1;
              buttonTw.to(0.1, {
                position: v3(v * 0.5 * dir + dir * 100, 0, 0)
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
            // find("GameController").emit("player-button-click-audio");
            switch (customData) {
              case 'show-info-layer':
                console.log("武器信息按钮");

                if (this.state.getState() === 'close') {
                  //关闭状态
                  this.state.setState("play-open-anim");
                  this.node.emit("close-tower-menu-ui"); //关闭升级建造塔相关的UI
                }

                break;

              case 'bg-node-click':
                console.log("背景节点点击 ", this.state.getState());

                if (this.state.getState() === 'open') {
                  this.state.setState("play-close-anim");
                }

                break;

              default:
                break;
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return InfoLayerCtlBase;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bectledLayerNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockBgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ctlShowButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideDir", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Right";
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9JbmZvTGF5ZXJDdGxCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwidmlldyIsIlR3ZWVuIiwidjMiLCJTcHJpdGVDb21wb25lbnQiLCJTdGF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkluZm9MYXllckN0bEJhc2UiLCJ0eXBlIiwic3RhdGUiLCJiZWN0bGVkTGF5ZXJOb2RlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhpZGVEaXIiLCJzZXRTdGF0ZSIsImFkZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhpZGVCdXR0b24iLCJ0aGVuIiwic2hvd0luZm9MYXllck5vZGUiLCJzaG93QmxvY2tCZ05vZGUiLCJoaWRlQmxvY2tCZ05vZGUiLCJoaWRlSW5mb0xheWVyTm9kZSIsInNob3dDdGxJbmZvQnV0dG9ubiIsIm5vZGUiLCJvbiIsImdldFN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2IiwiZ2V0VmlzaWJsZVNpemUiLCJ0dyIsImN0bFNob3dCdXR0b24iLCJkaXIiLCJ0byIsImNhbGwiLCJzdGFydCIsImJsb2NrQmdOb2RlIiwiYWN0aXZlIiwid2lkdGhEaXMiLCJnZXRDb21wb25lbnQiLCJidXR0b25UdyIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxlLE9BQUFBLGU7Ozs7QUFDOUNDLE1BQUFBLEss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QUFYLEVBQXZCOztBQUNBLG9CQUFJLEtBQUtsQixLQUFMLENBQVdrQixRQUFYLE9BQTBCLE1BQTlCLEVBQXNDO0FBQ2xDLHVCQUFLbEIsS0FBTCxDQUFXSyxRQUFYLENBQW9CLGlCQUFwQjtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFoQlI7QUFrQkgsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUFwS2tDaEIsUzs7Ozs7aUJBUUYsSTs7Ozs7OztpQkFFTCxJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR1osTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgdmlldywgVHdlZW4sIHYzLCBTcHJpdGVDb21wb25lbnQsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnSW5mb0xheWVyQ3RsQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBJbmZvTGF5ZXJDdGxCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBiZWN0bGVkTGF5ZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBibG9ja0JnTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN0bFNob3dCdXR0b246IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBoaWRlRGlyID0gXCJSaWdodFwiOyAvL+makOiXj+aXtuWAmeeahOS9jee9rlxyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIC8vIHN0YXJ0ICgpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMud2VhcG9uSW5mb05vZGUucG9zaXRpb24gPSB2Myh0aGlzLndlYXBvbkluZm9Ob2RlLndpZHRoICogMC41LCAwLCAwKTtcclxuICAgICAgICB0aGlzLmJlY3RsZWRMYXllck5vZGUucG9zaXRpb24gPSB2Myh0aGlzLmJlY3RsZWRMYXllck5vZGUud2lkdGggKiAwLjUgKiAodGhpcy5oaWRlRGlyID09PSAnUmlnaHQnID8gMSA6IC0xKSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LW9wZW4tYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+5omT5byA5q2m5Zmo5L+h5oGv55qEVUlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7mrablmajkv6Hmga91aeaJk+W8gOeahOWKqOeUu1wiKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlQnV0dG9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93SW5mb0xheWVyTm9kZSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Jsb2NrQmdOb2RlKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktY2xvc2UtYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUJsb2NrQmdOb2RlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oaWRlSW5mb0xheWVyTm9kZSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dDdGxJbmZvQnV0dG9ubigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImNsb3NlLXdlYXBvbi1pbmZvLWxheWVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lhbPpl63mrablmajkv6Hmga/pobXpnaJcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ29wZW4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1jbG9zZS1hbmltXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmNsb3NlVUlDYil7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNsb3NlVUlDYigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbG9zZVVJQ2IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0N0bEluZm9CdXR0b25uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jdGxTaG93QnV0dG9uKTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModiAqIDAuNSAqIGRpciAtIDEyMCAqIGRpciwgMCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUluZm9MYXllck5vZGUoKSB7XHJcbiAgICAgICAgLy/pmpDol4/mrablmajkv6Hmga/oioLngrlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5iZWN0bGVkTGF5ZXJOb2RlKTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModGhpcy5iZWN0bGVkTGF5ZXJOb2RlLndpZHRoICogMC41ICogZGlyLCAwLCAwKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVCbG9ja0JnTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tCZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dJbmZvTGF5ZXJOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdC5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBub2RlID0gdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikucmVmZXJDdXJyZW50RGFtYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aERpcyA9ICh2aWV3LmdldFZpc2libGVTaXplKCkud2lkdGggLSAxMjgwKSAvIDI7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmJlY3RsZWRMYXllck5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2Myh3aWR0aERpcyAqIGRpciwgMCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93QmxvY2tCZ05vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0JnTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ibG9ja0JnTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KSk7XHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwge2NvbG9yOiBuZXcgQ29sb3IoMCwwLDAsMTUwKX0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IHYgPSB2aWV3LmdldFZpc2libGVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvblR3ID0gbmV3IFR3ZWVuKHRoaXMuY3RsU2hvd0J1dHRvbik7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmhpZGVEaXIgPT09ICdSaWdodCcgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIGJ1dHRvblR3LnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKHYgKiAwLjUgKiBkaXIgKyBkaXIgKiAxMDAsIDAsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ1dHRvblR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBidXR0b25Udy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwicGxheWVyLWJ1dHRvbi1jbGljay1hdWRpb1wiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Nob3ctaW5mby1sYXllcic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuatpuWZqOS/oeaBr+aMiemSrlwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WFs+mXreeKtuaAgVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LW9wZW4tYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImNsb3NlLXRvd2VyLW1lbnUtdWlcIik7IC8v5YWz6Zet5Y2H57qn5bu66YCg5aGU55u45YWz55qEVUlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiZy1ub2RlLWNsaWNrJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6IOM5pmv6IqC54K554K55Ye7IFwiLCB0aGlzLnN0YXRlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ29wZW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktY2xvc2UtYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=