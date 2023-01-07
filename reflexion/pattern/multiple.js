// Multiple Pointers

function sumZero(arr) {
	// loop over the first array at index i
	for (let i = 0; i < arr.length - 1; i++) {
		// loop over the same array at index i + 1
		for (let j = i + 1; j < arr.length; j++) {
			// check if arr[i] + arr[j] = 0
			sum = arr[i] + arr[j];
			if (sum == 0) {
				// return new Array([i, (i+1)])
				return [arr[i], arr[j]];
			}
		}
		// return undefined if false
		return undefined;
	}
}

function sumZero2(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum == 0) {
			return [arr[left], arr[right]];
		} else if (sum <= 0) {
			left++;
		} else {
			right--;
		}
	}
}

console.log(sumZero2([-2, 0, 1, 3]));
console.log(sumZero2([1, 2, 3]));
console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
