System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Tween, v3, view, LabelComponent, find, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GoldCtl;

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
      Tween = _cc.Tween;
      v3 = _cc.v3;
      view = _cc.view;
      LabelComponent = _cc.LabelComponent;
      find = _cc.find;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "76e03n/eNtMAopLI1ZIiGNs", "GoldCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GoldCtl", GoldCtl = (_dec = ccclass('GoldCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GoldCtl, _Component);

        function GoldCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GoldCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoldCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "goldsNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentLevelLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentScoreLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentGoldLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "addGoldEffectLabel", _descriptor5, _assertThisInitialized(_this));

          _this.addGoldEffectNodeCount = 0;
          return _this;
        }

        _createClass(GoldCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            var currentLevel = 0;
            var currentWave = 0;
            this.updateLevelLabel(currentLevel, currentWave);
            this.node.on("update-level", function (level) {
              currentLevel = level;

              _this2.updateLevelLabel(currentLevel, currentWave);
            }); // this.node.on("update-wave", (wave)=>{
            //     currentWave = wave;
            //     this.updateLabel(currentLevel, currentWave);
            // });

            var gameCtlNode = find('GameController');
            gameCtlNode.on("refer-current-wave", function (wave) {
              currentWave = wave;

              _this2.updateLevelLabel(currentLevel, currentWave);
            });
            gameCtlNode.on("update-gold-label", function (goldCount, addGoldCount) {
              _this2.updateGoldCountLabel(goldCount, addGoldCount);
            });
          }
        }, {
          key: "updateLevelLabel",
          value: function updateLevelLabel(level, wave) {
            this.currentLevelLabel.getComponent(LabelComponent).string = level + 1 + '-' + (wave + 1);
          }
        }, {
          key: "updateGoldCountLabel",
          value: function updateGoldCountLabel(goldCount, addGoldCount) {
            var _this3 = this;

            this.currentGoldLabel.getComponent(LabelComponent).string = goldCount + '';

            if (addGoldCount) {
              if (this.addGoldEffectNodeCount > 20) {
                return;
              }

              this.addGoldEffectNodeCount++;
              var effectNode = instantiate(this.addGoldEffectLabel);
              effectNode.parent = this.goldsNode;
              var offsetStr = '';

              if (addGoldCount > 0) {
                offsetStr = '+';
              }

              effectNode.getComponent(LabelComponent).string = offsetStr + addGoldCount + ''; // effectNode.position = v3(eff)

              var tw = new Tween(effectNode);
              tw.by(0.2, {
                position: v3(0, 20, 0)
              });
              tw.delay(0.5);
              tw.by(0.2, {
                position: v3(0, 20, 0),
                opacity: -0.5
              });
              tw.call(function () {
                effectNode.destroy();
                _this3.addGoldEffectNodeCount--;
              });
              tw.start();
            }
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim() {
            var _this4 = this;

            var height = view.getVisibleSize().height;
            console.log("播放金币ui的进场动画");
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this4.goldsNode);
              tw.to(0.2, {
                position: v3(0, height * 0.5 - 65, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }]);

        return GoldCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentLevelLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentScoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentGoldLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addGoldEffectLabel", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Hb2xkQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVHdlZW4iLCJ2MyIsInZpZXciLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJpbnN0YW50aWF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdvbGRDdGwiLCJ0eXBlIiwiYWRkR29sZEVmZmVjdE5vZGVDb3VudCIsImN1cnJlbnRMZXZlbCIsImN1cnJlbnRXYXZlIiwidXBkYXRlTGV2ZWxMYWJlbCIsIm5vZGUiLCJvbiIsImxldmVsIiwiZ2FtZUN0bE5vZGUiLCJ3YXZlIiwiZ29sZENvdW50IiwiYWRkR29sZENvdW50IiwidXBkYXRlR29sZENvdW50TGFiZWwiLCJjdXJyZW50TGV2ZWxMYWJlbCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImN1cnJlbnRHb2xkTGFiZWwiLCJlZmZlY3ROb2RlIiwiYWRkR29sZEVmZmVjdExhYmVsIiwicGFyZW50IiwiZ29sZHNOb2RlIiwib2Zmc2V0U3RyIiwidHciLCJieSIsInBvc2l0aW9uIiwiZGVsYXkiLCJvcGFjaXR5IiwiY2FsbCIsImRlc3Ryb3kiLCJzdGFydCIsImhlaWdodCIsImdldFZpc2libGVTaXplIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFB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UDtBQVVIOzs7O1FBakZ3QnhDLFM7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBRVEsSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBR0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVHdlZW4sIHYzLCB2aWV3LCBMYWJlbENvbXBvbmVudCwgZmluZCwgaW5zdGFudGlhdGUgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR29sZEN0bCcpXHJcbmV4cG9ydCBjbGFzcyBHb2xkQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnb2xkc05vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50U2NvcmVMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudEdvbGRMYWJlbDogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGFkZEdvbGRFZmZlY3RMYWJlbDogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRHb2xkRWZmZWN0Tm9kZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbCA9IDA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRXYXZlID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGFiZWwoY3VycmVudExldmVsLCBjdXJyZW50V2F2ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidXBkYXRlLWxldmVsXCIsIChsZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50TGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbExhYmVsKGN1cnJlbnRMZXZlbCwgY3VycmVudFdhdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInVwZGF0ZS13YXZlXCIsICh3YXZlKT0+e1xyXG4gICAgICAgIC8vICAgICBjdXJyZW50V2F2ZSA9IHdhdmU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlTGFiZWwoY3VycmVudExldmVsLCBjdXJyZW50V2F2ZSk7XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBnYW1lQ3RsTm9kZSA9IGZpbmQoJ0dhbWVDb250cm9sbGVyJyk7XHJcbiAgICAgICAgZ2FtZUN0bE5vZGUub24oXCJyZWZlci1jdXJyZW50LXdhdmVcIiwgKHdhdmUpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudFdhdmUgPSB3YXZlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGFiZWwoY3VycmVudExldmVsLCBjdXJyZW50V2F2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FtZUN0bE5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoZ29sZENvdW50OiBudW1iZXIsIGFkZEdvbGRDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50LCBhZGRHb2xkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWxMYWJlbChsZXZlbCwgd2F2ZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSAobGV2ZWwgKyAxKSArICctJyArICh3YXZlICsgMSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVHb2xkQ291bnRMYWJlbChnb2xkQ291bnQ6IG51bWJlciwgYWRkR29sZENvdW50PzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZ29sZENvdW50ICsgJyc7XHJcblxyXG4gICAgICAgIGlmIChhZGRHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkR29sZEVmZmVjdE5vZGVDb3VudCA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGRHb2xkRWZmZWN0Tm9kZUNvdW50Kys7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3ROb2RlID0gaW5zdGFudGlhdGUodGhpcy5hZGRHb2xkRWZmZWN0TGFiZWwpO1xyXG4gICAgICAgICAgICBlZmZlY3ROb2RlLnBhcmVudCA9IHRoaXMuZ29sZHNOb2RlO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0U3RyID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChhZGRHb2xkQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRTdHIgPSAnKyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWZmZWN0Tm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IG9mZnNldFN0ciArIGFkZEdvbGRDb3VudCArICcnO1xyXG4gICAgICAgICAgICAvLyBlZmZlY3ROb2RlLnBvc2l0aW9uID0gdjMoZWZmKVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4oZWZmZWN0Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMiwgeyBwb3NpdGlvbjogdjMoMCwgMjAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuNSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMiwgeyBwb3NpdGlvbjogdjMoMCwgMjAsIDApLCBvcGFjaXR5OiAtMC41IH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEdvbGRFZmZlY3ROb2RlQ291bnQtLTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7ph5HluIF1aeeahOi/m+WcuuWKqOeUu1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nb2xkc05vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAwLjUgLSA2NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==