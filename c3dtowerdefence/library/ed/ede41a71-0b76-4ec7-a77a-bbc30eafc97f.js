System.register(["cc", "code-quality:cr", "../BaseObject.js", "./MonsterInfoLayer.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, loader, SpriteFrame, SpriteComponent, find, BaseObject, MonsterInfoLayer, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyInfoCellPrefab;

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

  function _reportPossibleCrUseOfMonsterInfoLayer(extras) {
    _reporterNs.report("MonsterInfoLayer", "./MonsterInfoLayer", _context.meta, extras);
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
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_MonsterInfoLayerJs) {
      MonsterInfoLayer = _MonsterInfoLayerJs.MonsterInfoLayer;
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

          _this.uiControllerNode = null;
          return _this;
        }

        _createClass(EnemyInfoCellPrefab, [{
          key: "init",
          value: function init(gameController, data) {
            var _this2 = this;

            var enemyType = data["enemyType"];
            console.log("enemy type", enemyType);
            this.uiControllerNode = find('Canvas');
            var gameConfig = gameController.getGameConfig().json; // super.objectType = enemyType;
            // console.log("super object type", super.objectType);

            _get(_getPrototypeOf(EnemyInfoCellPrefab.prototype), "init", this).call(this, gameConfig, gameController, null, null, enemyType);

            this.gameController.node.on("refer-enemy-info-cell", function () {
              _this2.referUI();
            });
            this.node.on("click", this.onButtonClick.bind(this), this);
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
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick() {
            console.log("click");

            if (this.getEnemyIsActive()) {
              // thi
              this.uiControllerNode.getComponent(_crd && MonsterInfoLayer === void 0 ? (_reportPossibleCrUseOfMonsterInfoLayer({
                error: Error()
              }), MonsterInfoLayer) : MonsterInfoLayer).showMonsterInfoLayer(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9DZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiQmFzZU9iamVjdCIsIk1vbnN0ZXJJbmZvTGF5ZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUluZm9DZWxsUHJlZmFiIiwidHlwZSIsInVpQ29udHJvbGxlck5vZGUiLCJnYW1lQ29udHJvbGxlciIsImRhdGEiLCJlbmVteVR5cGUiLCJjb25zb2xlIiwibG9nIiwiZ2FtZUNvbmZpZyIsImdldEdhbWVDb25maWciLCJqc29uIiwibm9kZSIsIm9uIiwicmVmZXJVSSIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwiaXNBY3RpdmUiLCJnZXRFbmVteUlzQWN0aXZlIiwic3ByaXRlRnJhbWVJY29uU3RyIiwiZ2V0SWNvblNwcnRlRnJhbWUiLCJsb2FkUmVzIiwiZXJyIiwicmVzdWx0IiwiZW5lbXlJY29uTm9kZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwic2hvd01vbnN0ZXJJbmZvTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQW9CQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ2pGQyxNQUFBQSxVLGlCQUFBQSxVOztBQUdBQyxNQUFBQSxnQix1QkFBQUEsZ0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROztxQ0FHSkMsbUIsV0FEWkYsT0FBTyxDQUFDLHFCQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFJRlcsZ0IsR0FBeUIsSTs7Ozs7OytCQUNwQkMsYyxFQUFnQ0MsSSxFQUFjO0FBQUE7O0FBQ3RELGdCQUFJQyxTQUFTLEdBQUdELElBQUksQ0FBQyxXQUFELENBQXBCO0FBQ0FFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLFNBQTFCO0FBQ0EsaUJBQUtILGdCQUFMLEdBQXdCUCxJQUFJLENBQUMsUUFBRCxDQUE1QjtBQUNBLGdCQUFJYSxVQUFVLEdBQUdMLGNBQWMsQ0FBQ00sYUFBZixHQUErQkMsSUFBaEQsQ0FKc0QsQ0FLdEQ7QUFDQTs7QUFDQSwwRkFBV0YsVUFBWCxFQUF1QkwsY0FBdkIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0MsRUFBbURFLFNBQW5EOztBQUNBLGlCQUFLRixjQUFMLENBQW9CUSxJQUFwQixDQUF5QkMsRUFBekIsQ0FBNEIsdUJBQTVCLEVBQXFELFlBQUk7QUFDckQsY0FBQSxNQUFJLENBQUNDLE9BQUw7QUFDSCxhQUZEO0FBR0EsaUJBQUtGLElBQUwsQ0FBVUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsS0FBS0UsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckIsRUFBb0QsSUFBcEQ7QUFDSDs7O29DQUNnQjtBQUFBOztBQUNiO0FBQ0EsZ0JBQUlDLFFBQVEsR0FBRyxLQUFLQyxnQkFBTCxFQUFmO0FBQ0FYLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJTLFFBQXpCOztBQUNBLGdCQUFJQSxRQUFKLEVBQWM7QUFDVixrQkFBSUUsa0JBQWtCLEdBQUcsS0FBS0MsaUJBQUwsRUFBekIsQ0FEVSxDQUVWOztBQUNBYixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1csa0JBQXJDO0FBQ0ExQixjQUFBQSxNQUFNLENBQUM0QixPQUFQLENBQWVGLGtCQUFrQixHQUFHLGNBQXBDLEVBQW9EekIsV0FBcEQsRUFBaUUsVUFBQzRCLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUM5RSxvQkFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixrQkFBQSxNQUFJLENBQUNFLGFBQUwsQ0FBbUJDLFlBQW5CLENBQWdDOUIsZUFBaEMsRUFBaUQrQixXQUFqRCxHQUErREgsTUFBL0Q7QUFDSDtBQUNKLGVBSkQ7QUFNSDtBQUVKOzs7MENBQ2M7QUFDWGhCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FBQ0EsZ0JBQUksS0FBS1UsZ0JBQUwsRUFBSixFQUE0QjtBQUN4QjtBQUNBLG1CQUFLZixnQkFBTCxDQUFzQnNCLFlBQXRCO0FBQUE7QUFBQSx3REFBcURFLG9CQUFyRCxDQUEwRSxJQUExRTtBQUVIO0FBQ0osVyxDQUNEO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBL0Q2QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIEdhbWUsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgRW5lbXlJbmZvTGF5ZXJDdGwgfSBmcm9tICcuL0VuZW15SW5mb0xheWVyQ3RsJztcclxuaW1wb3J0IHsgTW9uc3RlckluZm9MYXllciB9IGZyb20gJy4vTW9uc3RlckluZm9MYXllcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnRW5lbXlJbmZvQ2VsbFByZWZhYicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUluZm9DZWxsUHJlZmFiIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJY29uTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgdWlDb250cm9sbGVyTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIGRhdGE6IE9iamVjdCkge1xyXG4gICAgICAgIGxldCBlbmVteVR5cGUgPSBkYXRhW1wiZW5lbXlUeXBlXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgdHlwZVwiLCBlbmVteVR5cGUpO1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZSA9IGZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAgICAgLy8gc3VwZXIub2JqZWN0VHlwZSA9IGVuZW15VHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1cGVyIG9iamVjdCB0eXBlXCIsIHN1cGVyLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIsIG51bGwsIG51bGwsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJVSSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2xpY2tcIix0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVmZXJVSSgpIHtcclxuICAgICAgICAvL+WIt+aWsFVJIFxyXG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuZ2V0RW5lbXlJc0FjdGl2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXMgYWN0aXZlXCIsIGlzQWN0aXZlKTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lSWNvblN0ciA9IHRoaXMuZ2V0SWNvblNwcnRlRnJhbWUoKTtcclxuICAgICAgICAgICAgLy/lpoLmnpzmmK/mv4DmtLvkuoZcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcHJpdGUgZnJhbWUgaWNvbiBzdHJcIiwgc3ByaXRlRnJhbWVJY29uU3RyKTtcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoc3ByaXRlRnJhbWVJY29uU3RyICsgXCIvc3ByaXRlRnJhbWVcIiwgU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RW5lbXlJc0FjdGl2ZSgpKXtcclxuICAgICAgICAgICAgLy8gdGhpXHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5nZXRDb21wb25lbnQoTW9uc3RlckluZm9MYXllcikuc2hvd01vbnN0ZXJJbmZvTGF5ZXIodGhpcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKXtcclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgaW5pdCgpIHtcclxuICAgIC8vICAgICAvLyBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuXHJcblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBvYmplY3RUeXBlPzogc3RyaW5nKXtcclxuICAgIC8vICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgIC8vICAgICAvLyBzdXBlci5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdCB0eXBlXCIsIHN1cGVyLm9iamVjdFR5cGUpO1xyXG4gICAgLy8gICAgIC8vIGxldCBnYW1lQ29uZmlnID0gZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAvLyAgICAgLy8gc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAvLyAgICAgLy8gLy/ojrflj5bmmK/lkKbmv4DmtLvkuoZcclxuXHJcbiAgICAvLyAgICAgLy8gbGV0IGlzQWN0aXZlID0gdGhpcy5nZXRFbmVteUlzQWN0aXZlKCk7XHJcbiAgICAvLyAgICAgLy8gaWYgKGlzQWN0aXZlKXtcclxuXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==