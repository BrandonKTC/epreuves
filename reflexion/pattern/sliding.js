// Sliding Window

function maxSubarraySum(arr, n) {
	// instantiate 2 variables 1 to store the maximum value, 1 to go trough the arr
	let max = -Infinity;
	let i = 0;
	// loop over the array
	while (i < arr.length - n + 1) {
		// instantiate tempSum
		let temp = 0;
		//  loop in array until n
		for (let j = 0; j < n; j++) {
			//  find MAX nth sum in the array
			temp += arr[j + i];
			if (temp > max) {
				max = temp;
			}
			// console.log({ temp, max });
		}
		i++;
	}
	// return max
	return max;
}

function maxSubarraySum2(arr, num) {
	// find the n max sum of a given arr
	let max = 0;
	let tempSum = 0;
	// check if array is empty
	if (arr.length < num) return null;
	// loop until n and instantiate max sum to the nth first arr element
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
	tempSum = max;
	// loop over arr starting from num
	for (let i = num; i < arr.length; i++) {
		//  store the next nth element in tempSum
		tempSum = tempSum - arr[i - num] + arr[i];
		// max take the value of the max between himself and tempSum
		max = Math.max(max, tempSum);
	}
	return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6], 3));
