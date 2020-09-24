System.register(["cc", "code-quality:cr", "../BaseObject.js", "../Towers/TowerBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, Tween, v3, BaseObject, TowerBase, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CrazyRotateSkill;

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

  function _reportPossibleCrUseOfBaseObject(extras) {
    _reporterNs.report("BaseObject", "../BaseObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerBase(extras) {
    _reporterNs.report("TowerBase", "../Towers/TowerBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Tween = _cc.Tween;
      v3 = _cc.v3;
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

      _export("CrazyRotateSkill", CrazyRotateSkill = (_dec = ccclass('CrazyRotateSkill'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(CrazyRotateSkill, _ref);

        function CrazyRotateSkill() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CrazyRotateSkill);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CrazyRotateSkill)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "weaponGunNode", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(CrazyRotateSkill, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.on("init", function (gameConfig, gameController) {
              _this2.init(gameConfig, gameController);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            var shootBullet = function shootBullet() {
              // console.log("发射一枚子弹");
              // let currentRotation = this.node.eulerAngles.y;
              // let dir = v2(0, 1).rotate(currentRotation);
              var bulletStartPosList = _this3.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).bulletStartPosList;

              for (var i = 0; i < bulletStartPosList.length; i++) {
                var startPosNode = bulletStartPosList[i];
                var dir = v3(startPosNode.worldPosition).subtract(_this3.node.position);

                var baseAttackNum = _this3.getCurrentAttackNum();

                _this3.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                  error: Error()
                }), TowerBase) : TowerBase).shootOneBullet(_this3.baseAttackRate + _this3.node.getComponent(_crd && BaseObject === void 0 ? (_reportPossibleCrUseOfBaseObject({
                  error: Error()
                }), BaseObject) : BaseObject).baseAttackRate, dir, baseAttackNum);
              }
            };

            this.node.on("release-skill", function (cb) {
              // let shootRate = data.shootRate + this.baseAttackRate;
              // let baseAttackNum = data.baseAttackNum;
              var shootRate = _this3.getCurrentShootRate();

              var towerBaseShootRate = _this3.node.getComponent(_crd && TowerBase === void 0 ? (_reportPossibleCrUseOfTowerBase({
                error: Error()
              }), TowerBase) : TowerBase).getCurrentShootRate();

              var endShootRate = shootRate + towerBaseShootRate;
              console.log("shoot rate", endShootRate);
              var time = 1 / endShootRate; // console.log("time", time);

              _this3.schedule(shootBullet, time); // if (cb){
              // }
              // this.node.eulerAngles = ;


              var currentRotate = _this3.getCurrentSkillRotateAngle();

              var skillTime = currentRotate / _this3.rotateSpeed;
              var tw = new Tween(_this3.node);
              var signDir = Math.random() - 0.5; // this.node.eulerAngles = v3(0,0,0);
              // this.node.emit("weapon-euler-angles-init"); //武器角度归位

              if (_this3.weaponGunNode) {
                _this3.weaponGunNode.eulerAngles = v3(0, 0, 0);
              }

              tw.by(skillTime, {
                eulerAngles: v3(0, currentRotate * (signDir / Math.abs(signDir)), 0)
              });
              tw.call(function () {
                _this3.unschedule(shootBullet);

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
      }), BaseObject) : BaseObject), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponGunNode", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy9Ta2lsbENvbXBvbmVudC9DcmF6eVJvdGF0ZVNraWxsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiVHdlZW4iLCJ2MyIsIkJhc2VPYmplY3QiLCJUb3dlckJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDcmF6eVJvdGF0ZVNraWxsIiwidHlwZSIsIm5vZGUiLCJvbiIsImdhbWVDb25maWciLCJnYW1lQ29udHJvbGxlciIsImluaXQiLCJzaG9vdEJ1bGxldCIsImJ1bGxldFN0YXJ0UG9zTGlzdCIsImdldENvbXBvbmVudCIsImkiLCJsZW5ndGgiLCJzdGFydFBvc05vZGUiLCJkaXIiLCJ3b3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJwb3NpdGlvbiIsImJhc2VBdHRhY2tOdW0iLCJnZXRDdXJyZW50QXR0YWNrTnVtIiwic2hvb3RPbmVCdWxsZXQiLCJiYXNlQXR0YWNrUmF0ZSIsImNiIiwic2hvb3RSYXRlIiwiZ2V0Q3VycmVudFNob290UmF0ZSIsInRvd2VyQmFzZVNob290UmF0ZSIsImVuZFNob290UmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lIiwic2NoZWR1bGUiLCJjdXJyZW50Um90YXRlIiwiZ2V0Q3VycmVudFNraWxsUm90YXRlQW5nbGUiLCJza2lsbFRpbWUiLCJyb3RhdGVTcGVlZCIsInR3Iiwic2lnbkRpciIsIk1hdGgiLCJyYW5kb20iLCJ3ZWFwb25HdW5Ob2RlIiwiZXVsZXJBbmdsZXMiLCJieSIsImFicyIsImNhbGwiLCJ1bnNjaGVkdWxlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEUsT0FBQUEsRTs7OztBQUNwQ0MsTUFBQUEsVSxpQkFBQUEsVTs7QUFFQUMsTUFBQUEsUyxzQkFBQUEsUzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQyxVQVVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFUjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBRUE7QUFBQTs7QUFDTCxpQkFBS1MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFxQixVQUFDQyxVQUFELEVBQWFDLGNBQWIsRUFBZ0Q7QUFDakUsY0FBQSxNQUFJLENBQUNDLElBQUwsQ0FBVUYsVUFBVixFQUFzQkMsY0FBdEI7QUFDSCxhQUZEO0FBR0g7OztrQ0FDTztBQUFBOztBQUNKLGdCQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGtCQUFJQyxrQkFBa0IsR0FBRyxNQUFJLENBQUNOLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsMENBQWtDRCxrQkFBM0Q7O0FBQ0EsbUJBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0Ysa0JBQWtCLENBQUNHLE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO0FBQ2hELG9CQUFJRSxZQUFZLEdBQUdKLGtCQUFrQixDQUFDRSxDQUFELENBQXJDO0FBQ0Esb0JBQUlHLEdBQUcsR0FBR2xCLEVBQUUsQ0FBQ2lCLFlBQVksQ0FBQ0UsYUFBZCxDQUFGLENBQStCQyxRQUEvQixDQUF3QyxNQUFJLENBQUNiLElBQUwsQ0FBVWMsUUFBbEQsQ0FBVjs7QUFDQSxvQkFBSUMsYUFBYSxHQUFHLE1BQUksQ0FBQ0MsbUJBQUwsRUFBcEI7O0FBRUEsZ0JBQUEsTUFBSSxDQUFDaEIsSUFBTCxDQUFVTyxZQUFWO0FBQUE7QUFBQSw0Q0FBa0NVLGNBQWxDLENBQ0ksTUFBSSxDQUFDQyxjQUFMLEdBQXNCLE1BQUksQ0FBQ2xCLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsOENBQW1DVyxjQUQ3RCxFQUVJUCxHQUZKLEVBR0lJLGFBSEo7QUFLSDtBQUVKLGFBakJEOztBQWtCQSxpQkFBS2YsSUFBTCxDQUFVQyxFQUFWLENBQWEsZUFBYixFQUE4QixVQUFDa0IsRUFBRCxFQUFRO0FBQ2xDO0FBQ0E7QUFDQSxrQkFBSUMsU0FBUyxHQUFHLE1BQUksQ0FBQ0MsbUJBQUwsRUFBaEI7O0FBQ0Esa0JBQUlDLGtCQUFrQixHQUFHLE1BQUksQ0FBQ3RCLElBQUwsQ0FBVU8sWUFBVjtBQUFBO0FBQUEsMENBQWtDYyxtQkFBbEMsRUFBekI7O0FBQ0Esa0JBQUlFLFlBQVksR0FBR0gsU0FBUyxHQUFHRSxrQkFBL0I7QUFDQUUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsWUFBMUI7QUFDQSxrQkFBSUcsSUFBSSxHQUFHLElBQUlILFlBQWYsQ0FQa0MsQ0FRbEM7O0FBQ0EsY0FBQSxNQUFJLENBQUNJLFFBQUwsQ0FBY3RCLFdBQWQsRUFBMkJxQixJQUEzQixFQVRrQyxDQVdsQztBQUVBO0FBQ0E7OztBQUNBLGtCQUFJRSxhQUFhLEdBQUcsTUFBSSxDQUFDQywwQkFBTCxFQUFwQjs7QUFDQSxrQkFBSUMsU0FBUyxHQUFHRixhQUFhLEdBQUcsTUFBSSxDQUFDRyxXQUFyQztBQUNBLGtCQUFJQyxFQUFFLEdBQUcsSUFBSXhDLEtBQUosQ0FBVSxNQUFJLENBQUNRLElBQWYsQ0FBVDtBQUNBLGtCQUFJaUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBOUIsQ0FsQmtDLENBbUJsQztBQUNBOztBQUNBLGtCQUFJLE1BQUksQ0FBQ0MsYUFBVCxFQUF3QjtBQUNwQixnQkFBQSxNQUFJLENBQUNBLGFBQUwsQ0FBbUJDLFdBQW5CLEdBQWlDNUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFuQztBQUNIOztBQUNEdUMsY0FBQUEsRUFBRSxDQUFDTSxFQUFILENBQU1SLFNBQU4sRUFBaUI7QUFBRU8sZ0JBQUFBLFdBQVcsRUFBRTVDLEVBQUUsQ0FBQyxDQUFELEVBQUltQyxhQUFhLElBQUlLLE9BQU8sR0FBR0MsSUFBSSxDQUFDSyxHQUFMLENBQVNOLE9BQVQsQ0FBZCxDQUFqQixFQUFtRCxDQUFuRDtBQUFqQixlQUFqQjtBQUNBRCxjQUFBQSxFQUFFLENBQUNRLElBQUgsQ0FBUSxZQUFNO0FBQ1YsZ0JBQUEsTUFBSSxDQUFDQyxVQUFMLENBQWdCcEMsV0FBaEI7O0FBQ0Esb0JBQUljLEVBQUosRUFBUTtBQUNKQSxrQkFBQUEsRUFBRTtBQUNMO0FBQ0osZUFMRDtBQU1BYSxjQUFBQSxFQUFFLENBQUNVLEtBQUg7QUFDSCxhQWhDRDtBQWtDSDs7Ozs7Ozs7Ozs7aUJBM0Q0QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUd2VlbiwgdjMsIHYyIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZU9iamVjdCc7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vR2FtZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUb3dlckJhc2UgfSBmcm9tICcuLi9Ub3dlcnMvVG93ZXJCYXNlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdDcmF6eVJvdGF0ZVNraWxsJylcclxuZXhwb3J0IGNsYXNzIENyYXp5Um90YXRlU2tpbGwgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcclxuICAgIC8vIHB1YmxpYyBnYW1lQ29uZmlnOiB7fSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGJhc2VBdHRhY2s6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIGJhc2VBdHRhY2tSYXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIGluaXQoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbmioDog73nu4Tku7ZcIik7XHJcbiAgICAvLyAgICAgc3VwZXIuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAvLyB9XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pIC8v5q2m5Zmo6KeS5bqmXHJcbiAgICBwdWJsaWMgd2VhcG9uR3VuTm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiaW5pdFwiLCAoZ2FtZUNvbmZpZywgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdChnYW1lQ29uZmlnLCBnYW1lQ29udHJvbGxlcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IHNob290QnVsbGV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWPkeWwhOS4gOaemuWtkOW8uVwiKTtcclxuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRSb3RhdGlvbiA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy55O1xyXG4gICAgICAgICAgICAvLyBsZXQgZGlyID0gdjIoMCwgMSkucm90YXRlKGN1cnJlbnRSb3RhdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXRTdGFydFBvc0xpc3QgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuYnVsbGV0U3RhcnRQb3NMaXN0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1bGxldFN0YXJ0UG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zTm9kZSA9IGJ1bGxldFN0YXJ0UG9zTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB2MyhzdGFydFBvc05vZGUud29ybGRQb3NpdGlvbikuc3VidHJhY3QodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGxldCBiYXNlQXR0YWNrTnVtID0gdGhpcy5nZXRDdXJyZW50QXR0YWNrTnVtKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRvd2VyQmFzZSkuc2hvb3RPbmVCdWxsZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlQXR0YWNrUmF0ZSArIHRoaXMubm9kZS5nZXRDb21wb25lbnQoQmFzZU9iamVjdCkuYmFzZUF0dGFja1JhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBdHRhY2tOdW1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVsZWFzZS1za2lsbFwiLCAoY2IpID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IHNob290UmF0ZSA9IGRhdGEuc2hvb3RSYXRlICsgdGhpcy5iYXNlQXR0YWNrUmF0ZTtcclxuICAgICAgICAgICAgLy8gbGV0IGJhc2VBdHRhY2tOdW0gPSBkYXRhLmJhc2VBdHRhY2tOdW07XHJcbiAgICAgICAgICAgIGxldCBzaG9vdFJhdGUgPSB0aGlzLmdldEN1cnJlbnRTaG9vdFJhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHRvd2VyQmFzZVNob290UmF0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoVG93ZXJCYXNlKS5nZXRDdXJyZW50U2hvb3RSYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBlbmRTaG9vdFJhdGUgPSBzaG9vdFJhdGUgKyB0b3dlckJhc2VTaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvb3QgcmF0ZVwiLCBlbmRTaG9vdFJhdGUpO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IDEgLyBlbmRTaG9vdFJhdGU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGltZVwiLCB0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShzaG9vdEJ1bGxldCwgdGltZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoY2Ipe1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSA7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um90YXRlID0gdGhpcy5nZXRDdXJyZW50U2tpbGxSb3RhdGVBbmdsZSgpO1xyXG4gICAgICAgICAgICBsZXQgc2tpbGxUaW1lID0gY3VycmVudFJvdGF0ZSAvIHRoaXMucm90YXRlU3BlZWQ7XHJcbiAgICAgICAgICAgIGxldCB0dyA9IG5ldyBUd2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgc2lnbkRpciA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsMCwwKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJ3ZWFwb24tZXVsZXItYW5nbGVzLWluaXRcIik7IC8v5q2m5Zmo6KeS5bqm5b2S5L2NXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndlYXBvbkd1bk5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uR3VuTm9kZS5ldWxlckFuZ2xlcyA9IHYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHR3LmJ5KHNraWxsVGltZSwgeyBldWxlckFuZ2xlczogdjMoMCwgY3VycmVudFJvdGF0ZSAqIChzaWduRGlyIC8gTWF0aC5hYnMoc2lnbkRpcikpLCAwKSB9KTtcclxuICAgICAgICAgICAgdHcuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoc2hvb3RCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdHcuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==