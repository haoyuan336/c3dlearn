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
              }), GroundMapCtl) : GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y); // this.towerBuildBaseList.push(towerBuildBase);
              // towerBuildBase.position.y = 10;

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
            var _this2 = this;

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
                _this2.gameController.node.emit("play-audio", 'drop');

                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "frozenAllTowerBuildBase",
          value: function frozenAllTowerBuildBase() {
            this.node.emit("frozen-tower-build-base");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwidjIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVHdlZW4iLCJHcm91bmRNYXBDdGwiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQnVpbGRCYXNlQ3RsIiwidHlwZSIsImdyb3VuZFRpbGVkTm9kZUxpc3QiLCJnYW1lQ29udHJvbGxlciIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJ0b3dlckJhc2VQb3NMaXN0IiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJnZXRNYXBOb2RlTGlzdCIsInByb21pc2VMaXN0IiwiaSIsImxlbmd0aCIsInBvc0xpc3QiLCJ2IiwiZ2V0VmFsdWUiLCJ4IiwieSIsInRvd2VyQnVpbGRCYXNlIiwidG93ZXJCdWlsZEJhc2VQcmVmYWIiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJzZXRUb3dlckJ1aWxkQmFzZU9uVGlsZWQiLCJwdXNoIiwic2hvd0VudGVyQW5pbSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXQiLCJpbmRleCIsImFjdGl2ZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5IiwiY2FsbCIsInRvIiwiZWFzaW5nIiwiZW1pdCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFB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SSxjQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1ZSLGdCQUFBQSxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsSUFBaEI7QUFDSCxlQUZEO0FBR0FHLGNBQUFBLEVBQUUsQ0FBQ0ksRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFaEIsZ0JBQUFBLFFBQVEsRUFBRTVCLEVBQUUsQ0FBQ3lDLEdBQUcsQ0FBQ2xCLENBQUwsRUFBUSxDQUFSLEVBQVdrQixHQUFHLENBQUNaLENBQWY7QUFBZCxlQUFYLEVBQThDO0FBQUVnQixnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBOUM7QUFDQUwsY0FBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWLGdCQUFBLE1BQUksQ0FBQ2xDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCb0MsSUFBekIsQ0FBOEIsWUFBOUIsRUFBNEMsTUFBNUM7O0FBQ0FSLGdCQUFBQSxPQUFPO0FBQ1YsZUFIRDtBQUlBRSxjQUFBQSxFQUFFLENBQUNPLEtBQUg7QUFDSCxhQWJNLENBQVA7QUFjSDs7O29EQUV3QjtBQUNyQixpQkFBS3JDLElBQUwsQ0FBVW9DLElBQVYsQ0FBZSx5QkFBZjtBQUNILFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7O1FBekVtQ2xELFM7Ozs7O2lCQUVHLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgdjIsIGluc3RhbnRpYXRlLCB2MywgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1Rvd2VyQnVpbGRCYXNlQ3RsJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQnVpbGRCYXNlQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2VyQnVpbGRCYXNlUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ3JvdW5kVGlsZWROb2RlTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgdG93ZXJCdWlsZEJhc2VMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHNob3dUb3dlckJ1aWxkQmFzZUVudGVyQW5pbSgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgLy8gdGhpcy5tYXBXaWR0aCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5tYXBXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLm1hcEhlaWdodCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRCYXNlQ291bnQ7XHJcbiAgICAgICAgbGV0IHRvd2VyQmFzZVBvc0xpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldEdhbWVDb25maWcoKS5qc29uWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV1bJ1Rvd2VyQnVpbGRQb3MnXTtcclxuICAgICAgICAvLyAgICAgdjIoNCwgNCksXHJcbiAgICAgICAgLy8gICAgIHYyKDQsIDYpLFxyXG4gICAgICAgIC8vICAgICB2Mig2LCA0KSxcclxuICAgICAgICAvLyAgICAgdjIoNiwgNilcclxuICAgICAgICAvLyBdXHJcbiAgICAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50IGFjdGl2ZSBcIiwgY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRDb3VudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3dlckJhc2VQb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gdG93ZXJCYXNlUG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2Mihwb3NMaXN0WzBdLCBwb3NMaXN0WzFdKVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdC5nZXRWYWx1ZSh2LngsIHYueSk7XHJcbiAgICAgICAgICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyQmFzZVBvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHYgPSB0b3dlckJhc2VQb3NMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdC5nZXRWYWx1ZSh2LngsIHYueSk7XHJcbiAgICAgICAgLy8gICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAvLyAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAvLyAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KTtcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0odGFyZ2V0OiBOb2RlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGFyZ2V0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheShpbmRleCAqIDAuMik7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNSwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUuZW1pdChcInBsYXktYXVkaW9cIiwgJ2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UoKXtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImZyb3plbi10b3dlci1idWlsZC1iYXNlXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=