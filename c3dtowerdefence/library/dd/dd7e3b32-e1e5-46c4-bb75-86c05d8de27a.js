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
              }

              console.log("is have", isHave);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9MYXllckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsInYzIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJCYXNlT2JqZWN0IiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteUluZm9DZWxsUHJlZmFiIiwiSW5mb0xheWVyQ3RsQmFzZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15SW5mb0xheWVyQ3RsIiwidHlwZSIsImVuZW15SW5mb0NlbGxNYXAiLCJpbml0RW5lbXlEYXRhIiwibm9kZSIsIm9uIiwiZW5lbXlUeXBlIiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsInJlZmVyVUkiLCJpc0hhdmUiLCJuZXdJbmZvVGlwc05vZGUiLCJhY3RpdmUiLCJpIiwiZ2V0SXNTaG93ZWQiLCJnZXRFbmVteUlzQWN0aXZlIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJlbmVteUxpc3QiLCJkYXRhIiwiaW5kZXhPZiIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJFbmVteUluZGV4IiwibGVuZ3RoIiwiZW5lbXlJbmZvQ2VsbFByZWZhYiIsInBhcmVudCIsImVuZW15SW5mb05vZGVQYXJlbnROb2RlIiwiaW5pdCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwicG9zaXRpb24iLCJoZWlnaHQiLCJldmVudCIsImN1c3RvbURhdGEiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVzs7OztBQUN0REMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFFQUMsTUFBQUEsbUIsMEJBQUFBLG1COztBQUNBQyxNQUFBQSxnQix1QkFBQUEsZ0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzttQ0FHSkMsaUIsV0FEWkYsT0FBTyxDQUFDLG1CQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUk7QUFBQTtBQUFBO0FBQU4sT0FBRCxDLFVBRVJGLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDLFVBR1JTLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBS1JPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVYO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUZEWSxnQixHQUEyQixFOzs7Ozs7Ozs7a0NBSzNCO0FBQUE7O0FBQ0oseUZBREksQ0FFSjtBQUNBOzs7QUFDQSxpQkFBS0MsYUFBTCxHQUpJLENBS0o7O0FBQ0EsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLHVCQUFiLEVBQXNDLFVBQUNDLFNBQUQsRUFBdUI7QUFDekRDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLFNBQXpCO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLE1BQUksQ0FBQ04sZ0JBQXhDOztBQUVBLGtCQUFJLE1BQUksQ0FBQ0EsZ0JBQUwsQ0FBc0JJLFNBQXRCLENBQUosRUFBc0M7QUFDbENDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBRGtDLENBRWxDOztBQUNBLG9CQUFJSixJQUFJLEdBQUcsTUFBSSxDQUFDRixnQkFBTCxDQUFzQkksU0FBdEIsQ0FBWDtBQUNBRixnQkFBQUEsSUFBSSxDQUFDSyxZQUFMO0FBQUE7QUFBQSxnRUFBdUNDLE9BQXZDO0FBQ0g7QUFDSixhQVZEO0FBV0EsaUJBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhLDBCQUFiLEVBQXlDLFlBQU07QUFDM0Msa0JBQUlNLE1BQU0sR0FBRyxLQUFiO0FBQ0EsY0FBQSxNQUFJLENBQUNDLGVBQUwsQ0FBcUJDLE1BQXJCLEdBQThCLEtBQTlCOztBQUNBLG1CQUFLLElBQUlDLENBQVQsSUFBYyxNQUFJLENBQUNaLGdCQUFuQixFQUFxQztBQUNqQyxvQkFBSUUsSUFBSSxHQUFHLE1BQUksQ0FBQ0YsZ0JBQUwsQ0FBc0JZLENBQXRCLENBQVg7O0FBQ0Esb0JBQUksQ0FBQ1YsSUFBSSxDQUFDSyxZQUFMO0FBQUE7QUFBQSw4Q0FBOEJNLFdBQTlCLEVBQUQsSUFBZ0RYLElBQUksQ0FBQ0ssWUFBTDtBQUFBO0FBQUEsOENBQThCTyxnQkFBOUIsRUFBcEQsRUFBc0c7QUFDbEdMLGtCQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNBO0FBQ0g7QUFDSjs7QUFDREosY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkcsTUFBdkI7O0FBQ0Esa0JBQUlBLE1BQUosRUFBWTtBQUNSLGdCQUFBLE1BQUksQ0FBQ0MsZUFBTCxDQUFxQkMsTUFBckIsR0FBOEIsSUFBOUI7QUFDSDtBQUNKLGFBZEQ7QUFlSDs7O3NDQUNXLENBQ1I7QUFDQTtBQUNIOzs7MENBQ2U7QUFDWjtBQUNBLGdCQUFJSSxVQUFVLEdBQUcsS0FBS0MsY0FBTCxDQUFvQkMsYUFBcEIsR0FBb0NDLElBQXJEO0FBQ0EsZ0JBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxpQkFBSyxJQUFJUCxDQUFULElBQWNHLFVBQWQsRUFBMEI7QUFDdEIsa0JBQUlLLElBQUksR0FBR0wsVUFBVSxDQUFDSCxDQUFELENBQXJCOztBQUNBLGtCQUFJQSxDQUFDLENBQUNTLE9BQUYsQ0FBVSxNQUFWLElBQW9CLENBQUMsQ0FBekIsRUFBNEI7QUFDeEI7QUFFQWhCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCTSxDQUFsQjtBQUNBUCxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmMsSUFBcEI7QUFDQUQsZ0JBQUFBLFNBQVMsQ0FBQ0csSUFBVixDQUFlRixJQUFmO0FBQ0g7QUFDSixhQWJXLENBY1o7OztBQUNBZixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCYSxTQUExQjtBQUNBQSxZQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0ksSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2pDLHFCQUFPRCxDQUFDLENBQUNFLFVBQUYsR0FBZUQsQ0FBQyxDQUFDQyxVQUF4QjtBQUNILGFBRlcsQ0FBWjtBQUdBckIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQmEsU0FBMUI7O0FBRUEsaUJBQUssSUFBSVAsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR08sU0FBUyxDQUFDUSxNQUE5QixFQUFzQ2YsRUFBQyxFQUF2QyxFQUEyQztBQUN2Q1AsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QmEsU0FBUyxDQUFDUCxFQUFELENBQWhDO0FBRUEsa0JBQUlWLElBQUksR0FBR1gsV0FBVyxDQUFDLEtBQUtxQyxtQkFBTixDQUF0QjtBQUNBMUIsY0FBQUEsSUFBSSxDQUFDMkIsTUFBTCxHQUFjLEtBQUtDLHVCQUFuQixDQUp1QyxDQUt2Qzs7QUFDQSxrQkFBSTFCLFNBQVMsR0FBR2UsU0FBUyxDQUFDUCxFQUFELENBQVQsQ0FBYSxXQUFiLENBQWhCO0FBQ0FQLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLFNBQTFCO0FBQ0FGLGNBQUFBLElBQUksQ0FBQ0ssWUFBTDtBQUFBO0FBQUEsOERBQXVDd0IsSUFBdkMsQ0FBNEMsS0FBS2YsY0FBakQsRUFBaUU7QUFDN0RaLGdCQUFBQSxTQUFTLEVBQUVBO0FBRGtELGVBQWpFO0FBR0FGLGNBQUFBLElBQUksQ0FBQ0ssWUFBTDtBQUFBO0FBQUEsOERBQXVDQyxPQUF2QztBQUNBLGtCQUFJd0IsQ0FBQyxHQUFHcEIsRUFBQyxHQUFHLENBQVo7QUFDQSxrQkFBSXFCLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVd2QixFQUFDLEdBQUcsQ0FBZixDQUFSO0FBQ0FQLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUIwQixDQUFqQjtBQUNBM0IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQjJCLENBQXBCO0FBQ0EvQixjQUFBQSxJQUFJLENBQUNrQyxRQUFMLEdBQWdCL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFMLElBQVUsQ0FBQyxHQUFYLEdBQWlCLEdBQWpCLEdBQXVCMkMsQ0FBQyxHQUFHLEdBQTVCLEVBQWlDQyxDQUFDLEdBQUcsQ0FBQyxHQUFMLEdBQVcsRUFBNUMsRUFBZ0QsQ0FBaEQsQ0FBbEI7QUFDQSxtQkFBS0gsdUJBQUwsQ0FBNkJPLE1BQTdCLEdBQXNDbkMsSUFBSSxDQUFDa0MsUUFBTCxDQUFjSCxDQUFkLEdBQWtCLENBQUMsQ0FBbkIsR0FBdUIsRUFBN0Q7QUFDQSxtQkFBS2pDLGdCQUFMLENBQXNCSSxTQUF0QixJQUFtQ0YsSUFBbkM7QUFDSCxhQXhDVyxDQXlDWjtBQUNBOztBQUNIOzs7MkNBQ2dCLENBRWhCOzs7d0NBQ2FvQyxLLEVBQU9DLFUsRUFBWTtBQUU3QixpR0FBb0JELEtBQXBCLEVBQTJCQyxVQUEzQjs7QUFDQSxnQkFBSUEsVUFBVSxLQUFLLGVBQW5CLEVBQW9DO0FBRWhDO0FBQ0EsbUJBQUtyQyxJQUFMLENBQVVzQyxJQUFWLENBQWUsMEJBQWY7QUFDSDtBQUNKLFcsQ0FDRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztpQkEvR3dDLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFHSixJOzs7Ozs7O2lCQUtKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHZpZXcsIFR3ZWVuLCB2MywgUHJlZmFiLCBpbnN0YW50aWF0ZSwgSnNvbkFzc2V0ICxmaW5kfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEVuZW15SW5mb0NlbGxQcmVmYWIgfSBmcm9tICcuL0VuZW15SW5mb0NlbGxQcmVmYWInO1xyXG5pbXBvcnQgeyBJbmZvTGF5ZXJDdGxCYXNlIH0gZnJvbSAnLi9JbmZvTGF5ZXJDdGxCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUluZm9MYXllckN0bCcpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUluZm9MYXllckN0bCBleHRlbmRzIEluZm9MYXllckN0bEJhc2Uge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogR2FtZUNvbnRyb2xsZXIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb05vZGVQYXJlbnROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteUluZm9DZWxsUHJlZmFiOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGVuZW15SW5mb0NlbGxNYXA6IE9iamVjdCA9IHt9O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBuZXdJbmZvVGlwc05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gbGV0IHNjcmVlblNpemUgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RW5lbXlEYXRhKCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicmVmZXItZW5lbXktZGF0YVwiLCB0aGlzLnJlZmVyRW5lbXlEYXRhLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlZmVyLWVuZW15LWluZm8tY2VsbFwiLCAoZW5lbXlUeXBlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJg5r+A5rS75LqG5p+Q5Liq5pWM5Lq6YFwiLCBlbmVteVR5cGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15IGluZm8gY2VsbCBtYXBcIiwgdGhpcy5lbmVteUluZm9DZWxsTWFwKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDov5nkuKrmlYzkurrnmoRVSVwiKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV0uZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLnJlZmVyVUkoKTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteUluZm9DZWxsTWFwW2VuZW15VHlwZV07XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5yZWZlclVJKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3ctbmV3LWVuZW15LWluZm8tdGlwc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc0hhdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJbmZvVGlwc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5lbmVteUluZm9DZWxsTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtpXTtcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuZ2V0SXNTaG93ZWQoKSAmJiBub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5nZXRFbmVteUlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0hhdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgaGF2ZVwiLCBpc0hhdmUpO1xyXG4gICAgICAgICAgICBpZiAoaXNIYXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0luZm9UaXBzTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbG9zZVVJQ2IoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbG9zZSB1aSBjYlwiKTtcclxuICAgICAgICAvLyB0aGlzXHJcbiAgICB9XHJcbiAgICBpbml0RW5lbXlEYXRhKCkge1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50QWN0aXZlRW5lbXlMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRBY3RpdmVFbmVteUxpc3QoKTtcclxuICAgICAgICBsZXQgZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcbiAgICAgICAgbGV0IGVuZW15TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGdhbWVDb25maWdbaV07XHJcbiAgICAgICAgICAgIGlmIChpLmluZGV4T2YoXCJCb3NzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpLmluZGV4T2YoXCJFbmVteVwiKSA+IC0xIHx8IGkuaW5kZXhPZihcIkJvc3NcIikgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXVcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbmVteUxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aOkuW6j1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgbGlzdFwiLCBlbmVteUxpc3QpO1xyXG4gICAgICAgIGVuZW15TGlzdCA9IGVuZW15TGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLkVuZW15SW5kZXggLSBiLkVuZW15SW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBsaXN0XCIsIGVuZW15TGlzdCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiLCBlbmVteUxpc3RbaV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15SW5mb0NlbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZW5lbXlJbmZvTm9kZVBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBlbmVteUxpc3RbaV0pO1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlID0gZW5lbXlMaXN0W2ldWydFbmVteVR5cGUnXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSB0eXBlXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLmluaXQodGhpcy5nYW1lQ29udHJvbGxlciwge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBlbmVteVR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLnJlZmVyVUkoKTtcclxuICAgICAgICAgICAgbGV0IHggPSBpICUgMztcclxuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyAzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4XCIsIHgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInkgPSBcIiwgeSk7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MygoMyAtIDEpICogLTAuNSAqIDEwMCArIHggKiAxMDAsIHkgKiAtMTAwIC0gNzAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15SW5mb05vZGVQYXJlbnROb2RlLmhlaWdodCA9IG5vZGUucG9zaXRpb24ueSAqIC0xICsgNzA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj5blh7rjgILmv4DmtLvmlYzkurrmlbDmja5cclxuICAgICAgICAvLyBsZXQgYWN0aXZlRW5lbXlEYXRhID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEVuZW15SXNBY3RpdmVcclxuICAgIH1cclxuICAgIHJlZmVyRW5lbXlEYXRhKCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuXHJcbiAgICAgICAgc3VwZXIub25CdXR0b25DbGljayhldmVudCwgY3VzdG9tRGF0YSk7XHJcbiAgICAgICAgaWYgKGN1c3RvbURhdGEgPT09ICdiZy1ub2RlLWNsaWNrJykge1xyXG5cclxuICAgICAgICAgICAgLy8gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5ZXItYnV0dG9uLWNsaWNrLWF1ZGlvXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImNsb3NlLW1vbnN0ZXItaW5mby1sYXllclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNob3dNb25zdGVySW5mb0xheWVyKHRhcmdldDogQmFzZU9iamVjdCl7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5zaG93TW9uc3RlckluZm9MYXllclxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19