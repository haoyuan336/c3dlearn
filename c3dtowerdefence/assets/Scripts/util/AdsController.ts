import { sys } from 'cc';
// import wx frp
export class AdsController {
    public bannerAds = null;
    private isDev: boolean = false;
    constructor() {
        //观看广告的控制器
        if (!this.isDev){
            this.bannerAds = wx.createBannerAd({
                adUnitId: 'adunit-76289691b92177e3',
                style: {
                    left: 10,
                    top: 76,
                    width: 320
                },
                adIntervals: 30,
            })
        }
       
    }
    watchVideoAds() {

        //观看一个视频广告
        return new Promise((resolve, reject) => {

        })
    }
    getVideoIsReady() {
        //获取视频广告是否准备好了
        return false;
    }
    shareTo() {
        return new Promise((resolve, reject) => {

        })
    }
    showBannerAds() {
        //显示广告条
        if (this.bannerAds){
            this.bannerAds.show();
            
        }
    }
    hideBannerAds(){
        if (this.bannerAds){
            this.bannerAds.hide();
        }
    }
}