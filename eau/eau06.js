char = process.argv.splice(2)[0];

function eau06(arg) {
	let s = "";
	if (!isNaN(arg)) return "error";
	for (let i = 0; i < arg.length; i++) {
		if (i % 2 == 0) s += String.fromCharCode(arg.charCodeAt(i) - 32);
		else s += arg[i];
	}
	return s;
}

console.log(eau06(char));
