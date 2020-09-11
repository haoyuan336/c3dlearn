System.register(["cc", "code-quality:cr", "./EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, EnemyBase, _dec, _class, _crd, ccclass, property, EnemyCube;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

        return EnemyCube;
      }(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
        error: Error()
      }), EnemyBase) : EnemyBase)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlDdWJlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUN1YmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBRUFDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzsyQkFFSkMsUyxXQURaRixPQUFPLENBQUMsVUFBRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSAsaXNWYWxpZH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vLi4vdXRpbC9TdGF0ZSdcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteUJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnRW5lbUN1YmUnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDdWJlIGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIC8vIGluaXQoZ2FtZUNvbmZpZzogSnNvbkFzc2V0LCBwYXRoTm9kZUxpc3Q6IE5vZGVbXSl7XHJcbiAgICAgICBcclxuICAgIC8vICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIHBhdGhOb2RlTGlzdCk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19