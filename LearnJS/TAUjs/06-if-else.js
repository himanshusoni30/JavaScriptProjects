let attendance = 15;

if(attendance > 15){
	console.log("we are over capacity");
}else if(attendance < 15){
	console.log("We still have a room.");
}else{
	console.log("we are at full capacity");
}


const car = {
	price: 1999,
	color: "red",
	numDoors: 3
};

if(car.price < 2000 && car.color=="red" && car.numDoors===4){
	console.log("Take it.");
}else{
	console.log("Keep looking.");
}


if(car.price < 2000 || (car.color=="red" && car.numDoors===4)){
	console.log("Take it.");
}else{
	console.log("Keep looking.");
}