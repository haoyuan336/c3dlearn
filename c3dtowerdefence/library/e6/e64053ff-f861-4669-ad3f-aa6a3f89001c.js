System.register(["cc", "code-quality:cr", "./MenuUIBase.js", "./BuildTowerUITowerIcon.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, ButtonComponent, v3, find, Prefab, instantiate, v2, isValid, MenuUIBase, BuildTowerUITowerIcon, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BuildTowerUI;

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

  function _reportPossibleCrUseOfBuildTowerUITowerIcon(extras) {
    _reporterNs.report("BuildTowerUITowerIcon", "./BuildTowerUITowerIcon", _context.meta, extras);
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
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MenuUIBaseJs) {
      MenuUIBase = _MenuUIBaseJs.MenuUIBase;
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

          _initializerDefineProperty(_this, "buildTowerUITowerIcon", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(BuildTowerUI, [{
          key: "init",
          // public gameController: GameController;
          value: function init(gameConfig, gameCtl) {
            this.gameController = gameCtl; // let currentLevelNum = gameCtl.getCurrentLevelNum();
            // let currentLevelData = gameCtl.getGameConfig().json['Level_' + currentLevelNum];
            // let activedTowerIndexList: number[] = currentLevelData.ActivedTower;

            var activedTowerIndexList = this.gameController.playerData.getCurrentActiveTowerList();
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
              }), BuildTowerUITowerIcon) : BuildTowerUITowerIcon).init(activedTowerIndexList[i], gameCtl, gameConfig);
              var scale = 76 / node.width;
              node.scale = v3(scale, scale, 1);
              var v = v2(0, 1);
              v = v.rotate(Math.PI * 2 / length * i).normalize();
              var pos = v.multiplyScalar(60);
              node.setPosition(v3(pos.x, pos.y, 0));
            }

            console.log("build tower ui"); // super.start();

            this.node.getChildByName("BuildTowerBgNode").on("click", this.onButtonClick.bind(this));

            _get(_getPrototypeOf(BuildTowerUI.prototype), "init", this).call(this, gameConfig, gameCtl);
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            if (customData === 'close') {
              this.state.setState("close-ui");
              return;
            }

            var nodeName = event.node.name;

            if (nodeName === 'BuildTowerBgNode') {
              this.state.setState("close-ui");
            } else {
              var towerIconCom = event.node.getComponent(_crd && BuildTowerUITowerIcon === void 0 ? (_reportPossibleCrUseOfBuildTowerUITowerIcon({
                error: Error()
              }), BuildTowerUITowerIcon) : BuildTowerUITowerIcon);

              if (towerIconCom) {
                var towerType = towerIconCom.getTowerType();
                var buildCost = towerIconCom.getCurrentBuildCost();
                var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();
                console.log("current gold count", currentGoldCount);

                if (buildCost <= currentGoldCount && isValid(this.targetNode)) {
                  //金币数目够 可以建造塔了
                  this.gameController.playerData.addGoldCount(buildCost * -1);
                  this.state.setState("close-ui");
                  find("GameController").emit("build-one-tower", towerType, this.targetNode);
                } else {
                  find("Canvas").emit('gold-not-enough');
                }
              } // let index = nodeName.substring(nodeName.length - 1, nodeName.length);
              // console.log("index", index);
              // this.state.setState('close-ui');
              // find("GameController").emit("build-one-tower", index, this.targetNode);

            }
          }
        }]);

        return BuildTowerUI;
      }(_crd && MenuUIBase === void 0 ? (_reportPossibleCrUseOfMenuUIBase({
        error: Error()
      }), MenuUIBase) : MenuUIBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildTowerUITowerIcon", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQnV0dG9uQ29tcG9uZW50IiwidjMiLCJmaW5kIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ2MiIsImlzVmFsaWQiLCJNZW51VUlCYXNlIiwiQnVpbGRUb3dlclVJVG93ZXJJY29uIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQnVpbGRUb3dlclVJIiwidHlwZSIsImdhbWVDb25maWciLCJnYW1lQ3RsIiwiZ2FtZUNvbnRyb2xsZXIiLCJhY3RpdmVkVG93ZXJJbmRleExpc3QiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudEFjdGl2ZVRvd2VyTGlzdCIsImxlbmd0aCIsImkiLCJub2RlIiwiYnVpbGRUb3dlclVJVG93ZXJJY29uIiwibmFtZSIsImFkZENvbXBvbmVudCIsIm9uIiwib25CdXR0b25DbGljayIsImJpbmQiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJpbml0Iiwic2NhbGUiLCJ3aWR0aCIsInYiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJub3JtYWxpemUiLCJwb3MiLCJtdWx0aXBseVNjYWxhciIsInNldFBvc2l0aW9uIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hpbGRCeU5hbWUiLCJldmVudCIsImN1c3RvbURhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwibm9kZU5hbWUiLCJ0b3dlckljb25Db20iLCJ0b3dlclR5cGUiLCJnZXRUb3dlclR5cGUiLCJidWlsZENvc3QiLCJnZXRDdXJyZW50QnVpbGRDb3N0IiwiY3VycmVudEdvbGRDb3VudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJ0YXJnZXROb2RlIiwiYWRkR29sZENvdW50IiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNIO0FBQ0osZUFmRSxDQWdCSDtBQUNBO0FBQ0E7QUFDQTs7QUFDSDtBQUVKOzs7Ozs7Ozs7OztpQkFqRXNDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEJ1dHRvbkNvbXBvbmVudCwgVHdlZW4sIFZlYzMsIHYzLCBmaW5kLCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MiwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudVVJQmFzZSdcclxuLy8gaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJ1aWxkVG93ZXJVSVRvd2VySWNvbiB9IGZyb20gJy4vQnVpbGRUb3dlclVJVG93ZXJJY29uJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbkBjY2NsYXNzKCdCdWlsZFRvd2VyVUknKVxyXG5leHBvcnQgY2xhc3MgQnVpbGRUb3dlclVJIGV4dGVuZHMgTWVudVVJQmFzZSB7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgdG93ZXJTaG93QW5pbVByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVpbGRUb3dlclVJVG93ZXJJY29uOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XHJcbiAgICBpbml0KGdhbWVDb25maWcsIGdhbWVDdGw6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGdhbWVDdGw7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRMZXZlbE51bSA9IGdhbWVDdGwuZ2V0Q3VycmVudExldmVsTnVtKCk7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBnYW1lQ3RsLmdldEdhbWVDb25maWcoKS5qc29uWydMZXZlbF8nICsgY3VycmVudExldmVsTnVtXTtcclxuICAgICAgICAvLyBsZXQgYWN0aXZlZFRvd2VySW5kZXhMaXN0OiBudW1iZXJbXSA9IGN1cnJlbnRMZXZlbERhdGEuQWN0aXZlZFRvd2VyO1xyXG4gICAgICAgIGxldCBhY3RpdmVkVG93ZXJJbmRleExpc3Q6IG51bWJlcltdID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRBY3RpdmVUb3dlckxpc3QoKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBsZW5ndGggPSBhY3RpdmVkVG93ZXJJbmRleExpc3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2VyU2hvd0FuaW1QcmVmYWJMaXN0W2FjdGl2ZWRUb3dlckluZGV4TGlzdFtpXV0pO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclVJVG93ZXJJY29uKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJ0b3dlcl9cIiArIGFjdGl2ZWRUb3dlckluZGV4TGlzdFtpXTtcclxuICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSVRvd2VySWNvbikuaW5pdChhY3RpdmVkVG93ZXJJbmRleExpc3RbaV0sIGdhbWVDdGwsIGdhbWVDb25maWcpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA3NiAvIG5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSB2MyhzY2FsZSwgc2NhbGUsIDEpO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHYyKDAsIDEpO1xyXG4gICAgICAgICAgICB2ID0gdi5yb3RhdGUoTWF0aC5QSSAqIDIgLyBsZW5ndGggKiBpKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHYubXVsdGlwbHlTY2FsYXIoNjApO1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHYzKHBvcy54LCBwb3MueSwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1aWxkIHRvd2VyIHVpXCIpO1xyXG4gICAgICAgIC8vIHN1cGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnVpbGRUb3dlckJnTm9kZVwiKS5vbihcImNsaWNrXCIsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcsIGdhbWVDdGwpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBCdXR0b25Db21wb25lbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0YSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlTmFtZSA9IGV2ZW50Lm5vZGUubmFtZTtcclxuICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdCdWlsZFRvd2VyQmdOb2RlJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRvd2VySWNvbkNvbSA9IGV2ZW50Lm5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSVRvd2VySWNvbik7XHJcbiAgICAgICAgICAgIGlmICh0b3dlckljb25Db20pIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3dlclR5cGUgPSB0b3dlckljb25Db20uZ2V0VG93ZXJUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVpbGRDb3N0ID0gdG93ZXJJY29uQ29tLmdldEN1cnJlbnRCdWlsZENvc3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50R29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBnb2xkIGNvdW50XCIsIGN1cnJlbnRHb2xkQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1aWxkQ29zdCA8PSBjdXJyZW50R29sZENvdW50ICYmIGlzVmFsaWQodGhpcy50YXJnZXROb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6YeR5biB5pWw55uu5aSfIOWPr+S7peW7uumAoOWhlOS6hlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5hZGRHb2xkQ291bnQoYnVpbGRDb3N0ICogLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJjbG9zZS11aVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcImJ1aWxkLW9uZS10b3dlclwiLCB0b3dlclR5cGUsIHRoaXMudGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXNcIikuZW1pdCgnZ29sZC1ub3QtZW5vdWdoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gbm9kZU5hbWUuc3Vic3RyaW5nKG5vZGVOYW1lLmxlbmd0aCAtIDEsIG5vZGVOYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKCdjbG9zZS11aScpO1xyXG4gICAgICAgICAgICAvLyBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcImJ1aWxkLW9uZS10b3dlclwiLCBpbmRleCwgdGhpcy50YXJnZXROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==