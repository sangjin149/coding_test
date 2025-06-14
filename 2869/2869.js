function solution(input) {
    const [ascend, decend, target] = input.split(" ").map(Number);

    if (ascend === target) {
        console.log(1);
        return;
    }

    if ((target - ascend) % (ascend - decend) === 0) {
        console.log(1 + (target - ascend) / (ascend - decend));
        return;
    }

    console.log(Math.ceil(target / (ascend - decend)));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
