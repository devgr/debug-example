function print(stringToPrint){
	console.log(stringToPrint);
	document.body.innerHTML += stringToPrint + '<br/>';
}

window.onload = function() {
	console.log('hello world');
	print('test');
	var array = [2, 5, 3];
	bubbleSort(array);
	print(array);
};