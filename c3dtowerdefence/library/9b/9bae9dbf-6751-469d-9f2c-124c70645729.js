System.register(["cc", "code-quality:cr", "./My2Array.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, My2dArray, _crd, CellNode, FindPathWithAStart;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfMy2dArray(extras) {
    _reporterNs.report("My2dArray", "./My2Array", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_My2ArrayJs) {
      My2dArray = _My2ArrayJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9bae92/Z1FGnZ8sEkxwZFcp", "FindPathWithAStart", _context.meta);

      _crd = true;

      CellNode = /*#__PURE__*/function () {
        //是否存在障碍物 
        //父节点
        function CellNode(x, y) {
          _classCallCheck(this, CellNode);

          this.x = 0;
          this.y = 0;
          this.isHaveObs = false;
          this.gValue = 0;
          this.hValue = 0;
          this.parent = null;
          this.x = x;
          this.y = y;
        }

        _createClass(CellNode, [{
          key: "setParent",
          value: function setParent(targetNode) {
            this.parent = targetNode;
          }
        }, {
          key: "getFValue",
          value: function getFValue() {
            return this.gValue + this.hValue;
          }
        }, {
          key: "setObs",
          value: function setObs(value) {
            //设置障碍物
            this.isHaveObs = value;
          }
        }]);

        return CellNode;
      }();

      _export("FindPathWithAStart", FindPathWithAStart = /*#__PURE__*/function () {
        // let openList: 
        // start () {
        // }
        function FindPathWithAStart(targetList, startPos, endPos) {
          _classCallCheck(this, FindPathWithAStart);

          this.openList = [];
          this.closeList = [];
          this.mapNodeList = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
            error: Error()
          }), My2dArray) : My2dArray)();
          this.statrNode = null;
          this.endNode = null;
          var heightLength = targetList.getHeightLength();
          var widthLength = targetList.getWidthLength();

          for (var i = 0; i < heightLength; i++) {
            var list = new Array();

            for (var j = 0; j < widthLength; j++) {
              // list.push
              list.push(new CellNode(j, i));
            }

            this.mapNodeList.pushList(list);
          }

          this.statrNode = this.mapNodeList.getValue(startPos[0], startPos[1]);
          this.endNode = this.mapNodeList.getValue(endPos[0], endPos[1]); // console.log('map node list', this.mapNodeList);
        }

        _createClass(FindPathWithAStart, [{
          key: "findPathList",
          value: function findPathList() {
            //返回路径点
            //首先将起点加入到openlist里面
            var cellNodeList = [];
            this.openList.push(this.statrNode);

            while (this.openList.length > 0) {
              //如果openlist 大于0 那么继续循环
              //第一步。取出来，openlist里面。 fvalue值最小的节点
              var minFValueIndex = this.findMinFvalueNode(this.openList);
              var minFValueNode = this.openList.splice(minFValueIndex, 1)[0]; // console.log("min fvalue node", minFValueNode);

              if (minFValueNode.x === this.endNode.x && minFValueNode.y === this.endNode.y) {
                // console.log("找到了路径点");
                var nextNode = minFValueNode.parent;
                cellNodeList.push(minFValueNode);

                while (!(nextNode.x === this.statrNode.x && nextNode.y === this.statrNode.y)) {
                  cellNodeList.push(nextNode);
                  nextNode = nextNode.parent;
                }

                break;
              }

              this.closeList.push(minFValueNode);
              var nearbyNodeList = this.findNearbyNodeList(minFValueNode, this.mapNodeList); //附近点的节点列表
              //遍历此附近节点

              for (var i = 0; i < nearbyNodeList.length; i++) {
                var node = nearbyNodeList[i];

                if (this.checkIsInList(node, this.closeList)) {
                  continue;
                }

                if (this.checkIsInList(node, this.openList)) {
                  //检查节点是否在openlist 里面。如果在需要判断是否更新parentNode
                  if (node.parent.gValue < minFValueNode.gValue) {
                    node.setParent(minFValueNode);
                    node.gValue = minFValueNode.gValue + this.getDistance(node.parent, node);
                    node.hValue = this.getDistance(node, this.endNode);
                  }
                } else {
                  //如果不在 ，那么需要给此点设置新的父节点，然后加入到openList里面 并且计算fvalue
                  node.setParent(minFValueNode);
                  node.gValue = minFValueNode.gValue + this.getDistance(node.parent, node);
                  node.hValue = this.getDistance(node, this.endNode);
                  this.openList.push(node);
                }
              }
            }

            cellNodeList = cellNodeList.reverse(); //倒序整理列表

            var list = [];

            for (var _i = 0; _i < cellNodeList.length; _i++) {
              list.push([cellNodeList[_i].x, cellNodeList[_i].y]);
            }

            return list;
          }
        }, {
          key: "getDistance",
          value: function getDistance(p1, p2) {
            return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          }
        }, {
          key: "findNearbyNodeList",
          value: function findNearbyNodeList(targetNode, targetList) {
            var dirList = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            var list = [];

            for (var i = 0; i < dirList.length; i++) {
              var dir = dirList[i];
              var endPosX = targetNode.x + dir[0];
              var endPosY = targetNode.y + dir[1];
              var cellNode = targetList.getValue(endPosX, endPosY);

              if (cellNode && !cellNode.isHaveObs) {
                list.push(cellNode);
              }
            }

            return list;
          }
        }, {
          key: "findMinFvalueNode",
          value: function findMinFvalueNode(list) {
            var mValue = Number.MAX_VALUE;
            var index = null;

            for (var i = 0; i < list.length; i++) {
              var fValue = list[i].getFValue();

              if (fValue < mValue) {
                mValue = fValue;
                index = i;
              }
            }

            return index;
          }
        }, {
          key: "checkIsInList",
          value: function checkIsInList(targetNode, targetList) {
            for (var i = 0; i < targetList.length; i++) {
              var node = targetList[i];

              if (node.x === targetNode.x && node.y === targetNode.y) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "updateObsData",
          value: function updateObsData(dataList) {
            //更新障碍物数据
            for (var i = 0; i < dataList.length; i++) {
              var data = dataList[i];
              var cellNode = this.mapNodeList.getValue(data[0], data[1]); // cellNode.setParent

              cellNode.setObs(true);
            }
          }
        }]);

        return FindPathWithAStart;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL0ZpbmRQYXRoV2l0aEFTdGFydC50cyJdLCJuYW1lcyI6WyJNeTJkQXJyYXkiLCJDZWxsTm9kZSIsIngiLCJ5IiwiaXNIYXZlT2JzIiwiZ1ZhbHVlIiwiaFZhbHVlIiwicGFyZW50IiwidGFyZ2V0Tm9kZSIsInZhbHVlIiwiRmluZFBhdGhXaXRoQVN0YXJ0IiwidGFyZ2V0TGlzdCIsInN0YXJ0UG9zIiwiZW5kUG9zIiwib3Blbkxpc3QiLCJjbG9zZUxpc3QiLCJtYXBOb2RlTGlzdCIsInN0YXRyTm9kZSIsImVuZE5vZGUiLCJoZWlnaHRMZW5ndGgiLCJnZXRIZWlnaHRMZW5ndGgiLCJ3aWR0aExlbmd0aCIsImdldFdpZHRoTGVuZ3RoIiwiaSIsImxpc3QiLCJBcnJheSIsImoiLCJwdXNoIiwicHVzaExpc3QiLCJnZXRWYWx1ZSIsImNlbGxOb2RlTGlzdCIsImxlbmd0aCIsIm1pbkZWYWx1ZUluZGV4IiwiZmluZE1pbkZ2YWx1ZU5vZGUiLCJtaW5GVmFsdWVOb2RlIiwic3BsaWNlIiwibmV4dE5vZGUiLCJuZWFyYnlOb2RlTGlzdCIsImZpbmROZWFyYnlOb2RlTGlzdCIsIm5vZGUiLCJjaGVja0lzSW5MaXN0Iiwic2V0UGFyZW50IiwiZ2V0RGlzdGFuY2UiLCJyZXZlcnNlIiwicDEiLCJwMiIsIk1hdGgiLCJzcXJ0IiwicG93IiwiZGlyTGlzdCIsImRpciIsImVuZFBvc1giLCJlbmRQb3NZIiwiY2VsbE5vZGUiLCJtVmFsdWUiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJpbmRleCIsImZWYWx1ZSIsImdldEZWYWx1ZSIsImRhdGFMaXN0IiwiZGF0YSIsInNldE9icyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU9BLE1BQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsUTtBQUdpQztBQUdIO0FBRWhDLDBCQUFZQyxDQUFaLEVBQXVCQyxDQUF2QixFQUFrQztBQUFBOztBQUFBLGVBUDNCRCxDQU8yQixHQVBmLENBT2U7QUFBQSxlQU4zQkMsQ0FNMkIsR0FOZixDQU1lO0FBQUEsZUFMM0JDLFNBSzJCLEdBTE4sS0FLTTtBQUFBLGVBSjNCQyxNQUkyQixHQUpWLENBSVU7QUFBQSxlQUgzQkMsTUFHMkIsR0FIVixDQUdVO0FBQUEsZUFGM0JDLE1BRTJCLEdBRlIsSUFFUTtBQUM5QixlQUFLTCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxlQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDSDs7OztvQ0FDU0ssVSxFQUFzQjtBQUM1QixpQkFBS0QsTUFBTCxHQUFjQyxVQUFkO0FBQ0g7OztzQ0FDbUI7QUFDaEIsbUJBQU8sS0FBS0gsTUFBTCxHQUFjLEtBQUtDLE1BQTFCO0FBQ0g7OztpQ0FDTUcsSyxFQUFnQjtBQUNuQjtBQUNBLGlCQUFLTCxTQUFMLEdBQWlCSyxLQUFqQjtBQUNIOzs7Ozs7b0NBRVFDLGtCO0FBQ1Q7QUFDQTtBQUNBO0FBT0Esb0NBQVlDLFVBQVosRUFBc0NDLFFBQXRDLEVBQTBEQyxNQUExRCxFQUE0RTtBQUFBOztBQUFBLGVBTHJFQyxRQUtxRSxHQUx6QyxFQUt5QztBQUFBLGVBSnJFQyxTQUlxRSxHQUp4QyxFQUl3QztBQUFBLGVBSHJFQyxXQUdxRSxHQUhsQztBQUFBO0FBQUEsdUNBR2tDO0FBQUEsZUFGckVDLFNBRXFFLEdBRi9DLElBRStDO0FBQUEsZUFEckVDLE9BQ3FFLEdBRGpELElBQ2lEO0FBQ3hFLGNBQUlDLFlBQVksR0FBR1IsVUFBVSxDQUFDUyxlQUFYLEVBQW5CO0FBQ0EsY0FBSUMsV0FBVyxHQUFHVixVQUFVLENBQUNXLGNBQVgsRUFBbEI7O0FBQ0EsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixZQUFwQixFQUFrQ0ksQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxnQkFBSUMsSUFBSSxHQUFHLElBQUlDLEtBQUosRUFBWDs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxXQUFwQixFQUFpQ0ssQ0FBQyxFQUFsQyxFQUFzQztBQUNsQztBQUNBRixjQUFBQSxJQUFJLENBQUNHLElBQUwsQ0FBVSxJQUFJMUIsUUFBSixDQUFheUIsQ0FBYixFQUFnQkgsQ0FBaEIsQ0FBVjtBQUNIOztBQUNELGlCQUFLUCxXQUFMLENBQWlCWSxRQUFqQixDQUEwQkosSUFBMUI7QUFDSDs7QUFDRCxlQUFLUCxTQUFMLEdBQWlCLEtBQUtELFdBQUwsQ0FBaUJhLFFBQWpCLENBQTBCakIsUUFBUSxDQUFDLENBQUQsQ0FBbEMsRUFBdUNBLFFBQVEsQ0FBQyxDQUFELENBQS9DLENBQWpCO0FBQ0EsZUFBS00sT0FBTCxHQUFlLEtBQUtGLFdBQUwsQ0FBaUJhLFFBQWpCLENBQTBCaEIsTUFBTSxDQUFDLENBQUQsQ0FBaEMsRUFBcUNBLE1BQU0sQ0FBQyxDQUFELENBQTNDLENBQWYsQ0Fad0UsQ0FheEU7QUFDSDs7Ozt5Q0FDYztBQUNYO0FBQ0E7QUFDQSxnQkFBSWlCLFlBQXdCLEdBQUcsRUFBL0I7QUFDQSxpQkFBS2hCLFFBQUwsQ0FBY2EsSUFBZCxDQUFtQixLQUFLVixTQUF4Qjs7QUFDQSxtQkFBTyxLQUFLSCxRQUFMLENBQWNpQixNQUFkLEdBQXVCLENBQTlCLEVBQWlDO0FBQzdCO0FBQ0E7QUFDQSxrQkFBSUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLENBQXVCLEtBQUtuQixRQUE1QixDQUFyQjtBQUNBLGtCQUFJb0IsYUFBYSxHQUFHLEtBQUtwQixRQUFMLENBQWNxQixNQUFkLENBQXFCSCxjQUFyQixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxDQUFwQixDQUo2QixDQUs3Qjs7QUFDQSxrQkFBSUUsYUFBYSxDQUFDaEMsQ0FBZCxLQUFvQixLQUFLZ0IsT0FBTCxDQUFhaEIsQ0FBakMsSUFBc0NnQyxhQUFhLENBQUMvQixDQUFkLEtBQW9CLEtBQUtlLE9BQUwsQ0FBYWYsQ0FBM0UsRUFBOEU7QUFDMUU7QUFDQSxvQkFBSWlDLFFBQVEsR0FBR0YsYUFBYSxDQUFDM0IsTUFBN0I7QUFDQXVCLGdCQUFBQSxZQUFZLENBQUNILElBQWIsQ0FBa0JPLGFBQWxCOztBQUNBLHVCQUFPLEVBQUdFLFFBQVEsQ0FBQ2xDLENBQVQsS0FBZSxLQUFLZSxTQUFMLENBQWVmLENBQS9CLElBQXNDa0MsUUFBUSxDQUFDakMsQ0FBVCxLQUFlLEtBQUtjLFNBQUwsQ0FBZWQsQ0FBdEUsQ0FBUCxFQUFrRjtBQUM5RTJCLGtCQUFBQSxZQUFZLENBQUNILElBQWIsQ0FBa0JTLFFBQWxCO0FBQ0FBLGtCQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQzdCLE1BQXBCO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRCxtQkFBS1EsU0FBTCxDQUFlWSxJQUFmLENBQW9CTyxhQUFwQjtBQUNBLGtCQUFJRyxjQUFjLEdBQUcsS0FBS0Msa0JBQUwsQ0FBd0JKLGFBQXhCLEVBQXVDLEtBQUtsQixXQUE1QyxDQUFyQixDQWpCNkIsQ0FrQjdCO0FBQ0E7O0FBQ0EsbUJBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsY0FBYyxDQUFDTixNQUFuQyxFQUEyQ1IsQ0FBQyxFQUE1QyxFQUFnRDtBQUM1QyxvQkFBSWdCLElBQUksR0FBR0YsY0FBYyxDQUFDZCxDQUFELENBQXpCOztBQUNBLG9CQUFJLEtBQUtpQixhQUFMLENBQW1CRCxJQUFuQixFQUF5QixLQUFLeEIsU0FBOUIsQ0FBSixFQUE4QztBQUMxQztBQUNIOztBQUNELG9CQUFJLEtBQUt5QixhQUFMLENBQW1CRCxJQUFuQixFQUF5QixLQUFLekIsUUFBOUIsQ0FBSixFQUE2QztBQUN6QztBQUNBLHNCQUFJeUIsSUFBSSxDQUFDaEMsTUFBTCxDQUFZRixNQUFaLEdBQXFCNkIsYUFBYSxDQUFDN0IsTUFBdkMsRUFBK0M7QUFDM0NrQyxvQkFBQUEsSUFBSSxDQUFDRSxTQUFMLENBQWVQLGFBQWY7QUFDQUssb0JBQUFBLElBQUksQ0FBQ2xDLE1BQUwsR0FBYzZCLGFBQWEsQ0FBQzdCLE1BQWQsR0FBdUIsS0FBS3FDLFdBQUwsQ0FBaUJILElBQUksQ0FBQ2hDLE1BQXRCLEVBQThCZ0MsSUFBOUIsQ0FBckM7QUFDQUEsb0JBQUFBLElBQUksQ0FBQ2pDLE1BQUwsR0FBYyxLQUFLb0MsV0FBTCxDQUFpQkgsSUFBakIsRUFBdUIsS0FBS3JCLE9BQTVCLENBQWQ7QUFDSDtBQUNKLGlCQVBELE1BT087QUFDSDtBQUNBcUIsa0JBQUFBLElBQUksQ0FBQ0UsU0FBTCxDQUFlUCxhQUFmO0FBQ0FLLGtCQUFBQSxJQUFJLENBQUNsQyxNQUFMLEdBQWM2QixhQUFhLENBQUM3QixNQUFkLEdBQXVCLEtBQUtxQyxXQUFMLENBQWlCSCxJQUFJLENBQUNoQyxNQUF0QixFQUE4QmdDLElBQTlCLENBQXJDO0FBQ0FBLGtCQUFBQSxJQUFJLENBQUNqQyxNQUFMLEdBQWMsS0FBS29DLFdBQUwsQ0FBaUJILElBQWpCLEVBQXVCLEtBQUtyQixPQUE1QixDQUFkO0FBQ0EsdUJBQUtKLFFBQUwsQ0FBY2EsSUFBZCxDQUFtQlksSUFBbkI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RULFlBQUFBLFlBQVksR0FBR0EsWUFBWSxDQUFDYSxPQUFiLEVBQWYsQ0E5Q1csQ0E4QzRCOztBQUN2QyxnQkFBSW5CLElBQUksR0FBRyxFQUFYOztBQUNBLGlCQUFLLElBQUlELEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdPLFlBQVksQ0FBQ0MsTUFBakMsRUFBeUNSLEVBQUMsRUFBMUMsRUFBOEM7QUFDMUNDLGNBQUFBLElBQUksQ0FBQ0csSUFBTCxDQUFVLENBQUNHLFlBQVksQ0FBQ1AsRUFBRCxDQUFaLENBQWdCckIsQ0FBakIsRUFBb0I0QixZQUFZLENBQUNQLEVBQUQsQ0FBWixDQUFnQnBCLENBQXBDLENBQVY7QUFDSDs7QUFDRCxtQkFBT3FCLElBQVA7QUFDSDs7O3NDQUNtQm9CLEUsRUFBY0MsRSxFQUFjO0FBQzVDLG1CQUFPQyxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxHQUFMLENBQVVKLEVBQUUsQ0FBQzFDLENBQUgsR0FBTzJDLEVBQUUsQ0FBQzNDLENBQXBCLEVBQXdCLENBQXhCLElBQTZCNEMsSUFBSSxDQUFDRSxHQUFMLENBQVVKLEVBQUUsQ0FBQ3pDLENBQUgsR0FBTzBDLEVBQUUsQ0FBQzFDLENBQXBCLEVBQXdCLENBQXhCLENBQXZDLENBQVA7QUFDSDs7OzZDQUMwQkssVSxFQUFzQkcsVSxFQUE2QztBQUUxRixnQkFBSXNDLE9BQU8sR0FBRyxDQUNWLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEVSxFQUVWLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGVSxFQUdWLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FIVSxFQUlWLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxDQUpVLEVBS1YsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBTFUsRUFNVixDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixDQU5VLEVBT1YsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBUFUsRUFRVixDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsQ0FSVSxDQUFkO0FBVUEsZ0JBQUl6QixJQUFnQixHQUFHLEVBQXZCOztBQUNBLGlCQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwQixPQUFPLENBQUNsQixNQUE1QixFQUFvQ1IsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxrQkFBSTJCLEdBQUcsR0FBR0QsT0FBTyxDQUFDMUIsQ0FBRCxDQUFqQjtBQUNBLGtCQUFJNEIsT0FBTyxHQUFHM0MsVUFBVSxDQUFDTixDQUFYLEdBQWVnRCxHQUFHLENBQUMsQ0FBRCxDQUFoQztBQUNBLGtCQUFJRSxPQUFPLEdBQUc1QyxVQUFVLENBQUNMLENBQVgsR0FBZStDLEdBQUcsQ0FBQyxDQUFELENBQWhDO0FBQ0Esa0JBQUlHLFFBQVEsR0FBRzFDLFVBQVUsQ0FBQ2tCLFFBQVgsQ0FBb0JzQixPQUFwQixFQUE2QkMsT0FBN0IsQ0FBZjs7QUFDQSxrQkFBSUMsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ2pELFNBQTFCLEVBQXFDO0FBQ2pDb0IsZ0JBQUFBLElBQUksQ0FBQ0csSUFBTCxDQUFVMEIsUUFBVjtBQUNIO0FBQ0o7O0FBQ0QsbUJBQU83QixJQUFQO0FBQ0g7Ozs0Q0FDeUJBLEksRUFBK0I7QUFDckQsZ0JBQUk4QixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBcEI7QUFDQSxnQkFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsaUJBQUssSUFBSWxDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLElBQUksQ0FBQ08sTUFBekIsRUFBaUNSLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsa0JBQUltQyxNQUFNLEdBQUdsQyxJQUFJLENBQUNELENBQUQsQ0FBSixDQUFRb0MsU0FBUixFQUFiOztBQUNBLGtCQUFJRCxNQUFNLEdBQUdKLE1BQWIsRUFBcUI7QUFDakJBLGdCQUFBQSxNQUFNLEdBQUdJLE1BQVQ7QUFDQUQsZ0JBQUFBLEtBQUssR0FBR2xDLENBQVI7QUFDSDtBQUNKOztBQUNELG1CQUFPa0MsS0FBUDtBQUNIOzs7d0NBQ3FCakQsVSxFQUFzQkcsVSxFQUF3QjtBQUNoRSxpQkFBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixVQUFVLENBQUNvQixNQUEvQixFQUF1Q1IsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxrQkFBSWdCLElBQUksR0FBRzVCLFVBQVUsQ0FBQ1ksQ0FBRCxDQUFyQjs7QUFDQSxrQkFBSWdCLElBQUksQ0FBQ3JDLENBQUwsS0FBV00sVUFBVSxDQUFDTixDQUF0QixJQUEyQnFDLElBQUksQ0FBQ3BDLENBQUwsS0FBV0ssVUFBVSxDQUFDTCxDQUFyRCxFQUF3RDtBQUNwRCx1QkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7Ozt3Q0FDb0J5RCxRLEVBQVU7QUFDM0I7QUFDQSxpQkFBSyxJQUFJckMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FDLFFBQVEsQ0FBQzdCLE1BQTdCLEVBQXFDUixDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGtCQUFJc0MsSUFBSSxHQUFHRCxRQUFRLENBQUNyQyxDQUFELENBQW5CO0FBQ0Esa0JBQUk4QixRQUFRLEdBQUcsS0FBS3JDLFdBQUwsQ0FBaUJhLFFBQWpCLENBQTBCZ0MsSUFBSSxDQUFDLENBQUQsQ0FBOUIsRUFBbUNBLElBQUksQ0FBQyxDQUFELENBQXZDLENBQWYsQ0FGc0MsQ0FHdEM7O0FBQ0FSLGNBQUFBLFFBQVEsQ0FBQ1MsTUFBVCxDQUFnQixJQUFoQjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXkyZEFycmF5IGZyb20gXCIuL015MkFycmF5XCI7XHJcbmNsYXNzIENlbGxOb2RlIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaXNIYXZlT2JzOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5a2Y5Zyo6Zqc56KN54mpIFxyXG4gICAgcHVibGljIGdWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBoVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGFyZW50OiBDZWxsTm9kZSA9IG51bGw7IC8v54i26IqC54K5XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJlbnQodGFyZ2V0Tm9kZTogQ2VsbE5vZGUpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHRhcmdldE5vZGU7XHJcbiAgICB9XHJcbiAgICBnZXRGVmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nVmFsdWUgKyB0aGlzLmhWYWx1ZTtcclxuICAgIH1cclxuICAgIHNldE9icyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8v6K6+572u6Zqc56KN54mpXHJcbiAgICAgICAgdGhpcy5pc0hhdmVPYnMgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRmluZFBhdGhXaXRoQVN0YXJ0PFQ+IHtcclxuICAgIC8vIGxldCBvcGVuTGlzdDogXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIG9wZW5MaXN0OiBBcnJheTxDZWxsTm9kZT4gPSBbXTtcclxuICAgIHB1YmxpYyBjbG9zZUxpc3Q6IEFycmF5PENlbGxOb2RlPiA9IFtdO1xyXG4gICAgcHVibGljIG1hcE5vZGVMaXN0OiBNeTJkQXJyYXk8Q2VsbE5vZGU+ID0gbmV3IE15MmRBcnJheSgpO1xyXG4gICAgcHVibGljIHN0YXRyTm9kZTogQ2VsbE5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGVuZE5vZGU6IENlbGxOb2RlID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldExpc3Q6IE15MmRBcnJheTxUPiwgc3RhcnRQb3M6IG51bWJlcltdLCBlbmRQb3M6IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodExlbmd0aCA9IHRhcmdldExpc3QuZ2V0SGVpZ2h0TGVuZ3RoKCk7XHJcbiAgICAgICAgbGV0IHdpZHRoTGVuZ3RoID0gdGFyZ2V0TGlzdC5nZXRXaWR0aExlbmd0aCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSBuZXcgQXJyYXk8Q2VsbE5vZGU+KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGhMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgLy8gbGlzdC5wdXNoXHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3IENlbGxOb2RlKGosIGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hcE5vZGVMaXN0LnB1c2hMaXN0KGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRyTm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoc3RhcnRQb3NbMF0sIHN0YXJ0UG9zWzFdKTtcclxuICAgICAgICB0aGlzLmVuZE5vZGUgPSB0aGlzLm1hcE5vZGVMaXN0LmdldFZhbHVlKGVuZFBvc1swXSwgZW5kUG9zWzFdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwIG5vZGUgbGlzdCcsIHRoaXMubWFwTm9kZUxpc3QpO1xyXG4gICAgfVxyXG4gICAgZmluZFBhdGhMaXN0KCkge1xyXG4gICAgICAgIC8v6L+U5Zue6Lev5b6E54K5XHJcbiAgICAgICAgLy/pppblhYjlsIbotbfngrnliqDlhaXliLBvcGVubGlzdOmHjOmdolxyXG4gICAgICAgIGxldCBjZWxsTm9kZUxpc3Q6IENlbGxOb2RlW10gPSBbXTtcclxuICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2godGhpcy5zdGF0ck5vZGUpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm9wZW5MaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy/lpoLmnpxvcGVubGlzdCDlpKfkuo4wIOmCo+S5iOe7p+e7reW+queOr1xyXG4gICAgICAgICAgICAvL+esrOS4gOatpeOAguWPluWHuuadpe+8jG9wZW5saXN06YeM6Z2i44CCIGZ2YWx1ZeWAvOacgOWwj+eahOiKgueCuVxyXG4gICAgICAgICAgICBsZXQgbWluRlZhbHVlSW5kZXggPSB0aGlzLmZpbmRNaW5GdmFsdWVOb2RlKHRoaXMub3Blbkxpc3QpO1xyXG4gICAgICAgICAgICBsZXQgbWluRlZhbHVlTm9kZSA9IHRoaXMub3Blbkxpc3Quc3BsaWNlKG1pbkZWYWx1ZUluZGV4LCAxKVswXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtaW4gZnZhbHVlIG5vZGVcIiwgbWluRlZhbHVlTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChtaW5GVmFsdWVOb2RlLnggPT09IHRoaXMuZW5kTm9kZS54ICYmIG1pbkZWYWx1ZU5vZGUueSA9PT0gdGhpcy5lbmROb2RlLnkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG6Lev5b6E54K5XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHROb2RlID0gbWluRlZhbHVlTm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjZWxsTm9kZUxpc3QucHVzaChtaW5GVmFsdWVOb2RlKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICghKChuZXh0Tm9kZS54ID09PSB0aGlzLnN0YXRyTm9kZS54KSAmJiAobmV4dE5vZGUueSA9PT0gdGhpcy5zdGF0ck5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbE5vZGVMaXN0LnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbG9zZUxpc3QucHVzaChtaW5GVmFsdWVOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lYXJieU5vZGVMaXN0ID0gdGhpcy5maW5kTmVhcmJ5Tm9kZUxpc3QobWluRlZhbHVlTm9kZSwgdGhpcy5tYXBOb2RlTGlzdCk7XHJcbiAgICAgICAgICAgIC8v6ZmE6L+R54K555qE6IqC54K55YiX6KGoXHJcbiAgICAgICAgICAgIC8v6YGN5Y6G5q2k6ZmE6L+R6IqC54K5XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVhcmJ5Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmVhcmJ5Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0lzSW5MaXN0KG5vZGUsIHRoaXMuY2xvc2VMaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tJc0luTGlzdChub2RlLCB0aGlzLm9wZW5MaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5qOA5p+l6IqC54K55piv5ZCm5Zyob3Blbmxpc3Qg6YeM6Z2i44CC5aaC5p6c5Zyo6ZyA6KaB5Yik5pat5piv5ZCm5pu05pawcGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnBhcmVudC5nVmFsdWUgPCBtaW5GVmFsdWVOb2RlLmdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBhcmVudChtaW5GVmFsdWVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nVmFsdWUgPSBtaW5GVmFsdWVOb2RlLmdWYWx1ZSArIHRoaXMuZ2V0RGlzdGFuY2Uobm9kZS5wYXJlbnQsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmhWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2Uobm9kZSwgdGhpcy5lbmROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN5ZyoIO+8jOmCo+S5iOmcgOimgee7meatpOeCueiuvue9ruaWsOeahOeItuiKgueCue+8jOeEtuWQjuWKoOWFpeWIsG9wZW5MaXN06YeM6Z2iIOW5tuS4lOiuoeeul2Z2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ1ZhbHVlID0gbWluRlZhbHVlTm9kZS5nVmFsdWUgKyB0aGlzLmdldERpc3RhbmNlKG5vZGUucGFyZW50LCBub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmhWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2Uobm9kZSwgdGhpcy5lbmROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2VsbE5vZGVMaXN0ID0gY2VsbE5vZGVMaXN0LnJldmVyc2UoKTsgLy/lgJLluo/mlbTnkIbliJfooahcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChbY2VsbE5vZGVMaXN0W2ldLngsIGNlbGxOb2RlTGlzdFtpXS55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZShwMTogQ2VsbE5vZGUsIHAyOiBDZWxsTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdygocDEueSAtIHAyLnkpLCAyKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbmROZWFyYnlOb2RlTGlzdCh0YXJnZXROb2RlOiBDZWxsTm9kZSwgdGFyZ2V0TGlzdDogTXkyZEFycmF5PENlbGxOb2RlPik6IENlbGxOb2RlW10ge1xyXG5cclxuICAgICAgICBsZXQgZGlyTGlzdCA9IFtcclxuICAgICAgICAgICAgWzAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwXSxcclxuICAgICAgICAgICAgWzEsIC0xXSxcclxuICAgICAgICAgICAgWzAsIC0xXSxcclxuICAgICAgICAgICAgWy0xLCAtMV0sXHJcbiAgICAgICAgICAgIFstMSwgMF0sXHJcbiAgICAgICAgICAgIFstMSwgMV1cclxuICAgICAgICBdXHJcbiAgICAgICAgbGV0IGxpc3Q6IENlbGxOb2RlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpciA9IGRpckxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3NYID0gdGFyZ2V0Tm9kZS54ICsgZGlyWzBdO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zWSA9IHRhcmdldE5vZGUueSArIGRpclsxXTtcclxuICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGFyZ2V0TGlzdC5nZXRWYWx1ZShlbmRQb3NYLCBlbmRQb3NZKTtcclxuICAgICAgICAgICAgaWYgKGNlbGxOb2RlICYmICFjZWxsTm9kZS5pc0hhdmVPYnMpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChjZWxsTm9kZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZmluZE1pbkZ2YWx1ZU5vZGUobGlzdDogQXJyYXk8Q2VsbE5vZGU+KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbVZhbHVlID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBsZXQgaW5kZXggPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZlZhbHVlID0gbGlzdFtpXS5nZXRGVmFsdWUoKTtcclxuICAgICAgICAgICAgaWYgKGZWYWx1ZSA8IG1WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgbVZhbHVlID0gZlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tJc0luTGlzdCh0YXJnZXROb2RlOiBDZWxsTm9kZSwgdGFyZ2V0TGlzdDogQ2VsbE5vZGVbXSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRhcmdldExpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChub2RlLnggPT09IHRhcmdldE5vZGUueCAmJiBub2RlLnkgPT09IHRhcmdldE5vZGUueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZU9ic0RhdGEoZGF0YUxpc3QpIHtcclxuICAgICAgICAvL+abtOaWsOmanOeijeeJqeaVsOaNrlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZShkYXRhWzBdLCBkYXRhWzFdKTtcclxuICAgICAgICAgICAgLy8gY2VsbE5vZGUuc2V0UGFyZW50XHJcbiAgICAgICAgICAgIGNlbGxOb2RlLnNldE9icyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19