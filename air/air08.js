tab = process.argv.splice(2);
arr1 = tab.slice(0, tab.indexOf("fusion"));
arr2 = tab.slice(tab.indexOf("fusion") + 1, tab.length - 1);
console.log({ arr1, arr2 });

function bubble(arr) {
	for (let i = arr.length; i > 1; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j + 1] < arr[j]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
			}
		}
	}
	return arr;
}

function air08(arr1, arr2) {
	const maxArray = [...arr1, ...arr2];
	return bubble(maxArray);
}

console.log(air08(arr1, arr2));
