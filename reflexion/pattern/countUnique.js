// Multiple Pointer

function countUniqueValues(arr) {
	// if arr.length == 0 return 0
	if (arr.length == 0) return 0;
	// initiate 3 variable (left, right, count)
	let left = 0;
	let right = arr.length - 1;
	let count = [];
	// while right != left
	while (right != left) {
		// si array countne ne contient pas l'élément de gauche ajouter élément, left++
		if (count.indexOf(arr[left]) == -1) {
			count.push(arr[left]);
			left++;
			// si array count ne contient pas l'élément de droite ajouter élément, right--
		} else if (count.indexOf(arr[right]) == -1) {
			// count.push(arr[right] == -1), right--
			count.push(arr[right]);
			right--;
			// si array count contient les éléments de gauche et droite left++, right--
		} else {
			left++;
			right--;
		}
	}
	// return count.length
	return count.length;
}

function countUniqueValues2(arr) {
	if (arr.length == 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] != arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues2([1, 1, 1, 1, 2]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
