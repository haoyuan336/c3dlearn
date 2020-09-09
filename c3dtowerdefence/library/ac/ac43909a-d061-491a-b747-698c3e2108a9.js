System.register(["cc", "code-quality:cr", "./EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, EnemyBase, _dec, _class, _crd, ccclass, property, EnemyCube;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./EnemyBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_EnemyBaseJs) {
      EnemyBase = _EnemyBaseJs.EnemyBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ac439Ca0GFJGrdHaYw+IQip", "EnemyCube", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyCube", EnemyCube = (_dec = ccclass('EnemCube'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(EnemyCube, _ref);

        function EnemyCube() {
          _classCallCheck(this, EnemyCube);

          return _possibleConstructorReturn(this, _getPrototypeOf(EnemyCube).apply(this, arguments));
        }

        _createClass(EnemyCube, [{
          key: "init",
          value: function init(gameConfig, pathNodeList) {
            _get(_getPrototypeOf(EnemyCube.prototype), "init", this).call(this, gameConfig, pathNodeList);
          }
        }]);

        return EnemyCube;
      }(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
        error: Error()
      }), EnemyBase) : EnemyBase)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlDdWJlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUN1YmUiLCJnYW1lQ29uZmlnIiwicGF0aE5vZGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBRUFDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzsyQkFFSkMsUyxXQURaRixPQUFPLENBQUMsVUFBRCxDOzs7Ozs7Ozs7OzsrQkFFQ0csVSxFQUF1QkMsWSxFQUFxQjtBQUU3QyxnRkFBV0QsVUFBWCxFQUF1QkMsWUFBdkI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuLCBDYW1lcmFDb21wb25lbnQsIFZlYzIsIHYyLCBKc29uQXNzZXQsIGdhbWUgLGlzVmFsaWR9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuQGNjY2xhc3MoJ0VuZW1DdWJlJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q3ViZSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBpbml0KGdhbWVDb25maWc6IEpzb25Bc3NldCwgcGF0aE5vZGVMaXN0OiBOb2RlW10pe1xyXG4gICAgICAgXHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBwYXRoTm9kZUxpc3QpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==