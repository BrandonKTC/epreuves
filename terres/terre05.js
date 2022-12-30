arg1 = Number(process.argv.slice(2)[0]);
arg2 = Number(process.argv.slice(2)[1]);

function terre05(a, b) {
	if (parseInt(a / b)) {
		return `resultat: ${parseInt(a / b)}\nreste: ${a % b}`;
	} else {
		return "erreur.";
	}
}

console.log(terre05(arg1, arg2));
