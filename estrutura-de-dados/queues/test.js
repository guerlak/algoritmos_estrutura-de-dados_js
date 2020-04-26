const Queue = require("./Queue");

const p1 = {
  name: "Rafael",
  email: "guerlak@gmail.com",
  age: 40,
};
const p2 = {
  name: "Mari",
  email: "mari@gmail.com",
  age: 40,
};
const p3 = {
  name: "Martina",
  email: "mart@gmail.com",
  age: 40,
};
const p4 = {
  name: "Cata",
  email: "cata@gmail.com",
  age: 40,
};

const queue = new Queue();

queue.enqueue(p1);
queue.enqueue(p2);
queue.enqueue(p3);
queue.enqueue(p4);

queue.dequeue();
queue.dequeue();

console.log(queue.toString("email"));
