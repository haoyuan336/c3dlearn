System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, v3, _crd, ccclass, property, BezierN;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e43e2vpRCtNoZCKx8bvmJ4Z", "BezierN", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BezierN", BezierN = /*#__PURE__*/function () {
        function BezierN(ctlPL) {
          _classCallCheck(this, BezierN);

          this.controllerPointList = [];
          this.controllerPointList = ctlPL;
        }

        _createClass(BezierN, [{
          key: "getPointList",
          value: function getPointList(segmentNum) {
            //细分值
            var n = this.controllerPointList.length; //取处曲线的阶数

            var aList = [1, 1];

            for (var i = 3; i < n + 1; i++) {
              var tList = [];

              for (var j = 0; j < aList.length; j++) {
                tList.push(aList[j]);
              } // console.log("t list", tList);


              aList[0] = 1;
              aList[i - 1] = 1;

              for (var t = 0; t < tList.length - 1; t++) {
                aList[t + 1] = tList[t] + tList[t + 1];
              }
            } // a * (1 - t)^b * t^c * Pn;


            var pointList = [];

            for (var _j = 0; _j < segmentNum; _j++) {
              var _t = _j / segmentNum;

              var endPos = v3(0, 0, 0);

              for (var _i = 0; _i < n; _i++) {
                var a = aList[_i];
                var b = n - 1 - _i;
                var c = _i;
                var value = a * Math.pow(1 - _t, b) * Math.pow(_t, c);
                endPos.add(v3(this.controllerPointList[_i]).multiplyScalar(value));
              }

              pointList.push(endPos);
            }

            return pointList; // for (let i = 0 ; i < n ; i ++){
            //     endPos.add( aList[a] * (1 - t) )
            // }
          }
        }]);

        return BezierN;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL0Jlemllck4udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsInYzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmV6aWVyTiIsImN0bFBMIiwiY29udHJvbGxlclBvaW50TGlzdCIsInNlZ21lbnROdW0iLCJuIiwibGVuZ3RoIiwiYUxpc3QiLCJpIiwidExpc3QiLCJqIiwicHVzaCIsInQiLCJwb2ludExpc3QiLCJlbmRQb3MiLCJhIiwiYiIsImMiLCJ2YWx1ZSIsIk1hdGgiLCJwb3ciLCJhZGQiLCJtdWx0aXBseVNjYWxhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQW1DQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUNwQ0MsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7eUJBQ0pDLE87QUFFVCx5QkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBLGVBRG5CQyxtQkFDbUIsR0FEVSxFQUNWO0FBQ3RCLGVBQUtBLG1CQUFMLEdBQTJCRCxLQUEzQjtBQUNIOzs7O3VDQUNtQkUsVSxFQUEyQjtBQUMzQztBQUNBLGdCQUFJQyxDQUFDLEdBQUcsS0FBS0YsbUJBQUwsQ0FBeUJHLE1BQWpDLENBRjJDLENBRUY7O0FBQ3pDLGdCQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFaOztBQUNBLGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUF4QixFQUEyQkcsQ0FBQyxFQUE1QixFQUFnQztBQUM1QixrQkFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsbUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDRCxNQUExQixFQUFrQ0ksQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0QsZ0JBQUFBLEtBQUssQ0FBQ0UsSUFBTixDQUFXSixLQUFLLENBQUNHLENBQUQsQ0FBaEI7QUFDSCxlQUoyQixDQUs1Qjs7O0FBQ0FILGNBQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFYO0FBQ0FBLGNBQUFBLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsQ0FBTCxHQUFlLENBQWY7O0FBQ0EsbUJBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDSCxNQUFOLEdBQWUsQ0FBbkMsRUFBc0NNLENBQUMsRUFBdkMsRUFBMkM7QUFDdkNMLGdCQUFBQSxLQUFLLENBQUNLLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZUgsS0FBSyxDQUFDRyxDQUFELENBQUwsR0FBV0gsS0FBSyxDQUFDRyxDQUFDLEdBQUcsQ0FBTCxDQUEvQjtBQUNIO0FBQ0osYUFmMEMsQ0FpQjNDOzs7QUFDQSxnQkFBSUMsU0FBaUIsR0FBRyxFQUF4Qjs7QUFDQSxpQkFBSyxJQUFJSCxFQUFDLEdBQUcsQ0FBYixFQUFpQkEsRUFBQyxHQUFHTixVQUFyQixFQUFrQ00sRUFBQyxFQUFuQyxFQUF3QztBQUNwQyxrQkFBSUUsRUFBQyxHQUFHRixFQUFDLEdBQUdOLFVBQVo7O0FBQ0Esa0JBQUlVLE1BQVksR0FBRWhCLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBcEI7O0FBQ0EsbUJBQUssSUFBSVUsRUFBQyxHQUFHLENBQWIsRUFBaUJBLEVBQUMsR0FBR0gsQ0FBckIsRUFBeUJHLEVBQUMsRUFBMUIsRUFBOEI7QUFDMUIsb0JBQUlPLENBQUMsR0FBR1IsS0FBSyxDQUFDQyxFQUFELENBQWI7QUFDQSxvQkFBSVEsQ0FBQyxHQUFHWCxDQUFDLEdBQUcsQ0FBSixHQUFRRyxFQUFoQjtBQUNBLG9CQUFJUyxDQUFDLEdBQUdULEVBQVI7QUFDQSxvQkFBSVUsS0FBSyxHQUFHSCxDQUFDLEdBQUdJLElBQUksQ0FBQ0MsR0FBTCxDQUFVLElBQUlSLEVBQWQsRUFBa0JJLENBQWxCLENBQUosR0FBMkJHLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixFQUFULEVBQVlLLENBQVosQ0FBdkM7QUFDQUgsZ0JBQUFBLE1BQU0sQ0FBQ08sR0FBUCxDQUFXdkIsRUFBRSxDQUFDLEtBQUtLLG1CQUFMLENBQXlCSyxFQUF6QixDQUFELENBQUYsQ0FBZ0NjLGNBQWhDLENBQStDSixLQUEvQyxDQUFYO0FBQ0g7O0FBQ0RMLGNBQUFBLFNBQVMsQ0FBQ0YsSUFBVixDQUFlRyxNQUFmO0FBQ0g7O0FBQ0QsbUJBQU9ELFNBQVAsQ0EvQjJDLENBZ0MzQztBQUNBO0FBQ0E7QUFFSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBCZXppZXJOIHtcclxuICAgIHB1YmxpYyBjb250cm9sbGVyUG9pbnRMaXN0OlZlYzNbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoY3RsUEw6VmVjM1tdKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyUG9pbnRMaXN0ID0gY3RsUEw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0UG9pbnRMaXN0KHNlZ21lbnROdW06IG51bWJlcikgOlZlYzNbXXtcclxuICAgICAgICAvL+e7huWIhuWAvFxyXG4gICAgICAgIGxldCBuID0gdGhpcy5jb250cm9sbGVyUG9pbnRMaXN0Lmxlbmd0aDsgLy/lj5blpITmm7Lnur/nmoTpmLbmlbBcclxuICAgICAgICBsZXQgYUxpc3QgPSBbMSwgMV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPCBuICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0TGlzdC5wdXNoKGFMaXN0W2pdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidCBsaXN0XCIsIHRMaXN0KTtcclxuICAgICAgICAgICAgYUxpc3RbMF0gPSAxO1xyXG4gICAgICAgICAgICBhTGlzdFtpIC0gMV0gPSAxO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHRMaXN0Lmxlbmd0aCAtIDE7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgYUxpc3RbdCArIDFdID0gdExpc3RbdF0gKyB0TGlzdFt0ICsgMV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8vIGEgKiAoMSAtIHQpXmIgKiB0XmMgKiBQbjtcclxuICAgICAgICBsZXQgcG9pbnRMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzZWdtZW50TnVtIDsgaiArKyApe1xyXG4gICAgICAgICAgICBsZXQgdCA9IGogLyBzZWdtZW50TnVtO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zOiBWZWMzID12MygwLDAsMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IG4gOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gYUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IG4gLSAxIC0gaTtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gaTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGEgKiBNYXRoLnBvdygoMSAtIHQpLCBiKSAqIE1hdGgucG93KHQsIGMpO1xyXG4gICAgICAgICAgICAgICAgZW5kUG9zLmFkZCh2Myh0aGlzLmNvbnRyb2xsZXJQb2ludExpc3RbaV0pLm11bHRpcGx5U2NhbGFyKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9pbnRMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50TGlzdDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCBuIDsgaSArKyl7XHJcbiAgICAgICAgLy8gICAgIGVuZFBvcy5hZGQoIGFMaXN0W2FdICogKDEgLSB0KSApXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=