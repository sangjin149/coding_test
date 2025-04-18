function BFS(graph, start) {
    const queue = [start];
    const visited = [start];

    while (queue.length > 0) {
        const current = queue.pop();
        const nextNodes = graph[current];
        for (const next of nextNodes) {
            if (!visited.includes(next)) {
                visited.push(next);
                queue.unshift(next);
            }
        }
    }
    console.log(visited.length - 1);
}

function solution(input) {
    const graph = new Array(parseInt(input[0]) + 1).fill().map(() => []);
    const linkList = input.slice(2).map((str) => str.split(" ").map(Number));
    linkList.forEach(([start, end]) => {
        graph[start].push(end);
        graph[end].push(start);
    });

    BFS(graph, 1);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
