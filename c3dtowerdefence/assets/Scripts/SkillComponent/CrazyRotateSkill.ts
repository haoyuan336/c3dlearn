import { _decorator, Component, Node, Tween, v3, v2 } from 'cc';
import { BaseObject } from '../BaseObject';
import { GameController } from '../GameController';
import { TowerBase } from '../Towers/TowerBase';
const { ccclass, property } = _decorator;

@ccclass('CrazyRotateSkill')
export class CrazyRotateSkill extends BaseObject {
    // public gameConfig: {} = null;
    // private baseAttack: number = 0;
    // private baseAttackRate: number = 0;

    // init(gameConfig, gameController: GameController) {
    //     console.log("初始化技能组件");
    //     super.init(gameConfig, gameController);
    // }
    @property({ type: Node }) //武器角度
    public weaponGunNode: Node = null;
    onLoad() {
        this.node.on("init", (gameConfig, gameController: GameController) => {
            this.init(gameConfig, gameController);
        })
    }
    start() {
        const shootBullet = () => {
            // console.log("发射一枚子弹");
            // let currentRotation = this.node.eulerAngles.y;
            // let dir = v2(0, 1).rotate(currentRotation);
            let bulletStartPosList = this.node.getComponent(TowerBase).bulletStartPosList;
            for (let i = 0; i < bulletStartPosList.length; i++) {
                let startPosNode = bulletStartPosList[i];
                let dir = v3(startPosNode.worldPosition).subtract(this.node.position);
                let baseAttackNum = this.getCurrentAttackNum()

                this.node.getComponent(TowerBase).shootOneBullet(
                    this.baseAttackRate + this.node.getComponent(BaseObject).baseAttackRate,
                    dir,
                    baseAttackNum
                )
            }

        }
        this.node.on("release-skill", (cb) => {
            // let shootRate = data.shootRate + this.baseAttackRate;
            // let baseAttackNum = data.baseAttackNum;
            let shootRate = this.getCurrentShootRate();
            let towerBaseShootRate = this.node.getComponent(TowerBase).getCurrentShootRate();
            let endShootRate = shootRate + towerBaseShootRate;
            console.log("shoot rate", endShootRate);
            let time = 1 / endShootRate;
            // console.log("time", time);
            this.schedule(shootBullet, time);

            // if (cb){

            // }
            // this.node.eulerAngles = ;
            let currentRotate = this.getCurrentSkillRotateAngle();
            let skillTime = currentRotate / this.rotateSpeed;
            let tw = new Tween(this.node);
            let signDir = Math.random() - 0.5;
            // this.node.eulerAngles = v3(0,0,0);
            // this.node.emit("weapon-euler-angles-init"); //武器角度归位
            if (this.weaponGunNode) {
                this.weaponGunNode.eulerAngles = v3(0, 0, 0);
            }
            tw.by(skillTime, { eulerAngles: v3(0, currentRotate * (signDir / Math.abs(signDir)), 0) });
            tw.call(() => {
                this.unschedule(shootBullet);
                if (cb) {
                    cb();
                }
            })
            tw.start();
        });

    }

}
