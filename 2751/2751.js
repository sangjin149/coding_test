function solution(arr) {
    const numbers = arr.slice(1).map(Number);
    numbers.sort((a, b) => a - b);
    console.log(numbers.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

solution(input);
