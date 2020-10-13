import { _decorator, Component, Node, loader, AudioClip, AudioSourceComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioCtl')
export class AudioCtl extends Component {
    start() {

    }
    onLoad() {
        this.node.on("play-audio", (audioStr, cb) => {
            console.log("player- audio", audioStr);
            this.playAudio(audioStr, cb);
        })
        this.node.on("player-button-click-audio", ()=>{
            this.playAudio("按钮音效2", ()=>{

            });
        })
        this.node.on("player-button-click-audio-2", ()=>{
            this.playAudio("按钮音效", ()=>{
                
            })
        })
    }
    playAudio(audioStr, cb) {
        loader.loadRes('音乐文件/' + audioStr, AudioClip, (err, result: AudioClip) => {
            if (err) {
                console.log("load audio err", err)
            } else {
                // AudioSourceComponent
                result.play();
            }
        })
    }
}
