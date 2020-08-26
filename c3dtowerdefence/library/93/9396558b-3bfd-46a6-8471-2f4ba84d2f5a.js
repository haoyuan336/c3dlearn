System.register(["cc", "code-quality:cr", "./util/State.js", "./GameController.js", "./Enemy.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Vec3, v2, Prefab, instantiate, State, GameController, Enemy, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Tower;

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

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      v2 = _cc.v2;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_EnemyJs) {
      Enemy = _EnemyJs.Enemy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "93965WLO/1GpoRxL0uoTS9a", "Tower", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Tower", Tower = (_dec = ccclass('Tower'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Tower, _Component);

        function Tower() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Tower);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tower)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentTargetEnemy = null;
          _this.currentShootTime = 0;
          _this.shootDuraction = 1;

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bulletStartPos", _descriptor3, _assertThisInitialized(_this));

          _this.currentShootDiraction = v2(0, 0);
          return _this;
        }

        _createClass(Tower, [{
          key: "start",
          value: function start() {
            this.state.setState("run");
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            //     // Your update function goes here.
            if (this.state.getState() === 'run') {
              //当前的状态是运行状态
              //寻找合适的 敌人
              // this.node.rotate(new Quat(0,0.001,0,0));
              // this.node.eulerAngles = new Vec3(0,90,0);
              if (this.currentTargetEnemy === null) {
                var enemyNodeList = this.gameController.getComponent(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
                  error: Error()
                }), GameController) : GameController).getCurrentEnemyNodeList();
                var minLength = 10000;

                for (var i = 0; i < enemyNodeList.length; i++) {
                  var enemyNode = enemyNodeList[i];
                  var length = new Vec3(enemyNode.position).subtract(this.node.position).length();

                  if (length < minLength) {
                    minLength = length;
                    this.currentTargetEnemy = enemyNode;
                  }
                }
              }

              if (this.currentTargetEnemy) {
                // console.log("找到了目标敌人");
                if (this.currentTargetEnemy.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                  error: Error()
                }), Enemy) : Enemy).getIsDead()) {
                  this.currentTargetEnemy = null;
                } else {
                  this.currentShootDiraction = v2(this.currentTargetEnemy.position.x, this.currentTargetEnemy.position.z).subtract(v2(this.node.position.x, this.node.position.z));
                  var angle = this.currentShootDiraction.signAngle(v2(0, -1)); // console.log("angle", angle);

                  this.node.eulerAngles = new Vec3(0, angle * 180 / Math.PI, 0);
                }
              }

              if (this.currentTargetEnemy) {
                if (this.currentShootTime > this.shootDuraction) {
                  this.currentShootTime = 0;
                  this.shootOneBullet();
                } else {
                  this.currentShootTime += deltaTime;
                }
              }
            }
          }
        }, {
          key: "shootOneBullet",
          value: function shootOneBullet() {
            // console.log("发射一枚子弹");
            var bulletNode = instantiate(this.bulletPrefab);
            bulletNode.parent = this.node.parent;
            bulletNode.setPosition(this.bulletStartPos.worldPosition);
            bulletNode.emit("init-data", {
              direction: this.currentShootDiraction,
              targetEnemy: this.currentTargetEnemy
            });
          }
        }]);

        return Tower;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletStartPos", [_dec4], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2R0b3dlcmRlZmVuY2UvYXNzZXRzL1NjcmlwdHMvVG93ZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJWZWMzIiwidjIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlN0YXRlIiwiR2FtZUNvbnRyb2xsZXIiLCJFbmVteSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRvd2VyIiwidHlwZSIsInN0YXRlIiwiY3VycmVudFRhcmdldEVuZW15IiwiY3VycmVudFNob290VGltZSIsInNob290RHVyYWN0aW9uIiwiY3VycmVudFNob290RGlyYWN0aW9uIiwic2V0U3RhdGUiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsImVuZW15Tm9kZUxpc3QiLCJnYW1lQ29udHJvbGxlciIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRFbmVteU5vZGVMaXN0IiwibWluTGVuZ3RoIiwiaSIsImxlbmd0aCIsImVuZW15Tm9kZSIsInBvc2l0aW9uIiwic3VidHJhY3QiLCJub2RlIiwiZ2V0SXNEZWFkIiwieCIsInoiLCJhbmdsZSIsInNpZ25BbmdsZSIsImV1bGVyQW5nbGVzIiwiTWF0aCIsIlBJIiwic2hvb3RPbmVCdWxsZXQiLCJidWxsZXROb2RlIiwiYnVsbGV0UHJlZmFiIiwicGFyZW50Iiwic2V0UG9zaXRpb24iLCJidWxsZXRTdGFydFBvcyIsIndvcmxkUG9zaXRpb24iLCJlbWl0IiwiZGlyZWN0aW9uIiwidGFyZ2V0RW5lbXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxJLE9BQUFBLEk7QUFBZ0JDLE1BQUFBLEUsT0FBQUEsRTtBQUFJQyxN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QXhCO0FBQ0g7QUFFSjs7QUFDRCxrQkFBSSxLQUFLekIsa0JBQVQsRUFBNkI7QUFDekIsb0JBQUksS0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0MsY0FBakMsRUFBaUQ7QUFDN0MsdUJBQUtELGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsdUJBQUt5QixjQUFMO0FBQ0gsaUJBSEQsTUFHTztBQUNILHVCQUFLekIsZ0JBQUwsSUFBeUJJLFNBQXpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7OzsyQ0FDZ0I7QUFDYjtBQUNBLGdCQUFJc0IsVUFBVSxHQUFHcEMsV0FBVyxDQUFDLEtBQUtxQyxZQUFOLENBQTVCO0FBQ0FELFlBQUFBLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQixLQUFLWixJQUFMLENBQVVZLE1BQTlCO0FBQ0FGLFlBQUFBLFVBQVUsQ0FBQ0csV0FBWCxDQUF1QixLQUFLQyxjQUFMLENBQW9CQyxhQUEzQztBQUNBTCxZQUFBQSxVQUFVLENBQUNNLElBQVgsQ0FBZ0IsV0FBaEIsRUFBNkI7QUFDekJDLGNBQUFBLFNBQVMsRUFBRSxLQUFLL0IscUJBRFM7QUFFekJnQyxjQUFBQSxXQUFXLEVBQUUsS0FBS25DO0FBRk8sYUFBN0I7QUFJSDs7OztRQXZFc0JkLFM7Ozs7O2lCQUVPLEk7Ozs7Ozs7aUJBT0EsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMyLCBWZWMzLCBRdWF0LCB2MywgdjIsIFByZWZhYiwgaW5zdGFudGlhdGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vdXRpbC9TdGF0ZSc7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vRW5lbXknXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVG93ZXInKVxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXG4gICAgcHVibGljIGdhbWVDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xuICAgIHByaXZhdGUgY3VycmVudFRhcmdldEVuZW15OiBOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzaG9vdER1cmFjdGlvbjogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHB1YmxpYyBidWxsZXRQcmVmYWI6IFByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHB1YmxpYyBidWxsZXRTdGFydFBvczogTm9kZSA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgY3VycmVudFNob290RGlyYWN0aW9uOiBWZWMyID0gdjIoMCwgMCk7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xuICAgICAgICAgICAgLy/lvZPliY3nmoTnirbmgIHmmK/ov5DooYznirbmgIFcbiAgICAgICAgICAgIC8v5a+75om+5ZCI6YCC55qEIOaVjOS6ulxuXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRlKG5ldyBRdWF0KDAsMC4wMDEsMCwwKSk7XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuZW15Tm9kZUxpc3QgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChHYW1lQ29udHJvbGxlcikuZ2V0Q3VycmVudEVuZW15Tm9kZUxpc3QoKTtcbiAgICAgICAgICAgICAgICBsZXQgbWluTGVuZ3RoID0gMTAwMDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteU5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteU5vZGVMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gbmV3IFZlYzMoZW5lbXlOb2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pLmxlbmd0aCgpXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15ID0gZW5lbXlOb2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmib7liLDkuobnm67moIfmlYzkurpcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15KS5nZXRJc0RlYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24gPSB2Mih0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi54LCB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteS5wb3NpdGlvbi56KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KHYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueikpXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uLnNpZ25BbmdsZSh2MigwLCAtMSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuZ2xlXCIsIGFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaG9vdFRpbWUgPiB0aGlzLnNob290RHVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RPbmVCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdFRpbWUgKz0gZGVsdGFUaW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG9vdE9uZUJ1bGxldCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj5HlsITkuIDmnprlrZDlvLlcIik7XG4gICAgICAgIGxldCBidWxsZXROb2RlID0gaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xuICAgICAgICBidWxsZXROb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgIGJ1bGxldE5vZGUuc2V0UG9zaXRpb24odGhpcy5idWxsZXRTdGFydFBvcy53b3JsZFBvc2l0aW9uKTtcbiAgICAgICAgYnVsbGV0Tm9kZS5lbWl0KFwiaW5pdC1kYXRhXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24sXG4gICAgICAgICAgICB0YXJnZXRFbmVteTogdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=