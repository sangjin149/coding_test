function getGCD(int1, int2) {
    let num1 = int1;
    let num2 = int2;
    let result = 1;
    let divisor = 2;

    if (num1 == 1 || num2 == 1) return 1;

    while (num1 >= divisor && num2 >= divisor) {
        if (num1 % divisor === 0 && num2 % divisor === 0) {
            result *= divisor;
            num1 /= divisor;
            num2 /= divisor;
            continue;
        }
        divisor++;
    }
    return result;
}

function solution(int1, int2) {
    const gcd = getGCD(int1, int2);
    const lcm = (int1 * int2) / gcd;
    console.log(gcd);
    console.log(lcm);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

solution(...input);
