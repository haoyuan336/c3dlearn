System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js", "./GroundMapCtl.js", "./GroundTiled/GroundTiled.js", "./Effect/WinGoldAnimEffect.js", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, State, EnemyBase, GroundMapCtl, GroundTiled, WinGoldAnimEffect, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, EnemyController;

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

  function _reportPossibleCrUseOfWinGoldAnimEffect(extras) {
    _reporterNs.report("WinGoldAnimEffect", "./Effect/WinGoldAnimEffect", _context.meta, extras);
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
    }, function (_EffectWinGoldAnimEffectJs) {
      WinGoldAnimEffect = _EffectWinGoldAnimEffectJs.WinGoldAnimEffect;
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
      }), _dec6 = property({
        type: Prefab
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

          _initializerDefineProperty(_this, "goldAnim3dPrefab", _descriptor5, _assertThisInitialized(_this));

          _this.gameController = null;
          return _this;
        }

        _createClass(EnemyController, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.gameConfig = this.gameConfigRes.json; // this.state.setState('run');

            this.waveData = this.gameConfig['Level_' + this.currentLevelNum];
            this.gameController = this.node.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController);
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
        }, {
          key: "addEnemyAddGoldAnim",
          value: function addEnemyAddGoldAnim(goldCount, enemyTargetPos) {
            var node = instantiate(this.goldAnim3dPrefab);
            node.parent = this.node;
            node.getComponent(_crd && WinGoldAnimEffect === void 0 ? (_reportPossibleCrUseOfWinGoldAnimEffect({
              error: Error()
            }), WinGoldAnimEffect) : WinGoldAnimEffect).setGoldCount(goldCount, this.gameController);
            node.position = enemyTargetPos;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goldAnim3dPrefab", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiU3RhdGUiLCJFbmVteUJhc2UiLCJHcm91bmRNYXBDdGwiLCJHcm91bmRUaWxlZCIsIldpbkdvbGRBbmltRWZmZWN0IiwiR2FtZUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUNvbnRyb2xsZXIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRXYXZlSW5kZXgiLCJ3YXZlRGF0YSIsInN0YXRlIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJlbmRQb3MiLCJjdXJyZW50V2F2ZVRpbWUiLCJjdXJyZW50V2F2ZUR1cmFjdGlvbiIsImdhbWVDb250cm9sbGVyIiwiZ2FtZUNvbmZpZ1JlcyIsImpzb24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiYWRkU3RhdGUiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwiYWRkT25lV2F2ZUVuZW15IiwidGhlbiIsInNjaGVkdWxlT25jZSIsInByb21pc2VMaXN0IiwiYWRkRW5lbXlDb3VudCIsImluZGV4TGlzdCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImkiLCJjb3VudCIsImVycm9yIiwiaW5kZXhWMiIsImdldFZhbHVlIiwieCIsInkiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsImVuZW15Tm9kZSIsImVuZW15c1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJhY3RpdmUiLCJpbml0IiwicHVzaCIsInNob3dFbmVteUVudGVyQW5pbSIsIlByb21pc2UiLCJhbGwiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiLCJnb2xkQ291bnQiLCJlbmVteVRhcmdldFBvcyIsImdvbGRBbmltM2RQcmVmYWIiLCJzZXRHb2xkQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsRSxPQUFBQSxFOzs7O0FBQzdEQyxNQUFBQSxLLGdCQUFBQSxLOztBQUNBQyxNQUFBQSxTLHNCQUFBQSxTOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxXLDZCQUFBQSxXOztBQUVBQyxNQUFBQSxpQiw4QkFBQUEsaUI7O0FBQ0FDLE1BQUFBLGMscUJBQUFBLGM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCYixVLENBQXRCYSxPO0FBQVNDLE1BQUFBLFEsR0FBYWQsVSxDQUFiYyxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFYjtBQUFSLE9BQUQsQyxVQUdSVyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQVlSVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFZDtBQUFSLE9BQUQsQyxVQU1SWSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxF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QUFDSDs7OzRDQUVpQlgsSSxFQUFZO0FBQzFCLGlCQUFLLElBQUl3QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtoQyxhQUFMLENBQW1CVyxNQUF2QyxFQUErQ3FCLENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQUlvQixLQUFLLEdBQUcsS0FBS3BELGFBQUwsQ0FBbUJnQyxDQUFuQixDQUFaOztBQUNBLGtCQUFJb0IsS0FBSyxDQUFDQyxJQUFOLEtBQWU3QyxJQUFJLENBQUM2QyxJQUF4QixFQUE4QjtBQUMxQixxQkFBS3JELGFBQUwsQ0FBbUJzRCxNQUFuQixDQUEwQnRCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtoQyxhQUFaO0FBQ0g7Ozs4Q0FDbUJ1RCxTLEVBQW1CQyxjLEVBQXNCO0FBQ3pELGdCQUFJaEQsSUFBSSxHQUFHMUIsV0FBVyxDQUFDLEtBQUsyRSxnQkFBTixDQUF0QjtBQUNBakQsWUFBQUEsSUFBSSxDQUFDbUMsTUFBTCxHQUFjLEtBQUtuQyxJQUFuQjtBQUNBQSxZQUFBQSxJQUFJLENBQUNDLFlBQUw7QUFBQTtBQUFBLHdEQUFxQ2lELFlBQXJDLENBQWtESCxTQUFsRCxFQUE2RCxLQUFLbEQsY0FBbEU7QUFDQUcsWUFBQUEsSUFBSSxDQUFDb0MsUUFBTCxHQUFnQlksY0FBaEI7QUFDSDs7OztRQXBKZ0M5RSxTOzs7OztpQkFHQyxJOzs7Ozs7O2lCQUdFLEU7Ozs7Ozs7aUJBWUYsRTs7Ozs7OztpQkFNRyxJOzs7Ozs7O2lCQU9ILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEpzb25Bc3NldCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzIsIFR3ZWVuLCByYW5kb20sIFZlYzMgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuaW1wb3J0IHsgV2luR29sZEFuaW1FZmZlY3QgfSBmcm9tICcuL0VmZmVjdC9XaW5Hb2xkQW5pbUVmZmVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnRW5lbXlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ1JlczogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteXNQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50V2F2ZU1heEVuZW15Q291bnQgPSAwOyAvL+W9k+WJjeazouasoeacgOWkp+eahOaVjOS6uuaVsFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXZlRGF0YToge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgIHByaXZhdGUgYWRkRW5lbXlEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIHN0YXJ0UG9zTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmRQb3M6IFZlYzMgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2F2ZVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlRHVyYWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZ29sZEFuaW0zZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnUmVzLmpzb247XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZSgncnVuJyk7XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuY3VycmVudExldmVsTnVtXTtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB2MygwLCAwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVtdC1vdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSB0aGlzLndhdmVEYXRhW1wiRW5lbXlUeXBlXCJdW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24gPSB0aGlzLndhdmVEYXRhWydBZGRFbmVteUR1cmFjdGlvbiddW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlXCIsIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmFkZEVuZW15RHVyYWN0aW9uKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZE9uZVdhdmVFbmVteSgpIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBhZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZUluZGV4ID0gMDtcclxuICAgICAgICBsZXQgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWF4RW5lbXlDb3VudCArPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2ldLmNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heCBlbmVteSBjb3VudFwiLCBtYXhFbmVteUNvdW50KTtcclxuICAgICAgICBpZiAobWF4RW5lbXlDb3VudCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmlbDmja7plJnor69cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgYWRkRW5lbXlBZGRHb2xkQW5pbShnb2xkQ291bnQ6IG51bWJlciwgZW5lbXlUYXJnZXRQb3M6IFZlYzMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZ29sZEFuaW0zZFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoV2luR29sZEFuaW1FZmZlY3QpLnNldEdvbGRDb3VudChnb2xkQ291bnQsIHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSBlbmVteVRhcmdldFBvcztcclxuICAgIH1cclxuXHJcbn1cclxuIl19