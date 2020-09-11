System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Tool;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a5b9421aLlB+qBZsaa/3PZA", "Tool", _context.meta);

      _crd = true;

      _export("Tool", Tool = /*#__PURE__*/function () {
        function Tool() {
          _classCallCheck(this, Tool);
        }

        _createClass(Tool, null, [{
          key: "convertNumToK",
          value: function convertNumToK(num) {
            //将数字转换成 k结尾的显示方式
            num = Math.abs(num);
            var key = ["", "K", "M", "B"];
            var endStr = num + '';
            var endNum = num;
            var index = 0;

            while (endNum > 0) {
              endNum = Math.floor(endNum / 1000);
              index++;
            }

            endStr = num / Math.pow(1000, index - 1) + '';
            console.log('end Str', endStr);

            if (endStr.length > 4) {
              endStr = endStr.substring(0, 4);
            }

            if (index >= 1) {
              endStr += key[index - 1];
            }

            console.log('end Str', endStr);
            return endStr;
          }
        }]);

        return Tool;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL1Rvb2wudHMiXSwibmFtZXMiOlsiVG9vbCIsIm51bSIsIk1hdGgiLCJhYnMiLCJrZXkiLCJlbmRTdHIiLCJlbmROdW0iLCJpbmRleCIsImZsb29yIiwicG93IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBQWFBLEk7QUFDVCx3QkFBYztBQUFBO0FBRWI7Ozs7d0NBQ29CQyxHLEVBQXFCO0FBQ3RDO0FBQ0FBLFlBQUFBLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsQ0FBTjtBQUNBLGdCQUFJRyxHQUFHLEdBQUcsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLENBQVY7QUFDQSxnQkFBSUMsTUFBTSxHQUFHSixHQUFHLEdBQUcsRUFBbkI7QUFFQSxnQkFBSUssTUFBTSxHQUFHTCxHQUFiO0FBQ0EsZ0JBQUlNLEtBQUssR0FBRyxDQUFaOztBQUNBLG1CQUFPRCxNQUFNLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZkEsY0FBQUEsTUFBTSxHQUFHSixJQUFJLENBQUNNLEtBQUwsQ0FBV0YsTUFBTSxHQUFHLElBQXBCLENBQVQ7QUFDQUMsY0FBQUEsS0FBSztBQUNSOztBQUNERixZQUFBQSxNQUFNLEdBQUdKLEdBQUcsR0FBSUMsSUFBSSxDQUFDTyxHQUFMLENBQVMsSUFBVCxFQUFlRixLQUFLLEdBQUcsQ0FBdkIsQ0FBUCxHQUFvQyxFQUE3QztBQUNBRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTixNQUF2Qjs7QUFDQSxnQkFBSUEsTUFBTSxDQUFDTyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CUCxjQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFUO0FBQ0g7O0FBQ0QsZ0JBQUlOLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1pGLGNBQUFBLE1BQU0sSUFBSUQsR0FBRyxDQUFDRyxLQUFLLEdBQUcsQ0FBVCxDQUFiO0FBRUg7O0FBQ0RHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJOLE1BQXZCO0FBRUEsbUJBQU9BLE1BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUb29sIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBjb252ZXJ0TnVtVG9LKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WwhuaVsOWtl+i9rOaNouaIkCBr57uT5bC+55qE5pi+56S65pa55byPXHJcbiAgICAgICAgbnVtID0gTWF0aC5hYnMobnVtKTtcclxuICAgICAgICBsZXQga2V5ID0gW1wiXCIsIFwiS1wiLCBcIk1cIiwgXCJCXCJdO1xyXG4gICAgICAgIGxldCBlbmRTdHIgPSBudW0gKyAnJztcclxuXHJcbiAgICAgICAgbGV0IGVuZE51bSA9IG51bTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChlbmROdW0gPiAwKSB7XHJcbiAgICAgICAgICAgIGVuZE51bSA9IE1hdGguZmxvb3IoZW5kTnVtIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuZFN0ciA9IG51bSAvIChNYXRoLnBvdygxMDAwLCBpbmRleCAtIDEpKSArICcnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQgU3RyJywgZW5kU3RyKTtcclxuICAgICAgICBpZiAoZW5kU3RyLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgZW5kU3RyID0gZW5kU3RyLnN1YnN0cmluZygwLCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDEpIHtcclxuICAgICAgICAgICAgZW5kU3RyICs9IGtleVtpbmRleCAtIDFdO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZCBTdHInLCBlbmRTdHIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW5kU3RyO1xyXG4gICAgfVxyXG59Il19