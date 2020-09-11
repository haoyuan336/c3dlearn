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

            endStr += key[index - 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL1Rvb2wudHMiXSwibmFtZXMiOlsiVG9vbCIsIm51bSIsImtleSIsImVuZFN0ciIsImVuZE51bSIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicG93IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBQWFBLEk7QUFDVCx3QkFBYztBQUFBO0FBRWI7Ozs7d0NBQ29CQyxHLEVBQXFCO0FBQ3RDO0FBQ0EsZ0JBQUlDLEdBQUcsR0FBRyxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsQ0FBVjtBQUNBLGdCQUFJQyxNQUFNLEdBQUdGLEdBQUcsR0FBRyxFQUFuQjtBQUVBLGdCQUFJRyxNQUFNLEdBQUdILEdBQWI7QUFDQSxnQkFBSUksS0FBSyxHQUFHLENBQVo7O0FBQ0EsbUJBQU9ELE1BQU0sR0FBRyxDQUFoQixFQUFtQjtBQUNmQSxjQUFBQSxNQUFNLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxNQUFNLEdBQUcsSUFBcEIsQ0FBVDtBQUNBQyxjQUFBQSxLQUFLO0FBQ1I7O0FBQ0RGLFlBQUFBLE1BQU0sR0FBR0YsR0FBRyxHQUFJSyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxJQUFULEVBQWVILEtBQUssR0FBRyxDQUF2QixDQUFQLEdBQW9DLEVBQTdDO0FBQ0FJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJQLE1BQXZCOztBQUNBLGdCQUFJQSxNQUFNLENBQUNRLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJSLGNBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDUyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQVQ7QUFDSDs7QUFDRFQsWUFBQUEsTUFBTSxJQUFJRCxHQUFHLENBQUNHLEtBQUssR0FBRyxDQUFULENBQWI7QUFDQUksWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlAsTUFBdkI7QUFFQSxtQkFBT0EsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvb2wge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbnZlcnROdW1Ub0sobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5bCG5pWw5a2X6L2s5o2i5oiQIGvnu5PlsL7nmoTmmL7npLrmlrnlvI9cclxuICAgICAgICBsZXQga2V5ID0gW1wiXCIsIFwiS1wiLCBcIk1cIiwgXCJCXCJdO1xyXG4gICAgICAgIGxldCBlbmRTdHIgPSBudW0gKyAnJztcclxuXHJcbiAgICAgICAgbGV0IGVuZE51bSA9IG51bTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChlbmROdW0gPiAwKSB7XHJcbiAgICAgICAgICAgIGVuZE51bSA9IE1hdGguZmxvb3IoZW5kTnVtIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuZFN0ciA9IG51bSAvIChNYXRoLnBvdygxMDAwLCBpbmRleCAtIDEpKSArICcnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQgU3RyJywgZW5kU3RyKTtcclxuICAgICAgICBpZiAoZW5kU3RyLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgZW5kU3RyID0gZW5kU3RyLnN1YnN0cmluZygwLCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZW5kU3RyICs9IGtleVtpbmRleCAtIDFdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQgU3RyJywgZW5kU3RyKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZW5kU3RyO1xyXG4gICAgfVxyXG59Il19