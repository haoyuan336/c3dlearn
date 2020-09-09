System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CCFloat, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BaseObject;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f047fSpjWxIyqfTRsf+Ksl/", "BaseObject", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseObject", BaseObject = (_dec = ccclass('BaseObject'), _dec2 = property({
        type: ""
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(BaseObject, _Component);

        function BaseObject() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BaseObject);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseObject)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "objectType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rootNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animSpeedMulOffset", _descriptor3, _assertThisInitialized(_this));

          _this.baseGasNum = 0;
          _this.baseAttackNum = 0;
          _this.baseAttackRate = 0;
          _this.baseRotateAngle = 0;
          _this.rotateSpeed = 0;
          _this.baseGoldCount = 0;
          _this.currentGasNum = 0;
          _this.moveSpeed = 0;
          _this.isCollisionGround = false;
          _this.leftTime = 0;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "init",
          // 生命周期
          value: function init(gameConfig, startPos, endPos) {
            // this.baseGasNum = gameConfig[]
            this.baseGasNum = gameConfig[this.objectType].BaseGasNum;
            this.currentGasNum = this.baseGasNum;

            if (gameConfig[this.objectType].MoveSpeed) {
              this.moveSpeed = gameConfig[this.objectType].MoveSpeed;
            }

            if (gameConfig[this.objectType].isCollisionGround) {
              this.isCollisionGround = gameConfig[this.objectType].isCollisionGround;
            }

            if (gameConfig[this.objectType].BaseAttackNum) {
              this.baseAttackNum = gameConfig[this.objectType].BaseAttackNum;
            }

            if (gameConfig[this.objectType].ShootRate) {
              this.baseAttackRate = gameConfig[this.objectType].ShootRate;
            }

            if (gameConfig[this.objectType].BaseRotateAngle) {
              this.baseRotateAngle = gameConfig[this.objectType].BaseRotateAngle;
            }

            if (gameConfig[this.objectType].LeftTime) {
              this.leftTime = gameConfig[this.objectType].LeftTime;
            }

            if (gameConfig[this.objectType].RotateSpeed) {
              this.rotateSpeed = gameConfig[this.objectType].RotateSpeed;
            } // "BaseGoldCount": 1


            if (gameConfig[this.objectType].BaseGoldCount) {
              this.baseGoldCount = gameConfig[this.objectType].BaseGoldCount;
            }
          }
        }, {
          key: "getCurrentAttackNum",
          value: function getCurrentAttackNum(addValue) {
            if (addValue) {
              return this.baseAttackNum + addValue;
            }

            return this.baseAttackNum;
          }
        }, {
          key: "getCurrentSkillRotateAngle",
          value: function getCurrentSkillRotateAngle() {
            //获取旋转技能的旋转角度
            return this.baseRotateAngle;
          }
        }, {
          key: "getCurrentShootRate",
          value: function getCurrentShootRate() {
            // baseAttackNum
            return this.baseAttackRate + this.node.getComponent(BaseObject).baseAttackRate;
          }
        }, {
          key: "getCurrentGoldCount",
          value: function getCurrentGoldCount() {
            return this.baseGoldCount;
          }
        }]);

        return BaseObject;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objectType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animSpeedMulOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CYXNlT2JqZWN0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ0NGbG9hdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhc2VPYmplY3QiLCJ0eXBlIiwiYmFzZUdhc051bSIsImJhc2VBdHRhY2tOdW0iLCJiYXNlQXR0YWNrUmF0ZSIsImJhc2VSb3RhdGVBbmdsZSIsInJvdGF0ZVNwZWVkIiwiYmFzZUdvbGRDb3VudCIsImN1cnJlbnRHYXNOdW0iLCJtb3ZlU3BlZWQiLCJpc0NvbGxpc2lvbkdyb3VuZCIsImxlZnRUaW1lIiwiZ2FtZUNvbmZpZyIsInN0YXJ0UG9zIiwiZW5kUG9zIiwib2JqZWN0VHlwZSIsIkJhc2VHYXNOdW0iLCJNb3ZlU3BlZWQiLCJCYXNlQXR0YWNrTnVtIiwiU2hvb3RSYXRlIiwiQmFzZVJvdGF0ZUFuZ2xlIiwiTGVmdFRpbWUiLCJSb3RhdGVTcGVlZCIsIkJhc2VHb2xkQ291bnQiLCJhZGRWYWx1ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFzQkMsTUFBQUEsTyxPQUFBQSxPOzs7Ozs7QUFDOUNDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQUQsQyxVQUVSRixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTDtBQUFSLE9BQUQsQyxVQUVSRyxRQUFRLENB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ZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NTdHJpbmcsIFZlYzMsIENDRmxvYXQsIGdhbWUgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQmFzZU9iamVjdCcpXHJcbmV4cG9ydCBjbGFzcyBCYXNlT2JqZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBvYmplY3RUeXBlID0gXCJcIjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyByb290Tm9kZTogTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyBhbmltU3BlZWRNdWxPZmZzZXQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGJhc2VHYXNOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5rCU5YC8XHJcbiAgICBwdWJsaWMgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHB1YmxpYyBiYXNlQXR0YWNrUmF0ZTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vpopHnjodcclxuICAgIHB1YmxpYyBiYXNlUm90YXRlQW5nbGU6IG51bWJlciA9IDA7IC8v5Z+656GA5peL6L2s5oqA6IO977yM5peL6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgcm90YXRlU3BlZWQ6IG51bWJlciA9IDA7IC8v5peL6L2s5oqA6IO955qE5peL6L2s6KeS6YCf5bqmXHJcbiAgICBwdWJsaWMgYmFzZUdvbGRDb3VudDogbnVtYmVyID0gMDsgLy/ln7rnoYDnmoTph5HluIHkuKrmlbBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEdhc051bTogbnVtYmVyID0gMDsgLy/lvZPliY3nmoTmsJTlgLxcclxuXHJcbiAgICBwcm90ZWN0ZWQgbW92ZVNwZWVkOiBudW1iZXIgPSAwOyAvL+enu+WKqOmAn+W6plxyXG5cclxuICAgIHByb3RlY3RlZCBpc0NvbGxpc2lvbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm5LiO5Zyw6Z2i56Kw5pKe5Y+R55Sf5Y+N5by5XHJcblxyXG4gICAgcHVibGljIGxlZnRUaW1lOiBudW1iZXIgPSAwOyAvLyDnlJ/lkb3lkajmnJ9cclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgc3RhcnRQb3M/OiBWZWMzLCBlbmRQb3M/OiBWZWMzKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1tdXHJcbiAgICAgICAgdGhpcy5iYXNlR2FzTnVtID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHYXNOdW07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R2FzTnVtID0gdGhpcy5iYXNlR2FzTnVtO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Nb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaXNpb25Hcm91bmQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uaXNDb2xsaXNpb25Hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tOdW0gPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmF0ZSA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5TaG9vdFJhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZVJvdGF0ZUFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VSb3RhdGVBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5MZWZ0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkxlZnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLlJvdGF0ZVNwZWVkKXtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IGdhbWVDb25maWdbdGhpcy5vYmplY3RUeXBlXS5Sb3RhdGVTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gXCJCYXNlR29sZENvdW50XCI6IDFcclxuICAgICAgICBpZiAoZ2FtZUNvbmZpZ1t0aGlzLm9iamVjdFR5cGVdLkJhc2VHb2xkQ291bnQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VHb2xkQ291bnQgPSBnYW1lQ29uZmlnW3RoaXMub2JqZWN0VHlwZV0uQmFzZUdvbGRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50QXR0YWNrTnVtKGFkZFZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFkZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tOdW0gKyBhZGRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUF0dGFja051bTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlKCkge1xyXG4gICAgICAgIC8v6I635Y+W5peL6L2s5oqA6IO955qE5peL6L2s6KeS5bqmXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJvdGF0ZUFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTaG9vdFJhdGUoKSB7XHJcbiAgICAgICAgLy8gYmFzZUF0dGFja051bVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2tSYXRlICsgdGhpcy5ub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5iYXNlQXR0YWNrUmF0ZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRHb2xkQ291bnQoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUdvbGRDb3VudDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19