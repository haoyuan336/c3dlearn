class My2dArray<T>{
    private numberList: Array<T>[] = [];
    private heightNum: number = 0;
    constructor() {
        // for (let i = 0; i < height; i++) {
        //     let list: T[] = [];
        //     // for (let j = 0; j < width; j++) {
        //     //     list.push(value);
        //     // }
        //     this.numberList.push(list);
        // }
    }


    pushValue(value: T) {
        this.numberList[this.numberList.length - 1].push(value);
    }
    pushList(value: T[]) {
        this.numberList.push(value);
    }
    getValue(x: number, y: number): T {
        if (y < 0 || x < 0) {
            return;
        }
        if (y >= this.numberList.length) {
            return null;
        }
        if (x >= this.numberList[y].length) {
            return null;
        }
        return this.numberList[y][x];
    }
    setValue(x: number, y: number, value: T) {
        this.numberList[x][y] = value;
    }
    getHeightLength() {
        //获取二位数组的高
        return this.numberList.length;

    }
    getWidthLength() {
        if (this.numberList.length > 0) {
            return this.numberList[0].length;
        }
        return 0;
    }
    getValueWithLieIndex(index: number): Array<T> {
        return this.numberList[index]
    }
    convertOneSpaceList() {
        //转换成一维数组
        let list = [];
        for (let i = 0; i < this.getHeightLength(); i++) {
            for (let j = 0; j < this.getWidthLength(); j++) {
                list.push(this.numberList[i][j])
            }
        }
        return list;
    }
}
export default My2dArray;