/*jshint esversion: 6 */

/**ES6: Use Arrow Functions to Write Concise Anonymous Functions**/

/*legacy approach*/

var magic = function() {
  "use strict";
  return new Date();
};

console.log("Legacy Approach: "+magic);
console.log("Legacy Approach: "+magic());

/*ES6 approach arrow fuction */

/*
Use arrow function syntax. () =>
When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword return 
as well as the brackets surrounding the code. 
This helps simplify smaller functions into one-line statements:
*/

const MAGIC = () => new Date();
console.log("Arrow function: "+MAGIC);
console.log("Arrow function: "+MAGIC());