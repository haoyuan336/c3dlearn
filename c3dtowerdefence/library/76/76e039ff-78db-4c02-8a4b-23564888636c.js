System.register(["cc", "code-quality:cr", "../GameController.js", "../util/Tool.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Tween, v3, view, LabelComponent, find, instantiate, ProgressBarComponent, GameController, Tool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, GoldCtl;

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
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
  }

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
    _dec7: void 0,
    _dec8: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
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
      ProgressBarComponent = _cc.ProgressBarComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
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
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
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

          _initializerDefineProperty(_this, "redHeartProgressBar", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "redHeartCountLabel", _descriptor7, _assertThisInitialized(_this));

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
            this.node.on("refer-red-heart-label", function () {
              var gameController = gameCtlNode.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                error: Error()
              }), GameController) : GameController);
              var currentRedHeartCount = gameController.playerData.getCurrentRedHeartCount();
              var currentInitRedHeartCount = gameController.playerData.getCurrentInitRedHeartCount();
              _this2.redHeartCountLabel.getComponent(LabelComponent).string = currentInitRedHeartCount + "/" + currentRedHeartCount;
              var progress = currentRedHeartCount / currentInitRedHeartCount;
              _this2.redHeartProgressBar.getComponent(ProgressBarComponent).progress = progress;
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
            this.node.emit("refer-red-heart-label");
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "redHeartProgressBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "redHeartCountLabel", [_dec8], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Hb2xkQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVHdlZW4iLCJ2MyIsInZpZXciLCJMYWJlbENvbXBvbmVudCIsImZpbmQiLCJpbnN0YW50aWF0ZSIsIlByb2dyZXNzQmFyQ29tcG9uZW50IiwiR2FtZUNvbnRyb2xsZXIiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR29sZEN0bCIsInR5cGUiLCJhZGRHb2xkRWZmZWN0Tm9kZUNvdW50IiwiZ2FtZUN0bE5vZGUiLCJvbiIsImxldmVsIiwid2F2ZSIsInVwZGF0ZUxldmVsTGFiZWwiLCJnb2xkQ291bnQiLCJhZGRHb2xkQ291bnQiLCJ1cGRhdGVHb2xkQ291bnRMYWJlbCIsIm5vZGUiLCJ0dyIsImN1cnJlbnRHb2xkTGFiZWwiLCJ0byIsInNjYWxlIiwic3RhcnQiLCJnYW1lQ29udHJvbGxlciIsImdldENvbXBvbmVudCIsImN1cnJlbnRSZWRIZWFydENvdW50IiwicGxheWVyRGF0YSIsImdldEN1cnJlbnRSZWRIZWFydENvdW50IiwiY3VycmVudEluaXRSZWRIZWFydENvdW50IiwiZ2V0Q3VycmVudEluaXRSZWRIZWFydENvdW50IiwicmVkSGVhcnRDb3VudExhYmVsIiwic3RyaW5nIiwicHJvZ3Jlc3MiLCJyZWRIZWFydFByb2dyZXNzQmFyIiwiY3VycmVudExldmVsTGFiZWwiLCJlbmRTdHIiLCJjb252ZXJ0TnVtVG9LIiwiZWZmZWN0Tm9kZSIsImFkZEdvbGRFZmZlY3RMYWJlbCIsInBhcmVudCIsImdvbGRzTm9kZSIsIm9mZnNldFN0ciIsImJ5IiwicG9zaXRpb24iLCJkZWxheSIsIm9wYWNpdHkiLCJjYWxsIiwiZGVzdHJveSIsImhlaWdodCIsImdldFZpc2libGVTaXplIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJQcm9taXNl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QUFmO0FBQ0EsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSXJDLEVBQUUsR0FBRyxJQUFJdkIsS0FBSixDQUFVLE1BQUksQ0FBQzZDLFNBQWYsQ0FBVDtBQUNBdEIsY0FBQUEsRUFBRSxDQUFDRSxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1B1QixnQkFBQUEsUUFBUSxFQUFFL0MsRUFBRSxDQUFDLENBQUQsRUFBSW9ELE1BQU0sR0FBRyxHQUFULEdBQWUsRUFBbkIsRUFBdUIsQ0FBdkI7QUFETCxlQUFYO0FBR0E5QixjQUFBQSxFQUFFLENBQUM0QixJQUFILENBQVEsWUFBTTtBQUNWUSxnQkFBQUEsT0FBTztBQUNWLGVBRkQ7QUFHQXBDLGNBQUFBLEVBQUUsQ0FBQ0ksS0FBSDtBQUNILGFBVE0sQ0FBUDtBQVVIOzs7O1FBN0d3QjdCLFM7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBRVEsSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFR3ZWVuLCB2MywgdmlldywgTGFiZWxDb21wb25lbnQsIGZpbmQsIGluc3RhbnRpYXRlLCB0d2VlbiwgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi4vdXRpbC9Ub29sJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHb2xkQ3RsJylcclxuZXhwb3J0IGNsYXNzIEdvbGRDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdvbGRzTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRTY29yZUxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50R29sZExhYmVsOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYWRkR29sZEVmZmVjdExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByZWRIZWFydFByb2dyZXNzQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByZWRIZWFydENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYWRkR29sZEVmZmVjdE5vZGVDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBsZXQgY3VycmVudExldmVsID0gMDtcclxuICAgICAgICAvLyBsZXQgY3VycmVudFdhdmUgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlTGV2ZWxMYWJlbChjdXJyZW50TGV2ZWwsIGN1cnJlbnRXYXZlKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtbGV2ZWwtd2F2ZVwiLCAobGV2ZWwsIHdhdmUpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gY3VycmVudExldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlTGV2ZWxMYWJlbChsZXZlbCwgd2F2ZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiaW5pdC11cGRhdGUtbGV2ZWxcIiwgKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVMZXZlbExhYmVsKDAsMCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtd2F2ZVwiLCAod2F2ZSk9PntcclxuICAgICAgICAvLyAgICAgY3VycmVudFdhdmUgPSB3YXZlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUxhYmVsKGN1cnJlbnRMZXZlbCwgY3VycmVudFdhdmUpO1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBsZXQgZ2FtZUN0bE5vZGUgPSBmaW5kKCdHYW1lQ29udHJvbGxlcicpO1xyXG4gICAgICAgIGdhbWVDdGxOb2RlLm9uKFwicmVmZXItY3VycmVudC13YXZlLWxldmVsXCIsIChsZXZlbCwgd2F2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjdXJyZW50V2F2ZSA9IHdhdmU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWxMYWJlbChsZXZlbCwgd2F2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FtZUN0bE5vZGUub24oXCJ1cGRhdGUtZ29sZC1sYWJlbFwiLCAoZ29sZENvdW50OiBudW1iZXIsIGFkZEdvbGRDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZENvdW50TGFiZWwoZ29sZENvdW50LCBhZGRHb2xkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGdhbWVDdGxOb2RlLm9uKFwicmVmZXItY3VycmVudC13YXZlXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZ29sZC1ub3QtZW5vdWdoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/mmL7npLrph5HluIHkuI3otrPnmoTliqjnlLtcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50R29sZExhYmVsXHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmN1cnJlbnRHb2xkTGFiZWwpO1xyXG4gICAgICAgICAgICB0dy50bygwLjEsIHsgc2NhbGU6IHYzKDEuNSwgMS41LCAxLjUpIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsTm9kZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFJlZEhlYXJ0Q291bnQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRSZWRIZWFydENvdW50KCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5pdFJlZEhlYXJ0Q291bnQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZEhlYXJ0Q291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCArIFwiL1wiICsgY3VycmVudFJlZEhlYXJ0Q291bnQ7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IGN1cnJlbnRSZWRIZWFydENvdW50IC8gY3VycmVudEluaXRSZWRIZWFydENvdW50O1xyXG4gICAgICAgICAgICB0aGlzLnJlZEhlYXJ0UHJvZ3Jlc3NCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWxMYWJlbChsZXZlbCwgd2F2ZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSAobGV2ZWwgKyAxKSArICctJyArICh3YXZlICsgMSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVHb2xkQ291bnRMYWJlbChnb2xkQ291bnQ6IG51bWJlciwgYWRkR29sZENvdW50PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGVuZFN0ciA9IFRvb2wuY29udmVydE51bVRvSyhnb2xkQ291bnQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEdvbGRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGVuZFN0cjtcclxuXHJcbiAgICAgICAgaWYgKGFkZEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRHb2xkRWZmZWN0Tm9kZUNvdW50ID4gMjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZEdvbGRFZmZlY3ROb2RlQ291bnQrKztcclxuICAgICAgICAgICAgbGV0IGVmZmVjdE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmFkZEdvbGRFZmZlY3RMYWJlbCk7XHJcbiAgICAgICAgICAgIGVmZmVjdE5vZGUucGFyZW50ID0gdGhpcy5nb2xkc05vZGU7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRTdHIgPSAnLSc7XHJcbiAgICAgICAgICAgIGlmIChhZGRHb2xkQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRTdHIgPSAnKyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVuZFN0ciA9IFRvb2wuY29udmVydE51bVRvSyhhZGRHb2xkQ291bnQpO1xyXG4gICAgICAgICAgICBlZmZlY3ROb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gb2Zmc2V0U3RyICsgZW5kU3RyICsgJyc7XHJcbiAgICAgICAgICAgIC8vIGVmZmVjdE5vZGUucG9zaXRpb24gPSB2MyhlZmYpXHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2VlbihlZmZlY3ROb2RlKTtcclxuICAgICAgICAgICAgdHcuYnkoMC4yLCB7IHBvc2l0aW9uOiB2MygwLCAyMCwgMCkgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC41KTtcclxuICAgICAgICAgICAgdHcuYnkoMC4yLCB7IHBvc2l0aW9uOiB2MygwLCAyMCwgMCksIG9wYWNpdHk6IC0wLjUgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3ROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkR29sZEVmZmVjdE5vZGVDb3VudC0tO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0VudGVyQW5pbSgpIHtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaSreaUvumHkeW4gXVp55qE6L+b5Zy65Yqo55S7XCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItcmVkLWhlYXJ0LWxhYmVsXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmdvbGRzTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKDAsIGhlaWdodCAqIDAuNSAtIDY1LCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19