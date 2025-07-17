function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const graph = Array(N);
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    let startPoint = null;

    for (let i = 0; i < N; i++) {
        const row = input[i + 1].split("");
        for (let j = 0; !startPoint && j < M; j++)
            if (row[j] === "I") {
                startPoint = [i, j];
                visited[i][j] = true;
            }
        graph[i] = row;
    }

    const dps = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const queue = [...startPoint];

    let cursor = 0;
    let result = 0;

    while (queue.length > cursor) {
        const currX = queue[cursor++];
        const currY = queue[cursor++];

        for (const [dx, dy] of dps) {
            const nextX = currX + dx;
            const nextY = currY + dy;

            if (nextX < 0 || nextX >= N) continue;
            if (nextY < 0 || nextY >= M) continue;
            if (visited[nextX][nextY]) continue;

            visited[nextX][nextY] = true;
            const nextEntity = graph[nextX][nextY];

            if (nextEntity === "P" || nextEntity === "O") {
                if (nextEntity === "P") result++;
                queue.push(nextX, nextY);
            }
        }
    }

    console.log(result === 0 ? "TT" : result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
