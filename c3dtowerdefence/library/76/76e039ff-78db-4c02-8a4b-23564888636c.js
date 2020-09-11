System.register(["cc", "code-quality:cr", "../util/Tool.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Tween, v3, view, LabelComponent, find, instantiate, Tool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GoldCtl;

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

  function _reportPossibleCrUseOfTool(extras) {
    _reporterNs.report("Tool", "../util/Tool", _context.meta, extras);
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
      Tween = _cc.Tween;
      v3 = _cc.v3;
      view = _cc.view;
      LabelComponent = _cc.LabelComponent;
      find = _cc.find;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilToolJs) {
      Tool = _utilToolJs.Tool;
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
            this.node.on("gold-not-enough", function () {
              //显示金币不足的动画
              // this.currentGoldLabel
              var tw = new Tween(_this2.currentGoldLabel);
              tw.to(0.1, {
                scale: v3(1.5, 1.5, 1.5)
              });
              tw.to(0.1, {
                scale: v3(1, 1, 1)
              });
              tw.start();
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

            var endStr = (_crd && Tool === void 0 ? (_reportPossibleCrUseOfTool({
              error: Error()
            }), Tool) : Tool).convertNumToK(goldCount);
            this.currentGoldLabel.getComponent(LabelComponent).string = endStr;

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

              effectNode.getComponent(LabelComponent).string = offsetStr + (_crd && Tool === void 0 ? (_reportPossibleCrUseOfTool({
                error: Error()
              }), Tool) : Tool).convertNumToK(addGoldCount) + ''; // effectNode.position = v3(eff)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Hb2xkQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVHdlZW4iLCJ2MyIsInZpZXciLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJpbnN0YW50aWF0ZSIsIlRvb2wiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHb2xkQ3RsIiwidHlwZSIsImFkZEdvbGRFZmZlY3ROb2RlQ291bnQiLCJjdXJyZW50TGV2ZWwiLCJjdXJyZW50V2F2ZSIsInVwZGF0ZUxldmVsTGFiZWwiLCJub2RlIiwib24iLCJsZXZlbCIsImdhbWVDdGxOb2RlIiwid2F2ZSIsImdvbGRDb3VudCIsImFkZEdvbGRDb3VudCIsInVwZGF0ZUdvbGRDb3VudExhYmVsIiwidHciLCJjdXJyZW50R29sZExhYmVsIiwidG8iLCJzY2FsZSIsInN0YXJ0IiwiY3VycmVudExldmVsTGFiZWwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJlbmRTdHIiLCJjb252ZXJ0TnVtVG9LIiwiZWZmZWN0Tm9kZSIsImFkZEdvbGRFZmZlY3RMYWJlbCIsInBhcmVudCIsImdvbGRzTm9kZSIsIm9mZnNldFN0ciIsImJ5IiwicG9zaXRpb24iLCJkZWxheSIsIm9wYWNpdHkiLCJjYWxsIiwiZGVzdHJveSIsImhlaWdodCIsImdldFZpc2libGVTaXplIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFB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QUFYO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDaEMsc0JBQUw7QUFDSCxlQUhEO0FBSUFZLGNBQUFBLEVBQUUsQ0FBQ0ksS0FBSDtBQUVIO0FBRUo7OzswQ0FDZTtBQUFBOztBQUNaLGdCQUFJaUIsTUFBTSxHQUFHMUMsSUFBSSxDQUFDMkMsY0FBTCxHQUFzQkQsTUFBbkM7QUFDQUUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUkzQixFQUFFLEdBQUcsSUFBSXZCLEtBQUosQ0FBVSxNQUFJLENBQUNvQyxTQUFmLENBQVQ7QUFDQWIsY0FBQUEsRUFBRSxDQUFDRSxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1BjLGdCQUFBQSxRQUFRLEVBQUV0QyxFQUFFLENBQUMsQ0FBRCxFQUFJMkMsTUFBTSxHQUFHLEdBQVQsR0FBZSxFQUFuQixFQUF1QixDQUF2QjtBQURMLGVBQVg7QUFHQXJCLGNBQUFBLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUSxZQUFNO0FBQ1ZPLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBMUIsY0FBQUEsRUFBRSxDQUFDSSxLQUFIO0FBQ0gsYUFUTSxDQUFQO0FBVUg7Ozs7UUExRndCN0IsUzs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFFUSxJOzs7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFHRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUd2VlbiwgdjMsIHZpZXcsIExhYmVsQ29tcG9uZW50LCBmaW5kLCBpbnN0YW50aWF0ZSwgdHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFRvb2wgfSBmcm9tICcuLi91dGlsL1Rvb2wnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dvbGRDdGwnKVxyXG5leHBvcnQgY2xhc3MgR29sZEN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZ29sZHNOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWxMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudFNjb3JlTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRHb2xkTGFiZWw6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBhZGRHb2xkRWZmZWN0TGFiZWw6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYWRkR29sZEVmZmVjdE5vZGVDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWwgPSAwO1xyXG4gICAgICAgIGxldCBjdXJyZW50V2F2ZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMZXZlbExhYmVsKGN1cnJlbnRMZXZlbCwgY3VycmVudFdhdmUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInVwZGF0ZS1sZXZlbFwiLCAobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudExldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWxMYWJlbChjdXJyZW50TGV2ZWwsIGN1cnJlbnRXYXZlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtd2F2ZVwiLCAod2F2ZSk9PntcclxuICAgICAgICAvLyAgICAgY3VycmVudFdhdmUgPSB3YXZlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUxhYmVsKGN1cnJlbnRMZXZlbCwgY3VycmVudFdhdmUpO1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBsZXQgZ2FtZUN0bE5vZGUgPSBmaW5kKCdHYW1lQ29udHJvbGxlcicpO1xyXG4gICAgICAgIGdhbWVDdGxOb2RlLm9uKFwicmVmZXItY3VycmVudC13YXZlXCIsICh3YXZlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRXYXZlID0gd2F2ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbExhYmVsKGN1cnJlbnRMZXZlbCwgY3VycmVudFdhdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbWVDdGxOb2RlLm9uKFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgKGdvbGRDb3VudDogbnVtYmVyLCBhZGRHb2xkQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGRDb3VudExhYmVsKGdvbGRDb3VudCwgYWRkR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJnb2xkLW5vdC1lbm91Z2hcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aYvuekuumHkeW4geS4jei2s+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRHb2xkTGFiZWxcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY3VycmVudEdvbGRMYWJlbCk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMS41LCAxLjUsIDEuNSkgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1cGRhdGVMZXZlbExhYmVsKGxldmVsLCB3YXZlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IChsZXZlbCArIDEpICsgJy0nICsgKHdhdmUgKyAxKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUdvbGRDb3VudExhYmVsKGdvbGRDb3VudDogbnVtYmVyLCBhZGRHb2xkQ291bnQ/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZW5kU3RyID0gVG9vbC5jb252ZXJ0TnVtVG9LKGdvbGRDb3VudCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5kU3RyO1xyXG5cclxuICAgICAgICBpZiAoYWRkR29sZENvdW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZEdvbGRFZmZlY3ROb2RlQ291bnQgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkR29sZEVmZmVjdE5vZGVDb3VudCsrO1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYWRkR29sZEVmZmVjdExhYmVsKTtcclxuICAgICAgICAgICAgZWZmZWN0Tm9kZS5wYXJlbnQgPSB0aGlzLmdvbGRzTm9kZTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFN0ciA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoYWRkR29sZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0U3RyID0gJysnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVmZmVjdE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBvZmZzZXRTdHIgKyBUb29sLmNvbnZlcnROdW1Ub0soYWRkR29sZENvdW50KSArICcnO1xyXG4gICAgICAgICAgICAvLyBlZmZlY3ROb2RlLnBvc2l0aW9uID0gdjMoZWZmKVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4oZWZmZWN0Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMiwgeyBwb3NpdGlvbjogdjMoMCwgMjAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuNSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMiwgeyBwb3NpdGlvbjogdjMoMCwgMjAsIDApLCBvcGFjaXR5OiAtMC41IH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEdvbGRFZmZlY3ROb2RlQ291bnQtLTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7ph5HluIF1aeeahOi/m+WcuuWKqOeUu1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nb2xkc05vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAwLjUgLSA2NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==