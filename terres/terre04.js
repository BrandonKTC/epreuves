function terre04() {
	let num = Number(process.argv.slice(2)[0]);

	if (Number.isInteger(num)) {
		if (num % 2 == 0) {
			return "pair";
		} else {
			return "impair";
		}
	} else {
		return "Tu ne me la mettras pas à l'envers";
	}
}

console.log(terre04());
