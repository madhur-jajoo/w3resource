/**
 * Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
 */

const readline = require('readline');

(function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    '1. Convert Celsius to Fahrenheit \n2. Convert Fahrenheit to Celsius\n\nSelect your option:  ',
    answer => {
      try {
        if (answer == 1) {
          rl.question('Enter the temperature in Celsius : ', cel => {
            let fah = (cel / 5) * 9 + 32;
            console.log(
              `${cel}${String.fromCharCode([
                176,
              ])}C is ${fah}${String.fromCharCode([176])}F`
            );
            rl.close();
          });
        } else if (answer == 2) {
          rl.question('Enter the temperature in Fahrenheit : ', fah => {
            let cel = ((fah - 32) / 9) * 5;
            console.log(
              `${fah}${String.fromCharCode([
                176,
              ])}F is ${cel}${String.fromCharCode([176])}C`
            );
            rl.close();
          });
        } else {
          throw new Error('Selected option not available');
        }
      } catch (err) {
        console.log(err.message);
        rl.close();
      }
    }
  );
})();
