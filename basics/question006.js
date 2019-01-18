/**
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
 */

(function(given_year) {
  if ((given_year % 4 == 0 && given_year % 100 != 0) || given_year % 400 == 0) {
    console.log('Leap year');
  } else {
    console.log('Not a leap year');
  }
})(1700);
