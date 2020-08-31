System.register(["cc", "code-quality:cr", "./MenuUIBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, find, MenuUIBase, _dec, _class, _crd, ccclass, property, BuildTowerUI;

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

  function _reportPossibleCrUseOfMenuUIBase(extras) {
    _reporterNs.report("MenuUIBase", "./MenuUIBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuUIBaseJs) {
      MenuUIBase = _MenuUIBaseJs.MenuUIBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e6405P/+GFGaa0/qmo/iQAc", "BuildTowerUI", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildTowerUI", BuildTowerUI = (_dec = ccclass('BuildTowerUI'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(BuildTowerUI, _ref);

        function BuildTowerUI() {
          _classCallCheck(this, BuildTowerUI);

          return _possibleConstructorReturn(this, _getPrototypeOf(BuildTowerUI).apply(this, arguments));
        }

        _createClass(BuildTowerUI, [{
          key: "start",
          value: function start() {
            console.log("build tower ui");

            _get(_getPrototypeOf(BuildTowerUI.prototype), "start", this).call(this);

            var children = this.node.children;

            for (var i = 0; i < children.length; i++) {
              var node = children[i];
              node.on('click', this.onButtonClick.bind(this));
            }
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var nodeName = event.node.name;

            if (nodeName === 'BgNode') {
              this.state.setState("close-ui");
            } else {
              var index = nodeName.substring(nodeName.length - 1, nodeName.length);
              this.state.setState('close-ui');
              find("GameController").emit("build-one-tower", index, this.targetNode);
            }
          }
        }]);

        return BuildTowerUI;
      }(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
        error: Error()
      }), MenuUIBase) : MenuUIBase)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiZmluZCIsIk1lbnVVSUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWlsZFRvd2VyVUkiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJub2RlIiwiaSIsImxlbmd0aCIsIm9uIiwib25CdXR0b25DbGljayIsImJpbmQiLCJldmVudCIsImN1c3RvbURhdGEiLCJub2RlTmFtZSIsIm5hbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiaW5kZXgiLCJzdWJzdHJpbmciLCJlbWl0IiwidGFyZ2V0Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUErREMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBRS9EQyxNQUFBQSxVLGlCQUFBQSxVOzs7Ozs7QUFEREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7Ozs7Ozs7a0NBR0k7QUFDSkcsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7O0FBQ0E7O0FBQ0EsZ0JBQUlDLFFBQVEsR0FBRyxLQUFLQyxJQUFMLENBQVVELFFBQXpCOztBQUNBLGlCQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsa0JBQUlELElBQUksR0FBR0QsUUFBUSxDQUFDRSxDQUFELENBQW5CO0FBQ0FELGNBQUFBLElBQUksQ0FBQ0csRUFBTCxDQUFRLE9BQVIsRUFBaUIsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBakI7QUFDSDtBQUNKOzs7d0NBQ2FDLEssRUFBd0JDLFUsRUFBWTtBQUM5QyxnQkFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUNOLElBQU4sQ0FBV1MsSUFBMUI7O0FBQ0EsZ0JBQUlELFFBQVEsS0FBSyxRQUFqQixFQUEyQjtBQUN2QixtQkFBS0UsS0FBTCxDQUFXQyxRQUFYLENBQW9CLFVBQXBCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsa0JBQUlDLEtBQUssR0FBR0osUUFBUSxDQUFDSyxTQUFULENBQW1CTCxRQUFRLENBQUNOLE1BQVQsR0FBa0IsQ0FBckMsRUFBd0NNLFFBQVEsQ0FBQ04sTUFBakQsQ0FBWjtBQUNBLG1CQUFLUSxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsVUFBcEI7QUFDQW5CLGNBQUFBLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCc0IsSUFBdkIsQ0FBNEIsaUJBQTVCLEVBQStDRixLQUEvQyxFQUFzRCxLQUFLRyxVQUEzRDtBQUNIO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEJ1dHRvbkNvbXBvbmVudCwgVHdlZW4sIFZlYzMsIHYzLCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnQgeyBNZW51VUlCYXNlIH0gZnJvbSAnLi9NZW51VUlCYXNlJ1xyXG5AY2NjbGFzcygnQnVpbGRUb3dlclVJJylcclxuZXhwb3J0IGNsYXNzIEJ1aWxkVG93ZXJVSSBleHRlbmRzIE1lbnVVSUJhc2Uge1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnVpbGQgdG93ZXIgdWlcIik7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLm5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBub2RlLm9uKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBsZXQgbm9kZU5hbWUgPSBldmVudC5ub2RlLm5hbWU7XHJcbiAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnQmdOb2RlJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9kZU5hbWUuc3Vic3RyaW5nKG5vZGVOYW1lLmxlbmd0aCAtIDEsIG5vZGVOYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2Nsb3NlLXVpJyk7XHJcbiAgICAgICAgICAgIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwiYnVpbGQtb25lLXRvd2VyXCIsIGluZGV4LCB0aGlzLnRhcmdldE5vZGUpOyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19