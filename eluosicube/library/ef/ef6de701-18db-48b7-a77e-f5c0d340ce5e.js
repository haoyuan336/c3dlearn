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
          this.currentXStep = Math.round(mapSize.width / 2) - 2;
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

                if (result === 1) {
                  var hang = y - i;
                  var lie = x + j;
                  var checkResult = this.gameManager.checkIsNull(hang, lie);

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
          value: function toMove(direction) {
            var _this = this;

            var currentXStep = this.currentXStep;
            return new Promise(function () {
              switch (direction) {
                case 'left':
                  if (currentXStep > 0) {
                    currentXStep--;
                  }

                  break;

                case 'right':
                  var mapSize = _this.gameManager.getMapSize();

                  if (currentXStep < mapSize.width) {
                    currentXStep++;
                  }

                  break;

                default:
                  break;
              }

              var isCan = _this.isCanMove(currentXStep, _this.currentYStep);

              if (isCan) {
                _this.currentXStep = currentXStep;

                _this.referPos();
              }
            });
          }
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
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              var nextYStep = _this2.currentYStep - 1;

              var isCanMove = _this2.isCanMove(_this2.currentXStep, nextYStep);

              if (isCanMove) {
                _this2.currentYStep = nextYStep;

                _this2.referPos();
              }

              if (resolve) {
                resolve(isCanMove);
              }
            });
          }
        }, {
          key: "referPos",
          value: function referPos() {
            var index = 0;
            var mapSize = this.gameManager.getMapSize();

            for (var i = 0; i < 4; i++) {
              for (var j = 0; j < 4; j++) {
                var result = this.numberList.getValue(i, j);

                if (result === 1) {
                  var node = this.nodeList[index];
                  var x = this.currentXStep + i;
                  var y = this.currentYStep - j;
                  node.setPosition(v3(x * this.gameManager.getCubeDistance() - mapSize.width * 0.5, y * this.gameManager.getCubeDistance() - mapSize.height * 0.5, 0));
                  index++;
                }
              }
            }
          }
        }, {
          key: "getSetData",
          value: function getSetData() {
            return this.numberList;
          }
        }, {
          key: "getCurrentPos",
          value: function getCurrentPos() {
            return {
              lie: this.currentXStep,
              hang: this.currentYStep
            };
          }
        }]);

        return CubeSet;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9lbHVvc2ljdWJlL2Fzc2V0cy9zY3JpcHRzL0N1YmVHcm91cC50cyJdLCJuYW1lcyI6WyJ2MyIsIlZlYzMiLCJNeTJBcnJheSIsIkN1YmVHcm91cFR5cGUiLCJDdWJlU2V0IiwidHlwZSIsImdhbWVNYW5hZ2VyIiwibm9kZUxpc3QiLCJudW1iZXJMaXN0IiwiY3VycmVudFhTdGVwIiwiY3VycmVudFlTdGVwIiwibWFwU2l6ZSIsImdldE1hcFNpemUiLCJNYXRoIiwicm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJub2RlIiwiY3JlYXRlT25lQ3ViZU5vZGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIumVv+adoSIsInNldFZhbHVlIiwi55SwIiwi5Ye4Iiwi6Zeq55S15Y+zIiwi6Zeq55S15bemIiwieCIsInkiLCJpc0NhbiIsImoiLCJyZXN1bHQiLCJnZXRWYWx1ZSIsImhhbmciLCJsaWUiLCJjaGVja1Jlc3VsdCIsImNoZWNrSXNOdWxsIiwiZGlyZWN0aW9uIiwiUHJvbWlzZSIsImlzQ2FuTW92ZSIsInJlZmVyUG9zIiwiY3ViZURpcyIsImdldEN1YmVEaXN0YW5jZSIsImluZGV4Iiwic2V0UG9zaXRpb24iLCJhZGQiLCJyZXNvbHZlIiwicmVqZWN0IiwibmV4dFlTdGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQkEsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNsQkMsTUFBQUEsUTs7Ozs7OztpQkFFRkMsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO1NBQUFBLGEsNkJBQUFBLGE7O3lCQU9DQyxPO0FBT0YseUJBQVlDLElBQVosRUFBaUNDLFdBQWpDLEVBQTJEO0FBQUE7O0FBQUEsZUFObkRDLFFBTW1ELEdBTmhDLEVBTWdDO0FBQUEsZUFMbkRDLFVBS21ELEdBTHBCO0FBQUE7QUFBQSxvQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBS29CO0FBQUEsZUFKbkRDLFlBSW1ELEdBSjVCLENBSTRCO0FBQUEsZUFIbkRDLFlBR21ELEdBSDVCLENBRzRCO0FBQUEsZUFGbkRKLFdBRW1ELEdBRnhCLElBRXdCO0FBQ3ZELGNBQUlLLE9BQU8sR0FBR0wsV0FBVyxDQUFDTSxVQUFaLEVBQWQ7QUFDQSxlQUFLTixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLGVBQUtHLFlBQUwsR0FBb0JJLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFPLENBQUNJLEtBQVIsR0FBZ0IsQ0FBM0IsSUFBZ0MsQ0FBcEQ7QUFDQSxlQUFLTCxZQUFMLEdBQW9CQyxPQUFPLENBQUNLLE1BQTVCOztBQUNBLGVBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixnQkFBSUMsSUFBVSxHQUFHWixXQUFXLENBQUNhLGlCQUFaLEVBQWpCO0FBQ0EsaUJBQUtaLFFBQUwsQ0FBY2EsSUFBZCxDQUFtQkYsSUFBbkI7QUFDSDs7QUFDREcsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmpCLElBQXBCLEVBVHVELENBVXZEOztBQUNBLGtCQUFRQSxJQUFSO0FBQ0ksaUJBQUtGLGFBQWEsQ0FBQ29CLEVBQW5CO0FBQ0ksbUJBQUtmLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBLG1CQUFLaEIsVUFBTCxDQUFnQmdCLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0EsbUJBQUtoQixVQUFMLENBQWdCZ0IsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQSxtQkFBS2hCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBOztBQUNKLGlCQUFLckIsYUFBYSxDQUFDc0IsQ0FBbkI7QUFDSSxtQkFBS2pCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBLG1CQUFLaEIsVUFBTCxDQUFnQmdCLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0EsbUJBQUtoQixVQUFMLENBQWdCZ0IsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQSxtQkFBS2hCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBOztBQUNKLGlCQUFLckIsYUFBYSxDQUFDdUIsQ0FBbkI7QUFFSSxtQkFBS2xCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBLG1CQUFLaEIsVUFBTCxDQUFnQmdCLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0EsbUJBQUtoQixVQUFMLENBQWdCZ0IsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQSxtQkFBS2hCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBOztBQUNKLGlCQUFLckIsYUFBYSxDQUFDd0IsR0FBbkI7QUFFSSxtQkFBS25CLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBLG1CQUFLaEIsVUFBTCxDQUFnQmdCLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0EsbUJBQUtoQixVQUFMLENBQWdCZ0IsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQSxtQkFBS2hCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBOztBQUNKLGlCQUFLckIsYUFBYSxDQUFDeUIsR0FBbkI7QUFDSSxtQkFBS3BCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBLG1CQUFLaEIsVUFBTCxDQUFnQmdCLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0EsbUJBQUtoQixVQUFMLENBQWdCZ0IsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQSxtQkFBS2hCLFVBQUwsQ0FBZ0JnQixRQUFoQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUVBO0FBakNSLFdBWHVELENBOEN2RDs7QUFDSDs7OztvQ0FDU0ssQyxFQUFXQyxDLEVBQW9CO0FBQ3JDLGdCQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFDQSxpQkFBSyxJQUFJZCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLG1CQUFLLElBQUllLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsb0JBQUlDLE1BQU0sR0FBRyxLQUFLekIsVUFBTCxDQUFnQjBCLFFBQWhCLENBQXlCRixDQUF6QixFQUE0QmYsQ0FBNUIsQ0FBYjs7QUFDQSxvQkFBSWdCLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2Qsc0JBQUlFLElBQVksR0FBR0wsQ0FBQyxHQUFHYixDQUF2QjtBQUNBLHNCQUFJbUIsR0FBVyxHQUFHUCxDQUFDLEdBQUdHLENBQXRCO0FBQ0Esc0JBQUlLLFdBQVcsR0FBRyxLQUFLL0IsV0FBTCxDQUFpQmdDLFdBQWpCLENBQTZCSCxJQUE3QixFQUFtQ0MsR0FBbkMsQ0FBbEI7O0FBQ0Esc0JBQUlDLFdBQUosRUFBaUI7QUFDYk4sb0JBQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0E7QUFDSDtBQUNKO0FBRUo7O0FBQ0Qsa0JBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1I7QUFDSDtBQUNKOztBQUNELG1CQUFPQSxLQUFQO0FBQ0g7OztpQ0FDTVEsUyxFQUFtQjtBQUFBOztBQUN0QixnQkFBSTlCLFlBQVksR0FBRyxLQUFLQSxZQUF4QjtBQUNBLG1CQUFPLElBQUkrQixPQUFKLENBQVksWUFBTTtBQUNyQixzQkFBUUQsU0FBUjtBQUNJLHFCQUFLLE1BQUw7QUFDSSxzQkFBSTlCLFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUNsQkEsb0JBQUFBLFlBQVk7QUFDZjs7QUFDRDs7QUFDSixxQkFBSyxPQUFMO0FBQ0ksc0JBQUlFLE9BQU8sR0FBRyxLQUFJLENBQUNMLFdBQUwsQ0FBaUJNLFVBQWpCLEVBQWQ7O0FBQ0Esc0JBQUlILFlBQVksR0FBR0UsT0FBTyxDQUFDSSxLQUEzQixFQUFrQztBQUM5Qk4sb0JBQUFBLFlBQVk7QUFDZjs7QUFDRDs7QUFDSjtBQUNJO0FBYlI7O0FBZUEsa0JBQUlzQixLQUFLLEdBQUcsS0FBSSxDQUFDVSxTQUFMLENBQWVoQyxZQUFmLEVBQTZCLEtBQUksQ0FBQ0MsWUFBbEMsQ0FBWjs7QUFDQSxrQkFBSXFCLEtBQUosRUFBVztBQUNQLGdCQUFBLEtBQUksQ0FBQ3RCLFlBQUwsR0FBb0JBLFlBQXBCOztBQUNBLGdCQUFBLEtBQUksQ0FBQ2lDLFFBQUw7QUFDSDtBQUNKLGFBckJNLENBQVA7QUFzQkg7OzsrQkFDSTFDLEUsRUFBVTtBQUNYLGdCQUFJMkMsT0FBTyxHQUFHLEtBQUtyQyxXQUFMLENBQWlCc0MsZUFBakIsRUFBZDtBQUNBLGdCQUFJQyxLQUFhLEdBQUcsQ0FBcEI7QUFDQXhCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBS2QsVUFBNUI7O0FBQ0EsaUJBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixtQkFBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLG9CQUFJQyxNQUFNLEdBQUcsS0FBS3pCLFVBQUwsQ0FBZ0IwQixRQUFoQixDQUF5QkYsQ0FBekIsRUFBNEJmLENBQTVCLENBQWI7O0FBQ0Esb0JBQUlnQixNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNkLHNCQUFJZixJQUFJLEdBQUcsS0FBS1gsUUFBTCxDQUFjc0MsS0FBZCxDQUFYO0FBQ0EzQixrQkFBQUEsSUFBSSxDQUFDNEIsV0FBTCxDQUFpQixJQUFJN0MsSUFBSixDQUFTK0IsQ0FBQyxHQUFHVyxPQUFKLEdBQWMsQ0FBQyxJQUFJLENBQUwsSUFBVSxDQUFFLEdBQVosR0FBa0JBLE9BQXpDLEVBQWtELENBQUMxQixDQUFELEdBQUswQixPQUFMLEdBQWUsQ0FBQyxJQUFJLENBQUwsSUFBVSxHQUFWLEdBQWdCQSxPQUFqRixFQUEwRixDQUExRixFQUE2RkksR0FBN0YsQ0FBaUcvQyxFQUFqRyxDQUFqQjtBQUNBNkMsa0JBQUFBLEtBQUs7QUFDUjtBQUNKO0FBQ0o7QUFDSjs7O3FDQUNVO0FBQUE7O0FBQ1AsbUJBQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNRLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSUMsU0FBUyxHQUFHLE1BQUksQ0FBQ3hDLFlBQUwsR0FBb0IsQ0FBcEM7O0FBQ0Esa0JBQUkrQixTQUFTLEdBQUcsTUFBSSxDQUFDQSxTQUFMLENBQWUsTUFBSSxDQUFDaEMsWUFBcEIsRUFBa0N5QyxTQUFsQyxDQUFoQjs7QUFDQSxrQkFBSVQsU0FBSixFQUFlO0FBQ1gsZ0JBQUEsTUFBSSxDQUFDL0IsWUFBTCxHQUFvQndDLFNBQXBCOztBQUNBLGdCQUFBLE1BQUksQ0FBQ1IsUUFBTDtBQUNIOztBQUNELGtCQUFJTSxPQUFKLEVBQWE7QUFDVEEsZ0JBQUFBLE9BQU8sQ0FBQ1AsU0FBRCxDQUFQO0FBQ0g7QUFDSixhQVZNLENBQVA7QUFXSDs7O3FDQUNVO0FBQ1AsZ0JBQUlJLEtBQUssR0FBRyxDQUFaO0FBQ0EsZ0JBQUlsQyxPQUFPLEdBQUcsS0FBS0wsV0FBTCxDQUFpQk0sVUFBakIsRUFBZDs7QUFDQSxpQkFBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLG1CQUFLLElBQUllLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsb0JBQUlDLE1BQU0sR0FBRyxLQUFLekIsVUFBTCxDQUFnQjBCLFFBQWhCLENBQXlCakIsQ0FBekIsRUFBNEJlLENBQTVCLENBQWI7O0FBQ0Esb0JBQUlDLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2Qsc0JBQUlmLElBQUksR0FBRyxLQUFLWCxRQUFMLENBQWNzQyxLQUFkLENBQVg7QUFDQSxzQkFBSWhCLENBQUMsR0FBRyxLQUFLcEIsWUFBTCxHQUFvQlEsQ0FBNUI7QUFDQSxzQkFBSWEsQ0FBQyxHQUFHLEtBQUtwQixZQUFMLEdBQW9Cc0IsQ0FBNUI7QUFDQWQsa0JBQUFBLElBQUksQ0FBQzRCLFdBQUwsQ0FBaUI5QyxFQUFFLENBQ2Y2QixDQUFDLEdBQUcsS0FBS3ZCLFdBQUwsQ0FBaUJzQyxlQUFqQixFQUFKLEdBQXlDakMsT0FBTyxDQUFDSSxLQUFSLEdBQWdCLEdBRDFDLEVBRWZlLENBQUMsR0FBRyxLQUFLeEIsV0FBTCxDQUFpQnNDLGVBQWpCLEVBQUosR0FBeUNqQyxPQUFPLENBQUNLLE1BQVIsR0FBaUIsR0FGM0MsRUFHZixDQUhlLENBQW5CO0FBS0E2QixrQkFBQUEsS0FBSztBQUNSO0FBQ0o7QUFDSjtBQUNKOzs7dUNBQzhCO0FBQzNCLG1CQUFPLEtBQUtyQyxVQUFaO0FBQ0g7OzswQ0FDZTtBQUNaLG1CQUFPO0FBQ0g0QixjQUFBQSxHQUFHLEVBQUUsS0FBSzNCLFlBRFA7QUFFSDBCLGNBQUFBLElBQUksRUFBRSxLQUFLekI7QUFGUixhQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlLCBtYXRoLCB2MywgVmVjMyB9IGZyb20gJ2NjJ1xuaW1wb3J0IE15MkFycmF5IGZyb20gJy4vTXkyQXJyYXknXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gJy4vR2FtZU1hbmFnZXInO1xuZW51bSBDdWJlR3JvdXBUeXBlIHtcbiAgICDplb/mnaEsXG4gICAg55SwLFxuICAgIOWHuCxcbiAgICDpl6rnlLXlt6YsXG4gICAg6Zeq55S15Y+zXG59XG5jbGFzcyBDdWJlU2V0IHtcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIG51bWJlckxpc3Q6IE15MkFycmF5PG51bWJlcj4gPSBuZXcgTXkyQXJyYXkoNCwgNCwgMCk7XG4gICAgcHJpdmF0ZSBjdXJyZW50WFN0ZXA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50WVN0ZXA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogQ3ViZUdyb3VwVHlwZSwgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyKSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gZ2FtZU1hbmFnZXIuZ2V0TWFwU2l6ZSgpO1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XG4gICAgICAgIHRoaXMuY3VycmVudFhTdGVwID0gTWF0aC5yb3VuZChtYXBTaXplLndpZHRoIC8gMikgLSAyO1xuICAgICAgICB0aGlzLmN1cnJlbnRZU3RlcCA9IG1hcFNpemUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGU6IE5vZGUgPSBnYW1lTWFuYWdlci5jcmVhdGVPbmVDdWJlTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgLy8gbGV0IGtleTogbnVtYmVyID0gQ3ViZUdyb3VwVHlwZVt0eXBlXTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEN1YmVHcm91cFR5cGUu6ZW/5p2hOlxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAwLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAzLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ3ViZUdyb3VwVHlwZS7nlLA6XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAyLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMiwgMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDIsIDIsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDdWJlR3JvdXBUeXBlLuWHuDpcblxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgyLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMiwgMiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDIsIDMsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAyLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ3ViZUdyb3VwVHlwZS7pl6rnlLXlj7M6XG5cbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMCwgMiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgxLCAyLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMiwgMSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEN1YmVHcm91cFR5cGUu6Zeq55S15bemOlxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlckxpc3Quc2V0VmFsdWUoMSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJMaXN0LnNldFZhbHVlKDEsIDIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyTGlzdC5zZXRWYWx1ZSgyLCAyLCAxKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibnVtYmVyIGxpc3RcIiwgdGhpcy5udW1iZXJMaXN0KTtcbiAgICB9XG4gICAgaXNDYW5Nb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc0NhbiA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm51bWJlckxpc3QuZ2V0VmFsdWUoaiwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZzogbnVtYmVyID0geSAtIGk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaWU6IG51bWJlciA9IHggKyBqO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tSZXN1bHQgPSB0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrSXNOdWxsKGhhbmcsIGxpZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzQ2FuKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQ2FuO1xuICAgIH1cbiAgICB0b01vdmUoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRYU3RlcCA9IHRoaXMuY3VycmVudFhTdGVwO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYU3RlcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYU3RlcC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLmdhbWVNYW5hZ2VyLmdldE1hcFNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYU3RlcCA8IG1hcFNpemUud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYU3RlcCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzQ2FuID0gdGhpcy5pc0Nhbk1vdmUoY3VycmVudFhTdGVwLCB0aGlzLmN1cnJlbnRZU3RlcCk7XG4gICAgICAgICAgICBpZiAoaXNDYW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRYU3RlcCA9IGN1cnJlbnRYU3RlcDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmVyUG9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaG93KHYzOiBWZWMzKSB7XG4gICAgICAgIGxldCBjdWJlRGlzID0gdGhpcy5nYW1lTWFuYWdlci5nZXRDdWJlRGlzdGFuY2UoKTtcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm51bWxpc3RcIiwgdGhpcy5udW1iZXJMaXN0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubnVtYmVyTGlzdC5nZXRWYWx1ZShqLCBpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obmV3IFZlYzMoaiAqIGN1YmVEaXMgKyAoNCAtIDEpICogLSAwLjUgKiBjdWJlRGlzLCAtaSAqIGN1YmVEaXMgKyAoNCAtIDEpICogMC41ICogY3ViZURpcywgMCkuYWRkKHYzKSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5leHRZU3RlcCA9IHRoaXMuY3VycmVudFlTdGVwIC0gMTtcbiAgICAgICAgICAgIGxldCBpc0Nhbk1vdmUgPSB0aGlzLmlzQ2FuTW92ZSh0aGlzLmN1cnJlbnRYU3RlcCwgbmV4dFlTdGVwKTtcbiAgICAgICAgICAgIGlmIChpc0Nhbk1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRZU3RlcCA9IG5leHRZU3RlcDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmVyUG9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaXNDYW5Nb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVmZXJQb3MoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy5nYW1lTWFuYWdlci5nZXRNYXBTaXplKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm51bWJlckxpc3QuZ2V0VmFsdWUoaSwgaik7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZUxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMuY3VycmVudFhTdGVwICsgaTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLmN1cnJlbnRZU3RlcCAtIGo7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odjMoXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICogdGhpcy5nYW1lTWFuYWdlci5nZXRDdWJlRGlzdGFuY2UoKSAtIG1hcFNpemUud2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICogdGhpcy5nYW1lTWFuYWdlci5nZXRDdWJlRGlzdGFuY2UoKSAtIG1hcFNpemUuaGVpZ2h0ICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTZXREYXRhKCk6IE15MkFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJMaXN0O1xuICAgIH1cbiAgICBnZXRDdXJyZW50UG9zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGllOiB0aGlzLmN1cnJlbnRYU3RlcCxcbiAgICAgICAgICAgIGhhbmc6IHRoaXMuY3VycmVudFlTdGVwXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IEN1YmVTZXQsIEN1YmVHcm91cFR5cGUgfSJdfQ==