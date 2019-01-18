/**
 * Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
 */

const readline = require('readline');

(function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the first number : ', var1 => {
    rl.question('Enter the second number: ', var2 => {
      rl.close();
      try {
        console.log('Multiplication : ', var1 * var2);
        console.log('Division: ', var1 / var2);
      } catch (err) {
        console.log(err);
      }
    });
  });
})();
