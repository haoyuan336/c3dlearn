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
              // console.log("发射一枚子弹");
              // let currentRotation = this.node.eulerAngles.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ta2lsbENvbXBvbmVudC9DcmF6eVJvdGF0ZVNraWxsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJUd2VlbiIsInYzIiwidjIiLCJCYXNlT2JqZWN0IiwiVG93ZXJCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ3JhenlSb3RhdGVTa2lsbCIsImdhbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm9uIiwiaW5pdCIsInNob290QnVsbGV0Iiwic3RhcnRQb3NOb2RlIiwiZ2V0Q29tcG9uZW50IiwiYnVsbGV0U3RhcnRQb3MiLCJkaXIiLCJ3b3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJwb3NpdGlvbiIsImJhc2VBdHRhY2tOdW0iLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwic2hvb3RPbmVCdWxsZXQiLCJiYXNlQXR0YWNrUmF0ZSIsIngiLCJ6IiwiY2IiLCJzaG9vdFJhdGUiLCJnZXRDdXJyZW50U2hvb3RSYXRlIiwidG93ZXJCYXNlU2hvb3RSYXRlIiwiZW5kU2hvb3RSYXRlIiwidGltZSIsInNjaGVkdWxlIiwiY3VycmVudFJvdGF0ZSIsImdldEN1cnJlbnRTa2lsbFJvdGF0ZUFuZ2xlIiwic2tpbGxUaW1lIiwicm90YXRlU3BlZWQiLCJ0dyIsInNpZ25EaXIiLCJNYXRoIiwicmFuZG9tIiwiYnkiLCJldWxlckFuZ2xlcyIsImFicyIsImNhbGwiLCJ1bnNjaGVkdWxlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLEUsT0FBQUEsRTs7OztBQUN4Q0MsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsUyxzQkFB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QUFBLEVBQUUsQ0FBQ1MsS0FBSDtBQUNILGFBM0JEO0FBNkJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUd2VlbiwgdjMsIHYyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IFRvd2VyQmFzZSB9IGZyb20gJy4uL1Rvd2Vycy9Ub3dlckJhc2UnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0NyYXp5Um90YXRlU2tpbGwnKVxyXG5leHBvcnQgY2xhc3MgQ3JhenlSb3RhdGVTa2lsbCBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG4gICAgLy8gcHVibGljIGdhbWVDb25maWc6IHt9ID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgYmFzZUF0dGFjazogbnVtYmVyID0gMDtcclxuICAgIC8vIHByaXZhdGUgYmFzZUF0dGFja1JhdGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgaW5pdChnYW1lQ29uZmlnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbmioDog73nu4Tku7ZcIik7XHJcbiAgICAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJpbml0XCIsIChnYW1lQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdChnYW1lQ29uZmlnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2hvb3RCdWxsZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Y+R5bCE5LiA5p6a5a2Q5by5XCIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFJvdGF0aW9uID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLnk7XHJcbiAgICAgICAgICAgIC8vIGxldCBkaXIgPSB2MigwLCAxKS5yb3RhdGUoY3VycmVudFJvdGF0aW9uKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zTm9kZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5idWxsZXRTdGFydFBvcztcclxuICAgICAgICAgICAgbGV0IGRpciA9IHYzKHN0YXJ0UG9zTm9kZS53b3JsZFBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBsZXQgYmFzZUF0dGFja051bSA9IHRoaXMuZ2V0Q3VycmVudEF0dGFja051bSgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2hvb3RPbmVCdWxsZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VBdHRhY2tSYXRlICsgdGhpcy5ub2RlLmdldENvbXBvbmVudChCYXNlT2JqZWN0KS5iYXNlQXR0YWNrUmF0ZSxcclxuICAgICAgICAgICAgICAgIHYyKGRpci54LCBkaXIueiksXHJcbiAgICAgICAgICAgICAgICBiYXNlQXR0YWNrTnVtXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVsZWFzZS1za2lsbFwiLCAoY2IpID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IHNob290UmF0ZSA9IGRhdGEuc2hvb3RSYXRlICsgdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICAgICAgLy8gbGV0IGJhc2VBdHRhY2tOdW0gPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBzaG9vdFJhdGUgPSB0aGlzLmdldEN1cnJlbnRTaG9vdFJhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHRvd2VyQmFzZVNob290UmF0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBlbmRTaG9vdFJhdGUgPSBzaG9vdFJhdGUgKyB0b3dlckJhc2VTaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvb3QgcmF0ZVwiLCBlbmRTaG9vdFJhdGUpO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDEgLyBlbmRTaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGltZVwiLCB0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShzaG9vdEJ1bGxldCwgdGltZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoY2Ipe1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSA7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um90YXRlID0gdGhpcy5nZXRDdXJyZW50U2tpbGxSb3RhdGVBbmdsZSgpO1xyXG4gICAgICAgICAgICBsZXQgc2tpbGxUaW1lID0gY3VycmVudFJvdGF0ZSAvIHRoaXMucm90YXRlU3BlZWQ7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgc2lnbkRpciA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgICAgICAgICAgIHR3LmJ5KHNraWxsVGltZSwgeyBldWxlckFuZ2xlczogdjMoMCwgY3VycmVudFJvdGF0ZSAqIChzaWduRGlyIC8gTWF0aC5hYnMoc2lnbkRpcikpLCAwKSB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoc2hvb3RCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==