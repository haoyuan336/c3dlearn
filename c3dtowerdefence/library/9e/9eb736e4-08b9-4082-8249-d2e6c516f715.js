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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiU3RhdGUiLCJFbmVteUJhc2UiLCJHcm91bmRNYXBDdGwiLCJHcm91bmRUaWxlZCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVuZW15Q29udHJvbGxlciIsInR5cGUiLCJnYW1lQ29uZmlnIiwiY3VycmVudExldmVsTnVtIiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJjdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdCIsImVuZFBvcyIsImN1cnJlbnRXYXZlVGltZSIsImN1cnJlbnRXYXZlRHVyYWN0aW9uIiwiZ2FtZUNvbmZpZ1JlcyIsImpzb24iLCJhZGRTdGF0ZSIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJlbWl0IiwiYWRkT25lV2F2ZUVuZW15IiwidGhlbiIsInNjaGVkdWxlT25jZSIsInByb21pc2VMaXN0IiwiYWRkRW5lbXlDb3VudCIsImluZGV4TGlzdCIsImdldENvbXBvbmVudCIsImdldEluRWRhZ2VJbmRleExpc3QiLCJub2RlTWFwTGlzdCIsImdldE1hcE5vZGVMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbmVteVR5cGVJbmRleCIsIndhdmVBZGRFbmVteUNvdW50IiwibWF4RW5lbXlDb3VudCIsImkiLCJjb3VudCIsImVycm9yIiwiaW5kZXhWMiIsImdldFZhbHVlIiwieCIsInkiLCJncm91bmRUaWxlZCIsImdldElzVm9pZCIsImVuZW15Tm9kZSIsImVuZW15c1ByZWZhYkxpc3QiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJhY3RpdmUiLCJpbml0IiwicHVzaCIsInNob3dFbmVteUVudGVyQW5pbSIsIlByb21pc2UiLCJhbGwiLCJlbmVteSIsInV1aWQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFDN0RDLE1BQUFBLEssZ0JBQUFBLEs7O0FBQ0FDLE1BQUFBLFMsc0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLFcsNkJBQUFBLFc7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWDtBQUFSLE9BQUQsQyxVQUdSUyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQVlSUSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQyxVQU1SVSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFWjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZkRhLFUsR0FBaUIsSTtnQkFDakJDLGUsR0FBa0IsQztnQkFFbEJDLGdCLEdBQTJCLEM7Z0JBQzNCQyxRLEdBQWUsSTtnQkFDZkMsSyxHQUFlO0FBQUE7QUFBQSwrQjtnQkFDZkMsaUIsR0FBNEIsQztnQkFDNUJDLGEsR0FBd0IsRTtnQkFDeEJD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Sjs7O29EQUN5QjtBQUN0QixtQkFBTyxLQUFLL0IsYUFBWjtBQUNIOzs7O1FBNUlnQ3BCLFM7Ozs7O2lCQUdDLEk7Ozs7Ozs7aUJBR0UsRTs7Ozs7OztpQkFZRixFOzs7Ozs7O2lCQU1HLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEpzb25Bc3NldCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgdjMsIFZlYzIsIFR3ZWVuLCByYW5kb20sIFZlYzMgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJztcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSAnLi9FbmVteXMvRW5lbXlCYXNlJ1xyXG5pbXBvcnQgeyBHcm91bmRNYXBDdGwgfSBmcm9tICcuL0dyb3VuZE1hcEN0bCc7XHJcbmltcG9ydCB7IEdyb3VuZFRpbGVkIH0gZnJvbSAnLi9Hcm91bmRUaWxlZC9Hcm91bmRUaWxlZCc7XHJcbmltcG9ydCBNeTJkQXJyYXkgZnJvbSAnLi91dGlsL015MkFycmF5JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdFbmVteUNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBKc29uQXNzZXQgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnUmVzOiBKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgcHVibGljIGVuZW15c1ByZWZhYkxpc3Q6IFByZWZhYltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbE51bSA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZW15SGVhbHRoQmFyQ3RsTm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFdhdmVEdXJhY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gdGhpcy5nYW1lQ29uZmlnUmVzLmpzb247XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRTdGF0ZSgncnVuJyk7XHJcbiAgICAgICAgdGhpcy53YXZlRGF0YSA9IHRoaXMuZ2FtZUNvbmZpZ1snTGV2ZWxfJyArIHRoaXMuY3VycmVudExldmVsTnVtXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB2MygwLCAwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkU3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImFkZC1lbmVtdC1vdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSB0aGlzLndhdmVEYXRhW1wiRW5lbXlUeXBlXCJdW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24gPSB0aGlzLndhdmVEYXRhWydBZGRFbmVteUR1cmFjdGlvbiddW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlXCIsIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9uZVdhdmVFbmVteSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmFkZEVuZW15RHVyYWN0aW9uKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVyLWNsaWNrLWdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZE9uZVdhdmVFbmVteSgpIHtcclxuICAgICAgICAvL+WinuWKoOS4gOazouaVjOS6ulxyXG4gICAgICAgIGxldCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBhZGRFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgaW5kZXhMaXN0OiBWZWMyW10gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZE1hcEN0bCkuZ2V0SW5FZGFnZUluZGV4TGlzdCgpO1xyXG4gICAgICAgIGxldCBub2RlTWFwTGlzdDogTXkyZEFycmF5PE5vZGU+ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHcm91bmRNYXBDdGwpLmdldE1hcE5vZGVMaXN0KCk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgbGV0IGVuZW15VHlwZUluZGV4ID0gMDtcclxuICAgICAgICBsZXQgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhFbmVteUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWF4RW5lbXlDb3VudCArPSB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0W2ldLmNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heCBlbmVteSBjb3VudFwiLCBtYXhFbmVteUNvdW50KTtcclxuICAgICAgICBpZiAobWF4RW5lbXlDb3VudCA+PSBpbmRleExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmlbDmja7plJnor69cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGFkZEVuZW15Q291bnQgPCBtYXhFbmVteUNvdW50KSB7XHJcbiAgICAgICAgICAgIC8vIGFkZEVuZW15Q291bnQgKys7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmFuZG9tIGluZGV4XCIsIHJhbmRvbUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHJhbmRvbUluZGV4ID49IGluZGV4TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaW5kZXhWMiA9IGluZGV4TGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZU1hcExpc3QuZ2V0VmFsdWUoaW5kZXhWMi54LCBpbmRleFYyLnkpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmdldENvbXBvbmVudChHcm91bmRUaWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmRUaWxlZCA9IG5vZGUuZ2V0Q29tcG9uZW50KEdyb3VuZFRpbGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChncm91bmRUaWxlZC5nZXRJc1ZvaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqG5LiA5Liq56m65L2N572uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50RW5lbXlUeXBlID0gdGhpcy5jdXJyZW50UmFuZG9tRW5lbXlUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbmVteU5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmVuZW5tKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3YXZlRGF0YSA9IHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3RbZW5lbXlUeXBlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gd2F2ZURhdGEudHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSB3YXZlRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2F2ZUFkZEVuZW15Q291bnQgPj0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZUFkZEVuZW15Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteXNQcmVmYWJMaXN0W3R5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Tm9kZS5wb3NpdGlvbiA9IHYzKG5vZGUucG9zaXRpb24ueCwgMjAsIG5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuaW5pdCh0aGlzLmdhbWVDb25maWcsIG5vZGUucG9zaXRpb24sIHRoaXMuZW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dFbmVteUVudGVyQW5pbShlbmVteU5vZGUsIGFkZEVuZW15Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VMaXN0LnB1c2goZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLnNob3dFbmVteUVudGVyQW5pbShhZGRFbmVteUNvdW50LCB0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlop7liqDkuIDkuKrmlYzkurpcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJhbmRvbUluZGV4KytcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGluZGV4TGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRFbmVteUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUVuZW15SW5MaXN0KG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW15Tm9kZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChlbmVteS51dWlkID09PSBub2RlLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=