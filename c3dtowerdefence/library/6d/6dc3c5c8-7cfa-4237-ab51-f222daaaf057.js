System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, CameraComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EnemyHealthBarCtl;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      CameraComponent = _cc.CameraComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6dc3cXIfPpCN6tR8iLaqvBX", "EnemyHealthBarCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyHealthBarCtl", EnemyHealthBarCtl = (_dec = ccclass('EnemyHealthBarCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(EnemyHealthBarCtl, _Component);

        function EnemyHealthBarCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyHealthBarCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyHealthBarCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyHealthBarPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraNode", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyHealthBarCtl, [{
          key: "onLoad",
          value: function onLoad() {
            this.node.on("add-one-enemy", function (enemyNode) {// enemyNode.on("run", () => {
              //     let healthBar = instantiate(this.enemyHealthBarPrefab);
              //     healthBar.parent = this.node;
              //     healthBar.active = false;
              //     enemyNode.emit("set-health-bar", healthBar, this.cameraNode);
              // })
            });
            this.node.on("remove-one-enemy", function () {});
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "update",
          value: function update(deltaTime) {}
        }]);

        return EnemyHealthBarCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUhlYWx0aEJhckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiQ2FtZXJhQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlIZWFsdGhCYXJDdGwiLCJ0eXBlIiwibm9kZSIsIm9uIiwiZW5lbXlOb2RlIiwiZGVsdGFUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUF5RUMsTUFBQUEsZSxPQUFBQSxlOzs7Ozs7QUFDdkdDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O21DQUdKQyxpQixXQURaRixPQUFPLENBQUMsbUJBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTDtBQUFSLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFSjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FFQTtBQUVMLGlCQUFLSyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxlQUFiLEVBQThCLFVBQUNDLFNBQUQsRUFBcUIsQ0FDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0gsYUFSRDtBQVNBLGlCQUFLRixJQUFMLENBQVVDLEVBQVYsQ0FBYSxrQkFBYixFQUFpQyxZQUFNLENBRXRDLENBRkQ7QUFHSDs7O2tDQUNPLENBRVA7OztpQ0FFTUUsUyxFQUFtQixDQUN6Qjs7OztRQTFCa0NWLFM7Ozs7O2lCQUVHLEk7Ozs7Ozs7aUJBR0QsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIFVJQ29vcmRpbmF0ZVRyYWNrZXJDb21wb25lbnQsIENhbWVyYUNvbXBvbmVudCwgRXZlbnRIYW5kbGVyLCBWZWMyLCB2MiwgdjMsIFZlYzMgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnRW5lbXlIZWFsdGhCYXJDdGwnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlIZWFsdGhCYXJDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ2FtZXJhQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYWRkLW9uZS1lbmVteVwiLCAoZW5lbXlOb2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGVuZW15Tm9kZS5vbihcInJ1blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgaGVhbHRoQmFyID0gaW5zdGFudGlhdGUodGhpcy5lbmVteUhlYWx0aEJhclByZWZhYik7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFsdGhCYXIucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhbHRoQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgZW5lbXlOb2RlLmVtaXQoXCJzZXQtaGVhbHRoLWJhclwiLCBoZWFsdGhCYXIsIHRoaXMuY2FtZXJhTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlbW92ZS1vbmUtZW5lbXlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIH1cclxufVxyXG4iXX0=