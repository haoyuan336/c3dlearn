System.register(["cc", "code-quality:cr", "./util/My2Array.js", "./GroundTiled/GroundTiled.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, CCInteger, instantiate, v3, CCFloat, Tween, v2, find, My2dArray, GroundTiled, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GroundMapCtl;

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
      find = _cc.find;
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

                if (index % 3 === 0) {
                  find("GameController").emit("play-audio", "drop");
                }
              });
              tw.to(0.4, {
                position: v3(pos.x, 0, pos.z)
              }, {
                easing: 'elasticOut'
              });
              tw.call(function () {
                // find("GameController").emit("play-audio","drop",1);
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
        }, {
          key: "getMapSize",
          value: function getMapSize() {
            return v2(this.mapWidth, this.mapHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Hcm91bmRNYXBDdGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsIkNDSW50ZWdlciIsImluc3RhbnRpYXRlIiwidjMiLCJDQ0Zsb2F0IiwiVHdlZW4iLCJ2MiIsImZpbmQiLCJNeTJkQXJyYXkiLCJHcm91bmRUaWxlZCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdyb3VuZE1hcEN0bCIsInR5cGUiLCJtYXBOb2RlTGlzdCIsIm9ic05vZGVMaXN0IiwiZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdCIsImkiLCJtYXBIZWlnaHQiLCJub2RlTGlzdCIsImoiLCJtYXBXaWR0aCIsIm5vZGUiLCJncm91bmRNYXBUaWxlZFByZWZhYiIsInBhcmVudCIsInBvcyIsInRpbGVkU2l6ZSIsInNldFBvc2l0aW9uIiwiYWN0aXZlIiwicHVzaCIsInB1c2hMaXN0IiwidjJMaXN0IiwidHJlZU5vZGUiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY2FsZSIsInR3IiwidG8iLCJlYXNpbmciLCJjYWxsIiwic3RhcnQiLCJzaG93R3JvdW5kVGlsZWRFbnRlckFuaW0iLCJ0aGVuIiwidHJlZUNvdW50IiwieSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIngiLCJjZWxsTm9kZSIsImdldFZhbHVlIiwiZ2V0Q29tcG9uZW50IiwiZ3JvdW5kVGlsZWQiLCJnZXRJc1ZvaWQiLCJ0cmVlUHJlZmFiIiwic2V0VGFyZ2V0T2JqZWN0IiwicG9zaXRpb24iLCJ6Iiwic2hvd1RyZWVFbnRlckFuaW0iLCJ0YXJnZXQiLCJzdGFydFYiLCJmbG9vciIsInJvdGF0aW9uSW5kZXgiLCJtb3ZlRGlyIiwibW92ZUxlbmd0aCIsImNvdW50IiwiaW5kZXgiLCJwcm9taXNlTGlzdCIsIm1vdmVDb3VudCIsInNob3dFbnRlckFuaW0iLCJhZGQiLCJyYWRpYXMiLCJQSSIsInJvdGF0ZSIsIm5vcm1hbGl6ZSIsImFicyIsImFsbCIsImRlbGF5IiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEUsT0FBQUEsRTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzFHQyxNQUFBQSxTOztBQUNFQyxNQUFBQSxXLDZCQUFBQSxXOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlosVSxDQUF0QlksTztBQUFTQyxNQUFBQSxRLEdBQWFiLFUsQ0FBYmEsUSxFQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs4QkFFYUMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBRVJXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBRVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBR1JVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBU1JPLFFB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBDQ0ludGVnZXIsIGluc3RhbnRpYXRlLCB2MywgQ0NGbG9hdCwgVHdlZW4sIHYyLCBUd2VlbkVhc2luZywgVmVjMiwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5pbXBvcnQgeyBHcm91bmRUaWxlZCB9IGZyb20gJy4vR3JvdW5kVGlsZWQvR3JvdW5kVGlsZWQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG4vLyBleHBvcnQgY2xhc3MgQ2VsbE5vZGUge1xyXG4vLyAgICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbi8vICAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuLy8gICAgIHB1YmxpYyBub2RlOiBOb2RlID0gbnVsbDtcclxuLy8gICAgIHB1YmxpYyBvblRhcmdldE5vZGU6IE5vZGUgPSBudWxsOyAvL+WcqOWFtuS4iueahOeJqeS9k+iKgueCuVxyXG4vLyAgICAgcHVibGljIGdWYWx1ZTogbnVtYmVyID0gMDsgLy9n5YC877yMIOW9k+WJjeiKgueCuei3neemu+i1t+eCueeahOi3neemu1xyXG4vLyAgICAgcHVibGljIGhWYWx1ZTogbnVtYmVyID0gMDsgLy9o5YC877yM5b2T5YmN6IqC54K56Led56a757uI54K555qE6aKE5Lyw6Led56a7XHJcbi8vICAgICBwdWJsaWMgcGFyZW50Tm9kZTogQ2VsbE5vZGUgPSBudWxsOyAvL+eItuiKgueCuVxyXG4vLyAgICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG5vZGU6IE5vZGUpIHtcclxuLy8gICAgICAgICB0aGlzLnggPSB4O1xyXG4vLyAgICAgICAgIHRoaXMueSA9IHk7XHJcbi8vICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuLy8gICAgIH1cclxuLy8gICAgIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZTogQ2VsbE5vZGUpIHtcclxuLy8gICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJvY2Vzc0d2YWx1ZShwYXJlbnROb2RlOiBDZWxsTm9kZSkge1xyXG4vLyAgICAgICAgIGxldCBnVmFsdWUgPSBwYXJlbnROb2RlLmdWYWx1ZSArIE1hdGguc3FydCgyKTtcclxuLy8gICAgICAgICByZXR1cm4gZ1ZhbHVlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJvY2Vzc0hWYWx1ZShlbmRQb3M6IENlbGxOb2RlKSB7XHJcbi8vICAgICAgICAgbGV0IGhWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UodGhpcywgZW5kUG9zKTtcclxuLy8gICAgICAgICByZXR1cm4gaFZhbHVlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZ2V0RGlzdGFuY2UocDE6IENlbGxOb2RlLCBwMjogQ2VsbE5vZGUpIHtcclxuLy8gICAgICAgICAvL+iOt+WPluS4pOeCueS5i+mXtOeahOi3neemu1xyXG4vLyAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdygocDEueSAtIHAyLnkpLCAyKSlcclxuLy8gICAgIH1cclxuLy8gICAgIHNldE9uVGFyZ2V0Tm9kZSh0YXJnZXROb2RlOiBOb2RlKSB7XHJcbi8vICAgICAgICAgdGhpcy5vblRhcmdldE5vZGUgPSB0YXJnZXROb2RlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZ2V0RlZhbHVlKCk6IG51bWJlciB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuZ1ZhbHVlICsgdGhpcy5oVmFsdWU7XHJcbi8vICAgICB9XHJcblxyXG5cclxuXHJcbi8vIH1cclxuQGNjY2xhc3MoJ0dyb3VuZE1hcEN0bCcpXHJcbmV4cG9ydCBjbGFzcyBHcm91bmRNYXBDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZ3JvdW5kTWFwVGlsZWRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcclxuICAgIHB1YmxpYyBtYXBXaWR0aDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDSW50ZWdlciB9KVxyXG4gICAgcHVibGljIG1hcEhlaWdodDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0Zsb2F0IH0pXHJcbiAgICBwdWJsaWMgdGlsZWRTaXplOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gc3RhcnQoKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLm9uKFwiXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgcHJpdmF0ZSBtYXBOb2RlTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gbmV3IE15MmRBcnJheTxOb2RlPigpO1xyXG4gICAgLy8gcHJpdmF0ZSBtYXBOb2RlTGlzdE9uU3BhY2U6IFtdID0gW107XHJcbiAgICBwcml2YXRlIG9ic05vZGVMaXN0OiBWZWMyW10gPSBbXTsgLy/ojrflj5bpmpznoo3nianliJfooahcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIHRyZWVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gcHVibGljIGdyb3VuZFRpbGVkTm9kZUxpc3RJbkVkYWdlOiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdDogVmVjMltdID0gW107XHJcblxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIG9wZW5MaXN0OiBDZWxsTm9kZVtdID0gW107IC8v5byA5rqQ5YiX6KGoXHJcbiAgICAvLyBwcml2YXRlIGNsb3NlTGlzdDogQ2VsbE5vZGVbXSA9IFtdOyAvL+WFs+mXreWIl+ihqFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcEhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXBXaWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kTWFwVGlsZWRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnNjYWxlID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdjMoKHRoaXMubWFwV2lkdGggLSAxKSAqIC0wLjUgKiB0aGlzLnRpbGVkU2l6ZSArIGogKiB0aGlzLnRpbGVkU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAtNiwgKHRoaXMubWFwSGVpZ2h0IC0gMSkgKiAtMC41ICogdGhpcy50aWxlZFNpemUgKyBpICogdGhpcy50aWxlZFNpemUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChqID09PSB0aGlzLm1hcFdpZHRoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIChpID09PSB0aGlzLm1hcEhlaWdodCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3RJbkVkYWdlLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JvdW5kVGlsZWROb2RlTGlzdEluRWRhZ2UucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFwTm9kZUxpc3QucHVzaExpc3Qobm9kZUxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm1hcE5vZGVMaXN0T25TcGFjZSA9IHRoaXMubWFwTm9kZUxpc3QuY29udmVydE9uZVNwYWNlTGlzdCgpOyAvL+WwhuS6jOe7tOaVsOe7hCDovazmjaLmiJDkuIDnu7RcclxuICAgICAgICBsZXQgdjJMaXN0OiBWZWMyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWFwV2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICB2Mkxpc3QucHVzaCh2MihqLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5tYXBIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICB2Mkxpc3QucHVzaCh2Mih0aGlzLm1hcFdpZHRoIC0gMSwgaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gdGhpcy5tYXBXaWR0aCAtIDI7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgIHYyTGlzdC5wdXNoKHYyKGosIHRoaXMubWFwSGVpZ2h0IC0gMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5tYXBIZWlnaHQgLSAyOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHYyTGlzdC5wdXNoKHYyKDAsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdW5kVGlsZWRFZGFnZUluZGV4TGlzdCA9IHYyTGlzdDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInYyIGxpc3RcIiwgdjJMaXN0KTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SW5FZGFnZUluZGV4TGlzdCgpOiBWZWMyW10ge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmdyb3VuZFRpbGVkTm9kZUxpc3RJbkVkYWdlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VuZFRpbGVkRWRhZ2VJbmRleExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VHJlZUVudGVyQW5pbSh0cmVlTm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vIGxldCB2ID0gdjIoMCwwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgdHJlZSBlbnRlciBhbmltYVwiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0cmVlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmVlTm9kZS5zY2FsZSA9IHYzKDEsIDAsIDEpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odHJlZU5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHsgc2NhbGU6IHYzKDEsIDEsIDEpIH0sIHsgZWFzaW5nOiBcImVsYXN0aWNPdXRcIiB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93R3JvdW5kRW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dHcm91bmRUaWxlZEVudGVyQW5pbSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJlZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRyZWVDb3VudCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIC8v6ZqP5py6MuajteagkVxyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBbMCwgdGhpcy5tYXBIZWlnaHQgLSAxXVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMiAtIDEpKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICh0aGlzLm1hcFdpZHRoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzTm9kZUxpc3QucHVzaCh2Mih4LCB5KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2VsbE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJlZU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnRyZWVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdW5kVGlsZWQuc2V0VGFyZ2V0T2JqZWN0KHRyZWVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUcmVlRW50ZXJBbmltKHRyZWVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0VG93ZXJCdWlsZEJhc2VPblRpbGVkKHRhcmdldDogTm9kZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2VsbE5vZGUgPSB0aGlzLm1hcE5vZGVMaXN0LmdldFZhbHVlKHgsIHkpO1xyXG4gICAgICAgIGlmIChjZWxsTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic05vZGVMaXN0LnB1c2godjIoeCwgeSkpOyAvL+WwhumanOeijeeJqeWKoOWFpeWIsOmanOeijeeJqeWIl+ihqOmHjOmdolxyXG4gICAgICAgICAgICAvLyBjZWxsTm9kZS5zZXRPblRhcmdldE5vZGUodGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjZWxsTm9kZTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkuc2V0VGFyZ2V0T2JqZWN0KHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd0dyb3VuZFRpbGVkRW50ZXJBbmltKCkge1xyXG4gICAgICAgIGxldCBzdGFydFYgPSB2MihNYXRoLmZsb29yKHRoaXMubWFwV2lkdGggLyAyKSwgTWF0aC5mbG9vcih0aGlzLm1hcEhlaWdodCAvIDIpICsgMSk7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBtb3ZlRGlyID0gdjIoMCwgLTEpO1xyXG4gICAgICAgIGxldCBtb3ZlTGVuZ3RoID0gMTtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKHN0YXJ0Vi54IDw9IHRoaXMubWFwV2lkdGggKyAxICYmIHN0YXJ0Vi55IDw9IHRoaXMubWFwSGVpZ2h0ICsgMSAmJiBzdGFydFYueCA+PSAwICYmIHN0YXJ0Vi55ID49IDApIHtcclxuICAgICAgICAgICAgbGV0IG1vdmVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobW92ZUNvdW50IDwgbW92ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEgdlwiLCBzdGFydFYpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZShzdGFydFYueCwgc3RhcnRWLnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjZWxsTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHRoaXMuc2hvd0VudGVyQW5pbShub2RlLCBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbnRlckFuaW0obm9kZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydFYuYWRkKG1vdmVEaXIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmFkaWFzID0gTWF0aC5QSSAqIDIgLyA0ICogcm90YXRpb25JbmRleDtcclxuICAgICAgICAgICAgbW92ZURpciA9IHYyKDAsIDEpLnJvdGF0ZShyYWRpYXMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBtb3ZlRGlyLnggPSAobW92ZURpci54IDwgMCAmJiBNYXRoLmFicyhtb3ZlRGlyLngpIDwgMSkgPyAwIDogTWF0aC5mbG9vcihtb3ZlRGlyLngpO1xyXG4gICAgICAgICAgICBtb3ZlRGlyLnkgPSAobW92ZURpci55IDwgMCAmJiBNYXRoLmFicyhtb3ZlRGlyLnkpIDwgMSkgPyAwIDogTWF0aC5mbG9vcihtb3ZlRGlyLnkpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgbW92ZUxlbmd0aCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICByb3RhdGlvbkluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzaG93RW50ZXJBbmltKG5vZGU6IE5vZGUsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdHcuZGVsYXkoaW5kZXggKiAwLjAzKTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSAzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmVtaXQoXCJwbGF5LWF1ZGlvXCIsIFwiZHJvcFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy50bygwLjQsIHsgcG9zaXRpb246IHYzKHBvcy54LCAwLCBwb3MueikgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5lbWl0KFwicGxheS1hdWRpb1wiLFwiZHJvcFwiLDEpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFwTm9kZUxpc3QoKTogTXkyZEFycmF5PE5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBOb2RlTGlzdDtcclxuICAgIH1cclxuICAgIC8vIGdldE9uZVJhbmRvbVZvaWRUaWxlZE5vZGUoKSB7XHJcbiAgICAvLyAgICAgLy/pmo/mnLrojrflj5bkuIDkuKrnqbrnmoTlnLDlm77lnZfnmoToioLngrkgLy/ku47ovrnnvJhcclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBnZXRQYXRoTGlzdChzdGFydFBvczogVmVjMiwgZW5kUG9zOiBWZWMyKTogVmVjMltdIHtcclxuICAgIC8vICAgICBsZXQgZW5kTm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoZW5kUG9zLngsIGVuZFBvcy55KTtcclxuXHJcbiAgICAvLyAgICAgLy/nrKzkuIDmraXjgILlhYjlsIbkuIPngrnliqDlhaXliLBvcGVuIGxpc3Qg6YeM6Z2iXHJcbiAgICAvLyAgICAgbGV0IHN0YXJ0Tm9kZSA9IHRoaXMubWFwTm9kZUxpc3QuZ2V0VmFsdWUoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMub3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgLy8gICAgIGxldCBsaXN0OiBDZWxsTm9kZVtdID0gW107XHJcbiAgICAvLyAgICAgd2hpbGUgKHRoaXMub3Blbkxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWluRlZhbHVlTm9kZUluZGV4ID0gdGhpcy5maW5kRlZhbHVlTWluTm9kZUluZGV4KHRoaXMub3Blbkxpc3QpO1xyXG4gICAgLy8gICAgICAgICAvL+esrOS4gOatpeOAgu+8jOS7jm9wZW5saXN06YeM6Z2i5om+5YiwZuWAvOacgOWwj+eahOiKgueCuSBcclxuICAgIC8vICAgICAgICAgLy/lubbkuJTlsIbmraTngrnku45vcGVuTGlzdOmHjOmdouWIoOaOiSDvvIzlubbkuJTliqDlhaXliLBjbG9zZSDliJfooajph4zpnaJcclxuICAgIC8vICAgICAgICAgbGV0IG1pbkZWYWx1ZU5vZGUgPSB0aGlzLm9wZW5MaXN0LnNwbGljZShtaW5GVmFsdWVOb2RlSW5kZXgsIDEpWzBdO1xyXG4gICAgLy8gICAgICAgICBpZiAobWluRlZhbHVlTm9kZS54ID09PSBlbmRQb3MueCAmJiBtaW5GVmFsdWVOb2RlLnkgPT09IGVuZFBvcy55KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOe7iOeCueS6hlwiKTtcclxuICAgIC8vICAgICAgICAgICAgIC8v5om+5Yiw57uI54K55LmL5ZCOIOW8gOWni+aehOmAoOWIl+ihqFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gbGlzdC5wdXNoKG1pbkZWYWx1ZU5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBtaW5GVmFsdWVOb2RlO1xyXG4gICAgLy8gICAgICAgICAgICAgd2hpbGUgKCEoY3VycmVudE5vZGUueCA9PT0gc3RhcnRQb3MueCAmJiBjdXJyZW50Tm9kZS55ID09PSBzdGFydFBvcy55KSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxpc3QucHVzaChjdXJyZW50Tm9kZS5wYXJlbnROb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmNsb3NlTGlzdC5wdXNoKG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgLy8gICAgICAgICBsZXQgbmVhcmJ5Tm9kZUxpc3QgPSB0aGlzLmZpbmROZWFyYnlOb2RlTGlzdChtaW5GVmFsdWVOb2RlKTtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWFyYnlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gbmVhcmJ5Tm9kZUxpc3RbaV07XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0NlbGxOb2RlSXNJbkxpc3QoY2VsbE5vZGUsIHRoaXMuY2xvc2VMaXN0KSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDZWxsTm9kZUlzSW5MaXN0KGNlbGxOb2RlLCB0aGlzLm9wZW5MaXN0KSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8v5Zyob3BlbiDliJfooajph4zpnaIg77yM6YKj5LmI6ZyA6KaB6YeN5paw6K6h566X5LiA5LiL77yM5q2k54K56K6+572u5paw55qE54i26IqC54K555qEIGZ2YWx1ZSDkuI7ogIHnmoRmdmFsdWXlgLznmoTlpKflsI9cclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgbmV3R1ZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0d2YWx1ZShtaW5GVmFsdWVOb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAobmV3R1ZhbHVlIDwgY2VsbE5vZGUuZ1ZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLnNldFBhcmVudE5vZGUobWluRlZhbHVlTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLmdWYWx1ZSA9IGNlbGxOb2RlLnByb2Nlc3NHdmFsdWUobWluRlZhbHVlTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNlbGxOb2RlLmhWYWx1ZSA9IGNlbGxOb2RlLnByb2Nlc3NIVmFsdWUoZW5kTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvL+iuvue9rueItuiKgueCue+8jOW5tuS4lOiuoeeul2ZWYWxldVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNlbGxOb2RlLnNldFBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsTm9kZS5zZXRQYXJlbnROb2RlKG1pbkZWYWx1ZU5vZGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGxOb2RlLmdWYWx1ZSA9IGNlbGxOb2RlLnByb2Nlc3NHdmFsdWUoY2VsbE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbE5vZGUuaFZhbHVlID0gY2VsbE5vZGUucHJvY2Vzc0hWYWx1ZShlbmROb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm9wZW5MaXN0LnB1c2goY2VsbE5vZGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsaXN0ID0gbGlzdC5yZXZlcnNlKCk7XHJcbiAgICAvLyAgICAgbGV0IHBvc0xpc3QgPSBbXTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgcG9zTGlzdC5wdXNoKGxpc3RbaV0ubm9kZS5wb3NpdGlvbilcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHBvc0xpc3Q7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja0NlbGxOb2RlSXNJbkxpc3QodGFyZ2V0Q2VsbE5vZGU6IENlbGxOb2RlLCBub2RlTGlzdDogQ2VsbE5vZGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG5vZGUgPSBub2RlTGlzdFtpXTtcclxuICAgIC8vICAgICAgICAgaWYgKG5vZGUueCA9PT0gdGFyZ2V0Q2VsbE5vZGUueCAmJiBub2RlLnkgPT09IHRhcmdldENlbGxOb2RlLnkpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8v5Zyo5q2k5YiX6KGo6YeM6Z2i5om+5Yiw5LqG77yM55uu5qCH6IqC54K5XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmaW5kRlZhbHVlTWluTm9kZUluZGV4KGxpc3Q6IENlbGxOb2RlW10pOiBudW1iZXIge1xyXG4gICAgLy8gICAgIC8v5om+5YiwZuWAvOacgOWwj+eahOeCuVxyXG4gICAgLy8gICAgIGxldCBtaW5WYWx1ZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAvLyAgICAgbGV0IGluZGV4ID0gbnVsbDtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG5vZGUgPSBsaXN0W2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAobm9kZS5nZXRGVmFsdWUoKSA8IG1pblZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBtaW5WYWx1ZSA9IG5vZGUuZ2V0RlZhbHVlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBpbmRleDtcclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBmaW5kTmVhcmJ5Tm9kZUxpc3QoY3VycmVudENlbGxOb2RlOiBDZWxsTm9kZSk6IENlbGxOb2RlW10ge1xyXG4gICAgLy8gICAgIC8v5om+5Yiw6ZmE6L+R54K555qEIOWIl+ihqFxyXG4gICAgLy8gICAgIGxldCBkaXJMaXN0ID0gW1xyXG4gICAgLy8gICAgICAgICBbMCwgMV0sXHJcbiAgICAvLyAgICAgICAgIFsxLCAxXSxcclxuICAgIC8vICAgICAgICAgWzEsIDBdLFxyXG4gICAgLy8gICAgICAgICBbMSwgLTFdLFxyXG4gICAgLy8gICAgICAgICBbMCwgLTFdLFxyXG4gICAgLy8gICAgICAgICBbLTEsIC0xXSxcclxuICAgIC8vICAgICAgICAgWy0xLCAwXSxcclxuICAgIC8vICAgICAgICAgWy0xLCAxXVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgZGlyID0gZGlyTGlzdFtpXTtcclxuICAgIC8vICAgICAgICAgbGV0IHggPSBjdXJyZW50Q2VsbE5vZGUueCArIGRpclswXTtcclxuICAgIC8vICAgICAgICAgbGV0IHkgPSBjdXJyZW50Q2VsbE5vZGUueSArIGRpclsxXTtcclxuICAgIC8vICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXBOb2RlTGlzdC5nZXRWYWx1ZSh4LCB5KTtcclxuICAgIC8vICAgICAgICAgaWYgKGNlbGxOb2RlICYmICFjZWxsTm9kZS5vblRhcmdldE5vZGUpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8v5q2k54K55a2Y5Zyo77yM5bm25LiU5q2k54K577yM5LiK5rKh5pyJ5YW25LuW55qE6Zqc56KN54mpXHJcbiAgICAvLyAgICAgICAgICAgICBsaXN0LnB1c2goY2VsbE5vZGUpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gbGlzdDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG4gICAgZ2V0T2JzUG9zTGlzdCgpIHtcclxuICAgICAgICAvL+iOt+WPlumanOeijeeJqeWIl+ihqFxyXG4gICAgICAgIHJldHVybiB0aGlzLm9ic05vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgZ2V0TWFwU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdjIodGhpcy5tYXBXaWR0aCwgdGhpcy5tYXBIZWlnaHQpXHJcbiAgICB9XHJcbn1cclxuIl19