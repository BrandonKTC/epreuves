char = process.argv.splice(2);
sep = char[char.length - 1];

function toTitle(str) {
	let title = "";
	for (let i = 0; i < str.length; i++) {
		if (i != 0) {
			title += str[i];
		} else {
			title += str[i].toUpperCase();
		}
	}
	return title;
}

function air02(char, sep) {
	let str = "";
	for (let i = 0; i < char.length; i++) {
		if (i != 0) {
			str += sep;
			str += char[i];
		} else {
			str += toTitle(char[i]);
		}
	}
	return str;
}

console.log(air02(char, sep));
