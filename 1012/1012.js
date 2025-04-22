function drawGraph(width, height, coordinates) {
    const result = new Array(width).fill(false).map(() => new Array(height).fill(false));
    while (coordinates.length > 0) {
        const [x, y] = coordinates.shift();
        result[x][y] = true;
    }
    return result;
}

function BFS(start, graph) {
    const queue = [start];
    while (queue.length > 0) {
        const current = queue.shift();
        const [x, y] = current;

        if (graph[x][y]) {
            graph[x][y] = false;
        }
        if (x - 1 >= 0 && graph[x - 1][y]) {
            queue.push([x - 1, y]);
            graph[x - 1][y] = false;
        }
        if (y - 1 >= 0 && graph[x][y - 1]) {
            queue.push([x, y - 1]);
            graph[x][y - 1] = false;
        }
        if (x + 1 < graph.length && graph[x + 1][y]) {
            queue.push([x + 1, y]);
            graph[x + 1][y] = false;
        }
        if (y + 1 < graph[x].length && graph[x][y + 1]) {
            queue.push([x, y + 1]);
            graph[x][y + 1] = false;
        }
    }
    return graph;
}

function solution(input) {
    let testCaseNum = parseInt(input[0]);
    let orders = input.slice(1);
    let result = [];
    while (testCaseNum > 0) {
        testCaseNum--;
        let worms = 0;
        const [width, height, coordinateNum] = orders.shift().split(" ").map(Number);
        const coordinates = orders.splice(0, coordinateNum).map((str) => str.split(" ").map(Number));
        let graph = drawGraph(width, height, coordinates);
        let i = 0;
        while (i < width) {
            let j = 0;
            while (j < height) {
                if (graph[i][j] === true) {
                    worms++;
                    graph = BFS([i, j], graph);
                }
                j++;
            }
            i++;
        }
        result.push(worms);
    }
    console.log(result.join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
