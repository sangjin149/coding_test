function solution(input) {
    const N = Number(input[0]);
    const pList = input[1]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    let result = 0;
    pList.forEach((num, idx) => (result += num * (N - idx)));

    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
