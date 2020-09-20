import { _decorator, Component, Node, v3, view, Tween, SpriteComponent, Color, instantiate, Prefab } from 'cc';
import { GameController } from './GameController';
import { WeaponUpdateCellPrefab } from './UI/WeaponUpdateCellPrefab';
import { State } from './util/State';
const { ccclass, property } = _decorator;

@ccclass('WeaponInfoCtl')
export class WeaponInfoCtl extends Component {
    @property({ type: Node })
    public blockBgNode: Node = null;

    @property({ type: Node })
    public weaponInfoNode: Node = null;

    @property({ type: Node })
    public weaponInfoButton: Node = null;
    private state: State = new State();

    @property({ type: GameController })
    public gameController: GameController = null;

    @property({ type: Prefab })
    public updateWeaponInfoCellPrefab: Prefab = null;

    @property({ type: Node })
    public weaponCellParentNode: Node = null;


    private weaponIndoCellNodeList: Node[] = [];

    start() {
        this.weaponInfoNode.position = v3(this.weaponInfoNode.width * 0.5, 0, 0);
        this.state.setState("close");
        this.state.addState("play-open-anim", () => {
            //播放打开武器信息的UI
            console.log("播放武器信息ui打开的动画");
            this.hideButton().then(() => {
                return this.showWeaponInfoNode();
            }).then(() => {
                this.showBlockBgNode();
            }).then(() => {
                this.state.setState('open');
            })
        })
        this.state.addState("play-close-anim", () => {
            this.hideBlockBgNode().then(() => {
                return this.hideWeaponInfoNode();
            }).then(() => {
                return this.showWeaponInfoButtonn();
            }).then(() => {
                this.state.setState("close");
            })
        })
        this.node.on("close-weapon-info-layer", () => {
            //关闭武器信息页面
            if (this.state.getState() === 'open') {
                this.state.setState("play-close-anim");
            }
        });
        this.node.on("refer-choose-rate-cost", (chooseRate) => {
            console.log("刷新当前选择的倍数", chooseRate);
            console.log("weapon indo cell node list", this.weaponIndoCellNodeList);
            for (let i = 0; i < this.weaponIndoCellNodeList.length; i++) {
                let node = this.weaponIndoCellNodeList[i];
                node.getComponent(WeaponUpdateCellPrefab).updateChooseRate(chooseRate);
            }
        })
        // this.node.on("enter-game", ()=>{
        this.initWeaponData();
        // })
        //
    }
    public initWeaponData() {
        //初始化当前武器的相关信息
        let gameController = this.gameController.getComponent(GameController);
        let gameConfig = this.gameController.getComponent(GameController).getGameConfig().json;
        let towerLevelData = this.gameController.playerData.getCurrentTowersLocalLevelData();
        for (let i = 0; i < towerLevelData.length; i++) {
            let data = towerLevelData[i];
            let node = instantiate(this.updateWeaponInfoCellPrefab);
            node.parent = this.weaponCellParentNode;
            node.getComponent(WeaponUpdateCellPrefab).setData(data, gameController, gameConfig);
            node.position = v3(0, -i * (node.height + 10) - (node.height + 10) * 0.5 - 5, 0);
            this.weaponCellParentNode.height = node.position.y * -1 + node.height * 0.5;
            this.weaponIndoCellNodeList.push(node);
        }
    }
    showWeaponInfoButtonn() {
        return new Promise((resolve, reject) => {
            let v = view.getVisibleSize().width;
            let tw = new Tween(this.weaponInfoButton);
            tw.to(0.1, {
                position: v3(v * 0.5 - 100, 0, 0)
            })
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }
    hideWeaponInfoNode() {
        //隐藏武器信息节点
        return new Promise((resolve, reject) => {
            let tw = new Tween(this.weaponInfoNode);
            tw.to(0.2, {
                position: v3(this.weaponInfoNode.width * 0.5, 0, 0)
            });
            tw.call(() => {
                resolve();
            })
            tw.start();
        })

    }
    hideBlockBgNode() {
        return new Promise((resolve, reject) => {
            resolve();
            this.blockBgNode.active = false;
        })
    }
    showWeaponInfoNode() {
        return new Promise((resolve, reject) => {
            //
            // for (let i = 0 ; i < this.weaponIndoCellNodeList.length ; i ++){
            //     let node = this.weaponIndoCellNodeList[i];
            //     node.getComponent(WeaponUpdateCellPrefab).referCurrentDamage();
            // }
            let tw = new Tween(this.weaponInfoNode);
            tw.to(0.2, {
                position: v3(0, 0, 0)
            })
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }
    showBlockBgNode() {
        return new Promise((resolve, reject) => {
            this.blockBgNode.active = true;
            let tw = new Tween(this.blockBgNode.getComponent(SpriteComponent));
            // tw.to(0.2, {color: new Color(0,0,0,150)});
            tw.call(() => {
                resolve();
            });
            tw.start();
        })
    }
    hideButton() {
        let v = view.getVisibleSize().width;
        return new Promise((resolve, reject) => {
            let buttonTw = new Tween(this.weaponInfoButton);
            buttonTw.to(0.1, {
                position: v3(v * 0.5 + 100, 0, 0)
            })
            buttonTw.call(() => {
                resolve();
            })
            buttonTw.start();
        })

    }
    onButtonClick(event, customData) {
        switch (customData) {
            case 'show-weapon-info':
                console.log("武器信息按钮");
                if (this.state.getState() === 'close') {
                    //关闭状态
                    this.state.setState("play-open-anim");

                }
                break;
            case 'bg-node-click':
                console.log("背景节点点击 ");
                if (this.state.getState() === 'open') {
                    this.state.setState("play-close-anim");
                }
                break;
            default:
                break;
        }
    }
}
