/**
 * Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
 */

(function(args) {
  const [start, end] = [...args];
  for (let year = start; year < end; year++) {
    let isSunday = new Date(year, 0, 1).getDay().toLocaleString() == 0;
    if (isSunday) console.log(year);
  }
})([2014, 2050]);
