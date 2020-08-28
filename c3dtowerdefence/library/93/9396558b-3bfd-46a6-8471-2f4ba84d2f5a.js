System.register(["cc", "code-quality:cr", "../util/State.js", "../GameController.js", "../Enemys/EnemyBase.js", "../BulletBase.js", "../BaseObject.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Vec3, v2, Prefab, instantiate, JsonAsset, State, GameController, EnemyBase, BulletBase, BaseObject, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TowerBase;

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
    _reporterNs.report("State", "./../util/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./../GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBase(extras) {
    _reporterNs.report("EnemyBase", "./../Enemys/EnemyBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletBase(extras) {
    _reporterNs.report("BulletBase", "./../BulletBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "./../BaseObject", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      v2 = _cc.v2;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_utilStateJs) {
      State = _utilStateJs.State;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }, function (_EnemysEnemyBaseJs) {
      EnemyBase = _EnemysEnemyBaseJs.EnemyBase;
    }, function (_BulletBaseJs) {
      BulletBase = _BulletBaseJs.BulletBase;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "93965WLO/1GpoRxL0uoTS9a", "TowerBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TowerBase", TowerBase = (_dec = ccclass('TowerBase'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: JsonAsset
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(TowerBase, _ref);

        function TowerBase() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TowerBase);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TowerBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gameController", _descriptor, _assertThisInitialized(_this));

          _this.state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          _this.currentTargetEnemy = null;
          _this.currentShootTime = 0;
          _this.shootDuraction = 1;

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bulletStartPos", _descriptor3, _assertThisInitialized(_this));

          _this.bulletMoveTime = null;
          _this.currentShootDiraction = v2(0, 0);

          _initializerDefineProperty(_this, "gameConfig", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(TowerBase, [{
          key: "init",
          value: function init() {}
        }, {
          key: "start",
          value: function start() {
            this.state.setState("run");
            var moveDistance = this.bulletStartPos.worldPosition.y - 0.5; //子弹的发射高度 - 敌人的 高度

            var accY = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).accY; // this.bulletMoveTime = Math.sqrt()
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

                  if (enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).getIsCanLock() && !enemyNode.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).getIsDead()) {
                    var length = new Vec3(enemyNode.position).subtract(this.node.position).length();

                    if (length < minLength) {
                      minLength = length;
                      this.currentTargetEnemy = enemyNode;
                    }
                  }
                }

                if (this.currentTargetEnemy) {
                  this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                    error: Error()
                  }), EnemyBase) : EnemyBase).setBeLocked(this.node);
                }
              }

              if (this.currentTargetEnemy) {
                // console.log("找到了目标敌人");
                if (this.currentTargetEnemy.getComponent(_crd && EnemyBase === void 0 ? (_reportPossibleCrUseOfEnemyBase({
                  error: Error()
                }), EnemyBase) : EnemyBase).getIsDead()) {
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
            bulletNode.active = false;
            bulletNode.setPosition(this.bulletStartPos.worldPosition);
            bulletNode.active = true;
            bulletNode.getComponent(_crd && BulletBase === void 0 ? (_reportPossibleCrUseOfBulletBase({
              error: Error()
            }), BulletBase) : BulletBase).init({
              direction: this.currentShootDiraction,
              targetEnemy: this.currentTargetEnemy,
              gameConfigJson: this.gameConfig.json
            }); // bulletNode.emit("init-data", {
            //     direction: this.currentShootDiraction,
            //     targetEnemy: this.currentTargetEnemy
            // })
          }
        }]);

        return TowerBase;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec2], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameConfig", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ub3dlcnMvVG93ZXJCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVmVjMyIsInYyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJKc29uQXNzZXQiLCJTdGF0ZSIsIkdhbWVDb250cm9sbGVyIiwiRW5lbXlCYXNlIiwiQnVsbGV0QmFzZSIsIkJhc2VPYmplY3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3dlckJhc2UiLCJ0eXBlIiwic3RhdGUiLCJjdXJyZW50VGFyZ2V0RW5lbXkiLCJjdXJyZW50U2hvb3RUaW1lIiwic2hvb3REdXJhY3Rpb24iLCJidWxsZXRNb3ZlVGltZSIsImN1cnJlbnRTaG9vdERpcmFjdGlvbiIsInNldFN0YXRlIiwibW92ZURpc3RhbmNlIiwiYnVsbGV0U3RhcnRQb3MiLCJ3b3JsZFBvc2l0aW9uIiwieSIsImFjY1kiLCJkZWx0YVRpbWUiLCJnZXRTdGF0ZSIsImVuZW15Tm9kZUxpc3QiLCJnYW1lQ29udHJvbGxlciIsImdldENvbXBvbmVudCIsImdldEN1cnJlbnRFbmVteU5vZGVMaXN0IiwibWluTGVuZ3RoIiwiaSIsImxlbmd0aCIsImVuZW15Tm9kZSIsImdldElzQ2FuTG9jayIsImdldElzRGVhZCIsInBvc2l0aW9uIiwic3VidHJhY3QiLCJub2RlIiwic2V0QmVMb2NrZWQiLCJ4IiwieiIsImFuZ2xlIiwic2lnbkFuZ2xlIiwiZXVsZXJBbmdsZXMiLCJNYXRoIiwiUEkiLCJzaG9vdE9uZUJ1bGxldCIsImJ1bGxldE5vZGUiLCJidWxsZXRQcmVmYWIiLCJwYXJlbnQiLCJhY3RpdmUiLCJzZXRQb3NpdGlvbiIsImluaXQiLCJkaXJlY3Rpb24iLCJ0YXJnZXRFbmVteSIsImdhbWVDb25maWdKc29uIiwiZ2FtZUNvbmZpZyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YjtBQUNBLGdCQUFJd0IsVUFBVSxHQUFHL0MsV0FBVyxDQUFDLEtBQUtnRCxZQUFOLENBQTVCO0FBQ0FELFlBQUFBLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQixLQUFLWixJQUFMLENBQVVZLE1BQTlCO0FBQ0FGLFlBQUFBLFVBQVUsQ0FBQ0csTUFBWCxHQUFvQixLQUFwQjtBQUNBSCxZQUFBQSxVQUFVLENBQUNJLFdBQVgsQ0FBdUIsS0FBS2hDLGNBQUwsQ0FBb0JDLGFBQTNDO0FBQ0EyQixZQUFBQSxVQUFVLENBQUNHLE1BQVgsR0FBb0IsSUFBcEI7QUFDQUgsWUFBQUEsVUFBVSxDQUFDcEIsWUFBWDtBQUFBO0FBQUEsMENBQW9DeUIsSUFBcEMsQ0FBeUM7QUFDckNDLGNBQUFBLFNBQVMsRUFBRSxLQUFLckMscUJBRHFCO0FBRXJDc0MsY0FBQUEsV0FBVyxFQUFFLEtBQUsxQyxrQkFGbUI7QUFHckMyQyxjQUFBQSxjQUFjLEVBQUUsS0FBS0MsVUFBTCxDQUFnQkM7QUFISyxhQUF6QyxFQVBhLENBWWI7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7Ozs7Ozs7Ozs7aUJBNUY2QixJOzs7Ozs7O2lCQU9BLEk7Ozs7Ozs7aUJBRUEsSTs7Ozs7OztpQkFNQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMyLCBWZWMzLCBRdWF0LCB2MywgdjIsIFByZWZhYiwgaW5zdGFudGlhdGUsIEpzb25Bc3NldCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLy4uL3V0aWwvU3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vLi4vR2FtZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gJy4vLi4vRW5lbXlzL0VuZW15QmFzZSdcclxuaW1wb3J0IHsgQnVsbGV0QmFzZSB9IGZyb20gJy4vLi4vQnVsbGV0QmFzZSc7XHJcbmltcG9ydCB7QmFzZU9iamVjdH0gZnJvbSAnLi8uLi9CYXNlT2JqZWN0J1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1Rvd2VyQmFzZScpXHJcbmV4cG9ydCBjbGFzcyBUb3dlckJhc2UgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGFyZ2V0RW5lbXk6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2hvb3RUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzaG9vdER1cmFjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIHB1YmxpYyBidWxsZXRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgYnVsbGV0U3RhcnRQb3M6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnVsbGV0TW92ZVRpbWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaG9vdERpcmFjdGlvbjogVmVjMiA9IHYyKDAsIDApO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogSnNvbkFzc2V0fSlcclxuICAgIHB1YmxpYyBnYW1lQ29uZmlnOiBKc29uQXNzZXQgPSBudWxsO1xyXG4gICAgaW5pdCgpe1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoXCJydW5cIik7XHJcbiAgICAgICAgbGV0IG1vdmVEaXN0YW5jZSA9IHRoaXMuYnVsbGV0U3RhcnRQb3Mud29ybGRQb3NpdGlvbi55IC0gMC41OyAvL+WtkOW8ueeahOWPkeWwhOmrmOW6piAtIOaVjOS6uueahCDpq5jluqZcclxuICAgICAgICBsZXQgYWNjWSA9IEdhbWVDb250cm9sbGVyLmFjY1k7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIHRoaXMuYnVsbGV0TW92ZVRpbWUgPSBNYXRoLnNxcnQoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZXRTdGF0ZSgpID09PSAncnVuJykge1xyXG4gICAgICAgICAgICAvL+W9k+WJjeeahOeKtuaAgeaYr+i/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+Wvu+aJvuWQiOmAgueahCDmlYzkurpcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJvdGF0ZShuZXcgUXVhdCgwLDAuMDAxLDAsMCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDkwLDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteU5vZGVMaXN0ID0gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpLmdldEN1cnJlbnRFbmVteU5vZGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluTGVuZ3RoID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15Tm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOb2RlID0gZW5lbXlOb2RlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXlOb2RlLmdldENvbXBvbmVudChFbmVteUJhc2UpLmdldElzQ2FuTG9jaygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbmVteU5vZGUuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IG5ldyBWZWMzKGVuZW15Tm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKS5sZW5ndGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IGVuZW15Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVuZW15LmdldENvbXBvbmVudChFbmVteUJhc2UpLnNldEJlTG9ja2VkKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJvuWIsOS6huebruagh+aVjOS6ulwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15QmFzZSkuZ2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290RGlyYWN0aW9uID0gdjIodGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueCwgdGhpcy5jdXJyZW50VGFyZ2V0RW5lbXkucG9zaXRpb24ueilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KHYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueikpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24uc2lnbkFuZ2xlKHYyKDAsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbmdsZVwiLCBhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgYW5nbGUgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhcmdldEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hvb3RUaW1lID4gdGhpcy5zaG9vdER1cmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob290VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdE9uZUJ1bGxldCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG9vdFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvb3RPbmVCdWxsZXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj5HlsITkuIDmnprlrZDlvLlcIik7XHJcbiAgICAgICAgbGV0IGJ1bGxldE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGJ1bGxldE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgYnVsbGV0Tm9kZS5zZXRQb3NpdGlvbih0aGlzLmJ1bGxldFN0YXJ0UG9zLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIGJ1bGxldE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBidWxsZXROb2RlLmdldENvbXBvbmVudChCdWxsZXRCYXNlKS5pbml0KHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnRTaG9vdERpcmFjdGlvbixcclxuICAgICAgICAgICAgdGFyZ2V0RW5lbXk6IHRoaXMuY3VycmVudFRhcmdldEVuZW15LFxyXG4gICAgICAgICAgICBnYW1lQ29uZmlnSnNvbjogdGhpcy5nYW1lQ29uZmlnLmpzb25cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGJ1bGxldE5vZGUuZW1pdChcImluaXQtZGF0YVwiLCB7XHJcbiAgICAgICAgLy8gICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50U2hvb3REaXJhY3Rpb24sXHJcbiAgICAgICAgLy8gICAgIHRhcmdldEVuZW15OiB0aGlzLmN1cnJlbnRUYXJnZXRFbmVteVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbn1cclxuIl19