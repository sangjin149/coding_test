function solution(input) {
    const [n, m] = input.shift().split(" ").map(Number);

    const graph = [];
    const visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
    const result = new Array(n).fill(false).map(() => new Array(m).fill(-1));
    let startPoint = [0, 0];

    for (let i = 0; i < n; i++) {
        const row = input[i].split(" ").map((item, j) => {
            const num = Number(item);
            if (num === 2) startPoint = [i, j];
            if (num === 0) {
                visited[i][j] = true;
                result[i][j] = 0;
            }
            return num;
        });
        graph.push(row);
    }

    function visitables(i, j) {
        const result = [];
        if (i > 0) result.push([i - 1, j]);
        if (j > 0) result.push([i, j - 1]);
        if (i < n - 1) result.push([i + 1, j]);
        if (j < m - 1) result.push([i, j + 1]);
        return result;
    }

    const queue = [[...startPoint, 0]];

    visited[startPoint[0]][startPoint[1]] = true;
    result[startPoint[0]][startPoint[1]] = 0;
    let head = 0;

    while (queue.length > head) {
        const [rowIdx, colIdx, step] = queue[head++];
        const visitableCoordinates = visitables(rowIdx, colIdx);
        for (const nextCoordinate of visitableCoordinates) {
            const [innerRowIdx, innerColIdx] = nextCoordinate;
            if (!visited[innerRowIdx][innerColIdx] && graph[innerRowIdx][innerColIdx] === 1) {
                visited[innerRowIdx][innerColIdx] = true;
                result[innerRowIdx][innerColIdx] = step + 1;
                queue.push([innerRowIdx, innerColIdx, step + 1]);
            }
        }
    }

    console.log(result.map((row) => row.join(" ")).join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
