const num = Number(process.argv.splice(2));

function terre09(num) {
	if (num == 0 || num == 1) return `Non, ${num} n'est pas un nombre premier.`;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return `Non, ${num} n'est pas un nombre premier.`;
		} else {
			return `Oui, ${num} est un nombre premier.`;
		}
	}
}

console.log(terre09(num));
