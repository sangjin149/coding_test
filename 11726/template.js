function solution(input) {
    const n = Number(input);
    const nums = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2];
    }

    console.log(nums[n]);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
