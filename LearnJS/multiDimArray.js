var arr = [
  [1,2], [3,4], [5,6]
];

console.log("Array length: "+arr.length);


for (var i=0; i < arr.length; i++) {
	console.log("i: "+i);
  for (var j=0; j < arr[i].length; j++) {
  	console.log("j: "+j);
    console.log(arr[i][j]);
  }
}