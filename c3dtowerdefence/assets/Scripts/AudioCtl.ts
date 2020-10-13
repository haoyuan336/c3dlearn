import { _decorator, Component, Node, loader, AudioClip, AudioSourceComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioCtl')
export class AudioCtl extends Component {
    public audioSourcesCom: AudioSourceComponent = null;
    start() {
        this.audioSourcesCom = this.node.getComponent(AudioSourceComponent);

    }
    onLoad() {
        this.node.on("play-audio", (audioStr, cb) => {


            console.log("player- audio", audioStr);
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
        this.node.on("play-bg-music", ()=>{
            //播放背景音乐
            loader.loadRes("音乐文件/背景音效", AudioClip, (err, result: AudioClip)=>{
                // result.setVolume(0.5);
                // this.audioSourcesCom.volume = 0.5;
                // result.setVolume(0.1, true);
                // this.audioSourcesCom.playOneShot(result);
            });
        })
    }
    playAudio(audioStr, cb) {

        if (audioStr){
            loader.loadRes('音乐文件/' + audioStr, AudioClip, (err, result: AudioClip) => {
                if (err) {
                    console.log("load audio err", err)
                } else {
                    // AudioSourceComponent
                    // result.play();
                    this.audioSourcesCom.playOneShot(result);
                }
            })
        }
       
    }
}
