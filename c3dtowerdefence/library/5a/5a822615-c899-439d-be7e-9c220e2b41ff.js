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
        }, {
          key: "getHeightLength",
          value: function getHeightLength() {
            //获取二位数组的高
            return this.numberList.length;
          }
        }, {
          key: "getWidthLength",
          value: function getWidthLength() {
            if (this.numberList.length > 0) {
              return this.numberList[0].length;
            }

            return 0;
          }
        }, {
          key: "getValueWithLieIndex",
          value: function getValueWithLieIndex(index) {
            return this.numberList[index];
          }
        }, {
          key: "convertOneSpaceList",
          value: function convertOneSpaceList() {
            //转换成一维数组
            var list = [];

            for (var i = 0; i < this.getHeightLength(); i++) {
              for (var j = 0; j < this.getWidthLength(); j++) {
                list.push(this.numberList[i][j]);
              }
            }

            return list;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL015MkFycmF5LnRzIl0sIm5hbWVzIjpbIk15MmRBcnJheSIsIm51bWJlckxpc3QiLCJoZWlnaHROdW0iLCJ2YWx1ZSIsImxlbmd0aCIsInB1c2giLCJ4IiwieSIsImluZGV4IiwibGlzdCIsImkiLCJnZXRIZWlnaHRMZW5ndGgiLCJqIiwiZ2V0V2lkdGhMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU1BLE1BQUFBLFM7QUFHRiw2QkFBYyxDQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBVOztBQUFBLGVBRk5DLFVBRU0sR0FGbUIsRUFFbkI7QUFBQSxlQUROQyxTQUNNLEdBRGMsQ0FDZDtBQVFiOzs7O29DQUdTQyxLLEVBQVU7QUFDaEIsaUJBQUtGLFVBQUwsQ0FBZ0IsS0FBS0EsVUFBTCxDQUFnQkcsTUFBaEIsR0FBeUIsQ0FBekMsRUFBNENDLElBQTVDLENBQWlERixLQUFqRDtBQUNIOzs7bUNBQ1FBLEssRUFBWTtBQUNqQixpQkFBS0YsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUJGLEtBQXJCO0FBQ0g7OzttQ0FDUUcsQyxFQUFXQyxDLEVBQWM7QUFDOUIsZ0JBQUlBLENBQUMsR0FBRyxDQUFKLElBQVNELENBQUMsR0FBRyxDQUFqQixFQUFvQjtBQUNoQjtBQUNIOztBQUNELGdCQUFJQyxDQUFDLElBQUksS0FBS04sVUFBTCxDQUFnQkcsTUFBekIsRUFBaUM7QUFDN0IscUJBQU8sSUFBUDtBQUNIOztBQUNELGdCQUFJRSxDQUFDLElBQUksS0FBS0wsVUFBTCxDQUFnQk0sQ0FBaEIsRUFBbUJILE1BQTVCLEVBQW9DO0FBQ2hDLHFCQUFPLElBQVA7QUFDSDs7QUFDRCxtQkFBTyxLQUFLSCxVQUFMLENBQWdCTSxDQUFoQixFQUFtQkQsQ0FBbkIsQ0FBUDtBQUNIOzs7bUNBQ1FBLEMsRUFBV0MsQyxFQUFXSixLLEVBQVU7QUFDckMsaUJBQUtGLFVBQUwsQ0FBZ0JLLENBQWhCLEVBQW1CQyxDQUFuQixJQUF3QkosS0FBeEI7QUFDSDs7OzRDQUNpQjtBQUNkO0FBQ0EsbUJBQU8sS0FBS0YsVUFBTCxDQUFnQkcsTUFBdkI7QUFFSDs7OzJDQUNnQjtBQUNiLGdCQUFJLEtBQUtILFVBQUwsQ0FBZ0JHLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzVCLHFCQUFPLEtBQUtILFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJHLE1BQTFCO0FBQ0g7O0FBQ0QsbUJBQU8sQ0FBUDtBQUNIOzs7K0NBQ29CSSxLLEVBQXlCO0FBQzFDLG1CQUFPLEtBQUtQLFVBQUwsQ0FBZ0JPLEtBQWhCLENBQVA7QUFDSDs7O2dEQUNxQjtBQUNsQjtBQUNBLGdCQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtDLGVBQUwsRUFBcEIsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsbUJBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxjQUFMLEVBQXBCLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDSCxnQkFBQUEsSUFBSSxDQUFDSixJQUFMLENBQVUsS0FBS0osVUFBTCxDQUFnQlMsQ0FBaEIsRUFBbUJFLENBQW5CLENBQVY7QUFDSDtBQUNKOztBQUNELG1CQUFPSCxJQUFQO0FBQ0g7Ozs7Ozt5QkFFVVQsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE15MmRBcnJheTxUPntcclxuICAgIHByaXZhdGUgbnVtYmVyTGlzdDogQXJyYXk8VD5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHROdW06IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBsaXN0OiBUW10gPSBbXTtcclxuICAgICAgICAvLyAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBsaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMubnVtYmVyTGlzdC5wdXNoKGxpc3QpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVzaFZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJMaXN0W3RoaXMubnVtYmVyTGlzdC5sZW5ndGggLSAxXS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1c2hMaXN0KHZhbHVlOiBUW10pIHtcclxuICAgICAgICB0aGlzLm51bWJlckxpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQge1xyXG4gICAgICAgIGlmICh5IDwgMCB8fCB4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ID49IHRoaXMubnVtYmVyTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4ID49IHRoaXMubnVtYmVyTGlzdFt5XS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlckxpc3RbeV1beF07XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLm51bWJlckxpc3RbeF1beV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldEhlaWdodExlbmd0aCgpIHtcclxuICAgICAgICAvL+iOt+WPluS6jOS9jeaVsOe7hOeahOmrmFxyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlckxpc3QubGVuZ3RoO1xyXG5cclxuICAgIH1cclxuICAgIGdldFdpZHRoTGVuZ3RoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bWJlckxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJMaXN0WzBdLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZVdpdGhMaWVJbmRleChpbmRleDogbnVtYmVyKTogQXJyYXk8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlckxpc3RbaW5kZXhdXHJcbiAgICB9XHJcbiAgICBjb252ZXJ0T25lU3BhY2VMaXN0KCkge1xyXG4gICAgICAgIC8v6L2s5o2i5oiQ5LiA57u05pWw57uEXHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0SGVpZ2h0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0V2lkdGhMZW5ndGgoKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godGhpcy5udW1iZXJMaXN0W2ldW2pdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15MmRBcnJheTsiXX0=