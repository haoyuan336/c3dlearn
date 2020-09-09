System.register(["cc", "code-quality:cr", "../GameController.js", "../Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, CCInteger, isValid, v3, UITransformComponent, find, CameraComponent, SpriteFrame, SpriteComponent, view, Tween, GameController, TowerBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, SkillCtl;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "../Towers/TowerBase", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      isValid = _cc.isValid;
      v3 = _cc.v3;
      UITransformComponent = _cc.UITransformComponent;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      view = _cc.view;
      Tween = _cc.Tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "40520LpyUZJx6EmYjb+U/Iw", "SkillCtl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkillCtl", SkillCtl = (_dec = ccclass('SkillCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SkillCtl, _Component);

        function SkillCtl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SkillCtl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SkillCtl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "\u72C2\u66B4\u9053\u5177Prefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "\u72C2\u66B4\u9053\u5177SpriteFrameRed", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "\u72C2\u66B4\u9053\u5177SpriteFrameGray", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillsNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentSkillCount", _descriptor5, _assertThisInitialized(_this));

          _this.skillNodeList = [];
          _this.currentTouchNode = null;
          _this.cameraNodeCom = null;
          _this.gameController = null;
          _this.skillBgNodeList = [];
          _this.timeoutResolve = undefined;
          _this.rayCheckResolve = undefined;
          _this.targetTower = undefined;
          return _this;
        }

        _createClass(SkillCtl, [{
          key: "onLoad",
          //释放技能的目标塔
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.gameController = find("GameController").getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            this.gameController.node.on("touch-screen-to-3d", function (resultList) {
              //玩家射中了一个 tower
              for (var i = 0; i < resultList.length; i++) {
                var result = resultList[i];

                if (result.collider && result.collider.node) {
                  if (result.collider.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                    error: Error()
                  }), TowerBase) : TowerBase)) {
                    // console.log("点中了tower  skill node");
                    if (_this2.rayCheckResolve) {
                      _this2.targetTower = result.collider.node;

                      _this2.rayCheckResolve('check-succ');

                      _this2.rayCheckResolve = undefined;
                      break;
                    }
                  }
                }
              }
            });
            this.cameraNodeCom = find("Camera").getComponent(CameraComponent); //首先绘制， 技能豆的背景

            var activeSkillCount = this.gameController.playerData.currentActiveSkillCount;

            for (var i = 0; i < activeSkillCount; i++) {
              var node = new Node();
              var sprite = node.addComponent(SpriteComponent);
              sprite.spriteFrame = this.狂暴道具SpriteFrameGray;
              node.addComponent(UITransformComponent);
              node.position = v3(i * 110 - 320, 0);
              node.parent = this.skillsNode;
              this.skillBgNodeList.push(node);
            } //根据当前，技能豆的个数，初始化，技能都


            var currentSkillCount = this.gameController.playerData.currentSkillCount;

            for (var _i = 0; _i < currentSkillCount; _i++) {
              var _node = new Node();

              var _sprite = _node.addComponent(SpriteComponent);

              _sprite.spriteFrame = this.狂暴道具SpriteFrameRed;

              _node.addComponent(UITransformComponent);

              _node.parent = this.skillsNode;
              _node.position = this.skillBgNodeList[_i].position;
              this.skillNodeList.push(_node);
            } // for (let i = 0; i < this.currentSkillCount; i++) {
            //     let node = instantiate(this.狂暴道具Prefab);
            //     node.parent = this.skillsNode;
            //     node.position = v3(i * 100 - 300, 0, 0);
            //     this.skillNodeList.push(node);
            // }
            // console.log("this skill node lsit", this.skillNodeList);


            this.node.on(Node.EventType.TOUCH_START, function (event) {
              console.log("touch start", event);
              console.log("skill node list", _this2.skillNodeList.length);

              for (var _i2 = 0; _i2 < _this2.skillNodeList.length; _i2++) {
                var _node2 = _this2.skillNodeList[_i2]; // let boundingBox = node.ge

                var boundingBox = _node2.getComponent(UITransformComponent).getBoundingBoxToWorld();

                var pos = event.getLocation();
                console.log(pos);
                console.log("bound ing box", boundingBox);

                if (boundingBox.contains(pos)) {
                  console.log("找到了点");
                  _this2.currentTouchNode = _node2;
                }
              }

              if (_this2.currentTouchNode) {
                _this2.startCheckSkillNode();
              }
            });
            this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
              if (_this2.currentTouchNode) {
                var pos = event.getLocation();

                var endPos = _this2.skillsNode.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));

                _this2.currentTouchNode.position = v3(endPos.x, endPos.y, 0);
              }
            });
            this.node.on(Node.EventType.TOUCH_END, function (event) {
              if (_this2.currentTouchNode) {
                //手上有
                _this2.scheduleOnce(function () {
                  if (_this2.timeoutResolve) {
                    _this2.timeoutResolve('timeout');

                    _this2.timeoutResolve = undefined;
                  }
                }, 0.1);
              }
            });
          }
        }, {
          key: "startCheckSkillNode",
          value: function startCheckSkillNode() {
            var _this3 = this;

            var promiseList = [new Promise(function (resolve, reject) {
              _this3.rayCheckResolve = resolve;
            }), new Promise(function (resolve, reject) {
              _this3.timeoutResolve = resolve;
            })];
            Promise.race(promiseList).then(function (type) {
              //触摸结束 
              if (type === 'timeout') {
                for (var i = 0; i < _this3.skillNodeList.length; i++) {
                  var node = _this3.skillNodeList[i];

                  if (node.uuid === _this3.currentTouchNode.uuid) {
                    _this3.currentTouchNode.position = _this3.skillBgNodeList[i].position;
                    _this3.currentTouchNode = undefined;
                    break;
                  }
                }
              } else {
                console.log("释放技能成功");

                if (isValid(_this3.targetTower)) {
                  console.log("给目标塔发送消息，释放技能"); //如果存在需要释放技能的塔，那么需要让此塔来释放技能
                  // let objectType = this.currentTouchNode.getComponent(KuangBaoSkill).objectType;
                  // console.log("object type", objectType);

                  _this3.targetTower.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                    error: Error()
                  }), TowerBase) : TowerBase).releaseSkill();

                  for (var _i3 = 0; _i3 < _this3.skillNodeList.length; _i3++) {
                    var skillNode = _this3.skillNodeList[_i3];

                    if (skillNode.uuid === _this3.currentTouchNode.uuid) {
                      _this3.skillNodeList.splice(_i3, 1);

                      break;
                    }
                  }

                  _this3.currentTouchNode.destroy();

                  _this3.currentTouchNode = undefined;
                }
              }
            });
          }
        }, {
          key: "showEnterAnim",
          value: function showEnterAnim() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var v = view.getVisibleSize();
              var height = v.height;
              console.log("height", height);
              var tw = new Tween(_this4.skillsNode);
              tw.to(0.2, {
                position: v3(0, height * -0.5 + 74, 0)
              });
              tw.call(function () {
                resolve();
              });
              tw.start();
            });
          }
        }]);

        return SkillCtl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "\u72C2\u66B4\u9053\u5177Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "\u72C2\u66B4\u9053\u5177SpriteFrameRed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "\u72C2\u66B4\u9053\u5177SpriteFrameGray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skillsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currentSkillCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ta2lsbEN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImlzVmFsaWQiLCJ2MyIsIlVJVHJhbnNmb3JtQ29tcG9uZW50IiwiZmluZCIsIkNhbWVyYUNvbXBvbmVudCIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlQ29tcG9uZW50IiwidmlldyIsIlR3ZWVuIiwiR2FtZUNvbnRyb2xsZXIiLCJUb3dlckJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTa2lsbEN0bCIsInR5cGUiLCJza2lsbE5vZGVMaXN0IiwiY3VycmVudFRvdWNoTm9kZSIsImNhbWVyYU5vZGVDb20iLCJnYW1lQ29udHJvbGxlciIsInNraWxsQmdOb2RlTGlzdCIsInRpbWVvdXRSZXNvbHZlIiwidW5kZWZpbmVkIiwicmF5Q2hlY2tSZXNvbHZlIiwidGFyZ2V0VG93ZXIiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwiYWN0aXZlU2tpbGxDb3VudCIsInBsYXllckRhdGEiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsInNwcml0ZSIsImFkZENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwi54uC5pq06YGT5YW3U3ByaXRlRnJhbWVHcmF5IiwicG9zaXRpb24iLCJwYXJlbnQiLCJza2lsbHNOb2RlIiwicHVzaCIsImN1cnJlbnRTa2lsbENvdW50Iiwi54uC5pq06YGT5YW3U3ByaXRlRnJhbWVSZWQiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImJvdW5kaW5nQm94IiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwicG9zIiwiZ2V0TG9jYXRpb24iLCJjb250YWlucyIsInN0YXJ0Q2hlY2tTa2lsbE5vZGUiLCJUT1VDSF9NT1ZFIiwiZW5kUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ4IiwieSIsIlRPVUNIX0VORCIsInNjaGVkdWxlT25jZSIsInByb21pc2VMaXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYWNlIiwidGhlbiIsInV1aWQiLCJyZWxlYXNlU2tpbGwiLCJza2lsbE5vZGUiLCJzcGxpY2UiLCJkZXN0cm95IiwidiIsImdldFZpc2libGVTaXplIiwiaGVpZ2h0IiwidHciLCJ0byIsImNhbGwiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTyxPQUFBQSxPO0FBQXNCQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsb0IsT0FBQUEsb0I7QUFBNkRDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBc0RDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDN09DLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7Ozs7OztBQUdEQyxNQUFBQSxPLEdBQXNCaEIsVSxDQUF0QmdCLE87QUFBU0MsTUFBQUEsUSxHQUFhakIsVSxDQUFiaUIsUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFaEI7QUFBUixPQUFELEMsVUFHUmMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVQ7QUFBUixP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QyxNQUFNLEdBQUdGLENBQUMsQ0FBQ0UsTUFBZjtBQUNBNUIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQjJCLE1BQXRCO0FBQ0Esa0JBQUlDLEVBQUUsR0FBRyxJQUFJckUsS0FBSixDQUFVLE1BQUksQ0FBQ2lDLFVBQWYsQ0FBVDtBQUNBb0MsY0FBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1B2QyxnQkFBQUEsUUFBUSxFQUFFdEMsRUFBRSxDQUFDLENBQUQsRUFBSTJFLE1BQU0sR0FBRyxDQUFDLEdBQVYsR0FBZ0IsRUFBcEIsRUFBd0IsQ0FBeEI7QUFETCxlQUFYO0FBR0FDLGNBQUFBLEVBQUUsQ0FBQ0UsSUFBSCxDQUFRLFlBQU07QUFDVmQsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FZLGNBQUFBLEVBQUUsQ0FBQ0csS0FBSDtBQUNILGFBWk0sQ0FBUDtBQWNIOzs7O1FBaE15QnBGLFM7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHQyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBR1MsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmlldywgUHJlZmFiLCBDQ0ludGVnZXIsIGlzVmFsaWQsIGluc3RhbnRpYXRlLCB2MywgVUlUcmFuc2Zvcm1Db21wb25lbnQsIFBoeXNpY3NTeXN0ZW0sIEV2ZW50VG91Y2gsIFJlY3QsIFZlYzIsIGZpbmQsIENhbWVyYUNvbXBvbmVudCwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgQ29sbGlkZXJDb21wb25lbnQsIFBoeXNpY3NSYXlSZXN1bHQsIHZpZXcsIFR3ZWVuLCB2MiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEt1YW5nQmFvU2tpbGwgfSBmcm9tICcuL+mBk+WFty9LdWFuZ0Jhb1NraWxsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdTa2lsbEN0bCcpXHJcbmV4cG9ydCBjbGFzcyBTa2lsbEN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMg54uC5pq06YGT5YW3UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMg54uC5pq06YGT5YW3U3ByaXRlRnJhbWVSZWQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMg54uC5pq06YGT5YW3U3ByaXRlRnJhbWVHcmF5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2tpbGxzTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudFNraWxsQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbE5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFRvdWNoTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhbWVyYU5vZGVDb206IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBza2lsbEJnTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByaXZhdGUgdG91Y2hFbmRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSB0aW1lb3V0UmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgcmF5Q2hlY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXIgPSB1bmRlZmluZWQ7IC8v6YeK5pS+5oqA6IO955qE55uu5qCH5aGUXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrblsITkuK3kuobkuIDkuKogdG93ZXJcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIgJiYgcmVzdWx0LmNvbGxpZGVyLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnkuK3kuoZ0b3dlciAgc2tpbGwgbm9kZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmF5Q2hlY2tSZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFRvd2VyID0gcmVzdWx0LmNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJheUNoZWNrUmVzb2x2ZSgnY2hlY2stc3VjYycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlDaGVja1Jlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhTm9kZUNvbSA9IGZpbmQoXCJDYW1lcmFcIikuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy/pppblhYjnu5jliLbvvIwg5oqA6IO96LGG55qE6IOM5pmvXHJcbiAgICAgICAgbGV0IGFjdGl2ZVNraWxsQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuY3VycmVudEFjdGl2ZVNraWxsQ291bnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVTa2lsbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy7ni4LmmrTpgZPlhbdTcHJpdGVGcmFtZUdyYXk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKGkgKiAxMTAgLSAzMjAsIDApO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2tpbGxzTm9kZTtcclxuICAgICAgICAgICAgdGhpcy5za2lsbEJnTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5qC55o2u5b2T5YmN77yM5oqA6IO96LGG55qE5Liq5pWw77yM5Yid5aeL5YyW77yM5oqA6IO96YO9XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTa2lsbENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmN1cnJlbnRTa2lsbENvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNraWxsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLueLguaatOmBk+WFt1Nwcml0ZUZyYW1lUmVkO1xyXG4gICAgICAgICAgICBub2RlLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5za2lsbHNOb2RlO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdGhpcy5za2lsbEJnTm9kZUxpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFNraWxsQ291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMu54uC5pq06YGT5YW3UHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNraWxsc05vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MyhpICogMTAwIC0gMzAwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5za2lsbE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBza2lsbCBub2RlIGxzaXRcIiwgdGhpcy5za2lsbE5vZGVMaXN0KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvdWNoIHN0YXJ0XCIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2tpbGwgbm9kZSBsaXN0XCIsIHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsTm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYm91bmRpbmdCb3ggPSBub2RlLmdlXHJcbiAgICAgICAgICAgICAgICBsZXQgYm91bmRpbmdCb3g6IFJlY3QgPSBub2RlLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvdW5kIGluZyBib3hcIiwgYm91bmRpbmdCb3gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5kaW5nQm94LmNvbnRhaW5zKHBvcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJvuWIsOS6hueCuVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDaGVja1NraWxsTm9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQ6IEV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvdWNoTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5za2lsbHNOb2RlLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuY29udmVydFRvTm9kZVNwYWNlQVIodjMocG9zLngsIHBvcy55LCAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUucG9zaXRpb24gPSB2MyhlbmRQb3MueCwgZW5kUG9zLnksIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5LiK5pyJXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dFJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSgndGltZW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRDaGVja1NraWxsTm9kZSgpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgUHJvbWlzZS5yYWNlKHByb21pc2VMaXN0KS50aGVuKCh0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6Kem5pG457uT5p2fIFxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RpbWVvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5za2lsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnV1aWQgPT09IHRoaXMuY3VycmVudFRvdWNoTm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCZ05vZGVMaXN0W2ldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeK5pS+5oqA6IO95oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXRUb3dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIue7meebruagh+WhlOWPkemAgea2iOaBr++8jOmHiuaUvuaKgOiDvVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKjpnIDopoHph4rmlL7mioDog73nmoTloZTvvIzpgqPkuYjpnIDopoHorqnmraTloZTmnaXph4rmlL7mioDog71cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb2JqZWN0VHlwZSA9IHRoaXMuY3VycmVudFRvdWNoTm9kZS5nZXRDb21wb25lbnQoS3VhbmdCYW9Ta2lsbCkub2JqZWN0VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdCB0eXBlXCIsIG9iamVjdFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXIuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkucmVsZWFzZVNraWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNraWxsTm9kZSA9IHRoaXMuc2tpbGxOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNraWxsTm9kZS51dWlkID09PSB0aGlzLmN1cnJlbnRUb3VjaE5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbE5vZGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93RW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVpZ2h0XCIsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnNraWxsc05vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAtMC41ICsgNzQsIDApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=