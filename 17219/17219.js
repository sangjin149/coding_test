function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const passwordList = {};

    input.slice(1, 1 + N).forEach((str) => {
        const [site, password] = str.split(" ");
        passwordList[site] = password;
    });

    const result = [];
    input.slice(N + 1).forEach((site) => result.push(passwordList[site]));

    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
