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

            endStr = num / Math.pow(1000, index - 1) + ''; // console.log('end Str', endStr);

            if (endStr.length > 4) {
              endStr = endStr.substring(0, 4);
            }

            if (index >= 1) {
              endStr += key[index - 1];
            } // console.log('end Str', endStr);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL1Rvb2wudHMiXSwibmFtZXMiOlsiVG9vbCIsIm51bSIsIk1hdGgiLCJhYnMiLCJrZXkiLCJlbmRTdHIiLCJlbmROdW0iLCJpbmRleCIsImZsb29yIiwicG93IiwibGVuZ3RoIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFBYUEsSTtBQUNULHdCQUFjO0FBQUE7QUFFYjs7Ozt3Q0FDb0JDLEcsRUFBcUI7QUFDdEM7QUFDQUEsWUFBQUEsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxDQUFOO0FBQ0EsZ0JBQUlHLEdBQUcsR0FBRyxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsQ0FBVjtBQUNBLGdCQUFJQyxNQUFNLEdBQUdKLEdBQUcsR0FBRyxFQUFuQjtBQUVBLGdCQUFJSyxNQUFNLEdBQUdMLEdBQWI7QUFDQSxnQkFBSU0sS0FBSyxHQUFHLENBQVo7O0FBQ0EsbUJBQU9ELE1BQU0sR0FBRyxDQUFoQixFQUFtQjtBQUNmQSxjQUFBQSxNQUFNLEdBQUdKLElBQUksQ0FBQ00sS0FBTCxDQUFXRixNQUFNLEdBQUcsSUFBcEIsQ0FBVDtBQUNBQyxjQUFBQSxLQUFLO0FBQ1I7O0FBQ0RGLFlBQUFBLE1BQU0sR0FBR0osR0FBRyxHQUFJQyxJQUFJLENBQUNPLEdBQUwsQ0FBUyxJQUFULEVBQWVGLEtBQUssR0FBRyxDQUF2QixDQUFQLEdBQW9DLEVBQTdDLENBWnNDLENBYXRDOztBQUNBLGdCQUFJRixNQUFNLENBQUNLLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJMLGNBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDTSxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQVQ7QUFDSDs7QUFDRCxnQkFBSUosS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDWkYsY0FBQUEsTUFBTSxJQUFJRCxHQUFHLENBQUNHLEtBQUssR0FBRyxDQUFULENBQWI7QUFFSCxhQXBCcUMsQ0FxQnRDOzs7QUFFQSxtQkFBT0YsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvb2wge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbnZlcnROdW1Ub0sobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5bCG5pWw5a2X6L2s5o2i5oiQIGvnu5PlsL7nmoTmmL7npLrmlrnlvI9cclxuICAgICAgICBudW0gPSBNYXRoLmFicyhudW0pO1xyXG4gICAgICAgIGxldCBrZXkgPSBbXCJcIiwgXCJLXCIsIFwiTVwiLCBcIkJcIl07XHJcbiAgICAgICAgbGV0IGVuZFN0ciA9IG51bSArICcnO1xyXG5cclxuICAgICAgICBsZXQgZW5kTnVtID0gbnVtO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGVuZE51bSA+IDApIHtcclxuICAgICAgICAgICAgZW5kTnVtID0gTWF0aC5mbG9vcihlbmROdW0gLyAxMDAwKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZW5kU3RyID0gbnVtIC8gKE1hdGgucG93KDEwMDAsIGluZGV4IC0gMSkpICsgJyc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCBTdHInLCBlbmRTdHIpO1xyXG4gICAgICAgIGlmIChlbmRTdHIubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBlbmRTdHIgPSBlbmRTdHIuc3Vic3RyaW5nKDAsIDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPj0gMSkge1xyXG4gICAgICAgICAgICBlbmRTdHIgKz0ga2V5W2luZGV4IC0gMV07XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5kIFN0cicsIGVuZFN0cik7XHJcblxyXG4gICAgICAgIHJldHVybiBlbmRTdHI7XHJcbiAgICB9XHJcbn0iXX0=