const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Informe uma palavra: ", (string) => {
  const letter = "a";
  let countLetter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter) {
      countLetter++;
    }
  }

  console.log(
    `A letra "${letter}" apareceu ${countLetter} ${countLetter === 1 ? "vez" : "vezes"} na palavra "${string}".`
  );

  input.close();
});
