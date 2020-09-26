/*ES6: Write Arrow Functions with Parameters*/

/*jshint esversion: 6 */

//Legacy approach:

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

console.log("Legacy function with args: "+myConcat);
console.log("myConcat: "+myConcat([1, 2], [3, 4, 5]));

console.log("-------------------------------------------------------")

//ES6 approach:

const MY_CONCAT = (arr1,arr2) => arr1.concat(arr2);
console.log("ES6 Arrow Function with args: "+MY_CONCAT);
console.log("MY_CONCAT: "+MY_CONCAT([1, 2], [3, 4, 5]));
