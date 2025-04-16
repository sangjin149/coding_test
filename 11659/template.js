function solution(input) {
    const M = input[0].split(" ")[1];
    const numList = input[1].split(" ").map(Number);
    const accumulationList = [0];

    numList.forEach((num, idx) => {
        accumulationList.push(accumulationList[idx] + numList[idx]);
    });

    const orderList = input.slice(2).map((str) => str.split(" ").map(Number));
    const result = [];
    console.log(orderList);
    orderList.forEach(([start, end]) => result.push(numList[end] - numList[start - 1]));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
