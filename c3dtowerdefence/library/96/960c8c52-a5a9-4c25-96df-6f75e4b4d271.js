System.register(["cc", "code-quality:cr", "../../GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, find, instantiate, v3, LabelComponent, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BuildTowerUITowerIcon;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../GameController", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      find = _cc.find;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      LabelComponent = _cc.LabelComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "960c8xSpalMJZbfb3XktNJx", "BuildTowerUITowerIcon", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildTowerUITowerIcon", BuildTowerUITowerIcon = (_dec = ccclass('BuildTowerUITowerIcon'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(BuildTowerUITowerIcon, _Component);

        function BuildTowerUITowerIcon() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BuildTowerUITowerIcon);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BuildTowerUITowerIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "costGoldLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "towerShowAnimList", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "showTowerAnimLayer", _descriptor3, _assertThisInitialized(_this));

          _this.gameConfig = undefined;
          _this.currentBuildCost = null;
          _this.towerType = null;
          return _this;
        }

        _createClass(BuildTowerUITowerIcon, [{
          key: "onLoad",
          //塔的类型
          value: function onLoad() {
            this.gameConfig = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(type) {
            this.towerType = type; // console.log("初始化塔的类型", type, this.gameConfig);

            var node = instantiate(this.towerShowAnimList[type]);
            node.scale = v3(0.5, 0.5, 0.5);
            node.parent = this.showTowerAnimLayer; //根据type 取处数据

            var configList = [];

            for (var i in this.gameConfig) {
              if (i.indexOf("Tower") > -1) {
                configList.push(this.gameConfig[i]);
              }
            } // console.log("config", configList);


            for (var _i in configList) {
              if (configList[_i].index === type) {
                // console.log("找到了相关数据");
                var costCount = configList[_i].BuildCost;
                this.costGoldLabel.getComponent(LabelComponent).string = costCount;
                this.currentBuildCost = costCount;
                break;
              }
            }
          }
        }, {
          key: "getCurrentBuildCost",
          value: function getCurrentBuildCost() {
            //返回当前的建造消耗
            return this.currentBuildCost;
          }
        }, {
          key: "getTowerType",
          value: function getTowerType() {
            return this.towerType;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return BuildTowerUITowerIcon;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "costGoldLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "towerShowAnimList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showTowerAnimLayer", [_dec4], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSVRvd2VySWNvbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImZpbmQiLCJpbnN0YW50aWF0ZSIsInYzIiwiTGFiZWxDb21wb25lbnQiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1aWxkVG93ZXJVSVRvd2VySWNvbiIsInR5cGUiLCJnYW1lQ29uZmlnIiwidW5kZWZpbmVkIiwiY3VycmVudEJ1aWxkQ29zdCIsInRvd2VyVHlwZSIsImdldENvbXBvbmVudCIsImdldEdhbWVDb25maWciLCJqc29uIiwibm9kZSIsInRvd2VyU2hvd0FuaW1MaXN0Iiwic2NhbGUiLCJwYXJlbnQiLCJzaG93VG93ZXJBbmltTGF5ZXIiLCJjb25maWdMaXN0IiwiaSIsImluZGV4T2YiLCJwdXNoIiwiaW5kZXgiLCJjb3N0Q291bnQiLCJCdWlsZENvc3QiLCJjb3N0R29sZExhYmVsIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxjLE9BQUFBLGM7Ozs7QUFDNURDLE1BQUFBLGMscUJBQUFBLGM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzt1Q0FHSkMscUIsV0FEWkYsT0FBTyxDQUFDLHVCQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFFUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVQ7QUFBUixPQUFELEMsVUFHUk8sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRUZXLFUsR0FBaUJDLFM7Z0JBQ2pCQyxnQixHQUEyQixJO2dCQUMzQkMsUyxHQUFvQixJOzs7Ozs7QUFBTTttQ0FDeEI7QUFDTCxpQkFBS0gsVUFBTCxHQUFrQlQsSUFBSSxDQUFDLGdCQUFELENBQUosQ0FBdUJhLFlBQXZCO0FBQUE7QUFBQSxrREFBb0RDLGFBQXBELEdBQW9FQyxJQUF0RjtBQUVIOzs7a0NBQ08sQ0FDSjtBQUNIOzs7K0JBQ0lQLEksRUFBYztBQUNmLGlCQUFLSSxTQUFMLEdBQWlCSixJQUFqQixDQURlLENBRWY7O0FBQ0EsZ0JBQUlRLElBQUksR0FBR2YsV0FBVyxDQUFDLEtBQUtnQixpQkFBTCxDQUF1QlQsSUFBdkIsQ0FBRCxDQUF0QjtBQUNBUSxZQUFBQSxJQUFJLENBQUNFLEtBQUwsR0FBYWhCLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBZjtBQUNBYyxZQUFBQSxJQUFJLENBQUNHLE1BQUwsR0FBYyxLQUFLQyxrQkFBbkIsQ0FMZSxDQU1mOztBQUNBLGdCQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBVCxJQUFjLEtBQUtiLFVBQW5CLEVBQStCO0FBQzNCLGtCQUFJYSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxPQUFWLElBQXFCLENBQUMsQ0FBMUIsRUFBNkI7QUFDekJGLGdCQUFBQSxVQUFVLENBQUNHLElBQVgsQ0FBZ0IsS0FBS2YsVUFBTCxDQUFnQmEsQ0FBaEIsQ0FBaEI7QUFDSDtBQUNKLGFBWmMsQ0FhZjs7O0FBQ0EsaUJBQUssSUFBSUEsRUFBVCxJQUFjRCxVQUFkLEVBQTBCO0FBQ3RCLGtCQUFJQSxVQUFVLENBQUNDLEVBQUQsQ0FBVixDQUFjRyxLQUFkLEtBQXdCakIsSUFBNUIsRUFBa0M7QUFDOUI7QUFDQSxvQkFBSWtCLFNBQVMsR0FBR0wsVUFBVSxDQUFDQyxFQUFELENBQVYsQ0FBY0ssU0FBOUI7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQmYsWUFBbkIsQ0FBZ0NWLGNBQWhDLEVBQWdEMEIsTUFBaEQsR0FBeURILFNBQXpEO0FBQ0EscUJBQUtmLGdCQUFMLEdBQXdCZSxTQUF4QjtBQUNBO0FBQ0g7QUFDSjtBQUNKOzs7Z0RBQ29CO0FBQ2pCO0FBQ0EsbUJBQU8sS0FBS2YsZ0JBQVo7QUFDSDs7O3lDQUNhO0FBQ1YsbUJBQU8sS0FBS0MsU0FBWjtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBckR1Q2YsUzs7Ozs7aUJBR1YsSTs7Ozs7OztpQkFFUSxFOzs7Ozs7O2lCQUdILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgZmluZCwgaW5zdGFudGlhdGUsIHYzLCBMYWJlbENvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQnVpbGRUb3dlclVJVG93ZXJJY29uJylcclxuZXhwb3J0IGNsYXNzIEJ1aWxkVG93ZXJVSVRvd2VySWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNvc3RHb2xkTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJTaG93QW5pbUxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNob3dUb3dlckFuaW1MYXllcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZzoge30gPSB1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgY3VycmVudEJ1aWxkQ29zdDogbnVtYmVyID0gbnVsbDsgLy/lvZPliY3nmoTlu7rpgKDmtojogJdcclxuICAgIHB1YmxpYyB0b3dlclR5cGU6IG51bWJlciA9IG51bGw7IC8v5aGU55qE57G75Z6LXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBpbml0KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG93ZXJUeXBlID0gdHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIneWni+WMluWhlOeahOexu+Wei1wiLCB0eXBlLCB0aGlzLmdhbWVDb25maWcpO1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlclNob3dBbmltTGlzdFt0eXBlXSlcclxuICAgICAgICBub2RlLnNjYWxlID0gdjMoMC41LCAwLjUsIDAuNSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNob3dUb3dlckFuaW1MYXllcjtcclxuICAgICAgICAvL+agueaNrnR5cGUg5Y+W5aSE5pWw5o2uXHJcbiAgICAgICAgbGV0IGNvbmZpZ0xpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoaS5pbmRleE9mKFwiVG93ZXJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnTGlzdC5wdXNoKHRoaXMuZ2FtZUNvbmZpZ1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb25maWdcIiwgY29uZmlnTGlzdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBjb25maWdMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdMaXN0W2ldLmluZGV4ID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebuOWFs+aVsOaNrlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0Q291bnQgPSBjb25maWdMaXN0W2ldLkJ1aWxkQ29zdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29zdEdvbGRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGNvc3RDb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkQ29zdCA9IGNvc3RDb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEJ1aWxkQ29zdCgpe1xyXG4gICAgICAgIC8v6L+U5Zue5b2T5YmN55qE5bu66YCg5raI6ICXXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEJ1aWxkQ29zdDtcclxuICAgIH1cclxuICAgIGdldFRvd2VyVHlwZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2VyVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==