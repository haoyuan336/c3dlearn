System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js", "./BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, v3, v2, ColliderComponent, State, GameController, BaseObject, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BulletBase;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./BaseObject", _context.meta, extras);
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
      v2 = _cc.v2;
      ColliderComponent = _cc.ColliderComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "90e683Z9ntM7pLuSDO8IdqW", "BulletBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BulletBase", BulletBase = (_dec = ccclass('BulletBase'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(BulletBase, _ref);

        function BulletBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BulletBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BulletBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.speedY = 0;
          _this.accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).accY;
          _this.currentDirection = v2(0, 0);
          _this.moveSpeed = 20;
          _this.currentInitSpeedY = 6;
          _this.currentCostAcc = -3;

          _initializerDefineProperty(_this, "bodyNode", _descriptor, _assertThisInitialized(_this));

          _this.maxLeftTime = 3 + Math.random();
          _this.colliderComponent = null;
          _this.baseAttackNum = 0;
          _this.gameConfigJson = {};
          return _this;
        }

        _createClass(BulletBase, [{
          key: "onLoad",
          //游戏配置
          value: function onLoad() {
            var _this2 = this;

            // this.node.on("init-data", (data) => {
            // });
            this.state.addState("sleep", function () {
              _this2.bodyNode.active = false;
            }); // this.state.addState("to-dead", ()=>{
            // });

            this.scheduleOnce(function () {
              _this2.node.destroy();
            }, this.maxLeftTime);
          }
        }, {
          key: "init",
          value: function init(data) {
            var direction = data.direction;
            this.currentDirection = direction;
            var targetEnemy = data.targetEnemy;
            this.gameConfigJson = data.gameConfigJson;
            this.baseAttackNum = this.gameConfigJson[this.objectType].BaseAttackNum;
            this.state.setState("run");
            var s = this.node.getPosition().y * 2 / this.accY * -1; // console.log("s", s);

            var moveTime = Math.sqrt(s);
            var dis = v2(this.node.position.x, this.node.position.z).subtract(v2(targetEnemy.position.x, targetEnemy.position.z)).length();
            this.moveSpeed = dis / moveTime;
            this.colliderComponent = this.node.getComponent(ColliderComponent); // //获取碰撞组件
            // console.log("node uuid", this.node.uuid);
            // console.log("collider:", this.colliderComponent)

            this.colliderComponent.on("onTriggerEnter", this.onTriggerEnter.bind(this));
          }
        }, {
          key: "onTriggerEnter",
          value: function onTriggerEnter(event) {
            // console.log("onTriggerEnter", event);
            // this.state.setState("sleep");
            var otherCollider = event.otherCollider;

            if (otherCollider) {
              otherCollider.node.emit("be-attacked", this.baseAttackNum);
            }
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
            // this.colliderComponent = this.node.getComponent(BulletBase);
            // //获取碰撞组件
            // console.log("node uuid", this.node.uuid);
            // console.log("collider:", JSON.stringify(this.colliderComponent));
            // this.colliderComponent.on("onCollisionEnter",this.onCollisionEnter.bind(this));
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.state.getState() === 'run') {
              //
              this.speedY += this.accY * deltaTime;
              var pos = this.node.position;
              var y = pos.y + this.speedY * deltaTime;
              var direction = this.currentDirection.normalize();
              var v = direction.multiplyScalar(this.moveSpeed * deltaTime); // console.log("v", v);

              this.node.setPosition(v3(pos.x + v.x, y, pos.z + v.y));

              if (this.node.getPosition().y <= 0) {
                // this.node.destroy()
                this.speedY = this.currentInitSpeedY;
                this.currentInitSpeedY += this.currentCostAcc;

                if (this.currentInitSpeedY < 0) {
                  this.state.setState('sleep');
                }
              }
            }
          }
        }]);

        return BulletBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bodyNode", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJ2MiIsIkNvbGxpZGVyQ29tcG9uZW50IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXRCYXNlIiwidHlwZSIsInN0YXRlIiwic3BlZWRZIiwiYWNjWSIsImN1cnJlbnREaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJjdXJyZW50SW5pdFNwZWVkWSIsImN1cnJlbnRDb3N0QWNjIiwibWF4TGVmdFRpbWUiLCJNYXRoIiwicmFuZG9tIiwiY29sbGlkZXJDb21wb25lbnQiLCJiYXNlQXR0YWNrTnVtIiwiZ2FtZUNvbmZpZ0pzb24iLCJhZGRTdGF0ZSIsImJvZHlOb2RlIiwiYWN0aXZlIiwic2NoZWR1bGVPbmNlIiwibm9kZSIsImRlc3Ryb3kiLCJkYXRhIiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiLCJvYmplY3RUeXBlIiwiQmFzZUF0dGFja051bSIsInNldFN0YXRlIiwicyIsImdldFBvc2l0aW9uIiwieSIsIm1vdmVUaW1lIiwic3FydCIsImRpcyIsInBvc2l0aW9uIiwieCIsInoiLCJzdWJ0cmFjdCIsImxlbmd0aCIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJiaW5kIiwiZXZlbnQiLCJvdGhlckNvbGxpZGVyIiwiZW1pdCIsImRlbHRhVGltZSIsImdldFN0YXRlIiwicG9zIiwibm9ybWFsaXplIiwidiIsIm11bHRpcGx5U2NhbGFyIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FB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QUF5QixDQUE3QixFQUFnQztBQUM1Qix1QkFBS0wsS0FBTCxDQUFXd0IsUUFBWCxDQUFvQixPQUFwQjtBQUVIO0FBQ0o7QUFFSjtBQUNKOzs7Ozs7Ozs7OztpQkFuRnVCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHYzLCB2MiwgVmVjMiwgbWF0aCwgQ29sbGlkZXJDb21wb25lbnQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBUcmlnZ2VyRXZlbnRUeXBlLCBJVHJpZ2dlckV2ZW50IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7QmFzZU9iamVjdH0gZnJvbSAnLi9CYXNlT2JqZWN0J1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1bGxldEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgQnVsbGV0QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgc3BlZWRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY2NZOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5hY2NZO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0aW9uOiBWZWMyID0gdjIoMCwgMCk7XHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbml0U3BlZWRZID0gNjsgLy/lvLnotbfnmoTliJ3lp4vpgJ/luqZcclxuICAgIHByaXZhdGUgY3VycmVudENvc3RBY2MgPSAtMzsgICAvL+W8uei1t+eahOiDvemHj+aNn+WksVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGJvZHlOb2RlOiBOb2RlID0gbnVsbDsvL+i6q+S9k1xyXG4gICAgcHJpdmF0ZSBtYXhMZWZ0VGltZTogbnVtYmVyID0gMyArIE1hdGgucmFuZG9tKCk7IC8v5pyA5aSn55Sf5a2Y5pe26Ze0XHJcbiAgICBwcml2YXRlIGNvbGxpZGVyQ29tcG9uZW50OiBDb2xsaWRlckNvbXBvbmVudCA9IG51bGw7IC8v56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgcHJvdGVjdGVkIGJhc2VBdHRhY2tOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye75YC8XHJcbiAgICBwcm90ZWN0ZWQgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IHt9OyAvL+a4uOaIj+mFjee9rlxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImluaXQtZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInNsZWVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKT0+e1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcy5tYXhMZWZ0VGltZSlcclxuXHJcblxyXG4gICAgfVxyXG4gICAgaW5pdChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICBsZXQgdGFyZ2V0RW5lbXk6IE5vZGUgPSBkYXRhLnRhcmdldEVuZW15O1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBkYXRhLmdhbWVDb25maWdKc29uO1xyXG4gICAgICAgIHRoaXMuYmFzZUF0dGFja051bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55ICogMiAvIHRoaXMuYWNjWSAqIC0xO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic1wiLCBzKTtcclxuICAgICAgICBsZXQgbW92ZVRpbWU6IG51bWJlciA9IE1hdGguc3FydChzKTtcclxuICAgICAgICBsZXQgZGlzOiBudW1iZXIgPSB2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopLnN1YnRyYWN0KHYyKHRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRhcmdldEVuZW15LnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IGRpcyAvIG1vdmVUaW1lO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAvL+iOt+WPlueisOaSnue7hOS7tlxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCB0aGlzLmNvbGxpZGVyQ29tcG9uZW50KVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQub24oXCJvblRyaWdnZXJFbnRlclwiLCB0aGlzLm9uVHJpZ2dlckVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb25UcmlnZ2VyRW50ZXIoZXZlbnQ6IElUcmlnZ2VyRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uVHJpZ2dlckVudGVyXCIsIGV2ZW50KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwic2xlZXBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG90aGVyQ29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gZXZlbnQub3RoZXJDb2xsaWRlcjtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5lbWl0KFwiYmUtYXR0YWNrZWRcIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSk7XHJcbiAgICAgICAgLy8gLy/ojrflj5bnorDmkp7nu4Tku7ZcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2RlIHV1aWRcIiwgdGhpcy5ub2RlLnV1aWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlkZXI6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sbGlkZXJDb21wb25lbnQpKTtcclxuICAgICAgICAvLyB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25Db2xsaXNpb25FbnRlclwiLHRoaXMub25Db2xsaXNpb25FbnRlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyB0aGlzLnNwZWVkWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHYgPSBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgeSwgcG9zLnogKyB2LnkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgPD0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5jdXJyZW50SW5pdFNwZWVkWTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluaXRTcGVlZFkgKz0gdGhpcy5jdXJyZW50Q29zdEFjYztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbml0U3BlZWRZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3NsZWVwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=