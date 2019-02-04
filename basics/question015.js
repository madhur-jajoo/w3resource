/**
 * Write a JavaScript program to get the difference between a given number and 13,
 * if the number is greater than 13 return double the absolute difference.
 */

const readline = require('readline');

(function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter a number : ', answer => {
    answer = parseInt(answer);
    if (answer <= 13) {
      console.log(`The difference between ${answer} and 13 is ${13 - answer}`);
    } else {
      console.log(
        `The doubled difference between ${answer} and 13 is ${2 *
          (answer - 13)}`
      );
    }
    rl.close();
  });
})();
