function solution(input) {
    const [A, B, C] = input.split(" ").map(BigInt);

    function power(exponent) {
        if (exponent === 0) return 1;
        if (exponent === 1) return A % C;

        const half = power(Math.floor(exponent / 2));
        const halfMod = (half * half) % C;

        return exponent % 2 === 0 ? halfMod : (halfMod * A) % C;
    }

    console.log(power(B));
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

solution(input);
