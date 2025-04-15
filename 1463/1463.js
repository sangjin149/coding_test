function solution(input) {
    const answerList = new Array(1000001).fill(0);
    const target = Number(input);

    for (let i = 2; i <= target; i++) {
        let minCalculation = 0;
        minCalculation = answerList[i - 1] + 1;
        if (i % 2 === 0) {
            minCalculation = Math.min(minCalculation, answerList[i / 2] + 1);
        }
        if (i % 3 === 0) {
            minCalculation = Math.min(minCalculation, answerList[i / 3] + 1);
        }

        answerList[i] = minCalculation;
    }

    console.log(answerList[target]);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
