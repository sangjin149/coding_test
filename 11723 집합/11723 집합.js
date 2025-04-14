class MySet {
    constructor() {
        this.data = new Array(20).fill(false);
    }

    add(x) {
        this.data[x - 1] = true;
    }

    remove(x) {
        this.data[x - 1] = false;
    }

    check(x) {
        return this.data[x - 1] ? 1 : 0;
    }

    toggle(x) {
        this.data[x - 1] = !this.data[x - 1];
    }

    all() {
        this.data = this.data.fill(true);
    }

    empty() {
        this.data = this.data.fill(false);
    }
}

function solution(input) {
    const orders = [...input];
    const checkResults = [];
    const set = new MySet();

    orders.forEach((order) => {
        const [orderName, ...args] = order.split(" ");
        switch (orderName) {
            case "add":
                set.add(args);
                break;
            case "remove":
                set.remove(args);
                break;
            case "check":
                checkResults.push(set.check(args));
                break;
            case "toggle":
                set.toggle(args);
                break;
            case "all":
                set.all(args);
                break;
            case "empty":
                set.empty(args);
                break;
        }
    });

    console.log(checkResults.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

input.shift();

solution(input);
