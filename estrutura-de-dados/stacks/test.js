const Stack = require("./Stack");

const myStack = new Stack();

const p = "Rafael";

myStack.push(p);
myStack.push(p);
myStack.push(p);
myStack.push(p);

// console.log(myStack.size());
// console.log(myStack.peek());
const arr = myStack.toString();
console.log(arr);
