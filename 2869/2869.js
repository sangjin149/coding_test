function solution(input) {
    const [ascend, decend, target] = input.split(" ").map(Number);
    let current = 0;
    let day = 1;
    while (current < target) {
        current += ascend;
        if (current > target) break;
        day++;
        current -= decend;
    }
    console.log(day);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
