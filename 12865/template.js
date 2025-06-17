function solution(input) {
    const [header, ...items] = input.map((line) => line.split(" ").map(Number));
    const [N, K] = header;
    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        const [weight, value] = items[i - 1];
        for (let j = 0; j <= K; j++) {
            if (j < weight) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
            }
        }
    }

    console.log(dp[N][K]);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
