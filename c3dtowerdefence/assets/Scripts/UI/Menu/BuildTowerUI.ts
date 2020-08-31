import { _decorator, Component, Node, ButtonComponent, Tween, Vec3, v3, find } from 'cc';
const { ccclass, property } = _decorator;
import { MenuUIBase } from './MenuUIBase'
@ccclass('BuildTowerUI')
export class BuildTowerUI extends MenuUIBase {

    start() {
        console.log("build tower ui");
        super.start();
        let children = this.node.children;
        for (let i = 0; i < children.length; i++) {
            let node = children[i];
            node.on('click', this.onButtonClick.bind(this));
        }
    }
    onButtonClick(event: ButtonComponent, customData) {
        let nodeName = event.node.name;
        if (nodeName === 'BgNode') {
            this.state.setState("close-ui");
        } else {
            let index = nodeName.substring(nodeName.length - 1, nodeName.length);
            this.state.setState('close-ui');
            find("GameController").emit("build-one-tower", index, this.targetNode);   
        }

    }
}
