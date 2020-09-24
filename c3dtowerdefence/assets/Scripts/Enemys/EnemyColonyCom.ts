import { _decorator, Node, Vec3, v3, Tween, Quat } from 'cc';
import { BezierN } from '../util/BezierN';
import { EnemyBase } from './EnemyBase';
const { ccclass, property } = _decorator;
export class EnemyColonyCom {
    //敌人移动的集群组件
    private currentCheckDuraction: number = 0; //当前的检查方向的时间节点
    private currentMoveDir: Vec3 = new Vec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5); //当前的移动方向
    private targetNode: Node = null; //目标节点
    // private 
    private currentNodeList: Node[] = []; //当前的敌人节点
    private isFirstTargetNode: Boolean = false;//是不是领头羊
    // // private bezier: BezierN = null;
    private movePathList: Vec3[] = null;
    // private state: State = new State();
    private currentMoveTw: Tween = null;

    private fenliForceWeight = 10;
    private juheliForceWeight = 1;
    private duilieliWeight = 1;
    private floowerfirstNodeWeight = 5; //跟随领头羊的力的权重


    private fenliDistance = 4;
    private juheDistance = 6;
    private duilieDistance = 60;

    private currentPathListIndex = 0;
    constructor(groupNodeList: Node[], targetNode: Node, ctlPointList: Vec3[]) {
        //
        //用列表的第一个节点作为领头羊
        // let ctlPos = [v3(0, 0), v3(10, 10), v3(2, 2), v3(2, 7), v3(4, 4)];




        this.movePathList = new BezierN(ctlPointList).getPointList(200);

        this.targetNode = targetNode; //当前的目标节点
        this.currentNodeList = groupNodeList; //当前的需要控制的节点列表
        // if (groupNodeList[0].uuid === this.targetNode.uuid) {
        //     this.isFisrtTargetNode = true
        // }
    }
    update(delatTime: number) {
        if (this.isFirstTargetNode) {
            //如果是领头羊
            return;
        }
        // if (this.currentCheckDuraction > 0.1) {
        //     this.currentCheckDuraction = 0;

        // } else {
        //     this.currentCheckDuraction += delatTime;
        // }




        let sumForce = this.processCheckDir().normalize();
        // console.log("sum force", sumForce);
        this.currentMoveDir = v3(this.currentMoveDir).add(sumForce.multiplyScalar(delatTime));
        this.targetNode.position = v3(this.targetNode.position).add(v3(this.currentMoveDir).multiplyScalar(delatTime));
        // this.targetNode
        let quat = new Quat();
        Quat.fromViewUp(quat, v3(this.currentMoveDir).normalize().multiplyScalar(-1), Vec3.UP);
        // let outQ = quat;
        let q = new Quat();
        Quat.lerp(q, new Quat(this.targetNode.rotation), quat, delatTime);
        this.targetNode.rotation = q;
        // this.targetNode.ro
    }
    processLisanForce(): Vec3 {

        let nodeList: Node[] = [];
        for (let i = 0; i < this.currentNodeList.length; i++) {
            let node = this.currentNodeList[i];
            if (node.uuid !== this.targetNode.uuid && node.getComponent(EnemyBase).getColonyComCtl()) {
                let dis = v3(node.position).subtract(this.targetNode.position).length();
                if (dis < this.fenliDistance) {
                    nodeList.push(node);
                }
            }
        }

        // console.log("process lissan force", nodeList.length);
        if (nodeList.length > 0) {
            let sumForce: Vec3 = v3(0, 0, 0);
            for (let i = 0; i < nodeList.length; i++) {
                let position = nodeList[i].position;
                let dir = v3(this.targetNode.position).subtract(position);
                // console.log("dir", dir);
                // let force = dir.normalize().multiplyScalar(1 / dir.length());
                // console.log("force", force);
                sumForce.add(dir);
            }
            sumForce.multiplyScalar(this.fenliForceWeight);
            return sumForce;

            // return sumForce;

        }
        return v3(0, 0, 0);
    }
    processJuHeForce(): Vec3 {
        let nodeList: Node[] = [];
        for (let i = 0; i < this.currentNodeList.length; i++) {
            let node = this.currentNodeList[i];
            if (node.getComponent(EnemyBase).getColonyComCtl()) {
                let dis = v3(node.position).subtract(this.targetNode.position).length();
                if (dis > this.juheDistance) {
                    nodeList.push(node);
                }
            }

        }
        let middlePos: Vec3 = v3(0, 0, 0);
        for (let i = 0; i < nodeList.length; i++) {
            let position = nodeList[i].position;
            middlePos.add(position);
        }
        if (nodeList.length > 0) {
            middlePos = middlePos.multiplyScalar(1 / nodeList.length);
            let dir = v3(middlePos).subtract(this.targetNode.position);
            return dir.multiplyScalar(this.juheliForceWeight);
        }
        return v3(0, 0, 0);
    }
    processDuiLieForce(): Vec3 {
        let nodeList: Node[] = [];
        for (let i = 0; i < this.currentNodeList.length; i++) {
            let node = this.currentNodeList[i];
            if (node.getComponent(EnemyBase).getColonyComCtl()) {
                let dis = v3(node.position).subtract(this.targetNode.position).length();
                if (dis <= this.duilieDistance) {
                    nodeList.push(node);
                }
            }
        }
        let dir = v3(0, 0, 0);

        if (nodeList.length > 0) {
            for (let i = 0; i < nodeList.length; i++) {
                // dir.add(nodeList[i].forward);
                let node = nodeList[i];
                // let colonyCtlDir = node.getComponent(EnemyBase).getColonyComCtl().getCurrentMoveDir();
                let enemyBase = node.getComponent(EnemyBase);
                dir.add(enemyBase.getColonyComCtl().getCurrentMoveDir());
            }
            return dir.multiplyScalar(this.duilieliWeight * (1 / nodeList.length));
        }
        return v3(0, 0, 0);
    }
    processCheckDir(): Vec3 {
        let nodeList: Node[] = [];
        for (let i = 0; i < this.currentNodeList.length; i++) {
            let node = this.currentNodeList[i];
            if (node.getComponent(EnemyBase).getColonyComCtl()) {
                nodeList.push(node);
                if (nodeList.length === 1) {
                    if (nodeList[0].uuid === this.targetNode.uuid) {
                        this.isFirstTargetNode = true;
                        this.processMoveTween();
                        return v3(0, 0, 0);
                        // return v3(0, 0, 0);
                    }
                    break;
                }
            }
        }

        let byFirstNodeForce = this.processByFirstNodeForce(nodeList[0]);
        let liesanForce = this.processLisanForce();
        let duilieForce = this.processDuiLieForce();
        let juheForce = this.processJuHeForce();
        // console.log("lisan force", liesanForce);
        // console.log("duilie force", duilieForce);
        // console.log("juheforce", juheForce);
        return liesanForce.add(duilieForce).add(juheForce).add(byFirstNodeForce);

    }
    processByFirstNodeForce(firstNode: Node) {
        //第一个速度
        let force = v3(firstNode.position).subtract(this.targetNode.position);
        return force.multiplyScalar(this.floowerfirstNodeWeight);
    }
    processMoveTween() {
        let tw = new Tween(this.targetNode);
        this.currentMoveTw = tw;
        tw.set({
            position: this.movePathList[0]
        })
        const processTw = (targetTw: Tween, pos, endPos) => {
            let length = v3(endPos).subtract(pos).length();
            // this.targetNode.worldRotation
            // let dir = v3(startPos).subtract(targetPoint).normalize();
            // let quat = new Quat();
            // quat.lerp
            // Quat.fromViewUp(quat, dir, Vec3.UP);
            let dir = v3(pos).subtract(endPos).normalize();
            let quat = new Quat();
            Quat.fromViewUp(quat, dir, Vec3.UP);

            // let currentRotation = this.targetNode.rotation;
            // let currentQuat = new Quat(currentRotation).lerp(quat, 0.1);
            // targetTw.by(0.1, {
            //     rotation: currentQuat
            // })
            // targetTw.set({
            //     rotation: quat
            // });
            targetTw.to(length / 5, {
                position: pos,
                rotation: quat

            });

        }
        for (let i = 1; i < this.movePathList.length - 1; i++) {
            let pos = this.movePathList[i];
            let endPos = this.movePathList[i + 1];
            processTw(tw, pos, endPos)
        }
        // tw.start();

        new Tween(this.targetNode).repeatForever(tw).start();
    }
    processPathListDir() {
        //处理路径的方向

    }
    getCurrentMoveDir() {
        return this.currentMoveDir;
    }
}
