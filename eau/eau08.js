const arg = process.argv.splice(2)[0];

function eau08(arg) {
	charToArray = arg.split("");
	let number = [];
	charToArray.forEach((element) =>
		number.push(element.charCodeAt() >= 49 && element.charCodeAt() <= 57)
	);

	return number.indexOf(false) == -1;
}

console.log(eau08(arg));
