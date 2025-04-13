function solution(input) {
    const [n, nCards, m, mCards] = input;
    const nList = nCards.split(" ").map(Number);
    const mList = mCards.split(" ").map(Number);

    const countMap = new Map();

    for (const num of nList) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const result = mList.map((num) => countMap.get(num) || 0);

    console.log(result.join(" "));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
