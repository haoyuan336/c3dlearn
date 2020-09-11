System.register(["cc", "code-quality:cr", "../BaseObject.js", "../Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Tween, v3, v2, BaseObject, TowerBase, _dec, _class, _crd, ccclass, property, CrazyRotateSkill;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "../Towers/TowerBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      v2 = _cc.v2;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseObjectJs) {
      BaseObject = _BaseObjectJs.BaseObject;
    }, function (_TowersTowerBaseJs) {
      TowerBase = _TowersTowerBaseJs.TowerBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "621d4adyJFG1KkUA3lbByt0", "CrazyRotateSkill", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CrazyRotateSkill", CrazyRotateSkill = (_dec = ccclass('CrazyRotateSkill'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(CrazyRotateSkill, _ref);

        function CrazyRotateSkill() {
          _classCallCheck(this, CrazyRotateSkill);

          return _possibleConstructorReturn(this, _getPrototypeOf(CrazyRotateSkill).apply(this, arguments));
        }

        _createClass(CrazyRotateSkill, [{
          key: "init",
          // public gameConfig: {} = null;
          // private baseAttack: number = 0;
          // private baseAttackRate: number = 0;
          value: function init(gameConfig) {
            console.log("初始化技能组件");

            _get(_getPrototypeOf(CrazyRotateSkill.prototype), "init", this).call(this, gameConfig);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this = this;

            this.node.on("init", function (gameConfig) {
              _this.init(gameConfig);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            var shootBullet = function shootBullet() {
              console.log("发射一枚子弹"); // let currentRotation = this.node.eulerAngles.y;
              // let dir = v2(0, 1).rotate(currentRotation);

              var startPosNode = _this2.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).bulletStartPos;

              var dir = v3(startPosNode.worldPosition).subtract(_this2.node.position);

              var baseAttackNum = _this2.getCurrentAttackNum();

              _this2.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).shootOneBullet(_this2.baseAttackRate + _this2.node.getComponent(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
                error: Error()
              }), BaseObject) : BaseObject).baseAttackRate, v2(dir.x, dir.z), baseAttackNum);
            };

            this.node.on("release-skill", function (cb) {
              // let shootRate = data.shootRate + this.baseAttackRate;
              // let baseAttackNum = data.baseAttackNum;
              var shootRate = _this2.getCurrentShootRate();

              var towerBaseShootRate = _this2.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).getCurrentShootRate();

              var endShootRate = shootRate + towerBaseShootRate;
              console.log("shoot rate", endShootRate);
              var time = 1 / endShootRate; // console.log("time", time);

              _this2.schedule(shootBullet, time); // if (cb){
              // }
              // this.node.eulerAngles = ;


              var currentRotate = _this2.getCurrentSkillRotateAngle();

              var skillTime = currentRotate / _this2.rotateSpeed;
              var tw = new Tween(_this2.node);
              var signDir = Math.random() - 0.5;
              tw.by(skillTime, {
                eulerAngles: v3(0, currentRotate * (signDir / Math.abs(signDir)), 0)
              });
              tw.call(function () {
                _this2.unschedule(shootBullet);

                if (cb) {
                  cb();
                }
              });
              tw.start();
            });
          }
        }]);

        return CrazyRotateSkill;
      }(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
        error: Error()
      }), BaseObject) : BaseObject)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ta2lsbENvbXBvbmVudC9DcmF6eVJvdGF0ZVNraWxsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJUd2VlbiIsInYzIiwidjIiLCJCYXNlT2JqZWN0IiwiVG93ZXJCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ3JhenlSb3RhdGVTa2lsbCIsImdhbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiaW5pdCIsInNob290QnVsbGV0Iiwic3RhcnRQb3NOb2RlIiwiZ2V0Q29tcG9uZW50IiwiYnVsbGV0U3RhcnRQb3MiLCJkaXIiLCJ3b3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJwb3NpdGlvbiIsImJhc2VBdHRhY2tOdW0iLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwic2hvb3RPbmVCdWxsZXQiLCJiYXNlQXR0YWNrUmF0ZSIsIngiLCJ6IiwiY2IiLCJzaG9vdFJhdGUiLCJnZXRDdXJyZW50U2hvb3RSYXRlIiwidG93ZXJCYXNlU2hvb3RSYXRlIiwiZW5kU2hvb3RSYXRlIiwidGltZSIsInNjaGVkdWxlIiwiY3VycmVudFJvdGF0ZSIsImdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlIiwic2tpbGxUaW1lIiwicm90YXRlU3BlZWQiLCJ0dyIsInNpZ25EaXIiLCJNYXRoIiwicmFuZG9tIiwiYnkiLCJldWxlckFuZ2xlcyIsImFicyIsImNhbGwiLCJ1bnNjaGVkdWxlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEUsT0FBQUEsRTs7OztBQUN4Q0MsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsUyxzQkFB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QUFDSkEsa0JBQUFBLEVBQUU7QUFDTDtBQUNKLGVBTEQ7QUFNQVcsY0FBQUEsRUFBRSxDQUFDUyxLQUFIO0FBQ0gsYUEzQkQ7QUE2QkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFR3ZWVuLCB2MywgdjIgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgVG93ZXJCYXNlIH0gZnJvbSAnLi4vVG93ZXJzL1Rvd2VyQmFzZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQ3JhenlSb3RhdGVTa2lsbCcpXHJcbmV4cG9ydCBjbGFzcyBDcmF6eVJvdGF0ZVNraWxsIGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcbiAgICAvLyBwdWJsaWMgZ2FtZUNvbmZpZzoge30gPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNlQXR0YWNrOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNlQXR0YWNrUmF0ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpbml0KGdhbWVDb25maWcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMluaKgOiDvee7hOS7tlwiKTtcclxuICAgICAgICBzdXBlci5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXRcIiwgKGdhbWVDb25maWcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KGdhbWVDb25maWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBzaG9vdEJ1bGxldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj5HlsITkuIDmnprlrZDlvLlcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50Um90YXRpb24gPSB0aGlzLm5vZGUuZXVsZXJBbmdsZXMueTtcclxuICAgICAgICAgICAgLy8gbGV0IGRpciA9IHYyKDAsIDEpLnJvdGF0ZShjdXJyZW50Um90YXRpb24pO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3NOb2RlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmJ1bGxldFN0YXJ0UG9zO1xyXG4gICAgICAgICAgICBsZXQgZGlyID0gdjMoc3RhcnRQb3NOb2RlLndvcmxkUG9zaXRpb24pLnN1YnRyYWN0KHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBiYXNlQXR0YWNrTnVtID0gdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5zaG9vdE9uZUJ1bGxldChcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZUF0dGFja1JhdGUgKyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VPYmplY3QpLmJhc2VBdHRhY2tSYXRlLFxyXG4gICAgICAgICAgICAgICAgdjIoZGlyLngsIGRpci56KSxcclxuICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJyZWxlYXNlLXNraWxsXCIsIChjYikgPT4ge1xyXG4gICAgICAgICAgICAvLyBsZXQgc2hvb3RSYXRlID0gZGF0YS5zaG9vdFJhdGUgKyB0aGlzLmJhc2VBdHRhY2tSYXRlO1xyXG4gICAgICAgICAgICAvLyBsZXQgYmFzZUF0dGFja051bSA9IGRhdGEuYmFzZUF0dGFja051bTtcclxuICAgICAgICAgICAgbGV0IHNob290UmF0ZSA9IHRoaXMuZ2V0Q3VycmVudFNob290UmF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdG93ZXJCYXNlU2hvb3RSYXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChUb3dlckJhc2UpLmdldEN1cnJlbnRTaG9vdFJhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGVuZFNob290UmF0ZSA9IHNob290UmF0ZSArIHRvd2VyQmFzZVNob290UmF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG9vdCByYXRlXCIsIGVuZFNob290UmF0ZSk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gMSAvIGVuZFNob290UmF0ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aW1lXCIsIHRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHNob290QnVsbGV0LCB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChjYil7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IDtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlKCk7XHJcbiAgICAgICAgICAgIGxldCBza2lsbFRpbWUgPSBjdXJyZW50Um90YXRlIC8gdGhpcy5yb3RhdGVTcGVlZDtcclxuICAgICAgICAgICAgbGV0IHR3ID0gbmV3IFR3ZWVuKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBzaWduRGlyID0gTWF0aC5yYW5kb20oKSAtIDAuNTtcclxuICAgICAgICAgICAgdHcuYnkoc2tpbGxUaW1lLCB7IGV1bGVyQW5nbGVzOiB2MygwLCBjdXJyZW50Um90YXRlICogKHNpZ25EaXIgLyBNYXRoLmFicyhzaWduRGlyKSksIDApIH0pO1xyXG4gICAgICAgICAgICB0dy5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShzaG9vdEJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0dy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgXHJcbn1cclxuIl19