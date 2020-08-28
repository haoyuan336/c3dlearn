System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, CameraComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EnemyHealthBarCtl;

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
      instantiate = _cc.instantiate;
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
            var _this2 = this;

            this.node.on("add-one-enemy", function (enemyNode) {
              enemyNode.on("run", function () {
                var healthBar = instantiate(_this2.enemyHealthBarPrefab);
                healthBar.parent = _this2.node;
                healthBar.active = false;
                enemyNode.emit("set-health-bar", healthBar, _this2.cameraNode);
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUhlYWx0aEJhckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJDYW1lcmFDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUhlYWx0aEJhckN0bCIsInR5cGUiLCJub2RlIiwib24iLCJlbmVteU5vZGUiLCJoZWFsdGhCYXIiLCJlbmVteUhlYWx0aEJhclByZWZhYiIsInBhcmVudCIsImFjdGl2ZSIsImVtaXQiLCJjYW1lcmFOb2RlIiwiZGVsdGFUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBaUVDLE1BQUFBLGUsT0FBQUEsZTs7Ozs7O0FBQ3ZHQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzttQ0FHSkMsaUIsV0FEWkYsT0FBTyxDQUFDLG1CQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRU47QUFBUixPQUFELEMsVUFHUkksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRUo7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBRUE7QUFBQTs7QUFFTCxpQkFBS0ssSUFBTCxDQUFVQyxFQUFWLENBQWEsZUFBYixFQUE4QixVQUFDQyxTQUFELEVBQXFCO0FBQy9DQSxjQUFBQSxTQUFTLENBQUNELEVBQVYsQ0FBYSxLQUFiLEVBQW9CLFlBQU07QUFDdEIsb0JBQUlFLFNBQVMsR0FBR1QsV0FBVyxDQUFDLE1BQUksQ0FBQ1Usb0JBQU4sQ0FBM0I7QUFDQUQsZ0JBQUFBLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixNQUFJLENBQUNMLElBQXhCO0FBQ0FHLGdCQUFBQSxTQUFTLENBQUNHLE1BQVYsR0FBbUIsS0FBbkI7QUFDQUosZ0JBQUFBLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGdCQUFmLEVBQWlDSixTQUFqQyxFQUE0QyxNQUFJLENBQUNLLFVBQWpEO0FBRUgsZUFORDtBQU9ILGFBUkQ7QUFTQSxpQkFBS1IsSUFBTCxDQUFVQyxFQUFWLENBQWEsa0JBQWIsRUFBaUMsWUFBTSxDQUV0QyxDQUZEO0FBR0g7OztrQ0FDTyxDQUVQOzs7aUNBRU1RLFMsRUFBbUIsQ0FDekI7Ozs7UUExQmtDakIsUzs7Ozs7aUJBRUcsSTs7Ozs7OztpQkFHRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgVUlDb29yZGluYXRlVHJhY2tlckNvbXBvbmVudCwgQ2FtZXJhQ29tcG9uZW50LCBFdmVudEhhbmRsZXIsIFZlYzIsIHYyLCB2MywgVmVjMyB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUhlYWx0aEJhckN0bCcpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUhlYWx0aEJhckN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhclByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDYW1lcmFDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBjYW1lcmFOb2RlOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJhZGQtb25lLWVuZW15XCIsIChlbmVteU5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgZW5lbXlOb2RlLm9uKFwicnVuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBoZWFsdGhCYXIgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15SGVhbHRoQmFyUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGhlYWx0aEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBoZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlbmVteU5vZGUuZW1pdChcInNldC1oZWFsdGgtYmFyXCIsIGhlYWx0aEJhciwgdGhpcy5jYW1lcmFOb2RlKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVtb3ZlLW9uZS1lbmVteVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==