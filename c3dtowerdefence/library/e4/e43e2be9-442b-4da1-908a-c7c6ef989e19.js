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
        }], [{
          key: "getPathLength",
          value: function getPathLength(pathList) {
            var length = 0;

            for (var i = 0; i < pathList.length; i++) {
              if (i !== 0) {
                var dis = v3(pathList[i]).subtract(pathList[i - 1]).length();
                length += dis;
              }
            }

            return length;
          }
        }]);

        return BezierN;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL0Jlemllck4udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsInYzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmV6aWVyTiIsImN0bFBMIiwiY29udHJvbGxlclBvaW50TGlzdCIsInNlZ21lbnROdW0iLCJuIiwibGVuZ3RoIiwiYUxpc3QiLCJpIiwidExpc3QiLCJqIiwicHVzaCIsInQiLCJwb2ludExpc3QiLCJlbmRQb3MiLCJhIiwiYiIsImMiLCJ2YWx1ZSIsIk1hdGgiLCJwb3ciLCJhZGQiLCJtdWx0aXBseVNjYWxhciIsInBhdGhMaXN0IiwiZGlzIiwic3VidHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFtQ0MsTUFBQUEsRSxPQUFBQSxFOzs7Ozs7QUFDcENDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O3lCQUNKQyxPO0FBRVQseUJBQVlDLEtBQVosRUFBMkI7QUFBQTs7QUFBQSxlQURwQkMsbUJBQ29CLEdBRFUsRUFDVjtBQUN2QixlQUFLQSxtQkFBTCxHQUEyQkQsS0FBM0I7QUFDSDs7Ozt1Q0FDbUJFLFUsRUFBNEI7QUFDNUM7QUFDQSxnQkFBSUMsQ0FBQyxHQUFHLEtBQUtGLG1CQUFMLENBQXlCRyxNQUFqQyxDQUY0QyxDQUVIOztBQUN6QyxnQkFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWjs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBeEIsRUFBMkJHLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsa0JBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLG1CQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0QsTUFBMUIsRUFBa0NJLENBQUMsRUFBbkMsRUFBdUM7QUFDbkNELGdCQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV0osS0FBSyxDQUFDRyxDQUFELENBQWhCO0FBQ0gsZUFKMkIsQ0FLNUI7OztBQUNBSCxjQUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBWDtBQUNBQSxjQUFBQSxLQUFLLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZSxDQUFmOztBQUNBLG1CQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0gsTUFBTixHQUFlLENBQW5DLEVBQXNDTSxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDTCxnQkFBQUEsS0FBSyxDQUFDSyxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWVILEtBQUssQ0FBQ0csQ0FBRCxDQUFMLEdBQVdILEtBQUssQ0FBQ0csQ0FBQyxHQUFHLENBQUwsQ0FBL0I7QUFDSDtBQUNKLGFBZjJDLENBaUI1Qzs7O0FBQ0EsZ0JBQUlDLFNBQWlCLEdBQUcsRUFBeEI7O0FBQ0EsaUJBQUssSUFBSUgsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR04sVUFBcEIsRUFBZ0NNLEVBQUMsRUFBakMsRUFBcUM7QUFDakMsa0JBQUlFLEVBQUMsR0FBR0YsRUFBQyxHQUFHTixVQUFaOztBQUNBLGtCQUFJVSxNQUFZLEdBQUdoQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXJCOztBQUNBLG1CQUFLLElBQUlVLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdILENBQXBCLEVBQXVCRyxFQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLG9CQUFJTyxDQUFDLEdBQUdSLEtBQUssQ0FBQ0MsRUFBRCxDQUFiO0FBQ0Esb0JBQUlRLENBQUMsR0FBR1gsQ0FBQyxHQUFHLENBQUosR0FBUUcsRUFBaEI7QUFDQSxvQkFBSVMsQ0FBQyxHQUFHVCxFQUFSO0FBQ0Esb0JBQUlVLEtBQUssR0FBR0gsQ0FBQyxHQUFHSSxJQUFJLENBQUNDLEdBQUwsQ0FBVSxJQUFJUixFQUFkLEVBQWtCSSxDQUFsQixDQUFKLEdBQTJCRyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsRUFBVCxFQUFZSyxDQUFaLENBQXZDO0FBQ0FILGdCQUFBQSxNQUFNLENBQUNPLEdBQVAsQ0FBV3ZCLEVBQUUsQ0FBQyxLQUFLSyxtQkFBTCxDQUF5QkssRUFBekIsQ0FBRCxDQUFGLENBQWdDYyxjQUFoQyxDQUErQ0osS0FBL0MsQ0FBWDtBQUNIOztBQUNETCxjQUFBQSxTQUFTLENBQUNGLElBQVYsQ0FBZUcsTUFBZjtBQUNIOztBQUNELG1CQUFPRCxTQUFQLENBL0I0QyxDQWdDNUM7QUFDQTtBQUNBO0FBRUg7Ozt3Q0FDb0JVLFEsRUFBa0I7QUFDbkMsZ0JBQUlqQixNQUFNLEdBQUcsQ0FBYjs7QUFDQSxpQkFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZSxRQUFRLENBQUNqQixNQUE3QixFQUFxQ0UsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxrQkFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNULG9CQUFJZ0IsR0FBRyxHQUFHMUIsRUFBRSxDQUFDeUIsUUFBUSxDQUFDZixDQUFELENBQVQsQ0FBRixDQUFnQmlCLFFBQWhCLENBQXlCRixRQUFRLENBQUNmLENBQUMsR0FBRyxDQUFMLENBQWpDLEVBQTBDRixNQUExQyxFQUFWO0FBQ0FBLGdCQUFBQSxNQUFNLElBQUlrQixHQUFWO0FBQ0g7QUFDSjs7QUFDRCxtQkFBT2xCLE1BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBCZXppZXJOIHtcclxuICAgIHB1YmxpYyBjb250cm9sbGVyUG9pbnRMaXN0OiBWZWMzW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGN0bFBMOiBWZWMzW10pIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJQb2ludExpc3QgPSBjdGxQTDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQb2ludExpc3Qoc2VnbWVudE51bTogbnVtYmVyKTogVmVjM1tdIHtcclxuICAgICAgICAvL+e7huWIhuWAvFxyXG4gICAgICAgIGxldCBuID0gdGhpcy5jb250cm9sbGVyUG9pbnRMaXN0Lmxlbmd0aDsgLy/lj5blpITmm7Lnur/nmoTpmLbmlbBcclxuICAgICAgICBsZXQgYUxpc3QgPSBbMSwgMV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPCBuICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0TGlzdC5wdXNoKGFMaXN0W2pdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidCBsaXN0XCIsIHRMaXN0KTtcclxuICAgICAgICAgICAgYUxpc3RbMF0gPSAxO1xyXG4gICAgICAgICAgICBhTGlzdFtpIC0gMV0gPSAxO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHRMaXN0Lmxlbmd0aCAtIDE7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgYUxpc3RbdCArIDFdID0gdExpc3RbdF0gKyB0TGlzdFt0ICsgMV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYSAqICgxIC0gdCleYiAqIHReYyAqIFBuO1xyXG4gICAgICAgIGxldCBwb2ludExpc3Q6IFZlYzNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnbWVudE51bTsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gaiAvIHNlZ21lbnROdW07XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gYUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IG4gLSAxIC0gaTtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gaTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGEgKiBNYXRoLnBvdygoMSAtIHQpLCBiKSAqIE1hdGgucG93KHQsIGMpO1xyXG4gICAgICAgICAgICAgICAgZW5kUG9zLmFkZCh2Myh0aGlzLmNvbnRyb2xsZXJQb2ludExpc3RbaV0pLm11bHRpcGx5U2NhbGFyKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9pbnRMaXN0LnB1c2goZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50TGlzdDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMCA7IGkgPCBuIDsgaSArKyl7XHJcbiAgICAgICAgLy8gICAgIGVuZFBvcy5hZGQoIGFMaXN0W2FdICogKDEgLSB0KSApXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRQYXRoTGVuZ3RoKHBhdGhMaXN0OiBWZWMzW10pIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjMocGF0aExpc3RbaV0pLnN1YnRyYWN0KHBhdGhMaXN0W2kgLSAxXSkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gZGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuIl19