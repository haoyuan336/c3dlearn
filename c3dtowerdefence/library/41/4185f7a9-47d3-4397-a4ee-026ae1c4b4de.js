System.register(["cc", "code-quality:cr", "./GameController.js", "./UI/WeaponUpdateCellPrefab.js", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, v3, view, Tween, SpriteComponent, instantiate, Prefab, GameController, WeaponUpdateCellPrefab, State, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, WeaponInfoCtl;

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
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponUpdateCellPrefab(extras) {
    _reporterNs.report("WeaponUpdateCellPrefab", "./UI/WeaponUpdateCellPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      v3 = _cc.v3;
      view = _cc.view;
      Tween = _cc.Tween;
      SpriteComponent = _cc.SpriteComponent;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_UIWeaponUpdateCellPrefabJs) {
      WeaponUpdateCellPrefab = _UIWeaponUpdateCellPrefabJs.WeaponUpdateCellPrefab;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4185fepR9NDl6TuAmrhxLTe", "WeaponInfoCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WeaponInfoCtl", WeaponInfoCtl = (_dec = ccclass('WeaponInfoCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: _crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
          error: Error()
        }), GameController) : GameController
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WeaponInfoCtl, _Component);

        function WeaponInfoCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WeaponInfoCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WeaponInfoCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "blockBgNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponInfoNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponInfoButton", _descriptor3, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();

          _initializerDefineProperty(_this, "gameController", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updateWeaponInfoCellPrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weaponCellParentNode", _descriptor6, _assertThisInitialized(_this));

          _this.weaponIndoCellNodeList = [];
          return _this;
        }

        _createClass(WeaponInfoCtl, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);
            this.state.setState("close");
            this.state.addState("play-open-anim", function () {
              //播放打开武器信息的UI
              console.log("播放武器信息ui打开的动画");

              _this2.hideButton().then(function () {
                return _this2.showWeaponInfoNode();
              }).then(function () {
                _this2.showBlockBgNode();
              }).then(function () {
                _this2.state.setState('open');
              });
            });
            this.state.addState("play-close-anim", function () {
              _this2.hideBlockBgNode().then(function () {
                return _this2.hideWeaponInfoNode();
              }).then(function () {
                return _this2.showWeaponInfoButtonn();
              }).then(function () {
                _this2.state.setState("close");
              });
            });
            this.node.on("close-weapon-info-layer", function () {
              //关闭武器信息页面
              if (_this2.state.getState() === 'open') {
                _this2.state.setState("play-close-anim");
              }
            });
            this.node.on("refer-choose-rate-cost", function (chooseRate) {
              console.log("刷新当前选择的倍数", chooseRate);
              console.log("weapon indo cell node list", _this2.weaponIndoCellNodeList);

              for (var i = 0; i < _this2.weaponIndoCellNodeList.length; i++) {
                var node = _this2.weaponIndoCellNodeList[i];
                node.getComponent(_crd && WeaponUpdateCellPrefab === void 0 ? (_reportPossibleCrUseOfWeaponUpdateCellPrefab({
                  error: Error()
                }), WeaponUpdateCellPrefab) : WeaponUpdateCellPrefab).updateChooseRate(chooseRate);
              }
            });
            this.initWeaponData(); //
          }
        }, {
          key: "initWeaponData",
          value: function initWeaponData() {
            //初始化当前武器的相关信息
            var gameController = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            var gameConfig = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).getGameConfig().json;
            var towerLevelData = this.gameController.playerData.getCurrentTowersLocalLevelData();

            for (var i = 0; i < towerLevelData.length; i++) {
              var data = towerLevelData[i];
              var node = instantiate(this.updateWeaponInfoCellPrefab);
              node.parent = this.weaponCellParentNode;
              node.getComponent(_crd && WeaponUpdateCellPrefab === void 0 ? (_reportPossibleCrUseOfWeaponUpdateCellPrefab({
                error: Error()
              }), WeaponUpdateCellPrefab) : WeaponUpdateCellPrefab).setData(data, gameController, gameConfig);
              node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
              this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5;
              this.weaponIndoCellNodeList.push(node);
            }
          }
        }, {
          key: "showWeaponInfoButtonn",
          value: function showWeaponInfoButtonn() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var v = view.getVisibleSize().width;
              var tw = new Tween(_this3.weaponInfoButton);
              tw.to(0.1, {
                position: v3(v * 0.5 - 100, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideWeaponInfoNode",
          value: function hideWeaponInfoNode() {
            var _this4 = this;

            //隐藏武器信息节点
            return new Promise(function (resolve, reject) {
              var tw = new Tween(_this4.weaponInfoNode);
              tw.to(0.2, {
                position: v3(_this4.weaponInfoNode.width * 0.5, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideBlockBgNode",
          value: function hideBlockBgNode() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              resolve();
              _this5.blockBgNode.active = false;
            });
          }
        }, {
          key: "showWeaponInfoNode",
          value: function showWeaponInfoNode() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              //
              // for (let i = 0 ; i < this.weaponIndoCellNodeList.length ; i ++){
              //     let node = this.weaponIndoCellNodeList[i];
              //     node.getComponent(WeaponUpdateCellPrefab).referCurrentDamage();
              // }
              var tw = new Tween(_this6.weaponInfoNode);
              tw.to(0.2, {
                position: v3(0, 0, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showBlockBgNode",
          value: function showBlockBgNode() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.blockBgNode.active = true;
              var tw = new Tween(_this7.blockBgNode.getComponent(SpriteComponent)); // tw.to(0.2, {color: new Color(0,0,0,150)});

              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "hideButton",
          value: function hideButton() {
            var _this8 = this;

            var v = view.getVisibleSize().width;
            return new Promise(function (resolve, reject) {
              var buttonTw = new Tween(_this8.weaponInfoButton);
              buttonTw.to(0.1, {
                position: v3(v * 0.5 + 100, 0, 0)
              });
              buttonTw.call(function () {
                resolve();
              });
              buttonTw.start();
            });
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            switch (customData) {
              case 'show-weapon-info':
                console.log("武器信息按钮");

                if (this.state.getState() === 'close') {
                  //关闭状态
                  this.state.setState("play-open-anim");
                }

                break;

              case 'bg-node-click':
                console.log("背景节点点击 ");

                if (this.state.getState() === 'open') {
                  this.state.setState("play-close-anim");
                }

                break;

              default:
                break;
            }
          }
        }]);

        return WeaponInfoCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockBgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "weaponInfoNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weaponInfoButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updateWeaponInfoCellPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "weaponCellParentNode", [_dec7], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9XZWFwb25JbmZvQ3RsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwidjMiLCJ2aWV3IiwiVHdlZW4iLCJTcHJpdGVDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsIlByZWZhYiIsIkdhbWVDb250cm9sbGVyIiwiV2VhcG9uVXBkYXRlQ2VsbFByZWZhYiIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiV2VhcG9uSW5mb0N0bCIsInR5cGUiLCJzdGF0ZSIsIndlYXBvbkluZG9DZWxsTm9kZUxpc3QiLCJ3ZWFwb25JbmZvTm9kZSIsInBvc2l0aW9uIiwid2lkdGgiLCJzZXRTdGF0ZSIsImFkZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhpZGVCdXR0b24iLCJ0aGVuIiwic2hvd1dlYXBvbkluZm9Ob2RlIiwic2hvd0Jsb2NrQmdOb2RlIiwiaGlkZUJsb2NrQmdOb2RlIiwiaGlkZVdlYXBvbkluZm9Ob2RlIiwic2hvd1dlYXBvbkluZm9CdXR0b25uIiwibm9kZSIsIm9uIiwiZ2V0U3RhdGUiLCJjaG9vc2VSYXRlIiwiaSIsImxlbmd0aCIsImdldENvbXBvbmVudCIsInVwZGF0ZUNob29zZVJhdGUiLCJpbml0V2VhcG9uRGF0YSIsImdhbWVDb250cm9sbGVyIiwiZ2FtZUNvbmZpZyIsImdldEdhbWVDb25maWciLCJqc29uIiwidG93ZXJMZXZlbERhdGEiLCJwbGF5ZXJEYXRhIiwiZ2V0Q3VycmVudFRvd2Vyc0xvY2FsTGV2ZWxEYXRhIiwiZGF0YSIsInVwZGF0ZVdlYXBvbkluZm9DZWxsUHJlZmFiIiwicGFyZW50Iiwid2VhcG9uQ2VsbFBhcmVudE5vZGUiLCJzZXREYXRhIiwiaGVpZ2h0IiwieSIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInYiLCJnZXRWaXNpYmxlU2l6ZSIsInR3Iiwid2VhcG9uSW5mb0J1dHRvbiIsInRvIiwiY2FsbCIsInN0YXJ0IiwiYmxvY2tCZ05vZGUiLCJhY3RpdmUiLCJidXR0b25UdyIsImV2ZW50IiwiY3VzdG9tRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGUsT0FBQUEsZTtBQUF3QkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLE0sT0FBQUEsTTs7OztBQUNuRkMsTUFBQUEsYyxxQkFBQUEsYzs7QUFDQUMsTUFBQUEsc0IsK0JBQUFBLHNCOztBQUNBQyxNQUFBQSxLLGdCQUFBQSxLOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlosVSxDQUF0QlksTztBQUFTQyxNQUFBQSxRLEdBQWFiLFUsQ0FBYmEsUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFYjtBQUFSLE9BQUQsQyxVQUdSVyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFYjtBQUFSLE9BQUQsQyxVQUdSVyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFYjtBQUFSLE9BQUQsQyxVQUlSVyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFBTixPQUFELEMsVUFHUkYsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVA7QUFBUixPQUFELEMsVUFHUkssUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUkRjLEssR0FBZTtBQUFBO0FBQUEs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Q0FBYyxZQUFNO0FBQ2hCUCxnQkFBQUEsT0FBTztBQUNWLGVBRkQ7QUFHQVcsY0FBQUEsUUFBUSxDQUFDSCxLQUFUO0FBQ0gsYUFUTSxDQUFQO0FBV0g7Ozt3Q0FDYUksSyxFQUFPQyxVLEVBQVk7QUFDN0Isb0JBQVFBLFVBQVI7QUFDSSxtQkFBSyxrQkFBTDtBQUNJL0MsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7O0FBQ0Esb0JBQUksS0FBS1IsS0FBTCxDQUFXa0IsUUFBWCxPQUEwQixPQUE5QixFQUF1QztBQUNuQztBQUNBLHVCQUFLbEIsS0FBTCxDQUFXSyxRQUFYLENBQW9CLGdCQUFwQjtBQUVIOztBQUNEOztBQUNKLG1CQUFLLGVBQUw7QUFDSUUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7O0FBQ0Esb0JBQUksS0FBS1IsS0FBTCxDQUFXa0IsUUFBWCxPQUEwQixNQUE5QixFQUFzQztBQUNsQyx1QkFBS2xCLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixpQkFBcEI7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBaEJSO0FBa0JIOzs7O1FBNUs4QnBCLFM7Ozs7O2lCQUVKLEk7Ozs7Ozs7aUJBR0csSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUlRLEk7Ozs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFHUixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MywgdmlldywgVHdlZW4sIFNwcml0ZUNvbXBvbmVudCwgQ29sb3IsIGluc3RhbnRpYXRlLCBQcmVmYWIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFdlYXBvblVwZGF0ZUNlbGxQcmVmYWIgfSBmcm9tICcuL1VJL1dlYXBvblVwZGF0ZUNlbGxQcmVmYWInO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnV2VhcG9uSW5mb0N0bCcpXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25JbmZvQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBibG9ja0JnTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHdlYXBvbkluZm9Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgd2VhcG9uSW5mb0J1dHRvbjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEdhbWVDb250cm9sbGVyIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB1cGRhdGVXZWFwb25JbmZvQ2VsbFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgd2VhcG9uQ2VsbFBhcmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHdlYXBvbkluZG9DZWxsTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMud2VhcG9uSW5mb05vZGUucG9zaXRpb24gPSB2Myh0aGlzLndlYXBvbkluZm9Ob2RlLndpZHRoICogMC41LCAwLCAwKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktb3Blbi1hbmltXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy/mkq3mlL7miZPlvIDmrablmajkv6Hmga/nmoRVSVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaSreaUvuatpuWZqOS/oeaBr3Vp5omT5byA55qE5Yqo55S7XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVCdXR0b24oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dXZWFwb25JbmZvTm9kZSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Jsb2NrQmdOb2RlKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInBsYXktY2xvc2UtYW5pbVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUJsb2NrQmdOb2RlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oaWRlV2VhcG9uSW5mb05vZGUoKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93V2VhcG9uSW5mb0J1dHRvbm4oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJjbG9zZS13ZWFwb24taW5mby1sYXllclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5YWz6Zet5q2m5Zmo5L+h5oGv6aG16Z2iXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdvcGVuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktY2xvc2UtYW5pbVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlZmVyLWNob29zZS1yYXRlLWNvc3RcIiwgKGNob29zZVJhdGUpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw5b2T5YmN6YCJ5oup55qE5YCN5pWwXCIsIGNob29zZVJhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlYXBvbiBpbmRvIGNlbGwgbm9kZSBsaXN0XCIsIHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdC5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikudXBkYXRlQ2hvb3NlUmF0ZShjaG9vc2VSYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5pbml0V2VhcG9uRGF0YSgpO1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBpbml0V2VhcG9uRGF0YSgpIHtcclxuICAgICAgICAvL+WIneWni+WMluW9k+WJjeatpuWZqOeahOebuOWFs+S/oeaBr1xyXG4gICAgICAgIGxldCBnYW1lQ29udHJvbGxlciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICBsZXQgZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKS5nZXRHYW1lQ29uZmlnKCkuanNvbjtcclxuICAgICAgICBsZXQgdG93ZXJMZXZlbERhdGEgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuZ2V0Q3VycmVudFRvd2Vyc0xvY2FsTGV2ZWxEYXRhKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3dlckxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRvd2VyTGV2ZWxEYXRhW2ldO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudXBkYXRlV2VhcG9uSW5mb0NlbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMud2VhcG9uQ2VsbFBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFdlYXBvblVwZGF0ZUNlbGxQcmVmYWIpLnNldERhdGEoZGF0YSwgZ2FtZUNvbnRyb2xsZXIsIGdhbWVDb25maWcpO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoMCwgLWkgKiAobm9kZS5oZWlnaHQgKyAxMCkgLSAobm9kZS5oZWlnaHQgKyAxMCkgKiAwLjUgLSA1LCAwKTtcclxuICAgICAgICAgICAgdGhpcy53ZWFwb25DZWxsUGFyZW50Tm9kZS5oZWlnaHQgPSBub2RlLnBvc2l0aW9uLnkgKiAtMSArIG5vZGUuaGVpZ2h0ICogMC41O1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbkluZG9DZWxsTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93V2VhcG9uSW5mb0J1dHRvbm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHYgPSB2aWV3LmdldFZpc2libGVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLndlYXBvbkluZm9CdXR0b24pO1xyXG4gICAgICAgICAgICB0dy50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2Myh2ICogMC41IC0gMTAwLCAwLCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVXZWFwb25JbmZvTm9kZSgpIHtcclxuICAgICAgICAvL+makOiXj+atpuWZqOS/oeaBr+iKgueCuVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLndlYXBvbkluZm9Ob2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModGhpcy53ZWFwb25JbmZvTm9kZS53aWR0aCAqIDAuNSwgMCwgMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgaGlkZUJsb2NrQmdOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0JnTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd1dlYXBvbkluZm9Ob2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMud2VhcG9uSW5kb0NlbGxOb2RlTGlzdC5sZW5ndGggOyBpICsrKXtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBub2RlID0gdGhpcy53ZWFwb25JbmRvQ2VsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDb21wb25lbnQoV2VhcG9uVXBkYXRlQ2VsbFByZWZhYikucmVmZXJDdXJyZW50RGFtYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMud2VhcG9uSW5mb05vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCAwLCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dCbG9ja0JnTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrQmdOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmJsb2NrQmdOb2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpKTtcclxuICAgICAgICAgICAgLy8gdHcudG8oMC4yLCB7Y29sb3I6IG5ldyBDb2xvcigwLDAsMCwxNTApfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGlkZUJ1dHRvbigpIHtcclxuICAgICAgICBsZXQgdiA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uVHcgPSBuZXcgVHdlZW4odGhpcy53ZWFwb25JbmZvQnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uVHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModiAqIDAuNSArIDEwMCwgMCwgMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnV0dG9uVHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ1dHRvblR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgc3dpdGNoIChjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Nob3ctd2VhcG9uLWluZm8nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmrablmajkv6Hmga/mjInpkq5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lhbPpl63nirbmgIFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicGxheS1vcGVuLWFuaW1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JnLW5vZGUtY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLog4zmma/oioLngrnngrnlh7sgXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ29wZW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInBsYXktY2xvc2UtYW5pbVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==