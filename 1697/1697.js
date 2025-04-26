function solution(input) {
    const [start, target] = input.split(" ").map(Number);
    let result = 0;

    let queue = [[start, 0]];
    const visited = [start];

    if (start > target) return console.log(start - target);

    while (true) {
        const [current, level] = queue.shift();

        if (current === target) {
            result = level;
            break;
        }

        const connectedNums = [current - 1, current + 1, 2 * current];
        for (const num of connectedNums) {
            if (!visited[num] && num >= 0 && num <= 100000) {
                queue.push([num, level + 1]);
                visited[num] = true;
            }
        }
    }

    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);

// queue 배열을 직접 관리.

// head++ 방식으로 큐를 "앞에서 빼는 것처럼" 만듦.

// 사실상 shift()를 안 쓰고, 인덱스만 움직이는 것.

// 시간 복잡도: O(1)로 매우 빠름.
