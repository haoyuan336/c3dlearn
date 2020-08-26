System.register(["cc", "code-quality:cr", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, v3, Vec3, Tween, State, _dec, _class, _temp, _crd, ccclass, property, Enemy;

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
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ac439Ca0GFJGrdHaYw+IQip", "Enemy", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Enemy, _Component);

        function Enemy() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Enemy);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Enemy)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.pathList = [];
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentPathIndex = 0;
          _this.moveSpeed = 1;
          return _this;
        }

        _createClass(Enemy, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.on("init-data", function (pathList) {
              // console.log("init enemy path data");
              _this2.pathList = pathList;
              var pos = pathList[0].getPosition();
              pos.y = 1;

              _this2.node.setPosition(pos);

              _this2.node.scale = v3(0, 0, 0);
              var tw = new Tween(_this2.node);
              tw.to(0.2, {
                scale: v3(1, 1, 1)
              });
              tw.call(function () {
                _this2.state.setState("run");
              });
              tw.start();
            });
            this.state.addState("run", function () {
              // console.log("start move");
              var tw = new Tween(_this2.node);

              for (var i = 1; i < _this2.pathList.length; i++) {
                var currentPos = _this2.pathList[i - 1].position;
                var nextPos = _this2.pathList[i].position;

                var moveTime = new Vec3(nextPos).subtract(currentPos).length() / _this2.moveSpeed; // console.log("length ", length);
                // console.log("move time", moveTime);


                tw.to(moveTime, {
                  position: v3(nextPos.x, 1, nextPos.z)
                });
              }

              tw.to(0.2, {
                scale: v3(0, 0, 0)
              });
              tw.call(function () {
                _this2.state.setState("over");

                _this2.node.emit("destroy-self");
              }).delay(0.2).call(function () {
                _this2.node.destroy();
              }); // tw.to(1, { position: v3(0, 0, 0) });

              tw.start();
            });
          }
        }, {
          key: "start",
          value: function start() {// this.state.setState("ready");
          }
        }, {
          key: "getIsDead",
          value: function getIsDead() {
            if (this.state.getState() === 'over') {
              return true;
            }

            return false;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);

        return Enemy;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2R0b3dlcmRlZmVuY2UvYXNzZXRzL1NjcmlwdHMvRW5lbXkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInYzIiwiVmVjMyIsIlR3ZWVuIiwiU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteSIsInBhdGhMaXN0Iiwic3RhdGUiLCJjdXJyZW50UGF0aEluZGV4IiwibW92ZVNwZWVkIiwibm9kZSIsIm9uIiwicG9zIiwiZ2V0UG9zaXRpb24iLCJ5Iiwic2V0UG9zaXRpb24iLCJzY2FsZSIsInR3IiwidG8iLCJjYWxsIiwic2V0U3RhdGUiLCJzdGFydCIsImFkZFN0YXRlIiwiaSIsImxlbmd0aCIsImN1cnJlbnRQb3MiLCJwb3NpdGlvbiIsIm5leHRQb3MiLCJtb3ZlVGltZSIsInN1YnRyYWN0IiwieCIsInoiLCJlbWl0IiwiZGVsYXkiLCJkZXN0cm95IiwiZ2V0U3RhdGUiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQTRCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDL0RDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzt1QkFFSkMsSyxXQURaRixPQUFPLENBQUMsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBRUlHLFEsR0FBbUIsRTtnQkFDbkJDLEssR0FBZTtBQUFBO0FBQUEsK0I7Z0JBQ2ZDLGdCLEdBQTJCLEM7Z0JBQzNCQyxTLEdBQW9CLEM7Ozs7OzttQ0FDbkI7QUFBQTs7QUFDTCxpQkFBS0MsSUFBTCxDQUFVQyxF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SDs7O2lDQUVNQyxTLEVBQW1CLENBQ3RCO0FBRUg7Ozs7UUEzRHNCdEMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NJbnRlZ2VyLCB2MywgVmVjMywgdHdlZW4sIHBhdGgsIFR3ZWVuIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuQGNjY2xhc3MoJ0VuZW15JylcbmV4cG9ydCBjbGFzcyBFbmVteSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBwYXRoTGlzdDogTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcbiAgICBwcml2YXRlIGN1cnJlbnRQYXRoSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDE7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0LWRhdGFcIiwgKHBhdGhMaXN0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgZW5lbXkgcGF0aCBkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5wYXRoTGlzdCA9IHBhdGhMaXN0O1xuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhMaXN0WzBdLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBwb3MueSA9IDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHYzKDAsMCwwKTtcblxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB0dy50bygwLjIsIHtzY2FsZTogdjMoMSwxLDEpfSlcbiAgICAgICAgICAgIHR3LmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0dy5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJ1blwiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IG1vdmVcIik7XG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5ub2RlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5wYXRoTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5wYXRoTGlzdFtpIC0gMV0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSB0aGlzLnBhdGhMaXN0W2ldLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlVGltZSA9IG5ldyBWZWMzKG5leHRQb3MpLnN1YnRyYWN0KGN1cnJlbnRQb3MpLmxlbmd0aCgpIC8gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZW5ndGggXCIsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZlIHRpbWVcIiwgbW92ZVRpbWUpO1xuICAgICAgICAgICAgICAgIHR3LnRvKG1vdmVUaW1lLCB7cG9zaXRpb246IHYzKG5leHRQb3MueCwgMSwgbmV4dFBvcy56KX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHcudG8oMC4yLCB7c2NhbGU6IHYzKDAsMCwwKX0pO1xuICAgICAgICAgICAgdHcuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJvdmVyXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVzdHJveS1zZWxmXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjIpXG4gICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gdHcudG8oMSwgeyBwb3NpdGlvbjogdjMoMCwgMCwgMCkgfSk7XG4gICAgICAgICAgICB0dy5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJyZWFkeVwiKTtcbiAgICB9XG5cbiAgICBnZXRJc0RlYWQoKTpib29sZWFue1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAnb3Zlcicpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG5cbiAgICB9XG59XG4iXX0=