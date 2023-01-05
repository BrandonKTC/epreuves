function eau14(arr) {
	//  define newStr
	let newStr = "";
	// loop over the arr to have the first element
	for (let i = 0; i < arr.length; i++) {
		// define min pour trier string
		let min = i;
		// loop over element
		for (let j = 0; j < arr.length; j++) {
			// if arr[i] (ASCII) < arr[j] (ASCII)
			if (arr.charCodeAt(i) < arr.charCodeAt(j)) {
				// changer min en j
				min = arr.charCodeAt(j);
			}
		}
		//  si min a changer ajouter arr[i] to newStr
		if (min != i) {
			newStr += String.fromCharCode(arr.charCodeAt(i));
		}
	}
	// return newStr
	return newStr;
}

console.log(eau14("AZERTY"));
