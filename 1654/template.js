function solution(input) {
    const [K, N] = input[0].split(" ").map(Number);
    const lineLengths = input.slice(1).map(Number);
    console.log(lineLengths);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
