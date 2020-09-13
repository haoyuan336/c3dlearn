System.register(["cc", "code-quality:cr", "./util/My2Array.js", "./GroundTiled/GroundTiled.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, My2dArray, GroundTiled, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GroundMapCtl;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      property = _decorator.property; // export class CellNode {
      //     public x: number = 0;
      //     public y: number = 0;
      //     public node: Node = null;
      //     public onTargetNode: Node = null; //在其上的物体节点
      //     public gValue: number = 0; //g值， 当前节点距离起点的距离
      //     public hValue: number = 0; //h值，当前节点距离终点的预估距离
      //     public parentNode: CellNode = null; //父节点
      //     constructor(x: number, y: number, node: Node) {
      //         this.x = x;
      //         this.y = y;
      //         this.node = node;
      //     }
      //     setParentNode(parentNode: CellNode) {
      //         this.parentNode = parentNode;
      //     }
      //     processGvalue(parentNode: CellNode) {
      //         let gValue = parentNode.gValue + Math.sqrt(2);
      //         return gValue;
      //     }
      //     processHValue(endPos: CellNode) {
      //         let hValue = this.getDistance(this, endPos);
      //         return hValue;
      //     }
      //     getDistance(p1: CellNode, p2: CellNode) {
      //         //获取两点之间的距离
      //         return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
      //     }
      //     setOnTargetNode(targetNode: Node) {
      //         this.onTargetNode = targetNode;
      //     }
      //     getFValue(): number {
      //         return this.gValue + this.hValue;
      //     }
      // }

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
          _this.obsNodeList = [];

          _initializerDefineProperty(_this, "treePrefab", _descriptor5, _assertThisInitialized(_this));

          _this.groundTiledEdageIndexList = [];
          return _this;
        }

        _createClass(GroundMapCtl, [{
          key: "start",
          // private openList: CellNode[] = []; //开源列表
          // private closeList: CellNode[] = []; //关闭列表
          value: function start() {
            for (var i = 0; i < this.mapHeight; i++) {
              var nodeList = [];

              for (var j = 0; j < this.mapWidth; j++) {
                var node = instantiate(this.groundMapTiledPrefab);
                node.parent = this.node; // node.scale = v3(0, 0, 0);

                var pos = v3((this.mapWidth - 1) * -0.5 * this.tiledSize + j * this.tiledSize, -6, (this.mapHeight - 1) * -0.5 * this.tiledSize + i * this.tiledSize);
                node.setPosition(pos);
                node.active = false;
                nodeList.push(node); // if (i === 0) {
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
            } // this.mapNodeListOnSpace = this.mapNodeList.convertOneSpaceList(); //将二维数组 转换成一维


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
                  _this2.obsNodeList.push(v2(x, y));

                  var node = cellNode;

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
              this.obsNodeList.push(v2(x, y)); //将障碍物加入到障碍物列表里面
              // cellNode.setOnTargetNode(target);

              var node = cellNode;

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
                  var node = cellNode;

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
          } // getOneRandomVoidTiledNode() {
          //     //随机获取一个空的地图块的节点 //从边缘
          // }
          // getPathList(startPos: Vec2, endPos: Vec2): Vec2[] {
          //     let endNode = this.mapNodeList.getValue(endPos.x, endPos.y);
          //     //第一步。先将七点加入到open list 里面
          //     let startNode = this.mapNodeList.getValue(startPos.x, startPos.y);
          //     this.openList.push(startNode);
          //     let list: CellNode[] = [];
          //     while (this.openList.length > 0) {
          //         let minFValueNodeIndex = this.findFValueMinNodeIndex(this.openList);
          //         //第一步。，从openlist里面找到f值最小的节点 
          //         //并且将此点从openList里面删掉 ，并且加入到close 列表里面
          //         let minFValueNode = this.openList.splice(minFValueNodeIndex, 1)[0];
          //         if (minFValueNode.x === endPos.x && minFValueNode.y === endPos.y) {
          //             // console.log("找到终点了");
          //             //找到终点之后 开始构造列表
          //             // list.push(minFValueNode.parentNode);
          //             let currentNode = minFValueNode;
          //             while (!(currentNode.x === startPos.x && currentNode.y === startPos.y)) {
          //                 list.push(currentNode.parentNode);
          //                 currentNode = currentNode.parentNode;
          //             }
          //             break;
          //         }
          //         this.closeList.push(minFValueNode);
          //         let nearbyNodeList = this.findNearbyNodeList(minFValueNode);
          //         for (let i = 0; i < nearbyNodeList.length; i++) {
          //             let cellNode = nearbyNodeList[i];
          //             if (this.checkCellNodeIsInList(cellNode, this.closeList)) {
          //                 continue;
          //             }
          //             if (this.checkCellNodeIsInList(cellNode, this.openList)) {
          //                 //在open 列表里面 ，那么需要重新计算一下，此点设置新的父节点的 fvalue 与老的fvalue值的大小
          //                 let newGValue = cellNode.processGvalue(minFValueNode);
          //                 if (newGValue < cellNode.gValue) {
          //                     cellNode.setParentNode(minFValueNode);
          //                     cellNode.gValue = cellNode.processGvalue(minFValueNode);
          //                     cellNode.hValue = cellNode.processHValue(endNode);
          //                 }
          //             } else {
          //                 //设置父节点，并且计算fValeu
          //                 // cellNode.setP
          //                 cellNode.setParentNode(minFValueNode);
          //                 cellNode.gValue = cellNode.processGvalue(cellNode.parentNode);
          //                 cellNode.hValue = cellNode.processHValue(endNode);
          //                 this.openList.push(cellNode);
          //             }
          //         }
          //     }
          //     list = list.reverse();
          //     let posList = [];
          //     for (let i = 0; i < list.length; i++) {
          //         posList.push(list[i].node.position)
          //     }
          //     return posList;
          // }
          // checkCellNodeIsInList(targetCellNode: CellNode, nodeList: CellNode[]): boolean {
          //     for (let i = 0; i < nodeList.length; i++) {
          //         let node = nodeList[i];
          //         if (node.x === targetCellNode.x && node.y === targetCellNode.y) {
          //             //在此列表里面找到了，目标节点
          //             return true;
          //         }
          //     }
          //     return false;
          // }
          // findFValueMinNodeIndex(list: CellNode[]): number {
          //     //找到f值最小的点
          //     let minValue = Number.MAX_VALUE;
          //     let index = null;
          //     for (let i = 0; i < list.length; i++) {
          //         let node = list[i];
          //         if (node.getFValue() < minValue) {
          //             minValue = node.getFValue();
          //             index = i;
          //         }
          //     }
          //     return index;
          // }
          // findNearbyNodeList(currentCellNode: CellNode): CellNode[] {
          //     //找到附近点的 列表
          //     let dirList = [
          //         [0, 1],
          //         [1, 1],
          //         [1, 0],
          //         [1, -1],
          //         [0, -1],
          //         [-1, -1],
          //         [-1, 0],
          //         [-1, 1]
          //     ]
          //     let list = [];
          //     for (let i = 0; i < dirList.length; i++) {
          //         let dir = dirList[i];
          //         let x = currentCellNode.x + dir[0];
          //         let y = currentCellNode.y + dir[1];
          //         let cellNode = this.mapNodeList.getValue(x, y);
          //         if (cellNode && !cellNode.onTargetNode) {
          //             //此点存在，并且此点，上没有其他的障碍物
          //             list.push(cellNode);
          //         }
          //     }
          //     return list;
          // }
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "getObsPosList",
          value: function getObsPosList() {
            //获取障碍物列表
            return this.obsNodeList;
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Hcm91bmRNYXBDdGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsIkNDSW50ZWdlciIsImluc3RhbnRpYXRlIiwidjMiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJ2MiIsIk15MmRBcnJheSIsIkdyb3VuZFRpbGVkIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR3JvdW5kTWFwQ3RsIiwidHlwZSIsIm1hcE5vZGVMaXN0Iiwib2JzTm9kZUxpc3QiLCJncm91bmRUaWxlZEVkYWdlSW5kZXhMaXN0IiwiaSIsIm1hcEhlaWdodCIsIm5vZGVMaXN0IiwiaiIsIm1hcFdpZHRoIiwibm9kZSIsImdyb3VuZE1hcFRpbGVkUHJlZmFiIiwicGFyZW50IiwicG9zIiwidGlsZWRTaXplIiwic2V0UG9zaXRpb24iLCJhY3RpdmUiLCJwdXNoIiwicHVzaExpc3QiLCJ2Mkxpc3QiLCJ0cmVlTm9kZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNjYWxlIiwidHciLCJ0byIsImVhc2luZyIsImNhbGwiLCJzdGFydCIsInNob3dHcm91bmRUaWxlZEVudGVyQW5pbSIsInRoZW4iLCJ0cmVlQ291bnQiLCJ5IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwieCIsImNlbGxOb2RlIiwiZ2V0VmFsdWUiLCJnZXRDb21wb25lbnQiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsInRyZWVQcmVmYWIiLCJzZXRUYXJnZXRPYmplY3QiLCJwb3NpdGlvbiIsInoiLCJzaG93VHJlZUVudGVyQW5pbSIsInRhcmdldCIsInN0YXJ0ViIsImZsb29yIiwicm90YXRpb25JbmRleCIsIm1vdmVEaXIiLCJtb3ZlTGVuZ3RoIiwiY291bnQiLCJpbmRleCIsInByb21pc2VMaXN0IiwibW92ZUNvdW50Iiwic2hvd0VudGVyQW5pbSIsImFkZCIsInJhZGlhcyIsIlBJIiwicm90YXRlIiwibm9ybWFsaXplIiwiYWJzIiwiYWxsIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDbkZDLE1BQUFBLFM7O0FBQ0VDLE1BQUFBLFcsNkJBQUFBLFc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxRLEVBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OzhCQUVhQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVg7QUFBUixPQUFELEMsVUFFUlMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVg7QUFBUixPQUFELEMsVUFHUlMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFTUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixP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Q0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OzswQ0FDZTtBQUNYO0FBQ0EsbUJBQU8sS0FBS0MsV0FBWjtBQUNIOzs7O1FBNVQ2QmYsUzs7Ozs7aUJBRVEsSTs7Ozs7OztpQkFFWixDOzs7Ozs7O2lCQUVDLEM7Ozs7Ozs7aUJBR0EsQzs7Ozs7OztpQkFTQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIENDSW50ZWdlciwgaW5zdGFudGlhdGUsIHYzLCBDQ0Zsb2F0LCBUd2VlbiwgdjIsIFR3ZWVuRWFzaW5nLCBWZWMyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgTXkyZEFycmF5IGZyb20gJy4vdXRpbC9NeTJBcnJheSc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbi8vIGV4cG9ydCBjbGFzcyBDZWxsTm9kZSB7XHJcbi8vICAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuLy8gICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4vLyAgICAgcHVibGljIG5vZGU6IE5vZGUgPSBudWxsO1xyXG4vLyAgICAgcHVibGljIG9uVGFyZ2V0Tm9kZTogTm9kZSA9IG51bGw7IC8v5Zyo5YW25LiK55qE54mp5L2T6IqC54K5XHJcbi8vICAgICBwdWJsaWMgZ1ZhbHVlOiBudW1iZXIgPSAwOyAvL2flgLzvvIwg5b2T5YmN6IqC54K56Led56a76LW354K555qE6Led56a7XHJcbi8vICAgICBwdWJsaWMgaFZhbHVlOiBudW1iZXIgPSAwOyAvL2jlgLzvvIzlvZPliY3oioLngrnot53nprvnu4jngrnnmoTpooTkvLDot53nprtcclxuLy8gICAgIHB1YmxpYyBwYXJlbnROb2RlOiBDZWxsTm9kZSA9IG51bGw7IC8v54i26IqC54K5XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbm9kZTogTm9kZSkge1xyXG4vLyAgICAgICAgIHRoaXMueCA9IHg7XHJcbi8vICAgICAgICAgdGhpcy55ID0geTtcclxuLy8gICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlOiBDZWxsTm9kZSkge1xyXG4vLyAgICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XHJcbi8vICAgICB9XHJcbi8vICAgICBwcm9jZXNzR3ZhbHVlKHBhcmVudE5vZGU6IENlbGxOb2RlKSB7XHJcbi8vICAgICAgICAgbGV0IGdWYWx1ZSA9IHBhcmVudE5vZGUuZ1ZhbHVlICsgTWF0aC5zcXJ0KDIpO1xyXG4vLyAgICAgICAgIHJldHVybiBnVmFsdWU7XHJcbi8vICAgICB9XHJcbi8vICAgICBwcm9jZXNzSFZhbHVlKGVuZFBvczogQ2VsbE5vZGUpIHtcclxuLy8gICAgICAgICBsZXQgaFZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSh0aGlzLCBlbmRQb3MpO1xyXG4vLyAgICAgICAgIHJldHVybiBoVmFsdWU7XHJcbi8vICAgICB9XHJcbi8vICAgICBnZXREaXN0YW5jZShwMTogQ2VsbE5vZGUsIHAyOiBDZWxsTm9kZSkge1xyXG4vLyAgICAgICAgIC8v6I635Y+W5Lik54K55LmL6Ze055qE6Led56a7XHJcbi8vICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygocDEueCAtIHAyLngpLCAyKSArIE1hdGgucG93KChwMS55IC0gcDIueSksIDIpKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgc2V0T25UYXJnZXROb2RlKHRhcmdldE5vZGU6IE5vZGUpIHtcclxuLy8gICAgICAgICB0aGlzLm9uVGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGU7XHJcbi8vICAgICB9XHJcbi8vICAgICBnZXRGVmFsdWUoKTogbnVtYmVyIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5nVmFsdWUgKyB0aGlzLmhWYWx1ZTtcclxuLy8gICAgIH1cclxuXHJcblxyXG5cclxuLy8gfVxyXG5AY2NjbGFzcygnR3JvdW5kTWFwQ3RsJylcclxuZXhwb3J0IGNsYXNzIEdyb3VuZE1hcEN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBncm91bmRNYXBUaWxlZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDSW50ZWdlciB9KVxyXG4gICAgcHVibGljIG1hcFdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXHJcbiAgICBwdWJsaWMgbWFwSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDRmxvYXQgfSlcclxuICAgIHB1YmxpYyB0aWxlZFNpemU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBzdGFydCgpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vICAgICB0aGlzLm5vZGUub24oXCJcIik7XHJcbiAgICAvLyB9XHJcbiAgICBwcml2YXRlIG1hcE5vZGVMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSBuZXcgTXkyZEFycmF5PE5vZGU+KCk7XHJcbiAgICAvLyBwcml2YXRlIG1hcE5vZGVMaXN0T25TcGFjZTogW10gPSBbXTtcclxuICAgIHByaXZhdGUgb2JzTm9kZUxpc3Q6IFZlYzJbXSA9IFtdOyAvL+iOt+WPlumanOeijeeJqeWIl+ihqFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgdHJlZVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBwdWJsaWMgZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2U6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBncm91bmRUaWxlZEVkYWdlSW5kZXhMaXN0OiBWZWMyW10gPSBbXTtcclxuXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgb3Blbkxpc3Q6IENlbGxOb2RlW10gPSBbXTsgLy/lvIDmupDliJfooahcclxuICAgIC8vIHByaXZhdGUgY2xvc2VMaXN0OiBDZWxsTm9kZVtdID0gW107IC8v5YWz6Zet5YiX6KGoXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFwSGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hcFdpZHRoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5ncm91bmRNYXBUaWxlZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUuc2NhbGUgPSB2MygwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB2MygodGhpcy5tYXBXaWR0aCAtIDEpICogLTAuNSAqIHRoaXMudGlsZWRTaXplICsgaiAqIHRoaXMudGlsZWRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIC02LCAodGhpcy5tYXBIZWlnaHQgLSAxKSAqIC0wLjUgKiB0aGlzLnRpbGVkU2l6ZSArIGkgKiB0aGlzLnRpbGVkU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZS5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGogPT09IHRoaXMubWFwV2lkdGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZS5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGkgPT09IHRoaXMubWFwSGVpZ2h0IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChqID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmRUaWxlZE5vZGVMaXN0SW5FZGFnZS5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXBOb2RlTGlzdC5wdXNoTGlzdChub2RlTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubWFwTm9kZUxpc3RPblNwYWNlID0gdGhpcy5tYXBOb2RlTGlzdC5jb252ZXJ0T25lU3BhY2VMaXN0KCk7IC8v5bCG5LqM57u05pWw57uEIOi9rOaNouaIkOS4gOe7tFxyXG4gICAgICAgIGxldCB2Mkxpc3Q6IFZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXBXaWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHYyTGlzdC5wdXNoKHYyKGosIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLm1hcEhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHYyTGlzdC5wdXNoKHYyKHRoaXMubWFwV2lkdGggLSAxLCBpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSB0aGlzLm1hcFdpZHRoIC0gMjsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgdjJMaXN0LnB1c2godjIoaiwgdGhpcy5tYXBIZWlnaHQgLSAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hcEhlaWdodCAtIDI7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdjJMaXN0LnB1c2godjIoMCwgaSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ncm91bmRUaWxlZEVkYWdlSW5kZXhMaXN0ID0gdjJMaXN0O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidjIgbGlzdFwiLCB2Mkxpc3QpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRJbkVkYWdlSW5kZXhMaXN0KCk6IFZlYzJbXSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUcmVlRW50ZXJBbmltKHRyZWVOb2RlOiBOb2RlKSB7XHJcbiAgICAgICAgLy8gbGV0IHYgPSB2MigwLDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyB0cmVlIGVudGVyIGFuaW1hXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRyZWVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyZWVOb2RlLnNjYWxlID0gdjMoMSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0cmVlTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwgeyBzY2FsZTogdjMoMSwgMSwgMSkgfSwgeyBlYXNpbmc6IFwiZWxhc3RpY091dFwiIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dHcm91bmRFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0dyb3VuZFRpbGVkRW50ZXJBbmltKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0cmVlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJlZUNvdW50IDwgMikge1xyXG4gICAgICAgICAgICAgICAgLy/pmo/mnLoy5qO15qCRXHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IFswLCB0aGlzLm1hcEhlaWdodCAtIDFdW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgyIC0gMSkpXTtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHRoaXMubWFwV2lkdGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbE5vZGUgPSB0aGlzLm1hcE5vZGVMaXN0LmdldFZhbHVlKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNOb2RlTGlzdC5wdXNoKHYyKHgsIHkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjZWxsTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmVlTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMudHJlZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91bmRUaWxlZC5zZXRUYXJnZXRPYmplY3QodHJlZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlTm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RyZWVFbnRlckFuaW0odHJlZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRUb3dlckJ1aWxkQmFzZU9uVGlsZWQodGFyZ2V0OiBOb2RlLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoeCwgeSk7XHJcbiAgICAgICAgaWYgKGNlbGxOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzTm9kZUxpc3QucHVzaCh2Mih4LCB5KSk7IC8v5bCG6Zqc56KN54mp5Yqg5YWl5Yiw6Zqc56KN54mp5YiX6KGo6YeM6Z2iXHJcbiAgICAgICAgICAgIC8vIGNlbGxOb2RlLnNldE9uVGFyZ2V0Tm9kZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNlbGxOb2RlO1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKS5zZXRUYXJnZXRPYmplY3QodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93R3JvdW5kVGlsZWRFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ViA9IHYyKE1hdGguZmxvb3IodGhpcy5tYXBXaWR0aCAvIDIpLCBNYXRoLmZsb29yKHRoaXMubWFwSGVpZ2h0IC8gMikgKyAxKTtcclxuICAgICAgICBsZXQgcm90YXRpb25JbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IG1vdmVEaXIgPSB2MigwLCAtMSk7XHJcbiAgICAgICAgbGV0IG1vdmVMZW5ndGggPSAxO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICB3aGlsZSAoc3RhcnRWLnggPD0gdGhpcy5tYXBXaWR0aCArIDEgJiYgc3RhcnRWLnkgPD0gdGhpcy5tYXBIZWlnaHQgKyAxICYmIHN0YXJ0Vi54ID49IDAgJiYgc3RhcnRWLnkgPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbW92ZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtb3ZlQ291bnQgPCBtb3ZlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ291bnQrKztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMSB2XCIsIHN0YXJ0Vik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbE5vZGUgPSB0aGlzLm1hcE5vZGVMaXN0LmdldFZhbHVlKHN0YXJ0Vi54LCBzdGFydFYueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNlbGxOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2godGhpcy5zaG93RW50ZXJBbmltKG5vZGUsIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VudGVyQW5pbShub2RlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Vi5hZGQobW92ZURpcik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByYWRpYXMgPSBNYXRoLlBJICogMiAvIDQgKiByb3RhdGlvbkluZGV4O1xyXG4gICAgICAgICAgICBtb3ZlRGlyID0gdjIoMCwgMSkucm90YXRlKHJhZGlhcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIG1vdmVEaXIueCA9IChtb3ZlRGlyLnggPCAwICYmIE1hdGguYWJzKG1vdmVEaXIueCkgPCAxKSA/IDAgOiBNYXRoLmZsb29yKG1vdmVEaXIueCk7XHJcbiAgICAgICAgICAgIG1vdmVEaXIueSA9IChtb3ZlRGlyLnkgPCAwICYmIE1hdGguYWJzKG1vdmVEaXIueSkgPCAxKSA/IDAgOiBNYXRoLmZsb29yKG1vdmVEaXIueSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBtb3ZlTGVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgICAgIHJvdGF0aW9uSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KTtcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0obm9kZTogTm9kZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0dy5kZWxheShpbmRleCAqIDAuMDMpO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcudG8oMC40LCB7IHBvc2l0aW9uOiB2Myhwb3MueCwgMCwgcG9zLnopIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRNYXBOb2RlTGlzdCgpOiBNeTJkQXJyYXk8Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcE5vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0T25lUmFuZG9tVm9pZFRpbGVkTm9kZSgpIHtcclxuICAgIC8vICAgICAvL+maj+acuuiOt+WPluS4gOS4quepuueahOWcsOWbvuWdl+eahOiKgueCuSAvL+S7jui+uee8mFxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGdldFBhdGhMaXN0KHN0YXJ0UG9zOiBWZWMyLCBlbmRQb3M6IFZlYzIpOiBWZWMyW10ge1xyXG4gICAgLy8gICAgIGxldCBlbmROb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZShlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG5cclxuICAgIC8vICAgICAvL+esrOS4gOatpeOAguWFiOWwhuS4g+eCueWKoOWFpeWIsG9wZW4gbGlzdCDph4zpnaJcclxuICAgIC8vICAgICBsZXQgc3RhcnROb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZShzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5vcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICAvLyAgICAgbGV0IGxpc3Q6IENlbGxOb2RlW10gPSBbXTtcclxuICAgIC8vICAgICB3aGlsZSAodGhpcy5vcGVuTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaW5GVmFsdWVOb2RlSW5kZXggPSB0aGlzLmZpbmRGVmFsdWVNaW5Ob2RlSW5kZXgodGhpcy5vcGVuTGlzdCk7XHJcbiAgICAvLyAgICAgICAgIC8v56ys5LiA5q2l44CC77yM5LuOb3Blbmxpc3Tph4zpnaLmib7liLBm5YC85pyA5bCP55qE6IqC54K5IFxyXG4gICAgLy8gICAgICAgICAvL+W5tuS4lOWwhuatpOeCueS7jm9wZW5MaXN06YeM6Z2i5Yig5o6JIO+8jOW5tuS4lOWKoOWFpeWIsGNsb3NlIOWIl+ihqOmHjOmdolxyXG4gICAgLy8gICAgICAgICBsZXQgbWluRlZhbHVlTm9kZSA9IHRoaXMub3Blbkxpc3Quc3BsaWNlKG1pbkZWYWx1ZU5vZGVJbmRleCwgMSlbMF07XHJcbiAgICAvLyAgICAgICAgIGlmIChtaW5GVmFsdWVOb2RlLnggPT09IGVuZFBvcy54ICYmIG1pbkZWYWx1ZU5vZGUueSA9PT0gZW5kUG9zLnkpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw57uI54K55LqGXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy/mib7liLDnu4jngrnkuYvlkI4g5byA5aeL5p6E6YCg5YiX6KGoXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBsaXN0LnB1c2gobWluRlZhbHVlTm9kZS5wYXJlbnROb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG1pbkZWYWx1ZU5vZGU7XHJcbiAgICAvLyAgICAgICAgICAgICB3aGlsZSAoIShjdXJyZW50Tm9kZS54ID09PSBzdGFydFBvcy54ICYmIGN1cnJlbnROb2RlLnkgPT09IHN0YXJ0UG9zLnkpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGN1cnJlbnROb2RlLnBhcmVudE5vZGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2xvc2VMaXN0LnB1c2gobWluRlZhbHVlTm9kZSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBuZWFyYnlOb2RlTGlzdCA9IHRoaXMuZmluZE5lYXJieU5vZGVMaXN0KG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5lYXJieU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgY2VsbE5vZGUgPSBuZWFyYnlOb2RlTGlzdFtpXTtcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ2VsbE5vZGVJc0luTGlzdChjZWxsTm9kZSwgdGhpcy5jbG9zZUxpc3QpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0NlbGxOb2RlSXNJbkxpc3QoY2VsbE5vZGUsIHRoaXMub3Blbkxpc3QpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy/lnKhvcGVuIOWIl+ihqOmHjOmdoiDvvIzpgqPkuYjpnIDopoHph43mlrDorqHnrpfkuIDkuIvvvIzmraTngrnorr7nva7mlrDnmoTniLboioLngrnnmoQgZnZhbHVlIOS4juiAgeeahGZ2YWx1ZeWAvOeahOWkp+Wwj1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBuZXdHVmFsdWUgPSBjZWxsTm9kZS5wcm9jZXNzR3ZhbHVlKG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChuZXdHVmFsdWUgPCBjZWxsTm9kZS5nVmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2VsbE5vZGUuc2V0UGFyZW50Tm9kZShtaW5GVmFsdWVOb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2VsbE5vZGUuZ1ZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0d2YWx1ZShtaW5GVmFsdWVOb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2VsbE5vZGUuaFZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0hWYWx1ZShlbmROb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8v6K6+572u54i26IqC54K577yM5bm25LiU6K6h566XZlZhbGV1XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY2VsbE5vZGUuc2V0UFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGxOb2RlLnNldFBhcmVudE5vZGUobWluRlZhbHVlTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbE5vZGUuZ1ZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0d2YWx1ZShjZWxsTm9kZS5wYXJlbnROb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsTm9kZS5oVmFsdWUgPSBjZWxsTm9kZS5wcm9jZXNzSFZhbHVlKGVuZE5vZGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMub3Blbkxpc3QucHVzaChjZWxsTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxpc3QgPSBsaXN0LnJldmVyc2UoKTtcclxuICAgIC8vICAgICBsZXQgcG9zTGlzdCA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBwb3NMaXN0LnB1c2gobGlzdFtpXS5ub2RlLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gcG9zTGlzdDtcclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrQ2VsbE5vZGVJc0luTGlzdCh0YXJnZXRDZWxsTm9kZTogQ2VsbE5vZGUsIG5vZGVMaXN0OiBDZWxsTm9kZVtdKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbm9kZSA9IG5vZGVMaXN0W2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAobm9kZS54ID09PSB0YXJnZXRDZWxsTm9kZS54ICYmIG5vZGUueSA9PT0gdGFyZ2V0Q2VsbE5vZGUueSkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy/lnKjmraTliJfooajph4zpnaLmib7liLDkuobvvIznm67moIfoioLngrlcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH1cclxuICAgIC8vIGZpbmRGVmFsdWVNaW5Ob2RlSW5kZXgobGlzdDogQ2VsbE5vZGVbXSk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgLy/mib7liLBm5YC85pyA5bCP55qE54K5XHJcbiAgICAvLyAgICAgbGV0IG1pblZhbHVlID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgIC8vICAgICBsZXQgaW5kZXggPSBudWxsO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbm9kZSA9IGxpc3RbaV07XHJcbiAgICAvLyAgICAgICAgIGlmIChub2RlLmdldEZWYWx1ZSgpIDwgbWluVmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIG1pblZhbHVlID0gbm9kZS5nZXRGVmFsdWUoKTtcclxuICAgIC8vICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIGluZGV4O1xyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGZpbmROZWFyYnlOb2RlTGlzdChjdXJyZW50Q2VsbE5vZGU6IENlbGxOb2RlKTogQ2VsbE5vZGVbXSB7XHJcbiAgICAvLyAgICAgLy/mib7liLDpmYTov5HngrnnmoQg5YiX6KGoXHJcbiAgICAvLyAgICAgbGV0IGRpckxpc3QgPSBbXHJcbiAgICAvLyAgICAgICAgIFswLCAxXSxcclxuICAgIC8vICAgICAgICAgWzEsIDFdLFxyXG4gICAgLy8gICAgICAgICBbMSwgMF0sXHJcbiAgICAvLyAgICAgICAgIFsxLCAtMV0sXHJcbiAgICAvLyAgICAgICAgIFswLCAtMV0sXHJcbiAgICAvLyAgICAgICAgIFstMSwgLTFdLFxyXG4gICAgLy8gICAgICAgICBbLTEsIDBdLFxyXG4gICAgLy8gICAgICAgICBbLTEsIDFdXHJcbiAgICAvLyAgICAgXVxyXG4gICAgLy8gICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBkaXIgPSBkaXJMaXN0W2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgeCA9IGN1cnJlbnRDZWxsTm9kZS54ICsgZGlyWzBdO1xyXG4gICAgLy8gICAgICAgICBsZXQgeSA9IGN1cnJlbnRDZWxsTm9kZS55ICsgZGlyWzFdO1xyXG4gICAgLy8gICAgICAgICBsZXQgY2VsbE5vZGUgPSB0aGlzLm1hcE5vZGVMaXN0LmdldFZhbHVlKHgsIHkpO1xyXG4gICAgLy8gICAgICAgICBpZiAoY2VsbE5vZGUgJiYgIWNlbGxOb2RlLm9uVGFyZ2V0Tm9kZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy/mraTngrnlrZjlnKjvvIzlubbkuJTmraTngrnvvIzkuIrmsqHmnInlhbbku5bnmoTpmpznoo3nialcclxuICAgIC8vICAgICAgICAgICAgIGxpc3QucHVzaChjZWxsTm9kZSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBsaXN0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbiAgICBnZXRPYnNQb3NMaXN0KCl7XHJcbiAgICAgICAgLy/ojrflj5bpmpznoo3nianliJfooahcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNOb2RlTGlzdDtcclxuICAgIH1cclxufVxyXG4iXX0=