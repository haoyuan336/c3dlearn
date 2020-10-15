System.register(["cc", "code-quality:cr", "../GameController.js", "../Towers/TowerBase.js", "./UIController.js", "../util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, CCInteger, isValid, instantiate, v3, UITransformComponent, find, CameraComponent, SpriteFrame, view, Tween, GameController, TowerBase, UIController, State, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, SkillCtl;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../util/State", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
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
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      UITransformComponent = _cc.UITransformComponent;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      SpriteFrame = _cc.SpriteFrame;
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
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
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
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: Node
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

          _initializerDefineProperty(_this, "skillRedBgList", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillButtonNode", _descriptor7, _assertThisInitialized(_this));

          _this.skillNodeList = [];
          _this.currentTouchNode = null;
          _this.cameraNodeCom = null;
          _this.gameController = null;
          _this.timeoutResolve = undefined;
          _this.rayCheckResolve = undefined;
          _this.targetTower = undefined;
          _this.currentSkillPower = 0;

          _initializerDefineProperty(_this, "skillPowerFullEffect", _descriptor8, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();

          _initializerDefineProperty(_this, "addPowerAnim3dPrefab", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skillDouIcon", _descriptor10, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SkillCtl, [{
          key: "onLoad",
          //需要拖动的技能图标
          value: function onLoad() {// let repeatTw = new Tween()
            // let tw = new Tween(this);
            // tw.repeatForever()
            // tw.start();
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            var screenWidth = view.getVisibleSize().width;
            this.skillButtonNode.position = v3(screenWidth * 0.5 + 100, this.skillButtonNode.position.y, this.skillButtonNode.position.z);
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
            // let activeSkillCount = this.gameController.playerData.currentActiveSkillCount;
            // for (let i = 0; i < activeSkillCount; i++) {
            //     let node = new Node();
            //     let sprite = node.addComponent(SpriteComponent);
            //     sprite.spriteFrame = this.狂暴道具SpriteFrameGray;
            //     node.addComponent(UITransformComponent);
            //     node.position = v3(i * 110 - 320, 0);
            //     node.parent = this.skillsNode;
            //     this.skillBgNodeList.push(node);
            // }
            // //根据当前，技能豆的个数，初始化，技能都
            // let currentSkillCount = this.gameController.playerData.currentSkillCount;
            // for (let i = 0; i < currentSkillCount; i++) {
            //     let node = new Node();
            //     let sprite = node.addComponent(SpriteComponent);
            //     sprite.spriteFrame = this.狂暴道具SpriteFrameRed;
            //     node.addComponent(UITransformComponent);
            //     node.parent = this.skillsNode;
            //     node.position = this.skillBgNodeList[i].position;
            //     this.skillNodeList.push(node);
            // }
            // for (let i = 0; i < this.currentSkillCount; i++) {
            //     let node = instantiate(this.狂暴道具Prefab);
            //     node.parent = this.skillsNode;
            //     node.position = v3(i * 100 - 300, 0, 0);
            //     this.skillNodeList.push(node);
            // }
            // console.log("this skill node lsit", this.skillNodeList);

            this.node.on(Node.EventType.TOUCH_START, function (event) {
              console.log("touch start", event);

              var boundingBox = _this2.skillDouIcon.getComponent(UITransformComponent).getBoundingBoxToWorld();

              var pos = event.getUILocation(); // let endPos = this.node.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
              // console.log("pos", pos);
              // console.log("pos", endPos);
              // console.log("bounding box", boundingBox);

              if (boundingBox.contains(pos)) {
                console.log("点中了 技能点");
                _this2.currentTouchNode = _this2.skillDouIcon;

                _this2.startCheckSkillNode();

                _this2.node.getComponent(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
                  error: Error()
                }), UIController) : UIController).setHoldSkillIcon(true);
              }
            });
            this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
              if (_this2.currentTouchNode) {
                var pos = event.getUILocation();

                var endPos = _this2.node.getComponent(UITransformComponent).convertToNodeSpaceAR(v3(pos.x, pos.y, 0)); // let endPos = pos;


                _this2.currentTouchNode.position = v3(endPos.x, endPos.y, 0);
              }
            });
            this.node.on(Node.EventType.TOUCH_END, function (event) {
              if (_this2.currentTouchNode) {
                //手上有
                console.log("释放");

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
                // for (let i = 0; i < this.skillNodeList.length; i++) {
                //     let node = this.skillNodeList[i];
                //     if (node.uuid === this.currentTouchNode.uuid) {
                //         // this.currentTouchNode.position = this.skillBgNodeList[i].position;
                //         // this.currentTouchNode = undefined;
                //         break;
                //     }
                // }
                console.log("超市了");
                var tw = new Tween(_this3.currentTouchNode);
                tw.to(0.2, {
                  position: _this3.skillButtonNode.position
                });
                tw.call(function () {
                  _this3.currentTouchNode = undefined;
                });
                tw.start();
              } else {
                console.log("释放技能成功");

                if (isValid(_this3.targetTower)) {
                  console.log("给目标塔发送消息，释放技能"); //如果存在需要释放技能的塔，那么需要让此塔来释放技能
                  // let objectType = this.currentTouchNode.getComponent(KuangBaoSkill).objectType;
                  // console.log("object type", objectType);

                  _this3.targetTower.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                    error: Error()
                  }), TowerBase) : TowerBase).releaseSkill(); // for (let i = 0; i < this.skillNodeList.length; i++) {
                  //     let skillNode = this.skillNodeList[i];
                  //     if (skillNode.uuid === this.currentTouchNode.uuid) {
                  //         this.skillNodeList.splice(i, 1);
                  //         break;
                  //     }
                  // }
                  // this.currentTouchNode.destroy();


                  _this3.currentTouchNode.active = false;
                  _this3.currentTouchNode.position = _this3.skillButtonNode.position;
                  _this3.skillPowerFullEffect.active = false;
                  _this3.currentSkillPower = 0;

                  for (var i = 0; i < _this3.skillRedBgList.length; i++) {
                    var node = _this3.skillRedBgList[i];
                    node.position = v3(node.position.x, -80, node.position.z);
                  }

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
              var tw = new Tween(_this4.skillButtonNode);
              tw.to(0.2, {
                // position: v3(0, height * -0.5 + 74, 0)
                position: v3(v.width * 0.5 - 110, _this4.skillButtonNode.position.y, _this4.skillButtonNode.position.z)
              });
              tw.call(function () {
                resolve();

                _this4.state.setState("run"); // this.addSkillPower(80);

              });
              tw.start();
            });
          }
        }, {
          key: "addSkillPower",
          value: function addSkillPower(power) {
            // if (this.currentSkillPower >= 80) {
            //     return;
            // }
            // this.currentSkillPower += power;
            // let rate = this.currentSkillPower / 80;
            // if (rate === 1) {
            //     this.skillPowerFullEffect.active = true;
            //     this.skillDouIcon.active = true;
            //     this.skillDouIcon.position = this.skillButtonNode.position;
            // }
            // for (let i = 0; i < this.skillRedBgList.length; i++) {
            //     let node = this.skillRedBgList[i];
            //     node.position = v3(node.position.x, -80 + rate * 80, node.position.z);
            // }
            this.gameController.playerData.addPowerCount(power);
          }
        }, {
          key: "showAddPowerAnimEffect",
          value: function showAddPowerAnimEffect(powerValue, pos) {
            var _this5 = this;

            var node = instantiate(this.addPowerAnim3dPrefab);
            node.parent = this.gameController.node;
            node.position = pos;
            var tw = new Tween(node);
            tw.by(0.4, {
              position: v3(0, 5, 0)
            });
            tw.delay(0.6);
            tw.to(0.6, {
              position: v3(45, 30, 0)
            });
            tw.call(function () {
              node.destroy();

              _this5.addSkillPower(powerValue);
            });
            tw.start();
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.state.getState() === 'run') {
              for (var i = 0; i < this.skillRedBgList.length; i++) {
                var node = this.skillRedBgList[i];
                node.position = v3(node.position.x + dt * 20, node.position.y, node.position.z);

                if (node.position.x > 153) {
                  var index = i === 0 ? 1 : 0;
                  var oNode = this.skillRedBgList[index];
                  node.position = v3(oNode.position.x - 152, oNode.position.y, oNode.position.z);
                }
              }
            }
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillRedBgList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "skillButtonNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "skillPowerFullEffect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "addPowerAnim3dPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "skillDouIcon", [_dec11], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ta2lsbEN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImlzVmFsaWQiLCJpbnN0YW50aWF0ZSIsInYzIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJmaW5kIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3ByaXRlRnJhbWUiLCJ2aWV3IiwiVHdlZW4iLCJHYW1lQ29udHJvbGxlciIsIlRvd2VyQmFzZSIsIlVJQ29udHJvbGxlciIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2tpbGxDdGwiLCJ0eXBlIiwic2tpbGxOb2RlTGlzdCIsImN1cnJlbnRUb3VjaE5vZGUiLCJjYW1lcmFOb2RlQ29tIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0aW1lb3V0UmVzb2x2ZSIsInVuZGVmaW5lZCIsInJheUNoZWNrUmVzb2x2ZSIsInRhcmdldFRvd2VyIiwiY3VycmVudFNraWxsUG93ZXIiLCJzdGF0ZSIsInNjcmVlbldpZHRoIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsInNraWxsQnV0dG9uTm9kZSIsInBvc2l0aW9uIiwieSIsInoiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJib3VuZGluZ0JveCIsInNraWxsRG91SWNvbiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsInBvcyIsImdldFVJTG9jYXRpb24iLCJjb250YWlucyIsInN0YXJ0Q2hlY2tTa2lsbE5vZGUiLCJzZXRIb2xkU2tpbGxJY29uIiwiVE9VQ0hfTU9WRSIsImVuZFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsIlRPVUNIX0VORCIsInNjaGVkdWxlT25jZSIsInByb21pc2VMaXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYWNlIiwidGhlbiIsInR3IiwidG8iLCJjYWxsIiwic3RhcnQiLCJyZWxlYXNlU2tpbGwiLCJhY3RpdmUiLCJza2lsbFBvd2VyRnVsbEVmZmVjdCIsInNraWxsUmVkQmdMaXN0IiwidiIsImhlaWdodCIsInNldFN0YXRlIiwicG93ZXIiLCJwbGF5ZXJEYXRhIiwiYWRkUG93ZXJDb3VudCIsInBvd2VyVmFsdWUiLCJhZGRQb3dlckFuaW0zZFByZWZhYiIsInBhcmVudCIsImJ5IiwiZGVsYXkiLCJkZXN0cm95IiwiYWRkU2tpbGxQb3dlciIsImR0IiwiZ2V0U3RhdGUiLCJpbmRleCIsIm9Ob2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxvQixPQUFBQSxvQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQW1FQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLOzs7O0FBQzdPQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUdBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxLLGdCQUFBQSxLOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQmxCLFUsQ0FBdEJrQixPO0FBQVNDLE1BQUFBLFEsR0FBYW5CLFUsQ0FBYm1CLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWxCO0FBQVIsT0FBRCxDLFVBR1JnQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQUdSUSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQUdSUSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbkI7QUFBUixPQUFELEMsVUFHUmlCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVqQjtBQUFSLE9BQUQsQyxVQUdSZSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbkI7QUFBUixPQUFELEMsVUFHUmlCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVuQjtBQUFSLE9BQUQsQyxVQWdCUmlCLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVuQjtBQUFSLE9BQUQsQyxXQUlSaUIsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWxCO0FBQVIsT0FBRCxDLFdBR1JnQixRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFbkI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFwQkRvQixhLEdBQXdCLEU7Z0JBQ3hCQyxnQixHQUF5QixJO2dCQUN6QkMsYSxHQUFpQyxJO2dCQUVqQ0MsYyxHQUFpQyxJO2dCQUlqQ0MsYyxHQUFpQkMsUztnQkFDakJDLGUsR0FBa0JELFM7Z0JBRWxCRSxXLEdBQWNGLFM7Z0JBQ2RHLGlCLEdBQW9CLEM7Ozs7Z0JBR3BCQyxLLEdBQWU7QUFBQTtBQUFBLCtCOzs7Ozs7Ozs7OztBQU1XO21DQUN6QixDQUNMO0FBQ0E7QUFDQTtBQUNBO0FBRUg7OztrQ0FDTztBQUFBOztBQUNKLGdCQUFJQyxXQUFXLEdBQUdwQixJQUFJLENBQUNxQixjQUFMLEdBQXNCQyxLQUF4QztBQUNBLGlCQUFLQyxlQUFMLENBQXFCQyxRQUFyQixHQUFnQzdCLEVBQUUsQ0FBQ3lCLFdBQVcsR0FBRyxHQUFkLEdBQW9CLEdBQXJCLEVBQTBCLEtBQUtHLGVBQUwsQ0FBcUJDLFFBQXJCLENBQThCQyxDQUF4RCxFQUEyRCxLQUFLRixlQUFMLENBQXFCQyxRQUFyQixDQUE4QkUsQ0FBekYsQ0FBbEM7QUFDQSxpQkFBS2IsY0FBTCxHQUFzQmhCLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCOEIsWUFBdkI7QUFBQTtBQUFBLGlEQUF0QjtBQUdBLGlCQUFLZCxjQUFMLENBQW9CZSxJQUFwQixDQUF5QkMsRUFBekIsQ0FBNEIsb0JBQTVCLEVBQWtELFVBQUNDLFVBQUQsRUFBb0M7QUFDbEY7QUFDQSxtQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxVQUFVLENBQUNFLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLG9CQUFJRSxNQUFNLEdBQUdILFVBQVUsQ0FBQ0MsQ0FBRCxDQUF2Qjs7QUFDQSxvQkFBSUUsTUFBTSxDQUFDQyxRQUFQLElBQW1CRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JOLElBQXZDLEVBQTZDO0FBQ3pDLHNCQUFJSyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JOLElBQWhCLENBQXFCRCxZQUFyQjtBQUFBO0FBQUEsNkNBQUosRUFBa0Q7QUFDOUM7QUFDQSx3QkFBSSxNQUFJLENBQUNYLGVBQVQsRUFBMEI7QUFDdEIsc0JBQUEsTUFBSSxDQUFDQyxXQUFMLEdBQW1CZ0IsTUFBTSxDQUFDQyxRQUFQLENBQWdCTixJQUFuQzs7QUFDQSxzQkFBQSxNQUFJLENBQUNaLGVBQUwsQ0FBcUIsWUFBckI7O0FBQ0Esc0JBQUEsTUFBSSxDQUFDQSxlQUFMLEdBQXVCRCxTQUF2QjtBQUNBO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFHSixhQWxCRDtBQW9CQSxpQkFBS0gsYUFBTCxHQUFxQmYsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlOEIsWUFBZixDQUE0QjdCLGVBQTVCLENBQXJCLENBMUJJLENBMkJKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQUs4QixJQUFMLENBQVVDLEVBQVYsQ0FBYXZDLElBQUksQ0FBQzZDLFNBQUwsQ0FBZUMsV0FBNUIsRUFBeUMsVUFBQ0MsS0FBRCxFQUF1QjtBQUM1REMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsS0FBM0I7O0FBQ0Esa0JBQUlHLFdBQVcsR0FBRyxNQUFJLENBQUNDLFlBQUwsQ0FBa0JkLFlBQWxCLENBQStCL0Isb0JBQS9CLEVBQXFEOEMscUJBQXJELEVBQWxCOztBQUNBLGtCQUFJQyxHQUFHLEdBQUdOLEtBQUssQ0FBQ08sYUFBTixFQUFWLENBSDRELENBSTVEO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGtCQUFJSixXQUFXLENBQUNLLFFBQVosQ0FBcUJGLEdBQXJCLENBQUosRUFBK0I7QUFDM0JMLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDNUIsZ0JBQUwsR0FBd0IsTUFBSSxDQUFDOEIsWUFBN0I7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDSyxtQkFBTDs7QUFDQSxnQkFBQSxNQUFJLENBQUNsQixJQUFMLENBQVVELFlBQVY7QUFBQTtBQUFBLGtEQUFxQ29CLGdCQUFyQyxDQUFzRCxJQUF0RDtBQUNIO0FBQ0osYUFkRDtBQWVBLGlCQUFLbkIsSUFBTCxDQUFVQyxFQUFWLENBQWF2QyxJQUFJLENBQUM2QyxTQUFMLENBQWVhLFVBQTVCLEVBQXdDLFVBQUNYLEtBQUQsRUFBdUI7QUFDM0Qsa0JBQUksTUFBSSxDQUFDMUIsZ0JBQVQsRUFBMkI7QUFDdkIsb0JBQUlnQyxHQUFHLEdBQUdOLEtBQUssQ0FBQ08sYUFBTixFQUFWOztBQUNBLG9CQUFJSyxNQUFNLEdBQUcsTUFBSSxDQUFDckIsSUFBTCxDQUFVRCxZQUFWLENBQXVCL0Isb0JBQXZCLEVBQTZDc0Qsb0JBQTdDLENBQWtFdkQsRUFBRSxDQUFDZ0QsR0FBRyxDQUFDUSxDQUFMLEVBQVFSLEdBQUcsQ0FBQ2xCLENBQVosRUFBZSxDQUFmLENBQXBFLENBQWIsQ0FGdUIsQ0FHdkI7OztBQUNBLGdCQUFBLE1BQUksQ0FBQ2QsZ0JBQUwsQ0FBc0JhLFFBQXRCLEdBQWlDN0IsRUFBRSxDQUFDc0QsTUFBTSxDQUFDRSxDQUFSLEVBQVdGLE1BQU0sQ0FBQ3hCLENBQWxCLEVBQXFCLENBQXJCLENBQW5DO0FBQ0g7QUFDSixhQVBEO0FBUUEsaUJBQUtHLElBQUwsQ0FBVUMsRUFBVixDQUFhdkMsSUFBSSxDQUFDNkMsU0FBTCxDQUFlaUIsU0FBNUIsRUFBdUMsVUFBQ2YsS0FBRCxFQUF1QjtBQUUxRCxrQkFBSSxNQUFJLENBQUMxQixnQkFBVCxFQUEyQjtBQUN2QjtBQUNBMkIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDYyxZQUFMLENBQWtCLFlBQU07QUFDcEI7QUFDQSxrQkFBQSxNQUFJLENBQUN6QixJQUFMLENBQVVELFlBQVY7QUFBQTtBQUFBLG9EQUFxQ29CLGdCQUFyQyxDQUFzRCxLQUF0RDs7QUFFQSxzQkFBSSxNQUFJLENBQUNqQyxjQUFULEVBQXlCO0FBQ3JCLG9CQUFBLE1BQUksQ0FBQ0EsY0FBTCxDQUFvQixTQUFwQjs7QUFDQSxvQkFBQSxNQUFJLENBQUNBLGNBQUwsR0FBc0JDLFNBQXRCO0FBQ0g7QUFDSixpQkFSRCxFQVFHLEdBUkg7QUFTSDtBQUNKLGFBZkQ7QUFnQkg7OztnREFDcUI7QUFBQTs7QUFDbEIsZ0JBQUl1QyxXQUFXLEdBQUcsQ0FDZCxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdCLGNBQUEsTUFBSSxDQUFDekMsZUFBTCxHQUF1QndDLE9BQXZCO0FBQ0gsYUFGRCxDQURjLEVBSWQsSUFBSUQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3QixjQUFBLE1BQUksQ0FBQzNDLGNBQUwsR0FBc0IwQyxPQUF0QjtBQUNILGFBRkQsQ0FKYyxDQUFsQjtBQVFBRCxZQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYUosV0FBYixFQUEwQkssSUFBMUIsQ0FBK0IsVUFBQ2xELElBQUQsRUFBVTtBQUNyQztBQUNBLGtCQUFJQSxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E2QixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBLG9CQUFJcUIsRUFBRSxHQUFHLElBQUkzRCxLQUFKLENBQVUsTUFBSSxDQUFDVSxnQkFBZixDQUFUO0FBQ0FpRCxnQkFBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1ByQyxrQkFBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQ0QsZUFBTCxDQUFxQkM7QUFEeEIsaUJBQVg7QUFHQW9DLGdCQUFBQSxFQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFNO0FBQ1Ysa0JBQUEsTUFBSSxDQUFDbkQsZ0JBQUwsR0FBd0JJLFNBQXhCO0FBQ0gsaUJBRkQ7QUFHQTZDLGdCQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSCxlQWxCRCxNQWtCTztBQUNIekIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7O0FBQ0Esb0JBQUk5QyxPQUFPLENBQUMsTUFBSSxDQUFDd0IsV0FBTixDQUFYLEVBQStCO0FBQzNCcUIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFEMkIsQ0FFM0I7QUFDQTtBQUNBOztBQUNBLGtCQUFBLE1BQUksQ0FBQ3RCLFdBQUwsQ0FBaUJVLFlBQWpCO0FBQUE7QUFBQSw4Q0FBeUNxQyxZQUF6QyxHQUwyQixDQU8zQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxrQkFBQSxNQUFJLENBQUNyRCxnQkFBTCxDQUFzQnNELE1BQXRCLEdBQStCLEtBQS9CO0FBQ0Esa0JBQUEsTUFBSSxDQUFDdEQsZ0JBQUwsQ0FBc0JhLFFBQXRCLEdBQWlDLE1BQUksQ0FBQ0QsZUFBTCxDQUFxQkMsUUFBdEQ7QUFDQSxrQkFBQSxNQUFJLENBQUMwQyxvQkFBTCxDQUEwQkQsTUFBMUIsR0FBbUMsS0FBbkM7QUFDQSxrQkFBQSxNQUFJLENBQUMvQyxpQkFBTCxHQUF5QixDQUF6Qjs7QUFFQSx1QkFBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLE1BQUksQ0FBQ29DLGNBQUwsQ0FBb0JuQyxNQUF4QyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFxRDtBQUNqRCx3QkFBSUgsSUFBSSxHQUFHLE1BQUksQ0FBQ3VDLGNBQUwsQ0FBb0JwQyxDQUFwQixDQUFYO0FBQ0FILG9CQUFBQSxJQUFJLENBQUNKLFFBQUwsR0FBZ0I3QixFQUFFLENBQUNpQyxJQUFJLENBQUNKLFFBQUwsQ0FBYzJCLENBQWYsRUFBa0IsQ0FBQyxFQUFuQixFQUF1QnZCLElBQUksQ0FBQ0osUUFBTCxDQUFjRSxDQUFyQyxDQUFsQjtBQUNIOztBQUNELGtCQUFBLE1BQUksQ0FBQ2YsZ0JBQUwsR0FBd0JJLFNBQXhCO0FBRUg7QUFDSjtBQUVKLGFBbkREO0FBb0RIOzs7MENBQ2U7QUFBQTs7QUFDWixtQkFBTyxJQUFJd0MsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBSVcsQ0FBQyxHQUFHcEUsSUFBSSxDQUFDcUIsY0FBTCxFQUFSO0FBQ0Esa0JBQUlnRCxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBZjtBQUNBL0IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQjhCLE1BQXRCO0FBQ0Esa0JBQUlULEVBQUUsR0FBRyxJQUFJM0QsS0FBSixDQUFVLE1BQUksQ0FBQ3NCLGVBQWYsQ0FBVDtBQUNBcUMsY0FBQUEsRUFBRSxDQUFDQyxFQUFILENBQU0sR0FBTixFQUFXO0FBQ1A7QUFDQXJDLGdCQUFBQSxRQUFRLEVBQUU3QixFQUFFLENBQUN5RSxDQUFDLENBQUM5QyxLQUFGLEdBQVUsR0FBVixHQUFnQixHQUFqQixFQUFzQixNQUFJLENBQUNDLGVBQUwsQ0FBcUJDLFFBQXJCLENBQThCQyxDQUFwRCxFQUF1RCxNQUFJLENBQUNGLGVBQUwsQ0FBcUJDLFFBQXJCLENBQThCRSxDQUFyRjtBQUZMLGVBQVg7QUFLQWtDLGNBQUFBLEVBQUUsQ0FBQ0UsSUFBSCxDQUFRLFlBQU07QUFDVk4sZ0JBQUFBLE9BQU87O0FBQ1AsZ0JBQUEsTUFBSSxDQUFDckMsS0FBTCxDQUFXbUQsUUFBWCxDQUFvQixLQUFwQixFQUZVLENBR1Y7O0FBQ0gsZUFKRDtBQUtBVixjQUFBQSxFQUFFLENBQUNHLEtBQUg7QUFDSCxhQWhCTSxDQUFQO0FBa0JIOzs7d0NBQ2FRLEssRUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQUsxRCxjQUFMLENBQW9CMkQsVUFBcEIsQ0FBK0JDLGFBQS9CLENBQTZDRixLQUE3QztBQUNIOzs7aURBQ3NCRyxVLEVBQW9CL0IsRyxFQUFXO0FBQUE7O0FBQ2xELGdCQUFJZixJQUFJLEdBQUdsQyxXQUFXLENBQUMsS0FBS2lGLG9CQUFOLENBQXRCO0FBQ0EvQyxZQUFBQSxJQUFJLENBQUNnRCxNQUFMLEdBQWMsS0FBSy9ELGNBQUwsQ0FBb0JlLElBQWxDO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQm1CLEdBQWhCO0FBQ0EsZ0JBQUlpQixFQUFFLEdBQUcsSUFBSTNELEtBQUosQ0FBVTJCLElBQVYsQ0FBVDtBQUNBZ0MsWUFBQUEsRUFBRSxDQUFDaUIsRUFBSCxDQUFNLEdBQU4sRUFBVztBQUNQckQsY0FBQUEsUUFBUSxFQUFFN0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQURMLGFBQVg7QUFHQWlFLFlBQUFBLEVBQUUsQ0FBQ2tCLEtBQUgsQ0FBUyxHQUFUO0FBQ0FsQixZQUFBQSxFQUFFLENBQUNDLEVBQUgsQ0FBTSxHQUFOLEVBQVc7QUFDUHJDLGNBQUFBLFFBQVEsRUFBRTdCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQ7QUFETCxhQUFYO0FBR0FpRSxZQUFBQSxFQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFNO0FBQ1ZsQyxjQUFBQSxJQUFJLENBQUNtRCxPQUFMOztBQUNBLGNBQUEsTUFBSSxDQUFDQyxhQUFMLENBQW1CTixVQUFuQjtBQUNILGFBSEQ7QUFJQWQsWUFBQUEsRUFBRSxDQUFDRyxLQUFIO0FBQ0g7OztpQ0FDTWtCLEUsRUFBWTtBQUNmLGdCQUFJLEtBQUs5RCxLQUFMLENBQVcrRCxRQUFYLE9BQTBCLEtBQTlCLEVBQXFDO0FBQ2pDLG1CQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtvQyxjQUFMLENBQW9CbkMsTUFBeEMsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7QUFDakQsb0JBQUlILElBQUksR0FBRyxLQUFLdUMsY0FBTCxDQUFvQnBDLENBQXBCLENBQVg7QUFDQUgsZ0JBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQjdCLEVBQUUsQ0FBQ2lDLElBQUksQ0FBQ0osUUFBTCxDQUFjMkIsQ0FBZCxHQUFrQjhCLEVBQUUsR0FBRyxFQUF4QixFQUE0QnJELElBQUksQ0FBQ0osUUFBTCxDQUFjQyxDQUExQyxFQUE2Q0csSUFBSSxDQUFDSixRQUFMLENBQWNFLENBQTNELENBQWxCOztBQUNBLG9CQUFJRSxJQUFJLENBQUNKLFFBQUwsQ0FBYzJCLENBQWQsR0FBa0IsR0FBdEIsRUFBMkI7QUFDdkIsc0JBQUlnQyxLQUFLLEdBQUdwRCxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBYyxDQUExQjtBQUNBLHNCQUFJcUQsS0FBSyxHQUFHLEtBQUtqQixjQUFMLENBQW9CZ0IsS0FBcEIsQ0FBWjtBQUNBdkQsa0JBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQjdCLEVBQUUsQ0FBQ3lGLEtBQUssQ0FBQzVELFFBQU4sQ0FBZTJCLENBQWYsR0FBbUIsR0FBcEIsRUFBeUJpQyxLQUFLLENBQUM1RCxRQUFOLENBQWVDLENBQXhDLEVBQTJDMkQsS0FBSyxDQUFDNUQsUUFBTixDQUFlRSxDQUExRCxDQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7O1FBNVJ5QnJDLFM7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHQyxJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBR1MsQzs7Ozs7OztpQkFHSCxFOzs7Ozs7O2lCQUdELEk7Ozs7Ozs7aUJBZ0JLLEk7Ozs7Ozs7aUJBSUUsSTs7Ozs7OztpQkFHVixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWaWV3LCBQcmVmYWIsIENDSW50ZWdlciwgaXNWYWxpZCwgaW5zdGFudGlhdGUsIHYzLCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgUGh5c2ljc1N5c3RlbSwgRXZlbnRUb3VjaCwgUmVjdCwgVmVjMiwgZmluZCwgQ2FtZXJhQ29tcG9uZW50LCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBDb2xsaWRlckNvbXBvbmVudCwgUGh5c2ljc1JheVJlc3VsdCwgdmlldywgVHdlZW4sIHYyLCBWZWMzIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgS3VhbmdCYW9Ta2lsbCB9IGZyb20gJy4v6YGT5YW3L0t1YW5nQmFvU2tpbGwnO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnU2tpbGxDdGwnKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIOeLguaatOmBk+WFt1ByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIOeLguaatOmBk+WFt1Nwcml0ZUZyYW1lUmVkID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIOeLguaatOmBk+WFt1Nwcml0ZUZyYW1lR3JheSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsc05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDSW50ZWdlciB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRTa2lsbENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbFJlZEJnTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbE5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFRvdWNoTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhbWVyYU5vZGVDb206IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBza2lsbEJnTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByaXZhdGUgdG91Y2hFbmRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSB0aW1lb3V0UmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgcmF5Q2hlY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXIgPSB1bmRlZmluZWQ7IC8v6YeK5pS+5oqA6IO955qE55uu5qCH5aGUXHJcbiAgICBwcml2YXRlIGN1cnJlbnRTa2lsbFBvd2VyID0gMDsgLy/lvZPliY3nmoTmioDog73og73ph4/lgLxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbFBvd2VyRnVsbEVmZmVjdDogTm9kZSA9IG51bGw7IC8v5oqA6IO96IO96YeP5YC855qE54m55pWIXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGFkZFBvd2VyQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbERvdUljb246IE5vZGUgPSBudWxsOyAvL+mcgOimgeaLluWKqOeahOaKgOiDveWbvuagh1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGxldCByZXBlYXRUdyA9IG5ldyBUd2VlbigpXHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMpO1xyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uID0gdjMoc2NyZWVuV2lkdGggKiAwLjUgKyAxMDAsIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uLnksIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCAocmVzdWx0TGlzdDogUGh5c2ljc1JheVJlc3VsdFtdKSA9PiB7XHJcbiAgICAgICAgICAgIC8v546p5a625bCE5Lit5LqG5LiA5LiqIHRvd2VyXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyICYmIHJlc3VsdC5jb2xsaWRlci5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54K55Lit5LqGdG93ZXIgIHNraWxsIG5vZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJheUNoZWNrUmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlciA9IHJlc3VsdC5jb2xsaWRlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlDaGVja1Jlc29sdmUoJ2NoZWNrLXN1Y2MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYU5vZGVDb20gPSBmaW5kKFwiQ2FtZXJhXCIpLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpO1xyXG4gICAgICAgIC8v6aaW5YWI57uY5Yi277yMIOaKgOiDveixhueahOiDjOaZr1xyXG4gICAgICAgIC8vIGxldCBhY3RpdmVTa2lsbENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmN1cnJlbnRBY3RpdmVTa2lsbENvdW50O1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlU2tpbGxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAvLyAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMu54uC5pq06YGT5YW3U3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgIC8vICAgICBub2RlLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MyhpICogMTEwIC0gMzIwLCAwKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNraWxsc05vZGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxCZ05vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvL+agueaNruW9k+WJje+8jOaKgOiDveixhueahOS4quaVsO+8jOWIneWni+WMlu+8jOaKgOiDvemDvVxyXG4gICAgICAgIC8vIGxldCBjdXJyZW50U2tpbGxDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5jdXJyZW50U2tpbGxDb3VudDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTa2lsbENvdW50OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy7ni4LmmrTpgZPlhbdTcHJpdGVGcmFtZVJlZDtcclxuICAgICAgICAvLyAgICAgbm9kZS5hZGRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2tpbGxzTm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCZ05vZGVMaXN0W2ldLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRTa2lsbENvdW50OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLueLguaatOmBk+WFt1ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gdGhpcy5za2lsbHNOb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoaSAqIDEwMCAtIDMwMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgc2tpbGwgbm9kZSBsc2l0XCIsIHRoaXMuc2tpbGxOb2RlTGlzdCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG91Y2ggc3RhcnRcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICBsZXQgYm91bmRpbmdCb3ggPSB0aGlzLnNraWxsRG91SWNvbi5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0VUlMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBsZXQgZW5kUG9zID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuY29udmVydFRvTm9kZVNwYWNlQVIodjMocG9zLngsIHBvcy55LCAwKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zXCIsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYm91bmRpbmcgYm94XCIsIGJvdW5kaW5nQm94KTtcclxuICAgICAgICAgICAgaWYgKGJvdW5kaW5nQm94LmNvbnRhaW5zKHBvcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Lit5LqGIOaKgOiDveeCuVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlID0gdGhpcy5za2lsbERvdUljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q2hlY2tTa2lsbE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zZXRIb2xkU2tpbGxJY29uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0VUlMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHYzKHBvcy54LCBwb3MueSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGVuZFBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5wb3NpdGlvbiA9IHYzKGVuZFBvcy54LCBlbmRQb3MueSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IEV2ZW50VG91Y2gpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5LiK5pyJXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHiuaUvlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2V0SG9sZFNraWxsSWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNldEhvbGRTa2lsbEljb24oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0UmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlKCd0aW1lb3V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFJlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydENoZWNrU2tpbGxOb2RlKCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYXlDaGVja1Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgICAgIFByb21pc2UucmFjZShwcm9taXNlTGlzdCkudGhlbigodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+inpuaRuOe7k+adnyBcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0aW1lb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAobm9kZS51dWlkID09PSB0aGlzLmN1cnJlbnRUb3VjaE5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmN1cnJlbnRUb3VjaE5vZGUucG9zaXRpb24gPSB0aGlzLnNraWxsQmdOb2RlTGlzdFtpXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jdXJyZW50VG91Y2hOb2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui2heW4guS6hlwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuY3VycmVudFRvdWNoTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb25cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeK5pS+5oqA6IO95oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQodGhpcy50YXJnZXRUb3dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIue7meebruagh+WhlOWPkemAgea2iOaBr++8jOmHiuaUvuaKgOiDvVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOWtmOWcqOmcgOimgemHiuaUvuaKgOiDveeahOWhlO+8jOmCo+S5iOmcgOimgeiuqeatpOWhlOadpemHiuaUvuaKgOiDvVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvYmplY3RUeXBlID0gdGhpcy5jdXJyZW50VG91Y2hOb2RlLmdldENvbXBvbmVudChLdWFuZ0Jhb1NraWxsKS5vYmplY3RUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0IHR5cGVcIiwgb2JqZWN0VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlci5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5yZWxlYXNlU2tpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHNraWxsTm9kZSA9IHRoaXMuc2tpbGxOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHNraWxsTm9kZS51dWlkID09PSB0aGlzLmN1cnJlbnRUb3VjaE5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5za2lsbE5vZGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFRvdWNoTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxQb3dlckZ1bGxFZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2tpbGxQb3dlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbFJlZEJnTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIC04MCwgbm9kZS5wb3NpdGlvbi56KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzaG93RW50ZXJBbmltKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVpZ2h0XCIsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLnNraWxsQnV0dG9uTm9kZSk7XHJcbiAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IHYzKDAsIGhlaWdodCAqIC0wLjUgKyA3NCwgMClcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB2Myh2LndpZHRoICogMC41IC0gMTEwLCB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbi55LCB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbi56KVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkU2tpbGxQb3dlcig4MCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRTa2lsbFBvd2VyKHBvd2VyOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50U2tpbGxQb3dlciA+PSA4MCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNraWxsUG93ZXIgKz0gcG93ZXI7XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgcmF0ZSA9IHRoaXMuY3VycmVudFNraWxsUG93ZXIgLyA4MDtcclxuICAgICAgICAvLyBpZiAocmF0ZSA9PT0gMSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsUG93ZXJGdWxsRWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxEb3VJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxEb3VJY29uLnBvc2l0aW9uID0gdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb247XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbFJlZEJnTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaV07XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIC04MCArIHJhdGUgKiA4MCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmFkZFBvd2VyQ291bnQocG93ZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvd0FkZFBvd2VyQW5pbUVmZmVjdChwb3dlclZhbHVlOiBudW1iZXIsIHBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5hZGRQb3dlckFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGU7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgdHcuYnkoMC40LCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA1LCAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHR3LmRlbGF5KDAuNilcclxuICAgICAgICB0dy50bygwLjYsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHYzKDQ1LCAzMCwgMClcclxuICAgICAgICB9KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2tpbGxQb3dlcihwb3dlclZhbHVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsUmVkQmdMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54ICsgZHQgKiAyMCwgbm9kZS5wb3NpdGlvbi55LCBub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wb3NpdGlvbi54ID4gMTUzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaSA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvTm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MyhvTm9kZS5wb3NpdGlvbi54IC0gMTUyLCBvTm9kZS5wb3NpdGlvbi55LCBvTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=