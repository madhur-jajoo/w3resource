/**
 * Write a JavaScript program where the program takes a random integer between 1 to 10,
 * the user is then prompted to input a guess number.
 * If the user input matches with guess number,
 * the program will display a message "Good Work" otherwise display a message "Not matched".
 */
const readline = require('readline');

(function(num) {
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  r1.question('Guess the number ?', answer => {
    if (answer == num) {
      console.log('Good Work');
    } else {
      console.log('Not matched');
    }
    console.log('Number was ', num);
    r1.close();
  });
})(Math.round(Math.random() * 100));
