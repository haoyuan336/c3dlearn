System.register(["cc", "code-quality:cr", "./CubeGroup.js", "./My2Array.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, CCInteger, instantiate, v3, CubeSet, CubeGroupType, My2dArray, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GameManager;

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

  function _reportPossibleCrUseOfCubeSet(extras) {
    _reporterNs.report("CubeSet", "./CubeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubeGroupType(extras) {
    _reporterNs.report("CubeGroupType", "./CubeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMy2dArray(extras) {
    _reporterNs.report("My2dArray", "./My2Array", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CubeGroupJs) {
      CubeSet = _CubeGroupJs.CubeSet;
      CubeGroupType = _CubeGroupJs.CubeGroupType;
    }, function (_My2ArrayJs) {
      My2dArray = _My2ArrayJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "00f44e7p+ZDMLh6HSX5DUgg", "GameManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameManager, _Component);

        function GameManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cubePrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "widthCount", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hieghtCount", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cubeDistance", _descriptor4, _assertThisInitialized(_this));

          _this.currentShowCubeSet = null;
          _this.currentMoveCubeSet = null;
          _this.myMapData = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
            error: Error()
          }), My2dArray) : My2dArray)(_this.widthCount, _this.hieghtCount, 0);
          _this.currentMoveTime = 0;
          return _this;
        }

        _createClass(GameManager, [{
          key: "start",
          value: function start() {
            this.drawFrame(v3(((this.widthCount + 2) * -0.5 + 3) * this.cubeDistance, 14 * this.cubeDistance, 0), 6, 6);
            this.drawFrame(v3(0, 0, 0), this.widthCount + 2, this.hieghtCount + 2);
          }
        }, {
          key: "checkIsNull",
          value: function checkIsNull(x, y) {
            console.log("x", x);

            if (y < 0 || y >= this.widthCount) {
              return true;
            }

            console.log('check null', y);

            if (x >= this.hieghtCount) {
              return false;
            }

            if (x < 0) {
              return true;
            }

            var result = this.myMapData.getValue(x, y);
            return result ? true : false;
          }
        }, {
          key: "drawFrame",
          value: function drawFrame(centPos, frameWidth, frameHeigt) {
            //绘制边框
            for (var i = 0; i < frameWidth; i++) {
              for (var j = 0; j < 2; j++) {
                var node = instantiate(this.cubePrefab);
                node.parent = this.node;
                var x = (frameWidth - 1) * -0.5 * this.cubeDistance + i * this.cubeDistance;
                var y = (frameHeigt - 1) * -0.5 * this.cubeDistance + j * (frameHeigt - 1) * this.cubeDistance;
                node.setPosition(v3(x, y, 0).add(centPos));
              }
            }

            for (var _i = 0; _i < frameHeigt - 2; _i++) {
              for (var _j = 0; _j < 2; _j++) {
                var _node = instantiate(this.cubePrefab);

                _node.parent = this.node;

                var _y = (frameHeigt - 3) * -0.5 * this.cubeDistance + _i * this.cubeDistance;

                var _x = (frameWidth - 1) * -0.5 * this.cubeDistance + _j * (frameWidth - 1) * this.cubeDistance;

                _node.setPosition(v3(_x, _y, 0).add(centPos));
              }
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            var _this2 = this;

            if (!this.currentShowCubeSet) {
              //如果当前显示的方块不可用，那么创建一个显示的方块
              //随机一个枚举值
              console.log(_crd && CubeGroupType === void 0 ? (_reportPossibleCrUseOfCubeGroupType({
                error: Error()
              }), CubeGroupType) : CubeGroupType);
              var length = Object.keys(_crd && CubeGroupType === void 0 ? (_reportPossibleCrUseOfCubeGroupType({
                error: Error()
              }), CubeGroupType) : CubeGroupType).length / 2; // console.log("length", length);

              var randomIndex = Math.round(Math.random() * (length - 1)); // console.log("random index", randomIndex);
              // let type = CubeGroupType[randomIndex]
              // console.log("随机到的 type", type);

              var cubeSet = new (_crd && CubeSet === void 0 ? (_reportPossibleCrUseOfCubeSet({
                error: Error()
              }), CubeSet) : CubeSet)(randomIndex, this);
              this.currentShowCubeSet = cubeSet;
              this.currentShowCubeSet.show(v3(-3.3, 15, 0));
            }

            if (this.currentShowCubeSet && !this.currentMoveCubeSet) {
              this.currentMoveCubeSet = this.currentShowCubeSet;
              this.currentShowCubeSet = undefined;
            }

            if (this.currentMoveCubeSet && this.currentMoveTime > 0.1) {
              this.currentMoveTime = 0;
              this.currentMoveCubeSet.moveDown().then(function (type) {
                if (!type) {
                  _this2.currentMoveCubeSet = undefined;
                  _this2.currentMoveTime = 0;
                }
              });
            } else {
              this.currentMoveTime += dt;
            }
          }
        }, {
          key: "createOneCubeNode",
          value: function createOneCubeNode() {
            var node = instantiate(this.cubePrefab);
            node.parent = this.node;
            return node;
          }
        }, {
          key: "getMapSize",
          value: function getMapSize() {
            return {
              width: this.widthCount,
              height: this.hieghtCount
            };
          }
        }, {
          key: "getCubeDistance",
          value: function getCubeDistance() {
            return this.cubeDistance;
          }
        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "widthCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hieghtCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cubeDistance", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9lbHVvc2ljdWJlL2Fzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJDQ0ludGVnZXIiLCJpbnN0YW50aWF0ZSIsInYzIiwiQ3ViZVNldCIsIkN1YmVHcm91cFR5cGUiLCJNeTJkQXJyYXkiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lTWFuYWdlciIsInR5cGUiLCJjdXJyZW50U2hvd0N1YmVTZXQiLCJjdXJyZW50TW92ZUN1YmVTZXQiLCJteU1hcERhdGEiLCJ3aWR0aENvdW50IiwiaGllZ2h0Q291bnQiLCJjdXJyZW50TW92ZVRpbWUiLCJkcmF3RnJhbWUiLCJjdWJlRGlzdGFuY2UiLCJ4IiwieSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJnZXRWYWx1ZSIsImNlbnRQb3MiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlndCIsImkiLCJqIiwibm9kZSIsImN1YmVQcmVmYWIiLCJwYXJlbnQiLCJzZXRQb3NpdGlvbiIsImFkZCIsImR0IiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsInJhbmRvbUluZGV4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY3ViZVNldCIsInNob3ciLCJ1bmRlZmluZWQiLCJtb3ZlRG93biIsInRoZW4iLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFOzs7O0FBQzdEQyxNQUFBQSxPLGdCQUFBQSxPO0FBQVNDLE1BQUFBLGEs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QUFMLEdBQWMsS0FBS0YsSUFBbkI7QUFDQSxtQkFBT0EsSUFBUDtBQUNIOzs7dUNBQ1k7QUFDVCxtQkFBTztBQUFFa0IsY0FBQUEsS0FBSyxFQUFFLEtBQUtsQyxVQUFkO0FBQTBCbUMsY0FBQUEsTUFBTSxFQUFFLEtBQUtsQztBQUF2QyxhQUFQO0FBQ0g7Ozs0Q0FDeUI7QUFDdEIsbUJBQU8sS0FBS0csWUFBWjtBQUNIOzs7O1FBbEc0Qm5CLFM7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBRUEsQzs7Ozs7OztpQkFFQyxFOzs7Ozs7O2lCQUVDLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgQ0NJbnRlZ2VyLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzMsIGlzVmFsaWQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBDdWJlU2V0LCBDdWJlR3JvdXBUeXBlIH0gZnJvbSBcIi4vQ3ViZUdyb3VwXCI7XG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vTXkyQXJyYXknO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbkBjY2NsYXNzKCdHYW1lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHB1YmxpYyBjdWJlUHJlZmFiOiBQcmVmYWIgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXG4gICAgcHVibGljIHdpZHRoQ291bnQ6IG51bWJlciA9IDg7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXG4gICAgcHVibGljIGhpZWdodENvdW50OiBudW1iZXIgPSAxMjtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcbiAgICBwdWJsaWMgY3ViZURpc3RhbmNlOiBudW1iZXIgPSAxLjE7XG5cblxuICAgIHByaXZhdGUgY3VycmVudFNob3dDdWJlU2V0OiBDdWJlU2V0ID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlQ3ViZVNldDogQ3ViZVNldCA9IG51bGw7XG4gICAgcHJpdmF0ZSBteU1hcERhdGE6IE15MmRBcnJheTxudW1iZXI+ID0gbmV3IE15MmRBcnJheSh0aGlzLndpZHRoQ291bnQsIHRoaXMuaGllZ2h0Q291bnQsIDApO1xuICAgIHByaXZhdGUgY3VycmVudE1vdmVUaW1lOiBudW1iZXIgPSAwO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmRyYXdGcmFtZSh2MygoKHRoaXMud2lkdGhDb3VudCArIDIpICogLTAuNSArIDMpICogdGhpcy5jdWJlRGlzdGFuY2UsIDE0ICogdGhpcy5jdWJlRGlzdGFuY2UsIDApLCA2LCA2KTtcbiAgICAgICAgdGhpcy5kcmF3RnJhbWUodjMoMCwgMCwgMCksIHRoaXMud2lkdGhDb3VudCArIDIsIHRoaXMuaGllZ2h0Q291bnQgKyAyKTtcblxuICAgIH1cbiAgICBjaGVja0lzTnVsbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInhcIiwgeClcbiAgICAgICAgaWYgKHkgPCAwIHx8IHkgPj0gdGhpcy53aWR0aENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgbnVsbCcsIHkpO1xuICAgICAgICBpZiAoeCA+PSB0aGlzLmhpZWdodENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5teU1hcERhdGEuZ2V0VmFsdWUoeCwgeSk7XG4gICAgICAgIHJldHVybiByZXN1bHQgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGRyYXdGcmFtZShjZW50UG9zOiBWZWMzLCBmcmFtZVdpZHRoOiBudW1iZXIsIGZyYW1lSGVpZ3Q6IG51bWJlcikge1xuICAgICAgICAvL+e7mOWItui+ueahhlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmcmFtZVdpZHRoKTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IChmcmFtZVdpZHRoIC0gMSkgKiAtMC41ICogdGhpcy5jdWJlRGlzdGFuY2UgKyBpICogdGhpcy5jdWJlRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAoZnJhbWVIZWlndCAtIDEpICogLTAuNSAqIHRoaXMuY3ViZURpc3RhbmNlICsgaiAqIChmcmFtZUhlaWd0IC0gMSkgKiB0aGlzLmN1YmVEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHYzKHgsIHksIDApLmFkZChjZW50UG9zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZUhlaWd0IC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IChmcmFtZUhlaWd0IC0gMykgKiAtMC41ICogdGhpcy5jdWJlRGlzdGFuY2UgKyBpICogdGhpcy5jdWJlRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgbGV0IHggPSAoZnJhbWVXaWR0aCAtIDEpICogLTAuNSAqIHRoaXMuY3ViZURpc3RhbmNlICsgaiAqIChmcmFtZVdpZHRoIC0gMSkgKiB0aGlzLmN1YmVEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHYzKHgsIHksIDApLmFkZChjZW50UG9zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTaG93Q3ViZVNldCkge1xuICAgICAgICAgICAgLy/lpoLmnpzlvZPliY3mmL7npLrnmoTmlrnlnZfkuI3lj6/nlKjvvIzpgqPkuYjliJvlu7rkuIDkuKrmmL7npLrnmoTmlrnlnZdcbiAgICAgICAgICAgIC8v6ZqP5py65LiA5Liq5p6a5Li+5YC8XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhDdWJlR3JvdXBUeXBlKTtcbiAgICAgICAgICAgIGxldCBsZW5ndGg6IG51bWJlciA9IE9iamVjdC5rZXlzKEN1YmVHcm91cFR5cGUpLmxlbmd0aCAvIDI7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlbmd0aFwiLCBsZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcbiAgICAgICAgICAgIC8vIGxldCB0eXBlID0gQ3ViZUdyb3VwVHlwZVtyYW5kb21JbmRleF1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6ZqP5py65Yiw55qEIHR5cGVcIiwgdHlwZSk7XG4gICAgICAgICAgICBsZXQgY3ViZVNldCA9IG5ldyBDdWJlU2V0KHJhbmRvbUluZGV4LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNob3dDdWJlU2V0ID0gY3ViZVNldDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNob3dDdWJlU2V0LnNob3codjMoLTMuMywgMTUsIDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaG93Q3ViZVNldCAmJiAhdGhpcy5jdXJyZW50TW92ZUN1YmVTZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVDdWJlU2V0ID0gdGhpcy5jdXJyZW50U2hvd0N1YmVTZXQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG93Q3ViZVNldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZUN1YmVTZXQgJiYgdGhpcy5jdXJyZW50TW92ZVRpbWUgPiAwLjEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVDdWJlU2V0Lm1vdmVEb3duKCkudGhlbigodHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdHlwZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVDdWJlU2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVGltZSArPSBkdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVPbmVDdWJlTm9kZSgpIHtcbiAgICAgICAgbGV0IG5vZGU6IE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGdldE1hcFNpemUoKSB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB0aGlzLndpZHRoQ291bnQsIGhlaWdodDogdGhpcy5oaWVnaHRDb3VudCB9XG4gICAgfVxuICAgIGdldEN1YmVEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jdWJlRGlzdGFuY2U7XG4gICAgfVxufVxuIl19