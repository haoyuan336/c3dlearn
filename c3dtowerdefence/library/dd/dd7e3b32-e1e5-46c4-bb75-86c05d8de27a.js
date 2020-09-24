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
          key: "initEnemyData",
          value: function initEnemyData() {
            // let currentActiveEnemyList = this.gameController.playerData.getCurrentActiveEnemyList();
            var gameConfig = this.gameController.getGameConfig().json;
            var enemyList = [];

            for (var i in gameConfig) {
              var data = gameConfig[i];

              if (i.indexOf("Enemy") > -1 || i.indexOf("Boss") > -1) {
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
          } // update (deltaTime: number) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9MYXllckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsInYzIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJHYW1lQ29udHJvbGxlciIsIkVuZW15SW5mb0NlbGxQcmVmYWIiLCJJbmZvTGF5ZXJDdGxCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlJbmZvTGF5ZXJDdGwiLCJ0eXBlIiwiZW5lbXlJbmZvQ2VsbE1hcCIsImluaXRFbmVteURhdGEiLCJub2RlIiwib24iLCJyZWZlckVuZW15RGF0YSIsImJpbmQiLCJlbmVteVR5cGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29tcG9uZW50IiwicmVmZXJVSSIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsImdldEdhbWVDb25maWciLCJqc29uIiwiZW5lbXlMaXN0IiwiaSIsImRhdGEiLCJpbmRleE9mIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIkVuZW15SW5kZXgiLCJsZW5ndGgiLCJlbmVteUluZm9DZWxsUHJlZmFiIiwicGFyZW50IiwiZW5lbXlJbmZvTm9kZVBhcmVudE5vZGUiLCJpbml0IiwieCIsInkiLCJNYXRoIiwiZmxvb3IiLCJwb3NpdGlvbiIsImhlaWdodCIsImV2ZW50IiwiY3VzdG9tRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7Ozs7QUFDdERDLE1BQUFBLGMscUJBQUFBLGM7O0FBRUFDLE1BQUFBLG1CLDBCQUFBQSxtQjs7QUFD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YWlDLEssRUFBT0MsVSxFQUFZO0FBQzdCLGlHQUFvQkQsS0FBcEIsRUFBMkJDLFVBQTNCO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O2lCQTFFd0MsSTs7Ozs7OztpQkFFRCxJOzs7Ozs7O2lCQUdKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHZpZXcsIFR3ZWVuLCB2MywgUHJlZmFiLCBpbnN0YW50aWF0ZSB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15SW5mb0NlbGxQcmVmYWIgfSBmcm9tICcuL0VuZW15SW5mb0NlbGxQcmVmYWInO1xyXG5pbXBvcnQgeyBJbmZvTGF5ZXJDdGxCYXNlIH0gZnJvbSAnLi9JbmZvTGF5ZXJDdGxCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUluZm9MYXllckN0bCcpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUluZm9MYXllckN0bCBleHRlbmRzIEluZm9MYXllckN0bEJhc2Uge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogR2FtZUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb05vZGVQYXJlbnROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUluZm9DZWxsUHJlZmFiOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGVuZW15SW5mb0NlbGxNYXA6IE9iamVjdCA9IHt9O1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyBsZXQgc2NyZWVuU2l6ZSA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB0aGlzLmluaXRFbmVteURhdGEoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWZlci1lbmVteS1kYXRhXCIsIHRoaXMucmVmZXJFbmVteURhdGEuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIChlbmVteVR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImDmv4DmtLvkuobmn5DkuKrmlYzkurpgXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5mbyBjZWxsIG1hcFwiLCB0aGlzLmVuZW15SW5mb0NlbGxNYXApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDov5nkuKrmlYzkurrnmoRVSVwiKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0uZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLnJlZmVyVUkoKTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV07XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5yZWZlclVJKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaW5pdEVuZW15RGF0YSgpIHtcclxuICAgICAgICAvLyBsZXQgY3VycmVudEFjdGl2ZUVuZW15TGlzdCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50QWN0aXZlRW5lbXlMaXN0KCk7XHJcbiAgICAgICAgbGV0IGdhbWVDb25maWcgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uO1xyXG4gICAgICAgIGxldCBlbmVteUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGdhbWVDb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBnYW1lQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICBpZiAoaS5pbmRleE9mKFwiRW5lbXlcIikgPiAtMSB8fCBpLmluZGV4T2YoXCJCb3NzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXVcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbmVteUxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aOkuW6j1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgbGlzdFwiLCBlbmVteUxpc3QpO1xyXG4gICAgICAgIGVuZW15TGlzdCA9IGVuZW15TGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLkVuZW15SW5kZXggLSBiLkVuZW15SW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBsaXN0XCIsIGVuZW15TGlzdCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiLCBlbmVteUxpc3RbaV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15SW5mb0NlbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZW5lbXlJbmZvTm9kZVBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBlbmVteUxpc3RbaV0pO1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlID0gZW5lbXlMaXN0W2ldWydFbmVteVR5cGUnXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSB0eXBlXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlciwge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBlbmVteVR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLnJlZmVyVUkoKTtcclxuICAgICAgICAgICAgbGV0IHggPSBpICUgMztcclxuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyAzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4XCIsIHgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInkgPSBcIiwgeSk7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MygoMyAtIDEpICogLTAuNSAqIDEwMCArIHggKiAxMDAsIHkgKiAtMTAwIC0gNzAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15SW5mb05vZGVQYXJlbnROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgNzA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWZlckVuZW15RGF0YSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3VwZXIub25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=