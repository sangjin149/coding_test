function solution(input) {
    const N = Number(input[0]);
    const numArr = input[1].split(" ").map(Number);
    console.log(numArr);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
