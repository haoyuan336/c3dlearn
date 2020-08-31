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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwidjMiLCJ2MiIsIkNvbGxpZGVyQ29tcG9uZW50IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXRCYXNlIiwidHlwZSIsInN0YXRlIiwic3BlZWRZIiwiYWNjWSIsImN1cnJlbnREaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJjdXJyZW50SW5pdFNwZWVkWSIsImN1cnJlbnRDb3N0QWNjIiwibWF4TGVmdFRpbWUiLCJNYXRoIiwicmFuZG9tIiwiY29sbGlkZXJDb21wb25lbnQiLCJiYXNlQXR0YWNrTnVtIiwiZ2FtZUNvbmZpZ0pzb24iLCJhZGRTdGF0ZSIsImJvZHlOb2RlIiwiYWN0aXZlIiwic2NoZWR1bGVPbmNlIiwibm9kZSIsImRlc3Ryb3kiLCJkYXRhIiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiLCJvYmplY3RUeXBlIiwiQmFzZUF0dGFja051bSIsInNldFN0YXRlIiwicyIsImdldFBvc2l0aW9uIiwieSIsIm1vdmVUaW1lIiwic3FydCIsImRpcyIsInBvc2l0aW9uIiwieCIsInoiLCJzdWJ0cmFjdCIsImxlbmd0aCIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJiaW5kIiwiZXZlbnQiLCJvdGhlckNvbGxpZGVyIiwiZW1pdCIsImRlbHRhVGltZSIsImdldFN0YXRlIiwicG9zIiwibm9ybWFsaXplIiwidiIsIm11bHRpcGx5U2NhbGFyIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FB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QUF5QixDQUE3QixFQUFnQztBQUM1Qix1QkFBS0wsS0FBTCxDQUFXd0IsUUFBWCxDQUFvQixPQUFwQjtBQUVIO0FBQ0o7QUFFSjtBQUNKOzs7Ozs7Ozs7OztpQkFuRnVCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHYzLCB2MiwgVmVjMiwgbWF0aCwgQ29sbGlkZXJDb21wb25lbnQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBUcmlnZ2VyRXZlbnRUeXBlLCBJVHJpZ2dlckV2ZW50LCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuL0Jhc2VPYmplY3QnXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQnVsbGV0QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBCdWxsZXRCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBzcGVlZFk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjY1k6IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREaXJlY3Rpb246IFZlYzIgPSB2MigwLCAwKTtcclxuICAgIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAyMDtcclxuICAgIHByaXZhdGUgY3VycmVudEluaXRTcGVlZFkgPSA2OyAvL+W8uei1t+eahOWIneWni+mAn+W6plxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q29zdEFjYyA9IC0zOyAgIC8v5by56LW355qE6IO96YeP5o2f5aSxXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYm9keU5vZGU6IE5vZGUgPSBudWxsOy8v6Lqr5L2TXHJcbiAgICBwcml2YXRlIG1heExlZnRUaW1lOiBudW1iZXIgPSAzICsgTWF0aC5yYW5kb20oKTsgLy/mnIDlpKfnlJ/lrZjml7bpl7RcclxuICAgIHByaXZhdGUgY29sbGlkZXJDb21wb25lbnQ6IENvbGxpZGVyQ29tcG9uZW50ID0gbnVsbDsgLy/norDmkp7nu4Tku7ZcclxuXHJcbiAgICBwcm90ZWN0ZWQgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHByb3RlY3RlZCBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0ge307IC8v5ri45oiP6YWN572uXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiaW5pdC1kYXRhXCIsIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwic2xlZXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpPT57XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCB0aGlzLm1heExlZnRUaW1lKVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpbml0KGRhdGEpIHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGF0YS5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIGxldCB0YXJnZXRFbmVteTogTm9kZSA9IGRhdGEudGFyZ2V0RW5lbXk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGRhdGEuZ2FtZUNvbmZpZ0pzb247XHJcbiAgICAgICAgdGhpcy5iYXNlQXR0YWNrTnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICBsZXQgcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgKiAyIC8gdGhpcy5hY2NZICogLTE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzXCIsIHMpO1xyXG4gICAgICAgIGxldCBtb3ZlVGltZTogbnVtYmVyID0gTWF0aC5zcXJ0KHMpO1xyXG4gICAgICAgIGxldCBkaXM6IG51bWJlciA9IHYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueikuc3VidHJhY3QodjIodGFyZ2V0RW5lbXkucG9zaXRpb24ueCwgdGFyZ2V0RW5lbXkucG9zaXRpb24ueikpLmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gZGlzIC8gbW92ZVRpbWU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckNvbXBvbmVudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2RlIHV1aWRcIiwgdGhpcy5ub2RlLnV1aWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlkZXI6XCIsIHRoaXMuY29sbGlkZXJDb21wb25lbnQpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uVHJpZ2dlckVudGVyXCIsIHRoaXMub25UcmlnZ2VyRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBvblRyaWdnZXJFbnRlcihldmVudDogSVRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25UcmlnZ2VyRW50ZXJcIiwgZXZlbnQpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzbGVlcFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG90aGVyQ29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gZXZlbnQub3RoZXJDb2xsaWRlcjtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZW1pdChcImJlLWF0dGFja2VkXCIsIHRoaXMuYmFzZUF0dGFja051bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbGxpZGVyQ29tcG9uZW50KSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIix0aGlzLm9uQ29sbGlzaW9uRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5hY2NZICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHBvcy55ICsgdGhpcy5zcGVlZFkgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLmN1cnJlbnREaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGxldCB2ID0gZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2XCIsIHYpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odjMocG9zLnggKyB2LngsIHksIHBvcy56ICsgdi55KSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55IDw9IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuY3VycmVudEluaXRTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbml0U3BlZWRZICs9IHRoaXMuY3VycmVudENvc3RBY2M7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5pdFNwZWVkWSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdzbGVlcCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19