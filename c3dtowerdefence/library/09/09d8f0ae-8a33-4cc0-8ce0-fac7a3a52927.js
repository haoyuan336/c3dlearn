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
              var node = this.groundTiledNodeList.getValue(v.x, v.y).node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwidjIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVHdlZW4iLCJHcm91bmRNYXBDdGwiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyQnVpbGRCYXNlQ3RsIiwidHlwZSIsImdyb3VuZFRpbGVkTm9kZUxpc3QiLCJ0b3dlckJ1aWxkQmFzZUxpc3QiLCJnYW1lQ29udHJvbGxlciIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJ0b3dlckJhc2VQb3NMaXN0IiwiZ2V0R2FtZUNvbmZpZyIsImpzb24iLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJnZXRNYXBOb2RlTGlzdCIsInByb21pc2VMaXN0IiwiaSIsImxlbmd0aCIsInBvc0xpc3QiLCJ2IiwiZ2V0VmFsdWUiLCJ4IiwieSIsInRvd2VyQnVpbGRCYXNlIiwidG93ZXJCdWlsZEJhc2VQcmVmYWIiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJzZXRUb3dlckJ1aWxkQmFzZU9uVGlsZWQiLCJwdXNoIiwic2hvd0VudGVyQW5pbSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXQiLCJpbmRleCIsImFjdGl2ZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0dyIsInBvcyIsImRlbGF5IiwiY2FsbCIsInRvIiwiZWFzaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFB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QUFHTixNQUFNLENBQUNQLFFBQWpCO0FBQ0FZLGNBQUFBLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTTixLQUFLLEdBQUcsR0FBakI7QUFDQUksY0FBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWUixnQkFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLElBQWhCO0FBQ0gsZUFGRDtBQUdBRyxjQUFBQSxFQUFFLENBQUNJLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFBRWhCLGdCQUFBQSxRQUFRLEVBQUU3QixFQUFFLENBQUMwQyxHQUFHLENBQUNsQixDQUFMLEVBQVEsQ0FBUixFQUFXa0IsR0FBRyxDQUFDWixDQUFmO0FBQWQsZUFBWCxFQUE4QztBQUFFZ0IsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQTlDO0FBQ0FMLGNBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLFlBQU07QUFDVkwsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FFLGNBQUFBLEVBQUUsQ0FBQ00sS0FBSDtBQUNILGFBWk0sQ0FBUDtBQWFILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBckVtQ25ELFM7Ozs7O2lCQUVHLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgdjIsIGluc3RhbnRpYXRlLCB2MywgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IENlbGxOb2RlLCBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdUb3dlckJ1aWxkQmFzZUN0bCcpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJ1aWxkQmFzZUN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0b3dlckJ1aWxkQmFzZVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdyb3VuZFRpbGVkTm9kZUxpc3Q6IE15MmRBcnJheTxDZWxsTm9kZT4gPSBudWxsO1xyXG4gICAgcHVibGljIHRvd2VyQnVpbGRCYXNlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBzaG93VG93ZXJCdWlsZEJhc2VFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIHRoaXMubWFwV2lkdGggPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkubWFwV2lkdGg7XHJcbiAgICAgICAgLy8gdGhpcy5tYXBIZWlnaHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkubWFwSGVpZ2h0O1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50QWN0aXZlVG93ZXJCdWlsZENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQmFzZUNvdW50O1xyXG4gICAgICAgIGxldCB0b3dlckJhc2VQb3NMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRHYW1lQ29uZmlnKCkuanNvblsnTGV2ZWxfJyArIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudExldmVsTnVtKCldWydUb3dlckJ1aWxkUG9zJ107XHJcbiAgICAgICAgLy8gICAgIHYyKDQsIDQpLFxyXG4gICAgICAgIC8vICAgICB2Mig0LCA2KSxcclxuICAgICAgICAvLyAgICAgdjIoNiwgNCksXHJcbiAgICAgICAgLy8gICAgIHYyKDYsIDYpXHJcbiAgICAgICAgLy8gXVxyXG4gICAgICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRNYXBOb2RlTGlzdCgpO1xyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudCBhY3RpdmUgXCIsIGN1cnJlbnRBY3RpdmVUb3dlckJ1aWxkQ291bnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG93ZXJCYXNlUG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHRvd2VyQmFzZVBvc0xpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCB2ID0gdjIocG9zTGlzdFswXSwgcG9zTGlzdFsxXSlcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3QuZ2V0VmFsdWUodi54LCB2LnkpLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyQmFzZVBvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHYgPSB0b3dlckJhc2VQb3NMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdC5nZXRWYWx1ZSh2LngsIHYueSk7XHJcbiAgICAgICAgLy8gICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAvLyAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAvLyAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KTtcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0odGFyZ2V0OiBOb2RlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGFyZ2V0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheShpbmRleCAqIDAuMik7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNSwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19