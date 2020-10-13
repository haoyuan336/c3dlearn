System.register(["cc", "code-quality:cr", "../BaseObject.js", "./MonsterInfoLayer.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, loader, SpriteFrame, SpriteComponent, find, BaseObject, MonsterInfoLayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EnemyInfoCellPrefab;

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
      }), _dec3 = property({
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

          _initializerDefineProperty(_this, "newInfoTipsNode", _descriptor2, _assertThisInitialized(_this));

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
            this.referUI();
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
              var isShowed = this.getIsShowed();

              if (!isShowed) {
                this.newInfoTipsNode.active = true;
                this.uiControllerNode.emit("show-new-enemy-info-tips");
              }
            }
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick() {
            find("GameController").emit("player-button-click-audio");
            console.log("click");

            if (this.getEnemyIsActive()) {
              // thi
              this.uiControllerNode.getComponent(_crd && MonsterInfoLayer === void 0 ? (_reportPossibleCrUseOfMonsterInfoLayer({
                error: Error()
              }), MonsterInfoLayer) : MonsterInfoLayer).showMonsterInfoLayer(this);
              this.newInfoTipsNode.active = false;
              this.setShowed();
              this.uiControllerNode.emit("show-new-enemy-info-tips");
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "newInfoTipsNode", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9DZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiQmFzZU9iamVjdCIsIk1vbnN0ZXJJbmZvTGF5ZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUluZm9DZWxsUHJlZmFiIiwidHlwZSIsInVpQ29udHJvbGxlck5vZGUiLCJnYW1lQ29udHJvbGxlciIsImRhdGEiLCJlbmVteVR5cGUiLCJjb25zb2xlIiwibG9nIiwiZ2FtZUNvbmZpZyIsImdldEdhbWVDb25maWciLCJqc29uIiwibm9kZSIsIm9uIiwicmVmZXJVSSIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwiaXNBY3RpdmUiLCJnZXRFbmVteUlzQWN0aXZlIiwic3ByaXRlRnJhbWVJY29uU3RyIiwiZ2V0SWNvblNwcnRlRnJhbWUiLCJsb2FkUmVzIiwiZXJyIiwicmVzdWx0IiwiZW5lbXlJY29uTm9kZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwiaXNTaG93ZWQiLCJnZXRJc1Nob3dlZCIsIm5ld0luZm9UaXBzTm9kZSIsImFjdGl2ZSIsImVtaXQiLCJzaG93TW9uc3RlckluZm9MYXllciIsInNldFNob3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFvQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNqRkMsTUFBQUEsVSxpQkFBQUEsVTs7QUFHQUMsTUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBNUU2QixJOzs7Ozs7O2lCQUVFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgR2FtZSwgbG9hZGVyLCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBmaW5kIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBFbmVteUluZm9MYXllckN0bCB9IGZyb20gJy4vRW5lbXlJbmZvTGF5ZXJDdGwnO1xyXG5pbXBvcnQgeyBNb25zdGVySW5mb0xheWVyIH0gZnJvbSAnLi9Nb25zdGVySW5mb0xheWVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUluZm9DZWxsUHJlZmFiJylcclxuZXhwb3J0IGNsYXNzIEVuZW15SW5mb0NlbGxQcmVmYWIgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUljb25Ob2RlOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBuZXdJbmZvVGlwc05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgdWlDb250cm9sbGVyTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIGRhdGE6IE9iamVjdCkge1xyXG4gICAgICAgIGxldCBlbmVteVR5cGUgPSBkYXRhW1wiZW5lbXlUeXBlXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgdHlwZVwiLCBlbmVteVR5cGUpO1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZSA9IGZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAgICAgLy8gc3VwZXIub2JqZWN0VHlwZSA9IGVuZW15VHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1cGVyIG9iamVjdCB0eXBlXCIsIHN1cGVyLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIsIG51bGwsIG51bGwsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZlclVJKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVmZXJVSSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlZmVyVUkoKSB7XHJcbiAgICAgICAgLy/liLfmlrBVSSBcclxuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmdldEVuZW15SXNBY3RpdmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlzIGFjdGl2ZVwiLCBpc0FjdGl2ZSk7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZUljb25TdHIgPSB0aGlzLmdldEljb25TcHJ0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5r+A5rS75LqGXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3ByaXRlIGZyYW1lIGljb24gc3RyXCIsIHNwcml0ZUZyYW1lSWNvblN0cik7XHJcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKHNwcml0ZUZyYW1lSWNvblN0ciArIFwiL3Nwcml0ZUZyYW1lXCIsIFNwcml0ZUZyYW1lLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUljb25Ob2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGlzU2hvd2VkID0gdGhpcy5nZXRJc1Nob3dlZCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzU2hvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0luZm9UaXBzTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LW5ldy1lbmVteS1pbmZvLXRpcHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5ZXItYnV0dG9uLWNsaWNrLWF1ZGlvXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldEVuZW15SXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmdldENvbXBvbmVudChNb25zdGVySW5mb0xheWVyKS5zaG93TW9uc3RlckluZm9MYXllcih0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJbmZvVGlwc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd2VkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sbGVyTm9kZS5lbWl0KFwic2hvdy1uZXctZW5lbXktaW5mby10aXBzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKXtcclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgaW5pdCgpIHtcclxuICAgIC8vICAgICAvLyBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuXHJcblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBvYmplY3RUeXBlPzogc3RyaW5nKXtcclxuICAgIC8vICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgIC8vICAgICAvLyBzdXBlci5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdCB0eXBlXCIsIHN1cGVyLm9iamVjdFR5cGUpO1xyXG4gICAgLy8gICAgIC8vIGxldCBnYW1lQ29uZmlnID0gZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAvLyAgICAgLy8gc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAvLyAgICAgLy8gLy/ojrflj5bmmK/lkKbmv4DmtLvkuoZcclxuXHJcbiAgICAvLyAgICAgLy8gbGV0IGlzQWN0aXZlID0gdGhpcy5nZXRFbmVteUlzQWN0aXZlKCk7XHJcbiAgICAvLyAgICAgLy8gaWYgKGlzQWN0aXZlKXtcclxuXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==