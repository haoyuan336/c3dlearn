import { _decorator, Component, Node, loader, AudioClip, AudioSourceComponent, JsonAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioCtl')
export class AudioCtl extends Component {
    public audioSourcesCom: AudioSourceComponent = null;

    @property({ type: JsonAsset })
    public gameConfigJsonAsset: JsonAsset = null;

    private audioMap: Object = {};
    start() {
        this.audioSourcesCom = this.node.getComponent(AudioSourceComponent);
        //加载一下音频资源
        let jsonData = this.gameConfigJsonAsset.json;
        for (let i in jsonData) {
            let data = jsonData[i];
            for (let j in data) {
                let value = data[j];
                if (j.indexOf("Audio") > -1 && value) {
                    this.audioMap[value] = value;
                }
            }
        }
        let loadAudio = (audioStr: string) => {
            loader.loadRes('音乐文件/' + audioStr, AudioClip, (err, result) => {
                if (!err) {
                    this.audioMap[audioStr] = result;
                } else {
                    // console.log("音频加载失败", err);
                }
            })
        }
        for (let i in this.audioMap) {
            loadAudio(this.audioMap[i]);
        }
    }
    onLoad() {
        this.node.on("play-audio", (audioStr, cb) => {


            // console.log("player- audio", audioStr);
            this.playAudio(audioStr, cb);
        })
        this.node.on("player-button-click-audio", () => {
            this.playAudio("按钮音效2", () => {

            });
        })
        this.node.on("player-button-click-audio-2", () => {
            this.playAudio("按钮音效2", () => {

            })
        })
        this.node.on("play-bg-music", () => {
            //播放背景音乐
            loader.loadRes("音乐文件/背景音效", AudioClip, (err, result: AudioClip) => {
                // result.setVolume(0.5);
                // this.audioSourcesCom.volume = 0.5;
                // result.setVolume(0.1, true);
                // this.audioSourcesCom.playOneShot(result);
            });
        })
    }
    playAudio(audioStr, cb) {
        // console.log("播放音乐文件", audioStr);
        if (audioStr) {

            if (this.audioMap[audioStr]) {
                // console.log("存在此音频，直接播放", audioStr);
                this.audioMap[audioStr].on("ended", () => {
                    // console.log("音效播放完成");
                    if (cb) {
                        cb();
                    }
                })
                this.audioSourcesCom.playOneShot(this.audioMap[audioStr]);

            } else {
                loader.loadRes('音乐文件/' + audioStr, AudioClip, (err, result: AudioClip) => {
                    if (err) {
                        // console.log("load audio err", err)
                    } else {
                        this.audioMap[audioStr] = result;
                        // AudioSourceComponent
                        // result.play();
                        result.on("ended", () => {
                            if (cb) {
                                cb();
                            }
                        })
                        this.audioSourcesCom.playOneShot(result);

                    }
                })
            }
        } else {
            if (cb) {
                cb();
            }
        }

    }
}
