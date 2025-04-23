function checkArea(graph) {
    const num = graph[0][0];
    const isAllSame = graph.every((arr) => arr.every((item) => item === num));
    let result = null;
    if (isAllSame) {
        result = num;
    }
    return result;
}

function divideArea(inputGraph) {
    const graph = [...inputGraph];
    const length = graph.length;
    const half = length / 2;

    const graph1 = [];
    const graph2 = [];
    const graph3 = [];
    const graph4 = [];

    for (let i = 0; i < half; i++) {
        graph1.push(graph[i].slice(0, half));
        graph2.push(graph[i].slice(half));
    }

    for (let i = half; i < length; i++) {
        graph3.push(graph[i].slice(0, half));
        graph4.push(graph[i].slice(half));
    }

    const result = [graph1, graph2, graph3, graph4];

    return result;
}

function DNC(graph) {
    const dividedGraphs = divideArea(graph);
    const nextAreas = [];
    let blue = 0;
    let white = 0;
    dividedGraphs.forEach((graph) => {
        const checkResult = checkArea(graph);
        if (checkResult === null) nextAreas.push(graph);
        if (checkResult === 0) white++;
        if (checkResult === 1) blue++;
    });
    nextAreas.forEach((graph) => {
        const [childWhite, childBlue] = DNC(graph);
        blue += childBlue;
        white += childWhite;
    });
    return [white, blue];
}

function solution(input) {
    const N = parseInt(input.shift());
    const graph = input.map((line) => line.split(" ").map((str) => parseInt(str)));

    let firstCheck = checkArea(graph);
    if (firstCheck !== null) {
        if (firstCheck === 0) return console.log("1\n0");
        if (firstCheck === 1) return console.log("0\n1");
    }
    console.log(DNC(graph).join("\n"));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
