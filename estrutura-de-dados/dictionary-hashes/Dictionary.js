import { defaultToString } from "../util/defaultToString.js";

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `#${this.key}: ${this.value}`
    }
}


export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    keyValues() {
        return Object.values(this.table)
    }

    forEach(cb) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = cb(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }

}


var test = new Dictionary();

test.set("rafa", "36 anos")
test.set("mari", "32 anos")
test.set("tina", "3 anos")
test.set("cata", "63 anos")

console.log(test.get("rafa"));
console.log(test.get("tina"));
console.log(test.get("cata"));

function print(v, c) {
    console.log(`ValuePair: ${v}, ${c}`);
    return true;
}

console.log(test.forEach(print));




