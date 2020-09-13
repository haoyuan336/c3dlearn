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
                // this.state.setState("add-enemt-over");
                _this2.state.setState("add-one-boss");

                console.log("游戏结束");
                return;
              }

              _this2.currentRandomEnemyTypeList = _this2.waveData["EnemyType"][_this2.currentWaveIndex];
              _this2.addEnemyDuraction = _this2.waveData['AddEnemyDuraction'][_this2.currentWaveIndex];

              _this2.node.emit("refer-current-wave", _this2.currentWaveIndex);

              if (_this2.currentWaveIndex === _this2.waveData['EnemyType'].length - 1) {
                _this2.addOneBossEnemy();
              } else {
                _this2.addOneWaveEnemy().then(function () {
                  _this2.currentWaveIndex++;

                  _this2.scheduleOnce(function () {
                    _this2.state.setState("enter-next-wave");
                  }, _this2.addEnemyDuraction);
                });
              }
            });
            this.state.addState("add-one-boss", function () {
              console.log("开始增加boss");
            }); // this.node.on("player-click-game", () => {
            //     this.state.setState("enter-next-wave");
            // });
          }
        }, {
          key: "addOneBossEnemy",
          value: function addOneBossEnemy() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var indexList = _this3.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl).getInEdageIndexList();

              var randomIndex = Math.round(Math.random() * (indexList.length - 1));
              var pos = indexList[randomIndex];

              var nodeMapList = _this3.node.getComponent(_crd && GroundMapCtl === void 0 ? (_reportPossibleCrUseOfGroundMapCtl({
                error: Error()
              }), GroundMapCtl) : GroundMapCtl).getMapNodeList();

              var node = nodeMapList.getValue(pos.x, pos.y);
              var type = _this3.currentRandomEnemyTypeList[0].type;
              var enemyNode = instantiate(_this3.enemysPrefabList[type]);
              console.log("enemy node", enemyNode);
              enemyNode.parent = _this3.node;
              enemyNode.position = v3(node.position.x, 0, node.position.z); // enemyNode.active = false;
            });
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
                  console.log("enemy node", enemyNode);
                  enemyNode.parent = this.node;
                  enemyNode.position = v3(node.position.x, 0, node.position.z);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiVmVjMiIsIlN0YXRlIiwiRW5lbXlCYXNlIiwiR3JvdW5kTWFwQ3RsIiwiR3JvdW5kVGlsZWQiLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15Q29udHJvbGxlciIsInR5cGUiLCJnYW1lQ29uZmlnIiwiY3VycmVudExldmVsTnVtIiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCIsImVuZFBvcyIsImN1cnJlbnRXYXZlVGltZSIsImN1cnJlbnRXYXZlRHVyYWN0aW9uIiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRDdXJyZW50TGV2ZWxOdW0iLCJhZGRTdGF0ZSIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJhZGRPbmVCb3NzRW5lbXkiLCJhZGRPbmVXYXZlRW5lbXkiLCJ0aGVuIiwic2NoZWR1bGVPbmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbmRleExpc3QiLCJnZXRJbkVkYWdlSW5kZXhMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJwb3MiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwiZ2V0VmFsdWUiLCJ4IiwieSIsImVuZW15Tm9kZSIsImVuZW15c1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJwcm9taXNlTGlzdCIsImFkZEVuZW15Q291bnQiLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImkiLCJjb3VudCIsImVycm9yIiwiaW5kZXhWMiIsImdyb3VuZFRpbGVkIiwiZ2V0SXNWb2lkIiwiYWN0aXZlIiwiaW5pdCIsInB1c2giLCJzaG93RW5lbXlFbnRlckFuaW0iLCJhbGwiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEksT0FBQUEsSTs7OztBQUNqRUMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7QUFDVUMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDVkMsTUFBQUEsVyw2QkFBQUEsVzs7QUFHQUMsTUFBQUEsYyxxQkFBQUEsYzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JiLFUsQ0FBdEJhLE87QUFBU0MsTUFBQUEsUSxHQUFhZCxVLENBQWJjLFE7O2lDQUdKQyxlLFdBRFpGLE9BQU8sQ0FBQyxpQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FBRCxDLFVBR1JXLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBWVJVLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDLFVBTVJZLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVkO0FBQVIsT0FBRCxDOzs7Ozs7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QVMsQ0FBVCxFQUFZLENBQVosQ0FBeEcsQ0FBakI7QUFDQTBELGtCQUFBQSxhQUFhO0FBQ2IsdUJBQUsxQyxhQUFMLENBQW1Cc0QsSUFBbkIsQ0FBd0JsQixTQUF4QixFQXRCeUIsQ0F1QnpCO0FBQ0gsaUJBMUJ1QyxDQTJCeEM7OztBQUNBVixnQkFBQUEsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCTCxTQUFTLENBQUNaLE1BQVYsR0FBbUIsQ0FBcEMsQ0FBWCxDQUFkO0FBQ0gsZUE3QkQsTUE2Qk87QUFDSDhCLGdCQUFBQSxhQUFhO0FBQ2hCO0FBQ0o7O0FBQ0QsbUJBQU9yQixPQUFPLENBQUNtQyxHQUFSLENBQVlmLFdBQVosQ0FBUDtBQUNIOzs7NENBRWlCakMsSSxFQUFZO0FBQzFCLGlCQUFLLElBQUlzQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs5QyxhQUFMLENBQW1CWSxNQUF2QyxFQUErQ2tDLENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQUlXLEtBQUssR0FBRyxLQUFLekQsYUFBTCxDQUFtQjhDLENBQW5CLENBQVo7O0FBQ0Esa0JBQUlXLEtBQUssQ0FBQ0MsSUFBTixLQUFlbEQsSUFBSSxDQUFDa0QsSUFBeEIsRUFBOEI7QUFDMUIscUJBQUsxRCxhQUFMLENBQW1CMkQsTUFBbkIsQ0FBMEJiLENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUs5QyxhQUFaO0FBQ0g7Ozs7UUF0S2dDdEIsUzs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRSxFOzs7Ozs7O2lCQVlGLEU7Ozs7Ozs7aUJBTUcsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MywgVmVjMiwgVHdlZW4sIHJhbmRvbSwgVmVjMyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmltcG9ydCB7IENlbGxOb2RlLCBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0VuZW15Q29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEpzb25Bc3NldCB9KVxyXG4gICAgcHVibGljIGdhbWVDb25maWdSZXM6IEpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlzUHJlZmFiTGlzdDogUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudExldmVsTnVtID0gMDtcclxuICAgIC8vIHByaXZhdGUgY3VycmVudFdhdmVNYXhFbmVteUNvdW50ID0gMDsgLy/lvZPliY3ms6LmrKHmnIDlpKfnmoTmlYzkurrmlbBcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F2ZURhdGE6IHt9ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzdGFydFBvc05vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5kUG9zOiBWZWMzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlIZWFsdGhCYXJDdGxOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUNvbmZpZ1Jlcy5qc29uO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3J1bicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDdXJyZW50TGV2ZWxOdW0oKV07XHJcblxyXG4gICAgICAgIHRoaXMuZW5kUG9zID0gdjMoMCwgMCwgMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVJbmRleCA9PSB0aGlzLndhdmVEYXRhWydFbmVteVR5cGUnXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtZW5lbXQtb3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJhZGQtb25lLWJvc3NcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gdGhpcy53YXZlRGF0YVtcIkVuZW15VHlwZVwiXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJlZmVyLWN1cnJlbnQtd2F2ZVwiLCB0aGlzLmN1cnJlbnRXYXZlSW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlSW5kZXggPT09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lQm9zc0VuZW15KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5hZGRFbmVteUR1cmFjdGlvbilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiYWRkLW9uZS1ib3NzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vlop7liqBib3NzXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkT25lQm9zc0VuZW15KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpbmRleExpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICBsZXQgcG9zOiBWZWMyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbMF0udHlwZTtcclxuICAgICAgICAgICAgbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlzUHJlZmFiTGlzdFt0eXBlXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMCwgbm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgLy8gZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkT25lV2F2ZUVuZW15KCkge1xyXG4gICAgICAgIC8v5aKe5Yqg5LiA5rOi5pWM5Lq6XHJcbiAgICAgICAgbGV0IHByb21pc2VMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbmRleExpc3Q6IFZlYzJbXSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFwQ3RsKS5nZXRJbkVkYWdlSW5kZXhMaXN0KCk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXBMaXN0OiBNeTJkQXJyYXk8Tm9kZT4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0TWFwTm9kZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBsZXQgZW5lbXlUeXBlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXhFbmVteUNvdW50ICs9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbaV0uY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4IGVuZW15IGNvdW50XCIsIG1heEVuZW15Q291bnQpO1xyXG4gICAgICAgIGlmIChtYXhFbmVteUNvdW50ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaVsOaNrumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYWRkRW5lbXlDb3VudCA8IG1heEVuZW15Q291bnQpIHtcclxuICAgICAgICAgICAgLy8gYWRkRW5lbXlDb3VudCArKztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyYW5kb20gaW5kZXhcIiwgcmFuZG9tSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tSW5kZXggPj0gaW5kZXhMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbmRleFYyID0gaW5kZXhMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBub2RlTWFwTGlzdC5nZXRWYWx1ZShpbmRleFYyLngsIGluZGV4VjIueSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZFRpbGVkID0gbm9kZS5nZXRDb21wb25lbnQoR3JvdW5kVGlsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VuZFRpbGVkLmdldElzVm9pZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobkuIDkuKrnqbrkvY3nva5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRFbmVteVR5cGUgPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVuZW15Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbm0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdhdmVEYXRhID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFtlbmVteVR5cGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB3YXZlRGF0YS50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHdhdmVEYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXZlQWRkRW5lbXlDb3VudCA+PSBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZlQWRkRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW15c1ByZWZhYkxpc3RbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgbm9kZVwiLCBlbmVteU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucG9zaXRpb24gPSB2Myhub2RlLnBvc2l0aW9uLngsIDAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93RW5lbXlFbnRlckFuaW0oZW5lbXlOb2RlLCBhZGRFbmVteUNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlTGlzdC5wdXNoKGVuZW15Tm9kZS5nZXRDb21wb25lbnQoRW5lbXlCYXNlKS5zaG93RW5lbXlFbnRlckFuaW0oYWRkRW5lbXlDb3VudCwgdGhpcywgdGhpcy5nYW1lQ29udHJvbGxlciwgaW5kZXhWMiwgbmV3IFZlYzIoNSwgNSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnB1c2goZW5lbXlOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4quaVjOS6ulwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmFuZG9tSW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoaW5kZXhMaXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZEVuZW15Q291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRW5lbXlJbkxpc3Qobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGVuZW15LnV1aWQgPT09IG5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteU5vZGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=