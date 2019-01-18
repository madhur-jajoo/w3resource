/**
 * Write a JavaScript program to display the current day and time in the following format.
 * Sample Output : Today is : Tuesday.
 * Current time is : 10 PM : 30 : 38
 */

(function() {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let curr_date = new Date();
  console.log(`Today is : ${days[curr_date.getDay()]}`);
  let hrs = curr_date.getHours();
  if (hrs < 12) {
    ext = 'AM';
  } else {
    hrs = hrs - 12;
    ext = 'PM';
  }
  console.log(
    `Current time is : ${hrs} ${ext} : ${curr_date.getMinutes()} : ${curr_date.getSeconds()}`
  );
})();
