function solution(input) {
    const A = BigInt(input[0]);
    const B = BigInt(input[1]);
    const result = [A / B, A % B];
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ");

solution(input);
