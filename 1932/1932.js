function solution(input) {
    const n = Number(input[0]);
    const pyramid = input.slice(1).map((line) => line.split(" ").map(Number));
    const accPyramid = Array(pyramid.length)
        .fill(false)
        .map(() => Array());

    accPyramid[0] = [...pyramid[0]];

    for (let rowN = 1; rowN < n; rowN++) {
        const row = pyramid[rowN];
        for (let i = 0; i < row.length; i++) {
            const left = i > 0 ? accPyramid[rowN - 1][i - 1] : -1;
            const right = i < row.length - 1 ? accPyramid[rowN - 1][i] : -1;
            accPyramid[rowN][i] = pyramid[rowN][i] + Math.max(left, right);
        }
    }
    console.log(Math.max(...accPyramid[n - 1]));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
