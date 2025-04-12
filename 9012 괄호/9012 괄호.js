function checkVPS(str) {
    const strArr = str.split("");
    let leftCount = 0;
    while (leftCount >= 0 && strArr.length > 0) {
        const currentChar = strArr.shift();
        if (currentChar === "(") leftCount++;
        if (currentChar === ")") leftCount--;
    }
    return leftCount === 0 ? "YES" : "NO";
}

function solution(input) {
    const result = input.map(checkVPS).join("\n");
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

input.shift();
solution(input);
