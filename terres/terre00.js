let s = "";

function terre00() {
	for (let i = 97; i < 123; i++) {
		s += String.fromCharCode(i);
	}
	return s;
}

console.log(terre00());
