// Divide And Conquer

function search(array, val) {
	// search the index of a given value
	let min = 0;
	let max = array.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = array[middle];

		if (array[middle] < val) {
			min = middle + 1;
		} else if (array[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}

console.log(search([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 12));
