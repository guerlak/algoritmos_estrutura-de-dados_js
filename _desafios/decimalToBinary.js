const Stack = require("../stacks/StackArray");

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;

  let binaryStr = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryStr += remStack.pop();
  }

  return binaryStr;
}

const res = decimalToBinary(16);

console.log(res);
