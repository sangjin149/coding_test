function solution(input) {
    const [N, M] = input.split(" ").map(Number);
    const results = [];

    const stack = [];
    function dfs(num) {
        if (stack.length === M) {
            results.push(stack.join(" "));
            return;
        }
        for (let i = num; i <= N; i++) {
            if (i === 0) continue;
            stack.push(i);
            dfs(i);
            stack.pop();
        }
    }
    dfs(0);
    console.log(results.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
