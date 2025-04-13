class Stack {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    push(value) {
        this.value[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length === 0) return -1;
        this.length--;
        return this.value[this.length];
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length > 0 ? 0 : 1;
    }

    top() {
        return this.value[this.length - 1] ?? -1;
    }
}
