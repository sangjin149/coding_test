function solution(input) {
    const coordinateList = input.map((str) => str.split(" ").map(Number));
    coordinateList.sort((coordinate1, coordinate2) => {
        const [x1, y1] = coordinate1;
        const [x2, y2] = coordinate2;
        if (x1 !== x2) return x1 - x2;
        return y1 - y2;
    });
    const result = coordinateList.map((coordinate) => coordinate.join(" ")).join("\n");
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
