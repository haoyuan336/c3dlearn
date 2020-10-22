System.register(["cc", "code-quality:cr", "../GameInstance.js", "../util/Tool.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Tween, v3, view, LabelComponent, instantiate, ProgressBarComponent, GameInstance, Tool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, GoldCtl;

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

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../GameInstance", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      ProgressBarComponent = _cc.ProgressBarComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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
            // let gameCtlNode = find('GameController');
            this.node.on("refer-current-wave-level", function (level, wave) {
              // currentWave = wave;
              _this2.updateLevelLabel(level, wave);
            });
            this.node.on("update-gold-label", function (addGoldCount) {
              _this2.updateGoldCountLabel(addGoldCount);
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
              // let gameController = gameCtlNode.getComponent(GameController);
              var currentRedHeartCount = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentRedHeartCount();
              var currentInitRedHeartCount = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                error: Error()
              }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentInitRedHeartCount();
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
          value: function updateGoldCountLabel(addGoldCount) {
            var _this3 = this;

            var goldCount = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().getCurrentGoldCount();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Hb2xkQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVHdlZW4iLCJ2MyIsInZpZXciLCJMYWJlbENvbXBvbmVudCIsImluc3RhbnRpYXRlIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJHYW1lSW5zdGFuY2UiLCJUb29sIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR29sZEN0bCIsInR5cGUiLCJhZGRHb2xkRWZmZWN0Tm9kZUNvdW50Iiwibm9kZSIsIm9uIiwibGV2ZWwiLCJ3YXZlIiwidXBkYXRlTGV2ZWxMYWJlbCIsImFkZEdvbGRDb3VudCIsInVwZGF0ZUdvbGRDb3VudExhYmVsIiwidHciLCJjdXJyZW50R29sZExhYmVsIiwidG8iLCJzY2FsZSIsInN0YXJ0IiwiY3VycmVudFJlZEhlYXJ0Q291bnQiLCJnZXRJbnN0YW5jZSIsImdldFBsYXllckRhdGEiLCJnZXRDdXJyZW50UmVkSGVhcnRDb3VudCIsImN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCIsImdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCIsInJlZEhlYXJ0Q291bnRMYWJlbCIsImdldENvbXBvbmVudCIsInN0cmluZyIsInByb2dyZXNzIiwicmVkSGVhcnRQcm9ncmVzc0JhciIsImN1cnJlbnRMZXZlbExhYmVsIiwiZ29sZENvdW50IiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImVuZFN0ciIsImNvbnZlcnROdW1Ub0siLCJlZmZlY3ROb2RlIiwiYWRkR29sZEVmZmVjdExhYmVsIiwicGFyZW50IiwiZ29sZHNOb2RlIiwib2Zmc2V0U3RyIiwiYnkiLCJwb3NpdGlvbiIsImRlbGF5Iiwib3BhY2l0eSIsImNhbGwiLCJkZXN0cm95IiwiaGVpZ2h0IiwiZ2V0VmlzaWJsZVNpemUiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGMsT0FBQUEsYztBQUFzQkMsTUFBQUEsVyxPQUFBQSxXO0FBQW9CQyxNQUFBQSxvQixPQUFBQSxvQjs7OztBQUV4RkMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsSSxlQUFBQSxJOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7eUJBR0pDLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUdSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQUVSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdEYSxzQixHQUFpQyxDOzs7Ozs7a0NBRWpDO0FBQUE7O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLDBCQUFiLEVBQXlDLFVBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN0RDtBQUNBLGNBQUEsTUFBSSxDQUFDQyxnQkFBTCxDQUFzQkYsS0FBdEIsRUFBNkJDLElBQTdCO0FBQ0gsYUFIRDtBQUlBLGlCQUFLSCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxtQkFBYixFQUFrQyxVQUFDSSxZQUFELEVBQTBCO0FBQ3hELGNBQUEsTUFBSSxDQUFDQyxvQkFBTCxDQUEwQkQsWUFBMUI7QUFDSCxhQUZELEVBckJJLENBd0JKOztBQUNBLGlCQUFLTCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxpQkFBYixFQUFnQyxZQUFNO0FBQ2xDO0FBQ0E7QUFDQSxrQkFBSU0sRUFBRSxHQUFHLElBQUlwQixLQUFKLENBQVUsTUFBSSxDQUFDcUIsZ0JBQWYsQ0FBVDtBQUNBRCxjQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRXRCLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVg7QUFBWCxlQUFYO0FBQ0FtQixjQUFBQSxFQUFFLENBQUNFLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRXRCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBWCxlQUFYO0FBQ0FtQixjQUFBQSxFQUFFLENBQUNJLEtBQUg7QUFDSCxhQVBEO0FBUUEsaUJBQUtYLElBQUwsQ0FBVUMsRUFBVixDQUFhLHVCQUFiLEVBQXNDLFlBQU07QUFDeEM7QUFDQSxrQkFBSVcsb0JBQW9CLEdBQUc7QUFBQTtBQUFBLGdEQUFhQyxXQUFiLEdBQTJCQyxhQUEzQixHQUEyQ0MsdUJBQTNDLEVBQTNCO0FBQ0Esa0JBQUlDLHdCQUF3QixHQUFHO0FBQUE7QUFBQSxnREFBYUgsV0FBYixHQUEyQkMsYUFBM0IsR0FBMkNHLDJCQUEzQyxFQUEvQjtBQUNBLGNBQUEsTUFBSSxDQUFDQyxrQkFBTCxDQUF3QkMsWUFBeEIsQ0FBcUM3QixjQUFyQyxFQUFxRDhCLE1BQXJELEdBQThESix3QkFBd0IsR0FBRyxHQUEzQixHQUFpQ0osb0JBQS9GO0FBQ0Esa0JBQUlTLFFBQVEsR0FBR1Qsb0JBQW9CLEdBQUdJLHdCQUF0QztBQUNBLGNBQUEsTUFBSSxDQUFDTSxtQkFBTCxDQUF5QkgsWUFBekIsQ0FBc0MzQixvQkFBdEMsRUFBNEQ2QixRQUE1RCxHQUF1RUEsUUFBdkU7QUFDSCxhQVBEO0FBUUg7OzsyQ0FDZ0JuQixLLEVBQU9DLEksRUFBTTtBQUMxQixpQkFBS29CLGlCQUFMLENBQXVCSixZQUF2QixDQUFvQzdCLGNBQXBDLEVBQW9EOEIsTUFBcEQsR0FBOERsQixLQUFLLEdBQUcsQ0FBVCxHQUFjLEdBQWQsSUFBcUJDLElBQUksR0FBRyxDQUE1QixDQUE3RDtBQUNIOzs7K0NBQ29CRSxZLEVBQXVCO0FBQUE7O0FBRXhDLGdCQUFJbUIsU0FBUyxHQUFHO0FBQUE7QUFBQSw4Q0FBYVgsV0FBYixHQUEyQkMsYUFBM0IsR0FBMkNXLG1CQUEzQyxFQUFoQjtBQUdBLGdCQUFJQyxNQUFNLEdBQUc7QUFBQTtBQUFBLDhCQUFLQyxhQUFMLENBQW1CSCxTQUFuQixDQUFiO0FBQ0EsaUJBQUtoQixnQkFBTCxDQUFzQlcsWUFBdEIsQ0FBbUM3QixjQUFuQyxFQUFtRDhCLE1BQW5ELEdBQTRETSxNQUE1RDs7QUFFQSxnQkFBSXJCLFlBQUosRUFBa0I7QUFDZCxrQkFBSSxLQUFLTixzQkFBTCxHQUE4QixFQUFsQyxFQUFzQztBQUNsQztBQUNIOztBQUNELG1CQUFLQSxzQkFBTDtBQUNBLGtCQUFJNkIsVUFBVSxHQUFHckMsV0FBVyxDQUFDLEtBQUtzQyxrQkFBTixDQUE1QjtBQUNBRCxjQUFBQSxVQUFVLENBQUNFLE1BQVgsR0FBb0IsS0FBS0MsU0FBekI7QUFDQSxrQkFBSUMsU0FBUyxHQUFHLEdBQWhCOztBQUNBLGtCQUFJM0IsWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ2xCMkIsZ0JBQUFBLFNBQVMsR0FBRyxHQUFaO0FBQ0g7O0FBQ0Qsa0JBQUlOLE9BQU0sR0FBRztBQUFBO0FBQUEsZ0NBQUtDLGFBQUwsQ0FBbUJ0QixZQUFuQixDQUFiOztBQUNBdUIsY0FBQUEsVUFBVSxDQUFDVCxZQUFYLENBQXdCN0IsY0FBeEIsRUFBd0M4QixNQUF4QyxHQUFpRFksU0FBUyxHQUFHTixPQUFaLEdBQXFCLEVBQXRFLENBWmMsQ0FhZDs7QUFDQSxrQkFBSW5CLEVBQUUsR0FBRyxJQUFJcEIsS0FBSixDQUFVeUMsVUFBVixDQUFUO0FBQ0FyQixjQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU0sR0FBTixFQUFXO0FBQUVDLGdCQUFBQSxRQUFRLEVBQUU5QyxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxDQUFSO0FBQWQsZUFBWDtBQUNBbUIsY0FBQUEsRUFBRSxDQUFDNEIsS0FBSCxDQUFTLEdBQVQ7QUFDQTVCLGNBQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRUMsZ0JBQUFBLFFBQVEsRUFBRTlDLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsQ0FBZDtBQUEwQmdELGdCQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFwQyxlQUFYO0FBQ0E3QixjQUFBQSxFQUFFLENBQUM4QixJQUFILENBQVEsWUFBTTtBQUNWVCxnQkFBQUEsVUFBVSxDQUFDVSxPQUFYO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDdkMsc0JBQUw7QUFDSCxlQUhEO0FBSUFRLGNBQUFBLEVBQUUsQ0FBQ0ksS0FBSDtBQUVIO0FBRUo7OzswQ0FDZTtBQUFBOztBQUNaLGdCQUFJNEIsTUFBTSxHQUFHbEQsSUFBSSxDQUFDbUQsY0FBTCxHQUFzQkQsTUFBbkM7QUFDQUUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLGlCQUFLMUMsSUFBTCxDQUFVMkMsSUFBVixDQUFlLHVCQUFmO0FBQ0EsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSXZDLEVBQUUsR0FBRyxJQUFJcEIsS0FBSixDQUFVLE1BQUksQ0FBQzRDLFNBQWYsQ0FBVDtBQUNBeEIsY0FBQUEsRUFBRSxDQUFDRSxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1B5QixnQkFBQUEsUUFBUSxFQUFFOUMsRUFBRSxDQUFDLENBQUQsRUFBSW1ELE1BQU0sR0FBRyxHQUFULEdBQWUsRUFBbkIsRUFBdUIsQ0FBdkI7QUFETCxlQUFYO0FBR0FoQyxjQUFBQSxFQUFFLENBQUM4QixJQUFILENBQVEsWUFBTTtBQUNWUSxnQkFBQUEsT0FBTztBQUNWLGVBRkQ7QUFHQXRDLGNBQUFBLEVBQUUsQ0FBQ0ksS0FBSDtBQUNILGFBVE0sQ0FBUDtBQVVIOzs7O1FBakh3QjFCLFM7Ozs7O2lCQUVBLEk7Ozs7Ozs7aUJBRVEsSTs7Ozs7OztpQkFFQSxJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFFQyxJOzs7Ozs7O2lCQUVELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFR3ZWVuLCB2MywgdmlldywgTGFiZWxDb21wb25lbnQsIGZpbmQsIGluc3RhbnRpYXRlLCB0d2VlbiwgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbi8vIGltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHYW1lSW5zdGFuY2UgfSBmcm9tICcuLi9HYW1lSW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi4vdXRpbC9Ub29sJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHb2xkQ3RsJylcclxuZXhwb3J0IGNsYXNzIEdvbGRDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGdvbGRzTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRTY29yZUxhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50R29sZExhYmVsOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYWRkR29sZEVmZmVjdExhYmVsOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByZWRIZWFydFByb2dyZXNzQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByZWRIZWFydENvdW50TGFiZWw6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYWRkR29sZEVmZmVjdE5vZGVDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBsZXQgY3VycmVudExldmVsID0gMDtcclxuICAgICAgICAvLyBsZXQgY3VycmVudFdhdmUgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlTGV2ZWxMYWJlbChjdXJyZW50TGV2ZWwsIGN1cnJlbnRXYXZlKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtbGV2ZWwtd2F2ZVwiLCAobGV2ZWwsIHdhdmUpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gY3VycmVudExldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlTGV2ZWxMYWJlbChsZXZlbCwgd2F2ZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiaW5pdC11cGRhdGUtbGV2ZWxcIiwgKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVMZXZlbExhYmVsKDAsMCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJ1cGRhdGUtd2F2ZVwiLCAod2F2ZSk9PntcclxuICAgICAgICAvLyAgICAgY3VycmVudFdhdmUgPSB3YXZlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUxhYmVsKGN1cnJlbnRMZXZlbCwgY3VycmVudFdhdmUpO1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBsZXQgZ2FtZUN0bE5vZGUgPSBmaW5kKCdHYW1lQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlZmVyLWN1cnJlbnQtd2F2ZS1sZXZlbFwiLCAobGV2ZWwsIHdhdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gY3VycmVudFdhdmUgPSB3YXZlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGFiZWwobGV2ZWwsIHdhdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInVwZGF0ZS1nb2xkLWxhYmVsXCIsIChhZGRHb2xkQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGRDb3VudExhYmVsKGFkZEdvbGRDb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZ2FtZUN0bE5vZGUub24oXCJyZWZlci1jdXJyZW50LXdhdmVcIilcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJnb2xkLW5vdC1lbm91Z2hcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+aYvuekuumHkeW4geS4jei2s+eahOWKqOeUu1xyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRHb2xkTGFiZWxcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY3VycmVudEdvbGRMYWJlbCk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwgeyBzY2FsZTogdjMoMS41LCAxLjUsIDEuNSkgfSlcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlZmVyLXJlZC1oZWFydC1sYWJlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGxldCBnYW1lQ29udHJvbGxlciA9IGdhbWVDdGxOb2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UmVkSGVhcnRDb3VudCA9IEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50UmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEluaXRSZWRIZWFydENvdW50ID0gR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmdldEN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZEhlYXJ0Q291bnRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGN1cnJlbnRJbml0UmVkSGVhcnRDb3VudCArIFwiL1wiICsgY3VycmVudFJlZEhlYXJ0Q291bnQ7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IGN1cnJlbnRSZWRIZWFydENvdW50IC8gY3VycmVudEluaXRSZWRIZWFydENvdW50O1xyXG4gICAgICAgICAgICB0aGlzLnJlZEhlYXJ0UHJvZ3Jlc3NCYXIuZ2V0Q29tcG9uZW50KFByb2dyZXNzQmFyQ29tcG9uZW50KS5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGV2ZWxMYWJlbChsZXZlbCwgd2F2ZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSAobGV2ZWwgKyAxKSArICctJyArICh3YXZlICsgMSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVHb2xkQ291bnRMYWJlbChhZGRHb2xkQ291bnQ/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IGdvbGRDb3VudCA9IEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgZW5kU3RyID0gVG9vbC5jb252ZXJ0TnVtVG9LKGdvbGRDb3VudCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZW5kU3RyO1xyXG5cclxuICAgICAgICBpZiAoYWRkR29sZENvdW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZEdvbGRFZmZlY3ROb2RlQ291bnQgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkR29sZEVmZmVjdE5vZGVDb3VudCsrO1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYWRkR29sZEVmZmVjdExhYmVsKTtcclxuICAgICAgICAgICAgZWZmZWN0Tm9kZS5wYXJlbnQgPSB0aGlzLmdvbGRzTm9kZTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFN0ciA9ICctJztcclxuICAgICAgICAgICAgaWYgKGFkZEdvbGRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldFN0ciA9ICcrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZW5kU3RyID0gVG9vbC5jb252ZXJ0TnVtVG9LKGFkZEdvbGRDb3VudCk7XHJcbiAgICAgICAgICAgIGVmZmVjdE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBvZmZzZXRTdHIgKyBlbmRTdHIgKyAnJztcclxuICAgICAgICAgICAgLy8gZWZmZWN0Tm9kZS5wb3NpdGlvbiA9IHYzKGVmZilcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKGVmZmVjdE5vZGUpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjIsIHsgcG9zaXRpb246IHYzKDAsIDIwLCAwKSB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjUpO1xyXG4gICAgICAgICAgICB0dy5ieSgwLjIsIHsgcG9zaXRpb246IHYzKDAsIDIwLCAwKSwgb3BhY2l0eTogLTAuNSB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRHb2xkRWZmZWN0Tm9kZUNvdW50LS07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzaG93RW50ZXJBbmltKCkge1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB2aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+6YeR5biBdWnnmoTov5vlnLrliqjnlLtcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJyZWZlci1yZWQtaGVhcnQtbGFiZWxcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuZ29sZHNOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMoMCwgaGVpZ2h0ICogMC41IC0gNjUsIDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=