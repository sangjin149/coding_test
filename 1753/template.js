function solution(input) {
    const [V, E] = input[0].split(" ").map(Number);

    const graph = Array.from({ length: V + 1 }, () => Array(V + 1).fill(-1));
    input.slice(2).forEach((str) => {
        const [u, v, w] = str.split(" ").map(Number);
        if (graph[u][v] === -1 || graph[u][v] > w) graph[u][v] = w;
    });

    const start = Number(input[1]);
    const result = Array(V + 1).fill("INF");
    result[start] = 0;
    const visited = Array(V + 1).fill(false);
    visited[start] = true;

    const queue = [start, 0];
    let cursor = 0;
    while (queue.length > cursor) {
        const currLocation = queue[cursor++];
        const currDistanceSum = queue[cursor++];

        for (let i = 1; i <= V; i++) {
            if (visited[i] || graph[currLocation][i] === -1) continue;
            visited[i] = true;
            result[i] = currDistanceSum + graph[currLocation][i];
            queue.push(i, currDistanceSum + graph[currLocation][i]);
        }
    }

    console.log(result.slice(1).join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
