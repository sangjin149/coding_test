function solution(input) {
    const N = Number(input[0]);
    const tree = Array.from({ length: N }, () => Array(2));
    input.slice(1).forEach((str) => {
        const [cur, left, right] = str.split(" ");
        tree[cur.charCodeAt(0) - "A".charCodeAt(0)][0] = left === "." ? null : left;
        tree[cur.charCodeAt(0) - "A".charCodeAt(0)][1] = right === "." ? null : right;
    });

    function front() {
        const result = [];
        const stack = ["A"];
        while (stack.length > 0) {
            const cur = stack.pop();
            const [left, right] = tree[cur.charCodeAt(0) - "A".charCodeAt(0)];
            result.push(cur);
            right && stack.push(right);
            left && stack.push(left);
        }
        console.log(result.join(""));
    }

    function middle() {
        const result = [];
        const stack = ["A"];
        const visited = Array(N).fill(false);
        while (stack.length > 0) {
            const cur = stack.pop();
            const curIdx = cur.charCodeAt(0) - "A".charCodeAt(0);
            const [left, right] = tree[curIdx];
            if (visited[curIdx]) {
                result.push(cur);
                continue;
            }
            visited[curIdx] = true;
            right && stack.push(right);
            stack.push(cur);
            left && stack.push(left);
        }
        console.log(result.join(""));
    }

    function last() {
        const result = [];
        const stack = ["A"];
        const visited = Array(N).fill(false);
        while (stack.length > 0) {
            const cur = stack.pop();
            const curIdx = cur.charCodeAt(0) - "A".charCodeAt(0);
            const [left, right] = tree[curIdx];
            if (visited[curIdx]) {
                result.push(cur);
                continue;
            }
            visited[curIdx] = true;
            stack.push(cur);
            right && stack.push(right);
            left && stack.push(left);
        }
        console.log(result.join(""));
    }

    front();
    middle();
    last();
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
