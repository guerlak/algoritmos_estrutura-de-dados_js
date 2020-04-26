class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return res;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let element = this.items[0];
    for (let i = 0; i < this.count; i++) {
      element = `${element},${this.items[i]}`;
    }
    return element;
  }
}

module.exports = Stack;
