System.register(["cc", "code-quality:cr", "./MenuUIBase.js", "../../GameController.js", "./BuildTowerUITowerIcon.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, ButtonComponent, v3, find, Prefab, instantiate, v2, MenuUIBase, GameController, BuildTowerUITowerIcon, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BuildTowerUI;

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

  function _reportPossibleCrUseOfBuildTowerUITowerIcon(extras) {
    _reporterNs.report("BuildTowerUITowerIcon", "./BuildTowerUITowerIcon", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
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
    }, function (_BuildTowerUITowerIconJs) {
      BuildTowerUITowerIcon = _BuildTowerUITowerIconJs.BuildTowerUITowerIcon;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e6405P/+GFGaa0/qmo/iQAc", "BuildTowerUI", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildTowerUI", BuildTowerUI = (_dec = ccclass('BuildTowerUI'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
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

          _initializerDefineProperty(_this, "buildTowerUITowerIcon", _descriptor2, _assertThisInitialized(_this));

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
              // let node = instantiate(this.towerShowAnimPrefabList[activedTowerIndexList[i]]);
              var node = instantiate(this.buildTowerUITowerIcon);
              node.name = "tower_" + activedTowerIndexList[i];
              node.addComponent(ButtonComponent);
              node.on("click", this.onButtonClick.bind(this));
              node.parent = this.node;
              node.getComponent(_crd && BuildTowerUITowerIcon === void 0 ? (_reportPossibleCrUseOfBuildTowerUITowerIcon({
                error: Error()
              }), BuildTowerUITowerIcon) : BuildTowerUITowerIcon).init(activedTowerIndexList[i]);
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildTowerUITowerIcon", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQnV0dG9uQ29tcG9uZW50IiwidjMiLCJmaW5kIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ2MiIsIk1lbnVVSUJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJ1aWxkVG93ZXJVSVRvd2VySWNvbiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1aWxkVG93ZXJVSSIsInR5cGUiLCJnYW1lQ3RsIiwiZ2V0Q29tcG9uZW50IiwiY3VycmVudExldmVsTnVtIiwiZ2V0Q3VycmVudExldmVsTnVtIiwiY3VycmVudExldmVsRGF0YSIsImdldEdhbWVDb25maWciLCJqc29uIiwiYWN0aXZlZFRvd2VySW5kZXhMaXN0IiwiQWN0aXZlZFRvd2VyIiwibGVuZ3RoIiwiaSIsIm5vZGUiLCJidWlsZFRvd2VyVUlUb3dlckljb24iLCJuYW1lIiwiYWRkQ29tcG9uZW50Iiwib24iLCJvbkJ1dHRvbkNsaWNrIiwiYmluZCIsInBhcmVudCIsImluaXQiLCJzY2FsZSIsIndpZHRoIiwidiIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsIm5vcm1hbGl6ZSIsInBvcyIsIm11bHRpcGx5U2NhbGFyIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGlsZEJ5TmFtZSIsImV2ZW50IiwiY3VzdG9tRGF0YSIsIm5vZGVOYW1lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwic3Vic3RyaW5nIiwiZW1pdCIsInRhcmdldE5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsZSxPQUFBQSxlO0FBQThCQyxNQUFBQSxFLE9B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O0FBQ0g7Ozt3Q0FDYWtCLEssRUFBd0JDLFUsRUFBWTtBQUM5QyxnQkFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUN4QixJQUFOLENBQVdFLElBQTFCOztBQUNBLGdCQUFJd0IsUUFBUSxLQUFLLGtCQUFqQixFQUFxQztBQUNqQyxtQkFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CLFVBQXBCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsa0JBQUlDLEtBQUssR0FBR0gsUUFBUSxDQUFDSSxTQUFULENBQW1CSixRQUFRLENBQUM1QixNQUFULEdBQWtCLENBQXJDLEVBQXdDNEIsUUFBUSxDQUFDNUIsTUFBakQsQ0FBWjtBQUNBdUIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQk8sS0FBckI7QUFDQSxtQkFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CLFVBQXBCO0FBQ0FsRCxjQUFBQSxJQUFJLENBQUMsZ0JBQUQsQ0FBSixDQUF1QnFELElBQXZCLENBQTRCLGlCQUE1QixFQUErQ0YsS0FBL0MsRUFBc0QsS0FBS0csVUFBM0Q7QUFDSDtBQUVKOzs7Ozs7Ozs7OztpQkE5QzBDLEU7Ozs7Ozs7aUJBR0wsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQnV0dG9uQ29tcG9uZW50LCBUd2VlbiwgVmVjMywgdjMsIGZpbmQsIFByZWZhYiwgaW5zdGFudGlhdGUsIHYyIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnQgeyBNZW51VUlCYXNlIH0gZnJvbSAnLi9NZW51VUlCYXNlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQnVpbGRUb3dlclVJVG93ZXJJY29uIH0gZnJvbSAnLi9CdWlsZFRvd2VyVUlUb3dlckljb24nO1xyXG5AY2NjbGFzcygnQnVpbGRUb3dlclVJJylcclxuZXhwb3J0IGNsYXNzIEJ1aWxkVG93ZXJVSSBleHRlbmRzIE1lbnVVSUJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2VyU2hvd0FuaW1QcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBidWlsZFRvd2VyVUlUb3dlckljb246UHJlZmFiID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBnYW1lQ3RsID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbE51bSA9IGdhbWVDdGwuZ2V0Q3VycmVudExldmVsTnVtKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBnYW1lQ3RsLmdldEdhbWVDb25maWcoKS5qc29uWydMZXZlbF8nICsgY3VycmVudExldmVsTnVtXTtcclxuICAgICAgICBsZXQgYWN0aXZlZFRvd2VySW5kZXhMaXN0OiBudW1iZXJbXSA9IGN1cnJlbnRMZXZlbERhdGEuQWN0aXZlZFRvd2VyO1xyXG4gICAgICAgIGxldCBsZW5ndGggPSBhY3RpdmVkVG93ZXJJbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2VyU2hvd0FuaW1QcmVmYWJMaXN0W2FjdGl2ZWRUb3dlckluZGV4TGlzdFtpXV0pO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclVJVG93ZXJJY29uKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJ0b3dlcl9cIiArIGFjdGl2ZWRUb3dlckluZGV4TGlzdFtpXTtcclxuICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSVRvd2VySWNvbikuaW5pdChhY3RpdmVkVG93ZXJJbmRleExpc3RbaV0pO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA3NiAvIG5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSB2MyhzY2FsZSwgc2NhbGUsIDEpO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHYyKDAsIDEpO1xyXG4gICAgICAgICAgICB2ID0gdi5yb3RhdGUoTWF0aC5QSSAqIDIgLyBsZW5ndGggKiBpKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHYubXVsdGlwbHlTY2FsYXIoMTAwKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidWlsZCB0b3dlciB1aVwiKTtcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1aWxkVG93ZXJCZ05vZGVcIikub24oXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgLy8gICAgIG5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGxldCBub2RlTmFtZSA9IGV2ZW50Lm5vZGUubmFtZTtcclxuICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdCdWlsZFRvd2VyQmdOb2RlJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9kZU5hbWUuc3Vic3RyaW5nKG5vZGVOYW1lLmxlbmd0aCAtIDEsIG5vZGVOYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdjbG9zZS11aScpO1xyXG4gICAgICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcImJ1aWxkLW9uZS10b3dlclwiLCBpbmRleCwgdGhpcy50YXJnZXROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==