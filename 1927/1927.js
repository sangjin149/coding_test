class Heap {
    constructor() {
        this.data = [null];
    }

    swap(indexA, indexB) {
        const temp = this.data[indexA];
        this.data[indexA] = this.data[indexB];
        this.data[indexB] = temp;
    }

    insert(input) {
        this.data.push(input);
        let childIdx = this.data.length - 1;
        while (childIdx > 1) {
            const fatherIdx = Math.floor(childIdx / 2);
            if (this.data[childIdx] < this.data[fatherIdx]) {
                this.swap(childIdx, fatherIdx);
                childIdx = fatherIdx;
            } else break;
        }
    }

    delete() {
        if (this.data.length === 1) return 0;
        const result = this.data[1];
        const newHead = this.data.pop();
        if (this.data.length > 1) this.data[1] = newHead;
        let currentIdx = 1;
        while (currentIdx * 2 < this.data.length) {
            const leftIdx = currentIdx * 2;
            const rightIdx = leftIdx + 1;

            const currentValue = this.data[currentIdx];
            const leftValue = this.data[leftIdx];
            const rightValue = this.data[rightIdx];

            if (leftValue === undefined) break;

            if (rightValue === undefined && leftValue < currentValue) {
                this.swap(leftIdx, currentIdx);
                break;
            }

            const smallerIdx = leftValue < rightValue ? leftIdx : rightIdx;
            const smallerValue = this.data[smallerIdx];
            if (smallerValue < currentValue) {
                this.swap(currentIdx, smallerIdx);
                currentIdx = smallerIdx;
            } else break;
        }
        return result;
    }

    print() {
        console.log(this.data);
    }
}

function solution(orders) {
    orders.shift();
    const heap = new Heap();
    const result = [];
    while (orders.length > 0) {
        const order = orders.shift();
        if (order > 0) heap.insert(order);
        else if (order === 0) result.push(heap.delete());
    }
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => Number(str.trim()));

solution(input);
