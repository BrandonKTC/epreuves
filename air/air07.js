tab = process.argv.splice(2);
sep = tab[tab.length - 1];

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

function air07(tab, num) {
	tab = tab.slice(0, tab.length - 1);
	tab.push(num);
	return bubble(tab);
}

console.log(air07(tab, sep));
