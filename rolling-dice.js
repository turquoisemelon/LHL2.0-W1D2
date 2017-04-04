let diceNumber = process.argv[2];

function rollingDice (number) {
  var str = "";
  for (var i = 0; i < number; i++) {
    var result = Math.ceil(Math.random() * 6);
    if (i !== number - 1) {
      str += result + ",";
    } else {
      str += result;
    }
  }
  console.log(`Rolled ${number} dice: ${str}`);
}

rollingDice(diceNumber);

// Write a program that takes a single parameter from the command line, a number,
// and rolls that many six-sided dice. For example, the following is a sample
//  output of the program.

