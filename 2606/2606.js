function solution(input) {
    const connections = input.slice(2).map((str) => str.split(" ").map(Number));
    const networkList = [];

    while (connections.length > 0) {
        const connection = connections.shift();
        let includedInNetwork = false;

        for (let i = 0; i < networkList.length; i++) {
            const network = networkList[i];
            if (network.has(connection[0]) || network.has(connection[1])) {
                network.add(connection[0]);
                network.add(connection[1]);
                includedInNetwork = true;
                break;
            }
        }

        if (!includedInNetwork) {
            const newNetwork = new Set();
            newNetwork.add(connection[0]);
            newNetwork.add(connection[1]);
            networkList.push(newNetwork);
        }
    }

    let result = 0;
    while (networkList.length > 0) {
        const network = networkList.shift();
        if (network.has(1)) {
            result = network.size - 1;
            break;
        }
    }
    console.log(result);
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.trim());

solution(input);
