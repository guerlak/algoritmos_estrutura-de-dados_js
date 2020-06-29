class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (this.has(element)) {
      return false;
    }
    this.items[element] = element;
    return true;
  }

  delete(element) {
    if (!this.has(element)) {
      return false;
    }
    delete this.items[element];
    return true;
  }

  has(element) {
    // return element in this.items;
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }
}

export default Set;
