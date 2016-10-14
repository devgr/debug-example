function bubbleSort(array){
	var isSorted = false;
	while(!isSorted){
		isSorted = true;
		for(var i = 0; i < array.length - 1; i++){
			if(array[i] > array[i+1]){
				isSorted = false;
				swapValues(array, i, i+1);
			}
		}
	}
}

function swapValues(array, index1, index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}