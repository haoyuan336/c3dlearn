System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, systemEvent, SystemEvent, AnimationComponent, v3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PlayerController;

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
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      AnimationComponent = _cc.AnimationComponent;
      v3 = _cc.v3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9e215lHCqNBtYqPAtnv4+b3", "PlayerController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: AnimationComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PlayerController, _Component);

        function PlayerController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PlayerController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayerController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "bodyAnimation", _descriptor, _assertThisInitialized(_this));

          _this._startJump = false;
          _this._jumpStep = 0;
          _this._curJumpTime = 0;
          _this._jumpTime = 0.1;
          _this._curJumpSpeed = 0.1;
          _this._curPos = v3();
          _this._deltaPos = v3(0, 0, 0);
          _this._targetPos = v3();
          _this._isMoving = false;
          _this._curMoveIndex = 0;
          return _this;
        }

        _createClass(PlayerController, [{
          key: "start",
          value: function start() {// Your initialization goes here.
            // systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          }
        }, {
          key: "setInputActive",
          value: function setInputActive(active) {
            if (active) {
              systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
            } else {
              systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
            }
          }
        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
            // console.log("on mouse up");
            if (event.getButton() === 0) {
              this.jumpByStep(1);
            } else if (event.getButton() === 2) {
              this.jumpByStep(2);
            }
          }
        }, {
          key: "jumpByStep",
          value: function jumpByStep(step) {
            console.log("jump by step", step);

            if (this._isMoving) {
              return;
            }

            this._startJump = true;
            this._jumpStep = step;
            this._curJumpTime = 0;
            this._curJumpSpeed = this._jumpStep / this._jumpTime;
            this.node.getPosition(this._curPos);
            Vec3.add(this._targetPos, this._curPos, v3(this._jumpStep, 0, 0));
            this._isMoving = true;

            if (this._jumpStep === 1) {
              this.bodyAnimation.play("OneStep");
            } else {
              this.bodyAnimation.play("TwoStep");
            }

            this._curMoveIndex += step;
          }
        }, {
          key: "onOnceJumpEnd",
          value: function onOnceJumpEnd() {
            this._isMoving = false;
            this.node.emit("JumpEnd", this._curMoveIndex);
          }
        }, {
          key: "reset",
          value: function reset() {
            this._curMoveIndex = 0;
          } // checkResult(moveIndex: number){
          //     // if (moveIndex <= this.){
          //     // }
          // }

        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this._startJump) {
              this._curJumpTime += deltaTime;

              if (this._curJumpTime > this._jumpTime) {
                this.node.setPosition(this._targetPos);
                this._startJump = false;
                this.onOnceJumpEnd();
              } else {
                this.node.getPosition(this._curPos);
                this._deltaPos.x = this._curJumpSpeed * deltaTime;
                Vec3.add(this._curPos, this._curPos, this._deltaPos);
                this.node.setPosition(this._curPos);
              }
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return PlayerController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bodyAnimation", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9jM2RsZWFybi9jM2RMZWFybl8wMDIvYXNzZXRzL1NjcmlwdHMvUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBsYXllckNvbnRyb2xsZXIiLCJ0eXBlIiwiX3N0YXJ0SnVtcCIsIl9qdW1wU3RlcCIsIl9jdXJKdW1wVGltZSIsIl9qdW1wVGltZSIsIl9jdXJKdW1wU3BlZWQiLCJfY3VyUG9zIiwiX2RlbHRhUG9zIiwiX3RhcmdldFBvcyIsIl9pc01vdmluZyIsIl9jdXJNb3ZlSW5kZXgiLCJhY3RpdmUiLCJvbiIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25Nb3VzZVVwIiwib2ZmIiwiZXZlbnQiLCJnZXRCdXR0b24iLCJqdW1wQnlTdGVwIiwic3RlcCIsImNvbnNvbGUiLCJsb2ciLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJhZGQiLCJib2R5QW5pbWF0aW9uIiwicGxheSIsImVtaXQiLCJkZWx0YVRpbWUiLCJzZXRQb3NpdGlvbiIsIm9uT25jZUp1bXBFbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsa0IsT0FBQUEsa0I7QUFBb0JDLE1BQUFBLEUsT0FBQUEsRTs7Ozs7O0FBQzlGQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztrQ0FHSkMsZ0IsV0FEWkYsT0FB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cUJBQUs4QixhQUFMO0FBQ0gsZUFKRCxNQUlLO0FBQ0QscUJBQUtSLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLbEIsT0FBM0I7QUFDQSxxQkFBS0MsU0FBTCxDQUFleUIsQ0FBZixHQUFtQixLQUFLM0IsYUFBTCxHQUFxQndCLFNBQXhDO0FBQ0FyQyxnQkFBQUEsSUFBSSxDQUFDaUMsR0FBTCxDQUFTLEtBQUtuQixPQUFkLEVBQXVCLEtBQUtBLE9BQTVCLEVBQW9DLEtBQUtDLFNBQXpDO0FBQ0EscUJBQUtnQixJQUFMLENBQVVPLFdBQVYsQ0FBc0IsS0FBS3hCLE9BQTNCO0FBQ0g7QUFDSjtBQUNKLFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7O1FBekZrQ2YsUzs7Ozs7aUJBUVMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudE1vdXNlLCBBbmltYXRpb25Db21wb25lbnQsIHYzIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BsYXllckNvbnRyb2xsZXInKVxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQW5pbWF0aW9uQ29tcG9uZW50fSlcbiAgICBwdWJsaWMgYm9keUFuaW1hdGlvbjogQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9zdGFydEp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9qdW1wU3RlcDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jdXJKdW1wVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9qdW1wVGltZTogbnVtYmVyID0gMC4xO1xuICAgIHByaXZhdGUgX2N1ckp1bXBTcGVlZDogbnVtYmVyID0gMC4xO1xuICAgIHByaXZhdGUgX2N1clBvczogVmVjMyA9IHYzKCk7XG4gICAgcHJpdmF0ZSBfZGVsdGFQb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcbiAgICBwcml2YXRlIF90YXJnZXRQb3M6IFZlYzMgPSB2MygpO1xuICAgIHByaXZhdGUgX2lzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9jdXJNb3ZlSW5kZXggPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICAvLyBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKTtcbiAgICB9XG4gICAgc2V0SW5wdXRBY3RpdmUoYWN0aXZlOiBib29sZWFuKXtcbiAgICAgICAgaWYgKGFjdGl2ZSl7XG4gICAgICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50OiBFdmVudE1vdXNlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib24gbW91c2UgdXBcIik7XG4gICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wQnlTdGVwKDEpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqdW1wQnlTdGVwKHN0ZXA6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImp1bXAgYnkgc3RlcFwiLCBzdGVwKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzTW92aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fanVtcFN0ZXAgPSBzdGVwO1xuICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSA9IDA7XG4gICAgICAgIHRoaXMuX2N1ckp1bXBTcGVlZCA9IHRoaXMuX2p1bXBTdGVwIC8gdGhpcy5fanVtcFRpbWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLl9jdXJQb3MpO1xuICAgICAgICBWZWMzLmFkZCh0aGlzLl90YXJnZXRQb3MsIHRoaXMuX2N1clBvcywgdjModGhpcy5fanVtcFN0ZXAsIDAsIDApKTtcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fanVtcFN0ZXAgPT09IDEpe1xuICAgICAgICAgICAgdGhpcy5ib2R5QW5pbWF0aW9uLnBsYXkoXCJPbmVTdGVwXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYm9keUFuaW1hdGlvbi5wbGF5KFwiVHdvU3RlcFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdXJNb3ZlSW5kZXggKz0gc3RlcDtcbiAgICB9XG4gICAgb25PbmNlSnVtcEVuZCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJKdW1wRW5kXCIsIHRoaXMuX2N1ck1vdmVJbmRleClcbiAgICB9XG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5fY3VyTW92ZUluZGV4ID0gMDtcbiAgICB9XG4gICAgLy8gY2hlY2tSZXN1bHQobW92ZUluZGV4OiBudW1iZXIpe1xuICAgIC8vICAgICAvLyBpZiAobW92ZUluZGV4IDw9IHRoaXMuKXtcblxuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfVxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc3RhcnRKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VySnVtcFRpbWUgPiB0aGlzLl9qdW1wVGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0SnVtcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub25PbmNlSnVtcEVuZCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFQb3MueCA9IHRoaXMuX2N1ckp1bXBTcGVlZCAqIGRlbHRhVGltZTtcbiAgICAgICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl9jdXJQb3MsIHRoaXMuX2N1clBvcyx0aGlzLl9kZWx0YVBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19