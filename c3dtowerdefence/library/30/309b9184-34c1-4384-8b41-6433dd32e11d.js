System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, State;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "309b9GENMFDhItBZDPdMuEd", "State", _context.meta);

      _crd = true;

      _export("State", State = /*#__PURE__*/function () {
        function State() {
          _classCallCheck(this, State);

          this.state = "";
          this.handleMap = {};
        }

        _createClass(State, [{
          key: "setState",
          value: function setState(value) {
            this.state = value;

            if (this.handleMap[this.state]) {
              var list = this.handleMap[this.state];
              var _value = [];

              for (var i = 1; i < arguments.length; i++) {
                _value.push(arguments[i]);
              }

              for (var j = 0; j < list.length; j++) {
                var cb = list[j];
                cb.apply(this, _value);
              }
            }
          }
        }, {
          key: "getState",
          value: function getState() {
            return this.state;
          }
        }, {
          key: "addState",
          value: function addState(state, cb) {
            if (this.handleMap[state]) {
              this.handleMap[state].push(cb);
            } else {
              this.handleMap[state] = [cb];
            }
          }
        }]);

        return State;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL1N0YXRlLnRzIl0sIm5hbWVzIjpbIlN0YXRlIiwic3RhdGUiLCJoYW5kbGVNYXAiLCJ2YWx1ZSIsImxpc3QiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHVzaCIsImoiLCJjYiIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBYUEsSztBQUdULHlCQUFjO0FBQUE7O0FBQUEsZUFGTkMsS0FFTSxHQUZVLEVBRVY7QUFBQSxlQUROQyxTQUNNLEdBRGMsRUFDZDtBQUViOzs7O21DQUNRQyxLLEVBQWU7QUFDcEIsaUJBQUtGLEtBQUwsR0FBYUUsS0FBYjs7QUFDQSxnQkFBSSxLQUFLRCxTQUFMLENBQWUsS0FBS0QsS0FBcEIsQ0FBSixFQUFnQztBQUM1QixrQkFBSUcsSUFBSSxHQUFHLEtBQUtGLFNBQUwsQ0FBZSxLQUFLRCxLQUFwQixDQUFYO0FBQ0Esa0JBQUlFLE1BQUssR0FBRyxFQUFaOztBQUNBLG1CQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0NGLENBQUMsRUFBdkMsRUFBMkM7QUFDdkNGLGdCQUFBQSxNQUFLLENBQUNLLElBQU4sQ0FBV0YsU0FBUyxDQUFDRCxDQUFELENBQXBCO0FBQ0g7O0FBQ0QsbUJBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsSUFBSSxDQUFDRyxNQUF6QixFQUFpQ0UsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxvQkFBSUMsRUFBRSxHQUFHTixJQUFJLENBQUNLLENBQUQsQ0FBYjtBQUNBQyxnQkFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsSUFBVCxFQUFlUixNQUFmO0FBQ0g7QUFDSjtBQUNKOzs7cUNBQ2tCO0FBQ2YsbUJBQU8sS0FBS0YsS0FBWjtBQUNIOzs7bUNBQ1FBLEssRUFBT1MsRSxFQUFJO0FBQ2hCLGdCQUFJLEtBQUtSLFNBQUwsQ0FBZUQsS0FBZixDQUFKLEVBQTJCO0FBQ3ZCLG1CQUFLQyxTQUFMLENBQWVELEtBQWYsRUFBc0JPLElBQXRCLENBQTJCRSxFQUEzQjtBQUNILGFBRkQsTUFFTztBQUNILG1CQUFLUixTQUFMLENBQWVELEtBQWYsSUFBd0IsQ0FBQ1MsRUFBRCxDQUF4QjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgaGFuZGxlTWFwOiBPYmplY3QgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIHNldFN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlTWFwW3RoaXMuc3RhdGVdKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy5oYW5kbGVNYXBbdGhpcy5zdGF0ZV07XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNiID0gbGlzdFtqXTtcclxuICAgICAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN0YXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgICB9XHJcbiAgICBhZGRTdGF0ZShzdGF0ZSwgY2IpIHtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVNYXBbc3RhdGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTWFwW3N0YXRlXS5wdXNoKGNiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1hcFtzdGF0ZV0gPSBbY2JdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=