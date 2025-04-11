class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }

        let current = this.head;
        while (current.next) current = current.next;
        current.next = newNode;
        this.size++;
    }

    trial() {
        if (this.size === 1) return this.head.value;
        this.append(this.head.next.value);
        this.head = this.head.next.next;
        this.size--;
        return 0;
    }

    print() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.value);
        }
        console.log(arr.join(" "));
    }
}

function solution(input) {
    const list = new LinkedList();
    let i = 1;

    while (i < input) {
        list.append(i++);
    }

    list.print();

    // let result = 0;

    // while (result === 0) {
    //     result = list.trial();
    // }

    // console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(Number(input));
