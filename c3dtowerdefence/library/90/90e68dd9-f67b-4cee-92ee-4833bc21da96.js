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
          return _this;
        }

        _createClass(BulletBase, [{
          key: "onLoad",
          //游戏配置
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

            this.baseAttackNum += data.baseAttackNum; // console.log("base attack num", this.baseAttackNum);

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
                baseGasNum: this.baseGasNum
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9CdWxsZXRCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJ2MyIsInYyIiwiVmVjMiIsIkNvbGxpZGVyQ29tcG9uZW50IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXRCYXNlIiwic3RhdGUiLCJzcGVlZFkiLCJhY2NZIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRJbml0U3BlZWRZIiwiY3VycmVudENvc3RBY2MiLCJtYXhMZWZ0VGltZSIsIk1hdGgiLCJyYW5kb20iLCJjb2xsaWRlckNvbXBvbmVudCIsImdhbWVDb25maWdKc29uIiwiYWRkU3RhdGUiLCJnYW1lQ29uZmlnIiwiZGF0YSIsImJhc2VBdHRhY2tOdW0iLCJkaXJlY3Rpb24iLCJhbmdsZSIsIngiLCJ5Iiwic2lnbkFuZ2xlIiwibm9kZSIsImV1bGVyQW5nbGVzIiwiUEkiLCJzZXRTdGF0ZSIsInMiLCJnZXRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJiaW5kIiwic2NoZWR1bGVPbmNlIiwiZGVzdHJveSIsImxlZnRUaW1lIiwiZXZlbnQiLCJvdGhlckNvbGxpZGVyIiwibmFtZSIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiZ2V0SXNEZWFkIiwiZW1pdCIsImJhc2VHYXNOdW0iLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsInBvcyIsInBvc2l0aW9uIiwibm9ybWFsaXplIiwidiIsIm11bHRpcGx5U2NhbGFyIiwibW92ZVNwZWVkIiwic2V0UG9zaXRpb24iLCJ6IiwiaXNDb2xsaXNpb25Hcm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFB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QU9qQzs7QUFDQSxtQkFBS3RCLElBQUwsQ0FBVThCLFdBQVYsQ0FBc0I3RCxFQUFFLENBQUN1RCxHQUFHLENBQUMzQixDQUFKLEdBQVE4QixDQUFDLENBQUM5QixDQUFYLEVBQWNDLENBQWQsRUFBaUIwQixHQUFHLENBQUNPLENBQUosR0FBUUosQ0FBQyxDQUFDN0IsQ0FBM0IsQ0FBeEI7O0FBQ0Esa0JBQUksS0FBS0UsSUFBTCxDQUFVSyxXQUFWLEdBQXdCUCxDQUF4QixJQUE2QixDQUFqQyxFQUFvQztBQUNoQztBQUNBLG9CQUFJLEtBQUtrQyxpQkFBVCxFQUE0QjtBQUN4Qix1QkFBS25ELE1BQUwsR0FBYyxLQUFLRyxpQkFBbkI7QUFDQSx1QkFBS0EsaUJBQUwsSUFBMEIsS0FBS0MsY0FBL0I7O0FBQ0Esc0JBQUksS0FBS0QsaUJBQUwsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIseUJBQUtKLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0IsT0FBcEI7QUFFSDtBQUNKO0FBRUo7QUFFSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MywgdjIsIFZlYzIsIG1hdGgsIENvbGxpZGVyQ29tcG9uZW50LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgVHJpZ2dlckV2ZW50VHlwZSwgSVRyaWdnZXJFdmVudCwgaXNWYWxpZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi9CYXNlT2JqZWN0J1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1bGxldEJhc2UnKVxyXG5leHBvcnQgY2xhc3MgQnVsbGV0QmFzZSBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgc3BlZWRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY2NZOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5hY2NZO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0aW9uOiBWZWMyID0gdjIoMCwgMCk7XHJcbiAgICAvLyBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbml0U3BlZWRZID0gNjsgLy/lvLnotbfnmoTliJ3lp4vpgJ/luqZcclxuICAgIHByaXZhdGUgY3VycmVudENvc3RBY2MgPSAtMzsgICAvL+W8uei1t+eahOiDvemHj+aNn+WksVxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgLy8gcHVibGljIGJvZHlOb2RlOiBOb2RlID0gbnVsbDsvL+i6q+S9k1xyXG4gICAgcHJpdmF0ZSBtYXhMZWZ0VGltZTogbnVtYmVyID0gMSArIE1hdGgucmFuZG9tKCk7IC8v5pyA5aSn55Sf5a2Y5pe26Ze0XHJcbiAgICBwcml2YXRlIGNvbGxpZGVyQ29tcG9uZW50OiBDb2xsaWRlckNvbXBvbmVudCA9IG51bGw7IC8v56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGJhc2VBdHRhY2tOdW06IG51bWJlciA9IDA7IC8v5Z+656GA5pS75Ye75YC8XHJcbiAgICBwcm90ZWN0ZWQgZ2FtZUNvbmZpZ0pzb246IE9iamVjdCA9IHt9OyAvL+a4uOaIj+mFjee9rlxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImluaXQtZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInNsZWVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKT0+e1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGluaXQoZ2FtZUNvbmZpZzoge30sIGRhdGEpIHtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuYmFzZUF0dGFja051bSArPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYXNlIGF0dGFjayBudW1cIiwgdGhpcy5iYXNlQXR0YWNrTnVtKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGF0YS5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gbmV3IFZlYzIoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KS5zaWduQW5nbGUodjIoMCwgLTEpKTtcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB2MygwLCBhbmdsZSAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgICAgIC8vIGxldCB0YXJnZXRFbmVteTogTm9kZSA9IGRhdGEudGFyZ2V0RW5lbXk7XHJcbiAgICAgICAgLy8gaWYodGFyZ2V0RW5lbXkpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUubG9va0F0KHRhcmdldEVuZW15LnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnXHJcbiAgICAgICAgLy8gdGhpcy5iYXNlQXR0YWNrTnVtID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkJhc2VBdHRhY2tOdW07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55ICogMiAvIHRoaXMuYWNjWSAqIC0xO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic1wiLCBzKTtcclxuICAgICAgICAvLyBsZXQgbW92ZVRpbWU6IG51bWJlciA9IE1hdGguc3FydChzKTtcclxuICAgICAgICAvLyBsZXQgZGlzOiBudW1iZXIgPSB2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopLnN1YnRyYWN0KHYyKHRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRhcmdldEVuZW15LnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcclxuICAgICAgICAvLyB0aGlzLm1vdmVTcGVlZCA9IGRpcyAvIG1vdmVUaW1lO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAvL+iOt+WPlueisOaSnue7hOS7tlxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCB0aGlzLmNvbGxpZGVyQ29tcG9uZW50KVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb21wb25lbnQub24oXCJvblRyaWdnZXJFbnRlclwiLCB0aGlzLm9uVHJpZ2dlckVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCB0aGlzLmxlZnRUaW1lKVxyXG4gICAgfVxyXG4gICAgb25UcmlnZ2VyRW50ZXIoZXZlbnQ6IElUcmlnZ2VyRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uVHJpZ2dlckVudGVyXCIsIGV2ZW50KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwic2xlZXBcIik7XHJcblxyXG4gICAgICAgIGxldCBvdGhlckNvbGxpZGVyOiBDb2xsaWRlckNvbXBvbmVudCA9IGV2ZW50Lm90aGVyQ29sbGlkZXI7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZSAmJiBvdGhlckNvbGxpZGVyLm5vZGUubmFtZS5pbmRleE9mKFwiV2FsbFwiKSA+IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgb3RoZXIgY29sbGllciBub2RlXCIsIG90aGVyQ29sbGlkZXIubm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIgJiYgb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKSAmJiAhb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgYXR0YWNrIG51bVwiLCB0aGlzLmJhc2VBdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZW1pdChcImJlLWF0dGFja2VkXCIsIHtcclxuICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW06IHRoaXMuYmFzZUF0dGFja051bSxcclxuICAgICAgICAgICAgICAgIGJhc2VHYXNOdW06IHRoaXMuYmFzZUdhc051bVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYmFzZUdhc051bSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJDb21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldEJhc2UpO1xyXG4gICAgICAgIC8vIC8v6I635Y+W56Kw5pKe57uE5Lu2XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZSB1dWlkXCIsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpZGVyOlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbGxpZGVyQ29tcG9uZW50KSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlckNvbXBvbmVudC5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIix0aGlzLm9uQ29sbGlzaW9uRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyB0aGlzLnNwZWVkWSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgbGV0IHYgPSBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgeSwgcG9zLnogKyB2LnkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb2xsaXNpb25Hcm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuY3VycmVudEluaXRTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5pdFNwZWVkWSArPSB0aGlzLmN1cnJlbnRDb3N0QWNjO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbml0U3BlZWRZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdzbGVlcCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=