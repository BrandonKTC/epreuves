tab = process.argv.splice(2);

function air03(tab) {
	const memo = {};

	for (let i = 0; i < tab.length; i++) {
		// si (memo.includes(tab[i]) != true)
		if (!(tab[i] in memo)) {
			// memo[tab[i]] = (memo[tab[i]] || 0) + 1
			memo[tab[i]] = 1;
		} else {
			memo[tab[i]]++;
		}
	}
	for (const [key, value] of Object.entries(memo)) {
		if (value == 1) return key;
	}
}

console.log(air03(tab));
