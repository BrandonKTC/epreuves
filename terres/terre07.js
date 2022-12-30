arg = process.argv.splice(2)[0];
const char = arg.split(" ");

function terre07(char) {
	if (char.length > 1) {
		let long = char.join(" ");
		return long.length;
	} else {
		return "erreur.";
	}
}

console.log(terre07(char));
