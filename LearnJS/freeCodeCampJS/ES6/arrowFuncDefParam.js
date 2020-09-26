/*ES6: Set Default Parameters for Your Functions*/

/*The default parameter kicks in when the argument is not specified (it is undefined). */
/*in below function default 1 is assigned to value parameter, hence if value parameter is not passed
during the function, 1 will be considered as default input for value parameter*/

const increment = (number, value=1) => number + value;

console.log(increment(5,2));
console.log(increment(5));