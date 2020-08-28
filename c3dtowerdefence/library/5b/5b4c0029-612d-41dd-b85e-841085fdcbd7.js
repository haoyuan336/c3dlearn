System.register(["cc", "code-quality:cr", "./util/State.js", "./Enemys/EnemyBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, JsonAsset, State, EnemyBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp, _crd, ccclass, property, GameController;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5b4c0ApYS1B3bhehBCF/cvX", "GameController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: JsonAsset
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(GameController, _Component);

        function GameController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "pathNodeList", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyCubePrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyHealthBarCtlNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameConfigJson", _descriptor4, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentAddEnemyTime = 0;
          _this.addEnemyDuraction = 4;
          _this.enemyNodeList = [];
          return _this;
        }

        _createClass(GameController, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            this.state.addState("ready", function () {
              console.log("enter state ", _this2.state.getState());
            });
            this.state.setState("run");
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.state.getState() === 'run') {
              if (this.currentAddEnemyTime > this.addEnemyDuraction) {
                this.currentAddEnemyTime = 0;
                this.addOneEnemy();
              } else {
                this.currentAddEnemyTime += dt;
              }
            }
          }
        }, {
          key: "getCurrentEnemyNodeList",
          value: function getCurrentEnemyNodeList() {
            return this.enemyNodeList;
          }
        }, {
          key: "addOneEnemy",
          value: function addOneEnemy() {
            var _this3 = this;

            var enemyNode = instantiate(this.enemyCubePrefab);
            enemyNode.parent = this.node.parent; // enemyNode.emit("init-data", this.pathNodeList, this.gameConfigJson);

            enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
              error: Error()
            }), EnemyBase) : EnemyBase).init(this.gameConfigJson, this.pathNodeList);
            enemyNode.on("destroy-self", function () {
              for (var i = 0; i < _this3.enemyNodeList.length; i++) {
                // console.log("this.enemt node list uuid", this.enemyNodeList[i].uuid);
                // console.log("enemy node uuid", enemyNode.uuid);
                if (_this3.enemyNodeList[i].uuid === enemyNode.uuid) {
                  _this3.enemyNodeList.splice(i, 1);
                }
              }
            });
            this.enemyNodeList.push(enemyNode);
            this.enemyHealthBarCtlNode.emit("add-one-enemy", enemyNode);
          }
        }]);

        return GameController;
      }(Component), _class3.accY = -20, _class3.enemyBeLockMaxNum = 1, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pathNodeList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyCubePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyHealthBarCtlNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameConfigJson", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiSnNvbkFzc2V0IiwiU3RhdGUiLCJFbmVteUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsInR5cGUiLCJzdGF0ZSIsImN1cnJlbnRBZGRFbmVteVRpbWUiLCJhZGRFbmVteUR1cmFjdGlvbiIsImVuZW15Tm9kZUxpc3QiLCJhZGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwiZHQiLCJhZGRPbmVFbmVteSIsImVuZW15Tm9kZSIsImVuZW15Q3ViZVByZWZhYiIsInBhcmVudCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZ2FtZUNvbmZpZ0pzb24iLCJwYXRoTm9kZUxpc3QiLCJvbiIsImkiLCJsZW5ndGgiLCJ1dWlkIiwic3BsaWNlIiwicHVzaCIsImVuZW15SGVhbHRoQmFyQ3RsTm9kZSIsImVtaXQiLCJhY2NZIiwiZW5lbXlCZUxvY2tNYXhOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBb0JDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUN6REMsTUFBQUEsSyxnQkFBQUEsSzs7QUFDQUMsTUFBQUEsUyxzQkFBQUEsUzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JSLFUsQ0FBdEJRLE87QUFBU0MsTUFBQUEsUSxHQUFhVCxVLENBQWJTLFE7O2dDQUdKQyxjLFdBRFpGLE9BQU8sQ0FBQyxnQkFBRCxDLFVBSUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVIsT0FBRCxDLFVBRVJPLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVSO0FBQVIsT0FBRCxDLFVBRVJNLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVUO0FBQVAsT0FBRCxDLFVBR1JPLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVOO0FBQVAsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBSURPLEssR0FBUTtBQUFBO0FBQUEsK0I7Z0JBQ1JDLG1CLEdBQThCLEM7Z0JBQzlCQyxpQixHQUE0QixDO2dCQUM1QkMsYSxHQUF3QixFOzs7Ozs7a0NBRXhCO0FBQUE7O0FBQ0o7QUFDQSxpQkFBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDL0JDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsTUFBSSxDQUFDTixLQUFMLENBQVdPLFFBQVgsRUFBNUI7QUFDSCxhQUZEO0FBR0EsaUJBQUtQLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQixLQUFwQjtBQUNIOzs7aUNBQ01DLEUsRUFBWTtBQUNmLGdCQUFJLEtBQUtULEtBQUwsQ0FBV08sUUFBWCxPQUEwQixLQUE5QixFQUFxQztBQUNqQyxrQkFBSSxLQUFLTixtQkFBTCxHQUEyQixLQUFLQyxpQkFBcEMsRUFBdUQ7QUFDbkQscUJBQUtELG1CQUFMLEdBQTJCLENBQTNCO0FBQ0EscUJBQUtTLFdBQUw7QUFDSCxlQUhELE1BR087QUFDSCxxQkFBS1QsbUJBQUwsSUFBNEJRLEVBQTVCO0FBQ0g7QUFDSjtBQUNKOzs7b0RBQ3lCO0FBQ3RCLG1CQUFPLEtBQUtOLGFBQVo7QUFDSDs7O3dDQUNhO0FBQUE7O0FBQ1YsZ0JBQUlRLFNBQWUsR0FBR25CLFdBQVcsQ0FBQyxLQUFLb0IsZUFBTixDQUFqQztBQUNBRCxZQUFBQSxTQUFTLENBQUNFLE1BQVYsR0FBbUIsS0FBS0MsSUFBTCxDQUFVRCxNQUE3QixDQUZVLENBR1Y7O0FBQ0FGLFlBQUFBLFNBQVMsQ0FBQ0ksWUFBVjtBQUFBO0FBQUEsd0NBQWtDQyxJQUFsQyxDQUF1QyxLQUFLQyxjQUE1QyxFQUE0RCxLQUFLQyxZQUFqRTtBQUNBUCxZQUFBQSxTQUFTLENBQUNRLEVBQVYsQ0FBYSxjQUFiLEVBQTZCLFlBQU07QUFDL0IsbUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxNQUFJLENBQUNqQixhQUFMLENBQW1Ca0IsTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQ7QUFDQTtBQUNBLG9CQUFJLE1BQUksQ0FBQ2pCLGFBQUwsQ0FBbUJpQixDQUFuQixFQUFzQkUsSUFBdEIsS0FBK0JYLFNBQVMsQ0FBQ1csSUFBN0MsRUFBbUQ7QUFDL0Msa0JBQUEsTUFBSSxDQUFDbkIsYUFBTCxDQUFtQm9CLE1BQW5CLENBQTBCSCxDQUExQixFQUE2QixDQUE3QjtBQUNIO0FBQ0o7QUFDSixhQVJEO0FBU0EsaUJBQUtqQixhQUFMLENBQW1CcUIsSUFBbkIsQ0FBd0JiLFNBQXhCO0FBQ0EsaUJBQUtjLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxlQUFoQyxFQUFpRGYsU0FBakQ7QUFDSDs7OztRQXZEK0J0QixTLFdBRWxCc0MsSSxHQUFlLENBQUMsRSxVQWdCaEJDLGlCLEdBQTRCLEM7Ozs7O2lCQWRaLEU7Ozs7Ozs7aUJBRUcsSTs7Ozs7OztpQkFFSSxJOzs7Ozs7O2lCQUdILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFR3ZWVuLCBKc29uQXNzZXQgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi91dGlsL1N0YXRlJ1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tICcuL0VuZW15cy9FbmVteUJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8v6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY1k6IG51bWJlciA9IC0yMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBwYXRoTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUHJlZmFiIH0pXHJcbiAgICBwdWJsaWMgZW5lbXlDdWJlUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcclxuICAgIHB1YmxpYyBlbmVteUhlYWx0aEJhckN0bE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogSnNvbkFzc2V0fSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnSnNvbjpKc29uQXNzZXQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFkZEVuZW15RHVyYWN0aW9uOiBudW1iZXIgPSA0O1xyXG4gICAgcHJpdmF0ZSBlbmVteU5vZGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXlCZUxvY2tNYXhOdW06IG51bWJlciA9IDE7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLnN0YXRlLmFkZFN0YXRlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHN0YXRlIFwiLCB0aGlzLnN0YXRlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShcInJ1blwiKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkZEVuZW15VGltZSA+IHRoaXMuYWRkRW5lbXlEdXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkZEVuZW15VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9uZUVuZW15KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZGRFbmVteVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50RW5lbXlOb2RlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteU5vZGVMaXN0O1xyXG4gICAgfVxyXG4gICAgYWRkT25lRW5lbXkoKSB7XHJcbiAgICAgICAgbGV0IGVuZW15Tm9kZTogTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuZW5lbXlDdWJlUHJlZmFiKTtcclxuICAgICAgICBlbmVteU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAvLyBlbmVteU5vZGUuZW1pdChcImluaXQtZGF0YVwiLCB0aGlzLnBhdGhOb2RlTGlzdCwgdGhpcy5nYW1lQ29uZmlnSnNvbik7XHJcbiAgICAgICAgZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmluaXQodGhpcy5nYW1lQ29uZmlnSnNvbiwgdGhpcy5wYXRoTm9kZUxpc3QpO1xyXG4gICAgICAgIGVuZW15Tm9kZS5vbihcImRlc3Ryb3ktc2VsZlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZW5lbXQgbm9kZSBsaXN0IHV1aWRcIiwgdGhpcy5lbmVteU5vZGVMaXN0W2ldLnV1aWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBub2RlIHV1aWRcIiwgZW5lbXlOb2RlLnV1aWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlOb2RlTGlzdFtpXS51dWlkID09PSBlbmVteU5vZGUudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3QucHVzaChlbmVteU5vZGUpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlIZWFsdGhCYXJDdGxOb2RlLmVtaXQoXCJhZGQtb25lLWVuZW15XCIsIGVuZW15Tm9kZSk7XHJcbiAgICB9XHJcbn1cclxuIl19