/*
ES6: Use the Rest Parameter with Function Parameters
In order to help us create more flexible functions, 
ES6 introduces the rest parameter for function parameters. 
With the rest parameter '...args', you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function.
*/


const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(0,1,2));
console.log(sum(1,2,3,4));
console.log(sum(5));
console.log(sum());

