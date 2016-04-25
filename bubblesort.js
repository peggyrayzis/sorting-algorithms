function bubbleSort(arr){
	var swapped;
	do {
	swapped = false;
		for(var i = 0; i < arr.length - 1; i++){
			if(sortPair(arr[i], arr[i+1])){
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
	}
	while(swapped);
	return arr;
}

function sortPair(val1,val2){
	if(val1 > val2){
		return true;
	} else {
		return false
	}
}