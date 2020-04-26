const { defaultEquals } = require("./util");
const Node = require("./models/models");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const currentNode = this.head;
        node.next = currentNode;
        this.head = node;
      } else {
        const prevNode = this.getElementByIndex(index - 1);

        const currentNode = prevNode.next;
        node.next = currentNode;
        prevNode.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getElementByIndex(index) {
    if (index >= this.count) {
      return "Out of bounds";
    } else {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
  }

  remove(element) {
    if (this.head === null) {
      return "List Empty";
    }

    if (this.head.element === element) {
      this.head = this.head.next;
      this.count--;
      return "element deleted";
    }

    let current;
    let previous;
    current = this.head;

    while (current !== null && current !== undefined) {
      if (current.element === element) {
        previous.next = current.next;
        this.count--;
        return "element deleted";
      } else {
        previous = current;
        current = current.next;
      }
    }
    return undefined;
  }

  indexOf(element) {
    if (this.head === null) {
      return "List Empty";
    }
    let count = 0;
    let current = this.head;
    while (current !== null && current !== undefined) {
      if (current.element === element) {
        return count;
      } else {
        count++;
        current = current.next;
      }
    }
    return undefined;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current;

    if (this.count === 1 && index === 0) {
      current = this.head;
      this.head = null;
      this.count--;
      return current;
    }

    let previous;
    current = this.head;
    if (index === 0) {
      current.next = this.head;
    } else {
      for (let i = 0; i <= index; i++) {
        if (i === index) {
          previous.next = current.next;
          this.count--;
          return current.element;
        }
        previous = current;
        current = current.next;
      }
    }
  }

  isEmpty() {
    return this.size() == 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    //iniciar a variavel objStr com valor p/ não devolver str vazia
    let currentNode = `${this.head.element}`;
    let nextNode = this.head.next;

    for (let i = 0; i <= this.count && nextNode !== null; i++) {
      currentNode = `${currentNode},${nextNode.element}`;
      nextNode = nextNode.next;
    }
    return currentNode;
  }
}

module.exports = LinkedList;
