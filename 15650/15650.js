function solution(input) {
    const [N, M] = input.split(" ").map(Number);

    const sample = new Array(N + 1).fill(true).map((_, index) => index);
    const result = [];

    function dfs(current, oldDepth) {
        const depth = oldDepth + 1;
        const lastNumber = current % 10;
        const nextNumbers = sample.slice(lastNumber + 1);

        if (depth === M) {
            for (const next of nextNumbers) {
                result.push(current * 10 + next);
            }
        } else {
            for (const next of nextNumbers) {
                dfs(current * 10 + next, depth);
            }
        }
    }

    dfs(0, 0);
    console.log(result.map((answer) => answer.toString().split("").join(" ")).join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
