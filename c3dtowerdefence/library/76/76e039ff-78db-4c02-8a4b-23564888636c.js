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

            // let currentLevel = 0;
            // let currentWave = 0;
            // this.updateLevelLabel(currentLevel, currentWave);
            // this.node.on("update-level-wave", (level, wave) => {
            //     // currentLevel = level;
            //     this.updateLevelLabel(level, wave);
            // });
            // this.node.on("init-update-level", ()=>{
            //     this.updateLevelLabel(0,0);
            // })
            // this.node.on("update-wave", (wave)=>{
            //     currentWave = wave;
            //     this.updateLabel(currentLevel, currentWave);
            // });
            var gameCtlNode = find('GameController');
            gameCtlNode.on("refer-current-wave-level", function (level, wave) {
              // currentWave = wave;
              _this2.updateLevelLabel(level, wave);
            });
            gameCtlNode.on("update-gold-label", function (goldCount, addGoldCount) {
              _this2.updateGoldCountLabel(goldCount, addGoldCount);
            }); // gameCtlNode.on("refer-current-wave")

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
              var offsetStr = '-';

              if (addGoldCount > 0) {
                offsetStr = '+';
              }

              var _endStr = (_crd && Tool === void 0 ? (_reportPossibleCrUseOfTool({
                error: Error()
              }), Tool) : Tool).convertNumToK(addGoldCount);

              effectNode.getComponent(LabelComponent).string = offsetStr + _endStr + ''; // effectNode.position = v3(eff)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Hb2xkQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVHdlZW4iLCJ2MyIsInZpZXciLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJpbnN0YW50aWF0ZSIsIlRvb2wiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHb2xkQ3RsIiwidHlwZSIsImFkZEdvbGRFZmZlY3ROb2RlQ291bnQiLCJnYW1lQ3RsTm9kZSIsIm9uIiwibGV2ZWwiLCJ3YXZlIiwidXBkYXRlTGV2ZWxMYWJlbCIsImdvbGRDb3VudCIsImFkZEdvbGRDb3VudCIsInVwZGF0ZUdvbGRDb3VudExhYmVsIiwibm9kZSIsInR3IiwiY3VycmVudEdvbGRMYWJlbCIsInRvIiwic2NhbGUiLCJzdGFydCIsImN1cnJlbnRMZXZlbExhYmVsIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiZW5kU3RyIiwiY29udmVydE51bVRvSyIsImVmZmVjdE5vZGUiLCJhZGRHb2xkRWZmZWN0TGFiZWwiLCJwYXJlbnQiLCJnb2xkc05vZGUiLCJvZmZzZXRTdHIiLCJieSIsInBvc2l0aW9uIiwiZGVsYXkiLCJvcGFjaXR5IiwiY2FsbCIsImRlc3Ryb3kiLCJoZWlnaHQiLCJnZXRWaXNpYmxlU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsYyxPQUFB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SixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSTNCLEVBQUUsR0FBRyxJQUFJckIsS0FBSixDQUFVLE1BQUksQ0FBQ2tDLFNBQWYsQ0FBVDtBQUNBYixjQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFDUGMsZ0JBQUFBLFFBQVEsRUFBRXBDLEVBQUUsQ0FBQyxDQUFELEVBQUl5QyxNQUFNLEdBQUcsR0FBVCxHQUFlLEVBQW5CLEVBQXVCLENBQXZCO0FBREwsZUFBWDtBQUdBckIsY0FBQUEsRUFBRSxDQUFDbUIsSUFBSCxDQUFRLFlBQU07QUFDVk8sZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0ExQixjQUFBQSxFQUFFLENBQUNJLEtBQUg7QUFDSCxhQVRNLENBQVA7QUFVSDs7OztRQS9Gd0IzQixTOzs7OztpQkFFQSxJOzs7Ozs7O2lCQUVRLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFFRCxJOzs7Ozs7O2lCQUdFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFR3ZWVuLCB2MywgdmlldywgTGFiZWxDb21wb25lbnQsIGZpbmQsIGluc3RhbnRpYXRlLCB0d2VlbiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgVG9vbCB9IGZyb20gJy4uL3V0aWwvVG9vbCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR29sZEN0bCcpXHJcbmV4cG9ydCBjbGFzcyBHb2xkQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnb2xkc05vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50U2NvcmVMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudEdvbGRMYWJlbDogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGFkZEdvbGRFZmZlY3RMYWJlbDogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRHb2xkRWZmZWN0Tm9kZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRMZXZlbCA9IDA7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRXYXZlID0gMDtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxldmVsTGFiZWwoY3VycmVudExldmVsLCBjdXJyZW50V2F2ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwidXBkYXRlLWxldmVsLXdhdmVcIiwgKGxldmVsLCB3YXZlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIGN1cnJlbnRMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUxldmVsTGFiZWwobGV2ZWwsIHdhdmUpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImluaXQtdXBkYXRlLWxldmVsXCIsICgpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlTGV2ZWxMYWJlbCgwLDApO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwidXBkYXRlLXdhdmVcIiwgKHdhdmUpPT57XHJcbiAgICAgICAgLy8gICAgIGN1cnJlbnRXYXZlID0gd2F2ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVMYWJlbChjdXJyZW50TGV2ZWwsIGN1cnJlbnRXYXZlKTtcclxuXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgbGV0IGdhbWVDdGxOb2RlID0gZmluZCgnR2FtZUNvbnRyb2xsZXInKTtcclxuICAgICAgICBnYW1lQ3RsTm9kZS5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCAobGV2ZWwsIHdhdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gY3VycmVudFdhdmUgPSB3YXZlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGFiZWwobGV2ZWwsIHdhdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbWVDdGxOb2RlLm9uKFwidXBkYXRlLWdvbGQtbGFiZWxcIiwgKGdvbGRDb3VudDogbnVtYmVyLCBhZGRHb2xkQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGRDb3VudExhYmVsKGdvbGRDb3VudCwgYWRkR29sZENvdW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBnYW1lQ3RsTm9kZS5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZVwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImdvbGQtbm90LWVub3VnaFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pi+56S66YeR5biB5LiN6Laz55qE5Yqo55S7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEdvbGRMYWJlbFxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jdXJyZW50R29sZExhYmVsKTtcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLjUsIDEuNSwgMS41KSB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVwZGF0ZUxldmVsTGFiZWwobGV2ZWwsIHdhdmUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gKGxldmVsICsgMSkgKyAnLScgKyAod2F2ZSArIDEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50OiBudW1iZXIsIGFkZEdvbGRDb3VudD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCBlbmRTdHIgPSBUb29sLmNvbnZlcnROdW1Ub0soZ29sZENvdW50KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHb2xkTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBlbmRTdHI7XHJcblxyXG4gICAgICAgIGlmIChhZGRHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkR29sZEVmZmVjdE5vZGVDb3VudCA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGRHb2xkRWZmZWN0Tm9kZUNvdW50Kys7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3ROb2RlID0gaW5zdGFudGlhdGUodGhpcy5hZGRHb2xkRWZmZWN0TGFiZWwpO1xyXG4gICAgICAgICAgICBlZmZlY3ROb2RlLnBhcmVudCA9IHRoaXMuZ29sZHNOb2RlO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0U3RyID0gJy0nO1xyXG4gICAgICAgICAgICBpZiAoYWRkR29sZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0U3RyID0gJysnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbmRTdHIgPSBUb29sLmNvbnZlcnROdW1Ub0soYWRkR29sZENvdW50KTtcclxuICAgICAgICAgICAgZWZmZWN0Tm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IG9mZnNldFN0ciArIGVuZFN0ciArICcnO1xyXG4gICAgICAgICAgICAvLyBlZmZlY3ROb2RlLnBvc2l0aW9uID0gdjMoZWZmKVxyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4oZWZmZWN0Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMiwgeyBwb3NpdGlvbjogdjMoMCwgMjAsIDApIH0pXHJcbiAgICAgICAgICAgIHR3LmRlbGF5KDAuNSk7XHJcbiAgICAgICAgICAgIHR3LmJ5KDAuMiwgeyBwb3NpdGlvbjogdjMoMCwgMjAsIDApLCBvcGFjaXR5OiAtMC41IH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEdvbGRFZmZlY3ROb2RlQ291bnQtLTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7ph5HluIF1aeeahOi/m+WcuuWKqOeUu1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5nb2xkc05vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAwLjUgLSA2NSwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==