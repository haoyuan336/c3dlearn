System.register(["cc", "code-quality:cr", "./My2Array.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, v3, Vec3, My2Array, _crd, CubeGroupType, CubeSet;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfMy2Array(extras) {
    _reporterNs.report("My2Array", "./My2Array", _context.meta, extras);
  }

  _export("CubeGroupType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_My2ArrayJs) {
      My2Array = _My2ArrayJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ef6decBGNtIt6d+9cDTQM5e", "CubeGroup", _context.meta);

      _crd = true;

      (function (CubeGroupType) {
        CubeGroupType[CubeGroupType["\u957F\u6761"] = 0] = "\u957F\u6761";
        CubeGroupType[CubeGroupType["\u7530"] = 1] = "\u7530";
        CubeGroupType[CubeGroupType["\u51F8"] = 2] = "\u51F8";
        CubeGroupType[CubeGroupType["\u95EA\u7535\u5DE6"] = 3] = "\u95EA\u7535\u5DE6";
        CubeGroupType[CubeGroupType["\u95EA\u7535\u53F3"] = 4] = "\u95EA\u7535\u53F3";
      })(CubeGroupType || _export("CubeGroupType", CubeGroupType = {}));

      _export("CubeSet", CubeSet = /*#__PURE__*/function () {
        function CubeSet(type, gameManager) {
          _classCallCheck(this, CubeSet);

          this.nodeList = [];
          this.numberList = new (_crd && My2Array === void 0 ? (_reportPossibleCrUseOfMy2Array({
            error: Error()
          }), My2Array) : My2Array)(4, 4, 0);
          this.currentXStep = 0;
          this.currentYStep = 0;
          this.gameManager = null;
          var mapSize = gameManager.getMapSize();
          this.gameManager = gameManager;
          this.currentXStep = Math.round(mapSize.width / 2);
          this.currentYStep = mapSize.height;

          for (var i = 0; i < 4; i++) {
            var node = gameManager.createOneCubeNode();
            this.nodeList.push(node);
          }

          console.log("type", type); // let key: number = CubeGroupType[type];

          switch (type) {
            case CubeGroupType.长条:
              this.numberList.setValue(1, 0, 1);
              this.numberList.setValue(1, 1, 1);
              this.numberList.setValue(1, 2, 1);
              this.numberList.setValue(1, 3, 1);
              break;

            case CubeGroupType.田:
              this.numberList.setValue(1, 1, 1);
              this.numberList.setValue(1, 2, 1);
              this.numberList.setValue(2, 1, 1);
              this.numberList.setValue(2, 2, 1);
              break;

            case CubeGroupType.凸:
              this.numberList.setValue(2, 1, 1);
              this.numberList.setValue(2, 2, 1);
              this.numberList.setValue(2, 3, 1);
              this.numberList.setValue(1, 2, 1);
              break;

            case CubeGroupType.闪电右:
              this.numberList.setValue(0, 2, 1);
              this.numberList.setValue(1, 1, 1);
              this.numberList.setValue(1, 2, 1);
              this.numberList.setValue(2, 1, 1);
              break;

            case CubeGroupType.闪电左:
              this.numberList.setValue(0, 1, 1);
              this.numberList.setValue(1, 1, 1);
              this.numberList.setValue(1, 2, 1);
              this.numberList.setValue(2, 2, 1);
              break;
          } // console.log("number list", this.numberList);

        }

        _createClass(CubeSet, [{
          key: "isCanMove",
          value: function isCanMove(x, y) {
            var isCan = true;

            for (var i = 0; i < 4; i++) {
              for (var j = 0; j < 4; j++) {
                var result = this.numberList.getValue(j, i);
                console.log("result", result);

                if (result === 1) {
                  var hang = y - i;
                  var lie = x + j;
                  var checkResult = this.gameManager.checkIsNull(hang, lie);
                  console.log("check result", checkResult);

                  if (checkResult) {
                    isCan = false;
                    break;
                  }
                }
              }

              if (!isCan) {
                break;
              }
            }

            return isCan;
          }
        }, {
          key: "toMove",
          value: function toMove(x, y) {}
        }, {
          key: "show",
          value: function show(v3) {
            var cubeDis = this.gameManager.getCubeDistance();
            var index = 0;
            console.log("numlist", this.numberList);

            for (var i = 0; i < 4; i++) {
              for (var j = 0; j < 4; j++) {
                var result = this.numberList.getValue(j, i);

                if (result === 1) {
                  var node = this.nodeList[index];
                  node.setPosition(new Vec3(j * cubeDis + (4 - 1) * -0.5 * cubeDis, -i * cubeDis + (4 - 1) * 0.5 * cubeDis, 0).add(v3));
                  index++;
                }
              }
            }
          }
        }, {
          key: "moveDown",
          value: function moveDown() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var nextYStep = _this.currentYStep - 1;

              var isCanMove = _this.isCanMove(_this.currentXStep, nextYStep);

              var mapSize = _this.gameManager.getMapSize();

              console.log("is can move", isCanMove);

              if (isCanMove) {
                var index = 0;
                _this.currentYStep = nextYStep;

                for (var i = 0; i < 4; i++) {
                  for (var j = 0; j < 4; j++) {
                    var result = _this.numberList.getValue(i, j);

                    if (result === 1) {
                      var node = _this.nodeList[index];
                      var x = _this.currentXStep + i;
                      var y = _this.currentYStep - j;
                      console.log("x", x);
                      console.log("y", y);
                      node.setPosition(v3(x * _this.gameManager.getCubeDistance() - mapSize.width * 0.5 - 2, y * _this.gameManager.getCubeDistance() - mapSize.height * 0.5, 0));
                      index++;
                    }
                  }
                }
              }

              if (resolve) {
                resolve(isCanMove);
              }
            });
          }
        }]);

        return CubeSet;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9lbHVvc2ljdWJlL2Fzc2V0cy9zY3JpcHRzL0N1YmVHcm91cC50cyJdLCJuYW1lcyI6WyJ2MyIsIlZlYzMiLCJNeTJBcnJheSIsIkN1YmVHcm91cFR5cGUiLCJDdWJlU2V0IiwidHlwZSIsImdhbWVNYW5hZ2VyIiwibm9kZUxpc3QiLCJudW1iZXJMaXN0IiwiY3VycmVudFhTdGVwIiwiY3VycmVudFlTdGVwIiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJNYXRoIiwicm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJub2RlIiwiY3JlYXRlT25lQ3ViZU5vZGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIumVv+adoSIsInNldFZhbHVlIiwi55SwIiwi5Ye4Iiwi6Zeq55S15Y+zIiwi6Zeq55S15bemIiwieCIsInkiLCJpc0NhbiIsImoiLCJyZXN1bHQiLCJnZXRWYWx1ZSIsImhhbmciLCJsaWUiLCJjaGVja1Jlc3VsdCIsImNoZWNrSXNOdWxsIiwiY3ViZURpcyIsImdldEN1YmVEaXN0YW5jZSIsImluZGV4Iiwic2V0UG9zaXRpb24iLCJhZGQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5leHRZU3RlcCIsImlzQ2FuTW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUJBLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDbEJDLE1BQUFBLFE7Ozs7Ozs7aUJBRUZDLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtTQUFBQSxhLDZCQUFBQSxhOzt5QkFPQ0MsTztBQU9GLHlCQUFZQyxJQUFaLEVBQWlDQyxXQUFqQyxFQUEyRDtBQUFBOztBQUFBLGVBTm5EQyxRQU1tRCxH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QTVCO0FBQ0EsMEJBQUlhLENBQUMsR0FBRyxLQUFJLENBQUNwQixZQUFMLEdBQW9Cc0IsQ0FBNUI7QUFDQVgsc0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJPLENBQWpCO0FBQ0FSLHNCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCUSxDQUFqQjtBQUNBWixzQkFBQUEsSUFBSSxDQUFDd0IsV0FBTCxDQUFpQjFDLEVBQUUsQ0FDZjZCLENBQUMsR0FBRyxLQUFJLENBQUN2QixXQUFMLENBQWlCa0MsZUFBakIsRUFBSixHQUF5QzdCLE9BQU8sQ0FBQ0ksS0FBUixHQUFnQixHQUF6RCxHQUErRCxDQURoRCxFQUVmZSxDQUFDLEdBQUcsS0FBSSxDQUFDeEIsV0FBTCxDQUFpQmtDLGVBQWpCLEVBQUosR0FBeUM3QixPQUFPLENBQUNLLE1BQVIsR0FBaUIsR0FGM0MsRUFHZixDQUhlLENBQW5CO0FBS0F5QixzQkFBQUEsS0FBSztBQUNSO0FBQ0o7QUFDSjtBQUNKOztBQUNELGtCQUFJSSxPQUFKLEVBQWE7QUFDVEEsZ0JBQUFBLE9BQU8sQ0FBQ0csU0FBRCxDQUFQO0FBQ0g7QUFDSixhQS9CTSxDQUFQO0FBZ0NIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSwgbWF0aCwgdjMsIFZlYzMgfSBmcm9tICdjYydcbmltcG9ydCBNeTJBcnJheSBmcm9tICcuL015MkFycmF5J1xuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tICcuL0dhbWVNYW5hZ2VyJztcbmVudW0gQ3ViZUdyb3VwVHlwZSB7XG4gICAg6ZW/5p2hLFxuICAgIOeUsCxcbiAgICDlh7gsXG4gICAg6Zeq55S15bemLFxuICAgIOmXqueUteWPs1xufVxuY2xhc3MgQ3ViZVNldCB7XG4gICAgcHJpdmF0ZSBub2RlTGlzdDogTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBudW1iZXJMaXN0OiBNeTJBcnJheTxudW1iZXI+ID0gbmV3IE15MkFycmF5KDQsIDQsIDApO1xuICAgIHByaXZhdGUgY3VycmVudFhTdGVwOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFlTdGVwOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IEN1YmVHcm91cFR5cGUsIGdhbWVNYW5hZ2VyOiBHYW1lTWFuYWdlcikge1xuICAgICAgICBsZXQgbWFwU2l6ZSA9IGdhbWVNYW5hZ2VyLmdldE1hcFNpemUoKTtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdhbWVNYW5hZ2VyO1xuICAgICAgICB0aGlzLmN1cnJlbnRYU3RlcCA9IE1hdGgucm91bmQobWFwU2l6ZS53aWR0aCAvIDIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRZU3RlcCA9IG1hcFNpemUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGU6IE5vZGUgPSBnYW1lTWFuYWdlci5jcmVhdGVPbmVDdWJlTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgLy8gbGV0IGtleTogbnVtYmVyID0gQ3ViZUdyb3VwVHlwZVt0eXBlXTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEN1YmVHcm91cFR5cGUu6ZW/5p2hOlxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAwLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAzLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ3ViZUdyb3VwVHlwZS7nlLA6XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAyLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMiwgMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDIsIDIsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDdWJlR3JvdXBUeXBlLuWHuDpcblxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgyLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMiwgMiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDIsIDMsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAyLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ3ViZUdyb3VwVHlwZS7pl6rnlLXlj7M6XG5cbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMCwgMiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAyLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMiwgMSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEN1YmVHcm91cFR5cGUu6Zeq55S15bemOlxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgyLCAyLCAxKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibnVtYmVyIGxpc3RcIiwgdGhpcy5udW1iZXJMaXN0KTtcbiAgICB9XG4gICAgaXNDYW5Nb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc0NhbiA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm51bWJlckxpc3QuZ2V0VmFsdWUoaiwgaSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoYW5nOiBudW1iZXIgPSB5IC0gaTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpZTogbnVtYmVyID0geCArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja1Jlc3VsdCA9IHRoaXMuZ2FtZU1hbmFnZXIuY2hlY2tJc051bGwoaGFuZywgbGllKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayByZXN1bHRcIiwgY2hlY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2FuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0Nhbikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0NhbjtcbiAgICB9XG4gICAgdG9Nb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG5cbiAgICB9XG4gICAgc2hvdyh2MzogVmVjMykge1xuICAgICAgICBsZXQgY3ViZURpcyA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q3ViZURpc3RhbmNlKCk7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCJudW1saXN0XCIsIHRoaXMubnVtYmVyTGlzdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm51bWJlckxpc3QuZ2V0VmFsdWUoaiwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZUxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKG5ldyBWZWMzKGogKiBjdWJlRGlzICsgKDQgLSAxKSAqIC0gMC41ICogY3ViZURpcywgLWkgKiBjdWJlRGlzICsgKDQgLSAxKSAqIDAuNSAqIGN1YmVEaXMsIDApLmFkZCh2MykpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXh0WVN0ZXAgPSB0aGlzLmN1cnJlbnRZU3RlcCAtIDE7XG4gICAgICAgICAgICBsZXQgaXNDYW5Nb3ZlID0gdGhpcy5pc0Nhbk1vdmUodGhpcy5jdXJyZW50WFN0ZXAsIG5leHRZU3RlcCk7XG4gICAgICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0TWFwU2l6ZSgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzIGNhbiBtb3ZlXCIsIGlzQ2FuTW92ZSk7XG4gICAgICAgICAgICBpZiAoaXNDYW5Nb3ZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRZU3RlcCA9IG5leHRZU3RlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubnVtYmVyTGlzdC5nZXRWYWx1ZShpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZUxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gdGhpcy5jdXJyZW50WFN0ZXAgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5jdXJyZW50WVN0ZXAgLSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieFwiLCB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlcIiwgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih2MyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAqIHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q3ViZURpc3RhbmNlKCkgLSBtYXBTaXplLndpZHRoICogMC41IC0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSAqIHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q3ViZURpc3RhbmNlKCkgLSBtYXBTaXplLmhlaWdodCAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpc0Nhbk1vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHsgQ3ViZVNldCwgQ3ViZUdyb3VwVHlwZSB9Il19