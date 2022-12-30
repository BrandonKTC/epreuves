let arg = process.argv.splice(2)[0];

function terre06(arg) {
	let s = "";
	for (let i = arg.length - 1; i >= 0; i--) {
		s += arg[i];
	}
	return s;
}

console.log(terre06(arg));
