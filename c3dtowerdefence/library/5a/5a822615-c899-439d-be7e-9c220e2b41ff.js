System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, My2dArray;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5a822YVyJlDnb5+nCIOK0H/", "My2Array", _context.meta);

      _crd = true;

      My2dArray = /*#__PURE__*/function () {
        function My2dArray() {// for (let i = 0; i < height; i++) {
          //     let list: T[] = [];
          //     // for (let j = 0; j < width; j++) {
          //     //     list.push(value);
          //     // }
          //     this.numberList.push(list);
          // }

          _classCallCheck(this, My2dArray);

          this.numberList = [];
          this.heightNum = 0;
        }

        _createClass(My2dArray, [{
          key: "pushValue",
          value: function pushValue(value) {
            this.numberList[this.numberList.length - 1].push(value);
          }
        }, {
          key: "pushList",
          value: function pushList(value) {
            this.numberList.push(value);
          }
        }, {
          key: "getValue",
          value: function getValue(x, y) {
            if (y < 0 || x < 0) {
              return;
            }

            if (y >= this.numberList.length) {
              return null;
            }

            if (x >= this.numberList[y].length) {
              return null;
            }

            return this.numberList[y][x];
          }
        }, {
          key: "setValue",
          value: function setValue(x, y, value) {
            this.numberList[x][y] = value;
          }
        }]);

        return My2dArray;
      }();

      _export("default", My2dArray);

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL015MkFycmF5LnRzIl0sIm5hbWVzIjpbIk15MmRBcnJheSIsIm51bWJlckxpc3QiLCJoZWlnaHROdW0iLCJ2YWx1ZSIsImxlbmd0aCIsInB1c2giLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTUEsTUFBQUEsUztBQUdGLDZCQUFjLENBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUFU7O0FBQUEsZUFGTkMsVUFFTSxHQUZtQixFQUVuQjtBQUFBLGVBRE5DLFNBQ00sR0FEYyxDQUNkO0FBUWI7Ozs7b0NBR1NDLEssRUFBVTtBQUNoQixpQkFBS0YsVUFBTCxDQUFnQixLQUFLQSxVQUFMLENBQWdCRyxNQUFoQixHQUF5QixDQUF6QyxFQUE0Q0MsSUFBNUMsQ0FBaURGLEtBQWpEO0FBQ0g7OzttQ0FDUUEsSyxFQUFZO0FBQ2pCLGlCQUFLRixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkYsS0FBckI7QUFDSDs7O21DQUNRRyxDLEVBQVdDLEMsRUFBYztBQUM5QixnQkFBSUEsQ0FBQyxHQUFHLENBQUosSUFBU0QsQ0FBQyxHQUFHLENBQWpCLEVBQW1CO0FBQ2Y7QUFDSDs7QUFDRCxnQkFBSUMsQ0FBQyxJQUFJLEtBQUtOLFVBQUwsQ0FBZ0JHLE1BQXpCLEVBQWdDO0FBQzVCLHFCQUFPLElBQVA7QUFDSDs7QUFDRCxnQkFBSUUsQ0FBQyxJQUFJLEtBQUtMLFVBQUwsQ0FBZ0JNLENBQWhCLEVBQW1CSCxNQUE1QixFQUFtQztBQUMvQixxQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBS0gsVUFBTCxDQUFnQk0sQ0FBaEIsRUFBbUJELENBQW5CLENBQVA7QUFDSDs7O21DQUNRQSxDLEVBQVdDLEMsRUFBV0osSyxFQUFVO0FBQ3JDLGlCQUFLRixVQUFMLENBQWdCSyxDQUFoQixFQUFtQkMsQ0FBbkIsSUFBd0JKLEtBQXhCO0FBQ0g7Ozs7Ozt5QkFFVUgsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE15MmRBcnJheTxUPntcclxuICAgIHByaXZhdGUgbnVtYmVyTGlzdDogQXJyYXk8VD5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHROdW06IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBsaXN0OiBUW10gPSBbXTtcclxuICAgICAgICAvLyAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBsaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMubnVtYmVyTGlzdC5wdXNoKGxpc3QpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVzaFZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJMaXN0W3RoaXMubnVtYmVyTGlzdC5sZW5ndGggLSAxXS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1c2hMaXN0KHZhbHVlOiBUW10pIHtcclxuICAgICAgICB0aGlzLm51bWJlckxpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQge1xyXG4gICAgICAgIGlmICh5IDwgMCB8fCB4IDwgMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgPj0gdGhpcy5udW1iZXJMaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA+PSB0aGlzLm51bWJlckxpc3RbeV0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlckxpc3RbeV1beF07XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLm51bWJlckxpc3RbeF1beV0gPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeTJkQXJyYXk7Il19