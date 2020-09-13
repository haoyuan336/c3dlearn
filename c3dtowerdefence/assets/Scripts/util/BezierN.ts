import { _decorator, Component, Node, Vec3, v3 } from 'cc';
const { ccclass, property } = _decorator;
export class BezierN {
    public controllerPointList: Vec3[] = [];
    constructor(ctlPL: Vec3[]) {
        this.controllerPointList = ctlPL;
    }
    public getPointList(segmentNum: number): Vec3[] {
        //细分值
        let n = this.controllerPointList.length; //取处曲线的阶数
        let aList = [1, 1];
        for (let i = 3; i < n + 1; i++) {
            let tList = [];
            for (let j = 0; j < aList.length; j++) {
                tList.push(aList[j])
            }
            // console.log("t list", tList);
            aList[0] = 1;
            aList[i - 1] = 1;
            for (let t = 0; t < tList.length - 1; t++) {
                aList[t + 1] = tList[t] + tList[t + 1]
            }
        }

        // a * (1 - t)^b * t^c * Pn;
        let pointList: Vec3[] = [];
        for (let j = 0; j < segmentNum; j++) {
            let t = j / segmentNum;
            let endPos: Vec3 = v3(0, 0, 0);
            for (let i = 0; i < n; i++) {
                let a = aList[i];
                let b = n - 1 - i;
                let c = i;
                let value = a * Math.pow((1 - t), b) * Math.pow(t, c);
                endPos.add(v3(this.controllerPointList[i]).multiplyScalar(value));
            }
            pointList.push(endPos);
        }
        return pointList;
        // for (let i = 0 ; i < n ; i ++){
        //     endPos.add( aList[a] * (1 - t) )
        // }

    }
    static getPathLength(pathList: Vec3[]) {
        let length = 0;
        for (let i = 0; i < pathList.length; i++) {
            if (i !== 0) {
                let dis = v3(pathList[i]).subtract(pathList[i - 1]).length();
                length += dis;
            }
        }
        return length;
    }
}
