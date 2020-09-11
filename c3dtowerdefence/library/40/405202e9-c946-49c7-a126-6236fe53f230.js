System.register(["cc", "code-quality:cr", "../GameController.js", "../Towers/TowerBase.js", "./UIController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, CCInteger, isValid, v3, UITransformComponent, find, CameraComponent, SpriteFrame, SpriteComponent, view, Tween, GameController, TowerBase, UIController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, SkillCtl;

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

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UIController", _context.meta, extras);
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
    }, function (_UIControllerJs) {
      UIController = _UIControllerJs.UIController;
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
                // this.gameController
                // this.gameController.setHoldSkillIcon(true);
                _this2.node.getComponent(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
                  error: Error()
                }), UIController) : UIController).setHoldSkillIcon(true);

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
                  // this.gameController.setHoldSkillIcon(false);
                  _this2.node.getComponent(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
                    error: Error()
                  }), UIController) : UIController).setHoldSkillIcon(false);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ta2lsbEN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImlzVmFsaWQiLCJ2MyIsIlVJVHJhbnNmb3JtQ29tcG9uZW50IiwiZmluZCIsIkNhbWVyYUNvbXBvbmVudCIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlQ29tcG9uZW50IiwidmlldyIsIlR3ZWVuIiwiR2FtZUNvbnRyb2xsZXIiLCJUb3dlckJhc2UiLCJVSUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTa2lsbEN0bCIsInR5cGUiLCJza2lsbE5vZGVMaXN0IiwiY3VycmVudFRvdWNoTm9kZSIsImNhbWVyYU5vZGVDb20iLCJnYW1lQ29udHJvbGxlciIsInNraWxsQmdOb2RlTGlzdCIsInRpbWVvdXRSZXNvbHZlIiwidW5kZWZpbmVkIiwicmF5Q2hlY2tSZXNvbHZlIiwidGFyZ2V0VG93ZXIiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwiYWN0aXZlU2tpbGxDb3VudCIsInBsYXllckRhdGEiLCJjdXJyZW50QWN0aXZlU2tpbGxDb3VudCIsInNwcml0ZSIsImFkZENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwi54uC5pq06YGT5YW3U3ByaXRlRnJhbWVHcmF5IiwicG9zaXRpb24iLCJwYXJlbnQiLCJza2lsbHNOb2RlIiwicHVzaCIsImN1cnJlbnRTa2lsbENvdW50Iiwi54uC5pq06YGT5YW3U3ByaXRlRnJhbWVSZWQiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImJvdW5kaW5nQm94IiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwicG9zIiwiZ2V0TG9jYXRpb24iLCJjb250YWlucyIsInNldEhvbGRTa2lsbEljb24iLCJzdGFydENoZWNrU2tpbGxOb2RlIiwiVE9VQ0hfTU9WRSIsImVuZFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInkiLCJUT1VDSF9FTkQiLCJzY2hlZHVsZU9uY2UiLCJwcm9taXNlTGlzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmFjZSIsInRoZW4iLCJ1dWlkIiwicmVsZWFzZVNraWxsIiwic2tpbGxOb2RlIiwic3BsaWNlIiwiZGVzdHJveSIsInYiLCJnZXRWaXNpYmxlU2l6ZSIsImhlaWdodCIsInR3IiwidG8iLCJjYWxsIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxPLE9BQUFBLE87QUFBc0JDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxvQixPQUFBQSxvQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFzREMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSzs7OztBQUM3T0MsTUFBQUEsYyxxQkFBQUEsYzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFHQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JqQixVLENBQXRCaUIsTztBQUFTQyxNQUFBQSxRLEdBQWFsQixVLENBQWJrQixROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVB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a0JBQUEsTUFBSSxDQUFDWixnQkFBTCxDQUFzQjBELE9BQXRCOztBQUNBLGtCQUFBLE1BQUksQ0FBQzFELGdCQUFMLEdBQXdCSyxTQUF4QjtBQUVIO0FBQ0o7QUFFSixhQWhDRDtBQWlDSDs7OzBDQUNlO0FBQUE7O0FBQ1osbUJBQU8sSUFBSTRDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsa0JBQUlRLENBQUMsR0FBR3JFLElBQUksQ0FBQ3NFLGNBQUwsRUFBUjtBQUNBLGtCQUFJQyxNQUFNLEdBQUdGLENBQUMsQ0FBQ0UsTUFBZjtBQUNBN0IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQjRCLE1BQXRCO0FBQ0Esa0JBQUlDLEVBQUUsR0FBRyxJQUFJdkUsS0FBSixDQUFVLE1BQUksQ0FBQ2tDLFVBQWYsQ0FBVDtBQUNBcUMsY0FBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1B4QyxnQkFBQUEsUUFBUSxFQUFFdkMsRUFBRSxDQUFDLENBQUQsRUFBSTZFLE1BQU0sR0FBRyxDQUFDLEdBQVYsR0FBZ0IsRUFBcEIsRUFBd0IsQ0FBeEI7QUFETCxlQUFYO0FBR0FDLGNBQUFBLEVBQUUsQ0FBQ0UsSUFBSCxDQUFRLFlBQU07QUFDVmQsZ0JBQUFBLE9BQU87QUFDVixlQUZEO0FBR0FZLGNBQUFBLEVBQUUsQ0FBQ0csS0FBSDtBQUNILGFBWk0sQ0FBUDtBQWNIOzs7O1FBcE15QnRGLFM7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHQyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBR1MsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmlldywgUHJlZmFiLCBDQ0ludGVnZXIsIGlzVmFsaWQsIGluc3RhbnRpYXRlLCB2MywgVUlUcmFuc2Zvcm1Db21wb25lbnQsIFBoeXNpY3NTeXN0ZW0sIEV2ZW50VG91Y2gsIFJlY3QsIFZlYzIsIGZpbmQsIENhbWVyYUNvbXBvbmVudCwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgQ29sbGlkZXJDb21wb25lbnQsIFBoeXNpY3NSYXlSZXN1bHQsIHZpZXcsIFR3ZWVuLCB2MiB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEt1YW5nQmFvU2tpbGwgfSBmcm9tICcuL+mBk+WFty9LdWFuZ0Jhb1NraWxsJztcclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSUNvbnRyb2xsZXInO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1NraWxsQ3RsJylcclxuZXhwb3J0IGNsYXNzIFNraWxsQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyDni4LmmrTpgZPlhbdQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyDni4LmmrTpgZPlhbdTcHJpdGVGcmFtZVJlZCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyDni4LmmrTpgZPlhbdTcHJpdGVGcmFtZUdyYXkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbHNOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50U2tpbGxDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNraWxsTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VG91Y2hOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FtZXJhTm9kZUNvbTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNraWxsQmdOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0b3VjaEVuZFJlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHRpbWVvdXRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSByYXlDaGVja1Jlc29sdmUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRUb3dlciA9IHVuZGVmaW5lZDsgLy/ph4rmlL7mioDog73nmoTnm67moIfloZRcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgKHJlc3VsdExpc3Q6IFBoeXNpY3NSYXlSZXN1bHRbXSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eOqeWutuWwhOS4reS6huS4gOS4qiB0b3dlclxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlciAmJiByZXN1bHQuY29sbGlkZXIubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueS4reS6hnRvd2VyICBza2lsbCBub2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yYXlDaGVja1Jlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXIgPSByZXN1bHQuY29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlKCdjaGVjay1zdWNjJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJheUNoZWNrUmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmFOb2RlQ29tID0gZmluZChcIkNhbWVyYVwiKS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KTtcclxuICAgICAgICAvL+mmluWFiOe7mOWItu+8jCDmioDog73osYbnmoTog4zmma9cclxuICAgICAgICBsZXQgYWN0aXZlU2tpbGxDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5jdXJyZW50QWN0aXZlU2tpbGxDb3VudDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZVNraWxsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLueLguaatOmBk+WFt1Nwcml0ZUZyYW1lR3JheTtcclxuICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMoaSAqIDExMCAtIDMyMCwgMCk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5za2lsbHNOb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnNraWxsQmdOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/moLnmja7lvZPliY3vvIzmioDog73osYbnmoTkuKrmlbDvvIzliJ3lp4vljJbvvIzmioDog73pg71cclxuICAgICAgICBsZXQgY3VycmVudFNraWxsQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuY3VycmVudFNraWxsQ291bnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2tpbGxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMu54uC5pq06YGT5YW3U3ByaXRlRnJhbWVSZWQ7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNraWxsc05vZGU7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB0aGlzLnNraWxsQmdOb2RlTGlzdFtpXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5za2lsbE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50U2tpbGxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy7ni4LmmrTpgZPlhbdQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2tpbGxzTm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKGkgKiAxMDAgLSAzMDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIHNraWxsIG5vZGUgbHNpdFwiLCB0aGlzLnNraWxsTm9kZUxpc3QpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvdWNoIHN0YXJ0XCIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2tpbGwgbm9kZSBsaXN0XCIsIHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsTm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYm91bmRpbmdCb3ggPSBub2RlLmdlXHJcbiAgICAgICAgICAgICAgICBsZXQgYm91bmRpbmdCb3g6IFJlY3QgPSBub2RlLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvdW5kIGluZyBib3hcIiwgYm91bmRpbmdCb3gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5kaW5nQm94LmNvbnRhaW5zKHBvcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJvuWIsOS6hueCuVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2V0SG9sZFNraWxsSWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zZXRIb2xkU2tpbGxJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENoZWNrU2tpbGxOb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLnNraWxsc05vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5wb3NpdGlvbiA9IHYzKGVuZFBvcy54LCBlbmRQb3MueSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IEV2ZW50VG91Y2gpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5LiK5pyJXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5zZXRIb2xkU2tpbGxJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2V0SG9sZFNraWxsSWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRSZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFJlc29sdmUoJ3RpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0Q2hlY2tTa2lsbE5vZGUoKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJheUNoZWNrUmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdXHJcbiAgICAgICAgUHJvbWlzZS5yYWNlKHByb21pc2VMaXN0KS50aGVuKCh0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6Kem5pG457uT5p2fIFxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RpbWVvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5za2lsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnV1aWQgPT09IHRoaXMuY3VycmVudFRvdWNoTm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCZ05vZGVMaXN0W2ldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeK5pS+5oqA6IO95oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXRUb3dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIue7meebruagh+WhlOWPkemAgea2iOaBr++8jOmHiuaUvuaKgOiDvVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOWtmOWcqOmcgOimgemHiuaUvuaKgOiDveeahOWhlO+8jOmCo+S5iOmcgOimgeiuqeatpOWhlOadpemHiuaUvuaKgOiDvVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvYmplY3RUeXBlID0gdGhpcy5jdXJyZW50VG91Y2hOb2RlLmdldENvbXBvbmVudChLdWFuZ0Jhb1NraWxsKS5vYmplY3RUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0IHR5cGVcIiwgb2JqZWN0VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlci5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5yZWxlYXNlU2tpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2tpbGxOb2RlID0gdGhpcy5za2lsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbGxOb2RlLnV1aWQgPT09IHRoaXMuY3VycmVudFRvdWNoTm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxsTm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93RW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVpZ2h0XCIsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnNraWxsc05vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAtMC41ICsgNzQsIDApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=