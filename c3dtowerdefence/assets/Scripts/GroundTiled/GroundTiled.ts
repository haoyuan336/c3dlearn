import { _decorator, Component, Node, v2, Vec2 } from 'cc';
import { BaseObject } from '../BaseObject';
const { ccclass, property } = _decorator;

@ccclass('GroundTiled')
export class GroundTiled extends BaseObject {
    public mapX: number = 0; //列坐标
    public mapY: number = 0; //行坐标
    public targetObjectList = []; //物体上的物体列表

    getIsVoid(): boolean {
        if (this.targetObjectList.length === 0) {
            return true;
        }
        return false;
    }
    setMapXY(x: number, y: number) {
        //设置行列
        this.mapX = x;
        this.mapY = y;
    }
    getMapXY(): Vec2 {
        return v2(this.mapX, this.mapY);
    }
    getTargetObjectList(): Node[] {
        return this.targetObjectList;
    }
    setTargetObject(object: Node) {
        //设置物体再当前的地图块上
        this.targetObjectList.push(object);
    }
}
