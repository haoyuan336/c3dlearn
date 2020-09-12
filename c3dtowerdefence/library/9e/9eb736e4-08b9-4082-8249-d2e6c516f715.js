System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, Vec2, State, EnemyBase, GroundMapCtl, GroundTiled, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, EnemyController;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
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
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
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
          _this.gameController = null;
          return _this;
        }

        _createClass(EnemyController, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.gameConfig = this.gameConfigRes.json; // this.state.setState('run');

            this.gameController = this.node.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
            this.waveData = this.gameConfig['Level_' + this.gameController.getCurrentLevelNum()];
            this.endPos = v3(0, 0, 0);
            this.state.addState("enter-next-wave", function () {
              if (_this2.currentWaveIndex == _this2.waveData['EnemyType'].length) {
                _this2.state.setState("add-enemt-over");

                console.log("游戏结束");
                return;
              }

              _this2.currentRandomEnemyTypeList = _this2.waveData["EnemyType"][_this2.currentWaveIndex];
              _this2.addEnemyDuraction = _this2.waveData['AddEnemyDuraction'][_this2.currentWaveIndex];

              _this2.node.emit("refer-current-wave", _this2.currentWaveIndex);

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
              var node = nodeMapList.getValue(indexV2.x, indexV2.y).node;

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
                  }), EnemyBase) : EnemyBase).showEnemyEnterAnim(addEnemyCount, this, this.gameController, indexV2, new Vec2(5, 5)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlN0YXRlIiwiRW5lbXlCYXNlIiwiR3JvdW5kTWFwQ3RsIiwiR3JvdW5kVGlsZWQiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15Q29udHJvbGxlciIsInR5cGUiLCJnYW1lQ29uZmlnIiwiY3VycmVudExldmVsTnVtIiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCIsImVuZFBvcyIsImN1cnJlbnRXYXZlVGltZSIsImN1cnJlbnRXYXZlRHVyYWN0aW9uIiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJhZGRTdGF0ZSIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwic2NoZWR1bGVPbmNlIiwicHJvbWlzZUxpc3QiLCJhZGRFbmVteUNvdW50IiwiaW5kZXhMaXN0IiwiZ2V0SW5FZGFnZUluZGV4TGlzdCIsIm5vZGVNYXBMaXN0IiwiZ2V0TWFwTm9kZUxpc3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImVuZW15VHlwZUluZGV4Iiwid2F2ZUFkZEVuZW15Q291bnQiLCJtYXhFbmVteUNvdW50IiwiaSIsImNvdW50IiwiZXJyb3IiLCJpbmRleFYyIiwiZ2V0VmFsdWUiLCJ4IiwieSIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiZW5lbXlOb2RlIiwiZW5lbXlzUHJlZmFiTGlzdCIsInBhcmVudCIsInBvc2l0aW9uIiwieiIsImFjdGl2ZSIsImluaXQiLCJwdXNoIiwic2hvd0VuZW15RW50ZXJBbmltIiwiUHJvbWlzZSIsImFsbCIsImVuZW15IiwidXVpZCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7QUFBSUMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ2pFQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNVQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNWQyxNQUFBQSxXLDZCQUFBQSxXOztBQUdBQyxNQUFBQSxjLHFCQUFBQSxjOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQmIsVSxDQUF0QmEsTztBQUFTQyxNQUFBQSxRLEdBQWFkLFUsQ0FBYmMsUTs7aUNBR0pDLGUsV0FEWkYsT0FBTyxDQUFDLGlCQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFHUlcsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFZUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFNUlksUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWZEZSxVLEdBQWlCLEk7Z0JBQ2pCQyxlLEdB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QlosSSxFQUFZO0FBQzFCLGlCQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtqQyxhQUFMLENBQW1CWSxNQUF2QyxFQUErQ3FCLENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQUlvQixLQUFLLEdBQUcsS0FBS3JELGFBQUwsQ0FBbUJpQyxDQUFuQixDQUFaOztBQUNBLGtCQUFJb0IsS0FBSyxDQUFDQyxJQUFOLEtBQWU5QyxJQUFJLENBQUM4QyxJQUF4QixFQUE4QjtBQUMxQixxQkFBS3RELGFBQUwsQ0FBbUJ1RCxNQUFuQixDQUEwQnRCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtqQyxhQUFaO0FBQ0g7Ozs7UUEvSWdDdEIsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IENlbGxOb2RlLCBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15Q29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdSZXM6IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudExldmVsTnVtID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVNYXhFbmVteUNvdW50ID0gMDsgLy/lvZPliY3ms6LmrKHmnIDlpKfnmoTmlYzkurrmlbBcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F2ZURhdGE6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydFBvc05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbmZpZ1Jlcy5qc29uO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3J1bicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXQtb3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPbmVXYXZlRW5lbXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5hZGRFbmVteUR1cmFjdGlvbilcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRPbmVXYXZlRW5lbXkoKSB7XHJcbiAgICAgICAgLy/lop7liqDkuIDms6LmlYzkurpcclxuICAgICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgYWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4TGlzdDogVmVjMltdID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldEluRWRhZ2VJbmRleExpc3QoKTtcclxuICAgICAgICBsZXQgbm9kZU1hcExpc3Q6IE15MmRBcnJheTxDZWxsTm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgZW5lbXlUeXBlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXhFbmVteUNvdW50ICs9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbaV0uY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4IGVuZW15IGNvdW50XCIsIG1heEVuZW15Q291bnQpO1xyXG4gICAgICAgIGlmIChtYXhFbmVteUNvdW50ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaVsOaNrumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYWRkRW5lbXlDb3VudCA8IG1heEVuZW15Q291bnQpIHtcclxuICAgICAgICAgICAgLy8gYWRkRW5lbXlDb3VudCArKztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyYW5kb20gaW5kZXhcIiwgcmFuZG9tSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tSW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSkubm9kZTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kVGlsZWQgPSBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kVGlsZWQuZ2V0SXNWb2lkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huS4gOS4quepuuS9jee9rlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEVuZW15VHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVubSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2F2ZURhdGEgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2VuZW15VHlwZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHdhdmVEYXRhLnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gd2F2ZURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhdmVBZGRFbmVteUNvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVBZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDIwLCBub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCBub2RlLnBvc2l0aW9uLCB0aGlzLmVuZFBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZW15RW50ZXJBbmltKGVuZW15Tm9kZSwgYWRkRW5lbXlDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUxpc3QucHVzaChlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuc2hvd0VuZW15RW50ZXJBbmltKGFkZEVuZW15Q291bnQsIHRoaXMsIHRoaXMuZ2FtZUNvbnRyb2xsZXIsIGluZGV4VjIsIG5ldyBWZWMyKDUsIDUpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19