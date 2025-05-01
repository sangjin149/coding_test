function solution(input) {
    const [M, N] = input[0];
    const graph = input.slice(1);
    const visited = [...graph].map((row) => [...row].fill(false));

    const startList = [];
    let tomatoNum = M * N;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            switch (graph[i][j]) {
                case -1:
                    tomatoNum--;
                    visited[i][j] = true;
                    break;
                case 1:
                    startList.push([i, j]);
                    visited[i][j] = true;
            }
        }
    }

    function adjacent(location) {
        const [i, j] = location;
        const result = [];
        if (i > 0) result.push([i - 1, j]);
        if (j > 0) result.push([i, j - 1]);
        if (i < N - 1) result.push([i + 1, j]);
        if (j < M - 1) result.push([i, j + 1]);
        return result;
    }

    const queue = [...startList];
    let ripeCount = startList.length;
    let maxDay = 0;
    let head = 0;

    while (queue.length > head) {
        const curLocation = queue[head++];
        const curDayCount = graph[curLocation[0]][curLocation[1]];
        for (const neighbor of adjacent(curLocation)) {
            if (graph[neighbor[0]][neighbor[1]] === 0) {
                ripeCount++;
                graph[neighbor[0]][neighbor[1]] = curDayCount + 1;
                queue.push(neighbor);
                maxDay = Math.max(maxDay, curDayCount + 1);
            }
        }
    }

    const result = tomatoNum === ripeCount ? Math.max(0, maxDay - 1) : -1;
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim().split(" ").map(Number));

solution(input);
