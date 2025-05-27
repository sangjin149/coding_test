function solution(input) {
    let cursor = 1;
    let result = [];
    while (cursor < input.length - 1) {
        const n = Number(input[cursor]);
        const clothes = {};

        for (let i = cursor + 1; i <= cursor + n; i++) {
            const [clothName, clothType] = input[i].split(" ");
            clothes[clothType] = clothes[clothType] ? clothes[clothType] + 1 : 2;
        }

        let combinationCount = 1;
        for (const clothType in clothes) {
            combinationCount *= clothes[clothType];
        }
        result.push(combinationCount - 1);
        cursor += n + 1;
    }
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
