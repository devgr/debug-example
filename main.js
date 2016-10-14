function print(stringToPrint){
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
	var xIntercepts = algebraMath.quadraticFormula(2, 3, -3);
	print(xIntercepts);
};
