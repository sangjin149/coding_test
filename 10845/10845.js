class Queue {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }

    push(value) {
        this.data[this.tail] = value;
        this.tail++;
    }

    pop() {
        if (this.head === this.tail) return -1;
        return this.data[this.head++];
    }

    size() {
        return this.tail - this.head;
    }

    empty() {
        return this.size() > 0 ? 0 : 1;
    }

    front() {
        if (this.size() === 0) return -1;
        return this.data[this.head];
    }

    back() {
        if (this.size() === 0) return -1;
        return this.data[this.tail - 1];
    }
}

function solution(input) {
    input.shift();
    const orders = [...input];
    const stack = new Queue();
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
            case "front":
                result = stack.front();
                break;
            case "back":
                result = stack.back();
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
