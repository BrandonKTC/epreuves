tab = process.argv.splice(2);

function swap(arr, idx1, idx2) {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotHelper(tab, first = 0, last = tab.length - 1) {
	let pivot = tab[first];
	let idx = first;

	for (let i = first + 1; i < tab.length; i++) {
		if (pivot > tab[i]) {
			idx++;
			swap(tab, i, idx);
		}
	}
	swap(tab, first, idx);
	return idx;
}

function air12(tab, left = 0, right = tab.length - 1) {
	if (left < right) {
		let pivotIndex = pivotHelper(tab, left, right);
		air12(tab, left, pivotIndex - 1);
		air12(tab, pivotIndex + 1, right);
	}
	return tab;
}

console.log(air12(tab));
