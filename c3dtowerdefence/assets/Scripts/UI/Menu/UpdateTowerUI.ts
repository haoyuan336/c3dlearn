import { _decorator, Component, Node } from 'cc';
import { MenuUIBase } from './MenuUIBase';
const { ccclass, property } = _decorator;

@ccclass('UpdateTowerUI')
export class UpdateTowerUI extends MenuUIBase {
    @property({ type: Node })
    public updateCostLabel: Node = null;
    @property({ type: Node })
    public destroyWinLabel: Node = null;

    start() {
        // Your initialization goes here.
        super.start();
    }
    onButtonClick(event, customData) {
        console.log("custom data", customData);
        switch (customData) {
            case 'bg':
                console.log("点中了背景");
                this.state.setState("close-ui")
                break;
            default:
                break;
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
