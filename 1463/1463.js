function solution(input) {
    const answerList = new Array(1000001);
    answerList[0] = -1;
    const target = Number(input);

    for (let i = 1; i <= input; i++) {
        let minCalculation = 0;
        if (i % 3 === 0) {
            minCalculation = Math.min(answerList[i - 1] + 1, answerList[i / 3] + 1);
        } else if (i % 2 === 0) {
            minCalculation = Math.min(answerList[i - 1] + 1, answerList[i / 2] + 1);
        } else {
            minCalculation = answerList[i - 1] + 1;
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
