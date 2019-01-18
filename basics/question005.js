/**
 * Write a JavaScript program to rotate the string 'w3resource' in right direction
 * by periodically removing one letter from the end of the string and attaching it to the front.
 */

(function(original_string) {
  let str = original_string;
  setInterval(function() {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    console.log(str);
    if (str == original_string) clearInterval(this);
  }, 200);
})('w3resource');
