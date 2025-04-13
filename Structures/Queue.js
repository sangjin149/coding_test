class Queue {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }

    push(value) {
        this.data[this.tail] = value;
        this.tail++;
    }

    pop() {
        if (this.head === this.tail) return -1;
        return this.data[this.head++];
    }

    size() {
        return this.tail - this.head;
    }

    empty() {
        return this.size() > 0 ? 0 : 1;
    }

    front() {
        return this.data[this.head];
    }

    back() {
        return this.data[this.tail - 1];
    }
}
