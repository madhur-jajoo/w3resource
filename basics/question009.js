/**
 *  Write a JavaScript program to calculate days left until next Christmas.
 */

(function() {
  const curr_year = new Date().getFullYear();
  const seconds_left = new Date(curr_year, 11, 25) - new Date();
  const days_left = seconds_left / (24 * 60 * 60 * 1000);
  console.log('Days left to christmas : ', Math.ceil(days_left));
})();
