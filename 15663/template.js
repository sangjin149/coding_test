function solution(input) {
    const [nm, ...rest] = input.map((line) => line.trim());
    const [n, m] = nm.split(" ").map(Number);
    const numbers = rest[0]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    const visited = Array(n).fill(false);
    const result = [];
    const temp = [];
    let depth = 0;

    function dfs() {
        if (depth === m) {
            result.push(temp.join(" "));
            return;
        }

        let prev = -1;
        for (let i = 0; i < n; i++) {
            if (visited[i] || prev === numbers[i]) continue;

            visited[i] = true;
            temp.push(numbers[i]);
            prev = numbers[i];
            depth++;

            dfs();

            visited[i] = false;
            temp.pop();
            depth--;
        }
    }

    dfs();
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
