function solution(input) {
    const [M, N] = input[0];
    const graph = input.slice(1);

    const startList = [];
    let tomatoNum = M * N;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            switch (graph[i][j]) {
                case -1:
                    tomatoNum--;
                    break;
                case 1:
                    startList.push([i, j]);
            }
        }
    }

    const queue = [...startList];
    let ripeCount = startList.length;
    let maxDay = 0;
    let head = 0;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (queue.length > head) {
        const curLocation = queue[head++];
        const curDayCount = graph[curLocation[0]][curLocation[1]];

        for (let d = 0; d < 4; d++) {
            const ni = curLocation[0] + dx[d];
            const nj = curLocation[1] + dy[d];
            if (ni >= 0 && ni < N && nj >= 0 && nj < M && graph[ni][nj] === 0) {
                ripeCount++;
                graph[ni][nj] = curDayCount + 1;
                queue.push([ni, nj]);
                maxDay = Math.max(maxDay, curDayCount);
            }
        }
    }

    const result = tomatoNum === ripeCount ? maxDay : -1;
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim().split(" ").map(Number));

solution(input);
