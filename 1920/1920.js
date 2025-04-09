function binarySearch(item, arr) {
    let head = 0;
    let tail = arr.length - 1;
    let result = 0;
    do {
        let middle = Math.floor((head + tail) / 2);
        if (arr[middle] === item) {
            result = 1;
            break;
        }
        if (arr[middle] > item) {
            tail = middle - 1;
        } else {
            head = middle + 1;
        }
    } while (head <= tail);
    return result;
}

function solution(input) {
    const inspectList = input[1]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
    const candidateList = input[3].split(" ").map(Number);
    const answers = [];
    candidateList.forEach((item) => answers.push(binarySearch(item, inspectList)));
    const result = answers.join("\n");
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

solution(input);
