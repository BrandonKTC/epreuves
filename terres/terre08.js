const arg = Number(process.argv.splice(2)[0]);

function terre08(arg) {
	if (Number.isInteger(arg) && arg > 0) {
		return Math.sqrt(arg);
	} else {
		return "erreur.";
	}
}

console.log(terre08(arg));
