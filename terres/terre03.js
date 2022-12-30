let s = "";

function terre03() {
	let n = Number(process.argv.slice(2)[0]);
	for (let i = n + 97; i < 123; i++) {
		s += String.fromCharCode(i);
	}
	return s;
}

console.log(terre03());
