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
            if (this.currentSkillPower >= 80) {
              return;
            }

            this.currentSkillPower += power;
            var rate = this.currentSkillPower / 80;

            if (rate === 1) {
              this.skillPowerFullEffect.active = true;
              this.skillDouIcon.active = true;
              this.skillDouIcon.position = this.skillButtonNode.position;
            }

            for (var i = 0; i < this.skillRedBgList.length; i++) {
              var node = this.skillRedBgList[i];
              node.position = v3(node.position.x, -80 + rate * 80, node.position.z);
            }
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
              position: v3(45, 10, 0)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ta2lsbEN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImlzVmFsaWQiLCJpbnN0YW50aWF0ZSIsInYzIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJmaW5kIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3ByaXRlRnJhbWUiLCJ2aWV3IiwiVHdlZW4iLCJHYW1lQ29udHJvbGxlciIsIlRvd2VyQmFzZSIsIlVJQ29udHJvbGxlciIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2tpbGxDdGwiLCJ0eXBlIiwic2tpbGxOb2RlTGlzdCIsImN1cnJlbnRUb3VjaE5vZGUiLCJjYW1lcmFOb2RlQ29tIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0aW1lb3V0UmVzb2x2ZSIsInVuZGVmaW5lZCIsInJheUNoZWNrUmVzb2x2ZSIsInRhcmdldFRvd2VyIiwiY3VycmVudFNraWxsUG93ZXIiLCJzdGF0ZSIsInNjcmVlbldpZHRoIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsInNraWxsQnV0dG9uTm9kZSIsInBvc2l0aW9uIiwieSIsInoiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJib3VuZGluZ0JveCIsInNraWxsRG91SWNvbiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsInBvcyIsImdldFVJTG9jYXRpb24iLCJjb250YWlucyIsInN0YXJ0Q2hlY2tTa2lsbE5vZGUiLCJzZXRIb2xkU2tpbGxJY29uIiwiVE9VQ0hfTU9WRSIsImVuZFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsIlRPVUNIX0VORCIsInNjaGVkdWxlT25jZSIsInByb21pc2VMaXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYWNlIiwidGhlbiIsInR3IiwidG8iLCJjYWxsIiwic3RhcnQiLCJyZWxlYXNlU2tpbGwiLCJhY3RpdmUiLCJza2lsbFBvd2VyRnVsbEVmZmVjdCIsInNraWxsUmVkQmdMaXN0IiwidiIsImhlaWdodCIsInNldFN0YXRlIiwicG93ZXIiLCJyYXRlIiwicG93ZXJWYWx1ZSIsImFkZFBvd2VyQW5pbTNkUHJlZmFiIiwicGFyZW50IiwiYnkiLCJkZWxheSIsImRlc3Ryb3kiLCJhZGRTa2lsbFBvd2VyIiwiZHQiLCJnZXRTdGF0ZSIsImluZGV4Iiwib05vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQTZEQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUVDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDN09DLE1BQUFBLGMscUJBQUFBLGM7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBR0FDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLEssZ0JBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCbEIsVSxDQUF0QmtCLE87QUFBU0MsTUFBQUEsUSxHQUFhbkIsVSxDQUFibUIsUTs7MEJBR0pD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LEtBQUtvQyxjQUFMLENBQW9CbkMsTUFBeEMsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7QUFDakQsb0JBQUlILElBQUksR0FBRyxLQUFLdUMsY0FBTCxDQUFvQnBDLENBQXBCLENBQVg7QUFDQUgsZ0JBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQjdCLEVBQUUsQ0FBQ2lDLElBQUksQ0FBQ0osUUFBTCxDQUFjMkIsQ0FBZCxHQUFrQjZCLEVBQUUsR0FBRyxFQUF4QixFQUE0QnBELElBQUksQ0FBQ0osUUFBTCxDQUFjQyxDQUExQyxFQUE2Q0csSUFBSSxDQUFDSixRQUFMLENBQWNFLENBQTNELENBQWxCOztBQUNBLG9CQUFJRSxJQUFJLENBQUNKLFFBQUwsQ0FBYzJCLENBQWQsR0FBa0IsR0FBdEIsRUFBMkI7QUFDdkIsc0JBQUkrQixLQUFLLEdBQUduRCxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBYyxDQUExQjtBQUNBLHNCQUFJb0QsS0FBSyxHQUFHLEtBQUtoQixjQUFMLENBQW9CZSxLQUFwQixDQUFaO0FBQ0F0RCxrQkFBQUEsSUFBSSxDQUFDSixRQUFMLEdBQWdCN0IsRUFBRSxDQUFDd0YsS0FBSyxDQUFDM0QsUUFBTixDQUFlMkIsQ0FBZixHQUFtQixHQUFwQixFQUF5QmdDLEtBQUssQ0FBQzNELFFBQU4sQ0FBZUMsQ0FBeEMsRUFBMkMwRCxLQUFLLENBQUMzRCxRQUFOLENBQWVFLENBQTFELENBQWxCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7Ozs7UUEzUnlCckMsUzs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdDLEk7Ozs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFHUyxDOzs7Ozs7O2lCQUdILEU7Ozs7Ozs7aUJBR0QsSTs7Ozs7OztpQkFnQkssSTs7Ozs7OztpQkFJRSxJOzs7Ozs7O2lCQUdWLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZpZXcsIFByZWZhYiwgQ0NJbnRlZ2VyLCBpc1ZhbGlkLCBpbnN0YW50aWF0ZSwgdjMsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBQaHlzaWNzU3lzdGVtLCBFdmVudFRvdWNoLCBSZWN0LCBWZWMyLCBmaW5kLCBDYW1lcmFDb21wb25lbnQsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQsIENvbGxpZGVyQ29tcG9uZW50LCBQaHlzaWNzUmF5UmVzdWx0LCB2aWV3LCBUd2VlbiwgdjIsIFZlYzMgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VPYmplY3QnO1xyXG5pbXBvcnQgeyBLdWFuZ0Jhb1NraWxsIH0gZnJvbSAnLi/pgZPlhbcvS3VhbmdCYW9Ta2lsbCc7XHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4vVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlsL1N0YXRlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdTa2lsbEN0bCcpXHJcbmV4cG9ydCBjbGFzcyBTa2lsbEN0bCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMg54uC5pq06YGT5YW3UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMg54uC5pq06YGT5YW3U3ByaXRlRnJhbWVSZWQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXHJcbiAgICBwdWJsaWMg54uC5pq06YGT5YW3U3ByaXRlRnJhbWVHcmF5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2tpbGxzTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ0NJbnRlZ2VyIH0pXHJcbiAgICBwdWJsaWMgY3VycmVudFNraWxsQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsUmVkQmdMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc2tpbGxCdXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNraWxsTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VG91Y2hOb2RlOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FtZXJhTm9kZUNvbTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHNraWxsQmdOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0b3VjaEVuZFJlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHRpbWVvdXRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSByYXlDaGVja1Jlc29sdmUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRUb3dlciA9IHVuZGVmaW5lZDsgLy/ph4rmlL7mioDog73nmoTnm67moIfloZRcclxuICAgIHByaXZhdGUgY3VycmVudFNraWxsUG93ZXIgPSAwOyAvL+W9k+WJjeeahOaKgOiDveiDvemHj+WAvFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsUG93ZXJGdWxsRWZmZWN0OiBOb2RlID0gbnVsbDsgLy/mioDog73og73ph4/lgLznmoTnibnmlYhcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgYWRkUG93ZXJBbmltM2RQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsRG91SWNvbjogTm9kZSA9IG51bGw7IC8v6ZyA6KaB5ouW5Yqo55qE5oqA6IO95Zu+5qCHXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gbGV0IHJlcGVhdFR3ID0gbmV3IFR3ZWVuKClcclxuICAgICAgICAvLyBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcyk7XHJcbiAgICAgICAgLy8gdHcucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgLy8gdHcuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSB2aWV3LmdldFZpc2libGVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24gPSB2MyhzY3JlZW5XaWR0aCAqIDAuNSArIDEwMCwgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24ueSwgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IGZpbmQoXCJHYW1lQ29udHJvbGxlclwiKS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlLm9uKFwidG91Y2gtc2NyZWVuLXRvLTNkXCIsIChyZXN1bHRMaXN0OiBQaHlzaWNzUmF5UmVzdWx0W10pID0+IHtcclxuICAgICAgICAgICAgLy/njqnlrrblsITkuK3kuobkuIDkuKogdG93ZXJcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0TGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIgJiYgcmVzdWx0LmNvbGxpZGVyLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnkuK3kuoZ0b3dlciAgc2tpbGwgbm9kZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmF5Q2hlY2tSZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFRvd2VyID0gcmVzdWx0LmNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJheUNoZWNrUmVzb2x2ZSgnY2hlY2stc3VjYycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlDaGVja1Jlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhTm9kZUNvbSA9IGZpbmQoXCJDYW1lcmFcIikuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy/pppblhYjnu5jliLbvvIwg5oqA6IO96LGG55qE6IOM5pmvXHJcbiAgICAgICAgLy8gbGV0IGFjdGl2ZVNraWxsQ291bnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXllckRhdGEuY3VycmVudEFjdGl2ZVNraWxsQ291bnQ7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVTa2lsbENvdW50OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy7ni4LmmrTpgZPlhbdTcHJpdGVGcmFtZUdyYXk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUuYWRkQ29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKGkgKiAxMTAgLSAzMjAsIDApO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2tpbGxzTm9kZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5za2lsbEJnTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIC8v5qC55o2u5b2T5YmN77yM5oqA6IO96LGG55qE5Liq5pWw77yM5Yid5aeL5YyW77yM5oqA6IO96YO9XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRTa2lsbENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmN1cnJlbnRTa2lsbENvdW50O1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNraWxsQ291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLueLguaatOmBk+WFt1Nwcml0ZUZyYW1lUmVkO1xyXG4gICAgICAgIC8vICAgICBub2RlLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gdGhpcy5za2lsbHNOb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdGhpcy5za2lsbEJnTm9kZUxpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFNraWxsQ291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMu54uC5pq06YGT5YW3UHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNraWxsc05vZGU7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MyhpICogMTAwIC0gMzAwLCAwLCAwKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5za2lsbE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBza2lsbCBub2RlIGxzaXRcIiwgdGhpcy5za2lsbE5vZGVMaXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IEV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3VjaCBzdGFydFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IHRoaXMuc2tpbGxEb3VJY29uLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRVSUxvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBlbmRQb3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgZW5kUG9zKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJib3VuZGluZyBib3hcIiwgYm91bmRpbmdCb3gpO1xyXG4gICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guY29udGFpbnMocG9zKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuoYg5oqA6IO954K5XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB0aGlzLnNraWxsRG91SWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDaGVja1NraWxsTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNldEhvbGRTa2lsbEljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRVSUxvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuY29udmVydFRvTm9kZVNwYWNlQVIodjMocG9zLngsIHBvcy55LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZW5kUG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlLnBvc2l0aW9uID0gdjMoZW5kUG9zLngsIGVuZFBvcy55LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvdWNoTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgLy/miYvkuIrmnIlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeK5pS+XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5zZXRIb2xkU2tpbGxJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJQ29udHJvbGxlcikuc2V0SG9sZFNraWxsSWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRSZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFJlc29sdmUoJ3RpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0Q2hlY2tTa2lsbE5vZGUoKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJheUNoZWNrUmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdXHJcbiAgICAgICAgUHJvbWlzZS5yYWNlKHByb21pc2VMaXN0KS50aGVuKCh0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6Kem5pG457uT5p2fIFxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RpbWVvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBub2RlID0gdGhpcy5za2lsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChub2RlLnV1aWQgPT09IHRoaXMuY3VycmVudFRvdWNoTm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuY3VycmVudFRvdWNoTm9kZS5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCZ05vZGVMaXN0W2ldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LaF5biC5LqGXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5jdXJyZW50VG91Y2hOb2RlKTtcclxuICAgICAgICAgICAgICAgIHR3LnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLph4rmlL7mioDog73miJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCh0aGlzLnRhcmdldFRvd2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi57uZ55uu5qCH5aGU5Y+R6YCB5raI5oGv77yM6YeK5pS+5oqA6IO9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5a2Y5Zyo6ZyA6KaB6YeK5pS+5oqA6IO955qE5aGU77yM6YKj5LmI6ZyA6KaB6K6p5q2k5aGU5p2l6YeK5pS+5oqA6IO9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG9iamVjdFR5cGUgPSB0aGlzLmN1cnJlbnRUb3VjaE5vZGUuZ2V0Q29tcG9uZW50KEt1YW5nQmFvU2tpbGwpLm9iamVjdFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvYmplY3QgdHlwZVwiLCBvYmplY3RUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFRvd2VyLmdldENvbXBvbmVudChUb3dlckJhc2UpLnJlbGVhc2VTa2lsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc2tpbGxOb2RlID0gdGhpcy5za2lsbE5vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoc2tpbGxOb2RlLnV1aWQgPT09IHRoaXMuY3VycmVudFRvdWNoTm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNraWxsTm9kZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50VG91Y2hOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlLnBvc2l0aW9uID0gdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbFBvd2VyRnVsbEVmZmVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2lsbFBvd2VyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsUmVkQmdMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5za2lsbFJlZEJnTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgLTgwLCBub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dFbnRlckFuaW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHYgPSB2aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB2LmhlaWdodDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHRcIiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMuc2tpbGxCdXR0b25Ob2RlKTtcclxuICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogdjMoMCwgaGVpZ2h0ICogLTAuNSArIDc0LCAwKVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHYzKHYud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uLnksIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uLnopXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwicnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRTa2lsbFBvd2VyKDgwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFkZFNraWxsUG93ZXIocG93ZXI6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTa2lsbFBvd2VyID49IDgwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2tpbGxQb3dlciArPSBwb3dlcjtcclxuXHJcblxyXG4gICAgICAgIGxldCByYXRlID0gdGhpcy5jdXJyZW50U2tpbGxQb3dlciAvIDgwO1xyXG4gICAgICAgIGlmIChyYXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxQb3dlckZ1bGxFZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5za2lsbERvdUljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5za2lsbERvdUljb24ucG9zaXRpb24gPSB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsUmVkQmdMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5za2lsbFJlZEJnTGlzdFtpXTtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgLTgwICsgcmF0ZSAqIDgwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dBZGRQb3dlckFuaW1FZmZlY3QocG93ZXJWYWx1ZTogbnVtYmVyLCBwb3M6IFZlYzMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYWRkUG93ZXJBbmltM2RQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5ub2RlO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKG5vZGUpO1xyXG4gICAgICAgIHR3LmJ5KDAuNCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdjMoMCwgNSwgMClcclxuICAgICAgICB9KTtcclxuICAgICAgICB0dy5kZWxheSgwLjYpXHJcbiAgICAgICAgdHcudG8oMC42LCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2Myg0NSwgMTAsIDApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFNraWxsUG93ZXIocG93ZXJWYWx1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbFJlZEJnTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsUmVkQmdMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCArIGR0ICogMjAsIG5vZGUucG9zaXRpb24ueSwgbm9kZS5wb3NpdGlvbi56KVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucG9zaXRpb24ueCA+IDE1Mykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGkgPT09IDAgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb05vZGUgPSB0aGlzLnNraWxsUmVkQmdMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMob05vZGUucG9zaXRpb24ueCAtIDE1Miwgb05vZGUucG9zaXRpb24ueSwgb05vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19