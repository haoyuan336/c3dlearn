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
              } // console.log("skill node list", this.skillNodeList.length);
              // for (let i = 0; i < this.skillNodeList.length; i++) {
              //     let node = this.skillNodeList[i];
              //     // let boundingBox = node.ge
              //     let boundingBox: Rect = node.getComponent(UITransformComponent).getBoundingBoxToWorld();
              //     let pos = event.getLocation();
              //     console.log(pos);
              //     console.log("bound ing box", boundingBox);
              //     if (boundingBox.contains(pos)) {
              //         console.log("找到了点");
              //         this.currentTouchNode = node;
              //     }
              // }
              // if (this.currentTouchNode) {
              //     // this.gameController
              //     // this.gameController.setHoldSkillIcon(true);
              //     this.node.getComponent(UIController).setHoldSkillIcon(true);
              //     this.startCheckSkillNode();
              // }

            });
            this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
              if (_this2.currentTouchNode) {
                var pos = event.getLocation();

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
                  node.position = v3(oNode.position.x - 153, oNode.position.y, oNode.position.z);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9VSS9Ta2lsbEN0bC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImlzVmFsaWQiLCJpbnN0YW50aWF0ZSIsInYzIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJmaW5kIiwiQ2FtZXJhQ29tcG9uZW50IiwiU3ByaXRlRnJhbWUiLCJ2aWV3IiwiVHdlZW4iLCJHYW1lQ29udHJvbGxlciIsIlRvd2VyQmFzZSIsIlVJQ29udHJvbGxlciIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2tpbGxDdGwiLCJ0eXBlIiwic2tpbGxOb2RlTGlzdCIsImN1cnJlbnRUb3VjaE5vZGUiLCJjYW1lcmFOb2RlQ29tIiwiZ2FtZUNvbnRyb2xsZXIiLCJ0aW1lb3V0UmVzb2x2ZSIsInVuZGVmaW5lZCIsInJheUNoZWNrUmVzb2x2ZSIsInRhcmdldFRvd2VyIiwiY3VycmVudFNraWxsUG93ZXIiLCJzdGF0ZSIsInNjcmVlbldpZHRoIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsInNraWxsQnV0dG9uTm9kZSIsInBvc2l0aW9uIiwieSIsInoiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJyZXN1bHRMaXN0IiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImNvbGxpZGVyIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJib3VuZGluZ0JveCIsInNraWxsRG91SWNvbiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsInBvcyIsImdldFVJTG9jYXRpb24iLCJjb250YWlucyIsInN0YXJ0Q2hlY2tTa2lsbE5vZGUiLCJzZXRIb2xkU2tpbGxJY29uIiwiVE9VQ0hfTU9WRSIsImdldExvY2F0aW9uIiwiZW5kUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ4IiwiVE9VQ0hfRU5EIiwic2NoZWR1bGVPbmNlIiwicHJvbWlzZUxpc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhY2UiLCJ0aGVuIiwidHciLCJ0byIsImNhbGwiLCJzdGFydCIsInJlbGVhc2VTa2lsbCIsImFjdGl2ZSIsInNraWxsUG93ZXJGdWxsRWZmZWN0Iiwic2tpbGxSZWRCZ0xpc3QiLCJ2IiwiaGVpZ2h0Iiwic2V0U3RhdGUiLCJwb3dlciIsInJhdGUiLCJwb3dlclZhbHVlIiwiYWRkUG93ZXJBbmltM2RQcmVmYWIiLCJwYXJlbnQiLCJieSIsImRlbGF5IiwiZGVzdHJveSIsImFkZFNraWxsUG93ZXIiLCJkdCIsImdldFN0YXRlIiwiaW5kZXgiLCJvTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTyxPQUFBQSxPO0FBQVNDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsb0IsT0FBQUEsb0I7QUFBNkRDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFtRUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSzs7OztBQUM3T0MsTUFBQUEsYyxxQkFBQUEsYzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFHQUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsSyxnQkFBQUEsSzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JsQixVLENBQXRCa0IsTztBQUFTQyxNQUFBQSxRLEdBQWFuQixVLENB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aUJBSUUsSTs7Ozs7OztpQkFHVixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWaWV3LCBQcmVmYWIsIENDSW50ZWdlciwgaXNWYWxpZCwgaW5zdGFudGlhdGUsIHYzLCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgUGh5c2ljc1N5c3RlbSwgRXZlbnRUb3VjaCwgUmVjdCwgVmVjMiwgZmluZCwgQ2FtZXJhQ29tcG9uZW50LCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50LCBDb2xsaWRlckNvbXBvbmVudCwgUGh5c2ljc1JheVJlc3VsdCwgdmlldywgVHdlZW4sIHYyLCBWZWMzIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL0dhbWVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgS3VhbmdCYW9Ta2lsbCB9IGZyb20gJy4v6YGT5YW3L0t1YW5nQmFvU2tpbGwnO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbC9TdGF0ZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnU2tpbGxDdGwnKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxDdGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIOeLguaatOmBk+WFt1ByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIOeLguaatOmBk+WFt1Nwcml0ZUZyYW1lUmVkID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVGcmFtZSB9KVxyXG4gICAgcHVibGljIOeLguaatOmBk+WFt1Nwcml0ZUZyYW1lR3JheSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsc05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENDSW50ZWdlciB9KVxyXG4gICAgcHVibGljIGN1cnJlbnRTa2lsbENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbFJlZEJnTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHNraWxsQnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbE5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFRvdWNoTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhbWVyYU5vZGVDb206IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBza2lsbEJnTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByaXZhdGUgdG91Y2hFbmRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSB0aW1lb3V0UmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgcmF5Q2hlY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHByaXZhdGUgdGFyZ2V0VG93ZXIgPSB1bmRlZmluZWQ7IC8v6YeK5pS+5oqA6IO955qE55uu5qCH5aGUXHJcbiAgICBwcml2YXRlIGN1cnJlbnRTa2lsbFBvd2VyID0gMDsgLy/lvZPliY3nmoTmioDog73og73ph4/lgLxcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbFBvd2VyRnVsbEVmZmVjdDogTm9kZSA9IG51bGw7IC8v5oqA6IO96IO96YeP5YC855qE54m55pWIXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGFkZFBvd2VyQW5pbTNkUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBza2lsbERvdUljb246IE5vZGUgPSBudWxsOyAvL+mcgOimgeaLluWKqOeahOaKgOiDveWbvuagh1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGxldCByZXBlYXRUdyA9IG5ldyBUd2VlbigpXHJcbiAgICAgICAgLy8gbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMpO1xyXG4gICAgICAgIC8vIHR3LnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAgIC8vIHR3LnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gdmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uID0gdjMoc2NyZWVuV2lkdGggKiAwLjUgKyAxMDAsIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uLnksIHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBmaW5kKFwiR2FtZUNvbnRyb2xsZXJcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubm9kZS5vbihcInRvdWNoLXNjcmVlbi10by0zZFwiLCAocmVzdWx0TGlzdDogUGh5c2ljc1JheVJlc3VsdFtdKSA9PiB7XHJcbiAgICAgICAgICAgIC8v546p5a625bCE5Lit5LqG5LiA5LiqIHRvd2VyXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyICYmIHJlc3VsdC5jb2xsaWRlci5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54K55Lit5LqGdG93ZXIgIHNraWxsIG5vZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJheUNoZWNrUmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRUb3dlciA9IHJlc3VsdC5jb2xsaWRlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlDaGVja1Jlc29sdmUoJ2NoZWNrLXN1Y2MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYU5vZGVDb20gPSBmaW5kKFwiQ2FtZXJhXCIpLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpO1xyXG4gICAgICAgIC8v6aaW5YWI57uY5Yi277yMIOaKgOiDveixhueahOiDjOaZr1xyXG4gICAgICAgIC8vIGxldCBhY3RpdmVTa2lsbENvdW50ID0gdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5ZXJEYXRhLmN1cnJlbnRBY3RpdmVTa2lsbENvdW50O1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlU2tpbGxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAvLyAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMu54uC5pq06YGT5YW3U3ByaXRlRnJhbWVHcmF5O1xyXG4gICAgICAgIC8vICAgICBub2RlLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucG9zaXRpb24gPSB2MyhpICogMTEwIC0gMzIwLCAwKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNraWxsc05vZGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxCZ05vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvL+agueaNruW9k+WJje+8jOaKgOiDveixhueahOS4quaVsO+8jOWIneWni+WMlu+8jOaKgOiDvemDvVxyXG4gICAgICAgIC8vIGxldCBjdXJyZW50U2tpbGxDb3VudCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheWVyRGF0YS5jdXJyZW50U2tpbGxDb3VudDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTa2lsbENvdW50OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy7ni4LmmrTpgZPlhbdTcHJpdGVGcmFtZVJlZDtcclxuICAgICAgICAvLyAgICAgbm9kZS5hZGRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBhcmVudCA9IHRoaXMuc2tpbGxzTm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCZ05vZGVMaXN0W2ldLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNraWxsTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRTa2lsbENvdW50OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLueLguaatOmBk+WFt1ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gdGhpcy5za2lsbHNOb2RlO1xyXG4gICAgICAgIC8vICAgICBub2RlLnBvc2l0aW9uID0gdjMoaSAqIDEwMCAtIDMwMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2tpbGxOb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgc2tpbGwgbm9kZSBsc2l0XCIsIHRoaXMuc2tpbGxOb2RlTGlzdCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG91Y2ggc3RhcnRcIiwgZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJvdW5kaW5nQm94ID0gdGhpcy5za2lsbERvdUljb24uZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRVSUxvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBlbmRQb3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NcIiwgZW5kUG9zKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJib3VuZGluZyBib3hcIiwgYm91bmRpbmdCb3gpO1xyXG4gICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guY29udGFpbnMocG9zKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnkuK3kuoYg5oqA6IO954K5XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUgPSB0aGlzLnNraWxsRG91SWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDaGVja1NraWxsTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNldEhvbGRTa2lsbEljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJza2lsbCBub2RlIGxpc3RcIiwgdGhpcy5za2lsbE5vZGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBib3VuZGluZ0JveCA9IG5vZGUuZ2VcclxuICAgICAgICAgICAgLy8gICAgIGxldCBib3VuZGluZ0JveDogUmVjdCA9IG5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocG9zKTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYm91bmQgaW5nIGJveFwiLCBib3VuZGluZ0JveCk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoYm91bmRpbmdCb3guY29udGFpbnMocG9zKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG54K5XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFRvdWNoTm9kZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlclxyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5zZXRIb2xkU2tpbGxJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChVSUNvbnRyb2xsZXIpLnNldEhvbGRTa2lsbEljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXJ0Q2hlY2tTa2lsbE5vZGUoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudDogRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2Myhwb3MueCwgcG9zLnksIDApKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBlbmRQb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUucG9zaXRpb24gPSB2MyhlbmRQb3MueCwgZW5kUG9zLnksIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+aJi+S4iuaciVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLph4rmlL5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLnNldEhvbGRTa2lsbEljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlDb250cm9sbGVyKS5zZXRIb2xkU2tpbGxJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dFJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSgndGltZW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnRDaGVja1NraWxsTm9kZSgpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmF5Q2hlY2tSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgICAgICBQcm9taXNlLnJhY2UocHJvbWlzZUxpc3QpLnRoZW4oKHR5cGUpID0+IHtcclxuICAgICAgICAgICAgLy/op6bmkbjnu5PmnZ8gXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGltZW91dCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsTm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKG5vZGUudXVpZCA9PT0gdGhpcy5jdXJyZW50VG91Y2hOb2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5jdXJyZW50VG91Y2hOb2RlLnBvc2l0aW9uID0gdGhpcy5za2lsbEJnTm9kZUxpc3RbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuY3VycmVudFRvdWNoTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLotoXluILkuoZcIilcclxuICAgICAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLmN1cnJlbnRUb3VjaE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdHcudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHR3LnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHiuaUvuaKgOiDveaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRoaXMudGFyZ2V0VG93ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnu5nnm67moIfloZTlj5HpgIHmtojmga/vvIzph4rmlL7mioDog71cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKjpnIDopoHph4rmlL7mioDog73nmoTloZTvvIzpgqPkuYjpnIDopoHorqnmraTloZTmnaXph4rmlL7mioDog71cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb2JqZWN0VHlwZSA9IHRoaXMuY3VycmVudFRvdWNoTm9kZS5nZXRDb21wb25lbnQoS3VhbmdCYW9Ta2lsbCkub2JqZWN0VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdCB0eXBlXCIsIG9iamVjdFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG93ZXIuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkucmVsZWFzZVNraWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5za2lsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBza2lsbE5vZGUgPSB0aGlzLnNraWxsTm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChza2lsbE5vZGUudXVpZCA9PT0gdGhpcy5jdXJyZW50VG91Y2hOb2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2tpbGxOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRUb3VjaE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRvdWNoTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUb3VjaE5vZGUucG9zaXRpb24gPSB0aGlzLnNraWxsQnV0dG9uTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxsUG93ZXJGdWxsRWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNraWxsUG93ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxSZWRCZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsUmVkQmdMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAtODAsIG5vZGUucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hOb2RlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0VudGVyQW5pbSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHYuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaWdodFwiLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4odGhpcy5za2lsbEJ1dHRvbk5vZGUpO1xyXG4gICAgICAgICAgICB0dy50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiB2MygwLCBoZWlnaHQgKiAtMC41ICsgNzQsIDApXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdjModi53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24ueSwgdGhpcy5za2lsbEJ1dHRvbk5vZGUucG9zaXRpb24ueilcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZFNraWxsUG93ZXIoODApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkU2tpbGxQb3dlcihwb3dlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNraWxsUG93ZXIgPj0gODApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTa2lsbFBvd2VyICs9IHBvd2VyO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHJhdGUgPSB0aGlzLmN1cnJlbnRTa2lsbFBvd2VyIC8gODA7XHJcbiAgICAgICAgaWYgKHJhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5za2lsbFBvd2VyRnVsbEVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNraWxsRG91SWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNraWxsRG91SWNvbi5wb3NpdGlvbiA9IHRoaXMuc2tpbGxCdXR0b25Ob2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2tpbGxSZWRCZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNraWxsUmVkQmdMaXN0W2ldO1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAtODAgKyByYXRlICogODAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd0FkZFBvd2VyQW5pbUVmZmVjdChwb3dlclZhbHVlOiBudW1iZXIsIHBvczogVmVjMykge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5hZGRQb3dlckFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdhbWVDb250cm9sbGVyLm5vZGU7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICBsZXQgdHcgPSBuZXcgVHdlZW4obm9kZSk7XHJcbiAgICAgICAgdHcuYnkoMC40LCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2MygwLCA1LCAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHR3LmRlbGF5KDAuNilcclxuICAgICAgICB0dy50bygwLjYsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHYzKDQ1LCAxMCwgMClcclxuICAgICAgICB9KTtcclxuICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2tpbGxQb3dlcihwb3dlclZhbHVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNraWxsUmVkQmdMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54ICsgZHQgKiAyMCwgbm9kZS5wb3NpdGlvbi55LCBub2RlLnBvc2l0aW9uLnopXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wb3NpdGlvbi54ID4gMTUzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaSA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvTm9kZSA9IHRoaXMuc2tpbGxSZWRCZ0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSB2MyhvTm9kZS5wb3NpdGlvbi54IC0gMTUzLCBvTm9kZS5wb3NpdGlvbi55LCBvTm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=