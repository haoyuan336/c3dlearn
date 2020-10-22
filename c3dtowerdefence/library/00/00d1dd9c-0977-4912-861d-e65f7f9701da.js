System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, game, Game, _crd, AdsController;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
      Game = _cc.Game;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "00d1d2cCXdJEoYd5l9/lwHa", "AdsController", _context.meta);

      _crd = true;

      _export("AdsController", AdsController = /*#__PURE__*/function () {
        //视频广告
        function AdsController() {
          var _this = this;

          _classCallCheck(this, AdsController);

          this.bannerAds = null;
          this.videoAds = null;
          this.videoIsReady = false;
          this.videoCb = null;
          this.shareCb = null;

          //观看广告的控制器
          if (!CC_DEBUG) {
            var sysInfo = wx.getSystemInfoSync();
            console.log("sysy info", sysInfo);
            this.bannerAds = wx.createBannerAd({
              adUnitId: 'adunit-76289691b92177e3',
              style: {
                left: 5,
                top: 200,
                width: 300
              },
              adIntervals: 30
            });
            this.bannerAds.onResize(function (res) {
              _this.bannerAds.style.top = wx.getSystemInfoSync().windowHeight - res.height - 5;
            });
            this.bannerAds.onError(function (err) {
              if (err) {//广告拉取失败
              }
            });
            this.bannerAds.onLoad(function () {// this.showBannerAds();
            });
            this.videoAds = wx.createRewardedVideoAd({
              adUnitId: 'adunit-155f48f473e48e1b'
            });
            this.videoAds.load().then(function () {
              _this.videoIsReady = true;
            });
            this.videoAds.onError(function () {});
            this.videoAds.onLoad(function () {
              _this.videoIsReady = true;
              console.log("视频广告拉去成功");
            });
            this.videoAds.onClose(function (res) {
              if (res && res.isEnded || res === undefined) {
                //正常播放的视频，可以下发奖励
                if (_this.videoCb) {
                  _this.videoCb('succ');
                }
              } else {
                if (_this.videoCb) {
                  _this.videoCb('fail');
                }
              }
            });
          }

          game.on(Game.EVENT_SHOW, function () {
            // cc.audioEngine.pauseMusic();
            // cc.audioEngine.pauseAllEffects();
            if (_this.shareCb) {
              _this.shareCb();

              _this.shareCb = null;
            }
          });
        }

        _createClass(AdsController, [{
          key: "watchVideoAds",
          value: function watchVideoAds() {
            var _this2 = this;

            this.videoAds.show()["catch"](function () {
              _this2.videoAds.load().then(function () {
                _this2.videoAds.show();
              });
            }); //观看一个视频广告 

            return new Promise(function (resolve, reject) {
              // resolve('fail');
              _this2.videoCb = resolve;
            });
          }
        }, {
          key: "getVideoIsReady",
          value: function getVideoIsReady() {
            //获取视频广告是否准备好了
            return this.videoIsReady;
          }
        }, {
          key: "shareTo",
          value: function shareTo() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              wx.shareAppMessage({
                title: "快来帮我打败小怪兽吧！",
                imageUrl: "https://chutianba-1251688348.cos.ap-beijing.myqcloud.com/shouhuhuahures/tbkp.png"
              });
              _this3.shareCb = resolve;
            });
          }
        }, {
          key: "showBannerAds",
          value: function showBannerAds() {
            //显示广告条
            if (this.bannerAds) {
              this.bannerAds.show();
            }
          }
        }, {
          key: "hideBannerAds",
          value: function hideBannerAds() {
            if (this.bannerAds) {
              this.bannerAds.hide();
            }
          }
        }]);

        return AdsController;
      }());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL0Fkc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiZ2FtZSIsIkdhbWUiLCJBZHNDb250cm9sbGVyIiwiYmFubmVyQWRzIiwidmlkZW9BZHMiLCJ2aWRlb0lzUmVhZHkiLCJ2aWRlb0NiIiwic2hhcmVDYiIsIkNDX0RFQlVHIiwic3lzSW5mbyIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQmFubmVyQWQiLCJhZFVuaXRJZCIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiYWRJbnRlcnZhbHMiLCJvblJlc2l6ZSIsInJlcyIsIndpbmRvd0hlaWdodCIsImhlaWdodCIsIm9uRXJyb3IiLCJlcnIiLCJvbkxvYWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJsb2FkIiwidGhlbiIsIm9uQ2xvc2UiLCJpc0VuZGVkIiwidW5kZWZpbmVkIiwib24iLCJFVkVOVF9TSE9XIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJpbWFnZVVybCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7Ozs7K0JBQ0ZDLGE7QUFFZ0I7QUFJekIsaUNBQWM7QUFBQTs7QUFBQTs7QUFBQSxlQUxQQyxTQUtPLEdBTEssSUFLTDtBQUFBLGVBSk5DLFFBSU0sR0FKSyxJQUlMO0FBQUEsZUFITkMsWUFHTSxHQUhrQixLQUdsQjtBQUFBLGVBRk5DLE9BRU0sR0FGYyxJQUVkO0FBQUEsZUFETkMsT0FDTSxHQURjLElBQ2Q7O0FBQ1Y7QUFFQSxjQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNYLGdCQUFJQyxPQUFPLEdBQUdDLEVBQUUsQ0FBQ0MsaUJBQUgsRUFBZDtB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UDtBQUlIOzs7NENBQ2lCO0FBQ2Q7QUFDQSxtQkFBTyxLQUFLakMsWUFBWjtBQUNIOzs7b0NBQ1M7QUFBQTs7QUFDTixtQkFBTyxJQUFJZ0MsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQzdCLGNBQUFBLEVBQUUsQ0FBQzhCLGVBQUgsQ0FBbUI7QUFDZkMsZ0JBQUFBLEtBQUssRUFBRSxhQURRO0FBRWZDLGdCQUFBQSxRQUFRLEVBQUU7QUFGSyxlQUFuQjtBQUlBLGNBQUEsTUFBSSxDQUFDbkMsT0FBTCxHQUFlK0IsT0FBZjtBQUNILGFBTk0sQ0FBUDtBQU9IOzs7MENBQ2U7QUFDWjtBQUNBLGdCQUFJLEtBQUtuQyxTQUFULEVBQW9CO0FBQ2hCLG1CQUFLQSxTQUFMLENBQWVpQyxJQUFmO0FBRUg7QUFDSjs7OzBDQUNlO0FBQ1osZ0JBQUksS0FBS2pDLFNBQVQsRUFBb0I7QUFDaEIsbUJBQUtBLFNBQUwsQ0FBZXdDLElBQWY7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHd4IGZycFxyXG5pbXBvcnQgeyBnYW1lLCBHYW1lIH0gZnJvbSAnY2MnXHJcbmV4cG9ydCBjbGFzcyBBZHNDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBiYW5uZXJBZHMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB2aWRlb0FkcyA9IG51bGw7IC8v6KeG6aKR5bm/5ZGKXHJcbiAgICBwcml2YXRlIHZpZGVvSXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aWRlb0NiOiBGdW5jdGlvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNoYXJlQ2I6IEZ1bmN0aW9uID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v6KeC55yL5bm/5ZGK55qE5o6n5Yi25ZmoXHJcblxyXG4gICAgICAgIGlmICghQ0NfREVCVUcpIHtcclxuICAgICAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN5c3kgaW5mb1wiLCBzeXNJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZHMgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC03NjI4OTY5MWI5MjE3N2UzJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNSxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDMwLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkcy5vblJlc2l6ZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkcy5zdHlsZS50b3AgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQgLSA1XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWRzLm9uRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5bm/5ZGK5ouJ5Y+W5aSx6LSlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWRzLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dCYW5uZXJBZHMoKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRzID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQ6ICdhZHVuaXQtMTU1ZjQ4ZjQ3M2U0OGUxYicgfSlcclxuICAgICAgICAgICAgdGhpcy52aWRlb0Fkcy5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvSXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRzLm9uRXJyb3IoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy52aWRlb0Fkcy5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0lzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlub/lkYrmi4nljrvmiJDlip9cIilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZHMub25DbG9zZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mraPluLjmkq3mlL7nmoTop4bpopHvvIzlj6/ku6XkuIvlj5HlpZblirFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWRlb0NiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9DYignc3VjYycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlkZW9DYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ2IoJ2ZhaWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhbWUub24oR2FtZS5FVkVOVF9TSE9XLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGF1c2VBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXJlQ2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVDYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUNiID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHdhdGNoVmlkZW9BZHMoKSB7XHJcbiAgICAgICAgdGhpcy52aWRlb0Fkcy5zaG93KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRzLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BZHMuc2hvdygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+ingueci+S4gOS4quinhumikeW5v+WRiiBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXNvbHZlKCdmYWlsJyk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9DYiA9IHJlc29sdmU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFZpZGVvSXNSZWFkeSgpIHtcclxuICAgICAgICAvL+iOt+WPluinhumikeW5v+WRiuaYr+WQpuWHhuWkh+WlveS6hlxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvSXNSZWFkeTtcclxuICAgIH1cclxuICAgIHNoYXJlVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuW/q+adpeW4ruaIkeaJk+i0peWwj+aAquWFveWQp++8gVwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9jaHV0aWFuYmEtMTI1MTY4ODM0OC5jb3MuYXAtYmVpamluZy5teXFjbG91ZC5jb20vc2hvdWh1aHVhaHVyZXMvdGJrcC5wbmdcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZUNiID0gcmVzb2x2ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2hvd0Jhbm5lckFkcygpIHtcclxuICAgICAgICAvL+aYvuekuuW5v+WRiuadoVxyXG4gICAgICAgIGlmICh0aGlzLmJhbm5lckFkcykge1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkcy5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZGVCYW5uZXJBZHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFubmVyQWRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWRzLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=