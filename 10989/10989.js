function solution(input) {
    const [a, b] = input[0].split(" ").map(Number);
    console.log(Math.abs(a - b));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());
solution(input);
