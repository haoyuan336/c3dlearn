System.register(["cc", "code-quality:cr", "../../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Prefab, instantiate, v3, LabelComponent, isValid, BaseObject, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BuildTowerUITowerIcon;

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
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      LabelComponent = _cc.LabelComponent;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
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
          _this.currentAnimNode = null;
          return _this;
        }

        _createClass(BuildTowerUITowerIcon, [{
          key: "onLoad",
          //当前播放动画的类型
          value: function onLoad() {// this.gameConfig = find("GameController").getComponent(GameController).getGameConfig().json;
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(type, gameController, gameConfig) {
            this.gameConfig = gameConfig;
            this.towerType = type; // console.log("初始化塔的类型", type, this.gameConfig);

            if (isValid(this.currentAnimNode)) {
              this.currentAnimNode.destroy();
            }

            var node = instantiate(this.towerShowAnimList[type]);
            this.currentAnimNode = node;
            node.scale = v3(0.5, 0.5, 0.5);
            node.parent = this.showTowerAnimLayer; //根据type 取处数据
            // let configList = [];

            console.log("type", type);

            for (var i in this.gameConfig) {
              if (i.indexOf("Tower") > -1) {
                // configList.push(this.gameConfig[i]);
                if (this.gameConfig[i].Index === type) {
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

            _get(_getPrototypeOf(BuildTowerUITowerIcon.prototype), "init", this).call(this, this.gameConfig, gameController);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSVRvd2VySWNvbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwidjMiLCJMYWJlbENvbXBvbmVudCIsImlzVmFsaWQiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQnVpbGRUb3dlclVJVG93ZXJJY29uIiwidHlwZSIsImdhbWVDb25maWciLCJ1bmRlZmluZWQiLCJjdXJyZW50QnVpbGRDb3N0IiwidG93ZXJUeXBlIiwiY3VycmVudEFuaW1Ob2RlIiwiZ2FtZUNvbnRyb2xsZXIiLCJkZXN0cm95Iiwibm9kZSIsInRvd2VyU2hvd0FuaW1MaXN0Iiwic2NhbGUiLCJwYXJlbnQiLCJzaG93VG93ZXJBbmltTGF5ZXIiLCJjb25zb2xlIiwibG9nIiwiaSIsImluZGV4T2YiLCJJbmRleCIsIm9iamVjdFR5cGUiLCJjb3N0R29sZExhYmVsIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiYnVpbGRDb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBY0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLE8sT0FBQUEsTzs7OztBQUU1RUMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JSLFUsQ0FBdEJRLE87QUFBU0MsTUFBQUEsUSxHQUFhVCxVLENBQWJTLFE7O3VDQUdKQyxxQixXQURaRixPQUFPLENBQUMsdUJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQUVSUSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUdSTyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFRlcsVSxHQUFpQkMsUztnQkFDakJDLGdCLEdBQTJCLEk7Z0JBQzNCQyxTLEdBQW9CLEk7Z0JBQ3BCQyxlLEdBQXdCLEk7Ozs7OztBQUFLO21DQUMzQixDQUNMO0FBRUg7OztrQ0FDTyxDQUNKO0FBQ0g7OzsrQkFDSUwsSSxFQUFjTSxjLEVBQWdDTCxVLEVBQW9CO0FBQ25FLGlCQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGlCQUFLRyxTQUFMLEdBQWlCSixJQUFqQixDQUZtRSxDQUduRTs7QUFDQSxnQkFBSUwsT0FBTyxDQUFDLEtBQUtVLGVBQU4sQ0FBWCxFQUFtQztBQUMvQixtQkFBS0EsZUFBTCxDQUFxQkUsT0FBckI7QUFDSDs7QUFDRCxnQkFBSUMsSUFBSSxHQUFHaEIsV0FBVyxDQUFDLEtBQUtpQixpQkFBTCxDQUF1QlQsSUFBdkIsQ0FBRCxDQUF0QjtBQUNBLGlCQUFLSyxlQUFMLEdBQXVCRyxJQUF2QjtBQUNBQSxZQUFBQSxJQUFJLENBQUNFLEtBQUwsR0FBYWpCLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBZjtBQUNBZSxZQUFBQSxJQUFJLENBQUNHLE1BQUwsR0FBYyxLQUFLQyxrQkFBbkIsQ0FWbUUsQ0FXbkU7QUFDQTs7QUFDQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmQsSUFBcEI7O0FBQ0EsaUJBQUssSUFBSWUsQ0FBVCxJQUFjLEtBQUtkLFVBQW5CLEVBQStCO0FBQzNCLGtCQUFJYyxDQUFDLENBQUNDLE9BQUYsQ0FBVSxPQUFWLElBQXFCLENBQUMsQ0FBMUIsRUFBNkI7QUFDekI7QUFDQSxvQkFBSSxLQUFLZixVQUFMLENBQWdCYyxDQUFoQixFQUFtQkUsS0FBbkIsS0FBNkJqQixJQUFqQyxFQUF1QztBQUNuQyx1QkFBS2tCLFVBQUwsR0FBa0JILENBQWxCO0FBQ0g7QUFDSjtBQUNKLGFBckJrRSxDQXNCbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkIsS0FBS0ksVUFBaEM7O0FBQ0EsNEZBQVcsS0FBS2pCLFVBQWhCLEVBQTRCSyxjQUE1Qjs7QUFDQSxpQkFBS2EsYUFBTCxDQUFtQkMsWUFBbkIsQ0FBZ0MxQixjQUFoQyxFQUFnRDJCLE1BQWhELEdBQXlELEtBQUtDLFNBQUwsR0FBaUIsRUFBMUU7QUFFSDs7O2dEQUNxQjtBQUNsQjtBQUNBLG1CQUFPLEtBQUtBLFNBQVo7QUFDSDs7O3lDQUNjO0FBQ1gsbUJBQU8sS0FBS2xCLFNBQVo7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7aUJBakU2QixJOzs7Ozs7O2lCQUVRLEU7Ozs7Ozs7aUJBR0gsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBmaW5kLCBpbnN0YW50aWF0ZSwgdjMsIExhYmVsQ29tcG9uZW50LCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VPYmplY3QnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1aWxkVG93ZXJVSVRvd2VySWNvbicpXHJcbmV4cG9ydCBjbGFzcyBCdWlsZFRvd2VyVUlUb3dlckljb24gZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgY29zdEdvbGRMYWJlbDogTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlclNob3dBbmltTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2hvd1Rvd2VyQW5pbUxheWVyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnOiB7fSA9IHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBjdXJyZW50QnVpbGRDb3N0OiBudW1iZXIgPSBudWxsOyAvL+W9k+WJjeeahOW7uumAoOa2iOiAl1xyXG4gICAgcHVibGljIHRvd2VyVHlwZTogbnVtYmVyID0gbnVsbDsgLy/loZTnmoTnsbvlnotcclxuICAgIHB1YmxpYyBjdXJyZW50QW5pbU5vZGU6IE5vZGUgPSBudWxsOy8v5b2T5YmN5pKt5pS+5Yqo55S755qE57G75Z6LXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lQ29uZmlnID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0R2FtZUNvbmZpZygpLmpzb247XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBpbml0KHR5cGU6IG51bWJlciwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBnYW1lQ29uZmlnOiBPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIHRoaXMudG93ZXJUeXBlID0gdHlwZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIneWni+WMluWhlOeahOexu+Wei1wiLCB0eXBlLCB0aGlzLmdhbWVDb25maWcpO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRoaXMuY3VycmVudEFuaW1Ob2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlclNob3dBbmltTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbU5vZGUgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSB2MygwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2hvd1Rvd2VyQW5pbUxheWVyO1xyXG4gICAgICAgIC8v5qC55o2udHlwZSDlj5blpITmlbDmja5cclxuICAgICAgICAvLyBsZXQgY29uZmlnTGlzdCA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoaS5pbmRleE9mKFwiVG93ZXJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uZmlnTGlzdC5wdXNoKHRoaXMuZ2FtZUNvbmZpZ1tpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lQ29uZmlnW2ldLkluZGV4ID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbmZpZ1wiLCBjb25maWdMaXN0KTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGNvbmZpZ0xpc3QpIHtcclxuICAgICAgICAvLyAgICAgaWYgKGNvbmZpZ0xpc3RbaV0uaW5kZXggPT09IHR5cGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG55u45YWz5pWw5o2uXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gbGV0IGNvc3RDb3VudCA9IGNvbmZpZ0xpc3RbaV0uQnVpbGRDb3N0O1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jb3N0R29sZExhYmVsLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gY29zdENvdW50O1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jdXJyZW50QnVpbGRDb3N0ID0gY29zdENvdW50O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gaTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvYmplY3QgdHlwZScsIHRoaXMub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgc3VwZXIuaW5pdCh0aGlzLmdhbWVDb25maWcsIGdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmNvc3RHb2xkTGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSB0aGlzLmJ1aWxkQ29zdCArICcnO1xyXG5cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRCdWlsZENvc3QoKSB7XHJcbiAgICAgICAgLy/ov5Tlm57lvZPliY3nmoTlu7rpgKDmtojogJdcclxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvc3Q7XHJcbiAgICB9XHJcbiAgICBnZXRUb3dlclR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19