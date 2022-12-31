let arg = Number(process.argv.splice(2)[0]);

function addOne(arg) {
	return (arg += 1);
}

function checkPrime(arg) {
	for (let i = 2; i < arg; i++) {
		if (arg % i == 0) return false;
	}
	return true;
}

function eau04(arg) {
	if (arg <= 1) {
		return -1;
	} else if (arg >= 2) {
		arg += 1;
		while (!checkPrime(arg)) {
			arg = addOne(arg);
		}
		return arg;
	}
}

console.log(eau04(arg));
