const cookie = {
	name: "Chocolate Chip", //if the property does not contain any space then it can be mentioned without ""
	"isGlutenFree": true,
	"+Yummy": true,
	eatCookie: function(){
		console.log("I am eating "+this.name);
	}
};

console.log(cookie);
console.log("Name of a cookie: "+cookie.name);

const isGlutenFree = cookie.isGlutenFree;
console.log(isGlutenFree);

cookie.isGlutenFree=false;
console.log("is still gluten free? "+cookie.isGlutenFree);

// console.log("isCookieYummy: "+cookie.+Yummy);

console.log("isCookieYummy: "+cookie["+Yummy"]);

cookie.eatCookie();


//Create a class and constructor for objects.

class Cookie{
	constructor(name, isGluetenFree){
		this.name = name;
		this.isGluetenFree = isGluetenFree;
	}

	eatCookie(){
		console.log("I am eating "+this.name);
	}
}
const myCookie = new Cookie("Oatmeal Cookie",false);
console.log(myCookie);
myCookie.eatCookie();