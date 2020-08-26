export class State {
    private state: string = "";
    private handleMap: Object = {};
    constructor() {

    }
    setState(value: string) {
        this.state = value;
        if (this.handleMap[this.state]) {
            let list = this.handleMap[this.state];
            let value = [];
            for (let i = 1; i < arguments.length; i++) {
                value.push(arguments[i]);
            }
            for (let j = 0; j < list.length; j++) {
                let cb = list[j];
                cb.apply(this, value);
            }
        }
    }
    getState(): string {
        return this.state;
    }
    addState(state, cb) {
        if (this.handleMap[state]) {
            this.handleMap[state].push(cb);
        } else {
            this.handleMap[state] = [cb];
        }
    }
}
