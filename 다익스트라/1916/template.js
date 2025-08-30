class MinHeap {
    constructor(compare) {
        this.compare = compare;
        this.array = [];
    }

    length() {
        return this.array.length;
    }

    push(newEl) {
        const array = this.array;
        let currentIdx = this.length();
        array.push(newEl);

        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.compare(array[parentIdx], array[currentIdx]) <= 0) break;
            [array[parentIdx], array[currentIdx]] = [array[currentIdx], array[parentIdx]];
            currentIdx = parentIdx;
        }
    }

    pop() {
        if (this.length() === 0) return null;
        const array = this.array;

        const top = array[0];
        const tail = array.pop();

        if (this.length()) {
            array[0] = tail;
            let currentIdx = 0;

            while (true) {
                let left = currentIdx * 2 + 1;
                let right = left + 1;
                let swapWith = currentIdx;
                if (left < this.length() && this.compare(array[left], array[swapWith]) < 0) swapWith = left;
                if (right < this.length() && this.compare(array[right], array[swapWith]) < 0) swapWith = right;
                if (swapWith === currentIdx) break;
                [array[swapWith], array[currentIdx]] = [array[currentIdx], array[swapWith]];
                currentIdx = swapWith;
            }
        }
        return top;
    }
}

function solution(input) {
    const [N, M] = input.slice(0, 2).map(Number);
    const busList = input.slice(2, 2 + M).map((busInfo) => busInfo.split(" ").map(Number));
    const [start, end] = input.pop().split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);

    for (const [busStart, busEnd, weight] of busList) {
        graph[busStart].push([busEnd, weight]);
    }

    const distances = Array(N + 1).fill(Infinity);
    distances[start] = 0;

    const queue = new MinHeap((a, b) => a[1] - b[1]);
    queue.push([start, 0]);

    while (queue.length()) {
        const [node, currentDistance] = queue.pop();

        if (currentDistance > distances[node]) continue;
        for (const [dest, weight] of graph[node]) {
            const totalDist = currentDistance + weight;
            if (totalDist < distances[dest]) {
                distances[dest] = totalDist;
                queue.push([dest, totalDist]);
            }
        }
    }

    console.log(distances[end]);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
