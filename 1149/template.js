function solution(input) {
    const N = Number(input[0]);
    const costArr = input.slice(1).map((str) => str.split(" ").map(Number));
    const minArr = Array.from({ length: costArr.length }, () => Array(3).fill(0));
    minArr[0] = [...costArr[0]];

    for (let i = 1; i < N; i++) {
        const prevMins = [...minArr[i - 1]];
        const costs = [...costArr[i]];
        for (let j = 0; j < 3; j++) {
            let minCost = 9999;
            switch (j) {
                case 0:
                    minCost = Math.min(prevMins[1], prevMins[2]);
                    break;
                case 1:
                    minCost = Math.min(prevMins[0], prevMins[2]);
                    break;
                case 2:
                    minCost = Math.min(prevMins[0], prevMins[1]);
                    break;
            }
            minArr[i][j] = costs[j] + minCost;
        }
    }

    console.log(Math.min(...minArr[N - 1]));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
