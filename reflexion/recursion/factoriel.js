function factoriel(num) {
	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}

function factoriel2(num) {
	if (num == 1) return 1;

	return num * factoriel(num - 1);
}

console.log(factoriel(5));
console.log(factoriel(3));
console.log(factoriel(4));
