function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length;
	let middle = Math.floor((left + right) / 2);
	while (arr[middle] != val && left <= right) {
		console.log({ left, middle, right });
		if (arr[middle] > val) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
		middle = Math.floor((left + right) / 2);
		console.log({ left, middle, right });
	}
	return arr[middle] == val ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
