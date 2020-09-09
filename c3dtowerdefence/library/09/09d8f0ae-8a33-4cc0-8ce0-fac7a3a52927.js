System.register(["cc", "code-quality:cr", "./GroundMapCtl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, v2, instantiate, v3, Tween, GroundMapCtl, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TowerBuildBaseCtl;

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
          return _this;
        }

        _createClass(TowerBuildBaseCtl, [{
          key: "showTowerBuildBaseEnterAnim",
          value: function showTowerBuildBaseEnterAnim() {
            // this.mapWidth = this.node.getComponent(GroundMapCtl).mapWidth;
            // this.mapHeight = this.node.getComponent(GroundMapCtl).mapHeight;
            var towerBasePosList = [v2(4, 4), v2(4, 6), v2(6, 4), v2(6, 6)];
            this.groundTiledNodeList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getMapNodeList();
            var promiseList = [];

            for (var i = 0; i < towerBasePosList.length; i++) {
              var v = towerBasePosList[i];
              var node = this.groundTiledNodeList.getValue(v.x, v.y);
              var towerBuildBase = instantiate(this.towerBuildBasePrefab);
              towerBuildBase.parent = this.node;
              towerBuildBase.position = v3(node.position.x, 20, node.position.z);
              this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl).setTowerBuildBaseOnTiled(towerBuildBase, v.x, v.y);
              this.towerBuildBaseList.push(towerBuildBase); // towerBuildBase.position.y = 10;

              promiseList.push(this.showEnterAnim(towerBuildBase, i));
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlckJ1aWxkQmFzZUN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwidjIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVHdlZW4iLCJHcm91bmRNYXBDdGwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJ1aWxkQmFzZUN0bCIsInR5cGUiLCJncm91bmRUaWxlZE5vZGVMaXN0IiwidG93ZXJCdWlsZEJhc2VMaXN0IiwidG93ZXJCYXNlUG9zTGlzdCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRNYXBOb2RlTGlzdCIsInByb21pc2VMaXN0IiwiaSIsImxlbmd0aCIsInYiLCJnZXRWYWx1ZSIsIngiLCJ5IiwidG93ZXJCdWlsZEJhc2UiLCJ0b3dlckJ1aWxkQmFzZVByZWZhYiIsInBhcmVudCIsInBvc2l0aW9uIiwieiIsInNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCIsInB1c2giLCJzaG93RW50ZXJBbmltIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldCIsImluZGV4IiwiYWN0aXZlIiwicmVzb2x2ZSIsInJlamVjdCIsInR3IiwicG9zIiwiZGVsYXkiLCJjYWxsIiwidG8iLCJlYXNpbmciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDMURDLE1BQUFBLFksbUJBQUFBLFk7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FB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Q0FBQ0csSUFBSCxDQUFRLFlBQU07QUFDVkwsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FFLGNBQUFBLEVBQUUsQ0FBQ00sS0FBSDtBQUNILGFBWk0sQ0FBUDtBQWFILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBbERtQzdDLFM7Ozs7O2lCQUVHLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgdjIsIGluc3RhbnRpYXRlLCB2MywgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1Rvd2VyQnVpbGRCYXNlQ3RsJylcclxuZXhwb3J0IGNsYXNzIFRvd2VyQnVpbGRCYXNlQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRvd2VyQnVpbGRCYXNlUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ3JvdW5kVGlsZWROb2RlTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gbnVsbDtcclxuICAgIHB1YmxpYyB0b3dlckJ1aWxkQmFzZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgc2hvd1Rvd2VyQnVpbGRCYXNlRW50ZXJBbmltKCkge1xyXG4gICAgICAgIC8vIHRoaXMubWFwV2lkdGggPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkubWFwV2lkdGg7XHJcbiAgICAgICAgLy8gdGhpcy5tYXBIZWlnaHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkubWFwSGVpZ2h0O1xyXG4gICAgICAgIGxldCB0b3dlckJhc2VQb3NMaXN0ID0gW1xyXG4gICAgICAgICAgICB2Mig0LCA0KSxcclxuICAgICAgICAgICAgdjIoNCwgNiksXHJcbiAgICAgICAgICAgIHYyKDYsIDQpLFxyXG4gICAgICAgICAgICB2Mig2LCA2KVxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3QgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvd2VyQmFzZVBvc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHYgPSB0b3dlckJhc2VQb3NMaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdC5nZXRWYWx1ZSh2LngsIHYueSk7XHJcbiAgICAgICAgICAgIGxldCB0b3dlckJ1aWxkQmFzZSA9IGluc3RhbnRpYXRlKHRoaXMudG93ZXJCdWlsZEJhc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICB0b3dlckJ1aWxkQmFzZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRvd2VyQnVpbGRCYXNlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLnNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0b3dlckJ1aWxkQmFzZSwgdi54LCB2LnkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VyQnVpbGRCYXNlTGlzdC5wdXNoKHRvd2VyQnVpbGRCYXNlKTtcclxuICAgICAgICAgICAgLy8gdG93ZXJCdWlsZEJhc2UucG9zaXRpb24ueSA9IDEwO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0odG93ZXJCdWlsZEJhc2UsIGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KTtcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0odGFyZ2V0OiBOb2RlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGFyZ2V0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheShpbmRleCAqIDAuMik7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNSwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogXCJib3VuY2VPdXRcIiB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19