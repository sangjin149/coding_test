function solution(input) {
    const meetings = input
        .slice(1)
        .map((str) => str.split(" ").map(Number))
        .sort((timeA, timeB) => {
            if (timeA[1] !== timeB[1]) return timeA[1] - timeB[1];
            return timeA[0] - timeB[0];
        });

    let count = 0;
    let currentEnd = 0;

    for (const [start, end] of meetings) {
        if (currentEnd <= start) {
            count++;
            currentEnd = end;
        }
    }

    console.log(count);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
