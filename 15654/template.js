function solution(input) {
    const [nm, nums] = input;
    const [n, m] = nm;
    const arr = nums.sort((a, b) => a - b);

    const visited = new Array(n).fill(false);
    const result = [];

    function dfs(path) {
        if (path.length === m) {
            result.push(path.join(" "));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            dfs([...path, arr[i]]);
            visited[i] = false;
        }
    }

    dfs([]);

    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim().split(" ").map(Number));

solution(input);
