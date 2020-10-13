System.register(["cc", "code-quality:cr", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, view, Tween, v3, SpriteComponent, find, State, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, InfoLayerCtlBase;

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
      find = _cc.find;
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
                position: v3(v * 0.5 * dir - 100 * dir, 0, 0)
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
              var tw = new Tween(_this6.bectledLayerNode);
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
            find("GameController").emit("player-button-click-audio");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9JbmZvTGF5ZXJDdGxCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwidmlldyIsIlR3ZWVuIiwidjMiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJJbmZvTGF5ZXJDdGxCYXNlIiwidHlwZSIsInN0YXRlIiwiYmVjdGxlZExheWVyTm9kZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoaWRlRGlyIiwic2V0U3RhdGUiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJoaWRlQnV0dG9uIiwidGhlbiIsInNob3dJbmZvTGF5ZXJOb2RlIiwic2hvd0Jsb2NrQmdOb2RlIiwiaGlkZUJsb2NrQmdOb2RlIiwiaGlkZUluZm9MYXllck5vZGUiLCJzaG93Q3RsSW5mb0J1dHRvbm4iLCJub2RlIiwib24iLCJnZXRTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidiIsImdldFZpc2libGVTaXplIiwidHciLCJjdGxTaG93QnV0dG9uIiwiZGlyIiwidG8iLCJjYWxsIiwic3RhcnQiLCJibG9ja0JnTm9kZSIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsImJ1dHRvblR3IiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSSxPQUFBQSxJ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QUNIOztBQUNEOztBQUNKO0FBQ0k7QUFoQlI7QUFrQkgsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUFqS2tDakIsUzs7Ozs7aUJBUUYsSTs7Ozs7OztpQkFFTCxJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR1osTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgdmlldywgVHdlZW4sIHYzLCBTcHJpdGVDb21wb25lbnQgLGZpbmR9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdJbmZvTGF5ZXJDdGxCYXNlJylcclxuZXhwb3J0IGNsYXNzIEluZm9MYXllckN0bEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJlY3RsZWRMYXllck5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJsb2NrQmdOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3RsU2hvd0J1dHRvbjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogXCJcIiB9KVxyXG4gICAgcHVibGljIGhpZGVEaXIgPSBcIlJpZ2h0XCI7IC8v6ZqQ6JeP5pe25YCZ55qE5L2N572uXHJcblxyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgLy8gc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy53ZWFwb25JbmZvTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMud2VhcG9uSW5mb05vZGUud2lkdGggKiAwLjUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuYmVjdGxlZExheWVyTm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMuYmVjdGxlZExheWVyTm9kZS53aWR0aCAqIDAuNSAqICh0aGlzLmhpZGVEaXIgPT09ICdSaWdodCcgPyAxIDogLTEpLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktb3Blbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/mkq3mlL7miZPlvIDmrablmajkv6Hmga/nmoRVSVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaSreaUvuatpuWZqOS/oeaBr3Vp5omT5byA55qE5Yqo55S7XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dJbmZvTGF5ZXJOb2RlKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QmxvY2tCZ05vZGUoKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1jbG9zZS1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlQmxvY2tCZ05vZGUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZGVJbmZvTGF5ZXJOb2RlKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0N0bEluZm9CdXR0b25uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2xvc2Utd2VhcG9uLWluZm8tbGF5ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WFs+mXreatpuWZqOS/oeaBr+mhtemdolxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJwbGF5LWNsb3NlLWFuaW1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuY2xvc2VVSUNiKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2xvc2VVSUNiKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsb3NlVUlDYigpe1xyXG5cclxuICAgIH1cclxuICAgIHNob3dDdGxJbmZvQnV0dG9ubigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY3RsU2hvd0J1dHRvbik7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmhpZGVEaXIgPT09ICdSaWdodCcgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKHYgKiAwLjUgKiBkaXIgLSAxMDAgKiBkaXIsIDAsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVJbmZvTGF5ZXJOb2RlKCkge1xyXG4gICAgICAgIC8v6ZqQ6JeP5q2m5Zmo5L+h5oGv6IqC54K5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYmVjdGxlZExheWVyTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmhpZGVEaXIgPT09ICdSaWdodCcgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKHRoaXMuYmVjdGxlZExheWVyTm9kZS53aWR0aCAqIDAuNSAqIGRpciwgMCwgMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlQmxvY2tCZ05vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrQmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93SW5mb0xheWVyTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLndlYXBvbkluZG9DZWxsTm9kZUxpc3QubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q29tcG9uZW50KFdlYXBvblVwZGF0ZUNlbGxQcmVmYWIpLnJlZmVyQ3VycmVudERhbWFnZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmJlY3RsZWRMYXllck5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCAwLCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dCbG9ja0JnTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrQmdOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmJsb2NrQmdOb2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7Y29sb3I6IG5ldyBDb2xvcigwLDAsMCwxNTApfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGlkZUJ1dHRvbigpIHtcclxuICAgICAgICBsZXQgdiA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uVHcgPSBuZXcgVHdlZW4odGhpcy5jdGxTaG93QnV0dG9uKTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgYnV0dG9uVHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModiAqIDAuNSAqIGRpciArIGRpciAqIDEwMCwgMCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnV0dG9uVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ1dHRvblR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5ZXItYnV0dG9uLWNsaWNrLWF1ZGlvXCIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2hvdy1pbmZvLWxheWVyJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5q2m5Zmo5L+h5oGv5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5YWz6Zet54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktb3Blbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY2xvc2UtdG93ZXItbWVudS11aVwiKTsgLy/lhbPpl63ljYfnuqflu7rpgKDloZTnm7jlhbPnmoRVSVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JnLW5vZGUtY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLog4zmma/oioLngrnngrnlh7sgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1jbG9zZS1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==