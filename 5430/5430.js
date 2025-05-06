function solution(input) {
    const T = Number(input.shift());
    let cursor = 0;
    let orderArr = [...input];
    const result = [];

    for (let i = 0; i < T; i++) {
        const p = orderArr[i * 3];
        const numArr = JSON.parse(orderArr[i * 3 + 2]);

        let isNormalOrder = true;
        let head = 0;
        let tail = numArr.length;
        let isError = false;

        for (const order of p) {
            if (order === "R") isNormalOrder = !isNormalOrder;
            if (order === "D") {
                if (head === tail) {
                    isError = true;
                    break;
                }
                if (isNormalOrder) head++;
                else tail--;
            }
        }

        if (isError) result.push("error");
        else {
            const pResult = numArr.slice(head, tail);
            if (!isNormalOrder) pResult.reverse();
            result.push(`[${pResult}]`);
        }
        cursor++;
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
