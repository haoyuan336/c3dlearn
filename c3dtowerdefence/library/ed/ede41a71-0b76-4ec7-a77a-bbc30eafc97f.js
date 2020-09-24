System.register(["cc", "code-quality:cr", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, loader, SpriteFrame, SpriteComponent, BaseObject, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyInfoCellPrefab;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      loader = _cc.loader;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ede41pxC3ZOx6d6u8MOr8l/", "EnemyInfoCellPrefab", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyInfoCellPrefab", EnemyInfoCellPrefab = (_dec = ccclass('EnemyInfoCellPrefab'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(EnemyInfoCellPrefab, _ref);

        function EnemyInfoCellPrefab() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyInfoCellPrefab);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyInfoCellPrefab)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "enemyIconNode", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyInfoCellPrefab, [{
          key: "init",
          value: function init(gameController, data) {
            var _this2 = this;

            var enemyType = data["enemyType"];
            console.log("enemy type", enemyType);
            var gameConfig = gameController.getGameConfig().json; // super.objectType = enemyType;
            // console.log("super object type", super.objectType);

            _get(_getPrototypeOf(EnemyInfoCellPrefab.prototype), "init", this).call(this, gameConfig, gameController, null, null, enemyType);

            this.gameController.node.on("refer-enemy-info-cell", function () {
              _this2.referUI();
            });
          }
        }, {
          key: "referUI",
          value: function referUI() {
            var _this3 = this;

            //刷新UI 
            var isActive = this.getEnemyIsActive();
            console.log("is active", isActive);

            if (isActive) {
              var spriteFrameIconStr = this.getIconSprteFrame(); //如果是激活了

              console.log("sprite frame icon str", spriteFrameIconStr);
              loader.loadRes(spriteFrameIconStr + "/spriteFrame", SpriteFrame, function (err, result) {
                if (!err) {
                  _this3.enemyIconNode.getComponent(SpriteComponent).spriteFrame = result;
                }
              });
            }
          } // public init(gameConfig: Object, gameController: GameController){
          // }
          // public init() {
          //     // super.init(gameConfig, gameController);
          // }
          // public init(gameConfig: Object, gameController: GameController, objectType?: string){
          //     super.init(gameConfig, gameController);
          //     // super.objectType = objectType;
          //     // console.log("object type", super.objectType);
          //     // let gameConfig = gameController.getGameConfig().json;
          //     // super.init(gameConfig, gameController);
          //     // //获取是否激活了
          //     // let isActive = this.getEnemyIsActive();
          //     // if (isActive){
          //     // }
          // }

        }]);

        return EnemyInfoCellPrefab;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyIconNode", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9DZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlJbmZvQ2VsbFByZWZhYiIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsImRhdGEiLCJlbmVteVR5cGUiLCJjb25zb2xlIiwibG9nIiwiZ2FtZUNvbmZpZyIsImdldEdhbWVDb25maWciLCJqc29uIiwibm9kZSIsIm9uIiwicmVmZXJVSSIsImlzQWN0aXZlIiwiZ2V0RW5lbXlJc0FjdGl2ZSIsInNwcml0ZUZyYW1lSWNvblN0ciIsImdldEljb25TcHJ0ZUZyYW1lIiwibG9hZFJlcyIsImVyciIsInJlc3VsdCIsImVuZW15SWNvbk5vZGUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFvQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7Ozs7QUFDaEVDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROztxQ0FHSkMsbUIsV0FEWkYsT0FBTyxDQUFDLHFCQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUVHUyxjLEVBQWdDQyxJLEVBQWM7QUFBQTs7QUFDdEQsZ0JBQUlDLFNBQVMsR0FBR0QsSUFBSSxDQUFDLFdBQUQsQ0FBcEI7QUFDQUUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsU0FBMUI7QUFDQSxnQkFBSUcsVUFBVSxHQUFHTCxjQUFjLENBQUNNLGFBQWYsR0FBK0JDLElBQWhELENBSHNELENBSXREO0FBQ0E7O0FBQ0EsMEZBQVdGLFVBQVgsRUFBdUJMLGNBQXZCLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDLEVBQW1ERSxTQUFuRDs7QUFDQSxpQkFBS0YsY0FBTCxDQUFvQlEsSUFBcEIsQ0FBeUJDLEVBQXpCLENBQTRCLHVCQUE1QixFQUFxRCxZQUFJO0FBQ3JELGNBQUEsTUFBSSxDQUFDQyxPQUFMO0FBQ0gsYUFGRDtBQUdIOzs7b0NBQ2dCO0FBQUE7O0FBQ2I7QUFDQSxnQkFBSUMsUUFBUSxHQUFHLEtBQUtDLGdCQUFMLEVBQWY7QUFDQVQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5Qk8sUUFBekI7O0FBQ0EsZ0JBQUlBLFFBQUosRUFBYztBQUNWLGtCQUFJRSxrQkFBa0IsR0FBRyxLQUFLQyxpQkFBTCxFQUF6QixDQURVLENBRVY7O0FBQ0FYLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDUyxrQkFBckM7QUFDQXJCLGNBQUFBLE1BQU0sQ0FBQ3VCLE9BQVAsQ0FBZUYsa0JBQWtCLEdBQUcsY0FBcEMsRUFBb0RwQixXQUFwRCxFQUFpRSxVQUFDdUIsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQzlFLG9CQUFJLENBQUNELEdBQUwsRUFBVTtBQUNOLGtCQUFBLE1BQUksQ0FBQ0UsYUFBTCxDQUFtQkMsWUFBbkIsQ0FBZ0N6QixlQUFoQyxFQUFpRDBCLFdBQWpELEdBQStESCxNQUEvRDtBQUNIO0FBQ0osZUFKRDtBQU1IO0FBRUosVyxDQUNEO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBbEQ2QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIEdhbWUsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUluZm9DZWxsUHJlZmFiJylcclxuZXhwb3J0IGNsYXNzIEVuZW15SW5mb0NlbGxQcmVmYWIgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUljb25Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZGF0YTogT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZSA9IGRhdGFbXCJlbmVteVR5cGVcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSB0eXBlXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSBnYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgICAgICAvLyBzdXBlci5vYmplY3RUeXBlID0gZW5lbXlUeXBlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VwZXIgb2JqZWN0IHR5cGVcIiwgc3VwZXIub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlciwgbnVsbCwgbnVsbCwgZW5lbXlUeXBlKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJyZWZlci1lbmVteS1pbmZvLWNlbGxcIiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZWZlclVJKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZlclVJKCkge1xyXG4gICAgICAgIC8v5Yi35pawVUkgXHJcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gdGhpcy5nZXRFbmVteUlzQWN0aXZlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpcyBhY3RpdmVcIiwgaXNBY3RpdmUpO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVJY29uU3RyID0gdGhpcy5nZXRJY29uU3BydGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAvL+WmguaenOaYr+a/gOa0u+S6hlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwcml0ZSBmcmFtZSBpY29uIHN0clwiLCBzcHJpdGVGcmFtZUljb25TdHIpO1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhzcHJpdGVGcmFtZUljb25TdHIgKyBcIi9zcHJpdGVGcmFtZVwiLCBTcHJpdGVGcmFtZSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJY29uTm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcil7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gcHVibGljIGluaXQoKSB7XHJcbiAgICAvLyAgICAgLy8gc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcblxyXG5cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgb2JqZWN0VHlwZT86IHN0cmluZyl7XHJcbiAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAvLyAgICAgLy8gc3VwZXIub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJvYmplY3QgdHlwZVwiLCBzdXBlci5vYmplY3RUeXBlKTtcclxuICAgIC8vICAgICAvLyBsZXQgZ2FtZUNvbmZpZyA9IGdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgLy8gICAgIC8vIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgLy8gICAgIC8vIC8v6I635Y+W5piv5ZCm5r+A5rS75LqGXHJcblxyXG4gICAgLy8gICAgIC8vIGxldCBpc0FjdGl2ZSA9IHRoaXMuZ2V0RW5lbXlJc0FjdGl2ZSgpO1xyXG4gICAgLy8gICAgIC8vIGlmIChpc0FjdGl2ZSl7XHJcblxyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vIH1cclxufVxyXG4iXX0=