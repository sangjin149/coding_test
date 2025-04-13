class Stack {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    push(value) {
        this.value[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length === 0) return -1;
        this.length--;
        return this.value[this.length];
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length > 0 ? 0 : 1;
    }

    top() {
        return this.value[this.length - 1] ?? -1;
    }
}

function solution(input) {
    input.shift();
    const orders = [...input];
    const stack = new Stack();
    let results = [];

    while (orders.length > 0) {
        const [order, arg] = orders.shift().split(" ");
        let result = "error";

        switch (order) {
            case "push":
                result = stack.push(Number(arg));
                break;
            case "pop":
                result = stack.pop();
                break;
            case "size":
                result = stack.size();
                break;
            case "empty":
                result = stack.empty();
                break;
            case "top":
                result = stack.top();
        }

        if (result !== undefined) results.push(result);
    }

    console.log(results.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
