function solution(input) {
    const MAX_LOCATION = 100001;
    const [N, K] = input.split(" ").map(Number);
    const visited = Array(MAX_LOCATION + 1).fill(false);
    const queue = [N, 0];
    let cursor = 0;
    while (cursor < queue.length) {
        const currLocation = queue[cursor++];
        const currSecond = queue[cursor++];

        if (currLocation === K) return console.log(currSecond);

        let teleportLocation = 2 * currLocation;
        while (teleportLocation <= MAX_LOCATION && teleportLocation > 0) {
            if (!visited[teleportLocation]) {
                visited[teleportLocation] = true;
                queue.push(teleportLocation, currSecond);
            }
            teleportLocation *= 2;
        }

        if (currLocation > 0 && !visited[currLocation - 1]) {
            visited[currLocation - 1] = true;
            queue.push(currLocation - 1, currSecond + 1);
        }

        if (currLocation < MAX_LOCATION && !visited[currLocation + 1]) {
            visited[currLocation + 1] = true;
            queue.push(currLocation + 1, currSecond + 1);
        }
    }
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
