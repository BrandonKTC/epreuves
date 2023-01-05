tab = process.argv.splice(2);
sep = tab[tab.length - 1];

function air06(tab, pass) {
	let arr = [];
	for (let i = 0; i < tab.length; i++) {
		if (tab[i].toLowerCase().indexOf(pass) == -1) arr.push(tab[i]);
	}
	return arr;
}

console.log(air06(tab, sep));
