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
      _cclegacy._RF.push({}, "54625wpLTlHPaQtDdwD+ulu", "My2Array", _context.meta);

      _crd = true;

      My2dArray = /*#__PURE__*/function () {
        function My2dArray(width, height, value) {
          _classCallCheck(this, My2dArray);

          this.numberList = [];

          for (var i = 0; i < height; i++) {
            var list = [];

            for (var j = 0; j < width; j++) {
              list.push(value);
            }

            this.numberList.push(list);
          }
        }

        _createClass(My2dArray, [{
          key: "getValue",
          value: function getValue(x, y) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9lbHVvc2ljdWJlL2Fzc2V0cy9zY3JpcHRzL015MkFycmF5LnRzIl0sIm5hbWVzIjpbIk15MmRBcnJheSIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWUiLCJudW1iZXJMaXN0IiwiaSIsImxpc3QiLCJqIiwicHVzaCIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNQSxNQUFBQSxTO0FBRUYsMkJBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxLQUEzQixFQUFxQztBQUFBOztBQUFBLGVBRDdCQyxVQUM2QixHQURKLEVBQ0k7O0FBQ2pDLGVBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBcEIsRUFBNEJHLENBQUMsRUFBN0IsRUFBaUM7QUFDN0IsZ0JBQUlDLElBQVMsR0FBRyxFQUFoQjs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixLQUFwQixFQUEyQk0sQ0FBQyxFQUE1QixFQUFnQztBQUM1QkQsY0FBQUEsSUFBSSxDQUFDRSxJQUFMLENBQVVMLEtBQVY7QUFDSDs7QUFDRCxpQkFBS0MsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUJGLElBQXJCO0FBQ0g7QUFDSjs7OzttQ0FDUUcsQyxFQUFXQyxDLEVBQWM7QUFDOUIsbUJBQU8sS0FBS04sVUFBTCxDQUFnQk0sQ0FBaEIsRUFBbUJELENBQW5CLENBQVA7QUFDSDs7O21DQUNRQSxDLEVBQVdDLEMsRUFBV1AsSyxFQUFVO0FBQ3JDLGlCQUFLQyxVQUFMLENBQWdCSyxDQUFoQixFQUFtQkMsQ0FBbkIsSUFBd0JQLEtBQXhCO0FBQ0g7Ozs7Ozt5QkFFVUgsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE15MmRBcnJheTxUPntcbiAgICBwcml2YXRlIG51bWJlckxpc3Q6IEFycmF5PFQ+W10gPSBbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCB2YWx1ZTogVCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdDogVFtdID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnB1c2gobGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VmFsdWUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyTGlzdFt5XVt4XTtcbiAgICB9XG4gICAgc2V0VmFsdWUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBUKSB7XG4gICAgICAgIHRoaXMubnVtYmVyTGlzdFt4XVt5XSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE15MmRBcnJheTsiXX0=