function solution(input) {
    const tokens = [];

    let num = "";
    for (const letter of input) {
        if (letter === "+" || letter === "-") {
            tokens.push(num, letter);
            num = "";
            continue;
        }
        num += letter;
    }
    tokens.push(num);

    let isNegative = false;
    let sum = 0;
    for (const token of tokens) {
        if (token === "-") isNegative = true;
        if (token === "-" || token === "+") continue;
        sum += isNegative ? -1 * Number(token) : Number(token);
    }
    console.log(sum);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
