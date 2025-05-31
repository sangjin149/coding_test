function solution(input) {
    const N = Number(input[0]);
    const graph = new Array(N + 1).fill(false).map(() => []);

    for (let i = 1; i < N; i++) {
        const [node1, node2] = input[i].split(" ").map(Number);
        graph[node1].push(node2);
        graph[node2].push(node1);
    }

    const queue = [1];
    let cursor = 0;
    const visited = new Array(N + 1).fill(false);
    const result = new Array(N + 1).fill(-1);

    while (queue.length > cursor) {
        const current = queue[cursor++];
        for (const child of graph[current]) {
            if (visited[child]) continue;
            visited[child] = true;
            result[child] = current;
            queue.push(child);
        }
    }
    console.log(result.slice(2).join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
