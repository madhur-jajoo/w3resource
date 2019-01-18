/**
 * Write a JavaScript program to get the current date.
 * Expected Output :  mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

(function() {
  let curr_date = new Date();
  let date =
    curr_date.getDate() < 10 ? '0' + curr_date.getDate() : curr_date.getDate();
  let month =
    curr_date.getMonth() < 10
      ? '0' + (curr_date.getMonth() + 1)
      : curr_date.getMonth() + 1;
  console.log(`${date}-${month}-${curr_date.getFullYear()}`);
})();
