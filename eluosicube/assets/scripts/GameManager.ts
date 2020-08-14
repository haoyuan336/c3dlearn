import { _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, Vec3, isValid } from 'cc';
import { CubeSet, CubeGroupType } from "./CubeGroup";
import My2dArray from './My2Array';
const { ccclass, property } = _decorator;
@ccclass('GameManager')
export class GameManager extends Component {
    @property({ type: Prefab })
    public cubePrefab: Prefab = null
    @property({ type: CCInteger })
    public widthCount: number = 8;
    @property({ type: CCInteger })
    public hieghtCount: number = 12;
    @property({ type: CCInteger })
    public cubeDistance: number = 1.1;


    private currentShowCubeSet: CubeSet = null;
    private currentMoveCubeSet: CubeSet = null;
    private myMapData: My2dArray<number> = new My2dArray(this.widthCount, this.hieghtCount, 0);
    private currentMoveTime: number = 0;
    start() {
        this.drawFrame(v3(((this.widthCount + 2) * -0.5 + 3) * this.cubeDistance, 14 * this.cubeDistance, 0), 6, 6);
        this.drawFrame(v3(0, 0, 0), this.widthCount + 2, this.hieghtCount + 2);

    }
    checkIsNull(x: number, y: number) {
        console.log("x", x)
        if (y < 0 || y >= this.widthCount) {
            return true;
        }
        console.log('check null', y);
        if (x >= this.hieghtCount) {
            return false;
        }
        if (x < 0) {
            return true;
        }
        let result = this.myMapData.getValue(x, y);
        return result ? true : false;
    }
    drawFrame(centPos: Vec3, frameWidth: number, frameHeigt: number) {
        //绘制边框
        for (let i = 0; i < (frameWidth); i++) {
            for (let j = 0; j < 2; j++) {
                let node = instantiate(this.cubePrefab);
                node.parent = this.node;
                let x = (frameWidth - 1) * -0.5 * this.cubeDistance + i * this.cubeDistance;
                let y = (frameHeigt - 1) * -0.5 * this.cubeDistance + j * (frameHeigt - 1) * this.cubeDistance;
                node.setPosition(v3(x, y, 0).add(centPos));
            }
        }
        for (let i = 0; i < frameHeigt - 2; i++) {
            for (let j = 0; j < 2; j++) {
                let node = instantiate(this.cubePrefab);
                node.parent = this.node;
                let y = (frameHeigt - 3) * -0.5 * this.cubeDistance + i * this.cubeDistance;
                let x = (frameWidth - 1) * -0.5 * this.cubeDistance + j * (frameWidth - 1) * this.cubeDistance;
                node.setPosition(v3(x, y, 0).add(centPos));
            }
        }
    }
    update(dt: number) {
        if (!this.currentShowCubeSet) {
            //如果当前显示的方块不可用，那么创建一个显示的方块
            //随机一个枚举值
            console.log(CubeGroupType);
            let length: number = Object.keys(CubeGroupType).length / 2;
            // console.log("length", length);
            let randomIndex = Math.round(Math.random() * (length - 1));
            // console.log("random index", randomIndex);
            // let type = CubeGroupType[randomIndex]
            // console.log("随机到的 type", type);
            let cubeSet = new CubeSet(randomIndex, this);
            this.currentShowCubeSet = cubeSet;
            this.currentShowCubeSet.show(v3(-3.3, 15, 0));
        }

        if (this.currentShowCubeSet && !this.currentMoveCubeSet) {
            this.currentMoveCubeSet = this.currentShowCubeSet;
            this.currentShowCubeSet = undefined;
        }
        if (this.currentMoveCubeSet && this.currentMoveTime > 0.1) {
            this.currentMoveTime = 0;
            this.currentMoveCubeSet.moveDown().then((type) => {
                if (!type) {

                    let setData: My2dArray<number> = this.currentMoveCubeSet.getSetData();
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            let result = setData.getValue(j, i);
                        }
                    }
                    this.currentMoveCubeSet = undefined;
                    this.currentMoveTime = 0;
                    //下落完成 更新地图

                }
            });
        } else {
            this.currentMoveTime += dt;
        }
    }
    createOneCubeNode() {
        let node: Node = instantiate(this.cubePrefab);
        node.parent = this.node;
        return node;
    }
    getMapSize() {
        return { width: this.widthCount, height: this.hieghtCount }
    }
    getCubeDistance(): number {
        return this.cubeDistance;
    }
}
