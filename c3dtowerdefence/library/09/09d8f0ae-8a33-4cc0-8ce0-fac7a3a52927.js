System.register(["cc", "code-quality:cr", "./GameInstance.js", "./GroundMapCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, v2, instantiate, v3, Tween, JsonAsset, GameInstance, GroundMapCtl, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TowerBuildBaseCtl;

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

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "./GameInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundMapCtl(extras) {
    _reporterNs.report("GroundMapCtl", "./GroundMapCtl", _context.meta, extras);
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
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      v2 = _cc.v2;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      JsonAsset = _cc.JsonAsset;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "09d8fCuijNMwIzg+sejpSkn", "TowerBuildBaseCtl", _context.meta);

      _crd = true;
      // import { GameController } from './GameController';
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBuildBaseCtl", TowerBuildBaseCtl = (_dec = ccclass('TowerBuildBaseCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: JsonAsset
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

          _initializerDefineProperty(_this, "gameConfigJsonAsset", _descriptor2, _assertThisInitialized(_this));

          _this.groundTiledNodeList = null;
          return _this;
        }

        _createClass(TowerBuildBaseCtl, [{
          key: "showTowerBuildBaseEnterAnim",
          // private towerBuildBaseList: Node[] = [];
          // private gameController: GameController = null;
          value: function showTowerBuildBaseEnterAnim() {
            // this.gameController = this.node.getComponent(GameController);
            // this.mapWidth = this.node.getComponent(GroundMapCtl).mapWidth;
            // this.mapHeight = this.node.getComponent(GroundMapCtl).mapHeight;
            // let currentActiveTowerBuildCount = this.gameController.playerData.currentActiveTowerBuildBaseCount;
            var currentLevelNum = (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().getPlayerData().currentLevelNum;
            var towerBasePosList = this.gameConfigJsonAsset.json['Level_' + currentLevelNum]['TowerBuildPos']; //     v2(4, 4),
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
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("play-audio", 'drop');
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameConfigJsonAsset", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwidjIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVHdlZW4iLCJKc29uQXNzZXQiLCJHYW1lSW5zdGFuY2UiLCJHcm91bmRNYXBDdGwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZUN0bCIsInR5cGUiLCJncm91bmRUaWxlZE5vZGVMaXN0IiwiY3VycmVudExldmVsTnVtIiwiZ2V0SW5zdGFuY2UiLCJnZXRQbGF5ZXJEYXRhIiwidG93ZXJCYXNlUG9zTGlzdCIsImdhbWVDb25maWdKc29uQXNzZXQiLCJqc29uIiwibm9kZSIsImdldENvbXBvbmVudCIsImdldE1hcE5vZGVMaXN0IiwicHJvbWlzZUxpc3QiLCJpIiwibGVuZ3RoIiwicG9zTGlzdCIsInYiLCJnZXRWYWx1ZSIsIngiLCJ5IiwidG93ZXJCdWlsZEJhc2UiLCJ0b3dlckJ1aWxkQmFzZVByZWZhYiIsInBhcmVudCIsInBvc2l0aW9uIiwieiIsInNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCIsInB1c2giLCJzaG93RW50ZXJBbmltIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldCIsImluZGV4IiwiYWN0aXZlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3IiwicG9zIiwiZGVsYXkiLCJjYWxsIiwidG8iLCJlYXNpbmciLCJnZXRHYW1lQ3RsTm9kZSIsImVtaXQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFB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LEdBQUdOLE1BQU0sQ0FBQ1AsUUFBakI7QUFDQVksY0FBQUEsRUFBRSxDQUFDRSxLQUFILENBQVNOLEtBQUssR0FBRyxHQUFqQjtBQUNBSSxjQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1ZSLGdCQUFBQSxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsSUFBaEI7QUFDSCxlQUZEO0FBR0FHLGNBQUFBLEVBQUUsQ0FBQ0ksRUFBSCxDQUFNLEdBQU4sRUFBVztBQUFFaEIsZ0JBQUFBLFFBQVEsRUFBRTlCLEVBQUUsQ0FBQzJDLEdBQUcsQ0FBQ2xCLENBQUwsRUFBUSxDQUFSLEVBQVdrQixHQUFHLENBQUNaLENBQWY7QUFBZCxlQUFYLEVBQThDO0FBQUVnQixnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBOUM7QUFDQUwsY0FBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEsWUFBTTtBQUNWO0FBQUE7QUFBQSxrREFBYWxDLFdBQWIsR0FBMkJxQyxjQUEzQixHQUE0Q0MsSUFBNUMsQ0FBaUQsWUFBakQsRUFBK0QsTUFBL0Q7QUFDQVQsZ0JBQUFBLE9BQU87QUFDVixlQUhEO0FBSUFFLGNBQUFBLEVBQUUsQ0FBQ1EsS0FBSDtBQUNILGFBYk0sQ0FBUDtBQWNIOzs7b0RBRXlCO0FBQ3RCLGlCQUFLbEMsSUFBTCxDQUFVaUMsSUFBVixDQUFlLHlCQUFmO0FBQ0gsVyxDQUNEO0FBQ0E7QUFDQTs7Ozs7UUE5RW1DckQsUzs7Ozs7aUJBRUcsSTs7Ozs7OztpQkFHRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIHYyLCBpbnN0YW50aWF0ZSwgdjMsIFR3ZWVuLCBKc29uQXNzZXQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVJbnN0YW5jZSB9IGZyb20gJy4vR2FtZUluc3RhbmNlJztcclxuaW1wb3J0IHsgR3JvdW5kTWFwQ3RsIH0gZnJvbSAnLi9Hcm91bmRNYXBDdGwnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbi8vIGltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVG93ZXJCdWlsZEJhc2VDdGwnKVxyXG5leHBvcnQgY2xhc3MgVG93ZXJCdWlsZEJhc2VDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdG93ZXJCdWlsZEJhc2VQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ0pzb25Bc3NldDogSnNvbkFzc2V0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JvdW5kVGlsZWROb2RlTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgdG93ZXJCdWlsZEJhc2VMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIC8vIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICAvLyB0aGlzLm1hcFdpZHRoID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLm1hcFdpZHRoO1xyXG4gICAgICAgIC8vIHRoaXMubWFwSGVpZ2h0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLm1hcEhlaWdodDtcclxuICAgICAgICAvLyBsZXQgY3VycmVudEFjdGl2ZVRvd2VyQnVpbGRDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5jdXJyZW50QWN0aXZlVG93ZXJCdWlsZEJhc2VDb3VudDtcclxuICAgICAgICBsZXQgY3VycmVudExldmVsTnVtID0gR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyRGF0YSgpLmN1cnJlbnRMZXZlbE51bTtcclxuICAgICAgICBsZXQgdG93ZXJCYXNlUG9zTGlzdCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25Bc3NldC5qc29uWydMZXZlbF8nICsgY3VycmVudExldmVsTnVtXVsnVG93ZXJCdWlsZFBvcyddO1xyXG4gICAgICAgIC8vICAgICB2Mig0LCA0KSxcclxuICAgICAgICAvLyAgICAgdjIoNCwgNiksXHJcbiAgICAgICAgLy8gICAgIHYyKDYsIDQpLFxyXG4gICAgICAgIC8vICAgICB2Mig2LCA2KVxyXG4gICAgICAgIC8vIF1cclxuICAgICAgICB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3QgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgYWN0aXZlIFwiLCBjdXJyZW50QWN0aXZlVG93ZXJCdWlsZENvdW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyQmFzZVBvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSB0b3dlckJhc2VQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHYyKHBvc0xpc3RbMF0sIHBvc0xpc3RbMV0pXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0LmdldFZhbHVlKHYueCwgdi55KTtcclxuICAgICAgICAgICAgbGV0IHRvd2VyQnVpbGRCYXNlID0gaW5zdGFudGlhdGUodGhpcy50b3dlckJ1aWxkQmFzZVByZWZhYik7XHJcbiAgICAgICAgICAgIHRvd2VyQnVpbGRCYXNlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgdG93ZXJCdWlsZEJhc2UucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDIwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2V0VG93ZXJCdWlsZEJhc2VPblRpbGVkKHRvd2VyQnVpbGRCYXNlLCB2LngsIHYueSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG93ZXJCdWlsZEJhc2VMaXN0LnB1c2godG93ZXJCdWlsZEJhc2UpO1xyXG4gICAgICAgICAgICAvLyB0b3dlckJ1aWxkQmFzZS5wb3NpdGlvbi55ID0gMTA7XHJcblxyXG4gICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHRoaXMuc2hvd0VudGVyQW5pbSh0b3dlckJ1aWxkQmFzZSwgaSkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdG93ZXJCYXNlUG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgdiA9IHRvd2VyQmFzZVBvc0xpc3RbaV07XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0LmdldFZhbHVlKHYueCwgdi55KTtcclxuICAgICAgICAvLyAgICAgbGV0IHRvd2VyQnVpbGRCYXNlID0gaW5zdGFudGlhdGUodGhpcy50b3dlckJ1aWxkQmFzZVByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRvd2VyQnVpbGRCYXNlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAvLyAgICAgdG93ZXJCdWlsZEJhc2UucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDIwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuc2V0VG93ZXJCdWlsZEJhc2VPblRpbGVkKHRvd2VyQnVpbGRCYXNlLCB2LngsIHYueSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG93ZXJCdWlsZEJhc2VMaXN0LnB1c2godG93ZXJCdWlsZEJhc2UpO1xyXG4gICAgICAgIC8vICAgICAvLyB0b3dlckJ1aWxkQmFzZS5wb3NpdGlvbi55ID0gMTA7XHJcblxyXG4gICAgICAgIC8vICAgICBwcm9taXNlTGlzdC5wdXNoKHRoaXMuc2hvd0VudGVyQW5pbSh0b3dlckJ1aWxkQmFzZSwgaSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpO1xyXG4gICAgfVxyXG4gICAgc2hvd0VudGVyQW5pbSh0YXJnZXQ6IE5vZGUsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0YXJnZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0YXJnZXQucG9zaXRpb247XHJcbiAgICAgICAgICAgIHR3LmRlbGF5KGluZGV4ICogMC4yKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC41LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmdldEdhbWVDdGxOb2RlKCkuZW1pdChcInBsYXktYXVkaW9cIiwgJ2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnJvemVuQWxsVG93ZXJCdWlsZEJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJmcm96ZW4tdG93ZXItYnVpbGQtYmFzZVwiKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19