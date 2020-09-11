export class Tool {
    constructor() {

    }
    static convertNumToK(num: number): string {
        //将数字转换成 k结尾的显示方式
        let key = ["", "K", "M", "B"];
        let endStr = num + '';

        let endNum = num;
        let index = 0;
        while (endNum > 0) {
            endNum = Math.floor(endNum / 1000);
            index++;
        }
        endStr = num / (Math.pow(1000, index - 1)) + '';
        console.log('end Str', endStr);
        if (endStr.length > 4) {
            endStr = endStr.substring(0, 4);
        }
        endStr += key[index - 1];
        console.log('end Str', endStr);
        
        return endStr;
    }
}