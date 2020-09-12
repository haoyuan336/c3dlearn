System.register(["cc", "code-quality:cr", "./util/My2Array.js", "./GroundTiled/GroundTiled.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, My2dArray, GroundTiled, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, CellNode, GroundMapCtl;

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
    _reporterNs.report("My2dArray", "./util/My2Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundTiled(extras) {
    _reporterNs.report("GroundTiled", "./GroundTiled/GroundTiled", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
      Tween = _cc.Tween;
      v2 = _cc.v2;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilMy2ArrayJs) {
      My2dArray = _utilMy2ArrayJs.default;
    }, function (_GroundTiledGroundTiledJs) {
      GroundTiled = _GroundTiledGroundTiledJs.GroundTiled;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "44e5akPt5hEHpdS1j2qoO/6", "GroundMapCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CellNode", CellNode = /*#__PURE__*/function () {
        //在其上的物体节点
        //g值， 当前节点距离起点的距离
        //h值，当前节点距离终点的预估距离
        //父节点
        function CellNode(x, y, node) {
          _classCallCheck(this, CellNode);

          this.x = 0;
          this.y = 0;
          this.node = null;
          this.onTargetNode = null;
          this.gValue = 0;
          this.hValue = 0;
          this.parentNode = null;
          this.x = x;
          this.y = y;
          this.node = node;
        }

        _createClass(CellNode, [{
          key: "setParentNode",
          value: function setParentNode(parentNode) {
            this.parentNode = parentNode;
          }
        }, {
          key: "processGvalue",
          value: function processGvalue(parentNode) {
            var gValue = parentNode.gValue + Math.sqrt(2);
            return gValue;
          }
        }, {
          key: "processHValue",
          value: function processHValue(endPos) {
            var hValue = this.getDistance(this, endPos);
            return hValue;
          }
        }, {
          key: "getDistance",
          value: function getDistance(p1, p2) {
            //获取两点之间的距离
            return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          }
        }, {
          key: "setOnTargetNode",
          value: function setOnTargetNode(targetNode) {
            this.onTargetNode = targetNode;
          }
        }, {
          key: "getFValue",
          value: function getFValue() {
            return this.gValue + this.hValue;
          }
        }]);

        return CellNode;
      }());

      _export("GroundMapCtl", GroundMapCtl = (_dec = ccclass('GroundMapCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: CCFloat
      }), _dec6 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GroundMapCtl, _Component);

        function GroundMapCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GroundMapCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroundMapCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "groundMapTiledPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapWidth", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapHeight", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tiledSize", _descriptor4, _assertThisInitialized(_this));

          _this.mapNodeList = new (_crd && My2dArray === void 0 ? (_reportPossibleCrUseOfMy2dArray({
            error: Error()
          }), My2dArray) : My2dArray)();

          _initializerDefineProperty(_this, "treePrefab", _descriptor5, _assertThisInitialized(_this));

          _this.groundTiledEdageIndexList = [];
          _this.openList = [];
          _this.closeList = [];
          return _this;
        }

        _createClass(GroundMapCtl, [{
          key: "start",
          //关闭列表
          value: function start() {
            for (var i = 0; i < this.mapHeight; i++) {
              var nodeList = [];

              for (var j = 0; j < this.mapWidth; j++) {
                var node = instantiate(this.groundMapTiledPrefab);
                node.parent = this.node; // node.scale = v3(0, 0, 0);

                var pos = v3((this.mapWidth - 1) * -0.5 * this.tiledSize + j * this.tiledSize, -6, (this.mapHeight - 1) * -0.5 * this.tiledSize + i * this.tiledSize);
                node.setPosition(pos);
                node.active = false;
                nodeList.push(new CellNode(j, i, node)); // if (i === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === this.mapWidth - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (i === this.mapHeight - 1) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
                // if (j === 0) {
                //     this.groundTiledNodeListInEdage.push(node);
                // }
              }

              this.mapNodeList.pushList(nodeList);
            }

            var v2List = [];

            for (var _j = 0; _j < this.mapWidth; _j++) {
              v2List.push(v2(_j, 0));
            }

            for (var _i = 1; _i < this.mapHeight; _i++) {
              v2List.push(v2(this.mapWidth - 1, _i));
            }

            for (var _j2 = this.mapWidth - 2; _j2 >= 0; _j2--) {
              v2List.push(v2(_j2, this.mapHeight - 1));
            }

            for (var _i2 = this.mapHeight - 2; _i2 > 0; _i2--) {
              v2List.push(v2(0, _i2));
            }

            this.groundTiledEdageIndexList = v2List; // console.log("v2 list", v2List);
          }
        }, {
          key: "getInEdageIndexList",
          value: function getInEdageIndexList() {
            // return this.groundTiledNodeListInEdage;
            return this.groundTiledEdageIndexList;
          }
        }, {
          key: "showTreeEnterAnim",
          value: function showTreeEnterAnim(treeNode) {
            // let v = v2(0,0);
            console.log("show tree enter anima");
            return new Promise(function (resolve, reject) {
              treeNode.active = true;
              treeNode.scale = v3(1, 0, 1);
              var tw = new Tween(treeNode);
              tw.to(0.2, {
                scale: v3(1, 1, 1)
              }, {
                easing: "elasticOut"
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "showGroundEnterAnim",
          value: function showGroundEnterAnim() {
            var _this2 = this;

            return this.showGroundTiledEnterAnim().then(function () {
              var treeCount = 0;

              while (treeCount < 2) {
                //随机2棵树
                var y = [0, _this2.mapHeight - 1][Math.round(Math.random() * (2 - 1))];
                var x = Math.round(Math.random() * (_this2.mapWidth - 1));

                var cellNode = _this2.mapNodeList.getValue(x, y);

                if (cellNode) {
                  var node = cellNode.node;

                  if (node && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                    error: Error()
                  }), GroundTiled) : GroundTiled)) {
                    var groundTiled = node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                      error: Error()
                    }), GroundTiled) : GroundTiled);

                    if (groundTiled.getIsVoid()) {
                      var treeNode = instantiate(_this2.treePrefab);
                      treeNode.parent = _this2.node;
                      groundTiled.setTargetObject(treeNode);
                      treeNode.active = false;
                      treeNode.position = v3(node.position.x, 0, node.position.z);

                      _this2.showTreeEnterAnim(treeNode);

                      treeCount++;
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "setTowerBuildBaseOnTiled",
          value: function setTowerBuildBaseOnTiled(target, x, y) {
            var cellNode = this.mapNodeList.getValue(x, y);

            if (cellNode) {
              cellNode.setOnTargetNode(target);
              var node = cellNode.node;

              if (node && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                error: Error()
              }), GroundTiled) : GroundTiled)) {
                node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                  error: Error()
                }), GroundTiled) : GroundTiled).setTargetObject(target);
              }
            }
          }
        }, {
          key: "showGroundTiledEnterAnim",
          value: function showGroundTiledEnterAnim() {
            var startV = v2(Math.floor(this.mapWidth / 2), Math.floor(this.mapHeight / 2) + 1);
            var rotationIndex = 0;
            var moveDir = v2(0, -1);
            var moveLength = 1;
            var count = 0;
            var index = 0;
            var promiseList = [];

            while (startV.x <= this.mapWidth + 1 && startV.y <= this.mapHeight + 1 && startV.x >= 0 && startV.y >= 0) {
              var moveCount = 0;

              while (moveCount < moveLength) {
                moveCount++; // console.log("1 v", startV);

                var cellNode = this.mapNodeList.getValue(startV.x, startV.y);

                if (cellNode) {
                  var node = cellNode.node;

                  if (node) {
                    promiseList.push(this.showEnterAnim(node, index));
                    index++; // this.showEnterAnim(node, index);
                  }
                }

                startV.add(moveDir);
              }

              var radias = Math.PI * 2 / 4 * rotationIndex;
              moveDir = v2(0, 1).rotate(radias).normalize();
              moveDir.x = moveDir.x < 0 && Math.abs(moveDir.x) < 1 ? 0 : Math.floor(moveDir.x);
              moveDir.y = moveDir.y < 0 && Math.abs(moveDir.y) < 1 ? 0 : Math.floor(moveDir.y);

              if (count == 2) {
                count = 0;
                moveLength++;
              }

              count++;
              rotationIndex++;
            }

            return Promise.all(promiseList);
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim(node, index) {
            return new Promise(function (resolve, reject) {
              var tw = new Tween(node);
              var pos = node.position;
              tw.delay(index * 0.03);
              tw.call(function () {
                node.active = true;
              });
              tw.to(0.4, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: 'elasticOut'
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }, {
          key: "getMapNodeList",
          value: function getMapNodeList() {
            return this.mapNodeList;
          }
        }, {
          key: "getOneRandomVoidTiledNode",
          value: function getOneRandomVoidTiledNode() {//随机获取一个空的地图块的节点 //从边缘
          }
        }, {
          key: "getPathList",
          value: function getPathList(startPos, endPos) {
            var endNode = this.mapNodeList.getValue(endPos.x, endPos.y); //第一步。先将七点加入到open list 里面

            var startNode = this.mapNodeList.getValue(startPos.x, startPos.y);
            this.openList.push(startNode);
            var list = [];

            while (this.openList.length > 0) {
              var minFValueNodeIndex = this.findFValueMinNodeIndex(this.openList); //第一步。，从openlist里面找到f值最小的节点 
              //并且将此点从openList里面删掉 ，并且加入到close 列表里面

              var minFValueNode = this.openList.splice(minFValueNodeIndex, 1)[0];

              if (minFValueNode.x === endPos.x && minFValueNode.y === endPos.y) {
                // console.log("找到终点了");
                //找到终点之后 开始构造列表
                // list.push(minFValueNode.parentNode);
                var currentNode = minFValueNode;

                while (!(currentNode.x === startPos.x && currentNode.y === startPos.y)) {
                  list.push(currentNode.parentNode);
                  currentNode = currentNode.parentNode;
                }

                break;
              }

              this.closeList.push(minFValueNode);
              var nearbyNodeList = this.findNearbyNodeList(minFValueNode);

              for (var i = 0; i < nearbyNodeList.length; i++) {
                var cellNode = nearbyNodeList[i];

                if (this.checkCellNodeIsInList(cellNode, this.closeList)) {
                  continue;
                }

                if (this.checkCellNodeIsInList(cellNode, this.openList)) {
                  //在open 列表里面 ，那么需要重新计算一下，此点设置新的父节点的 fvalue 与老的fvalue值的大小
                  var newGValue = cellNode.processGvalue(minFValueNode);

                  if (newGValue < cellNode.gValue) {
                    cellNode.setParentNode(minFValueNode);
                    cellNode.gValue = cellNode.processGvalue(minFValueNode);
                    cellNode.hValue = cellNode.processHValue(endNode);
                  }
                } else {
                  //设置父节点，并且计算fValeu
                  // cellNode.setP
                  cellNode.setParentNode(minFValueNode);
                  cellNode.gValue = cellNode.processGvalue(cellNode.parentNode);
                  cellNode.hValue = cellNode.processHValue(endNode);
                  this.openList.push(cellNode);
                }
              }
            }

            list = list.reverse();
            var posList = [];

            for (var _i3 = 0; _i3 < list.length; _i3++) {
              posList.push(list[_i3].node.position);
            }

            return posList;
          }
        }, {
          key: "checkCellNodeIsInList",
          value: function checkCellNodeIsInList(targetCellNode, nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
              var node = nodeList[i];

              if (node.x === targetCellNode.x && node.y === targetCellNode.y) {
                //在此列表里面找到了，目标节点
                return true;
              }
            }

            return false;
          }
        }, {
          key: "findFValueMinNodeIndex",
          value: function findFValueMinNodeIndex(list) {
            //找到f值最小的点
            var minValue = Number.MAX_VALUE;
            var index = null;

            for (var i = 0; i < list.length; i++) {
              var node = list[i];

              if (node.getFValue() < minValue) {
                minValue = node.getFValue();
                index = i;
              }
            }

            return index;
          }
        }, {
          key: "findNearbyNodeList",
          value: function findNearbyNodeList(currentCellNode) {
            //找到附近点的 列表
            var dirList = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            var list = [];

            for (var i = 0; i < dirList.length; i++) {
              var dir = dirList[i];
              var x = currentCellNode.x + dir[0];
              var y = currentCellNode.y + dir[1];
              var cellNode = this.mapNodeList.getValue(x, y);

              if (cellNode && !cellNode.onTargetNode) {
                //此点存在，并且此点，上没有其他的障碍物
                list.push(cellNode);
              }
            }

            return list;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GroundMapCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groundMapTiledPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tiledSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "treePrefab", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Hcm91bmRNYXBDdGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsIkNDSW50ZWdlciIsImluc3RhbnRpYXRlIiwidjMiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJ2MiIsIk15MmRBcnJheSIsIkdyb3VuZFRpbGVkIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2VsbE5vZGUiLCJ4IiwieSIsIm5vZGUiLCJvblRhcmdldE5vZGUiLCJnVmFsdWUiLCJoVmFsdWUiLCJwYXJlbnROb2RlIiwiTWF0aCIsInNxcnQiLCJlbmRQb3MiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJwb3ciLCJ0YXJnZXROb2RlIiwiR3JvdW5kTWFwQ3RsIiwidHlwZSIsIm1hcE5vZGVMaXN0IiwiZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdCIsIm9wZW5MaXN0IiwiY2xvc2VMaXN0IiwiaSIsIm1hcEhlaWdodCIsIm5vZGVMaXN0IiwiaiIsIm1hcFdpZHRoIiwiZ3JvdW5kTWFwVGlsZWRQcmVmYWIiLCJwYXJlbnQiLCJwb3MiLCJ0aWxlZFNpemUiLCJzZXRQb3NpdGlvbiIsImFjdGl2ZSIsInB1c2giLCJwdXNoTGlzdCIsInYyTGlzdCIsInRyZWVOb2RlIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2NhbGUiLCJ0dyIsInRvIiwiZWFzaW5nIiwiY2FsbCIsInN0YXJ0Iiwic2hvd0dyb3VuZFRpbGVkRW50ZXJBbmltIiwidGhlbiIsInRyZWVDb3VudCIsInJvdW5kIiwicmFuZG9tIiwiY2VsbE5vZGUiLCJnZXRWYWx1ZSIsImdldENvbXBvbmVudCIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwidHJlZVByZWZhYiIsInNldFRhcmdldE9iamVjdCIsInBvc2l0aW9uIiwieiIsInNob3dUcmVlRW50ZXJBbmltIiwidGFyZ2V0Iiwic2V0T25UYXJnZXROb2RlIiwic3RhcnRWIiwiZmxvb3IiLCJyb3RhdGlvbkluZGV4IiwibW92ZURpciIsIm1vdmVMZW5ndGgiLCJjb3VudCIsImluZGV4IiwicHJvbWlzZUxpc3QiLCJtb3ZlQ291bnQiLCJzaG93RW50ZXJBbmltIiwiYWRkIiwicmFkaWFzIiwiUEkiLCJyb3RhdGUiLCJub3JtYWxpemUiLCJhYnMiLCJhbGwiLCJkZWxheSIsInN0YXJ0UG9zIiwiZW5kTm9kZSIsInN0YXJ0Tm9kZSIsImxpc3QiLCJsZW5ndGgiLCJtaW5GVmFsdWVOb2RlSW5kZXgiLCJmaW5kRlZhbHVlTWluTm9kZUluZGV4IiwibWluRlZhbHVlTm9kZSIsInNwbGljZSIsImN1cnJlbnROb2RlIiwibmVhcmJ5Tm9kZUxpc3QiLCJmaW5kTmVhcmJ5Tm9kZUxpc3QiLCJjaGVja0NlbGxOb2RlSXNJbkxpc3QiLCJuZXdHVmFsdWUiLCJwcm9jZXNzR3ZhbHVlIiwic2V0UGFyZW50Tm9kZSIsInByb2Nlc3NIVmFsdWUiLCJyZXZlcnNlIiwicG9zTGlzdCIsInRhcmdldENlbGxOb2RlIiwibWluVmFsdWUiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJnZXRGVmFsdWUiLCJjdXJyZW50Q2VsbE5vZGUiLCJkaXJMaXN0IiwiZGlyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFOzs7O0FBQ25GQyxNQUFBQSxTOztBQUNFQyxNQUFBQSxXLDZCQUFBQSxXOzs7Ozs7QUFDREMs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LENBQUMsQ0FBTCxDQUxVLEVBTVYsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sQ0FOVSxFQU9WLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQVBVLEVBUVYsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBUlUsQ0FBZDtBQVVBLGdCQUFJdEIsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsaUJBQUssSUFBSWhFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRixPQUFPLENBQUNyQixNQUE1QixFQUFvQ2pFLENBQUMsRUFBckMsRUFBeUM7QUFDckMsa0JBQUl1RixHQUFHLEdBQUdELE9BQU8sQ0FBQ3RGLENBQUQsQ0FBakI7QUFDQSxrQkFBSXJCLENBQUMsR0FBRzBHLGVBQWUsQ0FBQzFHLENBQWhCLEdBQW9CNEcsR0FBRyxDQUFDLENBQUQsQ0FBL0I7QUFDQSxrQkFBSTNHLENBQUMsR0FBR3lHLGVBQWUsQ0FBQ3pHLENBQWhCLEdBQW9CMkcsR0FBRyxDQUFDLENBQUQsQ0FBL0I7QUFDQSxrQkFBSXhELFFBQVEsR0FBRyxLQUFLbkMsV0FBTCxDQUFpQm9DLFFBQWpCLENBQTBCckQsQ0FBMUIsRUFBNkJDLENBQTdCLENBQWY7O0FBQ0Esa0JBQUltRCxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDakQsWUFBMUIsRUFBd0M7QUFDcEM7QUFDQWtGLGdCQUFBQSxJQUFJLENBQUNyRCxJQUFMLENBQVVvQixRQUFWO0FBQ0g7QUFDSjs7QUFFRCxtQkFBT2lDLElBQVA7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQW5UOEJsRyxTOzs7OztpQkFFUSxJOzs7Ozs7O2lCQUVaLEM7Ozs7Ozs7aUJBRUMsQzs7Ozs7OztpQkFHQSxDOzs7Ozs7O2lCQVFDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgQ0NJbnRlZ2VyLCBpbnN0YW50aWF0ZSwgdjMsIENDRmxvYXQsIFR3ZWVuLCB2MiwgVHdlZW5FYXNpbmcsIFZlYzIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIENlbGxOb2RlIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgb25UYXJnZXROb2RlOiBOb2RlID0gbnVsbDsgLy/lnKjlhbbkuIrnmoTniankvZPoioLngrlcclxuICAgIHB1YmxpYyBnVmFsdWU6IG51bWJlciA9IDA7IC8vZ+WAvO+8jCDlvZPliY3oioLngrnot53nprvotbfngrnnmoTot53nprtcclxuICAgIHB1YmxpYyBoVmFsdWU6IG51bWJlciA9IDA7IC8vaOWAvO+8jOW9k+WJjeiKgueCuei3neemu+e7iOeCueeahOmihOS8sOi3neemu1xyXG4gICAgcHVibGljIHBhcmVudE5vZGU6IENlbGxOb2RlID0gbnVsbDsgLy/niLboioLngrlcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGU6IENlbGxOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NHdmFsdWUocGFyZW50Tm9kZTogQ2VsbE5vZGUpIHtcclxuICAgICAgICBsZXQgZ1ZhbHVlID0gcGFyZW50Tm9kZS5nVmFsdWUgKyBNYXRoLnNxcnQoMik7XHJcbiAgICAgICAgcmV0dXJuIGdWYWx1ZTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NIVmFsdWUoZW5kUG9zOiBDZWxsTm9kZSkge1xyXG4gICAgICAgIGxldCBoVmFsdWUgPSB0aGlzLmdldERpc3RhbmNlKHRoaXMsIGVuZFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGhWYWx1ZTtcclxuICAgIH1cclxuICAgIGdldERpc3RhbmNlKHAxOiBDZWxsTm9kZSwgcDI6IENlbGxOb2RlKSB7XHJcbiAgICAgICAgLy/ojrflj5bkuKTngrnkuYvpl7TnmoTot53nprtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KChwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3coKHAxLnkgLSBwMi55KSwgMikpXHJcbiAgICB9XHJcbiAgICBzZXRPblRhcmdldE5vZGUodGFyZ2V0Tm9kZTogTm9kZSkge1xyXG4gICAgICAgIHRoaXMub25UYXJnZXROb2RlID0gdGFyZ2V0Tm9kZTtcclxuICAgIH1cclxuICAgIGdldEZWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdWYWx1ZSArIHRoaXMuaFZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbkBjY2NsYXNzKCdHcm91bmRNYXBDdGwnKVxyXG5leHBvcnQgY2xhc3MgR3JvdW5kTWFwQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGdyb3VuZE1hcFRpbGVkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXHJcbiAgICBwdWJsaWMgbWFwV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcclxuICAgIHB1YmxpYyBtYXBIZWlnaHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NGbG9hdCB9KVxyXG4gICAgcHVibGljIHRpbGVkU2l6ZTogbnVtYmVyID0gMDtcclxuICAgIC8vIHN0YXJ0KCkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gICAgIHRoaXMubm9kZS5vbihcIlwiKTtcclxuICAgIC8vIH1cclxuICAgIHByaXZhdGUgbWFwTm9kZUxpc3Q6IE15MmRBcnJheTxDZWxsTm9kZT4gPSBuZXcgTXkyZEFycmF5PENlbGxOb2RlPigpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRyZWVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gcHVibGljIGdyb3VuZFRpbGVkTm9kZUxpc3RJbkVkYWdlOiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdDogVmVjMltdID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgb3Blbkxpc3Q6IENlbGxOb2RlW10gPSBbXTsgLy/lvIDmupDliJfooahcclxuICAgIHByaXZhdGUgY2xvc2VMaXN0OiBDZWxsTm9kZVtdID0gW107IC8v5YWz6Zet5YiX6KGoXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFwSGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGVMaXN0OiBDZWxsTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXBXaWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kTWFwVGlsZWRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnNjYWxlID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjMoKHRoaXMubWFwV2lkdGggLSAxKSAqIC0wLjUgKiB0aGlzLnRpbGVkU2l6ZSArIGogKiB0aGlzLnRpbGVkU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAtNiwgKHRoaXMubWFwSGVpZ2h0IC0gMSkgKiAtMC41ICogdGhpcy50aWxlZFNpemUgKyBpICogdGhpcy50aWxlZFNpemUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LnB1c2gobmV3IENlbGxOb2RlKGosIGksIG5vZGUpKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZS5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGogPT09IHRoaXMubWFwV2lkdGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZS5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGkgPT09IHRoaXMubWFwSGVpZ2h0IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChqID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZS5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXBOb2RlTGlzdC5wdXNoTGlzdChub2RlTGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdjJMaXN0OiBWZWMyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWFwV2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICB2Mkxpc3QucHVzaCh2MihqLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5tYXBIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICB2Mkxpc3QucHVzaCh2Mih0aGlzLm1hcFdpZHRoIC0gMSwgaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gdGhpcy5tYXBXaWR0aCAtIDI7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgIHYyTGlzdC5wdXNoKHYyKGosIHRoaXMubWFwSGVpZ2h0IC0gMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5tYXBIZWlnaHQgLSAyOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHYyTGlzdC5wdXNoKHYyKDAsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdCA9IHYyTGlzdDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInYyIGxpc3RcIiwgdjJMaXN0KTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SW5FZGFnZUluZGV4TGlzdCgpOiBWZWMyW10ge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3RJbkVkYWdlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VuZFRpbGVkRWRhZ2VJbmRleExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VHJlZUVudGVyQW5pbSh0cmVlTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vIGxldCB2ID0gdjIoMCwwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgdHJlZSBlbnRlciBhbmltYVwiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0cmVlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmVlTm9kZS5zY2FsZSA9IHYzKDEsIDAsIDEpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odHJlZU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0sIHsgZWFzaW5nOiBcImVsYXN0aWNPdXRcIiB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93R3JvdW5kRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dHcm91bmRUaWxlZEVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJlZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRyZWVDb3VudCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIC8v6ZqP5py6MuajteagkVxyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBbMCwgdGhpcy5tYXBIZWlnaHQgLSAxXVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMiAtIDEpKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICh0aGlzLm1hcFdpZHRoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2VsbE5vZGUubm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyZWVOb2RlID0gaW5zdGFudGlhdGUodGhpcy50cmVlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VuZFRpbGVkLnNldFRhcmdldE9iamVjdCh0cmVlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VHJlZUVudGVyQW5pbSh0cmVlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldFRvd2VyQnVpbGRCYXNlT25UaWxlZCh0YXJnZXQ6IE5vZGUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZSh4LCB5KTtcclxuICAgICAgICBpZiAoY2VsbE5vZGUpIHtcclxuICAgICAgICAgICAgY2VsbE5vZGUuc2V0T25UYXJnZXROb2RlKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2VsbE5vZGUubm9kZTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkuc2V0VGFyZ2V0T2JqZWN0KHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd0dyb3VuZFRpbGVkRW50ZXJBbmltKCkge1xyXG4gICAgICAgIGxldCBzdGFydFYgPSB2MihNYXRoLmZsb29yKHRoaXMubWFwV2lkdGggLyAyKSwgTWF0aC5mbG9vcih0aGlzLm1hcEhlaWdodCAvIDIpICsgMSk7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBtb3ZlRGlyID0gdjIoMCwgLTEpO1xyXG4gICAgICAgIGxldCBtb3ZlTGVuZ3RoID0gMTtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKHN0YXJ0Vi54IDw9IHRoaXMubWFwV2lkdGggKyAxICYmIHN0YXJ0Vi55IDw9IHRoaXMubWFwSGVpZ2h0ICsgMSAmJiBzdGFydFYueCA+PSAwICYmIHN0YXJ0Vi55ID49IDApIHtcclxuICAgICAgICAgICAgbGV0IG1vdmVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobW92ZUNvdW50IDwgbW92ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEgdlwiLCBzdGFydFYpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZShzdGFydFYueCwgc3RhcnRWLnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjZWxsTm9kZS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2godGhpcy5zaG93RW50ZXJBbmltKG5vZGUsIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VudGVyQW5pbShub2RlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Vi5hZGQobW92ZURpcik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByYWRpYXMgPSBNYXRoLlBJICogMiAvIDQgKiByb3RhdGlvbkluZGV4O1xyXG4gICAgICAgICAgICBtb3ZlRGlyID0gdjIoMCwgMSkucm90YXRlKHJhZGlhcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIG1vdmVEaXIueCA9IChtb3ZlRGlyLnggPCAwICYmIE1hdGguYWJzKG1vdmVEaXIueCkgPCAxKSA/IDAgOiBNYXRoLmZsb29yKG1vdmVEaXIueCk7XHJcbiAgICAgICAgICAgIG1vdmVEaXIueSA9IChtb3ZlRGlyLnkgPCAwICYmIE1hdGguYWJzKG1vdmVEaXIueSkgPCAxKSA/IDAgOiBNYXRoLmZsb29yKG1vdmVEaXIueSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBtb3ZlTGVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgICAgIHJvdGF0aW9uSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KTtcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0obm9kZTogTm9kZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheShpbmRleCAqIDAuMDMpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRNYXBOb2RlTGlzdCgpOiBNeTJkQXJyYXk8Q2VsbE5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIGdldE9uZVJhbmRvbVZvaWRUaWxlZE5vZGUoKSB7XHJcbiAgICAgICAgLy/pmo/mnLrojrflj5bkuIDkuKrnqbrnmoTlnLDlm77lnZfnmoToioLngrkgLy/ku47ovrnnvJhcclxuXHJcbiAgICB9XHJcbiAgICBnZXRQYXRoTGlzdChzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKTogVmVjMltdIHtcclxuICAgICAgICBsZXQgZW5kTm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoZW5kUG9zLngsIGVuZFBvcy55KTtcclxuXHJcbiAgICAgICAgLy/nrKzkuIDmraXjgILlhYjlsIbkuIPngrnliqDlhaXliLBvcGVuIGxpc3Qg6YeM6Z2iXHJcbiAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgICAgIHRoaXMub3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgICAgIGxldCBsaXN0OiBDZWxsTm9kZVtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbWluRlZhbHVlTm9kZUluZGV4ID0gdGhpcy5maW5kRlZhbHVlTWluTm9kZUluZGV4KHRoaXMub3Blbkxpc3QpO1xyXG4gICAgICAgICAgICAvL+esrOS4gOatpeOAgu+8jOS7jm9wZW5saXN06YeM6Z2i5om+5YiwZuWAvOacgOWwj+eahOiKgueCuSBcclxuICAgICAgICAgICAgLy/lubbkuJTlsIbmraTngrnku45vcGVuTGlzdOmHjOmdouWIoOaOiSDvvIzlubbkuJTliqDlhaXliLBjbG9zZSDliJfooajph4zpnaJcclxuICAgICAgICAgICAgbGV0IG1pbkZWYWx1ZU5vZGUgPSB0aGlzLm9wZW5MaXN0LnNwbGljZShtaW5GVmFsdWVOb2RlSW5kZXgsIDEpWzBdO1xyXG4gICAgICAgICAgICBpZiAobWluRlZhbHVlTm9kZS54ID09PSBlbmRQb3MueCAmJiBtaW5GVmFsdWVOb2RlLnkgPT09IGVuZFBvcy55KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOe7iOeCueS6hlwiKTtcclxuICAgICAgICAgICAgICAgIC8v5om+5Yiw57uI54K55LmL5ZCOIOW8gOWni+aehOmAoOWIl+ihqFxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdC5wdXNoKG1pbkZWYWx1ZU5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBtaW5GVmFsdWVOb2RlO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCEoY3VycmVudE5vZGUueCA9PT0gc3RhcnRQb3MueCAmJiBjdXJyZW50Tm9kZS55ID09PSBzdGFydFBvcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChjdXJyZW50Tm9kZS5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTGlzdC5wdXNoKG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVhcmJ5Tm9kZUxpc3QgPSB0aGlzLmZpbmROZWFyYnlOb2RlTGlzdChtaW5GVmFsdWVOb2RlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWFyYnlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gbmVhcmJ5Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0NlbGxOb2RlSXNJbkxpc3QoY2VsbE5vZGUsIHRoaXMuY2xvc2VMaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDZWxsTm9kZUlzSW5MaXN0KGNlbGxOb2RlLCB0aGlzLm9wZW5MaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Zyob3BlbiDliJfooajph4zpnaIg77yM6YKj5LmI6ZyA6KaB6YeN5paw6K6h566X5LiA5LiL77yM5q2k54K56K6+572u5paw55qE54i26IqC54K555qEIGZ2YWx1ZSDkuI7ogIHnmoRmdmFsdWXlgLznmoTlpKflsI9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R1ZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0d2YWx1ZShtaW5GVmFsdWVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3R1ZhbHVlIDwgY2VsbE5vZGUuZ1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLnNldFBhcmVudE5vZGUobWluRlZhbHVlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLmdWYWx1ZSA9IGNlbGxOb2RlLnByb2Nlc3NHdmFsdWUobWluRlZhbHVlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLmhWYWx1ZSA9IGNlbGxOb2RlLnByb2Nlc3NIVmFsdWUoZW5kTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuvue9rueItuiKgueCue+8jOW5tuS4lOiuoeeul2ZWYWxldVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbGxOb2RlLnNldFBcclxuICAgICAgICAgICAgICAgICAgICBjZWxsTm9kZS5zZXRQYXJlbnROb2RlKG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLmdWYWx1ZSA9IGNlbGxOb2RlLnByb2Nlc3NHdmFsdWUoY2VsbE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbE5vZGUuaFZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0hWYWx1ZShlbmROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2goY2VsbE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0ID0gbGlzdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgbGV0IHBvc0xpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcG9zTGlzdC5wdXNoKGxpc3RbaV0ubm9kZS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc0xpc3Q7XHJcbiAgICB9XHJcbiAgICBjaGVja0NlbGxOb2RlSXNJbkxpc3QodGFyZ2V0Q2VsbE5vZGU6IENlbGxOb2RlLCBub2RlTGlzdDogQ2VsbE5vZGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKG5vZGUueCA9PT0gdGFyZ2V0Q2VsbE5vZGUueCAmJiBub2RlLnkgPT09IHRhcmdldENlbGxOb2RlLnkpIHtcclxuICAgICAgICAgICAgICAgIC8v5Zyo5q2k5YiX6KGo6YeM6Z2i5om+5Yiw5LqG77yM55uu5qCH6IqC54K5XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmaW5kRlZhbHVlTWluTm9kZUluZGV4KGxpc3Q6IENlbGxOb2RlW10pOiBudW1iZXIge1xyXG4gICAgICAgIC8v5om+5YiwZuWAvOacgOWwj+eahOeCuVxyXG4gICAgICAgIGxldCBtaW5WYWx1ZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRGVmFsdWUoKSA8IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IG5vZGUuZ2V0RlZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuXHJcbiAgICB9XHJcbiAgICBmaW5kTmVhcmJ5Tm9kZUxpc3QoY3VycmVudENlbGxOb2RlOiBDZWxsTm9kZSk6IENlbGxOb2RlW10ge1xyXG4gICAgICAgIC8v5om+5Yiw6ZmE6L+R54K555qEIOWIl+ihqFxyXG4gICAgICAgIGxldCBkaXJMaXN0ID0gW1xyXG4gICAgICAgICAgICBbMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDBdLFxyXG4gICAgICAgICAgICBbMSwgLTFdLFxyXG4gICAgICAgICAgICBbMCwgLTFdLFxyXG4gICAgICAgICAgICBbLTEsIC0xXSxcclxuICAgICAgICAgICAgWy0xLCAwXSxcclxuICAgICAgICAgICAgWy0xLCAxXVxyXG4gICAgICAgIF1cclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGlyID0gZGlyTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IHggPSBjdXJyZW50Q2VsbE5vZGUueCArIGRpclswXTtcclxuICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50Q2VsbE5vZGUueSArIGRpclsxXTtcclxuICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYgKGNlbGxOb2RlICYmICFjZWxsTm9kZS5vblRhcmdldE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5q2k54K55a2Y5Zyo77yM5bm25LiU5q2k54K577yM5LiK5rKh5pyJ5YW25LuW55qE6Zqc56KN54mpXHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goY2VsbE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==