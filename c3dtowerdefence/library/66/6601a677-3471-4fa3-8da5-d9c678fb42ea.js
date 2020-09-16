System.register(["cc", "code-quality:cr", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, SpriteFrame, v2, v3, Tween, State, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ChooseWeaponInfoRateCtl;

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
    _reporterNs.report("State", "./util/State", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Tween = _cc.Tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6601aZ3NHFPo42l2cZ4+0Lq", "ChooseWeaponInfoRateCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChooseWeaponInfoRateCtl", ChooseWeaponInfoRateCtl = (_dec = ccclass('ChooseWeaponInfoRateCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(ChooseWeaponInfoRateCtl, _Component);

        function ChooseWeaponInfoRateCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ChooseWeaponInfoRateCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChooseWeaponInfoRateCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "rateButtonList", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rateButtonSpriteFrameLight", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rateButtonSpriteFrameGray", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rateButtonParentNode", _descriptor4, _assertThisInitialized(_this));

          _this.currentRateIndex = 0;
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          return _this;
        }

        _createClass(ChooseWeaponInfoRateCtl, [{
          key: "start",
          value: function start() {
            for (var i = 0; i < this.rateButtonList.length; i++) {
              var node = this.rateButtonList[i];
              var dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * 270 / 360).normalize();
              var pos = dir.multiplyScalar(80);
              node.position = v3(pos.x, pos.y, 0);
            }

            this.state.setState("wait");
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var _this2 = this;

            if (customData.indexOf("rate") > -1) {
              console.log("旋转按钮");

              if (this.state.getState() !== 'wait') {
                return;
              }

              this.currentRateIndex++;
              var angle = this.currentRateIndex % 3 * 120;
              this.state.setState("move"); // this.rateButtonParentNode.eulerAngles = v3(0,0, angle);

              var promiseList = [];

              for (var i = 0; i < this.rateButtonList.length; i++) {
                var node = this.rateButtonList[i];
                var dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * (270 + angle) / 360).normalize();
                var pos = dir.multiplyScalar(80); // node.position = v3(pos.x, pos.y, 0); 

                promiseList.push(this.moveToAction(node, pos));
              }

              Promise.all(promiseList).then(function () {
                _this2.state.setState("wait");
              });
            }
          }
        }, {
          key: "moveToAction",
          value: function moveToAction(node, pos) {
            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              tw.to(0.2, {
                position: v3(pos.x, pos.y, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }]);

        return ChooseWeaponInfoRateCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rateButtonList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rateButtonSpriteFrameLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rateButtonSpriteFrameGray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rateButtonParentNode", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9DaG9vc2VXZWFwb25JbmZvUmF0ZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlNwcml0ZUZyYW1lIiwidjIiLCJ2MyIsIlR3ZWVuIiwiU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDaG9vc2VXZWFwb25JbmZvUmF0ZUN0bCIsInR5cGUiLCJjdXJyZW50UmF0ZUluZGV4Iiwic3RhdGUiLCJpIiwicmF0ZUJ1dHRvbkxpc3QiLCJsZW5ndGgiLCJub2RlIiwiZGlyIiwicm90YXRlIiwiTWF0aCIsIlBJIiwibm9ybWFsaXplIiwicG9zIiwibXVsdGlwbHlTY2FsYXIiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic2V0U3RhdGUiLCJldmVudCIsImN1c3RvbURhdGEiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiYW5nbGUiLCJwcm9taXNlTGlzdCIsInB1c2giLCJtb3ZlVG9BY3Rpb24iLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInRvIiwiY2FsbCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsRSxPQUFBQSxFO0FBQWdCQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDM0VDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROzt5Q0FHSkMsdUIs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Q0FBOEIsWUFBSTtBQUM5QixnQkFBQSxNQUFJLENBQUM1QixLQUFMLENBQVdlLFFBQVgsQ0FBb0IsTUFBcEI7QUFDSCxlQUZEO0FBR0g7QUFDSjs7O3VDQUNZWCxJLEVBQVlNLEcsRUFBVTtBQUMvQixtQkFBTyxJQUFJZ0IsT0FBSixDQUFZLFVBQUNHLE9BQUQsRUFBVUMsTUFBVixFQUFtQjtBQUNsQyxrQkFBSUMsRUFBRSxHQUFHLElBQUl0QyxLQUFKLENBQVVXLElBQVYsQ0FBVDtBQUNBMkIsY0FBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1BwQixnQkFBQUEsUUFBUSxFQUFFcEIsRUFBRSxDQUFDa0IsR0FBRyxDQUFDRyxDQUFMLEVBQVFILEdBQUcsQ0FBQ0ksQ0FBWixFQUFlLENBQWY7QUFETCxlQUFYO0FBR0FpQixjQUFBQSxFQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFJO0FBQ1JKLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBRSxjQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSCxhQVRNLENBQVA7QUFXSDs7OztRQXhEd0M5QyxTOzs7OztpQkFFVCxFOzs7Ozs7O2lCQUVtQixFOzs7Ozs7O2lCQUVELEU7Ozs7Ozs7aUJBRWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlQXRsYXMsIFNwcml0ZUZyYW1lLCB2MiwgdjMsIFZlYzMsIFZlYzIsIFR3ZWVuIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQ2hvb3NlV2VhcG9uSW5mb1JhdGVDdGwnKVxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlV2VhcG9uSW5mb1JhdGVDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHJhdGVCdXR0b25MaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgcmF0ZUJ1dHRvblNwcml0ZUZyYW1lTGlnaHQ6IFNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMgcmF0ZUJ1dHRvblNwcml0ZUZyYW1lR3JheTogU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHJhdGVCdXR0b25QYXJlbnROb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFJhdGVJbmRleCA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yYXRlQnV0dG9uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucmF0ZUJ1dHRvbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB2MigwLCAxKS5yb3RhdGUoTWF0aC5QSSAqIDIgKiAxIC8gMyAqIGkgLSBNYXRoLlBJICogMiAqIDI3MCAvIDM2MCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBkaXIubXVsdGlwbHlTY2FsYXIoODApXHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2Myhwb3MueCwgcG9zLnksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwid2FpdFwiKTtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0YS5pbmRleE9mKFwicmF0ZVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peL6L2s5oyJ6ZKuXCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpICE9PSd3YWl0Jyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmF0ZUluZGV4Kys7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY3VycmVudFJhdGVJbmRleCAlIDMgKiAxMjA7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJtb3ZlXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJhdGVCdXR0b25QYXJlbnROb2RlLmV1bGVyQW5nbGVzID0gdjMoMCwwLCBhbmdsZSk7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmF0ZUJ1dHRvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5yYXRlQnV0dG9uTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2MigwLCAxKS5yb3RhdGUoTWF0aC5QSSAqIDIgKiAxIC8gMyAqIGkgLSBNYXRoLlBJICogMiAqICgyNzAgKyBhbmdsZSkgLyAzNjApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IGRpci5tdWx0aXBseVNjYWxhcig4MCk7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnBvc2l0aW9uID0gdjMocG9zLngsIHBvcy55LCAwKTsgXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHRoaXMubW92ZVRvQWN0aW9uKG5vZGUsIHBvcykpICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlTGlzdCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIndhaXRcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZVRvQWN0aW9uKG5vZGU6IE5vZGUsIHBvczogVmVjMil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbihub2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjMocG9zLngsIHBvcy55LCAwKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==