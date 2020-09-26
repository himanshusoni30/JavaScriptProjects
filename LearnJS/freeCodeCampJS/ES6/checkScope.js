/*jshint esversion: 6 */

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i); //in order to change the value of i, new value need to be assigned outside block.
  return i;
}

console.log(checkScope());