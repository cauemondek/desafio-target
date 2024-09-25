const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Informe um número: ", (targetNumber) => {
  const fibonacciSeq = [0, 1];
  let found = false;

  for (let currentNumber = 0; currentNumber <= targetNumber; currentNumber++) {
    const nextNumber =
      fibonacciSeq[fibonacciSeq.length - 1] +
      fibonacciSeq[fibonacciSeq.length - 2];
    fibonacciSeq.push(nextNumber);

    if (nextNumber === parseInt(targetNumber)) {
      found = true;
      break;
    }
  }

  if (found) {
    console.log(`O número ${targetNumber} pertence à sequência de Fibonacci (${fibonacciSeq}).`);
  } else {
    console.log(`O número ${targetNumber} NÃO pertence à sequência de Fibonacci (${fibonacciSeq}).`);
  }

  input.close();
});
