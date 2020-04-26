const LinkedList = require("./LinkedList");

const list = new LinkedList();

function test() {
  list.push(1);
  list.push(2);
  list.push(3);
  console.log(list.remove(2));
}

test();
