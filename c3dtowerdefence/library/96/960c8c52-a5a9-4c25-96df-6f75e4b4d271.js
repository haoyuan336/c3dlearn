System.register(["cc", "code-quality:cr", "../../GameController.js", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Prefab, find, instantiate, v3, LabelComponent, GameController, BaseObject, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BuildTowerUITowerIcon;

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
    _reporterNs.report("GameController", "../../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../../BaseObject", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      find = _cc.find;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      LabelComponent = _cc.LabelComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(BuildTowerUITowerIcon, _ref);

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
            // let configList = [];

            for (var i in this.gameConfig) {
              if (i.indexOf("Tower") > -1) {
                // configList.push(this.gameConfig[i]);
                if (this.gameConfig[i].index === type) {
                  this.objectType = i;
                }
              }
            } // console.log("config", configList);
            // for (let i in configList) {
            //     if (configList[i].index === type) {
            //         // console.log("找到了相关数据");
            //         // let costCount = configList[i].BuildCost;
            //         // this.costGoldLabel.getComponent(LabelComponent).string = costCount;
            //         // this.currentBuildCost = costCount;
            //         this.objectType = i;
            //         break;
            //     }
            // }


            console.log('object type', this.objectType);

            _get(_getPrototypeOf(BuildTowerUITowerIcon.prototype), "init", this).call(this, this.gameConfig);

            this.costGoldLabel.getComponent(LabelComponent).string = this.buildCost + '';
          }
        }, {
          key: "getCurrentBuildCost",
          value: function getCurrentBuildCost() {
            //返回当前的建造消耗
            return this.buildCost;
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
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "costGoldLabel", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSVRvd2VySWNvbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsIlByZWZhYiIsImZpbmQiLCJpbnN0YW50aWF0ZSIsInYzIiwiTGFiZWxDb21wb25lbnQiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWlsZFRvd2VyVUlUb3dlckljb24iLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsInVuZGVmaW5lZCIsImN1cnJlbnRCdWlsZENvc3QiLCJ0b3dlclR5cGUiLCJnZXRDb21wb25lbnQiLCJnZXRHYW1lQ29uZmlnIiwianNvbiIsIm5vZGUiLCJ0b3dlclNob3dBbmltTGlzdCIsInNjYWxlIiwicGFyZW50Iiwic2hvd1Rvd2VyQW5pbUxheWVyIiwiaSIsImluZGV4T2YiLCJpbmRleCIsIm9iamVjdFR5cGUiLCJjb25zb2xlIiwibG9nIiwiY29zdEdvbGRMYWJlbCIsInN0cmluZyIsImJ1aWxkQ29zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxjLE9BQUFBLGM7Ozs7QUFDNURDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzt1Q0FHSkMscUIsV0FEWkYsT0FBTyxDQUFDLHVCQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVg7QUFBUixPQUFELEMsVUFFUlMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFHUlEsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVg7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRUZZLFUsR0FBaUJDLFM7Z0JBQ2pCQyxnQixHQUEyQixJO2dCQUMzQkMsUyxHQUFvQixJOzs7Ozs7QUFBTTttQ0FDeEI7QUFDTCxpQkFBS0gsVUFBTCxHQUFrQlYsSUFBSSxDQUFDLGdCQUFELENBQUosQ0FBdUJjLFlBQXZCO0FBQUE7QUFBQSxrREFBb0RDLGFBQXBELEdBQW9FQyxJQUF0RjtBQUVIOzs7a0NBQ08sQ0FDSjtBQUNIOzs7K0JBQ0lQLEksRUFBYztBQUNmLGlCQUFLSSxTQUFMLEdBQWlCSixJQUFqQixDQURlLENBRWY7O0FBQ0EsZ0JBQUlRLElBQUksR0FBR2hCLFdBQVcsQ0FBQyxLQUFLaUIsaUJBQUwsQ0FBdUJULElBQXZCLENBQUQsQ0FBdEI7QUFDQVEsWUFBQUEsSUFBSSxDQUFDRSxLQUFMLEdBQWFqQixFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWY7QUFDQWUsWUFBQUEsSUFBSSxDQUFDRyxNQUFMLEdBQWMsS0FBS0Msa0JBQW5CLENBTGUsQ0FNZjtBQUNBOztBQUNBLGlCQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLWixVQUFuQixFQUErQjtBQUMzQixrQkFBSVksQ0FBQyxDQUFDQyxPQUFGLENBQVUsT0FBVixJQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCO0FBQ0Esb0JBQUksS0FBS2IsVUFBTCxDQUFnQlksQ0FBaEIsRUFBbUJFLEtBQW5CLEtBQTZCZixJQUFqQyxFQUF1QztBQUNuQyx1QkFBS2dCLFVBQUwsR0FBa0JILENBQWxCO0FBQ0g7QUFDSjtBQUNKLGFBZmMsQ0FnQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkIsS0FBS0YsVUFBaEM7O0FBQ0EsNEZBQVcsS0FBS2YsVUFBaEI7O0FBQ0EsaUJBQUtrQixhQUFMLENBQW1CZCxZQUFuQixDQUFnQ1gsY0FBaEMsRUFBZ0QwQixNQUFoRCxHQUF5RCxLQUFLQyxTQUFMLEdBQWlCLEVBQTFFO0FBRUg7OztnREFDcUI7QUFDbEI7QUFDQSxtQkFBTyxLQUFLQSxTQUFaO0FBQ0g7Ozt5Q0FDYztBQUNYLG1CQUFPLEtBQUtqQixTQUFaO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O2lCQTFENkIsSTs7Ozs7OztpQkFFUSxFOzs7Ozs7O2lCQUdILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgZmluZCwgaW5zdGFudGlhdGUsIHYzLCBMYWJlbENvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlT2JqZWN0JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdCdWlsZFRvd2VyVUlUb3dlckljb24nKVxyXG5leHBvcnQgY2xhc3MgQnVpbGRUb3dlclVJVG93ZXJJY29uIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNvc3RHb2xkTGFiZWw6IE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJTaG93QW5pbUxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNob3dUb3dlckFuaW1MYXllcjogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZzoge30gPSB1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgY3VycmVudEJ1aWxkQ29zdDogbnVtYmVyID0gbnVsbDsgLy/lvZPliY3nmoTlu7rpgKDmtojogJdcclxuICAgIHB1YmxpYyB0b3dlclR5cGU6IG51bWJlciA9IG51bGw7IC8v5aGU55qE57G75Z6LXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBpbml0KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG93ZXJUeXBlID0gdHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIneWni+WMluWhlOeahOexu+Wei1wiLCB0eXBlLCB0aGlzLmdhbWVDb25maWcpO1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlclNob3dBbmltTGlzdFt0eXBlXSlcclxuICAgICAgICBub2RlLnNjYWxlID0gdjMoMC41LCAwLjUsIDAuNSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNob3dUb3dlckFuaW1MYXllcjtcclxuICAgICAgICAvL+agueaNrnR5cGUg5Y+W5aSE5pWw5o2uXHJcbiAgICAgICAgLy8gbGV0IGNvbmZpZ0xpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoaS5pbmRleE9mKFwiVG93ZXJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uZmlnTGlzdC5wdXNoKHRoaXMuZ2FtZUNvbmZpZ1tpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lQ29uZmlnW2ldLmluZGV4ID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbmZpZ1wiLCBjb25maWdMaXN0KTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGNvbmZpZ0xpc3QpIHtcclxuICAgICAgICAvLyAgICAgaWYgKGNvbmZpZ0xpc3RbaV0uaW5kZXggPT09IHR5cGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG55u45YWz5pWw5o2uXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gbGV0IGNvc3RDb3VudCA9IGNvbmZpZ0xpc3RbaV0uQnVpbGRDb3N0O1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jb3N0R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gY29zdENvdW50O1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jdXJyZW50QnVpbGRDb3N0ID0gY29zdENvdW50O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gaTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvYmplY3QgdHlwZScsIHRoaXMub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgc3VwZXIuaW5pdCh0aGlzLmdhbWVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuY29zdEdvbGRMYWJlbC5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IHRoaXMuYnVpbGRDb3N0ICsgJyc7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEJ1aWxkQ29zdCgpIHtcclxuICAgICAgICAvL+i/lOWbnuW9k+WJjeeahOW7uumAoOa2iOiAl1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29zdDtcclxuICAgIH1cclxuICAgIGdldFRvd2VyVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3dlclR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=