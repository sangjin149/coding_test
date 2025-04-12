class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.size++;
    }

    shift() {
        if (!this.head) return;

        this.head = this.head.next;
        this.size--;
    }

    trial() {
        if (this.size === 1) return this.head.value;
        if (this.size === 2) return this.head.next.value;
        this.shift();
        this.append(this.head.value);
        this.shift();
        return 0;
    }

    print() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr.join(" "));
    }
}

function solution(input) {
    const listSize = Number(input);

    let i = 1;
    const list = new LinkedList();

    while (i <= listSize) {
        list.append(i++);
    }

    let result = 0;
    while (result === 0) {
        result = list.trial();
    }
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
