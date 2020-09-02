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
        return this.numberList[y][x];
    }
    setValue(x: number, y: number, value: T) {
        this.numberList[x][y] = value;
    }
}
export default My2dArray;