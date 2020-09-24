System.register(["cc", "code-quality:cr", "../util/BezierN.js", "./EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Vec3, v3, Tween, Quat, BezierN, EnemyBase, _crd, ccclass, property, EnemyColonyCom;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfBezierN(extras) {
    _reporterNs.report("BezierN", "../util/BezierN", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./EnemyBase", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      Quat = _cc.Quat;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilBezierNJs) {
      BezierN = _utilBezierNJs.BezierN;
    }, function (_EnemyBaseJs) {
      EnemyBase = _EnemyBaseJs.EnemyBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dd328sjHD1OM4+6gaUYeHWb", "EnemyColonyCom", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyColonyCom", EnemyColonyCom = /*#__PURE__*/function () {
        //敌人移动的集群组件
        //当前的检查方向的时间节点
        //当前的移动方向
        //目标节点
        // private 
        //当前的敌人节点
        //是不是领头羊
        // // private bezier: BezierN = null;
        // private state: State = new State();
        //跟随领头羊的力的权重
        function EnemyColonyCom(groupNodeList, targetNode, ctlPointList) {
          _classCallCheck(this, EnemyColonyCom);

          this.currentCheckDuraction = 0;
          this.currentMoveDir = new Vec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
          this.targetNode = null;
          this.currentNodeList = [];
          this.isFirstTargetNode = false;
          this.movePathList = null;
          this.currentMoveTw = null;
          this.fenliForceWeight = 10;
          this.juheliForceWeight = 1;
          this.duilieliWeight = 1;
          this.floowerfirstNodeWeight = 5;
          this.fenliDistance = 4;
          this.juheDistance = 6;
          this.duilieDistance = 60;
          this.currentPathListIndex = 0;
          //
          //用列表的第一个节点作为领头羊
          // let ctlPos = [v3(0, 0), v3(10, 10), v3(2, 2), v3(2, 7), v3(4, 4)];
          this.movePathList = new (_crd && BezierN === void 0 ? (_reportPossibleCrUseOfBezierN({
            error: Error()
          }), BezierN) : BezierN)(ctlPointList).getPointList(200);
          this.targetNode = targetNode; //当前的目标节点

          this.currentNodeList = groupNodeList; //当前的需要控制的节点列表
          // if (groupNodeList[0].uuid === this.targetNode.uuid) {
          //     this.isFisrtTargetNode = true
          // }
        }

        _createClass(EnemyColonyCom, [{
          key: "update",
          value: function update(delatTime) {
            if (this.isFirstTargetNode) {
              //如果是领头羊
              return;
            } // if (this.currentCheckDuraction > 0.1) {
            //     this.currentCheckDuraction = 0;
            // } else {
            //     this.currentCheckDuraction += delatTime;
            // }


            var sumForce = this.processCheckDir().normalize(); // console.log("sum force", sumForce);

            this.currentMoveDir = v3(this.currentMoveDir).add(sumForce.multiplyScalar(delatTime));
            this.targetNode.position = v3(this.targetNode.position).add(v3(this.currentMoveDir).multiplyScalar(delatTime)); // this.targetNode

            var quat = new Quat();
            Quat.fromViewUp(quat, v3(this.currentMoveDir).normalize().multiplyScalar(-1), Vec3.UP); // let outQ = quat;

            var q = new Quat();
            Quat.lerp(q, new Quat(this.targetNode.rotation), quat, delatTime);
            this.targetNode.rotation = q; // this.targetNode.ro
          }
        }, {
          key: "processLisanForce",
          value: function processLisanForce() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.uuid !== this.targetNode.uuid && node.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).getColonyComCtl()) {
                var dis = v3(node.position).subtract(this.targetNode.position).length();

                if (dis < this.fenliDistance) {
                  nodeList.push(node);
                }
              }
            } // console.log("process lissan force", nodeList.length);


            if (nodeList.length > 0) {
              var sumForce = v3(0, 0, 0);

              for (var _i = 0; _i < nodeList.length; _i++) {
                var position = nodeList[_i].position;
                var dir = v3(this.targetNode.position).subtract(position); // console.log("dir", dir);
                // let force = dir.normalize().multiplyScalar(1 / dir.length());
                // console.log("force", force);

                sumForce.add(dir);
              }

              sumForce.multiplyScalar(this.fenliForceWeight);
              return sumForce; // return sumForce;
            }

            return v3(0, 0, 0);
          }
        }, {
          key: "processJuHeForce",
          value: function processJuHeForce() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).getColonyComCtl()) {
                var dis = v3(node.position).subtract(this.targetNode.position).length();

                if (dis > this.juheDistance) {
                  nodeList.push(node);
                }
              }
            }

            var middlePos = v3(0, 0, 0);

            for (var _i2 = 0; _i2 < nodeList.length; _i2++) {
              var position = nodeList[_i2].position;
              middlePos.add(position);
            }

            if (nodeList.length > 0) {
              middlePos = middlePos.multiplyScalar(1 / nodeList.length);
              var dir = v3(middlePos).subtract(this.targetNode.position);
              return dir.multiplyScalar(this.juheliForceWeight);
            }

            return v3(0, 0, 0);
          }
        }, {
          key: "processDuiLieForce",
          value: function processDuiLieForce() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).getColonyComCtl()) {
                var dis = v3(node.position).subtract(this.targetNode.position).length();

                if (dis <= this.duilieDistance) {
                  nodeList.push(node);
                }
              }
            }

            var dir = v3(0, 0, 0);

            if (nodeList.length > 0) {
              for (var _i3 = 0; _i3 < nodeList.length; _i3++) {
                // dir.add(nodeList[i].forward);
                var _node = nodeList[_i3]; // let colonyCtlDir = node.getComponent(EnemyBase).getColonyComCtl().getCurrentMoveDir();

                var enemyBase = _node.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase);

                dir.add(enemyBase.getColonyComCtl().getCurrentMoveDir());
              }

              return dir.multiplyScalar(this.duilieliWeight * (1 / nodeList.length));
            }

            return v3(0, 0, 0);
          }
        }, {
          key: "processCheckDir",
          value: function processCheckDir() {
            var nodeList = [];

            for (var i = 0; i < this.currentNodeList.length; i++) {
              var node = this.currentNodeList[i];

              if (node.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                error: Error()
              }), EnemyBase) : EnemyBase).getColonyComCtl()) {
                nodeList.push(node);

                if (nodeList.length === 1) {
                  if (nodeList[0].uuid === this.targetNode.uuid) {
                    this.isFirstTargetNode = true;
                    this.processMoveTween();
                    return v3(0, 0, 0); // return v3(0, 0, 0);
                  }

                  break;
                }
              }
            }

            var byFirstNodeForce = this.processByFirstNodeForce(nodeList[0]);
            var liesanForce = this.processLisanForce();
            var duilieForce = this.processDuiLieForce();
            var juheForce = this.processJuHeForce(); // console.log("lisan force", liesanForce);
            // console.log("duilie force", duilieForce);
            // console.log("juheforce", juheForce);

            return liesanForce.add(duilieForce).add(juheForce).add(byFirstNodeForce);
          }
        }, {
          key: "processByFirstNodeForce",
          value: function processByFirstNodeForce(firstNode) {
            //第一个速度
            var force = v3(firstNode.position).subtract(this.targetNode.position);
            return force.multiplyScalar(this.floowerfirstNodeWeight);
          }
        }, {
          key: "processMoveTween",
          value: function processMoveTween() {
            var tw = new Tween(this.targetNode);
            this.currentMoveTw = tw;
            tw.set({
              position: this.movePathList[0]
            });

            var processTw = function processTw(targetTw, pos, endPos) {
              var length = v3(endPos).subtract(pos).length(); // this.targetNode.worldRotation
              // let dir = v3(startPos).subtract(targetPoint).normalize();
              // let quat = new Quat();
              // quat.lerp
              // Quat.fromViewUp(quat, dir, Vec3.UP);

              var dir = v3(pos).subtract(endPos).normalize();
              var quat = new Quat();
              Quat.fromViewUp(quat, dir, Vec3.UP); // let currentRotation = this.targetNode.rotation;
              // let currentQuat = new Quat(currentRotation).lerp(quat, 0.1);
              // targetTw.by(0.1, {
              //     rotation: currentQuat
              // })
              // targetTw.set({
              //     rotation: quat
              // });

              targetTw.to(length / 5, {
                position: pos,
                rotation: quat
              });
            };

            for (var i = 1; i < this.movePathList.length - 1; i++) {
              var pos = this.movePathList[i];
              var endPos = this.movePathList[i + 1];
              processTw(tw, pos, endPos);
            } // tw.start();


            new Tween(this.targetNode).repeatForever(tw).start();
          }
        }, {
          key: "processPathListDir",
          value: function processPathListDir() {//处理路径的方向
          }
        }, {
          key: "getCurrentMoveDir",
          value: function getCurrentMoveDir() {
            return this.currentMoveDir;
          }
        }]);

        return EnemyColonyCom;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteXMvRW5lbXlDb2xvbnlDb20udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlZlYzMiLCJ2MyIsIlR3ZWVuIiwiUXVhdCIsIkJlemllck4iLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUNvbG9ueUNvbSIsImdyb3VwTm9kZUxpc3QiLCJ0YXJnZXROb2RlIiwiY3RsUG9pbnRMaXN0IiwiY3VycmVudENoZWNrRHVyYWN0aW9uIiwiY3VycmVudE1vdmVEaXIiLCJNYXRoIiwicmFuZG9tIiwiY3VycmVudE5vZGVMaXN0IiwiaXNGaXJzdFRhcmdldE5vZGUiLCJtb3ZlUGF0aExpc3QiLCJjdXJyZW50TW92ZVR3IiwiZmVubGlGb3JjZVdlaWdodCIsImp1aGVsaUZvcmNlV2VpZ2h0IiwiZHVpbGllbGlXZWlnaHQiLCJmbG9vd2VyZmlyc3ROb2RlV2VpZ2h0IiwiZmVubGlEaXN0YW5jZSIsImp1aGVEaXN0YW5jZSIsImR1aWxpZURpc3RhbmNlIiwiY3VycmVudFBhdGhMaXN0SW5kZXgiLCJnZXRQb2ludExpc3QiLCJkZWxhdFRpbWUiLCJzdW1Gb3JjZSIsInByb2Nlc3NDaGVja0RpciIsIm5vcm1hbGl6ZSIsImFkZCIsIm11bHRpcGx5U2NhbGFyIiwicG9zaXRpb24iLCJxdWF0IiwiZnJvbVZpZXdVcCIsIlVQIiwicSIsImxlcnAiLCJyb3RhdGlvbiIsIm5vZGVMaXN0IiwiaSIsImxlbmd0aCIsIm5vZGUiLCJ1dWlkIiwiZ2V0Q29tcG9uZW50IiwiZ2V0Q29sb255Q29tQ3RsIiwiZGlzIiwic3VidHJhY3QiLCJwdXNoIiwiZGlyIiwibWlkZGxlUG9zIiwiZW5lbXlCYXNlIiwiZ2V0Q3VycmVudE1vdmVEaXIiLCJwcm9jZXNzTW92ZVR3ZWVuIiwiYnlGaXJzdE5vZGVGb3JjZSIsInByb2Nlc3NCeUZpcnN0Tm9kZUZvcmNlIiwibGllc2FuRm9yY2UiLCJwcm9jZXNzTGlzYW5Gb3JjZSIsImR1aWxpZUZvcmNlIiwicHJvY2Vzc0R1aUxpZUZvcmNlIiwianVoZUZvcmNlIiwicHJvY2Vzc0p1SGVGb3JjZSIsImZpcnN0Tm9kZSIsImZvcmNlIiwidHciLCJzZXQiLCJwcm9jZXNzVHciLCJ0YXJnZXRUdyIsInBvcyIsImVuZFBvcyIsInRvIiwicmVwZWF0Rm9yZXZlciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFrQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ25DQyxNQUFBQSxPLGtCQUFBQSxPOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7Z0NBQ0pDLGM7QUFDVDtBQUMyQztBQUM2RDtBQUN2RTtBQUNqQztBQUNzQztBQUNLO0FBQzNDO0FBRUE7QUFNb0M7QUFRcEMsZ0NBQVlDLGFBQVosRUFBbUNDLFVBQW5DLEVBQXFEQyxZQUFyRCxFQUEyRTtBQUFBOztBQUFBLGVBdEJuRUMscUJBc0JtRSxHQXRCbkMsQ0FzQm1DO0FBQUEsZUFyQm5FQyxjQXFCbUUsR0FyQjVDLElBQUliLElBQUosQ0FBU2MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXpCLEVBQThCRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBOUMsRUFBbURELElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFuRSxDQXFCNEM7QUFBQSxlQXBCbkVMLFVBb0JtRSxHQXBCaEQsSUFvQmdEO0FBQUEsZUFsQm5FTSxlQWtCbUUsR0FsQnpDLEVBa0J5QztBQUFBLGVBakJuRUMsaUJBaUJtRSxHQWpCdEMsS0FpQnNDO0FBQUEsZUFmbkVDLFlBZW1FLEdBZjVDLElB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWdDLGNBQUFBLFFBQVEsQ0FBQ0csRUFBVCxDQUFZN0IsTUFBTSxHQUFHLENBQXJCLEVBQXdCO0FBQ3BCVCxnQkFBQUEsUUFBUSxFQUFFb0MsR0FEVTtBQUVwQjlCLGdCQUFBQSxRQUFRLEVBQUVMO0FBRlUsZUFBeEI7QUFNSCxhQXpCRDs7QUEwQkEsaUJBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLekIsWUFBTCxDQUFrQjBCLE1BQWxCLEdBQTJCLENBQS9DLEVBQWtERCxDQUFDLEVBQW5ELEVBQXVEO0FBQ25ELGtCQUFJNEIsR0FBRyxHQUFHLEtBQUtyRCxZQUFMLENBQWtCeUIsQ0FBbEIsQ0FBVjtBQUNBLGtCQUFJNkIsTUFBTSxHQUFHLEtBQUt0RCxZQUFMLENBQWtCeUIsQ0FBQyxHQUFHLENBQXRCLENBQWI7QUFDQTBCLGNBQUFBLFNBQVMsQ0FBQ0YsRUFBRCxFQUFLSSxHQUFMLEVBQVVDLE1BQVYsQ0FBVDtBQUNILGFBcENjLENBcUNmOzs7QUFFQSxnQkFBSXRFLEtBQUosQ0FBVSxLQUFLUSxVQUFmLEVBQTJCZ0UsYUFBM0IsQ0FBeUNQLEVBQXpDLEVBQTZDUSxLQUE3QztBQUNIOzs7K0NBQ29CLENBQ2pCO0FBRUg7Ozs4Q0FDbUI7QUFDaEIsbUJBQU8sS0FBSzlELGNBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIE5vZGUsIFZlYzMsIHYzLCBUd2VlbiwgUXVhdCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmV6aWVyTiB9IGZyb20gJy4uL3V0aWwvQmV6aWVyTic7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vRW5lbXlCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29sb255Q29tIHtcclxuICAgIC8v5pWM5Lq656e75Yqo55qE6ZuG576k57uE5Lu2XHJcbiAgICBwcml2YXRlIGN1cnJlbnRDaGVja0R1cmFjdGlvbjogbnVtYmVyID0gMDsgLy/lvZPliY3nmoTmo4Dmn6XmlrnlkJHnmoTml7bpl7ToioLngrlcclxuICAgIHByaXZhdGUgY3VycmVudE1vdmVEaXI6IFZlYzMgPSBuZXcgVmVjMyhNYXRoLnJhbmRvbSgpIC0gMC41LCBNYXRoLnJhbmRvbSgpIC0gMC41LCBNYXRoLnJhbmRvbSgpIC0gMC41KTsgLy/lvZPliY3nmoTnp7vliqjmlrnlkJFcclxuICAgIHByaXZhdGUgdGFyZ2V0Tm9kZTogTm9kZSA9IG51bGw7IC8v55uu5qCH6IqC54K5XHJcbiAgICAvLyBwcml2YXRlIFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdOyAvL+W9k+WJjeeahOaVjOS6uuiKgueCuVxyXG4gICAgcHJpdmF0ZSBpc0ZpcnN0VGFyZ2V0Tm9kZTogQm9vbGVhbiA9IGZhbHNlOy8v5piv5LiN5piv6aKG5aS0576KXHJcbiAgICAvLyAvLyBwcml2YXRlIGJlemllcjogQmV6aWVyTiA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1vdmVQYXRoTGlzdDogVmVjM1tdID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb3ZlVHc6IFR3ZWVuID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGZlbmxpRm9yY2VXZWlnaHQgPSAxMDtcclxuICAgIHByaXZhdGUganVoZWxpRm9yY2VXZWlnaHQgPSAxO1xyXG4gICAgcHJpdmF0ZSBkdWlsaWVsaVdlaWdodCA9IDE7XHJcbiAgICBwcml2YXRlIGZsb293ZXJmaXJzdE5vZGVXZWlnaHQgPSA1OyAvL+i3n+maj+mihuWktOe+iueahOWKm+eahOadg+mHjVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGZlbmxpRGlzdGFuY2UgPSA0O1xyXG4gICAgcHJpdmF0ZSBqdWhlRGlzdGFuY2UgPSA2O1xyXG4gICAgcHJpdmF0ZSBkdWlsaWVEaXN0YW5jZSA9IDYwO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFBhdGhMaXN0SW5kZXggPSAwO1xyXG4gICAgY29uc3RydWN0b3IoZ3JvdXBOb2RlTGlzdDogTm9kZVtdLCB0YXJnZXROb2RlOiBOb2RlLCBjdGxQb2ludExpc3Q6IFZlYzNbXSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy/nlKjliJfooajnmoTnrKzkuIDkuKroioLngrnkvZzkuLrpooblpLTnvopcclxuICAgICAgICAvLyBsZXQgY3RsUG9zID0gW3YzKDAsIDApLCB2MygxMCwgMTApLCB2MygyLCAyKSwgdjMoMiwgNyksIHYzKDQsIDQpXTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlUGF0aExpc3QgPSBuZXcgQmV6aWVyTihjdGxQb2ludExpc3QpLmdldFBvaW50TGlzdCgyMDApO1xyXG5cclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXROb2RlOyAvL+W9k+WJjeeahOebruagh+iKgueCuVxyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGVMaXN0ID0gZ3JvdXBOb2RlTGlzdDsgLy/lvZPliY3nmoTpnIDopoHmjqfliLbnmoToioLngrnliJfooahcclxuICAgICAgICAvLyBpZiAoZ3JvdXBOb2RlTGlzdFswXS51dWlkID09PSB0aGlzLnRhcmdldE5vZGUudXVpZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzRmlzcnRUYXJnZXROb2RlID0gdHJ1ZVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWxhdFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RUYXJnZXROb2RlKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv6aKG5aS0576KXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudENoZWNrRHVyYWN0aW9uID4gMC4xKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudENoZWNrRHVyYWN0aW9uID0gMDtcclxuXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50Q2hlY2tEdXJhY3Rpb24gKz0gZGVsYXRUaW1lO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IHN1bUZvcmNlID0gdGhpcy5wcm9jZXNzQ2hlY2tEaXIoKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1bSBmb3JjZVwiLCBzdW1Gb3JjZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZURpciA9IHYzKHRoaXMuY3VycmVudE1vdmVEaXIpLmFkZChzdW1Gb3JjZS5tdWx0aXBseVNjYWxhcihkZWxhdFRpbWUpKTtcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUucG9zaXRpb24gPSB2Myh0aGlzLnRhcmdldE5vZGUucG9zaXRpb24pLmFkZCh2Myh0aGlzLmN1cnJlbnRNb3ZlRGlyKS5tdWx0aXBseVNjYWxhcihkZWxhdFRpbWUpKTtcclxuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGVcclxuICAgICAgICBsZXQgcXVhdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIHYzKHRoaXMuY3VycmVudE1vdmVEaXIpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKC0xKSwgVmVjMy5VUCk7XHJcbiAgICAgICAgLy8gbGV0IG91dFEgPSBxdWF0O1xyXG4gICAgICAgIGxldCBxID0gbmV3IFF1YXQoKTtcclxuICAgICAgICBRdWF0LmxlcnAocSwgbmV3IFF1YXQodGhpcy50YXJnZXROb2RlLnJvdGF0aW9uKSwgcXVhdCwgZGVsYXRUaW1lKTtcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUucm90YXRpb24gPSBxO1xyXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0Tm9kZS5yb1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0xpc2FuRm9yY2UoKTogVmVjMyB7XHJcblxyXG4gICAgICAgIGxldCBub2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnROb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3VycmVudE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAobm9kZS51dWlkICE9PSB0aGlzLnRhcmdldE5vZGUudXVpZCAmJiBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldENvbG9ueUNvbUN0bCgpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdjMobm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy50YXJnZXROb2RlLnBvc2l0aW9uKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPCB0aGlzLmZlbmxpRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3MgbGlzc2FuIGZvcmNlXCIsIG5vZGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKG5vZGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHN1bUZvcmNlOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG5vZGVMaXN0W2ldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHYzKHRoaXMudGFyZ2V0Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXJcIiwgZGlyKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBmb3JjZSA9IGRpci5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcigxIC8gZGlyLmxlbmd0aCgpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9yY2VcIiwgZm9yY2UpO1xyXG4gICAgICAgICAgICAgICAgc3VtRm9yY2UuYWRkKGRpcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VtRm9yY2UubXVsdGlwbHlTY2FsYXIodGhpcy5mZW5saUZvcmNlV2VpZ2h0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1bUZvcmNlO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHN1bUZvcmNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHYzKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0p1SGVGb3JjZSgpOiBWZWMzIHtcclxuICAgICAgICBsZXQgbm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmN1cnJlbnROb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q29sb255Q29tQ3RsKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myhub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLnRhcmdldE5vZGUucG9zaXRpb24pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA+IHRoaXMuanVoZURpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1pZGRsZVBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbm9kZUxpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIG1pZGRsZVBvcy5hZGQocG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtaWRkbGVQb3MgPSBtaWRkbGVQb3MubXVsdGlwbHlTY2FsYXIoMSAvIG5vZGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB2MyhtaWRkbGVQb3MpLnN1YnRyYWN0KHRoaXMudGFyZ2V0Tm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXIubXVsdGlwbHlTY2FsYXIodGhpcy5qdWhlbGlGb3JjZVdlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2MygwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NEdWlMaWVGb3JjZSgpOiBWZWMzIHtcclxuICAgICAgICBsZXQgbm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmN1cnJlbnROb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q29sb255Q29tQ3RsKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB2Myhub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLnRhcmdldE5vZGUucG9zaXRpb24pLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA8PSB0aGlzLmR1aWxpZURpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlyID0gdjMoMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGlmIChub2RlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIGRpci5hZGQobm9kZUxpc3RbaV0uZm9yd2FyZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbG9ueUN0bERpciA9IG5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0Q29sb255Q29tQ3RsKCkuZ2V0Q3VycmVudE1vdmVEaXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteUJhc2UgPSBub2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpO1xyXG4gICAgICAgICAgICAgICAgZGlyLmFkZChlbmVteUJhc2UuZ2V0Q29sb255Q29tQ3RsKCkuZ2V0Q3VycmVudE1vdmVEaXIoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRpci5tdWx0aXBseVNjYWxhcih0aGlzLmR1aWxpZWxpV2VpZ2h0ICogKDEgLyBub2RlTGlzdC5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHYzKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0NoZWNrRGlyKCk6IFZlYzMge1xyXG4gICAgICAgIGxldCBub2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnROb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3VycmVudE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5nZXRDb2xvbnlDb21DdGwoKSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlTGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZUxpc3RbMF0udXVpZCA9PT0gdGhpcy50YXJnZXROb2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VGFyZ2V0Tm9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc01vdmVUd2VlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB2MygwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBieUZpcnN0Tm9kZUZvcmNlID0gdGhpcy5wcm9jZXNzQnlGaXJzdE5vZGVGb3JjZShub2RlTGlzdFswXSk7XHJcbiAgICAgICAgbGV0IGxpZXNhbkZvcmNlID0gdGhpcy5wcm9jZXNzTGlzYW5Gb3JjZSgpO1xyXG4gICAgICAgIGxldCBkdWlsaWVGb3JjZSA9IHRoaXMucHJvY2Vzc0R1aUxpZUZvcmNlKCk7XHJcbiAgICAgICAgbGV0IGp1aGVGb3JjZSA9IHRoaXMucHJvY2Vzc0p1SGVGb3JjZSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGlzYW4gZm9yY2VcIiwgbGllc2FuRm9yY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHVpbGllIGZvcmNlXCIsIGR1aWxpZUZvcmNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImp1aGVmb3JjZVwiLCBqdWhlRm9yY2UpO1xyXG4gICAgICAgIHJldHVybiBsaWVzYW5Gb3JjZS5hZGQoZHVpbGllRm9yY2UpLmFkZChqdWhlRm9yY2UpLmFkZChieUZpcnN0Tm9kZUZvcmNlKTtcclxuXHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQnlGaXJzdE5vZGVGb3JjZShmaXJzdE5vZGU6IE5vZGUpIHtcclxuICAgICAgICAvL+esrOS4gOS4qumAn+W6plxyXG4gICAgICAgIGxldCBmb3JjZSA9IHYzKGZpcnN0Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy50YXJnZXROb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gZm9yY2UubXVsdGlwbHlTY2FsYXIodGhpcy5mbG9vd2VyZmlyc3ROb2RlV2VpZ2h0KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NNb3ZlVHdlZW4oKSB7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMudGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVR3ID0gdHc7XHJcbiAgICAgICAgdHcuc2V0KHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMubW92ZVBhdGhMaXN0WzBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBwcm9jZXNzVHcgPSAodGFyZ2V0VHc6IFR3ZWVuLCBwb3MsIGVuZFBvcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gdjMoZW5kUG9zKS5zdWJ0cmFjdChwb3MpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUud29ybGRSb3RhdGlvblxyXG4gICAgICAgICAgICAvLyBsZXQgZGlyID0gdjMoc3RhcnRQb3MpLnN1YnRyYWN0KHRhcmdldFBvaW50KS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgLy8gbGV0IHF1YXQgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgICAgICAvLyBxdWF0LmxlcnBcclxuICAgICAgICAgICAgLy8gUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB2Myhwb3MpLnN1YnRyYWN0KGVuZFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBxdWF0ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICAgICAgUXVhdC5mcm9tVmlld1VwKHF1YXQsIGRpciwgVmVjMy5VUCk7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFJvdGF0aW9uID0gdGhpcy50YXJnZXROb2RlLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFF1YXQgPSBuZXcgUXVhdChjdXJyZW50Um90YXRpb24pLmxlcnAocXVhdCwgMC4xKTtcclxuICAgICAgICAgICAgLy8gdGFyZ2V0VHcuYnkoMC4xLCB7XHJcbiAgICAgICAgICAgIC8vICAgICByb3RhdGlvbjogY3VycmVudFF1YXRcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdGFyZ2V0VHcuc2V0KHtcclxuICAgICAgICAgICAgLy8gICAgIHJvdGF0aW9uOiBxdWF0XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB0YXJnZXRUdy50byhsZW5ndGggLyA1LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zLFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHF1YXRcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLm1vdmVQYXRoTGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubW92ZVBhdGhMaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5tb3ZlUGF0aExpc3RbaSArIDFdO1xyXG4gICAgICAgICAgICBwcm9jZXNzVHcodHcsIHBvcywgZW5kUG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVHdlZW4odGhpcy50YXJnZXROb2RlKS5yZXBlYXRGb3JldmVyKHR3KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc1BhdGhMaXN0RGlyKCkge1xyXG4gICAgICAgIC8v5aSE55CG6Lev5b6E55qE5pa55ZCRXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudE1vdmVEaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1vdmVEaXI7XHJcbiAgICB9XHJcbn1cclxuIl19