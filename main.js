console.log('hello world');
function print(stringToPrint){
	console.log(stringToPrint);
	document.body.innerHtml += stringToPrint + '<br/>';
}
print('test');