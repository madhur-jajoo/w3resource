/**
 * Write a JavaScript exercise to create a variable using a user-defined name.
 */

const readline = require('readline');
(function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('What shall be the variable name : ', answer => {
    let variable = answer;
    this[variable] = 'some value';
    if (answer) {
      console.log(
        `Variable with name ${variable} created with value - ${this[variable]}`
      );
    }
    rl.close();
  });
})();
