function solution(input) {
    const N = Number(input);
    let result = -1;
    const maxBag5 = Math.floor(N / 5);

    for (let i = 0; i < 3 && 5 * i < N; i++) {
        const bag3 = (N - 5 * (maxBag5 - i)) / 3;
        if (bag3 % 1 !== 0) continue;
        result = maxBag5 - i + bag3;
        break;
    }

    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
