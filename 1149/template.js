function solution(input) {
    const N = Number(input[0]);
    const costArr = input.slice(1).map((str) => str.split(" ").map(Number));
    const minArr = Array.from({ length: costArr.length }, () => Array(3).fill(0));
    minArr[0] = costArr[0];

    for (let i = 1; i < N; i++) {
        const prevMins = minArr[i - 1];
        const costs = costArr[i];
        for (let j = 0; j < 3; j++) {
            const other1 = (j + 1) % 3;
            const other2 = (j + 2) % 3;
            minArr[i][j] = costArr[i][j] + Math.min(minArr[i - 1][other1], minArr[i - 1][other2]);
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
