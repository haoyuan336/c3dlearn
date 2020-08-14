import { Node, math, v3, Vec3 } from 'cc'
import My2Array from './My2Array'
import { GameManager } from './GameManager';
enum CubeGroupType {
    长条,
    田,
    凸,
    闪电左,
    闪电右
}
class CubeSet {
    private nodeList: Node[] = [];
    private numberList: My2Array<number> = new My2Array(4, 4, 0);
    private currentXStep: number = 0;
    private currentYStep: number = 0;
    private gameManager: GameManager = null;

    constructor(type: CubeGroupType, gameManager: GameManager) {
        let mapSize = gameManager.getMapSize();
        this.gameManager = gameManager;
        this.currentXStep = Math.round(mapSize.width / 2);
        this.currentYStep = mapSize.height;
        for (let i = 0; i < 4; i++) {
            let node: Node = gameManager.createOneCubeNode();
            this.nodeList.push(node);
        }
        console.log("type", type);
        // let key: number = CubeGroupType[type];
        switch (type) {
            case CubeGroupType.长条:
                this.numberList.setValue(1, 0, 1);
                this.numberList.setValue(1, 1, 1);
                this.numberList.setValue(1, 2, 1);
                this.numberList.setValue(1, 3, 1);
                break;
            case CubeGroupType.田:
                this.numberList.setValue(1, 1, 1);
                this.numberList.setValue(1, 2, 1);
                this.numberList.setValue(2, 1, 1);
                this.numberList.setValue(2, 2, 1);
                break;
            case CubeGroupType.凸:

                this.numberList.setValue(2, 1, 1);
                this.numberList.setValue(2, 2, 1);
                this.numberList.setValue(2, 3, 1);
                this.numberList.setValue(1, 2, 1);
                break;
            case CubeGroupType.闪电右:

                this.numberList.setValue(0, 2, 1);
                this.numberList.setValue(1, 1, 1);
                this.numberList.setValue(1, 2, 1);
                this.numberList.setValue(2, 1, 1);
                break;
            case CubeGroupType.闪电左:
                this.numberList.setValue(0, 1, 1);
                this.numberList.setValue(1, 1, 1);
                this.numberList.setValue(1, 2, 1);
                this.numberList.setValue(2, 2, 1);

                break;
        }
        // console.log("number list", this.numberList);
    }
    isCanMove(x: number, y: number): boolean {
        let isCan = true;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let result = this.numberList.getValue(j, i);
                console.log("result", result);
                if (result === 1) {
                    let hang: number = y - i;
                    let lie: number = x + j;
                    let checkResult = this.gameManager.checkIsNull(hang, lie);
                    console.log("check result", checkResult);
                    if (checkResult) {
                        isCan = false;
                        break;
                    }
                }

            }
            if (!isCan) {
                break;
            }
        }
        return isCan;
    }
    toMove(x: number, y: number) {

    }
    show(v3: Vec3) {
        let cubeDis = this.gameManager.getCubeDistance();
        let index: number = 0;
        console.log("numlist", this.numberList);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let result = this.numberList.getValue(j, i);
                if (result === 1) {
                    let node = this.nodeList[index];
                    node.setPosition(new Vec3(j * cubeDis + (4 - 1) * - 0.5 * cubeDis, -i * cubeDis + (4 - 1) * 0.5 * cubeDis, 0).add(v3));
                    index++;
                }
            }
        }
    }
    moveDown() {
        return new Promise((resolve, reject) => {
            let nextYStep = this.currentYStep - 1;
            let isCanMove = this.isCanMove(this.currentXStep, nextYStep);
            let mapSize = this.gameManager.getMapSize();

            console.log("is can move", isCanMove);
            if (isCanMove) {
                let index = 0;
                this.currentYStep = nextYStep;
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        let result = this.numberList.getValue(i, j);
                        if (result === 1) {
                            let node = this.nodeList[index];
                            let x = this.currentXStep + i;
                            let y = this.currentYStep - j;
                            console.log("x", x);
                            console.log("y", y);
                            node.setPosition(v3(
                                x * this.gameManager.getCubeDistance() - mapSize.width * 0.5 - 2,
                                y * this.gameManager.getCubeDistance() - mapSize.height * 0.5,
                                0
                            ))
                            index++;
                        }
                    }
                }
            }
            if (resolve) {
                resolve(isCanMove);
            }
        })
    }
    getSetData():My2Array<number>{
        return this.numberList;
    }
    getCurrentPos(){
        return {
            lie: this.currentXStep,
            hang: this.currentYStep
        }
    }
}

export { CubeSet, CubeGroupType }