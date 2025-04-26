function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const connections = input.slice(1).map((str) => str.split(" ").map(Number));
    const nodes = new Array(N + 1).fill(false).map(() => []);
    let result = 0;

    connections.forEach(([node1, node2]) => {
        nodes[node1].push(node2);
        nodes[node2].push(node1);
    });

    const checkedHistory = new Array(nodes.length + 1).fill(false);

    function BFS(startIndex) {
        const queue = [startIndex];
        while (queue.length > 0) {
            const currentIndex = queue.shift();
            for (const nodeIndex of nodes[currentIndex]) {
                if (!checkedHistory[nodeIndex]) {
                    checkedHistory[nodeIndex] = true;
                    queue.push(nodeIndex);
                }
            }
        }
    }

    for (let i = 1; i < nodes.length; i++) {
        if (!checkedHistory[i]) {
            BFS(i);
            result++;
        }
    }

    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
