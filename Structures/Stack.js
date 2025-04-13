class Stack {
    contructor() {
        this.value = [];
        this.size = 0;
    }

    push(value) {
        this.value[this.size] = value;
        this.size++;
    }

    pop() {
        if (this.size) this.size--;
        return this.value[this.size] ?? -1;
    }

    size() {
        return this.size;
    }

    empty() {
        return this.size > 0 ? 0 : 1;
    }

    top() {
        return this.value[this.size - 1] ?? -1;
    }
}
