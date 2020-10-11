System.register(["cc", "code-quality:cr", "../GameController.js", "./EnemyInfoCellPrefab.js", "./InfoLayerCtlBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Prefab, instantiate, GameController, EnemyInfoCellPrefab, InfoLayerCtlBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, EnemyInfoLayerCtl;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
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
          return _this;
        }

        _createClass(EnemyInfoLayerCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            _get(_getPrototypeOf(EnemyInfoLayerCtl.prototype), "start", this).call(this); // Your initialization goes here.
            // let screenSize = view.getVisibleSize();


            this.initEnemyData();
            this.node.on("refer-enemy-data", this.referEnemyData.bind(this), this);
            this.node.on("refer-enemy-info-cell", function (enemyType) {
              console.log("`激活了某个敌人`", enemyType);
              console.log("enemy info cell map", _this2.enemyInfoCellMap);

              if (_this2.enemyInfoCellMap[enemyType]) {
                console.log("刷新这个敌人的UI"); // this.enemyInfoCellMap[enemyType].getComponent(EnemyInfoCellPrefab).referUI();

                var node = _this2.enemyInfoCellMap[enemyType];
                node.getComponent(_crd && EnemyInfoCellPrefab === void 0 ? (_reportPossibleCrUseOfEnemyInfoCellPrefab({
                  error: Error()
                }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).referUI();
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


            console.log("enemy list", enemyList);
            enemyList = enemyList.sort(function (a, b) {
              return a.EnemyIndex - b.EnemyIndex;
            });
            console.log("enemy list", enemyList);

            for (var _i = 0; _i < enemyList.length; _i++) {
              console.log("data = ", enemyList[_i]);
              var node = instantiate(this.enemyInfoCellPrefab);
              node.parent = this.enemyInfoNodeParentNode; // console.log("data", enemyList[i]);

              var enemyType = enemyList[_i]['EnemyType'];
              console.log("enemy type", enemyType);
              node.getComponent(_crd && EnemyInfoCellPrefab === void 0 ? (_reportPossibleCrUseOfEnemyInfoCellPrefab({
                error: Error()
              }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).init(this.gameController, {
                enemyType: enemyType
              });
              node.getComponent(_crd && EnemyInfoCellPrefab === void 0 ? (_reportPossibleCrUseOfEnemyInfoCellPrefab({
                error: Error()
              }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).referUI();
              var x = _i % 3;
              var y = Math.floor(_i / 3);
              console.log("x", x);
              console.log("y = ", y);
              node.position = v3((3 - 1) * -0.5 * 100 + x * 100, y * -100 - 70, 0);
              this.enemyInfoNodeParentNode.height = node.position.y * -1 + 70;
              this.enemyInfoCellMap[enemyType] = node;
            }
          }
        }, {
          key: "referEnemyData",
          value: function referEnemyData() {}
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            _get(_getPrototypeOf(EnemyInfoLayerCtl.prototype), "onButtonClick", this).call(this, event, customData);

            if (customData === 'bg-node-click') {
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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9MYXllckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsInYzIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15SW5mb0NlbGxQcmVmYWIiLCJJbmZvTGF5ZXJDdGxCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlJbmZvTGF5ZXJDdGwiLCJ0eXBlIiwiZW5lbXlJbmZvQ2VsbE1hcCIsImluaXRFbmVteURhdGEiLCJub2RlIiwib24iLCJyZWZlckVuZW15RGF0YSIsImJpbmQiLCJlbmVteVR5cGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29tcG9uZW50IiwicmVmZXJVSSIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsImdldEdhbWVDb25maWciLCJqc29uIiwiZW5lbXlMaXN0IiwiaSIsImRhdGEiLCJpbmRleE9mIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIkVuZW15SW5kZXgiLCJsZW5ndGgiLCJlbmVteUluZm9DZWxsUHJlZmFiIiwicGFyZW50IiwiZW5lbXlJbmZvTm9kZVBhcmVudE5vZGUiLCJpbml0IiwieCIsInkiLCJNYXRoIiwiZmxvb3IiLCJwb3NpdGlvbiIsImhlaWdodCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBRXREQyxNQUFBQSxjLHFCQUFBQSxjOztBQUVBQyxNQUFBQSxtQiwwQkFBQUEs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QUFZO0FBQzdCLGlHQUFvQkQsS0FBcEIsRUFBMkJDLFVBQTNCOztBQUNBLGdCQUFJQSxVQUFVLEtBQUssZUFBbkIsRUFBb0M7QUFDaEMsbUJBQUtsQyxJQUFMLENBQVVtQyxJQUFWLENBQWUsMEJBQWY7QUFDSDtBQUNKLFcsQ0FDRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztpQkF4RndDLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFHSixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2aWV3LCBUd2VlbiwgdjMsIFByZWZhYiwgaW5zdGFudGlhdGUsIEpzb25Bc3NldCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlJbmZvQ2VsbFByZWZhYiB9IGZyb20gJy4vRW5lbXlJbmZvQ2VsbFByZWZhYic7XHJcbmltcG9ydCB7IEluZm9MYXllckN0bEJhc2UgfSBmcm9tICcuL0luZm9MYXllckN0bEJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15SW5mb0xheWVyQ3RsJylcclxuZXhwb3J0IGNsYXNzIEVuZW15SW5mb0xheWVyQ3RsIGV4dGVuZHMgSW5mb0xheWVyQ3RsQmFzZSB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBHYW1lQ29udHJvbGxlciB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvTm9kZVBhcmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb0NlbGxQcmVmYWI6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZW5lbXlJbmZvQ2VsbE1hcDogT2JqZWN0ID0ge307XHJcblxyXG4gIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyBsZXQgc2NyZWVuU2l6ZSA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB0aGlzLmluaXRFbmVteURhdGEoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWZlci1lbmVteS1kYXRhXCIsIHRoaXMucmVmZXJFbmVteURhdGEuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIChlbmVteVR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImDmv4DmtLvkuobmn5DkuKrmlYzkurpgXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5mbyBjZWxsIG1hcFwiLCB0aGlzLmVuZW15SW5mb0NlbGxNYXApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw6L+Z5Liq5pWM5Lq655qEVUlcIilcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5yZWZlclVJKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikucmVmZXJVSSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsb3NlVUlDYigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsb3NlIHVpIGNiXCIpO1xyXG4gICAgICAgIC8vIHRoaXNcclxuICAgIH1cclxuICAgIGluaXRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRBY3RpdmVFbmVteUxpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEFjdGl2ZUVuZW15TGlzdCgpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgICAgICBsZXQgZW5lbXlMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBnYW1lQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZ2FtZUNvbmZpZ1tpXTtcclxuICAgICAgICAgICAgaWYgKGkuaW5kZXhPZihcIkJvc3NcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGkuaW5kZXhPZihcIkVuZW15XCIpID4gLTEgfHwgaS5pbmRleE9mKFwiQm9zc1wiKSA+IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdVwiLCBpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGVuZW15TGlzdC5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5o6S5bqPXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBsaXN0XCIsIGVuZW15TGlzdCk7XHJcbiAgICAgICAgZW5lbXlMaXN0ID0gZW5lbXlMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuRW5lbXlJbmRleCAtIGIuRW5lbXlJbmRleDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15IGxpc3RcIiwgZW5lbXlMaXN0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhID0gXCIsIGVuZW15TGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlJbmZvQ2VsbFByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5lbmVteUluZm9Ob2RlUGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGVuZW15TGlzdFtpXSk7XHJcbiAgICAgICAgICAgIGxldCBlbmVteVR5cGUgPSBlbmVteUxpc3RbaV1bJ0VuZW15VHlwZSddO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15IHR5cGVcIiwgZW5lbXlUeXBlKTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLCB7XHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGU6IGVuZW15VHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikucmVmZXJVSSgpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGkgJSAzO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIDMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInhcIiwgeCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieSA9IFwiLCB5KTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKCgzIC0gMSkgKiAtMC41ICogMTAwICsgeCAqIDEwMCwgeSAqIC0xMDAgLSA3MCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlJbmZvTm9kZVBhcmVudE5vZGUuaGVpZ2h0ID0gbm9kZS5wb3NpdGlvbi55ICogLTEgKyA3MDtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0gPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZmVyRW5lbXlEYXRhKCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzdXBlci5vbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKTtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0YSA9PT0gJ2JnLW5vZGUtY2xpY2snKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY2xvc2UtbW9uc3Rlci1pbmZvLWxheWVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd01vbnN0ZXJJbmZvTGF5ZXIodGFyZ2V0OiBCYXNlT2JqZWN0KXtcclxuICAgIC8vICAgICAvLyB0aGlzLnNob3dNb25zdGVySW5mb0xheWVyXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=