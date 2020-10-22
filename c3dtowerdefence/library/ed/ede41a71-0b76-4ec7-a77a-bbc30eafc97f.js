System.register(["cc", "code-quality:cr", "../BaseObject.js", "../GameInstance.js", "./MonsterInfoLayer.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, loader, SpriteFrame, SpriteComponent, find, BaseObject, GameInstance, MonsterInfoLayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EnemyInfoCellPrefab;

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

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../GameInstance", _context.meta, extras);
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
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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
          value: function init(gameConfig, data) {
            var _this2 = this;

            var enemyType = data["enemyType"];
            console.log("enemy type", enemyType);
            this.uiControllerNode = find('Canvas'); // let gameConfig = GameInstance.getInstance().getGameConfig().json;
            // super.objectType = enemyType;
            // console.log("super object type", super.objectType);

            _get(_getPrototypeOf(EnemyInfoCellPrefab.prototype), "init", this).call(this, gameConfig, null, null, enemyType);

            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getGameCtlNode().on("refer-enemy-info-cell", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9DZWxsUHJlZmFiLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwibG9hZGVyIiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiQmFzZU9iamVjdCIsIkdhbWVJbnN0YW5jZSIsIk1vbnN0ZXJJbmZvTGF5ZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUluZm9DZWxsUHJlZmFiIiwidHlwZSIsInVpQ29udHJvbGxlck5vZGUiLCJnYW1lQ29uZmlnIiwiZGF0YSIsImVuZW15VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnN0YW5jZSIsImdldEdhbWVDdGxOb2RlIiwib24iLCJyZWZlclVJIiwibm9kZSIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwiaXNBY3RpdmUiLCJnZXRFbmVteUlzQWN0aXZlIiwic3ByaXRlRnJhbWVJY29uU3RyIiwiZ2V0SWNvblNwcnRlRnJhbWUiLCJsb2FkUmVzIiwiZXJyIiwicmVzdWx0IiwiZW5lbXlJY29uTm9kZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwiaXNTaG93ZWQiLCJnZXRJc1Nob3dlZCIsIm5ld0luZm9UaXBzTm9kZSIsImFjdGl2ZSIsImVtaXQiLCJzaG93TW9uc3RlckluZm9MYXllciIsInNldFNob3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBb0JDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDakZDLE1BQUFBLFUsaUJBQUFBLFU7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QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztpQkE1RTZCLEk7Ozs7Ozs7aUJBRUUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBHYW1lLCBsb2FkZXIsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQsIGZpbmQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUluc3RhbmNlIH0gZnJvbSAnLi4vR2FtZUluc3RhbmNlJztcclxuLy8gaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEVuZW15SW5mb0xheWVyQ3RsIH0gZnJvbSAnLi9FbmVteUluZm9MYXllckN0bCc7XHJcbmltcG9ydCB7IE1vbnN0ZXJJbmZvTGF5ZXIgfSBmcm9tICcuL01vbnN0ZXJJbmZvTGF5ZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15SW5mb0NlbGxQcmVmYWInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlJbmZvQ2VsbFByZWZhYiBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SWNvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIG5ld0luZm9UaXBzTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyB1aUNvbnRyb2xsZXJOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IE9iamVjdCwgZGF0YTogT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZSA9IGRhdGFbXCJlbmVteVR5cGVcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSB0eXBlXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlID0gZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgLy8gbGV0IGdhbWVDb25maWcgPSBHYW1lSW5zdGFuY2UuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgICAgICAvLyBzdXBlci5vYmplY3RUeXBlID0gZW5lbXlUeXBlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VwZXIgb2JqZWN0IHR5cGVcIiwgc3VwZXIub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBudWxsLCBudWxsLCBlbmVteVR5cGUpO1xyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkub24oXCJyZWZlci1lbmVteS1pbmZvLWNlbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZmVyVUkoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImNsaWNrXCIsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZlclVJKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVmZXJVSSgpIHtcclxuICAgICAgICAvL+WIt+aWsFVJIFxyXG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IHRoaXMuZ2V0RW5lbXlJc0FjdGl2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXMgYWN0aXZlXCIsIGlzQWN0aXZlKTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lSWNvblN0ciA9IHRoaXMuZ2V0SWNvblNwcnRlRnJhbWUoKTtcclxuICAgICAgICAgICAgLy/lpoLmnpzmmK/mv4DmtLvkuoZcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcHJpdGUgZnJhbWUgaWNvbiBzdHJcIiwgc3ByaXRlRnJhbWVJY29uU3RyKTtcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoc3ByaXRlRnJhbWVJY29uU3RyICsgXCIvc3ByaXRlRnJhbWVcIiwgU3ByaXRlRnJhbWUsIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15SWNvbk5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuc3ByaXRlRnJhbWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgaXNTaG93ZWQgPSB0aGlzLmdldElzU2hvd2VkKCk7XHJcbiAgICAgICAgICAgIGlmICghaXNTaG93ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5mb1RpcHNOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZW1pdChcInNob3ctbmV3LWVuZW15LWluZm8tdGlwc1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljaygpIHtcclxuICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RW5lbXlJc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaVxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbGxlck5vZGUuZ2V0Q29tcG9uZW50KE1vbnN0ZXJJbmZvTGF5ZXIpLnNob3dNb25zdGVySW5mb0xheWVyKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0luZm9UaXBzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTaG93ZWQoKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsZXJOb2RlLmVtaXQoXCJzaG93LW5ldy1lbmVteS1pbmZvLXRpcHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpe1xyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIHB1YmxpYyBpbml0KCkge1xyXG4gICAgLy8gICAgIC8vIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gcHVibGljIGluaXQoZ2FtZUNvbmZpZzogT2JqZWN0LCBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIsIG9iamVjdFR5cGU/OiBzdHJpbmcpe1xyXG4gICAgLy8gICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgLy8gICAgIC8vIHN1cGVyLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0IHR5cGVcIiwgc3VwZXIub2JqZWN0VHlwZSk7XHJcbiAgICAvLyAgICAgLy8gbGV0IGdhbWVDb25maWcgPSBnYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgIC8vICAgICAvLyBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgIC8vICAgICAvLyAvL+iOt+WPluaYr+WQpua/gOa0u+S6hlxyXG5cclxuICAgIC8vICAgICAvLyBsZXQgaXNBY3RpdmUgPSB0aGlzLmdldEVuZW15SXNBY3RpdmUoKTtcclxuICAgIC8vICAgICAvLyBpZiAoaXNBY3RpdmUpe1xyXG5cclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyB9XHJcbn1cclxuIl19