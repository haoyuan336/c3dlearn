System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, v3, Vec3, Tween, Vec2, v2, isValid, ProgressBarComponent, SkeletalAnimationComponent, State, GameController, BaseObject, _dec, _class, _temp, _crd, ccclass, property, EnemyBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./../util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./../BaseObject", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      Vec2 = _cc.Vec2;
      v2 = _cc.v2;
      isValid = _cc.isValid;
      ProgressBarComponent = _cc.ProgressBarComponent;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
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
      _cclegacy._RF.push({}, "c8d3fW25B9NIZ69bxowfjcm", "EnemyBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyBase", EnemyBase = (_dec = ccclass('EnemyBase'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(EnemyBase, _ref);

        function EnemyBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.pathList = [];
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentPathIndex = 0;
          _this.moveSpeed = 10;
          _this.beLockedMaxNum = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).enemyBeLockMaxNum;
          _this.currentbeLockedCount = 0;
          _this.cameraNode = null;
          _this.healthBar = null;
          _this.gameConfigJson = null;
          _this.healthCount = 0;
          _this.currentHealthCount = 0;
          _this.endPos = null;
          _this.startPos = null;
          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, startPos, endPos) {
            var _this2 = this;

            // console.log("enemy base init")
            this.gameConfigJson = gameConfig;
            this.moveSpeed = this.gameConfigJson[this.objectType].MoveSpeed;
            this.healthCount = this.gameConfigJson[this.objectType].HealthCount;
            this.beLockedMaxNum = this.gameConfigJson[this.objectType].BeLockedCount;
            this.currentHealthCount = this.healthCount;
            this.endPos = endPos;
            this.startPos = startPos; // this.pathList = pathList;
            // let pos = pathList[0].getPosition();
            // pos.y = 0;
            // this.node.setPosition(pos);

            this.node.setPosition(startPos);
            this.node.scale = v3(0, 0, 0);
            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {
              _this2.state.setState("run");

              var skeleteAnim = _this2.rootNode.getComponent(SkeletalAnimationComponent);

              if (skeleteAnim) {
                if (skeleteAnim.defaultClip) {
                  var defaultClip = skeleteAnim.defaultClip.name;
                  var animState = skeleteAnim.getState(defaultClip);
                  var length = animState.length;
                  animState.speed = _this2.moveSpeed * _this2.animSpeedMulOffset;
                }
              }
            });
            tw.start();
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this3 = this;

            this.node.on("set-health-bar", function (healthBar, cameraNode) {
              _this3.healthBar = healthBar;
              _this3.cameraNode = cameraNode;
            });
            this.state.addState("to-dead", function () {
              // this.healthBar.destroy();
              var tw = new Tween(_this3.node);
              tw.to(0.2, {
                scale: v3(0, 0, 0)
              });
              tw.call(function () {
                _this3.state.setState("over");

                _this3.node.emit("destroy-self");

                _this3.node.destroy();
              });
              tw.start();

              if (isValid(_this3.healthBar)) {
                _this3.healthBar.destroy();
              }
            });
            this.state.addState("run", function () {
              // console.log("start move");
              var tw = new Tween(_this3.node); // for (let i = 1; i < this.pathList.length; i++) {
              //     let currentPos = this.pathList[i - 1].position;
              //     let nextPos = this.pathList[i].position;
              //     let moveTime = new Vec3(nextPos).subtract(currentPos).length() / this.moveSpeed;
              //     // console.log("length ", length);
              //     // console.log("move time", moveTime);
              //     tw.to(moveTime, { position: v3(nextPos.x,0, nextPos.z) });
              // }

              var moveTime = new Vec3(_this3.startPos).subtract(_this3.endPos).length() / _this3.moveSpeed; // this.node.getComponent(RigidBodyComponent).applyForce(v3(0,0,1));


              var direction = new Vec3(_this3.startPos).subtract(_this3.endPos).normalize();
              var angle = new Vec2(direction.x, direction.z).signAngle(v2(-1, 0)); // console.log('angle', angle);

              _this3.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0); // this.node.getComponent(RigidBodyComponent).setLinearVelocity(direction);

              tw.to(moveTime, {
                position: _this3.endPos
              });
              tw.call(function () {
                _this3.state.setState("to-dead");
              });
              tw.to(0.2, {
                scale: v3(0, 0, 0)
              });
              tw.call(function () {
                _this3.state.setState("over");

                _this3.node.emit("destroy-self");
              }).delay(0.2).call(function () {
                _this3.node.destroy();

                _this3.state.setState("to-dead");
              });
              tw.to(1, {
                position: v3(0, 0, 0)
              });
              tw.start();

              _this3.node.emit("run");

              if (_this3.healthBar) {// this.healthBar.active = true;
              }
            });
            this.node.on("be-attacked", function (attackNum) {
              //被攻击
              // console.log("被攻击", attackNum);
              _this3.currentHealthCount -= attackNum;

              if (_this3.currentHealthCount <= 0) {
                _this3.currentHealthCount = 0;

                _this3.state.setState("to-dead");
              }

              if (isValid(_this3.healthBar)) {
                _this3.healthBar.getComponent(ProgressBarComponent).progress = _this3.currentHealthCount / _this3.healthCount;
              }
            });
          }
        }, {
          key: "start",
          value: function start() {// this.state.setState("ready");
          }
        }, {
          key: "getIsDead",
          value: function getIsDead() {
            if (this.state.getState() === 'over' || this.state.getState() === 'to-dead') {
              return true;
            }

            return false;
          }
        }, {
          key: "getIsCanLock",
          value: function getIsCanLock() {
            if (this.currentbeLockedCount < this.beLockedMaxNum) {
              return true;
            }

            return false;
          }
        }, {
          key: "setBeLocked",
          value: function setBeLocked(tower) {
            this.currentbeLockedCount++;
          }
        }, {
          key: "unSetBeLocked",
          value: function unSetBeLocked(tower) {
            this.currentbeLockedCount--;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.state.getState() === 'run') {
              if (this.healthBar && this.cameraNode) {
                var pos = v3(0, 0, 0);
                this.cameraNode.convertToUINode(this.node.getWorldPosition(), this.healthBar.parent, pos);
                pos.y += 50; // console.log("pos", pos);

                this.healthBar.setPosition(pos);
                this.healthBar.active = true; // this.healthBar.setScale(v3(pos.z, pos.z, pos.z));
              }
            }
          }
        }]);

        return EnemyBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJ2MyIsIlZlYzMiLCJUd2VlbiIsIlZlYzIiLCJ2MiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUJhc2UiLCJwYXRoTGlzdCIsInN0YXRlIiwiY3VycmVudFBhdGhJbmRleCIsIm1vdmVTcGVlZCIsImJlTG9ja2VkTWF4TnVtIiwiZW5lbXlCZUxvY2tNYXhOdW0iLCJjdXJyZW50YmVMb2NrZWRDb3VudCIsImNhbWVyYU5vZGUiLCJoZWFsdGhCYXIiLCJnYW1lQ29uZmlnSnNvbiIsImhlYWx0aENvdW50IiwiY3VycmVudEhlYWx0aENvdW50IiwiZW5kUG9zIiwic3RhcnRQb3MiLCJnYW1lQ29uZmlnIiwib2JqZWN0VHlwZSIsIk1vdmVTcGVlZCIsIkhlYWx0aENvdW50IiwiQmVMb2NrZWRDb3VudCIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInNjYWxlIiwidHciLCJ0byIsImNhbGwiLCJzZXRTdGF0ZSIsInNrZWxldGVBbmltIiwicm9vdE5vZGUiLCJnZXRDb21wb25lbnQiLCJkZWZhdWx0Q2xpcCIsIm5hbWUiLCJhbmltU3RhdGUiLCJnZXRTdGF0ZSIsImxlbmd0aCIsInNwZWVkIiwiYW5pbVNwZWVkTXVsT2Zmc2V0Iiwic3RhcnQiLCJvbiIsImFkZFN0YXRlIiwiZW1pdCIsImRlc3Ryb3kiLCJtb3ZlVGltZSIsInN1YnRyYWN0IiwiZGlyZWN0aW9uIiwibm9ybWFsaXplIiwiYW5nbGUiLCJ4IiwieiIsInNpZ25BbmdsZSIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwicG9zaXRpb24iLCJkZWxheSIsImF0dGFja051bSIsInByb2dyZXNzIiwidG93ZXIiLCJkZWx0YVRpbWUiLCJwb3MiLCJjb252ZXJ0VG9VSU5vZGUiLCJnZXRXb3JsZFBvc2l0aW9uIiwicGFyZW50IiwieSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXdDQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7QUFBd0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxFLE9BQUFBLEU7QUFBcUJDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxvQixPQUFBQSxvQjtBQUEwQ0MsTUFBQUEsMEIsT0FBQUEsMEI7Ozs7QUFDcktDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7O0FBRUFDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCWixVLENBQXRCWSxPO0FBQVNDLE1BQUFBLFEsR0FBYWIsVSxDQUFiYSxROzsyQkFFSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUdHLFEsR0FBbUIsRTtnQkFDbkJDLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ2ZDLGdCLEdBQTJCLEM7Z0JBQzNCQyxTLEdBQW9CLEU7Z0JBQ3BCQyxjLEdBQXlCO0FBQUE7QUFBQSxnREFBZUMsaUI7Z0JBQ3hDQyxvQixHQUF1QixDO2dCQUN2QkMsVSxHQUE4QixJO2dCQUM5QkMsUyxHQUFrQixJO2dCQUNsQkMsYyxHQUF5QixJO2dCQUN6QkMsVyxHQUFzQixDO2dCQUN0QkMsa0IsR0FBNkIsQztnQkFDNUJDLE0sR0FBZSxJO2dCQUNmQyxRLEdBQWlCLEk7Ozs7OzsrQkFFYkMsVSxFQUFvQkQsUSxFQUFnQkQsTSxFQUFjO0FBQUE7O0FBQzFEO0FBQ0EsaUJBQUtILGNBQUwsR0FB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VixFQUFoQyxFQUE4RCxLQUFLcEQsU0FBTCxDQUFlcUQsTUFBN0UsRUFBcUZILEdBQXJGO0FBQ0FBLGdCQUFBQSxHQUFHLENBQUNJLENBQUosSUFBUyxFQUFULENBSG1DLENBSW5DOztBQUNBLHFCQUFLdEQsU0FBTCxDQUFlWSxXQUFmLENBQTJCc0MsR0FBM0I7QUFDQSxxQkFBS2xELFNBQUwsQ0FBZXVELE1BQWYsR0FBd0IsSUFBeEIsQ0FObUMsQ0FPbkM7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgdjMsIFZlYzMsIHR3ZWVuLCBwYXRoLCBUd2VlbiwgQ2FtZXJhQ29tcG9uZW50LCBWZWMyLCB2MiwgSnNvbkFzc2V0LCBnYW1lLCBpc1ZhbGlkLCBQcm9ncmVzc0JhckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9HYW1lQ29udHJvbGxlcic7XHJcbi8vIGltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLy4uL0Jhc2VPYmplY3QnXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKCdFbmVteUJhc2UnKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICBwdWJsaWMgcGF0aExpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBiZUxvY2tlZE1heE51bTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuZW5lbXlCZUxvY2tNYXhOdW07XHJcbiAgICBwdWJsaWMgY3VycmVudGJlTG9ja2VkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVhbHRoQmFyOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjogT2JqZWN0ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50SGVhbHRoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGVuZFBvczogVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXJ0UG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdChnYW1lQ29uZmlnOiBPYmplY3QsIHN0YXJ0UG9zOiBWZWMzLCBlbmRQb3M6IFZlYzMpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IGJhc2UgaW5pdFwiKVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZ0pzb24gPSBnYW1lQ29uZmlnO1xyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLk1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblt0aGlzLm9iamVjdFR5cGVdLkhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMuYmVMb2NrZWRNYXhOdW0gPSB0aGlzLmdhbWVDb25maWdKc29uW3RoaXMub2JqZWN0VHlwZV0uQmVMb2NrZWRDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIC8vIHRoaXMucGF0aExpc3QgPSBwYXRoTGlzdDtcclxuICAgICAgICAvLyBsZXQgcG9zID0gcGF0aExpc3RbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBwb3MueSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0pXHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgIGxldCBza2VsZXRlQW5pbSA9IHRoaXMucm9vdE5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KVxyXG4gICAgICAgICAgICBpZiAoc2tlbGV0ZUFuaW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChza2VsZXRlQW5pbS5kZWZhdWx0Q2xpcCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRDbGlwID0gc2tlbGV0ZUFuaW0uZGVmYXVsdENsaXAubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5pbVN0YXRlID0gc2tlbGV0ZUFuaW0uZ2V0U3RhdGUoZGVmYXVsdENsaXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbmltU3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGF0ZS5zcGVlZCA9IHRoaXMubW92ZVNwZWVkICogdGhpcy5hbmltU3BlZWRNdWxPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNldC1oZWFsdGgtYmFyXCIsIChoZWFsdGhCYXI6IE5vZGUsIGNhbWVyYU5vZGU6IENhbWVyYUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhciA9IGhlYWx0aEJhcjtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFOb2RlID0gY2FtZXJhTm9kZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInRvLWRlYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhlYWx0aEJhci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZXN0cm95LXNlbGZcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5wYXRoTGlzdFtpIC0gMV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbmV4dFBvcyA9IHRoaXMucGF0aExpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyhuZXh0UG9zKS5zdWJ0cmFjdChjdXJyZW50UG9zKS5sZW5ndGgoKSAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGggXCIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmUgdGltZVwiLCBtb3ZlVGltZSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0dy50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogdjMobmV4dFBvcy54LDAsIG5leHRQb3MueikgfSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtb3ZlVGltZSA9IG5ldyBWZWMzKHRoaXMuc3RhcnRQb3MpLnN1YnRyYWN0KHRoaXMuZW5kUG9zKS5sZW5ndGgoKSAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCkuYXBwbHlGb3JjZSh2MygwLDAsMSkpO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFZlYzModGhpcy5zdGFydFBvcykuc3VidHJhY3QodGhpcy5lbmRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBuZXcgVmVjMihkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnopLnNpZ25BbmdsZSh2MigtMSwgMCkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYW5nbGUnLCBhbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIGFuZ2xlICogMTgwIC8gTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KS5zZXRMaW5lYXJWZWxvY2l0eShkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB0dy50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogdGhpcy5lbmRQb3MgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktc2VsZlwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnRvKDEsIHsgcG9zaXRpb246IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJ1blwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYmUtYXR0YWNrZWRcIiwgKGF0dGFja051bSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBhdHRhY2tOdW1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmhlYWx0aEJhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyICYmIHRoaXMuY2FtZXJhTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFOb2RlLmNvbnZlcnRUb1VJTm9kZSh0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLmhlYWx0aEJhci5wYXJlbnQsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSA1MDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaGVhbHRoQmFyLnNldFNjYWxlKHYzKHBvcy56LCBwb3MueiwgcG9zLnopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=