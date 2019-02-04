/**
 * Write a JavaScript exercise to get the extension of a filename.
 */
const readline = require('readline');
(function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the file name: ', answer => {
    console.log(`The files extension is : .${answer.split('.').pop()}`);
    rl.close();
  });
})();
