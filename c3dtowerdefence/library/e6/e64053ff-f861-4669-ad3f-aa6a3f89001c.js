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

          _this.gameConfig = null;
          _this.towerIconNodeList = [];
          return _this;
        }

        _createClass(BuildTowerUI, [{
          key: "init",
          // public gameController: GameController;
          value: function init(gameConfig, gameCtl) {
            this.gameController = gameCtl; // let currentLevelNum = gameCtl.getCurrentLevelNum();
            // let currentLevelData = gameCtl.getGameConfig().json['Level_' + currentLevelNum];
            // let activedTowerIndexList: number[] = currentLevelData.ActivedTower;

            this.gameConfig = gameConfig;

            _get(_getPrototypeOf(BuildTowerUI.prototype), "init", this).call(this, gameConfig, gameCtl);

            this.referCurrentUI(); // this.node.on("refer-current-ui", this.referCurrentUI.bind(this), this);
          } // this.node

        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onEnable",
          value: function onEnable() {// this.referCurrentUI();
          }
        }, {
          key: "referCurrentUI",
          value: function referCurrentUI() {
            var activedTowerIndexList = this.gameController.playerData.getCurrentActiveTowerList();
            var length = activedTowerIndexList.length;
            var dis = length - this.towerIconNodeList.length;
            console.log("dis", dis);

            if (dis > 0) {
              for (var i = 0; i < dis; i++) {
                var node = instantiate(this.buildTowerUITowerIcon);
                node.addComponent(ButtonComponent);
                node.on("click", this.onButtonClick.bind(this));
                node.parent = this.node;
                this.towerIconNodeList.push(node);
              }
            } else if (dis < 0) {
              for (var _i = 0; _i < Math.abs(dis); _i++) {
                this.towerIconNodeList.pop().destroy();
              }
            }

            for (var _i2 = 0; _i2 < this.towerIconNodeList.length; _i2++) {
              // let node = instantiate(this.towerShowAnimPrefabList[activedTowerIndexList[i]]);
              // let node = instantiate(this.buildTowerUITowerIcon);
              var _node = this.towerIconNodeList[_i2];
              _node.name = "tower_" + activedTowerIndexList[_i2]; // node.addComponent(ButtonComponent);
              // node.on("click", this.onButtonClick.bind(this));
              // node.parent = this.node;

              _node.getComponent(_crd && BuildTowerUITowerIcon === void 0 ? (_reportPossibleCrUseOfBuildTowerUITowerIcon({
                error: Error()
              }), BuildTowerUITowerIcon) : BuildTowerUITowerIcon).init(activedTowerIndexList[_i2], this.gameController, this.gameConfig);

              var scale = 76 / _node.width;
              _node.scale = v3(scale, scale, 1);
              var v = v2(0, 1);
              v = v.rotate(Math.PI * 2 / length * _i2).normalize();
              var pos = v.multiplyScalar(60);

              _node.setPosition(v3(pos.x, pos.y, 0));
            }

            console.log("build tower ui"); // super.start();

            this.node.getChildByName("BuildTowerBgNode").on("click", this.onButtonClick.bind(this));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9NZW51L0J1aWxkVG93ZXJVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQnV0dG9uQ29tcG9uZW50IiwidjMiLCJmaW5kIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ2MiIsImlzVmFsaWQiLCJNZW51VUlCYXNlIiwiQnVpbGRUb3dlclVJVG93ZXJJY29uIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQnVpbGRUb3dlclVJIiwidHlwZSIsImdhbWVDb25maWciLCJ0b3dlckljb25Ob2RlTGlzdCIsImdhbWVDdGwiLCJnYW1lQ29udHJvbGxlciIsInJlZmVyQ3VycmVudFVJIiwiYWN0aXZlZFRvd2VySW5kZXhMaXN0IiwicGxheWVyRGF0YSIsImdldEN1cnJlbnRBY3RpdmVUb3dlckxpc3QiLCJsZW5ndGgiLCJkaXMiLCJjb25zb2xlIiwibG9nIiwiaSIsIm5vZGUiLCJidWlsZFRvd2VyVUlUb3dlckljb24iLCJhZGRDb21wb25lbnQiLCJvbiIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwicGFyZW50IiwicHVzaCIsIk1hdGgiLCJhYnMiLCJwb3AiLCJkZXN0cm95IiwibmFtZSIsImdldENvbXBvbmVudCIsImluaXQiLCJzY2FsZSIsIndpZHRoIiwidiIsInJvdGF0ZSIsIlBJIiwibm9ybWFsaXplIiwicG9zIiwibXVsdGlwbHlTY2FsYXIiLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiZ2V0Q2hpbGRCeU5hbWUiLCJldmVudCIsImN1c3RvbURhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwibm9kZU5hbWUiLCJ0b3dlckljb25Db20iLCJ0b3dlclR5cGUiLCJnZXRUb3dlclR5cGUiLCJidWlsZENvc3QiLCJnZXRDdXJyZW50QnVpbGRDb3N0IiwiY3VycmVudEdvbGRDb3VudCIsImdldEN1cnJlbnRHb2xkQ291bnQiLCJ0YXJnZXROb2RlIiwiYWRk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ZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEJ1dHRvbkNvbXBvbmVudCwgVHdlZW4sIFZlYzMsIHYzLCBmaW5kLCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MiwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgTWVudVVJQmFzZSB9IGZyb20gJy4vTWVudVVJQmFzZSdcclxuLy8gaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJ1aWxkVG93ZXJVSVRvd2VySWNvbiB9IGZyb20gJy4vQnVpbGRUb3dlclVJVG93ZXJJY29uJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbkBjY2NsYXNzKCdCdWlsZFRvd2VyVUknKVxyXG5leHBvcnQgY2xhc3MgQnVpbGRUb3dlclVJIGV4dGVuZHMgTWVudVVJQmFzZSB7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICAvLyBwdWJsaWMgdG93ZXJTaG93QW5pbVByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYnVpbGRUb3dlclVJVG93ZXJJY29uOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB0b3dlckljb25Ob2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICAvLyBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyO1xyXG4gICAgaW5pdChnYW1lQ29uZmlnLCBnYW1lQ3RsOiBHYW1lQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBnYW1lQ3RsO1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50TGV2ZWxOdW0gPSBnYW1lQ3RsLmdldEN1cnJlbnRMZXZlbE51bSgpO1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZ2FtZUN0bC5nZXRHYW1lQ29uZmlnKCkuanNvblsnTGV2ZWxfJyArIGN1cnJlbnRMZXZlbE51bV07XHJcbiAgICAgICAgLy8gbGV0IGFjdGl2ZWRUb3dlckluZGV4TGlzdDogbnVtYmVyW10gPSBjdXJyZW50TGV2ZWxEYXRhLkFjdGl2ZWRUb3dlcjtcclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUN0bCk7XHJcbiAgICAgICAgdGhpcy5yZWZlckN1cnJlbnRVSSgpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInJlZmVyLWN1cnJlbnQtdWlcIiwgdGhpcy5yZWZlckN1cnJlbnRVSS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH1cclxuICAgICAgICAvLyB0aGlzLm5vZGVcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICAvLyB0aGlzLnJlZmVyQ3VycmVudFVJKCk7XHJcbiAgICB9XHJcbiAgICByZWZlckN1cnJlbnRVSSgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlZFRvd2VySW5kZXhMaXN0OiBudW1iZXJbXSA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50QWN0aXZlVG93ZXJMaXN0KCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoID0gYWN0aXZlZFRvd2VySW5kZXhMaXN0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgZGlzID0gbGVuZ3RoIC0gdGhpcy50b3dlckljb25Ob2RlTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNcIiwgZGlzKTtcclxuICAgICAgICBpZiAoZGlzID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclVJVG93ZXJJY29uKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvd2VySWNvbk5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpcyA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkaXMpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG93ZXJJY29uTm9kZUxpc3QucG9wKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG93ZXJJY29uTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRvd2VyU2hvd0FuaW1QcmVmYWJMaXN0W2FjdGl2ZWRUb3dlckluZGV4TGlzdFtpXV0pO1xyXG4gICAgICAgICAgICAvLyBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRUb3dlclVJVG93ZXJJY29uKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnRvd2VySWNvbk5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcInRvd2VyX1wiICsgYWN0aXZlZFRvd2VySW5kZXhMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyBub2RlLmFkZENvbXBvbmVudChCdXR0b25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAvLyBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoQnVpbGRUb3dlclVJVG93ZXJJY29uKS5pbml0KGFjdGl2ZWRUb3dlckluZGV4TGlzdFtpXSwgdGhpcy5nYW1lQ29udHJvbGxlciwgdGhpcy5nYW1lQ29uZmlnKTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gNzYgLyBub2RlLndpZHRoO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gdjMoc2NhbGUsIHNjYWxlLCAxKTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2MigwLCAxKTtcclxuICAgICAgICAgICAgdiA9IHYucm90YXRlKE1hdGguUEkgKiAyIC8gbGVuZ3RoICogaSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB2Lm11bHRpcGx5U2NhbGFyKDYwKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnVpbGQgdG93ZXIgdWlcIik7XHJcbiAgICAgICAgLy8gc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdWlsZFRvd2VyQmdOb2RlXCIpLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25DbGljayhldmVudDogQnV0dG9uQ29tcG9uZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgaWYgKGN1c3RvbURhdGEgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbm9kZU5hbWUgPSBldmVudC5ub2RlLm5hbWU7XHJcbiAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnQnVpbGRUb3dlckJnTm9kZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImNsb3NlLXVpXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0b3dlckljb25Db20gPSBldmVudC5ub2RlLmdldENvbXBvbmVudChCdWlsZFRvd2VyVUlUb3dlckljb24pO1xyXG4gICAgICAgICAgICBpZiAodG93ZXJJY29uQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG93ZXJUeXBlID0gdG93ZXJJY29uQ29tLmdldFRvd2VyVHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1aWxkQ29zdCA9IHRvd2VySWNvbkNvbS5nZXRDdXJyZW50QnVpbGRDb3N0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEdvbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5nZXRDdXJyZW50R29sZENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgZ29sZCBjb3VudFwiLCBjdXJyZW50R29sZENvdW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChidWlsZENvc3QgPD0gY3VycmVudEdvbGRDb3VudCAmJiBpc1ZhbGlkKHRoaXMudGFyZ2V0Tm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+mHkeW4geaVsOebruWknyDlj6/ku6Xlu7rpgKDloZTkuoZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuYWRkR29sZENvdW50KGJ1aWxkQ29zdCAqIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2UtdWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJidWlsZC1vbmUtdG93ZXJcIiwgdG93ZXJUeXBlLCB0aGlzLnRhcmdldE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kKFwiQ2FudmFzXCIpLmVtaXQoJ2dvbGQtbm90LWVub3VnaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IG5vZGVOYW1lLnN1YnN0cmluZyhub2RlTmFtZS5sZW5ndGggLSAxLCBub2RlTmFtZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnY2xvc2UtdWknKTtcclxuICAgICAgICAgICAgLy8gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJidWlsZC1vbmUtdG93ZXJcIiwgaW5kZXgsIHRoaXMudGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=