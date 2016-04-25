function split(wholeArr){
		var half = Math.ceil(wholeArr.length / 2);
		var firstHalf = wholeArr.slice(0,half);
		var secondHalf = wholeArr.slice(half);
		return [firstHalf, secondHalf];	

}

function merge(arr1, arr2) {
	console.log("arr1", arr1, "arr2", arr2)
	if (arr1.length  === 0) {
		return arr2
	}
	if (arr2.length === 0) {
		return arr1
	}
	var arr1Left = arr1[0];
	var arr2Left = arr2[0];

	if (arr1Left < arr2Left) {
		var newArr = arr1.shift()
	}
	if (arr2Left <= arr1Left) {
		var newArr = arr2.shift()
	}
	return [newArr].concat(merge(arr1, arr2))
}