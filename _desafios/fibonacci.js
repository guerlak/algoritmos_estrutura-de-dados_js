// Os dois primeiros nuemros da sequencia são 1 e 2,
// e cada numero subsequente é a soma dos 2 numeros anteriores

const fibonacci = [];

function printFibonacci(num) {
  fibonacci[1] = 1;
  fibonacci[2] = 1;

  for (let i = 3; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
  }
}

printFibonacci(5);
