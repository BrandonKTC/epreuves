function eau12() {
	tab = process.argv.splice(2);
	for (let i = tab.length; i > 1; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (tab[j + 1] < tab[j]) {
				[tab[j + 1], tab[j]] = [tab[j], tab[j + 1]];
			}
		}
	}
	return tab;
}

console.log(eau12());
