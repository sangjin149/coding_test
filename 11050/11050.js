function factorial(num) {
    let n = num;
    let result = 1;
    while (n > 1) result *= n--;
    return result;
}

function solution(N, K) {
    const result = factorial(N) / factorial(N - K) / factorial(K);
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

solution(...input);
