tab = process.argv.splice(2);

function air09(tab) {
	first = tab[0];
	for (let i = 0; i < tab.length - 1; i++) {
		tab[i] = tab[i + 1];
	}
	tab[tab.length - 1] = first;
	return tab;
}

console.log(air09(tab));
