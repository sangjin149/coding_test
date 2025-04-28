function solution(input) {
    const [N, r, c] = input;

    function dacapo(endPoint, length, num) {
        const [i, j] = endPoint;
        if (length === 1) {
            if (i === r && j === c) console.log(num);
            num++;
        } else {
            const nextLength = length / 2;
            const skippedCount = length ** 2 / 4;

            if (r <= i - nextLength && c <= j - nextLength) {
                dacapo([i - nextLength, j - nextLength], length / 2, num + 0);
            } else if (r <= i - nextLength) {
                dacapo([i - nextLength, j], length / 2, num + skippedCount * 1);
            } else if (c <= j - nextLength) {
                dacapo([i, j - nextLength], length / 2, num + skippedCount * 2);
            } else {
                dacapo([i, j], length / 2, num + skippedCount * 3);
            }
        }
    }

    dacapo([2 ** N - 1, 2 ** N - 1], 2 ** N, 0);

    // console.log(graph.map((arr) => arr.join(" ")).join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

solution(input);
