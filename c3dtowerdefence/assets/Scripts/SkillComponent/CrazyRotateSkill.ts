import { _decorator, Component, Node, Tween, v3, v2 } from 'cc';
import { BaseObject } from '../BaseObject';
import { TowerBase } from '../Towers/TowerBase';
const { ccclass, property } = _decorator;

@ccclass('CrazyRotateSkill')
export class CrazyRotateSkill extends BaseObject {
    // public gameConfig: {} = null;
    // private baseAttack: number = 0;
    // private baseAttackRate: number = 0;

    init(gameConfig) {
        console.log("初始化技能组件");
        super.init(gameConfig);
    }
    onLoad() {
        this.node.on("init", (gameConfig) => {
            this.init(gameConfig);
        })
    }
    start() {
        const shootBullet = () => {
            console.log("发射一枚子弹");
            // let currentRotation = this.node.eulerAngles.y;
            // let dir = v2(0, 1).rotate(currentRotation);
            let startPosNode = this.node.getComponent(TowerBase).bulletStartPos;
            let dir = v3(startPosNode.worldPosition).subtract(this.node.position);
            let baseAttackNum = this.getCurrentAttackNum()
            
            this.node.getComponent(TowerBase).shootOneBullet(
                this.baseAttackRate + this.node.getComponent(BaseObject).baseAttackRate,
                v2(dir.x, dir.z),
                baseAttackNum
            )
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
