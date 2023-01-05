tab = process.argv.splice(2);
let minimum = Number(tab[tab.length - 1]);

for (let i = 0; i < tab.length - 1; i++) {
	for (let j = i + 1; j < tab.length; j++) {
		if (Math.abs(Number(tab[i]) - Number(tab[j])) < minimum) {
			minimum = Math.abs(Number(tab[i]) - Number(tab[j]));
		}
	}
}

console.log(minimum);
