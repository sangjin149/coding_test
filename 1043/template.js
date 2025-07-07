function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const trueNums = input[1].split(" ").slice(1).map(Number);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
