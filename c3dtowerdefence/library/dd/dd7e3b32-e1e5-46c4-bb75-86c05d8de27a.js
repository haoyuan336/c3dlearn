System.register(["cc", "code-quality:cr", "../BaseObject.js", "./EnemyInfoCellPrefab.js", "./InfoLayerCtlBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Prefab, instantiate, JsonAsset, BaseObject, EnemyInfoCellPrefab, InfoLayerCtlBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, EnemyInfoLayerCtl;

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
      JsonAsset = _cc.JsonAsset;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
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
        type: JsonAsset
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

          _initializerDefineProperty(_this, "gameConfigJsonAsset", _descriptor, _assertThisInitialized(_this));

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
            var gameConfig = this.gameConfigJsonAsset.json;
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
              }), EnemyInfoCellPrefab) : EnemyInfoCellPrefab).init(this.gameConfigJsonAsset.json, {
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
      }), InfoLayerCtlBase) : InfoLayerCtlBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameConfigJsonAsset", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9FbmVteUluZm9MYXllckN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsInYzIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJKc29uQXNzZXQiLCJCYXNlT2JqZWN0IiwiRW5lbXlJbmZvQ2VsbFByZWZhYiIsIkluZm9MYXllckN0bEJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUluZm9MYXllckN0bCIsInR5cGUiLCJlbmVteUluZm9DZWxsTWFwIiwiaW5pdEVuZW15RGF0YSIsIm5vZGUiLCJvbiIsImVuZW15VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21wb25lbnQiLCJyZWZlclVJIiwiaXNIYXZlIiwibmV3SW5mb1RpcHNOb2RlIiwiYWN0aXZlIiwiaSIsImdldElzU2hvd2VkIiwiZ2V0RW5lbXlJc0FjdGl2ZSIsImdhbWVDb25maWciLCJnYW1lQ29uZmlnSnNvbkFzc2V0IiwianNvbiIsImVuZW15TGlzdCIsImRhdGEiLCJpbmRleE9mIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIkVuZW15SW5kZXgiLCJsZW5ndGgiLCJlbmVteUluZm9DZWxsUHJlZmFiIiwicGFyZW50IiwiZW5lbXlJbmZvTm9kZVBhcmVudE5vZGUiLCJpbml0IiwieCIsInkiLCJNYXRoIiwiZmxvb3IiLCJwb3NpdGlvbiIsImhlaWdodCIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBQ25FQyxNQUFBQSxVLGlCQUFBQSxVOztBQUdBQyxNQUFBQSxtQiwwQkFBQUEsbUI7O0FBQ0FDLE1BQUFBLGdCLHVCQUFBQSxnQjs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JULFUsQ0FBdEJTLE87QUFBU0MsTUFBQUEsUSxHQUFhVixVLENBQWJVLFE7O21DQUdKQyxpQixXQURaRixPQUFPLENBQUMsbUJBQUQsQyxVQUtIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFUDtBQUFSLE9BQUQsQyxVQUdSSyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUdSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUtSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFGRFksZ0IsR0FBMkIsRTs7Ozs7Ozs7O2tDQUszQjtBQUFBOztBQUNKLHlGQURJLENBRUo7QUFDQTs7O0FBQ0EsaUJBQUtDLGFBQUwsR0FKSSxDQUtKOztBQUNBLGlCQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSx1QkFBYixFQUFzQyxVQUFDQyxTQUFELEVBQXVCO0FBQ3pEO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLE1BQUksQ0FBQ04sZ0JBQXhDOztBQUVBLGtCQUFJLE1BQUksQ0FBQ0EsZ0JBQUwsQ0FBc0JJLFNBQXRCLENBQUosRUFBc0M7QUFDbEM7QUFDQTtBQUNBLG9CQUFJRixJQUFJLEdBQUcsTUFBSSxDQUFDRixnQkFBTCxDQUFzQkksU0FBdEIsQ0FBWDtBQUNBRixnQkFBQUEsSUFBSSxDQUFDSyxZQUFMO0FBQUE7QUFBQSxnRUFBdUNDLE9BQXZDO0FBQ0g7QUFDSixhQVZEO0FBV0EsaUJBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhLDBCQUFiLEVBQXlDLFlBQU07QUFDM0Msa0JBQUlNLE1BQU0sR0FBRyxLQUFiO0FBQ0EsY0FBQSxNQUFJLENBQUNDLGVBQUwsQ0FBcUJDLE1BQXJCLEdBQThCLEtBQTlCOztBQUNBLG1CQUFLLElBQUlDLENBQVQsSUFBYyxNQUFJLENBQUNaLGdCQUFuQixFQUFxQztBQUNqQyxvQkFBSUUsSUFBSSxHQUFHLE1BQUksQ0FBQ0YsZ0JBQUwsQ0FBc0JZLENBQXRCLENBQVg7O0FBQ0Esb0JBQUksQ0FBQ1YsSUFBSSxDQUFDSyxZQUFMO0FBQUE7QUFBQSw4Q0FBOEJNLFdBQTlCLEVBQUQsSUFBZ0RYLElBQUksQ0FBQ0ssWUFBTDtBQUFBO0FBQUEsOENBQThCTyxnQkFBOUIsRUFBcEQsRUFBc0c7QUFDbEdMLGtCQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNBO0FBQ0g7QUFDSixlQVQwQyxDQVUzQzs7O0FBQ0Esa0JBQUlBLE1BQUosRUFBWTtBQUNSLGdCQUFBLE1BQUksQ0FBQ0MsZUFBTCxDQUFxQkMsTUFBckIsR0FBOEIsSUFBOUI7QUFDSDtBQUNKLGFBZEQ7QUFlSDs7O3NDQUNXLENBQ1I7QUFDQTtBQUNIOzs7MENBQ2U7QUFDWjtBQUNBLGdCQUFJSSxVQUFVLEdBQUcsS0FBS0MsbUJBQUwsQ0FBeUJDLElBQTFDO0FBQ0EsZ0JBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxpQkFBSyxJQUFJTixDQUFULElBQWNHLFVBQWQsRUFBMEI7QUFDdEIsa0JBQUlJLElBQUksR0FBR0osVUFBVSxDQUFDSCxDQUFELENBQXJCOztBQUNBLGtCQUFJQSxDQUFDLENBQUNRLE9BQUYsQ0FBVSxNQUFWLElBQW9CLENBQUMsQ0FBekIsRUFBNEI7QUFDeEI7QUFFQTtBQUNBO0FBQ0FGLGdCQUFBQSxTQUFTLENBQUNHLElBQVYsQ0FBZUYsSUFBZjtBQUNIO0FBQ0osYUFiVyxDQWNaO0FBQ0E7OztBQUNBRCxZQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0ksSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2pDLHFCQUFPRCxDQUFDLENBQUNFLFVBQUYsR0FBZUQsQ0FBQyxDQUFDQyxVQUF4QjtBQUNILGFBRlcsQ0FBWixDQWhCWSxDQW1CWjs7QUFFQSxpQkFBSyxJQUFJYixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHTSxTQUFTLENBQUNRLE1BQTlCLEVBQXNDZCxFQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDO0FBRUEsa0JBQUlWLElBQUksR0FBR1gsV0FBVyxDQUFDLEtBQUtvQyxtQkFBTixDQUF0QjtBQUNBekIsY0FBQUEsSUFBSSxDQUFDMEIsTUFBTCxHQUFjLEtBQUtDLHVCQUFuQixDQUp1QyxDQUt2Qzs7QUFDQSxrQkFBSXpCLFNBQVMsR0FBR2MsU0FBUyxDQUFDTixFQUFELENBQVQsQ0FBYSxXQUFiLENBQWhCLENBTnVDLENBT3ZDOztBQUNBVixjQUFBQSxJQUFJLENBQUNLLFlBQUw7QUFBQTtBQUFBLDhEQUF1Q3VCLElBQXZDLENBQTRDLEtBQUtkLG1CQUFMLENBQXlCQyxJQUFyRSxFQUEyRTtBQUN2RWIsZ0JBQUFBLFNBQVMsRUFBRUE7QUFENEQsZUFBM0U7QUFHQUYsY0FBQUEsSUFBSSxDQUFDSyxZQUFMO0FBQUE7QUFBQSw4REFBdUNDLE9BQXZDO0FBQ0Esa0JBQUl1QixDQUFDLEdBQUduQixFQUFDLEdBQUcsQ0FBWjtBQUNBLGtCQUFJb0IsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3RCLEVBQUMsR0FBRyxDQUFmLENBQVIsQ0FidUMsQ0FjdkM7QUFDQTs7QUFDQVYsY0FBQUEsSUFBSSxDQUFDaUMsUUFBTCxHQUFnQjlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBTCxJQUFVLENBQUMsR0FBWCxHQUFpQixHQUFqQixHQUF1QjBDLENBQUMsR0FBRyxHQUE1QixFQUFpQ0MsQ0FBQyxHQUFHLENBQUMsR0FBTCxHQUFXLEVBQTVDLEVBQWdELENBQWhELENBQWxCO0FBQ0EsbUJBQUtILHVCQUFMLENBQTZCTyxNQUE3QixHQUFzQ2xDLElBQUksQ0FBQ2lDLFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQixDQUFDLENBQW5CLEdBQXVCLEVBQTdEO0FBQ0EsbUJBQUtoQyxnQkFBTCxDQUFzQkksU0FBdEIsSUFBbUNGLElBQW5DO0FBQ0gsYUF4Q1csQ0F5Q1o7QUFDQTs7QUFDSDs7OzJDQUNnQixDQUVoQjs7O3dDQUNhbUMsSyxFQUFPQyxVLEVBQVk7QUFFN0IsaUdBQW9CRCxLQUFwQixFQUEyQkMsVUFBM0I7O0FBQ0EsZ0JBQUlBLFVBQVUsS0FBSyxlQUFuQixFQUFvQztBQUVoQztBQUNBLG1CQUFLcEMsSUFBTCxDQUFVcUMsSUFBVixDQUFlLDBCQUFmO0FBQ0g7QUFDSixXLENBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBaEh3QyxJOzs7Ozs7O2lCQUdELEk7Ozs7Ozs7aUJBR0osSTs7Ozs7OztpQkFLSixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2aWV3LCBUd2VlbiwgdjMsIFByZWZhYiwgaW5zdGFudGlhdGUsIEpzb25Bc3NldCwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG4vLyBpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlJbmZvQ2VsbFByZWZhYiB9IGZyb20gJy4vRW5lbXlJbmZvQ2VsbFByZWZhYic7XHJcbmltcG9ydCB7IEluZm9MYXllckN0bEJhc2UgfSBmcm9tICcuL0luZm9MYXllckN0bEJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15SW5mb0xheWVyQ3RsJylcclxuZXhwb3J0IGNsYXNzIEVuZW15SW5mb0xheWVyQ3RsIGV4dGVuZHMgSW5mb0xheWVyQ3RsQmFzZSB7XHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBHYW1lQ29udHJvbGxlciB9KVxyXG4gICAgLy8gcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb25Bc3NldDogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlJbmZvTm9kZVBhcmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15SW5mb0NlbGxQcmVmYWI6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZW5lbXlJbmZvQ2VsbE1hcDogT2JqZWN0ID0ge307XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIG5ld0luZm9UaXBzTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyBsZXQgc2NyZWVuU2l6ZSA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB0aGlzLmluaXRFbmVteURhdGEoKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJyZWZlci1lbmVteS1kYXRhXCIsIHRoaXMucmVmZXJFbmVteURhdGEuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVmZXItZW5lbXktaW5mby1jZWxsXCIsIChlbmVteVR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImDmv4DmtLvkuobmn5DkuKrmlYzkurpgXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5mbyBjZWxsIG1hcFwiLCB0aGlzLmVuZW15SW5mb0NlbGxNYXApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlJbmZvQ2VsbE1hcFtlbmVteVR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIt+aWsOi/meS4quaVjOS6uueahFVJXCIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXS5nZXRDb21wb25lbnQoRW5lbXlJbmZvQ2VsbFByZWZhYikucmVmZXJVSSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLnJlZmVyVUkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1uZXctZW5lbXktaW5mby10aXBzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzSGF2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0luZm9UaXBzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmVuZW15SW5mb0NlbGxNYXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lbmVteUluZm9DZWxsTWFwW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5nZXRJc1Nob3dlZCgpICYmIG5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmdldEVuZW15SXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzSGF2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpcyBoYXZlXCIsIGlzSGF2ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0hhdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5mb1RpcHNOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsb3NlVUlDYigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsb3NlIHVpIGNiXCIpO1xyXG4gICAgICAgIC8vIHRoaXNcclxuICAgIH1cclxuICAgIGluaXRFbmVteURhdGEoKSB7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRBY3RpdmVFbmVteUxpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudEFjdGl2ZUVuZW15TGlzdCgpO1xyXG4gICAgICAgIGxldCBnYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnSnNvbkFzc2V0Lmpzb247XHJcbiAgICAgICAgbGV0IGVuZW15TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGdhbWVDb25maWdbaV07XHJcbiAgICAgICAgICAgIGlmIChpLmluZGV4T2YoXCJCb3NzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpLmluZGV4T2YoXCJFbmVteVwiKSA+IC0xIHx8IGkuaW5kZXhPZihcIkJvc3NcIikgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXVcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbmVteUxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aOkuW6j1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgbGlzdFwiLCBlbmVteUxpc3QpO1xyXG4gICAgICAgIGVuZW15TGlzdCA9IGVuZW15TGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLkVuZW15SW5kZXggLSBiLkVuZW15SW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBsaXN0XCIsIGVuZW15TGlzdCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiLCBlbmVteUxpc3RbaV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15SW5mb0NlbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZW5lbXlJbmZvTm9kZVBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBlbmVteUxpc3RbaV0pO1xyXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlID0gZW5lbXlMaXN0W2ldWydFbmVteVR5cGUnXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSB0eXBlXCIsIGVuZW15VHlwZSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15SW5mb0NlbGxQcmVmYWIpLmluaXQodGhpcy5nYW1lQ29uZmlnSnNvbkFzc2V0Lmpzb24sIHtcclxuICAgICAgICAgICAgICAgIGVuZW15VHlwZTogZW5lbXlUeXBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChFbmVteUluZm9DZWxsUHJlZmFiKS5yZWZlclVJKCk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gaSAlIDM7XHJcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gMyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieFwiLCB4KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ5ID0gXCIsIHkpO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoKDMgLSAxKSAqIC0wLjUgKiAxMDAgKyB4ICogMTAwLCB5ICogLTEwMCAtIDcwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUluZm9Ob2RlUGFyZW50Tm9kZS5oZWlnaHQgPSBub2RlLnBvc2l0aW9uLnkgKiAtMSArIDcwO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15SW5mb0NlbGxNYXBbZW5lbXlUeXBlXSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+W5Ye644CC5r+A5rS75pWM5Lq65pWw5o2uXHJcbiAgICAgICAgLy8gbGV0IGFjdGl2ZUVuZW15RGF0YSA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRFbmVteUlzQWN0aXZlXHJcbiAgICB9XHJcbiAgICByZWZlckVuZW15RGF0YSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcblxyXG4gICAgICAgIHN1cGVyLm9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIGlmIChjdXN0b21EYXRhID09PSAnYmctbm9kZS1jbGljaycpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwicGxheWVyLWJ1dHRvbi1jbGljay1hdWRpb1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJjbG9zZS1tb25zdGVyLWluZm8tbGF5ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzaG93TW9uc3RlckluZm9MYXllcih0YXJnZXQ6IEJhc2VPYmplY3Qpe1xyXG4gICAgLy8gICAgIC8vIHRoaXMuc2hvd01vbnN0ZXJJbmZvTGF5ZXJcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==