function solution(input) {
    const lenList = [0, 1, 1, 1, 2, 2];

    for (let i = 6; i <= 101; i++) {
        lenList[i] = lenList[i - 1] + lenList[i - 5];
    }

    const result = [];
    input.slice(1).forEach((strNum) => {
        result.push(lenList[Number(strNum)]);
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
