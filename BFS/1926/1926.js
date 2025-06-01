function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const graph = [];

    input.slice(1).forEach((row, index) => {
        graph.push(row.split(" ").map(Number));
    });

    const visited = Array(n)
        .fill(false)
        .map(() => Array(m).fill(false));

    let areaNum = 0;
    let widestExtent = 0;

    function BFS(startX, startY) {
        if (visited[startX][startY]) return 0;
        const ADJACENT = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
        ];

        const queue = [startX, startY];
        visited[startX][startY] = true;
        let cursor = 0;
        let extent = 1;

        while (queue.length > cursor) {
            const currentX = queue[cursor];
            const currentY = queue[cursor + 1];
            cursor += 2;
            for (const [dx, dy] of ADJACENT) {
                const childX = currentX + Number(dx);
                const childY = currentY + Number(dy);
                if (childX < 0 || childX >= n || childY < 0 || childY >= m) continue;
                if (visited[childX][childY] || graph[childX][childY] === 0) continue;
                extent++;
                visited[childX][childY] = true;
                queue.push(childX, childY);
            }
        }

        return extent;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === 1) {
                const extext = BFS(i, j);
                widestExtent = Math.max(extext, widestExtent);
                if (extext > 0) areaNum++;
            }
        }
    }

    console.log(`${areaNum}\n${widestExtent}`);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
