class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(node, dist) {
        this.heap.push([node, dist]);
        this._bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][1] <= this.heap[i][1]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    _bubbleDown() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
            if (right < n && this.heap[right][1] < this.heap[smallest][1]) smallest = right;
            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

function solution(input) {
    const [V, E] = input[0].split(" ").map(Number);
    const K = Number(input[1]);

    const graph = Array.from({ length: V + 1 }, () => []);
    for (let i = 2; i < input.length; i++) {
        const [u, v, w] = input[i].split(" ").map(Number);
        graph[u].push([v, w]);
    }

    const distances = Array(V + 1).fill(Infinity);
    distances[K] = 0;
    const queue = new PriorityQueue();
    queue.push(K, 0);

    while (!queue.isEmpty()) {
        const [currentNode, currentDistance] = queue.pop();
        if (currentDistance < distances[currentNode]) continue;

        for (const [nextNode, weight] of graph[currentNode]) {
            const distance = currentDistance + weight;
            if (distance < distances[nextNode]) {
                distances[nextNode] = distance;
                queue.push(nextNode, distance);
            }
        }
    }

    const result = distances.slice(1).map((n) => (n === Infinity ? "INF" : n));
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
