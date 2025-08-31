const NODE_NUM = 40;
const START = 2;

/* 잘 만들었다 가정 */
const graph = Array.from({ length: NODE_NUM }, () => []);

function addEdge(start, end, weight) {
    graph[start] = [end, weight];
}

class MinHeap {
    constructor(cmp) {
        this.queue = [];
        this.cmp = cmp;
    }

    size() {
        return this.queue.length;
    }

    push(newEl) {
        const queue = this.queue;
        queue.push(newEl);
        let i = queue.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.cmp(queue[p], queue[i]) <= 0) break;
            [queue[p], queue[i]] = [queue[i], queue[p]];
            i = p;
        }
    }

    pop() {
        const queue = this.queue;
        if (queue.length === 0) return null;
        const top = queue[0];
        const x = queue.pop();
        if (queue.length) {
            queue[0] = x;
            let i = 0;
            while (true) {
                let l = i * 2 + 1;
                let r = l + 1;
                let best = i;
                if (l < queue.length && this.)
            }
        }

        return top;
    }
}

function Dijkstra() {
    const dist = new Array(NODE_NUM).fill(Infinity);
    dist[START] = 0;

    /* 추후 우선순위 큐로 구현 */
    const queue = [[START, 0]];

    while (queue.length > 0) {
        const [node, totalDistance] = queue.pop();
        if (dist[node] < totalDistance) continue;

        for (let i = 0; i < NODE_NUM; i++) {
            const distToNext = totalDistance + graph[node][i];
            if (dist[i] > distToNext) {
                dist[i] = distToNext;
                queue.push([i, distToNext]);
            }
        }
    }
}
