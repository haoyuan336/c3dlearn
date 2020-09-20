System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js", "./BaseObject.js", "./Enemys/EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, v3, v2, Vec2, ColliderComponent, isValid, State, GameController, BaseObject, EnemyBase, _dec, _class, _temp, _crd, ccclass, property, BulletBase;

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
      isValid = _cc.isValid;
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

            if (isValid(otherCollider) && isValid(otherCollider.node) && otherCollider.node.name.indexOf("Wall") > 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJ2MyIsInYyIiwiVmVjMiIsIkNvbGxpZGVyQ29tcG9uZW50IiwiaXNWYWxpZCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiRW5lbXlCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQnVsbGV0QmFzZSIsInN0YXRlIiwic3BlZWRZIiwiYWNjWSIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50SW5pdFNwZWVkWSIsImN1cnJlbnRDb3N0QWNjIiwibWF4TGVmdFRpbWUiLCJNYXRoIiwicmFuZG9tIiwiY29sbGlkZXJDb21wb25lbnQiLCJnYW1lQ29uZmlnSnNvbiIsInRhcmdldFRvd2VyQmFzZSIsImFkZFN0YXRlIiwiZ2FtZUNvbmZpZyIsImdhbWVDb250cm9sbGVyIiwiZGF0YSIsImJhc2VBdHRhY2tOdW0iLCJ0YXJnZXRUb3dlciIsImRpcmVjdGlvbiIsImFuZ2xlIiwieCIsInkiLCJzaWduQW5nbGUiLCJub2RlIiwiZXVsZXJBbmdsZXMiLCJQSSIsInNldFN0YXRlIiwicyIsImdldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJvblRyaWdnZXJFbnRlciIsImJpbmQiLCJzY2hlZHVsZU9uY2UiLCJkZXN0cm95IiwibGVmdFRpbWUiLCJldmVudCIsIm90aGVyQ29sbGlkZXIiLCJuYW1lIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJc0RlYWQiLCJlbWl0IiwiYmFzZUdhc051bSIsImNiIiwiaXNEZWFkIiwiZW5lbXlEZWFkQnlUaGlzIiwiZGVsdGFUaW1lIiwiZ2V0U3RhdGUiLCJwb3MiLCJwb3NpdGlvbiIsIm5vcm1hbGl6ZSIsInYiLCJtdWx0aXBseVNjYWxhciIsIm1vdmVTcGVlZCIsInNldFBvc2l0aW9uIiwieiIsImlzQ29sbGlzaW9uR3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsaUIsT0FBQUEsaUI7QUFBNkVDLE1BQUFBLE8sT0FBQUEsTzs7OztBQUM5SEMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsYyxxQkFBQUEsYzs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JWLFUsQ0FBdEJVLE87QUFBU0MsTUFBQUEsUSxHQUFhWCxVLENBQWJXLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFFSUcsSyxHQUFlO0FBQUE7QUFBQSwrQjtnQkFDZkMsTSxHQUFpQixDO2dCQUNqQkMsSSxHQUFlO0FBQUE7QUFBQSxnREFBZUEsSTtnQkFDOUJDLGdCLEdBQXlCZCxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQztnQkFFM0JlLGlCLEdBQW9CLEM7Z0JBQ3BCQyxjLEdBQWlCLENBQUMsQztnQkFHbEJDLFcsR0FBc0IsSUFBSUMsSUFBSSxDQUFDQyxNQUFMLEU7Z0JBQzFCQyxpQixHQUF1QyxJO2dCQUdyQ0MsYyxHQUF5QixFO2dCQUMzQkMsZSxHQUE2QixJOzs7Ozs7QUFBTTttQ0FDbEM7QUFDTDtBQUVBO0FBRUEsaUJBQUtYLEtBQUwsQ0FBV1ksUUFBWCxDQUFvQixPQUFwQixFQUE2QixZQUFNLENBQy9CO0FBQ0gsYUFGRCxFQUxLLENBUUw7QUFFQTtBQUlIOzs7K0JBQ0lDLFUsRUFBZ0JDLGMsRUFBZ0NDLEksRUFBTTtBQUFBOztBQUN2RCxpRkFBV0YsVUFBWCxFQUF1QkMsY0FBdkI7O0FBQ0EsaUJBQUtFLGFBQUwsSUFBc0JELElBQUksQ0FBQ0MsYUFBM0I7QUFDQSxpQkFBS0wsZUFBTCxHQUF1QkksSUFBSSxDQUFDRSxXQUE1QixDQUh1RCxDQUl2RDs7QUFDQSxnQkFBSUMsU0FBUyxHQUFHSCxJQUFJLENBQUNHLFNBQXJCO0FBQ0EsaUJBQUtmLGdCQUFMLEdBQXdCZSxTQUF4QjtBQUNBLGdCQUFJQyxLQUFhLEdBQUcsSUFBSTdCLElBQUosQ0FBUzRCLFNBQVMsQ0FBQ0UsQ0FBbkIsRUFBc0JGLFNBQVMsQ0FBQ0csQ0FBaEMsRUFBbUNDLFNBQW5DLENBQTZDakMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FBL0MsQ0FBcEI7QUFDQSxpQkFBS2tDLElBQUwsQ0FBVUMsV0FBVixHQUF3QnBDLEVBQUUsQ0FBQyxDQUFELEVBQUkrQixLQUFLLEdBQUcsR0FBUixHQUFjWixJQUFJLENBQUNrQixFQUF2QixFQUEyQixDQUEzQixDQUExQixDQVJ1RCxDQVN2RDtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxpQkFBS2YsY0FBTCxHQUFzQkcsVUFBdEIsQ0FkdUQsQ0FldkQ7O0FBRUEsaUJBQUtiLEtBQUwsQ0FBVzBCLFFBQVgsQ0FBb0IsS0FBcEI7QUFDQSxnQkFBSUMsQ0FBQyxHQUFHLEtBQUtKLElBQUwsQ0FBVUssV0FBVixHQUF3QlAsQ0FBeEIsR0FBNEIsQ0FBNUIsR0FBZ0MsS0FBS25CLElBQXJDLEdBQTRDLENBQUMsQ0FBckQsQ0FsQnVELENBbUJ2RDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxpQkFBS08saUJBQUwsR0FBeUIsS0FBS2MsSUFBTCxDQUFVTSxZQUFWLENBQXVCdEMsaUJBQXZCLENBQXpCLENBdkJ1RCxDQXdCdkQ7QUFDQTtBQUNBOztBQUNBLGlCQUFLa0IsaUJBQUwsQ0FBdUJxQixFQUF2QixDQUEwQixnQkFBMUIsRUFBNEMsS0FBS0MsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBNUM7QUFDQSxpQkFBS0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCLGNBQUEsTUFBSSxDQUFDVixJQUFMLENBQVVXLE9BQVY7QUFDSCxhQUZELEVBRUcsS0FBS0MsUUFGUjtBQUdIOzs7eUNBQ2NDLEssRUFBc0I7QUFBQTs7QUFDakM7QUFDQTtBQUVBLGdCQUFJQyxhQUFnQyxHQUFHRCxLQUFLLENBQUNDLGFBQTdDOztBQUNBLGdCQUFJN0MsT0FBTyxDQUFDNkMsYUFBRCxDQUFQLElBQTBCN0MsT0FBTyxDQUFDNkMsYUFBYSxDQUFDZCxJQUFmLENBQWpDLElBQXlEYyxhQUFhLENBQUNkLElBQWQsQ0FBbUJlLElBQW5CLENBQXdCQyxPQUF4QixDQUFnQyxNQUFoQyxJQUEwQyxDQUF2RyxFQUEwRztBQUN0R0MsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNKLGFBQWEsQ0FBQ2QsSUFBZCxDQUFtQmUsSUFBdEQ7QUFDQSxtQkFBS2YsSUFBTCxDQUFVVyxPQUFWO0FBQ0g7O0FBQ0QsZ0JBQUlHLGFBQWEsSUFBSUEsYUFBYSxDQUFDUixZQUFkO0FBQUE7QUFBQSx1Q0FBakIsSUFBMEQsQ0FBQ1EsYUFBYSxDQUFDUixZQUFkO0FBQUE7QUFBQSx3Q0FBc0NhLFNBQXRDLEVBQS9ELEVBQWtIO0FBQzlHRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQixLQUFLekIsYUFBcEM7QUFDQXFCLGNBQUFBLGFBQWEsQ0FBQ2QsSUFBZCxDQUFtQm9CLElBQW5CLENBQXdCLGFBQXhCLEVBQXVDO0FBQ25DM0IsZ0JBQUFBLGFBQWEsRUFBRSxLQUFLQSxhQURlO0FBRW5DNEIsZ0JBQUFBLFVBQVUsRUFBRSxLQUFLQSxVQUZrQjtBQUduQ0MsZ0JBQUFBLEVBQUUsRUFBRSxZQUFDQyxNQUFELEVBQXFCO0FBQ3JCTixrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkssTUFBcEI7O0FBQ0Esc0JBQUksTUFBSSxDQUFDbkMsZUFBVCxFQUEwQjtBQUN0QixvQkFBQSxNQUFJLENBQUNBLGVBQUwsQ0FBcUJvQyxlQUFyQixDQUFxQ0QsTUFBckM7QUFDSDtBQUNKO0FBUmtDLGVBQXZDLEVBRjhHLENBWTlHO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7OztrQ0FDTyxDQUNKO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNIOzs7aUNBQ01FLFMsRUFBbUI7QUFDdEIsZ0JBQUksS0FBS2hELEtBQUwsQ0FBV2lELFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakM7QUFDQSxtQkFBS2hELE1BQUwsSUFBZSxLQUFLQyxJQUFMLEdBQVk4QyxTQUEzQjtBQUNBLGtCQUFJRSxHQUFHLEdBQUcsS0FBSzNCLElBQUwsQ0FBVTRCLFFBQXBCO0FBQ0Esa0JBQUk5QixDQUFDLEdBQUc2QixHQUFHLENBQUM3QixDQUFKLEdBQVEsS0FBS3BCLE1BQUwsR0FBYytDLFNBQTlCO0FBQ0Esa0JBQUk5QixTQUFTLEdBQUcsS0FBS2YsZ0JBQUwsQ0FBc0JpRCxTQUF0QixFQUFoQjtBQUNBLGtCQUFJQyxDQUFDLEdBQUduQyxTQUFTLENBQUNvQyxjQUFWLENBQXlCLEtBQUtDLFNBQUwsR0FBaUJQLFNBQTFDLENBQVIsQ0FOaUMsQ0FPakM7O0FBQ0EsbUJBQUt6QixJQUFMLENBQVVpQyxXQUFWLENBQXNCcEUsRUFBRSxDQUFDOEQsR0FBRyxDQUFDOUIsQ0FBSixHQUFRaUMsQ0FBQyxDQUFDakMsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCNkIsR0FBRyxDQUFDTyxDQUFKLEdBQVFKLENBQUMsQ0FBQ2hDLENBQTNCLENBQXhCOztBQUNBLGtCQUFJLEtBQUtFLElBQUwsQ0FBVUssV0FBVixHQUF3QlAsQ0FBeEIsSUFBNkIsQ0FBakMsRUFBb0M7QUFDaEM7QUFDQSxvQkFBSSxLQUFLcUMsaUJBQVQsRUFBNEI7QUFDeEIsdUJBQUt6RCxNQUFMLEdBQWMsS0FBS0csaUJBQW5CO0FBQ0EsdUJBQUtBLGlCQUFMLElBQTBCLEtBQUtDLGNBQS9COztBQUNBLHNCQUFJLEtBQUtELGlCQUFMLEdBQXlCLENBQTdCLEVBQWdDO0FBQzVCLHlCQUFLSixLQUFMLENBQVcwQixRQUFYLENBQW9CLE9BQXBCO0FBRUg7QUFDSjtBQUVKO0FBRUo7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgdjMsIHYyLCBWZWMyLCBtYXRoLCBDb2xsaWRlckNvbXBvbmVudCwgU3BoZXJlQ29sbGlkZXJDb21wb25lbnQsIFRyaWdnZXJFdmVudFR5cGUsIElUcmlnZ2VyRXZlbnQsIGlzVmFsaWQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4vQmFzZU9iamVjdCdcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdCdWxsZXRCYXNlJylcclxuZXhwb3J0IGNsYXNzIEJ1bGxldEJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIHNwZWVkWTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYWNjWTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcclxuICAgIHByaXZhdGUgY3VycmVudERpcmVjdGlvbjogVmVjMiA9IHYyKDAsIDApO1xyXG4gICAgLy8gcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDIwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5pdFNwZWVkWSA9IDY7IC8v5by56LW355qE5Yid5aeL6YCf5bqmXHJcbiAgICBwcml2YXRlIGN1cnJlbnRDb3N0QWNjID0gLTM7ICAgLy/lvLnotbfnmoTog73ph4/mjZ/lpLFcclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIC8vIHB1YmxpYyBib2R5Tm9kZTogTm9kZSA9IG51bGw7Ly/ouqvkvZNcclxuICAgIHByaXZhdGUgbWF4TGVmdFRpbWU6IG51bWJlciA9IDEgKyBNYXRoLnJhbmRvbSgpOyAvL+acgOWkp+eUn+WtmOaXtumXtFxyXG4gICAgcHJpdmF0ZSBjb2xsaWRlckNvbXBvbmVudDogQ29sbGlkZXJDb21wb25lbnQgPSBudWxsOyAvL+eisOaSnue7hOS7tlxyXG5cclxuICAgIC8vIHByb3RlY3RlZCBiYXNlQXR0YWNrTnVtOiBudW1iZXIgPSAwOyAvL+WfuuehgOaUu+WHu+WAvFxyXG4gICAgcHJvdGVjdGVkIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSB7fTsgLy/muLjmiI/phY3nva5cclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXJCYXNlOiBUb3dlckJhc2UgPSBudWxsOyAvL+ebruagh+WhlFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImluaXQtZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInNsZWVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKT0+e1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGluaXQoZ2FtZUNvbmZpZzoge30sIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciwgZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuYmFzZUF0dGFja051bSArPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgdGhpcy50YXJnZXRUb3dlckJhc2UgPSBkYXRhLnRhcmdldFRvd2VyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFzZSBhdHRhY2sgbnVtXCIsIHRoaXMuYmFzZUF0dGFja051bSk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICBsZXQgYW5nbGU6IG51bWJlciA9IG5ldyBWZWMyKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkuc2lnbkFuZ2xlKHYyKDAsIC0xKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gdjMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuICAgICAgICAvLyBsZXQgdGFyZ2V0RW5lbXk6IE5vZGUgPSBkYXRhLnRhcmdldEVuZW15O1xyXG4gICAgICAgIC8vIGlmKHRhcmdldEVuZW15KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmxvb2tBdCh0YXJnZXRFbmVteS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmdhbWVDb25maWdKc29uID0gZ2FtZUNvbmZpZ1xyXG4gICAgICAgIC8vIHRoaXMuYmFzZUF0dGFja051bSA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bdGhpcy5vYmplY3RUeXBlXS5CYXNlQXR0YWNrTnVtO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIGxldCBzID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSAqIDIgLyB0aGlzLmFjY1kgKiAtMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNcIiwgcyk7XHJcbiAgICAgICAgLy8gbGV0IG1vdmVUaW1lOiBudW1iZXIgPSBNYXRoLnNxcnQocyk7XHJcbiAgICAgICAgLy8gbGV0IGRpczogbnVtYmVyID0gdjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi56KS5zdWJ0cmFjdCh2Mih0YXJnZXRFbmVteS5wb3NpdGlvbi54LCB0YXJnZXRFbmVteS5wb3NpdGlvbi56KSkubGVuZ3RoKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlU3BlZWQgPSBkaXMgLyBtb3ZlVGltZTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gLy/ojrflj5bnorDmkp7nu4Tku7ZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGUgdXVpZFwiLCB0aGlzLm5vZGUudXVpZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsaWRlcjpcIiwgdGhpcy5jb2xsaWRlckNvbXBvbmVudClcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25UcmlnZ2VyRW50ZXJcIiwgdGhpcy5vblRyaWdnZXJFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcy5sZWZ0VGltZSlcclxuICAgIH1cclxuICAgIG9uVHJpZ2dlckVudGVyKGV2ZW50OiBJVHJpZ2dlckV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvblRyaWdnZXJFbnRlclwiLCBldmVudCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInNsZWVwXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3RoZXJDb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSBldmVudC5vdGhlckNvbGxpZGVyO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKG90aGVyQ29sbGlkZXIpICYmIGlzVmFsaWQob3RoZXJDb2xsaWRlci5ub2RlKSAmJiBvdGhlckNvbGxpZGVyLm5vZGUubmFtZS5pbmRleE9mKFwiV2FsbFwiKSA+IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgb3RoZXIgY29sbGllciBub2RlXCIsIG90aGVyQ29sbGlkZXIubm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIgJiYgb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKSAmJiAhb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgYXR0YWNrIG51bVwiLCB0aGlzLmJhc2VBdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZW1pdChcImJlLWF0dGFja2VkXCIsIHtcclxuICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IHRoaXMuYmFzZUF0dGFja051bSxcclxuICAgICAgICAgICAgICAgIGJhc2VHYXNOdW06IHRoaXMuYmFzZUdhc051bSxcclxuICAgICAgICAgICAgICAgIGNiOiAoaXNEZWFkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/lkKbmrbvkuoZcIiwgaXNEZWFkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFRvd2VyQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFRvd2VyQmFzZS5lbmVteURlYWRCeVRoaXMoaXNEZWFkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5iYXNlR2FzTnVtICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQnVsbGV0QmFzZSk7XHJcbiAgICAgICAgLy8gLy/ojrflj5bnorDmkp7nu4Tku7ZcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2RlIHV1aWRcIiwgdGhpcy5ub2RlLnV1aWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlkZXI6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sbGlkZXJDb21wb25lbnQpKTtcclxuICAgICAgICAvLyB0aGlzLmNvbGxpZGVyQ29tcG9uZW50Lm9uKFwib25Db2xsaXNpb25FbnRlclwiLHRoaXMub25Db2xsaXNpb25FbnRlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IHkgPSBwb3MueSArIHRoaXMuc3BlZWRZICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdiA9IGRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHYzKHBvcy54ICsgdi54LCB5LCBwb3MueiArIHYueSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxpc2lvbkdyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5jdXJyZW50SW5pdFNwZWVkWTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbml0U3BlZWRZICs9IHRoaXMuY3VycmVudENvc3RBY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEluaXRTcGVlZFkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3NsZWVwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==