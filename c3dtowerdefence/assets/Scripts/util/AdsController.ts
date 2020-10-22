// import wx frp
import { game, Game } from 'cc'
export class AdsController {
    public bannerAds = null;
    private videoAds = null; //视频广告
    private videoIsReady: boolean = false;
    private videoCb: Function = null;
    private shareCb: Function = null;
    constructor() {
        //观看广告的控制器

        if (!CC_DEBUG) {
            let sysInfo = wx.getSystemInfoSync();
            console.log("sysy info", sysInfo);
            this.bannerAds = wx.createBannerAd({
                adUnitId: 'adunit-76289691b92177e3',
                style: {
                    left: 5,
                    top: 200,
                    width: 300
                },
                adIntervals: 30,
            })
            this.bannerAds.onResize((res) => {
                this.bannerAds.style.top = wx.getSystemInfoSync().windowHeight - res.height - 5
            })
            this.bannerAds.onError((err) => {
                if (err) {
                    //广告拉取失败
                }
            })
            this.bannerAds.onLoad(() => {
                // this.showBannerAds();

            })

            this.videoAds = wx.createRewardedVideoAd({ adUnitId: 'adunit-155f48f473e48e1b' })
            this.videoAds.load().then(() => {
                this.videoIsReady = true;
            });
            this.videoAds.onError(() => {

            })
            this.videoAds.onLoad(() => {
                this.videoIsReady = true;
                console.log("视频广告拉去成功")
            })

            this.videoAds.onClose((res) => {
                if (res && res.isEnded || res === undefined) {
                    //正常播放的视频，可以下发奖励
                    if (this.videoCb) {
                        this.videoCb('succ');
                    }
                } else {
                    if (this.videoCb) {
                        this.videoCb('fail');
                    }
                }
            })


        }

        game.on(Game.EVENT_SHOW, () => {
            // cc.audioEngine.pauseMusic();
            // cc.audioEngine.pauseAllEffects();
            if (this.shareCb) {
                this.shareCb();
                this.shareCb = null;
            }
        });

    }
    watchVideoAds() {
        this.videoAds.show().catch(() => {
            this.videoAds.load().then(() => {
                this.videoAds.show();
            });
        });
        //观看一个视频广告 
        return new Promise((resolve, reject) => {
            // resolve('fail');
            this.videoCb = resolve;
        })
    }
    getVideoIsReady() {
        //获取视频广告是否准备好了
        return this.videoIsReady;
    }
    shareTo() {
        return new Promise((resolve, reject) => {
            wx.shareAppMessage({
                title: "快来帮我打败小怪兽吧！",
                imageUrl: "https://chutianba-1251688348.cos.ap-beijing.myqcloud.com/shouhuhuahures/tbkp.png"
            });
            this.shareCb = resolve;
        })
    }
    showBannerAds() {
        //显示广告条
        if (this.bannerAds) {
            this.bannerAds.show();

        }
    }
    hideBannerAds() {
        if (this.bannerAds) {
            this.bannerAds.hide();
        }
    }
}