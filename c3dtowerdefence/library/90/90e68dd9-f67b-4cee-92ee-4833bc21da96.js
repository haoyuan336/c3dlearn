System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js", "./BaseObject.js", "./Enemys/EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Vec3, v3, ColliderComponent, isValid, Quat, State, GameController, BaseObject, EnemyBase, _dec, _class, _temp, _crd, ccclass, property, BulletBase;

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
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      ColliderComponent = _cc.ColliderComponent;
      isValid = _cc.isValid;
      Quat = _cc.Quat;
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
          _this.currentDirection = v3(0, 0);
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
            this.currentDirection = direction; // let angle: number = new Vec2(direction.x, direction.y).signAngle(v2(0, -1));
            // this.node.eulerAngles = v3(0, angle * 180 / Math.PI, 0);
            // this.node.lookAt();/
            // let targetEnemy: Node = data.targetEnemy;
            // if(targetEnemy){
            //     this.node.lookAt(targetEnemy.position);
            // }else{
            // }
            // let quat = new Quat();
            // quat.lerp
            // Quat.fromViewUp(quat, dir, Vec3.UP);
            // let pos = v3(this.node.position).add(direction)

            var quat = new Quat();
            Quat.fromViewUp(quat, v3(direction).multiplyScalar(-1).normalize(), Vec3.UP);
            this.node.worldRotation = quat; // console.log("quat", quat);
            // rotateAround
            // startPos.
            // this.node.rotate/
            // return quat

            this.gameConfigJson = gameConfig; // this.baseAttackNum = this.gameConfigJson[this.objectType].BaseAttackNum;

            this.state.setState("run"); // let s = this.node.getPosition().y * 2 / this.accY * -1;
            // console.log("s", s);
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

              if (this.getIsCollisionDestroy()) {
                this.node.destroy();
              }

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
              var v = direction.multiplyScalar(this.moveSpeed * deltaTime);

              if (v.y < 0) {
                v.y = 0;
              } // console.log("v", v);


              this.node.setPosition(v3(pos.x + v.x, pos.y + v.y, pos.z + v.z));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJWZWMzIiwidjMiLCJDb2xsaWRlckNvbXBvbmVudCIsImlzVmFsaWQiLCJRdWF0IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXRCYXNlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwidGFyZ2V0VG93ZXJCYXNlIiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZ2FtZUNvbnRyb2xsZXIiLCJkYXRhIiwiYmFzZUF0dGFja051bSIsInRhcmdldFRvd2VyIiwiZGlyZWN0aW9uIiwicXVhdCIsImZyb21WaWV3VXAiLCJtdWx0aXBseVNjYWxhciIsIm5vcm1hbGl6ZSIsIlVQIiwibm9kZSIsIndvcmxkUm90YXRpb24iLCJzZXRTdGF0ZSIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJiaW5kIiwic2NoZWR1bGVPbmNlIiwiZGVzdHJveSIsImxlZnRUaW1lIiwiZXZlbnQiLCJvdGhlckNvbGxpZGVyIiwibmFtZSIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiZ2V0SXNEZWFkIiwiZ2V0SXNDb2xsaXNpb25EZXN0cm95IiwiZW1pdCIsImJhc2VHYXNOdW0iLCJjYiIsImlzRGVhZCIsImVuZW15RGVhZEJ5VGhpcyIsImRlbHRhVGltZSIsImdldFN0YXRlIiwicG9zIiwicG9zaXRpb24iLCJ5IiwidiIsIm1vdmVTcGVlZCIsInNldFBvc2l0aW9uIiwi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QkFBbkI7QUFDQSx1QkFBS0EsaUJBQUwsSUFBMEIsS0FBS0MsY0FBL0I7O0FBQ0Esc0JBQUksS0FBS0QsaUJBQUwsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIseUJBQUtKLEtBQUwsQ0FBVzBCLFFBQVgsQ0FBb0IsT0FBcEI7QUFFSDtBQUNKO0FBRUo7QUFFSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MywgdjIsIFZlYzIsIG1hdGgsIENvbGxpZGVyQ29tcG9uZW50LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgVHJpZ2dlckV2ZW50VHlwZSwgSVRyaWdnZXJFdmVudCwgaXNWYWxpZCwgUXVhdCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1bGxldEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgQnVsbGV0QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgc3BlZWRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY2NZOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5hY2NZO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0aW9uOiBWZWMzID0gdjMoMCwgMCk7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbml0U3BlZWRZID0gNjsgLy/lvLnotbfnmoTliJ3lp4vpgJ/luqZcclxuICAgIHByaXZhdGUgY3VycmVudENvc3RBY2MgPSAtMzsgICAvL+W8uei1t+eahOiDvemHj+aNn+WksVxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGJvZHlOb2RlOiBOb2RlID0gbnVsbDsvL+i6q+S9k1xyXG4gICAgcHJpdmF0ZSBtYXhMZWZ0VGltZTogbnVtYmVyID0gMSArIE1hdGgucmFuZG9tKCk7IC8v5pyA5aSn55Sf5a2Y5pe26Ze0XHJcbiAgICBwcml2YXRlIGNvbGxpZGVyQ29tcG9uZW50OiBDb2xsaWRlckNvbXBvbmVudCA9IG51bGw7IC8v56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGJhc2VBdHRhY2tOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye75YC8XHJcbiAgICBwcm90ZWN0ZWQgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IHt9OyAvL+a4uOaIj+mFjee9rlxyXG4gICAgcHJpdmF0ZSB0YXJnZXRUb3dlckJhc2U6IFRvd2VyQmFzZSA9IG51bGw7IC8v55uu5qCH5aGUXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiaW5pdC1kYXRhXCIsIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwic2xlZXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJ0by1kZWFkXCIsICgpPT57XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lQ29uZmlnOiB7fSwgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyLCBkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5iYXNlQXR0YWNrTnVtICs9IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICB0aGlzLnRhcmdldFRvd2VyQmFzZSA9IGRhdGEudGFyZ2V0VG93ZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGF0YS5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIC8vIGxldCBhbmdsZTogbnVtYmVyID0gbmV3IFZlYzIoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KS5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5sb29rQXQoKTsvXHJcbiAgICAgICAgLy8gbGV0IHRhcmdldEVuZW15OiBOb2RlID0gZGF0YS50YXJnZXRFbmVteTtcclxuICAgICAgICAvLyBpZih0YXJnZXRFbmVteSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5sb29rQXQodGFyZ2V0RW5lbXkucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyB9ZWxzZXtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgLy8gcXVhdC5sZXJwXHJcbiAgICAgICAgLy8gUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IHYzKHRoaXMubm9kZS5wb3NpdGlvbikuYWRkKGRpcmVjdGlvbilcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIHYzKGRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIoLTEpLm5vcm1hbGl6ZSgpLCBWZWMzLlVQKTtcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRSb3RhdGlvbiA9IHF1YXQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJxdWF0XCIsIHF1YXQpO1xyXG4gICAgICAgIC8vIHJvdGF0ZUFyb3VuZFxyXG4gICAgICAgIC8vIHN0YXJ0UG9zLlxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5yb3RhdGUvXHJcblxyXG4gICAgICAgIC8vIHJldHVybiBxdWF0XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWdcclxuICAgICAgICAvLyB0aGlzLmJhc2VBdHRhY2tOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmFzZUF0dGFja051bTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAvLyBsZXQgcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgKiAyIC8gdGhpcy5hY2NZICogLTE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzXCIsIHMpO1xyXG4gICAgICAgIC8vIGxldCBtb3ZlVGltZTogbnVtYmVyID0gTWF0aC5zcXJ0KHMpO1xyXG4gICAgICAgIC8vIGxldCBkaXM6IG51bWJlciA9IHYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueikuc3VidHJhY3QodjIodGFyZ2V0RW5lbXkucG9zaXRpb24ueCwgdGFyZ2V0RW5lbXkucG9zaXRpb24ueikpLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vIHRoaXMubW92ZVNwZWVkID0gZGlzIC8gbW92ZVRpbWU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckNvbXBvbmVudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2RlIHV1aWRcIiwgdGhpcy5ub2RlLnV1aWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlkZXI6XCIsIHRoaXMuY29sbGlkZXJDb21wb25lbnQpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uVHJpZ2dlckVudGVyXCIsIHRoaXMub25UcmlnZ2VyRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIHRoaXMubGVmdFRpbWUpXHJcbiAgICB9XHJcbiAgICBvblRyaWdnZXJFbnRlcihldmVudDogSVRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25UcmlnZ2VyRW50ZXJcIiwgZXZlbnQpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJzbGVlcFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG90aGVyQ29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gZXZlbnQub3RoZXJDb2xsaWRlcjtcclxuICAgICAgICBpZiAoaXNWYWxpZChvdGhlckNvbGxpZGVyKSAmJiBpc1ZhbGlkKG90aGVyQ29sbGlkZXIubm9kZSkgJiYgb3RoZXJDb2xsaWRlci5ub2RlLm5hbWUuaW5kZXhPZihcIldhbGxcIikgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG90aGVyIGNvbGxpZXIgbm9kZVwiLCBvdGhlckNvbGxpZGVyLm5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyICYmIG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkgJiYgIW90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXNDb2xsaXNpb25EZXN0cm95KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmVtaXQoXCJiZS1hdHRhY2tlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQXR0YWNrTnVtOiB0aGlzLmJhc2VBdHRhY2tOdW0sXHJcbiAgICAgICAgICAgICAgICBiYXNlR2FzTnVtOiB0aGlzLmJhc2VHYXNOdW0sXHJcbiAgICAgICAgICAgICAgICBjYjogKGlzRGVhZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5q275LqGXCIsIGlzRGVhZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXRUb3dlckJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlckJhc2UuZW5lbXlEZWFkQnlUaGlzKGlzRGVhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYmFzZUdhc051bSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbGxpZGVyQ29tcG9uZW50KSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIix0aGlzLm9uQ29sbGlzaW9uRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyB0aGlzLnNwZWVkWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHYgPSBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICBpZiAodi55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdi55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgcG9zLnkgKyB2LnksIHBvcy56ICsgdi56KSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGlzaW9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLmN1cnJlbnRJbml0U3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluaXRTcGVlZFkgKz0gdGhpcy5jdXJyZW50Q29zdEFjYztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5pdFNwZWVkWSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnc2xlZXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19