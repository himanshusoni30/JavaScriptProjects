function sum(a, b){
	return a+b;
}

console.log("Sum of 5 and 10 is: "+ sum(5, 10));

function product(a, b){
	return a*b;
}

console.log("Product of 5 and 10 is: "+ product(5, 10));

const bigProduct = product(23456, 4653782);

console.log("big product: "+bigProduct);

//function() is an anonymous function because it does not have any name
setTimeout(function(){
	console.log("Waited for the given time interval using anonymous function.")
}, 1000);


//arrow functions, if there is a single line of code inside function then remove {} braces (similar to lambdas)
setTimeout(() => console.log("Waited for the given time interval using arrow function."), 1000);