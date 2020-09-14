const name = ["tum","hum","main","wo","sab"];

for(let i=0; i < name.length; i++){
	console.log("Names in an array: "+name[i]);
}

const number = [1, 2, 3, 4, 5, 6];

for(let i=0; i < number.length; i++){
	console.log("Doubling number: "+(number[i]*2));
}


let username = "isCorrect";
let userGuess = "";

while(username !== userGuess){
	console.log("please try again.");
	userGuess = "isCorrect";
}

alert("You are correct !!!");

let num = 5;
let factorial = 1;

do{
	factorial = factorial * num;
	num--;
}while(num > 0)

console.log("Factorial: "+factorial);