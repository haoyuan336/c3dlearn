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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9JbmZvTGF5ZXJDdGxCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwidmlldyIsIlR3ZWVuIiwidjMiLCJTcHJpdGVDb21wb25lbnQiLCJTdGF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkluZm9MYXllckN0bEJhc2UiLCJ0eXBlIiwic3RhdGUiLCJiZWN0bGVkTGF5ZXJOb2RlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhpZGVEaXIiLCJzZXRTdGF0ZSIsImFkZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhpZGVCdXR0b24iLCJ0aGVuIiwic2hvd0luZm9MYXllck5vZGUiLCJzaG93QmxvY2tCZ05vZGUiLCJoaWRlQmxvY2tCZ05vZGUiLCJoaWRlSW5mb0xheWVyTm9kZSIsInNob3dDdGxJbmZvQnV0dG9ubiIsIm5vZGUiLCJvbiIsImdldFN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2IiwiZ2V0VmlzaWJsZVNpemUiLCJ0dyIsImN0bFNob3dCdXR0b24iLCJkaXIiLCJ0byIsImNhbGwiLCJzdGFydCIsImJsb2NrQmdOb2RlIiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50IiwiYnV0dG9uVHciLCJldmVudCIsImN1c3RvbURhdGEiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsZSxPQUFBQSxlOzs7O0FBQzlDQyxNQUFBQSxLLGdCQUFBQSxLOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDLFVBUUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBR1JPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBR1JPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHRkMsSyxHQUFlO0FBQUE7QUFBQSwrQjs7Ozs7O0FBQ3RCO0FBQ0E7QUFDQTtrQ0FDUTtBQUFBOztBQUNKO0FBQ0EsaUJBQUtDLGdCQUFMLENBQXNCQyxRQUF0QixHQUFpQ1QsRUFBRSxDQUFDLEtBQUtRLGdCQUFMLENBQXNCRSxLQUF0QixHQUE4QixHQUE5QixJQUFxQyxLQUFLQyxPQUFMLEtBQWlCLE9BQWpCLEdBQTJCLENBQTNCLEdBQStCLENBQUMsQ0FBckUsQ0FBRCxFQUEwRSxDQUExRSxFQUE2RSxDQUE3RSxDQUFuQztBQUNBLGlCQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsT0FBcEI7QUFDQSxpQkFBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CLGdCQUFwQixFQUFzQyxZQUFNO0FBQ3hDO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7O0FBQ0EsY0FBQSxNQUFJLENBQUNDLFVBQUwsR0FBa0JDLElBQWxCLENBQXVCLFlBQU07QUFDekIsdUJBQU8sTUFBSSxDQUFDQyxpQkFBTCxFQUFQO0FBQ0gsZUFGRCxFQUVHRCxJQUZILENBRVEsWUFBTTtBQUNWLGdCQUFBLE1BQUksQ0FBQ0UsZUFBTDtBQUNILGVBSkQsRUFJR0YsSUFKSCxDQUlRLFlBQU07QUFDVixnQkFBQSxNQUFJLENBQUNWLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixNQUFwQjtBQUNILGVBTkQ7QUFPSCxhQVZEO0FBV0EsaUJBQUtMLEtBQUwsQ0FBV00sUUFBWCxDQUFvQixpQkFBcEIsRUFBdUMsWUFBTTtBQUN6QyxjQUFBLE1BQUksQ0FBQ08sZUFBTCxHQUF1QkgsSUFBdkIsQ0FBNEIsWUFBTTtBQUM5Qix1QkFBTyxNQUFJLENBQUNJLGlCQUFMLEVBQVA7QUFDSCxlQUZELEVBRUdKLElBRkgsQ0FFUSxZQUFNO0FBQ1YsdUJBQU8sTUFBSSxDQUFDSyxrQkFBTCxFQUFQO0FBQ0gsZUFKRCxFQUlHTCxJQUpILENBSVEsWUFBTTtBQUNWLGdCQUFBLE1BQUksQ0FBQ1YsS0FBTCxDQUFXSyxRQUFYLENBQW9CLE9BQXBCO0FBQ0gsZUFORDtBQU9ILGFBUkQ7QUFTQSxpQkFBS1csSUFBTCxDQUFVQyxFQUFWLENBQWEseUJBQWIsRUFBd0MsWUFBTTtBQUMxQztBQUNBLGtCQUFJLE1BQUksQ0FBQ2pCLEtBQUwsQ0FBV2tCLFFBQVgsT0FBMEIsTUFBOUIsRUFBc0M7QUFDbEMsZ0JBQUEsTUFBSSxDQUFDbEIsS0FBTCxDQUFXSyxRQUFYLENBQW9CLGlCQUFwQjtBQUNILGVBSnlDLENBSzFDO0FBQ0E7QUFDQTs7QUFDSCxhQVJEO0FBU0g7OztzQ0FDVSxDQUVWOzs7K0NBQ29CO0FBQUE7O0FBQ2pCLG1CQUFPLElBQUljLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUlDLENBQUMsR0FBRy9CLElBQUksQ0FBQ2dDLGNBQUwsR0FBc0JwQixLQUE5QjtBQUNBLGtCQUFJcUIsRUFBRSxHQUFHLElBQUloQyxLQUFKLENBQVUsTUFBSSxDQUFDaUMsYUFBZixDQUFUO0FBQ0Esa0JBQUlDLEdBQUcsR0FBRyxNQUFJLENBQUN0QixPQUFMLEtBQWlCLE9BQWpCLEdBQTJCLENBQTNCLEdBQStCLENBQUMsQ0FBMUM7QUFDQW9CLGNBQUFBLEVBQUUsQ0FBQ0csRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQekIsZ0JBQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDNkIsQ0FBQyxHQUFHLEdBQUosR0FBVUksR0FBVixHQUFnQixNQUFNQSxHQUF2QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQURMLGVBQVg7QUFHQUYsY0FBQUEsRUFBRSxDQUFDSSxJQUFILENBQVEsWUFBTTtBQUNWUixnQkFBQUEsT0FBTztBQUNWLGVBRkQ7QUFHQUksY0FBQUEsRUFBRSxDQUFDSyxLQUFIO0FBQ0gsYUFYTSxDQUFQO0FBWUg7Ozs4Q0FFbUI7QUFBQTs7QUFDaEI7QUFDQSxtQkFBTyxJQUFJVixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJRyxFQUFFLEdBQUcsSUFBSWhDLEtBQUosQ0FBVSxNQUFJLENBQUNTLGdCQUFmLENBQVQ7QUFDQSxrQkFBSXlCLEdBQUcsR0FBRyxNQUFJLENBQUN0QixPQUFMLEtBQWlCLE9BQWpCLEdBQTJCLENBQTNCLEdBQStCLENBQUMsQ0FBMUM7QUFDQW9CLGNBQUFBLEVBQUUsQ0FBQ0csRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQekIsZ0JBQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDLE1BQUksQ0FBQ1EsZ0JBQUwsQ0FBc0JFLEtBQXRCLEdBQThCLEdBQTlCLEdBQW9DdUIsR0FBckMsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0M7QUFETCxlQUFYO0FBR0FGLGNBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU07QUFDVlIsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FJLGNBQUFBLEVBQUUsQ0FBQ0ssS0FBSDtBQUNILGFBVk0sQ0FBUDtBQVdIOzs7NENBQ2lCO0FBQUE7O0FBQ2QsbUJBQU8sSUFBSVYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0QsY0FBQUEsT0FBTztBQUNQLGNBQUEsTUFBSSxDQUFDVSxXQUFMLENBQWlCQyxNQUFqQixHQUEwQixLQUExQjtBQUNILGFBSE0sQ0FBUDtBQUlIOzs7OENBQ21CO0FBQUE7O0FBQ2hCLG1CQUFPLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFJRyxFQUFFLEdBQUcsSUFBSWhDLEtBQUosQ0FBVSxNQUFJLENBQUNTLGdCQUFmLENBQVQ7QUFDQXVCLGNBQUFBLEVBQUUsQ0FBQ0csRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQekIsZ0JBQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQURMLGVBQVg7QUFHQStCLGNBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFlBQU07QUFDVlIsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FJLGNBQUFBLEVBQUUsQ0FBQ0ssS0FBSDtBQUNILGFBZE0sQ0FBUDtBQWVIOzs7NENBQ2lCO0FBQUE7O0FBQ2QsbUJBQU8sSUFBSVYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxjQUFBLE1BQUksQ0FBQ1MsV0FBTCxDQUFpQkMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxrQkFBSVAsRUFBRSxHQUFHLElBQUloQyxLQUFKLENBQVUsTUFBSSxDQUFDc0MsV0FBTCxDQUFpQkUsWUFBakIsQ0FBOEJ0QyxlQUE5QixDQUFWLENBQVQsQ0FGb0MsQ0FHcEM7O0FBQ0E4QixjQUFBQSxFQUFFLENBQUNJLElBQUgsQ0FBUSxZQUFNO0FBQ1ZSLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBSSxjQUFBQSxFQUFFLENBQUNLLEtBQUg7QUFDSCxhQVJNLENBQVA7QUFTSDs7O3VDQUNZO0FBQUE7O0FBQ1QsZ0JBQUlQLENBQUMsR0FBRy9CLElBQUksQ0FBQ2dDLGNBQUwsR0FBc0JwQixLQUE5QjtBQUNBLG1CQUFPLElBQUlnQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGtCQUFJWSxRQUFRLEdBQUcsSUFBSXpDLEtBQUosQ0FBVSxNQUFJLENBQUNpQyxhQUFmLENBQWY7QUFDQSxrQkFBSUMsR0FBRyxHQUFHLE1BQUksQ0FBQ3RCLE9BQUwsS0FBaUIsT0FBakIsR0FBMkIsQ0FBM0IsR0FBK0IsQ0FBQyxDQUExQztBQUNBNkIsY0FBQUEsUUFBUSxDQUFDTixFQUFULENBQVksR0FBWixFQUFpQjtBQUNiekIsZ0JBQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDNkIsQ0FBQyxHQUFHLEdBQUosR0FBVUksR0FBVixHQUFnQkEsR0FBRyxHQUFHLEdBQXZCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBREMsZUFBakI7QUFHQU8sY0FBQUEsUUFBUSxDQUFDTCxJQUFULENBQWMsWUFBTTtBQUNoQlIsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FhLGNBQUFBLFFBQVEsQ0FBQ0osS0FBVDtBQUNILGFBVk0sQ0FBUDtBQVlIOzs7d0NBQ2FLLEssRUFBT0MsVSxFQUFZO0FBQzdCLG9CQUFRQSxVQUFSO0FBQ0ksbUJBQUssaUJBQUw7QUFDSTVCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLG9CQUFJLEtBQUtSLEtBQUwsQ0FBV2tCLFFBQVgsT0FBMEIsT0FBOUIsRUFBdUM7QUFDbkM7QUFDQSx1QkFBS2xCLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixnQkFBcEI7QUFDQSx1QkFBS1csSUFBTCxDQUFVb0IsSUFBVixDQUFlLHFCQUFmLEVBSG1DLENBR0k7QUFDMUM7O0FBQ0Q7O0FBQ0osbUJBQUssZUFBTDtBQUNJN0IsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBS1IsS0FBTCxDQUFXa0IsUUFBWCxFQUF2Qjs7QUFDQSxvQkFBSSxLQUFLbEIsS0FBTCxDQUFXa0IsUUFBWCxPQUEwQixNQUE5QixFQUFzQztBQUNsQyx1QkFBS2xCLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixpQkFBcEI7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBaEJSO0FBa0JILFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7O1FBL0prQ2hCLFM7Ozs7O2lCQVFGLEk7Ozs7Ozs7aUJBRUwsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdaLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHZpZXcsIFR3ZWVuLCB2MywgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3V0aWwvU3RhdGUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0luZm9MYXllckN0bEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgSW5mb0xheWVyQ3RsQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYmVjdGxlZExheWVyTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYmxvY2tCZ05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdGxTaG93QnV0dG9uOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgaGlkZURpciA9IFwiUmlnaHRcIjsgLy/pmpDol4/ml7blgJnnmoTkvY3nva5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLndlYXBvbkluZm9Ob2RlLnBvc2l0aW9uID0gdjModGhpcy53ZWFwb25JbmZvTm9kZS53aWR0aCAqIDAuNSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5iZWN0bGVkTGF5ZXJOb2RlLnBvc2l0aW9uID0gdjModGhpcy5iZWN0bGVkTGF5ZXJOb2RlLndpZHRoICogMC41ICogKHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMSksIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZVwiKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicGxheS1vcGVuLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aSreaUvuaJk+W8gOatpuWZqOS/oeaBr+eahFVJXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5q2m5Zmo5L+h5oGvdWnmiZPlvIDnmoTliqjnlLtcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUJ1dHRvbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0luZm9MYXllck5vZGUoKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCbG9ja0JnTm9kZSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJwbGF5LWNsb3NlLWFuaW1cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVCbG9ja0JnTm9kZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZUluZm9MYXllck5vZGUoKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93Q3RsSW5mb0J1dHRvbm4oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJjbG9zZS13ZWFwb24taW5mby1sYXllclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5YWz6Zet5q2m5Zmo5L+h5oGv6aG16Z2iXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvcGVuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktY2xvc2UtYW5pbVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5jbG9zZVVJQ2Ipe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jbG9zZVVJQ2IoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VVSUNiKCl7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0N0bEluZm9CdXR0b25uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jdGxTaG93QnV0dG9uKTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModiAqIDAuNSAqIGRpciAtIDEwMCAqIGRpciwgMCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUluZm9MYXllck5vZGUoKSB7XHJcbiAgICAgICAgLy/pmpDol4/mrablmajkv6Hmga/oioLngrlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5iZWN0bGVkTGF5ZXJOb2RlKTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuaGlkZURpciA9PT0gJ1JpZ2h0JyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModGhpcy5iZWN0bGVkTGF5ZXJOb2RlLndpZHRoICogMC41ICogZGlyLCAwLCAwKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVCbG9ja0JnTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tCZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dJbmZvTGF5ZXJOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdC5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBub2RlID0gdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikucmVmZXJDdXJyZW50RGFtYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYmVjdGxlZExheWVyTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKDAsIDAsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0Jsb2NrQmdOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tCZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuYmxvY2tCZ05vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkpO1xyXG4gICAgICAgICAgICAvLyB0dy50bygwLjIsIHtjb2xvcjogbmV3IENvbG9yKDAsMCwwLDE1MCl9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlQnV0dG9uKCkge1xyXG4gICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25UdyA9IG5ldyBUd2Vlbih0aGlzLmN0bFNob3dCdXR0b24pO1xyXG4gICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5oaWRlRGlyID09PSAnUmlnaHQnID8gMSA6IC0xO1xyXG4gICAgICAgICAgICBidXR0b25Udy50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2Myh2ICogMC41ICogZGlyICsgZGlyICogMTAwLCAwLCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBidXR0b25Udy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnV0dG9uVHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1c3RvbURhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2hvdy1pbmZvLWxheWVyJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5q2m5Zmo5L+h5oGv5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5YWz6Zet54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktb3Blbi1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY2xvc2UtdG93ZXItbWVudS11aVwiKTsgLy/lhbPpl63ljYfnuqflu7rpgKDloZTnm7jlhbPnmoRVSVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JnLW5vZGUtY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLog4zmma/oioLngrnngrnlh7sgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1jbG9zZS1hbmltXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==