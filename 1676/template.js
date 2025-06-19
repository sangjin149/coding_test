function solution(input) {
    const n = Number(input);
    let factorial = 1;
    let result = 0;
    for (let i = 1; i <= n; i++) factorial *= i;
    while (factorial % 10 === 0) {
        result++;
        factorial /= 10;
    }
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
