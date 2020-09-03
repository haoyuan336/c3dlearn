System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, State, EnemyBase, GroundMapCtl, GroundTiled, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, EnemyController;

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./Enemys/EnemyBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundMapCtl(extras) {
    _reporterNs.report("GroundMapCtl", "./GroundMapCtl", _context.meta, extras);
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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_GroundMapCtlJs) {
      GroundMapCtl = _GroundMapCtlJs.GroundMapCtl;
    }, function (_GroundTiledGroundTiledJs) {
      GroundTiled = _GroundTiledGroundTiledJs.GroundTiled;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9eb73bkCLlAgoJJ0ubFFvcV", "EnemyController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnemyController", EnemyController = (_dec = ccclass('EnemyController'), _dec2 = property({
        type: JsonAsset
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(EnemyController, _Component);

        function EnemyController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EnemyController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnemyController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameConfigRes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemysPrefabList", _descriptor2, _assertThisInitialized(_this));

          _this.gameConfig = null;
          _this.currentLevelNum = 0;
          _this.currentWaveIndex = 0;
          _this.waveData = null;
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.addEnemyDuraction = 1;
          _this.enemyNodeList = [];
          _this.currentRandomEnemyTypeList = [];

          _initializerDefineProperty(_this, "startPosNodeList", _descriptor3, _assertThisInitialized(_this));

          _this.endPos = null;

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor4, _assertThisInitialized(_this));

          _this.currentWaveTime = 0;
          _this.currentWaveDuraction = 1;
          return _this;
        }

        _createClass(EnemyController, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.gameConfig = this.gameConfigRes.json; // this.state.setState('run');

            this.waveData = this.gameConfig['Level_' + this.currentLevelNum];
            this.endPos = v3(0, 0, 0);
            this.state.addState("enter-next-wave", function () {
              if (_this2.currentWaveIndex == _this2.waveData['EnemyType'].length) {
                _this2.state.setState("add-enemt-over");

                console.log("游戏结束");
                return;
              }

              _this2.currentRandomEnemyTypeList = _this2.waveData["EnemyType"][_this2.currentWaveIndex];
              _this2.addEnemyDuraction = _this2.waveData['AddEnemyDuraction'][_this2.currentWaveIndex];

              _this2.node.emit("refer-current-wave", _this2.currentWaveIndex + 1);

              _this2.addOneWaveEnemy().then(function () {
                _this2.currentWaveIndex++;

                _this2.scheduleOnce(function () {
                  _this2.state.setState("enter-next-wave");
                }, _this2.addEnemyDuraction);
              });
            }); // this.node.on("player-click-game", () => {
            //     this.state.setState("enter-next-wave");
            // });
          }
        }, {
          key: "startGame",
          value: function startGame() {
            this.state.setState("enter-next-wave");
          }
        }, {
          key: "addOneWaveEnemy",
          value: function addOneWaveEnemy() {
            //增加一波敌人
            var promiseList = [];
            var addEnemyCount = 0;
            var indexList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getInEdageIndexList();
            var nodeMapList = this.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
              error: Error()
            }), GroundMapCtl) : GroundMapCtl).getMapNodeList();
            var randomIndex = Math.round(Math.random() * (indexList.length - 1));
            var enemyTypeIndex = 0;
            var waveAddEnemyCount = 0;
            var maxEnemyCount = 0;

            for (var i = 0; i < this.currentRandomEnemyTypeList.length; i++) {
              maxEnemyCount += this.currentRandomEnemyTypeList[i].count;
            } // console.log("max enemy count", maxEnemyCount);


            if (maxEnemyCount >= indexList.length) {
              console.error("数据错误");
              return;
            }

            while (addEnemyCount < maxEnemyCount) {
              // addEnemyCount ++;
              // console.log("random index", randomIndex);
              if (randomIndex >= indexList.length) {
                randomIndex = 0;
              }

              var indexV2 = indexList[randomIndex];
              var node = nodeMapList.getValue(indexV2.x, indexV2.y);

              if (node && node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                error: Error()
              }), GroundTiled) : GroundTiled)) {
                var groundTiled = node.getComponent(_crd && GroundTiled === void 0 ? (_reportPossibleCrUseOfGroundTiled({
                  error: Error()
                }), GroundTiled) : GroundTiled);

                if (groundTiled.getIsVoid()) {
                  // console.log("找到了一个空位置");
                  // let currentEnemyType = this.currentRandomEnemyTypeList
                  // let enemyNode = instantiate(this.enenm)
                  var waveData = this.currentRandomEnemyTypeList[enemyTypeIndex];
                  var type = waveData.type;
                  var count = waveData.count;

                  if (waveAddEnemyCount >= count) {
                    waveAddEnemyCount = 0;
                    enemyTypeIndex++;
                  }

                  var enemyNode = instantiate(this.enemysPrefabList[type]);
                  enemyNode.parent = this.node;
                  enemyNode.position = v3(node.position.x, 20, node.position.z);
                  enemyNode.active = false;
                  enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).init(this.gameConfig, node.position, this.endPos); // this.showEnemyEnterAnim(enemyNode, addEnemyCount);

                  promiseList.push(enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(addEnemyCount, this));
                  addEnemyCount++;
                  this.enemyNodeList.push(enemyNode); // console.log("增加一个敌人")
                } // randomIndex++


                randomIndex = Math.round(Math.random() * (indexList.length - 1));
              } else {
                addEnemyCount++;
              }
            }

            return Promise.all(promiseList);
          }
        }, {
          key: "removeEnemyInList",
          value: function removeEnemyInList(node) {
            for (var i = 0; i < this.enemyNodeList.length; i++) {
              var enemy = this.enemyNodeList[i];

              if (enemy.uuid === node.uuid) {
                this.enemyNodeList.splice(i, 1);
              }
            }
          }
        }, {
          key: "getCurrentEnemyNodeList",
          value: function getCurrentEnemyNodeList() {
            return this.enemyNodeList;
          }
        }]);

        return EnemyController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameConfigRes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemysPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startPosNodeList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiU3RhdGUiLCJFbmVteUJhc2UiLCJHcm91bmRNYXBDdGwiLCJHcm91bmRUaWxlZCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15Q29udHJvbGxlciIsInR5cGUiLCJnYW1lQ29uZmlnIiwiY3VycmVudExldmVsTnVtIiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCIsImVuZFBvcyIsImN1cnJlbnRXYXZlVGltZSIsImN1cnJlbnRXYXZlRHVyYWN0aW9uIiwiZ2FtZUNvbmZpZ1JlcyIsImpzb24iLCJhZGRTdGF0ZSIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJlbWl0IiwiYWRkT25lV2F2ZUVuZW15IiwidGhlbiIsInNjaGVkdWxlT25jZSIsInByb21pc2VMaXN0IiwiYWRkRW5lbXlDb3VudCIsImluZGV4TGlzdCIsImdldENvbXBvbmVudCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImkiLCJjb3VudCIsImVycm9yIiwiaW5kZXhWMiIsImdldFZhbHVlIiwieCIsInkiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsImVuZW15Tm9kZSIsImVuZW15c1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJhY3RpdmUiLCJpbml0IiwicHVzaCIsInNob3dFbmVteUVudGVyQW5pbSIsIlByb21pc2UiLCJhbGwiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDN0RDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLFcsNkJBQUFBLFc7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUdSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQVlSUSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQU1SVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZkRhLFUsR0FBaUIsSTtnQkFDakJDLGUsR0FBa0IsQztnQkFFbEJDLGdCLEdBQTJCLEM7Z0JBQzNCQyxRLEdBQWUsSTtnQkFDZkMsSyxHQUFlO0FBQUE7QUFBQSwrQjtnQkFDZkMsaUIsR0FBNEIsQztnQkFDNUJDLGEsR0FBd0IsRTtnQkFDeEJD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Q0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUsvQixhQUFaO0FBQ0g7Ozs7UUEzSWdDcEIsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IEdyb3VuZE1hcEN0bCB9IGZyb20gJy4vR3JvdW5kTWFwQ3RsJztcclxuaW1wb3J0IHsgR3JvdW5kVGlsZWQgfSBmcm9tICcuL0dyb3VuZFRpbGVkL0dyb3VuZFRpbGVkJztcclxuaW1wb3J0IE15MmRBcnJheSBmcm9tICcuL3V0aWwvTXkyQXJyYXknO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15Q29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdSZXM6IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudExldmVsTnVtID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVNYXhFbmVteUNvdW50ID0gMDsgLy/lvZPliY3ms6LmrKHmnIDlpKfnmoTmlYzkurrmlbBcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F2ZURhdGE6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydFBvc05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5jdXJyZW50TGV2ZWxOdW1dO1xyXG5cclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHYzKDAsIDAsIDApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT0gdGhpcy53YXZlRGF0YVsnRW5lbXlUeXBlJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IHRoaXMud2F2ZURhdGFbXCJFbmVteVR5cGVcIl1bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteUR1cmFjdGlvbiA9IHRoaXMud2F2ZURhdGFbJ0FkZEVuZW15RHVyYWN0aW9uJ11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlXCIsICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkT25lV2F2ZUVuZW15KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5hZGRFbmVteUR1cmFjdGlvbilcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYWRkT25lV2F2ZUVuZW15KCkge1xyXG4gICAgICAgIC8v5aKe5Yqg5LiA5rOi5pWM5Lq6XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgZW5lbXlUeXBlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXhFbmVteUNvdW50ICs9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbaV0uY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4IGVuZW15IGNvdW50XCIsIG1heEVuZW15Q291bnQpO1xyXG4gICAgICAgIGlmIChtYXhFbmVteUNvdW50ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaVsOaNrumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYWRkRW5lbXlDb3VudCA8IG1heEVuZW15Q291bnQpIHtcclxuICAgICAgICAgICAgLy8gYWRkRW5lbXlDb3VudCArKztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyYW5kb20gaW5kZXhcIiwgcmFuZG9tSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tSW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobkuIDkuKrnqbrkvY3nva5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRFbmVteVR5cGUgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbm0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtlbmVteVR5cGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB3YXZlRGF0YS50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHdhdmVEYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXZlQWRkRW5lbXlDb3VudCA+PSBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBvc2l0aW9uID0gdjMobm9kZS5wb3NpdGlvbi54LCAyMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5pbml0KHRoaXMuZ2FtZUNvbmZpZywgbm9kZS5wb3NpdGlvbiwgdGhpcy5lbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4quaVjOS6ulwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmFuZG9tSW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRW5lbXlJbkxpc3Qobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGVuZW15LnV1aWQgPT09IG5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==