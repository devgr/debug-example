function print(thingToPrint){
	var stringToPrint = '';
	if(typeof thingToPrint === 'object' && thingToPrint.length !== undefined){ // test if the thing is an array
		for(var i = 0; i < thingToPrint.length; i++){
			stringToPrint += thingToPrint[i] + ' ';
		}
	} else{
		stringToPrint = thingToPrint.toString();
	}
	
	console.log(stringToPrint);
	document.body.innerHTML += stringToPrint + '<br/>';
}

window.onload = function() {
	console.log('hello world');
	print('test');
	var number = simpleMath.add(2, 2);
	print(number);
	number = simpleMath.subtract(5, 3);
	print(number);

	// test out the multiply function
	number = simpleMath.multiply(3, 3);
	print(number);
	print("uh oh");
	print("this is going to cause a merge conflict");

	var array = [2, 5, 3];
	bubbleSort(array);
	print(array);
	var xIntercepts = algebraMath.quadraticFormula(2, 3, -3);
	print(xIntercepts);
};
