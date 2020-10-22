System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AdsController;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "00d1d2cCXdJEoYd5l9/lwHa", "AdsController", _context.meta);

      _crd = true;

      // import wx frp
      _export("AdsController", AdsController = /*#__PURE__*/function () {
        function AdsController() {
          _classCallCheck(this, AdsController);

          this.bannerAds = null;
          this.isDev = true;

          //观看广告的控制器
          if (!this.isDev) {
            this.bannerAds = wx.createBannerAd({
              adUnitId: 'adunit-76289691b92177e3',
              style: {
                left: 10,
                top: 76,
                width: 320
              },
              adIntervals: 30
            });
          }
        }

        _createClass(AdsController, [{
          key: "watchVideoAds",
          value: function watchVideoAds() {
            //观看一个视频广告
            return new Promise(function (resolve, reject) {});
          }
        }, {
          key: "getVideoIsReady",
          value: function getVideoIsReady() {
            //获取视频广告是否准备好了
            return false;
          }
        }, {
          key: "shareTo",
          value: function shareTo() {
            return new Promise(function (resolve, reject) {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovd29ya3NwYWNlL2MzZGxlYXJuL2MzZHRvd2VyZGVmZW5jZS9hc3NldHMvU2NyaXB0cy91dGlsL0Fkc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiQWRzQ29udHJvbGxlciIsImJhbm5lckFkcyIsImlzRGV2Iiwid3giLCJjcmVhdGVCYW5uZXJBZCIsImFkVW5pdElkIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJhZEludGVydmFscyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2hvdyIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7K0JBQ2FBLGE7QUFHVCxpQ0FBYztBQUFBOztBQUFBLGVBRlBDLFNBRU8sR0FGSyxJQUVMO0FBQUEsZUFETkMsS0FDTSxHQURXLElBQ1g7O0FBQ1Y7QUFDQSxjQUFJLENBQUMsS0FBS0EsS0FBVixFQUFnQjtBQUNaLGlCQUFLRCxTQUFMLEdBQWlCRSxFQUFFLENBQUNDLGNBQUgsQ0FBa0I7QUFDL0JDLGNBQUFBLFFBQVEsRUFBRSx5QkFEcUI7QUFFL0JDLGNBQUFBLEtBQUssRUFBRTtBQUNIQyxnQkFBQUEsSUFBSSxFQUFFLEVBREg7QUFFSEMsZ0JBQUFBLEdBQUcsRUFBRSxFQUZGO0FBR0hDLGdCQUFBQSxLQUFLLEVBQUU7QUFISixlQUZ3QjtBQU8vQkMsY0FBQUEsV0FBVyxFQUFFO0FBUGtCLGFBQWxCLENBQWpCO0FBU0g7QUFFSjs7OzswQ0FDZTtBQUVaO0FBQ0EsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQixDQUV2QyxDQUZNLENBQVA7QUFHSDs7OzRDQUNpQjtBQUNkO0FBQ0EsbUJBQU8sS0FBUDtBQUNIOzs7b0NBQ1M7QUFDTixtQkFBTyxJQUFJRixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCLENBRXZDLENBRk0sQ0FBUDtBQUdIOzs7MENBQ2U7QUFDWjtBQUNBLGdCQUFJLEtBQUtaLFNBQVQsRUFBbUI7QUFDZixtQkFBS0EsU0FBTCxDQUFlYSxJQUFmO0FBRUg7QUFDSjs7OzBDQUNjO0FBQ1gsZ0JBQUksS0FBS2IsU0FBVCxFQUFtQjtBQUNmLG1CQUFLQSxTQUFMLENBQWVjLElBQWY7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3lzIH0gZnJvbSAnY2MnO1xyXG4vLyBpbXBvcnQgd3ggZnJwXHJcbmV4cG9ydCBjbGFzcyBBZHNDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBiYW5uZXJBZHMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc0RldjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL+ingueci+W5v+WRiueahOaOp+WItuWZqFxyXG4gICAgICAgIGlmICghdGhpcy5pc0Rldil7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWRzID0gd3guY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtNzYyODk2OTFiOTIxNzdlMycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNzYsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiAzMCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHdhdGNoVmlkZW9BZHMoKSB7XHJcblxyXG4gICAgICAgIC8v6KeC55yL5LiA5Liq6KeG6aKR5bm/5ZGKXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFZpZGVvSXNSZWFkeSgpIHtcclxuICAgICAgICAvL+iOt+WPluinhumikeW5v+WRiuaYr+WQpuWHhuWkh+WlveS6hlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNoYXJlVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNob3dCYW5uZXJBZHMoKSB7XHJcbiAgICAgICAgLy/mmL7npLrlub/lkYrmnaFcclxuICAgICAgICBpZiAodGhpcy5iYW5uZXJBZHMpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkcy5zaG93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZGVCYW5uZXJBZHMoKXtcclxuICAgICAgICBpZiAodGhpcy5iYW5uZXJBZHMpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19