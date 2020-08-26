System.register(["cc", "code-quality:cr", "./util/State.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, instantiate, State, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, GameController;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
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
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
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

          _initializerDefineProperty(_this, "enemyPrefab", _descriptor2, _assertThisInitialized(_this));

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

            var enemyNode = instantiate(this.enemyPrefab);
            enemyNode.parent = this.node.parent;
            enemyNode.emit("init-data", this.pathNodeList);
            enemyNode.on("destroy-self", function () {
              for (var i = 0; i < _this3.enemyNodeList.length; i++) {
                if (_this3.enemyNodeList[i] === enemyNode) {
                  _this3.enemyNodeList.splice(i, 1);
                }
              }
            });
            this.enemyNodeList.push(enemyNode);
          }
        }]);

        return GameController;
      }(Component), _class3.accY = -20, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pathNodeList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2R0b3dlcmRlZmVuY2UvYXNzZXRzL1NjcmlwdHMvR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUNvbnRyb2xsZXIiLCJ0eXBlIiwic3RhdGUiLCJjdXJyZW50QWRkRW5lbXlUaW1lIiwiYWRkRW5lbXlEdXJhY3Rpb24iLCJlbmVteU5vZGVMaXN0IiwiYWRkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsImR0IiwiYWRkT25lRW5lbXkiLCJlbmVteU5vZGUiLCJlbmVteVByZWZhYiIsInBhcmVudCIsIm5vZGUiLCJlbWl0IiwicGF0aE5vZGVMaXN0Iiwib24iLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicHVzaCIsImFjY1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQ3JDQyxNQUFBQSxLLGdCQUFBQSxLOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMsVUFJSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVA7QUFBUixPQUFELEMsVUFFUkssUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRU47QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdETyxLLEdBQVE7QUFBQTtBQUFBLCtCO2dCQUNSQyxtQixHQUE4QixDO2dCQUM5QkMsaUIsR0FBNEIsQztnQkFDNUJDLGEsR0FBd0IsRTs7Ozs7O2tDQUN4QjtBQUFBOztBQUNKO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixPQUFwQixFQUE2QixZQUFNO0FBQy9CQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLE1BQUksQ0FBQ04sS0FBTCxDQUFXTyxRQUFYLEVBQTVCO0FBQ0gsYUFGRDtBQUdBLGlCQUFLUCxLQUFMLENBQVdRLFFBQVgsQ0FBb0IsS0FBcEI7QUFDSDs7O2lDQUNNQyxFLEVBQVk7QUFDZixnQkFBSSxLQUFLVCxLQUFMLENBQVdPLFFBQVgsT0FBMEIsS0FBOUIsRUFBcUM7QUFDakMsa0JBQUksS0FBS04sbUJBQUwsR0FBMkIsS0FBS0MsaUJBQXBDLEVBQXVEO0FBQ25ELHFCQUFLRCxtQkFBTCxHQUEyQixDQUEzQjtBQUNBLHFCQUFLUyxXQUFMO0FBQ0gsZUFIRCxNQUdPO0FBQ0gscUJBQUtULG1CQUFMLElBQTRCUSxFQUE1QjtBQUNIO0FBQ0o7QUFDSjs7O29EQUN5QjtBQUN0QixtQkFBTyxLQUFLTixhQUFaO0FBQ0g7Ozt3Q0FDYTtBQUFBOztBQUNWLGdCQUFJUSxTQUFlLEdBQUdqQixXQUFXLENBQUMsS0FBS2tCLFdBQU4sQ0FBakM7QUFDQUQsWUFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLEtBQUtDLElBQUwsQ0FBVUQsTUFBN0I7QUFDQUYsWUFBQUEsU0FBUyxDQUFDSSxJQUFWLENBQWUsV0FBZixFQUE0QixLQUFLQyxZQUFqQztBQUNBTCxZQUFBQSxTQUFTLENBQUNNLEVBQVYsQ0FBYSxjQUFiLEVBQTZCLFlBQU07QUFDL0IsbUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxNQUFJLENBQUNmLGFBQUwsQ0FBbUJnQixNQUF2QyxFQUErQ0QsQ0FBQyxFQUFoRCxFQUFvRDtBQUNoRCxvQkFBSSxNQUFJLENBQUNmLGFBQUwsQ0FBbUJlLENBQW5CLE1BQTBCUCxTQUE5QixFQUF5QztBQUNyQyxrQkFBQSxNQUFJLENBQUNSLGFBQUwsQ0FBbUJpQixNQUFuQixDQUEwQkYsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDSDtBQUNKO0FBQ0osYUFORDtBQU9BLGlCQUFLZixhQUFMLENBQW1Ca0IsSUFBbkIsQ0FBd0JWLFNBQXhCO0FBQ0g7Ozs7UUE1QytCcEIsUyxXQUVsQitCLEksR0FBZSxDQUFDLEU7Ozs7O2lCQUVBLEU7Ozs7Ozs7aUJBRUQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVHdlZW4gfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSdcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHYW1lQ29udHJvbGxlcicpXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8v6YeN5Yqb5Yqg6YCf5bqmXG4gICAgcHVibGljIHN0YXRpYyBhY2NZOiBudW1iZXIgPSAtMjA7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHB1YmxpYyBwYXRoTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHB1YmxpYyBlbmVteVByZWZhYjogUHJlZmFiID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGUgPSBuZXcgU3RhdGUoKTtcbiAgICBwcml2YXRlIGN1cnJlbnRBZGRFbmVteVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBhZGRFbmVteUR1cmFjdGlvbjogbnVtYmVyID0gNDtcbiAgICBwcml2YXRlIGVuZW15Tm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRTdGF0ZShcInJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgc3RhdGUgXCIsIHRoaXMuc3RhdGUuZ2V0U3RhdGUoKSk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XG4gICAgfVxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCkgPT09ICdydW4nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRkRW5lbXlUaW1lID4gdGhpcy5hZGRFbmVteUR1cmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkZEVuZW15VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPbmVFbmVteSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZGRFbmVteVRpbWUgKz0gZHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Tm9kZUxpc3Q7XG4gICAgfVxuICAgIGFkZE9uZUVuZW15KCkge1xuICAgICAgICBsZXQgZW5lbXlOb2RlOiBOb2RlID0gaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYik7XG4gICAgICAgIGVuZW15Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICBlbmVteU5vZGUuZW1pdChcImluaXQtZGF0YVwiLCB0aGlzLnBhdGhOb2RlTGlzdCk7XG4gICAgICAgIGVuZW15Tm9kZS5vbihcImRlc3Ryb3ktc2VsZlwiLCAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15Tm9kZUxpc3RbaV0gPT09IGVuZW15Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Tm9kZUxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5lbXlOb2RlTGlzdC5wdXNoKGVuZW15Tm9kZSk7XG4gICAgfVxufVxuIl19