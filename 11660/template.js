function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);

    let acc = 0;
    const sumArr = [];

    input.slice(1, 1 + N).forEach((row) => {
        row.split(" ").forEach((item) => {
            acc += Number(item);
            sumArr.push(acc);
        });
    });

    const result = [];

    input.slice(N + 1).forEach((command) => {
        const [x1, y1, x2, y2] = command.split(" ").map(Number);

        let sum = 0;
        const start = N * (x1 - 1) + y1 - 1;
        const width = y2 - y1 + 1;

        for (let i = 0; i < x2 - x1 + 1; i++) {
            const headIdx = start + N * i;
            const headSum = headIdx === 0 ? 0 : sumArr[headIdx - 1];
            const tailSum = sumArr[headIdx + width - 1];
            sum += tailSum - headSum;
        }

        result.push(sum);
    });
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
