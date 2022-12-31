arg = process.argv.splice(2);

function eau05(arg) {
	const [first, second] = arg;
	if (!first || !second) return "error";
	return first.indexOf(second) !== -1;
}

console.log(eau05(arg));
