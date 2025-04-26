function solution(input) {
    const N = Number(input.shift());
    const coordinates = input.shift().split(" ").map(Number);
    const sortedCoordinates = Array.from(new Set(coordinates)).sort((a, b) => a - b);
    const results = [];

    function search(targetNumber) {
        let start = 0;
        let end = sortedCoordinates.length - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const current = sortedCoordinates[mid];
            if (current === targetNumber) return mid;
            if (current > targetNumber) end = mid - 1;
            if (current < targetNumber) start = mid + 1;
        }

        return -1;
    }

    for (const coordinate of coordinates) {
        results.push(search(coordinate));
    }

    console.log(results.join(" "));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
