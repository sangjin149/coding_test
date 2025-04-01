function solution(arr) {
    const words = [...arr];
    words.shift();
    const uniqueWords = [...new Set(words)];
    const result = uniqueWords.sort((str1, str2) => str1.length - str2.length || str1.localeCompare(str2)).join("\n");
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

solution(input);
