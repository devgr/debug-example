window.onload = function() {
	console.log('hello world');
	function print(stringToPrint){
		console.log(stringToPrint);
		document.body.innerHTML += stringToPrint + '<br/>';
	}
	print('test');
};