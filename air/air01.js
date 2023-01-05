char = process.argv.splice(2);
sep = char[1];

function air01(char, sep) {
	if (char.length > 2) return "erreur";

	str = char[0];
	str = str.replace(sep, String.fromCharCode(126));
	console.log(str);

	const arr = [];
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) == 126) {
			arr.push(newStr);
			newStr = "";
		} else {
			newStr += str[i];
		}
	}
	if (newStr != "") arr.push(newStr);
	return arr;
}

console.log(air01(char, sep));
