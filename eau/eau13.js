function eau13(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			[arr[i], arr[min]] = [arr[min], arr[i]];
		}
	}
	return arr;
}

console.log(eau13([6, 5, 4, 3, 2, 1]));
