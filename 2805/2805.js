function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const treeHeights = input[1].split(" ").map(Number);

    let left = 0;
    let right = Math.max(...treeHeights);
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const total = treeHeights.reduce((acc, h) => acc + (h > mid ? h - mid : 0), 0);

        if (total >= M) {
            result = mid; // 더 높게 자를 수 있음
            left = mid + 1;
        } else {
            right = mid - 1;
        }
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
