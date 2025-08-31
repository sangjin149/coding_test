class MinHeap {
    constructor(cmp) {
        this.array = [];
        this.cmp = cmp;
    }

    get length() {
        return this.array.length;
    }

    push(value) {
        const arr = this.array;
        arr.push(value);
        let currentIdx = arr.length - 1;
        while (currentIdx > 0) {
            let parentIdx = (currentIdx - 1) >> 1;
            if (this.cmp(arr[parentIdx], arr[currentIdx]) <= 0) break;
            [arr[parentIdx], arr[currentIdx]] = [arr[currentIdx], arr[parentIdx]];
            currentIdx = parentIdx;
        }
    }

    pop() {
        const arr = this.array;
        if (!arr.length) return null;
        const head = arr[0];
        const tail = arr.pop();

        if (arr.length) {
            arr[0] = tail;
            let currentIdx = 0;
            while (true) {
                let left = 2 * currentIdx + 1;
                let right = left + 1;
                let best = currentIdx;
                if (left < arr.length && this.cmp(arr[best], arr[left]) > 0) best = left;
                if (right < arr.length && this.cmp(arr[best], arr[right]) > 0) best = right;
                if (currentIdx === best) break;
                [arr[best], arr[currentIdx]] = [arr[currentIdx], arr[best]];
                currentIdx = best;
            }
        }
        return head;
    }
}

function solution(input) {
    const [V, E] = input[0].split(" ").map(Number);
    const start = Number(input[1]);
    const graph = Array.from({ length: V + 1 }, () => []);
    const lines = input.slice(2).map((line) => line.split(" ").map(Number));

    for (const [lineStart, lineEnd, lineWeight] of lines) {
        graph[lineStart].push([lineEnd, lineWeight]);
    }

    const queue = new MinHeap((a, b) => a[1] - b[1]);
    queue.push([start, 0]);
    const distances = Array(V + 1).fill(Infinity);
    distances[start] = 0;

    while (queue.length) {
        const [node, distance] = queue.pop();
        if (distances[node] < distance) continue;

        for (const [dest, weight] of graph[node]) {
            const distToDest = distance + weight;
            if (distToDest < distances[dest]) {
                distances[dest] = distToDest;
                queue.push([dest, distToDest]);
            }
        }
    }

    console.log(
        distances
            .slice(1)
            .map((item) => (item === Infinity ? "INF" : item))
            .join("\n")
    );
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
