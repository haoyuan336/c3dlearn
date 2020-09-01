System.register(["cc", "code-quality:cr", "./MenuUIBase.js", "../../GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, ButtonComponent, v3, find, Prefab, instantiate, v2, MenuUIBase, GameController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BuildTowerUI;

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

  function _reportPossibleCrUseOfMenuUIBase(extras) {
    _reporterNs.report("MenuUIBase", "./MenuUIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../GameController", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      ButtonComponent = _cc.ButtonComponent;
      v3 = _cc.v3;
      find = _cc.find;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v2 = _cc.v2;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuUIBaseJs) {
      MenuUIBase = _MenuUIBaseJs.MenuUIBase;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e6405P/+GFGaa0/qmo/iQAc", "BuildTowerUI", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildTowerUI", BuildTowerUI = (_dec = ccclass('BuildTowerUI'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(BuildTowerUI, _ref);

        function BuildTowerUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BuildTowerUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BuildTowerUI)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "towerShowAnimPrefabList", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(BuildTowerUI, [{
          key: "start",
          value: function start() {
            var gameCtl = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            var currentLevelNum = gameCtl.getCurrentLevelNum();
            var currentLevelData = gameCtl.getGameConfig().json['Level_' + currentLevelNum];
            var activedTowerIndexList = currentLevelData.ActivedTower;
            var length = activedTowerIndexList.length;

            for (var i = 0; i < length; i++) {
              var node = instantiate(this.towerShowAnimPrefabList[activedTowerIndexList[i]]);
              node.name = "tower_" + activedTowerIndexList[i];
              node.addComponent(ButtonComponent);
              node.on("click", this.onButtonClick.bind(this));
              node.parent = this.node;
              var scale = 76 / node.width;
              node.scale = v3(scale, scale, 1);
              var v = v2(0, 1);
              v = v.rotate(Math.PI * 2 / length * i).normalize();
              var pos = v.multiplyScalar(100);
              node.setPosition(v3(pos.x, pos.y, 0));
            }

            console.log("build tower ui");

            _get(_getPrototypeOf(BuildTowerUI.prototype), "start", this).call(this);

            this.node.getChildByName("BuildTowerBgNode").on("click", this.onButtonClick.bind(this)); // let children = this.node.children;
            // for (let i = 0; i < children.length; i++) {
            //     let node = children[i];
            //     node.on('click', this.onButtonClick.bind(this));
            // }
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            var nodeName = event.node.name;

            if (nodeName === 'BuildTowerBgNode') {
              this.state.setState("close-ui");
            } else {
              var index = nodeName.substring(nodeName.length - 1, nodeName.length);
              console.log("index", index);
              this.state.setState('close-ui');
              find("GameController").emit("build-one-tower", index, this.targetNode);
            }
          }
        }]);

        return BuildTowerUI;
      }(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
        error: Error()
      }), MenuUIBase) : MenuUIBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "towerShowAnimPrefabList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQnV0dG9uQ29tcG9uZW50IiwidjMiLCJmaW5kIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ2MiIsIk1lbnVVSUJhc2UiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1aWxkVG93ZXJVSSIsInR5cGUiLCJnYW1lQ3RsIiwiZ2V0Q29tcG9uZW50IiwiY3VycmVudExldmVsTnVtIiwiZ2V0Q3VycmVudExldmVsTnVtIiwiY3VycmVudExldmVsRGF0YSIsImdldEdhbWVDb25maWciLCJqc29uIiwiYWN0aXZlZFRvd2VySW5kZXhMaXN0IiwiQWN0aXZlZFRvd2VyIiwibGVuZ3RoIiwiaSIsIm5vZGUiLCJ0b3dlclNob3dBbmltUHJlZmFiTGlzdCIsIm5hbWUiLCJhZGRDb21wb25lbnQiLCJvbiIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwicGFyZW50Iiwic2NhbGUiLCJ3aWR0aCIsInYiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJub3JtYWxpemUiLCJwb3MiLCJtdWx0aXBseVNjYWxhciIsInNldFBvc2l0aW9uIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hpbGRCeU5hbWUiLCJldmVudCIsImN1c3RvbURhdGEiLCJub2RlTmFtZSIsInN0YXRlIiwic2V0U3RhdGUiLCJpbmRleCIsInN1YnN0cmluZyIsImVtaXQiLCJ0YXJnZXROb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLGUsT0FBQUEsZTtBQUE4QkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxN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QUZELE1BRU87QUFDSCxrQkFBSUMsS0FBSyxHQUFHSCxRQUFRLENBQUNJLFNBQVQsQ0FBbUJKLFFBQVEsQ0FBQzNCLE1BQVQsR0FBa0IsQ0FBckMsRUFBd0MyQixRQUFRLENBQUMzQixNQUFqRCxDQUFaO0FBQ0FzQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCTyxLQUFyQjtBQUNBLG1CQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0IsVUFBcEI7QUFDQWhELGNBQUFBLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCbUQsSUFBdkIsQ0FBNEIsaUJBQTVCLEVBQStDRixLQUEvQyxFQUFzRCxLQUFLRyxVQUEzRDtBQUNIO0FBRUo7Ozs7Ozs7Ozs7O2lCQXpDMEMsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQnV0dG9uQ29tcG9uZW50LCBUd2VlbiwgVmVjMywgdjMsIGZpbmQsIFByZWZhYiwgaW5zdGFudGlhdGUsIHYyIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnQgeyBNZW51VUlCYXNlIH0gZnJvbSAnLi9NZW51VUlCYXNlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuQGNjY2xhc3MoJ0J1aWxkVG93ZXJVSScpXHJcbmV4cG9ydCBjbGFzcyBCdWlsZFRvd2VyVUkgZXh0ZW5kcyBNZW51VUlCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlclNob3dBbmltUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBnYW1lQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbE51bSA9IGdhbWVDdGwuZ2V0Q3VycmVudExldmVsTnVtKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBnYW1lQ3RsLmdldEdhbWVDb25maWcoKS5qc29uWydMZXZlbF8nICsgY3VycmVudExldmVsTnVtXTtcclxuICAgICAgICBsZXQgYWN0aXZlZFRvd2VySW5kZXhMaXN0OiBudW1iZXJbXSA9IGN1cnJlbnRMZXZlbERhdGEuQWN0aXZlZFRvd2VyO1xyXG4gICAgICAgIGxldCBsZW5ndGggPSBhY3RpdmVkVG93ZXJJbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2VyU2hvd0FuaW1QcmVmYWJMaXN0W2FjdGl2ZWRUb3dlckluZGV4TGlzdFtpXV0pO1xyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcInRvd2VyX1wiICsgYWN0aXZlZFRvd2VySW5kZXhMaXN0W2ldO1xyXG4gICAgICAgICAgICBub2RlLmFkZENvbXBvbmVudChCdXR0b25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gNzYgLyBub2RlLndpZHRoO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gdjMoc2NhbGUsIHNjYWxlLCAxKTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2MigwLCAxKTtcclxuICAgICAgICAgICAgdiA9IHYucm90YXRlKE1hdGguUEkgKiAyIC8gbGVuZ3RoICogaSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB2Lm11bHRpcGx5U2NhbGFyKDEwMCk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odjMocG9zLngsIHBvcy55LCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnVpbGQgdG93ZXIgdWlcIik7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdWlsZFRvd2VyQmdOb2RlXCIpLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIGxldCBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2hpbGRyZW5baV07XHJcblxyXG4gICAgICAgIC8vICAgICBub2RlLm9uKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBsZXQgbm9kZU5hbWUgPSBldmVudC5ub2RlLm5hbWU7XHJcbiAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnQnVpbGRUb3dlckJnTm9kZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vZGVOYW1lLnN1YnN0cmluZyhub2RlTmFtZS5sZW5ndGggLSAxLCBub2RlTmFtZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnY2xvc2UtdWknKTtcclxuICAgICAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJidWlsZC1vbmUtdG93ZXJcIiwgaW5kZXgsIHRoaXMudGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=