function solution(input) {
    const T = Number(input[0]);
    const subjects = input.slice(1).map(Number);

    const dp = new Array(11).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 4; i < dp.length; i++) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];

    const results = [];
    for (const sub of subjects) results.push(dp[sub]);

    console.log(results.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
