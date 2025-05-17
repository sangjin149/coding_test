function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);

    for (let i = 1; i <= M; i++) {
        const [a, b] = input[i].split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }

    function bfs(start) {
        const dist = Array(N + 1).fill(Infinity);
        const queue = [start];
        dist[start] = 0;

        while (queue.length) {
            const cur = queue.shift();
            for (const next of graph[cur]) {
                if (dist[next] === Infinity) {
                    dist[next] = dist[cur] + 1;
                    queue.push(next);
                }
            }
        }

        // 시작 노드를 제외하고 거리 합 계산
        return dist.slice(1).reduce((sum, d) => sum + d, 0);
    }

    let result = 0;
    let minSum = Infinity;

    for (let i = 1; i <= N; i++) {
        const sum = bfs(i);
        if (sum < minSum) {
            minSum = sum;
            result = i;
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
