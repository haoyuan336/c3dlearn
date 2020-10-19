System.register(["cc", "code-quality:cr", "../BaseObject.js", "../GameController.js", "./EnemyInfoCellPrefab.js", "./InfoLayerCtlBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Prefab, instantiate, BaseObject, GameController, EnemyInfoCellPrefab, InfoLayerCtlBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, EnemyInfoLayerCtl;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyInfoCellPrefab(extras) {
    _reporterNs.report("EnemyInfoCellPrefab", "./EnemyInfoCellPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoLayerCtlBase(extras) {
    _reporterNs.report("InfoLayerCtlBase", "./InfoLayerCtlBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_EnemyInfoCellPrefabJs) {
      EnemyInfoCellPrefab = _EnemyInfoCellPrefabJs.EnemyInfoCellPrefab;
    }, function (_InfoLayerCtlBaseJs) {
      InfoLayerCtlBase = _InfoLayerCtlBaseJs.InfoLayerCtlBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dd7e3sy4eVGxLt1hsBdjeJ6", "EnemyInfoLayerCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyInfoLayerCtl", EnemyInfoLayerCtl = (_dec = ccclass('EnemyInfoLayerCtl'), _dec2 = property({
        type: _crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
          error: Error()
        }), GameController) : GameController
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(EnemyInfoLayerCtl, _ref);

        function EnemyInfoLayerCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyInfoLayerCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyInfoLayerCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyInfoNodeParentNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyInfoCellPrefab", _descriptor3, _assertThisInitialized(_this));

          _this.enemyInfoCellMap = {};

          _initializerDefineProperty(_this, "newInfoTipsNode", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyInfoLayerCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            _get(_getPrototypeOf(EnemyInfoLayerCtl.prototype), "start", this).call(this); // Your initialization goes here.
            // let screenSize = view.getVisibleSize();


            this.initEnemyData(); // this.node.on("refer-enemy-data", this.referEnemyData.bind(this), this);

            this.node.on("refer-enemy-info-cell", function (enemyType) {
              // console.log("`激活了某个敌人`", enemyType);
              console.log("enemy info cell map", _this2.enemyInfoCellMap);

              if (_this2.enemyInfoCellMap[enemyType]) {
                // console.log("刷新这个敌人的UI")
                // this.enemyInfoCellMap[enemyType].getComponent(EnemyInfoCellPrefab).referUI();
                var node = _this2.enemyInfoCellMap[enemyType];
                node.getComponent(_crd && EnemyInfoCellPrefab === void 0 ? (_reportPossibleCrUseOfEnemyInfoCellPrefab({
                  error: Error()
                }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).referUI();
              }
            });
            this.node.on("show-new-enemy-info-tips", function () {
              var isHave = false;
              _this2.newInfoTipsNode.active = false;

              for (var i in _this2.enemyInfoCellMap) {
                var node = _this2.enemyInfoCellMap[i];

                if (!node.getComponent(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
                  error: Error()
                }), BaseObject) : BaseObject).getIsShowed() && node.getComponent(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
                  error: Error()
                }), BaseObject) : BaseObject).getEnemyIsActive()) {
                  isHave = true;
                  break;
                }
              } // console.log("is have", isHave);


              if (isHave) {
                _this2.newInfoTipsNode.active = true;
              }
            });
          }
        }, {
          key: "closeUICb",
          value: function closeUICb() {// console.log("close ui cb");
            // this
          }
        }, {
          key: "initEnemyData",
          value: function initEnemyData() {
            // let currentActiveEnemyList = this.gameController.playerData.getCurrentActiveEnemyList();
            var gameConfig = this.gameController.getGameConfig().json;
            var enemyList = [];

            for (var i in gameConfig) {
              var data = gameConfig[i];

              if (i.indexOf("Boss") > -1) {
                // if (i.indexOf("Enemy") > -1 || i.indexOf("Boss") > -1) {
                console.log("iu", i);
                console.log("data", data);
                enemyList.push(data);
              }
            } //排序
            // console.log("enemy list", enemyList);


            enemyList = enemyList.sort(function (a, b) {
              return a.EnemyIndex - b.EnemyIndex;
            }); // console.log("enemy list", enemyList);

            for (var _i = 0; _i < enemyList.length; _i++) {
              // console.log("data = ", enemyList[i]);
              var node = instantiate(this.enemyInfoCellPrefab);
              node.parent = this.enemyInfoNodeParentNode; // console.log("data", enemyList[i]);

              var enemyType = enemyList[_i]['EnemyType']; // console.log("enemy type", enemyType);

              node.getComponent(_crd && EnemyInfoCellPrefab === void 0 ? (_reportPossibleCrUseOfEnemyInfoCellPrefab({
                error: Error()
              }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).init(this.gameController, {
                enemyType: enemyType
              });
              node.getComponent(_crd && EnemyInfoCellPrefab === void 0 ? (_reportPossibleCrUseOfEnemyInfoCellPrefab({
                error: Error()
              }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).referUI();
              var x = _i % 3;
              var y = Math.floor(_i / 3); // console.log("x", x);
              // console.log("y = ", y);

              node.position = v3((3 - 1) * -0.5 * 100 + x * 100, y * -100 - 70, 0);
              this.enemyInfoNodeParentNode.height = node.position.y * -1 + 70;
              this.enemyInfoCellMap[enemyType] = node;
            } //取出。激活敌人数据
            // let activeEnemyData = this.gameController.playerData.getEnemyIsActive

          }
        }, {
          key: "referEnemyData",
          value: function referEnemyData() {}
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            _get(_getPrototypeOf(EnemyInfoLayerCtl.prototype), "onButtonClick", this).call(this, event, customData);

            if (customData === 'bg-node-click') {
              // find("GameController").emit("player-button-click-audio");
              this.node.emit("close-monster-info-layer");
            }
          } // showMonsterInfoLayer(target: BaseObject){
          //     // this.showMonsterInfoLayer
          // }
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return EnemyInfoLayerCtl;
      }(_crd && InfoLayerCtlBase === void 0 ? (_reportPossibleCrUseOfInfoLayerCtlBase({
        error: Error()
      }), InfoLayerCtlBase) : InfoLayerCtlBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoNodeParentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyInfoCellPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "newInfoTipsNode", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9MYXllckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsInYzIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJCYXNlT2JqZWN0IiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUluZm9DZWxsUHJlZmFiIiwiSW5mb0xheWVyQ3RsQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15SW5mb0xheWVyQ3RsIiwidHlwZSIsImVuZW15SW5mb0NlbGxNYXAiLCJpbml0RW5lbXlEYXRhIiwibm9kZSIsIm9uIiwiZW5lbXlUeXBlIiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsInJlZmVyVUkiLCJpc0hhdmUiLCJuZXdJbmZvVGlwc05vZGUiLCJhY3RpdmUiLCJpIiwiZ2V0SXNTaG93ZWQiLCJnZXRFbmVteUlzQWN0aXZlIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJlbmVteUxpc3QiLCJkYXRhIiwiaW5kZXhPZiIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJFbmVteUluZGV4IiwibGVuZ3RoIiwiZW5lbXlJbmZvQ2VsbFByZWZhYiIsInBhcmVudCIsImVuZW15SW5mb05vZGVQYXJlbnROb2RlIiwiaW5pdCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwicG9zaXRpb24iLCJoZWlnaHQiLCJldmVudCIsImN1c3RvbURhdGEiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1B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QWdELENBQWhELENBQWxCO0FBQ0EsbUJBQUtILHVCQUFMLENBQTZCTyxNQUE3QixHQUFzQ25DLElBQUksQ0FBQ2tDLFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQixDQUFDLENBQW5CLEdBQXVCLEVBQTdEO0FBQ0EsbUJBQUtqQyxnQkFBTCxDQUFzQkksU0FBdEIsSUFBbUNGLElBQW5DO0FBQ0gsYUF4Q1csQ0F5Q1o7QUFDQTs7QUFDSDs7OzJDQUNnQixDQUVoQjs7O3dDQUNhb0MsSyxFQUFPQyxVLEVBQVk7QUFFN0IsaUdBQW9CRCxLQUFwQixFQUEyQkMsVUFBM0I7O0FBQ0EsZ0JBQUlBLFVBQVUsS0FBSyxlQUFuQixFQUFvQztBQUVoQztBQUNBLG1CQUFLckMsSUFBTCxDQUFVc0MsSUFBVixDQUFlLDBCQUFmO0FBQ0g7QUFDSixXLENBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBL0d3QyxJOzs7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBR0osSTs7Ozs7OztpQkFLSixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2aWV3LCBUd2VlbiwgdjMsIFByZWZhYiwgaW5zdGFudGlhdGUsIEpzb25Bc3NldCAsZmluZH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUluZm9DZWxsUHJlZmFiIH0gZnJvbSAnLi9FbmVteUluZm9DZWxsUHJlZmFiJztcclxuaW1wb3J0IHsgSW5mb0xheWVyQ3RsQmFzZSB9IGZyb20gJy4vSW5mb0xheWVyQ3RsQmFzZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnRW5lbXlJbmZvTGF5ZXJDdGwnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlJbmZvTGF5ZXJDdGwgZXh0ZW5kcyBJbmZvTGF5ZXJDdGxCYXNlIHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEdhbWVDb250cm9sbGVyIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUluZm9Ob2RlUGFyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvQ2VsbFByZWZhYjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBlbmVteUluZm9DZWxsTWFwOiBPYmplY3QgPSB7fTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgbmV3SW5mb1RpcHNOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIGxldCBzY3JlZW5TaXplID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEVuZW15RGF0YSgpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInJlZmVyLWVuZW15LWRhdGFcIiwgdGhpcy5yZWZlckVuZW15RGF0YS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWZlci1lbmVteS1pbmZvLWNlbGxcIiwgKGVuZW15VHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYOa/gOa0u+S6huafkOS4quaVjOS6umBcIiwgZW5lbXlUeXBlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBpbmZvIGNlbGwgbWFwXCIsIHRoaXMuZW5lbXlJbmZvQ2VsbE1hcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yi35paw6L+Z5Liq5pWM5Lq655qEVUlcIilcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5yZWZlclVJKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikucmVmZXJVSSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93LW5ldy1lbmVteS1pbmZvLXRpcHNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXNIYXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubmV3SW5mb1RpcHNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW5lbXlJbmZvQ2VsbE1hcCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15SW5mb0NlbGxNYXBbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldElzU2hvd2VkKCkgJiYgbm9kZS5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuZ2V0RW5lbXlJc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNIYXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlzIGhhdmVcIiwgaXNIYXZlKTtcclxuICAgICAgICAgICAgaWYgKGlzSGF2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdJbmZvVGlwc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VVSUNiKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2UgdWkgY2JcIik7XHJcbiAgICAgICAgLy8gdGhpc1xyXG4gICAgfVxyXG4gICAgaW5pdEVuZW15RGF0YSgpIHtcclxuICAgICAgICAvLyBsZXQgY3VycmVudEFjdGl2ZUVuZW15TGlzdCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50QWN0aXZlRW5lbXlMaXN0KCk7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgICAgIGxldCBlbmVteUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGdhbWVDb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBnYW1lQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICBpZiAoaS5pbmRleE9mKFwiQm9zc1wiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaS5pbmRleE9mKFwiRW5lbXlcIikgPiAtMSB8fCBpLmluZGV4T2YoXCJCb3NzXCIpID4gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml1XCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZW5lbXlMaXN0LnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mjpLluo9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IGxpc3RcIiwgZW5lbXlMaXN0KTtcclxuICAgICAgICBlbmVteUxpc3QgPSBlbmVteUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5FbmVteUluZGV4IC0gYi5FbmVteUluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbGlzdFwiLCBlbmVteUxpc3QpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiwgZW5lbXlMaXN0W2ldKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteUluZm9DZWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmVuZW15SW5mb05vZGVQYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZW5lbXlMaXN0W2ldKTtcclxuICAgICAgICAgICAgbGV0IGVuZW15VHlwZSA9IGVuZW15TGlzdFtpXVsnRW5lbXlUeXBlJ107XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgdHlwZVwiLCBlbmVteVR5cGUpO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5pbml0KHRoaXMuZ2FtZUNvbnRyb2xsZXIsIHtcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZTogZW5lbXlUeXBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5yZWZlclVJKCk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gaSAlIDM7XHJcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gMyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieFwiLCB4KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ5ID0gXCIsIHkpO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoKDMgLSAxKSAqIC0wLjUgKiAxMDAgKyB4ICogMTAwLCB5ICogLTEwMCAtIDcwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUluZm9Ob2RlUGFyZW50Tm9kZS5oZWlnaHQgPSBub2RlLnBvc2l0aW9uLnkgKiAtMSArIDcwO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+W5Ye644CC5r+A5rS75pWM5Lq65pWw5o2uXHJcbiAgICAgICAgLy8gbGV0IGFjdGl2ZUVuZW15RGF0YSA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRFbmVteUlzQWN0aXZlXHJcbiAgICB9XHJcbiAgICByZWZlckVuZW15RGF0YSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcblxyXG4gICAgICAgIHN1cGVyLm9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIGlmIChjdXN0b21EYXRhID09PSAnYmctbm9kZS1jbGljaycpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwicGxheWVyLWJ1dHRvbi1jbGljay1hdWRpb1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJjbG9zZS1tb25zdGVyLWluZm8tbGF5ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzaG93TW9uc3RlckluZm9MYXllcih0YXJnZXQ6IEJhc2VPYmplY3Qpe1xyXG4gICAgLy8gICAgIC8vIHRoaXMuc2hvd01vbnN0ZXJJbmZvTGF5ZXJcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==