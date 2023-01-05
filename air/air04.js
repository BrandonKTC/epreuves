function air04(tab) {
	if (tab.length > 1) return "erreur";

	char = tab[0];
	let testStr = "";

	for (let i = 0; i < char.length; i++) {
		if (char[i] != char[i + 1]) {
			testStr += char[i];
		}
	}
	return testStr;
}

console.log(air04(tab));
