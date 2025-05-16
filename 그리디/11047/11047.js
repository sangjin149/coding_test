function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    const coinTypes = input.slice(1).map(Number);
    let leftOver = K;
    let coinNum = 0;

    for (let i = N - 1; i >= 0; i--) {
        coinNum += Math.floor(leftOver / coinTypes[i]);
        leftOver %= coinTypes[i];
    }

    console.log(coinNum);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
