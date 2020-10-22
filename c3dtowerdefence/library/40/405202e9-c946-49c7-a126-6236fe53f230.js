System.register(["cc", "code-quality:cr", "../GameController.js", "../Towers/TowerBase.js", "../util/State.js", "../GameInstance.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, CCInteger, isValid, instantiate, v3, UITransformComponent, find, CameraComponent, SpriteFrame, view, Tween, GameController, TowerBase, State, GameInstance, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, SkillCtl;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInstance(extras) {
    _reporterNs.report("GameInstance", "../GameInstance", _context.meta, extras);
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
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameInstanceJs) {
      GameInstance = _GameInstanceJs.GameInstance;
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

                _this2.startCheckSkillNode(); // this.node.getComponent(UIController).setHoldSkillIcon(true);

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
                  // this.node.getComponent(UIController).setHoldSkillIcon(false);
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
            (_crd && GameInstance === void 0 ? (_reportPossibleCrUseOfGameInstance({
              error: Error()
            }), GameInstance) : GameInstance).getInstance().addPowerCount(power);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ta2lsbEN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImlzVmFsaWQiLCJpbnN0YW50aWF0ZSIsInYzIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJmaW5kIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3ByaXRlRnJhbWUiLCJ2aWV3IiwiVHdlZW4iLCJHYW1lQ29udHJvbGxlciIsIlRvd2VyQmFzZSIsIlN0YXRlIiwiR2FtZUluc3RhbmNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2tpbGxDdGwiLCJ0eXBlIiwic2tpbGxOb2RlTGlzdCIsImN1cnJlbnRUb3VjaE5vZGUiLCJjYW1lcmFOb2RlQ29tIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0aW1lb3V0UmVzb2x2ZSIsInVuZGVmaW5lZCIsInJheUNoZWNrUmVzb2x2ZSIsInRhcmdldFRvd2VyIiwiY3VycmVudFNraWxsUG93ZXIiLCJzdGF0ZSIsInNjcmVlbldpZHRoIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsInNraWxsQnV0dG9uTm9kZSIsInBvc2l0aW9uIiwieSIsInoiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJib3VuZGluZ0JveCIsInNraWxsRG91SWNvbiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsInBvcyIsImdldFVJTG9jYXRpb24iLCJjb250YWlucyIsInN0YXJ0Q2hlY2tTa2lsbE5vZGUiLCJUT1VDSF9NT1ZFIiwiZW5kUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ4IiwiVE9VQ0hfRU5EIiwic2NoZWR1bGVPbmNlIiwicHJvbWlzZUxpc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhY2UiLCJ0aGVuIiwidHciLCJ0byIsImNhbGwiLCJzdGFydCIsInJlbGVhc2VTa2lsbCIsImFjdGl2ZSIsInNraWxsUG93ZXJGdWxsRWZmZWN0Iiwic2tpbGxSZWRCZ0xpc3QiLCJ2IiwiaGVpZ2h0Iiwic2V0U3RhdGUiLCJwb3dlciIsImdldEluc3RhbmNlIiwiYWRkUG93ZXJDb3VudCIsInBvd2VyVmFsdWUiLCJhZGRQb3dlckFuaW0zZFByZWZhYiIsInBhcmVudCIsImJ5IiwiZGVsYXkiLCJkZXN0cm95IiwiYWRkU2tpbGxQb3dlciIsImR0IiwiZ2V0U3RhdGUiLCJpbmRleCIsIm9Ob2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxNQUFBQSxvQixPQUFBQSxvQjtBQUE2REMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQW1FQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLOzs7O0FBQzdPQyxNQUFBQSxjLHFCQUFBQSxjOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUlBQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQmxCLFUsQ0FBdEJrQixPO0FBQVNDLE1BQUFBLFEsR0FBYW5CLFUsQ0FBYm1CLFE7OzBC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OztRQTVSeUJyQyxTOzs7OztpQkFHRSxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQUdTLEM7Ozs7Ozs7aUJBR0gsRTs7Ozs7OztpQkFHRCxJOzs7Ozs7O2lCQWdCSyxJOzs7Ozs7O2lCQUlFLEk7Ozs7Ozs7aUJBR1YsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmlldywgUHJlZmFiLCBDQ0ludGVnZXIsIGlzVmFsaWQsIGluc3RhbnRpYXRlLCB2MywgVUlUcmFuc2Zvcm1Db21wb25lbnQsIFBoeXNpY3NTeXN0ZW0sIEV2ZW50VG91Y2gsIFJlY3QsIFZlYzIsIGZpbmQsIENhbWVyYUNvbXBvbmVudCwgU3ByaXRlRnJhbWUsIFNwcml0ZUNvbXBvbmVudCwgQ29sbGlkZXJDb21wb25lbnQsIFBoeXNpY3NSYXlSZXN1bHQsIHZpZXcsIFR3ZWVuLCB2MiwgVmVjMyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9HYW1lQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEt1YW5nQmFvU2tpbGwgfSBmcm9tICcuL+mBk+WFty9LdWFuZ0Jhb1NraWxsJztcclxuLy8gaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lSW5zdGFuY2UgfSBmcm9tICcuLi9HYW1lSW5zdGFuY2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1NraWxsQ3RsJylcclxuZXhwb3J0IGNsYXNzIFNraWxsQ3RsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyDni4LmmrTpgZPlhbdQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyDni4LmmrTpgZPlhbdTcHJpdGVGcmFtZVJlZCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlRnJhbWUgfSlcclxuICAgIHB1YmxpYyDni4LmmrTpgZPlhbdTcHJpdGVGcmFtZUdyYXkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbHNOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDQ0ludGVnZXIgfSlcclxuICAgIHB1YmxpYyBjdXJyZW50U2tpbGxDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2tpbGxSZWRCZ0xpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbEJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2tpbGxOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUb3VjaE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjYW1lcmFOb2RlQ29tOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgc2tpbGxCZ05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBwcml2YXRlIHRvdWNoRW5kUmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgdGltZW91dFJlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHJheUNoZWNrUmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwcml2YXRlIHRhcmdldFRvd2VyID0gdW5kZWZpbmVkOyAvL+mHiuaUvuaKgOiDveeahOebruagh+WhlFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2tpbGxQb3dlciA9IDA7IC8v5b2T5YmN55qE5oqA6IO96IO96YeP5YC8XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2tpbGxQb3dlckZ1bGxFZmZlY3Q6IE5vZGUgPSBudWxsOyAvL+aKgOiDveiDvemHj+WAvOeahOeJueaViFxyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBhZGRQb3dlckFuaW0zZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2tpbGxEb3VJY29uOiBOb2RlID0gbnVsbDsgLy/pnIDopoHmi5bliqjnmoTmioDog73lm77moIdcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBsZXQgcmVwZWF0VHcgPSBuZXcgVHdlZW4oKVxyXG4gICAgICAgIC8vIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzKTtcclxuICAgICAgICAvLyB0dy5yZXBlYXRGb3JldmVyKClcclxuICAgICAgICAvLyB0dy5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcclxuICAgICAgICB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbiA9IHYzKHNjcmVlbldpZHRoICogMC41ICsgMTAwLCB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbi55LCB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gZmluZChcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGUub24oXCJ0b3VjaC1zY3JlZW4tdG8tM2RcIiwgKHJlc3VsdExpc3Q6IFBoeXNpY3NSYXlSZXN1bHRbXSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eOqeWutuWwhOS4reS6huS4gOS4qiB0b3dlclxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlciAmJiByZXN1bHQuY29sbGlkZXIubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueS4reS6hnRvd2VyICBza2lsbCBub2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yYXlDaGVja1Jlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXIgPSByZXN1bHQuY29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlKCdjaGVjay1zdWNjJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJheUNoZWNrUmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmFOb2RlQ29tID0gZmluZChcIkNhbWVyYVwiKS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KTtcclxuICAgICAgICAvL+mmluWFiOe7mOWItu+8jCDmioDog73osYbnmoTog4zmma9cclxuICAgICAgICAvLyBsZXQgYWN0aXZlU2tpbGxDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5jdXJyZW50QWN0aXZlU2tpbGxDb3VudDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZVNraWxsQ291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLueLguaatOmBk+WFt1Nwcml0ZUZyYW1lR3JheTtcclxuICAgICAgICAvLyAgICAgbm9kZS5hZGRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoaSAqIDExMCAtIDMyMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gdGhpcy5za2lsbHNOb2RlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsQmdOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gLy/moLnmja7lvZPliY3vvIzmioDog73osYbnmoTkuKrmlbDvvIzliJ3lp4vljJbvvIzmioDog73pg71cclxuICAgICAgICAvLyBsZXQgY3VycmVudFNraWxsQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuY3VycmVudFNraWxsQ291bnQ7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2tpbGxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAvLyAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMu54uC5pq06YGT5YW3U3ByaXRlRnJhbWVSZWQ7XHJcbiAgICAgICAgLy8gICAgIG5vZGUuYWRkQ29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNraWxsc05vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB0aGlzLnNraWxsQmdOb2RlTGlzdFtpXS5wb3NpdGlvbjtcclxuICAgICAgICAvLyAgICAgdGhpcy5za2lsbE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50U2tpbGxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy7ni4LmmrTpgZPlhbdQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2tpbGxzTm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKGkgKiAxMDAgLSAzMDAsIDAsIDApO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIHNraWxsIG5vZGUgbHNpdFwiLCB0aGlzLnNraWxsTm9kZUxpc3QpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvdWNoIHN0YXJ0XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgbGV0IGJvdW5kaW5nQm94ID0gdGhpcy5za2lsbERvdUljb24uZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldFVJTG9jYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gbGV0IGVuZFBvcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHYzKHBvcy54LCBwb3MueSwgMCkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc1wiLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvdW5kaW5nIGJveFwiLCBib3VuZGluZ0JveCk7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGluZ0JveC5jb250YWlucyhwb3MpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueS4reS6hiDmioDog73ngrlcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IHRoaXMuc2tpbGxEb3VJY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENoZWNrU2tpbGxOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2V0SG9sZFNraWxsSWNvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQ6IEV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvdWNoTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldFVJTG9jYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBlbmRQb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUucG9zaXRpb24gPSB2MyhlbmRQb3MueCwgZW5kUG9zLnksIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+aJi+S4iuaciVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLph4rmlL5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnNldEhvbGRTa2lsbEljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zZXRIb2xkU2tpbGxJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dFJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSgndGltZW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRDaGVja1NraWxsTm9kZSgpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgICAgICBQcm9taXNlLnJhY2UocHJvbWlzZUxpc3QpLnRoZW4oKHR5cGUpID0+IHtcclxuICAgICAgICAgICAgLy/op6bmkbjnu5PmnZ8gXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGltZW91dCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsTm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKG5vZGUudXVpZCA9PT0gdGhpcy5jdXJyZW50VG91Y2hOb2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jdXJyZW50VG91Y2hOb2RlLnBvc2l0aW9uID0gdGhpcy5za2lsbEJnTm9kZUxpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLotoXluILkuoZcIilcclxuICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmN1cnJlbnRUb3VjaE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHiuaUvuaKgOiDveaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0VG93ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnu5nnm67moIfloZTlj5HpgIHmtojmga/vvIzph4rmlL7mioDog71cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKjpnIDopoHph4rmlL7mioDog73nmoTloZTvvIzpgqPkuYjpnIDopoHorqnmraTloZTmnaXph4rmlL7mioDog71cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb2JqZWN0VHlwZSA9IHRoaXMuY3VycmVudFRvdWNoTm9kZS5nZXRDb21wb25lbnQoS3VhbmdCYW9Ta2lsbCkub2JqZWN0VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdCB0eXBlXCIsIG9iamVjdFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXIuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkucmVsZWFzZVNraWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBza2lsbE5vZGUgPSB0aGlzLnNraWxsTm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChza2lsbE5vZGUudXVpZCA9PT0gdGhpcy5jdXJyZW50VG91Y2hOb2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2tpbGxOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRUb3VjaE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUucG9zaXRpb24gPSB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxsUG93ZXJGdWxsRWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNraWxsUG93ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxSZWRCZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsUmVkQmdMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAtODAsIG5vZGUucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0VudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHYuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaWdodFwiLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5za2lsbEJ1dHRvbk5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAtMC41ICsgNzQsIDApXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModi53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24ueSwgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24ueilcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZFNraWxsUG93ZXIoODApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkU2tpbGxQb3dlcihwb3dlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFNraWxsUG93ZXIgPj0gODApIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTa2lsbFBvd2VyICs9IHBvd2VyO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IHJhdGUgPSB0aGlzLmN1cnJlbnRTa2lsbFBvd2VyIC8gODA7XHJcbiAgICAgICAgLy8gaWYgKHJhdGUgPT09IDEpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5za2lsbFBvd2VyRnVsbEVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsRG91SWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsRG91SWNvbi5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxSZWRCZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsUmVkQmdMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAtODAgKyByYXRlICogODAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIEdhbWVJbnN0YW5jZS5nZXRJbnN0YW5jZSgpLmFkZFBvd2VyQ291bnQocG93ZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvd0FkZFBvd2VyQW5pbUVmZmVjdChwb3dlclZhbHVlOiBudW1iZXIsIHBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5hZGRQb3dlckFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGU7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgdHcuYnkoMC40LCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA1LCAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHR3LmRlbGF5KDAuNilcclxuICAgICAgICB0dy50bygwLjYsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHYzKDQ1LCAzMCwgMClcclxuICAgICAgICB9KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2tpbGxQb3dlcihwb3dlclZhbHVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsUmVkQmdMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54ICsgZHQgKiAyMCwgbm9kZS5wb3NpdGlvbi55LCBub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wb3NpdGlvbi54ID4gMTUzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaSA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvTm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MyhvTm9kZS5wb3NpdGlvbi54IC0gMTUyLCBvTm9kZS5wb3NpdGlvbi55LCBvTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=