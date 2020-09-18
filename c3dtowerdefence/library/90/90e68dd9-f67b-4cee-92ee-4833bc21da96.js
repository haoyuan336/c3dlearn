System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js", "./BaseObject.js", "./Enemys/EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, v3, v2, Vec2, ColliderComponent, State, GameController, BaseObject, EnemyBase, _dec, _class, _temp, _crd, ccclass, property, BulletBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./Enemys/EnemyBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      v2 = _cc.v2;
      Vec2 = _cc.Vec2;
      ColliderComponent = _cc.ColliderComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "90e683Z9ntM7pLuSDO8IdqW", "BulletBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BulletBase", BulletBase = (_dec = ccclass('BulletBase'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
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
          _this.currentInitSpeedY = 6;
          _this.currentCostAcc = -3;
          _this.maxLeftTime = 1 + Math.random();
          _this.colliderComponent = null;
          _this.gameConfigJson = {};
          _this.targetTowerBase = null;
          return _this;
        }

        _createClass(BulletBase, [{
          key: "onLoad",
          //目标塔
          value: function onLoad() {
            // this.node.on("init-data", (data) => {
            // });
            this.state.addState("sleep", function () {// this.bodyNode.active = false;
            }); // this.state.addState("to-dead", ()=>{
            // });
          }
        }, {
          key: "init",
          value: function init(gameConfig, gameController, data) {
            var _this2 = this;

            _get(_getPrototypeOf(BulletBase.prototype), "init", this).call(this, gameConfig, gameController);

            this.baseAttackNum += data.baseAttackNum;
            this.targetTowerBase = data.targetTower; // console.log("base attack num", this.baseAttackNum);

            var direction = data.direction;
            this.currentDirection = direction;
            var angle = new Vec2(direction.x, direction.y).signAngle(v2(0, -1));
            this.node.eulerAngles = v3(0, angle * 180 / Math.PI, 0); // let targetEnemy: Node = data.targetEnemy;
            // if(targetEnemy){
            //     this.node.lookAt(targetEnemy.position);
            // }

            this.gameConfigJson = gameConfig; // this.baseAttackNum = this.gameConfigJson[this.objectType].BaseAttackNum;

            this.state.setState("run");
            var s = this.node.getPosition().y * 2 / this.accY * -1; // console.log("s", s);
            // let moveTime: number = Math.sqrt(s);
            // let dis: number = v2(this.node.position.x, this.node.position.z).subtract(v2(targetEnemy.position.x, targetEnemy.position.z)).length();
            // this.moveSpeed = dis / moveTime;

            this.colliderComponent = this.node.getComponent(ColliderComponent); // //获取碰撞组件
            // console.log("node uuid", this.node.uuid);
            // console.log("collider:", this.colliderComponent)

            this.colliderComponent.on("onTriggerEnter", this.onTriggerEnter.bind(this));
            this.scheduleOnce(function () {
              _this2.node.destroy();
            }, this.leftTime);
          }
        }, {
          key: "onTriggerEnter",
          value: function onTriggerEnter(event) {
            var _this3 = this;

            // console.log("onTriggerEnter", event);
            // this.state.setState("sleep");
            var otherCollider = event.otherCollider;

            if (otherCollider.node && otherCollider.node.name.indexOf("Wall") > 1) {
              console.log(" other collier node", otherCollider.node.name);
              this.node.destroy();
            }

            if (otherCollider && otherCollider.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase) && !otherCollider.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase).getIsDead()) {
              console.log("base attack num", this.baseAttackNum);
              otherCollider.node.emit("be-attacked", {
                baseAttackNum: this.baseAttackNum,
                baseGasNum: this.baseGasNum,
                cb: function cb(isDead) {
                  console.log("是否死了", isDead);

                  if (_this3.targetTowerBase) {
                    _this3.targetTowerBase.enemyDeadByThis(isDead);
                  }
                }
              }); // if (this.baseGasNum !== 0) {
              //     this.node.destroy();
              // }
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
                if (this.isCollisionGround) {
                  this.speedY = this.currentInitSpeedY;
                  this.currentInitSpeedY += this.currentCostAcc;

                  if (this.currentInitSpeedY < 0) {
                    this.state.setState('sleep');
                  }
                }
              }
            }
          }
        }]);

        return BulletBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJ2MyIsInYyIiwiVmVjMiIsIkNvbGxpZGVyQ29tcG9uZW50IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXRCYXNlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwidGFyZ2V0VG93ZXJCYXNlIiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJkYXRhIiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwiZGlyZWN0aW9uIiwiYW5nbGUiLCJ4IiwieSIsInNpZ25BbmdsZSIsIm5vZGUiLCJldWxlckFuZ2xlcyIsIlBJIiwic2V0U3RhdGUiLCJzIiwiZ2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJvbiIsIm9uVHJpZ2dlckVudGVyIiwiYmluZCIsInNjaGVkdWxlT25jZSIsImRlc3Ryb3kiLCJsZWZ0VGltZSIsImV2ZW50Iiwib3RoZXJDb2xsaWRlciIsIm5hbWUiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImdldElzRGVhZCIsImVtaXQiLCJiYXNlR2FzTnVtIiwiY2IiLCJpc0RlYWQiLCJlbmVteURlYWRCeVRoaXMiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsInBvcyIsInBvc2l0aW9uIiwibm9ybWFsaXplIiwidiIsIm11bHRpcGx5U2NhbGFyIiwibW92ZVNwZWVkIiwic2V0UG9zaXRpb24iLCJ6IiwiaXNDb2xsaXNpb25H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QW1CO0FBQ3RCLGdCQUFJLEtBQUtoRCxLQUFMLENBQVdpRCxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ2pDO0FBQ0EsbUJBQUtoRCxNQUFMLElBQWUsS0FBS0MsSUFBTCxHQUFZOEMsU0FBM0I7QUFDQSxrQkFBSUUsR0FBRyxHQUFHLEtBQUszQixJQUFMLENBQVU0QixRQUFwQjtBQUNBLGtCQUFJOUIsQ0FBQyxHQUFHNkIsR0FBRyxDQUFDN0IsQ0FBSixHQUFRLEtBQUtwQixNQUFMLEdBQWMrQyxTQUE5QjtBQUNBLGtCQUFJOUIsU0FBUyxHQUFHLEtBQUtmLGdCQUFMLENBQXNCaUQsU0FBdEIsRUFBaEI7QUFDQSxrQkFBSUMsQ0FBQyxHQUFHbkMsU0FBUyxDQUFDb0MsY0FBVixDQUF5QixLQUFLQyxTQUFMLEdBQWlCUCxTQUExQyxDQUFSLENBTmlDLENBT2pDOztBQUNBLG1CQUFLekIsSUFBTCxDQUFVaUMsV0FBVixDQUFzQm5FLEVBQUUsQ0FBQzZELEdBQUcsQ0FBQzlCLENBQUosR0FBUWlDLENBQUMsQ0FBQ2pDLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjZCLEdBQUcsQ0FBQ08sQ0FBSixHQUFRSixDQUFDLENBQUNoQyxDQUEzQixDQUF4Qjs7QUFDQSxrQkFBSSxLQUFLRSxJQUFMLENBQVVLLFdBQVYsR0FBd0JQLENBQXhCLElBQTZCLENBQWpDLEVBQW9DO0FBQ2hDO0FBQ0Esb0JBQUksS0FBS3FDLGlCQUFULEVBQTRCO0FBQ3hCLHVCQUFLekQsTUFBTCxHQUFjLEtBQUtHLGlCQUFuQjtBQUNBLHVCQUFLQSxpQkFBTCxJQUEwQixLQUFLQyxjQUEvQjs7QUFDQSxzQkFBSSxLQUFLRCxpQkFBTCxHQUF5QixDQUE3QixFQUFnQztBQUM1Qix5QkFBS0osS0FBTCxDQUFXMEIsUUFBWCxDQUFvQixPQUFwQjtBQUVIO0FBQ0o7QUFFSjtBQUVKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHYzLCB2MiwgVmVjMiwgbWF0aCwgQ29sbGlkZXJDb21wb25lbnQsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBUcmlnZ2VyRXZlbnRUeXBlLCBJVHJpZ2dlckV2ZW50LCBpc1ZhbGlkIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuL0Jhc2VPYmplY3QnXHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlzL0VuZW15QmFzZSc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQnVsbGV0QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBCdWxsZXRCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBzcGVlZFk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjY1k6IG51bWJlciA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREaXJlY3Rpb246IFZlYzIgPSB2MigwLCAwKTtcclxuICAgIC8vIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAyMDtcclxuICAgIHByaXZhdGUgY3VycmVudEluaXRTcGVlZFkgPSA2OyAvL+W8uei1t+eahOWIneWni+mAn+W6plxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q29zdEFjYyA9IC0zOyAgIC8v5by56LW355qE6IO96YeP5o2f5aSxXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICAvLyBwdWJsaWMgYm9keU5vZGU6IE5vZGUgPSBudWxsOy8v6Lqr5L2TXHJcbiAgICBwcml2YXRlIG1heExlZnRUaW1lOiBudW1iZXIgPSAxICsgTWF0aC5yYW5kb20oKTsgLy/mnIDlpKfnlJ/lrZjml7bpl7RcclxuICAgIHByaXZhdGUgY29sbGlkZXJDb21wb25lbnQ6IENvbGxpZGVyQ29tcG9uZW50ID0gbnVsbDsgLy/norDmkp7nu4Tku7ZcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgYmFzZUF0dGFja051bTogbnVtYmVyID0gMDsgLy/ln7rnoYDmlLvlh7vlgLxcclxuICAgIHByb3RlY3RlZCBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0ge307IC8v5ri45oiP6YWN572uXHJcbiAgICBwcml2YXRlIHRhcmdldFRvd2VyQmFzZTogVG93ZXJCYXNlID0gbnVsbDsgLy/nm67moIfloZRcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJpbml0LWRhdGFcIiwgKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJzbGVlcFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYm9keU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCk9PntcclxuXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpbml0KGdhbWVDb25maWc6IHt9LGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuYmFzZUF0dGFja051bSArPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgdGhpcy50YXJnZXRUb3dlckJhc2UgPSBkYXRhLnRhcmdldFRvd2VyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFzZSBhdHRhY2sgbnVtXCIsIHRoaXMuYmFzZUF0dGFja051bSk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICBsZXQgYW5nbGU6IG51bWJlciA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkuc2lnbkFuZ2xlKHYyKDAsIC0xKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuICAgICAgICAvLyBsZXQgdGFyZ2V0RW5lbXk6IE5vZGUgPSBkYXRhLnRhcmdldEVuZW15O1xyXG4gICAgICAgIC8vIGlmKHRhcmdldEVuZW15KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmxvb2tBdCh0YXJnZXRFbmVteS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZ1xyXG4gICAgICAgIC8vIHRoaXMuYmFzZUF0dGFja051bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIGxldCBzID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSAqIDIgLyB0aGlzLmFjY1kgKiAtMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNcIiwgcyk7XHJcbiAgICAgICAgLy8gbGV0IG1vdmVUaW1lOiBudW1iZXIgPSBNYXRoLnNxcnQocyk7XHJcbiAgICAgICAgLy8gbGV0IGRpczogbnVtYmVyID0gdjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0YXJnZXRFbmVteS5wb3NpdGlvbi54LCB0YXJnZXRFbmVteS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlU3BlZWQgPSBkaXMgLyBtb3ZlVGltZTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gLy/ojrflj5bnorDmkp7nu4Tku7ZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGUgdXVpZFwiLCB0aGlzLm5vZGUudXVpZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsaWRlcjpcIiwgdGhpcy5jb2xsaWRlckNvbXBvbmVudClcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25UcmlnZ2VyRW50ZXJcIiwgdGhpcy5vblRyaWdnZXJFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcy5sZWZ0VGltZSlcclxuICAgIH1cclxuICAgIG9uVHJpZ2dlckVudGVyKGV2ZW50OiBJVHJpZ2dlckV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvblRyaWdnZXJFbnRlclwiLCBldmVudCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNsZWVwXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3RoZXJDb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSBldmVudC5vdGhlckNvbGxpZGVyO1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUgJiYgb3RoZXJDb2xsaWRlci5ub2RlLm5hbWUuaW5kZXhPZihcIldhbGxcIikgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG90aGVyIGNvbGxpZXIgbm9kZVwiLCBvdGhlckNvbGxpZGVyLm5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyICYmIG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiYgIW90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmVtaXQoXCJiZS1hdHRhY2tlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQXR0YWNrTnVtOiB0aGlzLmJhc2VBdHRhY2tOdW0sXHJcbiAgICAgICAgICAgICAgICBiYXNlR2FzTnVtOiB0aGlzLmJhc2VHYXNOdW0sXHJcbiAgICAgICAgICAgICAgICBjYjogKGlzRGVhZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5q275LqGXCIsIGlzRGVhZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXRUb3dlckJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlckJhc2UuZW5lbXlEZWFkQnlUaGlzKGlzRGVhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYmFzZUdhc051bSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbGxpZGVyQ29tcG9uZW50KSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIix0aGlzLm9uQ29sbGlzaW9uRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyB0aGlzLnNwZWVkWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHYgPSBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgeSwgcG9zLnogKyB2LnkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb2xsaXNpb25Hcm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuY3VycmVudEluaXRTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5pdFNwZWVkWSArPSB0aGlzLmN1cnJlbnRDb3N0QWNjO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbml0U3BlZWRZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdzbGVlcCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=