class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularLinkdedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        const oldTail = this.tail;

        oldTail.next = newNode;
        newNode.prev = oldTail;
        newNode.next = this.head;
        this.head.prev = newNode;
        this.tail = newNode;
        this.size++;
    }

    delete(node) {
        if (this.size === 0) return;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }

    deleteOrder(K) {
        const result = [];
        let currentNode = this.head;
        while (this.size > 0) {
            for (let i = 1; i < K; i++) {
                currentNode = currentNode.next;
            }
            result.push(currentNode.data);
            this.delete(currentNode);
            currentNode = currentNode.next;
        }
        console.log(`<${result.join(", ")}>`);
    }
}

function solution(input) {
    const [N, K] = input.split(" ").map(Number);
    const list = new Array(N).fill(0).map((_, idx) => idx + 1);
    const cirLink = new CircularLinkdedList();

    list.forEach((value) => cirLink.append(value));
    cirLink.deleteOrder(K);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
