/* RECURSION LESSONS */


function countElements(arr){
	if(arr.length){
		return 1 + countElements(arr.slice(1));
	} else{ return 0; }
}


function deepCountElements(arr){
	var count = 0; 
	for (var i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			count += deepCountElements(arr[i]);
		} else{
			count++;
		} 
	}
	return count;
}


function deepCountElementsNoLoops(arr){
	if(arr.length){
		if(Array.isArray(arr[0])){
			return deepCountElementsNoLoops(arr[0]) + deepCountElementsNoLoops(arr.slice(1));
		} else{
			return 1 + deepCountElementsNoLoops(arr.slice(1));
		}
	} else{ return 0; }
}

