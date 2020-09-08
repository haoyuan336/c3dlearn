import { _decorator, Component, Node, Vec3, v3 } from 'cc';
const { ccclass, property } = _decorator;
// @ccclass('Besize')
export class Besize {
    public startPos: Vec3 = undefined;
    public middlePos: Vec3 = undefined;
    public endPos: Vec3 = undefined;
    constructor(p0: Vec3, p1: Vec3, p2: Vec3) {
        this.startPos = p0;
        this.middlePos = p1;
        this.endPos = p2;
    }

    // Vector3 CalculateCubicBezierPoint(float t, Vector3 p0, Vector3 p1, Vector3 p2)
    // {
    //     float u = 1 - t;
    //     float tt = t * t;
    //     float uu = u * u;

    //     Vector3 p = uu * p0;
    //     p += 2 * u * t * p1;
    //     p += tt * p2;

    //     return p;
    // }

    CalculateCubicBezierPoint(t: number, p0: Vec3, p1: Vec3, p2: Vec3) {
        let u = 1 - t;
        let tt = t * t;
        let uu = u * u;
        let p = v3(p0).multiplyScalar(uu);
        // p += 2 * u * t * p1;
        p = v3(p).add(v3(p1).multiplyScalar(2 * u * t));
        // p += tt * p2;
        p = v3(p).add(p2.multiplyScalar(tt));

        return p;
    }
    getBesizePointList(segmentNum: number): Vec3[] {
        let pointList: Vec3[] = [];
        for (let i = 0; i < segmentNum; i++) {
            let t = i / segmentNum;
            let point = this.CalculateCubicBezierPoint(t, this.startPos, this.middlePos, this.endPos);
            pointList.push(point);
        }
        return pointList;
    }
   
}
