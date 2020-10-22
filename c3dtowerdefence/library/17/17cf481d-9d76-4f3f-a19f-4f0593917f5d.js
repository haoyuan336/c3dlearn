System.register(["cc", "code-quality:cr", "../BaseObject.js", "../GameInstance.js", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Tween, BaseObject, GameInstance, State, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBullet;

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

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../GameInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../util/State", _context.meta, extras);
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
      Node = _cc.Node;
      v3 = _cc.v3;
      Tween = _cc.Tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "17cf4gdnXZPP6GfTwWTkX9d", "EnemyBullet", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyBullet", EnemyBullet = (_dec = ccclass('EnemyBullet'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(EnemyBullet, _ref);

        function EnemyBullet() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyBullet);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyBullet)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.accY = -1;
          _this.currentSpeed = 0;
          _this.endPos = null;

          _initializerDefineProperty(_this, "caidaiEffect", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyBullet, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.state.addState("move-end", function () {
              // console.log("移动结束, 可以爆炸了");
              var tw = new Tween(_this2.rootNode);
              tw.to(0.1, {
                scale: v3(2, 2, 2)
              });
              tw.hide();
              tw.call(function () {
                //爆炸结束
                // this.gameController.enemyAttacked(this.getBaseAttackDamage());
                (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
                  error: Error()
                }), GameInstance) : GameInstance).getInstance().getGameCtlNode().emit("enemy-to-attacked", _this2.getBaseAttackDamage());
                _this2.caidaiEffect.active = true;
              });
              tw.delay(0.8 + Math.random() * 0.5), tw.call(function () {
                _this2.caidaiEffect.active = false;

                _this2.node.destroy();
              });
              tw.start();
            });
          }
        }, {
          key: "init",
          value: function init(gameConfig, endPos) {
            _get(_getPrototypeOf(EnemyBullet.prototype), "init", this).call(this, gameConfig);

            this.endPos = endPos;
            this.caidaiEffect.eulerAngles = v3(0, Math.random() * 360, 0);
            var scale = Math.random() * 0.2 + 0.8;
            this.caidaiEffect.scale = v3(scale, scale, scale);
            this.state.setState("run");
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.state.getState() === "run") {
              //如果游戏的状态是run ，那么鸡蛋做自由落体运动
              this.currentSpeed += this.accY; // this.node.position.add(v3(0,this.currentSpeed * deltaTime,0))

              this.node.position = v3(this.node.position).add(v3(0, this.currentSpeed * deltaTime, 0));
              var dis = this.node.position.y - this.endPos.y;

              if (dis < 1) {
                // console.log("停止");
                this.state.setState("move-end");
              }
            }
          }
        }]);

        return EnemyBullet;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "caidaiEffect", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCdWxsZXQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJ2MyIsIlR3ZWVuIiwiQmFzZU9iamVjdCIsIkdhbWVJbnN0YW5jZSIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlCdWxsZXQiLCJ0eXBlIiwic3RhdGUiLCJhY2NZIiwiY3VycmVudFNwZWVkIiwiZW5kUG9zIiwiYWRkU3RhdGUiLCJ0dyIsInJvb3ROb2RlIiwidG8iLCJzY2FsZSIsImhpZGUiLCJjYWxsIiwiZ2V0SW5zdGFuY2UiLCJnZXRHYW1lQ3RsTm9kZSIsImVtaXQiLCJnZXRCYXNlQXR0YWNrRGFtYWdlIiwiY2FpZGFpRWZmZWN0IiwiYWN0aXZlIiwiZGVsYXkiLCJNYXRoIiwicmFuZG9tIiwibm9kZSIsImRlc3Ryb3kiLCJzdGFydCIsImdhbWVDb25maWciLCJldWxlckFuZ2xlcyIsInNldFN0YXRlIiwiZGVsdGFUaW1lIiwiZ2V0U3RhdGUiLCJwb3NpdGlvbiIsImFkZCIsImRpcyIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSyxPQUFBQSxLOzs7O0FBQ3ZDQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUVBQyxNQUFBQSxLLGdCQUFBQSxLOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxVQU1IQyxRQUFRLENBQUM7QUFBRUUs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djMsIFR3ZWVuIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVJbnN0YW5jZSB9IGZyb20gJy4uL0dhbWVJbnN0YW5jZSc7XHJcbi8vIGltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3V0aWwvU3RhdGUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15QnVsbGV0JylcclxuZXhwb3J0IGNsYXNzIEVuZW15QnVsbGV0IGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhY2NZOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgY3VycmVudFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGNhaWRhaUVmZmVjdDogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwibW92ZS1lbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuenu+WKqOe7k+adnywg5Y+v5Lul54iG54K45LqGXCIpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHYzKDIsIDIsIDIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LmhpZGUoKVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v54iG54K457uT5p2fXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmVuZW15QXR0YWNrZWQodGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCkuZ2V0R2FtZUN0bE5vZGUoKS5lbWl0KFwiZW5lbXktdG8tYXR0YWNrZWRcIiwgdGhpcy5nZXRCYXNlQXR0YWNrRGFtYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuZGVsYXkoMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuNSksXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lQ29uZmlnLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xyXG4gICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmV1bGVyQW5nbGVzID0gdjMoMCwgTWF0aC5yYW5kb20oKSAqIDM2MCwgMClcclxuICAgICAgICBsZXQgc2NhbGUgPSBNYXRoLnJhbmRvbSgpICogMC4yICsgMC44O1xyXG4gICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LnNjYWxlID0gdjMoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09IFwicnVuXCIpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmuLjmiI/nmoTnirbmgIHmmK9ydW4g77yM6YKj5LmI6bih6JuL5YGa6Ieq55Sx6JC95L2T6L+Q5YqoXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkICs9IHRoaXMuYWNjWTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2MygwLHRoaXMuY3VycmVudFNwZWVkICogZGVsdGFUaW1lLDApKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB2Myh0aGlzLm5vZGUucG9zaXRpb24pLmFkZCh2MygwLCB0aGlzLmN1cnJlbnRTcGVlZCAqIGRlbHRhVGltZSwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSB0aGlzLmVuZFBvcy55O1xyXG4gICAgICAgICAgICBpZiAoZGlzIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlgZzmraJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwibW92ZS1lbmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19