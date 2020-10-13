System.register(["cc", "code-quality:cr", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, SpriteFrame, v2, v3, Tween, find, State, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ChooseWeaponInfoRateCtl;

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
      find = _cc.find;
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
            var _this2 = this;

            for (var i = 0; i < this.rateButtonList.length; i++) {
              var node = this.rateButtonList[i];
              var dir = v2(0, 1).rotate(Math.PI * 2 * 1 / 3 * i - Math.PI * 2 * 270 / 360).normalize();
              var pos = dir.multiplyScalar(80);
              node.position = v3(pos.x, pos.y, 0);
            }

            this.state.addState("wait", function () {
              console.log("current rate index", _this2.currentRateIndex);

              _this2.node.emit("refer-choose-rate-cost", _this2.getCurrentChooseRate()); // 

            });
            this.state.setState("wait");
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var _this3 = this;

            find("GameController").emit("player-button-click-audio");

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
                _this3.state.setState("wait");
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
        }, {
          key: "getCurrentChooseRate",
          value: function getCurrentChooseRate() {
            return [1, 10, 100][this.currentRateIndex % 3];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9DaG9vc2VXZWFwb25JbmZvUmF0ZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlNwcml0ZUZyYW1lIiwidjIiLCJ2MyIsIlR3ZWVuIiwiZmluZCIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2hvb3NlV2VhcG9uSW5mb1JhdGVDdGwiLCJ0eXBlIiwiY3VycmVudFJhdGVJbmRleCIsInN0YXRlIiwiaSIsInJhdGVCdXR0b25MaXN0IiwibGVuZ3RoIiwibm9kZSIsImRpciIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsIm5vcm1hbGl6ZSIsInBvcyIsIm11bHRpcGx5U2NhbGFyIiwicG9zaXRpb24iLCJ4IiwieSIsImFkZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJnZXRDdXJyZW50Q2hvb3NlUmF0ZSIsInNldFN0YXRlIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiaW5kZXhPZiIsImdldFN0YXRlIiwiYW5nbGUiLCJwcm9taXNlTGlzdCIsInB1c2giLCJtb3ZlVG9BY3Rpb24iLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInRvIiwiY2FsbCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsRSxPQUFBQSxFO0FBQWdCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ2xGQyxNQUFBQSxLLGdCQUFBQSxLOzs7Ozs7QUFD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QUFMLEdBQXdCLENBQXBDLENBQVA7QUFDSDs7OztRQWpFd0NaLFM7Ozs7O2lCQUVULEU7Ozs7Ozs7aUJBRW1CLEU7Ozs7Ozs7aUJBRUQsRTs7Ozs7OztpQkFFZCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVBdGxhcywgU3ByaXRlRnJhbWUsIHYyLCB2MywgVmVjMywgVmVjMiwgVHdlZW4sIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdDaG9vc2VXZWFwb25JbmZvUmF0ZUN0bCcpXHJcbmV4cG9ydCBjbGFzcyBDaG9vc2VXZWFwb25JbmZvUmF0ZUN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcmF0ZUJ1dHRvbkxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyByYXRlQnV0dG9uU3ByaXRlRnJhbWVMaWdodDogU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyByYXRlQnV0dG9uU3ByaXRlRnJhbWVHcmF5OiBTcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgcmF0ZUJ1dHRvblBhcmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0ZUluZGV4ID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJhdGVCdXR0b25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5yYXRlQnV0dG9uTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHYyKDAsIDEpLnJvdGF0ZShNYXRoLlBJICogMiAqIDEgLyAzICogaSAtIE1hdGguUEkgKiAyICogMjcwIC8gMzYwKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGRpci5tdWx0aXBseVNjYWxhcig4MClcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKHBvcy54LCBwb3MueSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ3YWl0XCIsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCByYXRlIGluZGV4XCIsIHRoaXMuY3VycmVudFJhdGVJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY2hvb3NlLXJhdGUtY29zdFwiLCB0aGlzLmdldEN1cnJlbnRDaG9vc2VSYXRlKCkpOy8vIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ3YWl0XCIpO1xyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcbiAgICAgICAgaWYgKGN1c3RvbURhdGEuaW5kZXhPZihcInJhdGVcIikgPiAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXi+i9rOaMiemSrlwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSAhPT0nd2FpdCcpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJhdGVJbmRleCsrO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmN1cnJlbnRSYXRlSW5kZXggJSAzICogMTIwO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yYXRlQnV0dG9uUGFyZW50Tm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsMCwgYW5nbGUpO1xyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJhdGVCdXR0b25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucmF0ZUJ1dHRvbkxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdjIoMCwgMSkucm90YXRlKE1hdGguUEkgKiAyICogMSAvIDMgKiBpIC0gTWF0aC5QSSAqIDIgKiAoMjcwICsgYW5nbGUpIC8gMzYwKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBkaXIubXVsdGlwbHlTY2FsYXIoODApO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5wb3NpdGlvbiA9IHYzKHBvcy54LCBwb3MueSwgMCk7IFxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLm1vdmVUb0FjdGlvbihub2RlLCBwb3MpKSAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ3YWl0XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVUb0FjdGlvbihub2RlOiBOb2RlLCBwb3M6IFZlYzIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKHBvcy54LCBwb3MueSwgMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDaG9vc2VSYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAxMCwxMDBdW3RoaXMuY3VycmVudFJhdGVJbmRleCAlIDNdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==