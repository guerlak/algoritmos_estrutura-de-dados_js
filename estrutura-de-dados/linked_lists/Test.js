const LinkedList = require("./LinkedList");

const list = new LinkedList();

function test() {
  console.log(list.insert("Rafaela", 0));
  console.log(list.insert("Rafael", 0));
  console.log(list.insert("Martininha", 1));

  // console.log(list.remove(2));
  // console.log(list.indexOf(1));
  // console.log(list.isEmpty());
}

test();
console.log(list.size());
console.log(list.toString());
