function solution(input) {
    const fibos = [
        [1, 0],
        [0, 1],
    ];

    for (let i = 2; i <= 40; i++) {
        const fibo0 = fibos[i - 1][0] + fibos[i - 2][0];
        const fibo1 = fibos[i - 1][1] + fibos[i - 2][1];
        fibos[i] = [fibo0, fibo1];
    }

    const resultList = [];
    input
        .slice(1)
        .map(Number)
        .forEach((num) => resultList.push(fibos[Number(num)].join(" ")));

    console.log(resultList.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
