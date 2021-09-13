export class Stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    print() {
        console.log(this.stack);
    }
}