// Frequency Counter

tab1 = [1, 2, 1];
tab2 = [4, 4, 1];

function checkSquare(tab1, tab2) {
	// if tab1, tab2 not same length return false
	if (tab1.length != tab2.length) return false;
	// loop over 1st tableau
	for (let i = 0; i < tab1.length; i++) {
		// loop over the 2nd tableau
		for (let j = 0; j < tab2.length; j++) {
			// if tab1[i]**2 not in tab2 return false
			let double = tab2.indexOf(tab1[i] ** 2);
			if (double == -1) {
				return false;
			}
			tab2.splice(double, 1);
		}
		return true;
	}
	// else return true
}

console.log(checkSquare(tab1, tab2));

function same(arr1, arr2) {
	arr1.length != arr2.length && false;

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}
