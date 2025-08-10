function solution(input) {
    const tails = [];

    for (let x of arr) {
        let l = 0,
            r = tails.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (tails[m] < x) l = m + 1;
            else r = m;
        }
        tails[l] = x;
    }

    console.log(tails.length);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
