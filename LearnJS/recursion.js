

// Only change code below this line
function countdown(n){
  if(n < 1){
    return [];
  }else{
    const countArray = countdown(n-1);
    console.log(countArray);
    countArray.unshift(n);
    console.log("count array after unshift: "+countArray);
    return countArray;
  }
}
// Only change code above this line

console.log(countdown(5));



console.log("write start number to end end in array.");

function rangeOfNumbers(startNum, endNum) {

	if(startNum <= endNum){
		const arr = rangeOfNumbers(startNum+1,endNum);
		arr.unshift(startNum);
		console.log("array after push: "+arr);
		return arr;
	}else{
		return [];
	}
}

console.log(rangeOfNumbers(1,5))
