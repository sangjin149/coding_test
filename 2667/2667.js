function solution(input) {
    const N = Number(input[0]);
    const graph = [];
    const visited = new Array(N).fill(true).map(() => new Array(N).fill(false));
    const groupNums = [];

    for (let i = 1; i <= N; i++) {
        graph.push(input[i].split("").map(Number));
    }

    function bfs(start) {
        const queue = [start];
        let cursor = 0;
        let groupNum = -1;

        while (queue.length > cursor) {
            const [curX, curY] = queue[cursor++];
            if (graph[curX][curY] === 0 || visited[curX][curY]) continue;
            if (groupNum === -1) groupNum = groupNums.length;
            groupNums[groupNum] = groupNums[groupNum] ? groupNums[groupNum] + 1 : 1;
            visited[curX][curY] = true;
            if (curX > 0) queue.push([curX - 1, curY]);
            if (curX < N - 1) queue.push([curX + 1, curY]);
            if (curY > 0) queue.push([curX, curY - 1]);
            if (curY < N - 1) queue.push([curX, curY + 1]);
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            bfs([i, j]);
        }
    }

    const result = [groupNums.length, ...groupNums.sort((a, b) => a - b)].join("\n");
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
