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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2R0b3dlcmRlZmVuY2UvYXNzZXRzL1NjcmlwdHMvdXRpbC9TdGF0ZS50cyJdLCJuYW1lcyI6WyJTdGF0ZSIsInN0YXRlIiwiaGFuZGxlTWFwIiwidmFsdWUiLCJsaXN0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInB1c2giLCJqIiwiY2IiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQWFBLEs7QUFHVCx5QkFBYztBQUFBOztBQUFBLGVBRk5DLEtBRU0sR0FGVSxFQUVWO0FBQUEsZUFETkMsU0FDTSxHQURjLEVBQ2Q7QUFFYjs7OzttQ0FDUUMsSyxFQUFlO0FBQ3BCLGlCQUFLRixLQUFMLEdBQWFFLEtBQWI7O0FBQ0EsZ0JBQUksS0FBS0QsU0FBTCxDQUFlLEtBQUtELEtBQXBCLENBQUosRUFBZ0M7QUFDNUIsa0JBQUlHLElBQUksR0FBRyxLQUFLRixTQUFMLENBQWUsS0FBS0QsS0FBcEIsQ0FBWDtBQUNBLGtCQUFJRSxNQUFLLEdBQUcsRUFBWjs7QUFDQSxtQkFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQTlCLEVBQXNDRixDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDRixnQkFBQUEsTUFBSyxDQUFDSyxJQUFOLENBQVdGLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFwQjtBQUNIOztBQUNELG1CQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLElBQUksQ0FBQ0csTUFBekIsRUFBaUNFLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsb0JBQUlDLEVBQUUsR0FBR04sSUFBSSxDQUFDSyxDQUFELENBQWI7QUFDQUMsZ0JBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLElBQVQsRUFBZVIsTUFBZjtBQUNIO0FBQ0o7QUFDSjs7O3FDQUNrQjtBQUNmLG1CQUFPLEtBQUtGLEtBQVo7QUFDSDs7O21DQUNRQSxLLEVBQU9TLEUsRUFBSTtBQUNoQixnQkFBSSxLQUFLUixTQUFMLENBQWVELEtBQWYsQ0FBSixFQUEyQjtBQUN2QixtQkFBS0MsU0FBTCxDQUFlRCxLQUFmLEVBQXNCTyxJQUF0QixDQUEyQkUsRUFBM0I7QUFDSCxhQUZELE1BRU87QUFDSCxtQkFBS1IsU0FBTCxDQUFlRCxLQUFmLElBQXdCLENBQUNTLEVBQUQsQ0FBeEI7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgICBwcml2YXRlIHN0YXRlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgaGFuZGxlTWFwOiBPYmplY3QgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBzZXRTdGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlTWFwW3RoaXMuc3RhdGVdKSB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMuaGFuZGxlTWFwW3RoaXMuc3RhdGVdO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IGxpc3Rbal07XG4gICAgICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFN0YXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBhZGRTdGF0ZShzdGF0ZSwgY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlTWFwW3N0YXRlXSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNYXBbc3RhdGVdLnB1c2goY2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNYXBbc3RhdGVdID0gW2NiXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==