function BFS(nodes, startIdx, targetNum) {
    const queue = [startIdx];
    const visited = [];
    while (queue.length > 0) {
        const currentIdx = queue.shift();
        visited.push(currentIdx);
        if (targetNum === currentIdx) return true;
        new Array.from(nodes[currentIdx]).forEach((idx) => {
            if (!visited.includes(idx)) queue.push(idx);
        });
    }
    return false;
}

function solution(input) {
    const connections = input.slice(1).map((str) => str.split(" ").map(Number));

    const nodes = [];

    while (connections.length > 0) {
        const [node1, node2] = connections.shift();

        if (nodes[node1]) nodes[node1].add(node2);
        else nodes[node1] = new Set().add(node2);

        if (nodes[node2]) nodes[node2].add(node1);
        else nodes[node2] = new Set().add(node1);
    }

    const checkedIdx = new Array(nodes.length).fill(false);
    checkedIdx[0] = true;
    let result = 0;

    nodes.forEach((_, idx) => {
        console.log(`${idx}: ${checkedIdx.join(" ")}`);
        if (idx === 0 || checkedIdx[idx]) return;
        const idxQueue = [idx];
        while (idxQueue.length > 0) {
            console.log(idxQueue);
            const currentIdx = idxQueue.shift();
            if (!checkedIdx[currentIdx]) {
                checkedIdx[currentIdx] = true;
                Array.from(nodes[currentIdx]).forEach((idx) => {
                    idxQueue.push(idx);
                    checkedIdx[idx] = true;
                });
            }
        }
        result++;
    });

    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
