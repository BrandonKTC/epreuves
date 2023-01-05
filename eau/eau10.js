tab = process.argv.splice(2);
last = tab[tab.length - 1];

function eau10() {
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] == last) return i;
		else return -1;
	}
}

console.log(eau10());
