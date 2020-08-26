System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, v3, v2, State, GameController, _dec, _class, _temp, _crd, ccclass, property, Bullet;

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
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
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
      Component = _cc.Component;
      v3 = _cc.v3;
      v2 = _cc.v2;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "90e683Z9ntM7pLuSDO8IdqW", "Bullet", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Bullet, _Component);

        function Bullet() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Bullet);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Bullet)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
          _this.currentCostAcc = -2;
          return _this;
        }

        _createClass(Bullet, [{
          key: "onLoad",
          //弹起的能量损失
          value: function onLoad() {
            var _this2 = this;

            this.node.on("init-data", function (data) {
              var direction = data.direction;
              _this2.currentDirection = direction;
              var targetEnemy = data.targetEnemy;

              _this2.state.setState("run");

              var s = _this2.node.getPosition().y * 2 / _this2.accY * -1; // console.log("s", s);

              var moveTime = Math.sqrt(s);
              var dis = v2(_this2.node.position.x, _this2.node.position.z).subtract(v2(targetEnemy.position.x, targetEnemy.position.z)).length();
              _this2.moveSpeed = dis / moveTime;
            });
            this.scheduleOnce(function () {
              _this2.node.destroy();
            }, 5);
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
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
                this.node.destroy();
                this.speedY = this.currentInitSpeedY;
                this.currentInitSpeedY += this.currentCostAcc;

                if (this.currentInitSpeedY < 0) {
                  this.node.destroy();
                }
              }
            }
          }
        }]);

        return Bullet;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2R0b3dlcmRlZmVuY2UvYXNzZXRzL1NjcmlwdHMvQnVsbGV0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJ2MyIsInYyIiwiU3RhdGUiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJ1bGxldCIsInN0YXRlIiwic3BlZWRZIiwiYWNjWSIsImN1cnJlbnREaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJjdXJyZW50SW5pdFNwZWVkWSIsImN1cnJlbnRDb3N0QWNjIiwibm9kZSIsIm9uIiwiZGF0YSIsImRpcmVjdGlvbiIsInRhcmdldEVuZW15Iiwic2V0U3RhdGUiLCJzIiwiZ2V0UG9zaXRpb24iLCJ5IiwibW92ZVRpbWUiLCJNYXRoIiwic3FydCIsImRpcyIsInBvc2l0aW9uIiwieCIsInoiLCJzdWJ0cmFjdCIsImxlbmd0aCIsInNjaGVkdWxlT25jZSIsImRlc3Ryb3kiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsInBvcyIsIm5vcm1hbGl6ZSIsInYiLCJtdWx0aXBseVNjYWxhciIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDakNDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzt3QkFHSkMsTSxXQURaRixPQUFPLENBQUMsUUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUlHLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ2ZDLE0sR0FBaUIsQztnQkFD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QyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB2MywgdjIsIFZlYzIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0J1bGxldCcpXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xuICAgIHByaXZhdGUgc3BlZWRZOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYWNjWTogbnVtYmVyID0gR2FtZUNvbnRyb2xsZXIuYWNjWTtcbiAgICBwcml2YXRlIGN1cnJlbnREaXJlY3Rpb246IFZlYzIgPSB2MigwLCAwKTtcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMjA7XG4gICAgcHJpdmF0ZSBjdXJyZW50SW5pdFNwZWVkWSA9IDY7IC8v5by56LW355qE5Yid5aeL6YCf5bqmXG4gICAgcHJpdmF0ZSBjdXJyZW50Q29zdEFjYyA9IC0yOyAgIC8v5by56LW355qE6IO96YeP5o2f5aSxXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0LWRhdGFcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBkYXRhLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbmVteTogTm9kZSA9IGRhdGEudGFyZ2V0RW5lbXk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xuICAgICAgICAgICAgbGV0IHMgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55ICogMiAvIHRoaXMuYWNjWSAqIC0xO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzXCIsIHMpO1xuICAgICAgICAgICAgbGV0IG1vdmVUaW1lOiBudW1iZXIgPSBNYXRoLnNxcnQocyk7XG4gICAgICAgICAgICBsZXQgZGlzOiBudW1iZXIgPSB2Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnopLnN1YnRyYWN0KHYyKHRhcmdldEVuZW15LnBvc2l0aW9uLngsIHRhcmdldEVuZW15LnBvc2l0aW9uLnopKS5sZW5ndGgoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVNwZWVkID0gZGlzIC8gbW92ZVRpbWU7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9LCA1KVxuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY1kgKiBkZWx0YVRpbWU7XG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IHkgPSBwb3MueSArIHRoaXMuc3BlZWRZICogZGVsdGFUaW1lO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIGxldCB2ID0gZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Myhwb3MueCArIHYueCwgeSwgcG9zLnogKyB2LnkpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLmN1cnJlbnRJbml0U3BlZWRZO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluaXRTcGVlZFkgKz0gdGhpcy5jdXJyZW50Q29zdEFjYztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5pdFNwZWVkWSA8IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=