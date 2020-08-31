System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, JsonAsset, Prefab, instantiate, v3, State, EnemyBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, EnemyController;

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
          _this.currentEnemyIndex = 0;
          _this.currentWaveMaxEnemyCount = 0;
          _this.currentWaveIndex = 0;
          _this.waveData = null;
          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentAddEnemyTime = 0;
          _this.addEnemyDuraction = 1;
          _this.enemyNodeList = [];
          _this.currentRandomEnemyTypeList = [];

          _initializerDefineProperty(_this, "startPosNodeList", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "endPosNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(EnemyController, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.gameConfig = this.gameConfigRes.json; // this.state.setState('run');

            this.waveData = this.gameConfig['Level_' + this.currentLevelNum];
            this.state.addState("enter-next-wave", function () {
              _this2.referCurrentLevelData();
            });
            this.node.on("player-click-game", function () {
              _this2.state.setState("enter-next-wave");
            });
          }
        }, {
          key: "referCurrentLevelData",
          value: function referCurrentLevelData() {
            var _this3 = this;

            if (this.currentWaveIndex == this.waveData['EnemyType'].length) {
              this.state.setState("add-enemt-over");
              console.log("游戏结束");
              return;
            }

            this.currentRandomEnemyTypeList = this.waveData["EnemyType"][this.currentWaveIndex];
            this.currentWaveMaxEnemyCount = this.waveData['EnemyCount'][this.currentWaveIndex];
            this.addEnemyDuraction = this.waveData['AddEnemyDuraction'][this.currentWaveIndex];
            this.currentWaveIndex++;
            this.scheduleOnce(function () {
              _this3.node.emit("refer-current-wave", _this3.currentWaveIndex);

              _this3.state.setState('run');
            }, 1); // console.log("刷新一下当前的数据");
            // console.log('current random enemy ', this.currentRandomEnemyTypeList);
            // console.log("current max enemy count", this.currentWaveMaxEnemyCount);
            // console.log("add enemy duraction", this.addEnemyDuraction);
          }
        }, {
          key: "getCurrentEnemyNodeList",
          value: function getCurrentEnemyNodeList() {
            return this.enemyNodeList;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.state.getState() === 'run') {
              if (this.currentAddEnemyTime > this.addEnemyDuraction) {
                this.currentAddEnemyTime = 0;

                if (this.currentEnemyIndex >= this.currentWaveMaxEnemyCount) {
                  this.currentEnemyIndex = 0;
                  this.state.setState("enter-next-wave");
                } else {
                  this.addOneEnemy();
                }
              } else {
                this.currentAddEnemyTime += deltaTime;
              }
            }
          }
        }, {
          key: "addOneEnemy",
          value: function addOneEnemy() {
            var _this4 = this;

            var index = Math.round(Math.random() * (this.currentRandomEnemyTypeList.length - 1));
            var enemyPrefab = this.enemysPrefabList[index];
            var enemyNode = instantiate(enemyPrefab);
            enemyNode.parent = this.node.parent;
            this.currentEnemyIndex++; // enemyNode.emit("init-data", this.pathNodeList, this.gameConfigJson);

            var startPosIndex = Math.round(Math.random() * (this.startPosNodeList.length - 1));
            var startPos = this.startPosNodeList[startPosIndex].position;
            var x = Math.random() * 10 - 5;
            var z = Math.random() * 10 - 5;
            var endPos = this.endPosNode.position;
            enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase).init(this.gameConfig, v3(startPos.x + x, startPos.y, startPos.z + z), endPos);
            enemyNode.on("destroy-self", function () {
              for (var i = 0; i < _this4.enemyNodeList.length; i++) {
                // console.log("this.enemt node list uuid", this.enemyNodeList[i].uuid);
                // console.log("enemy node uuid", enemyNode.uuid);
                if (_this4.enemyNodeList[i].uuid === enemyNode.uuid) {
                  _this4.enemyNodeList.splice(i, 1);
                }
              }
            });
            this.enemyNodeList.push(enemyNode);
            this.enemyHealthBarCtlNode.emit("add-one-enemy", enemyNode);
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "endPosNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9FbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJKc29uQXNzZXQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiU3RhdGUiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmVteUNvbnRyb2xsZXIiLCJ0eXBlIiwiZ2FtZUNvbmZpZyIsImN1cnJlbnRMZXZlbE51bSIsImN1cnJlbnRFbmVteUluZGV4IiwiY3VycmVudFdhdmVNYXhFbmVteUNvdW50IiwiY3VycmVudFdhdmVJbmRleCIsIndhdmVEYXRhIiwic3RhdGUiLCJjdXJyZW50QWRkRW5lbXlUaW1lIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QiLCJnYW1lQ29uZmlnUmVzIiwianNvbiIsImFkZFN0YXRlIiwicmVmZXJDdXJyZW50TGV2ZWxEYXRhIiwibm9kZSIsIm9uIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2NoZWR1bGVPbmNlIiwiZW1pdCIsImRlbHRhVGltZSIsImdldFN0YXRlIiwiYWRkT25lRW5lbXkiLCJpbmRleCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImVuZW15UHJlZmFiIiwiZW5lbXlzUHJlZmFiTGlzdCIsImVuZW15Tm9kZSIsInBhcmVudCIsInN0YXJ0UG9zSW5kZXgiLCJzdGFydFBvc05vZGVMaXN0Iiwic3RhcnRQb3MiLCJwb3NpdGlvbiIsIngiLCJ6IiwiZW5kUG9zIiwiZW5kUG9zTm9kZSIsImdldENvbXBvbmVudCIsImluaXQiLCJ5IiwiaSIsInV1aWQiLCJzcGxpY2UiLCJwdXNoIiwiZW5lbXlIZWFsdGhCYXJDdGxOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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R1csSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgSnNvbkFzc2V0LCBQcmVmYWIsIGluc3RhbnRpYXRlLCB2MyB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnRW5lbXlDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogSnNvbkFzc2V0IH0pXHJcbiAgICBwdWJsaWMgZ2FtZUNvbmZpZ1JlczogSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBlbmVteXNQcmVmYWJMaXN0OiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWxOdW0gPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RW5lbXlJbmRleCA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCA9IDA7IC8v5b2T5YmN5rOi5qyh5pyA5aSn55qE5pWM5Lq65pWwXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXYXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdmVEYXRhOiB7fSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QWRkRW5lbXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgZW5lbXlOb2RlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0ID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhcnRQb3NOb2RlTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgcHVibGljIGVuZFBvc05vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdhbWVDb25maWcgPSB0aGlzLmdhbWVDb25maWdSZXMuanNvbjtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldFN0YXRlKCdydW4nKTtcclxuICAgICAgICB0aGlzLndhdmVEYXRhID0gdGhpcy5nYW1lQ29uZmlnWydMZXZlbF8nICsgdGhpcy5jdXJyZW50TGV2ZWxOdW1dO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwiZW50ZXItbmV4dC13YXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZlckN1cnJlbnRMZXZlbERhdGEoKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInBsYXllci1jbGljay1nYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcImVudGVyLW5leHQtd2F2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZmVyQ3VycmVudExldmVsRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZUluZGV4ID09IHRoaXMud2F2ZURhdGFbJ0VuZW15VHlwZSddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKFwiYWRkLWVuZW10LW92ZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2fXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QgPSB0aGlzLndhdmVEYXRhW1wiRW5lbXlUeXBlXCJdW3RoaXMuY3VycmVudFdhdmVJbmRleF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZU1heEVuZW15Q291bnQgPSB0aGlzLndhdmVEYXRhWydFbmVteUNvdW50J11bdGhpcy5jdXJyZW50V2F2ZUluZGV4XTtcclxuICAgICAgICB0aGlzLmFkZEVuZW15RHVyYWN0aW9uID0gdGhpcy53YXZlRGF0YVsnQWRkRW5lbXlEdXJhY3Rpb24nXVt0aGlzLmN1cnJlbnRXYXZlSW5kZXhdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCsrO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwicmVmZXItY3VycmVudC13YXZlXCIsIHRoaXMuY3VycmVudFdhdmVJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ3J1bicpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yi35paw5LiA5LiL5b2T5YmN55qE5pWw5o2uXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHJhbmRvbSBlbmVteSAnLCB0aGlzLmN1cnJlbnRSYW5kb21FbmVteVR5cGVMaXN0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgbWF4IGVuZW15IGNvdW50XCIsIHRoaXMuY3VycmVudFdhdmVNYXhFbmVteUNvdW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFkZCBlbmVteSBkdXJhY3Rpb25cIiwgdGhpcy5hZGRFbmVteUR1cmFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkZEVuZW15VGltZSA+IHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkZEVuZW15VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lbXlJbmRleCA+PSB0aGlzLmN1cnJlbnRXYXZlTWF4RW5lbXlDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVuZW15SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJlbnRlci1uZXh0LXdhdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZUVuZW15KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRkRW5lbXlUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZE9uZUVuZW15KCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHRoaXMuY3VycmVudFJhbmRvbUVuZW15VHlwZUxpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBlbmVteVByZWZhYiA9IHRoaXMuZW5lbXlzUHJlZmFiTGlzdFtpbmRleF07XHJcbiAgICAgICAgbGV0IGVuZW15Tm9kZTogTm9kZSA9IGluc3RhbnRpYXRlKGVuZW15UHJlZmFiKTtcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRFbmVteUluZGV4Kys7XHJcbiAgICAgICAgLy8gZW5lbXlOb2RlLmVtaXQoXCJpbml0LWRhdGFcIiwgdGhpcy5wYXRoTm9kZUxpc3QsIHRoaXMuZ2FtZUNvbmZpZ0pzb24pO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRQb3NJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICh0aGlzLnN0YXJ0UG9zTm9kZUxpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuc3RhcnRQb3NOb2RlTGlzdFtzdGFydFBvc0luZGV4XS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpICogMTAgLSA1O1xyXG4gICAgICAgIGxldCB6ID0gTWF0aC5yYW5kb20oKSAqIDEwIC0gNTtcclxuXHJcblxyXG4gICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLmVuZFBvc05vZGUucG9zaXRpb247XHJcbiAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnLCB2MyhzdGFydFBvcy54ICsgeCwgc3RhcnRQb3MueSwgc3RhcnRQb3MueiArIHopLCBlbmRQb3MpO1xyXG4gICAgICAgIGVuZW15Tm9kZS5vbihcImRlc3Ryb3ktc2VsZlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZW5lbXQgbm9kZSBsaXN0IHV1aWRcIiwgdGhpcy5lbmVteU5vZGVMaXN0W2ldLnV1aWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlIHV1aWRcIiwgZW5lbXlOb2RlLnV1aWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdFtpXS51dWlkID09PSBlbmVteU5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlIZWFsdGhCYXJDdGxOb2RlLmVtaXQoXCJhZGQtb25lLWVuZW15XCIsIGVuZW15Tm9kZSk7XHJcbiAgICB9XHJcbn1cclxuIl19