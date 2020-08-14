System.register(["cc", "code-quality:cr", "./PlayerController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, v3, LabelComponent, PlayerController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, BlockType, GameState, GameManager;

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

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
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
    _temp: void 0,
    BlockType: void 0,
    GameState: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      LabelComponent = _cc.LabelComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_PlayerControllerJs) {
      PlayerController = _PlayerControllerJs.PlayerController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b469frCjIdHI49uBFmMmx5Y", "GameManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
      })(BlockType || (BlockType = {}));

      (function (GameState) {
        GameState[GameState["GS_INIT"] = 0] = "GS_INIT";
        GameState[GameState["GS_PLAYING"] = 1] = "GS_PLAYING";
        GameState[GameState["GS_END"] = 2] = "GS_END";
      })(GameState || (GameState = {}));

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: LabelComponent
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

          _initializerDefineProperty(_this, "cubePrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "roadLength", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerCtl", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startMenu", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "stepLabel", _descriptor5, _assertThisInitialized(_this));

          _this._road = [];
          _this._curState = GameState.GS_INIT;
          return _this;
        }

        _createClass(GameManager, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this._curState = GameState.GS_INIT;
            this.playerCtl.node.on("JumpEnd", this.onPlayerJumpEnd, this);
          }
        }, {
          key: "onPlayerJumpEnd",
          value: function onPlayerJumpEnd(index) {
            this.checkResult(index);
          }
        }, {
          key: "init",
          value: function init() {
            this.startMenu.active = true;
            this.generateRoad();
            this.playerCtl.setInputActive(false);
            this.playerCtl.node.setPosition(v3());
            this.playerCtl.reset();
          }
        }, {
          key: "checkResult",
          value: function checkResult(moveIndex) {
            this.stepLabel.string = moveIndex + '';

            if (moveIndex < this.roadLength) {
              if (this._road[moveIndex] === BlockType.BT_NONE) {
                this.curState = GameState.GS_INIT;
              }
            } else {
              this.curState = GameState.GS_END;
            }
          }
        }, {
          key: "onStartButtonClick",
          value: function onStartButtonClick() {
            this.curState = GameState.GS_PLAYING;
          }
        }, {
          key: "generateRoad",
          value: function generateRoad() {
            this.node.removeAllChildren();
            this._road = [];

            this._road.push(BlockType.BT_STONE);

            for (var i = 1; i < this.roadLength; i++) {
              if (this._road[i - 1] === BlockType.BT_NONE) {
                this._road.push(BlockType.BT_STONE);
              } else {
                this._road.push(Math.floor(Math.random() * 2));
              }
            }

            for (var _i = 0; _i < this._road.length; _i++) {
              var block = this.spawnBlockBuType(this._road[_i]);

              if (block) {
                block.parent = this.node;
                block.setPosition(_i, -1.5, 0);
              }
            }
          }
        }, {
          key: "spawnBlockBuType",
          value: function spawnBlockBuType(type) {
            var block = null;

            switch (type) {
              case BlockType.BT_STONE:
                block = instantiate(this.cubePrfb);
                break;
            }

            return block;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "curState",
          set: function set(value) {
            var _this2 = this;

            switch (value) {
              case GameState.GS_INIT:
                this.init();
                break;

              case GameState.GS_PLAYING:
                this.startMenu.active = false;
                this.stepLabel.string = "0";
                this.generateRoad();
                setTimeout(function () {
                  _this2.playerCtl.setInputActive(true);
                }, 100);
                break;

              case GameState.GS_END:
                break;
            }

            this._curState = value;
          }
        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerCtl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMenu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stepLabel", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2RMZWFybl8wMDIvYXNzZXRzL1NjcmlwdHMvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiTGFiZWxDb21wb25lbnQiLCJQbGF5ZXJDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmxvY2tUeXBlIiwiR2FtZVN0YXRlIiwiR2FtZU1hbmFnZXIiLCJ0eXBlIiwiTnVtYmVyIiwiX3JvYWQiLCJfY3VyU3RhdGUiLCJHU19JTklUIiwicGxheWVyQ3RsIiwibm9kZSIsIm9uIiwib25QbGF5ZXJKdW1wRW5kIiwiaW5kZXgiLCJjaGVja1Jlc3VsdCIsInN0YXJ0TWVudSIsImFjdGl2ZSIsImdlbmVyYXRlUm9hZCIsInNldElucHV0QWN0aXZlIiwic2V0UG9zaXRpb24iLCJyZXNldCIsIm1vdmVJbmRleCIsInN0ZXBMYWJlbCIsInN0cmluZyIsInJvYWRMZW5ndGgiLCJCVF9OT05FIiwiY3VyU3RhdGUiLCJHU19FTkQiLCJHU19QTEFZSU5HIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJwdXNoIiwiQlRfU1RPTkUiLCJpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiYmxvY2siLCJzcGF3bkJsb2NrQnVUeXBlIiwicGFyZW50IiwiY3ViZVByZmIiLCJ2YWx1ZSIsImluaXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBa0RDLE1BQUFBLEUsT0FBQUEsRTtBQUFJ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RVAsR0FGTyxDQUFWO0FBR0E7O0FBQ0osbUJBQUtoQixTQUFTLENBQUN5QixNQUFmO0FBRUk7QUFkUjs7QUFnQkEsaUJBQUtwQixTQUFMLEdBQWlCa0MsS0FBakI7QUFDSDs7OztRQWpFNEJqRCxTOzs7OztpQkFRSCxJOzs7Ozs7O2lCQUVFLEU7Ozs7Ozs7aUJBRVMsSTs7Ozs7OztpQkFFWixJOzs7Ozs7O2lCQUVXLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIENDSW50ZWdlciwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCB2MywgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQbGF5ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9QbGF5ZXJDb250cm9sbGVyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmVudW0gQmxvY2tUeXBlIHtcbiAgICBCVF9OT05FLFxuICAgIEJUX1NUT05FXG59XG5lbnVtIEdhbWVTdGF0ZSB7XG4gICAgR1NfSU5JVCxcbiAgICBHU19QTEFZSU5HLFxuICAgIEdTX0VORFxufVxuQGNjY2xhc3MoJ0dhbWVNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXG4gICAgcHVibGljIGN1YmVQcmZiOiBQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICAgIHB1YmxpYyByb2FkTGVuZ3RoOiBOdW1iZXIgPSA1MDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQbGF5ZXJDb250cm9sbGVyIH0pXG4gICAgcHVibGljIHBsYXllckN0bDogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHB1YmxpYyBzdGFydE1lbnU6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogTGFiZWxDb21wb25lbnR9KVxuICAgIHB1YmxpYyBzdGVwTGFiZWw6IExhYmVsQ29tcG9uZW50ID0gIG51bGw7XG4gICAgcHJpdmF0ZSBfcm9hZDogbnVtYmVyW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2N1clN0YXRlOiBHYW1lU3RhdGUgPSBHYW1lU3RhdGUuR1NfSU5JVDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5fY3VyU3RhdGUgPSBHYW1lU3RhdGUuR1NfSU5JVDtcbiAgICAgICAgdGhpcy5wbGF5ZXJDdGwubm9kZS5vbihcIkp1bXBFbmRcIix0aGlzLm9uUGxheWVySnVtcEVuZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uUGxheWVySnVtcEVuZChpbmRleDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5jaGVja1Jlc3VsdChpbmRleCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRNZW51LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSb2FkKCk7XG4gICAgICAgIHRoaXMucGxheWVyQ3RsLnNldElucHV0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDdGwubm9kZS5zZXRQb3NpdGlvbih2MygpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDdGwucmVzZXQoKTtcblxuICAgIH1cbiAgICBjaGVja1Jlc3VsdChtb3ZlSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0ZXBMYWJlbC5zdHJpbmcgPSBtb3ZlSW5kZXggKyAnJztcbiAgICAgICAgaWYgKG1vdmVJbmRleCA8IHRoaXMucm9hZExlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JvYWRbbW92ZUluZGV4XSA9PT0gQmxvY2tUeXBlLkJUX05PTkUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clN0YXRlID0gR2FtZVN0YXRlLkdTX0lOSVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1clN0YXRlID0gR2FtZVN0YXRlLkdTX0VORDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgY3VyU3RhdGUodmFsdWU6IEdhbWVTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5HU19JTklUOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuR1NfUExBWUlORzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TWVudS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBMYWJlbC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUm9hZCgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0bC5zZXRJbnB1dEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuR1NfRU5EOlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VyU3RhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvblN0YXJ0QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY3VyU3RhdGUgPSBHYW1lU3RhdGUuR1NfUExBWUlORztcbiAgICB9XG4gICAgZ2VuZXJhdGVSb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5fcm9hZCA9IFtdO1xuICAgICAgICB0aGlzLl9yb2FkLnB1c2goQmxvY2tUeXBlLkJUX1NUT05FKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnJvYWRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JvYWRbaSAtIDFdID09PSBCbG9ja1R5cGUuQlRfTk9ORSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvYWQucHVzaChCbG9ja1R5cGUuQlRfU1RPTkUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvYWQucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yb2FkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2s6IE5vZGUgPSB0aGlzLnNwYXduQmxvY2tCdVR5cGUodGhpcy5fcm9hZFtpXSk7XG4gICAgICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgICAgICBibG9jay5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaSwgLTEuNSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3Bhd25CbG9ja0J1VHlwZSh0eXBlOiBCbG9ja1R5cGUpIHtcbiAgICAgICAgbGV0IGJsb2NrID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJsb2NrVHlwZS5CVF9TVE9ORTpcbiAgICAgICAgICAgICAgICBibG9jayA9IGluc3RhbnRpYXRlKHRoaXMuY3ViZVByZmIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja1xuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19