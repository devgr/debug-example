function print(stringToPrint){
	console.log(stringToPrint);
	document.body.innerHTML += stringToPrint + '<br/>';
}

window.onload = function() {
	console.log('hello world');
	print('test');
};