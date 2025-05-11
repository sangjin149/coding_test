function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const nameNumList = {};
    const numNameList = [0];
    input.slice(1, N + 1).map((pokemon, index) => {
        nameNumList[pokemon] = index + 1;
        numNameList[index + 1] = pokemon;
    });
    const orderList = input.slice(N + 1);
    const result = [];

    for (const order of orderList) {
        result.push(isNaN(order) ? nameNumList[order] : numNameList[order]);
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
