System.register(["cc", "code-quality:cr", "./GroundMapCtl.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, v2, instantiate, v3, Tween, GroundMapCtl, GameController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TowerBuildBaseCtl;

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

  function _reportPossibleCrUseOfGroundMapCtl(extras) {
    _reporterNs.report("GroundMapCtl", "./GroundMapCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
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
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      v2 = _cc.v2;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Tween = _cc.Tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "09d8fCuijNMwIzg+sejpSkn", "TowerBuildBaseCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBaseCtl", TowerBuildBaseCtl = (_dec = ccclass('TowerBuildBaseCtl'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TowerBuildBaseCtl, _Component);

        function TowerBuildBaseCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBuildBaseCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBuildBaseCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "towerBuildBasePrefab", _descriptor, _assertThisInitialized(_this));

          _this.groundTiledNodeList = null;
          _this.towerBuildBaseList = [];
          _this.gameController = null;
          return _this;
        }

        _createClass(TowerBuildBaseCtl, [{
          key: "showTowerBuildBaseEnterAnim",
          value: function showTowerBuildBaseEnterAnim() {
            this.gameController = this.node.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController); // this.mapWidth = this.node.getComponent(GroundMapCtl).mapWidth;
            // this.mapHeight = this.node.getComponent(GroundMapCtl).mapHeight;
            // let currentActiveTowerBuildCount = this.gameController.playerData.currentActiveTowerBuildBaseCount;

            var towerBasePosList = this.gameController.getGameConfig().json['Level_' + this.gameController.getCurrentLevelNum()]['TowerBuildPos']; //     v2(4, 4),
            //     v2(4, 6),
            //     v2(6, 4),
            //     v2(6, 6)
            // ]

            this.groundTiledNodeList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getMapNodeList();
            var promiseList = []; // console.log("current active ", currentActiveTowerBuildCount);

            for (var i = 0; i < towerBasePosList.length; i++) {
              var posList = towerBasePosList[i];
              var v = v2(posList[0], posList[1]);
              var node = this.groundTiledNodeList.getValue(v.x, v.y);
              var towerBuildBase = instantiate(this.towerBuildBasePrefab);
              towerBuildBase.parent = this.node;
              towerBuildBase.position = v3(node.position.x, 20, node.position.z);
              this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
              this.towerBuildBaseList.push(towerBuildBase); // towerBuildBase.position.y = 10;

              promiseList.push(this.showEnterAnim(towerBuildBase, i));
            } // for (let i = 0; i < towerBasePosList.length; i++) {
            //     let v = towerBasePosList[i];
            //     let node = this.groundTiledNodeList.getValue(v.x, v.y);
            //     let towerBuildBase = instantiate(this.towerBuildBasePrefab);
            //     towerBuildBase.parent = this.node;
            //     towerBuildBase.position = v3(node.position.x, 20, node.position.z);
            //     this.node.getComponent(GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
            //     this.towerBuildBaseList.push(towerBuildBase);
            //     // towerBuildBase.position.y = 10;
            //     promiseList.push(this.showEnterAnim(towerBuildBase, i));
            // }


            return Promise.all(promiseList);
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim(target, index) {
            target.active = false;
            return new Promise(function (resolve, reject) {
              var tw = new Tween(target);
              var pos = target.position;
              tw.delay(index * 0.2);
              tw.call(function () {
                target.active = true;
              });
              tw.to(0.5, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: "bounceOut"
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return TowerBuildBaseCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "towerBuildBasePrefab", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwidjIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVHdlZW4iLCJHcm91bmRNYXBDdGwiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQnVpbGRCYXNlQ3RsIiwidHlwZSIsImdyb3VuZFRpbGVkTm9kZUxpc3QiLCJ0b3dlckJ1aWxkQmFzZUxpc3QiLCJnYW1lQ29udHJvbGxlciIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJ0b3dlckJhc2VQb3NMaXN0IiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJnZXRNYXBOb2RlTGlzdCIsInByb21pc2VMaXN0IiwiaSIsImxlbmd0aCIsInBvc0xpc3QiLCJ2IiwiZ2V0VmFsdWUiLCJ4IiwieSIsInRvd2VyQnVpbGRCYXNlIiwidG93ZXJCdWlsZEJhc2VQcmVmYWIiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJzZXRUb3dlckJ1aWxkQmFzZU9uVGlsZWQiLCJwdXNoIiwic2hvd0VudGVyQW5pbSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXQiLCJpbmRleCIsImFjdGl2ZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5IiwiY2FsbCIsInRvIiwiZWFzaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFB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TSxDQUFDUCxRQUFqQjtBQUNBWSxjQUFBQSxFQUFFLENBQUNFLEtBQUgsQ0FBU04sS0FBSyxHQUFHLEdBQWpCO0FBQ0FJLGNBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLFlBQU07QUFDVlIsZ0JBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixJQUFoQjtBQUNILGVBRkQ7QUFHQUcsY0FBQUEsRUFBRSxDQUFDSSxFQUFILENBQU0sR0FBTixFQUFXO0FBQUVoQixnQkFBQUEsUUFBUSxFQUFFN0IsRUFBRSxDQUFDMEMsR0FBRyxDQUFDbEIsQ0FBTCxFQUFRLENBQVIsRUFBV2tCLEdBQUcsQ0FBQ1osQ0FBZjtBQUFkLGVBQVgsRUFBOEM7QUFBRWdCLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUE5QztBQUNBTCxjQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1ZMLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBRSxjQUFBQSxFQUFFLENBQUNNLEtBQUg7QUFDSCxhQVpNLENBQVA7QUFhSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQXJFbUNuRCxTOzs7OztpQkFFRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIHYyLCBpbnN0YW50aWF0ZSwgdjMsIFR3ZWVuIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJ1aWxkQmFzZUN0bCcpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJ1aWxkQmFzZUN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlckJ1aWxkQmFzZVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdyb3VuZFRpbGVkTm9kZUxpc3Q6IE15MmRBcnJheTxOb2RlPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG93ZXJCdWlsZEJhc2VMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgLy8gdGhpcy5tYXBXaWR0aCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5tYXBXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLm1hcEhlaWdodCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQ7XHJcbiAgICAgICAgbGV0IHRvd2VyQmFzZVBvc0xpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV1bJ1Rvd2VyQnVpbGRQb3MnXTtcclxuICAgICAgICAvLyAgICAgdjIoNCwgNCksXHJcbiAgICAgICAgLy8gICAgIHYyKDQsIDYpLFxyXG4gICAgICAgIC8vICAgICB2Mig2LCA0KSxcclxuICAgICAgICAvLyAgICAgdjIoNiwgNilcclxuICAgICAgICAvLyBdXHJcbiAgICAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50IGFjdGl2ZSBcIiwgY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRDb3VudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3dlckJhc2VQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gdG93ZXJCYXNlUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2Mihwb3NMaXN0WzBdLCBwb3NMaXN0WzFdKVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdC5nZXRWYWx1ZSh2LngsIHYueSk7XHJcbiAgICAgICAgICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyQmFzZVBvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHYgPSB0b3dlckJhc2VQb3NMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdC5nZXRWYWx1ZSh2LngsIHYueSk7XHJcbiAgICAgICAgLy8gICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAvLyAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAvLyAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KTtcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0odGFyZ2V0OiBOb2RlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGFyZ2V0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheShpbmRleCAqIDAuMik7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNSwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19