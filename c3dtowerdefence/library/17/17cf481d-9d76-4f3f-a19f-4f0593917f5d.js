System.register(["cc", "code-quality:cr", "../BaseObject.js", "../GameController.js", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, Tween, BaseObject, GameController, State, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EnemyBullet;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
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
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
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
          _this.accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).accY;
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
                _this2.gameController.enemyAttacked(_this2.getBaseAttackDamage());

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
          value: function init(gameConfig, gameCtl, endPos) {
            _get(_getPrototypeOf(EnemyBullet.prototype), "init", this).call(this, gameConfig, gameCtl);

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
                console.log("停止");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCdWxsZXQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJ2MyIsIlR3ZWVuIiwiQmFzZU9iamVjdCIsIkdhbWVDb250cm9sbGVyIiwiU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJ1bGxldCIsInR5cGUiLCJzdGF0ZSIsImFjY1kiLCJjdXJyZW50U3BlZWQiLCJlbmRQb3MiLCJhZGRTdGF0ZSIsInR3Iiwicm9vdE5vZGUiLCJ0byIsInNjYWxlIiwiaGlkZSIsImNhbGwiLCJnYW1lQ29udHJvbGxlciIsImVuZW15QXR0YWNrZWQiLCJnZXRCYXNlQXR0YWNrRGFtYWdlIiwiY2FpZGFpRWZmZWN0IiwiYWN0aXZlIiwiZGVsYXkiLCJNYXRoIiwicmFuZG9tIiwibm9kZSIsImRlc3Ryb3kiLCJzdGFydCIsImdhbWVDb25maWciLCJnYW1lQ3RsIiwiZXVsZXJBbmdsZXMiLCJzZXRTdGF0ZSIsImRlbHRhVGltZSIsImdldFN0YXRlIiwicG9zaXRpb24iLCJhZGQiLCJkaXMiLCJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDdkNDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxD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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MywgVHdlZW4gfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnRW5lbXlCdWxsZXQnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCdWxsZXQgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFjY1k6IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjYWlkYWlFZmZlY3Q6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJtb3ZlLWVuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi56e75Yqo57uT5p2fLCDlj6/ku6XniIbngrjkuoZcIik7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogdjMoMiwgMiwgMilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuaGlkZSgpXHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/niIbngrjnu5PmnZ9cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZW5lbXlBdHRhY2tlZCh0aGlzLmdldEJhc2VBdHRhY2tEYW1hZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaWRhaUVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5kZWxheSgwLjggKyBNYXRoLnJhbmRvbSgpICogMC41KSxcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FpZGFpRWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpbml0KGdhbWVDb25maWcsIGdhbWVDdGwsIGVuZFBvczogVmVjMykge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUN0bCk7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3QuZXVsZXJBbmdsZXMgPSB2MygwLCBNYXRoLnJhbmRvbSgpICogMzYwLCAwKVxyXG4gICAgICAgIGxldCBzY2FsZSA9IE1hdGgucmFuZG9tKCkgKiAwLjIgKyAwLjg7XHJcbiAgICAgICAgdGhpcy5jYWlkYWlFZmZlY3Quc2NhbGUgPSB2MyhzY2FsZSwgc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gXCJydW5cIikge1xyXG4gICAgICAgICAgICAvL+WmguaenOa4uOaIj+eahOeKtuaAgeaYr3J1biDvvIzpgqPkuYjpuKHom4vlgZroh6rnlLHokL3kvZPov5DliqhcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgKz0gdGhpcy5hY2NZO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHYzKDAsdGhpcy5jdXJyZW50U3BlZWQgKiBkZWx0YVRpbWUsMCkpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKHYzKDAsIHRoaXMuY3VycmVudFNwZWVkICogZGVsdGFUaW1lLCAwKSk7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLm5vZGUucG9zaXRpb24ueSAtIHRoaXMuZW5kUG9zLnk7XHJcbiAgICAgICAgICAgIGlmIChkaXMgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWBnOatolwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJtb3ZlLWVuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=