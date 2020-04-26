const LinkedList = require("./LinkedList");

const list = new LinkedList();

function test() {
  list.push(1);

  console.log(list.removeAt(0));

  list.push("Raf");

  // console.log(list.remove(2));
  // console.log(list.indexOf(1));
  // console.log(list.isEmpty());
}

test();

console.log(list);
