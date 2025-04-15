function solution(input) {
    const [N, M] = input.shift().split(" ");
    const notHeard = new Set(input.splice(0, N));
    const notSeen = new Set([...input]);
    const notSeenHeardList = [];

    notHeard.forEach((name) => {
        notSeen.has(name) && notSeenHeardList.push(name);
    });

    const result = [notSeenHeardList.length, ...notSeenHeardList.sort()].join("\n");

    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
