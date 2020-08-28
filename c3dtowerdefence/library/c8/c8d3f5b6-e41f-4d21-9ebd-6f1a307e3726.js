System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, v3, Vec3, Tween, isValid, ProgressBarComponent, State, GameController, BaseObject, _dec, _class, _temp, _crd, ccclass, property, EnemyBase;

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
      isValid = _cc.isValid;
      ProgressBarComponent = _cc.ProgressBarComponent;
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
          return _this;
        }

        _createClass(EnemyBase, [{
          key: "init",
          value: function init(gameConfig, pathList) {
            var _this2 = this;

            // console.log("enemy base init")
            this.gameConfigJson = gameConfig.json;
            this.moveSpeed = this.gameConfigJson['CubeEnemy'].MoveSpeed;
            this.healthCount = this.gameConfigJson['CubeEnemy'].HealthCount;
            this.currentHealthCount = this.healthCount;
            this.pathList = pathList;
            var pos = pathList[0].getPosition();
            pos.y = 1;
            this.node.setPosition(pos);
            this.node.scale = v3(0, 0, 0);
            var tw = new Tween(this.node);
            tw.to(0.2, {
              scale: v3(1, 1, 1)
            });
            tw.call(function () {
              _this2.state.setState("run");
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
              var tw = new Tween(_this3.node);

              for (var i = 1; i < _this3.pathList.length; i++) {
                var currentPos = _this3.pathList[i - 1].position;
                var nextPos = _this3.pathList[i].position;

                var moveTime = new Vec3(nextPos).subtract(currentPos).length() / _this3.moveSpeed; // console.log("length ", length);
                // console.log("move time", moveTime);


                tw.to(moveTime, {
                  position: v3(nextPos.x, 0.5, nextPos.z)
                });
              }

              tw.call(function () {
                _this3.state.setState("to-dead");
              }); // tw.to(0.2, { scale: v3(0, 0, 0) });
              // tw.call(() => {
              //     this.state.setState("over");
              //     this.node.emit("destroy-self");
              // })
              //     .delay(0.2)
              //     .call(() => {
              //         this.node.destroy();
              //         this.state.setState("to-dead");
              //     })
              // tw.to(1, { position: v3(0, 0, 0) });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJ2MyIsIlZlYzMiLCJUd2VlbiIsImlzVmFsaWQiLCJQcm9ncmVzc0JhckNvbXBvbmVudCIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJCYXNlT2JqZWN0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5lbXlCYXNlIiwicGF0aExpc3QiLCJzdGF0ZSIsImN1cnJlbnRQYXRoSW5kZXgiLCJtb3ZlU3BlZWQiLCJiZUxvY2tlZE1heE51bSIsImVuZW15QmVMb2NrTWF4TnVtIiwiY3VycmVudGJlTG9ja2VkQ291bnQiLCJjYW1lcmFOb2RlIiwiaGVhbHRoQmFyIiwiZ2FtZUNvbmZpZ0pzb24iLCJoZWFsdGhDb3VudCIsImN1cnJlbnRIZWFsdGhDb3VudCIsImdhbWVDb25maWciLCJqc29uIiwiTW92ZVNwZWVkIiwiSGVhbHRoQ291bnQiLCJwb3MiLCJnZXRQb3NpdGlvbiIsInkiLCJub2RlIiwic2V0UG9zaXRpb24iLCJzY2FsZSIsInR3IiwidG8iLCJjYWxsIiwic2V0U3RhdGUiLCJzdGFydCIsIm9uIiwiYWRkU3RhdGUiLCJlbWl0IiwiZGVzdHJveSIsImkiLCJsZW5ndGgiLCJjdXJyZW50UG9zIiwicG9zaXRpb24iLCJuZXh0UG9zIiwibW92ZVRpbWUiLCJzdWJ0cmFjdCIsIngiLCJ6IiwiYXR0YWNrTnVtIiwiZ2V0Q29tcG9uZW50IiwicHJvZ3Jlc3MiLCJnZXRTdGF0ZSIsInRvd2VyIiwiZGVsdGFUaW1lIiwiY29udmVydFRvVUlOb2RlIiwiZ2V0V29ybGRQb3NpdGlvbiIsInBhcmVudCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXdDQyxNQUFB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Q0FDdUI7QUFDcEIsZ0JBQUksS0FBS3JDLG9CQUFMLEdBQTRCLEtBQUtGLGNBQXJDLEVBQXFEO0FBQ2pELHFCQUFPLElBQVA7QUFDSDs7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7OztzQ0FDV3dDLEssRUFBYTtBQUNyQixpQkFBS3RDLG9CQUFMO0FBQ0g7Ozt3Q0FDYXNDLEssRUFBYTtBQUN2QixpQkFBS3RDLG9CQUFMO0FBQ0g7OztpQ0FDTXVDLFMsRUFBbUI7QUFDdEI7QUFDQSxnQkFBSSxLQUFLNUMsS0FBTCxDQUFXMEMsUUFBWCxPQUEwQixLQUE5QixFQUFvQztBQUNoQyxrQkFBSSxLQUFLbkMsU0FBTCxJQUFrQixLQUFLRCxVQUEzQixFQUF1QztBQUNuQyxvQkFBSVMsR0FBUyxHQUFHM0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQjtBQUNBLHFCQUFLa0IsVUFBTCxDQUFnQnVDLGVBQWhCLENBQWdDLEtBQUszQixJQUFMLENBQVU0QixnQkFBVixFQUFoQyxFQUE4RCxLQUFLdkMsU0FBTCxDQUFld0MsTUFBN0UsRUFBcUZoQyxHQUFyRjtBQUNBQSxnQkFBQUEsR0FBRyxDQUFDRSxDQUFKLElBQVMsRUFBVCxDQUhtQyxDQUluQzs7QUFDQSxxQkFBS1YsU0FBTCxDQUFlWSxXQUFmLENBQTJCSixHQUEzQjtBQUNBLHFCQUFLUixTQUFMLENBQWV5QyxNQUFmLEdBQXdCLElBQXhCLENBTm1DLENBT25DO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0ludGVnZXIsIHYzLCBWZWMzLCB0d2VlbiwgcGF0aCwgVHdlZW4sIENhbWVyYUNvbXBvbmVudCwgVmVjMiwgdjIsIEpzb25Bc3NldCwgZ2FtZSwgaXNWYWxpZCwgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi8uLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInO1xyXG4vLyBpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknO1xyXG5pbXBvcnQge0Jhc2VPYmplY3R9IGZyb20gJy4vLi4vQmFzZU9iamVjdCdcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuQGNjY2xhc3MoJ0VuZW15QmFzZScpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIHB1YmxpYyBwYXRoTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwdWJsaWMgY3VycmVudFBhdGhJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGJlTG9ja2VkTWF4TnVtOiBudW1iZXIgPSBHYW1lQ29udHJvbGxlci5lbmVteUJlTG9ja01heE51bTtcclxuICAgIHB1YmxpYyBjdXJyZW50YmVMb2NrZWRDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWFsdGhCYXI6IE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGdhbWVDb25maWdKc29uOiBPYmplY3QgPSBudWxsO1xyXG4gICAgcHVibGljIGhlYWx0aENvdW50Om51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudEhlYWx0aENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KGdhbWVDb25maWc6IEpzb25Bc3NldCwgcGF0aExpc3Q6IE5vZGVbXSApe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgYmFzZSBpbml0XCIpXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnSnNvbiA9IGdhbWVDb25maWcuanNvbjtcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IHRoaXMuZ2FtZUNvbmZpZ0pzb25bJ0N1YmVFbmVteSddLk1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmhlYWx0aENvdW50ID0gdGhpcy5nYW1lQ29uZmlnSnNvblsnQ3ViZUVuZW15J10uSGVhbHRoQ291bnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoQ291bnQgPSB0aGlzLmhlYWx0aENvdW50O1xyXG4gICAgICAgIHRoaXMucGF0aExpc3QgPSBwYXRoTGlzdDtcclxuICAgICAgICBsZXQgcG9zID0gcGF0aExpc3RbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBwb3MueSA9IDE7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdHcudG8oMC4yLCB7IHNjYWxlOiB2MygxLCAxLCAxKSB9KVxyXG4gICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2V0LWhlYWx0aC1iYXJcIiwgKGhlYWx0aEJhcjogTm9kZSwgY2FtZXJhTm9kZTogQ2FtZXJhQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyID0gaGVhbHRoQmFyO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYU5vZGUgPSBjYW1lcmFOb2RlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwidG8tZGVhZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaGVhbHRoQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMix7c2NhbGU6IHYzKDAsMCwwKX0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwib3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1zZWxmXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJydW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucGF0aExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5wYXRoTGlzdFtpIC0gMV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBvcyA9IHRoaXMucGF0aExpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgbW92ZVRpbWUgPSBuZXcgVmVjMyhuZXh0UG9zKS5zdWJ0cmFjdChjdXJyZW50UG9zKS5sZW5ndGgoKSAvIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGggXCIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmUgdGltZVwiLCBtb3ZlVGltZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogdjMobmV4dFBvcy54LCAwLjUsIG5leHRQb3MueikgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHcuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInRvLWRlYWRcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMCwgMCwgMCkgfSk7XHJcbiAgICAgICAgICAgIC8vIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcIm92ZXJcIik7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZW1pdChcImRlc3Ryb3ktc2VsZlwiKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gICAgIC5kZWxheSgwLjIpXHJcbiAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwidG8tZGVhZFwiKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIHR3LnRvKDEsIHsgcG9zaXRpb246IHYzKDAsIDAsIDApIH0pO1xyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJ1blwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKXtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaGVhbHRoQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJiZS1hdHRhY2tlZFwiLCAoYXR0YWNrTnVtKT0+e1xyXG4gICAgICAgICAgICAvL+iiq+aUu+WHu1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiiq+aUu+WHu1wiLCBhdHRhY2tOdW0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAtPSBhdHRhY2tOdW1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCA8PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhlYWx0aENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJ0by1kZWFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGlzVmFsaWQodGhpcy5oZWFsdGhCYXIpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmdldENvbXBvbmVudChQcm9ncmVzc0JhckNvbXBvbmVudCkucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRIZWFsdGhDb3VudCAvIHRoaXMuaGVhbHRoQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKFwicmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ292ZXInIHx8IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3RvLWRlYWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJc0NhbkxvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQgPCB0aGlzLmJlTG9ja2VkTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRCZUxvY2tlZCh0b3dlcjogTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGJlTG9ja2VkQ291bnQrKztcclxuICAgIH1cclxuICAgIHVuU2V0QmVMb2NrZWQodG93ZXI6IE5vZGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRiZUxvY2tlZENvdW50LS07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIgJiYgdGhpcy5jYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYU5vZGUuY29udmVydFRvVUlOb2RlKHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCksIHRoaXMuaGVhbHRoQmFyLnBhcmVudCwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDUwO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5oZWFsdGhCYXIuc2V0U2NhbGUodjMocG9zLnosIHBvcy56LCBwb3MueikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==