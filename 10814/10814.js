function solution(arr) {
    const memberList = arr.slice(1).map((memInfoStr) => memInfoStr.trim().split(" "));
    memberList.sort((mem1, mem2) => mem1[0] - mem2[0]);
    const result = memberList.map((memInfo) => memInfo.join(" ")).join("\n");
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

solution(input);
