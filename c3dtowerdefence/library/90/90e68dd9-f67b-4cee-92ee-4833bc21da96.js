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
          value: function init(gameConfig, data) {
            var _this2 = this;

            _get(_getPrototypeOf(BulletBase.prototype), "init", this).call(this, gameConfig);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJ2MyIsInYyIiwiVmVjMiIsIkNvbGxpZGVyQ29tcG9uZW50IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXRCYXNlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwidGFyZ2V0VG93ZXJCYXNlIiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZGF0YSIsImJhc2VBdHRhY2tOdW0iLCJ0YXJnZXRUb3dlciIsImRpcmVjdGlvbiIsImFuZ2xlIiwieCIsInkiLCJzaWduQW5nbGUiLCJub2RlIiwiZXVsZXJBbmdsZXMiLCJQSSIsInNldFN0YXRlIiwicyIsImdldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJvblRyaWdnZXJFbnRlciIsImJpbmQiLCJzY2hlZHVsZU9uY2UiLCJkZXN0cm95IiwibGVmdFRpbWUiLCJldmVudCIsIm90aGVyQ29sbGlkZXIiLCJuYW1lIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJc0RlYWQiLCJlbWl0IiwiYmFzZUdhc051bSIsImNiIiwiaXNEZWFkIiwiZW5lbXlEZWFkQnlUaGlzIiwiZGVsdGFUaW1lIiwiZ2V0U3RhdGUiLCJwb3MiLCJwb3NpdGlvbiIsIm5vcm1hbGl6ZSIsInYiLCJtdWx0aXBseVNjYWxhciIsIm1vdmVTcGVlZCIsInNldFBvc2l0aW9uIiwieiIsImlzQ29sbGlzaW9uR3JvdW5kIl0sIm1hcHBpbmdz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WCxPQUEwQixLQUE5QixFQUFxQztBQUNqQztBQUNBLG1CQUFLL0MsTUFBTCxJQUFlLEtBQUtDLElBQUwsR0FBWTZDLFNBQTNCO0FBQ0Esa0JBQUlFLEdBQUcsR0FBRyxLQUFLM0IsSUFBTCxDQUFVNEIsUUFBcEI7QUFDQSxrQkFBSTlCLENBQUMsR0FBRzZCLEdBQUcsQ0FBQzdCLENBQUosR0FBUSxLQUFLbkIsTUFBTCxHQUFjOEMsU0FBOUI7QUFDQSxrQkFBSTlCLFNBQVMsR0FBRyxLQUFLZCxnQkFBTCxDQUFzQmdELFNBQXRCLEVBQWhCO0FBQ0Esa0JBQUlDLENBQUMsR0FBR25DLFNBQVMsQ0FBQ29DLGNBQVYsQ0FBeUIsS0FBS0MsU0FBTCxHQUFpQlAsU0FBMUMsQ0FBUixDQU5pQyxDQU9qQzs7QUFDQSxtQkFBS3pCLElBQUwsQ0FBVWlDLFdBQVYsQ0FBc0JsRSxFQUFFLENBQUM0RCxHQUFHLENBQUM5QixDQUFKLEdBQVFpQyxDQUFDLENBQUNqQyxDQUFYLEVBQWNDLENBQWQsRUFBaUI2QixHQUFHLENBQUNPLENBQUosR0FBUUosQ0FBQyxDQUFDaEMsQ0FBM0IsQ0FBeEI7O0FBQ0Esa0JBQUksS0FBS0UsSUFBTCxDQUFVSyxXQUFWLEdBQXdCUCxDQUF4QixJQUE2QixDQUFqQyxFQUFvQztBQUNoQztBQUNBLG9CQUFJLEtBQUtxQyxpQkFBVCxFQUE0QjtBQUN4Qix1QkFBS3hELE1BQUwsR0FBYyxLQUFLRyxpQkFBbkI7QUFDQSx1QkFBS0EsaUJBQUwsSUFBMEIsS0FBS0MsY0FBL0I7O0FBQ0Esc0JBQUksS0FBS0QsaUJBQUwsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIseUJBQUtKLEtBQUwsQ0FBV3lCLFFBQVgsQ0FBb0IsT0FBcEI7QUFFSDtBQUNKO0FBRUo7QUFFSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MywgdjIsIFZlYzIsIG1hdGgsIENvbGxpZGVyQ29tcG9uZW50LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgVHJpZ2dlckV2ZW50VHlwZSwgSVRyaWdnZXJFdmVudCwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1bGxldEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgQnVsbGV0QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgc3BlZWRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY2NZOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5hY2NZO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0aW9uOiBWZWMyID0gdjIoMCwgMCk7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbml0U3BlZWRZID0gNjsgLy/lvLnotbfnmoTliJ3lp4vpgJ/luqZcclxuICAgIHByaXZhdGUgY3VycmVudENvc3RBY2MgPSAtMzsgICAvL+W8uei1t+eahOiDvemHj+aNn+WksVxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGJvZHlOb2RlOiBOb2RlID0gbnVsbDsvL+i6q+S9k1xyXG4gICAgcHJpdmF0ZSBtYXhMZWZ0VGltZTogbnVtYmVyID0gMSArIE1hdGgucmFuZG9tKCk7IC8v5pyA5aSn55Sf5a2Y5pe26Ze0XHJcbiAgICBwcml2YXRlIGNvbGxpZGVyQ29tcG9uZW50OiBDb2xsaWRlckNvbXBvbmVudCA9IG51bGw7IC8v56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGJhc2VBdHRhY2tOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye75YC8XHJcbiAgICBwcm90ZWN0ZWQgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IHt9OyAvL+a4uOaIj+mFjee9rlxyXG4gICAgcHJpdmF0ZSB0YXJnZXRUb3dlckJhc2U6IFRvd2VyQmFzZSA9IG51bGw7IC8v55uu5qCH5aGUXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiaW5pdC1kYXRhXCIsIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwic2xlZXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpPT57XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lQ29uZmlnOiB7fSwgZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5iYXNlQXR0YWNrTnVtICs9IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyQmFzZSA9IGRhdGEudGFyZ2V0VG93ZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGF0YS5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gbmV3IFZlYzIoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KS5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgIC8vIGxldCB0YXJnZXRFbmVteTogTm9kZSA9IGRhdGEudGFyZ2V0RW5lbXk7XHJcbiAgICAgICAgLy8gaWYodGFyZ2V0RW5lbXkpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUubG9va0F0KHRhcmdldEVuZW15LnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnXHJcbiAgICAgICAgLy8gdGhpcy5iYXNlQXR0YWNrTnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJhc2VBdHRhY2tOdW07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55ICogMiAvIHRoaXMuYWNjWSAqIC0xO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic1wiLCBzKTtcclxuICAgICAgICAvLyBsZXQgbW92ZVRpbWU6IG51bWJlciA9IE1hdGguc3FydChzKTtcclxuICAgICAgICAvLyBsZXQgZGlzOiBudW1iZXIgPSB2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopLnN1YnRyYWN0KHYyKHRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRhcmdldEVuZW15LnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAvLyB0aGlzLm1vdmVTcGVlZCA9IGRpcyAvIG1vdmVUaW1lO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAvL+iOt+WPlueisOaSnue7hOS7tlxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCB0aGlzLmNvbGxpZGVyQ29tcG9uZW50KVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQub24oXCJvblRyaWdnZXJFbnRlclwiLCB0aGlzLm9uVHJpZ2dlckVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCB0aGlzLmxlZnRUaW1lKVxyXG4gICAgfVxyXG4gICAgb25UcmlnZ2VyRW50ZXIoZXZlbnQ6IElUcmlnZ2VyRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uVHJpZ2dlckVudGVyXCIsIGV2ZW50KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwic2xlZXBcIik7XHJcblxyXG4gICAgICAgIGxldCBvdGhlckNvbGxpZGVyOiBDb2xsaWRlckNvbXBvbmVudCA9IGV2ZW50Lm90aGVyQ29sbGlkZXI7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZSAmJiBvdGhlckNvbGxpZGVyLm5vZGUubmFtZS5pbmRleE9mKFwiV2FsbFwiKSA+IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgb3RoZXIgY29sbGllciBub2RlXCIsIG90aGVyQ29sbGlkZXIubm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIgJiYgb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKSAmJiAhb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgYXR0YWNrIG51bVwiLCB0aGlzLmJhc2VBdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZW1pdChcImJlLWF0dGFja2VkXCIsIHtcclxuICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IHRoaXMuYmFzZUF0dGFja051bSxcclxuICAgICAgICAgICAgICAgIGJhc2VHYXNOdW06IHRoaXMuYmFzZUdhc051bSxcclxuICAgICAgICAgICAgICAgIGNiOiAoaXNEZWFkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/lkKbmrbvkuoZcIiwgaXNEZWFkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFRvd2VyQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFRvd2VyQmFzZS5lbmVteURlYWRCeVRoaXMoaXNEZWFkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5iYXNlR2FzTnVtICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSk7XHJcbiAgICAgICAgLy8gLy/ojrflj5bnorDmkp7nu4Tku7ZcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2RlIHV1aWRcIiwgdGhpcy5ub2RlLnV1aWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlkZXI6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sbGlkZXJDb21wb25lbnQpKTtcclxuICAgICAgICAvLyB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25Db2xsaXNpb25FbnRlclwiLHRoaXMub25Db2xsaXNpb25FbnRlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IHkgPSBwb3MueSArIHRoaXMuc3BlZWRZICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdiA9IGRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHYzKHBvcy54ICsgdi54LCB5LCBwb3MueiArIHYueSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxpc2lvbkdyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5jdXJyZW50SW5pdFNwZWVkWTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbml0U3BlZWRZICs9IHRoaXMuY3VycmVudENvc3RBY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEluaXRTcGVlZFkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3NsZWVwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==