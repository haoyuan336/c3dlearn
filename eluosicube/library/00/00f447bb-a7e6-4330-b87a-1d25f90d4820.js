System.register(["cc", "code-quality:cr", "./CubeGroup.js", "./My2Array.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, CCInteger, instantiate, v3, CubeSet, CubeGroupType, My2dArray, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GameManager;

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

  function _reportPossibleCrUseOfCubeSet(extras) {
    _reporterNs.report("CubeSet", "./CubeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCubeGroupType(extras) {
    _reporterNs.report("CubeGroupType", "./CubeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMy2dArray(extras) {
    _reporterNs.report("My2dArray", "./My2Array", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
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
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CubeGroupJs) {
      CubeSet = _CubeGroupJs.CubeSet;
      CubeGroupType = _CubeGroupJs.CubeGroupType;
    }, function (_My2ArrayJs) {
      My2dArray = _My2ArrayJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "00f44e7p+ZDMLh6HSX5DUgg", "GameManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameManager, _Component);

        function GameManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cubePrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "widthCount", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hieghtCount", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cubeDistance", _descriptor4, _assertThisInitialized(_this));

          _this.currentShowCubeSet = null;
          _this.currentMoveCubeSet = null;
          _this.myMapData = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
            error: Error()
          }), My2dArray) : My2dArray)(_this.widthCount, _this.hieghtCount, 0);
          _this.currentMoveTime = 0;
          _this.gameState = "ready";
          _this.moveDownSpeed = 0.5;
          return _this;
        }

        _createClass(GameManager, [{
          key: "start",
          value: function start() {
            this.drawFrame(v3(((this.widthCount + 2) * -0.5 + 3) * this.cubeDistance, 14 * this.cubeDistance, 0), 6, 6);
            this.drawFrame(v3(0, 0, 0), this.widthCount + 2, this.hieghtCount + 2);
            this.gameState = 'run';
          }
        }, {
          key: "checkIsNull",
          value: function checkIsNull(x, y) {
            if (y < 0 || y >= this.widthCount) {
              return true;
            }

            if (x >= this.hieghtCount) {
              return false;
            }

            if (x < 0) {
              return true;
            }

            var result = this.myMapData.getValue(x, y);
            return result ? true : false;
          }
        }, {
          key: "drawFrame",
          value: function drawFrame(centPos, frameWidth, frameHeigt) {
            //绘制边框
            for (var i = 0; i < frameWidth; i++) {
              for (var j = 0; j < 2; j++) {
                var node = instantiate(this.cubePrefab);
                node.parent = this.node;
                var x = (frameWidth - 1) * -0.5 * this.cubeDistance + i * this.cubeDistance;
                var y = (frameHeigt - 1) * -0.5 * this.cubeDistance + j * (frameHeigt - 1) * this.cubeDistance;
                node.setPosition(v3(x, y, 0).add(centPos));
              }
            }

            for (var _i = 0; _i < frameHeigt - 2; _i++) {
              for (var _j = 0; _j < 2; _j++) {
                var _node = instantiate(this.cubePrefab);

                _node.parent = this.node;

                var _y = (frameHeigt - 3) * -0.5 * this.cubeDistance + _i * this.cubeDistance;

                var _x = (frameWidth - 1) * -0.5 * this.cubeDistance + _j * (frameWidth - 1) * this.cubeDistance;

                _node.setPosition(v3(_x, _y, 0).add(centPos));
              }
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            var _this2 = this;

            if (this.gameState !== 'run') {
              return;
            }

            if (!this.currentShowCubeSet) {
              //如果当前显示的方块不可用，那么创建一个显示的方块
              //随机一个枚举值
              var length = Object.keys(_crd && CubeGroupType === void 0 ? (_reportPossibleCrUseOfCubeGroupType({
                error: Error()
              }), CubeGroupType) : CubeGroupType).length / 2; // console.log("length", length);

              var randomIndex = Math.round(Math.random() * (length - 1)); // console.log("random index", randomIndex);
              // let type = CubeGroupType[randomIndex]
              // console.log("随机到的 type", type);

              var cubeSet = new (_crd && CubeSet === void 0 ? (_reportPossibleCrUseOfCubeSet({
                error: Error()
              }), CubeSet) : CubeSet)(randomIndex, this);
              this.currentShowCubeSet = cubeSet;
              this.currentShowCubeSet.show(v3(-3.3, 15, 0));
            }

            if (this.currentShowCubeSet && !this.currentMoveCubeSet) {
              this.currentMoveCubeSet = this.currentShowCubeSet;
              this.currentShowCubeSet = undefined;
            }

            if (this.currentMoveCubeSet && this.currentMoveTime >= this.moveDownSpeed) {
              this.currentMoveTime = 0;
              this.currentMoveCubeSet.moveDown().then(function (type) {
                if (!type) {
                  var setData = _this2.currentMoveCubeSet.getSetData();

                  var currentPos = _this2.currentMoveCubeSet.getCurrentPos();

                  for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                      var result = setData.getValue(j, i);

                      if (result === 1) {
                        var lie = currentPos.lie + j;
                        var hang = currentPos.hang - i;

                        _this2.myMapData.setValue(lie, hang, 1);
                      }
                    }
                  }

                  _this2.currentMoveCubeSet = undefined;
                  _this2.currentMoveTime = 0; //下落完成 更新地图
                  // console.log("移动失败");
                  // this.gameState = 'over';

                  if (currentPos.hang >= _this2.hieghtCount) {
                    _this2.gameState = 'over';
                    console.log("游戏失败");
                  }
                } else {}
              });
            } else {
              this.currentMoveTime += dt;
            }
          }
        }, {
          key: "createOneCubeNode",
          value: function createOneCubeNode() {
            var node = instantiate(this.cubePrefab);
            node.parent = this.node;
            return node;
          }
        }, {
          key: "getMapSize",
          value: function getMapSize() {
            return {
              width: this.widthCount,
              height: this.hieghtCount
            };
          }
        }, {
          key: "getCubeDistance",
          value: function getCubeDistance() {
            return this.cubeDistance;
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(event, customData) {
            console.log("on button click", customData);

            if (customData === 'left' || customData === 'right') {
              if (this.currentMoveCubeSet) {
                this.currentMoveCubeSet.toMove(customData);
              }
            }
          }
        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "widthCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hieghtCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cubeDistance", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9lbHVvc2ljdWJlL2Fzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJDQ0ludGVnZXIiLCJpbnN0YW50aWF0ZSIsInYzIiwiQ3ViZVNldCIsIkN1YmVHcm91cFR5cGUiLCJNeTJkQXJyYXkiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lTWFuYWdlciIsInR5cGUiLCJjdXJyZW50U2hvd0N1YmVTZXQiLCJjdXJyZW50TW92ZUN1YmVTZXQiLCJteU1hcERhdGEiLCJ3aWR0aENvdW50IiwiaGllZ2h0Q291bnQiLCJjdXJyZW50TW92ZVRpbWUiLCJnYW1lU3RhdGUiLCJtb3ZlRG93blNwZWVkIiwiZHJhd0ZyYW1lIiwiY3ViZURpc3RhbmNlIiwieCIsInkiLCJyZXN1bHQiLCJnZXRWYWx1ZSIsImNlbnRQb3MiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlndCIsImkiLCJqIiwibm9kZSIsImN1YmVQcmVmYWIiLCJwYXJlbnQiLCJzZXRQb3NpdGlvbiIsImFkZCIsImR0IiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsInJhbmRvbUluZGV4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY3ViZVNldCIsInNob3ciLCJ1bmRlZmluZWQiLCJtb3ZlRG93biIsInRoZW4iLCJzZXREYXRhIiwiZ2V0U2V0RGF0YSIsImN1cnJlbnRQb3MiLCJnZXRDdXJyZW50UG9zIiwibGllIiwiaGFuZyIsInNldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiZXZlbnQiLCJjdXN0b21EYXRhIiwidG9Nb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFB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QUFMLEdBQWMsS0FBS0YsSUFBbkI7QUFDQSxtQkFBT0EsSUFBUDtBQUNIOzs7dUNBQ1k7QUFDVCxtQkFBTztBQUFFMkIsY0FBQUEsS0FBSyxFQUFFLEtBQUszQyxVQUFkO0FBQTBCNEMsY0FBQUEsTUFBTSxFQUFFLEtBQUszQztBQUF2QyxhQUFQO0FBQ0g7Ozs0Q0FDeUI7QUFDdEIsbUJBQU8sS0FBS0ssWUFBWjtBQUNIOzs7d0NBQ2F1QyxLLEVBQWNDLFUsRUFBb0I7QUFDNUNMLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCSSxVQUEvQjs7QUFDQSxnQkFBSUEsVUFBVSxLQUFJLE1BQWQsSUFBd0JBLFVBQVUsS0FBSyxPQUEzQyxFQUFtRDtBQUMvQyxrQkFBSSxLQUFLaEQsa0JBQVQsRUFBNEI7QUFDeEIscUJBQUtBLGtCQUFMLENBQXdCaUQsTUFBeEIsQ0FBK0JELFVBQS9CO0FBQ0g7QUFDSjtBQUNKOzs7O1FBakk0QjdELFM7Ozs7O2lCQUVELEk7Ozs7Ozs7aUJBRUEsQzs7Ozs7OztpQkFFQyxFOzs7Ozs7O2lCQUVDLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgQ0NJbnRlZ2VyLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzMsIGlzVmFsaWQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBDdWJlU2V0LCBDdWJlR3JvdXBUeXBlIH0gZnJvbSBcIi4vQ3ViZUdyb3VwXCI7XG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vTXkyQXJyYXknO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbkBjY2NsYXNzKCdHYW1lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHB1YmxpYyBjdWJlUHJlZmFiOiBQcmVmYWIgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXG4gICAgcHVibGljIHdpZHRoQ291bnQ6IG51bWJlciA9IDg7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXG4gICAgcHVibGljIGhpZWdodENvdW50OiBudW1iZXIgPSAxMjtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcbiAgICBwdWJsaWMgY3ViZURpc3RhbmNlOiBudW1iZXIgPSAxLjE7XG5cblxuICAgIHByaXZhdGUgY3VycmVudFNob3dDdWJlU2V0OiBDdWJlU2V0ID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlQ3ViZVNldDogQ3ViZVNldCA9IG51bGw7XG4gICAgcHJpdmF0ZSBteU1hcERhdGE6IE15MmRBcnJheTxudW1iZXI+ID0gbmV3IE15MmRBcnJheSh0aGlzLndpZHRoQ291bnQsIHRoaXMuaGllZ2h0Q291bnQsIDApO1xuICAgIHByaXZhdGUgY3VycmVudE1vdmVUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBzdHJpbmcgPSBcInJlYWR5XCI7XG4gICAgcHJpdmF0ZSBtb3ZlRG93blNwZWVkOiBudW1iZXIgPSAwLjU7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZHJhd0ZyYW1lKHYzKCgodGhpcy53aWR0aENvdW50ICsgMikgKiAtMC41ICsgMykgKiB0aGlzLmN1YmVEaXN0YW5jZSwgMTQgKiB0aGlzLmN1YmVEaXN0YW5jZSwgMCksIDYsIDYpO1xuICAgICAgICB0aGlzLmRyYXdGcmFtZSh2MygwLCAwLCAwKSwgdGhpcy53aWR0aENvdW50ICsgMiwgdGhpcy5oaWVnaHRDb3VudCArIDIpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9ICdydW4nO1xuICAgIH1cbiAgICBjaGVja0lzTnVsbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBpZiAoeSA8IDAgfHwgeSA+PSB0aGlzLndpZHRoQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ID49IHRoaXMuaGllZ2h0Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm15TWFwRGF0YS5nZXRWYWx1ZSh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZHJhd0ZyYW1lKGNlbnRQb3M6IFZlYzMsIGZyYW1lV2lkdGg6IG51bWJlciwgZnJhbWVIZWlndDogbnVtYmVyKSB7XG4gICAgICAgIC8v57uY5Yi26L655qGGXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZyYW1lV2lkdGgpOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gKGZyYW1lV2lkdGggLSAxKSAqIC0wLjUgKiB0aGlzLmN1YmVEaXN0YW5jZSArIGkgKiB0aGlzLmN1YmVEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IChmcmFtZUhlaWd0IC0gMSkgKiAtMC41ICogdGhpcy5jdWJlRGlzdGFuY2UgKyBqICogKGZyYW1lSGVpZ3QgLSAxKSAqIHRoaXMuY3ViZURpc3RhbmNlO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odjMoeCwgeSwgMCkuYWRkKGNlbnRQb3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lSGVpZ3QgLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gKGZyYW1lSGVpZ3QgLSAzKSAqIC0wLjUgKiB0aGlzLmN1YmVEaXN0YW5jZSArIGkgKiB0aGlzLmN1YmVEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IChmcmFtZVdpZHRoIC0gMSkgKiAtMC41ICogdGhpcy5jdWJlRGlzdGFuY2UgKyBqICogKGZyYW1lV2lkdGggLSAxKSAqIHRoaXMuY3ViZURpc3RhbmNlO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odjMoeCwgeSwgMCkuYWRkKGNlbnRQb3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgIT09ICdydW4nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTaG93Q3ViZVNldCkge1xuICAgICAgICAgICAgLy/lpoLmnpzlvZPliY3mmL7npLrnmoTmlrnlnZfkuI3lj6/nlKjvvIzpgqPkuYjliJvlu7rkuIDkuKrmmL7npLrnmoTmlrnlnZdcbiAgICAgICAgICAgIC8v6ZqP5py65LiA5Liq5p6a5Li+5YC8XG4gICAgICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSBPYmplY3Qua2V5cyhDdWJlR3JvdXBUeXBlKS5sZW5ndGggLyAyO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGhcIiwgbGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChsZW5ndGggLSAxKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmRvbSBpbmRleFwiLCByYW5kb21JbmRleCk7XG4gICAgICAgICAgICAvLyBsZXQgdHlwZSA9IEN1YmVHcm91cFR5cGVbcmFuZG9tSW5kZXhdXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumaj+acuuWIsOeahCB0eXBlXCIsIHR5cGUpO1xuICAgICAgICAgICAgbGV0IGN1YmVTZXQgPSBuZXcgQ3ViZVNldChyYW5kb21JbmRleCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG93Q3ViZVNldCA9IGN1YmVTZXQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG93Q3ViZVNldC5zaG93KHYzKC0zLjMsIDE1LCAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvd0N1YmVTZXQgJiYgIXRoaXMuY3VycmVudE1vdmVDdWJlU2V0KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlQ3ViZVNldCA9IHRoaXMuY3VycmVudFNob3dDdWJlU2V0O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvd0N1YmVTZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVDdWJlU2V0ICYmIHRoaXMuY3VycmVudE1vdmVUaW1lID49IHRoaXMubW92ZURvd25TcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUN1YmVTZXQubW92ZURvd24oKS50aGVuKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXREYXRhOiBNeTJkQXJyYXk8bnVtYmVyPiA9IHRoaXMuY3VycmVudE1vdmVDdWJlU2V0LmdldFNldERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLmN1cnJlbnRNb3ZlQ3ViZVNldC5nZXRDdXJyZW50UG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzZXREYXRhLmdldFZhbHVlKGosIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpZSA9IGN1cnJlbnRQb3MubGllICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmcgPSBjdXJyZW50UG9zLmhhbmcgLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15TWFwRGF0YS5zZXRWYWx1ZShsaWUsIGhhbmcsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlQ3ViZVNldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVRpbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvL+S4i+iQveWujOaIkCDmm7TmlrDlnLDlm75cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnp7vliqjlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVN0YXRlID0gJ292ZXInO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcy5oYW5nID49IHRoaXMuaGllZ2h0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gJ292ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/lpLHotKVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlVGltZSArPSBkdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVPbmVDdWJlTm9kZSgpIHtcbiAgICAgICAgbGV0IG5vZGU6IE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGdldE1hcFNpemUoKSB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB0aGlzLndpZHRoQ291bnQsIGhlaWdodDogdGhpcy5oaWVnaHRDb3VudCB9XG4gICAgfVxuICAgIGdldEN1YmVEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jdWJlRGlzdGFuY2U7XG4gICAgfVxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQ6IEV2ZW50LCBjdXN0b21EYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBidXR0b24gY2xpY2tcIiwgY3VzdG9tRGF0YSk7XG4gICAgICAgIGlmIChjdXN0b21EYXRhID09PSdsZWZ0JyB8fCBjdXN0b21EYXRhID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlQ3ViZVNldCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUN1YmVTZXQudG9Nb3ZlKGN1c3RvbURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19