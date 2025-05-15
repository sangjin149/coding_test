function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const connectionStrList = input.slice(1);
    const graph = new Array(N + 1).fill(true).map(() => new Array());

    for (const connection of connectionStrList) {
        const [node1, node2] = connection.split(" ").map(Number);
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    console.log(graph);
    // function search(start, end) {
    //     const queue = [[start, 0]];
    //     const visited = new Array(N + 1).fill(false);
    //     let cursor = 0;

    //     while (queue.length > cursor) {
    //         const [current, distance] = queue[cursor++];
    //         for (let i = 1; i <= N; i++) {
    //             if (visited[i]) continue;
    //             if (graph[current][i]) {
    //                 if (i === end) return distance + 1;
    //                 visited[i] = true;
    //                 queue.push([i, distance + 1]);
    //             }
    //         }
    //     }

    //     return N + 1;
    // }

    // const lengthList = new Array(N + 1).fill(true).map(() => new Array(N + 1).fill(0));
    // let minCur = N + 1;
    // let result = N + 1;

    // for (let i = 1; i < N; i++) {
    //     for (let j = i + 1; j <= N; j++) {
    //         const searchResult = search(i, j);
    //         lengthList[i][j] = searchResult;
    //         lengthList[j][i] = searchResult;
    //     }
    //     const lengthSum = lengthList[i].reduce((acc, cur) => acc + cur, 0);
    //     if (minCur > lengthSum) {
    //         minCur = lengthSum;
    //         result = i;
    //     }
    // }
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
