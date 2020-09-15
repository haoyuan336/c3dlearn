System.register(["cc", "code-quality:cr", "./MenuUIBase.js", "../../GameController.js", "./BuildTowerUITowerIcon.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, ButtonComponent, v3, find, Prefab, instantiate, v2, MenuUIBase, GameController, BuildTowerUITowerIcon, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BuildTowerUI;

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

          _this.gameController = void 0;
          return _this;
        }

        _createClass(BuildTowerUI, [{
          key: "start",
          value: function start() {
            var gameCtl = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            this.gameController = gameCtl;
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
              var pos = v.multiplyScalar(60);
              node.setPosition(v3(pos.x, pos.y, 0));
            }

            console.log("build tower ui"); // super.start();

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
              var towerIconCom = event.node.getComponent(_crd && BuildTowerUITowerIcon === void 0 ? (_reportPossibleCrUseOfBuildTowerUITowerIcon({
                error: Error()
              }), BuildTowerUITowerIcon) : BuildTowerUITowerIcon);

              if (towerIconCom) {
                var towerType = towerIconCom.getTowerType();
                var buildCost = towerIconCom.getCurrentBuildCost();
                var currentGoldCount = this.gameController.playerData.getCurrentGoldCount();
                console.log("current gold count", currentGoldCount);

                if (buildCost <= currentGoldCount) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQnV0dG9uQ29tcG9uZW50IiwidjMiLCJmaW5kIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ2MiIsIk1lbnVVSUJhc2UiLCJHYW1lQ29udHJvbGxlciIsIkJ1aWxkVG93ZXJVSVRvd2VySWNvbiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1aWxkVG93ZXJVSSIsInR5cGUiLCJnYW1lQ29udHJvbGxlciIsImdhbWVDdGwiLCJnZXRDb21wb25lbnQiLCJjdXJyZW50TGV2ZWxOdW0iLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJjdXJyZW50TGV2ZWxEYXRhIiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJhY3RpdmVkVG93ZXJJbmRleExpc3QiLCJBY3RpdmVkVG93ZXIiLCJsZW5ndGgiLCJpIiwibm9kZSIsImJ1aWxkVG93ZXJVSVRvd2VySWNvbiIsIm5hbWUiLCJhZGRDb21wb25lbnQiLCJvbiIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwicGFyZW50IiwiaW5pdCIsInNjYWxlIiwid2lkdGgiLCJ2Iiwicm90YXRlIiwiTWF0aCIsIlBJIiwibm9ybWFsaXplIiwicG9zIiwibXVsdGlwbHlTY2FsYXIiLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiY29uc29sZSIsImxvZyIsImdldENoaWxkQnlOYW1lIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwibm9kZU5hbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwidG93ZXJJY29uQ29tIiwidG93ZXJUeXBlIiwiZ2V0VG93ZXJUeXBlIiwiYnVpbGRDb3N0IiwiZ2V0Q3VycmVudEJ1aWxkQ29zdCIsImN1cnJlbnRHb2xkQ291bnQiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudEdvbGRDb3VudCIsImFkZEdvbGRDb3VudCIsImVtaXQiLCJ0YXJn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RUFBMEQsS0FBS1MsVUFBL0Q7QUFDSCxpQkFMRCxNQUtLO0FBQ0Q5RCxrQkFBQUEsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlNkQsSUFBZixDQUFvQixpQkFBcEI7QUFDSDtBQUNKLGVBZkUsQ0FnQkg7QUFDQTtBQUNBO0FBQ0E7O0FBQ0g7QUFFSjs7Ozs7Ozs7Ozs7aUJBakUwQyxFOzs7Ozs7O2lCQUdKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEJ1dHRvbkNvbXBvbmVudCwgVHdlZW4sIFZlYzMsIHYzLCBmaW5kLCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MiB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudVVJQmFzZSdcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJ1aWxkVG93ZXJVSVRvd2VySWNvbiB9IGZyb20gJy4vQnVpbGRUb3dlclVJVG93ZXJJY29uJztcclxuQGNjY2xhc3MoJ0J1aWxkVG93ZXJVSScpXHJcbmV4cG9ydCBjbGFzcyBCdWlsZFRvd2VyVUkgZXh0ZW5kcyBNZW51VUlCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlclNob3dBbmltUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWlsZFRvd2VyVUlUb3dlckljb246IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcjtcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBsZXQgZ2FtZUN0bCA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWxOdW0gPSBnYW1lQ3RsLmdldEN1cnJlbnRMZXZlbE51bSgpO1xyXG4gICAgICAgIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZ2FtZUN0bC5nZXRHYW1lQ29uZmlnKCkuanNvblsnTGV2ZWxfJyArIGN1cnJlbnRMZXZlbE51bV07XHJcbiAgICAgICAgbGV0IGFjdGl2ZWRUb3dlckluZGV4TGlzdDogbnVtYmVyW10gPSBjdXJyZW50TGV2ZWxEYXRhLkFjdGl2ZWRUb3dlcjtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gYWN0aXZlZFRvd2VySW5kZXhMaXN0Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy50b3dlclNob3dBbmltUHJlZmFiTGlzdFthY3RpdmVkVG93ZXJJbmRleExpc3RbaV1dKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1aWxkVG93ZXJVSVRvd2VySWNvbik7XHJcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwidG93ZXJfXCIgKyBhY3RpdmVkVG93ZXJJbmRleExpc3RbaV07XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIG5vZGUub24oXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChCdWlsZFRvd2VyVUlUb3dlckljb24pLmluaXQoYWN0aXZlZFRvd2VySW5kZXhMaXN0W2ldKTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gNzYgLyBub2RlLndpZHRoO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gdjMoc2NhbGUsIHNjYWxlLCAxKTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2MigwLCAxKTtcclxuICAgICAgICAgICAgdiA9IHYucm90YXRlKE1hdGguUEkgKiAyIC8gbGVuZ3RoICogaSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB2Lm11bHRpcGx5U2NhbGFyKDYwKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidWlsZCB0b3dlciB1aVwiKTtcclxuICAgICAgICAvLyBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1aWxkVG93ZXJCZ05vZGVcIikub24oXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgLy8gICAgIG5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEJ1dHRvbkNvbXBvbmVudCwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIGxldCBub2RlTmFtZSA9IGV2ZW50Lm5vZGUubmFtZTtcclxuICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdCdWlsZFRvd2VyQmdOb2RlJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRvd2VySWNvbkNvbSA9IGV2ZW50Lm5vZGUuZ2V0Q29tcG9uZW50KEJ1aWxkVG93ZXJVSVRvd2VySWNvbik7XHJcbiAgICAgICAgICAgIGlmICh0b3dlckljb25Db20pIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3dlclR5cGUgPSB0b3dlckljb25Db20uZ2V0VG93ZXJUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVpbGRDb3N0ID0gdG93ZXJJY29uQ29tLmdldEN1cnJlbnRCdWlsZENvc3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50R29sZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmdldEN1cnJlbnRHb2xkQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBnb2xkIGNvdW50XCIsIGN1cnJlbnRHb2xkQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1aWxkQ29zdCA8PSBjdXJyZW50R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ph5HluIHmlbDnm67lpJ8g5Y+v5Lul5bu66YCg5aGU5LqGXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZEdvbGRDb3VudChidWlsZENvc3QgKiAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwiYnVpbGQtb25lLXRvd2VyXCIsIHRvd2VyVHlwZSwgdGhpcy50YXJnZXROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXNcIikuZW1pdCgnZ29sZC1ub3QtZW5vdWdoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gbm9kZU5hbWUuc3Vic3RyaW5nKG5vZGVOYW1lLmxlbmd0aCAtIDEsIG5vZGVOYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKCdjbG9zZS11aScpO1xyXG4gICAgICAgICAgICAvLyBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZW1pdChcImJ1aWxkLW9uZS10b3dlclwiLCBpbmRleCwgdGhpcy50YXJnZXROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==