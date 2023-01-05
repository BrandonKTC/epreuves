tab = process.argv.splice(2);
sep = tab[tab.length - 1];

function air05(tab, op) {
	let arr = [];
	for (let i = 0; i < tab.length - 1; i++) {
		arr.push(eval(tab[i] + op));
	}
	return arr;
}

console.log(air05(tab, sep));
