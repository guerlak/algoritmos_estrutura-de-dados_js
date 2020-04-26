const Deque = require("./Deque");

const car1 = "Carro 1";
const car2 = "Carro 2 ";
const car3 = "Carro 3";
const car4 = "Carro 4";
const car5 = "Carro 5";

const deque = new Deque();

deque.addBack(car1);
deque.addBack(car2);
deque.addBack(car3);
deque.addBack(car4);
deque.addBack(car5);

console.log(deque.removeFront());
console.log(deque.removeBack());

console.log(deque.toString());
console.log(deque.size());
