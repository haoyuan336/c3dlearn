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
                // console.log("iu", i);
                // console.log("data", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9MYXllckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsInYzIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJCYXNlT2JqZWN0IiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUluZm9DZWxsUHJlZmFiIiwiSW5mb0xheWVyQ3RsQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15SW5mb0xheWVyQ3RsIiwidHlwZSIsImVuZW15SW5mb0NlbGxNYXAiLCJpbml0RW5lbXlEYXRhIiwibm9kZSIsIm9uIiwiZW5lbXlUeXBlIiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsInJlZmVyVUkiLCJpc0hhdmUiLCJuZXdJbmZvVGlwc05vZGUiLCJhY3RpdmUiLCJpIiwiZ2V0SXNTaG93ZWQiLCJnZXRFbmVteUlzQWN0aXZlIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJlbmVteUxpc3QiLCJkYXRhIiwiaW5kZXhPZiIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJFbmVteUluZGV4IiwibGVuZ3RoIiwiZW5lbXlJbmZvQ2VsbFByZWZhYiIsInBhcmVudCIsImVuZW15SW5mb05vZGVQYXJlbnROb2RlIiwiaW5pdCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwicG9zaXRpb24iLCJoZWlnaHQiLCJldmVudCIsImN1c3RvbURhdGEiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1B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QUFuQixHQUF1QixFQUE3RDtBQUNBLG1CQUFLakMsZ0JBQUwsQ0FBc0JJLFNBQXRCLElBQW1DRixJQUFuQztBQUNILGFBeENXLENBeUNaO0FBQ0E7O0FBQ0g7OzsyQ0FDZ0IsQ0FFaEI7Ozt3Q0FDYW9DLEssRUFBT0MsVSxFQUFZO0FBRTdCLGlHQUFvQkQsS0FBcEIsRUFBMkJDLFVBQTNCOztBQUNBLGdCQUFJQSxVQUFVLEtBQUssZUFBbkIsRUFBb0M7QUFFaEM7QUFDQSxtQkFBS3JDLElBQUwsQ0FBVXNDLElBQVYsQ0FBZSwwQkFBZjtBQUNIO0FBQ0osVyxDQUNEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O2lCQS9Hd0MsSTs7Ozs7OztpQkFFRCxJOzs7Ozs7O2lCQUdKLEk7Ozs7Ozs7aUJBS0osSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgdmlldywgVHdlZW4sIHYzLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBKc29uQXNzZXQgLGZpbmR9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlJbmZvQ2VsbFByZWZhYiB9IGZyb20gJy4vRW5lbXlJbmZvQ2VsbFByZWZhYic7XHJcbmltcG9ydCB7IEluZm9MYXllckN0bEJhc2UgfSBmcm9tICcuL0luZm9MYXllckN0bEJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15SW5mb0xheWVyQ3RsJylcclxuZXhwb3J0IGNsYXNzIEVuZW15SW5mb0xheWVyQ3RsIGV4dGVuZHMgSW5mb0xheWVyQ3RsQmFzZSB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBHYW1lQ29udHJvbGxlciB9KVxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvTm9kZVBhcmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb0NlbGxQcmVmYWI6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZW5lbXlJbmZvQ2VsbE1hcDogT2JqZWN0ID0ge307XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIG5ld0luZm9UaXBzTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyBsZXQgc2NyZWVuU2l6ZSA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB0aGlzLmluaXRFbmVteURhdGEoKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJyZWZlci1lbmVteS1kYXRhXCIsIHRoaXMucmVmZXJFbmVteURhdGEuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIChlbmVteVR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImDmv4DmtLvkuobmn5DkuKrmlYzkurpgXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5mbyBjZWxsIG1hcFwiLCB0aGlzLmVuZW15SW5mb0NlbGxNYXApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIt+aWsOi/meS4quaVjOS6uueahFVJXCIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikucmVmZXJVSSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLnJlZmVyVUkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1uZXctZW5lbXktaW5mby10aXBzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzSGF2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0luZm9UaXBzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmVuZW15SW5mb0NlbGxNYXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteUluZm9DZWxsTWFwW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5nZXRJc1Nob3dlZCgpICYmIG5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldEVuZW15SXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzSGF2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpcyBoYXZlXCIsIGlzSGF2ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0hhdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5mb1RpcHNOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsb3NlVUlDYigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsb3NlIHVpIGNiXCIpO1xyXG4gICAgICAgIC8vIHRoaXNcclxuICAgIH1cclxuICAgIGluaXRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRBY3RpdmVFbmVteUxpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEFjdGl2ZUVuZW15TGlzdCgpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgICAgICBsZXQgZW5lbXlMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBnYW1lQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZ2FtZUNvbmZpZ1tpXTtcclxuICAgICAgICAgICAgaWYgKGkuaW5kZXhPZihcIkJvc3NcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGkuaW5kZXhPZihcIkVuZW15XCIpID4gLTEgfHwgaS5pbmRleE9mKFwiQm9zc1wiKSA+IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpdVwiLCBpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGVuZW15TGlzdC5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5o6S5bqPXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBsaXN0XCIsIGVuZW15TGlzdCk7XHJcbiAgICAgICAgZW5lbXlMaXN0ID0gZW5lbXlMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuRW5lbXlJbmRleCAtIGIuRW5lbXlJbmRleDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IGxpc3RcIiwgZW5lbXlMaXN0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhID0gXCIsIGVuZW15TGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlJbmZvQ2VsbFByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5lbmVteUluZm9Ob2RlUGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGVuZW15TGlzdFtpXSk7XHJcbiAgICAgICAgICAgIGxldCBlbmVteVR5cGUgPSBlbmVteUxpc3RbaV1bJ0VuZW15VHlwZSddO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IHR5cGVcIiwgZW5lbXlUeXBlKTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikuaW5pdCh0aGlzLmdhbWVDb250cm9sbGVyLCB7XHJcbiAgICAgICAgICAgICAgICBlbmVteVR5cGU6IGVuZW15VHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikucmVmZXJVSSgpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGkgJSAzO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIDMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhcIiwgeCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieSA9IFwiLCB5KTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKCgzIC0gMSkgKiAtMC41ICogMTAwICsgeCAqIDEwMCwgeSAqIC0xMDAgLSA3MCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlJbmZvTm9kZVBhcmVudE5vZGUuaGVpZ2h0ID0gbm9kZS5wb3NpdGlvbi55ICogLTEgKyA3MDtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0gPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPluWHuuOAgua/gOa0u+aVjOS6uuaVsOaNrlxyXG4gICAgICAgIC8vIGxldCBhY3RpdmVFbmVteURhdGEgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0RW5lbXlJc0FjdGl2ZVxyXG4gICAgfVxyXG4gICAgcmVmZXJFbmVteURhdGEoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSkge1xyXG5cclxuICAgICAgICBzdXBlci5vbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKTtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0YSA9PT0gJ2JnLW5vZGUtY2xpY2snKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcInBsYXllci1idXR0b24tY2xpY2stYXVkaW9cIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY2xvc2UtbW9uc3Rlci1pbmZvLWxheWVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd01vbnN0ZXJJbmZvTGF5ZXIodGFyZ2V0OiBCYXNlT2JqZWN0KXtcclxuICAgIC8vICAgICAvLyB0aGlzLnNob3dNb25zdGVySW5mb0xheWVyXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=