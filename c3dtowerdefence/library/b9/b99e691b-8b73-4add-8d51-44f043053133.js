System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, v3, _crd, ccclass, property, Besize;

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
      _cclegacy._RF.push({}, "b99e6kbi3NK3Y1RRPBDBTEz", "Besize", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; // @ccclass('Besize')

      _export("Besize", Besize = /*#__PURE__*/function () {
        function Besize(p0, p1, p2) {
          _classCallCheck(this, Besize);

          this.startPos = undefined;
          this.middlePos = undefined;
          this.endPos = undefined;
          this.startPos = p0;
          this.middlePos = p1;
          this.endPos = p2;
        } // Vector3 CalculateCubicBezierPoint(float t, Vector3 p0, Vector3 p1, Vector3 p2)
        // {
        //     float u = 1 - t;
        //     float tt = t * t;
        //     float uu = u * u;
        //     Vector3 p = uu * p0;
        //     p += 2 * u * t * p1;
        //     p += tt * p2;
        //     return p;
        // }


        _createClass(Besize, [{
          key: "CalculateCubicBezierPoint",
          value: function CalculateCubicBezierPoint(t, p0, p1, p2) {
            var u = 1 - t;
            var tt = t * t;
            var uu = u * u;
            var p = v3(p0).multiplyScalar(uu); // p += 2 * u * t * p1;

            p = v3(p).add(v3(p1).multiplyScalar(2 * u * t)); // p += tt * p2;

            p = v3(p).add(p2.multiplyScalar(tt));
            return p;
          }
        }, {
          key: "getBesizePointList",
          value: function getBesizePointList(segmentNum) {
            var pointList = [];

            for (var i = 0; i < segmentNum; i++) {
              var t = i / segmentNum;
              var point = this.CalculateCubicBezierPoint(t, this.startPos, this.middlePos, this.endPos);
              pointList.push(point);
            }

            return pointList;
          }
        }]);

        return Besize;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL0Jlc2l6ZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwidjMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCZXNpemUiLCJwMCIsInAxIiwicDIiLCJzdGFydFBvcyIsInVuZGVmaW5lZCIsIm1pZGRsZVBvcyIsImVuZFBvcyIsInQiLCJ1IiwidHQiLCJ1dSIsInAiLCJtdWx0aXBseVNjYWxhciIsImFkZCIsInNlZ21lbnROdW0iLCJwb2ludExpc3QiLCJpIiwicG9pbnQiLCJDYWxjdWxhdGVDdWJpY0JlemllclBvaW50IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQW1DQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUNwQ0MsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUSxFQUNqQjs7d0JBQ2FDLE07QUFJVCx3QkFBWUMsRUFBWixFQUFzQkMsRUFBdEIsRUFBZ0NDLEVBQWhDLEVBQTBDO0FBQUE7O0FBQUEsZUFIbkNDLFFBR21DLEdBSGxCQyxTQUdrQjtBQUFBLGVBRm5DQyxTQUVtQyxHQUZqQkQsU0FFaUI7QUFBQSxlQURuQ0UsTUFDbUMsR0FEcEJGLFNBQ29CO0FBQ3RDLGVBQUtELFFBQUwsR0FBZ0JILEVBQWhCO0FBQ0EsZUFBS0ssU0FBTCxHQUFpQkosRUFBakI7QUFDQSxlQUFLSyxNQUFMLEdBQWNKLEVBQWQ7QUFDSCxTLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O29EQUUwQkssQyxFQUFXUCxFLEVBQVVDLEUsRUFBVUMsRSxFQUFVO0FBQy9ELGdCQUFJTSxDQUFDLEdBQUcsSUFBSUQsQ0FBWjtBQUNBLGdCQUFJRSxFQUFFLEdBQUdGLENBQUMsR0FBR0EsQ0FBYjtBQUNBLGdCQUFJRyxFQUFFLEdBQUdGLENBQUMsR0FBR0EsQ0FBYjtBQUNBLGdCQUFJRyxDQUFDLEdBQUdmLEVBQUUsQ0FBQ0ksRUFBRCxDQUFGLENBQU9ZLGNBQVAsQ0FBc0JGLEVBQXRCLENBQVIsQ0FKK0QsQ0FLL0Q7O0FBQ0FDLFlBQUFBLENBQUMsR0FBR2YsRUFBRSxDQUFDZSxDQUFELENBQUYsQ0FBTUUsR0FBTixDQUFVakIsRUFBRSxDQUFDSyxFQUFELENBQUYsQ0FBT1csY0FBUCxDQUFzQixJQUFJSixDQUFKLEdBQVFELENBQTlCLENBQVYsQ0FBSixDQU4rRCxDQU8vRDs7QUFDQUksWUFBQUEsQ0FBQyxHQUFHZixFQUFFLENBQUNlLENBQUQsQ0FBRixDQUFNRSxHQUFOLENBQVVYLEVBQUUsQ0FBQ1UsY0FBSCxDQUFrQkgsRUFBbEIsQ0FBVixDQUFKO0FBRUEsbUJBQU9FLENBQVA7QUFDSDs7OzZDQUNrQkcsVSxFQUE0QjtBQUMzQyxnQkFBSUMsU0FBaUIsR0FBRyxFQUF4Qjs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixVQUFwQixFQUFnQ0UsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxrQkFBSVQsQ0FBQyxHQUFHUyxDQUFDLEdBQUdGLFVBQVo7QUFDQSxrQkFBSUcsS0FBSyxHQUFHLEtBQUtDLHlCQUFMLENBQStCWCxDQUEvQixFQUFrQyxLQUFLSixRQUF2QyxFQUFpRCxLQUFLRSxTQUF0RCxFQUFpRSxLQUFLQyxNQUF0RSxDQUFaO0FBQ0FTLGNBQUFBLFNBQVMsQ0FBQ0ksSUFBVixDQUFlRixLQUFmO0FBQ0g7O0FBQ0QsbUJBQU9GLFNBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbi8vIEBjY2NsYXNzKCdCZXNpemUnKVxyXG5leHBvcnQgY2xhc3MgQmVzaXplIHtcclxuICAgIHB1YmxpYyBzdGFydFBvczogVmVjMyA9IHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBtaWRkbGVQb3M6IFZlYzMgPSB1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3RydWN0b3IocDA6IFZlYzMsIHAxOiBWZWMzLCBwMjogVmVjMykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBwMDtcclxuICAgICAgICB0aGlzLm1pZGRsZVBvcyA9IHAxO1xyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gcDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVjdG9yMyBDYWxjdWxhdGVDdWJpY0JlemllclBvaW50KGZsb2F0IHQsIFZlY3RvcjMgcDAsIFZlY3RvcjMgcDEsIFZlY3RvcjMgcDIpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgZmxvYXQgdSA9IDEgLSB0O1xyXG4gICAgLy8gICAgIGZsb2F0IHR0ID0gdCAqIHQ7XHJcbiAgICAvLyAgICAgZmxvYXQgdXUgPSB1ICogdTtcclxuXHJcbiAgICAvLyAgICAgVmVjdG9yMyBwID0gdXUgKiBwMDtcclxuICAgIC8vICAgICBwICs9IDIgKiB1ICogdCAqIHAxO1xyXG4gICAgLy8gICAgIHAgKz0gdHQgKiBwMjtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHA7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgQ2FsY3VsYXRlQ3ViaWNCZXppZXJQb2ludCh0OiBudW1iZXIsIHAwOiBWZWMzLCBwMTogVmVjMywgcDI6IFZlYzMpIHtcclxuICAgICAgICBsZXQgdSA9IDEgLSB0O1xyXG4gICAgICAgIGxldCB0dCA9IHQgKiB0O1xyXG4gICAgICAgIGxldCB1dSA9IHUgKiB1O1xyXG4gICAgICAgIGxldCBwID0gdjMocDApLm11bHRpcGx5U2NhbGFyKHV1KTtcclxuICAgICAgICAvLyBwICs9IDIgKiB1ICogdCAqIHAxO1xyXG4gICAgICAgIHAgPSB2MyhwKS5hZGQodjMocDEpLm11bHRpcGx5U2NhbGFyKDIgKiB1ICogdCkpO1xyXG4gICAgICAgIC8vIHAgKz0gdHQgKiBwMjtcclxuICAgICAgICBwID0gdjMocCkuYWRkKHAyLm11bHRpcGx5U2NhbGFyKHR0KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgZ2V0QmVzaXplUG9pbnRMaXN0KHNlZ21lbnROdW06IG51bWJlcik6IFZlYzNbXSB7XHJcbiAgICAgICAgbGV0IHBvaW50TGlzdDogVmVjM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBpIC8gc2VnbWVudE51bTtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5DYWxjdWxhdGVDdWJpY0JlemllclBvaW50KHQsIHRoaXMuc3RhcnRQb3MsIHRoaXMubWlkZGxlUG9zLCB0aGlzLmVuZFBvcyk7XHJcbiAgICAgICAgICAgIHBvaW50TGlzdC5wdXNoKHBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50TGlzdDtcclxuICAgIH1cclxuICAgXHJcbn1cclxuIl19