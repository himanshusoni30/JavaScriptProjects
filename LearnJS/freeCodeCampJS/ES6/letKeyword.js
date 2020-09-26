/*jshint esversion: 6 */

/**
let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. 
Anything within curly braces is a block.*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";

  console.log(catName);
  quote = catName + " says Meow!";
  console.log(quote);
  catName = "Spade";
  console.log(catName);
  let insideBlock = "I am inside block";
}
catTalk();
//console.log(insideBlock); //Uncaught ReferenceError: insideBlock is not defined

//Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

let greeting = "say Hi";
console.log("Greeting: "+greeting);
greeting = "say Hello instead"; 
console.log("Greeting Again: "+greeting);


//this will return an error:

let wish = "say Hi";
console.log("Wish: "+wish);
/**let wish = "say Hello instead"; */ // error: Identifier 'greeting' has already been declared
console.log("Wish again: "+wish);


//However, if the same variable is defined in different scopes, there will be no error:

let wishMe = "say Hi";
if (true) {
   let wishMe = "say Hello instead";
   console.log("WishMe inside block: "+wishMe); // "say Hello instead"
}
console.log("WishMe outside block: "+wishMe); // "say Hi"