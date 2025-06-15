function solution(input) {
    const T = Number(input[0]);
    const tests = input.slice(1).map((row) => row.split(" ").map(Number));
    const results = [];

    for (let i = 0; i < T; i++) {
        const [nRow, top, bottom] = tests.slice(3 * i, 3 * i + 3);
        const n = nRow[0];

        let prevTopMax = 0;
        let prevBotMax = 0;
        let prevNoneMax = 0;

        for (let j = 0; j < n; j++) {
            let maxTopChoice = prevBotMax > prevNoneMax ? prevBotMax : prevNoneMax;
            let maxBotChoice = prevTopMax > prevNoneMax ? prevTopMax : prevNoneMax;
            let maxNoneChoice = prevTopMax > prevBotMax ? prevTopMax : prevBotMax;

            let newTopMax = top[j] + maxTopChoice;
            let newBotMax = bottom[j] + maxBotChoice;
            let newNoneMax = maxNoneChoice;

            prevTopMax = newTopMax;
            prevBotMax = newBotMax;
            prevNoneMax = newNoneMax;
        }

        results.push(Math.max(prevTopMax, prevBotMax, prevNoneMax));
    }

    console.log(results.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
