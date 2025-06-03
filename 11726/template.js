function solution(input) {
    const n = Number(input);
    const nums = Array(1001);
    nums[0] = 0;
    nums[1] = 1;
    nums[2] = 2;

    for (let i = 3; i <= n; i++) {
        nums[i] = (nums[i - 1] + nums[i - 2]) % 10007;
    }

    console.log(nums[n]);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
