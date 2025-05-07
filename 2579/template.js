function solution(input) {
    const n = input.shift();
    const stairs = [0, ...input];
    const bests = new Array(stairs.length);
    let result = 0;

    if (n === 1) result = stairs[1];
    else if (n === 2) result = stairs[1] + stairs[2];
    else if (n === 3) result = Math.max(stairs[1], stairs[2]) + stairs[3];
    else {
        bests[1] = stairs[1];
        bests[2] = stairs[1] + stairs[2];
        bests[3] = Math.max(stairs[1], stairs[2]) + stairs[3];
        for (let i = 4; i <= n; i++) {
            bests[i] = Math.max(bests[i - 3] + stairs[i - 1], bests[i - 2]) + stairs[i];
        }
        result = bests[n];
    }
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => Number(str.trim()));

solution(input);
