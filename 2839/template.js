function solution(input) {
    const N = Number(input);

    let result = -1;
    let bag5 = 0;
    let bag3 = 0;
    let leftOver = 0;
    let i = 0;

    while (leftOver < N && i < 3) {
        bag5 = Math.floor(N / 5) - i;
        leftOver = N - 5 * bag5;
        if (leftOver % 3 !== 0) {
            i++;
            continue;
        }
        result = bag5 + leftOver / 3;
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
