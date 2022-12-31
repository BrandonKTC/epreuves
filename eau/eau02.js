arg = process.argv.splice(2);

function eau02(arg) {
	for (let i = arg.length - 1; i >= 0; i--) {
		console.log(arg[i]);
	}
}

eau02(arg);
