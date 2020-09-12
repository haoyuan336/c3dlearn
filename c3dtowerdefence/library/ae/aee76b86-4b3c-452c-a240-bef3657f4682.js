System.register(["cc", "code-quality:cr", "../util/My2Array.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, instantiate, v3, v2, UITransformComponent, SpriteComponent, Color, isValid, My2dArray, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CellNode, AStartFindPath;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfMy2dArray(extras) {
    _reporterNs.report("My2dArray", "../util/My2Array", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      v2 = _cc.v2;
      UITransformComponent = _cc.UITransformComponent;
      SpriteComponent = _cc.SpriteComponent;
      Color = _cc.Color;
      isValid = _cc.isValid;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilMy2ArrayJs) {
      My2dArray = _utilMy2ArrayJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "aee76uGSzxFLKJAvvNlf0aC", "AStartFindPath", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      CellNode = /*#__PURE__*/function () {
        function CellNode(x, y, node) {
          _classCallCheck(this, CellNode);

          this.x = 0;
          this.y = 0;
          this.node = null;
          this.parentNode = null;
          this.fValue = 0;
          this.gValue = 0;
          this.hValue = 0;
          this.x = x;
          this.y = y;
          this.node = node;
        }

        _createClass(CellNode, [{
          key: "setParentNode",
          value: function setParentNode(value) {
            this.parentNode = value;
          }
        }]);

        return CellNode;
      }();

      _export("AStartFindPath", AStartFindPath = (_dec = ccclass('AStartFindPath'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AStartFindPath, _Component);

        function AStartFindPath() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AStartFindPath);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AStartFindPath)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "pointNode", _descriptor, _assertThisInitialized(_this));

          _this.my2dArray = null;
          _this.obsColor = Color.RED;
          _this.startColor = Color.BLUE;
          _this.endColor = Color.GREEN;
          _this.currentTouchNode = null;
          _this.openList = [];
          _this.closeList = [];
          _this.startObj = null;
          _this.size = 30;
          _this.currentPathList = [];
          _this.checkPointList = [];
          return _this;
        }

        _createClass(AStartFindPath, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            // for (let i = 0 ; i < ){
            // }
            var size = this.size;
            var my2dArray = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
              error: Error()
            }), My2dArray) : My2dArray)();
            this.my2dArray = my2dArray;

            for (var i = 0; i < size; i++) {
              var list = [];

              for (var j = 0; j < size; j++) {
                var node = instantiate(this.pointNode);
                node.active = true;
                node.parent = this.node;
                node.position = v3((size - 1) * -0.5 * 22 + j * 22, (size - 1) * -0.5 * 22 + i * 22, 0);
                list.push(new CellNode(j, i, node)); // node._x = j;
                // node._y = i;
              }

              my2dArray.pushList(list);
            }

            for (var _i = 0; _i < 30; _i++) {
              this.randomObs(size);
            }

            var startObj = this.getRandomPoint(size);
            startObj.node.getComponent(SpriteComponent).color = this.startColor;
            this.startObj = startObj;
            this.node.on(Node.EventType.TOUCH_START, function (even) {
              if (isValid(_this2.currentTouchNode)) {
                _this2.currentTouchNode.node.getComponent(SpriteComponent).color = Color.WHITE;
              }

              var pos = even.getUILocation();
              console.log("touch pos", pos);

              for (var _i2 = 0; _i2 < size; _i2++) {
                for (var _j = 0; _j < size; _j++) {
                  var _node = _this2.my2dArray.getValue(_j, _i2).node;

                  var boundingBox = _node.getComponent(UITransformComponent).getBoundingBoxToWorld(); // pos.x -= node.width;
                  // boundingBox.x -= node.width;


                  if (boundingBox.contains(pos)) {
                    // console.log(" j, i,", j, i);
                    _node.getComponent(SpriteComponent).color = _this2.endColor;
                    _this2.currentTouchNode = _this2.my2dArray.getValue(_j, _i2);
                  }
                }
              }

              if (_this2.currentTouchNode) {
                _this2.openList = [];
                _this2.closeList = [];

                _this2.processFindPath();
              }
            });
          }
        }, {
          key: "processFValue",
          value: function processFValue(point, parentPoint) {
            // let gValue = point.parentNode.gValue + this.getDistance();
            var gValue = 0;
            var currentP = null;

            if (parentPoint) {
              // gValue = parentPoint.gValue + 1;
              currentP = parentPoint;
            } else {
              currentP = point.parentNode;
            }

            gValue = point.parentNode.gValue + this.getDistance(point, currentP); // let hvalue = Math.abs(point.x - this.currentTouchNode.x) + Math.abs(point.y - this.currentTouchNode.y);

            point.gValue = gValue;
            point.hValue = this.getDistance(point, this.currentTouchNode);
            return point.gValue + point.hValue;
          }
        }, {
          key: "getDistance",
          value: function getDistance(p1, p2) {
            var sql = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
            return Math.sqrt(sql);
          }
        }, {
          key: "getNearPointObj",
          value: function getNearPointObj(point) {
            var x = point.x;
            var y = point.y;
            var dirList = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            var nearList = [];

            for (var i = 0; i < dirList.length; i++) {
              var endX = x + dirList[i][0];
              var endY = y + dirList[i][1];
              var obj = this.my2dArray.getValue(endX, endY);

              if (obj && !obj.node.getComponent(SpriteComponent).color.equals(this.obsColor)) {
                //如果取出来的节点，并且节点上并不是障碍物 ，那么
                // obj.setParentNode(point);
                // obj.fValue = this.processFValue(obj);
                nearList.push(obj);
              }
            }

            return nearList;
          }
        }, {
          key: "processFindPath",
          value: function processFindPath() {
            //运行寻路算法
            this.openList.push(this.startObj);

            while (this.openList.length > 0) {
              // console.log("循环");
              var currentObj = this.getFvalueMinNode();
              console.log("current obj", currentObj);

              if (currentObj.x === this.currentTouchNode.x && currentObj.y === this.currentTouchNode.y) {
                console.log("找到了终点");

                if (this.checkPointList.length > 0) {
                  for (var i = 0; i < this.checkPointList.length; i++) {
                    var node = this.checkPointList[i].node;
                    node.getComponent(SpriteComponent).color = Color.WHITE;
                  }
                }

                if (this.currentPathList.length > 0) {
                  for (var _i3 = 0; _i3 < this.currentPathList.length; _i3++) {
                    var _node2 = this.currentPathList[_i3].node;
                    _node2.getComponent(SpriteComponent).color = Color.WHITE;
                  }
                }

                var pathList = [];

                while (!(currentObj.x === this.startObj.x && currentObj.y === this.startObj.y)) {
                  pathList.push(currentObj.parentNode);
                  currentObj = currentObj.parentNode;
                  currentObj.node.getComponent(SpriteComponent).color = Color.BLACK;
                }

                pathList.splice(pathList.length - 1, 1);
                this.currentPathList = pathList; // console.log("path list", pathList);

                return;
              }

              this.closeList.push(currentObj); //取处这个点周围的点

              var nearList = this.getNearPointObj(currentObj);

              for (var _i4 = 0; _i4 < nearList.length; _i4++) {
                var obj = nearList[_i4];

                if (this.checkIsInCloseList(obj)) {
                  //如果此点已经在关闭列表里面了， 那么直接跳过
                  continue;
                }

                if (this.checkisInOpenList(obj)) {
                  //如果在列表里面
                  //计算现在的f值 与之前的f值的大小，如果更小，那么更新父节点，跟f值
                  var newFValue = this.processFValue(obj, currentObj);

                  if (newFValue < obj.fValue) {
                    obj.setParentNode(currentObj);
                    obj.fValue = this.processFValue(obj);
                  }
                } else {
                  //没在open列表里面 那么
                  obj.setParentNode(currentObj);
                  obj.fValue = this.processFValue(obj);
                  obj.node.getComponent(SpriteComponent).color = Color.GRAY;
                  this.checkPointList.push(obj);
                  this.openList.push(obj);
                }
              } // for (let i = 0 ; i < nearList.length ; i ++){
              //     let nearNode = nearList[i];
              //     let isInCloseList = this.checkIsInCloseList(nearNode);
              //     if (!isInCloseList){
              //         this.openList.push(nearNode);
              //     }
              // }
              // console.log("this open list", this.openList);
              // return;

            }
          }
        }, {
          key: "checkisInOpenList",
          value: function checkisInOpenList(point) {
            for (var i = 0; i < this.openList.length; i++) {
              var node = this.openList[i];

              if (node.x === point.x && node.y === point.y) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "checkIsInCloseList",
          value: function checkIsInCloseList(point) {
            for (var i = 0; i < this.closeList.length; i++) {
              var node = this.closeList[i];

              if (node.x === point.x && node.y === point.y) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "getFvalueMinNode",
          value: function getFvalueMinNode() {
            //取处f值最小的节点
            var minValue = Number.MAX_VALUE; // let targetObj = null;

            var index = 0;

            for (var i = 0; i < this.openList.length; i++) {
              var obj = this.openList[i];

              if (obj.fValue < minValue) {
                minValue = obj.fValue;
                index = i;
              }
            }

            return this.openList.splice(index, 1)[0];
          }
        }, {
          key: "getRandomPoint",
          value: function getRandomPoint(size) {
            var pos = v2(Math.round(Math.random() * (size - 1)), Math.round(Math.random() * (size - 1)));
            return this.my2dArray.getValue(pos.x, pos.y);
          }
        }, {
          key: "randomObs",
          value: function randomObs(size) {
            //随机一个障碍物
            var pos = {
              x: Math.round(Math.random() * size - 10) + 5,
              y: Math.round(Math.random() * size - 10) + 5
            };
            var dir = v2(0, 1);
            var angle = [Math.PI * 2 * 45 / 360, Math.PI * 0.5, Math.PI];
            dir.rotate(angle[Math.round(Math.random() * (angle.length - 1))]).normalize();
            console.log("dir", dir);
            dir.x = Math.round(Math.abs(dir.x)) * Math.abs(dir.x) / dir.x;
            dir.y = Math.round(Math.abs(dir.y)) * Math.abs(dir.y) / dir.y;
            console.log("dir", dir);

            for (var i = 0; i < 4; i++) {
              var addPos = v2(dir).multiplyScalar(i); // console.log('add pos', addPos);

              var endPos = v2(pos.x, pos.y).add(addPos); // console.log('endPos ', endPos);

              var obj = this.my2dArray.getValue(endPos.x, endPos.y);

              if (obj) {
                obj.node.getComponent(SpriteComponent).color = Color.RED;
              }
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AStartFindPath;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9BU3RhcnRGaW5kUGF0aC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImluc3RhbnRpYXRlIiwidjMiLCJ2MiIsIlVJVHJhbnNmb3JtQ29tcG9uZW50IiwiU3ByaXRlQ29tcG9uZW50IiwiQ29sb3IiLCJpc1ZhbGlkIiwiTXkyZEFycmF5IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2VsbE5vZGUiLCJ4IiwieSIsIm5vZGUiLCJwYXJlbnROb2RlIiwiZlZhbHVlIiwiZ1ZhbHVlIiwiaFZhbHVlIiwidmFsdWUiLCJBU3RhcnRGaW5kUGF0aCIsInR5cGUiLCJteTJkQXJyYXkiLCJvYnNDb2xvciIsIlJFRCIsInN0YXJ0Q29sb3IiLCJCTFVFIiwiZW5kQ29sb3IiLCJHUkVFTiIsImN1cnJlbnRUb3VjaE5vZGUiLCJvcGVuTGlzdCIsImNsb3NlTGlzdCIsInN0YXJ0T2JqIiwic2l6ZSIsImN1cnJlbnRQYXRoTGlzdCIsImNoZWNrUG9pbnRMaXN0IiwiaSIsImxpc3QiLCJqIiwicG9pbnROb2RlIiwiYWN0aXZlIiwicGFyZW50IiwicG9zaXRpb24iLCJwdXNoIiwicHVzaExpc3QiLCJyYW5kb21PYnMiLCJnZXRSYW5kb21Qb2ludCIsImdldENvbXBvbmVudCIsImNvbG9yIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW4iLCJXSElURSIsInBvcyIsImdldFVJTG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0VmFsdWUiLCJib3VuZGluZ0JveCIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbnRhaW5zIiwicHJvY2Vzc0ZpbmRQYXRoIiwicG9pbnQiLCJwYXJlbnRQb2ludCIsImN1cnJlbnRQIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwic3FsIiwiTWF0aCIsInBvdyIsInNxcnQiLCJkaXJMaXN0IiwibmVhckxpc3QiLCJsZW5ndGgiLCJlbmRYIiwiZW5kWSIsIm9iaiIsImVxdWFscyIsImN1cnJlbnRPYmoiLCJnZXRGdmFsdWVNaW5Ob2RlIiwicGF0aExpc3QiLCJCTEFDSyIsInNwbGljZSIsImdldE5lYXJQb2ludE9iaiIsImNoZWNrSXNJbkNsb3NlTGlzdCIsImNoZWNraXNJbk9wZW5MaXN0IiwibmV3RlZhbHVlIiwicHJvY2Vzc0ZWYWx1ZSIsInNldFBhcmVudE5vZGUiLCJHUkFZIiwibWluVmFsdWUiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJpbmRleCIsInJvdW5kIiwicmFuZG9tIiwiZGlyIiwiYW5nbGUiLCJQSSIsInJvdGF0ZSIsIm5vcm1hbGl6ZSIsImFicyIsImFkZFBvcyIsIm11bHRpcGx5U2NhbGFyIiwiZW5kUG9zIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBMkJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQXNCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLEssT0FBQUEsSztBQUFtQkMsTUFBQUEsTyxPQUFBQSxPOzs7O0FBQ25JQyxNQUFBQSxTOzs7Ozs7QUFDQ0MsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7QUFDWEMsTUFBQUEsUTtBQVFGLDBCQUFZQyxDQUFaLEVBQXVCQyxDQUF2QixFQUFrQ0MsSUFBbEMsRUFBOEM7QUFBQTs7QUFBQSxlQVB2Q0YsQ0FPdUMsR0FQM0IsQ0FPMkI7QUFBQSxlQU52Q0MsQ0FNdUMsR0FOM0IsQ0FNMkI7QUFBQSxlQUx2Q0MsSUFLdUMsR0FMMUIsSUFLMEI7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TUFBckIsQ0FBYixDQUh3QixDQUl4Qjs7QUFDQSxrQkFBSTFCLEdBQUcsR0FBRyxLQUFLeEQsU0FBTCxDQUFlb0MsUUFBZixDQUF3QmdELE1BQU0sQ0FBQzlGLENBQS9CLEVBQWtDOEYsTUFBTSxDQUFDN0YsQ0FBekMsQ0FBVjs7QUFDQSxrQkFBSWlFLEdBQUosRUFBUztBQUNMQSxnQkFBQUEsR0FBRyxDQUFDaEUsSUFBSixDQUFTaUMsWUFBVCxDQUFzQjFDLGVBQXRCLEVBQXVDMkMsS0FBdkMsR0FBK0MxQyxLQUFLLENBQUNrQixHQUFyRDtBQUNIO0FBQ0o7QUFDSixXLENBRUQ7QUFDQTtBQUNBOzs7OztRQWhSZ0N6QixTOzs7OztpQkFHUCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVGcmFtZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgdjMsIHYyLCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgU3ByaXRlQ29tcG9uZW50LCBDb2xvciwgRXZlbnRUb3VjaCwgaXNWYWxpZCwgc2l6ZSwgRWRpdEJveENvbXBvbmVudCwgcGF0aCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuLi91dGlsL015MkFycmF5JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuY2xhc3MgQ2VsbE5vZGUge1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBub2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBwYXJlbnROb2RlOiBDZWxsTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZlZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBoVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbm9kZTogTm9kZSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyZW50Tm9kZSh2YWx1ZTogQ2VsbE5vZGUpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5AY2NjbGFzcygnQVN0YXJ0RmluZFBhdGgnKVxyXG5leHBvcnQgY2xhc3MgQVN0YXJ0RmluZFBhdGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBwb2ludE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBteTJkQXJyYXk6IE15MmRBcnJheTxDZWxsTm9kZT4gPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IENvbG9yIH0pXHJcbiAgICBwdWJsaWMgb2JzQ29sb3I6IENvbG9yID0gQ29sb3IuUkVEO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IENvbG9yIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRDb2xvcjogQ29sb3IgPSBDb2xvci5CTFVFO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IENvbG9yIH0pXHJcbiAgICBwdWJsaWMgZW5kQ29sb3I6IENvbG9yID0gQ29sb3IuR1JFRU47XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRUb3VjaE5vZGU6IENlbGxOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgb3Blbkxpc3Q6IENlbGxOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2xvc2VMaXN0OiBDZWxsTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIHN0YXJ0T2JqOiBDZWxsTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNpemU6IG51bWJlciA9IDMwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UGF0aExpc3Q6IENlbGxOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2hlY2tQb2ludExpc3Q6IENlbGxOb2RlW10gPSBbXTtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwIDsgaSA8ICl7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICBsZXQgbXkyZEFycmF5ID0gbmV3IE15MmRBcnJheTxDZWxsTm9kZT4oKTtcclxuICAgICAgICB0aGlzLm15MmRBcnJheSA9IG15MmRBcnJheTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdDogQ2VsbE5vZGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnBvaW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2Mygoc2l6ZSAtIDEpICogLTAuNSAqIDIyICsgaiAqIDIyLCAoc2l6ZSAtIDEpICogLTAuNSAqIDIyICsgaSAqIDIyLCAwKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChuZXcgQ2VsbE5vZGUoaiwgaSwgbm9kZSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS5feCA9IGo7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLl95ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteTJkQXJyYXkucHVzaExpc3QobGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21PYnMoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdGFydE9iajogQ2VsbE5vZGUgPSB0aGlzLmdldFJhbmRvbVBvaW50KHNpemUpO1xyXG4gICAgICAgIHN0YXJ0T2JqLm5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3IgPSB0aGlzLnN0YXJ0Q29sb3I7XHJcbiAgICAgICAgdGhpcy5zdGFydE9iaiA9IHN0YXJ0T2JqO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbjogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUubm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvciA9IENvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVuLmdldFVJTG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG91Y2ggcG9zXCIsIHBvcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlOiBOb2RlID0gdGhpcy5teTJkQXJyYXkuZ2V0VmFsdWUoaiwgaSkubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm91bmRpbmdCb3ggPSBub2RlLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zLnggLT0gbm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3VuZGluZ0JveC54IC09IG5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kaW5nQm94LmNvbnRhaW5zKHBvcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgaiwgaSxcIiwgaiwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3IgPSB0aGlzLmVuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB0aGlzLm15MmRBcnJheS5nZXRWYWx1ZShqLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvdWNoTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZpbmRQYXRoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NGVmFsdWUocG9pbnQ6IENlbGxOb2RlLCBwYXJlbnRQb2ludD86IENlbGxOb2RlKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBnVmFsdWUgPSBwb2ludC5wYXJlbnROb2RlLmdWYWx1ZSArIHRoaXMuZ2V0RGlzdGFuY2UoKTtcclxuICAgICAgICBsZXQgZ1ZhbHVlID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudFAgPSBudWxsO1xyXG4gICAgICAgIGlmIChwYXJlbnRQb2ludCkge1xyXG4gICAgICAgICAgICAvLyBnVmFsdWUgPSBwYXJlbnRQb2ludC5nVmFsdWUgKyAxO1xyXG4gICAgICAgICAgICBjdXJyZW50UCA9IHBhcmVudFBvaW50O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjdXJyZW50UCA9IHBvaW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdWYWx1ZSA9IHBvaW50LnBhcmVudE5vZGUuZ1ZhbHVlICsgdGhpcy5nZXREaXN0YW5jZShwb2ludCwgY3VycmVudFApO1xyXG5cclxuICAgICAgICAvLyBsZXQgaHZhbHVlID0gTWF0aC5hYnMocG9pbnQueCAtIHRoaXMuY3VycmVudFRvdWNoTm9kZS54KSArIE1hdGguYWJzKHBvaW50LnkgLSB0aGlzLmN1cnJlbnRUb3VjaE5vZGUueSk7XHJcbiAgICAgICAgcG9pbnQuZ1ZhbHVlID0gZ1ZhbHVlO1xyXG4gICAgICAgIHBvaW50LmhWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UocG9pbnQsIHRoaXMuY3VycmVudFRvdWNoTm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LmdWYWx1ZSArIHBvaW50LmhWYWx1ZTtcclxuICAgIH1cclxuICAgIGdldERpc3RhbmNlKHAxOiBDZWxsTm9kZSwgcDI6IENlbGxOb2RlKSB7XHJcbiAgICAgICAgbGV0IHNxbCA9IE1hdGgucG93KChwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3coKHAxLnkgLSBwMi55KSwgMilcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHNxbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmVhclBvaW50T2JqKHBvaW50OiBDZWxsTm9kZSk6IENlbGxOb2RlW10ge1xyXG4gICAgICAgIGxldCB4ID0gcG9pbnQueDtcclxuICAgICAgICBsZXQgeSA9IHBvaW50Lnk7XHJcbiAgICAgICAgbGV0IGRpckxpc3QgPSBbXHJcbiAgICAgICAgICAgIFswLCAxXSxcclxuICAgICAgICAgICAgWzEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMF0sXHJcbiAgICAgICAgICAgIFsxLCAtMV0sXHJcbiAgICAgICAgICAgIFswLCAtMV0sXHJcbiAgICAgICAgICAgIFstMSwgLTFdLFxyXG4gICAgICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgICAgICBbLTEsIDFdXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGxldCBuZWFyTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5kWCA9IHggKyBkaXJMaXN0W2ldWzBdO1xyXG4gICAgICAgICAgICBsZXQgZW5kWSA9IHkgKyBkaXJMaXN0W2ldWzFdO1xyXG4gICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5teTJkQXJyYXkuZ2V0VmFsdWUoZW5kWCwgZW5kWSk7XHJcbiAgICAgICAgICAgIGlmIChvYmogJiYgIW9iai5ub2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yLmVxdWFscyh0aGlzLm9ic0NvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzlj5blh7rmnaXnmoToioLngrnvvIzlubbkuJToioLngrnkuIrlubbkuI3mmK/pmpznoo3niakg77yM6YKj5LmIXHJcbiAgICAgICAgICAgICAgICAvLyBvYmouc2V0UGFyZW50Tm9kZShwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAvLyBvYmouZlZhbHVlID0gdGhpcy5wcm9jZXNzRlZhbHVlKG9iaik7XHJcbiAgICAgICAgICAgICAgICBuZWFyTGlzdC5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5lYXJMaXN0O1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0ZpbmRQYXRoKCkge1xyXG4gICAgICAgIC8v6L+Q6KGM5a+76Lev566X5rOVXHJcbiAgICAgICAgdGhpcy5vcGVuTGlzdC5wdXNoKHRoaXMuc3RhcnRPYmopO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5vcGVuTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5b6q546vXCIpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudE9iaiA9IHRoaXMuZ2V0RnZhbHVlTWluTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgb2JqXCIsIGN1cnJlbnRPYmopO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9iai54ID09PSB0aGlzLmN1cnJlbnRUb3VjaE5vZGUueCAmJiBjdXJyZW50T2JqLnkgPT09IHRoaXMuY3VycmVudFRvdWNoTm9kZS55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJvuWIsOS6hue7iOeCuVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUG9pbnRMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuY2hlY2tQb2ludExpc3QubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5jaGVja1BvaW50TGlzdFtpXS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yID0gQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRQYXRoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3VycmVudFBhdGhMaXN0W2ldLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3IgPSBDb2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aExpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICghKGN1cnJlbnRPYmoueCA9PT0gdGhpcy5zdGFydE9iai54ICYmIGN1cnJlbnRPYmoueSA9PT0gdGhpcy5zdGFydE9iai55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhMaXN0LnB1c2goY3VycmVudE9iai5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqID0gY3VycmVudE9iai5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmoubm9kZS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvciA9IENvbG9yLkJMQUNLO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhdGhMaXN0LnNwbGljZShwYXRoTGlzdC5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGhMaXN0ID0gcGF0aExpc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBhdGggbGlzdFwiLCBwYXRoTGlzdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbG9zZUxpc3QucHVzaChjdXJyZW50T2JqKTtcclxuICAgICAgICAgICAgLy/lj5blpITov5nkuKrngrnlkajlm7TnmoTngrlcclxuICAgICAgICAgICAgbGV0IG5lYXJMaXN0ID0gdGhpcy5nZXROZWFyUG9pbnRPYmooY3VycmVudE9iaik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVhckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBuZWFyTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSXNJbkNsb3NlTGlzdChvYmopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmraTngrnlt7Lnu4/lnKjlhbPpl63liJfooajph4zpnaLkuobvvIwg6YKj5LmI55u05o6l6Lez6L+HXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2lzSW5PcGVuTGlzdChvYmopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzlnKjliJfooajph4zpnaJcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+eOsOWcqOeahGblgLwg5LiO5LmL5YmN55qEZuWAvOeahOWkp+Wwj++8jOWmguaenOabtOWwj++8jOmCo+S5iOabtOaWsOeItuiKgueCue+8jOi3n2blgLxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RlZhbHVlID0gdGhpcy5wcm9jZXNzRlZhbHVlKG9iaiwgY3VycmVudE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0ZWYWx1ZSA8IG9iai5mVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNldFBhcmVudE5vZGUoY3VycmVudE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5mVmFsdWUgPSB0aGlzLnByb2Nlc3NGVmFsdWUob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ayoeWcqG9wZW7liJfooajph4zpnaIg6YKj5LmIXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnNldFBhcmVudE5vZGUoY3VycmVudE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmZWYWx1ZSA9IHRoaXMucHJvY2Vzc0ZWYWx1ZShvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5ub2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yID0gQ29sb3IuR1JBWTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUG9pbnRMaXN0LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDAgOyBpIDwgbmVhckxpc3QubGVuZ3RoIDsgaSArKyl7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbmVhck5vZGUgPSBuZWFyTGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBpc0luQ2xvc2VMaXN0ID0gdGhpcy5jaGVja0lzSW5DbG9zZUxpc3QobmVhck5vZGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKCFpc0luQ2xvc2VMaXN0KXtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2gobmVhck5vZGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBvcGVuIGxpc3RcIiwgdGhpcy5vcGVuTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja2lzSW5PcGVuTGlzdChwb2ludDogQ2VsbE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Blbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm9wZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAobm9kZS54ID09PSBwb2ludC54ICYmIG5vZGUueSA9PT0gcG9pbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY2hlY2tJc0luQ2xvc2VMaXN0KHBvaW50OiBDZWxsTm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbG9zZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNsb3NlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKG5vZGUueCA9PT0gcG9pbnQueCAmJiBub2RlLnkgPT09IHBvaW50LnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldEZ2YWx1ZU1pbk5vZGUoKSB7XHJcbiAgICAgICAgLy/lj5blpIRm5YC85pyA5bCP55qE6IqC54K5XHJcbiAgICAgICAgbGV0IG1pblZhbHVlID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICAvLyBsZXQgdGFyZ2V0T2JqID0gbnVsbDtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcGVuTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5vcGVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKG9iai5mVmFsdWUgPCBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSBvYmouZlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuTGlzdC5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tUG9pbnQoc2l6ZSkge1xyXG4gICAgICAgIGxldCBwb3MgPSB2MihcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHNpemUgLSAxKSksXHJcbiAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChzaXplIC0gMSkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiB0aGlzLm15MmRBcnJheS5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG4gICAgcmFuZG9tT2JzKHNpemUpIHtcclxuICAgICAgICAvL+maj+acuuS4gOS4qumanOeijeeJqVxyXG4gICAgICAgIGxldCBwb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNpemUgLSAxMCkgKyA1LFxyXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzaXplIC0gMTApICsgNVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlyID0gdjIoMCwgMSk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gW01hdGguUEkgKiAyICogNDUgLyAzNjAsIE1hdGguUEkgKiAwLjUsIE1hdGguUEldXHJcbiAgICAgICAgZGlyLnJvdGF0ZShhbmdsZVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoYW5nbGUubGVuZ3RoIC0gMSkpXSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXJcIiwgZGlyKTtcclxuICAgICAgICBkaXIueCA9IE1hdGgucm91bmQoTWF0aC5hYnMoZGlyLngpKSAqIE1hdGguYWJzKGRpci54KSAvIGRpci54O1xyXG4gICAgICAgIGRpci55ID0gTWF0aC5yb3VuZChNYXRoLmFicyhkaXIueSkpICogTWF0aC5hYnMoZGlyLnkpIC8gZGlyLnk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXJcIiwgZGlyKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFkZFBvcyA9IHYyKGRpcikubXVsdGlwbHlTY2FsYXIoaSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGQgcG9zJywgYWRkUG9zKTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IHYyKHBvcy54LCBwb3MueSkuYWRkKGFkZFBvcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmRQb3MgJywgZW5kUG9zKTtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHRoaXMubXkyZEFycmF5LmdldFZhbHVlKGVuZFBvcy54LCBlbmRQb3MueSk7XHJcbiAgICAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yID0gQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19