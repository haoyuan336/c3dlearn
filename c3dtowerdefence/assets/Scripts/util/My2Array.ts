class My2dArray<T>{
    private numberList: Array<T>[] = [];
    private heightNum: number = 0;
    constructor(heightNum: number) {
        this.heightNum = heightNum;
        // for (let i = 0; i < height; i++) {
        //     let list: T[] = [];
        //     // for (let j = 0; j < width; j++) {
        //     //     list.push(value);
        //     // }
        //     this.numberList.push(list);
        // }
    }


    pushValue(){
        
    }
    pushList(){

    }
    getValue(x: number, y: number): T {
        return this.numberList[y][x];
    }
    setValue(x: number, y: number, value: T) {
        this.numberList[x][y] = value;
    }
}
export default My2dArray;