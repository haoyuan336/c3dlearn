System.register(["cc", "code-quality:cr", "./util/My2Array.js", "./GroundTiled/GroundTiled.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, My2dArray, GroundTiled, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GroundMapCtl;

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

  function _reportPossibleCrUseOfMy2dArray(extras) {
    _reporterNs.report("My2dArray", "./util/My2Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundTiled(extras) {
    _reporterNs.report("GroundTiled", "./GroundTiled/GroundTiled", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
      Tween = _cc.Tween;
      v2 = _cc.v2;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilMy2ArrayJs) {
      My2dArray = _utilMy2ArrayJs.default;
    }, function (_GroundTiledGroundTiledJs) {
      GroundTiled = _GroundTiledGroundTiledJs.GroundTiled;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "44e5akPt5hEHpdS1j2qoO/6", "GroundMapCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GroundMapCtl", GroundMapCtl = (_dec = ccclass('GroundMapCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: CCFloat
      }), _dec6 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GroundMapCtl, _Component);

        function GroundMapCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GroundMapCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroundMapCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "groundMapTiledPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapWidth", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapHeight", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tiledSize", _descriptor4, _assertThisInitialized(_this));

          _this.mapNodeList = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
            error: Error()
          }), My2dArray) : My2dArray)();

          _initializerDefineProperty(_this, "treePrefab", _descriptor5, _assertThisInitialized(_this));

          _this.groundTiledEdageIndexList = [];
          return _this;
        }

        _createClass(GroundMapCtl, [{
          key: "start",
          value: function start() {
            for (var i = 0; i < this.mapHeight; i++) {
              var nodeList = [];

              for (var j = 0; j < this.mapWidth; j++) {
                var node = instantiate(this.groundMapTiledPrefab);
                node.parent = this.node; // node.scale = v3(0, 0, 0);

                var pos = v3((this.mapWidth - 1) * -0.5 * this.tiledSize + j * this.tiledSize, -6, (this.mapHeight - 1) * -0.5 * this.tiledSize + i * this.tiledSize);
                node.setPosition(pos);
                node.active = false;
                nodeList.push(node); // if (i === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === this.mapWidth - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (i === this.mapHeight - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
              }

              this.mapNodeList.pushList(nodeList);
            }

            var v2List = [];

            for (var _j = 0; _j < this.mapWidth; _j++) {
              v2List.push(v2(_j, 0));
            }

            for (var _i = 1; _i < this.mapHeight; _i++) {
              v2List.push(v2(this.mapWidth - 1, _i));
            }

            for (var _j2 = this.mapWidth - 2; _j2 >= 0; _j2--) {
              v2List.push(v2(_j2, this.mapHeight - 1));
            }

            for (var _i2 = this.mapHeight - 2; _i2 > 0; _i2--) {
              v2List.push(v2(0, _i2));
            }

            this.groundTiledEdageIndexList = v2List; // console.log("v2 list", v2List);
          }
        }, {
          key: "getInEdageIndexList",
          value: function getInEdageIndexList() {
            // return this.groundTiledNodeListInEdage;
            return this.groundTiledEdageIndexList;
          }
        }, {
          key: "showTreeEnterAnim",
          value: function showTreeEnterAnim(treeNode) {
            // let v = v2(0,0);
            console.log("show tree enter anima");
            return new Promise(function (resolve, reject) {
              treeNode.active = true;
              treeNode.scale = v3(1, 0, 1);
              var tw = new Tween(treeNode);
              tw.to(0.2, {
                scale: v3(1, 1, 1)
              }, {
                easing: "elasticOut"
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showGroundEnterAnim",
          value: function showGroundEnterAnim() {
            var _this2 = this;

            return this.showGroundTiledEnterAnim().then(function () {
              var treeCount = 0;

              while (treeCount < 2) {
                //随机2棵树
                var y = [0, _this2.mapHeight - 1][Math.round(Math.random() * (2 - 1))];
                var x = Math.round(Math.random() * (_this2.mapWidth - 1));

                var node = _this2.mapNodeList.getValue(x, y);

                if (node && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                  error: Error()
                }), GroundTiled) : GroundTiled)) {
                  var groundTiled = node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                    error: Error()
                  }), GroundTiled) : GroundTiled);

                  if (groundTiled.getIsVoid()) {
                    var treeNode = instantiate(_this2.treePrefab);
                    treeNode.parent = _this2.node;
                    groundTiled.setTargetObject(treeNode);
                    treeNode.active = false;
                    treeNode.position = v3(node.position.x, 0, node.position.z);

                    _this2.showTreeEnterAnim(treeNode);

                    treeCount++;
                  }
                }
              }
            });
          }
        }, {
          key: "setTowerBuildBaseOnTiled",
          value: function setTowerBuildBaseOnTiled(target, x, y) {
            var node = this.mapNodeList.getValue(x, y);

            if (node && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
              error: Error()
            }), GroundTiled) : GroundTiled)) {
              node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                error: Error()
              }), GroundTiled) : GroundTiled).setTargetObject(target);
            }
          }
        }, {
          key: "showGroundTiledEnterAnim",
          value: function showGroundTiledEnterAnim() {
            var startV = v2(Math.floor(this.mapWidth / 2), Math.floor(this.mapHeight / 2) + 1);
            var rotationIndex = 0;
            var moveDir = v2(0, -1);
            var moveLength = 1;
            var count = 0;
            var index = 0;
            var promiseList = [];

            while (startV.x <= this.mapWidth + 1 && startV.y <= this.mapHeight + 1 && startV.x >= 0 && startV.y >= 0) {
              var moveCount = 0;

              while (moveCount < moveLength) {
                moveCount++; // console.log("1 v", startV);

                var node = this.mapNodeList.getValue(startV.x, startV.y);

                if (node) {
                  promiseList.push(this.showEnterAnim(node, index));
                  index++; // this.showEnterAnim(node, index);
                }

                startV.add(moveDir);
              }

              var radias = Math.PI * 2 / 4 * rotationIndex;
              moveDir = v2(0, 1).rotate(radias).normalize();
              moveDir.x = moveDir.x < 0 && Math.abs(moveDir.x) < 1 ? 0 : Math.floor(moveDir.x);
              moveDir.y = moveDir.y < 0 && Math.abs(moveDir.y) < 1 ? 0 : Math.floor(moveDir.y);

              if (count == 2) {
                count = 0;
                moveLength++;
              }

              count++;
              rotationIndex++;
            }

            return Promise.all(promiseList);
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim(node, index) {
            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              var pos = node.position;
              tw.delay(index * 0.03);
              tw.call(function () {
                node.active = true;
              });
              tw.to(0.4, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: 'elasticOut'
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "getMapNodeList",
          value: function getMapNodeList() {
            return this.mapNodeList;
          }
        }, {
          key: "getOneRandomVoidTiledNode",
          value: function getOneRandomVoidTiledNode() {} //随机获取一个空的地图块的节点 //从边缘
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GroundMapCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groundMapTiledPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tiledSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "treePrefab", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Hcm91bmRNYXBDdGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsIkNDSW50ZWdlciIsImluc3RhbnRpYXRlIiwidjMiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJ2MiIsIk15MmRBcnJheSIsIkdyb3VuZFRpbGVkIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR3JvdW5kTWFwQ3RsIiwidHlwZSIsIm1hcE5vZGVMaXN0IiwiZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdCIsImkiLCJtYXBIZWlnaHQiLCJub2RlTGlzdCIsImoiLCJtYXBXaWR0aCIsIm5vZGUiLCJncm91bmRNYXBUaWxlZFByZWZhYiIsInBhcmVudCIsInBvcyIsInRpbGVkU2l6ZSIsInNldFBvc2l0aW9uIiwiYWN0aXZlIiwicHVzaCIsInB1c2hMaXN0IiwidjJMaXN0IiwidHJlZU5vZGUiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY2FsZSIsInR3IiwidG8iLCJlYXNpbmciLCJjYWxsIiwic3RhcnQiLCJzaG93R3JvdW5kVGlsZWRFbnRlckFuaW0iLCJ0aGVuIiwidHJlZUNvdW50IiwieSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIngiLCJnZXRWYWx1ZSIsImdldENvbXBvbmVudCIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwidHJlZVByZWZhYiIsInNldFRhcmdldE9iamVjdCIsInBvc2l0aW9uIiwieiIsInNob3dUcmVlRW50ZXJBbmltIiwidGFyZ2V0Iiwic3RhcnRWIiwiZmxvb3IiLCJyb3RhdGlvbkluZGV4IiwibW92ZURpciIsIm1vdmVMZW5ndGgiLCJjb3VudCIsImluZGV4IiwicHJvbWlzZUxpc3QiLCJtb3ZlQ291bnQiLCJzaG93RW50ZXJBbmltIiwiYWRkIiwicmFkaWFzIiwiUEkiLCJy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LGdCQUFBQSxRQUFRLEVBQUVyRCxFQUFFLENBQUNvQixHQUFHLENBQUMwQixDQUFMLEVBQVEsQ0FBUixFQUFXMUIsR0FBRyxDQUFDa0MsQ0FBZjtBQUFkLGVBQVgsRUFBOEM7QUFBRWxCLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUE5QztBQUNBRixjQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxZQUFNO0FBQ1ZOLGdCQUFBQSxPQUFPO0FBQ1YsZUFGRDtBQUdBRyxjQUFBQSxFQUFFLENBQUNJLEtBQUg7QUFDSCxhQVpNLENBQVA7QUFhSDs7OzJDQUNpQztBQUM5QixtQkFBTyxLQUFLNUIsV0FBWjtBQUNIOzs7c0RBQzJCLENBRzNCLEMsQ0FGRztBQUlKO0FBQ0E7QUFDQTs7Ozs7UUFyTDhCZCxTOzs7OztpQkFFUSxJOzs7Ozs7O2lCQUVaLEM7Ozs7Ozs7aUJBRUMsQzs7Ozs7OztpQkFHQSxDOzs7Ozs7O2lCQVFDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgQ0NJbnRlZ2VyLCBpbnN0YW50aWF0ZSwgdjMsIENDRmxvYXQsIFR3ZWVuLCB2MiwgVHdlZW5FYXNpbmcsIFZlYzIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHcm91bmRNYXBDdGwnKVxyXG5leHBvcnQgY2xhc3MgR3JvdW5kTWFwQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGdyb3VuZE1hcFRpbGVkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXHJcbiAgICBwdWJsaWMgbWFwV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcclxuICAgIHB1YmxpYyBtYXBIZWlnaHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NGbG9hdCB9KVxyXG4gICAgcHVibGljIHRpbGVkU2l6ZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHN0YXJ0KCkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gICAgIHRoaXMubm9kZS5vbihcIlwiKTtcclxuICAgIC8vIH1cclxuICAgIHByaXZhdGUgbWFwTm9kZUxpc3Q6IE15MmRBcnJheTxOb2RlPiA9IG5ldyBNeTJkQXJyYXk8Tm9kZT4oKTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyB0cmVlUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIHB1YmxpYyBncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZTogTm9kZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIGdyb3VuZFRpbGVkRWRhZ2VJbmRleExpc3Q6IFZlYzJbXSA9IFtdO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcEhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXBXaWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kTWFwVGlsZWRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnNjYWxlID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjMoKHRoaXMubWFwV2lkdGggLSAxKSAqIC0wLjUgKiB0aGlzLnRpbGVkU2l6ZSArIGogKiB0aGlzLnRpbGVkU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAtNiwgKHRoaXMubWFwSGVpZ2h0IC0gMSkgKiAtMC41ICogdGhpcy50aWxlZFNpemUgKyBpICogdGhpcy50aWxlZFNpemUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChqID09PSB0aGlzLm1hcFdpZHRoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChpID09PSB0aGlzLm1hcEhlaWdodCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3RJbkVkYWdlLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFwTm9kZUxpc3QucHVzaExpc3Qobm9kZUxpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHYyTGlzdDogVmVjMltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hcFdpZHRoOyBqKyspIHtcclxuICAgICAgICAgICAgdjJMaXN0LnB1c2godjIoaiwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubWFwSGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgdjJMaXN0LnB1c2godjIodGhpcy5tYXBXaWR0aCAtIDEsIGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHRoaXMubWFwV2lkdGggLSAyOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICB2Mkxpc3QucHVzaCh2MihqLCB0aGlzLm1hcEhlaWdodCAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFwSGVpZ2h0IC0gMjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2Mkxpc3QucHVzaCh2MigwLCBpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyb3VuZFRpbGVkRWRhZ2VJbmRleExpc3QgPSB2Mkxpc3Q7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2MiBsaXN0XCIsIHYyTGlzdCk7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEluRWRhZ2VJbmRleExpc3QoKTogVmVjMltdIHtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91bmRUaWxlZEVkYWdlSW5kZXhMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1RyZWVFbnRlckFuaW0odHJlZU5vZGU6IE5vZGUpIHtcclxuICAgICAgICAvLyBsZXQgdiA9IHYyKDAsMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93IHRyZWUgZW50ZXIgYW5pbWFcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdHJlZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJlZU5vZGUuc2NhbGUgPSB2MygxLCAwLCAxKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRyZWVOb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9LCB7IGVhc2luZzogXCJlbGFzdGljT3V0XCIgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd0dyb3VuZEVudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93R3JvdW5kVGlsZWRFbnRlckFuaW0oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyZWVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cmVlQ291bnQgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+maj+acujLmo7XmoJFcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gWzAsIHRoaXMubWFwSGVpZ2h0IC0gMV1bTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDIgLSAxKSldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXBXaWR0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyZWVOb2RlID0gaW5zdGFudGlhdGUodGhpcy50cmVlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91bmRUaWxlZC5zZXRUYXJnZXRPYmplY3QodHJlZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RyZWVFbnRlckFuaW0odHJlZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVlQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0YXJnZXQ6IE5vZGUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm1hcE5vZGVMaXN0LmdldFZhbHVlKHgsIHkpO1xyXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkuc2V0VGFyZ2V0T2JqZWN0KHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93R3JvdW5kVGlsZWRFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ViA9IHYyKE1hdGguZmxvb3IodGhpcy5tYXBXaWR0aCAvIDIpLCBNYXRoLmZsb29yKHRoaXMubWFwSGVpZ2h0IC8gMikgKyAxKTtcclxuICAgICAgICBsZXQgcm90YXRpb25JbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IG1vdmVEaXIgPSB2MigwLCAtMSk7XHJcbiAgICAgICAgbGV0IG1vdmVMZW5ndGggPSAxO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICB3aGlsZSAoc3RhcnRWLnggPD0gdGhpcy5tYXBXaWR0aCArIDEgJiYgc3RhcnRWLnkgPD0gdGhpcy5tYXBIZWlnaHQgKyAxICYmIHN0YXJ0Vi54ID49IDAgJiYgc3RhcnRWLnkgPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbW92ZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtb3ZlQ291bnQgPCBtb3ZlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ291bnQrKztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMSB2XCIsIHN0YXJ0Vik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoc3RhcnRWLngsIHN0YXJ0Vi55KTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaCh0aGlzLnNob3dFbnRlckFuaW0obm9kZSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VudGVyQW5pbShub2RlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydFYuYWRkKG1vdmVEaXIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmFkaWFzID0gTWF0aC5QSSAqIDIgLyA0ICogcm90YXRpb25JbmRleDtcclxuICAgICAgICAgICAgbW92ZURpciA9IHYyKDAsIDEpLnJvdGF0ZShyYWRpYXMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBtb3ZlRGlyLnggPSAobW92ZURpci54IDwgMCAmJiBNYXRoLmFicyhtb3ZlRGlyLngpIDwgMSkgPyAwIDogTWF0aC5mbG9vcihtb3ZlRGlyLngpO1xyXG4gICAgICAgICAgICBtb3ZlRGlyLnkgPSAobW92ZURpci55IDwgMCAmJiBNYXRoLmFicyhtb3ZlRGlyLnkpIDwgMSkgPyAwIDogTWF0aC5mbG9vcihtb3ZlRGlyLnkpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgbW92ZUxlbmd0aCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICByb3RhdGlvbkluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzaG93RW50ZXJBbmltKG5vZGU6IE5vZGUsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdHcuZGVsYXkoaW5kZXggKiAwLjAzKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuNCwgeyBwb3NpdGlvbjogdjMocG9zLngsIDAsIHBvcy56KSB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFwTm9kZUxpc3QoKTogTXkyZEFycmF5PE5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIGdldE9uZVJhbmRvbVZvaWRUaWxlZE5vZGUoKSB7XHJcbiAgICAgICAgLy/pmo/mnLrojrflj5bkuIDkuKrnqbrnmoTlnLDlm77lnZfnmoToioLngrkgLy/ku47ovrnnvJhcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=